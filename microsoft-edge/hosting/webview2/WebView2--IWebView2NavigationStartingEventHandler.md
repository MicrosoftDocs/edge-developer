# interface `WebView2::IWebView2NavigationStartingEventHandler` {#interface_web_view2_1_1_i_web_view2_navigation_starting_event_handler}

```
interface WebView2::IWebView2NavigationStartingEventHandler
  : public IUnknown
```  

The caller implements this interface to receive the NavigationStarting event.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public HRESULT `[`Invoke`](#interface_web_view2_1_1_i_web_view2_navigation_starting_event_handler_1ac6d900f46d9c2eba8cc40e185cfea17c)`(`[`IWebView2WebView`](WebView2--IWebView2WebView.md#interface_web_view2_1_1_i_web_view2_web_view)` * webview,`[`IWebView2NavigationStartingEventArgs`](WebView2--IWebView2NavigationStartingEventArgs.md#interface_web_view2_1_1_i_web_view2_navigation_starting_event_args)` * args)` | Called to provide the implementer with the event args for the corresponding event.

## Members

#### `public HRESULT `[`Invoke`](#interface_web_view2_1_1_i_web_view2_navigation_starting_event_handler_1ac6d900f46d9c2eba8cc40e185cfea17c)`(`[`IWebView2WebView`](WebView2--IWebView2WebView.md#interface_web_view2_1_1_i_web_view2_web_view)` * webview,`[`IWebView2NavigationStartingEventArgs`](WebView2--IWebView2NavigationStartingEventArgs.md#interface_web_view2_1_1_i_web_view2_navigation_starting_event_args)` * args)` {#interface_web_view2_1_1_i_web_view2_navigation_starting_event_handler_1ac6d900f46d9c2eba8cc40e185cfea17c}

Called to provide the implementer with the event args for the corresponding event.

