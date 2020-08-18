---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: 0.8.355 - WebView2 Win32 C++ IWebView2Settings
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/20/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge
---

# 0.8.355 - interface IWebView2Settings 

[!INCLUDE [deprecation-note](../../includes/deprecation-note.md)]

```
interface IWebView2Settings
  : public IUnknown
```

Defines properties that enable, disable, or modify WebView features.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[get_IsScriptEnabled](#get_isscriptenabled) | Controls if JavaScript execution is enabled in all future navigations in the WebView.
[put_IsScriptEnabled](#put_isscriptenabled) | Set the IsScriptEnabled property.
[get_IsWebMessageEnabled](#get_iswebmessageenabled) | The IsWebMessageEnabled property is used when loading a new HTML document.
[put_IsWebMessageEnabled](#put_iswebmessageenabled) | Set the IsWebMessageEnabled property.
[get_AreDefaultScriptDialogsEnabled](#get_aredefaultscriptdialogsenabled) | AreDefaultScriptDialogsEnabled is used when loading a new HTML document.
[put_AreDefaultScriptDialogsEnabled](#put_aredefaultscriptdialogsenabled) | Set the AreDefaultScriptDialogsEnabled property.
[get_IsFullscreenAllowed_deprecated](#get_isfullscreenallowed_deprecated) | This setting is deprecated and will always return false.
[put_IsFullscreenAllowed_deprecated](#put_isfullscreenallowed_deprecated) | This setting is deprecated and will have no effect.
[get_IsStatusBarEnabled](#get_isstatusbarenabled) | IsStatusBarEnabled controls whether the status bar will be displayed.
[put_IsStatusBarEnabled](#put_isstatusbarenabled) | Set the IsStatusBarEnabled property.
[get_AreDevToolsEnabled](#get_aredevtoolsenabled) | AreDevToolsEnabled controls whether the user is able to use the context menu or keyboard shortcuts to open the DevTools window.
[put_AreDevToolsEnabled](#put_aredevtoolsenabled) | Set the AreDevToolsEnabled property.

Setting changes made after NavigationStarting event will not apply until the next top level navigation.

## Members

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

#### put_IsScriptEnabled 

Set the IsScriptEnabled property.

> public HRESULT [put_IsScriptEnabled](#put_isscriptenabled)(BOOL isScriptEnabled)

#### get_IsWebMessageEnabled 

The IsWebMessageEnabled property is used when loading a new HTML document.

> public HRESULT [get_IsWebMessageEnabled](#get_iswebmessageenabled)(BOOL * isWebMessageEnabled)

If set to true, communication from the host to the webview's top level HTML document is allowed via PostWebMessageAsJson, PostWebMessageAsString, and window.chrome.webview's message event (see PostWebMessageAsJson documentation for details). Communication from the webview's top level HTML document to the host is allowed via window.chrome.webview's postMessage function and the SetWebMessageReceivedEventHandler method (see the SetWebMessageReceivedEventHandler documentation for details). If set to false, then communication is disallowed. PostWebMessageAsJson and PostWebMessageAsString will fail with E_ACCESSDENIED and window.chrome.webview.postMessage will fail by throwing an instance of an Error object. It is true by default.

```cpp
    ComPtr<IWebView2Settings> settings;
    CHECK_FAILURE(m_webView->get_Settings(&settings));

    CHECK_FAILURE(settings->put_IsWebMessageEnabled(TRUE));
```

#### put_IsWebMessageEnabled 

Set the IsWebMessageEnabled property.

> public HRESULT [put_IsWebMessageEnabled](#put_iswebmessageenabled)(BOOL isWebMessageEnabled)

#### get_AreDefaultScriptDialogsEnabled 

AreDefaultScriptDialogsEnabled is used when loading a new HTML document.

> public HRESULT [get_AreDefaultScriptDialogsEnabled](#get_aredefaultscriptdialogsenabled)(BOOL * areDefaultScriptDialogsEnabled)

If set to false, then WebView won't render the default javascript dialog box (Specifically those shown by the javascript alert, confirm, and prompt functions). Instead, if an event handler is set by SetScriptDialogOpeningEventHandler, WebView will send an event that will contain all of the information for the dialog and allow the host app to show its own custom UI.

#### put_AreDefaultScriptDialogsEnabled 

Set the AreDefaultScriptDialogsEnabled property.

> public HRESULT [put_AreDefaultScriptDialogsEnabled](#put_aredefaultscriptdialogsenabled)(BOOL areDefaultScriptDialogsEnabled)

#### get_IsFullscreenAllowed_deprecated 

This setting is deprecated and will always return false.

> public HRESULT [get_IsFullscreenAllowed_deprecated](#get_isfullscreenallowed_deprecated)(BOOL * isFullscreenAllowed)

That means elements in the WebView will only fill the WebView bounds. This property will then be completely removed. Please listen to the ContainsFullScreenElementChanged event instead.

Controls if fullscreen is allowed for elements in the WebView. When it is allowed, web content such as a video element in the WebView is allowed to be displayed full screen. When it is not allowed, such element will fill the WebView bounds when the element requests full screen. It is true by default.

#### put_IsFullscreenAllowed_deprecated 

This setting is deprecated and will have no effect.

> public HRESULT [put_IsFullscreenAllowed_deprecated](#put_isfullscreenallowed_deprecated)(BOOL isFullscreenAllowed)

Please listen to the ContainsFullScreenElementChanged event instead.

Set the IsFullscreenAllowed property.

#### get_IsStatusBarEnabled 

IsStatusBarEnabled controls whether the status bar will be displayed.

> public HRESULT [get_IsStatusBarEnabled](#get_isstatusbarenabled)(BOOL * isStatusBarEnabled)

The status bar is usually displayed in the lower left of the WebView and shows things such as the URI of a link when the user hovers over it and other information. It is true by default.

#### put_IsStatusBarEnabled 

Set the IsStatusBarEnabled property.

> public HRESULT [put_IsStatusBarEnabled](#put_isstatusbarenabled)(BOOL isStatusBarEnabled)

#### get_AreDevToolsEnabled 

AreDevToolsEnabled controls whether the user is able to use the context menu or keyboard shortcuts to open the DevTools window.

> public HRESULT [get_AreDevToolsEnabled](#get_aredevtoolsenabled)(BOOL * areDevToolsEnabled)

It is true by default.

#### put_AreDevToolsEnabled 

Set the AreDevToolsEnabled property.

> public HRESULT [put_AreDevToolsEnabled](#put_aredevtoolsenabled)(BOOL areDevToolsEnabled)

