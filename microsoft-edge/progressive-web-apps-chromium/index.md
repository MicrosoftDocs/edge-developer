---
description: Progressive Web Apps (Chromium) run natively on Windows 10.  Here is everything you need to know as a web developer.
title: Progressive Web Apps on Windows
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/06/2021
ms.topic: article
ms.prod: microsoft-edge
ms.technology: pwa
keywords: progressive web apps, PWA, Edge, JavaScript, Windows, UWP, Microsoft Store
---
# Progressive Web Apps on Windows overview  

[Progressive Web Apps][MDNApps] \(PWAs\) provide access to open web technologies for cross-platform interoperability and provide your users with a native, app-like experience customized for their devices. PWAs are websites that are [progressively enhanced][AListApartUnderstandingProgressiveEnhancement] to function like native apps on supporting platforms. The qualities of a PWA combine the best of the web and native apps.  

:::row:::
    :::column:::
        :::image type="icon" source="./media/i_search-small.png":::  
    :::column-end:::
    :::column:::
        :::image type="icon" source="./media/i_package-small.png":::  
    :::column-end:::
    :::column:::
        :::image type="icon" source="./media/i_push-notification-small.png":::  
    :::column-end:::
:::row-end:::  
:::row:::
    :::column:::
        ### [Discoverable][MDNPwaAdvantagesDiscoverable]  
    :::column-end:::
    :::column:::
        ### [Installable][MDNPwaAdvantagesInstallable]  
    :::column-end:::
    :::column:::
        ### [Re-engageable][MDNPwaAdvantagesReEngageable]  
    :::column-end:::
:::row-end:::  
:::row:::
    :::column:::
        From web search results and supporting app stores  
    :::column-end:::
    :::column:::
        Pin and launch from the home screen, Start Menu, Taskbar, and so on  
    :::column-end:::
    :::column:::
        Send push notifications, even when the app is not active  
    :::column-end:::
:::row-end:::  
:::row:::
    :::column:::
        :::image type="icon" source="./media/i_offline-small.png":::  
    :::column-end:::
    :::column:::
        :::image type="icon" source="./media/i_progressive-small.png":::  
    :::column-end:::
    :::column:::
        :::image type="icon" source="./media/i_security-small.png":::  
    :::column-end:::
:::row-end:::  
:::row:::
    :::column:::
        ### [Network Independent][MDNPwaAdvantagesNetworkIndependent]  
    :::column-end:::
    :::column:::
        ### [Progressive][MDNPwaAdvantagesProgressive]  
    :::column-end:::
    :::column:::
        ### [Safe][MDNPwaAdvantagesSafe]  
    :::column-end:::
:::row-end:::  
:::row:::
    :::column:::
        Works offline and in low-network conditions  
    :::column-end:::
    :::column:::
        Experience scales up (or down) with device capabilities  
    :::column-end:::
    :::column:::
        Provides a secure HTTPS endpoint and other user safeguards  
    :::column-end:::
:::row-end:::  
:::row:::
    :::column:::
        :::image type="icon" source="./media/i_responsive-small.png":::  
    :::column-end:::
    :::column:::
        :::image type="icon" source="./media/i_link-small.png":::  
    :::column-end:::
    :::column:::
        &nbsp;  
    :::column-end:::
:::row-end:::  
:::row:::
    :::column:::
        ### [Responsive][MDNPwaAdvantagesResponsive]  
    :::column-end:::
    :::column:::
        ### [Linkable][MDNPwaAdvantagesLinkable]  
    :::column-end:::
    :::column:::
        &nbsp;  
    :::column-end:::
:::row-end:::  
:::row:::
    :::column:::
        Adapts to the user's screen size or orientation and input method  
    :::column-end:::
    :::column:::
        Share and launch from a standard hyperlink  
    :::column-end:::
    :::column:::
        &nbsp;  
    :::column-end:::
:::row-end:::  

