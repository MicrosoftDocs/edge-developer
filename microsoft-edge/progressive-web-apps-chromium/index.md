---
description: Progressive Web Apps run natively on Windows 10 or later.  Here is everything you need to know as a web developer.
title: Overview of Progressive Web Apps (PWAs)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/10/2021
ms.topic: article
ms.prod: microsoft-edge
ms.technology: pwa
keywords: progressive web apps, PWA, Edge, JavaScript, UWP, Microsoft Store
---
# Overview of Progressive Web Apps (PWAs)

<!-- preserve trailing spaces -->

**[Progressive Web Apps](https://developer.mozilla.org/Apps/Progressive)** (PWAs) provide access to open web technologies for cross-platform interoperability and provide your users with an app-like experience customized for their devices.

PWAs are websites that are **[progressively enhanced](https://alistapart.com/article/understandingprogressiveenhancement)** to function like installed apps on supporting platforms, and like regular web sites on other browsers.

The qualities of a PWA combine **the best of the web and compiled apps**. PWAs run in browsers, like websites, but have access to app features like the ability to work offline, be installed on the operating system, support push notifications and periodic updates, access hardware features, and more.

When installed, **PWAs are just like other apps on Windows**. They can be added to the Start Menu, pinned to the Taskbar, handle files, run on user login, and more.

PWAs can also be **submitted to the Microsoft Store** where millions of Windows users can discover and easily install them alongside other Windows apps.


<!-- ====================================================================== -->
## Characteristics of a PWA

PWAs have the same reach as websites: they can be indexed by search engines, can be linked to, and work on all devices from the same codebase. As such they have a much lower development cost than compiled apps that require a specific codebase for Android, iOS, and various desktop operating systems.

<!--
In the below table, keep two trailing spaces after each image line and after each heading line, to keep card elements tight but not concatenated.
Similar table: [Introduction to Microsoft Edge WebView2](..\webview2\index.md#webview2-benefits)
-->

:::row:::
    :::column:::
        :::image type="icon" source="./media/i_search-small.png":::  
        **[Discoverable](https://developer.mozilla.org/docs/Web/Apps/Progressive/Advantages#Discoverable)**  
        From web search results and supporting app stores
    :::column-end:::
    :::column:::
        :::image type="icon" source="./media/i_package-small.png":::  
        **[Installable](https://developer.mozilla.org/docs/Web/Apps/Progressive/Advantages#Installable)**  
        Pin and launch from the home screen, Start Menu, Taskbar, and so on
    :::column-end:::
    :::column:::
        :::image type="icon" source="./media/i_push-notification-small.png":::  
        **[Re-engageable](https://developer.mozilla.org/docs/Web/Apps/Progressive/Advantages#Re-engageable)**  
        Send push notifications, even when the app is not active
    :::column-end:::
:::row-end:::
:::row:::
    :::column:::
        :::image type="icon" source="./media/i_offline-small.png":::  
        **[Network Independent](https://developer.mozilla.org/docs/Web/Apps/Progressive/Advantages#Network_independent)**  
        Works offline and in low-network conditions
    :::column-end:::
    :::column:::
        :::image type="icon" source="./media/i_progressive-small.png":::  
        **[Progressive](https://developer.mozilla.org/docs/Web/Apps/Progressive/Advantages#Progressive)**  
        Experience scales up (or down) with device capabilities
    :::column-end:::
    :::column:::
        :::image type="icon" source="./media/i_security-small.png":::  
        **[Safe](https://developer.mozilla.org/docs/Web/Apps/Progressive/Advantages#Safe)**  
        Provides a secure HTTPS endpoint and other user safeguards
    :::column-end:::
:::row-end:::
:::row:::
    :::column:::
        :::image type="icon" source="./media/i_responsive-small.png":::  
        **[Responsive](https://developer.mozilla.org/Apps/Progressive/Advantages#Responsive)**  
        Adapts to the user's screen size or orientation and input method
    :::column-end:::
    :::column:::
        :::image type="icon" source="./media/i_link-small.png":::  
        **[Linkable](https://developer.mozilla.org/Apps/Progressive/Advantages#Linkable)**  
        Share and launch from a standard hyperlink
    :::column-end:::
    :::column:::
    :::column-end:::
:::row-end:::

<!-- In the above table, keep two trailing spaces after each image line and after each heading line, to keep card elements tight but not concatenated. -->


<!-- ====================================================================== -->
## PWAs on desktop

PWAs are not limited to displaying websites on mobile home screens. PWAs are based on standard, cross-browser, web technologies that allow them to be installed and to run in many different environments.

In recent years, desktop browsing has grown, and desktop computing continues to be the primary productivity environment for many users. Fortunately, PWAs can provide fully tailored, installable experiences on a desktop operating system that inherit the benefits of that environment, while still working across platform from the same code and servers that power your in-browser and mobile experiences.

With many new web capabilities and new features in Microsoft Edge and Windows, there are great opportunities to build immersive experiences that deeply integrate with the desktop operating system. Only using web technologies also ensures that your app will work in other browsers, operating systems and devices.

You might not have to use proprietary technologies at all as the web has grown [capabilities](#bridging-the-gap-between-web-and-desktop-apps) to deal with file systems, video, audio, high-performing code, databases, USB, Bluetooth, and more.

With a shared codebase between your website, mobile app, and desktop app (across operating systems) you cut down on development cost. Your app can also be published on the [Microsoft Store](#the-microsoft-store), making it more familiar and trustworthy for Windows users to discover and install.

Learn more about [how PWAs integrate on Windows](./ux.md).


<!-- ====================================================================== -->
## Bridging the gap between web and desktop apps

There are many new web capabilities built-in to Microsoft Edge that can make your app feel more integrated on Desktop and offer your users with engaging experiences.

With you PWAs, you can:

*   Handle files.
*   Share content with other apps.
*   Access the clipboard.
*   Sync data and fetch resources in the background.
*   Access device hardware such as Bluetooth and USB.
*   Store content in databases.
*   Take advantage of hardware accelerated graphics.
*   Use CSS layouts, animations, and filters to create advanced designs.
*   Run near-compiled performance code with WebAssembly.

There isn't much you can't do today with Web technologies, and thanks to Microsoft Edge, PWAs on desktop can take full advantage of this to deliver what users expect desktop apps to do.

Check out [Myth Busting PWAs](https://www.davrous.com/2019/10/18/myth-busting-pwas-the-new-edge-edition) for more information about what PWAs can do.


<!-- ====================================================================== -->
## The Microsoft Store

Because PWAs are just like other apps in the [Microsoft Store](https://www.microsoft.com/store/apps/windows), users can fully engage with them, from discovery, to installation, to execution, without ever opening the browser.

As the most used app on PCs, the Microsoft Store provides a trustworthy and familiar experience for your users to install your app. Additionally, you can view detailed usage statistics and charts that let you know how your apps in the Microsoft Store are doing.

Learn how to [publish your PWA to the Microsoft Store](./how-to/microsoft-store.md).


<!-- ====================================================================== -->
## Success stories

Using PWA technologies is a great way to make your app **safe**, **discoverable**, **linkable**, **easy to install** and update, **responsive**, and **network independent**. Many businesses use PWAs and have had success.

*   The Starbucks PWA has increased daily active users twice and orders on desktop are nearly the same rate as mobile ([source](https://twitter.com/davidbrunelle/status/993960071406080000)).
*   Trivago saw an increase of 150% for people who add its PWA to the home screen and the increased engagement led to a 97% increase in clickouts to hotel offers ([source](https://www.thinkwithgoogle.com/intl/en-gb/marketing-strategies/app-and-mobile/trivago-embrace-progressive-web-apps-as-the-future-of-mobile/)).
*   Tinder cut load times from 11.91 seconds to 4.68 seconds with their PWA and the app is 90% smaller than the compiled Android app ([source](https://medium.com/@addyosmani/a-tinder-progressive-web-app-performance-case-study-78919d98ece0)).

Read more success stories on the [PWA Stats](https://www.pwastats.com/) website.


<!-- ====================================================================== -->
## See also

*   [Microsoft Build 2020 PWA session](https://www.youtube.com/watch?v=y4p_QHZtMKM)
*   [Myth Busting PWAs](https://www.davrous.com/2019/10/18/myth-busting-pwas-the-new-edge-edition)
*   [A Progressive Roadmap for your Progressive Web App](https://cloudfour.com/thinks/a-progressive-roadmap-for-your-progressive-web-app)
*   [Offline POSTs with Progressive Web Apps](https://medium.com/web-on-the-edge/offline-posts-with-progressive-web-apps-fc2dc4ad895)
*   [PWA Q&A](https://www.aaron-gustafson.com/notebook/pwa-qa)
*   [Betting on the Web](https://joreteg.com/blog/betting-on-the-web)
*   [Naming Progressive Web Apps](https://fberriman.com/2017/06/26/naming-progressive-web-apps)
*   [Designing And Building A Progressive Web App Without A Framework (Part 1)](https://www.smashingmagazine.com/2019/07/progressive-web-application-pwa-framework-part-1)
*   [Designing And Building A Progressive Web App Without A Framework (Part 2)](https://www.smashingmagazine.com/2019/07/progressive-web-application-pwa-framework-part-2)
*   [Designing And Building A Progressive Web App Without A Framework (Part 3)](https://www.smashingmagazine.com/2019/07/progressive-web-application-pwa-framework-part-3)
*   [What makes a good Progressive Web App?](https://web.dev/pwa-checklist)


<!-- ====================================================================== -->
<!-- Links -->
