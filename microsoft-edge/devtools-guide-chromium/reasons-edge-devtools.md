---
title: Reasons to use Microsoft Edge DevTools
description: Reasons to use Microsoft Edge DevTools, including ease of use, customization, and unique tools.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: devtools
ms.date: 05/20/2022
---
# Reasons to use Microsoft Edge DevTools

The Microsoft Edge DevTools team has added a lot of features based on feedback we received from the community to enhance the experience of Developers.  Here is a list of features that are unique to Microsoft Edge, available on Windows, Mac and Linux.

**Contents:**

* [Ease of use](#ease-of-use)
   * [Open and close tools easily](#open-and-close-tools-easily)
   * [Move tools around in the UI](#move-tools-around-in-the-ui)
   * [Focus Mode with Activity Bar and Quick View tool menu](#focus-mode-with-activity-bar-and-quick-view-tool-menu)
   * [Tooltips Help Documentation mode](#tooltips-help-documentation-mode)

* [Customization](#customization)
   * [Change the UI language](#change-the-ui-language)
   * [Change the color theme](#change-the-color-theme)

* [Unique tools](#unique-tools)
   * [Detached Elements tool](#detached-elements-tool)
   * [Console error search](#console-error-search)
   * [3D View](#3d-view)
   * [Integration with webhint](#integration-with-webhint)
   * [Integration of Microsoft Edge DevTools with Visual Studio Code](#integration-of-microsoft-edge-devtools-with-visual-studio-code)
   * [Network Console](#network-console)


<!-- ====================================================================== -->
## Ease of use

The developer tools in the browser grew organically over the years.  They can be overwhelming, and sometimes it can be hard to find the feature you're looking for.  So we've been working to ease new users into the tools by providing an improved documentation system.  For users who have more experience with DevTools, we've been making it easier to customize the tools to adapt them to your needs.


### Open and close tools easily

By clicking the **More Tools** (![More Tools icon.](reasons-edge-devtools-images/more-tools-icon.png)) button on the main toolbar or the Drawer toolbar, you can add tools without having to use the **Customize and control DevTools** `...` menu.  You can click the **x** button on any tool tab to remove the tool.  The **Elements**, **Sources** and **Console** tools are always open, and don't have an **x** on their tab.

Adding a new tool to a menu bar by clicking the **More Tools** (![More Tools icon.](reasons-edge-devtools-images/more-tools-icon.png)) button:

![Clicking the + button to add a tool.](reasons-edge-devtools-images/more-tools-button-adds-tool-on-toolbar.png)

Removing a tool by clicking the **x** button on the tab of the tool:

![Removing a tool by activating the x button on the tab of the tool](reasons-edge-devtools-images/click-tab-x-button-to-remove-tool.png)

See [The More Tools menus](about-tools.md#the-more-tools-menus) in _About the list of tools_.


### Move tools around in the UI
 
By right-clicking any tab in the main toolbar or Drawer toolbar, you can move a tool from the top to the bottom panel, and vice versa.

Moving a tool to the bottom drawer using the right-click menu:

![Moving a tool to the bottom drawer using the right-click menu.](reasons-edge-devtools-images/right-click-tool-tab-move-drawer-toolbar.png)

The tool now appears on the bottom drawer:

![The tool now appears on the bottom drawer.](reasons-edge-devtools-images/tool-tab-moved-bottom-toolbar.png)

See [Panel tools vs. Drawer tools](about-tools.md#panel-tools-vs-drawer-tools) in _About the list of tools_.


### Focus Mode with Activity Bar and Quick View tool menu

**Focus Mode** makes the DevTools UI even easier to use.  The Microsoft Edge DevTools team learned through user interviews and feedback sessions that the number of tools displayed at a given time can be overwhelming.  This is why we introduced Focus Mode, which groups a large set of features for related tasks into various tool panels, and then allows you to show only the tools that you need for your current activity or work mode.

Focus mode showing only tools related to Elements debugging:

![Focus mode showing only tools related to Elements debugging.](reasons-edge-devtools-images/focus-mode-with-only-elements-debugging-tools.png)

Focus mode showing only tools related to Source editing:

![Focus mode showing only tools related to Source editing.](reasons-edge-devtools-images/focus-mode-with-only-source-editing-tools.png)

See [Simplify DevTools using Focus Mode](experimental-features/focus-mode.md).


### Tooltips Help Documentation mode

To learn about each tool, enable Tooltips mode, which is a Help mode with links to documentation.  In Focus Mode, you can turn on the Tooltips Mode, which allows you to learn more about the different tools by selecting the various tool tabs in DevTools.

Tool explanations shown when Tooltips mode is enabled:

![Tool explanations shown when Tooltips mode is enabled.](reasons-edge-devtools-images/tool-explanations-in-tooltips-mode.png)

See [Display DevTools Tooltips](overview.md#display-devtools-tooltips) in _Overview of DevTools_.


<!-- ====================================================================== -->
## Customization


### Change the UI language

You can choose a different User Interface language for Microsoft Edge DevTools.  Our usage data shows that users of DevTools come from all over the world, so it made sense to offer them in different languages.

Microsoft Edge Developer Tools displayed in German:

![Microsoft Edge Developer Tools displayed in German.](reasons-edge-devtools-images/microsoft-edge-devtools-with-german-ui.png)

Microsoft Edge Developer Tools displayed in Japanese:

![Microsoft Edge Developer Tools displayed in Japanese.](reasons-edge-devtools-images/microsoft-edge-devtools-with-japanese-ui.png)

See [Change DevTools language settings](customize/localization.md).


### Change the color theme

You can choose a different color theme.  Themes can make your user experience much better, and you can change the look of DevTools to your needs.

Switching to a different theme in DevTools Settings:

![Switching to a different theme in DevTools Settings.](reasons-edge-devtools-images/switch-theme-devtools-settings.png)

Microsoft Edge DevTools displayed in the Monokai theme:

![Microsoft Edge DevTools displayed in the Monokai theme.](reasons-edge-devtools-images/devtools-monokai-theme.png)

See [Apply a color theme to DevTools](customize/theme.md).


<!-- ====================================================================== -->
## Unique tools

These web development tools are only available in Microsoft Edge DevTools.


### Detached Elements tool

The **Detached Elements** tool was built on feedback from a Microsoft team that needed to find out about memory leaks in one of our products.  You can find out what elements are using up memory, even though they aren't part of the Document Object Model (DOM) tree any longer.

The **Detached Elements** tool, showing elements that need to be removed from memory:

![The Detached Elements tool, showing elements that need to be removed from memory.](reasons-edge-devtools-images/detached-elements-to-remove.png)

See [Debug DOM memory leaks with the Detached Elements tool](memory-problems/dom-leaks.md).


### Console error search

In user studies we found that people often copy and paste error messages from the Console to a search engine to find out more about the problem.  We added an icon to these Console messages to make that easier.

Console with highlighted search icon that would open a web search with the error message in a new browser tab:

![Console with highlighted search icon that would open a web search with the error message in a new browser tab.](reasons-edge-devtools-images/console-error-message-search-web-link.png)

See [Search the web for a Console error message string](console/index.md#search-the-web-for-a-console-error-message-string) in _Console overview_.


### 3D View

The **3D View** tool displays either the DOM, the composited layers of a webpage, or the parts of a webpage page that have a z-index assigned to them, as a 3-dimensional representation in an interactive user interface.  This dynamic view allows you to gauge the complexity of your webpage and find out about memory problems.

![The 3D View tool.](reasons-edge-devtools-images/3d-tool.png)

See [Navigate z-index, DOM, and layers using the 3D View tool](3d-view/index.md).


### Integration with webhint

The **Issues** tool automatically shows you all the things that need fixing in the current webpage.  Under the hood, the **Issues** tool uses [webhint](https://webhint.io), which generates reports and provides reporting on various issues.  You not only learn what's wrong with your webpage, but also why it's a problem, where in your webpage the problem exists, and how to fix the issue.

Current problems of a webpage displayed in the Issues panel:

![Current problems of a webpage displayed in the Issues panel.](reasons-edge-devtools-images/webpage-problems-displayed-in-issues-panel.png)

See [Find and fix problems using the Issues tool](issues/index.md).


### Integration of Microsoft Edge DevTools with Visual Studio Code

When you're debugging a problem with your webpage, it's cumbersome to change from a code editor, to the browser, then using DevTools in the browser to analyze the problem, and then going back to try a possible fix of the problem in your source code.  This is why we created a Visual Studio Code extension that embeds Microsoft Edge DevTools into your code editor workflow. 

For example, without integrated tools, you temporarily fix CSS style rules in your transient, resulting webpage files that are sent from your development server to your browser, and then you have to remember the changes, and then re-apply those changes to your actual source code in your source files, over in your code editor.

Now, by using the Microsoft Edge DevTools extension for Visual Studio Code, you can simply use Microsoft Edge DevTools to change your source code directly within an instance of DevTools that's running in the IDE environment of Visual Studio Code.<!-- condense end -->

Microsoft Edge DevTools integrated into Visual Studio Code:

![Microsoft Edge DevTools integrated into Visual Studio Code.](reasons-edge-devtools-images/devtools-integrated-into-visual-studio-code.png)

See [Microsoft Edge DevTools extension for Visual Studio Code](../visual-studio-code/microsoft-edge-devtools-extension.md).


### Network Console

Inspecting the network traffic of your web product is already insightful, but often you need to make some changes to the requests to see why they fail.  Using the **Network Console**, you can change and replay any of the requests, and you can make detailed API calls.

**Network Console** showing options for changing a network call:

![Network Console showing options for changing a network call.](reasons-edge-devtools-images/network-console-options-changing-network-call.png)

See [Compose and send web API requests using the Network Console tool](network-console/network-console-tool.md).


<!-- ====================================================================== -->
## Next steps

* [Sample code for DevTools](sample-code/sample-code.md)

<!--
As a demo tour of Microsoft Edge DevTools, open these demo webpages and follow the steps in the linked articles:

* [Demo tour of DevTools](demo-tour/demo-tour-of-microsoft-edge-devtools.md)
-->
