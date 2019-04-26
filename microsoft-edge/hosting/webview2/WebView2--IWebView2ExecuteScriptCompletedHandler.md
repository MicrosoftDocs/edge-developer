# interface `WebView2::IWebView2ExecuteScriptCompletedHandler` {#interface_web_view2_1_1_i_web_view2_execute_script_completed_handler}

```
interface WebView2::IWebView2ExecuteScriptCompletedHandler
  : public IUnknown
```  

The caller implements this interface to receive the result of the ExecuteScript method.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public HRESULT `[`Invoke`](#interface_web_view2_1_1_i_web_view2_execute_script_completed_handler_1a86a8d6039b124ee23d0989d52a95bf0d)`(HRESULT errorCode,PCWSTR resultObjectAsJson)` | Called to provide the implementer with the completion status and result of the corresponding asynchronous method call.

## Members

#### `public HRESULT `[`Invoke`](#interface_web_view2_1_1_i_web_view2_execute_script_completed_handler_1a86a8d6039b124ee23d0989d52a95bf0d)`(HRESULT errorCode,PCWSTR resultObjectAsJson)` {#interface_web_view2_1_1_i_web_view2_execute_script_completed_handler_1a86a8d6039b124ee23d0989d52a95bf0d}

Called to provide the implementer with the completion status and result of the corresponding asynchronous method call.

