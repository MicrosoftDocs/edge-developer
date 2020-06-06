---
description: How to debug Microsoft Edge (Chromium) and Microsoft Edge (EdgeHTML) from VS Code
title: Debug Microsoft Edge (Chromium) from VS Code
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/07/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, vs code, visual studio code, debugger
---

# Debugger For Microsoft Edge VS Code Extension  

With the [Debugger for Microsoft Edge][VisualstudioMarketplaceDebuggerMicrosoftEdge] VS Code extension, debug your front-end JavaScript code line by line and see `console.log()` statements directly from [Visual Studio Code][VisualstudioCode]!  

:::image type="complex" source="./media/debugger-for-edge.gif" alt-text="Debugger for Edge VS Code extension at work":::
   Debugger for Edge VS Code extension at work  
:::image-end:::

<!--![Debugger for Edge VS Code extension at work][ImageGifDebuggerEdge]  -->  

## Launching Microsoft Edge  

Navigate to the Debug view \(`Ctrl`+`Shift`+`D` on Windows or `Command`+`Shift`+`D` on macOS\) in the **Activity Bar**.  If you do not have any configurations in VS Code, press `F5` on Windows or macOS or select the green **Play** button.  Select **Edge** in the dropdown.  You should see a `launch.json` file with the following configuration.  

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "edge",
            "request": "launch",
            "name": "Launch Edge against localhost",
            "url": "http://localhost:8080",
            "webRoot": "${workspaceFolder}"
        }
    ]
}
```  

If you press `F5` on Windows or macOS or select the green **Play** button again, VS Code launches Microsoft Edge \(EdgeHTML\) and you are able to debug any web project you have running on port `8080` directly from VS Code!  

### Microsoft Edge (Chromium)  

If you want to launch Microsoft Edge \(Chromium\), the next version of Microsoft Edge, instead of Microsoft Edge \(EdgeHTML\), simply add a `version` attribute to your existing configuration with the version of Microsoft Edge \(Chromium\) you want to launch \(`dev`, `beta`, or `canary`\). The following configuration below launches the Canary version of Microsoft Edge \(Chromium\).  

```json
{
    "type": "edge",
    "request": "launch",
    "version": "canary",
    "name": "Launch Edge against localhost",
    "url": "http://localhost:8080",
    "webRoot": "${workspaceFolder}"
}
```  

## Attaching to Microsoft Edge  

Attach VS Code to Microsoft Edge \(Chromium\).  From your terminal, run the following command.  

```console
start msedge --remote-debugging-port=9222
```  

Add the configuration below to your `launch.json` file.   

```json
{
    "type": "edge",
    "request": "attach",
    "name": "Attach to Edge",
    "port": 9222
}
```  

If you now run this configuration, VS Code attaches to Microsoft Edge \(Chromium\) and start debugging!  

## Getting in touch with the Elements for Microsoft Edge VS Code extension team    

Send your feedback by [filing an issue][GithubMicrosoftVscodeEdgeDebug2NewIssue] against in the [GitHub repo][GithubMicrosoftVscodeEdgeDebug2] of the extension.  Please include the debug adapter log file, which is created for each run in the `%temp%` directory with the name `vscode-edge-debug2.txt`.  Drag this file into an issue comment to upload it to GitHub.  

To help make the Elements for Microsoft Edge VS Code extension better, your contributions are welcome!  Find everything you need to get started in [GitHub repo][GithubMicrosoftVscodeEdgeDebug2] of the extension.  

<!-- image links -->  

<!--[ImageGifDebuggerEdge]: ./media/debugger-for-edge.gif "Debugger for Edge VS Code extension in action"  -->  
[ImagePngDebuggerEdge]: ./media/debugger-for-edge.png "Debugger for Edge VS Code extension in action"  

<!--links -->  

[VisualstudioCode]: https://code.visualstudio.com "Visual Studio Code"  
[VisualStudioCodeDocs]: https://code.visualstudio.com/Docs "Documentation | Visual Studio Code"   

[GithubMicrosoftVscodeEdgeDebug2]: https://github.com/Microsoft/vscode-edge-debug2 "microsoft/vscode-edge-debug2 | GitHub"  
[GithubMicrosoftVscodeEdgeDebug2NewIssue]: https://github.com/Microsoft/vscode-edge-debug2/issues/new "New Issue - microsoft/vscode-edge-debug2 | GitHub"  

[VisualstudioMarketplaceDebuggerMicrosoftEdge]: https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-edge "Debugger for Microsoft Edge | Visual Studio Marketplace"  
