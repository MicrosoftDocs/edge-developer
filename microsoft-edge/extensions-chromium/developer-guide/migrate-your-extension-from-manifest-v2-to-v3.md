---
description: Learn about updating your extension from Manifest V2 to V3
title: Prepare to update your extensions from Manifest V2 to V3
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/11/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: edge-chromium, extensions development, edge extensions, browser extensions, addons, developer, manifest v3, migrate to manifest v3
---
# Prepare to update your extensions from Manifest v2 to v3  

This document lists important changes being implemented as part of Manifest v3, which is the next version of the Chromium Extensions platform.  The Microsoft Edge extensions team updates this document as the implementation progresses.  For detailed guidance on migrating your extension to Manifest v3, navigate to [Migrating to Manifest V3][ChromeDeveloperDocsExtensionsMv3Mv3MigrationChecklist].  

## Remotely hosted code  

Today, parts of the extensions code is hosted remotely, and not include it as part of the extension package during the validation process.  While this offers flexibility to change code without resubmitting the extension to the store, the code may be exploited after installation.  To ensure [Microsoft Edge Add-ons][MicrosoftMicrosoftedgeAddons] lists validated extensions, the Microsoft Edge extensions team disallows extensions from using remotely hosted code.  This change makes extensions more secure.  Developers will need to package and submit all code used by the extension for validation.  Alternatively, you may use the `eval()` function in a [sandboxed environment][ChromeDeveloperDocsExtensionsMv2Sandboxingeval].  

## Run-time host permissions  

At installation time, extensions may request blanket permissions to access all sites and content.  These permissions allow extensions to operate with minimum intervention, and create a risk to user privacy and security.  To improve transparency, the Microsoft Edge extensions team provides controls for users to allow or restrict access to websites at runtime.  

## Cross-origin requests in content scripts  

Today, content scripts request access to any origin including origins that aren't allowed by the website.  The behavior breaks cross-origin principles.  Going forward, the Microsoft Edge extensions team requires content scripts to have the same permissions as the webpage into which the scripts are injected, closing a potential security loophole.  To perform cross-origin requests, you need to use background scripts to relay responses back to content scripts.  These changes are available and behind a flag.  For more information, navigate to this [document][ChromiumHomeChromiumSecurityExtensionContentScriptFetches].  

## Web Request API  

The Microsoft Edge extensions team replaces [Web Request API][ChromeDeveloperDocsExtensionsReferenceWebrequest] with [Declarative Net Request API][ChromeDeveloperDocsExtensionsReferenceDeclarativenetrequest], but continues to keep the observational capabilities of the Web Request API.  Except in some specific scenarios where observational capabilities of the Web Request API are required by the extension, the Microsoft Edge extensions team recommends using the DNR APIs only.  The Microsoft Edge extensions team believes this change will have positive impact on extensions that use feature-rich declarative capabilities.  As more extensions transition to the DNR APIs, this change will improve user privacy, which contributes to enhancing trust in the use of extensions.  
Enterprises may continue to use the blocking behavior of the Web Request API for extensions managed through enterprise policies.  For more information about extension policies, navigate to [Microsoft Edge – Policies][DeployedgeMicrosoftEdgePoliciesExtensions].  

## Background service workers  
 
Service workers are available for testing in Canary.  To migrate your extensions from background pages to service workers, refer to [Migrating from Background Pages to Service Workers][ChromeDeveloperDocsExtensionsMv3MigratingToServiceWorkers].  The Microsoft Edge extensions team is evaluating and investigating the impact that this change brings to both developers and users.  The Microsoft Edge extensions team adds additional details on the change to this document in the future.  

## When are these changes available in Microsoft Edge  

The current declarative net request API implementation is available in our Stable and Beta channels.  Test the changes, and provide feedback.  The Microsoft Edge extensions team contributes to development efforts and investigate further changes.  

| Channel name | Details |  
|:--- |:--- |  
| Microsoft Edge 84 Stable | DNR API is available for testing |  
| Microsoft Edge 85 Beta | Header modification support is available|  

When the changes are made to Chromium, the Microsoft Edge extensions team shares timelines so that you may update your code and republish extensions to the store.  

The Microsoft Edge extensions team continues publishing updates on the blog.  You may provide your feedback on the changes through [Tech Community][MicrosoftTechcommunityT5ArticlesManifestV3ChnagesAreNowAvailableInMicrosoftEdgeMP1780254].

<!-- links -->  

[DeployedgeMicrosoftEdgePoliciesExtensions]: /deployedge/microsoft-edge-policies#extensions "Extensions - Microsoft Edge - Policies | Microsoft Docs"  

[MicrosoftMicrosoftedgeAddons]: https://microsoftedge.microsoft.com/addons "Microsoft Edge Add-ons"  

[MicrosoftTechcommunityT5ArticlesManifestV3ChnagesAreNowAvailableInMicrosoftEdgeMP1780254]: https://techcommunity.microsoft.com/t5/articles/manifest-v3-changes-are-now-available-in-microsoft-edge/m-p/1780254 "Manifest V3 changes are now available in Microsoft Edge | Microsoft Tech Community"  

[ChromeDeveloperDocsExtensionsMv2Sandboxingeval]: https://developer.chrome.com/docs/extensions/mv2/sandboxingEval "Using eval in Chrome extensions | Chrome Developers"  
[ChromeDeveloperDocsExtensionsMv3MigratingToServiceWorkers]:  https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers "Migrating from background pages to service workers | Chrome Developers"  
[ChromeDeveloperDocsExtensionsMv3Mv3MigrationChecklist]: https://developer.chrome.com/docs/extensions/mv3/mv3-migration-checklist "Manifest V3 migration checklist | Chrome Developers"    

[ChromeDeveloperDocsExtensionsReferenceDeclarativenetrequest]: https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest "chrome.declarativeNetRequest | Chrome Developers"  
[ChromeDeveloperDocsExtensionsReferenceWebrequest]: https://developer.chrome.com/docs/extensions/reference/webRequest "chrome.webRequest | Chrome Developers"  

[ChromiumHomeChromiumSecurityExtensionContentScriptFetches]: https://www.chromium.org/Home/chromium-security/extension-content-script-fetches "Changes to Cross-Origin Requests in Chrome Extension Content Scripts | The Chromium Projects"  
