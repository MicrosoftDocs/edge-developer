---
description: The Quick Source tool in Microsoft Edge DevTools.
title: The Quick Source tool
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/03/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# The Quick Source tool

To display source files when you are using a different tool other than the **Sources** tool, use the **Quick source** tool.

<!-- copied this section from:
* [Displaying source files when using a different tool](../sources/index.md#displaying-source-files-when-using-a-different-tool) in _Sources tool overview_
-->

The main place to view source files in the DevTools is within the **Sources** tool.  But sometimes you need to access other tools, such as **Elements** or **Console**, while viewing or editing your source files.  Use the **Quick Sources** tool in the [Drawer][DevtoolsCustomizeIndexDrawer].

1.  Select a tool other than the **Sources** tool, such as the **Elements** tool.

1.  Select `Ctrl`+`Shift`+`P` \(Windows, Linux\) or `Command`+`Shift`+`P` \(macOS\).  The Command Menu opens.

1.  Type `Quick Source`, and then select **Show Quick Source**.  At the bottom of the DevTools window, the Drawer appears, with the **Quick Source** panel selected.  The **Quick Source** panel contains the last file you edited in the **Sources** tool, within a compact version of the DevTools code editor.

1.  Select `Ctrl`+`P` \(Windows, Linux\) or `Command`+`P` \(macOS\) to open the **Open File** dialog.


The **Quick source** tool is also called the **Quick source** panel or the **Quick source** tab.

<!-- not in other doc doc set -->


<!-- ====================================================================== -->
## See also

* [Save a JavaScript change to disk](../workspaces/index.md#step--4-save-a-javascript-change-to-disk) in _Edit files with Workspaces_.
* [Sources tool overview](../sources/index.md)
