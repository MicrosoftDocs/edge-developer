---
title: Roadmap for Microsoft Edge Add-ons
description: The latest updates about new Partner Center features for Microsoft Edge extensions.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: extensions
ms.date: 02/14/2025
---
# Roadmap for Microsoft Edge Add-ons
<!-- https://aka.ms/EdgeAddonsRoadmap -->

These are the next planned [Partner Center](https://partner.microsoft.com/dashboard/microsoftedge/) features or updates for Microsoft Edge extensions.


<!-- ====================================================================== -->
## Deprecation of the Update REST API v1

As of September 6, 2024, both v1.1 and v1 of the Update REST API are supported.  Support for v1 will end on December 31, 2024.

See [Using the REST API for updating Microsoft Edge Add-ons](../update/api/using-addons-api.md).


<!-- ====================================================================== -->
## Native Client (NaCl) no longer supported

Native Client (NaCl) was supported through Edge version 115.  In 116 to 119, NaCl was only usable by enabling an enterprise policy.  Starting with 120 (December 2023), support for NaCl was completely removed.

To enhance web security and performance, Native Client (NaCl) is no longer supported by Microsoft Edge (along with other browsers).  WebAssembly (Wasm) is recommended instead of NaCl; see [Run compiled code in an extension](../developer-guide/run-compiled-code.md).


<!-- ====================================================================== -->
## Sidebar extensions

Use the Sidebar API to make your new or existing Microsoft Edge extension appear in the sidebar.  Any extension can use the sidebar, in addition to its other UI.

Sidebar extensions are not yet in a stable release of Microsoft Edge.

See [Develop an extension for the Microsoft Edge sidebar](../developer-guide/sidebar.md).


<!-- ====================================================================== -->
## Developers can add their contact information

Users of your extension will be able to report issues through the extension's webpage on the Microsoft Edge Add-ons website.  Developer support information will be shown on the product page of an extension.  This information will allow users to directly reach out to the extension developer for extension-specific support.

<!-- ====================================================================== -->
## See also

* [Released features for Microsoft Edge Add-ons](released-features.md) - Partner Center features or updates.
* [Release notes for Microsoft Edge web platform](../../web-platform/release-notes/index.md)
* [Microsoft Edge release schedule](/deployedge/microsoft-edge-release-schedule)
* [Microsoft 365 roadmap > Microsoft Edge](https://www.microsoft.com/microsoft-365/roadmap?filters=Microsoft%20Edge)
