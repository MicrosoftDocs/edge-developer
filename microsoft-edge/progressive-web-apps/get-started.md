---
description: Here's how to turn your web app into a PWA for Windows and other platforms
title: Get started with Progressive Web Apps on Windows
author: erikadoyle
ms.author: edoyle
ms.date: 1/10/2018
ms.topic: article
ms.prod: microsoft-edge
keywords: progressive web apps, PWA, Edge, Windows, appx, web manifest, DevTools
---

# Get started with Progressive Web Apps

Progressive Web Apps (PWAs) are simply web apps that are [*progressively enhanced*](https://en.wikipedia.org/wiki/Progressive_enhancement) with native app-like features on supporting platforms and browser engines, such as installation / home screen launch, offline support, and push notifications. On Windows 10 with the Microsoft Edge (*EdgeHTML*) engine, PWAs enjoy the added advantage of running independently of the browser window as [*Universal Windows Platform*](https://docs.microsoft.com/en-us/windows/uwp/get-started/whats-a-uwp) apps.

Here's how to turn your web app into an installable PWA for Windows 10 and other PWA environments.

## Enhance your web app into a PWA

The minimum [requirements for installable PWAs on Windows 10](../progressive-web-apps.md#requirements) are: *HTTPS*, a *web app manifest*, and use of *service workers*. 

Once your web app host server is configured to use HTTPS, you can use  [**PWA Builder**](http://docs.pwabuilder.com/) tools ([web](https://www.pwabuilder.com/generator) / [CLI](http://docs.pwabuilder.com/quickstart/quick-start-pwa-using-cli-tools/) version) to generate the rest, including:

PWA Builder resource | Why its useful| Futher resources
:--- | :-- | :----
A web application manifest | Generates W3C-compliant JSON metadata for installing and launching your PWA from its host device.  | [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest) <br /> (MDN web docs)
Platform-ready app icons | Generates a set of images optimized for various PWA device home screens / app stores.  | PWA Builder [App-Image-Generator](https://github.com/pwa-builder/App-Image-Generator/tree/master/AppImageGenerator/App_Data) <br /> (GitHub)
A basic service worker script for handling offline scenarios | Generates a script that installs and registers a service worker to handle offline scenarios according to a strategy of your choosing.   | [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)  and [Service Worker Cookbook](https://serviceworke.rs/) <br />(MDN web docs)
A *Windows 10* app and installation script | Generates an installable app using the Windows app packaging tool (`MakeAppx.exe`) and a PowerShell script for sideloading your app in *Developer Mode*. | [Create an app package with the MakeApp.exe tool](https://docs.microsoft.com/en-us/windows/uwp/packaging/create-app-package-with-makeappx-tool) and [Enable your device for development](https://docs.microsoft.com/en-us/windows/uwp/get-started/enable-your-device-for-development) <br />(Windows Dev Center)

Once you've reached step 3 ("Publish PWA)" of the PWA Builder wizard, click the **Download** button under the *Windows* heading, and unzip the folder.

> [!TIP]
> *PWA Builder* can also [generate polyfills for platforms which lack PWA support](http://docs.pwabuilder.com/quickstart/quick-start-polyfills/) , such as iOS, Mac, and Windows 7. Android supports PWAs directly through the browser, but you can also use PWA Builder to generate a [polyfill app for the *Google Play*](http://docs.pwabuilder.com/tools/how-to-package-android/) store. 

Follow the instructions in the `Web-next-steps.md` file (located in *projects\PWA*) to incorporate the generated PWA assets for your web app.

Once you've republished your app with PWA content, right-click on the `test_install.ps` script (located in *projects\PWA\Store packages\windows10*) and select **Run with PowerShell** from the context menu. Once installed, you can launch your PWA from its tile in the Windows **Start** menu.

> [!NOTE]
> To uninstall your PWA, simply comment out (`#`) this line of the *test_install.ps1* script and re-run: `# Add-AppxPackage -Register $appxmanifest`

## Test and debug your PWA on Windows

With the minimum requirements met, you have a basic *Progressive Web App* installed and running on Windows! Now you're ready to test and debug your app for cross-platform and cross-device compatibility to ensure a great app experience for all your customers.

### Backend debugging

Debug your server-side logic the same way you would any web app, using the IDE and workflow of your choosing. The changes you deploy live will be reflected in your installed PWA the next time you launch it (no need to reinstall).

> [!NOTE] You can test your changes locally within the Microsoft Edge browser. However, while service workers, Cache API, and Push API will work from `localhost` in the browser, your app will not have access to native WinRT APIs or run in a standalone window as it would in the full (installed) Windows PWA experience.

### Frontend debugging

Browsers that support PWAs have built-in debugging support for **Service Workers** and **Cache** inspection. In [Microsoft Edge DevTools](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide), you can access both inspection tools from the **Debugger** panel.

![Edge DevTools Service Workers and Cache inspection](..\f12-devtools-guide\media\debugger_sw_and_cache.png)

Check out [*Progressive Web App debugging*](..\devtools-guide\debugger\progressive-web-apps.md) for more on using these tools in Microsoft Edge.

For similar functionality in Chrome DevTools, see [*Tools for PWA Developers*](https://developers.google.com/web/ilt/pwa/tools-for-pwa-developers#simulate_mobile_devices). For Firefox Developer Tools, check out the [*about:debugging*](https://developer.mozilla.org/en-US/docs/Tools/about:debugging#Workers) and [*Storage Inspector*](https://developer.mozilla.org/en-US/docs/Tools/Storage_Inspector).

#### Local debugging with Edge DevTools

To debug a local PWA instance running in your desktop dev environment, ...

TODO: Chase down UX details/screenshot for Edge DevTools chooser (and Store install?).

From there, you can use the Microsoft Edge DevTools [**Emulation**](.\devtools-guide\emulation.md) panel to test out the responsiveness of your layout on different screen resolutions and display orientations.

#### Remote debugging with Edge DevTools Protocol

You can also debug a PWA running on a remote Windows device from your desktop dev machine.

TODO: Chase down UX details/screenshot for Edge DevTools remote debugging w/protocol.

For PWA debugging on Android mobile devices, check out the [*Debugging Firefox for Android over WiFi*](https://developer.mozilla.org/en-US/docs/Tools/Remote_Debugging/Debugging_Firefox_for_Android_over_Wifi) and Chrome's [*Get Started with Remote Debugging Android Devices*](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/) guide.

## Going further

You can extend your PWA to increase customer engagement and provide a more seamless, OS-integrated app experience.

### Push notifications

Set up a push messaging service, service worker handler, and custom toast notifications to re-engage your users. Check out the Push API / Notification API examples in [*Service Workers: Going beyond the page*](https://blogs.windows.com/msedgedev/2017/12/19/service-workers-going-beyond-page/#8mU5rebKOuTt5HwG.97) to get started.

TODO: repurpose these to an evergreen push doc

### Windows tailoring

Using some simple feature detection, your PWA can be further tailored for Windows 10 customers through native [Windows Runtime](https://docs.microsoft.com/en-us/uwp/api/) (WinRT) APIs, such as those for customizing Windows **Start** menu (home screen) tiles, using Cortana voice commands, and accessing the device camera (to name only a few!)
 
Check out [*Tailor your PWA for Windows*](./windows-features.md) to get started.

### Submitting to the Microsoft Store

To learn more about the benefits of app store distribution and how to submit your PWA, see [*Progressive Web Apps in the Microsoft Store*](./microsoft-store.md)
