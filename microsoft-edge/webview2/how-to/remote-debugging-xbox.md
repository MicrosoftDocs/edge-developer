---
title: Remote debugging Xbox WebView2 WinUI 2 (UWP) apps
description: How to remotely debug Xbox WebView2 WinUI 2 (UWP) apps by using Remote Tools for Microsoft Edge. 
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 09/27/2023
---
# Remote debugging Xbox WebView2 WinUI 2 (UWP) apps

Attach Microsoft Edge DevTools remotely to an Xbox WebView2 WinUI 2 (UWP) app as follows:

1.  In Microsoft Edge, go to `edge://inspect`.  The **Inspect with Edge Developer Tools** page opens:

    ![DevTools Inspect utility page](./remote-debugging-images/inspect-devtools-page-supported.png)

1.  Enable Developer Mode on Xbox.  See [Xbox One Developer Mode activation](/windows/uwp/xbox-apps/devkit-activation).

1.  In Microsoft Edge, navigate to `https://<System IP>:11443`.  Verify that the **Confirm security settings** page is loaded (in the **Windows Device Portal** tab).  For these examples, `<System IP>` is the Xbox System OS IP, replace that with your Xbox System OS IP.

    ![The 'Confirm security settings' page in the 'Windows Device Portal' tab](./remote-debugging-images/open-device-portal.png)

1.  You will see an SSL cert error, click show advanced and then click **Continue** to `<System IP>`:

    ![SSL Error](./remote-debugging-images/xbox_ssl_error.png)

1.  Verify the following page is displayed: 

    ![Xbox Device Portal](./remote-debugging-images/unsecure-xbox-device-portal.png)

1.  Navigate to `https://<System IP>:11443/config/rootcertificate`. This will download a `rootcertificate.cer` file:

    ![Root Certificate](./remote-debugging-images/root-certificate.png)

1.  Open the downloaded `rootcertificate.cer` file and then click **Open** when the following dialog is displayed:

    ![Open File](./remote-debugging-images/open-file-security-warning.png)

1.  Click **Install Certificate**:

    ![Install Certificate](./remote-debugging-images/certificate.png)

1.  Select **Current User** and click **Next**:

    ![Current User](./remote-debugging-images/current-user-certificate.png)

1.  Click the option to `Place all certificates in the following store`. Click **Browse** and select `Trusted Root Certification Authorities`:

    ![Certificate Import Wizard](./remote-debugging-images/certificate-import-wizard.png)

1.  Click **Yes** to accept the security warning:

    ![Security Warning](./remote-debugging-images/security-warning.png)

1.  Restart Microsoft Edge.

1.  Navigate to `https://<System IP>:11443` and verify the connection shows as secure:

    ![Secure XDP](./remote-debugging-images/secure-xbox-device-portal.png)

1.  Configure your WebView2 WinUI 2 (UWP) app for remote debugging:

    To enable remote debugging, an environment variable must be set in your project.  This variable must be set before creating the `CoreWebView2` instance, and before either setting the `WebView2.Source` property or calling the `WebView2.EnsureCoreWebView2Async` method.

    Set the following variable:

    ```
    "WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS", "--enable-features=msEdgeDevToolsWdpRemoteDebugging"
    ```
    
    For example, if you're using the [WebView2 Sample UWP app](https://github.com/MicrosoftEdge/WebView2Samples/tree/main/SampleApps/webview2_sample_uwp), you can set the environment variable by adding the following line in the `Browser.xaml.cs` file:
    
    ```csharp
    Environment.SetEnvironmentVariable("WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS", "--enable-features=msEdgeDevToolsWdpRemoteDebugging");
    ```

    The line is numbered 33 in this screenshot, in the `Browser()` constructor, below an `#endif` that wraps an existing `SetEnvironmentVariable` statement:

    ![Browser Arguments Remote Debugging](./remote-debugging-images/browser-arguments-remote-debugging.png)

1.  Deploy your app to your Xbox using `Xbox Device Portal` and launch your app.

1.  Go to `edge://inspect`.  In the **Connect to a remote Windows device** text box, enter `https://<System IP>:11443`, and then click **Connect to Device**.

1.  Verify that you can successfully connect, so that your debuggable WebView2 control, named **Edge**, is listed under your machine name:

    ![Edge Inspect Xbox](./remote-debugging-images/xbox-edge-inspect.png)

1.  At the bottom of the **Edge** WebView2 control entry, click the **inspect** link.  Microsoft Edge DevTools opens for the WebView2 control:

    ![DevTools Inspect Xbox](./remote-debugging-images/xbox-devtools-tab.png)

Now you can use Microsoft Edge DevTools to inspect and debug the WebView2 control in your Xbox WebView2 WinUI 2 (UWP) app.




<!-- ========================================================================== -->
## See also

* [Remote debugging WebView2 WinUI 2 (UWP) apps with Remote Tools for Microsoft Edge](./remote-debugging.md)
