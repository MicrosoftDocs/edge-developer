---
description: IE mode and the Microsoft Edge (Chromium) DevTools
title: Internet Explorer mode and the DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 02/12/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, ie11, internet explorer 11, ie mode
---
# Internet Explorer mode and the DevTools  

This article describes how Internet Explorer mode \(IE mode\) integrates with the Microsoft Edge \(Chromium\) DevTools.  

## Understanding IE mode  

IE mode allows enterprises to specify a list of web sites that only work in Internet Explorer 11.  When you navigate to these web sites in Microsoft Edge \(Chromium\), an instance of Internet Explorer 11 runs and renders the site in a tab.  The functionality allows enterprises to manage compatibility with technologies that are currently not compatible with any modern web browsers.  Support for the following technologies is included in IE mode.  

*   IE document modes  
*   ActiveX controls  
*   other legacy components  

In IE mode, the rendering process is based on Internet Explorer 11.  The Microsoft Edge \(Chromium\) process manager handles the lifetime of the rendering process.  It is constrained to the lifetime of the tab for a specific site \(or app\).  When a tab renders in IE mode, a badge appears in the address bar for the specific tab.  

:::image type="complex" source="../media/ie-mode-badge.msft.png" alt-text="IE mode badge in the address bar" lightbox="../media/ie-mode-badge.msft.png":::
   IE mode badge in the address bar  
:::image-end:::  

IE mode is currently available on Windows 10 Version 1903 \(May 2019 Update\), but is coming soon to all supported Windows platforms.  

## Launching the DevTools on a tab in IE mode  

If you are trying to view the document mode of a web site in IE mode, choose the badge in the address bar.  

:::image type="complex" source="../media/ie-mode-badge-doc-mode.msft.png" alt-text="View document mode using IE mode badge" lightbox="../media/ie-mode-badge-doc-mode.msft.png":::
   View document mode using IE mode badge  
:::image-end:::  

If a tab is using IE mode, the DevTools do not work and the following conditions occur.

*   If you select `F12` or select `Ctrl`+`Shift`+`I`, a blank instance of the Microsoft Edge \(Chromium\) DevTools is launched displays the following message.  
    
    ```text
    Developer Tools are not available in Internet Explorer mode.  To debug the page, open it in Internet Explorer 11.
    ```  
    
*   If you open a contextual menu \(right-click\) and choose **View Source**, Notepad is launched.  
*   If you open a contextual menu \(right-click\), the **Inspect Element** is not visible.  

The reason that a number of the tools within the DevTools \(like the **Network** and **Performance** tools\) do not work is the rendering engine switches from Chromium to Internet Explorer 11 in IE mode.  To provide feedback, navigate to [Getting in touch with the Microsoft Edge DevTools team](#getting-in-touch-with-the-microsoft-edge-devtools-team).  

:::image type="complex" source="../media/ie-mode-devtools.msft.png" alt-text="DevTools launched in IE mode" lightbox="../media/ie-mode-devtools.msft.png":::
   DevTools launched in IE mode  
:::image-end:::  

To test your Internet Explorer 11-based website \(or app\) in Internet Explorer 11 and IE mode, perform the following steps.  

1.  Open Internet Explorer 11.  
    *   On Windows 10, locate the shortcut for Internet Explorer 11.
        1.  **Start Menu** > **Windows Accessories** > **Internet Explorer 11**.  
    *   On Windows 7, locate Internet Explorer 11.
        1.  **Start Menu** > **Internet Explorer 11**.  
1.  In Internet Explorer 11, open the same webpage.  
1.  Launch the Internet Explorer DevTools.  
    *   Select `F12`.  
    *   Hover anywhere, open a contextual menu \(right-click\), and choose **Inspect element**.  For more information about how to use those tools, navigate to [Using the F12 developer tools][PreviousVersionsWindowsInternetExplorerDeveloperSamplesbg182326].  

If Internet Explorer 11 is not available, such as on Windows 11, you can use IEChooser to launch the Internet Explorer DevTools to debug the content of your IE mode tabs. To use IEChooser, perform the following steps.

1.  Open IEChooser.
    1. Open the Run dialog box. For example, press the `Windows logo key` + `R`.
    2. Enter `%systemroot%\system32\f12\IEChooser.exe`, and then select **Ok**.
2.  In IEChooser, select the entry for the IE mode tab.


## Remote debugging and IE mode  

Launch Microsoft Edge \(Chromium\) with remote debugging turned on from the command-line interface.  Microsoft Visual Studio, Microsoft Visual Studio Code, and other development tools typically run a command to launch Microsoft Edge.  The following command launches Microsoft Edge with the remote debugging port set to `9222`.  

```shell
start msedge --remote-debugging-port=9222
```  

After you launch Microsoft Edge \(Chromium\) using a command-line argument, IE mode is unavailable.  You may still navigate to websites \(or apps\) that are otherwise displayed in IE mode.  The website \(or app\) content renders using Chromium, not Internet Explorer 11.  Expect the parts of the webpages that rely on IE11, such as ActiveX controls, to not render correctly.  The IE mode badge does not appear in the address bar.  

IE mode remains unavailable until you completely close and restart Microsoft Edge \(Chromium\).  

## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  

[PreviousVersionsWindowsInternetExplorerDeveloperSamplesbg182326]: /previous-versions/windows/internet-explorer/ie-developer/samples/bg182326(v%3dvs.85) "Using the F12 developer tools | Microsoft Docs"  
