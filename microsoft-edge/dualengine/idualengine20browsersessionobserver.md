---
description: Receives events from IDualEngine20Session.
title: DualEngine Win32 C++ IDualEngine20BrowserSessionObserver
ms.date: 09/07/2023
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html, IDualEngine20BrowserSessionObserver
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
- embeddedbrowserwebview.dll
---

# interface IDualEngine20BrowserSessionObserver

```
interface IDualEngine20BrowserSessionObserver
  : public IUnknown
```

Receives events from IDualEngine20Session.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[NavigateDownloadLink](#navigatedownloadlink) | `NavigateDownloadLink` is raised when the Internet Explorer Download window is requesting to navigate to a url.
[ReverseSyncCookies](#reversesynccookies) | `ReverseSyncCookies` is raised when a cookie is set in the Internet Explorer process.
[UpdateDownloadState](#updatedownloadstate) | `UpdateDownloadState` is raised when Internet Explorer starts or stops all downloads.

## Applies to

Product                         | Introduced
--------------------------------|---------------------------------------------
WebView2 Win32            |    <!--%RELEASE_VERSION%-->
WebView2 Win32 Prerelease |    <!--%PRERELEASE_VERSION%-->

## Members

#### NavigateDownloadLink

`NavigateDownloadLink` is raised when the Internet Explorer Download window is requesting to navigate to a url.

> public HRESULT [NavigateDownloadLink](#navigatedownloadlink)(BSTR url, VARIANT * PostData)

#### Parameters
* `pszUrl` The URL that should be navigated to. 

* `postData` HTTP POST data such as form data.

#### ReverseSyncCookies

`ReverseSyncCookies` is raised when a cookie is set in the Internet Explorer process.

> public HRESULT [ReverseSyncCookies](#reversesynccookies)(const DualEngineCookie * pCookies, DWORD cCookies, ULONG ulCookieSyncVersion)

#### Parameters
* `pCookies` The cookies that were set. 

* `cCookies` The number of cookies in pCookies. 

* `ulCookieSyncVersion` A number that can be used to correlate the specific cookie state with a navigation.

#### UpdateDownloadState

`UpdateDownloadState` is raised when Internet Explorer starts or stops all downloads.

> public HRESULT [UpdateDownloadState](#updatedownloadstate)(BOOL fOnGoingDownloads)

#### Parameters
* `fOnGoingDownloads` If true Internet Explorer has ongoing downloads, false if it does not.

