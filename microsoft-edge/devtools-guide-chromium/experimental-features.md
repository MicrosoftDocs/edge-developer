---
description: The latest experimental features in Microsoft Edge DevTools
title: Experimental features
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/04/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, experiment
---

# Experimental features  

Microsoft Edge DevTools provide access to experimental features that are still in development.  You may test and p[provide feedback](#providing-feedback-on-experimental-features) before each feature is released.  

While experimental features are available in all channels of Microsoft Edge, you may get the latest experimental features using the Microsoft Edge Canary channel.  

## Turn on experimental features  

Use the following steps to turn on \(or off\) experimental features in Microsoft Edge.  

1.  [Open DevTools][DevtoolsOpen].  
     *   Select `Control`+`Shift`+`I` \(Windows\) or `Command`+`Option`+`I` \(macOS\).  For more information, see [Microsoft Edge DevTools keyboard shortcuts][DevToolsShortcuts].  
1.  Open the [Settings][DevToolsCustomizeSettings] pane.  
    *   Select `Shift`+`?`.  For more information, navigate to [Microsoft Edge DevTools keyboard shortcuts][DevToolsShortcuts].  
1.  On the left side of the **Settings** pane, choose the **Experiments** section.  
    
    :::image type="complex" source="./media/experiments-devtools.msft.png" alt-text="List of experiments in DevTools Settings" lightbox="./media/experiments-devtools.msft.png":::
       List of experiments in DevTools Settings  
    :::image-end:::  
    
1.  On the **Experiments** page, scroll through the list of all available experimental features and select the checkbox next to each feature that you want to test.  
1.  Close and reopen Microsoft Edge DevTools.  

> [!NOTE]
> Experimental features are constantly being updated and may cause performance issues.  To turn off an experimental feature, open the **Experiments** page and clear the checkbox of the experimental feature that you want to turn off.  

## Highlighted experimental features  

The following sections describe the new experimental features that are available in Microsoft Edge.  

| Experimental feature | Microsoft Edge version |  
|:--- |:--- |  
| [Enable custom keyboard shortcuts settings tab](#enable-custom-keyboard-shortcuts-settings-tab) | 84 or later |
| [Emulation: Support dual screen mode](#emulation-support-dual-screen-mode) | 84 or later |  
| [Enable new CSS grid debugging features](#enable-new-css-grid-debugging-features) | 85 or later |  
| [Enable support to move tabs between panels](#enable-support-to-move-tabs-between-panels) | 85 or later |  
| [Enable webhint](#enable-webhint) | 85 or later |  
| [Enable Network Console](#enable-network-console) | 85 or later |  
| [Enable Source Order Viewer](#enable-source-order-viewer) | 86 or later |  

### Enable custom keyboard shortcuts settings tab  

Provides a new **Shortcuts** page in [DevTools Settings][DevToolsCustomizeSettings] to match [keyboard shortcuts][DevToolsShortcuts] in the DevTools to [Microsoft Visual Studio Code][VisualstudioCode].  

After you enable the experiment, open [DevTools Settings][DevToolsCustomizeSettings] again using select `Shift`+`?`.  Navigate to the new **Shortcuts** page.  Select **DevTools (Default)** in the **Match shortcuts from preset** dropdown and select **Visual Studio Code**.  The keyboard shortcuts in the DevTools now match the shortcuts for equivalent actions in Visual Studio Code.  

:::image type="complex" source="./media/experiments-keyboard-shortcut.msft.png" alt-text="Match keyboard shortcuts in the DevTools to Visual Studio Code" lightbox="./media/experiments-keyboard-shortcut.msft.png":::
   Match keyboard shortcuts in the DevTools to Visual Studio Code  
:::image-end:::  

For example, on Windows the keyboard shortcut for pausing or continuing running a script in [Visual Studio Code][VisualstudioCodeShortcutsKeyboardWindows] is `F5`.  With the **DevTools (Default)** preset, the same shortcut in the DevTools is `F8`.  With the **Visual Studio Code** preset, the shortcut is also `F5`.  

### Emulation: Support dual screen mode  

Provides additional features for emulating two new dual-screen and foldable devices in Microsoft Edge.  

*   [Surface Duo][SurfaceDevicesDuo]  
*   [Samsung Galaxy Fold][SamsungMobileGalaxyFold]  

Emulate the devices and toggle between the following postures.  

*   single-screen or folded posture  
*   dual-screen or unfolded posture  

Use the [enable experimental APIs](#enable-experimental-apis) to enhance your website \(or app\) for a device.  You may also use the [CSS media queries and the JavaScript Windows Segment Enumeration API][GitHubMicrosoftedgeMsedgeexplainerFoldables].  

<!-- This image was taken in Chromium Canary since we don't yet have an Edge Canary that has Stan's changes -->  

:::image type="complex" source="./media/experiments-dual-screen-emulation.msft.png" alt-text="Emulate Surface Duo in Microsoft Edge" lightbox="./media/experiments-dual-screen-emulation.msft.png":::  
   Emulate Surface Duo in Microsoft Edge  
:::image-end:::  

#### Enable experimental APIs  

To [enable this experiment](#turn-on-experimental-features) in the Microsoft Edge DevTools, complete the following steps.  

1.  navigate to `edge://flags`.  
1.  In the **Search flags** textbox, enter `Experimental Web Platform features`, choose the **Experimental Web Platform features** flag, and change **Disabled** to **Enabled**.  
1.  Restart Microsoft Edge.  

To enhance your website or app for dual-screen and foldable devices, navigate to [CSS media queries and the JavaScript Windows Segment Enumeration API][GitHubMicrosoftedgeMsedgeexplainerFoldables].

[Turn on this experiment](#turn-on-experimental-features) in the Microsoft Edge DevTools. 

1.  Open a new tab in Microsoft Edge and navigate to `edge://flags`.  
1.  In the **Search flags** textbox, enter `Experimental Web Platform features`, choose **Experimental Web Platform features**, and change **Disabled** to **Enabled**.  1.  1.  Restart Microsoft Edge.  

For more information about enhancing your website \(or app\) for dual-screen and foldable devices, navigate to [CSS media queries and the JavaScript Windows Segment Enumeration API][GitHubMicrosoftedgeMsedgeexplainerFoldables].  

:::image type="complex" source="./media/experiments-dual-screen-emulation-edge-flags.msft.png" alt-text="Enable the Experimental Web Platform features flag" lightbox="./media/experiments-dual-screen-emulation.msft.png":::
   Enable the Experimental Web Platform features flag  
:::image-end:::  

> [!NOTE]
> If you are using [CSS media queries or the JavaScript Windows Segment Enumeration API][GitHubMicrosoftedgeMsedgeexplainerFoldables] to enhance your website or app for the [Surface Duo][SurfaceDevicesDuo], you must also enable the **Experimental Web Platform features** flag in the [Android Microsoft Edge app][GooglePlayMicrosoftEdge] on your [Surface Duo][SurfaceDevicesDuo] device.
> 
> If the **Experimental Web Platform features** flag is enabled in [desktop Microsoft Edge][MicrosoftEdge] and disabled in the [Android Microsoft Edge app][GooglePlayMicrosoftEdge], the behavior of your website or app in the Surface Duo emulator in desktop Microsoft Edge will not match with the [Android Microsoft Edge app][GooglePlayMicrosoftEdge] on [Surface Duo][SurfaceDevicesDuo].  Ensure that the flags are matching across Android and desktop Microsoft Edge to successfully use the Surface Duo emulator in [desktop Microsoft Edge][MicrosoftEdge].  

#### Testing on foldable and dual-screen devices  

When you emulate the [Surface Duo][SurfaceDevicesDuo] in a dual-screen posture in Microsoft Edge, the **seam** is drawn over your website or app.  

> [!NOTE]
> The **seam** is the space between the two screens.  

The emulated display for your website \(or app\) is a correct representation.  It matches the display in the [Microsoft Edge Android app][GooglePlayMicrosoftEdge] on [Surface Duo][SurfaceDevicesDuo].  Update the content to display better along the **seam**.  For more information about adapting your website \(or app\) to the **seam**, navigate to [Introduction to dual-screen devices][DualScreenIntroductionHowWorkSeam] in the Surface Duo documentation.  

The [Device Toolbar][DevtoolsDeviceModeIndexSimulateMobileViewport] has additional features to help you test your website or app in multiple postures and orientations.  Choose **Rotate** \(![Rotate][ImageRotateIcon]\) to rotate the viewport to landscape orientation. Combine the feature with **Span** \(![Span][ImageSpanIcon]\) to toggle between single-screen or folded and dual-screen or unfolded postures.  Together, the features enable testing your website or app in all four possible postures and orientations.  

:::image type="complex" source="./media/experiments-dual-screen-emulation-rotate-span.msft.png" alt-text="Matrix of postures and orientations for dual-screen and foldable devices" lightbox="./media/experiments-dual-screen-emulation-rotate-span.msft.png":::
   Matrix of postures and orientations for dual-screen and foldable devices  
:::image-end:::  

The **Experimental Web Platform features** \(![ExperimentalApis][ImageExperimentalApisIcon]\) icon displays the state of the **Experimental Web Platform features** flag.  If the flag is available, the icon is highlighted.  If the flag is not available, the icon is not highlighted.  To turn on \(or off\) the experiment, either choose the icon or navigate to `edge://flags` and toggle the flag.  

#### Additional resources  

*   [More info on developing dual-screen web experiences in Surface Duo documentation][DualScreenWebIndex]  
*   [Install the Surface Duo emulator][DualScreenAndroidGetDuoSdk].  It differs from the emulator in Microsoft Edge that emulates the Surface Duo running Android and integrates with [Android Studio][AndroidDeveloperStudio]   

### Enable new CSS grid debugging features  

Improves on-page visualizations when you debug websites that have CSS grid layouts.  You may further customize the overlays in DevTools Settings.  

:::image type="complex" source="./media/experiments-grid.msft.png" alt-text="CSS grid debugging feature" lightbox="./media/experiments-grid.msft.png":::
   CSS grid debugging feature  
:::image-end:::  

To preview the latest experimental features, complete the following actions.  

1.  In the **Experiments** section, choose the **Enable new CSS Grid debugging features (configuration options available in Layout sidebar pane in Elements after restart)** checkbox.  

<!--Available in Microsoft Edge version 85 and later.  -->  

### Enable support to move tabs between panels  

Normally, tools such as **Elements** and **Network** may only open in the main panel that is located at the top of the DevTools.  Tools like **3D View** and **Issues** which normally only open in the **Drawer** panel that is located at the bottom of the DevTools.  After you choose the experiment, you may move tools between the top and bottom panels.  To move a tool, hover on the tab, open the contextual menu \(right-click\), and choose **Move to top** or **Move to bottom**.   This experiment allows you to customize your DevTools layout.  To show or hide the **Drawer** panel, select `Escape`.  

:::image type="complex" source="./media/experiments-move-panels.msft.png" alt-text="Moving tabs between panels" lightbox="./media/experiments-move-panels.msft.png":::
   Moving tabs between panels  
:::image-end:::  

<!--Available in Microsoft Edge version 85 and later.  -->  

### Enable webhint  

[webhint][WebhintMain] is an open-source tool that provides real-time feedback for websites and local web pages.  The type of feedback provided by [webhint][WebhintMain].  

*   accessibility  
*   cross-browser compatibility  
*   security  
*   performance  
*   PWAs  
*   other common web development issues  

The [webhint][WebhintMain] experiment displays the webhint feedback in the [Issues][DevtoolsIssues] panel.  Select an issue to display solution documentation and a list of the affected resources on your website.  Select a resource link to open the relevant **Network**, **Sources**, or **Elements** pane in DevTools.  

:::image type="complex" source="./media/experiments-webhint.msft.png" alt-text="webhint feedback in the Issues panel" lightbox="./media/experiments-webhint.msft.png":::
   webhint feedback in the **Issues** panel  
:::image-end:::  

<!--Available in Microsoft Edge version 85 and later.  -->  

### Enable Network Console  

**Network Console** is the working title of an experiment to make synthetic network requests over HTTP.  You may use the **Network Console** experiment to send web API requests.  

After enabling the experiment, ensure you restart the DevTools.  To use the **Network Console**, use the following steps.    

1.  Open the **Network** pane.  
1.  Find the network request that you want to change and resend.  
1.  Open the contextual menu \(right-click\), and choose **Edit and Replay**.  
1.  When the **Network Console** opens, edit the network request information.  
1.  Select **Send**.  

:::image type="complex" source="./media/network-network-console.msft.png" alt-text="Network Console in the Console drawer" lightbox="./media/network-network-console.msft.png":::
   **Network Console** in the **Console** drawer  
:::image-end:::  

<!--Available in Microsoft Edge version 85 and later.  -->  

### Enable Source Order Viewer  

**Source Order Viewer** is the working title of an experiment.  It displays the order of elements in the page source.  The on-screen display order may differ from the order of the source, which confuses screen reader and keyboard users.  Use the **Source Order Viewer** experiment to find the differences between on-screen display order and the order of the source.  

After enabling the experiment, ensure you restart the DevTools.  To use Source Order Viewer:  

1.  Open the **Elements** pane.  
1.  Open the **Accessibility** pane in the drawer \(bottom\) panel.  
1.  Under the **Source Order Viewer** section, select the **Show Source Order** checkbox.  
1.  Highlight any HTML element to display an overlay that the order in the page source.  

:::image type="complex" source="./media/experiments-source-order-viewer.msft.png" alt-text="Source Order Viewer in the Accessibility pane" lightbox="./media/experiments-source-order-viewer.msft.png":::
   **Source Order Viewer** in the **Accessibility** pane  
:::image-end:::  

<!--Available in Microsoft Edge version 86 and later.  -->  

## Previous experimental features  

*   [3D View][Devtools3dViewIndex] is now available and turned on by default in Microsoft Edge version 83 or later.  

## Providing feedback on experimental features  

To provide feedback on Microsoft Edge DevTools experiments, or anything else related to DevTools.  

*   Send your feedback using the **Send Feedback** icon in the DevTools  
*   Tweet at [@EdgeDevTools][TwitterEdgedevtools]  

:::image type="complex" source="./media/bing-devtools-send-feedback.msft.png" alt-text="The Send Feedback icon in the Microsoft Edge DevTools" lightbox="./media/bing-devtools-send-feedback.msft.png":::
   The **Send Feedback** icon in Microsoft Edge DevTools  
:::image-end:::  

<!-- image links -->  

[ImageRotateIcon]: ./media/rotate-dark-icon.msft.png  
[ImageSpanIcon]: ./media/span-dark-icon.msft.png  
[ImageExperimentalApisIcon]: ./media/experimental-apis-dark-icon.msft.png  

<!-- links -->  

[Devtools3dViewIndex]: ./3d-view/index.md "3D View | Microsoft Docs"  
[DevToolsCustomizeSettings]: ./customize/index.md#settings "Settings - Customize Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsDeviceModeIndexSimulateMobileViewport]: ./device-mode/index.md#simulate-a-mobile-viewport "Simulate Mobile Devices with Device Mode in Microsoft Edge DevTools | Microsoft Edge"  
[DevtoolsIssues]: ./issues/index.md "Find and fix problems with the Microsoft Edge DevTools Issues tool | Microsoft Docs"  
[DevToolsShortcuts]: ./shortcuts.md "Microsoft Edge DevTools keyboard shortcuts | Microsoft Docs"  
[DevtoolsOpen]: ./open.md "Open Microsoft Edge DevTools | Microsoft Docs"  

[DualScreenWebIndex]: /dual-screen/web/index "Dual-screen web experiences | Microsoft Docs"  
[DualScreenAndroidGetDuoSdk]: /dual-screen/android/get-duo-sdk "Get the Surface Duo emulator | Microsoft Docs"  
[DualScreenIntroductionHowWorkSeam]: /dual-screen/introduction#how-to-work-with-the-seam "Introduction to dual-screen devices | Microsoft Docs"  

[MicrosoftEdge]: https://www.microsoft.com/edge "Microsoft Edge"  

[SurfaceDevicesDuo]: https://www.microsoft.com/surface/devices/surface-duo "Surface Duo | Microsoft Surface"  

[VisualstudioCode]: https://code.visualstudio.com "Microsoft Visual Studio Code"  
[VisualstudioCodeShortcutsKeyboardWindows]: https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf "Visual Studio Code Keyboard shortcuts for Windows | Microsoft Visual Studio Code"  

[GitHubMicrosoftedgeMsedgeexplainerFoldables]: https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/master/Foldables/explainer.md "Web Platform Primitives for Enlightened Experiences on Foldable Devices | GitHub"  

[AndroidDeveloperStudio]: https://developer.android.com/studio/ "Android Studio"  

[GooglePlayMicrosoftEdge]: https://play.google.com/store/apps/details?id=com.microsoft.emmx "Microsoft Edge | Google Play"  

[SamsungMobileGalaxyFold]: https://www.samsung.com/mobile/galaxy-fold/ "Galaxy Fold | Samsung"  

[TwitterEdgedevtools]: https://www.twitter.com/EdgeDevTools "Microsoft Edge DevTools | Twitter"  

[WebhintMain]: https://webhint.io "webhint"  
