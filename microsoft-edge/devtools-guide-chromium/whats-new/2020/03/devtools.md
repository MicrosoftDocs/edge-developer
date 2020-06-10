---
title: What's new in DevTools (Microsoft Edge 83)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/10/2020
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

# What's New In DevTools (Microsoft Edge 83)  

Following the updated Chromium schedule, we are adjusting our schedule for upcoming Microsoft Edge releases and cancelling the Microsoft Edge 82 release. Check out our [blog post][WindowsBlogStableRelease] for more info.  

Here are the new features available in the DevTools in Microsoft Edge 83.  

## Announcements from the Microsoft Edge DevTools team  

The following sections are a list of announcements you may have missed from the Microsoft Edge DevTools team! Check them out to try new features in the DevTools, VS Code extensions, and more.  To stay up to date on all the latest and greatest features in your developer tools, download the [Microsoft Edge preview channels][MicrosoftEdgePreviewChannels] and [follow us on Twitter][EdgeDevToolsTwitterAccount].  

### Remotely debug Microsoft Edge on Windows 10 Devices  

The [Remote Tools for Microsoft Edge \(Beta\)][RemoteTools] app is now available in the [Microsoft Store][MicrosoftStore].  Using this app, which extends the [Windows Device Portal][WindowsDevicePortal], you are able to connect from the instance of Microsoft Edge running on your development machine to a remote Windows 10 device, see a list of targets \(all tabs in Microsoft Edge and [PWAs][PWADoc] open on the Windows 10 device\), and use the DevTools on your development machine against a target running on the remote Windows 10 device.  

:::image type="complex" source="../../media/2020/03/remote-tools.msft.png" alt-text="The Remote Tools for Microsoft Edge (Beta) app available in the Microsoft Store" lightbox="../../media/2020/03/remote-tools.msft.png":::
   Figure 1:  The [Remote Tools for Microsoft Edge (Beta)][RemoteTools] app available in the [Microsoft Store][MicrosoftStore]  
:::image-end:::  

