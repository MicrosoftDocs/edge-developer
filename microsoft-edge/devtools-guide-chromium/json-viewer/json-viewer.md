---
title: View formatted JSON responses or files
description: How to use the JSON viewer to view formatted and highlighted JSON responses in a browser tab.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 02/05/2025
---
# View formatted JSON responses or files

Use the **JSON viewer** to automatically format and syntax highlight JSON responses and files in browser tabs.

The **JSON viewer** changes the returned JSON data to make it easier to read. Sometimes a web server responds to HTTP requests by returning data encoded as JSON.  JSON data can be difficult to read when it's formatted as a single long, concatenated line of text. The same can occur when opening a JSON file from disk.

The **JSON viewer** improves readability of JSON data in several ways:

*  The JSON syntax is highlighted with different colors.
*  Object properties are displayed on their own lines and indented.
*  Objects can be collapsed or expanded.
*  The JSON viewer matches your operating system's dark or light theme.


<!-- ------------------------------ -->
#### Video: The JSON viewer

[![Thumbnail image for video "The JSON viewer"](./json-viewer-images/json-viewer.png)](https://www.youtube.com/watch?v=DO7V6lw1SWA)


<!-- ------------------------------ -->
#### Supported scenarios

The **JSON viewer** is not supported in windows that are opened by using the `window.open` JavaScript method. In windows opened with `window.open`, JSON data is displayed as a single line of text, without formatting or syntax highlighting.


<!-- ====================================================================== -->
## View reformatted JSON server responses

To view a JSON response from a web server as reformatted JSON:

1. Open a new tab or window in Microsoft Edge.

1. Type a URL that returns JSON data in the address bar. For example, use this sample JSON response: [https://microsoftedge.github.io/Demos/json-dummy-data/256KB-min.json](https://microsoftedge.github.io/Demos/json-dummy-data/256KB-min.json).

   You can find more samples of JSON responses at [MicrosoftEdge / Demos > json-dummy-data](https://microsoftedge.github.io/Demos/json-dummy-data/).

1. Microsoft Edge detects that the returned data is JSON and formats it automatically:

   ![JSON data returned by a web server, formatted and syntax-highlighted by the JSON viewer](./json-viewer-images/json-response.png)


<!-- ====================================================================== -->
## View reformatted JSON files

To view a JSON file stored on your device as reformatted JSON:

1. Open a new tab or window in Microsoft Edge.

1. Press **Ctrl+O** on Windows and Linux, or **Command+O** on macOS, and then select a JSON file.

1. Microsoft Edge detects that the file contains JSON data and formats it automatically:

   ![JSON data stored in a local file, formatted and syntax-highlighted by the JSON viewer](./json-viewer-images/json-file.png)


<!-- ====================================================================== -->
## Detect invalid JSON data

JSON data can sometimes be invalid. For example, the following patterns are invalid in JSON:

*  Omitting double quotes around a key name.
*  Having a trailing comma after the last key/value pair.

The **JSON viewer** applies syntax highlighting to invalid JSON. However, the **JSON viewer** doesn't format the content, and you can't collapse or expand objects.

You can find information about the invalid syntax in the **Console** tool, where the **JSON viewer** reports errors.

To view invalid JSON data:

1. Open a new tab or window in Microsoft Edge.

1. In the Address bar, go to a URL that returns invalid JSON data.  For example, use this sample invalid JSON response: [https://microsoftedge.github.io/Demos/json-dummy-data/missing-colon.json](https://microsoftedge.github.io/Demos/json-dummy-data/missing-colon.json).

   You can find other invalid samples of JSON responses at [MicrosoftEdge / Demos > json-dummy-data](https://microsoftedge.github.io/Demos/json-dummy-data/#invalid-json).

1. Microsoft Edge detects that the file contains invalid JSON data, and colorizes the JSON listing, but doesn't wrap or otherwise reformat the JSON listing.  The fact that the JSON isn't wrapped indicates there's malformed JSON.

1. Open the **Console** tool by pressing **Ctrl+Shift+J** (Windows, Linux) or **Command+Option+J** (macOS).

   A JavaScript error indicates where the JSON syntax error is located:

   ![Invalid JSON, highlighted by not formatted, with a syntax error displayed in the Console tool](./json-viewer-images/invalid-json.png)

1. In a code editor, such as Microsoft Visual Studio Code, go to the indicated column number to inspect the JSON:

   ![Viewing the malformed JSON by column number in VS Code](./json-viewer-images/column-number.png)


<!-- ====================================================================== -->
## Search the JSON data

To search for text within the JSON data, use the **JSON viewer**'s **Find** feature, as follows:

1. View a JSON response or file in the **JSON viewer**.

1. Click anywhere in the formatted JSON data, to put focus in the JSON data.

1. Press **Ctrl+F** (Windows, Linux) or **Command+F** (macOS). The search toolbar appears at the top of the **JSON viewer**:
  
   ![The search toolbar of the JSON viewer](./json-viewer-images/search.png)

1. In the **Find** text box, start typing the text you want to search for.  As you type, the **JSON viewer** highlights all of the occurrences of the text string in the JSON data.

To stop the search, click the **Cancel** button in the **JSON viewer**'s toolbar.


<!-- ------------------------------ -->
#### Move through the search results

To move to the next or previous search result, after results were found, click the **Next** or **Previous** buttons in the search toolbar.  The currently selected search result is highlighted in a different color:

![The Next and Previous buttons in the JSON viewer's search toolbar](./json-viewer-images/search-move.png)


<!-- ------------------------------ -->
#### Modify the type of search

The search toolbar contains **Match Case**, **Regexp**, and **By Word** checkboxes, to modify the type of search:

![The Match Case, Regexp, and By Word checkboxes, which change how the search is performed](./json-viewer-images/search-modes.png)


<!-- ---------- -->
###### Perform a case-sensitive search

By default, the search is case-insensitive.  For example, a search on `hello` matches `Hello`, `HELLO`, `hello`, or any string that contains the characters `hello` with any casing.

To make the search case-sensitive, select the **Match Case** checkbox in the search toolbar.


<!-- ---------- -->
###### Search by a regular expression

By default, the search string is treated as a literal string.

To search by using a regular expression, select the **Regexp** checkbox in the search toolbar.


<!-- ---------- -->
###### Search by whole word only

By default, the search is not restricted to finding just the whole, isolated word surrounded by spaces.  For example, a search on `hello` matches `hello`, `hello-world`, and `world-hello`, or any string that contains the sequence of characters `hello`.

To restrict the search to match only the string surrounded by spaces, without adjacent letters, select the **By Word** checkbox in the search toolbar.
