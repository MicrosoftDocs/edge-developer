---
description: Provide a seamless user experience on sites requiring Adobe Flash.
title: Flash - Dev guide
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, flash
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# Flash  

[!INCLUDE [deprecation-note](../../includes/legacy-edge-note.md)]  

Adobe Flash has been an integral part of the web for decades, enabling rich content and animations in browsers since before HTML5 was introduced.  In modern browsers, web standards pioneered by Microsoft, Adobe, Google, Apple, Mozilla, and many others are now enabling sites to exceed those experiences without Flash and with improved performance and security.  Working in partnership with other browser vendors and with Adobe, we strongly encourage developers to migrate to HTML5 standards including [Encrypted Media Extensions](https://developer.microsoft.com/microsoft-edge/platform/status/encryptedmediaextensions), [Media Source Extensions](https://developer.microsoft.com/microsoft-edge/platform/status/mediasourceextensions), [Canvas](https://developer.microsoft.com/microsoft-edge/platform/status/canvas), [Web Audio](https://developer.microsoft.com/microsoft-edge/platform/status/webaudioapi), and [Real-Time Communication](https://developer.microsoft.com/microsoft-edge/platform/status/webrtcobjectrtcapi).  

With the Oct 2018 release of Windows 10 Microsoft Edge is continuing the Flash Deprecation effort that we [covered](https://blogs.windows.com/msedgedev/2017/07/25) as part of [Adobe's end of support announcement](https://theblog.adobe.com/adobe-flash-update) after 2021.  In the Oct 2018 release users will be required to explicitly allow Flash to run on a site for the lifetime of the tab.  The persistent Always Allow option will no longer be available and a user will not be able to manage per site Flash permission that span tab sessions.  

As you transition toward HTML5 standards, there are a few simple things you can do to ensure that your users still have a positive experience visiting your website with Microsoft Edge in the Windows 10 Creators Update.  

If Flash is used on the page, but the user has not enabled it, Microsoft Edge will normally show a puzzle piece icon in the address bar as shown in [this blog](https://blogs.windows.com/msedgedev/2016/12/14).  If you are dynamically adding the Flash control after the page is loaded, this puzzle piece icon may not be displayed.  In this case it is best to test for the presence of Flash and provide a link as described below.  

To ensure that all users have a good experience, continue to test for the presence of Flash using your standard mechanisms.  If Microsoft Edge reports that Flash is not available, present the [Flash download link](http://get.adobe.com/flashplayer) and [Flash download image](http://www.adobe.com/legal/permissions/icons-web-logos.html#flashplayer) to the user.  When the user clicks on the link, Microsoft Edge \(as well as other browsers\) will present the necessary prompts to enable Flash Player for the site.  The link must appear on the primary domain where you want Flash to be enabled.  It won't work if you redirect users to pages on other domains.  [Here's a demo](https://microsoftedge.github.io/MicrosoftEdge-Documentation/flashclicktorun) of the suggested experience and the corresponding [sample code](https://github.com/MicrosoftEdge/MicrosoftEdge-Documentation/tree/master/docs/flashclicktorun).  
