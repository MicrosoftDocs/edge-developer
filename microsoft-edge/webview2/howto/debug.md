---
description: Learn how to debug WebView2 controls.
title: Debugging a WebView2 Control
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 08/03/2020
ms.topic: how-to
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---


# Debugging a WebView2 Control  

The goal of the Microsoft Edge WebView2 control is combining the best of both the web and native application development features and developer tools.  The following page outlines the different tools to use when developing with WebView2 controls.

## [Microsoft Edge DevTools](#tab/devtools)

Use [Microsoft Edge (Chromium) Developer Tools][DevtoolsGuideChromiumMain] to debug web content displayed in WebView2 controls, in the same way that you use Microsoft Edge.  To open the DevTools, set focus on the WebView window and then use any of the following actions.  

*   Select `F12`.  
*   Select `Ctrl`+`Shift`+`I`.  
*   Open the context menu \(right-click\) and choose `Inspect`.  
    
:::image type="complex" source="./media/f12.png" alt-text="DevTools debugging" lightbox="./media/breakpoint.png":::
    DevTools debugging  
:::image-end:::  

## [Visual Studio](#tab/visualstudio)  

You may use Visual Studio to develop application code and debug scripts at the same time.  

Keep the following things in mind.  

*   Visual Studio only supports debugging scripts when the app is launched from within Visual Studio.  \(Attaching a running process for debugging is not supported.\)  
*   The targeted WebView debugging scenario is not supported.  

> [!IMPORTANT]
> The following method of debugging is currently restricted to Win32 applications and Office add-ins.  

Use the script debugger in Visual Studio 2019 version 16.4 Preview 2 or newer to debug your script in Visual Studio.  

Set up the debugger. 

1.  Ensure the **JavaScript diagnostics** component in **Desktop development with C++** workload is installed.  
    
    1.  Navigate to **Apps & features** settings in Windows.  Search for it using the Windows task bar.  
    1.  Choose **Modify**.  
    1.  Ensure the **Javascript diagnostics** and **Desktop Development in C++** checkboxes are chosen.  
        
        :::image type="complex" source="./media/appsandfeatures.png" alt-text="Apps & Features in Windows Settings" lightbox="./media/appsandfeatures.png":::
           **Apps & Features** in Windows **Settings**  
        :::image-end:::  
        
1.  Enable WebView2 script debugging.  
    1.  Hover on your project, open the context menu \(right-click\), and choose **Properties**.  
    1.  On **Configuration Properties**, choose **Debugging**.  
    1.  On the **Debugger Type** property, search the the list of options, and choose **JavaScript (WebView2)**.  
        
        :::image type="complex" source="./media/enbjs.png" alt-text="Visual Studio Debugging Configuration Property" lightbox="./media/enbjs.png":::
           Visual Studio **Debugging** Configuration Property  
        :::image-end:::  
        
You are all set up and ready to debug.  

To Debug, you may perform the following actions.  

1.  Set Breakpoints  
    *   Open the file you are trying to debug, hover to the left of the line number, and choose to set a breakpoint.
        
        :::image type="complex" source="./media/breakpoint.png" alt-text="Visual Studio add breakpoint" lightbox="./media/breakpoint.png":::
           Visual Studio add breakpoint  
        :::image-end:::  
        
        > [!NOTE]
        > The JS/TS debug adapter does not do source path mapping.  You must open the exact same path associated with your WebView2.  
        
1.  Run code.  
    *   To run the **Local Windows Debugger**, choose the appropriate build flavor and runtime environment and choose the green play button.  
        
        :::image type="complex" source="./media/run.png" alt-text=" Visual Studio Local Windows Debugger" lightbox="./media/run.png":::
           Visual Studio **Local Windows Debugger**  
        :::image-end:::  

1.  View **Debug Console**.  
    *   The application runs and the debugger connects after the first webview2 is created.  Any pending debug output is displayed.  
        
        :::image type="complex" source="./media/console.png" alt-text=" Visual Studio Debug Console" lightbox="./media/console.png":::
           Visual Studio **Debug Console**  
        :::image-end:::  
        
        > [!NOTE]
        > When you debug your application in Visual Studio with the native debugger attached, selecting `F12` may trigger the native debugger instead of Developer Tools.  Select `Ctrl`+`Shift`+`I`, or use the context menu \(right-click\) to avoid the situation.  
        
## [Visual Studio Code](#tab/visualstudiocode)  

