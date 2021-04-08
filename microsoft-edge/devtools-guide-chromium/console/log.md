---
description: Learn how to log messages to the Console.
title: Get started with logging messages in the Console
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/08/2021 
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
<!-- Copyright Kayce Basques 

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->
# Get started with logging messages in the Console  

This article teaches you how to log and filter messages in the [Microsoft Edge DevTools][MicrosoftEdgeDevTools] console.  

:::image type="complex" source="../media/console-ars-technica-console-onload.msft.png" alt-text="Messages in the Console" lightbox="../media/console-ars-technica-console-onload.msft.png":::
   Messages in the **Console**  
:::image-end:::  

This article is intended for you to complete in order.  It assumes you understand the fundamentals of web development, such as how to use JavaScript to add interactivity to a webpage.  

## Set up the demo and DevTools  

This tutorial is designed for you to open the demo webpage and follow along with the workflows.  When you physically follow along, you're more likely to remember the workflows later.  

1.  Hold `Control` \(Windows, Linux\) or `Command` \(macOS\) and choose **Console Log Examples** to open in a new tab.  
    
    [Console Log Examples][GlitchDevToolsConsoleLogExamples]
    
    <!--
    > [!TIP]
    > Move the demo to a separate window.  
    > 
    > :::image type="complex" source="../media/log-set-up-1.msft.png" alt-text="The tutorial on the left, and the demo on the right" lightbox="../media/log-set-up-1.msft.png":::
    >    The tutorial on the left, and the demo on the right  
    > :::image-end:::  
    -->
    
1.  Focus the demo and then select `Control`+`Shift`+`J` \(Windows, Linux\) or `Command`+`Option`+`J` \(macOS\) to open DevTools.  By default DevTools opens to the right of the demo.  
    
    :::row:::
       :::column span="":::
          :::image type="complex" source="../media/console-example-devtools-right-console.msft.png" alt-text="DevTools opens to the right of the demo" lightbox="../media/console-example-devtools-right-console.msft.png":::
             DevTools opens to the right of the demo  
          :::image-end:::  
       :::column-end:::
       :::column span="":::
          > [!TIP]
          > [Dock DevTools to the bottom of the window][DevToolsCustomizePlacement].  
          
          :::image type="complex" source="../media/console-example-devtools-bottom-console.msft.png" alt-text="DevTools docked to the bottom of the demo" lightbox="../media/console-example-devtools-bottom-console.msft.png":::
             DevTools docked to the bottom of the demo  
          :::image-end:::  
       :::column-end:::
    :::row-end:::  
    :::row:::
       :::column span="":::
          > [!TIP]
          > [Undock DevTools into a separate window][DevToolsCustomizePlacement].  
          
          :::image type="complex" source="../media/console-example-devtools-separate-console-browse.msft.png" alt-text="Browser in a separate window" lightbox="../media/console-example-devtools-separate-console-browse.msft.png":::
             Browser in a separate window  
          :::image-end:::  
       :::column-end:::
       :::column span="":::
          > [!TIP]
          > [Undock DevTools into a separate window][DevToolsCustomizePlacement].  
          
          :::image type="complex" source="../media/console-example-devtools-separate-console-devtools.msft.png" alt-text="DevTools undocked in a separate window" lightbox="../media/console-example-devtools-separate-console-devtools.msft.png":::
             DevTools undocked in a separate window  
          :::image-end:::  
       :::column-end:::
    :::row-end:::  
    
## View messages logged from JavaScript  

Most messages in the **Console** are from the web developers who wrote the JavaScript of the webpage.  The goal of the following section is to introduce you to the different message types.  The different message types may include ones you're likely to review in the **Console**.  Also, the following section explains how to log each message type from your own JavaScript.  

1.  Choose the **Log Info** button in the demo.  `Hello, Console!` gets logged to the Console.
    
    :::image type="complex" source="../media/console-log-info.msft.png" alt-text="The Console after you choose Log Info" lightbox="../media/console-log-info.msft.png":::
       The **Console** after you choose **Log Info**  
    :::image-end:::  
    
