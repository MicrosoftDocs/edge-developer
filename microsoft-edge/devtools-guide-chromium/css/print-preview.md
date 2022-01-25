---
description: Open the "Rendering" tool and select Emulate CSS media > print.
title: Force Microsoft Edge DevTools into Print Preview mode (CSS Print Media Type)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/04/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
<!-- Copyright Kayce Basques

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->
# Force Microsoft Edge DevTools into Print Preview mode

The [print media query](https://developer.mozilla.org/docs/Web/CSS/Media_Queries/Using_media_queries) controls how your page looks when printed.  To force your page into print preview mode:

1.  Select `Control`+`Shift`+`P` (Windows, Linux) or `Command`+`Shift`+`P` (macOS) to open the **Command Menu**.

    :::image type="complex" source="../media/css-console-command-menu-rendering.msft.png" alt-text="The Command Menu" lightbox="../media/css-console-command-menu-rendering.msft.png":::
       The **Command Menu**
    :::image-end:::

1.  Type `rendering`, choose **Show Rendering**, and then select `Enter`.
1.  Under **Emulate CSS media**, choose **print**.

    :::image type="complex" source="../media/css-elements-styles-qs-rendering-emulate-css-media-print.msft.png" alt-text="Print preview mode" lightbox="../media/css-elements-styles-qs-rendering-emulate-css-media-print.msft.png":::
       Print preview mode
    :::image-end:::

From here, you may display and change your CSS, like any other web page.  Navigate to [Get Started With Viewing And Changing CSS](./index.md).


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/css/print-preview) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
