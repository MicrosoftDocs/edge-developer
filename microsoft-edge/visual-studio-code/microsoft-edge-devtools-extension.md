---
description: How to use Elements for Microsoft Edge (Chromium) from VS Code
title: Elements for Microsoft Edge (Chromium) from VS Code
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/19/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, vs code, visual studio code, elements
---

# Microsoft Edge DevTools for Visual Studio Code extension

With the [Microsoft Edge DevTools for Visual Studio Code][VisualstudioMarketplaceElementsMicrosoftEdgeChromium] extension, you can use the Elements and Network tools of the Microsoft Edge browser from within [Visual Studio Code][VisualstudioCode].  You can either launch or attach to an instance of Microsoft Edge and once you are connected you can displays the runtime HTML structure, alter the layout, fix styling issues and inspect network traffic.  

By default, the extension will launch a browser instance in an own window and give you the "Elements" functionality of the browser.

:::image type="complex" source="./media/edge-devtools-for-vscode-windowed.png" alt-text="Microsoft Edge DevTools for Visual Studio Code running with a full browser window" lightbox="./media/edge-devtools-for-vscode-windowed.png" ":::
   Microsoft Edge DevTools for Visual Studio Code running with a full browser window  
:::image-end:::

In the extension settings you can enable more functionality like "Headless Mode" and "Network".

:::image type="complex" source="./media/edge-devtools-for-vscode-settings.png" alt-text="Enabling or disabling headless mode and Network inspection in the extension settings" lightbox="./media/edge-devtools-for-vscode-settings.png":::
    Enabling or disabling headless mode and Network inspection in the extension settings
:::image-end:::

In headless mode the extension will not launch a full browser window to debug, but run the instance in the background instead. This means that you stay inside the editor and interact with the embedded browser. You won't also see any extra browser icon in your task bar.  

:::image type="complex" source="./media/edge-devtools-for-vscode-headless.png" alt-text="Microsoft Edge DevTools for Visual Studio Code running with a headless" lightbox="./media/edge-devtools-for-vscode-headless.png":::
   Microsoft Edge DevTools for Visual Studio Code running with a headless browser
:::image-end:::

> [!NOTE]
> If you work on a Macintosh computer, it might be best to turn on headless mode as we had a few reports about the browser window reporting itself as "Not Active" if the window isn't visible.  

If you also want to inspect the network traffic of your application, you can turn on the ***Network*** tab in the settings.

:::image type="complex" source="./media/edge-devtools-for-vscode-network.png" alt-text="Network inspection in Microsoft Edge DevTools for Visual Studio Code" lightbox="./media/edge-devtools-for-vscode-network.png":::
    Network inspection in Microsoft Edge DevTools for Visual Studio Code
:::image-end:::

## Launching Microsoft Edge From the extension  

Navigate to Microsoft Edge Tools in the **Activity Bar**.  Next to where it says **Microsoft Edge Tools: Targets,** there is a plus sign that opens the browser for your app.  If you selected the **about:blank** option, you must navigate to your web app in the browser for it to appear in the Elements panel in VS Code.  

## Launching Microsoft Edge from the Debug view  

If you are accustomed to using the Debug view in Visual Studio Code, access Microsoft Edge Tools from that tool.  Navigate to the Debug view \(`Ctrl`+`Shift`+`D` on Windows or `Command`+`Shift`+`D` on macOS\).  

If you do not have any configurations in VS Code, press `F5` on Windows or macOS or select the green **Play** button. Select **Edge** in the dropdown. You should see a `launch.json` file with the following configuration.  

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch Microsoft Edge and open the Edge DevTools",
      "request": "launch",
      "type": "vscode-edge-devtools.debug",
      "url": "http://localhost:8080"
    }
  ]
}
```  

Now that you have loaded the correct configuration, either press `F5` on Windows or macOS or select the green **Play** button. The Elements tool, that is familiar to you, from the Microsoft Edge browser launches in VS Code, allowing you to access a screencast of your browser and examine the components of your page.  

## Attaching to Microsoft Edge  

To attach VS Code to an instance of Microsoft Edge\(Chromium\), you must start the browser by running the following command from your terminal.  

`start msedge --remote-debugging-port=9222`  

Once the app has launched, add the configuration below to your **launch.json** file:  

```json
{
    "type": "vscode-edge-devtools.debug",
    "request": "attach",
    "name": "Attach to Microsoft Edge and open the developer tools",
    "url": "http://localhost:3000/",
    "webRoot": "${workspaceFolder}/out",
    "port": 9222
}
```  

Select **Attach to Microsoft Edge and open the developer tools** from the Debugger drop-down menu.  Next, either press `F5` on Windows or macOS or select the green **Play** button.  VS Code launches the Elements tool, allowing you to access a screencast of your browser, inspect the DOM, and the styling of the components on your page.  

## Getting in touch with the Microsoft Edge DevTools for Visual Studio Code extension team  

Send your feedback by [filing an issue][GithubMicrosoftVscodeEdgeDevtoolsNewIssue] against the [GitHub repo][GithubMicrosoftVscodeEdgeDevtools] of the extension.  

If you want to help make the Microsoft Edge DevTools for Visual Studio Code extension better, your contributions are welcome!  Find everything you need to get started in the [GitHub repo][GithubMicrosoftVscodeEdgeDevtools] of the extension.  

<!-- image links -->  

<!--[ImageGifElementsEdge]: ./media/elements-for-edge.gif "Elements for Edge VS Code extension in action"  -->  
[ImagePngElementsEdge]: ./media/elements-for-edge.png "Elements for Edge VS Code extension in action"  

<!--links -->  

[VscodeElementsEdge]: ./elements-for-edge.md "Elements For Microsoft Edge VS Code Extension | Microsoft Docs"  

[VisualstudioCode]: https://code.visualstudio.com "Visual Studio Code"  
[VisualStudioCodeDocs]: https://code.visualstudio.com/Docs "Documentation | Visual Studio Code"   

[GithubMicrosoftVscodeEdgeDevtools]: https://github.com/Microsoft/vscode-edge-devtools "microsoft/vscode-edge-devtools | GitHub"  
[GithubMicrosoftVscodeEdgeDevtoolsNewIssue]: https://github.com/Microsoft/vscode-edge-devtools/issues/new "New Issue - microsoft/vscode-edge-devtools | GitHub"

[VisualstudioMarketplaceElementsMicrosoftEdgeChromium]: https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools "Microsoft Edge Tools for VS Code"  
