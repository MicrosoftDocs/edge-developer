---
description: Get started guide with WebView2 for WPF apps
title: Get started with WebView2 for WPF apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/13/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: WebView2, webview2, WebView, webview, wpf apps, wpf, edge, CoreWebView2, browser control, edge html, get started, Get Started, .NET
---
# Get started with WebView2 in WPF

In this article, get started creating your first WebView2 app and learn about the main features of [WebView2][MicrosoftDeveloperMicrosoftEdgeWebview2].  For more information on individual APIs, navigate to [API reference][DotnetApiMicrosoftWebWebview2Wpf].  

## Prerequisites  

Ensure you install the following list of pre-requisites before proceeding.  

*   [WebView2 Runtime][Webview2Installer] or any [Microsoft Edge (Chromium) non-stable channel][MicrosoftedgeinsiderDownload] installed on supported OS \(currently Windows 10, Windows 8.1, and Windows 7\).  
*   [Visual Studio][MicrosoftVisualstudioMain] 2017 or later.  
    
## Step 1 - Create a single-window app  

Start with a basic desktop project that contains a single main window.  

1.  In Visual Studio, choose **WPF .NET Core App** \(or **WPF .NET Framework App**\) > **Next**.  
    
    :::row:::
       :::column span="1":::
          :::image type="complex" source="./media/wpf-getting-started-wpf-core.png" alt-text="WPF core":::
             WPF core
          :::image-end:::
       :::column-end:::
       :::column span="1":::
          :::image type="complex" source="./media/wpf-getting-started-wpf-fw.png" alt-text="WPF Framework":::
             WPF Framework
          :::image-end:::
       :::column-end:::
    :::row-end:::
    
1.  Enter values for **Project name** and **Location**.  Choose **.NET Framework 4.6.2** or later \(or **.NET Core 3.0** or later\).  
    
    :::row:::
       :::column span="1":::
          :::image type="complex" source="./media/wpf-getting-started-create-core.png" alt-text="Create core":::
             Create core
          :::image-end:::
       :::column-end:::
       :::column span="1":::
          :::image type="complex" source="./media/wpf-getting-started-create-fw.png" alt-text="Create Framework":::
             Create Framework
          :::image-end:::
       :::column-end:::
    :::row-end:::
    
1.  To create your project, choose **Create**.  
    
## Step 2 - Install WebView2 SDK  

Use NuGet to add the WebView2 SDK to the project.  

1.  Hover on the project, open the contextual menu \(right-click\), and choose **Manage NuGet Packages...**.  
    
    :::image type="complex" source="./media/wpf-getting-started-mng-nuget.png" alt-text="Manage NuGet packages" lightbox="./media/wpf-getting-started-mng-nuget.png":::
       Manage NuGet packages
    :::image-end:::
    
1.  In the search bar, type `Microsoft.Web.WebView2` > choose **Microsoft.Web.WebView2**.  
    
    :::image type="complex" source="./media/install-nuget.png" alt-text="NuGet" lightbox="./media/install-nuget.png":::
       NuGet  
    :::image-end:::
    
    Ready to start developing apps using the WebView2 API.  To build and run the project, select `F5`.  The running project displays an empty window.  
    
    :::image type="complex" source="./media/winforms-empty-app.png" alt-text="Empty app" lightbox="./media/winforms-empty-app.png":::
       Empty app  
    :::image-end:::  
    
## Step 3 - Create a single WebView 

Next add a WebView to your app.  

1.  In the `MainWindow.xaml` file, to add the WebView2 XAML namespace, insert the following line inside the `<Window/>` tag.  
    
    ```xml
    xmlns:wv2="clr-namespace:Microsoft.Web.WebView2.Wpf;assembly=Microsoft.Web.WebView2.Wpf"
    ```  
    
    Ensure the code in `MainWindow.xaml` looks like the following code snippet.  
    
    ```xml
    <Window x:Class="WPF_Getting_Started.MainWindow"
            xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
            xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
            xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
            xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
            xmlns:local="clr-namespace:{YOUR PROJECT NAME}"
            xmlns:wv2="clr-namespace:Microsoft.Web.WebView2.Wpf;assembly=Microsoft.Web.WebView2.Wpf"
            mc:Ignorable="d"
            Title="MainWindow"
            Height="450"
            Width="800"
    >
        <Grid>
        
        </Grid>
    </Window>
    ```  
    
