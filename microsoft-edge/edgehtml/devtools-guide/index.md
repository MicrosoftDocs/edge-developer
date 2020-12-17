---
description: Get to know the Microsoft Edge (EdgeHTML) Developer Tools
title: Microsoft Edge (EdgeHTML) Developer Tools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.prod: microsoft-edge
ms.technology: devtools
keywords: microsoft edge, web development, f12 tools, devtools
ms.date: 12/02/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# Microsoft Edge (EdgeHTML) Developer Tools  

[!INCLUDE [new-devtools-version-note](../includes/new-devtools-version-note.md)]  

The Microsoft Edge \(EdgeHTML\) DevTools are built with [TypeScript][TypeScriptIndex], powered by [open source][GithubMicrosoftChakracore], optimized for modern front-end workflows, and now available as a [standalone Windows 10 app][MicrosoftStoreEdgeDevtoolsPreview] in the Microsoft Store!  

For more on the latest features, check out [DevTools in the latest update of Windows 10 (EdgeHTML 18)][DevtoolsGuideEdgehtmlWhatsnew].  

## Core tools  

:::image type="complex" source="./media/devtools.png" alt-text="Microsoft Edge (EdgeHTML) DevTools":::
   Microsoft Edge (EdgeHTML) DevTools
:::image-end:::

<!--![Microsoft Edge \(EdgeHTML\) DevTools][ImageDevtoolsEdgehtml]  -->  

The Microsoft Edge \(EdgeHTML\) DevTools include:  

*   An [Elements][DevtoolsGuideEdgehtmlElements] panel to edit HTML and CSS, inspect accessibility properties, view event listeners, and set DOM mutation breakpoints  
*   A [Console][DevtoolsGuideEdgehtmlConsole] to view and filter log messages, inspect JavaScript objects and DOM nodes, and run JavaScript in the context of the selected window or frame  
*   A [Debugger][DevtoolsGuideEdgehtmlDebugger] to step through code, set watches and breakpoints, live edit your code, and inspect your web storage and cookie caches  
*   A [Network][DevtoolsGuideEdgehtmlNetwork] panel to monitor and inspect requests and responses from the network and browser cache  
*   A [Performance][DevtoolsGuideEdgehtmlPerformance] panel to profile the time and system resources required by your site  
*   A [Memory][DevtoolsGuideEdgehtmlMemory] panel to measure your use of memory resources and compare heap snapshots at different states of code runtime  
*   A [Storage][DevtoolsGuideEdgehtmlStorage] panel for inspecting and managing your web storage, IndexedDB, cookies and cache data  
*   A [Service Workers][DevtoolsGuideEdgehtmlServiceworkers] panel for managing and debugging your service workers  
*   An [Emulation][DevtoolsGuideEdgehtmlEmulation] panel to test your site with different browser profiles, screen resolutions, and GPS location coordinates  

