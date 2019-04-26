# interface `WebView2::IWebView2WebResourceResponse` {#interface_web_view2_1_1_i_web_view2_web_resource_response}

```
interface WebView2::IWebView2WebResourceResponse
  : public IUnknown
```  

An HTTP response used with the WebResourceRequested event.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} IStream `[`Content`](#interface_web_view2_1_1_i_web_view2_web_resource_response_1aafcf0740bd994ff8f7c01e700359caca) | HTTP response content as stream.
`{property} PWSTR `[`Headers`](#interface_web_view2_1_1_i_web_view2_web_resource_response_1a9a03e4a41e7b3900287f18c66ab5ab89) | Overriden HTTP response headers.
`{property} PCWSTR `[`Headers`](#interface_web_view2_1_1_i_web_view2_web_resource_response_1a5c5d782c2d607ca5556709f6983abaa0) | 
`{property} int `[`StatusCode`](#interface_web_view2_1_1_i_web_view2_web_resource_response_1a6d4dd6f00a69a76bf399b6bcf3585868) | The HTTP response status code.
`{property} PWSTR `[`ReasonPhrase`](#interface_web_view2_1_1_i_web_view2_web_resource_response_1a5bfae61a061c58b98098de3f88dbe54a) | The HTTP response reason phrase.
`{property} PCWSTR `[`ReasonPhrase`](#interface_web_view2_1_1_i_web_view2_web_resource_response_1af19c375e059bfe3c4ad36a8ee4fcbece) | 

## Members

#### `{property} IStream `[`Content`](#interface_web_view2_1_1_i_web_view2_web_resource_response_1aafcf0740bd994ff8f7c01e700359caca) {#interface_web_view2_1_1_i_web_view2_web_resource_response_1aafcf0740bd994ff8f7c01e700359caca}

HTTP response content as stream.

Stream must have all the content data available by the time this response's WebResourceRequested event deferral is completed. Stream should be agile or be created from a background thread to prevent performance impact to the UI thread. Null means no content data. IStream semantics apply (return S_OK to Read calls until all data is exhausted)

#### `{property} PWSTR `[`Headers`](#interface_web_view2_1_1_i_web_view2_web_resource_response_1a9a03e4a41e7b3900287f18c66ab5ab89) {#interface_web_view2_1_1_i_web_view2_web_resource_response_1a9a03e4a41e7b3900287f18c66ab5ab89}

Overriden HTTP response headers.

#### `{property} PCWSTR `[`Headers`](#interface_web_view2_1_1_i_web_view2_web_resource_response_1a5c5d782c2d607ca5556709f6983abaa0) {#interface_web_view2_1_1_i_web_view2_web_resource_response_1a5c5d782c2d607ca5556709f6983abaa0}

#### `{property} int `[`StatusCode`](#interface_web_view2_1_1_i_web_view2_web_resource_response_1a6d4dd6f00a69a76bf399b6bcf3585868) {#interface_web_view2_1_1_i_web_view2_web_resource_response_1a6d4dd6f00a69a76bf399b6bcf3585868}

The HTTP response status code.

#### `{property} PWSTR `[`ReasonPhrase`](#interface_web_view2_1_1_i_web_view2_web_resource_response_1a5bfae61a061c58b98098de3f88dbe54a) {#interface_web_view2_1_1_i_web_view2_web_resource_response_1a5bfae61a061c58b98098de3f88dbe54a}

The HTTP response reason phrase.

#### `{property} PCWSTR `[`ReasonPhrase`](#interface_web_view2_1_1_i_web_view2_web_resource_response_1af19c375e059bfe3c4ad36a8ee4fcbece) {#interface_web_view2_1_1_i_web_view2_web_resource_response_1af19c375e059bfe3c4ad36a8ee4fcbece}

