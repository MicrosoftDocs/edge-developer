---
title: Release notes for the WebView2 SDK
description: Release notes for Microsoft Edge WebView2, covering new features, APIs, and fixes for Win32, WPF, and WinForms.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 12/08/2025
---
# Release notes for the WebView2 SDK

These release notes provide information about new features and bug fixes that are included in the WebView2 Release SDK and the WebView2 Prerelease SDK.

<!-- maintenance:
the templates to copy for incoming sections are in ./includes/templates.md

move h2 sections older than 1 year from present file to archive.md
presently covers: Feb 2025 - Jan 2026
todo: enter ado: pm: update > 1 year old announcements at https://github.com/MicrosoftEdge/WebView2Announcements/issues?q=is%3Aissue%20state%3Aopen%20SDK%20Release to add "archive" suffix in urls

don't update pattern for older h2 headings, b/c would break auto-scrolling; they're linked to from Issues announcement, re: past year
h2's in archive.md (> 1 year old) became non-scrolled-to, and also moved from index.md to archive.md, so user must manually nav to archive page
-->


<!-- Jan 2026 Release SDK (144) -->
<!-- ====================================================================== -->
## Release SDK 1.0.3719.77 for Runtime 144

Release Date: January 23, 2026

[NuGet package for WebView2 SDK 1.0.3719.77](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3719.77)
<!-- todo: add righmost part of url:
[NuGet package for WebView2 SDK 1.0.####.##](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.####.##)
-->

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 144.0.3719.77 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 3 (Stable in Release)

The following APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, and are included in this Prerelease SDK.


<!-- ---------- -->
###### Customize the drag and drop behavior (DragStarting API)

The `DragStarting` API overrides the default drag and drop behavior when running in visual hosting mode.  The `DragStarting` event notifies your app when the user starts a drag operation in the WebView2, and provides the state that's necessary to override the default WebView2 drag operation with your own logic.

* Use `DragStarting` on the `ICoreWebView2CompositionController5` to add an event handler that's invoked when the drag operation is starting.
* Use `ICoreWebView2DragStartingEventArgs` to start your own drag operation.
   * Use the `GetDeferral` method to execute any async drag logic and call back into the WebView at a later time.
   * Use the `Handled` property to let the WebView2 know whether to use its own drag logic.

##### [.NET/C#](#tab/dotnetcsharp)

N/A

##### [WinRT/C#](#tab/winrtcsharp)

N/A

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2CompositionController5](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller5?view=webview2-1.0.3719.77&preserve-view=true)
  * [ICoreWebView2CompositionController5::add_DragStarting](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller5?view=webview2-1.0.3719.77&preserve-view=true#add_dragstarting)
  * [ICoreWebView2CompositionController5::remove_DragStarting](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller5?view=webview2-1.0.3719.77e&preserve-view=true#remove_dragstarting)

<!-- exception: rt interop docs -->
* [ICoreWebView2CompositionControllerInterop3](/microsoft-edge/webview2/reference/winrt/interop/icorewebview2compositioncontrollerinterop3?view=webview2-winrt-1.0.3719.77&preserve-view=true)
  * [ICoreWebView2CompositionControllerInterop3::add_DragStarting](/microsoft-edge/webview2/reference/winrt/interop/icorewebview2compositioncontrollerinterop3?view=webview2-winrt-1.0.3719.77&preserve-view=true#add_dragstarting)
  * [ICoreWebView2CompositionControllerInterop3::remove_DragStarting](/microsoft-edge/webview2/reference/winrt/interop/icorewebview2compositioncontrollerinterop3?view=webview2-winrt-1.0.3719.77&preserve-view=true#remove_dragstarting)

* [ICoreWebView2DragStartingEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2dragstartingeventargs?view=webview2-1.0.3719.77&preserve-view=true)
  * [ICoreWebView2DragStartingEventArgs::get_AllowedDropEffects](/microsoft-edge/webview2/reference/win32/icorewebview2dragstartingeventargs?view=webview2-1.0.3719.77&preserve-view=true#get_alloweddropeffects)
  * [ICoreWebView2DragStartingEventArgs::get_Data](/microsoft-edge/webview2/reference/win32/icorewebview2dragstartingeventargs?view=webview2-1.0.3719.77&preserve-view=true#get_data)
  * [ICoreWebView2DragStartingEventArgs::get_Handled](/microsoft-edge/webview2/reference/win32/icorewebview2dragstartingeventargs?view=webview2-1.0.3719.77&preserve-view=true#get_handled)
  * [ICoreWebView2DragStartingEventArgs::get_Position](/microsoft-edge/webview2/reference/win32/icorewebview2dragstartingeventargs?view=webview2-1.0.3719.77&preserve-view=true#get_position)
  * [ICoreWebView2DragStartingEventArgs::GetDeferral](/microsoft-edge/webview2/reference/win32/icorewebview2dragstartingeventargs?view=webview2-1.0.3719.77&preserve-view=true#getdeferral)
  * [ICoreWebView2DragStartingEventArgs::put_Handled](/microsoft-edge/webview2/reference/win32/icorewebview2dragstartingeventargs?view=webview2-1.0.3719.77&preserve-view=true#put_handled)

* [ICoreWebView2DragStartingEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2dragstartingeventhandler?view=webview2-1.0.3719.77&preserve-view=true)

---


<!-- ------------------------------ -->
#### Bug fixes

This Release SDK includes the following bug fixes.


<!-- ---------- -->
###### Runtime-only

* Fixed chrome.webview unavailability




<!-- end of Jan 2026 Release SDK (144) -->


<!-- Dec 2025 Release SDK -->
<!-- ====================================================================== -->
## 1.0.3650.58

Release Date: December 8, 2025

[NuGet package for WebView2 SDK 1.0.3650.58](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3650.58)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 143.0.3650.58 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 3 (Stable in Release)

No additional APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, in this Release SDK.


<!-- ------------------------------ -->
#### Bug fixes

###### Runtime-only

* Fixed local network access triggering a permission alert pop-up window.<!-- fixed regression; this fix was listed previously -->

<!-- end of Dec 2025 Release SDK -->


<!-- Dec 2025 Prerelease SDK -->
<!-- ====================================================================== -->
## 1.0.3712-prerelease

Release Date: December 8, 2025

[NuGet package for WebView2 SDK 1.0.3712-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3712-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 144.0.3712.0 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 1 (Experimental in Prerelease)

The following APIs are in Phase 1: Experimental in Prerelease, and have been added in this Prerelease SDK.


<!-- ---------- -->
###### Customize port range behavior

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

* [COREWEBVIEW2_TRANSPORT_PROTOCOL_KIND Enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.3712-prerelease&preserve-view=true#corewebview2_transport_protocol_kind)
  * `COREWEBVIEW2_TRANSPORT_PROTOCOL_KIND_UDP`

---


<!-- ------------------------------ -->
#### Promotions to Phase 2 (Stable in Prerelease)

The following APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, and are included in this Prerelease SDK.


<!-- ---------- -->
###### Customize the drag and drop behavior (DragStarting API)

The `DragStarting` API overrides the default drag and drop behavior when running in visual hosting mode.  The `DragStarting` event notifies your app when the user starts a drag operation in the WebView2, and provides the state that's necessary to override the default WebView2 drag operation with your own logic.

* Use `DragStarting` on the `ICoreWebView2CompositionController5` to add an event handler that's invoked when the drag operation is starting.
* Use `ICoreWebView2DragStartingEventArgs` to start your own drag operation.
   * Use the `GetDeferral` method to execute any async drag logic and call back into the WebView at a later time.
   * Use the `Handled` property to let the WebView2 know whether to use its own drag logic.

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

<!-- ------------------------------ -->
#### Bug fixes

This Prerelease SDK includes the following bug fixes.

<!-- ---------- -->
###### Runtime-only

* Fixed local network access triggering a permission alert pop-up window.<!-- fixed regression; this fix was listed previously -->
* Fixed a regression of the `setColorScheme` API.
* Fixed deferred initialization for `ICoreWebView2NewWindowRequestedEventArgs` for the command-line switch `enable-new-window-requested-deferred-initialization`.

<!-- end of Dec 2025 Prerelease SDK -->


<!-- Nov 2025 Release SDK -->
<!-- ====================================================================== -->
## 1.0.3595.46

Release Date: November 3, 2025

[NuGet package for WebView2 SDK 1.0.3595.46](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3595.46)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 142.0.3595.46 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 3 (Stable in Release)

No additional APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, in this Release SDK.


<!-- ------------------------------ -->
#### Bug fixes

This Release SDK includes the following bug fixes.


<!-- ---------- -->
###### Runtime-only

* Disabled creation of a "Speculative Renderer" process.

<!-- end of Nov 2025 Release SDK -->


<!-- Nov 2025 Prerelease SDK -->
<!-- ====================================================================== -->
## 1.0.3650-prerelease

Release Date: November 7, 2025

[NuGet package for WebView2 SDK 1.0.3650-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3650-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 143.0.3650.0 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 1 (Experimental in Prerelease)

No Experimental APIs have been added in this Prerelease SDK.


<!-- ------------------------------ -->
#### Promotions to Phase 2 (Stable in Prerelease)

No APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, in this Prerelease SDK.


<!-- ------------------------------ -->
#### Bug fixes

This Prerelease SDK includes the following bug fixes.


<!-- ---------- -->
###### Runtime-only

* Disabled creation of a "Speculative Renderer" process.
* Fixed a **Find** dialog synchronization issue while programmatically doing a Find.

<!-- end of Nov 2025 Prerelease SDK -->


<!-- Oct 2025 Release SDK -->
<!-- ====================================================================== -->
## 1.0.3537.50

Release Date: October 6, 2025

[NuGet package for WebView2 SDK 1.0.3537.50](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3537.50)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 141.0.3537.50 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 3 (Stable in Release)

No additional APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, in this Release SDK.


<!-- ------------------------------ -->
#### Bug fixes

This Release SDK includes the following bug fixes.


<!-- ---------- -->
###### Runtime-only

* Fixed local network access triggering a permission alert pop-up window.


<!-- ---------- -->
###### SDK-only

* Fixed a BinSkim error for `WebView2Loader.dll`.

<!-- end of Oct 2025 Release SDK -->


<!-- Oct 2025 Prerelease SDK -->
<!-- ====================================================================== -->
## 1.0.3590-prerelease

Release Date: October 7, 2025

[NuGet package for WebView2 SDK 1.0.3590-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3590-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 142.0.3590.0 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 1 (Experimental in Prerelease)

The following APIs are in Phase 1: Experimental in Prerelease, and have been added in this Prerelease SDK.


<!-- ---------- -->
###### Sensitivity label support

A new Sensitivity Info API in WebView2 enables applications to access sensitivity label information communicated by webpages through the [Page Interaction Restriction Manager](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/PageInteractionRestrictionManager/explainer.md).  This feature helps host applications detect and respond to sensitive content.

Key capabilities:

* **Configure Page Interaction Restriction Manager availability** - Configure a list of URL filters for the Page Interaction Restriction Manager.  After the list has been configured, the Page Interaction Restriction Manager becomes available on pages in the allow list.  These pages can send sensitivity labels to the platform via the API.

* **Sensitivity Info exposure** - `CoreWebView2` now exposes a `SensitivityInfo` property and a `SensitivityInfoChanged` event, allowing applications to listen for updates to sensitivity label information.

Sensitivity label support is initially available on Win32 only.  Support for .NET and WinRT is planned for a future release.

##### [.NET/C#](#tab/dotnetcsharp)

Pending.

##### [WinRT/C#](#tab/winrtcsharp)

Pending.

##### [Win32/C++](#tab/win32cpp)

<!-- CoreWebView2 -->
* [ICoreWebView2Experimental32](/microsoft-edge/webview2/reference/win32/icorewebview2experimental32?view=webview2-1.0.3590-prerelease&preserve-view=true)
  * [ICoreWebView2Experimental32::add_SensitivityInfoChanged](/microsoft-edge/webview2/reference/win32/icorewebview2experimental32?view=webview2-1.0.3590-prerelease&preserve-view=true#add_sensitivityinfochanged)
  * [ICoreWebView2Experimental32::get_SensitivityInfo](/microsoft-edge/webview2/reference/win32/icorewebview2experimental32?view=webview2-1.0.3590-prerelease&preserve-view=true#get_sensitivityinfo)
  * [ICoreWebView2Experimental32::remove_SensitivityInfoChanged](/microsoft-edge/webview2/reference/win32/icorewebview2experimental32?view=webview2-1.0.3590-prerelease&preserve-view=true#remove_sensitivityinfochanged)

<!-- CoreWebView2MipSensitivityLabel -->
* [ICoreWebView2ExperimentalMipSensitivityLabel](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalmipsensitivitylabel?view=webview2-1.0.3590-prerelease&preserve-view=true)
  * [ICoreWebView2ExperimentalMipSensitivityLabel::get_LabelId](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalmipsensitivitylabel?view=webview2-1.0.3590-prerelease&preserve-view=true#get_labelid)
  * [ICoreWebView2ExperimentalMipSensitivityLabel::get_OrganizationId](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalmipsensitivitylabel?view=webview2-1.0.3590-prerelease&preserve-view=true#get_organizationid)

<!-- CoreWebView2Profile -->
* [ICoreWebView2ExperimentalProfile14](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile14?view=webview2-1.0.3590-prerelease&preserve-view=true)
  * [ICoreWebView2ExperimentalProfile14::SetPageInteractionRestrictionManagerAllowList](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile14?view=webview2-1.0.3590-prerelease&preserve-view=true#setpageinteractionrestrictionmanagerallowlist)

<!-- CoreWebView2SensitivityInfo -->
* [ICoreWebView2ExperimentalSensitivityInfo](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsensitivityinfo?view=webview2-1.0.3590-prerelease&preserve-view=true)
  * [ICoreWebView2ExperimentalSensitivityInfo::get_SensitivityLabels](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsensitivityinfo?view=webview2-1.0.3590-prerelease&preserve-view=true#get_sensitivitylabels)
  * [ICoreWebView2ExperimentalSensitivityInfo::get_SensitivityLabelsState](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsensitivityinfo?view=webview2-1.0.3590-prerelease&preserve-view=true#get_sensitivitylabelsstate)

<!-- CoreWebView2SensitivityInfoChangedEventHandler -->
* [ICoreWebView2ExperimentalSensitivityInfoChangedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsensitivityinfochangedeventhandler?view=webview2-1.0.3590-prerelease&preserve-view=true)<!-- win32-only -->

<!-- CoreWebView2SensitivityLabel -->
* [ICoreWebView2ExperimentalSensitivityLabel](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsensitivitylabel?view=webview2-1.0.3590-prerelease&preserve-view=true)
  * [ICoreWebView2ExperimentalSensitivityLabel::get_LabelKind](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsensitivitylabel?view=webview2-1.0.3590-prerelease&preserve-view=true#get_labelkind)

<!-- CoreWebView2SensitivityLabelCollectionView -->
* [ICoreWebView2ExperimentalSensitivityLabelCollectionView](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsensitivitylabelcollectionview?view=webview2-1.0.3590-prerelease&preserve-view=true)<!-- win32-only -->
  * [ICoreWebView2ExperimentalSensitivityLabelCollectionView::get_Count](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsensitivitylabelcollectionview?view=webview2-1.0.3590-prerelease&preserve-view=true#get_count)
  * [ICoreWebView2ExperimentalSensitivityLabelCollectionView::GetValueAtIndex](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsensitivitylabelcollectionview?view=webview2-1.0.3590-prerelease&preserve-view=true#getvalueatindex)

<!-- enums -->
<!-- CoreWebView2SensitivityLabelKind -->
* [COREWEBVIEW2_SENSITIVITY_LABEL_KIND Enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.3590-prerelease&preserve-view=true#corewebview2_sensitivity_label_kind)
  * `COREWEBVIEW2_SENSITIVITY_LABEL_KIND_MIP`

<!-- CoreWebView2SensitivityLabelState -->
* [COREWEBVIEW2_SENSITIVITY_LABELS_STATE Enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.3590-prerelease&preserve-view=true#corewebview2_sensitivity_labels_state)
  * `COREWEBVIEW2_SENSITIVITY_LABELS_STATE_NOT_APPLICABLE`
  * `COREWEBVIEW2_SENSITIVITY_LABELS_STATE_PENDING`
  * `COREWEBVIEW2_SENSITIVITY_LABELS_STATE_AVAILABLE`

---


<!-- ------------------------------ -->
#### Promotions to Phase 2 (Stable in Prerelease)

No APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, in this Prerelease SDK.


<!-- ------------------------------ -->
#### Bug fixes

This Prerelease SDK includes the following bug fixes.


<!-- ---------- -->
###### Runtime-only

* Fixed a dangling pointer in file system access permission context.
* Fixed the UI hanging during drag-and-drop in WinUI3.
* Fixed local network access triggering a permission alert pop-up window.
* Resolved an issue where an extra region was appearing in the accessibility tree.
* Fixed an issue where downloads in the default browser frame didn't work.


<!-- ---------- -->
###### SDK-only

* Fixed a BinSkim error for `WebView2Loader.dll`.

<!-- end of Oct 2025 Prerelease SDK -->


<!-- Sep 2025 Release SDK -->
<!-- ====================================================================== -->
## 1.0.3485.44

Release Date: September 8, 2025

[NuGet package for WebView2 SDK 1.0.3485.44](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3485.44)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 140.0.3485.44 or higher.


<!-- ------------------------------ -->
#### General changes

This Release SDK focuses on making WebView2 work better, through behind-the-scenes improvements.
* The testing infrastructure has been strengthened.
* The validation of APIs has been enhanced, to ensure that the APIs perform reliably across different scenarios.

These foundational improvements provide stable, thoroughly tested functionality for building WebView2 apps.


<!-- ------------------------------ -->
#### Promotions to Phase 3 (Stable in Release)

No additional APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, in this Release SDK.


<!-- ------------------------------ -->
#### Bug fixes

There are no bug fixes in this Release SDK.

<!-- end of Sep 2025 Release SDK -->


<!-- Sep 2025 Prerelease SDK -->
<!-- ====================================================================== -->
## 1.0.3530-prerelease

Release Date: September 8, 2025

[NuGet package for WebView2 SDK 1.0.3530-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3530-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 141.0.3530.0 or higher.


<!-- ------------------------------ -->
#### General changes

This Prerelease SDK focuses on making WebView2 work better, through behind-the-scenes improvements.
* The testing infrastructure has been strengthened.
* The validation of APIs has been enhanced, to ensure that the APIs perform reliably across different scenarios.

These foundational improvements provide stable, thoroughly tested functionality for building WebView2 apps.


<!-- ------------------------------ -->
#### Promotions to Phase 1 (Experimental in Prerelease)

No Experimental APIs have been added in this Prerelease SDK.


<!-- ------------------------------ -->
#### Promotions to Phase 2 (Stable in Prerelease)

No APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, in this Prerelease SDK.


<!-- ------------------------------ -->
#### Bug fixes

This Prerelease SDK includes the following bug fixes.


<!-- ---------- -->
###### SDK-only

* Fixed a memory leak in WPF Composition Controller.

<!-- end of Sep 2025 Prerelease SDK -->


<!-- Aug 2025 Release SDK -->
<!-- ====================================================================== -->
## 1.0.3405.78

Release Date: August 11, 2025

[NuGet package for WebView2 SDK 1.0.3405.78](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3405.78)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 139.0.3405.78 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 3 (Stable in Release)

The following APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, and are now included in this Release SDK.


<!-- ------------------------------ -->
###### Customize the Find behavior (Find API)

The Find API allows you to programmatically control **Find** operations, and enables adding the following functionality to your app:
* Customize **Find** options, including **Find Term**, **Case Sensitivity**, **Word Matching**, **Match Highlighting**, and **Default UI Suppression**.
* Find text strings and navigate among them within a WebView2 control.
* Programmatically initiate **Find** operations, and navigate **Find** results.
* Suppress the default **Find** UI.
* Track the status of **Find** operations.

There are known issues with the Find API for PDF documents.  When you view a PDF document within a WebView2 control, the **Find** feature currently only provides the first index and the number of matches found.  For example, if the string occurs three times in a PDF, the UI would say **1/3** and would not support programmatically calling **Next** or **Previous**.

We're actively investigating these issues, and we encourage you to report any problems you encounter, by using the [WebView2Feedback](https://github.com/MicrosoftEdge/WebViewFeedback) repo.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.Find Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.find?view=webview2-dotnet-1.0.3405.78&preserve-view=true)

* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.CreateFindOptions Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createfindoptions?view=webview2-dotnet-1.0.3405.78&preserve-view=true)

* [CoreWebView2Find Class](/dotnet/api/microsoft.web.webview2.core.corewebview2find?view=webview2-dotnet-1.0.3405.78&preserve-view=true)
   * [CoreWebView2Find.ActiveMatchIndex Property](/dotnet/api/microsoft.web.webview2.core.corewebview2find.activematchindex?view=webview2-dotnet-1.0.3405.78&preserve-view=true)
   * [CoreWebView2Find.ActiveMatchIndexChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2find.activematchindexchanged?view=webview2-dotnet-1.0.3405.78&preserve-view=true)
   * [CoreWebView2Find.FindNext Method](/dotnet/api/microsoft.web.webview2.core.corewebview2find.findnext?view=webview2-dotnet-1.0.3405.78&preserve-view=true)
   * [CoreWebView2Find.FindPrevious Method](/dotnet/api/microsoft.web.webview2.core.corewebview2find.findprevious?view=webview2-dotnet-1.0.3405.78&preserve-view=true)
   * [CoreWebView2Find.MatchCount Property](/dotnet/api/microsoft.web.webview2.core.corewebview2find.matchcount?view=webview2-dotnet-1.0.3405.78&preserve-view=true)
   * [CoreWebView2Find.MatchCountChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2find.matchcountchanged?view=webview2-dotnet-1.0.3405.78&preserve-view=true)
   * [CoreWebView2Find.StartAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2find.startasync?view=webview2-dotnet-1.0.3405.78&preserve-view=true)
   * [CoreWebView2Find.Stop Method](/dotnet/api/microsoft.web.webview2.core.corewebview2find.stop?view=webview2-dotnet-1.0.3405.78&preserve-view=true)

* [CoreWebView2FindOptions Class](/dotnet/api/microsoft.web.webview2.core.corewebview2findoptions?view=webview2-dotnet-1.0.3405.78&preserve-view=true)
   * [CoreWebView2FindOptions.FindTerm Property](/dotnet/api/microsoft.web.webview2.core.corewebview2findoptions.findterm?view=webview2-dotnet-1.0.3405.78&preserve-view=true)
   * [CoreWebView2FindOptions.IsCaseSensitive Property](/dotnet/api/microsoft.web.webview2.core.corewebview2findoptions.iscasesensitive?view=webview2-dotnet-1.0.3405.78&preserve-view=true)
   * [CoreWebView2FindOptions.ShouldHighlightAllMatches Property](/dotnet/api/microsoft.web.webview2.core.corewebview2findoptions.shouldhighlightallmatches?view=webview2-dotnet-1.0.3405.78&preserve-view=true)
   * [CoreWebView2FindOptions.ShouldMatchWord Property](/dotnet/api/microsoft.web.webview2.core.corewebview2findoptions.shouldmatchword?view=webview2-dotnet-1.0.3405.78&preserve-view=true)
   * [CoreWebView2FindOptions.SuppressDefaultFindDialog Property](/dotnet/api/microsoft.web.webview2.core.corewebview2findoptions.suppressdefaultfinddialog?view=webview2-dotnet-1.0.3405.78&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.Find Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.3405.78&preserve-view=true#find)

* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.CreateFindOptions Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.3405.78&preserve-view=true#createfindoptions)

* [CoreWebView2Find Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3405.78&preserve-view=true)
   * [CoreWebView2Find.ActiveMatchIndex Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3405.78&preserve-view=true#activematchindex)
   * [CoreWebView2Find.ActiveMatchIndexChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3405.78&preserve-view=true#activematchindexchanged)
   * [CoreWebView2Find.FindNext Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3405.78&preserve-view=true#findnext)
   * [CoreWebView2Find.FindPrevious Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3405.78&preserve-view=true#findprevious)
   * [CoreWebView2Find.MatchCount Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3405.78&preserve-view=true#matchcount)
   * [CoreWebView2Find.MatchCountChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3405.78&preserve-view=true#matchcountchanged)
   * [CoreWebView2Find.StartAsync Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3405.78&preserve-view=true#startasync)
   * [CoreWebView2Find.Stop Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3405.78&preserve-view=true#stop)

* [CoreWebView2FindOptions Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2findoptions?view=webview2-winrt-1.0.3405.78&preserve-view=true)
   * [CoreWebView2FindOptions.FindTerm Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2findoptions?view=webview2-winrt-1.0.3405.78&preserve-view=true#findterm)
   * [CoreWebView2FindOptions.IsCaseSensitive Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2findoptions?view=webview2-winrt-1.0.3405.78&preserve-view=true#iscasesensitive)
   * [CoreWebView2FindOptions.ShouldHighlightAllMatches Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2findoptions?view=webview2-winrt-1.0.3405.78&preserve-view=true#shouldhighlightallmatches)
   * [CoreWebView2FindOptions.ShouldMatchWord Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2findoptions?view=webview2-winrt-1.0.3405.78&preserve-view=true#shouldmatchword)
   * [CoreWebView2FindOptions.SuppressDefaultFindDialog Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2findoptions?view=webview2-winrt-1.0.3405.78&preserve-view=true#suppressdefaultfinddialog)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_28](/microsoft-edge/webview2/reference/win32/icorewebview2_28?view=webview2-1.0.3405.78&preserve-view=true)
   * [ICoreWebView2_28::get_Find](/microsoft-edge/webview2/reference/win32/icorewebview2_28?view=webview2-1.0.3405.78&preserve-view=true#get_find)

* [ICoreWebView2Environment15](/microsoft-edge/webview2/reference/win32/icorewebview2environment15?view=webview2-1.0.3405.78&preserve-view=true)
   * [ICoreWebView2Environment15::CreateFindOptions](/microsoft-edge/webview2/reference/win32/icorewebview2environment15?view=webview2-1.0.3405.78&preserve-view=true#createfindoptions)

* [ICoreWebView2Find](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3405.78&preserve-view=true)
   * [ICoreWebView2Find::add_ActiveMatchIndexChanged](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3405.78&preserve-view=true#add_activematchindexchanged)
   * [ICoreWebView2Find::add_MatchCountChanged](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3405.78&preserve-view=true#add_matchcountchanged)
   * [ICoreWebView2Find::FindNext](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3405.78&preserve-view=true#findnext)
   * [ICoreWebView2Find::FindPrevious](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3405.78&preserve-view=true#findprevious)
   * [ICoreWebView2Find::get_ActiveMatchIndex](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3405.78&preserve-view=true#get_activematchindex)
   * [ICoreWebView2Find::get_MatchCount](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3405.78&preserve-view=true#get_matchcount)
   * [ICoreWebView2Find::remove_ActiveMatchIndexChanged](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3405.78&preserve-view=true#remove_activematchindexchanged)
   * [ICoreWebView2Find::remove_MatchCountChanged](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3405.78&preserve-view=true#remove_matchcountchanged)
   * [ICoreWebView2Find::Start](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3405.78&preserve-view=true#start)
   * [ICoreWebView2Find::Stop](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3405.78&preserve-view=true#stop)

* [ICoreWebView2FindActiveMatchIndexChangedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2findactivematchindexchangedeventhandler?view=webview2-1.0.3405.78&preserve-view=true)

* [ICoreWebView2FindMatchCountChangedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2findmatchcountchangedeventhandler?view=webview2-1.0.3405.78&preserve-view=true)

* [ICoreWebView2FindOptions](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3405.78&preserve-view=true)
   * [ICoreWebView2FindOptions::get_FindTerm](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3405.78&preserve-view=true#get_findterm)
   * [ICoreWebView2FindOptions::get_IsCaseSensitive](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3405.78&preserve-view=true#get_iscasesensitive)
   * [ICoreWebView2FindOptions::get_ShouldHighlightAllMatches](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3405.78&preserve-view=true#get_shouldhighlightallmatches)
   * [ICoreWebView2FindOptions::get_ShouldMatchWord](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3405.78&preserve-view=true#get_shouldmatchword)
   * [ICoreWebView2FindOptions::get_SuppressDefaultFindDialog](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3405.78&preserve-view=true#get_suppressdefaultfinddialog)
   * [ICoreWebView2FindOptions::put_FindTerm](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3405.78&preserve-view=true#put_findterm)
   * [ICoreWebView2FindOptions::put_IsCaseSensitive](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3405.78&preserve-view=true#put_iscasesensitive)
   * [ICoreWebView2FindOptions::put_ShouldHighlightAllMatches](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3405.78&preserve-view=true#put_shouldhighlightallmatches)
   * [ICoreWebView2FindOptions::put_ShouldMatchWord](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3405.78&preserve-view=true#put_shouldmatchword)
   * [ICoreWebView2FindOptions::put_SuppressDefaultFindDialog](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3405.78&preserve-view=true#put_suppressdefaultfinddialog)

* [ICoreWebView2FindStartCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2findstartcompletedhandler?view=webview2-1.0.3405.78&preserve-view=true)

---


<!-- ------------------------------ -->
#### Bug fixes


<!-- ---------- -->
###### Runtime-only

* Fixed a crash in Devtools on Windows Server and Windows 10.

<!-- end of Aug 2025 Release SDK -->


<!-- Aug 2025 Prerelease SDK -->
<!-- ====================================================================== -->
## 1.0.3477-prerelease

Release Date: August 11, 2025

[NuGet package for WebView2 SDK 1.0.3477-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3477-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 140.0.3477.0 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 1 (Experimental in Prerelease)

No Experimental APIs have been added in this Prerelease SDK.

---


<!-- ------------------------------ -->
#### Promotions to Phase 2 (Stable in Prerelease)

No APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, in this Prerelease SDK.


<!-- ------------------------------ -->
#### Bug fixes


<!-- ---------- -->
###### Runtime-only

* Fixed `put_UserAgent` not working for service workers.
* Fixed a crash in Devtools on Windows Server and Windows 10.
* Removed browser process tracking after calling `remove_BrowserProcessExited`.
* Fixed a memory leak issue in `hostObject` async function calls.
* Fixed touch not working in visual hosting after a long tap.

<!-- end of Aug 2025 Prerelease SDK -->


<!-- Jul 2025 Release SDK -->
<!-- ====================================================================== -->
## 1.0.3351.48

Release Date: July 1, 2025

[NuGet package for WebView2 SDK 1.0.3351.48](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3351.48)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 138.0.3351.48 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 3 (Stable in Release)

The following APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, and are now included in this Release SDK.


<!-- ---------- -->
###### Allow input event messages to pass through the browser window

The `CoreWebView2ControllerOptions` class now has an `AllowHostInputProcessing` property, which allows user input event messages (keyboard, mouse, touch, or pen) to pass through the browser window, to be received by an app process window.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2ControllerOptions` Class:
   * [CoreWebView2ControllerOptions.AllowHostInputProcessing Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controlleroptions.allowhostinputprocessing?view=webview2-dotnet-1.0.3351.48&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2ControllerOptions` Class:
   * [CoreWebView2ControllerOptions.AllowHostInputProcessing Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controlleroptions?view=webview2-winrt-1.0.3351.48&preserve-view=true#allowhostinputprocessing)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ControllerOptions4](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions4?view=webview2-1.0.3351.48&preserve-view=true)
   * [ICoreWebView2ControllerOptions4::get_AllowHostInputProcessing](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions4?view=webview2-1.0.3351.48&preserve-view=true#get_allowhostinputprocessing)
   * [ICoreWebView2ControllerOptions4::put_AllowHostInputProcessing](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions4?view=webview2-1.0.3351.48&preserve-view=true#put_allowhostinputprocessing)

---


<!-- ------------------------------ -->
#### Bug fixes


<!-- ---------- -->
###### Runtime-only

* Fixed a blackbox issue on dialogs in visual hosting.

<!-- end of Jul 2025 Release SDK -->


<!-- Jul 2025 Prerelease SDK -->
<!-- ====================================================================== -->
## 1.0.3415-prerelease

Release Date: July 14, 2025

[NuGet package for WebView2 SDK 1.0.3415-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3415-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 140.0.3415.0 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 1 (Experimental in Prerelease)

The following APIs are in Phase 1: Experimental in Prerelease, and have been added in this Prerelease SDK.


<!-- ---------- -->
###### Enable background processing and offline support (WebView2 Worker APIs)

The WebView2 Worker APIs allow host applications to interact with Web Workers to offload tasks from the main thread, improve responsiveness, and support background operations.  These Web Workers include Dedicated Workers, Shared Workers, and Service Workers.

These APIs provide:
* **Lifecycle Events:** Monitor creation and destruction of workers.
* **Messaging Interfaces:** Communicate with workers using `PostMessage` and `WebMessageReceived`.
* **Worker Management:** Query and retrieve worker registrations and instances.

##### [.NET/C#](#tab/dotnetcsharp)

<!-- 1 -->
* `CoreWebView2` Class:
   * [CoreWebView2.DedicatedWorkerCreated Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.dedicatedworkercreated?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)

<!-- 2 -->
* [CoreWebView2DedicatedWorker Class](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworker?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2DedicatedWorker.DedicatedWorkerCreated Event](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworker.dedicatedworkercreated?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2DedicatedWorker.Destroying Event](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworker.destroying?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2DedicatedWorker.PostWebMessageAsJson Method](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworker.postwebmessageasjson?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2DedicatedWorker.PostWebMessageAsString Method](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworker.postwebmessageasstring?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2DedicatedWorker.ScriptUri Property](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworker.scripturi?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2DedicatedWorker.WebMessageReceived Event](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworker.webmessagereceived?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)

<!-- 3 -->
* [CoreWebView2DedicatedWorkerCreatedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworkercreatedeventargs?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2DedicatedWorkerCreatedEventArgs.OriginalSourceFrameInfo Property](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworkercreatedeventargs.originalsourceframeinfo?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2DedicatedWorkerCreatedEventArgs.Worker Property](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworkercreatedeventargs.worker?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)

<!-- 4 -->
* `CoreWebView2Frame` Class:
   * [CoreWebView2Frame.DedicatedWorkerCreated Event](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.dedicatedworkercreated?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)

<!-- 5 -->
* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.ServiceWorkerManager Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.serviceworkermanager?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2Profile.SharedWorkerManager Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.sharedworkermanager?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)

<!-- 6 -->
* [CoreWebView2ServiceWorker Class](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworker?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorker.Destroying Event](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworker.destroying?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorker.PostWebMessageAsJson Method](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworker.postwebmessageasjson?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorker.PostWebMessageAsString Method](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworker.postwebmessageasstring?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorker.ScriptUri Property](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworker.scripturi?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorker.WebMessageReceived Event](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworker.webmessagereceived?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)

<!-- 7 -->
* [CoreWebView2ServiceWorkerActivatedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkeractivatedeventargs?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerActivatedEventArgs.ActiveServiceWorker Property](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkeractivatedeventargs.activeserviceworker?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)

<!-- 8 -->
* [CoreWebView2ServiceWorkerManager Class](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkermanager?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerManager.GetServiceWorkerRegistrationsAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkermanager.getserviceworkerregistrationsasync?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerManager.GetServiceWorkerRegistrationsAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkermanager.getserviceworkerregistrationsasync?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerManager.ServiceWorkerRegistered Event](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkermanager.serviceworkerregistered?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)

<!-- 9 -->
* [CoreWebView2ServiceWorkerRegisteredEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregisteredeventargs?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerRegisteredEventArgs.ServiceWorkerRegistration Property](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregisteredeventargs.serviceworkerregistration?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)

<!-- 10 -->
* [CoreWebView2ServiceWorkerRegistration Class](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregistration?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerRegistration.ActiveServiceWorker Property](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregistration.activeserviceworker?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerRegistration.Origin Property](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregistration.origin?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerRegistration.ScopeUri Property](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregistration.scopeuri?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerRegistration.ServiceWorkerActivated Event](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregistration.serviceworkeractivated?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerRegistration.TopLevelOrigin Property](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregistration.toplevelorigin?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerRegistration.Unregistering Event](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregistration.unregistering?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)

<!-- 11 -->
* [CoreWebView2SharedWorker Class](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworker?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2SharedWorker.Destroying Event](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworker.destroying?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2SharedWorker.Origin Property](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworker.origin?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2SharedWorker.ScriptUri Property](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworker.scripturi?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2SharedWorker.TopLevelOrigin Property](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworker.toplevelorigin?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)

<!-- 12 -->
* [CoreWebView2SharedWorkerCreatedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworkercreatedeventargs?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2SharedWorkerCreatedEventArgs.Worker Property](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworkercreatedeventargs.worker?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)

<!-- 13 -->
* [CoreWebView2SharedWorkerManager Class](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworkermanager?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2SharedWorkerManager.GetSharedWorkersAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworkermanager.getsharedworkersasync?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2SharedWorkerManager.SharedWorkerCreated Event](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworkermanager.sharedworkercreated?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

<!-- 1 -->
* `CoreWebView2` Class:
   * [CoreWebView2.DedicatedWorkerCreated Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#dedicatedworkercreated)

<!-- 2 -->
* [CoreWebView2DedicatedWorker Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworker?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2DedicatedWorker.DedicatedWorkerCreated Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworker?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#dedicatedworkercreated)
   * [CoreWebView2DedicatedWorker.Destroying Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworker?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#destroying)
   * [CoreWebView2DedicatedWorker.PostWebMessageAsJson Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworker?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#postwebmessageasjson)
   * [CoreWebView2DedicatedWorker.PostWebMessageAsString Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworker?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#postwebmessageasstring)
   * [CoreWebView2DedicatedWorker.ScriptUri Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworker?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#scripturi)
   * [CoreWebView2DedicatedWorker.WebMessageReceived Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworker?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#webmessagereceived)

<!-- 3 -->
* [CoreWebView2DedicatedWorkerCreatedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworkercreatedeventargs?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2DedicatedWorkerCreatedEventArgs.Worker Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworkercreatedeventargs?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#worker)
   * [CoreWebView2DedicatedWorkerCreatedEventArgs.OriginalSourceFrameInfo Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworkercreatedeventargs?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#originalsourceframeinfo)

<!-- 4 -->
* `CoreWebView2Frame` Class:
   * [CoreWebView2Frame.DedicatedWorkerCreated Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#dedicatedworkercreated)

<!-- 5 -->
* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.ServiceWorkerManager Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#serviceworkermanager)
   * [CoreWebView2Profile.SharedWorkerManager Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#sharedworkermanager)

<!-- 6 -->
* [CoreWebView2ServiceWorker Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworker?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorker.Destroying Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworker?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#destroying)
   * [CoreWebView2ServiceWorker.PostWebMessageAsJson Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworker?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#postwebmessageasjson)
   * [CoreWebView2ServiceWorker.PostWebMessageAsString Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworker?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#postwebmessageasstring)
   * [CoreWebView2ServiceWorker.ScriptUri Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworker?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#scripturi)
   * [CoreWebView2ServiceWorker.WebMessageReceived Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworker?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#webmessagereceived)

<!-- 7 -->
* [CoreWebView2ServiceWorkerActivatedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkeractivatedeventargs?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerActivatedEventArgs.ActiveServiceWorker Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkeractivatedeventargs?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#activeserviceworker)

<!-- 8 -->
* [CoreWebView2ServiceWorkerManager Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkermanager?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerManager.GetServiceWorkerRegistrationsAsync Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkermanager?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#getserviceworkerregistrationsasync)
   * [CoreWebView2ServiceWorkerManager.GetServiceWorkerRegistrationsAsync Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkermanager?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#getserviceworkerregistrationsasync)
   * [CoreWebView2ServiceWorkerManager.ServiceWorkerRegistered Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkermanager?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#serviceworkerregistered)

<!-- 9 -->
* [CoreWebView2ServiceWorkerRegisteredEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregisteredeventargs?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerRegisteredEventArgs.ServiceWorkerRegistration Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregisteredeventargs?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#serviceworkerregistration)

<!-- 10 -->
* [CoreWebView2ServiceWorkerRegistration Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregistration?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerRegistration.ActiveServiceWorker Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregistration?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#activeserviceworker)
   * [CoreWebView2ServiceWorkerRegistration.Origin Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregistration?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#origin)
   * [CoreWebView2ServiceWorkerRegistration.ScopeUri Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregistration?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#scopeuri)
   * [CoreWebView2ServiceWorkerRegistration.ServiceWorkerActivated Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregistration?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#serviceworkeractivated)
   * [CoreWebView2ServiceWorkerRegistration.TopLevelOrigin Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregistration?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#toplevelorigin)
   * [CoreWebView2ServiceWorkerRegistration.Unregistering Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregistration?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#unregistering)

<!-- 11 -->
* [CoreWebView2SharedWorker Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworker?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2SharedWorker.Destroying Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworker?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#destroying)
   * [CoreWebView2SharedWorker.Origin Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworker?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#origin)
   * [CoreWebView2SharedWorker.ScriptUri Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworker?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#scripturi)
   * [CoreWebView2SharedWorker.TopLevelOrigin Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworker?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#toplevelorigin)

<!-- 12 -->
* [CoreWebView2SharedWorkerCreatedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworkercreatedeventargs?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2SharedWorkerCreatedEventArgs.Worker Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworkercreatedeventargs?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#worker)

<!-- 13 -->
* [CoreWebView2SharedWorkerManager Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworkermanager?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2SharedWorkerManager.GetSharedWorkersAsync Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworkermanager?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#getsharedworkersasync)
   * [CoreWebView2SharedWorkerManager.SharedWorkerCreated Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworkermanager?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#sharedworkercreated)

##### [Win32/C++](#tab/win32cpp)

<!-- 1 -->
* [ICoreWebView2Experimental30](/microsoft-edge/webview2/reference/win32/icorewebview2experimental30?view=webview2-1.0.3415-prerelease&preserve-view=true)
   * [ICoreWebView2Experimental30::add_DedicatedWorkerCreated](/microsoft-edge/webview2/reference/win32/icorewebview2experimental30?view=webview2-1.0.3415-prerelease&preserve-view=true#add_dedicatedworkercreated)
   * [ICoreWebView2Experimental30::remove_DedicatedWorkerCreated](/microsoft-edge/webview2/reference/win32/icorewebview2experimental30?view=webview2-1.0.3415-prerelease&preserve-view=true#remove_dedicatedworkercreated)

<!-- 2 -->
* [ICoreWebView2ExperimentalDedicatedWorker](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldedicatedworker?view=webview2-1.0.3415-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalDedicatedWorker::add_DedicatedWorkerCreated](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldedicatedworker?view=webview2-1.0.3415-prerelease&preserve-view=true#add_dedicatedworkercreated)
   * [ICoreWebView2ExperimentalDedicatedWorker::add_Destroying](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldedicatedworker?view=webview2-1.0.3415-prerelease&preserve-view=true#add_destroying)
   * [ICoreWebView2ExperimentalDedicatedWorker::add_WebMessageReceived](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldedicatedworker?view=webview2-1.0.3415-prerelease&preserve-view=true#add_webmessagereceived)
   * [ICoreWebView2ExperimentalDedicatedWorker::get_ScriptUri](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldedicatedworker?view=webview2-1.0.3415-prerelease&preserve-view=true#get_scripturi)
   * [ICoreWebView2ExperimentalDedicatedWorker::PostWebMessageAsJson](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldedicatedworker?view=webview2-1.0.3415-prerelease&preserve-view=true#postwebmessageasjson)
   * [ICoreWebView2ExperimentalDedicatedWorker::PostWebMessageAsString](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldedicatedworker?view=webview2-1.0.3415-prerelease&preserve-view=true#postwebmessageasstring)
   * [ICoreWebView2ExperimentalDedicatedWorker::remove_DedicatedWorkerCreated](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldedicatedworker?view=webview2-1.0.3415-prerelease&preserve-view=true#remove_dedicatedworkercreated)
   * [ICoreWebView2ExperimentalDedicatedWorker::remove_Destroying](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldedicatedworker?view=webview2-1.0.3415-prerelease&preserve-view=true#remove_destroying)
   * [ICoreWebView2ExperimentalDedicatedWorker::remove_WebMessageReceived](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldedicatedworker?view=webview2-1.0.3415-prerelease&preserve-view=true#remove_webmessagereceived)

<!-- 3 -->
* [ICoreWebView2ExperimentalDedicatedWorkerCreatedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldedicatedworkercreatedeventargs?view=webview2-1.0.3415-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalDedicatedWorkerCreatedEventArgs::get_OriginalSourceFrameInfo](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldedicatedworkercreatedeventargs?view=webview2-1.0.3415-prerelease&preserve-view=true#get_originalsourceframeinfo)
   * [ICoreWebView2ExperimentalDedicatedWorkerCreatedEventArgs::get_Worker](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldedicatedworkercreatedeventargs?view=webview2-1.0.3415-prerelease&preserve-view=true#get_worker)

<!-- win32-only -->
* [ICoreWebView2ExperimentalDedicatedWorkerCreatedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldedicatedworkercreatedeventhandler?view=webview2-1.0.3415-prerelease&preserve-view=true)

<!-- win32-only -->
* [ICoreWebView2ExperimentalDedicatedWorkerDedicatedWorkerCreatedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldedicatedworkerdedicatedworkercreatedeventhandler?view=webview2-1.0.3415-prerelease&preserve-view=true)

<!-- win32-only -->
* [ICoreWebView2ExperimentalDedicatedWorkerDestroyingEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldedicatedworkerdestroyingeventhandler?view=webview2-1.0.3415-prerelease&preserve-view=true)

<!-- win32-only -->
* [ICoreWebView2ExperimentalDedicatedWorkerWebMessageReceivedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldedicatedworkerwebmessagereceivedeventhandler?view=webview2-1.0.3415-prerelease&preserve-view=true)

<!-- 4 -->
* [ICoreWebView2ExperimentalFrame9](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframe9?view=webview2-1.0.3415-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalFrame9::add_DedicatedWorkerCreated](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframe9?view=webview2-1.0.3415-prerelease&preserve-view=true#add_dedicatedworkercreated)
   * [ICoreWebView2ExperimentalFrame9::remove_DedicatedWorkerCreated](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframe9?view=webview2-1.0.3415-prerelease&preserve-view=true#remove_dedicatedworkercreated)

<!-- win32-only -->
* [ICoreWebView2ExperimentalFrameDedicatedWorkerCreatedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframededicatedworkercreatedeventhandler?view=webview2-1.0.3415-prerelease&preserve-view=true)

<!-- win32-only -->
* [ICoreWebView2ExperimentalGetServiceWorkerRegistrationsCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalgetserviceworkerregistrationscompletedhandler?view=webview2-1.0.3415-prerelease&preserve-view=true)

<!-- win32-only -->
* [ICoreWebView2ExperimentalGetSharedWorkersCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalgetsharedworkerscompletedhandler?view=webview2-1.0.3415-prerelease&preserve-view=true)

<!-- 5 -->
* [ICoreWebView2ExperimentalProfile13](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile13?view=webview2-1.0.3415-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalProfile13::get_ServiceWorkerManager](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile13?view=webview2-1.0.3415-prerelease&preserve-view=true#get_serviceworkermanager)
   * [ICoreWebView2ExperimentalProfile13::get_SharedWorkerManager](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile13?view=webview2-1.0.3415-prerelease&preserve-view=true#get_sharedworkermanager)

<!-- 6 -->
* [ICoreWebView2ExperimentalServiceWorker](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworker?view=webview2-1.0.3415-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalServiceWorker::add_Destroying](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworker?view=webview2-1.0.3415-prerelease&preserve-view=true#add_destroying)
   * [ICoreWebView2ExperimentalServiceWorker::add_WebMessageReceived](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworker?view=webview2-1.0.3415-prerelease&preserve-view=true#add_webmessagereceived)
   * [ICoreWebView2ExperimentalServiceWorker::get_ScriptUri](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworker?view=webview2-1.0.3415-prerelease&preserve-view=true#get_scripturi)
   * [ICoreWebView2ExperimentalServiceWorker::PostWebMessageAsJson](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworker?view=webview2-1.0.3415-prerelease&preserve-view=true#postwebmessageasjson)
   * [ICoreWebView2ExperimentalServiceWorker::PostWebMessageAsString](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworker?view=webview2-1.0.3415-prerelease&preserve-view=true#postwebmessageasstring)
   * [ICoreWebView2ExperimentalServiceWorker::remove_Destroying](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworker?view=webview2-1.0.3415-prerelease&preserve-view=true#remove_destroying)
   * [ICoreWebView2ExperimentalServiceWorker::remove_WebMessageReceived](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworker?view=webview2-1.0.3415-prerelease&preserve-view=true#remove_webmessagereceived)

<!-- 7 -->
* [ICoreWebView2ExperimentalServiceWorkerActivatedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkeractivatedeventargs?view=webview2-1.0.3415-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalServiceWorkerActivatedEventArgs::get_ActiveServiceWorker](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkeractivatedeventargs?view=webview2-1.0.3415-prerelease&preserve-view=true#get_activeserviceworker)

<!-- win32-only -->
* [ICoreWebView2ExperimentalServiceWorkerActivatedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkeractivatedeventhandler?view=webview2-1.0.3415-prerelease&preserve-view=true)

<!-- win32-only -->
* [ICoreWebView2ExperimentalServiceWorkerDestroyingEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkerdestroyingeventhandler?view=webview2-1.0.3415-prerelease&preserve-view=true)

<!-- 8 -->
* [ICoreWebView2ExperimentalServiceWorkerManager](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkermanager?view=webview2-1.0.3415-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalServiceWorkerManager::add_ServiceWorkerRegistered](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkermanager?view=webview2-1.0.3415-prerelease&preserve-view=true#add_serviceworkerregistered)
   * [ICoreWebView2ExperimentalServiceWorkerManager::GetServiceWorkerRegistrations](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkermanager?view=webview2-1.0.3415-prerelease&preserve-view=true#getserviceworkerregistrations)
   * [ICoreWebView2ExperimentalServiceWorkerManager::GetServiceWorkerRegistrationsForScope](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkermanager?view=webview2-1.0.3415-prerelease&preserve-view=true#getserviceworkerregistrationsforscope)
   * [ICoreWebView2ExperimentalServiceWorkerManager::remove_ServiceWorkerRegistered](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkermanager?view=webview2-1.0.3415-prerelease&preserve-view=true#remove_serviceworkerregistered)

<!-- 9 -->
* [ICoreWebView2ExperimentalServiceWorkerRegisteredEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkerregisteredeventargs?view=webview2-1.0.3415-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalServiceWorkerRegisteredEventArgs::get_ServiceWorkerRegistration](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkerregisteredeventargs?view=webview2-1.0.3415-prerelease&preserve-view=true#get_serviceworkerregistration)

<!-- win32-only -->
* [ICoreWebView2ExperimentalServiceWorkerRegisteredEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkerregisteredeventhandler?view=webview2-1.0.3415-prerelease&preserve-view=true)

<!-- 10 -->
* [ICoreWebView2ExperimentalServiceWorkerRegistration](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkerregistration?view=webview2-1.0.3415-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalServiceWorkerRegistration::add_ServiceWorkerActivated](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkerregistration?view=webview2-1.0.3415-prerelease&preserve-view=true#add_serviceworkeractivated)
   * [ICoreWebView2ExperimentalServiceWorkerRegistration::add_Unregistering](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkerregistration?view=webview2-1.0.3415-prerelease&preserve-view=true#add_unregistering)
   * [ICoreWebView2ExperimentalServiceWorkerRegistration::get_ActiveServiceWorker](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkerregistration?view=webview2-1.0.3415-prerelease&preserve-view=true#get_activeserviceworker)
   * [ICoreWebView2ExperimentalServiceWorkerRegistration::get_Origin](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkerregistration?view=webview2-1.0.3415-prerelease&preserve-view=true#get_origin)
   * [ICoreWebView2ExperimentalServiceWorkerRegistration::get_ScopeUri](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkerregistration?view=webview2-1.0.3415-prerelease&preserve-view=true#get_scopeuri)
   * [ICoreWebView2ExperimentalServiceWorkerRegistration::get_TopLevelOrigin](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkerregistration?view=webview2-1.0.3415-prerelease&preserve-view=true#get_toplevelorigin)
   * [ICoreWebView2ExperimentalServiceWorkerRegistration::remove_ServiceWorkerActivated](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkerregistration?view=webview2-1.0.3415-prerelease&preserve-view=true#remove_serviceworkeractivated)
   * [ICoreWebView2ExperimentalServiceWorkerRegistration::remove_Unregistering](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkerregistration?view=webview2-1.0.3415-prerelease&preserve-view=true#remove_unregistering)

<!-- win32-only -->
* [ICoreWebView2ExperimentalServiceWorkerRegistrationCollectionView](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkerregistrationcollectionview?view=webview2-1.0.3415-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalServiceWorkerRegistrationCollectionView::get_Count](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkerregistrationcollectionview?view=webview2-1.0.3415-prerelease&preserve-view=true#get_count)
   * [ICoreWebView2ExperimentalServiceWorkerRegistrationCollectionView::GetValueAtIndex](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkerregistrationcollectionview?view=webview2-1.0.3415-prerelease&preserve-view=true#getvalueatindex)

<!-- win32-only -->
* [ICoreWebView2ExperimentalServiceWorkerRegistrationUnregisteringEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkerregistrationunregisteringeventhandler?view=webview2-1.0.3415-prerelease&preserve-view=true)

<!-- win32-only -->
* [ICoreWebView2ExperimentalServiceWorkerWebMessageReceivedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkerwebmessagereceivedeventhandler?view=webview2-1.0.3415-prerelease&preserve-view=true)

<!-- 11 -->
* [ICoreWebView2ExperimentalSharedWorker](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsharedworker?view=webview2-1.0.3415-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalSharedWorker::add_Destroying](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsharedworker?view=webview2-1.0.3415-prerelease&preserve-view=true#add_destroying)
   * [ICoreWebView2ExperimentalSharedWorker::get_Origin](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsharedworker?view=webview2-1.0.3415-prerelease&preserve-view=true#get_origin)
   * [ICoreWebView2ExperimentalSharedWorker::get_ScriptUri](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsharedworker?view=webview2-1.0.3415-prerelease&preserve-view=true#get_scripturi)
   * [ICoreWebView2ExperimentalSharedWorker::get_TopLevelOrigin](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsharedworker?view=webview2-1.0.3415-prerelease&preserve-view=true#get_toplevelorigin)
   * [ICoreWebView2ExperimentalSharedWorker::remove_Destroying](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsharedworker?view=webview2-1.0.3415-prerelease&preserve-view=true#remove_destroying)

<!-- win32-only -->
* [ICoreWebView2ExperimentalSharedWorkerCollectionView](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsharedworkercollectionview?view=webview2-1.0.3415-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalSharedWorkerCollectionView::get_Count](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsharedworkercollectionview?view=webview2-1.0.3415-prerelease&preserve-view=true#get_count)
   * [ICoreWebView2ExperimentalSharedWorkerCollectionView::GetValueAtIndex](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsharedworkercollectionview?view=webview2-1.0.3415-prerelease&preserve-view=true#getvalueatindex)

<!-- 12 -->
* [ICoreWebView2ExperimentalSharedWorkerCreatedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsharedworkercreatedeventargs?view=webview2-1.0.3415-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalSharedWorkerCreatedEventArgs::get_Worker](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsharedworkercreatedeventargs?view=webview2-1.0.3415-prerelease&preserve-view=true#get_worker)

<!-- win32-only -->
* [ICoreWebView2ExperimentalSharedWorkerCreatedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsharedworkercreatedeventhandler?view=webview2-1.0.3415-prerelease&preserve-view=true)

<!-- win32-only -->
* [ICoreWebView2ExperimentalSharedWorkerDestroyingEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsharedworkerdestroyingeventhandler?view=webview2-1.0.3415-prerelease&preserve-view=true)

<!-- 13 -->
* [ICoreWebView2ExperimentalSharedWorkerManager](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsharedworkermanager?view=webview2-1.0.3415-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalSharedWorkerManager::add_SharedWorkerCreated](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsharedworkermanager?view=webview2-1.0.3415-prerelease&preserve-view=true#add_sharedworkercreated)
   * [ICoreWebView2ExperimentalSharedWorkerManager::GetSharedWorkers](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsharedworkermanager?view=webview2-1.0.3415-prerelease&preserve-view=true#getsharedworkers)
   * [ICoreWebView2ExperimentalSharedWorkerManager::remove_SharedWorkerCreated](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsharedworkermanager?view=webview2-1.0.3415-prerelease&preserve-view=true#remove_sharedworkercreated)

---


<!-- ---------- -->
###### Render custom title bars (Window Controls Overlay API)

The Window Controls Overlay API enables developers to create custom title bars by rendering caption buttons (minimize, maximize, restore, close) directly inside the WebView2 window.  The Window Controls Overlay appears in the top corner of the WebView, and integrates seamlessly with your app's UI.

Use this API when:
* You want to replace the default OS title bar with a fully customized in-app title bar.
* You're working with non-client region features, such as `app-region: drag` and `IsNonClientRegionSupportEnabled`.

This API is ideal for apps that require a modern, immersive UI experience.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.WindowControlsOverlay Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.windowcontrolsoverlay?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)

* [CoreWebView2WindowControlsOverlay Class](/dotnet/api/microsoft.web.webview2.core.corewebview2windowcontrolsoverlay?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2WindowControlsOverlay.IsEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2windowcontrolsoverlay.isenabled?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2WindowControlsOverlay.BackgroundColor Property](/dotnet/api/microsoft.web.webview2.core.corewebview2windowcontrolsoverlay.backgroundcolor?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2WindowControlsOverlay.Height Property](/dotnet/api/microsoft.web.webview2.core.corewebview2windowcontrolsoverlay.height?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.WindowControlsOverlay Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#windowcontrolsoverlay)

* [CoreWebView2WindowControlsOverlay Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2windowcontrolsoverlay?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2WindowControlsOverlay.IsEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2windowcontrolsoverlay?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#isenabled)
   * [CoreWebView2WindowControlsOverlay.BackgroundColor Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2windowcontrolsoverlay?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#backgroundcolor)
   * [CoreWebView2WindowControlsOverlay.Height Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2windowcontrolsoverlay?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#height)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Experimental31](/microsoft-edge/webview2/reference/win32/icorewebview2experimental31?view=webview2-1.0.3415-prerelease&preserve-view=true)
   * [ICoreWebView2Experimental31::get_WindowControlsOverlay](/microsoft-edge/webview2/reference/win32/icorewebview2experimental31?view=webview2-1.0.3415-prerelease&preserve-view=true#get_windowcontrolsoverlay)

* [ICoreWebView2ExperimentalWindowControlsOverlay](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwindowcontrolsoverlay?view=webview2-1.0.3415-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalWindowControlsOverlay::get_BackgroundColor](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwindowcontrolsoverlay?view=webview2-1.0.3415-prerelease&preserve-view=true#get_backgroundcolor)
   * [ICoreWebView2ExperimentalWindowControlsOverlay::get_Height](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwindowcontrolsoverlay?view=webview2-1.0.3415-prerelease&preserve-view=true#get_height)
   * [ICoreWebView2ExperimentalWindowControlsOverlay::get_IsEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwindowcontrolsoverlay?view=webview2-1.0.3415-prerelease&preserve-view=true#get_isenabled)
   * [ICoreWebView2ExperimentalWindowControlsOverlay::put_BackgroundColor](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwindowcontrolsoverlay?view=webview2-1.0.3415-prerelease&preserve-view=true#put_backgroundcolor)
   * [ICoreWebView2ExperimentalWindowControlsOverlay::put_Height](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwindowcontrolsoverlay?view=webview2-1.0.3415-prerelease&preserve-view=true#put_height)
   * [ICoreWebView2ExperimentalWindowControlsOverlay::put_IsEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwindowcontrolsoverlay?view=webview2-1.0.3415-prerelease&preserve-view=true#put_isenabled)

---


<!-- ------------------------------ -->
#### Promotions to Phase 2 (Stable in Prerelease)

The following APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, and are included in this Prerelease SDK.


<!-- ---------- -->
###### Customize the Find behavior (Find API)

The Find API allows you to programmatically control **Find** operations, and enables adding the following functionality to your app:
* Customize **Find** options, including **Find Term**, **Case Sensitivity**, **Word Matching**, **Match Highlighting**, and **Default UI Suppression**.
* Find text strings and navigate among them within a WebView2 control.
* Programmatically initiate **Find** operations, and navigate **Find** results.
* Suppress the default **Find** UI.
* Track the status of **Find** operations.

There are known issues with the Find API for PDF documents.  When you view a PDF document within a WebView2 control, the **Find** feature currently only provides the first index and the number of matches found.  For example, if the string occurs three times in a PDF, the UI would say **1/3** and would not support programmatically calling **Next** or **Previous**.

We're actively investigating these issues, and we encourage you to report any problems you encounter, by using the [WebView2Feedback](https://github.com/MicrosoftEdge/WebViewFeedback) repo.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.Find Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.find?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)

* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.CreateFindOptions Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createfindoptions?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)

* [CoreWebView2Find Class](/dotnet/api/microsoft.web.webview2.core.corewebview2find?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2Find.ActiveMatchIndex Property](/dotnet/api/microsoft.web.webview2.core.corewebview2find.activematchindex?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2Find.ActiveMatchIndexChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2find.activematchindexchanged?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2Find.FindNext Method](/dotnet/api/microsoft.web.webview2.core.corewebview2find.findnext?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2Find.FindPrevious Method](/dotnet/api/microsoft.web.webview2.core.corewebview2find.findprevious?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2Find.MatchCount Property](/dotnet/api/microsoft.web.webview2.core.corewebview2find.matchcount?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2Find.MatchCountChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2find.matchcountchanged?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2Find.StartAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2find.startasync?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2Find.Stop Method](/dotnet/api/microsoft.web.webview2.core.corewebview2find.stop?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)

* [CoreWebView2FindOptions Class](/dotnet/api/microsoft.web.webview2.core.corewebview2findoptions?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2FindOptions.FindTerm Property](/dotnet/api/microsoft.web.webview2.core.corewebview2findoptions.findterm?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2FindOptions.IsCaseSensitive Property](/dotnet/api/microsoft.web.webview2.core.corewebview2findoptions.iscasesensitive?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2FindOptions.ShouldHighlightAllMatches Property](/dotnet/api/microsoft.web.webview2.core.corewebview2findoptions.shouldhighlightallmatches?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2FindOptions.ShouldMatchWord Property](/dotnet/api/microsoft.web.webview2.core.corewebview2findoptions.shouldmatchword?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2FindOptions.SuppressDefaultFindDialog Property](/dotnet/api/microsoft.web.webview2.core.corewebview2findoptions.suppressdefaultfinddialog?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.Find Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#find)

* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.CreateFindOptions Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#createfindoptions)

* [CoreWebView2Find Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2Find.ActiveMatchIndex Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#activematchindex)
   * [CoreWebView2Find.ActiveMatchIndexChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#activematchindexchanged)
   * [CoreWebView2Find.FindNext Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#findnext)
   * [CoreWebView2Find.FindPrevious Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#findprevious)
   * [CoreWebView2Find.MatchCount Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#matchcount)
   * [CoreWebView2Find.MatchCountChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#matchcountchanged)
   * [CoreWebView2Find.StartAsync Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#startasync)
   * [CoreWebView2Find.Stop Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#stop)

* [CoreWebView2FindOptions Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2findoptions?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true)
   * [CoreWebView2FindOptions.FindTerm Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2findoptions?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#findterm)
   * [CoreWebView2FindOptions.IsCaseSensitive Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2findoptions?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#iscasesensitive)
   * [CoreWebView2FindOptions.ShouldHighlightAllMatches Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2findoptions?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#shouldhighlightallmatches)
   * [CoreWebView2FindOptions.ShouldMatchWord Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2findoptions?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#shouldmatchword)
   * [CoreWebView2FindOptions.SuppressDefaultFindDialog Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2findoptions?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#suppressdefaultfinddialog)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_28](/microsoft-edge/webview2/reference/win32/icorewebview2_28?view=webview2-1.0.3415-prerelease&preserve-view=true)
   * [ICoreWebView2_28::get_Find](/microsoft-edge/webview2/reference/win32/icorewebview2_28?view=webview2-1.0.3415-prerelease&preserve-view=true#get_find)

* [ICoreWebView2Environment15](/microsoft-edge/webview2/reference/win32/icorewebview2environment15?view=webview2-1.0.3415-prerelease&preserve-view=true)
   * [ICoreWebView2Environment15::CreateFindOptions](/microsoft-edge/webview2/reference/win32/icorewebview2environment15?view=webview2-1.0.3415-prerelease&preserve-view=true#createfindoptions)

* [ICoreWebView2Find](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3415-prerelease&preserve-view=true)
   * [ICoreWebView2Find::add_ActiveMatchIndexChanged](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3415-prerelease&preserve-view=true#add_activematchindexchanged)
   * [ICoreWebView2Find::add_MatchCountChanged](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3415-prerelease&preserve-view=true#add_matchcountchanged)
   * [ICoreWebView2Find::FindNext](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3415-prerelease&preserve-view=true#findnext)
   * [ICoreWebView2Find::FindPrevious](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3415-prerelease&preserve-view=true#findprevious)
   * [ICoreWebView2Find::get_ActiveMatchIndex](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3415-prerelease&preserve-view=true#get_activematchindex)
   * [ICoreWebView2Find::get_MatchCount](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3415-prerelease&preserve-view=true#get_matchcount)
   * [ICoreWebView2Find::remove_ActiveMatchIndexChanged](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3415-prerelease&preserve-view=true#remove_activematchindexchanged)
   * [ICoreWebView2Find::remove_MatchCountChanged](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3415-prerelease&preserve-view=true#remove_matchcountchanged)
   * [ICoreWebView2Find::Start](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3415-prerelease&preserve-view=true#start)
   * [ICoreWebView2Find::Stop](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3415-prerelease&preserve-view=true#stop)

* [ICoreWebView2FindActiveMatchIndexChangedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2findactivematchindexchangedeventhandler?view=webview2-1.0.3415-prerelease&preserve-view=true)

* [ICoreWebView2FindMatchCountChangedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2findmatchcountchangedeventhandler?view=webview2-1.0.3415-prerelease&preserve-view=true)

* [ICoreWebView2FindOptions](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3415-prerelease&preserve-view=true)
   * [ICoreWebView2FindOptions::get_FindTerm](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3415-prerelease&preserve-view=true#get_findterm)
   * [ICoreWebView2FindOptions::get_IsCaseSensitive](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3415-prerelease&preserve-view=true#get_iscasesensitive)
   * [ICoreWebView2FindOptions::get_ShouldHighlightAllMatches](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3415-prerelease&preserve-view=true#get_shouldhighlightallmatches)
   * [ICoreWebView2FindOptions::get_ShouldMatchWord](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3415-prerelease&preserve-view=true#get_shouldmatchword)
   * [ICoreWebView2FindOptions::get_SuppressDefaultFindDialog](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3415-prerelease&preserve-view=true#get_suppressdefaultfinddialog)
   * [ICoreWebView2FindOptions::put_FindTerm](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3415-prerelease&preserve-view=true#put_findterm)
   * [ICoreWebView2FindOptions::put_IsCaseSensitive](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3415-prerelease&preserve-view=true#put_iscasesensitive)
   * [ICoreWebView2FindOptions::put_ShouldHighlightAllMatches](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3415-prerelease&preserve-view=true#put_shouldhighlightallmatches)
   * [ICoreWebView2FindOptions::put_ShouldMatchWord](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3415-prerelease&preserve-view=true#put_shouldmatchword)
   * [ICoreWebView2FindOptions::put_SuppressDefaultFindDialog](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3415-prerelease&preserve-view=true#put_suppressdefaultfinddialog)

* [ICoreWebView2FindStartCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2findstartcompletedhandler?view=webview2-1.0.3415-prerelease&preserve-view=true)

---


<!-- ------------------------------ -->
#### Bug fixes


<!-- ---------- -->
###### Runtime-only

* Fixed a blackbox issue on dialogs in visual hosting.
* Fixed `put_UserAgent` not working for service workers.
* Fixed crash in DevTools on Windows Server and Windows 10.

<!-- end of Jul 2025 Prerelease SDK -->


<!-- ====================================================================== -->
## See also

* [About Release notes for the WebView2 SDK](./about.md)
* [Archived release notes for the WebView2 SDK](./archive.md)
* [Overview of WebView2 APIs](../concepts/overview-features-apis.md) - outlines many of the APIs, by feature area, that are in Release SDK packages.
* [Contacting the Microsoft Edge WebView2 team](../contact.md)
* [Release notes for Microsoft Edge web platform](../../web-platform/release-notes/index.md)

API Reference:
* [WebView2 API Reference](../webview2-api-reference.md)
   * .NET: [Microsoft.Web.WebView2.Core Namespace](/dotnet/api/microsoft.web.webview2.core)<!-- https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core -->
   * WinRT: [Microsoft.Web.WebView2.Core Namespace](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/)<!-- https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/ -->
   * Win32: [Reference (WebView2 Win32 C++)](/microsoft-edge/webview2/reference/win32/)<!-- https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/ -->
