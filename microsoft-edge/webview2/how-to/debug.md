---
title: Get started debugging WebView2 apps
description: Learn how to debug WebView2 controls.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 09/15/2021
---
# Get started debugging WebView2 apps

The goal of the Microsoft Edge WebView2 control is to combine the best of both the web and native app development features and tools.  When you develop your WebView2 app, you should debug your app.

This article outlines the different tools to use to debug both your web code and native code in your WebView2 app.


<!-- ====================================================================== -->

## [Microsoft Edge DevTools](#tab/devtools)

Use [Microsoft Edge Developer Tools](../index.md) to debug web content displayed in WebView2 controls, in the same way that you can debug another webpage that's displayed in Microsoft Edge.

To open DevTools when you're viewing a WebView2 app, put focus on the WebView control and then do one of the following:

*  Press `F12`.
*  Press `Ctrl`+`Shift`+`I`.
*  Right-click the page and then select `Inspect`.

See [DevTools overview](../index.md).

<!-- keep lightbox -->
:::image type="content" source="./media/f12.png" alt-text="DevTools debugging." lightbox="./media/f12.png":::


<!-- ====================================================================== -->

## [Visual Studio](#tab/visualstudio)

Visual Studio provides various debugging tools for web and native code in WebView2 apps.  In the Visual Studio section, the primary focus is debugging WebView controls, however the other methods of debugging in Visual Studio are available, as usual.  Use the following process to debug web and native code in Win32 apps or Office Add-ins only.

> [!IMPORTANT]
> When you debug your app in Visual Studio with the native debugger attached, pressing `F12` may trigger the native debugger instead of Developer Tools.  To avoid that situation, press `Ctrl`+`Shift`+`I`, or right-click.


Before you begin, make sure the following requirements are met:

*  To debug scripts, the app must be launched from within Visual Studio.

*  You cannot attach a debugger to a running WebView2 process.

*  Install Visual Studio 2019 version 16.4 Preview 2 or later.


Install and set up the script debugger tools in Visual Studio:

1. Install the **JavaScript diagnostics** component in **Desktop development with C++**, as follows:

   1. In the Windows Explorer bar, type `Visual Studio Installer`.

   1. Select **Visual Studio Installer** to open it.

   1. In the Visual Studio Installer, on the installed version, click the **More** button, and then select **Modify**.

   1. In Visual Studio, under **Workloads**, select the **Desktop Development with C++** setting:

      :::image type="content" source="./media/workloads.png" alt-text="Visual Studio Modifying Workloads Screen." lightbox="./media/workloads.png":::

   1. Select **Individual components**, at the top.

   1. In the search box, enter `JavaScript diagnostics`.

   1. Select the **JavaScript diagnostics** setting.

   1. Click **Modify**.

      :::image type="content" source="./media/indiv-comp.png" alt-text="Visual Studio: Modifying values in the 'Individual components' tab." lightbox="./media/indiv-comp.png":::

1. Enable script debugging for WebView2 apps.

   1. Right-click your WebView2 project, and then select **Properties**.

   1. Under the **Configuration Properties**, select **Debugging**.

   1. Under the **Debugger Type**, select **JavaScript (WebView2)**.

      :::image type="content" source="./media/enb-js.png" alt-text="The 'Debugging' configuration property in Visual Studio." lightbox="./media/enb-js.png":::


To debug your WebView2 app:

1. To set a breakpoint in your source code, hover to the left of the line number, and click to set a breakpoint.  The JS/TS debug adapter doesn't perform source path mapping.  You must open the exact same path associated with your WebView2.

   :::image type="content" source="./media/breakpoint.png" alt-text="Adding a breakpoint in Visual Studio." lightbox="./media/breakpoint.png":::

1. To run the debugger, select the bit size of the platform, and then click the green Play button next to **Local Windows Debugger**.  The app runs and the debugger connects to the first WebView2 process that is created.

   :::image type="content" source="./media/run.png" alt-text="The Local Windows Debugger in Visual Studio." lightbox="./media/run.png":::

1. In the **Debug Console**, find the output from the debugger.

   :::image type="content" source="./media/console.png" alt-text="Debug Console in Visual Studio." lightbox="./media/console.png":::

> [!NOTE]
> If you use the WebView2 [SetVirtualHostNameToFolderMapping](/dotnet/api/microsoft.web.webview2.core.corewebview2.setvirtualhostnametofoldermapping) method, the debugger in Visual Studio 2019 doesn't understand the virtual source path mapping, so breakpoints don't work correctly.  This source path mapping works when you use the debugger in Visual Studio Code.


<!-- ====================================================================== -->

## [Visual Studio Code](#tab/visualstudiocode)

Use Microsoft Visual Studio Code to debug scripts that run in WebView2 controls.  <!--Ensure that you're using Visual Studio Code version [insert build here] or later.  -->

In Visual Studio Code, complete the following actions to debug your code.

1. Your project is required to have a `launch.json` file.  If your project doesn't have a `launch.json` file, create a new `launch.json` file and copy the following code into it:

    ```json
        "name": "Hello debug world",
        "type": "pwa-msedge",
        "port": 9222, // The port value is optional, and the default value is 9222.
        "request": "launch",
        "runtimeExecutable": "C:/path/to/your/webview2/app.exe",
        "env": {
            // Customize for your app location if needed
            "Path": "%path%;e:/path/to/your/app/location; "
        },
        "useWebView": true,
        // The following two lines setup source path mapping, where `url` is the start page of your app, and `webRoot` is the top level directory with all your code files.
        "url": "file:///${workspaceFolder}/path/to/your/toplevel/foo.html",
        "webRoot": "${workspaceFolder}/path/to/your/assets"
    ```

    > [!NOTE]
    > Visual Studio Code source path mapping now requires the URL, so your app now receives a command-line parameter when it starts.  You can safely ignore the `url` parameter, if needed.



