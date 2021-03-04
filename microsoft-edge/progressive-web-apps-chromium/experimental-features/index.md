---
description: The latest experimental features in Microsoft Edge for Web Apps
title: Experimental features
author: MSEdgeTeam
ms.author: msedgedevex
ms.date: 03/02/2021 
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, experiment, progressive web apps, web apps, PWAs, PWA
---
# Experimental features  

Microsoft Edge provide access to experimental features that are still in development.  You may test and [provide feedback](#providing-feedback-on-experimental-features) before each feature is released.  

While experimental features are available in all channels of Microsoft Edge, you may get the latest experimental features using the Microsoft Edge Canary channel.  

## Turn on experimental features  

To turn on \(or off\) experimental features in Microsoft Edge, complete the following steps.  

  
1.  Open the Microsoft Edge flags page by typing `edge://flags` into the address bar. Make sure you are using a version of Microsoft Edge that has the feature flag.

1.  Find the relevant experimental flag from this article and change it's status to `Enabled`. Each experiment will usually have it's own flag to toggle on or off.
    
1.  Close and restart Microsoft Edge  

    
> [!NOTE]
> Experimental features are constantly being updated and may cause performance issues.  To turn off an experimental feature, open the **edge://flags** again page change the status of the feature to `Disabled`.  

## Experimental features  

The following sections describe the new experimental web app features that are available for testing purposes on Microsoft Edge.  

| Experimental feature | Microsoft Edge version | Platform 
|:--- |:--- | :--- 
| [Protocol Handling](#enable-webhint) | 85 or later | All 
| [URL Link Handling](#enable-network-console) | 85 or later | Windows  
| [Window Controls Overlay](#source-order-viewer) | 86 or later | Windows 
| [Place holder](#enable-keyboard-shortcut-editor) | 87 or later | All |

### Protocol Handling  

This experimental feature provides a number of new visualizations to help you debug CSS grid layouts.  To preview the latest experimental features, [enable this experiment](#turn-on-experimental-features) and reload DevTools.  This experiment is on by default in Microsoft Edge version 87 or later.  

#### Viewing on-hover grid overlays with the Inspect tool  

The **Inspect** tool provides a quick way to identify and visualize CSS Grid layouts in a website by hovering over them with the mouse.  Choose the **Inspect** \(![Inspect](../media/inspect-icon.msft.png)\) icon in the top-left corner of DevTools.  Then, hover over a Grid element on the website you are debugging.  Outlines are displayed around the grid, and shading indicates the location of grid gaps if present.  

:::image type="complex" source="../media/grid-inspect.msft.png" alt-text="Viewing grids with the Inspect tool" lightbox="../media/grid-inspect.msft.png":::
   Viewing grids with the **Inspect** tool  
:::image-end:::  

#### Viewing persistent grid overlays  

In Microsoft Edge version 86 or later, the experimental CSS grid feature also offers the option to enable persistent Grid overlays.  The persistent overlays provide several benefits.  

*   The persistent overlays remain visible on the page as you scroll, move your mouse, and use other features of the DevTools.  
*   Multiple persistent overlays can be enabled at the same time, allowing you to review several grid layouts at once.  
*   Persistent overlays offer many configuration options, such as hiding or showing names in the grid area, grid gaps, track sizes, and so on.  
    
The two ways to toggle a persistent grid overlay.  

*   Choose the **Grid** oval icon next to any Grid element shown in the DOM tree of the **Elements** tool.  
    
    :::image type="complex" source="../media/grid-adorner.msft.png" alt-text="Grid oval icon in Elements tool" lightbox="../media/grid-adorner.msft.png":::
       Grid oval icon in **Elements** tool  
    :::image-end:::  
    
*   Open the new **Layout** panel located in the Elements tool, and choose the checkbox next to each Grid element you want to highlight.  
    
    :::image type="complex" source="../media/grid-layout-zoom.msft.png" alt-text="Layout panel in DevTools" lightbox="../media/grid-layout-zoom.msft.png":::
       **Layout** panel in DevTools  
    :::image-end:::  
    

### Enable support to move tabs between panels  

Normally, tools such as **Elements** and **Network** may only open in the main panel that is located at the top of the DevTools.  Tools like **3D View** and **Issues** which normally only open in the **Drawer** panel that is located at the bottom of the DevTools.  After you choose the experiment, you may move tools between the top and bottom panels.  To move a tool, hover on the tab, open the contextual menu \(right-click\), and choose **Move to top** or **Move to bottom**.   This experiment allows you to customize your DevTools layout.  To display or hide the **Drawer** panel, select `Escape`.  

:::image type="complex" source="../media/experiments-move-panels.msft.png" alt-text="Moving tabs between panels" lightbox="../media/experiments-move-panels.msft.png":::
   Moving tabs between panels  
:::image-end:::  

<!--Available in Microsoft Edge version 85 and later.  -->  

### Enable webhint  

[webhint][WebhintMain] is an open-source tool that provides real-time feedback for websites and local webpages.  The type of feedback provided by [webhint][WebhintMain].  

*   accessibility  
*   cross-browser compatibility  
*   security  
*   performance  
*   Progressive Web Apps (PWAs)  
*   other common web development issues  
    
The [webhint][WebhintMain] experiment displays the webhint feedback in the [Issues][DevtoolsIssues] panel.  Choose an issue to display solution documentation and a list of the affected resources on your website.  Choose a resource link to open the relevant **Network**, **Sources**, or **Elements** pane in DevTools.  

:::image type="complex" source="../media/experiments-webhint.msft.png" alt-text="webhint feedback in the Issues panel" lightbox="../media/experiments-webhint.msft.png":::
   webhint feedback in the **Issues** panel  
:::image-end:::  

<!--Available in Microsoft Edge version 85 and later.  -->  

### Enable Network Console  

**Network Console** is the working title of an experiment to make synthetic network requests over HTTP.  You may use the **Network Console** experiment to send web API requests.  

After you turn on the experiment, ensure you restart the DevTools.  To use the **Network Console**, complete the following steps.  

1.  Open the **Network** pane.  
1.  Find the network request that you want to change and resend.  
1.  Open the contextual menu \(right-click\), and choose **Edit and Replay**.  
1.  When the **Network Console** opens, edit the network request information.  
1.  Choose **Send**.  
    
:::image type="complex" source="../media/network-network-console.msft.png" alt-text="Network Console in the Console drawer" lightbox="../media/network-network-console.msft.png":::
   **Network Console** in the **Console** drawer  
:::image-end:::  

<!--Available in Microsoft Edge version 85 and later.  -->  


## Previous experimental features  

*   [3D View][Devtools3dViewIndex] is now available and turned on by default in Microsoft Edge version 83 or later.  
*   [Turn on support to move tabs between panels][DevtoolsMoveTabs] is now available and turned on by default in Microsoft Edge version 85 or later.  
*   [Customize Keyboard Shortcuts][DevtoolsCustomKeyboardShortcuts] is now available and turned on by default in Microsoft Edge version 86 or later.  
*   [Emulation: Support dual screen mode][DevtoolsDeviceModeDualScreenAndFoldables] is now available and turned on by default in Microsoft Edge version 89 or later.  
*   [Turn on new CSS grid debugging features][DevtoolsCssGrid] is now available and turned on by default in Microsoft Edge version 89 or later.  
    
## Providing feedback on experimental features  

To provide feedback on Microsoft Edge web app experiments:  

*   Send your feedback using the **Send Feedback** menu item found in the `...` menu Or the keyboard shortcut `Alt-Shift-I` from within your application

:::image type="complex" source="../media/bing-devtools-send-feedback.msft.png" alt-text="The Send Feedback icon in Microsoft Edge DevTools" lightbox="../media/bing-devtools-send-feedback.msft.png":::
   The **Send Feedback** icon in Microsoft Edge DevTools  
:::image-end:::  

<!--  
## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  
-->  

<!-- links -->  

[Devtools3dViewIndex]: ../3d-view/index.md "3D View | Microsoft Docs"  
[DevtoolsCssGrid]: ../css/grid.md "Inspect CSS Grid in Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsMoveTabs]: ../customize/index.md "Customize Microsoft Edge DevTools | Microsoft Docs"  
[DevToolsCustomizeIndexSettings]: ../customize/index.md#settings "Settings - Customize Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsDeviceModeIndexSimulateMobileViewport]: ../device-mode/index.md#simulate-a-mobile-viewport "Simulate Mobile Devices with Device Mode in Microsoft Edge DevTools | Microsoft Edge"  
[DevtoolsInspectStylesEditFonts]: ../inspect-styles/edit-fonts.md "Edit CSS font styles and settings in the Styles pane in DevTools | Microsoft Docs"  
[DevtoolsIssues]: ../issues/index.md "Find and fix problems with the Microsoft Edge DevTools Issues tool | Microsoft Docs"  
[DevToolsShortcuts]: ../shortcuts/index.md "Microsoft Edge DevTools keyboard shortcuts | Microsoft Docs"  
[DevtoolsCustomKeyboardShortcuts]: ../customize/shortcuts.md "Customize keyboard shortcuts in the Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsOpenMain]: ../open/index.md "Open Microsoft Edge DevTools | Microsoft Docs"  

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

[SamsungMobileGalaxyFold]: https://www.samsung.com/mobile/galaxy-fold/ "Galaxy Fold | Samsung"  
[DevtoolsDeviceModeDualScreenAndFoldables]: ../device-mode/dual-screen-and-foldables.md "Emulate dual-screen and foldable devices in Microsoft Edge DevTools | Microsoft Docs"

[TwitterEdgedevtools]: https://www.twitter.com/EdgeDevTools "Microsoft Edge DevTools | Twitter"  

[WebhintMain]: https://webhint.io "webhint"  
