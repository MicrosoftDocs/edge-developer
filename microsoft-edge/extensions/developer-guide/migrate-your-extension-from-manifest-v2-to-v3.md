---
title: Migrate an extension from Manifest V2 to V3
description: Updating your extension from Manifest V2 to V3.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: extensions
ms.date: 05/26/2021
---
# Migrate an extension from Manifest V2 to V3
<!-- todo: update tense, per https://developers.google.com/style/timeless-documentation
"now" = v3; "in the past" = v2 -->

This article lists important aspects of Manifest V3, which is the current version of the Chromium Extensions platform.  For guidance on migrating your extension to Manifest V3 from the Chromium project, see [Migrate to Manifest V3](https://developer.chrome.com/docs/extensions/develop/migrate)<!-- chrome link ok -->.


<!-- ====================================================================== -->
## Overview of changes in Manifest V3

Migrating an extension from using Manifest V2 to using Manifest V3 brings several structural changes to how extensions are handled by the browser:

* Remotely hosted code is no longer allowed.  An extension can only run JavaScript that's included within its own package.  See [Remotely hosted code](#remotely-hosted-code), below.

* Edge extensions can use controls that enable you to allow or restrict access to websites at runtime.  See [Run-time host permissions](#run-time-host-permissions), below.

* Content scripts are required to have the same permissions as the webpage into which the scripts are injected.  See [Cross-origin requests in content scripts](#cross-origin-requests-in-content-scripts), below.

* Network request modifications are now handled by the new `declarativeNetRequest` API.  See [Web Request API](#web-request-api), below.

* Background pages have been replaced by service workers.  See [Background service workers](#background-service-workers), below.

* Support for Promises has been added to many methods.  Callbacks are still supported, as an alternative.

* Various minor feature improvements.


<!-- ====================================================================== -->
## Remotely hosted code

Today, some parts of the extensions code are hosted remotely, and aren't included as part of the extension package during the validation process.  Although this offers the flexibility to change code without resubmitting the extension at the [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com) website, it's possible to exploit the code after installation.

To ensure that the extensions at the Microsoft Edge Add-ons website are validated, the Microsoft Edge extensions team disallows extensions from using remotely hosted code.  This change makes extensions more secure.

You'll need to package and submit all code that is used by the extension, for validation.  Alternatively, you can use the `eval()` function in a sandboxed iframe. See [Use eval() in sandboxed iframes](https://developer.chrome.com/docs/extensions/how-to/security/sandboxing-eval)<!-- chrome link ok, extension ref docs are there -->.


<!-- ====================================================================== -->
## Run-time host permissions

At installation time, it's possible for extensions to request blanket permissions to access all sites and content.  These permissions allow extensions to operate with minimum intervention, and so present a risk for user privacy and security.

To improve transparency, the Microsoft Edge extensions team provides controls that enable users to allow or restrict access to websites at runtime.


<!-- ====================================================================== -->
## Cross-origin requests in content scripts

Today, content scripts can request access to any origin, including origins that aren't allowed by the website.  The behavior breaks cross-origin principles.  Going forward, the Microsoft Edge extensions team requires content scripts to have the same permissions as the webpage into which the scripts are injected.  This requirement closes a potential security loophole.

To perform cross-origin requests, you need to use background scripts to relay responses back to content scripts.  These changes are available and are behind a flag.  For more information, see [Changes to Cross-Origin Requests in Chrome Extension Content Scripts](https://www.chromium.org/Home/chromium-security/extension-content-script-fetches).


<!-- ====================================================================== -->
## Web Request API

The Microsoft Edge extensions team replaces the [Web Request API](https://developer.chrome.com/docs/extensions/reference/webRequest)<!-- chrome link ok, extension ref docs are there --> by the [Declarative Net Request API](https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest)<!-- chrome link ok, extension ref docs are there -->, but we continue to keep the observational capabilities of the Web Request API.  We recommend using the Declarative Net Request (DNR) APIs only, rather than the Web Request API, except in some specific scenarios where observational capabilities of the Web Request API are required by the extension.

This change will have positive impact on extensions that use feature-rich declarative capabilities.  As more extensions transition to the Declarative Net Request APIs, this change will improve user privacy, which contributes to trust in the use of extensions.

Enterprises can continue to use the blocking behavior of the Web Request API for extensions that are managed through enterprise policies.  For more information about extension policies, see [Extensions](/deployedge/microsoft-edge-policies#extensions) in _Microsoft Edge – Policies_.


<!-- ====================================================================== -->
## Background service workers

To migrate your extensions from background pages to service workers, see [Migrate to a service worker](https://developer.chrome.com/docs/extensions/develop/migrate/to-service-workers)<!-- chrome link ok -->.  


<!-- ====================================================================== -->
## When are these changes available in Microsoft Edge

The current Declarative Net Request API implementation is available in the Microsoft Edge Stable and Beta channels.  Please test the changes and provide feedback.

The Microsoft Edge extensions team publishes updates at our blog.  You can provide feedback on the changes through Microsoft Tech Community; see [Manifest V3 changes are now available in Microsoft Edge](https://techcommunity.microsoft.com/t5/articles/manifest-v3-changes-are-now-available-in-microsoft-edge/m-p/1780254).


<!-- ====================================================================== -->
## Changes in manifest.json V3 vs. V2

| V3 | V2 |
|---|---|
| `  "manifest_version": 3,` | `"manifest_version": 2,` |
| `"action": {...},` | `"browser_action": {...},` |
| `"action": {...},` | `"page_action": {...},` |
| removed | `"persistent": false,` |
| If `background` is included, `service_ worker` is required | If `background` is included, `service_ worker` is optional |
| Separated into two different keys: `"permissions": [...], "host_permissions": [...],` | `"permissions": [...],` |


<!-- ====================================================================== -->
## See also
<!-- all links in article -->

* [Overview of changes in Manifest V3](./manifest-v3.md) in _Timeline for migrating to Manifest V3_.

External:
* [Manifest V3 changes are now available in Microsoft Edge](https://techcommunity.microsoft.com/t5/articles/manifest-v3-changes-are-now-available-in-microsoft-edge/m-p/1780254) - blog post.
* [Extensions](/deployedge/microsoft-edge-policies#extensions) in _Microsoft Edge – Policies_.
* [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com) website

Chromium docs:
* [Migrate to Manifest V3](https://developer.chrome.com/docs/extensions/develop/migrate)<!-- chrome link ok -->
* [Use eval() in sandboxed iframes](https://developer.chrome.com/docs/extensions/how-to/security/sandboxing-eval)<!-- chrome link ok, extension ref docs are there -->
* [Changes to Cross-Origin Requests in Chrome Extension Content Scripts](https://www.chromium.org/Home/chromium-security/extension-content-script-fetches).
* [Web Request API](https://developer.chrome.com/docs/extensions/reference/webRequest)<!-- chrome link ok, extension ref docs are there -->
* [Declarative Net Request API](https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest)<!-- chrome link ok, extension ref docs are there -->
* [Migrate to a service worker](https://developer.chrome.com/docs/extensions/develop/migrate/to-service-workers)<!-- chrome link ok -->
