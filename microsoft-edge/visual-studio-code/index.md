---
description: Microsoft Edge (Chromium) and Visual Studio Code
title: Visual Studio Code
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 11/20/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, vs code, visual studio code, debugger, webhint
---
# Visual Studio Code overview  

[Visual Studio Code][VisualStudioCodeDocs] is a lightweight, but powerful source code editor.  [Visual Studio Code][VisualStudioCodeDocs] is available for Windows, Linux, and macOS.  It includes built-in support for JavaScript, TypeScript, and Node.js, so it is a great tool for web developers before you customize it.  If you are not using it yet, download [Visual Studio Code][VisualstudioCode].  

## Extensions  

<!--todo: We want to put something like the tiles for extensions Visual Studio Code uses on this page https://code.visualstudio.com/Docs#top-extensions but I don't think this is a markdown page.  I think it's a web page.  I couldn't find anything in https://github.com/Microsoft/vscode-docs that looks like this page. In the meantime, here's what I've come up with: -->  

To acquire any of the extensions highlighted below, navigate to Extensions \(select `Ctrl`+`Shift`+`X` on Windows/Linux or `Command`+`Shift`+`X` on macOS\) in Visual Studio Code.  

Search the Marketplace for the specific extension and choose **Install**.  

:::image type="complex" source="./media/vscode-debugger-install.png" alt-text="Install the Debugger for Microsoft Edge Visual Studio Code extension" lightbox="./media/vscode-debugger-install.png":::
   Install the **Debugger for Microsoft Edge** Visual Studio Code extension  
:::image-end:::  

