---
ms.assetid: 4d3fa934-4fa8-4c02-b9b5-88506c76baac
description: Guides for browser features in Microsoft Edge.
title: Browser - Dev guide
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# Browser features  

[!INCLUDE [deprecation-note](../includes/legacy-edge-note.md)]  

## Autoplay policies  

 Microsoft Edge provides customers with the ability to personalize their browsing preferences on websites that autoplay media with sound in order to minimize distractions on the web and conserve bandwidth.  Users can customize media behavior with both global and per-site autoplay controls.  Additionally, Microsoft Edge automatically suppresses autoplay of media in background tabs.  

Check out [Autoplay policies](./browser-features/autoplay-policies.md) for details and best practices to ensure a good user experience with media hosted on your site.  

## Flash  

If Flash is used on your page but the user has not enabled it, Microsoft Edge will normally show a puzzle piece icon in the address bar.  If you are dynamically adding the Flash control after the page is loaded, the puzzle icon may not display, in which case you'll want to [test if Flash is loaded and provide a graceful fallback experience](./browser-features/flash.md) if its not present.  

## Reading view  

Microsoft Edge provides a [reading view](./browser-features/reading-view.md) for a more streamlined, book-like reading experience of webpages, without the distraction of unrelated or other secondary content on the page.  Here are tips on how to ensure a great reading view experience with your site and also instructions for opting your site out of reading view.  

## Search provider discovery  

Rich search integration is built into the Microsoft Edge address bar, including search suggestions, results from the web, your browsing history, and favorites.  [Here's more info for search providers](./browser-features/search-provider-discovery.md) looking to provide support for Microsoft Edge.  
