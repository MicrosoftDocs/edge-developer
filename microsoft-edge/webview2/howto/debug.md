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

Visual Studio provides various debugging tools for web and native code in WebView2 applications.  In the Visual Studio section, the primary focus is debugging WebView controls, however the other methods of debugging in Visual Studio are available as usual.  Use the following process to debug web and native code in Win32 applications or Office Add-ins only.  

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
    
## [Visual Studio Code](#tab/visualstudiocode)  

Use Microsoft Visual Studio Code to debug scripts that run in WebView2 controls.  

In Visual Studio Code, complete the following actions to debug your code. 

> [!NOTE]
> Requires at least build [insert build here].

1.  Configure the JavaScript debugger.  
    1.  In Visual Studio Code, open the **Run** tab.  
        
        :::image type="complex" source="./media/runbutton.png" alt-text=" Visual Studio Code navigation" lightbox="./media/runbutton.png":::
           Visual Studio Code navigation  
        :::image-end:::  
        
    1.  Your project is required to have a `launch.json` file.  If your project doesn't have a `launch.json` file, copy the following code snippet and create a new `launch.json` file.  
        
        ```json
        {
            "name": "Hello debug world",
            "type": "pwa-msedge",
            "port": 9222, // The port value is optional, and the default value is 9222.
            "request": "launch",
            "runtimeExecutable": "C:/path/to/your/webview2/application.exe",
            "env": {
                // Customize for your build location if needed
                "Path": "%path%;e:/path/to/your/build/location; "
            },
            "useWebView": true,
        }
        ```  
        
1.  To set a breakpoint in your source code, hover on the line, and select `F9`
    
    :::image type="complex" source="./media/breakpointvs.png" alt-text="Visual Studio Code Debug Output for launch.json " lightbox="./media/breakpointvs.png":::
       Visual Studio Code Debug Output for `launch.json`  
    :::image-end:::
    
    > [!NOTE]
    > Visual Studio Code does not perform source mapping, you must ensure you have opened and set breakpoints in the same file path that your WebView is using.  If the paths do not match, Visual Studio Code does not pause the running code at the breakpoint.  
    
1.  Run code.  
    1.  On the **Run** tab, choose the launch configuration from the dropdown menu.  
    1.  To start debugging, choose the green **run** button.  
        
        :::image type="complex" source="./media/runvs.png" alt-text=" Visual Studio Code Run tab" lightbox="./media/runvs.png":::
           Visual Studio Code Run tab  
        :::image-end:::  
        
1.  Open the **Debug Console**, and view any errors from the debugger.  
    
    :::image type="complex" source="./media/resultsvs.png" alt-text=" Visual Studio Code Debug Console" lightbox="./media/resultsvs.png":::
       Visual Studio Code Debug Console  
    :::image-end:::  
    
**Advanced Settings**:  

*   Targeted Webview debugging.  
    
    Open `launch.json` and complete the following actions to use targeted Webview debugging.  
    
    1.  Change `useWebview` parameter value to `true`.  
    1.  Add the `urlFilter` parameter.  When the WebView2 control navigates to a URL, the `urlFilter` parameter value is used to compare strings that appear in the URL.  
    
    ```json
    "useWebview": "true",
    "urlFilter": "file://C:/path/to/my/index.ts",
    
    //Other options
    
    urlFilter="*index.ts"    //Match any url that ends in index.ts (ignore any leading anything)
    urlFilter="*index*"      //Match any url that contains index (ignore leading and trailing anything)  
    urlFilter="*?=debugme*"  //Match any url that has a parameter segment matching "?urlFilter=debugme" (ignoring anything leading or trailing)  
    urlFilter="*debug*"      //Match any url that contains debug anywhere in the path.
    ```  
    
    Use the `?=value` syntax to debug pages displayed in WebView2 controls, because webpages ignore unrecognized parameters.  
    
    > [!IMPORTANT]
    > After the first match is found, the filtering is stopped for subsequent matches.  As a result, you are not able to debug two or more WebView2 controls at the same time in the same instance of Visual Studio Code.  Using two Visual Studio Code instances also does not let you debug two WebView instances since the CDP port is shared and only open on a single port number.  
    
*   Attaching debugger to a running process.  
    
    Open `launch.json` and update the code to set the `request` parameter value to `attach` to attach the JavaScript debugger to running processes.
    
    1.  Change the `request` parameter value to `attach`.  
        
        ```csharp
        {
            "name": "Hello debugging world",
            "type": "pwa-msedge",
            "port": 9222, // This value is optional, and the default value is 9222.
            "request": "attach",
            "runtimeExecutable": "C:/Folder_Path/Your_WebView2_Application.exe",
            "env": {
                // Customize for your build location if needed
                "Path": "%path%;e:/YourNeededPath; "
            },
            "useWebView": true,
            "timeout": 10000
        }
        ```  
        
    Your WebView2 control must open the CDP port to allow debugging of the WebView2 control.  Your code must be built to ensure that only one WebView2 control has a CDP port open, before sending an attach request.  
    
*   Debug tracing.  
    
    Add the `trace` parameter to launch.json to enable debug tracing.  
    
    1.  Add `trace` parameter.  
        
        ```csharp
        ,"trace": true
        ,"trace": "verbose"  //verbose option
        ```  
        
        :::row:::
           :::column span="":::
              ```csharp
              ,"trace": true
              // ,"trace": "verbose"  //verbose option
              ```  
              
              :::image type="complex" source="./media/tracelog.png" alt-text=" Visual Studio Code Debug Output" lightbox="./media/tracelog.png":::
                 Visual Studio Code Debug Output  
              :::image-end:::  
           :::column-end:::
           :::column span="":::
              ```csharp
              // ,"trace": true
              ,"trace": "verbose"  //verbose option
              ```  
              
              :::image type="complex" source="./media/verbose.png" alt-text=" Verbose Output" lightbox="./media/verbose.png":::
                 Visual Studio Code Debug Verbose Output  
              :::image-end:::  
           :::column-end:::
        :::row-end:::  
        
*   Debug Office Add-ins.
    
    If you're debugging Office Add-ins, open the add-in source code in a separate instance of Visual Studio Code.  Open launch.json and add the following code snippet to enable cross-process communication.  
    
    ```json
    ,"debugServer": 4711
    ```  
    
*   Troubleshooting the debugger  
    
    You may encounter the following scenarios when using the debugger.  

    *   The debugger does not stop at the breakpoint, and you have debug output.  To solve the issue, ensure that the file where the breakpoint is set is the same one that the WebView2 control uses.  The debugger does not perform source path mapping.  
    *   You are not able to attach to a running process, and you get a timeout error.  To solve the issue, confirm that the WebView2 control opened the CDP port.  Ensure your `additionalBrowserArguments` value in the registry is correct, or the options are correct.  For more information, see [additionalBrowserArguments for dotnet][Webview2ReferenceDotnet09515MicrosoftWebWebview2CoreCorewebview2environmentoptionsAdditionalbrowserarguments] and [additionalBrowserArguments for Win32][Webview2ReferenceWin3209538Webview2IdlParameters].  
    
* * *  


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
