---
description: Get to know the Microsoft Edge (Chromium) Developer Tools
title: Microsoft Edge (Chromium) Developer Tools Overview
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 03/31/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: devtools
keywords: microsoft edge, web development, f12 tools, devtools
---
# Microsoft Edge (Chromium) Developer Tools overview  

Installing Microsoft Edge does not only get you a browser, but also a powerful way to inspect, debug and even create web projects. The Developer Tools shipped with the browser are based on those of the  Chromium open source project so you might already be familiar with them. To keep things shorter in this document, we shall refer to the "Microsoft Edge Developer Tools" as "DevTools" from now on. 

You can use DevTools to cover a lot of different development tasks:

* You can [inspect and change the current document][DevToolsDOM] live in the browser.
* You can [emulate how your product behaves on different devices][DevToolsDevices] and simulate a mobile environment complete with different networking conditions.
* You can [inspect, tweak and change the styles of elements][DevtoolsStyles] in the document using live tools with a visual interface.
* You can [debug your JavaScript][DevtoolsJavaScript] using breakpoint debugging and with a [live console][DevtoolsConsole].
* You can find out about [accessibility, performance, compatibility and security issues][DevtoolsIssues] of your products and how to fix them using DevTools.
* You can [inspect the network traffic][DevtoolsNetwork] and see where there are problems.
* You can [inspect where the browser stored content][DevtoolsStorage] in various formats.
* You can [evaluate the performance][DevToolsPerformance] of your product and find [memory problems][DevToolsMemory] and [rendering issues][DevToolsRendering].
* You can [use a development environment][DevtoolsSources] allowing you to [sync changes in DevTools with the file system][DevtoolsWorkspaces] and [override files][DevtoolsOverrides] from the web.

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
         DevTools open highlighting the element chosen in the context menu
      :::image-end:::  
   :::column-end:::
:::row-end:::  

As you can already see, there are two ways to interact with the DevTools: using your mouse or [keyboard shortcuts][DevtoolsGuideKeyboardShortcuts]. Keyboard shortcuts are not only a  way to access functionality quicker but also an important accessibility aspect. We're working hard to make all the tools available via keyboard and assistive technology like screen readers. In addition to the keyboard and mouse, there are more ways to open DevTools in [Microsoft Edge DevTools keyboard shortcuts][DevtoolsGuideOpenDevTools].

## Docking the DevTools in your browser

When you open the DevTools, it docks to the left of your browser.  You can change where the DevTools docks by selecting **Customize And Control DevTools** or the `...` menu in the DevTools, and then selecting an option in **Dock side**. For more information, navigate to [Change Microsoft Edge DevTools placement (Undock, Dock To Bottom, Dock To Left)][DevtoolsGuideDocking].  

:::image type="complex" source="./media/devtools-intro-docking-menu.msft.png" alt-text="Screenshot of the Dock side menu in DevTools" lightbox="./media/devtools-intro-docking-menu.msft.png":::
   Screenshot of the Dock side menu in DevTools  
:::image-end:::  

In **Dock side**, you can choose any of the following layout options.

*   Undock into separate window, which is useful when working with several monitors or if you need to work on a full screen app. 
*   Dock to left or Dock to right, which helps to keep the tools side-by-side with your web product, and is excellent when [Emulating mobile devices][DevtoolsGuideDeviceMode]. These dock options work best with high resolution displays.  
*   Dock to bottom, which is useful when you don't have enough horizontal display space, or you're debugging long text in the DOM or Console.

:::row:::
   :::column span="":::
      :::image type="complex" source="./media/devtools-intro-docking-left.msft.png" alt-text="Select `Dock To Left`" lightbox="./media/devtools-intro-docking-left.msft.png":::
         Select `Dock To Left`  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="media/devtools-intro-docking-bottom.msft.png" alt-text="Select `Dock To Bottom`" lightbox="media/devtools-intro-docking-bottom.msft.png":::
         Select `Dock To Bottom`
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
      :::image type="complex" source="media/devtools-intro-docking-own-window.msft.png" alt-text="Select `Undock into separate window`" lightbox="media/devtools-intro-docking-own-window.msft.png":::
         Select `Undock into separate window`  
      :::image-end:::  
   :::column-end:::
:::row-end::: 

## Learn about the core tools

DevTools give you an amazing amount of power to inspect, debug and change the web product currently displayed in the browser. Most of the tools show the changes live, which makes them incredibly useful to tweak the look and feel or functionality of a web project without the need to reload or build it. This also allows you to change web-based third party products on your computer. 

DevTools grew over a period of several years and we understand that they can be daunting to look at when you see them the first time. So let's quickly introduce the different parts. The main toolbar offers you a few sections. These are in order from left to right.

