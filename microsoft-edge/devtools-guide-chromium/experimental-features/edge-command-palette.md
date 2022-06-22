---
title: Streamline your workflows with Edge Command Palette
description: Use the Edge Command Palette experimental feature to streamline your browser and DevTools workflows.  Quickly access browser commands and DevTools commands from the keyboard, from any webpage.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 06/22/2022
---
# Streamline your workflows with Edge Command Palette

Use Edge Command Palette to quickly access various Microsoft Edge browser commands and DevTools commands from the keyboard.

Using Edge Command Palette, you can directly access productivity and developer features that normally require clicking through several menus or using a series of keyboard shortcuts.

![A Microsoft Edge window showing the Command Palette input box in the center](./media/command-palette.png)


<!-- ====================================================================== -->
## Enable Edge Command Palette

By default, Edge Command Palette isn't enabled. To enable the Edge Command Palette experiment:

1. In Microsoft Edge, go to `edge://version`, and make sure you're using Microsoft Edge 105 or later.  To get the latest preview channels of Microsoft Edge, see [Microsoft Edge Insider Channels](https://www.microsoftedgeinsider.com/en-us/download/).

1. In Microsoft Edge, go to `edge://flags`.

<!-- DevTools Toaster is in the process of being changed in Edge to match the feature's name -->
1. In the **Search flags** text field, type **DevTools Toaster** or **Edge Command Palette**.

<!-- DevTools Toaster is in the process of being changed in Edge to match the feature's name -->
1. In the **DevTools Toaster** or **Edge Command Palette** dropdown menu, select **Enabled**:

   ![Enabling the Edge Command Palette flag in the edge://flags page](./media/command-palette-flag.png)

1. Click the **Restart** button which appears in the lower right.


<!-- ====================================================================== -->
## Open Edge Command Palette

Edge Command Palette provides access to Microsoft Edge commands, including various DevTools commands. This means you can use DevTools features without having to open DevTools first.

To open Edge Command Palette:

1. In Microsoft Edge, press `Ctrl`+`Shift`+`Space`.  Edge Command Palette opens.

1. Start typing in the input box. For example:
   * Press `>` to list the available DevTools commands.
   * Type **tabs** to display commands about tabs management.
   * Type **bookmark** to display commands about bookmarks:

   ![Edge Command Palette with the word "bookmark" typed in, and a list of related commands](./media/command-palette-bookmark.png)

1. Press the Up or Down arrow keys to select the command you want to execute, and then press `Enter`.

Examples of several useful commands are shown below.


<!-- ====================================================================== -->
## Open the Device Emulation tool

Use the DevTools [**Device Emulation**](../device-mode/index.md) tool to approximate how your page looks and responds on a mobile device.

To open the DevTools Device Emulation tool by using Edge Command Palette:

1. In Microsoft Edge, press `Ctrl`+`Shift`+`Space`.  Edge Command Palette opens.

1. Press `>`.

1. Type **device**, press the Down arrow key to select **Mobile: Toggle device emulation**, and then press `Enter`.


<!-- ====================================================================== -->
## Create and access snippets

The DevTools [**Snippets**](../javascript/snippets.md) tool allows you to save JavaScript code and execute it on any webpage. If you run the same code repeatedly on webpages, create a snippet for that code, and then use Edge Command Palette to quickly access your code snippet.

To open the DevTools **Snippets** tab by using Edge Command Palette:

1. In Microsoft Edge, press `Ctrl`+`Shift`+`Space`.  Edge Command Palette opens.

1. Press `>`.

1. Type **snippets**, press the Down arrow key to select **Sources: Show Snippets**, and then press `Enter`.
  

<!-- ====================================================================== -->
## Manage browser tabs

When using many tabs in Microsoft Edge, several useful tab-related commands are available in Edge Command Palette.

1. In Microsoft Edge, press `Ctrl`+`Shift`+`Space`.  Edge Command Palette opens.

1. Type **tab**, and then use the Down and Up arrow keys to select a tab-related command.  For example:
   *  **Open recently closed tab**
   *  **Bookmark all tabs**
   *  **Search tabs**


<!-- ====================================================================== -->
## Provide feedback

<!-- TODO: change the issue number when we have it. -->
The Microsoft Edge DevTools team welcomes your feedback about this feature.  If you noticed a bug with Edge Command Palette or have an idea for improving it, please add a comment at: [Feedback for the Edge Command Palette experiment](https://github.com/MicrosoftEdge/DevTools/issues/73).
