---
description: Find out how to use the DOM Explorer tool to see the state of your webpage’s DOM, examine HTML structure and CSS styles, and test changes.
title: F12 devtools guide: DOM explorer - Microsoft Edge Development
author: erikadoyle
---

# DOM Explorer

Use the DOM Explorer tool to see the state of your webpage's DOM (Document Object Model), examine HTML structure and CSS styles, and test changes to solve display issues.

## Enter the DOM
HTML and CSS files are the blueprints a browser uses to build the DOM (Document Object Model), which it then uses to render a webpage. The **DOM Explorer** tool shows you a webpage's integrated structure and allows you to change styles, move and edit HTML elements, and change element attributes without having to edit the page's source files.

This helps you diagnose problems in live code when elements aren't in the right place or don't behave as expected, and then work to solve them.




The highlight displays not only the element boundaries *(blue)*, but the boundaries of its padding *(pink)*, borders *(green)*, and margin *(yellow)*. It can be toggled on or off using the second button to the right of the **DOM Explorer** tool's title or by pressing CTRL + SHIFT + I.

### Editing an element
There are three ways to edit an element:

  - **Edit attributes:** You can edit an attribute by double-clicking it; or after selecting the element, by pressing **Enter**, and then tabbing through the attributes.
   When you edit a class attribute, a list of matching classes from your styles are suggested. Double-click a suggestion or navigate to it with your arrow keys and press **Tab** or **Enter** to select it.

  - **Add an attribute:** Right-click the element and click **Add attribute**.

  - **Edit as HTML:** Right-click the element and click **Edit as HTML**. The element and its child elements appear as plain text inside a bounding box. Edit the text just as you might in a text editor and then click anywhere outside the box to commit your changes.



This image shows an element's color and the chain of color attributes from parent elements that are being overridden. If a particular property on an element isn't as expected, you can use this visual hierarchy to discover where the property is coming from and what it's overriding.

In the **Computed** tab, properties can be edited or toggled on or off using the check boxes beside them. Turning off the currently active property activates the next property in the chain.

Examples of computed values:

  - **Precise calculations / relative to absolute values:** All properties without hardcoded measures, such as calc() expressions, percentages, em or rem units, are shown with the pixel values calculated for them.

    ![Edge Computed Sizes](./media/Edge_DOMExplorer_computedstyles.PNG)

  - **Implied and default values:** The **Computed** styles tab has a **Display user styles only** button ![Display all styles button](./media/F12BlueDOMExplorerDisplayStyles.png).

   When turned on, it shows only user-defined styles. When turned off, it shows the Microsoft Edge default styles and any     implied styles that are being applied to the element. The list can be very long, so a Filter properties box is next to it.  Type text in the box and the properties list will be filtered down to only those that match the text.

#### Change Bars
As you make changes to your properties, **Change Bars** display different colors next to changed (yellow), added (green), and deleted (red) properties.

![Display all styles button](./media/changebars.jpg.md)

### Layout
The **Layout** tab shows a box model diagram for the selected element's positioning with colors matching the highlight around a selected element. You can edit any value in the diagram by clicking it.

![Edge Layout Tab](./media/Edge_DOMExplorer_layout.PNG)

### Events
The **Events** tab shows the element's DOM events or CSS selectors that have handlers assigned to them in JavaScript. The file names can be clicked to show the file in [the Debugger](./debugger.md).

![Events tab](./media/Edge_DOMExplorer_events.PNG)

In the image above, one element's click event is being handled by two functions in two scripts. If you were getting unexpected behavior from clicking that element, it could be because one of the handlers should be listening for events on another element.

### Changes

> [!VIDEO https://channel9.msdn.com/Blogs/One-Dev-Minute/Edge-F12-Tools-for-Tracking-Changes/player]

As you experiment with different layout and style changes in the **DOM Explorer**, it's easy to lose track of everything you changed. The **Changes** tab shows a list of all the changes you've made to the DOM structure and CSS styles in your current session with the **DOM Explorer**. Original and current values are shown with different highlight colors.

If you decide you don't like one of the changes, right-click it and select **Revert item** to reverse that change. If you'd like to copy the style to paste into your source files, use **Copy** to copy a single style or **Copy all** to copy all the changed styles in the list.

![Changes tab](./media/Edge_DOMExplorer_changes.png)

> The **Changes** tab will clear if you close the F12 developer tools, but the changes you made with DOM Explorer persist until you refresh the webpage. For example, you can change the width of an element, close the F12 tools, reopen them, and the element remains at its new width while the Changes tab shows no changes.

### Pseudo state

In the upper-right corner of the **Styles** and **Computed** tabs is an icon resembling **a:**. That's called the "pseudo-state toggle." When turned on, check boxes are shown for the common **:active**, **:focus**, **:hover**, and **:visited** pseudo classes. Checking one of those boxes restyles the element as if that pseudo class is active.

![Changes tab](./media/Edge_DOMExplorer_pseudostate.PNG)

If you want to experiment with CSS for a hover effect, turning on pseudo classes and checking Hover makes the element display as if a mouse is hovering over it until the box is cleared or the page is reloaded. This saves you time when fine-tuning a hover effect in **DOM Explorer**.

## Related topics

[The Document Object Model (DOM)](https://msdn.microsoft.com/library/hh772384.aspx)

[Cascading Style Sheets](https://msdn.microsoft.com/library/ms531209.aspx)

[Microsoft Edge Developer Tools on Twitter: Find helpful F12 hints and news updates](https://twitter.com/EdgeDevTools)
