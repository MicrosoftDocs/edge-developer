---
title: Override The User Agent String From Microsoft Edge DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 03/26/2020
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

# Override The User Agent String From Microsoft Edge DevTools   

To override the [user agent][MDNUserAgent] string from Microsoft Edge DevTools:  

1.  Press `Control`+`Shift`+`P` \(Windows\) or `Command`+`Shift`+`P` \(macOS\) to open the **Command Menu**.  
    
    > ##### Figure 1  
    > The Command Menu  
    > ![The Command Menu][ImageCommandMenu]  
    
1.  Type `network conditions`, select **Show Network conditions**, and press `Enter` to open the **Network conditions** tab.  
1.  In the **User agent** section, disable the **Select automatically** checkbox.  
    
    > ##### Figure 2  
    > Disabling **Select automatically**  
    > ![Disabling Select automatically][ImageUserAgentDisableSelectAutomatically]  
    
1.  Select a user agent string from the list, or enter your own custom string.  

<!--## Feedback   -->  

<!-- image links -->  

[ImageCommandMenu]: /microsoft-edge/devtools-guide-chromium/media/device-mode-console-command-menu.msft.png "Figure 1: The Command Menu"  
[ImageUserAgentDisableSelectAutomatically]: /microsoft-edge/devtools-guide-chromium/media/device-mode-console-network-conditions-user-agent-select-automatically-deselected.msft.png "Figure 2: Disabling Select automatically"  

<!-- links -->  

[MDNUserAgent]: https://developer.mozilla.org/docs/Glossary/User_agent "User agent | MDN"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/device-mode/override-user-agent) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
