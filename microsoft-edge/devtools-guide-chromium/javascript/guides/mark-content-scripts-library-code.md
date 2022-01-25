---
description: Enable "Mark content scripts as Library code" from Settings > Framework Library Code.
title: Mark content scripts as Library code
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
# Mark content scripts as Library code

When you use the **Sources** tool to [step through code](../index.md#step-4-step-through-the-code), sometimes you pause on code that you don't recognize.  You probably paused on code for one of the Microsoft Edge Extensions that you installed.  To not pause on extension code, complete the following actions.

1.  In DevTools, in the upper right, choose the gear icon (**Settings**).  The **Settings** page appears.
1.  Below **Settings**, choose **Ignore List**.  The **Framework Library Code** section of **Settings** appears.
1.  Turn on the **Mark content scripts as Library code** checkbox.

    :::image type="complex" source="../../media/javascript-settings-library-code-mark-content-scripts-library-code.msft.png" alt-text="Enable the Mark content scripts as Library code checkbox" lightbox="../../media/javascript-settings-library-code-mark-content-scripts-library-code.msft.png":::
       Enable the **Mark content scripts as Library code** checkbox
    :::image-end:::


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/devtools/javascript/ignore-chrome-extension-scripts/) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools & Lighthouse).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
