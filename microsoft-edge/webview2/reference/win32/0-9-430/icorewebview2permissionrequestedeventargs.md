---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 02/26/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# interface ICoreWebView2PermissionRequestedEventArgs 

> [!NOTE]
> This interface may be altered or unavailable for releases after SDK version 0.9.430. Please refer to [Reference](../../../webview2-api-reference.md) for the latest API reference.

```
interface ICoreWebView2PermissionRequestedEventArgs
  : public IUnknown
```

Event args for the PermissionRequested event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[get_Uri](#get_uri) | The origin of the web content that requests the permission.
[get_PermissionKind](#get_permissionkind) | The type of the permission that is requested.
[get_IsUserInitiated](#get_isuserinitiated) | True when the permission request was initiated through a user gesture.
[get_State](#get_state) | The status of a permission request, i.e.
[put_State](#put_state) | Set the State property.
[GetDeferral](#getdeferral) | GetDeferral can be called to return an [ICoreWebView2Deferral](ICoreWebView2Deferral.md) object.

## Members

#### get_Uri 

The origin of the web content that requests the permission.

> public HRESULT [get_Uri](#get_uri)(LPWSTR * uri)

#### get_PermissionKind 

The type of the permission that is requested.

> public HRESULT [get_PermissionKind](#get_permissionkind)(CORE_WEBVIEW2_PERMISSION_KIND * value)

#### get_IsUserInitiated 

True when the permission request was initiated through a user gesture.

> public HRESULT [get_IsUserInitiated](#get_isuserinitiated)(BOOL * isUserInitiated)

Note that being initiated through a user gesture doesn't mean that user intended to access the associated resource.

#### get_State 

The status of a permission request, i.e.

> public HRESULT [get_State](#get_state)(CORE_WEBVIEW2_PERMISSION_STATE * value)

whether the request is granted. Default value is CORE_WEBVIEW2_PERMISSION_STATE_DEFAULT.

#### put_State 

Set the State property.

> public HRESULT [put_State](#put_state)(CORE_WEBVIEW2_PERMISSION_STATE value)

#### GetDeferral 

GetDeferral can be called to return an [ICoreWebView2Deferral](ICoreWebView2Deferral.md) object.

> public HRESULT [GetDeferral](#getdeferral)([ICoreWebView2Deferral](ICoreWebView2Deferral.md) ** deferral)

Developer can use the deferral object to make the permission decision at a later time.

