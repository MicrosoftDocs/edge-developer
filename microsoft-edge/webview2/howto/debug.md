---
description: Learn how to debug WebView2 controls.
title: Get started debugging WebView2 applications
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 08/13/2020
ms.topic: how-to
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# Get started debugging WebView2 applications  

The goal of the Microsoft Edge WebView2 control is to combine the best of both the web and native application development features and tools.  When you develop your WebView2 application, you should debug your application.  This article outlines the different tools to use to debug both your web and native code in your WebView2 application.  

## [Microsoft Edge DevTools](#tab/devtools)  

Use [Microsoft Edge (Chromium) Developer Tools][DevtoolsGuideChromiumMain] to debug web content displayed in WebView2 controls, in the same way that you may debug for another webpage displayed in Microsoft Edge.  To open the DevTools, set focus on the WebView control and then use one of the following actions.  

*   Select `F12`.  
*   Select `Ctrl`+`Shift`+`I`.  
*   Open the context menu \(right-click\) and choose `Inspect`.  

For more information, see [DevTools overview][DevtoolsGuideChromiumMain].  

:::image type="complex" source="./media/f12.png" alt-text="DevTools debugging" lightbox="./media/f12.png":::
   DevTools debugging  
:::image-end:::  

## [Visual Studio](#tab/visualstudio)  

Visual Studio provides various debugging tools for web and native code in WebView2 applications.  In the Visual Studio section, the primarily focus is debugging WebView controls, however the other methods of debugging in Visual Studio are available as usual.  Use the following process to debug web and native code in Win32 applications or Office add-ins only.  

> [!IMPORTANT]
> When you debug your application in Visual Studio with the native debugger attached, selecting `F12` may trigger the native debugger instead of Developer Tools.  Select `Ctrl`+`Shift`+`I`, or use the context menu \(right-click\) to avoid the situation.  

Before you begin, ensure the following requirements are met.  

*   To debug scripts, the app must be launched from within Visual Studio.  
*   You cannot attach a debugger to a running WebView2 process.  
*   Install Visual Studio 2019 version 16.4 Preview 2 or later.  

Install and set up the script debugger tools in Visual Studio.  

1.  Complete the following actions to install the **JavaScript diagnostics** component in **Desktop development with C++**.  

    1. In the Windows Explorer bar, type `Visual Studio Installer`.  
    1. Choose **Visual Studio Installer** to open it.  
    1. In the Visual Studio Installer, on the installed version, choose the **More** button, and then choose **Modify**.  
    1. In Visual Studio, under **Workloads**, choose the **Desktop Development in C++** setting.  
        
        :::image type="complex" source="./media/workloads.png" alt-text="Visual Studio Modifying Workloads Screen" lightbox="./media/workloads.png":::
            Visual Studio Modifying Workloads Screen
        :::image-end:::  
        
    1.  Choose **Individual components**.  
    1.  In the search box, enter `JavaScript diagnostics`.  
    1.  Choose the **JavaScript diagnostics** setting.  
    1.  Choose **Modify**. 
        
        :::image type="complex" source="./media/indivcomp.png" alt-text="Visual Studio Modifying Individual Components Tab" lightbox="./media/indivcomp.png":::
           Visual Studio Modifying Individual Components Tab  
        :::image-end:::  
        
1.  Enable script debugging for WebView2 applications.  
    1.  In your WebView2 project, open the context menu \(right-click\), and choose **Properties**.  
    1.  Under the **Configuration Properties**, choose **Debugging**.  
    1.  Under the **Debugger Type**, choose **JavaScript (WebView2)**.  
        
        :::image type="complex" source="./media/enbjs.png" alt-text="Visual Studio Debugging Configuration Property" lightbox="./media/enbjs.png":::
           Visual Studio **Debugging** Configuration Property  
        :::image-end:::  
        
Complete the following actions to debug your WebView2 application.  

