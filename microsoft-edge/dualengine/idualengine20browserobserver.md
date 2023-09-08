---
description: Receives events from [IDualEngine20Browser](idualengine20browser.md).
title: DualEngine Win32 C++ IDualEngine20BrowserObserver
ms.date: 09/07/2023
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html, IDualEngine20BrowserObserver
topic_type: 
- APIRef
api_name:
- IDualEngine20BrowserObserver
- IDualEngine20BrowserObserver.ContinueNavigationInEdge
- IDualEngine20BrowserObserver.ContinueNavigationInEdge2
- IDualEngine20BrowserObserver.NavigateToOffsetInEdge
- IDualEngine20BrowserObserver.OnAllButCurrentEntryDeleted
- IDualEngine20BrowserObserver.OnAsyncHungCheckReply
- IDualEngine20BrowserObserver.OnAttentionState
- IDualEngine20BrowserObserver.OnBeforeUnloadAndStopComplete
- IDualEngine20BrowserObserver.OnCloseCompleted
- IDualEngine20BrowserObserver.OnCloseRequested
- IDualEngine20BrowserObserver.OnDialogShown
- IDualEngine20BrowserObserver.OnDocumentComplete
- IDualEngine20BrowserObserver.OnDocumentModeSet
- IDualEngine20BrowserObserver.OnEnterpriseIDSet
- IDualEngine20BrowserObserver.OnFindOnPageResult
- IDualEngine20BrowserObserver.OnFinishedSetFocus
- IDualEngine20BrowserObserver.OnGeolocationFeatureInUse
- IDualEngine20BrowserObserver.OnGeolocationPermissionRequested
- IDualEngine20BrowserObserver.OnHasBeforeUnloadChanged
- IDualEngine20BrowserObserver.OnIndicatorItemsSet
- IDualEngine20BrowserObserver.OnInputAttempted
- IDualEngine20BrowserObserver.OnLoadingActivityChanged
- IDualEngine20BrowserObserver.OnMixedContentBlocked
- IDualEngine20BrowserObserver.OnNavigationComplete
- IDualEngine20BrowserObserver.OnNavigationFailed
- IDualEngine20BrowserObserver.OnNavigationToDownload
- IDualEngine20BrowserObserver.OnNewWindow
- IDualEngine20BrowserObserver.OnPopupBlocked
- IDualEngine20BrowserObserver.OnPrepareToExitRegionFailed
- IDualEngine20BrowserObserver.OnReadyToExitRegion
- IDualEngine20BrowserObserver.OnTabCrashed
- IDualEngine20BrowserObserver.OnTabHangReported
- IDualEngine20BrowserObserver.OnUnexpectedRundown
- IDualEngine20BrowserObserver.OnUnhandledKeyboardAccelerator
- IDualEngine20BrowserObserver.OnUnhandledKeyboardAcceleratorAsync
- IDualEngine20BrowserObserver.OnVisibleComplete
- IDualEngine20BrowserObserver.OnZoomChanged
- IDualEngine20BrowserObserver.OpenURLInEdge
- IDualEngine20BrowserObserver.OpenURLInEdge2
- IDualEngine20BrowserObserver.RequestHostAddFavorite
- IDualEngine20BrowserObserver.RequestHostCreateUrlTip
- IDualEngine20BrowserObserver.RequestHostFocus
- IDualEngine20BrowserObserver.RequestHostFullscreen
- IDualEngine20BrowserObserver.RequestHostHideUrlTip
- IDualEngine20BrowserObserver.RequestHostPositionChanged
- IDualEngine20BrowserObserver.RequestHostShowTheater
- IDualEngine20BrowserObserver.RequestHostWindowFocus
- IDualEngine20BrowserObserver.RequestHostWindowFocusSync
- IDualEngine20BrowserObserver.UpdateHostFavicon
- IDualEngine20BrowserObserver.UpdateHostTitle
- IDualEngine20BrowserObserver.UpdateSecureLockIcon
api_type:
- COM
api_location:
- embeddedbrowserwebview.dll
---

