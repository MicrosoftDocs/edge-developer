# interface `WebView2::IWebView2FocusChangedEventHandler` {#interface_web_view2_1_1_i_web_view2_focus_changed_event_handler}

```
interface WebView2::IWebView2FocusChangedEventHandler
  : public IUnknown
```  

The caller implements this method to receive the GotFocus and LostFocus events.

The args will be null.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public HRESULT `[`Invoke`](#interface_web_view2_1_1_i_web_view2_focus_changed_event_handler_1a54a4b6cd6a9b954ae19d4370017571c6)`(`[`IWebView2WebView`](WebView2--IWebView2WebView.md#interface_web_view2_1_1_i_web_view2_web_view)` * webview,IUnknown * args)` | Called to provide the implementer with the event args for the corresponding event.

## Members

#### `public HRESULT `[`Invoke`](#interface_web_view2_1_1_i_web_view2_focus_changed_event_handler_1a54a4b6cd6a9b954ae19d4370017571c6)`(`[`IWebView2WebView`](WebView2--IWebView2WebView.md#interface_web_view2_1_1_i_web_view2_web_view)` * webview,IUnknown * args)` {#interface_web_view2_1_1_i_web_view2_focus_changed_event_handler_1a54a4b6cd6a9b954ae19d4370017571c6}

Called to provide the implementer with the event args for the corresponding event.

