---
title: Simplify DevTools using Focus Mode
description: Learn to use the new Focus Mode experimental user interface to reduce the complexity of DevTools, make it more compact, and easier to open and close tools.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 04/01/2022
---
# Simplify DevTools using Focus Mode

Focus Mode is a new user interface for DevTools.  Focus Mode is designed to simplify and streamline the DevTools UI, without compromising its feature set.

Focus Mode replaces the main row of tabs with an **Activity Bar**, which is a compact toolbar with distinctive icons.  The **Activity Bar** makes it possible to pin, rearrange, and open your favorite tools, for quick access.  The **Activity Bar** also provides access to user settings, help, and other features.

Focus Mode also provides a **Quick View** list, to open a second tool alongside the tool that's already selected in the **Activity Bar**.

![DevTools undocked in its own window, with the Focus Mode experiment](media/focus-mode.png)


<!-- ====================================================================== -->
## Enable Focus Mode

The Microsoft Edge team is enabling Focus Mode to a subset of users to collect early feedback. Some users will have Focus Mode enabled by default, while others need to enable it first.

To check if you have Focus Mode enabled already, or to enable or disable it:

1. Press `F1` to open **Settings**.

1. Click **Experiments** and scroll down to the **Focus Mode** checkbox.

   If the **Focus Mode** checkbox is selected, Focus Mode is already enabled. Select or clear the checkbox to enable or disable Focus Mode:

   ![The Settings page in DevTools, showing the Experiments tab, scrolled down to the Focus Mode checkbox](media/focus-mode-pref.png)

1. Close the **Settings** page. If you changed the Focus Mode experiment state, click the **Reload DevTools** button for the change to take effect.


<!-- ====================================================================== -->
## Main differences from the default user interface

Here are the main differences between the DevTools default user interface and Focus Mode.

### Activity Bar

The **Activity Bar** is the most visible difference from the default user interface. Use it to open tools, help features, and settings.

By default, the position of the **Activity Bar** adapts to the location of the DevTools window. If DevTools is undocked or docked to the bottom of the browser, the **Activity Bar** will be horizontal. If DevTools is docked to the side of the browser, the **Activity Bar** will be vertical, and tool names will not be visible. This enables quicker tool access when screen width is limited.

The **Activity Bar** top-aligned in Focus Mode, with DevTools docked:

![The Activity Bar top-aligned in Focus Mode, with DevTools docked](media/focus-mode-docked.png)

The **Activity Bar** top-aligned in Focus Mode, with DevTools popped out in a separate window:

![The Activity Bar top-aligned in Focus Mode, with DevTools popped out in a separate window](media/focus-mode-undocked.png)

### Warning and error indicators

In the default DevTools user interface, a counter appears in the main toolbar showing the number of messages such as **Issues** recommendations and **Console** warnings. The counter could grow large when many messages ae generated, taking up valuable space in DevTools.

![The default DevTools toolbar Issues and Console message indicators](media/devtools-toolbar-message-indicator.png)

In Focus Mode, this counter has been removed. Instead, small indicators overlay **Issues** and **Console** to display whether messages have been reported by the respective tools:

![Focus Mode message overlays in Issues and Console](media/focus-mode-message-indicator.png)

### Quick View

The **Quick View** list contains all tools that can be displayed alongside the one already selected from the **Activity Bar**.

**Quick View** replaces the drawer toolbar from the default user interface:

![The Quick View list in Focus Mode with a tool selected and opened in the bottom pane](media/focus-mode-quick-view.png)

### DevTools customization and settings

Several customization features and the DevTools settings are now grouped together under a single menu available from the **Customize and control DevTools** (**...**) button in the **Activity Bar**. These features and settings appear in multiple locations in the default user interface.

* **Dock location** lets you change the placement of DevTools in the browser window.
* **Activity Bar location** lets you change the placement of the **Activity Bar** within DevTools.
* **Themes** lets you change the color theme.
* **Settings** provides access to the DevTools settings.
* **Keyboard shortcuts** lets you review and change keyboard shortcuts.

![The menu in Focus Mode](media/focus-mode-menu.png)

### Help links

The **Help** menu contains links to the DevTools documentation and release notes and a button to send feedback to the team:

![The Help menu in Focus Mode](media/focus-mode-help.png)

These links and buttons were previously nested under **Customize and control DevTools** > **Help** in the default user interface.

