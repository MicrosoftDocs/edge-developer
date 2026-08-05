---
title: Prerelease SDK 1.0.3712-prerelease, for Runtime 144 - SDK (Dec. 8, 2025)
description: Release notes for Microsoft Edge WebView2, for Prerelease SDK 1.0.3712-prerelease - SDK.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 06/11/2026
---
# Prerelease SDK 1.0.3712-prerelease, for Runtime 144 - SDK (Dec. 8, 2025)

Release Date: Dec. 8, 2025

[NuGet package for WebView2 SDK 1.0.3712-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3712-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 144.0.3712.0 or later.

**Detailed contents:**
* [Experimental APIs (Phase 1: Experimental in Prerelease)](#experimental-apis-phase-1-experimental-in-prerelease)
   * [Customize port range behavior](#customize-port-range-behavior)
* [Promotions to Phase 2 (Stable in Prerelease)](#promotions-to-phase-2-stable-in-prerelease)
   * [Customize the drag and drop behavior (DragStarting API)](#customize-the-drag-and-drop-behavior-dragstarting-api)
* [See also](#see-also)


<!-- ====================================================================== -->
## Experimental APIs (Phase 1: Experimental in Prerelease)

The following APIs are in Phase 1: Experimental in Prerelease, and have been added in this Prerelease SDK.


<!-- ------------------------------ -->
#### Customize port range behavior

The Allowed Port Range APIs enable restricting or customizing the network port ranges that WebView2 can use for various transport protocols and scopes.  This provides enhanced security control.

* Use `SetAllowedPortRange` on the `CoreWebView2EnvironmentOptions` (or `ICoreWebView2ExperimentalEnvironmentOptions`) instance to configure port restrictions during environment creation.

   * Use the `scope` parameter to specify whether the configuration applies to all components (`Default`) or only to WebRTC peer-to-peer connections (`WebRtc`).  Currently only `WebRtc` is supported.

   * Use the `protocol` parameter to specify the transport protocol (currently supports `Udp`).

   * Specify `minPort` and `maxPort` values between 1025-65535 (inclusive), or use (0,0) to reset/remove restrictions.

* Use `GetEffectiveAllowedPortRange` on the `CoreWebView2EnvironmentOptions` (or `ICoreWebView2ExperimentalEnvironmentOptions`) instance to retrieve the active port range configuration for a specific scope and protocol.

   * Returns the explicitly set range for the given scope, or inherits from the `Default` scope if not set.

   * Returns (0,0) if no restrictions are configured for the specified scope.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2EnvironmentOptions` Class
   * [CoreWebView2EnvironmentOptions.GetEffectiveAllowedPortRange Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.geteffectiveallowedportrange?view=webview2-dotnet-1.0.3712-prerelease&preserve-view=true)
   * [CoreWebView2EnvironmentOptions.SetAllowedPortRange Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.setallowedportrange?view=webview2-dotnet-1.0.3712-prerelease&preserve-view=true)

* [CoreWebView2AllowedPortRangeScope Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2allowedportrangescope?view=webview2-dotnet-1.0.3712-prerelease&preserve-view=true)
   * `CoreWebView2AllowedPortRangeScope.Default`
   * `CoreWebView2AllowedPortRangeScope.WebRtc`

* [CoreWebView2TransportProtocolKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2transportprotocolkind?view=webview2-dotnet-1.0.3712-prerelease&preserve-view=true)
   * `CoreWebView2TransportProtocolKind.Udp`

##### [WinRT/C#](#tab/winrtcsharp)

N/A

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalEnvironmentOptions](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironmentoptions?view=webview2-1.0.3712-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalEnvironmentOptions::GetEffectiveAllowedPortRange](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironmentoptions?view=webview2-1.0.3712-prerelease&preserve-view=true#geteffectiveallowedportrange)
   * [ICoreWebView2ExperimentalEnvironmentOptions::SetAllowedPortRange](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironmentoptions?view=webview2-1.0.3712-prerelease&preserve-view=true#setallowedportrange)

* [COREWEBVIEW2_ALLOWED_PORT_RANGE_SCOPE Enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.3712-prerelease&preserve-view=true#corewebview2_allowed_port_range_scope)
  * `COREWEBVIEW2_ALLOWED_PORT_RANGE_SCOPE_DEFAULT`
  * `COREWEBVIEW2_ALLOWED_PORT_RANGE_SCOPE_WEB_RTC`

* [COREWEBVIEW2_TRANSPORT_PROTOCOL_KIND enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.3712-prerelease&preserve-view=true#corewebview2_transport_protocol_kind)
  * `COREWEBVIEW2_TRANSPORT_PROTOCOL_KIND_UDP`

---


<!-- ====================================================================== -->
## Promotions to Phase 2 (Stable in Prerelease)

The following APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, and are included in this Prerelease SDK.


<!-- ------------------------------ -->
#### Customize the drag and drop behavior (DragStarting API)

The `DragStarting` API overrides the default drag and drop behavior when running in visual hosting mode.  The `DragStarting` event notifies your app when the user starts a drag operation in the WebView2, and provides the state that's necessary to override the default WebView2 drag operation with your own logic.

* Use `DragStarting` on the `ICoreWebView2CompositionController5` to add an event handler that's invoked when the drag operation is starting.
* Use `ICoreWebView2DragStartingEventArgs` to start your own drag operation.
   * Use the `GetDeferral` method to execute any async drag logic and call back into the WebView at a later time.
   * Use the `Handled` property to let the WebView2 know whether to use its own drag logic.

Previous phase: [Customize the drag and drop behavior (DragStarting API)](./1-0-3079-prerelease.md#customize-the-drag-and-drop-behavior-dragstarting-api) in _Prerelease SDK 1.0.3079-prerelease, for Runtime 134 (Jan. 24, 2025)_.

##### [.NET/C#](#tab/dotnetcsharp)

N/A

##### [WinRT/C#](#tab/winrtcsharp)

N/A

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2CompositionController5](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller5?view=webview2-1.0.3712-prerelease&preserve-view=true)
  * [ICoreWebView2CompositionController5::add_DragStarting](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller5?view=webview2-1.0.3712-prerelease&preserve-view=true#add_dragstarting)
  * [ICoreWebView2CompositionController5::remove_DragStarting](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller5?view=webview2-1.0.3712-prerelease&preserve-view=true#remove_dragstarting)

<!-- exception: rt interop docs -->
* [ICoreWebView2CompositionControllerInterop3](/microsoft-edge/webview2/reference/winrt/interop/icorewebview2compositioncontrollerinterop3?view=webview2-winrt-1.0.3712-prerelease&preserve-view=true)
  * [ICoreWebView2CompositionControllerInterop3::add_DragStarting](/microsoft-edge/webview2/reference/winrt/interop/icorewebview2compositioncontrollerinterop3?view=webview2-winrt-1.0.3712-prerelease&preserve-view=true#add_dragstarting)
  * [ICoreWebView2CompositionControllerInterop3::remove_DragStarting](/microsoft-edge/webview2/reference/winrt/interop/icorewebview2compositioncontrollerinterop3?view=webview2-winrt-1.0.3712-prerelease&preserve-view=true#remove_dragstarting)

* [ICoreWebView2DragStartingEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2dragstartingeventargs?view=webview2-1.0.3712-prerelease&preserve-view=true)
  * [ICoreWebView2DragStartingEventArgs::get_AllowedDropEffects](/microsoft-edge/webview2/reference/win32/icorewebview2dragstartingeventargs?view=webview2-1.0.3712-prerelease&preserve-view=true#get_alloweddropeffects)
  * [ICoreWebView2DragStartingEventArgs::get_Data](/microsoft-edge/webview2/reference/win32/icorewebview2dragstartingeventargs?view=webview2-1.0.3712-prerelease&preserve-view=true#get_data)
  * [ICoreWebView2DragStartingEventArgs::get_Handled](/microsoft-edge/webview2/reference/win32/icorewebview2dragstartingeventargs?view=webview2-1.0.3712-prerelease&preserve-view=true#get_handled)
  * [ICoreWebView2DragStartingEventArgs::get_Position](/microsoft-edge/webview2/reference/win32/icorewebview2dragstartingeventargs?view=webview2-1.0.3712-prerelease&preserve-view=true#get_position)
  * [ICoreWebView2DragStartingEventArgs::GetDeferral](/microsoft-edge/webview2/reference/win32/icorewebview2dragstartingeventargs?view=webview2-1.0.3712-prerelease&preserve-view=true#getdeferral)
  * [ICoreWebView2DragStartingEventArgs::put_Handled](/microsoft-edge/webview2/reference/win32/icorewebview2dragstartingeventargs?view=webview2-1.0.3712-prerelease&preserve-view=true#put_handled)

* [ICoreWebView2DragStartingEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2dragstartingeventhandler?view=webview2-1.0.3712-prerelease&preserve-view=true)

---


<!-- ====================================================================== -->
## See also

* [Release notes for the WebView2 SDK](./index.md)
