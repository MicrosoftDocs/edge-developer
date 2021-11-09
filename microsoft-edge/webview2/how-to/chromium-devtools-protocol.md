---
description: How to use the Chrome DevTools Protocol in your WebView2 app by using the Microsoft Edge WebView2 Chrome DevTools Protocol NuGet package.
title: Use the Chrome DevTools Protocol in WebView2
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/06/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, edge, ICoreWebView2, ICoreWebView2Controller, Chrome DevTools Protocol
---
# Use the Chrome DevTools Protocol in WebView2

The [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol) provides APIs to instrument, inspect, debug, and profile Chromium-based browsers.  The Chrome DevTools Protocol is the foundation for the Microsoft Edge DevTools.  Use the Chrome DevTools Protocol for features that aren't implemented in the WebView2 platform.

To use the Chrome DevTools Protocol API in a WebView2 app, do either of the following:

*   Install and use the [Microsoft.Web.WebView2.DevToolsProtocolExtension (Preview)](https://www.nuget.org/packages/Microsoft.Web.WebView2.DevToolsProtocolExtension) NuGet package (.NET).
*   Run one of the following methods.
    *   .NET:  [CallDevToolsProtocolAsync](/dotnet/api/microsoft.web.webview2.core.corewebview2.calldevtoolsprotocolmethodasync?view=webview2-dotnet-1.0.774.44&preserve-view=true#Microsoft_Web_WebView2_Core_CoreWebView2_CallDevToolsProtocolMethodAsync_System_String_System_String_), [GetDevToolsProtocolEventReceiver](/dotnet/api/microsoft.web.webview2.core.corewebview2.getdevtoolsprotocoleventreceiver?view=webview2-dotnet-1.0.774.44&preserve-view=true)
    *   Win32 C/C++:  [CallDevToolsProtocolMethod](/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-1.0.774.44&preserve-view=true#calldevtoolsprotocolmethod), [ICoreWebView2DevToolsProtocolEventReceiver](/microsoft-edge/webview2/reference/win32/icorewebview2devtoolsprotocoleventreceiver?view=webview2-1.0.774.44&preserve-view=true)


<!-- ====================================================================== -->
## Use DevToolsProtocolHelper

> [!NOTE]
> The [Microsoft.Web.WebView2.DevToolsProtocolExtension](https://www.nuget.org/packages/Microsoft.Web.WebView2.DevToolsProtocolExtension) NuGet package is currently in technical preview.  While in preview, refrain from using the package in production apps.

[Microsoft.Web.WebView2.DevToolsProtocolExtension (Preview)](https://www.nuget.org/packages/Microsoft.Web.WebView2.DevToolsProtocolExtension) is a NuGet package created by the WebView2 team that provides easy access to Chrome DevTools Protocol features.  The following examples describe how to use the geolocation functionality in Chrome DevTools Protocol in your WebView2 control.  You may follow a similar pattern to use other Chrome DevTools Protocol features.


<!-- ====================================================================== -->
## Step 1: Create a webpage to find your geolocation

To create an `HTML file` to find your geolocation, complete following the actions.

1.  Open Visual Studio Code (or an IDE of your choice).
1.  Create a new `.html` file.
1.  Copy and paste the following code snippet in your new `.html` file.

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Geolocation Finder</title>
    </head>
    <body>
        <button id="display">Display Location</button>
        <div id="message"></div>
    </body>

    <script>
        const btn = document.getElementById('display');
        // Find the user location.
        btn.addEventListener('click', function () {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        });

        // Update message to display the latitude and longitude coordinates.
        function onSuccess(position) {
            const {latitude, longitude} = position.coords;
            message.textContent = `Your location: (${latitude},${longitude})`;
        }

        function onError() {
            message.textContent = `Operation Failed`;
        }
    </script>
    </html>
    ```

1.  Save the `.html` file with the filename `geolocation.html`.
1.  Open Microsoft Edge.
1.  Open the `geolocation.html` file.
1.  To display your latitude and longitude coordinates, choose the **Display Location** button.  To verify and compare your geolocation, copy and paste your coordinates in [https://www.bing.com/maps](https://www.bing.com/maps).

    :::image type="complex" source="./media/geolocater-browser.png" alt-text="Display the geolocation coordinates of the user in Microsoft Edge" lightbox="./media/geolocater-browser.png":::
       Display the geolocation coordinates of the user in Microsoft Edge
    :::image-end:::


<!-- ====================================================================== -->
## Step 2: Display geolocation.html in a WebView2

1.  To create a WebView2 app, use a get started guide or the WebView2 samples.
    *   [Get started](../index.md#get-started)
    *   [WebView2 samples](https://github.com/MicrosoftEdge/WebView2Samples)

1.  Set the initial navigation of the WebView2 control to `geolocation.html`.

    ```csharp
    webView.CoreWebView2.Navigate(@"C:\{path\to\file}\geolocation.html");
    ```

1.  Ensure the `geolocation.html` file displays in your WebView2 control app.

    :::image type="complex" source="./media/initial-geolocate.png" alt-text="Display the geolocater.html file in your WebView2 control app" lightbox="./media/initial-geolocate.png":::
       Display the `geolocation.html` file in your WebView2 control app
    :::image-end:::


<!-- ====================================================================== -->
## Step 3: Install the DevToolsProtocolHelper NuGet package

Use NuGet to download `Microsoft.Web.WebView2.DevToolsProtocolExtension`.  To install the package, complete the following actions.

1.  Choose **Project** > **Manage NuGet Packages** > **Browse**.
1.  Type `Microsoft.Web.WebView2.DevToolsProtocolExtension` and choose **Microsoft.Web.WebView2.DevToolsProtocolExtension** > **Install**.

:::image type="complex" source="./media/cdp-nuget.png" alt-text="Ensure Microsoft.Web.WebView2.DevToolsProtocolExtension displays in the Visual Studio NuGet Package Manager" lightbox="./media/cdp-nuget.png":::
   Ensure **Microsoft.Web.WebView2.DevToolsProtocolExtension** displays in the Visual Studio NuGet Package Manager
:::image-end:::


<!-- ====================================================================== -->
## Step 4: Use DevTools Protocol Helper

1.  Add the `DevToolsProtocolExtension` namespace to your project.

    ```csharp
    using Microsoft.Web.WebView2.Core;
    using Microsoft.Web.WebView2.Core.DevToolsProtocolExtension;
    ```

1.  Instantiate the `DevToolsProtocolHelper` object and navigate to `geolocation.html`.

    ```csharp
    async void InitializeAsync()
    {
        await webView.EnsureCoreWebView2Async(null);
        DevToolsProtocolHelper helper = webView.CoreWebView2.GetDevToolsProtocolHelper();

        webView.CoreWebView2.Navigate(@"C:\{path\to\file}\geolocation.html");
    }
    ```

1.  Run the [setGeoLocationOverrideAsync](https://chromedevtools.github.io/devtools-protocol/tot/Emulation/#method-setGeolocationOverride) method.  For more information, navigate to [setGeolocationOverride](https://chromedevtools.github.io/devtools-protocol/tot/Emulation/#method-setGeolocationOverride).

    ```csharp
    async void InitializeAsync()
    {
        await webView.EnsureCoreWebView2Async(null);
        DevToolsProtocolHelper helper = webview.CoreWebView2.GetDevToolsProtocolHelper();

        webView.CoreWebView2.Navigate(@"C:\{path\to\file}\geolocation.html");

        // Latitude and longitude for Paris, France.
        double latitude = 48.857024082572565;
        double longitude = 2.3161581601457386;
        double accuracy = 1;
        await helper.Emulation.setGeolocationOverrideAsync(latitude, longitude, accuracy);

    }
    ```

1.  Run your app.
1.  To display the coordinates of Paris, France, choose the **Display Location** button.

    :::image type="complex" source="./media/final-location-cdp.png" alt-text="Display the .html file in a WebView2 control with the coordinates for Paris" lightbox="./media/final-location-cdp.png":::
       Display the `.html` file in a WebView2 control with the coordinates for Paris
    :::image-end:::


<!-- ====================================================================== -->
## File a bug or feature request for the Chrome DevTools Protocol

To request a WebView2 platform feature, enter a new issue in the [WebView2Feedback repo](https://github.com/MicrosoftEdge/WebView2Feedback).

To file a bug about the Chrome DevTools Protocol, file a bug report in the [Chromium bugs database](https://bugs.chromium.org/p/chromium/issues/entry?components=Platform%3EDevTools%3EPlatform).

The Chrome DevTools Protocol is maintained by the open source Chromium project, not by the Microsoft Edge WebView2 team.


<!-- ====================================================================== -->
## See also

*  [Microsoft Edge DevTools Protocol overview](../../devtools-protocol-chromium/index.md)
*  [WebView2 samples](https://github.com/MicrosoftEdge/WebView2Samples)
