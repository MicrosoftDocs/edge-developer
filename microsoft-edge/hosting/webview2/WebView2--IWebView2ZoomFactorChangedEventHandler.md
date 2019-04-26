# interface `WebView2::IWebView2ZoomFactorChangedEventHandler` {#interface_web_view2_1_1_i_web_view2_zoom_factor_changed_event_handler}

```
interface WebView2::IWebView2ZoomFactorChangedEventHandler
  : public IUnknown
```  

The caller implements this interface to receive ZoomFactorChanged events.

Use the [IWebView2WebView.ZoomFactor](WebView2--IWebView2WebView.md#interface_web_view2_1_1_i_web_view2_web_view_1a5bdc1cac9f78231a4b77001ff2b8a4dd) property to get the modified zoom factor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public HRESULT `[`Invoke`](#interface_web_view2_1_1_i_web_view2_zoom_factor_changed_event_handler_1aef6d8716130a0503c90e6fb62a477d5c)`(`[`IWebView2WebView`](WebView2--IWebView2WebView.md#interface_web_view2_1_1_i_web_view2_web_view)` * webview,IUnknown * args)` | Called to provide the implementer with the event args for the corresponding event.

## Members

#### `public HRESULT `[`Invoke`](#interface_web_view2_1_1_i_web_view2_zoom_factor_changed_event_handler_1aef6d8716130a0503c90e6fb62a477d5c)`(`[`IWebView2WebView`](WebView2--IWebView2WebView.md#interface_web_view2_1_1_i_web_view2_web_view)` * webview,IUnknown * args)` {#interface_web_view2_1_1_i_web_view2_zoom_factor_changed_event_handler_1aef6d8716130a0503c90e6fb62a477d5c}

Called to provide the implementer with the event args for the corresponding event.

