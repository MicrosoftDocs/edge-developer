---
title: Opening source files in Visual Studio Code
description: If you work on a local project and you have Microsoft Visual Studio Code installed, you can open files in this one instead of the sources tool and sync changes from the DevTools live to your source files.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 09/22/2021
---
# Opening source files in Visual Studio Code

The **Open source files in Visual Studio Code** experiment allows you to use Microsoft Edge DevTools, but then edit your files in Visual Studio Code instead of in the code editor of the DevTools **Sources** tool.

When you use this experiment, if you use Visual Studio Code and you use DevTools to change your CSS rules, you no longer have to use the code editor in the Sources tool of DevTools.  You can simply use the code editor in Visual Studio Code.  When you turn on this experiment,
local files will get a different treatment.<!--TODO: be specific-->


<!-- ====================================================================== -->
## Setting up editing local files in Visual Studio Code

First, select DevTools > **Settings** > **Experiments** > **Open source files in Visual Studio Code**, and then re-start DevTools.

With this experiment enabled, suppose that in Microsoft Edge, you go to a local server (such as `http://localhost` or `http://127.0.0.1`), or open a local file.

![Microsoft Edge with a local file open.](../media/experiment-sources-in-code-local-project.msft..png)

When you open DevTools, you are prompted to identify your root folder.  You can opt out by selecting **Close** (`x`) or selecting the `Don't show again` button.  You can get more information by selecting the `Learn more` link.

![Developer Tools showing an information bar asking you to identify your root folder.](../media/experiment-sources-in-code-identify-root-folder.msft.png)

If you select the **Set root folder** button, the operating system prompts you to navigate to the folder and select it.

![Picking the location of the root folder using the file manager of your operating system.](../media/experiment-sources-in-code-pick-folder.msft.png)

After you select a root folder, you need to grant DevTools full access to the folder.  Above the toolbar, a prompt with **Allow** or **Deny** buttons asks you whether to grant permission to DevTools to access the folder.

![DevTools asking to get access to the folder.](../media/experiment-sources-in-code-allow-access.msft.png)

After you grant permission, the folder you select is added as a Workspace in DevTools, in the **Filesystem** tab of the **Sources** tool.  This means that any file you edit in DevTools now opens in Microsoft Visual Studio Code instead of in the Sources tool. As an indicator, we show a `linked` icon next to the file name.  In this example, we'll select the `base.css` link in the **Styles** tool.

![Selecting a file link in the Styles tool opens the file in Visual Studio Code.](../media/experiment-sources-in-code-selecting-link.msft.png)

DevTools opens an instance of Visual Studio Code and shows all the files in the root folder.  DevTools also opens the file you've selected, scrolled to the correct line of the CSS selector.

![Visual Studio Code open with the root folder files and the selected file open.](../media/experiment-sources-in-code-editor-open.msft.png)

Any changes that you make to the file in DevTools will now be synced to Visual Studio Code.  For example, if you add a `background: green` rule to the styles of the body, the same CSS rule will automatically be added to the `base.css` file in the code editor of Visual Studio Code.

![Changes to the code in the Styles tool now are reflected in the source code in Visual Studio Code.](../media/experiment-sources-in-code-code-synced.msft.png)


<!-- ====================================================================== -->
## Changing the workspace settings

If you go to the DevTools **Settings** page by selecting **Settings** (the gear icon or `Shift + ?`), you can change the behavior of the experiment.  When you select the **Workspace** page in **Settings**, you have a few options.

![The settings pane of the workspace showing several options.](../media/experiment-sources-in-code-workspace-settings.msft.png)

The **Settings** > **Workspace** page lists your workspaces, along with configuration options.

*  To set whether to open source files in Visual Studio Code, select the **Open source files in Visual Studio Code** checkbox.

*  To automatically save DevTools changes to disk, select the **Save DevTools changes to disk** checkbox.

*  To automatically exclude folders from a workspace folder, use the **Folder exclude pattern** text box.

*  To exclude a folder from a specific workspace, next to **Excluded folders**, select the **Add** button.

*  To add an additional workspace, select the **Add folder** button.
