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
#### Permission kind: new enum members: LocalNetwork and LoopbackNetwork

WebView2 adds separate permissions for accessing local-network devices (such as printers), and services running on the same computer (such as localhost).  An app can allow one type of access while blocking the other, by using the new members of the `CoreWebView2PermissionKind` enum: `LocalNetwork` and `LoopbackNetwork`.

When web content requests access, the app receives a `PermissionRequested` event.  Use the event arguments' `CoreWebView2PermissionKind` to identify the type of access, then set `CoreWebView2PermissionState` (enum) to either `Allow` or `Deny`.  An app can also use `SetPermissionState` to save a permission for a website's origin, such as `https://example.com`.  Service workers and shared workers require a stored grant; they do not raise a `PermissionRequested` event.

To use `LocalNetwork` and `LoopbackNetwork`, set `AdditionalBrowserArguments` to `--enable-features=msWebViewAllowLocalNetworkAccessChecks` in the environment options, before creating the WebView2 environment.  The feature remains off by default, while we gather feedback during the initial rollout.  We plan to enable this feature by default, after feedback and validation demonstrate its readiness.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2PermissionKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionkind?view=webview2-dotnet-1.0.4392-prerelease&preserve-view=true)
   * `LocalNetwork` - new enum member.
   * `LoopbackNetwork` - new enum member.

Use the above new enum members along with the following APIs:

* `CoreWebView2EnvironmentOptions.AdditionalBrowserArguments` property — Enables LNA checks.

* `CoreWebView2.PermissionRequested` event - Registers the app's permission handler.

* `CoreWebView2PermissionRequestedEventArgs.PermissionKind` and `CoreWebView2PermissionRequestedEventArgs.PermissionKind.State` — Identify the requested access and allow or deny it.

* `CoreWebView2Profile.SetPermissionState` — Configures a permission by passing in the permission kind, website origin, desired state, and completion handler.  Wait for completion before starting network requests.

<!-- todo: completion of what? 3x -->

##### [WinRT/C#](#tab/winrtcsharp)

_todo - fill in tab like .net tab?  "No WinRT API diffs."_

Use the above new enum members along with the following APIs:

* `CoreWebView2EnvironmentOptions.AdditionalBrowserArguments` property — Enables LNA checks.

* `CoreWebView2.PermissionRequested` event - Registers the app's permission handler.

* `CoreWebView2PermissionRequestedEventArgs.PermissionKind` and `CoreWebView2PermissionRequestedEventArgs.PermissionKind.State` — Identify the requested access and allow or deny it.

* `CoreWebView2Profile.SetPermissionState` — Configures a permission by passing in the permission kind, website origin, desired state, and completion handler.  Wait for completion before starting network requests.

##### [Win32/C++](#tab/win32cpp)

* [COREWEBVIEW2_PERMISSION_KIND enum](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.4392-prerelease&preserve-view=true#corewebview2_permission_kind)
   * `COREWEBVIEW2_PERMISSION_KIND_LOCAL_NETWORK` - new enum member.
   * `COREWEBVIEW2_PERMISSION_KIND_LOOPBACK_NETWORK` - new enum member.

Use the above new enum members along with the following APIs:

* `ICoreWebView2EnvironmentOptions::put_AdditionalBrowserArguments` property — Enables LNA checks.

* `ICoreWebView2::add_PermissionRequested` event - Registers the app's permission handler.

* `ICoreWebView2PermissionRequestedEventArgs::get_PermissionKind` and `put_State` — Identify the requested access and allow or deny it.

* `ICoreWebView2Profile4::SetPermissionState` — Configures a permission by passing in the permission kind, website origin, desired state, and completion handler.  Wait for completion before starting network requests.

---


<!-- ====================================================================== -->
## See also

* [Preview Runtime 159.0.4402.13 (Nov. 21, 2026)](../runtime/159.md)
* [Release notes for WebView2](../index.md)
   * [Release notes for the WebView2 Runtime](../runtime/index.md)
   * [Release notes for WebView2 SDKs](./index.md)
