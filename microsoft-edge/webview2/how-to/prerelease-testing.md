---
title: Prerelease testing
description: Prerelease testing.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 02/09/2024
---
# Prerelease testing

Prerelease testing helps apps catch bugs in prerelease channels of WebView2, before they ship in a stable release and degrade the app experience for end users. This document provide guiding principles and tools to help developers get started.

<!-- ====================================================================== -->
#### What is prerelease testing?
Prerelease testing means validating your app against early builds of WebView2 to ensure that your app works with upcoming changes. This can be accomplished through automated testing with Edge preview channels, which contain the WebView2 preview runtime bits. The stable runtime is the Evergreen WebView2 Runtime, while the preview runtime is the runtime that ships with the Edge preview channels. The [Edge preview channels](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-channels) consist of Canary (daily), Dev (weekly), and Beta (every 4 weeks).

#### Why is prerelease testing important?
Evergreen WebView2 is based on the evergreen Chromium platform that receives monthly major updates. Testing against prerelease channels is the de facto way for web developers to validate their apps against incoming browser updates for the past decade and more. A common discovery from investigations that we have conducted in the past year, is that regression tends to be application specific. WebView2 is tested in a variety of scenarios, but it is impossible to cover all the scenarios that an app might encounter. This means that the only way to catch regressions that affect specific apps before it ships to stable is to test against prerelease channels.

