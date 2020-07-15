---
description:  Host web content in your WinUI app with the Microsoft Edge WebView 2 control
title:  Microsoft Edge WebView 2 for WinUI apps
author:  MSEdgeTeam
ms.author:  msedgedevrel
ms.date:  07/15/2020
ms.topic:  conceptual
ms.prod:  microsoft-edge
ms.technology:  webview
keywords:  WebView2, webview2, WebView, webview, winui apps, winui, edge, CoreWebView2, browser control, edge html, getting started, Getting Started, .NET
---

# Getting started with WebView2 in WinUI3 (Preview)  

On the following page, get started creating your first WebView2 app and learn about the main features of [WebView2 (preview)][Webview2Index].  For more information on individual APIs, see [API reference][GithubMicrosoftUiXamlSpecsWebview2].  

## Prerequisites  

Ensure you installed the following list of pre-requisites before proceeding.  

*   Verify that your development computer has Windows 10 installed, version 1803 \(build 17134\) or later.  WinUI 3 for desktop apps requires Windows 10, version 1803 or later.  For more information, see [Windows Update: FAQ][MicrosoftSupport12373].  
*   [Microsoft Edge (Chromium) Canary channel][MicrosoftedgeinsiderDownload] installed on Windows 10, Windows 8.1, or Windows 7.  
*   Install Visual Studio 2019, version 16.7 Preview 1.  For for information, see [Configure your dev environment][WindowsAppsWinui3ConfigureYourDevEnvironment].  
*   Install both x64 and x86 versions of .NET 5 Preview 4.  
    *   [x64][WindowsDotnetcliBlobCoreSdk50100Preview4202681X86]  
    *   [x86][WindowsDotnetcliBlobCoreSdk50100Preview4202681X64]  
*   [Install][VisualstudioMarketplaceWinUiprojecttemplates] the VSIX extension that includes the WinUI 3.0 Preview 1 project templates for Visual Studio 2019.  
*   [Enable Developer Mode][WindowsUwpGetStartedEnableYourDeviceForDevelopment] to ensure full Visual Studio feature functionality.  

## Step 1 - Create Project  

Start with a basic desktop project containing a single main window.  

1.  In Visual Studio, select **Create a new project**.  
1.  In the project drop-down, select **C#**, **Windows**, and **WinUI** respectively.  
    
    :::image type="complex" source="./media/winui-gettingstarted-selections.png" alt-text="WPF core" lightbox="./media/winui-gettingstarted-selections.png":::
       WPF core  
    :::image-end:::  
    
1.  Select the **Blank App, Packaged (WinUI in Desktop)** project type and select **Next**.  
1.  Enter a project name, choose any other options as desired, and select **Create**.  
1.  In the dialog box, set the following options.  
    *   Target version to **Windows 10, version 1903 (build 18362)** or later  
    *   Minimum version to **Windows 10, version 1803 (build 17134)**   
    *   Select **OK**.  
    
    :::image type="complex" source="./media/winui-gettingstarted-projecttype.png" alt-text="Create core" lightbox="./media/winui-gettingstarted-projecttype.png":::
       Create core  
    :::image-end:::  
    
1.  In the Solution Explorer, two projects are generated.  
    *   **Project name (Desktop)**  
        This project contains the code for your app.  The **App.xaml.cs** file defines an `Application` class that represents your app instance, and the **MainWindow.xaml.cs** file defines a `MainWindow` class that represents the main window displayed by your app.  The classes derive from types in the `Microsoft.UI.Xaml` namespace provided by WinUI.  
    
    *   **Project name (Package)**  
        This project is a [Windows Application Packaging Project][WindowsMsixDesktopToUwpPackagingDotNet] that is configured to build the app into an MSIX package for deployment.  The project contains the [package manifest][UwpSchemasAppxpackageUapmanifestRoot] for your app, and it is the startup project for your solution by default.  
    
1.  In the Solution Explorer, double-click the **MainWindow.xaml** file to view the code.  Press `F5` to build the project.  Your project should run a small example of a button in a window.  
    
## Step 2 - Create WebView  

Next add a WebView to your application.  

