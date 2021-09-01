---
description: Easily search the web for console error message strings, DevTools extension for Visual Studio Code now has the newest tools and theme support, breakpoint icons are now displayed when using Visual Studio Code themes, and you can navigate to the More Tools button with the keyboard.
title: What's new in DevTools (Microsoft Edge 94)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/03/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# What's New In DevTools (Microsoft Edge 94)

[!INCLUDE [note about What's New announcements from the Microsoft Edge DevTools team](../../includes/edge-whats-new-note.md)]


## Look up error messages on the web from the Console

<!-- Title: Debug console errors with our new search feature -->
<!-- Subtitle: Try search console error for a seamless path to your error's solution. -->

Search the web for your **Console** error strings, from within DevTools.  In the **Console**, an error message now has a **Search for this message on the Web** button, shown as a magnifying glass.  When you select the **Search for this message on the Web** button, a new tab opens in the browser and shows search results for the error string.

:::image type="complex" source="../../media/2021/09/search-console-icon.msft.png" alt-text="The 'Search for this message on the Web' button on an error message in the **Console**" lightbox="../../media/2021/09/search-console-icon.msft.png":::
   The **Search for this message on the Web** button on an error message in the **Console**
:::image-end:::

For more information, navigate to [Look up error messages on the web from the Console][LookupErrorsWebFromConsole].


## DevTools extension for Visual Studio Code includes the latest tools, theme support, and helpful links

<!-- Title: Edge DevTools for VS Code now supports themes and uses the most recent codebase -->
<!-- Subtitle: The Edge DevTools extension for VS Code now uses the same version of the Developer Tools as your Microsoft Edge browser. We also added ways to learn more and for you to tell us what we could do better from within Visual Studio Code. -->

The Microsoft Edge DevTools extension for Visual Studio Code now uses the newest available version of the tools and supports the themes that ship with Visual Studio Code.  The Extension sidebar now provides direct links to our documentation and to file bugs or propose enhancements.  We also added a **Close** button to DevTools, and added support for JavaScript Debugger connections on remote workspaces.

:::image type="complex" source="../../media/2021/09/devtools-extension-dark-theme.msft.png" alt-text="The extension running inside Visual Studio Code, matching the dark theme of Visual Studio Code, and a new Helpful Links sidebar" lightbox="../../media/2021/09/devtools-extension-dark-theme.msft.png":::
   The extension running inside Visual Studio Code, matching the dark theme of Visual Studio Code, and a new **Helpful Links** sidebar
:::image-end:::

The light theme from Visual Studio Code is also supported.

:::image type="complex" source="../../media/2021/09/devtools-extension-light-theme.msft.png" alt-text="The extension running inside Visual Studio Code, matching the light theme of Visual Studio Code, and a new Helpful Links sidebar" lightbox="../../media/2021/09/devtools-extension-light-theme.msft.png":::
   The extension running inside Visual Studio Code, matching the light theme of Visual Studio Code, and a new **Helpful Links** sidebar
:::image-end:::

For more information, navigate to [Microsoft Edge DevTools extension for Visual Studio Code](https://docs.microsoft.com/microsoft-edge/visual-studio-code/microsoft-edge-devtools-extension).


## Breakpoint icons are now displayed when using Visual Studio Code themes

<!-- Title: Breakpoint icons are now displayed when using themes from Visual Studio Code -->
<!-- Subtitle: Setting, removing, and viewing breakpoints is now easier in Microsoft Edge. -->

In Microsoft Edge version 93, you can apply themes from Visual Studio Code to DevTools.  To try this feature, navigate to [Apply color themes to DevTools][ApplyColorThemesToDevTools].

Previously, when using a theme from Visual Studio Code in DevTools, breakpoint icons on the left margin of the code in the **Sources** tool weren't displayed.  Starting in Microsoft Edge 94, breakpoint icons are now displayed as expected.

:::image type="complex" source="../../media/2021/09/breakpoint-icons-displayed-in-vs-code-themes.msft.png" alt-text="Breakpoint icons are now displayed when using Visual Studio Code themes" lightbox="../../media/2021/09/breakpoint-icons-displayed-in-vs-code-themes.msft.png":::
   Breakpoint icons are now displayed when using Visual Studio Code themes
:::image-end:::

To learn more about using breakpoints for debugging JavaScript code, navigate to [How to pause your code with breakpoints in Microsoft Edge DevTools][PauseCodeWithBreakpoints].


## Navigate to the More Tools button with the keyboard

<!-- Title: Use the arrow keys to quickly navigate to the + button and open more tools -->
<!-- Subtitle: Improved keyboard accessibility with the arrow keys in the main DevTools toolbar. -->

Previously, you couldn't navigate to the **More Tools** (+) button in DevTools by using the arrow keys in the keyboard when the toolbar had focus.  After the last tool in the toolbar, the arrow keys looped back to the first tool, or they expanded the **More tabs** menu.

Starting with Microsoft Edge version 93, the **More tabs** (`>>`) button and the **More Tools** button can be selected by using the arrow keys, when focus is on the toolbar.

:::image type="complex" source="../../media/2021/09/nav-to-more-tools-button-with-keyboard.msft.png" alt-text="Using the arrow keys to put focus on the **More tabs** or **More Tools** button" lightbox="../../media/2021/09/nav-to-more-tools-button-with-keyboard.msft.png":::
   Using the arrow keys to put focus on the **More tabs** or **More Tools** button
:::image-end:::

To learn more about how to navigate the DevTools with the keyboard, navigate to [Microsoft Edge DevTools keyboard shortcuts][DevToolsKeyboardShortcuts].


<!-- ====================================================================== -->
## Download the Microsoft Edge preview channels

If you are on Windows, Linux, or macOS, consider using the [Microsoft Edge preview channels][MicrosoftEdgePreviewChannels] as your default development browser.  The preview channels give you access to the latest DevTools features.


<!-- ====================================================================== -->
## Getting in touch with Microsoft Edge DevTools team

[!INCLUDE [contact DevTools team note](../../includes/contact-whats-new-note.md)]


<!-- ====================================================================== -->
<!-- links -->
[LookupErrorsWebFromConsole]: ../../../console/console-debug-javascript.md#look-up-error-messages-on the-web-from-the-console "Look up error messages on the web from the Console - Experimental features | Microsoft Docs"
[DevToolsKeyboardShortcuts]: ../../../shortcuts/index.md "Microsoft Edge DevTools keyboard shortcuts | Microsoft Docs"
[ApplyColorThemesToDevTools]: ../../../customize/theme.md "Apply color themes to DevTools | Microsoft Docs"
[PauseCodeWithBreakpoints]: ../../../javascript/breakpoints.md "How to pause your code with breakpoints in Microsoft Edge DevTools | Microsoft Docs"

<!-- external links -->
[MicrosoftEdgePreviewChannels]: https://www.microsoftedgeinsider.com/download "Microsoft Edge Preview Channels"

[VisualstudioMarketplaceMsEdgedevtoolsVscodeEdgeDevtools]: https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools "Microsoft Edge Developer Tools for Visual Studio Code | Visual Studio Marketplace"


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].
> The original page is found [here](https://developer.chrome.com/blog/new-in-devtools-xx) and is authored by [Jecelyn Yeen][JecelynYeen] \(Developer advocate, Chrome DevTools\).

[![Creative Commons License][CCby4Image]][CCA4IL]
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].

[CCA4IL]: https://creativecommons.org/licenses/by/4.0
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies
[JecelynYeen]: https://developers.google.com/web/resources/contributors/jecelynyeen
