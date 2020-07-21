---
description: Learn how to debug WebView2 controls.
title: Debugging WebView2
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/22/2020
ms.topic: how-to
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# How to Debug with WebView2  	

The goal of the Microsoft Edge WebView2 control is combining the best of both the web and native application development features and developer tools.  The following page outlines the different tools to use when developing with WebView2 controls.  	

## Microsoft Edge DevTools  	

Use [Microsoft Edge (Chromium) Developer Tools][DevtoolsGuideChromiumMain] to debug web content displayed in WebView2 controls, in the same way that you use Microsoft Edge.  To open the DevTools, set focus on the WebView window and then use any of the following actions.  
*   Select `F12`.  
*   Select `Ctrl`+`Shift`+`I`.  
*   Open the context menu \(right-click\) > select `Inspect`.  

> [!IMPORTANT]	
> When you debug your application in Visual Studio with the native debugger attached, pressing `F12` may trigger the native debugger instead of Developer Tools.  Use `Ctrl`+`Shift`+`I`, or use the context menu \(right-click\) to avoid the situation.  	
## Visual Studio  	

> [!NOTE]
> When you debug your application in Visual Studio with the native debugger attached, pressing `F12` may trigger the native debugger instead of Developer Tools.  Press `Ctrl`+`Shift`+`I`, or use the context menu \(right-click\) to avoid the situation.  

> [!NOTE]
> You may use the `--auto-open-devtools-for-tabs` command-line argument to open a new DevTools window when you first create a WebView.  <!--See `CreateCoreWebView2Controller` documentation for how to provide additional command-line arguments to the browser process.  See `LoaderOverride` registry key to examine different builds of WebView2 without modifying your application in the `CreateCoreWebView2Controller` documentation.  -->  

Keep the following things in mind.  	

Use the script debugger in Visual Studio 2019 version 16.4 Preview 2 or later to debug your script in Visual Studio.  Verify the **JavaScript diagnostics** component in **Desktop development with C++** workload is installed.  

:::image type="complex" source="../media/vs-js-diagnostics.jpg" alt-text="Visual Studio JavaScript diagnostics":::
   Visual Studio JavaScript diagnostics  
:::image-end:::  

<!--todo: Please update the image to use a red rectangle to outline the portion of the screen to highlight  -->  

To enable WebView2 script debugging, open the context menu \(right-click\) on your project > select **Properties**.  

*   On **Configuration Properties**, select **Debugging**.  
*   On the **Debugger Type** property, select **JavaScript (WebView2)** from the list of options. 

:::image type="complex" source="../media/vs-script-debugger.jpg" alt-text="Visual Studio JavaScript Debugger":::
   Visual Studio JavaScript Debugger  
:::image-end:::  

<!--todo: Please update the image to use a red rectangle to outline the portion of the screen to highlight  -->  

*   Enable WebView2 script debugging.  	
    1.  Hover on your project, open the context menu \(right-click\), and select **Properties**.  	
    1.  On **Configuration Properties**, select **Debugging**.  	
    1.  On the **Debugger Type** property, search the the list of options, and select **JavaScript (WebView2)**.  	

        :::image type="complex" source="../media/enbjs.png" alt-text="Visual Studio JavaScript Debugger" lightbox="../media/enbjs.png":::	
           Visual Studio JavaScript Debugger  	
        :::image-end:::  	

<!--todo: Please update the image to use a red rectangle to outline the portion of the screen to highlight  -->  	

You may use Visual Studio Code to debug scripts that run in WebView2 controls.  For more information, see [Microsoft Edge (Chromium) WebView Applications][GithubMicrosoftVscodeEdgeDebug2ReadmeChromiumWebviewApplications].  

To Debug, complete the following actions.  	

1.  Set Breakpoints  	
    *   Open the script file and set the breakpoint where you want it.  	

Help build a richer WebView2 experience by sharing your feedback.  Visit the [feedback repo][GithubMicrosoftedgeWebviewfeedbackMain] to submit feature requests or bug reports.  

<!--## Debugging  

Open DevTools with the normal shortcuts: `F12` or `Ctrl+Shift+I`. You can use the `--auto-open-devtools-for-tabs` command argument switch to have the DevTools window open immediately when first creating a WebView. See CreateCoreWebView2Controller documentation for how to provide additional command line arguments to the browser process. Check out the LoaderOverride registry key for trying out different builds of WebView2 without modifying your application in the CreateCoreWebView2Controller documentation.  -->  

<!--todo:  add See also heading  -->  	

[DevtoolsGuideChromiumMain]: ../../devtools-guide-chromium.md "Microsoft Edge (Chromium) Developer Tools"  

[GithubMicrosoftedgeWebviewfeedbackMain]: https://github.com/MicrosoftEdge/WebViewFeedback "WebView Feedback - MicrosoftEdge/WebViewFeedback | GitHub"  

[GithubMicrosoftVscodeEdgeDebug2ReadmeChromiumWebviewApplications]: https://github.com/microsoft/vscode-edge-debug2/blob/master/README.md#microsoft-edge-chromium-webview-applications "Microsoft Edge (Chromium) WebView applications - VS Code - Debugger for Microsoft Edge - microsoft/vscode-edge-debug2 | GitHub"  
