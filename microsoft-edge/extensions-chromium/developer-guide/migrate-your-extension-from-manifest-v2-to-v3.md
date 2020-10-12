---
description: Reference documentation for you to migrate your extension from Manifest V2 to V3
title: Migrate your extension from Manifest V2 to V3
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/12/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: edge-chromium, extensions development, edge extensions, browser extensions, addons, developer, manifest v3, migrate to manifest v3
---

# Migrate your extension from Manifest v2 to v3 

This document lists the key changes being implemented as part of Manifest v3 – the next version of the Chromium Extensions platform. We will update this document as the implementation work progresses. For detailed guidance on migrating your extension to Manifest v3, see Migrating to Manifest V3. 

## Key Changes

The following list describes the key changes and Microsoft’s point of view. 

**Remotely hosted code**: Extensions today can host parts of their code remotely & not include it as part of the package during submission. While this offers flexibility to developers to dynamically update parts of their code without republishing extensions for every change, this potentially can be exploited to change execution after installation which cannot be validated. As part of our overall efforts to offer verified extensions through Microsoft Edge Add-ons, we will disallow extensions from using remotely hosted code, thus making extensions more secure. As a result of this change, developers will be required to package all code required by extension at time of submission or use eval() function in a sandboxed environment. 

**Run-time host permissions** : Allowing blanket permissions to access all sites and content, at the time of installation, allows extensions to operate with minimum intervention. However, this poses a risk to user privacy and security. We are bringing more transparency by giving control to users to decide whether to allow an extension on a website at runtime. 
Cross-origin request in content scripts: Today content scripts can request access to any origin including to those that are not allowed by the website. This breaks cross-origin principles. We will require content scripts to have the same permissions as the page they are injected into, closing a potential security loophole. If a cross-origin requests need to be performed, they would be required to be done through background scripts which will relay the response back to content scripts. These changes are already available and behind a flag. Additional guidance is available in this document. 

**Web Request API**: We will replace Web Request API with Declarative Net Request API but continue to retain Web Request API's observational capabilities. Except very specific scenarios where observational capabilities of Web Request API will be required to offer extension's functionality; we encourage developers to use only DNR APIs. As more extensions transition, we believe this will have a positive impact towards building feature rich declarative capabilities as well as improve user privacy which will contribute towards enhancing trust in the extension ecosystem.
Enterprises can continue to use the blocking behaviour of Web Request API for extensions managed through enterprise policies. For more information about extension policies refer to the Microsoft Edge – Policies. 

**Background service workers**: Service workers are available for testing in Canary. To migrate your extensions from background pages to service workers refer to Migrating from Background Pages to Service Workers. We are evaluating & investigating the impact that this change brings to both developers as well as users. We will follow up with additional details on this. 

## When will these changes be available in Microsoft Edge?

The current declarative net request API implementation is available in our stable and beta channels for developers to test and provide feedback. We will be contributing to development efforts as well as investigating further changes. 

|Edge 84 Stable |DNR API is available for testing |
|:--- |:--- |  
|Edge 85 Beta |	Header modification support is available| 

Once the changes are finalized in Chromium, we will post our timelines & provide sufficient time for developers to make the necessary changes to their extension & publish to our store. 
Please continue to visit our blog for updates & provide your feedback through TechCommunity.

<!-- links -->  

[MicrosoftPartnerCenter]: https://partner.microsoft.com/dashboard/microsoftedge/public/login?ref=dd "Partner Center"  
