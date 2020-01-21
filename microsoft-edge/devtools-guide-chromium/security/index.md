---
title: Understand Security Issues With Microsoft Edge DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/06/2020
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





# Understand Security Issues With Microsoft Edge DevTools   

  

<!--Use the **Security** Panel in [Microsoft Edge DevTools][MicrosoftEdgeDevTools] to make sure HTTPS is properly implemented on a page.  See **Why HTTPS Matters** to learn why every website should be protected with HTTPS, even sites that do not handle sensitive user data.  -->  

<!--todo: add section when why-https is available -->  

## Open the Security panel   

The **Security** panel is the main place in DevTools for inspecting the security of a page.  

1.  [Open DevTools][DevToolsOpen].  

1.  Click the **Security** tab to open the **Security** panel.  
    
    > ##### Figure 1  
    > The Security panel  
    > ![The Security panel][ImageSecurityPanel]  
    
## Common problems   

### Non-secure main origins   

When the main origin of a page is not secure, the **Security Overview** says **This page is not secure**.  

> ##### Figure 2  
> A non-secure page  
> ![A non-secure page][ImageNonSecurePage]  

This problem occurs when the URL that you visited was requested over HTTP.  To make it secure you need to request it over HTTPS.  For example, if you look at the URL in your address bar, it probably looks similar to `http://example.com`.  To make it secure the URL should be `https://example.com`.  

If you already set up HTTPS on your server, all you need to do to fix this problem is configure your server to redirect all HTTP requests to HTTPS.  

If you have not set up HTTPS on your server, [Let's Encrypt][LetsEncrypt] provides a free and relatively-easy way to start the process.  Or, you might consider hosting your site on a CDN.  Most major CDNs host sites on HTTPS by default now.  

> [!TIP]
> The [Use HTTPS][WebhintUseHttps] hint in [webhint][Webhint] may help automate the process of making sure that all HTTP requests are directed to HTTPS.  

### Mixed content   

**Mixed content** means that the main origin of a page is secure, but the page requested resources from non-secure origins.  Mixed content pages are only partially protected because the HTTP content is accessible to sniffers and vulnerable to man-in-the-middle attacks.  

> ##### Figure 3  
> Mixed content  
> ![Mixed content][ImageMixedContent]  

In [Figure 3](#figure-3), click **View 1 request in Network panel** to open the **Network** panel and apply the `mixed-content:displayed` filter so that the **Network Log** only shows non-secure resources.  

> ##### Figure 4  
> Mixed resources in the Network Log  
> ![Mixed resources in the Network Log][ImageMixedResourcesNetworkLog]  

## View details   

### View main origin certificate   

From the **Security Overview**, click **View certificate** to quickly inspect the certificate for the main origin.  

> ##### Figure 5  
> A main origin certificate  
> ![A main origin certificate][ImageCertificate]  

### View origin details   

Click one of the entries in the left-hand nav to view the details of the origin.  From the details page you are able to view connection and certificate information.  Certificate transparency information is also shown when available.  

> ##### Figure 6  
> Main origin details  
> ![Main origin details][ImageOriginDetails]  

 



<!-- image links -->  

[ImageSecurityPanel]: images/security-overview-secure.msft.png "Figure 1: The Security panel"  
[ImageNonSecurePage]: images/security-overview-non-secure.msft.png "Figure 2: A non-secure page"  
[ImageMixedContent]: images/security-overview-mixed-secure.msft.png "Figure 3: Mixed content"  
[ImageMixedResourcesNetworkLog]: images/network-filter.msft.png "Figure 4: Mixed resources in the Network Log"  
[ImageCertificate]: images/security-overview-secure-view-certificate.msft.png "Figure 5: A main origin certificate"  
[ImageOriginDetails]: images/security-overview-mixed-secure-main-origin.msft.png "Figure 6: Main origin details"  

<!-- links -->  

[DevToolsOpen]: ../open.md "Open Microsoft Edge DevTools"  

[MicrosoftEdgeDevTools]: https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium "Microsoft Edge \(Chromium\) Developer Tools"  

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
