---
title: Console Reference
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/20/2020
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





# Console Reference   



This page is a reference of features related to the Microsoft Edge DevTools Console.  It assumes that you are already familiar with using the Console to view logged messages and run JavaScript.  If not, see [Get Started With Running JavaScript In The Console][DevToolsConsoleJavascript] and [Get Started With Logging Messages In The Console][DevToolsConsoleLog].  

If you are looking for the API reference on functions like `console.log()` see [Console API Reference][DevToolsConsoleApi].  <!--For the reference on functions like `monitorEvents()` see [Console Utilities API Reference][DevToolsConsoleUtilities].  -->  

<!--todo: add console/utilities when available -->  

## Open the Console   

You may open the Console as a [panel](#open-the-console-panel) or as a [tab in the Drawer](#open-the-console-tab-in-the-drawer).  

### Open the Console panel   

Press `Control`+`Shift`+`J` \(Windows\) or `Command`+`Option`+`J` \(macOS\).  

> ##### Figure 1  
> The Console panel  
> ![The Console panel][ImageConsolePanel]  

To open the Console panel from the [Command Menu][DevToolsCommandMenu], start typing `Console` and then run the **Show Console** command that has the **Panel** badge next to it.  

> ##### Figure 2  
> The command for showing the Console panel  
> ![The command for showing the Console panel][ImageCommandShowConsole]  

### Open the Console tab in the Drawer   

Press `Escape` or click **Customize And Control DevTools** `...` and then select **Show console drawer**.  

> ##### Figure 3  
> Show console drawer  
> ![Show console drawer][ImageShowConsoleDrawer]  

The Drawer pops up at the bottom of your DevTools window, with the **Console** tab open.  

> ##### Figure 4  
> The Console tab in the Drawer  
> ![The Console tab in the Drawer][ImageDrawerConsole]  

To open the Console tab from the [Command Menu][DevToolsCommandMenu], start typing `Console` and then run the **Show Console** command that has the **Drawer** badge next to it.  

> ##### Figure 5  
> The command for showing the Console tab in the Drawer  
> ![The command for showing the Console tab in the Drawer][ImageShowDrawerCommand]  

### Open Console Settings   

Click **Console Settings** ![Console Settings][ImageSettingsButtonIcon].  

> ##### Figure 6  
> Console Settings  
> ![Console Settings][ImageConsoleSettings]  

The links below explain each setting:  

*   [**Hide Network**](#hide-network-messages)  
*   [**Preserve Log**](#persist-messages-across-page-loads)  
*   [**Selected Context Only**](#filter-out-messages-from-different-contexts)  
*   [**Group Similar**](#disable-message-grouping)  
*   [**Log XmlHttpRequests**](#log-xhr-and-fetch-requests)  
*   [**Eager Evaluation**](#disable-eager-evaluation)  
*   [**Autocomplete From History**](#disable-autocomplete-from-history)  

### Open the Console Sidebar   

Click **Show Console Sidebar** ![Show Console Sidebar][ImageShowConsoleSidebarIcon] to show the Sidebar, which is useful for filtering.  

> ##### Figure 7  
> Console Sidebar  
> ![Console Sidebar][ImageConsoleSidebar]  

## View messages   

This section contains features that change how messages are presented in the Console.  See [View messages][DevToolsConsoleViewMessages] for a hands-on walkthrough.  

### Disable message grouping   

[Open Console Settings](#open-console-settings) and disable **Group similar** to disable the default message grouping behavior of the Console.  See [Log XHR and Fetch requests](#log-xhr-and-fetch-requests) for an example.  

### Log XHR and Fetch requests   

[Open Console Settings](#open-console-settings) and enable **Log XMLHttpRequests** to log all `XMLHttpRequest` and `Fetch` requests to the Console as they happen.  

> ##### Figure 8  
> Logging `XMLHttpRequest` and `Fetch` requests  
> ![Logging XMLHttpRequest and Fetch requests][ImageXhrGrouped]  

The top message in [Figure 8](#figure-8) shows the default grouping behavior of the Console.  <!--  [Figure 9](#figure-9) shows how the same log looks after [disabling message grouping](#disable-message-grouping).  -->  

<!--

> ##### Old Figure 9  
> How the logged `XMLHttpRequest` and `Fetch` requests look after ungrouping  
> ![How the logged XMLHttpRequest and Fetch requests look after ungrouping][ImageXhrUngrouped]  

-->

<!--todo: add example foe ungrouping console items  -->  

### Persist messages across page loads   

By default the Console clears whenever you load a new page.  To persist messages across page loads, [Open Console Settings](#open-console-settings) and then enable the **Preserve Log** checkbox.  

### Hide network messages   

By default the browser logs network messages to the **Console**.  For example, the selected message
in [Figure 9](#figure-9) represents a status code of `429`.  

> ##### Figure 9  
> A 429 message in the Console  
> ![A 429 message in the Console][Image429Message]  

To hide network messages:  

1.  [Open Console Settings](#open-console-settings).  
1.  Enable the **Hide Network** checkbox.  

## Filter messages   

There are many ways to filter out messages in the Console.  

### Filter out browser messages   

[Open the Console Sidebar](#open-the-console-sidebar) and click **User Messages** to only show messages that came from the JavaScript of the page.  

> ##### Figure 10  
> Viewing user messages  
> ![Viewing user messages][ImageUserMessages]  

### Filter by log level   

DevTools assigns each `console.*` method a severity level.  There are 4 levels: `Verbose`, `Info`, `Warning`, and `Error`.  For example, `console.log()` is in the `Info` group, whereas `console.error()` is in the `Error` group.  The [Console API Reference][DevToolsConsoleApi] describes the severity level of each applicable method.  Every message that the browser logs to the Console has a severity level too.  You may hide any level of messages that you are not interested in.  For example, if you are only interested in `Error` messages, you may hide the other 3 groups.  

Click the **Log Levels** dropdown to enable or disable `Verbose`, `Info`, `Warning` or `Error` messages.  

> ##### Figure 11  
> The **Log Levels** dropdown  
> ![The Log Levels dropdown][ImageLogLevels]  

You may also filter by log level by [opening the Console Sidebar](#open-the-console-sidebar) and then clicking **Errors**, **Warnings**, **Info**, or **Verbose**.  

> ##### Figure 12  
> Using the Sidebar to view warnings  
> ![Using the Sidebar to view warnings][ImageSidebarWarnings]  

### Filter messages by URL   

Type `url:` followed by a URL to only view messages that came from that URL.  After you type `url:` DevTools shows all relevant URLs.  Domains also work.  For example, if `https://example.com/a.js` and `https://example.com/b.js` are logging messages, `url:https://example.com` enables you to focus on the messages from these 2 scripts.  

> ##### Figure 13  
> A URL filter  
> ![A URL filter][ImageUrlFilter]  

Type `-url:` to hide messages from that URL.  This is called a negative URL filter.  

> ##### Figure 14  
> A negative URL filter that hides all messages matching the URL `https://b.wal.co`  
> ![A negative URL filter that hides all messages matching the URL https://b.wal.co][ImageNegativeUrlFilter1]  

You may also show messages from a single URL by [opening the Console Sidebar](#open-the-console-sidebar), expanding the **User Messages** section, and then clicking the URL of the script containing the messages on which you want to focus.  

> ##### Figure 15  
> Viewing the messages that came from `wp-ad.min.js`  
> ![Viewing the messages that came from wp-ad.min.js][ImageNegativeUrlFilter2]  

### Filter out messages from different contexts   

Suppose that you have an advertisement \(ad\) on your page.  The ad is embedded in an `<iframe>` and is generating a lot of messages in your Console.  Because the ad is running in a different [JavaScript context](#select-javascript-context), one way to hide the messages is to [open Console Settings](#open-console-settings) and enable the **Selected Context Only** checkbox.  

### Filter out messages that do not match a regular expression pattern   

Type a regular expression such as `/[gm][ta][mi]/` in the **Filter** text box to filter out any messages that do not match that pattern.  DevTools checks if the pattern is found in the message text or the script that caused the message to be logged.  

> ##### Figure 16  
> Filtering out any messages that do not match `/[gm][ta][mi]/`  
> ![Filtering out any messages that do not match regex expression][ImageRegExFilter]  

## Run JavaScript   

This section contains features related to running JavaScript in the Console.  See [Run JavaScript][DevToolsConsoleOverviewJavascript] for a hands-on walkthrough.  

### Re-run expressions from history   

Press the `Up Arrow` key to cycle through the history of JavaScript expressions that you ran earlier in the Console.  Press `Enter` to run that expression again.  

### Watch the value of an expression in real-time with Live Expressions   

If you find yourself typing the same JavaScript expression in the Console repeatedly, you may find it easier to create a **Live Expression**.  With **Live Expressions** you type an expression once and then pin it to the top of your Console.  The value of the expression updates in near real-time.  See [Watch JavaScript Expression Values In Real-Time With Live Expressions][DevToolsConsoleLiveExpressions].  

### Disable Eager Evaluation   

As you type JavaScript expressions in the Console, **Eager Evaluation** shows a preview of the return value for that expression.  [Open Console Settings](#open-console-settings) and disable the **Eager Evaluation** checkbox to turn off the return value previews.  

### Disable autocomplete from history   

As you type out an expression, the autocomplete popup window for the Console shows expressions that you ran earlier.  These expressions are prepended with the `>` character.  [Open Console Settings](#open-console-settings) and disable the **Autocomplete From History** checkbox to stop showing expressions from your history.  

> [!NOTE]
> In [Figure 17](#figure-17), `document.querySelector('a')` and `document.querySelector('img')` are expressions that were evaluated earlier.  

> ##### Figure 17  
> The autocomplete popup showing expressions from history  
> ![The autocomplete popup showing expressions from history][ImageHistoryAutocomplete]  

### Select JavaScript context   

By default the **JavaScript Context** dropdown is set to **top**, which represents the [browsing context][MDNBrowsingContext] of the main document.  

> ##### Figure 18  
> The **JavaScript Context** dropdown  
> ![The JavaScript Context dropdown][ImageJavascriptContext]  

Suppose you have an ad on your page embedded in an `<iframe>`.  You want to run JavaScript in order to tweak the DOM of the ad.  You should first select the browsing context of the ad from the **JavaScript Context** dropdown.  

> ##### Figure 19  
> Selecting a different JavaScript context  
> ![Selecting a different JavaScript context][ImageSelectContext]  

## Clear the Console   

You may use any of the following workflows to clear the Console:  

*   Click **Clear Console** ![Clear Console][ImageClearConsoleIcon].  
*   Right-click a message and then select **Clear Console**.  
*   Type `clear()` in the Console and then press `Enter`.  
*   Call `console.clear()` from the JavaScript for your webpage.  
*   Press `Control`+`L` while the Console is in focus.  

 



<!-- image links -->  

[ImageClearConsoleIcon]: images/clear-console-button-icon.msft.png  
[ImageSettingsButtonIcon]: images/settings-button-icon.msft.png  
[ImageShowConsoleSidebarIcon]: images/show-console-sidebar-icon.msft.png  

[ImageConsolePanel]: images/console-hello-console.msft.png "Figure 1: The Console panel"  
[ImageCommandShowConsole]: images/console-command-menu-show-console.msft.png "Figure 2: The command for showing the Console panel"  
[ImageShowConsoleDrawer]: images/elements-customize-control-devtools-show-console-drawer.msft.png "Figure 3: Show console drawer"  
[ImageDrawerConsole]: images/elements-console-drawer-hello-world.msft.png "Figure 4: The Console tab in the Drawer"  
[ImageShowDrawerCommand]: images/console-command-menu-show-console.msft.png "Figure 5: The command for showing the Console tab in the Drawer"  
[ImageConsoleSettings]: images/console-settings-group-similar-empty.msft.png "Figure 6: Console Settings"  
[ImageConsoleSidebar]: images/console-sidebar-drawer-empty.msft.png "Figure 7: Console Sidebar"  
[ImageXhrGrouped]: images/console-xhr-fetch.msft.png "Figure 8: Logging XMLHttpRequest and Fetch requests"  
<!--[ImageXhrUngrouped]: images/console-xhr-fetch-all.msft.png "Figure old 9: How the logged XMLHttpRequest and Fetch requests look after ungrouping"  -->  
[Image429Message]: images/console-show-network.msft.png "Figure 9: A 429 message in the Console"  
[ImageUserMessages]: images/console-sidebar-drawer-user-messages.msft.png "Figure 10: Viewing user messages"  
[ImageLogLevels]: images/console-log-level-default-levels.msft.png "Figure 11: The Log Levels dropdown"  
[ImageSidebarWarnings]: images/console-sidebar-warnings.msft.png "Figure 12: Using the Sidebar to view warnings"  
[ImageUrlFilter]: images/console-filter-text.msft.png "Figure 13: A URL filter"  
[ImageNegativeUrlFilter1]: images/console-negative-filter-text.msft.png "Figure 14: A negative URL filter that hides all messages matching the URL https://b.wal.co"  
[ImageNegativeUrlFilter2]: images/console-filter-text-specified.msft.png "Figure 15: Viewing the messages that came from wp-ad.min.js"  
[ImageRegExFilter]: images/console-filter-regex.msft.png "Figure 16: Filtering out any messages that do not match regex expression"  
[ImageHistoryAutocomplete]: images/console-filter-text-autofilter-history.msft.png "Figure 17: The autocomplete popup showing expressions from history"  
[ImageJavascriptContext]: images/console-dom-level-top.msft.png "Figure 18: The JavaScript Context dropdown"  
[ImageSelectContext]: images/console-dom-level-multiple.msft.png "Figure 19: Selecting a different JavaScript context"  

<!-- links -->  

[DevToolsCommandMenu]: ../command-menu/index.md "Run Commands With The Microsoft Edge DevTools Command Menu"  

[DevToolsConsoleViewMessages]: index.md#viewing-logged-messages "Viewing logged messages - Console Overview"  
[DevToolsConsoleApi]: api.md "Console API Reference"  
[DevToolsConsoleOverviewJavascript]: index.md#running-javascript "Running JavaScript - Console Overview"  
[DevToolsConsoleJavascript]: javascript.md "Get Started With Running JavaScript In The Console"  
[DevToolsConsoleLiveExpressions]: live-expressions.md "Watch JavaScript Expression Values In Real-Time With Live Expressions"  
[DevToolsConsoleLog]: log.md "Get Started With Logging Messages In The Console"  
<!--[DevToolsConsoleUtilities]: utilities.md "Console Utilities API Reference"  -->  

[MDNBrowsingContext]: https://developer.mozilla.org/docs/Glossary/Browsing_context "Browsing context | MDN"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/console/reference) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: http://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
