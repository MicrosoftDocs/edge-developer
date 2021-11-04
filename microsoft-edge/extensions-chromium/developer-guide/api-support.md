---
description: List of supported APIs to use when building Microsoft Edge extensions.
title: Supported APIs for Microsoft Edge extensions
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/07/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: edge-chromium, extensions development, browser extensions, add-ons, extension api , developer, web development
---
# Supported APIs for Microsoft Edge extensions

The following table provides a list of APIs that you can use when building extensions for the Microsoft Edge browser.

| API                                   | Description
|---------------------------------------|----------------------------------------------------------|
| [alarms](https://developer.chrome.com/extensions/alarms) | Schedule code to run periodically or at a specified time in the future. |
| [bookmarks](https://developer.chrome.com/extensions/bookmarks) | Create, organize, and manipulate bookmarks. |
| [browserAction](https://developer.chrome.com/extensions/browserAction) | Use browser actions to place icons on the toolbar in Microsoft Edge. You can also use browser actions to add a tooltip, badge, or popup. |
| [browsingData](https://developer.chrome.com/extensions/browsingData) | Remove browsing data from a user's local profile. |
| [commands](https://developer.chrome.com/extensions/commands) | Add keyboard shortcuts that trigger actions in your extension. For example, an action to open the browser or send a command to the extension. |
| [contentSettings](https://developer.chrome.com/extensions/contentSettings) | In general, content settings allow you to customize the behavior of Microsoft Edge on each site, instead of globally. Change settings that control whether websites can use features such as cookies, JavaScript, and plugins. |
| [contextMenus](https://developer.chrome.com/extensions/contextMenus) | Add items to the context menu in Microsoft Edge. Menu items may apply to different objects, such as images, hyperlinks, and pages. |
| [cookies](https://developer.chrome.com/extensions/cookies) | Query and modify cookies, and receive notifications when they change. |
| [debugger](https://developer.chrome.com/extensions/debugger) | Attach to one or more tabs to instrument network interaction, debug JavaScript, change the DOM, change CSS, and so on. Use the debugger tabId to target tabs with sendCommand, and route events by tabId from onEvent callbacks. |
| [declarativeContent](https://developer.chrome.com/extensions/declarativeContent) | Take actions depending on the content of a page, without requiring permission to read the page content. |
| [declarativeNetRequest](https://developer.chrome.com/extensions/declarativeNetRequest) | Provides more privacy by blocking or modifying network requests by specifying declarative rules. Allow extensions to modify network requests without intercepting the request and viewing the content. |
| [desktopCapture](https://developer.chrome.com/extensions/desktopCapture) | Capture the content of a screen, individual windows, or tabs. |
| [devtools.inspectedWindow](https://developer.chrome.com/extensions/devtools_inspectedWindow) | Interact with the inspected window.  For example, obtain the tab ID of pages, evaluate code, refresh pages, or obtain resources on a page. |
| [devtools.network](https://developer.chrome.com/extensions/devtools_network) | Retrieve information about network requests displayed by the Developer Tools in the Network panel. |
| [devtools.panels](https://developer.chrome.com/extensions/devtools.panels) | Integrate your extension into the Developer Tools window UI by creating your own panels, accessing existing panels, or adding sidebars. |
| [downloads](https://developer.chrome.com/extensions/downloads) | Programmatically start, monitor, manipulate, and search for downloads. |
| [enterprise.hardwarePlatform](https://developer.chrome.com/extensions/enterprise.hardwarePlatform) | Get the manufacturer and model of the hardware platform where the browser runs. This API is only available to extensions installed by enterprise policy. |
| [events](https://developer.chrome.com/extensions/events) | Common types used by APIs that raise events to notify you when an interesting event occurs. |
| [extension](https://developer.chrome.com/extensions/extension) | Any extension page can use the utilities of this API. It includes support for exchanging messages between extensions and content scripts, which is described in Message Passing. |
| [extensionTypes](https://developer.chrome.com/extensions/extensionTypes) | Contains type declarations for Microsoft Edge extensions. |
| [fontSettings](https://developer.chrome.com/extensions/fontSettings) | Manage font settings in Microsoft Edge. |
| [history](https://developer.chrome.com/extensions/history) | Interact with the browser's record of visited pages. You can add, remove, or query for URLs in the browser's history. To override the history page with your own version, navigate to Override Pages. |
| [i18n](https://developer.chrome.com/extensions/i18n) | Implement internationalization across your whole app or extension. |
| [idle](https://developer.chrome.com/extensions/idle) | Detect when the machine's idle state changes. |
| [management](https://developer.chrome.com/extensions/management) | Manage the list of installed or running extensions. It's useful for extensions that override the built-in New Tab page. |
| [notifications](https://developer.chrome.com/extensions/notifications) | Create rich notifications using templates and display them in the system tray. |
| [omnibox](https://developer.chrome.com/extensions/omnibox) | Register keywords in the Microsoft Edge address bar, also known as the omnibox. |
| [pageAction](https://developer.chrome.com/extensions/pageAction) | Add icons to the Microsoft Edge toolbar, to the right of the address bar. Page actions are actions that can be taken on the current page, and aren't applicable to all pages. Page actions appear grayed out when inactive. |
| [pageCapture](https://developer.chrome.com/extensions/pageCapture) | Save tabs as MHTML files.|
| [permissions](https://developer.chrome.com/extensions/permissions) | Retrieve declared, optional permissions at runtime, instead of at install time. You can use this API to display needed and approved permissions to your users. |
| [power](https://developer.chrome.com/extensions/power) | Override the system's power management features. |
| [printerProvider](https://developer.chrome.com/extensions/printerProvider) | Use events to query printers, their capabilities, and to submit print jobs. |
| [privacy](https://developer.chrome.com/extensions/privacy) | Control features in Microsoft Edge that affects a user's privacy. This API depends on the `EdgeSetting` prototype of `types` to get and set the configuration of Microsoft Edge. |
| [proxy](https://developer.chrome.com/extensions/proxy) | Manage proxy settings for Microsoft Edge. This API depends on the `EdgeSetting` prototype of the `types` API to get and set the proxy configuration of Microsoft Edge. |
| [runtime](https://developer.chrome.com/extensions/runtime) | Retrieve the background page, return details about the manifest, and listen for and respond to events in the app or extension lifecycle. You can also convert the relative path of URLs to fully qualified URLs. |
| [sessions](https://developer.chrome.com/extensions/sessions) | Query and restore tabs and windows from a browsing session. |
| [storage](https://developer.chrome.com/extensions/storage) | Store, retrieve, and track changes to user data. |
| [system.memory](https://developer.chrome.com/extensions/system_memory) | The `system.memory` API. |
| [system.storage](https://developer.chrome.com/extensions/system_storage) | Query information about storage devices. You can also receive notifications when storage devices are attached or detached. |
| [tabCapture](https://developer.chrome.com/extensions/tabCapture) | Interact with tab media streams. |
| [tabs](https://developer.chrome.com/extensions/tabs) | Interact with the browser's tab system to create, modify, and rearrange tabs. |
| [topSites](https://developer.chrome.com/extensions/topSites) | Access the top sites, also called most visited sites, that are displayed on the new tab page. These sites don't include shortcuts customized by the user. |
| [tts](https://developer.chrome.com/extensions/tts) | Play synthesized text-to-speech (TTS). |
| [ttsEngine](https://developer.chrome.com/extensions/ttsEngine) | Implement a text-to-speech (TTS) engine using an extension. Extensions that register to use this API receive events that contain utterances to be spoken and other parameters. Extensions can then use any available web technology to synthesize and output speech, and send events back to the calling function to report the status. |
| [types](https://developer.chrome.com/extensions/types) | Type declarations for Microsoft Edge. |
| [webNavigation](https://developer.chrome.com/extensions/webNavigation) | Receive notifications about the status of navigation requests. |
| [webRequest](https://developer.chrome.com/extensions/webRequest) | Observe and analyze traffic. Intercept, block, or modify requests. |
| [windows](https://developer.chrome.com/extensions/windows) | Interact with browser windows to create, modify, and rearrange windows in the browser. |



<!-- ====================================================================== -->
## Unsupported extension APIs

Microsoft Edge doesn't support the following Extension APIs:

* `chrome.gcm`.
* `chrome.identity.getAccounts`.
* `chrome.identity.getAuthToken` - As an alternate, you may use `launchWebAuthFlow` to fetch an OAuth2 token to authenticate users.
* `chrome.instanceID`.


<!-- ====================================================================== -->
## Additional considerations for supported APIs

*  The user must be signed into Microsoft Edge using a Microsoft account (MSA) or Azure Active Directory account to use `chrome.identity.getProfileUserInfo`. If the user is signed into Microsoft Edge using an on-premises Active Directory account, the API returns `null` for the email and ID values.

   A Microsoft account (MSA) is an Outlook.com, Live.com, or Hotmail.com account.

*  Microsoft Edge doesn't support extensions that use Chrome Web Store payments because it uses `identity.getAuthtoken` to request tokens for signed-in users.  These tokens are sent to the REST-based licensing API.




> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/apps/external_extensions).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
