---
description: Feature differences between Microsoft Edge and WebView2
title: Feature differences between Microsoft Edge and WebView2
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 03/30/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, WebView2, webview, wpf apps, wpf, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
no-loc: ["Autofill for Addresses", "Autofill for Passwords", Autofill for Payments", Browser Extensions", "Browser Task Manager", "Collections", "Continue-where-I-left-off prompt", "Downloads", "Edge Shopping", "Family Safety", "Favorites", "Hotkeys", "IE Mode" ,"Immersive Reader", "Intrusive Ads", "Read Aloud", "Smart Screen", "Translate", "Tracking Prevention", "Profile and Identity", "Web Payment API", "Windows Defender Application Guard","edge:// URLs"]  
---
# Browser feature differences between Microsoft Edge and WebView2  

WebView2 is based on the new Microsoft Edge browser.  You to have the opportunity to extend features from the browser to WebView2-based apps, which is useful.  However, WebView2 isn't limited to browser-like apps.  Many scenarios include the features of the browser that don't make sense or are unnecessary.    

The purpose of this article is to provide the following information.  

*   The current approach that the WebView2 team uses for browser features.  
*   The status of features and the reasons behind the state.  
*   The ability for features to be turned on or off.  
    
## Guiding principles  

Browser features within the context of WebView2 should adhere to the following guidelines for most WebView2 features.  

*   Most of the WebView2 features work the same as Microsoft Edge features.  The following exceptions define why a feature is turned off.  
    *   It doesn't make sense within the context of WebView2.  
    *   It has an extended service cost.  
*   The WebView2 features shouldn't include any Microsoft Edge branding.  
    
## Features  

The following list displays the WebView2 features that differ from the new Microsoft Edge browser.  

Each column  

*   **Feature**  Specifies the name of the feature.  
*   **Default**  Indicates that the feature is part of the default experience on a new WebView2 instance.  
*   **Configurable**  Indicates that you able to turn on or off the feature using the WebView2 API surface or command-line switch.  
*   **Details**  Specifies any additional information relevant to the feature.  
    
| Feature | Default state | Configurable | Details |  
|:--- |:--- |:--- | :--- |  
| Autofill for Addresses | On | Yes | This feature is turned on by default, you may turn it on or off using WebView2 Autofill API.  |  
| Autofill for Passwords | On | Yes | This feature is turned on by default, you may turn it on or off using WebView2 Autofill API.  |  
| Autofill for Payments | Off | No | This feature is turned off.  |  
| Browser Extensions | Off | No | This feature is turned off.  |  
| Browser Task Manager | Off | No | This feature is turned off.  |  
| Collections | Off | No | This feature is turned off.  |  
| Continue-where-I-left-off prompt | Off | No | This feature is turned off.  |  
| Downloads | On | Yes | WebView2 provides an API that allows you to customize the download UI to manipulate downloads, such as block, redirect, save, pause, and so on.  <!--For more information, navigate to [download API][Webview2ReferenceDownloadApi].--> |  
| Edge Shopping | Off | No | This feature is turned off.  |  
| Family Safety | Off | No | This feature is turned off.  |  
| Favorites | Off | No | This feature is turned off.  |  
| Hotkeys | Review Details | Review Details | The shortcuts that are turned off by default either don't make sense for WebView2 or cause problems.  You may not turn on or off.  Instead, search for a key combination in `AcceleratorKeyPressed` event and create a custom response if needed.  For more information, navigate to [Additional shortcuts information](#additional-shortcuts-information). |  
| IE Mode | Off | No | This feature is turned off.  |  
| Immersive Reader | Off | No | This feature is dependent on the browser UI for control and triggering.  This feature is turned off.  |  
| Intrusive Ads | Off | No | This feature is turned off.  |  
| Read Aloud | Off | No | This feature is turned off.  |  
| Smart Screen | On* | No | The UI for this feature is removed, however the underlying functionality persists.  Additionally, you may turn off Smart Screen using command-line switch.  |  
| Translate | Off | No | This feature is turned off.  |  
| Tracking Prevention | On* | No | *The UI for this feature is removed, however the underlying functionality persists.  Tracking prevention is always set to balanced.|  
| Profile and Identity | Off | No | The feature is turned off that syncs your favorites, cookies, and so on, between machines.  |  
| Web Payment API | Off | No | This feature is turned off.  | 
| Windows Defender Application Guard | Off | No | This feature is turned off.  |  
| edge:// URLs | Review Details | No | Settings for the browser are displayed on webpages that use internal URLs.  Most of the webpages have Microsoft Edge branding or don't make sense within the context of WebView2.  For more details about the internal URLs that are turned off, navigate to [Blocked internal URLs](#blocked-internal-urls).  |  

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

### Additional shortcuts information  

Key bindings are subject to change when the underlying browser updates.  An accelerator key that is turned off by default may turn on if the feature is supported in WebView2.  However, it's guaranteed that if you set `AreBrowserAcceleratorKeysEnabled` to `FALSE`, all keys that access browser-like features are turned off, and all basic text-editing and movement shortcuts remain turned on.  

The following shortcuts are always turned off in WebView2.

An asterisk \(`*`\) character indicates the shortcut is technically not turned off, but the feature it accesses is turned off or doesn't apply to WebView.  

