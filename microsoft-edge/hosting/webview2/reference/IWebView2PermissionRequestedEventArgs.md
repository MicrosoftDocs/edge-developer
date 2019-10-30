---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/25/2019
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge
---

# interface IWebView2PermissionRequestedEventArgs 

```
interface IWebView2PermissionRequestedEventArgs
  : public IUnknown
```

Event args for the PermissionRequested event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[get_Uri](#get_uri) | The origin of the web content that requests the permission.
[get_PermissionType](#get_permissiontype) | The type of the permission that is requested.
[get_IsUserInitiated](#get_isuserinitiated) | True when the permission request was initiated through a user gesture.
[get_State](#get_state) | The status of a permission request, i.e.
[put_State](#put_state) | Set the State property.
[GetDeferral](#getdeferral) | GetDeferral can be called to return an [IWebView2Deferral](IWebView2Deferral.md#interface_i_web_view2_deferral) object.

## Members

#### get_Uri 

The origin of the web content that requests the permission.

> public HRESULT [get_Uri](#interface_i_web_view2_permission_requested_event_args_1af48bddff4e1baa399944c9043b82d906)(LPWSTR * uri)

#### get_PermissionType 

The type of the permission that is requested.

> public HRESULT [get_PermissionType](#interface_i_web_view2_permission_requested_event_args_1ad31dbffa5d20473c6bac0d4db9f5b0af)(WEBVIEW2_PERMISSION_TYPE * value)

#### get_IsUserInitiated 

True when the permission request was initiated through a user gesture.

> public HRESULT [get_IsUserInitiated](#interface_i_web_view2_permission_requested_event_args_1a349ba872587bd9fa82e38e58224ce97c)(BOOL * isUserInitiated)

Note that being initiated through a user gesture doesn't mean that user intended to access the associated resource.

#### get_State 

The status of a permission request, i.e.

> public HRESULT [get_State](#interface_i_web_view2_permission_requested_event_args_1a5b033c5072d50b9db230b98a6d08d6a6)(WEBVIEW2_PERMISSION_STATE * value)

whether the request is granted. Default value is WEBVIEW2_PERMISSION_STATE_DEFAULT.

#### put_State 

Set the State property.

> public HRESULT [put_State](#interface_i_web_view2_permission_requested_event_args_1ae857b7a120cb03b9d6a8e3cd2317aea5)(WEBVIEW2_PERMISSION_STATE value)

#### GetDeferral 

GetDeferral can be called to return an [IWebView2Deferral](IWebView2Deferral.md#interface_i_web_view2_deferral) object.

> public HRESULT [GetDeferral](#interface_i_web_view2_permission_requested_event_args_1abe8707da30166260f79550dd0c129932)([IWebView2Deferral](IWebView2Deferral.md#interface_i_web_view2_deferral) ** deferral)

Developer can use the deferral object to make the permission decision at a later time.

