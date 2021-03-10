---
description: Get to know the Microsoft Edge (Chromium) Developer Tools
title: Microsoft Edge (Chromium) Developer Tools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 02/10/2021
ms.topic: article
ms.prod: microsoft-edge
ms.technology: devtools
keywords: microsoft edge, web development, f12 tools, devtools
---
# Microsoft Edge (Chromium) Developer Tools overview  

Installing Microsoft Edge does not only get you a browser, but also a powerful way to inspect, debug and even create web projects. The Developer Tools shipped with the browser are based on those of the  Chromium open source project so you might already be familiar with them. To keep things shorter in this document, we shall refer to the "Microsoft Edge Developer Tools" as "DevTools" from now on. 

You can use DevTools to cover a lot of different development tasks:

* You can [inspect and change the current document][DevToolsDOM] live in the browser
* You can [emulate how your product behaves on different devices][DevToolsDevices] and simulate a mobile environment complete with different networking conditions
* You can [inspect, tweak and change the styles of elements][DevtoolsStyles] in the document using live tools with a visual interface
* You can [debug your JavaScript][DevtoolsJavaScript] using breakpoint debugging and with a [live console][DevtoolsConsole]
* You can find out about [accessibility, performance, compatibility and security issues][DevtoolsIssues] of your products and how to fix them using DevTools
* You can [inspect the network traffic][DevtoolsNetwork] and see where there are problems
* You can [inspect where the browser stored content][DevtoolsStorage] in various formats
* You can [evaluate the performance][DevToolsPerformance] of your product and find [memory problems][DevToolsMemory] and [rendering issues][DevToolsRendering].
* You can [use a development environment][DevtoolsSources] allowing you to [sync changes in DevTools with the file system][DevtoolsWorkspaces] and [override files][DevtoolsOverrides] from the web

And a lot more. It all starts by opening DevTools and customizing them to your needs.

## Opening DevTools  

You can start exploring DevTools right here and now by opening them. Pick one of the ways listed below:

*   Context-click any element on the page and select **Inspect** to jump directly to the Elements tool. 
*   Press `F12` 
*   Press `Ctrl`+`Shift`+`I` on Windows/Linux \(`Command`+`Option`+`I` on macOS\)  
*   Press `Ctrl`+`Shift`+`C` on Windows/Linux \(`Command`+`Option`+`C` on macOS\) to open the DevTools in **Inspect Element Mode** 
*   Press `Ctrl`+`Shift`+`J` on Windows/Linux or `Command`+`Option`+`J` on macOS to launch the **Console** panel in the DevTools.  

:::row:::
   :::column span="":::
      :::image type="complex" source="media/devtools-intro-inspect.msft.png" alt-text="Selecting Inspect from the context menu on any element" lightbox="media/devtools-intro-inspect.msft.png":::
         Selecting Inspect from the context menu on any element
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="media/devtools-intro-inspect-devtools-open.png" alt-text="DevTools open highlighting the element chosen via context menu" lightbox="media/devtools-intro-inspect-devtools-open.png":::
         DevTools open highlighting the element chosen via context menu
      :::image-end:::  
   :::column-end:::
:::row-end:::  

As you can already see, there are two ways to interact with the DevTools: using your mouse or [keyboard shortcuts][DevtoolsGuideKeyboardShortcuts]. Keyboard shortcuts are not only a  way to access functionality quicker but also an important accessibility aspect. We're working hard to make all the tools available via keyboard and assistive technology like screen readers. In addition to keyboard and mouse there are more ways to open DevTools and you can read up on all of them in the [Open DevTools][DevtoolsGuideOpenDevTools] chapter of this documentation.

## Docking the DevTools on your screen

Depending on your use case, you can [dock the developer tools in different places][DevtoolsGuideDocking] in your browser. You do that by activating the **Customize And Control DevTools** `...` menu on the top right. 

:::image type="complex" source="media/devtools-intro-docking-menu.msft.png" alt-text="Screenshot of the docking menu in DevTools" lightbox="../media/devtools-intro-docking-menu.msft.png":::
   Screenshot of the docking menu in DevTools  
:::image-end:::  

This bring up the **Dock side** menu and you can activate the different icons to:

