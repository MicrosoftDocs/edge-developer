# interface `WebView2::IWebView2DevToolsProtocolEventReceivedEventHandler` {#interface_web_view2_1_1_i_web_view2_dev_tools_protocol_event_received_event_handler}

```
interface WebView2::IWebView2DevToolsProtocolEventReceivedEventHandler
  : public IUnknown
```  

The caller implements this interface to receive DevToolsProtocolEventReceived events from the [IWebView2WebView](WebView2--IWebView2WebView.md#interface_web_view2_1_1_i_web_view2_web_view).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public HRESULT `[`Invoke`](#interface_web_view2_1_1_i_web_view2_dev_tools_protocol_event_received_event_handler_1a002170fcfbba643d1586e9c010ddacb5)`(`[`IWebView2WebView`](WebView2--IWebView2WebView.md#interface_web_view2_1_1_i_web_view2_web_view)` * webview,`[`IWebView2DevToolsProtocolEventReceivedEventArgs`](WebView2--IWebView2DevToolsProtocolEventReceivedEventArgs.md#interface_web_view2_1_1_i_web_view2_dev_tools_protocol_event_received_event_args)` * args)` | Called to provide the implementer with the event args for the corresponding event.

## Members

#### `public HRESULT `[`Invoke`](#interface_web_view2_1_1_i_web_view2_dev_tools_protocol_event_received_event_handler_1a002170fcfbba643d1586e9c010ddacb5)`(`[`IWebView2WebView`](WebView2--IWebView2WebView.md#interface_web_view2_1_1_i_web_view2_web_view)` * webview,`[`IWebView2DevToolsProtocolEventReceivedEventArgs`](WebView2--IWebView2DevToolsProtocolEventReceivedEventArgs.md#interface_web_view2_1_1_i_web_view2_dev_tools_protocol_event_received_event_args)` * args)` {#interface_web_view2_1_1_i_web_view2_dev_tools_protocol_event_received_event_handler_1a002170fcfbba643d1586e9c010ddacb5}

Called to provide the implementer with the event args for the corresponding event.

