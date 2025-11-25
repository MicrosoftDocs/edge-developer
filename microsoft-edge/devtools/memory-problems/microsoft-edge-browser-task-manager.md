---
title: Monitor memory use in realtime (Microsoft Edge Browser Task Manager)
description: A starting point to inspect webpage memory issues.  A realtime monitor that tells you how much memory a webpage is currently using.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 10/21/2024
---
# Monitor memory use in realtime (Microsoft Edge Browser Task Manager)

Use the Microsoft Edge Browser Task Manager as a starting point to your memory issue investigation.  The Microsoft Edge Browser Task Manager is a realtime monitor that tells you how much memory a page is currently using.

1. In Microsoft Edge, press **Shift+Esc**.  Or, select **Settings and more** (**...**) > **More tools** > **Browser Task Manager**:

   ![Opening the Microsoft Edge Browser Task Manager](./microsoft-edge-browser-task-manager-images/bing-settings-more-tools-browser-task-manager.png)

   Microsoft Edge Browser Task Manager opens.

1. Right-click the table header, and then enable **JavaScript memory**:

   ![Enabling JavaScript memory](./microsoft-edge-browser-task-manager-images/bing-browser-task-manager-javascript-memory.png)

   The **JavaScript memory** column is displayed:

   ![The JavaScript memory column](./microsoft-edge-browser-task-manager-images/javascript-memory-column.png)

   *  The **Memory** column represents native memory.  DOM nodes are stored in native memory.  If this value is increasing, DOM nodes are getting created.

   *  The **JavaScript memory** column represents the JS heap.  This column contains two values.  The value you are interested in is the live number (the number in parentheses).  The live number represents how much memory the reachable objects on your page are using.  If this number is increasing, either new objects are being created, or the existing objects are growing.

<!--*  live number reference: https://groups.google.com/d/msg/google-chrome-developer-tools/aTMVGoNM0VY/bLmf3l2CpJ8J  -->


<!-- ============================================ -->
## See also

* [Fix memory problems](./index.md)
