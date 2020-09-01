---
description: The latest experimental features in Microsoft Edge DevTools
title: Experimental features
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 08/25/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, experiment
---

# Experimental features  

You may use the experimental features that are still under development in the Microsoft Edge DevTools to test and [provide feedback](#providing-feedback-on-experimental-features) before each is released broadly.  

While experimental features are available in all channels of Microsoft Edge, you may get the latest experimental features using the Microsoft Edge Canary channel.  

## Turn on experimental features  

Use the following steps to turn on \(or off\) experimental features in Microsoft Edge.  

1.  [Open DevTools][DevtoolsOpen].  
     *   Select `Control`+`Shift`+`I` \(Windows\) or `Command`+`Option`+`I` \(macOS\).  For more information, see [Microsoft Edge DevTools keyboard shortcuts][DevToolsShortcuts].  
1.  Open the [Settings][DevToolsCustomizeSettings] pane.  
    *   Select `Shift`+`?`.  For more information, see [Microsoft Edge DevTools keyboard shortcuts][DevToolsShortcuts].  
1.  On the left side of the **Settings** pane, select the **Experiments** section.  
    
    :::image type="complex" source="./media/experiments-devtools.png" alt-text="List of experiments in DevTools Settings" lightbox="./media/experiments-devtools.png":::
       List of experiments in DevTools Settings  
    :::image-end:::  
    
1.  On the **Experiments** page, scroll through the list of all available experimental features and select the checkbox next to each features that you want to test.  
1.  Close and reopen Microsoft Edge DevTools.  

> [!NOTE]
> Experimental features are constantly being updated and may cause performance issues.  To turn off an experimental feature, open the **Experiments** page and clear the checkbox of the experimental feature that you want to turn off.  

## Highlighted experimental features  

The following sections describe the new experimental features that are available in Microsoft Edge.  

| Experimental feature | Microsoft Edge version |  
|:--- |:--- |  
| [Enable custom keyboard shortcuts settings tab](#enable-custom-keyboard-shortcuts-settings-tab) | 84 or later |
| [Enable new CSS grid debugging features](#enable-new-css-grid-debugging-features) | 85 or later |  
| [Enable support to move tabs between panels](#enable-support-to-move-tabs-between-panels) | 85 or later |  
| [Enable webhint](#enable-webhint) | 85 or later |  
| [Enable Network Console](#enable-network-console) | 85 or later |  
| [Enable Source Order Viewer](#enable-source-order-viewer) | 86 or later |  

### Enable custom keyboard shortcuts settings tab  

Provides a new **Shortcuts** page in [DevTools Settings][DevToolsCustomizeSettings] that enables matching [keyboard shortcuts][DevToolsShortcuts] in the DevTools to [Microsoft Visual Studio Code][VisualstudioCode].  

Once you have enabled the experiment, open [DevTools Settings][DevToolsCustomizeSettings] again using select `Shift`+`?`.  Navigate to the new **Shortcuts** page.  Select **DevTools (Default)** in the **Match shortcuts from preset** dropdown and select **Visual Studio Code**.  The keyboard shortcuts in the DevTools now match the shortcuts for equivalent actions in Visual Studio Code.  

:::image type="complex" source="./media/experiments-keyboard-shortcut.png" alt-text="Match keyboard shortcuts in the DevTools to Visual Studio Code" lightbox="./media/experiments-keyboard-shortcut.png":::
   Match keyboard shortcuts in the DevTools to Visual Studio Code  
:::image-end:::  

For example, on Windows the keyboard shortcut for pausing or continuing running a script in [Visual Studio Code][VisualstudioCodeShortcutsKeyboardWindows] is `F5`.  With the **DevTools (Default)** preset, the same shortcut in the DevTools is `F8`.  With the **Visual Studio Code** preset, the shortcut is also `F5`.  

### Enable new CSS grid debugging features  

Improves on-page visualizations when you debug websites that have CSS grid layouts.  You may further customize the overlays in DevTools Settings.  

:::image type="complex" source="./media/experiments-grid.png" alt-text="CSS grid debugging feature" lightbox="./media/experiments-grid.png":::
   CSS grid debugging feature  
:::image-end:::  

<!--Available in Microsoft Edge version 85 and later.  -->  

### Enable support to move tabs between panels  

Normally, tools such as **Elements** and **Network** may only be opened in the main \(top\) panel of DevTools.  Similarly, tools such as **3D View** and **Issues** may only be opened in the drawer \(bottom\) panel of DevTools.  When you choose the experiment, you may move tools between the top and bottom panels by hovering on the tab, opening the contextual menu \(right-click\), and choose **Move to top** or **Move to bottom**.   This experiment allows you to customize your DevTools layout.  To show or hide the bottom panel, select `Escape`.  

:::image type="complex" source="./media/experiments-move-panels.png" alt-text="Moving tabs between panels" lightbox="./media/experiments-move-panels.png":::
   Moving tabs between panels  
:::image-end:::  

<!--Available in Microsoft Edge version 85 and later.  -->  

### Enable webhint  

[webhint][WebhintMain] is an open-source tool that provides real-time feedback on the accessibility, cross-browser compatibility, security, performance, PWAs, and other common web development issues of websites.  The [webhint][WebhintMain] experiment brings the webhint feedback into DevTools in the [Issues][DevtoolsIssues] panel.  You may select the issue to see documentation on how to fix the issue and a list of the affected resources on your website.  Select a resource link to open the relevant **Network**, **Sources**, or **Elements** pane in DevTools.  

:::image type="complex" source="./media/experiments-webhint.png" alt-text="webhint feedback in the Issues panel" lightbox="./media/experiments-webhint.png":::
   webhint feedback in the **Issues** panel  
:::image-end:::  

<!--Available in Microsoft Edge version 85 and later.  -->  

### Enable Network Console  

**Network Console** is the working title of an experiment to make synthetic network requests over HTTP.  You may use the **Network Console** experiment to send web API requests.  

After enabling the experiment, ensure you restart the DevTools.  To use the Network Console:  

1.  Open the **Network** pane.  
1.  Find the network request that you want to change and resend.  
1.  Open the contextual menu \(right-click\), and choose **Edit and Replay**.  
1.  When the **Network Console** opens, edit the network request information.  
1.  Select **Send**.  

:::image type="complex" source="./media/network-network-console.png" alt-text="Network Console in the Console drawer" lightbox="./media/network-network-console.png":::
   **Network Console** in the **Console** drawer  
:::image-end:::  

<!--Available in Microsoft Edge version 85 and later.  --> 

### Enable Source Order Viewer  

**Source Order Viewer** is the working title of an experiment to display the order of elements in the page source.  You may use the **Source Order Viewer** experiment to find accessibility issues in your pages since the display order on-screen may differ from the order of the source, which confuses screen reader users.  

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

<!-- links -->  

[Devtools3dViewIndex]: ./3d-view/index.md "3D View | Microsoft Docs"  
[DevtoolsIssues]: ./issues/index.md "Find and fix problems with the Microsoft Edge DevTools Issues tool | Microsoft Docs"  
[DevToolsCustomizeSettings]: ./customize/index.md#settings "Settings - Customize Microsoft Edge DevTools | Microsoft Docs"  
[DevToolsShortcuts]: ./shortcuts.md "Microsoft Edge DevTools keyboard shortcuts | Microsoft Docs"  
[DevtoolsOpen]: ./open.md "Open Microsoft Edge DevTools | Microsoft Docs"  

[TwitterEdgedevtools]: https://www.twitter.com/EdgeDevTools "Microsoft Edge DevTools | Twitter"  

[VisualstudioCode]: https://code.visualstudio.com "Microsoft Visual Studio Code"  
[VisualstudioCodeShortcutsKeyboardWindows]: https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf "Visual Studio Code Keyboard shortcuts for Windows | Microsoft Visual Studio Code"  

[WebhintMain]: https://webhint.io "webhint" 
