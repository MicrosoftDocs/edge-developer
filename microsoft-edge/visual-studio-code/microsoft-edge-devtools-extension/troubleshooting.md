---
title: Troubleshooting the DevTools extension
description: Use the extension with the Visual Studio Code debugging workflow in the Microsoft Edge Developer Tools extension for Visual Studio Code.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 10/06/2022
---
# Troubleshooting the DevTools extension

Make sure to open DevTools in one of the supported ways or scenarios.  See [Get started using the DevTools extension for Visual Studio Code](./get-started.md).


<!-- ====================================================================== -->
## Error messages

The solution for most error messages is to open DevTools in one of the recommended ways, and use DevTools to access local files.

Suppose you click the **Launch Instance** button, then paste a localhost URL into the address bar, such as `http://localhost/demos/demo-to-do/`, and then in the Styles tab of the Elements tool, try to change a CSS value.  This way of opening and using DevTools is not fully supported and produces error messages such as:

*  **Error while mirroring css content to document.  Could not mirror css changes to document.  No workspace mapping was found.**

*  **Unable to open file in editor.**

*  **Error while opening file in editor.**

*  **Error while fetching.**

*  **Could not attach to main target.**

*  **Error while fetching list of available targets.  No available targets to attach.**

![No workspace mapping](./troubleshooting-images/no-workspace-mapping.png)

If you get errors while trying to point to a file path, instead of using a `launch.json` file, try right-clicking the .html file instead:

![Could not attach to main target](./troubleshooting-images/could-not-attach-main-target.png)


#### Solution
 
Start DevTools in one of the two main ways, so that the Debug toolbar appears.  See:
* [Starting DevTools by right-clicking an HTML file](./get-started.md#starting-devtools-by-right-clicking-an-html-file) in _Get started using the DevTools extension for Visual Studio Code_.
* [Starting DevTools by using a localhost URL](./get-started.md#starting-devtools-by-using-a-localhost-url) in _Get started using the DevTools extension for Visual Studio Code_.


<!-- ====================================================================== -->
## See also

* [Get started using the DevTools extension for Visual Studio Code](./get-started.md)
