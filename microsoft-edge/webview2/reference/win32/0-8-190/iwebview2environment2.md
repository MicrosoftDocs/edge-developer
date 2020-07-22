---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: 0.8.355 - WebView2 Win32 C++ IWebView2Environment2
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/20/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge
---

# 0.8.355 - interface IWebView2Environment2 

[!INCLUDE [deprecation-note](../../includes/deprecation-note.md)]

```
interface IWebView2Environment2
  : public IWebView2Environment
```

Additional functionality implemented by the Environment object.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[get_BrowserVersionInfo](#get_browserversioninfo) | The browser version info of the current [IWebView2Environment](IWebView2Environment.md), including channel name if it is not the stable channel.

See the [IWebView2Environment](IWebView2Environment.md) interface for more details. You can QueryInterface for this interface from the object that implements [IWebView2Environment](IWebView2Environment.md).

## Members

#### get_BrowserVersionInfo 

The browser version info of the current [IWebView2Environment](IWebView2Environment.md), including channel name if it is not the stable channel.

> public HRESULT [get_BrowserVersionInfo](#get_browserversioninfo)(LPWSTR * versionInfo)

This matches the format of the GetWebView2BrowserVersionInfo API. Channel names are 'beta', 'dev', and 'canary'.

```cpp
        wil::unique_cotaskmem_string version_info;
        m_webViewEnvironment->get_BrowserVersionInfo(&version_info);
        MessageBox(
            m_mainWindow, version_info.get(), L"Browser Version Info After WebView Creation",
            MB_OK);
```