1.  Next to the `Hello, Console!` message in the **Console**, choose **log.js:2**.  The **Sources** tool opens and highlights the line of code that caused the message to get logged to the **Console**.  The message was logged when the JavaScript of the page ran `console.log('Hello, Console!')`.
    
    :::image type="complex" source="../media/console-sources-logjs.msft.png" alt-text="DevTools opens the Sources tool after you choose log.js:2" lightbox="../media/console-sources-logjs.msft.png":::
       DevTools opens the **Sources** tool after you choose `log.js:2`  
    :::image-end:::  
    
1.  To navigate back to the **Console**, use one of the following actions.  
    
    *   Choose the **Console** tool.  
    *   Select `Control`+`[` \(Windows, Linux\) or `Command`+`[` \(macOS\) until the **Console** tool is in focus.  
    *   [Open the Command Menu][DevToolsCommandMenu], type `Console`, choose the **Show Console Panel** command, and then select `Enter`.  
    
1.  Choose the **Log Warning** button in the demo.  `Abandon Hope All Ye Who Enter` gets logged to the **Console**.  Messages formatted like this are warnings.  
    
    :::image type="complex" source="../media/console-log-warning.msft.png" alt-text="The Console after you choose Log Warning" lightbox="../media/console-log-warning.msft.png":::
       The **Console** after you choose **Log Warning**  
    :::image-end:::  
    
    > [!TIP]
    > If you want to display the code that caused a message to get logged a certain way, choose on a script \(such as `log.js:12`\) to view the code that caused the message to get formatted.  

1.  Choose the **Expand** \(![Expand](../media/expand-icon.msft.png)\) icon in front of `Abandon Hope All Ye Who Enter`.  DevTools
   shows the [stack trace][WikiStackTrace] leading up to the call.  
    
    :::image type="complex" source="../media/console-log-warning-expanded.msft.png" alt-text="A stack trace" lightbox="../media/console-log-warning-expanded.msft.png":::
       A stack trace  
    :::image-end:::  
    
    The stack trace is telling you that a function named `logWarning` is run, which in turn runs a function named `quoteDante`.  In other words, the request that happened first is at the bottom of the stack trace.  You may log stack traces at any time by running `console.trace()`.  

1.  Choose **Log Error**.  The following error message gets logged: `I'm sorry, Dave.  I'm afraid I can't do that.`  
    
    :::image type="complex" source="../media/console-log-error.msft.png" alt-text="An error message" lightbox="../media/console-log-error.msft.png":::
       An error message  
    :::image-end:::  
    
1.  Choose **Log Table**.  A table about famous artists gets logged to the **Console**.  
    
    > [!NOTE]
    > The `birthday` column is only populated for one row.  Review the code to determine why that is.
    
    :::image type="complex" source="../media/console-log-table.msft.png" alt-text="A table in the Console" lightbox="../media/console-log-table.msft.png":::
       A table in the **Console**  
    :::image-end:::  
    
1.  Choose **Log Group**.  The names of 4 famous, crime-fighting turtles are grouped under the `Adolescent Irradiated Espionage Tortoises` label.  
    
    :::image type="complex" source="../media/console-log-group.msft.png" alt-text="A group of messages in the Console" lightbox="../media/console-log-group.msft.png":::
       A group of messages in the **Console**  
    :::image-end:::  
    
1.  Choose **Log Custom**.  A message with a red border and blue background gets logged to the Console.  
    
    :::image type="complex" source="../media/console-log-custom.msft.png" alt-text="A message with custom formatting in the Console" lightbox="../media/console-log-custom.msft.png":::
       A message with custom formatting in the **Console**  
    :::image-end:::  
    
The main idea is that when you want to log messages to the **Console** from your JavaScript, you use one of the `console` methods.  Each method formats the message differently.  

There are even more methods than what has been demonstrated in this section.  This article teaches you how to explore the rest of the methods.  

## View messages logged by the browser  

Also, the browser logs messages to the **Console**.  It usually happens when a problem occurs on the webpage.  

