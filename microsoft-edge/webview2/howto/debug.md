---
description: Learn how to debug WebView2 controls.
title: Debugging WebView2
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/20/2020
ms.topic: how-to
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# How to Debug with WebView2  

The goal of the Microsoft Edge WebView2 control is combining the best of both the web and native application development features and developer tools.  The following page outlines the different tools to use when developing with WebView2 controls.  

## Microsoft Edge DevTools  

Use [Microsoft Edge (Chromium) Developer Tools][DevtoolsMain] to debug web content displayed in WebView2 controls, in the same way that you would if you were using Microsoft Edge.  To open the DevTools, set focus on the WebView window and then use any of the following actions.  

*   Select `F12`.  
*   Select `Ctrl`+`Shift`+`I`.  
*   Open the context menu \(right-click\) and select `Inspect`.  

:::image type="complex" source="../media/f12.png" alt-text="Microsoft Edge DevTools" lightbox="../media/f12.png":::
   Microsoft Edge DevTools  
:::image-end:::  

> [!IMPORTANT]
> When you debug your application in Visual Studio with the native debugger attached, selecting `F12` may trigger the native debugger instead of Developer Tools.  Use `Ctrl`+`Shift`+`I`, or use the context menu \(right-click\) to avoid the situation.  

## Visual Studio  

You may use Visual Studio to develop application code and debug scripts at the same time.  

Keep the following things in mind.  

*   Visual Studio only supports debugging scripts when the app is launched from within Visual Studio.  \(Attaching a running process for debugging is not supported.\)  
*   The targeted WebView debugging scenario is not supported.  

Use the script debugger in Visual Studio 2019 version 16.4 Preview 2 or later to debug your script in Visual Studio.  

Set up the debugger.  

*   Verify the **JavaScript diagnostics** component in **Desktop development with C++** workload is installed.  
    
    1.  Navigate to **Apps & features** settings in Windows.  Search for it using the Windows task bar.  
    1.  Choose **Modify**.  
    1.  Verify the **Javascript diagnostics** and **Desktop Development in C++** checkboxes are selected.  
        
        :::image type="complex" source="../media/appsandfeatures.png" alt-text="Apps & Features" lightbox="../media/appsandfeatures.png":::
           Apps & Features  
        :::image-end:::  
        
*   Enable WebView2 script debugging.  
    1.  Hover on your project, open the context menu \(right-click\), and select **Properties**.  
    1.  On **Configuration Properties**, select **Debugging**.  
    1.  On the **Debugger Type** property, search the the list of options, and select **JavaScript (WebView2)**.  
        
        :::image type="complex" source="../media/enbjs.png" alt-text="Visual Studio JavaScript Debugger" lightbox="../media/enbjs.png":::
           Visual Studio JavaScript Debugger  
        :::image-end:::  
        
<!--todo: Please update the image to use a red rectangle to outline the portion of the screen to highlight  -->  

You are all set up and ready to debug.  

To Debug, complete the following actions.  

1.  Set Breakpoints  
    *   Open the script file and set the breakpoint where you want it.  
        
        > [!NOTE]
        > The JS/TS debug adapter does not do source path mapping.  You must open the exact same path associated with your WebView2.  
        
1.  Run Code  
    *   Select your appropriate build flavor and runtime environment and then start the local windows debugger.  
1.  View Debug Console  
    *   You application runs and the debugger connects after the first webview2 is created.  Any pending debug output is displayed.  
        
        > [!NOTE]
        > This method of debugging is currently restricted to Win32 applications and Office add-ins.  
        
## Visual Studio Code  

You may use Visual Studio Code to debug scripts that run in WebView2 controls.  For more information, see [Microsoft Edge (Chromium) WebView Applications][GithubMicrosoftVscodeEdgeDebug2MainChromiumWebviewApplications].  

<!--todo:  add See also heading  -->  

## Getting in touch with the Microsoft Edge WebView team  

Help build a richer WebView2 experience by sharing your feedback.  Visit the [feedback repo][GithubMicrosoftedgeWebviewfeedback] to submit feature requests or bug reports.  

<!-- links -->  

[DevtoolsMain]: /microsoft-edge/devtools-guide-chromium "Microsoft Edge (Chromium) Developer Tools | Microsoft Docs"  

[GithubMicrosoftVscodeEdgeDebug2MainChromiumWebviewApplications]: https://github.com/microsoft/vscode-edge-debug2/blob/master/README.md#microsoft-edge-chromium-webview-applications "Microsoft Edge (Chromium) WebView applications - VS Code - Debugger for Microsoft Edge | GitHub"  

[GithubMicrosoftedgeWebviewfeedback]: https://github.com/MicrosoftEdge/WebViewFeedback "WebView Feedback - MicrosoftEdge/WebViewFeedback | GitHub"  
