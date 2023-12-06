---
title: Supported APIs for Microsoft Edge extensions
description: List of supported APIs to use when building Microsoft Edge extensions.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 08/28/2023
---
# Supported APIs for Microsoft Edge extensions

When building extensions for the Microsoft Edge browser, you can use the following APIs.

todo: Manifest V3, or V2?  Updated this list per V3 TOC.  base links, to view V2 TOC vs. V3 TOC:
* V2: https://developer.chrome.com/docs/extensions/mv2/reference/
* V3: https://developer.chrome.com/docs/extensions/reference/api/

| API | Description |
|---|---|
| [accessibilityFeatures](https://developer.chrome.com/docs/extensions/reference/api/accessibilityFeatures) | todo: supported? |
| [action](https://developer.chrome.com/docs/extensions/reference/api/action) | todo: supported? |
| [alarms](https://developer.chrome.com/docs/extensions/reference/api/alarms) | Schedule code to run periodically or at a specified time in the future. |
| [audio](https://developer.chrome.com/docs/extensions/reference/api/audio) | todo: supported? |
| [bookmarks](https://developer.chrome.com/docs/extensions/reference/api/bookmarks) | Create, organize, and manipulate bookmarks. |
| [browserAction](https://developer.chrome.com/docs/extensions/mv2/reference/browserAction) | Use browser actions to place icons on the toolbar in Microsoft Edge. You can also use browser actions to add a tooltip, badge, or popup.  todo: Manifest V2, not in V3 |
| [browsingData](https://developer.chrome.com/docs/extensions/reference/api/browsingData) | Remove browsing data from a user's local profile. |
| [certificateProvider](https://developer.chrome.com/docs/extensions/reference/api/certificateProvider) | todo: supported? |
| [commands](https://developer.chrome.com/docs/extensions/reference/api/commands) | Add keyboard shortcuts that trigger actions in your extension. For example, an action to open the browser or send a command to the extension. |
| [contentSettings](https://developer.chrome.com/docs/extensions/reference/api/contentSettings) | In general, content settings allow you to customize the behavior of Microsoft Edge on each site, instead of globally. Change settings that control whether websites can use features such as cookies, JavaScript, and plugins. |
| [contextMenus](https://developer.chrome.com/docs/extensions/reference/api/contextMenus) | Add items to the context menu in Microsoft Edge. Menu items may apply to different objects, such as images, hyperlinks, and pages. |
| [cookies](https://developer.chrome.com/docs/extensions/reference/api/cookies) | Query and modify cookies, and receive notifications when they change. |
| [debugger](https://developer.chrome.com/docs/extensions/reference/api/debugger) | Attach to one or more tabs to instrument network interaction, debug JavaScript, change the DOM, change CSS, and so on. Use the debugger tabId to target tabs with sendCommand, and route events by tabId from onEvent callbacks. |
| [declarativeContent](https://developer.chrome.com/docs/extensions/reference/api/declarativeContent) | Take actions depending on the content of a page, without requiring permission to read the page content. |
| [declarativeNetRequest](https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest) | Provides more privacy by blocking or modifying network requests by specifying declarative rules. Allow extensions to modify network requests without intercepting the request and viewing the content. |
| [desktopCapture](https://developer.chrome.com/docs/extensions/reference/api/desktopCapture) | Capture the content of a screen, individual windows, or tabs. |
| [devtools.inspectedWindow](https://developer.chrome.com/docs/extensions/reference/api/devtools/inspectedWindow) | Interact with the inspected window.  For example, obtain the tab ID of pages, evaluate code, refresh pages, or obtain resources on a page. |
| [devtools.network](https://developer.chrome.com/docs/extensions/reference/api/devtools/network) | Retrieve information about network requests displayed by the Developer Tools in the Network panel. |
| [devtools.panels](https://developer.chrome.com/docs/extensions/reference/api/devtools/panels) | Integrate your extension into the Developer Tools window UI by creating your own panels, accessing existing panels, or adding sidebars. |
| [devtools.recorder](https://developer.chrome.com/docs/extensions/reference/api/devtools/recorder) | todo: supported? |
| [dns](https://developer.chrome.com/docs/extensions/reference/api/dns) | todo: supported? |
| [documentScan](https://developer.chrome.com/docs/extensions/reference/api/documentScan) | todo: supported? |
| [dom](https://developer.chrome.com/docs/extensions/reference/api/dom) | todo: supported? |
| [downloads](https://developer.chrome.com/docs/extensions/reference/api/downloads) | Programmatically start, monitor, manipulate, and search for downloads. |
| [enterprise.deviceAttributes](https://developer.chrome.com/docs/extensions/reference/api/enterprise/deviceAttributes) | todo: supported? |
| [enterprise.hardwarePlatform](https://developer.chrome.com/docs/extensions/reference/api/enterprise/hardwarePlatform) | Get the manufacturer and model of the hardware platform where the browser runs. This API is only available to extensions installed by enterprise policy. |
| [enterprise.networkingAttributes](https://developer.chrome.com/docs/extensions/reference/api/enterprise/networkingAttributes) | todo: supported? |
| [enterprise.platformKeys](https://developer.chrome.com/docs/extensions/reference/api/enterprise/platformKeys) | todo: supported? |
| [events](https://developer.chrome.com/docs/extensions/reference/api/events) | Common types used by APIs that raise events to notify you when an interesting event occurs. |
| [extension](https://developer.chrome.com/docs/extensions/reference/api/extension) | Any extension page can use the utilities of this API. It includes support for exchanging messages between extensions and content scripts, which is described in Message Passing. |
| [extensionTypes](https://developer.chrome.com/docs/extensions/reference/api/extensionTypes) | Contains type declarations for Microsoft Edge extensions. |
| [fileBrowserHandler](https://developer.chrome.com/docs/extensions/reference/api/fileBrowserHandler) | todo: supported? |
| [fileSystemProvider](https://developer.chrome.com/docs/extensions/reference/api/fileSystemProvider) | todo: supported? |
| [fontSettings](https://developer.chrome.com/docs/extensions/reference/api/fontSettings) | Manage font settings in Microsoft Edge. |
| [history](https://developer.chrome.com/docs/extensions/reference/api/history) | Interact with the browser's record of visited pages. You can add, remove, or query for URLs in the browser's history. To override the history page with your own version, navigate to Override Pages. |
| [i18n](https://developer.chrome.com/docs/extensions/reference/api/i18n) | Implement internationalization across your whole app or extension. |
| [identity](https://developer.chrome.com/docs/extensions/reference/api/identity) | todo: supported?  the "not supported" section below lists `identity.getAccounts` & `.getAuthToken` |
| [idle](https://developer.chrome.com/docs/extensions/reference/api/idle) | Detect when the machine's idle state changes. |
| [input.ime] | todo: supported?  todo: 404 at Chrome site though listed in that TOC |
| [loginState](https://developer.chrome.com/docs/extensions/reference/api/loginState) | todo: supported? |
| [management](https://developer.chrome.com/docs/extensions/reference/api/management) | Manage the list of installed or running extensions. It's useful for extensions that override the built-in New Tab page. |
| [notifications](https://developer.chrome.com/docs/extensions/reference/api/notifications) | Create rich notifications using templates and display them in the system tray. |
| [omnibox](https://developer.chrome.com/docs/extensions/reference/api/omnibox) | Register keywords in the Microsoft Edge address bar, also known as the omnibox. |
| [pageAction](https://developer.chrome.com/docs/extensions/mv2/reference/pageAction) | todo: MV2, not MV3.  Add icons to the Microsoft Edge toolbar, to the right of the address bar. Page actions are actions that can be taken on the current page, and aren't applicable to all pages. Page actions appear grayed out when inactive. |
| [pageCapture](https://developer.chrome.com/docs/extensions/reference/api/pageCapture) | Save tabs as MHTML files.|
| [permissions](https://developer.chrome.com/docs/extensions/reference/api/permissions) | Retrieve declared, optional permissions at runtime, instead of at install time. You can use this API to display needed and approved permissions to your users. |
| [platformKeys](https://developer.chrome.com/docs/extensions/reference/api/platformKeys) | todo: supported? |
| [power](https://developer.chrome.com/docs/extensions/reference/api/power) | Override the system's power management features. |
| [printerProvider](https://developer.chrome.com/docs/extensions/reference/api/printerProvider) | Use events to query printers, their capabilities, and to submit print jobs. |
| [printing](https://developer.chrome.com/docs/extensions/reference/api/printing) | todo: supported? |
| [printingMetrics](https://developer.chrome.com/docs/extensions/reference/api/printingMetrics) | todo: supported? |
| [privacy](https://developer.chrome.com/docs/extensions/reference/api/privacy) | Control features in Microsoft Edge that affects a user's privacy. This API depends on the `EdgeSetting` prototype of `types` to get and set the configuration of Microsoft Edge. |
| [processes](https://developer.chrome.com/docs/extensions/reference/api/processes) | todo: supported? |
| [proxy](https://developer.chrome.com/docs/extensions/reference/api/proxy) | Manage proxy settings for Microsoft Edge. This API depends on the `EdgeSetting` prototype of the `types` API to get and set the proxy configuration of Microsoft Edge. |
| [runtime](https://developer.chrome.com/docs/extensions/reference/api/runtime) | Retrieve the background page, return details about the manifest, and listen for and respond to events in the app or extension lifecycle. You can also convert the relative path of URLs to fully qualified URLs. |
| [scripting](https://developer.chrome.com/docs/extensions/reference/api/scripting) | todo: supported? |
| [search](https://developer.chrome.com/docs/extensions/reference/api/search) | todo: supported? |
| [sessions](https://developer.chrome.com/docs/extensions/reference/api/sessions) | Query and restore tabs and windows from a browsing session. |
| [sidePanel](https://developer.chrome.com/docs/extensions/reference/api/sidePanel) | Host custom content in the browser's sidebar alongside the main content of a webpage.  See [Extensions in the Microsoft Edge sidebar](../developer-guide/sidebar.md). |
| [storage](https://developer.chrome.com/docs/extensions/reference/api/storage) | Store, retrieve, and track changes to user data. |
| [system.cpu](https://developer.chrome.com/docs/extensions/reference/api/system/cpu) | todo: supported? |
| [system.display](https://developer.chrome.com/docs/extensions/reference/api/system/display) | todo: supported? |
| [system.memory](https://developer.chrome.com/docs/extensions/reference/api/system/memory) | The `system.memory` API. |
| [system.storage](https://developer.chrome.com/docs/extensions/reference/api/system/storage) | Query information about storage devices. You can also receive notifications when storage devices are attached or detached. |
| [tabCapture](https://developer.chrome.com/docs/extensions/reference/api/tabCapture) | Interact with tab media streams. |
| [tabGroups](https://developer.chrome.com/docs/extensions/reference/api/tabGroups) | todo: supported? |
| [tabs](https://developer.chrome.com/docs/extensions/reference/api/tabs) | Interact with the browser's tab system to create, modify, and rearrange tabs. |
| [topSites](https://developer.chrome.com/docs/extensions/reference/api/topSites) | Access the top sites, also called most visited sites, that are displayed on the new tab page. These sites don't include shortcuts customized by the user. |
| [tts](https://developer.chrome.com/docs/extensions/reference/api/tts) | Play synthesized text-to-speech (TTS). |
| [ttsEngine](https://developer.chrome.com/docs/extensions/reference/api/ttsEngine) | Implement a text-to-speech (TTS) engine using an extension. Extensions that register to use this API receive events that contain utterances to be spoken and other parameters. Extensions can then use any available web technology to synthesize and output speech, and send events back to the calling function to report the status. |
| [types](https://developer.chrome.com/docs/extensions/reference/api/types) | Type declarations for Microsoft Edge. |
| [userScripts](https://developer.chrome.com/docs/extensions/reference/api/userScripts) | todo: supported? |
| [vpnProvider](https://developer.chrome.com/docs/extensions/reference/api/vpnProvider) | todo: supported? |
| [wallpaper](https://developer.chrome.com/docs/extensions/reference/api/wallpaper) | todo: supported? |
| [webAuthenticationProxy](https://developer.chrome.com/docs/extensions/reference/api/webAuthenticationProxy) | todo: supported? |
| [webNavigation](https://developer.chrome.com/docs/extensions/reference/api/webNavigation) | Receive notifications about the status of navigation requests. |
| [webRequest](https://developer.chrome.com/docs/extensions/reference/api/webRequest) | Observe and analyze traffic. Intercept, block, or modify requests. |
| [windows](https://developer.chrome.com/docs/extensions/reference/api/windows) | Interact with browser windows to create, modify, and rearrange windows in the browser. |


<!-- ====================================================================== -->
## Unsupported extension APIs

Microsoft Edge doesn't support the following Extension APIs:

* `chrome.gcm`
* `chrome.identity.getAccounts`
* `chrome.identity.getAuthToken` - As an alternate, you can use `launchWebAuthFlow` to fetch an OAuth2 token to authenticate users.
* `chrome.instanceID`
* `chrome.readingList`<!-- [Chrome Extension API Proposal: chrome.readingList](https://docs.google.com/document/d/1f1wW2955nY5Rp3vfS0JGuo1kACOAmsjZupvLYknWKII/edit#heading=h.mbf7udvanbrr) -->
<!--
| [gcm](https://developer.chrome.com/docs/extensions/reference/api/gcm) | todo: supported? |
| [instanceID](https://developer.chrome.com/docs/extensions/reference/api/instanceID) | todo: supported? |
| [readingList](https://developer.chrome.com/docs/extensions/reference/api/readingList) | todo: supported? |
-->


<!-- ====================================================================== -->
## Additional considerations for supported APIs

*  The user must be signed into Microsoft Edge using a Microsoft account (MSA) or Microsoft Entra ID account to use `chrome.identity.getProfileUserInfo`. If the user is signed into Microsoft Edge using an on-premises Microsoft Entra ID account, the API returns `null` for the email and ID values.

   A Microsoft account (MSA) is an Outlook.com, Live.com, or Hotmail.com account.

*  Microsoft Edge doesn't support extensions that use Chrome Web Store payments because it uses `identity.getAuthtoken` to request tokens for signed-in users.  These tokens are sent to the REST-based licensing API.


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/extensions/reference/api).

[![Creative Commons License](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).


<!-- ====================================================================== -->
## See also

* [Overview of Microsoft Edge extensions](../index.md)
* [API reference](https://developer.chrome.com/docs/extensions/reference/api/) for Chromium extensions.
