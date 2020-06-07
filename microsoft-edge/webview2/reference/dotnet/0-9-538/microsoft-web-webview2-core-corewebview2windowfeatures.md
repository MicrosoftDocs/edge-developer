---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/05/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---

# Microsoft.Web.WebView2.Core.CoreWebView2WindowFeatures class 

> [NOTE!]
> This is an [experimental API](../../../concepts/versioning#experimental-apis) that shipped with our SDK version [0.9.538-prerelease](../../../releasenotes#0.9.538).

Namespace: Microsoft.Web.WebView2.Core\
Assembly: Microsoft.Web.WebView2.Core.dll

Window features for a WebView popup window.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[Height](#height) | The height of the window.
[Left](#left) | The left position of the window.
[MenuBar](#menubar) | Whether or not to display the menu bar.
[ScrollBars](#scrollbars) | Whether or not to display scroll bars.
[Status](#status) | Whether or not to add a status bar.
[Toolbar](#toolbar) | Whether or not to display the browser toolbar.
[Top](#top) | The top position of the window.
[Width](#width) | The width of the window.
[HasPosition](#hasposition) | Has specified left and top values.
[HasSize](#hassize) | Has specified height and width values.

## Members

#### Height 

The height of the window.

> public uint [Height](#height)

#### Left 

The left position of the window.

> public uint [Left](#left)

Will fail if HasPosition is false.

#### MenuBar 

Whether or not to display the menu bar.

> public int [MenuBar](#menubar)

#### ScrollBars 

Whether or not to display scroll bars.

> public int [ScrollBars](#scrollbars)

#### Status 

Whether or not to add a status bar.

> public int [Status](#status)

#### Toolbar 

Whether or not to display the browser toolbar.

> public int [Toolbar](#toolbar)

#### Top 

The top position of the window.

> public uint [Top](#top)

Will fail if HasPosition is false.

#### Width 

The width of the window.

> public uint [Width](#width)

#### HasPosition 

Has specified left and top values.

> public int [HasPosition](#hasposition)()

#### HasSize 

Has specified height and width values.

> public int [HasSize](#hassize)()

