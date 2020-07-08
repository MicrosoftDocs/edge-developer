---
description: Learn how to debug WebView2 controls.
title: Debugging WebView2
author: MSEdgeTeam
ms.author: msedgedevrel, jasteph
ms.date: 05/19/2020
ms.topic: how-to
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# How to Debug with WebView2  

The goal of the Microsoft Edge WebView2 control is combining the best of both the web and native application development features and developer tools.  This article outlines the different tools to use when developing with WebView2 controls.  

## Microsoft Edge DevTools  

Use [Microsoft Edge (Chromium) Developer Tools](/microsoft-edge/devtools-guide-chromium) to debug web content displayed in WebView2 controls, in the same way that you would if you were using Microsoft Edge.  To open the DevTools, set focus on the WebView window and then use any of the following options.  
*   Select `F12`. (Except Visual Studio)  
*   Select `Ctrl`+`Shift`+`I`.  
*   Open the context menu \(right-click\) > select `Inspect`.  

:::image type="complex" source="../media/f12.png" alt-text="Microsoft Edge DevTools":::
   Microsoft Edge DevTools  
:::image-end:::  

> [!NOTE]
> When you debug your application in Visual Studio with the native debugger attached, selecting `F12` may trigger the native debugger instead of Developer Tools.  Use `Ctrl`+`Shift`+`I`, or use the context menu \(right-click\) to avoid this situation.  

## Visual Studio  

Visual Studio can be used to develop application code and debug scripts at the same time. 

A couple things to remember:
* Visual Studio only supports debugging scripts when the app is launched from within VS. (There is no support for attaching a running process for debugging.)
* There is no support for the targeted WebView debugging scenario.

Use the script debugger in Visual Studio 2019 version 16.4 Preview 2 or later to debug your script in Visual Studio. 

Let's setup the debugger:

* Verify the **JavaScript diagnostics** component in **Desktop development with C++** workload is installed.
    
    1. Navigate to your PC's "Apps & Features" settings. You can do so by searching for it in the Windows task bar. 
    2. Choose **Modify**.
    3. Ensure "Javascript diagnostics" and "Desktop Development in C++" boxes are checked.
    
:::image type="complex" source="../media/appsandfeatures.png" alt-text="Apps&Features":::
   Apps&Features
:::image-end::: 
 
* Enable WebView2 script debugging.
    1. Open the context menu \(right-click\) on your project > select **Properties**.  
    1. On **Configuration Properties**, select **Debugging**.  
    1. On the **Debugger Type** property, choose **JavaScript (WebView2)** from the list of options. 

:::image type="complex" source="../media/enbjs.png" alt-text="Visual Studio JavaScript Debugger":::
   Visual Studio JavaScript Debugger  
:::image-end:::  

<!--todo: Please update the image to use a red rectangle to outline the portion of the screen to highlight  -->  

You are all set up and ready to debug!

To Debug:
1. Set Breakpoints
   * Open the script file and set the breakpoint where you want it.  Note the JS/TS debug adapter does not do source path mapping.  You MUST open the exact same path as what the WebView2 will be using.  
1. Run Code
   - Select your appropriate build flavor and runtime environment and then start the local windows debugger  

3. View Debug Console
    * At this point the application will run and on creation of the first webview2 the debugger will connect.  Any pending debug spew will be displayed.  
> [!NOTE]
> This method of debugging is currently restrictred to Win32 applications and Office add-ins.
## Visual Studio Code  

You may use Visual Studio Code to debug scripts that run in WebView2 controls.  For more information, see [Microsoft Edge (Chromium) WebView Applications](https://github.com/microsoft/vscode-edge-debug2/blob/master/README.md#microsoft-edge-chromium-webview-applications).  

<!--todo:  add See also heading  -->  

## Getting in touch with the Microsoft Edge WebView team  

Help build a richer WebView2 experience by sharing your feedback.  Visit the [feedback repo](https://aka.ms/webviewfeedback) to submit feature requests or bug reports.  
