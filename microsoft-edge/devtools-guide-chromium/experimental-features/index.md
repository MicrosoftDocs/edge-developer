---
description: The latest experimental features in Microsoft Edge DevTools
title: Experimental features
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 02/03/2020 
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
1.  Open the [Settings][DevToolsCustomizeIndexSettings] pane.  
    *   Select `Shift`+`?`.  For more information, navigate to [Microsoft Edge DevTools keyboard shortcuts][DevToolsShortcuts].  
1.  On the left side of the **Settings** pane, choose the **Experiments** section.  
    
    :::image type="complex" source="../media/experiments-devtools.msft.png" alt-text="The Experiments page in Settings" lightbox="../media/experiments-devtools.msft.png":::
       The **Experiments** page in **Settings**  
    :::image-end:::  
    
1.  On the **Experiments** page, scroll through the list of all available experimental features and choose the checkbox next to each feature that you want to test.  
1.  Close and reopen Microsoft Edge DevTools.  
    
> [!NOTE]
> Experimental features are constantly being updated and may cause performance issues.  To turn off an experimental feature, open the **Experiments** page and clear the checkbox of the experimental feature that you want to turn off.  

## Highlighted experimental features  

The following sections describe the new experimental features that are available in Microsoft Edge.  

| Experimental feature | Microsoft Edge version |  
|:--- |:--- |  
| [Enable webhint](#enable-webhint) | 85 or later |  
| [Enable Network Console](#enable-network-console) | 85 or later |  
| [Source Order Viewer](#source-order-viewer) | 86 or later |  
| [Enable keyboard shortcut editor](#enable-keyboard-shortcut-editor) | 87 or later |  
| [Enable Composited Layers in 3D View](#enable-composited-layers-in-3d-view) | 87 or later |  
| [Enable new Font Editor tool within the Styles pane](#) | 89 or later |  
| [Enable new CSS Flexbox debugging features](#enable-new-css-flexbox-debugging-features) | 89 or later |  
| [Enable + button tab menus to open more tools](#enable--button-tab-menus-to-open-more-tools) | 89 or later |  
| [Enable Welcome tab](#enable-welcome-tool) | 89 or later |  

### Enable new CSS grid debugging features  

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
    
#### Configuring persistent overlays  

In Microsoft Edge version 86 or later, the new **Layout** panel is located in the **Elements** tool alongside the **Styles** and **Computed** tabs.  The **Layout** panel surfaces configuration options for persistent overlays.  

:::image type="complex" source="../media/experiments-grid.msft.png" alt-text="CSS grid debugging feature" lightbox="../media/experiments-grid.msft.png":::
   CSS grid debugging feature  
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

### Source Order Viewer  

**Source Order Viewer** is an experiment that displays the order of elements in the webpage source.  The on-screen display order may differ from the order of the source, which confuses screen reader and keyboard users.  Use the **Source Order Viewer** experiment to find the differences between on-screen display order and the order of the source.  

After you turn on the experiment, ensure you restart the DevTools.  To use **Source Order Viewer**, complete the following steps.  

1.  Open the **Elements** tool.  
1.  Open the **Accessibility** pane in the drawer \(bottom\) panel.  
1.  Under the **Source Order Viewer** section, choose the **Show Source Order** checkbox.  
1.  Highlight any HTML element to display an overlay that the order in the webpage source.  
    
:::image type="complex" source="../media/experiments-source-order-viewer.msft.png" alt-text="Source Order Viewer in the Accessibility pane" lightbox="../media/experiments-source-order-viewer.msft.png":::
   **Source Order Viewer** in the **Accessibility** pane  
:::image-end:::  

<!--Available in Microsoft Edge version 86 and later.  -->  

### Enable keyboard shortcut editor

With the **Enable keyboard shortcut editor** experiment turned on, you may customize keyboard shortcuts for any action in the DevTools.  To customize the keyboard shortcut for a specific action, complete the following steps.  

1.  [Open DevTools][DevtoolsOpenMain].  
1.  Open [Settings][DevToolsCustomizeIndexSettings].  
    *   Select `Shift`+`?`.  
1.  Navigate to the **Shortcuts** page.  
1.  Choose the action you want to customize.  
1.  Choose the **Edit** \(![EditKeyboardShortcut](../media/edit-keyboard-shortcut-icon.msft.png)\) icon.  
    
    :::image type="complex" source="../media/experiments-custom-keyboard-shortcuts-select-action.msft.png" alt-text="Choose the action to customize from the Shortcuts page in Settings" lightbox="../media/experiments-custom-keyboard-shortcuts-select-action.msft.png":::
       Choose the action to customize from the **Shortcuts** page in [Settings][DevToolsCustomizeIndexSettings]  
    :::image-end:::  
    
1.  On the keyboard, select the keys to bind to the action.  
    
    :::image type="complex" source="../media/experiments-custom-keyboard-shortcuts-enter-key.msft.png" alt-text="Select the keys to assign to the action" lightbox="../media/experiments-custom-keyboard-shortcuts-enter-key.msft.png":::
       Select the keys to assign to the action  
    :::image-end:::  
    
1.  To save your new keyboard shortcut, choose the checkmark \(![CheckmarkKeyboardShortcut](../media/checkmark-keyboard-shortcut-icon.msft.png)\) icon.  
    
    :::image type="complex" source="../media/experiments-custom-keyboard-shortcuts-save-shortcut.msft.png" alt-text="Choose the checkmark icon to save your new keyboard shortcut" lightbox="../media/experiments-custom-keyboard-shortcuts-enter-key.msft.png":::
       Choose the checkmark icon to save your new keyboard shortcut  
    :::image-end:::  
    
1.  Select your new keyboard shortcut to trigger the action in the DevTools.  
    
On the **Shortcuts** page, the **Custom Keyboard Shortcut** \(![CustomKeyboardShortcut](../media/custom-keyboard-shortcut-icon.msft.png)\) icon displays keyboard shortcuts you customized.  To reset all shortcuts, choose **Restore default shortcuts**.  

To discard your changes while you edit the keyboard shortcuts for an action, choose the X \(![XKeyboardShortcut](../media/discard-changes-keyboard-shortcut-icon.msft.png)\) icon.  To remove shortcuts for a specific action, choose the **Delete shortcut** \(![DeleteKeyboardShortcut](../media/delete-keyboard-shortcut-icon.msft.png)\) icon.  To add multiple shortcuts for an action, choose **Add a shortcut**.  

> [!NOTE]
> If a keyboard shortcut is currently assigned to another action, you may not save it for a new action.  You must first delete the keyboard shortcut for the previous action and then add it to the new action.  

<!--Available in Microsoft Edge version 87 and later.  -->

### Enable Composited Layers in 3D View  

You may now visualize Layers alongside z-indexes and the Document Object Model \(DOM\).  This feature helps you debug without switching contexts as often.  You identified that reducing context-switching was a major pain point.  It is not always clear how the code you write affects your web app.  For a comprehensive visual debugging experience, the 3D View and Composited Layers are now combined.  

After you turn on the experiment, ensure you restart the DevTools.  To use **Composited Layers**, complete the following steps.  

1.  On the drawer, choose the **3D View** tool.  
1.  Open the **Composited Layers** pane.  
1.  All of the painted layers of the app are displayed.  Try this feature with your own web apps.  
    
:::image type="complex" source="../media/experiments-layers.msft.png" alt-text="Composited Layers pane" lightbox="../media/experiments-layers.msft.png":::
   **Composited Layers** pane  
:::image-end:::  

### Enable new CSS Flexbox debugging features  

### Enable new Font Editor tool within the Styles pane  

You may now use the new visual [Font Editor][DevtoolsInspectStylesEditFonts] to edit fonts.  Use it define fonts and font characteristics.  The visual **Font Editor** helps you complete the following actions.  

*   Switch between units for different font properties  
*   Switch between keywords for different font properties  
*   Convert units  
*   Generate accurate CSS code  
    
After you turn on the experiment, ensure you restart the DevTools.  To use the new visual **Font Editor**, complete the following steps.  

1.  Open the **Elements** tool.  
1.  Open the **Styles** pane.  
1.  Choose the **Font Editor** icon.  
    
For more information about the new visual **Font Editor**, navigate to [Edit CSS font styles and settings in the Styles pane in DevTools][DevtoolsInspectStylesEditFonts].  

:::image type="complex" source="../media/font-editor-open.msft.png" alt-text="The visual Font Editor pane is highlighted" lightbox="../media/font-editor-open.msft.png":::
   The visual **Font Editor** pane is highlighted  
:::image-end:::  

<!--Available in Microsoft Edge version 89 and later.  -->  

#### Display persistent overlays on Flexbox layouts with the Inspect tool  

The **Inspect** tool provides a quick way to identify and visualize CSS Flexbox layouts in a website by hovering on them with the mouse.  Choose the **Inspect** \(![Inspect](../media/inspect-icon.msft.png)\) icon in the top-left corner of DevTools.  Then, while debugging the website, hover on a flex container to display outlines around the flex container.  

:::image type="complex" source="../media/flexbox-hover.msft.png" alt-text="Display Flexbox containers with the Inspect tool" lightbox="../media/flexbox-hover.msft.png":::
   Display Flexbox containers with the **Inspect** tool  
:::image-end:::  

#### Display persistent overlays on Flexbox layouts  

In Microsoft Edge version 89 or later, the experimental CSS Flexbox feature also offers the option to turn on persistent overlays on Flexbox layouts.  Persistent overlays provide the following benefits.  

*   Persistent overlays remain visible on the webpage as you scroll, move your mouse, and use other features of the DevTools.
*   Multiple persistent overlays may be used at the same time, to allow you to review several Flexbox layouts at once.  
*   Persistent overlays offer color configuration options.  
    
To toggle persistent overlays on Flexbox layout, use one of following actions.  

*   Choose the **Flexbox** oval icon next to any Flexbox container displayed in the DOM tree of the **Elements** tool.  
*   Open the new **Layout** panel located in the **Elements** tool, and choose the checkbox next to each Flexbox container you want to highlight.  
    
:::image type="complex" source="../media/flexbox-overlay.msft.png" alt-text="Flex icons and Layout panel in DevTools" lightbox="../media/flexbox-overlay.msft.png":::
   Flex icons and **Layout** panel in DevTools  
:::image-end:::  

#### Configure persistent overlays  

To configure options for persistent overlays for CSS grids or Flexbox layouts, use the **Layout** pane.  The **Layout** pane is located in the **Elements** tool next to the **Styles** and **Computed** panes.  

:::image type="complex" source="../media/flexbox-layout.msft.png" alt-text="Layout panel" lightbox="../media/flexbox-layout.msft.png":::
   Layout panel  
:::image-end:::  

<!--Available in Microsoft Edge version 89 and later.  -->  

### Enable + button tab menus to open more tools  

You may now open more tools using the new **More Tools** \(`+`\) icon.  After you turn on the **Enable + button tab menus to open more tools** experiment and reload DevTools, a plus sign \(`+`\) displays to the right of the tab group at the top of the DevTools.  To display a list of other tools that you may add to the tab bar, choose the new **More Tools** \(`+`\) icon.  

:::image type="complex" source="../media/experiments-more-tools-button.msft.png" alt-text="More Tools in the top pane" lightbox="../media/experiments-more-tools-button.msft.png":::
   **More Tools** in the top pane
:::image-end:::  

<!--Available in Microsoft Edge version 89 and later.  -->  

### Enable Welcome tool

This experiment replaces the **What's New** tool with the new **Welcome** tool.  It displays a refreshed design for the following content.  

*   Links to developer docs  
*   the latest features  
*   release notes  
*   Option to contact the Microsoft Edge DevTools team  
    
The **Welcome** tool opens automatically after each update to Microsoft Edge.  To prevent the display of the **Welcome** tool after each update, clear the checkbox next to **Open tab after each update** under the **Welcome** tool title.  

If you prefer the original **What's New** tool, navigate to [Settings][DevtoolsCustomizeIndexSettings] > **Experiments** and remove the checkbox next to **Enable Welcome tab**.  

:::image type="complex" source="../media/experiments-welcome.msft.png" alt-text="Welcome tool" lightbox="../media/experiments-welcome.msft.png":::
   **Welcome** tool  
:::image-end:::  

<!--Available in Microsoft Edge version 89 and later.  -->  

## Previous experimental features  

*   [3D View][Devtools3dViewIndex] is now available and turned on by default in Microsoft Edge version 83 or later.  
*   [Turn on support to move tabs between panels][DevtoolsMoveTabs] is now available and turned on by default in Microsoft Edge version 85 or later.  
*   [Customize Keyboard Shortcuts][DevtoolsCustomKeyboardShortcuts] is now available and turned on by default in Microsoft Edge version 86 or later.  
*   [Emulation: Support dual screen mode][DevtoolsDeviceModeDualScreenAndFoldables] is now available and turned on by default in Microsoft Edge version 89 or later.  
*   [Turn on new CSS grid debugging features][DevtoolsCssGrid] is now available and turned on by default in Microsoft Edge version 89 or later.  
    
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
