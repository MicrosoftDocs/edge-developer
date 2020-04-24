---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/22/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---

# class Microsoft::Web::WebView2::Core::CoreWebView2NavigationCompletedEventArgs 

Event args for the NavigationCompleted event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[IsSuccess](#issuccess) | True when the navigation is successful.
[WebErrorStatus](#weberrorstatus) | The error code if the navigation failed.
[NavigationId](#navigationid) | The ID of the navigation.
[CoreWebView2NavigationCompletedEventArgs](#corewebview2navigationcompletedeventargs) | Initializes a new instance of the CoreWebView2NavigationCompletedEventArgs class.

## Members

#### IsSuccess 

True when the navigation is successful.

> {property} bool [IsSuccess](#issuccess)

This is false for a navigation that ended up in an error page (failures due to no network, DNS lookup failure, HTTP server responds with 4xx), but could also be false for additional things such as window.stop() called on navigated page.

#### WebErrorStatus 

The error code if the navigation failed.

> {property} CoreWebView2WebErrorStatus [WebErrorStatus](#weberrorstatus)

#### NavigationId 

The ID of the navigation.

> {property} ulong [NavigationId](#navigationid)

#### CoreWebView2NavigationCompletedEventArgs 

Initializes a new instance of the CoreWebView2NavigationCompletedEventArgs class.

> public inline  [CoreWebView2NavigationCompletedEventArgs](#corewebview2navigationcompletedeventargs)(Microsoft.Web.WebView2.Core.Raw.ICoreWebView2NavigationCompletedEventArgs rawCoreWebView2NavigationCompletedEventArgs)

