# interface `WebView2::IWebView2WebView` {#interface_web_view2_1_1_i_web_view2_web_view}

```
interface WebView2::IWebView2WebView
  : public IUnknown
```  

The Embedded Browser WebView enables you to host web content using the latest Edge web browser technology.

## Navigation events

The normal sequence of navigation events is NavigationStarting, ContentLoading and then NavigationCompleted.

![dot_inline_dotgraph_1.png]

In error cases there may or may not be a ContentLoading event depending on whether the navigation is continued to an error page. In case of an HTTP redirect, there will be multiple NavigationStarting events in a row, with ones following the first will have their IsRedirect flag set.

For subframes inside WebView, the only navigation event fired is the NavigationStarting event which gives host the ability to block subframe navigations.

## Process model

The Embedded Browser WebView uses the same process model as the Edge web browser. There is one Edge browser process per specified user data directory in a user session that will serve any Embedded Browser WebView calling process that specifies that user data directory. This means one Edge browser process may be serving multiple calling processes and one calling process may be using multiple Edge browser processes. ![dot_inline_dotgraph_2.png]

Off of a browser process there will be some number of renderer processes. These are created as necessary to service potentially multiple frames in different WebViews. The number of renderer processes varies based on the site isolation browser feature and the number of distinct disconnected origins rendered in associated WebViews. ![dot_inline_dotgraph_3.png]

You can react to crashes and hangs in these browser and renderer processes using the ProcessFailure event.

You can safely shutdown associated browser and renderer processes using the Close method.

## Threading model

The Embedded Browser WebView must be created on a UI thread. Specifically a thread with a message pump. All callbacks will occur on that thread and calls into the WebView must be done on that thread. It is not safe to use the WebView from another thread.

Callbacks including event handlers and completion handlers execute serially. That is, if you have an event handler running and begin a message loop no other event handlers or completion callbacks will begin executing reentrantly.

## Security

Always check the Source proprety of the WebView before using ExecuteScript, PostWebMessageAsJson, PostWebMessageAsString, or any other method to send information into the WebView. The WebView may have navigated to another page via the end user interacting with the page or script in the page causing navigation. Similarly, be very cafeful with AddScriptToExecuteOnDocumentedCreated. All future navigations will run this script and if it provides access to information intended only for a certain origin, any HTML document may have access.

When examining the result of an ExecuteScript method call, a WebMessageRecevied event, always check the Source of the sender, or any other mechanism of receiving infromation from an HTML document in a WebView validate the URI of the HTML document is what you expect.

When constructing a message to send into a WebView, prefer using PostWebMessageAsJson and construct the JSON string parameter using a JSON library. This will avoid any potential accidents of encoding information into a JSON string or script and ensure no attacker controlled input can modify the rest of the JSON message or run arbitrary script.

## String types

String out parameters are PWSTR null terminated strings. The callee allocates the string using CoTaskMemAlloc. Ownership is transferred to the caller and it is up to the caller to free the memory using CoTaskMemFree.

String in parameters are PCWSTR null terminated strings. The caller ensures the string is valid for the duration of the synchronous function call. If the callee needs to retain that value to some point after the function call completes, the callee must allocate its own copy of the string value.

## URI and JSON parsing

Various methods provide or accept URIs and JSON as strings. Please use your own preferred library for parsing and generating these strings.

If WinRT is available for your app you can use `RuntimeClass_Windows_Data_Json_JsonObject` and `IJsonObjectStatics` to parse or produce JSON strings or `RuntimeClass_Windows_Foundation_Uri` and `IUriRuntimeClassFactory` to parse and produce URIs. Both of these work in Win32 apps.

If you use IUri and CreateUri to parse URIs you may want to use the following URI creation flags to have CreateUri behavior more closely match the URI parsing in the WebView: `Uri_CREATE_ALLOW_IMPLICIT_FILE_SCHEME | Uri_CREATE_NO_DECODE_EXTRA_INFO`

## Debug

