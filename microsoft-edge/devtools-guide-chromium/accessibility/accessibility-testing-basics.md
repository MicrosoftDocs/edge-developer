---
description: Testing for accessibility problems using DevTools
title: Accessibility testing using DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/30/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Accessibility testing using DevTools

:::image type="complex" source="../media/a11y-testing-basics-demopage.msft.png" alt-text="The demo page, which has some accessibility issues" lightbox="../media/a11y-testing-basics-demopage.msft.png":::
    The demo page, which has some accessibility issues
:::image-end:::

This article covers some of the features you can use in DevTools to test for accessibility problems.  As an example, we use a demo page that has some accessibility problems, and we go through using different features of DevTools to detect and fix accessibility problems with the demo page.


## Accessibility checklist and related DevTools features

| Accessibility check | Feature of DevTools |
|---|---|
| Check that input fields have labels | **Issues** tool: **Accessibility** section |
| Check that images have alt text | **Issues** tool: **Accessibility** section |
| Check that text colors have enough contrast | **Issues** tool: **Accessibility** section |
| Wavy underline in the DOM tree indicates automatically detected issues reported by the Issues tool | **Issues** tool: **DOM tree**: Wavy lines |
| Check that the webpage layout is usable when narrow | **Device Emulation** tool |
| Check individual elements for text contrast, screen reader text, and keyboard support | **Inspect** tool: **Accessibility** section of overlay |
| Analyzing the lack of indication of keyboard focus in the sidebar menu | **Inspect** tool: CSS rules: pseudo-classes for states |
| Analyzing the lack of keyboard support in the donation form | **Inspect** tool: **Accessibility** section: **keyboard-focusable** row; & **Elements** tool: **Event Listeners** tab |
| Checking the Accessibility Tree for keyboard and screen reader support | **Accessibility** tool: **Accessibility Tree** |
| Analyzing the order of the keyboard access through sections of the page | **Accessibility** tool: **Source order viewer** |
| Check text color contrast in the default state by using the Inspect tool's information overlay | **Inspect** tool: **Accessibility** section: **Contrast** row |
| Check accessibility during all states of elements, such as contrast during hover | **Elements** tool: **Styles** pane: **Toggle Element State** |
| Check for contrast issues with dark theme and light theme | **Rendering** tool: **Emulate CSS media feature prefers-color-scheme** |
| Check that the webpage is usable by people with color blindness | **Rendering** tool: **Emulate vision deficiencies** dropdown list: **Protanopia** |
| Check that the webpage is usable with blurred vision | **Rendering** tool: **Emulate vision deficiencies** dropdown list: **Blurred vision** |
| Check whether the page is usable with UI animation turned off (reduced motion) | **Rendering** tool: **Emulate CSS media feature prefers-reduced-motion**: **prefers-reduced-motion: reduced** |


<!-- 1. ISSUES TOOL -->
## Overview of the Issues tool for automated testing of accessibility issues

The **Issues** tool includes an **Accessibility** section that automatically reports issues such as low text contrast.  The **Issues** tool is within the Drawer at the bottom of DevTools.  To access the **Issues** tool, use the **Issues counter** in the upper right of DevTools, or a wavy underlining of elements in the DOM tree in the **Elements** tool.

1.  Open the [accessibility-testing demo webpage][DevToolsA11yErrorsDemopage] in a new tab of the browser, and then select `F12` to open DevTools.  In the upper right, the **Issues counter** \(![Issues counter](../media/issues-counter-icon.msft.png)\) appears, as a speech-bubble icon along with the number of automatically detected issues.  You might see a different number, and the number you see might update as you use DevTools.

    :::image type="complex" source="../media/a11y-testing-issues-tracker.msft.png" alt-text="The Issues counter in DevTools, indicating how many problems there are in the current document" lightbox="../media/a11y-testing-issues-tracker.msft.png":::
        The **Issues counter** in DevTools, indicating how many problems there are in the current document
    :::image-end:::

1.  Select the **Issues counter**.  The **Issues** tool opens, in the **Drawer** at the bottom of DevTools.

    :::image type="complex" source="../media/a11y-testing-accessibility-issues.msft.png" alt-text="Accessibility warnings displayed in the Issues tool" lightbox="../media/a11y-testing-accessibility-issues.msft.png":::
        Accessibility warnings displayed in the Issues tool
    :::image-end:::

1.  In the **Issues** pane, expand the **Accessibility** section.

For more information, see [Find and fix problems with the Microsoft Edge DevTools Issues tool][DevToolsIssuesTool].


<!-- Issues tool: Accessibility section -->
## Check that input fields have labels

To check that input fields have labels connected to them, use the **Issues** tool, which automatically checks the entire webpage and reports this issue in the **Accessibility** section.

1.  Open the [accessibility-testing demo webpage][DevToolsA11yErrorsDemopage] in a new tab of the browser, and then select `F12` to open DevTools.

1.  In the upper right, select the **Issues counter** \(![Issues counter](../media/issues-counter-icon.msft.png)\).  The **Issues** tool opens, in the **Drawer** at the bottom of DevTools.

1.  In the **Issues** pane, expand the **Accessibility** section.

1.  Expand the **Warning** `Form elements must have labels: Element has no title attribute Element has no placeholder attribute`, and then select the **Open in Elements** link.  In the DOM tree, DevTools highlights the element, and displays the HTML source and the applied CSS rules for the element:

    :::image type="complex" source="../media/a11y-testing-inspect-problematic-element.msft.png" alt-text="Elements tool showing the problematic HTML after activating the link in the Issues tool" lightbox="../media/a11y-testing-inspect-problematic-element.msft.png":::
        Elements tool showing the problematic HTML after activating the link in the **Issues** tool
    :::image-end:::

    The HTML has a `label` element that doesn't work:

    ```html
    <label>Search</label>
    <input type="search">
    <input type="submit" value="go">
    ```

    This `label` element is used incorrectly, because there is no connection between the `label` element and a particular `input` element.  To connect the `label` element to a specific `input` element, you would need to either:
    *   Nest the `input` element within the `label` element.
    *   In the `label` element, add a `for` attribute that matches an `id` attribute of the `input` element.

1.  You can also test this lack of a connection as follows: in the **Elements** tool, hover over or select the `<label>Search</label>` element.  In the webpage, focus only appears on the **Search** label, not on the input textbox.  A validly tagged HTML `label` element would put focus on the `search` input textbox as well as on the **Search** label.

1.  In the **Issues tool**, select the explanatory "Further reading" link.  To open the link in a new tab, select `Ctrl`+`click` on Windows/Linux or `Command`+`click` on macOS.

    :::image type="complex" source="../media/a11y-testing-more-information-links.msft.png" alt-text="Link in the Issues pane pointing to more in-depth information about the issue" lightbox="../media/a11y-testing-more-information-links.msft.png":::
        Link in the **Issues** pane pointing to more in-depth information about the issue
    :::image-end:::


<!-- Issues tool: Accessibility section -->
## Check that images have alt text

Basic accessibility testing requires making sure alternative text (also called _alt text_) is provided for images.

