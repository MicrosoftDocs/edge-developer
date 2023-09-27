---
title: Remote debugging WebView2 WinUI 2 (UWP) apps with Remote Tools for Microsoft Edge
description: How to remotely debug WebView2 WinUI 2 (UWP) apps by using Remote Tools for Microsoft Edge. 
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 04/20/2023
---
# Remote debugging WebView2 WinUI 2 (UWP) apps with Remote Tools for Microsoft Edge

To use [Microsoft Edge DevTools](/microsoft-edge/devtools-guide-chromium/landing/) to debug a desktop WebView2 WinUI 2 (UWP) app, use remote debugging.  To do this, install [Remote Tools for Microsoft Edge](https://www.microsoft.com/store/productId/9P6CMFV44ZLT), as follows.

Remote debugging is necessary for this platform because currently, the built-in DevTools can't be launched inside a store-signed WebView2 WinUI 2 (UWP) app.


<!-- ====================================================================== -->
## Debugging desktop WebView2 WinUI 2 (UWP) apps

Attach Microsoft Edge DevTools remotely to a desktop WebView2 WinUI 2 (UWP) app as follows:

1.  In Microsoft Edge, go to `edge://inspect`.  The **Inspect with Edge Developer Tools** page opens:

    ![DevTools Inspect utility page](./remote-debugging-images/inspect-devtools-page-supported.png)

1.  Enable Developer Mode: Open Windows **Settings**, select **Privacy & security** > **For developers**, and then turn on the **Developer Mode** toggle.

1.  In the same **Settings** page, turn on the **Device Portal** toggle:

    ![Enable Developer Mode](./remote-debugging-images/enable-developer-mode.png)

    If your operating system isn't up-to-date, you might get a message in the **Settings** window: "The Windows Developer Mode package couldn't be found in Windows Update, so remote deployment and Windows Device Portal are unavailable.  [Learn more](/windows/uwp/debug-test-perf/device-portal-desktop#failed-to-locate-the-package)."

1.  If you get such a message, update your operating system (OS) to the latest version, and then turn on the **Device Portal** toggle.

1.  When prompted to **Install Windows Developer Mode package**, click **Yes**:

    ![Install Windows Developer Mode package](./remote-debugging-images/install-developer-mode-package.png)

    After the installation is complete, note the URL that will be used for the remote debugging connection. To find this URL, expand the **Device Portal** dropdown.  In this case, the Device Portal URL that will be used is `http://localhost:50080`:

    ![Remote Debugging URL](./remote-debugging-images/remote-debugging-url.png)

1.  Install [Remote Tools for Microsoft Edge](https://www.microsoft.com/store/productId/9P6CMFV44ZLT) from the Microsoft Store.

1.  In Microsoft Edge, go to the Device Portal URL that you previously noted.  Verify that the **Confirm security settings** page is loaded (in the **Windows Device Portal** tab):

    ![The 'Confirm security settings' page in the 'Windows Device Portal' tab](./remote-debugging-images/open-device-portal.png)

1.  If you are only debugging apps that are running locally, you can select the **Continue with an unsecured connection** button.

    Or, if you aren't running the app locally, or if you need to connect over HTTPS, select the **Configure a secure connection** link, and then follow the steps in the page that you're redirected to.

1.  Verify that you're redirected to the **Apps manager: Windows Device Portal** page:

    ![Device Portal](./remote-debugging-images/device-portal.png)

1.  Go to `http://<Device Portal URL>/msedge` and verify Remote Tools for Microsoft Edge are functioning. The page loads an empty list: `[]`, unless there's an application running that is debuggable by remote tools.

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

1.  Launch your app.

1.  Go to `http://<Device Portal URL>/msedge`, such as `http://localhost:50080/msedge`, and make sure your WebView2 instance appears in the list:

    ![Debuggable WebView2 Instance](./remote-debugging-images/debuggable-webviews.png)

1.  Go to `edge://inspect`.  In the **Connect to a remote Windows device** text box, enter `http://<Device Portal URL>`, such as `http://localhost:50080`, and then click **Connect to Device**.

1.  Verify that you can successfully connect, so that your debuggable WebView2 control, named **Edge**, is listed under your machine name:

    ![Connect to WebView2](./remote-debugging-images/connect-to-webview2.png)

1.  At the bottom of the **Edge** WebView2 control entry, click the **inspect** link.  Microsoft Edge DevTools opens for the WebView2 control:

    ![DevTools Inspect Window](./remote-debugging-images/devtools-inspect.png)

Now you can use Microsoft Edge DevTools to inspect and debug the WebView2 control.


<!-- ====================================================================== -->
## Debugging HoloLens 2 WebView2 WinUI 2 (UWP) apps

WebView2 on HoloLens 2 and the WebView plugin for Unity are both in Preview and are subject to change before general availability.  

WebView2 and the WebView2 plugin are only supported on HoloLens 2 devices running the Windows 11 update. For more information, see [Update HoloLens 2](/hololens/hololens-update-hololens).

Attach Microsoft Edge DevTools remotely to a HoloLens 2 WebView2 WinUI 2 (UWP) app as follows:

1.  In Microsoft Edge, go to `edge://inspect`.  The **Inspect with Edge Developer Tools** page opens:

    ![DevTools Inspect utility page](./remote-debugging-images/inspect-devtools-page-supported.png)

1.  Enable Device Portal: Open Windows **Settings**, select **Update & Security** > **For developers**, and then turn on the **Device Portal** toggle:

    ![Enable Device Portal](./remote-debugging-images/enable-device-portal-holo.png)

    In **Connect using** > **Ethernet**, note the URL that will be used for the remote debugging connection.

1.  Install [Remote Tools for Microsoft Edge](https://www.microsoft.com/store/productId/9P6CMFV44ZLT) from the Microsoft Store on your HoloLens 2 device.

1.  In Microsoft Edge, go to the Device Portal URL that you previously noted.  Verify that the **Confirm security settings** page is loaded (in the **Windows Device Portal** tab):

    ![The 'Confirm security settings' page in the 'Windows Device Portal' tab](./remote-debugging-images/open-device-portal.png)

1.  If you are only debugging apps that are running locally, you can select the **Continue with an unsecured connection** button.

    Or, if you aren't running the app locally, or if you need to connect over HTTPS, select the **Configure a secure connection** link, and then follow the steps in the page that you're redirected to.

1.  Verify that you're redirected to the **Apps manager: Windows Device Portal** page:

    ![Device Portal](./remote-debugging-images/device-portal.png)

1.  Go to `http://<Device Portal URL>/msedge` and verify Remote Tools for Microsoft Edge are functioning. The page loads an empty list: `[]`, unless there's an application running that is debuggable by remote tools.

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

1.  Launch your app on your HoloLens 2 device.

1.  Go to `http://<Device Portal URL>/msedge`, such as `http://localhost:50080/msedge`, and make sure your WebView2 instance appears in the list:

    ![Debuggable WebView2 Instance](./remote-debugging-images/debuggable-webviews.png)

1.  Go to `edge://inspect`.  In the **Connect to a remote Windows device** text box, enter `http://<Device Portal URL>`, such as `http://localhost:50080`, and then click **Connect to Device**.

1.  Verify that you can successfully connect, so that your debuggable WebView2 control, named **Edge**, is listed under your machine name:

    ![Connect to WebView2 on HoloLens 2](./remote-debugging-images/connect-to-webview2-hololens.png)

1.  At the bottom of the **Edge** WebView2 control entry, click the **inspect** link.  Microsoft Edge DevTools opens for the WebView2 control:

    ![DevTools Inspect Window](./remote-debugging-images/devtools-inspect.png)

Now you can use Microsoft Edge DevTools to inspect and debug the WebView2 control in your HoloLens 2 WebView2 WinUI 2 (UWP) app.


<!-- ====================================================================== -->

## Debugging Xbox WebView2 WinUI 2 (UWP) apps

// todo: add in line about webview2 xbox being available only on certain builds 

Attach Microsoft Edge DevTools remotely to an Xbox WebView2 WinUI 2 (UWP) app as follows:

1.  In Microsoft Edge, go to `edge://inspect`.  The **Inspect with Edge Developer Tools** page opens:

    ![DevTools Inspect utility page](./remote-debugging-images/inspect-devtools-page-supported.png)

1.  Enable Developer Mode on Xbox. See https://learn.microsoft.com/en-us/windows/uwp/xbox-apps/devkit-activation. 

1.  Connect to the Xbox Windows Device Portal from the Microsoft Edge browser on your PC. For these examples, <System IP> is the Xbox System OS IP, replace that with your own IP. In Microsoft Edge, Navigate to https://<System IP>:11443.  Verify that the **Confirm security settings** page is loaded (in the **Windows Device Portal** tab):

    ![The 'Confirm security settings' page in the 'Windows Device Portal' tab](./remote-debugging-images/open-device-portal.png)

1.  You will see an SSL cert error, click show advanced and then click Continue to <System IP>. 

    ![SSL Error](./remote-debugging-images/xbox_ssl_error.png)

1.  Verify the following page is displayed: 

    ![Xbox Device Portal](./remote-debugging-images/unsecure-xbox-device-portal.png)

1.  Navigate to `https://<System IP>:11443/config/rootcertificate`. This will download a rootcertificate.cer file. 

    ![Root Certificate](./remote-debugging-images/root-certificate.png)

1.  Open the downloaded `rootcertificate.cer` file and then click **Open** when the following dialog is displayed.

    ![Open File](./remote-debugging-images/open-file-security-warning.png)

1. Click **Install Certificate**.

    ![Install Certificate](./remote-debugging-images/certificate.png)

1. Select **Current User** and click **Next**.

    ![Current User](./remote-debugging-images/current-user-certificate.png)

1. Click the option to `Place all certificates in the following store`. Click **Browse** and select `Trusted Root Certification Authorities`. 

    ![Certificate Import Wizard](./remote-debugging-images/certificate-import-wizard.png)

1.  Click **Yes** to accept the security warning.

    ![Security Warning](./remote-debugging-images/security-warning.png)

1.  Restart Microsoft Edge.

1.  Navigate to `https://<System IP>:11443` and verify the connection shows as secure. 

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

1.  Navigate to `edge://inspect` and tell it to connect to `https://<System IP>:11443` under `Connect to a remote Windows device`. This will take a few seconds to connect, and then you should see your WebView2 tab enumerated.

    ![Edge Inspect Xbox](./remote-debugging-images/xbox-edge-inspect.png)

1.  Click **inspect** and the DevTools window will open. You will now be able to debug your WebView2 tab with DevTools as you normally would. 

    ![DevTools Inspect Xbox](./remote-debugging-images/xbox-devtools-tab.png)

Now you can use Microsoft Edge DevTools to inspect and debug the WebView2 control in your Xbox WebView2 WinUI 2 (UWP) app.


<!-- ====================================================================== -->
## See also

* [Overview of DevTools](../index.md)
* [Get started with WebView2](../get-started/get-started.md)
* [WebView2Samples repo](https://github.com/MicrosoftEdge/WebView2Samples) - a comprehensive example of WebView2 capabilities.
* [WebView2 API reference](../webview2-api-reference.md)
* [See also](../index.md#see-also) in _Introduction to Microsoft Edge WebView2_.
