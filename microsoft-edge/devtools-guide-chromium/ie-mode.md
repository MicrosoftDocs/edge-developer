---
description: IE Mode and the Microsoft Edge (Chromium) DevTools
title: IE Mode
author: robpaveza
ms.author: ropaveza
ms.date: 03/10/2019
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, ie11, internet explorer 11, ie mode
---

# IE Mode and the DevTools

This document describes how IE Mode integrates with the Microsoft Edge (Chromium) DevTools.

## Understanding IE Mode

IE Mode is a mechanism by which enterprises may specify a set of websites that, until now, only worked in Internet Explorer 11. When these websites are viewed in Microsoft Edge (Chromium), a full instance of Internet Explorer 11 is running and rendered within the tab. This allows enterprises to manage their ActiveX controls, VBScript code, and other legacy components that are not compatible with most modern web browsers.

Within IE Mode, the rendering process is entirely based in Internet Explorer 11. The Microsoft Edge (Chromium) manager process manages the lifetime of the rendering process, but it is constrained to the tab's lifetime on a given site or application. When a tab is rendering in IE Mode, a badge appears in the address bar for the given tab:

<!-- Once you get the VM working, take a picture of the badge here -->
![IE Mode badge in the address bar](./media/ie-mode-badge.png)

IE Mode will is available on all platforms that currently support Internet Explorer 11 such as Windows 10, Windows 7, Windows Server, etc. <!-- Confirm this with Adrian >

## Launching the DevTools on a tab in IE Mode

While on a tab in IE Mode, the DevTools are unavailable. Pressing `F12` or `Ctrl`+`Shift`+`I` will not launch the Microsoft Edge (Chromium) DevTools or the Internet Explorer 11 DevTools. **View Source** will launch Notepad and **Inspect Element** will not be visible in the context menu in IE Mode.

Instead, you will see a message that the DevTools are unavailable for web sites in IE Mode. This is because a number of components in the DevTools (like the Network and Performance tools) would break when the rendering engine switches from Chromium to Internet Explorer 11 in IE Mode.

<!-- Once you get the VM working, take a picture of the message when DevTools launch here -->
![IE Mode badge in the address bar](./media/ie-mode-devtools.png)

If you are developing or maintaining an Internet Explorer 11-based web site or application, we recommend navigating to the same page in Internet Explorer 11. On Windows 10, you can find the shortcut for Internet Explorer 11 on the Start Menu underneath Windows Accessories. On Windows 7, you can find Internet Explorer 11 on the main Start Menu. You can now launch the Internet Explorer DevTools by pressing `F12` or `Ctrl`+`Shift`+`I`. To learn more about how to use those tools, click [here](https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/samples/bg182326(v%3dvs.85)).

## Remote debugging and IE Mode

You can launch Microsoft Edge (Chromium) with remote debugging enabled, which is typically how tools like Visual Studio or VS Code launch Edge, from the command line:

`start msedge --remote-debugging-edge=9222`

When Microsoft Edge (Chromium) is launched with this command line argument, IE Mode will be unavailable. You can still navigate to web sites or applications that would otherwise be in IE Mode but the content will render via Chromium, not Internet Explorer 11. You can expect that the parts of those pages that rely on IE11, like ActiveX controls, will not render correctly. The IE Mode badge will still appear in the address bar but it will look like this:

IE Mode will remain unavailable until you completely close Microsoft Edge (Chromium).