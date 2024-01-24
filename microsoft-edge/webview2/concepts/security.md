---
title: Develop secure WebView2 apps
description: How to develop secure WebView2 applications.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 10/14/2020
---
# Develop secure WebView2 apps
<!-- old title: # Best practices for developing secure WebView2 applications -->

The [WebView2 control](../index.md) allows developers to host web content in the native applications.  When used correctly, hosting web content offers several advantages, such as using web-based UI, accessing features of the web platform, sharing code cross-platform, and so on.  To avoid vulnerabilities that can arise from hosting web content, make sure to design your WebView2 application to closely monitor interactions between the web content and the host application.

*  Treat all web content as insecure:

   *  Validate web messages and host object parameters before consuming them, because web messages and parameters can be malformed (unintentionally or maliciously) and can cause the app to behave unexpectedly.

   *  Always check the origin of the document that's running inside WebView2, and assess the trustworthiness of the content.

*  Design specific web messages and host object interactions, instead of using generic proxies.

*  Set the following options to restrict web content functionality, by modifying [ICoreWebView2Settings (Win32)](/microsoft-edge/webview2/reference/win32/icorewebview2settings) or [CoreWebView2Settings (.NET)](/dotnet/api/microsoft.web.webview2.core.corewebview2settings):

   *  Set `AreHostObjectsAllowed` to `false`, if you don't expect the web content to access host objects.

   *  Set `IsWebMessageEnabled` to `false`, if you don't expect the web content to post web messages to your native application.

   *  Set `IsScriptEnabled` to `false`, if you don't expect the web content to run scripts (for example, when showing static HTML content).

   *  Set `AreDefaultScriptDialogsEnabled` to `false`, if you don't expect the web content to show `alert` or `prompt` dialogs.

*  Update settings based on the origin of the new page:

   *  To prevent your application from navigating to certain pages, use the `NavigationStarting` and `FrameNavigationStarting` events to check page or frame navigation, and then conditionally block the navigation.

   *  When navigating to a new page, you may need to adjust the property values on [ICoreWebView2Settings (Win32)](/microsoft-edge/webview2/reference/win32/icorewebview2settings) or [CoreWebView2Settings (.NET)](/dotnet/api/microsoft.web.webview2.core.corewebview2settings), as previously described.

*  When navigating to a new document, use the `ContentLoading` event and `RemoveHostObjectFromScript` to remove exposed host objects.

*  WebView2 cannot be run as a system user.  This restriction blocks scenarios such as building a Credential Provider.


<!-- ====================================================================== -->
<!--
## Security

Always check the Source property of the WebView2 control before using `ExecuteScript`, `PostWebMessageAsJson`, `PostWebMessageAsString`, or any other method to send information into the WebView2 control. The WebView2 control may have navigated to another page via the end user interacting with the page or script in the page causing navigation. Similarly, be very careful with `AddScriptToExecuteOnDocumentCreated`. All future `navigations` run the same script and if it provides access to information intended only for a certain origin, any HTML document may have access.

When examining the result of an `ExecuteScript` method call, a `WebMessageReceived` event, always check the Source of the sender, or any other mechanism of receiving information from an HTML document in a WebView2 control validate the URI of the HTML document is what you expect.

When constructing a message to send into a WebView2 control, prefer using `PostWebMessageAsJson` and construct the JSON string parameter using a JSON library. This avoids any potential accidents of encoding information into a JSON string or script and ensure no attacker controlled input can modify the rest of the JSON message or run arbitrary script. -->
