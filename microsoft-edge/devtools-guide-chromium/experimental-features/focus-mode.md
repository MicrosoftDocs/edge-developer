---
title: Reduce the complexity of DevTools with Focus Mode
description: Learn to use the new Focus Mode experimental user interface to reduce the complexity of DevTools, make it more compact, and easier to open and close tools.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 03/15/2022
---
# Reduce the complexity of DevTools with Focus Mode

DevTools has over 30 different tools and many toolbar icons. The current DevTools user interface consists of:

* A main toolbar containing icons such as the **Inspect** and **Device Emulation** tools, and a set of tabbed tools including the **Elements** and **Sources** tools.

* A drawer toolbar containing more tabbed tools and icons.

The overall experience can be visually and conceptually overwhelming.

Focus Mode is a new experimental user interface for DevTools. It is designed to lower the learning curve for new users and reduce the complexity of DevTools without compromising its feature set.

Focus Mode replaces the main toolbar with an **Activity Bar**, which is a compact horizontal or vertical toolbar. The **Activity Bar** contains small icons and corresponding tooltips. The **Activity Bar** makes it possible to open tools, change user settings, and access additional features from one location.

Focus Mode also provides a **Quick View** list to open a second tool alongside the tool already selected in the **Activity Bar**.

![Focus Mode, including the Activity Bar.](media/focus-mode.png)

Focus Mode does not change how the tools work and what they look like. Focus Mode only changes the way tools and other customization features of DevTools can be accessed.


<!-- ====================================================================== -->
## Enable Focus Mode

The Microsoft Edge team is currently experimenting with Focus Mode. Some users already have access to the feature while others need to enable it first.

To check if you have Focus Mode enabled already, or to enable or disable it:

1. Press `F1` to open **Settings**.

1. Click **Experiments** and scroll down to the **Focus Mode** checkbox.

   If the checkbox is selected, Focus Mode is already enabled. Select or clear it to enable or disable Focus Mode.

    ![Screenshot of the Settings page in DevTools, showing the Experiments tab, scrolled down to the Focus Mode checkbox](media/focus-mode-pref.png)

1. Close the **Settings** page. If you changed the Focus Mode experiment state, click the **Reload DevTools** button for the change to take effect.


<!-- ====================================================================== -->
## Main differences from the default user interface

Here are the main differences between the DevTools default user interface and Focus Mode.

### Activity Bar

  The **Activity Bar** is the most visible difference from the default user interface. Initially, it appears as a vertical sidebar to the left of the DevTools window. The **Activity Bar** contains icons used to open tools and access help and settings.

  It replaces the main toolbar from the default user interface.

  ![Screenshot of the activity bar in Focus Mode](media/focus-mode-activity-bar.png)

### Quick View

  The **Quick View** list contains all tools and can be used to display a tool alongside the one already selected from the **Activity Bar**.

  **Quick View** replaces the drawer toolbar from the default user interface.

  ![Screenshot of the quick view list in Focus Mode with a tool selected and opened in the bottom pane](media/focus-mode-quick-view.png)

### DevTools customization and settings

  Several customization features and the DevTools settings are now grouped together under a single menu available from the **Customize and control DevTools** (**...**) button in the **Activity Bar**. These features and settings appear in multiple locations in the default user interface.

  * **Dock location** lets you change the placement of DevTools in the browser window.
  * **Activity Bar location** lets you change the placement of the **Activity Bar** within DevTools.
  * **Themes** lets you change the color theme.
  * **Settings** provides access to the DevTools settings.
  * **Keyboard shortcuts** lets you review and change keyboard shortcuts.

  ![Screenshot of the menu in Focus Mode](media/focus-mode-menu.png)

### Help links

  The **Help** menu contains links to the DevTools documentation and release notes and a button to send feedback to the team. These links and buttons were previously nested under **Customize and control DevTools** > **Help** in the default user interface.

  ![Screenshot of the help menu in Focus Mode](media/focus-mode-help.png)


<!-- ====================================================================== -->
## Open tools from the Activity Bar

By default, the **Activity Bar** contains the following tools:

* Icon tools:
   *  **Inspect** tool (![Inspect tool icon.](../media/inspect-tool-icon-light-theme.png)) toggle button.
   *  **Device Emulation** (![Device Emulation icon.](../media/device-emulation-icon-light-theme.png)) button.

* Tool tabs:
   *  **Welcome** tool (![Welcome tool icon.](media/focus-mode-welcome.png)).
   *  **Elements** tool (![Elements tool icon.](media/focus-mode-elements.png)).
   *  **Console** tool (![Console tool icon.](media/focus-mode-console.png)).
   *  **Sources** tool (![Sources tool icon.](media/focus-mode-sources.png)).
   *  **Network** tool (![Network tool icon.](media/focus-mode-network.png)).
   *  **Issues** tool (![Issues tool icon.](media/focus-mode-issues.png)).
   *  **Performance** tool (![Performance tool icon.](media/focus-mode-performance.png)).
   *  **Memory** tool (![Memory tool icon.](media/focus-mode-memory.png)).
   *  **Application** tool (![Application tool icon.](media/focus-mode-application.png)).

Click one of the icons in the **Activity Bar** to open the corresponding tool.

![Screenshot of the Elements tool in Focus Mode](media/focus-mode-elements-tool.png)


<!-- ====================================================================== -->
## Add and remove tools from the Activity Bar

If the tool you want to open does not appear in the **Activity Bar** by default, click **More tools** (**+**) to list all the available tools.

![Screenshot of the More tools menu in Focus Mode](media/focus-mode-more-tools.png)

Opening a new tool from the **More tools** menu adds its icon to the **Activity Bar**. If there isn't enough space in the **Activity Bar** to display the new icons, the icons appear in the **More tools** menu.

![Screenshot of the More tools menu in Focus Mode when the window is shorter, causing some of the icons to be displayed in the menu rather than the activity bar](media/focus-mode-overflow-tools.png)

To remove icons from the **Activity Bar** right-click the icon and click **Remove from activity bar**.

![Screenshot of the contextual menu to remove tools from the Activity bar](media/focus-mode-remove-tool.png)

The following tools are permanent and can't be removed from the **Activity Bar**:

* **Elements** tool
* **Console** tool
* **Sources** tool


<!-- ====================================================================== -->
## Open tools from Quick View

Use the **Quick View** list to open a second tool next to the one already selected from the **Activity Bar**.

1. Choose a tool from the **Activity Bar**.

1. Click the **Quick View** list and select a different tool from the list.

The following screenshot shows the **Network** tool and the **Console** tool side by side.

![Screenshot of Focus Mode with the Network tool at the top, and the Console tool at the bottom](media/focus-mode-quick-view-tool.png)

When you finish using the second tool, close **Quick View** by clicking **Collapse Quick View** (![Quick view chevron toggle icon](media/focus-mode-chevron.png)).


<!-- ====================================================================== -->
## Customize Focus Mode

The **Activity Bar** can be displayed vertically, or horizontally, or automatically depending on where DevTools is docked.

To change the location of the **Activity Bar** click **Customize and control DevTools**, then **Activity bar location**, and then choose one of the locations.

![Screenshot of the Activity bar location menu in Focus Mode](media/focus-mode-activity-bar-location.png)

* **Adapt to dock location**: The **Activity Bar** will automatically be placed depending on where DevTools is docked.

  * If DevTools is docked to the left or right side of the browser window, the **Activity Bar** will be vertical.
  * If DevTools is docked to the bottom side of the browser window, or undocked in its own window, the **Activity Bar** will be horizontal.

* **Top**: The **Activity Bar** will always be horizontal.

* **Left side**: The **Activity Bar** will always be vertical.

When the **Activity Bar** is horizontal, tool names appear next to tool icons if there is enough space to display them.

The following screenshot shows DevTools undocked in its own window, with the horizontal **Activity Bar** showing some tabs with tool icons and names, and some with icons only.

![Screenshot of Focus Mode with the horizontal Activity bar](media/focus-mode-horizontal.png)


<!-- ====================================================================== -->
## See also

* [DevTools: Focus Mode UI](https://github.com/MicrosoftEdge/DevTools/blob/main/explainers/FocusMode/explainer.md) is the initial explainer for this experimental feature, in the Microsoft Edge DevTools repo.