1.  Choose **Cause 404**.  The browser logs an HTTP status code of `404` network error because the JavaScript of the page tried to fetch a file that doesn't exist.  
    
    :::image type="complex" source="../media/console-cause-404.msft.png" alt-text="A 404 error in the Console" lightbox="../media/console-cause-404.msft.png":::
       A `404` error in the **Console**  
    :::image-end:::  
    
1.  Choose **Cause Error**.  The browser logs an uncaught `TypeError` because the JavaScript is trying to update a DOM node that doesn't exist.  
    
    :::image type="complex" source="../media/console-cause-error.msft.png" alt-text="A TypeError in the Console" lightbox="../media/console-cause-error.msft.png":::
       A `TypeError` in the **Console**  
    :::image-end:::  
    
1.  Choose the **Log Levels** dropdown and turn on the **Verbose** option if it's turned off.  You learn more about filtering in the next section.  Ensure that the next message you log is visible.  
    
    > [!NOTE]
    > If the Default Levels dropdown is turned off, you may need to close the **Console** Sidebar.  Filter by Message Source below for more information about the **Console** Sidebar.
    
    :::image type="complex" source="../media/console-cause-error-log-levels.msft.png" alt-text="Enabling the Verbose log level" lightbox="../media/console-cause-error-log-levels.msft.png":::
       Enabling the Verbose log level  
    :::image-end:::  
    
1.  Choose **Cause Violation**.  The page becomes unresponsive for a few seconds and then the browser logs the message `[Violation] 'click' handler took 3000ms` to the Console.  The exact duration may vary.  
    
    :::image type="complex" source="../media/console-cause-violation.msft.png" alt-text="A violation in the Console" lightbox="../media/console-cause-violation.msft.png":::
       A violation in the **Console**  
    :::image-end:::  
    
## Filter messages  

On some webpages you review, the **Console** is flooded with messages.  DevTools provides many different ways to filter out messages that aren't relevant to the task at hand.  

### Filter by log level  

Each `console` method is assigned a severity level: `Verbose`, `Info`, `Warning`, or `Error`.  For example, `console.log()` is an `Info`-level message, but `console.error()` is an `Error`-level message.  

1.  Choose the **Log Levels** dropdown and turn off **Errors**.  A level is turned off when a checkmark isn't displayed next to it.  The `Error`-level messages disappear.  
    
    :::image type="complex" source="../media/console-cause-violation-log-levels.msft.png" alt-text="Turn off Error-level messages in the Console" lightbox="../media/console-cause-violation-log-levels.msft.png":::
       Turn off Error-level messages in the **Console**  
    :::image-end:::  
    
1.  Choose the **Log Levels** dropdown and turn on **Errors** again.  The `Error`-level messages reappear.  

### Filter by text  

When you want to only view messages that include an exact string, type the string into the **Filter** text box.  

1.  Type `Dave` into the **Filter** text box.  All messages that don't include the string `Dave` are hidden.  You may also review the `Adolescent Irradiated Espionage Tortoises` label.  The inclusion of the label is a bug.  
    
    :::image type="complex" source="../media/console-all-messages-text-filter.msft.png" alt-text="Filter out any message that doesn't include Dave" lightbox="../media/console-all-messages-text-filter.msft.png":::
       Filter out any message that doesn't include `Dave`  
    :::image-end:::  
    
1.  Delete `Dave` from the **Filter** text box.  All the messages reappear.  

### Filter by regular expression  

When you want to show all messages that include a pattern of text, rather than a specific string, use a [regular expression][MDNRegularExpressions].  

1.  Type `/^[AH]/` into the **Filter** text box.  Type the pattern into [RegExr][RegExrMain] for an explanation of what it's doing.  
    
    :::image type="complex" source="../media/console-all-messages-regex-filter.msft.png" alt-text="Filtering out any message that doesn't match a pattern" lightbox="../media/console-all-messages-regex-filter.msft.png":::
       Filtering out any message that doesn't match the pattern `/^[AH]/`  
    :::image-end:::  
    
1.  Delete `/^[AH]/` from the **Filter** text box.  All messages are visible again.  

### Filter by message source  

When you want to only view the messages that came from a certain URL, use the **Sidebar**.  

