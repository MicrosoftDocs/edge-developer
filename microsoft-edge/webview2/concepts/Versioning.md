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

# Browser version needed for WebView2

WebView2 is dependent on Microsoft Edge to function. Each WebView2 SDK has a minimum browser version required to be installed. This browser version is specified in our [Release Notes](../releasenotes.md). You can also see this minimum version reflected in the patch version of the SDK packaged version string. e.g. SDK package version 0.9.488 indicates a minimum browser build number of 488.

To utilize WebView2 in your app, the minimum version of [Microsoft Edge (chromium)]() supported by the WebView2 SDK must be installed on your machine. To access the latest releases of the browser please see [Browser Channels](https://docs.microsoft.com/deployedge/microsoft-edge-channels).

> [!NOTE]
> WebView2 is currently in Preview. While we strive to ensure backward compatibility between browser versions and SDKs, this is not guaranteed, some newer versions of the browser may not support older SDK versions. If there are breaking changes between browser versions and SDK, we will indicate that in the [release notes](../releasenotes.md) 

In the future, we do plan to change the distribution model. We intend WebView2 to no longer have a direct dependency on the Edge browser install. Read about [WebView2 Runtime]() in the [Distribution]() section to learn more.

# Experimental APIs

While we are in preview the APIs in the SDK represent our expected APIs at GA. We also included in the SDK [Experimental APIs](../reference/win32/0-9-430-reference-webview2.md#experimental). These APIs represent functionality we are evaluating and would like to here feedback on before intending to included them as long term features. To leave feedback please engage with us on our [feedback repo](https://aka.ms/webviewfeedback).

## Post GA plans

After we reach a stable general available state and release our 1.0.0 SDK, we will move all experimental APIs to a pre-release package. This pre-release package will continue to allow for feedback and insight into the latest features, while the stable release version maintains backward compatibility. 