---
description: Learn about what's coming next for WebView2
title: Roadmap for Microsoft Edge WebView 2
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/19/2020
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# Microsoft Edge WebView2 roadmap  

##### Last Updated: May 2020  

The WebView2 control allows developers to embed web technologies in their native applications.  The following page outlines the prospective roadmap for WebView2.  

> [!NOTE]
> WebView2 is under active development and the roadmap continues to evolve based on market changes and customer feedback, so please note that the plans outlined here are not exhaustive and are subject to change.  

If you have concerns or questions about the Roadmap, please leave feedback in the [feedback repo][GithubMicrosoftedgeWebviewfeedbackMain].  

The WebView2 team is planning the following major efforts for future updates.  

:::row:::
   :::column span="1":::
      WebView2 Runtime Installer  
   :::column-end:::
   :::column span="2":::
      *   Q4 2020
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Fixed Version  
   :::column-end:::
   :::column span="2":::
      *   Q4 2020  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      General Availability  
   :::column-end:::
   :::column span="2":::
      *   Win32 C/C++ \(Q4 2020\)  
      *   .NET \(Q4 2020\)  
      *   [WinUI 3.0][GithubMicrosoftUiXamlRoadmap]  
   :::column-end:::
:::row-end:::  

## WebView2 Runtime and Installer  

[Evergreen distribution model][ConceptDistributionEvergreenModel] allows you to target or chain install the WebView2 Runtime onto your user's machine.  A preview of the WebView2 Runtime and installer is expected to be available Q3 2020 and GA in Q4 2020.  

## Fixed version  

[Fixed version distribution model][ConceptsDistributionFixedVersionModel] allows you to package the Microsoft Edge binaries inside your native application.  Engineering work is currently under way with a preview anticipated to be ready towards the end of Q3 2020 and GA Q4 2020.  

## General availability  

### Win32 C/C++  

The Win32 C/C++ SDK is expected to GA in Q4 2020, shortly after the WebView2 Runtime and installer GA.  

### .NET  

The .NET SDK wraps the Win32 C/C++ SDK.  The .NET SDK is expected to GA shortly after the Win32 C/C++ GA in Q4 2020.  

### WinUI 3.0  

You are able to access WebView2 in your UWP applications using [Win UI 3.0][UwpToolkitsWinui3Index], currently in alpha.  For more information about keeping up to date, see [Windows UI Library Roadmap][GithubMicrosoftUiXamlRoadmap].  

<!-- links -->  

[ConceptDistributionEvergreenModel]: ./concepts/distribution.md#evergreen-distribution-model "Evergreen distribution model - Distribution of applications using WebView2 | Microsoft Docs"  
[ConceptsDistributionFixedVersionModel]: ./concepts/distribution.md#fixed-version-distribution-model "Fixed version distribution model - Distribution of applications using WebView2 | Microsoft Docs"  

[UwpToolkitsWinui3Index]: /uwp/toolkits/winui3/index "Windows UI Library 3.0 Preview 1 (May 2020) | Microsoft Docs"  

[GithubMicrosoftedgeWebviewfeedbackMain]: https://github.com/MicrosoftEdge/WebViewFeedback "WebView Feedback - MicrosoftEdge/WebViewFeedback | GitHub"  

[GithubMicrosoftUiXamlRoadmap]: https://github.com/microsoft/microsoft-ui-xaml/blob/master/docs/roadmap.md "Windows UI Library Roadmap - microsoft/microsoft-ui-xaml | GitHub"  
