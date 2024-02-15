---
title: Self-hosting by deploying preview channels
description: How to set up self-hosting by deploying using the WebView2 preview channels, which are the Insider preview channels of Microsoft Edge (Canary, Dev, and Beta).
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 02/15/2024
---
# Self-hosting by deploying preview channels

_Self-hosting_ means deploying a preview version of the WebView2 Runtime with your app.  This allows you and your development team to use your app daily with the preview version of the WebView2 Runtime, to find issues that will affect your particular WebView2 app, before the forthcoming changes in the WebView2 Runtime preview migrate to the Evergreen WebView2 Runtime.

The self-hosting approach provides real-world usage of your app with the latest prerelease version of the WebView2 Runtime, to catch any issues that may arise.  Do this self-hosting approach in tandem with prerelease testing of your app, which instead provides a structured approach to testing your app with the latest version of the WebView2 Runtime.

| Approach | Technique | Purpose/value |
|---|---|---|
| Prerelease testing | todo | todo |
| Self-hosting | Deploy a preview version of WebView Runtime with your app. | Use your app daily with the preview version of WebView2 Runtime, to find issues before WebView2 changes reach Stable WebView2 Runtime. |

See also:
* [Prerelease testing using preview channels](./prerelease-testing.md)


<!-- ====================================================================== -->
## How to self-host a preview channel of WebView2

We recommend that you start self-hosting by using the Dev channel of the WebView2 Runtime, which is in the Dev Channel of the Microsoft Edge browser.  The Dev channel of the WebView2 Runtime is updated weekly, and it allows you to catch issues early, while having sufficient stability for daily use.

The Canary channel is also suitable, but do note that it might be less stable. The Beta channel is available as well, but it is not recommended as you might not be able to catch issues early enough for your app.

To self-host a preview channel of WebView2:

