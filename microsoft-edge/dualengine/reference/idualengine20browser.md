---
title: DualEngine Win32 C++ IDualEngine20Browser
description: Represents an Internet Explorer tab.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: windows-integration
ms.date: 03/04/2024
keywords: dual engine, dualengine, iemode, win32 apps, win32, edge, ie mode, edge html, IDualEngine20Browser
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
- ieframe.dll
---

# interface IDualEngine20Browser

> [!IMPORTANT]
> The DualEngine API is part of a Limited Access Feature (see [LimitedAccessFeatures class](/uwp/api/windows.applicationmodel.limitedaccessfeatures)). For more information or 
> to request an unlock token, contact [Microsoft Support](https://support.serviceshub.microsoft.com/supportforbusiness/create?sapId=d15d3aa2-0512-7cb8-1df9-86221f5cbfde).

```cpp
interface IDualEngine20Browser
  : public IUnknown
```

Represents an Internet Explorer tab.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[DualEngineBrowserCommitted](#dualenginebrowsercommitted) | Notifies the browser that it has been committed and is no longer speculative.
[DualEngineClose](#dualengineclose) | Closes the browser instance.
[DualEngineDeleteTabRecoveryData](#dualenginedeletetabrecoverydata) | Deletes tab recovery data.
[DualEngineDoOnBeforeUnloadAndStop](#dualenginedoonbeforeunloadandstop) | Stops any navigations that are in progress and runs the `onBeforeUnload` handlers.
[DualEngineDPIChanged](#dualenginedpichanged) | Notifies that DPI has changed and page layout should be recalculated.
[DualEngineEnableCaretMode](#dualengineenablecaretmode) | Enables or disables Caret Browsing mode.
[DualEngineExecNavigationCommand](#dualengineexecnavigationcommand) | Executes a navigation command.
[DualEngineFindOnPage](#dualenginefindonpage) | Finds an instance of text on the page.
[DualEngineForceClose](#dualengineforceclose) | Force-closes the browser instance.
[DualEngineGeolocationPermissionResponse](#dualenginegeolocationpermissionresponse) | Provides a response to a geolocation permission request.
[DualEngineGoToEntry](#dualenginegotoentry) | Navigates to a specific travel log entry.
[DualEngineInitialize](#dualengineinitialize) | Initializes the browser object with an URL.
[DualEngineInitialize2](#dualengineinitialize2) | Initializes the browser object with an URL; this version allows for additional information about the initial navigation to be passed in.
[DualEngineInitializeWithRecoveryData](#dualengineinitializewithrecoverydata) | Initializes the browser object using tab recovery data.
[DualEngineLostFocus](#dualenginelostfocus) | Notifies the browser that it has lost focus.
[DualEngineNavigate](#dualenginenavigate) | Navigates to a URL.
[DualEngineNavigate2](#dualenginenavigate2) | Navigates to a URL, with additional information about the navigation.
[DualEngineNotifyNavigationEntriesDeleted](#dualenginenotifynavigationentriesdeleted) | Notifies that navigation entries have been deleted.
[DualEnginePrepareToExitRegion](#dualenginepreparetoexitregion) | Notifies the browser that a navigation is occurring to a page that will be handled by the host.
[DualEnginePrint](#dualengineprint) | Invokes the Print dialog for the current page.
[DualEngineProtectFocus](#dualengineprotectfocus) | Controls whether the browser tries to change focus to itself.
[DualEngineSavePageAs](#dualenginesavepageas) | Invokes the **Save Webpage** dialog for the current page.
[DualEngineSetEngineSwitchingPolicyFlags](#dualenginesetengineswitchingpolicyflags) | Sets flags that determine how the browser handles engine switching.
[DualEngineSetFocus](#dualenginesetfocus) | Sets focus inside the hosted browser.
[DualEngineSetMediaFullscreen](#dualenginesetmediafullscreen) | Changes the full-screen state of the media playing in the browser.
[DualEngineSetPosition](#dualenginesetposition) | Sets the size and position of the browser window.
[DualEngineSetTheaterFullscreen](#dualenginesettheaterfullscreen) | Changes the Theater mode state of the browser.
[DualEngineSetTheaterMargins](#dualenginesettheatermargins) | Adjusts the top margin of the browser window when it is being displayed in theater mode.
[DualEngineSetVisible](#dualenginesetvisible) | Notifies the browser of a visibility change.
[DualEngineSetWindowStyle](#dualenginesetwindowstyle) | Changes the style of the browser window.
[DualEngineSetZoom](#dualenginesetzoom) | Changes the zoom value of the browser.
[DualEngineSimulateKeyInput](#dualenginesimulatekeyinput) | Sends a simulated key input.
[DualEngineSimulateMouseInput](#dualenginesimulatemouseinput) | Sends a simulated mouse input.
[DualEngineStopFindOnPage](#dualenginestopfindonpage) | Stops the find operation.
[DualEngineTranslateAccelerator](#dualenginetranslateaccelerator) | Processes an accelerator message.

## Applies to

Product   |Introduced
--------- | ---------
Windows 10, Version 20H1   |KB5032278
Windows 11, Version 22H2   |KB5032288

## Members

#### DualEngineBrowserCommitted

Notifies the browser that it has been committed and is no longer speculative.

> public HRESULT [DualEngineBrowserCommitted](#dualenginebrowsercommitted)()

#### DualEngineClose

Closes the browser instance.

> public HRESULT [DualEngineClose](#dualengineclose)()

#### DualEngineDeleteTabRecoveryData

Deletes tab recovery data.

> public HRESULT [DualEngineDeleteTabRecoveryData](#dualenginedeletetabrecoverydata)(REFGUID guidTabId)

###### Parameters
* `guidTabId` The GUID for the source recovery data file to delete.

#### DualEngineDoOnBeforeUnloadAndStop

Stops any navigations that are in progress and runs the `onBeforeUnload` handlers.

> public HRESULT [DualEngineDoOnBeforeUnloadAndStop](#dualenginedoonbeforeunloadandstop)()

#### DualEngineDPIChanged

Notifies that DPI has changed and page layout should be recalculated.

> public HRESULT [DualEngineDPIChanged](#dualenginedpichanged)()

#### DualEngineEnableCaretMode

Enables or disables Caret Browsing mode.

> public HRESULT [DualEngineEnableCaretMode](#dualengineenablecaretmode)(BOOL fEnable)

###### Parameters
* `fEnable` Specifies whether caret browsing should be enabled. 

#### DualEngineExecNavigationCommand

Executes a navigation command.

> public HRESULT [DualEngineExecNavigationCommand](#dualengineexecnavigationcommand)(NAVIGATION_COMMAND command)

###### Parameters
* `command` The navigation command to execute.

#### DualEngineFindOnPage

Finds an instance of text on the page.

> public HRESULT [DualEngineFindOnPage](#dualenginefindonpage)(int iRequestID, LPCWSTR pszFindText, BOOL fFindNext, BOOL fForward)

###### Parameters
* `iRequestID` An ID to use correlate find on page requests and events. 

* `pszFindText` The text to find on the page. 

* `fFindNext` Indicates whether the selection should move to the next instance the find text, true advances the selection and false does not. 

* `fForward` Indicates the direction the selection should me, true moves forward and false moves backwards.

#### DualEngineForceClose

Force-closes the browser instance.

> public HRESULT [DualEngineForceClose](#dualengineforceclose)()

#### DualEngineGeolocationPermissionResponse

Provides a response to a geolocation permission request.

> public HRESULT [DualEngineGeolocationPermissionResponse](#dualenginegeolocationpermissionresponse)(LPCWSTR pszUri, SITE_PERMISSION_RESPONSE response)

###### Parameters
* `pszUri` The URI the geolocation request was from. 

* `response` The response to the request.

#### DualEngineGoToEntry

Navigates to a specific travel log entry.

> public HRESULT [DualEngineGoToEntry](#dualenginegotoentry)(ULONG ulEntryId)

###### Parameters
* `ulEntryId` The travel log entry ID to navigate to.

#### DualEngineInitialize

Initializes the browser object with an URL.

> public HRESULT [DualEngineInitialize](#dualengineinitialize)([IDualEngine20BrowserObserver](idualengine20browserobserver.md) * pDualEngineObserver, DUALENGINECONFIGURATION config, EngineSwitchingPolicyFlags engineSwitchingPolicyFlags, [SentinelEntryInfo](tagsentinelentryinfo.md) sentinelEntryInfo, LPCWSTR pszUrl, HWND hwndHost, HWND * phwnd)

###### Parameters
* `pDualEngineObserver` A pointer to the observer for this browser. 

* `config` Configuration flags for the desired browser behavior. 

* `engineSwitchingPolicyFlags` Flags that determine how engine switching is handled. 

* `sentinelEntryInfo` The number of history items before and after the initial navigation for this instance. 

* `pszUrl` The inital URL to navigate to. 

* `hwndHost` The HWND of the host window that the browser window will be parented to. 

* `phwnd` The HWND of the browser window.

#### DualEngineInitialize2

Initializes the browser object with an URL; this version allows for additional information about the initial navigation to be passed in.

> public HRESULT [DualEngineInitialize2](#dualengineinitialize2)([IDualEngine20BrowserObserver](idualengine20browserobserver.md) * pDualEngineObserver, DUALENGINECONFIGURATION config, EngineSwitchingPolicyFlags engineSwitchingPolicyFlags, [SentinelEntryInfo](tagsentinelentryinfo.md) sentinelEntryInfo, LPCWSTR pszUrl, HWND hwndHost, HWND * phwnd, LPCWSTR pszReferrer, LPCWSTR pszHeaders, VARIANT * postData)

###### Parameters
* `pDualEngineObserver` A pointer to the observer for this browser. 

* `config` Configuration flags for the desired browser behavior. 

* `engineSwitchingPolicyFlags` Flags that determine how engine switching is handled. 

* `sentinelEntryInfo` The number of history items before and after the initial navigation for this instance. 

* `pszUrl` The inital URL to navigate to. 

* `hwndHost` The HWND of the host window that the browser window will be parented to. 

* `phwnd` The HWND of the browser window. 

* `pszReferrer` The HTTP Referer request header for the initial navigation. 

* `pszHeaders` Additional headers to send to the server for the initial navigation. 

* `postData` Data to be sent to the server as part of a HTTP POST transaction for the initial navigation.

#### DualEngineInitializeWithRecoveryData

Initializes the browser object using tab recovery data.

> public HRESULT [DualEngineInitializeWithRecoveryData](#dualengineinitializewithrecoverydata)(REFGUID guidTabId, ULONG ulEntryId, [IDualEngine20BrowserObserver](idualengine20browserobserver.md) * pDualEngineObserver, DUALENGINECONFIGURATION config, EngineSwitchingPolicyFlags engineSwitchingPolicyFlags, [SentinelEntryInfo](tagsentinelentryinfo.md) sentinelEntryInfo, LPCWSTR pszUrl, HWND hwndHost, HWND * phwnd)

###### Parameters
* `guidTabId` The GUID for the source recovery data file to initialize this instance with. 

* `ulEntryId` The ID of the entry in the travel log to navigate to after recovery. 

* `pDualEngineObserver` A pointer to the observer for this browser. 

* `config` Configuration flags for the desired browser behavior. 

* `engineSwitchingPolicyFlags` Flags that determine how engine switching is handled. 

* `sentinelEntryInfo` The number of history items before and after the initial navigation for this instance. 

* `pszUrl` The inital URL to navigate to. 

* `hwndHost` The HWND of the host window that the browser window will be parented to. 

* `phwnd` The HWND of the browser window.

#### DualEngineLostFocus

Notifies the browser that it has lost focus.

> public HRESULT [DualEngineLostFocus](#dualenginelostfocus)(HWND hwndLostFocus)

###### Parameters
* `hwndLostFocus` The window that focus is moving to.

#### DualEngineNavigate

Navigates to a URL.

> public HRESULT [DualEngineNavigate](#dualenginenavigate)(LPCWSTR pszUrl, BOOL fSkipOnBeforeUnload)

###### Parameters
* `pszUrl` The URL to navigate to. 

* `fSkipOnBeforeUnload` Whether to skip the `onBeforeUnload` handling.

#### DualEngineNavigate2

Navigates to a URL, with additional information about the navigation.

> public HRESULT [DualEngineNavigate2](#dualenginenavigate2)(LPCWSTR pszUrl, BOOL fSkipOnBeforeUnload, LPCWSTR pszReferrer, LPCWSTR pszHeaders, VARIANT * postData)

###### Parameters
* `pszUrl` The URL to navigate to. 

* `fSkipOnBeforeUnload` Whether to skip the `onBeforeUnload` handling. 

* `pszReferrer` The HTTP Referer request header for this navigation. 

* `pszHeaders` Additional headers to send to the server for this navigation. 

* `postData` Data to be sent to the server as part of a HTTP POST transaction for this navigation.

#### DualEngineNotifyNavigationEntriesDeleted

Notifies that navigation entries have been deleted.

> public HRESULT [DualEngineNotifyNavigationEntriesDeleted](#dualenginenotifynavigationentriesdeleted)(BOOL fShouldDeleteEntries, [SentinelEntryInfo](tagsentinelentryinfo.md) sentinelEntryInfo)

###### Parameters
* `fShouldDeleteEntries` Indicates whether the browser should delete all the entries in it's list. 

* `sentinelEntryInfo` The number of history items before and after the initial navigation for this instance.

#### DualEnginePrepareToExitRegion

Notifies the browser that a navigation is occurring to a page that will be handled by the host.

> public HRESULT [DualEnginePrepareToExitRegion](#dualenginepreparetoexitregion)(EXIT_REGION_TYPE type)

###### Parameters
* `type` The type of navigation that is causing this exit.

#### DualEnginePrint

Invokes the Print dialog for the current page.

> public HRESULT [DualEnginePrint](#dualengineprint)()

#### DualEngineProtectFocus

Controls whether the browser tries to change focus to itself.

> public HRESULT [DualEngineProtectFocus](#dualengineprotectfocus)(BOOL fProtectFocus)

###### Parameters
* `fProtectFocus` If `true`, the browser will not try to steal focus; if `false`, stealing focus is allowed.

#### DualEngineSavePageAs

Invokes the **Save Webpage** dialog for the current page.

> public HRESULT [DualEngineSavePageAs](#dualenginesavepageas)()

#### DualEngineSetEngineSwitchingPolicyFlags

Sets flags that determine how the browser handles engine switching.

> public HRESULT [DualEngineSetEngineSwitchingPolicyFlags](#dualenginesetengineswitchingpolicyflags)(EngineSwitchingPolicyFlags engineSwitchingPolicyFlags)

###### Parameters
* `engineSwitchingPolicyFlags` Flags representing the desired engine switching behavior.

#### DualEngineSetFocus

Sets focus inside the hosted browser.

> public HRESULT [DualEngineSetFocus](#dualenginesetfocus)(DUALENGINE_FOCUSDIRECTION focusDirection)

###### Parameters
* `focusDirection` The direction that focus is moving within the browser.

#### DualEngineSetMediaFullscreen

Changes the full-screen state of the media playing in the browser.

> public HRESULT [DualEngineSetMediaFullscreen](#dualenginesetmediafullscreen)(BOOL fFullscreen)

> [!WARNING]
> Despite its name, this function only exits fullscreen and will do nothing if no media is fullscreen.
> Passing `true` into the function is always a no-op.
###### Parameters
* `fFullscreen` If `false`, fullscreen will be exited if media is fullscreen; if `true`, nothing happens.

#### DualEngineSetPosition

Sets the size and position of the browser window.

> public HRESULT [DualEngineSetPosition](#dualenginesetposition)(int x, int y, int iWidth, int iHeight)

###### Parameters
* `x` The new position of the left side of the window, in client coordinates. 

* `y` The new position of the top of the window, in client coordinates. 

* `iWidth` The new width of the window, in pixels. 

* `iHeight` The new height of the window, in pixels.

#### DualEngineSetTheaterFullscreen

Changes the Theater mode state of the browser.

> public HRESULT [DualEngineSetTheaterFullscreen](#dualenginesettheaterfullscreen)(BOOL fFullscreen)

In theater mode, the browsers window fills the entire screen and displays a toolbar that has a minimal set of navigation buttons. A status bar is also provided in the upper-right corner of the screen. Explorer bars, such as History and Favorites, are displayed as an autohide pane on the left edge of the screen in theater mode. 
###### Parameters
* `fFullscreen` If `true` and not currently in theater mode, the browser will enter theater mode; if `false` and currently in theater mode, the browser will exit theater mode.

#### DualEngineSetTheaterMargins

Adjusts the top margin of the browser window when it is being displayed in theater mode.

> public HRESULT [DualEngineSetTheaterMargins](#dualenginesettheatermargins)(BOOL fTheaterShowing, int yTheaterThreshold)

###### Parameters
* `fTheaterShowing` Indicates whether the host is currently in theater mode. 

* `yTheaterThreshold` The size in pixels of the margin between the top of the screen and the fullscreen browser window.

#### DualEngineSetVisible

Notifies the browser of a visibility change.

> public HRESULT [DualEngineSetVisible](#dualenginesetvisible)(BROWSERVISIBILITY visibility)

###### Parameters
* `visibility` The visibility state we are entering.

#### DualEngineSetWindowStyle

Changes the style of the browser window.

> public HRESULT [DualEngineSetWindowStyle](#dualenginesetwindowstyle)(int wlStyle, int wlExStyle)

###### Parameters
* `wlStyle` The Window Style value to set. 

* `wlExStyle` The Extended Windows Style value to set.

#### DualEngineSetZoom

Changes the zoom value of the browser.

> public HRESULT [DualEngineSetZoom](#dualenginesetzoom)(int iZoomPercent)

###### Parameters
* `iZoomPercent` The zoom percentage to set the browser to.

#### DualEngineSimulateKeyInput

Sends a simulated key input.

> public HRESULT [DualEngineSimulateKeyInput](#dualenginesimulatekeyinput)(DWORD vKey, KEYACTION keyAction)

###### Parameters
* `vKey` The virtual keycode to simulate. 

* `keyAction` The key action to simulate.

#### DualEngineSimulateMouseInput

Sends a simulated mouse input.

> public HRESULT [DualEngineSimulateMouseInput](#dualenginesimulatemouseinput)(DWORD x, DWORD y, MOUSEACTION mouseAction)

###### Parameters
* `x` The x coordinate. 

* `y` The y coordinate. 

* `mouseAction` The mouse action to simulate.

#### DualEngineStopFindOnPage

Stops the find operation.

> public HRESULT [DualEngineStopFindOnPage](#dualenginestopfindonpage)(BOOL fClean)

###### Parameters
* `fClean` If `true`, the highlighted results and current selected result will be cleared; if `false`, the current selected result will remain selected.

#### DualEngineTranslateAccelerator

Processes an accelerator message.

> public HRESULT [DualEngineTranslateAccelerator](#dualenginetranslateaccelerator)(LPMSG lpMsg)

###### Parameters
* `lpMsg` A pointer to a MSG structure that specifies the message to be translated.
