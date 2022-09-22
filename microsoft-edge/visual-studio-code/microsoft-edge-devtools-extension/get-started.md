---
title: Get started with the DevTools extension for Visual Studio Code
description: Installing the Microsoft Edge Developer Tools extension for Visual Studio Code and modifying Demo To Do sample web page web app.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 09/21/2022
---
# Get started with the DevTools extension for Visual Studio Code

<!-- Background general info about the extension (condensed):  -->
This extension lets you use many of the same tools that are in the DevTools that's in the Microsoft Edge browser, but instead, use them within the environment and context of the Visual Studio Code IDE (integrated development environment).

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

Install the Microsoft Edge DevTools extension for Visual Studio Code, as follows:

1. In Visual Studio Code, in the Activity Bar on the left, click the **Extensions** button.  Or, press `Ctrl`+`Shift`+`X` on Windows/Linux or `Command`+`Shift`+`X` on macOS.  The Marketplace appears.

1. In the **Search Extensions in Marketplace** text box, enter **Microsoft Edge Tools for VS Code**.

1. Select the **Microsoft Edge Tools for VS Code**, and then click the **Install** button:

   ![Installing the Microsoft Edge DevTools extension for Visual Studio Code](../microsoft-edge-devtools-extension-images/vscode-edge-tools-install.png)

   Or, you can use the browser to download the Microsoft Edge DevTools extension from the Visual Studio Marketplace website.  Go to [Microsoft Edge Developer Tools for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools).


<!-- ====================================================================== -->
## Step 3: Clone the Microsoft Edge Demos repo

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

1. In the **Microsoft Edge Tools** > **Targets** pane, click the **Open Folder** button.  The **Open Folder** dialog box opens.  Navigate to the demo-to-do folder in the Demo repo that you cloned, select the folder or go into it, and then click the **Select Folder** button:

   ![Selecting the demo-to-do folder](./get-started-images/select-demo-to-do-folder.png)

   An example of a repo location where the **Demos** repo has been cloned is shown above.  The `demo-to-do` folder of the cloned **Demos** repo opens in the Explorer of Visual Studio Code, and no `launch.json` file exists yet:

   ![Opened the demo-to-do folder initially](./get-started-images/opened-demo-to-do-folder-initially.png)


<!-- ====================================================================== -->
## Step 4: Optional: Compare and contrast DevTools in the browser vs. in the extension

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

1. Scroll down to the `addTask` function and then click to the left of a line number to set a breakpoint.
<!-- todo: screenshot -->

1. In the webpage, enter a task, such as **Buy milk**, and then press `Enter`.  The in-browser DevTools debugger pauses on the breakpoint:

   ![Debugging in Microsoft Edge DevTools Sources tool](./get-started-images/devtools-sources-tool-browser.png)

1. Refresh the page to reset the debugger.

Next, to get additional debugging functionality,<!-- todo: eg, list --> and to use the rich environment of Visual Studio Code, we'll open the DevTools **Sources**<!--no, fix--> tool in Visual Studio Code, using the Microsoft Edge DevTools extension for Visual Studio Code.


<!-- ====================================================================== -->
## Step 5: View the Success page and the tools

At first, we won't create a launch.json file and which will load demo to do in the embedded browser.  We'll just explore the extension's DevTools UI in Visual Studio Code by using the default, **Success** webpage.

1. In Visual Studio Code, in the Activity Bar, click the **Microsoft Edge Tools** (![Microsoft Edge Tools icon](./get-started-images/microsoft-edge-tools-icon.png)) button.  The **Microsoft Edge Tools** pane opens.

   ![Launch Instance button of the DevTools extension](./get-started-images/launch-instance-button.png)

1. Click the **Launch Instance** button.  The **Edge DevTools** tab and the **Edge DevTools: Browser** tab open in separate panes, showing the **Success** webpage (not the Demo To Do web app yet):

   ![DevTools extension initial view](./get-started-images/devtools-extension-initial-view.png)

1. In the **Edge DevTools** tab in the middle, to the right of the **Elements** tab, click the **More tabs** (**>>**) button to see which other tool tabs are already opened, such as **Console**, **Network**, and **Application**.

1. To the right of the **More tabs** (**>>**) button, click the **More Tools** (**+**) button, to see what additional tools are available, such as **Issues**, **Network conditions**, and **Network request blocking**.

1. To the left of the **More tabs** (**>>**) button, click the **Inspect** button, and then hover over parts of the rendered webpage on the right, to see layout information.  Click the rendered webpage, to go to the selected element in the **Elements** tool.

1. In the the **Edge DevTools: Browser** tab, at the bottom, click the **Emulate devices** dropdown list, and then select a couple different devices.  Then select **Responsive**, at the top of the list, to restore the original view.

Next, we'll create a `launch.json` file that points to the specific webpage for the demo-to-do app.


<!-- ====================================================================== -->
## Step 6: Close Microsoft Edge Tools and the running browser instance

1. In the **Microsoft Edge Tools** pane on the left, in the **Targets** section, hover on the right side of the listed Target (`index.html`) and then click **Close instance** (**x**).  The Microsoft Edge DevTools panes close.


<!-- ====================================================================== -->
## Step 7: Run the demo app

1. In Visual Studio Code, in the Activity Bar, click the **Microsoft Edge Tools** (![Microsoft Edge Tools icon](./get-started-images/microsoft-edge-tools-icon.png)) button.  The **Microsoft Edge Tools** pane opens.

   ![The 'Generate launch.json' button of the DevTools extension](./get-started-images/launch-instance-button.png)

1. Click the **Generate launch.json** button.  The new `launch.json` file opens.

1. On each of the `"url"` lines, scroll to the right , and note the comment, "Provide your project's url":

   ```js
   "url": "c:\\Users\\username\\.vscode\\extensions\\ms-edgedevtools.vscode-edge-devtools-2.1.1\\out\\startpage\\index.html", 
   // Provide your project's url to finish configuring
   ```

   You don't need to run port 8080.  You can run the app from your local drive as-is.

1. In Visual Studio Code, in the **Explorer**, right-click the file `Demos\demo-to-do\index.html` and then select **Copy path**.

1. In the **Explorer**, click the **launch.json** file.

1. Paste the path inside the quoted path string in one of the `"url"` strings, and change to use double-quotes.  For example:

   ```js
   "url": "C:\\Users\\myusername\\Documents\\GitHub\\Demos\\demo-to-do\\index.html", 
   // Provide your project's url to finish configuring
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
## See also

* [Demo To Do](https://microsoftedge.github.io/Demos/demo-to-do/) - the demo web app running on the `github.io` server.
* [Source code for Demo To Do](https://github.com/MicrosoftEdge/Demos/tree/main/demo-to-do) - the **MicrosoftEdge/Demos** GitHub repo, containing `demo-to-do` and other demos.
* [Microsoft Edge DevTools extension for Visual Studio Code](../microsoft-edge-devtools-extension.md)
