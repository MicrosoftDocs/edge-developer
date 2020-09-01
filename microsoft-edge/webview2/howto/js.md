---
description: Learn how to use JavaScript in WebView2
title: Using JavaScript in WebView2
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 08/26/2020
ms.topic: how-to
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# Using JavaScript in WebView2

The ability to use JavaScript in a WebView2 context allows you to customize any app to fit your app's needs. In this guide we will explore some important functions as well as walk through a couple examples of how you can use these functions to empower your app. 

## Starter Code

This guide will continue from where the [WPF Getting Started Guide](https://docs.microsoft.com/en-us/microsoft-edge/webview2/gettingstarted/wpf) left off. Although this guide will be using WPF, the essence will be the same for other frameworks like Win32, .NET, and WinUI.

To clone the code from the past tutorial visit the WPF SampleApp's [Github Repository](https://github.com/MicrosoftEdge/WebView2Samples/tree/master/GettingStartedGuides/WPF_GettingStarted).

## Important Functions
Following are some basic functions to begin embedding javascript within your WebView application.

1. [**ExecuteScriptAsync**](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/wpf/0-9-515/microsoft-web-webview2-wpf-webview2#executescriptasync): In the Getting Started tutorial, we used this function to execute javascript within our WebView context. 
1. [**OnDocumentCreatedAsync**](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/0-9-538/icorewebview2#addscripttoexecuteondocumentcreated): This function is executed when the DOM is created.

## Tutorial: Disabling Drag and Drop

In this tutorial we will use javascript to disable WebView's drag and drop feature.

Lets experiment drag and drops current functionality. 

1. Create a file you would like to drag and drop. For this example, I created a .txt file with some random text.
1. Run the sample project code. 

    :::image type="complex" source="./media/start_dd.png" alt-text="Test file and Webview" lightbox="./media/start_dd.png":::
   Test file and Webview  
    :::image-end:::  

1. Attempt to drag and drop the test file onto the WebView control. A new window should pop up. This means the drag and drop functionality is working correctly.

Now let's add some code to disable this functionality.

1. In the InitializeAsync() method add the following code:

    ```c#   
    await webView.CoreWebView2.AddScriptToExecuteOnDocumentCreatedAsync("window.addEventListener('dragover',function(e){e.preventDefault();},false);");

    await webView.CoreWebView2.AddScriptToExecuteOnDocumentCreatedAsync("window.addEventListener('drop',function(e){" +
    "e.preventDefault();" +
    "console.log(e.dataTransfer);" +
    "console.log(e.dataTransfer.files[0])" +
    "}, false);");
    ```
1. Run your app. 
1. Attempt drag and drop, and notice how it is now disabled - success!

## Tutorial: Editing Context Menu

https://www.sitepoint.com/building-custom-right-click-context-menu-javascript/




<!-- links -->  

[DevtoolsGuideChromiumMain]: ../../devtools-guide-chromium.md "Microsoft Edge (Chromium) Developer Tools"  


