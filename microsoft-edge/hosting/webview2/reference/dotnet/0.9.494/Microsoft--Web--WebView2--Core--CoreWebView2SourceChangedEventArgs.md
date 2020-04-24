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

# class Microsoft::Web::WebView2::Core::CoreWebView2SourceChangedEventArgs 

Event args for the SourceChanged event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[IsNewDocument](#isnewdocument) | True if the page being navigated to is a new document.
[CoreWebView2SourceChangedEventArgs](#corewebview2sourcechangedeventargs) | Initializes a new instance of the CoreWebView2SourceChangedEventArgs class.

## Members

#### IsNewDocument 

True if the page being navigated to is a new document.

> {property} bool [IsNewDocument](#isnewdocument)

#### CoreWebView2SourceChangedEventArgs 

Initializes a new instance of the CoreWebView2SourceChangedEventArgs class.

> public inline  [CoreWebView2SourceChangedEventArgs](#corewebview2sourcechangedeventargs)(Microsoft.Web.WebView2.Core.Raw.ICoreWebView2SourceChangedEventArgs rawCoreWebView2SourceChangedEventArgs)

