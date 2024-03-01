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

_Prerelease testing_ means testing your WebView2 app by using the preview channels of Microsoft Edge to find issues that will affect your particular WebView2 app, before any changes ship in the Stable Evergreen Runtime.  Prerelease testing helps your app catch bugs in prerelease channels of WebView2, before the WebView2 changes ship in a stable release and degrade the app experience for end users.  In prerelease testing, you validate your app against early builds of WebView2, to ensure that your app will work with the upcoming changes.

To validate your app against early builds of WebView2, do automated testing with the preview channels of Microsoft Edge.  A preview channel contains a WebView2 preview runtime.

The preview (or "insider") channels of Microsoft Edge consist of:
* Edge Canary - releases daily.
* Edge Dev - releases weekly.
* Edge Beta - releases every 4 weeks.

See also: 
* [Overview of the Microsoft Edge channels](/deployedge/microsoft-edge-channels)
* [Become a Microsoft Edge Insider](https://www.microsoft.com/edge/download/insider) - download Edge Canary, Edge Dev, or Edge Beta
* [Self-hosting by deploying preview channels](./self-hosting.md)


<!-- ====================================================================== -->
## Importance of prerelease testing

Evergreen WebView2 is based on the evergreen Chromium platform, which receives monthly major updates.  Regressions in WebView2 apps tend to be application-specific, rather than affecting all WebView2 apps.

To catch app-specific regressions before WebView2 changes ship in Edge Stable, test your particular app against the prerelease channels of Microsoft Edge.  WebView2 is tested in a variety of general scenarios, but it's possible that some of the specific scenarios of your app are not covered.


<!-- ====================================================================== -->
## Start by doing automated testing against Edge Canary

Start with automated testing against the Microsoft Edge **Canary** channel, which ships daily.  This enables you to catch issues as early as possible. The Microsoft Edge **Dev** channel ships weekly, and is also a good option.

Do the following steps:

1. Set the preview channel for your app.  See [Set the preview channel by using ChannelSearchKind](#set-the-preview-channel-by-using-channelsearchkind), below.

1. Deploy the non-stable channels.  See [How to deploy non-stable channels](#how-to-deploy-non-stable-channels), below.

1. Conduct automated testing on your app running against the non-stable channels.  See [How to do automated testing](#how-to-do-automated-testing), below.

1. Compare the results with the baseline.  See [The baseline release of WebView2 for testing](#the-baseline-release-of-webview2-for-testing), below.

Upon finding issues, you can report them via the [WebView2 feedback repo](https://github.com/MicrosoftEdge/WebView2Feedback).


<!-- ====================================================================== -->
## Set the preview channel by using ChannelSearchKind

The channel search kind controls the channel search order.  By default, the WebView2 loader searches for binaries from most-stable to least-stable (Canary), using the first binary that's found:

```
WebView2 Runtime (Stable) ->  Edge Beta -> Edge Dev -> Edge Canary
```

To do prerelease testing, reverse the channel search order, so that the loader looks for binaries in order from least-stable (Canary) to most-stable:

```
Edge Canary -> Edge Dev -> Edge Beta -> WebView2 Runtime (Stable)
```

The channel search kind can be set per-app through an API, a registry key, an environment variable, or a group policy.

The value `1` indicates reversed search order; that is, from least-stable (Edge Canary) to most-stable.


##### [API](#tab/api)

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

Name: `WEBVIEW2_CHANNEL_SEARCH_KIND`  
Value: `1`

Note that the environment variable will be applied to all apps that use WebView2 on the machine, unlike the registry key, which can be set per app.<!-- todo: confirm this line, copied from self-hosting.md -->


##### [Group policy](#tab/group-policy)

Set the `ChannelSearchKind` policy.

* Name: `<app exe name or app user model ID - ex: WebView2APISample.exe>`
* Value: `1`

Do either of the following:

* Download the Microsoft Edge policy files, which include the WebView2 policy files, from [Download and configure Microsoft Edge for Business](https://www.microsoft.com/edge/business/download).  Click any of the three **Download Windows Policy** links.<!-- todo: no "Edge policy" download link there -->

* Use the built-in policy on Intune.<!-- todo: link to more info -->

---


<!-- ====================================================================== -->
## How to deploy non-stable channels

Preview channels of Microsoft Edge (which include WebView2) are also called _insider channels_.  These are the non-stable channels of Microsoft Edge.

To deploy a preview channel of Microsoft Edge, do either of the following:
* Manually install preview channels on test machines.
* Programmatically deploy preview channels via API.

These options are explained below.


<!-- ------------------------------ -->
#### Option 1: Manually install preview channels on test machines

Insider channels can be manually installed through the following links:

| Channel | Link |
| --- | --- |
| Canary | [Download](https://go.microsoft.com/fwlink/?linkid=2084649&Channel=Canary) |
| Dev | [Download](https://go.microsoft.com/fwlink/?linkid=2093291) |
| Beta | [Download](https://go.microsoft.com/fwlink/?linkid=2093376) |

This only needs to be done once per machine.  Prerelease channels are evergreen, so will automatically get updated when newer versions are available.


<!-- ------------------------------ -->
#### Option 2: Programmatically deploy preview channels via API

<!-- todo: which api? -->

In your app's code, periodically poll the following pages to get and deploy the latest version of each preview channel of Microsoft Edge.

| Channel | Link |
| --- | --- |
| Canary | [https://edgeupdates.microsoft.com/api/products/canary](https://edgeupdates.microsoft.com/api/products/canary)<br>[MSI Link](https://go.microsoft.com/fwlink/?linkid=2084649&Channel=Canary) |
| Dev | [https://edgeupdates.microsoft.com/api/products/dev](https://edgeupdates.microsoft.com/api/products/dev) |
| Beta | [https://edgeupdates.microsoft.com/api/products/beta](https://edgeupdates.microsoft.com/api/products/beta) |

The Edge Dev and Edge Beta channels contain MSI Links.  The Edge Canary channel has a separate MSI link.

<!-- todo: See Also link? -->


<!-- ====================================================================== -->
## How to do automated testing

See [Automate and test WebView2 apps with Microsoft Edge WebDriver](/microsoft-edge/webdriver).


<!-- ====================================================================== -->
## The baseline release of WebView2 for testing

The baseline for testing should be the latest stable release of WebView2.  You can use either the Evergreen WebView2 Runtime or a fixed version of the Runtime.  You can download the runtimes from the [Microsoft Edge WebView2](https://developer.microsoft.com/microsoft-edge/webview2/) page at developer.microsoft.com.


<!-- ====================================================================== -->
## See also

* [Self-hosting by deploying preview channels](./self-hosting.md)
* [Test upcoming APIs and features](./set-preview-channel.md)
* [Automate and test WebView2 apps with Microsoft Edge WebDriver](/microsoft-edge/webdriver)
* [WebView2 feedback repo](https://github.com/MicrosoftEdge/WebView2Feedback)
* [Site compatibility-impacting changes coming to Microsoft Edge](/microsoft-edge/web-platform/site-impacting-changes)
* [Overview of the Microsoft Edge channels](/deployedge/microsoft-edge-channels)
* [Become a Microsoft Edge Insider](https://www.microsoft.com/edge/download/insider) - download Edge Canary, Edge Dev, or Edge Beta
