---
title: Network request blocking tool
description: The Network request blocking tool in Microsoft Edge DevTools.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 02/15/2022
---
# Network request blocking tool

Use the **Network request blocking** tool to test blocking network requests to a specified URL pattern and see how a webpage behaves.

To try the **Network request blocking** tool:

1. In a separate window or tab, go to the [Accessibility-testing demo webpage](https://microsoftedge.github.io/Demos/devtools-a11y-testing/).

1. To open DevTools, right-click the webpage, and then select **Inspect**.  Or, press `Ctrl`+`Shift`+`I` (Windows, Linux) or `Command`+`Option`+`I` (macOS).  DevTools opens.

1. In DevTools, on the main toolbar, select the **Network request blocking** tab.  If that tab isn't visible, click the **More tabs** (![More tabs icon.](../media/more-tabs-icon-light-theme.png)) button, or else the **More Tools** (![More Tools icon.](../media/more-tools-icon-light-theme.png)) button.

   The page content is displayed:

   ![The Network request blocking tool, not blocking any URL patterns, showing webpage content.](../media/network-request-blocking-tool-not-blocked.png)

1. In the the **Network request blocking** panel, click the **Add pattern** (![More tabs icon.](../media/more-tabs-icon-light-theme.png)) icon or the **Add pattern** button, if it's displayed.

1. In the **Text pattern to block matching requests** text box, paste the following URL path, and then click the **Add** button:

   ```http
   https://microsoftedge.github.io/Demos/
   ```
   
1.  Refresh the page.  Now most elements of the page aren't displayed, and a number of network requests are indicated as blocked:

    ![The Network request blocking tool, blocking the DevTools GitHub Demos server.](../media/network-request-blocking-tool.png)

1. Click the **Remove all patterns** (![Remove all patterns icon.](../media/network-request-blocking-tool-remove-all-patterns-icon.png)) icon, and then click **Refresh**.  The page content re-appears.
