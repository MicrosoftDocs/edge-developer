---
description: Embed web technologies (HTML, CSS, and JavaScript) in your native applications with the Microsoft Edge WebView2 control
title: WebView2 Win32 C++ ICoreWebView2ExperimentalWindowFeatures
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/20/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html, ICoreWebView2ExperimentalWindowFeatures
---

# interface ICoreWebView2ExperimentalWindowFeatures 

[!INCLUDE [prerelease-note](../../includes/prerelease-note.md)]

```
interface ICoreWebView2ExperimentalWindowFeatures
  : public IUnknown
```

Window features for a WebView popup window.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[get_Height](#get_height) | The height of the window.
[get_Left](#get_left) | The left position of the window. Will fail if HasPosition is false.
[get_MenuBar](#get_menubar) | Whether or not to display the menu bar.
[get_ScrollBars](#get_scrollbars) | Whether or not to display scroll bars.
[get_Status](#get_status) | Whether or not to add a status bar.
[get_Toolbar](#get_toolbar) | Whether or not to display the browser toolbar.
[get_Top](#get_top) | The top position of the window. Will fail if HasPosition is false.
[get_Width](#get_width) | The width of the window.
[HasPosition](#hasposition) | Has specified left and top values.
[HasSize](#hassize) | Has specified height and width values.

These fields match the 'windowFeatures' passed to window.open as specified in [https://developer.mozilla.org/en-US/docs/Web/API/Window/open#Window_features](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#Window_features)

## Members

#### get_Height 

The height of the window.

> public HRESULT [get_Height](#get_height)(UINT32 * height)

Minimum value is 100. Will fail if HasSize is false.

#### get_Left 

The left position of the window. Will fail if HasPosition is false.

> public HRESULT [get_Left](#get_left)(UINT32 * left)

#### get_MenuBar 

Whether or not to display the menu bar.

> public HRESULT [get_MenuBar](#get_menubar)(BOOL * menuBar)

#### get_ScrollBars 

Whether or not to display scroll bars.

> public HRESULT [get_ScrollBars](#get_scrollbars)(BOOL * scrollBars)

#### get_Status 

Whether or not to add a status bar.

> public HRESULT [get_Status](#get_status)(BOOL * status)

#### get_Toolbar 

Whether or not to display the browser toolbar.

> public HRESULT [get_Toolbar](#get_toolbar)(BOOL * toolbar)

#### get_Top 

The top position of the window. Will fail if HasPosition is false.

> public HRESULT [get_Top](#get_top)(UINT32 * top)

#### get_Width 

The width of the window.

> public HRESULT [get_Width](#get_width)(UINT32 * width)

Minimum value is 100. Will fail if HasSize is false.

#### HasPosition 

Has specified left and top values.

> public HRESULT [HasPosition](#hasposition)(BOOL * hasPosition)

#### HasSize 

Has specified height and width values.

> public HRESULT [HasSize](#hassize)(BOOL * hasSize)

