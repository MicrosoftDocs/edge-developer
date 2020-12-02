---
description: Progressive Web Apps run natively on Windows 10.  Here is everything you need to know as a web developer.
title: Progressive Web Apps (EdgeHTML) on Windows
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.prod: microsoft-edge
ms.technology: pwa
keywords: progressive web apps, PWA, Edge, JavaScript, Windows, UWP, Microsoft Store
ms.date: 12/02/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# Progressive Web Apps (EdgeHTML) on Windows  

With [Progressive Web Apps][MDNApps] \(or simply PWAs\) you do not have to decide between using open web technologies for cross-platform interoperability and providing your users with a native app-like experience customized for their device.  That is because PWAs are just websites that are [progressively enhanced][AListApartUnderstandingProgressiveEnhancement] to function like native apps on supporting platforms.  The qualities of a PWA combine the best of the web and native apps.  

:::row:::
    :::column:::
        ![Discoverable icon][ImageISearch]
        ### [Discoverable][MDNPwaAdvantagesDiscoverable]
        From web search results and supporting app stores
    :::column-end:::
    :::column:::
        ![Installable icon][ImageIPackage]
        ### [Installable][MDNPwaAdvantagesInstallable]
        Pin and launch from the home screen  
    :::column-end:::
    :::column:::
        ![Re-engageable icon][ImageIPushNotification]
        ### [Re-engageable][MDNPwaAdvantagesReEngageable]
        Send push notifications, even when the app is not active  
    :::column-end:::
    :::column:::
        ![Network Independent icon][ImageIOffline]
        ### [Network Independent][MDNPwaAdvantagesNetworkIndependent]
        Works offline and in low-network conditions  
    :::column-end:::
:::row-end:::
:::row:::
    :::column:::
        ![Progressive icon][ImageIProgressive]
        ### [Progressive][MDNPwaAdvantagesProgressive]
        Experience scales \(up or down\) with device capabilities  
    :::column-end:::
    :::column:::
        ![Safe icon][ImageISecurity]
        ### [Safe][MDNPwaAdvantagesSafe]
        Provides a secure HTTPS endpoint and other user safeguards  
    :::column-end:::
    :::column:::
        ![Responsive icon][ImageIResponsive]
        ### [Responsive][MDNPwaAdvantagesResponsive]
        Adapts to the user's screen size / orientation and input method  
    :::column-end:::
    :::column:::
        ![Linkable icon][ImageILink]
        ### [Linkable][MDNPwaAdvantagesLinkable]
        Share and launch from a standard hyperlink  
    :::column-end:::
:::row-end:::

By building or converting your existing site to a PWA, you are able to better engage your existing audience with push notifications and offline support.  At the same time, you are able to continue building your audience on the open web, as users discover your PWA through search and link-sharing.  

## PWAs on Windows 10 (EdgeHTML)  

> [!NOTE]
> With the move to Microsoft Edge (Chromium) from EdgeHTML, the underlying web platforms used by PWAs are not the same.  Edge (Chromium) PWAs are installed from and run within the browser.  Edge (EdgeHTML) PWAs run as Universal Windows Platform (UWP) applications and use the older EdgeHTML web platform.  If you require Windows 10 API access for your PWA, this EdgeHTML documentation is for you.  If your goal is cross platform support without Windows specific API access, please head over to the [Microsoft Edge (Chromium) PWA documentation][PwaChromiumIndex].  

When you build a Progressive Web App to take advantage of Windows 10, you are able to distribute your PWA through the [Microsoft Store][MicrosoftDeveloperStore], the entire Windows 10 install base of 600+ million active monthly users is your potential app audience!  Applications developed this way run as [Universal Windows Platform][WindowsUWPGetStartedGuide] apps and have native like access to the WinRT APIs.  Note that the web platform rendering your code is EdgeHTML when using the WinRT APIs so be sure to use feature detection before calling any Windows specific APIs to ensure your PWA is able to still run across platforms where Microsoft Edge \(Chromium\) PWAs are available.  

[Here is how to get started][PwaEdgehtmlGetStarted] converting your web app to a PWA \(EdgeHTML\), testing it on Windows 10, and distributing it in the Microsoft Store.  

## Requirements  

