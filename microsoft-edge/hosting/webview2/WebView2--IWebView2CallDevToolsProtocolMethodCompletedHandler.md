# interface `WebView2::IWebView2CallDevToolsProtocolMethodCompletedHandler` {#interface_web_view2_1_1_i_web_view2_call_dev_tools_protocol_method_completed_handler}

```
interface WebView2::IWebView2CallDevToolsProtocolMethodCompletedHandler
  : public IUnknown
```  

The caller implements this interface to receive CallDevToolsProtocolMethod completion results.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public HRESULT `[`Invoke`](#interface_web_view2_1_1_i_web_view2_call_dev_tools_protocol_method_completed_handler_1a5c66d0b86da7a6153bf54794bb43aec5)`(HRESULT errorCode,PCWSTR returnObjectAsJson)` | Called to provide the implementer with the completion status and result of the corresponding asynchronous method call.

## Members

#### `public HRESULT `[`Invoke`](#interface_web_view2_1_1_i_web_view2_call_dev_tools_protocol_method_completed_handler_1a5c66d0b86da7a6153bf54794bb43aec5)`(HRESULT errorCode,PCWSTR returnObjectAsJson)` {#interface_web_view2_1_1_i_web_view2_call_dev_tools_protocol_method_completed_handler_1a5c66d0b86da7a6153bf54794bb43aec5}

Called to provide the implementer with the completion status and result of the corresponding asynchronous method call.

