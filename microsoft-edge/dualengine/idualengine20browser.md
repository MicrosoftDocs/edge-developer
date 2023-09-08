---
description: 
title: DualEngine Win32 C++ IDualEngine20Browser
ms.date: 09/07/2023
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html, IDualEngine20Browser
topic_type: 
- APIRef
api_name:
- IDualEngine20Browser
- IDualEngine20Browser.DualEngineBrowserCommitted
- IDualEngine20Browser.DualEngineClose
- IDualEngine20Browser.DualEngineDeleteTabRecoveryData
- IDualEngine20Browser.DualEngineDoOnBeforeUnloadAndStop
- IDualEngine20Browser.DualEngineDPIChanged
- IDualEngine20Browser.DualEngineEnableCaretMode
- IDualEngine20Browser.DualEngineExecNavigationCommand
- IDualEngine20Browser.DualEngineFindOnPage
- IDualEngine20Browser.DualEngineForceClose
- IDualEngine20Browser.DualEngineGeolocationPermissionResponse
- IDualEngine20Browser.DualEngineGoToEntry
- IDualEngine20Browser.DualEngineInitialize
- IDualEngine20Browser.DualEngineInitialize2
- IDualEngine20Browser.DualEngineInitializeWithRecoveryData
- IDualEngine20Browser.DualEngineLostFocus
- IDualEngine20Browser.DualEngineNavigate
- IDualEngine20Browser.DualEngineNavigate2
- IDualEngine20Browser.DualEngineNotifyNavigationEntriesDeleted
- IDualEngine20Browser.DualEnginePrepareToExitRegion
- IDualEngine20Browser.DualEnginePrint
- IDualEngine20Browser.DualEngineProtectFocus
- IDualEngine20Browser.DualEngineSavePageAs
- IDualEngine20Browser.DualEngineSetEngineSwitchingPolicyFlags
- IDualEngine20Browser.DualEngineSetFocus
- IDualEngine20Browser.DualEngineSetMediaFullscreen
- IDualEngine20Browser.DualEngineSetPosition
- IDualEngine20Browser.DualEngineSetTheaterFullscreen
- IDualEngine20Browser.DualEngineSetTheaterMargins
- IDualEngine20Browser.DualEngineSetVisible
- IDualEngine20Browser.DualEngineSetWindowStyle
- IDualEngine20Browser.DualEngineSetZoom
- IDualEngine20Browser.DualEngineSimulateKeyInput
- IDualEngine20Browser.DualEngineSimulateMouseInput
- IDualEngine20Browser.DualEngineStopFindOnPage
- IDualEngine20Browser.DualEngineTranslateAccelerator
api_type:
- COM
api_location:
- embeddedbrowserwebview.dll
---

# interface IDualEngine20Browser

