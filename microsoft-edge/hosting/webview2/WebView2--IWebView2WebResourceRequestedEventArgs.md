# interface `WebView2::IWebView2WebResourceRequestedEventArgs` {#interface_web_view2_1_1_i_web_view2_web_resource_requested_event_args}

```
interface WebView2::IWebView2WebResourceRequestedEventArgs
  : public IUnknown
```  

Event args for the WebResourceRequested event.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} `[`IWebView2WebResourceRequest`](WebView2--IWebView2WebResourceRequest.md#interface_web_view2_1_1_i_web_view2_web_resource_request)` `[`Request`](#interface_web_view2_1_1_i_web_view2_web_resource_requested_event_args_1a81a995e1bd0c3c3795694e6c4c99e8c6) | The HTTP request.
`{property} `[`IWebView2WebResourceResponse`](WebView2--IWebView2WebResourceResponse.md#interface_web_view2_1_1_i_web_view2_web_resource_response)` `[`Response`](#interface_web_view2_1_1_i_web_view2_web_resource_requested_event_args_1a3fa956a552a8b7e1f88621c4fe8acfe5) | The HTTP response.
`public HRESULT `[`GetDeferral`](#interface_web_view2_1_1_i_web_view2_web_resource_requested_event_args_1a0b15536421b2364a86a22631571232c7)`(`[`IWebView2Deferral`](WebView2--IWebView2Deferral.md#interface_web_view2_1_1_i_web_view2_deferral)` ** deferral)` | Obtain an [IWebView2Deferral](WebView2--IWebView2Deferral.md#interface_web_view2_1_1_i_web_view2_deferral) object and put the event into a deferred state.

## Members

#### `{property} `[`IWebView2WebResourceRequest`](WebView2--IWebView2WebResourceRequest.md#interface_web_view2_1_1_i_web_view2_web_resource_request)` `[`Request`](#interface_web_view2_1_1_i_web_view2_web_resource_requested_event_args_1a81a995e1bd0c3c3795694e6c4c99e8c6) {#interface_web_view2_1_1_i_web_view2_web_resource_requested_event_args_1a81a995e1bd0c3c3795694e6c4c99e8c6}

The HTTP request.

#### `{property} `[`IWebView2WebResourceResponse`](WebView2--IWebView2WebResourceResponse.md#interface_web_view2_1_1_i_web_view2_web_resource_response)` `[`Response`](#interface_web_view2_1_1_i_web_view2_web_resource_requested_event_args_1a3fa956a552a8b7e1f88621c4fe8acfe5) {#interface_web_view2_1_1_i_web_view2_web_resource_requested_event_args_1a3fa956a552a8b7e1f88621c4fe8acfe5}

The HTTP response.

#### `public HRESULT `[`GetDeferral`](#interface_web_view2_1_1_i_web_view2_web_resource_requested_event_args_1a0b15536421b2364a86a22631571232c7)`(`[`IWebView2Deferral`](WebView2--IWebView2Deferral.md#interface_web_view2_1_1_i_web_view2_deferral)` ** deferral)` {#interface_web_view2_1_1_i_web_view2_web_resource_requested_event_args_1a0b15536421b2364a86a22631571232c7}

Obtain an [IWebView2Deferral](WebView2--IWebView2Deferral.md#interface_web_view2_1_1_i_web_view2_deferral) object and put the event into a deferred state.

You can use the [IWebView2Deferral](WebView2--IWebView2Deferral.md#interface_web_view2_1_1_i_web_view2_deferral) object to complete the network request at a later time.

