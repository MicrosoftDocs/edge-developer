---  
description: Get to know the Microsoft Edge (Chromium) Developer Tools  
title: Microsoft Edge (Chromium) Developer Tools overview  
author: MSEdgeTeam  
ms.author: msedgedevrel  
ms.date: 04/07/2021  
ms.topic: conceptual  
ms.prod: microsoft-edge  
ms.technology: devtools  
keywords: microsoft edge, web development, f12 tools, devtools  
---  
# Microsoft Edge (Chromium) Developer Tools overview  

When you install Microsoft Edge, you get a browser. Also, you get a powerful way to inspect, debug, and even create web projects.  The Developer Tools shipped with the browser are based on the tools in the Chromium open-source project, so you may already be familiar with the tools.  To keep descriptions shorter in this article, the `Microsoft Edge Developer Tools` are now referred to as `DevTools` .  

Use DevTools to review and learn more about the following development tasks.  

*   [Inspect and change the current webpage][DevtoolsGuideDomIndex] live in the browser.  
*   [Emulate how your product behaves on different devices][DevtoolsGuideDeviceModeIndex] and simulate a mobile environment complete with different network conditions.  
*   [Inspect, tweak, and change the styles of elements][DevtoolsGuideInspectStylesEditFonts] in the webpage using live tools with a visual interface.  
*   [Debug your JavaScript][DevtoolsGuideJavascriptIndex] using breakpoint debugging and with the [live console][DevtoolsGuideConsoleIndex].  
*   Find [accessibility, performance, compatibility, and security issues][DevtoolsGuideIssuesIndex] in your products and learn how to use DevTools to fix each.  
*   [Inspect the network traffic][DevtoolsGuideNetworkIndex] and review the location of the problems.  
*   [Inspect where the browser stored content][DevtoolsGuideStorageSessionstorage] in various formats.  
*   [Evaluate the performance][DevtoolsGuideEvaluatePerformanceIndex] of your product to find [memory problems][DevtoolsGuideMemoryProblemsIndex] and [rendering issues][DevtoolsGuideRenderingToolsIndex].  
*   [Use a development environment][DevtoolsGuideSourcesIndex] to [sync changes in DevTools with the file system][DevtoolsGuideWorkspacesIndex] and [override files][DevtoolsGuideJavascriptOverrides] from the web.  
    
<!-- Is the link meant to be local or session storage for "inspect where the browser stored content"? -->  

And a lot more.  It all starts when you open DevTools and customize each tool to your needs.  

## Open the DevTools  

To open and explore the DevTools, use one any of the following actions.  

*   Hover on any element on the webpage, open the contextual menu \(right-click\), and then choose **Inspect**.  This action opens the **Elements** tool.  
*   Select `F12`.  
*   Select `Ctrl`+`Shift`+`I` on Windows/Linux or `Command`+`Option`+`I` on macOS.  
    
:::row:::  
   :::column span="":::  
      :::image type="complex" source="./media/devtools-intro-inspect.msft.png" alt-text="Choose Inspect from the contextual menu on any element" lightbox="./media/devtools-intro-inspect.msft.png":::  
         Choose **Inspect** from the contextual menu on any element  
      :::image-end:::  
   :::column-end:::  
   :::column span="":::  
      :::image type="complex" source="./media/devtools-intro-inspect-devtools-open.png" alt-text="The DevTools opens with the chosen element highlighted" lightbox="./media/devtools-intro-inspect-devtools-open.png":::  
         The DevTools opens with the chosen element highlighted  
      :::image-end:::  
   :::column-end:::  
:::row-end:::  

There are two main ways to interact with the DevTools.
*   Use the mouse  
*   [Keyboard shortcuts][DevtoolsGuideShortcutsIndex].  Keyboard shortcuts provide a quick way to access functionality and are needed for accessibility.  The Microsoft Edge DevTools team works hard to make all the tools available using the keyboard and assistive technologies such as screen readers.  For more information about how to open the different features in the DevTools, navigate to [Microsoft Edge DevTools keyboard shortcuts][DevtoolsGuideOpenIndex].  

