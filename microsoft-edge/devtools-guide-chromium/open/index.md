---
description: All of the ways that you open the Microsoft Edge DevTools.
title: Open Microsoft Edge DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/01/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
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
   limitations under the License. -->
# Open Microsoft Edge DevTools

There are many ways to open Microsoft Edge DevTools, helping you quickly access different parts of the DevTools UI.


<!-- ====================================================================== -->
## Open Microsoft Edge DevTools

To open DevTools, use either of the following options.

*   Use the Microsoft Edge UI.
    *  Choose the **Settings and more** (`...`) icon >  **More Tools** >  **Developer Tools**.

*   Use the keyboard.
    *   Press `F12` or `Control`+`Shift`+`I` (Windows, Linux) or `Command`+`Option`+`I` (macOS).

See [Keyboard shortcuts](../shortcuts/index.md).

:::image type="complex" source="../media/bing-customize-more-tools-developer-tools-transparent.msft.png" alt-text="Open DevTools from the Microsoft Edge main menu" lightbox="../media/bing-customize-more-tools-developer-tools-transparent.msft.png":::
   Open DevTools from the Microsoft Edge main menu
:::image-end:::


<!-- ====================================================================== -->
## Open the Elements panel to inspect the DOM or CSS

When you're viewing a rendered webpage in the browser, to inspect the styles or attributes of a [Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) (DOM) node, do either of the following:
*   Right-click the element in the rendered webpage and select **Inspect**.
*   Press `Control`+`Shift`+`C` (Windows, Linux) or `Command`+`Option`+`C` (macOS).  See [Keyboard shortcuts](../shortcuts/index.md).

See [DevTools for beginners: Get started with CSS](../beginners/css.md).

<!-- :::image type="content" source="../media/bing-right-click-inspect.msft.png" alt-text="The Inspect option" lightbox="../media/bing-right-click-inspect.msft.png"::: -->


<!-- ====================================================================== -->
## Open the Console panel

To open the [Console](../console/index.md) panel to view logged messages or run JavaScript, press `Control`+`Shift`+`J` (Windows, Linux) or `Command`+`Option`+`J` (macOS).  See [Keyboard shortcuts](../shortcuts/index.md).


<!-- ====================================================================== -->
## Open the previous panel

To jump to the previously open panel, press `Control`+`Shift`+`I` (Windows, Linux) or `Command`+`Option`+`I` (macOS).  See [Keyboard shortcuts](../shortcuts/index.md).


<!-- ====================================================================== -->
## Auto-open DevTools on every new tab

To auto-open DevTools on every new tab, open Microsoft Edge from the command line and pass the `--auto-open-devtools-for-tabs` flag.

### [CMD (Windows)](#tab/cmd-Windows/)

<a id="auto-open-devtools-command-line"></a>

```cmd
start msedge --auto-open-devtools-for-tabs
```

### [PowerShell (Windows)](#tab/powershell-Windows/)

<a id="auto-open-devtools-command-line"></a>

```powershell
Start-Process -FilePath "msedge" -ArgumentList "--auto-open-devtools-for-tabs"
```

### [bash (macOS)](#tab/bash-macos/)

<a id="auto-open-devtools-command-line"></a>

```bash
/Applications/Microsoft\ Edge\ Beta.app/Contents/MacOS/Microsoft\ Edge\ Beta --auto-open-devtools-for-tabs
```

### [bash (Linux)](#tab/bash-linux/)

<a id="auto-open-devtools-command-line"></a>

```bash
microsoft-edge-dev --auto-open-devtools-for-tabs
```

* * *


<!-- ====================================================================== -->
## Toggle the F12 keyboard shortcut on or off

To change the `F12` keyboard shortcut setting that opens the DevTools, complete the following actions:

1.  Navigate to `edge://settings/system`.
1.  In `Developer Tools`, choose **Open the DevTools when the F12 key is pressed** to toggle the setting to off or on. Toggle the setting to off to stop the `F12` keyboard shortcut from opening DevTools.
1.  After you set the toggle to off, verify that `F12` no longer opens DevTools.

    > [!NOTE]
    > After turning off **Open the DevTools when the F12 key is pressed**, open DevTools again.  For example, press `Ctrl`+`Shift`+`I`, or right-click a webpage and select **Inspect**.


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/open) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
