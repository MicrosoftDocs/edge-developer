---
title: Inspect and debug CSS container queries
description: Inspect and debug CSS container queries.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 02/26/2026
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


This guide shows you how to inspect and debug CSS container queries in the **Elements** tool in DevTools.

[CSS container queries](https://web.dev/new-responsive/#responsive-to-the-container) allow you to manipulate the element's styles based on its parent container properties.  This capability shifts the concept of [responsive web design](https://web.dev/learn/design/intro/) from page-based to [container-based](https://web.dev/articles/new-responsive).

The screenshots in this guide are taken from [this demo page](https://jec.fish/demo/css-cq-coffee).


<!-- ====================================================================== -->
## Discover containers and their descendants
<!-- https://developer.chrome.com/docs/devtools/css/container-queries#discover-descendants -->

Every element that's defined as a query container has a **container** badge next to it in the **Elements** tool.  Clicking the **container** badge toggles a dotted-line overlay of the container and its descendants.

To toggle the overlay:

1. Open DevTools.

1. In the **Elements** tool, click the **container** badge that's next to the element that's defined as a container:

   ![Container badge] todo png

   In the above example, the `container-type: inline-size` property defines the container element.  The descendants can query its inline dimension (horizontal axis) and change their styles based on the width of the container.


<!-- ====================================================================== -->
## Inspect container queries
<!-- https://developer.chrome.com/docs/devtools/css/container-queries#inspect-container-queries -->

The **Elements** tool shows `@container` query declarations when they are applied to a descendant element; that is, when the container fulfills the query's condition.

To understand when you can inspect `@container` declarations on [this demo page](https://jec.fish/demo/css-cq-coffee), examine the following code sample:

```
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

To inspect the first @container declaration:

1. In the **Elements** tool, set the container's width to `500px`.

  The `p` element appears.

1. Select the `p` element.  In the **Styles** tab, you can see the `@container` declaration along with a link to the parent container `article.card`:

   ![@container declaration] todo png

1. Set the width to more than `600px`, then select any of the affected elements.  Observe `@container` declarations that implement a horizontal layout:

   ![More @container declarations] todo png


<!-- ====================================================================== -->
## Find container elements
<!-- https://developer.chrome.com/docs/devtools/css/container-queries#find-containers -->

To find and select a container element that caused the query to take effect, hover over and click the element name above the `@container` declaration.

![Hovering over the element name] todo png

When hovered over:
* The name turns into a link to the element in the **Elements** tool.
* The **Styles** tab displays the queried property and its current value.


<!-- ====================================================================== -->
## Modify container queries
<!-- https://developer.chrome.com/docs/devtools/css/container-queries#modify -->

To debug a query, you can modify it as any other CSS declaration in the **Styles** tab as described in [View and change CSS](https://developer.chrome.com/docs/devtools/css).

![png] todo png of video

In the above example, the container's width is `500px`.  The paragraph (`<p>`) element appears on the page.

1. Select the `<p>` element.  In the **Styles** tab.  You can see the `@container (inline-size > 400px)` declaration.

1. Change the `inline-size` from `400px` to `520px`.

1. The paragraph (`<p>`) element disappears from the page, because it didn't fulfill the query criteria.


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/devtools/css/container-queries) and is authored by Sofia Emelianova and Jecelyn Yeen.

[![Creative Commons License](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
