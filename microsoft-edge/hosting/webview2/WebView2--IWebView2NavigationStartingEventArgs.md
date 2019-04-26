# interface `WebView2::IWebView2NavigationStartingEventArgs` {#interface_web_view2_1_1_i_web_view2_navigation_starting_event_args}

```
interface WebView2::IWebView2NavigationStartingEventArgs
  : public IUnknown
```  

Event args for the NavigationStarting event.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} PWSTR `[`Uri`](#interface_web_view2_1_1_i_web_view2_navigation_starting_event_args_1a6e64e15b010f46f45325ce8a80aeba4e) | The uri of the requested navigation.
`{property} BOOL `[`IsMainFrame`](#interface_web_view2_1_1_i_web_view2_navigation_starting_event_args_1aa8a13569f516b9ccfc04e8be1aaa290e) | True when the navigation is requested on the main frame (the top level document) and false for child frames.
`{property} BOOL `[`IsUserInitiated`](#interface_web_view2_1_1_i_web_view2_navigation_starting_event_args_1a34087aa63c57292f5a0a29da0cbe1381) | True when the navigation was initiated through a user gesture as opposed to programatic navigation.
`{property} BOOL `[`IsRedirected`](#interface_web_view2_1_1_i_web_view2_navigation_starting_event_args_1aafe26586fa028fab27b45baf4d4727f9) | Ture when the navigation is redirected.
`{property} PWSTR `[`RequestHeaders`](#interface_web_view2_1_1_i_web_view2_navigation_starting_event_args_1ab1ba05d84521516dd7602aaf6886b35d) | The HTTP request headers for the navigation.
`{property} BOOL `[`Cancel`](#interface_web_view2_1_1_i_web_view2_navigation_starting_event_args_1a5373537d98626ee5ec5ecc13d78190cd) | The host may set this flag to cancel the navigation.

## Members

#### `{property} PWSTR `[`Uri`](#interface_web_view2_1_1_i_web_view2_navigation_starting_event_args_1a6e64e15b010f46f45325ce8a80aeba4e) {#interface_web_view2_1_1_i_web_view2_navigation_starting_event_args_1a6e64e15b010f46f45325ce8a80aeba4e}

The uri of the requested navigation.

#### `{property} BOOL `[`IsMainFrame`](#interface_web_view2_1_1_i_web_view2_navigation_starting_event_args_1aa8a13569f516b9ccfc04e8be1aaa290e) {#interface_web_view2_1_1_i_web_view2_navigation_starting_event_args_1aa8a13569f516b9ccfc04e8be1aaa290e}

True when the navigation is requested on the main frame (the top level document) and false for child frames.

#### `{property} BOOL `[`IsUserInitiated`](#interface_web_view2_1_1_i_web_view2_navigation_starting_event_args_1a34087aa63c57292f5a0a29da0cbe1381) {#interface_web_view2_1_1_i_web_view2_navigation_starting_event_args_1a34087aa63c57292f5a0a29da0cbe1381}

True when the navigation was initiated through a user gesture as opposed to programatic navigation.

#### `{property} BOOL `[`IsRedirected`](#interface_web_view2_1_1_i_web_view2_navigation_starting_event_args_1aafe26586fa028fab27b45baf4d4727f9) {#interface_web_view2_1_1_i_web_view2_navigation_starting_event_args_1aafe26586fa028fab27b45baf4d4727f9}

Ture when the navigation is redirected.

#### `{property} PWSTR `[`RequestHeaders`](#interface_web_view2_1_1_i_web_view2_navigation_starting_event_args_1ab1ba05d84521516dd7602aaf6886b35d) {#interface_web_view2_1_1_i_web_view2_navigation_starting_event_args_1ab1ba05d84521516dd7602aaf6886b35d}

The HTTP request headers for the navigation.

#### `{property} BOOL `[`Cancel`](#interface_web_view2_1_1_i_web_view2_navigation_starting_event_args_1a5373537d98626ee5ec5ecc13d78190cd) {#interface_web_view2_1_1_i_web_view2_navigation_starting_event_args_1a5373537d98626ee5ec5ecc13d78190cd}

The host may set this flag to cancel the navigation.

If set, it will be as if the navigation never happened and the current page's content will be intact. For performance reasons, GET HTTP requests may happen, while the host is responding. This means cookies can be set and used part of a request for the navigation.

