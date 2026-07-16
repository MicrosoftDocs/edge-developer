---
title: Inspect and debug CSS container queries
description: How to inspect and debug CSS container queries in the Elements tool in DevTools.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 07/16/2026
---
# Inspect and debug CSS container queries
<!-- https://developer.chrome.com/docs/devtools/css/container-queries -->

<!-- https://developer.chrome.com/docs/devtools/css/grid/ -->
<!-- Copyright Sofia Emelianova and Jecelyn Yeen

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->

You can inspect and debug CSS container queries in the **Elements** tool in DevTools.

CSS container queries allow you to manipulate the element's styles based on its parent container properties.  This capability shifts the concept of responsive web design from page-based to container-based.

See also:
* [Introduction](https://web.dev/learn/design/intro/) for Responsive Design, at web.dev.
* [Responsive to the container](https://web.dev/articles/new-responsive#responsive_to_the_container) in _The new responsive: Web design in a component-driven world_ at web.dev.
* [Debug CSS container queries](https://microsoftedge.github.io/Demos/devtools-container-queries/) demo.


<!-- ====================================================================== -->
## Discover a container and its descendants
<!-- Discover containers and their descendants  https://developer.chrome.com/docs/devtools/css/container-queries#discover-descendants -->

An element that's defined as a query container has a **container** badge next to it in the **Elements** tool.  Clicking the **container** badge toggles a dotted-line overlay of the container and its descendants.

To display the dotted-line overlay of the container and its descendants:

1. [Open DevTools](https://developer.chrome.com/docs/devtools/open).

1. In the **Elements** tool, click the **container** badge that's next to an element that's defined as a container:

   ![Container badge] todo png

   In the above example, the `container-type: inline-size` property defines the container element.  The descendants can query its inline dimension (horizontal axis) and change their styles based on the width of the container.


<!-- ====================================================================== -->
## Inspect a container query
<!-- Inspect container queries  https://developer.chrome.com/docs/devtools/css/container-queries#inspect-container-queries -->

The **Elements** tool shows `@container` query declarations when they are applied to a descendant element; that is, when the container fulfills the query's condition.


<!-- ------------------------------ -->
#### OLD: Coffee demo procedure

todo: delete this section?

To understand when you can inspect `@container` declarations on [this demo page](https://jec.fish/demo/css-cq-coffee), examine the following code sample:

```css
@container (inline-size > 400px) {
  .coffee p {
    display: block;
  }
}

@container (inline-size > 600px) {
  .coffee {
    display: grid;
    grid-template-columns: 280px auto;
  }

  .coffee h1 {
    grid-column: 1/3;
  }

  .coffee img {
    grid-row: 2/4;
  }
```

In this example, if the container's width exceeds the following number of pixels, the corresponding styles apply:

* More than `400px`: the paragraph (`p`) element appears on the page as a block; it starts on a new line and takes up the whole width.

* More than `600px`: descendants adopt a horizontal grid layout with the title (`h1`) on the top, and image (`img`) on the left.


<!-- ------------------------------ -->
#### OLD: Inspect the first `@container` declaration

todo: see if any add'l info is here, then delete section

To inspect the first `@container` declaration:

1. Go to the [Container Queries coffee](https://jec.fish/demo/css-cq-coffee) demo in a new window or tab.

1. Click the **Container = 500px** button.

1. Right-click the webpage, and then select **Inspect**.

   DevTools opens.

1. Select the **Elements** tool.

1. In the DOM tree, set the container's width to `500px`.  todo: how, concretely?

  The `<p>` element is displayed in the rendered webpage.

1. Select the `p` element. todo: in the rendered webpage, or in DevTools > DOM tree?  In the **Styles** tab, you can see the `@container` declaration along with a link to the parent container `article.card`:

   ![@container declaration] todo png

1. Set the width to more than `600px`, and then select any of the affected elements.

   `@container` declarations that implement a horizontal layout are displayed:

   ![More @container declarations] todo png


<!-- ====================================================================== -->
## Inspect a name-only container query

To inspect a name-only container query in DevTools:

1. Go to the [Debug CSS container queries](https://microsoftedge.github.io/Demos/devtools-container-queries/) demo in a new window or tab.

1. In the **Name-only container** section, right-click the **Card** element, and then select **Inspect**.

   DevTools opens, with the **Elements** tool selected:

   ![Name-only container query](./container-queries-images/name-only-container-query.png)

   In the DOM tree, the `<div class="card">` element is selected, within `<div id="name-only-container">`.

   In the **Styles** tab, the `@container` query `named-container-a` shows the CSS rule that's applying the green background.

   At the top of the CSS rule is a link to the container element: `→named-container-a`.

1. Click the `→named-container-a` link.

   In the DOM tree, the element `<div id="name-only-container">` is selected.


<!-- ====================================================================== -->
## Inspect an inline-size container query

In this demo, the `<div>` element with the black border is a CSS container of type inline-size, because it uses the `container-type: inline-size;` CSS property.

The card element that's within the inline-size CSS container uses a `@container` query to change its background to different colors depending on the size of its container.  You can resize the container by using the handle in the bottom-right corner of the container, and observe the card's background color change.

To inspect an inline-size container query in DevTools:

1. Go to the [Debug CSS container queries](https://microsoftedge.github.io/Demos/devtools-container-queries/) demo in a new window or tab.

1. In the **Inline size container** section, right-click the **Card** element, and then select **Inspect**.

   DevTools opens, with the **Elements** tool selected:

   ![Inline-size container query](./container-queries-images/inline-size-container-query.png)

   In the DOM tree, the `<div class="card">` element is selected, within `<div id="inline-size-container">`.

   In the **Styles** tab, the `@container` query `named-container-a` shows the CSS rule that's applying the green background.

   At the top of the CSS rule is a link to the container element: `→div#inline-size-container`.

1. Click the `→div#inline-size-container` link.

   In the DOM tree, the element `<div id="inline-size-container">` is selected, and an **inline-size** container badge is displayed next to it.

1. Click the **inline-size** container badge.

   A dashed border is displayed around the content area of the container.

   A dashed border is also displayed around all children elements which use the container's inline-size to apply different styles.  In this case, that's the `<div class="card">` element.

1. In the demo page, in the **Inline size container** section, resize the **Card** container by using the handle in the bottom-right corner of the container.

   The card's background color changes.


<!-- ====================================================================== -->
## Inspect a style container query

To inspect a style container query in DevTools:

1. Go to the [Debug CSS container queries](https://microsoftedge.github.io/Demos/devtools-container-queries/) demo in a new window or tab.

1. In the **Style container** section, right-click the **Card** element, and then select **Inspect**.

   DevTools opens, with the **Elements** tool selected:

   ![Style container query](./container-queries-images/style-container-query.png) todo png

   In the DOM tree, the `<div class="card">` element is selected, within `<div id="style-container">`.

   In the **Styles** tab, the `@container style()` query shows the CSS rule that's applying the current background color.


<!-- ====================================================================== -->
## Find a container element
<!-- Find container elements  https://developer.chrome.com/docs/devtools/css/container-queries#find-containers -->

To find and select a container element that caused the query to take effect, hover over and click the element name above the `@container` declaration.

![Hovering over the element name] todo png

When hovered over:
* The name turns into a link to the element in the **Elements** tool.
* The **Styles** tab displays the queried property and its current value.


<!-- ====================================================================== -->
## Modify a container query
<!-- Modify container queries  https://developer.chrome.com/docs/devtools/css/container-queries#modify -->

To debug a query, you can modify the query the same way as modifying any other CSS declaration in the **Styles** tab, as described in [Get started viewing and changing CSS](./index.md).

![png] todo png of video

In the above example, the container's width is `500px`.  The paragraph (`p`) element is displayed in the rendered webpage.

To modify a container query:

1. todo: missing step for context

1. In the **Styles** tab of the **Elements** tool, select the `p` element.

   The `@container (inline-size > 400px)` declaration is displayed.

1. Change the `inline-size` from `400px` to `520px`.

   The paragraph (`<p>`) element disappears from the rendered webpage, because the element didn't fulfill the container criteria.


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/devtools/css/container-queries) and is authored by Sofia Emelianova and Jecelyn Yeen.

[![Creative Commons License](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
