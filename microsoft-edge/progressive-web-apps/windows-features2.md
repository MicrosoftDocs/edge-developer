---
description: Progressively enhance your PWA for Windows with native app features
title: Tailor your PWA for Windows
author: erikadoyle
ms.author: edoyle
ms.date: 4/10/2018
ms.topic: article
ms.prod: microsoft-edge
keywords: progressive web apps, PWA, Edge, Windows, WinRT, UWP
---

# Tailor your PWA for Windows

PWAs installed on Windows 10 enjoy [all the benefits](../progressive-web-apps.md#pwas-on-windows-10) of running as [Universal Windows Platform](https://docs.microsoft.com/en-us/windows/uwp/get-started/universal-application-platform-guide) (UWP) apps, including protection through Windows app sandboxing security and full access to [Windows Runtime](https://docs.microsoft.com/en-us/uwp/api/) (WinRT) APIs, including those for:

- Controlling device features (such as camera, microphone, GPS)
- Accessing user resources (such as calendar, contacts, documents,  music) 
- Launching / navigating your app through Cortana voice commands
- Integrating with the Windows OS (through the Windows *Action Center*, desktop taskbar, and context menus)

...and these are only a few of the added possibilities for your PWA on Windows!

This guide will show you how to install, run, and enhance your PWA as a Windows 10 app, while still ensuring cross-browser and cross-platform compatibility.

## Prerequisites

- An existing PWA (or hosted web app), either a live or localhost site. This guide will use the sample PWA from [*Get started with Progressive Web Apps*](./get-started.md).

- Download the (free) [Visual Studio Community 2017](https://www.visualstudio.com/downloads/). You can also use the *Professional*, *Enterprise*, or [*Preview*](https://www.visualstudio.com/vs/preview/) editions). From the *Visual Studio Installer*, choose the following Workloads:

    - **Universal Windows Platform development**
 
## Set up and run your *Universal Windows* app

First let's set up our Windows app development environment in Visual Studio.

1. In your Windows **Settings**, turn on [**Developer mode**](https://docs.microsoft.com/en-us/windows/uwp/get-started/enable-your-device-for-development). (Type "developer mode" in the Windows searchbar to find it.)

1. Launch *Visual Studio* and **Create new project...**

2. Under the *JavaScript* > *Windows Universal* category, select:

    - **Hosted Web App (Universal Windows)** if you're using a release version of Visual Studio, or
    - **Progressive Web App (Universal Windows)** if you're using a *Visual Studio Preview* build

    (The underlying project template is the same.)

3. Select the default Windows 10 *Target version* (most recent release) and *Minimum version* (build 10586 or higher) and click **OK**.

    ![Visual Studio selection dialog for UWP project target builds](./media/vs-target-min-version.png)

    Your new project will then load with the *package.appxmanifest* designer open. This  is where you'll configure the details of your app, including package identity, package dependencies, required capabilities, visual elements, and extensibility points. This is an easily configurable, temporary version of the app package manifest used during app development.

    When you build your app project, [Visual Studio generates an *AppxManifest.xml*](https://docs.microsoft.com/en-us/uwp/schemas/appxpackage/uapmanifestschema/generate-package-manifest) file from this metadata, which will be used for installing and running your app. Whenever you update your *package.appxmanifest* file, be sure to rebuild the project so they are reflected in your *AppxManifest.xml* at runtime.

4. In the manifest designer **Application** panel, enter the URL of your PWA as the **Start page**. 

    ![Application panel of package.appxmanifest designer](./media/vs-manifest-application.png)

    You can also modify the **Display name** and **Description** as you like.

5. [Save down this file]() (or another 512x512 image of your choosing) locally. 

    Then, in the manifest designer **Visual Assets** panel, click on the **Source** field **...** button, select it as your source file, and click **Generate**. (Then click **OK** to overrite the default placeholder images).

    ![Visual Assets panel of package.appxmanifest designer](./media/vs-manifest-visual-assets.png)

    This will generate the basic visual assets for installing, running, launching, and distributing your app in the store. 
    
    > [!NOTE]
    > If you see any red ('X') errors indicating missing images, you can click on the **...** buttons to manually select a file from the generated images.

6. In the manifest designer **Content URIs** panel, replace *http://example.com* with the location of your PWA (such that **Rule** = *include* and **WinRT Access** = *All*). 

    This grants your PWA permission to call native Windows Runtime (WinRT) APIs when running as a Windows 10 app, which we'll do a bit later. If your actual PWA doesn't require WinRT access, you can switch the **WinRT Access** value to *None*. Either way, be sure to sub out the default *http://example.com* string with the URI of your PWA, or your app won't properly load at runtime.

    You're ready run and debug your PWA as a Windows 10 app. If you're using a localhost site to step through this guide, make sure its running. Then,

7. **Build** (Ctrl+Shift+F5) and **Run** (F5) your PWA project. Your website should now launch in a standalone app window. Not only is it  a *hosted web app*; it's running as a *Progressive Web App* installed on Windows 10!

### Debug your PWA as a Windows 10 app

Debug your server-side code the same way you would any web app, using your usual IDE and workflow. The changes you deploy live will be reflected in your installed PWA the next time you launch it (no need to redeploy your *Universal Windows* app package).

For client-side debugging within your Windows 10 app, you'll need the *Microsoft Edge DevTools Preview* app. This standalone app includes all the functionality of the original in-browser [Microsoft Edge DevTools](../devtools-guide.md) (including [PWA tools](../devtools-guide/debugger/progressive-web-apps.md)), plus basic [remote debugging](../devtools-protocol/0.1/clients.md#microsoft-edge-devtools-preview) support and a [*Debug Target* chooser](../devtools-guide.md#microsoft-store-app) for attaching to *any* running instance of the EdgeHTML engine, including add-ins for *Office*, *Cortana*, app webviews, and of course, *PWAs running on Windows*.

Here's how to set up debugging for your PWA.

1. Install the [**Microsoft Edge DevTools Preview**](https://www.microsoft.com/en-us/store/p/microsoft-edge-devtools-preview/9mzbfrmz0mnj) app from the Microsoft Store if you don't already have it.

2. With your PWA site up and running, launch the DevTools app.

3. From Visual Studio, launch your Windows 10 app with the **Start Without Debugging** (Ctrl+F5) command. (The DevTools app won't attach properly if the Visual Studio debugger is active.)

4. In the DevTools app, click the **Refresh** button in the *Local* debug target chooser. Your PWA site should now be listed. (If its also running in a browser window from *step 2*, it will be the last instance of that site in the list.)

5. Click on your PWA site listing to open a new DevTools instance tab and start debugging.

    ![Local Debug Targets chooser in the Microsoft Edge DevTools app](./media/devtools-local.png)

 6. You can verify that DevTools is attached to your *PWA-running-as-Windows-app*. In the DevTools **Console**, type:
 
    ```
    window.Windows
    ```

    This will return the global *Windows Runtime* object containing  all the [top-level WinRT namespaces](#call-native-windows-apis). This is your PWA's entrypoint to the [*Universal Windows Platform*](https://docs.microsoft.com/en-us/windows/uwp/index), and only
    exposed to web apps that run as Windows 10 apps (i.e., running outside the browser, in a *WWAHost.exe* process).

## Call native Windows APIs

Next let's progressively enhance the Windows experience of your PWA. As an installed Windows app, your PWA has full access to native *Windows Runtime* APIs (as long as you grant the requisite [*Application Content URI Rules* (ACURs)](#application-content-uri-rules)).


WinRT APIs can provide additional functionality to web apps in all  the following areas.

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

### Using WinRT APIs in JavaScript

Overall, WinRT APIs work in JavaScript the same way they do in C#, so you can follow the general [Universal Windows Platform documentation](https://docs.microsoft.com/en-us/windows/uwp/index) for usage. However, please note the following differences:

 - WinRT features in JavaScript use  [different casing conventions](https://docs.microsoft.com/en-us/scripting/jswinrt/using-the-windows-runtime-in-javascript#casing-conventions-with-windows-runtime-features)
 - [Events are represented as string identifiers](https://docs.microsoft.com/en-us/scripting/jswinrt/handling-windows-runtime-events-in-javascript) passed to class `addEventListener`/`removeEventListener` methods
 - [Asynchronous methods](https://docs.microsoft.com/en-us/scripting/jswinrt/using-windows-runtime-asynchronous-methods) use the JavaScript Promise model
 - APIs in the `Windows.UI.Xaml` namespace are not supported for JavaScript apps, which instead use the [EdgeHTML](https://docs.microsoft.com/en-us/microsoft-edge/dev-guide/whats-new) engine web rendering stack (HTML, CSS)

For more details, see [*Using the Windows Runtime in JavaScript*](https://docs.microsoft.com/en-us/scripting/jswinrt/using-the-windows-runtime-in-javascript).

### WinRT feature detection

We'll use some APIs from the [Windows.UI.Popups](https://docs.microsoft.com/en-us/uwp/api/windows.ui.popups) namespace to implement a custom context menu when your PWA runs as a Windows app.


### Set app permissions

In order to call Windows Runtime APIs from your PWA, you'll need to [establish the requisite permissions](#application-content-uri-rules) (or, *Application Content URI Rules*) in your Windows app package manifest (*.appxmanifest*) file.

If your app requires programmatic access to user resources like pictures or music, or to device features like the camera or microphone, you'll also need to add [app capability declarations](#app-capability-declarations) to your app package manifest in order for Windows to prompt the user for permission.

#### Application Content URI Rules

Through ACURs, otherwise known as a *URL allow list*, you are able to give the URLs of your PWA direct access to Windows Runtime APIs. At the Windows OS level, the right policy bounds will be set to allow code hosted on your web server to directly call platform APIs. You define these bounds in the app package manifest file when you specify your PWA's URLs as `ApplicationContentUriRules`.

Your rules should include your app’s start page and any other pages you want included as app pages. If your user navigates to a URL that is *not* included in your rules, Windows will open the target URL in the Microsoft Edge browser rather than your standalone PWA window (*WWAHost.exe* process). You can also exclude specific URLs. 

There are several ways to specify a URL `Match` in your rules:

- An exact hostname
- A hostname for which a URI with any subdomain of that hostname is included or excluded
- An exact URI
- An exact URI containing a query property
- A partial path and a wildcard to indicate a particular file extension for an include rule
- Relative paths for exclude rules

Here are a few examples of ACURs in a *.appxmanifest* file:

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

#### App capability declarations

If your app needs programmatic access to user resources like pictures or music, or to devices like a camera or a microphone, you'll need to declare the appropriate capability in your app package manifest file. There are three app capability declaration categories: 

- [General-use capabilities](https://docs.microsoft.com/en-us/windows/uwp/packaging/app-capability-declarations#general-use-capabilities) that apply to most common app scenarios. 
- [Device capabilities](https://docs.microsoft.com/en-us/windows/uwp/packaging/app-capability-declarations#device-capabilities) that allow your app to access peripheral and internal devices. 
- [Special-use capabilities](https://docs.microsoft.com/en-us/windows/uwp/packaging/app-capability-declarations#special-and-restricted-capabilities) that support enterprise scenarios and require a Microsoft Store *company account*. For more info about company accounts, see [*Account types, locations, and fees*](https://docs.microsoft.com/en-us/windows/uwp/publish/account-types-locations-and-fees).

You request access by declaring capabilities in your app’s [package manifest](https://docs.microsoft.com/en-us/uwp/schemas/appxpackage/appx-package-manifest). You can either manually specify these using the [*App capability declarations*](https://docs.microsoft.com/en-us/windows/uwp/packaging/app-capability-declarations) reference, or by using the Visual Studio *package.appmanifest* editor (if you're using the [Visual Studio *Progressive Web App*](./get-started.md#visual-studio) template to package your PWA for Windows):

![Visual Studio .appxmanifest capabilities editor](./media/vs-appxmanifest-editor-capabilities.png)

> [!NOTE]
> Your app's Microsoft Store page will list all the capabilities you declare in your app package manifest. Be sure to only specify the capabilities that your app actually uses.

Some capabilities provide apps access to sensitive resources. These resources are considered sensitive because they can access the user’s personal data or cost the user money. Privacy settings, managed by the Windows 10 [**Settings**](https://binged.it/2lOGSH0) app, let the user dynamically control access to sensitive resources. Thus, it’s important that your app doesn’t assume a sensitive resource is always available. For more info about accessing sensitive resources, see [*Guidelines for privacy-aware apps*](https://msdn.microsoft.com/library/windows/apps/hh768223.aspx).




### Find and use WinRT APIs in JavaScript

The power of PWAs is that you can use [progressive enhancement](https://en.wikipedia.org/wiki/Progressive_enhancement) to scale up (or down) the user experience according to the capabilities of the device that your web app is running on. When your [PWA is installed as a Windows 10 app](./microsoft-store.md#1-generate-your-windows-10-app), it has the ability to call Windows Runtime APIs and provide native app features while still providing your non-Windows customers with a reasonable baseline cross-browser experience.

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

To get started calling WinRT APIs, you can either browse JS code snippets for [common app scenarios](#common-app-scenarios) or search for a specific [JavaScript WinRT API](#winrt-apis-available-in-javascript).

#### Common app scenarios

Check out the [Universal Windows Platform (UWP) Code Samples](https://developer.microsoft.com/en-us/windows/samples) library to browse JavaScript examples for common Windows 10 app scenarios. Although the JS versions of these samples use the [WinJS](https://github.com/winjs/winjs) library to structure the sample template, WinJS is not required for calling the WinRT APIs demonstrated by these samples. Note that if you need to listen for the app's [`activated`](https://docs.microsoft.com/en-us/uwp/api/windows.ui.webui.webuiapplication.activated) event, you can do this using the following WinRT API:

```JavaScript
Windows.UI.WebUI.WebUIApplication.addEventListener("activated", function (activatedEventArgs) {
    // Check activatedEventArgs.kind and respond as needed
});
```
...as opposed to using WinJS ([example](https://github.com/Microsoft/Windows-universal-samples/blob/master/Samples/JumpList/js/js/scenario1-launched.js)).


## Learn more about WinRT

The [**Windows Dev Center**](https://developer.microsoft.com/en-us/windows/apps) is your complete reference for all stages of Windows app building, from [getting started](https://developer.microsoft.com/en-us/windows/apps/getstarted), to [designing](https://developer.microsoft.com/windows/apps/design), [developing](https://developer.microsoft.com/windows/apps/develop), and [publishing](https://developer.microsoft.com/store/publish-apps) to the Microsoft Store.

For a general overview on the Universal Windows Platform (UWP) and how to target different Windows 10 device families, see [*Intro to the Universal Windows Platform*](https://docs.microsoft.com/en-us/windows/uwp/get-started/universal-application-platform-guide).
