---
description: __, __, __, and more.
title: What's new in DevTools (Microsoft Edge 93)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/28/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# What's New In DevTools (Microsoft Edge 93)

<!-- todo: what date to put? -->

[!INCLUDE [contact DevTools team note](../../includes/edge-whats-new-note.md)]

<!-- 1 -->
## Apply themes from VS Code to Edge DevTools

<!-- Title: Apply themes from VS Code to Edge DevTools -->
<!-- Subtitle: You can now use some of the most popular color themes from VS Code, such as Monokai and Solarized Dark, in DevTools. -->

In addition to the default light and dark themes, Edge DevTools now supports some of the most popular color themes from VS Code.  To select a color theme, navigate to **Settings** and then select a theme from the **Theme** dropdown list.  Available themes:

Light themes:
*  Light+ (Default)
*  Solarized Light
*  Quiet Light

Dark themes:
*  Dark+ (Default)
*  Abyss
*  Kimbie Dark
*  Monokai
*  Monokai Dimmed
*  Solarized Dark
*  Red
*  Tomorrow Night Blue

:::image type="complex" source="../../media/2021/07/all-devtools-themes.msft.png" alt-text="Color themes for DevTools" lightbox="../../media/2021/07/all-devtools-themes.msft.png":::
   Color themes for DevTools
:::image-end:::
<!--
Adjacent Twitter posts June 9:
Image similar to the above: https://twitter.com/partytimeHXLNT/status/1402727209593409546?s=20
Video showing selecting a different theme in Settings: https://twitter.com/partytimeHXLNT/status/1402757262825906178?s=20
-->

For more information, navigate to [Apply color themes to Microsoft Edge DevTools](../../../customize/theme.md).


<!-- 2 -->
## New look-and-feel for Edge DevTools 

<!-- Title: New look-and-feel for Edge DevTools -->
<!-- Subtitle: The Edge DevTools has adopted Fluent UI, giving it a more modern look that better aligns with the rest of the Edge browser. -->

