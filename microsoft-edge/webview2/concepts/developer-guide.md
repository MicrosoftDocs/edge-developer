---
title: Development best practices for WebView2 apps
description: Learn about development best practices to use when developing your WebView2 application.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 06/27/2024
---
# Development best practices for WebView2 apps

We recommend the following best practices for developing production WebView2 apps.


<!-- ====================================================================== -->
## Use the Evergreen WebView2 Runtime

We recommend using the Evergreen WebView2 Runtime for most WebView2 apps, rather than using the Fixed Version runtime.

The Evergreen runtime updates automatically on the client, so that the latest features and security patches are available to your WebView2 app.  The Evergreen runtime also requires less storage space on the disk than the Fixed Version runtime.  Fixed Version runtime distribution is only recommended for apps that have strict compatibility requirements.

For more information about the benefits of the Evergreen Runtime, see [Details about the Evergreen Runtime distribution mode](../concepts/distribution.md#details-about-the-evergreen-runtime-distribution-mode) in _Distribute your app and the WebView2 Runtime_.  

To help ensure that your WebView2 app works well with the Evergreen WebView2 Runtime, use the recommended practices in the subsections below:
* [Check to make sure the WebView2 Runtime is installed](#check-to-make-sure-the-webview2-runtime-is-installed).
* [Handle updates of the WebView2 Runtime](#handle-updates-of-the-webview2-runtime).
* [Do forward-compatibility testing using Edge preview channels](#do-forward-compatibility-testing-using-edge-preview-channels).
* [Use feature detection for newer APIs](#use-feature-detection-for-newer-apis).


<!-- ------------------------------ -->
#### Check to make sure the WebView2 Runtime is installed

When using the Evergreen WebView2 Runtime, before your app uses the WebView2 control, programmatically check to make sure that the Evergreen WebView2 Runtime is installed on the client.

See [Detect if a WebView2 Runtime is already installed](../concepts/distribution.md#detect-if-a-webview2-runtime-is-already-installed) in _Distribute your app and the WebView2 Runtime_.


<!-- ------------------------------ -->
#### Handle updates of the WebView2 Runtime

When using the Evergreen WebView2 Runtime, handle Evergreen WebView2 Runtime updates.  Updates of the Evergreen WebView2 Runtime are automatically downloaded, but a running WebView2 app will continue using its current version of the WebView2 Runtime, potentially missing security updates.  To adopt the new version, an app must release all references to previous WebView2 objects or restart.  Implementing a `NewBrowserVersionAvailable` event handler can prompt users to restart the app for updates, with a recommendation to save user state before exiting for a seamless transition. 

See [Handle Evergreen WebView2 Runtime updates](../concepts/distribution.md#handle-evergreen-webview2-runtime-updates) in _Distribute your app and the WebView2 Runtime_.


<!-- ------------------------------ -->
#### Do forward-compatibility testing using Edge preview channels

When using the Evergreen WebView2 Runtime, run forward-compatibility tests by using the preview channels of Microsoft Edge (Beta, Dev, or Canary).

Because the Evergreen Runtime updates automatically, you should regularly run compatibility tests to ensure that your WebView2 app will continue to work as expected on the new Runtime version.  This can be done by testing your web content in the WebView2 control against the Microsoft Edge preview channels.

Follow the guidance in [Prerelease testing using preview channels](../how-to/prerelease-testing.md) and [Self-host by deploying preview channels](../how-to/self-hosting.md).


<!-- ------------------------------ -->
#### Use feature detection for newer APIs

When using the Evergreen WebView2 Runtime, use feature detection to test whether the installed Runtime supports recently added APIs.  To run a WebView2 app that was developed with a particular version of the Webview2 SDK, the client must have a compatible version of the WebView2 Runtime installed. 

When using the Evergreen WebView2 Runtime, there are some scenarios where the runtime on a client hasn't been automatically updated to the latest version.  Additionally, some group policies pause updating of the runtime.  As a result, when you push an update to your WebView2 app, the app might not work if it tries to call newer APIs that aren't available in the client's installed runtime.  Therefore, you should use feature detection to make sure that the newer APIs that are used by your WebView2 app are supported by the WebView2 Runtime that's installed on the client. 

See [Feature-detecting to test whether the installed Runtime supports recently added APIs](../concepts/versioning.md#feature-detecting-to-test-whether-the-installed-runtime-supports-recently-added-apis) in _Prerelease and Release SDKs for WebView2_.


<!-- ====================================================================== -->
## Update regularly if using the Fixed Version Runtime

If you use the Fixed Version WebView2 Runtime, make sure you regularly update the WebView2 Runtime that's packaged with your app, to reduce security risks.  To determine how often you should update the Fixed Version Runtime, you should consider your app's threat model.  For example, when using third-party content in Webview2 apps, always consider the content to be untrusted.

See [Details about the Fixed Version runtime distribution mode](../concepts/distribution.md#details-about-the-fixed-version-runtime-distribution-mode) in _Distribute your app and the WebView2 Runtime_.


<!-- ====================================================================== -->
## Manage the lifetime of the user data folder

WebView2 apps create a user data folder to store data such as cookies, credentials, and permissions.  After creating the user data folder, your app is responsible for managing the lifetime of the user data folder.  For example, your app must do cleanup when the app is uninstalled.

See [Manage user data folders](../concepts/user-data-folder.md) for further guidance on managing the user data folder.


<!-- ====================================================================== -->
## Handle runtime-process failures or exits

WebView2 apps are supported by a collection of runtime processes that run alongside the app process.  These supporting runtime processes can fail for various reasons, such as running out of memory, or being terminated by the user.  Your WebView2 app should handle these process-related events, to ensure that the app can recover from failures and continue to run smoothly.

See [Handling process-related events in WebView2](../concepts/process-related-events.md) for more information on how to handle process-related events in WebView2 apps.


<!-- ====================================================================== -->
## Event handlers on the environment object

If any of your app's event handlers on the [environment object](/microsoft-edge/webview2/reference/win32/webview2-idl#createcorewebview2environment) hold a reference to the environment object, and the app simply releases the reference to the environment and event handlers without removing the event handlers, there might be a circular reference between the environment object and handler objects, which will leak memory.

To prevent such a memory leak:

*  For any added event handler, remove the event handler before releasing the environment object.

*  Avoid holding a reference to the environment object in an event handler.  Instead, the event handler can access the environment object from the `sender` argument of the "event completed" callback.

*  If you want the app to hold a reference to a WebView2 object, use a weak reference whenever possible.


<!-- ====================================================================== -->
## Follow security best practices

WebView2 enables you to host web content in your native applications, providing advantages such as using web-based UI, accessing features of the web platform, and sharing code cross-platform.

However, hosting web content can also introduce vulnerabilities.  To avoid vulnerabilities that can arise from hosting web content within a native application, make sure to design your WebView2 application to closely monitor interactions between the web content and the host application.

Follow the guidance in [Develop secure WebView2 apps](../concepts/security.md).
