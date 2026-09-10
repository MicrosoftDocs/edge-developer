---
title: Badges reference
description: Badges reference.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 07/15/2026
---
<!-- Copyright Sofia Emelianova

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->
# Badges reference
<!-- https://developer.chrome.com/docs/devtools/elements/badges -->

Toggle various overlays and speed up DOM tree navigation with this comprehensive reference of badges in the **Elements** tool.


<!-- ====================================================================== -->
## Show or hide badges
<!-- https://developer.chrome.com/docs/devtools/elements/badges#show-or-hide -->

To show or hide certain badges:

1. Open DevTools.

1. Right-click an element in the DOM tree and check one or several badges in the Badge settings sub-menu.

   ![The 'Badge settings' menu] todo png

The Elements panel shows the selected badges next to the appropriate elements in the DOM tree. The next sections explain every badge.


<!-- ====================================================================== -->
## View-source
<!-- https://developer.chrome.com/docs/devtools/elements/badges#view-source -->

The view-source badge is next to the `<html>` tag at the root of the HTML page. Click it to view the source of your page in the Sources panel.

The 'view source' badge.

This badge provides an alternative workflow to the View Page Source option in Chrome's page context (right-click) menu:

In Chrome, right-click > Inspect a page.
In the Elements panel, click the view-source badge next to the `<html>` tag.
Inspect the page source in the Sources panel.


<!-- ====================================================================== -->
## Grid
<!-- https://developer.chrome.com/docs/devtools/elements/badges#grid -->

An HTML element is a grid container if its display CSS property is set to grid or inline-grid. Such elements have grid badges next to them that toggle the corresponding overlays.

Toggle the overlay on the following preview:

todo: convert inline code to Demos repo dir

Inspect the element in the preview.
In the DOM tree, click the grid badge next to the element and observe the overlay.
Grid overlay.

The overlay shows columns, rows, their numbers, and gaps.

To learn how to debug grid layout, see Inspect CSS grid.


<!-- ====================================================================== -->
## Subgrid
<!-- https://developer.chrome.com/docs/devtools/elements/badges#subgrid -->

A subgrid is a nested grid that uses the same tracks as its parent grid. An element is a subgrid container if one or both of its grid-template-columns, grid-template-rows properties are set to subgrid. Such elements have subgrid badges next to them that toggle the corresponding overlays.

Toggle the overlay on the following preview:

todo: convert inline code to Demos repo dir

Inspect the element in the preview.
In the DOM tree, click the subgrid badge next to the element and observe the overlay.
Subgrid overlay.

The overlay shows columns, rows, their numbers, and gaps of a subgrid.


<!-- ====================================================================== -->
## Flex
<!-- https://developer.chrome.com/docs/devtools/elements/badges#flex -->

An HTML element is a flex container if its display CSS property is set to flex or inline-flex. Such elements have flex badges next to them that toggle the corresponding overlays.

Toggle the overlay on the following preview:

todo: convert inline code to Demos repo dir

Inspect the element in the preview.
In the DOM tree, click the flex badge next to the element and observe the overlay.
Flex overlay.

The overlay shows child element positions.

To learn how to debug flex layouts, see Inspect and debug CSS flexbox.


<!-- ====================================================================== -->
## Ad
<!-- https://developer.chrome.com/docs/devtools/elements/badges#ad -->

DevTools can detect some ad frames and tag them. Such frames have ad badges next to them.

Discover an ad in the following preview:

todo: convert inline code to Demos repo dir

Inspect the element in the preview.
In the DOM tree, find an element with the ad badge next to it.
Ad badge.

The ad badge is not clickable but if you hover over it, you will see a tooltip that provides context on why the element was identified as an ad, such as:

Ad badge's tooltip.

Script ancestry: Which scripts were involved in creating the element.
Filter list rules: The specific rule from a filter list (for example, EasyList) that matched the element or the resource it loaded.
You can also use the Rendering tab to highlight ad frames in red.


<!-- ====================================================================== -->
## Scroll
<!-- https://developer.chrome.com/docs/devtools/elements/badges#scroll -->

An HTML element is a scroll container if its overflow CSS property is set to scroll, or auto when there's enough content to cause overflow. Such elements have scroll badges next to them.

Scroll badge on a DOM tree node.


<!-- ====================================================================== -->
## Scroll-snap
<!-- https://developer.chrome.com/docs/devtools/elements/badges#scroll-snap -->

Scroll containers can have CSS properties that configure snap points. Such elements have scroll-snap badges next to them that toggle the corresponding overlays.

Toggle the overlay on the following preview:

todo: convert inline code to Demos repo dir

Inspect the element in the preview.
In the DOM tree, click the scroll-snap badge next to the element.
Try scrolling the element to the right and observe the overlay.
Scroll-snap overlay.

The overlay shows element positions and snap points.


<!-- ====================================================================== -->
## Container
<!-- https://developer.chrome.com/docs/devtools/elements/badges#container -->

An HTML element is a container if it has the container-type CSS property. Such elements have container badges next to them that toggle the corresponding overlays.