:::row:::
   :::column span="1":::
      :::image type="complex" source="./media/visual-studio-code-extension-debugger-for-microsoft-edge.msft.png" alt-text="Debugger for Microsoft Edge Visual Studio Code extension" lightbox="./media/visual-studio-code-extension-debugger-for-microsoft-edge.msft.png":::
         **Debugger for Microsoft Edge** Visual Studio Code extension  
      :::image-end:::  
      [Debugger for Microsoft Edge](#debugger-for-microsoft-edge)  
   :::column-end:::
   :::column span="1":::
      :::image type="complex" source="./media/visual-studio-code-extension-microsoft-edge-tools-for-visual-studio-code.msft.png" alt-text="Microsoft Edge Tools for Visual Studio Code Visual Studio Code extension" lightbox="./media/visual-studio-code-extension-microsoft-edge-tools-for-visual-studio-code.msft.png":::
         **Microsoft Edge Tools for Visual Studio Code** Visual Studio Code extension  
      :::image-end:::  
      [Microsoft Edge Tools for Visual Studio Code](#microsoft-edge-tools-for-visual-studio-code)  
   :::column-end:::
   :::column span="1":::
      :::image type="complex" source="./media/visual-studio-code-extension-webhint.msft.png" alt-text="webhint Visual Studio Code extension" lightbox="./media/visual-studio-code-extension-webhint.msft.png":::
         **webhint** Visual Studio Code extension  
      :::image-end:::  
      [webhint](#webhint)  
   :::column-end:::
:::row-end:::  

## Debugger for Microsoft Edge  

With the [Debugger for Microsoft Edge][VisualstudioMarketplaceDebuggerMicrosoftEdge] Visual Studio Code extension, debug your front-end JavaScript code line-by-line and see `console.log()` statements directly from [Visual Studio Code][VisualstudioCode].  
      
Using the Debugger tool, you may launch or attach to both Microsoft Edge \(EdgeHTML\) and Microsoft Edge \(Chromium\).  For a walkthrough of debugging Microsoft Edge from Visual Studio Code and sample `launch.json` configurations, navigate to [Debugger For Microsoft Edge Visual Studio Code Extension][VisualStudioCodeDebuggerEdge].  Choose the following image to see the extension in action.  

:::image type="complex" source="./media/debugger-for-edge.png" alt-text="Debugger for Edge Visual Studio Code extension in action" lightbox="./media/debugger-for-edge.gif":::
   **Debugger for Microsoft Edge** Visual Studio Code extension in action  
:::image-end:::  

## Microsoft Edge Tools for Visual Studio Code

With the [Microsoft Edge Tools for Visual Studio Code][VisualstudioMarketplaceMicrosoftEdgeToolsVisualStudioCode] Visual Studio Code extension, use the **Elements** tool of the Microsoft Edge browser within Visual Studio Code.  Use it for the following actions.  

*   Attach to an instance or launch an instance of Microsoft Edge.  
*   Display the runtime HTML structure.  
*   Update the layout.  
*   Fix styling issues.  
    
For more information, navigate to [Microsoft Edge Tools for Visual Studio Code Visual Studio Code extension][VisualStudioCodeMicrosoftEdgeDevtoolsExtension].  <!--  Choose the following image to see the extension in action.  -->  
      
:::image type="complex" source="./media/microsoft-edge-tools-for-visual-studio-code.png" alt-text="Microsoft Edge Tools for Visual Studio Code Visual Studio Code extension in action" lightbox="./media/microsoft-edge-tools-for-visual-studio-code.png":::
   **Microsoft Edge Tools for Visual Studio Code** Visual Studio Code extension in action  
:::image-end:::  

## webhint  
      
Use [webhint][WebhintMain], a customizable linting tool, to improve the following functionality of your site.  

*   Accessibility
*   Performance
*   Cross-browser compatibility
*   PWA compatibility
*   Security

It checks your code for coding practices and common errors. The webhint open-source project, initially developed by the Microsoft Edge team, is now part of the [OpenJS Foundation][OpenjsFoundation].  The Microsoft Edge team continues to contribute to webhint alongside web developers in the community.  <!--  Choose the following image to see the extension in action.  -->  
      
:::image type="complex" source="./media/webhint-extension.png" alt-text="Screenshot of webhint Visual Studio Code extension" lightbox="./media/webhint-extension.png":::
   Screenshot of **webhint** Visual Studio Code extension  
:::image-end:::  
      
Identify and fix problems in your website by adding the [webhint extension for Visual Studio Code][VisualstudioMarketplaceWebhint].  Hints examine HTML, CSS, JavaScript, TypeScript, and more.  Hints appear as inline underlines and are summarized in the **Problems** pane.  
      
For more information, navigate to [How to use webhint in Visual Studio Code][VisualStudioCodeWebhint].  

<!--links -->  

[VisualStudioCodeDebuggerEdge]: ./debugger-for-edge.md "Debugger For Microsoft Edge Visual Studio Code Extension | Microsoft Docs"  
[VisualStudioCodeMicrosoftEdgeDevtoolsExtension]: ./microsoft-edge-devtools-extension.md "Microsoft Edge DevTools for Visual Studio Code extension | Microsoft Docs"  
[VisualStudioCodeWebhint]: ./webhint.md "Webhint Visual Studio Code Extension | Microsoft Docs"  

[VisualstudioCode]: https://code.visualstudio.com "Visual Studio Code"  
[VisualStudioCodeDocs]: https://code.visualstudio.com/Docs "Documentation | Visual Studio Code"   

[VisualstudioMarketplaceDebuggerMicrosoftEdge]: https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-edge "Debugger for Microsoft Edge | Visual Studio Marketplace"  
[VisualstudioMarketplaceMicrosoftEdgeToolsVisualStudioCode]: https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools "Microsoft Edge Tools for Visual Studio Code | Visual Studio Marketplace"  

[VisualstudioMarketplaceWebhint]: https://marketplace.visualstudio.com/items?itemName=webhint.vscode-webhint "webhint | Visual Studio Marketplace"  

[WebhintMain]:  https://webhint.io "webhint"  
[OpenjsFoundation]:  https://openjsf.org "OpenJS Foundation"  
