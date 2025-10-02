---
title: Temperature converter sample
description: How to obtain, install, and run the Temperature converter Progressive Web App sample, and how the sample works.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: pwa
ms.date: 10/01/2025
---
# Temperature converter sample

The Temperature converter sample is a Progressive Web App (PWA).

This article covers how to obtain the sample, install it on Windows<!-- per https://github.com/MicrosoftDocs/edge-developer/issues/1974 -->, and run the sample.

See also:
* [Get started with PWAs](../how-to/index.md) - explains the source code of the Temperature converter sample.

In the sections below, you'll:

1. Preview the app running as a web app at the github.io web server.

1. Install or update development tools.

1. Clone the **MicrosoftEdge / Demos** repo, to obtain a local copy of the code.

1. Run and test the sample Progressive Web App as a web app on your localhost web server, in Microsoft Edge.

1. Install the sample from your localhost web server as an app on Windows, by clicking the **App available. Install temperature converter app** (![App available icon](./temperature-converter-images/app-available-icon.png)) button in the Address bar.

1. Run the sample Progressive Web App as a local app on the device.

1. Use Microsoft Edge DevTools to turn off the internet connection and test the app offline.


<!-- ====================================================================== -->
## Preview the sample

Preview the app running as a web app at the github.io web server.

To examine the user interface of the app:

1. On Windows, in Microsoft Edge, go to the [Temperature converter](https://microsoftedge.github.io/Demos/pwa-getting-started/) live sample web app in a new window or tab:

   ![The PWA as a web app within the browser, served from github.io](./temperature-converter-images/preview-sample-at-github.png)

   The sample PWA is initially shown in the browser, with an **App available** button in the Address bar.

   Below, you'll access the web app from `localhost` (as you'd do during development) instead of from `github.io`, and install it to the local machine from there.

   The sample PWA runs in its own window when it's installed locally:

   ![The sample PWA, installed and running in its own window](./temperature-converter-images/sample-pwa-installed.png)

   The window is a browser-based window, without most of the browser UI.

   This instance of the sample app is hosted at github.io.  The sections below use your own, localhost server, instead, to show how to locally test a PWA while developing it.  Your own, actual PWA, after testing it, would be hosted at your web server that users can access.

1. In the preview of the web app at the `github.io` server, in the **temperature** text box, type **22**.

   As you type, the displayed temperature is updated to **71.6 F**.

1. Click the **from** and **to** dropdown lists.

   Available units are:
   * **Celsius**
   * **Fahrenheit**
   * **Kelvin**

   The sample is a Progressive Web App, rather than a regular web app.  Therefore, you can install the PWA as an app on the device, and the app's window contains the same UI as within the full web browser.

   In the Address bar, the button **App available. Install temperature converter app** (![App available icon](./temperature-converter-images/app-available-icon.png)) is present, for this web app that's served at `github.io`.  You'll click that button later, when running the web app from your localhost server, which is the workflow while developing and testing a PWA.


<!-- ====================================================================== -->
## Install or update Visual Studio Code

Next, install or update development tools, including VS Code, git including the npx web server, and Node.js.

Visual Studio Code enables viewing the sample code, modifying the sample, and creating your own PWA by using the sample as a starting point.

Start or install Visual Studio Code, as follows:

1. Press the **Windows** key, enter **Visual Studio Code**, and then click **Open**.

1. If Visual Studio Code isn't installed, go to [Visual Studio Code](https://code.visualstudio.com) and then download and install it.

Continue with the next section.


<!-- ====================================================================== -->
## Install or update git

1. Open Visual Studio Code.

