---
title: Throttling
description: The Throttling page of DevTools Settings, to control and customize network and CPU speed settings.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 06/12/2025
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

In the **Throttling** page of **Customize and control DevTools** (![Customize and control DevTools icon](./throttling-images/customize-and-control-devtools-icon.png)) > **Settings**, you can:

* Calibrate CPU throttling presets to approximate the typical performance of low- and mid-tier mobile devices.

* Set up custom throttling profiles.  You can use your custom throttling profiles to test custom connection speeds in the **Network** tool.<!--, per [Create a custom throttling profile](../network/reference.md#create-a-custom-throttling-profile) in _Network features reference_.  todo: after https://github.com/MicrosoftDocs/edge-developer/pull/3405 is merged, link -->

![The Throttling tab in DevTools Settings](./throttling-images/settings-throttling.png)


<!-- ====================================================================== -->
## Calibrate CPU throttling presets
<!-- https://developer.chrome.com/docs/devtools/settings/throttling#cpu-throttling -->

To calibrate CPU throttling presets:

1. Go to a webpage, such as the [Peer connection](https://webrtc.github.io/samples/src/content/peerconnection/pc1/) WebRTC sample.

1. Right-click the webpage, and then select **Inspect**.

   DevTools opens.

1. Select the **Performance** tool.

1. Click the **Capture settings** (![Capture settings icon](./throttling-images/capture-settings-icon.png)) button, and then in the **CPU throttling** dropdown menu, select **Calibrate**.

   ![The CPU throttling dropdown menu before calibrating](./throttling-images/cpu-throttling-menu-before-calibrate.png)

   Before calibration, the **Low-tier mobile** and **Mid-tier mobile** menuitems are dimmed, and don't have numbers next to them.

   Or, in the **Environment settings** section, select the **CPU throttling** dropdown menu, and then select **Calibrate**:

   ![The CPU throttling dropdown menu before calibrating, in Environment settings](./throttling-images/envir-cpu-throttling-menu-before-calibrate.png)

   <!-- Or, click the **Customize and control DevTools** (![Customize and control DevTools icon](./throttling-images/customize-and-control-devtools-icon.png)) button, select **Settings** (![Settings icon](./throttling-images/settings-icon.png)), and then on the left, select the **Throttling** settings page. -->

   The DevTools **Settings** > **Throttling** page opens.

1. In the **CPU throttling presets** section, click the **Calibrate** button, and then click the **Continue** button.

   After about 5 seconds, DevTools navigates away from the current webpage and then reloads it.

   The **CPU throttling presets** section shows the throttling rates that you can apply to your device, to get an idea of how your page performs on low- and mid-tier mobile devices:

   ![Calibrated rates next for low- and mid-tier mobile devices](./throttling-images/calibrated.png)

1. In DevTools **Settings**, click the **Close** (![Close icon](./throttling-images/close-settings-icon.png)) button.


<!-- ====================================================================== -->
## Use your calibrated CPU throttling presets
<!-- bottom of https://developer.chrome.com/docs/devtools/settings/throttling#cpu-throttling -->

To use your calibrated CPU throttling rates:

1. In DevTools, select the **Performance** tool.

1. Click the **Capture settings** (![Capture settings icon](./throttling-images/capture-settings-icon.png)) button, and then use the **CPU throttling** dropdown menu.

   Or, in the **Environment settings** section, use the **CPU throttling** dropdown menu.

   The calibrated factors are displayed next to the **Low-tier mobile** and **Mid-tier mobile** menuitems:

   ![Calibrated rates next in drop-down menus in the Performance panel](./throttling-images/calibrated-presets.png)


<!-- ====================================================================== -->
## Set up a custom network throttling profile
<!-- Set up custom network throttling profile  https://developer.chrome.com/docs/devtools/settings/throttling#network-throttling -->

To add a custom network throttling profile:

1. Go to a webpage, such as the [Peer connection](https://webrtc.github.io/samples/src/content/peerconnection/pc1/) WebRTC sample.

1. Right-click the webpage, and then select **Inspect**.

   DevTools opens.

1. In DevTools, click the **Customize and control DevTools** (![Customize and control DevTools icon](./throttling-images/customize-and-control-devtools-icon.png)) button, and then select **Settings** (![Settings icon](./throttling-images/settings-icon.png)).

   The DevTools **Settings** page opens.

1. On the left, select the **Throttling** settings page.

1. In the **Network throttling profiles** section, click the **Add profile** button.

1. Specify the following optional parameter values for the new entry:

   ![Creating a new profile in the Throttling tab](./throttling-images/custom-profile.png)

   * **Profile Name**.
   * **Download** and **Upload** speeds in Kbps.
   * **Latency** in milliseconds.

   Packet-related parameters:
   * **Packet Loss** in percent.
   * **Packet Queue Length** as a number.
   * **Packet Reordering** flag, on or off.

1. Click the **Add** button to save the new profile.

1. In DevTools **Settings**, click the **Close** (![Close icon](./throttling-images/close-settings-icon.png)) button.

You can now select the custom profile from the **Throttling** dropdown menu in the **Network** tool.

By using packet-related parameters, you can throttle [WebRTC](https://webrtc.org) applications without using third-party software.  You can try these parameters in the [Peer connection](https://webrtc.github.io/samples/src/content/peerconnection/pc1/) WebRTC sample:

   ![Peer connection sample](./throttling-images/peer-connection-sample.png)<!-- cleaned strings -->

To edit or remove an existing profile, click the **Edit** (pencil) or **Delete** (wastebasket) buttons that appear on hover.


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/devtools/settings/throttling) and is authored by Sofia Emelianova.

[![Creative Commons License](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
