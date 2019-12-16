---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 12/09/2019
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
[GetDeferral](#getdeferral) | GetDeferral can be called to return an [IWebView2Deferral](IWebView2Deferral.md#iwebview2deferral) object.

## Members

#### get_Uri 

The origin of the web content that requests the permission.

> public HRESULT [get_Uri](#get_uri)(LPWSTR * uri)

#### get_PermissionType 

The type of the permission that is requested.

> public HRESULT [get_PermissionType](#get_permissiontype)(WEBVIEW2_PERMISSION_TYPE * value)

#### get_IsUserInitiated 

True when the permission request was initiated through a user gesture.

> public HRESULT [get_IsUserInitiated](#get_isuserinitiated)(BOOL * isUserInitiated)

Note that being initiated through a user gesture doesn't mean that user intended to access the associated resource.

#### get_State 

The status of a permission request, i.e.

> public HRESULT [get_State](#get_state)(WEBVIEW2_PERMISSION_STATE * value)

whether the request is granted. Default value is WEBVIEW2_PERMISSION_STATE_DEFAULT.

#### put_State 

Set the State property.

> public HRESULT [put_State](#put_state)(WEBVIEW2_PERMISSION_STATE value)

#### GetDeferral 

GetDeferral can be called to return an [IWebView2Deferral](IWebView2Deferral.md#iwebview2deferral) object.

> public HRESULT [GetDeferral](#getdeferral)([IWebView2Deferral](IWebView2Deferral.md#iwebview2deferral) ** deferral)

Developer can use the deferral object to make the permission decision at a later time.

