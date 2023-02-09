---
title: Source Maps Monitor tool
description: How to use the Source Maps Monitor tool in Microsoft Edge DevTools.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 02/15/2022
---
# Source Maps Monitor tool

Use the **Source Maps Monitor** tool to monitor which source files on your webpage requested loading of source maps, and whether the source maps were loaded.  This tool is useful if your webpage uses source maps to map your reprocessed code to your original source code.  _Source mapping_ enables you to see and debug your original source code, rather than having to work with the reprocessed version of your code that's returned by the server.


To try this feature:

1. In a new tab or window, follow the instructions in [Map the processed code to your original source code, for debugging](../javascript/source-maps.md), and then continue below.

1. Close the popup dialog that the demo opens.

1. In the **Sources** tool, in the **Page** tab, select the file that the demo created for you, such as **Coffee2.js**.

1. In DevTools, on the main toolbar, click the **More Tools** (![More Tools icon](../media/more-tools-icon-light-theme.png)) button, and then select the **Source Maps Monitor** tool.

   ![The Source Maps Monitor tool](../media/source-maps-monitor-tool.png)


<!-- ====================================================================== -->
## See also

* [Map the processed code to your original source code, for debugging](../javascript/source-maps.md)
* [Securely debug original code by publishing source maps to the Azure Artifacts symbol server](../javascript/publish-source-maps-to-azure.md)
* [Securely debug original code by using Azure Artifacts symbol server source maps](../javascript/consume-source-maps-from-azure.md)
* [Sources tool now notifies you when sourcemaps can't be loaded](../whats-new/2021/11/devtools.md#sources-tool-now-notifies-you-when-sourcemaps-cant-be-loaded) in _What's new in DevTools (Microsoft Edge 96)_.
