---
title: Get started using the DevTools extension for Visual Studio Code
description: Step-by-step tutorial about opening and closing DevTools and using it to modify CSS and debug JavaScript.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 10/06/2022
---
# Get started using the DevTools extension for Visual Studio Code

<!-- reviewer comment, make sure integrated:
The difference between the right-click>Open with Edge and the launch.json approaches is key, and right now is still a bit hard to grasp. There should probably be a very straightforward way to understand, right from the start, that the extension works in those 2 different ways. One is for simple local development, without a web server, and the other one is for more involved/advanced debugging use cases.
-->

This is a step-by-step tutorial about opening and closing DevTools and using it to modify CSS and debug JavaScript.  Follow the steps here from top to bottom for a general introduction and to ensure that your machine is set up to use DevTools.


<!-- ====================================================================== -->
## Step 1: Install DevTools and prerequisites

1. Do the steps in [Installing the DevTools extension for Visual Studio Code](./install.md), and then continue below.


<!-- ====================================================================== -->
## Step 2: Start DevTools by clicking the Launch Instance button

This approach opens the DevTools tabs in non-debug mode and is useful when you don't want to use the Debug features of Visual Studio Code.

Clicking the **Launch Instance** button doesn't go directly to your file; you have to paste a file path or URL.  This approach is prominent in the UI, and you need to know how to close instances of DevTools that have been opened this way.

1. In Visual Studio, select **File** > **Open Folder**.  Open the `\Demos\demo-to-do\` folder of the Demos repo that you cloned, such as `C:\Users\myusername\Documents\GitHub\Demos\demo-to-do\`.

1. In Activity Bar, click **Microsoft Edge Tools** (![Microsoft Edge Tools icon](./get-started-images/microsoft-edge-tools-icon.png)).  The **Microsoft Edge Tools** pane opens.

1. Click the **Launch Instance** button.  The **Edge DevTools** tab opens, and the **Edge DevTools: Browser** tab opens, displaying the default, Success page by using a file path (not a localhost URL), such as `file:///C:/Users/myusername/.vscode/extensions/ms-edgedevtools.vscode-edge-devtools-2.1.1/out/startpage/index.html`.

   The Debug toolbar doesn't open, **Debug Console** doesn't open at bottom, and the **Run and Debug** Side Bar with **Watch** pane doesn't open.  This indicates that Visual Studio Code is not in Debug mode.  In this state or mode, you can modify CSS of the local files, and you can enter local file paths or localhost URLs in the address bar and interact with local web app pages.

1. Activity Bar > **Explorer** > right-click `\demo-to-do\index.html` > **Copy Path**.

