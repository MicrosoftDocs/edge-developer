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

**Detailed contents:**
* [Experimental APIs (Phase 1: Experimental in Prerelease)](#experimental-apis-phase-1-experimental-in-prerelease)
   * [Frame-level LaunchingExternalUriScheme API](#frame-level-launchingexternalurischeme-api)
   * [Shared Cluster Environment API](#shared-cluster-environment-api)
* [See also](#see-also)


<!-- ====================================================================== -->
## Experimental APIs (Phase 1: Experimental in Prerelease)

The following APIs are in Phase 1: Experimental in Prerelease, and have been added in this Prerelease SDK.


<!-- ------------------------------ -->
#### Frame-level LaunchingExternalUriScheme API

The `LaunchingExternalUriScheme` event is now also raised on `CoreWebView2Frame`, in addition to `CoreWebView2`.  This lets a host attribute an external-URI-scheme launch (such as  `mailto:`, `tel:`, or a custom protocol) to the specific `iframe` that initiated it.  This is useful when multiple sub-apps are hosted in iframes, including when iframes share the same origin.

The `LaunchingExternalUriScheme` event is raised when content in a `frame`, or in an `iframe` nested within it, attempts to launch an external URI scheme.  When the launch originates from a nested `iframe`, the event bubbles outward through the tracked `CoreWebView2Frame` ancestors — starting with the closest (innermost) tracked frame, and proceeding toward the top-level frame — and finally to `CoreWebView2`.  The event sender for each invocation is the `CoreWebView2Frame` receiving the event.

`CoreWebView2LaunchingExternalUriSchemeEventArgs` has a new `Handled` property.  Frame-level handlers are invoked before the `CoreWebView2`-level handlers; if a frame-level handler sets `Handled` to `TRUE`, the event is not raised on the remaining ancestor frames or on `CoreWebView2`.  `Cancel` continues to control whether the URI is launched, while `Handled` controls whether the remaining handlers are invoked.  Args (including `Cancel` and `Handled`) are shared across tiers; to suppress the WebView-level handlers when taking a `Deferral`, set `Handled` before taking the deferral.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2Frame` Class:
   * [CoreWebView2Frame.LaunchingExternalUriScheme Event](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.launchingexternalurischeme?view=webview2-dotnet-1.0.4255-prerelease&preserve-view=true)

* `CoreWebView2LaunchingExternalUriSchemeEventArgs` Class:
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.Handled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2launchingexternalurischemeeventargs.handled?view=webview2-dotnet-1.0.4255-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2Frame` Class:
   * [CoreWebView2Frame.LaunchingExternalUriScheme Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame?view=webview2-winrt-1.0.4255-prerelease&preserve-view=true#launchingexternalurischeme)

* `CoreWebView2LaunchingExternalUriSchemeEventArgs` Class:
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.Handled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2launchingexternalurischemeeventargs?view=webview2-winrt-1.0.4255-prerelease&preserve-view=true#handled)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalFrame10](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframe10?view=webview2-1.0.4255-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalFrame10::add_LaunchingExternalUriScheme](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframe10?view=webview2-1.0.4255-prerelease&preserve-view=true#add_launchingexternalurischeme)
   * [ICoreWebView2ExperimentalFrame10::remove_LaunchingExternalUriScheme](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframe10?view=webview2-1.0.4255-prerelease&preserve-view=true#remove_launchingexternalurischeme)

<!-- win32-only -->
* [ICoreWebView2ExperimentalFrameLaunchingExternalUriSchemeEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframelaunchingexternalurischemeeventhandler?view=webview2-1.0.4255-prerelease&preserve-view=true)

* [ICoreWebView2ExperimentalLaunchingExternalUriSchemeEventArgs2](/microsoft-edge/webview2/reference/win32/icorewebview2experimentallaunchingexternalurischemeeventargs2?view=webview2-1.0.4255-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalLaunchingExternalUriSchemeEventArgs2::get_Handled](/microsoft-edge/webview2/reference/win32/icorewebview2experimentallaunchingexternalurischemeeventargs2?view=webview2-1.0.4255-prerelease&preserve-view=true#get_handled)
   * [ICoreWebView2ExperimentalLaunchingExternalUriSchemeEventArgs2::put_Handled](/microsoft-edge/webview2/reference/win32/icorewebview2experimentallaunchingexternalurischemeeventargs2?view=webview2-1.0.4255-prerelease&preserve-view=true#put_handled)

---


<!-- ------------------------------ -->
#### Shared Cluster Environment API

The Shared Cluster Environment API lets cooperating host applications explicitly share a WebView2 environment, including one browser process and one user data folder, by agreeing on a `ClusterName`.  Applications don't supply a user data folder path; the WebView2 Runtime derives it from the cluster name.

A host app calls `CoreWebView2Environment.CreateOrJoinClusterEnvironmentAsync` with a `CoreWebView2ClusterEnvironmentOptions` instance.  The first host to establish the cluster determines its process-wide options.  Later hosts join when their options match.  These options remain authoritative for as long as the shared browser process is running; after it exits, the next host can establish the cluster with different options.

The above operation returns a `CoreWebView2ClusterEnvironmentCreateResult` containing a `Status` and, on success, the shared `CoreWebView2Environment`.  Possible values of `Status`:

* `Succeeded` indicates success.  A shared `CoreWebView2Environment` is created and returned.

* `OptionsMismatch` indicates that a running cluster has different options.  A shared `CoreWebView2Environment` isn't created and returned.

* `NotSupported` indicates that the host cannot use cluster environments, such as a sandboxed `AppContainer` process.  A shared `CoreWebView2Environment` isn't created and returned.

Failures to start or complete the operation are reported separately as exceptions in .NET and WinRT, or failing `HRESULT` return values in Win32.

Call `CoreWebView2Environment.GetClusterEnvironmentOptions` to read a running cluster's options without launching a browser.  It returns `null` when no cluster is running or the host cannot use cluster environments.  The recommended flow is to read the current options, reuse them if available, and then create or join.  Because another host can establish a cluster between these calls, applications must still handle `OptionsMismatch` by reading the options again and retrying, or by using a private environment.

`PerHostProfileIsolation` is enabled by default and namespaces profile names per host application to prevent accidental profile sharing.  This isn't a security boundary; cluster members must trust one another.  Sharing is supported within the same user and logon session, with hosts using the same integrity level, elevation state, and resolved WebView2 Runtime.  Applications should check runtime support and fall back to a private environment when the API is unavailable.

See the [Shared WebView2 Cluster Environment](https://github.com/MicrosoftEdge/WebView2Feedback/blob/main/specs/SharedClusterEnvironment.md) API specification.

##### [.NET/C#](#tab/dotnetcsharp)

<!-- 1 -->
* [CoreWebView2ClusterEnvironmentCreateResult Class](/dotnet/api/microsoft.web.webview2.core.corewebview2clusterenvironmentcreateresult?view=webview2-dotnet-1.0.4255-prerelease&preserve-view=true)
   * [CoreWebView2ClusterEnvironmentCreateResult.Environment Property](/dotnet/api/microsoft.web.webview2.core.corewebview2clusterenvironmentcreateresult.environment?view=webview2-dotnet-1.0.4255-prerelease&preserve-view=true)
   * [CoreWebView2ClusterEnvironmentCreateResult.Status Property](/dotnet/api/microsoft.web.webview2.core.corewebview2clusterenvironmentcreateresult.status?view=webview2-dotnet-1.0.4255-prerelease&preserve-view=true)

<!-- 2 -->
* [CoreWebView2ClusterEnvironmentOptions Class](/dotnet/api/microsoft.web.webview2.core.corewebview2clusterenvironmentoptions?view=webview2-dotnet-1.0.4255-prerelease&preserve-view=true)
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

<!-- 3 -->
* [CoreWebView2ClusterEnvironmentStatus Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2clusterenvironmentstatus?view=webview2-dotnet-1.0.4255-prerelease&preserve-view=true)
   * `NotSupported`
   * `OptionsMismatch`
   * `Succeeded`

<!-- 4 -->
* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.CreateOrJoinClusterEnvironmentAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createorjoinclusterenvironmentasync?view=webview2-dotnet-1.0.4255-prerelease&preserve-view=true)
   * [CoreWebView2Environment.GetClusterEnvironmentOptions Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.getclusterenvironmentoptions?view=webview2-dotnet-1.0.4255-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

<!-- 1 -->
* [CoreWebView2ClusterEnvironmentCreateResult Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2clusterenvironmentcreateresult?view=webview2-winrt-1.0.4255-prerelease&preserve-view=true)
   * [CoreWebView2ClusterEnvironmentCreateResult.Environment Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2clusterenvironmentcreateresult?view=webview2-winrt-1.0.4255-prerelease&preserve-view=true#environment)
   * [CoreWebView2ClusterEnvironmentCreateResult.Status Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2clusterenvironmentcreateresult?view=webview2-winrt-1.0.4255-prerelease&preserve-view=true#status)

<!-- 2 -->
* [CoreWebView2ClusterEnvironmentOptions Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2clusterenvironmentoptions?view=webview2-winrt-1.0.4255-prerelease&preserve-view=true)
   * [CoreWebView2ClusterEnvironmentOptions.AdditionalBrowserArguments Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2clusterenvironmentoptions?view=webview2-winrt-1.0.4255-prerelease&preserve-view=true#additionalbrowserarguments)
   * [CoreWebView2ClusterEnvironmentOptions.AllowSingleSignOnUsingOSPrimaryAccount Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2clusterenvironmentoptions?view=webview2-winrt-1.0.4255-prerelease&preserve-view=true#allowsinglesignonusingosprimaryaccount)
   * [CoreWebView2ClusterEnvironmentOptions.AreBrowserExtensionsEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2clusterenvironmentoptions?view=webview2-winrt-1.0.4255-prerelease&preserve-view=true#arebrowserextensionsenabled)
   * [CoreWebView2ClusterEnvironmentOptions.ChannelSearchKind Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2clusterenvironmentoptions?view=webview2-winrt-1.0.4255-prerelease&preserve-view=true#channelsearchkind)
   * [CoreWebView2ClusterEnvironmentOptions.ClusterName Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2clusterenvironmentoptions?view=webview2-winrt-1.0.4255-prerelease&preserve-view=true#clustername)
   * [CoreWebView2ClusterEnvironmentOptions.CustomSchemeRegistrations Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2clusterenvironmentoptions?view=webview2-winrt-1.0.4255-prerelease&preserve-view=true#customschemeregistrations)
   * [CoreWebView2ClusterEnvironmentOptions.EnableTrackingPrevention Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2clusterenvironmentoptions?view=webview2-winrt-1.0.4255-prerelease&preserve-view=true#enabletrackingprevention)
   * [CoreWebView2ClusterEnvironmentOptions.Language Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2clusterenvironmentoptions?view=webview2-winrt-1.0.4255-prerelease&preserve-view=true#language)
   * [CoreWebView2ClusterEnvironmentOptions.PerHostProfileIsolation Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2clusterenvironmentoptions?view=webview2-winrt-1.0.4255-prerelease&preserve-view=true#perhostprofileisolation)
   * [CoreWebView2ClusterEnvironmentOptions.ReleaseChannels Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2clusterenvironmentoptions?view=webview2-winrt-1.0.4255-prerelease&preserve-view=true#releasechannels)

<!-- 3 -->
* [CoreWebView2ClusterEnvironmentStatus Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2clusterenvironmentstatus?view=webview2-winrt-1.0.4255-prerelease&preserve-view=true)
   * `NotSupported`
   * `OptionsMismatch`
   * `Succeeded`

<!-- 4 -->
* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.CreateOrJoinClusterEnvironmentAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.4255-prerelease&preserve-view=true#createorjoinclusterenvironmentasync)
   * [CoreWebView2Environment.GetClusterEnvironmentOptions Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.4255-prerelease&preserve-view=true#getclusterenvironmentoptions)

##### [Win32/C++](#tab/win32cpp)

<!-- 1 -->
* [ICoreWebView2ExperimentalClusterEnvironmentCreateResult](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclusterenvironmentcreateresult?view=webview2-1.0.4255-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalClusterEnvironmentCreateResult::get_Environment](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclusterenvironmentcreateresult?view=webview2-1.0.4255-prerelease&preserve-view=true#get_environment)
   * [ICoreWebView2ExperimentalClusterEnvironmentCreateResult::get_Status](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclusterenvironmentcreateresult?view=webview2-1.0.4255-prerelease&preserve-view=true#get_status)

<!-- 2 -->
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

<!-- win32-only -->
* [ICoreWebView2ExperimentalCreateOrJoinClusterEnvironmentCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcreateorjoinclusterenvironmentcompletedhandler?view=webview2-1.0.4255-prerelease&preserve-view=true)

<!-- 4 -->
_todo: add # suffix? confirm iface name and method names_
* `ICoreWebView2ExperimentalEnvironment`:
   * [ICoreWebView2ExperimentalEnvironment::CreateOrJoinCoreWebView2ClusterEnvironment](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment?view=webview2-1.0.4255-prerelease&preserve-view=true#createorjoincorewebview2clusterenvironment)
   * [ICoreWebView2ExperimentalEnvironment::GetCoreWebView2ClusterEnvironmentOptions](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment?view=webview2-1.0.4255-prerelease&preserve-view=true#getcorewebview2clusterenvironmentoptions)

<!-- 3 -->
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
