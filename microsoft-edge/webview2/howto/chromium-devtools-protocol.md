---
description: Learn how to use the Chrome DevTools Protocol in your WebView2 apps using the Microsoft Edge WebView2 Chromium DevTools Protocol NuGet package
title: Use Chrome DevTools Protocol in WebView2
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 03/09/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, edge, ICoreWebView2, ICoreWebView2Controller, Chrome DevTools Protocol
---
# Use Chromium DevTools Protocol in WebView2  

The [Chromium DevTools Protocol][GitHubChromedevtoolsDevtoolsProtocol] provides the Chrome Debugger Extension API.  The Chrome Debugger Extension API helps you instrument, inspect, debug, and profile Chromium-based browsers.  The Chromium DevTools Protocol is the foundation for the Microsoft Edge \(Chromium\) DevTools.  The WebView team recommends you use the Chromium DevTools Protocol for features that aren't implemented in the WebView2 platform.  For more information about the Chromium DevTools Protocol functionality, navigate to Chromium DevTools Protocol.  

To use the Chromium DevTools Protocol API in WebView2, use either of the following actions.  

*   Install and use the [Microsoft.Web.WebView2.DevToolsProtocolExtension][NugettestIntPackagesMicrosoftWebWebView2DevToolsprotocolextension] NuGet package \(.NET\).  
*   Run the one of the following methods.  
    *   [CallDevToolsProtocolAsync][DotnetApiMicrosoftWebWebview2CoreCorewebview2CalldevtoolsprotocolmethodasyncViewWebview2Dotnet1077444MicrosoftWebWebView2CoreCorewebview2CalldevtoolsprotocolmethodsyncSystemStringSystemString] \(.NET\)  
    *   [CallDevToolsProtocolMethod][Webview2ReferenceWin32Icorewebview2ViewWebview21077444Calldevtoolsprotocolmethod] \(Win32 C/C++\)  
    
> [!NOTE]
> The Microsoft Edge WebView2 team does not maintain or support the Chromium DevTools Protocol.  The Chromium DevTools Protocol is maintained by the open source Chromium project.  
> 
> To send your suggestions for future WebView2 platform features, navigate to [WebView Feedback][GithubMicrosoftedgeWebview2feedback] and submit an issue.  

## Use DevToolsProtocolHelper  

[Microsoft.Web.WebView2.DevToolsProtocolExtension][NugettestIntPackagesMicrosoftWebWebView2DevToolsprotocolextension] is a NuGet package created by the WebView2 team that allows you \(a developer\) to easily access Chromium DevTools Protocol features.  The following examples describe how to use the geolocation functionality in Chromium DevTools Protocol in your WebView2 control.  You may follow a similar pattern to use other Chromium DevTools Protocol features.  

## Step 1: Create a webpage to find your geolocation  

To create an `HTML file` to find your geolocation, complete following the actions.  