Microsoft Edge DevTools has adopted [Fluent UI](https://developer.microsoft.com/en-us/fluentui#/), giving buttons and menus a more modern look that better aligns with the rest of the Edge browser.

:::image type="complex" source="../../media/2021/07/fluent-ui.msft.png" alt-text="DevTools implemented with Fluent UI design" lightbox="../../media/2021/07/fluent-ui.msft.png":::
   DevTools implemented with Fluent UI design
:::image-end:::
<!-- screenshot the main UI of DevTools with the Sources tool open -->


<!-- 3 -->
## Debug DOM node memory leaks with the new Detached Elements tool

:::image type="icon" source="../../media/2020/06/experimental-tag-14px.msft.png":::  

<!-- Title: Introducing the Detached Elements tool -->
<!-- Subtitle: Use the Detached Elements tool to find and fix DOM node memory leaks. -->

A DOM node is considered "detached" when it is no longer attached to any element of the DOM but is still being retained in memory by Microsoft Edge. The browser cannot garbage collect (GC) the element, because some JavaScript is still referencing the element even though it's no longer on the page or is not longer a part of the DOM.

The new **Detached Elements** tool finds all of the detached elements on your page and displays them. You can expand and collapse the detached element to see the parent and child nodes that are also being retained. You can trigger the browser's garbage collection by selecting **Collect garbage** and validate that you have a memory leak when a detached element cannot be GC'd. And you can jump into JavaScript that's referencing the detached element by taking a heap snapshot with the **Analyze** button.

:::image type="complex" source="../../media/2021/07/__.msft.png" alt-text="__" lightbox="../../media/2021/07/__.msft.png":::
   __
:::image-end:::
<!-- See the work item; follow wiki instructions about "Detached Elements - Overview".
Take the screenshot with the Memory tool in the drawer, and the Retainers section of the heap snapshot linking to a Calendar.tsx component from the ToDo folks.

A video recording of this feature in action (1:11 long) is available at Microsoft Stream.  todo: link?
-->

For more information, navigate to Experimental features (link TBD).  todo.
<!-- Not found: PR for new section of Experimental Features doc for Detached Elements -->


<!-- 4 -->
<!-- pri1 -->
## Change your DevTools language directly from Settings

<!-- Title: DevTools Settings: now with language settings -->
<!-- Subtitle: You can now skip the browser settings and update your DevTools language right from DevTools Settings. -->

Users have been able to match their browser language for a while, but changing it required changing the browser language or defaulting to English. Now users can easily switch their locale in DevTools Settings without messing with their browser settings.

:::image type="complex" source="../../media/2021/07/__.msft.png" alt-text="__" lightbox="../../media/2021/07/__.msft.png":::
   __
:::image-end:::
<!-- Instructions for screenshot
(how to configure the DevTools correctly, a website or CodePen that the writer can use, where to navigate in the DevTools UI for the screenshot, etc.)
Navigate to DevTools (F12) > Settings > Preferences
Click the drop-down for "Language" (it will likely be pre-populated with "Browser UI language") -->

For more information, navigate to (TBD).  todo.

Issue: [\[l10n\] Add setting for users to choose DevTools locale](https://chromium-review.googlesource.com/c/devtools/devtools-frontend/+/2882756).
<!-- todo: include issue link on each what's new item? -->


<!-- 5 -->
## Copy a declaration in the Styles pane for CSS-in-JS libraries

<!-- Title: Better support for CSS-in-JS libraries -->
<!-- todo: title was: "Better support for CSS-in-JS libraries in DevTools".  deleted "in DevTools", ok? -->

<!-- Subtitle: Copy a single declaration or all declarations for a style rule from the Styles pane, formatted for JavaScript. -->

Previously, when using CSS-in-JS libraries, you were not able to copy CSS declarations (a CSS property and value) formatted for JavaScript. You would have to edit the copied CSS to match JavaScript's syntax.

Now in Microsoft Edge version 93, you are able to copy a single CSS declaration or all the declarations in a style rule and paste them directly into a JavaScript file without running into syntax issues. To try this feature, complete the following actions:

1. Open the contextual menu (right-click) in the Styles pane on a declaration in a style rule.
1. Select **Copy declaration as JS** or **Copy all declarations as JS**.
1. Paste the copied CSS into a JavaScript file in your text editor, such as VS Code.

:::image type="complex" source="../../media/2021/07/__.msft.png" alt-text="__" lightbox="../../media/2021/07/__.msft.png":::
   __
:::image-end:::
<!-- Instructions for screenshot:
1. Open DevTools > Elements.
2. In the Styles pane, open the context menu on a declaration in a style rule
3. See the "Copy declaration as JS" and "Copy all declarations as JS" context menu options.
4. Take screenshot.
5. Draw red outlines around both context menu options. -->

To learn more about viewing and changing CSS, navigate to [CSS reference](../../../css/reference.md).


<!-- 6 -->
<!-- pri1 -->
## Smoother customization for User-Agent Client Hints

<!-- Title: Send as many (or as few) Client Hints as you want -->
<!-- Subtitle: Updated User-Agent Client Hints UI in the Network conditions pane and under Emulated Devices settings -->

Client Hints makes browser information more accessible and improves site compatibility, but they can be time-consuming to test. We replaced the previous debugging experience so you can easily modify User Agent (UA) Client Hints through an accessible UI. You can also test custom UA Client Hints and UA Strings simultaneously.

:::image type="complex" source="../../media/2021/07/__.msft.png" alt-text="__" lightbox="../../media/2021/07/__.msft.png":::
   __
:::image-end:::
<!-- Instructions for screenshot

For Devices:
1. Navigate to DevTools > Settings > Devices
2. Click on "Add custom device..." button
3. Select the drop-down arrow next to "User agent client hints"
4. Fill out a few values, including Device Name (the benefit is that you don't have to fill out everything, so don't fill it out completely)

For Network Conditions:
1. Navigate to DevTools > Network conditions
2. Deselect "Use browser default" in the "User agent" row
3. Select the drop-down arrow next to "User agent client hints"
4. Fill out as many values as you want or use the drop-down with "Custom" pre-selected to fill it out based on an existing example. -->

For more information about this feature, navigate to [How to detect Microsoft Edge in your website - Microsoft Edge Development | Microsoft Docs](../../../web-platform/user-agent-guidance.md).
<!-- (will be updated with tooltip) -->

<!-- crbug link is avail -->


<!-- 7 -->
## Screen readers now announce errors, warnings, and issues in toolbar and Console

<!-- Title: Better support for errors, warnings, and issues with assistive technology -->
<!-- Subtitle: Screen readers now correctly announce the number and the type of notification for errors, warnings, and issues in the DevTools toolbar. -->

Previously, users of screen readers would only hear the number of errors, warnings, or issues announced in the DevTools toolbar.  The additional information of what type of notification was being announced wasn't included, such as "Error, Warning, or Issue". For example, if the DevTools reported 3 errors, screen readers would just announce "3".

Now in Microsoft Edge version 93, screen readers correctly announce the number of errors, warnings, or issues that the DevTools have detected and the type of notification. For example, if the DevTools reported 3 errors, screen readers now announce "3 errors".
<!-- todo: what if 2 errors and 3 warnings?
For example, if the DevTools reported 3 errors, screen readers now announce "3 errors".
 -->
This fix has been applied to both the notifications in the DevTools toolbar and in the Console.

:::image type="complex" source="../../media/2021/07/__.msft.png" alt-text="__" lightbox="../../media/2021/07/__.msft.png":::
   __
:::image-end:::
<!-- Instructions for screenshot
(how to configure the DevTools correctly, a website or CodePen that the writer can use, where to navigate in the DevTools UI for the screenshot, etc.)

Screenshot 1:
Open DevTools on reddit.com
Draw a red outline around the errors, warnings, and issues UI in the toolbar here: 
Image

Screenshot 2:
Open DevTools on reddit.com
Navigate to the Console tool
Draw a red outline around the issues UI in the Console here: Image
Video recording of feature in action
(we want to incorporate more multimedia assets into our What's New docs which drives engagement. Check out the wiki for instructions)
N/A
Chris it'd be cool to get a video of this a11y fix where the text the screen reader announces is actually displayed as well. -->

For more information about debugging Console errors, navigate to [Debug errors reported in Console](Tracking down errors using the Console - Microsoft Edge Development | Microsoft Docs). For more information about issues found by DevTools and improvements you can make to your website (or app), navigate to [Find and fix problems using the Issues tool](Find and fix problems using the Issues tool - Microsoft Edge Development | Microsoft Docs).

<!-- crbug link
1223208 - Inappropriate information is announced by screen reader for the Errors and Warnings in the header - chromium -->


<!-- 8 -->
## Copy as PowerShell in the Network tool now includes cookies

<!-- Title: Generate PowerShell commands for network requests in the Network tool -->
<!-- Subtitle: The Copy as PowerShell context menu option now correctly sets the user agent string and cookies when generating PowerShell network requests. -->

Previously, in the Network tool, the Copy > Copy as PowerShell context menu option did not include cookies when generating a PowerShell command for a given network request in the Network Activity Log. This meant that the generated PowerShell command could not successfully make the same network request if cookies were required.

Now in Microsoft Edge version 93, the Copy as PowerShell context menu option correctly sets the user agent string and cookies that were observed by the DevTools. The generated PowerShell command can now successfully make the same network request that was observed by the DevTools, even to servers that depend on cookies.

:::image type="complex" source="../../media/2021/07/__.msft.png" alt-text="__" lightbox="../../media/2021/07/__.msft.png":::
   __
:::image-end:::
<!-- Instructions for screenshot
(how to configure the DevTools correctly, a website or CodePen that the writer can use, where to navigate in the DevTools UI for the screenshot, etc.)
Open the DevTools on Microsoft Edge (Chromium) Developer Tools overview - Microsoft Edge Development | Microsoft Docs - https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/
Navigate to the Network tool
Refresh the page
Right-click any of the rows in the Network Activity Log
Expand the Copy entry and highlight the Copy as PowerShell option
Draw a red outline around the Copy as PowerShell option -->

For more information about the Network Activity Log, navigate to [Network Analysis reference](../../../network/reference.md).
<!-- "Network Analysis reference | Microsoft Docs" -->

<!-- 932971 - Network tab, Copy as Powershell == doesn't send cookies properly - chromium
https://bugs.chromium.org/p/chromium/issues/detail?id=932971 -->


## Microsoft Edge Developer Tools for Visual Studio Code version 1.1.8

The [Microsoft Edge Developer Tools for Visual Studio Code][VisualstudioMarketplaceMsEdgedevtoolsVscodeEdgeDevtools] extension version 1.1.8 for Microsoft Visual Studio Code has the following changes since the previous release.  Microsoft Visual Studio Code updates extensions automatically.  To manually update to version 1.1.8, navigate to [Update an extension manually][VisualstudioCodeDocsEditorExtensionGalleryUpdateExtensionManually].

You can file issues and contribute to the extension on the [vscode-edge-devtools GitHub repo][GithubMicrosoftVscodeEdgeDevtools].

<!-- 9 -->
### Microsoft Edge Developer Tools for Visual Studio Code now integrates with the VS Code Debugger workflow

<!-- Title: __ -->
<!-- Subtitle: Edge DevTools for VS Code now integrates seamlessly with the JavaScript debugging workflow in the editor. -->

If you use the JavaScript debugging workflow in Visual Studio Code, you can now launch the DevTools extension by selecting the **Inspect** button.

:::image type="complex" source="../../media/2021/07/inspect-button.msft.png" alt-text="The Inspect button in Visual Studio Code to launch the DevTools extension" lightbox="../../media/2021/07/inspect-button.msft.png":::
   The **Inspect** button in Visual Studio Code to launch the DevTools extension
:::image-end:::

This feature allows you to keep all your JavaScript debugging inside Visual Studio and inspect the DOM and CSS at the same time. If you don't have the DevTools extension installed, Visual Studio Code will prompt you, to install the extension seamlessly.

Other new features are:
*  More detailed documentation of the extension.
*  Several bug fixes.
*  The tools refresh automatically when you switch between different debugging targets.

For more details, check the Changelog of the [vscode-edge-devtools repo](https://github.com/microsoft/vscode-edge-devtools).

:::image type="complex" source="../../media/2021/07/__.msft.png" alt-text="__" lightbox="../../media/2021/07/__.msft.png":::
   __
:::image-end:::
<!-- Instructions for screenshot
See the instructions in the videos, to make the screen shot:

Video recordings of this feature in action:

Usage with already installed extension: ["EdgeDevTools Breakpoint Debugging Integration" - YouTube](https://www.youtube.com/watch?v=UqFOICZRPAo)

Usage with installing: [Debugger Installing EdgeDevTools - YouTube](https://www.youtube.com/watch?v=1-6fRdqyoA0)
-->

For more information, navigate to [Launching Edge DevTools from the JS Debugger workflow](https://microsoft.github.io/vscode-edge-devtools/debugger-integration.html).
<!-- "Launching Edge DevTools from the JS Debugger workflow - vscode-edge-devtools | GitHub -->


## Download the Microsoft Edge preview channels

If you are on Windows, Linux, or macOS, consider using the [Microsoft Edge preview channels][MicrosoftEdgePreviewChannels] as your default development browser.  The preview channels give you access to the latest DevTools features.


## Getting in touch with Microsoft Edge DevTools team

[!INCLUDE [contact DevTools team note](../../includes/contact-whats-new-note.md)]


<!-- links -->
<!-- external links -->
[GithubMicrosoftVscodeEdgeDevtools]: https://github.com/microsoft/vscode-edge-devtools "microsoft/vscode-edge-devtools | GitHub"

[MicrosoftEdgePreviewChannels]: https://www.microsoftedgeinsider.com/download "Microsoft Edge Preview Channels"

[VisualstudioCodeDocsEditorExtensionGalleryUpdateExtensionManually]: https://code.visualstudio.com/docs/editor/extension-gallery#_update-an-extension-manually "Update an extension manually - Extension Marketplace | Visual Studio Code"

[VisualstudioMarketplaceMsEdgedevtoolsVscodeEdgeDevtools]: https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools "Microsoft Edge Developer Tools for Visual Studio Code | Visual Studio Marketplace"

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].
> The original page is found [here](https://developer.chrome.com/blog/new-in-devtools-xx) and is authored by [Jecelyn Yeen][JecelynYeen] \(Developer advocate, Chrome DevTools\).

[![Creative Commons License][CCby4Image]][CCA4IL]
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].

[CCA4IL]: https://creativecommons.org/licenses/by/4.0
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies
[JecelynYeen]: https://developers.google.com/web/resources/contributors/jecelynyeen
