---
title: Get Started With Logging Messages In The Console
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/06/2020
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





# Get Started With Logging Messages In The Console   



This interactive tutorial shows you how to log and filter messages in the [Microsoft Edge DevTools][MicrosoftEdgeDevTools] console.  

> ##### Figure 1  
> Messages in the Console  
> ![Messages in the Console][ImageLogExample]  

This tutorial is intended to be completed in order.  It assumes that you understand the fundamentals of web development, such as how to use JavaScript to add interactivity to a page.  

## Set up the demo and DevTools   

This tutorial is designed so that you are able to open up the demo and try all the workflows yourself.  When you physically follow along, you are more likely to remember the workflows later.  

1.  Hold `Control` \(Windows\) or `Command` \(macOS\) and click **Console Log Examples** to open in a new tab.  
    
    [Console Log Examples][GlitchDevToolsConsoleLogExamples]
    
    <!-- > [!TIP]
    > Move the demo to a separate window.  
    > 
    > > ##### old Figure 2  
    > > The tutorial on the left, and the demo on the right  
    > > ![The tutorial on the left, and the demo on the right][ImageLogSetUp1]  -->
    
1.  Focus the demo and then press `Control`+`Shift`+`J` \(Windows\) or `Command`+`Option`+`J` \(macOS\) to open DevTools.  By default DevTools opens to the right of the demo.  
    
    > ##### Figure 2  
    > DevTools opens to the right of the demo  
    > ![DevTools opens to the right of the demo][ImageDevToolsRight]  
    
    > [!TIP]
    > [Dock DevTools to the bottom of the window or undock it into a separate window][DevToolsCustomizePlacement].  
    
    > ##### Figure 3  
    > DevTools docked to the bottom of the demo  
    > ![DevTools docked to the bottom of the demo][ImageDevToolsBottom]  
    
    > ##### Figure 4  
    > Browser in a separate window  
    > ![Browser in a separate window][ImageDevToolsSeparateBrowse]  
    
    > ##### Figure 5  
    > DevTools undocked in a separate window  
    > ![DevTools undocked in a separate window][ImageDevToolsSeparateDevTools]  
    
## View messages logged from JavaScript   

Most messages that you see in the Console come from the web developers who wrote the JavaScript of the page.  The goal of this section is to introduce you to the different message types that you are likely to see in the Console, and explain how you may log each message type yourself from your own JavaScript.  

1.  Click the **Log Info** button in the demo.  `Hello, Console!` gets logged to the Console.
    
    > ##### Figure 6  
    > The Console after clicking **Log Info**  
    > ![The Console after clicking Log Info][ImageLogInfo]  
    
1.  Next to the `Hello, Console!` message in the Console click **log.js:2**.  The Sources panel opens and highlights the line of code that caused the message to get logged to the Console.  The message was logged when the JavaScript of the page ran `console.log('Hello, Console!')`.
    
    > ##### Figure 7  
    > DevTools opens the Sources panel after you click **log.js:2**  
    > ![DevTools opens the Sources panel after you click log.js:2][ImageSourceLog]  
    
1.  Navigate back to the Console using any of the following workflows:  
    
    *   Click the **Console** tab.  
    *   Press `Control`+`[` \(Windows\) or `Command`+`[` \(macOS\) until the Console panel is in focus.  
    *   [Open the Command Menu][DevToolsCommandMenu], start typing `Console`, select the **Show Console Panel** command, and then press `Enter`.  
    
1.  Click the **Log Warning** button in the demo.  `Abandon Hope All Ye Who Enter` gets logged to the Console.  Messages formatted like this are warnings.  
    
    > ##### Figure 8  
    > The Console after clicking **Log Warning**  
    > ![The Console after clicking Log Warning][ImageConsoleLogWarning]  
    
    > [!TIP]
    > If you want to see the code that caused a message to get logged a certain way, click on a script \(such as `log.js:12`\) to view the code that caused the message to get formatted.  

