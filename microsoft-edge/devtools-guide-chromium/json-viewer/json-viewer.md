---
title: View formatted JSON
description: How to use the JSON viewer to view formatted and highlighted JSON responses in a browser tab.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 01/04/2023
---
# View formatted JSON

Use the **JSON viewer** to automatically format and highlight JSON responses and files in browser tabs.

When your web server responds to HTTP requests with data encoded as JSON, this data isn't always easy to read and is sometimes returned as one line of text. The **JSON viewer** changes the returned data to make it easier to read. The JSON syntax is highlighted with different colors, object properties are displayed on their own lines and indented, and objects can be collapsed or expanded.

The **JSON viewer** tool is included in Microsoft Edge starting with version 110.


<!-- ====================================================================== -->
## View formatted JSON server responses

To view a formatted JSON response from a web server:

1. Open a new tab or window in Microsoft Edge.

1. Type a URL that returns JSON data in the address bar. For example, use [this sample JSON response](https://microsoftedge.github.io/Demos/json-dummy-data/411k-min.json).

1. Microsoft Edge detects that the returned data is JSON and formats it automatically.

   ![JSON data returned by a web server, formatted and syntax-highlighted by the JSON viewer](./images/json-response.png)


<!-- ====================================================================== -->
## View formatted JSON files

To view a formatted JSON file stored on your device:

1. Open a new tab or window in Microsoft Edge.

1. Press `Ctrl`+`O` on Windows and Linux, or `Cmd`+`O` on macOS and choose the JSON file you want to open.

1. Microsoft Edge detects that the file contains JSON and formats it automatically.

   ![JSON data stored in a local file, formatted and syntax-highlighted by the JSON viewer](./images/json-file.png)


<!-- ====================================================================== -->
## Detect invalid JSON data

JSON data can sometimes be invalid. For example, not adding double quotes around keys or leaving a trailing comma after the last key/value pair is invalid in JSON.

The **JSON viewer** applies syntax highlighting to invalid JSON, but does not format the content and you can't collapse or expand objects.

You can find information about the invalid syntax in the **Console** tool, where the **JSON viewer** reports errors.

As seen below, invalid JSON responses are shown unformatted but highlighted, and an error is printed in the **Console** to help diagnose the syntax error:

![Highlighted JSON content, in a browser tab, with DevTools opened on the side, showing a JavaScript error indicating where the JSON syntax error is located](./images/invalid-json.png)
