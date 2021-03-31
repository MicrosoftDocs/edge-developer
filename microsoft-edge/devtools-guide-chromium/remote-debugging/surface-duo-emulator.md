---
description: Get started with Remote Debugging Surface Duo emulators.
title: Get started with Remote Debugging Surface Duo emulators
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 03/25/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, remote debugging, android, surface duo
---
# Get started with remote debugging Surface Duo emulators  

In this article, you walk through the process of remotely debugging your web content in the [Microsoft Edge app][GooglePlayStoreAppsComMicrosoftEmmx] on a [Surface Duo][MicrosoftSurfaceDevicesSurfaceDuo] emulator from a desktop instance of [Microsoft Edge][MicrosoftEdge].  For information on debugging on a Surface Duo device, follow our guide for [remote debugging Android devices][DevtoolsRemoteDebuggingMain].  

## Before you begin

Install the [Surface Duo SDK][MicrosoftDownload100847] before running the [Surface Duo emulator][DualScreenAndroidUseEmulator].  For more information, navigate to [Get the Surface Duo SDK][DualScreenAndroidGetDuoSdk].  

## Step 1: Navigate to edge://inspect  

Open a desktop instance of [Microsoft Edge][MicrosoftEdge], and navigate to `edge://inspect`.  

:::image type="complex" source="../media/remote-debugging-surface-duo-inspect-page.msft.png" alt-text="The edge://inspect page in Microsoft Edge on the desktop" lightbox="../media/remote-debugging-surface-duo-inspect-page.msft.png":::
   The `edge://inspect` page in Microsoft Edge on the desktop  
:::image-end:::

> [!NOTE]
> If the `edge://inspect` page does not recognize the [Surface Duo emulator][DualScreenAndroidUseEmulator], restart the emulator.  

## Step 2: Launch the Surface Duo emulator  

Launch the [Surface Duo emulator][DualScreenAndroidUseEmulator].  Notice that the emulator displays 2 different screens running on the emulator.  

:::image type="complex" source="../media/remote-debugging-surface-duo-emulator.msft.png" alt-text="The Surface Duo emulator" lightbox="../media/remote-debugging-surface-duo-emulator.msft.png":::
   The Surface Duo emulator  
:::image-end:::  

## Step 3: Load your web content in Microsoft Edge on the Surface Duo emulator  

On either screen, swipe up on the Favorites Tray of the [Surface Duo emulator][DualScreenAndroidUseEmulator] to display the Apps Drawer.  Choose **Edge** to launch the [Microsoft Edge app][GooglePlayStoreAppsComMicrosoftEmmx].  

:::image type="complex" source="../media/remote-debugging-surface-duo-emulator-edge.msft.png" alt-text="The Microsoft Edge app on the Surface Duo emulator" lightbox="../media/remote-debugging-surface-duo-emulator-edge.msft.png":::
   The Microsoft Edge app on the Surface Duo emulator  
:::image-end:::  

Navigate to the website or app that you want to debug in the [Microsoft Edge app][GooglePlayStoreAppsComMicrosoftEmmx].  

## Step 4: Debug your web content from the Surface Duo emulator  

Switch back to the desktop instance of [Microsoft Edge][MicrosoftEdge].  The `edge://inspect` page now shows the **SurfaceDuoEmulator** with a list of the open tabs or [PWAs][ProgressiveWebAppsIndex] that are running on the [Surface Duo emulator][DualScreenAndroidUseEmulator].  

:::image type="complex" source="../media/remote-debugging-surface-duo-inspect-page-with-targets.msft.png" alt-text="The edge://inspect page displays a list of the open tabs in the Microsoft Edge app running on the emulator" lightbox="../media/remote-debugging-surface-duo-inspect-page-with-targets.msft.png":::
   The `edge://inspect` page displays a list of the open tabs in the Microsoft Edge app running on the emulator  
:::image-end:::  

> [!NOTE]
> If **SurfaceDuoEmulator** is not displayed on the `edge://inspect` page, try opening or closing tabs in the [Microsoft Edge app][GooglePlayStoreAppsComMicrosoftEmmx] on the [Surface Duo Emulator][DualScreenAndroidUseEmulator].  For additional troubleshooting steps, navigate to [troubleshooting section for Android devices][DevtoolsRemoteDebuggingIndexTroubleshootingDevtoolsIsNotDetectingAndroidDevice].  