To automatically check whether alt text is provided for images, use the **Issues** tool, which has an **Accessibility** section.  The **Issues** tool is located in the **Drawer** at the bottom of DevTools.

1.  If it is not open already, open the [accessibility-testing demo webpage][DevToolsA11yErrorsDemopage] in a new tab of the browser, and then select `F12` to open DevTools.

1.  To open the **Issues** tool, select the **Issues** counter in the upper right of DevTools.

1.  In the **Issues** pane, expand the warning `Images must have alternate text: Element has no title attribute`.  There are four instances of images that lack alt text.

    :::image type="complex" source="../media/a11y-testing-images-without-alt.msft.png" alt-text="The Issues tool reporting images that are missing alternative text" lightbox="../media/a11y-testing-images-without-alt.msft.png":::
        The Issues tool reporting images that are missing alternative text
    :::image-end:::


<!-- Issues tool: Accessibility section -->
## Check that text colors have enough contrast

To make sure text colors have enough contrast, use the **Issues** tool, which has an **Accessibility** section.

To automatically check whether text colors have enough contrast, use the **Issues** tool, which has an **Accessibility** section.  The **Issues** tool is located in the **Drawer** at the bottom of DevTools.

1.  If it is not open already, open the [accessibility-testing demo webpage][DevToolsA11yErrorsDemopage] in a new tab of the browser, and then select `F12` to open DevTools.

1.  Select the **Issues** counter in the upper right of DevTools.  The **Issues** tool opens.

    You might see warnings that two elements on the demo webpage don't have enough contrast:
    
    :::image type="complex" source="../media/a11y-testing-contrast-issues.msft.png" alt-text="Contrast problems reported in the Issues tool" lightbox="../media/a11y-testing-contrast-issues.msft.png":::
        Contrast problems reported in the Issues tool
    :::image-end:::
    
1.  If the **Issues** pane has a warning that elements have insufficient color contrast, expand the warning, and then expand the **Affected resources** section of the warning.  A list of elements appears, showing which elements don't have enough contrast.

1.  Select the `li.high` element.  In the rendered webpage, the **Dogs** link in the **Donate** section is highlighted, displaying a small information overlay.  This is the same overlay that appears when you hover over an element in the DOM tree in the **Elements** tool.

    :::image type="complex" source="../media/a11y-testing-element-with-contrast-issues.msft.png" alt-text="Element in the webpage highlighted after selecting a link in the Affected Resources section" lightbox="../media/a11y-testing-element-with-contrast-issues.msft.png":::
        Element in the webpage highlighted after selecting a link in the **Affected Resources** section
    :::image-end:::


<!-- Issues tool: DOM tree: Wavy lines -->
## Wavy underline in the DOM tree indicates automatically detected issues reported by the Issues tool

The DOM tree in the **Elements** tool flags issues directly in the HTML, by adding a wavy underline.  These are issues that are reported by the **Issues** tool.

1.  When you `Shift+Click` any element that has a wavy underline, the **Issues tool** appears.  In the Elements tool, in the DOM tree, select the element `<input type="search">`, which has a wavy line under `input`.  Then select `Shift` + `Click`.

    :::image type="complex" source="../media/a11y-testing-wavy-underlines.msft.png" alt-text="An element that has a wavy underline in the DOM view has an issue; Shift+Click the element to view the issue" lightbox="../media/a11y-testing-wavy-underlines.msft.png":::
        An element that has a wavy underline in the DOM view has an issue; Shift+Click the element to view the issue
    :::image-end:::

The issues shown above are some relatively prominent and straightforward accessibility problems that can be avoided.  Using the **Issues tool** and its guided explanations to fix the issues puts you on the way towards an accessible product.


<!-- 2. DEVICE EMULATION TOOL -->
## Check that the webpage layout is usable when narrow

Make sure the webpage layout is responsive when the browser is narrow or the mobile device is in portrait orientation, so that form control and other page elements are usable and don't overlap.

To check that the webpage layout is usable when narrow, resize the browser window, and also use the Device Emulation tool, which is part of DevTools.

To check page layout and usability by making the browser window narrow:

1.  Open the [accessibility-testing demo webpage][DevToolsA11yErrorsDemopage] in a new tab of the browser.

1.  Resize the window to make it narrow.  If DevTools is open, resize the webpage portion of the window to make it narrow.  With some iterations of the demo page, or some browser versions, the navigation bar overlaps the Search form, as shown in the upper left of the following figure.

    :::image type="complex" source="../media/a11y-testing-element-with-contrast-issues.msft.png" alt-text="Element in the webpage highlighted after selecting a link in the Affected Resources section" lightbox="../media/a11y-testing-element-with-contrast-issues.msft.png":::
        Element in the webpage highlighted after selecting a link in the **Affected Resources** section
    :::image-end:::

To check page layout and usability by using the **Device Emulation** tool, see [Emulate mobile devices in Microsoft Edge DevTools](../device-mode/index.md).


<!-- 3. INSPECT TOOL -->
## Overview of the Inspect tool

Getting an automated report from a tool like the [Issues tool][DevToolsIssuesTool], [Accessibility Insights][AccessibilityInsights], or [Lighthouse][Lighthouse] is only the beginning of your accessibility testing journey.

Accessibility is about human interaction - people with different needs using various technical environments using your products.  This can't be automated, but needs verification by a human navigating the product.  Ideally, you'd have access to testers with different needs, and testers using various environments, but you can already do a lot yourself by using the keyboard to navigate, and by inspecting different parts of the page.

Automated testing (report-based testing) doesn't catch all the issues in the accessibility-testing demo webpage.  Some issues only show up when you interact with the webpage.  Other issues appear when you change the way the page is displayed, and other issues are built in such a way that the automated scan of the document couldn't even detect that there is a problem.

In the accessibility-testing demo page, automated testing by the **Issues** tool doesn't catch the lack of keyboard support in the donation form.  When you use a mouse, you can click the different options to donate money.  But when you try to use the keyboard to try to use the donation form, focus doesn't move to the buttons of the donation form.

:::image type="complex" source="../media/a11y-testing-basics-donation-form-issue.msft.png" alt-text="Donation form in the demo page" lightbox="../media/a11y-testing-basics-donation-form-issue.msft.png":::
    Donation form in the demo page
:::image-end:::

To find out what is going wrong, use the **Inspect** tool, which provides an information overlay on the rendered webpage as you hover over an individual element of the webpage.  The information overlay provided by the Inspect tool includes an **Accessibility** section with indicators for text contrast, screen reader text, and keyboard support.


<!-- Inspect tool: Accessibility section of overlay -->
## Check individual elements for text contrast, screen reader text, and keyboard support

1.  If it isn't open, open the [accessibility-testing demo webpage][DevToolsA11yErrorsDemopage] in a new tab of the browser, and then select `F12` to open DevTools.

1.  Select the **Inspect** \(![Inspect](../media/inspect-icon.msft.png)\) tool icon in the top-left corner of DevTools so that the icon is highlighted (blue).

    :::image type="complex" source="../media/a11y-testing-basics-inspector.msft.png" alt-text="To turn on the Inspect tool, select the Inspect icon" lightbox="../media/a11y-testing-basics-inspector.msft.png":::
        To turn on the **Inspect** tool, select the **Inspect** icon
    :::image-end:::

