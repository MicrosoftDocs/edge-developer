---
description: Learn how to log messages to the Console.
title: Get started with logging messages in the Console
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 02/12/2021 
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
    
# Filter Console messages 

If you surf the web these days you will find that the **Console** is flooded with all kind of information. Often these are not relevant to you. Like information logged by the developers during debugging that went into the live project. Or a lot of information about violations and warnings about the performance of the current site that you can't change. This is why it makes sense to get used to the filtering options of **Console** to drown out some of the noise.

## Filtering by log level  

Each method of the `console` object has a severity level attached to it. These are `Verbose`, `Info`, `Warning`, or `Error`. You can look these up in the [API documentation][DevtoolsConsoleAPI]. For example, `console.log()` is an `Info`-level message, whereas `console.error()` is an `Error`-level message.  

You can filter messages in the Console using the **Log Levels** dropdown. You can toggle the state of each level and they are turned off when there is no checkmark next to them any longer.

In the following example you can see that by filtering the different types of log level, you can cut down the noise immensely.

For example, in the following screenshot you can see that there are X messages as there is no filter applied.

:::image type="complex" source="../media/console-filtering-show-all.msft.png" alt-text="No filter set means you can see all console messages" lightbox="../media/console-filtering-show-all.msft.png":::
    No filter set means you can see a lot of console messages     
:::image-end:::  

You can select to hide all the info level messages to cut down on the noise. Go to the **Log Levels** dropdown and uncheck the `warning` level.

:::image type="complex" source="../media/console-filtering-hide-warning.msft.png" alt-text="By hiding all the warning level messages in the Console you can filter out a lot of the noise" lightbox="../media/console-filtering-hide-warning.msft.png":::
    By hiding all the warning level messages in the Console you can filter out a lot of the noise     
:::image-end:::  

## Filtering by text  

When you want to only view messages that include an exact string, type that string into the **Filter** text box.  

1.  Type `Dave` into the **Filter** text box.  All messages that do not include the string `Dave` are hidden.  You may also review the `Adolescent Irradiated Espionage Tortoises` label.  That is a bug.  
    
    :::image type="complex" source="../media/console-all-messages-text-filter.msft.png" alt-text="" lightbox="../media/console-all-messages-text-filter.msft.png"`Dave`  
    :::image-end:::  
    
1.  Delete `Dave` from the **Filter** text box.  All the messages reappear.  

## Filter by regular expression  

When you want to show all messages that include a pattern of text, rather than a specific string, use a [regular expression][MDNRegularExpressions].  

1.  Type `/^[AH]/` into the **Filter** text box.  Type the pattern into [RegExr][RegExrMain] for an explanation of what it is doing.  
    
    :::image type="complex" source="../media/console-all-messages-regex-filter.msft.png" alt-text="Filtering out any message that does not match a pattern" lightbox="../media/console-all-messages-regex-filter.msft.png":::
       Filtering out any message that does not match the pattern `/^[AH]/`  
    :::image-end:::  
    
1.  Delete `/^[AH]/` from the **Filter** text box.  All messages are visible again.  

## Filter by message source  

When you want to only view the messages that came from a certain URL, use the **Sidebar**.  

1.  Choose **Show Console Sidebar** \(![Show Console Sidebar][ImageShowConsoleSidebarIcon]\).  
    
    :::image type="complex" source="../media/console-sidebar-all-messages.msft.png" alt-text="The Sidebar" lightbox="../media/console-sidebar-all-messages.msft.png":::
       The Sidebar  
    :::image-end:::  
    
1.  Choose the **Expand** \(![Expand][ImageExpandIcon]\) icon next to the number of messages.  In the following figure, the number of messages is indicated as **13 Messages**.  The **Sidebar** shows a list of URLs that caused messages to be logged.  For example, `log.js` caused 11 messages.  
    
    :::image type="complex" source="../media/console-sidebar-expanded-all-messages.msft.png" alt-text="Viewing the source of messages in the Sidebar" lightbox="../media/console-sidebar-expanded-all-messages.msft.png":::
       Viewing the source of messages in the Sidebar  
    :::image-end:::  
    
## Filter by user messages  

Earlier, when you choose **Log Info**, a script named `console.log('Hello, Console!')` in order to log the message to the Console.  Messages logged from JavaScript like this are named **user messages**.  In contrast, when you choose **Cause 404**, the browser logs an `Error`-level message stating that the requested resource is not found.  Messages like that are considered **browser messages**.  Use the **Sidebar** to filter out browser messages and only show user messages.  

1.  Choose **9 User Messages**.  The browser messages are hidden.  
    
    :::image type="complex" source="../media/console-sidebar-user-messages.msft.png" alt-text="Filtering out browser messages" lightbox="../media/console-sidebar-user-messages.msft.png":::
       Filtering out browser messages  
    :::image-end:::  
    
1.  Choose **13 Messages** to show all messages again.  
     
## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- image links -->  

[ImageExpandIcon]: ../media/expand-icon.msft.png  
[ImageShowConsoleSidebarIcon]: ../media/show-console-sidebar-icon.msft.png  

<!-- links -->  

[MDNRegularExpressions]: https://developer.mozilla.org/docs/Web/JavaScript/Guide/Regular_Expressions "Regular Expressions | MDN"  

[RegExrMain]: https://regexr.com "RegExr"  


[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  