<!-- ====================================================================== -->
## Open tools from the Activity Bar

By default, the **Activity Bar** contains the following modes and tools:

*  **Inspect** mode (![Inspect tool icon](../media/inspect-tool-icon-light-theme.png)) toggle button.

*  **Device Emulation** mode (![Device Emulation icon](../media/device-emulation-icon-light-theme.png)) button.

*  **Welcome** tool (![Welcome tool icon](media/focus-mode-welcome.png)).

*  **Elements** tool (![Elements tool icon](media/focus-mode-elements.png)).

*  **Console** tool (![Console tool icon](media/focus-mode-console.png)).

*  **Sources** tool (![Sources tool icon](media/focus-mode-sources.png)).

*  **Network** tool (![Network tool icon](media/focus-mode-network.png)).

*  **Issues** tool (![Issues tool icon](media/focus-mode-issues.png)).

*  **Performance** tool (![Performance tool icon](media/focus-mode-performance.png)).

*  **Memory** tool (![Memory tool icon](media/focus-mode-memory.png)).

*  **Application** tool (![Application tool icon](media/focus-mode-application.png)).


<!-- ====================================================================== -->
## Pin and rearrange tools in the Activity Bar

You can choose which tools appear in the **Activity Bar** by pinning or unpinning tools. This allows you to customize DevTools to your preferred workflow.

![The More tools menu in Focus Mode](media/focus-mode-more-tools.png)

Click **More tools** (**+**) to list all the available tools. Selecting a tool will pin it to the **Activity Bar**. It will be shown by default every time DevTools is opened.

If there isn't enough space in the **Activity Bar** to display all pinned tools, some tools may overflow into the **More tools** menu:

![The More tools menu in Focus Mode when the window is shorter, causing some of the icons to be displayed in the menu rather than the activity bar](media/focus-mode-overflow-tools.png)

To unpin a tool from the **Activity Bar**, right-click the tool and select **Remove from activity bar**:

![The right-click menu to unpin tools from the Activity bar](media/focus-mode-remove-tool.png)

Currently, the following tools cannot be unpinned from the **Activity Bar**:

* **Elements** tool
* **Console** tool
* **Sources** tool


<!-- ====================================================================== -->
## Open tools from Quick View

Use the **Quick View** list to open a second tool next to the one already selected from the **Activity Bar**.

1. Select a tool from the **Activity Bar**.

1. Click the **Quick View** list and select a different tool from the list.

The following screenshot shows the **Network** tool and the **Console** tool side-by-side:

![Focus Mode with the Network tool at the top, and the Console tool at the bottom](media/focus-mode-quick-view-tool.png)

You can hide or expand **Quick View** by clicking **Collapse Quick View** / **Expand Quick View** or pressing the **Escape** key. (![Quick view chevron toggle icon](media/focus-mode-chevron.png)).


<!-- ====================================================================== -->
## Customize Focus Mode

The **Activity Bar** can be oriented vertically or horizontally to maximize usable screen space in a variety of DevTools window locations.

To change the location of the **Activity Bar** click **Customize and control DevTools**, then **Activity bar location**, and then select one of the locations:

![The 'Activity bar location' menu in Focus Mode](media/focus-mode-activity-bar-location.png)

* **Adapt to dock location** (default): The **Activity Bar** will be in a horizontal or vertical orientation depending on where DevTools is docked.

  * If DevTools is docked to the left or right side of the browser window, the **Activity Bar** will be vertical.

  * If DevTools is docked to the bottom side of the browser window, or undocked in its own window, the **Activity Bar** will be horizontal.

* **Top**: The **Activity Bar** will always be horizontal.

* **Left side**: The **Activity Bar** will always be vertical.

When the **Activity Bar** is horizontal, tool names appear next to tool icons if there is enough space to display them.

When DevTools is undocked in its own window, the horizontal **Activity Bar** shows some tabs with tool icons and names, and some tabs with icons only:

![Focus Mode with the horizontal Activity bar](media/focus-mode-horizontal.png)


<!-- ====================================================================== -->
## See also

* [DevTools: Focus Mode UI](https://github.com/MicrosoftEdge/DevTools/blob/main/explainers/FocusMode/explainer.md) is the initial explainer for this experimental feature, in the Microsoft Edge DevTools repo.
