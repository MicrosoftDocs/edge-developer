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

In this article, you walk through the process of remotely debugging your web content in the [Microsoft Edge app](https://play.google.com/store/apps/details?id=com.microsoft.emmx) on a [Surface Duo](https://www.microsoft.com/surface/devices/surface-duo) emulator from a desktop instance of [Microsoft Edge](https://www.microsoft.com/edge).  For information on debugging on a Surface Duo device, follow our guide for [remote debugging Android devices](./index.md).


<!-- ====================================================================== -->
## Before you begin

Install the [Surface Duo SDK](https://www.microsoft.com/download/details.aspx?id=100847) before running the [Surface Duo emulator](/dual-screen/android/use-emulator).  For more information, navigate to [Get the Surface Duo SDK](/dual-screen/android/get-duo-sdk).


<!-- ====================================================================== -->
## Step 1: Navigate to edge://inspect

Open a desktop instance of [Microsoft Edge](https://www.microsoft.com/edge), and navigate to `edge://inspect`.

:::image type="complex" source="../media/remote-debugging-surface-duo-inspect-page.msft.png" alt-text="The edge://inspect page in Microsoft Edge on the desktop" lightbox="../media/remote-debugging-surface-duo-inspect-page.msft.png":::
   The `edge://inspect` page in Microsoft Edge on the desktop
:::image-end:::

> [!NOTE]
> If the `edge://inspect` page does not recognize the [Surface Duo emulator](/dual-screen/android/use-emulator), restart the emulator.


<!-- ====================================================================== -->
## Step 2: Launch the Surface Duo emulator

Launch the [Surface Duo emulator](/dual-screen/android/use-emulator).  Notice that the emulator displays 2 different screens running on the emulator.

:::image type="complex" source="../media/remote-debugging-surface-duo-emulator.msft.png" alt-text="The Surface Duo emulator" lightbox="../media/remote-debugging-surface-duo-emulator.msft.png":::
   The Surface Duo emulator
:::image-end:::


<!-- ====================================================================== -->
## Step 3: Load your web content in Microsoft Edge on the Surface Duo emulator

On either screen, swipe up on the Favorites Tray of the [Surface Duo emulator](/dual-screen/android/use-emulator) to display the Apps Drawer.  Choose **Edge** to launch the [Microsoft Edge app](https://play.google.com/store/apps/details?id=com.microsoft.emmx).

:::image type="complex" source="../media/remote-debugging-surface-duo-emulator-edge.msft.png" alt-text="The Microsoft Edge app on the Surface Duo emulator" lightbox="../media/remote-debugging-surface-duo-emulator-edge.msft.png":::
   The Microsoft Edge app on the Surface Duo emulator
:::image-end:::

Navigate to the website or app that you want to debug in the [Microsoft Edge app](https://play.google.com/store/apps/details?id=com.microsoft.emmx).


<!-- ====================================================================== -->
## Step 4: Debug your web content from the Surface Duo emulator

Switch back to the desktop instance of [Microsoft Edge](https://www.microsoft.com/edge).  The `edge://inspect` page now shows the **SurfaceDuoEmulator** with a list of the open tabs or [PWAs](../../progressive-web-apps-chromium/index.md) that are running on the [Surface Duo emulator](/dual-screen/android/use-emulator).

:::image type="complex" source="../media/remote-debugging-surface-duo-inspect-page-with-targets.msft.png" alt-text="The edge://inspect page displays a list of the open tabs in the Microsoft Edge app running on the emulator" lightbox="../media/remote-debugging-surface-duo-inspect-page-with-targets.msft.png":::
   The `edge://inspect` page displays a list of the open tabs in the Microsoft Edge app running on the emulator
:::image-end:::

> [!NOTE]
> If **SurfaceDuoEmulator** is not displayed on the `edge://inspect` page, try opening or closing tabs in the [Microsoft Edge app](https://play.google.com/store/apps/details?id=com.microsoft.emmx) on the [Surface Duo Emulator](/dual-screen/android/use-emulator).  For additional troubleshooting steps, navigate to [troubleshooting section for Android devices](./index.md#troubleshooting-devtools-is-not-detecting-the-android-device).

From the list of open tabs running on the emulator, choose **inspect** on the tab that has the web content to be debugged.  The [Microsoft Edge DevTools](../index.md) will open in a new window.  Choose **Toggle Screencast** (![Toggle Screencast](../media/toggle-screencast-icon.msft.png)) to view the web content from your [Surface Duo emulator](/dual-screen/android/use-emulator) in the DevTools window.  You are now able to use the Microsoft Edge DevTools to debug your web content on the [Surface Duo emulator](/dual-screen/android/use-emulator).

:::image type="complex" source="../media/remote-debugging-surface-duo-devtools.msft.png" alt-text="Using the Microsoft Edge DevTools to debug Bing in the Microsoft Edge app on the Surface Duo emulator" lightbox="../media/remote-debugging-surface-duo-devtools.msft.png":::
   Using the Microsoft Edge DevTools to debug Bing in the Microsoft Edge app on the Surface Duo emulator
:::image-end:::

> [!NOTE]
> If you span the [Microsoft Edge app](https://play.google.com/store/apps/details?id=com.microsoft.emmx) across both screens in the emulator, the screencast will reflect the new size of the app but not the hinge.  To understand how the hinge impacts the layout of your web content, use the [Surface Duo emulator](/dual-screen/android/use-emulator) instead of the screencast.


<!-- ====================================================================== -->
## Additional Resources

The web is a great platform for the new class of foldable and dual-screen devices because you may write your HTML, CSS, and JavaScript once and have it look great across single-screen, dual-screen, and foldable devices.  For more information, navigate to the following additional resources to get started building web content for these new devices.

*   [Documentation for creating apps on dual-screen devices](/dual-screen/index)
*   [The Microsoft Edge web platform explainer for new APIs to build web experiences on foldable and dual-screen devices](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/master/Foldables/explainer.md)
*   [Recording of Microsoft 365 Developer Day session: How to build dual-screen experiences for websites and web apps](https://youtu.be/DXrZWsqXPVc)
