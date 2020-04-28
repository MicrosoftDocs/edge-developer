---
description: How to use Elements for Microsoft Edge (Chromium) from VS Code
title: Elements for Microsoft Edge (Chromium) from VS Code
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/28/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, vs code, visual studio code, elements
---

# Elements For Microsoft Edge VS Code Extension  

With the [Elements for Microsoft Edge][VisualstudioMarketplaceElementsMicrosoftEdgeChromium] VS Code extension, use the Elements tool of the Microsoft Edge browser from within [Visual Studio Code][VisualstudioCode].  By either launching or attaching, the Elements tool connects to an instance of Microsoft Edge, displays the runtime HTML structure, and allows you to alter the layout or fix styling issues.  

![Elements for Edge VS Code extension at work][ImageGifElementsEdge]  

## Launching Microsoft Edge From the Elements extension  

Navigate to Elements in the **Activity Bar**.  Next to where it says **Elements for Microsoft Edge: Targets,** there is a plus sign that opens the browser for your app.  If you selected the **about:blank** option, you must navigate to your web app in the browser for it to appear in the Elements panel in VS Code.  

## Launching Microsoft Edge from the Debug view  

If you are accustomed to using the Debug view in Visual Studio Code, you can access Elements from that tool. Navigate to the Debug view \(`Ctrl`+`Shift`+`D` on Windows or `Command`+`Shift`+`D` on macOS\).  

If you do not have any configurations in VS Code, press `F5` on Windows or macOS or click the green **Play** button. Select "Edge" in the dropdown. You should see a `launch.json` file with the following configuration.  

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

Now that you have loaded the correct configuration, either press `F5` on Windows or macOS or click the green **Play** button. The Elements tool, that is familiar to you, from the Microsoft Edge browser launches in VS Code, allowing you to access a screencast of your browser and examine the components of your page.  

## Attaching to Microsoft Edge  

To attach VS Code to an instance of Microsoft Edge\(Chromium\), you must start the browser by running the following command from your teminal.  

`start msedge --remote-debugging-port=9222`  

Once the app has launched, add the configuration below to your **launch.json** file:  

```json
{
    "type": "vscode-edge-devtools.debug",
    "request": "attach",
    "name": "Attach to Microsoft Edge and open the Elements tool",
    "url": "http://localhost:3000/",
    "webRoot": "${workspaceFolder}/out",
    "port": 9222
}
```  

Select **Attach to Microsoft Edge and open the Elements tool** from the Debugger drop-down menu.  Next, either press `F5` on Windows or macOS or click the green **Play** button.  VS Code launches the Elements tool, allowing you to access a screencast of your browser, inspect the DOM, and the styling of the components on your page.  

## Feedback  

Send us your feedback by [filing an issue][GithubMicrosoftVscodeEdgeDevtoolsNewIssue] against the [GitHub repo][GithubMicrosoftVscodeEdgeDevtools] of the extension.  

If you want to help us make this extension better, your contributions are welcome!  Find everything you need to get started in the [GitHub repo][GithubMicrosoftVscodeEdgeDevtools] of the extension.  

<!-- image links -->  

[ImageGifElementsEdge]: ./media/elements-for-edge.gif "Elements for Edge VS Code extension in action"  
[ImagePngElementsEdge]: ./media/elements-for-edge.png "Elements for Edge VS Code extension in action"  

<!--links -->  

[VscodeElementsEdge]: ./elements-for-edge.md "Elements For Microsoft Edge VS Code Extension"  

[VisualstudioCode]: https://code.visualstudio.com "Visual Studio Code"  
[VisualStudioCodeDocs]: https://code.visualstudio.com/Docs "Documentation | Visual Studio Code"   

[GithubMicrosoftVscodeEdgeDevtools]: https://github.com/Microsoft/vscode-edge-devtools "microsoft/vscode-edge-devtools | GitHub"  
[GithubMicrosoftVscodeEdgeDevtoolsNewIssue]: https://github.com/Microsoft/vscode-edge-devtools/issues/new "New Issue - microsoft/vscode-edge-devtools | GitHub"

[VisualstudioMarketplaceElementsMicrosoftEdgeChromium]: https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools "Elements for Microsoft Edge (Chromium) | Visual Studio Marketplace"  
