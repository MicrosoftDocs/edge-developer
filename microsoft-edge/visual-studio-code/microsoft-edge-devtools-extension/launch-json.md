---
title: The launch.json file for DevTools extension
description: The launch.json file for the Microsoft Edge DevTools extension for Visual Studio Code.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 09/21/2022
---
# The launch.json file for DevTools extension

There are two main ways to launch DevTools:

*  Right-click an `.html` file in Visual Studio Code > Activity Bar > **Explorer**.  This approach doesn't involve a `launch.json` file.  For more information, see [Step 9: Open DevTools by right-clicking an .html file](./get-started.md#step-9-open-devtools-by-right-clicking-an-html-file) in _Get started with the DevTools extension for Visual Studio Code_.

*  Generate a `launch.json` file, edit it to point to a URL, such as `http://localhost/demos/demo-to-do/`, and then select Visual Studio Code > Activity Bar > **Microsoft Edge Tools** > **Launch Project** button.  For more information, see [Step 11: Open DevTools for a URL using the Launch Instance button](./get-started.md#step-11-open-devtools-for-a-url-using-the-launch-instance-button) in _Get started with the DevTools extension for Visual Studio Code_.

Details about the `launch.json` file format are below.  However, you normally don't need to change anything in the file except to replace several instances of the URL string, as explained in the above linked section.


Visual Studio Code uses a `launch.json` file to configure and customize the debugger.  `launch.json` is a debugger configuration file.  This file also controls which web browser to use in conjunction with the debugger.  For example, when you test your webpage by clicking a button in the webpage to cause your JavaScript code to run, the Visual Studio Code debugger listens to the browser and steps through the JavaScript code of the webpage.

The following is a copy of the `launch.json` after clicking the **Create launch.json** button in the extension.

<!-- todo: which "xyz" points to clarify in this article? -->

These configurations are needed because XYZ.  This info is defined in this file in order to control XYZ, as a way of XYZ how Visual Studio Code XYZ.

There are three _configurations_ and two _compounds_ initially defined by default:

*  `configurations` - in the Visual Studio Code UI, these appear in the xyz:

   * **Launch Microsoft Edge** - this is a "launch"-type configuration.  It appears in UI xyz.  The Microsoft Edge browser window ...

   * **Launch Microsoft Edge in headless mode** - this is a "launch"-type configuration.  It appears in UI xyz.  The Microsoft Edge browser window without UI ...

   * **Open Edge DevTools** - this is a "debug"-type (or "attach"-type) configuration.  It appears in UI xyz.  The **xyz** tab in Visual Studio Code ...

*  `compounds` - in the Visual Studio Code UI, these appear in the Debug toolbar:

   * **Launch Edge Headless and attach DevTools**

   * **Launch Edge and attach DevTools**

<!-- ![Compounds displayed in the Debug toolbar]() -->


<!-- ====================================================================== -->
## Configuration types: launch vs. debug

These two distinct types of configurations are both defined in this .json file because XYZ in the UI of Visual Studio Code.


<!-- ====================================================================== -->
## Configurations

The following sections of `launch.json` file are from v2.1.1 of the extension, in a default installation location for Visual Studio Code on Windows.


#### Launch Microsoft Edge

This is a "launch browser"-type configuration.  This configuration controls the browser component, such as which `.html` file to display, when **headless** is not selected in the UI.

This configuration name doesn't appear directly in the UI.  This configuration is used by a compound configuration, below.

```json
        {
            "type": "pwa-msedge",
            "name": "Launch Microsoft Edge",
            "request": "launch",
            "runtimeArgs": [
                "--remote-debugging-port=9222"
            ],
            "url": "c:\\Users\\myusername\\.vscode\\extensions\\ms-edgedevtools.vscode-edge-devtools-2.1.1\\out\\startpage\\index.html", // Provide your project's url to finish configuring
            "presentation": {
                "hidden": true
            }
        },
```


#### Launch Microsoft Edge in headless mode

This is a "launch browser"-type configuration.  This configuration controls the browser component, such as which `.html` file to display, when **headless** is selected in the UI.

This configuration name **Launch Microsoft Edge in headless mode** appears in the UI, such as in the Debug toolbar and in the **Debug Console**.  If you launch multiple instances, a number is appended to the additional instances in the UI, such as **Launch Microsoft Edge in headless mode 2**.  This configuration is used by a compound configuration, below.
<!-- todo: is it a bug, that the Launch button is available sometimes when already launched? -->

```json
        {
            "type": "pwa-msedge",
            "name": "Launch Microsoft Edge in headless mode",
            "request": "launch",
            "runtimeArgs": [
                "--headless",
                "--remote-debugging-port=9222"
            ],
            "url": "c:\\Users\\myusername\\.vscode\\extensions\\ms-edgedevtools.vscode-edge-devtools-2.1.1\\out\\startpage\\index.html", // Provide your project's url to finish configuring
            "presentation": {
                "hidden": true
            }
        },
```


#### Open Edge DevTools

This is a "attach debugger"-type configuration.  This configuration controls the **Edge DevTools** tab (pane), such as which `.html` file populates the **Elements** tool.

This configuration name doesn't appear directly in the UI.  This configuration is used by a compound configuration, below.

```json
        {
            "type": "vscode-edge-devtools.debug",
            "name": "Open Edge DevTools",
            "request": "attach",
            "url": "c:\\Users\\myusername\\.vscode\\extensions\\ms-edgedevtools.vscode-edge-devtools-2.1.1\\out\\startpage\\index.html", // Provide your project's url to finish configuring
            "presentation": {
                "hidden": true
            }
        }
```


<!-- ====================================================================== -->
## Compounds

Each compound configuration refers to two configurations: one configuration to open the Edge DevTools tab in Visual Studio Code, and then other configuration to open either the screencast in the editor (that is, the **Edge DevTools: Browser** tab), or both the screencast in the editor and the entire Microsoft Edge browser window.

In the **Microsoft Edge Tools** pane, in the **Targets** section, on the right side of a target, click the **Toggle screencast** button.  The headless embedded **Edge DevTools: Browser** tab (pane) closes or opens.

In the **Microsoft Edge Tools** pane, in the **Targets** section, on the right side of a target, click the **Attach and open Microsoft Edge Tools** button.




#### Launch Edge Headless and attach DevTools

This compound configuration launches the following components:
*  The **Edge DevTools: Browser** tab (pane) in Visual Studio Code.  This is defined by the configuration that has the `name` "Launch Microsoft Edge in headless mode", above.
*  The **Edge DevTools** tab (pane) in Visual Studio Code.  This is defined by the configuration that has the `name` "Open Edge DevTools", above.


```json
        {
            "name": "Launch Edge Headless and attach DevTools",
            "configurations": [
                "Launch Microsoft Edge in headless mode",
                "Open Edge DevTools"
            ]
        },
```

The name of this compound configuration, **Launch Edge Headless and attach DevTools**, appears in the UI in the Debug toolbar of Visual Studio Code.


#### Launch Edge and attach DevTools

This compound configuration launches the following components:
*  The **Edge DevTools: Browser** tab (pane) in Visual Studio Code.  This is defined by the configuration that has the `name` "Launch Microsoft Edge", above.
*  The Microsoft Edge browser window.  This is defined by the configuration that has the `name` "Launch Microsoft Edge", above.
*  The **Edge DevTools** tab (pane) in Visual Studio Code.  This is defined by the configuration that has the `name` "Open Edge DevTools", above.

```json
        {
            "name": "Launch Edge and attach DevTools",
            "configurations": [
                "Launch Microsoft Edge",
                "Open Edge DevTools"
            ]
        }
```

The name of this compound configuration, **Launch Edge and attach DevTools**, appears in the UI in the Debug toolbar of Visual Studio Code.


<!-- ====================================================================== -->
## Adding configurations

You can define your own, additional configurations, in order to XYZ.  Click the **Add configuration** button.  Or, you can modify the default configurations, such as to point to localhost:8080 or a local file path string as described in [Step 7: Run the demo app](./get-started.md#step-7-run-the-demo-app) in _Get started with the DevTools extension for Visual Studio Code_.


<!-- ====================================================================== -->
## See also

* [Microsoft Edge DevTools extension for Visual Studio Code](../microsoft-edge-devtools-extension.md)
* [Configure C/C++ debugging](https://code.visualstudio.com/docs/cpp/launch-json-reference) in the Visual Studio Code docs.
* [Configure the debugger](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial#_configure-the-debugger) in _Using React in Visual Studio Code_ in the Visual Studio Code docs.
