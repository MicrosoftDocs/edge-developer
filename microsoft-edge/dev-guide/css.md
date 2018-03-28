---
ms.assetid: 39b2332e-11b8-4934-b8be-bf75543405d4
description: See guides for CSS features in Microsoft Edge like animation and filter effects.
title: Dev guide - CSS
author: libbymc
ms.author: libbymc
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# CSS features

## Animations
CSS [Animations](./css/animations.md) enable you to create visually appealing rich applications with smooth, fluid, animated experiences. Animations are similar to  transitions  in that they animate elements as they change position, size, color, and opacity; and as they rotate, scale, translate, and so on. And just as you can with transitions, you can specify timing functions to control the rate of progression of an animation.

## The calc() Function
The ['calc()' function](./css/calc-function.md) can be used wherever length values are allowed: it's a way to do simple math right in your native CSS. The expression within the parentheses is computed at the same time as 'em' lengths are computed.

## Exclusions
CSS [Exclusions](./css/exclusions.md) define how inline content flow around elements, extending the content wrapping ability of floats to any block-level element. 

## Filter Effects
CSS [Filter Effects](./css/filter-effects.md) allow you to manipulate graphics directly in the browser. You can add a blur, adjust the brightness, change an image to grayscale, and more. 

## Flexbox
With [Flexible Box Layout ('Flexbox')](./css/flexbox.md), you can lay out complex webpages more easily and make the relative position and size of elements adjust as screen and browser window sizes change. Flexbox can lessen the reliance on floats and table-based layouts, which are more complicated to position and size correctly.

## Gradients
[Gradients](./css/gradients.md) are images that transition smoothly from one color to another. Microsoft Edge supports linear, circular, and elliptical CSS gradients, each of which are specified by a gradient line and two or more stop points.

## Grid Layout
CSS [Grid Layout](./css/grid-layout.md) enables more layout fluidity than is possible with positioning using floats or scripts. You're able to divide space for major regions of a webpage or web application, and define relationships between the parts of an HTML control in terms of size, position, and layer. This removes the need to create a fixed layout, which can't take advantage of available space within the browser window.

## Relative and absolute length units
Measurements and positions in CSS properties are indicated in [length units](./css/length-units-relative-and-absolute.md). Relative units specify a length in relation to another property, and scale better from one output device to another (such as from a monitor to a printer) and in comparison to other page elements. Absolute units specify an exact measurement, such as inches or centimeters, and are useful when you know the physical properties of the output device.

## Media Queries
[Media Queries](./css/media-queries.md) enable you to scope a stylesheet to a set of precise device capabilities. Through media query listeners, you can also use script to react to changes in the media or environment in which your page is running.

## Media query listeners
[Media Query Listeners](./css/media-query-listeners.md) enable evaluating a media query at runtime using JavaScript and subscribing listeners to changes in the media query's evaluation.

## Multi-column Layout
[Multi-column Layout](./css/multi-column-layout.md) allows content to flow into multiple columns, which retain a gap and an optional rule between them. It also makes it possible to vary the number of columns based on the size of the browser window. 

## Newly supported CSS properties and pseudo-classes
Check out the [latest CSS properties and pseudo-classes](./css/newly-supported-properties-and-pseudo-classes.md) supported by Microsoft Edge.

## Regions
CSS [Regions](./css/regions.md) is a layout feature used to achieve more flexible, magazine-like, content flow through specified regions of the page (for example, flowing text along the contour of a mountain). A single HTML content stream of text and images can be segmented into multiple empty containers defined in a standard HTML template. HTML templates are documents that are mostly empty of original content, but are instead composed primarily of empty containers that are sized and positioned to give incoming content a specific layout.

## @supports and window.CSS.supports()
The [`@supports` CSS rule](./css/supports-at-rule.md) gives you the ability to perform a CSS feature query, checking whether a browser supports a feature, then applying the styles for those elements if the condition is met. CSS `@supports` is complemented by the JavaScript `window.CSS.supports()` API.  

## Transforms
CSS [Transforms](./css/transforms.md) enable you to rotate, scale, move, skew, and translate page elements in 2D and 3D space. 

## Transitions
CSS [Transitions](./css/transitions.md) enable you to gradually change CSS property values over a specified time duration without need for script.
