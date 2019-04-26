# interface `WebView2::IWebView2PermissionRequestedEventHandler` {#interface_web_view2_1_1_i_web_view2_permission_requested_event_handler}

```
interface WebView2::IWebView2PermissionRequestedEventHandler
  : public IUnknown
```  

The caller implements this interface to receive the PermissionRequested event.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public HRESULT `[`Invoke`](#interface_web_view2_1_1_i_web_view2_permission_requested_event_handler_1a8e011738ce9942dc5ea08028756ac160)`(`[`IWebView2WebView`](WebView2--IWebView2WebView.md#interface_web_view2_1_1_i_web_view2_web_view)` * webview,`[`IWebView2PermissionRequestedEventArgs`](WebView2--IWebView2PermissionRequestedEventArgs.md#interface_web_view2_1_1_i_web_view2_permission_requested_event_args)` * args)` | Called to provide the implementer with the event args for the corresponding event.

## Members

#### `public HRESULT `[`Invoke`](#interface_web_view2_1_1_i_web_view2_permission_requested_event_handler_1a8e011738ce9942dc5ea08028756ac160)`(`[`IWebView2WebView`](WebView2--IWebView2WebView.md#interface_web_view2_1_1_i_web_view2_web_view)` * webview,`[`IWebView2PermissionRequestedEventArgs`](WebView2--IWebView2PermissionRequestedEventArgs.md#interface_web_view2_1_1_i_web_view2_permission_requested_event_args)` * args)` {#interface_web_view2_1_1_i_web_view2_permission_requested_event_handler_1a8e011738ce9942dc5ea08028756ac160}

Called to provide the implementer with the event args for the corresponding event.

