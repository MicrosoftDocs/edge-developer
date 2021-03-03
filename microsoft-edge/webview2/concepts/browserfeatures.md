---
description: Feature differences between Microsoft Edge and WebView2
title: Feature differences between Microsoft Edge and WebView2
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 2/24/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, wpf apps, wpf, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---
# Feature differences between Microsoft Edge and WebView2

WebView2 is based on the Edge Browser. Because of this WebView2 developers have the oppurtunity to extend some features from the browser to WebView2-based applications. However, because WebView2 has a variety of use cases,and is not limited to only being a browser, there are some edge cases to how browser features should work within the context of WebView2.

The purpose of this doc is to:
1. Describe WebView2 team's current approach to browser features.
2. Describe what features are default turned off/turned off and the reasoning behind why.
3. Describe what features are available to be turned off/turned off.

## Guiding Principles

When thinking about browser features within a WebView2 context, there are some general guidelines we try to adhere to. The following are the rule for the majority of features.

1. Features should work in WebView2 as they do in browser, UNLESS:
    * The feature does not make sense within the context of webview2.
    * The feature has an extended service cost.  

2. Features in webview2 should not include any edge branding.

## Features 

The following are the list of features in WebView2 that differ from the Edge browser. 

### Edge:// URLs

Edge URLS allow browser-users to access settings for the browser. Most of these pages have edge branding, and some don't make sense within the context of webview2 (ex. favorites).

Following is the list of edge:// urls that webview2 disables. 

	• edge://application-guard-internals/ 
	• edge://apps/ 
	• Edge://compat 
	• Edge://extensions 
	• edge://favorites/ 
	• Edge://help 
	• edge://management/ 
	• edge://network-error/ 
	• edge://new-tab-page/ 
	• chrome-search://local-ntp/local-ntp.html ( edge://newtab) 
	• edge://omnibox/ 
	• edge://settings/ 
	• edge://supervised-user-internals/ 
    • edge://version/ 

### Downloads

Downloads has been redesigned to give developers more customizability of download UI & more control of intercepting & querying a download. 

Our download api allows developers to block, redirect, save, pause, etc. downloads. For more information visit the download api reference doc. 

### Autofill

There are 3 parts to autofill - Addresses, Passwords, and Payments. We disable Payments autofill for security reasons. 

Addresses autofill and passwords autofill are enabled, and able to be turned off/on.

### Hotkeys

* Ctrl+S: Disabled.
* Ctrl+F: Disabled.

### Immersive Reader

Immersive reader was disabled in webview2 because the feature was dependent on the browser UI for control and triggering. 

### Family Safety

Disabled, doesn't make sense in terms of webview2 apps.

### Browser Task Manager

Disabled, doesn't make sense in terms of webview2 apps.

### Translate

Disabled due to cost. 

### Continue-where-I-left-off prompt

Disabled, doesn't make sense in terms of webview2 apps. 

### Smart Screen

Removed UI, but still enabled.

### Tracking Prevention

Removed UI, but still enabled.

### Intrusive Ads

Removed UI, but still enabled.

