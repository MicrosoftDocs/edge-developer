---
title: Development best practices for WebView2 apps
description: Learn about development best practices to use when developing your WebView2 application.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 08/03/2021
---
# Development best practices for WebView2 apps

We recommend the following best practices for developing production WebView2 apps:

## Use the Evergreen WebView2 Runtime

**We recommend using the Evergreen WebView2 Runtime for most WebView2 apps.**  The Evergreen runtime updates automatically on the client, so that the latest features and security patches are available to your WebView2 app.  The Evergreen runtime also requires less storage space on the disk than the Fixed Version runtime. Fixed Version runtime distribution is only recommended for apps that have strict compatibility requirements. For more details on the benefits, see [Details about the Evergreen Runtime distribution mode](../concepts/distribution.md#details-about-the-evergreen-runtime-distribution-mode).
 
### Evergreen distribution checklist

#### 1. Ensure that the Evergreen WebView2 Runtime is installed on the client before your app uses the WebView2 control.  
For more information, see [Deploying the Evergreen WebView2 Runtime](../concepts/distribution.md#deploying-the-evergreen-webview2-runtime).

#### 2. Manage new versions of the Evergreen Runtime

New versions of the Evergreen Runtime are automatically downloaded to the client, and the client uses the new version when your WebView2 app is restarted.  However, if your app runs continuously, it will continue to use the previous version of the runtime. This has security implications, as the previous version of the runtime might have security vulnerabilities that are fixed in the new version. You should consider whether it is important for your app to adopt the latest version of the runtime as soon as possible based on your app's threat model. For example, whether your WebView2 app accesses third-party content, which should be considered untrusted.

To use the new version of the runtime, you need to either release all references to the previous WebView2 environment objects, or restart your app.  The next time your app creates a new WebView2 environment, the app will use the new version of the runtime. You can have an event handler for the `NewBrowserVersionAvailable` event, to have your app automatically notify the user to restart the app.  If your app handles restarting the app, consider saving the user state before the WebView2 app exits. 

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2Environment` Class:
    * [NewBrowserVersionAvailable Event](dotnet/api/microsoft.web.webview2.core.corewebview2environment.newbrowserversionavailable)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2Environment` Class:
    * [NewBrowserVersionAvailable Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#newbrowserversionavailable)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Environment](/microsoft-edge/webview2/reference/win32/icorewebview2environment)
    * [add_NewBrowserVersionAvailable](/microsoft-edge/webview2/reference/win32/icorewebview2environment#add_newbrowserversionavailable)
    * [remove_NewBrowserVersionAvailable](/microsoft-edge/webview2/reference/win32/icorewebview2environment#remove_newbrowserversionavailable)
---

#### 3. Run forward-compatibility tests when using the Evergreen Runtime.

As Evergreen Runtime updates automatically, you should regularly run compatibility tests to ensure that your WebView2 app will continue to work as expected on the new runtime version. This can be done by testing your web content in the WebView2 control against the Microsoft Edge preview channels (Beta, Dev, or Canary).  

We recommend following the guidance in [Prerelease testing using preview channels](../how-to/prerelease-testing.md) and [Self-host by deploying preview channels](../how-to/self-hosting.md).

#### 4. Use feature-detection to test whether the installed Runtime supports recently added APIs.

To run a WebView2 app that was developed with a particular version of the Webview2 SDK, the client must have a compatible version of the WebView2 Runtime installed. 

When using the Evergreen WebView2 Runtime, there are some scenarios where the runtime on a client hasn't been automatically updated to the latest version. Additionally, some group policies pause updating of the runtime.  As such, when you push an update to your WebView2 app, the app might not work if it tries to call newer APIs that aren't available in the client's installed runtime.

Use feature-detection to make sure that the newer APIs that are used by your WebView2 app are supported by the WebView2 Runtime that's installed on the client. See [Feature-detecting to test whether the installed Runtime supports recently added APIs](../concepts/versioning.md#feature-detecting-to-test-whether-the-installed-runtime-supports-recently-added-apis).


<!-- ====================================================================== -->
### Update regularly if using the Fixed Version Runtime

If you use the Fixed Version WebView2 Runtime, make sure you regularly update the WebView2 Runtime that's packaged with your app to reduce security risks. You should consider your app's threat model to determine how often you should update the Fixed Version Runtime. When using third-party content in Webview2 apps, always consider the content to be untrusted.  See [Fixed Version distribution mode](../concepts/distribution.md#details-about-the-fixed-version-runtime-distribution-mode).


<!-- ====================================================================== -->
## Manage the lifetime of the user data folder

WebView2 apps create a user data folder to store data such as cookies, credentials, and permissions.  After creating the folder, your app is responsible for managing the lifetime of the user data folder.  For example, your app must do cleanup when the app is uninstalled.  See [Manage user data folders](../concepts/user-data-folder.md).


<!-- ====================================================================== -->
## Handle runtime-process failures

Your WebView2 app should listen for and handle the `ProcessFailed` event, so the app can recover from failures of runtime processes that support the WebView2 app process.

WebView2 apps are supported by a collection of runtime processes that run alongside the app process.  These supporting runtime processes can fail for various reasons, such as running out of memory, or being terminated by the user.  When a supporting runtime process fails, WebView2 notifies the app by raising the [ProcessFailed event](/microsoft-edge/webview2/reference/win32/icorewebview2processfailedeventargs).

<!-- is the Ref link enough, or link to a long section in regular docs? -->


<!-- ====================================================================== -->
## Event handlers on the environment object

If any of your app's event handlers on the [environment object](/microsoft-edge/webview2/reference/win32/webview2-idl#createcorewebview2environment) hold a reference to the environment object, and the app simply releases the reference to the environment and event handlers without removing the event handlers, there might be a circular reference between the environment object and handler objects, which will leak memory.

To prevent such a memory leak:

*  For any added event handler, remove the event handler before releasing the environment object.

*  Avoid holding a reference to the environment object in an event handler.  Instead, the event handler can access the environment object from the `sender` argument of the "event completed" callback.

*  If you want the app to hold a reference to a WebView2 object, use a weak reference whenever possible.


<!-- ====================================================================== -->
## Follow security best practices

WebView2 allow developers to host web content in native applications, which allows for advantages such as using web-based UI, accessing features of the web platform, sharing code cross-platform.

However, hosting web content can also introduce vulnerabilities.  To avoid vulnerabilities that can arise from hosting web content, make sure to design your WebView2 application to closely monitor interactions between the web content and the host application.

Follow security best practices in [Develop secure WebView2 apps](../concepts/security.md).
