---
description: A comprehensive reference for every feature and behavior of the Console UI in Microsoft Edge DevTools.
title: Console reference
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/04/2021
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
# Console reference  

This article is a reference of features related to the Microsoft Edge DevTools Console.  It assumes you're already familiar with using the Console to view logged messages and run JavaScript.  If not, navigate to [Get started with running JavaScript in the Console][DevtoolsConsoleConsoleJavascript] and [Get started with logging messages in the Console][DevtoolsConsoleConsoleLog].  

If you're looking for the API reference on functions like `console.log()`, navigate to [Console API Reference][DevToolsConsoleApi].  For the reference on functions like `monitorEvents()`, navigate to [Console Utilities API Reference][DevToolsConsoleUtilities].  

## Open the Console  

You may open the **Console** as a [tool in the upper pane](#open-the-console-tool) or as a [tool in the Drawer](#open-the-console-tool-in-the-drawer).  

### Open the Console tool  

Select `Control`+`Shift`+`J` \(Windows, Linux\) or `Command`+`Option`+`J` \(macOS\).  

:::image type="complex" source="../media/console-hello-console.msft.png" alt-text="The Console tool" lightbox="../media/console-hello-console.msft.png":::
   The **Console** tool  
:::image-end:::  

To open the **Console** tool from the [Command Menu][DevtoolsCommandMenuIndex], type `Console` and then run the **Show Console** command that has the **Panel** badge next to it.  

:::image type="complex" source="../media/console-command-menu-show-console.msft.png" alt-text="Run the command to display the Console tool" lightbox="../media/console-command-menu-show-console.msft.png":::
   Run the command to display the **Console** tool  
:::image-end:::  

### Open the Console tool in the Drawer  

Select `Esc` or choose **Customize and control DevTools** \(`...`\) and then choose **Show console drawer**.  

:::image type="complex" source="../media/console-elements-customize-control-devtools-show-console-drawer.msft.png" alt-text="Show console drawer" lightbox="../media/console-elements-customize-control-devtools-show-console-drawer.msft.png":::
   **Show console drawer**  
:::image-end:::  

The Drawer pops up at the bottom of your DevTools window, with the **Console** tool open.  

:::image type="complex" source="../media/console-elements-console-drawer-hello-world.msft.png" alt-text="The Console tool in the Drawer" lightbox="../media/console-elements-console-drawer-hello-world.msft.png":::
   The **Console** tool in the **Drawer**  
:::image-end:::  

To open the **Console** tool from the [Command Menu][DevtoolsCommandMenuIndex], type `Console` and then run the **Show Console** command that has the **Drawer** badge next to it.  

:::image type="complex" source="../media/console-command-menu-show-console.msft.png" alt-text="Run the command to display the **Console** tool in the Drawer" lightbox="../media/console-command-menu-show-console.msft.png":::
   Run the command to display the **Console** tool in the **Drawer**  
:::image-end:::  

### Open Console Settings  

Choose the **Console Settings** \(![Console Settings icon](../media/settings-button-icon.msft.png)\) button.  

:::image type="complex" source="../media/console-settings-group-similar-empty.msft.png" alt-text="Console Settings" lightbox="../media/console-settings-group-similar-empty.msft.png":::
   **Console Settings**  
:::image-end:::  

The following links explain each setting.  

*   [Hide network](#hide-network-messages)  
*   [Preserve log](#persist-messages-across-page-loads)  
*   [Selected context only](#filter-out-messages-from-different-contexts)  
*   [Group similar](#turn-off-message-grouping)  
*   [Log XMLHttpRequests](#log-xhr-and-fetch-requests)  
*   [Eager evaluation](#turn-off-eager-evaluation)  
*   [Autocomplete from history](#turn-off-autocomplete-from-history)  
<!--*   Evaluate triggers user activation  -->  
    
### Open the Console Sidebar  

To display the **Sidebar**, choose **Show console sidebar** \(![Show console sidebar](../media/show-console-sidebar-icon.msft.png)\).  The **Sidebar** is helps you filter.  

:::image type="complex" source="../media/console-sidebar-drawer-empty.msft.png" alt-text="Console Sidebar" lightbox="../media/console-sidebar-drawer-empty.msft.png":::
   **Console Sidebar**  
:::image-end:::  

## View messages  

This section contains features that change how messages are presented in the Console.  For a hands-on walkthrough, navigate to [View messages][DevtoolsConsoleIndexInspectFilterInformationOnCurrentWebpage].  

### Turn off message grouping  

To turn off the default message grouping behavior of the **Console**, [open Console Settings](#open-console-settings) and choose the checkbox next to **Group similar**.  For an example, navigate to [Log XHR and Fetch requests](#log-xhr-and-fetch-requests).  

### Log XHR and Fetch requests  

To log all `XMLHttpRequest` and `Fetch` requests to the **Console** as each happens, [open Console Settings](#open-console-settings) and choose the checkbox next to **Log XMLHttpRequests**.  

:::image type="complex" source="../media/console-xhr-fetch.msft.png" alt-text="Log XMLHttpRequest and Fetch requests" lightbox="../media/console-xhr-fetch.msft.png":::
   Log `XMLHttpRequest` and `Fetch` requests  
:::image-end:::  

The top message in previous figure displays the default grouping behavior of the **Console**.  <!--  In the following figure, the same log is displayed after you [turn off message grouping](#turn-off-message-grouping).  -->  

<!--  
> ##### Old Figure 9  
> How the logged `XMLHttpRequest` and `Fetch` requests look after ungrouping  
> :::image type="complex" source="../media/console-xhr-fetch-all.msft.png" alt-text="How the logged XMLHttpRequest and Fetch requests look after ungrouping" lightbox="../media/console-xhr-fetch-all.msft.png":::
>    How the logged XMLHttpRequest and Fetch requests look after ungrouping  
> :::image-end:::  
-->  

<!--todo: add example for ungrouping console items  -->  

### Persist messages across page loads  

When you load a new webpage, the default action clears the **Console**.  To persist messages across page loads, [open Console Settings](#open-console-settings) and choose the checkbox next to **Preserve Log**.  

### Hide network messages  

The default action for Microsoft Edge is to logs network messages to the **Console**.  In the following figure, the chosen message represents an HTTP status code of `429`.  

:::image type="complex" source="../media/console-show-network.msft.png" alt-text="A 429 message in the Console" lightbox="../media/console-show-network.msft.png":::
   A `429` message in the **Console**  
:::image-end:::  

To hide network messages, complete the following actions.  

1.  [Open Console Settings](#open-console-settings).  
1.  Choose the checkbox next to **Hide Network**.  
    
## Filter messages  

Many ways exist to filter out messages in the **Console**.  

### Filter out browser messages  

[Open the Console Sidebar](#open-the-console-sidebar) and choose **# user messages** to only display messages that came from the JavaScript of the webpage.  

:::image type="complex" source="../media/console-sidebar-drawer-user-messages.msft.png" alt-text="Display user messages" lightbox="../media/console-sidebar-drawer-user-messages.msft.png":::
   Display user messages  
:::image-end:::  

### Filter by log level  

DevTools assigns each `console.*` method one of the four severity levels.  

*   `Error`  
*   `Info`  
*   `Verbose`  
*   `Warning`  
    
For example, `console.log()` is in the `Info` group, but `console.error()` is in the `Error` group.  The [Console API Reference][DevToolsConsoleApi] describes the severity level of each applicable method.  Every message that the browser logs to the Console has a severity level too.  You may hide any level of messages that you're not interested in.  For example, if you're only interested in `Error` messages, you may hide the other three groups.  

To filter the messages, choose the **Log Levels** dropdown and choose `Verbose`, `Info`, `Warning`, or `Error`.  

:::image type="complex" source="../media/console-log-level-default-levels.msft.png" alt-text="The Log Levels dropdown" lightbox="../media/console-log-level-default-levels.msft.png":::
   The **Log Levels** dropdown  
:::image-end:::  

To use the log level to filter, [open the Console Sidebar](#open-the-console-sidebar) and then choose **Errors**, **Warnings**, **Info**, or **Verbose**.  

:::image type="complex" source="../media/console-sidebar-warnings.msft.png" alt-text="Use the Sidebar to view warnings" lightbox="../media/console-sidebar-warnings.msft.png":::
   Use the Sidebar to view warnings  
:::image-end:::  

### Filter messages by URL  

Type `url:` followed by a URL to only view messages that came from that URL.  After you type `url:`, DevTools displays all relevant URLs.  Domains also work.  For example, if `https://example.com/a.js` and `https://example.com/b.js` are logging messages, `url:https://example.com` allows you to focus on the messages from these two scripts.  

:::image type="complex" source="../media/console-filter-text.msft.png" alt-text="A URL filter" lightbox="../media/console-filter-text.msft.png":::
   A URL filter  
:::image-end:::  

To hide messages from a URL, type `-url:`.  It's a negative URL filter.  

:::image type="complex" source="../media/console-negative-filter-text.msft.png" alt-text="A negative URL filter that hides all messages that match the https://b.wal.co URL" lightbox="../media/console-negative-filter-text.msft.png":::
   A negative URL filter that hides all messages that match the `https://b.wal.co` URL
:::image-end:::  

To display messages from a single URL, complete the following actions.  

1.  [Open the Console Sidebar](#open-the-console-sidebar).  
1.  Expand the **# user messages** section.  
1.  Choose the URL of the script that contains the messages on which you want to focus.  
    
:::image type="complex" source="../media/console-filter-text-specified.msft.png" alt-text="Display the messages that came from wp-ad.min.js" lightbox="../media/console-filter-text-specified.msft.png":::
   Display the messages that came from `wp-ad.min.js`  
:::image-end:::  

### Filter out messages from different contexts  

Suppose that you have an advertisement \(ad\) on your webpage.  The ad is embedded in an `<iframe>` and generates many messages in your **Console**.  Because the ad is running in a different [JavaScript context](#choose-javascript-context), one way to hide the messages is to [open Console Settings](#open-console-settings) and choose the checkbox next to **Selected Context Only**.  

### Filter out messages that don't match a regular expression pattern  

Type a regular expression such as `/[gm][ta][mi]/` in the **Filter** textbox to filter out any messages that don't match that pattern.  DevTools checks if the pattern is found in the message text or the script that caused the message to be logged.  

:::image type="complex" source="../media/console-filter-regex.msft.png" alt-text="Filter out any messages that don't match regex expression" lightbox="../media/console-filter-regex.msft.png":::
   Filter out any messages that don't match the `/[gm][ta][mi]/` regex expression  
:::image-end:::  

## Run JavaScript  

This section contains features related to running JavaScript in the **Console**.  For a hands-on walkthrough, navigate to [Run JavaScript][DevtoolsConsoleConsoleJavascript].  

### Rerun expressions from history  

Select `Up Arrow` to cycle through the history of JavaScript expressions that you ran earlier in the **Console**.  Select `Enter` to run that expression again.  

### Watch the value of an expression in real time with Live Expressions  

If you find yourself typing the same JavaScript expression in the **Console** repeatedly, you may find it easier to create a **Live Expression**.  With **Live Expressions**, you type an expression once and then pin it to the top of your **Console**.  The value of the expression updates in near real time.  Navigate to [Watch JavaScript Expression Values In Real-Time With Live Expressions][DevToolsConsoleLiveExpressions].  

### Turn off Eager Evaluation  

**Eager Evaluation** displays a preview of the return value as you type JavaScript expressions in the **Console**.  To turn off the return value previews, complete the following actions.  

1.  [Open Console Settings](#open-console-settings).  
1.  Remove the checkbox next to **Eager Evaluation**.  
    
### Turn off autocomplete from history  

As you type out an expression, the autocomplete popup window for the **Console** displays expressions that you ran earlier.  The expressions are pre-pended with the `>` character.  To stop displaying expressions from your history, [open Console Settings](#open-console-settings) and remove the checkbox next to **Autocomplete From History** checkbox.  

> [!NOTE]
> In the following figure, `document.querySelector('a')` and `document.querySelector('img')` are expressions that were evaluated earlier.  

:::image type="complex" source="../media/console-filter-text-autofilter-history.msft.png" alt-text="The autocomplete popup menu displays expressions from history" lightbox="../media/console-filter-text-autofilter-history.msft.png":::
   The autocomplete popup menu displays expressions from history  
:::image-end:::  

### Choose JavaScript context  

The default option for the **JavaScript Context** dropdown is **top**, which represents the [browsing context][MdnDocsGlossaryBrowsingContext] of the main webpage.  

:::image type="complex" source="../media/console-dom-level-top.msft.png" alt-text="The JavaScript Context dropdown" lightbox="../media/console-dom-level-top.msft.png":::
   The **JavaScript Context** dropdown  
:::image-end:::  

Suppose you have an ad on your webpage embedded in an `<iframe>`.  You want to run JavaScript to tweak the DOM of the ad.  First, choose the browsing context of the ad from the **JavaScript Context** dropdown.  

:::image type="complex" source="../media/console-dom-level-multiple.msft.png" alt-text="Choose a different JavaScript context" lightbox="../media/console-dom-level-multiple.msft.png":::
   Choose a different JavaScript context  
:::image-end:::  

## Clear the Console  

To clear the **Console**, complete any of the following workflows.  

*   Choose the **Clear Console** \(![Clear Console](../media/clear-console-button-icon.msft.png)\) button.  
*   Hover on a message, open the contextual menu \(right-click\), and choose **Clear Console**.  
*   Enter `clear()` in the **Console** and select `Enter`.  
*   Run `console.clear()` from the JavaScript for your webpage.  
*   Select `Control`+`L` while the **Console** is in focus.  
    
## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  

[DevtoolsConsoleApi]: ./api.md "Console API reference | Microsoft Docs"  
[DevtoolsConsoleConsoleLog]: ./console-log.md "Log messages in the Console tool | Microsoft Docs"  
[DevtoolsConsoleConsoleJavascript]: ./console-javascript.md "Console as a JavaScript environment | Microsoft Docs"  
[DevtoolsConsoleIndex]: .index.md "Use the Console | Microsoft Docs"  
[DevtoolsConsoleIndexInspectFilterInformationOnCurrentWebpage]: ./index.md#inspect-and-filter-information-on-the-current-webpage "Inspect and filter information on the current webpage | Microsoft Docs"  
[DevtoolsConsoleLiveExpressions]: ./live-expressions.md "Monitor changes in JavaScript using Live Expressions | Microsoft Docs"  
[DevtoolsConsoleUtilities]: ./utilities.md "Console Utilities API reference | Microsoft Docs"  

[DevtoolsCommandMenuIndex]: ../command-menu/index.md "Run commands with the Microsoft Edge DevTools Command menu | Microsoft Docs"  

[MdnDocsGlossaryBrowsingContext]: https://developer.mozilla.org/docs/Glossary/Browsing_context "Browsing context | MDN"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/console/reference) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors#kayce-basques  
