---
title: Compose and send web API requests using the Network Console tool
description: How to use the Network Console tool in Microsoft Edge DevTools to make synthetic network requests over HTTP when you're developing and testing web APIs.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 09/12/2023
---
# Compose and send web API requests using the Network Console tool

Use the **Network Console** tool to send web API requests.  For example, use the **Network Console** tool when you're developing and testing web APIs.

To test a URL:

1. To open DevTools, right-click a webpage, and then select **Inspect**.  Or, press **Ctrl+Shift+I** (Windows, Linux) or **Command+Option+I** (macOS).

1. On the main toolbar, click the **More tools** (![More tools icon](./network-console-tool-images/more-tools-icon.png)) button, and then select **Network Console**.

   The Network Console tool opens:

   ![The Network Console tool](./network-console-tool-images/network-console-tool.png)

1. Click **Create a request**.

1. Click the **Hide Network Console navigator** (![The 'Hide Network Console navigator' icon](./network-console-tool-images/hide-network-console-navigator-icon.png)) button, to get more space.

1. In the **Untitled Request** text box, enter a URL to test, such as: `https://microsoftedge.github.io/Demos/devtools-a11y-testing/`

1. In the **GET** dropdown list, select a REST method, such as **GET**, which is the default.  The REST methods include:
   * **GET**
   * **HEAD**
   * **POST**
   * **PUT**
   * **PATCH**
   * **DELETE**
   * **OPTIONS**

1. Optionally, in the **Query** section, enter key/value pairs in the **Key** and **Value** text boxes, such as **ID** and **123**:

   ![Entering key/value pairs to construct a URL in the Network Console tool](./network-console-tool-images/entering-key-value-pairs.png)

   The **Computed URL** is updated as you enter key/value pairs.

1. Click the **Send** button.  The bottom part of the **Network Console** tool displays the following tabs:
   * **Preview**
   * **Body**
   * **Headers**
   * **Cookies**


<!-- ====================================================================== -->
## Opening the Network Console tool from within the Network tool

To get to the **Network Console** tool by starting from the **Network** tool:

1. To open DevTools, right-click a webpage, and then select **Inspect**.  Or, press **Ctrl+Shift+I** (Windows, Linux) or **Command+Option+I** (macOS).

1. On the main toolbar, select the **Network** (![Network tool icon](./network-console-tool-images/network-tool-icon.png)) tab.  If that tab isn't visible, click the **More tools** (![More tools icon.](./network-console-tool-images/more-tools-icon.png)) button, and then select **Network**.

1. Refresh the webpage.  The **Network** tool displays the resources that are used to construct the webpage.

1. Right-click the network request that you want to change and resend, and then select **Edit and Resend**:

   ![Right-clicking a resource for the webpage to select 'Edit and resend' in the Network tool](./network-console-tool-images/edit-and-resend.png)

   The **Network Console** tool opens in the **Quick View** panel at the bottom of DevTools.

1. Click the **Hide Network Console navigator** (![The 'Hide Network Console navigator' icon](./network-console-tool-images/hide-network-console-navigator-icon.png)) button, to get more space.

1. Edit the network request information, and then click the **Send** button:

   ![Editing the network request and then clicking Send, in the Network Console tool](./network-console-tool-images/edit-then-send.png)

   <!-- another screenshot (used by "Experimental features in Microsoft Edge DevTools" article):
   ![The Network Console tool in the main toolbar](../media/network-network-console.png) -->


<!-- ====================================================================== -->
## Save and export Collections, Environments, and environment variables

You can:
*  Save and export Collections.
*  Save and export Environments.
*  Edit and export sets of environment variables.

To define and save a new environment:

1. In DevTools, in the **Network Console** tool, make sure the left, navigator part of the tool is displayed.  If needed, click the **Show Network Console navigator** (![The 'Show Network Console navigator' icon](./network-console-tool-images/show-network-console-navigator-icon.png)) button.

1. In the **Environments** section, click the **New** (![The New icon](./network-console-tool-images/new-icon.png)) button.

1. In the text box that appears, enter a name for the new environment:

   ![Entering a name for the new environment](./network-console-tool-images/network-console-environments-new-name.png)

1. Select the format for the new environment:
   * **Network Console** - Supports multiple environments in one file.
   * **Postman** - Supports one environment per file, but work with Postman.

   ![Selecting the format for the new environment](./network-console-tool-images/network-console-environments-new-format.png)

The **Network Console** tool is compatible with the [Postman v2.1](https://schema.getpostman.com/json/collection/v2.1.0/docs/index.html) and [OpenAPI v2](https://swagger.io/specification/v2) schemas.

See also:
* [Save and export using the Network Console](../whats-new/2020/10/devtools.md#save-and-export-using-the-network-console) in _What's New in DevTools (Microsoft Edge 87)_
* [Postman.com](https://www.postman.com/) - A platform for building and testing APIs.


<!-- ====================================================================== -->
## See also

* [View formatted JSON](../json-viewer/json-viewer.md)
<!-- * [edge-devtools-network-console repo](https://github.com/microsoft/edge-devtools-network-console) -->
