---
description: The process of distributing extension by mechanism other than verified stores
title: Extensions - Supported APIs
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/09/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: edge-chromium, extensions development, browser extensions, add-ons, extension api , developer, web development
---


# API support

The following is a detailed list of API members that are supported on Edge Chromium browser.

| API                                   | Description                                            
|---------------------------------------|----------------------------------------------------------|
| [alarms](https://developer.chrome.com/extensions/alarms) | Use this API to schedule code to run periodically or at a specified time in the future. |
| [bookmarks](https://developer.chrome.com/extensions/bookmarks) | Use this API to create, organize, and otherwise manipulate bookmarks. |
| [browserAction](https://developer.chrome.com/extensions/browserAction) | Use browser actions to put icons in the main Microsoft Edge toolbar, to the right of the address bar. In addition to its icon, a browser action can have a tooltip, a badge, and a popup. |
| [browsingData](https://developer.chrome.com/extensions/browsingData) | Use this API to remove browsing data from a user's local profile. |
| [commands](https://developer.chrome.com/extensions/commands) | Use the commands API to add keyboard shortcuts that trigger actions in your extension, for example, an action to open the browser action or send a command to the extension. |
| [contentSettings](https://developer.chrome.com/extensions/contentSettings) |Use the contentSettings API to change settings that control whether websites can use features such as cookies, JavaScript, and plugins. More generally speaking, content settings allow you to customize Chrome's behavior on a per-site basis instead of globally. |
| [contextMenus](https://developer.chrome.com/extensions/contextMenus) | Use the contextMenus API to add items to Microsoft Edge's context menu. You can choose what types of objects your context menu additions apply to, such as images, hyperlinks, and pages. |
| [cookies](https://developer.chrome.com/extensions/cookies) | Use the cookies API to query and modify cookies, and to be notified when they change.|
| [debugger](https://developer.chrome.com/extensions/debugger) | Use the debugger to attach to one or more tabs to instrument network interaction, debug JavaScript, mutate the DOM and CSS, etc. Use the Debugger tabId to target tabs with sendCommand and route events by tabId from onEvent callbacks. |
| [declarativeContent](https://developer.chrome.com/extensions/declarativeContent) | Use this API to take actions depending on the content of a page, without requiring permission to read the page's content. |
| [declarativeNetRequest](https://developer.chrome.com/extensions/declarativeNetRequest) | The declarativeNetRequest API is used to block or modify network requests by specifying declarative rules. This lets extensions modify network requests without intercepting them and viewing their content, thus providing more privacy. |
| [desktopCapture](https://developer.chrome.com/extensions/desktopCapture) | Desktop Capture API that can be used to capture content of screen, individual windows or tabs. |
| [devtools.inspectedWindow](https://developer.chrome.com/extensions/devtools_inspectedWindow) | Use this API to interact with the inspected window: obtain the tab ID for the inspected page, evaluate the code in the context of the inspected window, reload the page, or obtain the list of resources within the page. |
| [devtools.network](https://developer.chrome.com/extensions/devtools_network) | Use this API to retrieve the information about network requests displayed by the Developer Tools in the Network panel. |
| [devtools.panels](https://developer.chrome.com/extensions/devtools.panels) | Use this API to integrate your extension into Developer Tools window UI: create your own panels, access existing panels, and add sidebars.|
| [downloads](https://developer.chrome.com/extensions/downloads) | Use this API to programmatically initiate, monitor, manipulate, and search for downloads. |
| [enterprise.hardwarePlatform](https://developer.chrome.com/extensions/enterprise.hardwarePlatform) | Use the enterprise.hardwarePlatform API to get the manufacturer and model of the hardware platform where the browser runs. Note: This API is only available to extensions installed by enterprise policy. |
| [events](https://developer.chrome.com/extensions/events) | The chrome.events namespace contains common types used by APIs dispatching events to notify you when something interesting happens. |
| [extension](https://developer.chrome.com/extensions/extension) | The chrome.extension API has utilities that can be used by any extension page. It includes support for exchanging messages between an extension and its content scripts or between extensions, as described in detail in Message Passing. |
| [extensionTypes](https://developer.chrome.com/extensions/extensionTypes) | The chrome.extensionTypes API contains type declarations for Chrome extensions. |
| [fontSettings](https://developer.chrome.com/extensions/fontSettings) | Use the chrome.fontSettings API to manage Chrome's font settings. |
| [history](https://developer.chrome.com/extensions/history) | Use the chrome.history API to interact with the browser's record of visited pages. You can add, remove, and query for URLs in the browser's history. To override the history page with your own version, see Override Pages. |
| [i18n](https://developer.chrome.com/extensions/i18n) | Use the chrome.i18n infrastructure to implement internationalization across your whole app or extension. |
| [idle](https://developer.chrome.com/extensions/idle) | Use the chrome.idle API to detect when the machine's idle state changes. |
| [management](https://developer.chrome.com/extensions/management) | The chrome.management API provides ways to manage the list of extensions/apps that are installed and running. It is particularly useful for extensions that override the built-in New Tab page. |
| [notifications](https://developer.chrome.com/extensions/notifications) | Use the chrome.notifications API to create rich notifications using templates and show these notifications to users in the system tray. |
| [omnibox](https://developer.chrome.com/extensions/omnibox) | The omnibox API allows you to register a keyword with Google Chrome's address bar, which is also known as the omnibox. |
| [pageAction](https://developer.chrome.com/extensions/pageAction) | Use the chrome.pageAction API to put icons in the main Google Chrome toolbar, to the right of the address bar. Page actions represent actions that can be taken on the current page, but that aren't applicable to all pages. Page actions appear grayed out when inactive. |
| [pageCapture](https://developer.chrome.com/extensions/pageCapture) | Use the chrome.pageCapture API to save a tab as MHTML. |
| [permissions](https://developer.chrome.com/extensions/permissions) | Use the chrome.permissions API to request declared optional permissions at run time rather than install time, so users understand why the permissions are needed and grant only those that are necessary. |
| [power](https://developer.chrome.com/extensions/power) | Use the chrome.power API to override the system's power management features. |
| [printerProvider](https://developer.chrome.com/extensions/printerProvider) | The chrome.printerProvider API exposes events used by print manager to query printers controlled by extensions, to query their capabilities and to submit print jobs to these printers. |
| [privacy](https://developer.chrome.com/extensions/privacy) | Use the chrome.privacy API to control usage of the features in Chrome that can affect a user's privacy. This API relies on the ChromeSetting prototype of the type API for getting and setting Chrome's configuration. |
| [proxy](https://developer.chrome.com/extensions/proxy) | Use the chrome.proxy API to manage Chrome's proxy settings. This API relies on the ChromeSetting prototype of the type API for getting and setting the proxy configuration. |
| [runtime](https://developer.chrome.com/extensions/runtime) | Use the chrome.runtime API to retrieve the background page, return details about the manifest, and listen for and respond to events in the app or extension lifecycle. You can also use this API to convert the relative path of URLs to fully-qualified URLs. |
| [sessions](https://developer.chrome.com/extensions/sessions) | Use the chrome.sessions API to query and restore tabs and windows from a browsing session. |
| [storage](https://developer.chrome.com/extensions/storage) | Use the chrome.storage API to store, retrieve, and track changes to user data. |
| [system.memory](https://developer.chrome.com/extensions/system_memory) | The chrome.system.memory API. |
| [system.storage](https://developer.chrome.com/extensions/system_storage) | Use the chrome.system.storage API to query storage device information and be notified when a removable storage device is attached and detached.|
| [tabCapture](https://developer.chrome.com/extensions/tabCapture) | Use the chrome.tabCapture API to interact with tab media streams. |
| [tabs](https://developer.chrome.com/extensions/tabs) | Use the chrome.tabs API to interact with the browser's tab system. You can use this API to create, modify, and rearrange tabs in the browser. |
| [topSites](https://developer.chrome.com/extensions/topSites) | Use the chrome.topSites API to access the top sites (i.e. most visited sites) that are displayed on the new tab page. These do not include shortcuts customized by the user. |
| [tts](https://developer.chrome.com/extensions/tts) | Use the chrome.tts API to play synthesized text-to-speech (TTS). See also the related ttsEngine API, which allows an extension to implement a speech engine. |
| [ttsEngine](https://developer.chrome.com/extensions/ttsEngine) | Use the chrome.ttsEngine API to implement a text-to-speech(TTS) engine using an extension. If your extension registers using this API, it will receive events containing an utterance to be spoken and other parameters when any extension or Chrome App uses the tts API to generate speech. Your extension can then use any available web technology to synthesize and output the speech, and send events back to the calling function to report the status. |
| [types](https://developer.chrome.com/extensions/types) | The chrome.types API contains type declarations for Chrome. |
| [webNavigation](https://developer.chrome.com/extensions/webNavigation) | Use the chrome.webNavigation API to receive notifications about the status of navigation requests in-flight. |
| [webRequest](https://developer.chrome.com/extensions/webRequest) | Use the chrome.webRequest API to observe and analyze traffic and to intercept, block, or modify requests in-flight. |
| [windows](https://developer.chrome.com/extensions/windows) | Use the chrome.windows API to interact with browser windows. You can use this API to create, modify, and rearrange windows in the browser. |



<!-- links -->  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developer.chrome.com/apps/external_extensions).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies
