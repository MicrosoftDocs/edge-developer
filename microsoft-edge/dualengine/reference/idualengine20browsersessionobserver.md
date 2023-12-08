---
description: Receives events from the Session.
title: DualEngine Win32 C++ IDualEngine20BrowserSessionObserver
author: MSEdgeTeam
ms.author: msedgedevrel
ms.prod: microsoft-edge
ms.date: 11/16/2023
keywords: dual engine, dualengine, iemode, win32 apps, win32, edge, ie mode, edge html, IDualEngine20BrowserSessionObserver
topic_type: 
- APIRef
api_name:
- IDualEngine20BrowserSessionObserver
- IDualEngine20BrowserSessionObserver.NavigateDownloadLink
- IDualEngine20BrowserSessionObserver.ReverseSyncCookies
- IDualEngine20BrowserSessionObserver.UpdateDownloadState
api_type:
- COM
api_location:
- ieframe.dll
---

# interface IDualEngine20BrowserSessionObserver

> [!IMPORTANT]
> The DualEngine API is a limited access feature. Contact dualengineapiaccess@microsoft.com for more information.

```
interface IDualEngine20BrowserSessionObserver
  : public IUnknown
```

Receives events from the Session.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[NavigateDownloadLink](#navigatedownloadlink) | Raised when the Session Download window is requesting to navigate to a url.
[ReverseSyncCookies](#reversesynccookies) | Raised when a cookie is set in the Session if reverse cookie sync is enabled.
[UpdateDownloadState](#updatedownloadstate) | Raised when downloads are stopped or started.

## Applies to

Product   |Introduced
--------- | ---------
Windows 10, Version 20H1   |KB5032278
Windows 11, Version 22H2   |KB5032288

## Members

#### NavigateDownloadLink

Raised when the Session Download window is requesting to navigate to a url.

> public HRESULT [NavigateDownloadLink](#navigatedownloadlink)(BSTR url, VARIANT * PostData)

#### Parameters
* `url` The URL that should be navigated to. 

* `PostData` HTTP POST data such as form data.

#### ReverseSyncCookies

Raised when a cookie is set in the Session if reverse cookie sync is enabled.

> public HRESULT [ReverseSyncCookies](#reversesynccookies)(const DualEngineCookie * pCookies, DWORD cCookies, ULONG ulCookieSyncVersion)

See IDualEngine20BrowserSession::SetReverseCookieSync(). 
#### Parameters
* `pCookies` The cookies that were set. 

* `cCookies` The number of cookies in pCookies. 

* `ulCookieSyncVersion` A number that can be used to correlate the specific cookie state with a navigation.

#### UpdateDownloadState

Raised when downloads are stopped or started.

> public HRESULT [UpdateDownloadState](#updatedownloadstate)(BOOL fOnGoingDownloads)

#### Parameters
* `fOnGoingDownloads` If true the Session has ongoing downloads, false if it does not.

