---
title: CSS Reference
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 08/14/2020
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

# CSS reference  

Discover new workflows in the following comprehensive reference of Microsoft Edge DevTools features related to viewing and changing CSS.  

See [Get Started with Viewing and Changing CSS][DevToolsCSSGetStarted] to learn the basics.  

## Select an element  

The **Elements** panel of DevTools lets you view or change the CSS of one element at a time.  The selected element is highlighted in the **DOM Tree**.  The styles of the element are shown in the **Styles** pane.  See [View the CSS for an element][DevToolsCSSGetStartedTutorial] for a tutorial.  

> [!NOTE]
> In the following figure, the `h1` element that is highlighted in the **DOM Tree** is the selected element.  On the right, the styles of the element are shown in the **Styles** pane.  On the left, the element is highlighted in the viewport, but only because the mouse is currently hovering over it in the **DOM Tree**.  

:::image type="complex" source="../media/css-elements-styles-h1.msft.png" alt-text="An example of a selected element" lightbox="../media/css-elements-styles-h1.msft.png":::
   An example of a selected element  
:::image-end:::  

Use one the following actions to select an element.  

*   In your viewport, hover on the element, open the contextual menu \(right-click\), and select **Inspect**.  
*   In DevTools, choose **Select an element** \(![Select an element][ImageSelectAnElementIcon]\) or select `Control`+`Shift`+`C` \(Windows\) or `Command`+`Shift`+`C` \(macOS\), and then choose the element in the viewport.  
*   In DevTools, choose the element in the **DOM Tree**.  
*   In DevTools, run a query like `document.querySelector('p')` in the **Console**, hover on the result, open the contextual menu \(right-click\), and select **Reveal in Elements panel**.  

## View CSS  

### View the external stylesheet where a rule is defined  

In the **Styles** pane, choose the link next to a CSS rule to open the external stylesheet that defines the rule.  

If the stylesheet is minified, see [Make a minified file readable][DevToolsJavascriptReferenceFormat].  

> [!NOTE]
> In the following figure, after you choose `https://docs.microsoft.com/_themes/docs.theme/master/en-us/_themes/styles/b66bc881.site-ltr.css:2` you are taken to line 2 of `https://docs.microsoft.com/_themes/docs.theme/master/en-us/_themes/styles/b66bc881.site-ltr.css`, where the `.content h1:first-of-type` CSS rule is defined.  

<!--todo:  replace "Master" phrasing in code snippet, if possible.  -->  

:::image type="complex" source="../media/css-elements-styles-h1-highlight.msft.png" alt-text="Viewing the stylesheet where a rule is defined" lightbox="../media/css-elements-styles-h1-highlight.msft.png":::
  Viewing the stylesheet where a rule is defined  
:::image-end:::  

### View only the CSS that is actually applied to an element  

The **Styles** tab shows you all of the rules that apply to an element, including declarations that have been overridden.  When you are not interested in overridden declarations, use the **Computed** tab to view only the CSS that is actually being applied to an element.  

