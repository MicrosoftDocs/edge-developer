---
description: How to use Microsoft Edge Developer Tools for Visual Studio Code extension
title: Microsoft Edge Developer Tools for Visual Studio Code extension 
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/30/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, vs code, visual studio code, microsoft edge developer tools, microsoft edge developer tools extension
---

# Microsoft Edge Developer Tools for Visual Studio Code extension  

The Microsoft Edge Developer Tools for Visual Studio Code extension allows you to use the browser’s Elements and Network tool from within the editor. 
Without leaving Visual Studio Code, use Microsoft Edge Developer Tools (DevTools) to connect to an instance of Microsoft Edge with the following functionality.
* View the runtime HTML structure.
* Change the layout.
* Change styles (CSS).
* Read console messages.
* View network requests. 

> [!NOTE]
> This extension only works with Microsoft Edge (versions 80.0.361.48 and later).

There are two ways to open Microsoft Edge Developer Tools.
* From the activity bar in Visual Studio Code.
* From the JavaScript Debugger in Visual Studio Code.

This article describes the Microsoft Edge Developer Tools for Visual Studio Code extension. You can [download the extension][downloadExtension] and [check the source code][checkSourceCode].

## Opening Microsoft Edge Developer Tools with Visual Studio Code  

To open the tools panel, choose the Microsoft Edge Tools icon from the Activity bar.

The Microsoft Edge Developer Tools for Visual Studio Code extension allows you to launch an instance of Edge or generate a `launch.json` file to automate the debugging workflow. 

:::image type="complex" source="./media/edge-devtools-for-vscode-extension-icon.png" alt-text="Microsoft Edge DevTools for Visual Studio Code extension" lightbox="./media/edge-devtools-for-vscode-extension-icon.png":::
   Microsoft Edge DevTools for Visual Studio Code extension  
:::image-end:::

Selecting **Launch Instance** opens a browser window and the Edge developer tools in Visual Studio Code.   

:::image type="complex" source="./media/edge-devtools-for-vscode-launch-instance.png" alt-text="Select Launch Instance to open the browser in Visual Studio Code" lightbox="./media/edge-devtools-for-vscode-launch-instance.png":::
   Select Launch Instance to open the browser in Visual Studio Code  
:::image-end:::

Use the Developer Tools extension in VS Code to inspect an HTML Element in Microsoft Edge. For example, select **Success!** In the browser and notice that the Elements tool opens with the HTML highlighted. 

:::image type="complex" source="./media/edge-devtools-for-vscode-elements.png" alt-text="Elements tool open with HTML highlighted" lightbox="./media/edge-devtools-for-vscode-elements.png":::
   Elements tools open with HTML highlighted  
:::image-end:::

## Using Microsoft Edge Developer Tools in Visual Studio Code  

You can use this extension in one of three modes:
* Launch Microsoft Edge in a new window, and navigate to your web application.
* Attach to a running instance of Microsoft Edge.
* Open a new instance of Microsoft Edge inside Visual Studio Code. 

Each mode requires you to serve your web application from a local web server, which is started from either a Visual Studio Code task or from the command line. Use the URL parameter inside the `launch.json` file to tell Visual Studio Code which URL to open.

### Open a new browser instance

Complete the following steps to open a browser instance from Visual Studio Code. 

1. On the Activity Bar, choose **Microsoft Edge Tools** to open the Microsoft Edge Tools: Targets panel.

1. On the Microsoft Edge Tools: Targets panel, choose **Launch Instance**. Microsoft Edge opens displaying a default page with guidance for more information. Also, the DevTools panel opens in Visual Studio Code.
  
    :::image type="complex" source="./media/edge-devtools-for-vscode-targets-launch.png" alt-text="Microsoft Edge and DevTools panel open in Visual Studio Code" lightbox="./media/edge-devtools-for-vscode-targets-launch.png":::
       Microsoft Edge and DevTools panel open in Visual Studio Code
    :::image-end:::

1. In the Microsoft Edge address bar, navigate to the URL of the project that you want to debug.

### Change the default page to your project website
To debug your project, you may want to change the default page that opens in Microsoft Edge in Visual Studio Code. To change the default page to your project’s website, complete the following steps. 
1. In Visual Studio Code, choose **File** > **New Window**. Notice that no folder is open. 
1. On the Activity Bar, choose **Microsoft Edge Developer Tools**.
1. In the Microsoft Edge Tools: Targets panel, choose the **open a folder** link. 
1. Select your project folder with the new default page to display when you begin debugging in Visual Studio Code.

    The first time you open a folder, you must confirm that you trust the authors of files in this folder. You can also choose the Trust the authors of all files in the parent folder checkbox.

    :::image type="complex" source="./media/edge-devtools-for-vscode-trust.png" alt-text="Do you trust the authors in the files of this folder?" lightbox="./media/edge-devtools-for-vscode-trust.png":::
       Do you trust the authors in the files of this folder?  
    :::image-end:::

    The first time you complete this process you must also select **Microsoft Edge Developer Tools** again.

    The Microsoft Edge Tools: Targets panel now displays two buttons: **Launch Instance** and **Generate launch.json**.

    :::image type="complex" source="./media/edge-devtools-for-vscode-targets-buttons.png" alt-text="Microsoft Edge Tools: Targets panel displays Launch Instance and Generate launch.json buttons" lightbox="./media/edge-devtools-for-vscode-targets-buttons.png":::
       Microsoft Edge Tools: Targets panel displays Launch Instance and Generate launch.json buttons  
    :::image-end:::

