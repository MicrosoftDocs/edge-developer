---
title: Change Microsoft Edge DevTools Placement (Undock, Dock To Bottom, Dock To Left)
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





# Change Microsoft Edge DevTools Placement (Undock, Dock To Bottom, Dock To Left)   



By default DevTools is docked to the right of your viewport.  You may also dock to bottom, dock to left, or undock the DevTools to a separate window.  

> ##### Figure 1  
> Dock To Left  
> ![Dock To Left][ImageDockLeft]  

> ##### Figure 2  
> Dock To Bottom  
> ![Dock To Bottom][ImageDockBottom]  

> ##### Figure 3  
> Browser in separate window  
> ![Browser in separate window][ImageUndockBrowser]  

> ##### Figure 4  
> Undocked DevTools in separate window  
> ![Undocked DevTools in separate window][ImageUndockDevTools]  

## Change placement from the main menu   

1.  Click **Customize And Control DevTools** `...` and select **Undock Into Separate Window** ![Undock][ImageUndockIcon], **Dock To Bottom** ![Dock To Bottom][ImageBottomIcon], or **Dock To Left** ![Dock To Left][ImageLeftIcon].  
    
    > ##### Figure 5  
    > Selecting **Undock Into Separate Window**  
    > ![Selecting Undock Into Separate Window][ImageUndockSettings]  
    
## Change placement from the Command Menu   

1.  [Open the Command Menu][DevToolsCommandMenu].  
1.  Run one of the following commands: `Dock To Bottom`, `Undock Into Separate Window`.  Currently there is no command for docking to left, but you may access it from the [main menu](#change-placement-from-the-main-menu).  
    
    > ##### Figure 6  
    > The undock command  
    > ![The undock command][ImageUndockCommand]  

 



<!-- image links -->  

[ImageUndockIcon]: images/undock-icon.msft.png  
[ImageBottomIcon]: images/bottom-icon.msft.png  
[ImageLeftIcon]: images/left-icon.msft.png  

[ImageDockLeft]: images/elements-styles-right-docked.msft.png "Figure 1: Dock To Left"  
[ImageDockBottom]: images/elements-styles-bottom-docked.msft.png "Figure 2: Dock To Bottom"  
[ImageUndockBrowser]: images/elements-styles-options-dock-side-highlight-browser.msft.png "Figure 3: Browser in separate window"  
[ImageUndockDevTools]: images/elements-styles-options-dock-side-highlight-devtools.msft.png "Figure 4: Undocked DevTools in separate window"  
[ImageUndockSettings]: images/elements-styles-options-dock-side-highlight.msft.png "Figure 5: Selecting Undock Into Separate Window"  
[ImageUndockCommand]: images/elements-styles-command-menu-undo.msft.png "Figure 6: The undock command"  

<!-- links -->  

[DevToolsCommandMenu]: ../command-menu/index.md "Run Commands With The Microsoft Edge DevTools Command Menu"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/customize/placement) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
