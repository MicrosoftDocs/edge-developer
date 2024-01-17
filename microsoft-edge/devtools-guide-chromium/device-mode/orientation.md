---
title: Simulate device orientation with the Sensors tool
description: Simulate device orientation using the Orientation section of the Sensors tool.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
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
# Simulate device orientation with the Sensors tool

Simulate different device orientations from within DevTools.

<!--todo: update device orientation section when available -->

1. Press **Ctrl+Shift+P** (Windows, Linux) or **Command+Shift+P** (macOS) to open the **Command Menu**.

   ![The Command Menu](./orientation-images/device-mode-console-command-menu.png)

1. Type **sensors**, select **Show Sensors**, and then press **Enter**.  The **Sensors** tool opens in the bottom of the DevTools window.

   ![Show Sensors from Command Menu](./orientation-images/device-mode-console-command-menu-sensors.png)

1. From the **Orientation** list, select one of the preset orientations, such as **Portrait upside down**, or select **Custom orientation** to provide your own exact orientation.

   ![Selecting 'Portrait upside down' from the Orientation list](./orientation-images/device-mode-console-sensors-orientation-portrait-upside-down.png)

If you select **Custom orientation**, the **alpha**, **beta**, and **gamma** rotational axis fields are enabled.
<!--To understand how each axis works, see [Device Orientation & Motion - Rotation data](https://web.dev/native-hardware-device-orientation/#rotation-data). -->
<!-- todo: link to a local copy of that article section when available; see "original page" below -->
You can also set a custom orientation by dragging the **Orientation Model**.  For example, to rotate along the **alpha** axis, press and hold **Shift** before dragging:

![The Orientation Model](./orientation-images/device-mode-console-sensors-orientation-custom.png)


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/devtools/device-mode/orientation/) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