1.  Click the **Expand** ![Expand][ImageExpandIcon] icon in front of `Abandon Hope All Ye Who Enter`.  DevTools
   shows the [stack trace][WikiStackTrace] leading up to the call.  
    
    > ##### Figure 9  
    > A stack trace  
    > ![A stack trace][ImageStackTrace]  
    
    The stack trace is telling you that a function named `logWarning` was called, which in turn called a function named `quoteDante`.  In other words, the call that happened first is at the bottom of the stack trace.  You may log stack traces at any time by calling `console.trace()`.  

1.  Click **Log Error**.  The following error message gets logged: `I'm sorry, Dave.  I'm afraid I can't do that.`  
    
    > ##### Figure 10  
    > An error message  
    > ![An error message][ImageLogError]  
    
1.  Click **Log Table**.  A table about famous artists gets logged to the Console.  
    
    > [!NOTE]
    > The `birthday` column is only populated for one row.  Check the code to figure out why that is.
    
    > ##### Figure 11  
    > A table in the Console  
    > ![A table in the Console][ImageConsoleTable]  
    
1.  Click **Log Group**.  The names of 4 famous, crime-fighting turtles are grouped under the `Adolescent Irradiated Espionage Tortoises` label.  
    
    > ##### Figure 12  
    > A group of messages in the Console  
    > ![A group of messages in the Console][ImageConsoleLogGroup]  
    
1.  Click **Log Custom**.  A message with a red border and blue background gets logged to the Console.  
    
    > ##### Figure 13  
    > A message with custom formatting in the Console  
    > ![A message with custom formatting in the Console][ImageConsoleLogCustomFormatting]  
    
The main idea here is that when you want to log messages to the Console from your JavaScript, you use one of the `console` methods.  Each method formats messages differently.  

There are even more methods than what has been demonstrated in this section.  This tutorial shows you how to explore the rest of the methods.  

## View messages logged by the browser   

The browser logs messages to the Console, too.  This usually happens when there is a problem with the page.  

1.  Click **Cause 404**.  The browser logs a `404` network error because the JavaScript of the page tried to fetch a file that does not exist.  
    
    > ##### Figure 14  
    > A 404 error in the Console  
    > ![A 404 error in the Console][ImageConsoleLogError]  
    
1.  Click **Cause Error**.  The browser logs an uncaught `TypeError` because the JavaScript is trying to update a DOM node that does not exist.  
    
    > ##### Figure 15  
    > A TypeError in the Console  
    > ![A TypeError in the Console][ImageConsoleLogTypeError]  
    
1.  Click the **Log Levels** dropdown and enable the **Verbose** option if it is disabled.  You learn more about filtering in the next section.  You need to do this to make sure that the next message you log is visible.  
    
    > ##### Figure 16  
    > Enabling the **Verbose** log level  
    > ![Enabling the Verbose log level][ImageVerboseLogLevel]  
    
1.  Click **Cause Violation**.  The page becomes unresponsive for a few seconds and then the browser logs the message `[Violation] 'click' handler took 3000ms` to the Console.  The exact duration may vary.  
    
    > ##### Figure 17  
    > A violation in the Console  
    > ![A violation in the Console][ImageConsoleLogViolation]  
    
## Filter messages   

On some pages you see the Console get flooded with messages.  DevTools provides many different ways to filter out messages that are not relevant to the task at hand.  

### Filter by log level   

Each `console` method is assigned a severity level: `Verbose`, `Info`, `Warning`, or `Error`.  For example, `console.log()` is an `Info`-level message, whereas `console.error()` is an `Error`-level message.  

1.  Click the **Log Levels** dropdown and disable **Errors**.  A level is disabled when there is no longer a checkmark next to it.  The `Error`-level messages disappear.  
    
    > ##### Figure 18  
    > Disabling `Error`-level messages in the Console  
    > ![Disabling Error-level messages in the Console][ImageConsoleDisablingLogError]  
    
1.  Click the **Log Levels** dropdown again and re-enable **Errors**.  The `Error`-level messages reappear.  

### Filter by text   

When you want to only view messages that include an exact string, type that string into the **Filter** text box.  

