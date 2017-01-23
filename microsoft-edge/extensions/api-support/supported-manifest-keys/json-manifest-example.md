---
description: Example of a Microsoft Edge JSON manifest.
title: JSON manifest example
author: abbycar
---

# JSON manifest file example

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



