---
title: Windowed vs. visual hosting of WebView2
description: Deciding whether to have your app use windowed hosting vs. visual hosting of the WebView2 control.  Hosting WebView2 in windowed or visual environments.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 08/23/2022
---
# Windowed vs. visual hosting of WebView2

There are two options for hosting the Microsoft Edge WebView2 control in your app: windowed hosting and visual hosting.

| Approach | Description | Optimized for |
|---|---|
| Windowed hosting | The WebView2 control takes input from the operating system (OS).  The OS sends the input to the WebView2. | Displaying web content quickly and easily, without having to include features for inputs, outputs, and accessibility. |
| Visual hosting | Your host app takes spatial input (such as mouse or touch input) from the user.  Your app sends this input to the WebView2 control. | Granular controls.  The app needs to do specific handling of window management and rendering APIs. |

Windowed hosting is simpler to implement than visual hosting.  Visual hosting requires everything that windowed hosting requires, and has additional requirements, for it to render properly.

Windowed hosting and visual hosting achieve the same output, but in different ways.  The choice between the two options isn't a matter of convenience, but is based on what works best for the app.

Hosting the WebView2 control is about how to get WebView2 onto different platforms.

These approaches have different requirements, constraints, and benefits.

Both approaches implement a whiteboard or container approach for storing and presenting information.  The hosting approach determines how the app works.


<!-- ====================================================================== -->
## Scenarios for selecting the hosting approach

Both approaches for hosting the WebView2 control in your app are similar in functionality, but they suit different needs depending on the app requirements.


#### Windowed hosting: Good for displaying content quickly and easily

There are instances where you might want to focus on displaying web content as quickly and easily as possible in your app.  Windowed hosting allows for a solution that quickly displays web content without having to include features for inputs, outputs, and accessibility.


#### Visual hosting: Good for granular controls

Visual-based hosting allows for (and requires) more granular controls.  When using this approach, the app needs specific handling of window management and rendering APIs.


<!-- ====================================================================== -->
## Compatibility and constraints

Key compatibility limitations include the operating system and rendering in framework and non-framework apps.


<!-- ------------------------------ -->
#### Operating system

Windows 7 and Windows 8 can only do windowed hosting.


<!-- ------------------------------ -->
#### Rendering WebView2 in framework and non-framework apps

If you're using a UI framework for your app, you should use the corresponding WebView2 element for that UI framework.  If you aren't using a UI framework for your app (such as Win32 or React Native) or your UI framework doesn't have a WebView2 element, you'll need to create `CoreWebView2Controller` and render it into the desired app.

**Note:** If your app's UI is built using `DirectComposition` or `Windows.UI.Composition`, then you should use `CoreWebView2CompositionController`, otherwise you should use `CoreWebView2Controller`.

