---
description: Learn how to use JavaScript in complex scenarios in WebView2 apps
title: Use JavaScript in WebView for extended scenarios
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


<!-- ====================================================================== -->
## Before you begin

This article assumes that you already have a working project.  If you don't have a project, and want to follow along, see the [WebView2 get started guides](../index.md#get-started).


<!-- ====================================================================== -->
## Basic WebView2 functions

Use the following functions to begin embedding JavaScript in your WebView app.

| API  | Description  |
|:--- |:--- |
| [ExecuteScriptAsync](/dotnet/api/microsoft.web.webview2.wpf.webview2.executescriptasync) | Run JavaScript in a WebView control. For more information, navigate to the Get Started tutorial. |
| [OnDocumentCreatedAsync](/microsoft-edge/webview2/reference/win32/icorewebview2#addscripttoexecuteondocumentcreated) | Runs when the Document Object Model (DOM) is created. |


<!-- ====================================================================== -->
## Scenario: Running a dedicated script file

In this section, you access a dedicated JavaScript file from your WebView2 control.

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


<!-- ====================================================================== -->
## Scenario: Removing drag-and-drop functionality

In this section, you use JavaScript to remove the drag-and-drop functionality from your WebView2 control.

To begin, explore the current drag-and-drop functionality:

1.  Create a `.txt` file in order to drag-and-drop.  For example, create a file named `contoso.txt` and add text to it.

1.  Run your project.

1.  Drag-and-drop the `contoso.txt` file onto the WebView control.  A new window opens, which is the result of the code in your sample project.

    :::image type="content" source="./media/drag-text.png" alt-text="Result of dragging and dropping contoso.txt." lightbox="./media/drag-text.png":::

Next, add code to remove the drag-and-drop functionality from the WebView2 control:

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

1.  Try to drag-and-drop `contoso.txt`.  Confirm that you're not able to drag-and-drop.


<!-- ====================================================================== -->
## Scenario: Removing the context menu

In this section, you remove the default context menu (right-click menu) from your WebView2 control.

To begin, explore the current functionality of the right-click menu:

1.  Run your project.

1.  Right-click anywhere on the WebView2 control.  The context menu displays the default right-click menu commands.

    :::image type="content" source="./media/context-menu.png" alt-text="The right-click menu, showing the default commands." lightbox="./media/context-menu.png":::

Now add code to remove the contextual menu functionality from the WebView2 control.

1.  Copy and paste the following code snippet into `InitializeAsync()` in `MainWindow.xaml.cs`.

    ```csharp
    await webView.CoreWebView2.ExecuteScriptAsync("window.addEventListener('contextmenu', window => {window.preventDefault();});");
    ```

1.  Run the code again.  Confirm that you're not able to open a context menu (right-click).


<!-- ====================================================================== -->
## See also

*  [WebView2 get started guides](../index.md#get-started)
*  [WebView2Samples repo](https://github.com/MicrosoftEdge/WebView2Samples) - a comprehensive example of WebView2 capabilities.
*  [WebView2 API reference](../webview2-api-reference.md)
*  [See also](../index.md#see-also) in _Introduction to Microsoft Edge WebView2_.
