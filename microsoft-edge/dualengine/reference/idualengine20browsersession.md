---
description: Represents an Internet Explorer process session.
title: DualEngine Win32 C++ IDualEngine20BrowserSession
author: MSEdgeTeam
ms.author: edgededev
ms.prod: microsoft-edge
ms.date: 11/16/2023
keywords: dual engine, dualengine, iemode, win32 apps, win32, edge, ie mode, edge html, IDualEngine20BrowserSession
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
- ieframe.dll
---

# interface IDualEngine20BrowserSession

> [!IMPORTANT]
> The DualEngine API is a limited access feature. Contact dualengineapiaccess@microsoft.com for more information.

```
interface IDualEngine20BrowserSession
  : public IUnknown
```

Represents an Internet Explorer process session.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[CloneActiveTabRecoveryData](#cloneactivetabrecoverydata) | Duplicate an active tab's recovery data.
[CloneInactiveTabRecoveryData](#cloneinactivetabrecoverydata) | Duplicate an inactive tab's recovery data.
[CreateDualEngineBrowser](#createdualenginebrowser) | Creates a Browser object in this session.
[DeleteAllButRecoverableRecoveryFiles](#deleteallbutrecoverablerecoveryfiles) | Delete all but the provided tab recovery data files.
[DeleteInactiveRegionRecoveryData](#deleteinactiveregionrecoverydata) | Delete an inactive region's tab recovery data.
[GetRequestedHostForwardedAccelerators](#getrequestedhostforwardedaccelerators) | Returns a list of keyboard accelerators that should be forwarded from the Host.
[Initialize](#initialize) | Initializes the session.
[ParseEmieSitelist](#parseemiesitelist) | Parses the sitelist xml at the provided path.
[SetConfigurableSitesFlags](#setconfigurablesitesflags) | Sets flags that determines how configurable sites are handled.
[SetHangDetectionMessages](#sethangdetectionmessages) | Sets hang detection messages that will be sent to the Session by the host to detect hangs.
[SetHostIntranetInInternetExplorer](#sethostintranetininternetexplorer) | Sets whether to open all Intranet sites in the session.
[SetHybridMode](#sethybridmode) | Sets whether to enable Hybrid Mode site list handling.
[SetReverseCookieSync](#setreversecookiesync) | Sets whether cookie changes are synced back to the host.
[SetSitePermissions](#setsitepermissions) | Sets site permissions for the Session.
[SetUseAdditionalHangDetection](#setuseadditionalhangdetection) | Sets whether to enable additional hang detections.
[ShowDownloadWindow](#showdownloadwindow) | Shows the Internet Explorer download window.
[SyncCookies](#synccookies) | Sends cookie data to the session process.

## Applies to

Product   |Introduced
--------- | ---------
Windows 10, Version 20H1   |KB5032278
Windows 11, Version 22H2   |KB5032288

## Members

#### CloneActiveTabRecoveryData

Duplicate an active tab's recovery data.

> public HRESULT [CloneActiveTabRecoveryData](#cloneactivetabrecoverydata)(HWND hwndBrowser, REFGUID guidSrcFile, REFGUID guidDestFile)

#### Parameters
* `hwndBrowser` The HWND of the hosted browser window. 

* `guidSrcFile` The GUID for the source recovery data file to copy. 

* `guidDestFile` The GUID to associate with the new tab recovery data file.

#### CloneInactiveTabRecoveryData

Duplicate an inactive tab's recovery data.

> public HRESULT [CloneInactiveTabRecoveryData](#cloneinactivetabrecoverydata)(REFGUID guidSrcFile, REFGUID guidDestFile)

#### Parameters
* `guidSrcFile` The GUID for the source recovery data file to copy. 

* `guidDestFile` The GUID to associate with the new tab recovery data file.

#### CreateDualEngineBrowser

Creates a Browser object in this session.

> public HRESULT [CreateDualEngineBrowser](#createdualenginebrowser)(IDualEngine20Browser ** ppDualEngineBrowser)

#### Parameters
* `ppDualEngineBrowser` The new Browser object.

#### DeleteAllButRecoverableRecoveryFiles

Delete all but the provided tab recovery data files.

> public HRESULT [DeleteAllButRecoverableRecoveryFiles](#deleteallbutrecoverablerecoveryfiles)(int cRecoverableGUIDs, LPCWSTR * rgpszRecoverableGUIDs)

#### Parameters
* `cRecoverableGUIDs` The number of GUIDs in `rgpszRecoverableGUIDs`. 

* `rgpszRecoverableGUIDs` An array of GUIDs representing tab recovery data files that are not to be deleted.

#### DeleteInactiveRegionRecoveryData

Delete an inactive region's tab recovery data.

> public HRESULT [DeleteInactiveRegionRecoveryData](#deleteinactiveregionrecoverydata)(REFGUID guidTabId)

#### Parameters
* `guidTabId` The GUID of the recovery data to delete.

#### GetRequestedHostForwardedAccelerators

Returns a list of keyboard accelerators that should be forwarded from the Host.

> public HRESULT [GetRequestedHostForwardedAccelerators](#getrequestedhostforwardedaccelerators)(DWORD * pcAccels, ACCELERATOR ** prgAccels)

#### Parameters
* `pcAccels` The number of accelerators in `prgAccels`. 

* `prgAccels` A list of keyboard accelerators that should be forwarded. When finished the caller must free the memory allocated for the list with `CoTaskMemFree`.

#### Initialize

Initializes the session.

> public HRESULT [Initialize](#initialize)(DWORD cAccels, ACCELERATOR * rgHostPriorityAccels, IDualEngine20BrowserSessionObserver * pSessionObserver, LPCWSTR pszProfilePath, LPCWSTR pszProfileId)

#### Parameters
* `cAccels` The number of accelerators in rgHostPriorityAccels. 

* `rgHostPriorityAccels` A list of keyboard accelerators to have the session forward to the host. 

* `pSessionObserver` An observer for events from this Session. 

* `pszProfilePath` The path to hosts profile path where Session will store relevant files. 

* `pszProfileId` The hosts profile id to associate with this session.

#### ParseEmieSitelist

Parses the sitelist xml at the provided path.

> public HRESULT [ParseEmieSitelist](#parseemiesitelist)(LPCWSTR emieXmlPath)

#### Parameters
* `emieXmlPath` Path to the sitelist xml to parse.

#### SetConfigurableSitesFlags

Sets flags that determines how configurable sites are handled.

> public HRESULT [SetConfigurableSitesFlags](#setconfigurablesitesflags)(DualEngineConfigurableSitesFlags flags)

#### Parameters
* `flags` The flags indicating how configurable sites are handled.

#### SetHangDetectionMessages

Sets hang detection messages that will be sent to the Session by the host to detect hangs.

> public HRESULT [SetHangDetectionMessages](#sethangdetectionmessages)(UINT uiSyncHungCheckMsg, UINT uiAsyncHungCheckMsg)

#### Parameters
* `uiSyncHungCheckMsg` The window message id of the message that the host will synchronously wait on to be handled. 

* `uiAsyncHungCheckMsg` The window message id of the message that the host will asynchronously wait on. Browsers signal the host by calling IDualEngine20BrowserObserver::OnAsyncHungCheckReply()

#### SetHostIntranetInInternetExplorer

Sets whether to open all Intranet sites in the session.

> public HRESULT [SetHostIntranetInInternetExplorer](#sethostintranetininternetexplorer)(BOOL fEnable)

#### Parameters
* `fEnable` If true navigation to Intranet sites will stay in the Session, otherwise whether it will stay in Session or not follows default determination logic.

#### SetHybridMode

Sets whether to enable Hybrid Mode site list handling.

> public HRESULT [SetHybridMode](#sethybridmode)(BOOL fEnable)

#### Parameters
* `fEnable` If true, Hybrid Mode behavior is enabled when handling site list urls, otherwise normal navigation behavior occurs.

#### SetReverseCookieSync

Sets whether cookie changes are synced back to the host.

> public HRESULT [SetReverseCookieSync](#setreversecookiesync)(BOOL fEnable)

#### Parameters
* `fEnable` If true, the host will be notified of cookie changes by the IDualEngine20BrowserSessionObserver::ReverseSyncCookies() event otherwise it is not.

#### SetSitePermissions

Sets site permissions for the Session.

> public HRESULT [SetSitePermissions](#setsitepermissions)(SITE_PERMISSION_KIND sitePermissionKind, LPCWSTR pszPermissionData)

#### Parameters
* `sitePermissionKind` The type of site permission that is being set. 

* `pszPermissionData` A serialized string of the permission data to set.

`pszPermissionData` is a string in the following BNF format: 
```
permission-data     = default-action CRLF site-permissions

; Indicates the default action to take if there is no specific rule for the URI.
; DefaultAllow - Allow permission requests.
; DefaultAsk - Prompt the user for how they want to respond to the request.
; DefaultBlock - Block permission requests.
default-action      = "DefaultAllow" | "DefaultAsk" | "DefaultBlock"

; A list of sites and the action to take when permission is requested.
site-permissions    = *(permission SP wildcard SP scheme-part SP host-part SP
                        port-part SP path-part CRLF)

; Indicates the action to take on a request.
; A - Allow permission requests.
; Q - Prompt the user for how they want to respond to the request.
; B - Block permission requests.
permission          = "A" | "Q" | "B"

; Indicates if the host contains a domain wildcard.
wildcard            = BIT

; Can be either a specific scheme, a wildcard to match all schemes, or "!" to indicate no scheme.
scheme-part         = "*" | "!" | scheme

; Can be either a specific hostname or a wildcard to match all hostnames.
host-part           = "*" | host

; Represents a mostly typical URI host.
; The exception is that the host may start with a domain wildcard (e.g [*.]) which matches the host
; and any subdomains.
host                = ([ subdomain-wildcard ] reg-name) | IPv4address | IP-literal
subdomain-wildcard  = "[*.]"

; Can be either a specific path or a wildcard to match all paths.
path-part           = "*" | path

; Can be either a specific port or a wildcard to match all port.
port-part           = "*" | port
port                = *DIGIT

; For definitions of the following rules see RFC 3986 Appendix A:
;   scheme, reg-name, IPv4address, IP-literal, path
```

#### SetUseAdditionalHangDetection

Sets whether to enable additional hang detections.

> public HRESULT [SetUseAdditionalHangDetection](#setuseadditionalhangdetection)(BOOL fEnable)

#### Parameters
* `fEnable` If true additional hang detections will be enable, otherwise they will not.

#### ShowDownloadWindow

Shows the Internet Explorer download window.

> public HRESULT [ShowDownloadWindow](#showdownloadwindow)()

#### SyncCookies

Sends cookie data to the session process.

> public HRESULT [SyncCookies](#synccookies)(const [DualEngineCookie](dualenginecookie.md) * pCookies, DWORD cCookies)

#### Parameters
* `pCookies` An array of cookies to be sent to session. 

* `cCookies` The number of items in `pCookies`

