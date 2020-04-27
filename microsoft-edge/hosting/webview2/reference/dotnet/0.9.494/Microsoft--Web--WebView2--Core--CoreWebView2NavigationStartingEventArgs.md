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

# class Microsoft::Web::WebView2::Core::CoreWebView2NavigationStartingEventArgs 

Event args for the NavigationStarting event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[uri](#uri) | The uri of the requested navigation.
[IsUserInitiated](#isuserinitiated) | True when the navigation was initiated through a user gesture as opposed to programmatic navigation.
[IsRedirected](#isredirected) | True when the navigation is redirected.
[RequestHeaders](#requestheaders) | The HTTP request headers for the navigation.
[Cancel](#cancel) | The host may set this flag to cancel the navigation.
[NavigationId](#navigationid) | The ID of the navigation.

## Members

### Properties

#### uri 

The uri of the requested navigation.

> {property} string [uri](#uri)

#### IsUserInitiated 

True when the navigation was initiated through a user gesture as opposed to programmatic navigation.

> {property} bool [IsUserInitiated](#isuserinitiated)

#### IsRedirected 

True when the navigation is redirected.

> {property} bool [IsRedirected](#isredirected)

#### RequestHeaders 

The HTTP request headers for the navigation.

> {property} HttpRequestHeaders [RequestHeaders](#requestheaders)

Note, you cannot modify the HTTP request headers in a NavigationStarting event.

#### Cancel 

The host may set this flag to cancel the navigation.

> {property} bool? [Cancel](#cancel)

If set, it will be as if the navigation never happened and the current page's content will be intact. For performance reasons, GET HTTP requests may happen, while the host is responding. This means cookies can be set and used part of a request for the navigation.

#### NavigationId 

The ID of the navigation.

> {property} ulong [NavigationId](#navigationid)