1.  Open `MainWindow.xaml`.  Add the WebView2 XAML namespace by inserting the following line inside the `<Window/>` tag.  
    
    ```xml
    xmlns:controls="using:Microsoft.UI.Xaml.Controls"
    ```  
    
    Confirm that your code in `MainWindow.xaml` looks like the following code snippet.  
    
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
        
        <controls:WebView2 x:Name="MyWebView"  Grid.Row="1" Grid.ColumnSpan="2" 
            Source="https://www.microsoft.com" HorizontalAlignment="Stretch" VerticalAlignment="Stretch" />
    
    </Grid>
    ```  
    
1.  Next, open `MainWindow.xaml.cs` and comment out the following line.
    
    ```xml
        //myButton.Content = "Clicked";     
    ```  
    
1.  Press `F5` to build and run your project.  Confirm that your WebView2 control displays [https://www.microsoft.com][MicrosoftMain].  
    
    :::image type="complex" source="./media/winui-gettingstarted-part3.png" alt-text="Microsoft.com" lightbox="./media/winui-gettingstarted-part3.png":::
       Microsoft.com  
    :::image-end:::  
    
## Step 3 - Navigation Control  

Add the ability to allow users to change the URL that your WebView2 control displays by adding an address bar to the app.  

1.  In **MainWindow.xaml**, add an address bar by copying and pasting the following code snippet inside the Grid that contains the WebView.  
    
    ```xml
        <TextBox Name="addressBar" Grid.Column="0"/>
        <Button x:Name="myButton" Grid.Column="1" Click="myButton_Click">Go</Button>
    ```  
    
    Confirm that your `Grid` section of `MainWindow.xaml` looks like the following code snippet.  
    
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
        
        <WebView2 x:Name="MyWebView"  Grid.Row="1" Grid.ColumnSpan="2" 
            Source="https://www.microsoft.com" HorizontalAlignment="Stretch" VerticalAlignment="Stretch" />
    
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
    
    Press `F5` to build and run your project.  Enter a new URL in the address bar, and select **Go**.  For example, enter `https://www.bing.com`.  Confirm that your WebView2 control navigates to the URL.  
    
    > [!NOTE]
    > Verify that you entered a complete URL in the address bar.  An `ArgumentException` exception is thrown if the URL does not start with `http://` or `https://`.  
    
    :::image type="complex" source="./media/winui-gettingstarted-bing.png" alt-text="Bing.com" lightbox="./media/winui-gettingstarted-bing.png":::
       Bing.com  
    :::image-end:::  
    
## Step 4 - Navigation events  

The application that hosts WebView2 controls listens to the following events that are raised by the WebView2 control during navigation to web pages.  

*   `NavigationStarting`  
*   `SourceChanged`  
*   `ContentLoading`  
*   `HistoryChanged`  
*   `NavigationCompleted`  
    
For more information, see [Navigation Events][Webviews2ReferenceWin3209488Icorewebview2NavigationEvents].  

When an error occurs, the following events are raised and may depend on navigation to an error page.  

*   `SourceChanged`  
*   `ContentLoading`  
*   `HistoryChanged`  
    
When there is an HTTP redirect, there are multiple `NavigationStarting` events.  

To demonstrate how to use the events, start by registering a handler for `NavigationStarting` event that cancels any requests that do not use HTTPS.  

In `MainWindow.xaml.cs`, modify the constructor as shown below and add the `EnsureHttps` function.  

