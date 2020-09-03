---
description: IE mode and the Microsoft Edge (Chromium) DevTools
title: Internet Explorer mode and the DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/02/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, ie11, internet explorer 11, ie mode
---

# Internet Explorer mode and the DevTools  

This topic describes how Internet Explorer mode \(IE mode\) integrates with the Microsoft Edge \(Chromium\) DevTools.  

## Understanding IE mode  

IE mode is a mechanism by which enterprises may specify a set of web sites that, until now, only worked in Internet Explorer 11.  When the web sites are viewed in Microsoft Edge \(Chromium\), a full instance of Internet Explorer 11 is running and rendered within the tab.  The functionality allows enterprises to manage compatibility for IE document modes, ActiveX controls, and other legacy components that are currently not compatible with any modern web browsers.  

Within IE mode, the rendering process is entirely based in Internet Explorer 11.  The Microsoft Edge \(Chromium\) manager process manages the lifetime of the rendering process, but it is constrained to the lifetime of the tab on a given site or application.  When a tab is rendering in IE mode, a badge appears in the address bar for the specific tab:  

:::image type="complex" source="./media/ie-mode-badge.msft.png" alt-text="IE mode badge in the address bar" lightbox="./media/ie-mode-badge.msft.png":::
   IE mode badge in the address bar  
:::image-end:::  

IE mode is currently available on Windows 10 Version 1903 \(May 2019 Update\) but is coming soon to all supported Windows platforms.  

## Launching the DevTools on a tab in IE mode  

If you are trying to view the document mode of a web site in IE mode, click the badge in the address bar.  

:::image type="complex" source="./media/ie-mode-badge-doc-mode.msft.png" alt-text="View document mode using IE mode badge" lightbox="./media/ie-mode-badge-doc-mode.msft.png":::
   View document mode using IE mode badge  
:::image-end:::  

While on a tab in IE mode, the DevTools do not work.  Pressing `F12` or `Ctrl`+`Shift`+`I` only launches a blank instance of the Microsoft Edge \(Chromium\) DevTools with a message that displays:  "Developer Tools are not available in Internet Explorer mode.  To debug the page, open it in Internet Explorer 11."  **View Source** launches Notepad and **Inspect Element** is not be visible in the context menu in IE mode.  

The result is because a number of components in the DevTools \(like the Network and Performance tools\) would break when the rendering engine switches from Chromium to Internet Explorer 11 in IE mode.  To provide feedback, click the `:)` icon.  

:::image type="complex" source="./media/ie-mode-devtools.msft.png" alt-text="DevTools launched in IE mode" lightbox="./media/ie-mode-devtools.msft.png":::
   DevTools launched in IE mode  
:::image-end:::  

If you are developing or maintaining an Internet Explorer 11-based web site or application, we recommend navigating to the same page in Internet Explorer 11.  On Windows 10, locate the shortcut for Internet Explorer 11 on the Start Menu underneath Windows Accessories.  On Windows 7, locate Internet Explorer 11 on the main Start Menu.  Then launch the Internet Explorer DevTools by pressing `F12` or clicking **Inspect element** in the context menu.  To learn more about how to use those tools, click [here](/previous-versions/windows/internet-explorer/ie-developer/samples/bg182326(v%3dvs.85)).  

## Remote debugging and IE mode  

Launch Microsoft Edge \(Chromium\) with remote debugging enabled, which is typically how tools like Visual Studio or Visual Studio Code launch Edge, from the command-line:  

```shell
start msedge --remote-debugging-port=9222
```  

When Microsoft Edge \(Chromium\) is launched with the previous command-line argument, IE mode is unavailable.  You are able to still navigate to web sites or applications that would otherwise be in IE mode but the content renders using Chromium, not Internet Explorer 11.  Expect the parts of the pages that rely on IE11, like ActiveX controls, to not render correctly.  The IE mode badge no longer appears in the address bar.  

IE mode remains unavailable until you completely close Microsoft Edge \(Chromium\).  
