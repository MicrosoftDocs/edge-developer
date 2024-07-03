---
title: Differences between Microsoft Edge and WebView2
description: Feature differences between Microsoft Edge and WebView2.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
no-loc: ["Autofill for Addresses", "Autofill for Passwords", Autofill for Payments", Browser Extensions", "Browser Task Manager", "Collections", "Continue-where-I-left-off prompt", "Downloads", "Edge Shopping", "Family Safety", "Favorites", "Hotkeys", "IE Mode" ,"Immersive Reader", "Intrusive Ads", "Read Aloud", "Smart Screen", "Translate", "Tracking Prevention", "Profile and Identity", "Web Payment API", "Windows Defender Application Guard","edge:// URLs"]
ms.date: 03/14/2022
---
# Differences between Microsoft Edge and WebView2

WebView2 is based on the Microsoft Edge browser.  You have the opportunity to extend features from the browser to WebView2-based apps, which is useful.  However, since WebView2 isn't limited to browser-like apps, there are some browser features that need to be modified or removed.

This article covers:

*  The modified browser features and supporting information.
*  The ability to turn on or off the feature.
*  Guidance on keyboard shortcuts.


<!-- ====================================================================== -->
## Design guidelines

In the context of WebView2, browser features adhere to the following design guidelines:

*  Most features work the same in WebView2 and Microsoft Edge.  If a feature doesn't make sense in the context of WebView2 or for other reasons, the feature is modified or turned off.

*  WebView2 features don't include Microsoft Edge branding.


<!-- ====================================================================== -->
## Browser features

The following table displays the WebView2 features that differ from the Microsoft Edge browser:

*  **Default state** indicates that the feature is part of the default experience on a new WebView2 instance.

*  **Configurable** indicates that you can turn on or off the feature using WebView2 APIs or command-line switches.

> [!NOTE]
> This article doesn't cover modifying features by using command-line switches.  For more information about turning on and off features by using command-line switches, see [List of Chromium Command Line Switches](https://peter.sh/experiments/chromium-command-line-switches).

