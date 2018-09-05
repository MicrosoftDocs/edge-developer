---
description: Use the Console for interactive debugging and adhoc testing
title: Microsoft Edge DevTools - Console
author: erikadoyle
ms.author: edoyle
ms.date: 05/04/2018
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, console
---

# Console

To open the **Console** developer tool in Microsoft Edge, press the F12 key (or right-click and select "Inspect Element"), to access the developer tool window, then navigate to the Console tab at the top of the window. The Console tool logs information associated with a web page, such as JavaScript, network requests, and security errors. It can be used for interactive debugging and adhoc testing. It also allows you to communicate into and out of a running web page by:

 - Posting standard [error and status codes](./console/error-and-status-codes.md) and informational messages as your code runs
 - Generating custom debug logs from the [Console API](./console/console-api.md) calls you include in your code
 - Providing a [command line](./console/command-line.md) and interactive tree view for inspecting current return values of key variables and functions

![The Microsoft Edge DevTools console](./media/console.png)

1. The **Errors** / **Warnings** / **Info** / **Logs** buttons filter console output by the specified type. You can multi-select them by holding down the `Ctrl` key. The **All** button clears all filters.

2. The **Clear** button (`Ctrl+L`) clears the current console display.

3. Ticking the **Preserve Log** checkbox will persist your console output across page refreshes and closing / reopening DevTools. Console history will only clear when the tab is closed or you manually clear the Console.

4. Use the **Target** dropdown selector to switch to a different execution context, such as an `<iframe>` in your page or a running extension. By default, the top-level frame of your page is selected. Hovering over a selected frame will display a tooltip with the full URL for that resource.

5. In addition to the Console panel, you can use the console from the bottom of any other DevTools panel by pressing the **Show / Hide Console** button (`Ctrl+` &grave; ). The button has no effect when the DevTools are open to the Console panel.
	
6. You can also **Filter logs** (`Ctrl+F`) with a specific text string in the searchbox.

7. Clicking on any blue source links will open the DevTools **Debugger** to that particular line of code for further inspection.

## Shortcuts

Action                                            | Shortcut               
:-------------------------------------------------| :----------------------
Launch DevTools with Console in focus             | `Ctrl` + `Shift` + `J` 
Switch to Console                                 | `Ctrl` + `2`           
Show/Hide Console from another DevTools tab       | `Ctrl` + &grave; (backtick)  
Execute (single line command)                     | `Enter`                
Line-break without executing (multi-line command) | `Shift` + `Enter` or `Ctrl` + `Enter`      
Clear the Console of all messages                 | `Ctrl` + `L`           
Filter logs (set focus to search box)             | `Ctrl` + `F`           
Accept auto-completion suggestion (when in focus) | `Enter` or `Tab`       
Previous/Next auto-completion suggestion          | up / down arrow keys   

