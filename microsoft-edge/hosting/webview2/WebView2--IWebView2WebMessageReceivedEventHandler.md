# interface `WebView2::IWebView2WebMessageReceivedEventHandler` {#interface_web_view2_1_1_i_web_view2_web_message_received_event_handler}

```
interface WebView2::IWebView2WebMessageReceivedEventHandler
  : public IUnknown
```  

The caller implements this interface to receive the WebMessageReceived event.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public HRESULT `[`Invoke`](#interface_web_view2_1_1_i_web_view2_web_message_received_event_handler_1aea5a3931b3c7771d37ba2daffed66af8)`(`[`IWebView2WebView`](WebView2--IWebView2WebView.md#interface_web_view2_1_1_i_web_view2_web_view)` * webview,`[`IWebView2WebMessageReceivedEventArgs`](WebView2--IWebView2WebMessageReceivedEventArgs.md#interface_web_view2_1_1_i_web_view2_web_message_received_event_args)` * args)` | Called to provide the implementer with the event args for the corresponding event.

## Members

#### `public HRESULT `[`Invoke`](#interface_web_view2_1_1_i_web_view2_web_message_received_event_handler_1aea5a3931b3c7771d37ba2daffed66af8)`(`[`IWebView2WebView`](WebView2--IWebView2WebView.md#interface_web_view2_1_1_i_web_view2_web_view)` * webview,`[`IWebView2WebMessageReceivedEventArgs`](WebView2--IWebView2WebMessageReceivedEventArgs.md#interface_web_view2_1_1_i_web_view2_web_message_received_event_args)` * args)` {#interface_web_view2_1_1_i_web_view2_web_message_received_event_handler_1aea5a3931b3c7771d37ba2daffed66af8}

Called to provide the implementer with the event args for the corresponding event.

