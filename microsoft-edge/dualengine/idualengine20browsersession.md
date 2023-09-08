---
description: 
title: DualEngine Win32 C++ IDualEngine20BrowserSession
ms.date: 09/07/2023
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html, IDualEngine20BrowserSession
topic_type: 
- APIRef
api_name:
- IDualEngine20BrowserSession
- IDualEngine20BrowserSession.CloneActiveTabRecoveryData
- IDualEngine20BrowserSession.CloneInactiveTabRecoveryData
- IDualEngine20BrowserSession.CreateDualEngineBrowser
- IDualEngine20BrowserSession.DeleteAllButRecoverableRecoveryFiles
- IDualEngine20BrowserSession.DeleteInactiveRegionRecoveryData
- IDualEngine20BrowserSession.GetRequestedHostForwardedAccelerators
- IDualEngine20BrowserSession.Initialize
- IDualEngine20BrowserSession.ParseEmieSitelist
- IDualEngine20BrowserSession.SetConfigurableSitesFlags
- IDualEngine20BrowserSession.SetHangDetectionMessages
- IDualEngine20BrowserSession.SetHostIntranetInInternetExplorer
- IDualEngine20BrowserSession.SetHybridMode
- IDualEngine20BrowserSession.SetReverseCookieSync
- IDualEngine20BrowserSession.SetSitePermissions
- IDualEngine20BrowserSession.SetUseAdditionalHangDetection
- IDualEngine20BrowserSession.ShowDownloadWindow
- IDualEngine20BrowserSession.SyncCookies
api_type:
- COM
api_location:
- embeddedbrowserwebview.dll
---

# interface IDualEngine20BrowserSession

