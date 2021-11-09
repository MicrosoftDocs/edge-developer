---
description: Use the Media tool to view information and debug the media players per browser tab.
title: View and debug media players information
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/04/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
<!-- Copyright Jecelyn Yeen

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->
# View and debug media players information

Use the **Media** tool in Microsoft Edge DevTools to view information and debug the media players per browser tab.


<!-- ====================================================================== -->
## Open the Media tool

The **Media** tool is the main place in DevTools for inspecting the media player of a webpage.

1.  [Open DevTools](../open/index.md).
1.  To open the **Media** panel, choose **Customize and control DevTools** `...` > **More tools** > **Media**.

    :::image type="complex" source="../media/media-panel-empty.msft.png" alt-text="Media panel" lightbox="../media/media-panel-empty.msft.png":::
       **Media** panel
    :::image-end:::


<!-- ====================================================================== -->
## View media players information

1.  Navigate to a webpage with a media player, such as the following webpage.

    [Maximizing productivity with the Edge Developer Tools](https://www.bing.com/videos/search?view=detail&mid=DE0BA14EC0E0D18C06C8DE0BA14EC0E0D18C06C8)

1.  Under the **Players** menu, a media player is displayed.
1.  Choose the player.  The **Properties** panel displays the properties of the media player.

    :::image type="complex" source="../media/media-panel-view.msft.png" alt-text="Media properties" lightbox="../media/media-panel-view.msft.png":::
       Media properties
    :::image-end:::

1.  To view all the media player events, choose the **Events** panel.

    :::image type="complex" source="../media/media-panel-events.msft.png" alt-text="Media events" lightbox="../media/media-panel-events.msft.png":::
       Media events
    :::image-end:::

1.  To view the media player message logs, choose the **Messages** panel.  You may filter the messages by log level or string.

    :::image type="complex" source="../media/media-panel-messages.msft.png" alt-text="Media messages" lightbox="../media/media-panel-messages.msft.png":::
       Media messages
    :::image-end:::

1.  On the **Timeline** panel, the media playback and buffer status is displayed live.

    :::image type="complex" source="../media/media-panel-timeline.msft.png" alt-text="Media timeline" lightbox="../media/media-panel-timeline.msft.png":::
       Media timeline
    :::image-end:::

### Remote debugging

View the media players information on an Android device from your Windows or macOS computer.

1.  To set up remote debugging, navigate to [Get started with remote debugging Android devices](../remote-debugging/index.md).
1.  View the media players information remotely.

    <!-- TODO: recreate image using an Android device -->
    <!--
    :::image type="complex" source="../media/media-panel-remote-debug.msft.png" alt-text="Remote debugging" lightbox="../media/media-panel-remote-debug.msft.png":::
       Remote debugging
    :::image-end:::
    -->


<!-- ====================================================================== -->
## Hide and show media players

Sometimes you run more than one media player on a webpage, or use the same browser tab to browse different webpages, each with media players.

You may choose to hide (or show) each media player for an easier debugging experience.

1.  Browse to several different video webpages using the same browser tab.
1.  To hide media players, complete one of the following actions.
    *   To hide one media player, hover on a media player, open the contextual menu (right-click), and choose **Hide player**.
    *   To hide all of the other media players, hover on a media player, open the contextual menu (right-click), and choose **Hide all others**.

    :::image type="complex" source="../media/media-panel-hide-show.msft.png" alt-text="Hide media players" lightbox="../media/media-panel-hide-show.msft.png":::
       Hide media players
    :::image-end:::


<!-- ====================================================================== -->
## Export media player information

1.  To download the media player info as a JSON file, hover on a media player, open the contextual menu (right-click), and choose **Save player info**.

    :::image type="complex" source="../media/media-panel-save.msft.png" alt-text="Export media information" lightbox="../media/media-panel-save.msft.png":::
       Export media information
    :::image-end:::


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/media-panel/index) and is authored by [Jecelyn Yeen](https://developers.google.com/web/resources/contributors#jecelyn-yeen) (Developer advocate, Chrome DevTools).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
