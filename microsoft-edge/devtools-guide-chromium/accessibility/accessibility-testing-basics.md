---
description: Getting started for testing for accessibility problems using DevTools
title: Accessibility testing basics
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/06/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Accessibility testing basics

This article covers some of the features you can use in DevTools to test for accessibility problems.  As an example, we use a demo page that has some accessibility problems, and we go through using different features of DevTools to detect and fix accessibility problems with the demo page.

:::image type="complex" source="../media/a11y-testing-basics-demopage.msft.png" alt-text="The demo page, which has a few accessibility issues" lightbox="../media/a11y-testing-basics-demopage.msft.png":::
    The demo page, which has a few accessibility issues
:::image-end:::

We recommend opening the [demo webpage with accessibility issues][DevToolsA11yErrorsDemopage] in a new tab, so you can follow along in this tour of some of the accessibility testing features of DevTools.  You can try out any of the numbered steps in this article.


## Automated testing

### Issues counter, Issues tool, and Accessibility section

1.  Open the [demo webpage with accessibility issues][DevToolsA11yErrorsDemopage] in a new tab of the browser, and then select `F12` to open DevTools.  In the upper right, some automatically detected problems are flagged in the **Issues counter**.

    :::image type="complex" source="../media/a11y-testing-issues-tracker.msft.png" alt-text="The Issues counter in DevTools, indicating how many problems there are in the current document" lightbox="../media/a11y-testing-issues-tracker.msft.png":::
        The **Issues counter** in DevTools, indicating how many problems there are in the current document
    :::image-end:::

    The number you get might be different than the number shown in the figure.

1.  Select the **Issues counter**, to open the [Issues tool][DevToolsIssuesTool], to see what the problems are.  The **Issues counter** is shown in the upper right, as a speech-bubble icon with a number, with a tooltip **Open Issues to view issues**.  The **Issues** tool appears in the Drawer at the bottom of DevTools.

    :::image type="complex" source="../media/a11y-testing-accessibility-issues.msft.png" alt-text="Accessibility warnings displayed in the Issues tool" lightbox="../media/a11y-testing-accessibility-issues.msft.png":::
        Accessibility warnings displayed in the Issues tool
    :::image-end:::

    This article focuses on the **Accessibility** section of the **Issues** tool.

1.  In the **Issues** pane, expand the **Accessibility** section.

### Labels must be connected to input fields

1.  In the **Warning** `Form elements must have labels: Element has no title attribute.  Element has no placeholder attribute`, select the **Open in Elements** link.  In the DOM tree, DevTools highlights the element, and shows you the HTML source and the applied CSS rules for the element:

    :::image type="complex" source="../media/a11y-testing-inspect-problematic-element.msft.png" alt-text="Elements tool showing the problematic HTML after activating the link in the Issues tool" lightbox="../media/a11y-testing-inspect-problematic-element.msft.png":::
        Elements tool showing the problematic HTML after activating the link in the **Issues** tool
    :::image-end:::

    The HTML has a `label` element that doesn't work:

    ```html
    <label>Search</label>
    <input type="search">
    <input type="submit" value="go">
    ```

    This `label` element is used incorrectly, because there is no connection between the `label` element and a particular `input` element.  You can also test this lack of a connection as follows.

1.  In the **Elements** tool, hover over or select the `<label>Search</label>` element.  In the webpage, focus only appears on the **Search** label, not on the input textbox.  A validly tagged HTML `label` element would put focus on the `search` input textbox as well as on the **Search** label.

    To connect the `label` element to a specific `input` element, you would need to either:
    *   Nest the `input` element within the `label` element.
    *   In the `label` element, add a `for` attribute that matches an `id` attribute of the `input` element.

1.  Select the explanatory "Further reading" link in the **Issues tool**.  To open the link in a new tab, select `Ctrl`+`click` on Windows/Linux or `Command`+`click` on macOS.

    :::image type="complex" source="../media/a11y-testing-more-information-links.msft.png" alt-text="Link in the Issues pane pointing to more in-depth information about the issue" lightbox="../media/a11y-testing-more-information-links.msft.png":::
        Link in the **Issues** pane pointing to more in-depth information about the issue
    :::image-end:::

### Missing alt text

The other automatically detected problem is that many of the images in the document don't have any alternative text (also called *alt text*).

