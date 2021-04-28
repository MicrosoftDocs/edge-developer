---
description: Learn how to filter console messages
title: Get started with filtering messages in the Console
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/13/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Filter Console messages  

When you surf the web, you may find the **Console** is flooded with all kinds of information.  Often the information isn't relevant to you.  Such as information about the live project that another developer logged while you debug.  Or more information about violations and warnings about the performance of the current site that you aren't able to change.  It makes sense to use the filter options of **Console** to reduce the noise.  

## Filter by log level  

Each method of the `console` object has a severity level attached to it.  The severity levels are `Verbose`, `Info`, `Warning`, or `Error`.  Display the severity levels in the [API documentation][DevtoolsConsoleApi].  For example, `console.log()` is an `Info`-level message, but `console.error()` is an `Error`-level message.  

To filter messages in the **Console**, use the **Log Level** dropdown menu.  You may toggle the state of each level.  To turn off each level, remove the checkmark next to each.  

:::image type="complex" source="../media/console-filter-dropdown.msft.png" alt-text="The dropdown menu filters Console messages using the log level" lightbox="../media/console-filter-dropdown.msft.png":::
    The dropdown menu filters **Console** messages using the log level  
:::image-end:::  

Since no filter is applied, the following figure displays dozens of messages.  Next, reduce and manage the number of messages.  

:::image type="complex" source="../media/console-filter-displays-all.msft.png" alt-text="No filter set means you may display many console messages" lightbox="../media/console-filter-displays-all.msft.png":::
    No filter set means you may display many console messages  
:::image-end:::  

Choose to hide all the Warning-level messages to cut down on the noise.  Navigate to the **Log Levels** dropdown and uncheck the `Warnings` level.  

:::image type="complex" source="../media/console-filter-hide-warning.msft.png" alt-text="Hide all the warning level messages in the Console to filter much of the noise" lightbox="../media/console-filter-hide-warning.msft.png":::
    Hide all the warning level messages in the **Console** to filter much of the noise  
:::image-end:::  

## Filter by text  

If you want to review more detail, to filter messages using text, type a string into the **Filter** textbox.  For example, type `block` into the box to only display your messages about the browser blocking resources from loading.

:::image type="complex" source="../media/console-filter-text.msft.png" alt-text="Displays the messages that contain the word block" lightbox="../media/console-filter-text.msft.png":::
    Displays the messages that contain the word `block`  
:::image-end:::  

## Filter by regular expression

[Regular expressions][MdnDocsWebJavascriptGuideRegularExpressions] are a powerful way to filter messages.  For example, type `/^Tracking/` into the **Filter** textbox to only displays messages that start with the term `Tracking`.  If you're unfamiliar with regular expressions, [RegExr][RegExrMain] is a great resource to learn about using regular expressions.

:::image type="complex" source="../media/console-filter-regex.msft.png" alt-text="Displays the messages that start with the word filter using a regular expression in the Filter textbox" lightbox="../media/console-filter-regex.msft.png":::
    Displays the messages that start with the word `filter` using a regular expression in the **Filter** textbox  
:::image-end:::  

## Filter by message source  

You may also define what kind of messages you want to display and where each originated using the **Sidebar** of the **Console**.  To do it, choose the **Show console sidebar** button.  

:::image type="complex" source="../media/console-filter-sidebar-icon.msft.png" alt-text="To open the Sidebar, choose the Sidebar icon" lightbox="../media/console-filter-sidebar-icon.msft.png":::
    To open the **Sidebar**, choose the **Show console sidebar** button  
:::image-end:::  

When the **Sidebar** is open, you may display the overall number of messages and where each originated.  The options are `All messages`, `User Messages`, `Errors`, `Warnings`, `Info`, and `Verbose`.  

:::image type="complex" source="../media/console-filter-sidebar-open.msft.png" alt-text="The Console Sidebar displays the different sources messages originated from" lightbox="../media/console-filter-sidebar-open.msft.png":::
    The **Console Sidebar** displays the different sources messages originated from  
:::image-end:::  

Choose any of the options to display only the messages of that type.  For example, to display user messages, choose the user messages option to display less noise.

:::image type="complex" source="../media/console-filter-select-user-messages.msft.png" alt-text="Choose to display only user messages in the Console using the filter in the Sidebar" lightbox="../media/console-filter-select-user-messages.msft.png":::
    Choose to display only user messages in the **Console** using the filter in the **Sidebar**  
:::image-end:::  

To filter more and expand the choice, choose the triangle icon next to it.  That way you get more choices to display only messages that originate from a specific source.  

:::image type="complex" source="../media/console-filter-sidebar-open-arrow.msft.png" alt-text="Choose the arrow icon expands each of the sections" lightbox="../media/console-filter-sidebar-open-arrow.msft.png":::
    Choose the arrow icon expands each of the sections  
:::image-end:::  

:::image type="complex" source="../media/console-filter-user-message-by-source.msft.png" alt-text="Choose any of the new options to filter using type and source" lightbox="../media/console-filter-user-message-by-source.msft.png":::
    Choose any of the new options to filter using type and source  
:::image-end:::  

## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  

[DevtoolsConsoleApi]: ./api.md "Console API reference | Microsoft Docs"  

[MdnDocsWebJavascriptGuideRegularExpressions]: https://developer.mozilla.org/docs/Web/JavaScript/Guide/Regular_Expressions "Regular Expressions | MDN"  

[RegExrMain]: https://regexr.com "RegExr"  
