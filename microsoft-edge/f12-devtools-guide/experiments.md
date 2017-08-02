---
ms.assetid: fbbd576d-234f-465b-bc63-613d12b2ace7
description: Learn how to edit any JavaScript file in the debugger source viewer by enablind experiments.
title: F12 devtools guide - Experiments
author: erikadoyle
ms.author: edoyle
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# F12 Experiments

F12 experiments can be activated from the **Experiments** tab which is the last tab along the navigation bar along the top of F12. After enabling an experiment you’ll need to close F12 and Microsoft Edge for the change to take effect. 

## Experiment: Edit JavaScript

With this experiment enabled you can edit any JavaScript file in the debugger source viewer. Simply click on the viewer to place the cursor and type away.



As you make edits you will notice a dirty flag, an **asterisk (*)**, in the document’s tab which implies that the document has changed but has not yet been saved.


![Microsoft Edge Experiment Flag](./media/Edge_Experiment_flag.png)

Your edits can then be applied to the page by pressing the save icon or using the keyboard shortcut CTRL + S.

![Microsoft Edge Experiment Save](./media/Edge_Experiment_save.png)

Once saved, you will be able to compare the modified document to the original document using the **diff** command. 

![Microsoft Edge Experiment Diff](./media/Edge_Experiment_diff.png)

Clicking the **diff** command will open up a new **diff view** of the document, highlighting any changes. *Note that you will not be able to edit code in the **diff view**, but can do so by switching back to the original file on the tab bar. 

![Microsoft Edge Experiment Diff View](./media/Edge_Experiment_diff_view.png)

All changes to the document will be lost when you navigate away or refresh from the current page.

You will not be able to edit when paused in the **[Debugger](./debugger.md)** or when a document has been pretty printed.

## Related topics

[Microsoft Edge Developer Tools on Twitter: Find helpful F12 hints and news updates](https://twitter.com/EdgeDevTools)
