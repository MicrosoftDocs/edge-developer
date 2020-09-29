---
description: Learn how to use JavaScript in WebView2 applications
title: Use JavaScript in WebView2
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/28/2020
ms.topic: how-to
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# JavaScript Extended Features in WebView2

The ability to use JavaScript in a WebView2 context allows you to customize any app to fit your app's needs. In this article, we'll explore some important functions as well as provide a couple examples of how you can use these functions to improve your app. 

## Important Functions
Following are some basic functions to begin embedding JavaScript within your WebView application.

1. [**ExecuteScriptAsync**](https://docs.microsoft.com/microsoft-edge/webview2/reference/wpf/0-9-515/microsoft-web-webview2-wpf-webview2#executescriptasync): In the Getting Started tutorial, we used this function to run JavaScript within our WebView context. 
1. [**OnDocumentCreatedAsync**](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/0-9-538/icorewebview2#addscripttoexecuteondocumentcreated): This function is executed when the DOM is created.


## Running a dedicated script file

Although writing JavaScript inline can be efficient for quick JavaScript commands, we lose JavaScript color themes and line formatting that can make it difficult to write bigger sections of code.

We can solve this problem by creating a separate JavaScript file, and pointing to it within the parameters of ExecuteScriptAsync. 

1. Create a .js file. Ex. "script.js"
1. Write any JavaScript code here. 
1. We must convert the JavaScript file to a string in order to pass it into ExecuteScriptAsync. To convert your .js file into a string, insert the following code in `MainWindow.xaml.cs`:
    ```csharp
    string text = System.IO.File.ReadAllText(@"C:\Users\PATH_TO_YOUR_FILE\script.js"); //get text from .js file
    ```
1. Pass your text variable into ExecuteScriptAsync. It should look like the following.
    ```csharp
    await webView.CoreWebView2.ExecuteScriptAsync(text);
    ```

## Scenario: Disabling Drag and Drop

In this section, we'll use JavaScript to disable WebView's drag and drop feature.

Lets experiment drag and drops current functionality. 

1. Create a file you would like to drag and drop. For this example, I created a .txt file with some random text.
1. Run the sample project code. 

    :::image type="complex" source="./media/start_dd.png" alt-text="Test file and Webview" lightbox="./media/start_dd.png":::
   Test file and Webview  
    :::image-end:::  

1. Attempt to drag and drop the test file onto the WebView control. A new window should pop up, which means that the drag and drop functionality works as expected.

Now let's add some code to disable this functionality.

1. In the InitializeAsync() method add the following code:

    ```c#   
    await webView.CoreWebView2.ExecuteScriptAsync("window.addEventListener('dragover',function(e){e.preventDefault();},false);");

    await webView.CoreWebView2.ExecuteScriptAsync("window.addEventListener('drop',function(e){" +
    "e.preventDefault();" +
    "console.log(e.dataTransfer);" +
    "console.log(e.dataTransfer.files[0])" +
    "}, false);");
    ```
1. Run your app. 
1. Attempt drag and drop, and notice that it's no longer available. Success.

## Scenario: Disabling Context Menu

In this section, we will learn how to disable the default context menu.

**Disabling Context Menu**
1. To start, run your app as-is and open the contenxt menu, or right-click, anywhere in the webview. The context menu displays the default choices.

    :::image type="complex" source="./media/contextmenu.png" alt-text="The default context menu" lightbox="./media/contextmenu.png":::
   The default context menu  
    :::image-end:::  

1. Now lets disable this menu by inserting this line of code into the InitializeAsync() function inside `MainWindow.xaml.cs`.    
    ```c#   
    await webView.CoreWebView2.ExecuteScriptAsync("window.addEventListener('contextmenu', window => {window.preventDefault();});");
    ```
1. Run the code. Confirm that opening the context menu isn't available. 

## See also  

*   To get started using WebView2, see [WebView2 Getting Started Guides][Webview2MainGettingStarted].  
*   For a comprehensive example of WebView2 capabilities, see the [WebView2Samples][GithubMicrosoftedgeWebview2samples] repo on GitHub.
*   For more detailed information about WebView2 APIs, see [API reference][Webview2ApiReference].
*   For more information about WebView2, see [WebView2 Resources][Webview2MainNextSteps].

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
