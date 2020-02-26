---
description: Host web content in your Win32 app with the Microsoft Edge WebView 2 control
title: Microsoft Edge WebView 2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 02/20/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# 0.8.355 - Reference \(WebView2\)  

> [!NOTE]
> This reference may be altered or unavailable for releases after SDK version 0.8.355. Please refer to [Reference (WebView2)](../../reference-webview2.md) for the latest API reference.

The Microsoft Edge WebView2 control enables you to host web content in your application using [Microsoft Edge \(Chromium\)](https://www.microsoftedgeinsider.com) as the rendering engine.  See [WebView2](../../../webview2.md) for an overview and [Getting Started](../../GettingStarted.md) for a quick start.  [IWebView2WebView](0.8.355/IWebView2WebView.md) is a great place to start learning the details of the API.  

## Globals  

*   [Globals](0.8.355/webview2.idl.md)  

## Interfaces  
*   [IWebView2Deferral](0.8.355/IWebView2Deferral.md)
*   [IWebView2Environment](0.8.355/IWebView2Environment.md)
*   [IWebView2Environment2](0.8.355/IWebView2Environment2.md)
*   [IWebView2Environment3](0.8.355/IWebView2Environment3.md)
*   [IWebView2HttpHeadersCollectionIterator](0.8.355/IWebView2HttpHeadersCollectionIterator.md)
*   [IWebView2HttpRequestHeaders](0.8.355/IWebView2HttpRequestHeaders.md)
*   [IWebView2HttpResponseHeaders](0.8.355/IWebView2HttpResponseHeaders.md)
*   [IWebView2Settings](0.8.355/IWebView2Settings.md)
*   [IWebView2Settings2](0.8.355/IWebView2Settings2.md)
*   [IWebView2WebResourceRequest](0.8.355/IWebView2WebResourceRequest.md)
*   [IWebView2WebResourceRequestedEventArgs2](0.8.355/IWebView2WebResourceRequestedEventArgs2.md)
*   [IWebView2WebResourceResponse](0.8.355/IWebView2WebResourceResponse.md)
*   [IWebView2WebView](0.8.355/IWebView2WebView.md)
*   [IWebView2WebView2](0.8.355/IWebView2WebView2.md)
*   [IWebView2WebView3](0.8.355/IWebView2WebView3.md)
*   [IWebView2WebView4](0.8.355/IWebView2WebView4.md)
*   [IWebView2WebView5](0.8.355/IWebView2WebView5.md)

### Event argument interfaces

*   [IWebView2AcceleratorKeyPressedEventArgs](0.8.355/IWebView2AcceleratorKeyPressedEventArgs.md)
*   [IWebView2DevToolsProtocolEventReceivedEventArgs](0.8.355/IWebView2DevToolsProtocolEventReceivedEventArgs.md)
*   [IWebView2DocumentStateChangedEventArgs](0.8.355/IWebView2DocumentStateChangedEventArgs.md)
*   [IWebView2MoveFocusRequestedEventArgs](0.8.355/IWebView2MoveFocusRequestedEventArgs.md)
*   [IWebView2NavigationCompletedEventArgs](0.8.355/IWebView2NavigationCompletedEventArgs.md)
*   [IWebView2NavigationStartingEventArgs](0.8.355/IWebView2NavigationStartingEventArgs.md)
*   [IWebView2NewVersionAvailableEventArgs](0.8.355/IWebView2NewVersionAvailableEventArgs.md)
*   [IWebView2NewWindowRequestedEventArgs](0.8.355/IWebView2NewWindowRequestedEventArgs.md)
*   [IWebView2PermissionRequestedEventArgs](0.8.355/IWebView2PermissionRequestedEventArgs.md)
*   [IWebView2ProcessFailedEventArgs](0.8.355/IWebView2ProcessFailedEventArgs.md)
*   [IWebView2ScriptDialogOpeningEventArgs](0.8.355/IWebView2ScriptDialogOpeningEventArgs.md)
*   [IWebView2WebMessageReceivedEventArgs](0.8.355/IWebView2WebMessageReceivedEventArgs.md)
*   [IWebView2WebResourceRequestedEventArgs](0.8.355/IWebView2WebResourceRequestedEventArgs.md)

### Delegate interfaces

*   [IWebView2AcceleratorKeyPressedEventHandler](0.8.355/IWebView2AcceleratorKeyPressedEventHandler.md)
*   [IWebView2AddScriptToExecuteOnDocumentCreatedCompletedHandler](0.8.355/IWebView2AddScriptToExecuteOnDocumentCreatedCompletedHandler.md)
*   [IWebView2CallDevToolsProtocolMethodCompletedHandler](0.8.355/IWebView2CallDevToolsProtocolMethodCompletedHandler.md)
*   [IWebView2CapturePreviewCompletedHandler](0.8.355/IWebView2CapturePreviewCompletedHandler.md)
*   [IWebView2ContainsFullScreenElementChangedEventHandler](0.8.355/IWebView2ContainsFullScreenElementChangedEventHandler.md)
*   [IWebView2CreateWebView2EnvironmentCompletedHandler](0.8.355/IWebView2CreateWebView2EnvironmentCompletedHandler.md)
*   [IWebView2CreateWebViewCompletedHandler](0.8.355/IWebView2CreateWebViewCompletedHandler.md)
*   [IWebView2DevToolsProtocolEventReceivedEventHandler](0.8.355/IWebView2DevToolsProtocolEventReceivedEventHandler.md)
*   [IWebView2DocumentStateChangedEventHandler](0.8.355/IWebView2DocumentStateChangedEventHandler.md)
*   [IWebView2DocumentTitleChangedEventHandler](0.8.355/IWebView2DocumentTitleChangedEventHandler.md)
*   [IWebView2ExecuteScriptCompletedHandler](0.8.355/IWebView2ExecuteScriptCompletedHandler.md)
*   [IWebView2FocusChangedEventHandler](0.8.355/IWebView2FocusChangedEventHandler.md)
*   [IWebView2MoveFocusRequestedEventHandler](0.8.355/IWebView2MoveFocusRequestedEventHandler.md)
*   [IWebView2NavigationCompletedEventHandler](0.8.355/IWebView2NavigationCompletedEventHandler.md)
*   [IWebView2NavigationStartingEventHandler](0.8.355/IWebView2NavigationStartingEventHandler.md)
*   [IWebView2NewVersionAvailableEventHandler](0.8.355/IWebView2NewVersionAvailableEventHandler.md)
*   [IWebView2NewWindowRequestedEventHandler](0.8.355/IWebView2NewWindowRequestedEventHandler.md)
*   [IWebView2PermissionRequestedEventHandler](0.8.355/IWebView2PermissionRequestedEventHandler.md)
*   [IWebView2ProcessFailedEventHandler](0.8.355/IWebView2ProcessFailedEventHandler.md)
*   [IWebView2ScriptDialogOpeningEventHandler](0.8.355/IWebView2ScriptDialogOpeningEventHandler.md)
*   [IWebView2WebMessageReceivedEventHandler](0.8.355/IWebView2WebMessageReceivedEventHandler.md)
*   [IWebView2WebResourceRequestedEventHandler](0.8.355/IWebView2WebResourceRequestedEventHandler.md)
*   [IWebView2ZoomFactorChangedEventHandler](0.8.355/IWebView2ZoomFactorChangedEventHandler.md)
