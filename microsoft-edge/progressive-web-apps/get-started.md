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

Progressive Web Apps (PWAs) are simply web apps that are [progressively enhanced](https://en.wikipedia.org/wiki/Progressive_enhancement) with native app-like features on supporting platforms and browser engines, such as installation / home screen launch, offline support, and push notifications. On Windows 10 with the Microsoft Edge (EdgeHTML) engine, PWAs enjoy the added advantage of running independently of the browser window as [Universal Windows Platform](https://docs.microsoft.com/en-us/windows/uwp/get-started/whats-a-uwp) apps.

Here's how to turn your web app into an installable PWA for Windows 10 and other PWA environments.

## Enhance your web app into a PWA

The minimum [requirements for installable PWAs on Windows 10](../progressive-web-apps.md#requirements) are: *HTTPS*, a *web app manifest*, and use of *service workers*. While HTTPS and app manifest are technical Windows 10 requirements for running web apps independent of the browser (in the *WWAHost.exe* process), the use of service workers to support an offline experience is a philosophical PWA requirement and highly encouraged but not strictly required for Windows 10 apps.

Once your web app host server is configured to use HTTPS, you can use  [**PWA Builder**](http://docs.pwabuilder.com/) tools ([web](https://www.pwabuilder.com/generator) / [CLI](http://docs.pwabuilder.com/quickstart/quick-start-pwa-using-cli-tools/) version) to generate the rest, including:

PWA Builder resource | Why its useful| Futher resources
:--- | :-- | :----
A web application manifest | Generates W3C-compliant JSON metadata for installing and launching your PWA from its host device.  | [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest) <br /> (MDN web docs)
Platform-ready app icons | Generates a set of images optimized for various PWA device home screens / app stores.  | PWA Builder [App-Image-Generator](https://github.com/pwa-builder/App-Image-Generator/tree/master/AppImageGenerator/App_Data) <br /> (GitHub)
A basic service worker script for handling offline scenarios | Generates a script that installs and registers a service worker to handle offline scenarios according to a strategy of your choosing.   | [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)  and [Service Worker Cookbook](https://serviceworke.rs/) <br />(MDN web docs)

Once you've reached step 3 "Publish PWA" of the PWA Builder wizard, click the **Download** button under the *Windows* heading, and unzip the folder.

> [!TIP]
> *PWA Builder* can also [generate polyfills for platforms which lack PWA support](http://docs.pwabuilder.com/quickstart/quick-start-polyfills/) , such as iOS, Mac, and Windows 7. Android supports PWAs directly through the browser, but you can also use PWA Builder to generate a [polyfill app for the *Google Play* store](http://docs.pwabuilder.com/tools/how-to-package-android/). 

Follow the instructions in the `\projects\PWA\Web-next-steps.md` file to incorporate the generated PWA assets for your web app.

Once you've republished your app with PWA content, right-click on the `\projects\PWA\Store packages\windows10\test_install.ps` script and select **Run with PowerShell** from the context menu. Once installed, you can launch your PWA from its tile in the Windows **Start** menu.

> [!NOTE]
> To uninstall your PWA, simply comment out (with *#*) this line of the *test_install.ps1* script: 
> `# Add-AppxPackage -Register $appxmanifest`
> . . . and re-run the script.

## Test and debug your PWA on Windows

With the minimum requirements met, you have a basic *Progressive Web App* installed and running on Windows! Now you're ready to test and debug your app for cross-platform and cross-device compatibility to ensure a great app experience for all your customers.

### Backend debugging

Debug your server-side PWA code the same way you would any web app, using your regular IDE and workflow. The changes you deploy live will be reflected in your installed PWA the next time you launch it (no need to reinstall).

> [!NOTE]
> Service workers, Cache API, and Push API will work from *localhost* in Microsoft Edge, however deploying changes to your remote server will allow you to run your PWA from a secure (HTTPS) connection, allowing you to debug it as a standalone installed Windows 10 app with full access to native WinRT APIs.

### Frontend debugging

Browsers that support PWAs have built-in debugging support for **Service Workers** and **Cache** inspection. In [Microsoft Edge DevTools](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide), you can access both inspection tools from the **Debugger** panel.

![Edge DevTools Service Workers and Cache inspection](../devtools-guide/media/debugger_sw_and_cache.png)

You can also inspect and manage your [Web storage](../devtools-guide/debugger/web-storage.md) and [IndexedDB](../devtools-guide/debugger/indexeddb.md) caches.

Check out [Progressive Web App debugging](../devtools-guide/debugger/progressive-web-apps.md) for more on using these tools in Microsoft Edge.

For similar functionality in Chrome DevTools, see [Tools for PWA Developers](https://developers.google.com/web/ilt/pwa/tools-for-pwa-developers#simulate_mobile_devices). For Firefox Developer Tools, check out the [about:debugging](https://developer.mozilla.org/en-US/docs/Tools/about:debugging#Workers) and [Storage Inspector](https://developer.mozilla.org/en-US/docs/Tools/Storage_Inspector) topics.

#### Local debugging with Edge DevTools

To debug an installed PWA running on your local dev machine, you'll first need to install the standalone [Microsoft Edge DevTools Preview]() from the Microsoft Store. Once installed, simply press `F12` from your PWA to launch the DevTools for debugging.

Alternately, you can launch the **Microsoft Edge DevTools Preview** app and then select your PWA from the list of running browser tabs and PWA instances:

![Microsoft Edge DevTools chooser, Local targets](./media/.png)

#### Remote debugging with Edge DevTools Protocol

[EdgeHTML 17 introduces](../devtools-guide/whats-new.md) basic remote debugging support. While only core [**Debugger**](../devtools-guide/debugger.md) functionality is currently available, full PWA debugging support (including *Service Workers* and cache managers) and additional Edge DevTools panels (such as *Console*, *Elements*, *Network*, etc.) will be added with upcoming releases. 

See [*Remote debugging*](../devtools-protocol/clients/edge-devtools.md#remote-debugging) in the Edge *DevTools Protocol* docs to get started.

For PWA debugging on Android mobile devices, check out the [*Debugging Firefox for Android over WiFi*](https://developer.mozilla.org/en-US/docs/Tools/Remote_Debugging/Debugging_Firefox_for_Android_over_Wifi) and Chrome's [*Get Started with Remote Debugging Android Devices*](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/) guide.

## Going further

You can extend your PWA to increase customer engagement and provide a more seamless, OS-integrated app experience.

### Push notifications

Set up a push messaging service, service worker handler, and custom toast notifications to re-engage your users. Check out the Push API / Notification API examples in [*Service Workers: Going beyond the page*](https://blogs.windows.com/msedgedev/2017/12/19/service-workers-going-beyond-page/#8mU5rebKOuTt5HwG.97) to get started.

### Windows tailoring

Using some simple feature detection, your PWA can be further tailored for Windows 10 customers through native [Windows Runtime](https://docs.microsoft.com/en-us/uwp/api/) (WinRT) APIs, such as those for customizing Windows **Start** menu (home screen) tiles, using Cortana voice commands, and accessing the device camera (to name only a few!)
 
Check out [*Tailor your PWA for Windows*](./windows-features.md) to get started.

### Submitting to the Microsoft Store

To learn more about the benefits of app store distribution and how to submit your PWA, see [*Progressive Web Apps in the Microsoft Store*](./microsoft-store.md)
