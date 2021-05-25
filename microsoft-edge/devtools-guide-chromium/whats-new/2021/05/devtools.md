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


## The Close button is no longer hidden when DevTools is narrow

<!-- Title: DevTools is now easier to close -->  
<!-- Subtitle: The Close button in DevTools is always displayed, even when DevTools is docked to the right and the DevTools viewport is narrow. -->  

In Microsoft Edge version 91 or earlier, the **Close** button in DevTools isn't displayed when the DevTools viewport is narrow.  In Microsoft Edge version 92, the **Close** button in the DevTools is always displayed, regardless of the DevTools viewport size.

:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2021/05/edge90-close-devtools-button-not-displayed.msft.png" alt-text="The Close DevTools button wasn't displayed when the viewport is narrow" lightbox="../../media/2021/05/edge90-close-devtools-button-not-displayed.msft.png":::
         The **Close** DevTools button wasn't displayed when the viewport is narrow  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../../media/2021/05/edge92-close-devtools-button-always-displayed.msft.png" alt-text="The Close DevTools button is now displayed when the viewport is narrow" lightbox="../../media/2021/05/edge92-close-devtools-button-always-displayed.msft.png":::
         The **Close** DevTools button is now displayed when the viewport is narrow  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

To learn more about changing the position of DevTools, navigate to [Change Microsoft Edge DevTools placement (Undock, Dock to bottom, Dock to left)][DevToolsCustomizePlacement].


## Add tools quickly with new More Tools button  

<!-- Title: Add tools quickly with new More Tools button -->  
<!-- Subtitle: A convenient way to open new tools in Microsoft Edge DevTools -->  

There's a new way to open more tools in Microsoft Edge DevTools: the **More Tools** (`+`) button, on the right of the main toolbar.  Selecting a tool from **More Tools** adds the tool to the main toolbar.

This feature was available as an experiment in Microsoft Edge version 89, and is now available by default in Microsoft Edge version 92.

:::image type="complex" source="../../media/2021/05/more-tools.msft.png" alt-text="The More Tools button" lightbox="../../media/2021/05/more-tools.msft.png":::
   The **More Tools** button
:::image-end:::  


## Making it easier to use the "Microsoft Edge Tools for VS Code" extension with in-context documentation

<!-- todo: finalize Title and Subtitle -->
<!-- Title: The **Microsoft Edge Tools for VS Code** extension now opens a documentation page with guidance on how to get started -->  
<!-- Subtitle: The **Microsoft Edge Tools for VS Code** extension now opens a documentation page with guidance on how to get started. -->  

Version 1.1.8 of the **Microsoft Edge Tools for VS Code** extension for Visual Studio Code now features a simpler way to start a new instance of Microsoft Edge, by presenting buttons and documentation to guide you.  When you use the new buttons in the **Side Bar** to open a new browser instance, instead of opening the default address of `about:blank`, we added a documentation page to help you get started.

<!-- todo: are the buttons in Side Bar new? what was there before, in the Side Bar for this extension? -->

1.  In Visual Studio Code, on the left, select **Extensions**, and then type `Microsoft Edge Tools for VS Code`.  Install version 1.1.8 or higher.

1.  In Visual Studio Code, open a new window (**File** > **New Window**).  At this point, no folder is opened.

1.  In Visual Studio Code, select the **Microsoft Edge Tools** button, on the left.  In the **Side Bar**, the **MICROSOFT EDGE TOOLS: TARGETS** panel appears:

    :::image type="complex" source="../../media/2021/05/edge-tools-extension-in-context-docs-initial-side-bar.msft.png" alt-text="The MICROSOFT EDGE TOOLS: TARGETS panel in the Side Bar of Visual Studio Code, showing the Launch Instance button" lightbox="../../media/2021/05/edge-tools-extension-in-context-docs-initial-side-bar.msft.png":::
       The **MICROSOFT EDGE TOOLS: TARGETS** panel in the **Side Bar** of Visual Studio Code, showing the **Launch Instance** button
    :::image-end:::  

1.  In the **Side Bar**, select the **Launch Instance** button.  Microsoft Edge opens, showing the new documentation page, which provides guidance and links for more information.  Also, in Visual Studio Code, DevTools opens:

    :::image type="complex" source="../../media/2021/05/edge-tools-extension-in-context-docs-doc-page.msft.png" alt-text="The new documentation page that appears in the browser, about how to use Microsoft Edge Tools" lightbox="../../media/2021/05/edge-tools-extension-in-context-docs-doc-page.msft.png":::
       The new documentation page that appears in the browser, about how to use Microsoft Edge Tools
    :::image-end:::  

1.  Close the browser instance that contains the new documentation page.

1.  In the **Side Bar**, select the **open a folder** link, and open a folder, such as your own project.  The **Side Bar** now shows two buttons: **Launch Instance** and **Generate launch.json**:

    :::image type="complex" source="../../media/2021/05/edge-tools-extension-in-context-docs-side-bar.msft.png" alt-text="The MICROSOFT EDGE TOOLS: TARGETS panel in the Side Bar of Visual Studio Code" lightbox="../../media/2021/05/edge-tools-extension-in-context-docs-side-bar.msft.png":::
       The **MICROSOFT EDGE TOOLS: TARGETS** panel in the **Side Bar** of Visual Studio Code
    :::image-end:::  
    
1.  In the **Side Bar**, select the **Generate launch.json** button.  A `launch.json` file is generated in the root of the project, and is opened for editing.

1.  In the `launch.json` file, change the URL from an empty string to a URL for your project.  Or leave the string empty, to show the new documentation page.

    :::image type="complex" source="../../media/2021/05/edge-tools-extension-in-context-docs-launch-json-file.msft.png" alt-text="Editing the URL in the launch.json file" lightbox="../../media/2021/05/edge-tools-extension-in-context-docs-launch-json-file.msft.png":::
       Editing the URL in the `launch.json` file
    :::image-end:::

1.  Save the `launch.json` file.

1.  In the **Side Bar**, select the **Launch Project** button.  Microsoft Edge opens, showing the URL that you specified.  In Visual Studio Code, DevTools opens.


## Hovering, selecting, and closing tools is more visually consistent


## Better support for screen readers in the Console


## Download the Microsoft Edge preview channels  

If you are on Windows, Linux, or macOS, consider using the [Microsoft Edge preview channels][MicrosoftEdgePreviewChannels] as your default development browser.  The preview channels give you access to the latest DevTools features.  


## Getting in touch with Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../../includes/contact-whats-new-note.md)]

<!-- links -->  
[DevToolsCustomizePlacement](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/customize/placement "Change Microsoft Edge DevTools placement (Undock, Dock to bottom, Dock to left) | Microsoft Docs"

[MicrosoftEdgePreviewChannels]: https://www.microsoftedgeinsider.com/download "Microsoft Edge Preview Channels"  


> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developer.chrome.com/blog/new-in-devtools-xx) and is authored by [Jecelyn Yeen][JecelynYeen] \(Developer advocate, Chrome DevTools\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[JecelynYeen]: https://developers.google.com/web/resources/contributors/jecelynyeen
