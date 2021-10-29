---
description: The Search tool in Microsoft Edge DevTools helps find source files.
title: Search
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/28/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Search

Use the **Search** tool in Microsoft Edge DevTools to find source files on a webpage.

At a minimum, a webpage is an HTML document used by the browser to display content. But webpages commonly require other resources on top of the HTML document, such as CSS, JavaScript, or image files, to provide richer content.

The [**Sources**](../sources/index.md) tool shows all the resources downloaded by a webpage in the **Navigator** pane, but when there are many resources, it can become useful search through them.

The **Search** tool makes it possible to do text and regular expression searches across all resources.


<!-- ====================================================================== -->
## Open the Search tool

To open the **Search** tool:

1. [Open DevTools](../open/index.md) (`F12`).
1. Open the [Command Menu](../command-menu/index.md), `Control`+`Shift`+`P` (Windows, Linux) or `Command`+`Shift`+`P` (macOS).
1. Type `search` and press `Enter`.

:::image type="content" source="../media/search-tool/open-search-tool.png" alt-text="The Command Menu with the Show Search item selected.":::

The **Search** tool appears in the **Drawer** and shows the search toolbar.

:::image type="content" source="../media/search-tool/search-tool-first-open.png" alt-text="The Search tool, with the search toolbar.":::


<!-- ====================================================================== -->
## Search for text

To search for text in the webpage resources:

1. Focus the search input field.
1. Type the text you want to search.
1. Press `Enter`.

The tool shows the list of resources that contain the searched text and highlights the lines that contain the text for each resource.

The number of matching files and lines is also indicated at the bottom of the tool.

:::image type="content" source="../media/search-tool/search-tool-search-results.png" alt-text="Search results displayed in the search tool, with matching text highlighted in yellow.":::


<!-- ====================================================================== -->
## Match case and search for regular expressions

By default, the **Search** tool is not case sensitive. This means that a search for a term matches occurrences of that term regardless of their case.

Click the **Match Case** button (`Aa`) in the toolbar to only find results that match a particular case.

You can also use [JavaScript regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) to find matching results. To use a regular expression, click the **Use Regular Expression** button (`.*`) in the toolbar and enter a valid regular expression in the search input field.

:::image type="content" source="../media/search-tool/search-tool-regexp.png" alt-text="Searching for a regular expression.":::


<!-- ====================================================================== -->
## Navigate to the Sources tool

Click on any of the result lines to navigate to the corresponding resource. The **Sources** tool opens in the main panel and loads the resource, scrolled at the right line.

:::image type="content" source="../media/search-tool/search-tool-open-in-sources.png" alt-text="Clicking on a search line opens the Sources tool and loads the corresponding resource." lightbox="../media/search-tool/search-tool-open-in-sources.png":::


<!-- ====================================================================== -->
## Update and clear search

A webpage can continue to request resources after it has finished loading, so the results displayed in the **Search** panel may become stale after a while. To update the search results:

* Either search again by typing a term in the search input field.
* Or click the **Refresh** button in the toolbar (![Refresh search button](../media/search-tool/search-tool-refresh.png)).

You can also clear the search results by clicking the **Clear** button in the toolbar (![Clear search button](../media/search-tool/search-tool-clear.png)).
