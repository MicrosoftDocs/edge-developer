---
description: Learn what's a PWA, its characteristics, and what makes a website installable.
title: The anatomy of a PWA
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/10/2021
ms.topic: article
ms.prod: microsoft-edge
ms.technology: pwa
keywords: progressive web apps, PWA, Edge, JavaScript, UWP, Microsoft Store
---
# The anatomy of a PWA  

## What makes a Progressive Web App  

To run as a PWA, your server-hosted web app must meet the following 3 requirements.  

:::row:::
   :::column span="1":::
      [HTTPS][WikiHttps]  
   :::column-end:::
   :::column span="2":::
      Protects your users by providing a secure connection for server or app communication.  Service Workers and other PWA technologies only work with web resources served over a secure connection \(or from `localhost` for debugging purposes\).  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      [Service Worker][PwaServiceWorkers]  
   :::column-end:::
   :::column span="2":::
      Acts as a network proxy between your server and client app.  Service Worker threads provide offline support, resource caching, push notifications, background data sync, and  page-load performance optimizations.  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      [Web App Manifest][PwaWebAppManifests]  
   :::column-end:::
   :::column span="2":::
      Provides a JSON-based metadata file that describes key information about your web app, so that Windows 10 and other host platforms provide your PWA users with an installable, native app-like experience.  Key information includes icons, language, and URL entry point.  
   :::column-end:::
:::row-end:::  

Before anything else, a PWA is a website that provides content to your users. Converting it to a PWA means progressively enhancing this, depending on device capabilities, to provide users with a more engaging experience. Therefore, to be a great PWA, your app should also employ web best practices such as the following.  

:::row:::
   :::column span="1":::
      [Cross-browser compatibility][MDNCrossBrowserTesting]  
   :::column-end:::
   :::column span="2":::
      Ensure your PWA works by [testing][MicrosoftDeveloperEdgeToolsRemote] in different browsers and environments.  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      [Responsive design][WikiResponsiveWebDesign]  
   :::column-end:::
   :::column span="2":::
      Employs fluid layouts and flexible images.  Responsive design includes the following elements that adapt your UX to your user's device.  
      
      *   CSS [grid][MDNCssGridLayout]  
      *   [flexbox][MDNCssFlexibleBoxLayout]  
      *   [media queries][MDNMediaQueries]  
      *   [responsive images][MDNResponsiveImages]  
          
      Uses [device emulation tools][DevToolsGuideDeviceModeTestingOtherBrowsers] from your browser to locally test, or create a remote debugging session on [Windows][DevtoolsRemoteDebuggingWindows] or [Android][DevtoolsRemoteDebuggingIndex] to test directly on a target device.
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      [Deep linking][WikiDeepLinking]  
   :::column-end:::
   :::column span="2":::
      Routes each page of your site to a unique URL so existing users may help you engage an even broader audience through social media sharing.  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      [Offline experience][PwaOfflineExperience]  
   :::column-end:::
   :::column span="2":::
      Once installed, works regardless of your users' connection status and provides a custom offline page rather than using the browser default offline page.  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      [Validation and testing practices][Webhint]  
   :::column-end:::
   :::column span="2":::
      Uses code quality tools like the [Webhint][Webhint] linter to optimize the efficiency, robustness, safety, and accessibility of your app.  
   :::column-end:::
:::row-end:::  

> [!NOTE]
> To turn your PWA into a [Microsoft Store][MicrosoftDeveloperStore] app, navigate to [Progressive Web Apps in the Microsoft Store][PwaChromiumMicrosoftStore].  

## PWAs on Microsoft Edge (Chromium)  

When you build a Progressive Web App using web standard APIs, your app can be deployed across platforms and devices and take advantage of the device-specific capabilities as available. PWAs in Microsoft Edge add the following advantages to your website.  

*   Your app is built on a standards-based web platform.  
*   Allows your users to install your app directly from the browser.  
*   Allows your users to install your app without a Store-based deployment or registration.  

Once installed, your app uses the same code as your website, but runs in a standalone window with no browser frame or address bar.  

