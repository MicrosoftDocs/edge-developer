---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: 0.9.430 - WebView2 Win32 C++ ICoreWebView2AcceleratorKeyPressedEventArgs
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/20/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# 0.9.430 - interface ICoreWebView2AcceleratorKeyPressedEventArgs 

[!INCLUDE [deprecation-note](../../includes/deprecation-note.md)]

```
interface ICoreWebView2AcceleratorKeyPressedEventArgs
  : public IUnknown
```

Event args for the AcceleratorKeyPressed event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[get_KeyEventKind](#get_keyeventkind) | The key event type that caused the event to be fired.
[get_VirtualKey](#get_virtualkey) | The Win32 virtual key code of the key that was pressed or released.
[get_KeyEventLParam](#get_keyeventlparam) | The LPARAM value that accompanied the window message.
[get_PhysicalKeyStatus](#get_physicalkeystatus) | A structure representing the information passed in the LPARAM of the window message.
[get_Handled](#get_handled) | During AcceleratorKeyPressedEvent handler invocation the WebView is blocked waiting for the decision of if the accelerator will be handled by the host or not.
[put_Handled](#put_handled) | Sets the Handled property.

## Members

#### get_KeyEventKind 

The key event type that caused the event to be fired.

> public HRESULT [get_KeyEventKind](#get_keyeventkind)(CORE_WEBVIEW2_KEY_EVENT_KIND * keyEventKind)

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

> public HRESULT [get_PhysicalKeyStatus](#get_physicalkeystatus)(CORE_WEBVIEW2_PHYSICAL_KEY_STATUS * physicalKeyStatus)

#### get_Handled 

During AcceleratorKeyPressedEvent handler invocation the WebView is blocked waiting for the decision of if the accelerator will be handled by the host or not.

> public HRESULT [get_Handled](#get_handled)(BOOL * handled)

If the Handled property is set to TRUE then this will prevent the WebView from performing the default action for this accelerator key. Otherwise the WebView will perform the default action for the accelerator key.

#### put_Handled 

Sets the Handled property.

> public HRESULT [put_Handled](#put_handled)(BOOL handled)

