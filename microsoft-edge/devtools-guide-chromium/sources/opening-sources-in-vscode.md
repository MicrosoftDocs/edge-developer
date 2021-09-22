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

# Experiment: Open local sources in Microsoft Visual Studio Code

If you are a user of Visual Studio Code and you use the Developer Tools to change some of your CSS, it seems strange that instead of using your editor you have to use the one in the Sources tool. With this experiment, we want to change this. This is why we added a new experiment to the Developer Tools. Once you activated the `Open source files in Visual Studio Code` experiment and re-started the Developer Tools, local files will get a different treatment. 

## Setting up editing local files in Visual Studio Code

:::image type="complex" source="../media/experiment-sources-in-code-local-project.msft..png" alt-text="Microsoft Edge with a local file open." lightbox="../media/experiment-sources-in-code-local-project.msft..png":::
   Microsoft Edge with a local file open.
:::image-end:::

When you open a URL to a local server (`http://localhost`, or `http://127.0.0.1`) or a local file in Microsoft Edge and you open the Developer Tools, you get asked to identify your root folder. You can opt out by activating the `Don't show again` button and you can get more information by activating the `learn more` link. 

:::image type="complex" source="../media/experiment-sources-in-code-identify-root-folder.msft.png" alt-text="Developer Tools showing an information bar asking you to identify your root folder" lightbox="../media/experiment-sources-in-code-identify-root-folder.msft.png":::
   Developer Tools showing an information bar asking you to identify your root folder
:::image-end:::

If you choose the `set root folder` button, your operating system will ask you to navigate to the folder and choose it. 

:::image type="complex" source="../media/experiment-sources-in-code-pick-folder.msft.png" alt-text="Picking the location of the root folder using the file manager of your operating system." lightbox="../media/experiment-sources-in-code-pick-folder.msft.png":::
   Picking the location of the root folder using the file manager of your operating system.:::image-end:::

Once you chose the folder, you need to allow DevTools to get full access to the folder. You'll get another infobar asking you to give permission.

:::image type="complex" source="../media/experiment-sources-in-code-allow-access.msft.png" alt-text="DevTools asking to get access to the folder" lightbox="../media/experiment-sources-in-code-allow-access.msft.png":::
   DevTools asking to get access to the folder
:::image-end:::

Once you given permission, the folder you chose has been added as a Workspace to the Developer tools. This means that any file you edit in the Developer Tools now opens in Microsoft Visual Studio Code instead of the Sources tool. As an indicator, we show a `linked` icon next to the file name. In this example, let's activate the `base.css` link in the Styles tool.

:::image type="complex" source="../media/experiment-sources-in-code-activating-link.msft.png" alt-text="Activating any link in the Styles tool will open Visual Studio Code" lightbox="../media/experiment-sources-in-code-activating-link.msft.png":::
   Activating any link in the Styles tool will open Visual Studio Code
:::image-end:::
 
Once activated, the Developer Tools will open an instance of Visual Studio Code and show all the files in the root folder. It will also open the file you've chosen at the correct line of the CSS selector.

:::image type="complex" source="../media/experiment-sources-in-code-editor-open.msft.png" alt-text="Visual Studio Code open with the root folder files and the chosen file open." lightbox="../media/experiment-sources-in-code-editor-open.msft.png":::
   Visual Studio Code open with the root folder files and the chosen file open.
:::image-end:::

Any change to the file done in the Developer Tools will now get synced to Visual Studio Code. For example if you add a `background: green` to the styles of the body, the same code will show up in the `base.css` file in the editor.

:::image type="complex" source="../media/experiment-sources-in-code-code-synced.msft.png" alt-text="Changes to the code in the Styles tool now reflect in the source code in Visual Studio Code" lightbox="../media/experiment-sources-in-code-code-synced.msft.png":::
   Changes to the code in the Styles tool now reflect in the source code in Visual Studio Code
:::image-end:::

## Changing the workspace settings

If you go to the Developer Tools settings by activating the gear icon or pressing `Shift + F1` you can change the behaviour of the experiment. Select the `Workspace` setting and you have a few options.

:::image type="complex" source="../media/experiment-sources-in-code-workspace-settings.msft.png" alt-text="The settings pane of the workspace showing several options" lightbox="../media/experiment-sources-in-code-workspace-settings.msft.png":::
   The settings pane of the workspace showing several options
:::image-end:::

You can check if you want to open source files in Visual Studio Code and whether you want to automatically save Developer Tools changes to disk. You can also automatically exclude folders.

You also get a list of workspaces you have set up, and you can remove them or add excluded folders to each of them.

## Getting in touch with the Microsoft Edge DevTools team

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]

<!-- links -->
<!-- external: -->
