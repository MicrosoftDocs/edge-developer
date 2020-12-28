---
description: Getting started guide with WebView2 for WinForms apps
title: Getting started with WebView2 for WinForms apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 12/28/2020
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: WebView2, webview2, WebView, webview, winforms apps, winforms, edge, CoreWebView2, browser control, edge html, getting started, Getting Started, .NET, windows forms
---
# Getting started with WebView2 in Windows Forms  

In this article, get started creating your first WebView2 app and learn about the main features of [WebView2][Webview2Index].  For more information about individual APIs, navigate to [API reference][DotnetApiMicrosoftWebWebview2Winforms].  

## Prerequisites  

Ensure you install the following list of pre-requisites before proceeding.  

*   [WebView2 Runtime][MicrosoftDeveloperMicrosoftEdgeWebview2] or any [non-stable Microsoft Edge (Chromium) Canary channel][MicrosoftedgeinsiderDownload] installed on Windows 10, Windows 8.1, or Windows 7.  
*   [Visual Studio][MicrosoftVisualStudioMain] 2017 or later.  

> [!NOTE]
> WebView2 currently does not support the .NET 5 and .NET Core designers.  

## Step 1 - Create a single-window app  

Start with a basic desktop project containing a single main window.  

1.  Open **Visual Studio**.  
1.  Choose **Windows Forms .NET Framework App** > **Next**.  
    
    :::image type="complex" source="./media/winforms-newproject.png" alt-text="New project" lightbox="./media/winforms-newproject.png":::
       New project  
    :::image-end:::  
    
1.  Enter values for **Project name** and **Location**.  Choose **.NET Framework 4.6.2** or later.  
    
    :::image type="complex" source="./media/winforms-startproj.png" alt-text="Start project" lightbox="./media/winforms-startproj.png":::
       Start project  
    :::image-end:::  
    
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
    
    :::image type="complex" source="./media/winforms-emptyapp.png" alt-text="Empty App" lightbox="./media/winforms-emptyapp.png":::
       Empty App  
    :::image-end:::  
    
## Step 3 - Create a single WebView  

Next add a WebView to your app.  

1.  Open the **Windows Forms Designer**.  
1.  Search for **WebView2** in the **Toolbox**.  Drag and drop the **WebView2** control into the Windows Forms App.  
    
    :::image type="complex" source="./media/winforms-toolbox.png" alt-text="Toolbox displaying WebView2":::
       Toolbox displaying WebView2  
    :::image-end:::  
    
1.  Change the `Name` property to `webView`.  
    
    :::image type="complex" source="./media/winforms-properties.png" alt-text="Properties of the WebView2 control":::
       Properties of the WebView2 control  
    :::image-end:::  
    
1.  The `Source` property sets the initial URI displayed in the WebView2 control.  Set the Source property to `<https://www.microsoft.com>`  
    
    :::image type="complex" source="./media/winforms-source.png" alt-text="The Source property of the WebView2 control":::
       The Source property of the WebView2 control  
    :::image-end:::  
    
