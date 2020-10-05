---
description: Learn how to use Microsoft Edge DevTools to view and change the CSS of a page CSS.
title: Inspect CSS Grid in Microsoft Edge DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/05/2020 
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---

# Inspect CSS Grid  

This article walks you through CSS grids on a webpage, examining them and debugging layout issues in the **Elements** panel of Microsoft Edge DevTools.  

The examples used in the figures in this article are from the following two webpages.  

*   [Fruit box][JecFyiDemoCssGridFruit]  
*   [Snack box][JecFyiDemoCssGridSnack]  

## Discover CSS grids  

When an HTML element on your page has `display: grid` or `display: inline-grid` applied to it, a `grid` badge is displayed next to it in the [Elements][DevtoolsGuideChromiumOpen] panel.  

:::image type="complex" source="../media/grid-discover-grid.msft.png" alt-text="Discover grid" lightbox="../media/grid-discover-grid.msft.png":::
   Discover grid  
:::image-end:::  

Select the badge to toggle the display of a grid overlay on the page.  The overlay appears over the element, laid out like a grid to display the position of the grid lines and tracks:  

:::image type="complex" source="../media/grid-highlight-grid.msft.png" alt-text="Toggle grid badge" lightbox="../media/grid-highlight-grid.msft.png":::
   Toggle grid badge  
:::image-end:::  

Open the **Layout** pane.  When grids are included on a page, the **Layout** pane includes a **Grid** section containing a number of options for viewing the grids.  

:::image type="complex" source="../media/grid-layout-pane.msft.png" alt-text="Layout pane" lightbox="../media/grid-layout-pane.msft.png":::
   **Layout** pane  
:::image-end:::  
 

The **Grid** section in the **Layout** pane contains 2 sub sections:  

*   Overlay display settings  
*   Grid overlays  

Verify the details for each of the sub-sections.  

## Overlay display settings  

The **Overlay display settings** consists of 2 parts:  

1.  A dropdown menu with options within:  
    
    :::row:::
       :::column span="":::
          **Hide line labels**  
       :::column-end:::
       :::column span="":::
          Hide the line labels for each grid overlay.  
       :::column-end:::
    :::row-end:::  
    :::row:::
       :::column span="":::
          **Show lines number**  
       :::column-end:::
       :::column span="":::
          Display the line numbers for each grid overlay \(selected by default\).  
       :::column-end:::
    :::row-end:::  
    :::row:::
       :::column span="":::
          **Show line names**  
       :::column-end:::
       :::column span="":::
          Display the line names for each grid overlay in the case of grids with line names.  
       :::column-end:::
    :::row-end:::  
    
1.  Checkboxes with options within:  
    
    :::row:::
       :::column span="":::
          **Show track sizes**  
       :::column-end:::
       :::column span="":::
          Toggle to display or hide track sizes.  
       :::column-end:::
    :::row-end:::  
    :::row:::
       :::column span="":::
          **Show area names**  
       :::column-end:::
       :::column span="":::
          Toggle to display or hide area names, in the case of grids with named grid areas.  
       :::column-end:::
    :::row-end:::  
    :::row:::
       :::column span="":::
          **Extend grid lines**  
       :::column-end:::
       :::column span="":::
          By default, grid lines are only shown inside the element with `display: grid` or `display: inline-grid` set on it; when toggling the option on, the grid lines extend to the edge of the viewport along each axis.  
       :::column-end:::
    :::row-end:::  
    
Examine the settings in more detail.  

### Show line numbers  

By default, the positive and negative line numbers are displayed on the grid overlay.  

:::image type="complex" source="../media/grid-show-line-numbers.msft.png" alt-text="Display line numbers" lightbox="../media/grid-show-line-numbers.msft.png":::
   Display line numbers  
:::image-end:::  

### Hide line labels  

Select **Hide line labels** to hide the line numbers.  

:::image type="complex" source="../media/grid-hide-line-labels.msft.png" alt-text="Hide line labels" lightbox="../media/grid-hide-line-labels.msft.png":::
   Hide line labels  
:::image-end:::  

### Show line names  