Please keep sending your [feedback and feature requests](#getting-in-touch-with-the-microsoft-edge-devtools-team)!  

> [!TIP]
> [Test on Microsoft Edge \(EdgeHTML\) free from any browser][BrowserstackEdgehtml].  
> The Microsoft Edge team partnered with [BrowserStack][BrowserstackEdgehtml] to provide free live and automated testing on Microsoft Edge \(EdgeHTML\).  

## Microsoft Store app  

The **Microsoft Edge \(EdgeHTML\) DevTools** are [now available][DevtoolsGuideEdgehtmlWhatsnew] as a standalone [Windows 10 app from the Microsoft Store][MicrosoftStoreEdgeDevtoolsPreview], in addition to the in-browser \(`F12`\) tooling experience.  With the store version comes a **chooser** panel for attaching to open local and remote page targets and a tabbed layout for easy switching between DevTools instances.  

### Local debugging  

To debug a page locally, simply launch the Microsoft Edge DevTools app.  The **Local** panel of the chooser displays all of the active EdgeHTML content processes, including open Edge browser tabs, running [PWAs][PwasEdgehtmlIndex] \(`WWAHost.exe` processes\), and [webview][HostingWebview] controls.  Select your desired target to attach and open a new tab instance of the DevTools.  

:::image type="complex" source=".//media/chooser_local.png" alt-text="DevTools app Local panel":::
   DevTools app Local panel
:::image-end:::

<!--![DevTools app Local panel][ImageDevtoolsGuideEdgehtmlChooselocal]  -->  

### Remote debugging  

The Microsoft Edge DevTools app introduces basic support for debugging pages on a remote machine via our newly released [DevTools Protocol][DevtoolsProtocolEdgehtmlIndex].  With the latest release comes remote access to core functionality in the [Debugger][DevtoolsGuideEdgehtmlDebugger], [Elements][DevtoolsGuideEdgehtmlElements] \(for read-only operations\), and [Console][DevtoolsGuideEdgehtmlConsole] panels.  Remote debugging is limited to Microsoft Edge \(EdgeHTML\) running desktop hosts, with support for other EdgeHTML hosts and Windows 10 devices coming in future releases.  

To get started, check out the [*Microsoft Edge DevTools*][DevtoolsProtocolEdgehtmlClientsEdgePreview] section of the [DevTools Protocol][DevtoolsProtocolEdgehtmlIndex] docs.  

:::image type="complex" source="./media/chooser_remote.png" alt-text="DevTools app Remote panel":::
   DevTools app Remote panel
:::image-end:::

<!--![DevTools app Remote panel][ImageDevtoolsGuideEdgehtmlRemote]  -->  

## General Shortcuts  

> [!IMPORTANT]
> All shortcuts have been verified in the most recent version of Windows.  
> If you are unable to use a shortcut, please update your copy of Windows.  

These shortcuts control the main DevTools window and should work across all tools.  

| Action | Shortcut |  
|:--- |:--- |  
| Show/Hide DevTools \(opens to last viewed panel\) | `F12`, `Ctrl`+`Shift`+`I` |  
| Toggle docking \(Undock/Bottom/Right\) | `Ctrl`+`Shift`+`D` |  
| Open file | `Ctrl`+`P`, `Ctrl`+`O` |  
| Show non-editable HTML source code in Debugger | `Ctrl`+`U` |  
| Show/hide Console at the bottom of any other tool  | `Ctrl`+`` ` `` |  
| Switch to Elements \(DOM Explorer\) | `Ctrl`+`1` |  
| Switch to Console |  `Ctrl`+`2` |  
| Switch to Debugger | `Ctrl`+`3` |  
| Switch to Network | `Ctrl`+`4` |  
| Switch to Performance | `Ctrl`+`5` |  
| Switch to Memory | `Ctrl`+`6` |  
| Switch to Emulation | `Ctrl`+`7` |  
| Help Document | `F1` |  
| Next tool | `Ctrl`+`F6` |  
| Previous tool | `Ctrl`+`Shift`+`F6` |  
| Previous tool \(from history\) | `Ctrl`+`Shift`+`[` |  
| Next tool \(from history\) | `Ctrl`+`Shift`+`]` |  
| Next Subframe | `F6` |  
| Previous Subframe | `Shift`+`F6` |  
| Next match in Search box | `F3` |  
| Previous match in Search box | `Shift`+`F3` |  
| Find in search box | `Ctrl`+`F` |  
| Give focus to console at the bottom | `Alt`+`Shift`+`I` |  
| Launch DevTools to Console | `Ctrl`+`Shift`+`J` |  
| Refresh the page | `Ctrl`+`Shift`+`F5`, `Ctrl`+`R` |  

> [!NOTE]
> If you are debugging and paused at a breakpoint, the **Refresh the page** action resumes the runtime first.  

## Getting in touch with the Microsoft Edge DevTools team  

Please send your feedback to help improve the Microsoft Edge \(EdgeHTML\) DevTools for you!  Simply open the tools \(`F12`\) and select the [Send feedback](#microsoft-edge-edgehtml-developer-tools) button.  

Become a [Windows Insider][WindowsInsiderProgram] to preview the [latest features coming to the DevTools][DevtoolsGuideEdgehtmlWhatsnew].  Use the Windows Feedback Hub app to post, up-vote, track and get support for general Windows suggestions and problems.  

<!-- image links  -->  

<!--[ImageDevtoolsEdgehtml]: /microsoft-edge/devtools-guide/media/devtools.png "Microsoft Edge (EdgeHTML) DevTools"  -->  
<!--[ImageDevtoolsGuideEdgehtmlChooselocal]: /microsoft-edge/devtools-guide/media/chooser_local.png "DevTools app Local panel"  -->  
<!--[ImageDevtoolsGuideEdgehtmlRemote]: /microsoft-edge/devtools-guide/media/chooser_remote.png "DevTools app Remote panel"  -->  

<!-- links  -->  

[DevtoolsGuideEdgehtmlConsole]: /microsoft-edge/devtools-guide/console "Console"  
[DevtoolsGuideEdgehtmlDebugger]: /microsoft-edge/devtools-guide/debugger "Debugger"  
[DevtoolsGuideEdgehtmlElements]: /microsoft-edge/devtools-guide/elements "Elements"  
[DevtoolsGuideEdgehtmlEmulation]: /microsoft-edge/devtools-guide/emulation "Emulation"  
[DevtoolsGuideEdgehtmlMemory]: /microsoft-edge/devtools-guide/memory "Memory"  
[DevtoolsGuideEdgehtmlNetwork]: /microsoft-edge/devtools-guide/network "Network"  
[DevtoolsGuideEdgehtmlPerformance]: /microsoft-edge/devtools-guide/performance "Performance"  
[DevtoolsGuideEdgehtmlServiceworkers]: /microsoft-edge/devtools-guide/service-workers "Service Workers"  
[DevtoolsGuideEdgehtmlStorage]: /microsoft-edge/devtools-guide/storage "Storage"  
[DevtoolsGuideEdgehtmlWhatsnew]: /microsoft-edge/devtools-guide/whats-new "DevTools in the latest Windows 10 update (EdgeHTML 18)"  
[DevtoolsProtocolEdgehtmlIndex]: /microsoft-edge/devtools-protocol/index "Microsoft Edge (EdgeHTML) DevTools Protocol"  
[DevtoolsProtocolEdgehtmlClientsEdgePreview]: /microsoft-edge/devtools-protocol/0.1/clients.md#microsoft-edge-devtools-preview "Microsoft Edge DevTools Preview - DevTools Protocol Clients"  
[HostingWebview]: /microsoft-edge/hosting/webview "WebView (EdgeHTML) for Windows 10 apps"  
[PwasEdgehtmlIndex]: /microsoft-edge/progressive-web-apps-edgehtml/index "Progressive Web Apps (EdgeHTML) on Windows"  

[MicrosoftStoreEdgeDevtoolsPreview]: https://www.microsoft.com/store/p/microsoft-edge-devtools-preview/9mzbfrmz0mnj "Microsoft Edge DevTools Preview"  

[WindowsInsiderProgram]: https://insider.windows.com "Windows Insider Program"  

[BrowserstackEdgehtml]: https://www.browserstack.com/test-on-microsoft-edge-browser "Microsoft Edge Browser Testing for Free | BrowserStack"  

[GithubMicrosoftChakracore]: https://github.com/Microsoft/ChakraCore "microsoft/ChakraCore | GitHub"  

[TypeScriptIndex]: https://www.typescriptlang.org "TypeScript"  
