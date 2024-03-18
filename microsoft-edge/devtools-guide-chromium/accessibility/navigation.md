---
title: Navigate DevTools with assistive technology
description: A guide on navigating Microsoft Edge DevTools using assistive technology like screen readers.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 06/07/2021
---
<!-- Copyright Rob Dodson

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->
# Navigate DevTools with assistive technology

This article helps you use DevTools through the keyboard and through assistive technology such as screen readers.  This guide walks you through the tools and tabs which are the most accessible, and highlights issues you may encounter.

<!-- DevTools is a suite of web developer tools built into the Microsoft Edge browser. -->

For DevTools features related to improving the accessibility of a webpage, see [Accessibility-testing features](./reference.md).


### Tabbed tool panels containing tabs and pages

For the terminology of tabs, tools, and panels, see [Tabbed tool panels containing tabs and pages](../overview.md#tabbed-tool-panels-containing-tabs-and-pages) in _Overview of DevTools_.

Technically, the tabs are an [ARIA tablist](https://www.w3.org/TR/wai-aria-1.1/#tablist).


<!-- The following are examples of tools:

*  The **Elements** tool lets you [view and change DOM nodes](../dom/index.md#navigate-the-dom-tree-with-a-keyboard) or [CSS](../css/index.md).

*  The **Console** tool lets you read JavaScript logs and live-edit objects.  For more information, see [Console overview](../console/index.md). -->


<!-- ====================================================================== -->
## Keyboard shortcuts

For the default keyboard shortcuts for DevTools, see [Keyboard shortcuts](../shortcuts/index.md).  Be sure to bookmark it and refer back to it as you explore the different tools.


<!-- ====================================================================== -->
## Open DevTools
<!-- keep sync'd:
[Open DevTools](../overview.md#open-devtools) in _Overview of DevTools_
[Open DevTools](accessibility/navigation.md#open-devtools) in _Navigate DevTools with assistive technology_
-->

In Microsoft Edge, you can open DevTools by using the mouse or keyboard, in any of the following ways.  Which tool is opened depends on how you open DevTools.

**Main ways:**

| Action | Resulting tool |
|---|---|
| Right-click any item on a webpage, and then select **Inspect**. | The **Elements** tool, with the DOM tree expanded to show the right-clicked page element. |
| Press **Ctrl+Shift+I** (Windows, Linux) or **Command+Option+I** (macOS).| The previously used tool, or the **Welcome** tool. |
| Press **F12**. | The previously used tool, or the **Welcome** tool. |

**Additional ways:**

| Action | Resulting tool |
|---|---|
| On the Microsoft Edge toolbar, select **Settings and more** (![The 'Settings and more' icon](./navigation-images/edge-settings-and-more-icon.png)) >  **More tools** >  **Developer tools**. | The previously used tool, or the **Welcome** tool. |
| Press **Ctrl+Shift+J** (Windows, Linux) or **Command+Option+J** (macOS). | The **Console** tool. |
| Press **Ctrl+Shift+C** (Windows, Linux) or **Command+Option+C** (macOS). | The **Elements** tool, with the DOM tree expanded to show the `<body>` element. |
| Press **Shift+F10** to open the right-click menu.  To select the **Inspect** command, press **Up Arrow** and then **Enter**. | The **Elements** tool, with the DOM tree expanded to show the `<html>` element. |
| Press **Tab** or **Shift+Tab** to put focus on a page element.  Then press **Shift+F10** to open the right-click menu.  To select the **Inspect** command, press **Up Arrow** and then **Enter**. | The **Elements** tool, with the DOM tree expanded to show the focused page element. |

<!-- /keep sync'd -->


<!-- ====================================================================== -->
## Navigate between tools

You can move among the tools by using the keyboard navigation keys or by using the Command Menu.

### Navigate by keyboard

*  With DevTools open, press **Ctrl+]** (Windows, Linux) or **Command+]** (macOS) to move focus to the next tool on the **Activity Bar**.
*  Press **Ctrl+[** (Windows, Linux) or **Command+[** (macOS) to move focus to the previous tool on the **Activity Bar**.
*  Press **Tab** or **Shift+Tab** repeatedly until focus moves to the tabs of the **Activity Bar** or **Quick View** toolbar, and then use the arrow keys to move among the tools.

#### Known issues

*  Some tools, such as the **Console** and **Performance** tools, may move focus into the tool's content area as soon as the tool is selected.  This may make navigating by arrow keys difficult.

*  The name of the selected tool is announced, but only after announcing the focused content in the tool.  This sequence of announcements may make it easy to miss the name of the tool.

### Navigate by Command Menu

To select a specific tool, use the [Command Menu](../command-menu/index.md).  In the Command Menu, a tool is indicated as either a _Panel_ or _Quick View_ item.

1. With DevTools open, press **Ctrl+Shift+P** (Windows, Linux) or **Command+Shift+P** (macOS) to open the **Command Menu**.

   The **Command Menu** is a fuzzy-search autocomplete combobox.

1. Type the name of a tool, and then use the **Down Arrow** on the keyboard to navigate to the correct option.

1. Press **Enter** to run a command.


To open the **Elements** tool:

1. Open the **Command Menu**.

1. Start typing **elements**, select the **Show Elements** command, and then press **Enter**.

Opening a tool this way puts focus in the content area of the tool.  In the case of the **Elements** tool, focus moves into the **DOM Tree**.


<!-- ====================================================================== -->
## The Elements tool

### Inspect an element on the page

1. Go to the element you want to inspect, using the cursor in the screen reader.

1. Right-click the element and then select the **Inspect** option.  This [opens the Elements tool and focuses the element in the DOM Tree](../dom/index.md#view-dom-nodes).

The **DOM Tree** is laid out as an [ARIA tree](https://www.w3.org/TR/wai-aria-1.1/#tree).  For an example, see [Navigate the **DOM Tree** with a keyboard](../dom/index.md#navigate-the-dom-tree-with-a-keyboard).


### Copy the code for an element in the DOM Tree

1. Right-click a node in the **DOM Tree**.

1. Expand the **Copy** option.

1. Select **Copy outerHTML**.

#### Known issues

*  **Copy outerHTML** often doesn't select the current node, but instead selects the parent node.  However, the contents of the element should still be in the copied `outerHTML`.


### Modify the attributes of an element in the DOM Tree

*  When focus is on a node of the DOM Tree, press **Enter** to edit the node.

*  Press **Tab** to move between attribute values.  When you hear "space", you're inside of an empty text input, and can type a new attribute value.

*  Press **Ctrl+Enter** (Windows, Linux) or **Command+Enter** (macOS) to accept the change and hear the entire contents of the element.

#### Known issues

*  When you type into the text input, you get no feedback.  If you make a typo and use the arrow keys to explore your input, you also get no feedback.  The easiest way to check your work is to accept the change, then listen for the entire element to be announced.


### Edit the HTML of an element in the DOM Tree

*  When focus is on a node of the DOM Tree, press **Enter** to edit the node.

*  Press **Tab** to move between attribute values.  When you hear the name of the element, for instance, `h2`, you're inside of a text input, and you can change the type of the element.

*  Press **Ctrl+Enter** (Windows, Linux) or **Command+Enter** (macOS) to accept the change.

For example, when you type **h3** and then press **Ctrl+Enter** (Windows, Linux) or **Command+Enter** (macOS), the start and end tags of the `h3` element change.


<!-- ====================================================================== -->
## Tabs in the Elements tool

The **Elements** tool contains additional tabs for inspecting things like the CSS applied to an element, or the relevant place in the accessibility tree.

*  When focus is on the DOM Tree, press **Tab** until you hear that the **Styles** pane is selected.

*  Press **Right Arrow** to explore other available tabs.

The **DOM Tree** turns elements with `href` attributes into focusable links, so you may need to press **Tab** more than once to reach the **Styles** pane.


### Known issues

The **DOM Breakpoints** and **Properties** tabs aren't keyboard-accessible.


### Styles pane

The **Styles** pane has controls to filter styles, toggle element states (such as [:active](https://developer.mozilla.org/docs/Web/CSS/:active) and [:focus](https://developer.mozilla.org/docs/Web/CSS/:focus)), toggle classes, and add new classes.  There's also a powerful style inspection tool to explore and modify styles currently applied to the element that has focus in the **DOM Tree**.

The key concept to understand about the **Styles** pane is that it only shows styles for the currently selected node in the **DOM Tree**.  For example, suppose you're done inspecting the styles of a `<header>` node, and now you want to look at the styles for a `<footer>` node.  To do that, you first need to select the `<footer>` node in the **DOM Tree**.

You might find it faster to use the [Inspect](#inspect-an-element-on-the-page) workflow to inspect a node that is in the general vicinity of the `footer` node (such as a link within the footer), which focuses the **DOM Tree**, and then use your keyboard to navigate to the exact node in which you're interested.

#### Navigate the Styles pane

Because all of the style tools connect in one way or another back to the **Styles** pane, it makes sense to become an expert in this tool first.

*  With focus on the **Styles** pane, press **Tab** to move focus inside and explore the contents.

*  Press **Tab** until the first style becomes active.  If you're using a screen reader, this first style is announced as `element.style {}`.

*  Press **Down Arrow** to navigate the list of styles in order of specificity.  A screen reader announces each style starting with the name of the CSS file, the line number on which the style appears, and the name of the style.  For example, `main.css:233 .card__img {}`.

*  Press **Enter** to inspect a style in more detail.  Focus begins on an editable version of the style name.

*  Press **Tab** to move between editable versions of each CSS property and the corresponding values.  At the end of each style block is a blank editable text field which you can use to add additional CSS properties.

*  You can continue to press **Tab** to move through the list of styles, or press **Escape** to exit the mode and go back to navigating by arrow keys.

For additional shortcuts, see [Styles pane keyboard reference](../shortcuts/index.md#styles-pane-keyboard-shortcuts).

##### Known issues

*  If you use the **Filter** editable text field, you can't navigate the list of styles.

#### Toggle element state

To toggle the state of an element, such as `:active` or `:focus`:

1. Go to the **Styles** pane, and then press **Tab** until the **Toggle Element State** button has focus.

1. Press **Enter** to display the **Force element state** section, which contains checkboxes.

1. Press **Tab** until the first state, `:active`, has focus.

1. Press **Spacebar** to select (enable) the checkbox.  If the currently selected element in the DOM Tree has an `:active` style, it is now applied.

1. Press **Tab** to explore all of the available states.

#### Add an existing class

The **Element Classes** button is next to the **Toggle Element State** button.  To move the focus to the **Element Classes** button, press **Tab**, and then press **Enter**.  Focus moves into an edit text field labeled **Add new class**.

The **Element Classes** button is primarily used for adding existing classes to an element.  For example, if your stylesheet contained a helper class named `.clearfix`, you can press `.` inside of the edit text field to display a suggestion list of classes and use the **Down Arrow** to find the `.clearfix` suggestion.  Or type the class name out yourself and press **Enter** to apply it.

#### Add a new style rule

Adjacent to the **Element Classes** button is the **New Style Rule** button.  To move the focus to it, press **Tab** and then press **Enter**.  Focus moves into an editable text field inside of the style inspector.  The initial text content of the field is the tag name of the element that is selected in the **DOM Tree**.
You can type any class name you want into this field and then press **Tab** to assign CSS properties to it.


### Computed tab

With focus on the **Computed** tab, press **Tab** to move focus inside and explore the contents.  Within the **Computed** tab there are controls for exploring which CSS properties are actually applied to an element in order of specificity.

<!--todo: add Computed tab section when available  -->

#### Explore all computed styles

Press **Tab** until you reach the collection of computed styles.  Computed styles are presented as an [ARIA tree](https://www.w3.org/TR/wai-aria-1.1/#tree).  Expanding a listbox reveals which CSS selectors are applying the computed style.  These selectors are organized by specificity.  A screen reader announces the computed value, which CSS selector is currently matching, the file name of the stylesheet that contains the selector, and the line number for the selector.

**Known issues**

*  If you use the **Filter** text field, you're no longer able to inspect styles.


### Event Listeners tab

To inspect the event listeners that are applied to an element, select the **Elements** tool and then select the **Event Listeners** tab (grouped with the **Styles** tab).

When focus is on the **Styles** tab, press **Right Arrow** to navigate to the **Event Listeners** tab.

#### Explore event listeners

Event listeners are presented as an [ARIA tree](https://www.w3.org/TR/wai-aria-1.1/#tree).  You can use the arrow keys to navigate them.  A screen reader announces the name of the DOM object that the event listener is attached to, as well as the file name where the event listener is defined and the line number.


### Accessibility tab

Select the **Tab** key to move around within the **Accessibility** tab in the **Elements** tool.

The **Accessibility** tab is near the **Styles** tab. On the Accessibility tab, there are controls for exploring the accessibility tree, the ARIA attributes applied to an element, and the computed accessibility properties.  See [Test accessibility using the Accessibility tab](accessibility-tab.md).

#### Accessibility Tree

The **Accessibility Tree** is presented as an [ARIA tree](https://www.w3.org/TR/wai-aria-1.1/#tree) where each `treeitem` corresponds to an element in the DOM.  The tree announces the computed role for the selected node.  Generic elements like `div` and `span` are announced as "GenericContainer" in the tree.  Use the arrow keys to traverse the tree and explore parent-child relationships.

**Known issues**

*  The type of [ARIA tree](https://www.w3.org/TR/wai-aria-1.1/#tree) used by the **Accessibility** tab may not be properly exposed in Microsoft Edge for macOS screen readers like VoiceOver.  Subscribe to [Chromium issue #868480](https://bugs.chromium.org/p/chromium/issues/detail?id=868480) to be informed about progress on this issue.
*  Each of the **ARIA Attributes** and **Computed Properties** sections are marked up as an [ARIA tree](https://www.w3.org/TR/wai-aria-1.1/#tree), but each section doesn't currently have focus management, and isn't keyboard-operable.


<!-- ====================================================================== -->
## Persisting the Inspect tool's tooltip and grid color overlay
<!-- keep sync'd:
* [Persisting the Inspect tool's tooltip and grid color overlay](../css/inspect.md#persisting-the-inspect-tools-tooltip-and-grid-color-overlay) in _Analyze pages using the Inspect tool_ -->

When you click the **Inspect** tool button and move around in the rendered webpage, the Inspect tooltip changes.  To keep the current tooltip and grid color overlay displayed, press and hold **Ctrl+Alt** (Windows, Linux) or **Ctrl+Option** (macOS) while you move around in the rendered webpage.

This technique can be helpful when using a screen magnifier or other assistive technologies.  If you don't make the Inspect tool's tooltip persist, the hover overlay constantly changes when you use the **Inspect tool** (![Inspect tool button](./navigation-images/inspect-tool-icon-light-theme.png)).

See [Analyze pages using the Inspect tool](../css/inspect.md).


<!-- ====================================================================== -->
## The Lighthouse tool

**Lighthouse** runs a series of tests against a site to check for common issues related to performance, accessibility, SEO, and a number of other categories.

### Configure and generate a report

1. When the **Lighthouse** tool is first opened in DevTools, focus is placed on the **Generate report** button.  By default, the form is configured to run reports for every category using mobile emulation on a simulated 3G connection.

1. To change the report settings, use **Shift+Tab** to put focus on **Lighthouse settings**, or navigate back in Browse mode.

1. When you're ready to run the report, navigate back to the **Generate report** button and press **Enter**.

1. Focus moves into a modal window with a **Cancel** button which allows you to exit the audit.  You may hear a series of earcons as the audit runs and refreshes the page multiple times.

#### Known issues

*  The different sections of the configuration form aren't currently marked up with a `fieldset` element.  It may be easier to navigate them in Browse mode to figure out which controls are associated with each section.
*  There is no earcon or live region announcement when the audit is finished running.  Generally the audit takes about 30 seconds, after which you should be able to navigate to the results.  Using Browse mode may be the easiest way to reach the results.

### Navigate the Lighthouse report

The Lighthouse report is organized into sections that correspond with each of the audit categories.  The report opens with a list of scores for each category.  These scores are also links which you can use to skip to the relevant sections.  Within each section are expandable `details` elements, which contain information relating to passed or failed audits.  By default, only failing audits are shown.  Each section ends with a final `details` element which contains all of the passed audits.

To run a new audit, use **Shift+Tab** to exit the report and select the **Generate report** button.


<!-- ====================================================================== -->
## See also

* [Keyboard shortcuts](../shortcuts/index.md)
* [Customize keyboard shortcuts](../customize/shortcuts.md)
* [Run commands in the Command Menu](../command-menu/index.md)


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/devtools/accessibility/navigation/) and is authored by [Rob Dodson](https://developers.google.com/web/resources/contributors#rob-dodson) (Contributor, Google WebFundamentals).

[![Creative Commons License](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
