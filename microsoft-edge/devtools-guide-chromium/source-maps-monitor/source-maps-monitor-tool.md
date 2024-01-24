---
title: Source Maps Monitor tool
description: How to use the Source Maps Monitor tool in Microsoft Edge DevTools.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 09/05/2023
---
# Source Maps Monitor tool

Use the **Source Maps Monitor** tool to monitor which source files on your webpage requested loading of source maps, and whether the source maps were loaded.  This tool is useful if your webpage uses source maps to map your reprocessed code to your original source code.  _Source mapping_ enables you to see and debug your original source code, rather than having to work with the reprocessed version of your code that's returned by the server.


To try this feature:

1. In a new tab or window, follow the instructions in [Map the processed code to your original source code, for debugging](../javascript/source-maps.md), and then continue below.

1. Close the popup dialog that the demo opens.

1. In the **Sources** tool, in the **Page** tab, select the file that the demo created for you, such as **Coffee2.js**.

1. In DevTools, on the main toolbar, click the **More Tools** (![More Tools icon](./source-maps-monitor-tool-images/more-tools-icon-light-theme.png)) button, and then select the **Source Maps Monitor** tool.

   ![The Source Maps Monitor tool](./source-maps-monitor-tool-images/source-maps-monitor-tool.png)


<!-- ====================================================================== -->
## Exclusions and inclusions

The **Source Maps Monitor** tool shows which URL lookups have or haven't been attempted, as configured in filter settings in DevTools **Settings > Symbol Server > Filter behavior**.  For example:

1. Right-click a webpage and then select **Inspect**.  DevTools opens.

1. Click the **Settings** (![Settings icon for DevTools](./source-maps-monitor-tool-images/settings-icon.png)) button, and then select **Symbol Server**.

1. In the **Filter behavior** dropdown list, select **Exclusion List** (or, select **Inclusion List**).  If the **Filter behavior** dropdown list isn't displayed, set the **Symbol Server** settings, as described in the following articles:

   * [Securely debug original code by publishing source maps to the Azure Artifacts symbol server](../javascript/publish-source-maps-to-azure.md)
   * [Securely debug original code by using Azure Artifacts symbol server source maps](../javascript/consume-source-maps-from-azure.md)
   * [Improvements for connecting DevTools to Azure Artifacts symbol server](../whats-new/2023/07/devtools-115.md#improvements-for-connecting-devtools-to-azure-artifacts-symbol-server) in _What's New in DevTools (Microsoft Edge 115)_.

1. In the **Filter behavior** text box, enter a domain with wildcard to exclude (or, to include), such as: `https://ryanseddon.com/*`

1. Close DevTools **Settings**.

1. In DevTools, select the **Source Maps Monitor** tool.

   The **Source Maps Monitor** tool now indicates excluded (or, included) source map URL lookup attempts:

![Source Maps Monitor tool indicates source map URL lookups attempted](./source-maps-monitor-tool-images/source-maps-monitor-exclusions.png)


<!-- ====================================================================== -->
## See also

* [Map the processed code to your original source code, for debugging](../javascript/source-maps.md)
* [Securely debug original code by publishing source maps to the Azure Artifacts symbol server](../javascript/publish-source-maps-to-azure.md)
* [Securely debug original code by using Azure Artifacts symbol server source maps](../javascript/consume-source-maps-from-azure.md)
* [Sources tool now notifies you when sourcemaps can't be loaded](../whats-new/2021/11/devtools.md#sources-tool-now-notifies-you-when-sourcemaps-cant-be-loaded) in _What's New in DevTools (Microsoft Edge 96)_.
