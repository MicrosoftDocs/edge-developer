# interface `WebView2::IWebView2HttpHeadersCollection` {#interface_web_view2_1_1_i_web_view2_http_headers_collection}

```
interface WebView2::IWebView2HttpHeadersCollection
  : public IUnknown
```  

A collection of HTTP headers.

Used with the [IWebView2WebResourceRequest](WebView2--IWebView2WebResourceRequest.md#interface_web_view2_1_1_i_web_view2_web_resource_request) and [IWebView2WebResourceResponse](WebView2--IWebView2WebResourceResponse.md#interface_web_view2_1_1_i_web_view2_web_resource_response) interfaces.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} UINT32 `[`Size`](#interface_web_view2_1_1_i_web_view2_http_headers_collection_1a890e6a28277431d481cdc49e0d5348e4) | Gets the size of collection.
`public HRESULT `[`GetHeaderValue`](#interface_web_view2_1_1_i_web_view2_http_headers_collection_1a1a5c1f404e66feb05368eb4198501385)`(PCWSTR name,PWSTR * value)` | Gets the first header value that matches the name.
`public HRESULT `[`SetHeaderValue`](#interface_web_view2_1_1_i_web_view2_http_headers_collection_1ad9b53b8aa9b801a6665f23a8ed3d3977)`(PCWSTR name,PCWSTR value)` | Sets (overwrites if existing) a header entry.
`public HRESULT `[`Contains`](#interface_web_view2_1_1_i_web_view2_http_headers_collection_1ad06079652042ba8043b2f5b0ac9320f1)`(PCWSTR name,BOOL * contains)` | Checks if a name exists.
`public HRESULT `[`GetHeaderValueByIndex`](#interface_web_view2_1_1_i_web_view2_http_headers_collection_1a8a321424152491cdc3bccdd3ee38d16e)`(UINT32 index,PWSTR * name,PWSTR * value)` | Gets header value by index.

## Members

#### `{property} UINT32 `[`Size`](#interface_web_view2_1_1_i_web_view2_http_headers_collection_1a890e6a28277431d481cdc49e0d5348e4) {#interface_web_view2_1_1_i_web_view2_http_headers_collection_1a890e6a28277431d481cdc49e0d5348e4}

Gets the size of collection.

#### `public HRESULT `[`GetHeaderValue`](#interface_web_view2_1_1_i_web_view2_http_headers_collection_1a1a5c1f404e66feb05368eb4198501385)`(PCWSTR name,PWSTR * value)` {#interface_web_view2_1_1_i_web_view2_http_headers_collection_1a1a5c1f404e66feb05368eb4198501385}

Gets the first header value that matches the name.

#### `public HRESULT `[`SetHeaderValue`](#interface_web_view2_1_1_i_web_view2_http_headers_collection_1ad9b53b8aa9b801a6665f23a8ed3d3977)`(PCWSTR name,PCWSTR value)` {#interface_web_view2_1_1_i_web_view2_http_headers_collection_1ad9b53b8aa9b801a6665f23a8ed3d3977}

Sets (overwrites if existing) a header entry.

#### `public HRESULT `[`Contains`](#interface_web_view2_1_1_i_web_view2_http_headers_collection_1ad06079652042ba8043b2f5b0ac9320f1)`(PCWSTR name,BOOL * contains)` {#interface_web_view2_1_1_i_web_view2_http_headers_collection_1ad06079652042ba8043b2f5b0ac9320f1}

Checks if a name exists.

#### `public HRESULT `[`GetHeaderValueByIndex`](#interface_web_view2_1_1_i_web_view2_http_headers_collection_1a8a321424152491cdc3bccdd3ee38d16e)`(UINT32 index,PWSTR * name,PWSTR * value)` {#interface_web_view2_1_1_i_web_view2_http_headers_collection_1a8a321424152491cdc3bccdd3ee38d16e}

Gets header value by index.

