---
title: CSS Reference
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/06/2020
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







# CSS Reference   



Discover new workflows in this comprehensive reference of Microsoft Edge DevTools features related to viewing and changing CSS.  

See [Get Started with Viewing and Changing CSS][DevToolsCSSGetStarted] to learn the basics.  

## Select an element   

The **Elements** panel of DevTools lets you view or change the CSS of one element at a time.  The selected element is highlighted in the **DOM Tree**.  The styles of the element are shown in the **Styles** pane.  See [View the CSS for an element][DevToolsCSSGetStartedTutorial] for a tutorial.  

> [!NOTE]
> In [Figure 1](#figure-1), The `h1` element that is highlighted in the **DOM Tree** is the selected element.  On the right, the styles of the element are shown in the **Styles** pane.  On the left, the element is highlighted in the viewport, but only because the mouse is currently hovering over it in the **DOM Tree**.  

> ##### Figure 1  
> An example of a selected element  
> ![An example of a selected element][ImageSelectedElement]  

There are many ways to select an element:  

*   In your viewport, right-click the element and select **Inspect**.  
*   In DevTools, click **Select an element** ![Select an element][ImageSelectAnElementIcon] or press `Control`+`Shift`+`C` \(Windows\) or `Command`+`Shift`+`C` \(macOS\), and then click the element in the viewport.  
*   In DevTools, click the element in the **DOM Tree**.  
*   In DevTools, run a query like `document.querySelector('p')` in the **Console**, right-click the result, and then select **Reveal in Elements panel**.  

## View CSS   

### View the external stylesheet where a rule is defined   

In the **Styles** pane, click the link next to a CSS rule to open the external stylesheet that defines the rule.  

<!--If the stylesheet is minified, see [Make a minified file readable][DevToolsJavascriptReferenceFormat].  -->  

> [!NOTE]
> In [Figure 2](#figure-2), clicking `https://docs.microsoft.com/_themes/docs.theme/master/en-us/_themes/styles/b66bc881.site-ltr.css:2` takes you to line 2 of `https://docs.microsoft.com/_themes/docs.theme/master/en-us/_themes/styles/b66bc881.site-ltr.css`, where the `.content h1:first-of-type` CSS rule is defined.  

> ##### Figure 2  
> Viewing the stylesheet where a rule is defined  
> ![Viewing the stylesheet where a rule is defined][ImageViewRuleStylesheet]  

### View only the CSS that is actually applied to an element   

The **Styles** tab shows you all of the rules that apply to an element, including declarations that have been overridden.  When you are not interested in overridden declarations, use the **Computed** tab to view only the CSS that is actually being applied to an element.  

1.  [Select an element](#select-an-element).  
1.  Go to the **Computed** tab in the **Elements** panel.  

> [!NOTE]
> On a wide DevTools window, the **Computed** tab does not exist.  The contents of the **Computed** tab are shown on the **Styles** tab.  

Inherited properties are opaque.  Check the **Show All** checkbox to see all inherited values.  

> [!NOTE]
> In [Figure 3](#figure-3), the **Computed** tab shows the CSS properties being applied to the currently-selected `h1` element.  

> ##### Figure 3  
> The **Computed** tab  
> ![The Computed tab][ImageComputedTab]  

### View CSS properties in alphabetical order   

Use the **Computed** tab.  See [View only the CSS that is actually applied to an element](#view-only-the-css-that-is-actually-applied-to-an-element).  

### View inherited CSS properties   

Check the **Show All** checkbox in the **Computed** tab.  See [View only the CSS that is actually applied to an element](#view-only-the-css-that-is-actually-applied-to-an-element).  

### View the box model for an element   

To view [the box model][MDNBoxModel] of an element, go to the **Styles** tab.  If your DevTools window is narrow, the **Box Model** diagram is at the bottom of the tab.  

To change a value, double-click on it.  

> [!NOTE]
> In [Figure 4](#figure-4), the **Box Model** diagram in the **Styles** tab shows the box model for the currently selected `h1` element.  

> ##### Figure 4  
> The **Box Model** diagram  
> ![The Box Model diagram][ImageBoxModel]  

### Search and filter the CSS of an element   

Use the **Filter** text box on the **Styles** and **Computed** tabs to search for specific CSS properties or values.  

To also search inherited properties in the **Computed** tab, check the **Show All** checkbox.  

> [!NOTE]
> In [Figure 5](#figure-5), the **Styles** tab is filtered to only show rules that include the search query `color`.  

> ##### Figure 5  
> Filtering the **Styles** tab  
> ![Filtering the Styles tab][ImageStylesFilter]  

> [!NOTE]
> In [Figure 6](#figure-6), the **Computed** tab is filtered to only show declarations that include the search query `100%`.  

> ##### Figure 6  
> Filtering the **Computed** tab  
> ![Filtering the Computed tab][ImageComputerFilter]  

### Toggle a pseudo-class   

To toggle a pseudo-class like `:active`, `:focus`, `:hover`, or `:visited`:  

1.  [Select an element](#select-an-element).  
1.  On the **Elements** panel, go to the **Styles** tab.  
1.  Click **:hov**.  
1.  Check the pseudo-class that you want to enable.  

> [!NOTE]
> In [Figure 7](#figure-7), toggle the `:hover` pseudo-class.  In the viewport verify that the `background-color: cornflowerblue` declaration is being applied to the element, even though the element is not actually being hovered over.  

> ##### Figure 7  
> Toggling the `:hover` pseudo-class  
> ![Toggling the :hover pseudo-class][ImagePseudoClass]  

See [Add a pseudostate to a class][DevToolsCSSGetStartedAddPseudoState] for an interactive tutorial. 

### View a page in print mode   

To view a page in print mode:  

1.  [Open the Command Menu][DevToolsCommandMenu].  
1.  Start typing `Rendering` and select `Show Rendering`.  
1.  For the **Emulate CSS Media** dropdown, select **print**.  

### View used and unused CSS with the Coverage tab   

The Coverage tab shows you what CSS a page actually uses.  

1.  Press `Control`+`Shift`+`P` \(Windows\) or `Command`+`Shift`+`P` \(macOS\) while DevTools is in focus to open the Command Menu.  
1.  Start typing `coverage` and select **Show Coverage**.  The Coverage tab appears.  
    
    > ##### Figure 8  
    > Opening the Coverage tab from the Command Menu  
    > ![Opening the Coverage tab from the Command Menu][ImageCommandMenu]  
    
    > ##### Figure 9  
    > The Coverage tab  
    > ![The Coverage tab][ImageCoverageEmpty]  
    
1.  Click **Start instrumenting coverage and refresh the page** ![Start instrumenting coverage and refresh the page][ImageReloadIcon].  The page refreshes and the Coverage tab provides an overview of how much CSS \(and JavaScript\) is used from each file that the browser loads.  Green represents used CSS.  Red represents unused CSS.  
    
    > ##### Figure 10  
    > An overview of how much CSS (and JavaScript) is used and unused  
    > ![An overview of how much CSS (and JavaScript) is used and unused][ImageCoverageOverview]  

1.  Click a CSS file to see a line-by-line breakdown of what CSS it uses.  
    
    > [!NOTE]
    > In [Figure 11](#figure-11), lines 145 to 147 and 149 to 151 of `b66bc881.site-ltr.css` are unused, whereas lines 163 to 166 are used.  
    
    > ##### Figure 11  
    > A line-by-line breakdown of used and unused CSS  
    > ![A line-by-line breakdown of used and unused CSS][ImageCoverageDetail]  
    
### Force print preview mode   

See [Force DevTools Into Print Preview Mode][DevToolsCssPrintPreview].  

## Change CSS   

<!-- todo s/CSS declaration/declaration/ -->  

### Add a CSS declaration to an element   

Since the order of declarations affects how an element is styled, you may add declarations in different ways:  

*   [Add a inline declaration](#add-an-inline-declaration).  Equivalent to adding a `style` attribute to the HTML of an element.  
*   [Add a declaration to a style rule](#add-a-declaration-to-a-style-rule).  

**What workflow should you use?** For most scenarios, you probably want to use the inline declaration workflow.  Inline declarations have higher specificity than external ones, so the inline workflow ensures that the changes take effect in the element as you would expect.  See [Selector Types][MDNSelectorTypes] for more on specificity.  

If you are debugging any styles of the element and you need to specifically test what happens when a declaration is defined in different places, use the other workflow.  

#### Add an inline declaration   

To add an inline declaration:  

1.  [Select an element](#select-an-element).  
1.  In the **Styles** pane, click between the brackets of the **element.style** section.  The cursor focuses, allowing you to enter text.  
1.  Enter a property name and press `Enter`.  
1.  Enter a valid value for that property and press `Enter`.  In the **DOM Tree**, verify that a `style` attribute has been added to the element.  

> [!NOTE]
> In [Figure 12](#figure-12), the `margin-top` and `background-color` properties have been applied to the selected element.  In the **DOM Tree** verify that the declarations are reflected in the `style` attribute for an element.  

> ##### Figure 12  
> Adding inline declarations  
> ![Adding inline declarations][ImageInlineDeclarations]  

#### Add a declaration to a style rule   

To add a declaration to an existing style rule:  

1.  [Select an element](#select-an-element).  
1.  In the **Styles** pane, click between the brackets of the style rule to which you want to add the declaration.  The cursor focuses, allowing you to enter text.  
1.  Enter a property name and press `Enter`.  
1.  Enter a valid value for that property and press `Enter`.  

> ##### Figure 13  
> Adding the `border-bottom-style:groove` declaration to a style rule  
> ![Adding a declaration to a style rule][ImageAddDeclarationExistingRule]  

### Change a declaration name or value   

Double-click the name or value of a declaration to change it.  See [Change declaration values with keyboard shortcuts](#change-declaration-values-with-keyboard-shortcuts) for shortcuts for quickly incrementing or decrementing a value by `0.1`, `1`, `10`, or `100` units.  

> ##### Figure 14  
> Changing the value of the `border-bottom-style`  
> ![Changing the value of a declaration][ImageAddDeclarationExistingRule2]  

### Change declaration values with keyboard shortcuts   

While editing the value of a declaration, you may use the following keyboard shortcuts to increment the value by a fixed amount:  

*   Press `Alt`+`Up` \(Windows\) or `Option`+`Up` \(macOS\) to increment by `0.1`.  
*   Press `Up` to change the value by `1`, or by `0.1` if the current value is between `-1` and `1`.  
*   Press `Shift`+`Up` to increment by `10`.  
*   Press `Shift`+`Page Up` \(Windows\) or `Shift`+`Command`+`Up` \(macOS\) to increment the value by `100`.  

Decrementing also works.  Just replace each instance of `Up` mentioned above with `Down`.  

### Add a class to an element   

To add a class to an element:  

1.  [Select the element](#select-an-element) in the **DOM Tree**.  
1.  Click **.cls**.  
1.  Enter the name of the class in the **Add New Class** text box.  
1.  Press `Enter`.  

> ##### Figure 15  
> The **Element Classes** pane  
> ![The Element Classes pane][ImageElementClasses]  

### Toggle a class   

To enable or disable a class on an element:  

1.  [Select the element](#select-an-element) in the **DOM Tree**.  
1.  Open the **Element Classes** pane.  See [Add a class to an element](#add-a-class-to-an-element).  Below the **Add New Class** text box are all of the classes that are being applied to this element.  
1.  Toggle the checkbox next to the class that you want to enable or disable.  

### Add a style rule   

To add a new style rule:  

1.  [Select an element](#select-an-element).  
1.  Click **New Style Rule** ![New Style Rule][ImageNewStyleRuleIcon].  DevTools inserts a new rule beneath the **element.style** rule.  

> [!NOTE]
> In [Figure 16](#figure-16), DevTools adds the `h1.devsite-page-title` style rule after clicking **New Style Rule**.  

> ##### Figure 16  
> Adding a new style rule  
> ![Adding a new style rule][ImageStyleRule]  

#### Choose which stylesheet to add a rule to   

When [adding a new style rule](#add-a-style-rule), click and hold **New Style Rule** ![New Style Rule][ImageNewStyleRuleIcon] to choose which stylesheet to add the style rule to.  

> ##### Figure 17  
> Choosing a stylesheet  
> ![Choosing a stylesheet][ImageChooseStylesheet]  

#### Add a style rule to a specific location   

To add a style rule to a specific location in the **Styles** tab:  

1.  Hover over the style rule that is directly above where you want to add your new style rule.  
1.  [Reveal the **More Actions** toolbar](#reveal-the-more-actions-toolbar).  
1.  Click **Insert Style Rule Below** ![Insert Style Rule Below][ImageNewStyleRuleIcon].  

> ##### Figure 18  
> **Insert Style Rule Below**  
> ![Insert Style Rule Below][ImageInsertStyleRuleBelow]  

### Reveal the More Actions toolbar   

The **More Actions** toolbar lets you:  

*   Insert a style rule directly below the one you are focused on.  
*   Add a `background-color`, `color`, `box-shadow`, or `text-shadow` declaration to the style rule you are focused on.  

To reveal the **More Actions** toolbar:  

1.  In the **Styles** tab, hover over a style rule.  **More Actions** `...` is revealed in the bottom-right of the style rule section.  
    
    > [!NOTE]
    > In [Figure 19](#figure-19), hover over the `.header-holder.has-default-focus` style rule and **More Actions** is revealed in the bottom-right of the style rule section.  
    
    > ##### Figure 19  
    > Revealing **More Actions**  
    > ![Revealing More Actions][ImageRevealMore]  
    
1.  Hover over **More Actions** `...` to reveal the actions mentioned above.  
    
    > [!NOTE]
    > The **Insert Style Rule Below** action is revealed after hovering over **More Actions**.  
    
    > ##### Figure 20  
    > The **More Actions** toolbar  
    > ![The More Actions toolbar][ImageInsertStyleRuleBelow2]  
    
### Toggle a declaration   

To toggle a single declaration on or off:  

1.  [Select an element](#select-an-element).  
1.  In the **Styles** pane, hover over the rule that defines the declaration.  Checkboxes appear next to each declaration.  
1.  Check or uncheck the checkbox next to the declaration.  When you uncheck a declaration, DevTools crosses it out to indicate that it is no longer active.  

> [!NOTE]
> In [Figure 21](#figure-21), the `margin-top` property for the currently selected element has been toggled off.  

> ##### Figure 21  
> Toggling a declaration  
> ![Toggling a declaration][ImageToggleDeclaration]  

### Add a background-color declaration   

To add a `background-color` declaration to an element:  

1.  Hover over the style rule that you want to add the `background-color` declaration to.  
1.  [Reveal the **More Actions** toolbar](#reveal-the-more-actions-toolbar).  
1.  Click **Add Background Color** ![Add Background Color][ImageAddBackgroundColorIcon].  

> ##### Figure 22  
> **Add Background Color**  
> ![Add Background Color][ImageAddBackgroundColor]  

### Add a color declaration   

To add a `color` declaration to an element:  

1.  Hover over the style rule that you want to add the `color` declaration to.  
1.  [Reveal the **More Actions** toolbar](#reveal-the-more-actions-toolbar).  
1.  Click **Add Color** ![Add Color][ImageAddColorIcon].  

> ##### Figure 23  
> **Add Color**  
> ![Add Color][ImageAddColor]  

### Add a box-shadow declaration   

To add a `box-shadow` declaration to an element:  

1.  Hover over the style rule that you want to add the `box-shadow` declaration to.  
1.  [Reveal the **More Actions** toolbar](#reveal-the-more-actions-toolbar).  
1.  Click **Add Box Shadow** ![Add Box Shadow][ImageAddBoxShadowIcon].  

> ##### Figure 24  
> **Add Box Shadow**  
> ![Add Box Shadow][ImageAddBoxShadow]  

### Add a text-shadow declaration   

To add a `text-shadow` declaration to an element:  

1.  Hover over the style rule that you want to add the `text-shadow` declaration to.  
1.  [Reveal the **More Actions** toolbar](#reveal-the-more-actions-toolbar).  
1.  Click **Add Text Shadow** ![Add Text Shadow][ImageAddTextShadowIcon].  

> ##### Figure 25  
> **Add Text Shadow**  
> ![Add Text Shadow][ImageAddTextShadow]  

### Change colors with the Color Picker   

The **Color Picker** provides a GUI for changing `color` and `background-color` declarations.  

To open the **Color Picker**:  

1.  [Select an element](#select-an-element).  
1.  In the **Styles** tab, find the `color`, `background-color`, or similar declaration that you want to change.  To the left of the `color`, `background-color`, or similar value, there is a small square which is a preview of the color.  
    
    > [!NOTE]
    > In [Figure 26](#figure-26), the small square to the left of `rgba(0, 0, 0, 0.7)` is a preview of that color.  
    
    > ##### Figure 26  
    > Color preview  
    > ![Color preview][ImageColorPreview]  
    
1.  Click the preview to open the **Color Picker**.  
    
    > ##### Figure 27  
    > The **Color Picker**  
    > ![The Color Picker][ImageColorPicker]  
    
Here is a description of each of the UI elements of the **Color Picker**:  

> ##### Figure 28  
> The Color Picker, annotated  
> ![The Color Picker, annotated][ImageColorPickerAnnotated]  

1.  **Shades**.  
1.  **Eyedropper**.  See [Sample a color off the page with the Eyedropper](#sample-a-color-off-the-page-with-the-eyedropper).  
1.  **Copy To Clipboard**.  Copy the **Display Value** to your clipboard.  
1.  **Display Value**.  The RGBA, HSLA, or Hex representation of the color.  
1.  **Color Palette**.  Click one of these squares to change the color to that square.  
1.  **Hue**.  
1.  **Opacity**.  
1.  **Display Value Switcher**.  Toggle between the RGBA, HSLA, and Hex representations of the current color.  
1.  **Color Palette Switcher**.  Toggle between the [Material Design palette][MaterialDesignColorSystem], a custom palette, or a page colors palette.  DevTools generates the page color palette based on the colors that it finds in your stylesheets.  

#### Sample a color off the page with the Eyedropper   

When you open the **Color Picker**, the **Eyedropper** ![Eyedropper][ImageEyedropperIcon] is on by default.  To change the selected color to some other color on the page:  

1.  Hover over the target color in the viewport.  
1.  Click to confirm.  
    
    > [!NOTE]
    > In [Figure 29](#figure-29), the **Color Picker** shows a current color value of `rgba(0,0,0,0.7)`, which is close to black.  This color should change to the black that is currently highlighted in the viewport once the black was clicked.  
    
    > ##### Figure 29  
    > Using the Eyedropper  
    > ![Using the Eyedropper][ImageUsingEyedropper]  
    
 



<!-- image links -->  

[ImageAddBackgroundColorIcon]: images/add-background-color-icon.msft.png  
[ImageAddBoxShadowIcon]: images/add-box-shadow-icon.msft.png  
[ImageAddColorIcon]: images/add-color-icon.msft.png  
[ImageAddTextShadowIcon]: images/add-text-shadow-icon.msft.png  
[ImageEyedropperIcon]: images/eyedropper-icon.msft.png  
[ImageNewStyleRuleIcon]: images/new-style-rule-icon.msft.png  
[ImageReloadIcon]: images/reload-icon.msft.png  
[ImageSelectAnElementIcon]: images/select-an-element-icon.msft.png  

[ImageSelectedElement]: images/elements-styles-h1.msft.png "Figure 1: An example of a selected element"  
[ImageViewRuleStylesheet]: images/elements-styles-h1-highlight.msft.png "Figure 2: Viewing the stylesheet where a rule is defined"  
[ImageComputedTab]: images/elements-computed-h1.msft.png "Figure 3: The Computed tab"  
[ImageBoxModel]: images/elements-styles-h1-2.msft.png "Figure 4: The Box Model diagram"  
[ImageStylesFilter]: images/elements-styles-filter-color.msft.png "Figure 5: Filtering the Styles tab"  
[ImageComputerFilter]: images/elements-computed-filter-100.msft.png "Figure 6: Filtering the Computed tab"  
[ImagePseudoClass]: images/elements-styles-hov-hover.msft.png "Figure 7: Toggling the :hover pseudo-class"  
[ImageCommandMenu]: images/console-command-menu-coverage.msft.png "Figure 8: Opening the Coverage tab from the Command Menu"  
[ImageCoverageEmpty]: images/console-qs-coverage-empty.msft.png "Figure 9: The Coverage tab"  
[ImageCoverageOverview]: images/console-qs-coverage-run.msft.png "Figure 10: An overview of how much CSS (and JavaScript) is used and unused"  
[ImageCoverageDetail]: images/sources-css-coverage.msft.png "Figure 11: A line-by-line breakdown of used and unused CSS"  
[ImageInlineDeclarations]: images/elements-styles-margin-top-background-color.msft.png "Figure 12: Adding inline declarations"  
[ImageAddDeclarationExistingRule]: images/elements-styles-border-bottom-style.msft.png "Figure 13: Adding a declaration to a style rule"  
[ImageAddDeclarationExistingRule2]: images/elements-styles-border-bottom-style-dropdown.msft.png "Figure 14: Changing the value of a declaration"  
[ImageElementClasses]: images/elements-styles-filter-classes.msft.png "Figure 15: The Element Classes pane"  
[ImageStyleRule]: images/elements-styles-style-new.msft.png "Figure 16: Adding a new style rule"  
[ImageChooseStylesheet]: images/elements-styles-style-new-select-exisiting.msft.png "Figure 17: Choosing a stylesheet"  
[ImageInsertStyleRuleBelow]: images/elements-styles-insert-style-rule-below.msft.png "Figure 18: Insert Style Rule Below"  
[ImageRevealMore]: images/elements-styles-new-rule-styles.msft.png "Figure 19: Revealing More Actions"  
[ImageInsertStyleRuleBelow2]: images/elements-styles-rule-more-options-insert-style-rule-below.msft.png "Figure 20: The More Actions toolbar"  
[ImageToggleDeclaration]: images/elements-styles-rule-deactivated.msft.png "Figure 21: Toggling a declaration"  
[ImageAddBackgroundColor]: images/elements-styles-rule-add-background-color.msft.png "Figure 22: Add Background Color"  
[ImageAddColor]: images/elements-styles-rule-add-color.msft.png "Figure 23: Add Color"  
[ImageAddBoxShadow]: images/elements-styles-rule-add-box-shadow.msft.png "Figure 24: Add Box Shadow"  
[ImageAddTextShadow]: images/elements-styles-rule-add-text-shadow.msft.png "Figure 25: Add Text Shadow"  
[ImageColorPreview]: images/elements-styles-rule-overlay-color-box.msft.png "Figure 26: Color preview"  
[ImageColorPicker]: images/elements-styles-rule-color-picker.msft.png "Figure 27: The Color Picker"  
[ImageColorPickerAnnotated]: images/elements-styles-rule-color-picker-annotated.msft.png "Figure 28: The Color Picker, annotated"  
[ImageUsingEyedropper]: images/color-picker-eye-dropper.msft.png "Figure 29: Using the Eyedropper"  

<!-- links -->  

[DevToolsCommandMenu]: ../command-menu/index.md "Run Commands With The Microsoft Edge DevTools Command Menu"  
[DevToolsCSSGetStarted]: index.md "Get Started With Viewing And Changing CSS"  
[DevToolsCSSGetStartedAddPseudoState]: index.md#add-a-pseudostate-to-a-class "Add a pseudostate to a class - Get Started With Viewing And Changing CSS"  
[DevToolsCSSGetStartedTutorial]: index.md#view-the-css-for-an-element "View the CSS for an Element - Get Started With Viewing And Changing CSS"  
[DevToolsCssPrintPreview]: print-preview.md "Force Microsoft Edge DevTools Into Print Preview Mode (CSS Print Media Type)"  
<!--[DevToolsJavascriptReferenceFormat]: ../javascript/reference.md#make-a-minified-file-readable "Make a minified file readable - JavaScript Debugging Reference"  -->  

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
