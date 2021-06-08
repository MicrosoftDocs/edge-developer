---
description: Check for keyboard support by using the Tab and Enter keys.
title: Check for keyboard support by using the Tab and Enter keys
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/07/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Check for keyboard support by using the Tab and Enter keys


Not all users have a pointer or touch device, and not all users can see the web projects we create.  This is why it is important that the user interface works at least with a keyboard.  Ensure you can use the `Tab` key to move the focus to each form control on a webpage, and ensure you can use the `Enter` key to submit forms.

You can test the usability of a webpage for keyboard users in several ways:
*  By using the keyboard, particularly the `Tab`, `Shift`+`Tab`, and `Enter` keys.  This approach is described in this article.
*  Check for keyboard support for an individual element by using the **Inspect** tool.  The Inspect tool's information overlay includes an **Accessibility** section that includes a **Keyboard-focusable** row.  
*  Check the **Issues** report's **Accessibility** section for keyboard support issues.

To check the demo page for accessibility issues by using a keyboard rather than a mouse, perform the following steps:

1.  Open the [accessibility-testing demo webpage][DevToolsA11yErrorsDemopage] in a new tab of the browser.

1.  Use a keyboard to navigate the demo document, using the `Tab` and `Shift`+`Tab` keys to jump from element to element.  On the demo webpage, the `Tab` key first moves focus to the search form in the `header` section.

1.  Select `Tab` to put focus on a button, and then select `Enter` to click the focused button.  For example, in the demo page, select `Tab` to put focus on the **Search** field, and then select `Enter` to submit the search.  This approach produces the same result as selecting the **go** button.  Selecting `Enter` to send the **Search** form works correctly.

1.  Select `Tab` again.  The next element you put focus on is the first **More** link in the `content` section of the webpage, as indicated by an outline.
    
    :::image type="complex" source="../media/a11y-testing-keyboard-focus-on-element.msft.png" alt-text="Navigating the document using the keyboard and the `Tab` key. Focus is shown on a link in the document." lightbox="../media/a11y-testing-keyboard-focus-on-element.msft.png":::
        Navigating the document using the keyboard and the tab key. Focus is shown on a link in the document.
    :::image-end:::
    
1.  Select `Tab` several more times until you pass the last **More** link.  The page scrolls up and you seem to be on an element of the page, but there's no way to tell which element it is.

1.  Notice the URL in the bottom left.  If you look to the bottom left of the screen (or if you use a screen reader), you realize that you are on the sidebar navigation menu with blue links, because the browser shows the URL that the **Cats** link points to (`#cats`).

    :::image type="complex" source="../media/a11y-testing-lack-of-focus-style.msft.png" alt-text="A lack of focus style makes it impossible to know where you currently are in the document. The only hint is the display of the link target in the bottom left corner of the screen" lightbox="../media/a11y-testing-lack-of-focus-style.msft.png":::
        A lack of focus style makes it impossible to know where you currently are in the document. The only hint is the display of the link target in the bottom left corner of the screen.
    :::image-end:::

1.  Select `Tab` again, to get to the entry field in the donation form.  However, you can't reach the buttons above the textbox by selecting `Tab`. You can't use the keyboard to put focus on the **50**, **100**, or **200** buttons and then select them.  Also, selecting `Enter` doesn't submit the donation form.

    :::image type="complex" source="../media/a11y-testing-form-field-with-outline.msft.png" alt-text="The only keyboard-accessible element in the donation form is the text entry field" lightbox="../media/a11y-testing-form-field-with-outline.msft.png":::
        The only keyboard-accessible element in the donation form is the text entry field
    :::image-end:::
    
1.  Selecting `Tab` again puts focus on the top navigation bar of the page, with menu buttons for **Home**, **Adopt a Pet**, **Donate**, **Jobs**, and **About Us**.  Select `Tab` or `Shift`+`Tab` to put focus on a menu button, as indicated by a focus outline.  Then select `Enter` to access that section of the webpage.

    :::image type="complex" source="../media/a11y-testing-menu-with-outline.msft.png" alt-text="The main menu has a highlight and a focus outline, and thus is keyboard-accessible" lightbox="../media/a11y-testing-menu-with-outline.msft.png":::
        The main menu has a highlight and a focus outline, and thus is keyboard-accessible
    :::image-end:::
    
Based on the above walkthrough, we found the following issues that need to be fixed.

*  When using a keyboard, the blue links of the sidebar navigation menu don't visually indicate which link has focus.  For more information, navigate to [Analyze the lack of indication of keyboard focus in a sidebar menu](test-analyze-no-focus-indicator.md).

*  In the donation form, the amount buttons and the **Donate** button don't work with a keyboard.  For more information, navigate to [Analyze the lack of keyboard support in a form](test-analyze-no-keyboard-support.md).

*  The order of the keyboard access through sections of the page is not correct.  You navigate through all the **More** links in the document before you reach the sidebar navigation menu.  By the time the `Tab` key puts focus on the sidebar navigation menu, you have already traversed all the page content. The sidebar navigation menu was intended to provide easy access to the page content.  For more information on how to solve this issue, navigate to [Test keyboard support using the Source Order Viewer](test-tab-key-source-order-viewer.md).


## See also

*  [Overview of accessibility testing using DevTools](accessibility-testing-in-devtools.md)


## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  


<!-- links -->
[DevToolsA11yErrorsDemopage]: https://microsoftedge.github.io/DevToolsSamples/a11y-testing/page-with-errors.html "Accessibility-testing demo webpage | GitHub"
