---
description: Testing accessibility using Lighthouse from within DevTools.
title: Testing accessibility using Lighthouse
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 03/08/2021
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

# Testing accessibility using Lighthouse

You can use Lighthouse from within DevTools to audit the accessibility of a page, as follows.


## Audit the accessibility of a page using Lighthouse

> [!NOTE]
> The **Lighthouse** tool provides links to content hosted on third-party websites.  Microsoft is not responsible for and has no control over the content of these sites and any data that may be collected.  

Use the Lighthouse tool to determine:

*   Whether a page is properly marked up for screen readers.  
*   Whether the text elements on a page have sufficient contrast ratios.  Navigate to [View the contrast ratio of a text element in the Color Picker](#view-the-contrast-ratio-of-a-text-element-in-the-color-picker).  

To audit a page:

1.  Navigate to the URL that you want to audit.
1.  In DevTools, select the **Lighthouse** tool (previously labelled as the **Audits** tool).  DevTools shows you various configuration options.
    
    :::image type="complex" source="../media/accessibility-audits-pane.msft.png" alt-text="Configure audits" lightbox="../media/accessibility-audits-pane.msft.png":::
       Configure audits  
    :::image-end:::  
    
    > [!NOTE]
    > The screenshots in this section were taken with Microsoft Edge version 79.  You may check what version you are running at `edge://version`.  The general workflow remains the same.  
    
1.  For **Device**, choose **Mobile** if you want to simulate a mobile device.  This option changes your user agent string and resizes the viewport.  If the mobile version of the page displays differently than the desktop version, this option may have a significant effect on the results of your audit.  
1.  In the **Audits** section, make sure that **Accessibility** is enabled.  Disable the other categories if you want to exclude them from your report.  Leave them enabled if you want to discover other ways to improve the quality of your page.  
1.  The **Throttling** section lets you throttle the network and CPU, which is useful when analyzing load performance.  This option should be irrelevant to your accessibility score, so you may use whatever you prefer.  
1.  The **Clear Storage** checkbox lets you clear all storage before loading the page, or preserve storage between page loads.  This option is also probably irrelevant to your accessibility score, so you may use whatever you prefer.  
1.  Choose **Run Audits**. After 10 to 30 seconds, DevTools provides a report.  Your report gives you various tips on how to improve the accessibility of the page.  
    
    :::image type="complex" source="../media/accessibility-audits-run-audits-result.msft.png" alt-text="A report" lightbox="../media/accessibility-audits-run-audits-result.msft.png":::
       A report  
    :::image-end:::  
    
1.  Choose an audit to learn more about it.  
    
    :::image type="complex" source="../media/accessibility-audits-run-audits-result-issues-expanded.msft.png" alt-text="More information about an audit" lightbox="../media/accessibility-audits-run-audits-result-issues-expanded.msft.png":::
       More information about an audit  
    :::image-end:::  
    
1.  Choose **Learn More** to view the documentation of that audit.  
    
    :::image type="complex" source="../media/accessibility-web-dev-accessibility-audits-learn-more.msft.png" alt-text="View the documentation of an audit" lightbox="../media/accessibility-web-dev-accessibility-audits-learn-more.msft.png":::
       View the documentation of an audit  
    :::image-end:::  
    

## See also: aXe extension  

You may prefer to use the [aXe extension][ChromeWebStoreAxe] rather than the **Lighthouse** tool.  
The aXe extension generally provides the same information, since it is the underlying engine that powers the Lighthouse tool.  The aXe extension has a different UI and describes audits slightly differently.  
One advantage that the aXe extension has over the Lighthouse tool is that it enables you to inspect and highlight failing nodes.  

:::image type="complex" source="../media/accessibility-devtools-extension-axe-panel.msft.png" alt-text="The aXe extension" lightbox="../media/accessibility-devtools-extension-axe-panel.msft.png":::
   The aXe extension  
:::image-end:::  


## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/accessibility/reference) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  


<!-- links -->  
[ChromeWebStoreAxe]: https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US "axe - Web Accessibility Testing - Chrome Web Store"  
[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
