---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: 0.9.515 - Microsoft.Web.WebView2.Core.CoreWebView2PhysicalKeyStatus
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/20/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---

# 0.9.515 - Microsoft.Web.WebView2.Core.CoreWebView2PhysicalKeyStatus struct 

[!INCLUDE [deprecation-note](../../includes/deprecation-note.md)]

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

