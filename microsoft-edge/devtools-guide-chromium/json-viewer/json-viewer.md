---
title: View formatted JSON
description: How to use the JSON viewer to view formatted and highlighted JSON responses in a browser tab.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 04/08/2024
---
# View formatted JSON

Use the **JSON viewer** to automatically format and syntax highlight JSON responses and files in browser tabs.

The **JSON viewer** changes the returned JSON data to make it easier to read. Sometimes a web server responds to HTTP requests by returning data encoded as JSON.  JSON data can be difficult to read when it's formatted as a single long, concatenated line of text. The same can occur when opening a JSON file from disk.

The **JSON viewer** improves readability of JSON data in several ways:

*  The JSON syntax is highlighted with different colors.
*  Object properties are displayed on their own lines and indented.
*  Objects can be collapsed or expanded.
*  The JSON viewer matches your operating system's dark or light theme.


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

To search for text within the JSON data, use the **JSON viewer**'s search feature:

1. View a JSON response or file in the **JSON viewer**.

1. Put focus in the JSON data by clicking anywhere in the formatted JSON data.

1. Press **Ctrl+F** (Windows, Linux) or **Command+F** (macOS). The search box appears at the top of the **JSON viewer**:
  
   ![The search feature of the JSON viewer](./json-viewer-images/search.png)

1. Start typing the text you want to search for.

   As you type, the **JSON viewer** highlights the occurrences of the text in the JSON data.

1. To stop search, click the **Cancel** button:

   ![The Cancel button in the JSON viewer's search toolbar](./json-viewer-images/search-cancel.png)


<!-- ------------------------------ -->
#### Move through the search results

To move to the next or previous search results, after results were found, click the **Next** or **Previous** buttons near the search box, the current search result is highlighted in a different color:

![The Next and Previous buttons in the JSON viewer's search toolbar](./json-viewer-images/search-move.png)


<!-- ------------------------------ -->
#### Change how the search is performed

Search is performed with the following default settings:

* Case-insensitive: this means that typing `hello` matches `Hello`, `HELLO`, `hello`, or any string that contains the characters `hello` in any case.
* Not by regular expression: this means that the search string is treated as a literal string, not as a regular expression.
* Not by word: this means that typing `hello` matches `hello`, `hello-world`, and `world-hello`, or any string that contains the sequence of characters `hello`.

To make the search case sensitive, click **Match Case** in the search toolbar.

To search by regular expressions, click **Regexp** in the search toolbar.

To search by word, click **By Word** in the search toolbar.

![The Match Case, Regexp, and By Word buttons, which change how the search is performed](./json-viewer-images/search-modes.png)