The `CoreWebView2Controller` properties and methods:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Controller.CoreWebView2 Property](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2controller.corewebview2?view=webview2-dotnet-1.0.1293.44)
* [CoreWebView2Controller.Close Method](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2controller.close?view=webview2-dotnet-1.0.1293.44)
* [CoreWebView2Environment.CreateCoreWebView2ControllerAsync Method](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createcorewebview2controllerasync)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Controller.CoreWebView2 Property](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2controller?view=webview2-1.0.1293.44#get_corewebview2)
* [CoreWebView2Controller.Close Method](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller?view=webview2-winrt-1.0.1293.44#close)
* [CoreWebView2Environment.CreateCoreWebView2ControllerAsync Method](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.1293.44#createcorewebview2controllerasync)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Controller::CoreWebView2 property](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2controller?view=webview2-1.0.1293.44#get_corewebview2)<!--no put-->
* [ICoreWebView2Controller::Close method](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2controller?view=webview2-1.0.1293.44#close)
* [ICoreWebView2Environment::CreateCoreWebView2Controller method](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2environment?view=webview2-1.0.1293.44#createcorewebview2controller)

---


<!-- ====================================================================== -->
## Windowed hosting

Windowed hosting can be described as a whiteboard or container that stores information.  You can have multiple whiteboards in your app that will each be used as a WebView component to access web content.  Some of the Output/Input commands are handled for you by the framework you choose; however, you will still need to handle window management.

Benefits for Windowed hosting include:

* Zooming and rasterization scales (for example, menus, context menus, and so on) will also automatically scale to the app's parent `HWND`. It also handles how the WebView manages being focused and tabbing in/out of itself when it reaches the final element.

* The app handles keyboard accelerators and keyboard shortcuts when in the WebView. For example, `Ctrl+C` in a WebView will know that you are trying to copy content in the WebView, and not pressing `Ctrl` and `C` separately.

* You don't have to manage the various composition-based rendering (for example, Inputs, Outputs, and Accessibility controls) if you don't want to.


<!-- ------------------------------ -->
#### Window management

The following aspects of window management are handled in a windowed hosting environment.


<!-- ---------- -->
###### Sizing, positioning, and visibility

`CoreWebView2Controller` takes a parent `HWND`.  The `Bounds` property sizes and positions the WebView2 relative to the parent `HWND`.  The visibility of WebView2 can be toggled by using `IsVisible`.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Controller.Bounds Property](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2controller.bounds?view=webview2-dotnet-1.0.1293.44#microsoft-web-webview2-core-corewebview2controller-bounds)
* [CoreWebView2Controller.IsVisible Property](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2controller.isvisible?view=webview2-dotnet-1.0.1293.44)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Controller.Bounds Property](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller?view=webview2-winrt-1.0.1293.44#bounds)
* [CoreWebView2Controller.IsVisible Property](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller?view=webview2-winrt-1.0.1293.44#isvisible)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Controller::Bounds property (get](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2controller?view=webview2-1.0.1293.44#get_bounds), [put)](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2controller?view=webview2-1.0.1293.44#put_bounds)
* [ICoreWebView2Controller::IsVisible property (get](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2controller?view=webview2-1.0.1293.44#get_isvisible), [put)](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2controller?view=webview2-1.0.1293.44#put_isvisible)

---


<!-- ---------- -->
###### Zooming

WebView2 `ZoomFactor` is used to scale just the web content.  This is also updated when the user zooms the content through `Ctrl` + Mouse Wheel.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Controller.ZoomFactor Property](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2controller.zoomfactor?view=webview2-dotnet-1.0.1293.44#microsoft-web-webview2-core-corewebview2controller-zoomfactor)
* [CoreWebView2Controller.ZoomFactorChanged Event](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2controller.zoomfactorchanged?view=webview2-dotnet-1.0.1293.44)
* [CoreWebView2Controller.SetBoundsAndZoomFactor Method](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2controller.setboundsandzoomfactor?view=webview2-dotnet-1.0.1293.)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Controller.ZoomFactor Property](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller?view=webview2-winrt-1.0.1293.44#zoomfactor)
* [CoreWebView2Controller.ZoomFactorChanged Event](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller?view=webview2-winrt-1.0.1293.44#zoomfactorchanged)
* [CoreWebView2Controller.SetBoundsAndZoomFactor Method](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller?view=webview2-winrt-1.0.1293.44#setboundsandzoomfactor)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Controller::ZoomFactor property (get](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2controller?view=webview2-1.0.1293.44#get_zoomfactor), [put)](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2controller?view=webview2-1.0.1293.44#put_zoomfactor)
* [ICoreWebView2Controller::ZoomFactorChanged event (add](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2controller?view=webview2-1.0.1293.44#add_zoomfactorchanged), [remove)](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2controller?view=webview2-1.0.1293.44#remove_zoomfactorchanged)
* [ICoreWebView2Controller::SetBoundsAndZoomFactor method](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2controller?view=webview2-1.0.1293.44#setboundsandzoomfactor)

---


<!-- ------------------------------ -->
#### Rasterization scale

The `RasterizationScale` API scales all WebView2 UI including context menus, tooltip, and popups.  The app can set whether the WebView2 should detect monitor scale changes and automatically update the `RasterizationScale`.  `BoundsMode` is used to configure whether the `Bounds` property is interpreted as raw pixels, or DIPs (which need to be scaled by `RasterizationScale`).

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Controller.BoundsMode Property](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2controller.boundsmode?view=webview2-dotnet-1.0.1293.44#microsoft-web-webview2-core-corewebview2controller-boundsmode)
  * [CoreWebView2BoundsMode Enum](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2boundsmode?view=webview2-dotnet-1.0.1293.44)
* [CoreWebView2Controller.RasterizationScale Property](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2controller.rasterizationscale?view=webview2-dotnet-1.0.1293.44)
* [CoreWebView2Controller.RasterizationScaleChanged Event](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2controller.rasterizationscalechanged?view=webview2-dotnet-1.0.1293.44)
* [CoreWebView2Controller.ShouldDetectMonitorScaleChanges Property](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2controller.shoulddetectmonitorscalechanges?view=webview2-dotnet-1.0.1293.44)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Controller.BoundsMode Property](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller?view=webview2-winrt-1.0.1293.44#boundsmode)
  * [CoreWebView2BoundsMode Enum](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2boundsmode?view=webview2-winrt-1.0.1293.44)
* [CoreWebView2Controller.RasterizationScale Property](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller?view=webview2-winrt-1.0.1293.44#rasterizationscale)
* [CoreWebView2Controller.RasterizationScaleChanged Event](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller?view=webview2-winrt-1.0.1293.44#rasterizationscalechanged)
* [CoreWebView2Controller.ShouldDetectMonitorScaleChanges Property](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller?view=webview2-winrt-1.0.1293.44#shoulddetectmonitorscalechanges)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Controller::BoundsMode property (get](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2controller?view=webview2-1.0.1293.44#get_bounds), [put)](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2controller?view=webview2-1.0.1293.44#put_bounds)
  * [COREWEBVIEW2_BOUNDS_MODE enum](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-1.0.1293.44#corewebview2_bounds_mode)
* [ICoreWebView2Controller::RasterizationScale property (get](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2controller3?view=webview2-1.0.1293.44#get_rasterizationscale), [put)](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2controller3?view=webview2-1.0.1293.44#put_rasterizationscale)
* [ICoreWebView2Controller::RasterizationScaleChanged event (add](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2controller3?view=webview2-1.0.1293.44#add_rasterizationscalechanged), [remove)](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2controller3?view=webview2-1.0.1293.44#remove_rasterizationscalechanged)
* [ICoreWebView2Controller::ShouldDetectMonitorScaleChanges property (get](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2controller3?view=webview2-1.0.1293.44#get_shoulddetectmonitorscalechanges), [put)](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2controller3?view=webview2-1.0.1293.44#put_rasterizationscale)

---


<!-- ---------- -->
###### Focus and tabbing

WebView2 raises events to let the app know when it gains or loses focus.  For tabbing, there's an API to move focus into WebView2, and an event for WebView2 to request the app to take focus back.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Controller.MoveFocus Method](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2controller.movefocus?view=webview2-dotnet-1.0.1293.44)
  * [CoreWebView2MoveFocusReason Enum](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2movefocusreason?view=webview2-dotnet-1.0.1293.44)
* [CoreWebView2Controller.MoveFocusRequested Event](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2controller.movefocusrequested?view=webview2-dotnet-1.0.1293.44)
  * [CoreWebView2MoveFocusRequestedEventArgs Class](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2movefocusrequestedeventargs?view=webview2-dotnet-1.0.1293.44)
* [CoreWebView2Controller.GotFocus Event](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2controller.gotfocus?view=webview2-dotnet-1.0.1293.44)
* [CoreWebView2Controller.LostFocus Event](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2controller.lostfocus?view=webview2-dotnet-1.0.1293.44)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Controller.MoveFocus Method](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller?view=webview2-winrt-1.0.1293.44#movefocus)
  * [CoreWebView2MoveFocusReason Enum](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2movefocusreason?view=webview2-winrt-1.0.1293.44)
* [CoreWebView2Controller.MoveFocusRequested Event](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller?view=webview2-winrt-1.0.1293.44#movefocusrequested)
  * [CoreWebView2MoveFocusRequestedEventArgs Class](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2movefocusrequestedeventargs?view=webview2-winrt-1.0.1293.44)
* [CoreWebView2Controller.GotFocus Event](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller?view=webview2-winrt-1.0.1293.44#gotfocus)
* [CoreWebView2Controller.LostFocus Event](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller?view=webview2-winrt-1.0.1293.44#lostfocus)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Controller::MoveFocus method](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2controller?view=webview2-1.0.1293.44#movefocus)
  * [COREWEBVIEW2_MOVE_FOCUS_REASON enum](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-1.0.1293.44#corewebview2_move_focus_reason)
* [ICoreWebView2Controller::MoveFocusRequested event (add](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2controller?view=webview2-1.0.1293.44#add_movefocusrequested), [remove)](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2controller?view=webview2-1.0.1293.44#remove_movefocusrequested)
  * [ICoreWebView2MoveFocusRequestedEventArgs interface](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2movefocusrequestedeventargs?view=webview2-1.0.1293.44)
* [ICoreWebView2Controller::GotFocus event (add](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2controller?view=webview2-1.0.1293.44#add_gotfocus), [remove)](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2controller?view=webview2-1.0.1293.44#remove_gotfocus)
* [ICoreWebView2Controller::LostFocus event (add](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2controller?view=webview2-1.0.1293.44#add_lostfocus), [remove)](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2controller?view=webview2-1.0.1293.44#remove_lostfocus)

---


<!-- ---------- -->
###### Parent window

WebView2 can be re-parented to a different parent `HWND`. WebView2 also needs to be notified when the app's position on the screen changes.


##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Controller.NotifyParentWindowPositionChanged Method](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2controller.notifyparentwindowpositionchanged?view=webview2-dotnet-1.0.1293.44)
* [CoreWebView2Controller.ParentWindow Property](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2controller.notifyparentwindowpositionchanged?view=webview2-dotnet-1.0.1293.44)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Controller.NotifyParentWindowPositionChanged Method](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2controller.notifyparentwindowpositionchanged?view=webview2-dotnet-1.0.1293.44)
* [CoreWebView2Controller.ParentWindow Property](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2controller.parentwindow?view=webview2-dotnet-1.0.1293.44)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Controller::NotifyParentWindowPositionChanged method](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller?view=webview2-winrt-1.0.1293.44#notifyparentwindowpositionchanged)
* [ICoreWebView2Controller::ParentWindow property (get)](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller?view=webview2-winrt-1.0.1293.44#parentwindow)<!--no put-->

---


<!-- ---------- -->
###### Keyboard accelerators

When WebView2 has focus, it receives input directly from the user. An app may want to intercept and handle certain accelerator key combinations or disable the normal browser accelerator key behaviors.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Settings.AreBrowserAcceleratorKeysEnabled Property](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2settings.arebrowseracceleratorkeysenabled?view=webview2-dotnet-1.0.1293.44)
* [CoreWebView2Controller.AcceleratorKeyPressed Event](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2controller.acceleratorkeypressed?view=webview2-dotnet-1.0.1293.44)
  * [CoreWebView2AcceleratorKeyPressedEventArgs Class](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2acceleratorkeypressedeventargs?view=webview2-dotnet-1.0.1293.44)
  * [CoreWebView2KeyEventKind Enum](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2keyeventkind?view=webview2-dotnet-1.0.1293.44)
  * [CoreWebView2PhysicalKeyStatus Struct](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2physicalkeystatus?view=webview2-dotnet-1.0.1293.44)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Settings.AreBrowserAcceleratorKeysEnabled Property](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2settings.arebrowseracceleratorkeysenabled?view=webview2-dotnet-1.0.1293.44)
* [CoreWebView2Controller.AcceleratorKeyPressed Event](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2controller.acceleratorkeypressed?view=webview2-dotnet-1.0.1293.44)
  * [CoreWebView2AcceleratorKeyPressedEventArgs Class](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2acceleratorkeypressedeventargs?view=webview2-dotnet-1.0.1293.44)
  * [CoreWebView2KeyEventKind Enum](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2keyeventkind?view=webview2-dotnet-1.0.1293.44)
  * [CoreWebView2PhysicalKeyStatus Struct](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2physicalkeystatus?view=webview2-dotnet-1.0.1293.44)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Settings::AreBrowserAcceleratorKeysEnabled property (get](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2settings3?view=webview2-1.0.1293.44#get_arebrowseracceleratorkeysenabled), [put)](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2settings3?view=webview2-1.0.1293.44#put_arebrowseracceleratorkeysenabled)
* [ICoreWebView2Controller::AcceleratorKeyPressed event (add](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2controller?view=webview2-1.0.1293.44#add_acceleratorkeypressed), [remove)](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2controller?view=webview2-1.0.1293.44#remove_acceleratorkeypressed)
  * [ICoreWebView2AcceleratorKeyPressedEventArgs class](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2acceleratorkeypressedeventargs?view=webview2-winrt-1.0.1293.44)
  * [ICoreWebView2KeyEventKind enum](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2keyeventkind?view=webview2-winrt-1.0.1293.44)
  * [ICoreWebView2PhysicalKeyStatus struct](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2physicalkeystatus?view=webview2-winrt-1.0.1293.44)

---


<!-- ---------- -->
###### Default background color

WebView2 can specify a default background color. This can be any opaque color or transparent color. This color will be used if the webpage doesn't set its own background color.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Controller.DefaultBackgroundColor Property](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2controller.defaultbackgroundcolor?view=webview2-dotnet-1.0.1293.44)
  * [CoreWebView2Color Struct](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2color?view=webview2-dotnet-1.0.1293.44)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Controller.DefaultBackgroundColor Property](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2controller.defaultbackgroundcolor?view=webview2-dotnet-1.0.1293.44#microsoft-web-webview2-core-corewebview2controller-defaultbackgroundcolor)
  * [CoreWebView2Color Struct](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2color?view=webview2-dotnet-1.0.1293.44)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Controller::DefaultBackgroundColor property (get](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2controller2?view=webview2-1.0.1293.44#get_defaultbackgroundcolor), [put)](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2controller2?view=webview2-1.0.1293.44#put_defaultbackgroundcolor)
  * [COREWEBVIEW2_COLOR struct](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-1.0.1293.44#corewebview2_color)

---


<!-- ====================================================================== -->
## Visual hosting

Visual Hosting can be described as a single whiteboard in which the information is written directly to the board. By doing so, content is embedded to a location on the whiteboard. This location must handle how it will scale and behave in an app when there's interaction with the app. In addition to the window management described  for windowed hosting, visual hosting will need the app to manage the composition-based rendering, when it receives any and all user interactions.

If your WebView2 app uses visual hosting:

* The controls or configurations to set the DPI scaling must be set by the app.

* Inputs are routed to the app's `HWND` and must be configured to send the spatial input (for example, mouse, touch, and pen) based on positions, _not_ what currently has focus like a keyboard.

The following APIs can be used when configuring WebView2 in a visual hosting environment.


<!-- ------------------------------ -->
#### Composition-based rendering

For composition based WebView2 rendering, use the `CoreWebView2Environment` to create a `CoreWebView2CompositionController`. The `CoreWebView2CompositionController` implements all the APIs as `CoreWebView2Controller`, but includes additional APIs specific to composition-based rendering.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2CompositionController Class](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller?view=webview2-dotnet-1.0.1293.44)
* [CoreWebView2Environment.CreateCoreWebView2CompositionControllerAsync Method](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createcorewebview2compositioncontrollerasync?view=webview2-dotnet-1.0.1293.44)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2CompositionController Class](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller?view=webview2-dotnet-1.0.1293.44)
* [CoreWebView2Environment.CreateCoreWebView2CompositionControllerAsync Method](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createcorewebview2compositioncontrollerasync?view=webview2-dotnet-1.0.1293.44)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2CompositionController interface](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller?view=webview2-1.0.1293.44)
* [ICoreWebView2Environment::CreateCoreWebView2CompositionController method](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2environment3?view=webview2-1.0.1293.44#createcorewebview2compositioncontroller)

---


<!-- ------------------------------ -->
#### Output

WebView2 can connect its composition tree to `IDCompositionVisual`, `IDCompositionTarget`, or `Windows::UI::Composition::ContainerVisual`.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2CompositionController.RootVisualTarget Property](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.rootvisualtarget?view=webview2-dotnet-1.0.1293.44)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2CompositionController.RootVisualTarget Property](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.rootvisualtarget?view=webview2-dotnet-1.0.1293.44)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2CompositionController::RootVisualTarget property (get](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller?view=webview2-1.0.1293.44#get_rootvisualtarget), [put)](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller?view=webview2-1.0.1293.44#put_rootvisualtarget)

---


<!-- ------------------------------ -->
#### Input

Spatial input such as mouse, touch, or pen is received by the app and must be sent to WebView2. WebView2 notifies the app when the cursor should be updated based on the input device's position.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2CompositionController.Cursor Property](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.cursor?view=webview2-dotnet-1.0.1293.44)
* [CoreWebView2CompositionController.CursorChanged Event](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.cursorchanged?view=webview2-dotnet-1.0.1293.44)
* [CoreWebView2CompositionController.SystemCursorId Property](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.systemcursorid?view=webview2-dotnet-1.0.1293.44)
* [CoreWebView2CompositionController.SendMouseInput Method](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.sendmouseinput?view=webview2-dotnet-1.0.1293.44)
  * [CoreWebView2MouseEventKind Enum](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2mouseeventkind)
  * [CoreWebView2MouseEventVirtualKeys Enum](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2mouseeventvirtualkeys?view=webview2-dotnet-1.0.1293.44)
* [CoreWebView2CompositionController.SendPointerInput Method](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.sendpointerinput?view=webview2-dotnet-1.0.1293.44)
  * [CoreWebView2PointerEventKind Enum](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2pointereventkind?view=webview2-dotnet-1.0.1293.44)
* [CoreWebView2Environment.CreateCoreWebView2PointerInfo Method](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createcorewebview2pointerinfo?view=webview2-dotnet-1.0.1293.44)
  * [CoreWebView2PointerInfo Class](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2pointerinfo?view=webview2-dotnet-1.0.1293.44)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2CompositionController.Cursor Property](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller?view=webview2-winrt-1.0.1293.44#cursor)
* [CoreWebView2CompositionController.CursorChanged Event](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller?view=webview2-winrt-1.0.1293.44#cursorchanged)
* [CoreWebView2CompositionController.SendMouseInput Method](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller?view=webview2-winrt-1.0.1293.44#sendmouseinput)
  * [CoreWebView2MouseEventKind Enum](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2mouseeventkind)
  * [CoreWebView2MouseEventVirtualKeys Enum](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2mouseeventvirtualkeys?view=webview2-winrt-1.0.1293.44)
* [CoreWebView2CompositionController.SendPointerInput Method](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller?view=webview2-winrt-1.0.1293.44#sendpointerinput)
  * [CoreWebView2PointerEventKind Enum](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2mouseeventkind?view=webview2-winrt-1.0.1293.44)
* [CoreWebView2Environment.CreateCoreWebView2PointerInfo Method](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.1293.44#createcorewebview2pointerinfo)
  * [CoreWebView2PointerInfo Class](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2pointerinfo?view=webview2-winrt-1.0.1293.44)

<!--TODO - not found, omitted:
* `CoreWebView2CompositionController.SystemCursorId` Property-->

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2CompositionControllerC::Cursor property (get)](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller?view=webview2-1.0.1293.44#get_cursor)<!--no put-->
* [ICoreWebView2CompositionController::CursorChanged event (add](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller?view=webview2-1.0.1293.44#add_cursorchanged), [remove)](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller?view=webview2-1.0.1293.44#remove_cursorchanged)
* [ICoreWebView2CompositionController::SystemCursorId property (get)](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller?view=webview2-1.0.1293.44#get_systemcursorid)<!--no put-->
* [ICoreWebView2CompositionController::SendMouseInput method](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller?view=webview2-1.0.1293.44#sendmouseinput)
  * [COREWEBVIEW2_MOUSE_EVENT_KIND enum](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-1.0.1293.44#corewebview2_mouse_event_kind)
  * [COREWEBVIEW2_MOUSE_EVENT_VIRTUAL_KEYS enum](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-1.0.1293.44#corewebview2_mouse_event_virtual_keys)
* [ICoreWebView2CompositionController::SendPointerInput method](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller?view=webview2-1.0.1293.44#sendpointerinput)
  * [COREWEBVIEW2_POINTER_EVENT_KIND enum](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-1.0.1293.44#corewebview2_pointer_event_kind)
* [ICoreWebView2Environment::CreateCoreWebView2PointerInfo method](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2environment3?view=webview2-1.0.1293.44#createcorewebview2pointerinfo)
  * [ICoreWebView2PointerInfo interface](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2pointerinfo?view=webview2-1.0.1293.44)

---


<!-- ------------------------------ -->
#### Accessibility

By default, WebView2 will show up in the accessibility tree as a child of the parent `HWND`.  WebView2 provides an API to better position the WebView2 content relative to other elements in the app.

##### [.NET/C#](#tab/dotnetcsharp)

Not applicable.

##### [WinRT/C#](#tab/winrtcsharp)

Not applicable.

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2CompositionController::AutomationProvider property (get)](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller2?view=webview2-1.0.1293.44#get_automationprovider)<!--no put-->
* [ICoreWebView2Environment::GetAutomationProviderForWindow method](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2environment4?view=webview2-1.0.1293.44#getautomationproviderforwindow)

---


<!-- ====================================================================== -->
<!-- ## See also -->

<!--
* []()
-->
 