---
title: Develop secure WebView2 apps
description: How to develop secure WebView2 applications.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 07/14/2026
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

* Set `AreHostObjectsAllowed` to `false`, if you don't expect the web content to access host objects.

* Set `IsWebMessageEnabled` to `false`, if you don't expect the web content to post web messages to your native application.

* Set `IsScriptEnabled` to `false`, if you don't expect the web content to run scripts (for example, when showing static HTML content).

* Set `AreDefaultScriptDialogsEnabled` to `false`, if you don't expect the web content to show `alert` or `prompt` dialogs.


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


<!-- ====================================================================== -->
## Recommended privilege level for WebView2 host applications

As a security best practice, we recommend hosting WebView2 in a process that runs at standard (non-elevated) user integrity.  Following the principle of least privilege, applications should avoid running the WebView2-hosting component with elevated (administrator) privileges.

If your application requires elevated privileges for certain operations, we recommend isolating that work in a separate, dedicated process and keeping the WebView2 host component de-elevated.  This keeps the browser-hosting surface at the lowest privilege level necessary, and aligns with recommended Windows application security practices.


<!-- ------------------------------ -->
#### For an elevated host app, use appropriate override flags

For an elevated WebView2 host app process, use the appropriate type of override flags.  An elevated process is a High Integrity Level (High IL) process.  To help protect elevated processes from configuration that can be modified by standard users, WebView2 ignores certain user-scoped override mechanisms when the host process is running elevated.

When the host process is running elevated:

* `WEBVIEW2_*` environment variable overrides (flags) are ignored, including `WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS`.  See:
   * [Setting browser flags in your local device environment](./webview-features-flags.md#setting-browser-flags-in-your-local-device-environment) in _WebView2 browser flags_.

* Configuration flags that are specified within the WebView2 app via the WebView2 API are honored.  See:
   * [Setting browser flags programmatically through code](./webview-features-flags.md#setting-browser-flags-programmatically-through-code) in _WebView2 browser flags_.

* `HKEY_CURRENT_USER` (`HKCU`) policy overrides are ignored.  See:
   * [Switching the channel search order (recommended)](../how-to/set-preview-channel.md#switching-the-channel-search-order-recommended) in _Test upcoming APIs and features_ - Select the **Registry key** tab, and then Find `HKCU`.
   * [How to use `ChannelSearchKind` to ensure that a particular channel is used](../how-to/set-preview-channel.md#how-to-use-channelsearchkind-to-ensure-that-a-particular-channel-is-used) in _Test upcoming APIs and features_ - Select the **Registry key** tab, and then Find `HKCU`.
   * [Setting the browser executable folder (for local testing)](../how-to/set-preview-channel.md#setting-the-browser-executable-folder-for-local-testing) in _Test upcoming APIs and features_ - Select the **Registry key** tab, and then Find `HKCU`.
   * [Debug WebView2 apps with Visual Studio Code](../how-to/debug-visual-studio-code.md) - Find `HKEY_CURRENT_USER`.

* `AdditionalBrowserArguments` registry overrides that are under `HKCU` are ignored.

* `HKEY_LOCAL_MACHINE` (`HKLM`) policy overrides are honored.  See:
   * [Switching the channel search order (recommended)](../how-to/set-preview-channel.md#switching-the-channel-search-order-recommended) in _Test upcoming APIs and features_ - Select the **Registry key** tab, and then Find `HKLM`.
   * [How to use `ChannelSearchKind` to ensure that a particular channel is used](../how-to/set-preview-channel.md#how-to-use-channelsearchkind-to-ensure-that-a-particular-channel-is-used) in _Test upcoming APIs and features_ - Select the **Registry key** tab, and then Find `HKLM`.
   * [Setting the browser executable folder (for local testing)](../how-to/set-preview-channel.md#setting-the-browser-executable-folder-for-local-testing) in _Test upcoming APIs and features_ - Select the **Registry key** tab, and then Find `HKLM`.

Non-elevated WebView2 apps honor all of the supported override mechanisms.

See also:
* [Distribute your app and the WebView2 Runtime](./distribution.md) - Find "elevated".


<!-- ====================================================================== -->
## See also

* [Development best practices for WebView2 apps](./developer-guide.md)
