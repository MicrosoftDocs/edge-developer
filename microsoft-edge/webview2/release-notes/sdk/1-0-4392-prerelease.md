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
* [Bug fixes](#bug-fixes)
* [See also](#see-also)


<!-- ====================================================================== -->
## Promotions to Phase 2 (Stable in Prerelease)

The following APIs skipped Phase 1: Experimental in Prerelease, and have been directly added to Phase 2: Stable in Prerelease, and are included in this Prerelease SDK.


<!-- ------------------------------ -->
#### Permission kind: new enum members: LocalNetwork and LoopbackNetwork

_todo: finalize heading_

_todo: add desc_

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2PermissionKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionkind?view=webview2-dotnet-1.0.4392-prerelease&preserve-view=true)
   * `LocalNetwork` - new enum member.
   * `LoopbackNetwork` - new enum member.

##### [WinRT/C#](#tab/winrtcsharp)

_todo - fill in tab like .net tab?  "No WinRT API diffs."_

##### [Win32/C++](#tab/win32cpp)

* [COREWEBVIEW2_PERMISSION_KIND enum](/webview2/reference/win32/webview2-idl?view=webview2-1.0.4392-prerelease&preserve-view=true#corewebview2_permission_kind)<!-- not at https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.4392-prerelease b/c adding new members to existing enum -->
   * `COREWEBVIEW2_PERMISSION_KIND_LOCAL_NETWORK` - new enum member.
   * `COREWEBVIEW2_PERMISSION_KIND_LOOPBACK_NETWORK` - new enum member.

---


<!-- ====================================================================== -->
## See also

* [Preview Runtime 159.0.4402.13 (Nov. 21, 2026)](../runtime/159.md)
* [Release notes for WebView2](../index.md)
   * [Release notes for the WebView2 Runtime](../runtime/index.md)
   * [Release notes for WebView2 SDKs](./index.md)
