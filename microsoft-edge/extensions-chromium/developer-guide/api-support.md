---
title: Supported APIs for Microsoft Edge extensions
description: List of supported APIs to use when building Microsoft Edge extensions.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 12/12/2023
---
# Supported APIs for Microsoft Edge extensions

When building extensions for the Microsoft Edge browser, you can use the following APIs.

| API | Description | Manifest versions |
|---|---|
| [accessibilityFeatures](https://developer.chrome.com/docs/extensions/reference/api/accessibilityFeatures) | todo: supported?  Manages Chrome's accessibility features. | All |
| [action](https://developer.chrome.com/docs/extensions/reference/api/action) | todo: supported?  Controls the extension's icon in the browser's toolbar. | MV3+ |
| [alarms](https://developer.chrome.com/docs/extensions/reference/api/alarms) | Schedules code to run periodically or at a specified time in the future. | All |
| [audio](https://developer.chrome.com/docs/extensions/reference/api/audio) | todo: supported?  Allows users to get information about and control the audio devices attached to the system.  This API is currently only available in kiosk mode for ChromeOS. | All. ChromeOS only |
| [bookmarks](https://developer.chrome.com/docs/extensions/reference/api/bookmarks) | Creates, organizes, and manipulates bookmarks. | All |
| [browserAction](https://developer.chrome.com/docs/extensions/mv2/reference/browserAction) | Uses browser actions to place icons on the toolbar in Microsoft Edge. You can also use browser actions to add a tooltip, badge, or popup.  todo: This API exists for Manifest V2 only, not Manifest V3. | MV2 only |
| [browsingData](https://developer.chrome.com/docs/extensions/reference/api/browsingData) | Removes browsing data from a user's local profile. | All |
| [certificateProvider](https://developer.chrome.com/docs/extensions/reference/api/certificateProvider) | todo: supported?  Exposes certificates to the platform, which can use these certificates for TLS authentications. | ChromeOS only |
| [commands](https://developer.chrome.com/docs/extensions/reference/api/commands) | Adds keyboard shortcuts that trigger actions in your extension, such as an action to open the browser or send a command to the extension. | All |
| [contentSettings](https://developer.chrome.com/docs/extensions/reference/api/contentSettings) | Customizes the behavior of Microsoft Edge on each site, instead of globally. Changes settings that control whether websites can use features such as cookies, JavaScript, and plugins. | All |
| [contextMenus](https://developer.chrome.com/docs/extensions/reference/api/contextMenus) | Adds items to the context menu (right-click menu) in Microsoft Edge.  Menu items can apply to different objects, such as images, hyperlinks, and pages. | All |
| [cookies](https://developer.chrome.com/docs/extensions/reference/api/cookies) | Queries and modifies cookies, and receives notifications when they change. | All |
| [debugger](https://developer.chrome.com/docs/extensions/reference/api/debugger) | Attaches to one or more tabs to instrument network interaction, debug JavaScript, change the DOM, change CSS, and so on.  Use the Debuggee's `tabId` to target tabs with `sendCommand`, and route events by `tabId` from `onEvent` callbacks. | All |
| [declarativeContent](https://developer.chrome.com/docs/extensions/reference/api/declarativeContent) | Performs actions depending on the content of a page, without requiring permission to read the page content. | All |
| [declarativeNetRequest](https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest) | Provides more privacy by blocking or modifying network requests by specifying declarative rules. Allows extensions to modify network requests without intercepting the request and viewing the content. | All |
| [desktopCapture](https://developer.chrome.com/docs/extensions/reference/api/desktopCapture) | Captures the content of a screen, individual windows, or tabs. | All |
| [devtools.inspectedWindow](https://developer.chrome.com/docs/extensions/reference/api/devtools/inspectedWindow) | Interacts with the inspected window.  For example, obtains the tab ID of pages, evaluate code, refresh pages, or obtain resources on a page. | All |
| [devtools.network](https://developer.chrome.com/docs/extensions/reference/api/devtools/network) | Retrieves information about network requests that are displayed by the DevTools **Network** tool. | All |
| [devtools.panels](https://developer.chrome.com/docs/extensions/reference/api/devtools/panels) | Integrates your extension into the Developer Tools window UI by creating your own panels, accessing existing panels, or adding sidebars. | All |
| [devtools.recorder](https://developer.chrome.com/docs/extensions/reference/api/devtools/recorder) | todo: supported? (probably not.)  Customizes the **Recorder** tool in DevTools. | All.  Chrome DevTools only. |
| [dns](https://developer.chrome.com/docs/extensions/reference/api/dns) | todo: supported?  Resolves DNS addresses. | All.  Dev channel. |
| [documentScan](https://developer.chrome.com/docs/extensions/reference/api/documentScan) | todo: supported?  Discovers and retrieves images from attached paper document scanners. | All. ChromeOS only. |
| [dom](https://developer.chrome.com/docs/extensions/reference/api/dom) | todo: supported?  Accesses special DOM APIs for Extensions. | All |
| [downloads](https://developer.chrome.com/docs/extensions/reference/api/downloads) | Programmatically starts, monitors, manipulates, and searches for downloads. | All |
| [enterprise.deviceAttributes](https://developer.chrome.com/docs/extensions/reference/api/enterprise/deviceAttributes) | todo: supported?  Reads device attributes.  For extensions that are installed by enterprise policy. | ChromeOS only |
| [enterprise.hardwarePlatform](https://developer.chrome.com/docs/extensions/reference/api/enterprise/hardwarePlatform) | Gets the manufacturer and model of the hardware platform where the browser runs.  For extensions that are installed by enterprise policy. | All |
| [enterprise.networkingAttributes](https://developer.chrome.com/docs/extensions/reference/api/enterprise/networkingAttributes) | todo: supported?  Reads information about your current network.  For extensions that are installed by enterprise policy. | ChromeOS only |
| [enterprise.platformKeys](https://developer.chrome.com/docs/extensions/reference/api/enterprise/platformKeys) | todo: supported?  Generates keys and installs certificates for them.  The certificates will be managed by the platform and can be used for TLS authentication, network access or by other extension through the [platformKeys](https://developer.chrome.com/docs/extensions/reference/api/platformKeys) API. | ChromeOS only |
| [events](https://developer.chrome.com/docs/extensions/reference/api/events) | Common types used by APIs that raise events to notify you when an interesting event occurs. | All |
| [extension](https://developer.chrome.com/docs/extensions/reference/api/extension) | Utilities that can be used by any extension page.  Includes support for exchanging messages between an extension and its content scripts, or between extensions. | All |
| [extensionTypes](https://developer.chrome.com/docs/extensions/reference/api/extensionTypes) | Type declarations for Microsoft Edge extensions. | All |
| [fileBrowserHandler](https://developer.chrome.com/docs/extensions/reference/api/fileBrowserHandler) | todo: supported?  Extends the Chrome OS file browser. For example, you can use this API to enable users to upload files to your website. | ChromeOS only.  Foreground only. |
| [fileSystemProvider](https://developer.chrome.com/docs/extensions/reference/api/fileSystemProvider) | todo: supported?  Creates file systems that can be accessed from the file manager on the OS. | ChromeOS only |
| [fontSettings](https://developer.chrome.com/docs/extensions/reference/api/fontSettings) | Manages font settings in Microsoft Edge. | All |
| [history](https://developer.chrome.com/docs/extensions/reference/api/history) | Interacts with the browser's record of visited pages. You can add, remove, or query for URLs in the browser's history. To override the history page with your own version, navigate to Override Pages. | All |
| [i18n](https://developer.chrome.com/docs/extensions/reference/api/i18n) | Implements internationalization across your whole app or extension. | All |
| [identity](https://developer.chrome.com/docs/extensions/reference/api/identity) | todo: supported?  Gets OAuth2 access tokens.  Not supported: [identity.getAccounts](https://developer.chrome.com/docs/extensions/reference/api/identity#method-getAccounts), [identity.getAuthToken](https://developer.chrome.com/docs/extensions/reference/api/identity#method-getAuthToken) - As an alternate, you can use `launchWebAuthFlow` to fetch an OAuth2 token to authenticate users. | All |
| [idle](https://developer.chrome.com/docs/extensions/reference/api/idle) | Detects when the machine's idle state changes. | All |
| [input.ime](https://developer.chrome.com/docs/extensions/reference/api/input/ime) | todo: supported?  Implements a custom IME for the OS, allowing an extension to handle keystrokes, set the composition, and manage the candidate window. | All |
| [loginState](https://developer.chrome.com/docs/extensions/reference/api/loginState) | todo: supported?  Reads and monitors the login state. | ChromeOS only |
| [management](https://developer.chrome.com/docs/extensions/reference/api/management) | Manages the list of installed or running extensions.  Can override the built-in New Tab page. | All |
| [notifications](https://developer.chrome.com/docs/extensions/reference/api/notifications) | Creates rich notifications using templates and display them in the system tray. | All |
| [offscreen](https://developer.chrome.com/docs/extensions/reference/api/offscreen) | todo: supported?  Creates and manages offscreen documents. | MV3+ |
| [omnibox](https://developer.chrome.com/docs/extensions/reference/api/omnibox) | Registers keywords in the Microsoft Edge address bar, also known as the omnibox. | All |
| [pageAction](https://developer.chrome.com/docs/extensions/mv2/reference/pageAction) | Adds icons to the Microsoft Edge toolbar, to the right of the address bar. Page actions are actions that can be taken on the current page, and aren't applicable to all pages. Page actions appear grayed out when inactive. | MV2 only |
| [pageCapture](https://developer.chrome.com/docs/extensions/reference/api/pageCapture) | Saves tabs as MHTML files. | All |
| [permissions](https://developer.chrome.com/docs/extensions/reference/api/permissions) | Retrieves declared, optional permissions at runtime, instead of at install time. You can use this API to display needed and approved permissions to your users. | All |
| [platformKeys](https://developer.chrome.com/docs/extensions/reference/api/platformKeys) | todo: supported?  Accesses client certificates that are managed by the platform.  If the user or policy grants the permission, an extension can use such a certficate in its custom authentication protocol.  For example, this allows using platform-managed certificates in third-party VPNs (see [vpnProvider](https://developer.chrome.com/docs/extensions/reference/api/vpnProvider)). | ChromeOS only |
| [power](https://developer.chrome.com/docs/extensions/reference/api/power) | Overrides the system's power management features. | All |
| [printerProvider](https://developer.chrome.com/docs/extensions/reference/api/printerProvider) | Uses events to query printers, their capabilities, and to submit print jobs. | All |
| [printing](https://developer.chrome.com/docs/extensions/reference/api/printing) | todo: supported?  Sends print jobs to printers installed on Chromebook. | All.  ChromeOS only. |
| [printingMetrics](https://developer.chrome.com/docs/extensions/reference/api/printingMetrics) | todo: supported?  Fetches data about printing usage. | All.  ChromeOS only. |
| [privacy](https://developer.chrome.com/docs/extensions/reference/api/privacy) | Controls features in Microsoft Edge that affects a user's privacy. This API depends on the `EdgeSetting` prototype of `types` to get and set the configuration of Microsoft Edge. | All |
| [processes](https://developer.chrome.com/docs/extensions/reference/api/processes) | todo: supported?  Interacts with the browser's processes. | All.  Dev channel. |
| [proxy](https://developer.chrome.com/docs/extensions/reference/api/proxy) | Manages proxy settings for Microsoft Edge. This API depends on the `EdgeSetting` prototype of the `types` API to get and set the proxy configuration of Microsoft Edge. | All |
| [runtime](https://developer.chrome.com/docs/extensions/reference/api/runtime) | Retrieves the background page, return details about the manifest, and listen for and respond to events in the app or extension lifecycle. You can also convert the relative path of URLs to fully qualified URLs. | All |
| [scripting](https://developer.chrome.com/docs/extensions/reference/api/scripting) | todo: supported?  Executes scripts in different contexts. | MV3+ |
| [search](https://developer.chrome.com/docs/extensions/reference/api/search) | todo: supported?  Searches by using the default provider. | All |
| [sessions](https://developer.chrome.com/docs/extensions/reference/api/sessions) | Queries and restores tabs and windows from a browsing session. | All |
| [sidePanel](https://developer.chrome.com/docs/extensions/reference/api/sidePanel) | Hosts custom content in the browser's sidebar alongside the main content of a webpage.  See [Extensions in the Microsoft Edge sidebar](../developer-guide/sidebar.md). | MV3+ |
| [storage](https://developer.chrome.com/docs/extensions/reference/api/storage) | Stores, retrieves, and tracks changes to user data. | All |
| [system.cpu](https://developer.chrome.com/docs/extensions/reference/api/system/cpu) | todo: supported?  Queries CPU metadata. | All |
| [system.display](https://developer.chrome.com/docs/extensions/reference/api/system/display) | todo: supported?  Queries display metadata. | All |
| [system.memory](https://developer.chrome.com/docs/extensions/reference/api/system/memory) | Reports the available memory capacity and total physical memory capacity. | All |
| [system.storage](https://developer.chrome.com/docs/extensions/reference/api/system/storage) | Queries information about storage devices. You can also receive notifications when storage devices are attached or detached. | All |
| [tabCapture](https://developer.chrome.com/docs/extensions/reference/api/tabCapture) | Interacts with tab media streams. | All |
| [tabGroups](https://developer.chrome.com/docs/extensions/reference/api/tabGroups) | todo: supported?  Interacts with the browser's tab grouping system. MNodifies and rearranges tab groups in the browser.  To group and ungroup tabs, or to query what tabs are in groups, use the [tabs](https://developer.chrome.com/docs/extensions/reference/api/tabs) API instead. | MV3+ |
| [tabs](https://developer.chrome.com/docs/extensions/reference/api/tabs) | Interacts with the browser's tab system to create, modify, and rearrange tabs. | All |
| [topSites](https://developer.chrome.com/docs/extensions/reference/api/topSites) | Accesses the top sites, also called the _most visited sites_, that are displayed on the new tab page. These sites don't include shortcuts that are customized by the user. | All |
| [tts](https://developer.chrome.com/docs/extensions/reference/api/tts) | Plays synthesized text-to-speech (TTS). | All |
| [ttsEngine](https://developer.chrome.com/docs/extensions/reference/api/ttsEngine) | Implements a text-to-speech (TTS) engine using an extension.  Extensions that register to use this API receive events that contain utterances to be spoken and other parameters.  Extensions can then use any available web technology to synthesize and output speech, and send events back to the calling function to report the status. | All |
| [types](https://developer.chrome.com/docs/extensions/reference/api/types) | Type declarations for Microsoft Edge. | All |
| [userScripts](https://developer.chrome.com/docs/extensions/reference/api/userScripts) | todo: supported?  Executes user scripts in the User Scripts context. | MV3+ |
| [vpnProvider](https://developer.chrome.com/docs/extensions/reference/api/vpnProvider) | todo: supported?  Implements a VPN client. | All.  ChromeOS only. |
| [wallpaper](https://developer.chrome.com/docs/extensions/reference/api/wallpaper) | todo: supported?  Changes the OS wallpaper. | All.  ChromeOS only. |
| [webAuthenticationProxy](https://developer.chrome.com/docs/extensions/reference/api/webAuthenticationProxy) | todo: supported?  Lets remote desktop software that's running on a remote host intercept Web Authentication API (WebAuthn) requests in order to handle them on a local client. | MV3+ |
| [webNavigation](https://developer.chrome.com/docs/extensions/reference/api/webNavigation) | Receives notifications about the status of navigation requests. | All |
| [webRequest](https://developer.chrome.com/docs/extensions/reference/api/webRequest) | Observes and analyzes traffic.  Intercepts, blocks, or modifies requests. | All |
| [windows](https://developer.chrome.com/docs/extensions/reference/api/windows) | Interacts with browser windows to create, modify, and rearrange windows in the browser. | All |


<!-- ====================================================================== -->
## Unsupported extension APIs

Microsoft Edge doesn't support the following Extension APIs:

* [gcm](https://developer.chrome.com/docs/extensions/reference/api/gcm)
* [identity.getAccounts](https://developer.chrome.com/docs/extensions/reference/api/identity#method-getAccounts)
* [identity.getAuthToken](https://developer.chrome.com/docs/extensions/reference/api/identity#method-getAuthToken) - As an alternate, you can use `launchWebAuthFlow` to fetch an OAuth2 token to authenticate users.
* [instanceID](https://developer.chrome.com/docs/extensions/reference/api/instanceID)
* [readingList](https://developer.chrome.com/docs/extensions/reference/api/readingList)<!-- Pending.  MV3+ -->


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
* [Chrome Extensions API reference for Manifest V2](https://developer.chrome.com/docs/extensions/mv2/reference/)
* [Chrome Extensions API reference for Manifest V3](https://developer.chrome.com/docs/extensions/reference/api/)
