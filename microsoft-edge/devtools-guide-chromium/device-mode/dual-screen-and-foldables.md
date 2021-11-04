---
description: Use virtual devices in Microsoft Edge to enhance your website for dual-screen and foldable devices.
title: Emulate dual-screen and foldable devices in Microsoft Edge DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/04/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, emulation, device, simulation, mobile, dual-screen, foldable, Surface Duo, Samsung Galaxy Fold
---
# Emulate dual-screen and foldable devices in Microsoft Edge DevTools

You can emulate the following dual-screen and foldable devices in Microsoft Edge DevTools.

*   [Surface Duo](https://www.microsoft.com/surface/devices/surface-duo)
*   [Samsung Galaxy Fold](https://www.samsung.com/global/galaxy/galaxy-fold)

Emulate the devices and toggle between the following postures.

*   Single-screen or folded posture
*   Dual-screen or unfolded posture

[Turn on experimental Web Platform APIs](#turn-on-experimental-apis) and use the [CSS media screen-spanning feature](/dual-screen/web/css-media-spanning) and [JavaScript getWindowSegments API](/dual-screen/web/javascript-getwindowsegments) to enhance your website (or app) for dual-screen and foldable devices.

:::image type="complex" source="../media/experiments-surface-duo-emulation.msft.png" alt-text="Emulate Surface Duo in Microsoft Edge" lightbox="../media/experiments-surface-duo-emulation.msft.png":::
   Emulate Surface Duo in Microsoft Edge
:::image-end:::


<!-- ====================================================================== -->
## Turn on experimental APIs

To use the [CSS media screen-spanning feature](/dual-screen/web/css-media-spanning) and [JavaScript getWindowSegments API](/dual-screen/web/javascript-getwindowsegments), turn on the `Experimental Web Platform features` flag in Microsoft Edge.  Complete the following steps.

1.  Navigate to `edge://flags`.
1.  In the **Search flags** textbox, enter `Experimental Web Platform features`, choose the **Experimental Web Platform features** flag, and change **Disabled** to **Enabled**.
1.  Restart Microsoft Edge.

:::image type="complex" source="../media/experiments-dual-screen-emulation-edge-flags.msft.png" alt-text="Turn on the Experimental Web Platform features flag" lightbox="../media/experiments-dual-screen-emulation.msft.png":::
   Turn on the **Experimental Web Platform features** flag
:::image-end:::

> [!NOTE]
> If you are using [CSS media queries](/dual-screen/web/css-media-spanning) or the [JavaScript Windows Segment Enumeration API](/dual-screen/web/javascript-getwindowsegments) to enhance your website or app for the [Surface Duo](https://www.microsoft.com/surface/devices/surface-duo), you must also turn on the **Experimental Web Platform features** flag in the [Android Microsoft Edge app](https://play.google.com/store/apps/details?id=com.microsoft.emmx) on your [Surface Duo](https://www.microsoft.com/surface/devices/surface-duo) device.
>
> If the **Experimental Web Platform features** flag is turned on in [desktop Microsoft Edge](https://www.microsoft.com/edge) and turned off in the [Android Microsoft Edge app](https://play.google.com/store/apps/details?id=com.microsoft.emmx), the behavior of your website or app in the Surface Duo emulator in desktop Microsoft Edge does not match with the [Android Microsoft Edge app](https://play.google.com/store/apps/details?id=com.microsoft.emmx) on [Surface Duo](https://www.microsoft.com/surface/devices/surface-duo).  Ensure that the flags match across Android and desktop Microsoft Edge to successfully use the Surface Duo emulator in [desktop Microsoft Edge](https://www.microsoft.com/edge).


<!-- ====================================================================== -->
## Test on foldable and dual-screen devices

When you emulate the [Surface Duo](https://www.microsoft.com/surface/devices/surface-duo) in a dual-screen posture in Microsoft Edge, the seam (the space between the two screens) is drawn over your website or app.

The emulated display matches the way your website (or app) renders in the [Microsoft Edge Android app](https://play.google.com/store/apps/details?id=com.microsoft.emmx) while running on [Surface Duo](https://www.microsoft.com/surface/devices/surface-duo).  You may have to update your website (or app) to display better along the seam.  For more information about adapting your website (or app) to the seam, navigate to [How to work with the seam](/dual-screen/introduction#how-to-work-with-the-seam).

The [Device Toolbar](../device-mode/index.md#simulate-a-mobile-viewport) has additional features to help you test your website or app in multiple postures and orientations.  Choose **Rotate** (![Rotate](../media/rotate-dark-icon.msft.png)) to rotate the viewport to landscape orientation. Combine the feature with **Span** (![Span](../media/span-dark-icon.msft.png)) to toggle between single-screen or folded and dual-screen or unfolded postures.  Together, the features allow you to test your website or app in all four possible postures and orientations.

:::image type="complex" source="../media/experiments-dual-screen-emulation-rotate-span.msft.png" alt-text="Matrix of postures and orientations for dual-screen and foldable devices" lightbox="../media/experiments-dual-screen-emulation-rotate-span.msft.png":::
   Matrix of postures and orientations for dual-screen and foldable devices
:::image-end:::

The **Experimental Web Platform features** (![ExperimentalApis](../media/experimental-apis-dark-icon.msft.png)) icon displays the state of the **Experimental Web Platform features** flag.  If the flag is turned on, the icon is highlighted.  If the flag is turned off, the icon is not highlighted.  To turn on (or off) the flag, either choose the icon or navigate to `edge://flags` and toggle the flag.

> [!NOTE]
> The following is a list of current known issues.
>
> *   When you use a [Microsoft Remote Desktop client](/windows-server/remote/remote-desktop-services/clients/remote-desktop-clients) to connect to a remote PC and emulate the [Surface Duo](https://www.microsoft.com/surface/devices/surface-duo) or [Samsung Galaxy Fold](https://www.samsung.com/global/galaxy/galaxy-fold), the pointer may shake or stutter.  If you run into the issue, contact the Microsoft Edge DevTools team.


<!-- ====================================================================== -->
## Additional Resources

Here are additional resources that may help you enhance your website (or app) for dual-screen devices.

*   For more information about web development on dual-screen devices, navigate to [Dual-screen web experiences](/dual-screen/web/index).
*   Install the [Surface Duo emulator](/dual-screen/android/use-emulator).  The Surface Duo emulator is different from the emulator in Microsoft Edge, runs Android, and integrates with [Android Studio](https://developer.android.com/studio/).  For more information, navigate to [Get the Surface Duo SDK](/dual-screen/android/get-duo-sdk).
