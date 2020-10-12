---
description: Learn how to use JavaScript in complex scenarios in WebView2 applications
title: Use JavaScript in WebView2 applications
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/01/2020
ms.topic: how-to
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# Use JavaScript in WebView for extended scenarios

Using JavaScript in WebView2 controls allows you to customize native apps to meet your requirements. In this article, we'll explore how we can use JavaScript in a WebView2 context to develop further WebView2 features and functionality.  

## Before you begin
This topic assumes that there's already a working project to add code to. If you don't have a project yet, and would like to follow along please visit the [WebView2 Getting Started Guide](https://docs.microsoft.com/en-us/microsoft-edge/webview2/gettingstarted/wpf) page.

## Basic WebView2 Functions
Use the following functions to begin embedding JavaScript in your WebView application.

1. [ExecuteScriptAsync](https://docs.microsoft.com/microsoft-edge/webview2/reference/wpf/0-9-515/microsoft-web-webview2-wpf-webview2#executescriptasync): In the Getting Started tutorial, we used this function to run JavaScript in the WebView control. 
1. [OnDocumentCreatedAsync](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/0-9-538/icorewebview2#addscripttoexecuteondocumentcreated): This function is called when the Document Object Model (DOM) is created.


## Scenario: Running a dedicated script file

Although writing JavaScript inline can be efficient for quick JavaScript commands, we lose JavaScript color themes and line formatting that can make it difficult to write large sections of code in Visual Studio.

To solve this problem, create a separate JavaScript file with your code, and then pass a reference to that file using the `ExecuteScriptAsync` parameters.

1. Create a .js file in your project, and add the JavaScript code that you'd like to run. For example, create a file called `script.js`.
1. Convert the JavaScript file to a string that's passed to `ExecuteScriptAsync`. To convert your JavaScript file into a string, insert the following code in `MainWindow.xaml.cs`.

    ```csharp
    string text = System.IO.File.ReadAllText(@"C:\PATH_TO_YOUR_FILE\script.js"); 
    ```

1. Pass your text variable into `ExecuteScriptAsync`. 

    ```csharp
    await webView.CoreWebView2.ExecuteScriptAsync(text);
    ```

## Scenario: Remove drag and drop functionality

In this section, we'll use JavaScript to remove the drag and drop functionality from your WebView2 control.

To begin, let's explore the current drag and drop functionality. 

1. Create a file you would like to drag and drop. For this example, create `contoso.txt` and then add some text to that file.
1. Run your program.
1. Drag and drop `contoso.txt` onto the WebView control. A new window  pops up, which is what the code in the sample project is expected to do. 

    :::image type="complex" source="./media/dragtext.png" alt-text="Result of dragging and dropping contoso.txt" lightbox="./media/dragtext.png":::
   Result of dragging and dropping contoso.txt  
    :::image-end:::  

Now let's add code that removes the drag and drop functionality from the WebView2 control.

1. In `InitializeAsync()`, add the following code:

    ```c#   
    await webView.CoreWebView2.ExecuteScriptAsync("window.addEventListener('dragover',function(e){e.preventDefault();},false);");

    await webView.CoreWebView2.ExecuteScriptAsync("window.addEventListener('drop',function(e){" +
    "e.preventDefault();" +
    "console.log(e.dataTransfer);" +
    "console.log(e.dataTransfer.files[0])" +
    "}, false);");
    ```

1. Run your project. 
1. Try to drag and drop `contoso.txt`. Notice that drag and drop is no longer available.

## Scenario: Removing the Context Menu

In this section, we'll learn how to remove the default context menu. Perform the following steps:

1. Run your project.
1. Open the context menu, or right-click, anywhere on the WebView2 control. The context menu displays the default choices.

    :::image type="complex" source="./media/contextmenu.png" alt-text="The context menu showing the default choices" lightbox="./media/contextmenu.png":::
   The context menu showing the default choices  
    :::image-end:::  

1. Now lets remove the context menu by inserting this line of code into `InitializeAsync()` in `MainWindow.xaml.cs`.    

    ```c#   
    await webView.CoreWebView2.ExecuteScriptAsync("window.addEventListener('contextmenu', window => {window.preventDefault();});");
    ```

1. Run the code again. Confirm that opening the context menu isn't available. 

## See also  

*   For more information on getting started using WebView2, see [WebView2 Getting Started Guides][Webview2MainGettingStarted].  
*   For a comprehensive example of WebView2 capabilities, see the [WebView2Samples][GithubMicrosoftedgeWebview2samples] repo on GitHub.
*   For detailed information on WebView2 APIs, see [API reference][Webview2ApiReference].
*   For more information on WebView2, see [WebView2 Resources][Webview2MainNextSteps].

## Getting in touch with the Microsoft Edge WebView team  

[!INCLUDE [contact WebView team note](../includes/contact-webview-team-note.md)]  


<!-- links -->  

[DevtoolsGuideChromiumMain]: ../../devtools-guide-chromium.md "Microsoft Edge (Chromium) Developer Tools"  

[Webview2ReferenceDotnet09515MicrosoftWebWebview2CoreCorewebview2environmentoptionsAdditionalbrowserarguments]: ../reference/dotnet/0-9-515/microsoft-web-webview2-core-corewebview2environmentoptions.md#additionalbrowserarguments "AdditionalBrowserArguments - 0.9.515 - Microsoft.Web.WebView2.Core.CoreWebView2EnvironmentOptions class | Microsoft Docs"  
[Webview2ReferenceWin3209538Webview2IdlParameters]: ../reference/win32/0-9-538/webview2-idl.md#createcorewebview2environment  "CreateCoreWebView2Environment - Globals | Microsoft Docs"  
[Webview2ApiReference]: ../webview2-api-reference.md "Microsoft Edge WebView2 API Reference | Microsoft Docs"  
[Webview2MainNextSteps]: ../index.md#next-steps "Next steps - Introduction to Microsoft Edge WebView2 (Preview) | Microsoft Docs"  
[Webview2MainGettingStarted]: ../index.md#getting-started "Getting started - Introduction to Microsoft Edge WebView2 (Preview) | Microsoft Docs"  

[GithubMicrosoftedgeWebviewfeedbackMain]: https://github.com/MicrosoftEdge/WebViewFeedback "WebView Feedback - MicrosoftEdge/WebViewFeedback | GitHub"  
[GithubMicrosoftedgeWebview2samples]: https://github.com/MicrosoftEdge/WebView2Samples "WebView2 Samples - MicrosoftEdge/WebView2Samples | GitHub"  

[GithubMicrosoftVscodeJSDebugWhatsNew]: https://github.com/microsoft/vscode-js-debug#whats-new "What's new? - JavaScript debugger for Visual Studio Code - microsoft/vscode-js-debug | GitHub"  

[GithubMicrosoftVscodeEdgeDebug2ReadmeChromiumWebviewApplications]: https://github.com/microsoft/vscode-edge-debug2/blob/master/README.md#microsoft-edge-chromium-webview-applications "Microsoft Edge (Chromium) WebView applications - Visual Studio Code - Debugger for Microsoft Edge - microsoft/vscode-edge-debug2 | GitHub"  
