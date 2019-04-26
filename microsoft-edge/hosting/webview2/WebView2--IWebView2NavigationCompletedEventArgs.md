# interface `WebView2::IWebView2NavigationCompletedEventArgs` {#interface_web_view2_1_1_i_web_view2_navigation_completed_event_args}

```
interface WebView2::IWebView2NavigationCompletedEventArgs
  : public IUnknown
```  

Event args for the NavigationCompleted event.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} BOOL `[`IsSuccess`](#interface_web_view2_1_1_i_web_view2_navigation_completed_event_args_1acc19ad07b5d0976849a0d16960beaeda) | True when the navigation is successful.
`{property} `[`WEBVIEW2_WEB_ERROR_STATUS`](WebView2.md#namespace_web_view2_1a911636e77a86d6059ee79d3e2cc2eead)` `[`WebErrorStatus`](#interface_web_view2_1_1_i_web_view2_navigation_completed_event_args_1a69debe70b2040b0556e6f7cac4207113) | The error code if the navigation failed.

## Members

#### `{property} BOOL `[`IsSuccess`](#interface_web_view2_1_1_i_web_view2_navigation_completed_event_args_1acc19ad07b5d0976849a0d16960beaeda) {#interface_web_view2_1_1_i_web_view2_navigation_completed_event_args_1acc19ad07b5d0976849a0d16960beaeda}

True when the navigation is successful.

This is false for a navigation that ended up in an error page (failures due to no network, DNS lookup failure, HTTP server responds with 4xx), but could also be false for additional things such as window.stop() called on navigated page.

#### `{property} `[`WEBVIEW2_WEB_ERROR_STATUS`](WebView2.md#namespace_web_view2_1a911636e77a86d6059ee79d3e2cc2eead)` `[`WebErrorStatus`](#interface_web_view2_1_1_i_web_view2_navigation_completed_event_args_1a69debe70b2040b0556e6f7cac4207113) {#interface_web_view2_1_1_i_web_view2_navigation_completed_event_args_1a69debe70b2040b0556e6f7cac4207113}

The error code if the navigation failed.