Open DevTools with the normal shortcuts: `F12` or `Ctrl+Shift+I`. You can use the `--auto-open-devtools-for-tabs` command argument switch.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} `[`IWebView2Settings`](WebView2--IWebView2Settings.md#interface_web_view2_1_1_i_web_view2_settings)` `[`Settings`](#interface_web_view2_1_1_i_web_view2_web_view_1a4f5bce71c283e2aa6753b91238dcc263) | The [IWebView2Settings](WebView2--IWebView2Settings.md#interface_web_view2_1_1_i_web_view2_settings) object contains various modifiable settings for the running WebView.
`{property} PWSTR `[`Source`](#interface_web_view2_1_1_i_web_view2_web_view_1adc7785833f94084275efa276453f8013) | The URI of the current top level document.
`{property} RECT `[`Bounds`](#interface_web_view2_1_1_i_web_view2_web_view_1ac3d6acfca7b45fc4dcc511ea53c76c5e) | The webview bounds.
`{property} double `[`ZoomFactor`](#interface_web_view2_1_1_i_web_view2_web_view_1a5bdc1cac9f78231a4b77001ff2b8a4dd) | The zoom factor for the current page in the WebView.
`{property} BOOL `[`IsVisible`](#interface_web_view2_1_1_i_web_view2_web_view_1a13b9176f105f46e21cbfb8220e85a32c) | Show or hide the browser window.
`{property} UINT32 `[`BrowserProcessId`](#interface_web_view2_1_1_i_web_view2_web_view_1a702a8991f295e0cd39ffa241b1f889a5) | The process id of the browser process that hosts the WebView.
`public HRESULT `[`Navigate`](#interface_web_view2_1_1_i_web_view2_web_view_1a07a00e6c58eee71a1a3d77326b2f2397)`(PCWSTR uri)` | Cause a navigation of the top level document to the specified URI.
`public HRESULT `[`MoveFocus`](#interface_web_view2_1_1_i_web_view2_web_view_1ac31543fe77bdf03e94d4f203cbe6f9e6)`(`[`WEBVIEW2_MOVE_FOCUS_REASON`](WebView2.md#namespace_web_view2_1a2173602305b54912e692bad884cc40dc)` reason)` | Move focus into WebView.
`public HRESULT `[`NavigateToString`](#interface_web_view2_1_1_i_web_view2_web_view_1a37edc4254fb1e2a06c5df089dc72aae0)`(PCWSTR htmlContent)` | Initiates a navigation to htmlContent as source HTML of a new document.
`public HRESULT `[`add_NavigationStarting`](#interface_web_view2_1_1_i_web_view2_web_view_1a34dd29866e1123807b2506d6364f9e8c)`(`[`IWebView2NavigationStartingEventHandler`](WebView2--IWebView2NavigationStartingEventHandler.md#interface_web_view2_1_1_i_web_view2_navigation_starting_event_handler)` * eventHandler,EventRegistrationToken * token)` | Set the handler for the NavigationStarting event.
`public HRESULT `[`remove_NavigationStarting`](#interface_web_view2_1_1_i_web_view2_web_view_1ad3f2138c51a49db2cc10003dc2df00fb)`(EventRegistrationToken token)` | 
`public HRESULT `[`add_ContentLoading`](#interface_web_view2_1_1_i_web_view2_web_view_1ab79f1c1666761c4ddb3e835f7c2c3f9e)`(`[`IWebView2ContentLoadingEventHandler`](WebView2--IWebView2ContentLoadingEventHandler.md#interface_web_view2_1_1_i_web_view2_content_loading_event_handler)` * eventHandler,EventRegistrationToken * token)` | Set the handler for the ContentLoading event.
`public HRESULT `[`remove_ContentLoading`](#interface_web_view2_1_1_i_web_view2_web_view_1ab82e71c710c136734ee83c45a76c84a2)`(EventRegistrationToken token)` | 
`public HRESULT `[`add_NavigationCompleted`](#interface_web_view2_1_1_i_web_view2_web_view_1a349612c87d19f24063557fcd8e9f19fe)`(`[`IWebView2NavigationCompletedEventHandler`](WebView2--IWebView2NavigationCompletedEventHandler.md#interface_web_view2_1_1_i_web_view2_navigation_completed_event_handler)` * eventHandler,EventRegistrationToken * token)` | Sets the handler for the NavigationCompleted event.
`public HRESULT `[`remove_NavigationCompleted`](#interface_web_view2_1_1_i_web_view2_web_view_1a83897a34b78589b304137d1e4b34d49f)`(EventRegistrationToken token)` | 
`public HRESULT `[`add_MoveFocusRequested`](#interface_web_view2_1_1_i_web_view2_web_view_1a51a081cbf976a302e1f23e365f20bcf3)`(`[`IWebView2MoveFocusRequestedEventHandler`](WebView2--IWebView2MoveFocusRequestedEventHandler.md#interface_web_view2_1_1_i_web_view2_move_focus_requested_event_handler)` * eventHandler,EventRegistrationToken * token)` | Set the handler for the MoveFocusRequested event.
`public HRESULT `[`remove_MoveFocusRequested`](#interface_web_view2_1_1_i_web_view2_web_view_1a91edc454a36e16dea35e5b6f7b9c59de)`(EventRegistrationToken token)` | 
`public HRESULT `[`add_GotFocus`](#interface_web_view2_1_1_i_web_view2_web_view_1a3dec5ac82684c6077dc1eba74ea7f3ae)`(`[`IWebView2FocusChangedEventHandler`](WebView2--IWebView2FocusChangedEventHandler.md#interface_web_view2_1_1_i_web_view2_focus_changed_event_handler)` * eventHandler,EventRegistrationToken * token)` | Set the handler for the GotFocus event.
`public HRESULT `[`remove_GotFocus`](#interface_web_view2_1_1_i_web_view2_web_view_1ad769a488316ba14fef0220a0dfe7effb)`(EventRegistrationToken token)` | 
`public HRESULT `[`add_LostFocus`](#interface_web_view2_1_1_i_web_view2_web_view_1aeb50b46eaadbbba741a2fc410bd53116)`(`[`IWebView2FocusChangedEventHandler`](WebView2--IWebView2FocusChangedEventHandler.md#interface_web_view2_1_1_i_web_view2_focus_changed_event_handler)` * eventHandler,EventRegistrationToken * token)` | Set the handler for the LostFocus event.
`public HRESULT `[`remove_LostFocus`](#interface_web_view2_1_1_i_web_view2_web_view_1a063bc972613f658f0f5b667bdc9d1ea5)`(EventRegistrationToken token)` | 
`public HRESULT `[`add_WebResourceRequested`](#interface_web_view2_1_1_i_web_view2_web_view_1ad0db43586f82845f00a8d9068fbe8a2b)`(PCWSTR *const urlFilter,`[`WEBVIEW2_WEB_RESOURCE_CONTEXT`](WebView2.md#namespace_web_view2_1a0fe271ca4cefa10b5ca037b66d06afdb)` *const resourceContextFilter,SIZE_T filterLengh,`[`IWebView2WebResourceRequestedEventHandler`](WebView2--IWebView2WebResourceRequestedEventHandler.md#interface_web_view2_1_1_i_web_view2_web_resource_requested_event_handler)` * eventHandler,EventRegistrationToken * token)` | Sets the handler for the WebResourceRequested event.
`public HRESULT `[`remove_WebResourceRequested`](#interface_web_view2_1_1_i_web_view2_web_view_1aee7a037b7fd347d3396af4e3a20a31de)`(EventRegistrationToken token)` | 
`public HRESULT `[`add_ScriptDialogOpening`](#interface_web_view2_1_1_i_web_view2_web_view_1a230970efcd12740c44524719a8e9dcfa)`(`[`IWebView2ScriptDialogOpeningEventHandler`](WebView2--IWebView2ScriptDialogOpeningEventHandler.md#interface_web_view2_1_1_i_web_view2_script_dialog_opening_event_handler)` * eventHandler,EventRegistrationToken * token)` | Set a handler for the JavaScriptDialogOpening event.
`public HRESULT `[`remove_ScriptDialogOpening`](#interface_web_view2_1_1_i_web_view2_web_view_1a9f235b73d76f69f1477bf04128a20b6a)`(EventRegistrationToken token)` | 
`public HRESULT `[`add_ZoomFactorChanged`](#interface_web_view2_1_1_i_web_view2_web_view_1a542bc0ebad6c0a193e98d71c2c969c1f)`(`[`IWebView2ZoomFactorChangedEventHandler`](WebView2--IWebView2ZoomFactorChangedEventHandler.md#interface_web_view2_1_1_i_web_view2_zoom_factor_changed_event_handler)` * eventHandler,EventRegistrationToken * token)` | Set a handler for the ZoomFactorChanged event.
`public HRESULT `[`remove_ZoomFactorChanged`](#interface_web_view2_1_1_i_web_view2_web_view_1a121ac96a061936b20d8789ecc4a1d63e)`(EventRegistrationToken token)` | 
`public HRESULT `[`add_PermissionRequested`](#interface_web_view2_1_1_i_web_view2_web_view_1a25f1444c2631408ae5d82243bb3430e8)`(`[`IWebView2PermissionRequestedEventHandler`](WebView2--IWebView2PermissionRequestedEventHandler.md#interface_web_view2_1_1_i_web_view2_permission_requested_event_handler)` * eventHandler,EventRegistrationToken * token)` | Set the handler for the PermissionRequested event.
`public HRESULT `[`remove_PermissionRequested`](#interface_web_view2_1_1_i_web_view2_web_view_1af1582d1a2919dce927d01d48fb3e82e5)`(EventRegistrationToken token)` | 
`public HRESULT `[`add_ProcessFailed`](#interface_web_view2_1_1_i_web_view2_web_view_1a14fbb8abb2c6c421f1db6b2d899a9052)`(`[`IWebView2ProcessFailedEventHandler`](WebView2--IWebView2ProcessFailedEventHandler.md#interface_web_view2_1_1_i_web_view2_process_failed_event_handler)` * eventHandler,EventRegistrationToken * token)` | Set the handler for the ProcessFailed event.
`public HRESULT `[`remove_ProcessFailed`](#interface_web_view2_1_1_i_web_view2_web_view_1af1722af95fd70f0e0a00e7ea89cd3ad6)`(EventRegistrationToken token)` | 
`public HRESULT `[`AddScriptToExecuteOnDocumentedCreated`](#interface_web_view2_1_1_i_web_view2_web_view_1ae28c71247c6f0ecde5c86329a1e4c175)`(PCWSTR javaScript,`[`IWebView2AddScriptToExecuteOnDocumentedCreatedCompletedHandler`](WebView2--IWebView2AddScriptToExecuteOnDocumentedCreatedCompletedHandler.md#interface_web_view2_1_1_i_web_view2_add_script_to_execute_on_documented_created_completed_handler)` * handler)` | Add the provided JavaScript to a list of scripts that should be executed after the global object has been created, but before any other script included by the HTML document is executed.
`public HRESULT `[`RemoveScriptToExecuteOnDocumentedCreated`](#interface_web_view2_1_1_i_web_view2_web_view_1aaa511a658721ea7751808d9fafb7f6d2)`(PCWSTR id)` | Remove the corresponding JavaScript added via AddScriptToExecuteOnDocumentedCreated.
`public HRESULT `[`ExecuteScript`](#interface_web_view2_1_1_i_web_view2_web_view_1a9ada959d45ff2063cf9856dc19a5b6f8)`(PCWSTR javaScript,`[`IWebView2ExecuteScriptCompletedHandler`](WebView2--IWebView2ExecuteScriptCompletedHandler.md#interface_web_view2_1_1_i_web_view2_execute_script_completed_handler)` * handler)` | Execute the JavaScript code from the javascript parameter in the current top level document rendered in the WebView.
`public HRESULT `[`CapturePreview`](#interface_web_view2_1_1_i_web_view2_web_view_1a1c78fc1c5357a98d4b9b6519124ce335)`(`[`WEBVIEW2_CAPTURE_PREVIEW_IMAGE_FORMAT`](WebView2.md#namespace_web_view2_1a3d7590b9a0e1fc4ca4aef8ccdb28c88f)` imageFormat,IStream * imageStream,`[`IWebView2CapturePreviewCompletedHandler`](WebView2--IWebView2CapturePreviewCompletedHandler.md#interface_web_view2_1_1_i_web_view2_capture_preview_completed_handler)` * handler)` | Capture an image of what WebView is displaying.
`public HRESULT `[`Reload`](#interface_web_view2_1_1_i_web_view2_web_view_1a6fa5cfa7aff4370f9b452d142cf12046)`()` | Reload the current page.
`public HRESULT `[`PostWebMessageAsJson`](#interface_web_view2_1_1_i_web_view2_web_view_1ae272a41831998945efc9894a18aed806)`(PCWSTR webMessageAsJson)` | Post the specified webMessage to the top level document in this [IWebView2WebView](#interface_web_view2_1_1_i_web_view2_web_view).
`public HRESULT `[`PostWebMessageAsString`](#interface_web_view2_1_1_i_web_view2_web_view_1a633c45914b2285ee2135f4c8ca0371ef)`(PCWSTR webMessageAsString)` | This is a helper for posting a message that is a simple string rather than a JSON string representation of a JavaScript object.
`public HRESULT `[`add_WebMessageReceived`](#interface_web_view2_1_1_i_web_view2_web_view_1a9eab080c57fc76b195559269a7f41219)`(`[`IWebView2WebMessageReceivedEventHandler`](WebView2--IWebView2WebMessageReceivedEventHandler.md#interface_web_view2_1_1_i_web_view2_web_message_received_event_handler)` * handler,EventRegistrationToken * token)` | This event fires when the IsWebMessageEnabled setting is set and the top level document of the webview calls `window.chrome.webview.postMessage`.
`public HRESULT `[`remove_WebMessageReceived`](#interface_web_view2_1_1_i_web_view2_web_view_1ad06122bfbc8d1b37db7e16908b9c51bb)`(EventRegistrationToken token)` | 
`public HRESULT `[`Close`](#interface_web_view2_1_1_i_web_view2_web_view_1a0b13ec7b240d2408f8e5f6553eb63a4d)`()` | Closes the webview and cleans up the underlying browser instance.
`public HRESULT `[`CallDevToolsProtocolMethod`](#interface_web_view2_1_1_i_web_view2_web_view_1ac0c4c86d8dce1417087ed259a12cfcee)`(PCWSTR methodName,PCWSTR parametersAsJson,`[`IWebView2CallDevToolsProtocolMethodCompletedHandler`](WebView2--IWebView2CallDevToolsProtocolMethodCompletedHandler.md#interface_web_view2_1_1_i_web_view2_call_dev_tools_protocol_method_completed_handler)` * handler)` | Call an asynchronous DevToolsProtocol method.
`public HRESULT `[`add_DevToolsProtocolEventReceived`](#interface_web_view2_1_1_i_web_view2_web_view_1a93c5bf5e27c89844ce1b3b162191776a)`(PCWSTR eventName,`[`IWebView2DevToolsProtocolEventReceivedEventHandler`](WebView2--IWebView2DevToolsProtocolEventReceivedEventHandler.md#interface_web_view2_1_1_i_web_view2_dev_tools_protocol_event_received_event_handler)` * handler,EventRegistrationToken * token)` | Subscribe to a DevToolsProtocol event.
`public HRESULT `[`remove_DevToolsProtocolEventReceived`](#interface_web_view2_1_1_i_web_view2_web_view_1ad1534dd5329b9e977123664e9390b692)`(PCWSTR eventName,EventRegistrationToken token)` | 

## Members

#### `{property} `[`IWebView2Settings`](WebView2--IWebView2Settings.md#interface_web_view2_1_1_i_web_view2_settings)` `[`Settings`](#interface_web_view2_1_1_i_web_view2_web_view_1a4f5bce71c283e2aa6753b91238dcc263) {#interface_web_view2_1_1_i_web_view2_web_view_1a4f5bce71c283e2aa6753b91238dcc263}

The [IWebView2Settings](WebView2--IWebView2Settings.md#interface_web_view2_1_1_i_web_view2_settings) object contains various modifiable settings for the running WebView.

#### `{property} PWSTR `[`Source`](#interface_web_view2_1_1_i_web_view2_web_view_1adc7785833f94084275efa276453f8013) {#interface_web_view2_1_1_i_web_view2_web_view_1adc7785833f94084275efa276453f8013}

The URI of the current top level document.

This value changes as a part of the ContentLoading event firing.

```cpp
HRESULT ScenarioNavigateAndEvents::ContentLoadingEventHandler(
    IWebView2WebView* sender, IWebView2ContentLoadingEventArgs* args) {
  PWSTR uri = nullptr;
  HRESULT hr = m_webview->get_Source(&uri);

  // The ContentLoading event is the first time during a navigation in which
  // we have transitioned the top level document to begin displaying content
  // from the new URI. This is the appropriate time to update our UI with
  // the new URI.
  if (SUCCEEDED(hr)) {
    UpdateDisplayedUri(uri);
    CoTaskMemFree(uri);
  }

  return hr;
}
```

#### `{property} RECT `[`Bounds`](#interface_web_view2_1_1_i_web_view2_web_view_1ac3d6acfca7b45fc4dcc511ea53c76c5e) {#interface_web_view2_1_1_i_web_view2_web_view_1ac3d6acfca7b45fc4dcc511ea53c76c5e}

The webview bounds.

Bounds are relative to the parent HWND. The app has two ways it can position a WebView:

1. Create a child HWND that is the WebView parent HWND. Position this window where the WebView should be. In this case, use (0, 0) for the WebView's Bound's top left corner (the offset).

1. Use the app's top most window as the WebView parent HWND. Set the WebView's Bound's top left corner so that the WebView is positioned correctly in the app. The Bound's values are in the host's coordinate space.

```cpp
  RECT bounds;
  GetClientRect(hwnd, &bounds);
  return m_webview->put_Bounds(bounds);
