---
title: Self-hosting by deploying preview channels
description: How to set up self-hosting by deploying using the WebView2 preview channels, which are the Insider preview channels of Microsoft Edge (Canary, Dev, and Beta).
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 02/23/2024
---
# Self-hosting by deploying preview channels

_Self-hosting_ means deploying a preview version of the WebView2 Runtime with your app.  This allows you and your development team to use your app daily with the preview version of the WebView2 Runtime, to find issues that will affect your particular WebView2 app, before the forthcoming changes reach the Stable Evergreen WebView2 Runtime.

The self-hosting approach provides real-world usage of your app with the latest prerelease version of the WebView2 Runtime, to catch any issues that may arise.  You should self-host your app in tandem with doing prerelease testing on your app, to provide a structured approach to testing your app with the latest version of the WebView2 Runtime.

| Approach | Technique | Purpose/value |
|---|---|---|
| Prerelease testing | Automated testing on a preview version of WebView2 Runtime with your app. | Test your app with the preview version of in a structured way, to find issues before WebView2 changes reach the Stable Evergreen Runtime. |
| Self-hosting | Deploy a preview version of WebView2 Runtime with your app. | Use your app daily with the preview version of WebView2 Runtime, to find issues before WebView2 changes reach the Stable Evergreen Runtime. |

See also:
* [Prerelease testing using preview channels](./prerelease-testing.md)


<!-- ====================================================================== -->
## How to self-host a preview channel of WebView2

We recommend that you start self-hosting by using the Dev channel of the WebView2 Runtime, which is in the Dev Channel of the Microsoft Edge browser.  The Dev channel of the WebView2 Runtime is updated weekly, and it allows you to catch issues early, while having sufficient stability for daily use.

The Canary channel is also suitable, but do note that it might be less stable. The Beta channel is available as well, but it is not recommended as you might not be able to catch issues early enough for your app.


To self-host a preview channel of WebView2:

