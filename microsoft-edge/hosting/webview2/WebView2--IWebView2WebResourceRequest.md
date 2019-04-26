# interface `WebView2::IWebView2WebResourceRequest` {#interface_web_view2_1_1_i_web_view2_web_resource_request}

```
interface WebView2::IWebView2WebResourceRequest
  : public IUnknown
```  

An HTTP request used with the WebResourceRequested event.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} PWSTR `[`Uri`](#interface_web_view2_1_1_i_web_view2_web_resource_request_1a24632d229b077626d67c7feeac4635f7) | The request URI.
`{property} PCWSTR `[`Uri`](#interface_web_view2_1_1_i_web_view2_web_resource_request_1af154317a9868100066a1eef4e0eaf4a5) | 
`{property} PWSTR `[`Method`](#interface_web_view2_1_1_i_web_view2_web_resource_request_1a5f0779606f8043e53532078135cb746e) | The HTTP request method.
`{property} PCWSTR `[`Method`](#interface_web_view2_1_1_i_web_view2_web_resource_request_1a929adef4bb3237a839fb61eb5eec6c15) | 
`{property} IStream `[`Content`](#interface_web_view2_1_1_i_web_view2_web_resource_request_1ad6cb3df02c97fd491dde40eb5be73396) | The HTTP request message body as stream.
`{property} PWSTR `[`Headers`](#interface_web_view2_1_1_i_web_view2_web_resource_request_1ae463711fd6f52a955c3f65708438a56e) | The mutable HTTP request headers as a JSON string.
`{property} PCWSTR `[`Headers`](#interface_web_view2_1_1_i_web_view2_web_resource_request_1a3bb0174523bbebe77952a0d85cc78cc9) | 

## Members

#### `{property} PWSTR `[`Uri`](#interface_web_view2_1_1_i_web_view2_web_resource_request_1a24632d229b077626d67c7feeac4635f7) {#interface_web_view2_1_1_i_web_view2_web_resource_request_1a24632d229b077626d67c7feeac4635f7}

The request URI.

#### `{property} PCWSTR `[`Uri`](#interface_web_view2_1_1_i_web_view2_web_resource_request_1af154317a9868100066a1eef4e0eaf4a5) {#interface_web_view2_1_1_i_web_view2_web_resource_request_1af154317a9868100066a1eef4e0eaf4a5}

#### `{property} PWSTR `[`Method`](#interface_web_view2_1_1_i_web_view2_web_resource_request_1a5f0779606f8043e53532078135cb746e) {#interface_web_view2_1_1_i_web_view2_web_resource_request_1a5f0779606f8043e53532078135cb746e}

The HTTP request method.

#### `{property} PCWSTR `[`Method`](#interface_web_view2_1_1_i_web_view2_web_resource_request_1a929adef4bb3237a839fb61eb5eec6c15) {#interface_web_view2_1_1_i_web_view2_web_resource_request_1a929adef4bb3237a839fb61eb5eec6c15}

#### `{property} IStream `[`Content`](#interface_web_view2_1_1_i_web_view2_web_resource_request_1ad6cb3df02c97fd491dde40eb5be73396) {#interface_web_view2_1_1_i_web_view2_web_resource_request_1ad6cb3df02c97fd491dde40eb5be73396}

The HTTP request message body as stream.

POST data would be here. If a stream is set, which will override the message body, the stream must have all the content data available by the time this response's WebResourceRequested event deferral is completed. Stream should be agile or be created from a background STA to prevent performance impact to the UI thread. Null means no content data. IStream semantics apply (return S_OK to Read calls until all data is exhausted)

#### `{property} PWSTR `[`Headers`](#interface_web_view2_1_1_i_web_view2_web_resource_request_1ae463711fd6f52a955c3f65708438a56e) {#interface_web_view2_1_1_i_web_view2_web_resource_request_1ae463711fd6f52a955c3f65708438a56e}

The mutable HTTP request headers as a JSON string.

#### `{property} PCWSTR `[`Headers`](#interface_web_view2_1_1_i_web_view2_web_resource_request_1a3bb0174523bbebe77952a0d85cc78cc9) {#interface_web_view2_1_1_i_web_view2_web_resource_request_1a3bb0174523bbebe77952a0d85cc78cc9}