1.  Hover over any element in the rendered demo webpage.  The **Inspect** tool shows an information overlay below the element within the rendered webpage.

    :::image type="complex" source="../media/a11y-testing-basics-inspector-overlay.msft.png" alt-text="The Inspect tool, showing the element's area as a multicolor overlay, and showing the element's details as a large information overlay" lightbox="../media/a11y-testing-basics-inspector-overlay.msft.png":::
        The **Inspect** tool, showing the element's area as a multicolor overlay, and showing the element's details as a large information overlay
    :::image-end:::

The bottom part of the **Inspect** overlay in the webpage has an **Accessibility** section, containing the following:

*   **Contrast** defines whether an element can be understood by people with low vision.  The [contrast ratio][W3CContrastRatio] as defined by the [WCAG Guidelines][WCAG] indicates whether there is enough contrast (a green check mark icon) or not enough (an orange exclamation-point icon).

*   **Name** and **Role** is what assistive technology like screen readers will report about the element.  
    *   The `Name` is the text content of an `a` element.  For the element `<a href="/">About Us</a>`, the **Name** shown in the Inspect tool is "About Us".
    *   The `Role` of the element.  This is usually the element name, such as `article`, `img` , `link`, or `heading`.  The `div` element is represented as `generic`.

*   **Keyboard-focusable** indicates whether users can reach the element regardless of input device.
    *   A green check mark icon indicates that the element is keyboard-focusable.  
    *   A gray circle with diagonal line indicates that the element isn't keyboard-focusable.

### Other information in the Inspect overlay

The top part of the **Inspect** overlay in the webpage (above the **Accessibility** section of the overlay) lists applicable details for the element, such as the following:

*   Positioning - if the element is positioned using a flexbox or grid, an appropriate icon \(![Grid layout icon](../media/grid-icon.msft.png)\) is shown.
*   The name of the element, such as `h1`, `h2`, or `div`.
*   The dimensions of the element, in pixels.
*   The color as a color swatch (a small, colored square) and as formatted (such as `#336699`).
*   Font information (size and font families).
*   Margin and padding, in pixels.

### Using the Inspect tool to hover over the webpage to highlight the DOM and CSS

1.  Select the **Inspect** tool icon, so that it turns blue.  

1.  Select the **Elements** tool, to make it visible.

1.  With the **Inspect** tool active, hover over different parts of the rendered webpage.  The DOM tree automatically expands to show information about the element you hover over.  Hovering doesn't cause the **Styles** pane to update.

1.  Now select (click) any element within the rendered webpage.  The **Elements** tool automatically opens, showing the HTML of the element in the DOM tree, and also showing the applied CSS for the element in the **Styles** pane.  Selecting an element in the rendered webpage, as you did here, turns off the **Inspect** tool.

:::image type="complex" source="../media/a11y-testing-basics-inspector-selected-element.msft.png" alt-text="Details about the selected element are displayed in the Elements tool" lightbox="../media/a11y-testing-basics-inspector-selected-element.msft.png":::
    Details about the selected element are displayed in the **Elements** tool
:::image-end:::

### Using the Inspect tool for color highlighting of sub-areas by hovering over the webpage

In addition to the information overlay when you hover over the webpage, the **Inspect** tool also provides the same helpful region-coloring behavior as hovering in the DOM tree in the **Elements** tool, but more directly.

1.  Select the **Inspect** tool so that its icon turns blue.

1.  Hover over different parts of the rendered demo webpage.  Each element in the webpage now has a multicolor overlay over its entire area, to show any sub-areas that the element contains.

1.  For example, hover over the left margin of the **Cats** section.  DevTools highlights several rectangular portions of the **Cats** section with different colors, making the layout nesting visible.


<!-- keyboard: Tab, Enter -->
## Check for keyboard support by using the Tab and Enter keys

The above section shows how to check for keyboard support for an individual element by using the **Inspect** tool.  The Inspect tool's information overlay includes an **Accessibility** section that includes a **Keyboard-focusable** row.  Also test the usability of the webpage by using the keyboard, particularly the `Tab`, `Shift`+`Tab`, and `Enter` keys.

Not all users have a pointer or touch device, and not all users can see the web projects we create.  This is why it is important that the user interface works at least with a keyboard.  Make sure you can press the `Tab` key to move the focus to each form control on a webpage, and make sure you can press the `Enter` key to activate a form button.

Try using the demo page by using a keyboard rather than a mouse, as follows.

1.  If the demo page isn't open, open the [accessibility-testing demo webpage][DevToolsA11yErrorsDemopage] in a new tab of the browser.

1.  Use a keyboard to navigate the demo document, using the `Tab` and `Shift`+`Tab` keys to jump from element to element.  On the demo webpage, pressing `Tab` first moves focus to the search form in the `header` section.

1.  Select the `Tab` key to put focus on a button, and then press `Enter` to click the focused button.

1.  In the demo page, press `Tab` to put focus on the **Search** field, and then press the `Enter` key to submit the search, producing the same result as clicking the **go** button.  Pressing the `Enter` key to send the **Search** form works correctly, despite the `label` element issue that we discovered earlier by using the **Issues tool**.

1.  Select `Tab`.  The next element you put focus on is the first `More` link in the `content` section of the webpage, as indicated by an outline.
    
    :::image type="complex" source="../media/a11y-testing-keyboard-focus-on-element.msft.png" alt-text="Navigating the document using the keyboard and the `Tab` key. Focus is shown on a link in the document." lightbox="../media/a11y-testing-keyboard-focus-on-element.msft.png":::
        Navigating the document using the keyboard and the tab key. Focus is shown on a link in the document.
    :::image-end:::
    
1.  Go past the last `more` link.  After you go past the last `More` link, the page scrolls up again and you seem to be on some element, but you don't know which element.

1.  Notice the URL in the bottom left.  If you look to the bottom left of the screen (or if you use a screen reader), you realize that you are on the sidebar navigation menu with blue buttons, because the browser shows the URL which the `a` link of the blue **Cats** button points to (`#cats`).

    :::image type="complex" source="../media/a11y-testing-lack-of-focus-style.msft.png" alt-text="A lack of focus style makes it impossible to know where you currently are in the document. The only hint is the display of the link target in the bottom left corner of the screen" lightbox="../media/a11y-testing-lack-of-focus-style.msft.png":::
        A lack of focus style makes it impossible to know where you currently are in the document. The only hint is the display of the link target in the bottom left corner of the screen
    :::image-end:::

1.  Press the `Tab` key again, to get to the entry field in the donation form.  However, you can't reach the buttons above the textbox by pressing the `Tab` key; you can't use the keyboard to put focus on the `50`, `100` or `200` buttons and then to click them.  Also, pressing the `Enter` key doesn't submit the donation form.

    :::image type="complex" source="../media/a11y-testing-form-field-with-outline.msft.png" alt-text="The only keyboard-accessible element in the donation form is the text entry field" lightbox="../media/a11y-testing-form-field-with-outline.msft.png":::
        The only keyboard-accessible element in the donation form is the text entry field
    :::image-end:::
    
