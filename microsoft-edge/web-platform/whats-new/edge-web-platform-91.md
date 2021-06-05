<!--
description: These highlights focus on notable, developer-consumable updates to the web platform. We are continually working on exciting projects, fundamental improvements, and consumer-facing platform changes and are delighted to share what we are releasing in Edge.
title: What's New to Web Platform (Microsoft Edge 92)
author: MSEdgeTeam
ms.author: kanderson
ms.date: 06/04/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, Web Platform
-->

# What's New to Web Platform (Microsoft Edge 91)  

These highlights focus on notable, developer-consumable updates to the web platform. We are continually working on exciting projects, fundamental improvements, and consumer-facing platform changes and are delighted to share what we are releasing in Edge 91.  

🚢 Edge 91 shipped to Stable audiences on May 27, 2021.  

[Import assertions](https://github.com/tc39/proposal-import-assertions)  and [JSON modules](https://github.com/tc39/proposal-json-modules). These allow developers to import JSON data, such as localized strings, into their JavaScript environments via the same ES module dependency system for JavaScript dependencies. 


## Site Compatibility Changes

<!-- Title: Site Compatibility Changes -->  

*   For standards-compliance, [a change was made for Edge 91](https://chromium.googlesource.com/chromium/src/+/b332c5609ed9caa5979c24a0d1bdea242329258c) to the handling of SameSite=Lax cookies to prevent them from being sent on cross-site subframe navigations. If this change breaks a scenario, the cookie in question will need to be marked SameSite=None. Note: Chrome shipped this change in Chrome v90 while Edge is shipping in v91. 

*   See more impacting changes that are coming to Microsoft Edge, [here](https://docs.microsoft.com/en-us/microsoft-edge/web-platform/site-impacting-changes). 

## Web Standards + Dev Community

<!-- Title: Web Standards + Dev Community -->  

Read up on the web-standards that we actively contribute to and discover how this progress helps the development community. Your feedback on new or proposed standards is welcome via GitHub issues on the relevant repos! We maintain an index of current and past proposals for web standards on our [Microsoft Edge Explainers readme](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/README.md) page. 

*   [Accessible Confirmation of Action](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/Accessibility/ConfirmationOfAction/explainer.md) explainer has been released and proposes a notification API that better solves for use cases where ARIA live regions aren't desirable.  

*   We published [MaCAW](https://github.com/WICG/privacy-preserving-ads/blob/main/MACAW.md), which builds on [Parakeet](https://github.com/WICG/privacy-preserving-ads/blob/main/Parakeet.md), Microsoft’s WICG proposal for privacy preserving web monetization model for post 3P cookies deprecation. 

*   Microsoft began participating in the following W3C standards groups:   

    *   [Machine Learning Working Group](https://www.w3.org/community/webmachinelearning) (Supporting the WebNN specification),   

    *   [Devices and Sensors Working Group](https://www.w3.org/das/) (Supporting the Screen Fold API),   

    *   [Font & Text Community Group](https://www.w3.org/community/font-text/)



## What’s Next?

<!-- Title: What’s Next? -->

A few things we’re making substantial progress on:  

*   In collaboration with partners in the Chromium project, the [<selectmenu> prototype](https://groups.google.com/a/chromium.org/g/blink-dev/c/9TcfjaOs5zg/m/Tuk80aIeAAAJ) has made significant progress, introducing arbitrary content support and default positioning for the <selectmenu> listbox. This prototype is the first proof-of-concept in the [customizable controls project](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/ControlUICustomization/explainer.md), which to aims to offer developers much more flexibility regarding the aesthetics and content models of native HTML controls. 

### Edge’s Tooling, PWAs, and WebView2 are also always changing, discover what else is new in Edge 91 

<!-- Edge’s Tooling, PWAs, and WebView2 are also always changing, discover what else is new in Edge 91 -->
         

*   [Edge DevTools Updates](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/) 

*   [Explore experimental features in Progressive Web Apps (PWAs)](https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/experimental-features/)

 


Thanks for reading and catch you soon for Microsoft Edge 92! 👋 
