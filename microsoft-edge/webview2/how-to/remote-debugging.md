---
title: Remote debugging for WebView2 WinUI 2 (UWP) apps with Remote Tools for Microsoft Edge
description: How to remotely debug WebView2 WinUI 2 (UWP) apps by using Remote Tools for Microsoft Edge. 
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 02/23/2023
---
# Remote debugging WebView2 WinUI 2 (UWP) apps with Remote Tools for Microsoft Edge

Use `Remote Tools for Microsoft Edge` to enable [Microsoft Edge DevTools](/microsoft-edge/devtools-guide-chromium/landing/) debugging.


<!-- ====================================================================== -->
## Debugging desktop WebView2 WinUI 2 (UWP) apps

To use Microsoft Edge DevTools to debug a desktop WebView2 WinUI 2 (UWP) app, use remote debugging.  Remote debugging is necessary because currently, the built-in DevTools in Microsoft Edge cannot be launched inside a store-signed WebView2 WinUI 2 (UWP) app.

Attach `Microsoft Edge DevTools` remotely to a WebView2 WinUI 2 (UWP) app as follows:

1.  Install [Microsoft Edge Canary Channel](https://www.microsoftedgeinsider.com/download/canary).

1.  In Microsoft Edge Canary, go to to `edge://inspect` and verify that the **Inspect with Developer Tools** page exists in your version of the browser:

    ![DevTools Inspect utility page](./remote-debugging-images/inspect-devtools-page-supported.png)

1.  Enable Developer Mode: Open Windows **Settings**, select **Privacy & security** > **For developers**, and then turn on the **Developer Mode** toggle:

    ![Enable Developer Mode](./remote-debugging-images/enable-developer-mode.png)

1.  Enable Device Portal: Open Windows **Settings**, select **Privacy & security** > For developers**, and then turn on the **Device Portal** toggle.

    If your operating system isn't up-to-date, you might get a message in the **Settings** window: "The Windows Developer Mode package couldn't be found in Windows Update, so remote deployment and Windows Device Portal are unavailable.  [Learn more](/windows/uwp/debug-test-perf/device-portal-desktop#failed-to-locate-the-package)."

1.  If you get such a message, update your system OS to the latest version, and then turn on the **Device Portal** toggle.

1.  When prompted to **Install Windows Developer Mode package**, click **Yes**:

    ![Install Windows Developer Mode package](./remote-debugging-images/install-developer-mode-package.png)

    After the installation is complete, note the URL that will be used for the remote debugging connection. To find this URL, expand the **Device Portal** dropdown.  In this case, the Device Portal URL that will be used is `http://localhost:50080`:

    ![Remote Debugging URL](./remote-debugging-images/remote-debugging-url.png)

1.  Install [Remote Tools for Microsoft Edge](https://www.microsoft.com/store/productId/9P6CMFV44ZLT) from the Microsoft Store.

1.  In Microsoft Edge Canary, go to the Device Portal URL that you previously noted.  Verify that the ***Confirm security settings** page is loaded (in the **Windows Device Portal** tab):

    ![The 'Confirm security settings' page in the 'Windows Device Portal' tab](./remote-debugging-images/open-device-portal.png)

1.  If you are only debugging apps that are running locally, you can select **Continue with an unsecured connection**.

    Or, if you aren't running the app locally, or if you need to connect over `HTTPS`, select **Configure a secure connection**, and then follow the steps in the page that you're redirected to.

1.  Verify that the page you're redirected to is as follows:

    ![Device Portal](./remote-debugging-images/device-portal.png)

1.  Go to `http://<Device Portal URL>/msedge` and verify Remote Tools for Microsoft Edge are functioning. The page should load an empty list: `[]`.

1.  Configure your WebView2 WinUI 2 (UWP) app for remote debugging:

    To enable remote debugging, two environment variables must be set in your project.  These variables must be set before creating the `CoreWebView2` instance, and before either setting the `WebView2.Source` property or calling the `WebView2.EnsureCoreWebView2Async` method.

    Set the following variables:

    ```
    "WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS", "--enable-features=msEdgeDevToolsWdpRemoteDebugging"
    "WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS", "WEBVIEW2_RELEASE_CHANNEL_PREFERENCE=1"
    ```
    
    For example, if you're using the [WebView2 Sample UWP app](https://github.com/MicrosoftEdge/WebView2Samples/tree/main/SampleApps/webview2_sample_uwp), you can set those environment variables by adding the following lines in the `Browser.xaml.cs` file:
    
    ```csharp
    Environment.SetEnvironmentVariable("WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS", "--enable-features=msEdgeDevToolsWdpRemoteDebugging");
    Environment.SetEnvironmentVariable("WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS", "WEBVIEW2_RELEASE_CHANNEL_PREFERENCE=1");
    ```

    Those are lines 33 and 34 in this screenshot:

    ![Browser Arguments Remote Debugging](./remote-debugging-images/browser-arguments-remote-debugging.png)

1.  Launch your app.

1.  Go to `http://<Device Portal URL>/msedge`, such as `http://localhost:50080/msedge`, and make sure your WebView2 instance appears in the list:

    ![Debuggable WebView2 Instance](./remote-debugging-images/debuggable-webviews.png)

1.  Go to `edge://inspect`.  In the **Connect to a remote Windows device** text box, enter `http://<Device Portal URL>`, such as `http://localhost:50080`, and then click **Connect to Device**.

1.  Verify that you can successfully connect, so that your debuggable WebView2 control, named **Edge**, is listed under your machine name:

    ![Connect to WebView2](./remote-debugging-images/connect-to-webview2.png)

1.  Click **inspect**.  Microsoft Edge DevTools opens for the WebView2 control:

    ![DevTools Inspect Window](./remote-debugging-images/devtools-inspect.png)

Now you can use Microsoft Edge DevTools to inspect and debug the WebView2 control.


<!-- ====================================================================== -->
## See also

* [Overview of DevTools](../index.md)
* [Get started with WebView2](../get-started/get-started.md)
* [WebView2Samples repo](https://github.com/MicrosoftEdge/WebView2Samples) - a comprehensive example of WebView2 capabilities.
* [WebView2 API reference](../webview2-api-reference.md)
* [See also](../index.md#see-also) in _Introduction to Microsoft Edge WebView2_.