You may use Visual Studio Code to debug scripts that run in WebView2 controls.  For more information, see [Microsoft Edge (Chromium) WebView Applications][GithubMicrosoftVscodeEdgeDebug2ReadmeChromiumWebviewApplications].  

In VS Code, there are 5 basic steps for debugging.  

1.  Install the debug adapter.  
    1.  In VS Code, open the **Extensions**.  
    1.  Search for JavaScript Debugger.  See the following figure.  
    1.  Install any version of the adapter newer than 2020.6.208  
        
        :::image type="complex" source="./media/jsdebugger.png" alt-text=" Visual Studio Code JavaScript Debugger extension" lightbox="./media/jsdebugger.png":::
            Visual Studio Code **JavaScript Debugger** extension  
        :::image-end:::  
        
    1.  In VS Code, open the **Settings** tab > **Extensions** and choose **JavaScript Debugger**.  
    1.  Ensure the **Use the new in-preview JavaScript debugger for Node.js and Chrome.** checkbox is chosen.  
        
        :::image type="complex" source="./media/previewbox.png" alt-text=" Visual Studio Code JavaScript Debugger extension settings" lightbox="./media/previewbox.png":::
           Visual Studio Code **JavaScript Debugger** extension settings  
        :::image-end:::  

1.  Configure the debug adapter.  
    1.  In VS Code, open the **Run** tab.  
    
        :::image type="complex" source="./media/runbutton.png" alt-text=" Visual Studio Code navigation" lightbox="./media/runbutton.png":::
           Visual Studio Code navigation  
        :::image-end:::  

    1.  Within the dropdown menu choose a project to run.  
        
        :::image type="complex" source="./media/scenario.png" alt-text=" Visual Studio Code Run tab" lightbox="./media/scenario.png":::
           Visual Studio Code Run tab  
        :::image-end:::
        
    1.  Ensure you have a `launch.json` VS Code file.  If not, create a `launch.json` file with the following metadata.  
        
        > [!IMPORTANT]
        > The step is required to debug a WebView Control.  
        
        ```csharp
        {
            "name": "Scenario 1: Script debugging (first) (old adapter)",  
            "type": "pwa-msedge"   
            "port": 9222, // Optional defaults to 9222  
            "request": "launch", // optionally "attach"  
            "runtimeExecutable": "E:/YourPath/YourApplication.exe",  
            "env": {  
                    // customize for your build location if needed  
                    "Path": "%path%;e:/YourNeededPath; "  
            }  
            "useWebView": true, // optionally "advanced"  
            //"urlFilter": "*DebugTrigger", // Only used when useWebView == "Advanced"  
        } 
        ```  
        
1.  Set breakpoints.  
    1.  In VS Code, open the file you want to debug.  Set the breakpoint \(either hover on the line and select `F9` or choose the breakpoint column in the editor\).  
        
        :::image type="complex" source="./media/breakpointvs.png" alt-text="Visual Studio Code Debug Output for launch.json " lightbox="./media/breakpointvs.png":::
           Visual Studio Code Debug Output for `launch.json`  
        :::image-end:::
        
        > [!NOTE]
        >  VS Code does not do source mapping, you must ensure you have opened and set breakpoints in the same file path that the WebView is using.  If the paths are not exact, VS Code is not able to resolve the breakpoint.  
        
1.  Run code.  
    1.  Choose the launch configuration from the dropdown menu.  
    1.  To start debugging, choose the green run button.  
        
        :::image type="complex" source="./media/runvs.png" alt-text=" Visual Studio Code Run tab" lightbox="./media/runvs.png":::
           Visual Studio Code Run tab  
        :::image-end:::  
        
1.  View results.  
    *   Observe Debug Output  
        
        :::image type="complex" source="./media/resultsvs.png" alt-text=" Visual Studio Code Debug Console" lightbox="./media/resultsvs.png":::
           Visual Studio Code Debug Console  
        :::image-end:::  
        
**Advanced Settings**:  