| Action | Windows |  
|:--- |:--- |  
| Add to Favorites | `Ctrl`+`D` |  
| Add All Tabs to Favorites | `Ctrl`+`Shift`+`D` |  
| Focus Location | `Ctrl`+`L, Alt`+`D` |  
| Paste and Go | `Ctrl`+`Shift`+`L` |  
| Open File | `Ctrl`+`O` |  
| Read Aloud `*` | `Ctrl`+`Shift`+`U` |  
| Web Capture `*` | `Ctrl`+`Shift`+`S` |  
| Sidebar `*` | `Ctrl`+`Shift`+`E` |  
| Save Page | `Ctrl`+`S` |  
| Select Last Tab | `Ctrl`+`9` |  
| Select Next Tab | `Ctrl`+`Tab` |  
| Select Previous Tab | `Ctrl`+`Shift`+`Tab` |  
| Select Tab \(1 - 8\) | `Ctrl`+`(1-8)` |  
| Show Favorites Bar `*` | `Ctrl`+`Shift`+`B` |  
| Help | `F1` |  
| Focus Next Pane `*` | `F6` |  
| Focus Previous Pane `*` | `Shift`+`F6` |  
| Caret Browsing `*` | `F7` |  
| Reading View `*` | `F9` |  
| Focus Menu Bar | `F10` |  
| Show Identity Menu `*` | `Ctrl`+`Shift`+`M` |  
| Browser Task Manager `*` | `Shift`+`Escape` |  
| Edge Feedback `*` | `Shift`+`Alt`+`I` |  
| Mute Tab `*` | `Ctrl`+`M` |  
| New Incognito Window | `Ctrl`+`Shift`+`N` |  
| New Tab | `Ctrl`+`T` |  
| New Window | `Ctrl`+`N` |  
| Restore Last Closed Tab | `Ctrl`+`Shift`+`T` |  
| Focus Favorites | `Alt`+`Shift`+`B` |  
| Focus Inactive Popup | `Alt`+`Shift`+`A` |  
| Focus Search | `Ctrl`+`E`, `Ctrl`+`K`, `Search Key` |  
| Duplicate Tab | `Ctrl`+`Shift`+`K` |  
| Focus Toolbar `*` | `Alt`+`Shift`+`T` |  
| Home | `Alt`+`Home`, `Browser Home Key` |  
| Show App Menu | `Alt`+`E, Alt`+`F` |  
| Show Favorites | `Ctrl`+`Shift`+`O` |  
| Show Downloads | `Ctrl`+`J` |  
| Show History | `Ctrl`+`H` |  
| Show Reading Mode Bar `*` | `Shift`+`Alt`+`R` |  
| Show Collections `*` | `Ctrl`+`Shift`+`Y` |  

The following shortcuts are always turned off, except in a pop-up window.  Windows that display when the `NewWindowRequested` event isn't handled.

| Action | Windows |  
|:--- |:--- |  
| Close Tab | `Ctrl`+`W, Ctrl`+`F4` |  
| Close Window | `Ctrl`+`Shift`+`W` |  
| Fullscreen | `F11` |  

If you set `AreBrowserAcceleratorKeysEnabled` to `FALSE`, the following shortcuts are turned off.  

| Action | Windows |  
|:--- |:--- |  
| Stop | `Escape` |  
| Find on Page | `Ctrl`+`F` |  
| Find Next | `Ctrl`+`G` |  
| Find Previous | `Ctrl`+`Shift`+`G` |  
| Print | `Ctrl`+`P` |  
| Refresh | `Ctrl`+`R`, `F5`, `Reload Key` |  
| Refresh Without Cache | `Ctrl`+`Shift`+`R`, `Ctrl`+`F5`, `Shift`+`F5`, `Ctrl`+`Refresh`, `Shift`+`Refresh` |  
| Zoom Out | `Ctrl`+`-` |  
| Zoom In | `Ctrl`+`+` |  
| Reset Zoom | `Ctrl`+`0` |  
| Find Next | `F3` |  
| Find Previous | `Shift`+`F3` |  
| Back | `Alt`+`Left, Browser Back Key` |  
| Forward | `Alt`+`Right`, `Browser Forward Key` |  
| Print | `Ctrl`+`P` |  
| Open / Close DevTools | `Ctrl`+`Shift`+`I` |  
| Open DevTools Console | `Ctrl`+`Shift`+`J` |  
| Open DevTools Inspect | `Ctrl`+`Shift`+`C` |  

> [!Note] 
> To customize any of the keys individually, use the `AcceleratorKeyPressed` event.  

> [!Important]
> Turn on and off some of features with command line switches.  For the full list of options, navigate to [reference document][PeterExperimentsChromiumCommandLineSwitches].  
  
## Getting in touch with the Microsoft Edge WebView2 team  

[!INCLUDE [contact WebView2 team note](../includes/contact-webview-team-note.md)]  

<!-- links -->  

<!--[Webview2ReferenceDownloadApi]: ./download-api.md "download API | Microsoft Docs"  -->  

[DevtoolsShortcutsIndex]: ../../devtools-guide-chromium/shortcuts/index.md "Microsoft Edge DevTools keyboard shortcuts | Microsoft Docs"  

[PeterExperimentsChromiumCommandLineSwitches]: https://peter.sh/experiments/chromium-command-line-switches "List of Chromium Command Line Switches | Peter Beverloo"  
