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

The Microsoft Edge DevTools periodically offers experimental features that are released while still in development.  By enabling an experiment, you are able to test and [provide early feedback](#providing-feedback-on-experimental-features) on the features before being released broadly.  

Experiments are available in all channels of Microsoft Edge.  Use the Microsoft Edge Canary channel to get the very latest experiments.  

## How to enable experiments  

To enable an experiment.  

1.  Open DevTools.  
    *   Press `F12`.  
1.  Open **Settings**.  
    *   Select the gear icon at the top-right corner.  
    *   Press `F1`.  
1.  On the left side of the **Settings** panel, there is a tab named **Experiments**.  Select the tab to see all available experiments.  
    
    :::image type="complex" source="./media/experiments-devtools.png" alt-text="List of experiments in DevTools Settings" lightbox="./media/experiments-devtools.png":::
       List of experiments in DevTools Settings  
    :::image-end:::  
    
1.  Select the checkboxes next to experiments you would like to try.  
1.  Close and reopen DevTools.  

> [!NOTE]
> Some experimental features are "works in progress" and may cause performance issues.  To remove an experiment, de-select the checkbox next to the experiment and reloading the DevTools again.  

## Selected experimental features  

| Experiment | Microsoft Edge version |  
|:--- |:--- |  
| [Enable new CSS grid debugging features](#enable-new-css-grid-debugging-features) | 85 or later |  
| [Enable support to move tabs between panels](#enable-support-to-move-tabs-between-panels) | 85 or later |  
| [Enable webhint](#enable-webhint) | 85 or later |  

The following sections outline some of the experimental features currently available in Microsoft Edge.  

### Enable new CSS grid debugging features  

Improves on-page visualizations for websites using CSS grid layouts.  

:::image type="complex" source="./media/experiments-grid.png" alt-text="CSS grid debugging feature" lightbox="./media/experiments-grid.png":::
   CSS grid debugging feature  
:::image-end:::  

<!--Available in Microsoft Edge version 85 and later.  -->  

### Enable support to move tabs between panels  

Normally, tools such as **Elements** and **Network** may only be open in the main \(top\) panel of DevTools.  Likewise, tools such as `3D View` and `Issues` may only open in the drawer \(bottom\) panel of DevTools.  However, when the experiment is enabled, you are able to move tools between the top and bottoms panels by hovering on the tab, open the contextual menu \(right-click\), and select **Move to top** or **Move to bottom**.   After you enable the experiment, you are able to better customize your DevTools layout.  

:::image type="complex" source="./media/experiments-move-panels.png" alt-text="Moving tabs between panels" lightbox="./media/experiments-move-panels.png":::
   Moving tabs between panels  
:::image-end:::  

The bottom panel may be hidden and shown by pressing `Ctrl`+`` ` ``.  

<!--Available in Microsoft Edge version 85 and later.  -->  

### Enable webhint  

[webhint][WebhintMain] is an open-source tool that surfaces real-time feedback on the accessibility, cross-browser compatibility, security, performance, PWAs, and other common web development issues of a website.  After you enable the experiment, the webhint feedback is brought directly into DevTools using the [Issues panel][Issues].  

:::image type="complex" source="./media/experiments-webhint.png" alt-text="webhint feedback in the Issues panel" lightbox="./media/experiments-webhint.png":::
   webhint feedback in the Issues panel  
:::image-end:::  

Select the issue to see documentation on how to fix the issue as well as a list of affected resources.  Select a resource link to open the relevant **Network**, **Sources**, or **Elements** pane in DevTools.  

<!--Available in Microsoft Edge version 85 and later.  -->  

## Previous experimental features  

*   [3D View][3DView] is now activated by default starting with Microsoft Edge version 83.  

## Providing feedback on experimental features  

To provide feedback on Microsoft Edge DevTools experiments, or anything else related to DevTools.  

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
