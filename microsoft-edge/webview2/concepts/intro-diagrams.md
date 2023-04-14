---
title: Intro diagrams about WebView2
description: Host web content in your Win32, .NET, UWP apps with the Microsoft Edge WebView2 control.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.localizationpriority: high
ms.technology: webview
ms.date: 04/06/2023
---
# Intro diagrams about WebView2


<!-- ====================================================================== -->
## High-level view of app development that includes WebView2 control instances

Developing a WebView2 app has the following high-level areas:
*  Dev machine
*  Distribute the app and Runtime
*  User machine
*  Resources


<!-- ------------------------------ -->
#### Diagram: Full diagram of WebView2

![Full diagram of WebView2](./index-images/full-diagram.png)

Main boxes in the full diagram of WebView2:
*  Dev machine
*  Distribute the Runtime
*  User machine
*  Resources

Details of the Dev machine:
*  Visual Studio project
   *  Layout designer
      *  WebView2 control instances
      *  Native control instances
   *  SDK
      *  Platform APIs
      *  `AddHostObjectToScript`
      *  JavaScript APIs (WebView2Script package)
*  Runtime

Details of Distribute the Runtime:
*  Evergreen
   *  Link to the Evergreen Runtime bootstrapper
   *  Package the Evergreen Runtime bootstrapper
   *  Package the Evergreen Runtime standalone installer
*  Package a fixed-version Runtime

Details of the User machine:
*  Host app
   *  WebView2 native-side code
   *  WebView2 web-side code
   *  WebView2 control instances
   *  Non-WebView2 native-side code
   *  Non-WebView2 web-side code
   *  Native control instances
*  Runtime

Resources include:
*  Docs
*  Support 
*  Samples repo
*  Announcements repo
*  Feedback repo


<!-- ====================================================================== -->
## Top-level WebView2 components

| Shorthand term | Complete term |
|---|---|
|  _App_ | Any app, for any framework or platform, that includes an instance of the WebView2 control.  An app can have areas that use a WebView2 control instance, and other areas that don't use the control. |
|  _SDK_ | The WebView2 SDK.  When part of your app uses WebView2, that code can call these APIs in conjunction with instances of the WebView2 control.  The Release SDK ships to users, and contains only stable APIs.  The Prerelease SDK is only used by Devs, and contains some experimental APIs. |
|  _Control_ | An instance of the WebView2 control.  In an app, typically appears as a rectangular area than contains web content. |
|  _Runtime_ | The WebView2 Runtime, which is a browser engine.  Installed on user machines, as well as Dev and test machines. |
|  _Preview channel_ | A preview channel of Microsoft Edge, either Beta (near-stable), Dev, or Canary (the very latest build; daily).  For Dev and test machines only, not user machines. |


<!-- ====================================================================== -->
## The WebView2 control, SDK, and Runtime

The WebView2 control, WebView2 SDK, and WebView2 Runtime have the following roles:

| Component | Role |
|:---|:---|
| WebView2 SDK | Provides APIs for developers to use in an app's code.  Used by Dev locally while coding the app.  Two versions: Prerelease SDK for local Dev testing, and Release SDK for developing shippable code for users. |
| WebView2 control | You embed the WebView2 control in the app.  Hosts the Runtime; serves as a visible area to display web content. |
| WebView2 Runtime | On Dev's test machine and on user machines.  Or, instead of using the Runtime, Dev can use a preview channel of Microsoft Edge for local testing, when using the Prerelease SDK. |


<!-- ------------------------------ -->
#### Diagram: Relationship between the WebView2 control, SDK, and Runtime

![Diagram: Relationship between the WebView2 control, SDK, and Runtime](./index-images/control-sdk-runtime.png)

Control:
*  WebView2 control - in the app layout; hosts the Runtime.

SDK:
*  WebView2 SDK - used by Dev while coding.  Either:
   *  Prerelease SDK (Dev only; includes experimental APIs for Dev testing).
   *  Release SDK.

Runtime:
*  WebView2 Runtime - a browser for use as a component of an app; on user machines.  Either:
   *  Preview channel of Microsoft Edge (Dev only)
   *  Runtime


<!-- ------------------------------ -->
#### Diagram: WebView2 control, Runtime, and SDK

![WebView2 control, Runtime, and SDK](./index-images/control-runtime-sdk.png)


This diagram shows the following outline:

Release SDK:
* .NET/C# APIs
* WinRT/C#
* Win32/C++
* WebView2Script package (JavaScript APIs)

Prerelease SDK:
* .NET/C# APIs, including experimental APIs
* WinRT/C#  APIs, including experimental APIs
* Win32/C++ APIs, including experimental APIs
* WebView2Script package (JavaScript APIs)

Runtime (for release) or Browser (for Prerelease)
* WebView2Script package (JavaScript APIs)


Runtime (for Release SDK) - WebView2Script package (JavaScript APIs)
Browser (for Prerelease SDK) - WebView2Script package (JavaScript APIs)


