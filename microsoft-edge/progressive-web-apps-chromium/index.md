---
description: Progressive Web Apps run natively on Windows 10.  Here is everything you need to know as a web developer.
title: Progressive Web Apps on Windows
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/17/2020
ms.topic: article
ms.prod: microsoft-edge
ms.technology: pwa
keywords: progressive web apps, PWA, Edge, JavaScript, Windows, UWP, Microsoft Store
---

# Progressive Web Apps on Windows  

With [Progressive Web Apps][MDNApps] \(or simply PWAs\), you do not have to decide between using open web technologies for cross-platform interoperability and providing your users with a native app-like experience customized for their devices.  PWAs are just websites that are [progressively enhanced][AListApartUnderstandingProgressiveEnhancement] to function like native apps on supporting platforms.  The qualities of a PWA combine the best of the web and native apps.  

:::row:::
    :::column:::
        ![Discoverable icon][ImageISearch]
        ### [Discoverable][MDNPwaAdvantagesDiscoverable]
        From web search results and supporting app stores
    :::column-end:::
    :::column:::
        ![Installable icon][ImageIPackage]
        ### [Installable][MDNPwaAdvantagesInstallable]
        Pin and launch from the home screen, Start Menu, Taskbar, and so on
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
        Experience scales up (or down) with device capabilities
    :::column-end:::
    :::column:::
        ![Safe icon][ImageISecurity]
        ### [Safe][MDNPwaAdvantagesSafe]
        Provides a secure HTTPS endpoint and other user safeguards
    :::column-end:::
    :::column:::
        ![Responsive icon][ImageIResponsive]
        ### [Responsive][MDNPwaAdvantagesResponsive]
        Adapts to the user's screen size or orientation and input method
    :::column-end:::
    :::column:::
        ![Linkable icon][ImageILink]
        ### [Linkable][MDNPwaAdvantagesLinkable]
        Share and launch from a standard hyperlink
    :::column-end:::
:::row-end:::

By building or converting your existing site to a PWA, you engage better with your existing audience using push notifications, app-like integration, and offline support.  At the same time, you should continue to build your audience on the open web, as users discover your PWA through search and link-sharing.  Best of all, you may update your app by simply updating your web server code.  

## PWAs on Microsoft Edge (Chromium)  

When you build a Progressive Web App targeting web standard APIs, your application may be deployed across platforms and devices and take advantage of the device specific capabilities as available.  PWAs in Microsoft Edge \(Chromium\) are completely standards-based from a web platform perspective and enable users to install the app directly from within the browser without the need for Store-based deployment or registration.  Desktop PWAs are supported on any of the platforms Microsoft Edge \(Chromium\) is available, including Windows 7, Windows 10, and macOS.  Other benefits include:  

*   Applications may be installed directly from within the browser via the **Install** icon in the navigation bar.  
    
    ![Install application flyout and icon][ImageInstallPwa]  
    
*   Applications may also be installed, run and managed from the **Settings** > **Apps** menu  
    
    ![Application menu items under settings][ImageAppMenus]  

*   Web Notifications are integrated into the Windows notification system
*   Shared cookie store with the browser profile that installed the app
*   Access to other browser features via the `...` menu including certificate validation, site permissions, tracking protection, and browser extensions
*   Full access to [Microsoft Edge DevTools][DevtoolsProgressiveWebApps] for debugging your app  

> [!IMPORTANT]
> To tailor PWAs specifically for Windows 10 that make WinRT API requests using JavaScript, see the [documentation specific to the EdgeHTML PWA features][PwaEdgehtmlIndex].  Learn more about testing your PWA on Windows 10 and distributing it in the Microsoft Store.  

> [!NOTE]
> Check out the [Build 2020 PWA session][BuildVideo] for an overview of PWA benefits, upcoming features and short demos. 

## Requirements  

To run as a PWA, your server-hosted web app should include following minimum requirements.  

| Requirement | Details | 
|:--- |:--- |  
| [HTTPS][WikiHttps] | Protect your users by providing a secure connection for server or app communication.  Service Workers and other PWA technologies only work with web resources served over a secure connection \(or from `localhost` for debugging purposes\).  |  
| [Service Workers][MDNServiceWorkerApi] | Use Service Worker threads to act as network proxies between your server and client app in order to provide offline support, resource caching, push notifications, background data sync, and  page load perf optimizations.  |  
| [Web App Manifest][MDNWebAppManifest] | Provide a JSON-based metadata file describing key information about your web app \(such as icons, language, and URL entry point\), so that Windows 10 and other host platforms are able to provide your PWA users with an installable, native app-like experience.  |  

