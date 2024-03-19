---
title: Test upcoming APIs and features
description: How to specify a Microsoft Edge preview channel to use, to test experimental APIs in a prerelease package.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 02/09/2024
---
# Test upcoming APIs and features
<!-- old title: 
# Switch to a preview channel to test upcoming APIs and features
-->
To test new APIs and features, you would need to switch to a preview channel. The WebView2 Evergreen Runtime updates often to add new APIs and functionalities.

**Why use a preview channel of WebView2?** The Evergreen WebView2 Runtime lacks the most recent experimental WebView2 APIs. To run your WebView2 code with these experimental APIs, your app would need to use WebView2 in an Edge preview channel (Beta, Dev, or Canary). We provide multiple methods to achieve this, and the Canary channel is recommended as it offers the latest experimental APIs.

Interplay Between Prerelease SDK and Preview Channel:

*  A prerelease version of the WebView2 SDK contains the method signatures for experimental APIs, which allow you to write code using the experimental WebView2 APIs in your app.

*  The preview channels of Microsoft Edge contain the Microsoft Edge binaries that are needed to run and render your app, including the implementation of the experimental APIs.

For a deeper understanding of how SDK versions interact with the WebView2 Runtime and Microsoft Edge preview channels, refer to [Understand the different WebView2 SDK versions](../concepts/versioning.md).

**Forward-compatibility testing using the preview channel** Some of these updates could potentially break your WebView2 app. We recommend that you test the experimental APIs ahead of time and ensure your app's forward-compatibility by following the best practices:

* [Prerelease testing using preview channels](./prerelease-testing.md)
* [Self-hosting by deploying preview channels](./self-hosting.md)


<!-- ====================================================================== -->
## Downloading the prerelease SDK and a preview channel

