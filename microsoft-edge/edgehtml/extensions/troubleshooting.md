---
ms.assetid: 8b7f362f-da09-43db-8a42-cfa128c1808c
description: Get the answers to common questions you may have while loading unpacked extensions.
title: Extensions - Troubleshooting
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# Troubleshooting  

[!INCLUDE [deprecation-note](includes/deprecation-note.md)]  

If you are trying to load unpacked extensions and are experiencing issues, the info below may help:

## 1. I see the error "We couldn't load this extension"

This usually means that Microsoft Edge cannot access the extension folder you attempted to load.

Here is a summary of the possible errors you may encounter:

Error message | Details
:--------- | :------------
Manifest parsing error: Missing or malformed manifest file. | Either the file `"manifest.json"` was not found in the specified location or there is something wrong with the file. To resolve the issue, ensure that the specified folder contains the manifest at the top-level, and double-check your commas, quotes and brackets.
Manifest parsing error: `"content_scripts"` must define an array. | The field `"content_scripts"` should be an array. To resolve the issue, double-check your syntax. For example: `"content_scripts": [{"matches": [...],"css": [...],"js": [...] }]`
Manifest parsing error: `"content_scripts"` must define value for `"matches"` property. | The property `"matches"` is required. To resolve the issue, specify the property’s value with an array of strings. For example: `"content_scripts": [ {... "matches": ["http://www.bing.com"] ...} ]`
Manifest parsing error: `"content_scripts"` must reference at least one .css or .js file. | At least one property `"css"` or `"js"` is required. To resolve the issue, specify the property’s value with an array of strings. For example: `"content_scripts": [ { ... "js": ["myScript1.js", "myScript2.js"] ...} ]`
Manifest parsing error: `"<field>"` must define value for "<property>" property. | The property `<property>` for the field `<field>` is required. To resolve the issue, specify a valid value for `<property>`.
Manifest parsing error: `"content_scripts"` references invalid value for "run_at" field. | The property `"run_at"` specifies an unknown value. To resolve the issue, specify one of `"document_start"`, `"document_end"` or `"document_idle"`. For example: `"content_scripts": [ {... "run_at": "document_start" ... } ]`
Manifest parsing error: Missing `"<field>"` field. | The field `<field>` is required. To resolve the issue, define the field with a valid value.
Manifest parsing error: Invalid field `"<field1>"` found in `"<field2>"`. | The field <field1> for the field <field2> specifies an unknown value. To resolve the issue, specify a valid value for <field1>.
Manifest parsing error: Invalid value for "<field>" field. | The field <field> specifies an unknown value. To resolve the issue, specify a valid value.
Manifest parsing error: Extension is not supported by current version of Microsoft Edge. | The property `"minimum_edge_version"` specifies a more recent version of Microsoft Edge than the one you own. You can find the current version by opening the "..." (More) menu and then selecting "Settings" (bottom section "About this app"). To resolve the issue, either update your browser to a newer version or change the value in the manifest. For example: `"minimum_edge_version": "x.xxxx.xxxx.x"`
Manifest parsing error: `"background"` must define value for "page" or "scripts" property. | The property "page" or "scripts" is required for the field "background". To resolve the issue, specify a string for "page" or an array of strings for "scripts". For example: `"background": { ... "scripts": ["background.js"] ... }`
Manifest parsing error: `"background"` must define value for `"persistent"` property. | The property `"persistent"` is required. To resolve the issue, specify a true or false value. For example: `"background": {... "persistent": true ...}`
Manifest parsing error: Only one `"browser_action"` or `"page_action"` can be defined. | An extension cannot define both a page action and a browser action at the same time. To resolve the issue, remove either one of the definitions.
Unspecified error: `<error>` | Generic catch-all error message. `<error>` will be replaced by the specified error.


## 2. I don't see the "Load extension" button
Until extensions are available via the Microsoft Store, this button *should* be visible by default. If you open the "More" (...) menu, select the "Extensions" menu item and don't see the button, follow these steps:

1. In the address bar type **"about:flags"** and press the **"Enter"** key.
2. Under the heading **"Developer settings"** make sure the checkbox next to **"Enable extension developer features"** is selected.

   ![about flags](./media/aboutflags.PNG)  

3. Close and re-open Microsoft Edge and check to see if the **"Load extension"** button is now visible.
