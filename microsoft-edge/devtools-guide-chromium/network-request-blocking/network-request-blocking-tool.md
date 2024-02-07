---
title: Network request blocking tool
description: Use the Network request blocking tool in Microsoft Edge DevTools to block selected network requests, to find out how webpages look and behave when some resources are not available.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 10/23/2013
---
# Network request blocking tool

Use the **Network request blocking** tool to check how a webpage looks and behaves when some resources are unavailable, such as image files, JavaScript files, fonts, or CSS stylesheets.  Use this tool to test blocking network requests to a specified URL pattern and see how a webpage behaves.

When a webpage depends on _external resources_ that are hosted on other servers than the HTML webpage, sometimes those servers might be unresponsive or unavailable to some users. When this happens, some resources that your webpage depends on might not be retrieved by the web browser.  It's important to check how your webpage behaves when external resources fail to load.  Test whether the webpage handles missing resources gracefully, or appears broken to your users.

After you create blocked network requests and test the webpage, you can then edit or delete the blocked network requests.


<!-- ====================================================================== -->
## Block a network request

To block a network request:

1. Go to the webpage for which you want to block network requests. For example, open the [accessibility-testing demo page](https://microsoftedge.github.io/Demos/devtools-a11y-testing/) in a new tab or window. This webpage contains images that you'll block using the **Network request blocking** tool.

1. To open DevTools, right-click the webpage, and then select **Inspect**.  Or, press **Ctrl+Shift+I** (Windows, Linux) or **Command+Option+I** (macOS).

1. In DevTools, on the **Activity Bar**, click the **Network request blocking** tab.  If that tab isn't visible, click the **More Tools** (![More Tools icon](./network-request-blocking-tool-images/more-tools-icon-light-theme.png)) button.

1. Click the **Add pattern** (![Add pattern icon](./network-request-blocking-tool-images/add-pattern-icon.png)) button.  The **Enable network request blocking** checkbox is automatically selected.

1. In the **Text pattern to block matching requests** text box, type **\*.jpg**.  This blocks all requests for JPEG images.

   You can do any of the following:
   * Type the full URL.
   * Type only the domain name, to block all requests from this domain.
   * Replace parts of the URL with `*`, for wildcard pattern matching.
   
   For example, `contoso.com` matches URLs like:

   * `https://contoso.com`
   * `https://subdomain.contoso.com`
   * `https://subdomain.contoso.com/path/to/resource`

   And `*.jpg` matches URLs like:
   
   * `https://www.contoso.com/resource.jpg`
   * `http://third-party.com/6469272/163348534-b90ea1a3-c33cbeb1aed8.jpg`

1. Click the **Add** button:

   ![The Network request blocking tool, showing the new *.jpg blocking pattern](./network-request-blocking-tool-images/block-network-request.png)

1. Refresh the page.  All JPEG images are blocked, so in the rendered webpage, each image is indicated as missing, by a "broken image" icon.  The number of blocked network requests is indicated in the **Network request blocking** tool:

   ![The Network request blocking tool, blocking all JPEG images](./network-request-blocking-tool-images/blocked-images.png)


<!-- ====================================================================== -->
## Delete a blocked network request

To delete a specific network blocking request pattern:

*  In the **Network request blocking** table, hover over a network blocking request pattern, and then click the **Remove** (![Remove blocked request icon](./network-request-blocking-tool-images/remove-blocked-request-icon.png)) button:

   ![Removing a blocked request](./network-request-blocking-tool-images/remove-blocked-request.png)

To delete all network blocking requests at once:

*  In the toolbar, click the **Remove all patterns** (![Remove all blocked requests icon](./network-request-blocking-tool-images/remove-all-blocked-requests-icon.png)) button.


<!-- ====================================================================== -->
## Modify a blocked network request

To change an existing blocked network request:

*  In the **Network request blocking** table, hover over a blocked network request, and then click **Edit** (![edit blocked request icon](./network-request-blocking-tool-images/edit-blocked-request-icon.png)):

   ![Editing a blocked request](./network-request-blocking-tool-images/edit-blocked-request.png)


<!-- ====================================================================== -->
## Toggle network request blocking

To toggle network request blocking without having to delete and re-create all of the blocked network requests:

*  In the toolbar, select or clear the **Enable network request blocking** checkbox:

   ![Toggling network request blocking](./network-request-blocking-tool-images/toggle-request-blocking.png)


<!-- ====================================================================== -->
## Block a network request by using the Network tool

You can block network requests that are made by your webpage either by using the **Network request blocking** tool or by using the **Network** tool.

To block network requests by using the **Network** tool:

1. Go to the webpage for which you want to block network requests. For example, open the [accessibility-testing demo page](https://microsoftedge.github.io/Demos/devtools-a11y-testing/) in a new tab or window.

1. To open DevTools, right-click the webpage, and then select **Inspect**.  Or, press **Ctrl+Shift+I** (Windows, Linux) or **Command+Option+I** (macOS).  DevTools opens.

1. In DevTools, on the **Activity Bar**, click the **Network** tab.  If that tab isn't visible, click the **More Tools** (![More Tools icon](./network-request-blocking-tool-images/more-tools-icon-light-theme.png)) button.

1. In the table of network requests in the bottom pane, find the network request that you want to block.

1. Right-click the network request, and then click **Block request URL** to block this specific resource, or **Block request domain** to block all resources from the same domain:

   ![Blocking from the network tool](./network-request-blocking-tool-images/block-request-from-network-tool.png)
