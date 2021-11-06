---
description: Win32 C++ WebView2 API Conventions
title: Win32 C++ WebView2 API Conventions
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/06/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, wpf apps, wpf, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---
# Win32 C++ WebView2 API conventions

Supported platforms: Win32.


<!-- ====================================================================== -->
## Prerequisites

*   Experience using the Win32 API.


<!-- ====================================================================== -->
## Async methods

Asynchronous methods in the WebView2 Win32 C++ API use a delegate interface to contact you for the following reasons.

*   The async method has completed.
*   The success or failure code.
*   The result of the asynchronous method.

The final parameter for all asynchronous methods is a pointer to a delegate interface of which you provide an implementation.

The delegate interface has a single `Invoke` method that takes as a first parameter an `HRESULT` of the success or failure code.  Additionally, there may be a second parameter that is the result of the method if the method has a result.  For example, the [ICoreWebView2::CapturePreview](/microsoft-edge/webview2/reference/win32/icorewebview2#capturepreview) method takes as the final parameter an `ICoreWebView2CapturePreviewCompletedHandler` pointer.  To send a `CapturePreview` method request, you provide an instance of the `ICoreWebView2CapturePreviewCompletedHandler` pointer that you implement.  The following code snippet uses one method to implement.

```cpp
HRESULT Invoke(HRESULT result)
```

You implement the `Invoke` method and `CoreWebView2` requests your `Invoke` method when `CapturePreview` request completes.  The single parameter is the `HRESULT` describing the success or failure code of the `CapturePreview` request.

Alternately, for `ICoreWebView2::ExecuteScript`, you provide an instance that has an `Invoke` method that provides you with the success or failure code of the `ExecuteScript` request.  Also provide the second parameter that is the JSON of the result of running the script.

You may manually implement the `CompleteHandler` delegate interfaces, or you may use the [Callback function (WRL)](/cpp/cppcx/wrl/callback-function-wrl).  The [Callback function (WRL)](/cpp/cppcx/wrl/callback-function-wrl) is used throughout the following WebView2 code snippet.

```cpp
void ScriptComponent::InjectScript()
{
    TextInputDialog dialog(
        m_appWindow->GetMainWindow(),
        L"Inject Script",
        L"Enter script code:",
        L"Enter the JavaScript code to run in the webview.",
        L"window.getComputedStyle(document.body).backgroundColor");
    if (dialog.confirmed)
    {
        m_webView->ExecuteScript(dialog.input.c_str(),
            Callback<ICoreWebView2ExecuteScriptCompletedHandler>(
                [](HRESULT error, PCWSTR result) -> HRESULT
        {
            if (error != S_OK) {
                ShowFailure(error, L"ExecuteScript failed");
            }
            MessageBox(nullptr, result, L"ExecuteScript Result", MB_OK);
            return S_OK;
        }).Get());
    }
}
```


<!-- ====================================================================== -->
## Events

Events in the WebView2 Win32 C++ API use the `add_EventName` and `remove_EventName` method pair to subscribe and unsubscribe from events.  The `add_EventName` method takes an event handler delegate interface and gives back an `EventRegistrationToken` token as an output parameter.  The `remove_EventName` method takes an `EventRegistrationToken` token and unsubscribes the corresponding event subscription.

Event handler delegate interfaces work similarly to the async method completed handler delegate interfaces.  You implement the event handler delegate interface and `CoreWebView2` sends a callback whenever the event runs.  Every event handler delegate interface has a single `Invoke` method that has a sender parameter followed by an event args parameter.  The sender is the instance of the object on which you subscribed for events.  The event args parameter is an interface that contains information about the currently firing event.

For instance, the `NavigationCompleted` event on `ICoreWebView2` has the `ICoreWebView2::add_NavigationCompleted` and `ICoreWebView2::remove_NavigationCompleted` method pair.  When you send a request, you provide an instance of `ICoreWebView2NavigationCompletedEventHandler` in which you previously implemented `Invoke` method.  When the `NavigationCompleted` event runs, your `Invoke` method is requested.  The first parameter runs the `NavigationCompleted` event.  The second parameter contains information about if the navigation completed successfully and so on.

Similar to the async method completed handler delegate interface, use one of the following actions to set it up.

*   Implement it directly.
*   Use the [Callback function (WRL)](/cpp/cppcx/wrl/callback-function-wrl) function that is used in the following WebView2 code snippet.

<!-- todo:  what is async method completed handler delegate interface?  Is there a shorter name for it?  -->

```cpp
// Register a handler for the NavigationCompleted event.
// Check whether the navigation succeeded, and if not, do something.
// Also update the Cancel buttons.
CHECK_FAILURE(m_webView->add_NavigationCompleted(
    Callback<ICoreWebView2NavigationCompletedEventHandler>(
        [this](ICoreWebView2* sender, ICoreWebView2NavigationCompletedEventArgs* args)
            -> HRESULT {
            BOOL success;
            CHECK_FAILURE(args->get_IsSuccess(&success));
            if (!success)
            {
                COREWEBVIEW2_WEB_ERROR_STATUS webErrorStatus;
                CHECK_FAILURE(args->get_WebErrorStatus(&webErrorStatus));
                if (webErrorStatus == COREWEBVIEW2_WEB_ERROR_STATUS_DISCONNECTED)
                {
                    // Do something here if you want to handle a specific error case.
                    // In most cases it is not necessary, because the WebView
                    // displays an error page automatically.
                }
            }
            m_toolbar->SetItemEnabled(Toolbar::Item_CancelButton, false);
            m_toolbar->SetItemEnabled(Toolbar::Item_ReloadButton, true);
            return S_OK;
        })
        .Get(),
    &m_navigationCompletedToken));
```


<!-- ====================================================================== -->
## Strings

String output parameters are `LPWSTR` null-terminated strings.  The requester provides the string using `CoTaskMemAlloc`.  Ownership is transferred to the requester and it is up to the requester to free the memory using `CoTaskMemFree`.

String input parameters are `LPCWSTR` null-terminated strings.  The requester ensures the string is valid for the duration of the synchronous function request.  If the receiver must store the value to some point after the function request completes, the receiver must give an associated copy of the string value.


<!-- ====================================================================== -->
## URI and JSON parsing

Various methods provide or accept URIs and JSON as strings.  Use your preferred library for parsing and generating the strings.

If WinRT is available for your app, you may use the `RuntimeClass_Windows_Data_Json_JsonObject` and `IJsonObjectStatics` methods to parse or produce JSON strings or `RuntimeClass_Windows_Foundation_Uri` and `IUriRuntimeClassFactory` methods to parse and produce URIs.  Both of methods work in Win32 apps.

If you use `IUri` and `CreateUri` to parse URIs, you may want to use the following URI creation flags to have `CreateUri` behavior more closely match the URI parsing in the WebView.

```json
Uri_CREATE_ALLOW_IMPLICIT_FILE_SCHEME | Uri_CREATE_NO_DECODE_EXTRA_INFO
```


<!-- ====================================================================== -->
## See also

*  [Get started with WebView2 in Win32 apps](../get-started/win32.md) - WebView2 Win32 C/C++.
*  [WebView2 API reference](/dotnet/api/microsoft.web.webview2.wpf.webview2)
