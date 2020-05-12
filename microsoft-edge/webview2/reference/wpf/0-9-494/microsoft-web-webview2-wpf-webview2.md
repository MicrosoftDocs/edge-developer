---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/12/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
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
[ContentLoading](#contentloading) | A wrapper around CoreWebView2.ContentLoading.
[CoreWebView2Ready](#corewebview2ready) | This event is triggered when the control's CoreWebView2 has finished being initialized (regardless of how initialization was triggered) but before it is used for anything.
[NavigationCompleted](#navigationcompleted) | A wrapper around CoreWebView2.NavigationCompleted.
[NavigationStarting](#navigationstarting) | A wrapper around CoreWebView2.NavigationStarting.
[SourceChanged](#sourcechanged) | A wrapper around CoreWebView2.SourceChanged.
[WebMessageReceived](#webmessagereceived) | A wrapper around CoreWebView2.WebMessageReceived.
[CanGoBack](#cangoback) | Wrapper around CoreWebView2.CanGoBack.
[CanGoForward](#cangoforward) | Wrapper around CoreWebView2.CanGoForward.
[CoreWebView2](#corewebview2) | Access the complete functionality of the underlying Core.CoreWebView2 COM API.
[CreationProperties](#creationproperties) | Gets or sets a bag of options which are used during initialization of the control's CoreWebView2.
[Source](#source) | The Uri which the control is currently displaying (or will display once initialization of its CoreWebView2 is finished).
[EnsureCoreWebView2Async](#ensurecorewebview2async) | Explicitly trigger initialization of the control's CoreWebView2.
[ExecuteScriptAsync](#executescriptasync) | Equivalent to calling CoreWebView2.ExecuteScriptAsync.
[GoBack](#goback) | Equivalent to calling CoreWebView2.GoBack.
[GoForward](#goforward) | Equivalent to calling CoreWebView2.GoForward.
[NavigateToString](#navigatetostring) | Equivalent to calling CoreWebView2.NavigateToString.
[Reload](#reload) | Equivalent to calling CoreWebView2.Reload.
[Stop](#stop) | Equivalent to calling CoreWebView2.Stop.
[WebView2](#webview2) | Creates a new instance of a WebView2 control.
[BuildWindowCore](#buildwindowcore) | This is overridden from HwndHost and is called to instruct us to create our HWND.
[DestroyWindowCore](#destroywindowcore) | This is overridden from HwndHost and is called to instruct us to destroy our HWND.
[Dispose](#dispose) | This is called by our base class according to the typical implementation of the IDispose pattern.
[HasFocusWithinCore](#hasfocuswithincore) | This is overridden from HwndHost and is called when WPF needs to know if the focus is in our control/window.
[OnKeyDown](#onkeydown) | This is overridden from UIElement and called to allow us to handle key press input.
[OnKeyUp](#onkeyup) | See OnKeyDown.
[OnPreviewKeyDown](#onpreviewkeydown) | This is the "Preview" (i.e.
[OnPreviewKeyUp](#onpreviewkeyup) | See OnPreviewKeyDown.
[OnWindowPositionChanged](#onwindowpositionchanged) | This is overridden from HwndHost and called when our control's location has changed.
[TabIntoCore](#tabintocore) | This is overridden from HwndHost and is called to inform us that tabbing has caused the focus to move into our control/window.

This control is effectively a wrapper around the WebView2 COM API, which you can find documentation for here: [https://docs.microsoft.com/microsoft-edge/hosting/webview2](https://docs.microsoft.com/microsoft-edge/hosting/webview2) You can directly access the underlying ICoreWebView2 interface and all of its functionality by accessing the CoreWebView2 property. Some of the most common COM functionality is also accessible directly through wrapper methods/properties/events on the control.

Upon creation, the control's CoreWebView2 property will be null. This is because creating the CoreWebView2 is an expensive operation which involves things like launching Edge browser processes. There are two ways to cause the CoreWebView2 to be created: 1) Call the EnsureCoreWebView2Async method. This is referred to as explicit initialization. 2) Set the Source property (which could be done from markup, for example). This is referred to as implicit initialization. Either option will start initialization in the background and return back to the caller without waiting for it to finish. To specify options regarding the initialization process, either pass your own CoreWebView2Environment to EnsureCoreWebView2Async or set the control's CreationProperties property prior to initialization.

When initialization has finished (regardless of how it was triggered) then the following things will occur, in this order: 1) The control's CoreWebView2Ready event will be invoked. If you need to perform one time setup operations on the CoreWebView2 prior to its use then you should do so in a handler for that event. 2) If a Uri has been set to the Source property then the control will start navigating to it in the background (i.e. these steps will continue without waiting for the navigation to finish). 3) The Task returned from EnsureCoreWebView2Async will complete.

For more details about any of the methods/properties/events involved in the initialization process, see its specific documentation.

Because the control's CoreWebView2 is a very heavyweight object (potentially responsible for multiple running processes and megabytes of disk space) the control implements IDisposable to provide an explicit means to free it. Calling Dispose will release the CoreWebView2 and its underlying resources (except any that are also being used by other WebViews), and reset CoreWebView2 to null. After Dispose has been called the CoreWebView2 cannot be re-initialized, and any attempt to use functionality which requires it will throw an ObjectDisposedException.

Note that this control extends HwndHost in order to embed windows which live outside of the WPF ecosystem. This has some implications regarding the control's input and output behavior as well as the functionality it "inherits" from UIElement and FrameworkElement. See the HwndHost and WPF/Win32 interop documentation for more info:

* [https://docs.microsoft.com/dotnet/api/system.windows.interop.hwndhost](https://docs.microsoft.com/dotnet/api/system.windows.interop.hwndhost)

* [https://docs.microsoft.com/dotnet/framework/wpf/advanced/wpf-and-win32-interoperation#hwnds-inside-wpf](https://docs.microsoft.com/dotnet/framework/wpf/advanced/wpf-and-win32-interoperation#hwnds-inside-wpf)

## Members

#### ContentLoading 

A wrapper around CoreWebView2.ContentLoading.

> public event EventHandler< CoreWebView2ContentLoadingEventArgs > [ContentLoading](#contentloading)

The only difference between this event and CoreWebView2.ContentLoading is the first parameter that's passed to handlers. Handlers of this event will receive the WebView2 control, whereas handlers of CoreWebView2.ContentLoading will receive the CoreWebView2 instance.

#### CoreWebView2Ready 

This event is triggered when the control's CoreWebView2 has finished being initialized (regardless of how initialization was triggered) but before it is used for anything.

> public event EventHandler< EventArgs > [CoreWebView2Ready](#corewebview2ready)

You should handle this event if you need to perform one time setup operations on the CoreWebView2 which you want to affect all of its usages (e.g. adding event handlers, configuring settings, installing document creation scripts, adding host objects). See the WebView2 class documentation for an initialization overview.

This event doesn't provide any arguments, and the sender will be the WebView2 control, whose CoreWebView2 property will now be valid (i.e. non-null) for the first time.

#### NavigationCompleted 

A wrapper around CoreWebView2.NavigationCompleted.

> public event EventHandler< CoreWebView2NavigationCompletedEventArgs > [NavigationCompleted](#navigationcompleted)

The only difference between this event and CoreWebView2.NavigationCompleted is the first parameter that's passed to handlers. Handlers of this event will receive the WebView2 control, whereas handlers of CoreWebView2.NavigationCompleted will receive the CoreWebView2 instance.

#### NavigationStarting 

A wrapper around CoreWebView2.NavigationStarting.

> public event EventHandler< CoreWebView2NavigationStartingEventArgs > [NavigationStarting](#navigationstarting)

The only difference between this event and CoreWebView2.NavigationStarting is the first parameter that's passed to handlers. Handlers of this event will receive the WebView2 control, whereas handlers of CoreWebView2.NavigationStarting will receive the CoreWebView2 instance.

#### SourceChanged 

A wrapper around CoreWebView2.SourceChanged.

> public event EventHandler< CoreWebView2SourceChangedEventArgs > [SourceChanged](#sourcechanged)

The only difference between this event and CoreWebView2.SourceChanged is the first parameter that's passed to handlers. Handlers of this event will receive the WebView2 control, whereas handlers of CoreWebView2.SourceChanged will receive the CoreWebView2 instance.

#### WebMessageReceived 

A wrapper around CoreWebView2.WebMessageReceived.

> public event EventHandler< CoreWebView2WebMessageReceivedEventArgs > [WebMessageReceived](#webmessagereceived)

The only difference between this event and CoreWebView2.WebMessageReceived is the first parameter that's passed to handlers. Handlers of this event will receive the WebView2 control, whereas handlers of CoreWebView2.WebMessageReceived will receive the CoreWebView2 instance.

#### CanGoBack 

Wrapper around CoreWebView2.CanGoBack.

> public bool [CanGoBack](#cangoback)

If CoreWebView2 isn't initialized then always returns false.

#### CanGoForward 

Wrapper around CoreWebView2.CanGoForward.

> public bool [CanGoForward](#cangoforward)

If CoreWebView2 isn't initialized then always returns false.

#### CoreWebView2 

Access the complete functionality of the underlying Core.CoreWebView2 COM API.

> public CoreWebView2 [CoreWebView2](#corewebview2)

Returns null until initialization has completed. See the WebView2 class documentation for an initialization overview. After initialization is finished this property will only ever become null again when the control is Disposed.

#### CreationProperties 

Gets or sets a bag of options which are used during initialization of the control's CoreWebView2.

> public CoreWebView2CreationProperties [CreationProperties](#creationproperties)

Setting this property after the control's CoreWebView2 is initialized won't work (the old value will be retained). See the WebView2 class documentation for an initialization overview.

#### Source 

The Uri which the control is currently displaying (or will display once initialization of its CoreWebView2 is finished).

> public Uri [Source](#source)

Generally speaking, getting this property is equivalent to getting CoreWebView2.Source and setting this property is equivalent to calling CoreWebView2.Navigate. Setting this property before the CoreWebView2 has been initialized will cause initialization to start in the background (after which the WebView2 will navigate to the specified Uri). Getting this property before the CoreWebView2 has been initialized will retrieve the last Uri which was set to it. See the WebView2 class documentation for an initialization overview.

#### EnsureCoreWebView2Async 

Explicitly trigger initialization of the control's CoreWebView2.

> public Task [EnsureCoreWebView2Async](#ensurecorewebview2async)(CoreWebView2Environment environment)

See the WebView2 class documentation for an initialization overview.

##### Parameters
* `environment` A pre-created CoreWebView2Environment that should be used to create the CoreWebView2. Creating your own environment gives you control over several options that affect how the CoreWebView2 is initialized. If you pass an environment to this method then it will override any settings specified on the CreationProperties property. If you pass null (the default value) and no value has been set to CreationProperties then a default environment will be created and used automatically. 

##### Returns
A Task that represents the background initialization process. When the task completes then the CoreWebView2 property will be available for use (i.e. non-null). Note that the control's CoreWebView2Ready event will be invoked before the task completes. 

Calling this method additional times will have no effect (any specified environment is ignored) and return the same Task as the first call. Calling this method after initialization has been implicitly triggered by setting the Source property will have no effect (any specified environment is ignored) and simply return a Task representing that initialization already in progress. Note that even though this method is asynchronous and returns a Task, it still must be called on the UI thread like most public functionality of most UI controls.

#### ExecuteScriptAsync 

Equivalent to calling CoreWebView2.ExecuteScriptAsync.

> public async Task< string > [ExecuteScriptAsync](#executescriptasync)(string javaScript)

If CoreWebView2 hasn't been initialized yet then throws InvalidOperationException.

#### GoBack 

Equivalent to calling CoreWebView2.GoBack.

> public void [GoBack](#goback)()

If CoreWebView2 hasn't been initialized yet then does nothing.

#### GoForward 

Equivalent to calling CoreWebView2.GoForward.

> public void [GoForward](#goforward)()

If CoreWebView2 hasn't been initialized yet then does nothing.

#### NavigateToString 

Equivalent to calling CoreWebView2.NavigateToString.

> public void [NavigateToString](#navigatetostring)(string htmlContent)

If CoreWebView2 hasn't been initialized yet then throws InvalidOperationException.

#### Reload 

Equivalent to calling CoreWebView2.Reload.

> public void [Reload](#reload)()

If CoreWebView2 hasn't been initialized yet then throws InvalidOperationException.

#### Stop 

Equivalent to calling CoreWebView2.Stop.

> public void [Stop](#stop)()

If CoreWebView2 hasn't been initialized yet then throws InvalidOperationException.

#### WebView2 

Creates a new instance of a WebView2 control.

> public [WebView2](#webview2)()

Note that the control's CoreWebView2 will be null until initialized. See the WebView2 class documentation for an initialization overview.

#### BuildWindowCore 

This is overridden from HwndHost and is called to instruct us to create our HWND.

> protected override HandleRef [BuildWindowCore](#buildwindowcore)(HandleRef hwndParent)

##### Parameters
* `hwndParent` The HWND that we should use as the parent of the one we create.

##### Returns
The HWND that we created.

#### DestroyWindowCore 

This is overridden from HwndHost and is called to instruct us to destroy our HWND.

> protected override void [DestroyWindowCore](#destroywindowcore)(HandleRef hwnd)

##### Parameters
* `hwnd` Our HWND that we need to destroy.

#### Dispose 

This is called by our base class according to the typical implementation of the IDispose pattern.

> protected override void [Dispose](#dispose)(bool disposing)

We implement it by releasing all of our underlying COM resources, including our CoreWebView2.

##### Parameters
* `disposing` True if a caller is explicitly calling Dispose, false if we're being finalized.

#### HasFocusWithinCore 

This is overridden from HwndHost and is called when WPF needs to know if the focus is in our control/window.

> protected override bool [HasFocusWithinCore](#hasfocuswithincore)()

WPF can't know on its own since we're hosting a non-WPF window, so instead it asks us by calling this. To answer, we just track state based on CoreWebView2 events that fire when it gains or loses focus.

##### Returns
True if the focus is in our control/window, false if it isn't.

#### OnKeyDown 

This is overridden from UIElement and called to allow us to handle key press input.

> protected override void [OnKeyDown](#onkeydown)(KeyEventArgs e)

WPF should never actually call this in response to keyboard events because we're hosting a non-WPF window. When our window has focus Windows will send the input directly to it rather than to WPF's top-level window and input system. This override should only be called when we're explicitly forwarding accelerator key input from the CoreWebView2 to WPF (in CoreWebView2Controller_AcceleratorKeyPressed). Even then, this KeyDownEvent is only triggered because our PreviewKeyDownEvent implementation explicitly triggers it, matching WPF's usual system. So the process is: CoreWebView2Controller_AcceleratorKeyPressed -> raise PreviewKeyDownEvent -> OnPreviewKeyDown -> raise KeyDownEvent -> OnKeyDown

#### OnKeyUp 

See OnKeyDown.

> protected override void [OnKeyUp](#onkeyup)(KeyEventArgs e)

#### OnPreviewKeyDown 

This is the "Preview" (i.e.

> protected override void [OnPreviewKeyDown](#onpreviewkeydown)(KeyEventArgs e)

tunneling) version of OnKeyDown, so it actually happens first. Like OnKeyDown, this will only ever be called if we're explicitly forwarding key presses from the CoreWebView2. In order to mimic WPF's standard input handling, when we receive this we turn around and fire off the standard bubbling KeyDownEvent. That way others in the WPF tree see the same standard pair of input events that WPF itself would have triggered if it were handling the key press.

#### OnPreviewKeyUp 

See OnPreviewKeyDown.

> protected override void [OnPreviewKeyUp](#onpreviewkeyup)(KeyEventArgs e)

#### OnWindowPositionChanged 

This is overridden from HwndHost and called when our control's location has changed.

> protected override void [OnWindowPositionChanged](#onwindowpositionchanged)(Rect rcBoundingBox)

The HwndHost takes care of updating the HWND we created. What we need to do is move our CoreWebView2 to match the new location.

#### TabIntoCore 

This is overridden from HwndHost and is called to inform us that tabbing has caused the focus to move into our control/window.

> protected override bool [TabIntoCore](#tabintocore)(TraversalRequest request)

Since WPF can't manage the transition of focus to a non-WPF HWND, it delegates the transition to us here. So our job is just to place the focus in our external HWND.

##### Parameters
* `request` Information about how the focus is moving.

##### Returns
True to indicate that we handled the navigation, or false to indicate that we didn't.

