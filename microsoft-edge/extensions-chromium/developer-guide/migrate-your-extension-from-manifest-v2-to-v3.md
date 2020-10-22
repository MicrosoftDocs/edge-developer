---
description: Learn about updating your extension from Manifest V2 to V3
title: Prepare to update your extensions from Manifest V2 to V3
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/13/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: edge-chromium, extensions development, edge extensions, browser extensions, addons, developer, manifest v3, migrate to manifest v3
---

# Prepare to update your extensions from Manifest v2 to v3 

This document lists important changes that's being implemented as part of Manifest v3, which is the next version of the Chromium Extensions platform. We'll update this document as the implementation progresses. For detailed guidance on migrating your extension to Manifest v3, navigate to [Migrating to Manifest V3][Google_Migrate_to_MV3]. 

## Remotely hosted code  

Today, extensions can host parts of their code remotely, and not include it as part of the extension package during the validation process. While this offers flexibility to change code without resubmitting the extension to the store, the code can be exploited after installation. To ensure [Microsoft Edge Add-ons][EdgeAddons] lists validated extensions, we're disallowing extensions from using remotely hosted code. This change makes extensions more secure. Developers will need to package and submit all code that's used by the extension for validation. Alternatively, developers can use the eval() function in a [sandboxed environment][sandboxingEval]. 

## Run-time host permissions  

At installation time, extensions may request blanket permissions to access all sites and content. These permissions allow extensions to operate with minimum intervention, and create a risk to user privacy and security. To improve transparency, we're providing controls for users to allow or restrict access to websites at runtime. 

## Cross-origin requests in content scripts  

Today content scripts can request access to any origin including origins that aren't allowed by the website. This behavior breaks cross-origin principles. Going forward, we'll require content scripts to have the same permissions as the page they're injected into, closing a potential security loophole. To perform cross-origin requests, you'll need to use background scripts to relay responses back to content scripts. These changes are available and behind a flag. For more information, navigate to this [document][CORS]. 

## Web Request API  

We're replacing [Web Request API][WebRequestAPI] with [Declarative Net Request API][DeclarativeNetRequestAPI], but will continue to keep Web Request API's observational capabilities. Except in some specific scenarios where observational capabilities of the Web Request API are required by the extension, we recommend using the DNR APIs only. We believe this change will have positive impact on extensions that use feature-rich declarative capabilities. As more extensions transition to the DNR APIs, this change will improve user privacy, which contributes to enhancing trust in the use of extensions.
Enterprises can continue to use the blocking behavior of the Web Request API for extensions managed through enterprise policies. For more information about extension policies, navigate to [Microsoft Edge – Policies][MicrosoftEdgePolicies]. 

## Background service workers  
 
Service workers are available for testing in Canary. To migrate your extensions from background pages to service workers, refer to [Migrating from Background Pages to Service Workers][ServiceWorkers]. We're evaluating & investigating the impact that this change brings to both developers and users. We'll add  additional details on this change to this document in the future. 

## When will these changes be available in Microsoft Edge?

The current declarative net request API implementation is available in our Stable and Beta channels. Developers can test these changes, and provide feedback. We'll contribute to development efforts and investigate further changes. 

| Channel name | Description |
|:--- |:--- |  
| Microsoft Edge 84 Stable | DNR API is available for testing |  
| Microsoft Edge 85 Beta | Header modification support is available| 

When the changes are made to Chromium, we'll share timelines so that developers can update their code and republish extensions to the store. 

We'll continue publishing updates on our blog. You can provide your feedback on these changes through [TechCommunity][TechCommunity].

<!-- links -->  

[EdgeAddons]: https://microsoftedge.microsoft.com/addons/ "Microsoft Edge Add-ons"  
[MicrosoftBlog]: https://blogs.windows.com/windowsexperience/2018/12/06/microsoft-edge-making-the-web-better-through-more-open-source-collaboration/  
[MicrosoftEdgePolicies]: https://docs.microsoft.com/deployedge/microsoft-edge-policies#extensions 

[TechCommunity]: https://techcommunity.microsoft.com/t5/articles/manifest-v3-changes-are-now-available-in-microsoft-edge/m-p/1780254 "Tech Community"  


[Google_Migrate_to_MV3]: https://developer.chrome.com/extensions/migrating_to_manifest_v3   
[SandboxingEval]: https://developer.chrome.com/apps/sandboxingEval "Using eval in Chrome Extensions. Safely."
[CORS]: https://www.chromium.org/Home/chromium-security/extension-content-script-fetches "Changes to Cross-Origin Requests in Extension Content Scripts"
[WebRequestAPI]: https://developer.chrome.com/extensions/webRequest "Web Request API"  
[DeclarativeNetRequestAPI]: https://developer.chrome.com/extensions/declarativeNetRequest/ "Declarative Net Request API"
[ServiceWorkers]:  https://developers.chrome.com/extensions/migrating_to_service_workers