```

#### `{property} double `[`ZoomFactor`](#interface_web_view2_1_1_i_web_view2_web_view_1a5bdc1cac9f78231a4b77001ff2b8a4dd) {#interface_web_view2_1_1_i_web_view2_web_view_1a5bdc1cac9f78231a4b77001ff2b8a4dd}

The zoom factor for the current page in the WebView.

The zoom factor is persisted per site. Note that changing zoom factor could cause `window.innerWidth/innerHeight` and page layout to change. When WebView navigates to a page from a different site, the zoom factor set for the previous page will not be applied. If the app wants to set the zoom factor for a certain page, the earliest place to do it is in the ContentLoading event handler. Note that if it does that, it might receive a ZoomFactorChanged event for the persisted zoom factor before receiving the ZoomFactorChanged event for the specified zoom factor. Specifying a zoomFactor less than or equal to 0 is not allowed. WebView also has an internal supported zoom factor range. When a specified zoom factor is out of that range, it will be normalized to be within the range, and a ZoomFactorChanged event will be fired for the real applied zoom factor. When this range normalization happens, the ZoomFactor property will report the zoom factor specified during the previous modification of the ZoomFactor property until the ZoomFactorChanged event is received after webview applies the normalized zoom factor.

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

#### `{property} BOOL `[`IsVisible`](#interface_web_view2_1_1_i_web_view2_web_view_1a13b9176f105f46e21cbfb8220e85a32c) {#interface_web_view2_1_1_i_web_view2_web_view_1a13b9176f105f46e21cbfb8220e85a32c}

Show or hide the browser window.

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

#### `{property} UINT32 `[`BrowserProcessId`](#interface_web_view2_1_1_i_web_view2_web_view_1a702a8991f295e0cd39ffa241b1f889a5) {#interface_web_view2_1_1_i_web_view2_web_view_1a702a8991f295e0cd39ffa241b1f889a5}

The process id of the browser process that hosts the WebView.

#### `public HRESULT `[`Navigate`](#interface_web_view2_1_1_i_web_view2_web_view_1a07a00e6c58eee71a1a3d77326b2f2397)`(PCWSTR uri)` {#interface_web_view2_1_1_i_web_view2_web_view_1a07a00e6c58eee71a1a3d77326b2f2397}

Cause a navigation of the top level document to the specified URI.

See the navigation events for more information. Note that this starts a navigation and the corresponding NavigationStarting event won't fire synchronoulsy during this Navigate call.

```cpp
  // Setup navigation event handlers before calling navigate to avoid any races.
  m_webview->add_NavigationStarting(
      Microsoft::WRL::Callback<IWebView2NavigationStartingEventHandler>(
          this, &ScenarioNavigateAndEvents::NavigationStartingEventHandler)
          .Get(), &m_navigationStartingToken);

  m_webview->add_ContentLoading(
      Microsoft::WRL::Callback<IWebView2ContentLoadingEventHandler>(
          this, &ScenarioNavigateAndEvents::ContentLoadingEventHandler)
          .Get(), &m_contentLoadingToken);

  m_webview->add_NavigationCompleted(
      Microsoft::WRL::Callback<IWebView2NavigationCompletedEventHandler>(
          this, &ScenarioNavigateAndEvents::NavigationCompletedEventHandler)
          .Get(), &m_navigationCompletedToken);

  m_webview->Navigate(L"https://example.com/");
