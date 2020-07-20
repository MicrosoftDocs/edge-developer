---
description: Embed web technologies (HTML, CSS, and JavaScript) in your native applications with the Microsoft Edge WebView2 control
title: Microsoft.Web.WebView2.Core.CoreWebView2WindowFeatures
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/20/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: Microsoft.Web.WebView2, Core, webview2, webview, dotnet, wpf, winforms, app, edge, CoreWebView2, CoreWebView2Controller, browser control, edge html, Microsoft.Web.WebView2.Core.CoreWebView2WindowFeatures
---

# Microsoft.Web.WebView2.Core.CoreWebView2WindowFeatures class 

[!INCLUDE [prerelease-note](../../includes/prerelease-note.md)]

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

