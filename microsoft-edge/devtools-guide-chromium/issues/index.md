---
description: Use the Issues tool to find and fix problems with your website.
title: Find and fix problems with the Microsoft Edge DevTools Issues tool 
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 02/12/2021
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

> [!NOTE]
> In Microsoft Edge 84, the **Issues** tool supports three types of issue:  
> *   [Cookie problems][MDNSameSiteCookies]  
> *   [Mixed content][MDNMixedContent]  
> *   [COEP issues][W3CCOEPSpec]
> 
> The Microsoft Edge DevTools team plans to support more issue types in future versions of Microsoft Edge.  

## Open the Issues tool in the DevTools drawer  

1.  Navigate to a webpage, such as [samesite-sandbox.glitch.me][GlitchSamesiteSandbox], that contains issues to fix.  
1.  [Open DevTools][DevtoolsOpen].  
1.  :::row:::
       :::column span="":::
          Choose the **Go to Issues** button in the yellow warning bar.  
          
          :::image type="complex" source="../media/issues-open-issues-tab.msft.png" alt-text="Go to Issues button in yellow warning bar when Issues are detected" lightbox="../media/issues-open-issues-tab.msft.png":::
             The **Go to Issues** button in the yellow warning bar when Issues are detected.  
          :::image-end:::  
       :::column-end:::
       :::column span="":::
          Alternatively, choose **Issues** from the **More tools** menu.  
          
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
    
## View items in the Issues tool  

The **Issues** tool in the DevTools Drawer presents warnings in a structured, aggregated, and actionable way.  

1.  Choose an item in the **Issues** tool to get guidance on how to fix the issue and find affected resources.  
    
    :::image type="complex" source="../media/issues-tab-issue-open.msft.png" alt-text="Mark cross-site cookies as Secure issue open in the Issues tool" lightbox="../media/issues-tab-issue-open.msft.png":::
       **Mark cross-site cookies as Secure** issue open in the **Issues** tool  
    :::image-end:::  
    
    Each item has four components:  
    
    *   A headline describing the issue.  
    *   A description providing the context and the solution.  
    *   An **AFFECTED RESOURCES** section that links to resources within the appropriate DevTools context such as the Network panel.  
    *   Links to further guidance.  
    
1.  Choose items in **AFFECTED RESOURCES** to view details.  In the following example, the **Mark cross-site cookies as Secure** issue affects one cookie and two requests.  
    
    :::image type="complex" source="../media/issues-tab-affected-resources.msft.png" alt-text="Affected resources open in the Issues tool" lightbox="../media/issues-tab-affected-resources.msft.png":::
       Affected resources open in the **Issues** tool in the DevTools Drawer  
    :::image-end:::  
    
## View issues in context  

1.  Choose a resource link to view the item in the appropriate context within DevTools.  In the following example, choose `samesite-sandbox.glitch.me` under **Requests** to show the cookies attached to that request.  
    
    :::image type="complex" source="../media/issues-tab-view-request.msft.png" alt-text="View the affected cookie in the DevTools Network tool" lightbox="../media/issues-tab-view-request.msft.png":::
       View the affected cookie in the DevTools **Network** tool  
    :::image-end:::  

1.  Scroll to view the item with a problem:  for the following example, the `ck02` cookie.  Hover on the **SameSite** column to review the `None` value that the issue detected.  
    
    :::image type="complex" source="../media/issues-tab-view-issue.msft.png" alt-text="None value in the SameSite column for the ck02 cookie in the DevTools Network tool" lightbox="../media/issues-tab-view-issue.msft.png":::
       `None` value in the **SameSite** column for the `ck02` cookie in the DevTools **Network** tool  
    :::image-end:::  

## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  

[DevtoolsOpen]: ../open/index.md "Open Microsoft Edge DevTools | Microsoft Docs"  

[GlitchSamesiteSandbox]: https://samesite-sandbox.glitch.me "SameSite cookie tests | Glitch"  

[MDNSameSiteCookies]: https://developer.mozilla.org/docs/Web/HTTP/Headers/Set-Cookie/SameSite "SameSite cookies | MDN"  
[MDNMixedContent]: https://developer.mozilla.org/docs/Web/Security/Mixed_content "Mixed content | MDN"  

[W3CCOEPSpec]: https://wicg.github.io/cross-origin-embedder-policy "Cross-Origin Embedder Policy | Web Incubator Community Group"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/issues/index) and is authored by [Sam Dutton][SamDutton] \(Developer Advocate\).  
[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
[SamDutton]: https://developers.google.com/web/resources/contributors/samdutton  
