---
description: Understand how to develop secure WebView2 applications
title: Best practices for developing secure WebView2 applications
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/02/2020
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html, security
---

# Best practices for developing secure WebView2 applications  

The [WebView2 control][Webview2Main] allows developers to host web content in the native applications. When used correctly, hosting web content offers several advantages, such as using web-based UI, accessing features of the web platform, sharing code cross-platform, and so on.  To avoid vulnerabilities that can arise from hosting web content, make sure to design your WebView2 application to closely monitor interactions between the web content and the host application.  

1.  Treat all web content as insecure.  
    *   Validate web messages and host object parameters before consuming each, because web messages and parameters can be malformed \(unintentionally or maliciously\) and cause the app to behave unexpectedly.
    *   Always check the origin of the document running inside WebView2 and assess the trustworthiness of the content.  
1.  Design specific web messages and host object interactions instead of using generic proxies.  
1.  Set the following options to restrict web content functionality by modifying [ICoreWebView2Settings (Win32)][Webview2ReferenceWin3209622Icorewebview2settings] or [CoreWebView2Settings (.NET)][Webview2ReferenceWin3209628MicrosoftWebWebview2CoreCorewebview2settings].  
    *   Set `AreHostObjectsAllowed` to `false`, if you do not expect the web content to access host objects.  
    *   Set `IsWebMessageEnabled` to `false`, if you do not expect the web content to post web messages to your native application.  
    *   Set `IsScriptEnabled` to `false`, if you do not expect the web content to run scripts \(for example, when showing static html content\).  
    *   Set `AreDefaultScriptDialogsEnabled` to `false`, if you do not expect the web content to show `alert` or `prompt` dialog boxes.  
1.	In the following steps, use the `NavigationStarting` and `FrameNavigationStarting` events to update settings based on the origin of the new page.  
    1.	To prevent your application from navigating to certain pages, use the events to check and then block page or frame navigation.  
    1.	When navigating to a new page, you may need to adjust the property values on [ICoreWebView2Settings (Win32)][Webview2ReferenceWin3209622Icorewebview2settings] or [CoreWebView2Settings (.NET)][Webview2ReferenceDotnetMicrosoftWebWebview2CoreCorewebview2settings] as previously described.  
1.  When navigating to a new document, use the `ContentLoading` event to remove exposed host objects using `RemoveHostObjectFromScript`.  

<!--## Security

Always check the Source property of the WebView before using `ExecuteScript`, `PostWebMessageAsJson`, `PostWebMessageAsString`, or any other method to send information into the WebView. The WebView may have navigated to another page via the end user interacting with the page or script in the page causing navigation. Similarly, be very careful with `AddScriptToExecuteOnDocumentCreated`. All future `navigations` run the same script and if it provides access to information intended only for a certain origin, any HTML document may have access.

When examining the result of an `ExecuteScript` method call, a `WebMessageReceived` event, always check the Source of the sender, or any other mechanism of receiving information from an HTML document in a WebView validate the URI of the HTML document is what you expect.

When constructing a message to send into a WebView, prefer using `PostWebMessageAsJson` and construct the JSON string parameter using a JSON library. This avoids any potential accidents of encoding information into a JSON string or script and ensure no attacker controlled input can modify the rest of the JSON message or run arbitrary script. -->  

<!-- links -->  

[Webview2Main]: ../index.md "Introduction to Microsoft Edge WebView2 (Preview) | Microsoft Docs"  

[Webview2ReferenceWin3209622Icorewebview2settings]: ../reference/win32/0-9-622/icorewebview2settings.md "interface ICoreWebView2Settings | Microsoft Docs"  

[Webview2ReferenceDotnetMicrosoftWebWebview2CoreCorewebview2settings]: /dotnet/api/microsoft.web.webview2.core.corewebview2settings "CoreWebView2Settings Class (Microsoft.Web.WebView2.Core) | Microsoft Docs"  
