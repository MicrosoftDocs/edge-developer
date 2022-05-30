---
title: Emulate dual-screen and foldable devices
description: Use virtual devices in Microsoft Edge to enhance your website for dual-screen and foldable devices.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 05/04/2021
---
# Emulate dual-screen and foldable devices

You can emulate the following dual-screen and foldable devices in Microsoft Edge DevTools.

* [Surface Duo](https://www.microsoft.com/surface/devices/surface-duo)
* [Samsung Galaxy Fold](https://www.samsung.com/global/galaxy/galaxy-fold)

Emulate the devices and toggle between the following postures.

*  Single-screen or folded posture
*  Dual-screen or unfolded posture

The APIs are available in Microsoft Edge 97 and later. If you are not using Microsoft Edge 97 or later, you need to turn on experimental web platform features to use the APIs.

[Turn on experimental Web Platform APIs](#turn-on-experimental-apis) and use the [CSS viewport segments media feature](/dual-screen/web/css-viewport-segments) and [JavaScript viewport segments](/dual-screen/web/javascript-viewport-segments) to enhance your website (or app) for dual-screen and foldable devices.

![Emulating Surface Duo in Microsoft Edge.](../media/experiments-surface-duo-emulation.msft.png)


<!-- ====================================================================== -->
## Turn on experimental APIs

To use the [CSS viewport segments media feature](/dual-screen/web/css-viewport-segments) and [JavaScript viewport segments](/dual-screen/web/javascript-viewport-segments), turn on the `Experimental Web Platform features` flag in Microsoft Edge, as follows:

1. Go to `edge://flags`.

1. In the **Search flags** text box, enter `Experimental Web Platform features`, select the **Experimental Web Platform features** flag, and change **Disabled** to **Enabled**.

1. Restart Microsoft Edge.

:::image type="content" source="../media/experiments-dual-screen-emulation-edge-flags.msft.png" alt-text="Turn on the Experimental Web Platform features flag." lightbox="../media/experiments-dual-screen-emulation.msft.png":::


### Surface Duo

If you are using [CSS viewport segments media feature](/dual-screen/web/css-viewport-segments) or the [JavaScript viewport segments](/dual-screen/web/javascript-viewport-segments) to enhance your website or app for the [Surface Duo](https://www.microsoft.com/surface/devices/surface-duo), you must also turn on the **Experimental Web Platform features** flag in the [Android Microsoft Edge app](https://play.google.com/store/apps/details?id=com.microsoft.emmx) on your [Surface Duo](https://www.microsoft.com/surface/devices/surface-duo) device.

#### Matching the flags match across Android and desktop Microsoft Edge

If the **Experimental Web Platform features** flag is turned on in [desktop Microsoft Edge](https://www.microsoft.com/edge), and is turned off in the [Android Microsoft Edge app](https://play.google.com/store/apps/details?id=com.microsoft.emmx), the behavior of your website or app in the Surface Duo emulator in desktop Microsoft Edge doesn't match with the [Android Microsoft Edge app](https://play.google.com/store/apps/details?id=com.microsoft.emmx) on [Surface Duo](https://www.microsoft.com/surface/devices/surface-duo).  

Make sure that the flags match across Android and desktop Microsoft Edge, to successfully use the Surface Duo emulator in [desktop Microsoft Edge](https://www.microsoft.com/edge).


<!-- ====================================================================== -->
## Test on foldable and dual-screen devices

When you emulate the [Surface Duo](https://www.microsoft.com/surface/devices/surface-duo) in a dual-screen posture in Microsoft Edge, the seam (the space between the two screens) is drawn over your website or app.

The emulated display matches the way your website (or app) renders in the [Microsoft Edge Android app](https://play.google.com/store/apps/details?id=com.microsoft.emmx) while running on [Surface Duo](https://www.microsoft.com/surface/devices/surface-duo).  You may have to update your website (or app) to display better along the seam.  For more information about adapting your website (or app) to the seam, see [How to work with the seam](/dual-screen/introduction#how-to-work-with-the-seam).

The [Device Toolbar](../device-mode/index.md#simulate-a-mobile-viewport) has additional features to help you test your website or app in multiple postures and orientations.  Click **Rotate** (![Rotate.](../media/rotate-dark-icon.msft.png)) to rotate the viewport to landscape orientation. Combine the feature with **Span** (![Span.](../media/span-dark-icon.msft.png)) to toggle between single-screen or folded and dual-screen or unfolded postures.  Together, the features allow you to test your website or app in all four possible postures and orientations.

![Matrix of postures and orientations for dual-screen and foldable devices.](../media/experiments-dual-screen-emulation-rotate-span.msft.png)

The **Experimental Web Platform features** (![ExperimentalApis.](../media/experimental-apis-dark-icon.msft.png)) icon displays the state of the **Experimental Web Platform features** flag.  If the flag is turned on, the icon is highlighted.  If the flag is turned off, the icon isn't highlighted.  To turn on (or off) the flag, either click the icon or go to `edge://flags` and toggle the flag.

### Known issues

#### Pointer shaking or stuttering

When you use a [Microsoft Remote Desktop client](/windows-server/remote/remote-desktop-services/clients/remote-desktop-clients) to connect to a remote PC and emulate the [Surface Duo](https://www.microsoft.com/surface/devices/surface-duo) or [Samsung Galaxy Fold](https://www.samsung.com/global/galaxy/galaxy-fold), the pointer may shake or stutter.  If you run into the issue, contact the Microsoft Edge DevTools team.


<!-- ====================================================================== -->
## Additional Resources

Here are additional resources that may help you enhance your website (or app) for dual-screen devices.

*  For more information about web development on dual-screen devices, see [Dual-screen web experiences](/dual-screen/web/index).

*  Install the [Surface Duo emulator](/dual-screen/android/use-emulator).  The Surface Duo emulator is different from the emulator in Microsoft Edge, runs Android, and integrates with [Android Studio](https://developer.android.com/studio/).  See [Get the Surface Duo SDK](/dual-screen/android/get-duo-sdk).
