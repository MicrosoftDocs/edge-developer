---
description: Features for viewing and changing CSS rules in Microsoft Edge DevTools.
title: CSS features reference
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/29/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
<!-- Copyright Kayce Basques

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->
# CSS features reference

Discover new workflows in the following comprehensive reference of Microsoft Edge DevTools features related to viewing and changing CSS.

To learn the basics, see [Get started with viewing and changing CSS](../css/index.md).


<!-- ====================================================================== -->
## Select an element

The **Elements** tool of DevTools lets you view or change the CSS of one element at a time.  The selected element is highlighted in the **DOM Tree**.  The styles of the element are shown in the **Styles** pane.  For a tutorial, see [View the CSS for an element](../css/index.md#view-the-css-for-an-element).

In the following figure, the `h1` element that is highlighted in the **DOM Tree** is the selected element.  On the right, the styles of the element are shown in the **Styles** pane.  On the left, the element is highlighted in the viewport, but only because the mouse is currently hovering over it in the **DOM Tree**:

:::image type="content" source="../media/css-elements-styles-h1.msft.png" alt-text="An example of a selected element." lightbox="../media/css-elements-styles-h1.msft.png":::

There are many ways to select an element:

*   In a rendered webpage, right-click a page element, and then click **Inspect**.

*   In DevTools, click **Select an element** (![Select an element](../media/select-an-element-icon.msft.png)) or press `Control`+`Shift`+`C` (Windows, Linux) or `Command`+`Shift`+`C` (macOS), and then click the element in the viewport.

*   In DevTools, click the element in the **DOM Tree**.

*   In DevTools, run a query like `document.querySelector('p')` in the **Console**, hover on the result, open the contextual menu (right-click), and click **Reveal in Elements panel**.


<!-- ====================================================================== -->
## View the external stylesheet where a rule is defined

In the **Styles** pane, click the link next to a CSS rule to open the external stylesheet that defines the rule.  The stylesheet opens in the **Editor** pane of the **Sources** tool.

If the stylesheet is minified, click the **Format** (![Format](../media/format-icon.msft.png)) button, at the bottom of the **Editor** pane.  For more information, see [Reformat a minified JavaScript file with pretty-print](../javascript/reference.md#reformat-a-minified-javascript-file-with-pretty-print).

In the following figure, after you click `https://docs.microsoft.com/_themes/docs.theme/master/en-us/_themes/styles/b66bc881.site-ltr.css:2` you are taken to line 2 of `https://docs.microsoft.com/_themes/docs.theme/master/en-us/_themes/styles/b66bc881.site-ltr.css`, where the `.content h1:first-of-type` CSS rule is defined.

:::image type="content" source="../media/css-elements-styles-h1-highlight.msft.png" alt-text="Viewing the stylesheet where a rule is defined." lightbox="../media/css-elements-styles-h1-highlight.msft.png":::


<!-- ====================================================================== -->
## View only the CSS that is actually applied to an element

The **Styles** panel shows you all of the rules that apply to an element, including declarations that have been overridden.  When you are not interested in overridden declarations, use the **Computed** panel to view only the CSS that is actually being applied to an element.

1.  [Select an element](#select-an-element).

1.  Go to the **Computed** panel in the **Elements** tool.

On a wide DevTools window, the **Computed** panel does not exist.  The contents of the **Computed** panel are shown on the **Styles** panel.

Inherited properties are opaque.  To display all inherited values, select the **Show All** checkbox.

In the following figure, the **Computed** panel shows the CSS properties being applied to the currently-selected `h1` element:

:::image type="content" source="../media/css-elements-computed-h1.msft.png" alt-text="The Computed panel." lightbox="../media/css-elements-computed-h1.msft.png":::


<!-- ====================================================================== -->
## View CSS properties in alphabetical order

Use the **Computed** panel.  See [View only the CSS that is actually applied to an element](#view-only-the-css-that-is-actually-applied-to-an-element).


<!-- ====================================================================== -->
## View inherited CSS properties

Check the **Show All** checkbox in the **Computed** panel.  See [View only the CSS that is actually applied to an element](#view-only-the-css-that-is-actually-applied-to-an-element).


<!-- ====================================================================== -->
## View an element's box model

To view [the box model](https://developer.mozilla.org/docs/Learn/CSS/Introduction_to_CSS/Box_model) of an element, go to the **Styles** panel.  If your DevTools window is narrow, the **Box Model** diagram is at the bottom of the panel.

To change a value, double-click it.

In the following figure, the **Box Model** diagram in the **Styles** panel shows the box model for the currently selected `h1` element.

:::image type="content" source="../media/css-elements-styles-h1-2.msft.png" alt-text="The Box Model diagram." lightbox="../media/css-elements-styles-h1-2.msft.png":::


<!-- ====================================================================== -->
## Search and filter the CSS of an element

Use the **Filter** text box on the **Styles** and **Computed** panels to search for specific CSS properties or values.

To also search inherited properties in the **Computed** panel, check the **Show All** checkbox.

In the following figure, the **Styles** panel is filtered to only show rules that include the search query `color`.

:::image type="content" source="../media/css-elements-styles-filter-color.msft.png" alt-text="Filter the Styles panel." lightbox="../media/css-elements-styles-filter-color.msft.png":::

In the following figure, the **Computed** panel is filtered to only show declarations that include the search query `100%`.

:::image type="content" source="../media/css-elements-computed-filter-100.msft.png" alt-text="Filter the Computed panel." lightbox="../media/css-elements-computed-filter-100.msft.png":::


<!-- ====================================================================== -->
## Toggle a pseudo-class

To toggle a pseudo-class, such as `:active`, `:focus`, `:hover`, or `:visited`:

1.  [Select an element](#select-an-element).
1.  On the **Elements** tool, go to the **Styles** tab.
1.  Click **:hov**.
1.  Select the pseudo-class that you want to enable.

The following figure shows toggling the `:hover` pseudo-class.  In the viewport, the `background-color: cornflowerblue` declaration is applied to the element, even though the element is not actually being hovered over.

:::image type="content" source="../media/css-elements-styles-hov-hover.msft.png" alt-text="Toggle the :hover pseudo-class." lightbox="../media/css-elements-styles-hov-hover.msft.png":::

For an interactive tutorial, see [Add a pseudostate to a class](../css/index.md#add-a-pseudostate-to-a-class).


<!-- ====================================================================== -->
## View a page in print mode

To view a page in print mode:
1.  Open the [Command Menu](../command-menu/index.md).
1.  Start typing `Rendering` and then select **Show Rendering**.
1.  Click the **Emulate CSS Media** dropdown, and then select **print**.


<!-- ====================================================================== -->
## View used and unused CSS with the Coverage tool

The **Coverage** tool shows you what CSS a page actually uses.

1.  Open the [Command Menu](../command-menu/index.md) by pressing `Control`+`Shift`+`P` (Windows, Linux) or `Command`+`Shift`+`P` (macOS), while DevTools has focus.
1.  Start typing `coverage` and choose **Show Coverage**.  The **Coverage** tool appears.

    Opening the Coverage tab from the Command Menu:

    :::image type="content" source="../media/css-console-command-menu-coverage.msft.png" alt-text="Opening the Coverage tab from the Command Menu." lightbox="../media/css-console-command-menu-coverage.msft.png":::

    The Coverage tab:

    :::image type="content" source="../media/css-console-qs-coverage-empty.msft.png" alt-text="The Coverage tab." lightbox="../media/css-console-qs-coverage-empty.msft.png":::

1.  Click **Start instrumenting coverage and refresh the page** (![Start instrumenting coverage and refresh the page](../media/refresh-icon.msft.png)).  The page refreshes and the **Coverage** tab provides an overview of how much CSS (and JavaScript) is used from each file that the browser loads.  Green represents used CSS.  Red represents unused CSS.

    An overview of how much CSS (and JavaScript) is used and unused:

    :::image type="content" source="../media/css-console-qs-coverage-run.msft.png" alt-text="An overview of how much CSS (and JavaScript) is used and unused." lightbox="../media/css-console-qs-coverage-run.msft.png":::

1.  To display a line-by-line breakdown of what CSS is used, click a CSS file.

    In the following figure, lines 145 to 147 and 149 to 151 of `b66bc881.site-ltr.css` are unused, whereas lines 163 to 166 are used:

    :::image type="content" source="../media/css-sources-css-coverage.msft.png" alt-text="A line-by-line breakdown of used and unused CSS." lightbox="../media/css-sources-css-coverage.msft.png":::


<!-- ====================================================================== -->
## Force print preview mode

See [Force DevTools into Print Preview mode](../css/print-preview.md).


<!-- ## Change CSS -->
<!-- todo s/CSS declaration/declaration/ -->


<!-- ====================================================================== -->
## Add a CSS declaration to an element

The order of declarations affects how an element is styled, use the following list to help you add declarations in different ways.

*   [Add a inline declaration](#add-an-inline-declaration).  Equivalent to adding a `style` attribute to the HTML of an element.
*   [Add a declaration to a style rule](#add-a-declaration-to-a-style-rule).

**What workflow should you use?**  For most scenarios, you probably want to use the inline declaration workflow.  Inline declarations have higher specificity than external ones, so the inline workflow ensures that the changes take effect in your expected element.  For more information about specificity, see [Selector Types](https://developer.mozilla.org/docs/Web/CSS/Specificity#Selector_Types).

If you're debugging an element's styles and you need to specifically test what happens when a declaration is defined in different places, use the other workflow.

### Add an inline declaration

To add an inline declaration:

1.  [Select an element](#select-an-element).
1.  In the **Styles** pane, click between the brackets of the **element.style** section.  The cursor focuses, allowing you to enter text.
1.  Enter a property name and press `Enter`.
1.  Enter a valid value for that property and press `Enter`.  In the **DOM Tree**, a `style` attribute has been added to the element.

In the following figure, the `margin-top` and `background-color` properties have been applied to the selected element.  In the **DOM Tree**, the declarations are reflected in the element's `style` attribute.

:::image type="content" source="../media/css-elements-styles-margin-top-background-color.msft.png" alt-text="Add inline declarations." lightbox="../media/css-elements-styles-margin-top-background-color.msft.png":::

### Add a declaration to a style rule

To add a declaration to an existing style rule:

1.  [Select an element](#select-an-element).
1.  In the **Styles** pane, click between the brackets of the style rule to which you want to add the declaration.  The cursor focuses, allowing you to enter text.
1.  Enter a property name and press `Enter`.
1.  Enter a valid value for that property and press `Enter`.

:::image type="content" source="../media/css-elements-styles-border-bottom-style.msft.png" alt-text="Adding a declaration to a style rule." lightbox="../media/css-elements-styles-border-bottom-style.msft.png":::


<!-- ====================================================================== -->
## Change a declaration name or value

Double-click a declaration's name or value to change it.  See [Change declaration values with keyboard shortcuts](#change-declaration-values-with-keyboard-shortcuts) for shortcuts for quickly incrementing or decrementing a value by 0.1, 1, 10, or 100 units.

:::image type="content" source="../media/css-elements-styles-border-bottom-style-dropdown.msft.png" alt-text="Changing the value of a declaration." lightbox="../media/css-elements-styles-border-bottom-style-dropdown.msft.png":::


<!-- ====================================================================== -->
## Change declaration values with keyboard shortcuts

While editing the value of a declaration, you can use the following keyboard shortcuts to increment the value by a specific amount:

| Keyboard shortcut | Increments by |
|---|---|
| `Alt`+`Up` (Windows, Linux) or `Option`+`Up` (macOS) | 0.1 |
| `Up` | 1 (or 0.1, if the current value is between -1 and 1) |
| `Shift`+`Up` | 10 |
| `Shift`+`Page Up` (Windows, Linux) or `Shift`+`Command`+`Up` (macOS) | 100 |

To decrement, press the `Down` key instead of the `Up` key.


<!-- ====================================================================== -->
## Add a class to an element

To add a class to an element:

1.  [Select the element](#select-an-element) in the **DOM Tree**.
1.  Click **.cls**.
1.  Enter the name of the class in the **Add New Class** text box.
1.  Press `Enter`.

:::image type="content" source="../media/css-elements-styles-filter-classes.msft.png" alt-text="The Element Classes pane." lightbox="../media/css-elements-styles-filter-classes.msft.png":::


<!-- ====================================================================== -->
## Toggle a class

To enable or disable a class on an element:

1.  [Select the element](#select-an-element) in the **DOM Tree**.
1.  Open the **Element Classes** pane.  See [Add a class to an element](#add-a-class-to-an-element).  Below the **Add New Class** text boxes are all of the classes that are being applied to this element.
1.  Toggle the checkbox next to the class that you want to enable or disable.


<!-- ====================================================================== -->
## Add a style rule

To add a new style rule:

1.  [Select an element](#select-an-element).
1.  Click **New Style Rule** (![New Style Rule](../media/new-style-rule-icon.msft.png)).  DevTools inserts a new rule beneath the **element.style** rule.

In the following figure, DevTools adds the `h1.devsite-page-title` style rule after you click **New Style Rule**.

:::image type="content" source="../media/css-elements-styles-style-new.msft.png" alt-text="Add a new style rule." lightbox="../media/css-elements-styles-style-new.msft.png":::

### Choose which stylesheet to add a rule to

When [adding a new style rule](#add-a-style-rule), click and hold **New Style Rule** (![New Style Rule](../media/new-style-rule-icon.msft.png)) to choose which stylesheet to add the style rule to.

:::image type="content" source="../media/css-elements-styles-style-new-select-existing.msft.png" alt-text="Choose a stylesheet." lightbox="../media/css-elements-styles-style-new-select-existing.msft.png":::

### Add a style rule to a specific location

To add a style rule to a specific location in the **Styles** panel:

1.  Hover on the style rule that is directly above where you want to add your new style rule.

1.  [Reveal the **More Actions** toolbar](#reveal-the-more-actions-toolbar).

1.  Select **Insert Style Rule Below** (![Insert Style Rule Below icon](../media/new-style-rule-icon.msft.png)).

:::image type="content" source="../media/css-elements-styles-insert-style-rule-below.msft.png" alt-text="Insert Style Rule Below." lightbox="../media/css-elements-styles-insert-style-rule-below.msft.png":::


<!-- ====================================================================== -->
## Reveal the More Actions toolbar

The **More Actions** toolbar lets you perform the following actions:
*   Insert a style rule directly below the one you are focused on.
*   Add a `background-color`, `color`, `box-shadow`, or `text-shadow` declaration to the style rule you are focused on.

To reveal the **More Actions** toolbar:

1.  In the **Styles** panel, hover on a style rule.  **More Actions** (`...`) is revealed in the bottom-right of the style rule section.

    In the following figure, hover on the `.header-holder.has-default-focus` style rule and **More Actions** is revealed in the bottom-right of the style rule section.

    :::image type="content" source="../media/css-elements-styles-new-rule-styles.msft.png" alt-text="Reveal 'More Actions' (...)." lightbox="../media/css-elements-styles-new-rule-styles.msft.png":::

1.  Hover on **More Actions** (`...`) to reveal the actions mentioned above.

    The **Insert Style Rule Below** action is revealed after hovering over **More Actions**.

    :::image type="content" source="../media/css-elements-styles-rule-more-options-insert-style-rule-below.msft.png" alt-text="The 'More Actions' toolbar." lightbox="../media/css-elements-styles-rule-more-options-insert-style-rule-below.msft.png":::


<!-- ====================================================================== -->
## Add a background-color declaration

To add a `background-color` declaration to an element:

1.  Hover on the style rule that you want to add the `background-color` declaration to.

1.  [Reveal the **More Actions** toolbar](#reveal-the-more-actions-toolbar).

1.  Click **Add Background Color** (![Add Background Color icon](../media/add-background-color-icon.msft.png)).

:::image type="content" source="../media/css-elements-styles-rule-add-background-color.msft.png" alt-text="Add Background Color." lightbox="../media/css-elements-styles-rule-add-background-color.msft.png":::


<!-- ====================================================================== -->
## Add a color declaration

To add a `color` declaration to an element:

1.  Hover on the style rule that you want to add the `color` declaration to.

1.  [Reveal the **More Actions** toolbar](#reveal-the-more-actions-toolbar).

1.  Click **Add Color** (![Add Color icon](../media/add-color-icon.msft.png)).

:::image type="content" source="../media/css-elements-styles-rule-add-color.msft.png" alt-text="Add Color." lightbox="../media/css-elements-styles-rule-add-color.msft.png":::


<!-- ====================================================================== -->
## Add a box-shadow declaration

To add a `box-shadow` declaration to an element:

1.  Hover on the style rule that you want to add the `box-shadow` declaration to.
1.  [Reveal the **More Actions** toolbar](#reveal-the-more-actions-toolbar).
1.  Click **Add Box Shadow** (![Add Box Shadow icon](../media/add-box-shadow-icon.msft.png)).

:::image type="content" source="../media/css-elements-styles-rule-add-box-shadow.msft.png" alt-text="Add Box Shadow." lightbox="../media/css-elements-styles-rule-add-box-shadow.msft.png":::


<!-- ====================================================================== -->
## Add a text-shadow declaration

To add a `text-shadow` declaration to an element:

1.  Hover on the style rule that you want to add the `text-shadow` declaration to.
1.  [Reveal the **More Actions** toolbar](#reveal-the-more-actions-toolbar).
1.  Click **Add Text Shadow** (![Add Text Shadow icon](../media/add-text-shadow-icon.msft.png)).

:::image type="content" source="../media/css-elements-styles-rule-add-text-shadow.msft.png" alt-text="Add Text Shadow." lightbox="../media/css-elements-styles-rule-add-text-shadow.msft.png":::


<!-- ====================================================================== -->
## Toggle a declaration

To toggle a single declaration on or off:

1.  [Select an element](#select-an-element).

1.  In the **Styles** pane, hover on the rule that defines the declaration.  A checkbox appears next to each declaration.

1.  Select or clear the checkbox next to the declaration.  When you clear a declaration, DevTools crosses it out, to indicate that it is no longer active.

In the following figure, the `margin-top` property for the currently selected element has been toggled off.

:::image type="content" source="../media/css-elements-styles-rule-deactivated.msft.png" alt-text="Toggle a declaration." lightbox="../media/css-elements-styles-rule-deactivated.msft.png":::


<!-- ====================================================================== -->
## Change colors with the Color Picker

The **Color Picker** provides a GUI for changing `color` and `background-color` declarations.

To open the **Color Picker**:

1.  [Select an element](#select-an-element).

1.  In the **Styles** panel, find the `color`, `background-color`, or similar declaration that you want to change.  To the left of the `color`, `background-color`, or similar value, there is a small square, which is a preview of the color.

    In the following figure, the small square to the left of `rgba(0, 0, 0, 0.7)` is a preview of that color.

    :::image type="content" source="../media/css-elements-styles-rule-overlay-color-box.msft.png" alt-text="Color preview." lightbox="../media/css-elements-styles-rule-overlay-color-box.msft.png":::

1.  Click the preview to open the **Color Picker**.

    :::image type="content" source="../media/css-elements-styles-rule-color-picker.msft.png" alt-text="The Color Picker." lightbox="../media/css-elements-styles-rule-color-picker.msft.png":::

The following figure and list describes of each of the UI elements of the **Color Picker**.

:::image type="content" source="../media/css-elements-styles-rule-color-picker-annotated.msft.png" alt-text="The Color Picker, annotated." lightbox="../media/css-elements-styles-rule-color-picker-annotated.msft.png":::

| Callout | Component | Description |
|---|---|---|
| 1 | **Shades** |  |
| 2 | **Eyedropper** | [Sample a color off the page with the Eyedropper](#sample-a-color-off-the-page-with-the-eyedropper) |
| 3 | **Copy To Clipboard** | Copy the **Display Value** to your clipboard. |
| 4 | **Display Value** | The RGBA, HSLA, or Hex representation of the color. |
| 5 | **Color Palette** | Click a square to change the color. |
| 6 | **Hue** |  |
| 7 | **Opacity** |  |
| 8 | **Display Value Switcher** | Toggle between the RGBA, HSLA, and Hex representations of the current color. |
| 9 | **Color Palette Switcher** | Toggle between the [Material Design palette](https://material.io/guidelines/style/color.html#color-color-palette), a custom palette, or a page colors palette.  DevTools generates the page color palette based on the colors that it finds in your stylesheets. |

### Sample a color off the page with the Eyedropper

When you open the **Color Picker**, the **Eyedropper** (![Eyedropper](../media/eyedropper-icon.msft.png)) is on by default.

To change the selected color to some other color on the page:

1.  Hover on the target color in the viewport.

1.  Click to confirm.

In the following figure, the **Color Picker** shows a current color value of `rgba(0,0,0,0.7)`, which is close to black.  The specific color changes to the version of black that is currently highlighted in the viewport after you clicked it.

:::image type="content" source="../media/css-color-picker-eye-dropper.msft.png" alt-text="Using the Eyedropper." lightbox="../media/css-color-picker-eye-dropper.msft.png":::


<!-- ====================================================================== -->
## Change angle value with the Angle Clock

<!--todo: finish formatting this section on the Angle clock.  Add 2 captures.  See What's New 88:
https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/whats-new/2020/11/devtools#new-css-angle-visualization-tools
-->

The **Angle Clock** provides a GUI for changing the angle amounts in CSS property values.

To open the **Angle Clock**:

1.  Select an element which includes an angle declaration. <!-- For example, select the text below. -->

1.  In the **Styles** tab, find the `transform` or `background` declaration that you want to change.  Click the **Angle Preview** box next to the angle value.

    In the following figure, the small clock to the left of `100deg` is a preview of the angle.
    <!-- :::image type="content" source="../media/__.png" alt-text="The Angle Clock."::: -->

1.  Click the preview to open the **Angle Clock**:

    :::image type="content" source="images/css-angle.msft.png" alt-text="Angle preview.":::

1.  Change the angle value by clicking on the **Angle Clock** circle, or scroll your mouse to increase or decrease the angle value by 1.

There are more keyboard shortcuts to change the angle value.  Find out more in the [Styles pane keyboard shortcuts](../shortcuts/index.md#styles-pane-keyboard-shortcuts).


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/css/reference) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
