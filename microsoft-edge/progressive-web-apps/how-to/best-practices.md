---
title: Best practices for PWAs
description: Learn best practices to build great PWAs.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: pwa
ms.date: 11/24/2022
---
# Best practices for PWAs

This article lists best practices to make your PWA a great application for your users. When users install applications, they have certain expectations of what these applications can do, such as work offline, integrate deeply into the operating system, or perform non-trivial computing tasks.

Read the best practices on this page to learn to make your PWA look and feel like what users expect.

This page assumes that you already have a PWA. To learn more about building a simple PWA first, see [Get started developing a PWA](./index.md).


<!-- ====================================================================== -->
## Provide a custom installation

Your app can already be installed using the **App available** button in the browser Address bar if you follow the steps in [Get started developing a PWA](./index.md).

A custom installation experience, in the app user interface, can be more obvious to your users and lead to more installations.

To create a custom installation experience, use the [beforeinstallprompt](https://developer.mozilla.org/docs/Web/API/Window/beforeinstallprompt_event) event and provide your own installation button in your app.

To see a code example of the `beforeinstallprompt` event, check the [PWAmp demo source code](https://github.com/MicrosoftEdge/Demos/blob/main/pwamp/app.js). To test the custom installation, open the [PWAmp demo](https://microsoftedge.github.io/Demos/pwamp/), and then click **More tools** (`...`) > **About** > **Install app** in the app.


<!-- ====================================================================== -->
## Submit to app stores

Many users will look for your app on their device's app store. Downloading from an official app store provides a trustworthy and familiar experience for your users.

You can publish your PWA to the Microsoft Store for Windows, the App store for iOS, or the Play Store for Android, by using [PWA Builder](https://www.pwabuilder.com).

To learn how to use PWA Builder and publish to the Microsoft Store, see [Publish a PWA to the Microsoft Store](./microsoft-store.md).


<!-- ====================================================================== -->
## Create a great app icon

Many users find apps on their devices by their icons. To help users find your app more easily, choose a recognizable icon, make sure it stands out, and make sure that it adapts to the devices your app is installed on.

On Windows, your app icon appears in many places such as the taskbar, the Start menu, or the **Alt+Tab** task switcher. Provide multiple image sizes to ensure your app icon is easily recognizable in these places.

To learn which image size are needed on Windows, see [Icon image sizes](./icon-theme-color.md#icon-image-sizes) in _Define icons and a theme color_.


<!-- ====================================================================== -->
## Use a standalone app window

Native applications have their own dedicated windows. PWAs can define how they appear in the host operating system.

To display your PWA in a standalone window with no browser navigation user interface, use the [display](https://developer.mozilla.org/docs/Web/Manifest/display) member in your web app manifest file, and set it to `standalone`.

If your app has several HTML pages, make sure users can go between the pages using buttons or links within your app. Use the `minimal-ui` value of the `display` manifest member to let users go between pages using previous and next buttons rendered by the browser in your app title bar.

To create a more immersive, native-like experience, _desktop_ PWAs can also choose to hide the default operating system title bar and display their own content instead. Displaying content where the title bar normally is can help PWAs feel more like native apps.  Many desktop applications, such as Visual Studio Code, Microsoft Teams, and Microsoft Edge already do this.

To replace the title bar, see [Display content in the title bar area using Window Controls Overlay](./window-controls-overlay.md).


<!-- ====================================================================== -->
## Integrate in the operating system

Users expect installed applications to integrate with the host operating system in some way.

Your app can provide a more familiar, engaging, and seamless experience by using operating system integration features such as shortcuts, sharing between apps, badging, file handling, or link handling.

#### Shortcuts

Shortcuts make it possible to define direct links to your app functionality by right-clicking the app icon.

See [Define app shortcuts (long-press or right-click menus)](./shortcuts.md).

#### App sharing

PWAs can share content to other apps, and receive content from other apps, via the operating system's share dialog.

See [Share content with other apps](./share.md).

#### Icon badges

PWAs can display status badges on their app icons to alert users of the presence of new content in the app.

See [Display a badge on the app icon](./notifications-badges.md#display-a-badge-on-the-app-icon) in _Re-engage users with badges, notifications, and push messages_.

#### File handling

You can register your PWA to be a file handler for certain file types.

Use the PWA file handler feature to automatically launch your app when certain file are opened by the user in the operating system.

See [Handle files in a PWA](./handle-files.md).

#### Link and protocol handling

Register your app is a link or protocol handler to automatically launch your app when certain links are used in other applications.

See [Handle links to a PWA](./handle-urls.md) and [Handle protocols in a PWA](./handle-protocols.md).

#### Widgets

![Experimental feature](./best-practices-images/experimental-tag.png)

Create your own app widgets to display in the operating system widget dashboard such as the Windows 11 Widgets Board.

See [Display a PWA widget in the Windows Widgets Board](./widgets.md).


<!-- ====================================================================== -->
## Support offline scenarios

When connected to a slow or unreliable network, or even with no internet access, installed applications can usually still be opened and used. Users of installed applications expect them to continue working under these conditions. They also expect the network-dependent parts of an application to gracefully handle the lack of connection with a custom message and local caching capabilities.

To improve retention, add a service worker to your PWA. You can use the service worker's `Fetch` and `Cache` APIs, and local data storage access, to provide a good offline experience for your users.

You can provide a good offline experience in several steps:

1. Cache all the static resources your app needs to start, display content, and let users perform the most common tasks.
1. Redirect to a custom offline page for the pages that can't be cached.
1. Gracefully handle the tasks of your app that can't be used with no internet access.
1. Implement advanced scenarios such as letting users download data for offline viewing.

See also:
* [Synchronize and update a PWA in the background](./background-syncs.md).
* [Using Service Workers](https://developer.mozilla.org/docs/Web/API/Service_Worker_API/Using_Service_Workers) at MDN > References > Web APIs > Service Worker API > Guides.
* [Service Worker API](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) at MDN > References > Web APIs.
* [FetchEvent](https://developer.mozilla.org/docs/Web/API/FetchEvent) at MDN > References > Web APIs > Service Worker API.
* [Cache](https://developer.mozilla.org/docs/Web/API/Cache) at MDN > References > Web APIs > Service Worker API.


<!-- ====================================================================== -->
## Store data locally

To provide a rich and fast experience to your users, use the different persistent data storage options that are available to PWAs, such as:

* Cache storage, to store static resources for your app.
* Local and Session storage, to store small amounts of user data.
* IndexedDB, to store larger, structured, user data.
* File System Access API, to store files on disk.

To learn more, see [Store data on the device](./offline.md).

<!-- TODO: link to a new article about this topic only, with much more details than what's in offline.md now, in particular, information about available space, quota information, and eviction info.  -->


<!-- ====================================================================== -->
## Use advanced capabilities

Installed apps typically perform advanced computing scenarios that websites usually don't support.

To provide an app-like experience, use advanced web capabilities such as:

* Hardware access with the [Web Bluetooth API](https://developer.mozilla.org/docs/Web/API/Web_Bluetooth_API), [USB](https://developer.mozilla.org/docs/Web/API/USB) (WebUSB API), or [Web NFC API](https://developer.mozilla.org/docs/Web/API/Web_NFC_API).
* Clipboard access with the [Clipboard API](https://developer.mozilla.org/docs/Web/API/Clipboard_API).
* Device contacts integration with the [Contact Picker API](https://developer.mozilla.org/docs/Web/API/Contact_Picker_API).
* Rich media interactions with the [Canvas API](https://developer.mozilla.org/docs/Web/API/Canvas_API), [WebGL: 2D and 3D graphics for the web](https://developer.mozilla.org/docs/Web/API/WebGL_API) (WebGL API), or [Web Audio API](https://developer.mozilla.org/docs/Web/API/Web_Audio_API).
* Safe and trusted authentication and payment with the [WebAuthn API](https://webauthn.guide/) and [Payment Request API](https://developer.mozilla.org/docs/Web/API/Payment_Request_API).
* Non-trivial computing tasks with [WebAssembly](https://developer.mozilla.org/docs/WebAssembly).
* Reading and writing to files with the [File System API](https://developer.mozilla.org/docs/Web/API/File_System_Access_API).

Ensure your app's most important tasks can be done across all browsers and devices. See [Test on multiple browsers and devices](#test-on-multiple-browsers-and-devices).


<!-- ====================================================================== -->
## Make your app look and feel like a real app

Users install apps on their devices to achieve specific tasks, and they have certain expectations about how these tasks are presented in the user interface and how they integrate in the host operating system.

To let your users achieve your app's most important tasks easily and in a familiar way, make design choices such as:

* Don't use a big header area like websites do for navigation to other pages. Use a menu metaphor instead.
* Don't use a big footer area like websites do for more links and information.
* Use the `system-ui` font to make your content feel more native and load faster.
* Use less links, and prefer bigger hit targets.
* Support the operating system's light and dark themes by using the [prefers-color-scheme](https://developer.mozilla.org/docs/Web/CSS/@media/prefers-color-scheme) CSS media feature.
* Provide a `background-color` and `theme-color` in your web app manifest to customize the application window.  See [Web app manifests](https://developer.mozilla.org/docs/Web/Manifest).
* Focus on the most important tasks, de-clutter de content, and streamline the user interface.
* Re-organize the user interface based on the device's form factor, by using [CSS grid layout](https://developer.mozilla.org/docs/Web/CSS/CSS_Grid_Layout), [CSS flexible box layout](https://developer.mozilla.org/docs/Web/CSS/CSS_Flexible_Box_Layout) (flexbox), [CSS media queries](https://developer.mozilla.org/docs/Web/CSS/Media_Queries), and [Responsive images](https://developer.mozilla.org/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images).
* Improve perceived performance by registering user interactions immediately.
* Consider using skeleton screens, if rendering the next screen takes time.  See [Building Skeleton Screens with CSS Custom Properties](https://css-tricks.com/building-skeleton-screens-css-custom-properties/).


<!-- ====================================================================== -->
## Test on multiple browsers and devices

With Progressive Web Apps, you deliver an app for all devices, from one codebase. To make sure your app works everywhere, test it on multiple browsers, operating systems, and devices.

Make sure the most important scenarios of your app work everywhere, and progressively enhance the experience on supporting devices.

To test your app in multiple environments, consider the following techniques:

* [Cross browser testing](https://developer.mozilla.org/docs/Learn/Tools_and_testing/Cross_browser_testing).
* [Emulate and test other browsers](../../devtools/device-mode/testing-other-browsers.md) from Microsoft Edge, by using DevTools.
* Create a remote debugging session on [Windows](../../devtools/remote-debugging/windows.md) or [Android](../../devtools/remote-debugging/index.md).
* [Test and automation in Microsoft Edge](../../test-and-automation/test-and-automation.md) to automate your testing.
* Test on [virtual machines](https://developer.microsoft.com/microsoft-edge/tools/).<!-- todo: redirects to https://developer.microsoft.com/en-us/microsoft-edge/tools/?cs=2233647189&form=MA13LH - vm not listed -->


<!-- ====================================================================== -->
## Support deep linking

To improve discovery and sharing of your app through the web and social media, route each page of your app to a unique URL and support [Deep linking](https://wikipedia.org/wiki/Deep_linking).  


<!-- ======================================================================
## Manage your app instances

TODO: Launch handler.
-->


<!-- ====================================================================== -->
## See also

Local: PWA:
* [Define app shortcuts (long-press or right-click menus)](./shortcuts.md)
* [Display a badge on the app icon](./notifications-badges.md#display-a-badge-on-the-app-icon) in _Re-engage users with badges, notifications, and push messages_.
* [Display a PWA widget in the Windows Widgets Board](./widgets.md)
* [Display content in the title bar area using Window Controls Overlay](./window-controls-overlay.md)
* [Get started developing a PWA](./index.md)
* [Handle files in a PWA](./handle-files.md)
* [Handle links to a PWA](./handle-urls.md)
* [Handle protocols in a PWA](./handle-protocols.md)
* [Icon image sizes](./icon-theme-color.md#icon-image-sizes) in _Define icons and a theme color_.
* [Publish a PWA to the Microsoft Store](./microsoft-store.md)
* [Share content with other apps](./share.md)
* [Store data on the device](./offline.md)
* [Synchronize and update a PWA in the background](./background-syncs.md)
* [Test and automation in Microsoft Edge](../../test-and-automation/test-and-automation.md)

Local: DevTools:
* [Emulate and test other browsers](../../devtools/device-mode/testing-other-browsers.md)
* [Windows](../../devtools/remote-debugging/windows.md)
* [Android](../../devtools/remote-debugging/index.md)

MDN:
* [beforeinstallprompt](https://developer.mozilla.org/docs/Web/API/Window/beforeinstallprompt_event) at MDN > References > Web APIs > Window.
* [Cache](https://developer.mozilla.org/docs/Web/API/Cache) at MDN > References > Web APIs > Service Worker API.
* [Canvas API](https://developer.mozilla.org/docs/Web/API/Canvas_API) at MDN > References > Web APIs.
* [Clipboard API](https://developer.mozilla.org/docs/Web/API/Clipboard_API) at MDN > References > Web APIs.
* [Contact Picker API](https://developer.mozilla.org/docs/Web/API/Contact_Picker_API) at MDN > References > Web APIs.
* [Cross browser testing](https://developer.mozilla.org/docs/Learn/Tools_and_testing/Cross_browser_testing) at MDN > Guides > Tools and testing.
* [display](https://developer.mozilla.org/docs/Web/Manifest/display) in MDN > References > Web app manifests > members.
* [FetchEvent](https://developer.mozilla.org/docs/Web/API/FetchEvent) at MDN > References > Web APIs > Service Worker API.
* [File System API](https://developer.mozilla.org/docs/Web/API/File_System_Access_API) at MDN > References > Web APIs.
* [CSS flexible box layout](https://developer.mozilla.org/docs/Web/CSS/CSS_Flexible_Box_Layout) (flexbox) at MDN > References > CSS.
* [CSS grid layout](https://developer.mozilla.org/docs/Web/CSS/CSS_Grid_Layout) at MDN > References > CSS.
* [CSS media queries](https://developer.mozilla.org/docs/Web/CSS/Media_Queries) at MDN > References > CSS.
* [Payment Request API](https://developer.mozilla.org/docs/Web/API/Payment_Request_API) at MDN > REferences > Web APIs.
* [prefers-color-scheme](https://developer.mozilla.org/docs/Web/CSS/@media/prefers-color-scheme) at MDN > References > CSS > @media.
* [Responsive images](https://developer.mozilla.org/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) at MDN > Guides > HTML > Multimedia and embedding.
* [Service Worker API](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) at MDN > References > Web APIs.
* [Using Service Workers](https://developer.mozilla.org/docs/Web/API/Service_Worker_API/Using_Service_Workers) at MDN > References > Web APIs > Service Worker API > Guides.
* [Web app manifests](https://developer.mozilla.org/docs/Web/Manifest) at MDN > References.
* [Web Bluetooth API](https://developer.mozilla.org/docs/Web/API/Web_Bluetooth_API) at MDN > References > Web APIs.
* [Web NFC API](https://developer.mozilla.org/docs/Web/API/Web_NFC_API) at MDN > References > Web APIs.
* [USB](https://developer.mozilla.org/docs/Web/API/USB) at MDN > References > Web APIs > WebUSB API.
* [WebAssembly](https://developer.mozilla.org/docs/WebAssembly) at MDN.
* [Web Audio API](https://developer.mozilla.org/docs/Web/API/Web_Audio_API) at MDN > References > Web APIs.
* [WebGL: 2D and 3D graphics for the web](https://developer.mozilla.org/docs/Web/API/WebGL_API) (WebGL API) at MDN > References > Web APIs.

Wikipedia:
* [Deep linking](https://wikipedia.org/wiki/Deep_linking)

GitHub:
* [PWAmp demo source code](https://github.com/MicrosoftEdge/Demos/blob/main/pwamp/app.js)
* [PWAmp demo](https://microsoftedge.github.io/Demos/pwamp/)

Other:
* [PWA Builder](https://www.pwabuilder.com)
* [Building Skeleton Screens with CSS Custom Properties](https://css-tricks.com/building-skeleton-screens-css-custom-properties/)
* [virtual machines](https://developer.microsoft.com/microsoft-edge/tools/)<!-- todo: redirects to https://developer.microsoft.com/en-us/microsoft-edge/tools/?cs=2233647189&form=MA13LH - vm not listed -->
* [WebAuthn API](https://webauthn.guide/)