```
interface IDualEngine20Browser
  : public IUnknown
```

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[DualEngineBrowserCommitted](#dualenginebrowsercommitted) | 
[DualEngineClose](#dualengineclose) | 
[DualEngineDeleteTabRecoveryData](#dualenginedeletetabrecoverydata) | 
[DualEngineDoOnBeforeUnloadAndStop](#dualenginedoonbeforeunloadandstop) | 
[DualEngineDPIChanged](#dualenginedpichanged) | 
[DualEngineEnableCaretMode](#dualengineenablecaretmode) | 
[DualEngineExecNavigationCommand](#dualengineexecnavigationcommand) | 
[DualEngineFindOnPage](#dualenginefindonpage) | 
[DualEngineForceClose](#dualengineforceclose) | 
[DualEngineGeolocationPermissionResponse](#dualenginegeolocationpermissionresponse) | 
[DualEngineGoToEntry](#dualenginegotoentry) | 
[DualEngineInitialize](#dualengineinitialize) | 
[DualEngineInitialize2](#dualengineinitialize2) | 
[DualEngineInitializeWithRecoveryData](#dualengineinitializewithrecoverydata) | 
[DualEngineLostFocus](#dualenginelostfocus) | 
[DualEngineNavigate](#dualenginenavigate) | 
[DualEngineNavigate2](#dualenginenavigate2) | 
[DualEngineNotifyNavigationEntriesDeleted](#dualenginenotifynavigationentriesdeleted) | 
[DualEnginePrepareToExitRegion](#dualenginepreparetoexitregion) | 
[DualEnginePrint](#dualengineprint) | 
[DualEngineProtectFocus](#dualengineprotectfocus) | 
[DualEngineSavePageAs](#dualenginesavepageas) | 
[DualEngineSetEngineSwitchingPolicyFlags](#dualenginesetengineswitchingpolicyflags) | 
[DualEngineSetFocus](#dualenginesetfocus) | 
[DualEngineSetMediaFullscreen](#dualenginesetmediafullscreen) | 
[DualEngineSetPosition](#dualenginesetposition) | 
[DualEngineSetTheaterFullscreen](#dualenginesettheaterfullscreen) | 
[DualEngineSetTheaterMargins](#dualenginesettheatermargins) | 
[DualEngineSetVisible](#dualenginesetvisible) | 
[DualEngineSetWindowStyle](#dualenginesetwindowstyle) | 
[DualEngineSetZoom](#dualenginesetzoom) | 
[DualEngineSimulateKeyInput](#dualenginesimulatekeyinput) | 
[DualEngineSimulateMouseInput](#dualenginesimulatemouseinput) | 
[DualEngineStopFindOnPage](#dualenginestopfindonpage) | 
[DualEngineTranslateAccelerator](#dualenginetranslateaccelerator) | 

## Applies to

Product                         | Introduced
--------------------------------|---------------------------------------------
WebView2 Win32            |    <!--%RELEASE_VERSION%-->
WebView2 Win32 Prerelease |    <!--%PRERELEASE_VERSION%-->

## Members

#### DualEngineBrowserCommitted

> public HRESULT [DualEngineBrowserCommitted](#dualenginebrowsercommitted)()

#### DualEngineClose

> public HRESULT [DualEngineClose](#dualengineclose)()

#### DualEngineDeleteTabRecoveryData

> public HRESULT [DualEngineDeleteTabRecoveryData](#dualenginedeletetabrecoverydata)(REFGUID guidTabId)

#### DualEngineDoOnBeforeUnloadAndStop

> public HRESULT [DualEngineDoOnBeforeUnloadAndStop](#dualenginedoonbeforeunloadandstop)()

#### DualEngineDPIChanged

> public HRESULT [DualEngineDPIChanged](#dualenginedpichanged)()

#### DualEngineEnableCaretMode

> public HRESULT [DualEngineEnableCaretMode](#dualengineenablecaretmode)(BOOL fEnable)

#### DualEngineExecNavigationCommand

> public HRESULT [DualEngineExecNavigationCommand](#dualengineexecnavigationcommand)(NAVIGATION_COMMAND command)

#### DualEngineFindOnPage

> public HRESULT [DualEngineFindOnPage](#dualenginefindonpage)(int iRequestID, LPCWSTR pszFindText, BOOL fFindNext, BOOL fForward)

#### DualEngineForceClose

> public HRESULT [DualEngineForceClose](#dualengineforceclose)()

#### DualEngineGeolocationPermissionResponse

> public HRESULT [DualEngineGeolocationPermissionResponse](#dualenginegeolocationpermissionresponse)(LPCWSTR pszUri, SITE_PERMISSION_RESPONSE response)

#### DualEngineGoToEntry

> public HRESULT [DualEngineGoToEntry](#dualenginegotoentry)(ULONG ulEntryId)

#### DualEngineInitialize

> public HRESULT [DualEngineInitialize](#dualengineinitialize)([IDualEngine20BrowserObserver](idualengine20browserobserver.md) * pDualEngineObserver, DUALENGINECONFIGURATION config, EngineSwitchingPolicyFlags engineSwitchingPolicyFlags, SentinelEntryInfo sentinelEntryInfo, LPCWSTR pszUrl, HWND hwndHost, HWND * phwnd)

#### DualEngineInitialize2

> public HRESULT [DualEngineInitialize2](#dualengineinitialize2)([IDualEngine20BrowserObserver](idualengine20browserobserver.md) * pDualEngineObserver, DUALENGINECONFIGURATION config, EngineSwitchingPolicyFlags engineSwitchingPolicyFlags, SentinelEntryInfo sentinelEntryInfo, LPCWSTR pszUrl, HWND hwndHost, HWND * phwnd, LPCWSTR pszReferrer, LPCWSTR pszHeaders, VARIANT * postData)

#### DualEngineInitializeWithRecoveryData

> public HRESULT [DualEngineInitializeWithRecoveryData](#dualengineinitializewithrecoverydata)(REFGUID guidTabId, ULONG ulEntryId, [IDualEngine20BrowserObserver](idualengine20browserobserver.md) * pDualEngineObserver, DUALENGINECONFIGURATION config, EngineSwitchingPolicyFlags engineSwitchingPolicyFlags, SentinelEntryInfo sentinelEntryInfo, LPCWSTR pszUrl, HWND hwndHost, HWND * phwnd)

#### DualEngineLostFocus

> public HRESULT [DualEngineLostFocus](#dualenginelostfocus)(HWND hwndLostFocus)

#### DualEngineNavigate

> public HRESULT [DualEngineNavigate](#dualenginenavigate)(LPCWSTR pszUrl, BOOL fSkipOnBeforeUnload)

#### DualEngineNavigate2

> public HRESULT [DualEngineNavigate2](#dualenginenavigate2)(LPCWSTR pszUrl, BOOL fSkipOnBeforeUnload, LPCWSTR pszReferrer, LPCWSTR pszHeaders, VARIANT * postData)

#### DualEngineNotifyNavigationEntriesDeleted

> public HRESULT [DualEngineNotifyNavigationEntriesDeleted](#dualenginenotifynavigationentriesdeleted)(BOOL fShouldDeleteEntries, SentinelEntryInfo sentinelEntryInfo)

#### DualEnginePrepareToExitRegion

> public HRESULT [DualEnginePrepareToExitRegion](#dualenginepreparetoexitregion)(EXIT_REGION_TYPE type)

#### DualEnginePrint

> public HRESULT [DualEnginePrint](#dualengineprint)()

#### DualEngineProtectFocus

> public HRESULT [DualEngineProtectFocus](#dualengineprotectfocus)(BOOL fProtectFocus)

#### DualEngineSavePageAs

> public HRESULT [DualEngineSavePageAs](#dualenginesavepageas)()

#### DualEngineSetEngineSwitchingPolicyFlags

> public HRESULT [DualEngineSetEngineSwitchingPolicyFlags](#dualenginesetengineswitchingpolicyflags)(EngineSwitchingPolicyFlags engineSwitchingPolicyFlags)

#### DualEngineSetFocus

> public HRESULT [DualEngineSetFocus](#dualenginesetfocus)(DUALENGINE_FOCUSDIRECTION focusDirection)

#### DualEngineSetMediaFullscreen

> public HRESULT [DualEngineSetMediaFullscreen](#dualenginesetmediafullscreen)(BOOL fFullscreen)

#### DualEngineSetPosition

> public HRESULT [DualEngineSetPosition](#dualenginesetposition)(int x, int y, int iWidth, int iHeight)

#### DualEngineSetTheaterFullscreen

> public HRESULT [DualEngineSetTheaterFullscreen](#dualenginesettheaterfullscreen)(BOOL fFullscreen)

#### DualEngineSetTheaterMargins

> public HRESULT [DualEngineSetTheaterMargins](#dualenginesettheatermargins)(BOOL fTheaterShowing, int yTheaterThreshold)

#### DualEngineSetVisible

> public HRESULT [DualEngineSetVisible](#dualenginesetvisible)(BROWSERVISIBILITY visibility)

#### DualEngineSetWindowStyle

> public HRESULT [DualEngineSetWindowStyle](#dualenginesetwindowstyle)(int wlStyle, int wlExStyle)

#### DualEngineSetZoom

> public HRESULT [DualEngineSetZoom](#dualenginesetzoom)(int iZoomPercent)

#### DualEngineSimulateKeyInput

> public HRESULT [DualEngineSimulateKeyInput](#dualenginesimulatekeyinput)(DWORD vKey, KEYACTION keyAction)

#### DualEngineSimulateMouseInput

> public HRESULT [DualEngineSimulateMouseInput](#dualenginesimulatemouseinput)(DWORD x, DWORD y, MOUSEACTION mouseAction)

#### DualEngineStopFindOnPage

> public HRESULT [DualEngineStopFindOnPage](#dualenginestopfindonpage)(BOOL fClean)

#### DualEngineTranslateAccelerator

> public HRESULT [DualEngineTranslateAccelerator](#dualenginetranslateaccelerator)(LPMSG lpMsg)