1.  In the **Issues** pane, expand the warning `Images must have alternate text: Element has no title attribute`.  There are four instances of images with that problem.

    :::image type="complex" source="../media/a11y-testing-images-without-alt.msft.png" alt-text="The Issues tool reporting images that are missing alternative text" lightbox="../media/a11y-testing-images-without-alt.msft.png":::
        The Issues tool reporting images that are missing alternative text
    :::image-end:::

### Not enough contrast

You might see warnings that two elements on the page don't have enough contrast:

:::image type="complex" source="../media/a11y-testing-contrast-issues.msft.png" alt-text="Contrast problems reported in the Issues tool" lightbox="../media/a11y-testing-contrast-issues.msft.png":::
    Contrast problems reported in the Issues tool
:::image-end:::

You get detailed explanations about what that means.

1.  If you see a warning that two elements on the page don't have enough contrast, expand the **Affected resources** section of the warning.  A list of elements appears, showing which elements don't have enough contrast.

1.  Select the `li.high` element.  In the rendered webpage, the **Dogs** link in the **Donate** section is highlighted, displaying a small information overlay.  This is the same overlay that appears when you hover over an element in the DOM tree in the **Elements** tool.

    :::image type="complex" source="../media/a11y-testing-element-with-contrast-issues.msft.png" alt-text="Element in the webpage highlighted after selecting a link in the Affected Resources section" lightbox="../media/a11y-testing-element-with-contrast-issues.msft.png":::
        Element in the webpage highlighted after selecting a link in the **Affected Resources** section
    :::image-end:::

### Responsive design and overlapping controls when narrow

1.  Resize the window to make it narrow.  The navigation menu of the demo page might reveal some usability issues that need fixing, such as overlapping form controls, as shown in the previous figure.

### Wavy underline in the DOM tree indicates issues

The DOM tree in the **Elements** tool flags issues directly in the HTML, by adding a wavy underline.

1.  When you `Shift+Click` any element that has a wavy underline, the **Issues tool** appears.  In the Elements tool, in the DOM tree, select the element `<input type="search">`, which has a wavy line under `input`.  Then select `Shift` + `Click`.

    :::image type="complex" source="../media/a11y-testing-wavy-underlines.msft.png" alt-text="An element that has a wavy underline in the DOM view has an issue; Shift+Click the element to view the issue" lightbox="../media/a11y-testing-wavy-underlines.msft.png":::
        An element that has a wavy underline in the DOM view has an issue; Shift+Click the element to view the issue
    :::image-end:::

The issues shown above are some relatively prominent and straightforward accessibility problems that can be avoided.  Using the **Issues tool** and its guided explanations to fix the issues puts you on the way towards an accessible product.


## Limits of automated testing

Getting an automated report from a tool like the [Issues tool][DevToolsIssuesTool], [Accessibility Insights][AccessibilityInsights] or [Lighthouse][Lighthouse] is only the beginning of your accessibility testing journey.

Accessibility is about human interaction - people with different needs using various technical environments using your products. This can't be automated, but needs verification by a human navigating the product. Ideally, you'd have access to testers with different needs, and testers using various environments, but you can already do a lot yourself by using the keyboard to navigate, and by inspecting different parts of the page.

There are a lot more issues in this demo page that automated testing doesn't catch.  Some issues only show up when you interact with the page.  Other issues appear when you change the way the page is displayed, and other issues are built in such a way that the automated scan of the document couldn't even detect that there is a problem.

For example, one such issue that automated testing didn't catch is the donation form. When you use a *mouse*, you can click the different options to donate money.  But when you try to use the *keyboard* to try to use the donation form, focus doesn't move to the buttons of the donation form.

1.  If the demo page isn't open, open the [demo webpage with accessibility issues][DevToolsA11yErrorsDemopage] in a new tab of the browser, and then select `F12` to open DevTools.

1.  In the demo webpage, try to use the keyboard to try to use the donation form, by selecting `Tab` or `Shift`+`Tab` repeatedly.

    :::image type="complex" source="../media/a11y-testing-basics-donation-form-issue.msft.png" alt-text="Donation form in the demo page" lightbox="../media/a11y-testing-basics-donation-form-issue.msft.png":::
        Donation form in the demo page
    :::image-end:::

To find out what is going wrong, use the **Inspect** tool.


## Using the Inspect tool to detect accessibility issues

