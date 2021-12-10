---
title: Simulate device orientation
description: Simulate device orientation using the Orientation section of the Sensors tool.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
ms.date: 05/04/2021
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
# Simulate device orientation

Simulate different device orientations from Microsoft Edge DevTools.

<!--todo: update device orientation section when available -->

1.  Press `Control`+`Shift`+`P` (Windows, Linux) or `Command`+`Shift`+`P` (macOS) to open the **Command Menu**.

    :::image type="content" source="../media/device-mode-console-command-menu.msft.png" alt-text="The Command Menu" lightbox="../media/device-mode-console-command-menu.msft.png":::

1.  Type `sensors`, choose **Show Sensors**, and select `Enter`.  The **Sensors** tool opens at the bottom of your DevTools window.

1.  From the **Orientation** list, select one of the preset orientations, such as `Portrait upside down`, or select **Custom orientation** to provide your own exact orientation.

:::image type="content" source="../media/device-mode-console-sensors-orientation-portrait-upside-down.msft.png" alt-text="Choose Portrait upside down from the Orientation list" lightbox="../media/device-mode-console-sensors-orientation-portrait-upside-down.msft.png":::

If you select **Custom orientation**, the `alpha`, `beta`, and `gamma` rotational axis fields are enabled.
<!--To understand how each axis works, see [Device Orientation & Motion - Rotation data](https://developers.google.com/web/fundamentals/native-hardware/device-orientation#rotation_data). -->
<!-- todo: link to a local copy of that article section when available; see "original page" below -->
You can also set a custom orientation by dragging the **Orientation Model**.  For example, to rotate along the `alpha` axis, hold `Shift` before dragging:

:::image type="content" source="../media/device-mode-console-sensors-orientation-custom.msft.png" alt-text="The Orientation Model" lightbox="../media/device-mode-console-sensors-orientation-custom.msft.png":::


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/device-mode/orientation) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
