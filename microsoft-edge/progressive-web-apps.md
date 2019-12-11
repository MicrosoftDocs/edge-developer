---
description: Progressive Web Apps run natively on Windows 10. Here's everything you need to know as a web developer.
title: Progressive Web Apps on Windows
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/19/2018
ms.topic: article
ms.prod: microsoft-edge
ms.technology: pwa
keywords: progressive web apps, PWA, Edge, JavaScript, Windows, UWP, Microsoft Store
---

# Progressive Web Apps on Windows

With [Progressive Web Apps](https://developer.mozilla.org/en-US/Apps/Progressive) (or simply *PWA*s) you dont have to decide between using open web technologies for cross-platform interoperability and providing your users with a native app-like experience customized for their device. That's because PWAs are just websites that are [progressively enhanced](https://alistapart.com/article/understandingprogressiveenhancement) to function like native apps on supporting platforms. The qualities of a PWA combine the best of the web and native apps. 

:::row:::
    :::column:::
        ![Discoverable icon](./progressive-web-apps/media/i_search.png)
        ### [Discoverable](https://developer.mozilla.org/en-US/Apps/Progressive/Advantages#Discoverable)
        From web search results and supporting app stores
    :::column-end:::
    :::column:::
        ![Installable icon](./progressive-web-apps/media/i_package.png)
        ### [Installable](https://developer.mozilla.org/en-US/Apps/Progressive/Advantages#Installable)
        Pin and launch from the home screen
    :::column-end:::
    :::column:::
        ![Re-engageable icon](./progressive-web-apps/media/i_push-notification.png)
        ### [Re-engageable](https://developer.mozilla.org/en-US/Apps/Progressive/Advantages#Re-engageable)
        Send push notifications, even when the app isn't active
    :::column-end:::
    :::column:::
        ![Network Independent icon](./progressive-web-apps/media/i_offline.png)
        ### [Network Independent](https://developer.mozilla.org/en-US/Apps/Progressive/Advantages#Network_independent)
        Works offline and in low-network conditions
    :::column-end:::
:::row-end:::
:::row:::
    :::column:::
        ![Progressive icon](./progressive-web-apps/media/i_progressive.png)
        ### [Progressive](https://developer.mozilla.org/en-US/Apps/Progressive/Advantages#Progressive)
        Experience scales up (or down) with device capabilities
    :::column-end:::
    :::column:::
        ![Safe icon](./progressive-web-apps/media/i_security.png)
        ### [Safe](https://developer.mozilla.org/en-US/docs/Web/Apps/Progressive/Advantages#Progressive#Safe)
        Provides a secure HTTPS endpoint and other user safeguards    
    :::column-end:::
    :::column:::
        ![Responsive icon](./progressive-web-apps/media/i_responsive.png)
        ### [Responsive](https://developer.mozilla.org/en-US/Apps/Progressive/Advantages#Responsive)
        Adapts to the user's screen size / orientation and input method
    :::column-end:::
    :::column:::
        ![Linkable icon](./progressive-web-apps/media/i_link.png)
        ### [Linkable](https://developer.mozilla.org/en-US/Apps/Progressive/Advantages#Linkable)
        Share and launch from a standard hyperlink
    :::column-end:::
:::row-end:::

By building or converting your existing site to a PWA, you can better engage your existing audience with push notifications and offline support. At the same time, you can continue building your audience on the open web, as users discover your PWA through search and link-sharing.

## PWAs on Windows 10 (EdgeHTML)

When you build a *Progressive Web App* to take advantage of Windows 10, you can distribute your PWA through the [Microsoft Store](https://developer.microsoft.com/en-us/store), the entire Windows 10 install base of 600+ million active monthly users is your potential app audience! Applications developed this way run as [Universal Windows Platform](https://docs.microsoft.com/en-us/windows/uwp/get-started/universal-application-platform-guide) apps and have native like access to the WinRT APIs. Note that the web platform rendering your code is EdgeHTML when using the WinRT APIs so be sure to use feature detection before calling any Windows specific APIs to ensure your PWA can still run across platforms where Microsoft Edge (Chromium) PWAs are available. 

[Here's how to get started](./progressive-web-apps/get-started.md) converting your web app to a PWA (EdgeHTML), testing it on Windows 10, and distributing it in the Microsoft Store.


## Requirements

To run as a PWA, your server-hosted web app will at minimum require:

  - [X] [**HTTPS**](https://en.wikipedia.org/wiki/HTTPS). Protect your users by providing a secure connection for server/app communication. Service workers and other PWA technologies will only work with web resources served over a secure connection (or from *localhost* for debugging purposes). 
  
  - [X] [**Service workers**](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API). Use *service worker* threads to act as network proxies between your server and client app in order to provide offline support, resource caching, push notifications, background data sync, and  page load perf optimizations.

  - [X] [**Web app manifest**](https://developer.mozilla.org/en-US/docs/Web/Manifest). Provide a JSON-based metadata file describing key information about your web app (such as icons, language, and URL entry point) so that Windows 10 and other host platforms can provide your PWA users with an installable, native app-like experience. Associating your site with a web app manifest makes it eligible for [automatic inclusion in the Microsoft Store](./progressive-web-apps/microsoft-store.md#automatic-pwa-importing-with-bing) through the Bing indexing service.

To be a *great* PWA, your app will also need:

  - [X] [**Cross-browser compatibility**](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing). Ensure your PWA works by [testing](https://developer.microsoft.com/en-us/microsoft-edge/tools/remote/) in different browsers and environments. On Windows 10, be sure to test your app both in the Microsoft Edge browser and also in its full PWA experience: as an installed, standalone Windows 10 app (powered by the *EdgeHTML* engine). 
  
  - [X] [**Responsive design**](https://en.wikipedia.org/wiki/Responsive_web_design). Employ fluid layouts and flexible images with CSS [grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) and/or [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout), [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries), and [responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) to adapt your UX to your user's device. Use device [emulation tools](./devtools-guide/emulation.md) from your browser to test locally, or set up a [remote debugging session](./devtools-protocol/0.1/clients.md#microsoft-edge-devtools-preview) to test directly on a target device. On Windows 10, PWAs (EdgeHTML) can also be [tailored for form factors](https://docs.microsoft.com/en-us/windows/uwp/design/devices/index) beyond desktop, phone and tablet, including: [Xbox and TV](https://docs.microsoft.com/en-us/windows/uwp/design/devices/designing-for-tv), [Surface Hub](https://developer.microsoft.com/en-us/windows/surfacehub), and [Windows Mixed Reality](https://developer.microsoft.com/en-us/windows/mixed-reality) devices.
  
  - [X] [**Deep linking**](https://en.wikipedia.org/wiki/Deep_linking). Route each page of your site to a unique URL so existing users can help you engage an even broader audience through social media sharing.

  - [X] [**Best practices**](https://webhint.io/). Use code quality tools like the [Webhint](https://webhint.io/) linter to optimize the efficiency, robustness, safety, and accessibility of your app.

To submit your *Progressive Web App* to the [Microsoft Store](https://developer.microsoft.com/en-us/store), you'll need:

 - [X] A [Microsoft developer account](https://docs.microsoft.com/en-us/windows/uwp/publish/opening-a-developer-account)
 - [X] Completed [steps for publishing a Windows app](https://docs.microsoft.com/en-us/windows/uwp/publish/)

In the coming months, existing PWAs on the web meeting [specific criteria](./progressive-web-apps/microsoft-store.md#criteria-for-automatic-submission) will be auto-indexed by the Bing search engine into the Microsoft Store (where developers can directly manage them for their Windows 10 audience).

Check out [*PWAs in the Microsoft Store*](./progressive-web-apps/microsoft-store.md) for further details.

## Current availability

Browser engine support for *Progressive Web Apps* calls for a number of architectural components, the most significant being the networking infrastructure underlying the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). We've been building out PWA support in EdgeHTML for several releases now. 

For the upcoming Microsoft Edge (Chromium) release in 2020, the browser platform itself has full support for these features that work across devices where the Chromium browser is supported. 

For EdgeHTML and Windows, here's the current status of standards-based PWA technologies:

Technology | Purpose | Availability | Usage notes
| - | - | - | -
[Web Application Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest) | Provides app metadata to the host OS for enabling installation and app store promotion. Required for PWAs in the Microsoft Store. | [In development](https://developer.microsoft.com/en-us/microsoft-edge/platform/status/webapplicationmanifest/)  | For now, you can use [PWA Builder](https://www.pwabuilder.com) to generate a W3C-compliant JSON manifest and package your app for various OS platforms. For Windows, *PWA Builder* will translate your JSON manifest into the *.appxmanifest* (XML) format required by Windows 10 apps.
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) | Provides asynchronous networking (requests, reponses) for page resources |[EdgeHTML 14+](https://docs.microsoft.com/en-us/microsoft-edge/dev-guide/whats-new/edgehtml-14) / Build 14393+ | The *Service Worker API* syntax is based on Fetch-based networking APIs. You can also use Fetch API more generally as a modern alternative to *XMLHttpRequest*. 
[Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) | Provides an offline-capable web app model / network proxy, where event-driven scripts run independent of web pages  | [EdgeHTML17](https://docs.microsoft.com/en-us/microsoft-edge/dev-guide) / Build 17133+ | Experimental support (behind *Enable Service Workers* flag) shipped in EdgeHTML 16. On by default in EdgeHTML 17+ builds.
[Cache API](https://developer.mozilla.org/en-US/docs/Web/API/Cache) | Provides a storage mechanism for network request/response pairs | [EdgeHTML17](https://docs.microsoft.com/en-us/microsoft-edge/dev-guide) / Build 17133+ | See *Service Worker API* note above.
[Push API](https://developer.mozilla.org/en-US/docs/Web/API/Push_API) | Enables a service worker to subscribe to push notifications |[EdgeHTML17](https://docs.microsoft.com/en-us/microsoft-edge/dev-guide) / Build 17133+| See *Service Worker API* note above. <br /><br /> Windows 10 apps (including PWAs) require the [Windows Push Notification Service](https://docs.microsoft.com/en-us/windows/uwp/controls-and-patterns/tiles-and-notifications-windows-push-notification-services--wns--overview) (WNS) to deliver push notifications, which supports the W3C *Push API*.
[Notifications API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API) | Enables a service worker to display a system notification to the user upon push message | [EdgeHTML 14+](https://docs.microsoft.com/en-us/microsoft-edge/dev-guide/whats-new/edgehtml-14) / Build 14393+ | *Web Notifications* in EdgeHTML are fully integrated with the Windows 10 [Action Center](https://support.microsoft.com/en-us/help/4028678/windows-change-notification-settings-in-action-center), where users can manage app notifications and set [Quiet Hours](https://support.microsoft.com/en-us/help/4026996/windows-turn-quiet-hours-on-in-windows-10).
[Background Sync API](https://developer.mozilla.org/en-US/docs/Web/API/SyncManager) | Provides an API for notifying a service worker that the user has come back online and for scheduling periodic events to synchronize local data with the server | [In development](https://developer.microsoft.com/en-us/microsoft-edge/platform/status/backgroundsyncapi/) | For now, you can use the native [WinRT BackgroundTask API](https://docs.microsoft.com/en-us/windows/uwp/launch-resume/support-your-app-with-background-tasks) to implement background tasks for your PWA when it runs as a Windows 10 app.

Here's the current status of *Microsoft Store* support for PWAs on Windows 10:

Store submission method | Status | Details
| - | - | -
Manual (developer initiated) | Available | Check out [*PWAs in the Microsoft Store*](./progressive-web-apps/microsoft-store.md) to get started. 
Automatic (auto-indexed with Bing) | Coming soon | We're [currently piloting](https://blogs.windows.com/msedgedev/2018/02/06/welcoming-progressive-web-apps-edge-windows-10/#56z7mJwKsykfbR4I.97) the PWA onboarding process with a limited subset of app partners. In the coming months we'll be welcoming PWAs across the mainstream web to the Microsoft Store. Check out [*Automatic PWA importing with Bing*](./progressive-web-apps/microsoft-store.md#criteria-for-automatic-submission) to learn more about Microsoft Store requirements for auto-generated PWA listings. 
