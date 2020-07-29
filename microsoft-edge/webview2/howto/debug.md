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

You are ready to debug! Now you may:

1.  Set Breakpoints  
    *   Open the file you are trying to debug and set a breakpoint by clicking left on the line number.  
        
        :::image type="complex" source="./media/breakpoint.png" alt-text="Visual Studio Code Adding Breakpoints" lightbox="/media/breakpoint.png":::
           Visual Studio Adding Breakpoints  
        :::image-end::: 

        > [!NOTE]
        > The JS/TS debug adapter does not do source path mapping.  You must open the exact same path associated with your WebView2.  
        
1.  Run Code  
    *   Select the appropriate build flavor and runtime environment and then run the local windows debugger by clicking the green play button.

        :::image type="complex" source="./media/run.png" alt-text=" Visual Studio Code Run" lightbox="/media/run.png":::
            Visual Studio Code Run  
        :::image-end:::   
1.  View Debug Console  
    *   The application will run and the debugger will connect after the first webview2 is created.  Any pending debug output will be displayed.  

                :::image type="complex" source="./media/console.png" alt-text=" Visual Studio Code Debug Output" lightbox="/media/console.png":::
            Visual Studio Code Debug Output  
        :::image-end:::


        
## Visual Studio Code  

You may use Visual Studio Code to debug scripts that run in WebView2 controls.  For more information, see [Microsoft Edge (Chromium) WebView Applications][GithubMicrosoftVscodeEdgeDebug2ReadmeChromiumWebviewApplications].  


There are 5 basic steps for debugging within VSCode:

1. **Install the debug adapter**
    1. Navigate to VSCode's Extensions
    1. Search for JavaScript Debugger (shown in screenshot)
    1. Install any version of the adapter later than 2020.6.208
    
        :::image type="complex" source="./media/jsdebugger.png" alt-text=" Visual Studio Code Debug Output" lightbox="/media/jsdebugger.png":::
            Visual Studio Code Debug Output  
        :::image-end:::
    1. Navigate to VSCode's Settings Tab > Extensions > JavaScript Debugger
    1. Ensure the "Use the new in-preview JavaScript debugger for Node.js and Chrome." box is checked.
    
        :::image type="complex" source="./media/previewbox.png" alt-text=" Visual Studio Code Debug Output" lightbox="/media/previewbox.png":::
        Visual Studio Code Debug Output  
        :::image-end:::

1. **Configure the debug adapter**
    1. Select the Run tab on the left side of VS Code.
    
        :::image type="complex" source="./media/runbutton.png" alt-text=" Visual Studio Code Debug Output" lightbox="/media/runbutton.png":::
        Visual Studio Code Debug Output  
        :::image-end:::

    1. Within the dropdown menu select a project to run
    
        :::image type="complex" source="./media/scenario.png" alt-text=" Visual Studio Code Debug Output" lightbox="/media/scenario.png":::
        Visual Studio Code Debug Output  
        :::image-end:::

    1. Ensure you have a VSCode Launch.json file. If not create a Launch.json file with the following metadata: (This step is required to debug a WebView Control)
    
        ```csharp
        {
            "name": "Scenario 1: Script debugging (first) (old adapter)",  
            "type": "pwa-msedge”   
            "port": 9222, // Optional defaults to 9222  
            "request": "launch", // optionally “attach”  
            "runtimeExecutable": "E:/YourPath/YourApplication.exe",  
            "env": {  
                    // customize for your build location if needed  
                    "Path": "%path%;e:/YourNeededPath; "  
            }  
            "useWebView": true, // optionally “advanced”  
            //"urlFilter": "*DebugTrigger", // Only used when useWebView == “Advanced”  
        } 
        ```  

1. **Set breakpoints**
    1. Open the file you want to debug in VSCode.  And then set the breakpoint (select the line and press F9, or click the breakpoint column in the editor).  

        :::image type="complex" source="./media/breakpointvs.png" alt-text=" Visual Studio Code Debug Output" lightbox="/media/breakpointvs.png":::
        Visual Studio Code Debug Output  
        :::image-end:::

    > [!NOTE]
        >  VSCode does not do source mapping you so MUST ensure you have opened and set breakpoints in the same file path as the WebView will be using.  If the paths are not exact VSCode can’t resolve the breakpoint. 
1. **Run code**
    1. Select the launch configuration from the dropdown menu.
    1. Start debugging by clicking the green run button.        

        :::image type="complex" source="./media/runvs.png" alt-text=" Visual Studio Code Debug Output" lightbox="/media/runvs.png":::
        Visual Studio Code Debug Output  
        :::image-end:::

1. **View Results**

        :::image type="complex" source="./media/resultsvs.png" alt-text=" Visual Studio Code Debug Output" lightbox="/media/resultsvs.png":::
        Visual Studio Code Debug Output  
        :::image-end:::

For a list of other JavaScript Debugging features in Visual Studio Code, visit [this](https://github.com/microsoft/vscode-js-debug/#whats-new)

<!--todo:  add See also heading  -->  

1.  Set Breakpoints  	
    *   Open the script file and set the breakpoint where you want it.  	

Help build a richer WebView2 experience by sharing your feedback.  Visit the [feedback repo][GithubMicrosoftedgeWebviewfeedbackMain] to submit feature requests or bug reports.  

<!--## Debugging  

Open DevTools with the normal shortcuts: `F12` or `Ctrl+Shift+I`. You can use the `--auto-open-devtools-for-tabs` command argument switch to have the DevTools window open immediately when first creating a WebView. See CreateCoreWebView2Controller documentation for how to provide additional command line arguments to the browser process. Check out the LoaderOverride registry key for trying out different builds of WebView2 without modifying your application in the CreateCoreWebView2Controller documentation.  -->  

<!--todo:  add See also heading  -->  	

[DevtoolsGuideChromiumMain]: ../../devtools-guide-chromium.md "Microsoft Edge (Chromium) Developer Tools"  

[GithubMicrosoftedgeWebviewfeedbackMain]: https://github.com/MicrosoftEdge/WebViewFeedback "WebView Feedback - MicrosoftEdge/WebViewFeedback | GitHub"  

[GithubMicrosoftVscodeEdgeDebug2ReadmeChromiumWebviewApplications]: https://github.com/microsoft/vscode-edge-debug2/blob/master/README.md#microsoft-edge-chromium-webview-applications "Microsoft Edge (Chromium) WebView applications - VS Code - Debugger for Microsoft Edge - microsoft/vscode-edge-debug2 | GitHub"  