After you select the **Inspect** tool icon, you can hover over any element in the rendered webpage, to show information about the element.

1.  If the demo page isn't open, open the [demo webpage with accessibility issues][DevToolsA11yErrorsDemopage] in a new tab of the browser, and then select `F12` to open DevTools.

1.  Select the **Inspect** \(![Inspect](../media/inspect-icon.msft.png)\) tool icon in the top-left corner of DevTools so that the icon is highlighted (blue).

    :::image type="complex" source="../media/a11y-testing-basics-inspector.msft.png" alt-text="To turn on the Inspect tool, select the Inspect icon" lightbox="../media/a11y-testing-basics-inspector.msft.png":::
        To turn on the **Inspect** tool, select the **Inspect** icon
    :::image-end:::

### Color highlighting of element sub-areas

1.  Hover over different parts of the rendered webpage, now that the **Inspect** tool is activated.  Each element in the webpage now has a multicolor overlay over its entire area, to show any sub-areas that the element contains.  The Inspect tool appears below the item, as a large information overlay.

    :::image type="complex" source="../media/a11y-testing-basics-inspector-overlay.msft.png" alt-text="The Inspect tool, showing the element's area as a multicolor overlay, and showing the element's details as a large information overlay" lightbox="../media/a11y-testing-basics-inspector-overlay.msft.png":::
        The **Inspect** tool, showing the element's area as a multicolor overlay, and showing the element's details as a large information overlay
    :::image-end:::

1.  Hover over the left margin of the **Cats** section.  DevTools highlights several rectangular portions of the **Cats** section with different colors, making the layout nesting visible.  

To see these color-region overlays in the rendered webpage:
*  When the **Inspect** tool is active, hover over the rendered webpage.  Or, hover over the DOM tree in the **Elements** tool.
*  When the **Inspect** tool is not active, hover over the DOM tree in the **Elements** tool.

### Element information overlay in the webpage

In addition to showing color-highlighted sub-areas of an element's layout when you hover over the webpage, the **Inspect** tool also shows an information overlay below the element within the rendered webpage.

The top part of the **Inspect** overlay in the webpage lists applicable details for the element, such as the following:

*   Positioning - if the element is positioned using a flexbox or grid, an appropriate icon \(![Inspect](../media/grid-icon.msft.png)\) is shown.
*   The name of the element, such as `h1`, `h2`, or `div`.
*   The dimensions of the element, in pixels.
*   The color as a color swatch (a small, colored square) and as formatted (such as `#336699`).
*   Font information (size and font families).
*   Margin and padding, in pixels.

The bottom part of the **Inspect** overlay in the webpage has an **Accessibility** section, containing the following:

*   **Contrast** defines whether an element can be understood by people with low vision.  The [contrast ratio][W3CContrastRatio] as defined by the [WCAG Guidelines][WCAG] indicates whether there is enough contrast (a green check mark icon) or not enough (an orange exclamation-point icon).

*   **Name** and **Role** is what assistive technology like screen readers will report about the element.  
    *   The `Name` is the text content of an `a` element.  For the element `<a href="/">About Us</a>`, the **Name** shown in the Inspect tool is "About Us".
    *   The `Role` of the element.  This is usually the element name, such as `article`, `img` , `link`, or `heading`.  The `div` element is represented as `generic`.

*   **Keyboard-focusable** indicates whether users can reach the element regardless of input device.
    *   A green check mark icon indicates that the element is keyboard-focusable.  
    *   A gray circle with diagonal line indicates that the element isn't keyboard-focusable.

1.  Hover over different parts of the rendered webpage while the **Elements** tool is open.  The DOM tree automatically expands to show information about the element you hover over.  Hovering doesn't cause the **Styles** pane to update.

1.  Select any element within the rendered webpage.  The **Elements** tool opens, showing the HTML of the element in the DOM tree, and also the applied CSS for the element in the **Styles** pane.  Selecting an element in the rendered webpage turns off the Inspect tool.

    :::image type="complex" source="../media/a11y-testing-basics-inspector-selected-element.msft.png" alt-text="Details about the selected element are displayed in the Elements tool" lightbox="../media/a11y-testing-basics-inspector-selected-element.msft.png":::
        Details about the selected element are displayed in the **Elements** tool
    :::image-end:::


## Testing interaction accessibility with a keyboard

