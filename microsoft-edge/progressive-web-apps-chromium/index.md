---
description: Progressive Web Apps run on Windows 10. Here is everything you need to know as a web developer.
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

**[Progressive Web Apps][MDNApps]** (PWAs) provide access to open web technologies for cross-platform interoperability and provide your users with an app-like experience customized for their devices.

PWAs are websites that are **[progressively enhanced][AListApartUnderstandingProgressiveEnhancement]** to function like installed apps on supporting platforms, and like regular web sites on other browsers.

The qualities of a PWA combine **the best of the web and compiled apps**. PWAs run in browsers, like websites, but have access to app features like the ability to work offline, be installed on the operating system, support push notifications and periodic updates, access hardware features, and more.

When installed, **PWAs are just like other apps on Windows**. They can be added to the Start Menu, pinned to the Taskbar, handle files, run on user login, and more.

PWAs can also be **submitted to the Microsoft Store** where millions of Windows users can discover and easily install them alongside other Windows apps.


<!-- ====================================================================== -->
## Characteristics of a PWA

PWAs have the same reach as websites: they can be indexed by search engines, can be linked to, and work on all devices from the same codebase. As such they have a much lower development cost than compiled apps that require a specific codebase for Android, iOS, and various desktop operating systems.

<!-- in the below table, keep two trailing spaces after each image line's ::: to keep card elements tight but not concat'd -->

:::row:::
    :::column:::
        :::image type="icon" source="./media/i_search-small.png":::  
        **[Discoverable][MDNPwaAdvantagesDiscoverable]**  
        From web search results and supporting app stores
    :::column-end:::
    :::column:::
        :::image type="icon" source="./media/i_package-small.png":::  
        **[Installable][MDNPwaAdvantagesInstallable]**  
        Pin and launch from the home screen, Start Menu, Taskbar, and so on
    :::column-end:::
    :::column:::
        :::image type="icon" source="./media/i_push-notification-small.png":::  
        **[Re-engageable][MDNPwaAdvantagesReEngageable]**  
        Send push notifications, even when the app is not active
    :::column-end:::
:::row-end:::
:::row:::
    :::column:::
        :::image type="icon" source="./media/i_offline-small.png":::  
        **[Network Independent][MDNPwaAdvantagesNetworkIndependent]**  
        Works offline and in low-network conditions
    :::column-end:::
    :::column:::
        :::image type="icon" source="./media/i_progressive-small.png":::  
        **[Progressive][MDNPwaAdvantagesProgressive]**  
        Experience scales up (or down) with device capabilities
    :::column-end:::
    :::column:::
        :::image type="icon" source="./media/i_security-small.png":::  
        **[Safe][MDNPwaAdvantagesSafe]**  
        Provides a secure HTTPS endpoint and other user safeguards
    :::column-end:::
:::row-end:::
:::row:::
    :::column:::
        :::image type="icon" source="./media/i_responsive-small.png":::  
        **[Responsive][MDNPwaAdvantagesResponsive]**  
        Adapts to the user's screen size or orientation and input method
    :::column-end:::
    :::column:::
        :::image type="icon" source="./media/i_link-small.png":::  
        **[Linkable][MDNPwaAdvantagesLinkable]**  
        Share and launch from a standard hyperlink
    :::column-end:::
    :::column:::
    :::column-end:::
:::row-end:::


<!-- ====================================================================== -->
## PWAs on desktop

PWAs are not limited to displaying websites on mobile home screens. PWAs are based on standard, cross-browser, web technologies that allow them to be installed and to run in many different environments.

In recent years, desktop browsing has grown, and desktop computing continues to be the primary productivity environment for many users. Fortunately, PWAs can provide fully tailored, installable experiences on a desktop operating system that inherit the benefits of that environment, while still working across platform from the same code and servers that power your in-browser and mobile experiences.

With many new web capabilities and new features in Microsoft Edge and Windows, there are great opportunities to build immersive experiences that deeply integrate with the desktop operating system. Only using web technologies also ensures that your app will work in other browsers, operating systems and devices.

