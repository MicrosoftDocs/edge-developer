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

# Reference \(WebView2\)  

The Microsoft Edge WebView2 control enables you to host web content in your application using [Microsoft Edge \(Chromium\)](https://www.microsoftedgeinsider.com) as the rendering engine.  See [WebView2](../webview2.md) for an overview and [Getting Started](GettingStarted.md) for a quick start.  [ICoreWebView2](reference/ICoreWebView2.md) is a great place to start learning the details of the API.  

## Globals  

*   [Globals](reference/webview2.idl.md)  

## Interfaces  
*   [ICoreWebView2](reference/ICoreWebView2.md)
*   [ICoreWebView2Deferral](reference/ICoreWebView2Deferral.md)
*   [ICoreWebView2DevToolsProtocolEventReceiver](reference/ICoreWebView2DevToolsProtocolEventReceiver.md)
*   [ICoreWebView2Environment](reference/ICoreWebView2Environment.md)
*   [ICoreWebView2Host](reference/ICoreWebView2Host.md)
*   [ICoreWebView2HttpHeadersCollectionIterator](reference/ICoreWebView2HttpHeadersCollectionIterator.md)
*   [ICoreWebView2HttpRequestHeaders](reference/ICoreWebView2HttpRequestHeaders.md)
*   [ICoreWebView2HttpResponseHeaders](reference/ICoreWebView2HttpResponseHeaders.md)
*   [ICoreWebView2Settings](reference/ICoreWebView2Settings.md)
*   [ICoreWebView2WebResourceRequest](reference/ICoreWebView2WebResourceRequest.md)
*   [ICoreWebView2WebResourceResponse](reference/ICoreWebView2WebResourceResponse.md)

### Event argument interfaces

*   [ICoreWebView2AcceleratorKeyPressedEventArgs](reference/ICoreWebView2AcceleratorKeyPressedEventArgs.md)
*   [ICoreWebView2ContentLoadingEventArgs](reference/ICoreWebView2ContentLoadingEventArgs.md)
*   [ICoreWebView2DevToolsProtocolEventReceivedEventArgs](reference/ICoreWebView2DevToolsProtocolEventReceivedEventArgs.md)
*   [ICoreWebView2MoveFocusRequestedEventArgs](reference/ICoreWebView2MoveFocusRequestedEventArgs.md)
*   [ICoreWebView2NavigationCompletedEventArgs](reference/ICoreWebView2NavigationCompletedEventArgs.md)
*   [ICoreWebView2NavigationStartingEventArgs](reference/ICoreWebView2NavigationStartingEventArgs.md)
*   [ICoreWebView2NewBrowserVersionAvailableEventArgs](reference/ICoreWebView2NewBrowserVersionAvailableEventArgs.md)
*   [ICoreWebView2NewWindowRequestedEventArgs](reference/ICoreWebView2NewWindowRequestedEventArgs.md)
*   [ICoreWebView2PermissionRequestedEventArgs](reference/ICoreWebView2PermissionRequestedEventArgs.md)
*   [ICoreWebView2ProcessFailedEventArgs](reference/ICoreWebView2ProcessFailedEventArgs.md)
*   [ICoreWebView2ScriptDialogOpeningEventArgs](reference/ICoreWebView2ScriptDialogOpeningEventArgs.md)
*   [ICoreWebView2SourceChangedEventArgs](reference/ICoreWebView2SourceChangedEventArgs.md)
*   [ICoreWebView2WebMessageReceivedEventArgs](reference/ICoreWebView2WebMessageReceivedEventArgs.md)
*   [ICoreWebView2WebResourceRequestedEventArgs](reference/ICoreWebView2WebResourceRequestedEventArgs.md)

### Delegate interfaces

*   [ICoreWebView2AcceleratorKeyPressedEventHandler](reference/ICoreWebView2AcceleratorKeyPressedEventHandler.md)
*   [ICoreWebView2AddScriptToExecuteOnDocumentCreatedCompletedHandler](reference/ICoreWebView2AddScriptToExecuteOnDocumentCreatedCompletedHandler.md)
*   [ICoreWebView2CallDevToolsProtocolMethodCompletedHandler](reference/ICoreWebView2CallDevToolsProtocolMethodCompletedHandler.md)
*   [ICoreWebView2CapturePreviewCompletedHandler](reference/ICoreWebView2CapturePreviewCompletedHandler.md)
*   [ICoreWebView2ContainsFullScreenElementChangedEventHandler](reference/ICoreWebView2ContainsFullScreenElementChangedEventHandler.md)
*   [ICoreWebView2ContentLoadingEventHandler](reference/ICoreWebView2ContentLoadingEventHandler.md)
*   [ICoreWebView2CreateCoreWebView2EnvironmentCompletedHandler](reference/ICoreWebView2CreateCoreWebView2EnvironmentCompletedHandler.md)
*   [ICoreWebView2CreateCoreWebView2HostCompletedHandler](reference/ICoreWebView2CreateCoreWebView2HostCompletedHandler.md)
*   [ICoreWebView2DevToolsProtocolEventReceivedEventHandler](reference/ICoreWebView2DevToolsProtocolEventReceivedEventHandler.md)
*   [ICoreWebView2DocumentTitleChangedEventHandler](reference/ICoreWebView2DocumentTitleChangedEventHandler.md)
*   [ICoreWebView2ExecuteScriptCompletedHandler](reference/ICoreWebView2ExecuteScriptCompletedHandler.md)
*   [ICoreWebView2FocusChangedEventHandler](reference/ICoreWebView2FocusChangedEventHandler.md)
*   [ICoreWebView2HistoryChangedEventHandler](reference/ICoreWebView2HistoryChangedEventHandler.md)
*   [ICoreWebView2MoveFocusRequestedEventHandler](reference/ICoreWebView2MoveFocusRequestedEventHandler.md)
*   [ICoreWebView2NavigationCompletedEventHandler](reference/ICoreWebView2NavigationCompletedEventHandler.md)
*   [ICoreWebView2NavigationStartingEventHandler](reference/ICoreWebView2NavigationStartingEventHandler.md)
*   [ICoreWebView2NewBrowserVersionAvailableEventHandler](reference/ICoreWebView2NewBrowserVersionAvailableEventHandler.md)
*   [ICoreWebView2NewWindowRequestedEventHandler](reference/ICoreWebView2NewWindowRequestedEventHandler.md)
*   [ICoreWebView2PermissionRequestedEventHandler](reference/ICoreWebView2PermissionRequestedEventHandler.md)
*   [ICoreWebView2ProcessFailedEventHandler](reference/ICoreWebView2ProcessFailedEventHandler.md)
*   [ICoreWebView2ScriptDialogOpeningEventHandler](reference/ICoreWebView2ScriptDialogOpeningEventHandler.md)
*   [ICoreWebView2SourceChangedEventHandler](reference/ICoreWebView2SourceChangedEventHandler.md)
*   [ICoreWebView2WebMessageReceivedEventHandler](reference/ICoreWebView2WebMessageReceivedEventHandler.md)
*   [ICoreWebView2WebResourceRequestedEventHandler](reference/ICoreWebView2WebResourceRequestedEventHandler.md)
*   [ICoreWebView2WindowCloseRequestedEventHandler](reference/ICoreWebView2WindowCloseRequestedEventHandler.md)
*   [ICoreWebView2ZoomFactorChangedEventHandler](reference/ICoreWebView2ZoomFactorChangedEventHandler.md)
