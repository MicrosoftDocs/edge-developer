---
description: Get started guide with WebView2 for WinUI 3 (Windows App SDK) apps.
title: Get started with WebView2 in WinUI 3 (Windows App SDK)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 11/05/2021
ms.topic: tutorial
ms.prod: microsoft-edge
ms.technology: webview
keywords: WebView2, webview2, WebView, webview, winui apps, winui, edge, CoreWebView2, browser control, edge html, get started, Get Started, .NET
---
# Get started with WebView2 in WinUI 3 (Windows App SDK)

In this article, get started creating your first WebView2 app in WinUI 3 (Windows App SDK). Learn about the main features of [WebView2](../index.md). For more information on individual APIs, see [API reference](https://github.com/microsoft/microsoft-ui-xaml-specs/blob/master/active/WebView2/WebView2_spec.md).


## Step 0 - Set Up Development Environment

1. Follow steps 1-4 of [Set up your development environment](/windows/apps/project-reunion/set-up-your-development-environment) to install Visual Studio, configure the NuGet package source, and install the Windows App SDK Extension for Visual Studio.

1. Install the [WebView2 Runtime](https://developer.microsoft.com/microsoft-edge/webview2) or any [Microsoft Edge non-stable channel](https://www.microsoftedgeinsider.com/download) installed on Windows 10 version 1803 (build 17134) or later.  For more information about Windows 10 or later, see [Windows Update: FAQ](https://support.microsoft.com/help/12373).

1.  To access all developer-specific Visual Studio features, turn on [Developer Mode](/windows/uwp/get-started/enable-your-device-for-development).


## Step 1 - Create Project

Start with a basic desktop project that contains a single main window.

1.  In Visual Studio, click **Create a new project**.
1.  In the project filter menus, choose **C#**. **Windows**, and **WinUI**.

    :::image type="complex" source="./media/winui-getting-started-selections.png" alt-text="Create a new WinUI project using Visual Studio." lightbox="./media/winui-getting-started-selections.png":::
        Create a new WinUI project using Visual Studio
    :::image-end:::

1.  Click **Blank App, Packaged (WinUI in Desktop)** > **Next**.
1.  Enter a project name.
1.  Change **Location** and **Solution name** default values as needed.
1.  Click **Create**.
1.  In **New Universal Windows Platform Project**, choose the following values.
    *   **Target version**:  **Windows 10, version 1903 (build 18362)** or later
    *   **Minimum version**:  **Windows 10, version 1803 (build 17134)**

1. Click **OK**.

    :::image type="complex" source="./media/winui-getting-started-project-type.png" alt-text="The New Universal Windows Platform Project dialog with chosen values for Target version and Minimum version." lightbox="./media/winui-getting-started-project-type.png":::
       The New Universal Windows Platform Project dialog with chosen values for Target version and Minimum version.
    :::image-end:::

    Solution Explorer displays the two new projects that were generated:
    *   **Your project name (Desktop)**.  The Desktop project contains the code for your app.  The `App.xaml.cs` file defines an `Application` class that represents your app instance. The `MainWindow.xaml.cs` file defines a `MainWindow` class that represents the main window displayed by your app instance.  The classes derive from types in the `Microsoft.UI.Xaml` namespace of WinUI.
    *   **Your project name (Package)**.  The Package project is a Windows Application Packaging Project that is configured to build the app into an MSIX package for deployment. The project contains the package manifest for your app, and is the startup project for your solution by default. For more information, see [Set up your desktop application for MSIX packaging in Visual Studio](/windows/msix/desktop/desktop-to-uwp-packaging-dot-net) and [Package manifest schema reference for Windows 10](/uwp/schemas/appxpackage/uapmanifestschema/schema-root).

1.  In the Solution Explorer, open the `MainWindow.xaml` file to display the code.

1.  Click **File** > **Save All (Ctrl+Shift+S)** to save the project.

1.  Press **F5** to build and run the project.

## Step 2 - Add a WebView2 control to your project

Edit the `MainWindow.xaml` and `MainWindow.xaml.cs` files to a WebView2 control to the sample app.

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

1.  Click **File** > **Save All (Ctrl+Shift+S)**, to save the project.

1.  Press **F5**, to build and run the project.

1.  Make sure your WebView2 control displays [https://www.microsoft.com](https://www.microsoft.com).

    :::image type="complex" source="./media/winui-getting-started-part-3.png" alt-text="The sample app displays the Microsoft website." lightbox="./media/winui-getting-started-part-3.png":::
       The sample application with WebView2 control displays the Microsoft website, https://www.microsoft.com.
    :::image-end:::

## Step 3 - Add navigation controls

To allow users to control the webpage that is displayed in your WebView2 control, add an address bar to the sample app, as follows.

1.  In the `MainWindow.xaml` file, copy and paste the following code snippet inside the `<Grid>` element that contains the `WebView2` element.

    ```xml
        <TextBox Name="addressBar" Grid.Column="0"/>
        <Button x:Name="myButton" Grid.Column="1" Click="myButton_Click">Go</Button>
    ```

    Make sure your `<Grid>` element in the `MainWindow.xaml` file matches the following code snippet.

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

1.  In the `MainWindow.xaml.cs` file, copy the following code snippet into `myButton_Click`. This code navigates the WebView2 control to the URL entered in the address bar.

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

1.  Click **File** > **Save All (Ctrl+Shift+S)** to save the project.

1.  Press **F5** to build and run the project.

1.  Enter a new URL in the address bar, and then choose **Go**.  For example, enter `https://www.bing.com`.

    > [!NOTE]
    > Make sure you enter complete URLs in the address bar.  `ArgumentException` exceptions are thrown if the URL does not start with `http://` or `https://`.

    :::image type="complex" source="./media/winui-getting-started-bing.png" alt-text="The sample app displays the Bing website." lightbox="./media/winui-getting-started-bing.png":::
       The sample app displays the Bing website. The address bar displays the URL https://www.bing.com.
    :::image-end:::

## Step 4 - Navigation events

In this section, you add code to import the WebView2 Core library.

1.  Add the following line to the top of `MainWindow.xaml.cs`:

    ```csharp
    using Microsoft.Web.WebView2.Core;
    ```

    Apps that host WebView2 controls listen for the following events that are raised by WebView2 controls during webpage navigation:

    *   `NavigationStarting`
    *   `SourceChanged`
    *   `ContentLoading`
    *   `HistoryChanged`
    *   `NavigationCompleted`
    
    > [!NOTE]
    > If an HTTP redirect occurs, there are multiple `NavigationStarting` events in a row.
    
    For more information, see [Navigation events for WebView2](../concepts/navigation-events.md).
    
    When errors occur, the following events are raised, and an error webpage might be displayed:

    *   `SourceChanged`
    *   `ContentLoading`
    *   `HistoryChanged`

    As an example of how to use the events, register a handler for `NavigationStarting` that cancels any non-HTTPS requests.

1.  In `MainWindow.xaml.cs`, modify the constructor to register `EnsureHttps`, and add the `EnsureHttps` function so that it matches the following code snippet.

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

1.  Click **File** > **Save All (Ctrl+Shift+S)** to save the project.

1.  Press **F5** to build and run the project.

1.  Make sure navigation is blocked to HTTP sites, and allowed for HTTPS sites.

> [!NOTE]
> The WinRT `CoreWebView2` object might not be available with the release of the WebView2 API.  The [WebView2 Spec](https://github.com/microsoft/microsoft-ui-xaml-specs/blob/master/active/WebView2/WebView2_spec.md) lists which of the APIs are available for WebView2.


## Step 5 - Scripting

You can use host apps to inject JavaScript code into WebView2 controls at runtime. You can task WebView2 to run arbitrary JavaScript or add initialization scripts. The injected JavaScript applies to all new top-level documents and any child frames until the JavaScript is removed. The injected JavaScript is run with specific timing, to either:

*   Run the injected JavaScript after the creation of the global object.
*   Run the injected JavaScript before running any other script that's included in the HTML document.

As an example, add scripts that send an alert when a user tries to open non-HTTPS sites, as follows:

1.  Modify the `EnsureHttps` function to inject a script into the web content that uses [ExecuteScriptAsync](/dotnet/api/microsoft.web.webview2.wpf.webview2.executescriptasync).

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

1.  Click **File** > **Save All (Ctrl+Shift+S)** to save the project.

1.  Press **F5** to build and run the project.

1. Try to open a non-HTTPS site such as `http://www.bing.com`. Make sure the app displays an alert when you attempt to open a non-HTTPS website.

:::image type="complex" source="./media/winui-getting-started-script.png" alt-text="Sample app WebView2 control displays an alert dialog for non-HTTPS websites." lightbox="./media/winui-getting-started-script.png":::
   The sample app WebView2 control displays an alert dialog for non-HTTPS websites. The alert dialog displays text stating that the non-https site is not safe, try an https link.
:::image-end:::

Congratulations, you built your first WebView2 app!


<!-- ====================================================================== -->
## Next steps

*  [WebView2 development best practices](../concepts/developer-guide.md)
*  [WebView2Samples repo](https://github.com/MicrosoftEdge/WebView2Samples) - a comprehensive example of WebView2 capabilities.
*  [See also](../index.md#see-also) in _Introduction to Microsoft Edge WebView2_.
*  [WebView2 spec](https://github.com/microsoft/microsoft-ui-xaml-specs/blob/master/active/WebView2/WebView2_spec.md) - detailed information about the WebView2 API.
*  [Issues - microsoft-ui-xaml repo](https://github.com/microsoft/microsoft-ui-xaml/issues) - to enter WinUI-specific feature requests or bugs.
