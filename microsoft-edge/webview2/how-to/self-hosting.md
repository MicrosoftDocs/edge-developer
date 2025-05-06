---
title: Self-host by deploying preview channels
description: How to set up self-hosting by deploying using the WebView2 preview channels, which are the Insider preview channels of Microsoft Edge (Canary, Dev, and Beta).
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 04/22/2024
---
# Self-host by deploying preview channels

_Self-hosting_ means deploying a preview WebView2 Runtime with your app.  This allows you and your development team to use your app daily with the preview version of the WebView2 Runtime, to find issues that will affect your particular WebView2 app, before the forthcoming changes reach the Evergreen WebView2 Runtime (Stable).

The self-hosting approach provides real-world usage of your app with the latest preview WebView2 Runtime to catch any issues that may arise.  You should self-host your app in tandem with doing prerelease testing on your app, to provide a structured approach to testing your app with the latest version of the WebView2 Runtime.

Conduct both automated and manual testing:
* For **automated testing**, do **prerelease testing**, which means testing with a preview version of the WebView2 Runtime.  See [Prerelease testing using preview channels](./prerelease-testing.md).
* For **manual testing**, use **self-hosting**, which means deploying a preview version of the WebView2 Runtime with your app, to use daily by your team.  Covered by the present article.


<!-- ====================================================================== -->
## How to self-host a preview channel of WebView2

We recommend that you self-host using the preview WebView2 Runtime in the Dev channel of the Edge browser.  The Dev channel is updated weekly, so it allows you to catch issues early while having sufficient stability for daily use.

The Canary channel is also suitable, but it might be less stable for daily use.  The Beta channel allows you to test against the version of the runtime that is about to ship to stable, but you might not be able to catch issues early enough for your application.


To self-host a preview channel of WebView2:

1. **Set the preview channel for your app.**

   You can [set the preview channel by using ChannelSearchKind](./set-preview-channel.md#switching-the-channel-search-order-recommended), making it such that your WebView2 app uses the least-stable channel on the device. We recommend using either the Registry Key or Group Policy for self-hosting.

1. **Install the preview channel on your team's machines.**

   To install preview channels on a small number of devices, you can download and install them manually from the page [Become a Microsoft Edge Insider](https://www.microsoft.com/edge/download/insider).  To deploy preview channels to a large number of devices, see [How to deploy preview channels](./set-preview-channel.md#how-to-deploy-preview-channels) in _Test upcoming APIs and features_.

1. **Use your app daily with the preview channel of WebView2, and diagnose potential issues with the WebView2 Runtime.**

   See [Diagnose potential issues with the WebView2 Runtime](#diagnose-potential-issues-with-the-webview2-runtime), below.

Upon finding issues, you can report them via the [Microsoft Edge / WebView2Feedback repo](https://github.com/MicrosoftEdge/WebView2Feedback).  Under the `Runtime Channel` section, be sure to indicate that you found the issue on a preview channel, so that the fix can be prioritized before the bug ships in the Stable release.


<!-- ====================================================================== -->
## Diagnose potential issues with the WebView2 Runtime

To diagnose or troubleshoot potential preview WebView2 Runtime issues that are revealed by your app, do the following:


<!-- ------------------------------ -->
#### Confirm that your app is running a preview channel of WebView2

1. In Windows, open Task Manager.

1. Find your application's process, and then find the **WebView2 Manager** child process.

1. Right-click the **Edge WebView2** process, and then select **Open file location**.  The folder name is the version number of the Runtime.


<!-- ------------------------------ -->
#### Switch to the Stable WebView2 Runtime channel to see if the issue is reproduced

If the issue isn't reproduced on the Stable channel of the WebView2 Runtime, it's likely that the issue is with the preview channel of WebView2, or how your app interacts with the preview channel of WebView2.

You can easily switch to the stable channel (Evergreen WebView2 Runtime) by [using environmental variables](./set-preview-channel.md?tabs=environment-variable#switching-the-channel-search-order-recommended), because revised environment variables override the registry settings (which are what's set by group policies).  This allows you to easily switch from a preview channel to the stable channel, to see if the issue is reproduced.  If you are already using environmental variables, you simply update the values.

If you set the environment variable globally, it changes the WebView2 channel for all apps that use WebView2 on the machine.

If you are using the API, then we recommend building UI in your app that allows your users to change between using the Stable Runtime or a preview Runtime.


<!-- ------------------------------ -->
#### Collect diagnostics data

1. See [Gathering Diagnostics and Logs](https://github.com/MicrosoftEdge/WebView2Feedback/tree/main/diagnostics).  Crash dumps and Event Tracing for Windows (ETW) traces are the common formats that are required.

1. You can then report the issue to the [Microsoft Edge / WebView2Feedback repo](https://github.com/MicrosoftEdge/WebView2Feedback), and include the log file.


<!-- ====================================================================== -->
## See also

* [Test upcoming APIs and features](./set-preview-channel.md)
* [Prerelease testing using preview channels](./prerelease-testing.md)
* [Site compatibility-impacting changes coming to Microsoft Edge](../../web-platform/site-impacting-changes.md)

External:
* [Microsoft Edge release schedule](/deployedge/microsoft-edge-release-schedule)
* [WebView2 feedback repo](https://github.com/MicrosoftEdge/WebView2Feedback)
* [Become a Microsoft Edge Insider](https://www.microsoft.com/edge/download/insider) - download the Canary, Dev, or Beta channel of Microsoft Edge.