1.  Choose **Show Console Sidebar** \(![Show Console Sidebar](../media/show-console-sidebar-icon.msft.png)\).  
    
    :::image type="complex" source="../media/console-sidebar-all-messages.msft.png" alt-text="The Sidebar" lightbox="../media/console-sidebar-all-messages.msft.png":::
       The Sidebar  
    :::image-end:::  
    
1.  Choose the **Expand** \(![Expand](../media/expand-icon.msft.png)\) icon next to the number of messages.  In the following figure, the number of messages is indicated as **13 Messages**.  The **Sidebar** shows a list of URLs that caused messages to be logged.  For example, `log.js` caused 11 messages.  
    
    :::image type="complex" source="../media/console-sidebar-expanded-all-messages.msft.png" alt-text="Viewing the source of messages in the Sidebar" lightbox="../media/console-sidebar-expanded-all-messages.msft.png":::
       Viewing the source of messages in the Sidebar  
    :::image-end:::  
    
### Filter by user messages  

When you choose **Log Info**, the `console.log('Hello, Console!')` script logs the message to the **Console**.  Messages logged from JavaScript are named **user messages**.  In contrast, when you choose **Cause 404**, the browser logs an `Error`-level message stating that the requested resource isn't found.  Messages like that are considered **browser messages**.  Use the **Sidebar** to filter out browser messages and only show user messages.  

1.  Choose **9 User Messages**.  The browser messages are hidden.  
    
    :::image type="complex" source="../media/console-sidebar-user-messages.msft.png" alt-text="Filtering out browser messages" lightbox="../media/console-sidebar-user-messages.msft.png":::
       Filtering out browser messages  
    :::image-end:::  
    
1.  Choose **13 Messages** to show all messages again.  

## Use the Console alongside any other tools  

If you edit styles, but you need to quickly verify the Console log for something, open the **Console** tool in the **Drawer**.  

1.  Choose the **Elements** tool.  
1.  Select `Escape`.  The **Console** tool in the **Drawer** opens.  It has all of the features of the Console panel that you have been using throughout this tutorial.  
    
    :::image type="complex" source="../media/console-elements-drawer-console-sidebar-all-messages.msft.png" alt-text="The Console tool in the Drawer" lightbox="../media/console-elements-drawer-console-sidebar-all-messages.msft.png":::
         The **Console** tool in the **Drawer**  
    :::image-end:::  
    
## See also  

*   To explore more features and workflows related to the **Console** UI, navigate to [Console Reference][DevToolsConsoleApi].  
*   To learn more about all of the `console` methods demonstrated in [View messages logged from JavaScript](#view-messages-logged-from-javascript) and explore the other `console` methods not covered in this article, navigate to [Console API Reference][DevToolsConsoleReference].  
<!--*   Navigate to [Get Started](/microsoft-edge/devtools-guide-chromium/#start) to explore what else you are able to do with DevTools.  -->  
     
## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  

[MicrosoftEdgeDevTools]: ../../devtools-guide-chromium/index.md "Microsoft Edge (Chromium) developer tools | Microsoft Docs"  
[DevToolsCommandMenu]: ../command-menu/index.md "Run commands with the Microsoft Edge DevTools Command menu | Microsoft Docs"  
[DevToolsCustomizePlacement]: ../customize/placement.md "Change Microsoft Edge DevTools placement | Microsoft Docs"  
[DevToolsConsoleApi]: ./api.md "Console API reference | Microsoft Docs"  
[DevToolsConsoleReference]: ./reference.md "Console reference | Microsoft Docs"  

[GlitchDevToolsConsoleLogExamples]: https://microsoft-edge-chromium-devtools.glitch.me/static/console/log.html "Get Started With Logging Messages | Glitch"  

[MDNRegularExpressions]: https://developer.mozilla.org/docs/Web/JavaScript/Guide/Regular_Expressions "Regular Expressions | MDN"  

[RegExrMain]: https://regexr.com "RegExr"  

[WikiStackTrace]: https://en.wikipedia.org/wiki/Stack_trace "Stack trace - Wikipedia"  
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/console/log) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