1. In Visual Studio, in the **Edge DevTools: Browser** tab, in the address bar, paste the local filepath that you obtained above, such as ``C:\Users\myusername\Documents\GitHub\Demos\demo-to-do\index.html`.  Or, if your localhost server is running, paste a localhost URL, such as [http://localhost:8080/](http://localhost:8080/) or [http://localhost/demos/demo-to-do/](http://localhost/demos/demo-to-do/).  The Demo To Do app opens.

1. In the demo app, enter a task, such as **test**.

1. In the **Elements** tool, in the **Styles** tab, change a CSS value, such as: click the point size in `body { font-size: 11pt;}` and then change the value.  The corresponding `.css` file in the folder that you opened opens and it is automatically edited to match your changes made in the **Styles** tab (but is not saved).

   ![Launch Instance > filepath > non-debug mode](./get-started-images/launch-instance-filepath-non-debug-mode.png)

   **Close DevTools:**

1. In the **Edge DevTools** tab, click **Close** (**x**).

1. In the **Edge DevTools: Browser** tab, click **Close** (**x**).

   The DevTools instance from clicking **Launch Instance** remains running.

1. In Activity Bar > **Microsoft Edge Tools** > **Targets**, hover to the right of the target instance, and then click **Close instance** (**x**).  The **Launch Instance** button now appears, indicating that the DevTools instances are closed.

1. When Visual Studio prompts you to save changes, click the **Don't Save** button.


<!-- ====================================================================== -->
## Step 3: Start DevTools by right-clicking an HTML file

<!-- the equivalent section in Opening is more general than this section, which uses Demos repo -->

Right-clicking an HTML file in Visual Studio Code's **Explorer** is the main way to open DevTools when your webpage doesn't require running on a web server.  We'll demonstrate by opening the Demo To Do web app.

1. In Visual Studio Code, select **File** > **Open Folder**.

1. Go to the directory where you cloned the Demos repo, open the specific directory for the Demo To Do app, such as `C:\Users\myusername\Documents\GitHub\Demos\demo-to-do\`, and then click the **Select Folder** button:

   ![Open Folder: demo to do](./get-started-images/open-folder-demo-todo.png)

1. Select **Activity Bar** > **Explorer** (![Explorer icon](./get-started-images/explorer-icon.png)) > right-click `index.html` and then select **Open with Edge** > **Open Browser with DevTools**:

   ![Right-click > Open Browser with DevTools](./get-started-images/open-browser-with-devtools.png)

   *  The **Edge DevTools** tab opens.

   *  The **Edge DevTools: Browser** tab opens, displaying the webpage you right-clicked.

   *  The Debug toolbar of Visual Studio Code opens, the **Debug Console** opens at the bottom, and the **Run** pane opens.  These features indicate that Visual Studio Code is in Debug mode:

   ![The two Edge DevTools tabs and the Debug toolbar](./get-started-images/devtools-extension-v211.png)

   **Layout of the DevTools tabs:**

1. Toward the upper left corner of the **Edge DevTools** tab, click the **Toggle screencast** button a couple times:

   ![Cross-toggling the two tabs on and off](./get-started-images/cross-toggling-tabs.png)

1. In the top right of the **Edge DevTools: Browser** tab, click the **Close DevTools** or **Open DevTools** button a couple times.  The two DevTools tabs are automatically positioned as you open and close them from each other.


<!-- ====================================================================== -->
## Step 4: Edit CSS in DevTools, updating the .css file automatically

In the **Edge DevTools** tab, in the **Elements** tool > **Styles** tab, you can edit CSS selectors, rules, and values.  The **CSS mirror editing** checkbox is selected by default, so the `.css` file is automatically edited, but the edits are not saved, so that you can decide whether to save the changes.

1. In the **Elements** tool, in the **Styles** tab, click a CSS value, such as the body font size.

1. Change the CSS value, such as using mouse wheel or pressing `Up Arrow` and `Down Arrow`.  The associated `.css` file opens, such as `to-do-styles.css` and scrolls to the line that defines the CSS value, and automatically edits the `.css` file but doesn't save changes:

   ![CSS mirror editing](./get-started-images/css-mirror.png)

1. Close the `.css` file.  Visual Studio Code prompts you whether to save changes.

1. Click the **Don't Save** button.


<!-- ====================================================================== -->
## Step 5: Step through JavaScript code in the Debugger

1. Select Activity Bar > Explorer (![Explorer icon in Activity Bar](./get-started-images/explorer-icon.png)).

1. In the **demo-to-do** directory, click **to-do.js** to open it.  Scroll down to the `changeTask` function and then click to the left of a line number to set a breakpoint:

   ![Debugging the demo app](./get-started-images/debugging-the-demo-app.png)

1. If the **Run and Debug** Side Bar isn't displayed, select **View** > **Run**.  The **Run and Debug** Side Bar includes the **Watch** pane and other debugger panes.

1. In the demo app rendered in the **Edge DevTools: Browser** tab, enter a task, such as **test**.  The debugger of Visual Studio Code pauses at the breakpoint in the `to-do.js` file:

   ![Stepping through JavaScript in the demo app](./get-started-images/debugging-the-demo-app.png)

1. In the Debug toolbar, or using the **Run** menu or by pressing keys, step through a couple lines of code in `to-do.js`.

1. In the demo app rendered in the **Edge DevTools: Browser** tab, click the "done" circle next to the test task.  The debugger of Visual Studio Code pauses at the breakpoint in the `to-do.js` file.

1. Next, to end debugging, in the Debug toolbar, click the **Stop** (`Shift`+`F5`) button.  Or, on the **Run** menu, select **Stop Debugging**:

   ![The Stop button in the Debug toolbar](./get-started-images/stop-button-debug-toolbar.png)

   The **Edge DevTools** tab closes, and the **Edge DevTools: Browser** tab closes.

Continue the tutorial steps below.


<!-- ====================================================================== -->
## Step 6: Start DevTools by clicking the Launch Project button

Next, we'll use the Demo Todo app to demonstrate the **Launch Project** button after pointing that button to a localhost URL such as [http://localhost:8080/](http://localhost:8080/) or [http://localhost/demos/demo-to-do/](http://localhost/demos/demo-to-do/).  As before, this starts DevTools in debug mode.  This is the main way to open DevTools when your webpage requires running on a web server.  As a preliminary step, we'll creating a `launch.json` file and edit the URL in it to point to localhost serving out the Demo Todo example.

You might not need to use this approach.  In many cases, right-clicking an HTML file works, for many APIs.  Many webpages require this approach, so here are specific steps you can follow.


<!-- ====================================================================== -->
## Step 7: Start the web server

This section is in support of clicking the **Launch Project** button.

1. Set up and start a web server, serving out the demo-to-do app from the Demos repo.  To do this, see [Step 6: Set up a localhost server by using npx http-server](./install.md#step-6-set-up-a-localhost-server-by-using-npx-http-server) in _Installing the DevTools extension for Visual Studio Code_.  The present section is similar but more specifically focused on the Demo To Do app.

1. In Visual Studio Code, select **View** > **Terminal**.

1. `cd` into the the specific folder you want to serve via http, `Demos\demo-to-do\`:

   For example, on Windows:

   ```
   cd C:\Users\myusername\Documents\GitHub\Demos\demo-to-do\
   ```

1. Enter the command `npx http-server`.  A local webserver starts on port 8080.

   ```
   npx http-server
   ```
   
   Information about the server and localhost URL is displayed, such as:

   ```
   Starting up http-server, serving ./
   
   Available on:
   http://10.0.1.8:8080
   http://127.0.0.1:8080
   Hit CTRL-C to stop the server
   ```

   The displayed URLs are equivalent to `http://localhost` or `http://localhost:8080`
   <!-- http://localhost/demos/demo-to-do/ -->


