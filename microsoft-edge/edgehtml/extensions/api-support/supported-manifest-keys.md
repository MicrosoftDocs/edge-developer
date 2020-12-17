---
description: Find information on supported manifest keys as well as their known issues/Chrome incompatibilities.
title: Extensions - Supported manifest keys
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# Supported manifest keys  

[!INCLUDE [deprecation-note](../includes/deprecation-note.md)]  

Every extension has a JSON-formatted manifest file, named manifest.json. This file provides important information for the extension ranging from its name to its permissions. Unless specified in a note below, the Microsoft Edge manifest properties follow the same implementation as Chrome.

Here is an example of a [Microsoft Edge JSON manifest file](./supported-manifest-keys/json-manifest-example.md).

## Required keys

The following keys are required:

Key | Known issues | Chrome incompatibilities
:------------ | :------------- | :--------------
[author](https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json/author)  | | 
[name](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name) | | |
[version](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version) | | |

## Recommended keys

The following keys are recommended:

Key | Known issues | Chrome incompatibilities
:------------ | :------------- | :--------------
browser_specific_settings | | Indicates the extension's preferred state in the browser. The browser may or may not choose to respect it in a future release, depending on factors such as the reputation of the extension, or the total number of buttons already in the user's address bar. This can be used to indicate the default position of the `browserAction` icon. </br></br> `"browser_specific_settings": {`</br>&nbsp;&nbsp;&nbsp;&nbsp;`"edge": {`</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"browser_action_next_to_addressbar": true`</br>&nbsp;&nbsp;&nbsp;&nbsp;`}`</br>`}` </br></br> Not supported in Chrome.|
[default_locale](https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json/default_locale)| | |
[description](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description) | | |
[icons](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) | | |
[manifest_version](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version) | | Currently ignored in Microsoft Edge.



## browser_action or page_action keys

You can only include one of the following keys (or none):

Key | Known issues | Chrome incompatibilities
:------------ | :------------- | :--------------
[browser_action](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)  | | Microsoft Edge does not support the following syntax:  `browser_action : {"default_icon" : "icon.png" }`   <br/>Size for icons must be specified. <br/>Preferred sizes: 20px, 25px, 30px, 40px. <br/> Other supported sizes: 19px, 35px, 38px.|
[page_action](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) | | Microsoft Edge does not support the following syntax:  `page_action : {"default_icon" : "icon.png" }`   <br/>Size for icons must be specified. <br/>Preferred sizes: 20px, 25px, 30px, 40px. <br/>Other supported sizes: 19px, 35px, 38px.|

## Optional keys

The following keys are optional:

Key | Known issues | Chrome incompatibilities
:------------ | :------------- | :--------------
[background](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) | | Persistent is a required field for Microsoft Edge.
[content_scripts](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)  | | |
[content_security_policy](https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json/content_security_policy)  | The content security policy of a page blocks websockets in content scripts, generating an undefined exception. | Microsoft Edge extensions currently only support [Default Policy Restrictions](https://developer.mozilla.org/Add-ons/WebExtensions/Content_Security_Policy#Default_content_security_policy): `script-src 'self'; object-src 'self'` |
[incognito](https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json/incognito) | | | 
key  | | |
options_page | | |
[permissions](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)  | | |
short_name  | | |
[web_accessible_resources](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) | | |

### Supported permissions
The following [permissions](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) are supported:


| Permission         | Description                                                                                                                                                                                                                                                                         |
|:-------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| \<all_urls\>       | Allows background and content scripts to interact with all webpages with extra [privileges](https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions).                                                                                  |
| contextMenus       | Gives access to `contextMenus` API. This enables adding items to Microsoft Edge's context menu.                                                                                                                                                                                     |
| cookies            | Gives access to the `cookies` API. This enable querying and modifying cookies as well as being notified when they change.                                                                                                                                                           |
| geolocation        | Allow the extension to use the HTML5 `geolocation` API without prompting the user for permission.                                                                                                                                                                                   |
| idle               | Gives access to the `idle` API. This enables detection of when the machine's idle state changes.                                                                                                                                                                                    |
| storage            | Gives access to the `storage` API. This enables storing, retrieving, and tracking changes to user data.                                                                                                                                                                             |
| tabs               | Gives access to the `tabs` API to interact with the browser's tab system. This enables creating, modifying, and rearranging tabs in the browser, including the URLs associated with each tab.                                                                                       |
| unlimitedStorage   | Allows [storage.local](https://developer.mozilla.org/Add-ons/WebExtensions/API/storage/local) to have unlimited storage (depending on system resources) instead of 5MB. The max storage per key value pair is also increased from 5MB to unlimited (depending on system resources). |
| webNavigation      | Gives access to the `webNavigation` API. This enables receiving notifications about the status of navigation requests.                                                                                                                                                              |
| webRequest         | Gives access to the `webRequest` API. This enables observing and analyzing traffic, as well as intercepting, blocking or modifying request in-flight.                                                                                                                               |
| webRequestBlocking | Required if an extension uses the `webRequest` API in a blocking fashion.                                                                                                                                                                                                           |

'""'
