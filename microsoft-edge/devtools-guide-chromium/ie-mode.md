---
description: IE mode and the Microsoft Edge (Chromium) DevTools
title: Internet Explorer mode and the DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/04/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, ie11, internet explorer 11, ie mode
---

# Internet Explorer mode and the DevTools  

This article describes how Internet Explorer mode \(IE mode\) integrates with the Microsoft Edge \(Chromium\) DevTools.  

## Understanding IE mode  

IE mode is a mechanism for enterprises.  It allows you to specify a set of websites that, until now, only worked in Internet Explorer 11.  If you open a website in IE mode, the tab is a full instance of Internet Explorer 11 within Microsoft Edge \(Chromium\).  It runs and renders within the tab.  The functionality allows enterprises to manage compatibility with technologies that are currently not compatible with any modern web browsers.  Support for the following technologies is included in IE mode.  

*   IE document modes  
*   ActiveX controls  
*   other legacy components  

Within IE mode, the rendering process is entirely based in Internet Explorer 11.  The Chromium process manager manages the lifetime of the rendering process.  It is constrained to the lifetime of the tab on a specified website \(or app\).  When a tab renders in IE mode, a badge appears in the address bar for the specific tab.  

:::image type="complex" source="./media/ie-mode-badge.msft.png" alt-text="IE mode badge in the address bar" lightbox="./media/ie-mode-badge.msft.png":::
   IE mode badge in the address bar  
:::image-end:::  

IE mode is currently available on Windows 10 Version 1903 \(May 2019 Update\), but is coming soon to all supported Windows platforms.  

## Launching the DevTools on a tab in IE mode  

If you are trying to view the document mode of a web site in IE mode, choose the badge in the address bar.  

:::image type="complex" source="./media/ie-mode-badge-doc-mode.msft.png" alt-text="View document mode using IE mode badge" lightbox="./media/ie-mode-badge-doc-mode.msft.png":::
   View document mode using IE mode badge  
:::image-end:::  

If a tab is using IE mode, the DevTools do not work and the following conditions occurs.

*   If you select `F12` or select `Ctrl`+`Shift`+`I`, a blank instance of the Microsoft Edge \(Chromium\) DevTools is launched displays the following message.  
    
    ```text
    Developer Tools are not available in Internet Explorer mode.  To debug the page, open it in Internet Explorer 11.
    ``` 
    
1.  If you open a contextual menu \(right-click\) and choose **View Source**, Notepad is launched.  
1.  If you open a contextual menu \(right-click\), the **Inspect Element** is not visible.  

The reason that a number of the tools within the DevTools \(like the **Network** and **Performance** tools\) not working is the rendering engine switches from Chromium to Internet Explorer 11 in IE mode.  To provide feedback, choose the `:)` icon.  

:::image type="complex" source="./media/ie-mode-devtools.msft.png" alt-text="DevTools launched in IE mode" lightbox="./media/ie-mode-devtools.msft.png":::
   DevTools launched in IE mode  
:::image-end:::  

Test your Internet Explorer 11-based website \(or app\) in Internet Explorer 11 and IE mode.  

1.  Open Internet Explorer 11.  
    *   On Windows 10, locate the shortcut for Internet Explorer 11.
        1.  **Start Menu** > **Windows Accessories** > **Internet Explorer 11**.  
    *   On Windows 7, locate Internet Explorer 11.
        1.  **Start Menu** > **Internet Explorer 11**.  
1.  Launch the Internet Explorer DevTools 
    *   Select `F12`.  
    *   Hover anywhere, open a contextual menu \(right-click\), and choose **Inspect element**.  For more information about how to use those tools, navigate to [Using the F12 developer tools][PreviousVersionsWindowsInternetExplorerDeveloperSamplesbg182326].  

## Remote debugging and IE mode  

Launch Microsoft Edge \(Chromium\) with remote debugging turned on from the command-line interface.  Visual Studio, Visual Studio Code, and other development tools typically use a command to launch Microsoft Edge.  The following command launches Microsoft Edge with the remote debugging port set to `9222`.  

```shell
start msedge --remote-debugging-port=9222
```  

After you launch Microsoft Edge \(Chromium\) using a command-line argument, IE mode is unavailable.  You may still navigate to websites \(or apps\) that would otherwise display in IE mode. The website \(or app\) content renders using Chromium, not Internet Explorer 11.  Expect the parts of the pages that rely on IE11, such as ActiveX controls, to not render correctly.  The IE mode badge does not appear in the address bar.  

IE mode remains unavailable until you completely close and restart Microsoft Edge \(Chromium\).  

<!-- links -->  

[PreviousVersionsWindowsInternetExplorerDeveloperSamplesbg182326]: /previous-versions/windows/internet-explorer/ie-developer/samples/bg182326(v%3dvs.85) "Using the F12 developer tools | Microsoft Docs"  