[Read our guide for setting up your Windows 10 device and your development machine for remote debugging][RemoteDebuggingWin10].  Let us know about your remote debugging experience by [tweeting][PostTweetEdgeDevTools] or clicking the [Feedback](#feedback) icon!  

### New ways to access Settings  

There are tons of settings for the DevTools that you are able to customize to make the DevTools look, feel, and work the way you need. In Microsoft Edge 83, accessing [Settings][OverviewSettings] in the DevTools is now much easier. Open Settings with the gear icon next to Console alerts and the main menu.  

:::image type="complex" source="../../media/2020/03/settings.msft.png" alt-text="The gear icon opens Settings in the DevTools" lightbox="../../media/2020/03/settings.msft.png":::
   Figure 2:  The gear icon opens **Settings** in the DevTools  
:::image-end:::  

You are also able to open [Settings][OverviewSettings] from the **Main Menu** under **More tools**.

:::image type="complex" source="../../media/2020/03/settings2.msft.png" alt-text="Main Menu > More tools > Settings" lightbox="../../media/2020/03/settings2.msft.png":::
   Figure 3:  **Main Menu** > **More tools** > **Settings**  
:::image-end:::  

Chromium issue [#1050855][crbug1050855]

### New and improved infobars

Informational notification bars \(infobars\) in DevTools now have an improved look and more functionality. In Microsoft Edge 83, infobars are easier to read and provide buttons so you are able to take the relevant action right away.  

:::image type="complex" source="../../media/2020/03/infobar.msft.png" alt-text="Infobar for pretty-printing a minified file in Microsoft Edge 83" lightbox="../../media/2020/03/infobar.msft.png":::
   Figure 4:  Infobar for pretty-printing a minified file in Microsoft Edge Version 83  
:::image-end:::  

Chromium issue [#1056348][crbug1056348]

### Navigate the Color Picker with your keyboard  

The [Color Picker][ColorPicker] is a GUI in the [Elements panel][ElementsDoc] for changing `color` and `background-color` declarations.  In previous versions of Microsoft Edge, you were not able to navigate the **Shades** section of the [Color Picker][ColorPicker] with the keyboard.  

:::image type="complex" source="../../media/2020/03/color-picker.msft.png" alt-text="You are now able to use your keyboard to move the selector in the Shades section of the Color Picker" lightbox="../../media/2020/03/color-picker.msft.png":::
   Figure 5:  You are now able to use your keyboard to move the selector in the **Shades** section of the [Color Picker][ColorPicker]  
:::image-end:::  

In Microsoft Edge 83, you are now able to use the keyboard to move the selector in the **Shades** section of the Color Picker.  

Chromium issue [#963183][crbug963183]  

### Properties tab now populates after a page refresh  

In Microsoft Edge 81 and earlier, the **Properties tab** in the [Elements panel][ElementsDoc] was broken by page refreshes.  When you refreshed the page, the **Properties tab** did not populate the properties of the currently-selected element.  

:::image type="complex" source="../../media/2020/03/properties-in-81.msft.png" alt-text="In Microsoft Edge 81 and earlier, the Properties tab was blank after a page refresh" lightbox="../../media/2020/03/properties-in-81.msft.png":::
   Figure 6:  In Microsoft Edge 81 and earlier, the **Properties tab** was blank after a page refresh  
:::image-end:::  

In Microsoft Edge 83, you are now able to see the properties of the currently-selected element after a page refresh in the **Properties tab**.  

:::image type="complex" source="../../media/2020/03/properties-in-82.msft.png" alt-text="In Microsoft Edge 83, the Properties tab displays the properties of the currently-selected element after a page refresh" lightbox="../../media/2020/03/properties-in-82.msft.png":::
   Figure 7:  In Microsoft Edge 83, the **Properties tab** displays the properties of the currently-selected element after a page refresh  
:::image-end:::  

Chromium issue [#1050999][crbug1050999]  

### Use the arrow keys to scroll in the Changes tool  

The **Changes tool** tracks any changes you have made to CSS or JavaScript in the DevTools.  You are able to use the **Changes tool** to quickly see all your changes and take those back to your editor/IDE.  

Open the **Changes tool** by pressing `Ctrl`+`Shift`+`P` in the DevTools to open the [Command Menu][DevToolsCommandMenuIndex] and typing `changes`.  Select and run the **Show Changes** command to open the **Changes tool** in the DevTools drawer.  

When you have made a change to a minified file, the **Changes tool** enables you to scroll horizontally to see all of your minified code.  Starting in Microsoft Edge 83, you may now scroll horizontally using the arrow keys on your keyboard.  

:::image type="complex" source="../../media/2020/03/changes.msft.png" alt-text="In Microsoft Edge 83, you may scroll horizontally with the arrow keys to see your minified code in the Changes tool" lightbox="../../media/2020/03/changes.msft.png":::
   Figure 8:  In Microsoft Edge 83, you may scroll horizontally with the arrow keys to see the changes you made to your minified code in the **Changes tool**  
:::image-end:::  

If you use screen readers or the keyboard to navigate around the DevTools, send us your feedback by [tweeting][PostTweetEdgeDevTools] at us or clicking the [Feedback](#feedback) icon!  

Chromium issue [#963183][crbug963183]  

## Announcements from the Chromium project  

The following sections announce additional features available in Microsoft Edge 83 that were contributed to the open source Chromium project.  

### Emulate vision deficiencies  

Open the [Rendering tab][RenderingDoc] and use the new **Emulate vision deficiencies** feature to get a better idea of how people with different types of vision deficiencies experience your site.  

:::image type="complex" source="../../media/2020/03/vision.msft.png" alt-text="Emulating blurred vision" lightbox="../../media/2020/03/vision.msft.png":::
   Figure 9:  Emulating blurred vision  
:::image-end:::  

DevTools is able to emulate blurred vision and the following [types of color vision deficiencies][ColorBlindnessTypes].  

| Color Vision Deficiency | Details |  
|:--- |:--- |  
| Protanopia | The inability to perceive any red light. |  
| Deuteranopia | The inability to perceive any green light. |  
| Tritanopia | The inability to perceive any blue light. |  
| Achromatopsia | The inability to perceive any color, except for shades of grey \(extremely rare\). |  

Less extreme versions of these color vision deficiencies exist, and in fact they are more common.  
For example, protanomaly is a reduced sensitivity to red light (as opposed to protanopia, which is the complete inability to perceive red light). However, these -omaly vision deficiencies are not as clearly defined: every person with such a vision deficiency is different and might see things differently (being able to perceive more/less of the relevant colors).  

By designing for the more extreme simulations in DevTools, your web apps are guaranteed to be accessible to people with protanomaly, deuteranomaly, tritanomaly, and achromatomaly as well.  

Send your feedback by [tweeting][PostTweetEdgeDevTools] or clicking the [Feedback](#feedback) icon!  

Chromium issue [#1003700][crbug1003700]  

### Emulate locales  

Emulate locales by setting a location in **Sensors** > **Location**. [Open the **Command Menu**][DevToolsCommandMenuIndex] and type `Sensors` to access the **Sensors** tab.  After performing these actions, DevTools modifies the current default locale, affecting the following code.  

*   `Intl.*` APIs, for example: `new Intl.NumberFormat().resolvedOptions().locale`  
*   Other locale-aware JavaScript APIs such as `String.prototype.localeCompare` and `*.prototype.toLocaleString`, for example: `123_456..toLocaleString()`  
*   DOM APIs such as `navigator.language` and `navigator.languages`  
*   The [`Accept-Language`][MDNAcceptLanguage] HTTP request header  

> [!NOTE]
> Updates to `navigator.language` and `navigator.languages` are not visible immediately, but only after the next navigation or page reload.  Changes to the `Accept-Language` HTTP header are only reflected for subsequent requests.  

:::image type="complex" source="../../media/2020/03/locale.msft.png" alt-text="Emulating a locale" lightbox="../../media/2020/03/locale.msft.png":::
   Figure 10:  Emulating a locale  
:::image-end:::  

To try a demo, see [Locale-dependent code example][MathiasByensLocaleDemo].

Chromium issue [#1051822][crbug1051822]

### Cross-Origin Embedder Policy (COEP) debugging  

The Network panel now provides [Cross-Origin Embedder Policy][COEP] debugging information.  

The **Status** column now provides a quick explanation of why a request was blocked as well as a link to view the headers of that request for further debugging:  

:::image type="complex" source="../../media/2020/03/status.msft.png" alt-text="Blocked requests in the **Status** column" lightbox="../../media/2020/03/status.msft.png":::
   Figure 11:  Blocked requests in the Status column  
:::image-end:::  

The **Response Headers** section of the **Headers** tab provides more guidance on how to resolve the issues:  

:::image type="complex" source="../../media/2020/03/guidance.msft.png" alt-text="More guidance in the Response Headers section" lightbox="../../media/2020/03/guidance.msft.png":::
   Figure 12:  More guidance in the Response Headers section  
:::image-end:::  

Send your feedback by [tweeting][PostTweetEdgeDevTools] or clicking the [Feedback](#feedback) icon!  

Chromium issue [#1051466][crbug1051466]  

### View network requests that set a specific cookie path  

Use the new `cookie-path` filter keyword in the **Network** panel to focus on the network requests that set a specific [cookie path][MDNCookiePath].  

Check out [Filter requests by properties][NetworkProperties] to discover more keywords
like `cookie-path`.

### Dock to left from the Command Menu  

Open the [Command Menu][DevToolsCommandMenuIndex] and run the `Dock to left` command to move DevTools to the left of your viewport.  

:::image type="complex" source="../../media/2020/03/dock-to-left.msft.png" alt-text="DevTools docked to the left of the viewport" lightbox="../../media/2020/03/dock-to-left.msft.png":::
   Figure 13:  DevTools docked to the left of the viewport  
:::image-end:::  

> [!NOTE]
> The **Dock to left** feature has been available since Microsoft Edge 75, but it was previously only accessible from the [**Main Menu**][MainMenuDoc].  The new feature in Microsoft Edge 83 is that you may now access this feature from the Command Menu.  

Send your feedback by [tweeting][PostTweetEdgeDevTools] or clicking the [Feedback](#feedback) icon!  

Chromium issue [#1011679][crbug1011679]  

### The Audits panel is now the Lighthouse panel  

The DevTools team frequently got feedback from web developers that while it was possible to run [Lighthouse][GithubGoogleChromeLighthouse] from DevTools, when they tried it out they were not able to find the "Lighthouse" panel, so the **Audits** panel is now the **Lighthouse** panel.  

:::image type="complex" source="../../media/2020/03/lighthouse.msft.png" alt-text="The Lighthouse panel" lightbox="../../media/2020/03/lighthouse.msft.png":::
   Figure 14:  The Lighthouse panel  
:::image-end:::  

> [!NOTE]
> The **Lighthouse** panel provides links to content hosted on third-party websites.  Microsoft is not responsible for and has no control over the content of these sites and any data they may collect.  

### Delete all Local Overrides in a folder  

After setting up **Local Overrides** you may right-click a folder and select the new **Delete all overrides** option to delete all Local Overrides in that folder.  

:::image type="complex" source="../../media/2020/03/overrides.msft.png" alt-text="Delete all overrides" lightbox="../../media/2020/03/overrides.msft.png":::
   Figure 15:  Delete all overrides  
:::image-end:::  

Send your feedback by [tweeting][PostTweetEdgeDevTools] or clicking the [Feedback](#feedback) icon!  

Chromium issue [#1016501][crbug1016501]  

### Updated Long tasks UI  

A **Long Task** is JavaScript code that monopolizes the main thread for a long time, causing a web page to freeze.  

You have been able to [visualize Long Tasks in the Performance panel][LongTasksInPerformancePanel] for a while now, but in Microsoft Edge 83 the Long Task visualization UI in the Performance panel has been updated.  The Long Task portion of a task is now colored with a striped red background.  

:::image type="complex" source="../../media/2020/03/long-task.msft.png" alt-text="The new Long Task UI" lightbox="../../media/2020/03/long-task.msft.png":::
   Figure 16:  The new Long Task UI  
:::image-end:::  

Send your feedback by [tweeting][PostTweetEdgeDevTools] or clicking the [Feedback](#feedback) icon!  

Chromium issue [#1054447][crbug1054447]  

### Maskable icon support in the Manifest pane  

Android Oreo introduced adaptive icons, which display app icons in a variety of shapes across different device models.  **Maskable icons** are a new icon format that support adaptive icons, which enable you to ensure that your [PWA][PWADoc] icon looks good on devices that support the maskable icons standard.  

Enable the new **Show only the minimum safe area for maskable icons** checkbox in the **Manifest** pane to check that your maskable icon looks good on Android Oreo devices.  

<!-- Check out [Are my current icons ready?] to learn more.  -->  

:::image type="complex" source="../../media/2020/03/maskable-icons.msft.png" alt-text="The Show only the minimum safe area for maskable icons checkbox" lightbox="../../media/2020/03/maskable-icons.msft.png":::
   Figure 17:  The **Show only the minimum safe area for maskable icons** checkbox  
:::image-end:::  

> [!NOTE]
> This feature launched in Microsoft Edge 81.  The updates covered here in Microsoft Edge 83 were not covered in [What's New In DevTools (Microsoft Edge 81)][WhatsNew81].  

## Feedback  

To discuss the new features and changes in this post, or anything else related to DevTools:  

*   Send your feedback using the **Feedback** icon in the DevTools  
*   Tweet at [@EdgeDevTools][PostTweetEdgeDevTools]  
*   Submit a suggestion to [The Web We Want][TheWebWeWant]  
*   File bugs on this document in the [edge-developer][GitHubMicrosoftDocsEdgeDeveloperNewIssue] repository  

:::image type="complex" source="../../media/2020/03/feedback-icon.msft.png" alt-text="The **Feedback** icon in the Microsoft Edge DevTools" lightbox="../../media/2020/03/feedback-icon.msft.png":::
   Figure 18:  The **Feedback** icon in the Microsoft Edge DevTools  
:::image-end:::  

## Download the Microsoft Edge preview channels  

If you are on Windows or macOS, consider using the [Microsoft Edge preview channels][MicrosoftEdgePreviewChannels] as your default development browser.  The preview channels give you access to the latest DevTools features.  

<!-- links -->  

[PostTweetEdgeDevTools]: https://aka.ms/tweet/edgedevtools "@EdgeDevTools | Post a Tweet"  
[EdgeDevToolsTwitterAccount]: https://aka.ms/twitter/edgedevtools "@EdgeDevTools Twitter account"  
[GitHubMicrosoftDocsEdgeDeveloperNewIssue]: https://aka.ms/edgedevtoolsdocs/feedback "New Issue - MicrosoftDocs/edge-developer"  
[MicrosoftEdgePreviewChannels]: https://aka.ms/microsoftedge "Microsoft Edge Preview Channels"  
[TheWebWeWant]: https://aka.ms/webwewant "The Web We Want"  

[WhatsNew81]: /microsoft-edge/devtools-guide-chromium/whats-new/2020/01/devtools "What's New In DevTools (Microsoft Edge 81)"  

[DevToolsCommandMenuIndex]: /microsoft-edge/devtools-guide-chromium/command-menu/index "Run Commands With The Microsoft Edge DevTools Command Menu"  
[ColorPicker]: /microsoft-edge/devtools-guide-chromium/css/reference#change-colors-with-the-color-picker "Change colors with the Color Picker"  
[ElementsDoc]: /microsoft-edge/devtools-guide-chromium/css/index "Get Started With Viewing And Changing CSS"  
[MainMenuDoc]: /microsoft-edge/devtools-guide-chromium/customize/placement#change-placement-from-the-main-menu "Change placement from the main menu"  
[LongTasksInPerformancePanel]: /microsoft-edge/devtools-guide-chromium/evaluate-performance/reference#view-main-thread-activity "View main thread activity"  
[RenderingDoc]: /microsoft-edge/devtools-guide-chromium/evaluate-performance/reference#analyze-rendering-performance-with-the-rendering-tab "Analyze rendering performance with the Rendering tab"  
[PWADoc]: /microsoft-edge/progressive-web-apps-chromium/index "Progressive Web Apps on Windows"  
[RemoteDebuggingWin10]: /microsoft-edge/devtools-guide-chromium/remote-debugging/windows "Get Started with Remote Debugging Windows 10 Devices"  
[LineOfCodeBreakpoints]: /microsoft-edge/devtools-guide-chromium/javascript/breakpoints#line-of-code-breakpoints "Line-of-code breakpoints"
[NetworkProperties]: /microsoft-edge/devtools-guide-chromium/network/reference#filter-requests-by-properties
[OverviewSettings]: /microsoft-edge/devtools-guide-chromium/customize/#settings

[WindowsDevicePortal]: /windows/uwp/debug-test-perf/device-portal "Windows Device Portal overview"  

[RemoteTools]: https://www.microsoft.com/store/apps/9P6CMFV44ZLT "Remote Tools for Microsoft Edge (Beta)"  
[MicrosoftStore]: https://www.microsoft.com/store/apps/windows "Microsoft Store"  
[WindowsBlogStableRelease]: https://blogs.windows.com/msedgedev/2020/03/20/update-stable-channel-releases/ "Update on Stable channel releases for Microsoft Edge"

[ColorBlindnessTypes]: http://www.colourblindawareness.org/colour-blindness/types-of-colour-blindness/ "Types of Colour Blindness"  
[MDNAcceptLanguage]: https://developer.mozilla.org/docs/Web/HTTP/Headers/Accept-Language "Accept-Language"
[MathiasByensLocaleDemo]: https://mathiasbynens.be/demo/locale "Locale-dependent code example"
[MDNCookiePath]: https://developer.mozilla.org/docs/Web/HTTP/Headers/Set-Cookie#Directives

[crbug963183]: https://crbug.com/963183 "Issue 963183: DevTools are not WCAG compliant"  
[crbug1003700]: https://crbug.com/1003700 "Issue 1003700: Add DevTools support for Color Vision Deficiency simulation"  
[crbug1011679]: https://crbug.com/1011679 "Issue 1011679: Introduce 'Dock to Left' using the Command Menu"  
[crbug1016501]: https://crbug.com/1016501 "Issue 1016501: Feature Request: Button to delete all local overrides"  
[crbug1050999]: https://crbug.com/1050999 "Issue 1050999: Properties Tab"  
[crbug1051466]: https://crbug.com/1051466 "Issue 1051466: Support COOP/COEP debugging in DevTools"  
[crbug1054447]: https://crbug.com/1054447 "Issue 1054447: Update performance metrics in DevTools Timeline"  
[crbug1051822]: https://crbug.com/1051822 "Issue 1051822: DevTools: add UI to emulate locale"
[crbug1041830]: https://crbug.com/1041830 "Issue 1041830: Improve colors for breakpoints"
[crbug1050855]: https://crbug.com/1050855 "Issue 1050855: Settings view is difficult to discover"
[crbug1056348]: https://crbug.com/1056348 "Issue 1056348: Infobar Component Refresh"

[COOP]: https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit#bookmark=id.tu4hyy6v12wn "COOP and COEP explained - Cross-Origin Opener Policy"  
[COEP]: https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit#bookmark=id.uo6kivyh0ge2 "COOP and COEP explained - Cross-Origin Embedder Policy"  

[GithubGoogleChromeLighthouse]: https://github.com/GoogleChrome/lighthouse "Lighthouse GitHub repo"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/updates/2020/03/devtools/index) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
