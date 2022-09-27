---
title: Changing the extension settings
description: Article 1 about the Microsoft Edge Developer Tools extension for Visual Studio Code.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 09/14/2022
---
# Changing the extension settings

You can customize the Visual Studio Code extension to your needs.

1. In Visual Studio Code, on the **Activity Bar**, select **Microsoft Edge Tools**.

1. In **Microsoft Edge Tools** > **Targets**, select **More Actions** (...) to the right of the word **TARGETS**, and then select **Open Settings**.

   If you are using a mouse, to access **More Actions** (...), select the **Targets** pane or hover over it:

   ![The More Actions icon on the Microsoft Edge Tools: Targets panel, to change the settings of the DevTools extension](../microsoft-edge-devtools-extension-images/edge-tools-open-settings-icon.png)


<!-- ====================================================================== -->
## Reloading the extension after changing settings

Some settings have a note that reads **(reload required after changing)**.  For such a setting to take effect:

1. Close the browser opened by the extension, or in the **Microsoft Edge Tools** > **Targets** pane, click **Close instance** (`X`).  This action automatically closes the **Edge DevTools** tab as well.
<!-- clicking Close instance (x) doesn't always have an effect.  open folder, have no launch.json, right-click html file (devtools starts) then click x - no effect -->

1. In the **Microsoft Edge Tools** > **Targets** pane, click the **Launch Instance** button.  Microsoft Edge opens, and the **Edge DevTools** tab is displayed.


<!-- ====================================================================== -->
## See also

* [Microsoft Edge DevTools extension for Visual Studio Code](../microsoft-edge-devtools-extension.md)
