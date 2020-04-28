---
description: Microsoft Edge (Chromium) and Visual Studio Code
title: Visual Studio Code
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/28/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, vs code, visual studio code, debugger, webhint
---

# Visual Studio Code  

[Visual Studio Code][VisualStudioCodeDocs] is a lightweight, but powerful source code editor that runs on your desktop and is available for Windows, macOS, and Linux.  It comes with built-in support for JavaScript, TypeScript, and Node.js, so it is a great tool for web developers right out of the box!  If you are not using it yet, download [Visual Studio Code][VisualstudioCode].  

## Extensions  

<!-- We want to put something like the tiles for extensions VS Code uses on this page https://code.visualstudio.com/Docs#top-extensions but I don't think this is a markdown page. I think it's a web page. I couldn't find anything in https://github.com/Microsoft/vscode-docs that looks like this page. In the meantime, here's what I've come up with: -->  

To acquire any of the extensions highlighted below, navigate to Extensions \(`Ctrl`+`Shift`+`X` on Windows or `Command`+`Shift`+`X` on macOS\) in VS Code.  

Search the Marketplace for the specific extension and click **Install**.  

![Installing the Debugger for Microsoft Edge VS Code extension][ImageVscodeDebuggerInstall]  

## Debugger for Microsoft Edge  

With the [Debugger for Microsoft Edge][VisualstudioMarketplaceDebuggerMicrosoftEdge] VS Code extension, debug your front-end JavaScript code line-by-line and see `console.log()` statements directly from [Visual Studio Code][VisualstudioCode]!  

This extensions gives you the ability to launch or attach to both Microsoft Edge \(EdgeHTML\) and Microsoft Edge \(Chromium\).  For a walkthrough of debugging Microsoft Edge from VS Code and sample `launch.json` configurations, see [Debugger For Microsoft Edge VS Code Extension][VscodeDebuggerEdge].  

![Debugger for Edge VS Code extension in action][ImageGifDebuggerEdge]  

## Elements for Microsoft Edge  

With the [Elements for Microsoft Edge][VisualstudioMarketplaceElementsMicrosoftEdgeChromium] VS Code extension, use the Elements tool of the Microsoft Edge browser from within Visual Studio Code.  By either launching or attaching, the Elements tool connects to an instance of Microsoft Edge, displays the runtime HTML structure, and allows you to alter the layout or fix styling issues.  

For more information, see [Elements for Microsoft Edge VS Code extension][VscodeElementsEdge].  

![Elements for Edge VS Code extension in action][ImageGifElementsEdge]  

## webhint

Use [webhint][WebhintMain], a customizable linting tool, to improve the accessibility, performance, cross-browser compatibility, PWA compatibility, and security of your site.  It checks your code for best practices and common errors.  This open-source project, initially developed by the Microsoft Edge team, is now part of the [OpenJS Foundation][OpenjsFoundation].  The Microsoft Edge team continues to contribute to webhint alongside web developers in the community.  

![Screenshot of webhint VS Code extension][ImageWebhintExtension]  

Identify and fix problems in your HTML, CSS, JavaScript, TypeScript, and more by adding the [webhint extension for VS Code][VisualstudioMarketplaceWebhint]. Hints appear as inline underlines and are summarized in the Problems pane.  

For more information, see [How to use webhint in Visual Studio Code][VscodeWebhint].  

<!-- image links -->  

[ImageGifDebuggerEdge]: ./media/debugger-for-edge.gif "Debugger for Edge VS Code extension in action"  
[ImageGifElementsEdge]: ./media/elements-for-edge.gif "Elements for Edge VS Code extension in action"  
[ImagePngVscodeDebuggerInstall]: ./media/vscode-debugger-install.png "Installing the Debugger for Microsoft Edge VS Code extension"  
[ImagePngDebuggerEdge]: ./media/debugger-for-edge.png "Debugger for Edge VS Code extension in action"  
[ImagePngElementsEdge]: ./media/elements-for-edge.png "Elements for Edge VS Code extension in action"  
[ImagePngWebhintExtension]: ./media/webhint-extension.png "Screenshot of webhint VS Code extension"  

<!--links -->  

[VscodeDebuggerEdge]: ./debugger-for-edge.md "Debugger For Microsoft Edge VS Code Extension"  
[VscodeElementsEdge]: ./elements-for-edge.md "Elements For Microsoft Edge VS Code Extension"  
[VscodeWebhint]: ./webhint.md "Webhint VS Code Extension"  

[VisualstudioCode]: https://code.visualstudio.com "Visual Studio Code"  
[VisualStudioCodeDocs]: https://code.visualstudio.com/Docs "Documentation | Visual Studio Code"   

[VisualstudioMarketplaceDebuggerMicrosoftEdge]: https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-edge "Debugger for Microsoft Edge | Visual Studio Marketplace"  
[VisualstudioMarketplaceElementsMicrosoftEdgeChromium]: https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools "Elements for Microsoft Edge (Chromium) | Visual Studio Marketplace"  

[VisualstudioMarketplaceWebhint]: https://marketplace.visualstudio.com/items?itemName=webhint.vscode-webhint "webhint | Visual Studio Marketplace"  

[WebhintMain]:  https://webhint.io "webhint"  
[OpenjsFoundation]:  https://openjsf.org "OpenJS Foundation"  
