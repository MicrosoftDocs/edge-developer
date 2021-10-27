---
description: Getting started guide for using WebView2 for WinUI 3 apps.
title: Get started with WebView2 in WinUI 3 (Windows App SDK)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/17/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: WebView2, webview2, WebView, webview, winui apps, winui, edge, CoreWebView2, browser control, edge html, get started, Get Started, .NET
---
# Get started with WebView2 in WinUI 3 (Windows App SDK)

In this article, get started creating your first WebView2 app and learn about the main features of [WebView2][MicrosoftDeveloperMicrosoftEdgeWebview2].  Your first WebView2 app uses WinUI 3.  For more information on individual APIs, navigate to [API reference][GithubMicrosoftMicrosoftUiXamlSpecsWebview2].


<!-- ====================================================================== -->
## Step 0 - Set Up Development Environment

1. Follow steps 1-4 of [Set up your development environment][WindowsAppsWinui3ConfigureYourDevEnvironment] to install Visual Studio, configure the NuGet package source, and install the Windows App SDK Extension for Visual Studio.
1. Install the [WebView2 Runtime][Webview2Installer] or any [Microsoft Edge non-stable channel][MicrosoftedgeinsiderDownload] installed on Windows 10 version 1803 (build 17134) or later.  For more information about Windows 10 or later, navigate to [Windows Update: FAQ][MicrosoftSupport12373].
1.  To access all developer-specific Visual Studio features, turn on [Developer Mode][WindowsUwpGetStartedEnableYourDeviceForDevelopment].


<!-- ====================================================================== -->
## Step 1 - Create Project

Start with a basic desktop project that contains a single main window.

1.  In Visual Studio, choose **Create a new project**.
1.  In the project drop-down, choose **C#**, **Windows**, and **WinUI** respectively.

    :::image type="complex" source="./media/winui-getting-started-selections.png" alt-text="Create a new WinUI project using Visual Studio" lightbox="./media/winui-getting-started-selections.png":::
        Create a new WinUI project using Visual Studio
    :::image-end:::

1.  Choose **Blank App, Packaged (WinUI in Desktop)** > **Next**.
1.  Enter a project name.
1.  Choose options as needed.
1.  Choose **Create**.
1.  In **New Universal Windows Platform Project**, choose the following values, and then choose **OK**.
    *   **Target version**:  **Windows 10, version 1903 (build 18362)** or later
    *   **Minimum version**:  **Windows 10, version 1803 (build 17134)**

    :::image type="complex" source="./media/winui-getting-started-project-type.png" alt-text="The New Universal Windows Platform Project dialog with chosen values for Target version and Minimum version." lightbox="./media/winui-getting-started-project-type.png":::
       The New Universal Windows Platform Project dialog with chosen values for Target version and Minimum version.
    :::image-end:::

1.  In the Solution Explorer, two projects are generated.
    *   **Your project name (Desktop)**.  The Desktop project contains the code for your app.  The `App.xaml.cs` file defines an `Application` class that represents your app instance.  The `MainWindow.xaml.cs` file defines a `MainWindow` class that represents the main window displayed by your app instance.  The classes derive from types in the `Microsoft.UI.Xaml` namespace of WinUI.
    *   **Your project name (Package)**.  The Package project is a Windows Application Packaging Project that is configured to build the app into an MSIX package for deployment.  The project contains the package manifest for your app, and is the startup project for your solution by default.  For more information, navigate to [Set up your desktop application for MSIX packaging in Visual Studio][WindowsMsixDesktopToUwpPackagingDotNet] and [Package manifest schema reference for Windows 10][UwpSchemasAppxpackageUapmanifestRoot].
1.  In the Solution Explorer, to display the code, open the `MainWindow.xaml` file.  To run your project and display a window with a button, select `F5`.


<!-- ====================================================================== -->
## Step 2 - Add a WebView2 control to your project

Add a WebView2 control to your project.

1.  In the `MainWindow.xaml` file, to add the WebView2 XAML namespace, insert the following line inside the `<Window/>` tag.

    ```xml
    xmlns:controls="using:Microsoft.UI.Xaml.Controls"
    ```

    Ensure your code in `MainWindow.xaml` is similar to the following code snippet.

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

1.  In the `MainWindow.xaml.cs` file, comment out the following line.

    ```xml
        // myButton.Content = "Clicked";
    ```

