---
description: Getting started guide with WebView2 for WPF apps
title: Getting started with WebView2 for WPF apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 12/28/2020
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: WebView2, webview2, WebView, webview, wpf apps, wpf, edge, CoreWebView2, browser control, edge html, getting started, Getting Started, .NET
---
# Getting started with WebView2 in WPF

In this article, get started creating your first WebView2 app and learn about the main features of [WebView2][Webview2Index].  For more information about individual APIs, navigate to [API reference][DotnetApiMicrosoftWebWebview2Wpf].  

## Prerequisites  

Ensure you install the following list of pre-requisites before proceeding.  

*   [WebView2 Runtime][MicrosoftDeveloperMicrosoftEdgeWebview2] or any [non-stable Microsoft Edge (Chromium) Canary channel][MicrosoftedgeinsiderDownload] installed on Windows 10, Windows 8.1, or Windows 7.  
*   [Visual Studio][MicrosoftVisualStudioMain] 2017 or later.  

## Step 1 - Create a single window app  

Start with a basic desktop project containing a single main window.  

1.  Open **Visual Studio**.  
1.  Choose **WPF .NET Core App** \(or **WPF .NET Framework App**\) > **Next**.  
    
    :::row:::
       :::column span="1":::
          :::image type="complex" source="./media/wpf-gettingstarted-wpfcore.png" alt-text="WPF core":::
             WPF core
          :::image-end:::
       :::column-end:::
       :::column span="1":::
          :::image type="complex" source="./media/wpf-gettingstarted-wpffw.png" alt-text="WPF Framework":::
             WPF Framework
          :::image-end:::
       :::column-end:::
    :::row-end:::
    
1.  Enter values for **Project name** and **Location**.  Choose **.NET Framework 4.6.2** or later \(or **.NET Core 3.0** or later\).  
    
    :::row:::
           :::column span="1":::
              :::image type="complex" source="./media/wpf-gettingstarted-createcore.png" alt-text="Create core":::
                 Create core
              :::image-end:::
           :::column-end:::
           :::column span="1":::
              :::image type="complex" source="./media/wpf-gettingstarted-createfw.png" alt-text="Create Framework":::
                 Create Framework
              :::image-end:::
           :::column-end:::
        :::row-end:::
    
1.  Choose **Create** to create your project.  
    
## Step 2 - Install WebView2 SDK  

Next add the WebView2 SDK to the project using NuGet.  

1.  Open the context menu on the project \(right-click\), and choose **Manage NuGet Packages...**.  
    
    :::image type="complex" source="./media/wpf-gettingstarted-mngnuget.png" alt-text="Manage NuGet Packages":::
       Manage NuGet Packages
    :::image-end:::
    
1.  In the search bar, enter `Microsoft.Web.WebView2`.  Choose **Microsoft.Web.WebView2** from the search results.  
    
    :::image type="complex" source="./media/installnuget.png" alt-text="NuGet" lightbox="./media/installnuget.png":::
       NuGet  
    :::image-end:::  
    
    Next, start developing apps using the WebView2 API.  Select `F5` to build and run the project.  The running project displays an empty window.  
    
    :::image type="complex" source="./media/winforms-emptyapp.png" alt-text="Empty app" lightbox="./media/winforms-emptyapp.png":::
       Empty app  
    :::image-end:::  
    
## Step 3 - Create a single WebView 

Next add a WebView to your app.  

1.  Open `MainWindow.xaml`.  Add the WebView2 XAML namespace by inserting the following line inside the `<Window/>` tag.  
    
    ```xml
    xmlns:wv2="clr-namespace:Microsoft.Web.WebView2.Wpf;assembly=Microsoft.Web.WebView2.Wpf"
    ```  
    
    Confirm that the code in `MainWindow.xaml` looks like the following code snippet.  
    
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
    
1.  Add the WebView2 control by replacing the `<Grid>` tags, with the following code snippet.  The `Source` property sets the initial URI displayed in the WebView2 control.  
    
    ```xml  
    <DockPanel>
        <wv2:WebView2 Name="webView"
                      Source="https://www.microsoft.com"
        />
    </DockPanel>
    ```  
    
