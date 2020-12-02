---
description: Use the Windows Runtime (WinRT) to call native Windows APIs from your JavaScript app.
title: Windows Runtime (WinRT) for JavaScript
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.prod: microsoft-edge
ms.technology: windows-integration
keywords: Windows Runtime, WinRT, PWA, JavaScript
ms.date: 12/02/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# Windows Runtime (WinRT) for JavaScript  

[!INCLUDE [deprecation-note](../includes/legacy-edge-note.md)]  

The [Windows Runtime](/windows/uwp/get-started/universal-application-platform-guide#how-the-universal-windows-platform-relates-to-windows-runtime-apis) \(or simply WinRT\) is the collection of native APIs that power the [Universal Windows Platform](/windows/uwp/get-started/universal-application-platform-guide) \(UWP\) apps that run across all [Windows 10 device families](/uwp/extension-sdks/device-families-overview).  WinRT APIs are projected into a number of different languages, including C#, C++, Visual Basic, and JavaScript.  

As a web developer, you may request these native Windows APIs from JavaScript when your web app is [running as an installed Windows 10 app](../progressive-web-apps/windows-features.md#set-up-and-run-your-universal-windows-app) \(launched from the `wwahost.exe` process, rather than the browser\).  Additionally, your website running as a Windows 10 app may also use the [Microsoft Edge webview](#webview) control to display remote and local web content and [MSApp](#msapp) APIs for blob and stream handling, among other things.  

Here are the top-level WinRT namespace areas available to all Windows 10 apps:  

| WinRT Namespace | Description |  
|:--- |:--- |  
| [AI](/uwp/api/windows.AI.MachineLearning.Preview) \(Preview\) | Contains classes that enable apps to load machine learning models, bind data as inputs, and evaluate the results.  |  
| [ApplicationModel](/uwp/api/windows.applicationmodel) | Provides an app with access to core system functionality and run-time information about the app package, and handles suspend operations.  |  
| [Data](/uwp/api/windows.data.html) | Provides utility classes for working with various data formats, including HTML, JSON, PDF, text, and XML.  |  
| [Devices](/uwp/api/windows.devices) | This namespace provides access to the low level device providers, including ADC, GPIO, I2 C, PWM, and SPI.  |  
| [Foundation](/uwp/api/windows.foundation) | Enables fundamental Windows Runtime functionality, including managing asynchronous operations and accessing property stores.  This namespace also defines common value types that represent Uniform Resource Identifier \(URI\), dates and times, 2-D measurements, and other basic values.  |  
| [Gaming](/uwp/api/windows.gaming.input) |Provides access to game controller input, the Game bar, game monitoring, and game chat.  |  
| [Globalization](/uwp/api/windows.globalization) | Provides globalization support for language profiles, geographic regions, and international calendars.  |  
| [Graphics](/uwp/api/windows.graphics) | Provides basic data types that contain info on how to draw graphics.  These data structs are commonly used to define how large surfaces are drawn when using the CompositionVirtualDrawingSurface class.  |  
| [Management](/uwp/api/windows.management) | Provides capabilities to force a sync from an Mobile Device Management \(MDM\) device to the server.  This MDM sync protocol is based on the Open Mobile Alliance - Device Management standard.  |  
| [Media](/uwp/api/windows.media) | Provides classes for creating and working with media such as photos, audio recordings and videos.  |  
| [Networking](/uwp/api/windows.networking) | Provides access to hostnames and endpoints used by network apps.  |  
| [Perception](/uwp/api/windows.perception) | Contains classes for perceiving the user's surroundings, letting apps locate and reason about the device relative to the surfaces and holograms around the user.  |  
| [Security](/uwp/api/windows.security.authentication.identity) | Provides classes for user authentication, credentials management, cryptographic operations and enterprise data protection features.  |  
| [Services](/uwp/api/windows.services.cortana) | Provides access to Microsoft services for Cortana, Maps, Microsoft Store and Targeted \(subscription\) content.  |  
| [Storage](/uwp/api/windows.storage) | Provides classes for managing files, folders, and application settings.  |  
| [System](/uwp/api/windows.system) | Enables system functionality such as launching apps, obtaining information about a user, and memory profiling.  |  
| [UI](/uwp/api/windows.ui) | Provides an app with access to core system functionality and run-time information about the UI.  **NOTE**:  APIs in the `Windows.UI.Xaml` namespace are not available for JavaScript apps \(which may use the equivalent web standards-based technologies\).  |  
| [Web](/uwp/api/windows.web) | Provides information on errors resulting from web service operations.  |  

For more details on usage, check out [Using the Windows Runtime in JavaScript](./using-the-windows-runtime-in-javascript.md).  To learn how to run your website as a Windows app, try the [Tailor your PWA for Windows](../progressive-web-apps/windows-features.md) tutorial.  

## WebView  

The [Microsoft Edge WebView](../hosting/webview/index.md) control enables you to host web content within your Windows 10 app.  This is similar to using an `<iframe>`, but provides a lot [more features and control](../hosting/webview/index.md#webview-versus-iframe) over the experience.  

## MSApp  

The [MSApp](./reference/msapp.md) global object \(`window.MSApp`\) provides assorted helper functions for JavaScript-based Windows 10 apps, such as utilities for converting between web standards-based and equivalent WinRT object types.  
