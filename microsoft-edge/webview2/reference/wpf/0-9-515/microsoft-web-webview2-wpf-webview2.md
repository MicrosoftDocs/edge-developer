---
description: Embed web technologies (HTML, CSS, and JavaScript) in your native applications with the Microsoft Edge WebView2 control
title: Microsoft.Web.WebView2.Wpf.WebView2
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/17/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: Microsoft.Web.WebView2, Core, webview2, webview, dotnet, wpf, winforms, app, edge, CoreWebView2, CoreWebView2Controller, browser control, edge html, Microsoft.Web.WebView2.Wpf.WebView2
---

# Microsoft.Web.WebView2.Wpf.WebView2 class 

Namespace: Microsoft.Web.WebView2.Wpf\
Assembly: Microsoft.Web.WebView2.Wpf.dll

```
class Microsoft.Web.WebView2.Wpf.WebView2
  : public HwndHost
```

A control to embed web content in a WPF application.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[ContentLoading](#contentloading) | A wrapper around the CoreWebView2.ContentLoading event of CoreWebView2.
[CoreWebView2Ready](#corewebview2ready) | This event is triggered when the control's CoreWebView2 has finished being initialized (regardless of how initialization was triggered) but before it is used for anything.
[NavigationCompleted](#navigationcompleted) | A wrapper around the CoreWebView2.NavigationCompleted event of CoreWebView2.
[NavigationStarting](#navigationstarting) | A wrapper around the CoreWebView2.NavigationStarting event of CoreWebView2.
[SourceChanged](#sourcechanged) | A wrapper around the CoreWebView2.SourceChanged event of CoreWebView2.
[WebMessageReceived](#webmessagereceived) | A wrapper around the CoreWebView2.WebMessageReceived event of CoreWebView2.
[ZoomFactorChanged](#zoomfactorchanged) | The event fires when the ZoomFactor property of the WebView changes.
[CanGoBack](#cangoback) | Returns true if the WebView can navigate to a previous page in the navigation history.
[CanGoForward](#cangoforward) | Returns true if the WebView can navigate to a next page in the navigation history.
[CoreWebView2](#corewebview2) | Access the complete functionality of the underlying Core.CoreWebView2 COM API.
[CreationProperties](#creationproperties) | Gets or sets a bag of options which are used during initialization of the control's CoreWebView2.
[Source](#source) | The top-level Uri which the WebView is currently displaying (or will display once initialization of its CoreWebView2 is finished).
[ZoomFactor](#zoomfactor) | The zoom factor for the WebView.
[EnsureCoreWebView2Async](#ensurecorewebview2async) | Explicitly trigger initialization of the control's CoreWebView2.
[ExecuteScriptAsync](#executescriptasync) | Executes JavaScript code from the javaScript parameter in the current top level document rendered in the WebView.
[GoBack](#goback) | Navigates the WebView to the previous page in the navigation history.
[GoForward](#goforward) | Navigates the WebView to the next page in the navigation history.
[NavigateToString](#navigatetostring) | Initiates a navigation to htmlContent as source HTML of a new document.
[Reload](#reload) | Reloads the current page.
[Stop](#stop) | Stops all navigations and pending resource fetches.
[WebView2](#webview2) | Creates a new instance of a WebView2 control.

This control is effectively a wrapper around the WebView2 COM API, which you can find documentation for here: [https://aka.ms/webview2](https://aka.ms/webview2) You can directly access the underlying ICoreWebView2 interface and all of its functionality by accessing the CoreWebView2 property. Some of the most common COM functionality is also accessible directly through wrapper methods/properties/events on the control.

Upon creation, the control's CoreWebView2 property will be null. This is because creating the CoreWebView2 is an expensive operation which involves things like launching Edge browser processes. There are two ways to cause the CoreWebView2 to be created: 1) Call the EnsureCoreWebView2Async method. This is referred to as explicit initialization. 2) Set the Source property (which could be done from markup, for example). This is referred to as implicit initialization. Either option will start initialization in the background and return back to the caller without waiting for it to finish. To specify options regarding the initialization process, either pass your own CoreWebView2Environment to EnsureCoreWebView2Async or set the control's CreationProperties property prior to initialization.

When initialization has finished (regardless of how it was triggered) then the following things will occur, in this order: 1) The control's CoreWebView2Ready event will be invoked. If you need to perform one time setup operations on the CoreWebView2 prior to its use then you should do so in a handler for that event. 2) If a Uri has been set to the Source property then the control will start navigating to it in the background (i.e. these steps will continue without waiting for the navigation to finish). 3) The Task returned from EnsureCoreWebView2Async will complete.

For more details about any of the methods/properties/events involved in the initialization process, see its specific documentation.

Because the control's CoreWebView2 is a very heavyweight object (potentially responsible for multiple running processes and megabytes of disk space) the control implements IDisposable to provide an explicit means to free it. Calling Dispose will release the CoreWebView2 and its underlying resources (except any that are also being used by other WebViews), and reset CoreWebView2 to null. After Dispose has been called the CoreWebView2 cannot be re-initialized, and any attempt to use functionality which requires it will throw an ObjectDisposedException.

Note that this control extends HwndHost in order to embed windows which live outside of the WPF ecosystem. This has some implications regarding the control's input and output behavior as well as the functionality it "inherits" from UIElement and FrameworkElement. See the HwndHost and WPF/Win32 interop documentation for more info:

* [https://docs.microsoft.com/dotnet/api/system.windows.interop.hwndhost](https://docs.microsoft.com/dotnet/api/system.windows.interop.hwndhost)

* [https://docs.microsoft.com/dotnet/framework/wpf/advanced/wpf-and-win32-interoperation#hwnds-inside-wpf](https://docs.microsoft.com/dotnet/framework/wpf/advanced/wpf-and-win32-interoperation#hwnds-inside-wpf)

## Members

#### ContentLoading 

A wrapper around the CoreWebView2.ContentLoading event of CoreWebView2.

> public event EventHandler< CoreWebView2ContentLoadingEventArgs > [ContentLoading](#contentloading)

The only difference between this event and CoreWebView2.ContentLoading is the first parameter that's passed to handlers. Handlers of this event will receive the WebView2 control, whereas handlers of CoreWebView2.ContentLoading will receive the CoreWebView2 instance.

#### CoreWebView2Ready 

This event is triggered when the control's CoreWebView2 has finished being initialized (regardless of how initialization was triggered) but before it is used for anything.

> public event EventHandler< EventArgs > [CoreWebView2Ready](#corewebview2ready)

You should handle this event if you need to perform one time setup operations on the CoreWebView2 which you want to affect all of its usages (e.g. adding event handlers, configuring settings, installing document creation scripts, adding host objects). See the WebView2 class documentation for an initialization overview.

This event doesn't provide any arguments, and the sender will be the WebView2 control, whose CoreWebView2 property will now be valid (i.e. non-null) for the first time.

#### NavigationCompleted 

A wrapper around the CoreWebView2.NavigationCompleted event of CoreWebView2.

> public event EventHandler< CoreWebView2NavigationCompletedEventArgs > [NavigationCompleted](#navigationcompleted)

The only difference between this event and CoreWebView2.NavigationCompleted is the first parameter that's passed to handlers. Handlers of this event will receive the WebView2 control, whereas handlers of CoreWebView2.NavigationCompleted will receive the CoreWebView2 instance.

#### NavigationStarting 

A wrapper around the CoreWebView2.NavigationStarting event of CoreWebView2.

> public event EventHandler< CoreWebView2NavigationStartingEventArgs > [NavigationStarting](#navigationstarting)

The only difference between this event and CoreWebView2.NavigationStarting is the first parameter that's passed to handlers. Handlers of this event will receive the WebView2 control, whereas handlers of CoreWebView2.NavigationStarting will receive the CoreWebView2 instance.

#### SourceChanged 

A wrapper around the CoreWebView2.SourceChanged event of CoreWebView2.

> public event EventHandler< CoreWebView2SourceChangedEventArgs > [SourceChanged](#sourcechanged)

The only difference between this event and CoreWebView2.SourceChanged is the first parameter that's passed to handlers. Handlers of this event will receive the WebView2 control, whereas handlers of CoreWebView2.SourceChanged will receive the CoreWebView2 instance.

#### WebMessageReceived 

A wrapper around the CoreWebView2.WebMessageReceived event of CoreWebView2.

> public event EventHandler< CoreWebView2WebMessageReceivedEventArgs > [WebMessageReceived](#webmessagereceived)

The only difference between this event and CoreWebView2.WebMessageReceived is the first parameter that's passed to handlers. Handlers of this event will receive the WebView2 control, whereas handlers of CoreWebView2.WebMessageReceived will receive the CoreWebView2 instance.

#### ZoomFactorChanged 

The event fires when the ZoomFactor property of the WebView changes.

> public event EventHandler< EventArgs > [ZoomFactorChanged](#zoomfactorchanged)

This event directly exposes CoreWebView2Controller.ZoomFactorChanged, see its documentation for more info.

#### CanGoBack 

Returns true if the WebView can navigate to a previous page in the navigation history.

> public bool [CanGoBack](#cangoback)

Wrapper around the CoreWebView2.CanGoBack property of CoreWebView2. If CoreWebView2 isn't initialized yet then returns false.

#### CanGoForward 

Returns true if the WebView can navigate to a next page in the navigation history.

> public bool [CanGoForward](#cangoforward)

Wrapper around the CoreWebView2.CanGoForward property of CoreWebView2. If CoreWebView2 isn't initialized yet then returns false.

#### CoreWebView2 

Access the complete functionality of the underlying Core.CoreWebView2 COM API.

> public CoreWebView2 [CoreWebView2](#corewebview2)

Returns null until initialization has completed. See the WebView2 class documentation for an initialization overview.

##### Exceptions
* `InvalidOperationException` Thrown if the calling thread isn't the thread which created this object (usually the UI thread). See DispatcherObject.VerifyAccess for more info.

* `ObjectDisposedException` Thrown if Dispose has already been called on the control.

#### CreationProperties 

Gets or sets a bag of options which are used during initialization of the control's CoreWebView2.

> public CoreWebView2CreationProperties [CreationProperties](#creationproperties)

Setting this property won't work after initialization of the control's CoreWebView2 has started (the old value will be retained). See the WebView2 class documentation for an initialization overview.

#### Source 

The top-level Uri which the WebView is currently displaying (or will display once initialization of its CoreWebView2 is finished).

> public Uri [Source](#source)

Generally speaking, getting this property is equivalent to getting the CoreWebView2.Source property of CoreWebView2 and setting this property (to a different value) is equivalent to calling the CoreWebView2.Navigate method on CoreWebView2. A value of null has the same meaning as "about:blank" (see remarks for more info). Getting this property before the CoreWebView2 has been initialized will retrieve the last Uri which was set to it, or null (the default) if none has been. Setting this property before the CoreWebView2 has been initialized will cause initialization to start in the background (if not already in progress), after which the WebView2 will navigate to the specified Uri. See the WebView2 class documentation for an initialization overview.

If this property is null then the CoreWebView2 will be showing "about:blank" (or if set to null then the CoreWebView2 will be navigated to "about:blank"). It is also possible for this property to have (or be set to) the explicit value "about:blank", which has the same effect on the CoreWebView2. In other words, if the CoreWebView2 is showing "about:blank", then this property's value might be either null or "about:blank". However, null and "about:blank" are distinct values of this property and not treated as equal to each other. This is important for control initialization because it means that changing the value from null (its default) to "about:blank" is still a change and will still trigger implicit initialization. 

##### Exceptions
* `ObjectDisposedException` Thrown if Dispose has already been called on the control.

#### ZoomFactor 

The zoom factor for the WebView.

> public double [ZoomFactor](#zoomfactor)

This property directly exposes CoreWebView2Controller.ZoomFactor, see its documentation for more info. Getting this property before the CoreWebView2 has been initialized will retrieve the last value which was set to it, or 1.0 (the default) if none has been. The most recent value set to this property before the CoreWebView2 has been initialized will be set on it after initialization.

#### EnsureCoreWebView2Async 

Explicitly trigger initialization of the control's CoreWebView2.

> public Task [EnsureCoreWebView2Async](#ensurecorewebview2async)(CoreWebView2Environment environment)

See the WebView2 class documentation for an initialization overview.

##### Parameters
* `environment` A pre-created CoreWebView2Environment that should be used to create the CoreWebView2. Creating your own environment gives you control over several options that affect how the CoreWebView2 is initialized. If you pass an environment to this method then it will override any settings specified on the CreationProperties property. If you pass null (the default value) and no value has been set to CreationProperties then a default environment will be created and used automatically. 

##### Returns
A Task that represents the background initialization process. When the task completes then the CoreWebView2 property will be available for use (i.e. non-null). Note that the control's CoreWebView2Ready event will be invoked before the task completes. 

Calling this method additional times will have no effect (any specified environment is ignored) and return the same Task as the first call. Calling this method after initialization has been implicitly triggered by setting the Source property will have no effect (any specified environment is ignored) and simply return a Task representing that initialization already in progress. Note that even though this method is asynchronous and returns a Task, it still must be called on the UI thread like most public functionality of most UI controls. 

##### Exceptions
* `InvalidOperationException` Thrown if the calling thread isn't the thread which created this object (usually the UI thread). See DispatcherObject.VerifyAccess for more info.

* `ObjectDisposedException` Thrown if Dispose has already been called on the control.

#### ExecuteScriptAsync 

Executes JavaScript code from the javaScript parameter in the current top level document rendered in the WebView.

> public async Task< string > [ExecuteScriptAsync](#executescriptasync)(string javaScript)

Equivalent to calling CoreWebView2.ExecuteScriptAsync on CoreWebView2

##### Exceptions
* `InvalidOperationException` Thrown if CoreWebView2 hasn't been initialized yet.

* `InvalidOperationException` Thrown if the calling thread isn't the thread which created this object (usually the UI thread). See DispatcherObject.VerifyAccess for more info.

* `ObjectDisposedException` Thrown if Dispose has already been called on the control.

#### GoBack 

Navigates the WebView to the previous page in the navigation history.

> public void [GoBack](#goback)()

Equivalent to calling CoreWebView2.GoBack on CoreWebView2 If CoreWebView2 hasn't been initialized yet then does nothing.

##### Exceptions
* `InvalidOperationException` Thrown if the calling thread isn't the thread which created this object (usually the UI thread). See DispatcherObject.VerifyAccess for more info.

* `ObjectDisposedException` Thrown if Dispose has already been called on the control.

#### GoForward 

Navigates the WebView to the next page in the navigation history.

> public void [GoForward](#goforward)()

Equivalent to calling CoreWebView2.GoForward on CoreWebView2 If CoreWebView2 hasn't been initialized yet then does nothing.

##### Exceptions
* `InvalidOperationException` Thrown if the calling thread isn't the thread which created this object (usually the UI thread). See DispatcherObject.VerifyAccess for more info.

* `ObjectDisposedException` Thrown if Dispose has already been called on the control.

#### NavigateToString 

Initiates a navigation to htmlContent as source HTML of a new document.

> public void [NavigateToString](#navigatetostring)(string htmlContent)

Equivalent to calling CoreWebView2.NavigateToString on CoreWebView2

##### Exceptions
* `InvalidOperationException` Thrown if CoreWebView2 hasn't been initialized yet.

"
<exception cref="InvalidOperationException">Thrown if the calling thread isn't the thread which created this object (usually the UI thread).  See DispatcherObject.VerifyAccess for more info.</exception>
<exception cref="ObjectDisposedException">Thrown if Dispose has already been called on the control.

#### Reload 

Reloads the current page.

> public void [Reload](#reload)()

Equivalent to calling CoreWebView2.Reload on CoreWebView2

##### Exceptions
* `InvalidOperationException` Thrown if CoreWebView2 hasn't been initialized yet.

"
<exception cref="InvalidOperationException">Thrown if the calling thread isn't the thread which created this object (usually the UI thread).  See DispatcherObject.VerifyAccess for more info.</exception>
<exception cref="ObjectDisposedException">Thrown if Dispose has already been called on the control.

#### Stop 

Stops all navigations and pending resource fetches.

> public void [Stop](#stop)()

Equivalent to calling CoreWebView2.Stop on CoreWebView2

##### Exceptions
* `InvalidOperationException` Thrown if CoreWebView2 hasn't been initialized yet.

"
<exception cref="InvalidOperationException">Thrown if the calling thread isn't the thread which created this object (usually the UI thread).  See DispatcherObject.VerifyAccess for more info.</exception>
<exception cref="ObjectDisposedException">Thrown if Dispose has already been called on the control.

#### WebView2 

Creates a new instance of a WebView2 control.

> public [WebView2](#webview2)()

Note that the control's CoreWebView2 will be null until initialized. See the WebView2 class documentation for an initialization overview.