1.  Select `F5` to build and run your project.  Confirm that your WebView2 control displays [https://www.microsoft.com][MicrosoftMain].  
    
    :::image type="complex" source="./media/winforms-hellowebview.png" alt-text="Hello WebView" lightbox="./media/winforms-hellowebview.png":::
       Hello WebView  
    :::image-end:::  

> [!NOTE]
> If you are working on a high DPI monitor, you may have to [configure your Windows Forms app for high DPI support][DotnetFrameworkWinformsHighDpiSupportInWindowsFormsConfiguringYourWindowsFormsAppForHighDpiSupport].  

## Step 4 - Handle Window Resize Events  

Add a few more controls to your Windows Forms from the toolbox, and then handle window resize events appropriately.  

1.  In the **Windows Forms Designer**, open the **Toolbox**.  
1.  Drag and Drop a **TextBox** into the Windows Forms App.  Name the **TextBox** `addressBar` in the **Properties Tab**.  
1.  Drag and Drop a **Button** into the Windows Forms App.  Change the text in the **Button** to `Go!` and name the **Button** `goButton` in the **Properties Tab**.  
    
    The app should look like the following image in the designer.  
    
    :::image type="complex" source="./media/winforms-designer.png" alt-text="Designer" lightbox="./media/winforms-designer.png":::
       Designer  
    :::image-end:::  
    
1.  In `Form1.cs`, define `Form_Resize` to keep the controls in place when the App Window is resized.  
    
    ```csharp
    public Form1()
    {
        InitializeComponent();
        this.Resize += new System.EventHandler(this.Form_Resize);
    }
    
    private void Form_Resize(object sender, EventArgs e)
    {
        webView.Size = this.ClientSize - new System.Drawing.Size(webView.Location);
        goButton.Left = this.ClientSize.Width - goButton.Width;
        addressBar.Width = goButton.Left - addressBar.Left;
    }
    ```  

1.  Select `F5` to build and run your project.  Confirm that the app displays similar to the following screenshot.  
    
    :::image type="complex" source="./media/winforms-app.png" alt-text="App" lightbox="./media/winforms-app.png":::
       App  
    :::image-end:::  
    
## Step 5 - Navigation  

Add the ability to allow users to change the URL that the WebView2 control displays by adding an address bar to the app.  

1.  In `Form1.cs` add the `CoreWebView2` namespace by inserting the following code snippet at the top of `Form1.cs`.  
    
    ```csharp
    using Microsoft.Web.WebView2.Core;
    ```  
    
1.  In the **Windows Forms Designer**, double-click on the `Go!` button to create the `goButton_Click` method in `Form1.cs`.  Copy and paste the following snippet inside the function.  Now, the `goButton_Click` function navigates the WebView to the URL entered in the address bar.
    
    ```csharp
    private void goButton_Click(object sender, EventArgs e)
    {
        if (webView != null && webView.CoreWebView2 != null)
        {
            webView.CoreWebView2.Navigate(addressBar.Text);
        }
    }
    ```  
    
1.  Select `F5` to build and run your project.  Enter a new URL in the address bar, and choose **Go**.  For example, enter `https://www.bing.com`.  Confirm that the WebView2 control navigates to the URL.  
    
    > [!NOTE]
    > Ensure a complete URL is entered in the address bar.  An `ArgumentException` is thrown if the URL does not start with `http://` or `https://`
    
    :::image type="complex" source="./media/winforms-bing.png" alt-text="Bing" lightbox="./media/winforms-bing.png":::
       Bing  
    :::image-end:::
    
## Step 6 - Navigation events  

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

In `Form1.cs`, modify the constructor to match the following code snippet and add the `EnsureHttps` function.  

```csharp
public Form1()
{
    InitializeComponent();
    this.Resize += new System.EventHandler(this.Form_Resize);

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

## Step 7 - Scripting  

You may use host apps to inject JavaScript code into WebView2 controls at runtime.  Until the JavaScript is removed, the injected JavaScript applies to all new top-level documents and any child frames.  The injected JavaScript runs after the global object is created, but before any scripts in the HTML document.  

You may use scripting to alert the user when navigating to a non-HTTPS site.  Modify the `EnsureHttps` function so that it injects script into the web content using the `ExecuteScriptAsync` method.  

<!--todo: add link to ExecuteScriptAsync -->  

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

:::image type="complex" source="./media/winforms-https.png" alt-text="HTTPS" lightbox="./media/winforms-https.png":::
   HTTPS  
:::image-end:::

## Step 8 - Communication between host and web content  

The host and web content may communicate in the following ways using `postMessage`.  

*   Web content in a WebView2 control may post a message to the host using `window.chrome.webview.postMessage`.  The host handles the message using any registered `WebMessageReceived` on the host.  
*   Hosts post messages to web content in a WebView2 control using `CoreWebView2.PostWebMessageAsString` or `CoreWebView2.PostWebMessageAsJSON`.  These messages are caught by handlers added to `window.chrome.webview.addEventListener`.  

The communication mechanism allows web content to pass messages to the host using native capabilities.  

In your project, when the WebView2 control navigates to a URL, it displays the URL in the address bar and alerts the user of the URL displayed in the WebView2 control.  

1.  In `Form1.cs`, update your constructor and create an `InitializeAsync` function as shown in the following code snippet.  The `InitializeAsync` function awaits `EnsureCoreWebView2Async`, because the initialization of `CoreWebView2` is asynchronous.  
    
    <!--todo: add link to EnsureCoreWebView2Async method  -->  

    ```csharp
    public Form1()
    {
        InitializeComponent();
        this.Resize += new System.EventHandler(this.Form_Resize);
        webView.NavigationStarting += EnsureHttps;
        InitializeAsync();
    }

    async void InitializeAsync()
    {
        await webView.EnsureCoreWebView2Async(null);
    }
    ```  

1.  After **CoreWebView2** is initialized, register an event handler to respond to `WebMessageReceived`.  In `Form1.cs`, update `InitializeAsync` and add `UpdateAddressBar` using the following code snippet.  

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
    
    In `Form1.cs`, update `InitializeAsync` to match the following code snippet.  
    
    ```csharp
    async void InitializeAsync()
    {
        await webView.EnsureCoreWebView2Async(null);
        webView.CoreWebView2.WebMessageReceived += UpdateAddressBar;
        
        await webView.CoreWebView2.AddScriptToExecuteOnDocumentCreatedAsync("window.chrome.webview.postMessage(window.document.URL);");
        await webView.CoreWebView2.AddScriptToExecuteOnDocumentCreatedAsync("window.chrome.webview.addEventListener(\'message\', event => alert(event.data));");
    }
    ```  
    
1.  Select `F5` to build and run the app.  Confirm that the address bar displays the URL of the site displayed in the WebView.  Also, when you successfully navigate to a new URL, the WebView alerts the user of the URL displayed in the WebView.  
    
    :::image type="complex" source="./media/winforms-finalapp.png" alt-text="Final app" lightbox="./media/winforms-finalapp.png":::
       Final app  
    :::image-end:::
    
Congratulations, you built your first WebView2 app.  

## Next steps  

To continue learning more about WebView2, navigate to the following resources.  

*   For a comprehensive example of WebView2 capabilities, navigate to [WebView2Samples repo][GithubMicrosoftedgeWebview2samples] on GitHub.  
*   For more detailed information about WebView2 APIs, navigate to [API reference][DotnetApiMicrosoftWebWebview2WinformsWebview2].  
*   For more information about WebView2, navigate to [WebView2 Resources][Webview2IndexNextSteps].  
    
## Getting in touch with the Microsoft Edge WebView team  

[!INCLUDE [contact WebView team note](../includes/contact-webview-team-note.md)]  

<!-- links -->  

[Webview2ConceptsNavigationEvents]: ../concepts/navigation-events.md "Navigation events | Microsoft Docs"  
[Webview2Index]: ../index.md "Introduction to Microsoft Edge WebView2 | Microsoft Docs"  
[Webview2IndexNextSteps]: ../index.md#next-steps "Next steps - Introduction to Microsoft Edge WebView2 | Microsoft Docs"  

[DotnetApiMicrosoftWebWebview2Winforms]: /dotnet/api/microsoft.web.webview2.winforms "Microsoft.Web.WebView2.WinForms Namespace | Microsoft Docs"  
[DotnetApiMicrosoftWebWebview2WinformsWebview2]: /dotnet/api/microsoft.web.webview2.winforms.webview2 "WebView2 Class | Microsoft Docs"  

[DotnetFrameworkWinformsHighDpiSupportInWindowsFormsConfiguringYourWindowsFormsAppForHighDpiSupport]: /dotnet/framework/winforms/high-dpi-support-in-windows-forms#configuring-your-windows-forms-app-for-high-dpi-support "Configuring your Windows Forms app for high DPI support - High DPI support in Windows Forms | Microsoft Docs"  

[GithubMicrosoftedgeWebview2samples]: https://github.com/MicrosoftEdge/WebView2Samples "WebView2 Samples - MicrosoftEdge/WebView2Samples | GitHub"  

[MicrosoftDeveloperMicrosoftEdgeWebview2]: https://developer.microsoft.com/microsoft-edge/webview2 " WebView2 | Microsoft Edge Developer"  

[MicrosoftedgeinsiderDownload]: https://www.microsoftedgeinsider.com/download "Download Microsoft Edge Insider Channels"  

[MicrosoftMain]: https://www.microsoft.com "Microsoft"  

[MicrosoftVisualStudioMain]: https://visualstudio.microsoft.com "Microsoft Visual Studio"  
