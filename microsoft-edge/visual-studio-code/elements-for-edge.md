---
description: How to use Elements for Microsoft Edge (Chromium) from VS Code
title: Debug Microsoft Edge (Chromium) from VS Code
author: erdraud
ms.author: erdraud
ms.date: 08/08/2019
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, vs code, visual studio code, elements
---

# Elements for Edge VS Code extension

By adding the [Elements for Edge](https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools) VS Code extension, you can use the browser's Elements tool from within Visual Studio Code. By either launching or attaching, the Elements tool will connect to an instance of Microsoft Edge, display the runtime HTML structure, and allow you to alter the layout or fix styling issues.

![GIF of the Elements for Edge VS Code extension at work](./media/elements-for-edge.gif)

## Launching Edge From the Elements tab

![Elements for Edge tab](./media/elements-for-edge-logo.jpg) 

Navigate to Elements (the icon shown above). Next to where it says Elements for Microsoft Edge: Targets, there is a plus sign that will open the browser for your app. If you selected the about:blank option, you will have to navigate to your web app in the browser for it to appear in the Elements panel in VS Code.

## Launching Edge from the Debugger tab

If you are accustomed to the Debugger tool, you can access Elements from that tool. Navigate to Debug (`Ctrl` + `Shift` + `D` on Windows or `Command` + `Shift` + `D` on Mac). 

If you do not have any configurations in VS Code, press `F5` on Windows or Mac or click the green **Play** button. Select "Edge" in the dropdown. You will now see a **launch.json** file with the following configuration:

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            
            "name": "Launch Microsoft Edge and open the Elements tool",
            "request": "launch",
            "type": "vscode-edge-devtools.debug",
            "url": "http://localhost:3000"
        
        }
    ]
}
```

Make sure “Launch Microsoft Edge and open the Elements tool” is selected then either press `F5` on Windows or Mac or click the green **Play** button. VS Code will launch the Elements, allowing you to access a screencast of your browser and examine the components of your page.

## Attaching to Microsoft Edge
If you'd like to attach VS Code to an instance of Microsoft Edge (Chromium) that you've already launched, run the following command from your teminal:

`start msedge --remote-debugging-port=9222`

Add the configuration below to your **launch.json** file:

```json
{
    "type": "vscode-edge-devtools.debug",
    "request": "attach",
    "name": "Attach to Microsoft Edge and open the Elements tool",
    "url": "http://localhost:3000/",
    "webRoot": "${workspaceFolder}/out"
}
```

Select "Attach to Microsoft Edge and open the Elements tool" from the DEBUG drop-down menu. Next, either press `F5` on Windows or Mac or click the green **Play** button. VS Code will launch the Elements tab, allowing you to access all of its tools.

## Feedback
Send us your feedback by [filing an issue](https://github.com/microsoft/vscode-edge-devtools/issues/new) against this extension's [GitHub repo](https://github.com/microsoft/vscode-edge-devtools). 

If you want to help us make this extension better, we welcome your contributions! You can find everything you need to get started in [our GitHub repo](https://github.com/microsoft/vscode-edge-devtools).