```csharp
public MainWindow()
{
    InitializeComponent();
    MyWebView.NavigationStarting += EnsureHttps;
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

Press `F5` to build and run your project.  Confirm that when navigating to an HTTP site, the WebView remains unchanged.  However, the WebView navigates to HTTPS sites.  

## Step 5 - Scripting  

You may use host applications to inject JavaScript code into WebView2 controls at runtime.  The injected JavaScript applies to all new top level documents and any child frames until the JavaScript is removed.  The injected JavaScript is run after creation of the global object, and before any other script included in the HTML document is run.  

You may use scripting to alert the user when navigating to a non-HTTPS site.  Modify the `EnsureHttps` function, so that it injects script into the web content using the [ExecuteScriptAsync][Webviews2ReferenceWpf09515MicrosoftWebExecutescriptasync] method.  

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

Press `F5` to build and run your project.  Confirm that your application displays an alert when you navigate to a site that does not use HTTPS.  

:::image type="complex" source="./media/winui-gettingstarted-script.png" alt-text="HTTP alert" lightbox="./media/winui-gettingstarted-script.png":::
   HTTP alert  
:::image-end:::  

> [!NOTE]
> Congratulations, you built your first WebView2 app.  

## Next Steps  

Our team is currently working on building out the WebView2 APIs to provide full WebView2 functionality.  For more information of the current state of the WebView2 API, see [WebView2 spec][GithubMicrosoftUiXamlSpecsWebview2].  

> [!NOTE]
> The API may ship before the WinRT CoreWebView2 object, meaning functionality of the Webview2 would be limited to the APIs included in the above document for some interim period of time.  

*   For a comprehensive example of WebView2 capabilities, see [WebView2Samples repo][GithubMicrosoftedgeWebview2samplesMain] on GitHub.  
*   For more information about WebView2, see [WebView2 Resources][Webview2IndexNextSteps].  

## Getting in touch with the Microsoft Edge WebView team  

Help build a richer WebView2 experience by sharing your feedback.  Visit the Microsoft Edge WebView [feedback repo][GithubMicrosoftedgeWebviewfeedback] to submit feature requests or bug reports or search for known issues.  

<!-- links -->  

[Webview2Index]: ../index.md "Introduction to Microsoft Edge WebView2 (Preview) | Microsoft Docs"  
[Webview2IndexNextSteps]: ../index.md#next-steps "Next steps - Introduction to Microsoft Edge WebView2 (Preview) | Microsoft Docs"  
[Webviews2ReferenceWin3209488Icorewebview2NavigationEvents]: ../reference/win32/0-9-488/icorewebview2.md#navigation-events "Navigation events - interface ICoreWebView2 | Microsoft Docs"  
[Webviews2ReferenceWpf09515MicrosoftWebExecutescriptasync]: ../reference/wpf/0-9-515/microsoft-web-webview2-wpf-webview2.md#executescriptasync "ExecuteScriptAsync - Microsoft.Web.WebView2.Wpf.WebView2 class | Microsoft Docs"  

[UwpSchemasAppxpackageUapmanifestRoot]: /uwp/schemas/appxpackage/uapmanifestschema/schema-root "Package manifest schema reference for Windows 10 | Microsoft Docs"  

[WindowsAppsWinui3ConfigureYourDevEnvironment]: /windows/apps/winui/winui3#configure-your-dev-environment "Configure your dev environment - Windows UI Library 3.0 Preview 1 (May 2020) | Microsoft Docs"  
[WindowsMsixDesktopToUwpPackagingDotNet]: /windows/msix/desktop/desktop-to-uwp-packaging-dot-net "Set up your desktop application for MSIX packaging in Visual Studio | Microsoft Docs"  
[WindowsUwpGetStartedEnableYourDeviceForDevelopment]: /windows/uwp/get-started/enable-your-device-for-development "Enable your device for development | Microsoft Docs"  

[GithubMicrosoftUiXamlSpecsWebview2]: https://github.com/microsoft/microsoft-ui-xaml-specs/blob/master/active/WebView2/WebView2_spec.md "WebView2 spec - microsoft/microsoft-ui-xaml-specs | GitHub"  

[GithubMicrosoftedgeWebview2samplesMain]: https://github.com/MicrosoftEdge/WebView2Samples "WebView2 Samples - MicrosoftEdge/WebView2Samples | GitHub"  
[GithubMicrosoftedgeWebviewfeedback]: https://github.com/MicrosoftEdge/WebViewFeedback "WebView Feedback - MicrosoftEdge/WebViewFeedback | GitHub"  

[MicrosoftMain]: https://www.microsoft.com "Microsoft"  

[MicrosoftSupport12373]: https://support.microsoft.com/help/12373 "Windows Update: FAQ"  

[MicrosoftedgeinsiderDownload]: https://www.microsoftedgeinsider.com/download "Download Microsoft Edge Insider Channels"  

[WindowsDotnetcliBlobCoreSdk50100Preview4202681X86]: https://dotnetcli.blob.core.windows.net/dotnet/Sdk/5.0.100-preview.4.20268.1/dotnet-sdk-5.0.100-preview.4.20268.1-win-x86.exe "Download dotnet-sdk-5.0.100-preview.4.20268.1-win-x86.exe"  

[WindowsDotnetcliBlobCoreSdk50100Preview4202681X64]: https://dotnetcli.blob.core.windows.net/dotnet/Sdk/5.0.100-preview.4.20268.1/dotnet-sdk-5.0.100-preview.4.20268.1-win-x64.exe " dotnet-sdk-5.0.100-preview.4.20268.1-win-x64.exe"  

[VisualstudioMarketplaceWinUiprojecttemplates]: https://marketplace.visualstudio.com/items?itemName=Microsoft-WinUI.WinUIProjectTemplates "WinUI 3 Project Templates"  
