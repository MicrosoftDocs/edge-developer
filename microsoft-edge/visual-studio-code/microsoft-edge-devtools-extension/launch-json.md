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

The following is a copy of the `launch.json` after clicking the **Create launch.json** button in the extension.

These configurations are needed because XYZ.  This info is defined in this file in order to control XYZ, as a way of XYZ how Visual Studio Code XYZ.

There are three _configurations_ and two _compounds_ initially defined by default:

*  `configurations` - in the Visual Studio Code UI, these appear in the xyz:

   * **Launch Microsoft Edge** - this is a "launch"-type configuration.  It appears in UI xyz.  The Microsoft Edge browser window ...

   * **Launch Microsoft Edge in headless mode** - this is a "launch"-type configuration.  It appears in UI xyz.  The Microsoft Edge browser window without UI ...

   * **Open Edge DevTools** - this is a "debug"-type configuration.  It appears in UI xyz.  The **xyz** tab in Visual Studio Code ...

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

This is a "launch"-type configuration.  It appears in UI xyz.  The Microsoft Edge browser window ...

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

This is a "launch"-type configuration.  It appears in UI xyz.  The Microsoft Edge browser window without UI ...

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

This is a "debug"-type configuration.  It appears in UI xyz.  The **xyz** tab in Visual Studio Code ...

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


#### Launch Edge Headless and attach DevTools

```json
        {
            "name": "Launch Edge Headless and attach DevTools",
            "configurations": [
                "Launch Microsoft Edge in headless mode",
                "Open Edge DevTools"
            ]
        },
```


#### Launch Edge and attach DevTools

```json
        {
            "name": "Launch Edge and attach DevTools",
            "configurations": [
                "Launch Microsoft Edge",
                "Open Edge DevTools"
            ]
        }
```


<!-- ====================================================================== -->
## Adding configurations

You can define your own, additional configurations, in order to XYZ.  Click the **Add configuration** button.  Or, you can modify the default configurations, such as to point to localhost:8080 or a local file path string as described in [Step 7: Run the demo app](./get-started.md#step-7-run-the-demo-app) in _Get started with the DevTools extension for Visual Studio Code_.


<!-- ====================================================================== -->
## See also

* [Microsoft Edge DevTools extension for Visual Studio Code](../microsoft-edge-devtools-extension.md)