You periodically download the latest SDK from NuGet.  NuGet links are in [Release Notes for the WebView2 SDK](./release-notes.md).

The SDK includes the JavaScript API, which is in the `WebView2Script` package.

See also:
* [WebView2 API Reference](./webview2-api-reference.md)


<!-- ====================================================================== -->
## Design architecture of a WebView2 app

A host app contains the following categories of code and components:
*  Native-side code calls platform APIs and WebView2 APIs
*  WebView2 control instance
*  Native-side code calls platform APIs and WebView2 APIs
*  Web-side JavaScript code calls WebView2Script APIs & exposed native-side APIs


<!-- ------------------------------ -->
#### Diagram: Design architecture of a WebView2 app

![Design architecture of a WebView2 app](./index-images/app-design.png)

Categories of code:
*  Native-side WebView2 code, calls WebView2 APIs and platform APIs.
*  Web-side code (JavaScript), calls WebView2Script APIs & exposed native-side APIs.
*  Native-side non-WebView2 code, calls platform APIs and native controls.
*  Web-side non-WebView2 code.

Two-way code:
*  Call web-side code from native-side code
*  Call native-side code from web-side code


<!-- ====================================================================== -->
## Development machine vs. user machine

Here are the differences between the Dev machine and User machine, for which components are used.


<!-- ------------------------------ -->
#### Diagram: App on the Development machine and user machine

![App on the Development machine and user machine](./index-images/dev-side-user-side.png)

| Component | Dev machine | User machine |
|---|---|---|
| Runtime | A Preview channel of Microsoft Edge, or the Runtime that's part of the SDK. | Runtime (downloaded via bootstrapper, or packaged with app); Microsoft Edge isn't used. |
| Working environment | Visual Studio project that has the SDK package installed.  Layout designer includes WebView control areas & native, non-WebView control areas. | The App (including WebView control areas, and native, non-WebView control areas). |
| Activity | Dev works with the APIs in code (experimental APIs or stable APIs). | User machine runs app.  The WebView2 parts of the app (instances of the WebView2 control) use the Runtime to display webpage functionality. |
| User interface environment | Visual Studio (layout designer includes WebView control areas & native, non-WebView control areas). | The App (including WebView control areas, and native, non-WebView control areas). |
| SDK | Prerelease SDK (experimental APIs) or Release SDK (stable APIs). | No SDK; just the Runtime containing the executable stable APIs. |
| Control | Placed on layout designer in Visual Studio. | Areas (regions) of the app containing web content. |


<!-- ====================================================================== -->
## Ways to distribute, install, and update the Runtime on the user's machine

There are several ways to distribute the WebView2 Runtime with your app:


<!-- ------------------------------ -->
#### Diagram: Four approaches to distribute the WebView2 Runtime

![Diagram: Four approaches to distribute the WebView2 Runtime](./index-images/distribute-runtime.png)

| Name of distribution approach | Description | Notes |
|---|---|---|
| Link to the Evergreen Runtime bootstrapper | In your app's installer, link to the Evergreen Runtime bootstrapper.  Have your app's installer use this link to programmatically download and install the Evergreen bootstrapper onto the user's machine.  Then invoke the bootstrapper to install the appropriate Runtime for the user's device. | For users who have an online connection.  The Evergreen bootstrapper is a tiny installer that installs the correct Runtime for the user's CPU, using an internet connection. |
| Package the Evergreen Runtime bootstrapper | Download the Evergreen bootstrapper to your Dev machine.  Package and distribute the Evergreen bootstrapper with your app installer.  Then your app installer invokes the bootstrapper to install the Runtime on the user's machine. | For users who don't have a reliable connection to the bootstrapper CDN site. |
| Package the Evergreen Runtime standalone installer | Download the Evergreen standalone installer to your Dev machine, and package it with your app.  Package the Evergreen standalone installer with your app's installer.  Your app's installer then invokes the Evergreen standalone installer to install the Runtime on the user's device. | For offline users.  A large, standalone Evergreen Runtime installer for offline users, that includes the Evergreen Runtime. |
| Package a fixed-version Runtime | Download a version-specific, CPU-specific Runtime to your Dev machine.  Package and distribute the fixed-version Runtime with your app's installer.  Your app's installer installs the specific fixed-version Runtime on the user's machine. | Specialty case, for when you need specific version of the APIs; avoids testing whether latest APIs are available. |

