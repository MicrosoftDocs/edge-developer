---
title: Run Commands With The Microsoft Edge DevTools Command Menu
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
   limitations under the License.  -->  





# Run Commands With The Microsoft Edge DevTools Command Menu   

  

The Command Menu provides a fast way to navigate the Microsoft Edge DevTools UI and accomplish common tasks, such as [disabling JavaScript][JavascriptDisable].  You may be familiar with a similar feature in Visual Studio Code called the [Command Palette][VisualStudioCodeUICommandPalette], which was the original inspiration for the Command Menu.  

> ##### Figure 1  
> Using the Command Menu to disable JavaScript  
> ![Using the Command Menu to disable JavaScript][ImageDisableJS]  

## Open the Command Menu   

Press `Control`+`Shift`+`P` \(Windows\) or `Command`+`Shift`+`P` \(macOS\). Or click **Customize And Control DevTools** `...` and then select **Run Command**.  

> ##### Figure 2  
> Run Command  
> ![Run Command][ImageRunCommand]  

## See other available actions   

If you use the workflow outlined in [Open the Command Menu](#open-the-command-menu), the Command Menu opens with a `>` character prepended to the Command Menu text box.  

> ##### Figure 3  
> The command character  
> ![The command character][ImageCommandCharacter]  

Delete the `>` character and type `?` to see other actions that are available from the Command Menu.  

> ##### Figure 4  
> Other available actions  
> ![Other available actions][ImageActions]  

 



<!-- image links -->  

[ImageDisableJS]: images/command-menu-run-command-java.msft.png "Figure 1: Using the Command Menu to disable JavaScript"  
[ImageRunCommand]: images/options-run-command.msft.png "Figure 2: Run Command"  
[ImageCommandCharacter]: images/command-menu-run-command.msft.png "Figure 3: The command character"  
[ImageActions]: images/command-menu-help.msft.png "Figure 4: Other available actions"  

<!-- links -->  

[JavascriptDisable]: ../javascript/disable.md "Disable JavaScript With Microsoft Edge DevTools"  

[VisualStudioCodeUICommandPalette]: https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette "Command palette - Visual Studio Code UI"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/command-menu/index) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
