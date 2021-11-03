---
description: Learn about development best practices to use when developing your WebView2 application.
title: WebView2 development best practices
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 08/03/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: WebView2, webview2, WebView, webview, edge, best practices
---
# WebView2 development best practices

Every development team follows different practices when building their application.  When you build WebView2 production apps, we recommend following these recommendations and best practices.


<!-- ====================================================================== -->
## Use the Evergreen Runtime (recommended)

We generally recommend using the Evergreen WebView2 Runtime.  Fixed Version runtime distribution is only recommended for apps that have strict compatibility requirements.  The Evergreen runtime updates automatically on the client, so that the latest features and security patches are available to your WebView2 app.  The Evergreen runtime also requires less storage space on the disk than the Fixed Version runtime.

If you use the Evergreen runtime, before running your WebView2 app, test whether the Evergreen WebView2 Runtime is installed on the client.  For more information, navigate to [Deploying the Evergreen WebView2 Runtime](../concepts/distribution.md#deploying-the-evergreen-webview2-runtime).


<!-- ====================================================================== -->
## Run compatibility tests regularly when using the Evergreen Runtime

When using the Evergreen WebView2 Runtime, the runtime updates automatically, so you must regularly run compatibility tests.  To ensure that your WebView2 app will continue to work as expected, test your web content in the WebView2 control against [Microsoft Edge Insider (preview) Channels](https://www.microsoftedgeinsider.com/download) (Beta, Dev, or Canary).

This guidance is similar to the guidance that we give to web developers.  For more information, navigate to [Test your app for forward-compatibility](../concepts/distribution.md#test-your-app-for-forward-compatibility).


<!-- ====================================================================== -->
## Test whether newer APIs are supported by the installed WebView2 Runtime

<!-- the main section about QueryInterface is in versioning.md; this section should be only a couple paragraphs -->

To run a WebView2 app that was developed with a particular version of the Webview2 SDK, the client must have a compatible version of the WebView2 Runtime installed.  Because APIs are continually being added to WebView2, new versions of the runtime are also released to support the new APIs.  Use feature-detection to make sure that the newer APIs that are used by your WebView2 app are supported by the WebView2 Runtime that's installed on the client.

If you use the Evergreen WebView2 Runtime, there are some scenarios where the runtime on a client hasn't been automatically updated to the latest version.  For example, if a client doesn't have internet access, the runtime isn't automatically updated.  Additionally, some group policies pause updating of the runtime.  When you push an update to your WebView2 app, the app might not work if it tries to call newer APIs that aren't available in the client's installed runtime.

To solve this situation, before your code calls a recently added WebView2 API, test whether that API is available in the client's installed runtime.  This test for newer functionality is similar to other web development best practices that detect supported features before using new web APIs.  To test for API availability in the installed runtime, use either:

*   `QueryInterface` in C/C++.
*   A `try/catch` block in .NET or WinUI.

For more information, navigate to [Feature-detecting to test whether the installed Runtime supports recently added APIs](../concepts/versioning.md#feature-detecting-to-test-whether-the-installed-runtime-supports-recently-added-apis).


<!-- ====================================================================== -->
## Update the Fixed Version Runtime

If you use the Fixed Version WebView2 Runtime, make sure you regularly update the WebView2 Runtime that's packaged with your app, to reduce security risks.  When using 3rd-party content in Webview2 apps, always consider the content to be untrusted.  For more information, navigate to [Fixed Version distribution mode](../concepts/distribution.md#details-about-the-fixed-version-runtime-distribution-mode).


<!-- ====================================================================== -->
## Manage new versions of the Evergreen Runtime

When a new version of the Evergreen WebView2 Runtime is downloaded to the client, any WebView2 apps that are running continue to use the previous version of the runtime, until the browser process is released.  This behavior allows apps to run continuously, and prevents the previous runtime from being deleted.  To use the new version of the runtime, you need to either release all references to the previous WebView2 environment objects, or restart your app.  The next time your app creates a new WebView2 environment, the app will use the new version of the runtime.

When a new version of the runtime is available, your app can automatically take action, such as notifying the user to restart the app.  To detect that a new version of the runtime is available, you can use the [add_NewBrowserVersionAvailable (Win32)](/microsoft-edge/webview2/reference/win32/icorewebview2environment#add_newbrowserversionavailable) or [CoreWebView2Environment.NewBrowserVersionAvailable (.NET)](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.newbrowserversionavailable) event in your code.  If your code handles restarting the app, consider saving the user state before the WebView2 app exits.

<!-- are the Ref links enough, or link to a regular article or article subsection? -->


<!-- ====================================================================== -->
## Manage the lifetime of the user data folder

WebView2 apps create a user data folder to store data such as cookies, credentials, and permissions.  After creating the folder, your app is responsible for managing the lifetime of the user data folder.  For example, your app must do cleanup when the app is uninstalled.  For more information, navigate to [Managing the user data folder](../concepts/user-data-folder.md).


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
## Follow recommended WebView2 security best practices

For any WebView2 app, make sure to follow our recommended WebView2 security best practices.  For more information, navigate to [Best practices for developing secure WebView2 applications](../concepts/security.md).