1. Set the preview channel for your app.  See [Ways to set the preview channel](#ways-to-set-the-preview-channel), below.

1. Install the preview channel on your team's machines.  See [Install preview channels on your team's machines](#install-preview-channels-on-your-teams-machines), below.

1. Use your app daily with the preview channel of WebView2, and diagnose potential issues with the WebView2 Runtime.  See [Diagnose potential issues with the WebView2 Runtime](#diagnose-potential-issues-with-the-webview2-runtime), below.

Upon finding issues, you can report them to the [Microsoft Edge WebView2 feedback repository](https://github.com/MicrosoftEdge/WebView2Feedback).


<!-- ====================================================================== -->
## Ways to set the preview channel

You can set the preview channel by doing either of the following:
* Use `ChannelSearchKind` to set the channel search order.
* Use the browser executable folder.

These options are explained below.


<!-- ====================================================================== -->
## Setting the preview channel by using ChannelSearchKind to set the channel search order

The channel search kind controls the default channel search order.  By default, the WebView2 loader searches for binaries from most-stable to least-stable (Canary), using the first binary that's found:

```
WebView2 Runtime (Stable) -> Edge Beta -> Edge Dev -> Edge Canary
```

To selfhost, you would reverse the channel search order, so that the loader looks for binaries in order from least-stable (Canary) to most-stable:

```
Edge Canary -> Edge Dev -> Edge Beta -> WebView2 Runtime (Stable)
```

The channel search kind can be set per app through a registry key, environment variable, API, or group policy.

The value `1` indicates reversed search order; that is, from least-stable (Edge Canary) to most-stable.


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
## Setting the preview channel by using the browser executable folder

The browser executable folder is the path to the folder that contains the WebView2 Runtime binaries.  This option is useful if you're using a fixed Runtime.  The browser executable folder path can be set per app through a registry key, environment variable, API, or group policy.


##### [Registry key](#tab/registry-key)

```reg
REG ADD <HKLM/HKCU>\Software\Policies\Microsoft\Edge\WebView2\BrowserExecutableFolder /v WebView2APISample.exe /t REG_SZ /d "C:\Users\myname\AppData\Local\Microsoft\Edge SxS\Application\88.0.680.0"
```

* Replace `WebView2APISample.exe` with your own app executable name or the application user model ID.

* Replace the sample path with the path to the desired Microsoft Edge preview channel.


##### [Environment variable](#tab/environment-variable)

* Name: `WEBVIEW2_BROWSER_EXECUTABLE_FOLDER`
* Value: `<path to desired Microsoft Edge preview channel>`

Note that the environment variable will be applied to all apps that use WebView2 on the machine, unlike the registry key, which can be set per-app.


##### [Group policy](#tab/group-policy)

Set `BrowserExecutableFolder`.

* Name: `<app exe name or app user model ID - ex: WebView2APISample.exe>`
* Value: `<path to desired Microsoft Edge preview channel>`

Download the Microsoft Edge policy files, which include the WebView2 policy files, from the Edge Enterprise site,<!-- todo: link --> or use the built-in policy on Intune.<!-- todo: link -->
Do either of the following:

* Download the Microsoft Edge policy files, which include the WebView2 policy files, from [Download and configure Microsoft Edge for Business](https://www.microsoft.com/edge/business/download).  Click any of the three **Download Windows Policy** links.<!-- todo: no "Edge policy" download link there -->

* Use the built-in policy on Intune.<!-- todo: link to more info -->

---

<!-- ====================================================================== -->
## Install preview channels on your team's machines

Insider channels of Microsoft Edge (which include WebView2) are also called preview channels.  To install the preview channels of Microsoft Edge on your team's machines, you can either:
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
#### Option 2: Programmatically deploy preview channels via API

Periodically poll the following pages to get the latest version for each channel:

The Edge Dev and Edge Beta channels contain MSI Links.  The Edge Canary channel has a separate MSI link.

| Channel | Link |
| --- | --- |
| Canary | [https://edgeupdates.microsoft.com/api/products/canary](https://edgeupdates.microsoft.com/api/products/canary)<br>[MSI Link](https://go.microsoft.com/fwlink/?linkid=2084649&Channel=Canary&language=en)|
| Dev | [https://edgeupdates.microsoft.com/api/products/dev](https://edgeupdates.microsoft.com/api/products/dev) |
| Beta | [https://edgeupdates.microsoft.com/api/products/beta](https://edgeupdates.microsoft.com/api/products/beta) |

<!-- todo: link to more info about how to use API to do this -->


<!-- ====================================================================== -->
## Diagnose potential issues with the WebView2 Runtime

To diagnose or troubleshoot potential prerelease WebView2 Runtime issues that are revealed by your app, use the following techniques.


<!-- ------------------------------ -->
#### Confirm that your app is running a preview channel of WebView2

1. Download [WebView2 Utilities](https://github.com/david-risney/WebView2Utilities), a toolkit that helps with debugging Microsoft Edge WebView2 apps.  You can use the [ClickOnce Install](https://david-risney.github.io/WebView2Utilities/install/WebView2Utilities.application) on the page.

1. In the left-hand pane, select the executable of the app.  Make sure the Runtime channel that's indicated is a preview channel (Canary, Dev, or Beta).


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
#### Collect logs (reports)

Using the WebView2 Utilities, you can collect logs for the WebView2 Runtime and the app, as follows:

1. Select the app in the left-hand pane, and then click the **Create Report** button.

1. You can then report the issue to the [Microsoft Edge WebView2 feedback repository](https://github.com/MicrosoftEdge/WebView2Feedback), and include the log file.


<!-- ====================================================================== -->
## See also

* [Test upcoming APIs and features](./set-preview-channel.md)
* [Pre-release testing](https://docs.microsoft.com/microsoft-edge/webview2/how-to/pre-release-testing)
* [WebView2 feedback repo](https://github.com/MicrosoftEdge/WebView2Feedback)
* [Site compatibility-impacting changes coming to Microsoft Edge](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/site-impacting-changes)
* [Microsoft Edge Insider website](https://www.microsoft.com/edge/download/insider) - download the Canary, Dev, or Beta channel of Microsoft Edge
