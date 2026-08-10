---
title: SDK 1.0.3908-prerelease, for Runtime 147 (Mar. 16, 2026)
description: Release notes for Microsoft Edge WebView2 SDK 1.0.3908-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 06/11/2026
---
# SDK 1.0.3908-prerelease, for Runtime 147 (Mar. 16, 2026)

Release Date: Mar. 16, 2026

[NuGet package for WebView2 SDK 1.0.3908-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3908-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 147.0.3908.0 or later.


<!-- ====================================================================== -->
## Promotions to Phase 2 (Stable in Prerelease)

The following APIs skipped Phase 1: Experimental in Prerelease, and have been directly added to Phase 2: Stable in Prerelease, and are included in this Prerelease SDK.


<!-- ------------------------------ -->
#### Manage persistent storage permissions for web content

The `PersistentStorage` permission allows a WebView2 app to handle requests from web content to persist data that's created by Storage APIs, service workers, and related technologies.  The `PersistentStorage` permission is an enum member in the `CoreWebView2PermissionKind` enum.

When this permission is granted, the browser doesn't evict stored data during low-disk-space scenarios.  This ensures reliable offline and caching behavior for the site.

<!-- not found:
Previous phase: [~](./~.md#~) in _~_.
-->

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2PermissionKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionkind?view=webview2-dotnet-1.0.3908-prerelease&preserve-view=true)
   * `PersistentStorage`

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2PermissionKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionkind?view=webview2-winrt-1.0.3908-prerelease&preserve-view=true)
   * `PersistentStorage`

##### [Win32/C++](#tab/win32cpp)

* [COREWEBVIEW2_PERMISSION_KIND enum](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.3908-prerelease&preserve-view=true#corewebview2_permission_kind)
   * `COREWEBVIEW2_PERMISSION_KIND_PERSISTENT_STORAGE`

---


<!-- ====================================================================== -->
## See also

* [Release notes for the WebView2 SDK](./index.md)