<!-- ====================================================================== -->
## Step 8: Set up launch.json

This section is in support of clicking the **Launch Project** button.

   1. In Visual Studio, select **File** > **Open Folder**.  Select your project directory that contains `index.html` for the cloned demo-to-do sample in the Demos repo, such as `C:\Users\myusername\Documents\GitHub\Demos\demo-to-do\`.
   
   1. In the Activity Bar, click **Microsoft Edge Tools** (![Microsoft Edge Tools icon](./get-started-images/microsoft-edge-tools-icon.png)).  The **Microsoft Edge Tools** pane opens.

   1. Click the **Generate launch.json** button:

   ![The 'Generate launch.json' button of the DevTools extension](./get-started-images/launch-instance-button.png)

   The new `launch.json` file opens.

1. In several places in the `launch.json` file, on each of the `"url"` lines, scroll to the right , and note the comment, "Provide your project's url":

   ```js
   "url": "c:\\Users\\username\\.vscode\\extensions\\ms-edgedevtools.vscode-edge-devtools-2.1.1\\out\\startpage\\index.html", 
   // Provide your project's url to finish configuring
   ```

1. In a web browser, go to the `http://localhost/` URL where the demo-to-do `.html` file is on the server, such as [http://localhost/demos/demo-to-do/](http://localhost/demos/demo-to-do/).

1. Copy the URL from the address bar.

1. In `launch.json`, in each URL string, paste the URL for your cloned copy of the Demo To Do app, such as: `http://localhost/demos/demo-to-do/`

1. Paste the path inside the quoted path string in one of the `"url"` strings.  For example:

   ```js
   "url": "http://localhost/demo-to-do/", // Provide your project's url to finish configuring
   ```

1. Copy and paste the modified URL line to the other places in the `launch.json` file.  To modify all instances at the same time, you can copy an updated URL string, then select an instance of the initial URL string, press `Ctrl`+`Shift`+`L` to select all instances, and then paste the updated string.

1. Save the `launch.json` file.


<!-- ====================================================================== -->
## Step 9: Click the Launch Project button

1. In Visual Studio Code, in the Activity Bar, click the **Microsoft Edge Tools** (![Microsoft Edge Tools icon](./get-started-images/microsoft-edge-tools-icon.png)) button.  The **Microsoft Edge Tools** pane opens, now containing a **Launch Project** button but not a **Generate launch.json file** button:

   ![Targets pane when a launch.json file exists](./get-started-images/targets-pane-when-launch-json-exists.png)

1. Click the **Launch Project** button.

   The **Edge DevTools** tab and the **Edge DevTools: Browser** tab open in separate panes, showing the Demo To Do web app:

   ![The Demo To Do web app running in the Edge DevTools: Browser tab](./get-started-images/demo-app-running-in-extension-browser.png)

At this point, you could work with CSS edits or step through code in the debugger, as described above for the section [Start DevTools in debug mode by right-clicking an HTML file](#step-3-start-devtools-in-debug-mode-by-right-clicking-an-html-file).


<!-- ====================================================================== -->
## Step 10: Close DevTools

1. Next, to end debugging, in the Debug toolbar, click the **Stop** (`Shift`+`F5`) button:

   ![The Stop button in the Debug toolbar](./get-started-images/stop-button-debug-toolbar.png)

   Or, on the **Run** menu, select **Stop Debugging**.  Or, close the two DevTools tabs.  The Debug toolbar closes.


<!-- ====================================================================== -->
## See also

* [Demo To Do](https://microsoftedge.github.io/Demos/demo-to-do/) - the demo web app running on the `github.io` server.
* [Source code for Demo To Do](https://github.com/MicrosoftEdge/Demos/tree/main/demo-to-do) - the **MicrosoftEdge/Demos** GitHub repo, containing `demo-to-do` and other demos.
* [Microsoft Edge DevTools extension for Visual Studio Code](../microsoft-edge-devtools-extension.md)