## Dock the DevTools in your browser  

When you open the DevTools, it docks to the left of your browser.  To change the docked location of the DevTools, complete the following actions.  

1.  Choose the **Customize And Control DevTools** \(`...`\) button.  
1.  To the right of **Placement of the DevTools relative to the page** \(**Dock side**\), choose a **Dock side** option.  
    
For more information, navigate to [Change Microsoft Edge DevTools placement (Undock, Dock To Bottom, Dock To Left)][DevtoolsGuideCustomizePlacement].  

:::image type="complex" source="./media/devtools-intro-docking-menu.msft.png" alt-text="Screenshot of the Dock side menu in DevTools" lightbox="./media/devtools-intro-docking-menu.msft.png":::  
   Screenshot of the Dock side menu in DevTools  
:::image-end:::  

In **Dock side**, choose any of the following layout options.  

*   **Undock into separate window**.   Helps you work with several monitors or if you need to work on a full screen app.  
*   **Dock to left** or **Dock to right**.  Helps you keep the DevTools side by side with your web product, and is excellent when you emulate mobile devices.  The **Dock to left** and **Dock to right** options work best with high-resolution displays.  For more information about emulation devices, navigate to [Emulate mobile devices in Microsoft Edge DevTools][DevtoolsGuideDeviceModeIndex].  
*   **Dock to bottom**.  Helps you when you do not have enough horizontal display space, or you want to debug long text in the DOM or **Console**.  
    
:::row:::  
   :::column span="":::  
      :::image type="complex" source="./media/devtools-intro-docking-left.msft.png" alt-text="Choose Dock To Left" lightbox="./media/devtools-intro-docking-left.msft.png":::  
         Choose **Dock To Left**  
      :::image-end:::  
   :::column-end:::  
   :::column span="":::  
      :::image type="complex" source="media/devtools-intro-docking-bottom.msft.png" alt-text="Choose Dock To Bottom" lightbox="media/devtools-intro-docking-bottom.msft.png":::  
         Choose **Dock To Bottom**  
      :::image-end:::  
   :::column-end:::  
:::row-end:::  
:::row:::  
   :::column span="":::  
      :::image type="complex" source="media/devtools-intro-docking-right.msft.png" alt-text="Choose Dock To Right" lightbox="media/devtools-intro-docking-right.msft.png":::  
         Choose **Dock To Right**  
      :::image-end:::  
   :::column-end:::  
   :::column span="":::  
      :::image type="complex" source="media/devtools-intro-docking-own-window.msft.png" alt-text="Choose Undock into separate window" lightbox="media/devtools-intro-docking-own-window.msft.png":::  
         Choose **Undock into separate window**  
      :::image-end:::  
   :::column-end:::  
:::row-end:::  

## Learn about the core tools  

DevTools give you an amazing amount of power to inspect, debug, and change the web product currently displayed in the browser.  Most of the tools display the changes live.  Live updates make the tools incredibly useful to refine the appearance and navigation or functionality of a web project without the need to refresh or build it.  The DevTools also allow you to change web-based third-party products on your computer.  

DevTools grew over a period of several years.  You may assume that DevTools are difficult to learn when you first open any of tools.  The following text quickly introduces the different parts.  The main toolbar offers you a few sections and the sections are ordered from left to right.  

:::image type="complex" source="./media/devtools-intro-menu-bar.msft.png" alt-text="Screenshot of the menu bar of the DevTools with labels that explain the different sections.  In order: Inspect tool, Device Emulation tool, Tools tab group, JavaScript errors, Issues, Settings, Feedback, Customize, and Close." lightbox="./media/devtools-intro-menu-bar.msft.png":::  
   Screenshot of the menu bar of the DevTools with labels that explain the different sections.  In order: Inspect tool, Device Emulation tool, Tools tab group, JavaScript Errors, Issues, Settings, Feedback, Customize, and Close.  