1.  Type `Dave` into the **Filter** text box.  All messages that do not include the string `Dave` are hidden.  You might also see the `Adolescent Irradiated Espionage Tortoises` label.  That is a bug.  
    
    > ##### Figure 19  
    > Filtering out any message that does not include `Dave`  
    > ![Filtering out any message that does not include Dave][ImageLogTextFiltering]  
    
1.  Delete `Dave` from the **Filter** text box.  All the messages reappear.  

### Filter by regular expression   

When you want to show all messages that include a pattern of text, rather than a specific string, use a
[regular expression][MDNRegularExpressions].  

1.  Type `/^[AH]/` into the **Filter** text box.  Type this pattern into [RegExr][RegExrMain] for an
   explanation of what it is doing.  
    
    > ##### Figure 20  
    > Filtering out any message that does not match the pattern `/^[AH]/`  
    > ![Filtering out any message that does not match a pattern][ImageLogRegExFiltering]  
    
1.  Delete `/^[AH]/` from the **Filter** text box.  All messages are visible again.  

### Filter by message source   

When you want to only view the messages that came from a certain URL, use the **Sidebar**.  

1.  Click **Show Console Sidebar** ![Show Console Sidebar][ImageShowConsoleSidebarIcon].  
    
    > ##### Figure 21  
    > The Sidebar  
    > ![The Sidebar][ImageConsoleSidebar]  
    
