---
title: Develop secure WebView2 apps
description: How to develop secure WebView2 applications.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 06/27/2024
---
# Develop secure WebView2 apps

WebView2 allows developers to host web content in the native applications.  When used correctly, hosting web content offers several advantages, such as using web-based UI, accessing features of the web platform, or sharing code cross-platform.

In a web browser, websites are granted limited powers in a sandboxed environment.  However, when hosting web content in a native application, the web content can access the native application's resources and APIs.  This can lead to security vulnerabilities if the web content is not properly isolated from the host application.  To avoid these vulnerabilities, follow the below practices to improve the security of your WebView2 application.


<!-- ====================================================================== -->
## Treat all web content as insecure

* Always check the origin of the document that's running inside WebView2, and assess the trustworthiness of the content, especially before using `ExecuteScript`, `PostWebMessageAsJson`, `PostWebMessageAsString`, or any other method to send information into the WebView2 control.  The WebView2 control may have navigated to another page via the end user interacting with the page or script in the page causing navigation.  The origin of the document can be obtained from the `Source` property of the WebView2 control.

* Be careful with `AddScriptToExecuteOnDocumentCreated`.  All future `navigations` run the same script, and if that script provides access to information that's intended only for a certain origin, any HTML document may have access to the native application's resources and APIs.

* Validate web messages and host object parameters before consuming them, because web messages and parameters can be malformed (unintentionally or maliciously) and can cause the app to behave unexpectedly.

* When examining the result of an `ExecuteScript` method call, which is a `WebMessageReceived` event, always check the `Source` property of the WebView2 control to check the source of the sender, or check any other mechanism of receiving information from an HTML document in a WebView2 control, to validate that the URI of the HTML document is what you expect.


<!-- ====================================================================== -->
## Avoid generic proxies

Design specific web messages and host object interactions, instead of using generic proxies.


<!-- ====================================================================== -->
## Use `PostWebMessageAsJson` to send messages

Use the `PostWebMessageAsJson` method to send messages to the WebView2 control.  When constructing a message to send into a WebView2 control, prefer using `PostWebMessageAsJson` and construct the JSON string parameter using a JSON library.  This avoids any potential accidents of encoding information into a JSON string or script, and ensures that no attacker-controlled input can modify the rest of the JSON message or run arbitrary JavaScript code.


<!-- ====================================================================== -->
## Restrict web content functionality

Restrict web content functionality, if it's not needed.  Update the WebView2 properties in `CoreWebView2Settings` to restrict the functionality of the web content, as follows:

*  Set `AreHostObjectsAllowed` to `false`, if you don't expect the web content to access host objects.

*  Set `IsWebMessageEnabled` to `false`, if you don't expect the web content to post web messages to your native application.

*  Set `IsScriptEnabled` to `false`, if you don't expect the web content to run scripts (for example, when showing static HTML content).

*  Set `AreDefaultScriptDialogsEnabled` to `false`, if you don't expect the web content to show `alert` or `prompt` dialogs.


##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Settings Class](/dotnet/api/microsoft.web.webview2.core.corewebview2settings)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Settings Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Settings](/microsoft-edge/webview2/reference/win32/icorewebview2settings)

---


<!-- ====================================================================== -->
## Update settings based on the origin of the new page

Update settings based on the origin of the new page, as follows:

* To prevent your application from navigating to certain pages, use the `NavigationStarting` and `FrameNavigationStarting` events to check page or frame navigation, and then conditionally block the navigation.

* When navigating to a new page, you may need to adjust the property values on the `CoreWebView2Settings` object to match the security requirements of the new page, as described in [Restrict web content functionality](#restrict-web-content-functionality), above.


<!-- ====================================================================== -->
## Remove exposed host objects

When navigating to a new document, use the `ContentLoading` event and `RemoveHostObjectFromScript` to remove exposed host objects.


<!-- ====================================================================== -->
## WebView2 cannot be run as a system user

WebView2 cannot be run as a system user.  This restriction blocks scenarios such as building a Credential Provider.
