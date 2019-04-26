# interface `WebView2::IWebView2MoveFocusRequestedEventHandler` {#interface_web_view2_1_1_i_web_view2_move_focus_requested_event_handler}

```
interface WebView2::IWebView2MoveFocusRequestedEventHandler
  : public IUnknown
```  

The caller implements this method to receive the MoveFocusRequested event.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public HRESULT `[`Invoke`](#interface_web_view2_1_1_i_web_view2_move_focus_requested_event_handler_1a2065c63e3670f1275ccceb476b29f8a8)`(`[`IWebView2WebView`](WebView2--IWebView2WebView.md#interface_web_view2_1_1_i_web_view2_web_view)` * webview,`[`IWebView2MoveFocusRequestedEventArgs`](WebView2--IWebView2MoveFocusRequestedEventArgs.md#interface_web_view2_1_1_i_web_view2_move_focus_requested_event_args)` * args)` | Called to provide the implementer with the event args for the corresponding event.

## Members

#### `public HRESULT `[`Invoke`](#interface_web_view2_1_1_i_web_view2_move_focus_requested_event_handler_1a2065c63e3670f1275ccceb476b29f8a8)`(`[`IWebView2WebView`](WebView2--IWebView2WebView.md#interface_web_view2_1_1_i_web_view2_web_view)` * webview,`[`IWebView2MoveFocusRequestedEventArgs`](WebView2--IWebView2MoveFocusRequestedEventArgs.md#interface_web_view2_1_1_i_web_view2_move_focus_requested_event_args)` * args)` {#interface_web_view2_1_1_i_web_view2_move_focus_requested_event_handler_1a2065c63e3670f1275ccceb476b29f8a8}

Called to provide the implementer with the event args for the corresponding event.

