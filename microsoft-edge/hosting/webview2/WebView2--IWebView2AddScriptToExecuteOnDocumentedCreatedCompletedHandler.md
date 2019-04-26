# interface `WebView2::IWebView2AddScriptToExecuteOnDocumentedCreatedCompletedHandler` {#interface_web_view2_1_1_i_web_view2_add_script_to_execute_on_documented_created_completed_handler}

```
interface WebView2::IWebView2AddScriptToExecuteOnDocumentedCreatedCompletedHandler
  : public IUnknown
```  

The caller implements this interface to receive the result of the AddScriptToExecuteOnDocumentedCreated method.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public HRESULT `[`Invoke`](#interface_web_view2_1_1_i_web_view2_add_script_to_execute_on_documented_created_completed_handler_1a8730cf5a22b8e211902f1c354380e476)`(HRESULT errorCode,PCWSTR id)` | Called to provide the implementer with the completion status and result of the corresponding asynchronous method call.

## Members

#### `public HRESULT `[`Invoke`](#interface_web_view2_1_1_i_web_view2_add_script_to_execute_on_documented_created_completed_handler_1a8730cf5a22b8e211902f1c354380e476)`(HRESULT errorCode,PCWSTR id)` {#interface_web_view2_1_1_i_web_view2_add_script_to_execute_on_documented_created_completed_handler_1a8730cf5a22b8e211902f1c354380e476}

Called to provide the implementer with the completion status and result of the corresponding asynchronous method call.

