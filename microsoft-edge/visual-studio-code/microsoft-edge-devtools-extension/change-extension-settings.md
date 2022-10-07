---
title: Changing the extension settings
description: Article 1 about the Microsoft Edge Developer Tools extension for Visual Studio Code.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 10/06/2022
---
# Changing the extension settings

You can customize the Visual Studio Code extension to your needs.

1. In Visual Studio Code, on the **Activity Bar**, click **Microsoft Edge Tools**.

1. In **Microsoft Edge Tools** > **Targets**, click **More Actions** (...) to the right of the word **TARGETS**, and then select the **Open Settings** menuitem.

   ![The More Actions icon on the Microsoft Edge Tools: Targets panel, to change the settings of the DevTools extension](./change-extension-settings-images/edge-tools-open-settings.png)

   The **Settings** page appears, filtered to show **vscode-edge-devtools** settings only.

1. Scroll through the available settings.


<!-- ====================================================================== -->
## Reloading the extension after changing settings

Some settings have a note that reads **(reload required after changing)**.  For such a setting to take effect, close instances of DevTools, as follows:

*  Select **File** > **Close Folder**.

*  In the Debug toolbar, click the **Stop** button.

*  On the **Run** menu, select **Stop Debugging**.

*  Select Activity Bar > **Microsoft Edge Tools** > **Targets** > hover on a target > click **Close instance** (`X`).  This action automatically closes the **Edge DevTools** tab as well.  If necessary, close an external browser opened by the extension.

   *  For some scenarios, clicking **Close instance** (**x**) doesn't have an effect.  If needed, use another approach.  For example, if you open a folder that has no `launch.json` file, right-click an `.html` file and select **Open with Edge** > **Open Browser with DevTools**, and then select Activity Bar > **Microsoft Edge Tools** > **Targets** > click **Close instance** (**x**) on a target, DevTools continues running, because of how it was launched.


To start the DevTools extension again:

1. Select **File** > **Open Recent** > select a folder.  (Or, select Activity Bar > **Explorer** > **Open Folder** button.)  Right-click an `.html` file, and then select **Open with Edge** > **Open Browser with DevTools**.

   Or, select Activity Bar > **Microsoft Edge Tools** > **Targets** > click the **Launch Instance** button.

   Microsoft Edge opens, and the **Edge DevTools** tab is displayed.


<!-- ====================================================================== -->
## See also

* [Get started using the DevTools extension for Visual Studio Code](./get-started.md)
