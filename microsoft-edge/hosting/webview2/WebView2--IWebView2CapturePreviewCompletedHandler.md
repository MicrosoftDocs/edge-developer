# interface `WebView2::IWebView2CapturePreviewCompletedHandler` {#interface_web_view2_1_1_i_web_view2_capture_preview_completed_handler}

```
interface WebView2::IWebView2CapturePreviewCompletedHandler
  : public IUnknown
```  

The caller implements this method to receive the result of the CapturePreview method.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public HRESULT `[`Invoke`](#interface_web_view2_1_1_i_web_view2_capture_preview_completed_handler_1a46ce0fcc4b393003de30ca97e9111874)`(HRESULT result)` | Called to provide the implementer with the completion status and result of the corresponding asynchronous method call.

## Members

#### `public HRESULT `[`Invoke`](#interface_web_view2_1_1_i_web_view2_capture_preview_completed_handler_1a46ce0fcc4b393003de30ca97e9111874)`(HRESULT result)` {#interface_web_view2_1_1_i_web_view2_capture_preview_completed_handler_1a46ce0fcc4b393003de30ca97e9111874}

Called to provide the implementer with the completion status and result of the corresponding asynchronous method call.