The above approaches are listed in the same sequence as in the [Download the WebView2 Runtime](https://developer.microsoft.com/microsoft-edge/webview2#download-section) section of the **Microsoft Edge WebView2** page, from lightweight to heavyweight approaches.  Favor the lightweight approaches; use a heavyweight approach if required by a specialized scenario.

_Your app's installer_ means your app's installer/updater, which can be separate from your app, or a part of your app.

See also:
* [Understanding the options at the Runtime download page](./concepts/distribution.md#understanding-the-options-at-the-runtime-download-page) in _Distribute your app and the WebView2 Runtime_.


<!-- ====================================================================== -->
## Host app, WebView2 control, and HTTP server

The WebView2 control acts as an intermediary for communication between the host app and the HTTP server.


<!-- ------------------------------ -->
#### Diagram: Host app, WebView2 control, and HTTP server

![Host app, WebView2 control, and HTTP server](./index-images/hostapp-wv2ctrl-httpserver.png)


<!-- ====================================================================== -->
## Prerelease SDK with preview browser channel, or Release SDK with Runtime

| Version | Renderer platform | Description |
|:---|:---|:---|
| Prerelease SDK | A preview channel of Microsoft Edge (Beta, Dev, or Canary) | For experimenting and testing your app against upcoming changes, on your Dev machines. |
| Release SDK | The WebView2 Runtime | For shipping your app to end users. |

* A Prerelease version of the WebView2 SDK uses a preview channel of Microsoft Edge (Beta, Dev, or Canary).
* A Release version of the WebView2 SDK uses the WebView2 Runtime.


See also:
* [Understanding the options at the Runtime download page](./concepts/distribution.md#understanding-the-options-at-the-runtime-download-page) in _Distribute your app and the WebView2 Runtime_.
* [Prerelease and release SDKs for WebView2](./concepts/versioning.md)
* [Distribute your app and the WebView2 Runtime](./concepts/distribution.md)


<!-- ====================================================================== -->
## Using a Prerelease SDK and experimental APIs with a Preview channel of Microsoft Edge

To develop the prerelease version of your app using experimental APIs, or to test your app against upcoming SDK changes:

* On your Dev machine, in the Visual Studio project, install a **Prerelease** version of the `Microsoft.Web.WebView2` SDK NuGet package.  Write code that uses the **experimental** APIs (and stable APIs).
* On your Dev machine, install and use a preview channel of Microsoft Edge.

To distribute your prerelease app to your test machine:
* On your test machine, install a preview channel of Microsoft Edge.

See also:
* [Understand the different WebView2 SDK versions](./concepts/versioning.md) - Either use a prerelease SDK with a preview channel of Microsoft Edge, or use a release SDK with the WebView2 Runtime.


<!-- ====================================================================== -->
## Using a Release SDK and stable APIs with the Runtime

To develop the release version of your app:
* On your Dev machine, in the Visual Studio project, install a **Release** version of the `Microsoft.Web.WebView2` SDK NuGet package.  Write code that uses only the **stable** APIs.
* On your Dev machine, use the WebView2 Runtime (part of the SDK package).

The WebView2 Runtime is like a browser engine for use as a component in your app.

There are several ways to distribute your app and the Runtime to users.  See [Ways to distribute, install, and update the Runtime on the user's machine](#ways-to-distribute-install-and-update-the-runtime-on-the-users-machine) above.


See also:
* [Understand the different WebView2 SDK versions](./concepts/versioning.md) - Either use a prerelease SDK with a preview channel of Microsoft Edge, or use a release SDK with the WebView2 Runtime.


<!-- ====================================================================== -->
## How the WebView2 SDK is laid out in relation to how the WebView2 Runtime is laid out

todo: what's the intention here?


<!-- ====================================================================== -->
## Differences in the Runtime and the SDK across the frameworks

todo


<!-- ====================================================================== -->
## Resources

*  Docs - the present article is the main page for WebView2 docs. <!--[Introduction to Microsoft Edge WebView2](./index.md)-->
*  Support - see [Contact the WebView2 Team](./contact.md).
*  Runtime installer download page - see [Download the WebView2 Runtime](https://developer.microsoft.com/microsoft-edge/webview2#download-section).
*  NuGet SDK package download site - see [Microsoft.Web.WebView2](https://www.nuget.org/packages/Microsoft.Web.WebView2) at NuGet.org.
*  GitHub Repos
   *  [WebView2Samples repo](https://github.com/MicrosoftEdge/WebView2Samples) - contains completed Getting Started article projects (minimal code) and code-rich Samples.
   *  [WebView2Announcements repo](https://github.com/MicrosoftEdge/WebView2Announcements)
   *  [WebView2Feedback repo](https://github.com/MicrosoftEdge/WebView2Feedback)


<!-- ------------------------------ -->
#### Diagram: Resources

![Diagram: Resources](./index-images/resources.png)


<!-- ====================================================================== -->
## See also

* [Overview of WebView2 features and APIs](concepts/overview-features-apis.md)
* [Getting Started tutorials](get-started/get-started.md)
* [Distribute your app and the WebView2 Runtime](concepts/distribution.md)

developer.microsoft.com:
* [Microsoft Edge WebView2](https://developer.microsoft.com/microsoft-edge/webview2) - initial introduction to WebView2 features at developer.microsoft.com.
