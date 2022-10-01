---
title: Get started with the DevTools extension for Visual Studio Code
description: Installing the Microsoft Edge Developer Tools extension for Visual Studio Code and starting it, closing it, debugging JavaScript, and modifying CSS.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 09/30/2022
---
# Get started with the DevTools extension for Visual Studio Code

This extension lets you use many of the same tools that are in the DevTools that's in the Microsoft Edge browser, but instead, use them within the environment and context of the Microsoft Visual Studio Code IDE (integrated development environment).

This article walks you through initial setup and using the extension by cloning, loading, and modifying the **Demo To Do** sample web app from the **MicrosoftEdge/Demos** GitHub repo.

This article helps you:

* Install the DevTools extension.

* Compare using DevTools in the Microsoft Edge browser window versus in the Visual Studio Code IDE environment, by using the existing demo-to-do web app.

* Decide when to use this extension in Visual Studio Code and when to use DevTools in the Microsoft Edge browser.

* Clone the Demos repo, which includes the demo-to-do web app.

* Use the DevTools extension for Visual Studio Code to set a breakpoint and step through the JavaScript code of the demo-to-do app.

* From within Visual Studio Code, open the Microsoft Edge browser several different ways.


<!-- ====================================================================== -->
## Step 1: Install Visual Studio Code

