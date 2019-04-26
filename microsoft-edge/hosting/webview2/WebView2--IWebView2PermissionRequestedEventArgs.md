# interface `WebView2::IWebView2PermissionRequestedEventArgs` {#interface_web_view2_1_1_i_web_view2_permission_requested_event_args}

```
interface WebView2::IWebView2PermissionRequestedEventArgs
  : public IUnknown
```  

Event args for the PermissionRequested event.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} PWSTR `[`Uri`](#interface_web_view2_1_1_i_web_view2_permission_requested_event_args_1a027a8c7d7555484c6ef43aa18219f983) | The origin of the web content that requests the permission.
`{property} `[`WEBVIEW2_PERMISSION_TYPE`](WebView2.md#namespace_web_view2_1a459600b4d563621489f50542f87dfe50)` `[`PermissionType`](#interface_web_view2_1_1_i_web_view2_permission_requested_event_args_1a02fb4e842c68871a0d255edcedfacb26) | The type of the permission that is requested.
`{property} BOOL `[`IsUserInitiated`](#interface_web_view2_1_1_i_web_view2_permission_requested_event_args_1a4572f6420e3e6ecdcaf99a4583caa483) | True when the permission request was initiated through a user gesture.
`{property} `[`WEBVIEW2_PERMISSION_STATE`](WebView2.md#namespace_web_view2_1a789791fc978b2b95ff927e05c99e121a)` `[`State`](#interface_web_view2_1_1_i_web_view2_permission_requested_event_args_1a81ab46224b1749bf874b10e326e786eb) | The status of a permission request, i.e.
`public HRESULT `[`GetDeferral`](#interface_web_view2_1_1_i_web_view2_permission_requested_event_args_1a96eaa20339cf1664b8be959ba5bc3070)`(`[`IWebView2Deferral`](WebView2--IWebView2Deferral.md#interface_web_view2_1_1_i_web_view2_deferral)` ** deferral)` | GetDeferral can be called to return an [IWebView2Deferral](WebView2--IWebView2Deferral.md#interface_web_view2_1_1_i_web_view2_deferral) object.

## Members

#### `{property} PWSTR `[`Uri`](#interface_web_view2_1_1_i_web_view2_permission_requested_event_args_1a027a8c7d7555484c6ef43aa18219f983) {#interface_web_view2_1_1_i_web_view2_permission_requested_event_args_1a027a8c7d7555484c6ef43aa18219f983}

The origin of the web content that requests the permission.

#### `{property} `[`WEBVIEW2_PERMISSION_TYPE`](WebView2.md#namespace_web_view2_1a459600b4d563621489f50542f87dfe50)` `[`PermissionType`](#interface_web_view2_1_1_i_web_view2_permission_requested_event_args_1a02fb4e842c68871a0d255edcedfacb26) {#interface_web_view2_1_1_i_web_view2_permission_requested_event_args_1a02fb4e842c68871a0d255edcedfacb26}

The type of the permission that is requested.

#### `{property} BOOL `[`IsUserInitiated`](#interface_web_view2_1_1_i_web_view2_permission_requested_event_args_1a4572f6420e3e6ecdcaf99a4583caa483) {#interface_web_view2_1_1_i_web_view2_permission_requested_event_args_1a4572f6420e3e6ecdcaf99a4583caa483}

True when the permission request was initiated through a user gesture.

Note that being initiated through a user gesture doesn't mean that user intended to access the associated resource.

#### `{property} `[`WEBVIEW2_PERMISSION_STATE`](WebView2.md#namespace_web_view2_1a789791fc978b2b95ff927e05c99e121a)` `[`State`](#interface_web_view2_1_1_i_web_view2_permission_requested_event_args_1a81ab46224b1749bf874b10e326e786eb) {#interface_web_view2_1_1_i_web_view2_permission_requested_event_args_1a81ab46224b1749bf874b10e326e786eb}

The status of a permission request, i.e.

whether the request is granted. Default value is WEBVIEW2_PERMISSION_STATE_DEFAULT.

#### `public HRESULT `[`GetDeferral`](#interface_web_view2_1_1_i_web_view2_permission_requested_event_args_1a96eaa20339cf1664b8be959ba5bc3070)`(`[`IWebView2Deferral`](WebView2--IWebView2Deferral.md#interface_web_view2_1_1_i_web_view2_deferral)` ** deferral)` {#interface_web_view2_1_1_i_web_view2_permission_requested_event_args_1a96eaa20339cf1664b8be959ba5bc3070}

GetDeferral can be called to return an [IWebView2Deferral](WebView2--IWebView2Deferral.md#interface_web_view2_1_1_i_web_view2_deferral) object.

Developer can use the deferral object to make the permission decision at a later time.