| Feature | Default state | Configurable | Details |
| --- | --- | --- | --- |
| Autofill for Addresses | On | Yes | This feature is turned on by default.  You can turn this feature on or off by using the WebView2 Autofill APIs. |
| Autofill for Passwords | Off | Yes | This feature is turned off by default.  You can turn this feature on or off by using the WebView2 Autofill APIs. |
| Autofill for Payments | Off | No | This feature is turned off. |
| Browser Extensions | Off | No | This feature is turned off. |
| Browser Task Manager | Off | No | This feature is turned off. |
| Collections | Off | No | This feature is turned off. |
| Continue-where-I-left-off prompt | Off | No | This feature is turned off. |
| Downloads | On | Yes | WebView2 provides an API that allows you to customize the download UI to manipulate downloads. For example, you can block, redirect, save, pause, and so on.  For more information, see [Download API](/microsoft-edge/webview2/reference/win32/icorewebview2_4?view=webview2-1.0.902-prerelease&preserve-view=true#add_downloadstarting). |
| Edge Shopping | Off | No | This feature is turned off. |
| Family Safety | Off | No | This feature is turned off. |
| Favorites | Off | No | This feature is turned off. |
| IE Mode | Off | No | This feature is turned off. WebView2 doesn't support IE mode and has differences in behavior compared to IE (such as MHT or BIN support). |
| Immersive Reader | Off | No | This feature depends on the browser UI for interaction.  This feature is turned off. |
| Intrusive Ads | Off | No | This feature is turned off. |
| Keyboard Shortcuts | Review Details | Review Details | The keyboard shortcuts that are turned off by default either don't make sense or cause problems in WebView2.  You cannot turn these shortcuts off or on.  Instead, you can listen for a key combination using the `AcceleratorKeyPressed` event and create a custom response if needed.  For more information, see [Additional keyboard shortcuts information](#additional-keyboard-shortcuts-information). |
| PDF Annotations | Off | No | This feature is turned off. The PDF viewing feature is enabled, but drawing, inking, and highlighting in a PDF aren't enabled. For more information, see [Disabling Feature: PDF Annotations Support](https://github.com/MicrosoftEdge/WebView2Announcements/issues/21). |
| Mini menu | Off | No | This feature is turned off. |
| Read Aloud | Off | No | This feature is turned off. |
| Smart Screen | On`*` | No | `*` The UI for this feature has been removed, however the underlying functionality is still available.  Additionally, you can turn off Smart Screen by using a command-line switch. |
| Translate | Off | No | This feature is turned off. |
| Tracking Prevention | On`*` | No | `*` The UI for this feature has been removed, however the underlying functionality is still available.  Tracking prevention is always set to balanced. |
| Visual search on image hover | Off | No | This feature is turned off.
| Profile and Identity | Off | No | The feature that syncs your favorites, cookies, and so on, is turned off. |
| Windows Defender Application Guard | Off | No | This feature is turned off. |
| edge:// URLs | Review Details | No | Settings for the Microsoft Edge browser are on `edge://` URLs.  Because most of these webpages have Microsoft Edge branding or don't make sense within the context of WebView2, some of these URLs are turned off.  For more information, see [Blocked internal URLs](#blocked-internal-urls). |


<!-- ====================================================================== -->
## Web platform features

The following WebView2 platform features are currently unavailable:

| Feature | Details |
|:--- | :--- |
| Push Notifications | This feature isn't implemented in WebView2. |
| Web Payment API | This feature is turned off. |
| Periodic Background Sync | Periodic Background Sync events will never trigger. |

<!-- ====================================================================== -->
## Blocked internal URLs

The following Microsoft Edge and Google Chrome settings webpages aren't available in WebView2:

*  `chrome-search://local-ntp/local-ntp.html`
*  `edge://application-guard-internals`
*  `edge://apps`
*  `edge://compat`
*  `edge://extensions`
*  `edge://favorites`
*  `edge://help`
*  `edge://management`
*  `edge://network-error`
*  `edge://new-tab-page`
*  `edge://newtab`
*  `edge://omnibox`
*  `edge://settings`
*  `edge://supervised-user-internals`
*  `edge://version`

<!-- ====================================================================== -->
## Google Authentication

Google has disabled Google Authentication in embedded webviews, which includes WebView2, due to a security policy they have set.  See [Upcoming security changes to Google's OAuth 2.0 authorization endpoint in embedded webviews](https://developers.googleblog.com/2021/06/upcoming-security-changes-to-googles-oauth-2.0-authorization-endpoint.html).

To stay up-to-date on the latest discussion, in the WebView2Feedback repo, see [Google Auth Flows and WebView2](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1647).
<!-- ====================================================================== -->
## Additional keyboard shortcuts information

Keyboard shortcuts or key bindings are supported in Microsoft Edge and WebView2.


### Preventing shortcuts from changing during update

When Microsoft Edge is updated, the default key bindings might change.  Furthermore, a keyboard shortcut that is turned off by default might instead be turned on, if the feature is now supported in WebView2.

To avoid such changes to your keyboard shortcuts, you can set `AreBrowserAcceleratorKeysEnabled` to `FALSE`, which turns off all keys that access browser features, but keeps all basic text-editing and movement shortcuts turned on.


### Shortcuts that are turned off

The following shortcuts are always turned off in WebView2, or are effectively turned off.  An asterisk (`*`) indicates that the shortcut isn't turned off, but the feature that it accesses is turned off, or the feature doesn't apply to WebView2.

| Action | Shortcut |
|:--- |:--- |
| Add to Favorites | **Ctrl+D** |
| Add All Tabs to Favorites | **Ctrl+Shift+D** |
| Focus Location | **Ctrl+L**, **Alt+D** |
| Paste and Go | **Ctrl+Shift+L** |
| Open File | **Ctrl+O** |
| Read Aloud `*` | **Ctrl+Shift+U** |
| Web Capture `*` | **Ctrl+Shift+S** |
| Sidebar | **Ctrl+Shift+E** |
| Save Page | **Ctrl+S** |
| Select Last Tab | **Ctrl+9** |
| Select Next Tab | **Ctrl+Tab** |
| Select Previous Tab | **Ctrl+Shift+Tab** |
| Select Tab (1 - 8) | **Ctrl+(1-8)** |
| Show Favorites Bar `*` | **Ctrl+Shift+B** |
| Help | **F1** |
| Focus Next Pane `*` | **F6**.  Supported in windowed hosting mode, but not in visual hosting mode.  Visual hosting mode is used for [WinUI 2 (UWP) apps](../samples/webview2_sample_uwp.md), and for [Win32 C++ apps with Visual Composition](../samples/webview2samplewincomp.md). |
| Focus Previous Pane `*` | **Shift+F6**.  Same as **F6** support, above. |
| Reading View `*` | **F9** |
| Focus Menu Bar | **F10** |
| Show Identity Menu `*` | **Ctrl+Shift+M** |
| Browser Task Manager `*` | **Shift+Escape** |
| Edge Feedback `*` | **Shift+Alt+I** |
| Mute Tab `*` | **Ctrl+M** |
| New Incognito Window | **Ctrl+Shift+N** |
| New Tab | **Ctrl+T** |
| New Window | **Ctrl+N** |
| Restore Last Closed Tab | **Ctrl+Shift+T** |
| Focus Favorites | **Alt+Shift+B** |
| Focus Inactive Popup | **Alt+Shift+A** |
| Focus Search | **Ctrl+E**, **Ctrl+K**, **Search Key** |
| Duplicate Tab | **Ctrl+Shift+K** |
| Focus Toolbar `*` | **Alt+Shift+T** |
| Home | **Alt+Home**, **Browser Home Key** |
| Show App Menu | **Alt+E**, **Alt+F** |
| Show Favorites | **Ctrl+Shift+O** |
| Show Downloads | **Ctrl+J** |
| Show History | **Ctrl+H** |
| Show Reading Mode Bar `*` | **Shift+Alt+R** |
| Show Collections `*` | **Ctrl+Shift+Y** |


### Shortcuts turned off except when event not handled

The following keyboard shortcuts are always turned off, except in windows that display when the `NewWindowRequested` event isn't handled:

| Action | Shortcut |
|:--- |:--- |
| Close Tab | **Ctrl+W**, **Ctrl+F4** |
| Close Window | **Ctrl+Shift+W** |
| Fullscreen | **F11** |


### Shortcuts turned off if AcceleratorEnabled is False

If you set `AreBrowserAcceleratorKeysEnabled` to `FALSE`, the following additional keyboard shortcuts are turned off:

| Action | Shortcut |
|:--- |:--- |
| Stop | **Esc** |
| Find on Page | **Ctrl+F** |
| Find Next | **Ctrl+G** |
| Find Previous | **Ctrl+Shift+G** |
| Print | **Ctrl+P** |
| Refresh | **Ctrl+R**, **F5**, **Reload Key** |
| Refresh Without Cache | **Ctrl+Shift+R**, **Ctrl+F5**, **Shift+F5**, **Ctrl+Refresh**, **Shift+Refresh** |
| Zoom Out | **Ctrl**+**-** |
| Zoom In | **Ctrl**+**+** |
| Reset Zoom | **Ctrl+0** |
| Find Next | **F3** |
| Find Previous | **Shift+F3** |
| Back | **Alt+Left Arrow**, **Browser Back Button Key** |
| Forward | **Alt+Right Arrow**, **Browser Forward Key** |
| [Caret browsing](https://support.microsoft.com/microsoft-edge/accessibility-features-in-microsoft-edge-4c696192-338e-9465-b2cd-bd9b698ad19a#caret_browsing) | **F7** |
| Open / Close DevTools | **Ctrl+Shift+I** |
| Open DevTools Console | **Ctrl+Shift+J** |
| Open DevTools Inspect | **Ctrl+Shift+C** |


### Customizing an individual key

To customize any of the keys individually, use the [AcceleratorKeyPressed](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.acceleratorkeypressed?view=webview2-dotnet-1.0.774.44&preserve-view=true) event.
