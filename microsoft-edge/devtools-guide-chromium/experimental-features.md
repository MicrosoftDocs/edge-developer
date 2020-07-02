---
description: The latest experimental features in Microsoft Edge DevTools
title: Experimental features
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/02/2020
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
     *   Press `Control`+`Shift`+`I` \(Windows\) or `Command`+`Option`+`I` \(macOS\).  For more information, see [Microsoft Edge DevTools keyboard shortcuts][DevToolsShortcuts].  
1.  Open the [Settings][DevToolsCustomizeSettings] pane.  
    *   Press `Shift`+`?`.  For more information, see [Microsoft Edge DevTools keyboard shortcuts][DevToolsShortcuts].  
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

### Enable custom keyboard shortcuts settings tab

Provides a new **Shortcuts** page in [DevTools Settings][DevToolsCustomizeSettings] that enables matching [keyboard shortcuts][DevToolsShortcuts] in the DevTools to [VS Code][VisualstudioCode].  

Once you have enabled this experiment, open [DevTools Settings][DevToolsCustomizeSettings] again by pressing `Shift`+`?`.  Navigate to the new **Shortcuts** page.  Select **DevTools (Default)** in the **Match shortcuts from preset** dropdown and select **Visual Studio Code**.  The keyboard shortcuts in the DevTools now match the shortcuts for equivalent actions in VS Code.  

:::image type="complex" source="./media/experiments-keyboard-shortcut.png" alt-text="Match keyboard shortcuts in the DevTools to VS Code" lightbox="./media/experiments-keyboard-shortcut.png":::
   Match keyboard shortcuts in the DevTools to VS Code
:::image-end:::  

For example, on Windows the keyboard shortcut for pausing or continuing running a script in [VS Code][VisualstudioCodeShortcutsKeyboardWindows] is `F5`.  With the **DevTools (Default)** preset, that same shortcut in the DevTools is `F8` but with the **Visual Studio Code** preset, that shortcut is now also `F5`.  

### Enable new CSS grid debugging features  

Improves on-page visualizations when you debug websites that have CSS grid layouts.  You may further customize the overlays in DevTools Settings.  

:::image type="complex" source="./media/experiments-grid.png" alt-text="CSS grid debugging feature" lightbox="./media/experiments-grid.png":::
   CSS grid debugging feature  
:::image-end:::  

<!--Available in Microsoft Edge version 85 and later.  -->  

### Enable support to move tabs between panels  

Normally, tools such as **Elements** and **Network** may only be opened in the main \(top\) panel of DevTools.  Similarly, tools such as **3D View** and **Issues** may only be opened in the drawer \(bottom\) panel of DevTools.  When this experiment is selected, you may move tools between the top and bottom panels by hovering on the tab, opening the contextual menu \(right-click\), and selecting **Move to top** or **Move to bottom**.   This experiment allows you to customize your DevTools layout.  To show or hide the bottom panel, press `Escape`.  

:::image type="complex" source="./media/experiments-move-panels.png" alt-text="Moving tabs between panels" lightbox="./media/experiments-move-panels.png":::
   Moving tabs between panels  
:::image-end:::  

<!--Available in Microsoft Edge version 85 and later.  -->  

### Enable webhint  

[webhint][WebhintMain] is an open-source tool that provides real-time feedback on the accessibility, cross-browser compatibility, security, performance, PWAs, and other common web development issues of websites.  This experiment brings the webhint feedback into DevTools in the [Issues][DevtoolsIssues] panel.  You may select the issue to see documentation on how to fix the issue and a list of the affected resources on your website.  Select a resource link to open the relevant **Network**, **Sources**, or **Elements** pane in DevTools.  

:::image type="complex" source="./media/experiments-webhint.png" alt-text="webhint feedback in the Issues panel" lightbox="./media/experiments-webhint.png":::
   webhint feedback in the Issues panel  
:::image-end:::      

<!--Available in Microsoft Edge version 85 and later.  -->  

## Previous experimental features  

*   [3D View][Devtools3DView] is now available and turned on by default in Microsoft Edge version 83 or later.  

## Providing feedback on experimental features  

To provide feedback on Microsoft Edge DevTools experiments, or anything else related to DevTools:  

*   Send your feedback using the Feedback icon in the DevTools  
*   Tweet at [@EdgeDevTools][TwitterEdgedevtools]  

:::image type="complex" source="./media/devtools-feedback.png" alt-text="Feedback icon in the Microsoft Edge DevTools" lightbox="./media/devtools-feedback.png":::
   Feedback icon in the Microsoft Edge DevTools  
:::image-end:::  

<!-- links -->  

[Devtools3DView]: ./3D-view.md "3D View | Microsoft Docs"  
[DevtoolsIssues]: ./issues/index.md "Find and fix problems with the Microsoft Edge DevTools Issues tool | Microsoft Docs"  
[DevToolsCustomizeSettings]: ./customize/index.md#settings "Settings - Customize Microsoft Edge DevTools | Microsoft Docs"  
[DevToolsShortcuts]: ./shortcuts.md "Microsoft Edge DevTools keyboard shortcuts | Microsoft Docs"  
[DevtoolsOpen]: ./open.md "Open Microsoft Edge DevTools | Microsoft Docs"  

[TwitterEdgedevtools]: https://www.twitter.com/EdgeDevTools "Microsoft Edge DevTools | Twitter"  

[VisualstudioCode]: https://code.visualstudio.com "Visual Studio Code"  
[VisualstudioCodeShortcutsKeyboardWindows]: https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf "Visual Studio Code Keyboard shortcuts for Windows | Visual Studio Code"  

[WebhintMain]: https://webhint.io "webhint" 
