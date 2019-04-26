# interface `WebView2::IWebView2ContentLoadingEventArgs` {#interface_web_view2_1_1_i_web_view2_content_loading_event_args}

```
interface WebView2::IWebView2ContentLoadingEventArgs
  : public IUnknown
```  

Event args for the ContentLoading event.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} PWSTR `[`ResponseHeaders`](#interface_web_view2_1_1_i_web_view2_content_loading_event_args_1aa5b16eb286ef75d033058f6348fb6a07) | The HTTP response headers.
`{property} BOOL `[`IsErrorPage`](#interface_web_view2_1_1_i_web_view2_content_loading_event_args_1a5b8dd6932516805cbcb412166acd4baf) | True if the loaded content is an error page.

## Members

#### `{property} PWSTR `[`ResponseHeaders`](#interface_web_view2_1_1_i_web_view2_content_loading_event_args_1aa5b16eb286ef75d033058f6348fb6a07) {#interface_web_view2_1_1_i_web_view2_content_loading_event_args_1aa5b16eb286ef75d033058f6348fb6a07}

The HTTP response headers.

#### `{property} BOOL `[`IsErrorPage`](#interface_web_view2_1_1_i_web_view2_content_loading_event_args_1a5b8dd6932516805cbcb412166acd4baf) {#interface_web_view2_1_1_i_web_view2_content_loading_event_args_1a5b8dd6932516805cbcb412166acd4baf}

True if the loaded content is an error page.

