---
title: Roadmap for Microsoft Edge Add-ons
description: The latest updates about new Partner Center features for Microsoft Edge extensions.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: extensions
ms.date: 11/14/2024
---
# Roadmap for Microsoft Edge Add-ons
<!-- https://aka.ms/EdgeAddonsRoadmap -->

These are the next planned [Partner Center](https://partner.microsoft.com/dashboard/microsoftedge/) features or updates for Microsoft Edge extensions.


<!-- ====================================================================== -->
## Deprecation of Native Client (NaCl)

To enhance web security and performance, Native Client (NaCl) is deprecated for Microsoft Edge, along with other browsers.  NaCl was deprecated (discouraged but still supported) starting in 2020.  Support for NaCl will be discontinued starting with Microsoft Edge 138.

NaCl was a sandbox for running compiled C and C++ code in browsers efficiently and securely, independently of the user's operating system.  WebAssembly (Wasm) is recommended instead of NaCl.

See [Native Client (NaCl) (deprecated)](../developer-guide/run-compiled-code.md#native-client-nacl-deprecated) in _Run compiled code in an extension_.


<!-- ====================================================================== -->
## Deprecation of the Update REST API v1

As of September 6, 2024, both v1.1 and v1 of the Update REST API are supported.  Support for v1 will end on December 31, 2024.

See [Using the REST API for updating Microsoft Edge Add-ons](../publish/api/using-addons-api.md).


<!-- ====================================================================== -->
## Sidebar extensions

Use the Sidebar API to make your new or existing Microsoft Edge extension appear in the sidebar.  Any extension can use the sidebar, in addition to its other UI.

Sidebar extensions are not yet in a stable release of Microsoft Edge.

See [Develop an extension for the Microsoft Edge sidebar](../developer-guide/sidebar.md).


<!-- ====================================================================== -->
## Developers can add their contact information

Users of your extension will be able to report issues through the extension's webpage on the Microsoft Edge Add-ons website.  Developer support information will be shown on the product page of an extension.  This information will allow users to directly reach out to the extension developer for extension-specific support.


<!-- ====================================================================== -->
## Manifest V2 Microsoft Edge Add-ons deprecation

When this change is released, Microsoft Partner Center will not accept updates to existing Manifest V2 Microsoft Edge Add-ons.  Microsoft Edge will no longer support or run Manifest V2 Microsoft Edge Add-ons.

Note that by using Microsoft Edge Enterprise Policies, Enterprise Accounts can<!--will still be able to?--> allow Manifest V2 Microsoft Edge Add-ons to run and operate on Microsoft Edge.


<!-- ====================================================================== -->
## Manifest V2 Microsoft Edge Enterprise Add-ons cease to function

When this change is released, Microsoft Edge Enterprise Add-ons with Manifest V2 will not be functional on Microsoft Edge.


<!-- ====================================================================== -->
## See also

* [Released features for Microsoft Edge Add-ons](released-features.md) - Partner Center features or updates.
* [Microsoft Edge release schedule](/deployedge/microsoft-edge-release-schedule)
* [Microsoft 365 roadmap > Microsoft Edge](https://www.microsoft.com/microsoft-365/roadmap?filters=Microsoft%20Edge)
