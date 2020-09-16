---
description: Embed web technologies (HTML, CSS, and JavaScript) in your native applications with the Microsoft Edge WebView2 control
title: Microsoft.Web.WebView2.Core.CoreWebView2Settings
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/10/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: Microsoft.Web.WebView2, Core, webview2, webview, dotnet, wpf, winforms, app, edge, CoreWebView2, CoreWebView2Controller, browser control, edge html, Microsoft.Web.WebView2.Core.CoreWebView2Settings
---

# Microsoft.Web.WebView2.Core.CoreWebView2Settings class 

Namespace: Microsoft.Web.WebView2.Core\
Assembly: Microsoft.Web.WebView2.Core.dll

Defines properties that enable, disable, or modify WebView features.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[AreDefaultContextMenusEnabled](#aredefaultcontextmenusenabled) | The AreDefaultContextMenusEnabled property is used to prevent default context menus from being shown to user in WebView.
[AreDefaultScriptDialogsEnabled](#aredefaultscriptdialogsenabled) | AreDefaultScriptDialogsEnabled is used when loading a new HTML document.
[AreDevToolsEnabled](#aredevtoolsenabled) | AreDevToolsEnabled controls whether the user is able to use the context menu or keyboard shortcuts to open the DevTools window.
[AreHostObjectsAllowed](#arehostobjectsallowed) | The AreHostObjectsAllowed property is used to control whether host objects are accessible from the page in WebView.
[IsBuiltInErrorPageEnabled](#isbuiltinerrorpageenabled) | The IsBuiltInErrorPageEnabled property is used to disable built in error page for navigation failure and render process failure.
[IsScriptEnabled](#isscriptenabled) | Controls if JavaScript execution is enabled in all future navigations in the WebView.
[IsStatusBarEnabled](#isstatusbarenabled) | IsStatusBarEnabled controls whether the status bar will be displayed.
[IsWebMessageEnabled](#iswebmessageenabled) | The IsWebMessageEnabled property is used when loading a new HTML document.
[IsZoomControlEnabled](#iszoomcontrolenabled) | The IsZoomControlEnabled property is used to prevent the user from impacting the zoom of the WebView.

Setting changes made after NavigationStarting event will not apply until the next top level navigation.

## Members

#### AreDefaultContextMenusEnabled 

The AreDefaultContextMenusEnabled property is used to prevent default context menus from being shown to user in WebView.

> public bool [AreDefaultContextMenusEnabled](#aredefaultcontextmenusenabled)

It is true by default.

#### AreDefaultScriptDialogsEnabled 

AreDefaultScriptDialogsEnabled is used when loading a new HTML document.

> public bool [AreDefaultScriptDialogsEnabled](#aredefaultscriptdialogsenabled)

If set to false, then WebView won't render the default JavaScript dialog box (Specifically those shown by the JavaScript alert, confirm, prompt functions and beforeunload event). If set to true, one can also subscribe to ScriptDialogOpening event that will contain all of the information for the dialog and allow the host app to show its own custom UI. It is true by default.

#### AreDevToolsEnabled 

AreDevToolsEnabled controls whether the user is able to use the context menu or keyboard shortcuts to open the DevTools window.

> public bool [AreDevToolsEnabled](#aredevtoolsenabled)

It is true by default.

#### AreHostObjectsAllowed 

The AreHostObjectsAllowed property is used to control whether host objects are accessible from the page in WebView.

> public bool [AreHostObjectsAllowed](#arehostobjectsallowed)

It is true by default.

#### IsBuiltInErrorPageEnabled 

The IsBuiltInErrorPageEnabled property is used to disable built in error page for navigation failure and render process failure.

> public bool [IsBuiltInErrorPageEnabled](#isbuiltinerrorpageenabled)

It is true by default. When disabled, blank page will be shown when related error happens.

#### IsScriptEnabled 

Controls if JavaScript execution is enabled in all future navigations in the WebView.

> public bool [IsScriptEnabled](#isscriptenabled)

This only affects scripts in the document; scripts injected with ExecuteScript will run even if script is disabled. It is true by default.

#### IsStatusBarEnabled 

IsStatusBarEnabled controls whether the status bar will be displayed.

> public bool [IsStatusBarEnabled](#isstatusbarenabled)

The status bar is usually displayed in the lower left of the WebView and shows things such as the URI of a link when the user hovers over it and other information. It is true by default.

#### IsWebMessageEnabled 

The IsWebMessageEnabled property is used when loading a new HTML document.

> public bool [IsWebMessageEnabled](#iswebmessageenabled)

If set to true, communication from the host to the WebView's top level HTML document is allowed via PostWebMessageAsJson, PostWebMessageAsString, and window.chrome.webview's message event (see PostWebMessageAsJson documentation for details). Communication from the WebView's top level HTML document to the host is allowed via window.chrome.webview's postMessage function and the WebMessageReceived event (see WebMessageReceived documentation for details). If set to false, then communication is disallowed. PostWebMessageAsJson and PostWebMessageAsString will fail with E_ACCESSDENIED and window.chrome.webview.postMessage will fail by throwing an instance of an Error object. It is true by default.

#### IsZoomControlEnabled 

The IsZoomControlEnabled property is used to prevent the user from impacting the zoom of the WebView.

> public bool [IsZoomControlEnabled](#iszoomcontrolenabled)

It is true by default. When disabled, user will not be able to zoom using ctrl+/- or ctrl+mouse wheel, but the zoom can be set via ZoomFactor API.

