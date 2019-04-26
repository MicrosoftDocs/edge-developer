# interface `WebView2::IWebView2ProcessFailedEventHandler` {#interface_web_view2_1_1_i_web_view2_process_failed_event_handler}

```
interface WebView2::IWebView2ProcessFailedEventHandler
  : public IUnknown
```  

The caller implements this interface to receive ProcessFailed events.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public HRESULT `[`Invoke`](#interface_web_view2_1_1_i_web_view2_process_failed_event_handler_1a3c4399282859fab9f5bb79cd7fd6ae37)`(`[`IWebView2WebView`](WebView2--IWebView2WebView.md#interface_web_view2_1_1_i_web_view2_web_view)` * webview,`[`IWebView2ProcessFailedEventArgs`](WebView2--IWebView2ProcessFailedEventArgs.md#interface_web_view2_1_1_i_web_view2_process_failed_event_args)` * args)` | Called to provide the implementer with the event args for the corresponding event.

## Members

#### `public HRESULT `[`Invoke`](#interface_web_view2_1_1_i_web_view2_process_failed_event_handler_1a3c4399282859fab9f5bb79cd7fd6ae37)`(`[`IWebView2WebView`](WebView2--IWebView2WebView.md#interface_web_view2_1_1_i_web_view2_web_view)` * webview,`[`IWebView2ProcessFailedEventArgs`](WebView2--IWebView2ProcessFailedEventArgs.md#interface_web_view2_1_1_i_web_view2_process_failed_event_args)` * args)` {#interface_web_view2_1_1_i_web_view2_process_failed_event_handler_1a3c4399282859fab9f5bb79cd7fd6ae37}

Called to provide the implementer with the event args for the corresponding event.

