## Step 1 - Create a single window application 

Start with a basic desktop project containing a single main window.  

1.  Open **Visual Studio.**
2.  Choose **WinForms .NET Framework App**, and then choose **Next**.    
3.  Enter values for **Project name** and **Location**.  Select **.NET Framework 4.6.2** or later.
4.  Choose **Create** to create your project.  
    

## Step 2 - Install WebView2 SDK  
Next add the WebView2 SDK to the project.  For the preview, install the WebView2 SDK using Nuget.  

1.  Open the context menu on the project \(right-click\), and choose **Manage NuGet Packages...**.  
    
    
2.  Enter `Microsoft.Web.WebView2` in the search bar.  Choose **Microsoft.Web.WebView2** from the search results.  Set the package version to **pre-release**, and then choose **Install**.  
    
    <!--todo: The image in this step is identical to th previous step. Is this on purpose -->  
    
You are all set to start developing applications using the WebView2 API.  Press `F5` to build and run the project.  The running project displays an empty window.  

## Step 3 - Create a single WebView  

Next add a WebView to your application.  

1. Open the **WinForms Designer**.  
2. Search for **WebView2** in the **Toolbox**
3. Drag and drop the **WebView2** control into the WinForms App
4. The `Source` property sets the initial URI displayed in the WebView2 control. Set the Source property to https://www.microsoft.com

