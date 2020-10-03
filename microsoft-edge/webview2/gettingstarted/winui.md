---
description:  Host web content in your WinUI app with the Microsoft Edge WebView 2 control
title:  Microsoft Edge WebView2 for WinUI apps
author:  MSEdgeTeam
ms.author:  msedgedevrel
ms.date:  10/02/2020
ms.topic:  conceptual
ms.prod:  microsoft-edge
ms.technology:  webview
keywords:  WebView2, webview2, WebView, webview, winui apps, winui, edge, CoreWebView2, browser control, edge html, getting started, Getting Started, .NET
---

# Getting started with WebView2 in WinUI3 (Preview)  

In this article, get started creating your first WebView2 app with WinUI3 and learn about the main features of [Introduction to Microsoft Edge WebView2 (Preview)][Webview2Index].  For more information on individual APIs, see [API reference][GithubMicrosoftUiXamlSpecsWebview2].  

## Prerequisites  

Ensure you install the following list of pre-requisites before proceeding with the following article.  

*   Windows 10 version 1803 \(build 17134\) or later.  For more information, see [Windows Update: FAQ][MicrosoftSupport12373].  
*   [Microsoft Edge (Chromium) Canary channel][MicrosoftedgeinsiderDownload] on Windows 10, Windows 8.1, or Windows 7.  
*   Visual Studio 2019, version 16.7 Preview 1.  For more information, see [Windows UI Library 3 Preview 2 (July 2020)][WindowsAppsWinui3ConfigureYourDevEnvironment].  
*   Both the [x64][WindowsDotnetcliBlobCoreSdk50100Preview4202681X64] and [x86][WindowsDotnetcliBlobCoreSdk50100Preview4202681X86] versions of .NET 5 Preview 4.  
*   [WinUI 3 Project Templates][VisualstudioMarketplaceWinUiprojecttemplates] extension for Visual Studio 2019.  
Ensure you [Enable Developer Mode][WindowsUwpGetStartedEnableYourDeviceForDevelopment] to ensure you have access to all Visual Studio features.  

## Step 1 - Create Project  

Start with a basic desktop project containing a single main window.  

1.  In Visual Studio, select **Create a new project**.  
1.  In the project drop-down, select **C#**, **Windows**, and **WinUI** respectively.  
    
    :::image type="complex" source="./media/winui-gettingstarted-selections.png" alt-text="Visual studio project creation dialog for  WinUI" lightbox="./media/winui-gettingstarted-selections.png":::
       Visual studio project creation dialog for WinUI  
    :::image-end:::  
    
1.  Choose **Blank App, Packaged (WinUI in Desktop)**, and then choose **Next**.  
1.  Enter a project name, choose other options as needed, and then select **Create**.  
1.  In **New Universal Windows Platform Project**, select the following values, and then choose **OK**:  
    *   Target version: **Windows 10, version 1903 (build 18362)** or later.  
    *   Minimum version: **Windows 10, version 1803 (build 17134)**.  
    
    :::image type="complex" source="./media/winui-gettingstarted-projecttype.png" alt-text="The New Universal Windows Platform Project dialog with selected values for Target version and Minimum version." lightbox="./media/winui-gettingstarted-projecttype.png":::
       The New Universal Windows Platform Project dialog with selected values for Target version and Minimum version.
    :::image-end:::  
    
1.  In the Solution Explorer, two projects are generated.  
    *   **Your project name (Desktop)**. This project contains the code for your app.  **App.xaml.cs** defines an `Application` class that represents your app instance. **MainWindow.xaml.cs** defines a `MainWindow` class that represents the main window displayed by your app instance.  These classes derive from types in the `Microsoft.UI.Xaml` namespace of WinUI.  
    
    *   **Your project name (Package)**.  This project is a Windows Application Packaging Project that is configured to build the app into an MSIX package for deployment.  The project contains the package manifest for your app, and it is the startup project for your solution by default. For more information, see [Set up your desktop application for MSIX packaging in Visual Studio][WindowsMsixDesktopToUwpPackagingDotNet] and [Package manifest schema reference for Windows 10][UwpSchemasAppxpackageUapmanifestRoot].
    
1.  In the Solution Explorer, open **MainWindow.xaml** to display the code.  Select `F5` to run your project and show a window with a button.  
    
## Step 2 - Add a WebView2 control to your project  

Next add a WebView2 control to your project.  

1.  Open `MainWindow.xaml`.  Add the WebView2 XAML namespace by inserting the following line inside the `<Window/>` tag.  
    
    ```xml
    xmlns:controls="using:Microsoft.UI.Xaml.Controls"
    ```  
    
    Confirm that your code in `MainWindow.xaml` is similar to the following code snippet.  
    
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
    
1.  To add the WebView2 control, replace the `<StackPanel>` tags with the following code snippet.  The `Source` property sets the initial URI displayed in the WebView2 control.  
    
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
    
1.  Open `MainWindow.xaml.cs` and comment out the following line.
    
    ```xml
        // myButton.Content = "Clicked";     
    ```  
    
