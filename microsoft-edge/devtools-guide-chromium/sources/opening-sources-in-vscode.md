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

If you use Visual Studio Code and you use DevTools to change your CSS rules, it seems strange that instead of using the code editor in Visual Studio Code, you have to use the code editor in the Sources tool of DevTools.  With this experiment, we want to change this.  This is why we added a new experiment to the Developer Tools.  When you turn on the **Open source files in Visual Studio Code** experiment, local files will get a different treatment.


<!-- ====================================================================== -->
## Setting up editing local files in Visual Studio Code

First, select DevTools > **Settings** > **Experiments** > **Open source files in Visual Studio Code**, and then re-start DevTools.

With this experiment enabled, suppose that in Microsoft Edge, you go to a local server (such as `http://localhost` or `http://127.0.0.1`), or open a local file.

:::image type="complex" source="../media/experiment-sources-in-code-local-project.msft..png" alt-text="Microsoft Edge with a local file open." lightbox="../media/experiment-sources-in-code-local-project.msft..png":::
   Microsoft Edge with a local file open.
:::image-end:::

When you open DevTools, you are prompted to identify your root folder.  You can opt out by selecting **Close** (`x`) or selecting the `Don't show again` button.  You can get more information by selecting the `Learn more` link.

:::image type="complex" source="../media/experiment-sources-in-code-identify-root-folder.msft.png" alt-text="Developer Tools showing an information bar asking you to identify your root folder" lightbox="../media/experiment-sources-in-code-identify-root-folder.msft.png":::
   Developer Tools showing an information bar asking you to identify your root folder
:::image-end:::

If you select the **Set root folder** button, the operating system prompts you to navigate to the folder and select it.

:::image type="complex" source="../media/experiment-sources-in-code-pick-folder.msft.png" alt-text="Picking the location of the root folder using the file manager of your operating system" lightbox="../media/experiment-sources-in-code-pick-folder.msft.png":::
   Picking the location of the root folder using the file manager of your operating system
:::image-end:::

After you select a root folder, you need to grant DevTools full access to the folder.  Above the toolbar, a prompt with **Allow** or **Deny** buttons asks you whether to grant permission to DevTools to access the folder.

:::image type="complex" source="../media/experiment-sources-in-code-allow-access.msft.png" alt-text="DevTools asking to get access to the folder" lightbox="../media/experiment-sources-in-code-allow-access.msft.png":::
   DevTools asking to get access to the folder
:::image-end:::

After you grant permission, the folder you select is added as a Workspace in DevTools, in the **Filesystem** tab of the **Sources** tool.  This means that any file you edit in DevTools now opens in Microsoft Visual Studio Code instead of in the Sources tool. As an indicator, we show a `linked` icon next to the file name.  In this example, we'll select the `base.css` link in the **Styles** tool.

:::image type="complex" source="../media/experiment-sources-in-code-selecting-link.msft.png" alt-text="Selecting a file link in the Styles tool opens the file in Visual Studio Code" lightbox="../media/experiment-sources-in-code-selecting-link.msft.png":::
   Selecting a file link in the **Styles** tool opens the file in Visual Studio Code
:::image-end:::

DevTools opens an instance of Visual Studio Code and shows all the files in the root folder.  DevTools also opens the file you've selected, scrolled to the correct line of the CSS selector.

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

The **Settings** > **Workspace** page lists your workspaces, along with configuration options.

*  To set whether to open source files in Visual Studio Code, select the **Open source files in Visual Studio Code** checkbox.

*  To automatically save DevTools changes to disk, select the **Save DevTools changes to disk** checkbox.

*  To automatically exclude folders from a workspace folder, use the **Folder exclude pattern** text box.

*  To exclude a folder from a specific workspace, next to **Excluded folders**, select the **Add** button.

*  To add an additional workspace, select the **Add folder** button.
