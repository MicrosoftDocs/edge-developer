---
title: SDK 1.0.4255-prerelease, for Runtime 154 (Sep. 3, 2026)
description: Release notes for Microsoft Edge WebView2 SDK 1.0.4255-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 09/03/2026
---
# SDK 1.0.4255-prerelease, for Runtime 154 (Sep. 3, 2026)

Release notes for Microsoft Edge WebView2 Prerelease SDK, release date: Sep. 3, 2026.

[NuGet package for WebView2 SDK 1.0.4255-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.4255-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 154.0.4255.0 or later; see [Preview Runtime 154.0.4255.0 (Sep. 3, 2026)](../runtime/154.md).


<!-- ====================================================================== -->
## Experimental APIs (Phase 1: Experimental in Prerelease)

The following APIs are in Phase 1: Experimental in Prerelease, and have been added in this Prerelease SDK.

todo: sync list in 3 tabs:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2ClusterEnvironmentCreateResult Class](/dotnet/api/microsoft.web.webview2.core.corewebview2clusterenvironmentcreateresult?view=webview2-dotnet-1.0.4255-prerelease&preserve-view=true)
   * [CoreWebView2ClusterEnvironmentCreateResult.Environment Property](/dotnet/api/microsoft.web.webview2.core.corewebview2clusterenvironmentcreateresult.environment?view=webview2-dotnet-1.0.4255-prerelease&preserve-view=true)
   * [CoreWebView2ClusterEnvironmentCreateResult.Status Property](/dotnet/api/microsoft.web.webview2.core.corewebview2clusterenvironmentcreateresult.status?view=webview2-dotnet-1.0.4255-prerelease&preserve-view=true)

* [CoreWebView2ClusterEnvironmentOptions Class](/dotnet/api/microsoft.web.webview2.core.corewebview2clusterenvironmentoptions?view=webview2-dotnet-1.0.4255-prerelease&preserve-view=true)
   * [CoreWebView2ClusterEnvironmentOptions. Method](/dotnet/api/microsoft.web.webview2.core.corewebview2clusterenvironmentoptions.?view=webview2-dotnet-1.0.4255-prerelease&preserve-view=true)
   * [CoreWebView2ClusterEnvironmentOptions.AdditionalBrowserArguments Property](/dotnet/api/microsoft.web.webview2.core.corewebview2clusterenvironmentoptions.additionalbrowserarguments?view=webview2-dotnet-1.0.4255-prerelease&preserve-view=true)
   * [CoreWebView2ClusterEnvironmentOptions.AllowSingleSignOnUsingOSPrimaryAccount Property](/dotnet/api/microsoft.web.webview2.core.corewebview2clusterenvironmentoptions.allowsinglesignonusingosprimaryaccount?view=webview2-dotnet-1.0.4255-prerelease&preserve-view=true)
   * [CoreWebView2ClusterEnvironmentOptions.AreBrowserExtensionsEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2clusterenvironmentoptions.arebrowserextensionsenabled?view=webview2-dotnet-1.0.4255-prerelease&preserve-view=true)
   * [CoreWebView2ClusterEnvironmentOptions.ChannelSearchKind Property](/dotnet/api/microsoft.web.webview2.core.corewebview2clusterenvironmentoptions.channelsearchkind?view=webview2-dotnet-1.0.4255-prerelease&preserve-view=true)
   * [CoreWebView2ClusterEnvironmentOptions.ClusterName Property](/dotnet/api/microsoft.web.webview2.core.corewebview2clusterenvironmentoptions.clustername?view=webview2-dotnet-1.0.4255-prerelease&preserve-view=true)
   * [CoreWebView2ClusterEnvironmentOptions.CustomSchemeRegistrations Property](/dotnet/api/microsoft.web.webview2.core.corewebview2clusterenvironmentoptions.customschemeregistrations?view=webview2-dotnet-1.0.4255-prerelease&preserve-view=true)
   * [CoreWebView2ClusterEnvironmentOptions.EnableTrackingPrevention Property](/dotnet/api/microsoft.web.webview2.core.corewebview2clusterenvironmentoptions.enabletrackingprevention?view=webview2-dotnet-1.0.4255-prerelease&preserve-view=true)
   * [CoreWebView2ClusterEnvironmentOptions.Language Property](/dotnet/api/microsoft.web.webview2.core.corewebview2clusterenvironmentoptions.language?view=webview2-dotnet-1.0.4255-prerelease&preserve-view=true)
   * [CoreWebView2ClusterEnvironmentOptions.PerHostProfileIsolation Property](/dotnet/api/microsoft.web.webview2.core.corewebview2clusterenvironmentoptions.perhostprofileisolation?view=webview2-dotnet-1.0.4255-prerelease&preserve-view=true)
   * [CoreWebView2ClusterEnvironmentOptions.ReleaseChannels Property](/dotnet/api/microsoft.web.webview2.core.corewebview2clusterenvironmentoptions.releasechannels?view=webview2-dotnet-1.0.4255-prerelease&preserve-view=true)

