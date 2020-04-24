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

# class Microsoft::Web::WebView2::Core::CoreWebView2ContentLoadingEventArgs 

Event args for the ContentLoading event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[IsErrorPage](#iserrorpage) | True if the loaded content is an error page.
[NavigationId](#navigationid) | The ID of the navigation.
[CoreWebView2ContentLoadingEventArgs](#corewebview2contentloadingeventargs) | Initializes a new instance of the CoreWebView2ContentLoadingEventArgs class.

## Members

#### IsErrorPage 

True if the loaded content is an error page.

> {property} bool [IsErrorPage](#iserrorpage)

#### NavigationId 

The ID of the navigation.

> {property} ulong [NavigationId](#navigationid)

#### CoreWebView2ContentLoadingEventArgs 

Initializes a new instance of the CoreWebView2ContentLoadingEventArgs class.

> public inline  [CoreWebView2ContentLoadingEventArgs](#corewebview2contentloadingeventargs)(Microsoft.Web.WebView2.Core.Raw.ICoreWebView2ContentLoadingEventArgs rawCoreWebView2ContentLoadingEventArgs)

