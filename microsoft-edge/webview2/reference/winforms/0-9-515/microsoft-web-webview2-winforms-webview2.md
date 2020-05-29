---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/27/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---

# Microsoft.Web.WebView2.WinForms.WebView2 class 

Namespace: Microsoft.Web.WebView2.WinForms\
Assembly: Microsoft.Web.WebView2.WinForms.dll

```
class Microsoft.Web.WebView2.WinForms.WebView2
  : public Control
```

Control to embed WebView2 in WinForms.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[ContentLoading](#contentloading) | ContentLoading dispatches after a navigation begins to a new URI and the content of that URI begins to render.
[CoreWebView2Ready](#corewebview2ready) | This event is triggered when the control's [CoreWebView2](#corewebview2) has finished being initialized (regardless of how initialization was triggered) but before it is used for anything.
[NavigationCompleted](#navigationcompleted) | NavigationCompleted dispatches after a navigate of the top level document completes rendering either successfully or not.
[NavigationStarting](#navigationstarting) | NavigationStarting dispatches before a new navigate starts for the top level document of the WebView2.
[SourceChanged](#sourcechanged) | SourceChanged dispatches after the Source property changes.
[WebMessageReceived](#webmessagereceived) | WebMessageReceived dispatches after web content sends a message to the app host via `chrome.webview.postMessage`.
[CoreWebView2](#corewebview2) | The underlying CoreWebView2.
[Source](#source) | The Source property is the URI of the top level document of the WebView2.
[ZoomFactor](#zoomfactor) | The zoom factor for the WebView.
[CanGoBack](#cangoback) | Returns true if the webview can navigate to a previous page in the navigation history via the GoBack method.
[CanGoForward](#cangoforward) | Returns true if the webview can navigate to a next page in the navigation history via the GoForward method.
[EnsureCoreWebView2Async](#ensurecorewebview2async) | Explicitly trigger initialization of the control's [CoreWebView2](#corewebview2).
[ExecuteScriptAsync](#executescriptasync) | Executes the provided script in the top level document of the WebView2.
[GoBack](#goback) | Navigate to the previous page in navigation history.
[GoForward](#goforward) | Navigate to the next page in navigation history.
[NavigateToString](#navigatetostring) | Render the provided HTML as the top level document of the WebView2.
[Reload](#reload) | Reload the top level document of the WebView2.
[Stop](#stop) | Stop any in progress navigation in the WebView2.
[WebView2](#webview2) | Create a new WebView2 WinForms control.

## Members

#### ContentLoading 

ContentLoading dispatches after a navigation begins to a new URI and the content of that URI begins to render.

> public event EventHandler< CoreWebView2ContentLoadingEventArgs > [ContentLoading](#contentloading)

This is equivalent to the ContentLoading event on the CoreWebView2. See CoreWebView2.ContentLoading documentation for more information.

#### CoreWebView2Ready 

This event is triggered when the control's [CoreWebView2](#corewebview2) has finished being initialized (regardless of how initialization was triggered) but before it is used for anything.

> public event EventHandler< EventArgs > [CoreWebView2Ready](#corewebview2ready)

You should handle this event if you need to perform one time setup operations on the CoreWebView2 which you want to affect all of its usages (e.g. adding event handlers, configuring settings, installing document creation scripts, adding host objects).

This event doesn't provide any arguments, and the sender will be the WebView2 control, whose CoreWebView2 property will now be valid (i.e. non-null) for the first time.

#### NavigationCompleted 

NavigationCompleted dispatches after a navigate of the top level document completes rendering either successfully or not.

> public event EventHandler< CoreWebView2NavigationCompletedEventArgs > [NavigationCompleted](#navigationcompleted)

This is equivalent to the NavigationCompleted event on the CoreWebView2. See CoreWebView2.NavigationCompleted documentation for more information.

#### NavigationStarting 

NavigationStarting dispatches before a new navigate starts for the top level document of the WebView2.

> public event EventHandler< CoreWebView2NavigationStartingEventArgs > [NavigationStarting](#navigationstarting)

This is equivalent to the NavigationStarting event on the CoreWebView2. See CoreWebView2.NavigationStarting documentation for more information.

#### SourceChanged 

SourceChanged dispatches after the Source property changes.

> public event EventHandler< CoreWebView2SourceChangedEventArgs > [SourceChanged](#sourcechanged)

This may happen during a navigation or if otherwise the script in the page changes the URI of the document. This is equivalent to the SourceChanged event on the CoreWebView2. See CoreWebView2.SourceChanged documentation for more information.

#### WebMessageReceived 

WebMessageReceived dispatches after web content sends a message to the app host via `chrome.webview.postMessage`.

> public event EventHandler< CoreWebView2WebMessageReceivedEventArgs > [WebMessageReceived](#webmessagereceived)

This is equivalent to the WebMessageReceived event on the CoreWebView2. See CoreWebView2.WebMessageReceived documentation for more information.

#### CoreWebView2 

The underlying CoreWebView2.

> public CoreWebView2 [CoreWebView2](#corewebview2)

Use this property to perform more operations on the WebView2 content than is exposed on the WebView2. This value is null until it is initialized. You can force the underlying CoreWebView2 to initialize via the InitializeAsync method.

#### Source 

The Source property is the URI of the top level document of the WebView2.

> public Uri [Source](#source)

Setting the Source is equivalent to calling CoreWebView2.Navigate. If the underlying CoreWebView2 is not yet initialized, this property is "about:blank". If the property is set to a non-absolute URI or null, the property remains unchanged. See CoreWebView2.Navigate documentation for more information.

#### ZoomFactor 

The zoom factor for the WebView.

> public double [ZoomFactor](#zoomfactor)

#### CanGoBack 

Returns true if the webview can navigate to a previous page in the navigation history via the GoBack method.

> public bool [CanGoBack](#cangoback)

This is equivalent to the CanGoBack property on the CoreWebView2. If the underlying CoreWebView2 is not yet initialized, this property is false. See CoreWebView2.CanGoBack documentation for more information.

#### CanGoForward 

Returns true if the webview can navigate to a next page in the navigation history via the GoForward method.

> public bool [CanGoForward](#cangoforward)

This is equivalent to the CanGoForward property on the CoreWebView2. If the underlying CoreWebView2 is not yet initialized, this property is false. See CoreWebView2.CanGoForward documentation for more information.

#### EnsureCoreWebView2Async 

Explicitly trigger initialization of the control's [CoreWebView2](#corewebview2).

> public Task [EnsureCoreWebView2Async](#ensurecorewebview2async)(CoreWebView2Environment environment)

##### Parameters
* `environment` A pre-created CoreWebView2Environment that should be used to create the CoreWebView2. Creating your own environment gives you control over several options that affect how the CoreWebView2 is initialized. If you pass null (the default value) then a default environment will be created and used automatically. 

##### Returns
A Task that represents the background initialization process. When the task completes then the CoreWebView2 property will be available for use (i.e. non-null). Note that the control's [CoreWebView2Ready](#corewebview2ready) event will be invoked before the task completes. 

Calling this method additional times will have no effect (any specified environment is ignored) and return the same Task as the first call. Calling this method after initialization has been implicitly triggered by setting the [Source](#source) property will have no effect (any specified environment is ignored) and simply return a Task representing that initialization already in progress. 

##### Exceptions
* `System.InvalidOperationException` Thrown when invoked from non-UI thread.

#### ExecuteScriptAsync 

Executes the provided script in the top level document of the WebView2.

> public async Task< string > [ExecuteScriptAsync](#executescriptasync)(string script)

This is equivalent to the ExecuteScriptAsync method on the CoreWebView2. If the underlying CoreWebView2 is not yet initialized, this method throws an InvalidOperationException. See CoreWebView2.ExecuteScriptAsync documentation for more information.

#### GoBack 

Navigate to the previous page in navigation history.

> public void [GoBack](#goback)()

This is equivalent to the GoBack method on the CoreWebView2. If the underlying CoreWebView2 is not yet initialized, this method does nothing. See CoreWebView2.GoBack documentation for more information.

#### GoForward 

Navigate to the next page in navigation history.

> public void [GoForward](#goforward)()

This is equivalent to the GoForward method on the CoreWebView2. If the underlying CoreWebView2 is not yet initialized, this method does nothing. See CoreWebView2.GoForward documentation for more information.

#### NavigateToString 

Render the provided HTML as the top level document of the WebView2.

> public void [NavigateToString](#navigatetostring)(string htmlContent)

This is equivalent to the NavigateToString method on the CoreWebView2. If the underlying CoreWebView2 is not yet initialized, this method throws an InvalidOperationException. See CoreWebView2.NavigateToString documentation for more information.

#### Reload 

Reload the top level document of the WebView2.

> public void [Reload](#reload)()

This is equivalent to the Reload method on the CoreWebView2. If the underlying CoreWebView2 is not yet initialized, this method throws an InvalidOperationException. See CoreWebView2.Reload documentation for more information.

#### Stop 

Stop any in progress navigation in the WebView2.

> public void [Stop](#stop)()

This is equivalent to the Stop method on the CoreWebView2. If the underlying CoreWebView2 is not yet initialized, this method does nothing. See CoreWebView2.Stop documentation for more information.

#### WebView2 

Create a new WebView2 WinForms control.

> public [WebView2](#webview2)()

After construction the CoreWebView2 property is null. Call [EnsureCoreWebView2Async](#ensurecorewebview2async) to initialize the underlying CoreWebView2.

