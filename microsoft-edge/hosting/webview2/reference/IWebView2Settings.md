---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/28/2019
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge
---

# interface IWebView2Settings 

```
interface IWebView2Settings
  : public IUnknown
```

Defines properties that enable, disable, or modify WebView features. Setting changes made after NavigationStarting event will not apply until the next top level navigation. 

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[get_IsScriptEnabled](#get_isscriptenabled) | Controls if JavaScript execution is enabled in all future navigations in the WebView.
[put_IsScriptEnabled](#put_isscriptenabled) | Set the IsScriptEnabled property.
[get_IsWebMessageEnabled](#get_iswebmessageenabled) | The IsWebMessageEnabled property is used when loading a new HTML document.
[put_IsWebMessageEnabled](#put_iswebmessageenabled) | Set the IsWebMessageEnabled property.
[get_AreDefaultScriptDialogsEnabled](#get_aredefaultscriptdialogsenabled) | AreDefaultScriptDialogsEnabled is used when loading a new HTML document.
[put_AreDefaultScriptDialogsEnabled](#put_aredefaultscriptdialogsenabled) | Set the AreDefaultScriptDialogsEnabled property.
[get_IsFullscreenAllowed](#get_isfullscreenallowed) | Controls if fullscreen is allowed for the WebView.
[put_IsFullscreenAllowed](#put_isfullscreenallowed) | Set the IsFullscreenAllowed property.

## Members

#### get_IsScriptEnabled 

Controls if JavaScript execution is enabled in all future navigations in the WebView.

> public HRESULT [get_IsScriptEnabled](#interface_i_web_view2_settings_1aa2867d2d39d23dfe394126e43c53e615)(BOOL * isScriptEnabled)

It is true by default.

```cpp
HRESULT ScenarioScript::NavigationStartingEventHandler(
    IWebView2WebView* sender, IWebView2NavigationStartingEventArgs* args)
{
    // In this sample we disable JavaScript execution if we see that we ever
    // navigate to somewhere other than https://example.com
    wil::unique_cotaskmem_string uri;
    RETURN_IF_FAILED(args->get_Uri(&uri));

    ComPtr<IWebView2Settings> settings;
    RETURN_IF_FAILED(m_webview->get_Settings(&settings));

    if (!DoesUriMatchDomain(uri.get(), L"example.com"))
    {
        // By default JavaScript is enabled so we don't need to set it to
        // TRUE.
        // Changes to IsScriptEnabled apply to future navigations including
        // the navigation that occurs after a NavigationStarting event.
        RETURN_IF_FAILED(settings->put_IsScriptEnabled(FALSE));
    }

    return S_OK;
}
```

#### put_IsScriptEnabled 

Set the IsScriptEnabled property.

> public HRESULT [put_IsScriptEnabled](#interface_i_web_view2_settings_1a900fc1446d14dcdf59323562ea5fc5f8)(BOOL isScriptEnabled)

#### get_IsWebMessageEnabled 

The IsWebMessageEnabled property is used when loading a new HTML document.

> public HRESULT [get_IsWebMessageEnabled](#interface_i_web_view2_settings_1af7a834cbd32878793484b3e7ecd40ab9)(BOOL * isWebMessageEnabled)

If set to true, communication from the host to the webview's top level HTML document is allowed via PostWebMessageAsJson, PostWebMessageAsString, and window.chrome.webview's message event (see PostWebMessageAsJson documentation for details). Communication from the webview's top level HTML document to the host is allowed via window.chrome.webview's postMessage function and the SetWebMessageReceivedEventHandler method (see the SetWebMessageReceivedEventHandler documentation for details). If set to false, then communication is disallowed. PostWebMessageAsJson and PostWebMessageAsString will fail with E_ACCESSDENIED and window.chrome.webview.postMessage will fail by throwing an instance of an Error object. It is true by default.

```cpp
    ComPtr<IWebView2Settings> settings;
    RETURN_IF_FAILED(m_webview->get_Settings(&settings));

    RETURN_IF_FAILED(settings->put_IsWebMessageEnabled(TRUE));

    // Setup the web message received event handler before navigating to
    // ensure we don't miss any messages.
    RETURN_IF_FAILED(m_webview->add_WebMessageReceived(
        Microsoft::WRL::Callback<IWebView2WebMessageReceivedEventHandler>(
            this, &::ScenarioWebMessage::WebMessageReceivedEventHandler)
        .Get(), &m_webMessageReceivedToken));

    // Changes to IWebView2Settings::IsWebMessageEnabled apply to the next document
    // to which we navigate.
    RETURN_IF_FAILED(m_webview->Navigate(s_exampleUri));

    return S_OK;
```

#### put_IsWebMessageEnabled 

Set the IsWebMessageEnabled property.

> public HRESULT [put_IsWebMessageEnabled](#interface_i_web_view2_settings_1a6883867d6600084e24a9d62c250e294f)(BOOL isWebMessageEnabled)

#### get_AreDefaultScriptDialogsEnabled 

AreDefaultScriptDialogsEnabled is used when loading a new HTML document.

> public HRESULT [get_AreDefaultScriptDialogsEnabled](#interface_i_web_view2_settings_1a51946197a68a096527a03689d62b73e2)(BOOL * areDefaultScriptDialogsEnabled)

If set to false, then WebView won't render the default javascript dialog box (Specifically those shown by the javascript alert, confirm, and prompt functions). Instead, if an event handler is set by SetScriptDialogOpeningEventHandler, WebView will send an event that will contain all of the information for the dialog and allow the host app to show its own custom UI.

#### put_AreDefaultScriptDialogsEnabled 

Set the AreDefaultScriptDialogsEnabled property.

> public HRESULT [put_AreDefaultScriptDialogsEnabled](#interface_i_web_view2_settings_1afe873806f6e98b75922a937d0af21dbf)(BOOL areDefaultScriptDialogsEnabled)

#### get_IsFullscreenAllowed 

Controls if fullscreen is allowed for the WebView.

> public HRESULT [get_IsFullscreenAllowed](#interface_i_web_view2_settings_1aff1d9dc0947e403664cc6d177355d0ff)(BOOL * isFullscreenAllowed)

When it is allowed, web content such as a video element in the WebView is allowed to be displayed full screen. When it is not allowed, such element will fill the WebView bounds when the element requests full screen. It is true by default.

#### put_IsFullscreenAllowed 

Set the IsFullscreenAllowed property.

> public HRESULT [put_IsFullscreenAllowed](#interface_i_web_view2_settings_1a10ef13244a7db2ce525dfc7502f79d97)(BOOL isFullscreenAllowed)
