---
description: Embed web technologies (HTML, CSS, and JavaScript) in your native applications with the Microsoft Edge WebView2 control
title: Microsoft.Web.WebView2.Core.CoreWebView2PhysicalKeyStatus
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/08/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: Microsoft.Web.WebView2, Core, webview2, webview, dotnet, wpf, winforms, app, edge, CoreWebView2, CoreWebView2Controller, browser control, edge html, Microsoft.Web.WebView2.Core.CoreWebView2PhysicalKeyStatus
---

# Microsoft.Web.WebView2.Core.CoreWebView2PhysicalKeyStatus struct 

Namespace: Microsoft.Web.WebView2.Core\
Assembly: Microsoft.Web.WebView2.Core.dll

A structure representing the information packed into the LPARAM given to a Win32 key event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[IsExtendedKey](#isextendedkey) | Indicates whether the key is an extended key.
[IsKeyReleased](#iskeyreleased) | The transition state.
[IsMenuKeyDown](#ismenukeydown) | The context code.
[RepeatCount](#repeatcount) | The repeat count for the current message.
[ScanCode](#scancode) | The scan code.
[WasKeyDown](#waskeydown) | The previous key state.

See the documentation for WM_KEYDOWN for details at [https://docs.microsoft.com/windows/win32/inputdev/wm-keydown](https://docs.microsoft.com/windows/win32/inputdev/wm-keydown).

## Members

#### IsExtendedKey 

Indicates whether the key is an extended key.

> public int [IsExtendedKey](#isextendedkey)

#### IsKeyReleased 

The transition state.

> public int [IsKeyReleased](#iskeyreleased)

#### IsMenuKeyDown 

The context code.

> public int [IsMenuKeyDown](#ismenukeydown)

#### RepeatCount 

The repeat count for the current message.

> public uint [RepeatCount](#repeatcount)

#### ScanCode 

The scan code.

> public uint [ScanCode](#scancode)

#### WasKeyDown 

The previous key state.

> public int [WasKeyDown](#waskeydown)