Press `F5` to build and run your project.  Confirm that your WebView2 control displays [https://www.microsoft.com](https://www.microsoft.com).

## Step 4 - Handle Resize  
Add a few more controls to the app and handle app window resizing appropriately.

1. In the **WinForms Designer** open the **Toolbox**
2. Drag and Drop a **TextBox** into the WinForms App. Name the **TextBox** `addressBar`.
3. Drag and Drop a **Button** into the WinForms App. Change the text in the **Button** to `Go!` and name the **Button** `goButton`.
4. In **Form1.cs** define `Form_Resize` to keep the controls in place when the App Window is resized.

```csharp
public Form1()
{
    InitializeComponent();    
    this.Resize += new System.EventHandler(this.Form_Resize);
}

private void Form_Resize(object sender, EventArgs e)
{
    // Resize the webview
    webView.Size = this.ClientSize - new System.Drawing.Size(webView.Location);

    // Move the Go button
    goButton.Left = this.ClientSize.Width - goButton.Width;

    // Resize the URL textbox
    searchBar.Width = goButton.Left - searchBar.Left;
}
```
## Step 5 - Navigation
Add the ability to allow users to change the URL that the WebView2 control displays by adding an address bar to the app. 

1.  In `Form1.cs` add the `CoreWebView2` namespace by inserting the following code snippet at the top of `Form1.cs`.  
    
    ```csharp
    using Microsoft.Web.WebView2.Core;
    ```
    
2.  In `Form1.cs`, copy the following code snippet to create the `goButton_Click` method, which navigates the WebView to the URL entered in the address bar.  
    
    ```csharp
    private void goButton_Click(object sender, EventArgs e)
    {
        if (webView != null && webView.CoreWebView2 != null)
        {
            webView.CoreWebView2.Navigate(searchBar.Text);
        }
    }
    ```  

Press `F5` to build and run your project.  Enter a new URL in the address bar, and click **Go**.  For example, enter `https://www.bing.com`.  Confirm that the WebView2 control navigates to the URL.  

> [!NOTE]
> Make sure a complete URL is entered in the address bar. An `ArgumentException` is thrown if the URL does not start with `http://` or `https://`

## Step 6 - Navigation events  

The application that hosts WebView2 controls listens to the following events that are raised by the WebView2 control during navigation to web pages.  

*   `NavigationStarting`  
*   `SourceChanged`  
*   `ContentLoading`  
*   `HistoryChanged`  
*   `NavigationCompleted`  

For more information, see [Navigation Events](../reference/win32/0-9-488/icorewebview2.md#navigation-events).  

:::image type="complex" source="../media/navigation-events.png" alt-text="Navigation events":::
   Navigation events
:::image-end:::

When an error occurs, the following events are raised and may depend on navigation to an error page.  

*   `SourceChanged`  
*   `ContentLoading`  
*   `HistoryChanged`  

When there is an HTTP redirect, there are multiple `NavigationStarting` events.  

To demonstrate how to use these events, start by registering a handler for `NavigationStarting` that cancels any requests that do not use HTTPS.  

In `Form1.cs`, modify the constructor as shown below and add the `EnsureHttps` function.  

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

In the constructor, EnsureHttps is registered as the event handler on the `NavigationStarting` event on the WebView2 control.  

Press `F5` to build and run your project. Confirm that when navigating to an HTTP site, the WebView **remains unchanged**. However, the WebView will navigate to HTTPS sites.

## Step 7 - Scripting  

You may use host applications to inject JavaScript code into WebView2 controls at runtime.  The injected JavaScript applies to all new top level documents and any child frames until the JavaScript is removed.  The injected JavaScript is run after creation of the global object, and before any other script included in the HTML document is run.  

You can use scripting to alert the user when navigating to a non-HTTPS site.  Modify the `EnsureHttps` function so that it injects script into the web content using the [ExecuteScriptAsync]() method.  

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

Press `F5` to build and run your project.  Confirm that the application displays an alert when you navigate to a site that does not use HTTPS.  


## Step 8 - Communication between host and web content  

The host and web content may communicate with each other using `postMessage` as follows:  

*   Web content in a WebView2 control may post a message to the host using `window.chrome.webview.postMessage`.  The host handles the message using any registered `WebMessageRecieved` on the host.  
*   Hosts post messages to web content in a WebView2 control using `CoreWebView2.PostWebMessageAsString` or `CoreWebView2.PostWebMessageAsJSON`.  These messages are caught by handlers added to `window.chrome.webview.addEventListener`.  

This communication mechanism allows web content to pass messages to the host using native capabilities.  

In your project, when the WebView2 control navigates to a URL, it displays the URL in the address bar and alerts the user of the URL displayed in the WebView2 control.  

1.  In **Form1.cs**, update your constructor and create an `InitializeAsync` function as shown in the following code snippet.  The `InitializeAsync` function awaits [EnsureCoreWebView2Async]() because the initialization of `CoreWebView2` is asynchronous.  
    
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
    
2.  After **CoreWebView2** is initialized, register an event handler to respond to `WebMessageReceived`.  In `Form1.cs` update `InitializeAsync` and add `UpdateAddressBar` using the following code snippet.  
    
    ```csharp
    async void InitializeAsync()
    {
        await webView.EnsureCoreWebView2Async(null);
        webView.CoreWebView2.WebMessageReceived += UpdateAddressBar;
    }
    
    void UpdateAddressBar(object sender, CoreWebView2WebMessageReceivedEventArgs args)
    {
        String uri = args.TryGetWebMessageAsString();
        addressBar.Text = Uri;
        webView.CoreWebView2.PostWebMessageAsString(Uri);
    }
    ```  
    
3.  In order for the WebView to send and respond to the web message, after `CoreWebView2` is initialized, the host:  
    
    1.  Injects a script to the web content that registers a handler to print message from the host.  
    2.  Injects a script to the web content that posts the URL to the host.  
    
In `Form1.cs`, update `InitializeAsync` as follows:  

```csharp
async void InitializeAsync()
{
    await webView.EnsureCoreWebView2Async(null);
    webView.CoreWebView2.WebMessageReceived += UpdateAddressBar;

    await webView.CoreWebView2.AddScriptToExecuteOnDocumentCreatedAsync("window.chrome.webview.postMessage(window.document.URL);");
    await webView.CoreWebView2.AddScriptToExecuteOnDocumentCreatedAsync("window.chrome.webview.addEventListener(\'message\', event => alert(event.data));");
}
```  

Press `F5` to build and run the app.  Now the address bar displays the URI in the WebView and when you successfully navigate to a new URI, the WebView alerts the user of the URI displayed in the WebView.  

Congratulations, you built your first WebView2 app!  

## Next Steps  

There are plenty of WebView2 functionalities that are not covered in this walkthrough.  

To learn more:  

*   Please explore [API reference](../reference/dotnet/0-9-494-reference-webview2.md) for detailed information about each API.  

## Getting in touch with the Microsoft Edge WebView team  

Help build a richer WebView2 experience by sharing your feedback!  Visit the Microsoft Edge WebView [feedback repo](https://aka.ms/webviewfeedback) to submit feature requests or bug reports or search for known issues.  