From the list of open tabs running on the emulator, choose **inspect** on the tab that has the web content to be debugged.  The [Microsoft Edge DevTools][DevtoolsIndex] will open in a new window.  Choose **Toggle Screencast** \(![Toggle Screencast](../media/toggle-screencast-icon.msft.png)\) to view the web content from your [Surface Duo emulator][DualScreenAndroidUseEmulator] in the DevTools window.  You are now able to use the Microsoft Edge DevTools to debug your web content on the [Surface Duo emulator][DualScreenAndroidUseEmulator].  

:::image type="complex" source="../media/remote-debugging-surface-duo-devtools.msft.png" alt-text="Using the Microsoft Edge DevTools to debug Bing in the Microsoft Edge app on the Surface Duo emulator" lightbox="../media/remote-debugging-surface-duo-devtools.msft.png":::
   Using the Microsoft Edge DevTools to debug Bing in the Microsoft Edge app on the Surface Duo emulator  
:::image-end:::  

> [!NOTE]
> If you span the [Microsoft Edge app][GooglePlayStoreAppsComMicrosoftEmmx] across both screens in the emulator, the screencast will reflect the new size of the app but not the hinge.  To understand how the hinge impacts the layout of your web content, use the [Surface Duo emulator][DualScreenAndroidUseEmulator] instead of the screencast.  

## Additional Resources  

The web is a great platform for the new class of foldable and dual-screen devices because you may write your HTML, CSS, and JavaScript once and have it look great across single-screen, dual-screen, and foldable devices.  For more information, navigate to the following additional resources to get started building web content for these new devices.  

*   [Documentation for creating apps on dual-screen devices][DualScreenIndex]  
*   [The Microsoft Edge web platform explainer for new APIs to build web experiences on foldable and dual-screen devices][GithubMicrosoftedgeMsedgeexplainersFoldablesExplainer]  
*   [Recording of Microsoft 365 Developer Day session: How to build dual-screen experiences for websites and web apps][YoutubeDxrzwsqxpvc]  

## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  

[DevtoolsIndex]: ../index.md "Microsoft Edge (Chromium) Developer Tools | Microsoft Docs"  
[ProgressiveWebAppsIndex]: ../../progressive-web-apps-chromium/index.md "Progressive Web Apps on Windows | Microsoft Docs"  
[DevtoolsRemoteDebuggingMain]: ./index.md "Get started with remote debugging Android devices | Microsoft Docs"  
[DevtoolsRemoteDebuggingIndexTroubleshootingDevtoolsIsNotDetectingAndroidDevice]: ./index.md#troubleshooting-devtools-is-not-detecting-the-android-device "Troubleshooting: DevTools is not detecting the Android device - Get started with remote debugging Android devices | Microsoft Docs"  

[DualScreenIndex]: /dual-screen/index "Create apps for dual-screen devices | Microsoft Docs"  
[DualScreenAndroidUseEmulator]: /dual-screen/android/use-emulator "Use the Surface DUo emulator | Microsoft Docs"  
[DualScreenAndroidGetDuoSdk]: /dual-screen/android/get-duo-sdk "Get the Surface Duo SDK | Microsoft Docs"  

[MicrosoftEdge]: https://www.microsoft.com/edge "Introducing the new Microsoft Edge"  
[MicrosoftSurfaceDevicesSurfaceDuo]: https://www.microsoft.com/surface/devices/surface-duo "The new Surface Duo | Microsoft Surface"  
[MicrosoftDownload100847]: https://www.microsoft.com/download/details.aspx?id=100847 "Download Surface Duo SDK Preview Release | Microsoft Download Center"  

[GooglePlayStoreAppsComMicrosoftEmmx]: https://play.google.com/store/apps/details?id=com.microsoft.emmx "Microsoft Edge: Web Browser | GooglePlay"  

[GithubMicrosoftedgeMsedgeexplainersFoldablesExplainer]: https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/master/Foldables/explainer.md "Web Platform Primitives for Enlightened Experiences on Foldable Devices - MicrosoftEdge/MSEdgeExplainers | GitHub"  

[YoutubeDxrzwsqxpvc]: https://youtu.be/DXrZWsqXPVc "How to build dual-screen experiences for the website and web apps | YouTube"  
