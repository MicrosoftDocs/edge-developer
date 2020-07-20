---
description: Data types
title: Data types
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/06/2020
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, wpf apps, wpf, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# Win32 C++ WebView2 API Conventions  

## Async Methods

Asynchronous methods in our Win32 C++ API use a delegate interface to callback to you to indicate when the async method has completed, the success or failure code, and for some, the result of the asynchronous method. The final parameter for all asynchronous methods is a pointer to a delegate interface of which you provide an implementation.

The delegate interface has a single `Invoke` method that takes as a first parameter an `HRESULT` of the success or failure code. Additionally there may be a second parameter that is the result of the method if the method has a result. For example the method [ICoreWebView2::CapturePreview](../reference/win32/0-9-538/icorewebview2#capturepreview) takes as its final parameter an `ICoreWebView2CapturePreviewCompletedHandler` pointer. To call `CapturePreview` you provide an instance of `ICoreWebView2CapturePreviewCompletedHandler` that you implement. There is just one method to implement which is the following:

HRESULT Invoke(HRESULT result)

You implement `Invoke` and `CoreWebView2` will call your `Invoke` method when `CapturePreview` completes. The single parameter is the `HRESULT` describing the success or failure code of the `CapturePreview` call.

Or for `ICoreWebView2::ExecuteScript` you provide an instance of `ICoreWebView2ExecuteScriptCompletedHandler` which has an `Invoke` method that provides you with the success or failure code of the `ExecuteScript` call as well as the second parameter `resultObjectAsJson` which is the JSON of the result of executing the script. 

You can implement the CompleteHandler delegate interfaces directly yourself, or you can use the [WRL Callback function](https://docs.microsoft.com/cpp/cppcx/wrl/callback-function-wrl?view=vs-2019). The Callback function is used throughout our sample code:

```c++
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


## Events

Events in our Win32 C++ API use a pair of methods `add_EventName` and `remove_EventName` to subscribe and unsubscribe from events. The add method takes an event handler delegate interface and gives back an `EventRegistrationToken` as an out parameter. The remove method takes an `EventRegistrationToken` and unsubscribes the corresponding event subscription.

Event handler delegate interfaces work very similarly to the async method completed handler delegate interfaces. You implement the event handler delegate interface and `CoreWebView2` will callback whenever the event fires. Every event handler delegate interface has a single `Invoke` method that has a sender parameter followed by an event args parameter. The sender is the instance of the object on which you subscribed for events. The event args parameter is an interface that contains information about the currently firing event.

For instance the `NavigationCompleted` event on `ICoreWebView2` has two methods `ICoreWebView2::add_NavigationCompleted` and `ICoreWebView2::remove_NavigationCompleted`. When calling add you provide an instance of `ICoreWebView2NavigationCompletedEventHandler` in which you’ve implemented `Invoke`. When the `NavigationCompleted` event fires, your `Invoke` method will be called. The first parameter is the `ICoreWebView2` which is firing the `NavigationCompleted` event. The second parameter is the `ICoreWebView2NavigationCompletedEventArgs` which contains information about if the navigation completed successfully and so on.

Similarly to the async method completed handler delegate interface you can implement it yourself directly, or you can use the WRL Callback function as we do throughout our sample code:

```c++
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
                    // In most cases this isn't necessary, because the WebView will
                    // display its own error page automatically.
                }
            }
            m_toolbar->SetItemEnabled(Toolbar::Item_CancelButton, false);
            m_toolbar->SetItemEnabled(Toolbar::Item_ReloadButton, true);
            return S_OK;
        })
        .Get(),
    &m_navigationCompletedToken));
```


## Strings  

String out parameters are `LPWSTR` null-terminated strings.  The requester allocates the string using `CoTaskMemAlloc`.  Ownership is transferred to the requester and it is up to the requester to free the memory using `CoTaskMemFree`.  

String in parameters are `LPCWSTR` null-terminated strings.  The requester ensures the string is valid for the duration of the synchronous function request.  If the receiver must retain that value to some point after the function request completes, the receiver must allocate an associated copy of the string value.  

## URI and JSON parsing  

Various methods provide or accept URIs and JSON as strings.  Please use your own preferred library for parsing and generating the strings.  

If WinRT is available for your app, you may use `RuntimeClass_Windows_Data_Json_JsonObject` and `IJsonObjectStatics` methods to parse or produce JSON strings or `RuntimeClass_Windows_Foundation_Uri` and `IUriRuntimeClassFactory` methods to parse and produce URIs.  Both of methods work in Win32 apps.  

If you use `IUri` and `CreateUri` to parse URIs, you may want to use the following URI creation flags to have `CreateUri` behavior more closely match the URI parsing in the WebView.  

```json
Uri_CREATE_ALLOW_IMPLICIT_FILE_SCHEME | Uri_CREATE_NO_DECODE_EXTRA_INFO
```  

<!-- links -->  
