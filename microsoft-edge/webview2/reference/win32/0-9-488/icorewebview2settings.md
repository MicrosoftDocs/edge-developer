---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: 0.9.515 - WebView2 Win32 C++ ICoreWebView2Settings
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/20/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---

# 0.9.515 - interface ICoreWebView2Settings 

[!INCLUDE [deprecation-note](../../includes/deprecation-note.md)]

```
interface ICoreWebView2Settings
  : public IUnknown
```

Defines properties that enable, disable, or modify WebView features.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[get_AreDefaultContextMenusEnabled](#get_aredefaultcontextmenusenabled) | The AreDefaultContextMenusEnabled property is used to prevent default context menus from being shown to user in webview.
[get_AreDefaultScriptDialogsEnabled](#get_aredefaultscriptdialogsenabled) | AreDefaultScriptDialogsEnabled is used when loading a new HTML document.
[get_AreDevToolsEnabled](#get_aredevtoolsenabled) | AreDevToolsEnabled controls whether the user is able to use the context menu or keyboard shortcuts to open the DevTools window.
[get_AreRemoteObjectsAllowed](#get_areremoteobjectsallowed) | The AreRemoteObjectsAllowed property is used to control whether host objects are accessible from the page in webview.
[get_IsBuiltInErrorPageEnabled](#get_isbuiltinerrorpageenabled) | The IsBuiltInErrorPageEnabled property is used to disable built in error page for navigation failure and render process failure.
[get_IsScriptEnabled](#get_isscriptenabled) | Controls if JavaScript execution is enabled in all future navigations in the WebView.
[get_IsStatusBarEnabled](#get_isstatusbarenabled) | IsStatusBarEnabled controls whether the status bar will be displayed.
[get_IsWebMessageEnabled](#get_iswebmessageenabled) | The IsWebMessageEnabled property is used when loading a new HTML document.
[get_IsZoomControlEnabled](#get_iszoomcontrolenabled) | The IsZoomControlEnabled property is used to prevent the user from impacting the zoom of the WebView.
[put_AreDefaultContextMenusEnabled](#put_aredefaultcontextmenusenabled) | Set the AreDefaultContextMenusEnabled property.
[put_AreDefaultScriptDialogsEnabled](#put_aredefaultscriptdialogsenabled) | Set the AreDefaultScriptDialogsEnabled property.
[put_AreDevToolsEnabled](#put_aredevtoolsenabled) | Set the AreDevToolsEnabled property.
[put_AreRemoteObjectsAllowed](#put_areremoteobjectsallowed) | Set the AreRemoteObjectsAllowed property.
[put_IsBuiltInErrorPageEnabled](#put_isbuiltinerrorpageenabled) | Set the IsBuiltInErrorPageEnabled property.
[put_IsScriptEnabled](#put_isscriptenabled) | Set the IsScriptEnabled property.
[put_IsStatusBarEnabled](#put_isstatusbarenabled) | Set the IsStatusBarEnabled property.
[put_IsWebMessageEnabled](#put_iswebmessageenabled) | Set the IsWebMessageEnabled property.
[put_IsZoomControlEnabled](#put_iszoomcontrolenabled) | Set the IsZoomControlEnabled property.

Setting changes made after NavigationStarting event will not apply until the next top level navigation.

## Members

#### get_AreDefaultContextMenusEnabled 

The AreDefaultContextMenusEnabled property is used to prevent default context menus from being shown to user in webview.

> public HRESULT [get_AreDefaultContextMenusEnabled](#get_aredefaultcontextmenusenabled)(BOOL * enabled)

Defaults to TRUE.

```cpp
            BOOL allowContextMenus;
            CHECK_FAILURE(m_settings->get_AreDefaultContextMenusEnabled(
                &allowContextMenus));
            if (allowContextMenus) {
                CHECK_FAILURE(m_settings->put_AreDefaultContextMenusEnabled(FALSE));
                MessageBox(nullptr,
                L"Context menus will be disabled after the next navigation.",
                L"Settings change", MB_OK);
            }
            else {
                CHECK_FAILURE(m_settings->put_AreDefaultContextMenusEnabled(TRUE));
                MessageBox(nullptr,
                    L"Context menus will be enabled after the next navigation.",
                    L"Settings change", MB_OK);
            }
```

#### get_AreDefaultScriptDialogsEnabled 

AreDefaultScriptDialogsEnabled is used when loading a new HTML document.

> public HRESULT [get_AreDefaultScriptDialogsEnabled](#get_aredefaultscriptdialogsenabled)(BOOL * areDefaultScriptDialogsEnabled)

If set to false, then WebView won't render the default javascript dialog box (Specifically those shown by the javascript alert, confirm, prompt functions and beforeunload event). Instead, if an event handler is set by SetScriptDialogOpeningEventHandler, WebView will send an event that will contain all of the information for the dialog and allow the host app to show its own custom UI.

#### get_AreDevToolsEnabled 

AreDevToolsEnabled controls whether the user is able to use the context menu or keyboard shortcuts to open the DevTools window.

> public HRESULT [get_AreDevToolsEnabled](#get_aredevtoolsenabled)(BOOL * areDevToolsEnabled)

It is true by default.

#### get_AreRemoteObjectsAllowed 

The AreRemoteObjectsAllowed property is used to control whether host objects are accessible from the page in webview.

> public HRESULT [get_AreRemoteObjectsAllowed](#get_areremoteobjectsallowed)(BOOL * allowed)

Defaults to TRUE.

```cpp
            BOOL allowRemoteObjects;
            CHECK_FAILURE(m_settings->get_AreRemoteObjectsAllowed(&allowRemoteObjects));
            if (allowRemoteObjects)
            {
                CHECK_FAILURE(m_settings->put_AreRemoteObjectsAllowed(FALSE));
                MessageBox(
                    nullptr, L"Access to remote objects will be denied after the next navigation.",
                    L"Settings change", MB_OK);
            }
            else
            {
                CHECK_FAILURE(m_settings->put_AreRemoteObjectsAllowed(TRUE));
                MessageBox(
                    nullptr, L"Access to remote objects will be allowed after the next navigation.",
                    L"Settings change", MB_OK);
            }
```

#### get_IsBuiltInErrorPageEnabled 

The IsBuiltInErrorPageEnabled property is used to disable built in error page for navigation failure and render process failure.

> public HRESULT [get_IsBuiltInErrorPageEnabled](#get_isbuiltinerrorpageenabled)(BOOL * enabled)

Defaults to TRUE. When disabled, blank page will be shown when related error happens.

```cpp
            BOOL enabled;
            CHECK_FAILURE(m_settings->get_IsBuiltInErrorPageEnabled(&enabled));
            if (enabled)
            {
                CHECK_FAILURE(m_settings->put_IsBuiltInErrorPageEnabled(FALSE));
                MessageBox(
                    nullptr, L"Built-in error page will be disabled for future navigation.",
                    L"Settings change", MB_OK);
            }
            else
            {
                CHECK_FAILURE(m_settings->put_IsBuiltInErrorPageEnabled(TRUE));
                MessageBox(
                    nullptr, L"Built-in error page will be enabled for future navigation.",
                    L"Settings change", MB_OK);
            }
```

#### get_IsScriptEnabled 

Controls if JavaScript execution is enabled in all future navigations in the WebView.

> public HRESULT [get_IsScriptEnabled](#get_isscriptenabled)(BOOL * isScriptEnabled)

This only affects scripts in the document; scripts injected with ExecuteScript will run even if script is disabled. It is true by default.

```cpp
        // Changes to settings will apply at the next navigation, which includes the
        // navigation after a NavigationStarting event.  We can use this to change
        // settings according to what site we're visiting.
        if (ShouldBlockScriptForUri(uri.get()))
        {
            m_settings->put_IsScriptEnabled(FALSE);
        }
        else
        {
            m_settings->put_IsScriptEnabled(m_isScriptEnabled);
        }
```

#### get_IsStatusBarEnabled 

IsStatusBarEnabled controls whether the status bar will be displayed.

> public HRESULT [get_IsStatusBarEnabled](#get_isstatusbarenabled)(BOOL * isStatusBarEnabled)

The status bar is usually displayed in the lower left of the WebView and shows things such as the URI of a link when the user hovers over it and other information. It is true by default.

#### get_IsWebMessageEnabled 

The IsWebMessageEnabled property is used when loading a new HTML document.

> public HRESULT [get_IsWebMessageEnabled](#get_iswebmessageenabled)(BOOL * isWebMessageEnabled)

If set to true, communication from the host to the webview's top level HTML document is allowed via PostWebMessageAsJson, PostWebMessageAsString, and window.chrome.webview's message event (see PostWebMessageAsJson documentation for details). Communication from the webview's top level HTML document to the host is allowed via window.chrome.webview's postMessage function and the SetWebMessageReceivedEventHandler method (see the SetWebMessageReceivedEventHandler documentation for details). If set to false, then communication is disallowed. PostWebMessageAsJson and PostWebMessageAsString will fail with E_ACCESSDENIED and window.chrome.webview.postMessage will fail by throwing an instance of an Error object. It is true by default.

```cpp
    ComPtr<ICoreWebView2Settings> settings;
    CHECK_FAILURE(m_webView->get_Settings(&settings));

    CHECK_FAILURE(settings->put_IsWebMessageEnabled(TRUE));
```

#### get_IsZoomControlEnabled 

The IsZoomControlEnabled property is used to prevent the user from impacting the zoom of the WebView.

> public HRESULT [get_IsZoomControlEnabled](#get_iszoomcontrolenabled)(BOOL * enabled)

Defaults to TRUE. When disabled, user will not be able to zoom using ctrl+/- or ctrl+mouse wheel, but the zoom can be set via ZoomFactor API.

```cpp
            BOOL zoomControlEnabled;
            CHECK_FAILURE(m_settings->get_IsZoomControlEnabled(&zoomControlEnabled));
            if (zoomControlEnabled)
            {
                CHECK_FAILURE(m_settings->put_IsZoomControlEnabled(FALSE));
                MessageBox(
                    nullptr, L"Zoom control will be disabled after the next navigation.", L"Settings change",
                    MB_OK);
            }
            else
            {
                CHECK_FAILURE(m_settings->put_IsZoomControlEnabled(TRUE));
                MessageBox(
                    nullptr, L"Zoom control will be enabled after the next navigation.", L"Settings change",
                    MB_OK);
            }
```

#### put_AreDefaultContextMenusEnabled 

Set the AreDefaultContextMenusEnabled property.

> public HRESULT [put_AreDefaultContextMenusEnabled](#put_aredefaultcontextmenusenabled)(BOOL enabled)

#### put_AreDefaultScriptDialogsEnabled 

Set the AreDefaultScriptDialogsEnabled property.

> public HRESULT [put_AreDefaultScriptDialogsEnabled](#put_aredefaultscriptdialogsenabled)(BOOL areDefaultScriptDialogsEnabled)

#### put_AreDevToolsEnabled 

Set the AreDevToolsEnabled property.

> public HRESULT [put_AreDevToolsEnabled](#put_aredevtoolsenabled)(BOOL areDevToolsEnabled)

#### put_AreRemoteObjectsAllowed 

Set the AreRemoteObjectsAllowed property.

> public HRESULT [put_AreRemoteObjectsAllowed](#put_areremoteobjectsallowed)(BOOL allowed)

#### put_IsBuiltInErrorPageEnabled 

Set the IsBuiltInErrorPageEnabled property.

> public HRESULT [put_IsBuiltInErrorPageEnabled](#put_isbuiltinerrorpageenabled)(BOOL enabled)

#### put_IsScriptEnabled 

Set the IsScriptEnabled property.

> public HRESULT [put_IsScriptEnabled](#put_isscriptenabled)(BOOL isScriptEnabled)

#### put_IsStatusBarEnabled 

Set the IsStatusBarEnabled property.

> public HRESULT [put_IsStatusBarEnabled](#put_isstatusbarenabled)(BOOL isStatusBarEnabled)

#### put_IsWebMessageEnabled 

Set the IsWebMessageEnabled property.

> public HRESULT [put_IsWebMessageEnabled](#put_iswebmessageenabled)(BOOL isWebMessageEnabled)

#### put_IsZoomControlEnabled 

Set the IsZoomControlEnabled property.

> public HRESULT [put_IsZoomControlEnabled](#put_iszoomcontrolenabled)(BOOL enabled)

