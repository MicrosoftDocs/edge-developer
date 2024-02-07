---
title: Installing the DevTools extension for Visual Studio Code
description: Installing the Microsoft Edge Developer Tools extension for Visual Studio Code, cloning the Demos repo, and setting up a localhost server to use the Demos repo.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.date: 10/06/2022
---
# Installing the DevTools extension for Visual Studio Code

This article walks you through the initial setup of the DevTools extension.  After installing DevTools, you'll be ready to follow the steps in [Get started using the DevTools extension for Visual Studio Code](./get-started.md).

This article helps you:

* Install the DevTools extension.

* Clone the Demos repo, which includes the **demo-to-do** web app.

* Start a web server so you can use localhost URLs in the DevTools extension in Visual Studio Code.


<!-- ====================================================================== -->
## Step 1: Install Visual Studio Code

1. If not done already, in a separate window or tab, go to [Download Visual Studio Code](https://code.visualstudio.com/Download) and download and install Visual Studio Code.


<!-- ====================================================================== -->
## Step 2: Install Microsoft Edge

Microsoft Edge is required, for the DevTools extension for Visual Studio Code.

On Windows, Microsoft Edge is installed.  On macOS or Linux, install Microsoft Edge as follows:

1. Go to the [Edge](https://www.microsoft.com/edge) page at Microsoft.com.


<!-- ====================================================================== -->
## Step 3: Install the Microsoft Edge DevTools extension

Install the Microsoft Edge DevTools extension for Visual Studio Code, as follows:

1. Open Visual Studio Code.

1. In the **Activity Bar** on the left, click the **Extensions** (![Extensions icon](./install-images/extensions-icon.png)) button.  Or, press **Ctrl+Shift+X** on Windows/Linux or **Command+Shift+X** on macOS.  The **Extensions** Marketplace pane opens.

1. In the **Search Extensions in Marketplace** text box, enter **Microsoft Edge Tools for VS Code**.

1. Select the **Microsoft Edge Tools for VS Code**, and then click the **Install** button:

   ![Installing the Microsoft Edge DevTools extension for Visual Studio Code](./install-images/vscode-edge-tools-install.png)

As an alternative approach, you can use the browser to download the Microsoft Edge DevTools extension from the Visual Studio Marketplace website.  Go to [Microsoft Edge Developer Tools for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools).


<!-- ====================================================================== -->
## Step 4: Install Node.js and Node Package Manager (npm)

To get live (realtime) analysis of your code to indicate issues, such as with wavy underlines, and to offer Quick Fixes, you must install Node.js and Node Package Manager (npm).

The DevTools extension shows a popup suggestion to install Node.js and npm.  The suggestion text is similar to: "Install Node.js & npm? (suggested because you installed this extension)".

1. Click the link in the popup, if it opens.

1. Install Node.js and npm from [Node.js](https://nodejs.org) > Downloads > LTS (long-term stable) (or, Current).

   On Windows, a `.msi` file is downloaded, such as: `node-v18.17.1-x64.msi`
   <!-- Sep. 12, 2023 -->

1. In the browser's Downloads pane, click **Show in folder**, and then run the downloaded file.  The Node.js Setup Wizard opens.  Click the **Next** button, and then follow the prompts.  You can use the default options.

1. Confirm that Node.js and npm are installed, as follows: in Visual Studio Code, select **View** > **Terminal**.  Or, run the git bash app.

1. At the command prompt, enter `npm version`.  Version numbers are displayed for `npm` and for `node`, indicating that Node Package Manager and Node.js are installed, to support inline and live issue analysis.  For example:

   ```
   $ npm version
   {
      npm: '9.6.7',
      node: '18.17.1',
      ...
   }
   ```
   <!-- Sep. 12, 2023 -->

See also:
* [Inline and live issue analysis](./inline-live-issue-analysis.md)


<!-- ====================================================================== -->
## Step 5: Clone the Demos repo

Cloning the Demos repo is optional.  The Demos repo is useful for following the various DevTools documentation.  If you want, instead of cloning the repo, you can open an existing project directory if you have one.

As another alternative, instead of cloning the entire directory, you can download only the **demo-to-do** directory.  For example, go to [https://download-directory.github.io/](https://download-directory.github.io/) and then paste the URL [https://github.com/MicrosoftEdge/Demos/tree/main/demo-to-do](https://github.com/MicrosoftEdge/Demos/tree/main/demo-to-do).  The `.zip` file is placed in your download directory.  Unzip these webpage source files into a suitable location.  The tutorial [Get started using the DevTools extension for Visual Studio Code](./get-started.md) uses the example location:

`C:\Users\username\Documents\GitHub\Demos\demo-to-do\`


To clone the **Demos** repo to use the **demo-to-do** sample for this tutorial:

1. Go to [MicrosoftEdge/Demos repo](https://github.com/MicrosoftEdge/Demos/).

1. If the green **Code** button isn't shown, click **Demos** in the path **Microsoft Edge** / **Demos** in the upper left to go to the main page of the repo.

1. Click the green **Code** button, and then select the **Copy** button.  This article assumes you're using the **Source Control** features within Visual Studio Code.  Or, you can use one of the other methods that are provided, if you know that you want to use that approach instead:
   *  **Open with GitHub Desktop**
   *  **Open with Visual Studio**
   *  **Download ZIP**

   ![Cloning the MicrosoftEdge/Demos repo](./install-images/clone-repo.png)

1. In Visual Studio Code, in the **Activity Bar**, click the **Source Control** (![Source Control icon](./install-images/source-control-icon.png)) button, and then click the **Clone Repository** button.

1. In the **Provide repository URL** text box, paste the copied URL: **https://github.com/MicrosoftEdge/Demos.git** and then press **Enter**.  A folder selection dialog opens.

   ![The Clone Repository button in Visual Studio Code](./install-images/clone-repository-button.png)

1. Navigate to your desired path, such as `C:\Users\username\Documents\GitHub` or `Users/username/GitHub`, and then click the **Select Repository Location** button.

1. The message **Cloning git repository** appears, then you're prompted to open the cloned repository.  Click the **Open** button:

   ![Prompted to open the cloned repo](./install-images/prompt-open-cloned-repo.png)

1. If prompted **Do you trust...**, click the **Yes** button.  Or, click the **No** button and continue with most parts of this walkthrough.

   The **Explorer** tree lists many demos, including **demo-to-do**.

1. In Visual Studio Code, select **File** > **Close Folder**.

1. In the **Activity Bar**, click the **Microsoft Edge Tools** (![Microsoft Edge Tools icon](./install-images/microsoft-edge-tools-icon.png)) button.  The **Microsoft Edge Tools** pane opens.

1. In the **Microsoft Edge Tools** > **Targets** pane, click the **Open Folder** button.  The **Open Folder** dialog opens.  Navigate to the `demo-to-do` folder in the Demo repo that you cloned, select the folder or go into it, and then click the **Select Folder** button:

   ![Selecting the demo-to-do folder](./install-images/select-demo-to-do-folder.png)

   An example of a repo location where the **Demos** repo has been cloned is shown above.  The `demo-to-do` folder of the cloned **Demos** repo opens in the Explorer of Visual Studio Code, and no `launch.json` file exists yet:

   ![Opened the demo-to-do folder initially](./install-images/opened-demo-to-do-folder-initially.png)


<!-- ====================================================================== -->
## Step 6: Set up a localhost server

If you installed Node.js and npm, as described above, `npx http-server` is a simple way to start a local web server.  You can skip to the steps below, or read this background information first.

In many cases, you don't need to enter a URL or run a localhost server.  For example, you can:
*  Open a folder that contains webpage source files, and then right-click an `.html` file.
*  Enter a local file path in the address bar, such as `C:/Users/username/.vscode/extensions/ms-edgedevtools.vscode-edge-devtools-2.1.1/out/startpage/index.html` (the default, Success page).
*  Enter a remote server URL in the address bar of the **Edge DevTools: Browser** tab, such as [https://microsoftedge.github.io/Demos/demo-to-do/](https://microsoftedge.github.io/Demos/demo-to-do/).

If your webpage uses certain APIs that require the webpage to be running on a web server, to use DevTools, you must start a local web server for testing.  If you don't serve out your project on a webserver, but only instead, you use local files, you can still use DevTools, with debugging ability, by right-clicking a local `.html` file.  Functionality of your app which specifically requires your app to be on a server won't work, and DevTools will have limited utility.

For information about http-server, see [http-server: a simple static HTTP server](https://www.npmjs.com/package/http-server).


<!-- ------------------------------ -->
#### Set up http-server

1. In Visual Studio Code, select **File** > **Open Folder** > open the directory that contains the `.html`, `.css`, and `.js` files for a webpage, such as `C:\Users\username\Documents\GitHub\Demos\demo-to-do\`.

   In the above example path:
   *  `\Documents\GitHub\` is where the `Demos` repo was cloned to.
   *  `\Demos\` is the GitHub repo that's used for examples in the Microsoft Edge Developer documentation.
   *  `\demo-to-do\` is one of the sample directories in the repo.

1. In Visual Studio Code, select **View** > **Terminal**.  Or, to keep the web server running regardless of Visual Studio's state, open a command prompt outside of Visual Studio Code, such as `git bash`.

1. `cd` into the the folder you want to serve via http.

   In the git bash shell, use forward slashes, such as:

   ```
   cd C:/Users/username/Documents/GitHub/Demos/demo-to-do/
   ```

   Or, if you are using a different command prompt on Windows, use backslashes, such as:

   ```
   cd C:\Users\username\Documents\GitHub\Demos\demo-to-do\
   ```

Continue below.


<!-- ------------------------------ -->
#### Start the server (npx http-server)

These steps start the server for the first time.

1. Enter the command `npx http-server`:

   ```
   npx http-server
   ```

   A local webserver starts on port 8080.

   You might receive a message like:

   ```
   Need to install the following packages:
     http-server@14.1.1
   Ok to proceed? (y)
   ```

   Or, if you get **no such file or directory**, you can run: `npm install --global http-server` and then run: `http-server`

1. Enter **y**.

   Windows prompts whether to allow Node to communicate on the network:

   ![Allowing Node to communicate on the network](./install-images/allow-node-communicate-network.png)

1. Select the **Private networks** checkbox, and then click the **Allow access** button.

   Information about the server and localhost URL is displayed, such as:

   ```
   Starting up http-server, serving ./
   
   Available on:
   http://10.0.1.8:8080
   http://127.0.0.1:8080
   Hit CTRL-C to stop the server
   ```

   The displayed URLs are usually equivalent to the common standard URL, `http://localhost:8080`.

   ![Starting the server](./install-images/git-bash-starting-server-2nd-time.png)

Next, see [Get started using the DevTools extension for Visual Studio Code](./get-started.md).


<!-- ====================================================================== -->
## See also

* [Get started using the DevTools extension for Visual Studio Code](./get-started.md)
* [Opening DevTools and the DevTools browser](./open-devtools-and-embedded-browser.md)
* [Microsoft Edge DevTools extension for Visual Studio Code](../microsoft-edge-devtools-extension.md)
* [Sample code for DevTools](../../devtools-guide-chromium/sample-code/sample-code.md)
* [Cloning a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) - GitHub docs.
