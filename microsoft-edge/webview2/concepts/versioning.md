---
description: Versioning Models used for Microsoft Edge WebView2
title: Versioning of Microsoft Edge WebView2
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/19/2020
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, wpf apps, wpf, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# Understanding browser versions and WebView2  

WebView2 is dependent upon Microsoft Edge to function.  Each WebView2 SDK has a minimum browser version required to be installed.  This browser version is specified in our [Release Notes](../releasenotes.md).  You may see the minimum version reflected in the patch version of the SDK packaged version string \(for example, `SDK package version 0.9.488` indicates a minimum browser build number of 488\).  

To utilize WebView2 in your app, the minimum version of [Microsoft Edge (Chromium)](/microsoft-edge/index) supported by the WebView2 SDK must be installed on your machine.  To access the latest releases of the browser please see [Browser Channels](https://docs.microsoft.com/deployedge/microsoft-edge-channels).  

> [!NOTE]
> WebView2 is currently in Preview.  The Microsoft Edge WebViews team strives to ensure backward compatibility between browser versions and SDKs, it is not guaranteed, however some newer versions of the browser may not support older SDK versions.  If there are breaking changes between browser versions and SDK, the Microsoft Edge WebViews team indicates the changes in the [release notes](../releasenotes.md)  

In the future, the Microsoft Edge WebViews plans to change the distribution model.  The Microsoft Edge WebViews plans to removed the direct dependency on Microsoft Edge browser from WebView2 in a future release.  To learn more, see [WebView2 Runtime]() in the [Distribution]() section.  

## Experimental APIs  

While WebViews2 is a preview, the APIs in the SDK represent the expected APIs at GA.  The Microsoft Edge WebViews team included [experimental APIs](../reference/win32/0-9-488-reference-webview2.md#experimental) in the SDK.  The Microsoft Edge WebViews team is evaluating the functionality of the experimental APIs and requests your feedback on each API before including it as a long term feature.  To send feedback, please use the [WebView feedback repo](https://aka.ms/webviewfeedback).  

### Post GA plans  

After WebViews2 reaches a stable general available state and release the 1.0.0 SDK, The Microsoft Edge WebViews team moves all experimental APIs to a pre-release package.  The pre-release package continues to allow for feedback and insight into the latest features, while the stable release version maintains backward compatibility.  

<!--links -->
