---
title: Open Microsoft Edge DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/06/2020
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

When you want to inspect the styles or attributes of a DOM node, right-click the element and select **Inspect**.  

> ##### Figure 1  
> The **Inspect** option  
> ![The Inspect option][ImageInspectOption]  

Or press `Control`+`Shift`+`C` \(Windows\) or `Command`+`Option`+`C` \(macOS\).  

<!--See [Get Started With Viewing And Changing CSS][GetStartedCSS].  -->  

## Open the Console panel to view logged messages or run JavaScript   

Press `Control`+`Shift`+`J` \(Windows\) or `Command`+`Option`+`J` \(macOS\) to jump straight into the **Console** panel.  

<!--See [Get Started With The Console][ConsoleGetStarted].  -->

## Open the last panel you had open   

Press `Control`+`Shift`+`I` \(Windows\) or `Command`+`Option`+`I` \(macOS\).  

## Open DevTools from the Microsoft Edge main menu  

Click **Settings and more \(Alt+F\)** `...` and then select **More Tools** > **Developer Tools**.  

> ##### Figure 2  
> Opening DevTools from the Microsoft Edge main menu  
> ![Opening DevTools from the Microsoft Edge main menu][ImageOpenFromMain]  

## Auto-open DevTools on every new tab   

Open Microsoft Edge from the command line and pass the `--auto-open-devtools-for-tabs` flag.  

Windows \(CMD\):  

```cmd
start msedge --auto-open-devtools-for-tabs
```  

Windows \(PowerShell\):  

```powershell
Start-Process -FilePath "msedge" -ArgumentList "--auto-open-devtools-for-tabs"
```  

macOS:  

```bash
/Applications/Microsoft\ Edge\ Beta.app/Contents/MacOS/Microsoft\ Edge\ Beta --auto-open-devtools-for-tabs
```  

 



<!-- image links -->  

[ImagesMainIcon]: images/shared/main-menu-icon.msft.png  

[ImageInspectOption]: images/bing-right-click-inspect.msft.png "Figure 1: The Inspect option"  
[ImageOpenFromMain]: images/bing-customize-more-tools-developer-tools-transparent.msft.png "Figure 2: Opening DevTools from the Microsoft Edge main menu"  

<!-- links -->  

<!--[ConsoleGetStarted]: console/get-started.md ""  -->  
<!--[GetStartedCSS]: css.md "CSS"  -->

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/open) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
