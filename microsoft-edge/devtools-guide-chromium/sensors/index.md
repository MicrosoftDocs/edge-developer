---
title: Emulate device sensors (Sensors tool)
description: How to use the Sensors tool to emulate sensor input of any device, in Microsoft Edge DevTools.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 03/07/2025
---
<!-- Copyright Kayce Basques and Sofia Emelianova

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->
# Emulate device sensors (Sensors tool)

Use the **Sensors** tool to emulate sensor input of any device.

<!-- ![The Sensors tool](todo: png) -->


<!-- ====================================================================== -->
## Overview

The **Sensors** tool lets you do the following:

* [Override geolocation](#override-geolocation)
* [Simulate device orientation](#simulate-device-orientation)
* [Force touch](#force-touch)
* [Emulate idle detector state](#emulate-idle-detector-state)
* [Emulate hardware concurrency](#emulate-hardware-concurrency)
* [Emulate CPU pressure](#emulate-cpu-pressure)

To simulate a viewport of a mobile device and throttle the network and CPU, see [Device Mode](https://developer.chrome.com/docs/devtools/device-mode).


<!-- ====================================================================== -->
## Open the Sensors tool

1. Open a webpage, such as the [foo]() demo page, right-click the webpage and then select **Inspect**.  DevTools opens.

1. If **Quick View** isn't shown at bottom of DevTools, press **Esc** to display it.

1. In **Quick View** at the bottom of DevTools, click the **More tools** button, and then select **Sensors**.


#### Open the Sensors tool by using the Command Menu

1. Depending on your operating system, press the following to open the Command Menu:
   * On MacOS, **Command+Shift+P**.
   * On Windows, Linux, or ChromeOS, **Control+Shift+P**.

   <!-- ![Using the Command Menu to open the Sensors tool](todo: png) -->

1. Type **sensors**, select **Show Sensors**, and then press **Enter**.

   The **Sensors** tool opens up at the bottom of your DevTools window.


<!-- ====================================================================== -->
## Override geolocation

Many websites take advantage of user location https://web.dev/user-location/ in order to provide a more relevant experience for their users. For example, a weather website might show the local forecast for a user's area, once the user has granted the website permission to access their location.

If you're building a UI that changes depending on where the user is located, you probably want to make sure that the site behaves correctly in different places around the world.

To override your geolocation, open the **Sensors** tool https://developer.chrome.com/docs/devtools/sensors#open-sensors and, from the Geolocation list select one of the following:

* One of the preset cities, like Tokyo.
* Custom location to enter custom longitude and latitude coordinates.
* Select Location unavailable to see how your site behaves when the user's location is not available.

<!-- ![Selecting 'Tokyo' from the 'Geolocation' list](todo: png) -->


<!-- ====================================================================== -->
## Simulate device orientation

To simulate different device orientations https://web.dev/device-orientation/ ,   open the **Sensors** tool  https://developer.chrome.com/docs/devtools/sensors#open-sensors , and, from the Orientation list, select one of the following:

* One of the preset orientations, like Portrait upside down.
* Custom orientation to provide your own exact orientation.

<!-- ![Selecting 'Portrait upside down' from the 'Orientation' list](todo: png) -->

After selecting **Custom orientation**, the **alpha**, **beta**, and **gamma** fields are enabled.  See Alpha https://web.dev/device-orientation/#alpha, Beta https://web.dev/device-orientation/#beta, and Gamma https://web.dev/device-orientation/#gamma to understand how these axes work.

You can also set a custom orientation by dragging the **Orientation Model**.  Hold **Shift** before dragging to rotate along the alpha axis.

<!-- ![The Orientation Model](todo: png) -->


<!-- ====================================================================== -->
## Force touch

To test touch events on your website, you can force touch instead of click even if you're testing on a device without a touch screen.

To trigger touch events with your pointer:

1. Open the **Sensors** tool. https://developer.chrome.com/docs/devtools/sensors#open-sensors

1. Under the **Touch** drop-down list, select **Force touch**.

   <!-- ![Forcing touch instead of click](todo: png) -->

1. Click **Reload DevTools** in the prompt at the top.


<!-- ====================================================================== -->
## Emulate idle detector state

The Idle Detection API https://developer.chrome.com/articles/idle-detection lets you detect inactive users and react on idle state changes.  With DevTools, you can emulate idle state changes for both the user state and screen state instead of waiting for the actual idle state to change.

To emulate idle states:

1. Open the **Sensors** tool.  For this tutorial, you can try it on this demo page. https://idle-detection.glitch.me/

1. Enable the checkbox next to _Ephemeral_ and, in the prompt, grant the demo page the idle detection permission. Then, reload the page.

   <!-- ![Granting the idle detection permission on a demo page](todo: png) -->

1. Under the **Emulate Idle detector State** drop-down, select one of the following:
   * **No idle emulation**
   * **User active, screen unlocked**
   * **User active, screen locked**
   * **User idle, screen unlocked**
   * **User idle, screen locked**

   <!-- ![Selecting an idle and locked state on a demo page](todo: png) -->

In this example, DevTools emulates a **User idle, screen locked** state and, in this case, the demo page starts the 10 second countdown to clear the canvas.


<!-- ====================================================================== -->
## Emulate hardware concurrency

To emulate how your website performs on devices with different numbers of processor cores, you can override the value reported by the navigator.hardwareConcurrency https://developer.mozilla.org/docs/Web/API/Navigator/hardwareConcurrency property. Some applications use this property to control the degree of parallelism of their application, for example, to control Emscripten pthread https://emscripten.org/docs/porting/pthreads.html pool size.

To emulate hardware concurrency:

1. Open the **Sensors** tool.

1. Near the bottom of the panel, find and turn on check_box Hardware concurrency.

1. In the number input box, enter the number of cores you want to emulate.

   <!-- ![Turned on 'Hardware concurrency' with the number of cores set to 10](todo: png) -->

   Caution: Exceeding the default value of 12 may degrade performance.

To revert to the default value, click the **Reset** <!--(![undo](todo: icon png in Sensors tab at Drawer next to control))--> button.


<!-- ====================================================================== -->
## Emulate CPU pressure

CPU or compute pressure https://developer.chrome.com/docs/web-platform/compute-pressure is a set of reported states that give you an idea of how much workload the system's compute is undergoing and whether it's near to the limit or not. This information lets you adapt your real-time application, for example, video conferencing or video game, to take advantage of all the available processing power while keeping the system responsive by adapting the workloads in real time.

The **Sensors** panel lets you emulate the states that can be reported by the Compute Pressure API. https://developer.mozilla.org/docs/Web/API/Compute_Pressure_API

To emulate CPU pressure on your website:

1. Open the **Sensors** tool. https://developer.chrome.com/docs/devtools/sensors#open-sensors

1. Near the bottom of the panel, find the **CPU pressure** section, and select one of the human-readable pressure states https://developer.mozilla.org/docs/Web/API/Compute_Pressure_API#pressure_states : **No override**, **Nominal**, **Fair**, **Serious**, or **Critical**.

1. In the prompt at the top of DevTools, click **Reload DevTools**.

   <!-- ![Emulating 'Serious' CPU pressure](todo: png) -->


<!-- ====================================================================== -->
## See also
<!-- todo: all links in article -->


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/devtools/sensors) and is authored by Kayce Basques and Sofia Emelianova.

[![Creative Commons License](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
