# interface `WebView2::IWebView2ScriptDialogOpeningEventHandler` {#interface_web_view2_1_1_i_web_view2_script_dialog_opening_event_handler}

```
interface WebView2::IWebView2ScriptDialogOpeningEventHandler
  : public IUnknown
```  

The caller implements this interface to receive the JavaScriptDialogOpening event.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public HRESULT `[`Invoke`](#interface_web_view2_1_1_i_web_view2_script_dialog_opening_event_handler_1a87c24a43ef425c8f357d1943a72d764a)`(`[`IWebView2WebView`](WebView2--IWebView2WebView.md#interface_web_view2_1_1_i_web_view2_web_view)` * webview,`[`IWebView2ScriptDialogOpeningEventArgs`](WebView2--IWebView2ScriptDialogOpeningEventArgs.md#interface_web_view2_1_1_i_web_view2_script_dialog_opening_event_args)` * args)` | Called to provide the implementer with the event args for the corresponding event.

## Members

#### `public HRESULT `[`Invoke`](#interface_web_view2_1_1_i_web_view2_script_dialog_opening_event_handler_1a87c24a43ef425c8f357d1943a72d764a)`(`[`IWebView2WebView`](WebView2--IWebView2WebView.md#interface_web_view2_1_1_i_web_view2_web_view)` * webview,`[`IWebView2ScriptDialogOpeningEventArgs`](WebView2--IWebView2ScriptDialogOpeningEventArgs.md#interface_web_view2_1_1_i_web_view2_script_dialog_opening_event_args)` * args)` {#interface_web_view2_1_1_i_web_view2_script_dialog_opening_event_handler_1a87c24a43ef425c8f357d1943a72d764a}

Called to provide the implementer with the event args for the corresponding event.