* [CoreWebView2ClusterEnvironmentStatus Class](/dotnet/api/microsoft.web.webview2.core.corewebview2clusterenvironmentstatus?view=webview2-dotnet-1.0.4255-prerelease&preserve-view=true)
   * [CoreWebView2ClusterEnvironmentStatus.NotSupported Enum Value](/dotnet/api/microsoft.web.webview2.core.corewebview2clusterenvironmentstatus?view=webview2-dotnet-1.0.4255-prerelease&preserve-view=true)
   * [CoreWebView2ClusterEnvironmentStatus.OptionsMismatch Enum Value](/dotnet/api/microsoft.web.webview2.core.corewebview2clusterenvironmentstatus?view=webview2-dotnet-1.0.4255-prerelease&preserve-view=true)
   * [CoreWebView2ClusterEnvironmentStatus.Succeeded Enum Value](/dotnet/api/microsoft.web.webview2.core.corewebview2clusterenvironmentstatus?view=webview2-dotnet-1.0.4255-prerelease&preserve-view=true)

* CoreWebView2Environment:
   * [CoreWebView2Environment.CreateOrJoinClusterEnvironmentAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createorjoinclusterenvironmentasync?view=webview2-dotnet-1.0.4255-prerelease&preserve-view=true)
   * [CoreWebView2Environment.GetClusterEnvironmentOptions Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.getclusterenvironmentoptions?view=webview2-dotnet-1.0.4255-prerelease&preserve-view=true)

* CoreWebView2Frame:
   * [CoreWebView2Frame.LaunchingExternalUriScheme Event](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.launchingexternalurischeme?view=webview2-dotnet-1.0.4255-prerelease&preserve-view=true)

