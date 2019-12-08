---
description: All about 3D View and how to use it.
title: 3D View
author: erdraud
ms.author: erdraud
ms.date: 11/27/2019
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---

# 3D View

Use the **3D View** to debug your web application by navigating through the [Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) (DOM) or the [z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index) stacking context. With it you can: 

- [Explore the web page translated into a 3D perspevtive](#3d-dom)
- [Debugging based on z-index stacking context](#z-index)
- [Clear some of the clutter in the DOM pane](#changing-your-view) or the [z-index pane](#change-the-scope-of-your-exploration)
- [Pick the color scheme to best debug your DOM problems](#dom-color-type) or [z-index problems](#z-index-color-type)

There are two panes that you can use for your debugging experience.

1. **Z-index** Navigate through the different elements in the web application with the z-index context in mind. This is the default pane.
2. **3D DOM** Explore the DOM as a whole with all the elements at your fingertips. To access this pane, click on the "DOM" pane next to the "Z-index" pane.

![Z-index view](./media/z-index-view.png)

## Z-index

While the Z-index pane has shared features with the DOM pane, they still have elements that are unique to the pane.

### Highlight elements with stacking context

This setting allows you to toggle the z-index tags on and off for the elements in the canvas. The checkbox will be selected by default.

### Change the scope of your exploration

The **Show all elements** button is the quickest way to display all the DOM's elements after changing the settings below.

**Show only elements with stacking context** removes elements without stacking context and flattens the DOM for easier navigation.

The **Isolate selected element** filter is essentially three buttons in one. There are two checkboxes below this button: one is "Show all parents" and "Keep only parents with new stacking context." 

The "Show all parents" checkbox will be checked by default. If you select an element in the canvas pane and click on **Isolate selected element**, the canvas will only display the element and its parents.

If you select the "Keep only parents with new stacking context," and click on **Isolate selected element**, the canvas will only display the element and the parents that have a new stacking context.

If you deselect both of the checkboxes and click on **Isolate selected element**, the canvas will only display the element you chose in the first place.

At the very bottom of the controls panel, there is the **Hide elements with the same paint order as their parent** toggle. Selecting and deselecting the checkbox will reload the elements based on your selection. If selected, elements that share paint order will be flattened to the parent.

These options are meant to clear up some of the clutter that more complex web pages create in your canvas.

### Z-index color type

These are the different visualizations you can use for the DOM in your canvas. Whether you use it for fun or because they help you visualize the DOM better, we have three different colorways as well as a "background color" setting. The radio buttons allow you to toggle through the options and pick the color type most appropriate for your project (or that you like the most).

![DOM view](./media/facebook-dom-texture.png)

## 3D DOM

If you want to take more of a general debugging view, rather than the z-index experience, the 3D DOM gives an overall look of the DOM. Since the z-index context is removed, the DOM is stacked more closely and cleanly. This pane has similar functionality, but there are a few nuances.

### Changing your view

In the **3D DOM** pane, the **Isolate selected element** filter has "Include children" and "Include parents." By default both checkboxes are selected, which means that clicking on the **Isolate selected element** button after selecting an element in the canvas would display the element chosen, the element's parents, and the element's children. Deselecting the "Include children" checkbox and clicking the **Isolate selected element** button again would display the selected element and the element's parents. If you select the "Include children" checkbox and deselect the "Include parents" checkbox before clicking on **Isolate selected element**, the canvas will then display the element and its children. If you deselect both checkboxes and click on **Isolate selected element**, the canvas will only display the element you previously selected.

You'll notice a slider in the control pane titled **Nesting level** with a number next to it. The number indicates the number of layers in the document. Dragging the slider to the left will cause the outermost layers to peel away until you are left with a nesting level of 1, displaying only the furthest back element in the DOM. This allows you to remove some of the clutter if you are trying to get a closer look at what is going on in the lower levels.

### DOM color type

You'll notice that, in addition to the *Purple to White*, *Blue to Yellow*, *Rainbow*, and *Use background color* options, there is *Use screen texture*. The screen texture adds context to your debugging experience by displaying the content from the web page directly onto the elements. This is still a work in progress, but feel free to send us feedback with the smiley to show us websites that have a harder time rendering their screen texture in the 3D View. 

## Next steps

We are working on the UI and adding more functionality to the 3D View based on asks from users like you. Please send us your feedback so we can continue improving the Microsoft Edge DevTools for you! Simply click the `:)` icon in the DevTools or press `Alt` + `Shift` + `I` on Windows (`Option` + `Shift` + `I` on Mac) and enter any feedback or feature requests you have for the DevTools.

![Give feedback on Microsoft Edge](./devtools-guide-chromium/media/devtools-feedback2.png)