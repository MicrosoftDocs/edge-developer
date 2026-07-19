---
title: Prerelease SDK 1.0.3590-prerelease, for Runtime 142 (Oct. 7, 2025)
description: Release notes for Microsoft Edge WebView2, for Prerelease SDK 1.0.3590-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 06/11/2026
---
# Prerelease SDK 1.0.3590-prerelease, for Runtime 142 (Oct. 7, 2025)

Release Date: Oct. 7, 2025

[NuGet package for WebView2 SDK 1.0.3590-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3590-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 142.0.3590.0 or later.


<!-- ====================================================================== -->
## Experimental APIs (Phase 1: Experimental in Prerelease)

The following APIs are in Phase 1: Experimental in Prerelease, and have been added in this Prerelease SDK.


<!-- ------------------------------ -->
#### Sensitivity label support

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

* [COREWEBVIEW2_SENSITIVITY_LABEL_KIND enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.3590-prerelease&preserve-view=true#corewebview2_sensitivity_label_kind)
  * `COREWEBVIEW2_SENSITIVITY_LABEL_KIND_MIP`

* [COREWEBVIEW2_SENSITIVITY_LABELS_STATE enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.3590-prerelease&preserve-view=true#corewebview2_sensitivity_labels_state)
  * `COREWEBVIEW2_SENSITIVITY_LABELS_STATE_NOT_APPLICABLE`
  * `COREWEBVIEW2_SENSITIVITY_LABELS_STATE_PENDING`
  * `COREWEBVIEW2_SENSITIVITY_LABELS_STATE_AVAILABLE`

---


<!-- ====================================================================== -->
## Promotions to Phase 2 (Stable in Prerelease)

No APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, in this Prerelease SDK.


<!-- ====================================================================== -->
## Bug fixes

This Prerelease SDK includes the following bug fixes.


<!-- ------------------------------ -->
#### Runtime-only

* Fixed a dangling pointer in file system access permission context.
* Fixed the UI hanging during drag-and-drop in WinUI3.
* Fixed local network access triggering a permission alert pop-up window.
* Resolved an issue where an extra region was appearing in the accessibility tree.
* Fixed an issue where downloads in the default browser frame didn't work.


<!-- ------------------------------ -->
#### SDK-only

* Fixed a BinSkim error for `WebView2Loader.dll`.


<!-- ====================================================================== -->
## See also

* [Release notes for the WebView2 SDK](./index.md)
