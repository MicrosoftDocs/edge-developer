---
title: Debug WebView2 apps with Visual Studio Code
description: How to debug WebView2 apps with Microsoft Visual Studio Code.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 02/11/2022
---
# Debug WebView2 apps with Visual Studio Code

Use Microsoft Visual Studio Code to debug scripts that run in WebView2 controls.  <!-- Make sure you're using Visual Studio Code version [insert build here] or later. -->


<!-- ====================================================================== -->
## Create a launch.json file

To debug your code, your project is required to have a `launch.json` file.  If your project doesn't have a `launch.json` file, create a new `launch.json` file and paste the following code into it:

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
// The following two lines set up source path mapping, where `url` is the start page
// of your app, and `webRoot` is the top level directory with all your code files.
"url": "file:///${workspaceFolder}/path/to/your/toplevel/foo.html",
"webRoot": "${workspaceFolder}/path/to/your/assets"
```

### Command-line URL parameter passed in

Visual Studio Code source path mapping now requires an URL, so your app now receives a `url` command-line parameter when it starts.  You can safely ignore the `url` parameter, if needed.


<!-- ====================================================================== -->
## Debug your code

1. To set a breakpoint in your source code, click a line of code and then press `F9`:

   ![A breakpoint that's set in Visual Studio Code.](./media/breakpoint-vs.png)

1. On the **Run** tab, select the launch configuration from the dropdown menu.

1. Click **Start Debugging**, which is the green triangle next to the launch configuration dropdown.

   ![The Run tab in Visual Studio Code.](./media/run-vs.png)

1. To view the debug output and errors, open **Debug Console**.

   ![The Debug Console in Visual Studio Code.](./media/results-vs.png)


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


### Cannot debug two WebView2 controls at the same time

After the first match is found in the URL, the debugger stops.  You cannot debug two WebView2 controls at the same time, because the CDP port is shared by all WebView2 controls, and uses a single port number.


<!-- ====================================================================== -->
## Debug running processes

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


<!-- ====================================================================== -->
## Debug tracing options

To enable debug tracing, add the `trace` parameter to `launch.json` , as follows:

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

![ Save debug output to a log file.](./media/trace-log.png)
      
```json
,"trace": "verbose"  // Turn on verbose tracing in the Debug Output pane.
```

Visual Studio Code Debug Output with verbose tracing turned on:

![Visual Studio Code Debug Output with verbose tracing turned on.](./media/verbose.png)


<!-- ====================================================================== -->
## Debug Office Add-ins

If you're debugging Office Add-ins, open the add-in source code in a separate instance of Visual Studio Code.  Open `launch.json` in your WebView2 app.  Add the following code into `launch.json`, to attach the debugger to the Office add-in:

```json
,"debugServer": 4711
```


<!-- ====================================================================== -->
## Troubleshoot the debugger

You might encounter these scenarios when using the debugger.


### Doesn't stop at breakpoint

If the debugger doesn't stop at the breakpoint, and you have debug output: 

To solve the issue, confirm that the file with the breakpoint is the same file that's used by the WebView2 control.  The debugger doesn't perform source path mapping.


### Can't attach to running process

If you can't attach to a running process, and you get a timeout error:

To solve the issue, confirm that the WebView2 control opened the CDP port.  Make sure your `additionalBrowserArguments` value in the registry is correct, or the options are correct.  See [additionalBrowserArguments for dotnet](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.additionalbrowserarguments) and [additionalBrowserArguments for Win32](/microsoft-edge/webview2/reference/win32/webview2-idl#createcorewebview2environmentwithoptions).


<!-- ====================================================================== -->
## See also

* [Get started with WebView2](../get-started/get-started.md)
* [WebView2Samples repo](https://github.com/MicrosoftEdge/WebView2Samples) - a comprehensive example of WebView2 capabilities.
* [WebView2 API reference](../webview2-api-reference.md)
* [See also](../index.md#see-also) in _Introduction to Microsoft Edge WebView2_.
