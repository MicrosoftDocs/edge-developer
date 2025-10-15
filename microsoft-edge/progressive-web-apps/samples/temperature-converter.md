---
title: Temperature converter sample
description: How to obtain, install, and run the Temperature converter Progressive Web App sample, and how the sample works.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: pwa
ms.date: 10/09/2025
---
# Temperature converter sample

The Temperature converter sample is a Progressive Web App (PWA) that demonstrates the basics of how to build a PWA.  You can modify this sample to start creating your own PWA.

This article covers how to obtain the sample, install it on Windows<!-- per https://github.com/MicrosoftDocs/edge-developer/issues/1974 -->, and run the sample.  This sample works with multiple operating systems, including Windows.  This article provides steps for Windows; other platforms have similar steps.

See also:
* [Get started developing a PWA](../how-to/index.md).


<!-- ====================================================================== -->
## Step 1: Preview the app running in a browser window

To examine the user interface of the app:

1. In Microsoft Edge, go to the live [Temperature converter](https://microsoftedge.github.io/Demos/pwa-getting-started/) sample web app in a new window or tab (hosted at github.io):

   ![The PWA as a web app within the browser, served from github.io](./temperature-converter-images/preview-sample-at-github.png)

   The sample Progressive Web App (PWA) is initially shown in the browser, as a web app, but also has an **App available** (![App available icon](./temperature-converter-images/app-available-icon.png)) button (don't click it yet).

1. In the **temperature** text box, type **22**.

   As you type, the displayed temperature is updated to **71.6 F**.

1. Click the **from** and **to** dropdown lists.

   Available units are:
   * **Celsius**
   * **Fahrenheit**
   * **Kelvin**

   In a later step, after the sample Progressive Web App (PWA) is installed as a local app, the app runs in its own window:

   ![The sample Progressive Web App (PWA), installed and running in its own window](./temperature-converter-images/sample-pwa-installed.png)

   The window is a browser-based window, without most of the browser UI.  The local app is integrated into the device's UI, such as the Windows taskbar and Windows Start menu.

   This instance of the sample app is hosted at `github.io`.  In the sections below, you use a local server instead, to show how to locally test a Progressive Web App (PWA) while developing it.

   The sample is a Progressive Web App, rather than a regular web site.  Therefore, you can install the Progressive Web App (PWA) as an app on the device, and the app's window contains the same UI as within the full web browser.

1. Close the tab that contains the live [Temperature converter](https://microsoftedge.github.io/Demos/pwa-getting-started/) sample web app.

   In a later step, you'll access the web app from your local server (`localhost`) instead, and install it to your device from there.


<!-- ====================================================================== -->
## Step 2: Install Visual Studio Code

Visual Studio Code enables viewing the sample code, modifying the sample, and creating your own Progressive Web App (PWA) by using the sample as a starting point.

Install (or optionally update) VS Code, as follows:

1. Press the **Windows** key, enter **Visual Studio Code**, and then click **Open**.

1. If Visual Studio Code isn't installed, go to [Visual Studio Code](https://code.visualstudio.com) and then download and install it.


<!-- ====================================================================== -->
## Step 3: Install or update git

Install or update git, as follows:

1. Open Visual Studio Code.

1. In the **View** menu, select **Terminal**. <!-- For details, see [Terminal Basics](https://code.visualstudio.com/docs/terminal/basics) in the VS Code docs. -->

1. Enter the command: `git -v`

   If git is installed, a version number is displayed, such as `git version 2.51.0.windows.2`.

1. If not done yet, download and install the latest version of git, from [Downloads](https://git-scm.com/downloads) at git-scm.com.

1. During installation, you can accept the defaults, except it's recommended that you change the default editor from vim to Visual Studio Code:

   ![git installer with Visual Studio Code selected as default editor](./temperature-converter-images/git-default-editor.png)


<!-- ====================================================================== -->
## Step 4: Install or update Node.js

Node.js includes a web server that you'll use to run and test the sample locally.

Install or update Node.js, as follows:

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


<!-- ====================================================================== -->
## Step 5: Clone the Edge Demos repo, to get a local copy of the code
<!-- derived from 
https://learn.microsoft.com/microsoft-edge/devtools/sample-code/sample-code#clone-the-edge-demos-repo-to-your-drive
-->

**TODO: RESUME HERE, TESTING THE STEPS**

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


<!-- ====================================================================== -->
## Step 6: Run the PWA as a web app on your localhost web server; Start the development web server

Next, you'll run and test the sample Progressive Web App (PWA) on your local web server, in Microsoft Edge.

While developing or testing a web site or app, including a PWA, you can use a local web server.  However, when the app is ready for users, you deploy the app to the web by using a web hosting provider.  Like a regular web site or app, a PWA is distributed to users by using a web server.

In this section, you use `http-server`, a local development web server that can be run in Node.js.

Change to the `/pwa-getting-started/` directory of the cloned Demos repo, and start the `http-server` from there, as follows:

1. In VS Code's terminal, change to the directory where you want to start the localhost npx web server as `./`:

   ```console
   cd Demos
   cd pwa-getting-started
   ```

   You're now in a directory such as `C:\users\localAccount\GitHub\Demos\pwa-getting-started\`.

1. In VS Code's terminal, enter the following command:

   ```console
   npx http-server
   ```

   The above command starts the local development web server by using the `http-server` NPM package.

1. If you get a "running scripts is disabled" error (if VS Code's Terminal is using PowerShell), enter the execution policy PowerShell command and then issue the npx command again:

   ```console
   Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope CurrentUser
   npx http-server
   ```

   Example output:

   ```console
   Need to install the following packages:
   http-server@14.1.1
   Ok to proceed? (y)
   ```

1. If needed, press **Y** and then **Enter**.

   Output is displayed, such as:

   ```console
   Starting up http-server, serving ./
   ...
   Available on:
     http://10.0.1.12:8080
     http://127.0.0.1:8080
   Hit CTRL-C to stop the server
   ```

1. In Microsoft Edge, go to [http://localhost:8080](http://localhost:8080) (or an equivalent URL that was output in the terminal, from the `npx http-server` command).


<!-- ====================================================================== -->
## Step 7: Install the PWA from your localhost web server as a local app

Install the sample Progressive Web App (PWA) from your localhost web server as an app on Windows, by clicking the **App available. Install temperature converter app** (![App available icon](./temperature-converter-images/app-available-icon.png)) button in the Address bar.

Install the sample Progressive Web App (PWA) on Windows<!-- per https://github.com/MicrosoftDocs/edge-developer/issues/1974 -->, as follows:

1. In the Address bar, click the **App available. Install temperature converter app** (![App available icon](./temperature-converter-images/app-available-icon.png)) button.

   An **Install app** dialog opens:

   ![The installation prompt](./temperature-converter-images/sample-pwa-app-available-button.png)

   The sample's web app manifest enables the browser to install the app as a Progressive Web App (PWA).  The **App available** button installs the app locally.

1. Click the **Install** button.

   The app is installed locally.  The **App installed** dialog opens within the app:

   ![The App installed" dialog in the standalone app window](./temperature-converter-images/app-installed-dialog.png)

1. In the **App installed** dialog, click the **Allow** button, and then click the **Close** (X) button.

   The app is displayed within its own app window:

   ![The sample Progressive Web App (PWA), installed and running in its own window](./temperature-converter-images/sample-pwa-installed.png)

   The window is a browser window without most of the browser UI.

   The app's icon is displayed in the Windows taskbar:

   ![The app's icon in the Windows taskbar](./temperature-converter-images/icon-in-taskbar.png)

1. Close the standalone **Temperature converter app** window.

See also:
* [Installing a PWA](../ux.md#installing-a-pwa) in _Use PWAs in Microsoft Edge_.


<!-- ====================================================================== -->
## Step 8: Run the sample PWA as a local app

Run the sample Progressive Web App (PWA) as a local app on the device.

1. Press the **Windows** key, start typing **Temperature converter app**, and then click **Open**.

   The installed **Temperature converter app** opens:

   ![The sample PWA, installed and running in its own window](./temperature-converter-images/sample-pwa-installed.png)

   Because you installed the app from `localhost`, when you start the app, the right side of the title bar displays **localhost:8080** for a few seconds:

   ![The installed sample Progressive Web App (PWA) if installed from localhost](./temperature-converter-images/installed-from-localhost.png)

   If you had installed the app from the `github.io` server, when you start the app, the right side of the title bar would instead display **microsoftedge.github.io** for a few seconds:

   ![The installed sample Progressive Web App (PWA) if installed from github.io server](./temperature-converter-images/installed-from-github-io.png)

1. In the **temperature** text box, type **22**.

   As you type, the displayed temperature is updated to **71.6 F**.

1. Click the **from** and **to** dropdown lists.

   Available units are:
   * **Celsius**
   * **Fahrenheit**
   * **Kelvin**


<!-- ====================================================================== -->
## Step 9: Examine the service worker handling offline caching

The local app window for a Progressive Web App (PWA) is a browser-based window, so Microsoft Edge DevTools can be used to work with the PWA.

Confirm that the service worker (`sw.js`) is running when you open the PWA as a local app:

1. Open the installed **Temperature converter** sample PWA.

1. Right-click in white space in the window, or right-click a specific UI control, and then select **Inspect**.

   The app window is a browser window, so supports the DevTools **Inspect** command, even though the app window doesn't have the UI which normally appears in a browser window.

   DevTools opens, in a separate window; undocked.  Other docking options are dimmed and not available.

1. In DevTools, select the **Application** (![Application icon](./temperature-converter-images/application-tool-icon.png)) tool.

   **Service workers:**

1. In the tree on the left, select **Application** > **Service workers**.

   Information about the service worker is displayed.  The service worker's **Source** is `sw.js`, with **Status** of **activated and is running**:

   ![The PWA as an installed local app, with DevTools showing the Service workers panel, with the sw.js worker running](./temperature-converter-images/devtools-service-workers-installed-app.png)

   If the service worker isn't displayed, refresh the page by using **Hard refresh** (**Ctrl+F5**, or **Shift+F5**).

   **Cache storage:**

1. In the tree on the left, in the **Storage** section, expand **Cache storage**, and then select **temperature-converter-v1 - http://localhost:8080/**.

   ![Installed app: DevTools > Application tool > Cache storage, showing cached resources](./temperature-converter-images/devtools-cache-storage-installed-app.png)

   The service worker cache is displayed.  All of the resources that are cached by the service worker (or cached automatically by the browser) are listed:
   * `/` (`index.html`) - The HTML page of the app; the initial page of the app - `index.html` - webpage layout of the app.
   * `/converter.css` - The styling for the webpage of the app.
   * `/converter.js` - The JavaScript file containing the app logic.
   * `/icon512.png` - The app icon image file to represent the app.
   * `/manifest.json` - The app manifest, containing basic information about the app, for the device's operating system to use.

   The service worker adds three files to the cache, explicitly (`.html`, `.css`, and `.js`).  The icon (`.png`) and manifest (`.json`) are cached automatically by the browser.

   The sample's directory includes two files that aren't cached by the service worker: 
   * `README.md` - brief information about the sample.
   * `sw.js` - the service worker that manages caching of needed files.


<!-- ====================================================================== -->
## Step 10: Use DevTools to turn off the internet connection and test the PWA offline

Try the Progressive Web App (PWA) as an offline app, as follows.   
 
1. In DevTools, open the **Network** tool, and change the **Throttling** value to **Offline**:

   ![DevTools, showing where to switch the Throttling value to Offline](./temperature-converter-images/devtools-offline.png)

1. Refresh the app (**F5**).<!-- If you were to empty the cache, the app would stop working.  The job of a service worker is to put resources in the cache so that the app can work offline.  If you empty the cache, the files that the app needs aren't there anymore, and need to be downloaded again. -->

   The app still appears correctly in the browser-based local app window, by using cached resources that are served out by the service worker.


<!-- ====================================================================== -->
## Step 11: Modify the sample

Switching from the **main** branch to a working branch preserves the original code in the "main" branch, so that you can modify a copy of the sample code.

Create a working branch and switch to it, as follows:

1. In Visual Studio Code, in the **View** menu, select **Terminal**.

   The prompt shows the current path, such as: `PS C:\Users\localAccount\GitHub\Demos>`

1. Change to the `/Demos/pwa-getting-started/` directory, by entering commands such as the following:

   ```console
   cd Demos
   cd pwa-getting-started
   ```

1. In the lower left corner of Visual Studio Code, look at the branch name.

   The **main** branch is indicated.

1. In VS Code's terminal, enter the following commands, to create a working branch of the repo and switch to it:

   ```console
   git checkout -b test1
   ```

   Example output: `Switched to branch 'test1'`

   The lower left corner of Visual Studio Code now shows the branch name **test1** instead of **main**.

1. In Visual Studio Code, open `/Demos/pwa-getting-started/index.html`.

   Change the title element text from:
   `<title>Temperature converter</title>`
   to:
   `<title>My temperature converter</title>`

1. Save the file.


<!-- ====================================================================== -->
## Step 12: View the modified web app in the browser

1. In Microsoft Edge, go to [http://localhost:8080](http://localhost:8080) (or an equivalent URL that was output in the terminal, from the `npx http-server` command).

1. Refresh the webpage.<!-- Refresh (**F5**).  Hard refresh (**Ctrl+F5**, or **Shift+F5**).  Press **F12** to open DevTools, right-click the **Refresh** button, select **Empty cache and hard reset**, and then press **F12** to close DevTools. -->

   The tab text changes from **Temperature converter** to **My temperature converter**.

   Because you have installed the sample as a local app, the Address bar contains an **Open in app** (![Open in app icon](./temperature-converter-images/open-in-app-icon.png)) button instead of an **App available** button (regardless of whether the local app is open).


<!-- ====================================================================== -->
## Step 13: Re-install the modified sample as a local app

At this point, your device still has the original version of the sample Progressive Web App (PWA) installed (from localhost, not from github.io).  To update the local app after you modified the code, you don't need to uninstall and reinstall; just open the modified web app from the address bar, as follows.

1. In the Address bar, click the **Open in app** (![Open in app icon](./temperature-converter-images/open-in-app-icon.png)) button.

   A dialog opens within the browser, titled **Open Temperature converter a...**:

   ![The "Open Temperature converter a..." dialog in the browser](./temperature-converter-images/open-temp-converter-app-dialog.png)

1. Click the **Open** button.

   The local app's title bar now reads **Temperature converter app - My temperature converter**, since you added the word "My":

   ![The modified local app](./temperature-converter-images/modified-local-app.png)

   The title bar of the local app is populated by strings from two files:

   1. `manifest.json`: `"name": "Temperature converter app",`

   1. `index.html`: `<title>My temperature converter</title>`


<!-- ====================================================================== -->
## Step 14: Switch back to the "main" branch of the Demos repo

1. In the lower left corner of Visual Studio Code, look at the branch name.

   The **test1** branch is indicated.

1. In Visual Studio Code, in the **View** menu, select **Terminal**.

1. Enter the following command:

   ```console
   git checkout main
   ```

   Example output: `Switched to branch 'main'`

   The lower left corner of Visual Studio Code now shows the branch name **main** instead of **test1**.


<!-- ====================================================================== -->
## Step 15: Uninstall the local app

You can uninstall the sample as a local app on the device, by starting from the running **Temperature converter app** window.

Uninstall the local app as follows:

1. In the running local app window, select **Settings and more** (**...**) > **App settings**.

   In Microsoft Edge, the **Apps** tab opens, displaying details about the **Temperature converter app**:

   ![The Uninstall button in the Apps page of Microsoft Edge](./temperature-converter-images/uninstall-button.png)

1. Click the **Uninstall** button.


You could also uninstall the sample PWA by starting from Microsoft Edge; you'd do the following:

1. In Microsoft Edge, select **Settings and more** (**...**) > **More tools** > **Apps** > **View apps** > **Installed apps**.

1. In the **Temperature converter app** section, select **Details**, and then click the **Uninstall** button.


<!-- ====================================================================== -->
## Step 16: Stop the development web server

1. In Visual Studio Code, in the **View** menu, select **Terminal**.

1. Press **Ctrl+C**.

   The npx localhost web server stops, with output message: `http-server stopped.`

This is the end of the steps for the sample.  The remainder of this article describes the source code of the sample.


<!-- ====================================================================== -->
## Overview of source code files

The sample Progressive Web App (PWA) consists of the following files, in the `/Demos/pwa-getting-started/` source code directory:

| File | Description | Section below |
|---|---|---|
| `index.html` | The initial webpage defining the UI controls.  The webpage layout of the app.  This sample PWA has a single webpage. | [The app's initial webpage (`index.html`)](#the-apps-initial-webpage-indexhtml) |
| `converter.css` | The Cascading Style Sheets (CSS) file defines styling for the webpage of the app; the layout styling of each UI control in the main page of the app. | [The JavaScript app logic file (`converter.js`)](#the-css-style-sheet-file-convertercss) |
| `converter.js` | App logic, as JavaScript code. | [The JavaScript app logic file (`converter.js`)](#the-javascript-app-logic-file-converterjs) |
| `manifest.json` | Basic information about the app, for the device's operating system to use.  Manifest file that makes the Progressive Web App (PWA) installable on the device, unlike a regular web app. | [The web app manifest (`manifest.json`)](#the-web-app-manifest-manifestjson) |
| `icon512.png` | Image file to represent the app within the browser and on the local device. | [The image file to represent the app (`icon512.png`)](#the-image-file-to-represent-the-app-icon512png) |
| `sw.js` | Service worker that caches front-end files on the local device and serves out the cached files when there's no internet connection. | [The service worker to cache the app's files on the local device (`sw.js`)](#the-service-worker-to-cache-the-apps-files-on-the-local-device-swjs) |
| `README.md` | Brief information about the app, for people who are looking at the directory of source code; contains a link to access the live app from the github.io web server, and a link to the present article.  Brief information about the app: a link to open the app webpage, and a link to the present article. | [The Readme file to explain the directory of source files (`README.md`)](#the-readme-file-to-explain-the-directory-of-source-files-readmemd) |

Details about each file are below.


<!-- ====================================================================== -->
## The app's initial webpage (`index.html`)

`index.html` defines the first page that users see when they access the Progressive Web App (PWA).

[index.html](https://github.com/MicrosoftEdge/Demos/blob/main/pwa-getting-started/index.html) defines the webpage layout of the Progressive Web App (PWA).  The HTML describes the content in the app, including the text, images, text fields, and buttons that appear in the user interface.

```html
<!DOCTYPE html>
<html lang="en-US" dir="ltr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="icon" type="image/png" href="https://edgestatic.azureedge.net/welcome/static/favicon.png">
    <link rel="stylesheet" href="./converter.css">
    <link rel="manifest" href="./manifest.json">
    <title>Temperature converter</title>
  </head>
  <body>
    <form id="converter">
       ...
    </form>
    <script src="./converter.js"></script>
    <script>
      if('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js', { scope: './' });
      }
    </script>
  </body>
</html>
```


<!-- ------------------------------ -->
#### How index.html references the CSS file

`index.html` references the `converter.css` CSS file via a line of code that's inside the `<head>` tag:

```html
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="icon" type="image/png" href="https://edgestatic.azureedge.net/welcome/static/favicon.png">
    <link rel="stylesheet" href="./converter.css">
    <link rel="manifest" href="./manifest.json">
    <title>Temperature converter</title>
  </head>
```


<!-- ------------------------------ -->
#### How index.html loads the JavaScript file

In `index.html`, after the closing `</form>` tag, a `<script>` element loads `converter.js`:

```html
      <output name="output-temp" id="output-temp" for="input-temp input-unit output-unit">68 F</output>
    </form>
    <script src="./converter.js"></script>
```

Conversely, `converter.js` references the form's `id`: `converter` in the following line:

```javascript
const form = document.getElementById('converter');
```


<!-- ------------------------------ -->
#### How `index.html` references the manifest

Inside the `<head>` tag, a `<link>` element references `manifest.json`:

```html
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="icon" type="image/png" href="https://edgestatic.azureedge.net/welcome/static/favicon.png">
    <link rel="stylesheet" href="./converter.css">
    <link rel="manifest" href="./manifest.json">
    <title>Temperature converter</title>
  </head>
```

This `<link rel="manifest" href="./manifest.json">` element links the web app manifest file to the app, making the web app a Progressive Web App (PWA).


<!-- ------------------------------ -->
#### How index.html references the service worker

Within a `<script>` element at the end of the `<body>` tag, the service worker file `sw.js` is registered by calling `navigator.serviceWorker.register()`:

```html
      <output name="output-temp" id="output-temp" for="input-temp input-unit output-unit">68 F</output>
    </form>
    <script src="./converter.js"></script>
    <script>
      if('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js', { scope: './' });
      }
    </script>
  </body>
```


<!-- ====================================================================== -->
## The CSS style sheet file (`converter.css`)

[converter.css](https://github.com/MicrosoftEdge/Demos/blob/main/pwa-getting-started/converter.css) defines the styling for the webpage of the Progressive Web App (PWA), by using Cascading Style Sheet (CSS) rules to organize the HTML content in a layout, and to provide styles for elements.

The web app has CSS style rules, to make the app visually appealing.

The CSS file is `converter.css` in the sample's directory (`/Demos/pwa-getting-started/`), including the following code:

```css
html {
  background: rgb(243, 243, 243);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 15pt;
}

html, body {
  height: 100%;
  margin: 0;
}

body {
  display: grid;
  place-items: center;
}

#converter {
  ...
}

#converter input, #converter select {
  ...
}

#converter #output-temp {
  ...
}
```


<!-- ====================================================================== -->
## The JavaScript app logic file (`converter.js`)

To make the temperature converter work, the sample uses JavaScript code, in `converter.js`.  [converter.js](https://github.com/MicrosoftEdge/Demos/blob/main/pwa-getting-started/converter.js) contains the app logic for the Progressive Web App (PWA).  The JavaScript code adds user interactions to the user interface.

```javascript
const inputField = document.getElementById('input-temp');
const fromUnitField = document.getElementById('input-unit');
const toUnitField = document.getElementById('output-unit');
const outputField = document.getElementById('output-temp');
const form = document.getElementById('converter');

function convertTemp(value, fromUnit, toUnit) {
  if (fromUnit === 'c') {
    ...
    return value;
  }
  throw new Error('Invalid unit');
}

form.addEventListener('input', () => {
  const inputTemp = parseFloat(inputField.value);
  ...
  outputField.value = (Math.round(outputTemp * 100) / 100) + ' ' + toUnit.toUpperCase();
});
```


<!-- ====================================================================== -->
## The web app manifest (`manifest.json`)
<!-- a modified version of this section is in /how-to/index.md & /samples/temperature-converter.md -->

[manifest.json](https://github.com/MicrosoftEdge/Demos/blob/main/pwa-getting-started/manifest.json) provides basic information about the Progressive Web App (PWA), for the device's operating system to use.  The JSON code describes the app to the host operating system.

```json
{
  "lang": "en-us",
  "name": "Temperature converter app",
  "short_name": "Temperature converter",
  "description": "A basic temperature converter application that can convert to and from Celsius, Kelvin, and Fahrenheit",
  "start_url": "./",
  "background_color": "#2f3d58",
  "theme_color": "#2f3d58",
  "orientation": "any",
  "display": "standalone",
  "icons": [
      {
          "src": "./icon512.png",
          "sizes": "512x512"
      }
  ]
}
```

See also:
* [The web app manifest (`manifest.json`)](../how-to/index.md#the-web-app-manifest-manifestjson) in _Get started developing a PWA_.


<!-- ====================================================================== -->
## The image file to represent the app (`icon512.png`)

[icon512.png](https://github.com/MicrosoftEdge/Demos/blob/main/pwa-getting-started/icon512.png) is a 512x512 pixel app icon image.  This image file represents the Progressive Web App (PWA), such as in the Windows taskbar and Windows Start Menu:

![Icon file](./temperature-converter-images/icon-in-taskbar.png)


<!-- ====================================================================== -->
## The service worker to cache the app's files on the local device (`sw.js`)
<!-- a modified version of this section is in /how-to/index.md & /samples/temperature-converter.md -->

[sw.js](https://github.com/MicrosoftEdge/Demos/blob/main/pwa-getting-started/sw.js) is a service worker that manages caching files that are part of the Progressive Web App (PWA), caching the files to the local drive and serving them out when there's no internet connection.

```javascript
const CACHE_NAME = `temperature-converter-v1`;
    
// Use the install event to pre-cache all initial resources.
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    cache.addAll([
      './',
      './converter.js',
      './converter.css'
    ]);
  })());
});

self.addEventListener('fetch', event => {
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);

    // Get the resource from the cache.
    const cachedResponse = await cache.match(event.request);
    if (cachedResponse) {
      return cachedResponse;
    } else {
        try {
          // If the resource was not in the cache, try the network.
          const fetchResponse = await fetch(event.request);
    
          // Save the resource in the cache and return it.
          cache.put(event.request, fetchResponse.clone());
          return fetchResponse;
        } catch (e) {
          // The network failed
        }
    }
  })());
});
```

See also:
* [The service worker to cache the app's files on the local device (`sw.js`)](../how-to/index.md#the-service-worker-to-cache-the-apps-files-on-the-local-device-swjs) in _Get started developing a PWA_.


><!-- ====================================================================== -->
## The Readme file to explain the directory of source files (`README.md`)

[README.md](https://github.com/MicrosoftEdge/Demos/tree/main/pwa-getting-started#readme) is technically not part of the sample's source code.

The Readme contains brief information about the Progressive Web App (PWA):
* A link to open the app webpage.
* A link to the [Temperature converter sample](../samples/temperature-converter.md) article.

The main directory for a Progressive Web App (PWA)'s source code can contain a Readme file.  The app's end-users don't see the source code directory or the Readme file.


<!-- ====================================================================== -->
## Next steps

Next, you can:

* Make additional minor modifications of the sample's code.

* Copy and paste the entire sample directory `/Demos/pwa-getting-started/` and modify the code to create your own Progressive Web App (PWA).


<!-- ====================================================================== -->
## See also
<!-- all links in article -->

* [Use PWAs in Microsoft Edge](../ux.md)
* [Get started developing a PWA](../how-to/index.md)

Localhost:
* [http://localhost:8080](http://localhost:8080) - or equivalent URLs output by the `npx http-server` command.

GitHub:
* [Temperature converter](https://microsoftedge.github.io/Demos/pwa-getting-started/) sample hosted at github.io.
* [MicrosoftEdge / Demos](https://github.com/MicrosoftEdge/Demos) repo.
* [Cloning a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

VS Code:
* [Visual Studio Code](https://code.visualstudio.com) and then download and install it.

git:
* [Downloads](https://git-scm.com/downloads) at git-scm.com.

Node.js:
* [Node.js](https://nodejs.org).
* [Download Node.js](https://nodejs.org/download)
