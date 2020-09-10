---
description: Use the Security Panel to make sure that a page is fully protected by HTTPS.
title: Understand Security Issues With Microsoft Edge DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/01/2020 
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





# Understand security issues with Microsoft Edge DevTools   

  

<!--Use the **Security** Panel in [Microsoft Edge DevTools][MicrosoftEdgeDevTools] to make sure HTTPS is properly implemented on a page.  See **Why HTTPS Matters** to learn why every website should be protected with HTTPS, even sites that do not handle sensitive user data.  -->  

<!--todo: add section when why-https is available -->  

## Open the Security panel   

The **Security** panel is the main place in DevTools for inspecting the security of a page.  

1.  [Open DevTools][DevToolsOpen].  
1.  Click the **Security** tab to open the **Security** panel.  
    
    :::image type="complex" source="../media/security-security-overview-secure.msft.png" alt-text="The Security panel" lightbox="../media/security-security-overview-secure.msft.png":::
       The **Security** panel  
    :::image-end:::  
    
## Common problems   

### Non-secure main origins   

When the main origin of a page is not secure, the **Security Overview** says **This page is not secure**.  

:::image type="complex" source="../media/security-security-overview-non-secure.msft.png" alt-text="A non-secure page" lightbox="../media/security-security-overview-non-secure.msft.png":::
   A non-secure page  
:::image-end:::  

This problem occurs when the URL that you visited was requested over HTTP.  To make it secure you need to request it over HTTPS.  For example, if you look at the URL in your address bar, it probably looks similar to `http://example.com`.  To make it secure the URL should be `https://example.com`.  

If you already set up HTTPS on your server, all you need to do to fix this problem is configure your server to redirect all HTTP requests to HTTPS.  

If you have not set up HTTPS on your server, [Let's Encrypt][LetsEncrypt] provides a free and relatively-easy way to start the process.  Or, you might consider hosting your site on a CDN.  Most major CDNs host sites on HTTPS by default now.  

> [!TIP]
> The [Use HTTPS][WebhintUseHttps] hint in [webhint][Webhint] may help automate the process of making sure that all HTTP requests are directed to HTTPS.  

### Mixed content   

**Mixed content** means that the main origin of a page is secure, but the page requested resources from non-secure origins.  Mixed content pages are only partially protected because the HTTP content is accessible to sniffers and vulnerable to man-in-the-middle attacks.  

:::image type="complex" source="../media/security-security-overview-mixed-secure.msft.png" alt-text="Mixed content" lightbox="../media/security-security-overview-mixed-secure.msft.png":::
   Mixed content  
:::image-end:::  

In the previous figure, click **View 1 request in Network panel** to open the **Network** panel and apply the `mixed-content:displayed` filter so that the **Network Log** only shows non-secure resources.  

:::image type="complex" source="../media/security-network-filter.msft.png" alt-text="Mixed resources in the Network Log" lightbox="../media/security-network-filter.msft.png":::
   Mixed resources in the **Network Log**  
:::image-end:::  

## View details   

### View main origin certificate   

From the **Security Overview**, click **View certificate** to quickly inspect the certificate for the main origin.  

:::image type="complex" source="../media/security-security-overview-secure-view-certificate.msft.png" alt-text="A main origin certificate" lightbox="../media/security-security-overview-secure-view-certificate.msft.png":::
   A main origin certificate  
:::image-end:::  

### View origin details   

Click one of the entries in the left-hand nav to view the details of the origin.  From the details page you are able to view connection and certificate information.  Certificate transparency information is also shown when available.  

:::image type="complex" source="../media/security-security-overview-mixed-secure-main-origin.msft.png" alt-text="Main origin details" lightbox="../media/security-security-overview-mixed-secure-main-origin.msft.png":::
   Main origin details  
:::image-end:::  

<!--  
 


-->  

<!-- links -->  

[MicrosoftEdgeDevTools]: ../../devtools-guide-chromium.md "Microsoft Edge (Chromium) Developer tools | Microsoft Docs"  
[DevToolsOpen]: ../open.md "Open Microsoft Edge DevTools | Microsoft Docs"  


[LetsEncrypt]: https://letsencrypt.org "Let's Encrypt - Free SSL/TLS certificates"  

[Webhint]: https://webhint.io "webhint"  
[WebhintUseHttps]: https://webhint.io/docs/user-guide/hints/hint-https-only "Use HTTPS | webhint documentation"  

<!--[mixed]: /web/fundamentals/security/prevent-mixed-content/what-is-mixed-content ""  -->

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/security/index) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
