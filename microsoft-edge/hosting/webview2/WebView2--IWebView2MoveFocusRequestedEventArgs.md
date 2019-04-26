# interface `WebView2::IWebView2MoveFocusRequestedEventArgs` {#interface_web_view2_1_1_i_web_view2_move_focus_requested_event_args}

```
interface WebView2::IWebView2MoveFocusRequestedEventArgs
  : public IUnknown
```  

Event args for the MoveFocusRequested event.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} `[`WEBVIEW2_MOVE_FOCUS_REASON`](WebView2.md#namespace_web_view2_1a2173602305b54912e692bad884cc40dc)` `[`Reason`](#interface_web_view2_1_1_i_web_view2_move_focus_requested_event_args_1a7a159a4ddac2efd022d630c1f677d9a4) | The reason for WebView to fire the MoveFocus Requested event.
`{property} BOOL `[`Handled`](#interface_web_view2_1_1_i_web_view2_move_focus_requested_event_args_1a3ee438c570bd5fc1890871af2151f32a) | Indicate whether the event has been handled by the app.

## Members

#### `{property} `[`WEBVIEW2_MOVE_FOCUS_REASON`](WebView2.md#namespace_web_view2_1a2173602305b54912e692bad884cc40dc)` `[`Reason`](#interface_web_view2_1_1_i_web_view2_move_focus_requested_event_args_1a7a159a4ddac2efd022d630c1f677d9a4) {#interface_web_view2_1_1_i_web_view2_move_focus_requested_event_args_1a7a159a4ddac2efd022d630c1f677d9a4}

The reason for WebView to fire the MoveFocus Requested event.

#### `{property} BOOL `[`Handled`](#interface_web_view2_1_1_i_web_view2_move_focus_requested_event_args_1a3ee438c570bd5fc1890871af2151f32a) {#interface_web_view2_1_1_i_web_view2_move_focus_requested_event_args_1a3ee438c570bd5fc1890871af2151f32a}

Indicate whether the event has been handled by the app.

If the app has moved the focus to its desired location, it should set Handled property to TRUE. When Handled property is false after the event handler returns, default action will be taken. The default action is to try to find the next tab stop child window in the app and try to move focus to that window. If there is no other such window to move focus to, focus will be cycled within the WebView's web content.