1.  Pressing the `Tab` key again puts focus on the top navigation menu of the page, with menu buttons for **Home**, **Adopt a Pet**, **Donate**, **Jobs**, and **About Us**.  Press the `Tab` or `Shift`+`Tab` key to put focus on a menu button, as indicated by a focus outline.  Then press the `Enter` key to access that section of the webpage.

    :::image type="complex" source="../media/a11y-testing-menu-with-outline.msft.png" alt-text="The main menu has a highlight and a focus outline, and thus is keyboard-accessible" lightbox="../media/a11y-testing-menu-with-outline.msft.png":::
        The main menu has a highlight and a focus outline, and thus is keyboard-accessible
    :::image-end:::
    
We found some issues here to fix:

*  When using a keyboard, the sidebar navigation menu with blue buttons doesn't visually indicate which button has focus.
*  In the donation form, the amount buttons and the **Donate** button don't work with a keyboard.
*  The order of the keyboard access through sections of the page seems wrong.  You navigate through all the `More` links in the document before you reach the sidebar navigation menu with blue buttons.  This makes the sidebar navigation menu pointless.  By the time the `Tab` key puts focus on the sidebar navigation menu, you already traversed all the content that the sidebar navigation menu was supposed to provide easy access to.

Let's analyze these problems by using DevTools, in the following sections.


<!-- Inspect tool: CSS rules: pseudo-classes for states -->
## Analyzing the lack of indication of keyboard focus in the sidebar menu

The sidebar navigation menu with blue buttons doesn't visually indicate which button has focus, when using a keyboard.  To find out why the sidebar menu is confusing to keyboard users, we'll inspect CSS pseudo-class rules for the `hover` and `focus` states, along with the CSS property for button outlines.  To navigate to the CSS, we'll use the **Inspect** tool to highlight a blue button on the sidebar navigation menu, and then view the DOM tree and CSS for the `a` element that defines that button.

1.  If the demo page isn't open, open the [accessibility-testing demo webpage][DevToolsA11yErrorsDemopage] in a new tab of the browser, and then select `F12` to open DevTools.

1.  Select the **Inspect** \(![Inspect icon](../media/inspect-icon.msft.png)\) icon in the top-left corner of DevTools so that the icon is highlighted (blue).

1.  Hover over the **Cats** button, which is the first, blue button of the sidebar menu.  The Inspect overlay appears, showing that the `a` element is keyboard-focusable.  But the overlay doesn't indicate that there's no visual indication that the button has focus.
 
1.  Select the **Cats** button.  The **Inspect** tool turns off, and the **Elements** tool opens, highlighting the `a` node in the DOM tree.

1.  Select the **Styles** tab.  The CSS rule `#sidebar nav li a` appears, along with a link to a line number in `styles.css`.

    :::image type="complex" source="../media/a11y-testing-menu-link.msft.png" alt-text="Inspecting the source code and the applied styles of a link in the menu" lightbox="../media/a11y-testing-menu-link.msft.png":::
        Inspecting the source code and the applied styles of a link in the menu
    :::image-end:::
    
1.  Select the link to the CSS file.  The CSS file opens within the **Sources** tool.

    :::image type="complex" source="../media/a11y-testing-menu-link-styles.msft.png" alt-text="The styles applied to the link in the Sources tool" lightbox="../media/a11y-testing-menu-link-styles.msft.png":::
        The styles applied to the link in the Sources tool
    :::image-end:::
    
    The styles of the page have a CSS pseudo-class rule for the `hover` state that indicates which menu item you are on when you use a mouse: `#sidebar nav li a:hover`
    
    However, there is no CSS pseudo-class rule for the `focus` state to visually indicate which menu item you are on when you use a keyboard, such as: `#sidebar nav li a:focus`
    
    Even worse, the links have a CSS property setting of `outline: none`.  This is a common practice, to remove the outline which browsers automatically add to elements when you focus them with a keyboard.  As you can see here, this can cause confusion about which control on the page has focus.


<!-- Inspect tool: Accessibility section: keyboard-focusable row; & Elements tool: Event Listeners tab -->
## Analyzing the lack of keyboard support in the donation form

In the donation form, the amount buttons and the **Donate** button don't work with a keyboard.  Debugging the donation form in the demo page requires understanding why the lack of a `focus` state and the presence of the `outline: none` CSS property aren't flagged as a problem by automatic testing, such as the **Issues** tool or **Inspect** tool.

1.  If the demo page isn't open, open the [accessibility-testing demo webpage][DevToolsA11yErrorsDemopage] in a new tab of the browser, and then select `F12` to open DevTools.
    
1.  Select the **Inspect** \(![Inspect icon](../media/inspect-icon.msft.png)\) icon in the top-left corner of DevTools so that the icon is highlighted (blue).

1.  Hover over the `50`, `100`, and `200` donation buttons.  The Inspect tool appears on the webpage, as an overlay.  The **keyboard-focusable** row of the Inspect overlay shows that none of the donation amount buttons are keyboard-accessible, as indicated by a gray circle with diagonal line.  The buttons have no name, and they have a role of `generic` (because they are `div` elements), which means that the buttons are effectively inaccessible to assistive technology.

    :::image type="complex" source="../media/a11y-testing-donation-button-info.msft.png" alt-text="Inspecting the buttons of the form shows that they aren't keyboard-accessible" lightbox="../media/a11y-testing-donation-button-info.msft.png":::
        Inspecting the buttons of the form shows that they aren't keyboard-accessible
    :::image-end:::
    
1.  When the **Inspect** tool is active, on the webpage, select the **Other** textbox, above the **Donate** button.  The **Elements** tool opens, showing the DOM tree for the webpage.  The element `<input id="freedonation" class="smallinput">` is selected.

    ```html
    <div class="donationrow">
        <div class="donationbutton">50</div>
        <div class="donationbutton">100</div>
        <div class="donationbutton">200</div>
    </div>
    <div class="donationrow">
        <label for="freedonation">Other</label>
        <input id="freedonation" class="smallinput">
    </div>
    <div class="donationrow">
        <div class="submitbutton">Donate</div>
    </div>
    ```

    The use of the `label` and `input` elements for the **Other** textbox is valid, so that the **Other** label is correctly linked with the input textbox.  The `input` textbox is also keyboard-accessible.  The rest of the form's markup are `div` elements, which are easy to style, but have no semantic meaning.

    The form's functionality is created with JavaScript, and you can test this by checking the **Event Listeners** tab, as follows.

1.  Select the **Event Listeners** tab to the right of the **Styles** tab, and then expand the `click` event listener.

1.  Select the `buttons.js:18` link.  The `Sources` tool opens, showing the applied JavaScript:

    :::image type="complex" source="../media/a11y-testing-event-handlers-on-button.msft.png" alt-text="The Event listeners tool showing you where the JavaScript is that makes the form work" lightbox="../media/a11y-testing-event-handlers-on-button.msft.png":::
        The Event listeners tool showing you where the JavaScript is that makes the form work
    :::image-end:::

    :::image type="complex" source="../media/a11y-testing-form-handling-javascript.msft.png" alt-text="The JavaScript responsible for the form functionality shown in the Sources tool" lightbox="../media/a11y-testing-form-handling-javascript.msft.png":::
        The JavaScript responsible for the form functionality shown in the Sources tool
    :::image-end:::

