# interface `WebView2::IWebView2CreateWebViewCompletedHandler` {#interface_web_view2_1_1_i_web_view2_create_web_view_completed_handler}

```
interface WebView2::IWebView2CreateWebViewCompletedHandler
  : public IUnknown
```  

The caller implements this interface to receive the WebView created via CreateWebView.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public HRESULT `[`Invoke`](#interface_web_view2_1_1_i_web_view2_create_web_view_completed_handler_1a9ea7c5706ba32bb3548261419a4d6faf)`(HRESULT result,`[`IWebView2WebView`](WebView2--IWebView2WebView.md#interface_web_view2_1_1_i_web_view2_web_view)` * webView)` | Called to provide the implementer with the completion status and result of the corresponding asynchronous method call.

## Members

#### `public HRESULT `[`Invoke`](#interface_web_view2_1_1_i_web_view2_create_web_view_completed_handler_1a9ea7c5706ba32bb3548261419a4d6faf)`(HRESULT result,`[`IWebView2WebView`](WebView2--IWebView2WebView.md#interface_web_view2_1_1_i_web_view2_web_view)` * webView)` {#interface_web_view2_1_1_i_web_view2_create_web_view_completed_handler_1a9ea7c5706ba32bb3548261419a4d6faf}

Called to provide the implementer with the completion status and result of the corresponding asynchronous method call.

