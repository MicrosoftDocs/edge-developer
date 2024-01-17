---
title: Device emulation
description: Device and state emulation in the Microsoft Edge Developer Tools extension for Visual Studio Code.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.date: 10/06/2022
---
# Device emulation

In the **Edge DevTools: Browser** tab, the Device Emulation toolbar on the bottom enables you to simulate different environments:

![Browser preview in the extension with emulation tool bar showing](./device-state-emulation-images/edge-for-code-screencast-v2.png)

To reproduce the UI shown here, see [Opening DevTools by right-clicking an HTML file](./open-devtools-and-embedded-browser.md#opening-devtools-by-right-clicking-an-html-file) in _Opening DevTools and the DevTools browser_.


<!-- ====================================================================== -->
## Emulate Devices dropdown menu
<!-- toolbar item 1. Emulate devices -->

In the **Emulate devices** dropdown menu, you can select from a number of different devices, or the default option of **Responsive**.  When you select a device, the viewport resizes to the correct measurements and simulates the touch interface.  For example, there are several emulated iPhone layouts:

![Browser preview in the extension showing the web product in an emulated phone layout](./device-state-emulation-images/edge-for-code-screencast-v2-emulating.png)


<!-- ====================================================================== -->
## Width and Height dropdown menus
<!-- toolbar item 2. Width -->
<!-- toolbar item 3. Height -->

To change the viewport dimensions, click the **Width** and **Height** ![Width and Height icons](./device-state-emulation-images/width-height-icons.png) dropdown menus:

![Width and Height dropdown menus](./device-state-emulation-images/width-height.png)


<!-- ====================================================================== -->
## Rotate button
<!-- toolbar item 4. Rotate -->

Click the **Rotate** button (![The Rotate button](./device-state-emulation-images/rotate-button.png)) to rotate the viewport between portrait and landscape orientation:

![Viewport rotated to landscape orientation](./device-state-emulation-images/rotate-landscape.png)


<!-- ====================================================================== -->
## Emulate CSS Media Features button
<!-- toolbar item 5. Emulate CSS media features -->

Use the **Emulate CSS media features** button (![Emulate CSS media features](./device-state-emulation-images/emulate-css-media-features-button.png)) to: 
*  Emulate CSS media queries.
*  Test how your product looks in print mode.
*  Switch between dark and light mode.
*  Emulate forced colors.

![Browser preview in the extension showing the web product in forced color mode](./device-state-emulation-images/edge-for-code-forced-colours.png)


<!-- ====================================================================== -->
## Emulate Vision Deficiencies button
<!-- toolbar item 6. Emulate vision deficiencies -->

Click the **Emulate vision deficiencies** (![The Emulate vision deficiencies button](./device-state-emulation-images/emulate-vision-deficiencies-button.png)) button to test the user experience of the current webpage with different visual deficiencies.  This button lets you test your product in a blurred mode, or in different color deficiencies:

![Browser preview in the extension showing the web product in a blurred emulation](./device-state-emulation-images/edge-for-code-blurred.png)


<!-- ====================================================================== -->
## See also

* [Emulate mobile devices (Device Emulation)](../../devtools-guide-chromium/device-mode/index.md)
* [Microsoft Edge DevTools extension for Visual Studio Code](../microsoft-edge-devtools-extension.md)
