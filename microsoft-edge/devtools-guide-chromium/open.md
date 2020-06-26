---
title: Open Microsoft Edge DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/26/2020
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

There are many ways to open Microsoft Edge DevTools, because different users want fast access to different parts of the DevTools UI.  

## Open the Elements panel to inspect the DOM or CSS  

### [DevTools UI](#tab/devtools-ui/)  

<a id="elements-inspection"></a>  

To inspect the styles or attributes of a DOM node, hover on the element, open the contextual menu \(right-click\), and select **Inspect**.  

### [Keyboard shortcut](#tab/windows-keyboard/)  

<a id="elements-inspection"></a>  

To inspect the styles or attributes of a DOM node, press `Control`+`Shift`+`C` \(Windows\) or `Command`+`Option`+`C` \(macOS\).  

* * *  

:::image type="complex" source="./media/bing-right-click-inspect.msft.png" alt-text="The **Inspect** option" lightbox="./media/bing-right-click-inspect.msft.png":::
   The **Inspect** option  
:::image-end:::  

<!--See [Get Started With Viewing And Changing CSS][GetStartedCSS].  -->  

## Open the Console panel  

Open the [Console][DevToolsConsoleIndex] pane to view logged messages or run JavaScript.  

### [DevTools UI](#tab/devtools-ui/)  

<a id="console-inspection"></a>  

Use the following steps to open [Console][DevToolsConsoleIndex] pane.  

1.  [Open DevTools](#open-microsoft-edge-devtools).  
1.  Select the [Console][DevToolsConsoleIndex] pane.  

### [Keyboard shortcut](#tab/keyboard-shortcut/)  

<a id="console-inspection"></a>  

To jump straight into the [Console][DevToolsConsoleIndex] pane, press `Control`+`Shift`+`J` \(Windows\) or `Command`+`Option`+`J` \(macOS\).  

* * *  

<!--See [Get Started With The Console][ConsoleGetStarted].  -->

## Open the previous panel  

<!--### [Keyboard shortcut](#tab/keyboard-shortcut/)  -->  

<!--<a id="open-previous"></a>  -->  

To jump to the previous panel that you had open, press `Control`+`Shift`+`I` \(Windows\) or `Command`+`Option`+`I` \(macOS\).  

<!--* * *  -->  

## Open Microsoft Edge DevTools  

Open DevTools from the Microsoft Edge main menu.  

### [DevTools UI](#tab/devtools-ui/)  

<a id="open-devtools-task"></a>  

Use the following steps to open Microsoft Edge DevTools.  

1.  Select the  `...` icon \(the **Settings and more** icon\).  
1.  Select **More Tools**.  
1.  Select **Developer Tools**.  

### [Keyboard shortcut](#tab/keyboard-shortcut/)  

<a id="open-devtools-task"></a>  

To open Microsoft Edge DevTools, press `F12` or `Control`+`Shift`+`I` \(Windows\) or `Command`+`Option`+`I` \(macOS\).  

* * *  

:::image type="complex" source="./media/bing-customize-more-tools-developer-tools-transparent.msft.png" alt-text="Open DevTools from the Microsoft Edge main menu" lightbox="./media/bing-customize-more-tools-developer-tools-transparent.msft.png":::
   Open DevTools from the Microsoft Edge main menu  
:::image-end:::  

## Auto-open DevTools on every new tab  

To auto-open DevTools on every new tab, open Microsoft Edge from the command-line and pass the `--auto-open-devtools-for-tabs` flag.  

#### [CMD (Windows)](#tab/cmd-windows/)  

<a id="selenium-tools-install"></a>  

```cmd
start msedge --auto-open-devtools-for-tabs
```  

#### [PowerShell (Windows)](#tab/powershell-windows/)  

<a id="selenium-tools-install"></a>  

```powershell
Start-Process -FilePath "msedge" -ArgumentList "--auto-open-devtools-for-tabs"
```  

#### [bash (macOS)](#tab/bash-macos/)  

<a id="selenium-tools-install"></a>  

```bash
/Applications/Microsoft\ Edge\ Beta.app/Contents/MacOS/Microsoft\ Edge\ Beta --auto-open-devtools-for-tabs
```  

* * *  

<!-- links -->  

[DevToolsConsoleIndex]: ./console/index.md "Console Overview | Microsoft Docs"  

<!--[ConsoleGetStarted]: /microsoft-edge/devtools-guide-chromium/console/get-started ""  -->  
<!--[GetStartedCSS]: /microsoft-edge/devtools-guide-chromium/css "CSS"  -->

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/open) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
