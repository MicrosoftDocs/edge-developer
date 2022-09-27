---
title: Use the extension with the Visual Studio Code debugging workflow
description: Use the extension with the Visual Studio Code debugging workflow in the Microsoft Edge Developer Tools extension for Visual Studio Code.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 09/14/2022
---
# Use the extension with the Visual Studio Code debugging workflow

JavaScript debugging is built in to Visual Studio Code.  You can debug in Chrome, Microsoft Edge, or Node.js without installing any other extensions.  If you debug using Microsoft Edge, you can start Microsoft Edge DevTools from the JavaScript debugger.


<!-- ====================================================================== -->
## Debugging
<!-- todo: what sets this kind of debugging apart from VS Code's and from DevTool's?  Clarify h2, improve .md filename -->

<!-- todo:
add missing steps
test steps from multiple starting states
retake screenshots to show assumed starting state/context
-->

To start debugging:

1. Open VS Code or a new VS Code window.

1. Select File > Open Folder.  Open a folder that contains a webpage, typically an `.html` file and a `.js` file and a `.css` file.

   These steps assume that the **Edge DevTools** tab is not open in Visual Studio Code, and that the **Edge DevTools: Browser** tab is not open in Visual Studio Code, and that there's not a browser instance running under control of the extension such as Microsoft Edge containing the message "Microsoft Edge is being controlled by automated test software".

1. Start the extension by doing ABC.  The ABC tab opens, and the ABC tab opens.  Another way is to ABC, though the Debug toolbar won't be open, this way.

1. Do any of the following:

   *  In Visual Studio Code, click the **Run** menu, and then click **Start Debugging**.  Or, press `F5`.

   *  On the menu bar, click the **Debug** icon, and then click the **Run and Debug** button, as shown below.

   *  Open the Visual Studio Code command palette, start typing the word **debug**, and then select **Debug: Open Link**.<!--todo: mention **Select environment** text box" as shown in capture-->
    
   ![Start Microsoft Edge DevTools from the JavaScript debugger](./debugging-workflow-images/start-session.png)<!--todo: make capture match the above text-->

1. Select **Edge**.<!--todo: clarify; **Edge: Launch**?  describe specific UI/controls: link or button or command/list item-->  On the debug toolbar, notice the **Inspect** button:

   ![The Inspect button on the debug toolbar](../microsoft-edge-devtools-extension-images/inspect-button.png)

1. Select **Inspect** to open Microsoft Edge DevTools inside Visual Studio Code.

   The first time you select **Inspect**, the editor prompts you to install the extension, [Microsoft Edge Developer Tools for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools).

   After the Microsoft Edge DevTools extension is installed, when you select **Inspect**, Microsoft Edge DevTools opens inside of Visual Studio Code:

   ![The Inspect button opens Microsoft Edge DevTools inside Visual Studio Code](../microsoft-edge-devtools-extension-images/tools-inside.png)


<!-- ====================================================================== -->
## Automatically opening the browser and DevTools when debugging in Visual Studio Code

The main way to open a webpage for debugging, in debug mode, is right-click a `.html` file in **Explorer** in VS Code, then select **Open with Edge > Open Browser with DevTools**.

That approach opens the following UI components in Visual Studio Code:
*  The **Edge DevTools** tab.
*  The **Edge DevTools: Browser** tab (or an external browser window if you don't use headless mode).
*  The Debug toolbar.
*  The **Debugger** pane, including the **Watch** pane.
*  The **Debug Console** at bottom of window.

![Tabs from right-clicking an HTML file in Explorer](./debugging-workflow-images/tabs-from-right-click-html-explorer.png)


But using this other approach, you can ABC.  This way, when you ABC, the ABC ABC, without you having to ABC every time you want to debug the webpage.

To debug your project, you might want to change the default page that opens in Microsoft Edge in Visual Studio Code.

This approach involves editing `launch.json`.  See also [The launch.json file for DevTools extension](./launch-json.md).


To change from the default webpage to another webpage, to open in the **Edge DevTools** tab and the **Edge DevTools: Browser** tab (or an external browser window if you don't use headless mode):


To customize launch and debug:

1. In Visual Studio Code, select **File** > **New Window**.  Notice that no folder is open.

1. On the **Activity Bar**, select **Microsoft Edge Tools**.

1. In the **Microsoft Edge Tools: Targets** panel, click the **Open Folder** button.

1. Select your project folder that contains the new default page (such as `index.html`) that you want to display in the browser instance when you begin debugging your webpage in Visual Studio Code.

   The first time you open a folder, you must confirm that you trust the authors of files in this folder.  You can also select the checkbox **Trust the authors of all files in the parent folder**:

   ![Do you trust the authors in the files of this folder?](../microsoft-edge-devtools-extension-images/trust.png)

   The first time you complete this process, you must also click the **Microsoft Edge Tools** button in the **Activity Bar** again.

   The **Microsoft Edge Tools: Targets** panel now displays two buttons: **Launch Instance** and **Generate launch.json**:

   ![The 'Microsoft Edge Tools: Targets' panel displays 'Launch Instance' and 'Generate launch.json' buttons](../microsoft-edge-devtools-extension-images/targets-buttons.png)

1. Select **Generate launch.json** to create a `launch.json` in your project.

1. In `launch.json`, add the URL of your project.  This can be a local file path.  If you leave the URL as-is, the default, **Success** page is displayed.

1. Save `launch.json`.

Now, when you select **Debug** when your project folder is open in Visual Studio Code, the **Edge DevTools** tab opens, showing content for the page that you specified in `launch.json`.  Also, the **Edge DevTools: Browser** tab opens, displaying the rendered page that you specified in `launch.json`.


<!-- ====================================================================== -->
## Extension Development Host

This is not intended to be used as part of using the Microsoft Edge DevTools extension for Visual Studio Code.

1. In Visual Studio Code, open the **Run and Debug** pane.

1. Click the **Run and Debug** button.  The **Select debugger** drop-down list opens.

1. In the **Select debugger** drop-down list, select **VS Code Extension Development**:

   ![The 'VS Code Extension Development' debugger menuitem](./debugging-workflow-images/run-and-debug-vs-code-extension-development.png)

   The Debug toolbar opens:

   Also a new Visual Studio Code window opens, titled **[Extension Development Host] Visual Studio Code**:

   ![The '[Extension Development Host] Visual Studio Code' window](./debugging-workflow-images/extension-development-host.png)

1. In the Debug Toolbar, click the **Stop** button.  The **[Extension Development Host] Visual Studio Code** window closes, and the debug toolbar closes.


<!-- ====================================================================== -->
## See also

* [Launch configurations](https://code.visualstudio.com/Docs/editor/debugging#_launch-configurations) in the _Debugging_ article for Visual Studio Code.
* [Microsoft Edge DevTools extension for Visual Studio Code](../microsoft-edge-devtools-extension.md)
