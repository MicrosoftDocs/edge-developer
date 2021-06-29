---
description: Testing accessibility using Lighthouse from within DevTools.
title: Test accessibility using Lighthouse
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/07/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
<!-- this article was created on 05/11/2021 by moving a section out from the "Accessibility reference" article (reference.md) -->
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

# Test accessibility using Lighthouse

You can use Lighthouse from within DevTools to audit the accessibility of a page and generate a report. You can use the Lighthouse tool to determine:

*   Whether a page is properly marked up for screen readers.  
*   Whether the text elements on a page have sufficient contrast ratios using the Color Picker. For more information, navigate to [Test text-color contrast using the Color Picker](color-picker.md).   

> [!NOTE]
> The **Lighthouse** tool provides links to content hosted on third-party websites.  Microsoft is not responsible for and has no control over the content of these sites and any data that may be collected.  

To audit a page using the Lighthouse tool, perform the following steps.

1.  Navigate to the URL that you want to audit.
1.  In DevTools, select the **Lighthouse** tool.  Configuration options are displayed.
    
    :::image type="complex" source="../media/accessibility-lighthouse.msft.png" alt-text="Lighthouse configuration options" lightbox="../media/accessibility-lighthouse.msft.png":::
       Lighthouse configuration options
    :::image-end:::  
    
1.  For **Device**, select **Mobile** if you want to simulate a mobile device.  This option changes your user agent string and resizes the viewport.  This option can affect the audit results.
1.  In the **Categories** section, select **Accessibility**.
1.  Select **Generate report**. After 10 to 30 seconds, DevTools displays a report.  The report gives tips on how to improve the accessibility of the page.  
    
    :::image type="complex" source="../media/accessibility-lighthouse-result.msft.png" alt-text="A Lighthouse report for the Accessibility category" lightbox="../media/accessibility-lighthouse-result.msft.png":::
       A Lighthouse report for the **Accessibility** category
    :::image-end:::  
    
1.  Select an item in the report to learn more about it.  
    
    :::image type="complex" source="../media/accessibility-lighthouse-result-issue-expanded.msft.png" alt-text="An expanded issue in a Lighthouse report" lightbox="../media/accessibility-lighthouse-result-issue-expanded.msft.png":::
       An expanded issue in a Lighthouse report
    :::image-end:::  
    
1.  Select the **Learn more** link to view the documentation of the issue.
    
    :::image type="complex" source="../media/accessibility-web-dev-accessibility-audits-learn-more.msft.png" alt-text="View the documentation of an issue" lightbox="../media/accessibility-web-dev-accessibility-audits-learn-more.msft.png":::
       View the documentation of an issue
    :::image-end:::  

1.  To return to the configuration options, in DevTools, select **Perform an audit** (`+`).    


## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  


> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/accessibility/reference) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  


<!-- links -->  
[ChromeWebStoreAxe]: https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd "axe - Web Accessibility Testing - Chrome Web Store"  
[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
