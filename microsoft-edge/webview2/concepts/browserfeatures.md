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

| Feature | Default | Configurable | Details |  
|:--- |:--- |:--- | :--- | 
| Autofill for Addresses | Enabled | Yes | This feature is turned on by default, you may turn it on or off. |  
| Autofill for Passwords | Enabled | Yes | This feature is turned on by default, you may turn it on or off. |  
| Autofill for Payments | Disabled | No | This feature is turned off. | 
| Browser Extensions | Disabled | No | This feature is turned off. |   
| Browser Task Manager | Disabled | No | This feature is turned off. |  
| Continue-where-I-left-off prompt | Disabled | No | This feature is turned off. |  
| Downloads | Enabled | Yes | This feature allows you to customize the download UI to manipulate downloads, such as block, redirect, save, pause, and so on.  For more information, navigate to <!--[download api][Webview2ReferenceDownloadApi]-->. |  
| Family Safety | Disabled | No | This feature is turned off. |  
| Hotkeys | Disabled | No | The following shortcuts aren't turned off:  `Ctrl`+`F` and `Ctrl`+`S` |  
| IE Mode | Disabled | No | IE Mode is disabled. |  
| Immersive Reader | Disabled | No | This feature is dependent on the browser UI for control and triggering.  This feature is turned off. |  
| Intrusive Ads | Disabled | No | The UI for this feature is removed.  This feature is turned on. |  
| Read Aloud | Disabled | No | The UI for this feature is removed.  This feature is turned on. |  
| Smart Screen | Enabled | No | The UI for this feature is removed.  This feature is turned on. Smart Screen can be turned off using command line switch to turn off related feature. |  
| Translate | Disabled | No | This feature is turned off. |  
| Tracking Prevention | Disabled | No | The UI for this feature is removed.  This feature is turned on. |  
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
    
## Getting in touch with the Microsoft Edge WebView2 team  

[!INCLUDE [contact WebView2 team note](../includes/contact-webview-team-note.md)]  

<!-- links -->  

<!--[Webview2ReferenceDownloadApi]: download-api.md "download api | Microsoft Docs"  -->  
