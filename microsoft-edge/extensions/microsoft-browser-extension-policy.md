---
description: Read the legal policy describing supported mechanisms for extending or modifying the behavior or user experience of Microsoft Edge and Internet Explorer.
title: Extensions - Microsoft browser extension policy - Microsoft Edge Development
author: abbycar
ms.author: abigailc
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Microsoft browser extension policy

This document describes the supported mechanisms for extending or modifying the behavior or user experience of Microsoft Edge and Internet Explorer, or the content displayed by these browsers. Any technique not explicitly listed in this document is considered **unsupported**.

These supported extension mechanisms are designed to ensure that users are able to customize and extend their browser with software of their choice, while maintaining safe and uninterrupted use of their browser and PC.

Software that uses unsupported techniques or practices to extend or modify the browsing experience of Microsoft Edge or Internet Explorer may be subject to being blocked or removed by anti-malware software.

## Supported mechanisms for software that extends or modifies Microsoft Edge

### Summary

 Microsoft Edge is designed to be secure, reliable, fast and responsive by default, and to ensure that the user is always in control of their experience.  

Microsoft Edge Extensions, available exclusively from the Windows Store, are the **only supported** mechanism to modify the end-user experience of Microsoft Edge, including the browser configuration and the content displayed in the browser.

Any other mechanism that impacts the configuration of Microsoft Edge, or the content that the browser displays, unless explicitly listed in this document is **unsupported**.  

### Installation, Management, and Removal

All extensions for Microsoft Edge must be deployed from the Windows Store. The installation must be initiated and completed by the user, using only the user experience provided by Microsoft Edge and the Windows Store. Software may refer to the extension in the Windows Store, but may not change the experience of acquiring the extension, or otherwise apply undue influence or false pretenses to the user to make them install the extension.  

Software may not interfere with the user’s ability to disable, or remove any extension, or modify in any way the extension management user experience of Microsoft Edge.

All extensions must follow the current Windows Store policy for Microsoft Edge extensions.

### Extension development

An exception to the Windows Store requirement is provided only for developers and testers of in-development extensions. These may be loaded into an instance of Microsoft Edge temporarily with full knowledge of the user, who will be alerted to their presence. Extensions will be disabled automatically if the user does not consent to their ongoing presence.

### Modification of Microsoft Edge settings

Microsoft Edge uses the registry and other local or cloud storage mechanisms to store the state or configuration of many of its features, including, but not limited to the user’s start page and content therein, address bar search engine, new tab page, favorites, reading list, and the state or configuration of features of the browser.  

Software may not make any direct or indirect changes to any of these settings for any reason. All changes to settings must be initiated by the user via the Microsoft Edge user experience. Software may not influence or guide user’s choices via overlays or other user experience modification, or provide alternate consent experiences.

### Network traffic modification

Some software modifies the content shown in browsers and other apps by modifying the network traffic, via various mechanisms including, but not limited to, Proxy installation or DNS changes.

This form of traffic modification is generally **unsupported** except for specific activities: setting up a Virtual Private Network (VPN) or filtering web content (e.g. the removal of unwanted advertising, unsafe, or objectionable content).

Software that modifies the content must follow standard good behavior for Windows software including: clear notification during installation of the purpose and effect of the software, clear instructions for disabling or removing the software, and a clear entry in the Windows program list that allows a user to uninstall the software (which must completely remove the product from the system).  

Software that performs traffic modification of purposes other than those listed above, or which does not follow the guidelines for Windows software will be considered **unsupported** and may be blocked or removed by anti-malware software.  

## Supported mechanisms for software that extends or modifies Internet Explorer

### Installation, Management, and Removal

All extensions must be installed using techniques described on the Microsoft Development Network for [Internet Explorer Extensions](https://msdn.microsoft.com/library/aa753587). Software must not bypass Internet Explorer’s extension installation process. Software must allow a user to confirm extension activation and installation through Internet Explorer’s interface, and this interface must not be altered, bypassed, overlaid, or otherwise have its experience altered in any way.

Software must respect a user’s ability to enable or disable any browser extension through Internet Explorer's “Manage Add-ons” dialog. This dialog must not be altered in any way.

Toolbars must provide users with a close icon to permanently disable the toolbar. Toolbars must also provide an entry in the Add or Remove Programs dialog within Windows.

### Capabilities and Execution

Extensions must only use supported Internet Explorer and Windows APIs.  

Extensions must not programmatically alter or limit access to browser features including but not limited to: the address bar, homepage, search box, new tab page, or favorites.

Network-based (e.g. DNS or Proxy) traffic modification must only be used for the purposes of Virtual Private Networks or filtering web content (e.g. the removal of advertising, unsafe, or objectionable content).

Starting with Internet Explorer 11, extensions must be compatible with Enhanced Protected Mode (EPM). Software must not lower Internet Explorer security settings.
