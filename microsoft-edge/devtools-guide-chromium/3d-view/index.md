---
description: How to use 3D View, including navigating the canvas, Z-index, 3D DOM, and composited layers.
title: 3D View overview
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 12/03/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# 3D View

Use the **3D View** to debug your web app by navigating through the [Document Object Model (DOM)](https://developer.mozilla.org/docs/Web/API/Document_Object_Model) or the [z-index](https://developer.mozilla.org/docs/Web/CSS/z-index) stacking context.  Use **3D View** to do the following:
*   [Explore the web page translated into a 3D perspective](#3d-dom).
*   [Debug based on z-index stacking context](#z-index).
*   [Access the Layers tool functionality from 3D View with composited layers](#composited-layers).
*   [Clear some of the clutter on the DOM pane](#changing-your-view) or the [z-index pane](#change-the-scope-of-your-exploration).
*   [Pick the color scheme to best debug your DOM problems](#dom-color-type) or [z-index problems](#z-index-color-type).

To explore an early prototype of 3D View project and run the code yourself, navigate to [3D View Sample](https://github.com/MicrosoftEdge/DevToolsSamples/tree/master/3DView).

On the left side, there are three panes that you can use for your debugging experience:
*   The [Z-index](#z-index) pane.  Navigate through the different elements in the web app with the z-index context in mind.  The **Z-index** pane is the default pane.
*   The [3D DOM](#3d-dom) pane.  Explore the DOM as a whole with all the elements easily accessible.  To access the pane, select the **DOM** pane next to the **Z-index** pane.
*   The [Composited Layers](#composited-layers) pane.  Add another 3D element to create a more comprehensive experience from a layers perspective.  To access the pane, select the **Composited Layers** pane next to the **DOM** pane.

On the right side, the canvas displays your selections from the [Z-index](#z-index), [3D DOM](#3d-dom), or [Composited Layers](#composited-layers).


<!-- ====================================================================== -->
## Navigating the canvas

:::image type="complex" source="../media/3d-view-canvas.msft.png" alt-text="Canvas of 3D View" lightbox="../media/3d-view-canvas.msft.png":::
   Canvas of 3D View
:::image-end:::

### Keyboard shortcuts

To rotate the DOM horizontally, select the `left-arrow` and `right-arrow` keys.  To rotate vertically, select the `up-arrow` and `down-arrow` keys.

To navigate the DOM to move through the adjacent elements, select an element and then use the `up-arrow` and `down-arrow` keys.

### Mouse controls

To rotate the DOM, select and drag around the canvas space.

To pan around the DOM, right-click and drag in the direction you want the DOM to move.

To zoom, drag two fingers across the touchpad or use the scroll wheel on your mouse.

### On-screen controls

:::image type="complex" source="../media/3d-view-controls-small.msft.png" alt-text="On-screen controls" lightbox="../media/3d-view-controls-small.msft.png":::
   On-screen controls
:::image-end:::

To reset the canvas view to the original view, select the **Reset camera** button, or select the **Reset elements in view and re-center camera** (sideways refresh icon) button.

To refresh the canvas, such as when the browser changed or you switched to a device emulator view, select the **Retake snapshot** button or the **Take new snapshot** button (the refresh icon).


<!-- ====================================================================== -->
## Z-index

:::image type="complex" source="../media/3d-view-z-index-view-box.msft.png" alt-text="Z-index view" lightbox="../media/3d-view-z-index-view-box.msft.png":::
   Z-index view
:::image-end:::

While the **Z-index** pane has shared features with the **3D DOM** pane, the panes still have elements that are unique to the pane.

### Highlight elements with stacking context

The **Highlight elements with stacking context** setting allows you to turn on or off the z-index tags for the elements on the canvas.  By default, the checkbox is selected.

### Change the scope of your exploration

The **Show all elements** button is the quickest way to display all the elements of the DOM after changing the settings below it.

The **Show only elements with stacking context** button removes elements without stacking context and flattens the DOM for easier navigation.

The **Isolate selected element** button is essentially three buttons in one.  There are two checkboxes below the **Isolate selected element** button:  The **Show all parents** checkbox and **Keep only parents with new stacking context** checkbox.

The **Show all parents** checkbox is turned on by default.  To display the element and any parents on the canvas, select an element and then select the **Isolate selected element** button.

To display the element and the parents that have a new stacking context on the canvas, turn on the **Keep only parents with new stacking context** setting and then select the **Isolate selected element** button.

To display the element you selected on the canvas, turn off both the settings and then select **Isolate selected element** button.

At the bottom of the **3D DOM** pane, locate the **Hide elements with the same paint order as their parent** checkbox.  Choosing and deselecting the checkbox refreshes the elements based on your choice.  When this checkbox is selected, elements that share paint order are flattened to the parent.

The options reduce the clutter that complex web pages create in your canvas.

### Z-index color type

The are the different visualizations you can use for the DOM in your canvas.  Whether you use it for fun or because the visualizations help you visualize the DOM better, the DevTools have different colorways and a **Use background color** option.  The **Z-index** pane shares the **Purple to White** and **Background Color** with the **3D DOM** pane.  Given the added visual element of the z-index labels, your feedback that led to a reduction in the number of color options.

This approach improves the z-index debugging experience.  The radio buttons allow you to toggle through the options and pick the color type.  The color type is either most appropriate for your project or one that you like the most.


<!-- ====================================================================== -->
## 3D DOM

:::image type="complex" source="../media/3d-view-dom-purple-box.msft.png" alt-text="DOM view" lightbox="../media/3d-view-dom-purple-box.msft.png":::
   DOM view
:::image-end:::

If you want to take more of a general debugging view, rather than the z-index experience, the **3D DOM** gives an overall look of the DOM.  Since the z-index context is removed, the DOM is stacked more closely and cleanly.  The **3D DOM** pane has similar functionality, but there are a few nuances.

### Changing your view

On the **3D DOM** pane, the **Isolate selected element** button has **Include children** and **Include parents** checkboxes.  Both checkboxes are turned on by default.  That means if you select the **Isolate selected element** button after you select an element, the canvas displays the selected element, the parents of the element, and the children of the element.

To display the selected element and the parents of the element, turn off the **Include children** setting and then select the **Isolate selected element** button again.

If you turn on the **Include children** setting and turn off the **Include parents** setting and then select the **Isolate selected element** button, the canvas displays the element and any children.  If you turn off both settings and then select the **Isolate selected element** button, the canvas only displays the element you previously selected.

A slider on the control pane named **Nesting level for page** with a number next to it.  The number indicates the number of layers for the document.  Dragging the slider to the left causes the outermost layers to peel away until you are left with a nesting level set to `1`, which displays only the furthest back element in the DOM.  To remove some of the clutter, drag the slider.  It helps you get a closer look at what is happening in the lower levels.

### DOM color type

The **3D DOM** pane has the following options:
*   Three different colorways:
    *   **Heatmap - Purple to White**
    *   **Heatmap - Blue to Yellow**
    *   **Heatmap - Rainbow**
*   **Use background color**
*   **Use screen texture**

The **Use screen texture** option adds context to your debugging experience.  It directly displays the content from the webpage onto the elements.


<!-- ====================================================================== -->
## Composited layers

:::image type="complex" source="../media/experiments-layers.msft.png" alt-text="Composited layers pane" lightbox="../media/experiments-layers.msft.png":::
   **Composited Layers** pane
:::image-end:::

The **Composited Layers** pane opens the elements of the **Layers** tool without changing contexts.  You can still access the details of each of the layers and have the **Slow scroll rects** and **Paint**.