Not all users have a pointer or touch device, and not all users can see the web projects we create.  This is why it is important that the user interface works at least with a keyboard.  Make sure you can press the `Tab` key to move the focus to each form control on a webpage, and make sure you can press the `Enter` key to activate a form button.

Try using the demo page by using a keyboard rather than a mouse, as follows.

1.  If the demo page isn't open, open the [demo webpage with accessibility issues][DevToolsA11yErrorsDemopage] in a new tab of the browser.

1.  Use a keyboard to navigate the demo document, using the `Tab` and `Shift`+`Tab` keys to jump from element to element.  On the demo webpage, pressing `Tab` first moves focus to the search form in the `header` section.

1.  Select the `Tab` key to put focus on a button, and then press `Enter` to click the focused button.

1.  In the demo page, press `Tab` to put focus on the **Search** field, and then press the `Enter` key to submit the search, producing the same result as clicking the **go** button.  Pressing the `Enter` key to send the **Search** form works correctly, despite the `label` element issue that we discovered earlier by using the **Issues tool**.

1.  Select `Tab`.  The next element you put focus on is the first `More` link in the `content` section of the webpage, as indicated by an outline.
    
    :::image type="complex" source="../media/a11y-testing-keyboard-focus-on-element.msft.png" alt-text="Navigating the document using the keyboard and the `Tab` key. Focus is shown on a link in the document." lightbox="../media/a11y-testing-keyboard-focus-on-element.msft.png":::
        Navigating the document using the keyboard and the tab key. Focus is shown on a link in the document.
    :::image-end:::
    
1.  Go past the last `more` link.  After you go past the last `More` link, the page scrolls up again and you seem to be on some element, but you don't know which element.

1.  Notice the URL in the bottom left.  If you look to the bottom left of the screen (or if you use a screen reader), you realize that you are on the menu of the page, because the browser shows the URL which the link points to (`#cats`).

    :::image type="complex" source="../media/a11y-testing-lack-of-focus-style.msft.png" alt-text="A lack of focus style makes it impossible to know where you currently are in the document. The only hint is the display of the link target in the bottom left corner of the screen" lightbox="../media/a11y-testing-lack-of-focus-style.msft.png":::
        A lack of focus style makes it impossible to know where you currently are in the document. The only hint is the display of the link target in the bottom left corner of the screen
    :::image-end:::

1.  Press the `Tab` key again, to get to the entry field in the donation form.  However, you can't reach the buttons above the textbox by pressing the `Tab` key; you can't use the keyboard to put focus on the `50`, `100` or `200` buttons and then to click them.  Also, pressing the `Enter` key doesn't submit the donation form.

    :::image type="complex" source="../media/a11y-testing-form-field-with-outline.msft.png" alt-text="The only keyboard-accessible element in the donation form is the text entry field" lightbox="../media/a11y-testing-form-field-with-outline.msft.png":::
        The only keyboard-accessible element in the donation form is the text entry field
    :::image-end:::
    
1.  Pressing the `Tab` key again puts focus on the main menu of the page, with menu buttons for **Home**, **Adopt a Pet**, **Donate**, **Jobs**, and **About Us**.  Press the `Tab` or `Shift`+`Tab` key to put focus on a menu button, as indicated by a focus outline.  Then press the `Enter` key to access that section of the webpage.

    :::image type="complex" source="../media/a11y-testing-menu-with-outline.msft.png" alt-text="The main menu has a highlight and a focus outline, and thus is keyboard-accessible" lightbox="../media/a11y-testing-menu-with-outline.msft.png":::
        The main menu has a highlight and a focus outline, and thus is keyboard-accessible
    :::image-end:::
    
We found some issues here to fix:

*  The left-hand navigation doesn't tell the user where they are, if they use a keyboard.
*  The buttons and the submission of the donation form don't work with a keyboard.
*  The order of the keyboard access seems wrong.  You navigate through all the `More` links in the document before you reach the menu on the left.  This makes the menu pointless, because you already consumed all the content that the menu should provide easy access to.

Let's analyze the problems using DevTools.


## Analyzing interaction problems using DevTools

When you use the **Inspect** tool to highlight the menu and drill-down in the HTML view to the `a` element, you can start to find out why the in-page menu is confusing to keyboard users.

1.  If the demo page isn't open, open the [demo webpage with accessibility issues][DevToolsA11yErrorsDemopage] in a new tab of the browser, and then select `F12` to open DevTools.

