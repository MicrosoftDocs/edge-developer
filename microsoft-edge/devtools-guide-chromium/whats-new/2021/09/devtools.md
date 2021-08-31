---
description: Easily search the web for console message error strings, DevTools extension for Visual Studio Code now has the newest tools and theme support, breakpoint icons are now displayed when using Visual Studio Code themes, and you can navigate to the More Tools button with the keyboard.
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


<!-- 1 -->
<!-- ====================================================================== -->
## Search Console Error

<!-- Title: Debug console errors with our new search feature -->
<!-- Subtitle: Try search console error for a seamless path to your error's solution. -->

:::image type="icon" source="../../media/2020/06/experimental-tag-14px.msft.png":::  

Search the web for your **Console** error strings, from within DevTools.  When you hover over a magnifying glass icon on an error message in the **Console**, the tooltip is displayed: **Search for this message on the Web**.

:::image type="complex" source="../../media/2021/09/search-console-icon.msft.png" alt-text="The Search Console Error magnifying glass icon in the Console pane" lightbox="../../media/2021/09/search-console-icon.msft.png":::
   The **Search Console Error** magnifying glass icon in the **Console** pane
:::image-end:::

When you select the magnifying glass icon, a new tab opens in the browser and shows search results for the error string.

:::image type="complex" source="../../media/2021/09/search-console-new-tab.msft.png" alt-text="New tab that opened from the Search Console Error feature" lightbox="../../media/2021/09/search-console-new-tab.msft.png":::
   New tab that opened from the **Search Console Error** feature
:::image-end:::

For more information, navigate to [Experimental features: Search Console Error][ExpFeaturesSearchConsoleError].


<!-- 2 -->
<!-- ====================================================================== -->
## DevTools extension for Visual Studio Code now with newest tools, theme support, and helpful links

<!-- Title: Edge DevTools for VS Code now supports themes and uses the newest codebase -->
<!-- Subtitle: The Edge DevTools extension for VS Code now uses the same version of the Developer Tools as your Microsoft Edge browser and we added ways to learn more and tell us what we could do better. -->

The Microsoft Edge DevTools extension for Visual Studio Code now uses the newest available version of the tools and supports the themes that ship with Visual Studio Code.  The Extension sidebar now provides direct links to our documentation and to file bugs or propose enhancements.  We also added a **Close** button to DevTools, and added support for JavaScript Debugger connections on remote workspaces.

Screenshot 1: Dark theme.

:::image type="complex" source="../../media/2021/09/devtools-extension-dark-theme.msft.png" alt-text="Dark theme" lightbox="../../media/2021/09/devtools-extension-dark-theme.msft.png":::
   Dark theme
:::image-end:::

Screenshot 2: Light theme, Elements tool.

:::image type="complex" source="../../media/2021/09/devtools-extension-light-elements.msft.png" alt-text="Light theme, Elements tool" lightbox="../../media/2021/09/devtools-extension-light-elements.msft.png":::
   Light theme, Elements tool
:::image-end:::

Screenshot 3: Light theme.

:::image type="complex" source="../../media/2021/09/devtools-extension-light-theme.msft.png" alt-text="Light theme" lightbox="../../media/2021/09/devtools-extension-light-theme.msft.png":::
   Light theme
:::image-end:::

For more details about improvements and fixes, check the [changelog file][GithubMicrosoftVscodeEdgeDevtoolsChangelog] in the `vscode-edge-devtools` repo.  Get the [Microsoft Edge Developer Tools for Visual Studio Code extension][VisualstudioMarketplaceMsEdgedevtoolsVscodeEdgeDevtools].  Microsoft Visual Studio Code updates extensions automatically; to update this extension manually instead, navigate to [Update an extension manually][VisualstudioCodeDocsEditorExtensionGalleryUpdateExtensionManually].  You can file issues and contribute to the extension on the [vscode-edge-devtools GitHub repo][GithubMicrosoftVscodeEdgeDevtools].


<!-- 3 -->
<!-- ====================================================================== -->
## Breakpoint icons are now displayed in Visual Studio Code themes

<!-- Title: Breakpoint icons are now displayed when using DevTools themes from Visual Studio Code -->
<!-- Subtitle: Setting, removing, and viewing breakpoints is now easier in Microsoft Edge. -->

In Microsoft Edge version 93, you can apply themes from Visual Studio Code to DevTools.  To try this feature, navigate to [Apply color themes to DevTools][ApplyColorThemesToDevTools].

When using a theme from Visual Studio Code in DevTools in Microsoft Edge version 93, breakpoint icons weren't displayed when setting breakpoints in the **Sources** tool.  Starting with Microsoft Edge 94, breakpoint icons are now displayed.

:::image type="complex" source="../../media/2021/09/breakpoint-icons-displayed-in-vs-code-themes.msft.png" alt-text="Breakpoint icons are now displayed when using Visual Studio Code themes" lightbox="../../media/2021/09/breakpoint-icons-displayed-in-vs-code-themes.msft.png":::
   Breakpoint icons are now displayed when using Visual Studio Code themes
:::image-end:::

To learn more about using breakpoints for debugging JavaScript code, navigate to [How to pause your code with breakpoints in Microsoft Edge DevTools][PauseCodeWithBreakpoints].


<!-- 4 -->
<!-- ====================================================================== -->
## Navigate to the More Tools button with the keyboard

<!-- Title: Use the arrow keys to quickly navigate to the **+** button and open more tools -->
<!-- Subtitle: Improved keyboard accessibility with the arrow keys in the main DevTools toolbar. -->

Previously, you couldn't navigate to the **More Tools** (+) button in DevTools by using the arrow keys in the keyboard when the toolbar had focus.  After the last tool in the toolbar, the arrow keys looped back to the first tool, or they expanded the **More tabs** menu.

Starting with Microsoft Edge version 93, the **More tabs** button and the **More Tools** button can be selected by using the arrow keys, when focus is on the toolbar.

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
[ExpFeaturesSearchConsoleError]: ../../../experimental-features/index.md#enable-search-console-error-functionality "Enable Search Console Error functionality - Experimental features | Microsoft Docs"
[DevToolsKeyboardShortcuts]: ../../../shortcuts/index.md "Microsoft Edge DevTools keyboard shortcuts | Microsoft Docs"
[ApplyColorThemesToDevTools]: ../../../customize/theme.md "Apply color themes to DevTools | Microsoft Docs"
[PauseCodeWithBreakpoints]: ../../../javascript/breakpoints.md "How to pause your code with breakpoints in Microsoft Edge DevTools | Microsoft Docs"

<!-- external links -->
[MicrosoftEdgePreviewChannels]: https://www.microsoftedgeinsider.com/download "Microsoft Edge Preview Channels"

[VisualstudioCodeDocsEditorExtensionGalleryUpdateExtensionManually]: https://code.visualstudio.com/docs/editor/extension-gallery#_update-an-extension-manually "Update an extension manually - Extension Marketplace | Visual Studio Code"

[VisualstudioMarketplaceMsEdgedevtoolsVscodeEdgeDevtools]: https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools "Microsoft Edge Developer Tools for Visual Studio Code | Visual Studio Marketplace"

[GithubMicrosoftVscodeEdgeDevtools]: https://github.com/microsoft/vscode-edge-devtools "microsoft/vscode-edge-devtools | GitHub"
[GithubMicrosoftVscodeEdgeDevtoolsChangelog]: https://github.com/microsoft/vscode-edge-devtools/blob/main/CHANGELOG.md "Changelog file - vscode-edge-devtools | GitHub"


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