Using a `click` event to read the buttons is good practice, because a `click` event fires both on mouse pointer and keyboard interaction.  However, because a `div` element isn't keyboard-accessible, this functionality never executes unless you use a mouse or an equivalent source of a `click` event, such as a specialized button on some keyboards.

This is a classic example where some extra JavaScript was necessary to create functionality that `button` elements would have provided natively, and simulating the functionality of buttons ended up producing an inaccessible experience.


<!-- 4. ACCESSIBILITY TOOL -->
## Overview of the Accessibility tool with Accessibility Tree and source order viewer

| Check | Tool |
|---|---|
| Check for keyboard and screen reader support | **Elements** tool: **Accessibility** tab: **Accessibility Tree** |
| Check the tab order for usability | **Elements** tool: **Accessibility** tab: **Source Order Viewer**)

These checks and tools are described below.


<!-- Accessibility tool: Accessibility Tree -->
## Checking the Accessibility Tree for keyboard and screen reader support

Using the **Inspect** tool to check each page element individually can become pretty time-consuming.  An alternative way to check a webpage is to use the **Accessibility** tool, to navigate the document's accessibility tree.  The **Accessibility** tool shows the **Accessibility Tree**, and indicates what information about the current document is provided by assistive technology such as screen readers.

The **Accessibility** tool is in the **Elements** tool, to the right of the **Styles** tab.

1.  If the demo webpage is not open, open the [accessibility-testing demo webpage][DevToolsA11yErrorsDemopage] in a new tab.  Then select `F12` to open DevTools.

1.  Select the **Inspect** \(![the Inspect icon](../media/inspect-icon.msft.png)\) icon in the top-left corner of DevTools so that the icon is highlighted (blue).

1.  In the rendered webpage, in the **Donation** section, hover over the **100** button.  The **Inspect** tool overlay appears.

1.  In the rendered webpage, select the **100** button.  In DevTools, the **Elements** tool appears.  The DOM tree shows the `div` element for the **100** button.  The **Styles** pane shows the CSS settings for the element.

1.  To the right of the **Styles** tab, select the **Accessibility** tab.  The **Accessibility Tree** for the element is displayed, expanded.

:::image type="complex" source="../media/a11y-testing-accessibility-tree.msft.png" alt-text="Donation form button in the Accessibility Tree tool" lightbox="../media/a11y-testing-accessibility-tree.msft.png":::
    Donation form button in the Accessibility Tree tool
:::image-end:::

Any element in the tree that doesn't have a name, or has a role of `generic` (such as the `div` element) is a problem, because that element won't be available to keyboard users, or to users who are using assistive technology.


<!-- Accessibility tool: Source order viewer -->
## Analyzing the order of the keyboard access through sections of the page

To quickly see the tab order of the sections of the webpage, use the **Source order viewer** in the **Accessibility** tool, to the right of the **Styles** tab.

The accessibility-testing demo webpage has a counterintuitive tabbing order, where keyboard users access the navigation menu on the left with blue buttons, _after_ tabbing through all the `More` links.  The menu is meant to be a shortcut to reach deep into the page content, but because you need to go through the whole page to reach the menu, the menu becomes ineffective for keyboard users.

The `Tab` order on the demo page is:
1. The **Search** field, then the **go** button for the Search field.
1. The **More** button in the **Cats** section, to navigate to a "Cats" webpage.  Then the other **More** buttons, for Dogs, Sheep, Horses, and then Alpacas.
1. The blue **Cats** button in the side navigation menu.  The focus on the blue buttons isn't highlighted, but as a hint that they have focus, you can see `#cats` in the URL tooltip in the lower left of the browser.  Focus moves through the blue buttons for **Dogs**, **Sheep**, **Horses**, and then **Alpacas**, in the sidebar navigation menu.
1. The donation textbox in the donation form.
1. The buttons in the top navigation menu: **Home**, **Adopt a pet**, **Donate**, **Jobs**, and then **About Us**.
1. The browser's top-of-window interface.

The reason for the confusing `Tab` key order after the **More** buttons is that the source order of the document determines the order of keyboard access.  In the source code of the document, the sidebar navigation menu with blue buttons appears _after_ the main content of the webpage.  The sidebar navigation menu is only rendered above most of the main content of the webpage because the sidebar navigation menu has been positioned using CSS.