```

#### `public HRESULT `[`MoveFocus`](#interface_web_view2_1_1_i_web_view2_web_view_1ac31543fe77bdf03e94d4f203cbe6f9e6)`(`[`WEBVIEW2_MOVE_FOCUS_REASON`](WebView2.md#namespace_web_view2_1a2173602305b54912e692bad884cc40dc)` reason)` {#interface_web_view2_1_1_i_web_view2_web_view_1ac31543fe77bdf03e94d4f203cbe6f9e6}

Move focus into WebView.

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
          m_webview->MoveFocus([WEBVIEW2_MOVE_FOCUS_REASON_PREVIOUS](WebView2.md#namespace_web_view2_1a2173602305b54912e692bad884cc40dca4704402380d443d221e4a58ae4073cf7));
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
          m_webview->MoveFocus([WEBVIEW2_MOVE_FOCUS_REASON_NEXT](WebView2.md#namespace_web_view2_1a2173602305b54912e692bad884cc40dca9a50e84e2067bd4d2678bcc8de57bad4));
        }
      }
    } else if ((wParam == VK_RETURN) && (hWnd == m_addressbarWindow)) {
      // Navigate to the address upon Enter on address bar
      [Navigate](#interface_web_view2_1_1_i_web_view2_web_view_1a07a00e6c58eee71a1a3d77326b2f2397)();
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

#### `public HRESULT `[`NavigateToString`](#interface_web_view2_1_1_i_web_view2_web_view_1a37edc4254fb1e2a06c5df089dc72aae0)`(PCWSTR htmlContent)` {#interface_web_view2_1_1_i_web_view2_web_view_1a37edc4254fb1e2a06c5df089dc72aae0}

Initiates a navigation to htmlContent as source HTML of a new document.

The htmlContent parameter may not be larger than 2 MB of characters. The origin of the new page will be about:blank.

```cpp
            static const LPCWSTR htmlContent =
                L"<h1>Allowed URIs</h1><p>You've attempted to navigate away "
                L"from "
                L"the allowed URIs. Go back to <a "
                L"href='https://example.com/'>example.com</a>.</p>";
            hr = m_webview->NavigateToString(htmlContent);
```

#### `public HRESULT `[`add_NavigationStarting`](#interface_web_view2_1_1_i_web_view2_web_view_1a34dd29866e1123807b2506d6364f9e8c)`(`[`IWebView2NavigationStartingEventHandler`](WebView2--IWebView2NavigationStartingEventHandler.md#interface_web_view2_1_1_i_web_view2_navigation_starting_event_handler)` * eventHandler,EventRegistrationToken * token)` {#interface_web_view2_1_1_i_web_view2_web_view_1a34dd29866e1123807b2506d6364f9e8c}

Set the handler for the NavigationStarting event.

NavigationStarting fires when the WebView main frame or a subframe is requesting permission to navigate to a different URI. This will fire for redirects as well.

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
  // example.com, but child frames may navigate anywhere.

  // So we check that this NavigationStarting is for the main frame.
  BOOL mainFrame = FALSE;
  HRESULT hr = args->get_IsMainFrame(&mainFrame);
  if (SUCCEEDED(hr) && mainFrame) {
    PWSTR uriAsPWSTR = nullptr;
    hr = args->get_Uri(&uriAsPWSTR);

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
  }
  return hr;
}
```

#### `public HRESULT `[`remove_NavigationStarting`](#interface_web_view2_1_1_i_web_view2_web_view_1ad3f2138c51a49db2cc10003dc2df00fb)`(EventRegistrationToken token)` {#interface_web_view2_1_1_i_web_view2_web_view_1ad3f2138c51a49db2cc10003dc2df00fb}

#### `public HRESULT `[`add_ContentLoading`](#interface_web_view2_1_1_i_web_view2_web_view_1ab79f1c1666761c4ddb3e835f7c2c3f9e)`(`[`IWebView2ContentLoadingEventHandler`](WebView2--IWebView2ContentLoadingEventHandler.md#interface_web_view2_1_1_i_web_view2_content_loading_event_handler)` * eventHandler,EventRegistrationToken * token)` {#interface_web_view2_1_1_i_web_view2_web_view_1ab79f1c1666761c4ddb3e835f7c2c3f9e}

Set the handler for the ContentLoading event.

ContentLoading fires when new content has started loading on the webview's main frame, and response headers are available. This follows the NavigationStarting event and precedes the NavigationCompleted event.

```cpp
  m_webview->add_ContentLoading(
      Microsoft::WRL::Callback<IWebView2ContentLoadingEventHandler>(
          this, &ScenarioNavigateAndEvents::ContentLoadingEventHandler)
          .Get(), &m_contentLoadingToken);
```

