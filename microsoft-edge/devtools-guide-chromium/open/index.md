---
description: All of the ways that you open the Microsoft Edge DevTools.
title: Open Microsoft Edge DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/04/2021
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

Each of the following tasks enable you to inspect the styles or attributes of a DOM node.

*   Hover on the element, open the contextual menu \(right-click\), and choose **Inspect**.  
*   Select `Control`+`Shift`+`C` \(Windows, Linux\) or `Command`+`Option`+`C` \(macOS\).  For more information, navigate to [Microsoft Edge DevTools keyboard shortcuts][DevtoolsShortcutsIndex].  

:::image type="complex" source="../media/bing-right-click-inspect.msft.png" alt-text="The Inspect option" lightbox="../media/bing-right-click-inspect.msft.png":::
   The **Inspect** option  
:::image-end:::  

<!--Navigate to [Get Started With Viewing And Changing CSS][GetStartedCSS].  -->  

## Open the Console panel  

Each of the following tasks enable you to open the [Console][DevtoolsConsoleIndex] pane to view logged messages or run JavaScript.  

*   Use the following steps to open [Console][DevtoolsConsoleIndex] pane.  
    
    1.  [Open DevTools](#open-microsoft-edge-devtools).  
    1.  Choose the [Console][DevtoolsConsoleIndex] pane.  

*   To jump straight into the [Console][DevtoolsConsoleIndex] pane, select `Control`+`Shift`+`J` \(Windows, Linux\) or `Command`+`Option`+`J` \(macOS\).  For more information, navigate to [Microsoft Edge DevTools keyboard shortcuts][DevtoolsShortcutsIndex].  

<!--Navigate to [Get Started With The Console][ConsoleGetStarted].  -->

## Open the previous panel  

To jump to the previous panel that you had open, select `Control`+`Shift`+`I` \(Windows, Linux\) or `Command`+`Option`+`I` \(macOS\).  For more information, navigate to [Microsoft Edge DevTools keyboard shortcuts][DevtoolsShortcutsIndex].  

## Open Microsoft Edge DevTools  

To open DevTools, use either of the following options.  

*   Use the Microsoft Edge UI.  
    
    1.  Choose the **Settings and more** \(`...`\) icon >  **More Tools** >  **Developer Tools**.  
    
*   Use the keyboard.  
    *   Select `F12` or `Control`+`Shift`+`I` \(Windows, Linux\) or `Command`+`Option`+`I` \(macOS\).  

For more information, navigate to [Microsoft Edge DevTools keyboard shortcuts][DevtoolsShortcutsIndex].  

:::image type="complex" source="../media/bing-customize-more-tools-developer-tools-transparent.msft.png" alt-text="Open DevTools from the Microsoft Edge main menu" lightbox="../media/bing-customize-more-tools-developer-tools-transparent.msft.png":::
   Open DevTools from the Microsoft Edge main menu  
:::image-end:::  

## Auto-open DevTools on every new tab  

To auto-open DevTools on every new tab, open Microsoft Edge from the command-line and pass the `--auto-open-devtools-for-tabs` flag.  

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

## Toggle the F12 keyboard shortcut on or off  

To change the `F12` keyboard shortcut setting that opens the DevTools, complete the following actions.  

1.  Choose the icon the **Settings and more** \(`...`\) icon > **Settings**.  
1.  In **Search settings**, enter `Developer Tools`.  
    
    :::image type="complex" source="../media/settings-developer-tools-f12-on.msft.png" alt-text="The Open the DevTools when the F12 key is pressed setting" lightbox="../media/settings-developer-tools-f12-on.msft.png":::
       The **Open the DevTools when the F12 key is pressed** setting  
    :::image-end:::  
    
1.  Choose **Open the DevTools when the F12 key is pressed** to toggle the setting to off \(or on\).  Toggle the setting to off to stop the `F12` keyboard shortcut from opening DevTools.  
    
    :::image type="complex" source="../media/settings-developer-tools-f12-off.msft.png" alt-text="The Open the DevTools when the F12 key is pressed setting is turned off" lightbox="../media/settings-developer-tools-f12-off.msft.png":::
       The **Open the DevTools when the F12 key is pressed** setting is turned off  
    :::image-end:::  
    
1.  After you set the toggle to off, select `F12` to confirm that DevTools no longer open.  
    
    > [!NOTE]
    > After you turn off the **Open the DevTools when the F12 key is pressed** setting, to open the DevTools, complete one of the following actions.  
    > 
    > *   Select `Ctrl`+`Shift`+`I`.  
    > *   Open the contextual menu \(right-click\) > **Inspect**.  
    
## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  

[DevtoolsConsoleIndex]: ../console/index.md "Console Overview | Microsoft Docs"  
[DevtoolsShortcutsIndex]: ../shortcuts/index.md "Microsoft Edge DevTools keyboard shortcuts | Microsoft Docs"  

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
[KayceBasques]: https://developers.google.com/web/resources/contributors#kayce-basques  
