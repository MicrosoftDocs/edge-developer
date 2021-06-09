---
description: Use the Issues tool to find and fix problems with your website.
title: Find and fix problems with the Microsoft Edge DevTools Issues tool 
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/10/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
<!-- Copyright Sam Dutton 

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->  
# Find and fix problems with the Microsoft Edge DevTools Issues tool  

The **Issues** tool in Microsoft Edge DevTools reduces the notification fatigue and clutter of the **Console**.  Use it to find solutions to problems detected by the browser, such as cookie issues and mixed content.  

The **Issues** tool supports provides feedback in the following categories:

*  Accessibility
*  Cross-browser compatibility
*  Performance
*  Progressive Web Apps
*  Security
*  Other

This feedback is provided by a number of sources, including the Chromium platform, [axe][AxeWebsite], [MDN][MDNCompat], and [webhint][webhintio].


## Open the Issues tool in the DevTools drawer  

1.  Navigate to a webpage, such as [samesite-sandbox.glitch.me][GlitchSamesiteSandbox], that contains issues to fix.  
1.  [Open DevTools][DevtoolsOpenIndex].  
1.  :::row:::
       :::column span="":::
          Choose the **Go to Issues** button in the yellow warning bar.  
       :::column-end:::
       :::column span="":::
          Alternatively, choose **Issues** from the **More tools** menu.  
       :::column-end:::
    :::row-end:::  
    :::row:::
       :::column span="":::
          :::image type="complex" source="../media/issues-open-issues-tab.msft.png" alt-text="Go to Issues button in yellow warning bar when Issues are detected" lightbox="../media/issues-open-issues-tab.msft.png":::
             The **Go to Issues** button in the yellow warning bar when Issues are detected.  
          :::image-end:::  
       :::column-end:::
       :::column span="":::
          :::image type="complex" source="../media//issues-more-tools-menu.msft.png" alt-text="Issues tool in More tools menu" lightbox="../media//issues-more-tools-menu.msft.png":::
             **Issues** tool in **More tools** menu  
          :::image-end:::  
       :::column-end:::
    :::row-end:::  
    
1.  Choose the **Reload page** button, if necessary.  
    
    :::image type="complex" source="../media/issues-tab-before-refresh.msft.png" alt-text="Issues tool in the DevTools Drawer with Reload page button" lightbox="../media/issues-tab-before-refresh.msft.png":::
       **Issues** tool in the DevTools Drawer with **Reload page** button  
    :::image-end:::  

    The issues reported in the **Console** are quite hard to understand, such as the cookie warnings in the following image.  Based upon the reported issues, it may not be clear what you must do.  
    
    :::image type="complex" source="../media/issues-tab-after-refresh.msft.png" alt-text="Issues tool in the DevTools Drawer with three cookie issues" lightbox="../media/issues-tab-after-refresh.msft.png":::
       **Issues** tool in the DevTools Drawer with three cookie issues  
    :::image-end:::  
    
## Display items in the Issues tool  

The **Issues** tool in the DevTools Drawer presents warnings in a structured, aggregated, and actionable way.  

1.  Choose an item in the **Issues** tool to get guidance on how to fix the issue and find affected resources.  
    
    :::image type="complex" source="../media/issues-tab-issue-open.msft.png" alt-text="Mark cross-site cookies as Secure issue open in the Issues tool" lightbox="../media/issues-tab-issue-open.msft.png":::
       **Mark cross-site cookies as Secure** issue open in the **Issues** tool  
    :::image-end:::  
    
    Each item has four components.  
    
    *   A headline describing the issue.  
    *   A description providing the context and the solution.  
    *   An **AFFECTED RESOURCES** section that links to resources within the appropriate DevTools context such as the **Network** tool.  
    *   Links to further guidance.  
        
1.  Choose items in **AFFECTED RESOURCES** to display details.  In the following example, the **Mark cross-site cookies as Secure** issue affects one cookie and two requests.  
    
    :::image type="complex" source="../media/issues-tab-affected-resources.msft.png" alt-text="Affected resources open in the Issues tool" lightbox="../media/issues-tab-affected-resources.msft.png":::
       Affected resources open in the **Issues** tool in the DevTools Drawer  
    :::image-end:::  
    
## Display issues in context  

1.  Choose a resource link to display the item in the appropriate context within DevTools.  In the following example, choose `samesite-sandbox.glitch.me` under **Requests** to display the cookies attached to that request.  
    
    :::image type="complex" source="../media/issues-tab-view-request.msft.png" alt-text="Display the affected cookie in the DevTools Network tool" lightbox="../media/issues-tab-view-request.msft.png":::
       Display the affected cookie in the DevTools **Network** tool  
    :::image-end:::  
    
1.  Scroll to display the item with a problem:  for the following example, the `ck02` cookie.  Hover on the **SameSite** column to review the `None` value that the issue detected.  
    
    :::image type="complex" source="../media/issues-tab-view-issue.msft.png" alt-text="None value in the SameSite column for the ck02 cookie in the DevTools Network tool" lightbox="../media/issues-tab-view-issue.msft.png":::
       `None` value in the **SameSite** column for the `ck02` cookie in the DevTools **Network** tool  
    :::image-end:::  
    
## Open issues from the Elements tool  

Wavy underlines display under HTML in the **DOM** view of the **Elements** tool.  The wavy underlines indicate code issues and suggestions related to accessibility, compatibility, performance, and so on.  

To open the **Issues** tool and learn more about the issue and how to fix it, complete one of the following actions.  

*   Select and hold `Shift`, and then choose any wavy underline.  
*   Complete the following actions.  
    1.  Hover on any wavy underline.  
    1.  Open the contextual menu \(right-click\).  
    1.  Choose **Show in Issues**.  
        
:::row:::
   :::column span="":::
      :::image type="complex" source="../whats-new/media/2021/04/elements-iframe-highlight-issues.msft.png" alt-text="Choose the underlined error in the Elements tool" lightbox="../whats-new/media/2021/04/elements-iframe-highlight-issues.msft.png":::
         Choose the underlined error in the **Elements** tool  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../whats-new/media/2021/04/elements-iframe-highlight-issues-focus.msft.png" alt-text="Display error details in the Issues tool" lightbox="../whats-new/media/2021/04/elements-iframe-highlight-issues-focus.msft.png":::
         Display error details in the **Issues** tool  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

## Issues are automatically sorted by severity  

In each feedback category, each issue marked as an **Error** appears first, followed by each issue marked as a **Warning**, then each issue marked as a **Tip**.  To help you refine your issues, extra filter options are planned for a future update.  

:::image type="complex" source="../whats-new/media/2021/04/elements-issues-ordered-issues.msft.png" alt-text="The Issues tool displays sorted issues by severity" lightbox="../whats-new/media/2021/04/elements-issues-ordered-issues.msft.png":::
   The **Issues** tool displays sorted issues by severity  
:::image-end:::  
    
## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  
[DevtoolsOpenIndex]: ../open/index.md "Open Microsoft Edge DevTools | Microsoft Docs"  
[GlitchSamesiteSandbox]: https://samesite-sandbox.glitch.me "SameSite cookie tests | Glitch"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/issues/index) and is authored by [Sam Dutton][SamDutton] \(Developer Advocate\).  
[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors#kayce-basques  
[SamDutton]: https://developers.google.com/web/resources/contributors#sam-dutton  
