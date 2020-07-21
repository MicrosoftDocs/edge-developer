---
description: Embed web technologies (HTML, CSS, and JavaScript) in your native applications with the Microsoft Edge WebView2 control
title: Microsoft.Web.WebView2.Core.CoreWebView2AcceleratorKeyPressedEventArgs
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/08/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: Microsoft.Web.WebView2, Core, webview2, webview, dotnet, wpf, winforms, app, edge, CoreWebView2, CoreWebView2Controller, browser control, edge html, Microsoft.Web.WebView2.Core.CoreWebView2AcceleratorKeyPressedEventArgs
---

# Microsoft.Web.WebView2.Core.CoreWebView2AcceleratorKeyPressedEventArgs class 

Namespace: Microsoft.Web.WebView2.Core\
Assembly: Microsoft.Web.WebView2.Core.dll

Event args for the AcceleratorKeyPressed event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[Handled](#handled) | During AcceleratorKeyPressedEvent handler invocation the WebView is blocked waiting for the decision of if the accelerator will be handled by the host or not.
[KeyEventKind](#keyeventkind) | The key event type that caused the event to be fired.
[KeyEventLParam](#keyeventlparam) | The LPARAM value that accompanied the window message.
[PhysicalKeyStatus](#physicalkeystatus) | A structure representing the information passed in the LPARAM of the window message.
[VirtualKey](#virtualkey) | The Win32 virtual key code of the key that was pressed or released.

## Members

#### Handled 

During AcceleratorKeyPressedEvent handler invocation the WebView is blocked waiting for the decision of if the accelerator will be handled by the host or not.

> public bool [Handled](#handled)

If the Handled property is set to TRUE then this will prevent the WebView from performing the default action for this accelerator key. Otherwise the WebView will perform the default action for the accelerator key.

#### KeyEventKind 

The key event type that caused the event to be fired.

> public [CoreWebView2KeyEventKind](./namespace-microsoft-web-webview2-core.md) [KeyEventKind](#keyeventkind)

#### KeyEventLParam 

The LPARAM value that accompanied the window message.

> public int [KeyEventLParam](#keyeventlparam)

See the documentation for the WM_KEYDOWN and WM_KEYUP messages.

#### PhysicalKeyStatus 

A structure representing the information passed in the LPARAM of the window message.

> public [CoreWebView2PhysicalKeyStatus](microsoft-web-webview2-core-corewebview2physicalkeystatus.md) [PhysicalKeyStatus](#physicalkeystatus)

#### VirtualKey 

The Win32 virtual key code of the key that was pressed or released.

> public uint [VirtualKey](#virtualkey)

This will be one of the Win32 virtual key constants such as VK_RETURN or an (uppercase) ASCII value such as 'A'. You can check whether Ctrl or Alt are pressed by calling GetKeyState(VK_CONTROL) or GetKeyState(VK_MENU).

