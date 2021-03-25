---
description: How to use Elements for Microsoft Edge (Chromium) from Visual Studio Code
title: Elements for Microsoft Edge (Chromium) from Visual Studio Code
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/07/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, vs code, visual studio code, elements
---

# Microsoft Edge DevTools for Visual Studio Code extension  

Use <!--the [Microsoft Edge DevTools for Visual Studio Code][VisualstudioMarketplaceElementsMicrosoftEdgeChromium] -->this extension to access in Microsoft Edge DevTools inside [Microsoft Visual Studio Code][VisualstudioCode].  You have access to the **Elements** and **Network** tools in Microsoft Edge DevTools.  You may either launch or attach to an instance of Microsoft Edge.  After you connect you may display the runtime HTML structure, alter the layout, fix styling issues, and inspect network traffic.  

## Elements tool  

By default, the extension launches a browser instance in a unique window and gives you the **Elements** functionality of Microsoft Edge DevTools.  

:::image type="complex" source="./media/edge-devtools-for-vscode-windowed.png" alt-text="Microsoft Edge DevTools for Visual Studio Code running with a full browser window" lightbox="./media/edge-devtools-for-vscode-windowed.png":::
   Microsoft Edge DevTools for Visual Studio Code running with a full browser window  
:::image-end:::  

In the extension settings, you may enable more functionality like **Headless Mode** and **Network**.  

:::image type="complex" source="./media/edge-devtools-for-vscode-settings.png" alt-text="Enabling (or disabling) headless mode and Network inspection in the extension settings" lightbox="./media/edge-devtools-for-vscode-settings.png":::
   Enabling \(or disabling\) headless mode and Network inspection in the extension settings  
:::image-end:::  

## Headless Mode  

In headless mode, this extension does not launch a full browser instance to debug.  It runs an instance in the background.  You may have to stay inside the editor and interact with the embedded browser.  An extra browser icon is not be displayed in your task bar.  

:::image type="complex" source="./media/edge-devtools-for-vscode-headless.png" alt-text="Microsoft Edge DevTools for Visual Studio Code running with a headless" lightbox="./media/edge-devtools-for-vscode-headless.png":::
   Microsoft Edge DevTools for Visual Studio Code running with a headless browser  
:::image-end:::  

> [!NOTE]
> On macOS, you should turn on headless mode as your preferred mode.  Using headless mode should solve an issue where, if the window is not visible, the browser window reports that it is `Not Active`.  

## Network tool  

If you also want to inspect the network traffic of your application, open the settings and turn on the **Network** tab.  

:::image type="complex" source="./media/edge-devtools-for-vscode-network.png" alt-text="Network inspection in Microsoft Edge DevTools for Visual Studio Code" lightbox="./media/edge-devtools-for-vscode-network.png":::
    Network inspection in Microsoft Edge DevTools for Visual Studio Code  
:::image-end:::  

## Launching Microsoft Edge From the extension  

Navigate to Microsoft Edge Tools in the **Activity Bar**.  Next to where it says **Microsoft Edge Tools: Targets,** there is a plus sign that opens the browser for your app.  If you choose the **about:blank** option, you must navigate to your web app in the browser for it to appear in the **Elements** panel in Visual Studio Code.  

## Launching Microsoft Edge from the Debug view  

If you are accustomed to using the Debug view in Visual Studio Code, access Microsoft Edge DevTools from it.  

1.  In Visual Studio Code, navigate to the Debug view 
    *   Select `Ctrl`+`Shift`+`D` on Windows/Linux  \(`Command`+`Shift`+`D` on macOS\).  

<!--TODO:  Is this section intended to be optional  -->  
> [!NOTE]
> 1.  If you do not have any configurations in Visual Studio Code, complete one of the following actions.  
>     *   Select `F5`.  
>     *   Choose the **Play** \(green\) button.  
> 1.  In the dropdown, choose **Edge** in the dropdown.  
> 1.  A `launch.json` file should be displayed that contains the following configuration.  
>     
>     ```json
>     {
>       "version": "0.2.0",
>       "configurations": [
>         {
>           "name": "Launch Microsoft Edge and open the Edge DevTools",
>           "request": "launch",
>           "type": "vscode-edge-devtools.debug",
>           "url": "http://localhost:8080"
>         }
>       ]
>     }
>     ```  
>     
> After you load the correct configuration, complete the following action.  

1.  To launch the **Elements** tool from Visual Studio Code, complete one of the following actions. 
    *   Select `F5`.  
    *   Choose the **Play** \(green\) button.  
         
Now, you may do the following actions.  

*   Access a screencast of your browser.  
*   Inspect the DOM and the styling of the components on your page.  

## Attaching to Microsoft Edge  

To open a browser and attach the instance to Visual Studio Code, complete the following steps. 

1.  To open an instance of Microsoft Edge \(Chromium\), copy and run the following command.  
    
    ```shell
    start msedge --remote-debugging-port=9222
    ```  
    
1.  After the instance launches, copy and paste the following code snippet into your `launch.json` file.  
    
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
    
1.  In Visual Studio Code, open the **Debugger** drop-down menu and choose **Attach to Microsoft Edge and open the developer tools**.  
1.  To launch the **Elements** tool from Visual Studio Code, complete one of the following actions. 
    *   Select `F5`.  
    *   Choose the **Play** \(green\) button.  
         
Now, you may do the following actions.  

*   Access a screencast of your browser.  
*   Inspect the DOM and the styling of the components on your page.  
    
## Getting in touch with the Microsoft Edge DevTools for Visual Studio Code extension team  

Send your feedback by [filing an issue][GithubMicrosoftVscodeEdgeDevtoolsNewIssue] against the [GitHub repo][GithubMicrosoftVscodeEdgeDevtools] of the extension.  

If you want to help make <!--the Microsoft Edge DevTools for Visual Studio Code -->this extension better, your contributions are welcome.  Find everything you need to get started in the [GitHub repo][GithubMicrosoftVscodeEdgeDevtools] of the extension.  

<!--links -->  

[VisualstudioCode]: https://code.visualstudio.com "Visual Studio Code"  
[VisualStudioCodeDocs]: https://code.visualstudio.com/Docs "Documentation | Visual Studio Code"   

[GithubMicrosoftVscodeEdgeDevtools]: https://github.com/Microsoft/vscode-edge-devtools "microsoft/vscode-edge-devtools | GitHub"  
[GithubMicrosoftVscodeEdgeDevtoolsNewIssue]: https://github.com/Microsoft/vscode-edge-devtools/issues/new "New Issue - microsoft/vscode-edge-devtools | GitHub"

[VisualstudioMarketplaceElementsMicrosoftEdgeChromium]: https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools "Microsoft Edge Tools for Visual Studio Code"  
