---
title: Throttling
description: The Throttling page of DevTools Settings, to control and customize network and CPU speed settings.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 05/05/2025
---
<!-- Copyright Sofia Emelianova

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->
# Throttling
<!-- https://developer.chrome.com/docs/devtools/settings/throttling -->

In **Customize and control DevTools**,<!-- todo: (![Gear icon]()) --> in the **Throttling** page, you can:

* Calibrate CPU throttling presets to approximate the typical performance of low- and mid-tier mobile devices.

* Set up custom throttling profiles.  You can use these profiles to test custom connection speeds in the **Network** tool.<!-- todo: https://developer.chrome.com/docs/devtools/network/reference#throttling-profile -->

<!-- ![The Throttling tab](todo: png) -->


<!-- ====================================================================== -->
## Calibrate CPU throttling presets

To calibrate CPU throttling presets:

1. In DevTools, click **Customize and control DevTools**,<!-- todo: (![Gear icon]()) -->.

1. In the **Throttling** page, in the **CPU throttling presets** section, click the **Calibrate** button.

1. Wait about 5 seconds for DevTools to navigate away from your current page and reload it.

The **Throttling** tab shows the CPU throttling rates that you can apply to your device to get an idea of how your page performs on low- and mid-tier mobile devices.

<!-- ![Calibrated rates next for low- and mid-tier mobile devices](todo: png) -->

With presets calibrated, you can find them in **Performance** > **Environment settings** > **CPU** and in **Performance** > **Capture settings** drop-down menus.

<!-- ![Calibrated rates next in drop-down menus in the Performance panel](todo: png) -->


<!-- ====================================================================== -->
## Set up custom network throttling profile

To add a custom network throttling profile:

1. In DevTools, click the **Customize and control DevTools**<!-- todo: (![Gear icon]()) --> button.<!-- todo: https://developer.chrome.com/docs/devtools/settings#open -->

1. In the **Throttling** page, in the **Network throttling profiles** section, click the **Add profile** button.

   <!-- ![Creating a new profile in the Throttling tab](todo: png) -->

1. Specify the following optional parameter values for the new entry:

   * **Profile Name**.
   * **Download** and **Upload** speeds in Kbps.
   * **Latency** in milliseconds.

   Packet-related parameters:
   * **Packet loss** in percent.
   * **Packet queue length** as a number.
   * **Packet reordering** flag, on or off.

   With packet-related parameters, you can throttle [WebRTC](https://webrtc.org) applications without using third-party software.  You can try these parameters in this [demo page](https://webrtc.github.io/samples/src/content/peerconnection/pc1/).

1. Click **Add** to save the new profile.  You can now select the custom profile from the **Throttling** dropdown menu in the **Network** tool.

To edit or remove an existing profile, click the **Edit** (pencil) or **Delete** (wastebasket) buttons that appear on hover.


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/devtools/settings/throttling) and is authored by Sofia Emelianova.

[![Creative Commons License](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
