---
title: Prerelease testing using the preview channels of Microsoft Edge
description: Test your WebView2 app by using the preview channels of Microsoft Edge (Edge Canary, Edge Dev, or Edge Beta) to find issues that will affect your particular WebView2 app, before WebView2 changes migrate to Edge Stable.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 02/09/2024
---
# Prerelease testing using the preview channels of Microsoft Edge

_Prerelease testing_ means testing your WebView2 app by using the preview channels of Microsoft Edge (Edge Canary, Edge Dev, or Edge Beta) to find issues that will affect your particular WebView2 app, before WebView2 changes migrate to Edge Stable.

Prerelease testing helps apps catch bugs in prerelease channels of WebView2, before the WebView2 changes ship in a stable release and degrade the app experience for end users.

Prerelease testing means validating your app against early builds of WebView2 to ensure that your app works with upcoming changes.  This can be accomplished through automated testing and flighting with the preview channels of Microsoft Edge, which contain the WebView2 prerelease bits.  The preview (or "insider") channels of Microsoft Edge consist of:
* Edge Canary - releases daily.
* Edge Dev - releases weekly.
* Edge Beta - releases every 4 weeks.

See also: 
* [Overview of the Microsoft Edge channels](/deployedge/microsoft-edge-channels)
* [Become a Microsoft Edge Insider](https://www.microsoft.com/edge/download/insider) - download Edge Canary, Edge Dev, or Edge Beta


<!-- ====================================================================== -->
## Importance of prerelease testing

Evergreen WebView2 is based on the evergreen Chromium platform, which receives monthly major updates.  Testing against prerelease channels (Edge Canary, Edge Dev, or Edge Beta) is the way to validate your own, particular app against incoming browser updates.  Regressions in WebView2 apps tend to be application-specific, rather than affecting all WebView2 apps.

The only way to catch app-specific regressions before WebView2 changes ship in Edge Stable is to test your particular app against the prerelease channels of Microsoft Edge.  WebView2 is tested in a variety of general scenarios, but it's not feasible for that general testing to cover all the scenarios that various specific apps might encounter.

Many issues in specific WebView2 apps can be discovered before WebView2 changes reach Edge Stable by doing prerelease testing (such as in Edge Canary).  For example, the following issues have been caught:
- [Unable to open https://www.facebook.com, once load will directly ProcessFailed](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4281)
- [MSEdgeWebView2 crashes when trying to preview a file through Monaco in file explorer using PowerToys](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4228)
- [CoreWebView2PrintSettings.ScaleFactor is not working](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4082)


<!-- ====================================================================== -->
## Start prerelease testing by doing automated testing against Edge Canary

You would need to set up the following:
1. [Set the preview channel for your app](#how-to-set-preview-channel)
1. [Deploy the non-stable channels](#how-to-deploy-non-stable-channels)
1. [Conduct automated testing on your app running against the non-stable channels](#how-to-use-conduct-automated-testing)
1. [Compare the results with the baseline](#what-to-use-as-a-baseline)

Upon finding issues, you can report them to the [WebView2 feedback repo](https://github.com/MicrosoftEdge/WebView2Feedback).

##### Tooling and Guidance
Start with automated testing against the Microsoft Edge **Canary** channel, which ships daily.  This enables you to catch issues as early as possible.  To test your app against Edge Canary, you set the preview channel, as described below.

The Microsoft Edge **Dev** channel ships weekly, and is also a good option.


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
WebView2 Runtime (Stable) ->  Edge Beta -> Edge Dev -> Edge Canary
```

To do prerelease testing, reverse the channel search order, so that the loader looks for binaries in order from least-stable (Canary) to most-stable:

```
Edge Canary -> Edge Dev -> Edge Beta -> WebView2 Runtime (Stable)
```

The channel search kind can be set per app through a registry key, environment variable, API, or group policy.

The value `1` indicates reversed search order; that is, from least-stable (Edge Canary) to most-stable.

#### [Registry key](#tab/registry-key)

```reg
REG ADD <HKLM/HKCU>\Software\Policies\Microsoft\Edge\WebView2\ChannelSearchKind /v WebView2APISample.exe /t REG_DWORD /d 1
```

Replace `WebView2APISample.exe` with your own app executable name or the application user model ID.


#### [Environment variable](#tab/environment-variable)

Name: `WEBVIEW2_CHANNEL_SEARCH_KIND`  
Value: `1`

#### [API](#tab/api)

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

#### [Group policy](#tab/group-policy)

Set the `ChannelSearchKind` policy.

Name: `<app exe name or app user model ID - ex: WebView2APISample.exe>`  
Value: `1`

Do either of the following:
* Download the Microsoft Edge policy files, which include the WebView2 policy files, from [Download and configure Microsoft Edge for Business](https://www.microsoft.com/edge/business/download).  Click any of the three **Download Windows Policy** links.<!-- todo: no "Edge policy" download link there -->
* Use the built-in policy on Intune.<!-- todo: link to more info -->

---


<!-- ====================================================================== -->
## Setting the preview channel by using the browser executable folder

The browser executable folder is the path to the folder that contains the WebView2 Runtime binaries.  This option is useful if you're using a fixed Runtime.  The browser executable folder path can be set per app through a registry key, environment variable, API, or group policy.


#### [Registry key](#tab/registry-key)

```reg
REG ADD <HKLM/HKCU>\Software\Policies\Microsoft\Edge\WebView2\BrowserExecutableFolder /v WebView2APISample.exe /t REG_SZ /d "C:\Users\myname\AppData\Local\Microsoft\Edge SxS\Application\88.0.680.0"
```

* Replace `WebView2APISample.exe` with your own app executable name or the application user model ID.

* Replace the sample path with the path to the desired Microsoft Edge preview channel.


#### [Environment variable](#tab/environment-variable)

Name: `WEBVIEW2_BROWSER_EXECUTABLE_FOLDER`  
Value: `<path to desired Microsoft Edge preview channel>`


#### [API](#tab/api)

Pass the path to the browser executable folder during environment creation, by calling `CreateCoreWebView2EnvironmentWithOptions`.

.NET: 
* [todo]

WinRT:
* [todo]

Win32:
* [CreateCoreWebView2EnvironmentWithOptions](/microsoft-edge/webview2/reference/win32/webview2-idl#createcorewebview2environmentwithoptions)


#### [Group policy](#tab/group-policy)

Set `BrowserExecutableFolder`.

Name: `<app exe name or app user model ID - ex: WebView2APISample.exe>`
Value: `<path to desired Microsoft Edge preview channel>`

Download the Microsoft Edge policy files, which include the WebView2 policy files, from the Edge Enterprise site,<!-- todo: link --> or use the built-in policy on Intune.<!-- todo: link -->
Do either of the following:
* Download the Microsoft Edge policy files, which include the WebView2 policy files, from [Download and configure Microsoft Edge for Business](https://www.microsoft.com/edge/business/download).  Click any of the three **Download Windows Policy** links.<!-- todo: no "Edge policy" download link there -->
* Use the built-in policy on Intune.<!-- todo: link to more info -->

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
* [Microsoft Edge Insider website](https://www.microsoft.com/edge/download/insider) - download the Canary, Dev, or Beta channel of Microsoft Edge
