---
title: Self-host by deploying preview channels
description: How to set up self-hosting by deploying using the WebView2 preview channels, which are the Insider preview channels of Microsoft Edge (Canary, Dev, and Beta).
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 02/23/2024
---
# Self-host by deploying preview channels

_Self-hosting_ means deploying a preview WebView2 Runtime with your app.  This allows you and your development team to use your app daily with the preview version of the WebView2 Runtime, to find issues that will affect your particular WebView2 app, before the forthcoming changes reach the Evergreen WebView2 Runtime (Stable).

The self-hosting approach provides real-world usage of your app with the latest preview WebView2 Runtime to catch any issues that may arise.  You should self-host your app in tandem with doing prerelease testing on your app, to provide a structured approach to testing your app with the latest version of the WebView2 Runtime.

| Approach | Technique | Purpose/value |
|---|---|---|
| Prerelease testing | Automated testing on a preview version of WebView2 Runtime with your app. | Test your app with a preview version of the WebView2 Runtime to find issues before WebView2 upcoming changes reach the Stable Evergreen Runtime. |
| Self-hosting | Deploy a preview version of WebView2 Runtime with your app. | Use your app daily with the preview version of WebView2 Runtime, to find issues before WebView2 changes reach the Stable Evergreen Runtime. |

See also:
* [Prerelease testing using preview channels](./prerelease-testing.md)


<!-- ====================================================================== -->
## How to self-host a preview channel of WebView2

We recommend that you self-host using the preview WebView2 Runtime in the Dev channel of the Edge browser. The Dev channel is updated weekly, so it allows you to catch issues early while having sufficient stability for daily use.

The Canary channel is also suitable, but it might be less stable for daily use. The Beta channel allows you to test against the version of the runtime that is about to ship to stable, but you might not be able to catch issues early enough for your application.


Do the following steps:

1. **Set the preview channel for your app**:  
You can [set the preview channel by using ChannelSearchKind](./set-preview-channel.md#switching-the-channel-search-order-recommended), making it such that your WebView2 app uses the least-stable channel on the device. We recommend using either the Registry Key or Group Policy for self-hosting.

1. **Install the preview channel on your team's machines**:  
To install on handful of devices, you can download and install them manually from [Microsoft Edge Insider Channels](https://www.microsoft.com/edge/download/insider). To deploy them to multiple devices, see [how to deploy preview channels](./set-preview-channel.md#how-to-deploy-preview-channels). 

1. **Use your app daily with the preview channel of WebView2, and diagnose potential issues with the WebView2 Runtime:**  
See [Diagnose potential issues with the WebView2 Runtime](#diagnose-potential-issues-with-the-webview2-runtime), below.

Upon finding issues, you can report them to the [Microsoft Edge WebView2 feedback repository](https://github.com/MicrosoftEdge/WebView2Feedback).  Under the `Runtime Channel` section, do indicate that you found the issue on a preview channel so that we can prioritize the fix before the bug ships to stable.


<!-- ====================================================================== -->
## Diagnose potential issues with the WebView2 Runtime

To diagnose or troubleshoot potential preview WebView2 Runtime issues that are revealed by your app, you can do the following


<!-- ------------------------------ -->
#### Confirm that your app is running a preview channel of WebView2

1. Open Task Manager

1. Find your application's process, then find the Edge WebView2 child process

1. Right click on the Edge WebView2 process, and then `Open file location`. The folder will be the version number of the runtime.

<!-- ------------------------------ -->
#### Switch to the Stable WebView2 Runtime channel to see if the issue reproduces

If the issue doesn't reproduce on the Stable channel of the WebView2 Runtime, it's likely that the issue is with the preview channel of WebView2, or how your app interacts with the preview channel of WebView2.

You can easily switch to the stable channel (Evergreen WebView2 Runtime) by [using environmental variables](./set-preview-channel.md?tabs=environment-variable#switching-the-channel-search-order-recommended), because revised environment variables override the registry settings (which are what's set by group policies).  This allows you to easily switch from a preview channel to the stable channel, to see if the issue reproduces.  If you are already using environmental variables, you simply update the values.  Note that if you are setting the environment variable globally, it will change the WebView2 channel for all apps that use WebView2 on the machine. 

If you are using the API, then we recommend building UI in your app that allows your users to change between using stable or preview runtimes.

<!-- ------------------------------ -->
#### Collect diagnostics data

1. Refer to [Gathering Diagnostics and Logs](https://github.com/MicrosoftEdge/WebView2Feedback/tree/main/diagnostics) on how to gather diagnostic data. Crash dumps and ETW traces are the common ones we require.

1. You can then report the issue to the [Microsoft Edge WebView2 feedback repository](https://github.com/MicrosoftEdge/WebView2Feedback), and include the log file.


<!-- ====================================================================== -->
## See also

* [Test upcoming APIs and features](./set-preview-channel.md)
* [Prerelease testing using preview channels](./prerelease-testing.md)
* [WebView2 feedback repo](https://github.com/MicrosoftEdge/WebView2Feedback)
* [Site compatibility-impacting changes coming to Microsoft Edge](../../web-platform/site-impacting-changes.md)
* [Microsoft Edge Insider website](https://www.microsoft.com/edge/download/insider) - download the Canary, Dev, or Beta channel of Microsoft Edge
