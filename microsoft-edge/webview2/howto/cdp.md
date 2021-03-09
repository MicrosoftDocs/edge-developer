---
description: Learn how to use the Chrome DevTools Protocol in your WebView2 applications using the Microsoft Edge WebView2 CDP NuGet package
title: Use Chrome DevTools Protocol in WebView2
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 03/08/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, edge, ICoreWebView2, ICoreWebView2Controller, Chrome DevTools Protocol, CDP
---

# Use Chromium DevTools Protocol in WebView2

The [Chromium DevTools Protocol (CDP)](https://chromedevtools.github.io/devtools-protocol/) is a set of APIs built to instrument, inspect, debug, and profile chromium-based browsers. They provide the foundation for the Microsoft Edge (Chromium) DevTools. We recommend using the [Chromium DevTools Protocol (CDP)](https://chromedevtools.github.io/devtools-protocol/) for features that are not implemented in the WebView2 platform. To find CDP functionality, search the official [CDP documentation](https://chromedevtools.github.io/devtools-protocol/).

There are two ways to call [CDP APIs](https://chromedevtools.github.io/devtools-protocol/):
* Use [DevToolsProtocolHelper](https://int.nugettest.org/packages/Microsoft.Web.WebView2.DevToolsProtocolExtension/) NuGet package (.NET).
* Call [CallDevToolsProtocolAsync](https://docs.microsoft.com/microsoft-edge/webview2/reference/dotnet/0-9-538/microsoft-web-webview2-core-corewebview2#calldevtoolsprotocolmethodasync) (.NET) or [CallDevToolsProtocolMethod](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/0-9-538/icorewebview2#calldevtoolsprotocolmethod) (Win32 C/C++).

> [!NOTE]
> The Microsoft Edge WebView2 team does not maintain or support the Chromium DevTools Protocol. The Chromium DevTools Protocol is maintained by the open source Chromium project. 
>
> If you would like to suggest that we add a feature to the WebView2 platform, open and issue on the [WebView2 feedback repo][WVFeedbackRepo].

## Use DevToolsProtocolHelper

[DevToolsProtocolHelper](https://int.nugettest.org/packages/Microsoft.Web.WebView2.DevToolsProtocolExtension/) is a NuGet package created by the WebView2 team that allows developers to easily access CDP functions. As an example, the following tutorial describes how to use the geolocation functionality in CDP in your WebView2 control. You may follow a similar pattern to use other CDP funtionality.  

### Step 1: Create a webpage to find your geoLocation
To begin, create an `HTML file` to find your geolocation. 

1. Create an `HTML` file, using Visual Studio Code or an IDE of your choice. Save the file with the filename `geolocater.html`
1. Copy and paste the following code into `geolocater.html`. 

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <title>GeoLocation Finder</title>
</head>
<body>
    <button id="display">Display Location</button>
    <div id="message"></div>
</body>

<script>
    const btn = document.querySelector('#display');
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

1. Open the file in Microsoft Edge. Select `Display Location` to display your latitude and longitude coordinates. You can verify the coordinates using [https://www.bing.com/maps][BingMaps].

:::image type="complex" source="./media/geolocater-browser.PNG" alt-text="The geolocation coordinates of the user is displayed in the browser." lightbox="./media/geolocater-browser.PNG":::
   The geolocation coordinates of the user is displayed in the browser.   
:::image-end:::

### Step 2: Display geolocater.html in a WebView2

1. To create a WebView2 application, you can use either of the following getting started guides.  
    * [Getting Started with WebView2 in Windows Forms][GetStartedWinForms]
    * [Getting Started with WebView2 in WPF][GetStartedWPF]

1. Set the initial navigation of the WebView2 control to `geolocater.html`.  

```c#
webView.CoreWebView2.Navigate(@"C:\{PATH TO FILE}\geolocater.html");
```

1. Verify that `geolocator.html` displays in a WebView2 control. 
 
:::image type="complex" source="./media/initial-geolocate.PNG" alt-text="The HTML is displayed in a WebView2 control." lightbox="./media/initial-geolocate.PNG":::
   The HTML is displayed in a WebView2 control.   
:::image-end:::

### Step 3: Install the DevToolsProtocolHelper NuGet package 

The `Microsoft.Web.WebView2.DevToolsProtocolExtension` is distributed via NuGet. To install the package:

1. Open Visual Studio.
1. Select **Project** > **Manage NuGet Packages** > **Browse**. 
1. Select **Include pre-release**, and then search for **Microsoft.Web.WebView2.DevToolsProtocolExtension**.
1. Select **Install**.

> [!NOTE] 
> Ensure you also have the WebView2 NuGet Package called `Microsoft.Web.WebView2` installed. 

:::image type="complex" source="./media/cdpnuget.PNG" alt-text="NuGet package manager showing the DevToolsProtocolExtension" lightbox="./media/cdpnuget.PNG":::
   NuGet package manager showing the DevToolsProtocolExtension  
:::image-end:::

### Step 4: Use DevTools Protocol Helper

1. Import the DevToolsProtocolExtension and CoreWebView2 namespaces.

```c#
using Microsoft.Web.WebView2.Core;
using Microsoft.Web.WebView2.Core.DevToolsProtocolExtension;
```

1. Instantiate the DevToolsProtocolHelper object, and navigate to geolocater.html.

```c#
async void InitializeAsync()
{
    await webView.EnsureCoreWebView2Async(null);
    DevToolsProtocolHelper helper = webView.CoreWebView2.GetDevToolsProtocolHelper(); 

    webView.CoreWebView2.Navigate(@"C:\{PATH TO FILE}\geolocater.html");
}
```

1. Make a call to the CDP [setGeoLocationOverrideAsync][setGeoLocationOverrideAsyncURL] function.

```c#
async void InitializeAsync()
{
    await webView.EnsureCoreWebView2Async(null);
    DevToolsProtocolHelper helper = webview.CoreWebView2.GetDevToolsProtocolHelper();

    webView.CoreWebView2.Navigate(@"C:\{PATH TO FILE}\geolocater.html");
    
    // Latitude and longitude for Paris, France.
    double latitude = 48.857024082572565;  
    double longitude = 2.3161581601457386;  
    double accuracy = 1;
    await helper.Emulation.SetGeolocationOverrideAsync(latitude, longitude, accuracy);
    
}
```

1. Run the application, and select `Display Location` to show the coordinates of Paris, France. 

:::image type="complex" source="./media/finallocation-cdp.PNG" alt-text="The HTML file is displayed in a WebView2 control with the coordinates for Paris." lightbox="./media/finallocation-cdp.PNG":::
   The HTML file is displayed in a WebView2 control with the coordinates for Paris.  
:::image-end:::

## Filing a CDP bug  

To file a CDP bug or issue, perform the following steps.

1. Open an issue on the [WebView2 Feedback repo][WVFeedbackRepo]
1. File a [bug report][bugreport]


## See Also

*    [WebView2 Code samples][WV2CodeSamples]


 <!-- links -->  

[bugreport]: https://bugs.chromium.org/p/chromium/issues/entry?components=Platform%3EDevTools%3EPlatform "Bug report"  
[WVFeedbackRepo]: https://github.com/MicrosoftEdge/WebView2Feedback "WebView2 Feedback GitHub Repo"
[BingMaps]: https://www.bing.com/maps "Bing"
[GetStartedWinForms]: https://docs.microsoft.com/microsoft-edge/webview2/gettingstarted/winforms "Getting started with WebView2 in Windows Forms"
[GetStartedWPF]: https://docs.microsoft.com/microsoft-edge/webview2/gettingstarted/wpf "Getting started with WebView2 in WPF"
[setGeoLocationOverrideAsyncURL]: https://docs.microsoft.com "Microsoft Docs"
[WV2CodeSamples]: https://github.com/MicrosoftEdge/WebView2Samples "WebView2 code samples"