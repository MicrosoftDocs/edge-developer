---
title: Extend DevTools with extensions
description: Learn to build a Microsoft Edge extension that extends DevTools.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 30/09/2022
---
# Extend DevTools with extensions

If the tools available in Microsoft Edge DevTools are not enough for your use cases, you can add new tools by installing Microsoft Edge extensions or building your own extensions.

Microsoft Edge extensions can insert new tabs in the main toolbar of DevTools.


<!-- ====================================================================== -->
## Install extensions in DevTools

Install extensions in Microsoft Edge by navigating to [Edge Add-ons](https://microsoftedge.microsoft.com/addons/). 

These extensions often extend the Microsoft Edge user interface with new buttons and panels, but can also extend DevTools by adding new tabs in the main toolbar.

There is no way to know if an extension extends the DevTools main toolbar or not without looking at its source code. But the Edge Add-ons website has a **Developer tools** category that contains extensions that often extend DevTools. See the [Developer tools category](https://microsoftedge.microsoft.com/addons/category/Developer-Tools) on the Edge Add-ons website for more details.

To install a DevTools extension:

1. Navigate to the extension you want to install on the Edge Add-ons website. For example, navigate to the [React Developer Tools extension](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil).

1. Click **Get** and confirm the installation dialog.

    ![The React Developer Tools page on the Edge Add-ons website](extensions-images/react-add-on-listing.png)

1. Open a new tab and navigate to a page that uses React. For example use the [TodoMVC React example page](https://todomvc.com/examples/react/#/).

1. Open DevTools by pressing `F12`. Two new tabs are displayed in the main toolbar: **Components** and **Profiler**. If you do not see the new tabs, make the DevTools window wider, or click **More tabs** (![More tabs icon.](../media/more-tabs-icon-light-theme.png)).

    ![DevTools, showing the 2 new React extension panels](extensions-images/react-extensions-panels.png)

1. Click **Components** or **Profiler** to use the React Developer Tools extension.


<!-- ====================================================================== -->
## Create a DevTools extension

You can create your own DevTools extension to add new tabs in the main toolbar and interact with the inspected page.

To learn how to create a DevTools extension, navigate to [Create a DevTools extension](../../extensions-chromium/developer-guide/devtools-extension.md).
