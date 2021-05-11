---
description: A list of the accessibility-testing features in Microsoft Edge DevTools.
title: Accessibility-testing features in DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/06/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
<!-- none of the original content remains in this article -->
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

# Accessibility-testing features in DevTools

Construct a list of accessibility aspects to check for your webpages.  Then use DevTools features to check those aspects of accessibility, as follows.


## Accessibility checklist and related DevTools features

| Accessibility check | Feature of DevTools | Article |
|---|---|---|
| Check that input fields have labels, for screen readers | **Issues** tool > **Accessibility** section | TBD |
| Check that images have alt text | **Issues** tool > **Accessibility** section | TBD |
| Check that text colors have enough contrast | **Issues** tool > **Accessibility** section | TBD |
| Check that text has adequate color contrast | **Elements** tool > **Styles** tab > **Color Picker** | [Testing text-color contrast using the Color Picker](color-picker.md) |
| Check text color contrast in the default state by using the Inspect tool's information overlay | **Inspect** tool > **Accessibility** section > **Contrast** row | TBD |
| Check accessibility during all states of elements, such as contrast during hover | **Elements** tool > **Styles** tab > **Toggle Element State** | TBD |
| Check that the webpage layout is usable when narrow | **Device Emulation** tool | TBD |
| Check individual elements for text contrast, screen reader text, and keyboard support | **Inspect** tool > **Accessibility** section of overlay | TBD |
| Checking the Accessibility Tree for keyboard and screen reader support | **Elements** tool > **Accessibility** tab > **Accessibility Tree** | TBD |
| TBD | **Elements** tool > **Accessibility** tab | [Testing accessibility using the Accessibility tab](accessibility-tab.md) |
| Check for contrast issues with dark theme and light theme | **Rendering** tool > **Emulate CSS media feature prefers-color-scheme** | TBD |
| Check that the webpage is usable by people with color blindness | **Rendering** tool > **Emulate vision deficiencies** dropdown list > **Protanopia** | TBD |
| Check that the webpage is usable with blurred vision | **Rendering** tool > **Emulate vision deficiencies** dropdown list > **Blurred vision** | TBD |
| Check that the page is usable with UI animation turned off (reduced motion) | **Rendering** tool > **Emulate CSS media feature prefers-reduced-motion** | TBD |
| Check various accessibility aspects through an automatic report | Lighthouse | [Testing accessibility using Lighthouse](lighthouse.md) |

    
## See also

*   [Overview of accessibility testing using DevTools][DevtoolsAccessibilityAccessibilitytestingindevtools]
*   [Navigating Microsoft Edge DevTools With Assistive Technology][DevtoolsAccessibilityNavigation]
*   [Accessibility testing][DevtoolsAccessibilityTest]
*   [screen reader][MDNScreenReader]
*   [Accessibility principles and best practices][MDNAccessibility]


## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- none of the original content remains in this article -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/accessibility/reference) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

<!-- links -->  
[DevtoolsAccessibilityTest]: ../../accessibility/test.md "Accessibility testing | Microsoft Docs"
[DevtoolsAccessibilityAccessibilitytestingindevtools]: accessibility-testing-in-devtools.md "Overview of accessibility testing using DevTools | Microsoft Docs"
[DevtoolsAccessibilityNavigation]: ./navigation.md "Navigate Microsoft Edge DevTools With Assistive Technology | Microsoft Docs"  
<!-- external -->
[MDNAccessibility]: https://developer.mozilla.org/docs/Web/Accessibility "Accessibility | MDN"  
[MDNScreenReader]: https://developer.mozilla.org/docs/Glossary/Screen_reader "Screen reader | MDN"  
[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