```cpp
HRESULT ScenarioNavigateAndEvents::ContentLoadingEventHandler(
    IWebView2WebView* sender, IWebView2ContentLoadingEventArgs* args) {
  PWSTR uri = nullptr;
  HRESULT hr = m_webview->get_Source(&uri);

  // The ContentLoading event is the first time during a navigation in which
  // we have transitioned the top level document to begin displaying content
  // from the new URI. This is the appropriate time to update our UI with
  // the new URI.
  if (SUCCEEDED(hr)) {
    UpdateDisplayedUri(uri);
    CoTaskMemFree(uri);
  }

  return hr;
}
```

#### `public HRESULT `[`remove_ContentLoading`](#interface_web_view2_1_1_i_web_view2_web_view_1ab82e71c710c136734ee83c45a76c84a2)`(EventRegistrationToken token)` {#interface_web_view2_1_1_i_web_view2_web_view_1ab82e71c710c136734ee83c45a76c84a2}

#### `public HRESULT `[`add_NavigationCompleted`](#interface_web_view2_1_1_i_web_view2_web_view_1a349612c87d19f24063557fcd8e9f19fe)`(`[`IWebView2NavigationCompletedEventHandler`](WebView2--IWebView2NavigationCompletedEventHandler.md#interface_web_view2_1_1_i_web_view2_navigation_completed_event_handler)` * eventHandler,EventRegistrationToken * token)` {#interface_web_view2_1_1_i_web_view2_web_view_1a349612c87d19f24063557fcd8e9f19fe}

Sets the handler for the NavigationCompleted event.

NavigationCompleted event fires when the WebView has completely loaded (body.onload has fired) or loading stopped with error.

```cpp
  m_webview->add_NavigationCompleted(
      Microsoft::WRL::Callback<IWebView2NavigationCompletedEventHandler>(
          this, &ScenarioNavigateAndEvents::NavigationCompletedEventHandler)
          .Get(), &m_navigationCompletedToken);
```

```cpp
HRESULT ScenarioNavigateAndEvents::ContentLoadingEventHandler(
    IWebView2WebView* sender, IWebView2ContentLoadingEventArgs* args) {
  PWSTR uri = nullptr;
  HRESULT hr = m_webview->get_Source(&uri);

  // The ContentLoading event is the first time during a navigation in which
  // we have transitioned the top level document to begin displaying content
  // from the new URI. This is the appropriate time to update our UI with
  // the new URI.
  if (SUCCEEDED(hr)) {
    UpdateDisplayedUri(uri);
    CoTaskMemFree(uri);
  }

  return hr;
}
```

#### `public HRESULT `[`remove_NavigationCompleted`](#interface_web_view2_1_1_i_web_view2_web_view_1a83897a34b78589b304137d1e4b34d49f)`(EventRegistrationToken token)` {#interface_web_view2_1_1_i_web_view2_web_view_1a83897a34b78589b304137d1e4b34d49f}

#### `public HRESULT `[`add_MoveFocusRequested`](#interface_web_view2_1_1_i_web_view2_web_view_1a51a081cbf976a302e1f23e365f20bcf3)`(`[`IWebView2MoveFocusRequestedEventHandler`](WebView2--IWebView2MoveFocusRequestedEventHandler.md#interface_web_view2_1_1_i_web_view2_move_focus_requested_event_handler)` * eventHandler,EventRegistrationToken * token)` {#interface_web_view2_1_1_i_web_view2_web_view_1a51a081cbf976a302e1f23e365f20bcf3}

Set the handler for the MoveFocusRequested event.

MoveFocusRequested fires when user tries to tab out of the WebView. The WebView's focus has not changed when this event is fired.

```cpp
      m_webview->add_MoveFocusRequested(
          Callback<IWebView2MoveFocusRequestedEventHandler>(
              [moveFocusOut](IWebView2WebView* sender, IWebView2MoveFocusRequestedEventArgs* args) -> HRESULT {
                [WEBVIEW2_MOVE_FOCUS_REASON](WebView2.md#namespace_web_view2_1a2173602305b54912e692bad884cc40dc) reason;
                args->get_Reason(&reason);
                // callback to handle move focus out of WebView
                bool forward = (reason == [WEBVIEW2_MOVE_FOCUS_REASON_NEXT](WebView2.md#namespace_web_view2_1a2173602305b54912e692bad884cc40dca9a50e84e2067bd4d2678bcc8de57bad4));
                bool handled = moveFocusOut(forward);
                args->put_Handled(handled ? TRUE : FALSE);
                return S_OK;
              })
              .Get(), &m_moveFocusRequestedToken);
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

#### `public HRESULT `[`remove_MoveFocusRequested`](#interface_web_view2_1_1_i_web_view2_web_view_1a91edc454a36e16dea35e5b6f7b9c59de)`(EventRegistrationToken token)` {#interface_web_view2_1_1_i_web_view2_web_view_1a91edc454a36e16dea35e5b6f7b9c59de}

#### `public HRESULT `[`add_GotFocus`](#interface_web_view2_1_1_i_web_view2_web_view_1a3dec5ac82684c6077dc1eba74ea7f3ae)`(`[`IWebView2FocusChangedEventHandler`](WebView2--IWebView2FocusChangedEventHandler.md#interface_web_view2_1_1_i_web_view2_focus_changed_event_handler)` * eventHandler,EventRegistrationToken * token)` {#interface_web_view2_1_1_i_web_view2_web_view_1a3dec5ac82684c6077dc1eba74ea7f3ae}

Set the handler for the GotFocus event.

GotFocus fires when WebView got focus.

```cpp
      m_webview->add_GotFocus(
          Callback<IWebView2FocusChangedEventHandler>([callback](
                                                    IWebView2WebView* sender, IUnknown* args) -> HRESULT {
            // notify app that webivew got focus,
            // do something like update status bar.
            callback();
            return S_OK;
          }).Get(), &m_gotFocusToken);
```

#### `public HRESULT `[`remove_GotFocus`](#interface_web_view2_1_1_i_web_view2_web_view_1ad769a488316ba14fef0220a0dfe7effb)`(EventRegistrationToken token)` {#interface_web_view2_1_1_i_web_view2_web_view_1ad769a488316ba14fef0220a0dfe7effb}

#### `public HRESULT `[`add_LostFocus`](#interface_web_view2_1_1_i_web_view2_web_view_1aeb50b46eaadbbba741a2fc410bd53116)`(`[`IWebView2FocusChangedEventHandler`](WebView2--IWebView2FocusChangedEventHandler.md#interface_web_view2_1_1_i_web_view2_focus_changed_event_handler)` * eventHandler,EventRegistrationToken * token)` {#interface_web_view2_1_1_i_web_view2_web_view_1aeb50b46eaadbbba741a2fc410bd53116}

Set the handler for the LostFocus event.

LostFocus fires when WebView lost focus. In the case where MoveFocusRequested event is fired, the focus is still on WebView when MoveFocusRequested event fires. Lost focus only fires afterwards when app's code or default action of MoveFocusRequested event set focus away from WebView.

```cpp
      m_webview->add_LostFocus(
          Callback<IWebView2FocusChangedEventHandler>([callback](
                                                    IWebView2WebView* sender, IUnknown* args) -> HRESULT {
            // notify app that webivew lost focus,
            // do something like update status bar.
            callback();
            return S_OK;
          }).Get(), &m_lostFocusToken);
