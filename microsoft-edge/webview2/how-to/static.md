---
description: Learn how to statically link the WebView2 loader library.
title: How to statically link the WebView2 loader library
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/06/2021
ms.topic: how-to
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---
# Statically link the WebView2 loader library  

You may want to distribute your application with a single executable file, instead of a package of many files. To create a single executable file, or to reduce the size of your package, you should statically link the WebView2Loader files. The WebView2 SDK contains a header file, `WebView2Loader.dll`, and the `IDL` file. `WebView2Loader.dll` is a small component that helps apps locate the WebView2 Runtime, or non-stable channels of Microsoft Edge, on the device.  

For apps that don't want to ship a `WebView2Loader.dll`, complete the following steps.  

1.  Open the `.vcxproj` project file for your app in a text editor, such as Visual Studio Code.  
    
    > [!NOTE]
    > The `.vcproj` project file may be a hidden file, meaning it does not display in Visual Studio.  Use the command-line to find hidden files.  
    
1.  Locate the section in the code where you include the WebView2 NuGet package target files.  The location in the code is highlighted in the following figure.  
    
    :::image type="complex" source="./media/insert-here.png" alt-text="Project Files code snippet" lightbox="./media/insert-here.png":::
       Project Files code snippet   
    :::image-end:::  
    
1.  Copy the following code snippet and paste it where the `Microsoft.Web.WebView2.targets` is included.  
    
    ```xaml
    <PropertyGroup> 
        <WebView2LoaderPreference>Static</WebView2LoaderPreference> 
    </PropertyGroup>
    ```  
    
    :::image type="complex" source="./media/static-lib.png" alt-text="Inserted code snippet" lightbox="./media/static-lib.png":::
       Inserted code snippet  
    :::image-end:::  
    
1.  Edit the additional dependencies of the build configuration for your app.  To begin, find all of the `<AdditionalDependencies>` tags. For each, add `version.lib` as an additional dependency to every different build configuration in the `.vcxproj` file.  
    
    :::image type="complex" source="./media/version-lib.png" alt-text="Adding version.lib to ItemDefinitionGroups" lightbox="./media/version-lib.png":::
       Adding `version.lib` to `ItemDefinitionGroups`  
    :::image-end:::  
    
    > [!NOTE]
    > The WebView2 team aims to automate adding the additional dependency in future releases.  
    
1.  Compile and run your app.  
    
## Getting in touch with the WebView2 team  

[!INCLUDE [contact WebView team note](../includes/contact-webview-team-note.md)]  

## See also  

*   To get started using WebView2, navigate to [WebView2 Get Started Guides][Webview2MainGetStarted].  
*   For a comprehensive example of WebView2 capabilities, navigate to [WebView2Samples][GithubMicrosoftedgeWebview2samples] on GitHub.
*   For more detailed information about WebView2 APIs, navigate to [API reference][Webview2ApiReference].
*   For more information about WebView2, navigate to [WebView2 Resources][Webview2MainNextSteps].
    
<!-- links -->  

[DevtoolsGuideChromiumMain]: ../index.md "Microsoft Edge (Chromium) Developer Tools | Microsoft Docs"  

[Webview2ApiReference]: ../webview2-api-reference.md "Microsoft Edge WebView2 API Reference | Microsoft Docs"  
[Webview2MainNextSteps]: ../index.md#next-steps "Next steps - Introduction to Microsoft Edge WebView2 (Preview) | Microsoft Docs"  
[Webview2MainGetStarted]: ../index.md#get-started "Get started - Introduction to Microsoft Edge WebView2 (Preview) | Microsoft Docs"  

[GithubMicrosoftedgeWebviewfeedbackMain]: https://github.com/MicrosoftEdge/WebViewFeedback "WebView Feedback - MicrosoftEdge/WebViewFeedback | GitHub"  
[GithubMicrosoftedgeWebview2samples]: https://github.com/MicrosoftEdge/WebView2Samples "WebView2 Samples - MicrosoftEdge/WebView2Samples | GitHub"  

[GithubMicrosoftVscodeJSDebugWhatsNew]: https://github.com/microsoft/vscode-js-debug#whats-new "What's new? - JavaScript debugger for Visual Studio Code - microsoft/vscode-js-debug | GitHub"  

[GithubMicrosoftVscodeEdgeDebug2ReadmeChromiumWebviewApplications]: https://github.com/microsoft/vscode-edge-debug2/blob/master/README.md#microsoft-edge-chromium-webview-applications "Microsoft Edge (Chromium) WebView applications - Visual Studio Code - Debugger for Microsoft Edge - microsoft/vscode-edge-debug2 | GitHub"  
