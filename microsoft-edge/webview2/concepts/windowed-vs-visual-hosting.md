---
title: Windowed vs. Visual hosting of WebView2
description: Deciding whether to have your app use Windowed, Window to Visual, or Visual hosting of the WebView2 control.  Hosting WebView2 in Windowed or Visual environments.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 10/02/2024
---
# Windowed vs. Visual hosting of WebView2

There are three options for hosting the Microsoft Edge WebView2 control in your app:
* The Windowed hosting mode.
* The Window to Visual hosting mode.
* The Visual hosting mode.

You don't need to read this article if you use Windowed hosting in most scenarios.  Windowed hosting is a good starting point for most apps.  Read this article:
* If you are using Windowed hosting in uncommon scenarios and are experiencing persistent issues with DPI and scaling.  In this case, consider Window to Visual hosting.
* If you want to provide a more custom user experience (UX).  In this case, consider Visual hosting.

The different approaches for hosting the WebView2 control in your app are similar in functionality, but they suit different needs depending on the app requirements, as follows:

| Approach | Description | Optimized for |
|---|---|---|
| Windowed hosting | The WebView2 control takes input from the operating system (OS).  The OS sends the input to the WebView2. | Displaying web content quickly and easily, without having to include features for inputs, outputs, and accessibility. |
| Window to Visual hosting | A combination of Windowed and Visual hosting. Similar to Windowed hosting except that WebView2 content is output to a Visual that is hosted in a window rather having content output to the window directly. | A developer experience nearly identical to Windowed hosting, but with improved DPI/scaling handling and the caveat that the Windows Shell Handwriting experience is unsupported. |
| Visual hosting | Your host app takes spatial input (such as mouse or touch input) from the user.  Your app sends this input to the WebView2 control. | More granular control over control composition.  The app needs to do specific handling of window management and rendering APIs. |

These approaches have different requirements, constraints, and benefits.
* Windowed hosting is simpler to implement than Visual hosting.
* Visual hosting requires all the API calls that Windowed hosting requires, and has additional requirements for it to render properly.

