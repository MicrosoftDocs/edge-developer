---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: 0.9.515 - Microsoft.Web.WebView2.Core.CoreWebView2Controller
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/20/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---

# 0.9.515 - Microsoft.Web.WebView2.Core.CoreWebView2Controller class 

[!INCLUDE [deprecation-note](../../includes/deprecation-note.md)]

Namespace: Microsoft.Web.WebView2.Core\
Assembly: Microsoft.Web.WebView2.Core.dll

This class is the owner of the CoreWebView2 object, and provides support for resizing, showing and hiding, focusing, and other functionality related to windowing and composition.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[AcceleratorKeyPressed](#acceleratorkeypressed) | AcceleratorKeyPressed fires when an accelerator key or key combo is pressed or released while the WebView is focused.
[Bounds](#bounds) | The webview bounds.
[CoreWebView2](#corewebview2) | Gets the CoreWebView2 associated with this CoreWebView2Controller.
[GotFocus](#gotfocus) | GotFocus fires when WebView got focus.
[IsVisible](#isvisible) | The IsVisible property determines whether to show or hide the webview.
[LostFocus](#lostfocus) | LostFocus fires when WebView lost focus.
[MoveFocusRequested](#movefocusrequested) | MoveFocusRequested fires when user tries to tab out of the WebView.
[ParentWindow](#parentwindow) | The parent window provided by the app that this WebView is using to render content.
[ZoomFactor](#zoomfactor) | The zoom factor for the WebView.
[ZoomFactorChanged](#zoomfactorchanged) | The event fires when the ZoomFactor property of the WebView changes.
[Close](#close) | Closes the WebView and cleans up the underlying browser instance.
[MoveFocus](#movefocus) | Move focus into WebView.
[NotifyParentWindowPositionChanged](#notifyparentwindowpositionchanged) | This is a notification separate from Bounds that tells WebView its parent (or any ancestor) HWND moved.
[SetBoundsAndZoomFactor](#setboundsandzoomfactor) | Update Bounds and ZoomFactor properties at the same time.

The CoreWebView2Controller owns the CoreWebView2, and if all references to the CoreWebView2Controller go away, the WebView will be closed.

## Members

#### AcceleratorKeyPressed 

AcceleratorKeyPressed fires when an accelerator key or key combo is pressed or released while the WebView is focused.

> public event EventHandler< [CoreWebView2AcceleratorKeyPressedEventArgs](microsoft-web-webview2-core-corewebview2acceleratorkeypressedeventargs.md) > [AcceleratorKeyPressed](#acceleratorkeypressed)

AcceleratorKeyPressed fires when an accelerator key or key combo is pressed or released while the WebView is focused. A key is considered an accelerator if either:

1. Ctrl or Alt is currently being held, or

1. the pressed key does not map to a character. A few specific keys are never considered accelerators, such as Shift. The Escape key is always considered an accelerator.

Autorepeated key events caused by holding the key down will also fire this event. You can filter these out by checking the event args' KeyEventLParam or PhysicalKeyStatus.

In windowed mode, this event handler is called synchronously. Until you call Handle() on the event args or the event handler returns, the browser process will be blocked and outgoing cross-process COM calls will fail with RPC_E_CANTCALLOUT_ININPUTSYNCCALL. All CoreWebView2 API methods will work, however.

In windowless mode, the event handler is called asynchronously. Further input will not reach the browser until the event handler returns or Handle() is called, but the browser process itself will not be blocked, and outgoing COM calls will work normally.

It is recommended to call Handle(TRUE) as early as you can know that you want to handle the accelerator key.

#### Bounds 

The webview bounds.

> public Rect [Bounds](#bounds)

Bounds are relative to the parent HWND. The app has two ways it can position a WebView:

1. Create a child HWND that is the WebView parent HWND. Position this window where the WebView should be. In this case, use (0, 0) for the WebView's Bound's top left corner (the offset).

1. Use the app's top most window as the WebView parent HWND. Set the WebView's Bound's top left corner so that the WebView is positioned correctly in the app. The Bound's values are in the host's coordinate space.

#### CoreWebView2 

Gets the CoreWebView2 associated with this CoreWebView2Controller.

> public [CoreWebView2](microsoft-web-webview2-core-corewebview2.md) [CoreWebView2](#corewebview2)

#### GotFocus 

GotFocus fires when WebView got focus.

> public event EventHandler< object > [GotFocus](#gotfocus)

#### IsVisible 

The IsVisible property determines whether to show or hide the webview.

> public bool [IsVisible](#isvisible)

If IsVisible is set to false, the webview will be transparent and will not be rendered. However, this will not affect the window containing the webview (the HWND parameter that was passed to CreateCoreWebView2Controller). If you want that window to disappear too, call ShowWindow on it directly in addition to modifying the IsVisible property. WebView as a child window won't get window messages when the top window is minimized or restored. For performance reason, developer should set IsVisible property of the WebView to false when the app window is minimized and back to true when app window is restored. App window can do this by handling SC_MINIMIZE and SC_RESTORE command upon receiving WM_SYSCOMMAND message.

#### LostFocus 

LostFocus fires when WebView lost focus.

> public event EventHandler< object > [LostFocus](#lostfocus)

In the case where MoveFocusRequested event is fired, the focus is still on WebView when MoveFocusRequested event fires. Lost focus only fires afterwards when app's code or default action of MoveFocusRequested event set focus away from WebView.

#### MoveFocusRequested 

MoveFocusRequested fires when user tries to tab out of the WebView.

> public event EventHandler< [CoreWebView2MoveFocusRequestedEventArgs](microsoft-web-webview2-core-corewebview2movefocusrequestedeventargs.md) > [MoveFocusRequested](#movefocusrequested)

The WebView's focus has not changed when this event is fired.

#### ParentWindow 

The parent window provided by the app that this WebView is using to render content.

> public IntPtr [ParentWindow](#parentwindow)

Setting the property will cause the WebView to reparent its window to the newly provided window.

#### ZoomFactor 

The zoom factor for the WebView.

> public double [ZoomFactor](#zoomfactor)

Note that changing zoom factor could cause `window.innerWidth/innerHeight` and page layout to change. A zoom factor that is applied by the host by calling ZoomFactor becomes the new default zoom for the WebView. This zoom factor applies across navigations and is the zoom factor WebView is returned to when the user presses ctrl+0. When the zoom factor is changed by the user (resulting in the app receiving ZoomFactorChanged), that zoom applies only for the current page. Any user applied zoom is only for the current page and is reset on a navigation. Specifying a zoomFactor less than or equal to 0 is not allowed. WebView also has an internal supported zoom factor range. When a specified zoom factor is out of that range, it will be normalized to be within the range, and a ZoomFactorChanged event will be fired for the real applied zoom factor. When this range normalization happens, the ZoomFactor property will report the zoom factor specified during the previous modification of the ZoomFactor property until the ZoomFactorChanged event is received after webview applies the normalized zoom factor.

#### ZoomFactorChanged 

The event fires when the ZoomFactor property of the WebView changes.

> public event EventHandler< object > [ZoomFactorChanged](#zoomfactorchanged)

The event could fire because the caller modified the ZoomFactor property, or due to the user manually modifying the zoom. When it is modified by the caller via the ZoomFactor property, the internal zoom factor is updated immediately and there will be no ZoomFactorChanged event. WebView associates the last used zoom factor for each site. Therefore, it is possible for the zoom factor to change when navigating to a different page. When the zoom factor changes due to this, the ZoomFactorChanged event fires right after the ContentLoading event.

#### Close 

Closes the WebView and cleans up the underlying browser instance.

> public void [Close](#close)()

Cleaning up the browser instance will release the resources powering the WebView. The browser instance will be shut down if there are no other WebViews using it.

After calling Close, all method calls will fail and event handlers will stop firing. Specifically, the WebView will release its references to its event handlers when Close is called.

Close is implicitly called when the CoreWebView2Controller loses its final reference and is destructed. But it is best practice to explicitly call Close to avoid any accidental cycle of references between the WebView and the app code. Specifically, if you capture a reference to the WebView in an event handler you will create a reference cycle between the WebView and the event handler. Calling Close will break this cycle by releasing all event handlers. But to avoid this situation it is best practice both to explicitly call Close on the WebView and to not capture a reference to the WebView to ensure the WebView can be cleaned up correctly.

#### MoveFocus 

Move focus into WebView.

> public void [MoveFocus](#movefocus)([CoreWebView2MoveFocusReason](./namespace-microsoft-web-webview2-core.md) reason)

WebView will get focus and focus will be set to correspondent element in the page hosted in the WebView. For Programmatic reason, focus is set to previously focused element or the default element if there is no previously focused element. For Next reason, focus is set to the first element. For Previous reason, focus is set to the last element. WebView can also got focus through user interaction like clicking into WebView or Tab into it. For tabbing, the app can call MoveFocus with Next or Previous to align with tab and shift+tab respectively when it decides the WebView is the next tabbable element. Or, the app can call IsDialogMessage as part of its message loop to allow the platform to auto handle tabbing. The platform will rotate through all windows with WS_TABSTOP. When the WebView gets focus from IsDialogMessage, it will internally put the focus on the first or last element for tab and shift+tab respectively.

#### NotifyParentWindowPositionChanged 

This is a notification separate from Bounds that tells WebView its parent (or any ancestor) HWND moved.

> public void [NotifyParentWindowPositionChanged](#notifyparentwindowpositionchanged)()

This is needed for accessibility and certain dialogs in WebView to work correctly.

#### SetBoundsAndZoomFactor 

Update Bounds and ZoomFactor properties at the same time.

> public void [SetBoundsAndZoomFactor](#setboundsandzoomfactor)(Rect Bounds, double ZoomFactor)

This operation is atomic from the host's perspective. After returning from this function, the Bounds and ZoomFactor properties will have both been updated if the function is successful, or neither will be updated if the function fails. If Bounds and ZoomFactor are both updated by the same scale (i.e. Bounds and ZoomFactor are both doubled), then the page will not see a change in window.innerWidth/innerHeight and the WebView will render the content at the new size and zoom without intermediate renderings. This function can also be used to update just one of ZoomFactor or Bounds by passing in the new value for one and the current value for the other.

