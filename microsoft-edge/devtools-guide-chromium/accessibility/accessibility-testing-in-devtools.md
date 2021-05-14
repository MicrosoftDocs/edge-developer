---
description: Getting started for testing for accessibility problems using DevTools
title: Overview of accessibility testing using DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/06/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Overview of accessibility testing using DevTools

In this article, we cover some of the features you can use in DevTools to test for accessibility problems.  As an example, we use a demo page that has some accessibility problems, and we go through using different features of DevTools to detect and fix them.

:::image type="complex" source="../media/a11y-testing-basics-demopage.msft.png" alt-text="The demo page used in this article with a few accessibility issues" lightbox="../media/a11y-testing-basics-demopage.msft.png":::
    The demo page used in this article with a few accessibility issues
:::image-end:::

This article is an overview of the accessibility-testing features of DevTools.  For a list of accessibility tests and which features of DevTools to use for each test, along with specific steps to use each feature, navigate to[Accessibility-testing features in DevTools](reference.md).

Open the [demo page with accessibility issues][DevToolsA11yErrorsDemopage] in a new tab to try it out yourself and you can test along.  Detailed steps are provided in linked articles.


## Automated testing by using the Issues tool

When you open the demo page in the browser and open DevTools, the first thing you see is some automatically detected problems flagged in the **Issues counter**.  Select the **Issues counter** \(![Issues counter](../media/issues-counter-icon.msft.png)\) to open the [Issues tool][DevToolsIssuesTool] to see what the problems are, along with explanations.

:::image type="complex" source="../media/a11y-testing-issues-tracker.msft.png" alt-text="The Issues counter shows how many problems there are in the current webpage, and opens the Issues tool" lightbox="../media/a11y-testing-issues-tracker.msft.png":::
    The Issues counter shows how many problems there are in the current webpage, and opens the Issues tool
:::image-end:::

For the purpose of this article, in the **Issues** tool, let's focus on the **Accessibility** section.

:::image type="complex" source="../media/a11y-testing-accessibility-issues.msft.png" alt-text="Accessibility warnings displayed in the Issues tool" lightbox="../media/a11y-testing-accessibility-issues.msft.png":::
    Accessibility warnings displayed in the Issues tool
:::image-end:::