1. To set a breakpoint in your source code, click a line of code and then press `F9`:

   :::image type="content" source="./media/breakpoint-vs.png" alt-text="A breakpoint that's set in Visual Studio Code." lightbox="./media/breakpoint-vs.png":::

1. Run the code, as follows:

   1. On the **Run** tab, select the launch configuration from the dropdown menu.

   1. To start debugging your app, click **Start Debugging**, which is the green triangle next to the launch configuration dropdown.

      :::image type="content" source="./media/run-vs.png" alt-text="The Run tab in Visual Studio Code." lightbox="./media/run-vs.png":::

1. Open **Debug Console** to view the debug output and errors.

   :::image type="content" source="./media/results-vs.png" alt-text="The Debug Console in Visual Studio Code." lightbox="./media/results-vs.png":::

**Advanced Settings**:

*  Targeted Webview debugging.

   In some WebView2 apps, you might use more than one WebView2 control.  To pick which WebView2 control to debug in this situation, you can use targeted WebView2 debugging.

   Open `launch.json` and complete the following actions to use targeted Webview debugging.

   1. Confirm that the `useWebview` parameter is set to `true`.

   1. Add the `urlFilter` parameter.  When the WebView2 control navigates to a URL, the `urlFilter` parameter value is used to compare strings that appear in the URL.

   ```json
   "useWebview": "true",
   "urlFilter": "*index.ts",

   // Other urlFilter options.
   urlFilter="*index.ts"    // Match any url that ends with index.ts, and ignore all leading characters.
   urlFilter="*index*"      // Match any url that contains the string index anywhere in the URL.
   urlFilter="file://C:/path/to/my/index.ts," // To match explicit file called index.ts.
   ```

   When debugging your app, you might need to step through the code from the beginning of the rendering process. If you are rendering webpages on sites and you don't have access to the source code, you can use the `?=value` option, because webpages ignore unrecognized parameters.

   > [!IMPORTANT]
   > After the first match is found in the URL, the debugger stops.  You cannot debug two WebView2 controls at the same time because the CDP port is shared by all WebView2 controls, and uses a single port number.

*  Debug running processes

   You might need to attach the debugger to running WebView2 processes.  To do that, in `launch.json`, update the `request` parameter, changing its value to `attach`:

   ```json
      "name": "Hello debugging world",
      "type": "pwa-msedge",
      "port": 9222,
      "request": "attach",
      "runtimeExecutable": "C:/path/to/your/webview2/app.exe",
      "env": {
         "Path": "%path%;e:/path/to/your/build/location; "
      },
      "useWebView": true
   ```

   Your WebView2 control must open the CDP port to allow debugging of the WebView2 control.  Your code must be built to ensure that only one WebView2 control has a Chrome Developer Protocol (CDP) port open, before starting the debugger.

*  Debug tracing options

   Add the `trace` parameter to `launch.json` to enable debug tracing, as follows:

   1. Add the `trace` parameter:

      ```json
      "name": "Hello debugging world",
      "type": "pwa-msedge",
      "port": 9222,
      "request": "attach",
      "runtimeExecutable": "C:/path/to/your/webview2/app.exe",
      "env": {
      "Path": "%path%;e:/path/to/your/build/location; "
      },
      "useWebView": true
      ,"trace": true  // Turn on debug tracing, and save the output to a log file.
      ```

      Saving debug output to a log file:

      :::image type="content" source="./media/trace-log.png" alt-text=" Save debug output to a log file." lightbox="./media/trace-log.png":::
            
      ```json
      ,"trace": "verbose"  // Turn on verbose tracing in the Debug Output pane.
      ```

      Visual Studio Code Debug Output with verbose tracing turned on:

      :::image type="content" source="./media/verbose.png" alt-text="Visual Studio Code Debug Output with verbose tracing turned on." lightbox="./media/verbose.png":::

*  Debug Office Add-ins.

   If you're debugging Office Add-ins, open the add-in source code in a separate instance of Visual Studio Code.  Open `launch.json` in your WebView2 app.  Add the following code into `launch.json`, to attach the debugger to the Office add-in:

   ```json
   ,"debugServer": 4711
   ```

*  Troubleshooting the debugger

   You may encounter the following scenarios when using the debugger:

   *  The debugger doesn't stop at the breakpoint, and you have debug output.  To solve the issue, confirm that the file with the breakpoint is the same file that's used by the WebView2 control.  The debugger doesn't perform source path mapping.

   *  You can't attach to a running process, and you get a timeout error.  To solve the issue, confirm that the WebView2 control opened the CDP port.  Make sure your `additionalBrowserArguments` value in the registry is correct, or the options are correct.  See [additionalBrowserArguments for dotnet](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.additionalbrowserarguments) and [additionalBrowserArguments for Win32](/microsoft-edge/webview2/reference/win32/webview2-idl#createcorewebview2environmentwithoptions).


* * *


<!-- ====================================================================== -->
## See also

* [Get started with WebView2](../get-started/get-started.md)
* [WebView2Samples repo](https://github.com/MicrosoftEdge/WebView2Samples) - a comprehensive example of WebView2 capabilities.
* [WebView2 API reference](../webview2-api-reference.md)
* [See also](../index.md#see-also) in _Introduction to Microsoft Edge WebView2_.
