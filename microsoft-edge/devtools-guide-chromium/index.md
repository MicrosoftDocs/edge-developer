---
description: Get to know the Microsoft Edge (Chromium) Developer Tools
title: Microsoft Edge (Chromium) Developer Tools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 03/12/2021
ms.topic: article
ms.prod: microsoft-edge
ms.technology: devtools
keywords: microsoft edge, web development, f12 tools, devtools
---
# Microsoft Edge (Chromium) Developer Tools overview  

Microsoft Edge has adopted the Chromium open-source project.  The new Microsoft Edge browser creates better web compatibility and reduces the fragmentation of different web platforms.  The change should make it easier for you to build and test your webpages in Microsoft Edge.  The new Microsoft Edge should help your webpages work as expected when opened in other Chromium-based browsers.  Chromium-based browsers include Google Chrome, Vivaldi, Opera, Brave, and the new Microsoft Edge.  

The web has grown in usage across an ever-widening array of device types.  The complexity and overhead involved in testing webpages has rapidly grown.  Web developers like you need to test against many different systems.  To ensure your webpages work well on all device types and browsers, you may find it nearly impossible, particularly if you work at a small company.  The new Microsoft Edge is now based on Chromium.  The Microsoft Edge team has simplified the matrix by aligning the Microsoft Edge web platform with other Chromium-based browsers.  The new Microsoft Edge provides a best-in-class development experience.  The experience is accomplished inside the browser and along with the other developer tools you use everyday, such as Visual Studio Code.  

