---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/27/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---

# struct Microsoft.Web.WebView2.Core.CoreWebView2PhysicalKeyStatus 

A structure representing the information packed into the LPARAM given to a Win32 key event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[RepeatCount](#repeatcount) | The repeat count for the current message.
[ScanCode](#scancode) | The scan code.
[IsExtendedKey](#isextendedkey) | Indicates whether the key is an extended key.
[IsMenuKeyDown](#ismenukeydown) | The context code.
[WasKeyDown](#waskeydown) | The previous key state.
[IsKeyReleased](#iskeyreleased) | The transition state.

See the documentation for WM_KEYDOWN for details at [https://docs.microsoft.com/windows/win32/inputdev/wm-keydown](https://docs.microsoft.com/windows/win32/inputdev/wm-keydown).

## Members

#### RepeatCount 

The repeat count for the current message.

> public uint [RepeatCount](#repeatcount)

#### ScanCode 

The scan code.

> public uint [ScanCode](#scancode)

#### IsExtendedKey 

Indicates whether the key is an extended key.

> public int [IsExtendedKey](#isextendedkey)

#### IsMenuKeyDown 

The context code.

> public int [IsMenuKeyDown](#ismenukeydown)

#### WasKeyDown 

The previous key state.

> public int [WasKeyDown](#waskeydown)

#### IsKeyReleased 

The transition state.

> public int [IsKeyReleased](#iskeyreleased)

