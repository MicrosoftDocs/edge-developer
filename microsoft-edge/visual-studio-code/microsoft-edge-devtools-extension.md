---
title: Microsoft Edge DevTools extension for Visual Studio Code
description: Using the Microsoft Edge Developer Tools extension for Visual Studio Code.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 05/19/2022
---
# Microsoft Edge DevTools extension for Visual Studio Code

<!-- lexicon (except when quoting a UI string):
Microsoft Edge DevTools extension for Visual Studio Code
Microsoft Edge DevTools extension
-->

The [Microsoft Edge DevTools extension for Visual Studio Code](https://aka.ms/devtools-for-code) lets you use the Microsoft Edge Browser and Developer Tools right from within Visual Studio Code.

![Microsoft Edge Developer Tools and browser preview showing in VS Code](media/devtools-extension-v201.msft.png)

The extension allows you to:

* [Get live analysis of problems in your source code](#inline-and-live-issue-analysis).
* [Start a new browser instance with developer tools for your project](#opening-a-browser-instance-in-the-extension).
* [Emulate different devices and see your project in different display modes](#device-and-state-emulation).
* [View the runtime DOM structure and layout of your page using the **Elements tool**](#opening-source-files-from-the-elements-tool).
* [Analyse and change styles (CSS) of your project with live preview and live changes to your project's source files](#syncing-live-changes-from-the-styles-tool-by-using-css-mirror-editing).
* [Analyse site traffic using the **Network tool**](#network-tool-integration).
* [Log information, try out JavaScript and accesss the Window/DOM using Use the **Console tool**](#console-integration).
* [Inspect storage and Service Workers using the **Application tool**](#application-tool-integration).
* [Use the extension in the Visual Studio Code debugging workflow](#automatically-opening-the-browser-and-devtools-when-debugging-in-visual-studio-code). 

<!-- ====================================================================== -->
## Installing the Microsoft Edge DevTools extension

To install the Microsoft Edge DevTools extension from within Visual Studio Code:

1. In Visual Studio Code, navigate to **Extensions**.  To do this, you can press `Ctrl`+`Shift`+`X` on Windows/Linux or `Command`+`Shift`+`X` on macOS.

1. Search the Marketplace for the extension **Microsoft Edge Tools for VS Code**, select the extension, and then select **Install**.

  ![Installing the Microsoft Edge DevTools extension for Visual Studio Code.](media/vscode-edge-tools-install.png)

Or, you can [download the Microsoft Edge DevTools extension](https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools) from Visual Studio Marketplace.

<!-- ====================================================================== -->
## Inline and live issue analysis

Issues in your source code are highlighted with wavy underlines. You can inspect the issue and get detailed information about what the problem is, how to fix it, and where to find more information.  To inspect the issue, select the code that has the wavy underline:

![An accessibility issue reported inside a piece of code showing how to fix the problem, and where to find more information.](media/edge-devtools-for-vscode-inline-issue-reporting.msft.png)

To see all the issues in the file, select **View Problem**:

![A highlighted issue in the source code with a navigation bar explaining the problem and buttons to move to the next and previous issues.](media/edge-devtools-for-vscode-navigating-issues.msft.png)

The **Problems** tab in the lower panel lists all the issues in the currently open files:

![The Problems tab in the lower panel of Visual Studio Code, listing all the issues that are found in the project's files.](media/edge-devtools-for-vscode-issues-in-lower-panel.msft.png)

Issues are evaluated live while you edit your code.  As you type, you get feedback about any issues that are found, and how to fix them:

![A possible issue being explained on an output element.](media/edge-devtools-for-vscode-live-issue-reporting.msft.png)

<!-- ====================================================================== -->
## Modes for using Microsoft Edge DevTools in Visual Studio Code

You can use this extension in one of three modes:
* Launch Microsoft Edge in a new window, and go to your web application.
* Attach to a running instance of Microsoft Edge.
* Open a new instance of Microsoft Edge inside Visual Studio Code.

<!-- ====================================================================== -->
## Opening a browser instance in the extension

There are various ways to start a new browser session in the extension:

1. You can open the context menu on any html file in the file explorer and select `Open with Edge` and either choose `Open Browser` or `Open Browser with DevTools`.
    
    ![Opening the context menu on any html file in the file explorer shows options to open with Edge with or without DevTools](media/context-menu-open-in-code.msft.png)

1. You can select the **Microsoft Edge Tools** icon in the **Activity Bar**.
    This lets you launch an instance of Edge or generate a `launch.json` file to automate the debugging workflow:

    ![Microsoft Edge DevTools for Visual Studio Code extension.](media/edge-devtools-for-vscode-extension-icon.png)

    Selecting **Launch Instance** opens a browser preview and the **Edge DevTools** tab in Visual Studio Code:

    ![Select Launch Instance to open the browser in Visual Studio Code.](media/devtools-extension-new-browser-instance.png)

1. You can open the browser as part of a [debugging session](#browser-debugging-with-microsoft-edge-devtools-integration-in-visual-studio-code)

The extension will open a new browser as an embedded browser in Visual Studio Code. This `Devtools: Browser preview` tab can be moved anywhere within the editor. You can use it side by side with your source code or split the panes and have the browser preview below your code. 

![Extension open in VS Code showing the browser preview below the source code and the DevTools to the right](media/browser-split-down.png)

If you want to have an external browser window, you can change the default setting. Select **Settings** > **Headless mode** and uncheck the option to open the browser in headless mode.

![To open a new browser window instead of using the embedded browser, select Settings > Headless mode.](media/edge-devtools-for-vscode-settings-headless.png)


<!-- ====================================================================== -->
## Device and state emulation

In the Edge DevTools: Browser preview tab, the emulation toolbar on the bottom enables you to simulate different environments:

![Browser preview in the extension with emulation tool bar showing](media/edge-for-code-screencast-v2.msft.png)

<!-- Toolbar item 1. Emulate devices: -->
In the **Emulate devices** dropdown menu, you can select from a number of different devices.  When you select a device, the viewport resizes to the correct measurements and simulates the touch interface.  For example, an iPhone:

![Browser preview in the extension showing the web product in an emulated phone layout](media/edge-for-code-screencast-v2-emulating.msft.png)

<!-- Toolbar item 2. Width: -->
<!-- Toolbar item 3. Height: -->
Click the **Width** and **Height** dropdown menus to change the viewport dimensions: ![Width and Height dropdown menus.](media/width-height.png)

<!-- Toolbar item 4. Rotate: -->
Click the **Rotate** button (![The Rotate button.](media/rotate-button.png)) to rotate the viewport.

<!-- Toolbar item 5. Emulate CSS media features: -->
To emulate CSS media queries, click the **Emulate CSS media features** (![Emulate CSS media features.](media/emulate-css-media-features-button.png)) button.  This button enables you to test how your product looks in print mode.  You can switch between dark and light mode, and emulate forced colors:

![Browser preview in the extension showing the web product in forced color mode](media/edge-for-code-forced-colours.msft.png)

<!-- Toolbar item 6. Emulate vision deficiencies: -->
Click the **Emulate vision deficiencies** (![The Emulate vision deficiencies button.](media/emulate-vision-deficiencies-button.png)) button to try the experience of the current web project with different visual deficiencies.  This button lets you test your product in a blurred mode or in different color deficiencies:

![Browser preview in the extension showing the web product in a blurred emulation](media/edge-for-code-blurred.msft.png)

<!-- ====================================================================== -->
## Opening source files from the Elements tool

One of the features of the **Elements** tool is that it displays the source file that applied styles and event handlers to a selected node in the DOM tree.  Source files appear in the form of links to a URL.  Selecting a link opens that file in the Visual Studio Code editor:

![Opening source files from Elements tool.](media/edge-devtools-for-vscode-elements-files.png)

<!-- ====================================================================== -->
## Syncing live changes from the Styles tool by using CSS Mirror Editing

The Styles tool in Microsoft Edge DevTools is excellent for debugging and tweaking your CSS.  One problem is that although these changes show up live in the browser, they aren't reflected in your source files.  This means that at the end of your CSS debugging session, you need to copy and paste what you changed back into your source files.

CSS Mirror Editing is a feature of the Microsoft Edge DevTools extension that works around that problem. Any change made in the Styles tool of DevTools also changes the file in your workspace.  CSS Mirror editing is enabled by default in the extension.

In the following example, we have `index.html` currently open in Visual Studio Code, and the Microsoft Edge DevTools extension is open.  When we select the flexbox icon in the `.searchbar` CSS selector and change the `flex-direction` to `column`, we not only see the change in the browser and in DevTools, but Visual Studio Code also automatically navigates to the correct style sheet file and the appropriate line number, and inserts the `flex-direction: column` CSS code:

![Selecting the flexbox icon in the Styles tool to create a CSS change.](media/css-mirror-editing-start.msft.png)

Changing the CSS setting created a new line of code in the correct CSS source file:

![Changing the CSS setting created a new line of code in the correct CSS source file.](media/css-mirror-editing-changed-file.msft.png)

You can edit any selector or create new ones in the Styles tool and all changes will get mirrored in the right CSS source file. The extension only changes the file, it doesn't automatically save the changes back to your hard drive. This is a security measure to make sure you don't accidentally overwrite any of your code.

You can enable and disable CSS Mirror Editing by checking and unchecking the box in the **Styles** panel of the **Elements** tool, or by using the Command Menu and searching for `mirror`:

![You can check or uncheck a box in the Styles panel of the Elements tool to enable or disable CSS mirroring](media/css-mirror-editing-checkbox.msft.png)

Using the command menu to turn CSS Mirror Editing on or off:

![Using the command menu to focus the CSS mirror editing view and turn CSS Mirror Editing on or off.](media/css-mirror-editing-command.msft.png)

### Sourcemap support

CSS Mirroring also supports abstractions like Sass or CSS-in-JS when you have set up your project to produce sourcemaps. We have a tracking issue on GitHub and welcome any feedback on how this could be improved: [CSS Mirror Editing with Sourcemaps: Known Issues and Feedback](https://github.com/microsoft/vscode-edge-devtools/issues/965).

## Network Tool integration

The **Network Tool** allows you to monitor network traffic and change network conditions of your application right inside Visual Studio Code. 

![The Network tool inside the Edge DevTools for Visual Studio Code extension](media/vscode-extension-network.png)

You can:

* Analyse the network traffic and find out why some resources aren't loaded
* Simulate different network conditions like being offline or having a slow connection
* Disable any caching that might make it hard to debug your application.
* Simulate different user agents to see how your product appears to a search engine bot or a browser you can't test in.

<!-- ====================================================================== -->
## Console integration

The [Console](/microsoft-edge/devtools-guide-chromium/console/) tool is available inside the extension and you can do everything you are used to when using DevTools inside the browser. 

![The DevTools Console inside the extension as an own tab.](media/edge-devtools-for-vscode-console-full.png)

You can see your [log messages](/microsoft-edge/devtools-guide-chromium/console-log), access the `window` object and use the [DOM interaction convenience methods](/microsoft-edge/devtools-guide-chromium/console-dom-interaction). You can also [filter the Console](/microsoft-edge/devtools-guide-chromium/console-filters) and set [live expressions](/microsoft-edge/devtools-guide-chromium/live-expressions). 

You can also use the Console alongside the Elements tool if you open it in the lower panel:

![The DevTools Console inside the extension alongside the elements tool.](media/edge-devtools-for-vscode-console-in-elements.png)

If you launch the extension from the Run and Debug workflow, the [Debug Console of Visual Studio Code](https://code.visualstudio.com/Docs/editor/debugging) gives you most of the functions of the DevTools [Console](/microsoft-edge/devtools-guide-chromium/console/) inside of Visual Studio Code, but no filtering options and a more basic results display:

![The DevTools Console is available when the extension is launched from a Run and Debug workflow.](media/edge-devtools-for-vscode-console-integration.png)


<!-- ====================================================================== -->
## Application Tool integration

The **Application Tool** allows you to inspect the various parts of your application. 

![The Application tool inside the Edge DevTools for Visual Studio Code extension](media/edge-extension-application-tool.png)

You can:

* Check different storage options like Cookies, LocalStorage, SessionStorage and IndexedDB.
* Analyze the cache of your application.
* Analyze services like Notification, Payment handler or background sync.

<!-- ====================================================================== -->
## Use the extension with the Visual Studio Code debugging workflow

JavaScript debugging is built in to Visual Studio Code.  You can debug in Chrome, Microsoft Edge, or Node.js without installing any other extensions.  If you debug using Microsoft Edge, you can start Microsoft Edge DevTools from the JavaScript debugger.

1. To start debugging, do either of the following:
   *  Press **F5**, or on the menu bar select the **Debug** icon and then select **Run and debug**.
   *  Open the Visual Studio Code command palette and then select **Debug: Open Link**.
    
   ![Start Microsoft Edge DevTools from the JavaScript debugger.](media/edge-devtools-for-vscode-start-session.png)

1. Select **Edge**.  On the debug toolbar, notice the **Inspect** button:

   ![The Inspect button on the debug toolbar.](media/edge-devtools-for-vscode-inspect-button.png)

1. Select **Inspect** to open Microsoft Edge DevTools inside Visual Studio Code.

   The first time you select **Inspect**, the editor prompts you to install the extension, [Microsoft Edge Developer Tools for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools).

   After the Microsoft Edge DevTools extension is installed, when you select **Inspect**, Microsoft Edge DevTools opens inside of Visual Studio Code:

   ![The Inspect button opens Microsoft Edge DevTools inside Visual Studio Code.](media/edge-devtools-for-vscode-tools-inside.png)

### Automatically opening the browser and DevTools when debugging in Visual Studio Code

To debug your project, you might want to change the default page that opens in Microsoft Edge in Visual Studio Code.  To change the default page to your project's website:

1. In Visual Studio Code, select **File** > **New Window**.  Notice that no folder is open.

1. On the **Activity Bar**, select **Microsoft Edge Tools**.

1. In the **Microsoft Edge Tools: Targets** panel, select the **open a folder** link.

1. Select your project folder with the new default page to display when you begin debugging in Visual Studio Code.

   The first time you open a folder, you must confirm that you trust the authors of files in this folder.  You can also select the checkbox **Trust the authors of all files in the parent folder**:

   ![Do you trust the authors in the files of this folder?](media/edge-devtools-for-vscode-trust.png)

   The first time you complete this process, you must also select **Microsoft Edge Tools** again.

   The **Microsoft Edge Tools: Targets** panel now displays two buttons: **Launch Instance** and **Generate launch.json**:

   ![The 'Microsoft Edge Tools: Targets' panel displays 'Launch Instance' and 'Generate launch.json' buttons.](media/edge-devtools-for-vscode-targets-buttons.png)

1. Select **Generate launch.json** to create a `launch.json` in your project.

1. In `launch.json`, add the URL of your project. If you leave URL empty, the default page is displayed.

1. Save `launch.json`.

When you choose to debug your project in Visual Studio Code it will automatically launch the browser and open the Developer Tools showing the URL you specified in your `launch.json`. 

#### See also

* [Launch configurations](https://code.visualstudio.com/Docs/editor/debugging#_launch-configurations) in the _Debugging_ article for Visual Studio Code.

<!-- ====================================================================== -->
## Changing the extension settings

You can customize the Visual Studio Code extension to your needs.

1. In Visual Studio Code, on the **Activity Bar**, select **Microsoft Edge Tools**.

1. In **Microsoft Edge Tools** > **Targets**, select **More Actions** (...) to the right of the word **TARGETS**, and then select **Open Settings**.

   If you are using a mouse, to access **More Actions** (...), select the **Targets** pane or hover over it:

   ![The More Actions icon on the Microsoft Edge Tools: Targets panel, to change the settings of the DevTools extension.](media/edge-tools-open-settings-icon.msft.png)


### Reloading the extension after changing settings

Some settings have a note that reads **(reload required after changing)**.  For such a setting to take effect:

1. Close the browser opened by the extension, or in the **Microsoft Edge Tools** > **Targets** pane, select **Close instance** (`X`).  This action automatically closes the **Edge DevTools** tab as well.

1. In the **Microsoft Edge Tools** > **Targets** pane, select the **Launch Instance** button.  Microsoft Edge opens, and the **Edge DevTools** tab is displayed.


<!-- ====================================================================== -->
## Getting in touch with the Microsoft Edge DevTools Extension team

Send your feedback by [filing an issue](https://github.com/Microsoft/vscode-edge-devtools/issues/new) in the `vscode-edge-devtools` repo.

Your contributions are welcome, to help make the Microsoft Edge DevTools extension better.  Find everything you need to get started in the [vscode-edge-devtools](https://github.com/Microsoft/vscode-edge-devtools) repo.


<!-- ====================================================================== -->
## See also

*  [vscode-edge-devtools repo](https://github.com/microsoft/vscode-edge-devtools) - source code for the Microsoft Edge Developer Tools extension for Visual Studio Code, at GitHub.