1.  [Select an element](#select-an-element).  
1.  Go to the **Computed** tab in the **Elements** panel.  

> [!NOTE]
> On a wide DevTools window, the **Computed** tab does not exist.  The contents of the **Computed** tab are shown on the **Styles** tab.  

Inherited properties are opaque.  Check the **Show All** checkbox to see all inherited values.  

> [!NOTE]
> In the following figure, the **Computed** tab shows the CSS properties being applied to the currently-selected `h1` element.  

:::image type="complex" source="../media/css-elements-computed-h1.msft.png" alt-text="The Computed tab" lightbox="../media/css-elements-computed-h1.msft.png":::
   The **Computed** tab  
:::image-end:::  

### View CSS properties in alphabetical order  

Use the **Computed** tab.  See [View only the CSS that is actually applied to an element](#view-only-the-css-that-is-actually-applied-to-an-element).  

### View inherited CSS properties  

Check the **Show All** checkbox in the **Computed** tab.  See [View only the CSS that is actually applied to an element](#view-only-the-css-that-is-actually-applied-to-an-element).  

### View the box model for an element  

To view [the box model][MDNBoxModel] of an element, go to the **Styles** tab.  If your DevTools window is narrow, the **Box Model** diagram is at the bottom of the tab.  

Choose and edit on a value to change a value.  

> [!NOTE]
> In the following figure, the **Box Model** diagram in the **Styles** tab shows the box model for the currently selected `h1` element.  

:::image type="complex" source="../media/css-elements-styles-h1-2.msft.png" alt-text="The Box Model diagram" lightbox="../media/css-elements-styles-h1-2.msft.png":::
   The **Box Model** diagram  
:::image-end:::  

### Search and filter the CSS of an element  

Use the **Filter** text box on the **Styles** and **Computed** tabs to search for specific CSS properties or values.  

To also search inherited properties in the **Computed** tab, check the **Show All** checkbox.  

> [!NOTE]
> In the following figure, the **Styles** tab is filtered to only show rules that include the search query `color`.  

:::image type="complex" source="../media/css-elements-styles-filter-color.msft.png" alt-text="Filter the Styles tab" lightbox="../media/css-elements-styles-filter-color.msft.png":::
   Filter the **Styles** tab  
:::image-end:::  

> [!NOTE]
> In the following figure, the **Computed** tab is filtered to only show declarations that include the search query `100%`.  

:::image type="complex" source="../media/css-elements-computed-filter-100.msft.png" alt-text="Filter the Computed tab" lightbox="../media/css-elements-computed-filter-100.msft.png":::
   Filter the **Computed** tab  
:::image-end:::  

### Toggle a pseudo-class  

Complete the following actions to toggle a pseudo-class like `:active`, `:focus`, `:hover`, or `:visited`.  

1.  [Select an element](#select-an-element).  
1.  On the **Elements** panel, go to the **Styles** tab.  
1.  Choose **:hov**.  
1.  Check the pseudo-class that you want to enable.  

> [!NOTE]
> In the following figure, toggle the `:hover` pseudo-class.  In the viewport verify that the `background-color: cornflowerblue` declaration is being applied to the element, even though the element is not actually being hovered over.  

:::image type="complex" source="../media/css-elements-styles-hov-hover.msft.png" alt-text="Toggle the :hover pseudo-class" lightbox="../media/css-elements-styles-hov-hover.msft.png":::
   Toggle the `:hover` pseudo-class  
:::image-end:::  

For an interactive tutorial, see [Add a pseudostate to a class][DevToolsCSSGetStartedAddPseudoState].  

### View a page in print mode  

Complete the following actions to view a page in print mode.  

1.  [Open the Command Menu][DevToolsCommandMenu].  
1.  Start typing `Rendering` and select `Show Rendering`.  
1.  For the **Emulate CSS Media** dropdown, select **print**.  

### View used and unused CSS with the Coverage tab  

The Coverage tab shows you what CSS a page actually uses.  

1.  Select `Control`+`Shift`+`P` \(Windows\) or `Command`+`Shift`+`P` \(macOS\) while DevTools is in focus to [open the Command Menu][DevToolsCommandMenu].  
1.  Start typing `coverage` and select **Show Coverage**.  The Coverage tab appears.  
    
    :::row:::
       :::column span="":::
          :::image type="complex" source="../media/css-console-command-menu-coverage.msft.png" alt-text="Opening the Coverage tab from the Command Menu" lightbox="../media/css-console-command-menu-coverage.msft.png":::
             Open the **Coverage** tab from the **Command Menu**  
          :::image-end:::  
       :::column-end:::
       :::column span="":::
          :::image type="complex" source="../media/css-console-qs-coverage-empty.msft.png" alt-text="The Coverage tab" lightbox="../media/css-console-qs-coverage-empty.msft.png":::
             The **Coverage** tab  
          :::image-end:::  
       :::column-end:::
    :::row-end:::  
    
1.  Choose **Start instrumenting coverage and refresh the page** \(![Start instrumenting coverage and refresh the page][ImageRefreshIcon]\).  The page refreshes and the Coverage tab provides an overview of how much CSS \(and JavaScript\) is used from each file that the browser loads.  Green represents used CSS.  Red represents unused CSS.  
    
    :::image type="complex" source="../media/css-console-qs-coverage-run.msft.png" alt-text="An overview of how much CSS (and JavaScript) is used and unused" lightbox="../media/css-console-qs-coverage-run.msft.png":::
       An overview of how much CSS \(and JavaScript\) is used and unused  
    :::image-end:::  

1.  Choose a CSS file to see a line-by-line breakdown of what CSS it uses.  
    
    > [!NOTE]
    > In the following figure, lines 145 to 147 and 149 to 151 of `b66bc881.site-ltr.css` are unused, whereas lines 163 to 166 are used.  
    
    :::image type="complex" source="../media/css-sources-css-coverage.msft.png" alt-text="A line-by-line breakdown of used and unused CSS" lightbox="../media/css-sources-css-coverage.msft.png":::
       A line-by-line breakdown of used and unused CSS  
    :::image-end:::  
    
### Force print preview mode  

See [Force DevTools into Print Preview mode][DevToolsCssPrintPreview].  

## Change CSS  

<!-- todo s/CSS declaration/declaration/ -->  

### Add a CSS declaration to an element  

The order of declarations affects how an element is styled, use the following list to help you add declarations in different ways.  

*   [Add a inline declaration](#add-an-inline-declaration).  Equivalent to adding a `style` attribute to the HTML of an element.  
*   [Add a declaration to a style rule](#add-a-declaration-to-a-style-rule).  

**What workflow should you use?** For most scenarios, you probably want to use the inline declaration workflow.  Inline declarations have higher specificity than external ones, so the inline workflow ensures that the changes take effect in your expected element.  For more information about specificity, see [Selector Types][MDNSelectorTypes].  

If you are debugging any styles of the element and you need to specifically test what happens when a declaration is defined in different places, use the other workflow.  

#### Add an inline declaration  

Complete the following actions to add an inline declaration.  

1.  [Select an element](#select-an-element).  
1.  In the **Styles** pane, choose between the brackets of the **element.style** section.  The cursor focuses, allowing you to enter text.  
1.  Enter a property name and select `Enter`.  
1.  Enter a valid value for that property and select `Enter`.  In the **DOM Tree**, verify that a `style` attribute has been added to the element.  

> [!NOTE]
> In the following figure, the `margin-top` and `background-color` properties have been applied to the selected element.  In the **DOM Tree** verify that the declarations are reflected in the `style` attribute for an element.  

:::image type="complex" source="../media/css-elements-styles-margin-top-background-color.msft.png" alt-text="Add inline declarations" lightbox="../media/css-elements-styles-margin-top-background-color.msft.png":::
   Add inline declarations  
:::image-end:::  

#### Add a declaration to a style rule  

Complete the following actions to add a declaration to an existing style rule.  

1.  [Select an element](#select-an-element).  
1.  In the **Styles** pane, choose between the brackets of the style rule to which you want to add the declaration.  The cursor focuses, allowing you to enter text.  
1.  Enter a property name and select `Enter`.  
1.  Enter a valid value for that property and select `Enter`.  

:::image type="complex" source="../media/css-elements-styles-border-bottom-style.msft.png" alt-text="Adding a declaration to a style rule" lightbox="../media/css-elements-styles-border-bottom-style.msft.png":::
   Add the `border-bottom-style:groove` declaration to a style rule  
:::image-end:::  

### Change a declaration name or value  

Choose and edit the name or value of a declaration to change it.  See [Change declaration values with keyboard shortcuts](#change-declaration-values-with-keyboard-shortcuts) for shortcuts for quickly incrementing or decrementing a value by `0.1`, `1`, `10`, or `100` units.  

:::image type="complex" source="../media/css-elements-styles-border-bottom-style-dropdown.msft.png" alt-text="Changing the value of a declaration" lightbox="../media/css-elements-styles-border-bottom-style-dropdown.msft.png":::
   Change the value of the `border-bottom-style` declaration  
:::image-end:::  

### Change declaration values with keyboard shortcuts  

While editing the value of a declaration, you may use the following keyboard shortcuts to increment the value by a specific amount.  

*   Select `Alt`+`Up` \(Windows\) or `Option`+`Up` \(macOS\) to increment by `0.1`.  
*   Select `Up` to change the value by `1`, or by `0.1` if the current value is between `-1` and `1`.  
*   Select `Shift`+`Up` to increment by `10`.  
*   Select `Shift`+`Page Up` \(Windows\) or `Shift`+`Command`+`Up` \(macOS\) to increment the value by `100`.  

Decrementing also works.  Just replace each instance of `Up` mentioned above with `Down`.  

### Add a class to an element  

Complete the following actions to add a class to an element.  

1.  [Select the element](#select-an-element) in the **DOM Tree**.  
1.  Choose **.cls**.  
1.  Enter the name of the class in the **Add New Class** text box.  
1.  Select `Enter`.  

:::image type="complex" source="../media/css-elements-styles-filter-classes.msft.png" alt-text="The Element Classes pane" lightbox="../media/css-elements-styles-filter-classes.msft.png":::
   The **Element Classes** pane  
:::image-end:::  

### Toggle a class  

Complete the following actions to enable or disable a class on an element.  

1.  [Select the element](#select-an-element) in the **DOM Tree**.  
1.  Open the **Element Classes** pane.  See [Add a class to an element](#add-a-class-to-an-element).  Below the **Add New Class** text box are all of the classes that are being applied to the specific element.  
1.  Toggle the checkbox next to the class that you want to enable or disable.  

### Add a style rule  

Complete the following actions to add a new style rule.  

1.  [Select an element](#select-an-element).  
1.  Choose **New Style Rule** \(![New Style Rule][ImageNewStyleRuleIcon]\).  DevTools inserts a new rule beneath the **element.style** rule.  

> [!NOTE]
> In the following figure, DevTools adds the `h1.devsite-page-title` style rule after you choose **New Style Rule**.  

:::image type="complex" source="../media/css-elements-styles-style-new.msft.png" alt-text="Add a new style rule" lightbox="../media/css-elements-styles-style-new.msft.png":::
   Add a new style rule  
:::image-end:::  

#### Choose which stylesheet to add a rule to  

When [adding a new style rule](#add-a-style-rule), choose and hold **New Style Rule** \(![New Style Rule][ImageNewStyleRuleIcon]\) to choose which stylesheet to add the style rule to.  

:::image type="complex" source="../media/css-elements-styles-style-new-select-existing.msft.png" alt-text="Choose a stylesheet" lightbox="../media/css-elements-styles-style-new-select-existing.msft.png":::
   Choose a stylesheet  
:::image-end:::  

#### Add a style rule to a specific location  

Complete the following actions to add a style rule to a specific location in the **Styles** tab.  

1.  Hover over the style rule that is directly above where you want to add your new style rule.  
1.  [Reveal the **More Actions** toolbar](#reveal-the-more-actions-toolbar).  
1.  Choose **Insert Style Rule Below** \(![Insert Style Rule Below][ImageNewStyleRuleIcon]\).  

:::image type="complex" source="../media/css-elements-styles-insert-style-rule-below.msft.png" alt-text="Insert Style Rule Below" lightbox="../media/css-elements-styles-insert-style-rule-below.msft.png":::
   **Insert Style Rule Below**  
:::image-end:::  

### Reveal the More Actions toolbar  

The **More Actions** toolbar lets you perform the following actions.  

*   Insert a style rule directly below the one you are focused on.  
*   Add a `background-color`, `color`, `box-shadow`, or `text-shadow` declaration to the style rule you are focused on.  

Complete the following actions to reveal the **More Actions** toolbar.  

1.  In the **Styles** tab, hover over a style rule.  **More Actions** \(`...`\) is revealed in the bottom-right of the style rule section.  
    
    > [!NOTE]
    > In the following figure, hover over the `.header-holder.has-default-focus` style rule and **More Actions** is revealed in the bottom-right of the style rule section.  
    
    :::image type="complex" source="../media/css-elements-styles-new-rule-styles.msft.png" alt-text="Reveal More Actions" lightbox="../media/css-elements-styles-new-rule-styles.msft.png":::
       Reveal **More Actions** \(`...`\)  
    :::image-end:::  
    
1.  Hover over **More Actions** \(`...`\) to reveal the actions mentioned above.  
    
    > [!NOTE]
    > The **Insert Style Rule Below** action is revealed after hovering over **More Actions**.  
    
    :::image type="complex" source="../media/css-elements-styles-rule-more-options-insert-style-rule-below.msft.png" alt-text="The More Actions toolbar" lightbox="../media/css-elements-styles-rule-more-options-insert-style-rule-below.msft.png":::
       The **More Actions** toolbar  
    :::image-end:::  
    
### Toggle a declaration  

Complete the folllwoing actions to toggle a single declaration on \(or off\).  

1.  [Select an element](#select-an-element).  
1.  In the **Styles** pane, hover over the rule that defines the declaration.  A checkbox appears next to each declaration.  
1.  Check \(or uncheck\) the checkbox next to the declaration.  When you uncheck a declaration, DevTools crosses it out to indicate that it is no longer active.  

> [!NOTE]
> In the following figure, the `margin-top` property for the currently selected element has been toggled off.  

:::image type="complex" source="../media/css-elements-styles-rule-deactivated.msft.png" alt-text="Toggle a declaration" lightbox="../media/css-elements-styles-rule-deactivated.msft.png":::
   Toggle a declaration  
:::image-end:::  

### Add a background-color declaration  

Complete the following actions to add a `background-color` declaration to an element.  

1.  Hover over the style rule that you want to add the `background-color` declaration to.  
1.  [Reveal the **More Actions** toolbar](#reveal-the-more-actions-toolbar).  
1.  Choose **Add Background Color** \(![Add Background Color][ImageAddBackgroundColorIcon]\).  

:::image type="complex" source="../media/css-elements-styles-rule-add-background-color.msft.png" alt-text="Add Background Color" lightbox="../media/css-elements-styles-rule-add-background-color.msft.png":::
   **Add Background Color**  
:::image-end:::  

### Add a color declaration  

Complete the following actions to add a `color` declaration to an element.  

1.  Hover over the style rule that you want to add the `color` declaration to.  
1.  [Reveal the **More Actions** toolbar](#reveal-the-more-actions-toolbar).  
1.  Choose **Add Color** \(![Add Color][ImageAddColorIcon]\).  

:::image type="complex" source="../media/css-elements-styles-rule-add-color.msft.png" alt-text="Add Color" lightbox="../media/css-elements-styles-rule-add-color.msft.png":::
   **Add Color**  
:::image-end:::  

### Add a box-shadow declaration  

Complete the follwoing actions to add a `box-shadow` declaration to an element.  

1.  Hover over the style rule that you want to add the `box-shadow` declaration to.  
1.  [Reveal the **More Actions** toolbar](#reveal-the-more-actions-toolbar).  
1.  Choose **Add Box Shadow** \(![Add Box Shadow][ImageAddBoxShadowIcon]\).  

:::image type="complex" source="../media/css-elements-styles-rule-add-box-shadow.msft.png" alt-text="Add Box Shadow" lightbox="../media/css-elements-styles-rule-add-box-shadow.msft.png":::
   **Add Box Shadow**  
:::image-end:::  

### Add a text-shadow declaration  

Complete the following actions to add a `text-shadow` declaration to an element.  

1.  Hover over the style rule that you want to add the `text-shadow` declaration to.  
1.  [Reveal the **More Actions** toolbar](#reveal-the-more-actions-toolbar).  
1.  Choose **Add Text Shadow** \(![Add Text Shadow][ImageAddTextShadowIcon]\).  

:::image type="complex" source="../media/css-elements-styles-rule-add-text-shadow.msft.png" alt-text="Add Text Shadow" lightbox="../media/css-elements-styles-rule-add-text-shadow.msft.png":::
   **Add Text Shadow**  
:::image-end:::  

### Change colors with the Color Picker  

The **Color Picker** provides a GUI for changing `color` and `background-color` declarations.  

Complete the following actions to open the **Color Picker**.  

1.  [Select an element](#select-an-element).  
1.  In the **Styles** tab, find the `color`, `background-color`, or similar declaration that you want to change.  To the left of the `color`, `background-color`, or similar value, there is a small square which is a preview of the color.  
    
    > [!NOTE]
    > In the following figure, the small square to the left of `rgba(0, 0, 0, 0.7)` is a preview of that color.  
    
    :::image type="complex" source="../media/css-elements-styles-rule-overlay-color-box.msft.png" alt-text="Color preview" lightbox="../media/css-elements-styles-rule-overlay-color-box.msft.png":::
       Color preview  
    :::image-end:::  
    
1.  Choose the preview to open the **Color Picker**.  
    
    :::image type="complex" source="../media/css-elements-styles-rule-color-picker.msft.png" alt-text="The Color Picker" lightbox="../media/css-elements-styles-rule-color-picker.msft.png":::
       The **Color Picker**  
    :::image-end:::  
    
The following figure and list descries of each of the UI elements of the **Color Picker**.  

:::image type="complex" source="../media/css-elements-styles-rule-color-picker-annotated.msft.png" alt-text="The Color Picker, annotated" lightbox="../media/css-elements-styles-rule-color-picker-annotated.msft.png":::
   The **Color Picker**, annotated  
:::image-end:::  

:::row:::
   :::column span="1":::
      1  
   :::column-end:::
   :::column span="1":::
      **Shades**  
   :::column-end:::
   :::column span="2":::
      &nbsp;  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      2  
   :::column-end:::
   :::column span="1":::
      **Eyedropper**  
   :::column-end:::
   :::column span="2":::
      For more information, see [Sample a color off the page with the Eyedropper](#sample-a-color-off-the-page-with-the-eyedropper).  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      3  
   :::column-end:::
   :::column span="1":::
      **Copy To Clipboard**  
   :::column-end:::
   :::column span="2":::
      Copy the **Display Value** to your clipboard.  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      4  
   :::column-end:::
   :::column span="1":::
      **Display Value**  
   :::column-end:::
   :::column span="2":::
      The RGBA, HSLA, or Hex representation of the color.  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      5  
   :::column-end:::
   :::column span="1":::
      **Color Palette**  
   :::column-end:::
   :::column span="2":::
      Choose one of the squares to change the color to that square.  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      6  
   :::column-end:::
   :::column span="1":::
      **Hue**  
   :::column-end:::
   :::column span="2":::
      &nbsp;  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      7  
   :::column-end:::
   :::column span="1":::
      **Opacity**  
   :::column-end:::
   :::column span="2":::
      &nbsp;  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      8  
   :::column-end:::
   :::column span="1":::
      **Display Value Switcher**  
   :::column-end:::
   :::column span="2":::
      Toggle between the RGBA, HSLA, and Hex representations of the current color.  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      9  
   :::column-end:::
   :::column span="1":::
      **Color Palette Switcher**  
   :::column-end:::
   :::column span="2":::
      Toggle between the [Material Design palette][MaterialDesignColorSystem], a custom palette, or a page colors palette.  DevTools generates the page color palette based on the colors that it finds in your stylesheets.  
   :::column-end:::
:::row-end:::  

#### Sample a color off the page with the Eyedropper  

When you open the **Color Picker**, the **Eyedropper** \(![Eyedropper][ImageEyedropperIcon]\) is on by default.  Complete the following actions to change the selected color to some other color on the page.  

1.  Hover over the target color in the viewport.  
1.  Choose to confirm.  
    
    > [!NOTE]
    > In the following figure, the **Color Picker** shows a current color value of `rgba(0,0,0,0.7)`, which is close to black.  The specific color should change to the version of black that is currently highlighted in the viewport after you chose it.  
    
    :::image type="complex" source="../media/css-color-picker-eye-dropper.msft.png" alt-text="Using the Eyedropper" lightbox="../media/css-color-picker-eye-dropper.msft.png":::
       Using the Eyedropper  
    :::image-end:::  
    
<!-- image links -->  

[ImageAddBackgroundColorIcon]: ../media/add-background-color-icon.msft.png  
[ImageAddBoxShadowIcon]: ../media/add-box-shadow-icon.msft.png  
[ImageAddColorIcon]: ../media/add-color-icon.msft.png  
[ImageAddTextShadowIcon]: ../media/add-text-shadow-icon.msft.png  
[ImageEyedropperIcon]: ../media/eyedropper-icon.msft.png  
[ImageNewStyleRuleIcon]: ../media/new-style-rule-icon.msft.png  
[ImageRefreshIcon]: ../media/refresh-icon.msft.png  
[ImageSelectAnElementIcon]: ../media/select-an-element-icon.msft.png  

<!-- links -->  

[DevToolsCommandMenu]: ../command-menu/index.md "Run Commands With The Microsoft Edge DevTools Command Menu | Microsoft Docs"  
[DevToolsCSSGetStarted]: ../css/index.md "Get Started With Viewing And Changing CSS | Microsoft Docs"  
[DevToolsCSSGetStartedAddPseudoState]: ../css/index.md#add-a-pseudostate-to-a-class "Add a pseudostate to a class - Get Started With Viewing And Changing CSS | Microsoft Docs"  
[DevToolsCSSGetStartedTutorial]: ../css/index.md#view-the-css-for-an-element "View the CSS for an Element - Get Started With Viewing And Changing CSS | Microsoft Docs"  
[DevToolsCssPrintPreview]: ../css/print-preview.md "Force Microsoft Edge DevTools Into Print Preview Mode (CSS Print Media Type) | Microsoft Docs"  
[DevToolsJavascriptReferenceFormat]: ../javascript/reference.md#make-a-minified-file-readable "Make a minified file readable - JavaScript Debugging Reference | Microsoft Docs"  

[MaterialDesignColorSystem]: https://material.io/guidelines/style/color.html#color-color-palette "The color system - Material Design"  
[MDNBoxModel]: https://developer.mozilla.org/docs/Learn/CSS/Introduction_to_CSS/Box_model "The box model | MDN"  
[MDNSelectorTypes]: https://developer.mozilla.org/docs/Web/CSS/Specificity#Selector_Types "Selector Types - Specificity | MDN"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/css/reference) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
