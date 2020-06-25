---
description: The latest experimental features in Microsoft Edge DevTools
title: Experimental features
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/23/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, experiment
---

# Experimental features  

You may use the experimental features that are still under development in the Microsoft Edge DevTools to test and [provide feedback](#providing-feedback-on-experimental-features) before they are released broadly.  

While experimental features are available in all channels of Microsoft Edge, you may get the latest experimental features using the Microsoft Edge Canary channel.  

## Turn on experimental features  

To select the experimental features to use in Microsoft Edge:  

1.  Open DevTools by pressing `F12`.  
2.  Open **Settings** by selecting the gear icon at the top-right corner.  
3.  On the left side of the **Settings** panel, choose **Experiments** to see all available experiments.  
    
    :::image type="complex" source="./media/experiments-devtools.png" alt-text="List of experiments in DevTools Settings" lightbox="./media/experiments-devtools.png":::
       List of experiments in DevTools Settings  
    :::image-end:::  
    
4.  Select the checkboxes of the experimental features that you'd like to test.  
5.  Close and reopen Microsoft Edge DevTools.  

> [!NOTE]
> Experimental features are constantly being updated and may cause performance issues.  To turn off an experimental feature, repease the previous steps and clear the checkbox of the experimental feature as needed.

## Highlighted experimental features  

The following sections describe the new experimental features that are available in Microsoft Edge.  

| Experiment | Microsoft Edge version |  
|:--- |:--- |  
| [Enable new CSS grid debugging features](#enable-new-css-grid-debugging-features) | 85 or later |  
| [Enable support to move tabs between panels](#enable-support-to-move-tabs-between-panels) | 85 or later |  
| [Enable webhint](#enable-webhint) | 85 or later |  

### Enable new CSS grid debugging features  

Thie feature improves on-page visualizations when debugging websites that have CSS grid layouts. You may further customize the overlays in DevTools Settings.

:::image type="complex" source="./media/experiments-grid.png" alt-text="CSS grid debugging feature" lightbox="./media/experiments-grid.png":::
   CSS grid debugging feature  
:::image-end:::  

<!--Available in Microsoft Edge version 85 and later.  -->  

### Enable support to move tabs between panels  

Normally, tools such as **Elements** and **Network** may only be opened in the main \(top\) panel of DevTools.  Similarly, tools such as `3D View` and `Issues` may only opened in the drawer \(bottom\) panel of DevTools.  When this experiment is selected, you may move tools between the top and bottom panels by hovering on the tab, opening the contextual menu \(right-click\), and selecting **Move to top** or **Move to bottom**.   This experiment allows you to better customize your DevTools layout.  To show or hide the bottom panel, press `Escape`.  

:::image type="complex" source="./media/experiments-move-panels.png" alt-text="Moving tabs between panels" lightbox="./media/experiments-move-panels.png":::
   Moving tabs between panels  
:::image-end:::  

<!--Available in Microsoft Edge version 85 and later.  -->  

### Enable webhint  

[webhint][WebhintMain] is an open-source tool that provides real-time feedback on the accessibility, cross-browser compatibility, security, performance, PWAs, and other common web development issues of websites.  After you enable this experiment, the webhint feedback is brought into DevTools in the [Issues panel][Issues].  You may select the issue to see documentation on how to fix the issue and a list of the affected resources on your website. Select a resource link to open the relevant **Network**, **Sources**, or **Elements** pane in DevTools.

:::image type="complex" source="./media/experiments-webhint.png" alt-text="webhint feedback in the Issues panel" lightbox="./media/experiments-webhint.png":::
   webhint feedback in the Issues panel  
:::image-end:::      

<!--Available in Microsoft Edge version 85 and later.  -->  

## Previous experimental features  

*   [3D View][3DView] is now available and turned on by default in Microsoft Edge version 83 and later.  

## Providing feedback on experimental features  

To provide feedback on Microsoft Edge DevTools experiments, or anything else related to DevTools:  

*   Send your feedback using the Feedback icon in the DevTools  
*   Tweet at [@EdgeDevTools][TwitterEdgedevtools]  

:::image type="complex" source="./media/devtools-feedback.png" alt-text="Feedback icon in the Microsoft Edge DevTools" lightbox="./media/devtools-feedback.png":::
   Feedback icon in the Microsoft Edge DevTools  
:::image-end:::  

<!-- links -->  

[3DView]: ./3D-view.md "3D View | Microsoft Docs"  
[Issues]: ./issues/index.md "Find and fix problems with the Microsoft Edge DevTools Issues tool | Microsoft Docs"  

[TwitterEdgedevtools]: https://www.twitter.com/EdgeDevTools "Microsoft Edge DevTools | Twitter"  

[WebhintMain]: https://webhint.io "webhint" 
