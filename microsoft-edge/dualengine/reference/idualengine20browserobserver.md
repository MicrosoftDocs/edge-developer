---
title: DualEngine Win32 C++ IDualEngine20BrowserObserver
description: Receives events from the Browser.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: windows-integration
ms.date: 03/04/2024
keywords: dual engine, dualengine, iemode, win32 apps, win32, edge, ie mode, edge html, IDualEngine20BrowserObserver
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
- ieframe.dll
---

# interface IDualEngine20BrowserObserver

> [!IMPORTANT]
> The DualEngine API is part of a Limited Access Feature (see [LimitedAccessFeatures class](/uwp/api/windows.applicationmodel.limitedaccessfeatures)). For more information or 
> to request an unlock token, contact [Microsoft Support](https://support.serviceshub.microsoft.com/supportforbusiness/create?sapId=d15d3aa2-0512-7cb8-1df9-86221f5cbfde).

```cpp
interface IDualEngine20BrowserObserver
  : public IUnknown
```

Receives events from the Browser.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[ContinueNavigationInEdge](#continuenavigationinedge) | Raised when the browser wants to stop hosting content and have the navigation to the URL continue in the hosting process.
[ContinueNavigationInEdge2](#continuenavigationinedge2) | Raised when the browser wants to stop hosting content and have the navigation to the URL continue in the hosting process; this version provides extra information about the navigation.
[NavigateToOffsetInEdge](#navigatetooffsetinedge) | Raised when the browser requests to navigate to a travel log entry offset.
[OnAllButCurrentEntryDeleted](#onallbutcurrententrydeleted) | Raised when the browser has deleted all entries in its travel log except for the current entry.
[OnAsyncHungCheckReply](#onasynchungcheckreply) | Raised when the browser processes an async hang check message, see [IDualEngine20BrowserSession::SetHangDetectionMessages()](idualengine20browsersession.md#sethangdetectionmessages).
[OnAttentionState](#onattentionstate) | Raised when requesting user attention.
[OnBeforeUnloadAndStopComplete](#onbeforeunloadandstopcomplete) | Raised when the beforeUnload event has finished being processed.
[OnCloseCompleted](#onclosecompleted) | Raised when the browser has closed.
[OnCloseRequested](#oncloserequested) | Raised when the browser has requested to close.
[OnDialogShown](#ondialogshown) | Raised when a the browser shows or hides a modal dialog.
[OnDocumentComplete](#ondocumentcomplete) | Raised when a document is completely loaded and initialized.
[OnDocumentModeSet](#ondocumentmodeset) | Raised when the document mode has changed.
[OnEnterpriseIDSet](#onenterpriseidset) | Raised when a navigation has been completed; provides information about the enterprise ID.
[OnFindOnPageResult](#onfindonpageresult) | Raised when find on page results change.
[OnFinishedSetFocus](#onfinishedsetfocus) | Raised when a [IDualEngine20Browser::DualEngineSetFocus()](idualengine20browser.md#dualenginesetfocus) request has finished being processed.
[OnGeolocationFeatureInUse](#ongeolocationfeatureinuse) | Raised when geolocation data is accessed.
[OnGeolocationPermissionRequested](#ongeolocationpermissionrequested) | Raised when user permission is needed to enable geolocation.
[OnHasBeforeUnloadChanged](#onhasbeforeunloadchanged) | Raised when an `OnBeforeUnload` handler has been registered or removed.
[OnIndicatorItemsSet](#onindicatoritemsset) | Raised when a navigation has been completed; provides status information about the current state of the browser page.
[OnInputAttempted](#oninputattempted) | Raised when user input is received.
[OnLoadingActivityChanged](#onloadingactivitychanged) | Raised when the page's loading state changes.
[OnMixedContentBlocked](#onmixedcontentblocked) | Raised when Mixed Content has been blocked.
[OnNavigationComplete](#onnavigationcomplete) | Raised when a navigation has been completed.
[OnNavigationFailed](#onnavigationfailed) | Raised when a navigation fails.
[OnNavigationToDownload](#onnavigationtodownload) | Raised when a navigation has ended in a download.
[OnNewWindow](#onnewwindow) | Raised when a new window has been created.
[OnPopupBlocked](#onpopupblocked) | Raised when a popup window was blocked.
[OnPrepareToExitRegionFailed](#onpreparetoexitregionfailed) | Raised when the browser has failed to a handle a previous [IDualEngine20Browser::DualEnginePrepareToExitRegion()](idualengine20browser.md#dualenginepreparetoexitregion) call.
[OnReadyToExitRegion](#onreadytoexitregion) | Raised when the browser has successfully handled a previous [IDualEngine20Browser::DualEnginePrepareToExitRegion()](idualengine20browser.md#dualenginepreparetoexitregion) call.
[OnTabCrashed](#ontabcrashed) | Raised when the tab has crashed.
[OnTabHangReported](#ontabhangreported) | Raised when the browser is hung.
[OnUnexpectedRundown](#onunexpectedrundown) | Raised when the browser has closed unexpectedly.
[OnUnhandledKeyboardAccelerator](#onunhandledkeyboardaccelerator) | Raised when processing a keyboard accelerator and it is determined that the browser does not, or should not based on `rgHostPriorityAccels`, handle that accelerator.
[OnUnhandledKeyboardAcceleratorAsync](#onunhandledkeyboardacceleratorasync) | Raised when processing a keyboard accelerator and it is determined that browser does not, or should not based on `rgHostPriorityAccels`, handle that accelerator.
[OnVisibleComplete](#onvisiblecomplete) | Raised when the content of the page is being made visible.
[OnZoomChanged](#onzoomchanged) | Raised when the zoom has changed.
[OpenURLInEdge](#openurlinedge) | Raised when the browser is requesting the host to navigate to a URL in a new window.
[OpenURLInEdge2](#openurlinedge2) | Raised when the browser is requesting the host to navigate to a URL in a new window; this version provides extra information about the navigation.
[RequestHostAddFavorite](#requesthostaddfavorite) | Raised when a page has been requested to be added to favorites.
[RequestHostCreateUrlTip](#requesthostcreateurltip) | Raised when requesting to show a tooltip containing a URL.
[RequestHostFocus](#requesthostfocus) | Raised when focus is being requested to move to the host window.
[RequestHostFullscreen](#requesthostfullscreen) | Raised when the page is requesting that the host display content in fullscreen.
[RequestHostHideUrlTip](#requesthosthideurltip) | Raised when requesting to hide a tooltip containing a URL.
[RequestHostPositionChanged](#requesthostpositionchanged) | Raised when the browser requests that the host change its size or position.
[RequestHostShowTheater](#requesthostshowtheater) | Raised when the browser is requesting the host to enter or leave theater mode.
[RequestHostWindowFocus](#requesthostwindowfocus) | Raised when the host is requested to take or give up focus.
[RequestHostWindowFocusSync](#requesthostwindowfocussync) | Raised when the host is requested to take or give up focus.
[UpdateHostFavicon](#updatehostfavicon) | Raised when the favicon has changed.
[UpdateHostTitle](#updatehosttitle) | Raised when the title of the page has been updated.
[UpdateSecureLockIcon](#updatesecurelockicon) | Raised when security information of the page has changed.

## Applies to

Product   |Introduced
--------- | ---------
Windows 10, Version 20H1   |KB5032278
Windows 11, Version 22H2   |KB5032288

## Members

#### ContinueNavigationInEdge

Raised when the browser wants to stop hosting content and have the navigation to the URL continue in the hosting process.

> public HRESULT [ContinueNavigationInEdge](#continuenavigationinedge)(LPCWSTR pszUrl, ULONG ulCookieSyncVersion)

###### Parameters
* `pszUrl` The URL that should be navigated to. 

* `ulCookieSyncVersion` A number that can be used to correlate a navigation with a specific cookie state.

#### ContinueNavigationInEdge2

Raised when the browser wants to stop hosting content and have the navigation to the URL continue in the hosting process; this version provides extra information about the navigation.

> public HRESULT [ContinueNavigationInEdge2](#continuenavigationinedge2)(LPCWSTR pszUrl, ULONG ulCookieSyncVersion, LPCWSTR pszReferrer, LPCWSTR pszHeaders, VARIANT * postData)

###### Parameters
* `pszUrl` The URL that should be navigated to. 

* `ulCookieSyncVersion` A number that can be used to correlate a navigation with a specific cookie state. 

* `pszReferrer` The HTTP Referer request header. 

* `pszHeaders` Additional HTTP headers. 

* `postData` HTTP POST data, such as form data.

#### NavigateToOffsetInEdge

Raised when the browser requests to navigate to a travel log entry offset.

> public HRESULT [NavigateToOffsetInEdge](#navigatetooffsetinedge)(int iOffset)

###### Parameters
* `iOffset` The offset to navigate to.

#### OnAllButCurrentEntryDeleted

Raised when the browser has deleted all entries in its travel log except for the current entry.

> public HRESULT [OnAllButCurrentEntryDeleted](#onallbutcurrententrydeleted)([VisibleListUpdateEntry](visiblelistupdateentry.md) * pVisibleListEntries, int cVisibleListEntries)

###### Parameters
* `pVisibleListEntries` A list containing the new travel log entries since the last update. In this case it will only have the current active entry. 

* `cVisibleListEntries` The number of items in `pVisibleListEntries`

#### OnAsyncHungCheckReply

Raised when the browser processes an async hang check message, see [IDualEngine20BrowserSession::SetHangDetectionMessages()](idualengine20browsersession.md#sethangdetectionmessages).

> public HRESULT [OnAsyncHungCheckReply](#onasynchungcheckreply)(ULONG correlationId)

###### Parameters
* `correlationId` Id to correlate the reply with the sent message.

#### OnAttentionState

Raised when requesting user attention.

> public HRESULT [OnAttentionState](#onattentionstate)(ATTENTIONSTATE attentionState)

###### Parameters
* `attentionState` The reason that user attention is being requested.

#### OnBeforeUnloadAndStopComplete

Raised when the beforeUnload event has finished being processed.

> public HRESULT [OnBeforeUnloadAndStopComplete](#onbeforeunloadandstopcomplete)(BOOL agreeToClose)

###### Parameters
* `agreeToClose` Indicates whether the user has agreed to leave the page.

#### OnCloseCompleted

Raised when the browser has closed.

> public HRESULT [OnCloseCompleted](#onclosecompleted)()

#### OnCloseRequested

Raised when the browser has requested to close.

> public HRESULT [OnCloseRequested](#oncloserequested)()

#### OnDialogShown

Raised when a the browser shows or hides a modal dialog.

> public HRESULT [OnDialogShown](#ondialogshown)(BOOL fShown)

###### Parameters
* `fShown` Indicates whether the dialog was shown or hidden.

#### OnDocumentComplete

Raised when a document is completely loaded and initialized.

> public HRESULT [OnDocumentComplete](#ondocumentcomplete)(ULONG ulCurrentEntryId, [VisibleListUpdateEntry](visiblelistupdateentry.md) * pVisibleListEntries, int cVisibleListEntries)

###### Parameters
* `ulCurrentEntryId` The travel log entry ID for the page that raised this event. 

* `pVisibleListEntries` A list containing the new travel log entries since the last update. 

* `cVisibleListEntries` The number of items in `pVisibleListEntries`

#### OnDocumentModeSet

Raised when the document mode has changed.

> public HRESULT [OnDocumentModeSet](#ondocumentmodeset)(ULONG documentMode)

###### Parameters
* `documentMode` The new document mode version.

#### OnEnterpriseIDSet

Raised when a navigation has been completed; provides information about the enterprise ID.

> public HRESULT [OnEnterpriseIDSet](#onenterpriseidset)(BOOL fEnterpriseID)

###### Parameters
* `fEnterpriseID` Indicates whether the browser has an enterprise ID set.

#### OnFindOnPageResult

Raised when find on page results change.

> public HRESULT [OnFindOnPageResult](#onfindonpageresult)(int iRequestID, int cMatches, int iActiveMatch)

###### Parameters
* `iRequestID` An ID to correlate results with [IDualEngine20Browser::DualEngineFindOnPage()](idualengine20browser.md#dualenginefindonpage) requests. 

* `cMatches` The count of matches. 

* `iActiveMatch` The index of the selected match.

#### OnFinishedSetFocus

Raised when a [IDualEngine20Browser::DualEngineSetFocus()](idualengine20browser.md#dualenginesetfocus) request has finished being processed.

> public HRESULT [OnFinishedSetFocus](#onfinishedsetfocus)()

#### OnGeolocationFeatureInUse

Raised when geolocation data is accessed.

> public HRESULT [OnGeolocationFeatureInUse](#ongeolocationfeatureinuse)(LPCWSTR pszContextUrl, SITE_PERMISSION_FEATURE_MODE featureMode)

###### Parameters
* `pszContextUrl` The URL of the page accessing geolocation data. 

* `featureMode` Indicates whether the access was blocked or allowed.

#### OnGeolocationPermissionRequested

Raised when user permission is needed to enable geolocation.

> public HRESULT [OnGeolocationPermissionRequested](#ongeolocationpermissionrequested)(LPCWSTR pszContextUrl)

###### Parameters
* `pszContextUrl` The URL of the page requesting geolocation permission.

#### OnHasBeforeUnloadChanged

Raised when an `OnBeforeUnload` handler has been registered or removed.

> public HRESULT [OnHasBeforeUnloadChanged](#onhasbeforeunloadchanged)(BOOL fBeforeUnload)

###### Parameters
* `fBeforeUnload` `true` indicates that an `OnBeforeUnload` handler was registered; `false` indicates it was removed.

#### OnIndicatorItemsSet

Raised when a navigation has been completed; provides status information about the current state of the browser page.

> public HRESULT [OnIndicatorItemsSet](#onindicatoritemsset)(BOOL fProtectedMode, BOOL fEnhancedProtectedMode, DWORD dwUrlZone, BOOL fEnterpriseMode)

###### Parameters
* `fProtectedMode` Indicates whether the browser is in Protected Mode. 

* `fEnhancedProtectedMode` Indicates whether the browser is in Enhanced Protected Mode. 

* `dwUrlZone` The zone of the current URL. 

* `fEnterpriseMode` Indicates whether the browser is in Enterprise Mode.

#### OnInputAttempted

Raised when user input is received.

> public HRESULT [OnInputAttempted](#oninputattempted)()

#### OnLoadingActivityChanged

Raised when the page's loading state changes.

> public HRESULT [OnLoadingActivityChanged](#onloadingactivitychanged)(BOOL fLoading)

###### Parameters
* `fLoading` Indicates whether the page is loading or not.

#### OnMixedContentBlocked

Raised when Mixed Content has been blocked.

> public HRESULT [OnMixedContentBlocked](#onmixedcontentblocked)()

#### OnNavigationComplete

Raised when a navigation has been completed.

> public HRESULT [OnNavigationComplete](#onnavigationcomplete)(REFGUID guidTabId, ULONG ulCurrentEntryId, [VisibleListUpdateEntry](visiblelistupdateentry.md) * pVisibleListEntries, int cVisibleListEntries, DWORD dwNavFlags, SECURELOCKICON secureLockIcon, DWORD dwSecurityFlags, [CryptDataBlob](cryptdatablob.md) * pDualEngineCertificates, int cCertificateChainBlobs)

###### Parameters
* `guidTabId` The recovery GUID for tab. 

* `ulCurrentEntryId` The ID representing this navigation in the visible-entries list. 

* `pVisibleListEntries` A list containing the new travel log entries since the last update. 

* `cVisibleListEntries` The number of items in `pVisibleListEntries`. 

* `dwNavFlags` Flags indicating the type of navigation that occurred. 

* `secureLockIcon` The security state of the page. 

* `dwSecurityFlags` Flags indicating any certificate errors for the page. 

* `pDualEngineCertificates` A list containing the certificate chain for the current entry's page. 

* `cCertificateChainBlobs` The number of items in `pDualEngineCertificates`.

#### OnNavigationFailed

Raised when a navigation fails.

> public HRESULT [OnNavigationFailed](#onnavigationfailed)(NAVIGATIONFAILEDREASON failureReason)

###### Parameters
* `failureReason` The reason the navigation failed.

#### OnNavigationToDownload

Raised when a navigation has ended in a download.

> public HRESULT [OnNavigationToDownload](#onnavigationtodownload)()

#### OnNewWindow

Raised when a new window has been created.

> public HRESULT [OnNewWindow](#onnewwindow)([IDualEngine20Browser](idualengine20browser.md) * pNewBrowser, HWND hwnd, const [DualEngineNewWindowOptions](dualenginenewwindowoptions.md) * options, [IDualEngine20BrowserObserver](idualengine20browserobserver.md) ** ppObserver)

###### Parameters
* `pNewBrowser` The browser object for the new window. 

* `hwnd` The handle for the new window. 

* `options` The options that the new window was created with. 

* `ppObserver` The observer object for the new window.

#### OnPopupBlocked

Raised when a popup window was blocked.

> public HRESULT [OnPopupBlocked](#onpopupblocked)(LPCWSTR pszContextUrl, LPCWSTR pszPopupUrl)

###### Parameters
* `pszContextUrl` The URL of the page that issued the command to open the popup. 

* `pszPopupUrl` The URL of the popup page.

#### OnPrepareToExitRegionFailed

Raised when the browser has failed to a handle a previous [IDualEngine20Browser::DualEnginePrepareToExitRegion()](idualengine20browser.md#dualenginepreparetoexitregion) call.

> public HRESULT [OnPrepareToExitRegionFailed](#onpreparetoexitregionfailed)()

#### OnReadyToExitRegion

Raised when the browser has successfully handled a previous [IDualEngine20Browser::DualEnginePrepareToExitRegion()](idualengine20browser.md#dualenginepreparetoexitregion) call.

> public HRESULT [OnReadyToExitRegion](#onreadytoexitregion)(REFGUID guidClonedTabId, ULONG ulCurrentEntryId, [VisibleListUpdateEntry](visiblelistupdateentry.md) * pVisibleListEntriesComplete, int cVisibleListEntriesComplete)

###### Parameters
* `guidClonedTabId` The GUID of the tab recovery data file backing the exited region. 

* `ulCurrentEntryId` The travel log entry ID for the page that raised this event. 

* `pVisibleListEntriesComplete` A list containing the new travel log entries since the last update. 

* `cVisibleListEntriesComplete` The number of items in `pVisibleListEntriesComplete`

#### OnTabCrashed

Raised when the tab has crashed.

> public HRESULT [OnTabCrashed](#ontabcrashed)(BOOL fUnrecoverable)

###### Parameters
* `fUnrecoverable` Indicates whether the tab is recoverable.

#### OnTabHangReported

Raised when the browser is hung.

> public HRESULT [OnTabHangReported](#ontabhangreported)()

#### OnUnexpectedRundown

Raised when the browser has closed unexpectedly.

> public HRESULT [OnUnexpectedRundown](#onunexpectedrundown)()

#### OnUnhandledKeyboardAccelerator

Raised when processing a keyboard accelerator and it is determined that the browser does not, or should not based on `rgHostPriorityAccels`, handle that accelerator.

> public HRESULT [OnUnhandledKeyboardAccelerator](#onunhandledkeyboardaccelerator)(LPMSG lpMsg)

###### Parameters
* `lpMsg` The win32 message for the unhandled keyboard accelerator. 

#### OnUnhandledKeyboardAcceleratorAsync

Raised when processing a keyboard accelerator and it is determined that browser does not, or should not based on `rgHostPriorityAccels`, handle that accelerator.

> public HRESULT [OnUnhandledKeyboardAcceleratorAsync](#onunhandledkeyboardacceleratorasync)(LPMSG pMsg, BOOL isShiftDown, BOOL isCtrlDown, BOOL isAltDown)

In this version of the method, the event is raised asynchronously and keyboard state may have changed since it was processed, so the state of the modifier keys is provided. 
###### Parameters
* `pMsg` The win32 message for the unhandled keyboard accelerator. 

* `isShiftDown` Indicates whether the **Shift** key was pressed. 

* `isCtrlDown` Indicates whether the **Ctrl** key was pressed. 

* `isAltDown` Indicates whether the **Alt** key was pressed.

#### OnVisibleComplete

Raised when the content of the page is being made visible.

> public HRESULT [OnVisibleComplete](#onvisiblecomplete)()

#### OnZoomChanged

Raised when the zoom has changed.

> public HRESULT [OnZoomChanged](#onzoomchanged)(ULONG ulZoomPercent)

###### Parameters
* `ulZoomPercent` The new zoom percentage.

#### OpenURLInEdge

Raised when the browser is requesting the host to navigate to a URL in a new window.

> public HRESULT [OpenURLInEdge](#openurlinedge)(LPCWSTR pszUrl, const [DualEngineNewWindowOptions](dualenginenewwindowoptions.md) * options, ULONG ulCookieSyncVersion)

###### Parameters
* `pszUrl` The URL to navigate to. 

* `options` Options to apply to the new window. 

* `ulCookieSyncVersion` A number that can be used to correlate a navigation with a specific cookie state.

#### OpenURLInEdge2

Raised when the browser is requesting the host to navigate to a URL in a new window; this version provides extra information about the navigation.

> public HRESULT [OpenURLInEdge2](#openurlinedge2)(LPCWSTR pszUrl, const [DualEngineNewWindowOptions](dualenginenewwindowoptions.md) * options, ULONG ulCookieSyncVersion, LPCWSTR pszReferrer, LPCWSTR pszHeaders, VARIANT * postData)

###### Parameters
* `pszUrl` The URL to navigate to. 

* `options` Options to apply to the navigation. 

* `ulCookieSyncVersion` A number that can be used to correlate a navigation with a specific cookie state. 

* `pszReferrer` The HTTP Referer request header. 

* `pszHeaders` Additional HTTP headers. 

* `postData` HTTP POST data, such as form data.

#### RequestHostAddFavorite

Raised when a page has been requested to be added to favorites.

> public HRESULT [RequestHostAddFavorite](#requesthostaddfavorite)(LPCWSTR pszTitle, LPCWSTR pszUrl)

###### Parameters
* `pszTitle` The title of the page. 

* `pszUrl` The URL of the page.

#### RequestHostCreateUrlTip

Raised when requesting to show a tooltip containing a URL.

> public HRESULT [RequestHostCreateUrlTip](#requesthostcreateurltip)(LPCWSTR pszUrl)

###### Parameters
* `pszUrl` The URL to display in the tooltip.

#### RequestHostFocus

Raised when focus is being requested to move to the host window.

> public HRESULT [RequestHostFocus](#requesthostfocus)(DUALENGINE_FOCUSDIRECTION focusDirection, const MSG * msg)

###### Parameters
* `focusDirection` The direction that focus is moving. 

* `msg` A pointer to the message that caused the focus change.

#### RequestHostFullscreen

Raised when the page is requesting that the host display content in fullscreen.

> public HRESULT [RequestHostFullscreen](#requesthostfullscreen)(FULLSCREENACTION fullScreenAction)

###### Parameters
* `fullScreenAction` The fullscreen action that is being requested.

#### RequestHostHideUrlTip

Raised when requesting to hide a tooltip containing a URL.

> public HRESULT [RequestHostHideUrlTip](#requesthosthideurltip)()

#### RequestHostPositionChanged

Raised when the browser requests that the host change its size or position.

> public HRESULT [RequestHostPositionChanged](#requesthostpositionchanged)(LONG nX, LONG nY, LONG nWidth, LONG nHeight, ULONGLONG hSyncEvent)

###### Parameters
* `nX` The requested window X position. 

* `nY` The requested window Y position. 

* `nWidth` The requested window width. 

* `nHeight` The requested window height. 

* `hSyncEvent` A handle to the event object that should be signaled when the change is complete.

#### RequestHostShowTheater

Raised when the browser is requesting the host to enter or leave theater mode.

> public HRESULT [RequestHostShowTheater](#requesthostshowtheater)(BOOL fShow)

###### Parameters
* `fShow` If `true`, the host is being requested to enter theater mode; if `false`, it is being requested to leave theater mode.

#### RequestHostWindowFocus

Raised when the host is requested to take or give up focus.

> public HRESULT [RequestHostWindowFocus](#requesthostwindowfocus)(BOOL fFocus)

###### Parameters
* `fFocus` Indicates what should be done with focus. If `true`, focus should be taken; otherwise it should be relinquished.

#### RequestHostWindowFocusSync

Raised when the host is requested to take or give up focus.

> public HRESULT [RequestHostWindowFocusSync](#requesthostwindowfocussync)(BOOL fFocus, ULONGLONG hSyncEvent)

In this version of the method, the browser will wait until the provided event is signaled. 
###### Parameters
* `fFocus` Indicates what should be done with focus. If `true`, focus should be taken; otherwise it should be relinquished. 

* `hSyncEvent` A handle to the event object that should be signaled when the change is complete.

#### UpdateHostFavicon

Raised when the favicon has changed.

> public HRESULT [UpdateHostFavicon](#updatehostfavicon)(ULONG ulCurrentEntryId, LPCWSTR spszCurrentUrl, LPCWSTR * pIconUrls, int cIconUrls)

###### Parameters
* `ulCurrentEntryId` The travel log entry ID for the page that raised this event. 

* `spszCurrentUrl` The URL of the page. 

* `pIconUrls` A list of favicon URLs. 

* `cIconUrls` The number of items in `pIconUrls`.

#### UpdateHostTitle

Raised when the title of the page has been updated.

> public HRESULT [UpdateHostTitle](#updatehosttitle)(ULONG ulCurrentEntryId, LPCWSTR pszTitle)

###### Parameters
* `ulCurrentEntryId` The ID of the page in the visible-entries list that raised this event. 

* `pszTitle` The new title.

#### UpdateSecureLockIcon

Raised when security information of the page has changed.

> public HRESULT [UpdateSecureLockIcon](#updatesecurelockicon)(ULONG ulCurrentEntryId, SECURELOCKICON secureLockIcon)

###### Parameters
* `ulCurrentEntryId` The travel log entry for this change. 

* `secureLockIcon` The state of the security information.
