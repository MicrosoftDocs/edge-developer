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


# Debugging a WebView2 Control  	

The goal of the Microsoft Edge WebView2 control is combining the best of both the web and native application development features and developer tools.  The following page outlines the different tools to use when developing with WebView2 controls.

# [Microsoft Edge DevTools](#tab/devtools)

Use [Microsoft Edge (Chromium) Developer Tools][DevtoolsGuideChromiumMain] to debug web content displayed in WebView2 controls, in the same way that you use Microsoft Edge.  To open the DevTools, set focus on the WebView window and then use any of the following actions. 
 
*   Select `F12`.  
*   Select `Ctrl`+`Shift`+`I`.  
*   Open the context menu \(right-click\) > select `Inspect`.  

:::image type="complex" source="./media/f12.png" alt-text="Devtools debugging" lightbox="/media/breakpoint.png":::
    Devtools debugging  
:::image-end::: 

# [Visual Studio ](#tab/visualstudio)

You may use Visual Studio to develop application code and debug scripts at the same time.

Keep the following things in mind.

* Visual Studio only supports debugging scripts when the app is launched from within Visual Studio. (Attaching a running process for debugging is not supported.)
* The targeted WebView debugging scenario is not supported.

> [!Important]
> This method of debugging is currently restricted to Win32 applications and Office add-ins.

Use the script debugger in Visual Studio 2019 version 16.4 Preview 2 or later to debug your script in Visual Studio.

To set up the debugger:  

*   Verify the **JavaScript diagnostics** component in **Desktop development with C++** workload is installed.  
    
    1.  Navigate to **Apps & features** settings in Windows.  Search for it using the Windows task bar.  
    1.  Choose **Modify**.  
    1.  Verify the **Javascript diagnostics** and **Desktop Development in C++** checkboxes are selected.  
        
        :::image type="complex" source="./media/appsandfeatures.png" alt-text="Apps & Features" lightbox="./media/appsandfeatures.png":::
           Apps & Features  
        :::image-end:::  
        
*   Enable WebView2 script debugging.  
    1.  Hover on your project, open the context menu \(right-click\), and select **Properties**.  
    1.  On **Configuration Properties**, select **Debugging**.  
    1.  On the **Debugger Type** property, search the the list of options, and select **JavaScript (WebView2)**.  
        
        :::image type="complex" source="./media/enbjs.png" alt-text="Visual Studio JavaScript Debugger" lightbox="./media/enbjs.png":::
           Visual Studio JavaScript Debugger  
        :::image-end:::  
        
You are all set up and ready to debug!


To Debug, you may perform the following actions.  
1.  Set Breakpoints  
    *   Open the file you are trying to debug and set a breakpoint by clicking to the left of the line number.
        
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

> [!NOTE]
> When you debug your application in Visual Studio with the native debugger attached, pressing `F12` may trigger the native debugger instead of Developer Tools.  Press `Ctrl`+`Shift`+`I`, or use the context menu \(right-click\) to avoid the situation.  

    
# [Visual Studio Code](#tab/visualstudiocode) 

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

**Advanced Settings:**

* Targeted Webview debugging (For multiple WebViews):
    * In `launch.json`:
        1. Change useWebview parameter to "Advanced"
        1. Add urlFilter parameter. urlFilter is used as a string comparison paramater on the URL that each WebView is navigated to.
        ```csharp
        "useWebview": "Advanced",
        "urlFilter": "file://C:/myfile/index.ts",

        //Other options

        urlFilter="*index.ts"    //Match any url that ends in index.ts (ignore any leading anything)
        urlFilter="*index*"      //Match any url that contains index (ignore leading and trailing anything)  
        urlFilter="*?=debugme*"  //Match any url that has a parameter segment matching “?urlFilter=debugme" (ignoring anything leading or trailing)  
        urlFilter="*debug*"      //Match any url that contains debug anywhere in the path.
        urlFilter="About:Blank"  //The default url all WebView’s navigate to on creation.  This will behave just like using the non-targeted debugging mode.  
        ```
        > [!NOTE]
        >  * “*” is used as a wildcard for leading or trailing matches. 
             Using the ?=value parameter syntax for a match can be useful because most webpages will ignore any unrecognized parameters. 

        > [!Important]
        > Once the first match is found filtering is stopped for subsequent matches.  As a result, you can’t actively debug two WebView’s at once from within one instance of VSCode.  Using two instances also won’t let you debug two WebView’s as the CDP port is only opened on a single port number. 
* Attaching debugger to a running process:
    * In `launch.json`:
        1. Change the request parameter to "attach"
             ```csharp
            "request": “attach”,  
            "port": 9222, // Optional defaults to 9222  
            "timeout": 10000,  
             ```

    * Ensure that the WebView will open the CDP Port. 
    > [!NOTE] There is not any way to filter which WebView it will find and connect to.  It is recommended you ensure there is only one WebView currently with the CDP port open before starting attach.  

* Debug Tracing:
    * In `launch.json`:
        1. Add 'trace' parameter.
            ```csharp
            ,"trace": true
            ,"trace": “verbose”  //verbose option
            ```
        :::image type="complex" source="./media/tracelog.png" alt-text=" Visual Studio Code Debug Output" lightbox="/media/tracelog.png":::
        Visual Studio Code Debug Output  
        :::image-end:::

        :::image type="complex" source="./media/verbose.png" alt-text=" Verbose Output" lightbox="/media/verbose.png":::
        Verbose Output
        :::image-end:::
* Add-In Debugging:

    * If you need to debug the add in more deeply you can load the source project in a second instance of VSCode and debug the add in.  

    1. Set the debugServer parameter for that cross-process communication port.    
        ```csharp
        ,"debugServer": 4711
        ```
* Troubleshooting:
    * Breakpoints not hit but you have debug spew:
        * Solution: Ensure that the file you have opened and set the breakpoint in is the exact same path that you opened in the WebView2.  The adapters do not do source path mapping.  
    * Attach never does and you get a timeout error:
        * Solution: The WebView is probably not opening the CDP port.  Ensure your additionalBroweserArguments registry value is correct or that your application code is configuring the options correctly.   

--- 

Help build a richer WebView2 experience by sharing your feedback.  Visit the [feedback repo][GithubMicrosoftedgeWebviewfeedbackMain] to submit feature requests or bug reports.  

For a list of other JavaScript Debugging features in Visual Studio Code, visit [this](https://github.com/microsoft/vscode-js-debug/#whats-new)

[DevtoolsGuideChromiumMain]: ../../devtools-guide-chromium.md "Microsoft Edge (Chromium) Developer Tools"  

[GithubMicrosoftedgeWebviewfeedbackMain]: https://github.com/MicrosoftEdge/WebViewFeedback "WebView Feedback - MicrosoftEdge/WebViewFeedback | GitHub"  

[GithubMicrosoftVscodeEdgeDebug2ReadmeChromiumWebviewApplications]: https://github.com/microsoft/vscode-edge-debug2/blob/master/README.md#microsoft-edge-chromium-webview-applications "Microsoft Edge (Chromium) WebView applications - VS Code - Debugger for Microsoft Edge - microsoft/vscode-edge-debug2 | GitHub"