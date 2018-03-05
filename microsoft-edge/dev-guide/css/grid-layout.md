---
ms.assetid: 3348a2a0-8657-402d-8568-88415fdf28b1
description: Learn how to use CSS Grid Layout to make fluid layouts for your website.
title: Dev guide - Grid layout
author: libbymc
ms.author: libbymc
ms.date: 10/10/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Grid layout

[CSS Grid Layout](http://go.microsoft.com/fwlink/p/?LinkID=235082) enables more layout fluidity than is possible with positioning using floats or scripts. You're able to divide space for major regions of a webpage or web application, and define relationships between the parts of an HTML control in terms of size, position, and layer. By using the Grid in conjunction with media queries, you can create a layout that can seamlessly adapt to changes in device form factor, orientation, available space, and more.

The example below uses CSS Grid Layout to create the structure for a basic web page.

<iframe height='303' scrolling='no' title='CSS Grid Layout' src='//codepen.io/MSEdgeDev/embed/mMQqZX/?height=303&theme-id=23761&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/MSEdgeDev/pen/mMQqZX/'>CSS Grid Layout</a>by MSEdgeDev (<a href='https://codepen.io/MSEdgeDev'>@MSEdgeDev</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


## CSS Grid Layout properties supported in Microsoft Edge

| Property                       | Description                            | 
|--------------------------------|----------------------------------------------|
| [grid](https://developer.mozilla.org/docs/Web/CSS/grid) | A shorthand property that sets [grid-template-areas](https://developer.mozilla.org/docs/Web/CSS/grid-template-areas), [grid-template-columns](https://developer.mozilla.org/docs/Web/CSS/grid-template-columns), [grid-template-rows](https://developer.mozilla.org/docs/Web/CSS/grid-template-rows), [grid-auto-columns](https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns), [grid-auto-flow](https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow), [grid-auto-rows](https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows), [grid-column-gap](https://developer.mozilla.org/docs/Web/CSS/grid-column-gap), and [grid-row-gap](https://developer.mozilla.org/docs/Web/CSS/grid-row-gap) in a single declaration. |
| [grid-area](https://developer.mozilla.org/docs/Web/CSS/grid-area) | A shorthand property for [grid-row-start](https://developer.mozilla.org/docs/Web/CSS/grid-row-start), [grid-row-end](https://developer.mozilla.org/docs/Web/CSS/grid-row-end), [grid-column-start](https://developer.mozilla.org/docs/Web/CSS/grid-column-start), and [grid-column-end](https://developer.mozilla.org/docs/Web/CSS/grid-column-end) that specifies the edges of a grid item's grid area.
| [grid-auto-columns](https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns) | Specifies the size of an implicitly-created grid column track.
| [grid-auto-flow](https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow) | Specifies how auto-placed itmes get flowed into the grid. 
| [grid-auto-rows](https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows) | Specifies the size of an implicitly-created grid row track.
| [grid-column](https://developer.mozilla.org/docs/Web/CSS/grid-column) | A shorthand property for [grid-column-start](https://developer.mozilla.org/docs/Web/CSS/grid-column-start) and  [grid-column-end](https://developer.mozilla.org/docs/Web/CSS/grid-column-end) that specifies the inline-start and inline-end of a grid item's grid area. 
| [grid-column-end](https://developer.mozilla.org/docs/Web/CSS/grid-column-end) | Specifies the block-end edge of a grid item's grid area.
| [grid-column-gap](https://developer.mozilla.org/docs/Web/CSS/grid-column-gap) | Specifies the gutters between grid columns.
| [grid-column-start](https://developer.mozilla.org/docs/Web/CSS/grid-column-start) | Specifies the block-start edge of a grid item's grid area.
| [grid-gap](https://developer.mozilla.org/docs/Web/CSS/grid-gap) | A shorthand property for [grid-column-gap](https://developer.mozilla.org/docs/Web/CSS/grid-column-gap) and [grid-row-gap](https://developer.mozilla.org/docs/Web/CSS/grid-row-gap) that specifies the gutters between columns and rows.
| [grid-row-end](https://developer.mozilla.org/docs/Web/CSS/grid-row-end) | Specifies the inline-end edge of a grid item's grid area.
| [grid-row-gap](https://developer.mozilla.org/docs/Web/CSS/grid-row-gap) | pecifies the gutters between grid rows.
| [grid-row-start](https://developer.mozilla.org/docs/Web/CSS/grid-row-start) | Specifies the inline-start edge of a grid item's grid area.
| [grid-row](https://developer.mozilla.org/docs/Web/CSS/grid-row) | A shorthand property for grid-row-start](https://developer.mozilla.org/docs/Web/CSS/grid-row-start) and [grid-row-end](https://developer.mozilla.org/docs/Web/CSS/grid-row-end) that specifies the inline-start and inline-end of a grid item's grid area.
| [grid-template](https://developer.mozilla.org/docs/Web/CSS/grid-template) | A shorthand property for [grid-template-areas](https://developer.mozilla.org/docs/Web/CSS/grid-template-areas), [grid-template-columns](https://developer.mozilla.org/docs/Web/CSS/grid-template-columns), and [grid-template-rows](https://developer.mozilla.org/docs/Web/CSS/grid-template-rows) that defines grid columns, rows, and areas. 
| [grid-template-areas](https://developer.mozilla.org/docs/Web/CSS/grid-template-areas) | Specifies named grid areas.
| [grid-template-columns](https://developer.mozilla.org/docs/Web/CSS/grid-template-columns) | Defines the line names and track sizing functions of grid columns.  
| [grid-template-rows](https://developer.mozilla.org/docs/Web/CSS/grid-template-rows) | Defines the line names and track sizing functions of the grid rows.



## Specification
[CSS Grid Layout](http://go.microsoft.com/fwlink/p/?LinkID=235082)
