---
description: Host web content in your WinUI app with the Microsoft Edge WebView 2 control
title: Microsoft Edge WebView 2 for WinUI apps
author: MSEdgeTeam
ms.author: jasteph .
ms.date: 07/01/2020
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: WebView2, webview2, WebView, webview, winui apps, winui, edge, CoreWebView2, browser control, edge html, getting started, Getting Started, .NET
---

# Getting started with WebView2 in WinUI3 (Preview)

In this article, get started creating your first WebView2 app and learn about the main features of [WebView2 (preview)](../index.md).  For more information on individual APIs, see [API reference](../reference/dotnet/0-9-515-reference-webview2.md).  

## Prerequisites  

Ensure you installed the following list of pre-requisites before proceeding:  

* Make sure that your development computer has Windows 10, version 1803 (build 17134), or a later version installed. WinUI 3 for desktop apps requires 1803 or a later OS version.
* Install Visual Studio 2019, version 16.7 Preview 1. For details, see these [instructions](https://docs.microsoft.com/en-us/windows/apps/winui/winui3/#configure-your-dev-environment).
* Install both x64 and x86 versions of .NET 5 Preview 4:
    * [x64](https://aka.ms/dotnet/net5/preview4/Sdk/dotnet-sdk-win-x64.exe) 
    * [x86](https://aka.ms/dotnet/net5/preview4/Sdk/dotnet-sdk-win-x86.exe)
* Install the VSIX extension that includes the WinUI 3.0 Preview 1 project templates for Visual Studio 2019. Link [here](https://aka.ms/winui3/previewdownload).


## Step 1 - Create Project  

Start with a basic desktop project containing a single main window.  

1.  Open **Visual Studio**.  
1.  Choose Create a new project.
1.  In the project drop-down, select **C#**, **Windows**, and **WinUI** respectively.
  
    
    :::row:::
       :::column span="1":::
          :::image type="complex" source="./media/winui-gettingstarted-selections.png" alt-text="WPF core":::
             WPF core
          :::image-end:::
       :::column-end:::
    
4.  Select the **Blank App, Packaged (WinUI in Desktop)** project type and click Next.
1. Enter a project name, choose any other options as desired, and click Create.
1. In the following dialog box, set the: 
    * Target version to **Windows 10, version 1903 (build 18362)**
    * Minimum version to **Windows 10, version 1803 (build 17134)** 
    * Click OK.


    
    :::row:::
           :::column span="1":::
              :::image type="complex" source="./media/winui-gettingstarted-projecttype.png" alt-text="Create core":::
                 Create core
              :::image-end:::
           :::column-end:::
           
    
7.  At this point, Visual Studio generates two projects (Located in the Solution Explorer):
    * **Project name (Desktop)**: This project contains your app's code. The App.xaml.cs code file defines an Application class that represents your app instance, and the MainWindow.xaml.cs code file defines a MainWindow class that represents the main window displayed by your app. These classes derive from types in the Microsoft.UI.Xaml namespace provided by WinUI.
  
    * **Project name (Package)**: This is a [Windows Application Packaging Project](https://docs.microsoft.com/en-us/windows/msix/desktop/desktop-to-uwp-packaging-dot-net) that is configured to build the app into an MSIX package for deployment. This project contains the [package manifest](https://docs.microsoft.com/en-us/uwp/schemas/appxpackage/uapmanifestschema/schema-root) for your app, and it is the startup project for your solution by default.

    
    > [!NOTE]
    >Ensure your computer settings are on Developer Mode.
     
    :::image type="complex" source="./media/winui-gettingstarted-devmode.png" alt-text="DevMode":::
       DevMode
    :::image-end:::  
    
8. Double click the MainWindow.xml file in the Solution Explorer to view the code. Click F5 to build the project. The project should run a small example of a button in a window.
    
## Step 2 - Create WebView

Next lets add a WebView to your application.  

1.  Open `MainWindow.xaml`.  Add the WebView2 XAML namespace by inserting the following line inside the `<Window/>` tag.  
    
    ```xml
    xmlns:controls="using:Microsoft.UI.Xaml.Controls"
    ```  
    
    Confirm that the code in `MainWindow.xaml` looks like the following code snippet.  
    
    ```xml
    <Window
          x:Class="WinUI_Sample.MainWindow"
          xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
          xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
          xmlns:local="using:WinUI_Sample"
          xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
          xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
          mc:Ignorable="d"
          xmlns:controls="using:Microsoft.UI.Xaml.Controls"
          >
        
          <StackPanel Orientation="Horizontal" HorizontalAlignment="Center" VerticalAlignment="Center">
            <Button x:Name="myButton" Click="myButton_Click">Click Me</Button>
          </StackPanel>

    </Window>
    ```  
    
1.  Add the WebView2 control by replacing the `<StackPanel>` tags, with the following code snippet.  The `Source` property sets the initial URI displayed in the WebView2 control.  
    
    ```xml  
    <Grid>

        <Grid.RowDefinitions>
            <RowDefinition Height="Auto" />
            <RowDefinition Height="*" />
        </Grid.RowDefinitions>
        <Grid.ColumnDefinitions>
            <ColumnDefinition Width="*" />
            <ColumnDefinition Width="Auto" />
        </Grid.ColumnDefinitions>

        <controls:WebView2 x:Name="MyWebView"  controls:Grid.Row="1" controls:Grid.ColumnSpan="2" Source="https://www.microsoft.com" HorizontalAlignment="Stretch" VerticalAlignment="Stretch" />

    </Grid>
    ```  
3.  Additionally, open `MainWindow.xaml.cs` and comment out the following line:
    ```xml
        //myButton.Content = "Clicked";     
    ```   
1.  Press `F5` to build and run your project.  Confirm that your WebView2 control displays [https://www.microsoft.com](https://www.microsoft.com).  
    
    :::image type="complex" source="./media/winui-gettingstarted-part3.png" alt-text="Microsoft.com":::
       Microsoft.com
    :::image-end:::  
    
## Step 4 - Navigation Control

Add the ability to allow users to change the URL that the WebView2 control displays by adding an address bar to the app.

1.  In **MainWindow.xaml**, add an address bar by copying and pasting the following code snippet inside the Grid that contains the WebView.  
    
    ```xml
        <TextBox Name="addressBar" Grid.Column="0"/>
        <Button x:Name="myButton" Grid.Column="1" Click="myButton_Click">Go</Button>
    ```  
    
    Confirm that the `Grid` section of `MainWindow.xaml` looks like the following code snippet.  
    
    ```xml
    <Grid>

        <Grid.RowDefinitions>
            <RowDefinition Height="Auto" />
            <RowDefinition Height="*" />
        </Grid.RowDefinitions>
        <Grid.ColumnDefinitions>
            <ColumnDefinition Width="*" />
            <ColumnDefinition Width="Auto" />
        </Grid.ColumnDefinitions>
    
        <TextBox Name="addressBar" Grid.Column="0"/>
        <Button x:Name="myButton" Grid.Column="1" Click="myButton_Click">Go</Button>

        <controls:WebView2 x:Name="MyWebView"  controls:Grid.Row="1" controls:Grid.ColumnSpan="2" Source="https://www.microsoft.com" HorizontalAlignment="Stretch" VerticalAlignment="Stretch" />

    </Grid>
    ```  
    

1.  In **MainWindow.xaml.cs**, copy the following code snippet to edit the `myButton_Click` method, which navigates the WebView to the URL entered in the address bar.  
    
    ```csharp
    private void myButton_Click(object sender, RoutedEventArgs e)
    {
        try
        {
            Uri targetUri = new Uri(addressBar.Text);
            MyWebView.Source = targetUri;
        }
        catch (FormatException ex)
        {
            // Bad address.
        }
    }
    ```  
    
    Press `F5` to build and run your project.  Enter a new URL in the address bar, and select **Go**.  For example, enter `https://www.bing.com`.  Confirm that the WebView2 control navigates to the URL.  
    
    > [!NOTE]
    > Make sure a complete URL is entered in the address bar.  An `ArgumentException` is thrown if the URL does not start with `http://` or `https://`.  
    
    :::image type="complex" source="./media/winui-gettingstarted-bing.png" alt-text="Bing":::
       Bing
    :::image-end:::
    
## Step 5 - Navigation events  

The application that hosts WebView2 controls listens to the following events that are raised by the WebView2 control during navigation to web pages.  

*   `NavigationStarting`  
*   `SourceChanged`  
*   `ContentLoading`  
*   `HistoryChanged`  
*   `NavigationCompleted`  

For more information, see [Navigation Events](../reference/win32/0-9-488/icorewebview2.md#navigation-events).  
 
When an error occurs, the following events are raised and may depend on navigation to an error page.  

*   `SourceChanged`  
*   `ContentLoading`  
*   `HistoryChanged`  

When there is an HTTP redirect, there are multiple `NavigationStarting` events.  

To demonstrate how to use these events, start by registering a handler for `NavigationStarting` that cancels any requests that do not use HTTPS.  

In `MainWindow.xaml.cs`, modify the constructor as shown below and add the `EnsureHttps` function.  

```csharp
public MainWindow()
{
    InitializeComponent();
    webView.NavigationStarting += EnsureHttps;
}

private void EnsureHttps(WebView2 sender, WebView2NavigationStartingEventArgs args)
{
    String uri = args.Uri;
    if (!uri.StartsWith("https://"))
    {
        args.Cancel = true;
    }
    else
    {
        addressBar.Text = uri;
    }
}
```  

In the constructor, EnsureHttps is registered as the event handler on the `NavigationStarting` event on the WebView2 control.  

Press `F5` to build and run your project.  Confirm that when navigating to an HTTP site, the WebView **remains unchanged**.  However, the WebView navigates to HTTPS sites.  

## Step 6 - Scripting  

You may use host applications to inject JavaScript code into WebView2 controls at runtime.  The injected JavaScript applies to all new top level documents and any child frames until the JavaScript is removed.  The injected JavaScript is run after creation of the global object, and before any other script included in the HTML document is run.  

You can use scripting to alert the user when navigating to a non-HTTPS site.  Modify the `EnsureHttps` function so that it injects script into the web content using the [ExecuteScriptAsync](../reference/wpf/0-9-515/microsoft-web-webview2-wpf-webview2.md#executescriptasync) method.  

```csharp
private void EnsureHttps(WebView2 sender, WebView2NavigationStartingEventArgs args)
{
    String uri = args.Uri;
    if (!uri.StartsWith("https://"))
    {
        MyWebView.ExecuteScriptAsync($"alert('{uri} is not safe, try an https link')");
        args.Cancel = true;
    }
    else
    {
        addressBar.Text = uri;
    }
}
```  

Press `F5` to build and run your project.  Confirm that the application displays an alert when you navigate to a site that does not use HTTPS.  

:::image type="complex" source="./media/winui-gettingstarted-script.png" alt-text="HTTPS":::
   HTTPS
:::image-end:::  

## Step 7 - Communication between host and web content  

The host and web content may communicate with each other using `postMessage` as follows:  

*   Web content in a WebView2 control may post a message to the host using `window.chrome.webview.postMessage`.  The host handles the message using any registered `WebMessageReceived` on the host.  
*   Hosts post messages to web content in a WebView2 control using `CoreWebView2.PostWebMessageAsString` or `CoreWebView2.PostWebMessageAsJSON`.  These messages are caught by handlers added to `window.chrome.webview.addEventListener`.  

This communication mechanism allows web content to pass messages to the host using native capabilities.  

    
> [!NOTE]
> Our team is currently working on building out our APIs to provide further functionality! For further information of our current APIs click [here](https://github.com/microsoft/microsoft-ui-xaml-specs/blob/master/active/WebView2/WebView2_spec.md)! 


**Congratulations, you built your first WebView2 app!**
  
## Next steps  


*   For a comprehensive example of WebView2 capabilities, see [WebView2Samples repo](https://github.com/MicrosoftEdge/WebView2Samples) on GitHub.  
*   For more detailed information about WebView2 APIs, see [API reference](../reference/wpf/0-9-515/microsoft-web-webview2-wpf-webview2.md).  
*   For more information about  WebView2, see [WebView2 Resources](../index.md#next-steps).  

## Getting in touch with the Microsoft Edge WebView team  

Help build a richer WebView2 experience by sharing your feedback!  Visit the Microsoft Edge WebView [feedback repo](https://github.com/MicrosoftEdge/WebViewFeedback) to submit feature requests or bug reports or search for known issues.  