You can test issues with `Tab` key order by using the **Source order viewer** in the **Accessibility** tool.  The **Source order viewer** is an experimental feature; for more information, see [Source order viewer](../experimental-features/index.md#source-order-viewer).

1.  If the demo webpage is not open, open the [accessibility-testing demo webpage][DevToolsA11yErrorsDemopage] in a new tab.  Then select `F12` to open DevTools.

1.  In DevTools, in the upper right, select the **Settings** button, shown as a gear icon.  The **Settings** page of DevTools appears.

1.  Below **Settings**, select **Experiments**.  The **Experiments** settings page appears.

1.  Select the **Source order viewer** checkbox.

1.  In the upper-right corner of the **Settings** page, select `X` to close the Settings page.  At the top of DevTools, a message appears: "One or more settings have changed which require a reload to take effect."

1.  Select the **Reload DevTools** button.

1.  In the **Elements** tool, to the right of the **Styles** tab, select the **Accessibility** tab.

1.  In the **Source Order Viewer** section, select the **Show source order** checkbox.  In the rendered webpage, numbers appear, indicating the `Tab` order as controlled by the order of lines of code in the source file.

1.  Navigate the DOM view of the `Elements` tool by hovering over the rendered webpage.  You now get a numeric overlay over each element that show you the source order, without having to navigate around using a keyboard:

    :::image type="complex" source="../media/a11y-testing-source-order-viewer.msft.png" alt-text="Activating the Source Order Viewer shows the order of the elements in the source as overlays on the page" lightbox="../media/a11y-testing-source-order-viewer.msft.png":::
        Activating the Source Order Viewer shows the order of the elements in the source as overlays on the page
    :::image-end:::
    
1.  Scroll the page from top to bottom, to see all of the numeric overlays, including on the page footer section.


<!-- 5. STYLES: TOGGLE STATE -->
## Overview of Toggle Element State in the Styles pane

Check the accessibility during all states of elements, such as text color contrast during the `hover` state.  To check other states of elements, in the **Styles** pane within the **Elements** tool, use the **Toggle Element State (:hov)** button.  This button displays the **Force element state** group of checkboxes.  

Below, we review how to use the **Inspect** overlay for the current state, and then describe how to check text-color contrast in other states, such as the `hover` state.


<!-- Inspect tool: information overlay: Accessibility section: text color contrast row -->
## Check text color contrast in the default state by using the Inspect tool's information overlay

The **Inspect** tool only shows text-contrast information for the current state.  There are several DevTools features for inspecting text-color contrast:

*  The **Issues** tool (located in the Drawer) automatically reports any color-contrast issues for the entire webpage, when text and background color don't contrast enough.  This approach is described above.

*  Use the **Inspect** tool (as an information overlay on the webpage) to check whether an individual page element has enough text-color contrast.  The **Inspect** tool's information overlay includes an **Accessibility** section that has a **Contrast** information row.  The current section reviews this approach when the Inspect tool is not active and then when it is active.

*  Emulate a non-default state such as the hover state, by using **Toggle Element State** in the styles pane, described in the subsequent section.

For elements that have text, the **Inspect** tool's information overlay shows the following:
*  The contrast ratio of text versus background colors.
*  A green checkbox icon for elements with enough contrast.
*  A yellow alert icon for elements that don't have enough contrast.

In some cases, contrast is affected by setting the browser to light theme or dark theme.

As an example, the sidebar menu elements of the demo page such as the blue **Cats** button have enough contrast, but the green `Dogs` link in the `Donation status` section does not have enough contrast.  Inspect those elements using the **Inspect** tool, as follows:

1.  If it's not open, open the [accessibility-testing demo webpage][DevToolsA11yErrorsDemopage] in a new tab.  Then select `F12` to open DevTools.

1.  Select the **Inspect** \(![Inspect button](../media/inspect-icon.msft.png)\) icon in the top-left corner of DevTools so that the icon is highlighted (blue).

1.  In the rendered webpage, hover over the blue **Cats** button.  The **Inspect** tool's information overlay appears.  In the **Accessibility** section of the information overlay, a green checkmark appears on the **Contrast** row, indicating that this element has enough contrast of text color versus background color.

    :::image type="complex" source="../media/a11y-testing-enough-contrast.msft.png" alt-text="The menu items have enough contrast, as shown in the Inspect tool" lightbox="../media/a11y-testing-enough-contrast.msft.png":::
        The menu items have enough contrast, as shown in the Inspect tool
    :::image-end:::

1.  In the rendered webpage, in the **Donation Status** section, hover over the **Dogs** link.  The **Inspect** tool's information overlay shows an orange exclamation point on the **Contrast** row, indicating that this element doesn't have enough contrast of text versus background colors.

    :::image type="complex" source="../media/a11y-testing-not-enough-contrast.msft.png" alt-text="An element that doesn't have enough contrast, as shown by the warning in the Inspect tool" lightbox="../media/a11y-testing-not-enough-contrast.msft.png":::
        An element that doesn't have enough contrast, as shown by the warning in the Inspect tool
    :::image-end:::

### Hovering when the Inspect tool is active doesn't show the text-color contrast

The **Inspect** tool's information overlay only represents a single state.  But the elements on the page could have different states, and you need to test those states, too.  For example, when you hover the mouse pointer over the menu of the accessibility-testing demo page, you get a rather involved animation that changes the colors, as follows:

1.  If the demo webpage is not open, open the [accessibility-testing demo webpage][DevToolsA11yErrorsDemopage] in a new tab.

1.  Hover over the various buttons in the menu which begins with the blue **Cats** button.  The menu animations run.

    :::image type="complex" source="../media/a11y-testing-hover.msft.png" alt-text="The menu item showing different colors when the mouse pointer is over it" lightbox="../media/a11y-testing-hover.msft.png":::
        The menu item showing different colors when the mouse pointer is over it
    :::image-end:::
    
    But when you turn on the Inspect tool, you can't reach the state of the menu element to test the contrast ratio, because the `hover` state in your styles doesn't get triggered when the Inspect tool is active.  When the Inspect tool is active, animations of the demo menu items don't occur when you hover over them.  Confirm this as follows:
    
1.  Select the **Inspect** \(![the Inspect button](../media/inspect-icon.msft.png)\) icon in the top-left corner of DevTools so that the icon is highlighted (blue).

1.  Hover over the various buttons in the menu which begins with the blue **Cats** button.  The animations for the buttons don't run; instead, the buttons are color-highlighted in the way that is standard for the Inspect tool.

This text-contrast checking isn't quite enough, because the elements on the page could have different states.


<!-- Elements tool: Styles pane: Toggle Element State -->
## Check accessibility during all states of elements, such as contrast during hover

To check accessibility during all states of elements, such as text-color contrast during the hover state: in the **Styles** pane within the **Elements** tool, use the **Toggle Element State (:hov)** button, which displays the **Force element state** group of checkboxes.

### Using state simulation in the Styles pane to simulate the state of a menu item 

When the **Inspect** tool is active, instead of hovering over an animated element, you need to simulate the state of the menu item.  To simulate the state of a menu item, use the state simulation in the **Styles** pane.  The **Styles** pane has a **:hov** button (for **Toggle Element State**), which displays a group of checkboxes labeled **Force element state**.  Use this feature as follows:

1.  If the demo webpage is not open, open the [accessibility-testing demo webpage][DevToolsA11yErrorsDemopage] in a new tab.  Then select `F12` to open DevTools.

1.  Select the **Inspect** icon in the top-left corner of DevTools so that the icon is highlighted (blue).

1.  In the rendered webpage, select the blue **Cats** button in the menu.  The **Elements** tool opens, with the element `<a href="#cats">Cats</a>` selected.

    :::image type="complex" source="../media/a11y-testing-inspecting-link-to-hover.msft.png" alt-text="Inspecting the element that has a hover state in the Elements tool" lightbox="../media/a11y-testing-inspecting-link-to-hover.msft.png":::
        Inspecting the element that has a hover state in the Elements tool
    :::image-end:::

1.  Select the **Styles** tab.  The selected `a` element has a `hover` state in the CSS that is applied to it, but that's not visible in the **Styles** pane, which doesn't show the `hover` CSS rule.

1.  In the **Styles** pane, to the right of the style rule `#sidebar nav li a`, select the `styles.css` link.  The **Sources** tool opens.  Then find the CSS pseudo-class rule `#sidebar nav li a:hover`.  This is the rule that doesn't run when the **Inspect** tool is active.  We'll simulate this state-rule running, in the next steps.

1.  Select the **Elements** tool.  Then in the **Styles** pane, select the **Toggle Element State** button, indicated by **:hov**.  The **Force element state** group of checkboxes appears.

    :::image type="complex" source="../media/a11y-testing-state-simulation.msft.png" alt-text="The state simulation tool showing all the options" lightbox="../media/a11y-testing-state-simulation.msft.png":::
        The state simulation tool showing all the options
    :::image-end:::

1.  Select the **:hover** checkbox.  In the DOM, to the left of the element `<a href="#cats">Cats</a>`, a yellow dot appears, indicating that the element has a simulated state.  The **Cats** menu item now appears in the webpage approximately as if the pointer was hovering over it.  The animation might partly run.

    :::image type="complex" source="../media/a11y-testing-hover-simulated.msft.png" alt-text="DevTools simulating a hover state" lightbox="../media/a11y-testing-hover-simulated.msft.png":::
        DevTools simulating a hover state
    :::image-end:::

    After the simulated state is applied, you can use the **Inspect** tool again to check the contrast of the element when the user hovers over it, as follows.

1.  Select the **Inspect** \(![Inspector icon](../media/inspect-icon.msft.png)\) icon in the top-left corner of DevTools so that the icon is highlighted (blue).

1.  Hover over the blue **Cats** button (now light blue, due to the simulated hover animation).  The **Inspect** tool's information overlay appears, showing an orange exclamation point in the **Contrast** row, indicating that the contrast isn't high enough.

    :::image type="complex" source="../media/a11y-testing-hover-contrast-testing.msft.png" alt-text="Testing the contrast of an element in a simulated hover state" lightbox="../media/a11y-testing-hover-contrast-testing.msft.png":::
        Testing the contrast of an element in a simulated hover state
    :::image-end:::

State simulation is also a good way to check if you considered different user needs.  In the case of this **:hov** (**Toggle Element State**) menu, you can find out that simulating the `:focus` state makes no difference to the look and feel, and that is a problem, as we experienced earlier when using the keyboard to navigate the document.


<!-- 6. RENDERING TOOL -->
## Overview of the Rendering tool for simulating visual impairment

Use the **Rendering** tool to emulate and check the following:

| Accessibility aspect to check | DevTools feature |
|---|---|
| Check for contrast issues with dark theme and light theme. | **Rendering** tool: **Emulate CSS media feature prefers-color-scheme** dropdown list |
| Check that the webpage is usable by people with color blindness. | **Rendering** tool: **Emulate vision deficiencies** dropdown list: **Protanopia** |
| Check that the webpage is usable with blurred vision. | **Rendering** tool: **Emulate vision deficiencies** dropdown list: **Blurred vision** |
| Check whether the page is usable with UI animation turned off (reduced motion). | **Rendering** tool: **Emulate CSS media feature prefers-reduced-motion** |

These features are described below.


<!-- Rendering tool: Emulate CSS media feature prefers-color-scheme -->
## Check for contrast issues with dark theme and light theme

To check for contrast issues with dark theme and light theme, in the **Rendering** tool, use the **Emulate CSS media feature prefers-color-scheme** dropdown list.

When testing color accessibility, there could be different display color themes that you need to test for contrast issues.  Most operating systems come with a dark mode and a light mode.  Your webpage can react to this operating system setting, by using a CSS media query.

The accessibility-testing demo page has a light theme and a dark theme.  You can test these themes without having to change your operating system setting, by using the `prefers-color-scheme` CSS options in the **Rendering** tool, as described in the article [Dark or Light Color Scheme simulation][DevToolsColorSchemeSimulation].

The accessibility-testing demo page inherits the dark or light theme setting from the operating system.  If we use DevTools to simulate the operating system being set to a light scheme and then refresh the webpage, the **Issues** tool shows six color-contrast problems instead of two.  (You might see different numbers.)

1.  If it's not open, open the [accessibility-testing demo webpage][DevToolsA11yErrorsDemopage] in a new tab of the browser, and then select `F12` to open DevTools.

1.  Press `Esc` to open the Drawer at the bottom of DevTools.  Select the `+` icon at the top of the drawer to see the list of tools, and then select **Rendering**.  The Rendering tool appears.

1.  In the **Emulate CSS media feature prefers-color-scheme** dropdown list, select **prefers-color-scheme: light**.  

    :::image type="complex" source="../media/a11y-testing-simulating-light-mode.msft.png" alt-text="Using the Rendering tool to simulate a light mode and triggering the other theme of the document" lightbox="../media/a11y-testing-simulating-light-mode.msft.png":::
        Using the Rendering tool to simulate a light mode and triggering the other theme of the document
    :::image-end:::

    The webpage is re-rendered using `light-theme.css`.

1.  Select the **Issues** tool, and then expand the **Accessibility** section.  Depending on various factors, you might get `Insufficient color contrast` warnings.
    
    :::image type="complex" source="../media/a11y-testing-new-contrast-issues-in-light-mode.msft.png" alt-text="New contrast issues detected because of the change to light theme" lightbox="../media/a11y-testing-new-contrast-issues-in-light-mode.msft.png":::
        New contrast issues detected because of the change to light theme
    :::image-end:::
    
    The "Donation status" section of the page is unreadable in light mode, and needs to change. 
    
    :::image type="complex" source="../media/a11y-testing-donation-state-light-contrast.msft.png" alt-text="The Donation Status section flagged as a set of contrast issues in light mode" lightbox="../media/a11y-testing-donation-state-light-contrast.msft.png":::
        The **Donation Status** section flagged as a set of contrast issues in light mode
    :::image-end:::
    
1.  In DevTools, select the **Elements** tool, and then select `Ctrl`+`F` on Windows/Linux, or `Command+F` on macOS.  The **Find** textbox appears, to search within the HTML DOM tree.
 
1.  Enter `scheme`.  The following CSS media queries are found:

    ```html
    <link rel="stylesheet" href="css/light-theme.css" media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)">
    <link rel="stylesheet" href="css/dark-theme.css" media="(prefers-color-scheme: dark)">
    ```

<!-- Rendering tool: Emulate vision deficiencies: Protanopia -->
## Check that the webpage is usable by people with color blindness

In the accessibility-testing demo webpage, the different donation states use color as the only means to differentiate between the states of funding.
*  Green means high donations have been received.
*  Yellow means medium donations have been received.
*  Red means low donations have been received.

But you can't expect all of your users to experience these colors as intended.  By using the **Emulate vision deficiencies** feature of the **Rendering** tool, you can find out that this design is not good enough, because you can simulate how people with different vision would perceive your design.

1.  Open the [accessibility-testing demo webpage][DevToolsA11yErrorsDemopage] in a new tab of the browser, and then select `F12` to open DevTools.

1.  Press `Esc` to open the Drawer at the bottom of DevTools.  Select the `+` icon at the top of the drawer to see the list of tools, and then select **Rendering**.  The Rendering tool appears.

1.  In the **Emulate vision deficiencies** dropdown list, select **Protanopia**.  _Protanopia_ is reduced sensitivity to red light, making it hard to differentiate green, red, and yellow.

:::image type="complex" source="../media/a11y-testing-simulating-protanopia.msft.png" alt-text="Showing the document as someone with protanopia would see it" lightbox="../media/a11y-testing-simulating-protanopia.msft.png":::
    Showing the document as someone with protanopia would see it
:::image-end:::

1.  In the **Rendering** tool, below **Emulate vision deficiencies**, select **No emulation**.

For more information, see [vision deficiencies emulation][DevToolsVisionDeficiencies].


<!-- Rendering tool: Emulate vision deficiencies: Blurred vision -->
## Check that the webpage is usable with blurred vision

To simulate blurred vision, in the **Rendering** tool, use the **Emulate vision deficiencies** menu.  When you this feature with the accessibility-testing demo webpage, you can see that the drop shadow on the text in the upper menu makes it hard to read the menu items.

1.  Open the [accessibility-testing demo webpage][DevToolsA11yErrorsDemopage] in a new tab of the browser, and then select `F12` to open DevTools.

1.  Press `Esc` to open the Drawer at the bottom of DevTools.  Select the `+` icon at the top of the drawer to see the list of tools, and then select **Rendering**.  The Rendering tool appears.

1.  In the **Emulate vision deficiencies** dropdown list, select **Blurred vision**.

    :::image type="complex" source="../media/a11y-testing-simulating-blur.msft.png" alt-text="Simulating a blurred page can show accessibility issues" lightbox="../media/a11y-testing-simulating-blur.msft.png":::
        Simulating a blurred page can show accessibility issues
    :::image-end:::

    Now you can see that the `text-shadow` CSS property on the text in the upper menu (**Home**, **Adopt a Pet**...) makes it hard to read the menu items.
    
1.  In the **Rendering** tool, below **Emulate vision deficiencies**, select **No emulation**.


<!-- Rendering tool: Emulate CSS media feature prefers-reduced-motion: "prefers-reduced-motion: reduced" -->
## Check whether the page is usable with UI animation turned off (reduced motion)

A webpage should not show animations to a user who turned off animations in the operating system.  Animations can help the usability of a product, but they can also cause distraction, confusion, or nausea.

In the accessibility-testing demo webpage, when you turn off animations in the operating system, or emulate that settings by using DevTools, the webpage doesn't use smooth scrolling when you select different menu buttons, such as the blue **Cats** or **Dogs** menu items.  This is achieved by wrapping the smooth-scrolling setting in CSS in a media query, and then using the **Rendering** tool to emulate the operating system setting for reduced animation.

To check whether the page is usable with animations turned off:

1.  Open the [accessibility-testing demo webpage][DevToolsA11yErrorsDemopage] in a new tab of the browser, and then select `F12` to open DevTools.

1.  At the top of DevTools, select the **Sources** tool, and then in the **Navigation** pane on the left, select `styles.css`.  The CSS file appears in the **Editor** pane.

1.  Press `Ctrl`+`F` on Windows/Linux, or `Command`+`F` on macOS and then enter `@media`.  The CSS media query appears.

    ```css
    @media (prefers-reduced-motion: no-preference) {
      html {
        scroll-behavior: smooth;
      }
    }
    ```

    Next, emulate the operating system setting to reduce animation, as follows.

1.  Press `Esc` to open the Drawer at the bottom of DevTools.  Select the `+` icon at the top of the drawer to see the list of tools, and then select **Rendering**.  The Rendering tool appears.

1.  In the **Emulate CSS media feature prefers-reduced-motion** dropdown list, select **prefers-reduced-motion: reduced**.

    :::image type="complex" source="../media/a11y-testing-simulating-reduced-motion.msft.png" alt-text="Simulating reduced motion and the CSS that makes sure that smooth scrolling only happens when the user wants it" lightbox="../media/a11y-testing-simulating-reduced-motion.msft.png":::
        Simulating reduced motion and the CSS that makes sure that smooth scrolling only happens when the user wants it
    :::image-end:::

1.  In the webpage, select the blue menu items, such as **Horses** or **Alpacas**.  Now the webpage instantly scrolls to the selected section, rather than using the smooth-scrolling animation.

1.  In the **Rendering** tool, below **Emulate CSS media feature prefers-reduced-motion**, select **No emulation**.
   
The accessibility-testing demo webpage still runs other animations, even with the above media query and emulation setting:
*  Animation of the blue menu items when you hover over them.
*  Animation of the circles on the `More` links when you hover over them.

These two accessibility issues also need to be fixed in the demo page, regarding animation.

For more information, see [Reduced motion simulation][DevToolsReducedMotion].


## What to do next?

This article covered several features in DevTools that you can use to catch accessibility problems in your products, including:
*  Automated checks (the **Issues** tool).
*  Detail checks (the **Inspect** tool).
*  Simulation of different states (the **:hov (Toggle Element State)** section of the **Styles** pane).
*  Simulation of different perceptual environments (the **Rendering** tool).

Automated tools such as these can't find all the problems in a product, because many of the accessibility barriers show up in interaction.  None of these tools can replace a proper testing round of your products, with people using assistive technologies and following a plan to check for all the required tests. At Microsoft we're using the [Assessments][AccessibilityInsightsAssessment] feature of [Accessibility Insights][AccessibilityInsights] for that accessibility testing, and we also have a fixed process that each product needs to go through before it ends up in the hands of end users.  

There are many more checks that are needed, such as:
*   Testing when zoomed-in.
*   Testing with screen readers.
*   Testing with voice recognition.
*   Testing in high-contrast mode.

To combine the accessibility testing features of DevTools with appropriate manual accessibility testing, consider doing the following:

*  Define an accessibility testing process, including a process checklist.
*  Use that defined process and checklist to do an accessibility test pass.
*  Run automated webpage accessibility reports, such as the Issues tool, Accessibility Insights, or Lighthouse.


## webhint extension for Visual Studio Code

The tools and processes that are shown in this article are a way to get started and avoid the most prominent mistakes.  

Another excellent way to find out if you are doing things incorrectly while you develop them is to use the [webhint extension for Visual Studio Code][WebhintForCode], in Visual Studio Code.  This extension flags accessibility problems in your source code, and gives insights on how to fix them.

:::image type="complex" source="../media/a11y-testing-webhint-in-vs-code.msft.png" alt-text="Webhint in Visual Studio Code, showing an accessibility issue by underlining the HTML element and showing an explanation of the problem" lightbox="../media/a11y-testing-webhint-in-vs-code.msft.png":::
    Webhint in Visual Studio Code, showing an accessibility issue by underlining the HTML element and showing an explanation of the problem
:::image-end:::

We're constantly working on new accessibility features for DevTools.  If there is anything you are missing, send us a message and tell us what we can do.


## See also

*   [Accessibility testing][AccessibilityTest]
*   [Accessibility reference][DevtoolsAccessibilityReference]


## Getting in touch with the Microsoft Edge DevTools team

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]