1. If not done already, in a separate window or tab, go to [Download Visual Studio Code](https://code.visualstudio.com/Download) and download and install Visual Studio Code.

1. Open Visual Studio Code.


<!-- ====================================================================== -->
## Step 2: Install the Microsoft Edge DevTools extension

1. [Download Visual Studio Code](https://code.visualstudio.com/Download).

1. In Visual Studio Code, in the Activity Bar on the left, click the **Extensions** (![Extensions icon](./get-started-images/extensions-icon.png)) button.

1. In the **Search Extensions in Marketplace** text box, enter **Microsoft Edge Tools for VS Code**.

1. Select the **Microsoft Edge Tools for VS Code**, and then click the **Install** button:

   ![Installing the Microsoft Edge DevTools extension for Visual Studio Code](./get-started-images/vscode-edge-tools-install.png)

1. Install Node.js and npm, to get live Issues analysis.  See [Step 3: Install Node.js and Node Package Manager (npm)](./get-started.md#step-3-install-nodejs-and-node-package-manager-npm).


#### TODO: merge into above.

Install the Microsoft Edge DevTools extension for Visual Studio Code, as follows:

1. In Visual Studio Code, in the Activity Bar on the left, click the **Extensions** (![Extensions icon](./get-started-images/extensions-icon.png)) button.  Or, press `Ctrl`+`Shift`+`X` on Windows/Linux or `Command`+`Shift`+`X` on macOS.  The **Extensions** Marketplace pane opens.

1. In the **Search Extensions in Marketplace** text box, enter **Microsoft Edge Tools for VS Code**.

1. Select **Microsoft Edge Tools for VS Code**, and then click the **Install** button:

   ![Installing the Microsoft Edge DevTools extension for Visual Studio Code](./get-started-images/vscode-edge-tools-install.png)

   Or, you can use the browser to download the Microsoft Edge DevTools extension from the Visual Studio Marketplace website.  Go to [Microsoft Edge Developer Tools for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools).


<!-- ====================================================================== -->
## Step 3: Install Node.js and Node Package Manager (npm)

To get live (realtime) analysis of your code to indicate issues, such as with wavy underlines, and to offer Quick Fixes, you must install Node.js and Node Package Manager (npm).

The DevTools extension shows a popup suggestion to install Node.js and npm.  The suggestion text is similar to: "Install Node.js & npm? (suggested because you installed this extension)".

1. Click the link in the popup, if it opens.

1. Install Node.js and npm from [Node.js](https://nodejs.org) > Downloads > LTS (long-term stable) (or, Current).

   On Windows, the .msi file is downloaded, such as `node-v16.17.1-x64.msi`.

1. In the browser's Downloads pane, Click **Show in folder**.  Run the downloaded file.  The Node.js Setup Wizard opens.  Click the **Next** button.  Follow the prompts.  

   Confirm that Node.js and npm are installed:

1. In Visual Studio Code, select **View** > **Terminal**.  At the command prompt, enter `npm version`.  A version number is displayed for `npm` and for `node`, indicating that Node Package Manager and Node.js are installed, to support inline and live issue analysis:

   ```
   $ npm version
   {
   npm: '8.15.0',
   node: '16.17.1',
   ...
   }
   ```

See also:
* [Inline and live issue analysis](./inline-live-issue-analysis.md)


<!-- ====================================================================== -->
## Step 4: Optional: Clone the Microsoft Edge Demos repo

This step is optional.  If you want, instead of cloning the repo, you can open an existing project directory if you have one: in the **Explorer** pane of Visual Studio Code, right-click a `.html` file, and then select **Open with Edge** > **Open Browser with DevTools**.  Then skip to [Step 4: Optional: Compare and contrast DevTools in the browser vs. in the extension](#step-4-optional-compare-and-contrast-devtools-in-the-browser-vs-in-the-extension).

To clone the **Demos** repo to use the **demo-to-do** sample for this tutorial:

1. Go to [MicrosoftEdge/Demos repo](https://github.com/MicrosoftEdge/Demos/).

1. If the green **Code** button isn't shown, click **Demos** in the path **Microsoft Edge** / **Demos** in the upper left to go to the main page of the repo.

1. Click the green **Code** button, and then select the **Copy** button.  This article assumes you're using the **Source Control** features within Visual Studio Code.  Or, you can use one of the other methods that are provided, if you know that you want to use that approach instead:
   *  **Open with GitHub Desktop**
   *  **Open with Visual Studio**
   *  **Download ZIP**

   ![Cloning the MicrosoftEdge/Demos repo](./get-started-images/clone-repo.png)

1. In Visual Studio Code, in the Activity Bar, click the **Source Control** (![Source Control icon](./get-started-images/source-control-icon.png)) button, and then click the **Clone Repository** button.

1. In the **Provide repository URL** text box, paste the copied URL: **https://github.com/MicrosoftEdge/Demos.git** and then press `Enter`.  A folder selection dialog opens.

   ![The Clone Repository button in Visual Studio Code](./get-started-images/clone-repository-button.png)

1. Navigate to your desired path, such as `C:\Users\myusername\Documents\GitHub` or `Users/myusername/GitHub`, and then click the **Select Repository Location** button.

1. The message **Cloning git repository** appears, then you're prompted to open the cloned repository.  Click the **Open** button:

   ![Prompted to open the cloned repo](./get-started-images/prompt-open-cloned-repo.png)

1. If prompted **Do you trust...**, click the **Yes** button.  Or, click the **No** button and continue with most parts of this walkthrough.

   The **Explorer** tree lists many demos, including **demo-to-do**.

1. In Visual Studio, select **File** > **Close Folder**.

1. In Visual Studio Code, in the Activity Bar, click the **Microsoft Edge Tools** (![Microsoft Edge Tools icon](./get-started-images/microsoft-edge-tools-icon.png)) button.  The **Microsoft Edge Tools** pane opens.

1. In the **Microsoft Edge Tools** > **Targets** pane, click the **Open Folder** button.  The **Open Folder** dialog box opens.  Navigate to the `demo-to-do` folder in the Demo repo that you cloned, select the folder or go into it, and then click the **Select Folder** button:

   ![Selecting the demo-to-do folder](./get-started-images/select-demo-to-do-folder.png)

   An example of a repo location where the **Demos** repo has been cloned is shown above.  The `demo-to-do` folder of the cloned **Demos** repo opens in the Explorer of Visual Studio Code, and no `launch.json` file exists yet:

   ![Opened the demo-to-do folder initially](./get-started-images/opened-demo-to-do-folder-initially.png)


<!-- ====================================================================== -->
## Step 5: Set up a localhost server

<!-- You can use Node.js if installed above, to act as the web server. -->

Optionally, set up or enable a local web server for testing.  If you don't do this, you will be able to launch DevTools and the DevTools: Browser in VS Code, with debugging ability, by right-clicking a local .html file but not by entering a URL.  These instructions are for IIS on Windows; use equivalent steps for your environment.

1. In Windows, select **Start** > **Control Panel**:

   ![Control Panel initial page](./get-started-images/control-panel-initial-page.png)

1. Click **Turn Windows features on or off**:

   ![Turn Windows features on or off](./get-started-images/turn-win-features-on-off.png)

1. Select the **Internet Information Services** (IIS) checkbox, and then click the **OK** button:

   ![IIS checkbox in Windows Features dialog](./get-started-images/iis-checkbox-windows-features.png)

   Windows applies the changes.

1. Click the **Close** button to close the **Windows Features** dialog.

1. In a web browser, go to **http://localhost**.

1. Optionally, click in the page to go to [Microsoft IIS.net](https://www.iis.net) for information about using IIS.  For example, see [Getting Started with the IIS Manager in IIS](https://learn.microsoft.com/en-us/iis/get-started/getting-started-with-iis/getting-started-with-the-iis-manager-in-iis-7-and-iis-8).

* [Add a Web Site](https://learn.microsoft.com/en-us/iis/get-started/getting-started-with-iis/create-a-web-site#add-a-web-site) in _Create a Web Site_ in the IIS docs.

1. Select **Start** > type **iis** > select **Internet Information Services (IIS) Manager** > **Open**:

   ![Starting IIS Manager](./get-started-images/iis-manager-starting.png)

1. Click the **Explore** link in the upper right:

   ![The Explore link in IIS Manager](./get-started-images/explore-in-iis-manager.png)

   File Explorer opens, to a location such as `C:\inetpub\wwwroot`.

1. Copy the demo-to-dir directory from the Demos repo into that directory:

   ![Demo files copied to server directory](./get-started-images/demo-copied-to-server-dir.png)

1. In a web browser, go to [http://localhost/demo-to-do/](http://localhost/demo-to-do/), or the equivalent location matching where you placed the `.html` file that you want to load later in the DevTools extension:

   ![demo-to-do page served from localhost](./get-started-images/demo-to-do-page-from-localhost.png)


<!-- ====================================================================== -->
## Step 6: Optional: Compare and contrast DevTools in the browser vs. in the extension

To get some context, before using the Edge DevTools extension in Visual Studio Code, explore the Demo To Do web app and in-browser DevTools debugger, as follows:

1. In Visual Studio Code, in the **Explorer** tree, expand the **demo-to-do** directory, and then click the `README.md` file:

   ![Readme file](./get-started-images/readme.png)

1. `Ctrl+click` the **Open the demo** link (`https://microsoftedge.github.io/Demos/demo-to-do/`), and then press `Alt`+`Tab` (Windows, Linux) or `Cmd`+`Tab` (macOS) to switch to the browser running the Demo To Do app.  This running demo is served out from the github.io server.

1. Click in the **Add a task** field and then enter a task, such as **Buy milk**, then press `Enter` or click the entry button in the webpage:

   ![Using the demo-to-do app in the browser](./get-started-images/demo-to-do-initial-in-browser.png)

1. Click the **Complete task** button to put a checkmark next to a task, such as **Buy milk**.

1. Click the **Delete task** button to remove a task, such as **Buy milk**.

1. Right-click the webpage and then select **Inspect**.  DevTools opens in the browser.  Click the **Sources** tab (or the **More tabs** button and then **Sources**).   In the **Page** tab within the **Sources** tool, click `to-do.js`.  The JavaScript file opens.
<!-- todo: screenshot -->

1. Scroll down to the `addTask` function and then in the first line in the function, click to the left of the line number to set a breakpoint.
<!-- todo: screenshot -->

1. In the webpage, enter a task, such as **Buy milk**, and then press `Enter`.  The in-browser DevTools debugger pauses on the breakpoint that you set, and displays values for variables that are in the current scope:

   ![Debugging in Microsoft Edge DevTools Sources tool](./get-started-images/devtools-sources-tool-browser.png)

1. Refresh the page to reset the debugger.

Next, to get additional debugging functionality,<!-- todo: eg, list --> and to use the rich environment of Visual Studio Code, we'll use the debugger of Visual Studio Code, while using the Microsoft Edge DevTools extension for Visual Studio Code, specifically the **Edge DevTools: Browser** tab and the **Elements** tool in the **Edge DevTools** tab.


<!-- ====================================================================== -->
## Step 7: View the Success page and the tools

At first, we won't create a `launch.json` file and which will load demo to do in the embedded browser.  We'll just explore the extension's DevTools UI in Visual Studio Code by using the default, **Success** webpage.

1. In Visual Studio Code, in the Activity Bar, click the **Microsoft Edge Tools** (![Microsoft Edge Tools icon](./get-started-images/microsoft-edge-tools-icon.png)) button.  The **Microsoft Edge Tools** pane opens.

   ![Launch Instance button of the DevTools extension](./get-started-images/launch-instance-button.png)

1. Click the **Launch Instance** button.  This starts the debugger of Visual Studio Code.  Several UI areas open:

   *  The **Edge DevTools** tab (pane) opens.  You can move this tab.
   *  The **Edge DevTools: Browser** tab (pane) opens, displaying the default, **Success** webpage (not the Demo To Do web app yet).  You can move this tab.
   *  The Debug toolbar.  You can drag this toolbar to move it.  Sometimes debug launch configurations are listed in the Debug toolbar.
   *  When not headless mode, Microsoft Edge browser window opens, in addition to the **Edge DevTools: Browser** tab (pane) in Visual Studio Code.  We're not using headless mode here.
   *  In the **Debug Console**, output text is displayed: **Hello from the startpage!**  That string is defined in the `<script>` section in the startpage `index.html` file such as (on Windows): `file:///C:/Users/myusername/.vscode/extensions/ms-edgedevtools.vscode-edge-devtools-2.1.1/out/startpage/index.html`, by the JavaScript statement `console.info('Hello from the startpage!')`, which you can get to quickly by clicking the line number link in the Debug Console.

   ![DevTools extension initial view](./get-started-images/devtools-extension-initial-view.png)

1. In the **Edge DevTools** tab in the middle, to the right of the **Elements** tab, click the **More tabs** (**>>**) button to see which other tool tabs are already opened, such as **Console**, **Network**, and **Application**.

1. To the right of the **More tabs** (**>>**) button, click the **More Tools** (**+**) button, to see what additional tools are available, such as **Issues**, **Network conditions**, and **Network request blocking**.

1. To the left of the **More tabs** (**>>**) button, click the **Inspect** button, and then hover over parts of the rendered webpage on the right, to see layout information.  Click the rendered webpage, to go to the selected element in the **Elements** tool.

1. In the the **Edge DevTools: Browser** tab, at the bottom, click the **Emulate devices** dropdown list, and then select a couple different devices.  Then select **Responsive**, at the top of the list, to restore the original view.

Next, we'll create a `launch.json` file that points to the specific webpage for the demo-to-do app.


<!-- ====================================================================== -->
## Step 8: Close Microsoft Edge Tools and the running browser instance

1. In the **Microsoft Edge Tools** pane on the left, in the **Targets** section, hover on the right side of the listed Target (`index.html`) and then click **Close instance** (**x**).  The Microsoft Edge DevTools panes close.



<!-- ====================================================================== -->
## Step 9: Open DevTools by right-clicking an .html file

This is the simple scenario; try this approach first.

1. In Visual Studio Code, open a folder.

1. Right-click an `.html` file, such as `index.html`, and then select **Open with Edge** > **Open Browser with DevTools**.  The following components open:
   *  The **Edge DevTools** tab.
   *  The **Edge DevTools: Browser** tab, displaying the Success page, by default.
   *  The Debug toolbar.

   ![The two Edge DevTools tabs and the Debug toolbar](./get-started-images/devtools-extension-v211.png)

To try this by using the **demo-to-do** sample app, see [Step 3: Clone the Microsoft Edge Demos repo](./get-started.md#step-3-clone-the-microsoft-edge-demos-repo).


<!-- ====================================================================== -->
## Step 10: Edit CSS in DevTools, updating the .css file automatically

1. In the **Edge DevTools** tab, in the **Elements** tool > **Styles** tab, edit CSS selectors, rules, and values.

1. In some scenarios, when the **CSS Mirror Editing** checkbox is selected in the **Styles** tab (which is the default setting), editing CSS values in the **Styles** tab automatically edits your local hard drive `.css` source file - it doesn't save that file, though; you need to Save if you want to preserve the CSS changes.


<!-- ====================================================================== -->
## Step 11: Open DevTools for a URL using the Launch Instance button

This is the more flexible and advanced scenario; try this approach after you learn how to right-click an `.html` file as described above.

1. In Visual Studio Code, in the Activity Bar, click the Microsoft Edge Tools button.

1. Click the **Launch Instance** button.  The following components open:
   *  The **Edge DevTools** tab.
   *  The **Edge DevTools: Browser** tab, displaying the Success page, by default.

   When loading the default, **Success** page this way, the Debug toolbar doesn't open.

1. Copy a URL such as a `localhost:8080` path from an existing browser address bar.

   Or, in Visual Studio Code, in the Activity Bar, click the **Explorer** (![Explorer icon](./get-started-images/explorer-icon.png)) button.  In the **Explorer**, right-click an `.html` file, and then select **Copy path**.

1. In the **Edge DevTools: Browser** tab, paste the URL (or file path) into the address bar.

   To open the Debug toolbar: close the DevTools instance, then generate a `launch.json` file that starts a URL that uses a `.js` file, or that opens an `.html` file that uses a `.js` file, as described below.<!--todo: any other way to open Debug toolbar?  how load a URL that causes it to appear, starting from this state?-->


#### Creating a launch.json file

If you want to use the **Launch Instance** button instead of right-clicking an `.html` file, and you want to avoid having to paste the URL or file path to replace the default, **Success** page, you can optionally create a `launch.json` file.  The `launch.json` file is a convention used by Visual Studio Code to control debugging.

1. Click the **Generate launch.json** button.  In Visual Studio Code's **Explorer** pane, note where the `launch.json` file is placed.

1. In several places in the `launch.json` file, paste the URL (or an `.html` file path).  Because this is a JSON string and needs escaping, change each `/` to `//`, or `\` to `\\`.  Save the file.

   *  For a repo, such as the Demos repo, if you open the entire repo folder, the **Generate launch.json** button creates a `launch.json` file near the root, for the entire repo directory.

   *  If you open a particular, smaller folder, the **Generate launch.json** button puts a `launch.json` file in that folder only.

1. Click Activity Bar > **Microsoft Edge Tools** > **Launch Project** button.



#### TODO: merge into the above.

Launch the demo app by putting a localhost URL in launch.json

Instead of creating a launch.json file per the optional steps below, in the **Explorer** pane of Visual Studio Code, right-click a `.html` file, such as `Demos\demo-to-do\index.html`, and then select **Open with Edge** > **Open Browser with DevTools**.  Then skip to [Step 8: Use the debugger in Visual Studio Code](#step-8-use-the-debugger-in-visual-studio-code).

Or, use the following more complex and customizable approach (todo: probably remove these steps here):

1. In Visual Studio Code, in the Activity Bar, click the **Microsoft Edge Tools** (![Microsoft Edge Tools icon](./get-started-images/microsoft-edge-tools-icon.png)) button.  The **Microsoft Edge Tools** pane opens.

   ![The 'Generate launch.json' button of the DevTools extension](./get-started-images/launch-instance-button.png)

1. Click the **Generate launch.json** button.  The new `launch.json` file opens.

1. On each of the `"url"` lines, scroll to the right , and note the comment, "Provide your project's url":

   ```js
   "url": "c:\\Users\\username\\.vscode\\extensions\\ms-edgedevtools.vscode-edge-devtools-2.1.1\\out\\startpage\\index.html", 
   // Provide your project's url to finish configuring
   ```

   You don't need to run port 8080.  You can run the app from your local drive as-is.

1. In a web browser, go to `http://localhost/` where your `.html` file is on the server, such as **http://localhost/demo-to-do/**.

1. Copy the URL from the address bar.

1. In Visual Studio Code > Activity Bar > **Explorer**, click the **launch.json** file.

1. Paste the path inside the quoted path string in one of the `"url"` strings.  For example:

   ```js
   "url": "http://localhost/demo-to-do/", // Provide your project's url to finish configuring
   ```

1. Copy and paste the modified URL line to the other places in the `launch.json` file.  To modify all instances at the same time, you can copy an updated URL string, then select an instance of the initial URL string, press `Ctrl`+`Shift`+`L` to select all instances, and then paste the updated string.

1. Save the `launch.json` file.

1. In Visual Studio Code, in the Activity Bar, click the **Microsoft Edge Tools** (![Microsoft Edge Tools icon](./get-started-images/microsoft-edge-tools-icon.png)) button.  The **Microsoft Edge Tools** pane opens, now containing a **Launch Project** button but not a **Generate launch.json file** button:

   ![Targets pane when a launch.json file exists](./get-started-images/targets-pane-when-launch-json-exists.png)

1. Click the **Launch Project** button.

   If you get a dialog **Could not attach to main target** and **Error while fetching list of available targets No available targets to attach**:

   ![Could not attach to main target](./get-started-images/could-not-attach-main-target.png)

   Try again.  Make sure your `launch.json` file is saved.  Examine all instances of your revised string.


   The **Edge DevTools** tab and the **Edge DevTools: Browser** tab open in separate panes, showing the Demo To Do web app:

   ![The Demo To Do web app running in the Edge DevTools: Browser tab](./get-started-images/demo-app-running-in-extension-browser.png)

1. In the Activity Bar, click the **Explorer** button.  The Explorer tree opens.  In the **demo-to-do** directory, click **to-do.js** to open it.  Scroll down to the `add task` function and then click to the left of a line number to set a breakpoint.


<!-- ====================================================================== -->
## Step 12: Debug JavaScript

To use the Visual Studio Code debugger on your webpage's JavaScript file:

1. In Visual Studio Code, if you open a `.html` file from your hard drive (as described above), use Activity Bar > **Explorer** > open a `.js` file.

   If you opened a server URL, such as `https://localhost:8080` (as described above), select **Edge DevTools** tab > **Elements** tool > **Styles** tab > click a `.js` filename.  This opens a downloaded copy of a `.js` file, that was returned by a web server.

1. In the `.js` file, click to the left of a line number to set a breakpoint.  For example, in `Demos\demo-to-do\to-do.js`, set a breakpoint in the top of the `addTask` or `changeTask` function body.  (To get `to-do.js`, see [Step 3: Clone the Microsoft Edge Demos repo](./get-started.md#step-3-clone-the-microsoft-edge-demos-repo) in _Get started with the DevTools extension for Visual Studio Code_.)

1. Enter data in the webpage, then submit - or equivalent.  For example, in `Demos\demo-to-do\index.html`, click a "done" option button next to an entered task, to trigger a JavaScript function that you've set a breakpoint on.


#### TODO: merge into the above.

1. Open `to-do.js` and set a breakpoint near the top of the `addTask` function, as described for the browser environment above.

1. In Visual Studio Code, in the **Edge DevTools: Browser** tab (pane), enter a task.  The debugger of Visual Studio Code pauses at the breakpoint in the `to-do.js` file.

1. Step through the code, inspecting the **Watch** pane in Visual Studio Code.


<!-- ====================================================================== -->
## Step 13: Stop and close the DevTools extension and browser instance

To end debugging, and in some cases to also close the DevTools tabs, do any of the following:

*  Select **File** > **Close Folder**.

*  To end debugging, in the Debug toolbar, click **Stop** (`Shift`+`F5`).  The **Edge DevTools** tab (pane) and the **Edge DevTools: Browser** tab (pane) close.

*  On the **Run** menu, select **Stop Debugging**.

*  Select Activity Bar > **Microsoft Edge Tools** > **Targets** > hover on a target > click **Close instance** (`X`).  This action automatically closes the **Edge DevTools** tab as well.  If necessary, close an external browser opened by the extension.

   *  For some scenarios, clicking **Close instance** (**x**) doesn't have an effect.  If needed, use another approach.  For example, if you open a folder that has no `launch.json` file, right-click an `.html` file and select **Open with Edge** > **Open Browser with DevTools**, and then select Activity Bar > **Microsoft Edge Tools** > **Targets** > click **Close instance** (**x**) on a target, DevTools continues running, because of how it was launched.

*  Click **Close** (**X**) on the **Edge DevTools** tab and on the **Edge DevTools: Browser** tab.  If using an external browser window started by the extension (rather than embedded browser/headless mode), close the automation-controlled external browser window.

*  Close the Visual Studio Code window.


<!-- ====================================================================== -->
## See also

* [Demo To Do](https://microsoftedge.github.io/Demos/demo-to-do/) - the demo web app running on the `github.io` server.
* [Source code for Demo To Do](https://github.com/MicrosoftEdge/Demos/tree/main/demo-to-do) - the **MicrosoftEdge/Demos** GitHub repo, containing `demo-to-do` and other demos.
* [Microsoft Edge DevTools extension for Visual Studio Code](../microsoft-edge-devtools-extension.md)
