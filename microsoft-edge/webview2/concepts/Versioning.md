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

# Versioning of WebView2

Each WebView2 SDK has a minimum browser version required to be installed. This browser version is specified in our [Release Notes]() and is the version of the Canary channel on the day the SDK is launched. 

To develop with WebView2, the minimum version of [Microsoft Edge (chromium)]() supported by the WebView2 SDK must be installed on your machine. Currently, we have the same requirement for user's machines. 

In the future, we do plan to change this requirement. Read about [WebView2 Runtime]() in the [Distribution]() section to learn more.

## Evergreen vs. Fixed (Bring-Your-Own)
Currently, we support only an evergreen distribution model – instead of packaging a browser in the app bundle, apps use the evergreen browser installed on users’ machines. The evergreen browser updates itself on a regular cadence, therefore apps targeting the evergreen WebView2 automatically get the latest feature and security updates for hosted web content. The WebView2 SDK is updated separately as new APIs become available. This is the recommended model for most developers. 

In the future, there will be a second fixed or bring-your-own (BYO) option that allows developers to bundle a redistributable version of the browser with their apps. BYO brings a locked platform, but requires a larger disk footprint for the packaged browser and developers will have to take on the responsibility of servicing and updating the control themselves. This version will be tied to a specific version of the WebView2 SDK.

## Evergreen Versioning

Unlike the Fixed (Bring Your Own) version, the evergreen model is being updated on a regular cadence.

### Browser Channels

Microsoft Edge (Chromium) has four browser [channels](https://www.microsoftedgeinsider.com/download/): Canary, Dev, Beta, and Stable. The Canary version updates daily, the Dev channel updates weekly, and the Beta and Stable channels update every 6 weeks. 

The WebView2 SDK is tied to a version of Microsoft Edge and as that version moves through the different channels, so will the WebView2 SDK. The first week the WebView2 SDK is released, it will only work with the Canary channel. After the first week, the WebView2 SDK works with the Dev Channel. After 6 weeks, the WebView2 SDK aligns with the Beta and Stable channels and a new version of the WebView2 SDK will be released.

## Pre-Release vs. Release Package
To utilize WebView2 within your app you'll need to install and reference the WebView2 SDK in your application. Our NuGet releases will contain both a release and pre-release version. The release version contains the public APIs we currently intend to release to general availability.

The pre-release version will contain additional experimental APIs. These are APIs and functionality we are evaluating and would like feedback on before promoting them to the release version.

In the future, once WebView2 is GA'd, the latest version of the WebView2 SDK will be in the pre-release package. After 6 weeks, when the SDK's minimum browser version requirement aligns with the version of the Stable channel of the Edge Browser, it will move from the pre-release to the release package. Simultaneously, a new WebView2 SDK will be released in the pre-release package.

## Feedback

If something is unclear, please let us know! Visit our [feedback repo](https://aka.ms/webviewfeedback) to ask us a question, submit feature requests, or bug reports. 