---
title: Run snippets of JavaScript on any webpage
description: Snippets are small scripts that you can author and run within the Sources tool of Microsoft Edge DevTools.  You can access and run resources from any webpage.  When you run a Snippet, it runs from the context of the currently open webpage.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 10/17/2023
---
<!-- Copyright Kayce Basques

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->
# Run snippets of JavaScript on any webpage

If you're entering the same code into the **Console** tool repeatedly, consider saving the code as a snippet instead, and then running the snippet.  Snippets are scripts that you author in the **Sources** tool.  Snippets have access to the JavaScript context of the webpage, and you can run snippets on any webpage.  Snippets can be used to alter a webpage, such as to change its content or appearance, or to extract data.

The following screenshot shows Microsoft Edge with a webpage on the left and DevTools on the right. The **Sources** tool is open, displaying the source code of the snippet that's selected in the **Snippets** tab. The snippet code was run, making changes to the webpage:

![The webpage, altered by the snippet](./snippets-images/snippets-overview.png)

The snippet source code is shown below:

```javascript
// Change the background color to "dimgrey".
document.body.style.backgroundColor = "dimgrey";

// Add a paragraph at the bottom of the document.
const p = document.createElement("p");
p.textContent = "Hello world";
p.style.color = "white";
p.style.fontSize = "2rem";
document.body.appendChild(p);

// Log a message to the console.
console.log("Hello world");
```

The code changes the background color of the webpage to dimgrey, adds a new line of text at the bottom of the webpage, and logs a message to the **Console** tool.

When you run a snippet on a webpage, the snippet's source code is added to the current webpage. For more information about changing the existing code of a webpage instead of adding new code, see [Override webpage resources with local copies (Overrides tab)](./overrides.md).

#### Include all your code in one file

The security settings of most webpages block from loading other scripts in snippets. For this reason, you must include all your code in one file.


<!-- ====================================================================== -->
## Open the Snippets tab

The **Snippets** tab is grouped with the **Page** tab in the **Navigator** pane, on the left of the **Sources** tool.

To open the **Snippets** tab:

1. To open DevTools, right-click the webpage, and then select **Inspect**. Or, press **Ctrl+Shift+I** (Windows, Linux) or **Command+Option+I** (macOS). DevTools opens.

1. In DevTools, on the **Activity Bar**, select the **Sources** tab. If that tab isn't visible, click the **More tools** (![More tools icon](./snippets-images/more-tools-icon.png)) button.

   ![The Sources tool with the Page tab open on the left](./snippets-images/sources-tool-page-pane.png)

1. In the **Navigator** pane (on the left), select the **Snippets** tab.  To access the **Snippets** option, you might need to click the **More tabs** (![More tabs](./snippets-images/more-tabs-icon.png)) button.


#### Open the Snippets tab from the Command Menu

You can also open the **Snippets** tab by using the Command Menu:

1. Select anything in DevTools, so that DevTools has focus.

1. Press **Ctrl+Shift+P** (Windows, Linux) or **Command+Shift+P** (macOS) to open the Command Menu.

1. Start typing "snippets", select **Show Snippets**, and then press **Enter** to run the command:

   ![The Show Snippets command](./snippets-images/command-menu.png)


<!-- ====================================================================== -->
## Create a new snippet

To create a new snippet from the **Snippets** tab:

1. [Open the Snippets tab](#open-the-snippets-tab).

1. Click **New snippet** (**+**).

1. Enter a name for your snippet, and then press **Enter**:

   ![A new, empty, snippet in the Sources tool](./snippets-images/new-snippet.png)

#### Create a new snippet from the Command Menu

1. Focus your cursor somewhere in DevTools.

1. Press **Ctrl+Shift+P** (Windows, Linux) or **Command+Shift+P** (macOS) to open the Command Menu.

1. Start typing "snippet", select **Create new snippet**, and then press **Enter**:

   ![The command for creating a new snippet](./snippets-images/new-snippet-command-menu.png)

To rename your new snippet, see [Rename a snippet](#rename-a-snippet), below.


<!-- ====================================================================== -->
## Edit a snippet

To edit the source code of a snippet:

1. [Open the Snippets tab](#open-the-snippets-tab).

1. In the **Snippets** tab, click the name of the snippet that you want to edit.  The snippet opens in the **Code Editor**:

   ![The Code Editor](./snippets-images/edit-snippet.png)

1. Use the **Code Editor** to add JavaScript to your snippet.

1. When an asterisk appears next to the name of your snippet, it means you have unsaved code.  Press **Ctrl+S** (Windows, Linux) or **Command+S** (macOS) to save:

   ![An asterisk next to the snippet name indicates unsaved code](./snippets-images/unsaved-changes.png)


<!-- ====================================================================== -->
## Run a snippet

#### Run a snippet from the Sources tool

1. [Open the Snippets tab](#open-the-snippets-tab).

1. Click the name of the snippet that you want to run.  The snippet opens in the **Code Editor**:

1. Click the **Run snippet** (![Run snippet](./snippets-images/run-snippet-icon.png)) button, or press **Ctrl+Enter** (Windows, Linux) or **Command+Enter** (macOS):

   ![The run snippet button at the bottom of the code editor](./snippets-images/run-snippet-from-sources-tool.png)

#### Run a snippet from the Command Menu

1. Focus your cursor somewhere in DevTools.

1. Press **Ctrl+Shift+P** (Windows, Linux) or **Command+Shift+P** (macOS) to open the Command Menu.

1. Delete the **>** character and type the **!** character followed by the name of the snippet that you want to run:

   ![Running a snippet from the Command Menu](./snippets-images/run-snippet-from-command-menu.png)

1. Press **Enter** to run the snippet.


<!-- ====================================================================== -->
## Rename a snippet

1. [Open the Snippets tab](#open-the-snippets-tab).

1. Right-click the snippet name, and then select **Rename**.


<!-- ====================================================================== -->
## Delete a snippet

1. [Open the Snippets tab](#open-the-snippets-tab).

1. Right-click the snippet name, and then select **Remove**.


<!-- ====================================================================== -->
## Save a snippet

By default, snippets are only available within DevTools, but you can also save them to disk.

1. [Open the Snippets tab](#open-the-snippets-tab).

1. Right-click the snippet name, and then select **Save as**.

1. When prompted, enter a file name and location.


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/devtools/javascript/snippets/) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
