---
title: What's new in DevTools (Microsoft Edge 82)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 03/18/2020
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







# What's New In DevTools (Microsoft Edge 82) 



## Announcements from the Microsoft Edge DevTools team

The following sections are a list of announcements you may have missed from the Microsoft Edge DevTools team! Check them out to try new features in the DevTools, VS Code extensions, and more. To stay up to date on all the latest and greatest features in your developer tools, download the [Microsoft Edge preview channels][MicrosoftEdgePreviewChannels] and [follow us on Twitter][EdgeDevToolsTwitterAccount].

### Remotely debug Microsoft Edge on Windows 10 Devices

The [Remote Tools for Microsoft Edge (Beta)][RemoteTools] app is now available in the [Microsoft Store][MicrosoftStore]. Using this app, which extends the [Windows Device Portal][WindowsDevicePortal], you are able to connect from your development machine's instance of Microsoft Edge to a remote Windows 10 device, see a list of targets (all tabs in Microsoft Edge and [PWAs][PWADoc] open on the Windows 10 device), and use the DevTools on your development machine against a target running on the remote Windows 10 device.

> ##### Figure 1
> The [Remote Tools for Microsoft Edge (Beta)][RemoteTools] app available in the [Microsoft Store][MicrosoftStore].  
> ![The Remote Tools for Microsoft Edge (Beta) app available in the Microsoft Store.][ImageRemoteTools] 

