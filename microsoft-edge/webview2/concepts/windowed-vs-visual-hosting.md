---
title: Windowed vs. Visual hosting of WebView2
description: Deciding whether to have your app use Windowed, Window to Visual, or Visual hosting of the WebView2 control.  Hosting WebView2 in windowed or visual environments.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 09/23/2024
---
# Windowed vs. Visual hosting of WebView2

There are three options for hosting the Microsoft Edge WebView2 control in your app:
* [Windowed hosting: For displaying content quickly and easily](#windowed-hosting-for-displaying-content-quickly-and-easily).
* [Window to Visual hosting: For a similar experience as Windowed hosting, with added benefits and tradeoff](#window-to-visual-hosting-for-a-similar-experience-as-windowed-hosting-with-added-benefits-and-tradeoff).
* [Visual hosting: For more granular control over layout](#visual-hosting-for-more-granular-control-over-layout).

You don't need to read this article if you use Windowed hosting in most scenarios.  Windowed hosting is a good starting point for most apps.  Read this article:
* If you are using Windowed hosting in uncommon scenarios and are experiencing persistent issues with DPI and scaling.  In that case, consider Window to Visual hosting.
* If you want to provide a more custom user experience (UX) and want to use Visual hosting.

The different approaches for hosting the WebView2 control in your app are similar in functionality, but they suit different needs depending on the app requirements, as follows:

| Approach | Description | Optimized for |
|---|---|---|
| Windowed hosting | The WebView2 control takes input from the operating system (OS).  The OS sends the input to the WebView2. | Displaying web content quickly and easily, without having to include features for inputs, outputs, and accessibility. |
| Window to Visual hosting | A combination of Windowed and Visual hosting. Similar to Windowed hosting except that WebView2 content is output to a visual that is hosted in a window rather having content output to the window directly. | A developer experience nearly identical to Windowed hosting, but with improved DPI/scaling handling and the caveat that pen input and handwriting is unsupported. |
| Visual hosting | Your host app takes spatial input (such as mouse or touch input) from the user.  Your app sends this input to the WebView2 control. | More granular control over layout.  For example, you can control the positioning of the WebView2 control in the page.  The app needs to do specific handling of window management and rendering APIs. |

<!-- todo: at "pen" above: 
change to "Windows Shell Handwriting (pen input)"?
probably pen input is generally supported, but the "Shell Handwriting" experience (internal: Abydos) is not.
were there other pen input scenarios that might be unsupported?
apply same wording at "Shell Handwriting" below.
-->

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

* The app handles keyboard accelerators and keyboard shortcuts when focus is on the WebView2. For example, pressing **Ctrl+C** in a WebView2 will be interpreted as trying to copy content in the WebView2, not interpreted as pressing **Ctrl** and **C** separately.<!-- todo: what is this item trying to convey?  handling keyboard accelerators is the same across all hosting modes, right? -->

* You don't have to manage the various composition-based rendering controls (such as Inputs, Outputs, and Accessibility controls) if you don't want to.


<!-- ------------------------------ -->
#### Disadvantages

Windowed hosting mode can run into DPI issues in some scenarios, such as when sharing a user data folder (and therefor sharing a browser process) across different applications with different DPI awareness.


<!-- ------------------------------ -->
#### APIs for Windowed hosting

For a list of APIs that can be used when configuring WebView2 for Windowed hosting (or for Window to Visual hosting), see [Rendering WebView2 in non-framework apps](./overview-features-apis.md#rendering-webview2-in-non-framework-apps) in _Overview of WebView2 features and APIs_.


<!-- ====================================================================== -->
## Window to Visual hosting: For a similar experience as Windowed hosting, with added benefits and tradeoff

_Window-to-Visual hosting_ means that the WebView2 content is output to a visual that is hosted in an HWND, rather than outputting content to a window directly or to a visual directly. By hosting content in an HWND, Window to Visual hosting mode enjoys the same ease of adoption benefits as Windowed mode, but by actually displaying content using a visual, it avoids some DPI and input issues that can result when using Windowed mode.

Window to Visual hosting does not require you to use WebView2 Visual hosting APIs.

To enable Window to Visual hosting, the environment variable `COREWEBVIEW2_FORCED_HOSTING_MODE` must be set to the value `COREWEBVIEW2_HOSTING_MODE_WINDOW_TO_VISUAL` before initializing your WebView2.

In Window-to-Visual hosting and Visual hosting, a _visual_ is a basic graphical unit that can be used to compose graphical experiences on Windows. The Windows graphics APIs that expose this functionality and are relevant to WebView2 are `DirectComposition` and `Windows.UI.Composition`. The "visual" in "Visual hosting" can be any one of `IDCompositionVisual`, `IDCompositionTarget`, or `Windows.UI.Composition.Visual`, which are visuals that are exposed through the `DirectComposition` and `Windows.UI.Composition` APIs.  (Window to Visual hosting uses `IDCompositionVisual` specifically.)  See:
* [Basic concepts](/windows/win32/directcomp/basic-concepts) in the Windows App Development > DirectComposition docs.
* [Composition visual](/windows/uwp/composition/composition-visual-tree) in the Windows App Development > UWP docs.


<!-- ------------------------------ -->
#### Advantages

* Different apps that share a WebView2 user data folder can have different DPI awareness.

* Different apps that share a WebView2 user data folder can have different integrity levels.

* Different apps that share a WebView2 user data folder won't potentially cause each other to hang.

* Changing monitor scale when hosting a WebView2 in a VSTO Add-in doesn't sporadically hang the application.  See [VSTO Add-ins](/visualstudio/vsto/office-solutions-development-overview-vsto#vsto-add-ins) in _Office solutions development overview (VSTO)_.
<!-- todo: alts:
* Prevents sporadically hanging the app when changing monitor scale, when hosting a WebView2 in a VSTO Add-in.  See [Foo].
* When hosting a WebView2 in a VSTO Add-in, changing monitor scale won't potentially cause the app to sporadically hang.  See [Foo].
* Changing monitor scale won't potentially cause the app to sporadically hang, when hosting a WebView2 in a VSTO Add-in.  See [Foo].
-->


<!-- ------------------------------ -->
#### Disadvantages

Enabling Window to Visual hosting mode removes support for Windows Shell Handwriting (pen input)<!-- todo: strike "(pen input)"?  do same in overview table --> within the WebView2.


<!-- ------------------------------ -->
#### APIs for Window to Visual hosting

For a list of APIs that can be used when configuring WebView2 Window to Visual hosting (or for Windowed hosting), see [Rendering WebView2 in non-framework apps](./overview-features-apis.md#rendering-webview2-in-non-framework-apps) in _Overview of WebView2 features and APIs_.


<!-- ====================================================================== -->
## Visual hosting: For more granular control over layout

When using _Visual hosting_, your host app receives spatial input (such as mouse or touch input) from the user, and forwards this input to the WebView2 control.

In Visual hosting, content is embedded at a given location in the application. This location must handle how content will scale and behave when the user interacts with the application.<!-- todo: What content is this referring to, the WebView2 content?  What does it mean to scale when the user interacts with the application - such as a gesture? --> In addition to the window management described for Windowed hosting, Visual hosting requires the app to manage the composition-based rendering when it receives any user interactions.<!-- todo: What does it mean to "manage the ... rendering"? Which user interactions would cause this, or what are the scenarios? -->

If your WebView2 app uses Visual hosting, inputs are routed to the app's `HWND` and must be configured to send the spatial input (such as mouse, touch, or pen) based on positions, _not_ based on what currently has focus, such as a keyboard.

If your WebView2 app uses Visual hosting, spatial inputs (such as mouse, touch, or pen) are sent to the app's `HWND`, not sent directly to the WebView2. The app should forward this spatial input to the WebView2 if the position of the input is over the WebView2, _not_ based on what currently has focus.

See also:
* [Using the Visual layer in desktop apps](/windows/apps/desktop/modernize/visual-layer-in-desktop-apps) in Windows > App development docs.


<!-- ------------------------------ -->
#### Advantages and disadvantages

Visual hosting allows for (and requires) more granular control of layout.  When using this approach, the app needs specific handling of window management and rendering APIs.

For example, when the user resizes the window, you must define how the WebView2 control scales in relation to the whole webpage, such as making the WebView2 scale twice as much as the app.
<!-- todo:
why would resizing require scaling the WebView2?
what does "whole webpage" mean here?
if scaling is required, why is the WebView2 scaling twice as much?
-->


<!-- ------------------------------ -->
#### APIs for Visual hosting

For a list of APIs that can be used when configuring WebView2 in a Visual hosting environment, see [Rendering WebView2 using Composition](./overview-features-apis.md#rendering-webview2-using-composition) in _Overview of WebView2 features and APIs_.


<!-- ====================================================================== -->
## Compatibility and constraints

Key compatibility limitations include the operating system and rendering in framework and non-framework apps.<!-- todo: what are the constraints about rendering, in framework and non-framework apps? -->


<!-- ------------------------------ -->
#### Operating systems

All hosting modes are supported wherever WebView2 is supported; that is, Windows 10 and later, and certain Windows Server versions.  Windows 7, 8 and 8.1 are no longer supported; Windows 7 and Windows 8 only support Windowed hosting, not Visual hosting.

See [Windows 7 and 8](../index.md#windows-7-and-8) in _Introduction to Microsoft Edge WebView2_.


<!-- ====================================================================== -->
## See also
<!-- all links in article, except api ref docs -->

* [Overview of WebView2 features and APIs](./overview-features-apis.md)
* [Windows 7 and 8](../index.md#windows-7-and-8) in _Introduction to Microsoft Edge WebView2_.

Other doc sets:
* [About Windows](/windows/win32/winmsg/about-windows) - Window management and `HWND` functionality.
* [Using the Visual layer in desktop apps](/windows/apps/desktop/modernize/visual-layer-in-desktop-apps) in Windows > App development docs.
* [Basic concepts](/windows/win32/directcomp/basic-concepts) in the Windows App Development > DirectComposition docs.
* [Composition visual](/windows/uwp/composition/composition-visual-tree) in the Windows App Development > UWP docs.
