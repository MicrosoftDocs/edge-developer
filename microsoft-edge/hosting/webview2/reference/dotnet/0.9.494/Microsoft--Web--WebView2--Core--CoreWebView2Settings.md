---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/22/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---

# class Microsoft::Web::WebView2::Core::CoreWebView2Settings 

Defines properties that enable, disable, or modify WebView features.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[IsScriptEnabled](#isscriptenabled) | Controls if JavaScript execution is enabled in all future navigations in the WebView.
[IsWebMessageEnabled](#iswebmessageenabled) | The IsWebMessageEnabled property is used when loading a new HTML document.
[AreDefaultScriptDialogsEnabled](#aredefaultscriptdialogsenabled) | AreDefaultScriptDialogsEnabled is used when loading a new HTML document.
[IsStatusBarEnabled](#isstatusbarenabled) | IsStatusBarEnabled controls whether the status bar will be displayed.
[AreDevToolsEnabled](#aredevtoolsenabled) | AreDevToolsEnabled controls whether the user is able to use the context menu or keyboard shortcuts to open the DevTools window.
[AreDefaultContextMenusEnabled](#aredefaultcontextmenusenabled) | The AreDefaultContextMenusEnabled property is used to prevent default context menus from being shown to user in webview.
[AreRemoteObjectsAllowed](#areremoteobjectsallowed) | The AreRemoteObjectsAllowed property is used to control whether remote objects are accessible from the page in webview.
[IsZoomControlEnabled](#iszoomcontrolenabled) | The IsZoomControlEnabled property is used to prevent the user from impacting the zoom of the WebView.
[IsBuiltInErrorPageEnabled](#isbuiltinerrorpageenabled) | The IsBuiltInErrorPageEnabled property is used to disable built in error page for navigation failure and render process failure.
[CoreWebView2Settings](#corewebview2settings) | Initializes a new instance of the CoreWebView2Settings class.

Setting changes made after NavigationStarting event will not apply until the next top level navigation.

## Members

#### IsScriptEnabled 

Controls if JavaScript execution is enabled in all future navigations in the WebView.

> {property} bool? [IsScriptEnabled](#isscriptenabled)

This only affects scripts in the document; scripts injected with ExecuteScript will run even if script is disabled. It is true by default.

#### IsWebMessageEnabled 

The IsWebMessageEnabled property is used when loading a new HTML document.

> {property} bool? [IsWebMessageEnabled](#iswebmessageenabled)

If set to true, communication from the host to the webview's top level HTML document is allowed via PostWebMessageAsJson, PostWebMessageAsString, and window.chrome.webview's message event (see PostWebMessageAsJson documentation for details). Communication from the webview's top level HTML document to the host is allowed via window.chrome.webview's postMessage function and the SetWebMessageReceivedEventHandler method (see the SetWebMessageReceivedEventHandler documentation for details). If set to false, then communication is disallowed. PostWebMessageAsJson and PostWebMessageAsString will fail with E_ACCESSDENIED and window.chrome.webview.postMessage will fail by throwing an instance of an Error object. It is true by default.

#### AreDefaultScriptDialogsEnabled 

AreDefaultScriptDialogsEnabled is used when loading a new HTML document.

> {property} bool? [AreDefaultScriptDialogsEnabled](#aredefaultscriptdialogsenabled)

If set to false, then WebView won't render the default javascript dialog box (Specifically those shown by the javascript alert, confirm, prompt functions and beforeunload event). Instead, if an event handler is set by SetScriptDialogOpeningEventHandler, WebView will send an event that will contain all of the information for the dialog and allow the host app to show its own custom UI.

#### IsStatusBarEnabled 

IsStatusBarEnabled controls whether the status bar will be displayed.

> {property} bool? [IsStatusBarEnabled](#isstatusbarenabled)

The status bar is usually displayed in the lower left of the WebView and shows things such as the URI of a link when the user hovers over it and other information. It is true by default.

#### AreDevToolsEnabled 

AreDevToolsEnabled controls whether the user is able to use the context menu or keyboard shortcuts to open the DevTools window.

> {property} bool? [AreDevToolsEnabled](#aredevtoolsenabled)

It is true by default.

#### AreDefaultContextMenusEnabled 

The AreDefaultContextMenusEnabled property is used to prevent default context menus from being shown to user in webview.

> {property} bool? [AreDefaultContextMenusEnabled](#aredefaultcontextmenusenabled)

Defaults to TRUE.

#### AreRemoteObjectsAllowed 

The AreRemoteObjectsAllowed property is used to control whether remote objects are accessible from the page in webview.

> {property} bool? [AreRemoteObjectsAllowed](#areremoteobjectsallowed)

Defaults to TRUE.

#### IsZoomControlEnabled 

The IsZoomControlEnabled property is used to prevent the user from impacting the zoom of the WebView.

> {property} bool? [IsZoomControlEnabled](#iszoomcontrolenabled)

Defaults to TRUE. When disabled, user will not be able to zoom using ctrl+/- or ctrl+mouse wheel, but the zoom can be set via ZoomFactor API.

#### IsBuiltInErrorPageEnabled 

The IsBuiltInErrorPageEnabled property is used to disable built in error page for navigation failure and render process failure.

> {property} bool? [IsBuiltInErrorPageEnabled](#isbuiltinerrorpageenabled)

Defaults to TRUE. When disabled, blank page will be shown when related error happens.

#### CoreWebView2Settings 

Initializes a new instance of the CoreWebView2Settings class.

> public inline  [CoreWebView2Settings](#corewebview2settings)(Microsoft.Web.WebView2.Core.Raw.ICoreWebView2Settings rawCoreWebView2Settings)

