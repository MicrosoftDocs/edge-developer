---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/27/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---

# class Microsoft::Web::WebView2::Core::CoreWebView2PermissionRequestedEventArgs 

Event args for the PermissionRequested event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[uri](#uri) | The origin of the web content that requests the permission.
[PermissionKind](#permissionkind) | The type of the permission that is requested.
[IsUserInitiated](#isuserinitiated) | True when the permission request was initiated through a user gesture.
[State](#state) | The status of a permission request, i.e.
[GetDeferral](#getdeferral) | GetDeferral can be called to return a CoreWebView2Deferral object.

## Members

### Properties

#### uri 

The origin of the web content that requests the permission.

> {property} string [uri](#uri)

#### PermissionKind 

The type of the permission that is requested.

> {property} CoreWebView2PermissionKind [PermissionKind](#permissionkind)

#### IsUserInitiated 

True when the permission request was initiated through a user gesture.

> {property} bool [IsUserInitiated](#isuserinitiated)

Note that being initiated through a user gesture doesn't mean that user intended to access the associated resource.

#### State 

The status of a permission request, i.e.

> {property} CoreWebView2PermissionState [State](#state)

whether the request is granted.

Default value is CoreWebView2PermissionState.Default.

### Methods

#### GetDeferral 

GetDeferral can be called to return a CoreWebView2Deferral object.

> public inline CoreWebView2Deferral [GetDeferral](#getdeferral)()

Developer can use the deferral object to make the permission decision at a later time.