:::image-end:::  

*   The Inspect tool allows you to choose an element on the current webpage.  After you activate it, you may move your mouse over different parts of the webpage to get detailed information about the element and a color overlay to display dimensions, padding, and margin.  
    
    :::image type="complex" source="./media/devtools-intro-inspect-tool.msft.png" alt-text="The Inspect tool with the first headline of this article chosen" lightbox="./media/devtools-intro-inspect-tool.msft.png":::  
       The Inspect tool with the first headline of this article chosen  
    :::image-end:::  
    
*   The [Device Emulation][DevtoolsGuideDeviceModeIndex] tool displays the current web product in an emulated device mode.  The **Device Emulation** tool allows you to run and test how your product reacts when you resize the browser.  It also gives you an estimation of the layout and behavior on a mobile device.  
    
    :::image type="complex" source="./media/devtools-intro-device-emulation.msft.png" alt-text="Screenshot of the DevTools display of this article in an emulated mobile phone" lightbox="./media/devtools-intro-device-emulation.msft.png":::  
       Screenshot of the DevTools display of this article in an emulated mobile phone  
    :::image-end:::  
    
*   The Tools tab group is a group of tabs that represent different tools that are used in different scenarios.  You may customize each of the tools and each tool may change based on the context.  To open a dropdown menu of more tools, choose the **More tabs** \(`>>`\) button.  Each of the tools is introduced later in the following section.  
*   Next to the Tools tab group are optional error and issues shortcuts.  The shortcuts display when JavaScript errors or issues occur on the current webpage.  The **Open Console to view # errors, # warnings** \(**JavaScript Errors**\) button displays a red circle with an `X` followed by the number of JavaScript errors.  To open the [Console][DevtoolsGuideConsoleIndex] and learn about the error, choose the **JavaScript Errors** button.  The **Open Issues to view # issues** \(**Issues**\) button is a blue message icon followed by the number of issues.  To open the [Issues][DevtoolsGuideIssuesIndex] tool, choose **Issues** button.  
*   The **Settings** button displays a gear icon.  To open DevTools **Settings** webpage, choose the **Settings** button.  The **Settings** webpage displays a menu to change **Preferences**, turn on **Experiments**, and much more.  
*   The **Send Feedback** button displays torso with a chat bubble next to it.  To open the **Send Feedback** dialog, choose the **Send Feedback** button.  The **Send Feedback** dialog allows you to enter information to describe what happened and automatically includes a screenshot.  Use it to connect with the DevTools team to report problems, issues, or suggest ideas.  
*   The **Customize and control Devtools** \(`...`\) button opens a dropdown menu.  It allows you to define where to dock the DevTools, search, open different tools, and much more.  
    
In the Tools tab group, you may open the different tools that are available in the DevTools.  The following list describes the most commonly used tools in the DevTools.  

*   **Welcome**.  Includes information about the new features of DevTools, how to contact the team, and provides information about certain features.  
*   **Elements**.  Allows you to edit or inspect HTML and CSS.  You may edit both in the tool and display the changes live in the browser.  
*   [Console][DevtoolsGuideConsoleIndex].  Allows you to display and filter log messages.  Log messages are automated logs of the browser like network requests and developer-generated logs.  You may also run JavaScript directly in the **Console** in the context of the current window or frame.  
*   [Sources][DevtoolsGuideSourcesIndex].  A code editor and JavaScript debugger.  You may edit projects, maintain snippets, and debug your current project.  
*   [Network][DevtoolsGuideNetworkIndex].  Allows you to monitor and inspect requests or responses from the network and browser cache.  You may filter requests and responses to fit your needs and simulate different network conditions.  Other specialized tools are also available, such as **Performance**, **Memory**, **Application**, **Security**, and **Audits**.  

## Power tip: Use the command menu  