1.  To build and run your project, select `F5`.  Ensure your WebView2 control displays [https://www.microsoft.com][MicrosoftMain].

    :::image type="complex" source="./media/winui-getting-started-part-3.png" alt-text="WebView2 control displays microsoft.com" lightbox="./media/winui-getting-started-part-3.png":::
       WebView2 control displays microsoft.com
    :::image-end:::


<!-- ====================================================================== -->
## Step 3 - Add navigation controls

To allow users to control the webpage that is displayed in your WebView2 control, add an address bar to your app.

1.  In the `MainWindow.xaml` file, copy and paste the following code snippet inside the `<Grid>` element that contains the `WebView2` element.

    ```xml
        <TextBox Name="addressBar" Grid.Column="0"/>
        <Button x:Name="myButton" Grid.Column="1" Click="myButton_Click">Go</Button>
    ```

    Ensure your `<Grid>` element in the `MainWindow.xaml` file is similar to the following code snippet.

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

1.  In the `MainWindow.xaml.cs` file, copy the following code snippet into `myButton_Click`, which navigates the WebView2 control to the URL entered in the address bar.

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

    To build and run your project, select `F5`.  Enter a new URL in the address bar, and then choose **Go**.  For example, enter `https://www.bing.com`.

    > [!NOTE]
    > Ensure you enter complete URLs in the address bar.  `ArgumentException` exceptions are thrown if the URL does not start with `http://` or `https://`.

    :::image type="complex" source="./media/winui-getting-started-bing.png" alt-text="bing.com" lightbox="./media/winui-getting-started-bing.png":::
       bing.com
    :::image-end:::


<!-- ====================================================================== -->
## Step 4 - Navigation events

For this step, we need to import the WebView2 Core library.

Add the following line to the top of `MainWindow.xaml.cs`:
```csharp
using Microsoft.Web.WebView2.Core;
```

Apps that host WebView2 controls listen for the following events that are raised by WebView2 controls during webpage navigation.

*   `NavigationStarting`
*   `SourceChanged`
*   `ContentLoading`
*   `HistoryChanged`
*   `NavigationCompleted`

> [!NOTE]
> If an HTTP redirect occurs, there are multiple `NavigationStarting` events in a row.

For more information, navigate to [Navigation Events][Webviews2ConceptsNavigationEvents].

When errors occur, the following events are raised and may navigate to an error webpage.

*   `SourceChanged`
*   `ContentLoading`
*   `HistoryChanged`

As an example of how to use the events, register a handler for `NavigationStarting` that cancels any non-HTTPS requests.  In `MainWindow.xaml.cs`, modify the constructor to register `EnsureHttps`, and add the `EnsureHttps` function so that it matches the following code snippet.

```csharp
public MainWindow()
{
    InitializeComponent();
    MyWebView.NavigationStarting += EnsureHttps;
}

private void EnsureHttps(WebView2 sender, CoreWebView2NavigationStartingEventArgs args)
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

To build and run your project, select `F5`.  Ensure navigation is blocked to HTTP sites, and allowed for HTTPS sites.

> [!NOTE]
> The WinRT `CoreWebView2` object might not be available with the release of the WebView2 API.  The [WebView2 Spec][GithubMicrosoftMicrosoftUiXamlSpecsWebview2] lists which of the APIs are available for WebView2.


<!-- ====================================================================== -->
## Step 5 - Scripting

You may use host apps to inject JavaScript code into WebView2 controls at runtime.  You may task WebView to run arbitrary JavaScript or add initialization scripts.  The injected JavaScript applies to all new top-level documents and any child frames until the JavaScript is removed.  The injected JavaScript is run with specific timing.

*   Run it after the creation of the global object.
*   Run it before any other script included in the HTML document runs.

As an example, add scripts that send an alert when a user navigates to non-HTTPS sites.  Modify the `EnsureHttps` function to inject a script into the web content that uses [ExecuteScriptAsync][Webviews2ReferenceWpfMicrosoftWebExecutescriptasync].

```csharp
private void EnsureHttps(WebView2 sender, CoreWebView2NavigationStartingEventArgs args)
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

To build and run your project, select `F5`.  Ensure your app displays an alert when you navigate to any non-HTTPS websites.

:::image type="complex" source="./media/winui-getting-started-script.png" alt-text="WebView2 control displays an alert dialog" lightbox="./media/winui-getting-started-script.png":::
   WebView2 control displays an alert dialog
:::image-end:::

Congratulations, you built your first WebView2 app!


<!-- ====================================================================== -->
## See also

*  [WebView2 development best practices][WV2BestPractices]
*  [WebView2Samples repo][GithubMicrosoftedgeWebview2samplesMain] - a comprehensive example of WebView2 capabilities.
*  [See also][Webview2IndexNextSteps] in _Introduction to Microsoft Edge WebView2_.
*  [WebView2 spec][GithubMicrosoftMicrosoftUiXamlSpecsWebview2] - detailed information about the WebView2 API.
*  [Issues - microsoft-ui-xaml repo](https://github.com/microsoft/microsoft-ui-xaml/issues) - to enter WinUI-specific feature requests or bugs.


<!-- ====================================================================== -->
<!-- links -->
[WV2BestPractices]: ../concepts/developer-guide.md "WebView2 development best practices | Microsoft Docs"
[Webviews2ConceptsNavigationEvents]: ../concepts/navigation-events.md "Navigation events | Microsoft Docs"
[MicrosoftDeveloperMicrosoftEdgeWebview2]: ../index.md "Introduction to Microsoft Edge WebView2 | Microsoft Docs"
[Webview2IndexNextSteps]: ../index.md#see-also "See also - Introduction to Microsoft Edge WebView2 | Microsoft Docs"

[Webviews2ReferenceWpfMicrosoftWebExecutescriptasync]: /dotnet/api/microsoft.web.webview2.wpf.webview2.executescriptasync "WebView2.ExecuteScriptAsync(String) Method (Microsoft.Web.WebView2.Wpf) | Microsoft Docs"

[NugetConsumePackagesConfiguringNugetBehavior]: /nuget/consume-packages/configuring-nuget-behavior "Common NuGet configurations | Microsoft Docs"

[UwpSchemasAppxpackageUapmanifestRoot]: /uwp/schemas/appxpackage/uapmanifestschema/schema-root "Package manifest schema reference for Windows 10 | Microsoft Docs"

[VisualstudioIdeFindingUsingVisualStudioExtensionsInstallWithoutUsing-ManageExtensionsDialogBox]: /visualstudio/ide/finding-and-using-visual-studio-extensions#install-without-using-the-manage-extensions-dialog-box "Install without using the Manage Extensions dialog box - Manage extensions for Visual Studio | Microsoft Docs"

[WindowsAppsWinui3ConfigureYourDevEnvironment]: /windows/apps/project-reunion/set-up-your-development-environment "Configure your dev environment - Windows UI Library 3.0 Preview 1 (May 2020) | Microsoft Docs"
[WindowsCommunitytoolkit]: /windows/communitytoolkit "Windows Community Toolkit Documentation | Microsoft Docs"
[WindowsMsixDesktopToUwpPackagingDotNet]: /windows/msix/desktop/desktop-to-uwp-packaging-dot-net "Set up your desktop application for MSIX packaging in Visual Studio | Microsoft Docs"
[WindowsUwpGetStartedEnableYourDeviceForDevelopment]: /windows/uwp/get-started/enable-your-device-for-development "Enable your device for development | Microsoft Docs"

[GithubMicrosoftMicrosoftUiXamlSpecsWebview2]: https://github.com/microsoft/microsoft-ui-xaml-specs/blob/master/active/WebView2/WebView2_spec.md "WebView2 spec - microsoft/microsoft-ui-xaml-specs | GitHub"

[GithubMicrosoftedgeWebview2samplesMain]: https://github.com/MicrosoftEdge/WebView2Samples "WebView2 Samples - MicrosoftEdge/WebView2Samples | GitHub"
[GithubMicrosoftedgeWebviewfeedback]: https://github.com/MicrosoftEdge/WebViewFeedback "WebView Feedback - MicrosoftEdge/WebViewFeedback | GitHub"

[MicrosoftMain]: https://www.microsoft.com "Microsoft"

[MicrosoftSupport12373]: https://support.microsoft.com/help/12373 "Windows Update: FAQ"

[MicrosoftedgeinsiderDownload]: https://www.microsoftedgeinsider.com/download "Download Microsoft Edge Insider Channels"

[NugetHome]: https://nuget.org "Home | NuGet Gallery"

[WindowsDotnetcliBlobCoreSdk50100Preview4202681X86]: https://dotnetcli.blob.core.windows.net/dotnet/Sdk/5.0.100-preview.4.20268.1/dotnet-sdk-5.0.100-preview.4.20268.1-win-x86.exe "Download dotnet-sdk-5.0.100-preview.4.20268.1-win-x86.exe"

[WindowsDotnetcliBlobCoreSdk50100Preview4202681X64]: https://dotnetcli.blob.core.windows.net/dotnet/Sdk/5.0.100-preview.4.20268.1/dotnet-sdk-5.0.100-preview.4.20268.1-win-x64.exe " dotnet-sdk-5.0.100-preview.4.20268.1-win-x64.exe"

[VisualstudioMarketplaceProjectreunionMicrosoftprojectreunion]: https://marketplace.visualstudio.com/items?itemName=ProjectReunion.MicrosoftProjectReunion "WindowsAppSDK | Visual Studio Marketplace"

[MicrosoftVisualstudioMain]: https://visualstudio.microsoft.com "Visual Studio"

[Webview2Installer]: https://developer.microsoft.com/microsoft-edge/webview2 "WebView2 Installer"
