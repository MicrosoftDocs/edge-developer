---
title: Get Started with Remote Debugging the Surface Duo emulator
author: zoherghadyali
ms.author: zoghadya
ms.date: 04/28/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, remote debugging, android, surface duo
---

# Get Started with Remote Debugging Surface Duo emulators

In this article, you walk through the process of remotely debugging your web content in the [Microsoft Edge app][AndroidEdge] on a [Surface Duo][SurfaceDuo] emulator from a desktop instance of [Microsoft Edge][DesktopEdge]. For information on debugging on a Surface Duo device, follow our guide for [remote debugging Android devices][RemoteDebuggingAndroid].

## Step 1: Navigate to edge://inspect

Open a desktop instance of [Microsoft Edge][DesktopEdge], and navigate to `edge://inspect`.

> ##### Figure 1  
> The `edge://inspect` page in Microsoft Edge on the desktop
> ![The edge://inspect page in Microsoft Edge][ImageEdgeInspect] on the desktop

> [!NOTE]
> The `edge://inspect` page may not recognize the [Surface Duo emulator][DuoEmulator] if you launch the emulator first and then navigate to the `edge://inspect` page. Follow the steps in order to avoid having to restart the emulator.

## Step 2: Launch the Surface Duo emulator

> [!IMPORTANT]
> You must get the [Surface Duo SDK][DuoSdk] in order to successfully run the [Surface Duo emulator][DuoEmulator]. Check out [this guide for the Surface Duo SDK][DuoSdkdocs] first before trying the remaining steps.

Launch the [Surface Duo emulator][DuoEmulator].

> ##### Figure 2
> The Surface Duo emulator
> ![The Surface Duo emulator][ImageDuoEmulator]  

## Step 3: Load your web content in Microsoft Edge on the Surface Duo emulator

Drag the Favorites Tray up on either screen of the [Surface Duo emulator][DuoEmulator] to pull up the Apps Drawer. Click **Edge** to launch the [Microsoft Edge app][AndroidEdge] app on the emulator.

> ##### Figure 3
> The Microsoft Edge app on the Surface Duo emulator
> ![The Microsoft Edge app on the Surface Duo emulator][ImageDuoEmulatorEdge]  

Navigate to the website or app that you want to debug in the [Microsoft Edge app][AndroidEdge].

## Step 4: Debug your web content from the Surface Duo emulator in desktop Microsoft Edge

Switch back to the desktop instance of [Microsoft Edge][DesktopEdge]. The `edge://inspect` page now shows the **SurfaceDuoEmulator** with a list of the tabs or [PWAs][PwaDocs] that are running on the [Surface Duo emulator][DuoEmulator].

> ##### Figure 4
> The `edge://inspect` page displays a list of the open tabs in the Microsoft Edge app running on the emulator
> ![The edge://inspect page displays a list of the open tabs in the Microsoft Edge app running on the emulator][ImageEdgeInspectTargets]  

> [!NOTE]
> If you do not see **SurfaceDuoEmulator** on the `edge://inspect` page, try opening or closing tabs in the [Microsoft Edge app][AndroidEdge] on the [Surface Duo Emulator][DuoEmulator]. For additional troubleshooting steps, see the [troubleshooting section for Android devices][TroubleshootingAndroid].

Click **inspect** for the web content you want to debug. The [Microsoft Edge DevTools][DevToolsDocs] will open in a new window. Click **Toggle Screencast** ![Toggle Screencast][ImageToggleScreencastIcon] to view the content on your [Surface Duo emulator][DuoEmulator] in your DevTools window. You are now able to use the full power of the Microsoft Edge DevTools to debug your web content running on the [Surface Duo emulator][DuoEmulator].

> ##### Figure 5
> Using the Microsoft Edge DevTools against Bing in the Microsoft Edge app on the Surface Duo emulator
> ![Using the Microsoft Edge DevTools against Bing in the Microsoft Edge app on the Surface Duo emulator][ImageDevTools]  

> [!NOTE]
> If you span the [Microsoft Edge app][AndroidEdge] across both screens in the emulator, the screencast will reflect the new size of the app but not the hinge. To understand how the hinge impacts the layout of your web content, use the [Surface Duo emulator][DuoEmulator] instead of the screencast.

## Additional Resources

The web is a great platform for the new class of foldable and dual-screen devices because you can write your HTML, CSS, and JavaScript once and have it look great across single-screen, dual-screen, and foldable devices. Check out the additional resources below to get started building great web content for these new devices:

- [Documentation for creating apps on dual-screen devices][DualScreenDocs]
- [The Microsoft Edge web platform explainer for new APIs to build web experiences on foldable and dual-screen devices][WebPlatformExplainer]
- [Recording of Microsoft 365 Developer Day session: How to build dual-screen experiences for websites and web apps][DeveloperDay]

<!-- image links -->  
[ImageEdgeInspect]: /microsoft-edge/devtools-guide-chromium/media/remote-debugging-surface-duo-inspect-page.msft.png "Figure 1: The edge://inspect page in desktop Microsoft Edge"
[ImageDuoEmulator]: /microsoft-edge/devtools-guide-chromium/media/remote-debugging-surface-duo-emulator.msft.png "Figure 2: The Surface Duo emulator"
[ImageDuoEmulatorEdge]: /microsoft-edge/devtools-guide-chromium/media/remote-debugging-surface-duo-emulator-edge.msft.png "Figure 3: The Microsoft Edge app on the Surface Duo emulator"
[ImageEdgeInspectTargets]: /microsoft-edge/devtools-guide-chromium/media/remote-debugging-surface-duo-inspect-page-with-targets.msft.png "Figure 4: The edge://inspect page displays a list of the tabs in the Microsoft Edge app on the emulator"
[ImageToggleScreencastIcon]: images/toggle-screencast-icon.msft.png
[ImageDevTools]: /microsoft-edge/devtools-guide-chromium/media/remote-debugging-surface-duo-devtools.msft.png "Figure 5: Using the Microsoft Edge DevTools against Bing in the Microsoft Edge app on the Surface Duo emulator"

<!-- links -->  
[RemoteDebuggingAndroid]: /microsoft-edge/devtools-guide-chromium/remote-debugging/index "Get Started with Remote Debugging Android Devices"
[PwaDocs]: /microsoft-edge/progressive-web-apps-chromium/index "Progressive Web Apps on Windows"
[DevToolsDocs]: /microsoft-edge/devtools-guide-chromium "Microsoft Edge (Chromium) Developer Tools"
[TroubleshootingAndroid]: /microsoft-edge/devtools-guide-chromium/remote-debugging/index#troubleshooting-devtools-is-not-detecting-the-android-device "Troubleshooting: DevTools is not detecting the Android device"

[AndroidEdge]: https://play.google.com/store/apps/details?id=com.microsoft.emmx "Microsoft Edge Android app"
[SurfaceDuo]: https://www.microsoft.com/surface/devices/surface-duo "Introducing Surface Duo"
[DesktopEdge]: https://www.microsoft.com/edge/ "Introducing the new Microsoft Edge"
[DuoEmulator]: https://docs.microsoft.com/dual-screen/android/use-emulator "Use the Surface DUo emulator"
[DuoSdk]: https://www.microsoft.com/download/details.aspx?id=100847 "Surface Duo SDK Preview Release"
[DuoSdkDocs]: https://docs.microsoft.com/dual-screen/android/get-duo-sdk "Get the Surface Duo SDK"
[DualScreenDocs]: https://docs.microsoft.com/dual-screen/ "Create apps for dual-screen devices"
[WebPlatformExplainer]: https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/master/Foldables/explainer.md "Web Platform Primitives for Enlightened Experiences on Foldable Devices"
[DeveloperDay]: https://youtu.be/DXrZWsqXPVc "How to build dual-screen experiences for the website and web apps"
