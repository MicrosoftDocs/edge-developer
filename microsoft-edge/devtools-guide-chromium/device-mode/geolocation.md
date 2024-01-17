---
title: Override geolocation with the Sensors tool
description: Open the Sensors tool in DevTools and select coordinates from the Geolocation list.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 07/21/2023
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
# Override geolocation with the Sensors tool

Many websites take advantage of user location in order to provide a more relevant experience for the users.  For example, a weather website may show the local forecast in a user's area, after the user has granted the website permission to access the current user location.

<!--todo: add link to user location section when available -->

If you are building a UI that changes depending on where the user is located, you probably want to make sure that the site behaves correctly in different places around the world.  To override your geolocation in Microsoft Edge DevTools:

1. Press **Ctrl+Shift+P** (Windows, Linux) or **Command+Shift+P** (macOS) to open the **Command Menu**.

   ![The Command Menu](./geolocation-images/command-menu.png)

1. Type `sensors`, select **Show Sensors**, and then press **Enter**.  The **Sensors** tool opens at the bottom of the DevTools window.

   ![Show Sensors from Command Menu](./geolocation-images/command-menu-sensors.png)

1. Click the **Location** dropdown list, and then:
   *  Select a city, such as `Tokyo`.
   *  Click **Other** to enter custom longitude and latitude coordinates.
   *  Click **Location unavailable** to see how your site behaves when the user's location isn't available.

   ![Selecting Tokyo from the Location list](./geolocation-images/sensors-geolocation-tokyo.png)

<!-- /web/fundamentals/native-hardware/user-location/index -->


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/devtools/device-mode/geolocation/) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
