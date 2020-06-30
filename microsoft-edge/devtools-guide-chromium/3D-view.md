---
description: All about 3D View and how to use it.
title: 3D View
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/30/2019
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---

# 3D View  

Use the **3D View** to debug your web application by navigating through the [Document Object Model (DOM)][MDNDocumentObjectModel] or the [z-index][MDNZIndex] stacking context.  With it you are able to perform the following tasks.  

*   [Explore the web page translated into a 3D perspective](#3d-dom)  
*   [Debug based on z-index stacking context](#z-index)  
*   [Clear some of the clutter on the DOM pane](#changing-your-view) or the [z-index pane](#change-the-scope-of-your-exploration)  
*   [Pick the color scheme to best debug your DOM problems](#dom-color-type) or [z-index problems](#z-index-color-type)  

If you want to explore an early prototype of 3D View project and run the code yourself, see [3D View Sample][GithubMicrosoftedgeDevtoolssamples3dview].   

On the left side, there are two panes that you are able to use for your debugging experience.  

1.  The [Z-index](#z-index) pane.  Navigate through the different elements in the web application with the z-index context in mind.  The **Z-index** pane is the default pane.  
1.  The [3D DOM](#3d-dom) pane.  Explore the DOM as a whole with all the elements at your fingertips.  To access the pane, select on the **DOM** pane next to the **Z-index** pane.  
    
On the right side, the canvas displays your selections from the [Z-index](#z-index) or [3D DOM](#3d-dom).  

## Navigating the canvas  

:::image type="complex" source="./media/canvas.png" alt-text="Canvas of 3D View" lightbox="./media/canvas.png":::
   Canvas of 3D View  
:::image-end:::  

### Keyboard shortcuts  

*   Rotate the DOM:  To rotate horizontally, press the `left-arrow` and `right-arrow` keys.  To rotate vertically, press the `up-arrow` and `down-arrow` keys.  
*   Navigate the DOM:  To move through the adjacent elements, select an element and press the `up-arrow` and `down-arrow` keys.  

### Mouse controls  

*   Rotate the DOM:  Select and drag around the canvas space.  
*   Pan around the DOM:  Open the contextual menu \(right-click\) and drag in the direction you want the DOM to move.  
*   Zoom:  Drag two fingers across the touchpad or use the scroll wheel on your mouse.  

### On-screen controls  

:::image type="complex" source="./media/controls-small.png" alt-text="On-screen controls" lightbox="./media/controls-small.png":::
   On-screen controls  
:::image-end:::  

*   Reset the canvas view to the original view:  Select the **Reset camera** button, or select the **Reset elements in view and re-center camera** \(sideways refresh icon\) button.  
*   Refresh the canvas \(for example, if the browser changed or you switched to a device emulator view\):  Select the **Retake snapshot** button or select the **Take new snapshot** button \(refresh icon\).  

## Z-index  

:::image type="complex" source="./media/z-index-view-box.png" alt-text="Z-index view" lightbox="./media/z-index-view-box.png":::
   Z-index view  
:::image-end:::  

While the **Z-index** pane has shared features with the **3D DOM** pane, the panes still have elements that are unique to the pane.  

### Highlight elements with stacking context  

The **Highlight elements with stacking context** setting allows you to turn on \(and off\) the z-index tags for the elements on the canvas.  The checkbox is selected by default.  

### Change the scope of your exploration  

The **Show all elements** button is the quickest way to display all the elements of the DOM after changing the settings below.  

The **Show only elements with stacking context** button removes elements without stacking context and flattens the DOM for easier navigation.  

The **Isolate selected element** button is essentially three buttons in one.  There are two checkboxes below the **Isolate selected element** button:  The **Show all parents** checkbox and **Keep only parents with new stacking context** checkbox.  

The **Show all parents** checkbox is selected by default.  If you select an element on the canvas pane and select **Isolate selected element** button, the canvas only displays the element and any parents.  

If you select the **Keep only parents with new stacking context** checkbox, and select **Isolate selected element** button, the canvas only displays the element and the parents that have a new stacking context.  

If you deselect both of the checkboxes and select **Isolate selected element** button, the canvas only displays the element you chose in the first place.  

At the very bottom of the **3D DOM** panel, locate the **Hide elements with the same paint order as their parent** checkbox.  Selecting and deselecting the checkbox refreshes the elements based on your selection.  If selected, elements that share paint order are flattened to the parent.  

The options are meant to clear up some of the clutter that more complex web pages create in your canvas.  

### Z-index color type  

The are the different visualizations you may use for the DOM in your canvas.  Whether you use it for fun or because the visualizations help you visualize the DOM better, The DevTools has three different colorways as well as a **background color** setting.  The radio buttons allow you to toggle through the options and pick the color type most appropriate for your project \(or that you like the most\).  

## 3D DOM  

:::image type="complex" source="./media/dom-purple-box.png" alt-text="DOM view" lightbox="./media/dom-purple-box.png":::
   DOM view  
:::image-end:::  

If you want to take more of a general debugging view, rather than the z-index experience, the **3D DOM** gives an overall look of the DOM.  Since the z-index context is removed, the DOM is stacked more closely and cleanly.  The **3D DOM** pane has similar functionality, but there are a few nuances.  

### Changing your view  

On the **3D DOM** pane, the **Isolate selected element** button has **Include children** and **Include parents** checkboxes.  By default both checkboxes are selected, which means that selecting the **Isolate selected element** button after selecting an element on the canvas should display the element chosen, the parents of the element, and the children of the element.  Deselecting the **Include children** checkbox and selecting the **Isolate selected element** button again should display the selected element and the parents of the element.  If you select the **Include children** checkbox and deselect the **Include parents** checkbox before selecting **Isolate selected element** button, the canvas then displays the element and any children.  If you deselect both checkboxes and select **Isolate selected element** button, the canvas only displays the element you previously selected.  

A slider on the control pane titled **Nesting level for page** with a number next to it.  The number indicates the number of layers for the document.  Dragging the slider to the left causes the outermost layers to peel away until you are left with a nesting level set to 1, which displays only the furthest back element in the DOM.  Dragging the slider allows you to remove some of the clutter if you are trying to get a closer look at what is happening in the lower levels.  

### DOM color type  

In addition to the **Heatmap - Purple to White**, **Heatmap - Blue to Yellow**, **Heatmap - Rainbow**, and **Use background color** radio buttons, there is **Use screen texture**.  The screen texture adds context to your debugging experience by displaying the content from the web page directly onto the elements.  On the **3D DOM** pane, the  **color type** setting is still a work in progress, since some websites have a harder time rendering screen texture in the 3D View.  

## Next steps  

The Microsoft Edge Devtools team is working on the UI and adding more functionality to the 3D View based on asks from users like you.  Please send your feedback to help improve the Microsoft Edge DevTools.  Simply select the feedback icon in the DevTools or press `Alt`+`Shift`+`I` \(Windows\) or press `Option`+`Shift`+`I` \(macOS\) and enter any feedback or feature requests you have for the DevTools.  

<!-- links -->  

[GithubMicrosoftedgeDevtoolssamples3dview]: https://github.com/MicrosoftEdge/DevToolsSamples/tree/master/3DView "Microsoft Edge DevTools 3D View - MicrosoftEdge/DevToolsSamples | GitHub"  

[MDNDocumentObjectModel]: https://developer.mozilla.org/docs/Web/API/Document_Object_Model "Document Object Model (DOM) | MDN"  
[MDNZIndex]: https://developer.mozilla.org/docs/Web/CSS/z-index "z-index | MDN"  
