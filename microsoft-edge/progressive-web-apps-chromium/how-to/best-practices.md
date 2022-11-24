---
title: Best practices for Progressive Web Apps
description: Learn best practices to build great PWAs.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 11/24/2022
---
# Best practices for Progressive Web Apps

This article lists best practices to make your PWA a great application for your users. When users install applications, they have certain expectations of what these applications can do, such as work offline, integrate deep into the operating system, or perform non-trivial computing tasks.

Read the best practices on this page to learn to make your PWA feel like what users expect real apps can do.

This page assumes that you already have a PWA. To learn more about building a simple PWA first, see [Get started with Progressive Web Apps](./index.md).


<!-- ====================================================================== -->
## Installation

Your app can already be installed using the **App available** button in the browser address bar if you follow the steps in [Get started with Progressive Web Apps](./index.md).

A custom installation experience, in the app user interface, can be more obvious to your users and lead to more installations.

To create a custom installation experience, use the [`beforeinstallprompt`](https://developer.mozilla.org/docs/Web/API/Window/beforeinstallprompt_event) event and provide your own installation button in your app.

To see a code example of the `beforeinstallprompt` event, check the [PWAmp demo app source code](https://github.com/MicrosoftEdge/Demos/blob/main/pwamp/app.js). To test the custom installation, open [PWAmp](https://microsoftedge.github.io/Demos/pwamp/), click **More tools** (`...`) > **About** > **Install app**.


<!-- ====================================================================== -->
## App store

Many users will look for your app on their device's app store. Downloading from an official app store provides a trustworthy and familiar experience for your users.

You can publish your PWA to the Microsoft Store for Windows, the App store for iOS, or the Play Store for Android, by using [PWA Builder](https://www.pwabuilder.com).

To learn how to use PWA Builder and publish to the Microsoft Store, see [Publish a Progressive Web App to the Microsoft Store](./microsoft-store.md).


<!-- ====================================================================== -->
## App icon

Many users find apps on their devices by their icons. To make users can easily find your app choose a recognizable icon, make sure it stands out, and make sure that it adapts to the devices your app is installed on.

On Windows, your app icon appears in many places such as the taskbar, the Start menu, or the ALT+Tab task switcher. Provide multiple image sizes to ensure your app icon is easily recognizable in these places.

To learn which image size are needed on Windows, see [Icon image sizes](./icon-theme-color.md#icon-image-sizes) in _Define icons and a theme color_.


<!-- ====================================================================== -->
## App window type

Native applications have their own dedicated windows. PWAs can define how they appear in the host operating system.

To display your PWA in a standalone window with no browser navigation user interface, use the [display](https://developer.mozilla.org/docs/Web/Manifest/display) member in your web app manifest file, and set it to `standalone`.

If your app has several HTML pages, make sure users can go between the pages using buttons or links within your app. Use the `minimal-ui` value of the `display` manifest member to let users go between pages using previous and next buttons rendered by the browser in your app title bar.

To create a more immersive, native-like experience, _desktop_ PWAs can also choose to hide the default operating system title bar and display their own content instead. Displaying content where the title bar normally is can help PWAs feel more other apps.  Many desktop applications, such as Visual Studio Code, Microsoft Teams, and Microsoft Edge already do this.

To learn how to replace the title bar, see [Display content in the title bar](./window-controls-overlay.md).


<!-- ====================================================================== -->
## Operating system integration

Users expect installed applications to be integrated with the host operating system. By integrating into the operating system, your app provides a more familiar and seamless experience.

PWAs have access to several integration features, such as shortcuts, sharing, badging, or file and link handling.

#### Shortcuts

Shortcuts make it possible to define direct links to your app functionality by right-clicking the app icon.

See [Define app shortcuts](./shortcuts.md).

#### App sharing

PWAs can share content to other apps, and receive content from other apps, via the operating system's share dialog.

See [Share content with other apps](./share.md).

#### Icon badges

PWAs can display status badges on their app icons to alert users about the presence of new content in the app.

See [Display a badge on the app icon](./notifications-badges.md#display-a-badge-on-the-app-icon) in _Re-engage users with badges, notifications, and push messages_.

#### File handling

_TODO_

See [Handle files in Progressive Web Apps](./handle-files.md).

#### Link handling

_TODO_

See [Handle links to your Progressive Web Apps](./handle-urls.md) and [Handle protocols in Progressive Web Apps](./handle-protocols.md).


<!-- ====================================================================== -->
## Offline support

_TODO_
_Very important for retention. People install apps to perform tasks. Let them do the tasks even when offline. And at least provide a custom offline screen to make it clear the app isn’t broken._
_Provide a rich [Offline experience](./offline.md).  Make the app work even if the user's device is offline.  Provide a custom offline page rather than using the browser's default offline page._


<!-- ====================================================================== -->
## Data storage

_TODO_
_Store data locally. Pre-cache static resources for great offline use. Also offer to store data (media, text content, etc.) for offline consumption. Various ways to store data, and how much data there is available._
_Create a new detailed article about this, with quota information and the different options._


<!-- ====================================================================== -->
## App instances

_TODO_
_Launch handler._


<!-- ====================================================================== -->
## Use advanced web capabilities

_TODO_
_Advanced Web capabilities (fugu, hardware, etc.)_


<!-- ====================================================================== -->
## User interface best practices

_TODO_
_UI: bigger hit targets, no footers, more media, system-ui font (feels native,  and loads faster), support light and dark themes, theme-color to avoid making the titlebar feel disjointed, and WCO…_
_UX: streamline tasks, focus on what’s important. People installed your app, don’t waste space and time selling your app. Reduce content clutter. Not only about responsive design, but reorganize the UI based on the target device to make the main task(s) as streamlined as possible. Immediate interaction feedback, even if a step takes time, register the action visually, and perhaps use skeleton UI for the next state._


<!-- ====================================================================== -->
## Cross-browser and cross-device compatibility

Test your app for [cross-browser compatibility](https://developer.mozilla.org/docs/Learn/Tools_and_testing/Cross_browser_testing).  Make sure your PWA works, by testing it in different browsers and environments.  See [Tools](https://developer.microsoft.com/microsoft-edge/tools/) at _Microsoft Edge Developer_.

_TODO_
_Progressive enhancement._


<!-- ====================================================================== -->
## Responsive design

Use fluid layouts and flexible images.  [Responsive design](https://en.wikipedia.org/wiki/Responsive_web_design) includes the following elements that adapt your UX to your user's device:

*   CSS [grid](https://developer.mozilla.org/docs/Web/CSS/CSS_Grid_Layout).
*   [Flexbox](https://developer.mozilla.org/docs/Web/CSS/CSS_Flexible_Box_Layout).
*   [Media queries](https://developer.mozilla.org/docs/Web/CSS/Media_Queries).
*   [Responsive images](https://developer.mozilla.org/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images).

To test your app locally, use [device emulation tools](../../devtools-guide-chromium/device-mode/testing-other-browsers.md) from your browser.  To test your app directly on a target device, create a remote debugging session on [Windows](../../devtools-guide-chromium/remote-debugging/windows.md) or [Android](../../devtools-guide-chromium/remote-debugging/index.md).


<!-- ====================================================================== -->
## Deep linking

Support [Deep linking](https://en.wikipedia.org/wiki/Deep_linking).  Route each page of your site to a unique URL so existing users can help you engage an even broader audience through social media sharing.
