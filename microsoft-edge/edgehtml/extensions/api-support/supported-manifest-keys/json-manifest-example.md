---
ms.assetid: 89ac711a-78ff-4219-8dc3-2bad2099cf49
description: See an example of a Microsoft Edge JSON manifest to see possible field values.
title: Extensions - JSON manifest example
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
ms.custom: seodec18
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JSON manifest file example  

[!INCLUDE [deprecation-note](../../includes/deprecation-note.md)]  

The following snippet provides an example of a Microsoft Edge JSON manifest file.

```json
{
    "name" : "Sample extension manifest",
    "version" : "1.0.0.0",
    "author" : "Microsoft Corporation",
    "browser_action" : 
    {
        "default_icon" : 
        {
            "20" : "icon_20.png",
            "40" : "icon_40.png"
        },
        "default_title" : "Sample extension",
        "default_popup" : "popup.html"
    },
    "content_scripts" : [{
            "js" : ["content_script.js"],
            "matches" : ["*://*/*"]
        }
    ],

    "content_security_policy" : "script-src 'self'; object-src 'self'",
    "default_locale" : "en",
    "description" : "This is a sample extension that illustrates the JSON manifest schema",

    "options_page" : "options.html",
    "permissions" : 
    [
        "*://*/*", "notifications", "cookies", "tabs", "storage", "contextMenus", "background"
    ],
    "background" : 
    {
        "page" : "background.html",
        "persistent" : false
    },
    "icons" : {
        "128" : "icon_128.png",
        "16" : "icon_16.png",
        "48" : "icon_48.png"
    },
    "minimum_edge_version" : "33.14281.1000.0",

    "web_accessible_resources" : ["icon_48.png"]

} 
```
