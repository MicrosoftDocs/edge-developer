---
title: Windowed vs. visual hosting of WebView2
description: Deciding whether to have your app use windowed hosting vs. visual hosting of the WebView2 control.  Hosting WebView2 in windowed or visual environments.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 10/24/2022
---
# Windowed vs. visual hosting of WebView2

There are two options for hosting the Microsoft Edge WebView2 control in your app: windowed hosting and visual hosting.

If you use windowed hosting, which is a good starting point for most apps, you don't need to read this article.  If you want to provide a more custom user experience (UX), and want to use visual hosting, read this article.

| Approach | Description | Optimized for |
|---|---|---|
| Windowed hosting | The WebView2 control takes input from the operating system (OS).  The OS sends the input to the WebView2. | Displaying web content quickly and easily, without having to include features for inputs, outputs, and accessibility. |
| Visual hosting | Your host app takes spatial input (such as mouse or touch input) from the user.  Your app sends this input to the WebView2 control. | More granular control over layout.  For example, you can control the positioning of the WebView2 control in the page.  The app needs to do specific handling of window management and rendering APIs. |

These approaches have different requirements, constraints, and benefits.  Windowed hosting is simpler to implement than visual hosting.  Visual hosting requires all the API calls that Windowed hosting requires, and visual hosting has additional requirements for it to render properly.  The API calls are listed in [Windowed hosting](#windowed-hosting) and [Visual hosting](#visual-hosting), below.


<!-- ====================================================================== -->
## Scenarios for selecting the hosting approach

Both approaches for hosting the WebView2 control in your app are similar in functionality, but they suit different needs depending on the app requirements.


#### Windowed hosting: For displaying content quickly and easily

"Windowed" means that in your app, an HWND inherits many default properties from the operating system.

There are instances where you might want to focus on displaying web content as quickly and easily as possible in your app.  Windowed hosting allows for a solution that quickly displays web content without having to include features for inputs, outputs, and accessibility.


#### Visual hosting: For more granular control over layout

Visual hosting allows for (and requires) more granular control of layout.  When using this approach, the app needs specific handling of window management and rendering APIs.

With visual hosting, for example you must choose how when the user resizes the window, how the webview scales in relation to the whole page - for example, if you want the webview to scale twice as much as the app.


<!-- ====================================================================== -->
## Compatibility and constraints

Key compatibility limitations include the operating system and rendering in framework and non-framework apps.


<!-- ------------------------------ -->
#### Operating systems

Windows 7 and Windows 8 can only do windowed hosting, not visual hosting.

See [Windows 7 and 8](../index.md#windows-7-and-8) in _Introduction to Microsoft Edge WebView2_.


<!-- ------------------------------ -->
#### Rendering WebView2 in framework and non-framework apps

If you're using a UI framework for your app, you should use the corresponding WebView2 element for that UI framework.  If you aren't using a UI framework for your app (such as Win32 or React Native) or your UI framework doesn't have a WebView2 element, you'll need to create `CoreWebView2Controller` and render it into the desired app.

**Note:** If your app's UI is built using `DirectComposition` or `Windows.UI.Composition`, then you should use `CoreWebView2CompositionController`, otherwise you should use `CoreWebView2Controller`.

The `CoreWebView2Controller` properties and methods:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Controller.CoreWebView2 Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.corewebview2)
* [CoreWebView2Controller.Close Method](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.close)
* [CoreWebView2Environment.CreateCoreWebView2ControllerAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createcorewebview2controllerasync)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Controller.CoreWebView2 Property](/microsoft-edge/webview2/reference/win32/icorewebview2controller#get_corewebview2)
* [CoreWebView2Controller.Close Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#close)
* [CoreWebView2Environment.CreateCoreWebView2ControllerAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#createcorewebview2controllerasync)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Controller::CoreWebView2 property](/microsoft-edge/webview2/reference/win32/icorewebview2controller#get_corewebview2)<!--no put-->
* [ICoreWebView2Controller::Close method](/microsoft-edge/webview2/reference/win32/icorewebview2controller#close)
* [ICoreWebView2Environment::CreateCoreWebView2Controller method](/microsoft-edge/webview2/reference/win32/icorewebview2environment#createcorewebview2controller)

---


<!-- ====================================================================== -->
## Windowed hosting

Windowed hosting can be described as an HWND that stores information.  You can have multiple HWNDs in your app that will each be used as a WebView component to access web content.  Some of the Output/Input commands are handled for you by the framework you choose; however, you will still need to handle window management.

Benefits for Windowed hosting include:

* Zooming and rasterization scales (for example, menus, context menus, and so on) will also automatically scale to the app's parent `HWND`. It also handles how the WebView manages being focused and tabbing in/out of itself when it reaches the final element.

* The app handles keyboard accelerators and keyboard shortcuts when in the WebView. For example, **Ctrl+C** in a WebView will know that you are trying to copy content in the WebView, and not pressing **Ctrl** and **C** separately.

* You don't have to manage the various composition-based rendering (for example, Inputs, Outputs, and Accessibility controls) if you don't want to.

For general information regarding Window management and `HWND` functionality, see [About Windows](/windows/win32/winmsg/about-windows).


<!-- ------------------------------ -->
#### Window management

The following aspects of window management are handled in a windowed hosting environment.


<!-- ---------- -->
###### Sizing, positioning, and visibility

`CoreWebView2Controller` takes a parent `HWND`.  The `Bounds` property sizes and positions the WebView2 relative to the parent `HWND`.  The visibility of WebView2 can be toggled by using `IsVisible`.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Controller.Bounds Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.bounds#microsoft-web-webview2-core-corewebview2controller-bounds)
* [CoreWebView2Controller.IsVisible Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.isvisible)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Controller.Bounds Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#bounds)
* [CoreWebView2Controller.IsVisible Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#isvisible)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Controller::Bounds property (get](/microsoft-edge/webview2/reference/win32/icorewebview2controller#get_bounds), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2controller#put_bounds)
* [ICoreWebView2Controller::IsVisible property (get](/microsoft-edge/webview2/reference/win32/icorewebview2controller#get_isvisible), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2controller#put_isvisible)

---


<!-- ---------- -->
###### Zooming

WebView2 `ZoomFactor` is used to scale just the web content.  This is also updated when the user zooms the content through **Ctrl**+Mouse Wheel.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Controller.ZoomFactor Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.zoomfactor#microsoft-web-webview2-core-corewebview2controller-zoomfactor)
* [CoreWebView2Controller.ZoomFactorChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.zoomfactorchanged)
* [CoreWebView2Controller.SetBoundsAndZoomFactor Method](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.setboundsandzoomfactor)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Controller.ZoomFactor Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#zoomfactor)
* [CoreWebView2Controller.ZoomFactorChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#zoomfactorchanged)
* [CoreWebView2Controller.SetBoundsAndZoomFactor Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#setboundsandzoomfactor)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Controller::ZoomFactor property (get](/microsoft-edge/webview2/reference/win32/icorewebview2controller#get_zoomfactor), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2controller#put_zoomfactor)
* [ICoreWebView2Controller::ZoomFactorChanged event (add](/microsoft-edge/webview2/reference/win32/icorewebview2controller#add_zoomfactorchanged), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2controller#remove_zoomfactorchanged)
* [ICoreWebView2Controller::SetBoundsAndZoomFactor method](/microsoft-edge/webview2/reference/win32/icorewebview2controller#setboundsandzoomfactor)

---


<!-- ------------------------------ -->
#### Rasterization scale

The `RasterizationScale` API scales all WebView2 UI including context menus, tooltip, and popups.  The app can set whether the WebView2 should detect monitor scale changes and automatically update the `RasterizationScale`.  `BoundsMode` is used to configure whether the `Bounds` property is interpreted as raw pixels, or DIPs (which need to be scaled by `RasterizationScale`).

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Controller.BoundsMode Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.boundsmode#microsoft-web-webview2-core-corewebview2controller-boundsmode)
  * [CoreWebView2BoundsMode Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2boundsmode)
* [CoreWebView2Controller.RasterizationScale Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.rasterizationscale)
* [CoreWebView2Controller.RasterizationScaleChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.rasterizationscalechanged)
* [CoreWebView2Controller.ShouldDetectMonitorScaleChanges Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.shoulddetectmonitorscalechanges)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Controller.BoundsMode Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#boundsmode)
  * [CoreWebView2BoundsMode Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2boundsmode)
* [CoreWebView2Controller.RasterizationScale Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#rasterizationscale)
* [CoreWebView2Controller.RasterizationScaleChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#rasterizationscalechanged)
* [CoreWebView2Controller.ShouldDetectMonitorScaleChanges Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#shoulddetectmonitorscalechanges)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Controller::BoundsMode property (get](/microsoft-edge/webview2/reference/win32/icorewebview2controller#get_bounds), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2controller#put_bounds)
  * [COREWEBVIEW2_BOUNDS_MODE enum](/microsoft-edge/webview2/reference/win32/icorewebview2#corewebview2_bounds_mode)
* [ICoreWebView2Controller::RasterizationScale property (get](/microsoft-edge/webview2/reference/win32/icorewebview2controller3#get_rasterizationscale), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2controller3#put_rasterizationscale)
* [ICoreWebView2Controller::RasterizationScaleChanged event (add](/microsoft-edge/webview2/reference/win32/icorewebview2controller3#add_rasterizationscalechanged), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2controller3#remove_rasterizationscalechanged)
* [ICoreWebView2Controller::ShouldDetectMonitorScaleChanges property (get](/microsoft-edge/webview2/reference/win32/icorewebview2controller3#get_shoulddetectmonitorscalechanges), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2controller3#put_rasterizationscale)

---


<!-- ---------- -->
###### Focus and tabbing

WebView2 raises events to let the app know when it gains or loses focus.  For tabbing, there's an API to move focus into WebView2, and an event for WebView2 to request the app to take focus back.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Controller.MoveFocus Method](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.movefocus)
  * [CoreWebView2MoveFocusReason Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2movefocusreason)
* [CoreWebView2Controller.MoveFocusRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.movefocusrequested)
  * [CoreWebView2MoveFocusRequestedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2movefocusrequestedeventargs)
* [CoreWebView2Controller.GotFocus Event](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.gotfocus)
* [CoreWebView2Controller.LostFocus Event](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.lostfocus)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Controller.MoveFocus Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#movefocus)
  * [CoreWebView2MoveFocusReason Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2movefocusreason)
* [CoreWebView2Controller.MoveFocusRequested Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#movefocusrequested)
  * [CoreWebView2MoveFocusRequestedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2movefocusrequestedeventargs)
* [CoreWebView2Controller.GotFocus Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#gotfocus)
* [CoreWebView2Controller.LostFocus Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#lostfocus)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Controller::MoveFocus method](/microsoft-edge/webview2/reference/win32/icorewebview2controller#movefocus)
  * [COREWEBVIEW2_MOVE_FOCUS_REASON enum](/microsoft-edge/webview2/reference/win32/icorewebview2#corewebview2_move_focus_reason)
* [ICoreWebView2Controller::MoveFocusRequested event (add](/microsoft-edge/webview2/reference/win32/icorewebview2controller#add_movefocusrequested), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2controller#remove_movefocusrequested)
  * [ICoreWebView2MoveFocusRequestedEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2movefocusrequestedeventargs)
* [ICoreWebView2Controller::GotFocus event (add](/microsoft-edge/webview2/reference/win32/icorewebview2controller#add_gotfocus), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2controller#remove_gotfocus)
* [ICoreWebView2Controller::LostFocus event (add](/microsoft-edge/webview2/reference/win32/icorewebview2controller#add_lostfocus), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2controller#remove_lostfocus)

---


<!-- ---------- -->
###### Parent window

WebView2 can be re-parented to a different parent `HWND`. WebView2 also needs to be notified when the app's position on the screen changes.


##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Controller.NotifyParentWindowPositionChanged Method](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.notifyparentwindowpositionchanged)
* [CoreWebView2Controller.ParentWindow Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.notifyparentwindowpositionchanged)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Controller.NotifyParentWindowPositionChanged Method](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.notifyparentwindowpositionchanged)
* [CoreWebView2Controller.ParentWindow Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.parentwindow)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Controller::NotifyParentWindowPositionChanged method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#notifyparentwindowpositionchanged)
* [ICoreWebView2Controller::ParentWindow property (get)](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#parentwindow)<!--no put-->

---


<!-- ---------- -->
###### Keyboard accelerators

When WebView2 has focus, it receives input directly from the user. An app may want to intercept and handle certain accelerator key combinations or disable the normal browser accelerator key behaviors.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Settings.AreBrowserAcceleratorKeysEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.arebrowseracceleratorkeysenabled)
* [CoreWebView2Controller.AcceleratorKeyPressed Event](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.acceleratorkeypressed)
  * [CoreWebView2AcceleratorKeyPressedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2acceleratorkeypressedeventargs)
  * [CoreWebView2KeyEventKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2keyeventkind)
  * [CoreWebView2PhysicalKeyStatus Struct](/dotnet/api/microsoft.web.webview2.core.corewebview2physicalkeystatus)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Settings.AreBrowserAcceleratorKeysEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.arebrowseracceleratorkeysenabled)
* [CoreWebView2Controller.AcceleratorKeyPressed Event](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.acceleratorkeypressed)
  * [CoreWebView2AcceleratorKeyPressedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2acceleratorkeypressedeventargs)
  * [CoreWebView2KeyEventKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2keyeventkind)
  * [CoreWebView2PhysicalKeyStatus Struct](/dotnet/api/microsoft.web.webview2.core.corewebview2physicalkeystatus)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Settings::AreBrowserAcceleratorKeysEnabled property (get](/microsoft-edge/webview2/reference/win32/icorewebview2settings3#get_arebrowseracceleratorkeysenabled), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2settings3#put_arebrowseracceleratorkeysenabled)
* [ICoreWebView2Controller::AcceleratorKeyPressed event (add](/microsoft-edge/webview2/reference/win32/icorewebview2controller#add_acceleratorkeypressed), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2controller#remove_acceleratorkeypressed)
  * [ICoreWebView2AcceleratorKeyPressedEventArgs class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2acceleratorkeypressedeventargs)
  * [ICoreWebView2KeyEventKind enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2keyeventkind)
  * [ICoreWebView2PhysicalKeyStatus struct](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2physicalkeystatus)

---


<!-- ---------- -->
###### Default background color

WebView2 can specify a default background color. This can be any opaque color or transparent color. This color will be used if the webpage doesn't set its own background color.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Controller.DefaultBackgroundColor Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.defaultbackgroundcolor)
  * [CoreWebView2Color Struct](/dotnet/api/microsoft.web.webview2.core.corewebview2color)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Controller.DefaultBackgroundColor Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.defaultbackgroundcolor#microsoft-web-webview2-core-corewebview2controller-defaultbackgroundcolor)
  * [CoreWebView2Color Struct](/dotnet/api/microsoft.web.webview2.core.corewebview2color)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Controller::DefaultBackgroundColor property (get](/microsoft-edge/webview2/reference/win32/icorewebview2controller2#get_defaultbackgroundcolor), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2controller2#put_defaultbackgroundcolor)
  * [COREWEBVIEW2_COLOR struct](/microsoft-edge/webview2/reference/win32/icorewebview2#corewebview2_color)

---


<!-- ====================================================================== -->
## Visual hosting

In visual hosting, content is embedded to a given location on the application. This location must handle how content will scale and behave in an app when the user interacts with the application.  In addition to the window management described for windowed hosting, visual hosting will need the app to manage the composition-based rendering, when it receives any user interactions.  For more information about visual hosting, see [Using the Visual layer in desktop apps](/windows/apps/desktop/modernize/visual-layer-in-desktop-apps).

If your WebView2 app uses visual hosting:

* Inputs are routed to the app's `HWND` and must be configured to send the spatial input (for example, mouse, touch, and pen) based on positions, _not_ what currently has focus, such as a keyboard.

The following APIs can be used when configuring WebView2 in a visual hosting environment:


<!-- ------------------------------ -->
#### Composition-based rendering

For composition-based WebView2 rendering, use the `CoreWebView2Environment` to create a `CoreWebView2CompositionController`. The `CoreWebView2CompositionController` implements all the APIs as `CoreWebView2Controller`, but includes additional APIs specific to composition-based rendering.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2CompositionController Class](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller)
* [CoreWebView2Environment.CreateCoreWebView2CompositionControllerAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createcorewebview2compositioncontrollerasync)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2CompositionController Class](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller)
* [CoreWebView2Environment.CreateCoreWebView2CompositionControllerAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createcorewebview2compositioncontrollerasync)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2CompositionController interface](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller)
* [ICoreWebView2Environment::CreateCoreWebView2CompositionController method](/microsoft-edge/webview2/reference/win32/icorewebview2environment3#createcorewebview2compositioncontroller)

---


<!-- ------------------------------ -->
#### Output

WebView2 can connect its composition tree to `IDCompositionVisual`, `IDCompositionTarget`, or `Windows::UI::Composition::ContainerVisual`.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2CompositionController.RootVisualTarget Property](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.rootvisualtarget)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2CompositionController.RootVisualTarget Property](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.rootvisualtarget)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2CompositionController::RootVisualTarget property (get](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller#get_rootvisualtarget), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller#put_rootvisualtarget)

---


<!-- ------------------------------ -->
#### Input

Spatial input such as mouse, touch, or pen is received by the app and must be sent to WebView2. WebView2 notifies the app when the cursor should be updated based on the input device's position.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2CompositionController.Cursor Property](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.cursor)
* [CoreWebView2CompositionController.CursorChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.cursorchanged)
* [CoreWebView2CompositionController.SystemCursorId Property](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.systemcursorid)
* [CoreWebView2CompositionController.SendMouseInput Method](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.sendmouseinput)
  * [CoreWebView2MouseEventKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2mouseeventkind)
  * [CoreWebView2MouseEventVirtualKeys Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2mouseeventvirtualkeys)
* [CoreWebView2CompositionController.SendPointerInput Method](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.sendpointerinput)
  * [CoreWebView2PointerEventKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2pointereventkind)
* [CoreWebView2Environment.CreateCoreWebView2PointerInfo Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createcorewebview2pointerinfo)
  * [CoreWebView2PointerInfo Class](/dotnet/api/microsoft.web.webview2.core.corewebview2pointerinfo)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2CompositionController.Cursor Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller#cursor)
* [CoreWebView2CompositionController.CursorChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller#cursorchanged)
* [CoreWebView2CompositionController.SendMouseInput Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller#sendmouseinput)
  * [CoreWebView2MouseEventKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2mouseeventkind)
  * [CoreWebView2MouseEventVirtualKeys Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2mouseeventvirtualkeys)
* [CoreWebView2CompositionController.SendPointerInput Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller#sendpointerinput)
  * [CoreWebView2PointerEventKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2mouseeventkind)
* [CoreWebView2Environment.CreateCoreWebView2PointerInfo Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#createcorewebview2pointerinfo)
  * [CoreWebView2PointerInfo Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2pointerinfo)

<!--TODO - not found, omitted:
* `CoreWebView2CompositionController.SystemCursorId` Property-->

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2CompositionController::Cursor property (get)](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller#get_cursor)<!--no put-->
* [ICoreWebView2CompositionController::CursorChanged event (add](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller#add_cursorchanged), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller#remove_cursorchanged)
* [ICoreWebView2CompositionController::SystemCursorId property (get)](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller#get_systemcursorid)<!--no put-->
* [ICoreWebView2CompositionController::SendMouseInput method](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller#sendmouseinput)
  * [COREWEBVIEW2_MOUSE_EVENT_KIND enum](/microsoft-edge/webview2/reference/win32/icorewebview2#corewebview2_mouse_event_kind)
  * [COREWEBVIEW2_MOUSE_EVENT_VIRTUAL_KEYS enum](/microsoft-edge/webview2/reference/win32/icorewebview2#corewebview2_mouse_event_virtual_keys)
* [ICoreWebView2CompositionController::SendPointerInput method](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller#sendpointerinput)
  * [COREWEBVIEW2_POINTER_EVENT_KIND enum](/microsoft-edge/webview2/reference/win32/icorewebview2#corewebview2_pointer_event_kind)
* [ICoreWebView2Environment::CreateCoreWebView2PointerInfo method](/microsoft-edge/webview2/reference/win32/icorewebview2environment3#createcorewebview2pointerinfo)
  * [ICoreWebView2PointerInfo interface](/microsoft-edge/webview2/reference/win32/icorewebview2pointerinfo)

---


<!-- ------------------------------ -->
#### Accessibility

By default, WebView2 will show up in the accessibility tree as a child of the parent `HWND`.  WebView2 provides an API to better position the WebView2 content relative to other elements in the app.

##### [.NET/C#](#tab/dotnetcsharp)

Not applicable.

##### [WinRT/C#](#tab/winrtcsharp)

Not applicable.

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2CompositionController::AutomationProvider property (get)](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller2#get_automationprovider)<!--no put-->
* [ICoreWebView2Environment::GetAutomationProviderForWindow method](/microsoft-edge/webview2/reference/win32/icorewebview2environment4#getautomationproviderforwindow)

---


<!-- ====================================================================== -->
<!-- ## See also -->

<!--
* []()
-->
