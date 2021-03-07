---
description: Utilize Chrome DevTools Protocol in your WebView2 applications using Microsoft Edge WebView2 CDP NuGet package
title: Utilizing Chrome DevTools Protocol in WebView2
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 08/15/2020
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, edge, ICoreWebView2, ICoreWebView2Controller, Chrome DevTools Protocol, CDP
---

# Using Chromium DevTools Protocol in WebView2

The [Chromium DevTools Protocol (CDP)](https://chromedevtools.github.io/devtools-protocol/) is a set of APIs built to instrument, inspect, debug and profile chromium based browsers. They provide the foundation for the Microsoft Edge (Chromium) DevTools.

> [!CAUTION]
> The Microsoft Edge WebView2 team does not maintain or support Chromium DevTools Protocol. The Chromium DevTools Protocol is maintained by the open source Chromium project. 


The Microsoft Edge WebView2 team recommends using [Chromium DevTools Protocol (CDP)](https://chromedevtools.github.io/devtools-protocol/) for features not implemented in the WebView2 platform. To find relevant CDP functions, search the official [CDP documentation](https://chromedevtools.github.io/devtools-protocol/).

> [!NOTE] 
> If there is functionality you would like to add in the WebView2 platform, also let us know in the [WebView2 feedback repo](https://github.com/MicrosoftEdge/WebView2Feedback).

There are two ways to call [CDP APIs](https://chromedevtools.github.io/devtools-protocol/):
1. Use [DevToolsProtocolHelper](https://int.nugettest.org/packages/Microsoft.Web.WebView2.DevToolsProtocolExtension/) NuGet package
2. Call [CallDevToolsProtocolAsync](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/dotnet/0-9-538/microsoft-web-webview2-core-corewebview2#calldevtoolsprotocolmethodasync) (.NET) or [CallDevToolsProtocolMethod](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/0-9-538/icorewebview2#calldevtoolsprotocolmethod) (Win 32 C/C++)


> [!IMPORTANT] 
> The DevToolsProtocol helper package is currently only available in .NET.

## DevToolsProtocol Helper

[DevToolsProtocolHelper](https://int.nugettest.org/packages/Microsoft.Web.WebView2.DevToolsProtocolExtension/) is a NuGet package created by the Microsoft Edge WebView2 team that allows developers to easily access CDP functions. The following tutorial explains how you can take advantage of CDP's ability to override geolocation in WebView2 content.

### Step 1: Create GeoLocation Finder
To begin, create an `HTML file` that has the ability to find the user's geolocation. 

1. Create an `HTML` file using Visual Studio Code or and IDE of your choice named `geolocater.html`
2. Copy and Paste the following code snippet into `geolocater.html`

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <title>GeoLocation Finder</title>
</head>
<body>
    <!-- Creates the skeleton of the HTML file -->
    <button id="display">Display Location</button>
    <div id="message"></div>
</body>

<script>
    const btn = document.querySelector('#display');
    // Finds the user's location
    btn.addEventListener('click', function () {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    });

    // Updates the message to display the latitude/longitude coordinates
    function onSuccess(position) {
        const {latitude, longitude} = position.coords;
        message.textContent = `Your location: (${latitude},${longitude})`;
    }

    // Handles error cases
    function onError() {
        message.textContent = `Operation Failed`;
    }
</script>
</html>
```
3. Run the file in the Microsoft Edge browser. When Clicking the `Display Location` button, your latitude and longitude coordinates will appear. You can verify your coordiantes on bing.com/maps.

geolocater-browser image

### Step 2: Display geolocater.html in a WebView2

1. Follow either getting started guide to learn to create a simple WebView2 Application. 
    - Getting Started with WebView2 in Windows Forms
    - Getting Started with WebView2 in WPF

2. Set the initial Navigation to the local file path where `geolocater.html` is saved. 
```c#
webView.CoreWebView2.Navigate(@"C:\{PATH TO FILE}\geolocater.html");
```

initial-geolocate image

### Step 3: Install DevToolsProtocolHelper

The `Microsoft.Web.WebView2.DevToolsProtocolExtension` is distributed via NuGet. To install the package:

1. Open Visual Studio
2. Select Project > Manage NuGetPackages > Browse. Search for `Microsoft.Web.WebView2.DevToolsProtocolExtension`
> [!NOTE] 
> Ensure you have selected `Include pre-release`

3. Select `Install`

> [!NOTE] 
> Ensure you also have downloaded the WebView2 Nuget Package `Microsoft.Web.WebView2`. 

cdp-pacakge nuget image

### Step 4: Use DevTools Protocol Helper

1. Import the DevToolsProtocolExtension and CoreWebView2 namespaces
```c#
using Microsoft.Web.WebView2.Core;
using Microsoft.Web.WebView2.Core.DevToolsProtocolExtension;
```

2. Instantiate the DevToolsProtocolHelper object
```c#
async void InitializeAsync()
{
    await webView.EnsureCoreWebView2Async(null);
    DevToolsProtocolHelper helper = webView.CoreWebView2.GetDevToolsProtocolHelper(); 

}
```

3. Verify that the WebView navigates to geolocater.html

```c#
async void InitializeAsync()
{
    await webView.EnsureCoreWebView2Async(null);
    DevToolsProtocolHelper helper = webView.CoreWebView2.GetDevToolsProtocolHelper(); 

    webView.CoreWebView2.Navigate(@"C:\{PATH TO FILE}\geolocater.html");

}
```

4. Call CDP's [setGeoLocationOverrideAsync]() function, filling in parameters detailed in the CDP documentation.

```c#
async void InitializeAsync()
{
    await webView.EnsureCoreWebView2Async(null);
    DevToolsProtocolHelper helper = webview.CoreWebView2.GetDevToolsProtocolHelper();

    webView.CoreWebView2.Navigate(@"C:\{PATH TO FILE}\geolocater.html");
    
    //Latitude and Longitude are for Paris, France.
    double latitude = 48.857024082572565;  //Set any latitude
    double longitude = 2.3161581601457386;  //Set any longitude
    double accuracy = 1;
    await helper.Emulation.SetGeolocationOverrideAsync(latitude, longitude, accuracy);
    
}
```
5. Run the Application. When Selecting the `Display Location` button, the new latitude and longitude will appear. 

finallocation-cdp image

## Filing a bug with CDP

> [!CAUTION]
> The Microsoft Edge WebView2 team does not maintain or support Chromium DevTools Protocol. The Chromium DevTools Protocol is maintained by the open source Chromium project. 

For bugs or issues with CDP:

1. Let the Microsoft Edge WebView2 team know in the [WebView2 Feedback repo]()
2. File a [bug report](https://bugs.chromium.org/p/chromium/issues/entry?components=Platform%3EDevTools%3EPlatform)





 