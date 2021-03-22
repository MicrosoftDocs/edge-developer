---
description: Learn how to filter console messages
title: Get started with filtering messages in the Console
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 03/22/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
    
# Filter Console messages 

If you surf the web these days you will find that the **Console** is flooded with all kind of information. Often these are not relevant to you. Like information logged by the developers during debugging that went into the live project. Or a lot of information about violations and warnings about the performance of the current site that you can't change. This is why it makes sense to get used to the filtering options of **Console** to drown out some of the noise.

## Filtering by log level  

Each method of the `console` object has a severity level attached to it. These are `Verbose`, `Info`, `Warning`, or `Error`. You can look these up in the [API documentation][DevtoolsConsoleAPI]. For example, `console.log()` is an `Info`-level message, whereas `console.error()` is an `Error`-level message.  

You can filter messages in the Console using the **Log Levels** dropdown. You can toggle the state of each level and they are turned off when there is no check-mark next to them any longer.

:::image type="complex" source="../media/console-filtering-dropdown.msft.png" alt-text="The dropdown to filter Console messages by log level" lightbox="../media/console-filtering-dropdown.msft.png":::
    The dropdown to filter Console messages by log level
:::image-end:::  


[DevtoolsConsoleAPI]: ./api.md

In the following example you can see that by filtering the different types of log level, you can cut down the noise immensely.

For example, in the following screenshot you can see that there are dozens of messages as there is no filter applied.

:::image type="complex" source="../media/console-filtering-show-all.msft.png" alt-text="" lightbox="../media/console-filtering-show-all.msft.png":::
    No filter set means you can see a lot of console messages     
:::image-end:::  

You can select to hide all the warning level messages to cut down on the noise. Go to the **Log Levels** dropdown and uncheck the `Warnings` level.

:::image type="complex" source="../media/console-filtering-hide-warning.msft.png" alt-text="By hiding all the warning level messages in the Console you can filter out a lot of the noise" lightbox="../media/console-filtering-hide-warning.msft.png":::
    By hiding all the warning level messages in the Console you can filter out a lot of the noise     
:::image-end:::  

## Filtering by text  

If you want to go into even more detail, you can filter messages by text by typing a string into the **Filter** text box. For example, typing `block` into the box only shows you messages about the browser blocking resources from loading.

:::image type="complex" source="../media/console-filtering-text.msft.png" alt-text="Only showing messages that contain the word 'block'" lightbox="../media/console-filtering-text.msft.png":::
    Only showing messages that contain the word 'block'     
:::image-end:::  

## Filtering by regular expression

[Regular expressions][MDNRegularExpressions] are a powerful way to filter messages. For example, you can type `/^Tracking/` into the **Filter** text box to only show messages that start with the word "Tracking". If you are unfamiliar with regular expressions, [RegExr][RegExrMain] is a great resource to learn about using them.

:::image type="complex" source="../media/console-filtering-regex.msft.png" alt-text="Only showing messages that start with the word 'filter' by using a regular expression in the Filter text box" lightbox="../media/console-filtering-regex.msft.png":::
    Only showing messages that start with the word 'filter' by using a regular expression in the Filter text box     
:::image-end:::  


## Filter by message source  

You can also define what kind of messages you want to see and where they came from by using the **Sidebar** of the Console. To do this, activate the **Show Console Sidebar** icon. 

:::image type="complex" source="../media/console-filtering-sidebar-icon.msft.png" alt-text="Opening the Sidebar by activating the sidebar icon" lightbox="../media/console-filtering-sidebar-icon.msft.png":::
    Opening the Sidebar by activating the sidebar icon     
:::image-end:::  

When the **Sidebar** is open you can see the overall amount of messages and where they originated from. The options are `All messages`, `User Messages`, `Errors`, `Warnings`, `Info` and `Verbose`. 

:::image type="complex" source="../media/console-filtering-sidebar-open.msft.png" alt-text="The console sidebar showing the different sources messages originated from" lightbox="../media/console-filtering-sidebar-open.msft.png":::
    The console sidebar showing the different sources messages originated from     
:::image-end:::  

You can select any of them and you will only get messages of that type. For example, if you only want to see user messages, select that option and you will see that a lot of the noise is gone.

:::image type="complex" source="../media/console-filtering-select-user-messages.msft.png" alt-text="Selecting to only see user messages in the Console by filtering in the Sidebar" lightbox="../media/console-filtering-select-user-messages.msft.png":::
    Selecting to only see user messages in the Console by filtering in the Sidebar     
:::image-end:::  

You can filter even more by expanding the choice by activating the triangle icon next to it. That way you get more choices to only show messages that originate from a certain source. 

:::image type="complex" source="../media/console-filtering-sidebar-open-arrow.msft.png" alt-text="Selecting the arrow icon expands each of the sections" lightbox="../media/console-filtering-sidebar-open-arrow.msft.png":::
    Selecting the arrow icon expands each of the sections 
:::image-end:::  

:::image type="complex" source="../media/console-filtering-user-message-by-source.msft.png" alt-text="Selecting any of the new options allows you to filter not only by type but also by source" lightbox="../media/console-filtering-user-message-by-source.msft.png":::
    Selecting any of the new options allows you to filter not only by type but also by source 
:::image-end:::  
     
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