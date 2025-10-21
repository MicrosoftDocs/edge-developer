---
title: Prerelease testing using preview channels
description: How to test your WebView2 app by using the preview channels of Microsoft Edge (Edge Canary, Edge Dev, or Edge Beta) to find issues that will affect your particular WebView2 app, before WebView2 changes reach  the Evergreen WebView2 Runtime.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 04/22/2024
---
# Prerelease testing using preview channels

_Prerelease testing_ means testing your WebView2 app by using the preview channels of Microsoft Edge to find issues that will affect your particular WebView2 app, before any changes ship in the Stable Evergreen WebView2 Runtime.  This helps catch any bugs before they degrade the app experience for end users.

Conduct both automated and manual testing:
* For **automated testing**, do **prerelease testing**, which means testing with a preview version of the WebView2 Runtime.  Covered by the present article.
* For **manual testing**, use **self-hosting**, which means deploying a preview version of the WebView2 Runtime with your app, to use daily by your team.  See [Self-host by deploying preview channels](./self-hosting.md).


<!-- ====================================================================== -->
## Importance of prerelease testing

Evergreen WebView2 is based on the evergreen Chromium platform, which receives monthly major updates.  Regressions in WebView2 apps tend to be application-specific, rather than affecting all WebView2 apps.  WebView2 is tested in a variety of general scenarios, but it's possible that some of the specific scenarios of your app are not covered.

To catch app-specific regressions before WebView2 changes ship in Edge Stable, test your WebView2 app against the preview WebView2 Runtime that's shipped with the preview channels of Microsoft Edge (Canary, Dev, and Beta).

To download a preview channel of Microsoft Edge (Beta, Dev, or Canary), go to [Become a Microsoft Edge Insider](https://www.microsoft.com/edge/download/insider).


<!-- ====================================================================== -->
## Start by doing automated testing against Edge Canary

Start with automated testing against the Microsoft Edge **Canary** channel, which ships daily.  This enables you to catch issues as early as possible.  The Microsoft Edge **Dev** channel ships weekly, and is also a good option.

Start with automated testing against the preview WebView2 Runtime in the Microsoft Edge **Canary** channel, which ships daily.  This enables you to catch issues as early as possible.  The Microsoft Edge **Dev** channel ships weekly, and is also a good option.

To do automated testing:

1. **Set the preview channel for your app.**

   You can set the preview channel by using `ChannelSearchKind`, so that your WebView2 app uses the least-stable channel (Canary, then Dev).  To do this, see [Switching the channel search order (recommended)](./set-preview-channel.md#switching-the-channel-search-order-recommended) in _Test upcoming APIs and features_.

1. **Install or deploy the preview channel.**

   * If you choose to install preview channels manually, install them from the page [Become a Microsoft Edge Insider](https://www.microsoft.com/edge/download/insider).
   * If you instead choose to deploy preview channels to devices, see [How to deploy preview channels](./set-preview-channel.md#how-to-deploy-preview-channels) in _Test upcoming APIs and features_.

1. **Conduct automated testing on your app running against the preview channels.**

   You can use WebDriver to conduct automated testing of your WebView2 app.  See [Automate and test WebView2 apps with Microsoft Edge WebDriver](./webdriver.md).

1. **Compare the results with the baseline.**

   The baseline for testing should be the latest stable release of WebView2, which can be either the Evergreen WebView2 runtime, or the latest fixed-version Runtime.  You can download the Runtime from the [Microsoft Edge WebView2](https://developer.microsoft.com/microsoft-edge/webview2/) page.

Upon finding issues, you can report them via the [Microsoft Edge / WebView2Feedback repo](https://github.com/MicrosoftEdge/WebView2Feedback).  Under the `Runtime Channel` section, be sure to indicate that you found the issue on a preview channel, so that the fix can be prioritized before the bug ships in the Stable release.


<!-- ====================================================================== -->
## See also

* [Self-host by deploying preview channels](./self-hosting.md)
* [Test upcoming APIs and features](./set-preview-channel.md)
* [Automate and test WebView2 apps with Microsoft Edge WebDriver](./webdriver.md)
* [Site compatibility-impacting changes coming to Microsoft Edge](../../web-platform/site-impacting-changes.md)
* [WebView2 feedback repo](https://github.com/MicrosoftEdge/WebView2Feedback)
* [Microsoft Edge release schedule](/deployedge/microsoft-edge-release-schedule)
* [Overview of the Microsoft Edge channels](/deployedge/microsoft-edge-channels)
* [Become a Microsoft Edge Insider](https://www.microsoft.com/edge/download/insider) - download a preview channel of Microsoft Edge (Beta, Dev, or Canary).
