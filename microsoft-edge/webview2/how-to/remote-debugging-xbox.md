---
title: Remote debugging Xbox WebView2 WinUI 2 (UWP) apps
description: How to remotely debug Xbox WebView2 WinUI 2 (UWP) apps by using Remote Tools for Microsoft Edge. 
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 10/17/2023
---
# Remote debugging Xbox WebView2 WinUI 2 (UWP) apps

To use [Microsoft Edge DevTools](/microsoft-edge/devtools-guide-chromium/landing/) to debug a WebView2 WinUI 2 (UWP) app, use remote debugging.  Remote debugging is necessary for WebView2 WinUI 2 (UWP) apps because currently, the built-in DevTools can't be launched inside a store-signed WebView2 WinUI 2 (UWP) app.


<!-- ========================================================================== -->
## Attach DevTools remotely to an Xbox WebView2 WinUI 2 (UWP) app

Attach Microsoft Edge DevTools remotely to an Xbox WebView2 WinUI 2 (UWP) app as follows:

1.  In Microsoft Edge, go to `edge://inspect`.  The **Inspect with Edge Developer Tools** page opens:

    ![DevTools Inspect utility page](./remote-debugging-xbox-images/inspect-devtools-page-supported.png)

1.  Enable Developer Mode on Xbox.  See [Xbox One Developer Mode activation](/windows/uwp/xbox-apps/devkit-activation).

1.  In Microsoft Edge, go to `https://<System IP>:11443`, where `<System IP>` is replaced by your Xbox System OS IP.  The **Confirm security settings** page is displayed, in the **Windows Device Portal** tab:

    ![The 'Confirm security settings' page in the 'Windows Device Portal' tab](./remote-debugging-xbox-images/open-device-portal.png)

1.  Click the **Continue with an unsecured connection** button.  An SSL cert error appears, **NET::ERR__CERT_AUTHORITY_INVALID**:

    ![SSL Error](./remote-debugging-xbox-images/xbox_ssl_error.png)

1.  Click the **Advanced** button.  A message is displayed, "The server couldn't prove ...":

    ![Advanced Option](./remote-debugging-xbox-images/advanced-option-prompt.png)

1.  Click the **Continue to** `<System IP>` **(unsafe)** link, where `<System IP>` is replaced by your Xbox System OS IP.  Xbox Device Portal opens:

    ![Xbox Device Portal](./remote-debugging-xbox-images/unsecure-xbox-device-portal.png)

1.  Go to `https://<System IP>:11443/config/rootcertificate`, where `<System IP>` is replaced by your Xbox System OS IP.  This downloads a `rootcertificate.cer` file:

    ![Root Certificate file listed in Downloads dialog of Microsoft Edge](./remote-debugging-xbox-images/root-certificate.png)

1.  Open the downloaded `rootcertificate.cer` file.  A security warning dialog box opens:

    ![Security warning dialog box](./remote-debugging-xbox-images/open-file-security-warning.png)

1.  Click the **Open** button.  A **Certificate** dialog opens:

    ![The Certificate dialog](./remote-debugging-xbox-images/certificate.png)

1.  Click the **Install Certificate** button.  A **Welcome to the Certificate Import Wizard** dialog opens:

    ![The 'Welcome to the Certificate Import Wizard' dialog](./remote-debugging-xbox-images/current-user-certificate.png)

1.  Select the **Current User** option button, and then click the **Next** button.  The Certificate Import Wizard opens:

    ![Certificate Import Wizard](./remote-debugging-xbox-images/certificate-import-wizard.png)

1.  Select the option **Place all certificates in the following store**, click the **Browse** button, and then select **Trusted Root Certification Authorities**.

1.  Click the **Next** button.  A **Security Warning** dialog opens:

    ![Security Warning dialog](./remote-debugging-xbox-images/security-warning.png)

1.  Click the **Yes** button.

1.  Restart Microsoft Edge.

1.  Go to `https://<System IP>:11443`, where `<System IP>` is replaced by your Xbox System OS IP, and verify that the connection is indicated as secure (that is, an HTTPS URL):

    ![Secure XDP](./remote-debugging-xbox-images/secure-xbox-device-portal.png)

1.  In your app project, set the following variable, to configure your WebView2 WinUI 2 (UWP) app for remote debugging.

    To enable remote debugging, an environment variable must be set in your project.  This variable must be set before creating the `CoreWebView2` instance, and before either setting the `WebView2.Source` property or calling the `WebView2.EnsureCoreWebView2Async` method.

    ```
    "WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS", "--enable-features=msEdgeDevToolsWdpRemoteDebugging"
    ```
    
    For example, if you're using the [WebView2 Sample UWP app](https://github.com/MicrosoftEdge/WebView2Samples/tree/main/SampleApps/webview2_sample_uwp), you can set the environment variable by adding the following line in the `Browser.xaml.cs` file:
    
    ```csharp
    Environment.SetEnvironmentVariable("WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS", "--enable-features=msEdgeDevToolsWdpRemoteDebugging");
    ```

    The line is numbered 33 in this screenshot, in the `Browser()` constructor, below an `#endif` that wraps an existing `SetEnvironmentVariable` statement:

    ![Browser Arguments Remote Debugging](./remote-debugging-xbox-images/browser-arguments-remote-debugging.png)

1.  Deploy your app to your Xbox using `Xbox Device Portal` and launch your app.

1.  Go to `edge://inspect`.

1.  In the **Connect to a remote Windows device** text box, enter `https://<System IP>:11443`, where `<System IP>` is replaced by your Xbox System OS IP, and then click the **Connect to Device** button.

1.  Verify that you can successfully connect, so that your debuggable WebView2 control, named **Edge**, is listed under your machine name:

    ![Edge Inspect Xbox](./remote-debugging-xbox-images/xbox-edge-inspect.png)

1.  At the bottom of the **Edge** WebView2 control entry, click the **inspect** link.  Microsoft Edge DevTools opens for the WebView2 control:

    ![DevTools Inspect Xbox](./remote-debugging-xbox-images/xbox-devtools-tab.png)

Now you can use Microsoft Edge DevTools to inspect and debug the WebView2 control in your Xbox WebView2 WinUI 2 (UWP) app.


<!-- ========================================================================== -->
## See also

* [Remote debugging WebView2 WinUI 2 (UWP) apps](./remote-debugging.md)
