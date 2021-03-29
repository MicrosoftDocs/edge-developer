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
# Browser feature differences between Microsoft Edge and WebView2  

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
- Details: additional information relevant to the feature..

| Feature | Default | Configurable | Details |  
|:--- |:--- |:--- | :--- |  
| Autofill for Addresses | On | Yes | This feature is turned on by default, you may turn it on or off via WebView2 Autofill API. |  
| Autofill for Passwords | On | Yes | This feature is turned on by default, you may turn it on or off via WebView2 Autofill API. |  
| Autofill for Payments | Off | No | This feature is turned off. |  
| Browser Extensions | Off | No | This feature is turned off. |  
| Browser Task Manager | Off | No | This feature is turned off. |  
| Collections | Off | No | This feature is turned off. |  
| Continue-where-I-left-off prompt | Off | No | This feature is turned off. |  
| Downloads | On | Yes | WebView2 provides an api that allows you to customize the download UI to manipulate downloads, such as block, redirect, save, pause, and so on.  For more information, navigate to <!--[download api][Webview2ReferenceDownloadApi]-->. |  
| Edge Shopping | Off | No | This feature is turned off. |  
| Family Safety | Off | No | This feature is turned off. |  
| Favorites | Off | No | This feature is turned off. |  
| Hotkeys | See Details | See Details | See section [HotKeys Deep Dive](#hotkeys-deep-dive).  The keys that are default disabled are generally keys that either don't make sense for WebView or simply cause problems of some sort or other, and are not toggle-able. Alternatively, ou can listen for a key combination in AcceleratorKeyPressed and create a custom response if needed.|  
| IE Mode | Off | No | This feature is turned off. |  
| Immersive Reader | Off | No | This feature is dependent on the browser UI for control and triggering.  This feature is turned off. |  
| Intrusive Ads | Off | No | This feature is turned off. |  
| Read Aloud | Off | No | This feature is turned off. |  
| Smart Screen | On* | No | The UI for this feature is removed, however the underlying functionality persists. Additionally, Smart Screen can be turned off using command line switch. |  
| Translate | Off | No | This feature is turned off. |  
| Tracking Prevention | On* | No | *The UI for this feature is removed, however the underlying functionality persists. Tracking prevention is always set to balanced.|  
| Profile and Identity | Off | No | The feature that syncs your favorites, cookies, etc. between machines is turned off. |  
| Web Payment API | Off | No | This feature is turned off. | 
| Windows Defender Application Guard | Off | No | This feature is turned off. |  
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

### HotKeys Deep Dive

Keybindings may be subject to change as the underlying browser is updated.  In particular, an accelerator key that is disabled by default may become enabled if its feature becomes supported in WebView2.  However, it is guaranteed that if `AreBrowserAcceleratorKeysEnabled` is set to FALSE, all keys that access browser-like features will be disabled, and all basic text-editing and movement keys will stay enabled.

**The following hotkeys are always disabled in WebView2.**

A * denotes the key is technically not disabled, but the feature it accesses is disabled or doesn't apply to WebView.

*   Ctrl-D: Add to Favorites
*   Ctrl-Shift-D: Add All Tabs to Favorites
*   Ctrl-L, Alt-D: Focus Location
*   Ctrl-Shift-L: Paste and Go
*   Ctrl-O: Open File
*   Ctrl-Shift-U: Read Aloud*
*   Ctrl-Shift-S: Web Capture*
*   Ctrl-Shift-E: Sidebar*
*   Ctrl-S: Save Page
*   Ctrl-9: Select Last Tab
*   Ctrl-Tab: Select Next Tab
*   Ctrl-Shift-Tab: Select Previous Tab
*   Ctrl-(1~8): Select Tab (1~8)
*   Ctrl-Shift-B: Show Favorites Bar*
*   F1: Help
*   F6: Focus Next Pane*
*   Shift-F6: Focus Previous Pane*
*   F7: Caret Browsing*
*   F9: Reading View*
*   F10: Focus Menu Bar
*   Ctrl-Shift-M: Show Identity Menu*
*   Shift-Escape: Browser Task Manager*
*   Shift-Alt-I: Edge Feedback*
*   Ctrl-M: Mute Tab*
*   Ctrl-Shift-N: New Incognito Window
*   Ctrl-T: New Tab
*   Ctrl-N: New Window
*   Ctrl-Shift-T: Restore Last Closed Tab
*   Alt-Shift-B: Focus Favorites
*   Alt-Shift-A: Focus Inactive Popup
*   Ctrl-E, Ctrl-K, Search Key: Focus Search
*   Ctrl-Shift-K: Duplicate Tab
*   Alt-Shift-T: Focus Toolbar*
*   Alt-Home, Browser Home Key: Home
*   Alt-E, Alt-F: Show App Menu
*   Ctrl-Shift-O: Show Favorites
*   Ctrl-J: Show Downloads
*   Ctrl-H: Show History
*   Shift-Alt-R: Show Reading Mode Bar*
*   Ctrl-Shift-Y: Show Collections*

**The following are the keys that are always disabled except in a pop-up window.** (Windows that appear when the NewWindowRequested event is not handled.)

*   Ctrl-W, Ctrl-F4: Close Tab
*   Ctrl-Shift-W: Close Window
*   F11: Fullscreen

**Keys that are disabled if `AreBrowserAcceleratorKeysEnabled` is false:**

*   Escape: Stop
*   Ctrl-F: Find on Page
*   Ctrl-G: Find Next
*   Ctrl-Shift-G: Find Previous
*   Ctrl-P: Print
*   Ctrl-R, F5, Reload Key: Reload
*   Ctrl-Shift-R, Ctrl-F5, Shift-F5, Ctrl-Reload, Shift-Reload: Reload Without Cache
*   Ctrl-- (Ctrl Minus): Zoom Out
*   Ctrl-+: Zoom In
*   Ctrl-0: Reset Zoom
*   F3: Find Next
*   Shift-F3: Find Previous
*   Alt-Left, Browser Back Key: Back
*   Alt-Right, Browser Forward Key: Forward
*   Ctrl-P: Print
*   Ctrl-Shift-I: Open DevTools
*   Ctrl-Shift-J: DevTools Console
*   Ctrl-Shift-C: DevTools Inspect

> [!Note] 
> Any of these keys can be customized individually using the AcceleratorKeyPressed
event.



> [!Important]
> Some features may be able to be enabled/disabled via command line switches. For the full list of options please visit this [reference document](https://peter.sh/experiments/chromium-command-line-switches/).  
  
## Getting in touch with the Microsoft Edge WebView2 team  

[!INCLUDE [contact WebView2 team note](../includes/contact-webview-team-note.md)]  

<!-- links -->  

<!--[Webview2ReferenceDownloadApi]: download-api.md "download api | Microsoft Docs"  -->  
