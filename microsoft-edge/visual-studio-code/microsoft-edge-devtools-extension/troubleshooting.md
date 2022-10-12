---
title: Troubleshooting the DevTools extension
description: Error messages and how to restart DevTools in ways that avoid them.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 10/06/2022
---
# Troubleshooting the DevTools extension

Make sure to open DevTools in one of the supported ways or scenarios.  Make sure you open a folder that contains source files for the webpage that you are inspecting with DevTools.  See [Opening DevTools and the embedded DevTools browser](./open-devtools-and-embedded-browser.md).


<!-- ====================================================================== -->
## Restarting DevTools

A powerful way of restarting DevTools is to close and reopen the folder:

1. In Visual Studio Code, select **File** > **Close Folder**.

1. If you started a web server by using Terminal in Visual Studio Code, restart the web server, such as by running `npx http-server`.  For more information, see [Step 6: Set up a localhost server by using npx http-server](./install.md#step-6-set-up-a-localhost-server-by-using-npx-http-server) in _Installing the DevTools extension for Visual Studio Code_.  Or instead, you can start the web server from a command prompt outside of Visual Studio Code, so it keeps running.

1. In Visual Studio Code, select **File** > **Open Recent**, and open a folder that contains web page source files.


<!-- ====================================================================== -->
## Error messages

The solution for most error messages is to open DevTools in one of the recommended ways, and use DevTools to access local files.

Suppose you click the **Launch Instance** button, then paste a localhost URL into the address bar, such as [http://localhost:8080/](http://localhost:8080/) or [http://localhost/demos/demo-to-do/](http://localhost/demos/demo-to-do/), but you don't have the local source files folder open.  Then in the **Styles** tab of the Elements tool, try to change a CSS value.  This way of opening and using DevTools is not fully supported and produces error messages such as:

*  **Error while mirroring css content to document.  Could not mirror css changes to document.  No workspace mapping was found.**

*  **Unable to open file in editor.**

*  **Error while opening file in editor.**

*  **Error while fetching.**

*  **Could not attach to main target.**

*  **Error while fetching list of available targets.  No available targets to attach.**

![No workspace mapping](./troubleshooting-images/no-workspace-mapping.png)

If you get errors while trying to point to a file path, instead of using a `launch.json` file, try right-clicking the `.html` file instead:

![Could not attach to main target](./troubleshooting-images/could-not-attach-main-target.png)

See [Opening DevTools and the embedded DevTools browser](./open-devtools-and-embedded-browser.md).


<!-- ====================================================================== -->
## See also

* [Get started using the DevTools extension for Visual Studio Code](./get-started.md)
* [Microsoft Edge DevTools extension for Visual Studio Code](../microsoft-edge-devtools-extension.md)
