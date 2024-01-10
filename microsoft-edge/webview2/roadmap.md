---
title: WebView2 Roadmap
description: Learn about what's coming next for WebView2.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 01/07/2021
---
# WebView2 Roadmap

The Microsoft Edge WebView2 control allows you to embed web technologies in your native applications.  This article outlines the prospective roadmap for WebView2.

WebView2 is under active development and the roadmap continues to evolve based on market changes and customer feedback.  The plans outlined here aren't exhaustive and are subject to change.

If you have concerns or questions about the Roadmap, provide your feedback in the [feedback repo](https://github.com/MicrosoftEdge/WebViewFeedback).

The WebView2 team is planning the following major efforts for future updates:

* macOS Preview
* Linux Preview


<!-- ====================================================================== -->
## WebView2 Runtime and Installer

Evergreen distribution mode allows you to target or chain-install the WebView2 Runtime onto your users' machines.  The Evergreen WebView2 Runtime and installer has reached General Availability (GA).  For more information, see [Distribute your app and the WebView2 Runtime](./concepts/distribution.md).


<!-- ====================================================================== -->
## Fixed version

Fixed version distribution mode allows you to package the Microsoft Edge binaries <!--(a specific version of the WebView2 Runtime)--> inside your native application.  The Fixed Version has reached General Availability (GA).  For more information, see [Distribute your app and the WebView2 Runtime](./concepts/distribution.md).


<!-- ====================================================================== -->
## General Availability

The following technologies have reached General Availability (GA).


<!-- ------------------------------ -->
#### Win32 C/C++

The Win32 C/C++ SDK has reached GA.


<!-- ------------------------------ -->
#### .NET

The .NET SDK has reached GA.


<!-- ------------------------------ -->
#### Windows UI Library 2

You can access WebView2 controls in your UWP applications using [Windows UI Library 2 (WinUI 2)](./get-started/winui2.md). This has reached GA.


<!-- ------------------------------ -->
#### Windows UI Library 3

You can access WebView2 controls in your applications using [Windows UI Library 3 (WinUI 3)](/uwp/toolkits/winui3/index) with the Windows App SDK.  This has reached GA.

###### XAML limitation

XAML Island support requires additional work and may be considered for future releases.


<!-- ------------------------------ -->
#### Xbox

WebView2 is now available on Xbox devices. 


<!-- ====================================================================== -->
## Preview Availability

The following technologies are now available in a Preview release.


<!-- ------------------------------ -->
#### HoloLens 2

Starting with the Windows 11 update for HoloLens 2, a WebView2 Preview is now available on HoloLens 2 devices. 