Select **Show line names** to view the line names instead of numbers.  In the example, 4 lines have names: `left`, `middle1`, `middle2`, and `right`.  

In the demo, **orange** element spans from left to right, with CSS `grid-column: left / right`.  Showing line names make it easier to visualize the start and end position of the element.  

:::image type="complex" source="../media/grid-show-line-names.msft.png" alt-text="Show line names" lightbox="../media/grid-show-line-names.msft.png":::
   **Show line names**  
:::image-end:::  

### Show track sizes  

Enable the **Show track sizes** checkbox to view the track sizes of the grid.  

DevTools displays `[authored size] - [computed size]` in each line label.  

:::row:::
   :::column span="":::
      **Authored** size  
   :::column-end:::
   :::column span="":::
      The size defined in stylesheet \(omitted if not defined\).  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="":::
      **Computed** size  
   :::column-end:::
   :::column span="":::
      The actual size on screen.  
   :::column-end:::
:::row-end:::  

In the demo, the `snack-box` column sizes are defined in the CSS `grid-template-columns:1fr 2fr;`.  Therefore, the column line labels display both authored and computed sizes.  

*   **1fr - 96.66px**  
*   **2fr - 193.32px**  
    
The row line labels display only computed sizes, since there are no row sizes defined in the stylesheet.  

*   **80px**  
*   **80px**  
    
:::image type="complex" source="../media/grid-show-track-sizes.msft.png" alt-text="Show track sizes" lightbox="../media/grid-show-track-sizes.msft.png":::
   **Show track sizes**  
:::image-end:::  

### Show area names  

To view the area names, enable the **Show area names** checkbox.  In the example, there are 3 areas in the grid - **top**, **bottom1** and **bottom2**.  

:::image type="complex" source="../media/grid-show-area-names.msft.png" alt-text="Show area names" lightbox="../media/grid-show-area-names.msft.png":::
   **Show area names**  
:::image-end:::  

### Extend grid lines  

Enable the **Extend grid lines** checkbox to extend the grid lines to the edge of the viewport along each axis.  

:::image type="complex" source="../media/grid-extend-grid-lines.msft.png" alt-text="Extend grid lines" lightbox="../media/grid-extend-grid-lines.msft.png":::
   **Extend grid lines**  
:::image-end:::  

## Grid overlays  

The **Grid overlays** section contains a list of grids that are present on the page, each with a checkbox, along with various options.  

### Enable overlay views of multiple grids  

Enable overlay views of multiple grids.  In the example, there are 2 grid overlays enabled that are each represented with different colors.  

*   `main`  
*   `div.snack-box`  
    
:::image type="complex" source="../media/grid-grid-overlays.msft.png" alt-text="Enable overlay views of multiple grids" lightbox="../media/grid-grid-overlays.msft.png":::
   Enable overlay views of multiple grids  
:::image-end:::  

### Customize the grid overlay color  

To customize each grid overlay color, select the color picker.  

:::image type="complex" source="../media/grid-grid-overlays-color.msft.png" alt-text="Customize the grid overlay color" lightbox="../media/grid-grid-overlays-color.msft.png":::
   Customize the grid overlay color  
:::image-end:::  

### Highlight the grid  

Select the highlight icon to immediately highlight the HTML element, scroll to it in the page and select it in the **Elements** panel.  

:::image type="complex" source="../media/grid-grid-overlays-highlight.msft.png" alt-text="Highlight the grid" lightbox="../media/grid-grid-overlays-highlight.msft.png":::
   Highlight the grid  
:::image-end:::  

## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  

[DevtoolsGuideChromiumOpen]: ../open.md "Open Microsoft Edge DevTools | Microsoft Docs"  

[JecFyiDemoCssGridFruit]: https://jec.fyi/demo/css-grid-fruit "CSS grid | jec.fyi"  
[JecFyiDemoCssGridSnack]: https://jec.fyi/demo/css-grid-snack "CSS grid | jec.fyi"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/css/grid) and is authored by [Jecelyn Yeen][JecelynYeen] \(Developer advocate, Chrome DevTools\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[JecelynYeen]: https://developers.google.com/web/resources/contributors/jecelynyeen  
