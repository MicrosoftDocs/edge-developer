---
title: Prerelease SDK 1.0.4392-prerelease, for Runtime 159 (Nov. 11, 2026)
description: Release notes for Microsoft Edge WebView2 SDK 1.0.4392-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 11/11/2026
---
# Prerelease SDK 1.0.4392-prerelease, for Runtime 159 (Nov. 11, 2026)

Release notes for Microsoft Edge WebView2 Prerelease SDK, release date: Nov. 11, 2026.

[NuGet package for WebView2 SDK 1.0.4392-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.4392-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 159.0.4392.0 or later; see [Preview Runtime 159.0.4402.13 (Nov. 21, 2026)](../runtime/159.md).

**Detailed contents:**
* [Promotions to Phase 2 (Stable in Prerelease)](#promotions-to-phase-2-stable-in-prerelease)
   * [Permission kind: new enum members: LocalNetwork and LoopbackNetwork](#permission-kind-new-enum-members-localnetwork-and-loopbacknetwork)
* [See also](#see-also)


<!-- ====================================================================== -->
## Promotions to Phase 2 (Stable in Prerelease)

The following APIs skipped Phase 1: Experimental in Prerelease, and have been directly added to Phase 2: Stable in Prerelease, and are included in this Prerelease SDK.


<!-- ------------------------------ -->
#### Separate permissions for accessing local-network devices vs. services running on the same computer

There are now separate permissions for accessing local-network devices (such as printers), and services running on the same computer (such as localhost).  To allow one type of access while blocking the other type of access, use the new members of the `CoreWebView2PermissionKind` enum: `LocalNetwork` and `LoopbackNetwork`, as follows.

When web content requests access, the app receives a `PermissionRequested` event.  Use the event arguments' `CoreWebView2PermissionKind` to identify the type of access, then set `CoreWebView2PermissionState` (enum) to either `Allow` or `Deny`.  An app can also use `SetPermissionState` to save a permission for a website's origin, such as `https://example.com`.  Service workers and shared workers require a stored grant; they do not raise a `PermissionRequested` event.

To use `LocalNetwork` and `LoopbackNetwork`, set `AdditionalBrowserArguments` to `--enable-features=msWebViewAllowLocalNetworkAccessChecks` in the environment options, before creating the WebView2 environment.  The feature remains off by default, while we gather feedback during the initial rollout.  We plan to enable this feature by default, after feedback and validation demonstrate its readiness.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2PermissionKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionkind?view=webview2-dotnet-1.0.4392-prerelease&preserve-view=true)
   * `LocalNetwork` - new enum member.
   * `LoopbackNetwork` - new enum member.

Use the above new enum members along with the following APIs:

* `CoreWebView2EnvironmentOptions.AdditionalBrowserArguments` — Enable local network access (LNA) checks.

* `CoreWebView2PermissionRequestedEventArgs`:
   * `CoreWebView2PermissionRequestedEventArgs.PermissionKind` — Identify the requested access.
   * `CoreWebView2PermissionRequestedEventArgs.State` — Allow or deny the requested access.

* `CoreWebView2Profile.SetPermissionStateAsync` — Configure a permission by passing in the permission kind, website origin, and desired state.

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2PermissionKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionkind?view=webview2-winrt-1.0.4392-prerelease&preserve-view=true)
   * `LocalNetwork` - new enum member.
   * `LoopbackNetwork` - new enum member.

Use the above new enum members along with the following APIs:

* `CoreWebView2EnvironmentOptions.AdditionalBrowserArguments` — Enable local network access (LNA) checks.

* `CoreWebView2PermissionRequestedEventArgs`:
   * `CoreWebView2PermissionRequestedEventArgs.PermissionKind` — Identify the requested access.
   * `CoreWebView2PermissionRequestedEventArgs.State` — Allow or deny the requested access.

* `CoreWebView2Profile.SetPermissionStateAsync` — Configure a permission by passing in the permission kind, website origin, and desired state.

##### [Win32/C++](#tab/win32cpp)

* [COREWEBVIEW2_PERMISSION_KIND enum](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.4392-prerelease&preserve-view=true#corewebview2_permission_kind)
   * `COREWEBVIEW2_PERMISSION_KIND_LOCAL_NETWORK` - new enum member.
   * `COREWEBVIEW2_PERMISSION_KIND_LOOPBACK_NETWORK` - new enum member.

Use the above new enum members along with the following APIs:

* `ICoreWebView2EnvironmentOptions::put_AdditionalBrowserArguments` — Enable local network access (LNA) checks.

* `ICoreWebView2::add_PermissionRequested` - Register the app's permission handler.

* `ICoreWebView2PermissionRequestedEventArgs`:
   * `ICoreWebView2PermissionRequestedEventArgs::get_PermissionKind` — Identify the requested access.
   * `ICoreWebView2PermissionRequestedEventArgs::put_State` — Allow or deny the requested access.

* `ICoreWebView2Profile4::SetPermissionState` — Configure a permission by passing in the permission kind, website origin, desired state, and completion handler.  Wait for completion before starting network requests.

---


<!-- ====================================================================== -->
## See also

* [Preview Runtime 159.0.4402.13 (Nov. 21, 2026)](../runtime/159.md)
* [Release notes for WebView2](../index.md)
   * [Release notes for the WebView2 Runtime](../runtime/index.md)
   * [Release notes for WebView2 SDKs](./index.md)
