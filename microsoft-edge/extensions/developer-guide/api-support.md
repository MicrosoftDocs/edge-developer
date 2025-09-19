---
title: Supported APIs for Microsoft Edge extensions
description: List of supported APIs to use when building a Microsoft Edge extension.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: extensions
ms.date: 12/13/2023
---
# Supported APIs for Microsoft Edge extensions

Microsoft Edge extensions use a subset of the JavaScript methods for the Chromium browser engine platform.  When building an extension for the Microsoft Edge browser, you can use the following APIs.

| API | Description | Manifest versions | Platforms |
|---|---|---|---|
| [accessibilityFeatures](https://developer.chrome.com/docs/extensions/reference/api/accessibilityFeatures) | Manages the browser's accessibility features. | MV2, MV3 | Windows, Linux, Mac |
| [action](https://developer.chrome.com/docs/extensions/reference/api/action) | Controls the extension's icon in the browser's toolbar. | MV3 | Windows, Linux, Mac, Android |
| [alarms](https://developer.chrome.com/docs/extensions/reference/api/alarms) | Schedules code to run periodically or at a specified time in the future. | MV2, MV3 | Windows, Linux, Mac, Android |
| [bookmarks](https://developer.chrome.com/docs/extensions/reference/api/bookmarks) | Creates, organizes, and manipulates bookmarks. | MV2, MV3 | Windows, Linux, Mac |
| [browserAction](https://developer.chrome.com/docs/extensions/mv2/reference/browserAction) | Uses browser actions to place icons on the toolbar in Microsoft Edge. You can also use browser actions to add a tooltip, badge, or popup. | MV2 | Windows, Linux, Mac, Android |
| [browsingData](https://developer.chrome.com/docs/extensions/reference/api/browsingData) | Removes browsing data from a user's local profile. | MV2, MV3 | Windows, Linux, Mac, Android |
| [commands](https://developer.chrome.com/docs/extensions/reference/api/commands) | Adds keyboard shortcuts that trigger actions in your extension, such as an action to open the browser or send a command to the extension. | MV2, MV3 | Windows, Linux, Mac |
| [contentSettings](https://developer.chrome.com/docs/extensions/reference/api/contentSettings) | Customizes the behavior of Microsoft Edge on each site, instead of globally. Changes settings that control whether websites can use features such as cookies, JavaScript, and plugins. | MV2, MV3 | Windows, Linux, Mac, Android |
| [contextMenus](https://developer.chrome.com/docs/extensions/reference/api/contextMenus) | Adds items to the context menu (right-click menu) in Microsoft Edge.  Menu items can apply to different objects, such as images, hyperlinks, and pages. | MV2, MV3 | Windows, Linux, Mac |
| [cookies](https://developer.chrome.com/docs/extensions/reference/api/cookies) | Queries and modifies cookies, and receives notifications when they change. | MV2, MV3 | Windows, Linux, Mac, Android |
| [debugger](https://developer.chrome.com/docs/extensions/reference/api/debugger) | Attaches to one or more tabs to instrument network interaction, debug JavaScript, change the DOM, change CSS, and so on.  Use the Debuggee's `tabId` to target tabs with `sendCommand`, and route events by `tabId` from `onEvent` callbacks. | MV2, MV3 | Windows, Linux, Mac |
| [declarativeContent](https://developer.chrome.com/docs/extensions/reference/api/declarativeContent) | Performs actions depending on the content of a page, without requiring permission to read the page content. | MV2, MV3 | Windows, Linux, Mac, Android |
| [declarativeNetRequest](https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest) | Provides more privacy by blocking or modifying network requests by specifying declarative rules. Allows extensions to modify network requests without intercepting the request and viewing the content. | MV2, MV3 | Windows, Linux, Mac, Android |
| [desktopCapture](https://developer.chrome.com/docs/extensions/reference/api/desktopCapture) | Captures the content of a screen, individual windows, or tabs. | MV2, MV3 | Windows, Linux, Mac |
| [devtools.inspectedWindow](https://developer.chrome.com/docs/extensions/reference/api/devtools/inspectedWindow) | Interacts with the inspected window.  For example, obtains the tab ID of pages, evaluate code, refresh pages, or obtain resources on a page. | MV2, MV3 | Windows, Linux, Mac |
| [devtools.network](https://developer.chrome.com/docs/extensions/reference/api/devtools/network) | Retrieves information about network requests that are displayed by the DevTools **Network** tool. | MV2, MV3 | Windows, Linux, Mac |
| [devtools.panels](https://developer.chrome.com/docs/extensions/reference/api/devtools/panels) | Integrates your extension into the Developer Tools window UI by creating your own panels, accessing existing panels, or adding sidebars. | MV2, MV3 | Windows, Linux, Mac |
| [dns](https://developer.chrome.com/docs/extensions/reference/api/dns) | Resolves DNS addresses. | MV2, MV3.  Dev channel. | Windows, Linux, Mac |
| [dom](https://developer.chrome.com/docs/extensions/reference/api/dom) | Accesses special DOM APIs for Extensions. | MV2, MV3 | Windows, Linux, Mac, Android |
| [downloads](https://developer.chrome.com/docs/extensions/reference/api/downloads) | Programmatically starts, monitors, manipulates, and searches for downloads. | MV2, MV3 | Windows, Linux, Mac, Android |
| [enterprise.hardwarePlatform](https://developer.chrome.com/docs/extensions/reference/api/enterprise/hardwarePlatform) | Gets the manufacturer and model of the hardware platform where the browser runs.  For extensions that are installed by enterprise policy. | MV2, MV3 | Windows, Linux, Mac |
| [events](https://developer.chrome.com/docs/extensions/reference/api/events) | Common types used by APIs that raise events to notify you when an interesting event occurs. | MV2, MV3 | Windows, Linux, Mac |
| [extension](https://developer.chrome.com/docs/extensions/reference/api/extension) | Utilities that can be used by any extension page.  Includes support for exchanging messages between an extension and its content scripts, or between extensions. | MV2, MV3 | Windows, Linux, Mac, Android |
| [extensionTypes](https://developer.chrome.com/docs/extensions/reference/api/extensionTypes) | Type declarations for Microsoft Edge extensions. | MV2, MV3 | Windows, Linux, Mac|
| [fontSettings](https://developer.chrome.com/docs/extensions/reference/api/fontSettings) | Manages font settings in Microsoft Edge. | MV2, MV3 | Windows, Linux, Mac |
| [history](https://developer.chrome.com/docs/extensions/reference/api/history) | Interacts with the browser's record of visited pages. You can add, remove, or query for URLs in the browser's history. To override the history page with your own version, navigate to Override Pages. | MV2, MV3 | Windows, Linux, Mac, Android |
| [i18n](https://developer.chrome.com/docs/extensions/reference/api/i18n) | Implements internationalization across your whole app or extension. | MV2, MV3 | Windows, Linux, Mac, Android |
| [identity](https://developer.chrome.com/docs/extensions/reference/api/identity) | Gets OAuth2 access tokens.  Not supported: [identity.getAccounts](https://developer.chrome.com/docs/extensions/reference/api/identity#method-getAccounts), [identity.getAuthToken](https://developer.chrome.com/docs/extensions/reference/api/identity#method-getAuthToken) - As an alternate, you can use [identity.launchWebAuthFlow](https://developer.chrome.com/docs/extensions/reference/api/identity#method-launchWebAuthFlow) to fetch an OAuth2 token to authenticate users. | MV2, MV3 | Windows, Linux, Mac, Android |
| [idle](https://developer.chrome.com/docs/extensions/reference/api/idle) | Detects when the machine's idle state changes. | MV2, MV3 | Windows, Linux, Mac, Android |
| [input.ime](https://developer.chrome.com/docs/extensions/reference/api/input/ime) | Implements a custom IME for the OS, allowing an extension to handle keystrokes, set the composition, and manage the candidate window. | MV2, MV3 | Windows, Linux, Mac |
| [management](https://developer.chrome.com/docs/extensions/reference/api/management) | Manages the list of installed or running extensions.  Can override the built-in New Tab page. | MV2, MV3 | Windows, Linux, Mac, Android |
| [notifications](https://developer.chrome.com/docs/extensions/reference/api/notifications) | Creates rich notifications using templates and displays them in the system tray. | MV2, MV3 | Windows, Linux, Mac, Android |
| [offscreen](https://developer.chrome.com/docs/extensions/reference/api/offscreen) | Creates and manages offscreen documents. | MV3 | Windows, Linux, Mac, Android |
| [omnibox](https://developer.chrome.com/docs/extensions/reference/api/omnibox) | Registers keywords in the Microsoft Edge Address bar, also known as the omnibox. | MV2, MV3 | Windows, Linux, Mac |
| [pageAction](https://developer.chrome.com/docs/extensions/mv2/reference/pageAction) | Adds icons to the Microsoft Edge toolbar, to the right of the Address bar. Page actions are actions that can be taken on the current page, and aren't applicable to all pages. Page actions appear grayed out when inactive. | MV2 | Windows, Linux, Mac, Android |
| [pageCapture](https://developer.chrome.com/docs/extensions/reference/api/pageCapture) | Saves tabs as MHTML files. | MV2, MV3 | Windows, Linux, Mac |
| [permissions](https://developer.chrome.com/docs/extensions/reference/api/permissions) | Retrieves declared, optional permissions at runtime, instead of at install time. You can use this API to display needed and approved permissions to your users. | MV2, MV3 | Windows, Linux, Mac, Android |
| [power](https://developer.chrome.com/docs/extensions/reference/api/power) | Overrides the system's power management features. | MV2, MV3 | Windows, Linux, Mac |
| [printerProvider](https://developer.chrome.com/docs/extensions/reference/api/printerProvider) | Uses events to query printers, their capabilities, and to submit print jobs. | MV2, MV3 | Windows, Linux, Mac |
| [privacy](https://developer.chrome.com/docs/extensions/reference/api/privacy) | Controls features in Microsoft Edge that affects a user's privacy. This API depends on the `EdgeSetting` prototype of `types` to get and set the configuration of Microsoft Edge. | MV2, MV3 | Windows, Linux, Mac |
| [processes](https://developer.chrome.com/docs/extensions/reference/api/processes) | Interacts with the browser's processes. | MV2, MV3.  Dev channel. | Windows, Linux, Mac |
| [proxy](https://developer.chrome.com/docs/extensions/reference/api/proxy) | Manages proxy settings for Microsoft Edge. This API depends on the `EdgeSetting` prototype of the `types` API to get and set the proxy configuration of Microsoft Edge. | MV2, MV3 | Windows, Linux, Mac |
| [runtime](https://developer.chrome.com/docs/extensions/reference/api/runtime) | Retrieves the background page, return details about the manifest, and listen for and respond to events in the app or extension lifecycle. You can also convert the relative path of URLs to fully qualified URLs. | MV2, MV3 | Windows, Linux, Mac, Android |
| [scripting](https://developer.chrome.com/docs/extensions/reference/api/scripting) | Executes scripts in different contexts. | MV3 | Windows, Linux, Mac, Android |
| [search](https://developer.chrome.com/docs/extensions/reference/api/search) | Searches by using the default provider. | MV2, MV3 | Windows, Linux, Mac, Android |
| [sessions](https://developer.chrome.com/docs/extensions/reference/api/sessions) | Queries and restores tabs and windows from a browsing session. | MV2, MV3 | Windows, Linux, Mac, Android |
| [sidePanel](https://developer.chrome.com/docs/extensions/reference/api/sidePanel) | Hosts custom content in the browser's sidebar alongside the main content of a webpage.  See [Develop an extension for the Microsoft Edge sidebar](../developer-guide/sidebar.md). | MV3 | Windows, Linux, Mac |
| [storage](https://developer.chrome.com/docs/extensions/reference/api/storage) | Stores, retrieves, and tracks changes to user data. | MV2, MV3 | Windows, Linux, Mac, Android |
| [system.cpu](https://developer.chrome.com/docs/extensions/reference/api/system/cpu) | Queries CPU metadata. | MV2, MV3 | Windows, Linux, Mac, Android |
| [system.display](https://developer.chrome.com/docs/extensions/reference/api/system/display) | Queries display metadata. | MV2, MV3 | Windows, Linux, Mac |
| [system.memory](https://developer.chrome.com/docs/extensions/reference/api/system/memory) | Reports the available memory capacity and total physical memory capacity. | MV2, MV3 | Windows, Linux, Mac, Android |
| [system.storage](https://developer.chrome.com/docs/extensions/reference/api/system/storage) | Queries information about storage devices. You can also receive notifications when storage devices are attached or detached. | MV2, MV3 | Windows, Linux, Mac |
| [tabCapture](https://developer.chrome.com/docs/extensions/reference/api/tabCapture) | Interacts with tab media streams. | MV2, MV3 | Windows, Linux, Mac |
| [tabGroups](https://developer.chrome.com/docs/extensions/reference/api/tabGroups) | Interacts with the browser's tab grouping system.  Modifies and rearranges tab groups in the browser.  To group and ungroup tabs, or to query what tabs are in groups, use the [tabs](https://developer.chrome.com/docs/extensions/reference/api/tabs) API instead. | MV3 | Windows, Linux, Mac |
| [tabs](https://developer.chrome.com/docs/extensions/reference/api/tabs) | Interacts with the browser's tab system to create, modify, and rearrange tabs. | MV2, MV3 | Windows, Linux, Mac, Android |
| [topSites](https://developer.chrome.com/docs/extensions/reference/api/topSites) | Accesses the top sites, also called the _most visited sites_, that are displayed on the new tab page. These sites don't include shortcuts that are customized by the user. | MV2, MV3 | Windows, Linux, Mac |
| [tts](https://developer.chrome.com/docs/extensions/reference/api/tts) | Plays synthesized text-to-speech (TTS). | MV2, MV3 | Windows, Linux, Mac |
| [ttsEngine](https://developer.chrome.com/docs/extensions/reference/api/ttsEngine) | Implements a text-to-speech (TTS) engine using an extension.  Extensions that register to use this API receive events that contain utterances to be spoken and other parameters.  Extensions can then use any available web technology to synthesize and output speech, and send events back to the calling function to report the status. | MV2, MV3 | Windows, Linux, Mac |
| [types](https://developer.chrome.com/docs/extensions/reference/api/types) | Type declarations for Microsoft Edge. | MV2, MV3 | Windows, Linux, Mac |
| [userScripts](https://developer.chrome.com/docs/extensions/reference/api/userScripts) | Executes user scripts in the User Scripts context. | MV3 | Windows, Linux, Mac, Android |
| [webAuthenticationProxy](https://developer.chrome.com/docs/extensions/reference/api/webAuthenticationProxy) | Lets remote desktop software that's running on a remote host intercept Web Authentication API (WebAuthn) requests in order to handle them on a local client. | MV3 | Windows, Linux, Mac |
| [webNavigation](https://developer.chrome.com/docs/extensions/reference/api/webNavigation) | Receives notifications about the status of navigation requests. | MV2, MV3 | Windows, Linux, Mac, Android |
| [webRequest](https://developer.chrome.com/docs/extensions/reference/api/webRequest) | Observes and analyzes traffic.  Intercepts, blocks, or modifies requests. | MV2, MV3 | Windows, Linux, Mac, Android |
| [windows](https://developer.chrome.com/docs/extensions/reference/api/windows) | Interacts with browser windows to create, modify, and rearrange windows in the browser. | MV2, MV3 | Windows, Linux, Mac |


<!-- ====================================================================== -->
## Unsupported APIs

These Extensions APIs are not supported for Microsoft Edge.

| API | Notes |
|---|---|
| [audio](https://developer.chrome.com/docs/extensions/reference/api/audio) | ChromeOS only. |
| [certificateProvider](https://developer.chrome.com/docs/extensions/reference/api/certificateProvider) | ChromeOS only. |
| [devtools.recorder](https://developer.chrome.com/docs/extensions/reference/api/devtools/recorder) | Chrome DevTools only. |
| [documentScan](https://developer.chrome.com/docs/extensions/reference/api/documentScan) | ChromeOS only. |
| [enterprise.deviceAttributes](https://developer.chrome.com/docs/extensions/reference/api/enterprise/deviceAttributes) | ChromeOS only. |
| [enterprise.networkingAttributes](https://developer.chrome.com/docs/extensions/reference/api/enterprise/networkingAttributes) | ChromeOS only. |
| [enterprise.platformKeys](https://developer.chrome.com/docs/extensions/reference/api/enterprise/platformKeys) | ChromeOS only. |
| [fileBrowserHandler](https://developer.chrome.com/docs/extensions/reference/api/fileBrowserHandler) | ChromeOS only. |
| [fileSystemProvider](https://developer.chrome.com/docs/extensions/reference/api/fileSystemProvider) | ChromeOS only. |
| [gcm](https://developer.chrome.com/docs/extensions/reference/api/gcm) | |
| [identity.getAccounts](https://developer.chrome.com/docs/extensions/reference/api/identity#method-getAccounts) | |
| [identity.getAuthToken](https://developer.chrome.com/docs/extensions/reference/api/identity#method-getAuthToken) | Gets an OAuth2 access token using the client ID and scopes specified in the oauth2 section of `manifest.json`.  As an alternate, you can use [identity.launchWebAuthFlow](https://developer.chrome.com/docs/extensions/reference/api/identity#method-launchWebAuthFlow) to fetch an OAuth2 token to authenticate users. |
| [instanceID](https://developer.chrome.com/docs/extensions/reference/api/instanceID) | |
| [loginState](https://developer.chrome.com/docs/extensions/reference/api/loginState) | ChromeOS only. |
| [platformKeys](https://developer.chrome.com/docs/extensions/reference/api/platformKeys) | ChromeOS only. |
| [printing](https://developer.chrome.com/docs/extensions/reference/api/printing) | ChromeOS only. |
| [printingMetrics](https://developer.chrome.com/docs/extensions/reference/api/printingMetrics) | ChromeOS only. |
| [readingList](https://developer.chrome.com/docs/extensions/reference/api/readingList) | |
| [vpnProvider](https://developer.chrome.com/docs/extensions/reference/api/vpnProvider) | ChromeOS only. |
| [wallpaper](https://developer.chrome.com/docs/extensions/reference/api/wallpaper) | ChromeOS only. |


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

* [Chrome Extensions API reference for Manifest V2](https://developer.chrome.com/docs/extensions/mv2/reference/)
* [Chrome Extensions API reference for Manifest V3](https://developer.chrome.com/docs/extensions/reference/api/)
* [Use the REST API to update an extension at Microsoft Edge Add-ons](../update/api/using-addons-api.md) - to update an extension at [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/).