Some examples of the issues that could have been caught prior to stable prerelease testing include:
- [Unable to open https://www.facebook.com, once load will directly ProcessFailed](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4281)
- [MSEdgeWebView2 crashes when trying to preview a file through Monaco in file explorer using PowerToys](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4228)
- [CoreWebView2PrintSettings.ScaleFactor is not working](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4082)

#### How to get started with prerelease testing?

We highly recommend that you start with automated testing against the Edge Canary channel, which ships daily, to catch issues as early as possible. Edge Dev that ships weekly is also a good option.

You would need to set up the following:
1. [Set the preview channel for your app](#how-to-set-preview-channel)
1. [Deploy the non-stable channels](#how-to-deploy-non-stable-channels)
1. [Conduct automated testing on your app running against the non-stable channels](#how-to-use-conduct-automated-testing)
1. [Compare the results with the baseline](#what-to-use-as-a-baseline)

Upon finding issues, you can report them to the [WebView2 feedback repo](https://github.com/MicrosoftEdge/WebView2Feedback).

##### Tooling and Guidance

###### How to set preview channel

**Option 1: Channel Search Kind**

The channel search kind controls the default channel search order. By default, the WebView2 loader searches for binaries from most to least stable, using the first one found:

```
WebView2 Runtime (Stable) ->  Edge Beta -> Edge Dev -> Edge Canary
```

To perform prerelease testing, you can reverse the channel search order so that the loader looks for the least stable build first:

```
Edge Canary -> Edge Dev -> Edge Beta -> WebView2 Runtime (Stable)
```

The channel search kind can be set per app through the registry key, environment variable, API or group policy.

#### [Registry Key](#tab/registry-key)

```reg
REG ADD <HKLM/HKCU>\Software\Policies\Microsoft\Edge\WebView2\ChannelSearchKind /v WebView2APISample.exe /t REG_DWORD /d 1
```

Replace `WebView2APISample.exe` with your own app executable name or the application user model ID. The value 1 indicates reversed search order.

#### [Environment variable](#tab/environment-variable)

Name: `WEBVIEW2_CHANNEL_SEARCH_KIND`  
Value: `1`

The value `1` indicates reversed search order.

#### [API (experimental)](#tab/api)

By default, the [ChannelSearchKind](https://learn.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironmentoptions?view=webview2-1.0.2357-prerelease#get_channelsearchkind)  on `ICoreWebView2EnvironmentOptions` is `COREWEBVIEW2_CHANNEL_SEARCH_KIND_MOST_STABLE`. Set this property to `COREWEBVIEW2_CHANNEL_SEARCH_KIND_LEAST_STABLE` to reverse the search order.

#### [Group Policy](#tab/group-policy)

Set the `ChannelSearchKind` policy.

Name: `<app exe name or app user model ID - ex: WebView2APISample.exe>`  
Value: `1`

Download the Edge policy files, which include the WebView2 policy files, from the [Edge Enterprise](https://www.microsoft.com/en-us/edge/business/download?form=MA13FJ) site , or use the built-in policy on Intune.

---

**Option 2: Browser Executable Folder**

The browser executable folder is the path to the folder that contains the WebView2 Runtime binaries. This option is useful if you are using a fixed Runtime. It can be set per app through a registry key, environment variable, API, or group policy.

#### [Registry Key](#tab/registry-key)

```reg
REG ADD <HKLM/HKCU>\Software\Policies\Microsoft\Edge\WebView2\BrowserExecutableFolder /v WebView2APISample.exe /t REG_SZ /d "C:\Users\myname\AppData\Local\Microsoft\Edge SxS\Application\88.0.680.0"
```

Replace `WebView2APISample.exe` with your own app executable name or the application user model ID. Replace the sample path with the path to the desired Microsoft Edge preview channel.

#### [Environment variable](#tab/environment-variable)

Name: `WEBVIEW2_BROWSER_EXECUTABLE_FOLDER`  
Value: `<path to desired Microsoft Edge preview channel>`

#### [API](#tab/api)

Pass the path to the browser executable folder during environment creation with `CreateCoreWebView2EnvironmentWithOptions`.

#### [Group Policy](#tab/group-policy)

Set `BrowserExecutableFolder`

Name: `<app exe name or app user model ID - ex: WebView2APISample.exe>`
Value: `<path to desired Microsoft Edge preview channel>`

Download the Edge policy files, which include the WebView2 policy files, from the Edge Enterprise site , or use the built-in policy on Intune.

---

###### How to deploy non-stable channels

Insider channels

**Option 1: Manual install on test machines**

Insider channels can be manually installed through the following links:

| Channel | Link |
| --- | --- |
| Canary | [Download](https://go.microsoft.com/fwlink/?linkid=2084649&Channel=Canary&language=en) |
| Dev | [Download](https://go.microsoft.com/fwlink/?linkid=2093291) |
| Beta | [Download](https://go.microsoft.com/fwlink/?linkid=2093376) |

This only needs to be done once per machine. Prerelease channels are evergreen so will automatically get updated when newer versions are available.

**Option 2: Programmatic depolyment throguh API**

Periodically poll the following pages to get the latest version for each channel:

Note: Dev & Beta channels contain MSI Links, while Canary has a separate link

| Channel | Link |
| --- | --- |
| Canary | [https://edgeupdates.microsoft.com/api/products/canary](https://edgeupdates.microsoft.com/api/products/canary)<br>[MSI Link](https://go.microsoft.com/fwlink/?linkid=2084649&Channel=Canary&language=en)|
| Dev | [https://edgeupdates.microsoft.com/api/products/dev](https://edgeupdates.microsoft.com/api/products/dev) |
| Beta | [https://edgeupdates.microsoft.com/api/products/beta](https://edgeupdates.microsoft.com/api/products/beta) |


###### How to use conduct automated testing
See [Automate and test WebView2 apps with Microsoft Edge WebDriver](https://learn.microsoft.com/en-us/microsoft-edge/webdriver) for more information.

###### What to use as a baseline?
The baseline for testing should be the latest stable release of WebView2. You can use either the Evergreen WebView2 Runtime or a fixed version of the Runtime. You can download the runtimes from [here](https://developer.microsoft.com/microsoft-edge/webview2/).


<!-- ====================================================================== -->
## See also

* [Test upcoming APIs and features](./set-preview-channel.md)
* [Automate and test WebView2 apps with Microsoft Edge WebDriver](https://learn.microsoft.com/en-us/microsoft-edge/webdriver)
* [WebView2 feedback repo](https://github.com/MicrosoftEdge/WebView2Feedback)
* [Site compatibility-impacting changes coming to Microsoft Edge](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/site-impacting-changes)