1.  Select `F5` to build and run your project.  Confirm that your WebView2 control displays [https://www.microsoft.com][MicrosoftMain].  
    
    :::image type="complex" source="./media/wpf-gettingstarted-microsoft.png" alt-text="Microsoft.com":::
       Microsoft.com
    :::image-end:::  
    
## Step 4 - Navigation  

Add the ability to allow users to change the URL that the WebView2 control displays by adding an address bar to the app.

1.  In `MainWindow.xaml`, add an address bar by copying and pasting the following code snippet inside the **DockPanel** that contains the WebView.  
    
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
    
    Confirm that the `DockPanel` section of `MainWindow.xaml` looks like the following code snippet.  
    
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
    
1.  Open `MainWindow.xaml.cs` in Visual Studio.  Add the `CoreWebView2` namespace by inserting the following code snippet at the top of `MainWindow.xaml.cs`.  
    
    ```csharp
    using Microsoft.Web.WebView2.Core;
    ```
    
1.  In `MainWindow.xaml.cs`, copy the following code snippet to create the `ButtonGo_Click` method, which navigates the WebView to the URL entered in the address bar.  
    
    ```csharp
    private void ButtonGo_Click(object sender, RoutedEventArgs e)
    {
        if (webView != null && webView.CoreWebView2 != null)
        {
            webView.CoreWebView2.Navigate(addressBar.Text);
        }
    }
    ```  
    
 1.  Select `F5` to build and run your project.  Enter a new URL in the address bar, and choose **Go**.  For example, enter `https://www.bing.com`.  Confirm that the WebView2 control navigates to the URL.  
     
     > [!NOTE]
     > Make sure a complete URL is entered in the address bar.  An `ArgumentException` is thrown if the URL does not start with `http://` or `https://`.  
     
     :::image type="complex" source="./media/wpf-gettingstarted-bing.png" alt-text="Bing":::
        Bing
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

When an error occurs, the following events are raised and may depend on navigation to an error page.  

*   `SourceChanged`  
*   `ContentLoading`  
*   `HistoryChanged`  

When HTTP is redirected, there are multiple `NavigationStarting` events.  

To demonstrate how to use the events, start by registering a handler for `NavigationStarting` that cancels any requests not using HTTPS.  

In `MainWindow.xaml.cs`, modify the constructor to match the following code snippet and add the `EnsureHttps` function.  

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

Select `F5` to build and run your project.  Confirm that after you navigate to an HTTP site, the WebView remains unchanged.  However, the WebView navigates to HTTPS sites.  

## Step 6 - Scripting  

You may use host apps to inject JavaScript code into WebView2 controls at runtime.  Until the JavaScript is removed, the injected JavaScript applies to all new top-level documents and any child frames.  The injected JavaScript runs after the global object is created, but before any scripts in the HTML document.  

You may use scripting to alert the user when navigating to a non-HTTPS site.  Modify the `EnsureHttps` function so that it injects script into the web content using the [ExecuteScriptAsync][DotnetApiMicrosoftWebWebview2WpfWebview2Executescriptasync] method.  


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

Select `F5` to build and run your project.  Confirm that the app displays an alert when you navigate to a site not using HTTPS.  

:::image type="complex" source="./media/wpf-gettingstarted-https.png" alt-text="HTTPS":::
   HTTPS
:::image-end:::  

## Step 7 - Communication between host and web content  

The host and web content may communicate in the following ways using `postMessage`.  

*   Web content in a WebView2 control may post a message to the host using `window.chrome.webview.postMessage`.  The host handles the message using any registered `WebMessageReceived` on the host.  
*   Hosts post messages to web content in a WebView2 control using `CoreWebView2.PostWebMessageAsString` or `CoreWebView2.PostWebMessageAsJSON`.  The messages are caught by handlers added to `window.chrome.webview.addEventListener`.  

The communication mechanism allows web content to pass messages to the host using native capabilities.  

In your project, when the WebView2 control navigates to a URL, it displays the URL in the address bar and alerts the user of the URL displayed in the WebView2 control.  

1.  In `MainWindow.xaml.cs`, update your constructor and create an `InitializeAsync` function as shown in the following code snippet.  The `InitializeAsync` function awaits [EnsureCoreWebView2Async][DotnetApiMicrosoftWebWebview2WpfWebview2Ensurecorewebview2async], because the initialization of `CoreWebView2` is asynchronous.  
    
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
    
1.  In order for the WebView to send and respond to the web message, after `CoreWebView2` is initialized, the host injects a script in the web content to complete the following actions.  
    
    1.  Send the URL to the host using `postMessage`.
    1.  Register an event handler to print a message sent from the host.  
    
    In `MainWindow.xaml.cs`, update `InitializeAsync` to match the following code snippet.  
    
    ```csharp
    async void InitializeAsync()
    {
        await webView.EnsureCoreWebView2Async(null);
        webView.CoreWebView2.WebMessageReceived += UpdateAddressBar;
        
        await webView.CoreWebView2.AddScriptToExecuteOnDocumentCreatedAsync("window.chrome.webview.postMessage(window.document.URL);");
        await webView.CoreWebView2.AddScriptToExecuteOnDocumentCreatedAsync("window.chrome.webview.addEventListener(\'message\', event => alert(event.data));");
    }
    ```  
    
1.  Select `F5` to build and run the app.  Now, the address bar displays the URI in the WebView2 control.  When you successfully navigate to a new URI, the WebView2 control alerts the user of the URI that is displayed in the WebView2 control.  
    
    :::image type="complex" source="./media/wpf-gettingstarted-searchbar.png" alt-text="addressBar":::
       addressBar
    :::image-end:::

Congratulations, you built your first WebView2 app.  

## Next steps  

*   For a comprehensive example of WebView2 capabilities, navigate to [WebView2Samples repo][GithubMicrosoftedgeWebview2samples] on GitHub.  
*   For more detailed information about WebView2 APIs, navigate to [API reference][DotnetApiMicrosoftWebWebview2WpfWebview2].  
*   For more information about WebView2, navigate to [WebView2 Resources][Webview2IndexNextSteps].  

## Getting in touch with the Microsoft Edge WebView team  

[!INCLUDE [contact WebView team note](../includes/contact-webview-team-note.md)]  

<!-- links -->  

[Webview2ConceptsNavigationEvents]: ../concepts/navigation-events.md "Navigation events | Microsoft Docs"  
[Webview2Index]: ../index.md "Introduction to Microsoft Edge WebView2 | Microsoft Docs"  
[Webview2IndexNextSteps]: ../index.md#next-steps "Next steps - Introduction to Microsoft Edge WebView2 | Microsoft Docs"  

[DotnetApiMicrosoftWebWebview2Wpf]: /dotnet/api/microsoft.web.webview2.wpf "Microsoft.Web.WebView2.Wpf Namespace | Microsoft Docs"  
[DotnetApiMicrosoftWebWebview2WpfWebview2]: /dotnet/api/microsoft.web.webview2.wpf.webview2 "WebView2 Class | Microsoft Docs"  
[DotnetApiMicrosoftWebWebview2WpfWebview2Ensurecorewebview2async]: /dotnet/api/microsoft.web.webview2.wpf.webview2.ensurecorewebview2async "WebView2.EnsureCoreWebView2Async(CoreWebView2Environment) Method | Microsoft Docs"  
[DotnetApiMicrosoftWebWebview2WpfWebview2Executescriptasync]: /dotnet/api/microsoft.web.webview2.wpf.webview2.executescriptasync "WebView2.ExecuteScriptAsync(String) Method | Microsoft Docs"  

[GithubMicrosoftedgeWebview2samples]: https://github.com/MicrosoftEdge/WebView2Samples "WebView2 Samples - MicrosoftEdge/WebView2Samples | GitHub"  

[MicrosoftDeveloperMicrosoftEdgeWebview2]: https://developer.microsoft.com/microsoft-edge/webview2 " WebView2 | Microsoft Edge Developer"  

[MicrosoftedgeinsiderDownload]: https://www.microsoftedgeinsider.com/download "Download Microsoft Edge Insider Channels"  

[MicrosoftMain]: https://www.microsoft.com "Microsoft"  

[MicrosoftVisualStudioMain]: https://visualstudio.microsoft.com "Microsoft Visual Studio"  
