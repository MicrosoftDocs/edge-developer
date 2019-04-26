# interface `WebView2::IWebView2DevToolsProtocolEventReceivedEventArgs` {#interface_web_view2_1_1_i_web_view2_dev_tools_protocol_event_received_event_args}

```
interface WebView2::IWebView2DevToolsProtocolEventReceivedEventArgs
  : public IUnknown
```  

Event args for the DevToolsProtocolEventReceived event.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} PWSTR `[`ParameterObjectAsJson`](#interface_web_view2_1_1_i_web_view2_dev_tools_protocol_event_received_event_args_1add7b9a9c072d60202dffff8c2729d2c6) | The parameter object of the corresponding DevToolsProtocol event represented as a JSON string.

## Members

#### `{property} PWSTR `[`ParameterObjectAsJson`](#interface_web_view2_1_1_i_web_view2_dev_tools_protocol_event_received_event_args_1add7b9a9c072d60202dffff8c2729d2c6) {#interface_web_view2_1_1_i_web_view2_dev_tools_protocol_event_received_event_args_1add7b9a9c072d60202dffff8c2729d2c6}

The parameter object of the corresponding DevToolsProtocol event represented as a JSON string.

