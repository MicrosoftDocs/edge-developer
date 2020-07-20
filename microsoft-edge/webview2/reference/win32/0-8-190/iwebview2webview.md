---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: 0.8.355 - WebView2 Win32 C++ IWebView2WebView
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/20/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge
---

# 0.8.355 - interface IWebView2WebView 

[!INCLUDE [deprecation-note](../../includes/deprecation-note.md)]

```
interface IWebView2WebView
  : public IUnknown
```

WebView2 enables you to host web content using the latest Edge web browser technology.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[get_Settings](#get_settings) | The [IWebView2Settings](IWebView2Settings.md) object contains various modifiable settings for the running WebView.
[get_Source](#get_source) | The URI of the current top level document.
[Navigate](#navigate) | Cause a navigation of the top level document to the specified URI.
[MoveFocus](#movefocus) | Move focus into WebView.
[NavigateToString](#navigatetostring) | Initiates a navigation to htmlContent as source HTML of a new document.
[add_NavigationStarting](#add_navigationstarting) | Add an event handler for the NavigationStarting event.
[remove_NavigationStarting](#remove_navigationstarting) | Remove an event handler previously added with add_NavigationStarting.
[add_DocumentStateChanged](#add_documentstatechanged) | Add an event handler for the DocumentStateChanged event.
[remove_DocumentStateChanged](#remove_documentstatechanged) | Remove an event handler previously added with add_DocumentStateChanged.
[add_NavigationCompleted](#add_navigationcompleted) | Add an event handler for the NavigationCompleted event.
[remove_NavigationCompleted](#remove_navigationcompleted) | Remove an event handler previously added with add_NavigationCompleted.
[add_FrameNavigationStarting](#add_framenavigationstarting) | Add an event handler for the FrameNavigationStarting event.
[remove_FrameNavigationStarting](#remove_framenavigationstarting) | Remove an event handler previously added with add_FrameNavigationStarting.
[add_MoveFocusRequested](#add_movefocusrequested) | Add an event handler for the MoveFocusRequested event.
[remove_MoveFocusRequested](#remove_movefocusrequested) | Remove an event handler previously added with add_MoveFocusRequested.
[add_GotFocus](#add_gotfocus) | Add an event handler for the GotFocus event.
[remove_GotFocus](#remove_gotfocus) | Remove an event handler previously added with add_GotFocus.
[add_LostFocus](#add_lostfocus) | Add an event handler for the LostFocus event.
[remove_LostFocus](#remove_lostfocus) | Remove an event handler previously added with add_LostFocus.
[add_WebResourceRequested_deprecated](#add_webresourcerequested_deprecated) | This API will be deprecated, please use the new add_WebResourceRequested API.
[remove_WebResourceRequested](#remove_webresourcerequested) | Remove an event handler previously added with add_WebResourceRequested.
[add_ScriptDialogOpening](#add_scriptdialogopening) | Add an event handler for the ScriptDialogOpening event.
[remove_ScriptDialogOpening](#remove_scriptdialogopening) | Remove an event handler previously added with add_ScriptDialogOpening.
[add_ZoomFactorChanged](#add_zoomfactorchanged) | Add an event handler for the ZoomFactorChanged event.
[remove_ZoomFactorChanged](#remove_zoomfactorchanged) | Remove an event handler previously added with add_ZoomFactorChanged.
[add_PermissionRequested](#add_permissionrequested) | Add an event handler for the PermissionRequested event.
[remove_PermissionRequested](#remove_permissionrequested) | Remove an event handler previously added with add_PermissionRequested.
[add_ProcessFailed](#add_processfailed) | Add an event handler for the ProcessFailed event.
[remove_ProcessFailed](#remove_processfailed) | Remove an event handler previously added with add_ProcessFailed.
[AddScriptToExecuteOnDocumentCreated](#addscripttoexecuteondocumentcreated) | Add the provided JavaScript to a list of scripts that should be executed after the global object has been created, but before the HTML document has been parsed and before any other script included by the HTML document is executed.
[RemoveScriptToExecuteOnDocumentCreated](#removescripttoexecuteondocumentcreated) | Remove the corresponding JavaScript added via AddScriptToExecuteOnDocumentCreated.
[ExecuteScript](#executescript) | Execute JavaScript code from the javascript parameter in the current top level document rendered in the WebView.
[CapturePreview](#capturepreview) | Capture an image of what WebView is displaying.
[Reload](#reload) | Reload the current page.
[get_Bounds](#get_bounds) | The webview bounds.
[put_Bounds](#put_bounds) | Set the Bounds property.
[get_ZoomFactor](#get_zoomfactor) | The zoom factor for the current page in the WebView.
[put_ZoomFactor](#put_zoomfactor) | Set the ZoomFactor property.
[get_IsVisible](#get_isvisible) | The IsVisible property determines whether to show or hide the webview.
[put_IsVisible](#put_isvisible) | Set the IsVisible property.
[PostWebMessageAsJson](#postwebmessageasjson) | Post the specified webMessage to the top level document in this [IWebView2WebView]().
[PostWebMessageAsString](#postwebmessageasstring) | This is a helper for posting a message that is a simple string rather than a JSON string representation of a JavaScript object.
[add_WebMessageReceived](#add_webmessagereceived) | This event fires when the IsWebMessageEnabled setting is set and the top level document of the webview calls `window.chrome.webview.postMessage`.
[remove_WebMessageReceived](#remove_webmessagereceived) | Remove an event handler previously added with add_WebMessageReceived.
[Close](#close) | Closes the webview and cleans up the underlying browser instance.
[CallDevToolsProtocolMethod](#calldevtoolsprotocolmethod) | Call an asynchronous DevToolsProtocol method.
[add_DevToolsProtocolEventReceived](#add_devtoolsprotocoleventreceived) | Subscribe to a DevToolsProtocol event.
[remove_DevToolsProtocolEventReceived](#remove_devtoolsprotocoleventreceived) | Remove an event handler previously added with add_DevToolsProtocolEventReceived.
[get_BrowserProcessId](#get_browserprocessid) | The process id of the browser process that hosts the WebView.
[get_CanGoBack](#get_cangoback) | Can navigate the webview to the previous page in the navigation history.
[get_CanGoForward](#get_cangoforward) | Can navigate the webview to the next page in the navigation history.
[GoBack](#goback) | Navigates the webview to the previous page in the navigation history.
[GoForward](#goforward) | Navigates the webview to the next page in the navigation history.
[WEBVIEW2_CAPTURE_PREVIEW_IMAGE_FORMAT](#webview2_capture_preview_image_format) | Image format used by the [IWebView2WebView::CapturePreview](#capturepreview) method.
[WEBVIEW2_SCRIPT_DIALOG_KIND](#webview2_script_dialog_kind) | Kind of JavaScript dialog used in the [IWebView2ScriptDialogOpeningEventHandler](IWebView2ScriptDialogOpeningEventHandler.md) interface.
[WEBVIEW2_PROCESS_FAILED_KIND](#webview2_process_failed_kind) | Kind of process failure used in the [IWebView2ProcessFailedEventHandler](IWebView2ProcessFailedEventHandler.md) interface.
[WEBVIEW2_PERMISSION_TYPE](#webview2_permission_type) | The type of a permission request.
[WEBVIEW2_PERMISSION_STATE](#webview2_permission_state) | Response to a permission request.
[WEBVIEW2_MOVE_FOCUS_REASON](#webview2_move_focus_reason) | Reason for moving focus.
[WEBVIEW2_WEB_ERROR_STATUS](#webview2_web_error_status) | Error status values for web navigations.
[WEBVIEW2_WEB_RESOURCE_CONTEXT](#webview2_web_resource_context) | Enum for web resource request contexts.

## Navigation events

The normal sequence of navigation events is NavigationStarting, DocumentStateChanged and then NavigationCompleted.

![dot-inline-dotgraph-1.png](media/dot-inline-dotgraph-1.png)

Note that this is for navigation events with the same NavigationId event arg. Navigations events with different NavigationId event args may overlap. For instance, if you start a navigation wait for its NavigationStarting event and then start another navigation you'll see the NavigationStarting for the first navigate followed by the NavigationStarting of the second navigate, followed by the NavigationCompleted for the first navigation and then all the rest of the appropriate navigation events for the second navigation. In error cases there may or may not be a DocumentStateChanged event depending on whether the navigation is continued to an error page. In case of an HTTP redirect, there will be multiple NavigationStarting events in a row, with ones following the first will have their IsRedirect flag set.

For subframes inside WebView, the only navigation event fired is the NavigationStarting event which gives host the ability to block subframe navigations.

## Process model

WebView2 uses the same process model as the Edge web browser. There is one Edge browser process per specified user data directory in a user session that will serve any WebView2 calling process that specifies that user data directory. This means one Edge browser process may be serving multiple calling processes and one calling process may be using multiple Edge browser processes.

![dot-inline-dotgraph-2.png](media/dot-inline-dotgraph-2.png)

Off of a browser process there will be some number of renderer processes. These are created as necessary to service potentially multiple frames in different WebViews. The number of renderer processes varies based on the site isolation browser feature and the number of distinct disconnected origins rendered in associated WebViews.

![dot-inline-dotgraph-3.png](media/dot-inline-dotgraph-3.png)

You can react to crashes and hangs in these browser and renderer processes using the ProcessFailure event.

You can safely shutdown associated browser and renderer processes using the Close method.

## Threading model

The WebView2 must be created on a UI thread. Specifically a thread with a message pump. All callbacks will occur on that thread and calls into the WebView must be done on that thread. It is not safe to use the WebView from another thread.

Callbacks including event handlers and completion handlers execute serially. That is, if you have an event handler running and begin a message loop no other event handlers or completion callbacks will begin executing reentrantly.

## Security

Always check the Source property of the WebView before using ExecuteScript, PostWebMessageAsJson, PostWebMessageAsString, or any other method to send information into the WebView. The WebView may have navigated to another page via the end user interacting with the page or script in the page causing navigation. Similarly, be very careful with AddScriptToExecuteOnDocumentCreated. All future navigations will run this script and if it provides access to information intended only for a certain origin, any HTML document may have access.

When examining the result of an ExecuteScript method call, a WebMessageReceived event, always check the Source of the sender, or any other mechanism of receiving information from an HTML document in a WebView validate the URI of the HTML document is what you expect.

When constructing a message to send into a WebView, prefer using PostWebMessageAsJson and construct the JSON string parameter using a JSON library. This will avoid any potential accidents of encoding information into a JSON string or script and ensure no attacker controlled input can modify the rest of the JSON message or run arbitrary script.

## String types

String out parameters are LPWSTR null terminated strings. The callee allocates the string using CoTaskMemAlloc. Ownership is transferred to the caller and it is up to the caller to free the memory using CoTaskMemFree.

String in parameters are LPCWSTR null terminated strings. The caller ensures the string is valid for the duration of the synchronous function call. If the callee needs to retain that value to some point after the function call completes, the callee must allocate its own copy of the string value.

## URI and JSON parsing

Various methods provide or accept URIs and JSON as strings. Please use your own preferred library for parsing and generating these strings.

If WinRT is available for your app you can use `RuntimeClass_Windows_Data_Json_JsonObject` and `IJsonObjectStatics` to parse or produce JSON strings or `RuntimeClass_Windows_Foundation_Uri` and `IUriRuntimeClassFactory` to parse and produce URIs. Both of these work in Win32 apps.

If you use IUri and CreateUri to parse URIs you may want to use the following URI creation flags to have CreateUri behavior more closely match the URI parsing in the WebView: `Uri_CREATE_ALLOW_IMPLICIT_FILE_SCHEME | Uri_CREATE_NO_DECODE_EXTRA_INFO`

## Debugging

Open DevTools with the normal shortcuts: `F12` or `Ctrl+Shift+I`. You can use the `--auto-open-devtools-for-tabs` command argument switch to have the DevTools window open immediately when first creating a WebView. See CreateWebView documentation for how to provide additional command line arguments to the browser process. Check out the LoaderOverride registry key for trying out different builds of WebView2 without modifying your application in the CreateWebView documentation.

## Versioning

After you've used a particular version of the SDK to build your app, your app may end up running with an older or newer version of installed browser binaries. Until version 1.0.0.0 of WebView2 there may be breaking changes during updates that will prevent your SDK from working with different versions of installed browser binaries. After version 1.0.0.0 different versions of the SDK can work with different versions of the installed browser by following these best practices:

To account for breaking changes to the API be sure to check for failure when calling the DLL export CreateWebView2Environment and when calling QueryInterface on any WebView2 object. A return value of E_NOINTERFACE can indicate the SDK is not compatible with the Edge browser binaries.

Checking for failure from QueryInterface will also account for cases where the SDK is newer than the version of the Edge browser and your app attempts to use an interface of which the Edge browser is unaware.

When an interface is unavailable, you can consider disabling the associated feature if possible, or otherwise informing the end user they need to update their browser.

## Members

#### get_Settings 

The [IWebView2Settings](IWebView2Settings.md) object contains various modifiable settings for the running WebView.

> public HRESULT [get_Settings](#get_settings)([IWebView2Settings](IWebView2Settings.md) ** settings)

#### get_Source 

The URI of the current top level document.

> public HRESULT [get_Source](#get_source)(LPWSTR * uri)

This value potentially changes as a part of the DocumentStateChanged event firing for some cases such as navigating to a different site or fragment navigations. It will remain the same for other types of navigations such as page reloads or history.pushState with the same URL as the current page.

```cpp
    // Register a handler for the DocumentStateChanged event.
    // This handler will read the webview's source URI and update
    // the app's address bar.
    CHECK_FAILURE(m_webView->add_DocumentStateChanged(
        Callback<IWebView2DocumentStateChangedEventHandler>(
            [this](IWebView2WebView* sender, IWebView2DocumentStateChangedEventArgs* args)
                -> HRESULT {
                wil::unique_cotaskmem_string uri;
                sender->get_Source(&uri);
                if (wcscmp(uri.get(), L"about:blank") == 0)
                {
                    uri = wil::make_cotaskmem_string(L"");
                }
                SetWindowText(m_toolbar->addressBarWindow, uri.get());

                return S_OK;
            })
            .Get(),
        &m_documentStateChangedToken));
```

#### Navigate 

Cause a navigation of the top level document to the specified URI.

> public HRESULT [Navigate](#navigate)(LPCWSTR uri)

See the navigation events for more information. Note that this starts a navigation and the corresponding NavigationStarting event will fire sometime after this Navigate call completes.

```cpp
void ControlComponent::NavigateToAddressBar()
{
    WCHAR uri[2048] = L"";
    GetWindowText(m_toolbar->addressBarWindow, uri, ARRAYSIZE(uri));
    CHECK_FAILURE(m_webView->Navigate(uri));
}
```

#### MoveFocus 

Move focus into WebView.

> public HRESULT [MoveFocus](#movefocus)([WEBVIEW2_MOVE_FOCUS_REASON](#webview2_move_focus_reason) reason)

WebView will get focus and focus will be set to correspondent element in the page hosted in the WebView. For Programmatic reason, focus is set to previously focused element or the default element if there is no previously focused element. For Next reason, focus is set to the first element. For Previous reason, focus is set to the last element. WebView can also got focus through user interaction like clicking into WebView or Tab into it. For tabbing, the app can call MoveFocus with Next or Previous to align with tab and shift+tab respectively when it decides the WebView is the next tabbable element. Or, the app can call IsDialogMessage as part of its message loop to allow the platform to auto handle tabbing. The platform will rotate through all windows with WS_TABSTOP. When the WebView gets focus from IsDialogMessage, it will internally put the focus on the first or last element for tab and shift+tab respectively.

```cpp
    while (GetMessage(&msg, nullptr, 0, 0))
    {
        if (!TranslateAccelerator(msg.hwnd, hAccelTable, &msg))
        {
            // Calling IsDialogMessage handles Tab traversal automatically. If the
            // app wants the platform to auto handle tab, then call IsDialogMessage
            // before calling TranslateMessage/DispatchMessage. If the app wants to
            // handle tabbing itself, then skip calling IsDialogMessage and call
            // TranslateMessage/DispatchMessage directly.
            if (!g_autoTabHandle || !IsDialogMessage(GetAncestor(msg.hwnd, GA_ROOT), &msg))
            {
                TranslateMessage(&msg);
                DispatchMessage(&msg);
            }
        }
    }
```

```cpp
        if (wParam == VK_TAB)
        {
            // Find out if the window is one we've customized for tab handling
            for (int i = 0; i < m_tabbableWindows.size(); i++)
            {
                if (m_tabbableWindows[i].first == hWnd)
                {
                    if (GetKeyState(VK_SHIFT) < 0)
                    {
                        TabBackwards(i);
                    }
                    else
                    {
                        TabForwards(i);
                    }
                    return true;
                }
            }
        }
```

```cpp
void ControlComponent::TabForwards(int currentIndex)
{
    // Find first enabled window after the active one
    for (int i = currentIndex + 1; i < m_tabbableWindows.size(); i++)
    {
        HWND hwnd = m_tabbableWindows.at(i).first;
        if (IsWindowEnabled(hwnd))
        {
            SetFocus(hwnd);
            return;
        }
    }
    // If this is the last enabled window, tab forwards into the WebView.
    m_webView->MoveFocus(WEBVIEW2_MOVE_FOCUS_REASON_NEXT);
}

void ControlComponent::TabBackwards(int currentIndex)
{
    // Find first enabled window before the active one
    for (int i = currentIndex - 1; i >= 0; i--)
    {
        HWND hwnd = m_tabbableWindows.at(i).first;
        if (IsWindowEnabled(hwnd))
        {
            SetFocus(hwnd);
            return;
        }
    }
    // If this is the last enabled window, tab forwards into the WebView.
    CHECK_FAILURE(m_webView->MoveFocus(WEBVIEW2_MOVE_FOCUS_REASON_PREVIOUS));
}
```

#### NavigateToString 

Initiates a navigation to htmlContent as source HTML of a new document.

> public HRESULT [NavigateToString](#navigatetostring)(LPCWSTR htmlContent)

The htmlContent parameter may not be larger than 2 MB of characters. The origin of the new page will be about:blank.

```cpp
                static const PCWSTR htmlContent =
                    L"<h1>Domain Blocked</h1>"
                    L"<p>You've attempted to navigate to a domain in the blocked "
                    L"sites list. Press back to return to the previous page.</p>";
                CHECK_FAILURE(sender->NavigateToString(htmlContent));
```

#### add_NavigationStarting 

Add an event handler for the NavigationStarting event.

> public HRESULT [add_NavigationStarting](#add_navigationstarting)([IWebView2NavigationStartingEventHandler](IWebView2NavigationStartingEventHandler.md) * eventHandler,EventRegistrationToken * token)

NavigationStarting fires when the WebView main frame is requesting permission to navigate to a different URI. This will fire for redirects as well.

```cpp
    // Register a handler for the NavigationStarting event.
    // This handler will check the domain being navigated to, and if the domain
    // matches a list of blocked sites, it will cancel the navigation and
    // possibly display a warning page.  It will also disable JavaScript on
    // selected websites.
    CHECK_FAILURE(m_webView->add_NavigationStarting(
        Callback<IWebView2NavigationStartingEventHandler>(
            [this](IWebView2WebView* sender,
                   IWebView2NavigationStartingEventArgs* args) -> HRESULT
    {
        wil::unique_cotaskmem_string uri;
        CHECK_FAILURE(args->get_Uri(&uri));

        if (ShouldBlockUri(uri.get()))
        {
            CHECK_FAILURE(args->put_Cancel(true));

            // If the user clicked a link to navigate, show a warning page.
            BOOL userInitiated;
            CHECK_FAILURE(args->get_IsUserInitiated(&userInitiated));
            if (userInitiated)
            {
                static const PCWSTR htmlContent =
                    L"<h1>Domain Blocked</h1>"
                    L"<p>You've attempted to navigate to a domain in the blocked "
                    L"sites list. Press back to return to the previous page.</p>";
                CHECK_FAILURE(sender->NavigateToString(htmlContent));
            }
        }
        // Changes to settings will apply at the next navigation, which includes the
        // navigation after a NavigationStarting event.  We can use this to change
        // settings according to what site we're visiting.
        if (ShouldBlockScriptForUri(uri.get()))
        {
            m_settings->put_IsScriptEnabled(FALSE);
        }
        else
        {
            m_settings->put_IsScriptEnabled(m_isScriptEnabled);
        }
        return S_OK;
    }).Get(), &m_navigationStartingToken));
```

#### remove_NavigationStarting 

Remove an event handler previously added with add_NavigationStarting.

> public HRESULT [remove_NavigationStarting](#remove_navigationstarting)(EventRegistrationToken token)

#### add_DocumentStateChanged 

Add an event handler for the DocumentStateChanged event.

> public HRESULT [add_DocumentStateChanged](#add_documentstatechanged)([IWebView2DocumentStateChangedEventHandler](IWebView2DocumentStateChangedEventHandler.md) * eventHandler,EventRegistrationToken * token)

DocumentStateChanged fires when new content has started loading on the webview's main frame or if a same page navigation occurs (such as through fragment navigations or history.pushState navigations). This follows the NavigationStarting event and precedes the NavigationCompleted event.

```cpp
    // Register a handler for the DocumentStateChanged event.
    // This handler will read the webview's source URI and update
    // the app's address bar.
    CHECK_FAILURE(m_webView->add_DocumentStateChanged(
        Callback<IWebView2DocumentStateChangedEventHandler>(
            [this](IWebView2WebView* sender, IWebView2DocumentStateChangedEventArgs* args)
                -> HRESULT {
                wil::unique_cotaskmem_string uri;
                sender->get_Source(&uri);
                if (wcscmp(uri.get(), L"about:blank") == 0)
                {
                    uri = wil::make_cotaskmem_string(L"");
                }
                SetWindowText(m_toolbar->addressBarWindow, uri.get());

                return S_OK;
            })
            .Get(),
        &m_documentStateChangedToken));
```

#### remove_DocumentStateChanged 

Remove an event handler previously added with add_DocumentStateChanged.

> public HRESULT [remove_DocumentStateChanged](#remove_documentstatechanged)(EventRegistrationToken token)

#### add_NavigationCompleted 

Add an event handler for the NavigationCompleted event.

> public HRESULT [add_NavigationCompleted](#add_navigationcompleted)([IWebView2NavigationCompletedEventHandler](IWebView2NavigationCompletedEventHandler.md) * eventHandler,EventRegistrationToken * token)

NavigationCompleted event fires when the WebView has completely loaded (body.onload has fired) or loading stopped with error.

```cpp
    // Register a handler for the NavigationCompleted event.
    // Check whether the navigation succeeded, and if not, do something.
    // Also update the Back, Forward, and Cancel buttons.
    CHECK_FAILURE(m_webView->add_NavigationCompleted(
        Callback<IWebView2NavigationCompletedEventHandler>(
            [this](IWebView2WebView* sender, IWebView2NavigationCompletedEventArgs* args)
                -> HRESULT {
                BOOL success;
                CHECK_FAILURE(args->get_IsSuccess(&success));
                if (!success)
                {
                    WEBVIEW2_WEB_ERROR_STATUS webErrorStatus;
                    CHECK_FAILURE(args->get_WebErrorStatus(&webErrorStatus));
                    if (webErrorStatus == WEBVIEW2_WEB_ERROR_STATUS_DISCONNECTED)
                    {
                        // Do something here if you want to handle a specific error case.
                        // In most cases this isn't necessary, because the WebView will
                        // display its own error page automatically.
                    }
                }

                BOOL canGoBack;
                BOOL canGoForward;
                sender->get_CanGoBack(&canGoBack);
                sender->get_CanGoForward(&canGoForward);
                EnableWindow(m_toolbar->backWindow, canGoBack);
                EnableWindow(m_toolbar->forwardWindow, canGoForward);
                EnableWindow(m_toolbar->cancelWindow, FALSE);
                return S_OK;
            })
            .Get(),
        &m_navigationCompletedToken));
```

#### remove_NavigationCompleted 

Remove an event handler previously added with add_NavigationCompleted.

> public HRESULT [remove_NavigationCompleted](#remove_navigationcompleted)(EventRegistrationToken token)

#### add_FrameNavigationStarting 

Add an event handler for the FrameNavigationStarting event.

> public HRESULT [add_FrameNavigationStarting](#add_framenavigationstarting)([IWebView2NavigationStartingEventHandler](IWebView2NavigationStartingEventHandler.md) * eventHandler,EventRegistrationToken * token)

FrameNavigationStarting fires when a child frame in the WebView requesting permission to navigate to a different URI. This will fire for redirects as well.

```cpp
    // Register a handler for the FrameNavigationStarting event.
    // This handler will prevent a frame from navigating to a blocked domain.
    CHECK_FAILURE(m_webView->add_FrameNavigationStarting(
        Callback<IWebView2NavigationStartingEventHandler>(
            [this](IWebView2WebView* sender,
                   IWebView2NavigationStartingEventArgs* args) -> HRESULT
    {
        wil::unique_cotaskmem_string uri;
        CHECK_FAILURE(args->get_Uri(&uri));

        if (ShouldBlockUri(uri.get()))
        {
            CHECK_FAILURE(args->put_Cancel(true));
        }
        return S_OK;
    }).Get(), &m_frameNavigationStartingToken));
```

#### remove_FrameNavigationStarting 

Remove an event handler previously added with add_FrameNavigationStarting.

> public HRESULT [remove_FrameNavigationStarting](#remove_framenavigationstarting)(EventRegistrationToken token)

#### add_MoveFocusRequested 

Add an event handler for the MoveFocusRequested event.

> public HRESULT [add_MoveFocusRequested](#add_movefocusrequested)([IWebView2MoveFocusRequestedEventHandler](IWebView2MoveFocusRequestedEventHandler.md) * eventHandler,EventRegistrationToken * token)

MoveFocusRequested fires when user tries to tab out of the WebView. The WebView's focus has not changed when this event is fired.

```cpp
    // Register a handler for the MoveFocusRequested event.
    // This event will be fired when the user tabs out of the webview.
    // The handler will focus another window in the app, depending on which
    // direction the focus is being shifted.
    CHECK_FAILURE(m_webView->add_MoveFocusRequested(
        Callback<IWebView2MoveFocusRequestedEventHandler>(
            [this](IWebView2WebView* sender, IWebView2MoveFocusRequestedEventArgs* args)
                -> HRESULT {
                if (!g_autoTabHandle)
                {
                    WEBVIEW2_MOVE_FOCUS_REASON reason;
                    CHECK_FAILURE(args->get_Reason(&reason));

                    if (reason == WEBVIEW2_MOVE_FOCUS_REASON_NEXT)
                    {
                        TabForwards(-1);
                    }
                    else if (reason == WEBVIEW2_MOVE_FOCUS_REASON_PREVIOUS)
                    {
                        TabBackwards(int(m_tabbableWindows.size()));
                    }
                    CHECK_FAILURE(args->put_Handled(TRUE));
                }
                return S_OK;
            })
            .Get(),
        &m_moveFocusRequestedToken));
```

#### remove_MoveFocusRequested 

Remove an event handler previously added with add_MoveFocusRequested.

> public HRESULT [remove_MoveFocusRequested](#remove_movefocusrequested)(EventRegistrationToken token)

#### add_GotFocus 

Add an event handler for the GotFocus event.

> public HRESULT [add_GotFocus](#add_gotfocus)([IWebView2FocusChangedEventHandler](IWebView2FocusChangedEventHandler.md) * eventHandler,EventRegistrationToken * token)

GotFocus fires when WebView got focus.

#### remove_GotFocus 

Remove an event handler previously added with add_GotFocus.

> public HRESULT [remove_GotFocus](#remove_gotfocus)(EventRegistrationToken token)

#### add_LostFocus 

Add an event handler for the LostFocus event.

> public HRESULT [add_LostFocus](#add_lostfocus)([IWebView2FocusChangedEventHandler](IWebView2FocusChangedEventHandler.md) * eventHandler,EventRegistrationToken * token)

LostFocus fires when WebView lost focus. In the case where MoveFocusRequested event is fired, the focus is still on WebView when MoveFocusRequested event fires. Lost focus only fires afterwards when app's code or default action of MoveFocusRequested event set focus away from WebView.

#### remove_LostFocus 

Remove an event handler previously added with add_LostFocus.

> public HRESULT [remove_LostFocus](#remove_lostfocus)(EventRegistrationToken token)

#### add_WebResourceRequested_deprecated 

This API will be deprecated, please use the new add_WebResourceRequested API.

> public HRESULT [add_WebResourceRequested_deprecated](#add_webresourcerequested_deprecated)(LPCWSTR *const urlFilter,[WEBVIEW2_WEB_RESOURCE_CONTEXT](#webview2_web_resource_context) *const resourceContextFilter,SIZE_T filterLength,[IWebView2WebResourceRequestedEventHandler](IWebView2WebResourceRequestedEventHandler.md) * eventHandler,EventRegistrationToken * token)

Add an event handler for the WebResourceRequested event. Fires when the WebView has performs any HTTP request. Use urlFilter to pass in a list with size filterLength of urls to listen for. Each url entry also supports wildcards: '*' matches zero or more characters, and '?' matches exactly one character. For each urlFilter entry, provide a matching resourceContextFilter representing the types of resources for which WebResourceRequested should fire. If filterLength is 0, the event will fire for all network requests. The supported resource contexts are: Document, Stylesheet, Image, Media, Font, Script, XHR, Fetch.

```cpp
        if (m_blockImages)
        {
            m_webView->AddWebResourceRequestedFilter(L"*", WEBVIEW2_WEB_RESOURCE_CONTEXT_IMAGE);
            CHECK_FAILURE(m_webView->add_WebResourceRequested(
                Callback<IWebView2WebResourceRequestedEventHandler>(
                    [this](
                        IWebView2WebView* sender,
                        IWebView2WebResourceRequestedEventArgs* args) {
                        wil::com_ptr<IWebView2WebResourceRequestedEventArgs2>
                            webResourceEventArgs2;
                        args->QueryInterface(IID_PPV_ARGS(&webResourceEventArgs2));
                        WEBVIEW2_WEB_RESOURCE_CONTEXT resourceContext;
                        CHECK_FAILURE(
                            webResourceEventArgs2->get_ResourceContext(&resourceContext));
                        // Ensure that the type is image
                        if (resourceContext != WEBVIEW2_WEB_RESOURCE_CONTEXT_IMAGE)
                        {
                            return E_INVALIDARG;
                        }
                        // Override the response with an empty one to block the image.
                        // If put_Response is not called, the request will continue as normal.
                        wil::com_ptr<IWebView2WebResourceResponse> response;
                        CHECK_FAILURE(m_webViewEnvironment->CreateWebResourceResponse(
                            nullptr, 403 /*NoContent*/, L"Blocked", L"", &response));
                        CHECK_FAILURE(args->put_Response(response.get()));
                        return S_OK;
                    })
                    .Get(),
                &m_webResourceRequestedTokenForImageBlocking));
        }
        else
        {
            CHECK_FAILURE(m_webView->remove_WebResourceRequested(
                m_webResourceRequestedTokenForImageBlocking));
        }
```

#### remove_WebResourceRequested 

Remove an event handler previously added with add_WebResourceRequested.

> public HRESULT [remove_WebResourceRequested](#remove_webresourcerequested)(EventRegistrationToken token)

#### add_ScriptDialogOpening 

Add an event handler for the ScriptDialogOpening event.

> public HRESULT [add_ScriptDialogOpening](#add_scriptdialogopening)([IWebView2ScriptDialogOpeningEventHandler](IWebView2ScriptDialogOpeningEventHandler.md) * eventHandler,EventRegistrationToken * token)

The event fires when a JavaScript dialog (alert, confirm, or prompt) will show for the webview. This event only fires if the IWebView2Settings::AreDefaultScriptDialogsEnabled property is set to false.

```cpp
    // Register a handler for the ScriptDialogOpening event.
    // This handler will set up a custom prompt dialog for the user,
    // and may defer the event if the setting to defer dialogs is enabled.
    CHECK_FAILURE(m_webView->add_ScriptDialogOpening(
        Callback<IWebView2ScriptDialogOpeningEventHandler>(
            [this](
                IWebView2WebView* sender,
                IWebView2ScriptDialogOpeningEventArgs* args) -> HRESULT
    {
        wil::com_ptr<IWebView2ScriptDialogOpeningEventArgs> eventArgs = args;
        auto showDialog = [this, eventArgs]
        {
            wil::unique_cotaskmem_string uri;
            WEBVIEW2_SCRIPT_DIALOG_KIND type;
            wil::unique_cotaskmem_string message;
            wil::unique_cotaskmem_string defaultText;

            CHECK_FAILURE(eventArgs->get_Uri(&uri));
            CHECK_FAILURE(eventArgs->get_Kind(&type));
            CHECK_FAILURE(eventArgs->get_Message(&message));
            CHECK_FAILURE(eventArgs->get_DefaultText(&defaultText));

            std::wstring promptString = std::wstring(L"The page at '")
                + uri.get() + L"' says:";
            TextInputDialog dialog(
                m_appWindow->GetMainWindow(),
                L"Script Dialog",
                promptString.c_str(),
                message.get(),
                defaultText.get(),
                /* readonly */ type != WEBVIEW2_SCRIPT_DIALOG_KIND_PROMPT);
            if (dialog.confirmed)
            {
                CHECK_FAILURE(eventArgs->put_ResultText(dialog.input.c_str()));
                CHECK_FAILURE(eventArgs->Accept());
            }
        };

        if (m_deferScriptDialogs)
        {
            wil::com_ptr<IWebView2Deferral> deferral;
            CHECK_FAILURE(args->GetDeferral(&deferral));
            m_completeDeferredDialog = [showDialog, deferral]
            {
                showDialog();
                CHECK_FAILURE(deferral->Complete());
            };
        }
        else
        {
            showDialog();
        }

        return S_OK;
    }).Get(), &m_scriptDialogOpeningToken));
```

#### remove_ScriptDialogOpening 

Remove an event handler previously added with add_ScriptDialogOpening.

> public HRESULT [remove_ScriptDialogOpening](#remove_scriptdialogopening)(EventRegistrationToken token)

#### add_ZoomFactorChanged 

Add an event handler for the ZoomFactorChanged event.

> public HRESULT [add_ZoomFactorChanged](#add_zoomfactorchanged)([IWebView2ZoomFactorChangedEventHandler](IWebView2ZoomFactorChangedEventHandler.md) * eventHandler,EventRegistrationToken * token)

The event fires when the ZoomFactor property of the WebView changes. The event could fire because the caller modified the ZoomFactor property, or due to the user manually modifying the zoom. When it is modified by the caller via the ZoomFactor property, the internal zoom factor is updated immediately and there will be no ZoomFactorChanged event. WebView associates the last used zoom factor for each site. Therefore, it is possible for the zoom factor to change when navigating to a different page. When the zoom factor changes due to this, the ZoomFactorChanged event fires right after the DocumentStateChanged event.

```cpp
    // Register a handler for the ZoomFactorChanged event.
    // This handler just announces the new level of zoom on the window's title bar.
    CHECK_FAILURE(m_webView->add_ZoomFactorChanged(
        Callback<IWebView2ZoomFactorChangedEventHandler>(
            [this](IWebView2WebView* sender, IUnknown* args) -> HRESULT {
                double zoomFactor;
                CHECK_FAILURE(sender->get_ZoomFactor(&zoomFactor));

                std::wstring message = L"WebView2APISample (Zoom: " +
                                       std::to_wstring(int(zoomFactor * 100)) + L"%)";
                SetWindowText(m_appWindow->GetMainWindow(), message.c_str());
                return S_OK;
            })
            .Get(),
        &m_zoomFactorChangedToken));
```

#### remove_ZoomFactorChanged 

Remove an event handler previously added with add_ZoomFactorChanged.

> public HRESULT [remove_ZoomFactorChanged](#remove_zoomfactorchanged)(EventRegistrationToken token)

#### add_PermissionRequested 

Add an event handler for the PermissionRequested event.

> public HRESULT [add_PermissionRequested](#add_permissionrequested)([IWebView2PermissionRequestedEventHandler](IWebView2PermissionRequestedEventHandler.md) * eventHandler,EventRegistrationToken * token)

Fires when content in a WebView requests permission to access some privileged resources.

```cpp
    // Register a handler for the PermissionRequested event.
    // This handler prompts the user to allow or deny the request.
    CHECK_FAILURE(m_webView->add_PermissionRequested(
        Callback<IWebView2PermissionRequestedEventHandler>(
            [this](
                IWebView2WebView* sender,
                IWebView2PermissionRequestedEventArgs* args) -> HRESULT
    {
        wil::unique_cotaskmem_string uri;
        WEBVIEW2_PERMISSION_TYPE type = WEBVIEW2_PERMISSION_TYPE_UNKNOWN_PERMISSION;
        BOOL userInitiated = FALSE;

        CHECK_FAILURE(args->get_Uri(&uri));
        CHECK_FAILURE(args->get_PermissionType(&type));
        CHECK_FAILURE(args->get_IsUserInitiated(&userInitiated));

        std::wstring message = L"Do you want to grant permission for ";
        message += NameOfPermissionType(type);
        message += L" to the website at ";
        message += uri.get();
        message += L"?\n\n";
        message += (userInitiated
            ? L"This request came from a user gesture."
            : L"This request did not come from a user gesture.");

        int response = MessageBox(nullptr, message.c_str(), L"Permission Request",
                                   MB_YESNOCANCEL | MB_ICONWARNING);

        WEBVIEW2_PERMISSION_STATE state =
              response == IDYES ? WEBVIEW2_PERMISSION_STATE_ALLOW
            : response == IDNO  ? WEBVIEW2_PERMISSION_STATE_DENY
            :                     WEBVIEW2_PERMISSION_STATE_DEFAULT;
        CHECK_FAILURE(args->put_State(state));

        return S_OK;
    }).Get(), &m_permissionRequestedToken));
```

#### remove_PermissionRequested 

Remove an event handler previously added with add_PermissionRequested.

> public HRESULT [remove_PermissionRequested](#remove_permissionrequested)(EventRegistrationToken token)

#### add_ProcessFailed 

Add an event handler for the ProcessFailed event.

> public HRESULT [add_ProcessFailed](#add_processfailed)([IWebView2ProcessFailedEventHandler](IWebView2ProcessFailedEventHandler.md) * eventHandler,EventRegistrationToken * token)

Fires when a WebView process terminated unexpectedly or become unresponsive.

```cpp
    // Register a handler for the ProcessFailed event.
    // This handler checks if the browser process failed, and asks the user if
    // they want to recreate the webview.
    CHECK_FAILURE(m_webView->add_ProcessFailed(
        Callback<IWebView2ProcessFailedEventHandler>(
            [this](IWebView2WebView* sender,
                IWebView2ProcessFailedEventArgs* args) -> HRESULT
    {
        WEBVIEW2_PROCESS_FAILED_KIND failureType;
        CHECK_FAILURE(args->get_ProcessFailedKind(&failureType));
        if (failureType == WEBVIEW2_PROCESS_FAILED_KIND_BROWSER_PROCESS_EXITED)
        {
            int button = MessageBox(
                m_appWindow->GetMainWindow(),
                L"Browser process exited unexpectedly.  Recreate webview?",
                L"Browser process exited",
                MB_YESNO);
            if (button == IDYES)
            {
                m_appWindow->ReinitializeWebView();
            }
        }
        return S_OK;
    }).Get(), &m_processFailedToken));
```

#### remove_ProcessFailed 

Remove an event handler previously added with add_ProcessFailed.

> public HRESULT [remove_ProcessFailed](#remove_processfailed)(EventRegistrationToken token)

#### AddScriptToExecuteOnDocumentCreated 

Add the provided JavaScript to a list of scripts that should be executed after the global object has been created, but before the HTML document has been parsed and before any other script included by the HTML document is executed.

> public HRESULT [AddScriptToExecuteOnDocumentCreated](#addscripttoexecuteondocumentcreated)(LPCWSTR javaScript,[IWebView2AddScriptToExecuteOnDocumentCreatedCompletedHandler](IWebView2AddScriptToExecuteOnDocumentCreatedCompletedHandler.md) * handler)

The injected script will apply to all future top level document and child frame navigations until removed with RemoveScriptToExecuteOnDocumentCreated. This is applied asynchronously and you must wait for the completion handler to run before you can be sure that the script is ready to execute on future navigations.

Note that if an HTML document has sandboxing of some kind via [sandbox](https://developer.mozilla.org/docs/Web/HTML/Element/iframe#attr-sandbox) properties or the [Content-Security-Policy HTTP header](https://developer.mozilla.org/docs/Web/HTTP/Headers/Content-Security-Policy) this will affect the script run here. So, for example, if the 'allow-modals' keyword is not set then calls to the `alert` function will be ignored.

```cpp
// Prompt the user for some script and register it to execute whenever a new page loads.
void ScriptComponent::AddInitializeScript()
{
    TextInputDialog dialog(
        m_appWindow->GetMainWindow(),
        L"Add Initialize Script",
        L"Initialization Script:",
        L"Enter the JavaScript code to run as the initialization script that "
            L"runs before any script in the HTML document.",
    // This example script stops child frames from opening new windows.  Because
    // the initialization script runs before any script in the HTML document, we
    // can trust the results of our checks on window.parent and window.top.
        L"if (window.parent !== window.top) {\r\n"
        L"    delete window.open;\r\n"
        L"}");
    if (dialog.confirmed)
    {
        m_webView->AddScriptToExecuteOnDocumentCreated(
            dialog.input.c_str(),
            Callback<IWebView2AddScriptToExecuteOnDocumentCreatedCompletedHandler>(
                [this](HRESULT error, PCWSTR id) -> HRESULT
        {
            m_lastInitializeScriptId = id;
            MessageBox(nullptr, id, L"AddScriptToExecuteOnDocumentCreated Id", MB_OK);
            return S_OK;
        }).Get());

    }
}
```

#### RemoveScriptToExecuteOnDocumentCreated 

Remove the corresponding JavaScript added via AddScriptToExecuteOnDocumentCreated.

> public HRESULT [RemoveScriptToExecuteOnDocumentCreated](#removescripttoexecuteondocumentcreated)(LPCWSTR id)

#### ExecuteScript 

Execute JavaScript code from the javascript parameter in the current top level document rendered in the WebView.

> public HRESULT [ExecuteScript](#executescript)(LPCWSTR javaScript,[IWebView2ExecuteScriptCompletedHandler](IWebView2ExecuteScriptCompletedHandler.md) * handler)

This will execute asynchronously and when complete, if a handler is provided in the ExecuteScriptCompletedHandler parameter, its Invoke method will be called with the result of evaluating the provided JavaScript. The result value is a JSON encoded string. If the result is undefined, contains a reference cycle, or otherwise cannot be encoded into JSON, the JSON null value will be returned as the string 'null'. Note that a function that has no explicit return value returns undefined. If the executed script throws an unhandled exception, then the result is also 'null'. This method is applied asynchronously. If the call is made while the webview is on one document, and a navigation occurs after the call is made but before the JavaScript is executed, then the script will not be executed and the handler will be called with E_FAIL for its errorCode parameter. ExecuteScript will work even if IsScriptEnabled is set to FALSE.

```cpp
// Prompt the user for some script and then execute it.
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
            Callback<IWebView2ExecuteScriptCompletedHandler>(
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

#### CapturePreview 

Capture an image of what WebView is displaying.

> public HRESULT [CapturePreview](#capturepreview)([WEBVIEW2_CAPTURE_PREVIEW_IMAGE_FORMAT](#webview2_capture_preview_image_format) imageFormat,IStream * imageStream,[IWebView2CapturePreviewCompletedHandler](IWebView2CapturePreviewCompletedHandler.md) * handler)

Specify the format of the image with the imageFormat parameter. The resulting image binary data is written to the provided imageStream parameter. When CapturePreview finishes writing to the stream, the Invoke method on the provided handler parameter is called.

```cpp
// Show the user a file selection dialog, then save a screenshot of the WebView
// to the selected file.
void FileComponent::SaveScreenshot()
{
    OPENFILENAME openFileName = {};
    openFileName.lStructSize = sizeof(openFileName);
    openFileName.hwndOwner = nullptr;
    openFileName.hInstance = nullptr;
    WCHAR fileName[MAX_PATH] = L"WebView2_Screenshot.png";
    openFileName.lpstrFile = fileName;
    openFileName.lpstrFilter = L"PNG File\0*.png\0";
    openFileName.nMaxFile = ARRAYSIZE(fileName);
    openFileName.Flags = OFN_OVERWRITEPROMPT;

    if (GetSaveFileName(&openFileName))
    {
        wil::com_ptr<IStream> stream;
        CHECK_FAILURE(SHCreateStreamOnFileEx(
            fileName, STGM_READWRITE | STGM_CREATE, FILE_ATTRIBUTE_NORMAL, TRUE, nullptr,
            &stream));

        HWND mainWindow = m_appWindow->GetMainWindow();

        CHECK_FAILURE(m_webView->CapturePreview(
            WEBVIEW2_CAPTURE_PREVIEW_IMAGE_FORMAT_PNG, stream.get(),
            Callback<IWebView2CapturePreviewCompletedHandler>(
                [mainWindow](HRESULT error_code) -> HRESULT {
                    CHECK_FAILURE(error_code);

                    MessageBox(mainWindow, L"Preview Captured", L"Preview Captured", MB_OK);
                    return S_OK;
                })
                .Get()));
    }
}
```

#### Reload 

Reload the current page.

> public HRESULT [Reload](#reload)()

This is similar to navigating to the URI of current top level document including all navigation events firing and respecting any entries in the HTTP cache. But, the back/forward history will not be modified.

#### get_Bounds 

The webview bounds.

> public HRESULT [get_Bounds](#get_bounds)(RECT * bounds)

Bounds are relative to the parent HWND. The app has two ways it can position a WebView:

1. Create a child HWND that is the WebView parent HWND. Position this window where the WebView should be. In this case, use (0, 0) for the WebView's Bound's top left corner (the offset).

1. Use the app's top most window as the WebView parent HWND. Set the WebView's Bound's top left corner so that the WebView is positioned correctly in the app. The Bound's values are in the host's coordinate space.

#### put_Bounds 

Set the Bounds property.

> public HRESULT [put_Bounds](#put_bounds)(RECT bounds)

```cpp
// Update the bounds of the WebView window to fit available space.
void ViewComponent::ResizeWebView()
{
    RECT desiredBounds = m_webViewBounds;
    desiredBounds.bottom = LONG(
        (m_webViewBounds.bottom - m_webViewBounds.top) * m_webViewRatio + m_webViewBounds.top);
    desiredBounds.right = LONG(
        (m_webViewBounds.right - m_webViewBounds.left) * m_webViewRatio + m_webViewBounds.left);

    m_webView->put_Bounds(desiredBounds);
}
```

#### get_ZoomFactor 

The zoom factor for the current page in the WebView.

> public HRESULT [get_ZoomFactor](#get_zoomfactor)(double * zoomFactor)

The zoom factor is persisted per site. Note that changing zoom factor could cause `window.innerWidth/innerHeight` and page layout to change. When WebView navigates to a page from a different site, the zoom factor set for the previous page will not be applied. If the app wants to set the zoom factor for a certain page, the earliest place to do it is in the DocumentStateChanged event handler. Note that if it does that, it might receive a ZoomFactorChanged event for the persisted zoom factor before receiving the ZoomFactorChanged event for the specified zoom factor. Specifying a zoomFactor less than or equal to 0 is not allowed. WebView also has an internal supported zoom factor range. When a specified zoom factor is out of that range, it will be normalized to be within the range, and a ZoomFactorChanged event will be fired for the real applied zoom factor. When this range normalization happens, the ZoomFactor property will report the zoom factor specified during the previous modification of the ZoomFactor property until the ZoomFactorChanged event is received after webview applies the normalized zoom factor.

#### put_ZoomFactor 

Set the ZoomFactor property.

> public HRESULT [put_ZoomFactor](#put_zoomfactor)(double zoomFactor)

#### get_IsVisible 

The IsVisible property determines whether to show or hide the webview.

> public HRESULT [get_IsVisible](#get_isvisible)(BOOL * isVisible)

If IsVisible is set to false, the webview will be transparent and will not be rendered. However, this will not affect the window containing the webview (the HWND parameter that was passed to CreateWebView). If you want that window to disappear too, call ShowWindow on it directly in addition to modifying the IsVisible property. WebView as a child window won't get window messages when the top window is minimized or restored. For performance reason, developer should set IsVisible property of the WebView to false when the app window is minimized and back to true when app window is restored. App window can do this by handling SC_MINIMIZE and SC_RESTORE command upon receiving WM_SYSCOMMAND message.

```cpp
void ViewComponent::ToggleVisibility()
{
    BOOL visible;
    m_webView->get_IsVisible(&visible);
    m_isVisible = !visible;
    m_webView->put_IsVisible(m_isVisible);
}
```

#### put_IsVisible 

Set the IsVisible property.

> public HRESULT [put_IsVisible](#put_isvisible)(BOOL isVisible)

```cpp
    if (message == WM_SYSCOMMAND)
    {
        if (wParam == SC_MINIMIZE)
        {
            // Hide the webview when the app window is minimized.
            m_webView->put_IsVisible(FALSE);
        }
        else if (wParam == SC_RESTORE)
        {
            // When the app window is restored, show the webview
            // (unless the user has toggle visibility off).
            if (m_isVisible)
            {
                m_webView->put_IsVisible(TRUE);
            }
        }
    }
```

#### PostWebMessageAsJson 

Post the specified webMessage to the top level document in this [IWebView2WebView]().

> public HRESULT [PostWebMessageAsJson](#postwebmessageasjson)(LPCWSTR webMessageAsJson)

The top level document's window.chrome.webview's message event fires. JavaScript in that document may subscribe and unsubscribe to the event via the following: 

```cpp
window.chrome.webview.addEventListener('message', handler)
window.chrome.webview.removeEventListener('message', handler)
```

 The event args is an instance of `MessageEvent`. The IWebView2Settings::IsWebMessageEnabled setting must be true or this method will fail with E_INVALIDARG. The event arg's data property is the webMessage string parameter parsed as a JSON string into a JavaScript object. The event arg's source property is a reference to the `window.chrome.webview` object. See SetWebMessageReceivedEventHandler for information on sending messages from the HTML document in the webview to the host. This message is sent asynchronously. If a navigation occurs before the message is posted to the page, then the message will not be sent.

```cpp
    // Setup the web message received event handler before navigating to
    // ensure we don't miss any messages.
    CHECK_FAILURE(m_webView->add_WebMessageReceived(
        Microsoft::WRL::Callback<IWebView2WebMessageReceivedEventHandler>(
            [this](IWebView2WebView* sender, IWebView2WebMessageReceivedEventArgs* args)
    {
        wil::unique_cotaskmem_string uri;
        CHECK_FAILURE(args->get_Source(&uri));

        // Always validate that the origin of the message is what you expect.
        if (uri.get() != m_sampleUri)
        {
            return S_OK;
        }
        wil::unique_cotaskmem_string messageRaw;
        CHECK_FAILURE(args->get_WebMessageAsString(&messageRaw));
        std::wstring message = messageRaw.get();

        if (message.compare(0, 13, L"SetTitleText ") == 0)
        {
            m_appWindow->SetTitleText(message.substr(13).c_str());
        }
        else if (message.compare(L"GetWindowBounds") == 0)
        {
            RECT bounds = m_appWindow->GetWindowBounds();
            std::wstring reply =
                L"{\"WindowBounds\":\"Left:" + std::to_wstring(bounds.left)
                + L"\\nTop:" + std::to_wstring(bounds.top)
                + L"\\nRight:" + std::to_wstring(bounds.right)
                + L"\\nBottom:" + std::to_wstring(bounds.bottom)
                + L"\"}";
            CHECK_FAILURE(sender->PostWebMessageAsJson(reply.c_str()));
        }
        return S_OK;
    }).Get(), &m_webMessageReceivedToken));
```

#### PostWebMessageAsString 

This is a helper for posting a message that is a simple string rather than a JSON string representation of a JavaScript object.

> public HRESULT [PostWebMessageAsString](#postwebmessageasstring)(LPCWSTR webMessageAsString)

This behaves in exactly the same manner as PostWebMessageAsJson but the `window.chrome.webview` message event arg's data property will be a string with the same value as webMessageAsString. Use this instead of PostWebMessageAsJson if you want to communicate via simple strings rather than JSON objects.

#### add_WebMessageReceived 

This event fires when the IsWebMessageEnabled setting is set and the top level document of the webview calls `window.chrome.webview.postMessage`.

> public HRESULT [add_WebMessageReceived](#add_webmessagereceived)([IWebView2WebMessageReceivedEventHandler](IWebView2WebMessageReceivedEventHandler.md) * handler,EventRegistrationToken * token)

The postMessage function is `void postMessage(object)` where object is any object supported by JSON conversion.

```cpp
        window.chrome.webview.addEventListener('message', arg => {
            if ("SetColor" in arg.data) {
                document.getElementById("colorable").style.color = arg.data.SetColor;
            }
            if ("WindowBounds" in arg.data) {
                document.getElementById("window-bounds").value = arg.data.WindowBounds;
            }
        });

        function SetTitleText() {
            let titleText = document.getElementById("title-text");
            window.chrome.webview.postMessage(`SetTitleText ${titleText.value}`);
        }
        function GetWindowBounds() {
            window.chrome.webview.postMessage("GetWindowBounds");
        }
```

 When postMessage is called, the [IWebView2WebMessageReceivedEventHandler](IWebView2WebMessageReceivedEventHandler.md) set via this SetWebMessageReceivedEventHandler method will be invoked with the postMessage's object parameter converted to a JSON string.

```cpp
    // Setup the web message received event handler before navigating to
    // ensure we don't miss any messages.
    CHECK_FAILURE(m_webView->add_WebMessageReceived(
        Microsoft::WRL::Callback<IWebView2WebMessageReceivedEventHandler>(
            [this](IWebView2WebView* sender, IWebView2WebMessageReceivedEventArgs* args)
    {
        wil::unique_cotaskmem_string uri;
        CHECK_FAILURE(args->get_Source(&uri));

        // Always validate that the origin of the message is what you expect.
        if (uri.get() != m_sampleUri)
        {
            return S_OK;
        }
        wil::unique_cotaskmem_string messageRaw;
        CHECK_FAILURE(args->get_WebMessageAsString(&messageRaw));
        std::wstring message = messageRaw.get();

        if (message.compare(0, 13, L"SetTitleText ") == 0)
        {
            m_appWindow->SetTitleText(message.substr(13).c_str());
        }
        else if (message.compare(L"GetWindowBounds") == 0)
        {
            RECT bounds = m_appWindow->GetWindowBounds();
            std::wstring reply =
                L"{\"WindowBounds\":\"Left:" + std::to_wstring(bounds.left)
                + L"\\nTop:" + std::to_wstring(bounds.top)
                + L"\\nRight:" + std::to_wstring(bounds.right)
                + L"\\nBottom:" + std::to_wstring(bounds.bottom)
                + L"\"}";
            CHECK_FAILURE(sender->PostWebMessageAsJson(reply.c_str()));
        }
        return S_OK;
    }).Get(), &m_webMessageReceivedToken));
```

#### remove_WebMessageReceived 

Remove an event handler previously added with add_WebMessageReceived.

> public HRESULT [remove_WebMessageReceived](#remove_webmessagereceived)(EventRegistrationToken token)

#### Close 

Closes the webview and cleans up the underlying browser instance.

> public HRESULT [Close](#close)()

Cleaning up the browser instace will release the resources powering the webview. The browser instance will be shut down if there are no other webviews using it.

After calling Close, all method calls will fail and event handlers will stop firing. Specifically, the WebView will release its references to its event handlers when Close is called.

Close is implicitly called when the WebView loses its final reference and is destructed. But it is best practice to explicitly call Close to avoid any accidental cycle of references between the WebView and the app code. Specifically, if you capture a reference to the WebView in an event handler you will create a reference cycle between the WebView and the event handler. Close will break this cycle by releasing all event handlers. But to avoid this situation it is best practice to both explicitly call Close on the WebView and to not capture a reference to the WebView to ensure the WebView can be cleaned up correctly.

```cpp
// Close the WebView and deinitialize related state. This doesn't close the app window.
void AppWindow::CloseWebView()
{
    DeleteAllComponents();
    if (m_webView)
    {
        m_webView->Close();
        m_webView = nullptr;
    }
    m_webViewEnvironment = nullptr;
}
```

#### CallDevToolsProtocolMethod 

Call an asynchronous DevToolsProtocol method.

> public HRESULT [CallDevToolsProtocolMethod](#calldevtoolsprotocolmethod)(LPCWSTR methodName,LPCWSTR parametersAsJson,[IWebView2CallDevToolsProtocolMethodCompletedHandler](IWebView2CallDevToolsProtocolMethodCompletedHandler.md) * handler)

See the [DevTools Protocol Viewer](https://aka.ms/DevToolsProtocolDocs) for a list and description of available methods. The methodName parameter is the full name of the method in the format `{domain}.{method}`. The parametersAsJson parameter is a JSON formatted string containing the parameters for the corresponding method. The handler's Invoke method will be called when the method asynchronously completes. Invoke will be called with the method's return object as a JSON string.

```cpp
// Prompt the user for the name and parameters of a CDP method, then call it.
void ScriptComponent::CallCdpMethod()
{
    TextInputDialog dialog(
        m_appWindow->GetMainWindow(),
        L"Call CDP Method",
        L"CDP method name:",
        L"Enter the CDP method name to call, followed by a space,\r\n"
            L"followed by the parameters in JSON format.",
        L"Runtime.evaluate {\"expression\":\"alert(\\\"test\\\")\"}");
    if (dialog.confirmed)
    {
        size_t delimiterPos = dialog.input.find(L' ');
        std::wstring methodName = dialog.input.substr(0, delimiterPos);
        std::wstring methodParams =
            (delimiterPos < dialog.input.size()
                ? dialog.input.substr(delimiterPos + 1)
                : L"{}");

        m_webView->CallDevToolsProtocolMethod(
            methodName.c_str(),
            methodParams.c_str(),
            Callback<IWebView2CallDevToolsProtocolMethodCompletedHandler>(
                [](HRESULT error, PCWSTR resultJson) -> HRESULT
                {
                    MessageBox(nullptr, resultJson, L"CDP Method Result", MB_OK);
                    return S_OK;
                }).Get());
    }
}
```

#### add_DevToolsProtocolEventReceived 

Subscribe to a DevToolsProtocol event.

> public HRESULT [add_DevToolsProtocolEventReceived](#add_devtoolsprotocoleventreceived)(LPCWSTR eventName,[IWebView2DevToolsProtocolEventReceivedEventHandler](IWebView2DevToolsProtocolEventReceivedEventHandler.md) * handler,EventRegistrationToken * token)

See the [DevTools Protocol Viewer](https://aka.ms/DevToolsProtocolDocs) for a list and description of available events. The eventName parameter is the full name of the event in the format `{domain}.{event}`. The handler's Invoke method will be called whenever the corresponding DevToolsProtocol event fires. Invoke will be called with the an event args object containing the CDP event's parameter object as a JSON string.

```cpp
// Prompt the user to name a CDP event, and then subscribe to that event.
void ScriptComponent::SubscribeToCdpEvent()
{
    TextInputDialog dialog(
        m_appWindow->GetMainWindow(),
        L"Subscribe to CDP Event",
        L"CDP event name:",
        L"Enter the name of the CDP event to subscribe to.\r\n"
            L"You may also have to call the \"enable\" method of the\r\n"
            L"event's domain to receive events (for example \"Log.enable\").\r\n",
        L"Log.entryAdded");
    if (dialog.confirmed)
    {
        std::wstring eventName = dialog.input;
        // If we are already subscribed to this event, unsubscribe first.
        auto preexistingToken = m_devToolsProtocolEventReceivedTokenMap.find(eventName);
        if (preexistingToken != m_devToolsProtocolEventReceivedTokenMap.end())
        {
            CHECK_FAILURE(m_webView->remove_DevToolsProtocolEventReceived(
                eventName.c_str(),
                preexistingToken->second));
        }

        CHECK_FAILURE(m_webView->add_DevToolsProtocolEventReceived(
            eventName.c_str(),
            Callback<IWebView2DevToolsProtocolEventReceivedEventHandler>(
                [eventName](IWebView2WebView* sender,
                            IWebView2DevToolsProtocolEventReceivedEventArgs* args)
                -> HRESULT
        {
            wil::unique_cotaskmem_string parameterObjectAsJson;
            CHECK_FAILURE(args->get_ParameterObjectAsJson(&parameterObjectAsJson));
            MessageBox(nullptr, parameterObjectAsJson.get(),
                       (L"CDP Event Fired: " + eventName).c_str(), MB_OK);
            return S_OK;
        }).Get(), &m_devToolsProtocolEventReceivedTokenMap[eventName]));
    }
}
```

#### remove_DevToolsProtocolEventReceived 

Remove an event handler previously added with add_DevToolsProtocolEventReceived.

> public HRESULT [remove_DevToolsProtocolEventReceived](#remove_devtoolsprotocoleventreceived)(LPCWSTR eventName,EventRegistrationToken token)

#### get_BrowserProcessId 

The process id of the browser process that hosts the WebView.

> public HRESULT [get_BrowserProcessId](#get_browserprocessid)(UINT32 * value)

#### get_CanGoBack 

Can navigate the webview to the previous page in the navigation history.

> public HRESULT [get_CanGoBack](#get_cangoback)(BOOL * canGoBack)

get_CanGoBack change value with the DocumentStateChanged event.

#### get_CanGoForward 

Can navigate the webview to the next page in the navigation history.

> public HRESULT [get_CanGoForward](#get_cangoforward)(BOOL * canGoForward)

get_CanGoForward change value with the DocumentStateChanged event.

#### GoBack 

Navigates the webview to the previous page in the navigation history.

> public HRESULT [GoBack](#goback)()

#### GoForward 

Navigates the webview to the next page in the navigation history.

> public HRESULT [GoForward](#goforward)()

#### WEBVIEW2_CAPTURE_PREVIEW_IMAGE_FORMAT 

Image format used by the [IWebView2WebView::CapturePreview](#capturepreview) method.

> enum [WEBVIEW2_CAPTURE_PREVIEW_IMAGE_FORMAT](#webview2_capture_preview_image_format)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
WEBVIEW2_CAPTURE_PREVIEW_IMAGE_FORMAT_PNG            | PNG image format.
WEBVIEW2_CAPTURE_PREVIEW_IMAGE_FORMAT_JPEG            | JPEG image format.

#### WEBVIEW2_SCRIPT_DIALOG_KIND 

Kind of JavaScript dialog used in the [IWebView2ScriptDialogOpeningEventHandler](IWebView2ScriptDialogOpeningEventHandler.md) interface.

> enum [WEBVIEW2_SCRIPT_DIALOG_KIND](#webview2_script_dialog_kind)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
WEBVIEW2_SCRIPT_DIALOG_KIND_ALERT            | A dialog invoked via the window.alert JavaScript function.
WEBVIEW2_SCRIPT_DIALOG_KIND_CONFIRM            | A dialog invoked via the window.confirm JavaScript function.
WEBVIEW2_SCRIPT_DIALOG_KIND_PROMPT            | A dialog invoked via the window.prompt JavaScript function.

#### WEBVIEW2_PROCESS_FAILED_KIND 

Kind of process failure used in the [IWebView2ProcessFailedEventHandler](IWebView2ProcessFailedEventHandler.md) interface.

> enum [WEBVIEW2_PROCESS_FAILED_KIND](#webview2_process_failed_kind)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
WEBVIEW2_PROCESS_FAILED_KIND_BROWSER_PROCESS_EXITED            | Indicates the browser process terminated unexpectedly.
WEBVIEW2_PROCESS_FAILED_KIND_RENDER_PROCESS_EXITED            | Indicates the render process terminated unexpectedly.
WEBVIEW2_PROCESS_FAILED_KIND_RENDER_PROCESS_UNRESPONSIVE            | Indicates the render process becomes unresponsive.

#### WEBVIEW2_PERMISSION_TYPE 

The type of a permission request.

> enum [WEBVIEW2_PERMISSION_TYPE](#webview2_permission_type)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
WEBVIEW2_PERMISSION_TYPE_UNKNOWN_PERMISSION            | Unknown permission.
WEBVIEW2_PERMISSION_TYPE_MICROPHONE            | Permission to capture audio.
WEBVIEW2_PERMISSION_TYPE_CAMERA            | Permission to capture video.
WEBVIEW2_PERMISSION_TYPE_GEOLOCATION            | Permission to access geolocation.
WEBVIEW2_PERMISSION_TYPE_NOTIFICATIONS            | Permission to send web notifications.
WEBVIEW2_PERMISSION_TYPE_OTHER_SENSORS            | Permission to access generic sensor.
WEBVIEW2_PERMISSION_TYPE_CLIPBOARD_READ            | Permission to read system clipboard without a user gesture.

#### WEBVIEW2_PERMISSION_STATE 

Response to a permission request.

> enum [WEBVIEW2_PERMISSION_STATE](#webview2_permission_state)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
WEBVIEW2_PERMISSION_STATE_DEFAULT            | Use default browser behavior, which normally prompt users for decision.
WEBVIEW2_PERMISSION_STATE_ALLOW            | Grant the permission request.
WEBVIEW2_PERMISSION_STATE_DENY            | Deny the permission request.

#### WEBVIEW2_MOVE_FOCUS_REASON 

Reason for moving focus.

> enum [WEBVIEW2_MOVE_FOCUS_REASON](#webview2_move_focus_reason)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
WEBVIEW2_MOVE_FOCUS_REASON_PROGRAMMATIC            | Code setting focus into WebView.
WEBVIEW2_MOVE_FOCUS_REASON_NEXT            | Moving focus due to Tab traversal forward.
WEBVIEW2_MOVE_FOCUS_REASON_PREVIOUS            | Moving focus due to Tab traversal backward.

#### WEBVIEW2_WEB_ERROR_STATUS 

Error status values for web navigations.

> enum [WEBVIEW2_WEB_ERROR_STATUS](#webview2_web_error_status)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
WEBVIEW2_WEB_ERROR_STATUS_UNKNOWN            | An unknown error occurred.
WEBVIEW2_WEB_ERROR_STATUS_CERTIFICATE_COMMON_NAME_IS_INCORRECT            | The SSL certificate common name does not match the web address.
WEBVIEW2_WEB_ERROR_STATUS_CERTIFICATE_EXPIRED            | The SSL certificate has expired.
WEBVIEW2_WEB_ERROR_STATUS_CLIENT_CERTIFICATE_CONTAINS_ERRORS            | The SSL client certificate contains errors.
WEBVIEW2_WEB_ERROR_STATUS_CERTIFICATE_REVOKED            | The SSL certificate has been revoked.
WEBVIEW2_WEB_ERROR_STATUS_CERTIFICATE_IS_INVALID            | The SSL certificate is invalid.
WEBVIEW2_WEB_ERROR_STATUS_SERVER_UNREACHABLE            | The host is unreachable.
WEBVIEW2_WEB_ERROR_STATUS_TIMEOUT            | The connection has timed out.
WEBVIEW2_WEB_ERROR_STATUS_ERROR_HTTP_INVALID_SERVER_RESPONSE            | The server returned an invalid or unrecognized response.
WEBVIEW2_WEB_ERROR_STATUS_CONNECTION_ABORTED            | The connection was aborted.
WEBVIEW2_WEB_ERROR_STATUS_CONNECTION_RESET            | The connection was reset.
WEBVIEW2_WEB_ERROR_STATUS_DISCONNECTED            | The Internet connection has been lost.
WEBVIEW2_WEB_ERROR_STATUS_CANNOT_CONNECT            | Cannot connect to destination.
WEBVIEW2_WEB_ERROR_STATUS_HOST_NAME_NOT_RESOLVED            | Could not resolve provided host name.
WEBVIEW2_WEB_ERROR_STATUS_OPERATION_CANCELED            | The operation was canceled.
WEBVIEW2_WEB_ERROR_STATUS_REDIRECT_FAILED            | The request redirect failed.
WEBVIEW2_WEB_ERROR_STATUS_UNEXPECTED_ERROR            | An unexpected error occurred.

#### WEBVIEW2_WEB_RESOURCE_CONTEXT 

Enum for web resource request contexts.

> enum [WEBVIEW2_WEB_RESOURCE_CONTEXT](#webview2_web_resource_context)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
WEBVIEW2_WEB_RESOURCE_CONTEXT_ALL            | All resources.
WEBVIEW2_WEB_RESOURCE_CONTEXT_DOCUMENT            | Document resources.
WEBVIEW2_WEB_RESOURCE_CONTEXT_STYLESHEET            | CSS resources.
WEBVIEW2_WEB_RESOURCE_CONTEXT_IMAGE            | Image resources.
WEBVIEW2_WEB_RESOURCE_CONTEXT_MEDIA            | Other media resources such as videos.
WEBVIEW2_WEB_RESOURCE_CONTEXT_FONT            | Font resources.
WEBVIEW2_WEB_RESOURCE_CONTEXT_SCRIPT            | Script resources.
WEBVIEW2_WEB_RESOURCE_CONTEXT_XML_HTTP_REQUEST            | XML HTTP requests.
WEBVIEW2_WEB_RESOURCE_CONTEXT_FETCH            | Fetch API communication.
WEBVIEW2_WEB_RESOURCE_CONTEXT_TEXT_TRACK            | TextTrack resources.
WEBVIEW2_WEB_RESOURCE_CONTEXT_EVENT_SOURCE            | 
WEBVIEW2_WEB_RESOURCE_CONTEXT_WEBSOCKET            | 
WEBVIEW2_WEB_RESOURCE_CONTEXT_MANIFEST            | 
WEBVIEW2_WEB_RESOURCE_CONTEXT_SIGNED_EXCHANGE            | 
WEBVIEW2_WEB_RESOURCE_CONTEXT_PING            | 
WEBVIEW2_WEB_RESOURCE_CONTEXT_CSP_VIOLATION_REPORT            | 
WEBVIEW2_WEB_RESOURCE_CONTEXT_OTHER            | Other resources.
