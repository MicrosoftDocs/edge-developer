---
description: Learn how to debug WebView2 controls.
title: Debugging WebView2
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/19/2020
ms.topic: how-to
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# How to Debug when developing with WebView2 controls  

The goal of the Microsoft Edge WebView2 control is combining the best of both the web and native application development features and developer tools.  This article outlines the different tools to use when developing with WebView2 controls.  

## Microsoft Edge DevTools  

Use [Microsoft Edge (Chromium) Developer Tools](/microsoft-edge/devtools-guide-chromium) to debug web content displayed in WebView2 controls, in the same way that you would if you were using Microsoft Edge.  To open the DevTools, set focus on the WebView window and then use any of the following options.  
*   Select `F12`.  
*   Select `Ctrl`+`Shift`+`I`.  
*   Open the context menu \(right-click\) > select `Inspect`.  

:::image type="complex" source="../media/f12.png" alt-text="F12":::
   F12  
:::image-end:::  

> [!NOTE]
> When you debug your application in Visual Studio with the native debugger attached, selecting `F12` may trigger the native debugger instead of Developer Tools.  Use `Ctrl`+`Shift`+`I`, or use the context menu \(right-click\) to avoid this situation.  

## Visual Studio  

Use the script debugger in Visual Studio 2019 version 16.4 Preview 2 or later to debug your script within WebView2 from inside the IDE.  Make sure the **JavaScript diagnostics** component in **Desktop development with C++** workload is installed.  

:::image type="complex" source="../media/vs-js-diagnostics.jpg" alt-text="Visual Studio JavaScript diagnostics":::
   Visual Studio JavaScript diagnostics  
:::image-end:::  

<!--todo: Please update the image to use a red rectangle to outline the portion of the screen to highlight  -->  

To enable WebView2 script debugging, open the context menu \(right-click\) on your project > select **Properties**.  On **Configuration Properties**, select **Debugging**.  On the **Debugger Type** property, choose **JavaScript (WebView2)** from the list of options. 

:::image type="complex" source="../media/vs-script-debugger.jpg" alt-text="Visual Studio JavaScript Debugger":::
   Visual Studio JavaScript Debugger  
:::image-end:::  

<!--todo: Please update the image to use a red rectangle to outline the portion of the screen to highlight  -->  

## Visual Studio Code  

You may use Visual Studio Code to debug scripts that run in WebView2 controls.  For more information, see [Microsoft Edge (Chromium) WebView Applications](https://github.com/microsoft/vscode-edge-debug2/blob/master/README.md#microsoft-edge-chromium-webview-applications).  

<!--todo:  add See also heading  -->  

## Getting in touch with the Microsoft Edge WebView team  

Help build a richer WebView2 experience by sharing your feedback.  Visit the [feedback repo](https://aka.ms/webviewfeedback) to submit feature requests or bug reports.  
