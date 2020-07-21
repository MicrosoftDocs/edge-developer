---
description: Embed web technologies (HTML, CSS, and JavaScript) in your native applications with the Microsoft Edge WebView2 control
title: Microsoft.Web.WebView2.Core.CoreWebView2Deferral
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/08/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: Microsoft.Web.WebView2, Core, webview2, webview, dotnet, wpf, winforms, app, edge, CoreWebView2, CoreWebView2Controller, browser control, edge html, Microsoft.Web.WebView2.Core.CoreWebView2Deferral
---

# Microsoft.Web.WebView2.Core.CoreWebView2Deferral class 

Namespace: Microsoft.Web.WebView2.Core\
Assembly: Microsoft.Web.WebView2.Core.dll

This class is used to complete deferrals on event args that support getting deferrals via their GetDeferral method.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[Complete](#complete) | Completes the associated deferred event.

## Members

#### Complete 

Completes the associated deferred event.

> public void [Complete](#complete)()

Complete should only be called once for each deferral taken.