```

#### `public HRESULT `[`remove_LostFocus`](#interface_web_view2_1_1_i_web_view2_web_view_1a063bc972613f658f0f5b667bdc9d1ea5)`(EventRegistrationToken token)` {#interface_web_view2_1_1_i_web_view2_web_view_1a063bc972613f658f0f5b667bdc9d1ea5}

#### `public HRESULT `[`add_WebResourceRequested`](#interface_web_view2_1_1_i_web_view2_web_view_1ad0db43586f82845f00a8d9068fbe8a2b)`(PCWSTR *const urlFilter,`[`WEBVIEW2_WEB_RESOURCE_CONTEXT`](WebView2.md#namespace_web_view2_1a0fe271ca4cefa10b5ca037b66d06afdb)` *const resourceContextFilter,SIZE_T filterLengh,`[`IWebView2WebResourceRequestedEventHandler`](WebView2--IWebView2WebResourceRequestedEventHandler.md#interface_web_view2_1_1_i_web_view2_web_resource_requested_event_handler)` * eventHandler,EventRegistrationToken * token)` {#interface_web_view2_1_1_i_web_view2_web_view_1ad0db43586f82845f00a8d9068fbe8a2b}

Sets the handler for the WebResourceRequested event.

Fires when the WebView has performs any HTTP request. Use urlFilter to pass in a list with size filterLength of urls to listen for. Each url entry also supports wildcards: '*': zero or more, '?' exactly one. For each urlFilter entry, provide a matching resourceContextFilter as a bit vector of type of resources WebResourceRequested should fire matching that urlFilter. if filterLength is 0, the event will fire for all network requests. The supported resource contexts are: Document, Stylesheet, Image, Media, Font, Script, XHR, Fetch.

```cpp
  m_webview->add_WebResourceRequested(
    all_urls, images_filter, 1,
      Callback<IWebView2WebResourceRequestedEventHandler>(
          this, &WebView::WebResourceRequestedEventHandler)
          .Get(), &m_webResourceRequestedToken);
