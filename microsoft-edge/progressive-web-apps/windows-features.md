---
description: Progressively enhance your PWA for Windows with native app features
title: Tailor your PWA for Windows
author: erikadoyle
ms.author: edoyle
ms.date: 1/10/2018
ms.topic: article
ms.prod: microsoft-edge
keywords: progressive web apps, PWA, Edge, Windows, WinRT, UWP
---

# Tailor your PWA for Windows

You can enhance a Progressive Web App (PWA) with Windows native app features while still ensuring cross-browser compatibility. PWAs installed on Windows 10 are [*Universal Windows Platform*](https://docs.microsoft.com/en-us/windows/uwp/get-started/universal-application-platform-guide) (UWP) apps protected by Windows security with full accces to [Windows Runtime](https://docs.microsoft.com/en-us/uwp/api/) (WinRT) APIs, including those for:
- Controlling device features (such as camera, microphone, and GPS)
- Accessing user resources (such as calendar, contacts, documents, and music) 
- Launching / navigating your app through Cortana voice commands
- Integrating with the Windows OS (through the notification center, desktop taskbar, and context menus)

These are only a few examples of the superpowers available to your PWA running on Windows. This guide will help you get started differentiating your PWA for Windows through progressive enhancement.

> [!NOTE]
> These steps assume you've already used [*PWA Builder*](https://github.com/pwa-builder/ManifoldJS) (formerly known as *ManifoldJS*) to [turn your web app into an installable PWA for Windows 10](./get-started.md#enhance-your-web-app-into-a-pwa). If you're starting with an existing PWA, [here's a quick way to generate it as a Windows 10 app](./microsoft-store.md#1-generate-your-windows-10-app) and a [guide to debugging your PWA on Windows](./get-started.md#test-and-debug-your-pwa-on-windows). 


## Set app permissions

In order to call Windows Runtime APIs from your PWA, you'll need to [establish the requisite permissions](#application-content-uri-rules) (*Application Content URI Rules*) in your Windows app package manifest file.

If your app requires programmatic access to user resources like pictures or music, or to device features like the camera or microphone, you'll also need to add [app capability declarations](#app-capability-declarations) to your app package manifest in order for Windows to prompt the user for permission.

> [!NOTE]
> If you used [*PWA Builder*](https://github.com/pwa-builder/ManifoldJS) to generate your Windows 10 app, you'll find your app package manifest file at  `PWA\Store packages\windows10\manifest\appxmanifest.xml`

### Application Content URI Rules (ACURs)

Through ACURs, otherwise known as a *URL allow list*, you are able to give the URLs of your PWA direct access to Windows Runtime APIs. At the Windows OS level, the right policy bounds will be set to allow code hosted on your web server to directly call platform APIs. You define these bounds in the app package manifest (`.appxmanifest`) file when you specify your PWA's URLs as `ApplicationContentUriRules`.

Your rules should include your app’s start page and any other pages you want included as app pages. If your user navigates to a URL that is *not* included in your rules, Windows will open the target URL in the Microsoft Edge browser rather than your standalone PWA window (`WWAHost.exe` process). You can also exclude specific URLs. 

There are several ways to specify a URL `Match` in your rules:

- An exact hostname
- A hostname for which a URI with any subdomain of that hostname is included or excluded
- An exact URI
- An exact URI containing a query property
- A partial path and a wildcard to indicate a particular file extension for an include rule
- Relative paths for exclude rules

Here are a few examples of ACURs.

```XML
<Application
Id="App"
StartPage="https://contoso.com/home">
<uap:ApplicationContentUriRules>
    <uap:Rule Type="include" Match="https://contoso.com/" WindowsRuntimeAccess="all" />
    <uap:Rule Type="include" Match="https://*.contoso.com/" WindowsRuntimeAccess="all" />
    <uap:Rule Type="exclude" Match="https://contoso.com/excludethispage.aspx" />
</uap:ApplicationContentUriRules>
```

URLs defined within the app's ACURs can be granted permission to the Windows Runtime through the `WindowsRuntimeAccess` attribute, which accepts the following values:

- **`all`**: Remote JavaScript code has access to all WinRT APIs and any local packaged components. The [`Windows`](https://docs.microsoft.com/en-us/uwp/api/) namespace will be injected and present in the script engine
- **`allowForWeb`**: Remote JavaScript code access is limited to local packaged components, including custom C++/C# components.
- **`none`**: Default. The specified URL has no platform access.


### App capability declarations

If your app needs programmatic access to user resources like pictures or music, or to devices like a camera or a microphone, you'll need to declare the appropriate capability in your app package manifest (`.appxmanifest`) file. There are three app capability declaration categories: 

- [General-use capabilities](https://docs.microsoft.com/en-us/windows/uwp/packaging/app-capability-declarations#general-use-capabilities) that apply to most common app scenarios. 
- [Device capabilities](https://docs.microsoft.com/en-us/windows/uwp/packaging/app-capability-declarations#device-capabilities) that allow your app to access peripheral and internal devices. 
- [Special-use capabilities](https://docs.microsoft.com/en-us/windows/uwp/packaging/app-capability-declarations#special-and-restricted-capabilities) that support enterprise scenarios and require a Microsoft Store *company account*. For more info about company accounts, see [*Account types, locations, and fees*](https://docs.microsoft.com/en-us/windows/uwp/publish/account-types-locations-and-fees).

You request access by declaring capabilities in your app’s [package manifest](https://docs.microsoft.com/en-us/uwp/schemas/appxpackage/appx-package-manifest). For more information, see [*App capability declarations*](https://docs.microsoft.com/en-us/windows/uwp/packaging/app-capability-declarations) and [*Packaging for Universal Windows Platform (UWP) apps*](https://docs.microsoft.com/en-us/windows/uwp/packaging/index).

> [!NOTE]
> Your app's Microsoft Store page will list all the capabilities you declare in your app package manifest. Be sure to only specify the capabilities that your app actually uses.

Some capabilities provide apps access to a sensitive resource. These resources are considered sensitive because they can access the user’s personal data or cost the user money. Privacy settings, managed by the Windows 10 [**Settings**](https://binged.it/2lOGSH0) app, let the user dynamically control access to sensitive resources. Thus, it’s important that your app doesn’t assume a sensitive resource is always available. For more info about accessing sensitive resources, see [*Guidelines for privacy-aware apps*](https://msdn.microsoft.com/library/windows/apps/hh768223.aspx).


## Find and use WinRT APIs in JavaScript

The power of PWAs is that you can use [progressive enhancement](https://en.wikipedia.org/wiki/Progressive_enhancement) to scale up (or down) the user experience according to the capabilities of the device that your web app is running on. When your [PWA is installed as a Windows 10 app](./microsoft-store.md#1-generate-your-windows-10-app), it has the ability to call Windows Runtime APIs and provide native app features while still providing your non-Windows customers with a  default experience that works across browsers. 

The key to is to use [feature detection](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection) to test for support of a given feature before using it. This allows you to write JavaScript on your page that will only be executed in the context where the APIs are available. In this case, it will only execute while inside a Windows PWA.

Feature detection can be as simple as looking for the `Windows` object (the entrypoint to the [WinRT namespace](https://docs.microsoft.com/en-us/uwp/api/)) as below:

```JavaScript
if(window.Windows){
/*Execute code that calls Windows APIs */
}
```

Given that not all Windows APIs are available on all [Windows 10 device types](https://docs.microsoft.com/en-us/windows/uwp/get-started/universal-application-platform-guide#device-families), its generally useful to use more specific feature detection to further qualify the namespace of the API you'll be calling:

```JavaScript
if(window.Windows && Windows.Media.SpeechRecognition){
/*Execute code that calls Windows APIs */
}
```

To get started calling WinRT APIs, you can either browse code snippets for [common app scenarios](#common-app-scenarios) or search for a specific [JavaScript WinRT API](#winrt-apis-available-in-javascript).

### Common app scenarios

Here are some PWA code examples for common Windows app scenarios.

Windows app feature | PWA samples
:--- | :----
**Notifications** | Start screen tiles, Tile badges, Scheduled tile updates, Toast notifications
**OS integration** | File handler registration, App launch at startup, Handling activation, Native messaging
**Windows UX customizations** | [App title bar](https://github.com/MicrosoftEdge/MicrosoftEdge-Documentation-Private/pwa-samples/tasks/app-titlebar.md), [App context menu](https://github.com/MicrosoftEdge/MicrosoftEdge-Documentation-Private/pwa-samples/tasks/app-context-menu.md), Desktop taskbar commands
**Other tasks** | Background tasks, Caching and data storage, [Cortana voice commands](https://github.com/MicrosoftEdge/MicrosoftEdge-Documentation-Private/pwa-samples/tasks/cortana-voice-commands.md), Hosting HTMLWebView, Using a custom WinRT component, Web authentication broker

You can [browse the full collection]() and download the zip from GitHub.


### WinRT APIs available in JavaScript

Native Windows Runtime (WinRT) APIs provide additional app functionality in all of the following areas.

WinRT Namespace | Description
:--- | :----
[AI](https://docs.microsoft.com/en-us/uwp/api/windows.AI.MachineLearning.Preview) (Preview) | Contains classes that enable apps to load machine learning models, bind data as inputs, and evaluate the results.
[ApplicationModel](https://docs.microsoft.com/en-us/uwp/api/windows.applicationmodel) | Provides an app with access to core system functionality and run-time information about its app package, and handles suspend operations.
[Data](https://docs.microsoft.com/en-us/uwp/api/windows.data.html) | Provides utility classes for working with various data formats, including HTML, JSON, PDF, text and XML.
[Devices](https://docs.microsoft.com/en-us/uwp/api/windows.devices) | This namespace provides access to the low level device providers, including ADC, GPIO, I2 C, PWM and SPI.
[Foundation](https://docs.microsoft.com/en-us/uwp/api/windows.foundation) | Enables fundamental Windows Runtime functionality, including managing asynchronous operations and accessing property stores. This namespace also defines common value types that represent Uniform Resource Identifier (URI), dates and times, 2-D measurements, and other basic values.
[Gaming](https://docs.microsoft.com/en-us/uwp/api/windows.gaming.input) |Provides access to game controller input, the Game bar, game monitoring, and game chat.
[Globalization](https://docs.microsoft.com/en-us/uwp/api/windows.globalization) | Provides globalization support for language profiles, geographic regions, and international calendars.
[Graphics](https://docs.microsoft.com/en-us/uwp/api/windows.graphics) | Provides basic data types that contain info on how to draw graphics. These data structs are commonly used to define how large surfaces are drawn when using the CompositionVirtualDrawingSurface class.
[Management](https://docs.microsoft.com/en-us/uwp/api/windows.management) | Provides capabilities to force a sync from an Mobile Device Management (MDM) device to the server. This MDM sync protocol is based on the Open Mobile Alliance - Device Management standard.
[Media](https://docs.microsoft.com/en-us/uwp/api/windows.media) |Provides classes for creating and working with media such as photos, audio recordings and videos.
[Networking](https://docs.microsoft.com/en-us/uwp/api/windows.networking) |Provides access to hostnames and endpoints used by network apps.
[Perception](https://docs.microsoft.com/en-us/uwp/api/windows.perception) |Contains classes for perceiving the user's surroundings, letting apps locate and reason about the device relative to the surfaces and holograms around the user.
[Security](https://docs.microsoft.com/en-us/uwp/api/windows.security.authentication.identity) | Provides classes for user authentication, credentials management, cryptographic operations and enterprise data protection features.
[Services](https://docs.microsoft.com/en-us/uwp/api/windows.services.cortana) |Provides access to Microsoft services for Cortana, Maps, Microsoft Store and Targeted (subscription) content.
[Storage](https://docs.microsoft.com/en-us/uwp/api/windows.storage) |Provides classes for managing files, folders, and application settings.
[System](https://docs.microsoft.com/en-us/uwp/api/windows.system) |Enables system functionality such as launching apps, obtaining information about a user, and memory profiling.
[UI](https://docs.microsoft.com/en-us/uwp/api/windows.ui) | Provides an app with access to core system functionality and run-time information about its UI.
[Web](https://docs.microsoft.com/en-us/uwp/api/windows.web) | Provides information on errors resulting from web service operations.

## Learn more about WinRT

The [**Windows Dev Center**](https://developer.microsoft.com/en-us/windows/apps) is your complete reference for all stages of Windows app building, from [getting started](https://developer.microsoft.com/en-us/windows/apps/getstarted), to [designing](https://developer.microsoft.com/windows/apps/design), [developing](https://developer.microsoft.com/windows/apps/develop), and [publishing](https://developer.microsoft.com/store/publish-apps) to the Microsoft Store.

For more on using the *Windows Runtime* (WinRT) with JavaScript and the *Universal Windows Platform* (UWP) in general, check out these resources:

 [**Using the Windows Runtime in JavaScript**]( https://docs.microsoft.com/en-us/scripting/jswinrt/using-the-windows-runtime-in-javascript)

 This topic provides introductory information and links to topics that explain the basic concepts of using Windows Runtime APIs in JavaScript, including an explanation of how Windows Runtime types are represented, how to use asynchronous Windows Runtime methods, and how to listen to and handle Windows Runtime events. 

 [**Create a simple Windows Runtime component and call it with JavaScript**](https://docs.microsoft.com/en-us/windows/uwp/winrt-components/walkthrough-creating-a-simple-windows-runtime-component-and-calling-it-from-javascript)

 This walkthrough shows how you can use the .NET Framework with Visual Basic or C# to create your own Windows Runtime types, packaged in a Windows Runtime component, and how to call the component from your Universal Windows app built for Windows using JavaScript.

For further information about the Universal Windows Platform (UWP), see:

[**Intro to the Universal Windows Platform**](https://docs.microsoft.com/en-us/windows/uwp/get-started/universal-application-platform-guide)

In this guide, you'll learn about the Universal Windows Platform (UWP) and Windows 10:

 - What a device family is and how to decide which one to target.
 - What an Extension SDK is and how it provides access to APIs specific to a class of devices.
 - New UI controls and panels for adapting your UI to different screen sizes or rotations.
 - How to understand and control the API surface that is available to your app.