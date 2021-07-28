---
description: In the WebView2 threading model, the WebView2 must be created on a UI thread with a message pump.
title: Threading model for WebView2
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/28/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, wpf apps, wpf, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---
# Threading model for WebView2

:::row:::
   :::column span="1":::
      Supported platforms:
   :::column-end:::
   :::column span="2":::
      Win32, Windows Forms, WinUi, WPF
   :::column-end:::
:::row-end:::  

The WebView2 control is based on the [Component Object Model (COM)][WindowsWin32ComTheComponentObjectModel] and must run on a [Single Threaded Apartments (STA)][WindowsWin32ComSingleThreadedApartments] thread.  

## Thread safety  

The WebView2 must be created on a UI thread that uses a message pump.  All callbacks occur on that thread and requests into the WebView2 must be done on that thread.  It isn't safe to use the WebView2 from another thread.  

The only exception is for the `Content` property of `CoreWebView2WebResourceRequest`.  The `Content` property stream is read from a background thread.  The stream should be agile or should be created from a background STA, to prevent performance degradation of the UI thread.  

## Re-entrancy  

Callbacks, including event handlers and completion handlers, run serially.  After you run an event handler and begin a message loop, an event handler or completion callback cannot be run in a re-entrant manner.  If a WebView2 app tries to create a nested message loop or modal UI synchronously within a WebView event handler, this approach leads to attempted reentrancy.  Such reentrancy isn't supported in WebView2 and would leave the event handler in the stack indefinitely.

For example, the following coding approach isn't supported.

```csharp
private void Btn_Click(object sender, EventArgs e)
{
   // Post web message when button is clicked
   this.webView2Control.ExecuteScriptAsync("window.chrome.webview.postMessage(\"Open Dialog\");");
}

private void CoreWebView2_WebMessageReceived(object sender, CoreWebView2WebMessageReceivedEventArgs e)
{
   string msg = e.TryGetWebMessageAsString();
   if (msg == "Open Dialog")
   {
      Form1 form = new Form1(); // Create a new form that contains a new WebView when web message is received.
      form.ShowDialog(); // This will cause a reentrancy issue and cause the newly created WebView inside the modal dialog to hang.
   }
}
```     

Instead, schedule the appropriate work to take place after completion of the event handler, as shown in the following code.

```csharp
private void CoreWebView2_WebMessageReceived(object sender, CoreWebView2WebMessageReceivedEventArgs e)
{
   string msg = e.TryGetWebMessageAsString();
   if (msg == "Open Dialog")
   {
      // Show a modal dialog after the current event handler is completed, to avoid potential reentrancy caused by running a nested message loop in the WebView2 event handler.
      System.Threading.SynchronizationContext.Current.Post((_) => {
         Form1 form = new Form1(); 
         form.ShowDialog();
         form.Closed();
      }, null);
   }
}
``` 

> [!NOTE]
> For WinForms and WPF apps, to get the full call stack for debugging purposes, you must turn on native code debugging for WebView2 apps, as follows.
> 1.  Open your WebView2 project in Visual Studio.
> 1.  In **Solution Explorer**, right-click the WebView2 project and then select **Properties**.  
> 1.  Select the **Debug** tab, and then select the **Enable native code debugging** checkbox, as shown below.

:::image type="complex" source="../media/webview-enable-native-debug.png" alt-text="Enabling native code debugging in Visual Studio" lightbox="../media/webview-enable-native-debug.png":::
   Enabling native code debugging in Visual Studio
:::image-end:::  

## Deferrals  

Some WebView2 events read values that are set on the related event arguments, or start some action after the event handler completes.  If you also need to run an asynchronous operation, such as an event handler, use the `GetDeferral` method on the event arguments of the associated events.  The returned `Deferral` object ensures that the event handler isn't considered complete until the `Complete` method of the `Deferral` is requested.  

For instance, you can use the `NewWindowRequested` event to provide a `CoreWebView2` to connect as a child window when the event handler completes.  But if you need to asynchronously create the `CoreWebView2`, you should request the `GetDeferral` method on the `NewWindowRequestedEventArgs`.  After you've asynchronously created the `CoreWebView2` and set the `NewWindow` property on the `NewWindowRequestedEventArgs`, request `Complete` on the `Deferral` object that's returned by the `GetDeferral` method.  

## Block the UI thread  

WebView2 relies on the message pump of the UI thread to run event handler callbacks and async method completion callbacks.  If you use methods that block the message pump, such as `Task.Result` or `WaitForSingleObject`, then your WebView2 event handlers and async-method completion handlers don't run.  For example, the following code doesn't complete, because `Task.Result` stops the message pump while it waits for `ExecuteScriptAsync` to complete.  Because the message pump is blocked, the `ExecuteScriptAsync` isn't able to complete.

For example, the following code doesn't work, because it uses `Task.Result`.

```csharp
private void Button_Click(object sender, EventArgs e)
{
    string result = webView2Control.CoreWebView2.ExecuteScriptAsync("'test'").Result;
    MessageBox.Show(this, result, "Script Result");
}
```  

Instead, use an asynchronous `await` mechanism such as `async` and `await`, which doesn't block the message pump or the UI thread.  For example:

```csharp
private async void Button_Click(object sender, EventArgs e)
{
    string result = await webView2Control.CoreWebView2.ExecuteScriptAsync("'test'");
    MessageBox.Show(this, result, "Script Result");
}
```  

## See also  

*   To get started using WebView2, navigate to [WebView2 Get Started Guides][Webview2IndexGetStarted].  
*   For a comprehensive example of WebView2 capabilities, navigate to [WebView2Samples repo][GithubMicrosoftedgeWebview2samples] on GitHub.  
*   For more detailed information about WebView2 APIs, navigate to [API reference][DotnetApiMicrosoftWebWebview2WpfWebview2].  
*   For more information about WebView2, navigate to [WebView2 Resources][Webview2IndexNextSteps].  

## Getting in touch with the Microsoft Edge WebView team  

[!INCLUDE [contact WebView team note](../includes/contact-webview-team-note.md)]  

<!-- links -->  
[Webview2IndexGetStarted]: ../index.md#get-started "Get started - Introduction to Microsoft Edge WebView2 | Microsoft Docs"  
[Webview2IndexNextSteps]: ../index.md#next-steps "Next steps - Introduction to Microsoft Edge WebView2 | Microsoft Docs"  
<!-- external links -->
[DotnetApiMicrosoftWebWebview2WpfWebview2]: /dotnet/api/microsoft.web.webview2.wpf.webview2 "WebView2 Class | Microsoft Docs"  

[WindowsWin32ComSingleThreadedApartments]: /windows/win32/com/single-threaded-apartments "Single-Threaded Apartments | Microsoft Docs"  
[WindowsWin32ComTheComponentObjectModel]: /windows/win32/com/the-component-object-model "The Component Object Model | Microsoft Docs"  

[GithubMicrosoftedgeWebview2samples]: https://github.com/MicrosoftEdge/WebView2Samples "WebView2 Samples - MicrosoftEdge/WebView2Samples | GitHub"  