For detailed walkthrough steps, navigate to [View the Accessibility section of the Issues tool](test-issues-tool.md#view-the-accessibility-section-of-the-issues-tool).


### Automatically checking that input fields have labels

The first warning displayed is "Form elements must have labels: Element has no title attribute. Element has no placeholder attribute".  When you expand this section and then select the **Open in Elements** link, the **Elements** tool opens, with the element highlighted in the DOM tree.  The **Styles** tab shows the CSS that's applied to the element.

:::image type="complex" source="../media/a11y-testing-inspect-problematic-element.msft.png" alt-text="Elements tool showing the problematic HTML after selecting the link in the Issues tool" lightbox="../media/a11y-testing-inspect-problematic-element.msft.png":::
    Elements tool showing the problematic HTML after selecting the link in the Issues tool
:::image-end:::

In this case, the HTML has a `label` element that doesn't work.

```html
<label>Search</label>
<input type="search">
<input type="submit" value="go">
```

The use of the `label` element here is wrong, because there is no connection between the `label` element and the `input` element.  You can also test this by selecting the **Search** label in the rendered page.  A valid HTML label would put focus on the search input textbox when you select the **Search** label.  You either need to nest the `input` element within the `label` element, or add a `for` attribute pointing to an `id` attribute of the `input` element.

You can also select the explanatory links in the **Issues** tool to get this information.

:::image type="complex" source="../media/a11y-testing-more-information-links.msft.png" alt-text="Links in the Issues tool pointing to more in-depth information about the issue" lightbox="../media/a11y-testing-more-information-links.msft.png":::
    Links in the **Issues** tool pointing to more in-depth information about the issue
:::image-end:::

For detailed walkthrough steps, navigate to [Check that input fields have labels](test-issues-tool.md#check-that-input-fields-have-labels).


### Automatically checking that images have alt text

The other automatically detected problem is that many of the images in the page don't have any alternative text.  If you expand the "Images must have alternate text: Element has no title attribute" warning, you get four instances of images with that problem.

:::image type="complex" source="../media/a11y-testing-images-without-alt.msft.png" alt-text="The Issues tool, reporting images with missing alternative text" lightbox="../media/a11y-testing-images-without-alt.msft.png":::
    The **Issues** tool, reporting images with missing alternative text
:::image-end:::

For detailed walkthrough steps, navigate to [Check that images have alt text](test-issues-tool.md#check-that-images-have-alt-text).


### Automatically checking that text colors have enough contrast

Furthermore, in the **Issues** tool, you also find that two elements on the page don't have enough contrast.

:::image type="complex" source="../media/a11y-testing-contrast-issues.msft.png" alt-text="Contrast problems reported in the Issues tool" lightbox="../media/a11y-testing-contrast-issues.msft.png":::
    Contrast problems reported in the **Issues** tool
:::image-end:::

You get detailed explanations of what that means, and when you drill down, you get a list of which elements they are.  In the **Issues** tool, selecting a link that points to an element highlights the element in the rendered page.

:::image type="complex" source="../media/a11y-testing-element-with-contrast-issues.msft.png" alt-text="Element in the page highlighted after selecting the link to it" lightbox="../media/a11y-testing-element-with-contrast-issues.msft.png":::
    Element in the page highlighted after selecting the link to it
:::image-end:::

For detailed walkthrough steps, navigate to [Check that text colors have enough contrast](test-issues-tool.md#check-that-text-colors-have-enough-contrast).



### Checking that the webpage layout is usable when narrow

By making the window narrow and using the arrow keys to scroll the page, you can also see that the top navigation menu of the page has some usability issues (such as overlapping controls) that need fixing.

To check page layout and usability by using the **Device Emulation** tool, see [Emulate mobile devices in Microsoft Edge DevTools](../device-mode/index.md).


### Wavy underlines in the DOM tree indicate automatically detected issues

The DOM tree in the **Elements** tool automatically flags issues directly in the HTML by adding a wavy underline.  If you **Shift+click** any element that has a wavy underline, the **Issues** tool opens.

:::image type="complex" source="../media/a11y-testing-wavy-underlines.msft.png" alt-text="An element that is shown with wavy underlining in the DOM tree has issues.  Shift+click the element to get directly to the issue" lightbox="../media/a11y-testing-wavy-underlines.msft.png":::
    An element that is shown with wavy underlining in the DOM tree has issues.  **Shift+click** the element to get directly to the issue.
:::image-end:::

These are some relatively obvious accessibility problems that can be avoided.  Using the **Issues** tool and its guided explanations to fix them sets you on the way towards an accessible product.


## Limits of automated testing

Getting an automated report from a tool such as [the Issues tool][DevToolsIssuesTool], [Accessibility Insights][AccessibilityInsights], or [Lighthouse][Lighthouse] is only the beginning of your accessibility-testing journey.

Accessibility is about human interaction—people with different needs using various technical environments using your products.  This testing can't be fully automated, but needs verification by a human navigating the product.  In the best scenario, you'd have access to testers with different accessibility needs, and testers using various environments.  But you can already do a lot yourself by using the keyboard to navigate and by inspecting different parts of the page.

There are a lot more issues in this demo page that automated testing doesn't catch:
*  Some issues only show up when you interact with the page.
*  Other issues show up when you change the way the page is displayed, such as making the window narrow.
*  Other issues occur in such a way that the automated scan of the page couldn't even detect that there is a problem.

One of those issues is the donation form.  When you use a mouse, you can click the different options to donate money.  But when you try to use the keyboard to access the donation form, nothing happens.

:::image type="complex" source="../media/a11y-testing-basics-donation-form-issue.msft.png" alt-text="Donation form in the demo page" lightbox="../media/a11y-testing-basics-donation-form-issue.msft.png":::
    Donation form in the demo page
:::image-end:::

To find out what is going wrong, you need to use the **Inspect** tool.


## Using the Inspect tool to detect accessibility issues

Use the **Inspect** tool to detect accessibility issues by hovering over parts of the webpage.  The **Inspect** \(![Inspect](../media/inspect-icon.msft.png)\) tool is in the top-left corner of DevTools.  Turn on the **Inspect** tool by selecting the **Inspect** tool button:

:::image type="complex" source="../media/a11y-testing-basics-inspector.msft.png" alt-text="Turn on the Inspect tool by selecting the Inspect tool button" lightbox="../media/a11y-testing-basics-inspector.msft.png":::
    Turn on the **Inspect** tool by selecting the **Inspect** tool button
:::image-end:::

After you select the **Inspect** tool button, you can move your pointer over the rendered page and highlight any element.  DevTools shows element dimensions as a color overlay, and shows element details as an information overlay:

:::image type="complex" source="../media/a11y-testing-basics-inspector-overlay.msft.png" alt-text="DevTools showing element dimensions as a color overlay, and element details as an information overlay" lightbox="../media/a11y-testing-basics-inspector-overlay.msft.png":::
    DevTools showing element dimensions as a color overlay, and element details as an information overlay
:::image-end:::

The **Inspect** tool shows a colored overlay of the layout properties of the element, including any sub-areas.  For detailed steps, see [Using the Inspect tool for color highlighting of sub-areas by hovering over the webpage](test-inspect-tool.md#using-the-inspect-tool-for-color-highlighting-of-sub-areas-by-hovering-over-the-webpage).

The **Inspect** tool also displays an information overlay.  The upper section of the **Inspect** overlay displays the following information:

* Layout positioning; if the element is positioned using flexbox or grid, you see an appropriate icon \(![Grid layout icon](../media/grid-icon.msft.png)\).
* The name of the element, such as **a**, **h1**, or **div**.
* The dimensions of the element, in pixels.
* The color, as a color swatch (a small, colored square) and as a formatted value (such as `#336699`).
* Font information (size and font families).
* Margin and padding, in pixels.

For detailed walkthrough steps, navigate to [Use the Inspect tool to detect accessibility issues by hovering over the webpage](test-inspect-tool.md).


### Checking individual elements for text contrast, screen reader text, and keyboard support

The **Accessibility** section of the **Inspect** overlay contains the following:

*   **Contrast** defines whether an element can be understood by people with impaired vision.
    *   The [contrast ratio][W3CContrastRatio] as defined by the [WCAG Guidelines][WCAG] indicates whether there is enough contrast (a green check mark icon) or not enough (an orange exclamation-point icon).

*   **Name** and **Role** indicate what information assistive technology, such as screen readers, will report about the element.
    *   The **Name** is the text content of an `a` element.  For the element `<a href="/">About Us</a>`, the **Name** shown in the Inspect tool is "About Us".
    *   The **Role** of the element.  This is usually the element name, such as `article`, `img` , `link`, or `heading`.  The `div` and `span` elements are represented as `generic`.

*   **Keyboard-focusable** indicates whether users can reach the element regardless of input device.
    *   A green check mark icon indicates that the element is keyboard-focusable.
    *   A gray circle with diagonal line indicates that the element isn't keyboard-focusable.

For detailed walkthrough steps, navigate to [Check individual elements for text contrast, screen reader text, and keyboard support](test-inspect-tool.md#check-individual-elements-for-text-contrast-screen-reader-text-and-keyboard-support).


### Using the Inspect tool to hover over the webpage to highlight the DOM and CSS

When the **Inspect** tool is active, selecting any element in the rendered page opens the **Elements** tool, showing the HTML of the element in the DOM tree and showing the applied CSS properties in the **Styles** tab.

:::image type="complex" source="../media/a11y-testing-basics-inspector-selected-element.msft.png" alt-text="Details about the selected element displayed in the Elements tool" lightbox="../media/a11y-testing-basics-inspector-selected-element.msft.png":::
    Details about the selected element displayed in the Elements tool
:::image-end:::

When the **Inspect** tool is active, as you hover over different parts of the rendered page while the **Elements** tool is open, the DOM tree automatically refreshes.

For detailed walkthrough steps, navigate to [Using the Inspect tool to hover over the webpage to highlight the DOM and CSS](test-inspect-tool.md#using-the-inspect-tool-to-hover-over-the-webpage-to-highlight-the-dom-and-css).


## Checking for keyboard support by using the Tab and Enter keys

Not all users have a pointer or touch device, and not all users are able to see the web projects we create.  This is why it is important that all our interfaces work at least with a keyboard.

You can test this by using a keyboard to navigate the page, pressing **Tab** or **Shift+Tab** to jump from element to element.  If you press **Tab** on the demo page, the first thing that receives focus is the **Search** form in the page header.  Pressing **Enter** even allows you to submit the form, so that works, despite the label issue we discovered earlier when using the **Issues** tool.

For detailed walkthrough steps, navigate to [Check for keyboard support by using the Tab and Enter keys](test-tab-enter-keys.md).

When you press **Tab** instead of **Enter**, the next element that gets focus is the first **More** link in the content section of the page, as indicated by an outline.

:::image type="complex" source="../media/a11y-testing-keyboard-focus-on-element.msft.png" alt-text="Navigating the page by pressing Tab.  Focus is shown on a More link in the page." lightbox="../media/a11y-testing-keyboard-focus-on-element.msft.png":::
    Navigating the page by pressing **Tab**.  Focus is shown on a **More** link in the page.
:::image-end:::

After you go past the last **More** link, the page scrolls up again and you seem to be on some element, but you don't know which.

If you look to the bottom left of the screen (or if you use a screen reader), you can tell that you are on the blue **Cats** button of the sidebar navigation menu, because the browser shows the URL (`#cats`) that the link points to, there.

:::image type="complex" source="../media/a11y-testing-lack-of-focus-style.msft.png" alt-text="A lack of focus styling makes it impossible to know where you currently are in the page.  The only hint is the display of the link target in the bottom left of the window." lightbox="../media/a11y-testing-lack-of-focus-style.msft.png":::
    A lack of focus styling makes it impossible to know where you currently are in the page.  The only hint is the display of the link target in the bottom left of the window.
:::image-end:::

Pressing **Tab** again takes you to the input textbox of the donation form.  However, you can't reach the **50**, **100** or **200** buttons above the input textbox.  Also, when focus is on that input textbox, pressing **Enter** doesn't submit the form.

:::image type="complex" source="../media/a11y-testing-form-field-with-outline.msft.png" alt-text="The only keyboard-accessible element in the donation form is the entry text field" lightbox="../media/a11y-testing-form-field-with-outline.msft.png":::
    The only keyboard-accessible element in the donation form is the text field
:::image-end:::

Pressing **Tab** again puts focus on the top navigation bar, where you can press **Enter** to go to a different section of the page or a different page of the site.  You know which element you are on, because there is a focus outline.  To select a link in the top navigation bar, press **Tab** or **Shift+Tab** to put focus on a link, and then press **Enter**.

:::image type="complex" source="../media/a11y-testing-menu-with-outline.msft.png" alt-text="The top navigation bar has a highlight and a focus outline, and thus is keyboard-accessible" lightbox="../media/a11y-testing-menu-with-outline.msft.png":::
    The top navigation bar has a highlight and a focus outline, and thus is keyboard-accessible
:::image-end:::

We found some issues here to fix:

* The sidebar navigation menu doesn't show the user where the **Tab** focus is, when using a keyboard to move around in the page.
* In the donation form, the buttons and submitting the form don't work with a keyboard.
* The order of the keyboard access seems wrong.  The **Tab** key navigates through all the **More** links in the article sections of the page before you reach the sidebar navigation menu.  This makes the sidebar navigation menu pointless, because you already navigated through all the content sections that the navigation menu is supposed to provide easy access to.

Let's analyze these problems using DevTools.


## Analyzing keyboard accessibility issues by using DevTools


### Analyzing the lack of indication of keyboard focus in the sidebar menu

If you use the **Inspect** tool to highlight a button in the sidebar navigation menu, and then drill down in the DOM tree to the `a` element, you can start to find out why the sidebar navigation menu is confusing to keyboard users.

:::image type="complex" source="../media/a11y-testing-menu-link.msft.png" alt-text="Inspecting the source code and the applied styles of a link in the sidebar navigation menu" lightbox="../media/a11y-testing-menu-link.msft.png":::
    Inspecting the source code and the applied styles of a link in the sidebar navigation menu
:::image-end:::

In the **Styles** tab, you can see the CSS that's applied to the link, and if you select the link to the CSS file, `styles.css` opens in the **Sources** tool.

:::image type="complex" source="../media/a11y-testing-menu-link-styles.msft.png" alt-text="The styles that are applied to the link, shown in the Sources tool" lightbox="../media/a11y-testing-menu-link-styles.msft.png":::
    The styles that are applied to the link, shown in the Sources tool
:::image-end:::

The problem is that although the styles of the page have a `hover` state that shows you which menu item you are on when you use a mouse, there is no `focus` state to go along with it, for when you use a keyboard.  Even worse, the links have an `outline: none` setting in the CSS.  This is a common practice, to remove the outline that browsers automatically add to elements when you put focus on them using a keyboard.  As you can see here, this lack of `focus` styling can cause confusion.

For detailed walkthrough steps, navigate to [Analyze the lack of indication of keyboard focus in a sidebar menu](test-analyze-no-focus-indicator.md).


### Analyzing the lack of keyboard support in the donation form

Debugging the donation form requires understanding why the lack of focus styling doesn't get flagged as a problem by automatic testing, such as the **Issues** tool: the buttons are implemented using the `div` element, which is not recognized by tools as a control on a form.

To investigate this, you can use the **Inspect** tool to hover over the donation form's buttons.  The result is that none of them are keyboard-accessible, as indicated by the gray ring.  The buttons of the donation form also have no name, and have a role of `generic` (representing `div` or `span` elements), which means they aren't accessible to assistive technology.

:::image type="complex" source="../media/a11y-testing-donation-button-info.msft.png" alt-text="Inspecting the buttons of the form shows that they aren't keyboard-accessible" lightbox="../media/a11y-testing-donation-button-info.msft.png":::
    Inspecting the buttons of the form shows that they aren't keyboard-accessible
:::image-end:::

For detailed walkthrough steps, navigate to [Analyzing the lack of keyboard support in a form](test-analyze-no-keyboard-support.md).

If you select the **Donate** button, the **Inspect** tool takes you to the **Elements** tool and shows you the form's HTML:

```HTMl
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

The use of `label` and `input` elements here is valid, and the label functions.  The `input` textbox is also keyboard-accessible.  The rest of the form's markup are `div` elements, which are easy to style but have no semantic meaning.

The form's functionality is created with JavaScript, which you can view by using the **Event Listeners** tab in the **Elements** tool.  The **Event Listeners** tab shows where the JavaScript is that makes the form work:

:::image type="complex" source="../media/a11y-testing-event-handlers-on-button.msft.png" alt-text="The Event Listeners tab, showing where the JavaScript is that makes the form work" lightbox="../media/a11y-testing-event-handlers-on-button.msft.png":::
    The **Event** Listeners tab, showing where the JavaScript is that makes the form work
:::image-end:::

On the **Event Listeners** tab, select the `buttons.js:18` link to open the **Sources** tool, and then inspect the applied JavaScript that's responsible for the form's functionality:

:::image type="complex" source="../media/a11y-testing-form-handling-javascript.msft.png" alt-text="The JavaScript that's responsible for the donation form's functionality, shown in the Sources tool" lightbox="../media/a11y-testing-form-handling-javascript.msft.png":::
    The JavaScript that's responsible for the donation form's functionality, shown in the **Sources** tool
:::image-end:::

Using a `click` event to read the buttons is good practice, because a `click` event fires both on mouse pointer and keyboard interaction.  However, because a `div` element isn't keyboard-accessible, and this **Donate** button is implemented as a `div` element, this JavaScript functionality only executes when using a mouse.

This is a classic example where some extra JavaScript was necessary to create functionality that `button` elements would have provided natively, and simulating their functionality ended up as an inaccessible experience.


### Checking the Accessibility Tree for keyboard and screen reader support

Using the **Inspect** tool to individually check each element of the page can become pretty time-consuming.  An alternative way is to use the **Accessibility** tab to navigate the page's **Accessibility Tree**.  The Accessibility Tree indicates what information the page provides to assistive technology such as screen readers.

:::image type="complex" source="../media/a11y-testing-accessibility-tree.msft.png" alt-text="Donation form button in the Accessibility Tree" lightbox="../media/a11y-testing-accessibility-tree.msft.png":::
    Donation form button in the **Accessibility Tree**
:::image-end:::

Any element in the tree that doesn't have a name, or that has a role of `generic`, is a problem, because that element won't be available to keyboard users or to people using assistive technology.

For detailed walkthrough steps, navigate to [Check the Accessibility Tree for keyboard and screen reader support](test-accessibility-tree.md).


### Analyzing the order of keyboard access through sections of the page

Another issue you may remember is the strange tabbing order within the page, where keyboard users access the sidebar navigation menu on the left only after tabbing through all the **More** links.  The sidebar navigation menu is meant to be a shortcut to reach deep into the page content.  But because you need to go through the entire page before you reach the sidebar navigation menu, that navigation menu becomes useless.

The reason is that the source order of the document determines the order of keyboard access.  In the source code of the document, the sidebar navigation menu appears after the main content of the page.  The only reason that the sidebar navigation menu appears above the main content of the page is that the sidebar navigation menu has been positioned using CSS.

You can test issues like that using the **Source Order Viewer** in the **Accessibility** tab.  Scroll all the way down and select the **Show Source Order** checkbox.  Now when you navigate the DOM tree in the **Elements** tool, such as selecting the `header` element, numeric overlays are shown on sections of the rendered page, showing you the source order without having to navigate around using a keyboard.

:::image type="complex" source="../media/a11y-testing-source-order-viewer.msft.png" alt-text="Turning on the Source Order Viewer shows the order of the elements in the source code as numeric overlays on the page" lightbox="../media/a11y-testing-source-order-viewer.msft.png":::
    Turning on the Source Order Viewer shows the order of the elements in the source code as numeric overlays on the page
:::image-end:::

For detailed walkthrough steps, navigate to [Test keyboard support using the Source Order Viewer](test-tab-key-source-order-viewer.md).


## Testing contrast of text colors during various states

### Checking text color contrast in the default state

In addition to the automatic color contrast tests shown earlier, you can also use the **Inspect** tool to check whether individual page elements have enough contrast.  If contrast information is available, the **Inspect** overlay shows the contrast ratio and a green checkbox icon for elements that have enough contrast, and a yellow alert icon for those that don't.

For example, the buttons in the sidebar navigation menu have enough contrast, but the green **Dogs** list item in the **Donation status** section does not.

:::image type="complex" source="../media/a11y-testing-enough-contrast.msft.png" alt-text="The buttons in the sidebar navigation menu have enough contrast, as shown in the Inspect overlay" lightbox="../media/a11y-testing-enough-contrast.msft.png":::
    The buttons in the sidebar navigation menu have enough contrast, as shown in the **Inspect** overlay
:::image-end:::

An element that doesn't have enough contrast is flagged by a warning in the **Inspect** overlay:

:::image type="complex" source="../media/a11y-testing-not-enough-contrast.msft.png" alt-text="An element that doesn't have enough contrast is flagged by a warning in the Inspect overlay" lightbox="../media/a11y-testing-not-enough-contrast.msft.png":::
    An element that doesn't have enough contrast is flagged by a warning in the **Inspect** overlay
:::image-end:::

However, this isn't quite enough testing, because the elements on the page could have different states and you need to test those, too.  For example, if you hover the mouse over the sidebar navigation menu, you get a rather involved animation that changes the button colors:

:::image type="complex" source="../media/a11y-testing-hover.msft.png" alt-text="The menu item showing different colors when the mouse pointer is over it" lightbox="../media/a11y-testing-hover.msft.png":::
    The menu item showing different colors when the mouse pointer is over it
:::image-end:::

For detailed walkthrough steps, navigate to [Check text-color contrast in the default state using the Inspect tool](test-inspect-text-contrast.md).


### Checking accessibility during all states of elements, such as contrast during hover

When you turn on the **Inspect** tool, you can't reach the `hover` state of the **Cats** button in the sidebar navigation menu to test the contrast ratio during the `hover` state, because the `hover` state in your styles never gets triggered.  Instead, you need to simulate the state of the **Cats** menu item, by using the state simulation in the **Styles** tab.

For detailed walkthrough steps, navigate to [Check accessibility during all states of elements](test-inspect-states.md).

Turn on the **Inspect** tool and then in the rendered page, select the blue **Cats** button in the sidebar navigation menu.  The **Elements** tool opens, with the `a` element selected in the DOM tree.  If needed, in the DOM tree, navigate to the element that has a `hover` state in the CSS applied to it.  In this case, this is the `a` element.

:::image type="complex" source="../media/a11y-testing-inspecting-link-to-hover.msft.png" alt-text="Inspecting the element that has a hover state in the Elements tool" lightbox="../media/a11y-testing-inspecting-link-to-hover.msft.png":::
    Inspecting the element that has a hover state in the Elements tool
:::image-end:::

Select the **\:hov (Toggle Element State)** button, and then use the **Force element state** checkboxes to choose which state to simulate.

:::image type="complex" source="../media/a11y-testing-state-simulation.msft.png" alt-text="The state simulation feature showing all the options" lightbox="../media/a11y-testing-state-simulation.msft.png":::
    The state simulation feature showing all the options
:::image-end:::

Select the **\:hover** checkbox.  A yellow dot now appears next to the DOM element, indicating that the DOM element has a simulated state.  Also, the **Cats** button in the sidebar navigation menu is now highlighted in the page, as if the mouse pointer were hovering over it.

:::image type="complex" source="../media/a11y-testing-hover-simulated.msft.png" alt-text="DevTools simulating a hover state" lightbox="../media/a11y-testing-hover-simulated.msft.png":::
    DevTools simulating a hover state
:::image-end:::

After the simulated state is applied, you can use the **Inspect** tool again to check the contrast of the element when the user hovers over it.  In this case, the contrast isn't high enough.

:::image type="complex" source="../media/a11y-testing-hover-contrast-testing.msft.png" alt-text="Testing the contrast of an element in a simulated hover state" lightbox="../media/a11y-testing-hover-contrast-testing.msft.png":::
    Testing the contrast of an element in a simulated hover state
:::image-end:::

State simulation is also a good way to check whether you considered different user needs.  In the case of this sidebar navigation menu, you can find out that simulating `:focus` makes no difference to the look and feel, and that is a problem, as we've experienced earlier when using the keyboard to navigate the page.


## Using the Rendering tool to test accessibility for visual impairment

### Checking for contrast issues with dark theme and light theme

Another consideration when it comes to color accessibility is that there could be different themes that you need to test for contrast issues.  Most operating systems these days come with a dark mode and a light mode, and you can react to this setting in your CSS by using a CSS media query.

This demo page has a light and a dark theme, and you can test them without having to change your operating system, by using [Dark or Light Color Scheme simulation][DevToolsColorSchemeSimulation] in the **Rendering** tool.  So far, this article looked at the demo page with an operating system using a dark theme setting.  If we instead simulate selecting a light scheme and then refresh the page, the **Issues** tool shows six color contrast problems instead of two.

For detailed walkthrough steps, navigate to [Check for contrast issues with dark theme and light theme](test-dark-mode.md).

Use the **Rendering** tool to simulate light mode and trigger the other theme of the page:

:::image type="complex" source="../media/a11y-testing-simulating-light-mode.msft.png" alt-text="Using the Rendering tool to simulate light mode and trigger the other theme of the page" lightbox="../media/a11y-testing-simulating-light-mode.msft.png":::
    Using the **Rendering** tool to simulate light mode and trigger the other theme of the page
:::image-end:::

New contrast issues are detected because of the change to light theme:

:::image type="complex" source="../media/a11y-testing-new-contrast-issues-in-light-mode.msft.png" alt-text="New contrast issues detected because of the change to light theme" lightbox="../media/a11y-testing-new-contrast-issues-in-light-mode.msft.png":::
    New contrast issues detected because of the change to light theme
:::image-end:::

The entire **Donation status** section of the page is unreadable in light mode, and needs to change.  But this is only one of the issues with that part of the design.

:::image type="complex" source="../media/a11y-testing-donation-state-light-contrast.msft.png" alt-text="The donation status items flagged as contrast issues when in light mode" lightbox="../media/a11y-testing-donation-state-light-contrast.msft.png":::
    The donation status items flagged as contrast issues when in light mode
:::image-end:::


### Checking that the webpage is usable by people with color blindness

The different donation states use color (red, green, yellow) as the only means to differentiate between the states of funding.  You can't expect all of your users to experience these colors as intended, though.  If you use the [vision deficiencies emulation][DevToolsVisionDeficiencies] feature of DevTools, you can find out that this is not good enough, because you can simulate how people with different vision would perceive your design.

:::image type="complex" source="../media/a11y-testing-simulating-protanopia.msft.png" alt-text="Showing the page as someone with protanopia (red color blindness) would see it" lightbox="../media/a11y-testing-simulating-protanopia.msft.png":::
    Showing the page as if someone with protanopia (red color blindness) would see it
:::image-end:::

For detailed walkthrough steps, navigate to [Check that the page is usable by people with color blindness](test-color-blindness.md).


### Checking that the webpage is usable with blurred vision

Another interesting feature of the **Rendering** tool is that you can simulate blurred vision.  If we choose the **Blurred vision** option from the **Emulate vision deficiencies** dropdown list, we can see that the drop shadow on the text in the upper menu makes it really hard to read the menu items.

:::image type="complex" source="../media/a11y-testing-simulating-blur.msft.png" alt-text="Simulating a blurred page can reveal accessibility issues" lightbox="../media/a11y-testing-simulating-blur.msft.png":::
    Simulating a blurred page can reveal accessibility issues
:::image-end:::

For detailed walkthrough steps, navigate to [Check that the page is usable with blurred vision](test-blurred-vision.md).


### Checking that the page is usable with UI animation turned off (reduced motion)

Another setting that operating systems come with these days are a way to turn off animations.  Animations can help the usability of a product, but they can also cause a lot of problems, ranging from confusion to nausea. That's why your products should not show animations to users who turned them off in the operating system.  By using a CSS media query, you can check whether the user wants to see animations, and turn them off accordingly.  And, much like with dark and light mode, there is a way to [simulate reduced motion using DevTools][DevToolsReducedMotion].

In the demo page here, turning off animations will stop the smooth scrolling of the page when you select different parts of the sidebar navigation menu.  This is achieved by wrapping the smooth scrolling setting in CSS in a media query:

:::image type="complex" source="../media/a11y-testing-simulating-reduced-motion.msft.png" alt-text="Simulating reduced motion and the CSS that makes sure that smooth scrolling only happens when the user wants it" lightbox="../media/a11y-testing-simulating-reduced-motion.msft.png":::
    Simulating reduced motion and the CSS that makes sure that smooth scrolling only happens when the user wants it
:::image-end:::

The animation of the top navigation bar, sidebar navigation menu, and **More** links still run even when the user doesn't want to see animations.  So this is yet another thing that needs to be fixed.

For detailed walkthrough steps, navigate to [Check that the page is usable with UI animation turned off](test-reduced-ui-motion.md).


## What to do next?

We've covered quite a few tools you can use to make sure that you catch accessibility problems in your products, ranging from automated checks and manual detail checks to simulation of different states and environments.  For a list of these features, mapped to an accessibility checklist, navigate to [Accessibility-testing features in DevTools][DevtoolsAccessibilityReference].  We also covered the fact that automated tools can't find all the problems in a product, because many of the accessibility barriers show up only during interactive use.

None of these tools can replace a proper testing round of your products with people using assistive technologies and following a plan to check for all the required tests. At Microsoft we're using the [Assessments][AccessibilityInsightsAssessment] feature of [Accessibility Insights][AccessibilityInsights] for that.  We have a defined process that each product needs to go through before it ends up in the hands of end users.  There are many more checks that are needed, such as testing when zoomed-in, testing with screen readers, testing with voice recognition, and testing in high-contrast mode.

That said, we hope that the tools and processes shown here are a way to get you started and avoid the most evident mistakes.  Another excellent way to find out if you are doing things wrong while you develop them is to use the [webhint extension for Visual Studio Code][WebhintForCode].  This extension flags the readily detectable accessibility problems in your source code and gives insights on how to fix them.

:::image type="complex" source="../media/a11y-testing-webhint-in-vs-code.msft.png" alt-text="Webhint in Visual Studio Code, showing an accessibility issue by underlining the HTML element and showing an explanation of the problem" lightbox="../media/a11y-testing-webhint-in-vs-code.msft.png":::
    Webhint in Visual Studio Code, showing an accessibility issue by underlining the HTML element and showing an explanation of the problem
:::image-end:::

We're constantly working on new accessibility features for DevTools.  If there is anything you are missing, send us a message and tell us what we can do.


## Getting in touch with the Microsoft Edge DevTools team

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]


<!-- links -->
[DevtoolsAccessibilityReference]: reference.md "Accessibility-testing features in DevTools | Microsoft Docs"
[DevToolsColorSchemeSimulation]: ./preferred-color-scheme-simulation.md "Dark or Light Color Scheme simulation | Microsoft Docs"
[DevToolsIssuesTool]: ../issues/index.md "Find and fix problems with the Microsoft Edge DevTools Issues tool | Microsoft Docs"
[DevToolsReducedMotion]: ./reduced-motion-simulation.md "Reduced motion simulation | Microsoft Docs"
[DevToolsVisionDeficiencies]: ./emulate-vision-deficiencies.md "Emulate vision deficiencies | Microsoft Docs"
<!-- external links -->
[DevToolsA11yErrorsDemopage]: https://microsoftedge.github.io/DevToolsSamples/a11y-testing/page-with-errors.html "Accessibility-testing demo webpage | GitHub"
[W3CContrastRatio]: https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio "contrast ratio | W3C"
[WCAG]: https://www.w3.org/TR/WCAG21/ "Web Content Accessibility Guidelines | W3C"
[AccessibilityInsightsAssessment]: https://accessibilityinsights.io/docs/en/web/getstarted/assessment/ "Assessment in Accessibility Insights for Web | Accessibility Insights"
[AccessibilityInsights]: https://accessibilityinsights.io "Accessibility Insights"
[Lighthouse]: https://developers.google.com/web/tools/lighthouse/ "Lighthouse | Google"
[WebhintForCode]:https://aka.ms/webhint4code "webhint | Visual Studio Marketplace"