The DevTools provides lots of features and functionality to use with your web product.  Access the different parts of the DevTools in many ways, but the fastest way to access the features you need is to use the command menu.  For more information, navigate to [Run commands with the Microsoft Edge DevTools Command menu][DevtoolsGuideCommandMenuIndex].  To open the command menu, complete one of the following actions.  

*   Select `Control`+`Shift`+`P` \(Windows, Linux\) or `Command`+`Shift`+`P` \(macOS\).  
*   Choose **Customize And Control DevTools** \(`...`\), and then choose **Run Command**.  

:::image type="complex" source="./media/devtools-intro-command-menu.msft.png" alt-text="Screenshot of the command menu in DevTools" lightbox="./media/devtools-intro-command-menu.msft.png":::  
Screenshot of the command menu in DevTools  
:::image-end:::  

The command menu allows you to type commands to display, hide, or run features in the DevTools.  With the command menu open, enter the word **changes**, and then choose **Drawer Show Changes**.  The **Changes** tool opens which is useful when you edit CSS, but is difficult to find in the DevTools UI.  

:::row:::  
   :::column span="":::  
      :::image type="complex" source="./media/devtools-intro-command-menu-show-changes.msft.png" alt-text="Command menu displays the options after you type changes" lightbox="./media/devtools-intro-command-menu-show-changes.msft.png":::  
         Command menu displays the options after you type `changes`  
      :::image-end:::  
   :::column-end:::  
   :::column span="":::  
      :::image type="complex" source="./media/devtools-intro-showing-changes.msft.png" alt-text="DevTools with the Changes tool open" lightbox="./media/devtools-intro-showing-changes.msft.png":::  
         DevTools with the **Changes** tool open  
      :::image-end:::  
   :::column-end:::  
:::row-end:::  

## Customize the DevTools  

DevTools are customizable to meet your needs or the way you work.  To change settings, complete one of the following actions.  

*   Choose **Settings** \(the gear icon on the top right\)  
*   Select `F1` or `?`.  
    
In the **Preferences** section, you may change several parts of the DevTools.  For example, you may use the **Match the browser language** setting to use the same language in the DevTools that is use in your browser.  For another example, use the **Theme** setting to change the theme of the DevTools.  

:::image type="complex" source="media/devtools-intro-all-settings.msft.png" alt-text="Screenshot of all the settings in DevTools" lightbox="./media/devtools-intro-all-settings.msft.png":::  
   Screenshot of all the settings in DevTools  
:::image-end:::  

You may also change the settings of advanced features including the following features.    

*   [Workspaces][DevtoolsGuideWorkspacesIndex].  
*   Filter library code with the **Ignore List**.  
*   Define the **Devices** you want to include in the device simulation and test mode.  For more information, navigate to [Emulate mobile devices in Microsoft Edge DevTools][DevtoolsGuideDeviceModeIndex].  
*   Choose a network **Throttling** profile.  
*   Define simulated **Locations**.  
*   Customize keyboard shortcuts.  To use the same shortcuts in the DevTools as Visual Studio Code, complete the following actions.  
    1.  Choose **Match shortcuts from preset**.  
    1.  Choose **Visual Studio Code**.  
        
    :::image type="complex" source="./media/devtools-intro-match-keys.msft.png" alt-text="Screenshot of all the keyboard shortcuts and the menu to match each to the shortcuts in Visual Studio Code" lightbox="./media/devtools-intro-match-keys.msft.png":::  
       Screenshot of all the keyboard shortcuts and the menu to match each to the shortcuts in Visual Studio Code  
    :::image-end:::  
    
## Try experimental features  

The DevTools team provides new features as experiments in the DevTools.  To get the full list of experiments, navigate to the DevTools **Settings**, and then choose **Experiments**.  You may turn each of the experiments on or off.  Help decide which one of the experiments is valuable to you.  For more information on the experiments, navigate to [Experimental features][DevtoolsGuideExperimentalFeaturesIndex].  

## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](./includes/contact-devtools-team-note.md)]  

If you want to preview the [latest features coming to the DevTools][DevtoolsGuideWhatsNew202102Devtools], download [Microsoft Edge Canary][MicrosoftedgeinsiderDownload], which builds nightly.  

## See also  

*   [DevtoolsGuide for Beginners: Get Started with HTML and the DOM][DevtoolsGuideBeginnersHtml]  
*   [Microsoft Edge (Chromium) DevTools Protocol][DevtoolsProtocolIndex]  
    
<!-- links -->  

[DevtoolsGuideBeginnersHtml]: ./beginners/html.md "DevTools for beginners: Get started with HTML and the DOM | Microsoft Docs"  
[DevtoolsGuideCommandMenuIndex]: ./command-menu/index.md "Run commands with the Microsoft Edge DevTools Command menu | Microsoft Docs"  
[DevtoolsGuideConsoleIndex]: ./console/index.md "Console overview | Microsoft Docs"  
[DevtoolsGuideCustomizePlacement]: ./customize/placement.md "Change Microsoft Edge DevTools placement (Undock, Dock To Bottom, Dock To Left) | Microsoft Docs"  
[DevtoolsGuideDeviceModeIndex]: ./device-mode/index.md "Emulate mobile devices in Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsGuideDomIndex]: ./dom/index.md "Get started with viewing and changing the DOM | Microsoft Docs"  
[DevtoolsGuideEvaluatePerformanceIndex]: ./evaluate-performance/index.md "Get started with analyzing Runtime performance | Microsoft Docs"  
[DevtoolsGuideExperimentalFeaturesIndex]: ./experimental-features/index.md "Experimental features | Microsoft Docs"  
[DevtoolsGuideMemoryProblemsIndex]: ./memory-problems/index.md "Fix memory problems | Microsoft Docs"  
[DevtoolsGuideInspectStylesEditFonts]: ./inspect-styles/edit-fonts.md "Edit CSS font styles and settings in the Styles pane | Microsoft Docs"  
[DevtoolsGuideIssuesIndex]: ./issues/index.md "Find and fix problems using the Issues tool | Microsoft Docs"  
[DevtoolsGuideJavascriptIndex]: ./javascript/index.md "Get started with debugging JavaScript in Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsGuideJavascriptOverrides]: ./javascript/overrides.md "Override webpage resources with local copies using Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsGuideNetworkIndex]: ./network/index.md "Inspect network activity in Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsGuideOpenIndex]: ./open/index.md "Open Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsGuideRenderingToolsIndex]: ./rendering-tools/index.md "Analyze runtime performance | Microsoft Docs"  
[DevtoolsGuideShortcutsIndex]: ./shortcuts/index.md "Microsoft Edge DevTools keyboard shortcuts | Microsoft Docs"  
[DevtoolsGuideSourcesIndex]: ./sources/index.md "Sources tool overview | Microsoft Docs"  
[DevtoolsGuideStorageSessionstorage]: ./storage/sessionstorage.md "View and edit session storage with Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsGuideWhatsNew202102Devtools]: ./whats-new/2021/02/devtools.md "What's New In DevTools (Microsoft Edge 90) | Microsoft Docs"  
[DevtoolsGuideWorkspacesIndex]: ./workspaces/index.md "Edit files with Workspaces | Microsoft Docs"  
[DevtoolsProtocolIndex]: ../devtools-protocol-chromium/index.md "Microsoft Edge (Chromium) DevTools Protocol overview | Microsoft Docs"  

[MicrosoftEdgeAddonsExtensions]: https://microsoftedge.microsoft.com/addons/category/Edge-Extensions "Microsoft Edge Add-ons"  

[MicrosoftedgeinsiderDownload]: https://www.microsoftedgeinsider.com/download "Download Microsoft Edge Insider Channels"  

[GoogleChromeWebstoreExtensions]: https://chrome.google.com/webstore/category/extensions "Extensions | Chrome Web Store"  
