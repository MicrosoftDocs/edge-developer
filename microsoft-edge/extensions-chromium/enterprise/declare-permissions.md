---
description: Learn how to declare permissions for APIs in your manifest
title: Declare API permissions in extension manifests
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 03/17/2021
ms.topic: conceptual
ms.prod: microsoft-edge
keywords: edge-chromium, extensions development, browser extensions, add-ons, partner center, developer
---
<!-- Copyright A. W. Fuchs

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->
# Declare API permissions in extension manifests

To use most of the `chrome.*` APIs, your extension must declare the `permissions` in the manifest.  You may declare permissions using a permission string from the table that follows, or use a pattern to match similar strings.  Permissions help to constrain your extension if it gets compromised by malware.  Some permissions may display to users before installation of the extension using Permission Warnings.

If an API requires you to declare permissions in the manifest, review the documentation for that API to understand the needed permissions.  For example, the Storage API page describes how to declare the `storage` permission.

The following code snippet outlines how to declare permissions in the manifest file.

```json
"permissions": [
  "tabs",
  "bookmarks",
  "http://www.blogger.com/",
  "http://*.google.com/",
  "unlimitedStorage"
]
```

The following table lists the currently available permission strings to use in your manifest, and the descriptions.

| Permission string | Details |
|:--- |:--- |
| `activeTab` | Requests that the extension is granted permissions according to the `activeTab` specification. |
| `alarms` | Gives your extension access to the `chrome.alarms` API. |
| `background` | Makes Microsoft Edge start up early and shut down late, so that extensions may have a longer life.  When any installed extension has `background` permission, Microsoft Edge runs invisibly as soon as the user logs into the user's computer, and before the user launches Microsoft Edge.  The `background` permission also makes Microsoft Edge continue running, even after its last window is closed, until the user explicitly quits Microsoft Edge.  This permission does not affect extensions that are turned off in the browser.  The `background` permission is normally used on a background page. |
| `bookmarks` | Gives your extension access to the `chrome.bookmarks` API. |
| `browsingData` | Gives your extension access to the `chrome.browsingData` API. |
| `certificateProvider` | Gives your extension access to the `chrome.certificateProvider` API. |
| `clipboardRead` | Required if the extension uses `document.execCommand('paste')`. |
| `clipboardWrite` | Indicates the extension uses `document.execCommand('copy')` or `document.execCommand('cut')`. |
| `contentSettings` | Gives your extension access to the `chrome.contentSettings` API. |
| `contextMenus` | Gives your extension access to the `chrome.contextMenus` API. |
| `cookies` | Gives your extension access to the `chrome.cookies` API. |
| `debugger` | Gives your extension access to the `chrome.debugger` API. |
| `declarativeContent` | Gives your extension access to the `chrome.declarativeContent` API. |
| `declarativeNetRequest` | Gives your extension access to the `chrome.declarativeNetRequest` API. |
| `declarativeNetRequestFeedback` | Grants the extension access to events and methods within the `chrome.declarativeNetRequest` API, which returns information on declarative rules matched. |
| `declarativeWebRequest` | Gives your extension access to the `chrome.declarativeWebRequest` API. |
| `desktopCapture` | Gives your extension access to the `chrome.desktopCapture` API. |
| `documentScan` | Gives your extension access to the `chrome.documentScan` API. |
| `downloads` | Gives your extension access to the `chrome.downloads` API. |
| `enterprise.deviceAttributes` | Gives your extension access to the `chrome.enterprise.deviceAttributes` API. |
| `enterprise.hardwarePlatform` | Gives your extension access to the `chrome.enterprise.hardwarePlatform` API. |
| `enterprise.networkingAttributes` | Gives your extension access to the `chrome.enterprise.networkingAttributes` API. |
| `enterprise.platformKeys` | Gives your extension access to the `chrome.enterprise.platformKeys` API. |
| `experimental` | Required if the extension uses any `chrome.experimental.*` API. |
| `fileBrowserHandler` | Gives your extension access to the `chrome.fileBrowserHandler` API. |
| `fileSystemProvider` | Gives your extension access to the `chrome.fileSystemProvider` API. |
| `fontSettings` | Gives your extension access to the `chrome.fontSettings` API. |
| `geolocation` | Allows the extension to use the geolocation API without prompting the user for permission. |
| `history` | Gives your extension access to the `chrome.history` API. |
| `identity` | Gives your extension access to the `chrome.identity` API. |
| `idle` | Gives your extension access to the `chrome.idle` API. |
| `loginState` | Gives your extension access to the `chrome.loginState` API. |
| `management` | Gives your extension access to the `chrome.management` API. |
| `nativeMessaging` | Gives your extension access to the native messaging API. |
| `notifications` | Gives your extension access to the `chrome.notifications` API. |
| `pageCapture` | Gives your extension access to the `chrome.pageCapture` API. |
| `platformKeys` | Gives your extension access to the `chrome.platformKeys` API. |
| `power` | Gives your extension access to the `chrome.power` API. |
| `printerProvider` | Gives your extension access to the `chrome.printerProvider` API. |
| `printing` | Gives your extension access to the `chrome.printing` API. |
| `printingMetrics` | Gives your extension access to the `chrome.printingMetrics` API. |
| `privacy` | Gives your extension access to the `chrome.privacy` API. |
| `processes` | Gives your extension access to the `chrome.processes` API. |
| `proxy` | Gives your extension access to the `chrome.proxy` API. |
| `scripting` | Gives your extension access to the `chrome.scripting` API. |
| `search` | Gives your extension access to the `chrome.search` API. |
| `sessions` | Gives your extension access to the `chrome.sessions` API. |
| `signedInDevices` | Gives your extension access to the `chrome.signedInDevices` API. |
| `storage` | Gives your extension access to the `chrome.storage` API. |
| `system.cpu` | Gives your extension access to the `chrome.system.cpu` API. |
| `system.display` | Gives your extension access to the `chrome.system.display` API. |
| `system.memory` | Gives your extension access to the `chrome.system.memory` API. |
| `system.storage` | Gives your extension access to the `chrome.system.storage` API. |
| `tabCapture` | Gives your extension access to the `chrome.tabCapture` API. |
| `tabGroups` | Gives your extension access to the `chrome.tabGroups` API. |
| `tabs` | Gives your extension access to privileged fields of the `Tab` objects that may be used by several APIs including `chrome.tabs` and `chrome.windows`.  In many circumstances, your extension does not need to declare the `tabs` permission to make use of these APIs. |
| `topSites` | Gives your extension access to the `chrome.topSites` API. |
| `tts` | Gives your extension access to the `chrome.tts` API. |
| `ttsEngine` | Gives your extension access to the `chrome.ttsEngine` API. |
| `unlimitedStorage` | Provides an unlimited quota for storing client-side data, such as databases and local storage files.  Without this permission, the extension is limited to 5 MB of local storage. |
| `vpnProvider` | Gives your extension access to the `chrome.vpnProvider` API. |
| `wallpaper` | Gives your extension access to the `chrome.wallpaper` API. |
| `webNavigation` | Gives your extension access to the `chrome.webNavigation` API. |
| `webRequest` | Gives your extension access to the `chrome.webRequest` API. |
| `webRequestBlocking` | Required if the extension uses the `chrome.webRequest` API to block requests. |



> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/extensions/mv3/declare_permissions/).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
