---
title: Prerelease testing using preview channels
description: How to test your WebView2 app by using the preview channels of Microsoft Edge (Edge Canary, Edge Dev, or Edge Beta) to find issues that will affect your particular WebView2 app, before WebView2 changes reach  the Evergreen WebView2 Runtime.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 03/01/2024
---
# Prerelease testing using preview channels

_Prerelease testing_ means testing your WebView2 app by using the preview channels of Microsoft Edge to find issues that will affect your particular WebView2 app, before any changes ship in the Stable Evergreen WebView2 Runtime. This helps catch any bugs before they degrade app experience for end users.  

See also: 
* [Overview of the Microsoft Edge channels](/deployedge/microsoft-edge-channels)
* [Become a Microsoft Edge Insider](https://www.microsoft.com/edge/download/insider) - download Edge Canary, Edge Dev, or Edge Beta
* [Self-host by deploying preview channels](./self-hosting.md)


<!-- ====================================================================== -->
## Importance of prerelease testing

Evergreen WebView2 is based on the evergreen Chromium platform, which receives monthly major updates.  Regressions in WebView2 apps tend to be application-specific, rather than affecting all WebView2 apps.  WebView2 is tested in a variety of general scenarios, but it's possible that some of the specific scenarios of your app are not covered.

To catch app-specific regressions before WebView2 changes ship in Edge Stable, test your WebView2 app against the preview runtime that shipped with the preview channels of Microsoft Edge (Edge Canary, Edge Dev, or Edge Beta).


<!-- ====================================================================== -->
## Start by doing automated testing against Edge Canary

Start with automated testing against the Microsoft Edge **Canary** channel, which ships daily.  This enables you to catch issues as early as possible. The Microsoft Edge **Dev** channel ships weekly, and is also a good option.

Do the following steps:

1. **Set the preview channel for your app**:  
You can [set the preview channel by using ChannelSearchKind](./set-preview-channel.md#switching-the-channel-search-order-recommended), making it such that your WebView2 app uses the least-stable channel (Canary / Dev).

1. **Install or deploy the preview channel**:  
Install them manually from [Microsoft Edge Insider Channels](https://www.microsoft.com/edge/download/insider). To deploy them to devices see [how to deploy preview channels](./set-preview-channel.md#how-to-deploy-preview-channels). 

1. **Conduct automated testing on your app running against the preview channels**:   
You can do that using WebDriver, following instructions here [Automate and test WebView2 apps with Microsoft Edge WebDriver](./webdriver.md).

1. **Compare the results with the baseline**:  
The baseline for testing should be the latest stable release of WebView2, which can be either the Evergreen WebView2 runtime, or the latest fixed runtime. You can download them from [Microsoft Edge WebView2 page](https://developer.microsoft.com/microsoft-edge/webview2/).

Upon finding issues, you can report them via the [WebView2 feedback repo](https://github.com/MicrosoftEdge/WebView2Feedback). Under the `Runtime Channel` section, do indicate that you found the issue on a preview channel so that we can prioritize the fix before the bug ships to stable.


<!-- ====================================================================== -->
## See also

* [Self-host by deploying preview channels](./self-hosting.md)
* [Test upcoming APIs and features](./set-preview-channel.md)
* [Automate and test WebView2 apps with Microsoft Edge WebDriver](/microsoft-edge/webdriver)
* [WebView2 feedback repo](https://github.com/MicrosoftEdge/WebView2Feedback)
* [Site compatibility-impacting changes coming to Microsoft Edge](/microsoft-edge/web-platform/site-impacting-changes)
* [Overview of the Microsoft Edge channels](/deployedge/microsoft-edge-channels)
* [Become a Microsoft Edge Insider](https://www.microsoft.com/edge/download/insider) - download Edge Canary, Edge Dev, or Edge Beta
