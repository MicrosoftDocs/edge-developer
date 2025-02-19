---
title: Debug WebView2 apps with Visual Studio Code
description: How to debug WebView2 apps with Microsoft Visual Studio Code.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 02/11/2022
---
# Debug WebView2 apps with Visual Studio Code

Use Microsoft Visual Studio Code to debug scripts that run in WebView2 controls.  <!-- Make sure you're using Visual Studio Code version [insert build here] or later. -->
Visual Studio Code has a built-in debugger for browser debugging.  See [Browser debugging in VS Code](https://code.visualstudio.com/docs/nodejs/browser-debugging).


<!-- ====================================================================== -->
## Create a launch.json file

To debug your code, your project is required to have a `launch.json` file.  A `launch.json` file is a debugger configuration file to configure and customize the Visual Studio Code debugger. One of the properties that's needed to configure the debugger is the `request` property. There are two `request` types, `launch` and `attach`.

The following code demonstrates launching the app from Visual Studio Code (rather than attaching the debugger to a running instance of the app). To do this, the app must have been built previously. If your project doesn't have a `launch.json` file, create a new `launch.json` file in the `.vscode` subfolder in your current project and paste the following code into it:

```json
"name": "Hello debug world",
"type": "msedge",
"port": 9222, // The port value is optional, and the default value is 9222.
"request": "launch",
"runtimeExecutable": "C:/path/to/your/webview2/app.exe",
"env": {
   // The following variable is needed when "runtimeExecutable" property is set.
   // The port number below shall match the value of "port" property above.
   "WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS": "--remote-debugging-port=9222" 
   // Customize for your app location if needed
   "Path": "%path%;e:/path/to/your/app/location; "
},
"useWebView": true,
// The following two lines set up source path mapping, where `url` is the start page
// of your app, and `webRoot` is the top level directory with all your code files.
"url": "file:///${workspaceFolder}/path/to/your/toplevel/foo.html",
"webRoot": "${workspaceFolder}/path/to/your/assets"
```

> Instead of setting the `WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS` environment variable, you can add a new registry value named `<myApp.exe>` with data `--remote-debugging-port=9222` to the registry under registry key `Computer\HKEY_CURRENT_USER\Software\Policies\Microsoft\Edge\WebView2\AdditionalBrowserArguments`, so that the debugger can find the proper port. See [WewbView2 browser flags](../concepts/webview-features-flags.md) for more information.

<!-- ---------------------------------- -->
#### Command-line URL parameter passed in

Visual Studio Code source path mapping now requires an URL, so your app now receives a `url` command-line parameter when it starts.  You can safely ignore the `url` parameter, if needed.


<!-- ====================================================================== -->
## Debug your code

1. To set a breakpoint in your source code, click a line of code and then press **F9**:

   ![A breakpoint that's set in Visual Studio Code](./debug-visual-studio-code-images/breakpoint-vs.png)

1. On the **Run** tab, select the launch configuration from the dropdown menu.

1. Click **Start Debugging**, which is the green triangle next to the launch configuration dropdown list:

   ![The Run tab in Visual Studio Code](./debug-visual-studio-code-images/run-vscode.png)

1. To view the debug output and errors, open **Debug Console**:

   ![The Debug Console in Visual Studio Code](./debug-visual-studio-code-images/results-vs.png)


<!-- ====================================================================== -->
## Targeted WebView2 debugging

In some WebView2 apps, you might use more than one WebView2 control.  To pick which WebView2 control to debug in this situation, you can use targeted WebView2 debugging.

Open `launch.json` and complete the following actions to use targeted WebView2 debugging.

1. Confirm that the `useWebview` parameter is set to `true`.

1. Add the `urlFilter` parameter.  When the WebView2 control navigates to a URL, the `urlFilter` parameter value is used to compare strings that appear in the URL.

```json
"useWebview": "true",
"urlFilter": "*index.ts",

// Options for "urlFilter":
// Match any url that ends with "index.ts":
"urlFilter": "*index.ts",
// Match any url that contains "index" anywhere in the URL:
"urlFilter": "*index*",
// Explicitly match a file named "index.ts":
"urlFilter": "file://C:/path/to/my/index.ts",
```

When debugging your app, you might need to step through the code from the beginning of the rendering process. If you are rendering webpages on sites and you don't have access to the source code, you can use the `?=value` option, because webpages ignore unrecognized parameters.


<!-- ---------------------------------- -->
#### Cannot debug two WebView2 controls at the same time

After the first match is found in the URL, the debugger stops.  You cannot debug two WebView2 controls at the same time, because the CDP port is shared by all WebView2 controls, and uses a single port number.


<!-- ====================================================================== -->
## Debug running processes

You might need to attach the debugger to running WebView2 processes.  To do that, in `launch.json`, update the `request` parameter, changing its value to `attach`:

```json
"name": "Hello debugging world",
"type": "msedge",
"port": 9222,
"request": "attach",
"runtimeExecutable": "C:/path/to/your/webview2/myApp.exe",
"env": {
   "Path": "%path%;e:/path/to/your/build/location; "
}
```

Your WebView2 control must open the Chrome Developer Protocol (CDP) port to allow debugging of the WebView2 control.  Your code must be built to ensure that only one WebView2 control has a CDP port open, before starting the debugger.

You also need to add a new REGKEY `<myApp.exe> = --remote-debugging-port=9222` under `Computer\HKEY_CURRENT_USER\Software\Policies\Microsoft\Edge\WebView2\AdditionalBrowserArguments`, so that the debugger can find the proper port.  To add this registry key:

1. Press the **Windows logo key** and then search for **registry editor**.  Open the **Registry Editor** app, and then click **Yes** to allow editing.

1. In the folder tree on the left, try to expand `HKEY_CURRENT_USER\Software\Policies\Microsoft\Edge\WebView2\AdditionalBrowserArguments`.

1. If the `\Edge\WebView2\AdditionalBrowserArguments` part of that path doesn't exist, create those three nested subfolders, as follows:

   1. To create the `\Edge` subfolder: In the folder tree, right-click the `HKEY_CURRENT_USER\Software\Policies\Microsoft` folder, hover over **New**, and then select **Key**.  A folder is added as a child of the `Microsoft` folder, initially named `New Key #1`.  Right-click the `New Key #1` folder, and then select **Rename**.  Enter `Edge` for the name of the new key.

   1. Create the `\WebView2` subfolder, as in the previous step.

   1. Create the `\AdditionalBrowserArguments` subfolder, as in the previous step.

      The tree is now expanded to `HKEY_CURRENT_USER\Software\Policies\Microsoft\Edge\WebView2\AdditionalBrowserArguments`.

1. Right-click the `AdditionalBrowserArguments` folder, hover over **New**, and then select **String Value**.  In the **Name** column, right-click `New Value #1`, select **Rename**, and then enter the file name of your app executable, such as `myApp.exe`.

1. In the **Name** column, right-click your executable file name, such as `myApp.exe`, and then select **Modify**.  The **Edit String** dialog opens.

1. In the **Value data** text box, enter `--remote-debugging-port=9222`:

   ![The "Edit String" dialog, to set the registry key](./debug-visual-studio-code-images/set-debugging-port.png)

1. Click the **OK** button, and then verify that the registry key matches the following (with the file name of your `.exe` file in the **Name** column):

   ![The resulting registry key in the Registry Editor](./debug-visual-studio-code-images/set-debugging-port-registry-key.png)

> Instead of adding the above registry key, you can set the `WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS` environment variable to `--remote-debugging-port=9222`. Make sure that your application was started after the environment variable had been set, and that your application inherits the variable. See [WewbView2 browser flags](../concepts/webview-features-flags.md) for more information.

<!-- ====================================================================== -->
## Debug tracing options

To enable debug tracing, add the `trace` parameter to `launch.json` , as follows:

1. Add the `trace` parameter:

```json
"name": "Hello debugging world",
"type": "msedge",
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

![ Save debug output to a log file](./debug-visual-studio-code-images/trace-log.png)
      
```json
,"trace": "verbose"  // Turn on verbose tracing in the Debug Output pane.
```

Visual Studio Code Debug Output with verbose tracing turned on:

![Visual Studio Code Debug Output with verbose tracing turned on](./debug-visual-studio-code-images/verbose.png)


<!-- ====================================================================== -->
## Debug Office Add-ins

If you're debugging Office Add-ins, open the add-in source code in a separate instance of Visual Studio Code.  Open `launch.json` in your WebView2 app.  Add the following code into `launch.json`, to attach the debugger to the Office add-in:

```json
,"debugServer": 4711
```


<!-- ====================================================================== -->
## Debug WebView2 WinUI 2 (UWP) apps

1. Install a WebView2 Runtime version past `106.0.1370.34`.

1. Open the Registry Editor by pressing the **Windows logo key** and then searching for **registry editor**. Open the **Registry Editor** application and select **Yes** to allow editing.

1. Set the registry key `HKEY_CURRENT_USER\Software\Policies\Microsoft\Edge\WebView2\AdditionalBrowserArguments` equal to `--remote-debugging-pipe`.  To do this, follow the steps outlined in the [Debug running processes](#debug-running-processes) section above.

1. Verify that the registry key is set in the editor and matches the following:

   ![Setting the AdditionalBrowserArguments registry key to --remote-debugging-pipe](./debug-visual-studio-code-images/uwp-debugging-registry-key.png)

1. Add a new configuration to your `launch.json` file.  Open `launch.json` and add the following code:

   ```json
   "name": "Attach to UWP App",
   "useWebView":{
      "pipeName":"JSDebugPipe"
   }
   "request": "attach",
   "type": "msedge",
   "webRoot":"${workspaceFolder}"
   ```

1. Launch your app.

1. Click the **Start Debugging** button to attach to the process and begin debugging.

   ![Run and Debug](./debug-visual-studio-code-images/attach-uwp.png)

<!-- ====================================================================== -->
## Source maps with `WebResourceRequested` event or virtual host name mapping

Source maps are needed to debug the source code of compiled content like transpiled JavaScript (e.g. TypeScript, minified JavaScript) or CSS (e.g. SASS, SCSS). WebView2 does not load source maps referenced by content which was loaded using either [WebResourceRequested event](../concepts/working-with-local-content.md#loading-local-content-by-handling-the-webresourcerequested-event) or [virtual host name mapping](../concepts/working-with-local-content.md#loading-local-content-by-using-virtual-host-name-mapping). See details and solutions for [WebResourceRequested event here](../concepts/working-with-local-content.md#source-maps-with-virtual-host-name-mapping), and for [virtual host name mapping here](../concepts/working-with-local-content.md#source-maps-with-virtual-host-name-mapping).

<!-- ====================================================================== -->
## Troubleshoot the debugger

You might encounter these scenarios when using the debugger.


<!-- ---------------------------------- -->
#### Doesn't stop at breakpoint

If the debugger doesn't stop at the breakpoint, and you have debug output: 

To solve the issue, confirm that the file with the breakpoint is the same file that's used by the WebView2 control.  The debugger doesn't perform source path mapping.


<!-- ---------------------------------- -->
#### Can't attach to running process

If you can't attach to a running process, and you get a timeout error:

To solve the issue, confirm that the WebView2 control opened the CDP port.  Make sure your `additionalBrowserArguments` value in the registry is correct, or the options are correct.  See [additionalBrowserArguments for dotnet](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.additionalbrowserarguments) and [additionalBrowserArguments for Win32](/microsoft-edge/webview2/reference/win32/webview2-idl#createcorewebview2environmentwithoptions).


<!-- ====================================================================== -->
## See also

* [Get started with WebView2](../get-started/get-started.md)
* [WebView2Samples repo](https://github.com/MicrosoftEdge/WebView2Samples) - a comprehensive example of WebView2 capabilities.
* [WebView2 API reference](../webview2-api-reference.md)
