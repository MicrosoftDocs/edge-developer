---
description: The More Tools button, in-context documentation to get started using the DevTools extension, increased support for screen readers in the Console, and more.
title: What's new in DevTools (Microsoft Edge 92)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/25/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# What's New In DevTools (Microsoft Edge 92)  

[!INCLUDE [contact DevTools team note](../../includes/edge-whats-new-note.md)]  


> [!TIP]
> The **Microsoft Build 2021** conference is during May 25-27.  Here's a video from Build about the updates to DevTools: [Microsoft Edge | State of the Platform](https://www.youtube.com/watch?v=sU0WRZ0kkNo) - "Microsoft Edge brings a compelling and consistent platform and tools for developers.  As our legacy browsers phase out of support, Edge will soon be the only supported browser from Microsoft on Windows 10.  Join us to learn about the latest across the Edge platform, tools, and web apps."


## The Close button is no longer hidden when DevTools is narrow

<!-- Title: DevTools is now easier to close -->  
<!-- Subtitle: The Close button in DevTools is always displayed, even when DevTools is docked to the right and the DevTools viewport is narrow. -->  

In Microsoft Edge version 91 or earlier, the **Close** button to close DevTools isn't displayed when the DevTools viewport is narrow.  In Microsoft Edge version 92, the **Close** button in the DevTools is always present, regardless of the DevTools viewport width.

:::image type="complex" source="../../media/2021/05/close-devtools-button-always-displayed.msft.png" alt-text="The Close DevTools button is now present even when the viewport is narrow" lightbox="../../media/2021/05/close-devtools-button-always-displayed.msft.png":::
   The **Close** DevTools button is now present even when the viewport is narrow  
:::image-end:::  


## Add tools quickly with new More Tools button

<!-- Title: Add tools quickly with new More Tools button -->  
<!-- Subtitle: A convenient way to open new tools in Microsoft Edge DevTools. -->  

There's a new way to open more tools in Microsoft Edge DevTools: the **More Tools** (`+`) button and menu, on the main toolbar.  Selecting a tool from the **More Tools** menu adds the tool to the main toolbar.

The **More Tools** button was available as an experiment in Microsoft Edge versions 89 through 91, and is now always present, starting with Microsoft Edge version 92.

:::image type="complex" source="../../media/2021/05/more-tools-button.msft.png" alt-text="The More Tools button" lightbox="../../media/2021/05/more-tools-button.msft.png":::
   The **More Tools** button
:::image-end:::  

:::image type="complex" source="../../media/2021/05/more-tools-menu.msft.png" alt-text="The More Tools menu" lightbox="../../media/2021/05/more-tools-menu.msft.png":::
   The **More Tools** menu
:::image-end:::  