```
interface IDualEngine20BrowserSession
  : public IUnknown
```

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[CloneActiveTabRecoveryData](#cloneactivetabrecoverydata) | 
[CloneInactiveTabRecoveryData](#cloneinactivetabrecoverydata) | 
[CreateDualEngineBrowser](#createdualenginebrowser) | Creates an DualEngineBrowser in this session.
[DeleteAllButRecoverableRecoveryFiles](#deleteallbutrecoverablerecoveryfiles) | 
[DeleteInactiveRegionRecoveryData](#deleteinactiveregionrecoverydata) | 
[GetRequestedHostForwardedAccelerators](#getrequestedhostforwardedaccelerators) | Returns a list of keyboard accelerators that Internet Explorer requests should be forwarded from the Host.
[Initialize](#initialize) | Initializes the session.
[ParseEmieSitelist](#parseemiesitelist) | Has Internet Explorer parse the sitelist xml at the provided path.
[SetConfigurableSitesFlags](#setconfigurablesitesflags) | 
[SetHangDetectionMessages](#sethangdetectionmessages) | 
[SetHostIntranetInInternetExplorer](#sethostintranetininternetexplorer) | Sets whether to open all Intranet sites in Internet Explorer.
[SetHybridMode](#sethybridmode) | 
[SetReverseCookieSync](#setreversecookiesync) | 
[SetSitePermissions](#setsitepermissions) | 
[SetUseAdditionalHangDetection](#setuseadditionalhangdetection) | 
[ShowDownloadWindow](#showdownloadwindow) | 
[SyncCookies](#synccookies) | 

## Applies to

Product                         | Introduced
--------------------------------|---------------------------------------------
WebView2 Win32            |    <!--%RELEASE_VERSION%-->
WebView2 Win32 Prerelease |    <!--%PRERELEASE_VERSION%-->

## Members

#### CloneActiveTabRecoveryData

> public HRESULT [CloneActiveTabRecoveryData](#cloneactivetabrecoverydata)(HWND hwndBrowser, REFGUID guidSrcFile, REFGUID guidDestFile)

#### CloneInactiveTabRecoveryData

> public HRESULT [CloneInactiveTabRecoveryData](#cloneinactivetabrecoverydata)(REFGUID guidSrcFile, REFGUID guidDestFile)

#### CreateDualEngineBrowser

Creates an DualEngineBrowser in this session.

> public HRESULT [CreateDualEngineBrowser](#createdualenginebrowser)([IDualEngine20Browser](idualengine20browser.md) ** ppDualEngineBrowser)

#### Parameters
* `ppDualEngineBrowser` The new DualEngineBrowser.

#### DeleteAllButRecoverableRecoveryFiles

> public HRESULT [DeleteAllButRecoverableRecoveryFiles](#deleteallbutrecoverablerecoveryfiles)(int cRecoverableGUIDs, LPCWSTR * rgpszRecoverableGUIDs)

#### DeleteInactiveRegionRecoveryData

> public HRESULT [DeleteInactiveRegionRecoveryData](#deleteinactiveregionrecoverydata)(REFGUID guidTabId)

#### GetRequestedHostForwardedAccelerators

Returns a list of keyboard accelerators that Internet Explorer requests should be forwarded from the Host.

> public HRESULT [GetRequestedHostForwardedAccelerators](#getrequestedhostforwardedaccelerators)(DWORD * pcAccels, ACCELERATOR ** prgAccels)

#### Parameters
* `pcAccels` The number of accelerators in `prgAccels`. 

* `prgAccels` A list of keyboard accelerators that should be forward to Internet Explorer.

#### Initialize

Initializes the session.

> public HRESULT [Initialize](#initialize)(DWORD cAccels, ACCELERATOR * rgHostPriorityAccels, [IDualEngine20BrowserSessionObserver](idualengine20browsersessionobserver.md) * pSessionObserver, LPCWSTR pszProfilePath, LPCWSTR pszProfileId)

#### Parameters
* `cAccels` The number of accelerators in `rgHostPriorityAccels`. 

* `rgHostPriorityAccels` A list of keyboard accelerators to have Internet Explorer forward to the host. 

* `pSessionObserver` An observer for events from this Session. 

* `pszProfilePath` The path to hosts profile path where Internet Explorer will store relevant files. 

* `pszProfileId` The hosts profile id to associate with this session.

#### ParseEmieSitelist

Has Internet Explorer parse the sitelist xml at the provided path.

> public HRESULT [ParseEmieSitelist](#parseemiesitelist)(LPCWSTR emieXmlPath)

#### Parameters
* `emieXmlPath` Path to the sitelist xml to parse.

#### SetConfigurableSitesFlags

> public HRESULT [SetConfigurableSitesFlags](#setconfigurablesitesflags)(DualEngineConfigurableSitesFlags flags)

#### SetHangDetectionMessages

> public HRESULT [SetHangDetectionMessages](#sethangdetectionmessages)(UINT uiSyncHungCheckMsg, UINT uiAsyncHungCheckMsg)

#### SetHostIntranetInInternetExplorer

Sets whether to open all Intranet sites in Internet Explorer.

> public HRESULT [SetHostIntranetInInternetExplorer](#sethostintranetininternetexplorer)(BOOL fEnable)

#### Parameters
* `fEnable` If true navigation to Intranet sites will stay in Internet Explorer, otherwise whether it will stay in Internet Explorer or not follows default determination logic.

#### SetHybridMode

> public HRESULT [SetHybridMode](#sethybridmode)(BOOL fEnable)

#### SetReverseCookieSync

> public HRESULT [SetReverseCookieSync](#setreversecookiesync)(BOOL fEnable)

#### SetSitePermissions

> public HRESULT [SetSitePermissions](#setsitepermissions)(SITE_PERMISSION_KIND sitePermissionKind, LPCWSTR pszPermissionData)

#### SetUseAdditionalHangDetection

> public HRESULT [SetUseAdditionalHangDetection](#setuseadditionalhangdetection)(BOOL fEnable)

#### ShowDownloadWindow

> public HRESULT [ShowDownloadWindow](#showdownloadwindow)()

#### SyncCookies

> public HRESULT [SyncCookies](#synccookies)(const DualEngineCookie * pCookies, DWORD cCookies)

