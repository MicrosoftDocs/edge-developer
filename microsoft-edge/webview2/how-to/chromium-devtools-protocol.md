---
description: Learn how to use the Chrome DevTools Protocol in your WebView2 apps using the Microsoft Edge WebView2 Chromium DevTools Protocol NuGet package
title: Use Chrome DevTools Protocol in WebView2
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/06/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, edge, ICoreWebView2, ICoreWebView2Controller, Chrome DevTools Protocol
---
# Use Chromium DevTools Protocol in WebView2  

The [Chromium DevTools Protocol][GitHubChromedevtoolsDevtoolsProtocol] provides APIs to instrument, inspect, debug, and profile Chromium-based browsers.  The Chromium DevTools Protocol is the foundation for the Microsoft Edge \(Chromium\) DevTools.  Use the Chromium DevTools Protocol for features that aren't implemented in the WebView2 platform.  For more information about the Chromium DevTools Protocol functionality, navigate to [Chromium DevTools Protocol][GitHubChromedevtoolsDevtoolsProtocol].  

> [!CAUTION]
> The Microsoft Edge WebView2 team does not maintain or support the Chromium DevTools Protocol.  The Chromium DevTools Protocol is maintained by the open source Chromium project.  
> 
> To send your suggestions for future WebView2 platform features, navigate to [WebView Feedback][GithubMicrosoftedgeWebview2feedback] and submit an issue.  

To use the Chromium DevTools Protocol API in WebView2, use either of the following actions.  

*   Install and use the [Microsoft.Web.WebView2.DevToolsProtocolExtension (Preview)][NugetPackagesMicrosoftWebWebView2DevToolsprotocolextension] NuGet package \(.NET\).  
*   Run one of the following methods.  
    *   .NET:  [CallDevToolsProtocolAsync][DotnetApiMicrosoftWebWebview2CoreCorewebview2CalldevtoolsprotocolmethodasyncViewWebview2Dotnet1077444MicrosoftWebWebView2CoreCorewebview2CalldevtoolsprotocolmethodsyncSystemStringSystemString], [GetDevToolsProtocolEventReceiver][DotnetApiMicrosoftWebWebview2CoreCorewebview2GetdevtoolsprotocoleventreceiverViewWebview2Dotnet1077444]  
    *   Win32 C/C++:  [CallDevToolsProtocolMethod][Webview2ReferenceWin32Icorewebview2ViewWebview21077444Calldevtoolsprotocolmethod], [ICoreWebView2DevToolsProtocolEventReceiver][Webview2ReferenceWin32Icorewebview2devtoolsprotocoleventreceiverViewWebview21077444]  
    
## Use DevToolsProtocolHelper (Preview)

> [!NOTE]
> The [Microsoft.Web.WebView2.DevToolsProtocolExtension][NugetPackagesMicrosoftWebWebView2DevToolsprotocolextension] NuGet package is currently in technical preview.  While in preview, refrain from using the package in production apps.

[Microsoft.Web.WebView2.DevToolsProtocolExtension (Preview)][NugetPackagesMicrosoftWebWebView2DevToolsprotocolextension] is a NuGet package created by the WebView2 team that provides easy access to Chromium DevTools Protocol features.  The following examples describe how to use the geolocation functionality in Chromium DevTools Protocol in your WebView2 control.  You may follow a similar pattern to use other Chromium DevTools Protocol features.  

## Step 1: Create a webpage to find your geolocation  

To create an `HTML file` to find your geolocation, complete following the actions.  