To use experimental APIs, download a prerelease version of the WebView2 SDK from [Microsoft.Web.WebView2 package](https://www.nuget.org/packages/Microsoft.Web.WebView2).

To download a Microsoft Edge preview channel, see [Microsoft Edge Insider Channels](https://www.microsoft.com/edge/download/insider).


<!-- intro/overview of the two approaches  ======================================= -->
## Approaches to making your app use a specific browser channel

When a WebView2 is initialized, it will attempt to find a valid runtime on the machine to use. This can be the WebView2 Runtime, a preview channel of Microsoft Edge, or a specified location containing fixed version binaries. You can learn more about supported runtimes at [Distribute your app and the WebView2 Runtime](../concepts/distribution.md).

There are several ways to make your WebView2 app use a specified preview channel of Microsoft Edge:
*  By switching the channel search order (recommended)
*  By setting the browser executable folder

These approaches are described below.

### Default channel-search order (recommended)

This section applies to using a group policy, registry override, or environment variable.

If a specific browser executable folder isn't specified, then the WebView2 will attempt to load a runtime from one of the known default locations.

The default channel-search order is:
1. The WebView2 Runtime.
1. The Beta channel of Microsoft Edge.
1. The Dev channel of Microsoft Edge.
1. The Canary channel of Microsoft Edge.

If you set the `ChannelSearchKind` to `1` by using an API, a group policy, registry override, or environment variable, that will use the reverse of the default search order.

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

1. Open a PowerShell terminal or PowerShell-enabled command prompt.

1. Modify and then run the following command:

   ```reg
   REG ADD <HKLM/HKCU>\Software\Policies\Microsoft\Edge\WebView2\ChannelSearchKind /v WebView2APISample.exe /t REG_DWORD /d 1
   ```

Replace `WebView2APISample.exe` with your own app executable name or the application user model ID. Using a wildcard (*) as the value name will apply the override to _all_ WebView2 apps on the machine and can result in unexpected behavior.


##### [Environment variable](#tab/environment-variable)

Name: `WEBVIEW2_CHANNEL_SEARCH_KIND`  
Value: `1`

Note that the environment variable will be applied to all apps that use WebView2 on the machine, unlike the registry key, which can be set per app.


##### [Group policy](#tab/group-policy)

Set the `ChannelSearchKind` policy.

* Name: `<app exe name or app user model ID - ex: WebView2APISample.exe>`
* Value: `1`

Do either of the following:

* Download the Microsoft Edge policy files, which include the WebView2 policy files, from [Download and configure Microsoft Edge for Business](https://www.microsoft.com/edge/business/download).  Click any of the three **Download Windows Policy** links. Refer to [Configure Microsoft Edge policy settings on Windows devices](https://learn.microsoft.com/en-us/deployedge/configure-microsoft-edge) for more information.

* Use the built-in policy on Intune. Refer to [Configure Microsoft Edge policy settings in Microsoft Intune](https://learn.microsoft.com/en-us/mem/intune/configuration/administrative-templates-configure-edge) for more information.

---


### Browser executable folder

One approach is to use a browser executable folder.  In this approach, you specify a folder that contains runtime binaries. This folder can be any of the following locations:
*  The installed location of the WebView2 Runtime.
*  A preview channel of Microsoft Edge.
*  A folder containing fixed version binaries that you have deployed to the machine yourself.

If you set the browser executable folder to a specific preview channel of Microsoft Edge, you will need to update the location when that preview channel updates to a newer version. This is because the location includes the version number as part of its path. Therefore, we recommend using this approach for local testing only.

##### [API](#tab/api)

Pass the path to the browser executable folder during environment creation with the following APIs

.NET (WPF):
* [CreationProperties Property](https://learn.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.wpf.webview2.creationproperties)
* [CoreWebView2CreationProperties Class](https://learn.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.wpf.corewebview2creationproperties)

.NET (WinForms):
* [CreationProperties Property](https://learn.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.winforms.webview2.creationproperties)
* [CoreWebView2CreationProperties Class](https://learn.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.winforms.corewebview2creationproperties)

WinRT:
<!--todo Add information here -->

Win32:
* [CreateCoreWebView2EnvironmentWithOptions](https://learn.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/webview2-idl?#createcorewebview2environmentwithoptions)


##### [Registry key](#tab/registry-key)

1. Open a PowerShell terminal or PowerShell-enabled command prompt.

1. Modify and then run the following command:

   ```reg
   REG ADD <HKLM/HKCU>\Software\Policies\Microsoft\Edge\WebView2\BrowserExecutableFolder /v WebView2APISample.exe /t REG_SZ /d "C:\Users\myname\AppData\Local\Microsoft\Edge SxS\Application\88.0.680.0"
   ```

Replace `WebView2APISample.exe` with your own app executable name or the application user model ID. Replace the sample path with the path to the desired Microsoft Edge preview channel.

##### [Environment variable](#tab/environment-variable)

Name: `WEBVIEW2_BROWSER_EXECUTABLE_FOLDER`  
Value: `<path to desired Microsoft Edge preview channel>`

Note that the environment variable will be applied to all apps that use WebView2 on the machine, unlike the registry key, which can be set per app.

##### [Group policy](#tab/group-policy)

Set the `BrowserExecutableFolder` policy.

Name: `<app exe name or app user model ID - ex: WebView2APISample.exe>`
Value: `<path to desired Microsoft Edge preview channel>`

Do either of the following:

* Download the Microsoft Edge policy files, which include the WebView2 policy files, from [Download and configure Microsoft Edge for Business](https://www.microsoft.com/edge/business/download). Refer to [Configure Microsoft Edge policy settings on Windows devices](https://learn.microsoft.com/en-us/deployedge/configure-microsoft-edge) for more information.

* Use the built-in policy on Intune. Refer to [Configure Microsoft Edge policy settings in Microsoft Intune](https://learn.microsoft.com/en-us/mem/intune/configuration/administrative-templates-configure-edge) for more information.

---

## FAQs

<!-- 3. Environment Variable ============================================== -->
### How to use use an environment variable

1. In the Windows search bar, enter "environment", and then select **Edit the system environment variables**.

   ![Using the Windows search bar to find where to edit environment variables](./set-preview-channel-images/search-bar-edit-sys-env-vars.png)

1. In the **System Properties** dialog, select the **Advanced** tab, and then select the **Environment Variables** button.

   ![The Environment Variables button in the System Properties dialog](./set-preview-channel-images/system-properties-env-vars.png)

1. In the **User variables** section of the **Environment Variables** dialog, select **New**.

1. In the **New User Variable** dialog, set the **Variable name** to `WEBVIEW2_CHANNEL_SEARCH_KIND`, and set the **Variable value** to the path to your preferred browser channel or fixed version binaries.

   Alternatively, set the **Variable name** to `WEBVIEW2_CHANNEL_SEARCH_KIND`, and set the **Variable value** to `1` to reverse the search order, to use preview channels (Beta, Dev, or Canary) first. Any value besides `1` indicates the default search order.

1. Click **OK** to close the dialogs.


### When does the new runtime get picked up?

If you are using an environment variable / reg key / grou policy, they are only applied to any new processes that are created, they do not apply to processes which are already running. To ensure that all processes use the you would need to restart the processes.

### When using `ChannelSearchKind`, how do I make sure the right channel is picked up when I have multiple preview browser channels?

In addition to reversing the channel search order, you can modify the release channels set for further control over channel selection. The loader will search for channels on the device according to the channel search kind, but it will only consider channels in the set.

This option is useful if you would like to target a particular channel instead of simply choosing the least stable one. By default, release channels includes all channels: Stable (0), Beta (1), Dev (2), and Canary (3).

Example:
```
Channel Search Kind: 1 (Least Stable)
Release Channels: 0 (Stable), 1 (Beta)
```

With this setting, the loader will try to run the app with Edge Beta if it is installed on the device, and otherwise fall back on the Stable WebView2 Runtime.

The release channels can similarly be set through the registry key, environment variable, API, or group policy.

##### [API](#tab/api)

By default, the the loader considers all release channels. Set `ReleaseChannels` to a mask of the channels you would like the loader to search for.

.NET:
* [CoreWebView2EnvironmentOptions.ReleaseChannels Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.releasechannels)
* [CoreWebView2ReleaseChannels Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2releasechannels)

WinRT:
* [CoreWebView2EnvironmentOptions.ReleaseChannels Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions#releasechannels)
* [CoreWebView2ChannelSearchKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2releasechannels)

Win32:
* [ICoreWebView2ExperimentalEnvironmentOptions::get_ReleaseChannels](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironmentoptions#get_releasechannels)
* [ICoreWebView2ExperimentalEnvironmentOptions::put_ReleaseChannels](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironmentoptions#put_releasechannels)
* [COREWEBVIEW2_RELEASE_CHANNELS enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl#corewebview2_release_channels)


##### [Registry key](#tab/registry-key)

1. Open a PowerShell terminal or PowerShell-enabled command prompt.

1. Modify and then run the following command:

   ```reg
   REG ADD <HKLM/HKCU>\Software\Policies\Microsoft\Edge\WebView2\ReleaseChannels /v WebView2APISample.exe /t REG_SZ /d "0,1"
   ```

Replace `WebView2APISample.exe` with your own app executable name or the application user model ID. Using a wildcard (*) as the value name will apply the override to _all_ WebView2 apps on the machine and can result in unexpected behavior.


##### [Environment variable](#tab/environment-variable)

Name: `WEBVIEW2_RELEASE_CHANNELS`  
Value: `<string of desired channels (ex: 0,1)>`

Note that the environment variable will be applied to all apps that use WebView2 on the machine, unlike the registry key, which can be set per app.


##### [Group policy](#tab/group-policy)

Set the `ReleaseChannel` policy.

* Name: `<app exe name or app user model ID - ex: WebView2APISample.exe>`
* Value: `<string of desired channels (ex: 0,1)>`

Do either of the following:

* Download the Microsoft Edge policy files, which include the WebView2 policy files, from [Download and configure Microsoft Edge for Business](https://www.microsoft.com/edge/business/download). Refer to [Configure Microsoft Edge policy settings on Windows devices](https://learn.microsoft.com/en-us/deployedge/configure-microsoft-edge) for more information.

* Use the built-in policy on Intune. Refer to [Configure Microsoft Edge policy settings in Microsoft Intune](https://learn.microsoft.com/en-us/mem/intune/configuration/administrative-templates-configure-edge) for more information.

---