<!-- clean up this section, break up -->
1.  View the CSS that is applied to the `a` element.  

    :::image type="complex" source="../media/a11y-testing-menu-link.msft.png" alt-text="Inspecting the source code and the applied styles of a link in the menu" lightbox="../media/a11y-testing-menu-link.msft.png":::
        Inspecting the source code and the applied styles of a link in the menu
    :::image-end:::
    
1.  Select the link to the CSS file.  The CSS file opens within the **Sources** tool:

    :::image type="complex" source="../media/a11y-testing-menu-link-styles.msft.png" alt-text="The styles applied to the link in the Sources tool" lightbox="../media/a11y-testing-menu-link-styles.msft.png":::
        The styles applied to the link in the Sources tool
    :::image-end:::
    
    The problem is that although the styles of the page have a `hover` state that indicates which menu item you are on when you use a mouse, there is no `focus` state to go along with it, when using a keyboard.
    
    Even worse, the links have an `outline: none` setting in the CSS.  This is a common practice, to remove the outline which browsers automatically add to elements when you focus them with a keyboard.  As you can see here, this can cause confusion.
    
    Debugging the donation form requires understanding why the lack of a `focus` state and the presence of the `outline: none` CSS property aren't flagged by automatic testing as a problem.
    
1.  Select the **Inspect** \(![Inspect](../media/inspect-icon.msft.png)\) icon in the top-left corner of DevTools so that the icon is highlighted (blue).  Then hover over different parts of the rendered webpage.  The Inspect tool appears on the webpage, as an overlay.

1.  Use the **Inspect** tool to hover over the `50`, `100`, and `200` donation buttons.  The result is that none of the buttons are keyboard-accessible, as indicated by the gray circle with diagonal line.  The buttons have no name, and they have a role of `generic` (because they are `div` elements), which means that the buttons are effectively inaccessible to assistive technology.

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

Using a `click` event to read the buttons is good practice, because a `click` event fires both on mouse pointer and keyboard interaction.  However, because a `div` element isn't keyboard-accessible, this functionality never executes unless you use a mouse or an equivalent source of a `click` event, such as a keyboard button that specifically sends a mouse `click` event.

This is a classic example where some extra JavaScript was necessary to create functionality that `button` elements would have provided natively, and simulating the functionality of buttons ended up producing an inaccessible experience.

### The Accessibility tool

Using the **Inspect** tool to check each page element individually can become pretty time-consuming.  An alternative way to check a webpage is to use the **Accessibility** tool, to navigate the document's accessibility tree.  The **Accessibility** tool shows the **Accessibility Tree**, and indicates what information about the current document is provided by assistive technology such as screen readers.

The **Accessibility** tool is in the **Elements** tool, to the right of the **Styles** tab.

1.  If the demo webpage is not open, open the [demo webpage with accessibility issues][DevToolsA11yErrorsDemopage] in a new tab.  Then select `F12` to open DevTools.

1.  Select the **Inspect** \(![Inspect](../media/inspect-icon.msft.png)\) icon in the top-left corner of DevTools so that the icon is highlighted (blue).

1.  In the rendered webpage, in the **Donation** section, hover over the **100** button.  The **Inspect** tool overlay appears.

1.  In the rendered webpage, select the **100** button.  In DevTools, the **Elements** tool appears.  The DOM tree shows the `div` element for the **100** button.  The **Styles** pane shows the CSS settings for the element.

1.  To the right of the **Styles** tab, select the **Accessibility** tab.  The **Accessibility Tree** for the element is displayed, expanded.

:::image type="complex" source="../media/a11y-testing-accessibility-tree.msft.png" alt-text="Donation form button in the Accessibility Tree tool" lightbox="../media/a11y-testing-accessibility-tree.msft.png":::
    Donation form button in the Accessibility Tree tool
:::image-end:::

Any element in the tree that doesn't have a name, or has a role of `generic` (such as the `div` element) is a problem, because that element won't be available to keyboard users, or to users who are using assistive technology.

### Tab order

Another issue is the odd tabbing order of the document, where keyboard users access the navigation menu on the left after tabbing through all the `More` links.  The menu is meant to be a shortcut to reach deep into the page content, but because you need to go through the whole page to reach the menu, the menu becomes useless.

