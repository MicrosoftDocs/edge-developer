---
title: Test upcoming APIs and features
description: How to specify a Microsoft Edge preview channel to use, to test experimental APIs in a prerelease package.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 04/22/2024
---
# Test upcoming APIs and features
<!-- old title: 
# Switch to a preview channel to test upcoming APIs and features
-->

This article explains how to switch to a preview channel of Microsoft Edge, to test experimental APIs that are in a WebView2 Prerelease SDK package.

To test new or forthcoming APIs and features, switch to a Microsoft Edge preview channel rather than using the stable WebView2 Runtime.  The Evergreen WebView2 Runtime is updated frequently to add new APIs and functionalities. These updates can include APIs have been promoted from `Experimental` in a Prerelease WebView2 SDK to `Stable` in the WebView2 Release SDK.  Some of the updates in the Evergreen WebView2 Runtime could potentially break your WebView2 app.

We recommend that you test the Experimental APIs ahead of time, before they are promoted to Stable in the WebView2 Release SDK, by switching to a preview channel of Microsoft Edge (which includes WebView2), to ensure that your app is forward-compatible.

See also:
* [Phases of introducing APIs](../concepts/versioning.md#phases-of-introducing-apis) in _Prerelease and Release SDKs for WebView2_.
* [Prerelease and Release SDKs for WebView2](../concepts/versioning.md) - Use a Prerelease version of the SDK along with a preview channel of Microsoft Edge; or use a Release version of the SDK along with the Evergreen WebView2 Runtime.


<!-- ------------------------------ -->
#### Use a preview channel of WebView2 to test your app against the most recent experimental WebView2 APIs

The Evergreen WebView2 Runtime doesn't include experimental WebView2 APIs.  Instead, to use these experimental features in your WebView2 code, have your app use the version of WebView2 that is in a Microsoft Edge preview channel (Edge Beta, Edge Dev, or Edge Canary).

The Canary channel is recommended, because it offers the latest experimental APIs.


<!-- ------------------------------ -->
#### Interplay between the WebView2 Prerelease SDK and Microsoft Edge Preview Channels

*  **Prerelease SDK:** This version of the WebView2 SDK provides method signatures for experimental APIs, which allow you to write code using the experimental WebView2 APIs in your app.

*  **Microsoft Edge Preview Channels:** These channels (Edge Beta, Edge Dev, or Edge Canary) contain the necessary Microsoft Edge binaries.  These channels allow your app to run and render using the experimental APIs.

For more information about how SDK versions interact with the WebView2 Runtime and the Microsoft Edge preview channels, see [Prerelease and Release SDKs for WebView2](../concepts/versioning.md).


<!-- ------------------------------ -->
#### Forward-compatibility testing by using the preview channel

We recommend that you test upcoming changes using preview channels to ensure your app's forward compatibility, by following these best practices:

* [Prerelease testing using preview channels](./prerelease-testing.md)
* [Self-host by deploying preview channels](./self-hosting.md)


<!-- ====================================================================== -->
## Downloading the prerelease SDK and a preview channel

To use experimental APIs, download a prerelease version of the WebView2 SDK from [Microsoft.Web.WebView2 package](https://www.nuget.org/packages/Microsoft.Web.WebView2).

Preview channels of Microsoft Edge include the preview WebView2 Runtime.  Preview channels are also called _Insider channels_.  After being installed, the preview channels stay up-to-date; the latest version of each preview channel is automatically installed.  For example, this means the Canary channel will update itself almost daily.

To download a preview channel of Microsoft Edge (Beta, Dev, or Canary), go to [Become a Microsoft Edge Insider](https://www.microsoft.com/edge/download/insider).

To deploy the preview channel to multiple machines, see [How to deploy preview channels](#how-to-deploy-preview-channels), below.


<!-- ====================================================================== -->
## Approaches to making your app use a specific browser channel

When a WebView2 is initialized, it will attempt to find a valid runtime on the machine to use.  This can be the WebView2 Runtime, a preview channel of Microsoft Edge, or a specified location that contains Fixed Version binaries.  For more information about supported runtimes, see [Distribute your app and the WebView2 Runtime](../concepts/distribution.md).

There are two ways to make your WebView2 app use a specific preview channel of Microsoft Edge:

* [Switching the channel search order (recommended)](#switching-the-channel-search-order-recommended).

* [Setting the browser executable folder (for local testing)](#setting-the-browser-executable-folder-for-local-testing).

These approaches are described below.


<!-- ====================================================================== -->
## Switching the channel search order (recommended)

This section applies to using an API, registry override, environment variable, or group policy.

If a specific browser executable folder isn't specified, then the WebView2 will attempt to load a runtime from one of the known default locations.  By default, the WebView2 loader searches for runtimes from most-stable to least-stable (Canary), using the first runtime that's found.

```
WebView2 Runtime (Stable) ->  Edge Beta -> Edge Dev -> Edge Canary
```

You can reverse the default search order by setting the `ChannelSearchKind` API to `LeastStable`, or by setting the `ChannelSearchKind` policy, registry key, or environment variable to `1`.  Reversing the search order makes the WebView2 loader search from least-stable (Canary) to most-stable:

```
Edge Canary -> Edge Dev -> Edge Beta -> WebView2 Runtime (Stable)
```

This must be done before the WebView2 control is initialized.

If you need a more specific order, see [How to use `ChannelSearchKind` to ensure that a particular channel is used](#how-to-use-channelsearchkind-to-ensure-that-a-particular-channel-is-used).


##### [API](#tab/api)

By default, the `CoreWebView2EnvironmentOptions.ChannelSearchKind` property is `CoreWebView2ChannelSearchKind.MostStable` (an enum value).  Instead, reverse the search order by setting the `CoreWebView2EnvironmentOptions.ChannelSearchKind` property to `CoreWebView2ChannelSearchKind.LeastStable`.

.NET:
* [CoreWebView2EnvironmentOptions.ChannelSearchKind Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.channelsearchkind)
* [CoreWebView2ChannelSearchKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2channelsearchkind)

WinRT:
* [CoreWebView2EnvironmentOptions.ChannelSearchKind Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions#channelsearchkind)
* [CoreWebView2ChannelSearchKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2channelsearchkind)

Win32:
* [ICoreWebView2EnvironmentOptions7::get_ChannelSearchKind](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions7#get_channelsearchkind)
* [ICoreWebView2EnvironmentOptions7::put_ChannelSearchKind](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions7#put_channelsearchkind)
* [COREWEBVIEW2_CHANNEL_SEARCH_KIND enum](/microsoft-edge/webview2/reference/win32/webview2-idl#corewebview2_channel_search_kind)


##### [Registry key](#tab/registry-key)

1. Open a PowerShell terminal or PowerShell-enabled command prompt.

1. Modify and then run the following command:

   ```reg
   REG ADD <HKLM/HKCU>\Software\Policies\Microsoft\Edge\WebView2\ChannelSearchKind /v WebView2APISample.exe /t REG_DWORD /d 1
   ```

Replace `WebView2APISample.exe` with your own app executable name or the application user model ID.  Caution: If you instead use a wildcard (`*`), the override is applied to _all_ WebView2 apps on the machine, which can result in unexpected behavior.

Use the value `1` for the reversed-search order, or `0` for the default search order.


##### [Environment variable](#tab/environment-variable)

* Name: `WEBVIEW2_CHANNEL_SEARCH_KIND`
* Value: `1`

The target app can't be specified when using the environment variable.  Therefore, when set as a global environment, it will affect all apps that use WebView2 on the machine.

Use the value `1` for the reversed-search order, or `0` for the default search order.

See also:
* [How to set an environment variable](#how-to-set-an-environment-variable), below.


##### [Group policy](#tab/group-policy)

Set the `ChannelSearchKind` policy.

* Name: `<app exe name or app user model ID - ex: WebView2APISample.exe>`
* Value: `1`

Use the value `1` for the reversed-search order, or `0` for the default search order.

Do either of the following:

* Download the Microsoft Edge policy files, which include the WebView2 policy files, from [Download and configure Microsoft Edge for Business](https://www.microsoft.com/edge/business/download).  For more information, see [Configure Microsoft Edge policy settings on Windows devices](/deployedge/configure-microsoft-edge).

* Use the built-in policy on Intune.  See the following articles.  The steps for WebView2 are the same as for Microsoft Edge, except use the category "Microsoft Edge WebView2" instead of "Microsoft Edge".
   * [Configure Microsoft Edge policy settings in Microsoft Intune](/mem/intune/configuration/administrative-templates-configure-edge) in the Microsoft Intune documentation.
   * [Configure Microsoft Edge policy settings with Microsoft Intune](/deployedge/configure-edge-with-intune) in the Microsoft Edge Enterprise documentation.

---


<!-- ====================================================================== -->
## How to use `ChannelSearchKind` to ensure that a particular channel is used

When using `ChannelSearchKind`, here's how you can make sure that a certain preview browser channel is used when you have multiple preview browser channels installed.

In addition to reversing the channel search order, you can modify the set of release channels to include in the search, to provide further control over channel selection.  The loader will search for channels on the device in the order specified by the channel search kind, but it will only consider channels that are in the specified set of release channels.

This option is useful if you would like to target a particular channel, instead of simply choosing the most or least stable channel.  By default, the release channels includes all channels: Stable (0), Beta (1), Dev (2), and Canary (3).

Example:

```
Channel Search Kind: 1 (Least Stable)
Release Channels: 0 (Stable), 1 (Beta)
```

This example setting causes the loader to try to run the app with Edge Beta if Edge Beta is installed on the device, and otherwise fall back to using the Stable WebView2 Runtime.

The release channels can similarly be set through the API, registry key, environment variable, or group policy.


##### [API](#tab/api)

By default, the loader considers all of the release channels.  Set `ReleaseChannels` to a mask of the channels you would like the loader to search for.

.NET:
* [CoreWebView2EnvironmentOptions.ReleaseChannels Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.releasechannels)
* [CoreWebView2ReleaseChannels Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2releasechannels)

WinRT:
* [CoreWebView2EnvironmentOptions.ReleaseChannels Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions#releasechannels)
* [CoreWebView2ChannelSearchKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2releasechannels)

Win32:
* [ICoreWebView2EnvironmentOptions7::get_ReleaseChannels](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions7#get_releasechannels)
* [ICoreWebView2EnvironmentOptions7::put_ReleaseChannels](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions7#put_releasechannels)
* [COREWEBVIEW2_RELEASE_CHANNELS enum](/microsoft-edge/webview2/reference/win32/webview2-idl#corewebview2_release_channels)


##### [Registry key](#tab/registry-key)

1. Open a PowerShell terminal or PowerShell-enabled command prompt.

1. Modify and then run the following command:

   ```reg
   REG ADD <HKLM/HKCU>\Software\Policies\Microsoft\Edge\WebView2\ReleaseChannels /v WebView2APISample.exe /t REG_SZ /d "0,1"
   ```

Replace `WebView2APISample.exe` with your own app executable name or the application user model ID.  Using a wildcard (*) as the value name will apply the override to _all_ WebView2 apps on the machine, and can result in unexpected behavior.


##### [Environment variable](#tab/environment-variable)

* Name: `WEBVIEW2_RELEASE_CHANNELS`
* Value: `<string of desired channels (ex: 0,1)>`

The target app can't be set when using the environment variable approach.  Therefore, when set as a global environment, this setting will affect all apps that use WebView2 on the machine.

See also:
* [How to set an environment variable](#how-to-set-an-environment-variable), below.


##### [Group policy](#tab/group-policy)

Set the `ReleaseChannel` policy.

* Name: `<app exe name or app user model ID - ex: WebView2APISample.exe>`
* Value: `<string of desired channels (ex: 0,1)>`

Do either of the following:

* Download the Microsoft Edge policy files, which include the WebView2 policy files, from [Download and configure Microsoft Edge for Business](https://www.microsoft.com/edge/business/download).  For more information, see [Configure Microsoft Edge policy settings on Windows devices](/deployedge/configure-microsoft-edge).

* Use the built-in policy on Intune.  For more information, see [Configure Microsoft Edge policy settings in Microsoft Intune](/mem/intune/configuration/administrative-templates-configure-edge).

---


<!-- ====================================================================== -->
## Setting the browser executable folder (for local testing)

An alternative approach is to use a browser executable folder.  In this approach, you specify a folder that contains runtime binaries.  This folder can be any of the following locations:
*  The installed location of the WebView2 Runtime.
*  A preview channel of Microsoft Edge.
*  A folder containing Fixed Version binaries that you have deployed to the machine yourself.

If you set the browser executable folder to a specific preview channel of Microsoft Edge, you will need to update the location when that preview channel updates to a newer version.  This is because the location includes the version number as part of its path.  Therefore, we recommend using this approach for local testing only.


##### [API](#tab/api)

Pass the path to the browser executable folder during environment creation, by using the following APIs.

.NET (WPF):
* [CreationProperties Property](/dotnet/api/microsoft.web.webview2.wpf.webview2.creationproperties)
* [CoreWebView2CreationProperties Class](/dotnet/api/microsoft.web.webview2.wpf.corewebview2creationproperties)

.NET (WinForms):
* [CreationProperties Property](/dotnet/api/microsoft.web.webview2.winforms.webview2.creationproperties)
* [CoreWebView2CreationProperties Class](/dotnet/api/microsoft.web.webview2.winforms.corewebview2creationproperties)

WinRT:
* [CoreWebView2Environment.CreateWithOptionsAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#createwithoptionsasync)

Win32:
* [CreateCoreWebView2EnvironmentWithOptions](/microsoft-edge/webview2/reference/win32/webview2-idl?#createcorewebview2environmentwithoptions)


##### [Registry key](#tab/registry-key)

1. Open a PowerShell terminal or PowerShell-enabled command prompt.

1. Modify and then run the following command:

   ```reg
   REG ADD <HKLM/HKCU>\Software\Policies\Microsoft\Edge\WebView2\BrowserExecutableFolder /v WebView2APISample.exe /t REG_SZ /d "C:\Users\myname\AppData\Local\Microsoft\Edge SxS\Application\88.0.680.0"
   ```

   * Replace `WebView2APISample.exe` with your own app executable name or the application user model ID.
   * Replace the sample path with the path to the desired Microsoft Edge preview channel.


##### [Environment variable](#tab/environment-variable)

* Name: `WEBVIEW2_BROWSER_EXECUTABLE_FOLDER`
* Value: `<path to desired Microsoft Edge preview channel>`

The target app can't be set when using the environment variable approach.  Therefore, when set as a global environment, this setting will affect all apps that use WebView2 on the machine.

See also:
* [How to set an environment variable](#how-to-set-an-environment-variable), below.


##### [Group policy](#tab/group-policy)

Set the `BrowserExecutableFolder` policy.

* Name: `<app exe name or app user model ID - ex: WebView2APISample.exe>`
* Value: `<path to desired Microsoft Edge preview channel>`

Do either of the following:

* Download the Microsoft Edge policy files, which include the WebView2 policy files, from [Download and configure Microsoft Edge for Business](https://www.microsoft.com/edge/business/download).  See [Configure Microsoft Edge policy settings on Windows devices](/deployedge/configure-microsoft-edge).

* Use the built-in policy on Intune.  See [Configure Microsoft Edge policy settings in Microsoft Intune](/mem/intune/configuration/administrative-templates-configure-edge).

---


<!-- ====================================================================== -->
## When the new runtime gets picked up

If you are using an environment variable, registry key, or group policy, they are only applied to any new WebView2 Runtime browser processes that are created; they do not apply to WebView2 Runtime browser processes that are already running.  For example, if you already have a WebView2 with a specific user data folder (and therefore a corresponding browser process) and change `ChannelSearchKind` before attempting to create a new WebView2 using that same user data folder, it will use the existing WebView2 Runtime browser process, and not search for a different runtime.

To ensure that all processes use the environment variable, registry key, or group policy, you need to do any of the following:
* Restart the app.
* Re-create all of the WebView2 controls that share a user data folder.
* Create a new WebView2 that has a different user data folder than any other currently running WebView2 controls.


<!-- ====================================================================== -->
## How to set an environment variable

You can use multiple approaches to set environment variables:
* Setting environmental variables by using APIs, for a specific app.
* Setting environmental variables globally, for all apps.

These approaches are described below.


<!-- ------------------------------ -->
#### Setting environmental variables by using APIs, for a specific app

You can set environment variables by using `SetEnvironmentVariable`.  Calling this function from your host app limits the scope of the environment variable to just your host app and the WebView2 controls that it creates, and doesn't affect other apps on the system.

* .NET: [Environment.SetEnvironmentVariable Method](/dotnet/api/system.environment.setenvironmentvariable)

* WinRT: [EnvironmentManager.SetEnvironmentVariable Method](/windows/windows-app-sdk/api/winrt/microsoft.windows.system.environmentmanager.setenvironmentvariable)

* Win32: [SetEnvironmentVariable function (winbase.h)](/windows/win32/api/winbase/nf-winbase-setenvironmentvariable)


<!-- ------------------------------ -->
#### Setting environmental variables globally, for all apps

You can set environment variables by using the Windows system UI.  This approach makes the scope of the environment variable global for the current user or system, and affects all apps that create WebView2 controls.

1. In the Windows search bar, enter "environment", and then select **Edit the system environment variables**:

   ![Using the Windows search bar to find where to edit environment variables](./set-preview-channel-images/search-bar-edit-sys-env-vars.png)

   The **System Properties** dialog opens.

1. Select the **Advanced** tab, and then click the **Environment Variables** button:

   ![The Environment Variables button in the System Properties dialog](./set-preview-channel-images/system-properties-env-vars.png)

   The **Environment Variables** dialog opens.

1. In the **User variables** section at the top, click the **New** button.  The **New User Variable** dialog opens.

1. In the **Variable name** text box, enter the environment variable name, either `WEBVIEW2_CHANNEL_SEARCH_KIND` or `WEBVIEW2_BROWSER_EXECUTABLE_FOLDER`.

1. In the **Variable value** text box, do either of the following:

   * If setting the `ChannelSearchKind`, enter `1` to reverse the search order from the default, to use the preview channels first (Canary, Beta, then Dev), followed by the WebView2 Runtime.  Any value other than `1` causes the default search order to be used (WebView2 Runtime, Edge Dev, Edge Beta, and then Edge Canary).

   * If setting the `BrowserExecutableFolder`, enter the path to your preferred browser channel or fixed-version binaries.

1. Click the **OK** buttons to close the dialogs.


<!-- ====================================================================== -->
## How to deploy preview channels

To deploy the preview channels of Microsoft Edge to multiple machines, do either of the following:

* Option 1: Manually install preview channels on machines.

* Option 2: Programmatically deploy preview channels via API endpoints.

These options are explained below.


<!-- ------------------------------ -->
#### Option 1: Manually install preview channels on machines

Preview channels can be manually installed (either manually or through a deployed custom script) through the following enterprise links:

| Channel | Link |
| --- | --- |
| Canary | [Download](https://go.microsoft.com/fwlink/?linkid=2084649&Channel=Canary&language=en) |
| Dev | [Download](https://go.microsoft.com/fwlink/?linkid=2093291) |
| Beta | [Download](https://go.microsoft.com/fwlink/?linkid=2093376) |

Manual installation only needs to be done once per machine.  Prerelease channels are evergreen, so they will automatically get updated when newer versions are available.


<!-- ------------------------------ -->
#### Option 2: Programmatically deploy preview channels via API endpoints

In your app's code, write your own custom logic to deploy the latest version of a preview channel of Microsoft Edge as follows:

1. Call the following API endpoint that corresponds to the preview channel that you want to deploy:

   | Channel | Link |
   | --- | --- |
   | Canary | [https://edgeupdates.microsoft.com/api/products/canary](https://edgeupdates.microsoft.com/api/products/canary)<br>[MSI Link](https://go.microsoft.com/fwlink/?linkid=2084649&Channel=Canary&language=en)|
   | Dev | [https://edgeupdates.microsoft.com/api/products/dev](https://edgeupdates.microsoft.com/api/products/dev) |
   | Beta | [https://edgeupdates.microsoft.com/api/products/beta](https://edgeupdates.microsoft.com/api/products/beta) |

   The Canary channel has a separate MSI link.  The Dev and Beta channels contain MSI links.

1. Fetch the latest package to the device.

1. Install the package.


<!-- ====================================================================== -->
## See also
<!-- all links in article body -->

* [Prerelease testing using preview channels](./prerelease-testing.md)
* [Self-host by deploying preview channels](./self-hosting.md)
* [Phases of introducing APIs](../concepts/versioning.md#phases-of-introducing-apis) in _Prerelease and Release SDKs for WebView2_.
* [Distribute your app and the WebView2 Runtime](../concepts/distribution.md)
* [Prerelease and Release SDKs for WebView2](../concepts/versioning.md)

Enterprise docs:
* [Microsoft Edge release schedule](/deployedge/microsoft-edge-release-schedule)
* [Configure Microsoft Edge policy settings on Windows devices](/deployedge/configure-microsoft-edge)

Microsoft Intune:
* [Configure Microsoft Edge policy settings in Microsoft Intune](/mem/intune/configuration/administrative-templates-configure-edge)
* [Configure Microsoft Edge policy settings with Microsoft Intune](/deployedge/configure-edge-with-intune)

Versions and preview channels of Microsoft Edge:
* [Become a Microsoft Edge Insider](https://www.microsoft.com/edge/download/insider)
* [Download and configure Microsoft Edge for Business](https://www.microsoft.com/edge/business/download)