*   Undock the DevTools to a separate window. This is useful if you work with several monitors or if you need to work on a full screen app. 
*   Dock the DevTools to the left or right of the window. This is useful if you want to have the tools side-by-side with your web product and you run a high enough resolution to have the space. It is also excellent for [device simulation and testing][DevtoolsGuideDeviceMode].
*   Dock the DevTools to the bottom of the screen. This is good if you don't have enough space to show the DevTools to the side or if you need to debug long text in the DOM or the Console.

:::row:::
   :::column span="":::
      :::image type="complex" source="media/devtools-intro-docking-left.msft.png" alt-text="Select Dock To Left" lightbox="media/devtools-intro-docking-left.msft.png":::
         Select `Dock To Left`  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="media/devtools-intro-docking-bottom.msft.png" alt-text="Select Dock To Bottom" lightbox="media/devtools-intro-docking-bottom.msft.png":::
         Select Dock To Bottom
      :::image-end:::  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="":::
      :::image type="complex" source="media/devtools-intro-docking-right.msft.png" alt-text="Select `Dock To Right`" lightbox="media/devtools-intro-docking-right.msft.png":::
         Select `Dock To Right`  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="media/devtools-intro-docking-own-window.msft.png" alt-text="Undocked DevTools in separate window" lightbox="media/devtools-intro-docking-own-window.msft.png":::
         Undocked DevTools in separate window  
      :::image-end:::  
   :::column-end:::
:::row-end::: 

Depending on where you dock your DevTools you will see features of the tools you use in different parts of the screen. That way we make the best use of the available space and still keep all the tools you need visible.  

## Getting to know the core tools

DevTools give you an amazing amount of power to inspect, debug and change the web product currently displayed in the browser. Most of the tools show the changes live, which makes them incredibly useful to tweak the look and feel or functionality of a web project without the need to reload or build it. This also allows you to change web third party products on your computer. 

DevTools grew over a period of several years and we understand that they can be daunting to look at when you see them the first time. So let's quickly introduce the different parts. 

The main toolbar offers you a few sections. These are in order from left to right.

:::image type="complex" source="media/devtools-intro-menu-bar.msft.png" alt-text="Screenshot of the menu bar of developer tools with labels explaining the different sections. In order: Inspect Tool, Device Emulation tool, Tools tab group, JavaScript errors, Issues, Settings, Feedback, Customize and Close." lightbox="../media/devtools-intro-menu-bar.msft.png":::
   Screenshot of the menu bar of developer tools with labels explaining the different sections. In order: Inspect Tool, Device Emulation tool, Tools tab group, JavaScript errors, Issues, Settings, Feedback, Customize and Close.  
:::image-end:::  

* The **Inspect Tool** allows you to select an element in the current page. Once activated you can move your mouse over different parts of the document to get detailed information about this element and a colour overlay showing you its dimensions, padding and margin.

    :::image type="complex" source="media/devtools-intro-inspect-tool.msft.png" alt-text="Screenshot of the inspect tool with the first headline of this document selected" lightbox="../media/devtools-intro-inspect-tool.msft.png":::
   Screenshot of the inspect tool with the first headline of this document selected  
    :::image-end:::  

* The [Device Emulation][DevtoolsGuideDeviceMode] tool displays the current web product in an emulated device mode. This allows you to see how you product reacts to resizing of the browser and gives you an estimation how it would look and behave on a mobile device.

:::image type="complex" source="media/devtools-intro-device-emulation.msft.png" alt-text="Screenshot of developer tools showing this website in an emulated mobile phone" lightbox="../media/devtools-intro-device-emulation.msft.png":::
   Screenshot of developer tools showing this website in an emulated mobile phone  
    :::image-end:::  

* Following is a group of tabs representing different tools for different purposes. You can customize these and they change depending on the context you use DevTools in.
* Next to these tabs are optional error and issue shortcut buttons. These only show up when there are JavaScript errors or issues with the current document. The error button shows a red circle with a cross followed by the amount of errors caused by JavaScript. Activating this will take you to the [Console][DevtoolsGuideConsole] to see what went wrong. The issues button is a blue message icon followed by the amount of issues. Activating it gets to you to the [Issues][DevtoolsGuideIssues] tool. 
* Next up is the **Settings** menu shown as a cog. 
* The **Send Feedback** button allows you to connect with the DevTools team to report problems, issues and give ideas. Activating this will show a feedback prompt where you can describe what went wrong and automatically add a screenshot. 
* The **Customize and control Devtools** button shown as three vertical dots allows you, amongst other things, to define where to show DevTools, perform a search or jump to different tools.
* The **Close** button shown as an `x` closes DevTools

