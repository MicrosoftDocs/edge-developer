---
title: DualEngine Win32 C++ IDualEngine20BrowserSession
description: Represents an Internet Explorer process session.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: windows-integration
ms.date: 03/04/2024
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
> The DualEngine API is part of a Limited Access Feature (see [LimitedAccessFeatures class](/uwp/api/windows.applicationmodel.limitedaccessfeatures)). For more information or 
> to request an unlock token, contact [Microsoft Support](https://support.serviceshub.microsoft.com/supportforbusiness/create?sapId=d15d3aa2-0512-7cb8-1df9-86221f5cbfde).

```cpp
interface IDualEngine20BrowserSession
  : public IUnknown
```

Represents an Internet Explorer process session.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[CloneActiveTabRecoveryData](#cloneactivetabrecoverydata) | Duplicates an active tab's recovery data.
[CloneInactiveTabRecoveryData](#cloneinactivetabrecoverydata) | Duplicates an inactive tab's recovery data.
[CreateDualEngineBrowser](#createdualenginebrowser) | Creates a Browser object in this session.
[DeleteAllButRecoverableRecoveryFiles](#deleteallbutrecoverablerecoveryfiles) | Deletes all but the provided tab recovery data files.
[DeleteInactiveRegionRecoveryData](#deleteinactiveregionrecoverydata) | Deletes an inactive region's tab recovery data.
[GetRequestedHostForwardedAccelerators](#getrequestedhostforwardedaccelerators) | Returns a list of keyboard accelerators that should be forwarded from the Host.
[Initialize](#initialize) | Initializes the session.
[ParseEmieSitelist](#parseemiesitelist) | Parses the sitelist XML at the provided path.
[SetConfigurableSitesFlags](#setconfigurablesitesflags) | Sets flags that determine how configurable sites are handled.
[SetHangDetectionMessages](#sethangdetectionmessages) | Sets hang detection messages that will be sent to the session by the host to detect hangs.
[SetHostIntranetInInternetExplorer](#sethostintranetininternetexplorer) | Sets whether to open all Intranet sites in the session.
[SetHybridMode](#sethybridmode) | Sets whether to enable Hybrid Mode site list handling.
[SetReverseCookieSync](#setreversecookiesync) | Sets whether cookie changes are synced back to the host.
[SetSitePermissions](#setsitepermissions) | Sets site permissions for the session.
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

Duplicates an active tab's recovery data.

> public HRESULT [CloneActiveTabRecoveryData](#cloneactivetabrecoverydata)(HWND hwndBrowser, REFGUID guidSrcFile, REFGUID guidDestFile)

###### Parameters
* `hwndBrowser` The HWND of the hosted browser window. 

* `guidSrcFile` The GUID for the source recovery data file to copy. 

* `guidDestFile` The GUID to associate with the new tab recovery data file.

#### CloneInactiveTabRecoveryData

Duplicates an inactive tab's recovery data.

> public HRESULT [CloneInactiveTabRecoveryData](#cloneinactivetabrecoverydata)(REFGUID guidSrcFile, REFGUID guidDestFile)

###### Parameters
* `guidSrcFile` The GUID for the source recovery data file to copy. 

* `guidDestFile` The GUID to associate with the new tab recovery data file.

#### CreateDualEngineBrowser

Creates a Browser object in this session.

> public HRESULT [CreateDualEngineBrowser](#createdualenginebrowser)([IDualEngine20Browser](idualengine20browser.md) ** ppDualEngineBrowser)

###### Parameters
* `ppDualEngineBrowser` The new Browser object.

#### DeleteAllButRecoverableRecoveryFiles

Deletes all but the provided tab recovery data files.

> public HRESULT [DeleteAllButRecoverableRecoveryFiles](#deleteallbutrecoverablerecoveryfiles)(int cRecoverableGUIDs, LPCWSTR * rgpszRecoverableGUIDs)

###### Parameters
* `cRecoverableGUIDs` The number of GUIDs in `rgpszRecoverableGUIDs`. 

* `rgpszRecoverableGUIDs` An array of GUIDs representing tab recovery data files that are not to be deleted.

#### DeleteInactiveRegionRecoveryData

Deletes an inactive region's tab recovery data.

> public HRESULT [DeleteInactiveRegionRecoveryData](#deleteinactiveregionrecoverydata)(REFGUID guidTabId)

###### Parameters
* `guidTabId` The GUID of the recovery data to delete.

#### GetRequestedHostForwardedAccelerators

Returns a list of keyboard accelerators that should be forwarded from the Host.

> public HRESULT [GetRequestedHostForwardedAccelerators](#getrequestedhostforwardedaccelerators)(DWORD * pcAccels, [ACCELERATOR](accelerator.md) ** prgAccels)

###### Parameters
* `pcAccels` The number of accelerators in `prgAccels`. 

* `prgAccels` A list of keyboard accelerators that should be forwarded. When finished the caller must free the memory allocated for the list with `CoTaskMemFree`.

#### Initialize

Initializes the session.

> public HRESULT [Initialize](#initialize)(DWORD cAccels, [ACCELERATOR](accelerator.md) * rgHostPriorityAccels, [IDualEngine20BrowserSessionObserver](idualengine20browsersessionobserver.md) * pSessionObserver, LPCWSTR pszProfilePath, LPCWSTR pszProfileId)

###### Parameters
* `cAccels` The number of accelerators in `rgHostPriorityAccels`. 

* `rgHostPriorityAccels` A list of keyboard accelerators to have the session forward to the host. 

* `pSessionObserver` An observer for events from this session. 

* `pszProfilePath` The path to host's profile path where the session will store relevant files. 

* `pszProfileId` The host's profile ID to associate with this session.

#### ParseEmieSitelist

Parses the sitelist XML at the provided path.

> public HRESULT [ParseEmieSitelist](#parseemiesitelist)(LPCWSTR emieXmlPath)

###### Parameters
* `emieXmlPath` Path to the sitelist XML to parse.

#### SetConfigurableSitesFlags

Sets flags that determine how configurable sites are handled.

> public HRESULT [SetConfigurableSitesFlags](#setconfigurablesitesflags)(DualEngineConfigurableSitesFlags flags)

###### Parameters
* `flags` The flags indicating how configurable sites are handled.

#### SetHangDetectionMessages

Sets hang detection messages that will be sent to the session by the host to detect hangs.

> public HRESULT [SetHangDetectionMessages](#sethangdetectionmessages)(UINT uiSyncHungCheckMsg, UINT uiAsyncHungCheckMsg)

###### Parameters
* `uiSyncHungCheckMsg` The window message ID of the message that the host will synchronously wait on to be handled. 

* `uiAsyncHungCheckMsg` The window message ID of the message that the host will asynchronously wait on. Browsers signal the host by calling [IDualEngine20BrowserObserver::OnAsyncHungCheckReply()](idualengine20browserobserver.md#onasynchungcheckreply).

#### SetHostIntranetInInternetExplorer

Sets whether to open all Intranet sites in the session.

> public HRESULT [SetHostIntranetInInternetExplorer](#sethostintranetininternetexplorer)(BOOL fEnable)

###### Parameters
* `fEnable` If `true`, navigation to Intranet sites will stay in the session; otherwise, whether a navigation will stay in the session or not follows default determination logic.

#### SetHybridMode

Sets whether to enable Hybrid Mode site list handling.

> public HRESULT [SetHybridMode](#sethybridmode)(BOOL fEnable)

###### Parameters
* `fEnable` If `true`, Hybrid Mode behavior is enabled when handling site list URLs; otherwise, normal navigation behavior occurs.

#### SetReverseCookieSync

Sets whether cookie changes are synced back to the host.

> public HRESULT [SetReverseCookieSync](#setreversecookiesync)(BOOL fEnable)

###### Parameters
* `fEnable` If `true`, the host will be notified of cookie changes by the [IDualEngine20BrowserSessionObserver::ReverseSyncCookies()](idualengine20browsersessionobserver.md#reversesynccookies) event; otherwise, it is not.

#### SetSitePermissions

Sets site permissions for the session.

> public HRESULT [SetSitePermissions](#setsitepermissions)(SITE_PERMISSION_KIND sitePermissionKind, LPCWSTR pszPermissionData)

###### Parameters
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

; Can be either a specific port or a wildcard to match all ports.
port-part           = "*" | port
port                = *DIGIT

; For definitions of the following rules, see RFC 3986 Appendix A (https://www.rfc-editor.org/rfc/rfc3986#appendix-A):
;   scheme, reg-name, IPv4address, IP-literal, path
```

See also:

* [Appendix A. Collected ABNF for URI](https://www.rfc-editor.org/rfc/rfc3986#appendix-A) in _RFC 3986 - Uniform Resource Identifier (URI): Generic Syntax_.

#### SetUseAdditionalHangDetection

Sets whether to enable additional hang detections.

> public HRESULT [SetUseAdditionalHangDetection](#setuseadditionalhangdetection)(BOOL fEnable)

###### Parameters
* `fEnable` If `true`, additional hang detections will be enabled; otherwise, they will not.

#### ShowDownloadWindow

Shows the Internet Explorer download window.

> public HRESULT [ShowDownloadWindow](#showdownloadwindow)()

#### SyncCookies

Sends cookie data to the session process.

> public HRESULT [SyncCookies](#synccookies)(const [DualEngineCookie](dualenginecookie.md) * pCookies, DWORD cCookies)

###### Parameters
* `pCookies` An array of cookies to be sent to the session. 

* `cCookies` The number of items in `pCookies`.
