---
title: CSS Overview tool
description: The CSS Overview tool in Microsoft Edge DevTools.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: devtools
ms.date: 02/15/2022
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
# CSS Overview tool

<!-- the what's new entry is:
https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/whats-new/2020/10/devtools#view-and-fix-color-contrast-issues-in-the-css-overview-tool
# What's New in DevTools (Microsoft Edge 87)
### View and fix color contrast issues in the CSS Overview tool -->

The **CSS Overview** tool displays a summary of CSS-related information about the webpage.  This tool lists the colors, fonts, and media queries the webpage uses.  The tool also lists the elements on your page that have color contrast issues, and the unused CSS declarations.  The [CSS Overview Accessible Colors Demo](https://css-overview-accessible-colors-demo.glitch.me) page has an example of a color contrast issue.

To view a list of elements that have a color contrast issue, on **Contrast issues**, click **Text**.  

To open the element in the **Elements** tool, click an element in the list.  To help fix contrast issues, DevTools [automatically provides color suggestions](../whats-new/2020/08/devtools.md#accessible-color-suggestion-in-the-styles-pane).


For updates on this feature in the Chromium open-source project, see Issue [#1120316](https://crbug.com/1120316).

![Low color contrast issues.](../whats-new/media/2020/10/css-overview.msft.png)


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/devtools/css-overview/) and is authored by [Jecelyn Yeen](https://developers.google.com/web/resources/contributors#jecelyn-yeen) (Developer advocate, Chrome DevTools).

[![Creative Commons License.](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