# interface IDualEngine20BrowserObserver

```
interface IDualEngine20BrowserObserver
  : public IUnknown
```

Receives events from [IDualEngine20Browser](idualengine20browser.md).

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[ContinueNavigationInEdge](#continuenavigationinedge) | `ContinueNavigationInEdge` is raised when Internet Explorer wants to stop hosting content and have the navigation to the url continue in the hosting process.
[ContinueNavigationInEdge2](#continuenavigationinedge2) | `ContinueNavigationInEdge2` is raised when Internet Explorer wants to stop hosting content and have the navigation to the url continue in the hosting process.
[NavigateToOffsetInEdge](#navigatetooffsetinedge) | 
[OnAllButCurrentEntryDeleted](#onallbutcurrententrydeleted) | 
[OnAsyncHungCheckReply](#onasynchungcheckreply) | 
[OnAttentionState](#onattentionstate) | 
[OnBeforeUnloadAndStopComplete](#onbeforeunloadandstopcomplete) | 
[OnCloseCompleted](#onclosecompleted) | 
[OnCloseRequested](#oncloserequested) | 
[OnDialogShown](#ondialogshown) | 
[OnDocumentComplete](#ondocumentcomplete) | 
[OnDocumentModeSet](#ondocumentmodeset) | 
[OnEnterpriseIDSet](#onenterpriseidset) | 
[OnFindOnPageResult](#onfindonpageresult) | 
[OnFinishedSetFocus](#onfinishedsetfocus) | `OnFinishedSetFocus` is raised when Internet Explorer has finish processing a `DualEngineSetFocus` request.
[OnGeolocationFeatureInUse](#ongeolocationfeatureinuse) | 
[OnGeolocationPermissionRequested](#ongeolocationpermissionrequested) | 
[OnHasBeforeUnloadChanged](#onhasbeforeunloadchanged) | 
[OnIndicatorItemsSet](#onindicatoritemsset) | 
[OnInputAttempted](#oninputattempted) | 
[OnLoadingActivityChanged](#onloadingactivitychanged) | 
[OnMixedContentBlocked](#onmixedcontentblocked) | 
[OnNavigationComplete](#onnavigationcomplete) | `OnNavigationComplete` is raised when Internet Explorer has completed a navigation
[OnNavigationFailed](#onnavigationfailed) | 
[OnNavigationToDownload](#onnavigationtodownload) | 
[OnNewWindow](#onnewwindow) | 
[OnPopupBlocked](#onpopupblocked) | 
[OnPrepareToExitRegionFailed](#onpreparetoexitregionfailed) | 
[OnReadyToExitRegion](#onreadytoexitregion) | 
[OnTabCrashed](#ontabcrashed) | 
[OnTabHangReported](#ontabhangreported) | 
[OnUnexpectedRundown](#onunexpectedrundown) | 
[OnUnhandledKeyboardAccelerator](#onunhandledkeyboardaccelerator) | `OnUnhandledKeyboardAccelerator` is raised when IE is processing a keyboard accelerator and determined that it does not, or should not based on rgHostPriorityAccels, handle that accelerator.
[OnUnhandledKeyboardAcceleratorAsync](#onunhandledkeyboardacceleratorasync) | 
[OnVisibleComplete](#onvisiblecomplete) | 
[OnZoomChanged](#onzoomchanged) | 
[OpenURLInEdge](#openurlinedge) | 
[OpenURLInEdge2](#openurlinedge2) | 
[RequestHostAddFavorite](#requesthostaddfavorite) | 
[RequestHostCreateUrlTip](#requesthostcreateurltip) | 
[RequestHostFocus](#requesthostfocus) | `RequestHostFocus` is raised when Internet Explorer requests focus to move to the host window
[RequestHostFullscreen](#requesthostfullscreen) | 
[RequestHostHideUrlTip](#requesthosthideurltip) | 
[RequestHostPositionChanged](#requesthostpositionchanged) | 
[RequestHostShowTheater](#requesthostshowtheater) | 
[RequestHostWindowFocus](#requesthostwindowfocus) | 
[RequestHostWindowFocusSync](#requesthostwindowfocussync) | 
[UpdateHostFavicon](#updatehostfavicon) | 
[UpdateHostTitle](#updatehosttitle) | `UpdateHostTitle` is raised when a page loaded in Internet Explorer has an update to the title.
[UpdateSecureLockIcon](#updatesecurelockicon) | 

## Applies to

Product                         | Introduced
--------------------------------|---------------------------------------------
WebView2 Win32            |    <!--%RELEASE_VERSION%-->
WebView2 Win32 Prerelease |    <!--%PRERELEASE_VERSION%-->

## Members

#### ContinueNavigationInEdge

`ContinueNavigationInEdge` is raised when Internet Explorer wants to stop hosting content and have the navigation to the url continue in the hosting process.

> public HRESULT [ContinueNavigationInEdge](#continuenavigationinedge)(LPCWSTR pszUrl, ULONG ulCookieSyncVersion)

#### Parameters
* `pszUrl` The URL that should be navigated to. 

* `ulCookieSyncVersion` A number that can be used to correlate a navigation with a specific cookie state.

#### ContinueNavigationInEdge2

`ContinueNavigationInEdge2` is raised when Internet Explorer wants to stop hosting content and have the navigation to the url continue in the hosting process.

> public HRESULT [ContinueNavigationInEdge2](#continuenavigationinedge2)(LPCWSTR pszUrl, ULONG ulCookieSyncVersion, LPCWSTR pszReferrer, LPCWSTR pszHeaders, VARIANT * postData)

This version provides extra information about the navigation. 
#### Parameters
* `pszUrl` The URL that should be navigated to. 

* `ulCookieSyncVersion` A number that can be used to correlate a navigation with a specific cookie state. 

* `pszReferrer` The HTTP Referer request header. 

* `pszHeader` Additional HTTP headers 

* `postData` HTTP POST data such as form data.

#### NavigateToOffsetInEdge

> public HRESULT [NavigateToOffsetInEdge](#navigatetooffsetinedge)(int iOffset)

#### OnAllButCurrentEntryDeleted

> public HRESULT [OnAllButCurrentEntryDeleted](#onallbutcurrententrydeleted)(VisibleListUpdateEntry * pVisibleListEntries, int cVisibleListEntries)

#### OnAsyncHungCheckReply

> public HRESULT [OnAsyncHungCheckReply](#onasynchungcheckreply)(ULONG correlationId)

#### OnAttentionState

> public HRESULT [OnAttentionState](#onattentionstate)(ATTENTIONSTATE attentionState)

#### OnBeforeUnloadAndStopComplete

> public HRESULT [OnBeforeUnloadAndStopComplete](#onbeforeunloadandstopcomplete)(BOOL agreeToClose)

#### OnCloseCompleted

> public HRESULT [OnCloseCompleted](#onclosecompleted)()

#### OnCloseRequested

> public HRESULT [OnCloseRequested](#oncloserequested)()

#### OnDialogShown

> public HRESULT [OnDialogShown](#ondialogshown)(BOOL fShown)

#### OnDocumentComplete

> public HRESULT [OnDocumentComplete](#ondocumentcomplete)(ULONG ulCurrentEntryId, VisibleListUpdateEntry * pVisibleListEntries, int cVisibleListEntries)

#### OnDocumentModeSet

> public HRESULT [OnDocumentModeSet](#ondocumentmodeset)(ULONG documentMode)

#### OnEnterpriseIDSet

> public HRESULT [OnEnterpriseIDSet](#onenterpriseidset)(BOOL fEnterpriseID)

#### OnFindOnPageResult

> public HRESULT [OnFindOnPageResult](#onfindonpageresult)(int iRequestID, int cMatches, int iActiveMatch)

#### OnFinishedSetFocus

`OnFinishedSetFocus` is raised when Internet Explorer has finish processing a `DualEngineSetFocus` request.

> public HRESULT [OnFinishedSetFocus](#onfinishedsetfocus)()

#### OnGeolocationFeatureInUse

> public HRESULT [OnGeolocationFeatureInUse](#ongeolocationfeatureinuse)(LPCWSTR pszContextUrl, SITE_PERMISSION_FEATURE_MODE featureMode)

#### OnGeolocationPermissionRequested

> public HRESULT [OnGeolocationPermissionRequested](#ongeolocationpermissionrequested)(LPCWSTR pszContextUrl)

#### OnHasBeforeUnloadChanged

> public HRESULT [OnHasBeforeUnloadChanged](#onhasbeforeunloadchanged)(BOOL fBeforeUnload)

#### OnIndicatorItemsSet

> public HRESULT [OnIndicatorItemsSet](#onindicatoritemsset)(BOOL fProtectedMode, BOOL fEnhancedProtectedMode, DWORD dwUrlZone, BOOL fEnterpriseMode)

#### OnInputAttempted

> public HRESULT [OnInputAttempted](#oninputattempted)()

#### OnLoadingActivityChanged

> public HRESULT [OnLoadingActivityChanged](#onloadingactivitychanged)(BOOL fLoading)

#### OnMixedContentBlocked

> public HRESULT [OnMixedContentBlocked](#onmixedcontentblocked)()

#### OnNavigationComplete

`OnNavigationComplete` is raised when Internet Explorer has completed a navigation

> public HRESULT [OnNavigationComplete](#onnavigationcomplete)(REFGUID guidTabId, ULONG ulCurrentEntryId, VisibleListUpdateEntry * pVisibleListEntries, int cVisibleListEntries, DWORD dwNavFlags, SECURELOCKICON secureLockIcon, DWORD dwSecurityFlags, CryptDataBlob * pDualEngineCertificates, int cCertificateChainBlobs)

#### Parameters
* `guidTabId` The recovery GUID for this Internet Explorer tab. 

* `ulCurrentEntryId` The id representing this navigation in the visible entries list. 

* `pVisibleListEntries` description 

* `cVisibleListEntries` description 

* `dwNavFlags` description 

* `secureLockIcon` description 

* `dwSecurityFlags` description 

* `pDualEngineCertificates` description 

* `cCertificateChainBlobs` description

#### OnNavigationFailed

> public HRESULT [OnNavigationFailed](#onnavigationfailed)(NAVIGATIONFAILEDREASON failureReason)

#### OnNavigationToDownload

> public HRESULT [OnNavigationToDownload](#onnavigationtodownload)()

#### OnNewWindow

> public HRESULT [OnNewWindow](#onnewwindow)([IDualEngine20Browser](idualengine20browser.md) * pNewBrowser, HWND hwnd, const DualEngineNewWindowOptions * options, [IDualEngine20BrowserObserver](#idualengine20browserobserver) ** ppObserver)

#### OnPopupBlocked

> public HRESULT [OnPopupBlocked](#onpopupblocked)(LPCWSTR pszContextUrl, LPCWSTR pszPopupUrl)

#### OnPrepareToExitRegionFailed

> public HRESULT [OnPrepareToExitRegionFailed](#onpreparetoexitregionfailed)()

#### OnReadyToExitRegion

> public HRESULT [OnReadyToExitRegion](#onreadytoexitregion)(REFGUID guidClonedTabId, ULONG ulCurrentEntryId, VisibleListUpdateEntry * pVisibleListEntriesComplete, int cVisibleListEntriesComplete)

#### OnTabCrashed

> public HRESULT [OnTabCrashed](#ontabcrashed)(BOOL fUnrecoverable)

#### OnTabHangReported

> public HRESULT [OnTabHangReported](#ontabhangreported)()

#### OnUnexpectedRundown

> public HRESULT [OnUnexpectedRundown](#onunexpectedrundown)()

#### OnUnhandledKeyboardAccelerator

`OnUnhandledKeyboardAccelerator` is raised when IE is processing a keyboard accelerator and determined that it does not, or should not based on rgHostPriorityAccels, handle that accelerator.

> public HRESULT [OnUnhandledKeyboardAccelerator](#onunhandledkeyboardaccelerator)(LPMSG lpMsg)

#### Parameters
* `lpMsg` The win32 message for the unhandled keyboard accelerator. <br/>

#### OnUnhandledKeyboardAcceleratorAsync

> public HRESULT [OnUnhandledKeyboardAcceleratorAsync](#onunhandledkeyboardacceleratorasync)(LPMSG pMsg, BOOL isShiftDown, BOOL isCtrlDown, BOOL isAltDown)

#### OnVisibleComplete

> public HRESULT [OnVisibleComplete](#onvisiblecomplete)()

#### OnZoomChanged

> public HRESULT [OnZoomChanged](#onzoomchanged)(ULONG ulZoomPercent)

#### OpenURLInEdge

> public HRESULT [OpenURLInEdge](#openurlinedge)(LPCWSTR pszUrl, const DualEngineNewWindowOptions * options, ULONG ulCookieSyncVersion)

#### OpenURLInEdge2

> public HRESULT [OpenURLInEdge2](#openurlinedge2)(LPCWSTR pszUrl, const DualEngineNewWindowOptions * options, ULONG ulCookieSyncVersion, LPCWSTR pszReferrer, LPCWSTR pszHeaders, VARIANT * postData)

#### RequestHostAddFavorite

> public HRESULT [RequestHostAddFavorite](#requesthostaddfavorite)(LPCWSTR pszTitle, LPCWSTR pszUrl)

#### RequestHostCreateUrlTip

> public HRESULT [RequestHostCreateUrlTip](#requesthostcreateurltip)(LPCWSTR pszUrl)

#### RequestHostFocus

`RequestHostFocus` is raised when Internet Explorer requests focus to move to the host window

> public HRESULT [RequestHostFocus](#requesthostfocus)(DUALENGINE_FOCUSDIRECTION focusDirection, const MSG * msg)

#### Parameters
* `focusDirect` The direction that focus is moving. 

* `msg` A pointer to the messsage that caused the focus change.

#### RequestHostFullscreen

> public HRESULT [RequestHostFullscreen](#requesthostfullscreen)(FULLSCREENACTION fullScreenAction)

#### RequestHostHideUrlTip

> public HRESULT [RequestHostHideUrlTip](#requesthosthideurltip)()

#### RequestHostPositionChanged

> public HRESULT [RequestHostPositionChanged](#requesthostpositionchanged)(LONG nX, LONG nY, LONG nWidth, LONG nHeight, ULONGLONG hSyncEvent)

#### RequestHostShowTheater

> public HRESULT [RequestHostShowTheater](#requesthostshowtheater)(BOOL fShow)

#### RequestHostWindowFocus

> public HRESULT [RequestHostWindowFocus](#requesthostwindowfocus)(BOOL fFocus)

#### RequestHostWindowFocusSync

> public HRESULT [RequestHostWindowFocusSync](#requesthostwindowfocussync)(BOOL fFocus, ULONGLONG hSyncEvent)

#### UpdateHostFavicon

> public HRESULT [UpdateHostFavicon](#updatehostfavicon)(ULONG ulCurrentEntryId, LPCWSTR spszCurrentUrl, LPCWSTR * pIconUrls, int cIconUrls)

#### UpdateHostTitle

`UpdateHostTitle` is raised when a page loaded in Internet Explorer has an update to the title.

> public HRESULT [UpdateHostTitle](#updatehosttitle)(ULONG ulCurrentEntryId, LPCWSTR pszTitle)

#### Parameters
* `ulCurrentEntryId` The id of the page in the visible entries list that raised this event. 

* `pszTitle` The new title.

#### UpdateSecureLockIcon

> public HRESULT [UpdateSecureLockIcon](#updatesecurelockicon)(ULONG ulCurrentEntryId, SECURELOCKICON secureLockIcon)