1.  Open Visual Studio Code \(or an IDE of your choice\).  
1.  Create a new `.html` file > copy and paste the following code snippet in your new `.html` file.  
    
    ```html
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
    
1.  Save the `.html` file with the filename `geolocater.html`.  
1.  Open Microsoft Edge > open the `geolocater.html` file.  
1.  To display your latitude and longitude coordinates, choose the **Display Location** button.  To verify and compare your geolocation, copy and paste your coordinates in [https://www.bing.com/maps][BingMaps].  
    
    :::image type="complex" source="./media/geolocater-browser.png" alt-text="Display the geolocation coordinates of the user in Microsoft Edge" lightbox="./media/geolocater-browser.png":::
       Display the geolocation coordinates of the user in Microsoft Edge  
    :::image-end:::  
    
## Step 2: Display geolocater.html in a WebView2  

1.  To create a WebView2 app, use either of the following getting started guides.  
    *   [Getting Started with WebView2 in Windows Forms][Webview2GettingstartedWinforms]  
    *   [Getting Started with WebView2 in WPF][Webview2GettingstartedWpf]  
1.  Set the initial navigation of the WebView2 control to `geolocater.html`.  
    
    ```csharp
    webView.CoreWebView2.Navigate(@"C:\{PATH TO FILE}\geolocater.html");
    ```  
    
1.  Ensure the `geolocator.html` file displays in your WebView2 control app.  
    
    :::image type="complex" source="./media/initial-geolocate.png" alt-text="Display the geolocater.html file in your WebView2 control app" lightbox="./media/initial-geolocate.png":::
       Display the `geolocater.html` file in your WebView2 control app  
    :::image-end:::  
    
## Step 3: Install the DevToolsProtocolHelper NuGet package  

Use NuGet to download `Microsoft.Web.WebView2.DevToolsProtocolExtension`.  To install the package, complete the following actions.  

1.  Open Visual Studio.  
1.  Choose **Project** > **Manage NuGet Packages** > **Browse** > **Include pre-release**.
1.  Type `Microsoft.Web.WebView2.DevToolsProtocolExtension` and choose **Microsoft.Web.WebView2.DevToolsProtocolExtension** > **Install**.  
    
> [!NOTE] 
> Ensure you also have the WebView2 NuGet Package named `Microsoft.Web.WebView2` installed.  

:::image type="complex" source="./media/cdpnuget.png" alt-text="Ensure Microsoft.Web.WebView2.DevToolsProtocolExtension displays in the Visual Studio NuGet Package Manager" lightbox="./media/cdpnuget.png":::
   Ensure **Microsoft.Web.WebView2.DevToolsProtocolExtension** displays in the Visual Studio NuGet Package Manager  
:::image-end:::  

## Step 4: Use DevTools Protocol Helper  

1.  Add the `DevToolsProtocolExtension` and `CoreWebView2` namespaces to your project.
    
    ```csharp
    using Microsoft.Web.WebView2.Core;
    using Microsoft.Web.WebView2.Core.DevToolsProtocolExtension;
    ```  
    
1.  Run the `GetDevToolsProtocolHelper()` method to instantiate the `DevToolsProtocolHelper` object, and navigate to `geolocater.html`.
    
    ```csharp
    async void InitializeAsync()
    {
        await webView.EnsureCoreWebView2Async(null);
        DevToolsProtocolHelper helper = webView.CoreWebView2.GetDevToolsProtocolHelper(); 
        
        webView.CoreWebView2.Navigate(@"C:\{PATH TO FILE}\geolocater.html");
    }
    ```  
    
1.  Run the [setGeoLocationOverrideAsync][setGeoLocationOverrideAsync] method.  For more information, navigate to [method-setGeolocationOverride][GithubChromedevtoolsDevtoolsProtocolTotEmulationMethodSetgeolocationOverride].  
    
    ```csharp
    async void InitializeAsync()
    {
        await webView.EnsureCoreWebView2Async(null);
        DevToolsProtocolHelper helper = webview.CoreWebView2.GetDevToolsProtocolHelper();
        
        webView.CoreWebView2.Navigate(@"C:\{PATH TO FILE}\geolocater.html");
        
        // Latitude and longitude for Paris, France.
        double latitude = 48.857024082572565;  
        double longitude = 2.3161581601457386;  
        double accuracy = 1;
        await helper.Emulation.setGeolocationOverrideAsync(latitude, longitude, accuracy);
        
    }
    ```  
    
1.  Run your app.  
1.  To display the coordinates of Paris, France, choose the **Display Location** button.  
    
    :::image type="complex" source="./media/finallocation-cdp.png" alt-text="The HTML file is displayed in a WebView2 control with the coordinates for Paris" lightbox="./media/finallocation-cdp.png":::
       The HTML file is displayed in a WebView2 control with the coordinates for Paris  
    :::image-end:::
    
## File a Chromium DevTools Protocol bug  

To file a Chromium DevTools Protocol bug or issue, complete the following actions.  

1.  Navigate to [WebView Feedback][GithubMicrosoftedgeWebview2feedback].  
1.  Open a new issue.  
1.  File a [bug report][ChromiumBugsChromiumIssuesEntryComponentsPlatformDevtoolsPlatform].  
    
## See also  

*   [WebView2 samples][GithubMicrosoftedgeWebview2samples]  
    
 <!-- links -->  

[Webview2GettingstartedWinforms]: /microsoft-edge/webview2/gettingstarted/winforms "Getting started with WebView2 in Windows Forms | Microsoft Docs"  
[Webview2GettingstartedWpf]: /microsoft-edge/webview2/gettingstarted/wpf "Getting started with WebView2 in WPF | Microsoft Docs"  

[setGeoLocationOverrideAsync]: https://docs.microsoft.com "setGeoLocationOverrideAsync | Microsoft Docs"  
<!--todo:  where is this article located -->

[DotnetApiMicrosoftWebWebview2CoreCorewebview2CalldevtoolsprotocolmethodasyncViewWebview2Dotnet1077444MicrosoftWebWebView2CoreCorewebview2CalldevtoolsprotocolmethodsyncSystemStringSystemString]: /dotnet/api/microsoft.web.webview2.core.corewebview2.calldevtoolsprotocolmethodasync?view=webview2-dotnet-1.0.774.44&preserve-view=true#Microsoft_Web_WebView2_Core_CoreWebView2_CallDevToolsProtocolMethodAsync_System_String_System_String_ "CoreWebView2.CallDevToolsProtocolMethodAsync(String, String) Method | Microsoft Docs"  

[Webview2ReferenceWin32Icorewebview2ViewWebview21077444Calldevtoolsprotocolmethod]: /microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-1.0.774.44&preserve-view=true#calldevtoolsprotocolmethod "CallDevToolsProtocolMethod - interface ICoreWebView2 | Microsoft Docs"  

[BingMaps]: https://www.bing.com/maps "Bing Maps"  

[GitHubChromedevtoolsDevtoolsProtocol]: https://chromedevtools.github.io/devtools-protocol "Chrome DevTools Protocol | GitHub"  
[GithubChromedevtoolsDevtoolsProtocolTotEmulationMethodSetgeolocationOverride]: https://chromedevtools.github.io/devtools-protocol/tot/Emulation#method-setGeolocationOverride "Emulation.setGeolocationOverride - Emulation Domain | Chrome DevTools Protocol"  
[GithubMicrosoftedgeWebview2feedback]: https://github.com/MicrosoftEdge/WebView2Feedback "WebView Feedback | GitHub"  
[GithubMicrosoftedgeWebview2samples]: https://github.com/MicrosoftEdge/WebView2Samples "WebView2 samples | GitHub"  

[ChromiumBugsChromiumIssuesEntryComponentsPlatformDevtoolsPlatform]: https://bugs.chromium.org/p/chromium/issues/entry?components=Platform%3EDevTools%3EPlatform "Bug report | Chromium Bugs"  

[NugettestIntPackagesMicrosoftWebWebView2DevToolsprotocolextension]: https://int.nugettest.org/packages/Microsoft.Web.WebView2.DevToolsProtocolExtension "Microsoft.Web.WebView2.DevToolsProtocolExtension | NuGet QA Gallery"  
