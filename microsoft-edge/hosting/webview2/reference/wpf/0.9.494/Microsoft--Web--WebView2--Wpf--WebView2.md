---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/27/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---

# class Microsoft.Web.WebView2.Wpf.WebView2 

```
class Microsoft.Web.WebView2.Wpf.WebView2
  : public HwndHost
```

A control to embed web content in a WPF application.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[CoreWebView2](#corewebview2) | Access the complete functionality of the underlying CoreWebView2 COM API.
[Source](#source) | The Uri which the WebView2 is currently displaying.
[CanGoBack](#cangoback) | Wrapper around CoreWebView2.CanGoBack.
[CanGoForward](#cangoforward) | Wrapper around CoreWebView2.CanGoForward.
[WebView2](#webview2) | Creates a new instance of a WebView2 control.
[GoBack](#goback) | Equivalent to calling CoreWebView2.GoBack.
[GoForward](#goforward) | Equivalent to calling CoreWebView2.GoForward.
[Reload](#reload) | Equivalent to calling CoreWebView2.Reload.
[Stop](#stop) | Equivalent to calling CoreWebView2.Stop.
[NavigateToString](#navigatetostring) | Equivalent to calling CoreWebView2.NavigateToString.
[ExecuteScriptAsync](#executescriptasync) | Equivalent to calling CoreWebView2.ExecuteScriptAsync.
[BuildWindowCore](#buildwindowcore) | This is overridden from HwndHost and is called to instruct us to create our HWND.
[DestroyWindowCore](#destroywindowcore) | This is overridden from HwndHost and is called to instruct us to destroy our HWND.
[Dispose](#dispose) | This is called by our base class according to the typical implementation of the IDispose pattern.
[OnWindowPositionChanged](#onwindowpositionchanged) | This is overridden from HwndHost and called when our control's location has changed.
[TabIntoCore](#tabintocore) | This is overridden from HwndHost and is called to inform us that tabbing has caused the focus to move into our control/window.
[HasFocusWithinCore](#hasfocuswithincore) | This is overridden from HwndHost and is called when WPF needs to know if the focus is in our control/window.
[OnKeyDown](#onkeydown) | This is overridden from UIElement and called to allow us to handle key press input.
[OnKeyUp](#onkeyup) | See OnKeyDown.
[OnPreviewKeyDown](#onpreviewkeydown) | This is the "Preview" (i.e. tunneling) version of OnKeyDown, so it actually happens first.
[OnPreviewKeyUp](#onpreviewkeyup) | See OnPreviewKeyDown.

This control is effectively a wrapper around the [WebView2]() COM API, which you can find documentation for here: [https://docs.microsoft.com/microsoft-edge/hosting/webview2](https://docs.microsoft.com/microsoft-edge/hosting/webview2) You can directly access the underlying ICoreWebView2 interface and all of its functionality by accessing the CoreWebView2 property. Some of the most common COM functionality is also accessible directly through wrapper methods/properties/events on the control.

Note that this control extends HwndHost in order to embed windows which live outside of the WPF ecosystem. This has some implications regarding the control's input and output behavior as well as the functionality it "inherits" from UIElement and FrameworkElement. See the HwndHost and WPF/Win32 interop documentation for more info:

* [https://docs.microsoft.com/dotnet/api/system.windows.interop.hwndhost](https://docs.microsoft.com/dotnet/api/system.windows.interop.hwndhost)

* [https://docs.microsoft.com/dotnet/framework/wpf/advanced/wpf-and-win32-interoperation#hwnds-inside-wpf](https://docs.microsoft.com/dotnet/framework/wpf/advanced/wpf-and-win32-interoperation#hwnds-inside-wpf)

## Members


#### CoreWebView2 

Access the complete functionality of the underlying CoreWebView2 COM API.

> {property} CoreWebView2 [CoreWebView2](#corewebview2)

Returns null for a period of time after the control's construction because it is initialized independently and asynchronously. Once this property is non-null, it will never be null again until the control is Disposed.

#### Source 

The Uri which the WebView2 is currently displaying.

> {property} Uri [Source](#source)

Getting this property is equivalent to getting CoreWebView2.Source. Setting this property is equivalent to calling CoreWebView2.Navigate. If this property is retrieved when the CoreWebView2 isn't initialized, then it returns null. If this property is set prior to the CoreWebView2 being initialized (e.g. from XAML markup), then the property value is still updated and the control will navigate to it when initialization has finished.

#### CanGoBack 

Wrapper around CoreWebView2.CanGoBack.

> {property} bool [CanGoBack](#cangoback)

If CoreWebView2 isn't initialized then always returns false.

#### CanGoForward 

Wrapper around CoreWebView2.CanGoForward.

> {property} bool [CanGoForward](#cangoforward)

If CoreWebView2 isn't initialized then always returns false.

#### WebView2 

Creates a new instance of a WebView2 control.

> public inline  [WebView2](#webview2)()

Note that the control's CoreWebView2 won't necessarily exist right away after construction.

#### GoBack 

Equivalent to calling CoreWebView2.GoBack.

> public inline void [GoBack](#goback)()

If CoreWebView2 isn't initialized then does nothing.

#### GoForward 

Equivalent to calling CoreWebView2.GoForward.

> public inline void [GoForward](#goforward)()

If CoreWebView2 isn't initialized then does nothing.

#### Reload 

Equivalent to calling CoreWebView2.Reload.

> public inline void [Reload](#reload)()

If CoreWebView2 isn't initialized then throws InvalidOperationException.

#### Stop 

Equivalent to calling CoreWebView2.Stop.

> public inline void [Stop](#stop)()

If CoreWebView2 isn't initialized then throws InvalidOperationException.

#### NavigateToString 

Equivalent to calling CoreWebView2.NavigateToString.

> public inline void [NavigateToString](#navigatetostring)(string htmlContent)

If CoreWebView2 isn't initialized then throws InvalidOperationException.

#### ExecuteScriptAsync 

Equivalent to calling CoreWebView2.ExecuteScriptAsync.

> public inline async Task< string > [ExecuteScriptAsync](#executescriptasync)(string javaScript)

If CoreWebView2 isn't initialized then throws InvalidOperationException.

#### BuildWindowCore 

This is overridden from HwndHost and is called to instruct us to create our HWND.

> protected inline override HandleRef [BuildWindowCore](#buildwindowcore)(HandleRef hwndParent)

##### Parameters
* `hwndParent` The HWND that we should use as the parent of the one we create.

##### Returns
The HWND that we created.

#### DestroyWindowCore 

This is overridden from HwndHost and is called to instruct us to destroy our HWND.

> protected inline override void [DestroyWindowCore](#destroywindowcore)(HandleRef hwnd)

##### Parameters
* `hwnd` Our HWND that we need to destroy.

#### Dispose 

This is called by our base class according to the typical implementation of the IDispose pattern.

> protected inline override void [Dispose](#dispose)(bool disposing)

We implement it by releasing all of our underlying COM resources.

##### Parameters
* `disposing` True if a caller is explicitly calling Dispose, false if we're being finalized.

#### OnWindowPositionChanged 

This is overridden from HwndHost and called when our control's location has changed.

> protected inline override void [OnWindowPositionChanged](#onwindowpositionchanged)(Rect rcBoundingBox)

The HwndHost takes care of updating the HWND we created. What we need to do is move our CoreWebView2 to match the new location.

#### TabIntoCore 

This is overridden from HwndHost and is called to inform us that tabbing has caused the focus to move into our control/window.

> protected inline override bool [TabIntoCore](#tabintocore)(TraversalRequest request)

Since WPF can't manage the transition of focus to a non-WPF HWND, it delegates the transition to us here. So our job is just to place the focus in our external HWND.

##### Parameters
* `request` Information about how the focus is moving.

##### Returns
True to indicate that we handled the navigation, or false to indicate that we didn't.

#### HasFocusWithinCore 

This is overridden from HwndHost and is called when WPF needs to know if the focus is in our control/window.

> protected inline override bool [HasFocusWithinCore](#hasfocuswithincore)()

WPF can't know on its own since we're hosting a non-WPF window, so instead it asks us by calling this. To answer, we just track state based on CoreWebView2 events that fire when it gains or loses focus.

##### Returns
True if the focus is in our control/window, false if it isn't.

#### OnKeyDown 

This is overridden from UIElement and called to allow us to handle key press input.

> protected inline override void [OnKeyDown](#onkeydown)(KeyEventArgs e)

WPF should never actually call this in response to keyboard events because we're hosting a non-WPF window. When our window has focus Windows will send the input directly to it rather than to WPF's top-level window and input system. This override should only be called when we're explicitly forwarding accelerator key input from the CoreWebView2 to WPF (in CoreWebView2Controller_AcceleratorKeyPressed). Even then, this KeyDownEvent is only triggered because our PreviewKeyDownEvent implementation explicitly triggers it, matching WPF's usual system. So the process is: CoreWebView2Controller_AcceleratorKeyPressed -> raise PreviewKeyDownEvent -> OnPreviewKeyDown -> raise KeyDownEvent -> OnKeyDown

#### OnKeyUp 

See OnKeyDown.

> protected inline override void [OnKeyUp](#onkeyup)(KeyEventArgs e)

#### OnPreviewKeyDown 

This is the "Preview" (i.e. tunneling) version of OnKeyDown, so it actually happens first.

> protected inline override void [OnPreviewKeyDown](#onpreviewkeydown)(KeyEventArgs e)

Like OnKeyDown, this will only ever be called if we're explicitly forwarding key presses from the CoreWebView2. In order to mimic WPF's standard input handling, when we receive this we turn around and fire off the standard bubbling KeyDownEvent. That way others in the WPF tree see the same standard pair of input events that WPF itself would have triggered if it were handling the key press.

#### OnPreviewKeyUp 

See OnPreviewKeyDown.

> protected inline override void [OnPreviewKeyUp](#onpreviewkeyup)(KeyEventArgs e)

