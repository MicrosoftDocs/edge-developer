---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/30/2019
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge
---

# interface IWebView2Settings2 

```
interface IWebView2Settings2
  : public IWebView2Settings
```

Additional functionality implemented by the Settings object.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[get_AreDefaultContextMenusEnabled](#get_aredefaultcontextmenusenabled) | The AreDefaultContextMenusEnabled property is used to prevent default context menus from being shown to user in webview.
[put_AreDefaultContextMenusEnabled](#put_aredefaultcontextmenusenabled) | Set the AreDefaultContextMenusEnabled property.

You can QueryInterface for this interface from the object that implements [IWebView2Settings](IWebView2Settings.md#iwebview2settings). See the [IWebView2Settings](IWebView2Settings.md#iwebview2settings) interface for more details.

## Members

#### get_AreDefaultContextMenusEnabled 

The AreDefaultContextMenusEnabled property is used to prevent default context menus from being shown to user in webview.

> public HRESULT [get_AreDefaultContextMenusEnabled](#get_aredefaultcontextmenusenabled)(BOOL * enabled)

Defaults to TRUE.

```cpp
      BOOL allowContextMenus = TRUE;
      CHECK_FAILURE(m_settings->get_AreDefaultContextMenusEnabled(&allowContextMenus));
      if (allowContextMenus)
      {
          CHECK_FAILURE(m_settings->put_AreDefaultContextMenusEnabled(FALSE));
          MessageBox(nullptr, std::wstring(L"Context menus will be disabled after the next navigation.").c_str(),
                     L"Settings change", MB_OK);
      }
      else
      {
          CHECK_FAILURE(m_settings->put_AreDefaultContextMenusEnabled(TRUE));
          MessageBox(nullptr, std::wstring(L"Context menus will be enabled after the next navigation.").c_str(),
                     L"Settings change", MB_OK);
      }
```

#### put_AreDefaultContextMenusEnabled 

Set the AreDefaultContextMenusEnabled property.

> public HRESULT [put_AreDefaultContextMenusEnabled](#put_aredefaultcontextmenusenabled)(BOOL enabled)

