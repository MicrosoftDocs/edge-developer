---
description: Microsoft Edge (Chromium) and Visual Studio Code
title: Visual Studio Code
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/23/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, vs code, visual studio code, debugger, webhint
---
# Visual Studio Code  

[Visual Studio Code][VisualStudioCodeDocs] is a lightweight, but powerful source code editor that runs on your desktop and is available for Windows, macOS, and Linux.  It comes with built-in support for JavaScript, TypeScript, and Node.js, so it is a great tool for web developers right out of the box!  If you are not using it yet, download [Visual Studio Code][VisualstudioCode].  

## Extensions  

<!--Todo: We want to put something like the tiles for extensions Visual Studio Code uses on this page https://code.visualstudio.com/Docs#top-extensions but I don't think this is a markdown page.  I think it's a web page.  I couldn't find anything in https://github.com/Microsoft/vscode-docs that looks like this page. In the meantime, here's what I've come up with: -->  

To acquire any of the extensions highlighted below, navigate to Extensions \(`Ctrl`+`Shift`+`X` on Windows or `Command`+`Shift`+`X` on macOS\) in Visual Studio Code.  

Search the Marketplace for the specific extension and select **Install**.  

:::image type="complex" source="./media/vscode-debugger-install.png" alt-text="Installing the Debugger for Microsoft Edge Visual Studio Code extension" lightbox="./media/vscode-debugger-install.png":::
   Installing the Debugger for Microsoft Edge Visual Studio Code extension  
:::image-end:::  

:::row:::
   :::column span="1":::
      [Debugger for Microsoft Edge](#debugger-for-microsoft-edge)  
      
      :::image type="complex" source="./media/visual-studio-code-extension-debugger-for-microsoft-edge.msft.png" alt-text="Debugger for Microsoft Edge Visual Studio Code extension" lightbox="./media/visual-studio-code-extension-debugger-for-microsoft-edge.msft.png":::
         Debugger for Microsoft Edge Visual Studio Code extension  
      :::image-end:::  
   :::column-end:::
   :::column span="1":::
      [Microsoft Edge Tools](#elements-for-microsoft-edge)  
      
      :::image type="complex" source="./media/visual-studio-code-extension-microsoft-edge-tools-for-visual-studio-code.msft.png" alt-text="Microsoft Edge Tools for Visual Studio Code Visual Studio Code extension" lightbox="./media/visual-studio-code-extension-microsoft-edge-tools-for-visual-studio-code.msft.png":::
         Microsoft Edge Tools for Visual Studio Code Visual Studio Code extension
      :::image-end:::  
   :::column-end:::
   :::column span="1":::
      [webhint](#webhint)  
      
      :::image type="complex" source="./media/visual-studio-code-extension-webhint.msft.png" alt-text="webhint Visual Studio Code extension" lightbox="./media/visual-studio-code-extension-webhint.msft.png":::
         webhint Visual Studio Code extension
      :::image-end:::  
   :::column-end:::
:::row-end:::  

## Debugger for Microsoft Edge  

With the [Debugger for Microsoft Edge][VisualstudioMarketplaceDebuggerMicrosoftEdge] Visual Studio Code extension, debug your front-end JavaScript code line-by-line and see `console.log()` statements directly from [Visual Studio Code][VisualstudioCode]!  
      
Using the Debugger tool, you may launch or attach to both Microsoft Edge \(EdgeHTML\) and Microsoft Edge \(Chromium\).  For a walkthrough of debugging Microsoft Edge from Visual Studio Code and sample `launch.json` configurations, navigate to [Debugger For Microsoft Edge Visual Studio Code Extension][VisualStudioCodeDebuggerEdge].  Select the following image to see the extension in action.  

:::image type="complex" source="./media/debugger-for-edge.png" alt-text="Debugger for Edge Visual Studio Code extension in action" lightbox="./media/debugger-for-edge.gif":::  
   Debugger for Edge Visual Studio Code extension in action
:::image-end:::  

## Elements for Microsoft Edge  
      
With the [Elements for Microsoft Edge][VisualstudioMarketplaceElementsMicrosoftEdgeChromium] Visual Studio Code extension, use the Elements tool of the Microsoft Edge browser from within Visual Studio Code.  By either launching or attaching, the Elements tool connects to an instance of Microsoft Edge, displays the runtime HTML structure, and allows you to alter the layout or fix styling issues.  
      
For more information, navigate to [Elements for Microsoft Edge Visual Studio Code extension][VisualStudioCodeElementsEdge].  Select the following image to see the extension in action.  
      
:::image type="content" source="./media/elements-for-edge.png" alt-text="Elements for Edge Visual Studio Code extension in action" lightbox="./media/elements-for-edge.gif":::  
   Elements for Edge Visual Studio Code extension in action
:::image-end:::  

## webhint  
      
Use [webhint][WebhintMain], a customizable linting tool, to improve the accessibility, performance, cross-browser compatibility, PWA compatibility, and security of your site.  It checks your code for best practices and common errors. The webhint open-source project, initially developed by the Microsoft Edge team, is now part of the [OpenJS Foundation][OpenjsFoundation].  The Microsoft Edge team continues to contribute to webhint alongside web developers in the community.  <!--Select the following image to see the extension in action.  -->  
      
:::image type="content" source="./media/webhint-extension.png" alt-text="Screenshot of webhint Visual Studio Code extension" lightbox="./media/webhint-extension.png":::  
   Screenshot of webhint Visual Studio Code extension
:::image-end:::
      
Identify and fix problems in your HTML, CSS, JavaScript, TypeScript, and more by adding the [webhint extension for Visual Studio Code][VisualstudioMarketplaceWebhint].  Hints appear as inline underlines and are summarized in the **Problems** pane.  
      
For more information, navigate to [How to use webhint in Visual Studio Code][VisualStudioCodeWebhint].  

<!--links -->  

[VisualStudioCodeDebuggerEdge]: ./debugger-for-edge.md "Debugger For Microsoft Edge Visual Studio Code Extension | Microsoft Docs"  
[VisualStudioCodeElementsEdge]: ./elements-for-edge.md "Elements For Microsoft Edge Visual Studio Code Extension | Microsoft Docs"  
[VisualStudioCodeWebhint]: ./webhint.md "Webhint Visual Studio Code Extension | Microsoft Docs"  

[VisualstudioCode]: https://code.visualstudio.com "Visual Studio Code"  
[VisualStudioCodeDocs]: https://code.visualstudio.com/Docs "Documentation | Visual Studio Code"   

[VisualstudioMarketplaceDebuggerMicrosoftEdge]: https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-edge "Debugger for Microsoft Edge | Visual Studio Marketplace"  
[VisualstudioMarketplaceElementsMicrosoftEdgeChromium]: https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools "Elements for Microsoft Edge (Chromium) | Visual Studio Marketplace"  

[VisualstudioMarketplaceWebhint]: https://marketplace.visualstudio.com/items?itemName=webhint.vscode-webhint "webhint | Visual Studio Marketplace"  

[WebhintMain]:  https://webhint.io "webhint"  
[OpenjsFoundation]:  https://openjsf.org "OpenJS Foundation"  