To run as a PWA, your server-hosted web app at minimum requires:  

*   [HTTPS][WikiHttps].  Protect your users by providing a secure connection for server/app communication.  Service workers and other PWA technologies only work with web resources served over a secure connection \(or from `localhost` for debugging purposes\).  
  
*   [Service workers][MDNServiceWorkerApi].  Use service worker threads to act as network proxies between your server and client app in order to provide offline support, resource caching, push notifications, background data sync, and page load perf optimizations.  

*   [Web app manifest][MDNWebAppManifest].  Provide a JSON-based metadata file describing key information about your web app \(such as icons, language, and URL entry point\) so that Windows 10 and other host platforms are able to provide your PWA users with an installable, native app-like experience.  Associating your site with a web app manifest makes it eligible for [automatic inclusion in the Microsoft Store][PwaEdgehtmlMicrosoftStoreImportingBing] through the Bing indexing service.  

To be a great PWA, your app also needs:  

*   [Cross-browser compatibility][MDNCrossBrowserTesting].  Ensure your PWA works by [testing][MicrosoftDeveloperEdgeToolsRemote] in different browsers and environments.  On Windows 10, be sure to test your app both in the Microsoft Edge browser and also in the full PWA experience: as an installed, standalone Windows 10 app \(powered by the EdgeHTML engine\).  
  