:::image type="complex" source="./media/devtools-intro-menu-bar.msft.png" alt-text="Screenshot of the menu bar of developer tools with labels explaining the different sections. In order: Inspect Tool, Device Emulation tool, Tools tab group, JavaScript errors, Issues, Settings, Feedback, Customize and Close." lightbox="./media/devtools-intro-menu-bar.msft.png":::
   Screenshot of the menu bar of developer tools with labels explaining the different sections. In order: Inspect Tool, Device Emulation tool, Tools tab group, JavaScript errors, Issues, Settings, Feedback, Customize and Close.  
:::image-end:::  

* The **Inspect Tool** allows you to select an element on the current page. Once activated you can move your mouse over different parts of the document to get detailed information about this element and a color overlay showing you its dimensions, padding and margin.

    :::image type="complex" source="./media/devtools-intro-inspect-tool.msft.png" alt-text="Screenshot of the inspect tool with the first headline of this document selected" lightbox="./media/devtools-intro-inspect-tool.msft.png":::
   Screenshot of the inspect tool with the first headline of this document selected  
    :::image-end:::  

* The [Device Emulation][DevtoolsGuideDeviceMode] tool displays the current web product in an emulated device mode. This allows you to run and test how your product reacts to resizing of the browser and gives you an estimation of the layout and behavior on a mobile device.

:::image type="complex" source="./media/devtools-intro-device-emulation.msft.png" alt-text="Screenshot of developer tools showing this website in an emulated mobile phone" lightbox="./media/devtools-intro-device-emulation.msft.png":::
   Screenshot of developer tools showing this website in an emulated mobile phone  
    :::image-end:::  

* The Tools tab group is a group of tabs that represent different tools that are used in different scenarios. You can customize each of these tools and they change depending on the context. Selecting the **>>** opens a dropdown list of additional tools. We introduce each of these tools later in this section.
* Next to these tabs are optional error and issues shortcuts. These shortcuts are displayed when there are JavaScript errors or issues on the current webpage. The error button shows a red circle with an X followed by the number of JavaScript errors. Selecting the shortcut takes you to the [Console][DevtoolsGuideConsole] to learn about the error. The issues button is a blue message icon followed by the number of issues. Selecting it takes you to the [Issues][DevtoolsGuideIssues] tool. 
* **Settings** which is displayed as a cog, opens a menu to change Preferences, turn on Experiments, and much more. 
* **Send Feedback** allows you to connect with the DevTools team to report problems, issues, or suggest ideas. Selecting this shortcut displays a feedback dialog to enter information to describe what happened and automatically includes a screenshot. 
* The **Customize and control Devtools** shortcut, which is displayed as **...**, allows you to define where to dock the DevTools, perform a search, or open different tools, and much more.

In the Tools tab group, you can open the different tools that are available in the DevTools. The following list describe the most commonly used tools in the DevTools.

*   **Welcome** includes information about the new features of DevTools, how to contact the team, and provides information about certain features.   
*   **Elements** allows you to edit and inspect HTML and CSS. You can edit both in the tool and you see the changes live in the browser.  
*   [Console][DevtoolsGuideConsole] allows you to display and filter log messages. These are automated logs of the browser like network requests and developer generated logs. You can also run JavaScript in the context of the current window or frame.
*   [Sources][DevtoolsGuideSources] is a code editor and JavaScript debugger. You can edit projects, maintain snippets and debug your current project.
*   [Network][DevtoolsGuideNetwork] enables you to monitor and inspect requests and responses from the network and browser cache. You can filter them to your needs and simulate different network conditions.

In addition to these popular tools, there are specialized tools available, such as **Performance**, **Memory**, **Application**, **Security** and **Audits**. 
        
## Power tip: Using the command menu

The DevTools provides lots of features and functionality to use with your web product. There are various ways to access the different parts of the DevTools, but the fastest way to access the features you need is using the command menu. For more information, navigate to [Run commands with the Microsoft Edge DevTools Command menu][DevtoolsGuideChromiumCommandMenu]. Open the command menu by:

*   Choosing `Control`+`Shift`+`P` \(Windows, Linux\) or `Command`+`Shift`+`P` \(macOS\). 
*   Selecting **Customize And Control DevTools** `...`, and then selecting **Run Command**.  

:::image type="complex" source="./media/devtools-intro-command-menu.msft.png" alt-text="Screenshot of the command menu in DevTools" lightbox="./media/devtools-intro-command-menu.msft.png":::
Screenshot of the command menu in DevTools  
:::image-end:::

The command menu allows you to type commands to show, hide, or run features in the DevTools. With the command menu open, enter the word **changes**, and then choose `Drawer Show Changes`. The **Changes** tool opens which is very useful when editing CSS, but is difficult to find in the DevTools UI. 