1.  To set a breakpoint in your source code, hover to the left of the line number, and choose to set a breakpoint.  The JS/TS debug adapter does not perform source path mapping.  You must open the exact same path associated with your WebView2.  
    
    :::image type="complex" source="./media/breakpoint.png" alt-text="Visual Studio add breakpoint" lightbox="./media/breakpoint.png"::: 
       Visual Studio add breakpoint  
    :::image-end:::  
    
1.  To run the debugger, choose the bit size of the platform, and then choose the green play button next to **Local Windows Debugger**.  The application runs and the debugger connects to the first WebView2 process that is created.  
    
    :::image type="complex" source="./media/run.png" alt-text=" Visual Studio Local Windows Debugger" lightbox="./media/run.png"::: 
       Visual Studio **Local Windows Debugger**  
    :::image-end:::  
    
1.  In the **Debug Console**, find the output from the debugger.  
    
    :::image type="complex" source="./media/console.png" alt-text=" Visual Studio Debug Console" lightbox="./media/console.png"::: 
       Visual Studio **Debug Console**  
    :::image-end:::  
    
* * *  

## See also  

*   To get started using WebView2, see [WebView2 Getting Started Guides][Webview2MainGettingStarted].  
*   For a comprehensive example of WebView2 capabilities, see the [WebView2Samples][GithubMicrosoftedgeWebview2samples] repo on GitHub.
*   For more detailed information about WebView2 APIs, see [API reference][Webview2ApiReference].
*   For more information about WebView2, see [WebView2 Resources][Webview2MainNextSteps].

## Getting in touch with the Microsoft Edge WebView team  

[!INCLUDE [contact WebView team note](../includes/contact-webview-team-note.md)]  

<!-- links -->  

[DevtoolsGuideChromiumMain]: ../../devtools-guide-chromium.md "Microsoft Edge (Chromium) Developer Tools"  

[Webview2ReferenceDotnet09628MicrosoftWebWebview2CoreCorewebview2environmentoptionsAdditionalbrowserarguments]: ../reference/dotnet/0-9-628/microsoft-web-webview2-core-corewebview2environmentoptions.md#additionalbrowserarguments "AdditionalBrowserArguments - 0.9.515 - Microsoft.Web.WebView2.Core.CoreWebView2EnvironmentOptions class | Microsoft Docs"  
[Webview2ReferenceWin3209622Webview2IdlParameters]: ../reference/win32/0-9-622/webview2-idl.md#createcorewebview2environment  "CreateCoreWebView2Environment - Globals | Microsoft Docs"  
[Webview2ApiReference]: ../webview2-api-reference.md "Microsoft Edge WebView2 API Reference | Microsoft Docs"  
[Webview2MainNextSteps]: ../index.md#next-steps "Next steps - Introduction to Microsoft Edge WebView2 (Preview) | Microsoft Docs"  
[Webview2MainGettingStarted]: ../index.md#getting-started "Getting started - Introduction to Microsoft Edge WebView2 (Preview) | Microsoft Docs"  

[GithubMicrosoftedgeWebviewfeedbackMain]: https://github.com/MicrosoftEdge/WebViewFeedback "WebView Feedback - MicrosoftEdge/WebViewFeedback | GitHub"  
[GithubMicrosoftedgeWebview2samples]: https://github.com/MicrosoftEdge/WebView2Samples "WebView2 Samples - MicrosoftEdge/WebView2Samples | GitHub"  

[GithubMicrosoftVscodeJSDebugWhatsNew]: https://github.com/microsoft/vscode-js-debug#whats-new "What's new? - JavaScript debugger for Visual Studio Code - microsoft/vscode-js-debug | GitHub"  

[GithubMicrosoftVscodeEdgeDebug2ReadmeChromiumWebviewApplications]: https://github.com/microsoft/vscode-edge-debug2/blob/master/README.md#microsoft-edge-chromium-webview-applications "Microsoft Edge (Chromium) WebView applications - Visual Studio Code - Debugger for Microsoft Edge - microsoft/vscode-edge-debug2 | GitHub"  
