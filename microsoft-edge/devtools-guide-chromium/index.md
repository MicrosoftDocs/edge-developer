---
description: Get to know the Microsoft Edge (Chromium) Developer Tools
title: Microsoft Edge (Chromium) Developer Tools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 12/09/2020
ms.topic: article
ms.prod: microsoft-edge
ms.technology: devtools
keywords: microsoft edge, web development, f12 tools, devtools
---
# Microsoft Edge (Chromium) Developer Tools overview  

With the installation of Microsoft Edge you didn't only get a browser, but also a powerful way to inspect, debug and create web projects. The Developer Tools shipped with the browser are based on those of the  Chromium open source project so you might already be familiar with them. To keep things shorter in this document, we shall refer to the Microsoft Edge Developer Tools as "DevTools" from now on. 

## Open the DevTools  

To open the DevTools, you can get started right here. Pick one of the ways listed below:

*   Select `F12` 
*   Select `Ctrl`+`Shift`+`I` on Windows/Linux \(`Command`+`Option`+`I` on macOS\)  
*   Context-click any element on the page and select **Inspect** to jump into the Elements panel. 
*   Press `Ctrl`+`Shift`+`C` on Windows/Linux \(`Command`+`Option`+`C` on macOS\) to open the DevTools in **Inspect Element Mode** 
*   Select `Ctrl`+`Shift`+`J` on Windows/Linux or `Command`+`Option`+`J` on macOS to launch the **Console** panel in the DevTools.  

As you can already see, there are two ways to interact with the DevTools: using your mouse or [keyboard shortcuts][DevtoolsGuideKeyboardShortcuts]. Keyboard shortcuts are not only a  way to access functionality quicker but are also an important accessibility aspect. We're working hard to make all the tools available via keyboard and assistive technology like screen readers. There are even more ways to open DevTools, including automated ways, and you can read up on all of them in the [Open DevTools][DevtoolsGuideOpenDevTools] chapter of this documentation.

## Placing the DevTools on your screen

Depending on your use case, you can dock the developer tools in different places in your browser. You do that by activating the **Customize And Control DevTools** `...` menu on the top right. Activate the different icons shown below to:

*   Undock the DevTools to a separate window. This is useful if you work with several monitors or if you need to work on a full screen app. 
*   Dock the DevTools to the left or right of the window. This is useful if you want to have the tools side-by-side and you run a high resolution and have the space. It is also excellent for [device simulation and testing][DevtoolsGuideDeviceMode].
*   Dock the DevTools to the bottom of the screen. This is good if you don't have enough space to show the DevTools to the side or if you need to debug long text in the DOM or the Console.

Depending on where you dock your DevTools you will see features of the tools you use in different parts of the screen. That way we make the best use of the available space and still keep all the tools you need visible.  

## Getting to know the core tools

*   An **Elements** panel to edit HTML and CSS, inspect accessibility properties, view event listeners, and set DOM mutation breakpoints  
*   A **Console** to view and filter log messages, inspect JavaScript objects and DOM nodes, and run JavaScript in the context of the selected window or frame  
*   A **Sources** panel to open and live edit your code, set breakpoints, step through code, and see the state of your website one line of JavaScript at a time  
*   A **Network** panel to monitor and inspect requests and responses from the network and browser cache   
*   A **Performance** panel to profile the time and system resources required by your site  
*   A **Memory** panel to measure your use of memory resources and compare heap snapshots at different states of code runtime  
*   An **Application** panel to inspect, modify, and debug web app manifests, service workers, and service worker caches.  You may also inspect and manage storage, databases, and caches from the **Application** panel.  
*   A **Security** panel to debug security issues and ensure that you have properly implemented HTTPS on your website.  HTTPS provides critical security and data integrity for both your site and your users that provide personal information on your site.  
*   An **Audits** panel \(now renamed **Lighthouse**\) to run an audit of your website.  The results of the audit help you improve the quality of your site in the following ways.  
    *   Catch common errors related to making your website accessible, secure, performant, and so on.  
    *   Fix each error.  
    *   Build a PWA.  
        



## Power tip: using the command menu

Once you worked with the developer tools for a while you will see that there is a lot to discover and use. There are various ways to access different parts of the tools but the fastest and simplest may be [the command menu][DevtoolsGuideChromiumCommandMenu] 

Select `Control`+`Shift`+`P` \(Windows, Linux\) or `Command`+`Shift`+`P` \(macOS\). Or choose **Customize And Control DevTools** `...` and then choose **Run Command**.  

This allows you to type commands that DevTools should execute including showing and hiding different parts of it. Try it by going deep into DevTools and enter "render" and choose the `Drawer Show Changes` option with the arrow keys. Hitting enter will show the changes pane, something that is incredibly useful when you edit CSS but may be hard to find using other ways to navigate around Devtools. 

## Customizing DevTools

The developer tools are highly customizable to your needs. You can change settings by activating the **Settings Menu** (the cog wheel on the top right) or by pressing `F1` or `?`. There you can change almost all the different parts of DevTools to your needs in the **Preferences** section.
The most useful changes for you might be to `Match the browser language` which shows DevTools in other languages or to switch the theme. 

In addition to overall DevTools preferences you can also change the settings of advanced functionality like Workspaces, filter out library code with the **Ignore List**, define what **Devices** you want to see in the [device simulation and testing][DevtoolsGuideDeviceMode] mode, select a network **Throttling** profile, define simulated **Locations** and customize keyboard shortcuts. We also offer the option to match the keyboard shortcuts of Visual Studio Code in case you are already used to those. 

## Do you feel like experimenting?

In addition to using the DevTools as-is we keep trying out new things as experiments. In the **Experiments** section of the **Settings** you can turn each of these on and off. We'd love for you to help us decide which one of these are something you want. You can always read up on the latest experiments and what they do in the [experimental features chapter][DevtoolsGuideChromiumExperiment] of this documentation.

## See also  

*   [DevTools for Beginners: Get Started with HTML and the DOM][DevtoolsGuideChromiumBeginnersHtml]  
*   [Microsoft Edge (Chromium) DevTools Protocol][DevtoolsProtocolChromiumIndex]  
    
## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](./includes/contact-devtools-team-note.md)]  

If you want to preview the [latest features coming to the DevTools][DevtoolsGuideChromiumWhatsNewIndex], download [Microsoft Edge Canary][MicrosoftedgeinsiderDownload], which builds nightly.  

<!-- links -->  

[DevtoolsGuideChromiumBeginnersHtml]: /microsoft-edge/devtools-guide-chromium/beginners/html "DevTools for Beginners: Get Started with HTML and the DOM | Microsoft Docs"  
[DevtoolsGuideChromiumWhatsNewIndex]: /microsoft-edge/devtools-guide-chromium/whats-new/2020/11/devtools "What's new in the Microsoft Edge (Chromium) DevTools | Microsoft Docs"  
[DevtoolsProtocolChromiumIndex]: /microsoft-edge/devtools-protocol-chromium "Microsoft Edge (Chromium) DevTools Protocol | Microsoft Docs"  

[MicrosoftEdgeAddonsExtensions]: https://microsoftedge.microsoft.com/addons/category/Edge-Extensions "Microsoft Edge Add-ons"  

[MicrosoftedgeinsiderDownload]: https://www.microsoftedgeinsider.com/download "Download Microsoft Edge Insider Channels"  

[GoogleChromeWebstoreExtensions]: https://chrome.google.com/webstore/category/extensions "Extensions | Chrome Web Store"  
