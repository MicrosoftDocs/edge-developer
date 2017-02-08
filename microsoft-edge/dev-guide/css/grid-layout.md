---
ms.assetid: 3348a2a0-8657-402d-8568-88415fdf28b1
description: Learn how to use CSS Grid Layout to make fluid layouts for your website.
title: Dev guide - Grid layout
author: libbymc
ms.author: libbymc
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Grid layout


Cascading Style Sheets, Level 3 (CSS3) [Grid Layout](https://msdn.microsoft.com/library/Hh772052) ("the Grid") enables more layout fluidity than is possible with positioning using floats or scripts. You're able to divide space for major regions of a webpage or web application, and define relationships between the parts of an HTML control in terms of size, position, and layer. This removes the need to create a fixed layout, which can't take advantage of available space within the browser window.

Because the Grid enables you to align elements into columns and rows but has no content structure, it also enables scenarios that are not possible with HTML tables. By using the Grid in conjunction with media queries, you can create a layout that can seamlessly adapt to changes in device form factor, orientation, available space, and more.

## The Grid element
The basic building block of Grid Layout is the Grid element, which is declared by setting the [`display`](https://msdn.microsoft.com/library/ms530751) property of an element to either `-ms-grid` (for a block-level Grid element) or `-ms-inline-grid` (for an inline-level Grid element). For instance, the following code example creates a Grid within the element that has an ID of "myGrid":


```css
#myGrid {
  display: -ms-grid;
  background: gray;
}
```


> [!WARNING]
> Because of the preliminary status of the Grid Layout draft, all properties in this section must be used with the Microsoft-specific vendor prefix, "-ms-", in order to work correctly.


## Tracks (Columns and Rows)

After creating the Grid element, apply sizes to your columns and rows by using the following properties:

| Property                                                          | Description                                                                                      |
|-------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| [-ms-grid-columns](https://msdn.microsoft.com/library/Hh772246) | Specifies the width of each grid column within the Grid. Each column is delimited using a space. |
| [-ms-grid-rows](https://msdn.microsoft.com/library/Hh772258)    | Specifies the height of each grid row within the Grid. Each row is delimited using a space.      |

 

You can size columns and rows (referred to as *tracks*) using any of the following:

* [standard length units](./length-units-relative-and-absolute.md) or a percentage of the object's width (for columns) or height (for rows)
* the `auto` keyword, indicating the width of the column or height of the row is sized based on the items inside of it
* the `min-content` keyword, indicating the minimum width or height of any child elements is used as the width or height
* the `max-content` keyword, indicating the maximum width or height of any child elements used as the width or height
* the `minmax(a,b)` keyword, indicating the width or height is between *a* and *b*, as available space allows
* fraction units (fr), indicating the available space should be divided among the columns or rows according to their fraction values, as illustrated in the following example

For an example of fraction units, consider the following expanded version of the `myGrid` ID selector:

```css
#myGrid {
  display: -ms-grid;
  background: gray;
  border: blue;
  -ms-grid-columns: auto 100px 1fr 2fr;
  -ms-grid-rows: 50px 5em auto;
}
```

This Grid has four columns, and each column appears as described here:

* Column 1 (`auto` keyword): Column is fitted to the content in the column.
* Column 2 ("100px"): Column is 100 pixels wide.
* Column 3 ("1fr"): Column takes up one fraction unit of the remaining space.
* Column 4 ("2fr"): Column takes up two fraction units of the remaining space.

Because there are three total fraction units in this grid, Column 3 is allotted 1 fraction unit divided by 3 fraction units—or 1/3—of the remaining space. Column 4 is allotted 2/3 of the remaining space.

Similarly, this Grid has three rows, and each row appears as described here:

* Row 1 ("50px"): Row is 50 pixels tall.
* Row 2 ("5em"): Row is 5 ems tall.
* Row 3 (`auto` keyword): Row is fitted to the content in the row.

### Repeating Grid tracks

If there are a large number of columns or rows that are the same or exhibit a recurring pattern, a repeat syntax can be applied to define the columns or rows in a more compact form. The two snippets below have the same effect. There is a single row, and a pattern of repetitive column tracks: a 250px column followed by a 10px gutter. This makes things a lot less repetitive!

```css
  #myGrid {
    display: -ms-grid;
    -ms-grid-columns: 10px 250px 10px 250px 10px 250px 10px 250px 10px;
    -ms-grid-rows: 1fr;
  } 

  /* Equivalent definition. */
  #myGrid {
    display: -ms-grid;
    -ms-grid-columns: 10px (250px 10px)[4];
    -ms-grid-rows: 1fr;
  }
```

## Grid items

Child elements of the Grid are called *Grid items*, and are positioned using the following properties:

| Property                                                         | Description                                                   |
|------------------------------------------------------------------|---------------------------------------------------------------|
| [-ms-grid-column](https://msdn.microsoft.com/library/Hh772242) | Specifies in which column of the grid to place the Grid item. |
| [-ms-grid-row](https://msdn.microsoft.com/library/Hh772254)    | Specifies in which row of the grid to place the Grid item.    |


The track numbering system is a 1-based index, with 1 being the default. Given the Grid declared previously, check out the four ID selectors below:

```css
#item1 {
	background: OrangeRed;
	border: black solid 1px;
	-ms-grid-row: 1; /* default is 1 */;
	-ms-grid-column: 1; /* default is 1 */
}
#item2 {
	background: YellowGreen;
	border: black solid 1px;
	-ms-grid-row: 1;
	-ms-grid-column: 2;
}
#item3 {
	background: gold;
	border: black solid 1px;
	-ms-grid-row: 2;
	-ms-grid-column: 2;
}
#item4 {
	background: DodgerBlue;
	border: black solid 1px;
	-ms-grid-row: 2;
	-ms-grid-column: 1;
}
```

Now, apply these selectors to the following markup:

```html
<div id="myGrid">
	<div id="item1">Item 1</div>
	<div id="item2">Item 2</div>
	<div id="item3">Item 3</div>
	<div id="item4">Item 4</div>
</div>
```

The results can be seen in the following CodePen. Feel free to play around with the items!

<div class="codepen-wrap"><p data-height="300" data-theme-id="23761" data-slug-hash="JKWgoK" data-default-tab="result" data-user="MicrosoftEdgeDocumentation" data-embed-version="2" data-editable="true" class="codepen">See this example by <a href="https://codepen.io/MicrosoftEdgeDocumentation">Microsoft Edge Docs</a> on <a href="https://codepen.io/MicrosoftEdgeDocumentation/pen/JKWgoK">CodePen</a>.</p></div><script async src="//assets.codepen.io/assets/embed/ei.js"></script>

### Aligning Grid items

You can position Grid items along any of the edges of the cells formed by the columns and rows using the following properties:

| Property                                                                  | Description                                                                                                                      |
|---------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| [-ms-grid-column-align](https://msdn.microsoft.com/library/hh772245) | Specifies the horizontal alignment of the Grid item within the Grid column. Possible values are center, end, start, and stretch. |
| [-ms-grid-row-align](https://msdn.microsoft.com/library/hh772256)    | Specifies the vertical alignment of the Grid item within the Grid row. Possible values are center, end, start, and stretch.      |


If you modify the `item3` selector by adding the four lines seen below...

```css
#item3 {
	background: gold;
	border: black solid 1px;
	-ms-grid-row: 2;
	-ms-grid-column: 2;
	width: 45px;
	height: 45px;
	-ms-grid-column-align: end;
	-ms-grid-row-align: center;
}
```

And add the following item along with its accompanying selector...

```css
#item5 {
  background: SkyBlue ;
  border: black dashed 1px;
  -ms-grid-row: 3;
  -ms-grid-column: 3;
}
```

```html
<div id="myGrid">
  <div id="item1">Item 1</div>
  <div id="item2">Item 2</div>
  <div id="item3">Item 3</div>
  <div id="item4">Item 4</div>
  <div id="item5">Item 5</div>
</div>
```

You get an Item 3 that is resized, centered, and moved to the far end of the column that it's in. You also get an Item 5 that fills position 3,3.

<div class="codepen-wrap"><p data-height="300" data-theme-id="23761" data-slug-hash="JKWgoK" data-default-tab="result" data-user="MicrosoftEdgeDocumentation" data-embed-version="2" data-editable="true" class="codepen">See this example by <a href="https://codepen.io/MicrosoftEdgeDocumentation">Microsoft Edge Docs</a> on <a href="https://codepen.io/MicrosoftEdgeDocumentation/pen/XKMvGM">CodePen</a>.</p></div><script async src="//assets.codepen.io/assets/embed/ei.js"></script>

### Stacking Grid items

You can *stack* Grid items by placing them in the same columns or rows. By default, an item that comes later in the markup will be drawn on top of items that come before it.

To try this out, change the selector for Item 5 so that it is placed in row 2, column 2, which is where Item 3 is located.

Because the [div](http://go.microsoft.com/fwlink/p/?LinkID=209627) for Item 5 comes after the [div](http://go.microsoft.com/fwlink/p/?LinkID=209627) for Item 3, Item 5 draws on top of Item 3.

<div class="codepen-wrap"><p data-height="300" data-theme-id="23761" data-slug-hash="JKWgoK" data-default-tab="result" data-user="MicrosoftEdgeDocumentation" data-embed-version="2" data-editable="true" class="codepen">See this example by <a href="https://codepen.io/MicrosoftEdgeDocumentation">Microsoft Edge Docs</a> on <a href="https://codepen.io/MicrosoftEdgeDocumentation/pen/aZWovE">CodePen</a>.</p></div><script async src="//assets.codepen.io/assets/embed/ei.js"></script>

To override this default behavior, use the [`z-index`](https://msdn.microsoft.com/library/ms531188) property:

| Property                                                 | Description                                                          |
|----------------------------------------------------------|----------------------------------------------------------------------|
| [z-index](https://msdn.microsoft.com/library/ms531188) | Specifies the layer (z-index) of the Grid item within the Grid cell. |


While the `z-index` property normally only applies to objects that have the [`position`](https://msdn.microsoft.com/library/ms531140) property not set to `static`, the `z-index` property applies to Grid items even when the position property is set to `static`.

In the selector for Item 5, assign a value of "-1" to the `z-index` property to push that item back in the stacking order:

<div class="codepen-wrap"><p data-height="300" data-theme-id="23761" data-slug-hash="JKWgoK" data-default-tab="result" data-user="MicrosoftEdgeDocumentation" data-embed-version="2" data-editable="true" class="codepen">See this example by <a href="https://codepen.io/MicrosoftEdgeDocumentation">Microsoft Edge Docs</a> on <a href="https://codepen.io/MicrosoftEdgeDocumentation/pen/NrpQVK">CodePen</a>.</p></div><script async src="//assets.codepen.io/assets/embed/ei.js"></script>

This makes Item 3 appear on top of Item 5.

### Spanning Grid items

You can make grid items span multiple columns or rows by using the following two properties:

| Property                                                                 | Description                                                                                 |
|--------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [-ms-grid-column-span](https://msdn.microsoft.com/library/hh772248) | Specifies the number of columns of the Grid that the Grid item spans. Default value is "1". |
| [-ms-grid-row-span](https://msdn.microsoft.com/library/hh772260)    | Specifies the number of rows of the Grid that the Grid item spans. Default value is "1".    |


Remove all the selectors except for Item 1 and assign a value of "4" to the `-ms-grid-column-span`property. Also change the value of the `-ms-grid-column` property to "1" to cause it to span four column widths (all the columns):

<div class="codepen-wrap"><p data-height="300" data-theme-id="23761" data-slug-hash="JKWgoK" data-default-tab="result" data-user="MicrosoftEdgeDocumentation" data-embed-version="2" data-editable="true" class="codepen">See this example by <a href="https://codepen.io/MicrosoftEdgeDocumentation">Microsoft Edge Docs</a> on <a href="https://codepen.io/MicrosoftEdgeDocumentation/pen/rLyXgy">CodePen</a>.</p></div><script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Be aware that if you attempt to span past the number of defined columns or rows in the Grid (for instance, in the previous example, if you leave the value of the `-ms-grid-column` property as "2" and set the `-ms-grid-column-span` property to "4", you have exceeded the number of defined columns by 1), another column or row is implicitly created and its width or height is set to `auto` (fit to content) for every column or row beyond the defined number.

## API reference
[Grid Layout](https://msdn.microsoft.com/library/Hh772052)


## Specification
[CSS Grid Layout](http://go.microsoft.com/fwlink/p/?LinkID=235082)