1. In the **View** menu, select **Terminal**. <!-- For details, see [Terminal Basics](https://code.visualstudio.com/docs/terminal/basics) in the VS Code docs. -->

1. In a command prompt, enter `git -v` to check whether git is installed, and which version is installed.

   If git is installed, a version number is displayed, such as `git version 2.51.0.windows.2`.

1. If not done yet, download and install the latest version of git, from [Downloads](https://git-scm.com/downloads) at git-scm.com.

1. During installation, you can accept the defaults, except it's recommended that you change the default editor from vim to Visual Studio Code:

   ![git installer with Visual Studio Code selected as default editor](./temperature-converter-images/git-default-editor.png)


<!-- ====================================================================== -->
## Install or update Node.js

Node.js includes a web server that you'll use to run and test the sample locally.

Install or update Node.js as follows:

1. Open Visual Studio Code.

1. In the **View** menu, select **Terminal**.

1. Enter the command: `node -v`

   If Node.js has been installed, a version number is output, such as v22.19.0.

1. Go to [Node.js](https://nodejs.org).

   Note the version number in the lower left **Latest LTS** button, such as v22.20.0.

1. If you want to update Node.js, click the **Get Node.js** button.  Otherwise, skip to the next section, below.

   You end up at a page such as [Download Node.js](https://nodejs.org/download).

1. Click the **Windows Installer (.msi)** button.

   The **Downloads** window of Microsoft Edge opens, and displays a file name such as `node-v22.20.0-x64.msi`.

1. Click the **open file** link under the file name.

   The **Node.js Setup Wizard** window opens.

1. Click the **Next** button, and follow the prompts.  You can accept the defaults, then click the **Install** button.

1. Follow the prompts.

   The **Node.js Setup Wizard** window closes.

1. In VS Code's terminal, enter the command: `node -v`

   The latest version number is displayed, such as v22.20.0.

Continue with the next section.


<!-- ====================================================================== -->
## Clone the Edge Demos repo to your drive
<!-- derived from 
https://learn.microsoft.com/microsoft-edge/devtools/sample-code/sample-code#clone-the-edge-demos-repo-to-your-drive
-->

Next, you'll clone (or update) the **MicrosoftEdge / Demos** repo, to obtain a local copy of the code in the `/Demos/pwa-getting-started/` directory.

Clone (or update) the **MicrosoftEdge / Demos** repo, as follows:


If the Demos repo has already been cloned to your drive (for use by your current local machine account), you'll use VS Code > Source Control UI) fetch/pull commits, in the "main" branch?

1. See whether the repo is already cloned to your local drive, as follows:

1. Press **Windows+E**.

   File Explorer opens.

1. Navigate to where you want the repo cloned to, such as:

   `C:\Users\localAccount\GitHub`

1. See whether the `\Demos\` repo is listed.

1. Open the [MicrosoftEdge / Demos](https://github.com/MicrosoftEdge/Demos) repo in a new window or tab.

1. Click the **Code** drop-down button, and then click the **Copy url to clipboard** button.

   The URL is copied to the clipboard: `https://github.com/MicrosoftEdge/Demos.git`

1. In VS Code's terminal, change to the directory where you want to clone the Demos repo:

   ```console
   cd ~/GitHub
   cd c:/users/localAccount/GitHub/  # alt format
   ```

1. Enter `git clone` followed by the copied URL for the Demos repo, and then press **Enter**:

   ```console
   git clone https://github.com/MicrosoftEdge/Demos.git
   ```

1. In File Explorer, go to the new, `/Demos/` repo directory, such as:

   `C:\Users\localAccount\GitHub\Demos`

1. In File Explorer, open the `/Demos/pwa-getting-started/` directory.

   Files are listed, such as `converter.js`.

See also:
* [Cloning a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) - GitHub docs.

Continue with the next section.


<!-- ====================================================================== -->
## Start the localhost server and web app

Run and test the sample Progressive Web App as a web app on your localhost web server, in Microsoft Edge.



While developing or testing a PWA, you use a local web server.  `http-server` is a local web server that's included with the Node.js library.

Change to the `/pwa-getting-started/` directory of the cloned Demos repo, and start the `http-server` from there, as follows:

1. In VS Code's terminal, change to the directory where you want to clone the Demos repo:

   ```console
   cd Demos
   cd pwa-getting-started
   ```

   You're now in a directory such as `C:\users\localAccount\GitHub\Demos\pwa-getting-started`.

1. In VS Code's terminal, enter the following command:

   ```console
   npx http-server
   ```

   Output is displayed, such as:

   ```console
   Starting up http-server, serving ./
   Available on:
     http://10.0.1.12:8080
     http://127.0.0.1:8080
   ```

1. In Microsoft Edge, go to: `http://localhost:8080`

   The URL starts with http, not https.  Key parts of the Progressive Web Apps platform, such as service workers, require using HTTPS.  For debugging purposes, Microsoft Edge permits a `localhost` web server to use the PWA APIs without HTTPS.

Continue with the next section.


<!-- ====================================================================== -->
## Install the web app as a local app

Install the sample from your localhost web server as an app on Windows, by clicking the **App available. Install temperature converter app** (![App available icon](./temperature-converter-images/app-available-icon.png)) button in the Address bar.

Install the sample on Windows<!-- per https://github.com/MicrosoftDocs/edge-developer/issues/1974 -->, as follows:

1. In the Address bar, click the **App available. Install temperature converter app** (![App available icon](./temperature-converter-images/app-available-icon.png)) button.

   An **Install app** dialog opens:

   ![The installation prompt](./temperature-converter-images/sample-pwa-app-available-button.png)

   The sample's web app manifest enables the browser to install the app as a PWA.  The **App available** button installs the app locally.

1. Click the **Install** button.

   The app is installed locally.  The **App installed** dialog opens within the app:

   ![The App installed" dialog in the standalone app window](./temperature-converter-images/app-installed-dialog.png)

1. In the **App installed** dialog, click the **Allow** button, and then click the **Close** (X) button.

   The app is displayed within its own app window:

   ![The sample PWA, installed and running in its own window](./temperature-converter-images/sample-pwa-installed.png)

   The app's icon is displayed in the Windows taskbar:

   ![The app's icon in the Windows taskbar](./temperature-converter-images/icon-in-taskbar.png)

1. Close the standalone **Temperature converter app** window.

See also:
* [Installing a PWA](../ux.md#installing-a-pwa) in _Use PWAs in Microsoft Edge_.

Continue with the next section.


<!-- ====================================================================== -->
## Open the sample as a local app

Run the sample Progressive Web App as a local app on the device.


1. Press the **Windows** key, start typing **Temperature converter app**, and then click **Open**.

   The installed **Temperature converter app** opens:

   ![The sample PWA, installed and running in its own window](./temperature-converter-images/sample-pwa-installed.png)

   The service worker (`sw.js`) is running.  The localhost server is automatically running<!-- todo: is npx server auto-started? -->.

   Because you installed the app from `localhost`, when you start the app, the right side of the title bar displays **localhost:8080** for a few seconds:

   ![The installed sample PWA if installed from localhost](./temperature-converter-images/installed-from-localhost.png)

   If you had installed the app from the `github.io` server, when you start the app, the right side of the title bar would instead display **microsoftedge.github.io** for a few seconds:

   ![The installed sample PWA if installed from github.io server](./temperature-converter-images/installed-from-github-io.png)

1. In the **temperature** text box, type **22**.

   As you type, the displayed temperature is updated to **71.6 F**.

1. Click the **from** and **to** dropdown lists.

   Available units are:
   * **Celsius**
   * **Fahrenheit**
   * **Kelvin**

Continue with the next section.


<!-- ====================================================================== -->
## Monitor the service worker handling offline caching

Use Microsoft Edge DevTools to turn off the internet connection and test the app offline.

To confirm that the service worker (`sw.js`) is running:

1. Right-click the app, and then select **Inspect**.

   DevTools opens, in a separate window<!-- todo: what type of window is this?  browser yet not browser - a webview? -->; undocked.  Other docking options are dimmed and not available.

1. In DevTools, select the **Application** (![Application icon](./temperature-converter-images/application-tool-icon.png)) tool.

1. In the tree on the left, select **Application** > **Service workers**.

   Information about the service worker is displayed.  The service worker's **Source** is `sw.js`, with **Status** of **activated and is running**:

    ![The Application tool (in DevTools), showing the "Service workers" panel, with the `sw.js` worker running](./temperature-converter-images/devtools-service-workers.png)

   todo: change png, or add new png: show the DevTools undocked window.

   If the service worker isn't displayed, refresh the page.

1. In the tree on the left, in the **Storage** section, expand **Cache storage**, and then select **temperature-converter-v1 - http://localhost:8080/**.

   The service worker cache is displayed.  All of the resources that are cached by the service worker are listed:
   * `/` (`index.html`) - The HTML page of the app; the initial page of the app - `index.html` - webpage layout of the app.
   * `/converter.css` - The styling for the webpage of the app.
   * `/converter.js` - The JavaScript file containing the app logic.
   * `/icon512.png` - The app icon image file to represent the app.
   * `/manifest.json` - The app manifest, containing basic information about the app, for the device's operating system to use.

   ![DevTools > Application tool > Cache storage, showing cached resources](./temperature-converter-images/devtools-cache-storage.png)

   The service worker adds three files to the cache, explicitly (`.html`, `.css`, and `.js`).  The icon (`.png`) and manifest (`.json`) are cached automatically by the browser.

   The sample's directory includes two files that aren't cached by the service worker: 
   * `README.md` - brief information about the sample.
   * `sw.js` - the service worker that manages caching of needed files.
    
1. Try the PWA as an offline app.  In DevTools, open the **Network** tool, and change the **Throttling** value to **Offline**:

   ![DevTools, showing where to switch the Throttling value to Offline](./temperature-converter-images/devtools-offline.png)

1. Refresh the app.  The app still appears correctly in the browser, by using cached resources that are served out by the service worker.


<!-- ====================================================================== -->
## Uninstall the sample

Uninstalling the sample by starting from the running **Temperature converter app** window:

1. Select **Settings and more** (**...**) > **App settings**.

   In Microsoft Edge, the **Apps** tab opens, displaying details about the **Temperature converter app**.

1. Click the **Uninstall** button.


Uninstalling the sample by starting from Microsoft Edge:

1. In Microsoft Edge, select **Settings and more** (**...**) > **More tools** > **Apps** > **View apps** > **Installed apps**.

1. In the **Temperature converter app** section, select **Details**, and then click the **Uninstall** button.


<!-- ====================================================================== -->
## Modify the sample
<!-- todo -->

To modify the sample, you can change to a different branch of the Demos repo.


<!-- ====================================================================== -->
## Re-install the sample, modified
<!-- todo -->


<!-- ====================================================================== -->
## Next steps

Study the code of this sample by reading [Get started with PWAs](../how-to/index.md).

Then you can:
* Make minor modifications of the sample's code.
* Copy and paste the entire sample directory and extensively modify the code to create your own PWA.


<!-- ====================================================================== -->
## See also
<!-- todo: all links in article -->

<!-- Local: -->
* [Get started with PWAs](../how-to/index.md).
* [Overview of Progressive Web Apps (PWAs)](../index.md)
* [Use PWAs in Microsoft Edge](../ux.md)
* [Installing a PWA](../ux.md#installing-a-pwa) in _Use PWAs in Microsoft Edge_.
* [Best practices for PWAs](../how-to/best-practices.md)

Demos repo:
* [Temperature converter](https://microsoftedge.github.io/Demos/pwa-getting-started/) - sample app hosted at github.io (rather than localhost).
* [Temperature converter - PWA getting started demo app](https://github.com/MicrosoftEdge/Demos/tree/main/pwa-getting-started) - source code.

MDN:
* [Web app manifests](https://developer.mozilla.org/docs/Web/Manifest) at MDN.
* [Service Worker API](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) at MDN.

External Microsoft sites:
* [Visual Studio Code](https://code.visualstudio.com)
* [Azure free account](https://azure.microsoft.com/free)
* [Microsoft Azure App Service](https://azure.microsoft.com/services/app-service/web)

External sites:
* [Getting Started with Progressive Web Apps (Workshop)](https://noti.st/aarongustafson/co3b5z/getting-started-with-progressive-web-apps-workshop).
* [GitHub Pages](https://pages.github.com/)
* [Node.js](https://nodejs.org)
* [Let's Encrypt](https://letsencrypt.org/)
