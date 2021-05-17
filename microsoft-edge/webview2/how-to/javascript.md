---
description: Learn how to use JavaScript in complex scenarios in WebView2 apps
title: Use JavaScript in WebView2 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/06/2021
ms.topic: how-to
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---
# Use JavaScript in WebView for extended scenarios  

Using JavaScript in WebView2 controls allows you to customize native apps to meet your requirements.  This article explores how to use JavaScript in WebView2, and reviews how to develop using advanced WebView2 features and functionality.  

## Before you begin  

This article assumes that you already have a working project.  If you do not have a project and want to follow along, navigate to the [WebView2 Get Started Guide][Webview2GetStartedWpf].  

## Basic WebView2 Functions  

Use the following functions to begin embedding JavaScript in your WebView app.  

| API  | Description  |
|:--- |:--- |  
| [ExecuteScriptAsync][Webview2ReferenceWpfMicrosoftWebExecutescriptasync] | Run JavaScript in a WebView control. For more information, navigate to the Get Started tutorial. |
| [OnDocumentCreatedAsync][Webview2ReferenceWin32Icorewebview2Addscripttoexecuteondocumentcreated] | Runs when the Document Object Model \(DOM\) is created. |
      
## Scenario:  Running a dedicated script file  

In this section, access a dedicated JavaScript file from your WebView2 control.  

> [!NOTE]
> Although writing JavaScript inline may be efficient for quick JavaScript commands, you lose JavaScript color themes and line formatting that makes it difficult to write large sections of code in Visual Studio.  

To solve the problem, create a separate JavaScript file with your code, and then pass a reference to that file using the `ExecuteScriptAsync` parameters.  

1.  Create a `.js` file in your project, and add the JavaScript code that you want to run.  For example, create a file called `script.js`.  
1.  Convert the JavaScript file to a string that is passed to `ExecuteScriptAsync`.  
    1.  To convert your JavaScript file into a string, copy the following code snippet.  
        
        ```csharp
        string text = System.IO.File.ReadAllText(@"C:\PATH_TO_YOUR_FILE\script.js");
        ```  
        
    1.  Paste the code into `MainWindow.xaml.cs`.  
1.  Pass your text variable using `ExecuteScriptAsync`.  
    
    ```csharp
    await webView.CoreWebView2.ExecuteScriptAsync(text);
    ```  
    
## Scenario:  Remove drag-and-drop functionality  

In this section, use JavaScript to remove the drag-and-drop functionality from your WebView2 control.  

To begin, explore the current drag-and-drop functionality.  

1.  Create a `.txt` file in order to drag-and-drop.  For example, create a file named `contoso.txt` and add text to it.  
1.  Run your project.  
1.  Drag-and-drop the `contoso.txt` file onto the WebView control.  A new window opens, which is the result of the code in your sample project.  
    
    :::image type="complex" source="./media/drag-text.png" alt-text="Result of dragging and dropping contoso.txt" lightbox="./media/drag-text.png":::
       Result of dragging and dropping contoso.txt  
    :::image-end:::  
    
Now, add code to remove the drag-and-drop functionality from the WebView2 control.  

1.  Copy and paste the following code snippet into `InitializeAsync()` in `MainWindow.xaml.cs`.   
    
    ```csharp   
    await webView.CoreWebView2.ExecuteScriptAsync("window.addEventListener('dragover',function(e){e.preventDefault();},false);");
    
    await webView.CoreWebView2.ExecuteScriptAsync("window.addEventListener('drop',function(e){" +
    "e.preventDefault();" +
    "console.log(e.dataTransfer);" +
    "console.log(e.dataTransfer.files[0])" +
    "}, false);");
    ```  
    
1.  Run your project.  
1.  Try to drag-and-drop `contoso.txt`.  Confirm that you are not able to drag-and-drop.  
    
## Scenario:  Removing the Context Menu  

In this section, remove the default context menu from your WebView2 control.  

To begin, explore the current contextual menu functionality.  

1.  Run your project.  
1.  Hover anywhere on the WebView2 control and open the context menu \(right-click\).  The context menu displays the default choices.  
    
    :::image type="complex" source="./media/context-menu.png" alt-text="The context menu showing the default choices" lightbox="./media/context-menu.png":::
       The context menu showing the default choices  
    :::image-end:::  
    
Now add code to remove the contextual menu functionality from the WebView2 control.  

1.  Copy and paste the following code snippet into `InitializeAsync()` in `MainWindow.xaml.cs`.    
    
    ```csharp   
    await webView.CoreWebView2.ExecuteScriptAsync("window.addEventListener('contextmenu', window => {window.preventDefault();});");
    ```  
    
1.  Run the code again.  Confirm that you're not able to open a context menu \(right-click\).  
    
## See also  

*   To get started using WebView2, navigate to [WebView2 Get Started Guides][Webview2MainGetStarted].  
*   For a comprehensive example of WebView2 capabilities, navigate to the [WebView2Samples][GithubMicrosoftedgeWebview2samples] repo on GitHub.  
*   For detailed information on WebView2 APIs, navigate to [API reference][Webview2ApiReference].  
*   For more information on WebView2, navigate to [WebView2 Resources][Webview2MainNextSteps].  
    
## Getting in touch with the Microsoft Edge WebView team  

[!INCLUDE [contact WebView team note](../includes/contact-webview-team-note.md)]  

<!-- links -->  

[DevtoolsGuideChromiumMain]: ../index.md "Microsoft Edge (Chromium) Developer Tools | Microsoft Docs"  

[Webview2ApiReference]: ../webview2-api-reference.md "Microsoft Edge WebView2 API Reference | Microsoft Docs"  
[Webview2GetStartedWpf]: ../get-started/wpf.md "Get started with WebView2 in WPF (Preview) | Microsoft Docs"  
[Webview2MainGetStarted]: ../index.md#get-started "Get started - Introduction to Microsoft Edge WebView2 (Preview) | Microsoft Docs"  
[Webview2MainNextSteps]: ../index.md#next-steps "Next steps - Introduction to Microsoft Edge WebView2 (Preview) | Microsoft Docs"  

[Webview2ReferenceWin32Icorewebview2Addscripttoexecuteondocumentcreated]: /microsoft-edge/webview2/reference/win32/icorewebview2#addscripttoexecuteondocumentcreated "AddScriptToExecuteOnDocumentCreated - 0.9.579 - interface ICoreWebView2 | Microsoft Docs"  

[Webview2ReferenceWpfMicrosoftWebExecutescriptasync]: /dotnet/api/microsoft.web.webview2.wpf.webview2.executescriptasync "WebView2.ExecuteScriptAsync(String) Method (Microsoft.Web.WebView2.Wpf) | Microsoft Docs"  

[GithubMicrosoftedgeWebview2samples]: https://github.com/MicrosoftEdge/WebView2Samples "WebView2 Samples - MicrosoftEdge/WebView2Samples | GitHub"  