*   [Responsive design][WikiResponsiveWebDesign].  Employ fluid layouts and flexible images with CSS [grid][MDNCssGridLayout] and/or [flexbox][MDNCssFlexibleBoxLayout], [media queries][MDNMediaQueries], and [responsive images[MDNResponsiveImages] to adapt your UX to your user's device.  Use device [emulation tools][DevToolsGuideEmulation] from your browser to test locally, or set up a [remote debugging session][DevToolsProtocolClientsEdgeDevToolsPreview] to test directly on a target device.  On Windows 10, PWAs \(EdgeHTML\) are able to also be [tailored for form factors][WindowsUWPDesignDevicesIndex] beyond desktop, phone and tablet, including: [Xbox and TV][WindowsUWPDesignDevicesDesigningTv], [Surface Hub][MicrosoftDeveloperWindowsSurfaceHub], and [Windows Mixed Reality][MicrosoftDeveloperWindowsMixedReality] devices.  
  
*   [Deep linking][WikiDeepLinking].  Route each page of your site to a unique URL so existing users may help you engage an even broader audience through social media sharing.  

*   [Best practices][Webhint].  Use code quality tools like the [webhint][Webhint] linter to optimize the efficiency, robustness, safety, and accessibility of your app.  

To submit your Progressive Web App to the [Microsoft Store][MicrosoftDeveloperStore], you must have:  

*   A [Microsoft developer account][WindowsUWPPublishDeveloperAccount]  
*   Completed [steps for publishing a Windows app][WindowsUWPPublishIndex]  

In the coming months, existing PWAs on the web meeting [specific criteria][PwaEdgehtmlMicrosoftStoreCriteriaAutomaticSubmission] are auto-indexed by the Bing search engine into the Microsoft Store \(where developers are able to directly manage them for their Windows 10 audience\).  

Check out [PWAs (EdgeHTML) in the Microsoft Store][PwaEdgehtmlMicrosoftStore] for further details.  

## Current availability  

Browser engine support for Progressive Web Apps calls for a number of architectural components, the most significant being the networking infrastructure underlying the [Fetch API][MDNFetchApi].  PWA support in the EdgeHTML engine was completed in the Windows 10 1809 release.  Further improvements to web standards since that time will not be incorporated into the EdgeHTML engine so be sure to run compatibility tests and use feature detection to gracefully fallback should the feature your PWA needs be unsupported on the EdgeHTML platform.  

For the upcoming Microsoft Edge \(Chromium\) release in 2020, the browser platform has full support for these features that work across devices where the Chromium browser is supported.  

For EdgeHTML and Windows, here is the current status of standards-based PWA technologies:  

| Technology | Purpose | Availability | Usage notes |  
|:--- |:--- |:--- |:--- |  
| [Web Application Manifest][MDNWebAppManifest] | Provides app metadata to the host OS for enabling installation and app store promotion.  Required for PWAs in the Microsoft Store.  | [In development][MicrosoftDeveloperEdgePlatformStatusWebApplicationManifest] | For now, you are able to use [PWA Builder][PWABuilder] to generate a W3C-compliant JSON manifest and package your app for various OS platforms.  For Windows, PWA Builder translates your JSON manifest into the `.appxmanifest` \(XML\) format required by Windows 10 apps.  |  
| [Fetch API][MDNFetchApi] | Provides asynchronous networking \(requests, responses\) for page resources |[EdgeHTML 14+][DevGuideWhatsNewEdgeHtml14] / Build 14393+ | The [Service Worker API][MDNServiceWorkerApi] syntax is based on Fetch-based networking APIs.  You are able to also use [Fetch API][MDNFetchApi] more generally as a modern alternative to `XMLHttpRequest`.  |  
| [Service Worker API][MDNServiceWorkerApi] | Provides an offline-capable web app model / network proxy, where event-driven scripts run independent of web pages  | [EdgeHTML17][DevGuideWhatsNewEdgeHtml17] / Build 17133+ | Experimental support \(behind `Enable Service Workers` flag\) shipped in EdgeHTML 16.  On by default in EdgeHTML 17+ builds.  |  
| [Cache API][MDNCache] | Provides a storage mechanism for network request/response pairs | [EdgeHTML17][DevGuideWhatsNewEdgeHtml17] / Build 17133+ | See [Service Worker API][MDNServiceWorkerApi] note above.  |  
| [Push API][MDNPushApi] | Enables a service worker to subscribe to push notifications |[EdgeHTML17][DevGuideWhatsNewEdgeHtml17] / Build 17133+| See [Service Worker API][MDNServiceWorkerApi] note above.  Windows 10 apps \(including PWAs\) require the [Windows Push Notification Service \(WNS\)][WindowsUWPControlsPatternTilesNotificationsWns] to deliver push notifications, which supports the W3C [Push API][MDNPushApi].  |  
| [Notifications API][MDNNotificationsApi] | Enables a service worker to display a system notification to the user upon push message | [EdgeHTML 14+][DevGuideWhatsNewEdgeHtml14] / Build 14393+ | Web Notifications in EdgeHTML are fully integrated with the Windows 10 [Action Center][MicrosoftSupportWindowsNotificationSettings], where users are able to manage app notifications and set [Quiet Hours][MicrosoftSupportWindowsFocusAssist].  |  
| [Background Sync API][MDNSyncManager] | Provides an API for notifying a service worker that the user has come back online and for scheduling periodic events to synchronize local data with the server | [In development][MicrosoftDeveloperEdgePlatformStatusBackgroundSync] | For now, you are able to use the native [WinRT BackgroundTask API][WindowsUWPLaunchResumeBackgroundTasks] to implement background tasks for your PWA when it runs as a Windows 10 app.  |  

Here is the current status of Microsoft Store support for PWAs on Windows 10:  

| Store submission method | Status | Details |  
|:--- |:--- |:--- |  
| Manual \(developer initiated\) | Available | Check out [PWAs (EdgeHTML) in the Microsoft Store][PwaEdgehtmlMicrosoftStore] to get started.  |  
| Automatic \(auto-indexed with Bing\) | Coming soon | We are [currently piloting][WindowsBlogsWelcomingPWAsEdgeWindows] the PWA onboarding process with a limited subset of app partners.  In the coming months Microsoft welcomes PWAs across the mainstream web to the Microsoft Store.  Check out [Automatic PWA importing with Bing][PwaEdgehtmlMicrosoftStoreCriteriaAutomaticSubmission] to learn more about Microsoft Store requirements for auto-generated PWA listings.  |  

<!-- image links -->  

[ImageISearch]: media/i_search.png  
[ImageIPackage]: media/i_package.png  
[ImageIPushNotification]: media/i_push-notification.png  
[ImageIOffline]: media/i_offline.png  
[ImageIProgressive]: media/i_progressive.png  
[ImageISecurity]: media/i_security.png  
[ImageIResponsive]: media/i_responsive.png  
[ImageILink]: media/i_link.png  

<!-- links -->  

[DevToolsProtocolClientsEdgeDevToolsPreview]: ../devtools-protocol/0.1/clients.md#microsoft-edge-devtools-preview "Microsoft Edge DevTools Preview - DevTools Protocol Clients | Microsoft Docs"  
[DevToolsGuideEmulation]: ../devtools-guide/emulation.md "Emulation | Microsoft Docs"  
[DevGuideWhatsNewEdgeHtml17]: ../dev-guide/whats-new/edgehtml-17.md "What's new in EdgeHTML 17 | Microsoft Docs"  
[DevGuideWhatsNewEdgeHtml14]: ../dev-guide/whats-new/edgehtml-14.md "What's New in EdgeHTML 14 | Microsoft Docs"  
[PwaChromiumIndex]: ../../progressive-web-apps-chromium/index.md "Progressive Web Apps (Chromium) on Windows | Microsoft Docs"  
[PwaEdgehtmlGetStarted]: ../progressive-web-apps/get-started.md "Get started with Progressive Web Apps (EdgeHTML) | Microsoft Docs"  
[PwaEdgehtmlMicrosoftStore]: ../progressive-web-apps/microsoft-store.md "Progressive Web Apps in the Microsoft Store | Microsoft Docs"
[PwaEdgehtmlMicrosoftStoreCriteriaAutomaticSubmission]: ../progressive-web-apps/microsoft-store.md#criteria-for-automatic-submission "Criteria for automatic submission - Progressive Web Apps in the Microsoft Store | Microsoft Docs"  
[PwaEdgehtmlMicrosoftStoreImportingBing]: ./microsoft-store.md#automatic-pwa-importing-with-bing "Automatic PWA importing with Bing - Progressive Web Apps (EdgeHTML) in the Microsoft Store | Microsoft Docs"  


[WindowsUWPControlsPatternTilesNotificationsWns]: /windows/uwp/controls-and-patterns/tiles-and-notifications-windows-push-notification-services--wns--overview.md "Windows Push Notification Services \(WNS\) overview"  
[WindowsUWPDesignDevicesDesigningTv]: /windows/uwp/design/devices/designing-for-tv.md "Designing for Xbox and TV"  
[WindowsUWPDesignDevicesIndex]: /windows/uwp/design/devices/index.md "UI considerations for UWP devices"  
[WindowsUWPGetStartedGuide]: /windows/uwp/get-started/universal-application-platform-guide.md "What's a Universal Windows Platform (UWP) app?"  
[WindowsUWPLaunchResumeBackgroundTasks]: /windows/uwp/launch-resume/support-your-app-with-background-tasks.md "Support your app with background tasks"  
[WindowsUWPPublishIndex]: /windows/uwp/publish/index.md "Publish Windows apps and games"  
[WindowsUWPPublishDeveloperAccount]: /windows/uwp/publish/opening-a-developer-account.md "Opening a developer account"  

[WindowsBlogsWelcomingPWAsEdgeWindows]: https://blogs.windows.com/msedgedev/2018/02/06/welcoming-progressive-web-apps-edge-windows-10/#56z7mJwKsykfbR4I.97 "Welcoming Progressive Web Apps to Microsoft Edge and Windows 10 - Windows Blogs"  
[MicrosoftDeveloperEdgePlatformStatusBackgroundSync]: https://developer.microsoft.com/microsoft-edge/platform/status/backgroundsyncapi "Background Sync API - Microsoft Edge Platform Status"  
[MicrosoftDeveloperEdgePlatformStatusWebApplicationManifest]: https://developer.microsoft.com/microsoft-edge/platform/status/webapplicationmanifest "Web Application Manifest - Microsoft Edge Platform Status"  
[MicrosoftDeveloperEdgeToolsRemote]: https://developer.microsoft.com/microsoft-edge/tools/remote "Instant testing"  
[MicrosoftDeveloperWindowsMixedReality]: https://developer.microsoft.com/windows/mixed-reality "Mixed Reality for developers"  
[MicrosoftDeveloperWindowsSurfaceHub]: https://developer.microsoft.com/windows/surfacehub "Microsoft Surface Hub"  
[MicrosoftDeveloperStore]: https://developer.microsoft.com/store "Microsoft Developer Store"  
[MicrosoftSupportWindowsFocusAssist]: https://support.microsoft.com/help/4026996/windows-10-turn-focus-assist-on-or-off "Turn Focus assist on or off in Windows 10"  
[MicrosoftSupportWindowsNotificationSettings]: https://support.microsoft.com/help/4028678/windows-10-change-notification-settings "Change notification settings in Windows 10"  

[AListApartUnderstandingProgressiveEnhancement]: https://alistapart.com/article/understandingprogressiveenhancement "Understanding Progressive Enhancement - A List Apart"  

[MDNApps]: https://developer.mozilla.org/Apps/Progressive "apps | MDN"  
[MDNCache]: https://developer.mozilla.org/docs/Web/API/Cache "Cache | MDN"  
[MDNCrossBrowserTesting]: https://developer.mozilla.org/docs/Learn/Tools_and_testing/Cross_browser_testing "Cross browser testing | MDN"  
[MDNCssFlexibleBoxLayout]: https://developer.mozilla.org/docs/Web/CSS/CSS_Flexible_Box_Layout "CSS Flexible Box Layout | MDN"  
[MDNCssGridLayout]: https://developer.mozilla.org/docs/Web/CSS/CSS_Grid_Layout "CSS Grid Layout | MDN"  
[MDNFetchApi]: https://developer.mozilla.org/docs/Web/API/Fetch_API "Fetch API | MDN"  
[MDNMediaQueries]: https://developer.mozilla.org/docs/Web/CSS/Media_Queries "Media queries | MDN"  
[MDNNotificationsApi]: https://developer.mozilla.org/docs/Web/API/Notifications_API "Notifications API | MDN"  
[MDNPushApi]: https://developer.mozilla.org/docs/Web/API/Push_API "Push API | MDN"  
[MDNPwaAdvantagesDiscoverable]: https://developer.mozilla.org/docs/Web/Apps/Progressive/Advantages#Discoverable "Discoverable - Progressive web app advantages"  
[MDNPwaAdvantagesInstallable]: https://developer.mozilla.org/docs/Web/Apps/Progressive/Advantages#Installable "Installable - Progressive web app advantages"  
[MDNPwaAdvantagesLinkable]: https://developer.mozilla.org/Apps/Progressive/Advantages#Linkable "Linkable - Progressive web app advantages"  
[MDNPwaAdvantagesNetworkIndependent]: https://developer.mozilla.org/docs/Web/Apps/Progressive/Advantages#Network_independent "Network independent - Progressive web app advantages"  
[MDNPwaAdvantagesProgressive]: https://developer.mozilla.org/docs/Web/Apps/Progressive/Advantages#Progressive "Progressive - Progressive web app advantages"  
[MDNPwaAdvantagesReEngageable]: https://developer.mozilla.org/docs/Web/Apps/Progressive/Advantages#Re-engageable "Re-engageable - Progressive web app advantages"  
[MDNPwaAdvantagesResponsive]: https://developer.mozilla.org/Apps/Progressive/Advantages#Responsive "Responsive - Progressive web app advantages"  
[MDNPwaAdvantagesSafe]: https://developer.mozilla.org/docs/Web/Apps/Progressive/Advantages#Safe "Safe - Progressive web app advantages"  
[MDNResponsiveImages]: https://developer.mozilla.org/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images "Responsive images | MDN"  
[MDNServiceWorkerApi]: https://developer.mozilla.org/docs/Web/API/Service_Worker_API "Service Worker API | MDN"  
[MDNSyncManager]: https://developer.mozilla.org/docs/Web/API/SyncManager "SyncManager | MDN"  
[MDNWebAppManifest]: https://developer.mozilla.org/docs/Web/Manifest "Web App Manifest | MDN"  

[PWABuilder]: https://www.pwabuilder.com "PWABuilder"  

[Webhint]: https://webhint.io "webhint"  

[WikiDeepLinking]: https://en.wikipedia.org/wiki/Deep_linking "Deep linking - Wikipedia"  
[WikiHttps]: https://en.wikipedia.org/wiki/HTTPS "HTTPS - Wikipedia"  
[WikiResponsiveWebDesign]: https://en.wikipedia.org/wiki/Responsive_web_design "Responsive web design - Wikipedia"  
