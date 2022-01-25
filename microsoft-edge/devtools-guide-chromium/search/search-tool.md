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

Use the **Search** tool to find specific source files for a webpage.

A webpage is mainly an HTML file that's used by the browser to display content.  But webpages commonly require other resources in addition to the HTML file, such as CSS, JavaScript, or image files, to provide richer content.

In the **Sources** tool, the **Page** tab of the [Navigator pane](../sources/index.md#using-the-navigator-pane-to-select-files) shows all the resources that are downloaded by a webpage.  But when there are many resources, it can become useful to _search_ through them.  To do text and regular expression searches across all the resources of a webpage, use the **Search** tool.


<!-- ====================================================================== -->
## Open the Search tool by using a keyboard shortcut

To quickly open the **Search** tool:

1.  [Open DevTools](../open/index.md) (`F12`).

1.  Press `Control`+`Shift`+`F` (Windows/Linux) or `Command`+`Option`+`F` (macOS).

The **Search** tool appears in the **Drawer**, and shows the search toolbar:

:::image type="content" source="../media/search-tool/search-tool-first-open-reduced.png" alt-text="The Search tool, with the search toolbar." lightbox="../media/search-tool/search-tool-first-open.png":::

See also [Global keyboard shortcuts](../shortcuts/index.md#global-keyboard-shortcuts).


<!-- ====================================================================== -->
## Open the Search tool by using the Command Menu

To open the **Search** tool from the **Command Menu**:

1.  [Open DevTools](../open/index.md) (`F12`).

1.  Open the [Command Menu](../command-menu/index.md), by pressing `Control`+`Shift`+`P` (Windows/Linux) or `Command`+`Shift`+`P` (macOS).

1.  Type `search`, and then press `Enter`.

:::image type="content" source="../media/search-tool/open-search-tool.png" alt-text="The Command Menu with the Show Search item selected.":::


<!-- ====================================================================== -->
## Search for text

To search for text in the current webpage and its resource files:

1. Focus the search input field.
1. Type the text you want to search.
1. Press `Enter`.

The **Search** tool shows the list of matching resources, and highlights the corresponding lines of text.  The number of matching files and lines is also indicated at the bottom of the tool.

:::image type="content" source="../media/search-tool/search-tool-search-results.png" alt-text="Search results displayed in the search tool, with matching text highlighted in yellow.":::

<!-- The search results are pretty-printed. -->


<!-- ====================================================================== -->
## Match case (lowercase or uppercase characters)

By default, the **Search** tool is not case-sensitive.  A search for a term matches occurrences of that term, regardless of lowercase or uppercase characters.

To only find results that match a particular case (lowercase or uppercase characters), click the **Match Case** (`Aa`) button in the search toolbar.


<!-- ====================================================================== -->
## Search for regular expressions

You can use regular expressions, including [JavaScript regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions), to find matching results.  To use a regular expression, click the **Use Regular Expression** (`.*`) button in the toolbar and enter a valid regular expression in the search input field.

:::image type="content" source="../media/search-tool/search-tool-regexp.png" alt-text="Searching for a regular expression.":::


<!-- ====================================================================== -->
## Open a found file in the Sources tool

After doing a search, click a result line to open the corresponding file.  The **Sources** tool opens in the main panel and loads the resource file, scrolled to the matching line.

:::image type="content" source="../media/search-tool/search-tool-open-in-sources.png" alt-text="Clicking on a search line opens the Sources tool and loads the corresponding resource." lightbox="../media/search-tool/search-tool-open-in-sources.png":::


<!-- ====================================================================== -->
## Update search results

A webpage can continue to request resources after it has finished loading, so the results displayed in the **Search** panel may become stale after a while.

To update the search results, do either of the following:
*  Search again by typing a term in the search input field.
*  Click the **Refresh** (![Refresh search button](../media/search-tool/search-tool-refresh.png)) button in the toolbar.


<!-- ====================================================================== -->
## Clear a search

To clear the search results, click the **Clear** (![Clear search button](../media/search-tool/search-tool-clear.png)) button in the toolbar.
