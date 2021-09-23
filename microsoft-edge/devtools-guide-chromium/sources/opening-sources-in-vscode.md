---
description: If you work on a local project and you have Microsoft Visual Studio Code installed, you can open files in this one instead of the sources tool and sync changes from the DevTools live to your source files.
title: Opening source files in Visual Studio Code
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/22/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---

# Opening source files in Visual Studio Code

The `Open source files in Visual Studio Code` experiment allows you to use Microsoft Edge DevTools but then edit your files in Visual Studio Code instead of in the code editor of the DevTools Sources tool.

If you use Visual Studio Code and you use the Developer Tools to change some of your CSS, it seems strange that instead of using your code editor, you have to use the code editor in the Sources tool.  With this experiment, we want to change this.  This is why we added a new experiment to the Developer Tools.  When you select the `Open source files in Visual Studio Code` experiment and re-start DevTools, local files will get a different treatment.


<!-- ====================================================================== -->
## Setting up editing local files in Visual Studio Code

:::image type="complex" source="../media/experiment-sources-in-code-local-project.msft..png" alt-text="Microsoft Edge with a local file open." lightbox="../media/experiment-sources-in-code-local-project.msft..png":::
   Microsoft Edge with a local file open.
:::image-end:::

When you open a URL to a local server (`http://localhost`, or `http://127.0.0.1`) or a local file in Microsoft Edge and you open the Developer Tools, you get asked to identify your root folder. You can opt out by selecting the `Don't show again` button and you can get more information by selecting the `Learn more` link.

:::image type="complex" source="../media/experiment-sources-in-code-identify-root-folder.msft.png" alt-text="Developer Tools showing an information bar asking you to identify your root folder" lightbox="../media/experiment-sources-in-code-identify-root-folder.msft.png":::
   Developer Tools showing an information bar asking you to identify your root folder
:::image-end:::

If you select the `Set root folder` button, your operating system ask you to navigate to the folder and select it.

:::image type="complex" source="../media/experiment-sources-in-code-pick-folder.msft.png" alt-text="Picking the location of the root folder using the file manager of your operating system" lightbox="../media/experiment-sources-in-code-pick-folder.msft.png":::
   Picking the location of the root folder using the file manager of your operating system
:::image-end:::

Once you select the folder, you need to allow DevTools to get full access to the folder. You'll get another prompt near the toolbar asking you to grant permission to DevTools to access the folder.

:::image type="complex" source="../media/experiment-sources-in-code-allow-access.msft.png" alt-text="DevTools asking to get access to the folder" lightbox="../media/experiment-sources-in-code-allow-access.msft.png":::
   DevTools asking to get access to the folder
:::image-end:::

After you grant permission, the folder you select is added as a Workspace to the Developer Tools.  This means that any file you edit in DevTools now opens in Microsoft Visual Studio Code instead of in the Sources tool. As an indicator, we show a `linked` icon next to the file name.  In this example, we'll select the `base.css` link in the **Styles** tool.

:::image type="complex" source="../media/experiment-sources-in-code-selecting-link.msft.png" alt-text="Selecting a file link in the Styles tool opens the file in Visual Studio Code" lightbox="../media/experiment-sources-in-code-selecting-link.msft.png":::
   Selecting a file link in the **Styles** tool opens the file in Visual Studio Code
:::image-end:::

DevTools opens an instance of Visual Studio Code and shows all the files in the root folder.  DevTools also opens the file you've select at the correct line of the CSS selector.

:::image type="complex" source="../media/experiment-sources-in-code-editor-open.msft.png" alt-text="Visual Studio Code open with the root folder files and the selected file open" lightbox="../media/experiment-sources-in-code-editor-open.msft.png":::
   Visual Studio Code open with the root folder files and the selected file open
:::image-end:::

Any changes that you make to the file in DevTools will now be synced to Visual Studio Code.  For example, if you add a `background: green` rule to the styles of the body, the same CSS rule will automatically be added to the `base.css` file in the code editor of Visual Studio Code.

:::image type="complex" source="../media/experiment-sources-in-code-code-synced.msft.png" alt-text="Changes to the code in the Styles tool now are reflected in the source code in Visual Studio Code" lightbox="../media/experiment-sources-in-code-code-synced.msft.png":::
   Changes to the code in the Styles tool now are reflected in the source code in Visual Studio Code
:::image-end:::


<!-- ====================================================================== -->
## Changing the workspace settings

If you go to the DevTools **Settings** page by selecting **Settings** (the gear icon or `Shift + ?`), you can change the behavior of the experiment.  When you select the **Workspace** page in **Settings**, you have a few options.

:::image type="complex" source="../media/experiment-sources-in-code-workspace-settings.msft.png" alt-text="The settings pane of the workspace showing several options" lightbox="../media/experiment-sources-in-code-workspace-settings.msft.png":::
   The settings pane of the workspace showing several options
:::image-end:::

You can set whether to open source files in Visual Studio Code, and whether to automatically save DevTools changes to disk.  You can also automatically exclude folders.

**Settings** > **Workspace** also displays a list of workspaces you have set up, and allows you to specify any folders to exclude for each of your workspaces.


<!-- ====================================================================== -->
## Getting in touch with the Microsoft Edge DevTools team

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]

<!-- links -->
<!-- external: -->