The reason for the confusing `Tab` key order is that the source order of the document determines the order of keyboard access.  If you look at the source code of the document, the menu appears *after* the main content of the webpage; the menu only shows up visually above the main content of the webpage because the menu has been positioned using CSS.

You can test issues with `Tab` key order by using the **Source order viewer** in the **Accessibility** tool.  The **Source order viewer** is an experimental feature; for more information, see [Source order viewer](../experimental-features/index.md#source-order-viewer).

1.  If the demo webpage is not open, open the [demo webpage with accessibility issues][DevToolsA11yErrorsDemopage] in a new tab.  Then select `F12` to open DevTools.

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


## Testing color accessibility

In addition to the automatic color-contrast tests shown earlier, you can also use the **Inspect** tool to check whether individual page elements have enough contrast.  If contrast information is available, the information pane shows the following:
*  The contrast ratio.
*  A green checkbox icon for elements with enough contrast.
*  A yellow alert icon for elements that don't have enough contrast.

For example, the in-page menu elements of the demo page such as the **Cats** button have enough contrast, but the green `Dogs` link in the `Donation status` section does not have enough contrast.

In some cases, contrast is affected by setting the browser to light theme or dark theme.  Most sections of this article assume that the browser is set to dark theme.

1.  If the demo webpage is not open, open the [demo webpage with accessibility issues][DevToolsA11yErrorsDemopage] in a new tab.  Then select `F12` to open DevTools.

1.  Select the **Inspect** \(![Inspect](../media/inspect-icon.msft.png)\) icon in the top-left corner of DevTools so that the icon is highlighted (blue).

1.  In the rendered webpage, hover over the blue **Cats** button.  The **Inspect** tool overlay appears, showing a green checkmark on the **Contrast** row.

    :::image type="complex" source="../media/a11y-testing-enough-contrast.msft.png" alt-text="The menu items have enough contrast, as shown in the Inspect tool" lightbox="../media/a11y-testing-enough-contrast.msft.png":::
        The menu items have enough contrast, as shown in the Inspect tool
    :::image-end:::

1.  In the rendered webpage, in the **Donation Status** section, hover over the **Dogs** link.  The **Inspect** tool overlay appears, showing an orange exclamation point on the **Contrast** row.

    :::image type="complex" source="../media/a11y-testing-not-enough-contrast.msft.png" alt-text="An element that doesn't have enough contrast, as shown by the warning in the Inspect tool" lightbox="../media/a11y-testing-not-enough-contrast.msft.png":::
        An element that doesn't have enough contrast, as shown by the warning in the Inspect tool
    :::image-end:::

### Testing the states of the elements

The information in the Inspect overlay isn't quite enough, because the elements on the page could have different states, and you need to test those states, too.  For example, when you hover the mouse pointer over the menu of the page, you get a rather involved animation that changes the colors.

1.  If the demo webpage is not open, open the [demo webpage with accessibility issues][DevToolsA11yErrorsDemopage] in a new tab.

1.  Hover over the various buttons in the menu which begins with the blue **Cats** button.  The menu animations run.

:::image type="complex" source="../media/a11y-testing-hover.msft.png" alt-text="The menu item showing different colors when the mouse pointer is over it" lightbox="../media/a11y-testing-hover.msft.png":::
    The menu item showing different colors when the mouse pointer is over it
:::image-end:::

If you turn on the Inspect tool, you can't reach the state of the menu element to test the contrast ratio, because the `hover` state in your styles never gets triggered.  Animations of the demo menu items don't occur when you hover over them, when the Inspect tool is active.

1.  Select `F12` to open DevTools.

1.  Select the **Inspect** \(![Inspect](../media/inspect-icon.msft.png)\) icon in the top-left corner of DevTools so that the icon is highlighted (blue).

1.  Hover over the various buttons in the menu which begins with the blue **Cats** button.  The animations for the buttons don't run; instead, the buttons are highlighted in the way that is standard for the Inspect tool.

Instead of hovering, you need to simulate the state of the menu item using the state simulation in the **Styles** pane, as follows:

1.  Select the **Inspect** \(![Inspect](../media/inspect-icon.msft.png)\) icon in the top-left corner of DevTools so that the icon is highlighted (blue).

1.  In the rendered webpage, select the blue **Cats** button in the menu.  The **Elements** tool appears, with the element `<a href="#cats">Cats</a>` selected.

    :::image type="complex" source="../media/a11y-testing-inspecting-link-to-hover.msft.png" alt-text="Inspecting the element that has a hover state in the Elements tool" lightbox="../media/a11y-testing-inspecting-link-to-hover.msft.png":::
        Inspecting the element that has a hover state in the Elements tool
    :::image-end:::

1.  Select the **Styles** tab.  This `a` element has a `hover` state in the CSS that is applied to it.  This element is affected by the CSS rule `#sidebar nav li a:hover` in `styles.css`.

1.  In the **Styles** pane, select the **Toggle Element State** button, indicated by **:hov**.  The **Force element state** group of checkboxes appears.

    :::image type="complex" source="../media/a11y-testing-state-simulation.msft.png" alt-text="The state simulation tool showing all the options" lightbox="../media/a11y-testing-state-simulation.msft.png":::
        The state simulation tool showing all the options
    :::image-end:::

1.  Select the **:hover** checkbox.  In the DOM, to the left of the element `<a href="#cats">Cats</a>`, a yellow dot appears, indicating that the element has a simulated state.  The **Cats** menu item now appears in the webpage approximately as if the pointer was hovering over it.  The animation might partly run.

    :::image type="complex" source="../media/a11y-testing-hover-simulated.msft.png" alt-text="DevTools simulating a hover state" lightbox="../media/a11y-testing-hover-simulated.msft.png":::
        DevTools simulating a hover state
    :::image-end:::

    After the simulated state is applied, you can use the **Inspect** tool again to check the contrast of the element when the user hovers over it, as follows.  In this case, the contrast isn't high enough.

1.  Select the **Inspect** \(![Inspect](../media/inspect-icon.msft.png)\) icon in the top-left corner of DevTools so that the icon is highlighted (blue).

1.  Hover over the blue **Cats** button (now light blue, due to the simulated hover animation).  The **Inspect** overlay appears, showing an orange exclamation point in the **Contrast** row.

    :::image type="complex" source="../media/a11y-testing-hover-contrast-testing.msft.png" alt-text="Testing the contrast of an element in a simulated hover state" lightbox="../media/a11y-testing-hover-contrast-testing.msft.png":::
        Testing the contrast of an element in a simulated hover state
    :::image-end:::

State simulation is also a good way to check if you considered different user needs.  In the case of this **Toggle Element State** (**:hov**) menu, you can find out that simulating the `:focus` state makes no difference to the look and feel, and that is a problem, as we experienced earlier when using the keyboard to navigate the document.


## Testing for different environments

Test for visual accessibility, including:
*  Dark mode and light mode.
*  Color perception.
*  Simulating blurred vision.
*  Animations.

Testing for these considerations is described below.

### Dark theme and light theme

Another consideration when it comes to color accessibility is that there could be different themes that you need to test for contrast issues.  Most operating systems come with a dark mode and a light mode, and you can react to this setting in your CSS by using a media query.

Our demo page also has a light theme and a dark theme.  You can test these themes without having to change your operating system, by using the `prefers-color-scheme` CSS options in the `Rendering` tool, as described in the article [Dark or Light Color Scheme simulation][DevToolsColorSchemeSimulation].

So far, we looked at the demo page with an OS using a dark theme setting.  If we simulate a light scheme and refresh the webpage, the **Issues** tool shows six color-contrast problems instead of two:

<!-- add steps for the reader to do to produce this state -->

:::image type="complex" source="../media/a11y-testing-simulating-light-mode.msft.png" alt-text="Using the Rendering tool to simulate a light mode and triggering the other theme of the document" lightbox="../media/a11y-testing-simulating-light-mode.msft.png":::
    Using the Rendering tool to simulate a light mode and triggering the other theme of the document
:::image-end:::

:::image type="complex" source="../media/a11y-testing-new-contrast-issues-in-light-mode.msft.png" alt-text="New contrast issues detected because of the change to light theme" lightbox="../media/a11y-testing-new-contrast-issues-in-light-mode.msft.png":::
    New contrast issues detected because of the change to light theme
:::image-end:::

The "Donation status" section of the page is unreadable in light mode, and needs to change.  But this is only one of the issues with the "Donation status" part of the design.

:::image type="complex" source="../media/a11y-testing-donation-state-light-contrast.msft.png" alt-text="The Donation Status section flagged as a set of contrast issues in light mode" lightbox="../media/a11y-testing-donation-state-light-contrast.msft.png":::
    The **Donation Status** section flagged as a set of contrast issues in light mode
:::image-end:::

### Color perception

The different donation states use color (red, green, yellow) as the only means to differentiate between the states of funding. You can't expect all of your users to experience these colors as intended though. If you use the [vision deficiencies emulation][DevToolsVisionDeficiencies] feature of DevTools you can find out that this is not good enough as you can simulate how people with different vision would perceive your design.

<!-- add steps for the reader to do to produce this state -->

:::image type="complex" source="../media/a11y-testing-simulating-protanopia.msft.png" alt-text="Showing the document as if someone with protanopia would see it" lightbox="../media/a11y-testing-simulating-protanopia.msft.png":::
    Showing the document as if someone with protanopia would see it
:::image-end:::

### Simulating blurred vision

Another interesting feature of this tool is that you can simulate blurred vision.  When you choose this option from the tool, you can see that the drop shadow on the text in the upper menu makes it really hard to read the menu items.

<!-- add steps for the reader to do to produce this state -->

:::image type="complex" source="../media/a11y-testing-simulating-blur.msft.png" alt-text="Simulating a blurred page can also show a lot of accessibility issues" lightbox="../media/a11y-testing-simulating-blur.msft.png":::
    Simulating a blurred page can also show a lot of accessibility issues
:::image-end:::

### Animations

Another setting that operating systems provide is a way to turn off animations.  Animations can help the usability of a product, but they can also cause a lot of problems, ranging from distraction to confusion and even nausea.  That's why your products should not show animations to a user who turned off animations in their operating system.

In CSS, you can use a media query to check whether the user wants to see animations, and then show or turn off animations accordingly.  And, like with dark mode and light mode, there is a way to [simulate reduced motion using DevTools][DevToolsReducedMotion].

In the demo page here, turning off animations will stop the smooth scrolling of the document when you select different parts of the menu.  This is achieved by wrapping the smooth-scrolling setting in CSS in a media query:

<!-- are there steps for the reader to do?  does the demo page code contain this css?  does the user need to activate a setting? -->

```css
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}
```

:::image type="complex" source="../media/a11y-testing-simulating-reduced-motion.msft.png" alt-text="Simulating reduced motion and the CSS that makes sure that smooth scrolling only happens when the user wants it" lightbox="../media/a11y-testing-simulating-reduced-motion.msft.png":::
    Simulating reduced motion and the CSS that makes sure that smooth scrolling only happens when the user wants it
:::image-end:::

The animation of the menu items, of the `More` links, and of the headers of each section still appear even when the user doesn't want to see animations. So this is yet another thing that needs to be fixed.


## What to do next?

We've covered quite a few tools you can use to make sure that you catch accessibility problems in your products, ranging from automated checks, detail checks, and simulation of different states and environments.  Automated tools can't find all the problems in a product, because many of the accessibility barriers show up in interaction.

None of these tools can replace a proper testing round of your products, with people using assistive technologies and following a plan to check for all the required tests. At Microsoft we're using the [Assessments][AccessibilityInsightsAssessment] feature of [Accessibility Insights][AccessibilityInsights] for that accessibility testing, and we have a fixed process that each product needs to go through before it ends up in the hands of end users.  There are many more checks that are needed, such as:
*   Testing when zoomed-in.
*   Testing with screenreaders.
*   Testing with voice recognition.
*   Testing in high-contrast mode.

The tools and processes that are shown in this article are a way to get started and avoid the most prominent mistakes.  Another excellent way to find out if you are doing things incorrectly while you develop them is to use the [webhint extension for Visual Studio Code][WebhintForCode], in Visual Studio Code.  This extension flags accessibility problems in your source code and gives insights on how to fix them.

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
[DevToolsA11yErrorsDemopage]: https://microsoftedge.github.io/DevToolsSamples/a11y-testing/page-with-errors.html
[W3CContrastRatio]: https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio
[WCAG]: https://www.w3.org/TR/WCAG21/
[AccessibilityInsightsAssessment]: https://accessibilityinsights.io/docs/en/web/getstarted/assessment/
[AccessibilityInsights]: https://accessibilityinsights.io
[Lighthouse]: https://developers.google.com/web/tools/lighthouse/
[WebhintForCode]:https://aka.ms/webhint4code
