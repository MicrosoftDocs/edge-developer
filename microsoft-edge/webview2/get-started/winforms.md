---
description: Get started guide with WebView2 for WinForms apps
title: Get started with WebView2 for WinForms apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/06/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: WebView2, webview2, WebView, webview, winforms apps, winforms, edge, CoreWebView2, browser control, edge html, get started, Get Started, .NET, windows forms
---
# Get started with WebView2 in Windows Forms

In this article, get started creating your first WebView2 app and learn about the main features of [WebView2][MicrosoftDeveloperMicrosoftEdgeWebview2].  For more information on individual APIs, navigate to [API reference][DotnetApiMicrosoftWebWebview2Winforms].  

## Prerequisites  

Ensure you install the following list of pre-requisites before proceeding.  

*   [WebView2 Runtime][MicrosoftDeveloperMicrosoftEdgeWebview2] or any [Microsoft Edge (Chromium) non-stable channel][MicrosoftedgeinsiderDownload] installed on supported OS \(currently Windows 10, Windows 8.1, and Windows 7\).  
    
    > [!NOTE]
    > The WebView team recommends using the Canary channel and the minimum required version is 82.0.488.0.  
    
*   [Visual Studio][MicrosoftVisualstudioMain] 2017 or later.  
    
> [!NOTE]
> WebView2 currently does not support the .NET 5 and .NET Core designers.  

## Step 1 - Create a single-window app

Start with a basic desktop project that contains a single main window.  

1.  In Visual Studio, choose **Windows Forms .NET Framework App** > **Next**.
    
    :::image type="complex" source="./media/winforms-new-project.png" alt-text="New project" lightbox="./media/winforms-new-project.png":::
       New project  
    :::image-end:::
    
1.  Enter values for **Project name** and **Location**.  Choose **.NET Framework 4.6.2** or later.  
    
    :::image type="complex" source="./media/winforms-start-proj.png" alt-text="Start project" lightbox="./media/winforms-start-proj.png":::
       Start project  
    :::image-end:::
    
1.  To create your project, choose **Create**.
    
## Step 2 - Install WebView2 SDK

Use NuGet to add the WebView2 SDK to the project.  

1.  Hover on the project, open the contextual menu \(right-click\), and choose **Manage NuGet Packages...**.  
    
    :::image type="complex" source="./media/wpf-getting-started-mng-nuget.png" alt-text="Manage NuGet Packages":::
       Manage NuGet Packages
    :::image-end:::
    
1.  In the search bar, type `Microsoft.Web.WebView2` > choose **Microsoft.Web.WebView2**.  
    
    :::image type="complex" source="./media/install-nuget.png" alt-text="NuGet" lightbox="./media/install-nuget.png":::
       NuGet  
    :::image-end:::
    
    Start developing apps using the WebView2 API.  To build and run the project, select `F5`.  The running project displays an empty window.  
    
    :::image type="complex" source="./media/winforms-empty-app.png" alt-text="Empty app" lightbox="./media/winforms-empty-app.png":::
       Empty app  
    :::image-end:::
    
## Step 3 - Create a single WebView  

Add a WebView to your app.  

1.  Open the **Windows Forms Designer**.  
1.  Search for **WebView2** in the **Toolbox**.  
    
    > [!NOTE]
    > If you are using Visual Studio 2017, by default **WebView2** may not display in the **Toolbox**.  To enable the behavior, choose **Tools** > **Options** > **General** > set the **Automatically Populate Toolbox** setting to `True`.  
    
    Drag and drop the **WebView2** control into the Windows Forms App.
    
    :::image type="complex" source="./media/winforms-toolbox.png" alt-text="Toolbox displaying WebView2":::
       Toolbox displaying WebView2  
    :::image-end:::  
    
1.  Set the `(Name)` property to `webView`.
    
    :::image type="complex" source="./media/winforms-properties.png" alt-text="Properties of the WebView2 control":::
       Properties of the WebView2 control
    :::image-end:::
    
1.  The `Source` property sets the initial URI displayed in the WebView2 control.  Set the `Source` property to `https://www.microsoft.com`.  
    
    :::image type="complex" source="./media/winforms-source.png" alt-text="The Source property of the WebView2 control":::
       The **Source** property of the WebView2 control
    :::image-end:::  