[Read our guide for setting up your Windows 10 device and your development machine for remote debugging][RemoteDebuggingWin10]. Let us know about your remote debugging experience by [tweeting][PostTweetEdgeDevTools] at us or clicking the [Feedback](#feedback) icon!

### Navigate the Color Picker with your keyboard
The [Color Picker][ColorPicker] is a GUI in the [Elements panel][ElementsDoc] for changing `color` and `background-color` declarations. In previous versions of Microsoft Edge, you were not able to navigate the **Shades** section of the [Color Picker][ColorPicker] with the keyboard.

> ##### Figure 2
> You are now able to use your keyboard to move the selector in the **Shades** section of the [Color Picker][ColorPicker].  
> ![You are now able to use your keyboard to move the selector in the Shades section of the Color Picker.][ImageColorPicker]

In Microsoft Edge 82, you are now able to use the keyboard to move the selector in the **Shades** section of the Color Picker.

If you use screen readers or the keyboard to navigate around the DevTools, send us your feedback by [tweeting][PostTweetEdgeDevTools] at us or clicking the [Feedback](#feedback) icon! 

Chromium issue [#963183][crbug963183]  

### Properties tab now populates after a page refresh
In Microsoft Edge 81 and earlier, the **Properties tab** in the [Elements panel][ElementsDoc] was broken by page refreshes. When you refreshed the page, the **Properties tab** did not populate the properties of the currently-selected element.

> ##### Figure 3
> In Microsoft Edge 81 and earlier, the **Properties tab** was blank after a page refresh.
> ![In Microsoft Edge 81 and earlier, the Properties tab was blank after a page refresh.][ImagePropertiesIn81]

In Microsoft Edge 82, you are now able to see the properties of the currently-selected element after a page refresh in the **Properties tab**. 

> ##### Figure 4
> In Microsoft Edge 82, the **Properties tab** displays the properties of the currently-selected element after a page refresh.
> ![In Microsoft Edge 82, the Properties tab displays the properties of the currently-selected element after a page refresh.][ImagePropertiesIn82]

Chromium issue [#1050999][crbug1050999]  

### Use the arrow keys to scroll in the Changes tool
The **Changes tool** tracks any changes you have made to CSS or JavaScript in the DevTools. You are able to use the **Changes tool** to quickly see all your changes and take those back to your editor/IDE. 

You can open the **Changes tool** by pressing `Ctrl`+`Shift`+`P` in the DevTools to open the [Command Menu][DevToolsCommandMenuIndex] and typing `changes`. Select and run the **Show Changes** command to open the **Changes tool** in the DevTools drawer.

When you have made a change to a minified file, the **Changes tool** enables you to scroll horizontally to see all of your minified code. Starting in Microsoft Edge 82, you can now scroll horizontally using the arrow keys on your keyboard.

> ##### Figure 5
> In Microsoft Edge 82, you can scroll horizontally with the arrow keys to see the changes you made to your minified code in the **Changes tool**.
> ![In Microsoft Edge 82, you can scroll horizontally with the arrow keys to see your minified code in the Changes tool.][ImageChanges]

If you use screen readers or the keyboard to navigate around the DevTools, send us your feedback by [tweeting][PostTweetEdgeDevTools] at us or clicking the [Feedback](#feedback) icon! 

Chromium issue [#963183][crbug963183]

## Announcements from the Chromium project

The following sections announce additional features available in Microsoft Edge 82 that were contributed to the open source Chromium project.

### Emulate vision deficiencies 

Open the [Rendering tab][RenderingDoc]
and use the new **Emulate vision deficiencies** feature to get a better idea of how people with
different types of vision deficiencies experience your site.

> ##### Figure 6
> Emulating blurred vision.  
> ![Emulating blurred vision.][ImageEmulatingBlurredVision]  

DevTools can emulate blurred vision and the following
[types of color vision deficiencies][ColorBlindness]

* Protanopia. The inability to perceive red light.
* Protanomaly. A reduced sensitivity to red light.
* Deuteranopia. The inability to perceive green light.
* Deuteranomaly. A reduced sensitivity to green light.
* Tritanopia. The inability to perceive blue light.
* Tritanomaly. A reduced sensitivity to blue light (extremely rare).
* Achromatopsia. The inability to perceive any color except for shades of grey (extremely rare).
* Achromatomaly. A reduced sensitivity to green, red, and blue light (extremely rare).

The `-anomaly` forms are the (rare) extreme versions of the `-ia` forms. Every person
with an `-ia` vision deficiency is different and might see things differently (being able
to perceive more/less of the relevant colors). The DevTools emulations are just a visual
approximation of how someone might experience one of these vision deficiencies. Although the
approximation should be good enough for you to identify and resolve issues, there's no way
to simulate exactly what a given person would experience.

Send us your feedback by [tweeting][PostTweetEdgeDevTools] at us or clicking the [Feedback](#feedback) icon!

Chromium issue [#1003700][crbug1003700]  

### Cross-Origin Opener Policy (COOP) and Cross-Origin Embedder Policy (COEP) debugging 

The Network panel now provides [Cross-Origin Opener Policy][COOP] and [Cross-Origin Embedder Policy][COEP]
debugging information.

The **Status** column now provides a quick explanation of why a request was blocked as well as a
link to view that request's headers for further debugging:

> ##### Figure 7
> Blocked requests in the **Status** column.  
> ![Blocked requests in the Status column.][ImageNetworkStatus]  

The **Response Headers** section of the **Headers** tab provides more guidance on how to resolve
the issues:

> ##### Figure 8
> More guidance in the Response Headers section.  
> ![More guidance in the Response Headers section.][ImageNetworkGuidance] 

Send us your feedback by [tweeting][PostTweetEdgeDevTools] at us or clicking the [Feedback](#feedback) icon!

Chromium issue [#1051466][crbug1051466]  

### **Dock to left** from the Command Menu 

Open the [Command Menu][DevToolsCommandMenuIndex] and run the `Dock to left`
command to move DevTools to the left of your viewport.

> ##### Figure 9
> DevTools docked to the left of the viewport.  
> ![DevTools docked to the left of the viewport.][ImageDockToLeft] 

> [!NOTE]
> The **Dock to left** feature has been available since Microsoft Edge 75 but it was previously only
accessible from the [**Main Menu**][MainMenuDoc]. The new feature in Microsoft Edge 82 is that you can now access this feature from the Command Menu.

Send us your feedback by [tweeting][PostTweetEdgeDevTools] at us or clicking the [Feedback](#feedback) icon!

Chromium issue [#1011679][crbug1011679]  

### The **Audits** panel is now the **Lighthouse** panel 

The DevTools team frequently got feedback from web developers that while it was possible to run [Lighthouse][LighthouseRepo] from DevTools, when they tried it out they couldn't find the "Lighthouse" panel, so the **Audits** panel is now the **Lighthouse** panel.

> ##### Figure 10
> The Lighthouse panel.  
> ![The Lighthouse panel.][ImageLighthouse] 

> [!NOTE]
> The **Lighthouse** panel provides links to content hosted on third-party websites. Microsoft is not responsible for and has no control over the content of these sites and any data they might collect.

### Delete all Local Overrides in a folder 

After setting up **Local Overrides** you can now
right-click a folder and select the new **Delete all overrides** option to delete all
Local Overrides in that folder.

> ##### Figure 11
> Delete all overrides. 
> ![Delete all overrides.][ImageDeleteOverrides] 

Send us your feedback by [tweeting][PostTweetEdgeDevTools] at us or clicking the [Feedback](#feedback) icon!

Chromium issue [#1016501][crbug1016501]  

### Updated Long tasks UI 

A **Long Task** is JavaScript code that
monopolizes the main thread for a long time, causing a web page to freeze.

You've been able to [visualize Long Tasks in the Performance panel][LongTasksInPerformancePanel]
for a while now, but in Microsoft Edge 82 the Long Task visualization UI in the Performance panel has been updated.
The Long Task portion of a task is now colored with a striped red background.

> ##### Figure 12
> The new Long Task UI.
> ![The new Long Task UI.][ImageLongTask] 

Send us your feedback by [tweeting][PostTweetEdgeDevTools] at us or clicking the [Feedback](#feedback) icon!

Chromium issue [#1054447][crbug1054447]  

### Maskable icon support in the Manifest pane 

Android Oreo introduced adaptive icons, which display app icons in a variety
of shapes across different device models. **Maskable icons**
are a new icon format that support adaptive icons, which enable you to ensure that
your [PWA][PWADoc] icon looks good on devices that support the
maskable icons standard.

Enable the new **Show only the minimum safe area for maskable icons** checkbox in the
**Manifest** pane to check that your maskable icon will look good on Android Oreo
devices. 
<!-- Check out [Are my current icons ready?]
to learn more. -->

> ##### Figure 13
> The "Show only the minimum safe area for maskable icons" checkbox.
> ![The "Show only the minimum safe area for maskable icons" checkbox][ImageMaskableIcons] 

> [!NOTE]
> This feature launched in Microsoft Edge 81. We're covering it here in Microsoft Edge 82 because we forgot to cover it in [What's New In DevTools (Microsoft Edge 81)][WhatsNew81].

## Feedback   



To discuss the new features and changes in this post, or anything else related to DevTools:  

*   Send your feedback using the **Feedback** icon in the DevTools 

> ##### Figure 14
> The **Feedback** icon in the Microsoft Edge DevTools  
> ![The **Feedback** icon in the Microsoft Edge DevTools][ImageFeedbackIcon]  

*   Tweet at [@EdgeDevTools][PostTweetEdgeDevTools]
*   Submit a suggestion to [The Web We Want][TheWebWeWant]
*   File bugs on this document in the [edge-developer][GitHubMicrosoftDocsEdgeDeveloperNewIssue] repository

## Download the Microsoft Edge preview channels   

If you are on Windows or macOS, consider using the [Microsoft Edge preview channels][MicrosoftEdgePreviewChannels] as your default development browser. The preview channels give you access to the latest DevTools features.

<!-- <<../../_shared/devtools-feedback.md>>

<<../../_shared/canary.md>>

<<../../_shared/discover.md>> -->



<!-- image links -->  
[ImageRemoteTools]: ../../images/2020/03/remote-tools.msft.png "Figre 1: The Remote Tools for Microsoft Edge (Beta) app available in the Microsoft Store."
[ImageColorPicker]: ../../images/2020/03/color-picker.msft.png "Figure 2: You are now able to use your keyboard to move the selector in the Shades section of the Color Picker."
[ImagePropertiesIn81]: ../../images/2020/03/properties-in-81.msft.png "Figure 3: In Microsoft Edge 81 and earlier, the Properties tab was blank after a page refresh."
[ImagePropertiesIn82]: ../../images/2020/03/properties-in-82.msft.png "Figure 4: In Microsoft Edge 82, the Properties tab displays the properties of the currently-selected element after a page refresh."
[ImageChanges]: ../../images/2020/03/changes.msft.png "Figure 5: In Microsoft Edge 82, you can scroll horizontally with the arrow keys to see your minified code in the Changes tool."
[ImageEmulatingBlurredVision]: ../../images/2020/03/vision.msft.png "Figure 6: Emulating blurred vision."  
[ImageNetworkStatus]: ../../images/2020/03/status.msft.png "Figure 7: Blocked requests in the **Status** column."
[ImageNetworkGuidance]: ../../images/2020/03/guidance.msft.png "Figure 8: More guidance in the Response Headers section."
[ImageDockToLeft]: ../../images/2020/03/dock-to-left.msft.png "Figure 9: DevTools docked to the left of the viewport."
[ImageLighthouse]: ../../images/2020/03/lighthouse.msft.png "Figure 10: The Lighthouse panel."
[ImageDeleteOverrides]: ../../images/2020/03/overrides.msft.png "Figure 11: Delete all overrides."
[ImageLongTask]: ../../images/2020/03/long-task.msft.png "Figure 12: The new Long Task UI."
[ImageMaskableIcons]: ../../images/2020/03/maskable-icons.msft.png "Figure 13: The 'Show only the minimum safe area for maskable icons' checkbox"
[ImageFeedbackIcon]: ../../images/2020/03/feedback-icon.msft.png "Figure 14: The **Feedback** icon in the Microsoft Edge DevTools"

<!-- links -->  
[PostTweetEdgeDevTools]: https://aka.ms/tweet/edgedevtools "@EdgeDevTools | Post a Tweet"  
[EdgeDevToolsTwitterAccount]: https://aka.ms/twitter/edgedevtools "@EdgeDevTools Twitter account"
[TheWebWeWant]: https://aka.ms/webwewant "The Web We Want"
[GitHubMicrosoftDocsEdgeDeveloperNewIssue]: https://aka.ms/edgedevtoolsdocs/feedback "New Issue - MicrosoftDocs/edge-developer" 
[MicrosoftEdgePreviewChannels]: https://aka.ms/microsoftedge "Microsoft Edge Preview Channels"  
[RenderingDoc]: ../../../evaluate-performance/reference.md#analyze-rendering-performance-with-the-rendering-tab "Analyze rendering performance with the Rendering tab"  
[ColorBlindness]: http://www.colourblindawareness.org/colour-blindness/types-of-colour-blindness/ "Types of Colour Blindness"
[crbug1003700]: https://crbug.com/1003700 "Issue 1003700: Add DevTools support for Color Vision Deficiency simulation"
[COOP]: https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit#bookmark=id.tu4hyy6v12wn "COOP and COEP explained - Cross-Origin Opener Policy"
[COEP]: https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit#bookmark=id.uo6kivyh0ge2 "COOP and COEP explained - Cross-Origin Embedder Policy"
[crbug1051466]: https://crbug.com/1051466 "Issue 1051466: Support COOP/COEP debugging in DevTools"
[DevToolsCommandMenuIndex]: ../../../command-menu/index.md "Run Commands With The Microsoft Edge DevTools Command Menu"  
[MainMenuDoc]: ../../../customize/placement.md#change-placement-from-the-main-menu "Change placement from the main menu"
[crbug1011679]: https://crbug.com/1011679 "Issue 1011679: Introduce 'Dock to Left' using the Command Menu"
[LighthouseRepo]: https://github.com/GoogleChrome/lighthouse "Lighthouse GitHub repo"
[crbug1016501]: https://crbug.com/1016501 "Issue 1016501: Feature Request: Button to delete all local overrides"
[LongTasksInPerformancePanel]: ../../../evaluate-performance/reference.md#view-main-thread-activity "View main thread activity"
[crbug1054447]: https://crbug.com/1054447 "Issue 1054447: Update performance metrics in DevTools Timeline"
[PWADoc]: ../../../../progressive-web-apps-chromium/index.md "Progressive Web Apps on Windows"
[WhatsNew81]: ../../2020/01/devtools.md "What's New In DevTools (Microsoft Edge 81)"
[RemoteTools]: https://www.microsoft.com/store/apps/9P6CMFV44ZLT "Remote Tools for Microsoft Edge (Beta)"
[MicrosoftStore]: https://www.microsoft.com/store/apps/windows "Microsoft Store"
[WindowsDevicePortal]: https://docs.microsoft.com/windows/uwp/debug-test-perf/device-portal "Windows Device Portal overview"
[RemoteDebuggingWin10]: ../../../remote-debugging/windows.md "Get Started with Remote Debugging Windows 10 Devices"
[ColorPicker]: ../../../css/reference.md#change-colors-with-the-color-picker "Change colors with the Color Picker"
[ElementsDoc]: ../../../css/index.md "Get Started With Viewing And Changing CSS"
[crbug963183]: https://crbug.com/963183 "Issue 963183: DevTools are not WCAG compliant"
[crbug1050999]: https://crbug.com/1050999 "Issue 1050999: Properties Tab"

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/updates/2020/03/devtools) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools & Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