1.  To add the WebView2 control, replace the `<Grid>` tags with the following code snippet.  The `Source` property sets the initial URI displayed in the WebView2 control.  
    
    ```xml  
    <DockPanel>
        <wv2:WebView2 Name="webView"
                      Source="https://www.microsoft.com"
        />
    </DockPanel>
    ```  
    
1.  To build and run the project, select `F5`  Ensure your WebView2 control displays [https://www.microsoft.com][MicrosoftMain].  
    
    :::image type="complex" source="./media/wpf-getting-started-microsoft.png" alt-text="Microsoft.com":::
       Microsoft.com
    :::image-end:::  
    
## Step 4 - Navigation  

Add the ability to allow users to change the URL that the WebView2 control displays by adding an address bar to the app.

1.  In the `MainWindow.xaml` file, add an address bar by copying and pasting the following code snippet inside the `<DockPanel>` that contains the WebView.  
    
    ```xml
    <DockPanel DockPanel.Dock="Top">
        <Button x:Name="ButtonGo"
                DockPanel.Dock="Right"
                Click="ButtonGo_Click"
                Content="Go"
        />
        <TextBox Name="addressBar"/>
    </DockPanel>
    ```  
    
    Ensure the `<DockPanel>` section of the `MainWindow.xaml` file matches the following code snippet.  
    
    ```xml
    <DockPanel>
        <DockPanel DockPanel.Dock="Top">
            <Button x:Name="ButtonGo" DockPanel.Dock="Right" Click="ButtonGo_Click" Content="Go"/>
            <TextBox Name = "addressBar"/>
        </DockPanel>
        <wv2:WebView2 Name = "webView"
                      Source = "https://www.microsoft.com"
        />
    </DockPanel>
    ```  
    
1.  In Visual Studio, in the `MainWindow.xaml.cs` file, to add the `CoreWebView2` namespace, insert the following code snippet at the top.  
    
    ```csharp
    using Microsoft.Web.WebView2.Core;
    ```
    
1.  In the `MainWindow.xaml.cs`file, copy the following code snippet to create the `ButtonGo_Click` method, which navigates the WebView to the URL entered in the address bar.  
    
    ```csharp
    private void ButtonGo_Click(object sender, RoutedEventArgs e)
    {
        if (webView != null && webView.CoreWebView2 != null)
        {
            webView.CoreWebView2.Navigate(addressBar.Text);
        }
    }
    ```  
    
    To build and run the project, select `F5`.  Type a new URL in the address bar and choose **Go**.  For example, type `https://www.bing.com`.  Ensure the WebView2 control navigates to the URL.  
    
    > [!NOTE]
    > Make sure a complete URL is entered in the address bar.  An `ArgumentException` is thrown if the URL does not start with `http://` or `https://`.  
    
    :::image type="complex" source="./media/wpf-getting-started-bing.png" alt-text="Bing":::
       bing.com
    :::image-end:::
    
## Step 5 - Navigation events  

During webpage navigation, the WebView2 control raises events.  The app that hosts WebView2 controls listens for the following events.  

*   `NavigationStarting`  
*   `SourceChanged`  
*   `ContentLoading`  
*   `HistoryChanged`  
*   `NavigationCompleted`  
    
For more information, navigate to [Navigation Events][Webview2ConceptsNavigationEvents].  

:::image type="complex" source="../media/navigation-events.png" alt-text="Navigation events":::
   Navigation events
:::image-end:::  

When an error occurs, the following events are raised and may depend on navigation to an error webpage.  

*   `SourceChanged`  
*   `ContentLoading`  
*   `HistoryChanged`  
    
> [!NOTE]
> If an HTTP redirect occurs, there are multiple `NavigationStarting` events in a row.  

To demonstrate how to use the events, register a handler for `NavigationStarting` that cancels any non-HTTPS requests.  

In the `MainWindow.xaml.cs` file, modify the constructor to match the following code snippet and add the `EnsureHttps` function.  

```csharp
public MainWindow()
{
    InitializeComponent();
    webView.NavigationStarting += EnsureHttps;
}

void EnsureHttps(object sender, CoreWebView2NavigationStartingEventArgs args)
{
    String uri = args.Uri;
    if (!uri.StartsWith("https://"))
    {
        args.Cancel = true;
    }
}
```  

In the constructor, `EnsureHttps` is registered as the event handler on the `NavigationStarting` event on the WebView2 control.  

To build and run the project, select `F5`.  Ensure when navigating to an HTTP site, the WebView remains unchanged.  However, the WebView navigates to HTTPS sites.  

## Step 6 - Scripting  

You may use host apps to inject JavaScript code into WebView2 controls at runtime.  You may task WebView to run arbitrary JavaScript or add initialization scripts.  The injected JavaScript applies to all new top-level documents and any child frames until the JavaScript is removed.  The injected JavaScript is run with specific timing.  

*   Run it after the creation of the global object.  
*   Run it before any other script included in the HTML document is run.  
    
As an example, add scripts that send an alert when a user navigates to non-HTTPS sites.  Modify the `EnsureHttps` function to inject a script into the web content that uses [ExecuteScriptAsync](/dotnet/api/microsoft.web.webview2.wpf.webview2.executescriptasync) method.  

```csharp
void EnsureHttps(object sender, CoreWebView2NavigationStartingEventArgs args)
{
    String uri = args.Uri;
    if (!uri.StartsWith("https://"))
    {
        webView.CoreWebView2.ExecuteScriptAsync($"alert('{uri} is not safe, try an https link')");
        args.Cancel = true;
    }
}
```  

To build and run the project, select `F5`.  Ensure the app displays an alert when you navigate to a website that doesn't use HTTPS.  

:::image type="complex" source="./media/wpf-getting-started-https.png" alt-text="HTTPS":::
   HTTPS
:::image-end:::  

## Step 7 - Communication between host and web content  

The host and web content may communicate in the following ways using `postMessage`.  

*   Web content in a WebView2 control may post a message to the host using `window.chrome.webview.postMessage`.  The host handles the message using any registered `WebMessageReceived` on the host.  
*   Hosts post messages to web content in a WebView2 control using `CoreWebView2.PostWebMessageAsString` or `CoreWebView2.PostWebMessageAsJSON`.  The messages are caught by handlers added to `window.chrome.webview.addEventListener`.  
    
The communication mechanism passes messages from web content to the host using native capabilities.  

In your project, when the WebView2 control navigates to a URL, it displays the URL in the address bar and alerts the user of the URL displayed in the WebView2 control.  

1.  In the `MainWindow.xaml.cs` file, update your constructor and create an `InitializeAsync` function to match the following code snippet.  The `InitializeAsync` function awaits [EnsureCoreWebView2Async](/dotnet/api/microsoft.web.webview2.wpf.webview2.ensurecorewebview2async) because the initialization of `CoreWebView2` is asynchronous.  
    
    ```csharp
    public MainWindow()
    {
        InitializeComponent();
        webView.NavigationStarting += EnsureHttps;
        InitializeAsync();
    }
    
    async void InitializeAsync()
    {
        await webView.EnsureCoreWebView2Async(null);
    }
    ```  
    
1.  After **CoreWebView2** is initialized, register an event handler to respond to `WebMessageReceived`.  In `MainWindow.xaml.cs`, update `InitializeAsync` and add `UpdateAddressBar` using the following code snippet.  
    
    ```csharp
    async void InitializeAsync()
    {
        await webView.EnsureCoreWebView2Async(null);
        webView.CoreWebView2.WebMessageReceived += UpdateAddressBar;
    }
    
    void UpdateAddressBar(object sender, CoreWebView2WebMessageReceivedEventArgs args)
    {
        String uri = args.TryGetWebMessageAsString();
        addressBar.Text = uri;
        webView.CoreWebView2.PostWebMessageAsString(uri);
    }
    ```  
    
1.  In order for the WebView to send and respond to the web message, after `CoreWebView2` is initialized, the host:  
    1.  Injects a script to the web content that registers a handler to print message from the host.  
    1.  Injects a script to the web content that posts the URL to the host.  
        
    In the `MainWindow.xaml.cs` file, update `InitializeAsync` to match the following code snippet.  
    
    ```csharp
    async void InitializeAsync()
    {
        await webView.EnsureCoreWebView2Async(null);
        webView.CoreWebView2.WebMessageReceived += UpdateAddressBar;
        
        await webView.CoreWebView2.AddScriptToExecuteOnDocumentCreatedAsync("window.chrome.webview.postMessage(window.document.URL);");
        await webView.CoreWebView2.AddScriptToExecuteOnDocumentCreatedAsync("window.chrome.webview.addEventListener(\'message\', event => alert(event.data));");
    }
    ```  
    
    To build and run the app, select `F5`.  Now, the address bar displays the URI in the WebView2 control.  When you successfully navigate to a new URI, the WebView2 control alerts the user of the URI that's displayed in the WebView2 control.  
    
    :::image type="complex" source="./media/wpf-getting-started-searchbar.png" alt-text="addressBar":::
       addressBar
    :::image-end:::
    
Congratulations, you built your first WebView2 app.  

## Next steps  

To continue learning more about WebView2, navigate to the following resources.  

*   To learn more about building WebView2 applications, navigate to [WebView2 development best practices][WV2BestPractices].  
*   For a comprehensive example of WebView2 capabilities, navigate to [WebView2Samples repo][GithubMicrosoftedgeWebview2samplesMain] on GitHub.  
*   For more detailed information about WebView2 API, navigate to [API reference](/dotnet/api/microsoft.web.webview2.wpf.webview2).  
*   For more information about  WebView2, navigate to [WebView2 Resources](../index.md#next-steps).  
    
## Getting in touch with the Microsoft Edge WebView team  

[!INCLUDE [contact WebView team note](../includes/contact-webview-team-note.md)]  

<!-- links -->  
 
[WV2BestPractices]: ../concepts/developer-guide.md "WebView2 development best practices | Microsoft Docs"  
[Webview2ConceptsNavigationEvents]: ../concepts/navigation-events.md "Navigation events | Microsoft Docs"  

[DotnetApiMicrosoftWebWebview2Wpf]: /dotnet/api/microsoft.web.webview2.wpf "Microsoft.Web.WebView2.Wpf Namespace | Microsoft Docs"  
[DotnetApiMicrosoftWebWebview2WpfWebview2]: /dotnet/api/microsoft.web.webview2.wpf.webview2 "WebView2 Class | Microsoft Docs"  
[DotnetApiMicrosoftWebWebview2WpfWebview2Ensurecorewebview2async]: /dotnet/api/microsoft.web.webview2.wpf.webview2.ensurecorewebview2async "WebView2.EnsureCoreWebView2Async(CoreWebView2Environment) Method | Microsoft Docs"  
[DotnetApiMicrosoftWebWebview2WpfWebview2Executescriptasync]: /dotnet/api/microsoft.web.webview2.wpf.webview2.executescriptasync "WebView2.ExecuteScriptAsync(String) Method | Microsoft Docs"  

[GithubMicrosoftedgeWebview2samplesMain]: https://github.com/MicrosoftEdge/WebView2Samples "WebView2 Samples - MicrosoftEdge/WebView2Samples | GitHub"  

[MicrosoftDeveloperMicrosoftEdgeWebview2]: https://developer.microsoft.com/microsoft-edge/webview2 " WebView2 | Microsoft Edge Developer"  

[MicrosoftedgeinsiderDownload]: https://www.microsoftedgeinsider.com/download "Download Microsoft Edge Insider Channels"  

[MicrosoftMain]: https://www.microsoft.com "Microsoft"  

[MicrosoftVisualStudioMain]: https://visualstudio.microsoft.com "Microsoft Visual Studio"  

[Webview2Installer]: https://developer.microsoft.com/microsoft-edge/webview2 "WebView2 Installer" 
