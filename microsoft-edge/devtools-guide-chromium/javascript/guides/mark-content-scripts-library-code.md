---
title: Mark Content Scripts as Library Code
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 03/18/2020
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





# Mark Content Scripts as Library Code   



When using the **Sources** panel of Microsoft Edge DevTools to [step through code][DevToolsJavascriptStepThroughCode], sometimes you pause on code that you do not recognize.  You probably paused on code for one of the Microsoft Edge Extensions that you installed.  Complete the following steps to not pause on extension code.  

1.  Open DevTools, select **Customize and control DevTools** `...` and click **Settings**.  You may also open **Settings** by pressing `F1`.  

1.  Select the **Library code** tab which opens the **Framework Library Code** section of **Settings**.  
1.  Enable the **Mark content scripts as Library code** checkbox.  
    
    > ##### Figure 1  
    > Enable the **Mark content scripts as Library code** checkbox  
    > ![Enable the Mark content scripts as Library code checkbox][ImageMarkContentScriptsLibraryCode]  

<!--## Feedback   -->  



<!-- image links -->  

[ImageMarkContentScriptsLibraryCode]: /microsoft-edge/devtools-guide-chromium/media/javascript-settings-library-code-mark-content-scripts-library-code.msft.png "Figure 1: Enable the Mark content scripts as Library code checkbox"  

<!-- links -->  

[DevToolsJavascriptStepThroughCode]: ../index.md#step-4-step-through-the-code "Step 4: Step through the code - Get Started with Debugging JavaScript in Microsoft Edge DevTools"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/javascript/guides/blackbox-chrome-extension-scripts) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools & Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
