---
description: The More Tools button, in-context documentation to get started using the DevTools extension, increased support for screen readers in the Console, and more.
title: What's new in DevTools (Microsoft Edge 92)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/02/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# What's New In DevTools (Microsoft Edge 92)  

[!INCLUDE [contact DevTools team note](../../includes/edge-whats-new-note.md)]  


> [!TIP]
> The **Microsoft Build 2021** conference was on May 25-27.  Here's a video from Build about the updates to DevTools: 
> [Microsoft Edge | State of the Platform][YoutubeEdgeStateOfThePlatform] - Microsoft Edge brings a compelling and consistent platform with tools for developers.  As our legacy browsers phase out of support, Edge will soon be the only supported browser from Microsoft on Windows 10.  Join us to learn about the latest across the Edge platform, tools, and web apps.


## The Close button is no longer hidden when DevTools is narrow

<!-- Title: DevTools is now easier to close -->  
<!-- Subtitle: The Close button in DevTools is always displayed, even when DevTools is docked to the right and the DevTools viewport is narrow. -->  

In Microsoft Edge version 91 or earlier, the **Close** button to close DevTools isn't displayed when the DevTools viewport is narrow.  In Microsoft Edge version 92, the **Close** button in the DevTools is always present, regardless of the DevTools viewport width.

:::image type="complex" source="../../media/2021/05/close-devtools-button-always-displayed.msft.png" alt-text="The Close DevTools button is now present even when the viewport is narrow" lightbox="../../media/2021/05/close-devtools-button-always-displayed.msft.png":::
   The **Close** DevTools button is now present even when the viewport is narrow  
:::image-end:::  


## Add tools quickly with the new More Tools button

<!-- Title: Add tools quickly with the new More Tools button -->  
<!-- Subtitle: Learn about a new convenient way to open tools in Microsoft Edge DevTools. -->  

There's a new way to open more tools in Microsoft Edge DevTools: the **More Tools** (`+`) menu. The **More Tools** menu appears on the toolbar in the main panel and in the toolbar of the drawer. Selecting a tool from the **More Tools** menu adds the tool to the toolbar.

To reorder the tabs on either toolbar, select and drag the tabs.

:::image type="complex" source="../../media/2021/05/more-tools-button.msft.png" alt-text="The More Tools button" lightbox="../../media/2021/05/more-tools-button.msft.png":::
:::image type="complex" source="../../media/2021/05/more-tools-button.msft.png" alt-text="The More Tools button on the upper toolbar" lightbox="../../media/2021/05/more-tools-button.msft.png":::
   The **More Tools** button on the upper toolbar
:::image-end:::  

:::image type="complex" source="../../media/2021/05/more-tools-menu.msft.png" alt-text="The More Tools menu" lightbox="../../media/2021/05/more-tools-menu.msft.png":::
   The **More Tools** menu
:::image-end:::  

The **More Tools** menu was available as an experiment in Microsoft Edge version 89, and is now always present.


## Improvements for hovering, selecting, and closing tools

<!-- Title: Improvements to tab interactions -->
<!-- Subtitle: Interactions related to hovering, selecting, and closing tools are more predictable. -->

Tabs for each tool have been reformatted to reduce the chance of accidentally closing a tool.  On each tab in the main toolbar, we added:
*  Spacing around the tab.
*  Spacing around the close (`x`) button in the tab.
*  A background color when hovering over the tab.
*  A tooltip for the close (`x`) button of the tab.
*  Higher contrast for the close (`x`) button of the tab.

For example, when you are in the **Animations** tool and you hover over the **Network** tool's tab, these improvements help prevent accidentally closing the **Network** tool.

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

These improvements are especially relevant for users of localized DevTools, in which the tabs may be narrower and easier to accidentally close.


:::image type="complex" source="../../media/2021/05/hovering-reduced-chance-of-closing-tab.msft.png" alt-text="Localized DevTools with narrow tabs" lightbox="../../media/2021/05/hovering-reduced-chance-of-closing-tab.msft.png":::
   Localized DevTools with narrow tabs
:::image-end:::

