---
description: Embed web technologies (HTML, CSS, and JavaScript) in your native applications with the Microsoft Edge WebView2 control
title: Microsoft.Web.WebView2.Core.CoreWebView2PermissionRequestedEventArgs
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/10/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: Microsoft.Web.WebView2, Core, webview2, webview, dotnet, wpf, winforms, app, edge, CoreWebView2, CoreWebView2Controller, browser control, edge html, Microsoft.Web.WebView2.Core.CoreWebView2PermissionRequestedEventArgs
---

# Microsoft.Web.WebView2.Core.CoreWebView2PermissionRequestedEventArgs class 

Namespace: Microsoft.Web.WebView2.Core\
Assembly: Microsoft.Web.WebView2.Core.dll

Event args for the PermissionRequested event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[IsUserInitiated](#isuserinitiated) | True when the new window request was initiated through a user gesture such as clicking an anchor tag with target.
[PermissionKind](#permissionkind) | The type of the permission that is requested.
[State](#state) | The status of a permission request, i.e.
[Uri](#uri) | The origin of the web content that requests the permission.
[GetDeferral](#getdeferral) | GetDeferral can be called to return a CoreWebView2Deferral object.

## Members

#### IsUserInitiated 

True when the new window request was initiated through a user gesture such as clicking an anchor tag with target.

> public bool [IsUserInitiated](#isuserinitiated)

The Edge popup blocker is disabled for WebView so the app can use this flag to block non-user initiated popups.

#### PermissionKind 

The type of the permission that is requested.

> public CoreWebView2PermissionKind [PermissionKind](#permissionkind)

#### State 

The status of a permission request, i.e.

> public CoreWebView2PermissionState [State](#state)

whether the request is granted.

Default value is CoreWebView2PermissionState.Default.

#### Uri 

The origin of the web content that requests the permission.

> public string [Uri](#uri)

#### GetDeferral 

GetDeferral can be called to return a CoreWebView2Deferral object.

> public CoreWebView2Deferral [GetDeferral](#getdeferral)()

Developer can use the deferral object to make the permission decision at a later time.

