---
title: Overview of Progressive Web Apps (PWAs)
description: Progressive Web Apps (PWAs) runs natively on Windows 10 or later.  Here's everything you need to know about PWAs, as a web developer.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 11/17/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: pwa
keywords: progressive web apps, PWA, Edge, JavaScript, UWP, Microsoft Store
---
# Overview of Progressive Web Apps (PWAs)

Progressive Web Apps (PWAs) provide access to open web technologies, to provide cross-platform interoperability.  PWAs provide your users with an app-like experience that's customized for their devices.

PWAs are websites that are **[progressively enhanced](https://alistapart.com/article/understandingprogressiveenhancement)** to function like installed, native apps on supporting platforms, while functioning like regular websites on other browsers.

The qualities of a PWA combine **the best of the web and compiled apps**. PWAs run in browsers, like websites.  But PWAs also have access to app features; for example:
*  A PWA can still work when the device is offline.
*  PWAs can be installed on the operating system.
*  PWAs support push notifications and periodic updates.
*  PWAs can access hardware features.

When installed, PWAs are **just like other apps on Windows**.  For example:
*  A PWA can be added to the Start Menu.
*  A PWA can be pinned to the Taskbar.
*  PWAs can handle files.
*  PWAs can run when the user signs in.
*  PWAs **can be submitted to the Microsoft Store** where millions of Windows users can discover and easily install them alongside other Windows apps.

PWAs have the **same reach as websites**:
*  PWAs can be indexed by search engines.
*  A PWA can be linked to.
*  A PWA can work on all devices, from a single codebase.

PWAs have a **much lower cross-platform development cost** than compiled apps that require a specific codebase for each platform, such as a separate codebase for Android, for iOS, and for each desktop operating system.


<!-- ====================================================================== -->
## Characteristics of a Progressive Web App (PWA)

A fully capable Progressive Web App provides the following advantages to the user.

| Characteristic | Description |
| --- | --- |
| [Discoverable](https://developer.mozilla.org/docs/Web/Apps/Progressive/Advantages#Discoverable) | The app is discoverable from web search results and supporting app stores. |
| [Installable](https://developer.mozilla.org/docs/Web/Apps/Progressive/Advantages#Installable) | Pin and launch the app from the home screen, Start Menu, and Taskbar. |
| [Re-engageable](https://developer.mozilla.org/docs/Web/Apps/Progressive/Advantages#Re-engageable) | The app can receive push notifications, even when the app isn't active. |
| [Network-independent](https://developer.mozilla.org/docs/Web/Apps/Progressive/Advantages#Network_independent) | The app works offline and in low-network conditions. |
| [Progressive](https://developer.mozilla.org/docs/Web/Apps/Progressive/Advantages#Progressive) | The user experience of the app scales up or down with device capabilities. |
| [Safe](https://developer.mozilla.org/docs/Web/Apps/Progressive/Advantages#Safe) | The app provides a secure HTTPS endpoint and other user safeguards. |
| [Responsive](https://developer.mozilla.org/Apps/Progressive/Advantages#Responsive) | The app adapts to the user's screen size or orientation and input method. |
| [Linkable](https://developer.mozilla.org/Apps/Progressive/Advantages#Linkable) | Share and launch the app from a standard link. |


<!-- ====================================================================== -->
## PWAs on desktop

Progressive Web Apps (PWAs) aren't limited to displaying websites on mobile home screens. PWAs are based on standard, cross-browser, web technologies that allow them to be installed and to run in many different environments.

In recent years, desktop browsing has grown, and desktop computing continues to be the primary productivity environment for many users.  PWAs can provide fully tailored, installable experiences on a desktop operating system that inherit the benefits of that environment.  Yet PWAs still work across platform from the same code and servers that power your in-browser and mobile experiences.

Microsoft Edge and Windows have added many new web capabilities and features.  These new web development capabilities provide great opportunities to build immersive experiences that deeply integrate with the desktop operating system.  Using only web technologies ensures that your app will work on other browsers, operating systems, and devices.

You might not have to use proprietary technologies at all, because the web has developed capabilities to deal with many aspects of apps, such as:
*  File systems
*  Video
*  Audio
*  High-performance code
*  Databases
*  USB
*  Bluetooth

With a PWA, you can use a single codebase that's shared between your website, mobile app, and desktop app (across operating systems).  By using a single codebase that's shared across platforms, you cut down on development costs.  Your app can also be published on the Microsoft Store, making it more familiar and trustworthy for Windows users to discover and install.

Learn more about [how PWAs integrate on Windows](ux.md).


<!-- ====================================================================== -->
## Bridging the gap between web and desktop apps

Microsoft Edge has many new capabilities built in that can make your web app feel more integrated on desktop platforms.  These capabilities provide more engaging experiences across web and desktop platforms.  With Progressive Web Apps (PWAs), you can:
*   Handle files.
*   Share content with other apps.
*   Access the clipboard.
*   Sync data and fetch resources in the background.
*   Access device hardware such as Bluetooth and USB.
*   Store content in databases.
*   Take advantage of hardware accelerated graphics.
*   Use CSS layouts, animations, and filters to create advanced designs.
*   Run near-compiled performance code with WebAssembly.

There isn't much you can't do today with web technologies.  Thanks to Microsoft Edge, PWAs on desktop can take full advantage of web technologies to deliver what users expect desktop apps to do.

Check out [Myth Busting PWAs](https://www.davrous.com/2019/10/18/myth-busting-pwas-the-new-edge-edition) for more information about what PWAs can do.


<!-- ====================================================================== -->
## The Microsoft Store

Because Progressive Web Apps (PWAs) are just like other apps in the [Microsoft Store](https://www.microsoft.com/store/apps/windows), users can fully engage with them—from discovery, to installation, to execution—without<!-- em dashes--> ever opening the browser.

The Microsoft Store app is the most used app on PCs.  The Microsoft Store provides a trustworthy and familiar experience for your users to install your app.  Additionally, you can view detailed usage statistics and charts that let you know how your apps in the Microsoft Store are doing.

Learn how to [publish your PWA to the Microsoft Store](how-to/microsoft-store.md).


<!-- ====================================================================== -->
## Success stories

Using Progressive Web App (PWA) technologies is a great way to make your app **safe**, **discoverable**, **linkable**, **easy to install** and update, **responsive**, and **network independent**.  Many businesses have had success with PWAs.  For example:

*   The Starbucks PWA has increased daily active users twice.  Orders on desktop are nearly the same rate as mobile ([source](https://twitter.com/davidbrunelle/status/993960071406080000)).
*   Trivago saw an increase of 150% for people who add its PWA to the home screen.  The increased engagement led to a 97% increase in clockouts to hotel offers ([source](https://www.thinkwithgoogle.com/intl/en-gb/marketing-strategies/app-and-mobile/trivago-embrace-progressive-web-apps-as-the-future-of-mobile/)).
*   Tinder cut load times from 11.91 seconds to 4.68 seconds with their PWA.  The app is 90% smaller than the compiled Android app ([source](https://medium.com/@addyosmani/a-tinder-progressive-web-app-performance-case-study-78919d98ece0)).

Read more success stories on the [PWA Stats](https://www.pwastats.com/) website.


<!-- ====================================================================== -->
## See also

*  [Progressive Web Apps](https://developer.mozilla.org/Apps/Progressive) at MDN Web Docs.
*  [Microsoft Build 2020 PWA session](https://www.youtube.com/watch?v=y4p_QHZtMKM)
*  [Myth Busting PWAs](https://www.davrous.com/2019/10/18/myth-busting-pwas-the-new-edge-edition)
*  [A Progressive Roadmap for your Progressive Web App](https://cloudfour.com/thinks/a-progressive-roadmap-for-your-progressive-web-app)
*  [Offline POSTs with Progressive Web Apps](https://medium.com/web-on-the-edge/offline-posts-with-progressive-web-apps-fc2dc4ad895)
*  [PWA Q&A](https://www.aaron-gustafson.com/notebook/pwa-qa)
*  [Betting on the Web](https://joreteg.com/blog/betting-on-the-web)
*  [Naming Progressive Web Apps](https://fberriman.com/2017/06/26/naming-progressive-web-apps)
*  [Designing And Building A Progressive Web App Without A Framework (Part 1)](https://www.smashingmagazine.com/2019/07/progressive-web-application-pwa-framework-part-1)
*  [Designing And Building A Progressive Web App Without A Framework (Part 2)](https://www.smashingmagazine.com/2019/07/progressive-web-application-pwa-framework-part-2)
*  [Designing And Building A Progressive Web App Without A Framework (Part 3)](https://www.smashingmagazine.com/2019/07/progressive-web-application-pwa-framework-part-3)
*  [What makes a good Progressive Web App?](https://web.dev/pwa-checklist)
