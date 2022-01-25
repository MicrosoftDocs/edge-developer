---
description: Open the Network conditions tool, disable Select automatically, and choose from the list or enter a custom string.
title: Override the user agent string from Microsoft Edge DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/19/2021
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
# Override the user agent string from Microsoft Edge DevTools

To override the [user agent](https://developer.mozilla.org/docs/Glossary/User_agent) string from Microsoft Edge DevTools:

1. Select `Control`+`Shift`+`P` (Windows, Linux) or `Command`+`Shift`+`P` (macOS) to open the **Command Menu**.

    :::image type="complex" source="../media/device-mode-console-command-menu.msft.png" alt-text="The Command Menu" lightbox="../media/device-mode-console-command-menu.msft.png":::
       The **Command Menu**
    :::image-end:::

1. Type `network conditions`, choose **Show Network conditions**, and select `Enter` to open the **Network conditions** tool.
1. In the **User agent** section, clear the **Use browser default** checkbox.

    :::image type="complex" source="../media/device-mode-console-network-conditions-user-agent-select-automatically-deselected.msft.png" alt-text="Turn off Select automatically" lightbox="../media/device-mode-console-network-conditions-user-agent-select-automatically-deselected.msft.png":::
       Clear **Use browser default** checkbox
    :::image-end:::

1. Choose a user agent from the drop-down list or enter a custom user agent.
1. Choose **User agent client hints** to view and  change these values as described in [Network Analysis reference](../network/reference.md).


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/device-mode/override-user-agent) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