CSS container queries is an experimental feature. To enable its support in DevTools, under chrome://flags, set the Enable CSS Container Queries experiment to Enabled. Otherwise, the next preview doesn't work.

Toggle the overlay on the following preview:

todo: convert inline code to Demos repo dir

1. CSS container queries is an experimental feature. To enable its support in DevTools, under chrome://flags, set the Enable CSS Container Queries experiment to Enabled. Otherwise, the next preview doesn't work.

1. Inspect the element in the preview.

1. In the DOM tree, click the container badge next to the element.

1. Try resizing the element by dragging its bottom-right corner and observe the layout change and overlay.

   ![Container overlay] todo png

   The overlay shows child element positions.

To learn how to debug container queries, see [Inspect and debug CSS container queries] todo link.


<!-- ====================================================================== -->
## Slot
<!-- https://developer.chrome.com/docs/devtools/elements/badges#slot -->

The `<slot>` HTML element is a placeholder that you can fill with your own content. Together with the `<template>` element, `<slot>` lets you create separate DOM trees and present them together. Slot content elements have ink_selectionslot badges next to them that serve as links to the corresponding slots.

Discover the ink_selectionslot badge in the following preview:

todo: convert inline code to Demos repo dir

Inspect the element in the preview.
In the DOM tree, click the ink_selectionslot badge next to the element to locate the corresponding slot. Slot and reveal badges.
Key point: The ink_selectionslot badge has a paired ink_selectionreveal badge that takes you back.
Get back to the slot's content by clicking the ink_selectionreveal badge.


<!-- ====================================================================== -->
## Top-layer
<!-- https://developer.chrome.com/docs/devtools/elements/badges#top-layer -->

This badge helps you understand the concept of the top layer and visualize it. The top layer renders content on top of all other layers, regardless of z-index. When you open a `<dialog>` element using the .showModal() method, the browser puts it into the top layer.

To help you visualize top layer elements, the Elements panel adds a #top-layer container to the DOM tree after the closing `</html>` tag.

Top layer elements have ink_selectiontop-layer (N) badges next to them, where N is the element's index number. The badges are links to the corresponding elements in the #top-layer container.

Discover the ink_selectiontop-layer (N) badge in the following preview:

todo: convert inline code to Demos repo dir

In the preview, click Open dialog.
Inspect the dialog.
In the DOM tree, click the ink_selectiontop-layer (1) badge next to the `<dialog>` element. The Elements panel takes you to the corresponding element in the #top-layer container after the closing `</html>` tag. The top-layer container and badge.
Key point: The ink_selectiontop-layer (N) badge has a paired ink_selectionreveal badge that takes you back.
Get back to the `<dialog>` element by clicking the ink_selectionreveal badge next to the element or its ::backdrop.


<!-- ====================================================================== -->
## Media
<!-- https://developer.chrome.com/docs/devtools/elements/badges#media -->

The media badge is turned off by default. When turned on, it appears next to `<audio>` and `<video>` elements.  Click this badge to open the Media panel and debug your media.

The media badge turned on in badge settings and displayed next to the video element.

For more information, see Debug media players with the Media panel.


<!-- ====================================================================== -->
## Popover
<!-- https://developer.chrome.com/docs/devtools/elements/badges#popover -->

A popover is any element with a popover attribute, and is useful for a wide range of interactive patterns, including tooltips, alerts, toasts and more. Such elements have popover badges next to them.

This badge toggles a top-layer badge next to it that links to the corresponding elements in the #top-layer container.

Discover the popover badge in the following preview:

todo: convert inline code to Demos repo dir

In the preview, click TOGGLE POPOVER.
Inspect the popover that appears.
In the DOM tree, click the popover badge next to the `<div popover>` element. The Elements panel shows you top-layer badge.

The popover badge next to the element with a popover attribute.

Follow the steps in the `Top layer section.

See also:
 https://web.dev/learn/css/popover-and-dialog.


<!-- ====================================================================== -->
## Starting-style
<!-- https://developer.chrome.com/docs/devtools/elements/badges#starting-style -->

The [`@starting-style` rule](https://web.dev/blog/baseline-entry-animations#setting_up_entry_effects_with_starting-style) defines the initial styles on an element before it's rendered on the page.  This is required for elements that animate in from display: none, because such elements need a state from which to animate in.  Such elements have `starting-style` badges next to them.

This badge toggles the styles in the `@starting-style` rule, so you can see the animation in action.

Discover the `starting-style` badge in the following preview:

todo: convert inline code to Demos repo dir

1. In the preview, click OPEN POPOVER.

1. [Inspect the popover](https://developer.chrome.com/docs/devtools/open#inspect) that appears.

1. In the DOM tree, toggle the starting-style badge next to the `<div popover>` element.

   ![The starting-style badge next to the element with the `@starting-style` rule] todo png

   Observe the animation in action and the styles being applied in the **Styles** tab of the **Elements** tool.

See also:
* [Animating popovers](https://web.dev/learn/css/popover-and-dialog#animating_popovers) in _Popover and dialog_ at web.dev.


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/devtools/elements/badges) and is authored by Sofia Emelianova.

[![Creative Commons License](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