The supported API lists are linked to in the sections below:
* [APIs for Windowed hosting](#apis-for-windowed-hosting)
* [APIs for Window to Visual hosting](#apis-for-window-to-visual-hosting)
* [APIs for Visual hosting](#apis-for-visual-hosting)


<!-- ====================================================================== -->
## Windowed hosting: For displaying content quickly and easily

_Windowed hosting_ means that in your app, WebView2 content is hosted directly in a window; that is, an HWND. The WebView2 HWND inherits many default properties from the operating system (OS).  The WebView2 control takes input from the OS, and the OS sends the input to the WebView2 control.  You can have multiple HWNDs in your app that will each be used as a WebView2 component to access web content.

The benefit of this is that some of the Input/Output commands are handled for you by the OS or by the framework. However, you will still need to handle some aspects of window management.

For general information about Window management and `HWND` functionality, see [About Windows](/windows/win32/winmsg/about-windows).


<!-- ------------------------------ -->
#### Advantages

* Windowed hosting allows for a solution that quickly displays web content without having to implement functionality for inputs, outputs, and accessibility.

* Owned and child windows (such as menus and context menus) automatically scale to match the app's parent `HWND` scaling.

* Windowed hosting handles how the WebView2 control manages being focused and tabbing in or out of itself when pressing **Tab** reaches the final element.

* You don't have to manage the various composition-based rendering controls (such as Inputs, Outputs, and Accessibility controls) if you don't want to.


<!-- ------------------------------ -->
#### Disadvantages

Windowed hosting mode can run into DPI issues in some scenarios, such as when sharing a user data folder (and therefor sharing a browser process) across different applications with different DPI awareness.


<!-- ------------------------------ -->
#### APIs for Windowed hosting

For a list of APIs that can be used when configuring WebView2 for Windowed hosting (or for Window to Visual hosting), see [Rendering WebView2 in non-framework apps](./overview-features-apis.md#rendering-webview2-in-non-framework-apps) in _Overview of WebView2 APIs_.


<!-- ====================================================================== -->
## Window to Visual hosting: For a similar experience as Windowed hosting, with added benefits and tradeoff

_Window-to-Visual hosting_ means that the WebView2 content is outputted to a Visual that is hosted in an HWND, rather than outputting content to a window directly or to a Visual directly.  By hosting content in an HWND, Window to Visual hosting is easy to use, in the same ways as Windowed hosting.  But by displaying content by using a Visual, Window-to-Visual hosting avoids some DPI and input issues that can result when using Windowed hosting.

Window to Visual hosting doesn't require you to use the WebView2 Visual hosting APIs.

To enable Window to Visual hosting, the environment variable `COREWEBVIEW2_FORCED_HOSTING_MODE` must be set to the value `COREWEBVIEW2_HOSTING_MODE_WINDOW_TO_VISUAL` before initializing your WebView2.

In Window-to-Visual hosting and Visual hosting, a _Visual_ is a basic graphical unit that can be used to compose graphical experiences on Windows. The Windows graphics APIs that expose this functionality and are relevant to WebView2 are `DirectComposition` and `Windows.UI.Composition`. The "Visual" in "Visual hosting" can be any one of `IDCompositionVisual`, `IDCompositionTarget`, or `Windows.UI.Composition.Visual`, which are Visuals that are exposed through the `DirectComposition` and `Windows.UI.Composition` APIs.  (Window to Visual hosting uses `IDCompositionVisual` specifically.)  See:
* [Basic concepts](/windows/win32/directcomp/basic-concepts) in the Windows App Development > DirectComposition docs.
* [Composition visual](/windows/uwp/composition/composition-visual-tree) in the Windows App Development > UWP docs.


<!-- ------------------------------ -->
#### Advantages

* Different apps that share a WebView2 user data folder can have different DPI awareness.

* Different apps that share a WebView2 user data folder can have different integrity levels.

* Different apps that share a WebView2 user data folder won't potentially cause each other to hang due to attached window input queues.

* When hosting a WebView2 in a VSTO Add-in, changing monitor scale won't potentially cause the app to hang. See [VSTO Add-ins](/visualstudio/vsto/office-solutions-development-overview-vsto#vsto-add-ins) in _Office solutions development overview (VSTO)_.


<!-- ------------------------------ -->
#### Disadvantages

Enabling Window to Visual hosting mode removes support for Windows Shell Handwriting within the WebView2.

See also:
* [Ink input](/windows/win32/input_ink/input-ink-portal) - Windows App Development > User Interaction.
* [shellhandwriting.h header](/windows/win32/api/shellhandwriting/) - Win32 API.


<!-- ------------------------------ -->
#### APIs for Window to Visual hosting

For a list of APIs that can be used when configuring WebView2 Window to Visual hosting (or for Windowed hosting), see [Rendering WebView2 in non-framework apps](./overview-features-apis.md#rendering-webview2-in-non-framework-apps) in _Overview of WebView2 APIs_.


<!-- ====================================================================== -->
## Visual hosting: For more granular control over layout

When using _Visual hosting_, your host app receives spatial input (such as mouse or touch input) from the user, and forwards this input to the WebView2 control.  Visual hosting requires the app to do the same window management as Windowed hosting, but has additional window management requirements regarding:
* Scaling the contents.
* Routing spatial inputs (such as mouse, touch, or pen).


<!-- ------------------------------ -->
#### Requirements for scaling the contents

Per composition-based rendering, a WebView2 control is part of a Visual tree, so by default, it's rendered at a scale that's based on the scales of all of its ancestor Visuals.  For example, if a WebView2's ancestor Visual is scaled (zoomed) 2x, then the WebView2's contents are also rendered at 2x scale.  If the WebView2's parent Visual is scaled 2x and that Visual's parent is also scaled 2x, then the WebView2 is scaled 4x.  But because the WebView2 isn't scaling its own contents, they're blurry.

To resolve this, the app can undo the default Visual scaling of the WebView2, and instead use the Rasterization Scale APIs to apply the intended Visual scaling.  This results in the WebView2's contents rendering at the correct scale.  See [Rasterization scale](./overview-features-apis.md#rasterization-scale) in _Overview of WebView2 APIs_.


<!-- ------------------------------ -->
#### Requirements for routing spatial inputs (mouse, touch, or pen)

If your WebView2 app uses Visual hosting, no spatial inputs (such as mouse, touch, or pen) are sent to the WebView2 control, unless the app manages such input.  Input is sent to the app's `HWND`, and the app is responsible for forwarding this spatial input to the WebView2, if the input's position is over the WebView2.

The app is also responsible for any necessary transformation of input positions into the WebView2's coordinate space.


See also:
* [Using the Visual layer in desktop apps](/windows/apps/desktop/modernize/visual-layer-in-desktop-apps) in Windows > App development docs.


<!-- ------------------------------ -->
#### Advantages and disadvantages

Visual hosting allows for (and requires) more granular control of layout.  When using this approach, the app needs specific handling of window management and rendering APIs.

For example, if a user action causes the WebView2's Visual tree to scale, the app must adjust the WebView2's scale to render correctly relative to its parent Visuals.


<!-- ------------------------------ -->
#### APIs for Visual hosting

For a list of APIs that can be used when configuring WebView2 in a Visual hosting environment, see [Rendering WebView2 using Composition](./overview-features-apis.md#rendering-webview2-using-composition) in _Overview of WebView2 APIs_.


<!-- ====================================================================== -->
## Compatibility and constraints

Key compatibility limitations include the operating system and rendering in framework and non-framework apps.


<!-- ------------------------------ -->
#### Operating systems

All hosting modes are supported wherever WebView2 is supported.

See also:
* [Support Windows versions](../index.md#supported-windows-versions) in _Introduction to Microsoft Edge WebView2_.


<!-- ------------------------------ -->
#### Framework constraints

`CreateCoreWebView2CompositionController` does not support WinAppSDK Visuals; that is, Visual objects in the `Microsoft.UI.Composition` namespace, described in [Enhance UI with the Visual layer (Windows App SDK/WinUI 3)](/windows/apps/windows-app-sdk/composition).


<!-- ====================================================================== -->
## See also
<!-- all links in article, except api ref docs -->

* [Overview of WebView2 APIs](./overview-features-apis.md)
<!-- omit:
* [Enhance UI with the Visual layer (Windows App SDK/WinUI 3)](https://learn.microsoft.com/windows/apps/windows-app-sdk/composition) - Windows App Development. -->

External:
* [About Windows](/windows/win32/winmsg/about-windows) - Window management and `HWND` functionality.
* [Using the Visual layer in desktop apps](/windows/apps/desktop/modernize/visual-layer-in-desktop-apps) - Windows App Development.
* [Basic concepts](/windows/win32/directcomp/basic-concepts) - Windows App Development > DirectComposition.
* [Composition visual](/windows/uwp/composition/composition-visual-tree) - Windows App Development > UWP.
* [Ink input](/windows/win32/input_ink/input-ink-portal) - Windows App Development > User Interaction.
* [shellhandwriting.h header](/windows/win32/api/shellhandwriting/) - Win32 API.