:::row:::
   :::column span="":::
      :::image type="complex" source="./media/devtools-intro-command-menu-show-changes.msft.png" alt-text="Command menu showing the options when typing `changes`" lightbox="./media/devtools-intro-command-menu-show-changes.msft.png":::
         Command menu showing the options when typing `changes`  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="./media/devtools-intro-showing-changes.msft.png" alt-text="DevTools with the Changes tool open" lightbox="./media/devtools-intro-showing-changes.msft.png":::
         DevTools with the Changes tool open  
      :::image-end:::  
   :::column-end:::
:::row-end::: 

## Customize DevTools

DevTools are customizable to meet your needs or the way you work. You can change settings by selecting **Settings** (the cog wheel shortcut on the top right), or by pressing `F1` or `?`. In **Preferences**, you can change most of the different parts of the DevTools. For example, you may want to use **Match the browser language** to use the same language settings in the DevTools that's used in your browser, or to change the theme of the DevTools using **Theme**. 

:::image type="complex" source="media/devtools-intro-all-settings.msft.png" alt-text="Screenshot of all the settings in DevTools" lightbox="./media/devtools-intro-all-settings.msft.png":::
Screenshot of all the settings in DevTools  
:::image-end:::

In addition to overall DevTools preferences, you can change the settings of advanced features such as:
*   [Workspaces][DevtoolsGuideWorkspaces]
*   Filter library code with the **Ignore List**
*   Define the **Devices** you want to include in the device and testing more. For more information, navigate to [Emulate mobile devices in Microsoft Edge DevTools][DevtoolsGuideDeviceMode] mode.
*   Select a network **Throttling** profile
*   Define simulated **Locations**.
*   Customize keyboard shortcuts. If you're already familiar with the Visual Studio Code shortcuts, we recommend selecting **Match shortcuts from preset** and selecting **Visual Studio Code** to match the DevTools shortcuts to the shortcuts in Visual Studio Code shortcuts.  

:::image type="complex" source="media/devtools-intro-match-keys.msft.png" alt-text="Screenshot of all the keyboard shortcuts and the menu to change them to the settings of Visual Studio Code" lightbox="./media/devtools-intro-match-keys.msft.png":::
Screenshot of all the keyboard shortcuts and the menu to change them to the settings of Visual Studio Code  
:::image-end:::

## Try experimental features

We keep trying new features as experiments in the DevTools. To get the full list of experiments, in **Settings**, choose **Experiments**. You can turn each of these experiments on or off. We'd love for you to help us decide which one of these experiments are valuable to you. For more information on these experiments, navigate to [Experimental features][DevtoolsGuideChromiumExperiment].
    
## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](./includes/contact-devtools-team-note.md)]  

If you want to preview the [latest features coming to the DevTools][DevtoolsGuideChromiumWhatsNewIndex], download [Microsoft Edge Canary][MicrosoftedgeinsiderDownload], which builds nightly.  

## See also  

*   [DevTools for Beginners: Get Started with HTML and the DOM][DevtoolsGuideChromiumBeginnersHtml]  
*   [Microsoft Edge (Chromium) DevTools Protocol][DevtoolsProtocolChromiumIndex]  

<!-- links -->  

[DevToolsOverrides]: /microsoft-edge/devtools-guide-chromium/javascript/overrides.md
[DevtoolsStorage]: /microsoft-edge/devtools-guide-chromium/storage
[DevtoolsNetwork]: /microsoft-edge/devtools-guide-chromium/network
[DevtoolsJavaScript]: /microsoft-edge/devtools-guide-chromium/javascript
[DevtoolsConsole]: /microsoft-edge/devtools-guide-chromium/console
[DevtoolsStyles]: /microsoft-edge/devtools-guide-chromium/inspect-styles
[DevtoolsWorkspaces]: /microsoft-edge/devtools-guide-chromium/workspaces
[DevtoolsSources]: /microsoft-edge/devtools-guide-chromium/sources
[DevtoolsIssues]: /microsoft-edge/devtools-guide-chromium/issues
[DevToolsDOM]: /microsoft-edge/devtools-guide-chromium/dom
[DevToolsDevices]: /microsoft-edge/devtools-guide-chromium/device-mode
[DevToolsPerformance]: /microsoft-edge/devtools-guide-chromium/evaluate-performance
[DevToolsMemory]: /microsoft-edge/devtools-guide-chromium/memory-problems
[DevToolsRendering]: /microsoft-edge/devtools-guide-chromium/rendering-tools
[DevtoolsGuideDocking]: /microsoft-edge/devtools-guide-chromium/customize/placement
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