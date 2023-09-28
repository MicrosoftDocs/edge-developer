---
title: Remote debugging HoloLens 2 WebView2 WinUI 2 (UWP) apps
description: How to remotely debug HoloLens 2 WebView2 WinUI 2 (UWP) apps by using Remote Tools for Microsoft Edge. 
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 09/27/2023
---
# Remote debugging HoloLens 2 WebView2 WinUI 2 (UWP) apps

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




<!-- ========================================================================== -->
## See also

* [Remote debugging WebView2 WinUI 2 (UWP) apps](./remote-debugging.md)