1. Choose **Generate launch.json** to create a `launch.json` in your project.
1. In `launch.json`, add the URL of your project. If you leave URL empty, the default page displays. 
1. Save `launch.json`.
1. Choose **Launch Project** to verify that Microsoft Edge opens and displays the URL you entered. Also, DevTools opens in Visual Studio Code.

## Change the extension settings

In version 1.1.6 or later, you can customize the DevTools in the Visual Studio Code extension. To customize the settings, in the Microsoft Edge Tools: Targets panel, choose **…**, and then choose **Open Settings**.

You can also review the changes made to the extension. To view the changelog, in the Microsoft Edge Tools: Targets panel, choose **…**, and then choose **View Changelog**.

### Change to headless mode

By default, the extension launches Microsoft Edge in a new window, which displays another browser icon on the task bar.

Choose **Toggle screencast** to display the browser inside the editor, or hide the browser if already displayed. 

:::image type="complex" source="./media/edge-devtools-for-vscode-toggle-screencast.png" alt-text="Toggle screencast to view the browser inside the editor" lightbox="./media/edge-devtools-for-vscode-toggle-screencast.png":::
   Toggle screencast to view the browser inside the editor 
:::image-end:::

You can also choose **Settings** > **Headless mode** to use only the screencast browser inside Visual Studio Code.

:::image type="complex" source="./media/edge-devtools-for-vscode-settings-headless.png" alt-text="Choose Settings > Headless to use only the screencast browser inside Visual Studio Code" lightbox="./media/edge-devtools-for-vscode-settings-headless.png":::
   Choose Settings > Headless to use only the screencast browser inside Visual Studio Code  
:::image-end:::

## Opening source files from the Elements tool
One of the features of the Elements tool is that it displays the source file that applied styles and event handlers to a selected node in the DOM tree. Source files appear in the form of links to a URL. Selecting a link opens that file in the Visual Studio Code editor.

:::image type="complex" source="./media/edge-devtools-for-vscode-elements-files.png" alt-text="Open source files from Elements tool" lightbox="./media/edge-devtools-for-vscode-elements-files.png":::
   Open source files from Elements tool  
:::image-end:::

## Setting up your project to show live changes in the extension
By default, the extension does not track live changes to the code as you write. If you want the browser to automatically refresh when you change a file, set up a live reload environment. This requires [Node.js][NodeJS] and [NPM][NPM] on your machine.
The following example shows a folder of production files on your hard drive called `my-project`. Change the file names and locations as needed for your environment.

1. Install Node.js and the reload NPM package.
    1. Download and install [Node.js][NodeJS].
    1. To install the [reload NPM package][NPM], open a command prompt and run `npm install reload -g` to install the package globally.
1. Attach the extension to your live reloading project.
    1. Navigate to the `my-project` folder in your terminal window and run `reload` to start the local server.
    1. In Visual Studio Code, open the `my-project` folder.
    1. Go to the extension and launch a Microsoft Edge browser instance.
    1. In Microsoft Edge, navigate the extension to `localhost:8080/{file name you want to open}`.
    1. All changes saved in this folder now trigger a browser refresh.

## Browser debugging with Microsoft Edge Developer Tools integration in Visual Studio Code
JavaScript debugging is now built in to Visual Studio Code. Starting with Version 1.5.7 of Visual Studio Code, you can debug in Chrome, Microsoft Edge, or Node.js without installing any other extensions. If you debug using Microsoft Edge, you can start Microsoft Edge Developer Tools with the JavaScript debugger.
1. To start a session, use either of the following methods:
    * Choose **F5**, or on the menu bar choose the **Debug** icon and choose **Run and debug**.
    * Open the Visual Studio Code command palette and choose **Debug: Open Link**.

    :::image type="complex" source="./media/edge-devtools-for-vscode-start-session.png" alt-text="Start Microsoft Edge Developer Tools with the JavaScript debugger" lightbox="./media/edge-devtools-for-vscode-start-session.png":::
       Start Microsoft Edge Developer Tools with the JavaScript debugger  
    :::image-end:::

1. Choose **Edge**.
    On the debug toolbar, notice the new Inspect button 

    :::image type="complex" source="./media/edge-devtools-for-vscode-inspect-button.png" alt-text="Inspect button now displayed on debug toolbar" lightbox="./media/edge-devtools-for-vscode-inspect-button.png":::
       Inspect button now displayed on debug toolbar 
    :::image-end:::

