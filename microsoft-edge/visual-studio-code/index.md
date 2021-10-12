---
description: Microsoft Edge (Chromium) and Visual Studio Code.
title: Visual Studio Code
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 08/24/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, vs code, visual studio code, debugger, webhint
---
# Visual Studio Code overview

Visual Studio Code includes built-in support for JavaScript, TypeScript, and Node.js, so it is a great tool for web developers.  Visual Studio Code is a lightweight but powerful source code editor that's available for Windows, Linux, and macOS.  This article gives an overview of extensions for Visual Studio Code that add features for users of Microsoft Edge DevTools.

*  [Download Visual Studio Code][VisualstudioCode]
*  [Getting Started][VisualStudioCodeDocs] - Documentation for Visual Studio Code


<!-- ====================================================================== -->
## The Microsoft Edge DevTools extension for Visual Studio Code

With the **Microsoft Edge DevTools** extension for Visual Studio Code, you can use the **Elements** tool of the Microsoft Edge browser within Visual Studio Code.  Use the Elements tool to:
*   Attach to an instance or launch an instance of Microsoft Edge.
*   Display the runtime HTML structure.
*   Update the layout.
*   Fix styling issues.

:::image type="complex" source="./media/microsoft-edge-tools-for-visual-studio-code.png" alt-text="The Microsoft Edge DevTools extension for Visual Studio Code" lightbox="./media/microsoft-edge-tools-for-visual-studio-code.png":::
   The **Microsoft Edge DevTools** extension for Visual Studio Code
:::image-end:::

To install the Microsoft Edge DevTools extension:
1. In Visual Studio Code, navigate to **Extensions** \(select `Ctrl`+`Shift`+`X` on Windows/Linux or `Command`+`Shift`+`X` on macOS\).
1. Search the Marketplace for the extension **Microsoft Edge Tools for VS Code**, select the extension, and then select **Install**.

:::image type="complex" source="./media/vscode-edge-tools-install.png" alt-text="Installing the Microsoft Edge DevTools extension for Visual Studio Code" lightbox="./media/vscode-edge-tools-install.png":::
   Installing the **Microsoft Edge DevTools** extension for Visual Studio Code
:::image-end:::

### See also

*  [Microsoft Edge DevTools extension for Visual Studio Code][VisualStudioCodeMicrosoftEdgeDevtoolsExtension] - Using the extension.
*  [Microsoft Edge Tools for Visual Studio Code][VisualstudioMarketplaceMicrosoftEdgeToolsVisualStudioCode] - Information about the extension, in the Visual Studio Marketplace.


<!-- ====================================================================== -->
## The webhint extension for Visual Studio Code

Use [webhint][WebhintMain], a customizable linting tool, to improve the following functionality of your site.

*   Accessibility
*   Performance
*   Cross-browser compatibility
*   PWA compatibility
*   Security

The webhint tool checks your code for coding practices and common errors.  The webhint open-source project, initially developed by the Microsoft Edge team, is now part of the [OpenJS Foundation][OpenjsFoundation].  The Microsoft Edge team continues to contribute to webhint alongside web developers in the community.

Identify and fix problems in your website by adding the [webhint extension for Visual Studio Code][VisualstudioMarketplaceWebhint].  Hints examine HTML, CSS, JavaScript, TypeScript, and more.  Hints appear as wavy underlines in the text editor, and are summarized in the **Problems** pane.

:::image type="complex" source="./media/webhint-extension.png" alt-text="The webhint extension for Visual Studio Code" lightbox="./media/webhint-extension.png":::
   The **webhint** extension for Visual Studio Code
:::image-end:::

To install the webhint extension:
1. In Visual Studio Code, navigate to **Extensions** \(select `Ctrl`+`Shift`+`X` on Windows/Linux or `Command`+`Shift`+`X` on macOS\).
1. Search the Marketplace for the **webhint** extension, select the extension, and then select **Install**.

:::image type="complex" source="./media/visual-studio-code-extension-webhint.msft.png" alt-text="The webhint Visual Studio Code extension" lightbox="./media/visual-studio-code-extension-webhint.msft.png":::
   The **webhint** Visual Studio Code extension
:::image-end:::

### See also

*  [The webhint extension for Visual Studio Code][VisualStudioCodeWebhint] - How to use webhint in Visual Studio Code.
*  [webhint][WebhintMain]


<!-- ====================================================================== -->
<!--links -->
[VisualStudioCodeMicrosoftEdgeDevtoolsExtension]: ./microsoft-edge-devtools-extension.md "Microsoft Edge DevTools for Visual Studio Code extension | Microsoft Docs"
[VisualStudioCodeWebhint]: ./webhint.md "The webhint extension for Visual Studio Code | Microsoft Docs"
<!-- external links -->
[VisualstudioCode]: https://code.visualstudio.com "Visual Studio Code"
[VisualStudioCodeDocs]: https://code.visualstudio.com/Docs "Documentation | Visual Studio Code"

[VisualstudioMarketplaceMicrosoftEdgeToolsVisualStudioCode]: https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools "Microsoft Edge Tools for Visual Studio Code | Visual Studio Marketplace"

[VisualstudioMarketplaceWebhint]: https://marketplace.visualstudio.com/items?itemName=webhint.vscode-webhint "webhint | Visual Studio Marketplace"

[OpenjsFoundation]: https://openjsf.org "OpenJS Foundation"

[WebhintMain]: https://webhint.io "webhint"
