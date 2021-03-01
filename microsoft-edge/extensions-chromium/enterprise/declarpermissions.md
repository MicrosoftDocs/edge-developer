---
description: Extensions
title: Delcare permissions
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 03/01/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: edge-chromium, extensions development, browser extensions, add-ons, partner center, developer
---


# Declare permissions

To use most Edge.* APIs, your extension must declare its intent in the "permissions" field of the manifest. Each permission can be either one of a list of known strings (such as "geolocation") or a match pattern that gives access to one or more hosts. Permissions help to limit damage if your extension is compromised by malware. Some permissions are also displayed to users before installation, as detailed in Permission Warnings.

If an API requires you to declare a permission in the manifest, then its documentation tells you how to do so. For example, the Storage page shows you how to declare the "storage" permission.

Here's an example of the permissions part of a manifest file:

"permissions": [
  "tabs",
  "bookmarks",
  "http://www.blogger.com/",
  "http://*.google.com/",
  "unlimitedStorage"
]

The following table lists the currently available permissions:

| Permission                            | Description                                            
|---------------------------------------|----------------------------------------------------------|
| "activeTab" | Requests that the extension be granted permissions according to the activeTab specification. |
| "alarms" | Gives your extension access to the chrome.alarms API. |
| "background" | Makes Edge start up early and shut down late, so that extensions can have a longer life. When any installed extension has "background" permission, Edge runs (invisibly) as soon as the user logs into their computer—before the user launches Edge. The "background" permission also makes Edge continue running (even after its last window is closed) until the user explicitly quits Edge. Disabled extensions are treated as if they aren't installed. You typically use the "background" permission with a background page, or a background window. |
| "bookmarks" | Gives your extension access to the chrome.bookmarks API. |
| "browsingData" | Gives your extension access to the chrome.browsingData API. |
| "certificateProvider" | Gives your extension access to the chrome.certificateProvider API. |
| "clipboardRead" | Required if the extension uses document.execCommand('paste'). |
| "clipboardWrite" | Indicates the extension uses document.execCommand('copy') or document.execCommand('cut'). |
| "contentSettings" | Gives your extension access to the chrome.contentSettings API. |
| "contextMenus" | Gives your extension access to the chrome.contextMenus API. |
| "cookies" | Gives your extension access to the chrome.cookies API. |
| "debugger" | Gives your extension access to the chrome.debugger API. |
| "declarativeContent" | Gives your extension access to the chrome.declarativeContent API. |
| "declarativeNetRequest" | Gives your extension access to the chrome.declarativeNetRequest API. |
| "declarativeNetRequestFeedback" | Grants the extension access to events and methods within the chrome.declarativeNetRequest API which return information on declarative rules matched. |
| "declarativeWebRequest" | Gives your extension access to the chrome.declarativeWebRequest API. |
| "desktopCapture" | Gives your extension access to the chrome.desktopCapture API. |
| "documentScan" | Gives your extension access to the chrome.documentScan API. |
| "downloads" | Gives your extension access to the chrome.downloads API. |
| "enterprise.deviceAttributes" | Gives your extension access to the chrome.enterprise.deviceAttributes API. |
| "enterprise.hardwarePlatform" | Gives your extension access to the chrome.enterprise.hardwarePlatform API. |
| "enterprise.networkingAttributes" | Gives your extension access to the chrome.enterprise.networkingAttributes API. |
| "enterprise.platformKeys" | Gives your extension access to the chrome.enterprise.platformKeys API. |
| "experimental" | Required if the extension uses any chrome.experimental.* APIs. |
| "fileBrowserHandler" | Gives your extension access to the chrome.fileBrowserHandler API. |
| "fileSystemProvider" | Gives your extension access to the chrome.fileSystemProvider API. |
| "fontSettings" | Gives your extension access to the chrome.fontSettings API. |
| "geolocation" | Allows the extension to use the geolocation API without prompting the user for permission. |
| "history" | Gives your extension access to the chrome.history API. |
| "identity" | Gives your extension access to the chrome.identity API. |
| "idle" | Gives your extension access to the chrome.idle API. |
| "loginState" | Gives your extension access to the chrome.loginState API. |
| "management" | Gives your extension access to the chrome.management API. |
| "nativeMessaging" | Gives your extension access to the native messaging API. |
| "notifications" | Gives your extension access to the chrome.notifications API. |
| "pageCapture" | Gives your extension access to the chrome.pageCapture API. |
| "platformKeys" | Gives your extension access to the chrome.platformKeys API. |
| "power" | Gives your extension access to the chrome.power API. |
| "printerProvider" | Gives your extension access to the chrome.printerProvider API. |
| "printing" | Gives your extension access to the chrome.printing API. |
| "printingMetrics" | Gives your extension access to the chrome.printingMetrics API. |
| "privacy" | Gives your extension access to the chrome.privacy API. |
| "processes" | Gives your extension access to the chrome.processes API. |
| "proxy" | Gives your extension access to the chrome.proxy API. |
| "scripting" | Gives your extension access to the chrome.scripting API. |
| "search" | Gives your extension access to the chrome.search API. |
| "sessions" | Gives your extension access to the chrome.sessions API. |
| "signedInDevices" | Gives your extension access to the chrome.signedInDevices API. |
| "storage" | Gives your extension access to the chrome.storage API. |
| "system.cpu" | Gives your extension access to the chrome.system.cpu API. |
| "system.display" | Gives your extension access to the chrome.system.display API. |
| "system.memory" | Gives your extension access to the chrome.system.memory API. |
| "system.storage" | Gives your extension access to the chrome.system.storage API. |
| "tabCapture" | Gives your extension access to the chrome.tabCapture API. |
| "tabGroups" | Gives your extension access to the chrome.tabGroups API. |
| "tabs" | Gives your extension access to privileged fields of the Tab objects used by several APIs including chrome.tabs and chrome.windows. In many circumstances your extension will not need to declare the "tabs" permission to make use of these APIs. |
| "topSites" | Gives your extension access to the chrome.topSites API. |
| "tts" | Gives your extension access to the chrome.tts API. |
| "ttsEngine" | Gives your extension access to the chrome.ttsEngine API. |
| "unlimitedStorage" | Provides an unlimited quota for storing client-side data, such as databases and local storage files. Without this permission, the extension is limited to 5 MB of local storage. |
| "vpnProvider" | Gives your extension access to the chrome.vpnProvider API. |
| "wallpaper" | Gives your extension access to the chrome.wallpaper API. |
| "webNavigation" | Gives your extension access to the chrome.webNavigation API. |
| "webRequest" | Gives your extension access to the chrome.webRequest API. |
| "webRequestBlocking" | Required if the extension uses the chrome.webRequest API in a blocking fashion. |





> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developer.chrome.com/extensions/match_patterns/).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  