1. Choose **Inspect** to open Microsoft Edge Developer Tools inside Visual Studio Code.
    The first time you choose **Inspect**, the editor prompts you to install the [Microsoft Edge Developer Tools for Visual Studio Code extension][https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools].

    After installation is complete, when you choose **Inspect** it opens Microsoft Edge Developer Tools inside Visual Studio Code.

    :::image type="complex" source="./media/edge-devtools-for-vscode-tools-inside.png" alt-text="Inspect button opens Microsoft Edge Developer Tools inside Visual Studio Code" lightbox="./media/edge-devtools-for-vscode-tools-inside.png":::
       Inspect button opens Microsoft Edge Developer Tools inside Visual Studio Code
    :::image-end:::

    Now you can inspect the DOM, change CSS, and see network requests of your project running in the browser without leaving Visual Studio Code.
    
    You can also use the Debug Console in the editor to interact with the document in the browser. You have full access to the window object and can use the [Console Utilities API][ConsoleUtilitiesAPI].

    :::image type="complex" source="./media/edge-devtools-for-vscode-debug-console.png" alt-text="Debug Console in editor interacts with document open in browser" lightbox="./media/edge-devtools-for-vscode-debug-console.png":::
       Debug Console in editor interacts with document open in browser  
    :::image-end:::

1. To automatically attach to Microsoft Edge and launch Developer Tools in Visual Studio Code, create a `launch.json` file. For more information, navigate to [Launch Configurations | Debugging in Visual Studio Code][launchJSON].

    If you copy the following code, be sure to change `http://localhost:8080` and make sure the variable `{workspaceFolder}` resolves. If you have not installed this extension, choosing the icon opens the VS Code extensions tab and automatically displays the extension to install.

    To use this option, select Microsoft Edge as the debug type. In your `launch.json` file, specify `pwa-msedge` as the type:

    ```JSON
    {
        "version": "0.2.0",
        "configurations": [
            {
                "type": "pwa-msedge",
                "request": "launch",
                "name": "Launch Edge",
                "url": "http://localhost:8080",
                "webRoot": "${workspaceFolder}"
            }
        ]
    }
    
## Console integration
If you launch the extension from the Run and Debug workflow, the [Debug Console of Visual Studio Code][DebugConsoleVSCode] gives you all the functions of the [Microsoft Edge Developer Tools Console][EdgeDevToolsConsole]. You have direct access to the Window object of the instance of Edge and can use all the [Console Utilities][ConsoleUtilities].

:::image type="complex" source="./media/edge-devtools-for-vscode-console-integration.png" alt-text="Microsoft Edge Developer Tools Console available when extension launched from Run and Debug workflow" lightbox="./media/edge-devtools-for-vscode-console-integration.png":::
   Microsoft Edge Developer Tools Console available when extension launched from Run and Debug workflow  
:::image-end:::

## Getting in touch with the Microsoft Edge DevTools for Visual Studio Code extension team  

Send your feedback by [filing an issue][GithubMicrosoftVscodeEdgeDevtoolsNewIssue] on the [microsoft/vscode-edge-devtools GitHub repo][GithubMicrosoftVscodeEdgeDevtools] of the extension.  

If you want to help make <!--the Microsoft Edge DevTools for Visual Studio Code -->this extension better, your contributions are welcome.  Find everything you need to get started in the [microsoft/vscode-edge-devtools GitHub repo][GithubMicrosoftVscodeEdgeDevtools] of the extension. 

<!--links -->  

[VisualstudioCode]: https://code.visualstudio.com "Visual Studio Code"  
[VisualStudioCodeDocs]: https://code.visualstudio.com/Docs "Documentation | Visual Studio Code"   

[GithubMicrosoftVscodeEdgeDevtools]: https://github.com/Microsoft/vscode-edge-devtools "microsoft/vscode-edge-devtools | GitHub"  
[GithubMicrosoftVscodeEdgeDevtoolsNewIssue]: https://github.com/Microsoft/vscode-edge-devtools/issues/new "New Issue - microsoft/vscode-edge-devtools | GitHub"

[VisualstudioMarketplaceElementsMicrosoftEdgeChromium]: https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools "Microsoft Edge Tools for Visual Studio Code"  

[ConsoleUtilitiesAPI]: /microsoft-edge/devtools-guide-chromium/console/utilities "Console Utilities API reference | Microsoft Docs"

[downloadExtension]: https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools "Microsoft Edge Tools for VS Code | Visual Studio Marketplace"

[checkSourceCode]: https://github.com/microsoft/vscode-edge-devtools "microsoft/vscode-edge-devtools | github"

[launchJSON]: https://code.visualstudio.com/Docs/editor/debugging#_launch-configurations "Launch Configurations | Debugging in Visual Studio Code"

[DebugConsoleVSCode]: https://code.visualstudio.com/Docs/editor/debugging "Debugging in Visual Studio Code"

[EdgeDevToolsConsole]: /microsoft-edge/devtools-guide-chromium/console/ "Use the Console | Microsoft Docs"

[ConsoleUtilities]: /microsoft-edge/devtools-guide-chromium/console/utilities "Console Utilities API reference | Microsoft Docs"

[NodeJS]: https://www.nodejs.org "Node.js"

[NPM]: https://www.npmjs.com/package/reload?activeTab=readme "reload - npm"
