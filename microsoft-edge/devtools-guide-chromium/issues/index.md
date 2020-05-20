---
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/20/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---





# Find And Fix Problems With The Microsoft Edge DevTools Issues Drawer Tab   



The **Issues** Drawer tab in Microsoft Edge DevTools reduces the notification fatigue and clutter of the **Console**.  Use it to find solutions to problems detected by the browser, such as cookie issues and mixed content.  

> [!NOTE]
> In Microsoft Edge 84, the **Issues** Drawer tab supports three types of issue:  
> *   Cookie problems  
> *   Mixed content  
> *   COEP issues  
> 
> The Microsoft Edge team plans to support more issue types in future versions of Microsoft Edge.  

<!--todo: add link COEP issues (WebDevCoopCoep) when published  -->  
<!--todo: add link Cookie problems (WebDevSamesiteCookiesExplained) when published  -->  
<!--todo: add link Mixed content (WebFundamentalsSecurityPreventMixedContentWhat) when published  -->  

## Open the Issues Drawer tab   

1.  Visit a page, such as [samesite-sandbox.glitch.me][GlitchSamesiteSandbox], that contains issues to fix.  
1.  [Open DevTools][DevtoolsOpen].  
1.  :::row:::
       :::column span="":::
          Select the **Go to Issues** button in the yellow warning bar.  
          
          :::image type="complex" source="../media/issues-open-issues-tab.msft.png" alt-text="Yellow warning bar for Issues detected" lightbox="../media/issues-open-issues-tab.msft.png":::
             Figure 1. Yellow warning bar for Issues detected  
          :::image-end:::  
       :::column-end:::
       :::column span="":::
          Alternatively, select **Issues** from the **More tools** menu.  
          
          :::image type="complex" source="../media//issues-more-tools-menu.msft.png" alt-text="Issues Drawer tab in More tools menu" lightbox="../media//issues-more-tools-menu.msft.png":::
             Figure 2. **Issues** Drawer tab in **More tools** menu  
          :::image-end:::  
       :::column-end:::
    :::row-end:::
    
1.  Select the **Refresh page** button, if necessary.  
    
    :::image type="complex" source="../media/issues-tab-before-refresh.msft.png" alt-text="Issues Drawer tab with Refresh page button" lightbox="../media/issues-tab-before-refresh.msft.png":::
       Figure 3. **Issues** Drawer tab with **Refresh page** button  
    :::image-end:::  

    The issues reported in the **Console** are quite hard to understand, such as the cookie warnings in the following image.  Based upon the reported issues, it may not be clear what you must do.  
    
    :::image type="complex" source="../media/issues-tab-after-refresh.msft.png" alt-text="Issues Drawer tab with two cookie issues" lightbox="../media/issues-tab-after-refresh.msft.png":::
       Figure 4. **Issues** Drawer tab with two cookie issues  
    :::image-end:::  
    
## View items in the Issues Drawer tab   

The **Issues** Drawer tab presents warnings in a structured, aggregated, and actionable way.  

1.  Select an item in the **Issues** Drawer tab to get guidance on how to fix the issue and find affected resources.  
    
    :::image type="complex" source="../media/issues-tab-issue-open.msft.png" alt-text="Cookie issue open in the Issues Drawer tab" lightbox="../media/issues-tab-issue-open.msft.png":::
       Figure 5. Cookie issue open in the **Issues** Drawer tab  
    :::image-end:::  
    
    Each item has four components:  
    
    *   A headline describing the issue.  
    *   A description providing the context and the solution.  
    *   An **AFFECTED RESOURCES** section that links to resources within the appropriate DevTools context such as the Network panel.  
    *   Links to further guidance.  
    
1.  Select items in **AFFECTED RESOURCES** to view details.  In this example, there is one cookie and one request affected.  
    
    :::image type="complex" source="../media/issues-tab-affected-resources.msft.png" alt-text="Affected resources open in the Issues Drawer tab" lightbox="../media/issues-tab-affected-resources.msft.png":::
       Figure 6. Affected resources open in the **Issues** Drawer tab  
    :::image-end:::  
    
## View issues in context   

1.  Select a resource link to view the item in the appropriate context within DevTools.  In this example, click `samesite-sandbox.glitch.me` under the **Name** column to show the cookies attached to that request.  
    
    :::image type="complex" source="../media/issues-tab-view-request.msft.png" alt-text="Affected resources open in the Issues Drawer tab" lightbox="../media/issues-tab-view-request.msft.png":::
       Figure 7. Affected resources open in the **Issues** Drawer tab  
    :::image-end:::  

1.  Scroll to view the item with a problem: in this case, the `ck02` cookie.  Hover over the information icon on the right to see the problem and how to fix it.  
    
    :::image type="complex" source="../media/issues-tab-view-issue.msft.png" alt-text="Issue with resource opened from the Issues Drawer tab" lightbox="../media/issues-tab-view-issue.msft.png":::
       Figure 8. Issue with resource opened from the **Issues** Drawer tab  
    :::image-end:::  

<!--## Feedback  -->  



<!-- image links -->  

<!-- links -->  

[DevtoolsOpen]: /microsoft-edge/devtools-guide-chromium/open "Open Microsoft Edge DevTools | Microsoft Docs"  

[GlitchSamesiteSandbox]: https://samesite-sandbox.glitch.me "SameSite cookie tests | Glitch"  

<!--[WebDevCoopCoep]: https://alphabet-dev/coop-coep/ "Making your website cross-origin isolated using COOP and COEP | alphabet-dev"  -->  
<!--[WebDevSamesiteCookiesExplained]: https://alphabet-dev/samesite-cookies-explained "SameSite cookies explained | alphabet-dev"  -->  
<!--[WebFundamentalsSecurityPreventMixedContentWhat]: /web/fundamentals/security/prevent-mixed-content/what-is-mixed-content "What Is Mixed Content? | WebFundamentals"  -->  

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
