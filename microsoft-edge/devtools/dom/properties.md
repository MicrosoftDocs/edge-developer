---
title: View the properties of DOM objects
description: View the properties of DOM objects.
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
# View the properties of DOM objects
<!-- https://developer.chrome.com/docs/devtools/dom/properties -->

Use the **Properties** tab in the **Elements** tool to browse and filter properties of DOM objects.

Detailed contents:
* [Open the Properties tab](#open-the-properties-tab)
* [Spot own properties](#spot-own-properties)
* [Find the origin of an inherited property](#find-the-origin-of-an-inherited-property)
* [Filter properties](#filter-properties)
* [Show all properties](#show-all-properties)
* [Understand properties](#understand-properties)
   * [Simple properties](#simple-properties)
   * [Objects and arrays](#objects-and-arrays)
   * [Properties that correspond to DOM nodes](#properties-that-correspond-to-dom-nodes)
   * [Own and inherited properties](#own-and-inherited-properties)
   * [Enumerable and non-enumerable properties](#enumerable-and-non-enumerable-properties)
   * [Methods](#methods)


<!-- ====================================================================== -->
## Open the Properties tab
<!-- https://developer.chrome.com/docs/devtools/dom/properties#view-properties -->

To open the **Properties** tab:

1. Open DevTools. By default, the Elements panel opens.

1. In the DOM tree, select a node.

1. Click the **Properties** tab.  If the tab isn't displayed, click ![More double_arrow] todo png, and then select **Properties** from the dropdown menu.

   ![The Properties tab in the Elements tool] todo png


<!-- ====================================================================== -->
## Spot own properties
<!-- https://developer.chrome.com/docs/devtools/dom/properties#spot-own-properties -->

The **Properties** tab sorts and displays the object's own properties first and in bold font.

![alt text] todo png


<!-- ====================================================================== -->
## Find the origin of an inherited property
<!-- https://developer.chrome.com/docs/devtools/dom/properties#origin-of-inherited-property -->

The **Properties** tab evaluates accessors on built-in elements and displays them on the object as inherited and in regular font.

To find the origin of an inherited property, expand an object, then its [[Prototype]], then the nested [[Prototype]], and so on.

![Tracing the size property up to its getter on the prototype chain] todo png

In this example, you can trace where the inherited size property came from by locating the original own (bold) property on the prototype chain together with the corresponding getter.

Additionally, prototype-specific properties are shown only on prototypes, not on objects.  This makes it easier to diagnose objects.

![Prototype-specific properties] todo png


<!-- ====================================================================== -->
## Filter properties
<!-- https://developer.chrome.com/docs/devtools/dom/properties#filter-properties -->

To quickly find a property, start typing its name or value in the Filter input box.

![Filter] todo png


<!-- ====================================================================== -->
## Show all properties
<!-- https://developer.chrome.com/docs/devtools/dom/properties#show-all -->

By default, the **Properties** tab doesn't show properties with null and undefined values.

To see all properties, select the **Show all** checkbox.

![Properties with null values] todo png


<!-- ====================================================================== -->
## Understand properties
<!-- https://developer.chrome.com/docs/devtools/dom/properties#understand-properties -->

The **Properties** tab in the **Elements** tool shows various kinds of properties.


<!-- ------------------------------ -->
#### Simple properties
https://developer.chrome.com/docs/devtools/dom/properties#simple-properties

Simple properties are pairs of `<name>: <value>`.

![Simple properties] todo png


<!-- ------------------------------ -->
#### Objects and arrays
<!-- https://developer.chrome.com/docs/devtools/dom/properties#objects-and-arrays -->

Collapsible (arrow_right) properties are objects {} or arrays [].

![Collapsible properties] todo png

For more information on inspecting JavaScript objects, see [Inspect object properties] todo link.


<!-- ------------------------------ -->
#### Properties that correspond to DOM nodes
<!-- https://developer.chrome.com/docs/devtools/dom/properties#dom-nodes -->

Properties that correspond to DOM nodes are links.  To select the relevant node in the DOM tree, click a link.

![Link to the head DOM node] todo png


<!-- ------------------------------ -->
#### Own and inherited properties
<!-- https://developer.chrome.com/docs/devtools/dom/properties#own-and-inherited -->

Properties in bold font are the object's own properties; they are defined directly on the object.

Properties in regular font are inherited from the prototype chain.  To display inherited properties, DevTools evaluates relevant accessors on built-in HTML elements.

![Own and inherited properties] todo png

DevTools lists own properties first, to make them easier to spot.


<!-- ------------------------------ -->
#### Enumerable and non-enumerable properties
<!-- https://developer.chrome.com/docs/devtools/dom/properties#enumerable-and-non-enumerable -->

Enumerable properties are bright in color.

Non-enumerable properties are muted.

![Enumerable and non-enumerable properties] todo png

You can iterate over the enumerable properties by using a `for … in` loop or the `Object.keys()` method.


<!-- ------------------------------ -->
#### Methods
<!-- https://developer.chrome.com/docs/devtools/dom/properties#methods -->

Methods are marked with an _f ()_.

![Method] todo png

For more information on functions, see [Inspect functions](https://developer.chrome.com/docs/devtools/console/reference#inspect-functions) (todo: add destination section downstream, link to it) in _Console features reference_.


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/devtools/dom/properties) and is authored by Sofia Emelianova.

[![Creative Commons License](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