*   Targeted Webview debugging. \(For multiple WebView instances\)  
    *   Open `launch.json` file and complete the following steps.  
        1.  Change `useWebview` parameter value to `Advanced`.  
        1.  Add `urlFilter` parameter.  The `urlFilter` parameter is used as a string comparison parameter on the URL to which each WebView is navigated.  
        
        ```csharp
        "useWebview": "Advanced",
        "urlFilter": "file://C:/myfile/index.ts",
        
        //Other options
        
        urlFilter="*index.ts"    //Match any url that ends in index.ts (ignore any leading anything)
        urlFilter="*index*"      //Match any url that contains index (ignore leading and trailing anything)  
        urlFilter="*?=debugme*"  //Match any url that has a parameter segment matching "?urlFilter=debugme" (ignoring anything leading or trailing)  
        urlFilter="*debug*"      //Match any url that contains debug anywhere in the path.
        urlFilter="About:Blank"  //The default url all WebView instances navigate when created.  The parameter behaves like using the non-targeted debugging mode.  
        ```  
        
        > [!NOTE]
        > *   An Asterisk \(`*`\) is used as a wildcard for leading or trailing matches.  
        > *   Using the `?=value` parameter syntax for a match may be useful because most webpages ignore any unrecognized parameters.  
        
        > [!IMPORTANT]
        > Once the first match is found filtering is stopped for subsequent matches.  As a result, you are not able to actively debug two WebView instances at once from within one instance of VS Code.  Using two VS Code instances also does not let you debug two WebView instances since the CDP port is only open on a single port number.  
        
*   Attaching debugger to a running process.  
    *   Open `launch.json` file and complete the following step.  
        1.  Change the `request` parameter value to `attach`.  
            
            ```csharp
            "request": "attach",  
            "port": 9222, // Optional defaults to 9222  
            "timeout": 10000,  
            ```  
            
    *   Ensure that the WebView opens the CDP port.  
    
    > [!NOTE]
    > You are not able to filter to which WebView it finds and connects.  You should ensure that only one WebView currently has a CDP port open before sending an `attach` request.  
    
*   Debug tracing.  
    *   Open `launch.json` file and complete the following step.  
        1.  Add `trace` parameter.  
            
            ```csharp
            ,"trace": true
            ,"trace": "verbose"  //verbose option
            ```  
            
        :::row:::
           :::column span="":::
              :::image type="complex" source="./media/tracelog.png" alt-text=" Visual Studio Code Debug Output" lightbox="./media/tracelog.png":::
                 Visual Studio Code Debug Output  
              :::image-end:::  
           :::column-end:::
           :::column span="":::
              :::image type="complex" source="./media/verbose.png" alt-text=" Verbose Output" lightbox="./media/verbose.png":::
                 Verbose Output  
              :::image-end:::  
           :::column-end:::
        :::row-end:::  
        
*   Add-In Debugging.  
    *   If you need to debug the add-in more deeply, you may load the source project in a second instance of VS Code and debug the add-in.  
        1.  Set the debugServer parameter for that cross-process communication port.  
            
            ```csharp
            ,"debugServer": 4711
            ```  

*   Troubleshooting  
    *   Breakpoints not hit, but you have debug output.  
        *   Solution:  Ensure that the file you have opened and set the breakpoint in is the exact same path that you opened in the WebView2.  The adapters do not do source path mapping.  
    *   Attach never does and you get a timeout error. 
        *   Solution:  The WebView is probably not opening the CDP port.  Ensure your `additionalBrowserArguments` registry value is correct or that your application code is configuring the options correctly.  

For a list of other JavaScript Debugging features in Visual Studio Code, see [What's new? in JavaScript debugger for VS Code][GithubMicrosoftVscodeJSDebugWhatsNew].  

* * *  

## Getting in touch with the Microsoft Edge WebView team  

Help build a richer WebView2 experience by sharing your feedback.  Visit the Microsoft Edge WebView [feedback repo][GithubMicrosoftedgeWebviewfeedbackMain] to submit feature requests or bug reports or search for known issues.  

[DevtoolsGuideChromiumMain]: ../../devtools-guide-chromium.md "Microsoft Edge (Chromium) Developer Tools"  

[GithubMicrosoftedgeWebviewfeedbackMain]: https://github.com/MicrosoftEdge/WebViewFeedback "WebView Feedback - MicrosoftEdge/WebViewFeedback | GitHub"  

[GithubMicrosoftVscodeJSDebugWhatsNew]: https://github.com/microsoft/vscode-js-debug#whats-new "What's new? - JavaScript debugger for VS Code - microsoft/vscode-js-debug | GitHub"  

[GithubMicrosoftVscodeEdgeDebug2ReadmeChromiumWebviewApplications]: https://github.com/microsoft/vscode-edge-debug2/blob/master/README.md#microsoft-edge-chromium-webview-applications "Microsoft Edge (Chromium) WebView applications - VS Code - Debugger for Microsoft Edge - microsoft/vscode-edge-debug2 | GitHub"  