1.  Click the **Expand** ![Expand][ImageExpandIcon] icon next to the number of messages.  In [Figure 21](#figure-21), the number of messages is indicated as **13 Messages**.  The **Sidebar** shows a list of URLs that caused messages to be logged.  For example, `log.js` caused 11 messages.  
    
    > ##### Figure 22  
    > Viewing the source of messages in the Sidebar  
    > ![Viewing the source of messages in the Sidebar][ImageConsoleSidebarLogSource]  
    
### Filter by user messages   

Earlier, when you clicked **Log Info**, a script called `console.log('Hello, Console!')` in order to log the message to the Console.  Messages logged from JavaScript like this are called **user messages**.  In contrast, when you clicked **Cause 404**, the browser logged an `Error`-level message stating that the requested resource could not be found.  Messages like that are considered **browser messages**.  Use the **Sidebar** to filter out browser messages and only show user messages.  

1.  Click **9 User Messages**.  The browser messages are hidden.  
    
    > ##### Figure 23  
    > Filtering out browser messages  
    > ![Filtering out browser messages][ImageConsoleLogBrowserFiltering]  
    
1.  Click **13 Messages** to show all messages again.  

## Use the Console alongside any other panel   

What if you are editing styles, but you need to quickly check the Console log for something? Use the Drawer.  

1.  Click the **Elements** tab.  
1.  Press `Escape`.  The Console tab of the **Drawer** opens.  It has all of the features of the Console panel that you have been using throughout this tutorial.  
    
    > ##### Figure 24  
    > The Console tab in the Drawer  
    > ![The Console tab in the Drawer][ImageDrawerConsole]  
    
<!--## Next steps  -->

<!--
*   See [Console Reference][DevToolsConsoleApi] to explore more features and workflows related to the Console UI.
*   See [Console API Reference][DevToolsConsoleReference] to learn more about all of the `console` methods that were demonstrated in [View messages logged from JavaScript(#view-messages-logged-from-javascript) and explore the other `console` methods that were not covered in this tutorial.  
*   See [Get Started](/microsoft-edge/devtools-guide-chromium/#start) to explore what else you are able to do with DevTools.  -->  

 



<!-- image links -->  

[ImageExpandIcon]: images/expand-icon.msft.png  
[ImageShowConsoleSidebarIcon]: images/show-console-sidebar-icon.msft.png  

[ImageLogExample]: images/ars-technica-console-onload.msft.png "Figure 1: Messages in the Console"  
<!--[ImageLogSetUp1]: images/log-set-up-1.msft.png "old Figure 2: The tutorial on the left, and the demo on the right"  -->  
[ImageDevToolsRight]: images/example-devtools-right-console.msft.png "Figure 2: DevTools opens to the right of the demo"  
[ImageDevToolsBottom]: images/example-devtools-bottom-console.msft.png "Figure 3: DevTools docked to the bottom of the demo"  
[ImageDevToolsSeparateBrowse]: images/example-devtools-separate-console-browse.msft.png "Figure 4: Browser in a separate window"  
[ImageDevToolsSeparateDevTools]: images/example-devtools-separate-console-devtools.msft.png "Figure 5: DevTools undocked in a separate window"  
[ImageLogInfo]: images/console-log-info.msft.png "Figure 6: The Console after clicking Log Info"  
[ImageSourceLog]: images/sources-logjs.msft.png "Figure 7: DevTools opens the Sources panel after you click log.js:2"  
[ImageConsoleLogWarning]: images/console-log-warning.msft.png "Figure 8: The Console after clicking Log Warning"  
[ImageStackTrace]: images/console-log-warning-expanded.msft.png "Figure 9: A stack trace"  
[ImageLogError]: images/console-log-error.msft.png "Figure 10: An error message"  
[ImageConsoleTable]: images/console-log-table.msft.png "Figure 11: A table in the Console"  
[ImageConsoleLogGroup]: images/console-log-group.msft.png "Figure 12: A group of messages in the Console"  
[ImageConsoleLogCustomFormatting]: images/console-log-custom.msft.png "Figure 13: A message with custom formatting in the Console"  
[ImageConsoleLogError]: images/console-cause-404.msft.png "Figure 14: A 404 error in the Console"  
[ImageConsoleLogTypeError]: images/console-cause-error.msft.png "Figure 15: A TypeError in the Console"  
[ImageVerboseLogLevel]: images/console-cause-error-log-levels.msft.png "Figure 16: Enabling the Verbose log level"  
[ImageConsoleLogViolation]: images/console-cause-violation.msft.png "Figure 17: A violation in the Console"  
[ImageConsoleDisablingLogError]: images/console-cause-violation-log-levels.msft.png "Figure 18: Disabling Error-level messages in the Console"  
[ImageLogTextFiltering]: images/console-all-messages-text-filter.msft.png "Figure 19: Filtering out any message that does not include Dave"  
[ImageLogRegExFiltering]: images/console-all-messages-regex-filter.msft.png "Figure 20: Filtering out any message that does not match a pattern"  
[ImageConsoleSidebar]: images/console-sidebar-all-messages.msft.png "Figure 21: The Sidebar"  
[ImageConsoleSidebarLogSource]: images/console-sidebar-expanded-all-messages.msft.png "Figure 22: Viewing the source of messages in the Sidebar"  
[ImageConsoleLogBrowserFiltering]: images/console-sidebar-user-messages.msft.png "Figure 23: Filtering out browser messages"  
[ImageDrawerConsole]: images/elements-drawer-console-sidebar-all-messages.msft.png "Figure 24: The Console tab in the Drawer"  

<!-- links -->  

[DevToolsCommandMenu]: ../command-menu/index.md "Run Commands With The Microsoft Edge DevTools Command Menu"  
[DevToolsCustomizePlacement]: ../customize/placement.md "Change Microsoft Edge DevTools Placement (Undock, Dock To Bottom, Dock To Left)"  
<!--[DevToolsConsoleApi]: api.md "Console API Reference"  -->
<!--[DevToolsConsoleReference]: reference.md "Console Reference"  -->

[GlitchDevToolsConsoleLogExamples]: https://microsoft-edge-chromium-devtools.glitch.me/static/console/log.html "Get Started With Logging Messages | Glitch"  
[MDNRegularExpressions]: https://developer.mozilla.org/docs/Web/JavaScript/Guide/Regular_Expressions "Regular Expressions | MDN"  
[RegExrMain]: https://regexr.com "RegExr"  
[WikiStackTrace]: https://en.wikipedia.org/wiki/Stack_trace "Stack trace - Wikipedia"  
[MicrosoftEdgeDevTools]: https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium "Microsoft Edge \(Chromium\) Developer Tools"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/console/log) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
