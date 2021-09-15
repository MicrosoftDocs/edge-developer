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

**TODO**: most of the content here has been merged into the overview page. What's left is a few best-practices. Not sure where these should go.

## What makes a Progressive Web App  

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

<!-- links -->  

[DevtoolsRemoteDebuggingIndex]: ../../devtools-guide-chromium/remote-debugging/index.md "Get started with remote debugging Android devices | Microsoft Docs"  
[DevtoolsRemoteDebuggingWindows]: ../../devtools-guide-chromium/remote-debugging/windows.md "Get Started with Remote Debugging Windows 10 Devices | Microsoft Docs"  
[DevToolsGuideDeviceModeTestingOtherBrowsers]: ../../devtools-guide-chromium/device-mode/testing-other-browsers.md "Emulate and test other browsers | Microsoft Docs"  
[DevtoolsProgressiveWebApps]: ../../devtools-guide-chromium/progressive-web-apps/index.md "Debug Progressive Web Apps | Microsoft Docs"  
[PwaChromiumMicrosoftStore]: ../how-to/microsoft-store.md "Publish your Progressive Web App to the Microsoft Store | Microsoft Docs"
[PwaOfflineExperience]: ../how-to/offline.md "Offline and network connectivity support in Progressive Web Apps | Microsoft Docs"
[MicrosoftDeveloperEdgeToolsRemote]: https://developer.microsoft.com/microsoft-edge/tools/remote "Instant testing"  
[MicrosoftDeveloperStore]: https://developer.microsoft.com/store "Microsoft Developer Store"  
[MDNCrossBrowserTesting]: https://developer.mozilla.org/docs/Learn/Tools_and_testing/Cross_browser_testing "Cross browser testing | MDN"  
[MDNCssFlexibleBoxLayout]: https://developer.mozilla.org/docs/Web/CSS/CSS_Flexible_Box_Layout "CSS Flexible Box Layout | MDN"  
[MDNCssGridLayout]: https://developer.mozilla.org/docs/Web/CSS/CSS_Grid_Layout "CSS Grid Layout | MDN"  
[MDNMediaQueries]: https://developer.mozilla.org/docs/Web/CSS/Media_Queries "Media queries | MDN"  
[MDNResponsiveImages]: https://developer.mozilla.org/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images "Responsive images | MDN"  
[Webhint]: https://webhint.io "webhint"  
[WikiDeepLinking]: https://en.wikipedia.org/wiki/Deep_linking "Deep linking - Wikipedia"  
[WikiResponsiveWebDesign]: https://en.wikipedia.org/wiki/Responsive_web_design "Responsive web design - Wikipedia"  
