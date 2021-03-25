---
description: Threading model
title: Threading model | WebView2
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 02/24/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, wpf apps, wpf, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---
# Threading model 

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

The WebView2 must be created on a UI thread.  Specifically, a thread with a message pump.  All callbacks occur on that thread and requests into the WebView2 must be done on that thread.  Because all callbacks occur on that thread, blocking the UI thread of the WebView2 will also block all WebView2 event handlers and WebView2 asynchronous method completion handlers. For example, using [Task.Result][TaskResultDocumentation] or [WaitForSingleObject][WaitForSingleObjectDocumentation] will block the message pump on a UI thread and so will block all WebView2 event handlers and WebView2 asynchronous method completion handlers. Instead use an asynchronous await mechanism such as await or anything else that won't block the message pump.

It is not safe to use the WebView2 from another thread.  The only exception is for the `Content` property of `CoreWebView2WebResourceRequest`.  The `Content` property stream is read from a background thread.  The stream should be agile or be created from a background STA to prevent performance impact to the UI thread.  

## Re-entrancy  

Callbacks including event handlers and completion handlers run serially.  
After you run an event handler and begin a message loop, you are unable to run any event handler or completion callback in a re-entrant manner.  

## Deferrals  

Some WebView2 events read values set on the related event arguments or start some action after the event handler completes.  If you also need to run an asynchronous operation such an event handler, use the `GetDeferral` method on the event arguments of the associated events.  The returned `Deferral` object ensures the event handler is not considered complete until the `Complete` method of the `Deferral` is requested.  

For instance, you may use the `NewWindowRequested` event to provide a `CoreWebView2` to connect as a child window when the event handler completes.  But if you need to asynchronously create the `CoreWebView2`, request the `GetDeferral` method on the `NewWindowRequestedEventArgs`.  After you have asynchronously created the `CoreWebView2` and set the `NewWindow` property on the `NewWindowRequestedEventArgs`, request `Complete` on the `Deferral` object be returned using the `GetDeferral` method.  

## See also  

*   To get started using WebView2, navigate to [WebView2 Getting Started Guides][Webview2IndexGettingStarted] guides.  
*   For a comprehensive example of WebView2 capabilities, navigate to [WebView2Samples repo][GithubMicrosoftedgeWebview2samples] on GitHub.  
*   For more detailed information about WebView2 APIs, navigate to [API reference][DotnetApiMicrosoftWebWebview2WpfWebview2].  
*   For more information about WebView2, navigate to [WebView2 Resources][Webview2IndexNextSteps].  

## Getting in touch with the Microsoft Edge WebView team  

[!INCLUDE [contact WebView team note](../includes/contact-webview-team-note.md)]  

<!-- links -->  

[Webview2IndexGettingStarted]: ../index.md#getting-started "Getting started - Introduction to Microsoft Edge WebView2 | Microsoft Docs"  
[Webview2IndexNextSteps]: ../index.md#next-steps "Next steps - Introduction to Microsoft Edge WebView2 | Microsoft Docs"  

[DotnetApiMicrosoftWebWebview2WpfWebview2]: /dotnet/api/microsoft.web.webview2.wpf.webview2 "WebView2 Class | Microsoft Docs"  

[WindowsWin32ComSingleThreadedApartments]: /windows/win32/com/single-threaded-apartments "Single-Threaded Apartments | Microsoft Docs"  
[WindowsWin32ComTheComponentObjectModel]: /windows/win32/com/the-component-object-model "The Component Object Model | Microsoft Docs"  

[GithubMicrosoftedgeWebview2samples]: https://github.com/MicrosoftEdge/WebView2Samples "WebView2 Samples - MicrosoftEdge/WebView2Samples | GitHub"  
[TaskResultDocumentation]: https://docs.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1.result?view=net-5.0#remarks "Task<TResult>.Result Property (System.Threading.Tasks) | Microsoft Docs"
[WaitForSingleObjectDocumentation]: https://docs.microsoft.com/en-us/windows/win32/api/synchapi/nf-synchapi-waitforsingleobject "WaitForSingleObject function (synchapi.h) - Win32 apps | Microsoft Docs"
