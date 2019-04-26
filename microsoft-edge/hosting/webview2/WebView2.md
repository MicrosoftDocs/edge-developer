# namespace `WebView2` {#namespace_web_view2}

The EmbeddedBrowserWebView library enables you to host web content in your Win32 desktop apps.

See CreateWebView and [IWebView2WebView](WebView2--IWebView2WebView.md#interface_web_view2_1_1_i_web_view2_web_view) to get started.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`WEBVIEW2_CAPTURE_PREVIEW_IMAGE_FORMAT`](#namespace_web_view2_1a3d7590b9a0e1fc4ca4aef8ccdb28c88f)            | Image format used by the [IWebView2WebView::CapturePreview](WebView2--IWebView2WebView.md#interface_web_view2_1_1_i_web_view2_web_view_1a1c78fc1c5357a98d4b9b6519124ce335) method.
`enum `[`WEBVIEW2_SCRIPT_DIALOG_KIND`](#namespace_web_view2_1a1ab09f6743a36d1c809d10567a8a3dc8)            | Kind of JavaScript dialog used in the [IWebView2ScriptDialogOpeningEventHandler](WebView2--IWebView2ScriptDialogOpeningEventHandler.md#interface_web_view2_1_1_i_web_view2_script_dialog_opening_event_handler) interface.
`enum `[`WEBVIEW2_PROCESS_FAILED_KIND`](#namespace_web_view2_1a2794d545285fa052fa349351357b6671)            | Kind of process failure used in the [IWebView2ProcessFailedEventHandler](WebView2--IWebView2ProcessFailedEventHandler.md#interface_web_view2_1_1_i_web_view2_process_failed_event_handler) interface.
`enum `[`WEBVIEW2_PERMISSION_TYPE`](#namespace_web_view2_1a459600b4d563621489f50542f87dfe50)            | The type of a permission request.
`enum `[`WEBVIEW2_PERMISSION_STATE`](#namespace_web_view2_1a789791fc978b2b95ff927e05c99e121a)            | Response to a permission request.
`enum `[`WEBVIEW2_MOVE_FOCUS_REASON`](#namespace_web_view2_1a2173602305b54912e692bad884cc40dc)            | Reason for moving focus.
`enum `[`WEBVIEW2_WEB_ERROR_STATUS`](#namespace_web_view2_1a911636e77a86d6059ee79d3e2cc2eead)            | Error values for web navigations.
`enum `[`WEBVIEW2_WEB_RESOURCE_CONTEXT`](#namespace_web_view2_1a0fe271ca4cefa10b5ca037b66d06afdb)            | Enum for resourceContextFilter of WebResourceRequested event.
`enum `[`WEBVIEW2_RELEASE_CHANNEL_PREFERENCE`](#namespace_web_view2_1a3b29227a511fb1d92aeee1768d53ef78)            | The release channel of a browser installation.
`public STDAPI `[`CreateWebView`](#namespace_web_view2_1ae58b78c1b6e90b834304138fc418ed74)`(`[`EB_WEBVIEW_CREATION_PARAMS`](WebView2--EB_WEBVIEW_CREATION_PARAMS.md#struct_web_view2_1_1_e_b___w_e_b_v_i_e_w___c_r_e_a_t_i_o_n___p_a_r_a_m_s)` webviewParams,`[`IWebView2CreateWebViewCompletedHandler`](WebView2--IWebView2CreateWebViewCompletedHandler.md#interface_web_view2_1_1_i_web_view2_create_web_view_completed_handler)` * handler)`            | Asynchronously create a new [IWebView2WebView](WebView2--IWebView2WebView.md#interface_web_view2_1_1_i_web_view2_web_view).
`public STDAPI `[`CreateWebResourceResponse`](#namespace_web_view2_1a3906660e8e40f651e6f9e1acf1cd9b0c)`(IStream * content,int statusCode,PCWSTR reasonPhrase,PCWSTR headers,`[`IWebView2WebResourceResponse`](WebView2--IWebView2WebResourceResponse.md#interface_web_view2_1_1_i_web_view2_web_resource_response)` ** response)`            | WebResourceResponse creation function exported by the loader DLL.
`struct `[`WebView2::EB_WEBVIEW_CREATION_PARAMS`](WebView2--EB_WEBVIEW_CREATION_PARAMS.md#struct_web_view2_1_1_e_b___w_e_b_v_i_e_w___c_r_e_a_t_i_o_n___p_a_r_a_m_s) | Parameters that control creation of the [IWebView2WebView](WebView2--IWebView2WebView.md#interface_web_view2_1_1_i_web_view2_web_view).
`interface `[`WebView2::IWebView2AddScriptToExecuteOnDocumentedCreatedCompletedHandler`](WebView2--IWebView2AddScriptToExecuteOnDocumentedCreatedCompletedHandler.md#interface_web_view2_1_1_i_web_view2_add_script_to_execute_on_documented_created_completed_handler) | The caller implements this interface to receive the result of the AddScriptToExecuteOnDocumentedCreated method.
`interface `[`WebView2::IWebView2CallDevToolsProtocolMethodCompletedHandler`](WebView2--IWebView2CallDevToolsProtocolMethodCompletedHandler.md#interface_web_view2_1_1_i_web_view2_call_dev_tools_protocol_method_completed_handler) | The caller implements this interface to receive CallDevToolsProtocolMethod completion results.
`interface `[`WebView2::IWebView2CapturePreviewCompletedHandler`](WebView2--IWebView2CapturePreviewCompletedHandler.md#interface_web_view2_1_1_i_web_view2_capture_preview_completed_handler) | The caller implements this method to receive the result of the CapturePreview method.
`interface `[`WebView2::IWebView2ContentLoadingEventArgs`](WebView2--IWebView2ContentLoadingEventArgs.md#interface_web_view2_1_1_i_web_view2_content_loading_event_args) | Event args for the ContentLoading event.
`interface `[`WebView2::IWebView2ContentLoadingEventHandler`](WebView2--IWebView2ContentLoadingEventHandler.md#interface_web_view2_1_1_i_web_view2_content_loading_event_handler) | The caller implements this interface to receive the ContentLoading event.
`interface `[`WebView2::IWebView2CreateWebViewCompletedHandler`](WebView2--IWebView2CreateWebViewCompletedHandler.md#interface_web_view2_1_1_i_web_view2_create_web_view_completed_handler) | The caller implements this interface to receive the WebView created via CreateWebView.
`interface `[`WebView2::IWebView2Deferral`](WebView2--IWebView2Deferral.md#interface_web_view2_1_1_i_web_view2_deferral) | This interface is used to complete deferrals on event args that support getting deferrals via their GetDeferral method.
`interface `[`WebView2::IWebView2DevToolsProtocolEventReceivedEventArgs`](WebView2--IWebView2DevToolsProtocolEventReceivedEventArgs.md#interface_web_view2_1_1_i_web_view2_dev_tools_protocol_event_received_event_args) | Event args for the DevToolsProtocolEventReceived event.
`interface `[`WebView2::IWebView2DevToolsProtocolEventReceivedEventHandler`](WebView2--IWebView2DevToolsProtocolEventReceivedEventHandler.md#interface_web_view2_1_1_i_web_view2_dev_tools_protocol_event_received_event_handler) | The caller implements this interface to receive DevToolsProtocolEventReceived events from the [IWebView2WebView](WebView2--IWebView2WebView.md#interface_web_view2_1_1_i_web_view2_web_view).
`interface `[`WebView2::IWebView2ExecuteScriptCompletedHandler`](WebView2--IWebView2ExecuteScriptCompletedHandler.md#interface_web_view2_1_1_i_web_view2_execute_script_completed_handler) | The caller implements this interface to receive the result of the ExecuteScript method.
`interface `[`WebView2::IWebView2FocusChangedEventHandler`](WebView2--IWebView2FocusChangedEventHandler.md#interface_web_view2_1_1_i_web_view2_focus_changed_event_handler) | The caller implements this method to receive the GotFocus and LostFocus events.
`interface `[`WebView2::IWebView2HttpHeadersCollection`](WebView2--IWebView2HttpHeadersCollection.md#interface_web_view2_1_1_i_web_view2_http_headers_collection) | A collection of HTTP headers.
`interface `[`WebView2::IWebView2MoveFocusRequestedEventArgs`](WebView2--IWebView2MoveFocusRequestedEventArgs.md#interface_web_view2_1_1_i_web_view2_move_focus_requested_event_args) | Event args for the MoveFocusRequested event.
`interface `[`WebView2::IWebView2MoveFocusRequestedEventHandler`](WebView2--IWebView2MoveFocusRequestedEventHandler.md#interface_web_view2_1_1_i_web_view2_move_focus_requested_event_handler) | The caller implements this method to receive the MoveFocusRequested event.
`interface `[`WebView2::IWebView2NavigationCompletedEventArgs`](WebView2--IWebView2NavigationCompletedEventArgs.md#interface_web_view2_1_1_i_web_view2_navigation_completed_event_args) | Event args for the NavigationCompleted event.
`interface `[`WebView2::IWebView2NavigationCompletedEventHandler`](WebView2--IWebView2NavigationCompletedEventHandler.md#interface_web_view2_1_1_i_web_view2_navigation_completed_event_handler) | The caller implements this interface to receive the NavigationCompleted event.
`interface `[`WebView2::IWebView2NavigationStartingEventArgs`](WebView2--IWebView2NavigationStartingEventArgs.md#interface_web_view2_1_1_i_web_view2_navigation_starting_event_args) | Event args for the NavigationStarting event.
`interface `[`WebView2::IWebView2NavigationStartingEventHandler`](WebView2--IWebView2NavigationStartingEventHandler.md#interface_web_view2_1_1_i_web_view2_navigation_starting_event_handler) | The caller implements this interface to receive the NavigationStarting event.
`interface `[`WebView2::IWebView2PermissionRequestedEventArgs`](WebView2--IWebView2PermissionRequestedEventArgs.md#interface_web_view2_1_1_i_web_view2_permission_requested_event_args) | Event args for the PermissionRequested event.
`interface `[`WebView2::IWebView2PermissionRequestedEventHandler`](WebView2--IWebView2PermissionRequestedEventHandler.md#interface_web_view2_1_1_i_web_view2_permission_requested_event_handler) | The caller implements this interface to receive the PermissionRequested event.
`interface `[`WebView2::IWebView2ProcessFailedEventArgs`](WebView2--IWebView2ProcessFailedEventArgs.md#interface_web_view2_1_1_i_web_view2_process_failed_event_args) | Event args for the ProcessFailed event.
`interface `[`WebView2::IWebView2ProcessFailedEventHandler`](WebView2--IWebView2ProcessFailedEventHandler.md#interface_web_view2_1_1_i_web_view2_process_failed_event_handler) | The caller implements this interface to receive ProcessFailed events.
`interface `[`WebView2::IWebView2ScriptDialogOpeningEventArgs`](WebView2--IWebView2ScriptDialogOpeningEventArgs.md#interface_web_view2_1_1_i_web_view2_script_dialog_opening_event_args) | Event args for the JavaScriptDialogOpening event.
`interface `[`WebView2::IWebView2ScriptDialogOpeningEventHandler`](WebView2--IWebView2ScriptDialogOpeningEventHandler.md#interface_web_view2_1_1_i_web_view2_script_dialog_opening_event_handler) | The caller implements this interface to receive the JavaScriptDialogOpening event.
`interface `[`WebView2::IWebView2Settings`](WebView2--IWebView2Settings.md#interface_web_view2_1_1_i_web_view2_settings) | Defines properties that enable, disable, or modify WebView features.
`interface `[`WebView2::IWebView2WebMessageReceivedEventArgs`](WebView2--IWebView2WebMessageReceivedEventArgs.md#interface_web_view2_1_1_i_web_view2_web_message_received_event_args) | Event args for the WebMessageReceived event.
`interface `[`WebView2::IWebView2WebMessageReceivedEventHandler`](WebView2--IWebView2WebMessageReceivedEventHandler.md#interface_web_view2_1_1_i_web_view2_web_message_received_event_handler) | The caller implements this interface to receive the WebMessageReceived event.
`interface `[`WebView2::IWebView2WebResourceRequest`](WebView2--IWebView2WebResourceRequest.md#interface_web_view2_1_1_i_web_view2_web_resource_request) | An HTTP request used with the WebResourceRequested event.
`interface `[`WebView2::IWebView2WebResourceRequestedEventArgs`](WebView2--IWebView2WebResourceRequestedEventArgs.md#interface_web_view2_1_1_i_web_view2_web_resource_requested_event_args) | Event args for the WebResourceRequested event.
`interface `[`WebView2::IWebView2WebResourceRequestedEventHandler`](WebView2--IWebView2WebResourceRequestedEventHandler.md#interface_web_view2_1_1_i_web_view2_web_resource_requested_event_handler) | Fires when an HTTP request is made in the webview.
`interface `[`WebView2::IWebView2WebResourceResponse`](WebView2--IWebView2WebResourceResponse.md#interface_web_view2_1_1_i_web_view2_web_resource_response) | An HTTP response used with the WebResourceRequested event.
`interface `[`WebView2::IWebView2WebView`](WebView2--IWebView2WebView.md#interface_web_view2_1_1_i_web_view2_web_view) | The Embedded Browser WebView enables you to host web content using the latest Edge web browser technology.
`interface `[`WebView2::IWebView2ZoomFactorChangedEventHandler`](WebView2--IWebView2ZoomFactorChangedEventHandler.md#interface_web_view2_1_1_i_web_view2_zoom_factor_changed_event_handler) | The caller implements this interface to receive ZoomFactorChanged events.

## Members

#### `enum `[`WEBVIEW2_CAPTURE_PREVIEW_IMAGE_FORMAT`](#namespace_web_view2_1a3d7590b9a0e1fc4ca4aef8ccdb28c88f) {#namespace_web_view2_1a3d7590b9a0e1fc4ca4aef8ccdb28c88f}

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
WEBVIEW2_CAPTURE_PREVIEW_IMAGE_FORMAT_PNG            | PNG image format.
WEBVIEW2_CAPTURE_PREVIEW_IMAGE_FORMAT_JPEG            | JPEG image format.

Image format used by the [IWebView2WebView::CapturePreview](WebView2--IWebView2WebView.md#interface_web_view2_1_1_i_web_view2_web_view_1a1c78fc1c5357a98d4b9b6519124ce335) method.

#### `enum `[`WEBVIEW2_SCRIPT_DIALOG_KIND`](#namespace_web_view2_1a1ab09f6743a36d1c809d10567a8a3dc8) {#namespace_web_view2_1a1ab09f6743a36d1c809d10567a8a3dc8}

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
WEBVIEW2_SCRIPT_DIALOG_KIND_ALERT            | A dialog invoked via the window.alert JavaScript function.
WEBVIEW2_SCRIPT_DIALOG_KIND_CONFIRM            | A dialog invoked via the window.confirm JavaScript function.
WEBVIEW2_SCRIPT_DIALOG_KIND_PROMPT            | A dialog invoked via the window.prompt JavaScript function.

Kind of JavaScript dialog used in the [IWebView2ScriptDialogOpeningEventHandler](WebView2--IWebView2ScriptDialogOpeningEventHandler.md#interface_web_view2_1_1_i_web_view2_script_dialog_opening_event_handler) interface.

#### `enum `[`WEBVIEW2_PROCESS_FAILED_KIND`](#namespace_web_view2_1a2794d545285fa052fa349351357b6671) {#namespace_web_view2_1a2794d545285fa052fa349351357b6671}

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
WEBVIEW2_PROCESS_FAILED_KIND_BROWSER_PROCESS_EXITED            | Indicates the browser process terminated unexpectedly.
WEBVIEW2_PROCESS_FAILED_KIND_RENDER_PROCESS_EXITED            | Indicates the render process terminated unexpectedly.
WEBVIEW2_PROCESS_FAILED_KIND_RENDER_PROCESS_UNRESPONSIVE            | Indicates the render process becomes unresponsive.

Kind of process failure used in the [IWebView2ProcessFailedEventHandler](WebView2--IWebView2ProcessFailedEventHandler.md#interface_web_view2_1_1_i_web_view2_process_failed_event_handler) interface.

#### `enum `[`WEBVIEW2_PERMISSION_TYPE`](#namespace_web_view2_1a459600b4d563621489f50542f87dfe50) {#namespace_web_view2_1a459600b4d563621489f50542f87dfe50}

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
WEBVIEW2_PERMISSION_TYPE_UNKNOWN_PERMISSION            | Unknown permission.
WEBVIEW2_PERMISSION_TYPE_MICROPHONE            | Permission to capture audio.
WEBVIEW2_PERMISSION_TYPE_CAMERA            | Permission to capture video.
WEBVIEW2_PERMISSION_TYPE_GEOLOCATION            | Permission to access geolocation.
WEBVIEW2_PERMISSION_TYPE_NOTIFICATIONS            | Permission to send web notifications.
WEBVIEW2_PERMISSION_TYPE_OTHER_SENSORS            | Permission to access generic sensor.
WEBVIEW2_PERMISSION_TYPE_CLIPBOARD_READ            | Permission to read system clipboard without a user gesture.

The type of a permission request.

#### `enum `[`WEBVIEW2_PERMISSION_STATE`](#namespace_web_view2_1a789791fc978b2b95ff927e05c99e121a) {#namespace_web_view2_1a789791fc978b2b95ff927e05c99e121a}

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
WEBVIEW2_PERMISSION_STATE_DEFAULT            | Use default browser behavior, which normally prompt users for decision.
WEBVIEW2_PERMISSION_STATE_ALLOW            | Grant the permission request.
WEBVIEW2_PERMISSION_STATE_DENY            | Deny the permission request.

Response to a permission request.

#### `enum `[`WEBVIEW2_MOVE_FOCUS_REASON`](#namespace_web_view2_1a2173602305b54912e692bad884cc40dc) {#namespace_web_view2_1a2173602305b54912e692bad884cc40dc}

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
WEBVIEW2_MOVE_FOCUS_REASON_PROGRAMMATIC            | Code setting focus into WebView.
WEBVIEW2_MOVE_FOCUS_REASON_NEXT            | Moving focus due to Tab traversal forward.
WEBVIEW2_MOVE_FOCUS_REASON_PREVIOUS            | Moving focus due to Tab traversal backward.

Reason for moving focus.

#### `enum `[`WEBVIEW2_WEB_ERROR_STATUS`](#namespace_web_view2_1a911636e77a86d6059ee79d3e2cc2eead) {#namespace_web_view2_1a911636e77a86d6059ee79d3e2cc2eead}

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

Error values for web navigations.

#### `enum `[`WEBVIEW2_WEB_RESOURCE_CONTEXT`](#namespace_web_view2_1a0fe271ca4cefa10b5ca037b66d06afdb) {#namespace_web_view2_1a0fe271ca4cefa10b5ca037b66d06afdb}

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

Enum for resourceContextFilter of WebResourceRequested event.

#### `enum `[`WEBVIEW2_RELEASE_CHANNEL_PREFERENCE`](#namespace_web_view2_1a3b29227a511fb1d92aeee1768d53ef78) {#namespace_web_view2_1a3b29227a511fb1d92aeee1768d53ef78}

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
WEBVIEW2_RELEASE_CHANNEL_PREFERENCE_STABLE            | Choose the first installed release channel from the list: stable, beta, dev, and canary.
WEBVIEW2_RELEASE_CHANNEL_PREFERENCE_CANARY            | Choose the first installed release channel from the list: canary, dev, beta, and stable.

The release channel of a browser installation.

This is used when selecting an evergreen install of Edge. See the Edge browser documentation for more information on the various release channels, how often they update, their level of support, etc.

#### `public STDAPI `[`CreateWebView`](#namespace_web_view2_1ae58b78c1b6e90b834304138fc418ed74)`(`[`EB_WEBVIEW_CREATION_PARAMS`](WebView2--EB_WEBVIEW_CREATION_PARAMS.md#struct_web_view2_1_1_e_b___w_e_b_v_i_e_w___c_r_e_a_t_i_o_n___p_a_r_a_m_s)` webviewParams,`[`IWebView2CreateWebViewCompletedHandler`](WebView2--IWebView2CreateWebViewCompletedHandler.md#interface_web_view2_1_1_i_web_view2_create_web_view_completed_handler)` * handler)` {#namespace_web_view2_1ae58b78c1b6e90b834304138fc418ed74}

Asynchronously create a new [IWebView2WebView](WebView2--IWebView2WebView.md#interface_web_view2_1_1_i_web_view2_web_view).

This creation function is exported by the loader DLL. It is recommended that the application set Application User Model ID for the process or the application window. If none is not set, during WebView creation a generated Application User Model ID is set to root window of parentWindow specified in webviewParams. The webviewParams parameter is required. The embeddedEdgesubFolder, userDataDir, additionalBrowserSwitches, and releaseChannelPreference members of the webviewParams may be overridden by values in the registry. When creating a WebView the following registry keys are checked:

```cpp
[{Root}\Software\Policies\Microsoft\EmbeddedBrowserWebView\LoaderOverride\{AppId}]
"releaseChannelPreference"=dword:00000000
"embeddedEdgeSubFolder"=""
"userDataDir"=""
"additionalBrowserSwitches"=""
```

First we check with Root as HKLM and then HKCU. AppId is first set to the Application User Model ID of the caller's process, then if there's no corresponding regsitry key the AppId is set to the executable name of the caller's process, or if that isn't a registry key then '*'. If an override registry key is found then we use the embeddedEdgeSubFolder, userDataDir, additionalBrowserSwitches, and releaseChannelPreference registry values as replacements for the values in the webviewParams struct. If any of those registry values isn't present, then the original value in the webviewParams struct is not changed.

```cpp
      EB_WEBVIEW_CREATION_PARAMS creationParams;
      creationParams.parentWindow = m_hwnd;

      // Set the installation folder to null to use the installed version of
      // Edge.
      creationParams.embeddedEdgeSubFolder = nullptr;
      creationParams.releaseChannelPreference =
          [WEBVIEW2_RELEASE_CHANNEL_PREFERENCE_STABLE](#namespace_web_view2_1a3b29227a511fb1d92aeee1768d53ef78a2ee31b51d4653b532c2d5d359276ed3e);

      // We use the default nullptr to indicate we want the default user data
      // directory shared with other win32 apps.
      creationParams.userDataDir = nullptr;

      hr = [CreateWebView](#namespace_web_view2_1ae58b78c1b6e90b834304138fc418ed74)(
          creationParams,
          Microsoft::WRL::Callback<IWebView2CreateWebViewCompletedHandler>(
              this, &ScenarioProcess::CreateWebViewCompletedHandler)
              .Get());
```

#### `public STDAPI `[`CreateWebResourceResponse`](#namespace_web_view2_1a3906660e8e40f651e6f9e1acf1cd9b0c)`(IStream * content,int statusCode,PCWSTR reasonPhrase,PCWSTR headers,`[`IWebView2WebResourceResponse`](WebView2--IWebView2WebResourceResponse.md#interface_web_view2_1_1_i_web_view2_web_resource_response)` ** response)` {#namespace_web_view2_1a3906660e8e40f651e6f9e1acf1cd9b0c}

WebResourceResponse creation function exported by the loader DLL.

```cpp
HRESULT WebView::WebResourceRequestedEventHandler(
    IWebView2WebView* sender, IWebView2WebResourceRequestedEventArgs* args) {
  if (block_images_) {
    ComPtr<IWebView2WebResourceResponse> response;
    [CreateWebResourceResponse](#namespace_web_view2_1a3906660e8e40f651e6f9e1acf1cd9b0c)(nullptr, 200, L"OK", L"", &response);
    args->put_Response(response.Get());
  }

  return S_OK;
}
```

