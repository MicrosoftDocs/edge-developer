---
description: Learn how to statically link the WebView2 loader library.
title: Get started debugging WebView2 applications
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 08/13/2020
ms.topic: how-to
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# How to Statically link the WebView2 loader library


## Context
What is the WebView2Loader.dll?
- The WebView2 SDK contains a header file, WebView2Loader.dll., and the IDL file. WebView2Loader.dll is a small component that helps apps locate the WebView2 Runtime (or non-stable Microsoft Edge channels) on the device.

For apps that have a single executable, and do not want to ship a WebView2Loader.dll, follow the process below.

## Procedure

1. Open up your app's `.vcxproj` project file in a text editor, like VSCode.
    > [!NOTE]
    > The .vcproj project file may be a hidden file, meaning you wouldn't see it in Visual Studio. Use a terminal to find this file.
1. Locate the section in the code where you would include the WebView2 NuGet package target files. This section can be found after the < /target > tag.
    :::image type="complex" source="./media/inserthere.png" alt-text="Project Files Snippet" lightbox="./media/inserthere.png"::: 
       Project Files Snippet 
    :::image-end:::  
1. Insert the following code snippet below the target section.
    ```csharp
    <PropertyGroup> <WebView2LoaderPreference>Static</WebView2LoaderPreference> </PropertyGroup>
    ```
    :::image type="complex" source="./media/staticlib.png" alt-text="Inserted Snippet" lightbox="./media/staticlib.png"::: 
       Inserted Snippet 
    :::image-end:::  

1. Next we must edit the app's build configuration's additional dependencies. To begin, find all the < AdditionalDependencies > tags.  
1. Add 'version.lib' as an additional dependency to every different build configuration in the app's `.vcxproj` file.  

    :::image type="complex" source="./media/versionlib.png" alt-text="Adding version.lib to ItemDefinitionGroups" lightbox="./media/versionlib.png"::: 
       Adding version.lib to ItemDefinitionGroups 
    :::image-end:::  

    > [!NOTE]
    > The WebView2 team aims to complete this step automatically in future releases.  

Compile and deploy your app! Success! 

## See also  

*   To get started using WebView2, see [WebView2 Getting Started Guides][Webview2MainGettingStarted].  
*   For a comprehensive example of WebView2 capabilities, see the [WebView2Samples][GithubMicrosoftedgeWebview2samples] repo on GitHub.
*   For more detailed information about WebView2 APIs, see [API reference][Webview2ApiReference].
*   For more information about WebView2, see [WebView2 Resources][Webview2MainNextSteps].

## Getting in touch with the WebView2 team  

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
