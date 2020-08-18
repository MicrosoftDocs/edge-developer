---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: 0.8.355 - WebView2 Win32 C++ IWebView2AcceleratorKeyPressedEventArgs
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/20/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge
---

# 0.8.355 - interface IWebView2AcceleratorKeyPressedEventArgs 

[!INCLUDE [deprecation-note](../../includes/deprecation-note.md)]

```
interface IWebView2AcceleratorKeyPressedEventArgs
  : public IUnknown
```

Event args for the AcceleratorKeyPressed event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[get_KeyEventType](#get_keyeventtype) | The key event type that caused the event to be fired.
[get_VirtualKey](#get_virtualkey) | The Win32 virtual key code of the key that was pressed or released.
[get_KeyEventLParam](#get_keyeventlparam) | The LPARAM value that accompanied the window message.
[get_PhysicalKeyStatus](#get_physicalkeystatus) | A structure representing the information passed in the LPARAM of the window message.
[Handle](#handle) | Calling this will allow the browser process to continue.

## Members

#### get_KeyEventType 

The key event type that caused the event to be fired.

> public HRESULT [get_KeyEventType](#get_keyeventtype)(WEBVIEW2_KEY_EVENT_TYPE * keyEventType)

This is one of WEBVIEW2_KEY_EVENT_TYPE_KEY_DOWN, WEBVIEW2_KEY_EVENT_TYPE_KEY_UP, WEBVIEW2_KEY_EVENT_TYPE_SYSTEM_KEY_DOWN, or WEBVIEW2_KEY_EVENT_TYPE_SYSTEM_KEY_UP.

#### get_VirtualKey 

The Win32 virtual key code of the key that was pressed or released.

> public HRESULT [get_VirtualKey](#get_virtualkey)(UINT * virtualKey)

This will be one of the Win32 virtual key constants such as VK_RETURN or an (uppercase) ASCII value such as 'A'. You can check whether Ctrl or Alt are pressed by calling GetKeyState(VK_CONTROL) or GetKeyState(VK_MENU).

#### get_KeyEventLParam 

The LPARAM value that accompanied the window message.

> public HRESULT [get_KeyEventLParam](#get_keyeventlparam)(INT * lParam)

See the documentation for the WM_KEYDOWN and WM_KEYUP messages.

#### get_PhysicalKeyStatus 

A structure representing the information passed in the LPARAM of the window message.

> public HRESULT [get_PhysicalKeyStatus](#get_physicalkeystatus)(WEBVIEW2_PHYSICAL_KEY_STATUS * physicalKeyStatus)

#### Handle 

Calling this will allow the browser process to continue.

> public HRESULT [Handle](#handle)(BOOL handled)

Passing TRUE will prevent the browser from performing the default action for this accelerator key. If the event handler returns without calling [Handle()](#handle), it is equivalent to calling Handle(FALSE). Calling [Handle()](#handle) after it has already been called or the event handler has returned will do nothing.

