---
ms.assetid: 27055133-e779-460f-ab9b-35eb69f90619
description: Learn how about the relative and absolute units of measurement in CSS.
title: Dev guide - Length units relative and absolute
author: libbymc
ms.author: libbymc
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Relative and absolute length units

Measurements and positions in CSS properties are indicated in length units. Relative units specify a length in relation to another property, and scale better from one output device to another (such as from a monitor to a printer) and in comparison to other page elements. Absolute units specify an exact measurement, such as inches or centimeters, and are useful when you know the physical properties of the output device.

Relative length units | Description
:------------ | :-------------
% | A fluid measurement based on the percentage of space within a given container
em | A fluid measurement of space in relation to the computed font-size of the parent container
rem | Font size of the root element (not dependent on the font-size of it's parent container)
vw | The viewport width (equal to 1% of the width of the initial containing block)
vh | The viewport height (equal to 1% of the height of the initial containing block)
vmin | The smaller (minimum) value of viewport width or height
vmax | The larger (maximum) value of viewport width or height
ex | The height of a lowercase "x" in a font. 
ch | Zero-width, width of the zero glyph in the rendering font (Unicode character U+0030)

> [!NOTE]
> In a @page at-rule declaration block, the use of the viewport lengths are invalid and the declaration will be dropped.


Absolute length units | Description
:------------ | :-------------
px | Pixels, relative to the viewing device, a non-fluid unit of measurement (1/96th of a physical inch)
in | Inches (1in = 2.54cm = 96px)
cm | Centimeters (96px)
mm | Millimeters (1/10th of 1cm)
pt | Points (1pt = 1/72 inches)
pc | Picas (1pc = 12pt)

## Relative and absolute font sizes
Setting the font size may change the size of other items, since it is used to compute values such as  em and ex length units.

Absolute font sizes | Keyword
:------------ | :-------------
font-size | xx-small;
font-size | x-small;
font-size | small;
font-size | medium;
font-size | large;
font-size | x-large;
font-size | xx-large;

Relative font sizes | Keyword
:------------ | :-------------
font-size | larger;
font-size | smaller;

Global font sizes | Keyword
:------------ | :-------------
font-size | inherit;
font-size | initial;
font-size | unset;

