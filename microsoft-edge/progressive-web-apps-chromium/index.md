---
title: Overview of Progressive Web Apps (PWAs)
description: Progressive Web Apps (PWAs) run natively on Windows 10 or later.  Here's everything you need to know about PWAs, as a web developer.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: pwa
ms.date: 11/22/2022
---
# Overview of Progressive Web Apps (PWAs)

Progressive Web Apps (PWAs) are applications that you build by using web technologies, and that can be installed and can run on all devices, from just one codebase.

PWAs provide native-like experiences to your users on supporting devices. They adapt to the capabilities supported by each device and they can also run in web browsers, like websites.

To start building a PWA, see [Get started with Progressive Web Apps](./how-to/index.md).


<!-- ====================================================================== -->
## PWA benefits

#### Native-like experiences

When installed on a device, PWAs function just like other apps. For example:

*  PWAs have their own application icons that can be added to the Start menu or the Taskbar.
*  PWAs can be launched automatically when an associated file type is opened.
*  PWAs can run when the user signs in.
*  PWAs can be submitted to application stores like the Microsoft Store.

#### Advanced capabilities

PWAs also have access to advanced capabilities. For example:

*  PWAs can continue working when the device is offline.
*  PWAs support push notifications.
*  PWAs can perform periodic updates even when the application is not running.
*  PWAs can access hardware features.

#### Web-related advantages

Finally, PWAs can run in web browsers, just like websites. 

*  PWAs can be indexed by search engines.
*  PWAs can be shared and launched from a standard web link.
*  PWAs are safe for users by using secure HTTPS endpoints and other user safeguards.
*  PWAs adapt to the the user's screen size or orientation, and input method.
*  PWAs can use advanced web APIs such as WebBluetooth, WebUSB, WebPayment, WebAuthn, or WebAssembly.

#### Lower development cost

PWAs have a **much lower cross-platform development cost** than compiled apps that require a specific codebase for each platform, such as a separate codebase for Android, for iOS, and for each desktop operating system.

With a PWA, you can use a single codebase that's shared between your website, mobile app, and desktop app (across operating systems).


<!-- ====================================================================== -->
## Cross-device compatibility

Progressive Web Apps (PWAs) are built using HTML, CSS, and JavaScript code that's hosted on web servers and that runs in web browser engines. They can either be used directly in a web browser, like a website, or installed on a device from an app store, or by using the app installation feature of a supporting browser. To learn more about installing PWAs in Microsoft Edge, see [Installing a PWA](./ux.md#installing-a-pwa).

The user experience of a PWA scales up or down with device capabilities. In particular, on Windows with Microsoft Edge, you can build immersive experiences that deeply integrate with the operating system, and using only web technologies ensures that your app will work on other browsers, operating systems, and devices.

Desktop computing continues to be the primary productivity environment for many users.  PWAs can provide fully tailored, installable experiences on a desktop operating system that inherit the benefits of that environment.  Yet PWAs can also be installed on mobile devices, or used directly in web browsers.


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
