---
description: Use the Console for interactive debugging and adhoc testing
title: Microsoft Edge F12 DevTools - Console
author: erikadoyle
ms.author: edoyle
ms.date: 10/10/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, console
---

# Console

Use the F12 DevTools **Console** for interactive debugging and adhoc testing. It allows you to communicate into and out of a running web page by:

 - Posting standard [error and status codes](./console/error-and-status-codes.md) and informational messages as your code runs
 - Generating custom debug logs from the [Console API](./console/console-api.md) calls you include in your code
 - Providing a [command line](./console/command-line.md) and interactive tree view for inspecting current return values of key variables and functions

![The Microsoft Edge F12 DevTools console](./media/console.png)

1. The **Errors** / **Warnings** / **Info** / **Logs** buttons filter console output by the specified type. You can multi-select them by holding down the `Ctrl` key. The **All** button clears all filters.

2. The **Clear** button (`Ctrl+L`) clears the current console display.

3. Ticking the **Preserve Log** checkbox will persist your console output across page refreshes and closing / reopening F12 DevTools. Console history will only clear when the tab is closed or you manually clear the Console.

4. Use the **Target** dropdown selector to switch to a different execution context, such as an `<iframe>` in your page or a running extension. By default, the top-level frame of your page is selected. Hovering over a selected frame will display a tooltip with the full URL for that resource.

5. In addition to the Console panel, you can use the console from the bottom of any other F12 DevTools panel by pressing the **Show / Hide Console** button (`Ctrl+` ` ). The button has no effect when the DevTools are open to the Console panel.

6. You can also **Filter logs** (`Ctrl+F`) with a specific text string in the searchbox.

7. Clicking on any blue source links will open the F12 DevTools **Debugger** to that particular line of code for further inspection.

## Shortcuts

Action | Shortcut
:------------ | :-------------
Launch F12 DevTools with Console in focus | `CTRL` + `SHIFT` + `J`
Switch to Console | `CTRL` + `2`
Show/Hide Console from another F12 tab | `CTRL` + ` (backtick)
Execute (single line command) | `ENTER`
Line-break without executing (multi-line command) | `SHIFT` + `ENTER`
""  | `CTRL` + `ENTER`
Clear the Console of all messages | `CTRL` + `L`
Filter logs (set focus to search box) | `CTRL` + `F` 
Accept auto-completion suggestion (when in focus) | `ENTER`
"" | `TAB`
Previous / Next auto-completion suggestion | up / down arrow keys