Activating the different tabs in the group takes you to various tools inside DevTools. Here are the most common ones with a short description what they do:

*   The **Welcome** tool has news about new features of DevTools, how to contact the team and gives information about certain features.   
*   The **Elements** tool allows you to edit and inspect HTML and CSS. You can edit both in the tool and you see the changes live in the browser.  
*   The [Console][DevtoolsGuideConsole] tool allows you to display and filter log messages. These are automated logs of the browser like network requests and developer generated logs. You can also run JavaScript in the context of the current window or frame.
*   The [Sources][DevtoolsGuideSources] tool is a code editor and JavaScript debugger. You can edit projects, maintain Snippets and debug the current project step by step.
*   The [Network][DevtoolsGuideNetwork] tool enables you to monitor and inspect requests and responses from the network and browser cache. You can filter them to your needs and simulate different network conditions.

In addition to these basic tools you have much more specialized ones available, like **Performance**, **Memory**, **Application**, **Security** and **Audits**. You can get to know more about them here in the documentation.
        
## Power tip: using the command menu

Once you worked with the developer tools for a while you will see that there is a lot to discover and use. There are various ways to access different parts of the tools but the fastest and simplest may be [the command menu][DevtoolsGuideChromiumCommandMenu] 

Select `Control`+`Shift`+`P` \(Windows, Linux\) or `Command`+`Shift`+`P` \(macOS\). Or choose **Customize And Control DevTools** `...` and then choose **Run Command**.  

:::image type="complex" source="media/devtools-intro-command-menu.msft.png" alt-text="Screenshot of the command menu in DevTools" lightbox="../media/devtools-intro-command-menu.msft.png":::
Screenshot of the command menu in DevTools  
:::image-end:::

This allows you to type commands that DevTools should execute including showing and hiding different parts of it. Try it by going deep into DevTools and enter "changes" and choose the `Drawer Show Changes` option with the arrow keys. Hitting `Enter` will show the **Changes** tool, something that is incredibly useful when you edit CSS but may be hard to find using other ways to navigate around DevTools. 

:::row:::
   :::column span="":::
      :::image type="complex" source="media/devtools-intro-command-menu-show-changes.msft.png" alt-text="Command menu showing the options when typing `changes`" lightbox="media/devtools-intro-command-menu-show-changes.msft.png":::
         Command menu showing the options when typing `changes`  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="media/devtools-intro-showing-changes.msft.png" alt-text="DevTools with the Changes tool open" lightbox="media/devtools-intro-showing-changes.msft.png":::
         DevTools with the Changes tool open  
      :::image-end:::  
   :::column-end:::
:::row-end::: 

## Customizing DevTools

DevTools are highly customizable to your needs. You can change settings by activating the **Settings Menu** (the cog wheel on the top right) or by pressing `F1` or `?`. There you can change almost all the different parts of DevTools to your needs in the **Preferences** section.

:::image type="complex" source="media/devtools-intro-all-settings.msft.png" alt-text="Screenshot of all the settings in DevTools" lightbox="../media/devtools-intro-all-settings.msft.png":::
Screenshot of all the settings in DevTools  
:::image-end:::

The most useful changes for you might be to `Match the browser language` which shows DevTools in other languages or to switch the theme. 

In addition to overall DevTools preferences you can also change the settings of advanced functionality like [Workspaces][DevtoolsGuideWorkspaces], filter out library code with the **Ignore List**, define what **Devices** you want to see in the [device simulation and testing][DevtoolsGuideDeviceMode] mode, select a network **Throttling** profile, define simulated **Locations** and customize keyboard shortcuts. We also offer the option to match the keyboard shortcuts of Visual Studio Code in case you are already used to those. 