1. Set the preview channel for your app.  See [Set the preview channel by using ChannelSearchKind](#set-the-preview-channel-by-using-channelsearchkind), below.

1. Install the preview channel on your team's machines.  See [Install preview channels on your team's machines](#install-preview-channels-on-your-teams-machines), below.

1. Use your app daily with the preview channel of WebView2, and diagnose potential issues with the WebView2 Runtime.  See [Diagnose potential issues with the WebView2 Runtime](#diagnose-potential-issues-with-the-webview2-runtime), below.

Upon finding issues, you can report them to the [Microsoft Edge WebView2 feedback repository](https://github.com/MicrosoftEdge/WebView2Feedback).


<!-- ====================================================================== -->
## Set the preview channel by using ChannelSearchKind

The channel search kind controls the default channel search order.  By default, the WebView2 loader searches for binaries from most-stable to least-stable (Canary), using the first binary that's found:

```
WebView2 Runtime (Stable) -> Edge Beta -> Edge Dev -> Edge Canary
```

To selfhost, you would reverse the channel search order, so that the loader looks for binaries in order from least-stable (Canary) to most-stable:

```
Edge Canary -> Edge Dev -> Edge Beta -> WebView2 Runtime (Stable)
```

The channel search kind can be set per app through an API,<!--todo: confirm, b/c there was no API section below--> a registry key, an environment variable, or a group policy.

The value `1` indicates reversed search order; that is, from least-stable (Edge Canary) to most-stable.


##### [API](#tab/api)
<!-- todo: keep or delete this tab/section? -->

By default, the `CoreWebView2EnvironmentOptions.ChannelSearchKind` property is `CoreWebView2ChannelSearchKind.MostStable` (an enum value).  Instead, reverse the search order by setting the `CoreWebView2EnvironmentOptions.ChannelSearchKind` property to `CoreWebView2ChannelSearchKind.LeastStable`.

.NET:
* [CoreWebView2EnvironmentOptions.ChannelSearchKind Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.channelsearchkind)
* [CoreWebView2ChannelSearchKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2channelsearchkind)

WinRT:
* [CoreWebView2EnvironmentOptions.ChannelSearchKind Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions#channelsearchkind)
* [CoreWebView2ChannelSearchKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2channelsearchkind)

Win32:
* [ICoreWebView2ExperimentalEnvironmentOptions::get_ChannelSearchKind](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironmentoptions#get_channelsearchkind)
* [ICoreWebView2ExperimentalEnvironmentOptions::put_ChannelSearchKind](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironmentoptions#put_channelsearchkind)
* [COREWEBVIEW2_CHANNEL_SEARCH_KIND enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl#corewebview2_channel_search_kind)


##### [Registry key](#tab/registry-key)

```reg
REG ADD <HKLM/HKCU>\Software\Policies\Microsoft\Edge\WebView2\ChannelSearchKind /v WebView2APISample.exe /t REG_DWORD /d 1
```

Replace `WebView2APISample.exe` with your own app executable name or the application user model ID.


##### [Environment variable](#tab/environment-variable)

* Name: `WEBVIEW2_CHANNEL_SEARCH_KIND`
* Value: `1`

Note that the environment variable will be applied to all apps that use WebView2 on the machine, unlike the registry key, which can be set per app.


##### [Group policy](#tab/group-policy)

Set the `ChannelSearchKind` policy.

* Name: `<app exe name or app user model ID - ex: WebView2APISample.exe>`
* Value: `1`

Do either of the following:

* Download the Microsoft Edge policy files, which include the WebView2 policy files, from [Download and configure Microsoft Edge for Business](https://www.microsoft.com/edge/business/download).  Click any of the three **Download Windows Policy** links.<!-- todo: no "Edge policy" download link there -->

* Use the built-in policy on Intune.<!-- todo: link to more info -->

---


<!-- ====================================================================== -->
## Install preview channels on your team's machines

Preview channels of Microsoft Edge (which include WebView2) are also called _insider channels_.  These are the non-stable channels of Microsoft Edge.

To install the preview channels of Microsoft Edge on your team's machines, do either of the following:
* Manually install preview channels on machines.
* Programmatically deploy preview channels via API.

These options are explained below.


<!-- ------------------------------ -->
#### Option 1: Manually install preview channels on machines

Insider channels can be manually installed through the following links:

| Channel | Link |
| --- | --- |
| Canary | [Download](https://go.microsoft.com/fwlink/?linkid=2084649&Channel=Canary&language=en) |
| Dev | [Download](https://go.microsoft.com/fwlink/?linkid=2093291) |
| Beta | [Download](https://go.microsoft.com/fwlink/?linkid=2093376) |

This only needs to be done once per machine.  Prerelease channels are evergreen, so they will automatically get updated when newer versions are available.


<!-- ------------------------------ -->
#### Option 2: Programmatically deploy preview channels via API endpoints

In your app's code, periodically poll the following API endpoints to get and deploy the latest version of each preview channel of Microsoft Edge:

| Channel | Link |
| --- | --- |
| Canary | [https://edgeupdates.microsoft.com/api/products/canary](https://edgeupdates.microsoft.com/api/products/canary)<br>[MSI Link](https://go.microsoft.com/fwlink/?linkid=2084649&Channel=Canary&language=en)|
| Dev | [https://edgeupdates.microsoft.com/api/products/dev](https://edgeupdates.microsoft.com/api/products/dev) |
| Beta | [https://edgeupdates.microsoft.com/api/products/beta](https://edgeupdates.microsoft.com/api/products/beta) |

The Edge Dev and Edge Beta channels contain MSI Links.  The Edge Canary channel has a separate MSI link.

<!-- todo: link to more info about how to use API to do this -->


<!-- ====================================================================== -->
## Diagnose potential issues with the WebView2 Runtime

To diagnose or troubleshoot potential prerelease WebView2 Runtime issues that are revealed by your app, use the following techniques.


<!-- ------------------------------ -->
#### Confirm that your app is running a preview channel of WebView2

1. Open Task Manager

1. Find your application's process, then find the Edge WebView2 child process

1. Right click on the Edge WebView2 process, and then `Open file location`. The folder will be version number of the runtime.

<!-- ------------------------------ -->
#### Switch to the Stable WebView2 Runtime channel to see if the issue reproduces

If the issue doesn't reproduce on the Stable channel of the WebView2 Runtime, it's likely that the issue is with the preview channel of WebView2, or how your app interacts with the preview channel of WebView2.

You can easily switch to the stable channel (Stable WebView2 Runtime) by using environmental variables, because revised environment variables override the registry settings (which are set by group policies).  This allows you to easily switch from a preview channel to the stable channel, to see if the issue reproduces.  If you are already using environmental variables, you simply update the values.  Note that changing the environment variables changes the WebView2 channel for all apps that use WebView2 on the machine.

For `ChannelSearchKind` options, set the following:
* Name: `WEBVIEW2_CHANNEL_SEARCH_KIND`
* Value: `0`

For `BrowserExecutableFolder` options, set the following:
* Name: `WEBVIEW2_BROWSER_EXECUTABLE_FOLDER`
* Value: `<path to stable WebView2 Runtime>`


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