You might not have to use proprietary technologies at all as the web has grown [capabilities](#bridging-the-gap-between-web-and-desktop-apps) to deal with file systems, video, audio, high-performing code, databases, USB, Bluetooth, and more.

With a shared codebase between your website, mobile app, and desktop app (across operating systems) you cut down on development cost. Your app can also be published on the [Microsoft Store](#the-microsoft-store), making it more familiar and trustworthy for Windows users to discover and install.

Learn more about [how PWAs integrate on Windows][PwaWindowsUx].


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

Check out [Myth Busting PWAs][Davrous20191018MythBustingPwasNewEdgeEdition] for more information about what PWAs can do.


<!-- ====================================================================== -->
## The Microsoft Store

Because PWAs are just like other apps in the [Microsoft Store][PwaMicrosoftStore], users can fully engage with them, from discovery, to installation, to execution, without ever opening the browser.

As the most used app on PCs, the Microsoft Store provides a trustworthy and familiar experience for your users to install your app. Additionally, you can view detailed usage statistics and charts that let you know how your apps in the Microsoft Store are doing.

Learn how to [publish your PWA to the Microsoft Store][PwaPublishToStore].


<!-- ====================================================================== -->
## Success stories

Using PWA technologies is a great way to make your app **safe**, **discoverable**, **linkable**, **easy to install** and update, **responsive**, and **network independent**. Many businesses use PWAs and have had success.

*   The Starbucks PWA has increased daily active users twice and orders on desktop are nearly the same rate as mobile ([source][StarbucksSuccessStory]).
*   Trivago saw an increase of 150% for people who add its PWA to the home screen and the increased engagement led to a 97% increase in clickouts to hotel offers ([source][TrivagoSuccessStory]).
*   Tinder cut load times from 11.91 seconds to 4.68 seconds with their PWA and the app is 90% smaller than the compiled Android app ([source][TinderSuccessStory]).

Read more success stories on the [PWA Stats][PwaStats] website.


<!-- ====================================================================== -->
## See also

*   [Microsoft Build 2020 PWA session][BuildVideo]
*   [Myth Busting PWAs][Davrous20191018MythBustingPwasNewEdgeEdition]
*   [A Progressive Roadmap for your Progressive Web App][CloudfourThinksProgressiveRoadmapYourWebApp]
*   [Offline POSTs with Progressive Web Apps][MediumWebEdgeOfflinePostsProgressiveWebApps]
*   [PWA Q&A][AaronGustafsonNotebookPwaQa]
*   [Betting on the Web][JoretegBlogBettingWeb]
*   [Naming Progressive Web Apps][Fberriman20170626NamingProgressiveWebApps]
*   [Designing And Building A Progressive Web App Without A Framework (Part 1)][Smashingmagazine201907ProgressiveWebAppFrameworkPart1]
*   [Designing And Building A Progressive Web App Without A Framework (Part 2)][Smashingmagazine201907ProgressiveWebAppFrameworkPart2]
*   [Designing And Building A Progressive Web App Without A Framework (Part 3)][Smashingmagazine201907ProgressiveWebAppFrameworkPart3]
*   [What makes a good Progressive Web App?][WebDevGoodPwaChecklist]


<!-- ====================================================================== -->
<!-- Links -->
[MDNApps]: https://developer.mozilla.org/Apps/Progressive "Progressive Web Apps | MDN"
[AListApartUnderstandingProgressiveEnhancement]: https://alistapart.com/article/understandingprogressiveenhancement "Understanding Progressive Enhancement - A List Apart"
[PwaStats]: https://www.pwastats.com/ "A community-driven list of stats and news related to Progressive Web Apps"
[StarbucksSuccessStory]: https://twitter.com/davidbrunelle/status/993960071406080000 "David Brunelle | Twitter"
[TrivagoSuccessStory]: https://www.thinkwithgoogle.com/intl/en-gb/marketing-strategies/app-and-mobile/trivago-embrace-progressive-web-apps-as-the-future-of-mobile/  "The next billion users: trivago embrace progressive web apps as the future of mobile | Think With Google"
[TinderSuccessStory]: https://medium.com/@addyosmani/a-tinder-progressive-web-app-performance-case-study-78919d98ece0 "A Tinder Progress Web App Performance Case Study | Medium.com"
[MDNPwaAdvantagesDiscoverable]: https://developer.mozilla.org/docs/Web/Apps/Progressive/Advantages#Discoverable "Discoverable - Progressive web app advantages"
[MDNPwaAdvantagesInstallable]: https://developer.mozilla.org/docs/Web/Apps/Progressive/Advantages#Installable "Installable - Progressive web app advantages"
[MDNPwaAdvantagesLinkable]: https://developer.mozilla.org/Apps/Progressive/Advantages#Linkable "Linkable - Progressive web app advantages"
[MDNPwaAdvantagesNetworkIndependent]: https://developer.mozilla.org/docs/Web/Apps/Progressive/Advantages#Network_independent "Network independent - Progressive web app advantages"
[MDNPwaAdvantagesProgressive]: https://developer.mozilla.org/docs/Web/Apps/Progressive/Advantages#Progressive "Progressive - Progressive web app advantages"
[MDNPwaAdvantagesReEngageable]: https://developer.mozilla.org/docs/Web/Apps/Progressive/Advantages#Re-engageable "Re-engageable - Progressive web app advantages"
[MDNPwaAdvantagesResponsive]: https://developer.mozilla.org/Apps/Progressive/Advantages#Responsive "Responsive - Progressive web app advantages"
[MDNPwaAdvantagesSafe]: https://developer.mozilla.org/docs/Web/Apps/Progressive/Advantages#Safe "Safe - Progressive web app advantages"
[BuildVideo]: https://www.youtube.com/watch?v=y4p_QHZtMKM "PWA video"
[Davrous20191018MythBustingPwasNewEdgeEdition]: https://www.davrous.com/2019/10/18/myth-busting-pwas-the-new-edge-edition "Myth Busting PWAs – The New Edge Edition"
[CloudfourThinksProgressiveRoadmapYourWebApp]: https://cloudfour.com/thinks/a-progressive-roadmap-for-your-progressive-web-app "A Progressive Roadmap for your Progressive Web App"
[MediumWebEdgeOfflinePostsProgressiveWebApps]: https://medium.com/web-on-the-edge/offline-posts-with-progressive-web-apps-fc2dc4ad895 "Offline POSTs with Progressive Web Apps"
[AaronGustafsonNotebookPwaQa]: https://www.aaron-gustafson.com/notebook/pwa-qa "PWA Q&A"
[JoretegBlogBettingWeb]: https://joreteg.com/blog/betting-on-the-web "Betting on the Web"
[Fberriman20170626NamingProgressiveWebApps]: https://fberriman.com/2017/06/26/naming-progressive-web-apps "Naming Progressive Web Apps"
[Smashingmagazine201907ProgressiveWebAppFrameworkPart1]: https://www.smashingmagazine.com/2019/07/progressive-web-application-pwa-framework-part-1 "Designing And Building A Progressive Web Application Without A Framework (Part 1)"
[Smashingmagazine201907ProgressiveWebAppFrameworkPart2]: https://www.smashingmagazine.com/2019/07/progressive-web-application-pwa-framework-part-2 "Designing And Building A Progressive Web Application Without A Framework (Part 2)"
[Smashingmagazine201907ProgressiveWebAppFrameworkPart3]: https://www.smashingmagazine.com/2019/07/progressive-web-application-pwa-framework-part-3 "Designing And Building A Progressive Web Application Without A Framework (Part 3)"
[WebDevGoodPwaChecklist]: https://web.dev/pwa-checklist "What makes a good Progressive Web App? | web.dev"
[PwaMicrosoftStore]: https://www.microsoft.com/store/apps/windows "Windows Apps | Microsoft Store"
[PwaWindowsUx]: ./ux.md "The user experience of PWAs | Microsoft Docs"
[PwaPublishToStore]: ./how-to/microsoft-store.md "Publish your Progressive Web App to the Microsoft Store | Microsoft Docs"
