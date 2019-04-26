# interface `WebView2::IWebView2WebResourceRequestedEventHandler` {#interface_web_view2_1_1_i_web_view2_web_resource_requested_event_handler}

```
interface WebView2::IWebView2WebResourceRequestedEventHandler
  : public IUnknown
```  

Fires when an HTTP request is made in the webview.

The host can override request, response headers and response content.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public HRESULT `[`Invoke`](#interface_web_view2_1_1_i_web_view2_web_resource_requested_event_handler_1ad1c3028771aa3097ff3ff72c9b6e319d)`(`[`IWebView2WebView`](WebView2--IWebView2WebView.md#interface_web_view2_1_1_i_web_view2_web_view)` * webview,`[`IWebView2WebResourceRequestedEventArgs`](WebView2--IWebView2WebResourceRequestedEventArgs.md#interface_web_view2_1_1_i_web_view2_web_resource_requested_event_args)` * args)` | Called to provide the implementer with the event args for the corresponding event.

## Members

#### `public HRESULT `[`Invoke`](#interface_web_view2_1_1_i_web_view2_web_resource_requested_event_handler_1ad1c3028771aa3097ff3ff72c9b6e319d)`(`[`IWebView2WebView`](WebView2--IWebView2WebView.md#interface_web_view2_1_1_i_web_view2_web_view)` * webview,`[`IWebView2WebResourceRequestedEventArgs`](WebView2--IWebView2WebResourceRequestedEventArgs.md#interface_web_view2_1_1_i_web_view2_web_resource_requested_event_args)` * args)` {#interface_web_view2_1_1_i_web_view2_web_resource_requested_event_handler_1ad1c3028771aa3097ff3ff72c9b6e319d}

Called to provide the implementer with the event args for the corresponding event.

