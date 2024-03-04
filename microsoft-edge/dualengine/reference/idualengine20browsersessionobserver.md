---
title: DualEngine Win32 C++ IDualEngine20BrowserSessionObserver
description: Receives events from the session.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: windows-integration
ms.date: 03/04/2024
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
> The DualEngine API is part of a Limited Access Feature (see [LimitedAccessFeatures class](/uwp/api/windows.applicationmodel.limitedaccessfeatures)). For more information or 
> to request an unlock token, contact [Microsoft Support](https://support.serviceshub.microsoft.com/supportforbusiness/create?sapId=d15d3aa2-0512-7cb8-1df9-86221f5cbfde).

```cpp
interface IDualEngine20BrowserSessionObserver
  : public IUnknown
```

Receives events from the session.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[NavigateDownloadLink](#navigatedownloadlink) | Raised when the session Download window is requesting to navigate to a URL.
[ReverseSyncCookies](#reversesynccookies) | Raised when a cookie is set in the session, if reverse cookie sync is enabled.
[UpdateDownloadState](#updatedownloadstate) | Raised when downloads are stopped or started.

## Applies to

Product   |Introduced
--------- | ---------
Windows 10, Version 20H1   |KB5032278
Windows 11, Version 22H2   |KB5032288

## Members

#### NavigateDownloadLink

Raised when the session Download window is requesting to navigate to a URL.

> public HRESULT [NavigateDownloadLink](#navigatedownloadlink)(BSTR url, VARIANT * PostData)

###### Parameters
* `url` The URL that should be navigated to. 

* `PostData` HTTP POST data, such as form data.

#### ReverseSyncCookies

Raised when a cookie is set in the session, if reverse cookie sync is enabled.

> public HRESULT [ReverseSyncCookies](#reversesynccookies)(const [DualEngineCookie](dualenginecookie.md) * pCookies, DWORD cCookies, ULONG ulCookieSyncVersion)

See [IDualEngine20BrowserSession::SetReverseCookieSync](idualengine20browsersession.md#setreversecookiesync).

###### Parameters
* `pCookies` The cookies that were set. 

* `cCookies` The number of cookies in `pCookies`. 

* `ulCookieSyncVersion` A number that can be used to correlate the specific cookie state with a navigation.

#### UpdateDownloadState

Raised when downloads are stopped or started.

> public HRESULT [UpdateDownloadState](#updatedownloadstate)(BOOL fOnGoingDownloads)

###### Parameters
* `fOnGoingDownloads` If `true`, the session has ongoing downloads; `false` if it does not.
