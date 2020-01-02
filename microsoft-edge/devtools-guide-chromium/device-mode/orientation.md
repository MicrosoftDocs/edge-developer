---
title: Simulate Device Orientation With Microsoft Edge DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/02/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
<!-- Copyright Kayce Basques 

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->





# Simulate Device Orientation With Microsoft Edge DevTools   



To simulate different device orientations from Microsoft Edge DevTools:  

<!--todo: update device orientation section when available -->  

1.  Press `Control`+`Shift`+`P` \(Windows\) or `Command`+`Shift`+`P` \(macOS\) to open the **Command Menu**.  
    
    > ##### Figure 1  
    > The Command Menu  
    > ![The Command Menu][ImageCommandMenu]  
    
1.  Type `sensors`, select **Show Sensors**, and press `Enter`.  
    The **Sensors** tab opens at the bottom of your DevTools window.  
1.  From the **Orientation** list, select one of the preset orientations, such as `Portrait upside down`, or select **Custom orientation** to provide your own exact orientation.  
    
    > ##### Figure 2  
    > Selecting `Portrait upside down` from the **Orientation** list  
    > ![Selecting Portrait upside down from the Orientation list][ImageOrientationPortraitUpsideDown]  
    
    After selecting **Custom orientation**, the `alpha`, `beta`, and `gamma` fields are enabled.  
    <!--See [Alpha][alpha], [Beta][beta], and [Gamma][gamma] to understand how these axes work.  -->  
    <!--todo: update links to alpha, beta, and gamma section when available -->  
    You are also able to set a custom orientation by dragging the **Orientation Model**.  Hold `Shift` before dragging to rotate along the `alpha` axis.  
    
    > ##### Figure 3  
    > The **Orientation Model**  
    > ![The Orientation Model][ImageOrientationModel]  

<!--## Feedback   -->  



<!-- image links -->  

[ImageCommandMenu]: images/console-command-menu.msft.png "Figure 1: The Command Menu"  
[ImageOrientationPortraitUpsideDown]: images/console-sensors-orientation-portrait-upside-down.msft.png "Figure 2: Selecting Portrait upside down from the Orientation list"  
[ImageOrientationModel]: images/console-sensors-orientation-custom.msft.png "Figure 3: The Orientation Model"  

<!-- links -->  

<!--[WebFundamentasNativeHardwareDeviceOrientationIndex]: /web/fundamentals/native-hardware/device-orientation/index "Device Orientation \& Motion"  -->  
<!--[WebFundamentasNativeHardwareDeviceOrientationIndexAlpha]: /web/fundamentals/native-hardware/device-orientation/index#alpha "Alpha - Device Orientation \& Motion"  --> 
<!--[WebFundamentasNativeHardwareDeviceOrientationIndexBeta]: /web/fundamentals/native-hardware/device-orientation/index#beta "Beta - Device Orientation \& Motion"  -->  
<!--[WebFundamentasNativeHardwareDeviceOrientationIndexGamma]: /web/fundamentals/native-hardware/device-orientation/index#gamma "Gamma - Device Orientation \& Motion"  -->  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/device-mode/orientation) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools & Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: http://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