Build \(or convert\) your existing website to a PWA to enhance engagement with your users. Enhancements include push notifications, app-like integration, and offline support. Continue to build your audience on the open web for users to discover your PWA through search and link-sharing. Best of all, your app is updated using your web server code.  

## PWAs on Microsoft Edge (Chromium)  

When you build a Progressive Web App targeting web standard APIs, your app may be deployed across platforms and devices and take advantage of the device-specific capabilities as available. PWAs in Microsoft Edge \(Chromium\) add the following advantages to your website.  

*   Your app is built on a standards-based web platform.  
*   Allows your users to install your app directly from the browser.  
*   Allows your users to install your app without a Store-based deployment or registration.  
    
Desktop PWAs are supported on any of the platforms Microsoft Edge \(Chromium\) is [available](https://www.microsoft.com/edge). The following benefits are included.

*   Apps may be installed directly from within the browser using the **Install** icon in the navigation bar.  
    
    :::image type="complex" source="./media/install-progressive-web-app-icon.png" alt-text="Install app flyout and icon" lightbox="./media/install-progressive-web-app-icon.png":::
       Install app flyout and icon  
    :::image-end:::  
    
*   Apps may also be installed, run, and managed from the **Settings** > **Apps** menu  
    
    :::image type="complex" source="./media/app-menus.png" alt-text="App menu items under settings" lightbox="./media/app-menus.png":::
       App menu items under settings  
    :::image-end:::  
    
*   Web Notifications are integrated into the Windows notification system  
*   Shared cookie store with the browser profile that installed the app  
*   Access to other browser features using the **Setting and more** \(`...`\) menu including certificate validation, site permissions, tracking protection, and browser extensions  
*   Full access to [Microsoft Edge DevTools][DevtoolsProgressiveWebApps] for debugging your app  
    
> [!NOTE]
> For more information about PWA benefits, upcoming features, and short demos, navigate to [Build 2020 PWA session][BuildVideo]. 

## Requirements  

To run as a PWA, your server-hosted web app should include following minimum requirements.  

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
      [Service Workers][MDNServiceWorkerApi]  
   :::column-end:::
   :::column span="2":::
      Uses Service Worker threads to act as network proxies between your server and client app.  Service Worker threads provide offline support, resource caching, push notifications, background data sync, and  page-load performance optimizations.    
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      [Web App Manifest][MDNWebAppManifest]  
   :::column-end:::
   :::column span="2":::
      Provides a JSON-based metadata file that describes key information about your web app, so that Windows 10 and other host platforms provide your PWA users with an installable, native app-like experience.  Key information includes icons, language, and URL entry point. 
   :::column-end:::
:::row-end:::  

To be a great PWA, your app must also meet the following requirements.  

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
      *   CSS [grid][MDNCssGridLayout] and [flexbox][MDNCssFlexibleBoxLayout]  
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
      [Validation and testing practices][Webhint]  
   :::column-end:::
   :::column span="2":::
      Uses code quality tools like the [Webhint][Webhint] linter to optimize the efficiency, robustness, safety, and accessibility of your app.  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      [Chromium PWA Checklist][WebDevGoodPwaChecklist]  
   :::column-end:::
   :::column span="2":::
      Verifies your PWA against the Google baseline PWA checklist.  
   :::column-end:::
:::row-end:::  

> [!NOTE]
> To turn your PWA into a [Microsoft Store][MicrosoftDeveloperStore] app, navigate to [Progressive Web Apps in the Microsoft Store][PwaChromiumMicrosoftStore].  
  
## See also  

*   [Myth Busting PWAs][Davrous20191018MythBustingPwasNewEdgeEdition]  
*   [A Progressive Roadmap for your Progressive Web App][CloudfourThinksProgressiveRoadmapYourWebApp]  
*   [Offline POSTs with Progressive Web Apps][MediumWebEdgeOfflinePostsProgressiveWebApps]  
*   [PWA Q&A][AaronGustafsonNotebookPwaQa]  
*   [Betting on the Web][JoretegBlogBettingWeb]  
*   [Naming Progressive Web Apps][Fberriman20170626NamingProgressiveWebApps]  
*   [Designing And Building A Progressive Web App Without A Framework (Part 1)][Smashingmagazine201907ProgressiveWebAppFrameworkPart1]  
*   [Designing And Building A Progressive Web App Without A Framework (Part 2)][Smashingmagazine201907ProgressiveWebAppFrameworkPart2]  
*   [Designing And Building A Progressive Web App Without A Framework (Part 3)][Smashingmagazine201907ProgressiveWebAppFrameworkPart3]  
    
<!-- links -->  

[DevtoolsRemoteDebuggingIndex]: ../devtools-guide-chromium/remote-debugging/index.md "Get started with remote debugging Android devices | Microsoft Docs"  
[DevtoolsRemoteDebuggingWindows]: ../devtools-guide-chromium/remote-debugging/windows.md "Get Started with Remote Debugging Windows 10 Devices | Microsoft Docs"  
[DevToolsGuideDeviceModeTestingOtherBrowsers]: ../devtools-guide-chromium/device-mode/testing-other-browsers.md "Emulate and test other browsers | Microsoft Docs"  
[DevtoolsProgressiveWebApps]: ../devtools-guide-chromium/progressive-web-apps/index.md "Debug Progressive Web Apps | Microsoft Docs"  
[PwaChromiumMicrosoftStore]: ./microsoft-store.md "Publish your Progressive Web App to the Microsoft Store | Microsoft Docs"

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

[AaronGustafsonNotebookPwaQa]: https://www.aaron-gustafson.com/notebook/pwa-qa "PWA Q&A"  

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

[CloudfourThinksProgressiveRoadmapYourWebApp]: https://cloudfour.com/thinks/a-progressive-roadmap-for-your-progressive-web-app "A Progressive Roadmap for your Progressive Web App"  

[Davrous20191018MythBustingPwasNewEdgeEdition]: https://www.davrous.com/2019/10/18/myth-busting-pwas-the-new-edge-edition "Myth Busting PWAs – The New Edge Edition"  

[Fberriman20170626NamingProgressiveWebApps]: https://fberriman.com/2017/06/26/naming-progressive-web-apps "Naming Progressive Web Apps"  

[JoretegBlogBettingWeb]: https://joreteg.com/blog/betting-on-the-web "Betting on the Web"  

[MediumWebEdgeOfflinePostsProgressiveWebApps]: https://medium.com/web-on-the-edge/offline-posts-with-progressive-web-apps-fc2dc4ad895 "Offline POSTs with Progressive Web Apps"  

[PWABuilder]: https://www.pwabuilder.com "PWABuilder"  

[Smashingmagazine201907ProgressiveWebAppFrameworkPart1]: https://www.smashingmagazine.com/2019/07/progressive-web-application-pwa-framework-part-1 "Designing And Building A Progressive Web Application Without A Framework (Part 1)"  

[Smashingmagazine201907ProgressiveWebAppFrameworkPart2]: https://www.smashingmagazine.com/2019/07/progressive-web-application-pwa-framework-part-2 "Designing And Building A Progressive Web Application Without A Framework (Part 2)"  

[Smashingmagazine201907ProgressiveWebAppFrameworkPart3]: https://www.smashingmagazine.com/2019/07/progressive-web-application-pwa-framework-part-3 "Designing And Building A Progressive Web Application Without A Framework (Part 3)"  

[WebDevGoodPwaChecklist]: https://web.dev/pwa-checklist "What makes a good Progressive Web App? | web.dev"  

[Webhint]: https://webhint.io "webhint"  

[WikiDeepLinking]: https://en.wikipedia.org/wiki/Deep_linking "Deep linking - Wikipedia"  
[WikiHttps]: https://en.wikipedia.org/wiki/HTTPS "HTTPS - Wikipedia"  
[WikiResponsiveWebDesign]: https://en.wikipedia.org/wiki/Responsive_web_design "Responsive web design - Wikipedia"  
