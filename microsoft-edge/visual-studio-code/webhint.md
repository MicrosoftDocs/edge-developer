---
title: The webhint extension for Visual Studio Code
description: Installing and using the webhint extension for Visual Studio Code.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 08/24/2021
---
# The webhint extension for Visual Studio Code

Use webhint, a customizable linting tool, to improve the functionality of your site, including:

*   Accessibility.
*   Performance.
*   Cross-browser compatibility.
*   PWA compatibility.
*   Security.

webhint checks your code for best practices and common errors.  Identify and fix problems in your files, including HTML, CSS, JavaScript, and TypeScript.  Hints appear as wavy underlines in the text editor, and are summarized in the **Problems** pane:

![The webhint extension for Visual Studio Code.](media/webhint-extension.png)

webhint is an open-source project.  It was initially developed by the Microsoft Edge team, and is now part of the [OpenJS Foundation](https://openjsf.org).  The Microsoft Edge team continues to contribute to webhint alongside web developers in the community.

For more information, see the [webhint](https://webhint.io) site.


<!-- ====================================================================== -->
## Installing webhint

Inspect and fix problems in your website by adding the [webhint extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=webhint.vscode-webhint).

To install the webhint extension from within Visual Studio Code:

1. In Visual Studio Code, navigate to **Extensions**.  To do this, you can press `Ctrl`+`Shift`+`X` on Windows/Linux or `Command`+`Shift`+`X` on macOS.

1. Search the Marketplace for the **webhint** extension, select the extension, and then select **Install**.

   :::image type="content" source="./media/visual-studio-code-extension-webhint.msft.png" alt-text="The webhint Visual Studio Code extension." lightbox="./media/visual-studio-code-extension-webhint.msft.png":::

Or, you can install the [webhint extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=webhint.vscode-webhint) from the Visual Studio Marketplace.


<!-- ====================================================================== -->
## Configuring webhint in Visual Studio Code

This extension uses a [default configuration](https://github.com/webhintio/hint/blob/master/packages/configuration-development/index.json) json file that activates hints and parsers for HTML, CSS, templating systems (JSX/TSX, Angular, and so on), JavaScript/TypeScript, and more.

```json
{
    "connector": "local",
    "extends": [
        "accessibility",
        "progressive-web-apps"
    ],
    "formatters": [
        "html",
        "summary"
    ],
    "hints": [
        "apple-touch-icons",
        "button-type",
        "compat-api/css",
        "compat-api/html",
        "create-element-svg",
        "css-prefix-order",
        "disown-opener",
        "highest-available-document-mode",
        "manifest-exists",
        "meta-charset-utf-8",
        "meta-viewport",
        "no-bom",
        "no-protocol-relative-urls",
        "scoped-svg-styles",
        "sri",
        "typescript-config/consistent-casing",
        "typescript-config/import-helpers",
        "typescript-config/is-valid",
        "typescript-config/no-comments",
        "typescript-config/strict",
        "typescript-config/target"
    ],
    "hintsTimeout": 10000,
    "parsers": [
        "babel-config",
        "css",
        "html",
        "javascript",
        "jsx",
        "less",
        "sass",
        "typescript",
        "typescript-config",
        "webpack-config"
    ]
}
```

If you want more control over the hints and parsers that get activated, create a local `.hintrc` file to configure webhint.  For help with output from specific hints, see [webhint user guide](https://webhint.io/docs/user-guide/configuring-webhint/summary).


<!-- ====================================================================== -->
## Getting in touch with the webhint team

Send your feedback by [filing an issue](https://github.com/webhintio/hint/issues/new) in the [webhintio/hint](https://github.com/webhintio/hint) repo.

To contribute to the extension, see [Contributing](https://github.com/webhintio/hint/blob/master/packages/extension-vscode/CONTRIBUTING.md) at the `webhintio/hint` repo.


<!-- ====================================================================== -->
## See also

*  [Visual Studio Code](/microsoft-edge/visual-studio-code/index)
*  [Accessibility](/microsoft-edge/accessibility)
