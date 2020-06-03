---
description: Learn about what's coming next for WebView2
title: Roadmap for Microsoft Edge WebView 2
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/19/2020
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# Microsoft Edge WebView2 roadmap

##### Last Updated: May 2020

The WebView2 control allows developers to embed web technologies in their native applications. This document outlines the prospective roadmap for WebView2. 

> [!NOTE]
> WebView2 is under active development and the roadmap will continue to evolve based on market changes and customer feedback, so please note that the plans outlined here aren't exhaustive and are subject to change. 

If you have concerns or questions about the Roadmap, please leave feedback in the [feedback repo](https://github.com/MicrosoftEdge/WebViewFeedback).

The WebView2 team has a few major efforts underway:

1.  WebView2 Runtime Installer (Q4 2020)
2.  Fixed Version (Q4 2020)
3.  General Availability 
    *   Win32 C/C++ (Q4 2020)
    *   .NET (Q4 2020)
    *   [WinUI 3.0](https://github.com/microsoft/microsoft-ui-xaml/blob/master/docs/roadmap.md)

## WebView2 Runtime & Installer

WebView2 [Evergreen](./concepts/distribution.md#microsoft-edge-webview2-runtime) distribution model will allow you to target or chain install the WebView2 Runtime onto your user's machine. A preview of the WebView2 Runtime and installer is expected to be available Q3 2020 and GA in Q4 2020.

## Fixed Version

WebView2 [Fixed](./concepts/distribution.md#roadmap) distribution model allows you to package the Microsoft Edge binaries inside your native application. Engineering work is currently under way with a preview anticipated to be ready towards the end of  Q3 2020 and GA Q4 2020.

## General Availability 

### Win32 C/C++

The Win32 C/C++ SDK is expected to GA in Q4 2020, shortly after the WebView2 Runtime and installer GA.

### .NET

The .NET SDK wraps the Win32 C/C++ SDK. The .NET SDK is expected to GA shortly after the Win32 C/C++ GA in Q4 2020.

### WinUI 3.0

You can bring WebView2 to UWP applications through [Win UI 3.0](/uwp/toolkits/winui3/), currently in alpha. Checkout the [Windows UI Library Roadmap](https://github.com/microsoft/microsoft-ui-xaml/blob/master/docs/roadmap.md) to keep up to date.  
