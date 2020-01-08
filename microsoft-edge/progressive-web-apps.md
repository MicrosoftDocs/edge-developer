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

By building or converting your existing site to a PWA, you can better engage your existing audience with push notifications, app like integration and offline support. At the same time, you can continue building your audience on the open web, as users discover your PWA through search and link-sharing. Best of all, you can update your app by simply updating your web server code.

## PWAs on Microsoft Edge (Chromium)

When you build a *Progressive Web App* targeting web standard APIs, your application can be deployed across platforms and devices and take advantage of the device specific capabilites as available. PWAs in Microsoft Edge (Chromium) are completely standards based from a web platform perspective and enable users to install the app directly from within the browser without the need for Store based deployment or registration. Desktop PWAs are supported on any of the platforms Microsoft Edge (Chromium) is available, including Windows 7, Windows 10 and Mac OS.  Other benefits include:
   - Applications can be installed directly from within the browser via the "Install" icon in the navigation bar
   [Install application flyout and icon](./progressive-web-apps-chromium/media/Install_PWA.png)
   - Applications can also be installed, run and managed from the "Settings"->"Apps" menu
   [Application menu items under settings](./progressive-web-apps-chromium/media/App_menus.png)
   - Web Notifications are integrated into the Windows notification system
   - Shared cookie store with the browser profile that installed the app
   - Access to other browser features via the "..." menu including certificate validation, site permissions, tracking protection and browser extensions
   - Full access to Microsoft [Edge DevTools](./devtools-guide-chromium/progressive-web-apps) for debugging your app 

> [!Important] To tailor PWAs specifically for Windows 10 that call WinRT APIs from JavaScript, see the documentation specific to the EdgeHTML PWA features here: [Progressive Web Apps (EdgeHTML)](./progressive-web-apps-edgehtml). You can learn about testing your PWA on Windows 10, and distributing it in the Microsoft Store.


## Requirements

To run as a PWA, your server-hosted web app will at minimum require:

  - [X] [**HTTPS**](https://en.wikipedia.org/wiki/HTTPS). Protect your users by providing a secure connection for server/app communication. Service workers and other PWA technologies will only work with web resources served over a secure connection (or from *localhost* for debugging purposes). 
  
  - [X] [**Service workers**](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API). Use *service worker* threads to act as network proxies between your server and client app in order to provide offline support, resource caching, push notifications, background data sync, and  page load perf optimizations.

  - [X] [**Web app manifest**](https://developer.mozilla.org/en-US/docs/Web/Manifest). Provide a JSON-based metadata file describing key information about your web app (such as icons, language, and URL entry point) so that Windows 10 and other host platforms can provide your PWA users with an installable, native app-like experience.

To be a *great* PWA, your app will also need:

  - [X] [**Cross-browser compatibility**](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing). Ensure your PWA works by [testing](https://developer.microsoft.com/en-us/microsoft-edge/tools/remote/) in different browsers and environments. 
  
  - [X] [**Responsive design**](https://en.wikipedia.org/wiki/Responsive_web_design). Employ fluid layouts and flexible images with CSS [grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) and/or [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout), [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries), and [responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) to adapt your UX to your user's device. Use device [emulation tools](./devtools-guide/emulation.md) from your browser to test locally, or set up a [remote debugging session](./devtools-protocol/0.1/clients.md#microsoft-edge-devtools-preview) to test directly on a target device.
  
  - [X] [**Deep linking**](https://en.wikipedia.org/wiki/Deep_linking). Route each page of your site to a unique URL so existing users can help you engage an even broader audience through social media sharing.

  - [X] [**Best practices**](https://webhint.io/). Use code quality tools like the [Webhint](https://webhint.io/) linter to optimize the efficiency, robustness, safety, and accessibility of your app.

To submit your *Progressive Web App* to the [Microsoft Store](https://developer.microsoft.com/en-us/store), you'll need:

 - [X] A [Microsoft developer account](https://docs.microsoft.com/en-us/windows/uwp/publish/opening-a-developer-account)
 - [X] Completed [steps for publishing a Windows app](https://docs.microsoft.com/en-us/windows/uwp/publish/)

Check out [*PWAs in the Microsoft Store*](./progressive-web-apps-chromium/microsoft-store.md) for further details.

## Current availability

Browser engine support for *Progressive Web Apps* calls for a number of architectural components, the most significant being the networking infrastructure underlying the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). 

For the upcoming Microsoft Edge (Chromium) release in 2020, the browser platform itself has full support for these features that will work across devices where Microsoft Edge (Chromium) browser is supported. Microsoft Edge (Chromium) is currently in it's final beta with a generally available stable release planned for January 2020 with broad distribution following. [More information on Microsoft Edge availability](https://www.microsoftedge.com)