<!-- links -->
[AccessibilityTest]: ../../accessibility/test.md "Accessibility testing | Microsoft Docs"
[DevtoolsAccessibilityReference]: reference.md "Accessibility reference | Microsoft Docs"
[DevToolsColorSchemeSimulation]: ./preferred-color-scheme-simulation.md "Dark or Light Color Scheme simulation | Microsoft Docs"
[DevToolsIssuesTool]: ../issues/index.md "Find and fix problems with the Microsoft Edge DevTools Issues tool | Microsoft Docs"
[DevToolsReducedMotion]: ./reduced-motion-simulation.md "Reduced motion simulation | Microsoft Docs"
[DevToolsVisionDeficiencies]: ./emulate-vision-deficiencies.md "Emulate vision deficiencies | Microsoft Docs"
<!-- external links -->
[DevToolsA11yErrorsDemopage]: https://microsoftedge.github.io/DevToolsSamples/a11y-testing/page-with-errors.html "accessibility-testing demo webpage | GitHub"
[W3CContrastRatio]: https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio "contrast ratio | W3C"
[WCAG]: https://www.w3.org/TR/WCAG21/ "Web Content Accessibility Guidelines | W3C"
[AccessibilityInsightsAssessment]: https://accessibilityinsights.io/docs/en/web/getstarted/assessment/ "Assessment in Accessibility Insights for Web | Accessibility Insights"
[AccessibilityInsights]: https://accessibilityinsights.io "Accessibility Insights"
[Lighthouse]: https://developers.google.com/web/tools/lighthouse/ "Lighthouse | Google"
[WebhintForCode]:https://aka.ms/webhint4code "webhint | Visual Studio Marketplace"
