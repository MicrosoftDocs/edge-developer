---
description: The latest experimental features in Microsoft Edge DevTools
title: Experimental features
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/27/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, experiment
---
# Experimental features  

Microsoft Edge DevTools provide access to experimental features that are still in development.  You may test and [provide feedback](#providing-feedback-on-experimental-features) before each feature is released.  

While experimental features are available in all channels of Microsoft Edge, you may get the latest experimental features using the Microsoft Edge Canary channel.  

## Turn on experimental features  

To turn on \(or off\) experimental features in Microsoft Edge, complete the following steps.  

1.  [Open DevTools][DevtoolsOpenMain].  
    *   Select `Control`+`Shift`+`I` \(Windows, Linux\) or `Command`+`Option`+`I` \(macOS\).  For more information, navigate to [Microsoft Edge DevTools keyboard shortcuts][DevToolsShortcuts].  
1.  Open the [Settings][DevToolsCustomizeSettings] pane.  
    *   Select `Shift`+`?`.  For more information, navigate to [Microsoft Edge DevTools keyboard shortcuts][DevToolsShortcuts].  
1.  On the left side of the **Settings** pane, choose the **Experiments** section.  
    
    :::image type="complex" source="../media/experiments-devtools.msft.png" alt-text="List of experiments in DevTools Settings" lightbox="../media/experiments-devtools.msft.png":::
       List of experiments in DevTools **Settings**  
    :::image-end:::  
    
1.  On the **Experiments** page, scroll through the list of all available experimental features and choose the checkbox next to each feature that you want to test.  
1.  Close and reopen Microsoft Edge DevTools.  
    
> [!NOTE]
> Experimental features are constantly being updated and may cause performance issues.  To turn off an experimental feature, open the **Experiments** page and clear the checkbox of the experimental feature that you want to turn off.  

## Highlighted experimental features  

The following sections describe the new experimental features that are available in Microsoft Edge.  

| Experimental feature | Microsoft Edge version |  
|:--- |:--- |  
| [Emulation: Support dual screen mode](#emulation-support-dual-screen-mode) | 84 or later |  
| [Enable webhint](#enable-webhint) | 85 or later |  
| [Enable Network Console](#enable-network-console) | 85 or later |  
| [Source Order Viewer](#source-order-viewer) | 86 or later |  
| [Enable keyboard shortcut editor](#enable-keyboard-shortcut-editor) | 87 or later |  
| [Turn on Composited Layers in 3D View](#turn-on-composited-layers-in-3d-view) | 87 or later |  
| [Enable new CSS Flexbox debugging features](#enable-new-css-flexbox-debugging-features) | 89 or later |  
| [Enable + button tab menus to open more tools](#enable-+-button-tab-menus-to-open-more-tools) | 89 or later |  
| [Enable Welcome tab](#enable-welcome-tab) | 89 or later |  

### Emulation: Support dual screen mode  

Provides additional features for emulating two new dual-screen and foldable devices in Microsoft Edge.  

*   [Surface Duo][SurfaceDevicesDuo]  
*   [Samsung Galaxy Fold][SamsungMobileGalaxyFold]  
    
Emulate the devices and toggle between the following postures.  

*   Single-screen or folded posture  
*   Dual-screen or unfolded posture  
    
[Enable experimental Web Platform APIs](#enable-experimental-apis) and use the [CSS media screen-spanning feature][DualScreenDocsCssMedia] and [JavaScript getWindowSegments API][DualScreenDocsJSAPI] to enhance your website \(or app\) for dual-screen and foldable devices.  

:::image type="complex" source="../media/experiments-surface-duo-emulation.msft.png" alt-text="Emulate Surface Duo in Microsoft Edge" lightbox="../media/experiments-surface-duo-emulation.msft.png":::  
   Emulate Surface Duo in Microsoft Edge  
:::image-end:::  

#### Enable experimental APIs  

To use the [CSS media screen-spanning feature][DualScreenDocsCssMedia] and [JavaScript getWindowSegments API][DualScreenDocsJSAPI], turn on the `Experimental Web Platform features` flag in Microsoft Edge.  Complete the following steps.  

1.  Navigate to `edge://flags`.  
1.  In the **Search flags** textbox, enter `Experimental Web Platform features`, choose the **Experimental Web Platform features** flag, and change **Disabled** to **Enabled**.  
1.  Restart Microsoft Edge.  
    
:::image type="complex" source="../media/experiments-dual-screen-emulation-edge-flags.msft.png" alt-text="Enable the Experimental Web Platform features flag" lightbox="../media/experiments-dual-screen-emulation.msft.png":::
   Enable the Experimental Web Platform features flag  
:::image-end:::  

> [!NOTE]
> If you are using [CSS media queries][DualScreenDocsCssMedia] or the [JavaScript Windows Segment Enumeration API][DualScreenDocsJSAPI] to enhance your website or app for the [Surface Duo][SurfaceDevicesDuo], you must also enable the **Experimental Web Platform features** flag in the [Android Microsoft Edge app][GooglePlayMicrosoftEdge] on your [Surface Duo][SurfaceDevicesDuo] device.  
> 
> If the **Experimental Web Platform features** flag is enabled in [desktop Microsoft Edge][MicrosoftEdge] and disabled in the [Android Microsoft Edge app][GooglePlayMicrosoftEdge], the behavior of your website or app in the Surface Duo emulator in desktop Microsoft Edge does not match with the [Android Microsoft Edge app][GooglePlayMicrosoftEdge] on [Surface Duo][SurfaceDevicesDuo].  Ensure that the flags are matching across Android and desktop Microsoft Edge to successfully use the Surface Duo emulator in [desktop Microsoft Edge][MicrosoftEdge].  

#### Testing on foldable and dual-screen devices  

When you emulate the [Surface Duo][SurfaceDevicesDuo] in a dual-screen posture in Microsoft Edge, the seam \(the space between the two screens\) is drawn over your website or app.  

The emulated display matches the way your website \(or app\) renders in the [Microsoft Edge Android app][GooglePlayMicrosoftEdge] running on [Surface Duo][SurfaceDevicesDuo].  You may have to update your website \(or app\) to display better along the seam.  For more information about adapting your website \(or app\) to the seam, navigate to [How to work with the seam][DualScreenIntroductionHowWorkSeam].  

The [Device Toolbar][DevtoolsDeviceModeIndexSimulateMobileViewport] has additional features to help you test your website or app in multiple postures and orientations.  Choose **Rotate** \(![Rotate][ImageRotateIcon]\) to rotate the viewport to landscape orientation. Combine the feature with **Span** \(![Span][ImageSpanIcon]\) to toggle between single-screen or folded and dual-screen or unfolded postures.  Together, the features enable testing your website or app in all four possible postures and orientations.  

:::image type="complex" source="../media/experiments-dual-screen-emulation-rotate-span.msft.png" alt-text="Matrix of postures and orientations for dual-screen and foldable devices" lightbox="../media/experiments-dual-screen-emulation-rotate-span.msft.png":::
   Matrix of postures and orientations for dual-screen and foldable devices  
:::image-end:::  

The **Experimental Web Platform features** \(![ExperimentalApis][ImageExperimentalApisIcon]\) icon displays the state of the **Experimental Web Platform features** flag.  If the flag is turned on, the icon is highlighted.  If the flag is turned off, the icon is not highlighted.  To turn on \(or off\) the flag, navigate to `edge://flags` and toggle the flag.  

<!-- Commenting out until the icon issue is fixed in Edge Canary
The **Experimental Web Platform features** \(![ExperimentalApis][ImageExperimentalApisIcon]\) icon displays the state of the **Experimental Web Platform features** flag.  If the flag is turned on, the icon is highlighted.  If the flag is turned off, the icon is not highlighted.  To turn on \(or off\) the flag, either choose the icon or navigate to `edge://flags` and toggle the flag.   -->  

Here are additional resources that may help you enhance your website \(or app\) for dual-screen devices.  

*   For more information about web development on dual-screen devices, navigate to [Dual-screen web experiences][DualScreenWebIndex].  
*   Install the [Surface Duo emulator][DualScreenAndroidUseEmulator].  It is different from the emulator in Microsoft Edge, emulates the Surface Duo running Android, and integrates with [Android Studio][AndroidDeveloperStudio].  For more information, navigate to [Get the Surface Duo SDK][DualScreenAndroidGetDuoSdk].  
    
> [!NOTE]
> The following is a list of current known issues.  
> 
> *   When using a [Microsoft Remote Desktop client][RemoteDesktopClientDocs] to connect to a remote PC and emulate the [Surface Duo][SurfaceDevicesDuo] or [Samsung Galaxy Fold][SamsungMobileGalaxyFold], the pointer may shake or stutter.  If you run into the issue, [send feedback](#providing-feedback-on-experimental-features).  


### Enable support to move tabs between panels  

Normally, tools such as **Elements** and **Network** may only open in the main panel that is located at the top of the DevTools.  Tools like **3D View** and **Issues** which normally only open in the **Drawer** panel that is located at the bottom of the DevTools.  After you choose the experiment, you may move tools between the top and bottom panels.  To move a tool, hover on the tab, open the contextual menu \(right-click\), and choose **Move to top** or **Move to bottom**.   This experiment allows you to customize your DevTools layout.  To display or hide the **Drawer** panel, select `Escape`.  

:::image type="complex" source="../media/experiments-move-panels.msft.png" alt-text="Moving tabs between panels" lightbox="../media/experiments-move-panels.msft.png":::
   Moving tabs between panels  
:::image-end:::  

<!--Available in Microsoft Edge version 85 and later.  -->  

### Enable webhint  

[webhint][WebhintMain] is an open-source tool that provides real-time feedback for websites and local web pages.  The type of feedback provided by [webhint][WebhintMain].  

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

After enabling the experiment, ensure you restart the DevTools.  To use the **Network Console**, complete the following steps.  

1.  Open the **Network** pane.  
1.  Find the network request that you want to change and resend.  
1.  Open the contextual menu \(right-click\), and choose **Edit and Replay**.  
1.  When the **Network Console** opens, edit the network request information.  
1.  Choose **Send**.  
    
:::image type="complex" source="../media/network-network-console.msft.png" alt-text="Network Console in the Console drawer" lightbox="../media/network-network-console.msft.png":::
   **Network Console** in the **Console** drawer  
:::image-end:::  

<!--Available in Microsoft Edge version 85 and later.  -->  

### Source Order Viewer  

**Source Order Viewer** is an experiment that displays the order of elements in the page source.  The on-screen display order may differ from the order of the source, which confuses screen reader and keyboard users.  Use the **Source Order Viewer** experiment to find the differences between on-screen display order and the order of the source.  

After enabling the experiment, ensure you restart the DevTools.  To use **Source Order Viewer**, complete the following steps.  

1.  Open the **Elements** pane.  
1.  Open the **Accessibility** pane in the drawer \(bottom\) panel.  
1.  Under the **Source Order Viewer** section, choose the **Show Source Order** checkbox.  
1.  Highlight any HTML element to display an overlay that the order in the page source.  
    
:::image type="complex" source="../media/experiments-source-order-viewer.msft.png" alt-text="Source Order Viewer in the Accessibility pane" lightbox="../media/experiments-source-order-viewer.msft.png":::
   **Source Order Viewer** in the **Accessibility** pane  
:::image-end:::  

<!--Available in Microsoft Edge version 86 and later.  -->  

### Enable keyboard shortcut editor

With the **Enable keyboard shortcut editor** experiment turned on, you are now able to customize keyboard shortcuts for any action in the DevTools.  To customize the keyboard shortcut for a specific action, complete the following steps.  

1.  [Open DevTools][DevtoolsOpenMain].  
1.  Open [Settings][DevToolsCustomizeSettings].  
    *   Select `Shift`+`?`.  
1.  Navigate to the **Shortcuts** page.  
1.  Choose the action you want to customize.  
1.  Choose the **Edit** \(![EditKeyboardShortcut][ImageEditKeyboardShortcutIcon]\) icon.  
    
    :::image type="complex" source="../media/experiments-custom-keyboard-shortcuts-select-action.msft.png" alt-text="Choose the action to customize from the Shortcuts page in Settings" lightbox="../media/experiments-custom-keyboard-shortcuts-select-action.msft.png":::
       Choose the action to customize from the **Shortcuts** page in [Settings][DevToolsCustomizeSettings]  
    :::image-end:::  
    
1.  On the keyboard, select the keys you want to bind to the action.  
    
    :::image type="complex" source="../media/experiments-custom-keyboard-shortcuts-enter-key.msft.png" alt-text="Select the keys you want to assign to the action" lightbox="../media/experiments-custom-keyboard-shortcuts-enter-key.msft.png":::
       Select the keys you want to assign to the action  
    :::image-end:::  
    
1.  To save your new keyboard shortcut, choose the checkmark \(![CheckmarkKeyboardShortcut][ImageCheckmarkKeyboardShortcutIcon]\) icon.  
    
    :::image type="complex" source="../media/experiments-custom-keyboard-shortcuts-save-shortcut.msft.png" alt-text="Choose the checkmark icon to save your new keyboard shortcut" lightbox="../media/experiments-custom-keyboard-shortcuts-enter-key.msft.png":::
       Choose the checkmark icon to save your new keyboard shortcut  
    :::image-end:::  
    
1.  Select your new keyboard shortcut to trigger the action in the DevTools.  
    
On the **Shortcuts** page, the **Custom Keyboard Shortcut** \(![CustomKeyboardShortcut][ImageCustomKeyboardShortcutIcon]\) icon displays keyboard shortcuts that you have customized.  To reset all shortcuts, choose **Restore default shortcuts**.  

When you are editing the keyboard shortcuts for an action, to discard your changes, choose the X \(![XKeyboardShortcut][ImageXKeyboardShortcutIcon]\) icon.  To remove shortcuts for a specific action, choose the **Delete shortcut** \(![DeleteKeyboardShortcut][ImageDeleteKeyboardShortcutIcon]\) icon.  To add multiple shortcuts for an action, choose **Add a shortcut**.  

> [!NOTE]
> If a keyboard shortcut is currently assigned to another action, you are not able to save it for a new action.  You must first delete the keyboard shortcut for the previous action and then add it to the new action.  

<!--Available in Microsoft Edge version 87 and later.  -->

### Turn on Composited Layers in 3D View  

You may now visualize Layers alongside z-indexes and the Document Object Model \(DOM\).  This feature helps you debug without switching contexts as often.  You identified that reducing context-switching was a major pain point.  It is not always clear how the code you write affects your web app.  For a comprehensive visual debugging experience, the 3D View and Composited Layers are now combined.  After enabling the experiment, ensure you restart the DevTools.  To use **Composited Layers**, complete the following steps.  

1.  On the drawer, choose the **3D View** tool.  
1.  Open the **Composited Layers** pane.  
1.  All of the painted layers of the app are displayed.  Try this feature with your own web apps.  
    
:::image type="complex" source="../media/experiments-layers.msft.png" alt-text="Composited Layers pane" lightbox="../media/experiments-layers.msft.png":::
   **Composited Layers** pane  
:::image-end:::  

### Enable new CSS flexbox debugging features  

This experimental feature provides a number of new visualizations to help you debug CSS flexbox layouts.  To preview the latest experimental features, [enable this experiment](#turn-on-experimental-features) and reload DevTools.  

#### Viewing on-hover flexbox overlays with the Inspect tool  

The **Inspect** tool provides a quick way to identify and visualize CSS flexbox layouts in a website by hovering over them with the mouse.  Choose the **Inspect** \(![Inspect][ImageInspectIcon]\) icon in the top-left corner of DevTools.  Then, hover over a flex container on the website you are debugging.  Outlines are displayed around the flex container.  

:::image type="complex" source="../media/flexbox-hover.msft.png" alt-text="Viewing flexbox containers with the Inspect tool" lightbox="../media/flexbox-hover.msft.png":::
   Viewing flexbox containers with the **Inspect** tool  
:::image-end:::  

#### Viewing persistent flexbox overlays  

In Microsoft Edge version 89 or later, the experimental CSS flexbox feature also offers the option to enable persistent flebox overlays.  The persistent overlays provide several benefits.  

*   The persistent overlays remain visible on the page as you scroll, move your mouse, and use other features of the DevTools.  
*   Multiple persistent overlays can be enabled at the same time, allowing you to review several flexbox layouts at once.  
*   Persistent overlays offer color configuration options.  
    
The two ways to toggle a persistent flexbox overlay.  

*   Choose the **Flexbox** oval icon next to any flexbox container displayed in the DOM tree of the **Elements** tool.  
    
*   Open the new **Layout** panel located in the Elements tool, and choose the checkbox next to each flexbox container you want to highlight.  
    
:::image type="complex" source="../media/flexbox-overlay.msft.png" alt-text="Flex icons and Layout panel in DevTools" lightbox="../media/flexbox-overlay.msft.png":::
   Flex icons and **Layout** panel in DevTools  
:::image-end:::  
    
#### Configuring persistent overlays  

The **Layout** panel is located in the **Elements** tool alongside the **Styles** and **Computed** tabs.  The **Layout** panel surfaces configuration options for persistent overlays for CSS grid and flexbox.  

:::image type="complex" source="../media/flexbox-layout.msft.png" alt-text="Layout panel" lightbox="../media/flexbox-layout.msft.png":::
   Layout panel 
:::image-end:::  

<!--Available in Microsoft Edge version 89 and later.  -->  

### Enable + button tab menus to open more tools

After you turn on this experiment, a plus sign \(`+`\) displays to the right of the tab group.  To display a list of other tools that you may add to the tab bar, choose the **More Tools** \(`+`\) icon.  

This experiment provides a new way to open more tools in DevTools.  After you turn on this experiment and reload DevTools, a plus sign \(`+`\) displays to the right of the tab group. along the top of the DevTools.  To display a list of other tools that you may add to the tab bar, choose the **More Tools** \(`+`\) icon.  
    
:::image type="complex" source="../media/experiments-plus-button.msft.png" alt-text="More Tools in the top pane" lightbox="../media/experiments-plus-button.msft.png":::
   **More Tools** in the top pane
:::image-end:::  

<!--Available in Microsoft Edge version 89 and later.  -->  

### Enable Welcome tab

This experiment replaces the **What's New** tool with the **Welcome** tool.  The **Welcome** tool provides the same content with a refreshed design and additional links to documentation and ways to contact the Edge DevTools team.  

**Welcome** automatically opens after each update of Microsoft Edge update to display the latest features and release notes for Microsoft Edge DevTools.  To display the **Welcome** tool after each update, in the **Welcome** tool, choose the checkbox next to **Open tab after each update**.  

If you prefer the original **What's New** tool, navigate to [Settings][DevtoolsCustomizeIndexSettings] > **Experiments** and remove the checkbox next to **Enable Welcome tab**.  
    
:::image type="complex" source="../media/experiments-welcome.msft.png" alt-text="Welcome tool" lightbox="../media/experiments-welcome.msft.png":::
   **Welcome** tool  
:::image-end:::  

<!--Available in Microsoft Edge version 89 and later.  -->  

## Previous experimental features  

*   [3D View][Devtools3dViewIndex] is now available by default in Microsoft Edge version 83 or later.  
*   [Enable support to move tabs between panels][DevtoolsMoveTabs] is now available and in Microsoft Edge version 85 or later.  
*   [Customize Keyboard Shortcuts][DevtoolsCustomKeyboardShortcuts] is now turned on by default in Microsoft Edge version 86 or later.  
* [Enable new CSS grid debugging features][DevtoolsCssGrid] is now turned on by default in Microsoft Edge version 89 or later.  

## Providing feedback on experimental features  

To provide feedback on Microsoft Edge DevTools experiments, or anything else related to DevTools.  

*   Send your feedback using the **Send Feedback** icon in the DevTools  
*   Tweet at [@EdgeDevTools][TwitterEdgedevtools]  

:::image type="complex" source="../media/bing-devtools-send-feedback.msft.png" alt-text="The Send Feedback icon in Microsoft Edge DevTools" lightbox="../media/bing-devtools-send-feedback.msft.png":::
   The **Send Feedback** icon in Microsoft Edge DevTools  
:::image-end:::  

<!--  
## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  
-->  

<!-- image links -->  

[ImageCheckmarkKeyboardShortcutIcon]: ../media/checkmark-keyboard-shortcut-icon.msft.png  
[ImageCustomKeyboardShortcutIcon]: ../media/custom-keyboard-shortcut-icon.msft.png  
[ImageDeleteKeyboardShortcutIcon]: ../media/delete-keyboard-shortcut-icon.msft.png  
[ImageEditKeyboardShortcutIcon]: ../media/edit-keyboard-shortcut-icon.msft.png  
[ImageExperimentalApisIcon]: ../media/experimental-apis-dark-icon.msft.png  
[ImageInspectIcon]: ../media/inspect-icon.msft.png  
[ImageRotateIcon]: ../media/rotate-dark-icon.msft.png  
[ImageSpanIcon]: ../media/span-dark-icon.msft.png  
[ImageXKeyboardShortcutIcon]: ../media/discard-changes-keyboard-shortcut-icon.msft.png  

<!-- links -->  

[Devtools3dViewIndex]: ../3d-view/index.md "3D View | Microsoft Docs"  
[DevToolsCustomizeSettings]: ../customize/index.md#settings "Settings - Customize Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsCssGrid]: ../css/grid.md "Inspect CSS Grid in Microsoft Edge DevTools | Microsoft Docs"
[DevtoolsDeviceModeIndexSimulateMobileViewport]: ../device-mode/index.md#simulate-a-mobile-viewport "Simulate Mobile Devices with Device Mode in Microsoft Edge DevTools | Microsoft Edge"  
[DevtoolsIssues]: ../issues/index.md "Find and fix problems with the Microsoft Edge DevTools Issues tool | Microsoft Docs"  
[DevtoolsMoveTabs]: ../customize/index.md "Customize Microsoft Edge DevTools | Microsoft Docs"
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

[TwitterEdgedevtools]: https://www.twitter.com/EdgeDevTools "Microsoft Edge DevTools | Twitter"  

[WebhintMain]: https://webhint.io "webhint"  