:::image type="complex" source="../media/starbucks-coffee-site-and-app-side-by-side.png" alt-text="The Starbucks Coffee Company website and PWA side by side" lightbox="../media/starbucks-coffee-site-and-app-side-by-side.png":::
    The Starbucks Coffee Company website and PWA side by side  
:::image-end:::  
    
Desktop PWAs are supported on any of the platforms Microsoft Edge is [available](https://www.microsoft.com/edge) on. The following benefits are included.  

*   Apps may be installed directly from within the browser using the **App Available** icon in the navigation bar.  
    
    :::image type="complex" source="../media/install-progressive-web-app-icon.png" alt-text="Install app flyout and icon" lightbox="../media/install-progressive-web-app-icon.png":::
       Install app flyout and icon  
    :::image-end:::  
    
*   Apps may also be installed, run, and managed from the **Settings** > **Apps** menu  
    
    :::image type="complex" source="../media/app-menus.png" alt-text="App menu items under settings" lightbox="../media/app-menus.png":::
       App menu items under settings  
    :::image-end:::  
    
*   Apps are integrated in Windows like any other apps. Web Notifications are shown in the Windows notification system, app icons appear in the task bar, the start menu and everywhere else Windows lists apps, apps can automatically be run on login, and more.  
*   Shared cookie store with the browser profile that installed the app.  
*   Access to other browser features using the **Setting and more** \(`...`\) menu including certificate validation, site permissions, tracking protection, and browser extensions.  
*   Full access to [Microsoft Edge DevTools][DevtoolsProgressiveWebApps] for debugging your app.  

Microsoft Edge continuously adds new capabilities that make it easier for PWAs to look and feel like great native apps. The gap between web and native is quickly being filled as the result of a collaboration between Microsoft, Google, Intel and others, who are all contributing to open source projects that create new capabilities. This is done through web standards, and therefore remains cross platform.  

<!-- links -->  

[DevtoolsRemoteDebuggingIndex]: ../../devtools-guide-chromium/remote-debugging/index.md "Get started with remote debugging Android devices | Microsoft Docs"  
[DevtoolsRemoteDebuggingWindows]: ../../devtools-guide-chromium/remote-debugging/windows.md "Get Started with Remote Debugging Windows 10 Devices | Microsoft Docs"  
[DevToolsGuideDeviceModeTestingOtherBrowsers]: ../../devtools-guide-chromium/device-mode/testing-other-browsers.md "Emulate and test other browsers | Microsoft Docs"  
[DevtoolsProgressiveWebApps]: ../../devtools-guide-chromium/progressive-web-apps/index.md "Debug Progressive Web Apps | Microsoft Docs"  
[PwaChromiumMicrosoftStore]: ./microsoft-store.md "Publish your Progressive Web App to the Microsoft Store | Microsoft Docs"
[PwaServiceWorkers]: ../developer-guide/serviceworker.md "Use Service Workers to manage network requests and push notifications | Microsoft Docs"
[PwaWebAppManifests]: ../developer-guide/webappmanifests.md "Use the Web App Manifest to integrate your Progressive Web App into the Operating System | Microsoft Docs"
[PwaOfflineExperience]: ../developer-guide/offline.md "Offline and network connectivity support in Progressive Web Apps | Microsoft Docs"

[WindowsUWPControlsPatternTilesNotificationsWns]: /windows/uwp/controls-and-patterns/tiles-and-notifications-windows-push-notification-services--wns--overview.md "Windows Push Notification Services (WNS) overview | Microsoft Docs"  
[WindowsUWPDesignDevicesDesigningTv]: /windows/uwp/design/devices/designing-for-tv.md "Designing for Xbox and TV | Microsoft Docs"  
[WindowsUWPDesignDevicesIndex]: /windows/uwp/design/devices/index.md "UI considerations for UWP devices | Microsoft Docs"  
[WindowsUWPGetStartedGuide]: /windows/uwp/get-started/universal-application-platform-guide.md "What's a Universal Windows Platform (UWP) app? | Microsoft Docs"  
[WindowsUWPLaunchResumeBackgroundTasks]: /windows/uwp/launch-resume/support-your-app-with-background-tasks.md "Support your app with background tasks | Microsoft Docs"  
[WindowsUWPPublishIndex]: /windows/uwp/publish/index.md "Publish Windows apps and games | Microsoft Docs"  
[WindowsUWPPublishDeveloperAccount]: /windows/uwp/publish/opening-a-developer-account.md "Opening a developer account | Microsoft Docs"  

[WindowsBlogsWelcomingPWAsEdgeWindows]: https://blogs.windows.com/msedgedev/2018/02/06/welcoming-progressive-web-apps-edge-windows-10/#56z7mJwKsykfbR4I.97 "Welcoming Progressive Web Apps to Microsoft Edge and Windows 10 - Windows Blogs"  
[MicrosoftDeveloperEdgePlatformStatusBackgroundSync]: https://developer.microsoft.com/microsoft-edge/platform/status/backgroundsyncapi "Background Sync API - Microsoft Edge Platform Status"  
[MicrosoftDeveloperEdgePlatformStatusWebAppManifest]: https://developer.microsoft.com/microsoft-edge/platform/status/webapplicationmanifest "Web App Manifest - Microsoft Edge Platform Status"  
[MicrosoftDeveloperEdgeToolsRemote]: https://developer.microsoft.com/microsoft-edge/tools/remote "Instant testing"  
[MicrosoftDeveloperWindowsMixedReality]: https://developer.microsoft.com/windows/mixed-reality "Mixed Reality for developers"  
[MicrosoftDeveloperWindowsSurfaceHub]: https://developer.microsoft.com/windows/surfacehub "Microsoft Surface Hub"  
[MicrosoftDeveloperStore]: https://developer.microsoft.com/store "Microsoft Developer Store"  
[MicrosoftEdge]: https://www.microsoft.com/edge "Download New Microsoft Edge Browser"  
[MicrosoftSupportWindowsFocusAssist]: https://support.microsoft.com/help/4026996/windows-10-turn-focus-assist-on-or-off "Turn Focus assist on or off in Windows 10"  
[MicrosoftSupportWindowsNotificationSettings]: https://support.microsoft.com/help/4028678/windows-10-change-notification-settings "Change notification settings in Windows 10"  

[MDNCache]: https://developer.mozilla.org/docs/Web/API/Cache "Cache | MDN"  
[MDNCrossBrowserTesting]: https://developer.mozilla.org/docs/Learn/Tools_and_testing/Cross_browser_testing "Cross browser testing | MDN"  
[MDNCssFlexibleBoxLayout]: https://developer.mozilla.org/docs/Web/CSS/CSS_Flexible_Box_Layout "CSS Flexible Box Layout | MDN"  
[MDNCssGridLayout]: https://developer.mozilla.org/docs/Web/CSS/CSS_Grid_Layout "CSS Grid Layout | MDN"  
[MDNFetchApi]: https://developer.mozilla.org/docs/Web/API/Fetch_API "Fetch API | MDN"  
[MDNMediaQueries]: https://developer.mozilla.org/docs/Web/CSS/Media_Queries "Media queries | MDN"  
[MDNNotificationsApi]: https://developer.mozilla.org/docs/Web/API/Notifications_API "Notifications API | MDN"  
[MDNPushApi]: https://developer.mozilla.org/docs/Web/API/Push_API "Push API | MDN"  
[MDNResponsiveImages]: https://developer.mozilla.org/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images "Responsive images | MDN"  
[MDNSyncManager]: https://developer.mozilla.org/docs/Web/API/SyncManager "SyncManager | MDN"   

[PWABuilder]: https://www.pwabuilder.com "PWABuilder"  

[Webhint]: https://webhint.io "webhint"  

[WikiDeepLinking]: https://en.wikipedia.org/wiki/Deep_linking "Deep linking - Wikipedia"  
[WikiHttps]: https://en.wikipedia.org/wiki/HTTPS "HTTPS - Wikipedia"  
[WikiResponsiveWebDesign]: https://en.wikipedia.org/wiki/Responsive_web_design "Responsive web design - Wikipedia"  