To build and run your project, select `F5`.  Ensure your WebView2 control displays [https://www.microsoft.com][MicrosoftMain].

:::image type="complex" source="./media/winforms-hello-webview.png" alt-text="hello webview" lightbox="./media/winforms-hello-webview.png":::
   hello webview  
:::image-end:::    

> [!NOTE]
> If you are working on a high DPI monitor, you may have to [configure your Windows Forms app for high DPI support][DotnetFrameworkWinformsHighDpiSupportWindowsFormsConfiguringYourWindowsFormsAppForHighDpiSupport].  

## Step 4 - Handle Window Resize Events  

Add a few more controls to your Windows Forms from the toolbox, and then handle window resize events appropriately.  

1.  In the **Windows Forms Designer**, open the **Toolbox**.  
1.  Drag and Drop a **TextBox** into the Windows Forms App.  Name the **TextBox** `addressBar` in the **Properties Tab**.  
1.  Drag and Drop a **Button** into the Windows Forms App.  Change the text in the **Button** to `Go!` and name the **Button** `goButton` in the **Properties Tab**.  
    
    The app should look like the following image in the designer.  
    
    :::image type="complex" source="./media/winforms-designer.png" alt-text="WinForms designer" lightbox="./media/winforms-designer.png":::
       WinForms designer  
    :::image-end:::  

1.  In the `Form1.cs` file, define `Form_Resize` to keep the controls in place when the App Window is resized.
    
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

To build and run your project, select `F5`.  Ensure the app displays similar to the following screenshot.

:::image type="complex" source="./media/winforms-app.png" alt-text="app" lightbox="./media/winforms-app.png":::
   App  
:::image-end:::  

## Step 5 - Navigation

Add the ability to allow users to change the URL that the WebView2 control displays by adding an address bar to the app.  

1.  Select `F5` to build and run your project.  Confirm that the app displays similar to the following screenshot.  
    
    :::image type="complex" source="./media/winforms-app.png" alt-text="WinForms App" lightbox="./media/winforms-app.png":::
       WinForms App  
    :::image-end:::  
    
1.  In the `Form1.cs`file, to add the `CoreWebView2` namespace, insert the following code snippet at the top.  
1.  In `Form1.cs` add the `CoreWebView2` namespace by inserting the following code snippet at the top of `Form1.cs`.  
    
    ```csharp
    using Microsoft.Web.WebView2.Core;
    ```
    
1.  In the **Windows Forms Designer**, double-click on the `Go!` button to create the `goButton_Click` method in the `Form1.cs` file.  Copy and paste the following snippet inside the function.  Now, the `goButton_Click` function navigates the WebView to the URL entered in the address bar.
    
    ```csharp
    private void goButton_Click(object sender, EventArgs e)
    {
        if (webView != null && webView.CoreWebView2 != null)
        {
            webView.CoreWebView2.Navigate(addressBar.Text);
        }
    }
    ```  
    
To build and run your project, select `F5`.  Enter a new URL in the address bar, and select **Go**.  For example, enter `https://www.bing.com`.  Ensure the WebView2 control navigates to the URL.  

> [!NOTE]
> Ensure a complete URL is entered in the address bar.  An `ArgumentException` is thrown if the URL does not start with `http://` or `https://`

:::image type="complex" source="./media/winforms-bing.png" alt-text="bing.com" lightbox="./media/winforms-bing.png":::
   bing.com  
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

When an error occurs, the following events are raised and may depend on navigation to an error webpage.  

*   `SourceChanged`  
*   `ContentLoading`  
*   `HistoryChanged`  
    
> [!NOTE]
> If an HTTP redirect occurs, there are multiple `NavigationStarting` events in a row.  

To demonstrate how to use the events, start by registering a handler for `NavigationStarting` that cancels any requests not using HTTPS.  

In the `Form1.cs` file, update the constructor to match the following code snippet and add the `EnsureHttps` function.  

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

To build and run your project, select `F5`.  Ensure when navigating to an HTTP site, the WebView remains unchanged.  However, the WebView will navigate to HTTPS sites.

## Step 7 - Scripting  

You may use host apps to inject JavaScript code into WebView2 controls at runtime.  You may task WebView to run arbitrary JavaScript or add initialization scripts.  The injected JavaScript applies to all new top-level documents and any child frames until the JavaScript is removed.  The injected JavaScript is run with specific timing.  

*   Run it after the creation of the global object.  
*   Run it before any other script included in the HTML document is run.  
    
As an example, add scripts that send an alert when a user navigates to non-HTTPS sites.  Modify the `EnsureHttps` function to inject a script into the web content that uses [ExecuteScriptAsync][DotnetApiMicrosoftWebWebview2WinformsWebview2Executescriptasync] method.  

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

To build and run your project, select `F5`.  Ensure the app displays an alert when you navigate to a website that doesn't use HTTPS.  

:::image type="complex" source="./media/winforms-https.png" alt-text="https" lightbox="./media/winforms-https.png":::
   https  
:::image-end:::  

## Step 8 - Communication between host and web content  

The host and web content may use `postMessage` to communicate with each other as follows:  

*   Web content in a WebView2 control may use `window.chrome.webview.postMessage` to post a message to the host.  The host handles the message using any registered `WebMessageReceived` on the host.  
*   Hosts post messages to web content in a WebView2 control using `CoreWebView2.PostWebMessageAsString` or `CoreWebView2.PostWebMessageAsJSON`.  These messages are caught by handlers added to `window.chrome.webview.addEventListener`.  
    
The communication mechanism passes messages from web content to the host using native capabilities.  

In your project, when the WebView2 control navigates to a URL, it displays the URL in the address bar and alerts the user of the URL displayed in the WebView2 control.  

1.  In the `Form1.cs` file, update your constructor and create an `InitializeAsync` function to match the following code snippet.  The `InitializeAsync` function awaits [EnsureCoreWebView2Async][DotnetApiMicrosoftWebWebview2WinformsWebview2Ensurecorewebview2async] because the initialization of `CoreWebView2` is asynchronous.  
    
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
    
1.  After `CoreWebView2` is initialized, register an event handler to respond to `WebMessageReceived`.  In the `Form1.cs` file, update `InitializeAsync` and add `UpdateAddressBar` using the following code snippet.  
    
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
    
1.  In order for the WebView to send and respond to the web message, after `CoreWebView2` is initialized, the host injects a script in the web content to:  
    1.  Send the URL to the host using `postMessage`.
    1.  Register an event handler to print a message sent from the host.  
        
In the `Form1.cs` file, update `InitializeAsync` to match the following code snippet.  

```csharp
async void InitializeAsync()
{
    await webView.EnsureCoreWebView2Async(null);
    webView.CoreWebView2.WebMessageReceived += UpdateAddressBar;

    await webView.CoreWebView2.AddScriptToExecuteOnDocumentCreatedAsync("window.chrome.webview.postMessage(window.document.URL);");
    await webView.CoreWebView2.AddScriptToExecuteOnDocumentCreatedAsync("window.chrome.webview.addEventListener(\'message\', event => alert(event.data));");
}
```  

To build and run the app, select `F5`.  Now, the address bar displays the URI in the WebView2 control.  Also, when you successfully navigate to a new URL, the WebView alerts the user of the URL displayed in the WebView.  

:::image type="complex" source="./media/winforms-final-app.png" alt-text="Final app" lightbox="./media/winforms-final-app.png":::
   Final app  
:::image-end:::  

Congratulations, you built your first WebView2 app.  

## Next steps  

To continue learning more about WebView2, navigate to the following resources.  

*   To learn more about building WebView2 applications, navigate to [WebView2 development best practices][WV2BestPractices].  
*   For a comprehensive example of WebView2 capabilities, navigate to [WebView2Samples][GithubMicrosoftedgeWebview2samplesMain].  
*   For more information about WebView2, navigate to [WebView2 Resources][Webview2IndexNextSteps].  
*   For detailed information about the WebView2 API, navigate to [API reference][DotnetApiMicrosoftWebWebview2WinformsWebview2].  
    
## Getting in touch with the Microsoft Edge WebView team  

[!INCLUDE [contact WebView team note](../includes/contact-webview-team-note.md)]  

<!-- links -->  

[WV2BestPractices]: ../concepts/developer-guide.md "WebView2 development best practices | Microsoft Docs"  
[Webview2IndexNextSteps]: ../index.md#next-steps "Next steps - Introduction to Microsoft Edge WebView2 (Preview) | Microsoft Docs"  
[Webview2ConceptsNavigationEvents]: ../concepts/navigation-events.md "Navigation events | Microsoft Docs"  

[DotnetApiMicrosoftWebWebview2Winforms]: /dotnet/api/microsoft.web.webview2.winforms "Microsoft.Web.WebView2.WinForms Namespace | Microsoft Docs"  
[DotnetApiMicrosoftWebWebview2WinformsWebview2]: /dotnet/api/microsoft.web.webview2.winforms.webview2 "WebView2 Class | Microsoft Docs"  
[DotnetApiMicrosoftWebWebview2WinformsWebview2Ensurecorewebview2async]: /dotnet/api/microsoft.web.webview2.winforms.webview2.ensurecorewebview2async "WebView2.EnsureCoreWebView2Async(CoreWebView2Environment) Method | Microsoft Docs"  
[DotnetApiMicrosoftWebWebview2WinformsWebview2Executescriptasync]: /dotnet/api/microsoft.web.webview2.winforms.webview2.executescriptasync "WebView2.ExecuteScriptAsync(String) Method | Microsoft Docs"  

[DotnetFrameworkWinformsHighDpiSupportWindowsFormsConfiguringYourWindowsFormsAppForHighDpiSupport]: /dotnet/framework/winforms/high-dpi-support-in-windows-forms#configuring-your-windows-forms-app-for-high-dpi-support "Configuring your Windows Forms app for high DPI support - High DPI support in Windows Forms | Microsoft Docs"  

[GithubMicrosoftedgeWebview2samplesMain]: https://github.com/MicrosoftEdge/WebView2Samples "WebView2 Samples - MicrosoftEdge/WebView2Samples | GitHub"  

[MicrosoftedgeinsiderDownload]: https://www.microsoftedgeinsider.com/download "Download Microsoft Edge Insider Channels"  

[MicrosoftDeveloperMicrosoftEdgeWebview2]: https://developer.microsoft.com/microsoft-edge/webview2 " WebView2 | Microsoft Edge Developer"  

[MicrosoftMain]: https://www.microsoft.com "Microsoft"  

[MicrosoftVisualstudioMain]: https://visualstudio.microsoft.com "Visual Studio"  
