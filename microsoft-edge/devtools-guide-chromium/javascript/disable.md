---
description: Open the Command Menu and run the "Disable JavaScript" command.
title: Disable JavaScript with Microsoft Edge DevTools
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
# Disable JavaScript with Microsoft Edge DevTools

To review how your webpage renders when a browser doesn't have JavaScript support, temporarily turn off JavaScript.

Complete the following actions to examine how a webpage displays and behaves when you turn off JavaScript.

1.  [Open Microsoft Edge DevTools](../open/index.md).
1.  Select `Control`+`Shift`+`P` (Windows, Linux) or `Command`+`Shift`+`P` (macOS) to open the **Command Menu**.

    :::image type="complex" source="../media/javascript-console-command.msft.png" alt-text="The Command Menu" lightbox="../media/javascript-console-command.msft.png":::
       The **Command Menu**
    :::image-end:::

1.  Start typing `javascript`, choose **Disable JavaScript**, and then select `Enter` to run the command.  JavaScript is now disabled.

    :::image type="complex" source="../media/javascript-console-command-javascript.msft.png" alt-text="Choose Disable JavaScript in the Command Menu" lightbox="../media/javascript-console-command-javascript.msft.png":::
       Choose **Disable JavaScript** in the **Command Menu**
    :::image-end:::

    The yellow warning icon next to **Sources** reminds you that JavaScript is disabled.

    :::image type="complex" source="../media/javascript-console-javascript-disabled-warning.msft.png" alt-text="The warning icon next to Sources" lightbox="../media/javascript-console-javascript-disabled-warning.msft.png":::
       The warning icon next to **Sources**
    :::image-end:::

JavaScript remains disabled in the tab for as long as you have DevTools open.

You may want to refresh the page to review if and how the webpage depends on JavaScript while loading.

To re-enable JavaScript, complete the following actions.

*   Open the **Command Menu** again and run the `Enable JavaScript` command.
*   Close DevTools.


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/javascript/disable) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
