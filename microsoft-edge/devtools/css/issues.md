---
title: Find invalid, overridden, inactive, and other CSS
description: Find invalid, overridden, inactive, and other CSS.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 06/25/2026
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
# Find invalid, overridden, inactive, and other CSS

todo: replace developer.chrome.com links, 11x

26 todo's

This guide assumes that you're familiar with inspecting CSS in Chrome DevTools.  To learn the basics, see [View and change CSS](https://developer.chrome.com/docs/devtools/css).  todo: non-Chrome link

**Detailed contents:**
* [Inspect the CSS you author](#inspect-the-css-you-author)
* [Understand CSS in the Styles pane](#understand-css-in-the-styles-pane)
   * [Matched and unmatched selectors](#matched-and-unmatched-selectors)
   * [Invalid values and declarations](#invalid-values-and-declarations)
   * [Overridden](#overridden)
   * [Inactive](#inactive)
   * [Inherited and non-inherited](#inherited-and-non-inherited)
   * [Shorthand](#shorthand)
   * [Non-editable](#non-editable)
* [Inspect an element that still isn't styled the way you think](#inspect-an-element-that-still-isnt-styled-the-way-you-think)
* [Understand CSS in the Computed pane](#understand-css-in-the-computed-pane)
   * [Declared and inherited](#declared-and-inherited)
   * [Runtime](#runtime)
   * [Non-inherited and custom](#non-inherited-and-custom)
* [Search for duplicates](#search-for-duplicates)
* [Find unused CSS](#find-unused-css)


<!-- ====================================================================== -->
## Inspect the CSS you author

Suppose that you added some CSS to an element and want to make sure the new styles are applied properly. When you refresh the page, the element looks the same as before. Something is wrong.

The first thing to do is [inspect the element](https://developer.chrome.com/docs/devtools/css/reference#select) and make sure that your new CSS is actually applied to the element.

Sometimes, you'll see your new CSS in the **Elements** > **Styles** pane but your new CSS is in pale text<!-- todo: pale font -->, non-editable, crossed out, or has a warning or hint icon next to it.


<!-- ====================================================================== -->
## Understand CSS in the Styles pane

The **Styles** pane recognizes many kinds of CSS issues and highlights them in different ways.


<!-- ------------------------------ -->
#### Matched and unmatched selectors

The **Styles** pane shows matched selectors in regular text and unmatched ones in pale text.

![Matched selector in regular text and unmatched selectors in pale text] todo: matched-selector-regular.png


<!-- ------------------------------ -->
#### Invalid values and declarations

The **Styles** pane crosses out and displays Warning. ![Warning icon] todo: warning-icon.png warning icons next to the following:

* An entire CSS declaration (property and value) when the CSS property is invalid or unknown.
* Just the value when the CSS property is valid but the value is invalid.

![Invalid property name and invalid property value] todo: invalid-property-name.png


<!-- ------------------------------ -->
#### Overridden

The **Styles** pane crosses out properties that are overridden by other properties according to the [Cascading order](https://developer.mozilla.org/docs/Web/CSS/Cascade#cascading_order).

![anim] todo: .png

In this example, the `width: 300px;` style attribute on the element overrides `width: 100%` on the `.youtube` class.


<!-- ------------------------------ -->
#### Inactive

The **Styles** pane displays in pale text and puts ![Information] todo: information-icon.png information icons next to properties that are valid but have no effect because of other properties.

These pale properties are inactive because of CSS logic, not the [Cascading order](https://developer.mozilla.org/docs/Web/CSS/Cascade#cascading_order).

**Key point:** The pale inactive properties differ from pale [non-inherited properties](https://developer.chrome.com/docs/devtools/css/issues#inherited-and-non-inherited).  Inactive properties have icons.  Hover over the ![Information] todo: information-icon.png Information icon to get a hint at what went wrong.

![Inactive CSS declaration with a hint] todo: inactive-css-declaration.png

In this example, the `display: block;` property disables `justify-content` and `align-items` that control flex or grid layouts.


<!-- ------------------------------ -->
#### Inherited and non-inherited

The **Styles** pane lists properties in `Inherited from <element-name>` sections depending on their [default inheritance](https://developer.mozilla.org/docs/Web/CSS/inheritance):

* Inherited by default are in regular text.
* Non-inherited by default are in pale text.

**Key point:**

* The pale non-inherited properties differ from pale [inactive properties](https://developer.chrome.com/docs/devtools/css/issues#inactive).  Non-inherited properties don't have icons and are in the corresponding sections.

* [Overriding default inheritance](https://developer.mozilla.org/docs/Web/CSS/inheritance#overriding_inheritance_an_example) doesn't affect the way the **Styles** pane displays the properties: pale or not.

![The 'Inherited from body' section listing inherited and non-inherited CSS] todo: the-inherited-body-sec.png


<!-- ------------------------------ -->
#### Shorthand

[Shorthand (concise) properties](https://developer.mozilla.org/docs/Web/CSS/Shorthand_properties) let you set multiple CSS properties at once and can make your stylesheet more readable.  However, due to the short nature of such properties, you may miss a longhand (precise) property that overrides a property implied by the shorthand.

The **Styles** pane displays shorthand properties as ![Drop-down icon] todo: drop-down-icon.png drop-down lists that contain all the properties that are shortened.

![The shorthand property with a drop-down list] todo: the-shorthand-property.png

In this example, two of four shortened properties are actually overridden.


<!-- ------------------------------ -->
#### Non-editable

The **Styles** pane displays properties that can't be edited in _italic text_.  For example, the CSS from the following sources can't be edited:

* `user agent stylesheet`—Microsoft Edge's default stylesheet.

   ![The CSS from user agent stylesheet] todo: the-css-user-agent-style.png

* Style-related HTML attributes on the element, such as height, width, or color.  You can edit them in the DOM tree and this updates the CSS in the **Styles** pane, but not the other way around.

   ![anim] todo: .png

  In this example, the `height="48"` attribute on an <svg> element is set to `50`.  This updates the corresponding property under `svg[Attributes Style]` in the **Styles** pane.


<!-- ====================================================================== -->
## Inspect an element that still isn't styled the way you think

To try to find what goes wrong, you may want to check:

* [CSS documentation](https://developer.chrome.com/docs/devtools/css/reference#view-docs) and [selector specificity](https://developer.chrome.com/docs/devtools/css/reference#selector-specificity) in the tooltips in the **Styles** pane.
* The **Computed** pane to see the "final" [CSS applied to an element](https://developer.chrome.com/docs/devtools/css/reference#computed) and compare to that you declared.

The **Elements** > **Styles** pane displays the exact set of CSS rules as they are written in various stylesheets.  On the other hand, the **Elements** > **Computed** pane lists resolved CSS values that Chrome uses to render an element:
* CSS derived from [inheritance](https://developer.mozilla.org/docs/Web/CSS/inheritance)
* [Cascade](https://developer.mozilla.org/docs/Web/CSS/Cascade) winners
* Longhand properties (precise), not shorthand (concise)
* Computed values, for example, `font-size: 14px` instead of `font-size: 70%`


<!-- ====================================================================== -->
## Understand CSS in the Computed pane

The **Computed** pane also displays various properties differently.


<!-- ------------------------------ -->
#### Declared and inherited

The **Computed** pane lists the properties declared in any stylesheet in regular font, both element's own and inherited.  Click the ![Expand icon] todo: expand-icon.png expand icon next to them to see their source.

![Declared properties] todo: declared-properties.png

To see the declaration in the **Styles** pane, hover over the expanded property and click the ![Arrow-right icon] todo: arrow-right-icon.png arrow button.

![The arrow button next to the property] todo: the-arrow-button-next.png

To see the declaration in the **Sources** pane, click the link to the source file.

![The link to the source file] todo: the-link-the-source-file.png

For properties with multiple sources, the **Computed** pane shows the [Cascade winner](https://developer.mozilla.org/docs/Web/CSS/Cascade#cascading_order) first.

![A property with multiple sources] todo: a-property-multiple-sources.png


<!-- ------------------------------ -->
#### Runtime

The **Computed** pane lists property values calculated at runtime in pale text.

![Property values calculated at runtime] todo: property-values-calculated.png

In this example, Microsoft Edge calculated the following for the `<ul>` element:
* The `width` relative its parent, `<div>`
* The `height` relative to its children, the two `<li>` elements


<!-- ------------------------------ -->
#### Non-inherited and custom

To make the **Computed** pane show _all_ properties and their values, check ![Checkbox icon] todo: Checkbox icon.png **Show all**.  All properties include:
* Initial values for non-inherited properties in pale text.
* Custom properties—with a -- prefix in regular text. Such properties are inherited by default.

**Key point:** [Overriding default inheritance](https://developer.mozilla.org/docs/Web/CSS/inheritance#overriding_inheritance_an_example) doesn't affect the way the **Computed** pane displays the properties: pale or not.

To break this big list into categories, check [Checkbox icon] todo: checkbox-icon.png **Group**.

![All properties grouped] todo: all-properties-grouped.png

This example shows the initial values for non-inherited properties under **Animation** and custom properties under **CSS Variables**.


<!-- ====================================================================== -->
## Search for duplicates

To investigate a specific property and its potential duplicates, type that property name in the **Filter** textbox.  You can do this both in the **Styles** and **Computed** panes.

![The Filter text boxes on Styles and Computed panes] todo: the-filter-textboxes-styles.png

See [Search and filter an element's CSS](https://developer.chrome.com/docs/devtools/css/reference#filter).


<!-- ====================================================================== -->
## Find unused CSS

See [Coverage: Find unused JavaScript and CSS](https://developer.chrome.com/docs/devtools/coverage).


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/devtools/css/issues) and is authored by Sofia Emelianova.

[![Creative Commons License](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
