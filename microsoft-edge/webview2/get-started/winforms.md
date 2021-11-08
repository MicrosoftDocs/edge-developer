---
description: Get started guide with WebView2 for WinForms apps
title: Get started with WebView2 in WinForms apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 11/05/2021
ms.topic: tutorial
ms.prod: microsoft-edge
ms.technology: webview
keywords: WebView2, webview2, WebView, webview, winforms apps, winforms, edge, CoreWebView2, browser control, edge html, get started, Get Started, .NET, windows forms
---
# Get started with WebView2 in WinForms apps

In this article, get started creating your first WebView2 app in WinForms, and learn about the main features of [WebView2](https://developer.microsoft.com/microsoft-edge/webview2). For more information on individual APIs, see [API reference](/dotnet/api/microsoft.web.webview2.winforms).


<!-- ====================================================================== -->
## Step 0 - Prerequisites

Install the following prerequisites before proceeding.

1.  [Visual Studio](https://visualstudio.microsoft.com) 2017 or later.

1.  [WebView2 Runtime](https://developer.microsoft.com/microsoft-edge/webview2), or any [Microsoft Edge Insider (preview) Channel](https://www.microsoftedgeinsider.com/download) (Beta, Dev, or Canary) installed on a supported operating system (OS). The currently supported OS list is Windows 11, Windows 10, Windows 8.1, and Windows 7.

    > [!NOTE]
    > The WebView2 team recommends using the Canary channel. The minimum required version is 82.0.488.0.

<!-- ====================================================================== -->
## Step 1 - Create a single-window app

Start with a basic desktop project that contains a single main window.

1.  Open Visual Studio.

1.  Click **File** > **New** > **Project**.

1.  Click **Create a new project**.

    :::image type="content" source="./media/winforms-opening-panel.png" alt-text="The Visual Studio opening panel displays the Create a new project card." lightbox="./media/winforms-opening-panel.png":::

1.  Select **C# Windows Forms App (.NET Framework)**, and then click **Next**.

    :::image type="content" source="./media/winforms-new-project.png" alt-text="In the 'Create a new project' panel, select 'C# > Windows Forms App (.NET Framework)'." lightbox="./media/winforms-new-project.png":::

1.  Enter values for **Project name** and **Location**.  In the **Framework** dropdown list, select **.NET Framework 4.7.2** or later.

    :::image type="content" source="./media/winforms-start-proj.png" alt-text="Filling in the 'Configure your new project' panel." lightbox="./media/winforms-start-proj.png":::

1.  Click **Create**.


<!-- ====================================================================== -->
## Step 2 - Install WebView2 SDK

Use NuGet to add the WebView2 SDK to the project.

1. In **Solution Explorer**, right-click the project name, and then select **Manage NuGet Packages**.

    :::image type="content" source="media/wpf-getting-started-mng-nuget-reduced.png" alt-text="Manage NuGet Packages." lightbox="media/wpf-getting-started-mng-nuget.png":::

1.  Click **Browse**.

1.  Select the **Include prerelease** checkbox.

1.  In the search bar, type `WebView2` and then click **Microsoft.Web.WebView2**.

    :::image type="content" source="./media/install-nuget.png" alt-text="NuGet" lightbox="./media/install-nuget.png":::

1.  Accept the default version and then select **Install**.

    :::image type="content" source="./media/winforms-install-webview2-preview.png" alt-text="Preview Changes" lightbox="./media/winforms-install-webview2-preview.png":::

1.  Click **OK** to continue.

1.  Click **File** > **Save All (Ctrl+Shift+S)** to save the project.

1.  Press **F5** to build and run the project.

    The running project displays an empty window.

    :::image type="content" source="./media/winforms-empty-app.png" alt-text="Sample app displays an empty window." lightbox="./media/winforms-empty-app.png":::


<!-- ====================================================================== -->
## Step 3 - Create a single WebView

Add a WebView2 control to your app.

1.  Click **Project** > **Add Form (Windows Forms)**.

1.  In the **Add New Item** panel, click **Visual C# Items** > **Web** > **Windows Forms** > **Form (Windows Forms)**, and then click **Add**.

1.  Click **View** > **Toolbox**.

1.  In the **Toolbox**, click **WebView2 Windows Forms Control** to expand the options.

    > [!NOTE]
    > If you are using Visual Studio 2017, by default **WebView2** isn't displayed in the **Toolbox**. To enable **WebView2** to be displayed in the **Toolbox**, select **Tools** > **Options** > **General** > and set the **Automatically Populate Toolbox** setting to `True`.

1.  Drag the **WebView2** control into the Windows Forms App.

    :::image type="content" source="./media/winforms-toolbox.png" alt-text="Toolbox displaying WebView2" lightbox="./media/winforms-toolbox.png":::

1.  In the **Properties** panel, set the **(Name)** property to **webView**. Use the **Categorized** and **Alphabetical** sort options as needed to find properties.

    :::image type="content" source="./media/winforms-properties.png" alt-text="Properties of the WebView2 control" lightbox="./media/winforms-properties.png":::

1.  The **Source** property sets the initial URI displayed in the WebView2 control. Set the **Source** property to `https://www.microsoft.com`.

1.  Click **File** > **Save All (Ctrl+Shift+S)** to save the project.

1.  Press **F5** to build and run the project.

1.  Make sure the WebView2 control displays [https://www.microsoft.com](https://www.microsoft.com).

    :::image type="complex" source="./media/winforms-hello-webview.png" alt-text="The sample app displays the Microsoft website." lightbox="./media/winforms-hello-webview.png":::
       The sample application with WebView2 control displays the Microsoft website, https://www.microsoft.com.
    :::image-end:::

    > [!NOTE]
    > If you are working on a high-resolution monitor, you may need to [configure your Windows Forms app for high DPI support](/dotnet/framework/winforms/high-dpi-support-in-windows-forms#configuring-your-windows-forms-app-for-high-dpi-support).


<!-- ====================================================================== -->
## Step 4 - Add controls and process window resize events

Add more controls to your Windows forms from the toolbox, and then process window resize events, as follows.

1.  Click **View** > **Toolbox**.

1.  In the **Toolbox**, click **Common Controls**.

1.  Drag the **TextBox** control onto the Windows Forms app.

1.  In the **Properties** panel, change the **(Name)** to **addressBar**.

1.  Drag a **Button** control onto the Windows Forms app.

1.  In the **Properties** panel, change the **(Name)** to **goButton**.

1.  Change the **Text** property to **Go!**

1.  Resize the button as needed to display the text.

1.  Arrange the text box to the left of the button, aligned by the text as shown.

    :::image type="content" source="./media/winforms-designer.png" alt-text="WinForms designer" lightbox="./media/winforms-designer.png":::

1.  Resize the text box as shown.

    :::image type="content" source="./media/winforms-designer-txtbtn.png" alt-text="WinForms designer textbox and button" lightbox="./media/winforms-designer-txtbtn.png":::

1. Click **View** > **Code** to open the `Form1.cs` file.

    Define `Form_Resize` to keep the controls in place when the app window is resized, as follows.

1.  Delete the following code.

    ```csharp
        public Form1()
    {
        InitializeComponent();
    }
    ```

1.  Copy and paste this code snippet in the same location.

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

1.  Click **File** > **Save All (Ctrl+Shift+S)** to save the project.

1.  Press **F5** to build and run the project.

    Make sure the app looks like the following image.

:::image type="content" source="./media/winforms-app.png" alt-text="app" lightbox="./media/winforms-app.png":::


<!-- ====================================================================== -->
## Step 5 - Navigation

Enable users to change the URL that the WebView2 control displays, by adding an address bar to the app.

1.  Make sure the app displays `Form1` as shown in the previous section.

1.  In `Form1.cs`, add the `CoreWebView2` namespace by inserting the following code at the top:

    ```csharp
    using Microsoft.Web.WebView2.Core;
    ```

1.  In the **Windows Forms Designer**, double-click on the `Go!` button to create the `goButton_Click` method in the `Form1.cs` file.  Copy and paste the following snippet inside that method.

    ```csharp
    private void goButton_Click(object sender, EventArgs e)
    {
        if (webView != null && webView.CoreWebView2 != null)
        {
            webView.CoreWebView2.Navigate(addressBar.Text);
        }
    }
    ```

    Now the `goButton_Click` function navigates the WebView2 control to the URI entered in the address bar.

1.  Click **File** > **Save All (Ctrl+Shift+S)** to save the project.

1.  Press **F5** to build and run the project.

1.  Enter a new URL in the address bar, and select **Go**.  For example, enter `https://www.bing.com`.  Make sure the WebView2 control navigates to the URL.

> [!NOTE]
> Enter a complete URL in the address bar.  An `ArgumentException` is thrown if the URL does not start with `http://` or `https://`

:::image type="content" source="./media/winforms-bing.png" alt-text="bing.com" lightbox="./media/winforms-bing.png":::


<!-- ====================================================================== -->
## Step 6 - Navigation events

During webpage navigation, the WebView2 control raises events. The app that hosts WebView2 controls listens for the following events.

*   `NavigationStarting`
*   `SourceChanged`
*   `ContentLoading`
*   `HistoryChanged`
*   `NavigationCompleted`

For more information, see [Navigation events for WebView2](../concepts/navigation-events.md).

:::image type="content" source="../media/navigation-events.png" alt-text="Navigation events":::

When an error occurs, the following events are raised and may depend on navigation to an error webpage.

*   `SourceChanged`
*   `ContentLoading`
*   `HistoryChanged`

> [!NOTE]
> If an HTTP redirect occurs, there are multiple `NavigationStarting` events in a row.

To demonstrate how to use the events, start by registering a handler for `NavigationStarting` that cancels any requests not using HTTPS.

1.  In the `Form1.cs` file, update the constructor to match the following code snippet and add the `EnsureHttps` function as follows.

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

1.  Click **File** > **Save All (Ctrl+Shift+S)** to save the project.

1.  Press **F5** to build and run the project.

1.  Make sure the WebView2 control remains unchanged when navigating to an HTTP site. Go to an HTTPS site and notice that WebView2 opens HTTPS sites.


<!-- ====================================================================== -->
## Step 7 - Scripting

You can use host apps to inject JavaScript code into WebView2 controls at runtime. You can task WebView2 to run arbitrary JavaScript or add initialization scripts. The injected JavaScript applies to all new top-level documents and any child frames until the JavaScript is removed. The injected JavaScript runs with specific timing.

*   Run the injected JavaScript after the creation of the global object.
*   Run the injected JavaScript before any other script included in the HTML document is run.

1.  For example, add scripts that send an alert when a user navigates to non-HTTPS sites.  Modify the `EnsureHttps` function to inject a script into the web content that uses [ExecuteScriptAsync](/dotnet/api/microsoft.web.webview2.winforms.webview2.executescriptasync) method, like shown below:

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

1.  Click **File** > **Save All (Ctrl+Shift+S)** to save the project.

1.  Press **F5** to build and run the project.

1.  Make sure the app displays an alert when you go to a website that doesn't use HTTPS.

:::image type="content" source="./media/winforms-https.png" alt-text="https" lightbox="./media/winforms-https.png":::


<!-- ====================================================================== -->
## Step 8 - Communication between host and web content

The host and web content can use `postMessage` to communicate with each other as follows:

*   Web content in a WebView2 control can use `window.chrome.webview.postMessage` to post a message to the host.  The host handles the message using any registered `WebMessageReceived` on the host.
*   Hosts post messages to web content in a WebView2 control using `CoreWebView2.PostWebMessageAsString` or `CoreWebView2.PostWebMessageAsJSON`.  These messages are caught by handlers added to `window.chrome.webview.addEventListener`.

The communication mechanism passes messages from web content to the host using native capabilities.

In your project, when the WebView2 control navigates to a URL, it displays the URL in the address bar and alerts the user of the URL displayed in the WebView2 control.

1.  In the `Form1.cs` file, update the constructor and create an `InitializeAsync` function to match the following code snippet:

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

    The `InitializeAsync` function awaits [EnsureCoreWebView2Async](/dotnet/api/microsoft.web.webview2.winforms.webview2.ensurecorewebview2async) because the initialization of `CoreWebView2` is asynchronous.

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

1.  For WebView2 to send and respond to the web message, after `CoreWebView2` is initialized, the host injects a script in the web content to:
    1.  Send the URL to the host using `postMessage`.
    1.  Register an event handler to print a message sent from the host.

1. In the `Form1.cs` file, update `InitializeAsync` to match the following code snippet:

    ```csharp
    async void InitializeAsync()
    {
        await webView.EnsureCoreWebView2Async(null);
        webView.CoreWebView2.WebMessageReceived += UpdateAddressBar;

        await webView.CoreWebView2.AddScriptToExecuteOnDocumentCreatedAsync("window.chrome.webview.postMessage(window.document.URL);");
        await webView.CoreWebView2.AddScriptToExecuteOnDocumentCreatedAsync("window.chrome.webview.addEventListener(\'message\', event => alert(event.data));");
    }
    ```

1. Click **File** > **Save All (Ctrl+Shift+S)** to save the project.

1. Press **F5** to build and run the project.

1.  When you open a new URI, the WebView2 control displays it in the address bar.

    :::image type="complex" source="./media/winforms-final-app.png" alt-text="The application displays the URI in the address bar.":::
       The application displays the URI in the address bar. The URI is https://www.microsoft.com and the Microsoft website displays in the window.
    :::image-end:::

Congratulations, you built your first WebView2 app!


<!-- ====================================================================== -->
## Next steps

*  [WebView2 development best practices](../concepts/developer-guide.md)
*  [WebView2Samples repo](https://github.com/MicrosoftEdge/WebView2Samples) - A comprehensive example of WebView2 capabilities.
*  [See also](../index.md#see-also) - Conceptual and how-to articles about building and deploying WebView2 apps.
*  [WebView2 API reference](/dotnet/api/microsoft.web.webview2.winforms.webview2)
