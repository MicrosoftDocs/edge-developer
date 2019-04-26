# interface `WebView2::IWebView2ContentLoadingEventHandler` {#interface_web_view2_1_1_i_web_view2_content_loading_event_handler}

```
interface WebView2::IWebView2ContentLoadingEventHandler
  : public IUnknown
```  

The caller implements this interface to receive the ContentLoading event.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public HRESULT `[`Invoke`](#interface_web_view2_1_1_i_web_view2_content_loading_event_handler_1a8dfc8d58c666d0d930c51a729bc316c7)`(`[`IWebView2WebView`](WebView2--IWebView2WebView.md#interface_web_view2_1_1_i_web_view2_web_view)` * webview,`[`IWebView2ContentLoadingEventArgs`](WebView2--IWebView2ContentLoadingEventArgs.md#interface_web_view2_1_1_i_web_view2_content_loading_event_args)` * args)` | Called to provide the implementer with the event args for the corresponding event.

## Members

#### `public HRESULT `[`Invoke`](#interface_web_view2_1_1_i_web_view2_content_loading_event_handler_1a8dfc8d58c666d0d930c51a729bc316c7)`(`[`IWebView2WebView`](WebView2--IWebView2WebView.md#interface_web_view2_1_1_i_web_view2_web_view)` * webview,`[`IWebView2ContentLoadingEventArgs`](WebView2--IWebView2ContentLoadingEventArgs.md#interface_web_view2_1_1_i_web_view2_content_loading_event_args)` * args)` {#interface_web_view2_1_1_i_web_view2_content_loading_event_handler_1a8dfc8d58c666d0d930c51a729bc316c7}

Called to provide the implementer with the event args for the corresponding event.