We also made it easier to re-add a tool that you closed by adding a [More Tools menu](#add-tools-quickly-with-the-new-more-tools-button) to the main toolbar and drawer toolbar.


## Better support for screen readers in the Console

<!-- Title: Better screen reader support in the Console -->
<!-- Subtitle: Assistive technologies can now announce autocomplete suggestions and evaluated expressions in the Console. -->

Prior to Microsoft Edge version 92, in the **Console**, assistive technologies such as screen readers didn't announce autocomplete suggestions or the results of evaluated expressions. This has been fixed now.

:::row:::
    :::column:::
        :::image type="complex" source="../../media/2021/05/screen-reader-support-in-console-autocomplete.msft.png" alt-text="In the Console, screen readers now announce the currently selected autocomplete suggestion" lightbox="../../media/2021/05/screen-reader-support-in-console-autocomplete.msft.png":::
           In the **Console**, screen readers now announce the currently selected autocomplete suggestion
        :::image-end:::
    :::column-end:::
    :::column:::
        :::image type="complex" source="../../media/2021/05/screen-reader-support-in-console-evaluated-expression.msft.png" alt-text="In the Console, screen readers now announce the result of an evaluated expression" lightbox="../../media/2021/05/screen-reader-support-in-console-evaluated-expression.msft.png":::
           In the **Console**, screen readers now announce the result of an evaluated expression
        :::image-end:::
    :::column-end:::
:::row-end:::
        


## Microsoft Edge Developer Tools for Visual Studio Code version 1.1.8

The [Microsoft Edge Developer Tools for Visual Studio Code][VisualstudioMarketplaceMsEdgedevtoolsVscodeEdgeDevtools] extension version 1.1.8 for Microsoft Visual Studio Code has the following changes since the previous release.  Microsoft Visual Studio Code updates extensions automatically.  To manually update to version 1.1.8, navigate to [Update an extension manually][VisualstudioCodeDocsEditorExtensionGalleryUpdateExtensionManually].  

You can file issues and contribute to the extension on the [vscode-edge-devtools GitHub repo][GithubMicrosoftVscodeEdgeDevtools].  

### In-context documentation and UI to make it easier to use the DevTools extension

<!-- Title: In-context documentation and UI make it easier to get started using the Developer Tools extension -->  
<!-- Subtitle: The Microsoft Edge Developer Tools for Visual Studio Code extension now presents helpful text, buttons, and links, and opens a documentation page with guidance on how to get started. -->  

Version 1.1.8 of the [Microsoft Edge Developer Tools for Visual Studio Code][VisualstudioMarketplaceMsEdgedevtoolsVscodeEdgeDevtools] extension now features a simpler way to start a new instance of Microsoft Edge, by presenting instructions, buttons, links, and a documentation page to guide you.

*  When you select the **Microsoft Edge Tools** button in the **Activity Bar** of Visual Studio Code, the **Microsoft Edge Tools: Targets** panel now presents explanatory text, buttons, and links to guide you, instead of a blank panel.

*  When you open a new instance of Microsoft Edge from within Visual Studio Code, Microsoft Edge now shows a start page that explains how to use the Developer Tools extension, instead of a blank page.

*  The **Microsoft Edge Tools: Targets** panel now has a **Generate launch.json** button and instructions, to help launch your project for debugging in Microsoft Edge.

<!-- keep the following 2 sections sync'd with this doc page for the extension: https://microsoft.github.io/vscode-edge-devtools/using.html -->

#### Launching a browser instance now shows helpful documentation instead of a blank page

Perform the following steps to open the getting started documentation page. These steps assume you are in Visual Studio Code, with no folder opened.

1.  In the **Activity Bar** on the left, select the **Microsoft Edge Tools** button.  In the **Side Bar**, the **Microsoft Edge Tools: Targets** panel appears.

    :::image type="complex" source="../../media/2021/05/edge-tools-extension-in-context-docs-initial-side-bar.msft.png" alt-text="The Microsoft Edge Tools: Targets panel in the Side Bar of Visual Studio Code, showing the Launch Instance button" lightbox="../../media/2021/05/edge-tools-extension-in-context-docs-initial-side-bar.msft.png":::
       The **Microsoft Edge Tools: Targets** panel in the **Side Bar** of Visual Studio Code, showing the **Launch Instance** button
    :::image-end:::  

1.  In the **Side Bar**, select the **Launch Instance** button.  Microsoft Edge opens, showing a documentation page, which provides guidance and links for more information.  Also, in Visual Studio Code, DevTools opens.

    :::image type="complex" source="../../media/2021/05/edge-tools-extension-in-context-docs-doc-page.msft.png" alt-text="The new documentation page that appears in the browser, about how to use Microsoft Edge Developer Tools for Visual Studio Code" lightbox="../../media/2021/05/edge-tools-extension-in-context-docs-doc-page.msft.png":::
       The new documentation page that appears in the browser, about how to use Microsoft Edge Developer Tools for Visual Studio Code
    :::image-end:::  

1.  In the address bar of Microsoft Edge, navigate to the project that you want to debug using Microsoft Edge Developer Tools for Visual Studio Code.


#### The Side Bar now provides a UI instead of a blank panel, to help launch your project for debugging

The Side Bar now provides a **Launch Instance** button to help you launch your project when you want to debug it. 

Perform the following steps to launch your project. These steps assume you are in Visual Studio Code, with no folder opened.

1.  In the **Activity Bar**, select the **Microsoft Edge Tools** button.  In the **Side Bar**, the **Microsoft Edge Tools: Targets** panel appears, showing a single button (**Launch Instance**).

    :::image type="complex" source="../../media/2021/05/edge-tools-extension-in-context-docs-initial-side-bar.msft.png" alt-text="The Microsoft Edge Tools: Targets panel in the Side Bar of Visual Studio Code, showing the Launch Instance button" lightbox="../../media/2021/05/edge-tools-extension-in-context-docs-initial-side-bar.msft.png":::
       The **Microsoft Edge Tools: Targets** panel in the **Side Bar** of Visual Studio Code, showing the **Launch Instance** button
    :::image-end:::  

1.  In the **Microsoft Edge Tools: Targets** panel, select the **open a folder** link, and open your project folder.  The **Microsoft Edge Tools: Targets** panel now shows two buttons: **Launch Instance** and **Generate launch.json**.

    :::image type="complex" source="../../media/2021/05/edge-tools-extension-in-context-docs-side-bar.msft.png" alt-text="The Microsoft Edge Tools: Targets panel in the Side Bar of Visual Studio Code with the Launch Instance and Generate launch.json buttons" lightbox="../../media/2021/05/edge-tools-extension-in-context-docs-side-bar.msft.png":::
       The **Microsoft Edge Tools: Targets** panel in the **Side Bar** of Visual Studio Code with the Launch Instance and Generate launch.json buttons
    :::image-end:::  
    
1.  In the **Side Bar**, select the **Generate launch.json** button.  A `launch.json` file is generated in the root of the project, and is opened for editing.

    :::image type="complex" source="../../media/2021/05/edge-tools-extension-in-context-docs-launch-json-file.msft.png" alt-text="Editing the URL in the launch.json file" lightbox="../../media/2021/05/edge-tools-extension-in-context-docs-launch-json-file.msft.png":::
       Editing the URL in the `launch.json` file
    :::image-end:::

1.  In the `launch.json` file, change the URL from an empty string to a URL for your project.  Or leave the string empty, to show the documentation page.

1.  Save the `launch.json` file.

1.  In the **Side Bar**, select the **Launch Project** button.  Microsoft Edge opens, showing the URL that you specified.  Also, in Visual Studio Code, DevTools opens.





## Download the Microsoft Edge preview channels  

If you are on Windows, Linux, or macOS, consider using the [Microsoft Edge preview channels][MicrosoftEdgePreviewChannels] as your default development browser.  The preview channels give you access to the latest DevTools features.  


## Getting in touch with Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../../includes/contact-whats-new-note.md)]

<!-- links -->  
[DevToolsCustomizePlacement]: https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/customize/placement "Change Microsoft Edge DevTools placement (Undock, Dock to bottom, Dock to left) | Microsoft Docs"
[DevtoolsCustomizeDarktheme]: ../../../customize/dark-theme.md "Enable Dark Theme in Microsoft Edge DevTools | Microsoft Docs"
[DevtoolsWhatsnew202101DevtoolsAssistiveAnnounce]: ../01/devtools.md#assistive-technologies-now-announce-position-and-count-of-css-suggestions "Assistive technologies now announce position and count of CSS suggestions | Microsoft Docs"

[DevtoolsCustomizeIndexSettings]: /microsoft-edge/devtools-guide-chromium/customize/index#settings "Settings - Customize Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsMain]: /microsoft-edge/devtools-guide-chromium/index "Microsoft Edge (Chromium) Developer Tools overview | Microsoft Docs"  

[GithubMicrosoftVscodeEdgeDevtools]: https://github.com/microsoft/vscode-edge-devtools "microsoft/vscode-edge-devtools | GitHub"  
[GithubMicrosoftVscodeEdgeDevtoolsPullxxx]: https://github.com/microsoft/vscode-edge-devtools/pull/xxx "Pull xxx: Lorem al Ipsum | GitHub"  

[MicrosoftEdgePreviewChannels]: https://www.microsoftedgeinsider.com/download "Microsoft Edge Preview Channels"  

[VisualstudioCodeDocsEditorExtensionGalleryUpdateExtensionManually]: https://code.visualstudio.com/docs/editor/extension-gallery#_update-an-extension-manually "Update an extension manually - Extension Marketplace | Visual Studio Code"  

[VisualstudioMarketplaceMsEdgedevtoolsVscodeEdgeDevtools]: https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools "Microsoft Edge Developer Tools for Visual Studio Code | Visual Studio Marketplace"  

[YoutubeEdgeStateOfThePlatform]: https://www.youtube.com/watch?v=sU0WRZ0kkNo "Microsoft Edge: State of the Platform | YouTube"

[CRIssuesList]: https://bugs.chromium.org/p/chromium/issues/list "Chromium bugs"  
[CRxxxxxxx]: https://crbug.com/xxxxxxx "Issue xxxxxxx: Lorem al Ipsum | Chromium bugs"  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[JecelynYeen]: https://developers.google.com/web/resources/contributors/jecelynyeen