1.  Select `F5` to build and run your project.  Confirm that your WebView2 control displays [https://www.microsoft.com][MicrosoftMain].  
    
    :::image type="complex" source="./media/winui-gettingstarted-part3.png" alt-text="A WebView2 control displaying the microsoft.com site" lightbox="./media/winui-gettingstarted-part3.png":::
       A WebView2 control displaying the microsoft.com site.  
    :::image-end:::  
    
## Step 3 - Add navigation controls  

Allow users to control the web page that is displayed in your WebView2 control by adding an address bar to your app. 

1.  In **MainWindow.xaml**, copy and paste the following code snippet inside the `Grid` element that contains the `WebView2` element.  
    
    ```xml
        <TextBox Name="addressBar" Grid.Column="0"/>
        <Button x:Name="myButton" Grid.Column="1" Click="myButton_Click">Go</Button>
    ```  
    
    Confirm that your `Grid` element of `MainWindow.xaml` is similar to the following code snippet.  
    
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
    
1.  In **MainWindow.xaml.cs**, copy the following code snippet to `myButton_Click`, which navigates the WebView2 control to the URL entered in the address bar.  
    
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
            // Incorrect address entered.
        }
    }
    ```  
    
    Select `F5` to build and run your project.  Enter a new URL in the address bar, and then select **Go**.  For example, enter `https://www.bing.com`. 
    
    > [!NOTE]
    > Ensure you use complete URLs in the address bar. `ArgumentException` exceptions are thrown if the URL does not start with `http://` or `https://`.  
    
    :::image type="complex" source="./media/winui-gettingstarted-bing.png" alt-text="Bing.com" lightbox="./media/winui-gettingstarted-bing.png":::
       Bing.com  
    :::image-end:::  
    
## Step 4 - Navigation events  

Applications that host WebView2 controls listen for the following events that are raised by WebView2 controls during web page navigation.  

*   `NavigationStarting`  
*   `SourceChanged`  
*   `ContentLoading`  
*   `HistoryChanged`  
*   `NavigationCompleted`  

> [!NOTE]
> HTTP redirects raise multiple `NavigationStarting` events.  

For more information, see [Navigation Events][Webviews2ConceptsNavigationEvents].  

When errors occur, the following events are raised and may navigate to an error page.  

*   `SourceChanged`  
*   `ContentLoading`  
*   `HistoryChanged`  
     
As an example of how to use the events, register a handler for `NavigationStarting` that cancels any requests that don't use HTTPS. In `MainWindow.xaml.cs`, modify the constructor to register `EnsureHttps`, and add the `EnsureHttps` function so that it matches the following code snippet.  

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

Select `F5` to build and run your project.  Confirm that navigation is blocked to HTTP sites, and allowed for HTTPS sites.  

## Step 5 - Scripting  

Host applications may inject JavaScript code into WebView2 controls at runtime.  The injected JavaScript applies to all new top level documents and any child frames until the JavaScript is removed.  The injected JavaScript is run after creation of the global object, and before any other script included in the HTML document is run.  

As an example, add scripts send an alert when a user navigates to non-HTTPS sites.  Modify the `EnsureHttps` function to inject a script into the web content using [ExecuteScriptAsync][Webviews2ReferenceWpfMicrosoftWebExecutescriptasync].  

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

Select `F5` to build and run your project.  Confirm that your application displays an alert when you navigate to a site that does not use HTTPS.  

:::image type="complex" source="./media/winui-gettingstarted-script.png" alt-text="WebView2 control showing an alert dialog" lightbox="./media/winui-gettingstarted-script.png":::
   WebView2 control showing an alert dialog
:::image-end:::  

Congratulations, you built your first WebView2 app.  

## Next Steps  

Our team is currently building more WebView2 APIs.  For more information on the current state of WebView2 APIs, see the [WebView2 spec][GithubMicrosoftUiXamlSpecsWebview2].  

> [!NOTE]
> The WinRT CoreWebView2 object may not be available at the time the WebView2 APIs ship. To understand which APIs are available to WebView2 controls, see [WebView2 Spec][GithubMicrosoftUiXamlSpecsWebview2] for a list of the APIs that are available. 

For more information about WebView2 capabilities, see [WebView2 Concepts and How-To guides][Webview2IndexNextSteps], and the [WebView2 samples repo][GithubMicrosoftedgeWebview2samplesMain].  

## Getting in touch with the Microsoft Edge WebView team  

[!INCLUDE [contact WebView team note](../includes/contact-webview-team-note.md)]  

<!-- links -->  

[Webview2Index]: ../index.md "Introduction to Microsoft Edge WebView2 (Preview) | Microsoft Docs"  
[Webview2IndexNextSteps]: ../index.md#next-steps "Next steps - Introduction to Microsoft Edge WebView2 (Preview) | Microsoft Docs"  
[Webviews2ConceptsNavigationEvents]: ../concepts/navigation-events.md "Navigation events | Microsoft Docs"  
[Webviews2ReferenceWpfMicrosoftWebExecutescriptasync]: /dotnet/api/microsoft.web.webview2.wpf.webview2.executescriptasync "WebView2.ExecuteScriptAsync(String) Method (Microsoft.Web.WebView2.Wpf) | Microsoft Docs"  

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