```

```cpp
HRESULT WebView::WebResourceRequestedEventHandler(
    IWebView2WebView* sender, IWebView2WebResourceRequestedEventArgs* args) {
  if (block_images_) {
    ComPtr<IWebView2WebResourceResponse> response;
    [CreateWebResourceResponse](WebView2.md#namespace_web_view2_1a3906660e8e40f651e6f9e1acf1cd9b0c)(nullptr, 200, L"OK", L"", &response);
    args->put_Response(response.Get());
  }

  return S_OK;
}
```

#### `public HRESULT `[`remove_WebResourceRequested`](#interface_web_view2_1_1_i_web_view2_web_view_1aee7a037b7fd347d3396af4e3a20a31de)`(EventRegistrationToken token)` {#interface_web_view2_1_1_i_web_view2_web_view_1aee7a037b7fd347d3396af4e3a20a31de}

#### `public HRESULT `[`add_ScriptDialogOpening`](#interface_web_view2_1_1_i_web_view2_web_view_1a230970efcd12740c44524719a8e9dcfa)`(`[`IWebView2ScriptDialogOpeningEventHandler`](WebView2--IWebView2ScriptDialogOpeningEventHandler.md#interface_web_view2_1_1_i_web_view2_script_dialog_opening_event_handler)` * eventHandler,EventRegistrationToken * token)` {#interface_web_view2_1_1_i_web_view2_web_view_1a230970efcd12740c44524719a8e9dcfa}

Set a handler for the JavaScriptDialogOpening event.

The event fires when a JavaScript dialog (alert, confirm, or prompt) will show for the webview. This event only fires if the [IWebView2Settings::AreDefaultScriptDialogsEnabled](WebView2--IWebView2Settings.md#interface_web_view2_1_1_i_web_view2_settings_1afd5520d1b26b15b052c532c9d477437c) property is set to false.

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
  [WEBVIEW2_SCRIPT_DIALOG_KIND](WebView2.md#namespace_web_view2_1a1ab09f6743a36d1c809d10567a8a3dc8) kind;
  HRESULT hr = args->get_Kind(&kind);
  if (SUCCEEDED(hr)) {
    PWSTR message = nullptr;
    hr = args->get_Message(&message);

    if (kind == [WEBVIEW2_SCRIPT_DIALOG_KIND_ALERT](WebView2.md#namespace_web_view2_1a1ab09f6743a36d1c809d10567a8a3dc8adeb1cbd0e6d62805bc8e81db4165fdf6)) {
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

#### `public HRESULT `[`remove_ScriptDialogOpening`](#interface_web_view2_1_1_i_web_view2_web_view_1a9f235b73d76f69f1477bf04128a20b6a)`(EventRegistrationToken token)` {#interface_web_view2_1_1_i_web_view2_web_view_1a9f235b73d76f69f1477bf04128a20b6a}

#### `public HRESULT `[`add_ZoomFactorChanged`](#interface_web_view2_1_1_i_web_view2_web_view_1a542bc0ebad6c0a193e98d71c2c969c1f)`(`[`IWebView2ZoomFactorChangedEventHandler`](WebView2--IWebView2ZoomFactorChangedEventHandler.md#interface_web_view2_1_1_i_web_view2_zoom_factor_changed_event_handler)` * eventHandler,EventRegistrationToken * token)` {#interface_web_view2_1_1_i_web_view2_web_view_1a542bc0ebad6c0a193e98d71c2c969c1f}

Set a handler for the ZoomFactorChanged event.

The event fires when the ZoomFactor property of the WebView changes. The event could fire because the caller modified the ZoomFactor property, or due to the user manually modifying the zoom. When it is modified by the caller via the ZoomFactor property, the internal zoom factor is updated immediately and there will be no ZoomFactorChanged event. WebView associates the last used zoom factor for each site. Therefore, it is possible for the zoom factor to change when navigating to a different page. When the zoom factor changes due to this, the ZoomFactorChanged event fires right after the ContentLoading event.

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

#### `public HRESULT `[`remove_ZoomFactorChanged`](#interface_web_view2_1_1_i_web_view2_web_view_1a121ac96a061936b20d8789ecc4a1d63e)`(EventRegistrationToken token)` {#interface_web_view2_1_1_i_web_view2_web_view_1a121ac96a061936b20d8789ecc4a1d63e}

#### `public HRESULT `[`add_PermissionRequested`](#interface_web_view2_1_1_i_web_view2_web_view_1a25f1444c2631408ae5d82243bb3430e8)`(`[`IWebView2PermissionRequestedEventHandler`](WebView2--IWebView2PermissionRequestedEventHandler.md#interface_web_view2_1_1_i_web_view2_permission_requested_event_handler)` * eventHandler,EventRegistrationToken * token)` {#interface_web_view2_1_1_i_web_view2_web_view_1a25f1444c2631408ae5d82243bb3430e8}

Set the handler for the PermissionRequested event.

Fires when content in a WebView requests permission to access some privileged resources.

#### `public HRESULT `[`remove_PermissionRequested`](#interface_web_view2_1_1_i_web_view2_web_view_1af1582d1a2919dce927d01d48fb3e82e5)`(EventRegistrationToken token)` {#interface_web_view2_1_1_i_web_view2_web_view_1af1582d1a2919dce927d01d48fb3e82e5}

#### `public HRESULT `[`add_ProcessFailed`](#interface_web_view2_1_1_i_web_view2_web_view_1a14fbb8abb2c6c421f1db6b2d899a9052)`(`[`IWebView2ProcessFailedEventHandler`](WebView2--IWebView2ProcessFailedEventHandler.md#interface_web_view2_1_1_i_web_view2_process_failed_event_handler)` * eventHandler,EventRegistrationToken * token)` {#interface_web_view2_1_1_i_web_view2_web_view_1a14fbb8abb2c6c421f1db6b2d899a9052}

Set the handler for the ProcessFailed event.

Fires when a WebView process terminated unexpectedly or become unresponsive.

```cpp
  hr = m_webview->add_ProcessFailed(
      Microsoft::WRL::Callback<IWebView2ProcessFailedEventHandler>(
          this, &ScenarioProcess::ProcessFailedEventHandler)
          .Get(), &m_processFailedToken);
```

```cpp
HRESULT ScenarioProcess::ProcessFailedEventHandler(
    IWebView2WebView* sender, IWebView2ProcessFailedEventArgs* args) {
  [WEBVIEW2_PROCESS_FAILED_KIND](WebView2.md#namespace_web_view2_1a2794d545285fa052fa349351357b6671) kind;

  HRESULT hr = args->get_ProcessFailedKind(&kind);
  if (SUCCEEDED(hr)) {
    // When the browser process crashes the WebView is put into a closed state.
    // You need to create a new WebView to begin to recover.
    bool newWebViewNeeded = (kind == [WEBVIEW2_PROCESS_FAILED_KIND_BROWSER_PROCESS_EXITED](WebView2.md#namespace_web_view2_1a2794d545285fa052fa349351357b6671afd4e56c4370c33325372a9f5f8cac172));

    if (newWebViewNeeded) {
      // All methods except for the Settings and Source getters will fail for
      // this now closed WebView. So we keep a reference to the closed WebView
      // to transfer its state to the new WebView we will create.
      m_previousWebView = m_webview;
      m_webview = nullptr;

      EB_WEBVIEW_CREATION_PARAMS creationParams;
      creationParams.parentWindow = m_hwnd;

      // Set the installation folder to null to use the installed version of
      // Edge.
      creationParams.embeddedEdgeSubFolder = nullptr;
      creationParams.releaseChannelPreference =
          [WEBVIEW2_RELEASE_CHANNEL_PREFERENCE_STABLE](WebView2.md#namespace_web_view2_1a3b29227a511fb1d92aeee1768d53ef78a2ee31b51d4653b532c2d5d359276ed3e);

      // We use the default nullptr to indicate we want the default user data
      // directory shared with other win32 apps.
      creationParams.userDataDir = nullptr;

      hr = [CreateWebView](WebView2.md#namespace_web_view2_1ae58b78c1b6e90b834304138fc418ed74)(
          creationParams,
          Microsoft::WRL::Callback<IWebView2CreateWebViewCompletedHandler>(
              this, &ScenarioProcess::CreateWebViewCompletedHandler)
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

HRESULT ScenarioProcess::CreateWebViewCompletedHandler(HRESULT error,
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
            .Get(), &m_processFailedToken);

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

#### `public HRESULT `[`remove_ProcessFailed`](#interface_web_view2_1_1_i_web_view2_web_view_1af1722af95fd70f0e0a00e7ea89cd3ad6)`(EventRegistrationToken token)` {#interface_web_view2_1_1_i_web_view2_web_view_1af1722af95fd70f0e0a00e7ea89cd3ad6}

#### `public HRESULT `[`AddScriptToExecuteOnDocumentedCreated`](#interface_web_view2_1_1_i_web_view2_web_view_1ae28c71247c6f0ecde5c86329a1e4c175)`(PCWSTR javaScript,`[`IWebView2AddScriptToExecuteOnDocumentedCreatedCompletedHandler`](WebView2--IWebView2AddScriptToExecuteOnDocumentedCreatedCompletedHandler.md#interface_web_view2_1_1_i_web_view2_add_script_to_execute_on_documented_created_completed_handler)` * handler)` {#interface_web_view2_1_1_i_web_view2_web_view_1ae28c71247c6f0ecde5c86329a1e4c175}

Add the provided JavaScript to a list of scripts that should be executed after the global object has been created, but before any other script included by the HTML document is executed.

The injected script will apply to all future top level document and child frame navigations until removed with RemoveScriptToExecuteOnDocumentedCreated. This is applied asynchronously and you must wait for the completion handler to run before you can be sure that the script is ready to execute on future navigations.

```cpp
  // In this sample we want to stop child frames from using window.open.
  // Because the initialize JavaScript runs before any script in the HTML
  // document we can trust the results of our checks on window.parent and
  // window.top.
  static const LPCWSTR initializeJavaScript =
      L"if (window.parent !== window.top) {"
      L"  delete window.open;"
      L"}";

  m_webview->AddScriptToExecuteOnDocumentedCreated(
      initializeJavaScript,
      Microsoft::WRL::Callback<IWebView2AddScriptToExecuteOnDocumentedCreatedCompletedHandler>(
          this, &ScenarioScript::AddScriptToExecuteOnDocumentedCreatedCompletedHandler)
          .Get());

  m_webview->Navigate(L"https://example.com/");
}

HRESULT ScenarioScript::AddScriptToExecuteOnDocumentedCreatedCompletedHandler(HRESULT error,
                                                                LPCWSTR id) {
  HRESULT hr = error;
  if (SUCCEEDED(hr)) {
    m_id = id;  // Store the ID so we can remove it later.
  }
  return hr;
}

void ScenarioScript::Close() {
  if (m_id.length() > 0) {
    m_webview->RemoveScriptToExecuteOnDocumentedCreated(m_id.c_str());
  }
}
```

#### `public HRESULT `[`RemoveScriptToExecuteOnDocumentedCreated`](#interface_web_view2_1_1_i_web_view2_web_view_1aaa511a658721ea7751808d9fafb7f6d2)`(PCWSTR id)` {#interface_web_view2_1_1_i_web_view2_web_view_1aaa511a658721ea7751808d9fafb7f6d2}

Remove the corresponding JavaScript added via AddScriptToExecuteOnDocumentedCreated.

#### `public HRESULT `[`ExecuteScript`](#interface_web_view2_1_1_i_web_view2_web_view_1a9ada959d45ff2063cf9856dc19a5b6f8)`(PCWSTR javaScript,`[`IWebView2ExecuteScriptCompletedHandler`](WebView2--IWebView2ExecuteScriptCompletedHandler.md#interface_web_view2_1_1_i_web_view2_execute_script_completed_handler)` * handler)` {#interface_web_view2_1_1_i_web_view2_web_view_1a9ada959d45ff2063cf9856dc19a5b6f8}

Execute the JavaScript code from the javascript parameter in the current top level document rendered in the WebView.

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

#### `public HRESULT `[`CapturePreview`](#interface_web_view2_1_1_i_web_view2_web_view_1a1c78fc1c5357a98d4b9b6519124ce335)`(`[`WEBVIEW2_CAPTURE_PREVIEW_IMAGE_FORMAT`](WebView2.md#namespace_web_view2_1a3d7590b9a0e1fc4ca4aef8ccdb28c88f)` imageFormat,IStream * imageStream,`[`IWebView2CapturePreviewCompletedHandler`](WebView2--IWebView2CapturePreviewCompletedHandler.md#interface_web_view2_1_1_i_web_view2_capture_preview_completed_handler)` * handler)` {#interface_web_view2_1_1_i_web_view2_web_view_1a1c78fc1c5357a98d4b9b6519124ce335}

Capture an image of what WebView is displaying.

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
          [WEBVIEW2_CAPTURE_PREVIEW_IMAGE_FORMAT_PNG](WebView2.md#namespace_web_view2_1a3d7590b9a0e1fc4ca4aef8ccdb28c88fad7afee799977859d93e31dc632f2a1bc), stream.Get(),
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

#### `public HRESULT `[`Reload`](#interface_web_view2_1_1_i_web_view2_web_view_1a6fa5cfa7aff4370f9b452d142cf12046)`()` {#interface_web_view2_1_1_i_web_view2_web_view_1a6fa5cfa7aff4370f9b452d142cf12046}

Reload the current page.

This is similar to navigating to the URI of current top level document including all navigation events firing and respecting any entries in the HTTP cache. But, the back/forward history will not be modified.

#### `public HRESULT `[`PostWebMessageAsJson`](#interface_web_view2_1_1_i_web_view2_web_view_1ae272a41831998945efc9894a18aed806)`(PCWSTR webMessageAsJson)` {#interface_web_view2_1_1_i_web_view2_web_view_1ae272a41831998945efc9894a18aed806}

Post the specified webMessage to the top level document in this [IWebView2WebView](#interface_web_view2_1_1_i_web_view2_web_view).

The top level document's window.chrome.webview's message event fires. JavaScript in that document may subscribe and unsubscribe to the event via the following: 
```cpp
window.chrome.webview.addEventListener('message', handler)
window.chrome.webview.removeEventListener('message', handler)
```
 The event args is an instance of `MessageEvent`. The [IWebView2Settings::IsWebMessageEnabled](WebView2--IWebView2Settings.md#interface_web_view2_1_1_i_web_view2_settings_1a8f67f7292d0f50fcefb3675e447470a1) setting must be true or this method will fail with E_INVALIDARG. The event arg's data property is the webMessage string parameter parsed as a JSON string into a JavaScript object. The event arg's source property is a reference to the `window.chrome.webview` object. See SetWebMessageReceivedEventHandler for information on sending messages from the HTML document in the webview to the host. This message is sent asynchronously. If a navigation occurs before the message is posted to the page, then the message will not be sent.

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

#### `public HRESULT `[`PostWebMessageAsString`](#interface_web_view2_1_1_i_web_view2_web_view_1a633c45914b2285ee2135f4c8ca0371ef)`(PCWSTR webMessageAsString)` {#interface_web_view2_1_1_i_web_view2_web_view_1a633c45914b2285ee2135f4c8ca0371ef}

This is a helper for posting a message that is a simple string rather than a JSON string representation of a JavaScript object.

This behaves in exactly the same manner as PostWebMessageAsJson but the `window.chrome.webview` message event arg's data property will be a string with the same value as webMessageAsString. Use this instead of PostWebMessageAsJson if you want to communicate via simple strings rather than JSON objects.

#### `public HRESULT `[`add_WebMessageReceived`](#interface_web_view2_1_1_i_web_view2_web_view_1a9eab080c57fc76b195559269a7f41219)`(`[`IWebView2WebMessageReceivedEventHandler`](WebView2--IWebView2WebMessageReceivedEventHandler.md#interface_web_view2_1_1_i_web_view2_web_message_received_event_handler)` * handler,EventRegistrationToken * token)` {#interface_web_view2_1_1_i_web_view2_web_view_1a9eab080c57fc76b195559269a7f41219}

This event fires when the IsWebMessageEnabled setting is set and the top level document of the webview calls `window.chrome.webview.postMessage`.

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
 When postMessage is called, the [IWebView2WebMessageReceivedEventHandler](WebView2--IWebView2WebMessageReceivedEventHandler.md#interface_web_view2_1_1_i_web_view2_web_message_received_event_handler) set via this SetWebMessageReceivedEventHandler method will be invoked with the postMessage's object parameter converted to a JSON string.

Call SetWebMessageReceivedEventHandler to set the event handler.

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

#### `public HRESULT `[`remove_WebMessageReceived`](#interface_web_view2_1_1_i_web_view2_web_view_1ad06122bfbc8d1b37db7e16908b9c51bb)`(EventRegistrationToken token)` {#interface_web_view2_1_1_i_web_view2_web_view_1ad06122bfbc8d1b37db7e16908b9c51bb}

#### `public HRESULT `[`Close`](#interface_web_view2_1_1_i_web_view2_web_view_1a0b13ec7b240d2408f8e5f6553eb63a4d)`()` {#interface_web_view2_1_1_i_web_view2_web_view_1a0b13ec7b240d2408f8e5f6553eb63a4d}

Closes the webview and cleans up the underlying browser instance.

After calling Close, all method calls will fail and event handlers will stop firing.

```cpp
  [WEBVIEW2_PROCESS_FAILED_KIND](WebView2.md#namespace_web_view2_1a2794d545285fa052fa349351357b6671) kind;

  HRESULT hr = args->get_ProcessFailedKind(&kind);
  if (SUCCEEDED(hr)) {
    // When the browser process crashes the WebView is put into a closed state.
    // You need to create a new WebView to begin to recover.
    bool newWebViewNeeded = (kind == [WEBVIEW2_PROCESS_FAILED_KIND_BROWSER_PROCESS_EXITED](WebView2.md#namespace_web_view2_1a2794d545285fa052fa349351357b6671afd4e56c4370c33325372a9f5f8cac172));

    if (newWebViewNeeded) {
      // All methods except for the Settings and Source getters will fail for
      // this now closed WebView. So we keep a reference to the closed WebView
      // to transfer its state to the new WebView we will create.
      m_previousWebView = m_webview;
      m_webview = nullptr;

      EB_WEBVIEW_CREATION_PARAMS creationParams;
      creationParams.parentWindow = m_hwnd;

      // Set the installation folder to null to use the installed version of
      // Edge.
      creationParams.embeddedEdgeSubFolder = nullptr;
      creationParams.releaseChannelPreference =
          [WEBVIEW2_RELEASE_CHANNEL_PREFERENCE_STABLE](WebView2.md#namespace_web_view2_1a3b29227a511fb1d92aeee1768d53ef78a2ee31b51d4653b532c2d5d359276ed3e);

      // We use the default nullptr to indicate we want the default user data
      // directory shared with other win32 apps.
      creationParams.userDataDir = nullptr;

      hr = [CreateWebView](WebView2.md#namespace_web_view2_1ae58b78c1b6e90b834304138fc418ed74)(
          creationParams,
          Microsoft::WRL::Callback<IWebView2CreateWebViewCompletedHandler>(
              this, &ScenarioProcess::CreateWebViewCompletedHandler)
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

#### `public HRESULT `[`CallDevToolsProtocolMethod`](#interface_web_view2_1_1_i_web_view2_web_view_1ac0c4c86d8dce1417087ed259a12cfcee)`(PCWSTR methodName,PCWSTR parametersAsJson,`[`IWebView2CallDevToolsProtocolMethodCompletedHandler`](WebView2--IWebView2CallDevToolsProtocolMethodCompletedHandler.md#interface_web_view2_1_1_i_web_view2_call_dev_tools_protocol_method_completed_handler)` * handler)` {#interface_web_view2_1_1_i_web_view2_web_view_1ac0c4c86d8dce1417087ed259a12cfcee}

Call an asynchronous DevToolsProtocol method.

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

#### `public HRESULT `[`add_DevToolsProtocolEventReceived`](#interface_web_view2_1_1_i_web_view2_web_view_1a93c5bf5e27c89844ce1b3b162191776a)`(PCWSTR eventName,`[`IWebView2DevToolsProtocolEventReceivedEventHandler`](WebView2--IWebView2DevToolsProtocolEventReceivedEventHandler.md#interface_web_view2_1_1_i_web_view2_dev_tools_protocol_event_received_event_handler)` * handler,EventRegistrationToken * token)` {#interface_web_view2_1_1_i_web_view2_web_view_1a93c5bf5e27c89844ce1b3b162191776a}

Subscribe to a DevToolsProtocol event.

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

#### `public HRESULT `[`remove_DevToolsProtocolEventReceived`](#interface_web_view2_1_1_i_web_view2_web_view_1ad1534dd5329b9e977123664e9390b692)`(PCWSTR eventName,EventRegistrationToken token)` {#interface_web_view2_1_1_i_web_view2_web_view_1ad1534dd5329b9e977123664e9390b692}