To reorder the tools on the main toolbar, navigate to [Reorder panels](../../../customize/index.md#reorder-panels).
<!-- todo: copy this What's New item into the "Reorder panels" section -->


## Hovering, selecting, and closing tools is more visually consistent

<!-- Title: Improvements to light and dark themes -->
<!-- Subtitle: Hovering, selecting, and closing tools is more visually consistent across both the default light and dark themes. -->

In the main toolbar at the top of DevTools, the tabs for each tool have been reformatted, to reduce the chance of accidentally closing a tool.  The highlighting that appears when hovering on another tool or hovering on the **More Tools** (`+`) button now looks consistent with the highlighting for the currently selected tool.

For example, when you are in the **Animations** tool and you hover over the **Network** tool's tab, the **Network** tab is now formatted to reduce the likelihood of accidentally closing it:

:::row:::
    :::column:::
        :::image type="complex" source="../../media/2021/05/hovering-on-tool-tab-in-dark-theme.msft.png" alt-text="When hovering over another tool's tab in dark theme, the tab is formatted to reduce the likelihood of accidentally closing it" lightbox="../../media/2021/05/hovering-on-tool-tab-in-dark-theme.msft.png":::
           When hovering over another tool's tab in dark theme, the tab is formatted to reduce the likelihood of accidentally closing it.
        :::image-end:::
    :::column-end:::
    :::column:::
        :::image type="complex" source="../../media/2021/05/hovering-on-tool-tab-in-light-theme.msft.png" alt-text="When hovering over another tool's tab in light theme, the tab is formatted to reduce the likelihood of accidentally closing it" lightbox="../../media/2021/05/hovering-on-tool-tab-in-light-theme.msft.png":::
           When hovering over another tool's tab in light theme, the tab is formatted to reduce the likelihood of accidentally closing it.
        :::image-end:::
    :::column-end:::
:::row-end:::

This clearer formatting is especially relevant for users of localized DevTools, in which the tabs may be narrower:

:::image type="complex" source="../../media/2021/05/hovering-reduced-chance-of-closing-tab.msft.png" alt-text="The tabs for each tool have been reformatted, to reduce the chance of accidentally closing them" lightbox="../../media/2021/05/hovering-reduced-chance-of-closing-tab.msft.png":::
   The tabs for each tool have been reformatted, to reduce the chance of accidentally closing them
:::image-end:::

On each tool's tab in the main toolbar, we added:
*  Spacing around the tab.
*  Spacing around the close (`x`) button in the tab.
*  A background color when hovering over the tab.
*  A tooltip for the close (`x`) button of the tab.
*  Higher contrast for the close button (`x`) of the tab.

We also made it easier to re-add a tool that you closed, by adding a [More Tools menu](#add-tools-quickly-with-new-more-tools-button).

To customize the theme for your DevTools, navigate to [Enable Dark Theme in Microsoft Edge DevTools](../../../customize/dark-theme.md).


## Better support for screen readers in the Console

<!-- Title: Better screen reader support in the Console -->
<!-- Subtitle: Assistive technologies can now announce autocomplete suggestions and evaluated expressions in the Console. -->

In Microsoft Edge version 91 or earlier, in the **Console**, assistive technologies such as screen readers did not announce autocomplete suggestions or the results of evaluated expressions.

In Microsoft Edge version 92, in the **Console**, screen readers now announce the currently selected autocomplete suggestion:

:::image type="complex" source="../../media/2021/05/screen-reader-support-in-console-autocomplete.msft.png" alt-text="In the Console, screen readers now announce the currently selected autocomplete suggestion" lightbox="../../media/2021/05/screen-reader-support-in-console-autocomplete.msft.png":::
   In the **Console**, screen readers now announce the currently selected autocomplete suggestion
:::image-end:::

In the **Console**, screen readers also now announce the result of an evaluated expression:

:::image type="complex" source="../../media/2021/05/screen-reader-support-in-console-evaluated-expression.msft.png" alt-text="In the Console, screen readers now announce the result of an evaluated expression" lightbox="../../media/2021/05/screen-reader-support-in-console-evaluated-expression.msft.png":::
   In the **Console**, screen readers now announce the result of an evaluated expression
:::image-end:::

For a related feature in Microsoft Edge version 89, navigate to [Assistive technologies now announce position and count of CSS suggestions](../01/devtools.md#assistive-technologies-now-announce-position-and-count-of-css-suggestions).

To learn more about the Console, navigate to [Use the Console](../../../console/index.md).


## Microsoft Edge Developer Tools for Visual Studio Code version 1.1.8

The [Microsoft Edge Developer Tools for Visual Studio Code][VisualstudioMarketplaceMsEdgedevtoolsVscodeEdgeDevtools] extension version 1.1.8 for Microsoft Visual Studio Code has the following changes since the previous release.  Microsoft Visual Studio Code updates extensions automatically.  To manually update to version 1.1.8, navigate to [Update an extension manually][VisualstudioCodeDocsEditorExtensionGalleryUpdateExtensionManually].  

You can file issues and contribute to the extension on the [vscode-edge-devtools GitHub repo][GithubMicrosoftVscodeEdgeDevtools].  

### In-context documentation to make it easier to use Microsoft Edge Developer Tools for Visual Studio Code

<!-- todo: finalize Title and Subtitle -->
<!-- Title: The **Microsoft Edge Tools for VS Code** extension now opens a documentation page with guidance on how to get started -->  
<!-- Subtitle: The **Microsoft Edge Tools for VS Code** extension now opens a documentation page with guidance on how to get started. -->  

Version 1.1.8 of the [Microsoft Edge Tools for VS Code](https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools) extension now features a simpler way to start a new instance of Microsoft Edge, by presenting buttons and documentation to guide you.  When you open a new instance of Microsoft Edge from within Visual Studio Code, instead of showing a blank page, new instances of Microsoft Edge now feature a start page that explains how to use the Microsoft Edge (Chromium) Developer Tools within Visual Studio Code.

**To launch Microsoft Edge and show instructions about using DevTools within Visual Studio Code:**

1.  In Visual Studio Code, open a new window (**File** > **New Window**).  At this point, no folder is opened.

1.  In the **Activity Bar** on the left, select the **Microsoft Edge Tools** button.  In the **Side Bar**, the **MICROSOFT EDGE TOOLS: TARGETS** panel appears:

    :::image type="complex" source="../../media/2021/05/edge-tools-extension-in-context-docs-initial-side-bar.msft.png" alt-text="The MICROSOFT EDGE TOOLS: TARGETS panel in the Side Bar of Visual Studio Code, showing the Launch Instance button" lightbox="../../media/2021/05/edge-tools-extension-in-context-docs-initial-side-bar.msft.png":::
       The **MICROSOFT EDGE TOOLS: TARGETS** panel in the **Side Bar** of Visual Studio Code, showing the **Launch Instance** button
    :::image-end:::  

1.  In the **Side Bar**, select the **Launch Instance** button.  Microsoft Edge opens, showing the new documentation page, which provides guidance and links for more information.  Also, in Visual Studio Code, DevTools opens.

    :::image type="complex" source="../../media/2021/05/edge-tools-extension-in-context-docs-doc-page.msft.png" alt-text="The new documentation page that appears in the browser, about how to use Microsoft Edge Developer Tools for Visual Studio Code" lightbox="../../media/2021/05/edge-tools-extension-in-context-docs-doc-page.msft.png":::
       The new documentation page that appears in the browser, about how to use Microsoft Edge Developer Tools for Visual Studio Code
    :::image-end:::  

1.  In the URL bar, navigate to the project that you want to debug using Microsoft Edge Developer Tools for Visual Studio Code.


Alternatively, you can use the Edge Developer Tools in Visual Studio Code to launch Microsoft Edge with your own project, to debug it, as follows.

**To launch Microsoft Edge with your own project:**

1.  In Visual Studio Code, open a new window (**File** > **New Window**).  At this point, no folder is opened.

1.  In the **Activity Bar** on the left, select the **Microsoft Edge Tools** button.  In the **Side Bar**, the **MICROSOFT EDGE TOOLS: TARGETS** panel appears, showing a single button (**Launch Instance**):

    :::image type="complex" source="../../media/2021/05/edge-tools-extension-in-context-docs-initial-side-bar.msft.png" alt-text="The MICROSOFT EDGE TOOLS: TARGETS panel in the Side Bar of Visual Studio Code, showing the Launch Instance button" lightbox="../../media/2021/05/edge-tools-extension-in-context-docs-initial-side-bar.msft.png":::
       The **MICROSOFT EDGE TOOLS: TARGETS** panel in the **Side Bar** of Visual Studio Code, showing the **Launch Instance** button
    :::image-end:::  

1.  In the **MICROSOFT EDGE TOOLS: TARGETS** panel, select the **open a folder** link, and open a folder, such as your own project.  The **MICROSOFT EDGE TOOLS: TARGETS** panel now shows two buttons: **Launch Instance** and **Generate launch.json**:

    :::image type="complex" source="../../media/2021/05/edge-tools-extension-in-context-docs-side-bar.msft.png" alt-text="The MICROSOFT EDGE TOOLS: TARGETS panel in the Side Bar of Visual Studio Code" lightbox="../../media/2021/05/edge-tools-extension-in-context-docs-side-bar.msft.png":::
       The **MICROSOFT EDGE TOOLS: TARGETS** panel in the **Side Bar** of Visual Studio Code
    :::image-end:::  
    
1.  In the **Side Bar**, select the **Generate launch.json** button.  A `launch.json` file is generated in the root of the project, and is opened for editing.

    :::image type="complex" source="../../media/2021/05/edge-tools-extension-in-context-docs-launch-json-file.msft.png" alt-text="Editing the URL in the launch.json file" lightbox="../../media/2021/05/edge-tools-extension-in-context-docs-launch-json-file.msft.png":::
       Editing the URL in the `launch.json` file
    :::image-end:::

1.  In the `launch.json` file, change the URL from an empty string to a URL for your project.  Or leave the string empty, to show the new documentation page.

1.  Save the `launch.json` file.

1.  In the **Side Bar**, select the **Launch Project** button.  Microsoft Edge opens, showing the URL that you specified.  Also, in Visual Studio Code, DevTools opens.

For more information, navigate to [Microsoft Edge Developer Tools for Visual Studio Code](https://microsoft.github.io/vscode-edge-devtools).


<!-- 
## Announcements from the Chromium project  

[!INCLUDE [contact DevTools team note](../../includes/chromium-whats-new-note.md)]  

### Ipsum et Chromium  

Lorem al lorem et Chromium  To review the history of this feature in the Chromium open-source project, navigate to Issue [xxxxxxx][CRxxxxxxx].  

:::image type="complex" source="../../media/202x/xx/lorem-et-chromium.msft.png" alt-text="Ipsum et Chromium" lightbox="../../media/202x/xx/lorem-et-chromium.msft.png":::
   Ipsum et Chromium  
:::image-end:::   
-->


## Download the Microsoft Edge preview channels  

If you are on Windows, Linux, or macOS, consider using the [Microsoft Edge preview channels][MicrosoftEdgePreviewChannels] as your default development browser.  The preview channels give you access to the latest DevTools features.  


## Getting in touch with Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../../includes/contact-whats-new-note.md)]

<!-- links -->  
[DevToolsCustomizePlacement]: https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/customize/placement "Change Microsoft Edge DevTools placement (Undock, Dock to bottom, Dock to left) | Microsoft Docs"

[DevtoolsCustomizeIndexSettings]: /microsoft-edge/devtools-guide-chromium/customize/index#settings "Settings - Customize Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsMain]: /microsoft-edge/devtools-guide-chromium/index "Microsoft Edge (Chromium) Developer Tools overview | Microsoft Docs"  

[GithubMicrosoftVscodeEdgeDevtools]: https://github.com/microsoft/vscode-edge-devtools "microsoft/vscode-edge-devtools | GitHub"  
[GithubMicrosoftVscodeEdgeDevtoolsPullxxx]: https://github.com/microsoft/vscode-edge-devtools/pull/xxx "Pull xxx: Lorem al Ipsum | GitHub"  

[MicrosoftEdgePreviewChannels]: https://www.microsoftedgeinsider.com/download "Microsoft Edge Preview Channels"  

[VisualstudioCodeDocsEditorExtensionGalleryUpdateExtensionManually]: https://code.visualstudio.com/docs/editor/extension-gallery#_update-an-extension-manually "Update an extension manually - Extension Marketplace | Visual Studio Code"  

[VisualstudioMarketplaceMsEdgedevtoolsVscodeEdgeDevtools]: https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools "Microsoft Edge Tools for Visual Studio Code | Visual Studio Marketplace"  

[CRIssuesList]: https://bugs.chromium.org/p/chromium/issues/list "Chromium bugs"  
[CRxxxxxxx]: https://crbug.com/xxxxxxx "Issue xxxxxxx: Lorem al Ipsum | Chromium bugs"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developer.chrome.com/blog/new-in-devtools-xx) and is authored by [Jecelyn Yeen][JecelynYeen] \(Developer advocate, Chrome DevTools\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[JecelynYeen]: https://developers.google.com/web/resources/contributors/jecelynyeen