:::image type="complex" source="media/devtools-intro-match-keys.msft.png" alt-text="Screenshot of all the keyboard shortcuts and the menu to change them to the settings of Visual Studio Code" lightbox="../media/devtools-intro-match-keys.msft.png":::
Screenshot of all the keyboard shortcuts and the menu to change them to the settings of Visual Studio Code  
:::image-end:::

## Do you feel like experimenting?

In addition to using the DevTools as-is we keep trying out new things as experiments. In the **Experiments** section of the **Settings** you can turn each of these on and off. We'd love for you to help us decide which one of these are something you want. You can always read up on the latest experiments and what they do in the [experimental features chapter][DevtoolsGuideChromiumExperiment] of this documentation.

## See also  

*   [DevTools for Beginners: Get Started with HTML and the DOM][DevtoolsGuideChromiumBeginnersHtml]  
*   [Microsoft Edge (Chromium) DevTools Protocol][DevtoolsProtocolChromiumIndex]  
    
## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](./includes/contact-devtools-team-note.md)]  

If you want to preview the [latest features coming to the DevTools][DevtoolsGuideChromiumWhatsNewIndex], download [Microsoft Edge Canary][MicrosoftedgeinsiderDownload], which builds nightly.  

<!-- links -->  

[DevToolsOverrides]: ./javascript/overrides.md
[DevtoolsStorage]: ./storage
[DevtoolsNetwork]: ./network
[DevtoolsJavaScript]: ./javascript
[DevtoolsConsole]: ./console
[DevtoolsStyles]: ./inspect-styles
[DevtoolsWorkspaces]: ./workspaces
[DevtoolsSources]: ./sources
[DevtoolsIssues]: ./issues
[DevToolsDOM]: ./dom
[DevToolsDevices]: ./device-mode
[DevToolsPerformance]: ./evaluate-performance
[DevToolsMemory]: ./memory-problems
[DevToolsRendering]: ./rendering-tools
[DevtoolsGuideDocking]: /microsoft-edge//microsoft-edge/devtools-guide-chromium/customize/placement
[DevtoolsGuideKeyboardShortcuts]: /microsoft-edge/devtools-guide-chromium/shortcuts
[DevtoolsGuideOpenDevTools]: /microsoft-edge/devtools-guide-chromium/shortcuts
[DevtoolsGuideConsole]: /microsoft-edge/devtools-guide-chromium/console
[DevtoolsGuideIssues]: /microsoft-edge/devtools-guide-chromium/issues
[DevtoolsGuideSources]: /microsoft-edge/devtools-guide-chromium/sources
[DevtoolsGuideNetwork]: /microsoft-edge/devtools-guide-chromium/network
[DevtoolsGuideChromiumCommandMenu]: /microsoft-edge/devtools-guide-chromium/command-menu
[DevtoolsGuideWorkspaces]: /microsoft-edge/devtools-guide-chromium/workspaces
[DevtoolsGuideChromiumExperiment]: /microsoft-edge/devtools-guide-chromium/experimental-features
[DevtoolsGuideDeviceMode]: /microsoft-edge/devtools-guide-chromium/device-mode
[DevtoolsGuideChromiumBeginnersHtml]: /microsoft-edge/devtools-guide-chromium/beginners/html "DevTools for Beginners: Get Started with HTML and the DOM | Microsoft Docs"  
[DevtoolsGuideChromiumWhatsNewIndex]: /microsoft-edge/devtools-guide-chromium/whats-new/2020/11/devtools "What's new in the Microsoft Edge (Chromium) DevTools | Microsoft Docs"  
[DevtoolsProtocolChromiumIndex]: /microsoft-edge/devtools-protocol-chromium "Microsoft Edge (Chromium) DevTools Protocol | Microsoft Docs"  
[MicrosoftEdgeAddonsExtensions]: https://microsoftedge.microsoft.com/addons/category/Edge-Extensions "Microsoft Edge Add-ons"  
[MicrosoftedgeinsiderDownload]: https://www.microsoftedgeinsider.com/download "Download Microsoft Edge Insider Channels"  
[GoogleChromeWebstoreExtensions]: https://chrome.google.com/webstore/category/extensions "Extensions | Chrome Web Store"  