---
description: Use the Media Panel to view information and debug the media players per browser tab.  
title: View and debug media players information
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/08/2020 
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---

# View and debug media players information  

Use the **Media** panel in Microsoft Edge DevTools to view information and debug the media players per browser tab.  

## Open the Media panel  

The **Media** panel is the main place in DevTools for inspecting the media player of a webpage.

1.  [Open DevTools][DevtoolsGuideChromiumOpen].  
1.  To open the **Media** panel, choose **Customize and control DevTools** `...` > **More tools** > **Media**.  
    
    :::image type="complex" source="../media/media-panel-empty.msft.png" alt-text="Media panel" lightbox="../media/media-panel-empty.msft.png":::
       **Media** panel  
    :::image-end:::  
    
## View media players information  

1.  Navigate to a webpage with a media player, such as the following webpage.  
    
    [Maximizing productivity with the Edge Developer Tools][BingVideosSearchViewDetailMidE0BA14EC0E0D18C06C8DE0BA14EC0E0D18C06C8]  
    
1.  Under the **Players** menu, a media player is displayed.  
1.  Select the player.  The **Properties** tab displays the properties of the media player.  
    
    :::image type="complex" source="../media/media-panel-view.msft.png" alt-text="Media properties" lightbox="../media/media-panel-view.msft.png":::
       Media properties  
    :::image-end:::  
    
1.  To view all the media player events, choose the **Events** tab.  
    
    :::image type="complex" source="../media/media-panel-events.msft.png" alt-text="Media events" lightbox="../media/media-panel-events.msft.png":::
       Media events  
    :::image-end:::  
    
1.  To view the media player message logs, choose the **Messages** tab.  You may filter the messages by log level or string.  
    
    :::image type="complex" source="../media/media-panel-messages.msft.png" alt-text="Media messages" lightbox="../media/media-panel-messages.msft.png":::
       Media messages  
    :::image-end:::  
    
1.  On the **Timeline** tab, the media playback and buffer status is displayed live.  
    
    <!--  
    <video autoplay loop muted playsinline>
        <source src="/microsoft-edge/devtools-guide-chromium/media-panel/images/05-timeline.mp4" type="video/mp4">
    </video>
    -->  
    
### Remote debugging  

View the media players information on an Android device from your Windows or macOS computer.  

1.  To set up remote debugging, navigate to [Get started with remote debugging Android devices][DevtoolsGuideChromiumRemoteDebuggingIndex].  
1.  View the media players information remotely.  
    
    <!-- TODO: recreate image using an Android device -->  
    <!--  
    :::image type="complex" source="../media/media-panel-remote-debug.msft.png" alt-text="Remote debugging" lightbox="../media/media-panel-remote-debug.msft.png":::
       Remote debugging  
    :::image-end:::  
    -->  
    
## Hide and show media players  

Sometimes you run more than one media player on a webpage, or use the same browser tab to browse different webpages, each with media players.

You may choose to hide \(or show\) each media player for an easier debugging experience.  

1.  Browse to several different video webpages using the same browser tab.  
1.  To hide media players, complete one of the following actions.  
    *   To hide one media player, hover on a media player, open the contextual menu \(right-click\), and choose **Hide player**.  
    *   To hide all of the other media players, hover on a media player, open the contextual menu \(right-click\), and choose **Hide all others**.  
    
    :::image type="complex" source="../media/media-panel-hide-show.msft.png" alt-text="Hide media players" lightbox="../media/media-panel-hide-show.msft.png":::
       Hide media players  
    :::image-end:::  
    
## Export media player information  

1.  To download the media player info as a JSON file, hover on a media player, open the contextual menu \(right-click\), and choose **Save player info**.  
    
    :::image type="complex" source="../media/media-panel-save.msft.png" alt-text="Export media information" lightbox="../media/media-panel-save.msft.png":::
       Export media information  
    :::image-end:::  
    
## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  

[DevtoolsGuideChromiumOpen]: ../open.md "Open Microsoft Edge DevTools"  

[DevtoolsGuideChromiumRemoteDebuggingIndex]: ../remote-debugging/index.md "Get started with remote debugging Android devices | Microsoft Docs"  

[BingVideosSearchViewDetailMidE0BA14EC0E0D18C06C8DE0BA14EC0E0D18C06C8]: https://www.bing.com/videos/search?view=detail&mid=DE0BA14EC0E0D18C06C8DE0BA14EC0E0D18C06C8 "Maximizing Productivity with the Edge Developer Tools | Bing Video"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/media-panel/index) and is authored by [Jecelyn Yeen][JecelynYeen] \(Developer advocate, Chrome DevTools\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[JecelynYeen]: https://developers.google.com/web/resources/contributors/jecelynyeen  

