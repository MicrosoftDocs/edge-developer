---
description: Host web content in your Win32 app with the Microsoft Edge WebView 2 control
title: Microsoft Edge WebView 2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/28/2019
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge
---

# interface IWebView2WebView 

```
interface IWebView2WebView
  : public IUnknown
```

The Embedded Browser WebView enables you to host web content using the latest Edge web browser technology.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[get_Settings](#get_settings) | The [IWebView2Settings](IWebView2Settings.md#interface_i_web_view2_settings) object contains various modifiable settings for the running WebView.
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
[add_WebResourceRequested](#add_webresourcerequested) | Add an event handler for the WebResourceRequested event.
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
[put_Bounds](#put_bounds) | Set the webview bounds.
[get_ZoomFactor](#get_zoomfactor) | The zoom factor for the current page in the WebView.
[put_ZoomFactor](#put_zoomfactor) | Set the zoom factor.
[get_IsVisible](#get_isvisible) | Show or hide the browser window.
[put_IsVisible](#put_isvisible) | Show or hide the browser window.
[PostWebMessageAsJson](#postwebmessageasjson) | Post the specified webMessage to the top level document in this [IWebView2WebView](#interface_i_web_view2_web_view).
[PostWebMessageAsString](#postwebmessageasstring) | This is a helper for posting a message that is a simple string rather than a JSON string representation of a JavaScript object.
[add_WebMessageReceived](#add_webmessagereceived) | This event fires when the IsWebMessageEnabled setting is set and the top level document of the webview calls `window.chrome.webview.postMessage`.
[remove_WebMessageReceived](#remove_webmessagereceived) | Remove an event handler previously added with add_WebMessageReceived.
[Close](#close) | Closes the webview and cleans up the underlying browser instance.
[CallDevToolsProtocolMethod](#calldevtoolsprotocolmethod) | Call an asynchronous DevToolsProtocol method.
[add_DevToolsProtocolEventReceived](#add_devtoolsprotocoleventreceived) | Subscribe to a DevToolsProtocol event.
[remove_DevToolsProtocolEventReceived](#remove_devtoolsprotocoleventreceived) | Remove an event handler previously added with add_DevToolsProtocolEventReceived.
[get_BrowserProcessId](#get_browserprocessid) | The process id of the browser process that hosts the WebView.
[WEBVIEW2_CAPTURE_PREVIEW_IMAGE_FORMAT](#webview2_capture_preview_image_format) | Image format used by the [IWebView2WebView::CapturePreview](#interface_i_web_view2_web_view_1a1d04f117ee7a3f8828bdaad7eecc6668) method.
[WEBVIEW2_SCRIPT_DIALOG_KIND](#webview2_script_dialog_kind) | Kind of JavaScript dialog used in the [IWebView2ScriptDialogOpeningEventHandler](IWebView2ScriptDialogOpeningEventHandler.md#interface_i_web_view2_script_dialog_opening_event_handler) interface.
[WEBVIEW2_PROCESS_FAILED_KIND](#webview2_process_failed_kind) | Kind of process failure used in the [IWebView2ProcessFailedEventHandler](IWebView2ProcessFailedEventHandler.md#interface_i_web_view2_process_failed_event_handler) interface.
[WEBVIEW2_PERMISSION_TYPE](#webview2_permission_type) | The type of a permission request.
[WEBVIEW2_PERMISSION_STATE](#webview2_permission_state) | Response to a permission request.
[WEBVIEW2_MOVE_FOCUS_REASON](#webview2_move_focus_reason) | Reason for moving focus.
[WEBVIEW2_WEB_ERROR_STATUS](#webview2_web_error_status) | Error values for web navigations.
[WEBVIEW2_WEB_RESOURCE_CONTEXT](#webview2_web_resource_context) | Enum for resourceContextFilter of WebResourceRequested event.
[WEBVIEW2_RELEASE_CHANNEL_PREFERENCE](#webview2_release_channel_preference) | The release channel of a browser installation.
[WEBVIEW2_CAPTURE_PREVIEW_IMAGE_FORMAT](#webview2_capture_preview_image_format) | Image format used by the [IWebView2WebView::CapturePreview](#interface_i_web_view2_web_view_1a1d04f117ee7a3f8828bdaad7eecc6668) method.
[WEBVIEW2_SCRIPT_DIALOG_KIND](#webview2_script_dialog_kind) | Kind of JavaScript dialog used in the [IWebView2ScriptDialogOpeningEventHandler](IWebView2ScriptDialogOpeningEventHandler.md#interface_i_web_view2_script_dialog_opening_event_handler) interface.
[WEBVIEW2_PROCESS_FAILED_KIND](#webview2_process_failed_kind) | Kind of process failure used in the [IWebView2ProcessFailedEventHandler](IWebView2ProcessFailedEventHandler.md#interface_i_web_view2_process_failed_event_handler) interface.
[WEBVIEW2_PERMISSION_TYPE](#webview2_permission_type) | The type of a permission request.
[WEBVIEW2_PERMISSION_STATE](#webview2_permission_state) | Response to a permission request.
[WEBVIEW2_MOVE_FOCUS_REASON](#webview2_move_focus_reason) | Reason for moving focus.
[WEBVIEW2_WEB_ERROR_STATUS](#webview2_web_error_status) | Error values for web navigations.
[WEBVIEW2_WEB_RESOURCE_CONTEXT](#webview2_web_resource_context) | Enum for resourceContextFilter of WebResourceRequested event.
[WEBVIEW2_RELEASE_CHANNEL_PREFERENCE](#webview2_release_channel_preference) | The release channel of a browser installation.

## Navigation events

The normal sequence of navigation events is NavigationStarting, DocumentStateChanged and then NavigationCompleted.

![dot_inline_dotgraph_1.png](dot_inline_dotgraph_1.png)

In error cases there may or may not be a DocumentStateChanged event depending on whether the navigation is continued to an error page. In case of an HTTP redirect, there will be multiple NavigationStarting events in a row, with ones following the first will have their IsRedirect flag set.

For subframes inside WebView, the only navigation event fired is the NavigationStarting event which gives host the ability to block subframe navigations.

## Process model

The Embedded Browser WebView uses the same process model as the Edge web browser. There is one Edge browser process per specified user data directory in a user session that will serve any Embedded Browser WebView calling process that specifies that user data directory. This means one Edge browser process may be serving multiple calling processes and one calling process may be using multiple Edge browser processes.

![dot_inline_dotgraph_2.png](dot_inline_dotgraph_2.png)

Off of a browser process there will be some number of renderer processes. These are created as necessary to service potentially multiple frames in different WebViews. The number of renderer processes varies based on the site isolation browser feature and the number of distinct disconnected origins rendered in associated WebViews.

![dot_inline_dotgraph_3.png](dot_inline_dotgraph_3.png)

You can react to crashes and hangs in these browser and renderer processes using the ProcessFailure event.

You can safely shutdown associated browser and renderer processes using the Close method.

## Threading model

The Embedded Browser WebView must be created on a UI thread. Specifically a thread with a message pump. All callbacks will occur on that thread and calls into the WebView must be done on that thread. It is not safe to use the WebView from another thread.

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

## Debug

Open DevTools with the normal shortcuts: `F12` or `Ctrl+Shift+I`. You can use the `--auto-open-devtools-for-tabs` command argument switch to have the DevTools window open immediately when first creating a WebView. See CreateWebView documentation for how to provide additional command line arguments to the browser process. Check out the LoaderOverride registry key for trying out different builds of WebView2 without modifying your application in the CreateWebView documentation.

## Members

#### get_Settings 

The [IWebView2Settings](IWebView2Settings.md#interface_i_web_view2_settings) object contains various modifiable settings for the running WebView.

> public HRESULT [get_Settings](#interface_i_web_view2_web_view_1a8396b542d0a061ded4145618642b945a)([IWebView2Settings](IWebView2Settings.md#interface_i_web_view2_settings) ** settings)

#### get_Source 

The URI of the current top level document.

> public HRESULT [get_Source](#interface_i_web_view2_web_view_1aa4f33567666a5019de3348e432c68d54)(LPWSTR * uri)

This value potentially changes as a part of the DocumentStateChanged event firing for some cases such as navigating to a different site or fragment navigations. It will remain the same for other types of navigations such as page reloads or history.pushState with the same URL as the current page.

```cpp
HRESULT ScenarioNavigateAndEvents::DocumentStateChangedEventHandler(
    IWebView2WebView* sender,
    IWebView2DocumentStateChangedEventArgs* args) {
  PWSTR uri = nullptr;
  HRESULT hr = m_webview->get_Source(&uri);

  // The DocumentStateChanged event is the first time during a navigation in
  // which we have transitioned the top level document to begin displaying
  // content from the new URI. This is the appropriate time to update our UI
  // with the new URI.
  if (SUCCEEDED(hr)) {
    UpdateDisplayedUri(uri);
    CoTaskMemFree(uri);
  }

  return hr;
}
```

#### Navigate 

Cause a navigation of the top level document to the specified URI.

> public HRESULT [Navigate](#interface_i_web_view2_web_view_1a85859f22509648a1b928ddf7065fee45)(LPCWSTR uri)

See the navigation events for more information. Note that this starts a navigation and the corresponding NavigationStarting event will fire sometime after this Navigate call completes.

```cpp
  // Setup navigation event handlers before calling navigate to avoid any races.
  m_webview->add_NavigationStarting(
      Microsoft::WRL::Callback<IWebView2NavigationStartingEventHandler>(
          this, &ScenarioNavigateAndEvents::NavigationStartingEventHandler)
          .Get(), &m_navigationStartingToken);

  m_webview->add_DocumentStateChanged(
      Microsoft::WRL::Callback<IWebView2DocumentStateChangedEventHandler>(
          this, &ScenarioNavigateAndEvents::DocumentStateChangedEventHandler)
          .Get(),
      &m_documentStateChangedToken);

  m_webview->add_NavigationCompleted(
      Microsoft::WRL::Callback<IWebView2NavigationCompletedEventHandler>(
          this, &ScenarioNavigateAndEvents::NavigationCompletedEventHandler)
          .Get(), &m_navigationCompletedToken);

  m_webview->Navigate(L"https://example.com/");
```

#### MoveFocus 

Move focus into WebView.

> public HRESULT [MoveFocus](#interface_i_web_view2_web_view_1ad5fa39dc1bcfee27d040fccc631995f4)([WEBVIEW2_MOVE_FOCUS_REASON](#interface_i_web_view2_web_view_1a094339e235eb7a1e0512c26e09f16af3) reason)

WebView will get focus and focus will be set to correspondent element in the page hosted in the WebView. For Programmatic reason, focus is set to previously focused element or the default element if there is no previously focused element. For Next reason, focus is set to the first element. For Previous reason, focus is set to the last element. WebView can also got focus through user interaction like clicking into WebView or Tab into it. For tabbing, the app can call MoveFocus with Next or Previous to align with tab and shift+tab respectively when it decides the WebView is the next tabbable element. Or, the app can call IsDialogMessage as part of its message loop to allow the platform to auto handle tabbing. The platform will rotate through all windows with WS_TABSTOP. When the WebView gets focus from IsDialogMessage, it will internally put the focus on the first or last element for tab and shift+tab respectively.

```cpp
  while (GetMessage(&msg, nullptr, 0, 0)) {
    if (!TranslateAccelerator(msg.hwnd, hAccelTable, &msg)) {
      // Calling IsDialogMessage handles Tab traversal automatically. If the
      // app wants the platform to auto handle tab, then call IsDialogMessage
      // before calling TranslateMessage/DispatchMessage. If the app wants to
      // handle tabbing itself, then skip calling IsDialogMessage and call
      // TranslateMessage/DispatchMessage directly.
      if (!AppWindow::s_autoTabHandle ||
          !IsDialogMessage(GetAncestor(msg.hwnd, GA_ROOT), &msg)) {
        TranslateMessage(&msg);
        DispatchMessage(&msg);
      }
    }
  }
```

```cpp
  SetWindowLongPtr(m_addressbarWindow, GWLP_USERDATA,
                   reinterpret_cast<LONG_PTR>(this));
  m_originalAddressBarWndProc = (WNDPROC)SetWindowLongPtr(
      m_addressbarWindow, GWLP_WNDPROC, (LONG_PTR)ChildWndProcStatic);
  SetWindowLongPtr(m_GoWindow, GWLP_USERDATA, reinterpret_cast<LONG_PTR>(this));
  m_originalGoWndProc = (WNDPROC)SetWindowLongPtr(m_GoWindow, GWLP_WNDPROC,
                                                  (LONG_PTR)ChildWndProcStatic);
```

```cpp
LRESULT CALLBACK AppWindow::ChildWndProcStatic(HWND hWnd,
                                               UINT message,
                                               WPARAM wParam,
                                               LPARAM lParam) {
  AppWindow* app =
      reinterpret_cast<AppWindow*>(GetWindowLongPtr(hWnd, GWLP_USERDATA));

  if (app != nullptr) {
    return app->ChildWndProc(hWnd, message, wParam, lParam);
  } else {
    return DefWindowProc(hWnd, message, wParam, lParam);
  }
}

LRESULT CALLBACK AppWindow::ChildWndProc(HWND hWnd,
                                         UINT message,
                                         WPARAM wParam,
                                         LPARAM lParam) {
  bool handled = false;
  // If not calling IsDialogMessage to handle tab traversal automatically,
  // detect tab traversal and cycle focus through address bar, go button, and
  // elements in WebView.
  if (message == WM_KEYDOWN) {
    if (wParam == VK_TAB) {
      handled = true;
      BOOL shift = (GetKeyState(VK_LSHIFT) < 0 || GetKeyState(VK_RSHIFT) < 0);
      if (hWnd == m_addressbarWindow) {
        if (shift) {
          // When Shift-Tab at address bar, tab backwards into WebView.
          m_webview->MoveFocus(WEBVIEW2_MOVE_FOCUS_REASON_PREVIOUS);
        } else {
          // When Tab at address bar, move focus to next control.
          SetFocus(m_GoWindow);
        }
      } else if (hWnd == m_GoWindow) {
        if (shift) {
          // When Shift-Tab at address bar, tab backwards to previous control.
          SetFocus(m_addressbarWindow);
        } else {
          // When Tab at Go button, tab forwards into WebView
          m_webview->MoveFocus(WEBVIEW2_MOVE_FOCUS_REASON_NEXT);
        }
      }
    } else if ((wParam == VK_RETURN) && (hWnd == m_addressbarWindow)) {
      // Navigate to the address upon Enter on address bar
      Navigate();
      handled = true;
    }
  } else if ((message == WM_CHAR) &&
             ((wParam == VK_TAB) || (wParam == VK_RETURN))) {
    // Ignore Tab and return char messages to avoid the ding sound.
    handled = true;
  } else if ((message == WM_GETDLGCODE) &&
            (wParam == VK_RETURN)) {
    // When calling IsDialogMessage to handle tab traversal automatically, tell
    // the system that we want to handle the VK_RETURN. This let's the app to
    // Navigate the WebView when Enter is pressed in the address bar.
    return DLGC_WANTALLKEYS;
  }

  if (handled)
    return 0;

  // continue with original Window proc for any other messages
  return CallWindowProc((hWnd == m_addressbarWindow)
                            ? m_originalAddressBarWndProc
                            : m_originalGoWndProc,
                        hWnd, message, wParam, lParam);
}
```

#### NavigateToString 

Initiates a navigation to htmlContent as source HTML of a new document.

> public HRESULT [NavigateToString](#interface_i_web_view2_web_view_1a3d905c5be9d866c56eeefac440a6d863)(LPCWSTR htmlContent)

The htmlContent parameter may not be larger than 2 MB of characters. The origin of the new page will be about:blank.

```cpp
          static const LPCWSTR htmlContent =
              L"<h1>Allowed URIs</h1><p>You've attempted to navigate away "
              L"from "
              L"the allowed URIs. Go back to <a "
              L"href='https://example.com/'>example.com</a>.</p>";
          hr = m_webview->NavigateToString(htmlContent);
```

#### add_NavigationStarting 

Add an event handler for the NavigationStarting event.

> public HRESULT [add_NavigationStarting](#interface_i_web_view2_web_view_1a746fdc399efb935857bd13a7114bdaca)([IWebView2NavigationStartingEventHandler](IWebView2NavigationStartingEventHandler.md#interface_i_web_view2_navigation_starting_event_handler) * eventHandler,EventRegistrationToken * token)

NavigationStarting fires when the WebView main frame is requesting permission to navigate to a different URI. This will fire for redirects as well.

```cpp
  m_webview->add_NavigationStarting(
      Microsoft::WRL::Callback<IWebView2NavigationStartingEventHandler>(
          this, &ScenarioNavigateAndEvents::NavigationStartingEventHandler)
          .Get(), &m_navigationStartingToken);
```

```cpp
HRESULT ScenarioNavigateAndEvents::NavigationStartingEventHandler(
    IWebView2WebView* sender, IWebView2NavigationStartingEventArgs* args) {
  // In this example we want to ensure that the top level document remains on
  // example.com, but child frames may navigate anywhere so we only subscribe
  // to the NavigationStarting event and not the FrameNavigationStarting event.

  PWSTR uriAsPWSTR = nullptr;
  HRESULT hr = args->get_Uri(&uriAsPWSTR);

  if (SUCCEEDED(hr)) {
    // And we check that the URI we're navigating to is still in the
    // origin we want.
    const bool inExampleSite = DoesUriMatchDomain(uriAsPWSTR, L"example.com");
    // Or about:blank for our call to NavigateToString.
    const bool isAboutBlank = IsUriAboutBlank(uriAsPWSTR);

    if (!inExampleSite && !isAboutBlank) {
      hr = args->put_Cancel(TRUE);
      if (SUCCEEDED(hr)) {
        BOOL userInitiated = FALSE;

        // If the user was the one attempting to navigate away, warn them.
        hr = args->get_IsUserInitiated(&userInitiated);
        if (SUCCEEDED(hr) && userInitiated) {
          static const LPCWSTR htmlContent =
              L"<h1>Allowed URIs</h1><p>You've attempted to navigate away "
              L"from "
              L"the allowed URIs. Go back to <a "
              L"href='https://example.com/'>example.com</a>.</p>";
          hr = m_webview->NavigateToString(htmlContent);
        }
      }
    }
    CoTaskMemFree(uriAsPWSTR);
  }
  return hr;
}
```

#### remove_NavigationStarting 

Remove an event handler previously added with add_NavigationStarting.

> public HRESULT [remove_NavigationStarting](#interface_i_web_view2_web_view_1a727b83dc3ec5c191bdb1002c61be9185)(EventRegistrationToken token)

#### add_DocumentStateChanged 

Add an event handler for the DocumentStateChanged event.

> public HRESULT [add_DocumentStateChanged](#interface_i_web_view2_web_view_1a989f9806a6736bac9a003319e16f6e48)([IWebView2DocumentStateChangedEventHandler](IWebView2DocumentStateChangedEventHandler.md#interface_i_web_view2_document_state_changed_event_handler) * eventHandler,EventRegistrationToken * token)

DocumentStateChanged fires when new content has started loading on the webview's main frame or if a same page navigation occurs (such as through fragment navigations or history.pushState navigations). This follows the NavigationStarting event and precedes the NavigationCompleted event.

```cpp
  m_webview->add_DocumentStateChanged(
      Microsoft::WRL::Callback<IWebView2DocumentStateChangedEventHandler>(
          this, &ScenarioNavigateAndEvents::DocumentStateChangedEventHandler)
          .Get(),
      &m_documentStateChangedToken);
```

```cpp
HRESULT ScenarioNavigateAndEvents::DocumentStateChangedEventHandler(
    IWebView2WebView* sender,
    IWebView2DocumentStateChangedEventArgs* args) {
  PWSTR uri = nullptr;
  HRESULT hr = m_webview->get_Source(&uri);

  // The DocumentStateChanged event is the first time during a navigation in
  // which we have transitioned the top level document to begin displaying
  // content from the new URI. This is the appropriate time to update our UI
  // with the new URI.
  if (SUCCEEDED(hr)) {
    UpdateDisplayedUri(uri);
    CoTaskMemFree(uri);
  }

  return hr;
}
```

#### remove_DocumentStateChanged 

Remove an event handler previously added with add_DocumentStateChanged.

> public HRESULT [remove_DocumentStateChanged](#interface_i_web_view2_web_view_1ae6d508d6107db968f00dfbf058b07cd4)(EventRegistrationToken token)

#### add_NavigationCompleted 

Add an event handler for the NavigationCompleted event.

> public HRESULT [add_NavigationCompleted](#interface_i_web_view2_web_view_1a5a46b92e792debdb4be4ff2e132d6f0f)([IWebView2NavigationCompletedEventHandler](IWebView2NavigationCompletedEventHandler.md#interface_i_web_view2_navigation_completed_event_handler) * eventHandler,EventRegistrationToken * token)

NavigationCompleted event fires when the WebView has completely loaded (body.onload has fired) or loading stopped with error.

```cpp
  m_webview->add_NavigationCompleted(
      Microsoft::WRL::Callback<IWebView2NavigationCompletedEventHandler>(
          this, &ScenarioNavigateAndEvents::NavigationCompletedEventHandler)
          .Get(), &m_navigationCompletedToken);
```

```cpp
HRESULT ScenarioNavigateAndEvents::DocumentStateChangedEventHandler(
    IWebView2WebView* sender,
    IWebView2DocumentStateChangedEventArgs* args) {
  PWSTR uri = nullptr;
  HRESULT hr = m_webview->get_Source(&uri);

  // The DocumentStateChanged event is the first time during a navigation in
  // which we have transitioned the top level document to begin displaying
  // content from the new URI. This is the appropriate time to update our UI
  // with the new URI.
  if (SUCCEEDED(hr)) {
    UpdateDisplayedUri(uri);
    CoTaskMemFree(uri);
  }

  return hr;
}
```

#### remove_NavigationCompleted 

Remove an event handler previously added with add_NavigationCompleted.

> public HRESULT [remove_NavigationCompleted](#interface_i_web_view2_web_view_1afb94a5aad18ea6cd0f2a9d6d317b4b9e)(EventRegistrationToken token)

#### add_FrameNavigationStarting 

Add an event handler for the FrameNavigationStarting event.

> public HRESULT [add_FrameNavigationStarting](#interface_i_web_view2_web_view_1a552b52140a8ab6d43f8d69a2329eeabc)([IWebView2NavigationStartingEventHandler](IWebView2NavigationStartingEventHandler.md#interface_i_web_view2_navigation_starting_event_handler) * eventHandler,EventRegistrationToken * token)

FrameNavigationStarting fires when a child frame in the WebView requesting permission to navigate to a different URI. This will fire for redirects as well.

#### remove_FrameNavigationStarting 

Remove an event handler previously added with add_FrameNavigationStarting.

> public HRESULT [remove_FrameNavigationStarting](#interface_i_web_view2_web_view_1ac51a862e0737a1e7c5ac7fc0ccba64d6)(EventRegistrationToken token)

#### add_MoveFocusRequested 

Add an event handler for the MoveFocusRequested event.

> public HRESULT [add_MoveFocusRequested](#interface_i_web_view2_web_view_1af1e669775645817e281fa83db66d4995)([IWebView2MoveFocusRequestedEventHandler](IWebView2MoveFocusRequestedEventHandler.md#interface_i_web_view2_move_focus_requested_event_handler) * eventHandler,EventRegistrationToken * token)

MoveFocusRequested fires when user tries to tab out of the WebView. The WebView's focus has not changed when this event is fired.

```cpp
      m_webview->add_MoveFocusRequested(
          Callback<IWebView2MoveFocusRequestedEventHandler>(
              [moveFocusOut](
                  IWebView2WebView* sender,
                  IWebView2MoveFocusRequestedEventArgs* args) -> HRESULT {
                WEBVIEW2_MOVE_FOCUS_REASON reason;
                args->get_Reason(&reason);
                // callback to handle move focus out of WebView
                bool forward = (reason == WEBVIEW2_MOVE_FOCUS_REASON_NEXT);
                bool handled = moveFocusOut(forward);
                args->put_Handled(handled ? TRUE : FALSE);
                return S_OK;
              })
              .Get(),
          &m_moveFocusRequestedToken);
```

```cpp
  // in moveFocusOut callback move focus to desired control.
  bool handled = false;
  if (!s_autoTabHandle) {
    HWND toFocus = forward ? m_addressbarWindow : m_GoWindow;
    SetFocus(toFocus);
    handled = true;
  }
  return handled;
```

#### remove_MoveFocusRequested 

Remove an event handler previously added with add_MoveFocusRequested.

> public HRESULT [remove_MoveFocusRequested](#interface_i_web_view2_web_view_1a62df3bca9979178c4ac5b4f5ecb3b941)(EventRegistrationToken token)

#### add_GotFocus 

Add an event handler for the GotFocus event.

> public HRESULT [add_GotFocus](#interface_i_web_view2_web_view_1accf1ba18fdb97e5bfe27f0520f18b017)([IWebView2FocusChangedEventHandler](IWebView2FocusChangedEventHandler.md#interface_i_web_view2_focus_changed_event_handler) * eventHandler,EventRegistrationToken * token)

GotFocus fires when WebView got focus.

```cpp
      m_webview->add_GotFocus(
          Callback<IWebView2FocusChangedEventHandler>(
              [callback](IWebView2WebView* sender, IUnknown* args) -> HRESULT {
                // notify app that webivew got focus,
                // do something like update status bar.
                callback();
                return S_OK;
              })
              .Get(),
          &m_gotFocusToken);
```

#### remove_GotFocus 

Remove an event handler previously added with add_GotFocus.

> public HRESULT [remove_GotFocus](#interface_i_web_view2_web_view_1aaca016ea0de908dc1e027f4ca4f6b8d0)(EventRegistrationToken token)

#### add_LostFocus 

Add an event handler for the LostFocus event.

> public HRESULT [add_LostFocus](#interface_i_web_view2_web_view_1af8c148d397519f901ff06f03edb3f372)([IWebView2FocusChangedEventHandler](IWebView2FocusChangedEventHandler.md#interface_i_web_view2_focus_changed_event_handler) * eventHandler,EventRegistrationToken * token)

LostFocus fires when WebView lost focus. In the case where MoveFocusRequested event is fired, the focus is still on WebView when MoveFocusRequested event fires. Lost focus only fires afterwards when app's code or default action of MoveFocusRequested event set focus away from WebView.

```cpp
      m_webview->add_LostFocus(
          Callback<IWebView2FocusChangedEventHandler>(
              [callback](IWebView2WebView* sender, IUnknown* args) -> HRESULT {
                // notify app that webivew lost focus,
                // do something like update status bar.
                callback();
                return S_OK;
              })
              .Get(),
          &m_lostFocusToken);
```

#### remove_LostFocus 

Remove an event handler previously added with add_LostFocus.

> public HRESULT [remove_LostFocus](#interface_i_web_view2_web_view_1a96ebfe46ab2d2b382716356a091c5906)(EventRegistrationToken token)

#### add_WebResourceRequested 

Add an event handler for the WebResourceRequested event.

> public HRESULT [add_WebResourceRequested](#interface_i_web_view2_web_view_1a03a2b5f82defb29dc480326e6460816f)(LPCWSTR *const urlFilter,[WEBVIEW2_WEB_RESOURCE_CONTEXT](#interface_i_web_view2_web_view_1a84d836ed6f6e803de309300b344a3152) *const resourceContextFilter,SIZE_T filterLength,[IWebView2WebResourceRequestedEventHandler](IWebView2WebResourceRequestedEventHandler.md#interface_i_web_view2_web_resource_requested_event_handler) * eventHandler,EventRegistrationToken * token)

Fires when the WebView has performs any HTTP request. Use urlFilter to pass in a list with size filterLength of urls to listen for. Each url entry also supports wildcards: '*': zero or more, '?' exactly one. For each urlFilter entry, provide a matching resourceContextFilter as a bit vector of type of resources WebResourceRequested should fire matching that urlFilter. if filterLength is 0, the event will fire for all network requests. The supported resource contexts are: Document, Stylesheet, Image, Media, Font, Script, XHR, Fetch.

```cpp
  m_webview->add_WebResourceRequested(
      all_urls, images_filter, 1,
      Callback<IWebView2WebResourceRequestedEventHandler>(
          this, &WebView::WebResourceRequestedEventHandler)
          .Get(),
      &m_webResourceRequestedToken);
```

```cpp
HRESULT WebView::WebResourceRequestedEventHandler(
    IWebView2WebView* sender,
    IWebView2WebResourceRequestedEventArgs* args) {
  if (block_images_) {
    ComPtr<IWebView2WebResourceResponse> response;
    m_webviewEnvironment->CreateWebResourceResponse(nullptr, 200, L"OK", L"",
                                                    &response);
    args->put_Response(response.Get());
  }

  return S_OK;
}
```

#### remove_WebResourceRequested 

Remove an event handler previously added with add_WebResourceRequested.

> public HRESULT [remove_WebResourceRequested](#interface_i_web_view2_web_view_1aafcacea7a669055ad5f895cdfb5d8838)(EventRegistrationToken token)

#### add_ScriptDialogOpening 

Add an event handler for the ScriptDialogOpening event.

> public HRESULT [add_ScriptDialogOpening](#interface_i_web_view2_web_view_1a09b052357bb9c498f21124b4113184e0)([IWebView2ScriptDialogOpeningEventHandler](IWebView2ScriptDialogOpeningEventHandler.md#interface_i_web_view2_script_dialog_opening_event_handler) * eventHandler,EventRegistrationToken * token)

The event fires when a JavaScript dialog (alert, confirm, or prompt) will show for the webview. This event only fires if the IWebView2Settings::AreDefaultScriptDialogsEnabled property is set to false.

```cpp
  ComPtr<IWebView2Settings> settings;
  if (SUCCEEDED(m_webview->get_Settings(&settings))) {
    settings->put_AreDefaultScriptDialogsEnabled(FALSE);
  }
```

```cpp
  m_webview->add_ScriptDialogOpening(
      Microsoft::WRL::Callback<IWebView2ScriptDialogOpeningEventHandler>(
          this, &ScenarioScript::JavaScriptDialogOpeningEventHandler)
          .Get(), &m_scriptDialogOpeningToken);
```

```cpp
HRESULT ScenarioScript::JavaScriptDialogOpeningEventHandler(
    IWebView2WebView* sender, IWebView2ScriptDialogOpeningEventArgs* args) {
  WEBVIEW2_SCRIPT_DIALOG_KIND kind;
  HRESULT hr = args->get_Kind(&kind);
  if (SUCCEEDED(hr)) {
    PWSTR message = nullptr;
    hr = args->get_Message(&message);

    if (kind == WEBVIEW2_SCRIPT_DIALOG_KIND_ALERT) {
      MessageBoxW(nullptr, message, L"Alert", MB_OK);
    } else {
      PWSTR promptText = nullptr;
      args->get_DefaultText(&promptText);

      TextInputDialog textInputDialog(nullptr, nullptr);

      textInputDialog.SetUserInput(promptText);

      const bool userSelectedOK =
          (textInputDialog.Show(L"Message", promptText, message) == IDOK);

      hr = args->put_ResultText(textInputDialog.GetUserInput());
      if (SUCCEEDED(hr) && userSelectedOK) {
        hr = args->Accept();
      }

      CoTaskMemFree(promptText);
    }

    CoTaskMemFree(message);
  }
  return hr;
}
```

#### remove_ScriptDialogOpening 

Remove an event handler previously added with add_ScriptDialogOpening.

> public HRESULT [remove_ScriptDialogOpening](#interface_i_web_view2_web_view_1af1e7612ba89a977f7c700d0459fe05b1)(EventRegistrationToken token)

#### add_ZoomFactorChanged 

Add an event handler for the ZoomFactorChanged event.

> public HRESULT [add_ZoomFactorChanged](#interface_i_web_view2_web_view_1a62e83d8913e3eb899cade17cd17b206c)([IWebView2ZoomFactorChangedEventHandler](IWebView2ZoomFactorChangedEventHandler.md#interface_i_web_view2_zoom_factor_changed_event_handler) * eventHandler,EventRegistrationToken * token)

The event fires when the ZoomFactor property of the WebView changes. The event could fire because the caller modified the ZoomFactor property, or due to the user manually modifying the zoom. When it is modified by the caller via the ZoomFactor property, the internal zoom factor is updated immediately and there will be no ZoomFactorChanged event. WebView associates the last used zoom factor for each site. Therefore, it is possible for the zoom factor to change when navigating to a different page. When the zoom factor changes due to this, the ZoomFactorChanged event fires right after the DocumentStateChanged event.

```cpp
  HRESULT hr = m_webview->add_ZoomFactorChanged(
      Microsoft::WRL::Callback<IWebView2ZoomFactorChangedEventHandler>(
          this, &ScenarioUI::ZoomFactorChangedEventHandler)
          .Get(), &m_zoomFactorChangedToken);
```

```cpp
HRESULT ScenarioUI::ZoomFactorChangedEventHandler(IWebView2WebView* sender, IUnknown* args) {
  double zoomFactor = 0;
  // The ZoomFactorChanged event has no event args because the ZoomFactor is a
  // property you can obtain off of the webview.
  HRESULT hr = m_webview->get_ZoomFactor(&zoomFactor);

  if (SUCCEEDED(hr)) {
    double zoomPercent = zoomFactor * 100;
    std::wstring zoomPercentText =
        std::to_wstring(static_cast<int>(zoomPercent));
    UpdateZoomFactorUI(zoomPercentText.c_str());
  }

  return hr;
}
```

#### remove_ZoomFactorChanged 

Remove an event handler previously added with add_ZoomFactorChanged.

> public HRESULT [remove_ZoomFactorChanged](#interface_i_web_view2_web_view_1aea548ed385ec6da89a45acec9257d003)(EventRegistrationToken token)

#### add_PermissionRequested 

Add an event handler for the PermissionRequested event.

> public HRESULT [add_PermissionRequested](#interface_i_web_view2_web_view_1a56d5be170335da55302e94dc4f98dd3f)([IWebView2PermissionRequestedEventHandler](IWebView2PermissionRequestedEventHandler.md#interface_i_web_view2_permission_requested_event_handler) * eventHandler,EventRegistrationToken * token)

Fires when content in a WebView requests permission to access some privileged resources.

#### remove_PermissionRequested 

Remove an event handler previously added with add_PermissionRequested.

> public HRESULT [remove_PermissionRequested](#interface_i_web_view2_web_view_1a49c139ce73d56b74a44046a2a94df455)(EventRegistrationToken token)

#### add_ProcessFailed 

Add an event handler for the ProcessFailed event.

> public HRESULT [add_ProcessFailed](#interface_i_web_view2_web_view_1ae368d9f3f5ea52af860808df53de21aa)([IWebView2ProcessFailedEventHandler](IWebView2ProcessFailedEventHandler.md#interface_i_web_view2_process_failed_event_handler) * eventHandler,EventRegistrationToken * token)

Fires when a WebView process terminated unexpectedly or become unresponsive.

```cpp
  hr = m_webview->add_ProcessFailed(
      Microsoft::WRL::Callback<IWebView2ProcessFailedEventHandler>(
          this, &ScenarioProcess::ProcessFailedEventHandler)
          .Get(),
      &m_processFailedToken);
```

```cpp
HRESULT ScenarioProcess::ProcessFailedEventHandler(
    IWebView2WebView* sender,
    IWebView2ProcessFailedEventArgs* args) {
  WEBVIEW2_PROCESS_FAILED_KIND kind;

  HRESULT hr = args->get_ProcessFailedKind(&kind);
  if (SUCCEEDED(hr)) {
    // When the browser process crashes the WebView is put into a closed state.
    // You need to create a new WebView to begin to recover.
    bool newWebViewNeeded =
        (kind == WEBVIEW2_PROCESS_FAILED_KIND_BROWSER_PROCESS_EXITED);

    if (newWebViewNeeded) {
      // All methods except for the Settings and Source getters will fail for
      // this now closed WebView. So we keep a reference to the closed WebView
      // to transfer its state to the new WebView we will create.
      m_previousWebView = m_webview;
      m_webview = nullptr;

      Microsoft::WRL::ComPtr<IWebView2Environment> webviewEnvironment;

      // Use CreateWebView2Environment to create a default WebView environment
      // using installed version of Edge
      hr = CreateWebView2Environment(
          Microsoft::WRL::Callback<
              IWebView2CreateWebView2EnvironmentCompletedHandler>(
              [this](HRESULT result,
                     IWebView2Environment* webviewEnvironment) -> HRESULT {
                HRESULT hr = E_FAIL;
                if (SUCCEEDED(result)) {
                  hr = webviewEnvironment->CreateWebView(
                      m_hwnd,
                      Microsoft::WRL::Callback<
                          IWebView2CreateWebViewCompletedHandler>(
                          this, &ScenarioProcess::CreateWebViewCompletedHandler)
                          .Get());
                }
                return hr;
              })
              .Get());

    } else {
      // If the render process is unresponsive we can Reload the page in it to
      // attempt recovery. If the render process crashes we get a new render
      // process navigated to an error page and we can Reload to go back to the
      // previous page.
      m_webview->Reload();
    }
  }

  return hr;
}

HRESULT ScenarioProcess::CreateWebViewCompletedHandler(
    HRESULT error,
    IWebView2WebView* webview) {
  ComPtr<IWebView2Settings> previousSettings;
  ComPtr<IWebView2Settings> settings;
  BOOL value = FALSE;
  HRESULT hr = S_OK;

  m_webview = webview;

  // The previous WebView is closed. All methods will fail except for the
  // getters for the Settings object and the Source string. Get these values and
  // transfer them to the newly created WebView.
  hr = m_previousWebView->get_Settings(&previousSettings);
  if (SUCCEEDED(hr)) {
    hr = m_webview->get_Settings(&settings);
  }

  if (SUCCEEDED(hr)) {
    hr = previousSettings->get_AreDefaultScriptDialogsEnabled(&value);
  }
  if (SUCCEEDED(hr)) {
    hr = settings->put_AreDefaultScriptDialogsEnabled(value);
  }

  if (SUCCEEDED(hr)) {
    hr = previousSettings->get_IsFullscreenAllowed(&value);
  }
  if (SUCCEEDED(hr)) {
    hr = settings->put_IsFullscreenAllowed(value);
  }

  if (SUCCEEDED(hr)) {
    hr = previousSettings->get_IsScriptEnabled(&value);
  }
  if (SUCCEEDED(hr)) {
    hr = settings->put_IsScriptEnabled(value);
  }

  if (SUCCEEDED(hr)) {
    hr = previousSettings->get_IsWebMessageEnabled(&value);
  }
  if (SUCCEEDED(hr)) {
    hr = settings->put_IsWebMessageEnabled(value);
  }

  if (SUCCEEDED(hr)) {
    hr = m_webview->add_ProcessFailed(
        Microsoft::WRL::Callback<IWebView2ProcessFailedEventHandler>(
            this, &ScenarioProcess::ProcessFailedEventHandler)
            .Get(),
        &m_processFailedToken);

    if (SUCCEEDED(hr)) {
      PWSTR uri = nullptr;
      m_previousWebView->get_Source(&uri);
      const bool uriFailedAgain =
          m_failureUri.length() > 0 && wcscmp(uri, m_failureUri.c_str()) == 0;

      if (uriFailedAgain && m_retryCount > 2) {
        hr = m_webview->NavigateToString(L"<h1>Process Failure</h1>");
      } else {
        if (uriFailedAgain) {
          m_retryCount++;
        }
        hr = m_webview->Navigate(uri);
      }

      CoTaskMemFree(uri);
    }
  }

  return hr;
}
```

#### remove_ProcessFailed 

Remove an event handler previously added with add_ProcessFailed.

> public HRESULT [remove_ProcessFailed](#interface_i_web_view2_web_view_1a4426b79e7d5373db1253e04b09765a8f)(EventRegistrationToken token)

#### AddScriptToExecuteOnDocumentCreated 

Add the provided JavaScript to a list of scripts that should be executed after the global object has been created, but before the HTML document has been parsed and before any other script included by the HTML document is executed.

> public HRESULT [AddScriptToExecuteOnDocumentCreated](#interface_i_web_view2_web_view_1a1a103e2a19f6cf5fb31e2e99f2dda652)(LPCWSTR javaScript,[IWebView2AddScriptToExecuteOnDocumentCreatedCompletedHandler](IWebView2AddScriptToExecuteOnDocumentCreatedCompletedHandler.md#interface_i_web_view2_add_script_to_execute_on_document_created_completed_handler) * handler)

The injected script will apply to all future top level document and child frame navigations until removed with RemoveScriptToExecuteOnDocumentCreated. This is applied asynchronously and you must wait for the completion handler to run before you can be sure that the script is ready to execute on future navigations.

```cpp
  // In this sample we want to stop child frames from using window.open.
  // Because the initialize JavaScript runs before any script in the HTML
  // document we can trust the results of our checks on window.parent and
  // window.top.
  static const LPCWSTR initializeJavaScript =
      L"if (window.parent !== window.top) {"
      L"  delete window.open;"
      L"}";

  m_webview->AddScriptToExecuteOnDocumentCreated(
      initializeJavaScript,
      Microsoft::WRL::Callback<IWebView2AddScriptToExecuteOnDocumentCreatedCompletedHandler>(
          this, &ScenarioScript::AddScriptToExecuteOnDocumentCreatedCompletedHandler)
          .Get());

  m_webview->Navigate(L"https://example.com/");
}

HRESULT ScenarioScript::AddScriptToExecuteOnDocumentCreatedCompletedHandler(HRESULT error,
                                                                LPCWSTR id) {
  HRESULT hr = error;
  if (SUCCEEDED(hr)) {
    m_id = id;  // Store the ID so we can remove it later.
  }
  return hr;
}

void ScenarioScript::Close() {
  if (m_id.length() > 0) {
    m_webview->RemoveScriptToExecuteOnDocumentCreated(m_id.c_str());
  }
}
```

#### RemoveScriptToExecuteOnDocumentCreated 

Remove the corresponding JavaScript added via AddScriptToExecuteOnDocumentCreated.

> public HRESULT [RemoveScriptToExecuteOnDocumentCreated](#interface_i_web_view2_web_view_1a5f05f00c324ad3a1b773039ca7941d9b)(LPCWSTR id)

#### ExecuteScript 

Execute JavaScript code from the javascript parameter in the current top level document rendered in the WebView.

> public HRESULT [ExecuteScript](#interface_i_web_view2_web_view_1a815441aceb1588264e801761085de322)(LPCWSTR javaScript,[IWebView2ExecuteScriptCompletedHandler](IWebView2ExecuteScriptCompletedHandler.md#interface_i_web_view2_execute_script_completed_handler) * handler)

This will execute asynchronously and when complete, if a handler is provided in the ExecuteScriptCompletedHandler parameter, its Invoke method will be called with the result of evaluating the provided JavaScript. The result value is a JSON encoded string. Only basic JavaScript types are supported (string, number, array, etc) and for anything unsupported (`undefined`, `{a:1}`, `document.body`, etc) the string 'null' will be returned. Note that a function that has no explicit return value returns undefined. If the executed script throws an unhandled exception, then the result is also 'null'. This method is applied asynchronously. If the call is made while the webview is on one document, and a navigation occurs after the call is made but before the JavaScript is executed, then the ExecuteScript call is ignored.

```cpp
HRESULT ScenarioScript::NavigationCompletedEventHandler(
    IWebView2WebView* sender, IWebView2NavigationCompletedEventArgs* args) {
  static const LPCWSTR scriptToEval =
      L"window.getComputedStyle(document.body).backgroundColor";
  return m_webview->ExecuteScript(
      scriptToEval,
      Microsoft::WRL::Callback<IWebView2ExecuteScriptCompletedHandler>(
          [](HRESULT error, LPCWSTR result) -> HRESULT {
            HRESULT hr = S_OK;
            UpdateBackgroundColor(result);

            return hr;
          })
          .Get());
}
```

#### CapturePreview 

Capture an image of what WebView is displaying.

> public HRESULT [CapturePreview](#interface_i_web_view2_web_view_1a1d04f117ee7a3f8828bdaad7eecc6668)([WEBVIEW2_CAPTURE_PREVIEW_IMAGE_FORMAT](#interface_i_web_view2_web_view_1a10b47cc3a871007318b235771b8d1f9c) imageFormat,IStream * imageStream,[IWebView2CapturePreviewCompletedHandler](IWebView2CapturePreviewCompletedHandler.md#interface_i_web_view2_capture_preview_completed_handler) * handler)

Specify the format of the image with the imageFormat parameter. The resulting image binary data is written to the provided imageStream parameter. When CapturePreview finishes writing to the stream, the Invoke method on the provided handler parameter is called.

```cpp
  OPENFILENAME openFileName = {};
  openFileName.lStructSize = sizeof(openFileName);
  openFileName.hwndOwner = nullptr;
  openFileName.hInstance = nullptr;
  WCHAR fileName[MAX_PATH] = L"Preview.png";
  openFileName.lpstrFile = fileName;
  openFileName.lpstrFilter = L"PNG File\0*.png\0";
  openFileName.nMaxFile = ARRAYSIZE(fileName);
  openFileName.Flags = OFN_OVERWRITEPROMPT;

  if (GetSaveFileName(&openFileName)) {
    ComPtr<IStream> stream;
    if (SUCCEEDED(SHCreateStreamOnFileEx(fileName, STGM_READWRITE | STGM_CREATE,
                                         FILE_ATTRIBUTE_NORMAL, TRUE, nullptr,
                                         &stream))) {
      webview->CapturePreview(
          WEBVIEW2_CAPTURE_PREVIEW_IMAGE_FORMAT_PNG, stream.Get(),
          Microsoft::WRL::Callback<IWebView2CapturePreviewCompletedHandler>(
              [](HRESULT error_code) -> HRESULT {
                MessageBox(nullptr, L"Preview Captured", L"Preview Captured",
                           MB_OK);
                return S_OK;
              })
              .Get());
    }
  }
```

#### Reload 

Reload the current page.

> public HRESULT [Reload](#interface_i_web_view2_web_view_1af12695d21d3d16fb6593424411b89c3c)()

This is similar to navigating to the URI of current top level document including all navigation events firing and respecting any entries in the HTTP cache. But, the back/forward history will not be modified.

#### get_Bounds 

The webview bounds.

> public HRESULT [get_Bounds](#interface_i_web_view2_web_view_1a18657afad7fd4f184854d90a89986ce8)(RECT * bounds)

Bounds are relative to the parent HWND. The app has two ways it can position a WebView:

1. Create a child HWND that is the WebView parent HWND. Position this window where the WebView should be. In this case, use (0, 0) for the WebView's Bound's top left corner (the offset).

1. Use the app's top most window as the WebView parent HWND. Set the WebView's Bound's top left corner so that the WebView is positioned correctly in the app. The Bound's values are in the host's coordinate space.

```cpp
  RECT bounds;
  GetClientRect(hwnd, &bounds);
  return m_webview->put_Bounds(bounds);
```

#### put_Bounds 

Set the webview bounds.

> public HRESULT [put_Bounds](#interface_i_web_view2_web_view_1abdd3b3f3f40ec9b5fb40550674dec528)(RECT bounds)

#### get_ZoomFactor 

The zoom factor for the current page in the WebView.

> public HRESULT [get_ZoomFactor](#interface_i_web_view2_web_view_1a7da9d85461e2908a8fe2042ba982ee32)(double * zoomFactor)

The zoom factor is persisted per site. Note that changing zoom factor could cause `window.innerWidth/innerHeight` and page layout to change. When WebView navigates to a page from a different site, the zoom factor set for the previous page will not be applied. If the app wants to set the zoom factor for a certain page, the earliest place to do it is in the DocumentStateChanged event handler. Note that if it does that, it might receive a ZoomFactorChanged event for the persisted zoom factor before receiving the ZoomFactorChanged event for the specified zoom factor. Specifying a zoomFactor less than or equal to 0 is not allowed. WebView also has an internal supported zoom factor range. When a specified zoom factor is out of that range, it will be normalized to be within the range, and a ZoomFactorChanged event will be fired for the real applied zoom factor. When this range normalization happens, the ZoomFactor property will report the zoom factor specified during the previous modification of the ZoomFactor property until the ZoomFactorChanged event is received after webview applies the normalized zoom factor.

```cpp
void ScenarioUI::ResetZoomFactor() {
  // ZoomFactor is a scale value. So, 1 means no change in zoom.
  m_webview->put_ZoomFactor(1.0);
}

void ScenarioUI::IncreaseZoomFactor() {
  double zoomFactor = 0.0;
  if (SUCCEEDED(m_webview->get_ZoomFactor(&zoomFactor))) {
    if (zoomFactor < 5.0) {
      m_webview->put_ZoomFactor(zoomFactor + 0.1);
    }
  }
}

void ScenarioUI::DecreaseZoomFactor() {
  double zoomFactor = 0.0;
  if (SUCCEEDED(m_webview->get_ZoomFactor(&zoomFactor))) {
    if (zoomFactor > 0.1) {
      m_webview->put_ZoomFactor(zoomFactor - 0.1);
    }
  }
}
```

#### put_ZoomFactor 

Set the zoom factor.

> public HRESULT [put_ZoomFactor](#interface_i_web_view2_web_view_1a51a93b00b7c94c5c1d9e2a37b9ef6df3)(double zoomFactor)

#### get_IsVisible 

Show or hide the browser window.

> public HRESULT [get_IsVisible](#interface_i_web_view2_web_view_1a828193b6c1d597f1a589afc54c49bd3a)(BOOL * isVisible)

If IsVisible is set to false, the webview will be transparent and will not be rendered. However, this will not affect the window containing the webview (the HWND parameter that was passed to CreateWebView). If you want that window to disappear too, call ShowWindow on it directly in addition to modifying the IsVisible property. WebView as a child window won't get window messages when the top window is minimized or restored. For performance reason, developer should set IsVisible property of the WebView to false when the app window is minimized and back to true when app window is restored. App window can do this by handling SC_MINIMIZE and SC_RESTORE command upon receiving WM_SYSCOMMAND message.

```cpp
bool WebView::ToggleIsVisible() {
  BOOL setting_value = FALSE;
  m_webview->get_IsVisible(&setting_value);
  m_webview->put_IsVisible(!setting_value);
  return !setting_value;
}
```

```cpp
    case WM_SYSCOMMAND: {
      if (wParam == SC_MINIMIZE) {
        m_webview->ToggleIsVisible();
      } else if (wParam == SC_RESTORE) {
        m_webview->ToggleIsVisible();
      }
    } break;
```

#### put_IsVisible 

Show or hide the browser window.

> public HRESULT [put_IsVisible](#interface_i_web_view2_web_view_1a7fd9470d593cdd63b3cf46066f5b5bcc)(BOOL isVisible)

#### PostWebMessageAsJson 

Post the specified webMessage to the top level document in this [IWebView2WebView](#interface_i_web_view2_web_view).

> public HRESULT [PostWebMessageAsJson](#interface_i_web_view2_web_view_1aa89c9b6074f9b0d70fe20d963c4cb15e)(LPCWSTR webMessageAsJson)

The top level document's window.chrome.webview's message event fires. JavaScript in that document may subscribe and unsubscribe to the event via the following: 
```cpp
window.chrome.webview.addEventListener('message', handler)
window.chrome.webview.removeEventListener('message', handler)
```
 The event args is an instance of `MessageEvent`. The IWebView2Settings::IsWebMessageEnabled setting must be true or this method will fail with E_INVALIDARG. The event arg's data property is the webMessage string parameter parsed as a JSON string into a JavaScript object. The event arg's source property is a reference to the `window.chrome.webview` object. See SetWebMessageReceivedEventHandler for information on sending messages from the HTML document in the webview to the host. This message is sent asynchronously. If a navigation occurs before the message is posted to the page, then the message will not be sent.

```cpp
HRESULT ScenarioWebMessage::WebMessageReceivedEventHandler(
    IWebView2WebView* sender, IWebView2WebMessageReceivedEventArgs* args) {
  PWSTR uri = nullptr;
  PWSTR webMessageAsJson = nullptr;
  HRESULT hr = args->get_Source(&uri);

  // Always validate the origin of the message is what you expect.
  if (SUCCEEDED(hr) && IsExpectedUri(uri)) {
    // WebMessageAsJson gives the message as a JSON object serialized string
    // and so must be parsed with a JSON parser.
    hr = args->get_WebMessageAsJson(&webMessageAsJson);

    if (SUCCEEDED(hr)) {
      HString dataFromMessage = GetDataFromScenarioMessage(webMessageAsJson);
      DWORD countFromMessage = GetCountFromScenarioMessage(webMessageAsJson);

      HString responseMessageJson = CreateScenarioDataMessage(
          dataFromMessage.GetRawBuffer(nullptr), countFromMessage + 1);

      hr = m_webview->PostWebMessageAsJson(
          responseMessageJson.GetRawBuffer(nullptr));
    }
  }

  CoTaskMemFree(uri);
  CoTaskMemFree(webMessageAsJson);

  return hr;
}
```

#### PostWebMessageAsString 

This is a helper for posting a message that is a simple string rather than a JSON string representation of a JavaScript object.

> public HRESULT [PostWebMessageAsString](#interface_i_web_view2_web_view_1a6b45a3bf0135e9a32014f759bdeef7cb)(LPCWSTR webMessageAsString)

This behaves in exactly the same manner as PostWebMessageAsJson but the `window.chrome.webview` message event arg's data property will be a string with the same value as webMessageAsString. Use this instead of PostWebMessageAsJson if you want to communicate via simple strings rather than JSON objects.

#### add_WebMessageReceived 

This event fires when the IsWebMessageEnabled setting is set and the top level document of the webview calls `window.chrome.webview.postMessage`.

> public HRESULT [add_WebMessageReceived](#interface_i_web_view2_web_view_1ab141e100936bb17a246f4c0af2ebc125)([IWebView2WebMessageReceivedEventHandler](IWebView2WebMessageReceivedEventHandler.md#interface_i_web_view2_web_message_received_event_handler) * handler,EventRegistrationToken * token)

The postMessage function is `void postMessage(object)` where object is any object supported by JSON conversion.

```cpp
        window.chrome.webview.addEventListener('message', arg => {
            if (arg.data.count < 2) {
                arg.source.postMessage({
                    data: arg.data.data,
                    count: arg.data.count + 1
                });
            }
        });
        window.chrome.webview.postMessage({ data: "hello", count: 0 });
```
 When postMessage is called, the [IWebView2WebMessageReceivedEventHandler](IWebView2WebMessageReceivedEventHandler.md#interface_i_web_view2_web_message_received_event_handler) set via this SetWebMessageReceivedEventHandler method will be invoked with the postMessage's object parameter converted to a JSON string.

Call add_WebMessageReceived to add an event handler.

```cpp
      // Setup the web message received event handler before navigating to
      // ensure we don't miss any messages.
      m_webview->add_WebMessageReceived(
          Microsoft::WRL::Callback<IWebView2WebMessageReceivedEventHandler>(
              this, &::ScenarioWebMessage::WebMessageReceivedEventHandler)
              .Get(), &m_webMessageReceivedToken);
```
 The event handler receives the event args object for the event.

```cpp
HRESULT ScenarioWebMessage::WebMessageReceivedEventHandler(
    IWebView2WebView* sender, IWebView2WebMessageReceivedEventArgs* args) {
  PWSTR uri = nullptr;
  PWSTR webMessageAsJson = nullptr;
  HRESULT hr = args->get_Source(&uri);

  // Always validate the origin of the message is what you expect.
  if (SUCCEEDED(hr) && IsExpectedUri(uri)) {
    // WebMessageAsJson gives the message as a JSON object serialized string
    // and so must be parsed with a JSON parser.
    hr = args->get_WebMessageAsJson(&webMessageAsJson);

    if (SUCCEEDED(hr)) {
      HString dataFromMessage = GetDataFromScenarioMessage(webMessageAsJson);
      DWORD countFromMessage = GetCountFromScenarioMessage(webMessageAsJson);

      HString responseMessageJson = CreateScenarioDataMessage(
          dataFromMessage.GetRawBuffer(nullptr), countFromMessage + 1);

      hr = m_webview->PostWebMessageAsJson(
          responseMessageJson.GetRawBuffer(nullptr));
    }
  }

  CoTaskMemFree(uri);
  CoTaskMemFree(webMessageAsJson);

  return hr;
}
```

#### remove_WebMessageReceived 

Remove an event handler previously added with add_WebMessageReceived.

> public HRESULT [remove_WebMessageReceived](#interface_i_web_view2_web_view_1aa88405e6ca157207ea1ad67eb90d477b)(EventRegistrationToken token)

#### Close 

Closes the webview and cleans up the underlying browser instance.

> public HRESULT [Close](#interface_i_web_view2_web_view_1ab89c2d6cf7e33606791af1907d34c9d6)()

After calling Close, all method calls will fail and event handlers will stop firing.

```cpp
  WEBVIEW2_PROCESS_FAILED_KIND kind;

  HRESULT hr = args->get_ProcessFailedKind(&kind);
  if (SUCCEEDED(hr)) {
    // When the browser process crashes the WebView is put into a closed state.
    // You need to create a new WebView to begin to recover.
    bool newWebViewNeeded =
        (kind == WEBVIEW2_PROCESS_FAILED_KIND_BROWSER_PROCESS_EXITED);

    if (newWebViewNeeded) {
      // All methods except for the Settings and Source getters will fail for
      // this now closed WebView. So we keep a reference to the closed WebView
      // to transfer its state to the new WebView we will create.
      m_previousWebView = m_webview;
      m_webview = nullptr;

      Microsoft::WRL::ComPtr<IWebView2Environment> webviewEnvironment;

      // Use CreateWebView2Environment to create a default WebView environment
      // using installed version of Edge
      hr = CreateWebView2Environment(
          Microsoft::WRL::Callback<
              IWebView2CreateWebView2EnvironmentCompletedHandler>(
              [this](HRESULT result,
                     IWebView2Environment* webviewEnvironment) -> HRESULT {
                HRESULT hr = E_FAIL;
                if (SUCCEEDED(result)) {
                  hr = webviewEnvironment->CreateWebView(
                      m_hwnd,
                      Microsoft::WRL::Callback<
                          IWebView2CreateWebViewCompletedHandler>(
                          this, &ScenarioProcess::CreateWebViewCompletedHandler)
                          .Get());
                }
                return hr;
              })
              .Get());

    } else {
      // If the render process is unresponsive we can Reload the page in it to
      // attempt recovery. If the render process crashes we get a new render
      // process navigated to an error page and we can Reload to go back to the
      // previous page.
      m_webview->Reload();
    }
  }
```

#### CallDevToolsProtocolMethod 

Call an asynchronous DevToolsProtocol method.

> public HRESULT [CallDevToolsProtocolMethod](#interface_i_web_view2_web_view_1a2f423dcdc6d712f18fbebaad47dad4ca)(LPCWSTR methodName,LPCWSTR parametersAsJson,[IWebView2CallDevToolsProtocolMethodCompletedHandler](IWebView2CallDevToolsProtocolMethodCompletedHandler.md#interface_i_web_view2_call_dev_tools_protocol_method_completed_handler) * handler)

See the [DevTools Protocol Viewer](https://aka.ms/DevToolsProtocolDocs) for a list and description of available methods. The methodName parameter is the full name of the method in the format `{domain}.{method}`. The parametersAsJson parameter is a JSON formatted string containing the parameters for the corresponding method. The handler's Invoke method will be called when the method asynchronously completes. Invoke will be called with the method's return object as a JSON string.

```cpp
  m_webview->CallDevToolsProtocolMethod(
      L"Log.enable", L"{}",
      Microsoft::WRL::Callback<IWebView2CallDevToolsProtocolMethodCompletedHandler>(
          this, &ScenarioDevToolsProtocol::DevToolsProtocolMethodCompleted)
          .Get());
```

```cpp
HRESULT ScenarioDevToolsProtocol::DevToolsProtocolMethodCompleted(
    HRESULT error,
    LPCWSTR result) {
  HRESULT hr = error;
  if (SUCCEEDED(hr)) {
    m_webview->add_DevToolsProtocolEventReceived(
        L"Log.entryAdded",
        Microsoft::WRL::Callback<IWebView2DevToolsProtocolEventReceivedEventHandler>(
            this, &ScenarioDevToolsProtocol::DevToolsProtocolEventReceived)
            .Get(), &m_devToolsProtocolToken);
  }

  return hr;
}
```

#### add_DevToolsProtocolEventReceived 

Subscribe to a DevToolsProtocol event.

> public HRESULT [add_DevToolsProtocolEventReceived](#interface_i_web_view2_web_view_1a36d94c59be8b0154e368831fc54edee9)(LPCWSTR eventName,[IWebView2DevToolsProtocolEventReceivedEventHandler](IWebView2DevToolsProtocolEventReceivedEventHandler.md#interface_i_web_view2_dev_tools_protocol_event_received_event_handler) * handler,EventRegistrationToken * token)

See the [DevTools Protocol Viewer](https://aka.ms/DevToolsProtocolDocs) for a list and description of available events. The eventName parameter is the full name of the event in the format `{domain}.{event}`. The handler's Invoke method will be called whenever the corresponding DevToolsProtocol event fires. Invoke will be called with the an event args object containing the CDP event's parameter object as a JSON string.

```cpp
    m_webview->add_DevToolsProtocolEventReceived(
        L"Log.entryAdded",
        Microsoft::WRL::Callback<IWebView2DevToolsProtocolEventReceivedEventHandler>(
            this, &ScenarioDevToolsProtocol::DevToolsProtocolEventReceived)
            .Get(), &m_devToolsProtocolToken);
```

```cpp
HRESULT ScenarioDevToolsProtocol::DevToolsProtocolEventReceived(
    IWebView2WebView* sender, IWebView2DevToolsProtocolEventReceivedEventArgs* args) {
  PWSTR parameterObjectAsJson = nullptr;

  HRESULT hr = args->get_ParameterObjectAsJson(&parameterObjectAsJson);
  HString text = GetTextFromEntryAddedDevToolsProtocolEventParameterObject(
      parameterObjectAsJson);

  LogMessage(text.GetRawBuffer(nullptr));

  CoTaskMemFree(parameterObjectAsJson);

  return hr;
}
```

#### remove_DevToolsProtocolEventReceived 

Remove an event handler previously added with add_DevToolsProtocolEventReceived.

> public HRESULT [remove_DevToolsProtocolEventReceived](#interface_i_web_view2_web_view_1a1985b336b13e00958e014ab690823374)(LPCWSTR eventName,EventRegistrationToken token)

#### get_BrowserProcessId 

The process id of the browser process that hosts the WebView.

> public HRESULT [get_BrowserProcessId](#interface_i_web_view2_web_view_1a42ac0f40e782f3739678a54f02041ea6)(UINT32 * value)

#### WEBVIEW2_CAPTURE_PREVIEW_IMAGE_FORMAT 

Image format used by the [IWebView2WebView::CapturePreview](#interface_i_web_view2_web_view_1a1d04f117ee7a3f8828bdaad7eecc6668) method.

> enum [WEBVIEW2_CAPTURE_PREVIEW_IMAGE_FORMAT](#interface_i_web_view2_web_view_1a10b47cc3a871007318b235771b8d1f9c)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
WEBVIEW2_CAPTURE_PREVIEW_IMAGE_FORMAT_PNG            | PNG image format.
WEBVIEW2_CAPTURE_PREVIEW_IMAGE_FORMAT_JPEG            | JPEG image format.

#### WEBVIEW2_SCRIPT_DIALOG_KIND 

Kind of JavaScript dialog used in the [IWebView2ScriptDialogOpeningEventHandler](IWebView2ScriptDialogOpeningEventHandler.md#interface_i_web_view2_script_dialog_opening_event_handler) interface.

> enum [WEBVIEW2_SCRIPT_DIALOG_KIND](#interface_i_web_view2_web_view_1a6180fcb980ca62aeebdccb0511b32a78)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
WEBVIEW2_SCRIPT_DIALOG_KIND_ALERT            | A dialog invoked via the window.alert JavaScript function.
WEBVIEW2_SCRIPT_DIALOG_KIND_CONFIRM            | A dialog invoked via the window.confirm JavaScript function.
WEBVIEW2_SCRIPT_DIALOG_KIND_PROMPT            | A dialog invoked via the window.prompt JavaScript function.

#### WEBVIEW2_PROCESS_FAILED_KIND 

Kind of process failure used in the [IWebView2ProcessFailedEventHandler](IWebView2ProcessFailedEventHandler.md#interface_i_web_view2_process_failed_event_handler) interface.

> enum [WEBVIEW2_PROCESS_FAILED_KIND](#interface_i_web_view2_web_view_1ab39b04c165e6bd9b41044070f4addc5f)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
WEBVIEW2_PROCESS_FAILED_KIND_BROWSER_PROCESS_EXITED            | Indicates the browser process terminated unexpectedly.
WEBVIEW2_PROCESS_FAILED_KIND_RENDER_PROCESS_EXITED            | Indicates the render process terminated unexpectedly.
WEBVIEW2_PROCESS_FAILED_KIND_RENDER_PROCESS_UNRESPONSIVE            | Indicates the render process becomes unresponsive.

#### WEBVIEW2_PERMISSION_TYPE 

The type of a permission request.

> enum [WEBVIEW2_PERMISSION_TYPE](#interface_i_web_view2_web_view_1a92fe308a93a24813da9ca0ba84c412d6)

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

> enum [WEBVIEW2_PERMISSION_STATE](#interface_i_web_view2_web_view_1aeffb35b30ac1903baac33c0b971b441e)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
WEBVIEW2_PERMISSION_STATE_DEFAULT            | Use default browser behavior, which normally prompt users for decision.
WEBVIEW2_PERMISSION_STATE_ALLOW            | Grant the permission request.
WEBVIEW2_PERMISSION_STATE_DENY            | Deny the permission request.

#### WEBVIEW2_MOVE_FOCUS_REASON 

Reason for moving focus.

> enum [WEBVIEW2_MOVE_FOCUS_REASON](#interface_i_web_view2_web_view_1a094339e235eb7a1e0512c26e09f16af3)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
WEBVIEW2_MOVE_FOCUS_REASON_PROGRAMMATIC            | Code setting focus into WebView.
WEBVIEW2_MOVE_FOCUS_REASON_NEXT            | Moving focus due to Tab traversal forward.
WEBVIEW2_MOVE_FOCUS_REASON_PREVIOUS            | Moving focus due to Tab traversal backward.

#### WEBVIEW2_WEB_ERROR_STATUS 

Error values for web navigations.

> enum [WEBVIEW2_WEB_ERROR_STATUS](#interface_i_web_view2_web_view_1a0438e7212af8c0d59acb658442cd69fb)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
WEBVIEW2_WEB_ERROR_STATUS_UNKNOWN            | 
WEBVIEW2_WEB_ERROR_STATUS_CERTIFICATE_COMMON_NAME_IS_INCORRECT            | 
WEBVIEW2_WEB_ERROR_STATUS_CERTIFICATE_EXPIRED            | 
WEBVIEW2_WEB_ERROR_STATUS_CERTIFICATE_CONTAINS_ERRORS            | 
WEBVIEW2_WEB_ERROR_STATUS_CERTIFICATE_REVOKED            | 
WEBVIEW2_WEB_ERROR_STATUS_CERTIFICATE_IS_INVALID            | 
WEBVIEW2_WEB_ERROR_STATUS_SERVER_UNREACHABLE            | 
WEBVIEW2_WEB_ERROR_STATUS_TIMEOUT            | 
WEBVIEW2_WEB_ERROR_STATUS_ERROR_HTTP_INVALID_SERVER_RESPONSE            | 
WEBVIEW2_WEB_ERROR_STATUS_CONNECTION_ABORTED            | 
WEBVIEW2_WEB_ERROR_STATUS_CONNECTION_RESET            | 
WEBVIEW2_WEB_ERROR_STATUS_DISCONNECTED            | 
WEBVIEW2_WEB_ERROR_STATUS_CANNOT_CONNECT            | 
WEBVIEW2_WEB_ERROR_STATUS_HOST_NAME_NOT_RESOLVED            | 
WEBVIEW2_WEB_ERROR_STATUS_OPERATION_CANCELED            | 
WEBVIEW2_WEB_ERROR_STATUS_REDIRECT_FAILED            | 
WEBVIEW2_WEB_ERROR_STATUS_UNEXPECTED_STATUS_CODE            | 

#### WEBVIEW2_WEB_RESOURCE_CONTEXT 

Enum for resourceContextFilter of WebResourceRequested event.

> enum [WEBVIEW2_WEB_RESOURCE_CONTEXT](#interface_i_web_view2_web_view_1a84d836ed6f6e803de309300b344a3152)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
WEBVIEW2_WEB_RESOURCE_CONTEXT_ALL            | Filter all resource types.
WEBVIEW2_WEB_RESOURCE_CONTEXT_DOCUMENT            | Filter document requests.
WEBVIEW2_WEB_RESOURCE_CONTEXT_STYLESHEET            | Filter CSS resources.
WEBVIEW2_WEB_RESOURCE_CONTEXT_IMAGE            | Filter image resources.
WEBVIEW2_WEB_RESOURCE_CONTEXT_MEDIA            | Filter other media types such as videos.
WEBVIEW2_WEB_RESOURCE_CONTEXT_FONT            | Filter fonts.
WEBVIEW2_WEB_RESOURCE_CONTEXT_SCRIPT            | Filter scripts.
WEBVIEW2_WEB_RESOURCE_CONTEXT_XML_HTTP_REQUEST            | Filter XML HTTP requests.
WEBVIEW2_WEB_RESOURCE_CONTEXT_FETCH            | Filter fetch requests.

#### WEBVIEW2_RELEASE_CHANNEL_PREFERENCE 

The release channel of a browser installation.

> enum [WEBVIEW2_RELEASE_CHANNEL_PREFERENCE](#interface_i_web_view2_web_view_1a8065f6efb280380373dfa3b010e08a49)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
WEBVIEW2_RELEASE_CHANNEL_PREFERENCE_STABLE            | Choose the first installed release channel from the list: stable, beta, dev, and canary.
WEBVIEW2_RELEASE_CHANNEL_PREFERENCE_CANARY            | Choose the first installed release channel from the list: canary, dev, beta, and stable.

This is used when selecting an evergreen install of Edge. See the Edge browser documentation for more information on the various release channels, how often they update, their level of support, etc.

#### WEBVIEW2_CAPTURE_PREVIEW_IMAGE_FORMAT 

Image format used by the [IWebView2WebView::CapturePreview](#interface_i_web_view2_web_view_1a1d04f117ee7a3f8828bdaad7eecc6668) method.

> typedef [WEBVIEW2_CAPTURE_PREVIEW_IMAGE_FORMAT](#interface_i_web_view2_web_view_1a33cd5016f65d6f1e49c4fdfa609591a6)

#### WEBVIEW2_SCRIPT_DIALOG_KIND 

Kind of JavaScript dialog used in the [IWebView2ScriptDialogOpeningEventHandler](IWebView2ScriptDialogOpeningEventHandler.md#interface_i_web_view2_script_dialog_opening_event_handler) interface.

> typedef [WEBVIEW2_SCRIPT_DIALOG_KIND](#interface_i_web_view2_web_view_1a694fef62045c5aea87498c3f1bfc2b4b)

#### WEBVIEW2_PROCESS_FAILED_KIND 

Kind of process failure used in the [IWebView2ProcessFailedEventHandler](IWebView2ProcessFailedEventHandler.md#interface_i_web_view2_process_failed_event_handler) interface.

> typedef [WEBVIEW2_PROCESS_FAILED_KIND](#interface_i_web_view2_web_view_1a347fade2e5e46f339434e7a4ad4ef524)

#### WEBVIEW2_PERMISSION_TYPE 

The type of a permission request.

> typedef [WEBVIEW2_PERMISSION_TYPE](#interface_i_web_view2_web_view_1a0c8c94bd81ee9279ef68a140168d06fb)

#### WEBVIEW2_PERMISSION_STATE 

Response to a permission request.

> typedef [WEBVIEW2_PERMISSION_STATE](#interface_i_web_view2_web_view_1ad6eb3fe3e9955a3f77dd6138006f8785)

#### WEBVIEW2_MOVE_FOCUS_REASON 

Reason for moving focus.

> typedef [WEBVIEW2_MOVE_FOCUS_REASON](#interface_i_web_view2_web_view_1a91d4545f559914ff5cbeca2d973d5ed3)

#### WEBVIEW2_WEB_ERROR_STATUS 

Error values for web navigations.

> typedef [WEBVIEW2_WEB_ERROR_STATUS](#interface_i_web_view2_web_view_1a2700d86cabe3a40cff79266ae7d01077)

#### WEBVIEW2_WEB_RESOURCE_CONTEXT 

Enum for resourceContextFilter of WebResourceRequested event.

> typedef [WEBVIEW2_WEB_RESOURCE_CONTEXT](#interface_i_web_view2_web_view_1a0e254cac9552ef10ad2c277dc6950e8a)

#### WEBVIEW2_RELEASE_CHANNEL_PREFERENCE 

The release channel of a browser installation.

> typedef [WEBVIEW2_RELEASE_CHANNEL_PREFERENCE](#interface_i_web_view2_web_view_1a1706ff1841fb6c26931f3a0c1b985223)

This is used when selecting an evergreen install of Edge. See the Edge browser documentation for more information on the various release channels, how often they update, their level of support, etc.