To be a great PWA, your app must also meet the following requirements.  

| Requirement | Details | 
|:--- |:--- |  
| [Cross-browser compatibility][MDNCrossBrowserTesting] | Ensure your PWA works by [testing][MicrosoftDeveloperEdgeToolsRemote] in different browsers and environments.  |  
| [Responsive design][WikiResponsiveWebDesign] | Employ fluid layouts and flexible images with CSS [grid][MDNCssGridLayout], [flexbox][MDNCssFlexibleBoxLayout], CSS [grid][MDNCssGridLayout] and [flexbox][MDNCssFlexibleBoxLayout] , [media queries][MDNMediaQueries], and [responsive images][MDNResponsiveImages] to adapt your UX to your user's device.  Use [device emulation tools][DevToolsGuideEmulation] from your browser to test locally, or set up a [remote debugging session][DevToolsProtocolClientsEdgeDevToolsPreview] to test directly on a target device.  |  
| [Deep linking][WikiDeepLinking] | Route each page of your site to a unique URL so existing users may help you engage an even broader audience through social media sharing.  |  
| [Best practices][Webhint] | Use code quality tools like the [Webhint][Webhint] linter to optimize the efficiency, robustness, safety, and accessibility of your app.  |  
| [Chromium PWA Checklist][WebDevGoodPwaChecklist] | Check your PWA against the Google baseline PWA checklist.  |  

If you want to turn your PWA into a [Microsoft Store][MicrosoftDeveloperStore] application, head to the [Progressive Web Apps (EdgeHTML)][PwaEdgehtmlMicrosoftStore] documentation.  
  

<!-- image links -->  

[ImageISearch]: media/i_search.png  
[ImageIPackage]: media/i_package.png  
[ImageIPushNotification]: media/i_push-notification.png  
[ImageIOffline]: media/i_offline.png  
[ImageIProgressive]: media/i_progressive.png  
[ImageISecurity]: media/i_security.png  
[ImageIResponsive]: media/i_responsive.png  
[ImageILink]: media/i_link.png  

[ImageInstallPwa]: ./media/Install_PWA.png  
[ImageAppMenus]: ./media/App_menus.png  

<!-- links -->  

[DevToolsProtocolClientsEdgeDevToolsPreview]: ../devtools-protocol/0.1/clients.md#microsoft-edge-devtools-preview "Microsoft Edge DevTools Preview - DevTools Protocol Clients"  
[DevToolsGuideEmulation]: ../devtools-guide/emulation.md "Emulation"  
[DevtoolsProgressiveWebApps]: ../devtools-guide-chromium/progressive-web-apps.md "Debug Progressive Web Apps"  
[DevGuideWhatsNewEdgeHtml17]: ../dev-guide/whats-new/edgehtml-17.md "What's new in EdgeHTML 17"  
[DevGuideWhatsNewEdgeHtml14]: ../dev-guide/whats-new/edgehtml-14.md "What's New in EdgeHTML 14"  
[PwaEdgehtmlIndex]: ../progressive-web-apps-edgehtml/index.md "Progressive Web Apps (EdgeHTML) on Windows"  
[PwaEdgehtmlMicrosoftStore]: ../progressive-web-apps-edgehtml/microsoft-store.md "Progressive Web Apps in the Microsoft Store"
<!--PwaEdgehtmlMicrosoftStoreCriteriaAutomaticSubmission]: ../progressive-web-apps-edgehtml/microsoft-store.md#criteria-for-automatic-submission "Criteria for automatic submission - Progressive Web Apps in the Microsoft Store"  -->  

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
[MicrosoftEdge]: https://www.microsoft.com/edge "Download New Microsoft Edge Browser"  
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

[BuildVideo]: https://www.youtube.com/watch?v=y4p_QHZtMKM "PWA video"

[PWABuilder]: https://www.pwabuilder.com "PWABuilder"  

[WebDevGoodPwaChecklist]: https://web.dev/pwa-checklist "What makes a good Progressive Web App? | web.dev"  

[Webhint]: https://webhint.io "webhint"  

[WikiDeepLinking]: https://en.wikipedia.org/wiki/Deep_linking "Deep linking - Wikipedia"  
[WikiHttps]: https://en.wikipedia.org/wiki/HTTPS "HTTPS - Wikipedia"  
[WikiResponsiveWebDesign]: https://en.wikipedia.org/wiki/Responsive_web_design "Responsive web design - Wikipedia"  
