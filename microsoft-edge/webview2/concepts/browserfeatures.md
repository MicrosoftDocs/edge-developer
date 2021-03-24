---
description: Feature differences between Microsoft Edge and WebView2
title: Feature differences between Microsoft Edge and WebView2
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 03/08/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, WebView2, webview, wpf apps, wpf, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---
# Feature differences between Microsoft Edge and WebView2  

WebView2 is based off of the Microsoft Edge browser. This enables developers to have the opportunity to extend features from the browser to WebView2-based apps, which can be very useful. However, WebView2 is not limited to browser-like apps. There are many scenarios in which the browser's features don't make sense or are unneccesary.    

The purpose of this article is to provide the following information.  

*   The current approach that the WebView2 team uses for browser features.  
*   The status of features and the reasoning behind the state.  
*   The ability for features to be turned on \(or turned off\).  

## Guiding Principles  

Browser features within the context of WebView2 should adheres to the following guidelines for most WebView2 features.  

*   Most of the WebView2 features work the same as Microsoft Edge features.  The following exceptions define why a feature is turned off.  
    *   It doesn't make sense within the context of WebView2.  
    *   It has an extended service cost.  
*   The WebView2 features shouldn't include any Microsoft Edge branding.  
    
## Features  

The following list displays the WebView2 features that differ from the new Microsoft Edge browser.  

About this table:
- Feature: The name of the feature.
- Default: The default experience on a new WebView2 instance
- Configurable: If the feature can be toggled on/off via our API surface or command line switch.
- Details: 

| Feature | Default | Configurable | Details |  
|:--- |:--- |:--- | :--- | 
| Autofill for Addresses | Enabled | Yes | This feature is turned on by default, you may turn it on or off via WebView2 Autofill API. |  
| Autofill for Passwords | Enabled | Yes | This feature is turned on by default, you may turn it on or off via WebView2 Autofill API. |  
| Autofill for Payments | Disabled | No | This feature is turned off. | 
| Browser Extensions | Disabled | No | This feature is turned off. |   
| Browser Task Manager | Disabled | No | This feature is turned off. |  
| Continue-where-I-left-off prompt | Disabled | No | This feature is turned off. |  
| Downloads | Enabled | Yes | WebView2 provides an api that allows you to customize the download UI to manipulate downloads, such as block, redirect, save, pause, and so on.  For more information, navigate to <!--[download api][Webview2ReferenceDownloadApi]-->. |  
| Family Safety | Disabled | No | This feature is turned off. |  
| Hotkeys | See Details | See Details | The following shortcuts are turned off by default:  `Ctrl`+`F` and `Ctrl`+`S`. The keys that are default disabled are generally keys that either don't make sense for WebView or simply cause problems of some sort or other, and are not toggle-able. Alternatively, ou can listen for a key combination in AcceleratorKeyPressed and create a custom response if needed.|  
| IE Mode | Disabled | No | This feature is turned off. |  
| Immersive Reader | Disabled | No | This feature is dependent on the browser UI for control and triggering.  This feature is turned off. |  
| Intrusive Ads | Enabled* | No | The UI for this feature is removed, however the underlying functionality persists. |  
| Read Aloud | Disabled | No | This feature is turned off. |  
| Smart Screen | Enabled* | No | The UI for this feature is removed, however the underlying functionality persists. Additionally, Smart Screen can be turned off using command line switch. |  
| Translate | Disabled | No | This feature is turned off. |  
| Tracking Prevention | Enabled* | No | *The UI for this feature is removed, however the underlying functionality persists. |  
| User Data Sync | Disabled | No | The feature that syncs your favorites, cookies, etc. between machines is disabled. |  
| Web Payment API | Disabled | No | This feature is disabled. | 
| Windows Defender Application Guard | Disabled | No | This feature is disabled. |  
| edge:// URLs | See Details | No | Settings for the browser are displayed on webpages that use internal URLs.  Most of the webpages have Microsoft Edge branding or don't make sense within the context of WebView2.  For more details about the internal URLs that are turned off, navigate to [Blocked internal URLs](#blocked-internal-urls). |  

### Blocked internal URLs  

The following built-in Microsoft Edge and Google Chrome webpages aren't available in WebView2.  

*   `chrome-search://local-ntp/local-ntp.html`  
*   `edge://application-guard-internals`  
*   `edge://apps`  
*   `edge://compat`  
*   `edge://extensions`  
*   `edge://favorites`  
*   `edge://help`  
*   `edge://management`  
*   `edge://network-error`  
*   `edge://new-tab-page`  
*   `edge://newtab`  
*   `edge://omnibox`  
*   `edge://settings`  
*   `edge://supervised-user-internals`  
*   `edge://version`  

> [!Important]
> Some features may be able to be enabled/disabled via command line switches. For the full list of options please visit this [reference document](https://peter.sh/experiments/chromium-command-line-switches/).  
  
## Getting in touch with the Microsoft Edge WebView2 team  

[!INCLUDE [contact WebView2 team note](../includes/contact-webview-team-note.md)]  

<!-- links -->  

<!--[Webview2ReferenceDownloadApi]: download-api.md "download api | Microsoft Docs"  -->  
