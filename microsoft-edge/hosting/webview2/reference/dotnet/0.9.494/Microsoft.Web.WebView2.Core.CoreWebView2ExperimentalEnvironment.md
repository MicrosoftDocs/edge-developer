---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/28/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---

# Microsoft.Web.WebView2.Core.CoreWebView2ExperimentalEnvironment class 

> [!NOTE]
> This an experimental API that is shipped with our prerelease SDK version 0.9.494.

Namespace: Microsoft.Web.WebView2.Core
Assembly: Microsoft.Web.WebView2.Core.dll

This class is an extension of the CoreWebView2Environment.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[CreateCoreWebView2CompositionControllerAsync](#createcorewebview2compositioncontrollerasync) | Asynchronously create a new WebView for use with visual hosting.
[CreateCoreWebView2PointerInfo](#createcorewebview2pointerinfo) | Create an empty CoreWebView2ExperimentalPointerInfo.
[GetProviderForHwnd](#getproviderforhwnd) | Returns the UI Automation Provider for the CoreWebView2CompositionController that corresponds with the given HWND.

## Members

### Properties

#### CreateCoreWebView2CompositionControllerAsync 

Asynchronously create a new WebView for use with visual hosting.

> public async Task< CoreWebView2ExperimentalCompositionController > [CreateCoreWebView2CompositionControllerAsync](#createcorewebview2compositioncontrollerasync)(IntPtr ParentWindow)

parentWindow is the HWND in which the app will connect the visual tree of the WebView. This will be the HWND that the app will receive pointer/ mouse input meant for the WebView (and will need to use SendMouseInput/ SendPointerInput to forward). If the app moves the WebView visual tree to underneath a different window, then it needs to set CoreWebView2CompositionController.ParentWindow to update the new parent HWND of the visual tree.

Set RootVisualTarget property on the created CoreWebView2CompositionController to provide a visual to host the browser's visual tree.

It is recommended that the application set Application User Model ID for the process or the application window. If none is set, during WebView creation a generated Application User Model ID is set to root window of parentWindow.

#### CreateCoreWebView2PointerInfo 

Create an empty CoreWebView2ExperimentalPointerInfo.

> public CoreWebView2ExperimentalPointerInfo [CreateCoreWebView2PointerInfo](#createcorewebview2pointerinfo)()

The returned CoreWebView2ExperimentalPointerInfo needs to be populated with all of the relevant info before calling SendPointerInput.

#### GetProviderForHwnd 

Returns the UI Automation Provider for the CoreWebView2CompositionController that corresponds with the given HWND.

> public object [GetProviderForHwnd](#getproviderforhwnd)(IntPtr hwnd)

