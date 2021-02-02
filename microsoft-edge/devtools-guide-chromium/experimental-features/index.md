---
description: The latest experimental features in Microsoft Edge DevTools
title: Experimental features
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 02/02/2020 
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
| [Enable new CSS grid debugging features](#enable-new-css-grid-debugging-features) | 85 or later |  
| [Enable support to move tabs between panels](#enable-support-to-move-tabs-between-panels) | 85 or later |  
| [Enable webhint](#enable-webhint) | 85 or later |  
| [Enable Network Console](#enable-network-console) | 85 or later |  
| [Source Order Viewer](#source-order-viewer) | 86 or later |  
| [Enable keyboard shortcut editor](#enable-keyboard-shortcut-editor) | 87 or later |  
| [Turn on Composited Layers in 3D View](#turn-on-composited-layers-in-3d-view) | 87 or later |  

### Enable new CSS grid debugging features  

This experimental feature provides a number of new visualizations to help you debug CSS grid layouts.  To preview the latest experimental features, [enable this experiment](#turn-on-experimental-features) and reload DevTools.  This experiment is on by default in Microsoft Edge version 87 or later.  

#### Viewing on-hover grid overlays with the Inspect tool  

The **Inspect** tool provides a quick way to identify and visualize CSS Grid layouts in a website by hovering over them with the mouse.  Choose the **Inspect** \(![Inspect][ImageInspectIcon]\) icon in the top-left corner of DevTools.  Then, hover over a Grid element on the website you are debugging.  Outlines are displayed around the grid, and shading indicates the location of grid gaps if present.  

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

Normally, tools such as **Elements** and **Network** may only open in the main panel that is located at the top of the DevTools.  Tools like **3D View** and **Issues** which normally only open in the **Drawer** panel that is located at the bottom of the DevTools.  After you choose the experiment, you may move tools between the top and bottom panels.  To move a tool, hover on the tab, open the contextual menu \(right-click\), and choose **Move to top** or **Move to bottom**.   This experiment allows you to customize your DevTools layout.  To show or hide the **Drawer** panel, select `Escape`.  

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

<!--Available in Microsoft Edge version 87 and later.  -->  

## Previous experimental features  

*   [3D View][Devtools3dViewIndex] is now available and turned on by default in Microsoft Edge version 83 or later.  
*   [Customize Keyboard Shortcuts][DevtoolsCustomKeyboardShortcuts] is now available and turned on by default in Microsoft Edge version 86 or later.  
*   [Emulation: Support dual screen mode][DevtoolsDeviceModeDualScreenAndFoldables] is now available and turned on by default in Microsoft Edge version 89 or later.  

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
[DevtoolsIssues]: ../issues/index.md "Find and fix problems with the Microsoft Edge DevTools Issues tool | Microsoft Docs"  
[DevToolsShortcuts]: ../shortcuts/index.md "Microsoft Edge DevTools keyboard shortcuts | Microsoft Docs"  
[DevtoolsCustomKeyboardShortcuts]: ../customize/shortcuts.md "Customize keyboard shortcuts in the Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsOpenMain]: ../open/index.md "Open Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsDeviceModeDualScreenAndFoldables]: ../device-mode/dual-screen-and-foldables.md "Emulate dual-screen and foldable devices in Microsoft Edge DevTools | Microsoft Docs"

[TwitterEdgedevtools]: https://www.twitter.com/EdgeDevTools "Microsoft Edge DevTools | Twitter"  

[WebhintMain]: https://webhint.io "webhint"  