1.  Open Visual Studio Code \(or an IDE of your choice\).  
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
1.  To display your latitude and longitude coordinates, choose the **Display Location** button.  To verify and compare your geolocation, copy and paste your coordinates in [https://www.bing.com/maps][BingMaps].  
    
    :::image type="complex" source="./media/geolocater-browser.png" alt-text="Display the geolocation coordinates of the user in Microsoft Edge" lightbox="./media/geolocater-browser.png":::
       Display the geolocation coordinates of the user in Microsoft Edge  
    :::image-end:::  
    
## Step 2: Display geolocation.html in a WebView2  

1.  To create a WebView2 app, use either of the following get started guides or WebView2 samples.  
    *   [Get Started with WebView2 in Windows Forms][Webview2GetStartedWinforms]  
    *   [Get Started with WebView2 in WPF][Webview2GetStartedWpf]  
    *   [WebView2 samples][GithubMicrosoftedgeWebview2samples]  
        
1.  Set the initial navigation of the WebView2 control to `geolocation.html`.  
    
    ```csharp
    webView.CoreWebView2.Navigate(@"C:\{path\to\file}\geolocation.html");
    ```  
    
1.  Ensure the `geolocation.html` file displays in your WebView2 control app.  
    
    :::image type="complex" source="./media/initial-geolocate.png" alt-text="Display the geolocater.html file in your WebView2 control app" lightbox="./media/initial-geolocate.png":::
       Display the `geolocation.html` file in your WebView2 control app  
    :::image-end:::  
    
## Step 3: Install the DevToolsProtocolHelper NuGet package  

Use NuGet to download `Microsoft.Web.WebView2.DevToolsProtocolExtension`.  To install the package, complete the following actions.  

1.  Choose **Project** > **Manage NuGet Packages** > **Browse**.  
1.  Type `Microsoft.Web.WebView2.DevToolsProtocolExtension` and choose **Microsoft.Web.WebView2.DevToolsProtocolExtension** > **Install**.   
    
:::image type="complex" source="./media/cdp-nuget.png" alt-text="Ensure Microsoft.Web.WebView2.DevToolsProtocolExtension displays in the Visual Studio NuGet Package Manager" lightbox="./media/cdp-nuget.png":::
   Ensure **Microsoft.Web.WebView2.DevToolsProtocolExtension** displays in the Visual Studio NuGet Package Manager  
:::image-end:::    

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
    
1.  Run the [setGeoLocationOverrideAsync][GithubChromedevtoolsDevtoolsProtocolTotEmulationMethodSetgeolocationoverride] method.  For more information, navigate to [setGeolocationOverride][GithubChromedevtoolsDevtoolsProtocolTotEmulationMethodSetgeolocationoverride].  
    
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
    
## File a Chromium DevTools Protocol bug  

The WebView2 team doesn't own the Chromium DevTools Protocol.  

> [!IMPORTANT]
> Direct feedback and bugs to the Chromium Issues repo.  

To file a Chromium DevTools Protocol bug or issue, complete the following actions.  

1.  File a [bug report][ChromiumBugsChromiumIssuesEntryComponentsPlatformDevtoolsPlatform].  
1.  Navigate to [WebView Feedback][GithubMicrosoftedgeWebview2feedback] and open a new issue.  
    
## See also  

*   [WebView2 samples][GithubMicrosoftedgeWebview2samples]  
    
 <!-- links -->  

[Webview2GetStartedWinforms]: /microsoft-edge/webview2/get-started/winforms "Get started with WebView2 in Windows Forms | Microsoft Docs"  
[Webview2GetStartedWpf]: /microsoft-edge/webview2/get-started/wpf "Get started with WebView2 in WPF | Microsoft Docs"  

[DotnetApiMicrosoftWebWebview2CoreCorewebview2GetdevtoolsprotocoleventreceiverViewWebview2Dotnet1077444]: /dotnet/api/microsoft.web.webview2.core.corewebview2.getdevtoolsprotocoleventreceiver?view=webview2-dotnet-1.0.774.44&preserve-view=true "CoreWebView2.GetDevToolsProtocolEventReceiver(String) Method | Microsoft Docs"  
[DotnetApiMicrosoftWebWebview2CoreCorewebview2CalldevtoolsprotocolmethodasyncViewWebview2Dotnet1077444MicrosoftWebWebView2CoreCorewebview2CalldevtoolsprotocolmethodsyncSystemStringSystemString]: /dotnet/api/microsoft.web.webview2.core.corewebview2.calldevtoolsprotocolmethodasync?view=webview2-dotnet-1.0.774.44&preserve-view=true#Microsoft_Web_WebView2_Core_CoreWebView2_CallDevToolsProtocolMethodAsync_System_String_System_String_ "CoreWebView2.CallDevToolsProtocolMethodAsync(String, String) Method | Microsoft Docs"  

[Webview2ReferenceWin32Icorewebview2ViewWebview21077444Calldevtoolsprotocolmethod]: /microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-1.0.774.44&preserve-view=true#calldevtoolsprotocolmethod "CallDevToolsProtocolMethod - interface ICoreWebView2 | Microsoft Docs"  
[Webview2ReferenceWin32Icorewebview2devtoolsprotocoleventreceiverViewWebview21077444]: /microsoft-edge/webview2/reference/win32/icorewebview2devtoolsprotocoleventreceiver?view=webview2-1.0.774.44&preserve-view=true "interface ICoreWebView2DevToolsProtocolEventReceiver | Microsoft Docs"  

[BingMaps]: https://www.bing.com/maps "Bing Maps"  

[GitHubChromedevtoolsDevtoolsProtocol]: https://chromedevtools.github.io/devtools-protocol "Chrome DevTools Protocol | GitHub"  
[GithubChromedevtoolsDevtoolsProtocolTotEmulationMethodSetgeolocationoverride]: https://chromedevtools.github.io/devtools-protocol/tot/Emulation/#method-setGeolocationOverride "Emulation.setGeolocationOverride - Chrome DevTools Protocol | GitHub"  

[GithubMicrosoftedgeWebview2feedback]: https://github.com/MicrosoftEdge/WebView2Feedback "WebView Feedback | GitHub"  
[GithubMicrosoftedgeWebview2samples]: https://github.com/MicrosoftEdge/WebView2Samples "WebView2 samples | GitHub"  

[ChromiumBugsChromiumIssuesEntryComponentsPlatformDevtoolsPlatform]: https://bugs.chromium.org/p/chromium/issues/entry?components=Platform%3EDevTools%3EPlatform "Bug report | Chromium Bugs"  

[NugetPackagesMicrosoftWebWebView2DevToolsprotocolextension]: https://www.nuget.org/packages/Microsoft.Web.WebView2.DevToolsProtocolExtension "Microsoft.Web.WebView2.DevToolsProtocolExtension | NuGet QA Gallery"  
