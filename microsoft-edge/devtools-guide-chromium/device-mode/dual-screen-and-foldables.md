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

In Microsoft Edge version 89 or later, you may emulate the following dual-screen and foldable devices.  

*   [Surface Duo][SurfaceDevicesDuo]  
*   [Samsung Galaxy Fold][SamsungMobileGalaxyFold]  
    
Emulate the devices and toggle between the following postures.  

*   Single-screen or folded posture  
*   Dual-screen or unfolded posture  
    
[Turn on experimental Web Platform APIs](#turn-on-experimental-apis) and use the [CSS media screen-spanning feature][DualScreenDocsCssMedia] and [JavaScript getWindowSegments API][DualScreenDocsJSAPI] to enhance your website \(or app\) for dual-screen and foldable devices.  

:::image type="complex" source="../media/experiments-surface-duo-emulation.msft.png" alt-text="Emulate Surface Duo in Microsoft Edge" lightbox="../media/experiments-surface-duo-emulation.msft.png":::  
   Emulate Surface Duo in Microsoft Edge  
:::image-end:::  

## Turn on experimental APIs  

To use the [CSS media screen-spanning feature][DualScreenDocsCssMedia] and [JavaScript getWindowSegments API][DualScreenDocsJSAPI], turn on the `Experimental Web Platform features` flag in Microsoft Edge.  Complete the following steps.  

1.  Navigate to `edge://flags`.  
1.  In the **Search flags** textbox, enter `Experimental Web Platform features`, choose the **Experimental Web Platform features** flag, and change **Disabled** to **Enabled**.  
1.  Restart Microsoft Edge.  
    
:::image type="complex" source="../media/experiments-dual-screen-emulation-edge-flags.msft.png" alt-text="Turn on the Experimental Web Platform features flag" lightbox="../media/experiments-dual-screen-emulation.msft.png":::
   Turn on the **Experimental Web Platform features** flag  
:::image-end:::  

> [!NOTE]
> If you are using [CSS media queries][DualScreenDocsCssMedia] or the [JavaScript Windows Segment Enumeration API][DualScreenDocsJSAPI] to enhance your website or app for the [Surface Duo][SurfaceDevicesDuo], you must also turn on the **Experimental Web Platform features** flag in the [Android Microsoft Edge app][GooglePlayMicrosoftEdge] on your [Surface Duo][SurfaceDevicesDuo] device.  
> 
> If the **Experimental Web Platform features** flag is turned on in [desktop Microsoft Edge][MicrosoftEdge] and turned off in the [Android Microsoft Edge app][GooglePlayMicrosoftEdge], the behavior of your website or app in the Surface Duo emulator in desktop Microsoft Edge does not match with the [Android Microsoft Edge app][GooglePlayMicrosoftEdge] on [Surface Duo][SurfaceDevicesDuo].  Ensure that the flags match across Android and desktop Microsoft Edge to successfully use the Surface Duo emulator in [desktop Microsoft Edge][MicrosoftEdge].  

## Test on foldable and dual-screen devices  

When you emulate the [Surface Duo][SurfaceDevicesDuo] in a dual-screen posture in Microsoft Edge, the seam \(the space between the two screens\) is drawn over your website or app.  

The emulated display matches the way your website \(or app\) renders in the [Microsoft Edge Android app][GooglePlayMicrosoftEdge] while running on [Surface Duo][SurfaceDevicesDuo].  You may have to update your website \(or app\) to display better along the seam.  For more information about adapting your website \(or app\) to the seam, navigate to [How to work with the seam][DualScreenIntroductionHowWorkSeam].  

The [Device Toolbar][DevtoolsDeviceModeIndexSimulateMobileViewport] has additional features to help you test your website or app in multiple postures and orientations.  Choose **Rotate** \(![Rotate](../media/rotate-dark-icon.msft.png)\) to rotate the viewport to landscape orientation. Combine the feature with **Span** \(![Span](../media/span-dark-icon.msft.png)\) to toggle between single-screen or folded and dual-screen or unfolded postures.  Together, the features allow you to test your website or app in all four possible postures and orientations.  

:::image type="complex" source="../media/experiments-dual-screen-emulation-rotate-span.msft.png" alt-text="Matrix of postures and orientations for dual-screen and foldable devices" lightbox="../media/experiments-dual-screen-emulation-rotate-span.msft.png":::
   Matrix of postures and orientations for dual-screen and foldable devices  
:::image-end:::  

The **Experimental Web Platform features** \(![ExperimentalApis](../media/experimental-apis-dark-icon.msft.png)\) icon displays the state of the **Experimental Web Platform features** flag.  If the flag is turned on, the icon is highlighted.  If the flag is turned off, the icon is not highlighted.  To turn on \(or off\) the flag, either choose the icon or navigate to `edge://flags` and toggle the flag.  

> [!NOTE]
> The following is a list of current known issues.  
> 
> *   When you use a [Microsoft Remote Desktop client][RemoteDesktopClientDocs] to connect to a remote PC and emulate the [Surface Duo][SurfaceDevicesDuo] or [Samsung Galaxy Fold][SamsungMobileGalaxyFold], the pointer may shake or stutter.  If you run into the issue, [send feedback](#getting-in-touch-with-the-microsoft-edge-devtools-team).  

## Additional Resources  

Here are additional resources that may help you enhance your website \(or app\) for dual-screen devices.  

*   For more information about web development on dual-screen devices, navigate to [Dual-screen web experiences][DualScreenWebIndex].  
*   Install the [Surface Duo emulator][DualScreenAndroidUseEmulator].  The Surface Duo emulator is different from the emulator in Microsoft Edge, runs Android, and integrates with [Android Studio][AndroidDeveloperStudio].  For more information, navigate to [Get the Surface Duo SDK][DualScreenAndroidGetDuoSdk].  

## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  

[DevtoolsDeviceModeIndexSimulateMobileViewport]: ../device-mode/index.md#simulate-a-mobile-viewport "Simulate Mobile Devices with Device Mode in Microsoft Edge DevTools | Microsoft Edge"  

[DualScreenWebIndex]: /dual-screen/web/index "Dual-screen web experiences | Microsoft Docs"  
[DualScreenAndroidGetDuoSdk]: /dual-screen/android/get-duo-sdk "Get the Surface Duo emulator | Microsoft Docs"  
[DualScreenIntroductionHowWorkSeam]: /dual-screen/introduction#how-to-work-with-the-seam "How to work with the seam - Introduction to dual-screen devices | Microsoft Docs"  
[DualScreenAndroidUseEmulator]: /dual-screen/android/use-emulator "Use the Surface Duo emulator | Microsoft Docs"  
[DualScreenDocsCssMedia]: /dual-screen/web/css-media-spanning "CSS media screen-spanning feature for dual-screen detection | Microsoft Docs"  
[DualScreenDocsJSAPI]: /dual-screen/web/javascript-getwindowsegments "The getWindowSegments JavaScript API for dual-screen devices | Microsoft Docs"  

[RemoteDesktopClientDocs]: /windows-server/remote/remote-desktop-services/clients/remote-desktop-clients "Remote Desktop clients | Microsoft Docs"

[MicrosoftEdge]: https://www.microsoft.com/edge "Microsoft Edge"  

[SurfaceDevicesDuo]: https://www.microsoft.com/surface/devices/surface-duo "Surface Duo | Microsoft Surface"  

[AndroidDeveloperStudio]: https://developer.android.com/studio/ "Android Studio"  

[GooglePlayMicrosoftEdge]: https://play.google.com/store/apps/details?id=com.microsoft.emmx "Microsoft Edge | Google Play"  

[SamsungMobileGalaxyFold]: https://www.samsung.com/global/galaxy/galaxy-fold "Galaxy Fold | Samsung"  
