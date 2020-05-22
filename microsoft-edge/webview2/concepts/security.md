---
description: Understand how to develop secure WebView2 applications
title: Best practices for developing secure WebView2 applications
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/21/2020
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html, security
---

# Best practices for developing secure WebView2 applications

When used correctly, hosting web content inside your native application offers certain advantages, such as ___. To avoid vulnerabilities that can arise from hosting web content, make sure to design your WebView2 application to closely monitor interactions between the web content and the host application. 

1. Treat all web content as insecure
    - Validate web messages and host object parameters before consuming them, because web messages and parameters can be malformed (unintentionally or maliciously) and cause the app to behave unexpectedly.
    - Always check the origin of the document running inside WebView2 and assess the trustworthiness of the content. 

2. Design specific web messages and host object interactions instead of using generic proxies.

3. Restrict web content functionality by modifying `CoreWebView2Settings` as follows:
    - Set `AreHostObjectsAllowed` to `false`, if you don’t expect the web content to access host objects.
    - Set `IsWebMessageEnabled` to `false`, if you don’t expect the web content to post web messages to your native application. 
    - Set **IsScriptEnabled** to `false`, if you don’t expect the web content to run script (i.e. showing static html like EULA)
    - Set **AreDefaultScriptDialogsEnabled** to `false`, if you don’t expect the web content to show `alert` or `prompt` popups

4.	Use the **NavigationStarting** and **FrameNavigationStarting** events to update settings according to the origin of the new page.
    1.	Block the navigation to pages and frames that you don't want your application to navigate to. 
    2.	Adjust **CoreWebView2Settings** according to the needs and trustworthiness of the new page in accordance with the principles above.

5.	Use the **ContentLoading** event, which fires when the WebView2 switches to a new document, to add and remove host objects using **AddHostObjectToScript** and **RemoveHostObjectFromScript** to minimize the number of exposed host objects.
