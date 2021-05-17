---
description: Check for keyboard support by using the Tab and Enter keys.
title: Check for keyboard support by using the Tab and Enter keys
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/13/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Check for keyboard support by using the Tab and Enter keys

<!-- keyboard: Tab, Enter -->

Test the usability of a webpage for keyboard users in several ways:
*  By using the keyboard, particularly the `Tab`, `Shift`+`Tab`, and `Enter` keys.  This approach is described in the current article.
*  Check for keyboard support for an individual element by using the **Inspect** tool.  The Inspect tool's information overlay includes an **Accessibility** section that includes a **Keyboard-focusable** row.  
*  Check the **Issues** report's **Accessibility** section for keyboard support issues.

Not all users have a pointer or touch device, and not all users can see the web projects we create.  This is why it is important that the user interface works at least with a keyboard.  Make sure you can use the `Tab` key to move the focus to each form control on a webpage, and make sure you can use the `Enter` key to activate a form button.


**To check the demo page for accessibility issues by using a keyboard rather than a mouse:**

1.  Open the [accessibility-testing demo webpage][DevToolsA11yErrorsDemopage] in a new tab of the browser.

1.  Use a keyboard to navigate the demo document, using the `Tab` and `Shift`+`Tab` keys to jump from element to element.  On the demo webpage, the `Tab` key first moves focus to the search form in the `header` section.

1.  Select `Tab` to put focus on a button, and then select `Enter` to click the focused button.  For example, in the demo page, select `Tab` to put focus on the **Search** field, and then select `Enter` to submit the search.

    This approach produces the same result as clicking the **go** button.  Selecting `Enter` to send the **Search** form works correctly, despite the `label` element issue that's found by the **Issues tool**.

1.  Select `Tab` again.  The next element you put focus on is the first **More** link in the `content` section of the webpage, as indicated by an outline.
    
    :::image type="complex" source="../media/a11y-testing-keyboard-focus-on-element.msft.png" alt-text="Navigating the document using the keyboard and the `Tab` key. Focus is shown on a link in the document." lightbox="../media/a11y-testing-keyboard-focus-on-element.msft.png":::
        Navigating the document using the keyboard and the tab key. Focus is shown on a link in the document.
    :::image-end:::
    
1.  Select `Tab` several more times until you go past the last **More** link.  The page scrolls up again and you seem to be on some element of the page, but you don't know which element.

1.  Notice the URL in the bottom left.  If you look to the bottom left of the screen (or if you use a screen reader), you realize that you are on the sidebar navigation menu with blue buttons, because the browser shows the URL that the `a` link of the blue **Cats** button points to (`#cats`).

    :::image type="complex" source="../media/a11y-testing-lack-of-focus-style.msft.png" alt-text="A lack of focus style makes it impossible to know where you currently are in the document. The only hint is the display of the link target in the bottom left corner of the screen" lightbox="../media/a11y-testing-lack-of-focus-style.msft.png":::
        A lack of focus style makes it impossible to know where you currently are in the document. The only hint is the display of the link target in the bottom left corner of the screen.
    :::image-end:::

1.  Select `Tab` again, to get to the entry field in the donation form.  However, you can't reach the buttons above the textbox by selecting `Tab`; you can't use the keyboard to put focus on the **50**, **100**, or **200** buttons and then to click them.  Also, selecting `Enter` doesn't submit the donation form.

    :::image type="complex" source="../media/a11y-testing-form-field-with-outline.msft.png" alt-text="The only keyboard-accessible element in the donation form is the text entry field" lightbox="../media/a11y-testing-form-field-with-outline.msft.png":::
        The only keyboard-accessible element in the donation form is the text entry field
    :::image-end:::
    
1.  Selecting `Tab` again puts focus on the top navigation bar of the page, with menu buttons for **Home**, **Adopt a Pet**, **Donate**, **Jobs**, and **About Us**.  Select `Tab` or `Shift`+`Tab` to put focus on a menu button, as indicated by a focus outline.  Then select `Enter` to access that section of the webpage.

    :::image type="complex" source="../media/a11y-testing-menu-with-outline.msft.png" alt-text="The main menu has a highlight and a focus outline, and thus is keyboard-accessible" lightbox="../media/a11y-testing-menu-with-outline.msft.png":::
        The main menu has a highlight and a focus outline, and thus is keyboard-accessible
    :::image-end:::
    
We found some issues here to fix:

*  When using a keyboard, the sidebar navigation menu with blue buttons doesn't visually indicate which button has focus.  This issue is covered in [Analyze the lack of indication of keyboard focus in a sidebar menu](test-analyze-no-focus-indicator.md).

*  In the donation form, the amount buttons and the **Donate** button don't work with a keyboard.  This issue is covered in [Analyze the lack of keyboard support in a form](test-analyze-no-keyboard-support.md).

*  The order of the keyboard access through sections of the page seems wrong.  You navigate through all the **More** links in the document before you reach the sidebar navigation menu with blue buttons.  This makes the sidebar navigation menu pointless.  By the time the `Tab` key puts focus on the sidebar navigation menu, you already traversed all the content that the sidebar navigation menu was supposed to provide easy access to.  This issue is analyzed in [Test keyboard support using the Source Order Viewer](test-tab-key-source-order-viewer.md).


## See also

*  [Overview of accessibility testing using DevTools](accessibility-testing-in-devtools.md)


## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  


<!-- links -->
[DevToolsA11yErrorsDemopage]: https://microsoftedge.github.io/DevToolsSamples/a11y-testing/page-with-errors.html "Accessibility-testing demo webpage | GitHub"
