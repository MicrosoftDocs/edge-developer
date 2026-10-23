---
title: Badges reference
description: Badges reference.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 10/23/2026
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

_todo:_
* update developer.chrome.com links
* convert from inline code examples to steps for using the demo

Toggle various overlays and speed up DOM tree navigation with this comprehensive reference of badges in the **Elements** tool.


<!-- ====================================================================== -->
## Show or hide badges
<!-- https://developer.chrome.com/docs/devtools/elements/badges#show-or-hide -->

To show or hide certain badges:

1. [Open DevTools](https://developer.chrome.com/docs/devtools/open#elements).

1. Right-click anywhere in the DOM tree, and then select one or several badges in the **Badge settings** submenu, so that checkmarks appear in the submenu:

   ![The 'Badge settings' menu](./badges-images/badge-settings-submenu.png)

The **Elements** tool shows the selected badges next to the appropriate elements in the DOM tree.  The following sections explain each badge.

See also:
* [Badges in the Elements tool](https://microsoftedge.github.io/Demos/devtools-badges/) - demo.
   * [/devtools-badges/](https://github.com/MicrosoftEdge/Demos/tree/main/devtools-badges/) - source code.


<!-- ====================================================================== -->
## View-source
<!-- https://developer.chrome.com/docs/devtools/elements/badges#view-source -->

The `view-source` badge is next to the `<html>` tag at the root of the HTML page.  To view the source of your page in the **Sources** tool, click the `view-source` badge:

![The 'view source' badge](./badges-images/view-source-badge.png)

The `view-source` badge provides an alternative workflow to the **View page source** menuitem in the webpage's context menu (right-click menu), as follows:

1. In Microsoft Edge, right-click a webpage, and then select **Inspect**.

   DevTools opens.

1. In DevTools, select the **Elements** tool.

1. In the DOM tree, next to the `<html>` tag, click the `view-source` badge.

   The **Sources** tool opens, displaying the source file:

   ![Source code file](./badges-images/view-source-result.png)

   The example shows `index.html`.

1. Inspect the page source.

See also:
* [Badges in the Elements tool](https://microsoftedge.github.io/Demos/devtools-badges/) - demo.
   * [/devtools-badges/](https://github.com/MicrosoftEdge/Demos/tree/main/devtools-badges/) - source code.


<!-- ====================================================================== -->
## Grid
<!-- https://developer.chrome.com/docs/devtools/elements/badges#grid -->

An HTML element is a _grid container_ if its `display` CSS property is set to `grid` or `inline-grid`.  Such an element has a `grid` badge next to it that toggles the corresponding overlay.

See also:
* [CSS grid layout](https://developer.mozilla.org/docs/Web/CSS/CSS_Grid_Layout) at MDN.

Toggle the overlay on the following preview:

_todo: convert inline code to Demos repo dir_

1. [Inspect the element](https://developer.chrome.com/docs/devtools/open#inspect) in the preview.

1. In the DOM tree, click the `grid` badge next to the element and observe the overlay:

   ![Grid overlay](./badges-images/grid-overlay.png)

   The overlay shows columns, rows, their numbers, and gaps.

To learn how to debug grid layout, see [Inspect CSS Grid layouts](../css/grid.md).


<!-- ====================================================================== -->
## Subgrid
<!-- https://developer.chrome.com/docs/devtools/elements/badges#subgrid -->

A _subgrid_ is a nested grid that uses the same tracks as its parent grid.  An element is a _subgrid container_ if one or both of its `grid-template-columns`, `grid-template-rows` properties are set to `subgrid`.  Such an element has a `subgrid` badge next to it that toggles the corresponding overlay.

See also:
* [Subgrid](https://developer.mozilla.org/docs/Web/CSS/CSS_grid_layout/Subgrid) at MDN.

Toggle the overlay on the following preview:

_todo: convert inline code to Demos repo dir_

1. Inspect the element in the preview.

1. In the DOM tree, click the `subgrid` badge next to the element and observe the overlay:

   ![Subgrid overlay](./badges-images/subgrid-overlay.png)

The overlay shows columns, rows, their numbers, and gaps of a subgrid.


<!-- ====================================================================== -->
## Flex
<!-- https://developer.chrome.com/docs/devtools/elements/badges#flex -->

An HTML element is a _flex container_ if its `display` CSS property is set to `flex` or `inline-flex`.  Such an element has a `flex` badge next to it that toggles the corresponding overlay.

See also:
* [CSS flexible box layout](https://developer.mozilla.org/docs/Web/CSS/CSS_Flexible_Box_Layout) at MDN.

Toggle the overlay on the following preview:

_todo: convert inline code to Demos repo dir_

1. [Inspect the element](https://developer.chrome.com/docs/devtools/open#inspect) in the preview.

1. In the DOM tree, click the flex badge next to the element and observe the overlay:

   ![Flex overlay](./badges-images/flex-overlay.png)

   The overlay shows child element positions.

To learn how to debug flex layouts, see [Inspect and debug CSS flexbox](https://developer.chrome.com/docs/devtools/css/flexbox) in Chrome docs.<!-- todo: update link after https://github.com/MicrosoftDocs/edge-developer/pull/3859 -->


<!-- ====================================================================== -->
## Ad
<!-- https://developer.chrome.com/docs/devtools/elements/badges#ad -->

DevTools can detect some ad frames and tag them.  Such a frame has an `ad` badge next to it.

A tooltip provides context on why the element was identified as an ad.  The `ad` badge is not clickable.

See also:
* [Ad Tagging in Chromium](https://chromium.googlesource.com/chromium/src/+/master/docs/ad_tagging.md)

Discover an ad in the following preview:

todo: convert preview to demos repo

1. [Inspect the element](https://developer.chrome.com/docs/devtools/open#inspect) in the preview.

1. In the DOM tree, find an element with the `ad` badge next to it:

   ![Ad badge](./badges-images/ad-badge.png)

1. Hover over the `ad` badge.

   A tooltip provides context on why the element was identified as an ad, such as:

   ![Ad badge's tooltip](./badges-images/ad-badge-tooltip.png)

Possible content of the tooltip:

* **Script ancestry:** Which scripts were involved in creating the element.

* **Filter list rules:** The specific rule from a filter list (for example, `EasyList`) that matched the element or the resource it loaded.

You can also use the **Rendering** tab to highlight ad frames in red.  See [Highlight ad frames](https://developer.chrome.com/docs/devtools/rendering/apply-effects#highlight_ad_frames) in _Apply other effects: enable automatic dark theme, emulate focus, and more_, in Chrome docs.<!-- todo: update link to anchor in https://learn.microsoft.com/microsoft-edge/devtools/rendering/rendering-tool -->


<!-- ====================================================================== -->
## Scroll
<!-- https://developer.chrome.com/docs/devtools/elements/badges#scroll -->

An HTML element is a _scroll container_ if its `overflow` CSS property is set to `scroll`, or `auto` when there's enough content to cause overflow.  Such an element has a `scroll` badge next to it.

![Scroll badge on a DOM tree node](./badges-images/scroll-badge.png)

See also:
* [Scroll container](https://developer.mozilla.org/docs/Glossary/Scroll_container) at MDN.


<!-- ====================================================================== -->
## Scroll-snap
<!-- https://developer.chrome.com/docs/devtools/elements/badges#scroll-snap -->

_Scroll containers_ can have CSS properties that configure snap points.  A scroll container element has a `scroll-snap` badge next to it that displays or hides the corresponding overlay.

See also:
* [CSS scroll snap](https://developer.mozilla.org/docs/Web/CSS/Guides/Scroll_snap) at MDN.

Toggle the overlay on the following preview:

todo: convert preview to demos repo

1. [Inspect the element](https://developer.chrome.com/docs/devtools/open#inspect) in the preview.

1. In the DOM tree, click the `scroll-snap` badge next to the element.

1. Scroll the element to the right.

   The scroll-snap overlay is displayed:

   ![Scroll-snap overlay](./badges-images/scroll-snap-overlay.png)

The overlay shows element positions and snap points.


<!-- ====================================================================== -->
## Container
<!-- https://developer.chrome.com/docs/devtools/elements/badges#container -->

An HTML element is a _container_ if it has the `container-type` CSS property.  Such an element has a `container` badge next to it that displays or hides the corresponding overlay.

See also:
* [CSS container queries](https://developer.mozilla.org/docs/Web/CSS/Guides/Containment/Container_queries) at MDN.

_todo: no such flag - Note: CSS container queries is an experimental feature. To enable its support in DevTools, under chrome://flags, set the Enable CSS Container Queries experiment to Enabled. Otherwise, the next preview doesn't work._

_todo: convert preview code to demos repo_

1. Toggle the overlay on the preview.  1. Go to `edge://flags`, and then set the **Enable CSS Container Queries** experiment to **Enabled**.  _todo: no such flag_

1. [Inspect the element](https://developer.chrome.com/docs/devtools/open#inspect) in the preview.

1. In the DOM tree, click the `container` badge next to the element.

1. Resize the element by dragging its bottom-right corner and observe the layout change and overlay:

   ![Container overlay](./badges-images/container-overlay.png)

   The overlay shows child element positions.

See also:
* [Inspect and debug CSS container queries](../css/container-queries.md)


<!-- ====================================================================== -->
## Slot
<!-- https://developer.chrome.com/docs/devtools/elements/badges#slot -->

The `<slot>` HTML element is a placeholder that you can fill with your own content.  Together with the `<template>` element, `<slot>` lets you create separate DOM trees and present them together.

See also:
* [`<slot>` HTML web component slot element](https://developer.mozilla.org/docs/Web/HTML/Element/slot) at MDN.

A slot content element has a ![Link on badge](./badges-images/link-on-badge.png) `slot` badge next to it that serves as a link to the corresponding `<slot>` element.

_todo: define slot vs slot content_

<!-- moved "key point" up -->
The ![Link on badge](./badges-images/link-on-badge.png) `slot` badge has a paired ![Link on badge](./badges-images/link-on-badge.png) `reveal` badge that takes you back.

Discover the ![Link on badge](./badges-images/link-on-badge.png) `slot` badge in the following preview:

_todo: convert inline code to Demos repo dir_

1. [Inspect the element](https://developer.chrome.com/docs/devtools/open#inspect) in the preview.

1. In the DOM tree, click the ![Link on badge](./badges-images/link-on-badge.png) `slot` badge next to the element.

   The corresponding `<slot>` element is highlighted:

   ![Slot and reveal badges](./badges-images/slot-reveal-badges.png)

1. Click the ![Link on badge](./badges-images/link-on-badge.png) `reveal` badge.

   The slot's content is highlighted.


<!-- ====================================================================== -->
## Top-layer
<!-- https://developer.chrome.com/docs/devtools/elements/badges#top-layer -->

The `top-layer` badge helps you understand the concept of the _top layer_ and visualize it.  The top layer renders content on top of all other layers, regardless of `z-index`.  When you open a `<dialog>` element by using the `.showModal()` method, the browser puts it into the top layer.

See also:
* [Meet the top layer: a solution to z-index:10000](https://developer.chrome.com/blog/what-is-the-top-layer) in the Chrome blog.
* [Using z-index](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Adding_z-index) at MDN.
* [Building a dialog component](https://web.dev/articles/building/a-dialog-component) at web.dev.
* [HTMLDialogElement: showModal() method](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/showModal) at MDN.

To help you visualize top layer elements, the **Elements** tool adds a `#top-layer` container to the DOM tree after the closing `</html>` tag.

A top-layer element has a `top-layer (N)`![Link on badge](./badges-images/link-on-badge.png) badge next to it, where `N` is the element's index number.  The badge is a link to the corresponding element in the `#top-layer` container.

<!-- moved "key point" up -->
The `top-layer (N)`![Link on badge](./badges-images/link-on-badge.png) badge has a paired `reveal` badge that takes you back.

Discover the `top-layer (N)`![Link on badge](./badges-images/link-on-badge.png) badge in the following preview:

_todo: convert inline code to Demos repo dir_

1. In the preview, click Open dialog.

1. [Inspect the dialog](https://developer.chrome.com/docs/devtools/open#inspect).

1. In the DOM tree, click the ![Link on badge](./badges-images/link-on-badge.png)`top-layer (1)` badge next to the `<dialog>` element.  The **Elements** tool takes you to the corresponding element in the `#top-layer` container after the closing `</html>` tag:

   ![The top-layer container and badge](./badges-images/top-layer-container.png)

1. Click the ![Link on badge](./badges-images/link-on-badge.png)`reveal` badge next to the element or its `::backdrop`.

   You are returned to the `<dialog>` element.


<!-- ====================================================================== -->
## Media
<!-- https://developer.chrome.com/docs/devtools/elements/badges#media -->

Click the `media`![Link on badge](./badges-images/link-on-badge.png) badge to open the **Media** tool and debug your media.  The `media`![Link on badge](./badges-images/link-on-badge.png) badge is turned off by default.  When turned on, the `media`![Link on badge](./badges-images/link-on-badge.png) badge appears next to `<audio>` and `<video>` elements:

![The media badge turned on in badge settings and displayed next to the video element](./badges-images/media-badge.png)

To turn on the `media`![Link on badge](./badges-images/link-on-badge.png) badge, right-click the DOM tree, and then in the **Badge settings** submenu, select the **Media** menuitem.

See also:
* [View and debug media players information (Media tool)](../media/index.md).


<!-- ====================================================================== -->
## Popover
<!-- https://developer.chrome.com/docs/devtools/elements/badges#popover -->

A _popover_ is any element that has a `popover` attribute.  A popover is useful for a wide range of interactive patterns, including:
* Tooltips
* Alerts
* Toasts
* And more.

A popover element has a `popover` badge next to it.

The `popover` badge toggles a `top-layer` badge next to it that links to the corresponding element in the `#top-layer` container.  See [Top-layer](#top-layer), above.

Discover the `popover` badge in the following preview:

_todo: convert inline code to Demos repo dir_

1. In the preview, click **TOGGLE POPOVER**.

1. [Inspect the popover](https://developer.chrome.com/docs/devtools/open#inspect) that appears.

1. In the DOM tree, click the `popover` badge next to the `<div popover>` element.

   The **Elements** tool displays the `top-layer` badge:

   ![The "popover" badge next to the element with a "popover" attribute](./badges-images/popover-badge.png)

1. Follow the steps in the [Top-layer](#top-layer) section, above.

See also:
* [Popover and dialog](https://web.dev/learn/css/popover-and-dialog) at web.dev.


<!-- ====================================================================== -->
## Starting-style
<!-- https://developer.chrome.com/docs/devtools/elements/badges#starting-style -->

The `@starting-style` rule defines the initial styles on an element before it's rendered on the page.  This is required for elements that animate-in from `display: none`, because such elements need a state from which to animate in.  Such an element has a `starting-style` badge next to it.

See also:
* [Setting up entry effects with @starting-style](https://web.dev/blog/baseline-entry-animations#setting_up_entry_effects_with_starting-style) in _Now in Baseline: animating entry effects_ at web.dev.
* [Animating popovers](https://web.dev/learn/css/popover-and-dialog#animating_popovers) in _Popover and dialog_ at web.dev.

The `starting-style` badge toggles the styles in the `@starting-style` rule, so you can see the animation in action.

Discover the `starting-style` badge in the following preview:

_todo: convert inline code to Demos repo dir_

1. In the preview, click OPEN POPOVER.

1. [Inspect the popover](https://developer.chrome.com/docs/devtools/open#inspect) that appears.

1. In the DOM tree, toggle the `starting-style` badge next to the `<div popover>` element:

   ![The starting-style badge next to the element with the `@starting-style` rule](./badges-images/starting-style-badge.png)

   The animation is shown in action, and the styles are applied in the **Styles** tab of the **Elements** tool.

See also:
* [Animating popovers](https://web.dev/learn/css/popover-and-dialog#animating_popovers) in _Popover and dialog_ at web.dev.


<!-- ====================================================================== -->
## Custom-element
<!-- https://developer.chrome.com/docs/devtools/elements/badges#custom-element -->

Custom HTML elements identified by hyphenated tag names or `is="..."` attributes for customized built-in elements have `custom-element` badges next to them in the DOM tree.

See also:
* [Using custom elements](https://developer.mozilla.org/docs/Web/API/Web_components/Using_custom_elements) at MDN.

A custom HTML element has a `custom-element` badge next to it in the DOM tree:

![The custom-element badge next to custom HTML elements in the DOM tree](./badges-images/custom-element-badge.png)

Click the `custom-element` badge to go to the relevant code in the **Sources** tool.


<!-- ====================================================================== -->
## See also
<!-- todo: all links in article -->

* [Inspect CSS Grid layouts](../css/grid.md)
* [Inspect and debug CSS container queries](../css/container-queries.md)
* [View and debug media players information (Media tool)](../media/index.md)

Chrome docs:
* [Open the Elements panel to inspect the DOM or CSS](https://developer.chrome.com/docs/devtools/open#inspect) in _Open Chrome DevTools_.
* [Inspect and debug CSS flexbox](https://developer.chrome.com/docs/devtools/css/flexbox)<!-- todo: update link after https://github.com/MicrosoftDocs/edge-developer/pull/3859 -->
* [Highlight ad frames](https://developer.chrome.com/docs/devtools/rendering/apply-effects#highlight_ad_frames) in _Apply other effects: enable automatic dark theme, emulate focus, and more_.<!-- todo: update link to anchor in https://learn.microsoft.com/microsoft-edge/devtools/rendering/rendering-tool -->
* [Meet the top layer: a solution to z-index:10000](https://developer.chrome.com/blog/what-is-the-top-layer)

web.dev:
* [Building a dialog component](https://web.dev/articles/building/a-dialog-component)
* [Popover and dialog](https://web.dev/learn/css/popover-and-dialog)
* [Setting up entry effects with @starting-style](https://web.dev/blog/baseline-entry-animations#setting_up_entry_effects_with_starting-style) in _Now in Baseline: animating entry effects_.
* [Animating popovers](https://web.dev/learn/css/popover-and-dialog#animating_popovers) in _Popover and dialog_.

MDN:
* [CSS grid layout](https://developer.mozilla.org/docs/Web/CSS/CSS_Grid_Layout)
* [Subgrid](https://developer.mozilla.org/docs/Web/CSS/CSS_grid_layout/Subgrid)
* [CSS flexible box layout](https://developer.mozilla.org/docs/Web/CSS/CSS_Flexible_Box_Layout)
* [Scroll container](https://developer.mozilla.org/docs/Glossary/Scroll_container)
* [CSS scroll snap](https://developer.mozilla.org/docs/Web/CSS/Guides/Scroll_snap)
* [CSS container queries](https://developer.mozilla.org/docs/Web/CSS/Guides/Containment/Container_queries)
* [`<slot>` HTML web component slot element](https://developer.mozilla.org/docs/Web/HTML/Element/slot)
* [Using z-index](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Adding_z-index)
* [HTMLDialogElement: showModal() method](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/showModal)
* [Using custom elements](https://developer.mozilla.org/docs/Web/API/Web_components/Using_custom_elements)

Chromium:
* [Ad Tagging in Chromium](https://chromium.googlesource.com/chromium/src/+/master/docs/ad_tagging.md)

GitHub:
* [Badges in the Elements tool](https://microsoftedge.github.io/Demos/devtools-badges/) - demo.
   * [/devtools-badges/](https://github.com/MicrosoftEdge/Demos/tree/main/devtools-badges/) - source code.


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/devtools/elements/badges) and is authored by Sofia Emelianova.

[![Creative Commons License](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
