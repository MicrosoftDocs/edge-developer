---
title: Opening a browser instance in the extension
description: Opening a browser instance in the Microsoft Edge Developer Tools extension for Visual Studio Code.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 09/14/2022
---
# Opening a browser instance in the extension

To view your rendered webpage while developing it, there are several ways to open and view your webpage in an instance of the Microsoft Edge browser, along with opening the **Edge DevTools** tab in Visual Studio Code.

As a separate Microsoft Edge window:

![Separate Microsoft Edge window](./opening-browser-instance-images/browser-window.png)

As an embedded browser instance in Visual Studio Code:

![Embedded browser instance in Visual Studio Code](./opening-browser-instance-images/embedded-browser.png)

<!-- todo: link to each of 3 sections.  check topmost nav table.
put the 3 links in order of long article
How specifically do you do each of these approaches?  How do these 3 approaches relate to the long article's sections?
https://docs.microsoft.com/en-us/microsoft-edge/visual-studio-code/microsoft-edge-devtools-extension
-->

*  Approach 1: Launch Microsoft Edge in a new window (not in the Visual Studio Code window), and go to your web application.  Listed first here because most familiar.

*  Approach 2: Open a new instance of Microsoft Edge inside Visual Studio Code, as a tab (pane).
   *  This starts a new browser instance in the **Edge DevTools: Browser** tab and pane inside Visual Studio Code, displaying your rendered webpage that's specified in `launch.json`.
   *  This approach also opens the **Edge DevTools** tab (pane) within Visual Studio Code, showing information for your specified file, such as `C:\Users\myusername\Documents\GitHub\Demos\demo-to-do\index.html`.  See [Opening a browser instance in the extension](./opening-browser-instance.md).

* Approach 3: In the debugger, attach to a running instance of Microsoft Edge.  See [Opening the browser as part of a debugging session](#opening-the-browser-as-part-of-a-debugging-session), below.
<!-- https://docs.microsoft.com/en-us/microsoft-edge/visual-studio-code/microsoft-edge-devtools-extension#opening-the-browser-as-part-of-a-debugging-session -->

*  Approach 4: Headless, which means _xyz_.


<!-- ====================================================================== -->
## Approach 3: By right-clicking an HTML file in the Explorer

In the **Explorer** of Visual Studio Code, right-click an HTML file, select **Open with Edge**, and then select **Open Browser** or **Open Browser with DevTools**:
    
![Right-click an HTML file in the Explorer to open it with Edge with or without DevTools](../microsoft-edge-devtools-extension-images/context-menu-open-in-code.png)


<!-- ====================================================================== -->
## By clicking the Launch Instance button

As another way to open a browser instance:

1. Click the **Microsoft Edge Tools** icon in the **Activity Bar**.  This lets you launch an instance of Edge or generate a `launch.json` file to automate the debugging workflow:

![Microsoft Edge DevTools for Visual Studio Code extension](../microsoft-edge-devtools-extension-images/extension-icon.png)

1. Then click the **Launch Instance** button.  Both a browser preview window and the **Edge DevTools** tab open in Visual Studio Code:

![Select Launch Instance to open the browser in Visual Studio Code](../microsoft-edge-devtools-extension-images/devtools-extension-new-browser-instance.png)


<!-- ====================================================================== -->
## Opening the browser as part of a debugging session

Another way to open a browser instance is to open the browser as part of a debugging session.  See [Use the extension with the Visual Studio Code debugging workflow](./extension-debugging-workflow.md).

The extension opens a new browser as an embedded browser in Visual Studio Code, shown as the **Edge DevTools: Browser** tab (pane).  You can move this tab to anywhere within the editor area in the Visual Studio Code window.  You can use this tab side by side with your source code, or split the panes and place the browser preview below your code:

![Extension open in Visual Studio Code showing the browser preview below the source code and the DevTools to the right](../microsoft-edge-devtools-extension-images/browser-split-down.png)


<!-- ====================================================================== -->
## Opening an external browser window instead of headless mode

_headless mode_ means <!--todo-->xyz.  This is the default setting.  Screenshot tbd.

external browser window means<!--todo-->xyz.  Screenshot tbd.

Pros/cons of each way: ...<!--todo-->


#### External browser window

If you want to have an external Microsoft Edge browser window, including the complete UI for Microsoft Edge: go to **Settings**<!--todo--> for the extension by doing ABC.  Then clear the **Headless mode** checkbox. Close and reopen VS Code. Then when you launch a browser instance using the extension (in certain ways at least), an entire Microsoft Edge browser window will open.


#### Headless mode

If you want to have the **Edge DevTools: Browser** tab (pane) within Visual Studio Code, which is called _headless mode_, go to **Settings**, and then select the **Headless mode** checkbox.  This is the default setting.  Then when you launch a browser instance using the extension, the **Edge DevTools: Browser** tab (pane) will open within Visual Studio Code.

![Setting the extension to headless mode](../microsoft-edge-devtools-extension-images/settings-headless.png)
<!-- todo: new screenshot -->

Headless mode:

![Headless mode](../microsoft-edge-devtools-extension-images/headless.png)
<!-- todo: new screenshot -->


<!-- ====================================================================== -->
## See also

* [Microsoft Edge DevTools extension for Visual Studio Code](../microsoft-edge-devtools-extension.md)