* CoreWebView2LaunchingExternalUriSchemeEventArgs:
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.Handled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2launchingexternalurischemeeventargs.handled?view=webview2-dotnet-1.0.4255-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2ClusterEnvironmentCreateResult Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2clusterenvironmentcreateresult?view=webview2-winrt-1.0.4255-prerelease&preserve-view=true)
   * [CoreWebView2ClusterEnvironmentCreateResult.Environment Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2clusterenvironmentcreateresult?view=webview2-winrt-1.0.4255-prerelease&preserve-view=true#environment)
   * [CoreWebView2ClusterEnvironmentCreateResult.Status Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2clusterenvironmentcreateresult?view=webview2-winrt-1.0.4255-prerelease&preserve-view=true#status)

* [CoreWebView2ClusterEnvironmentOptions Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2clusterenvironmentoptions?view=webview2-winrt-1.0.4255-prerelease&preserve-view=true)
   * [CoreWebView2ClusterEnvironmentOptions.AdditionalBrowserArguments Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2clusterenvironmentoptions?view=webview2-winrt-1.0.4255-prerelease&preserve-view=true#additionalbrowserarguments)
   * [CoreWebView2ClusterEnvironmentOptions.AllowSingleSignOnUsingOSPrimaryAccount Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2clusterenvironmentoptions?view=webview2-winrt-1.0.4255-prerelease&preserve-view=true#allowsinglesignonusingosprimaryaccount)
   * [CoreWebView2ClusterEnvironmentOptions.AreBrowserExtensionsEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2clusterenvironmentoptions?view=webview2-winrt-1.0.4255-prerelease&preserve-view=true#arebrowserextensionsenabled)
   * [CoreWebView2ClusterEnvironmentOptions.ChannelSearchKind Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2clusterenvironmentoptions?view=webview2-winrt-1.0.4255-prerelease&preserve-view=true#channelsearchkind)
   * [CoreWebView2ClusterEnvironmentOptions.ClusterName Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2clusterenvironmentoptions?view=webview2-winrt-1.0.4255-prerelease&preserve-view=true#clustername)
   * [CoreWebView2ClusterEnvironmentOptions.CustomSchemeRegistrations Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2clusterenvironmentoptions?view=webview2-winrt-1.0.4255-prerelease&preserve-view=true#customschemeregistrations)
   * [CoreWebView2ClusterEnvironmentOptions.EnableTrackingPrevention Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2clusterenvironmentoptions?view=webview2-winrt-1.0.4255-prerelease&preserve-view=true#enabletrackingprevention)
   * [CoreWebView2ClusterEnvironmentOptions.Handled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2clusterenvironmentoptions?view=webview2-winrt-1.0.4255-prerelease&preserve-view=true#handled)
   * [CoreWebView2ClusterEnvironmentOptions.Language Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2clusterenvironmentoptions?view=webview2-winrt-1.0.4255-prerelease&preserve-view=true#language)
   * [CoreWebView2ClusterEnvironmentOptions.PerHostProfileIsolation Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2clusterenvironmentoptions?view=webview2-winrt-1.0.4255-prerelease&preserve-view=true#perhostprofileisolation)
   * [CoreWebView2ClusterEnvironmentOptions.ReleaseChannels Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2clusterenvironmentoptions?view=webview2-winrt-1.0.4255-prerelease&preserve-view=true#releasechannels)

* [CoreWebView2ClusterEnvironmentStatus Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2clusterenvironmentstatus?view=webview2-winrt-1.0.4255-prerelease&preserve-view=true)

* [CoreWebView2Frame Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame?view=webview2-winrt-1.0.4255-prerelease&preserve-view=true)
   * [CoreWebView2Frame.LaunchingExternalUriScheme Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame?view=webview2-winrt-1.0.4255-prerelease&preserve-view=true#launchingexternalurischeme)

* [CoreWebView2LaunchingExternalUriSchemeEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2launchingexternalurischemeeventargs?view=webview2-winrt-1.0.4255-prerelease&preserve-view=true)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.IAsyncOperation Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2launchingexternalurischemeeventargs?view=webview2-winrt-1.0.4255-prerelease&preserve-view=true#iasyncoperation)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalClusterEnvironmentCreateResult](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclusterenvironmentcreateresult?view=webview2-1.0.4255-prerelease&preserve-view=true)
  * [ICoreWebView2ExperimentalClusterEnvironmentCreateResult::get_Environment](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclusterenvironmentcreateresult?view=webview2-1.0.4255-prerelease&preserve-view=true#get_environment)
  * [ICoreWebView2ExperimentalClusterEnvironmentCreateResult::get_Status](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclusterenvironmentcreateresult?view=webview2-1.0.4255-prerelease&preserve-view=true#get_status)

* [ICoreWebView2ExperimentalClusterEnvironmentOptions](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclusterenvironmentoptions?view=webview2-1.0.4255-prerelease&preserve-view=true)
  * [ICoreWebView2ExperimentalClusterEnvironmentOptions::get_AdditionalBrowserArguments](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclusterenvironmentoptions?view=webview2-1.0.4255-prerelease&preserve-view=true#get_additionalbrowserarguments)
  * [ICoreWebView2ExperimentalClusterEnvironmentOptions::get_AllowSingleSignOnUsingOSPrimaryAccount](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclusterenvironmentoptions?view=webview2-1.0.4255-prerelease&preserve-view=true#get_allowsinglesignonusingosprimaryaccount)
  * [ICoreWebView2ExperimentalClusterEnvironmentOptions::get_AreBrowserExtensionsEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclusterenvironmentoptions?view=webview2-1.0.4255-prerelease&preserve-view=true#get_arebrowserextensionsenabled)
  * [ICoreWebView2ExperimentalClusterEnvironmentOptions::get_ChannelSearchKind](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclusterenvironmentoptions?view=webview2-1.0.4255-prerelease&preserve-view=true#get_channelsearchkind)
  * [ICoreWebView2ExperimentalClusterEnvironmentOptions::get_ClusterName](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclusterenvironmentoptions?view=webview2-1.0.4255-prerelease&preserve-view=true#get_clustername)
  * [ICoreWebView2ExperimentalClusterEnvironmentOptions::get_EnableTrackingPrevention](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclusterenvironmentoptions?view=webview2-1.0.4255-prerelease&preserve-view=true#get_enabletrackingprevention)
  * [ICoreWebView2ExperimentalClusterEnvironmentOptions::get_Language](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclusterenvironmentoptions?view=webview2-1.0.4255-prerelease&preserve-view=true#get_language)
  * [ICoreWebView2ExperimentalClusterEnvironmentOptions::get_PerHostProfileIsolation](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclusterenvironmentoptions?view=webview2-1.0.4255-prerelease&preserve-view=true#get_perhostprofileisolation)
  * [ICoreWebView2ExperimentalClusterEnvironmentOptions::get_ReleaseChannels](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclusterenvironmentoptions?view=webview2-1.0.4255-prerelease&preserve-view=true#get_releasechannels)
  * [ICoreWebView2ExperimentalClusterEnvironmentOptions::GetCustomSchemeRegistrations](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclusterenvironmentoptions?view=webview2-1.0.4255-prerelease&preserve-view=true#getcustomschemeregistrations)
  * [ICoreWebView2ExperimentalClusterEnvironmentOptions::put_AdditionalBrowserArguments](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclusterenvironmentoptions?view=webview2-1.0.4255-prerelease&preserve-view=true#put_additionalbrowserarguments)
  * [ICoreWebView2ExperimentalClusterEnvironmentOptions::put_AllowSingleSignOnUsingOSPrimaryAccount](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclusterenvironmentoptions?view=webview2-1.0.4255-prerelease&preserve-view=true#put_allowsinglesignonusingosprimaryaccount)
  * [ICoreWebView2ExperimentalClusterEnvironmentOptions::put_AreBrowserExtensionsEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclusterenvironmentoptions?view=webview2-1.0.4255-prerelease&preserve-view=true#put_arebrowserextensionsenabled)
  * [ICoreWebView2ExperimentalClusterEnvironmentOptions::put_ChannelSearchKind](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclusterenvironmentoptions?view=webview2-1.0.4255-prerelease&preserve-view=true#put_channelsearchkind)
  * [ICoreWebView2ExperimentalClusterEnvironmentOptions::put_ClusterName](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclusterenvironmentoptions?view=webview2-1.0.4255-prerelease&preserve-view=true#put_clustername)
  * [ICoreWebView2ExperimentalClusterEnvironmentOptions::put_EnableTrackingPrevention](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclusterenvironmentoptions?view=webview2-1.0.4255-prerelease&preserve-view=true#put_enabletrackingprevention)
  * [ICoreWebView2ExperimentalClusterEnvironmentOptions::put_Language](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclusterenvironmentoptions?view=webview2-1.0.4255-prerelease&preserve-view=true#put_language)
  * [ICoreWebView2ExperimentalClusterEnvironmentOptions::put_PerHostProfileIsolation](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclusterenvironmentoptions?view=webview2-1.0.4255-prerelease&preserve-view=true#put_perhostprofileisolation)
  * [ICoreWebView2ExperimentalClusterEnvironmentOptions::put_ReleaseChannels](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclusterenvironmentoptions?view=webview2-1.0.4255-prerelease&preserve-view=true#put_releasechannels)
  * [ICoreWebView2ExperimentalClusterEnvironmentOptions::SetCustomSchemeRegistrations](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclusterenvironmentoptions?view=webview2-1.0.4255-prerelease&preserve-view=true#setcustomschemeregistrations)

* [ICoreWebView2ExperimentalCreateOrJoinClusterEnvironmentCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcreateorjoinclusterenvironmentcompletedhandler?view=webview2-1.0.4255-prerelease&preserve-view=true)

* [ICoreWebView2ExperimentalFrame10](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframe10?view=webview2-1.0.4255-prerelease&preserve-view=true)
  * [ICoreWebView2ExperimentalFrame10::add_LaunchingExternalUriScheme](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframe10?view=webview2-1.0.4255-prerelease&preserve-view=true#add_launchingexternalurischeme)
  * [ICoreWebView2ExperimentalFrame10::remove_LaunchingExternalUriScheme](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframe10?view=webview2-1.0.4255-prerelease&preserve-view=true#remove_launchingexternalurischeme)

* [ICoreWebView2ExperimentalFrameLaunchingExternalUriSchemeEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframelaunchingexternalurischemeeventhandler?view=webview2-1.0.4255-prerelease&preserve-view=true)

* [ICoreWebView2ExperimentalLaunchingExternalUriSchemeEventArgs2](/microsoft-edge/webview2/reference/win32/icorewebview2experimentallaunchingexternalurischemeeventargs2?view=webview2-1.0.4255-prerelease&preserve-view=true)
  * [ICoreWebView2ExperimentalLaunchingExternalUriSchemeEventArgs2::get_Handled](/microsoft-edge/webview2/reference/win32/icorewebview2experimentallaunchingexternalurischemeeventargs2?view=webview2-1.0.4255-prerelease&preserve-view=true#get_handled)
  * [ICoreWebView2ExperimentalLaunchingExternalUriSchemeEventArgs2::put_Handled](/microsoft-edge/webview2/reference/win32/icorewebview2experimentallaunchingexternalurischemeeventargs2?view=webview2-1.0.4255-prerelease&preserve-view=true#put_handled)

* [COREWEBVIEW2_CLUSTER_ENVIRONMENT_STATUS Enum](/microsoft-edge/webview2/reference/win32/webview2-idl-experimental?view=webview2-1.0.4255-prerelease&preserve-view=true#corewebview2_cluster_environment_status)
  * `COREWEBVIEW2_CLUSTER_ENVIRONMENT_STATUS_NOT_SUPPORTED`
  * `COREWEBVIEW2_CLUSTER_ENVIRONMENT_STATUS_OPTIONS_MISMATCH`
  * `COREWEBVIEW2_CLUSTER_ENVIRONMENT_STATUS_SUCCEEDED`

---


<!-- ====================================================================== -->
## See also

* [Preview Runtime 154.0.4255.0 (Sep. 3, 2026)](../runtime/154.md)
* [Release notes for WebView2](../index.md)
   * [Release notes for the WebView2 Runtime](../runtime/index.md)
   * [Release notes for WebView2 SDKs](./index.md)