As a Chromium-based browser developer, you should feel comfortable with the new Microsoft Edge browser.  The Microsoft Edge \(Chromium\) DevTools work just like the developer tools you already know and use.  The Microsoft Edge \(Chromium\) Developer Tools are often called the Microsoft Edge \(Chromium\) DevTools or DevTools.  For more information, navigate to [What's new in the Microsoft Edge (Chromium) DevTools][DevtoolsGuideChromiumWhatsNewIndex].  

:::image type="complex" source="./media/devtools.png" alt-text="Microsoft Edge (Chromium) DevTools" lightbox="./media/devtools.png":::
   Microsoft Edge (Chromium) DevTools  
:::image-end:::  

If you previously developed for Microsoft Edge \(EdgeHTML\) and are evaluating the new Microsoft Edge, it now provides great new tools for you to build and test your webpages easier and faster.  

## Open the DevTools  

The Microsoft Edge DevTools are a set of tools built directly into the Microsoft Edge browser.  The DevTools allows you to do the following tasks all directly within the browser.  

*   Inspect and make changes to your HTML webpage  
*   Edit CSS and instantly see preview how your webpage renders  
*   Review all of the `console.log()` statements from your front-end JavaScript code  
*   Debug your script, set breakpoints, and step through your code line by line  
    
More examples of the features that DevTools provide to make it easier and faster for you to build and test your webpage in Microsoft Edge.  

To open the DevTools  

*   Select `F12` 
*   Select `Ctrl`+`Shift`+`I` \(Windows/Linux\) or `Command`+`Option`+`I` \(macOS\)  
    
If you want to see the HTML or CSS for an element on your site, right-click the element and choose **Inspect** to jump into the **Elements** tool.  To open the DevTools in **Inspect Element Mode**, select `Ctrl`+`Shift`+`C` \(Windows/Linux\)  or `Command`+`Option`+`C` \(macOS\). the **Inspect Element Mode** allows you to choose an element on the webpage and display the HTML and CSS in the **Elements** tool.  

If you want to review logs from your front-end JavaScript code or quickly run some script, open the **Console**.   To launch the **Console** tool in the DevTools, select `Ctrl`+`Shift`+`J` \(Windows/Linux\) or `Command`+`Option`+`J` \(macOS\).  

## Core tools  

:::image type="complex" source="./media/devtools-core-tools.png" alt-text="Microsoft Edge (Chromium) DevTools core tools" lightbox="./media/devtools-core-tools.png":::
   Microsoft Edge (Chromium) DevTools core tools  
:::image-end::: 

The Microsoft Edge \(Chromium\) DevTools include the following tools.  

*   An **Elements** tool to edit HTML and CSS, inspect accessibility properties, view event listeners, and set DOM mutation breakpoints.
*   A **Console** to review and filter log messages, inspect JavaScript objects and DOM nodes, and run JavaScript in the context of the selected window or frame.
*   A [Sources][DevToolsSourcesIndex] tool to view and edit the JavaScript code returned from the server, and use the JavaScript debugger to set breakpoints, step through code, and display the state of your webpage.  
*   A **Network** tool to monitor and inspect requests and responses from the network and browser cache.  
*   A **Performance** tool to profile the time and system resources required by your site.  
*   A **Memory** tool to measure your use of memory resources and compare heap snapshots at different states of code runtime.  
*   An **Application** tool to inspect, modify, and debug web app manifests, service workers, and service worker caches.  You may also inspect and manage storage, databases, and caches from the **Application** tool.  
*   A **Security** tool to debug security issues and ensure that you have properly implemented HTTPS on your webpage.  HTTPS provides critical security and data integrity for both your site and your users that provide personal information on your site.  
*   An **Audits** tool \(now renamed **Lighthouse**\) to run an audit of your webpage.  The results of the audit help you improve the quality of your site in the following ways.  
    *   Catch common errors related to making your webpage accessible, secure, performant, and so on.  
    *   Fix each error.  
    *   Build a PWA.  
        
[!INCLUDE [audits-panel-note](./includes/audits-panel-note.md)]  

Send your [feedback and feature requests](#getting-in-touch-with-the-microsoft-edge-devtools-team).  

## Extensions  

You may have accessed DevTools using extensions when you diagnosed and debugged issues while you built your webpages \(or apps\). Microsoft Edge extensions are acquired from [Microsoft Edge Add-ons][MicrosoftEdgeAddonsExtensions].  On [Microsoft Edge Add-ons][MicrosoftEdgeAddonsExtensions], browse DevTools extensions from the **Developer tools** category or search for a specific extension.  

You may also add extensions from the [Chrome Web Store][GoogleChromeWebstoreExtensions].  

:::image type="complex" source="./media/allow-extensions-from-stores.png" alt-text="Chrome Web Store in Microsoft Edge" lightbox="./media/allow-extensions-from-stores.png":::
   Chrome Web Store in Microsoft Edge  
:::image-end:::  

At the top, choose **Allow extensions from other stores** and then choose **Allow** in the dialog that appears.  

> [!NOTE]
> Extensions installed from sources other than the Microsoft Store are unverified, and may affect browser performance.  

Choose **Add to Chrome** to add your DevTools extension to Microsoft Edge.  

:::image type="complex" source="./media/install-extension-from-chrome-store.png" alt-text="Add extension from Chrome Web Store to Microsoft Edge" lightbox="./media/install-extension-from-chrome-store.png":::
   Add extension from Chrome Web Store to Microsoft Edge  
:::image-end:::  

## Shortcuts  

The following shortcuts control the main DevTools window, work across all tools, or both.  

| Action | Windows/Linux | macOS |  
|:--- |:--- | :--- |  
| Show/Hide DevTools \(opens to last viewed tool\) | `F12` or `Ctrl`+`Shift`+`I` | `Command`+`Option`+`I` |  
| Show the Console | `Ctrl`+`Shift`+`J` | `Command`+`Option`+`J` |  
| Show the DevTools in **Inspect Element Mode** that allows you to choose an element and display the HTML and CSS in the **Elements** tool | `Ctrl`+`Shift`+`C` | `Command`+`Option`+`C` |  
| Show Settings | `?` or `Fn`+`F1` | `?` or `Fn`+`F1` |  
| Show the next panel | `Ctrl`+`]` | `Command`+`]` |  
| Show the previous panel | `Ctrl`+`[` | `Command`+`[` |  
| Dock the DevTools in the last position used.  If the DevTools remain in the default position for the entire session, the shortcut undocks the DevTools into a separate window | `Ctrl`+`Shift`+`D` | `Command`+`Shift`+`D` |  
| Toggle **Device Mode** | `Ctrl`+`Shift`+`M` | `Command`+`Shift`+`M` |  
| Toggle **Inspect Element Mode** that allows to you to choose an element and display the HTML and CSS in the **Elements** tool | `Ctrl`+`Shift`+`C` | `Command`+`Shift`+`C` |  
| Show the Command Menu | `Ctrl`+`Shift`+`P` | `Command`+`Shift`+`P` |  
| Show/Hide the Drawer | `Esc` | `Esc` |  
| Refresh.  Refreshes the webpage using the cache.  | `F5` or `Ctrl`+`R` | `Command`+`R` |  
| Hard Refresh.  Forces Microsoft Edge to download resources again and reload.  The resources that are used may come from a cached version | `Ctrl`+`F5` or `Ctrl`+`Shift`+`R` | `Command`+`Shift`+`R` |  
| Search for text within the current panel.  Not supported in the Audits, Application, and Security tools | `Ctrl`+`F` | `Command`+`F` |  
| Show the Search tool in the Drawer, which lets you search for text across all loaded resources | `Ctrl`+`Shift`+`F` | `Command`+`Option`+`F` |  
| Open a file in the Sources panel | `Ctrl`+`O` or `Ctrl`+`P` | `Command`+`O` or `Command`+`P` |  
| Zoom in | `Ctrl`+`Shift`+`+` | `Command`+`Shift`+`+` |  
| Zoom out | `Ctrl`+`-` | `Command`+`-` |  
| Restore default zoom level | `Ctrl`+`0` | `Command`+`0` |  
| Run snippet | `Ctrl`+`O` or `Ctrl`+`P`, type `!` followed by the name of the script, then select `Enter` | Select `Command`+`O` or `Command`+`P`, type `!` followed by the name of the script, then select `Enter` |  
| Show non-editable HTML source code in a new tab | `Ctrl`+`U` | N/A |  

> [!NOTE]
> If you are debugging and paused at a breakpoint, the **Refresh** shortcut resumes the runtime first.  

## See also  

*   [DevTools for Beginners: Get Started with HTML and the DOM][DevtoolsGuideChromiumBeginnersHtml]  
*   [Microsoft Edge (Chromium) DevTools Protocol][DevtoolsProtocolChromiumIndex]  
    
## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](./includes/contact-devtools-team-note.md)]  

If you want to preview the [latest features coming to the DevTools][DevtoolsGuideChromiumWhatsNewIndex], download [Microsoft Edge Canary][MicrosoftedgeinsiderDownload], which builds nightly.  

<!-- links -->  

[DevtoolsGuideChromiumBeginnersHtml]: /microsoft-edge/devtools-guide-chromium/beginners/html "DevTools for Beginners: Get Started with HTML and the DOM | Microsoft Docs"  
[DevtoolsGuideChromiumWhatsNewIndex]: /microsoft-edge/devtools-guide-chromium/whats-new/2021/02/devtools "What's new in the Microsoft Edge (Chromium) DevTools | Microsoft Docs"  
[DevtoolsProtocolChromiumIndex]: /microsoft-edge/devtools-protocol-chromium "Microsoft Edge (Chromium) DevTools Protocol | Microsoft Docs"  
[DevToolsSourcesIndex]: sources/index.md "Sources tool overview | Microsoft Docs"

[MicrosoftEdgeAddonsExtensions]: https://microsoftedge.microsoft.com/addons/category/Edge-Extensions "Microsoft Edge Add-ons"  

[MicrosoftedgeinsiderDownload]: https://www.microsoftedgeinsider.com/download "Download Microsoft Edge Insider Channels"  

[GoogleChromeWebstoreExtensions]: https://chrome.google.com/webstore/category/extensions "Extensions | Chrome Web Store"  
