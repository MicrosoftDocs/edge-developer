---
title: Get started with WebView2 in WinUI 3 (Windows App SDK) apps
description: Get started guide with WebView2 for WinUI 3 (Windows App SDK) apps.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 04/27/2022
---
# Get started with WebView2 in WinUI 3 (Windows App SDK) apps

This article covers how to set up your development tools and create an initial WebView2 app for WinUI 3 (Windows App SDK), and learn about WebView2 concepts along the way.


* Corresponding Get Started sample at GitHub: [Getting Started with WebView2 in WinUI3 (WinUI3_GettingStarted/WinUI_Sample.sln)](https://github.com/MicrosoftEdge/WebView2Samples/blob/main/GettingStartedGuides/WinUI3_GettingStarted/README.md)


<!-- ====================================================================== -->
## Step 1 - Install Visual Studio and the Windows App SDK

Even if you have Visual Studio installed, read the following page and possibly update your software.

1. In a new window or tab, open the page [Install tools for the Windows App SDK](/windows/apps/windows-app-sdk/set-up-your-development-environment) and then follow the steps on that page, to install Microsoft Visual Studio, such as Visual Studio 2022.
<!-- clickable: https://docs.microsoft.com/windows/apps/windows-app-sdk/set-up-your-development-environment -->

1. If needed, in a new window or tab, see [Install Visual Studio](../how-to/machine-setup.md#install-visual-studio) in _Set up your Dev environment for WebView2_.

Return from that page and continue the steps below.


**Turning on Developer Mode:**

1. When Visual Studio opens at some point during the present article's steps, you might be prompted to turn on Developer Mode for your computer.  For more information, if needed, see [Enable your device for development](/windows/apps/get-started/enable-your-device-for-development), at _Build desktop apps for Windows_.


<!-- ====================================================================== -->
## Step 2 - Install a preview channel of Microsoft Edge

1. Install the [WebView2 Runtime](https://developer.microsoft.com/microsoft-edge/webview2) or any [Microsoft Edge preview channel](https://www.microsoftedgeinsider.com/download) (Beta, Dev, or Canary) installed on Windows 10 version 1803 (build 17134) or later.

Return from that page and continue the steps below.

<!--
Or, install the WebView2 Runtime, as follows:

1. In a new window or tab, see [Install the WebView2 Runtime](../how-to/machine-setup.md#install-the-webview2-runtime) in _Set up your Dev environment for WebView2_.

Return here and continue with the steps below.
-->


<!-- ====================================================================== -->
## Step 3 - Create the project in Visual Studio

To create a WebView2 app, start by creating a basic desktop project, to create a desktop app that contains a single main window:

1. Open Visual Studio (not Visual Studio Code).

1. In Visual Studio, click **Create a new project**.

1. In the project filter menus, choose **C#**. **Windows**, and **WinUI**.

   ![Create a new WinUI project using Visual Studio.](media/winui-getting-started-selections.png)

1. Click **Blank App, Packaged (WinUI in Desktop)** > **Next**.

1. Enter a project name.

1. Change **Location** and **Solution name** default values as needed.

1. Click **Create**.

1. In **New Universal Windows Platform Project**, select the following values:

   *  **Target version**:  **Windows 10, version 1903 (build 18362)** or later.

   *  **Minimum version**:  **Windows 10, version 1803 (build 17134)**.

1. Click **OK**.

   The New Universal Windows Platform Project dialog with selected values for Target version and Minimum version:

   ![The New Universal Windows Platform Project dialog with selected values for Target version and Minimum version.](media/winui-getting-started-project-type.png)
       
   Solution Explorer displays the two new projects that were generated:

   *  **Your project name (Desktop)**.  The Desktop project contains the code for your app.  The `App.xaml.cs` file defines an `Application` class that represents your app instance. The `MainWindow.xaml.cs` file defines a `MainWindow` class that represents the main window displayed by your app instance.  The classes derive from types in the `Microsoft.UI.Xaml` namespace of WinUI.

   *  **Your project name (Package)**.  The Package project is a Windows Application Packaging Project that is configured to build the app into an MSIX package for deployment. The project contains the package manifest for your app, and is the startup project for your solution by default.  For more information, see [Set up your desktop application for MSIX packaging in Visual Studio](/windows/msix/desktop/desktop-to-uwp-packaging-dot-net) and [Package manifest schema reference for Windows 10](/uwp/schemas/appxpackage/uapmanifestschema/schema-root).

1. In Solution Explorer, open `MainWindow.xaml`.

1. Select **File** > **Save All** (`Ctrl`+`Shift`+`S`) to save the project.

1. Press **F5** to build and run the project.


<!-- maintenance link; keep: main copy:
[Install the WebView2 SDK](../how-to/machine-setup.md#install-the-webview2-sdk) in _Set up your Dev environment for WebView2_
-->

<!-- ====================================================================== -->
## Step 4 - Add a WebView2 control to your project

The WindowsAppSDK includes the WebView2 SDK and control, and you shouldn't need to separately install the WebView2 SDK. Edit the `MainWindow.xaml` and `MainWindow.xaml.cs` files to a WebView2 control to the sample app, as follows.

1. In Visual Studio, in Solution Explorer, select `MainWindow.xaml` to open it in the code editor.

   Add the WebView2 XAML namespace, as follows:

1. In the `MainWindow.xaml` file, insert the following line inside the `<Window/>` tag:

   ```xml
   xmlns:controls="using:Microsoft.UI.Xaml.Controls"
   ```

   Make sure your code in `MainWindow.xaml` is similar to the following:

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

1. To add the WebView2 control, replace the `<StackPanel>` tags with the following code.  The `Source` property sets the initial URI that's displayed in the WebView2 control.

   ```xml
   <Grid>

      <Grid.RowDefinitions>
         <RowDefinition Height="Auto"/>
         <RowDefinition Height="*"/>
      </Grid.RowDefinitions>
      <Grid.ColumnDefinitions>
         <ColumnDefinition Width="*"/>
         <ColumnDefinition Width="Auto"/>
      </Grid.ColumnDefinitions>

      <controls:WebView2 x:Name="MyWebView"  Grid.Row="1" Grid.ColumnSpan="2"
         Source="https://www.microsoft.com" HorizontalAlignment="Stretch" VerticalAlignment="Stretch"/>

   </Grid>
   ```

1. In `MainWindow.xaml.cs`, comment out the following line:

   ```xml
      // myButton.Content = "Clicked";
   ```

1. Select **File** > **Save All (Ctrl+Shift+S)**, to save the project.

1. Press **F5**, to build and run the project.

1. Make sure your WebView2 control displays [https://www.microsoft.com](https://www.microsoft.com).

The sample application with WebView2 control displays the Microsoft website, https://www.microsoft.com:

![The sample app displays the Microsoft website.](media/winui-getting-started-part-3.png)


<!-- ====================================================================== -->
## Step 5 - Add navigation controls

To allow users to control the webpage that is displayed in your WebView2 control, add an address bar to the sample app, as follows:

1. In `MainWindow.xaml`, paste the following code inside the `<Grid>` element that contains the `WebView2` element:

   ```xml
      <TextBox Name="addressBar" Grid.Column="0"/>
      <Button x:Name="myButton" Grid.Column="1" Click="myButton_Click">Go</Button>
   ```

   Make sure your `<Grid>` element in the `MainWindow.xaml` file matches the following:

   ```xml
   <Grid>

      <Grid.RowDefinitions>
         <RowDefinition Height="Auto"/>
         <RowDefinition Height="*"/>
      </Grid.RowDefinitions>
      <Grid.ColumnDefinitions>
         <ColumnDefinition Width="*"/>
         <ColumnDefinition Width="Auto"/>
      </Grid.ColumnDefinitions>

      <TextBox Name="addressBar" Grid.Column="0"/>
      <Button x:Name="myButton" Grid.Column="1" Click="myButton_Click">Go</Button>

      <WebView2 x:Name="MyWebView"  Grid.Row="1" Grid.ColumnSpan="2"
         Source="https://www.microsoft.com" HorizontalAlignment="Stretch" VerticalAlignment="Stretch"/>

   </Grid>
   ```

1. In `MainWindow.xaml.cs`, copy the following code into `myButton_Click`.  This code navigates the WebView2 control to the URL entered in the address bar.

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

1. Select **File** > **Save All** (`Ctrl`+`Shift`+`S`) to save the project.

1. Press **F5** to build and run the project.

1. Enter a new URL in the address bar, and then choose **Go**.  For example, enter `https://www.bing.com`.

   The sample app displays the Bing website. The address bar displays the URL https://www.bing.com:

   ![The sample app displays the Bing website.](media/winui-getting-started-bing.png)

1. Enter an incomplete URL in the address bar, such as `bing.com`.

   An `ArgumentException` exception is thrown, because the URL doesn't start with `http://` or `https://`.

1. Close the app.


<!--
maintenance link (keep)
* [Navigation events for WebView2 apps](../concepts/navigation-events.md) - main copy; update it and then propagate/copy to these h2 sections:
-->
<!-- ====================================================================== -->
## Step 6 - Navigation events

In this section, you add code to import the WebView2 Core library.

1. Add the following line to the top of `MainWindow.xaml.cs`:

   ```csharp
   using Microsoft.Web.WebView2.Core;
   ```

   Apps that host WebView2 controls listen for the following events that are raised by WebView2 controls during webpage navigation:

   * `NavigationStarting`
   * `SourceChanged`
   * `ContentLoading`
   * `HistoryChanged`
   * `NavigationCompleted`
    
   > [!NOTE]
   > If an HTTP redirect occurs, there are multiple `NavigationStarting` events in a row.
    
   For more information, see [Navigation events for WebView2 apps](../concepts/navigation-events.md).
    
   When errors occur, the following events are raised, and an error webpage might be displayed:

   * `SourceChanged`
   * `ContentLoading`
   * `HistoryChanged`

   As an example of how to use the events, register a handler for `NavigationStarting` that cancels any non-HTTPS requests, as follows:

1. In `MainWindow.xaml.cs`, modify the constructor to register `EnsureHttps`, and add the `EnsureHttps` function so that it matches the following:

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

1. Select **File** > **Save All** (`Ctrl`+`Shift`+`S`) to save the project.

1. Press **F5** to build and run the project.

1. Enter an HTTP URL, such as `http://microsoft.com`.

   Navigation is blocked to HTTP sites.

1. Enter an HTTPS URL, such as `https://microsoft.com`.

   Navigation is allowed for HTTPS sites.


### WinRT CoreWebView2 object availability

The WinRT `CoreWebView2` object might not be available with the release of the WebView2 API.  The [WebView2 Spec](https://github.com/microsoft/microsoft-ui-xaml-specs/blob/master/active/WebView2/WebView2_spec.md)<!-- changing master to main doesn't work 5/19/2022 --> lists which of the APIs are available for WebView2.


<!-- ====================================================================== -->
## Step 7 - Scripting

You can use host apps to inject JavaScript code into WebView2 controls at runtime. You can task WebView2 to run arbitrary JavaScript or add initialization scripts. The injected JavaScript applies to all new top-level documents and any child frames until the JavaScript is removed. The injected JavaScript is run with specific timing, to either:

*  Run the injected JavaScript after the creation of the global object.

*  Run the injected JavaScript before running any other script that's included in the HTML document.

As an example, next, you add scripts that send an alert when a user tries to open non-HTTPS sites.  To do this, you inject a script into the web content that uses [ExecuteScriptAsync](/dotnet/api/microsoft.web.webview2.wpf.webview2.executescriptasync).

1. Modify the `EnsureHttps` function as follows:

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

1. Select **File** > **Save All** (`Ctrl`+`Shift`+`S`) to save the project.

1. Press **F5** to build and run the project.

1. Try to open a non-HTTPS URL, such as `http://www.bing.com`.

   The app's WebView2 control displays an alert dialog for non-HTTPS websites, saying that the non-HTTPS `uri` is not safe:

   ![Sample app WebView2 control displays an alert dialog for non-HTTPS websites.](media/winui-getting-started-script.png)

Congratulations, you built your first WebView2 app!


<!-- ====================================================================== -->
## See also

developer.microsoft.com:
* [Microsoft Edge WebView2](https://developer.microsoft.com/microsoft-edge/webview2) - initial introduction to WebView2 features at developer.microsoft.com.

Local pages:
* [Introduction to Microsoft Edge WebView2](../index.md) - overview of features.
* [See also](../index.md#see-also) in _Introduction to Microsoft Edge WebView2_.
* [Manage user data folders](../concepts/user-data-folder.md)
* [Sample Code for WebView2](../code-samples-links.md) - a guide to the `WebView2Samples` repo.
* [Development best practices for WebView2 appsDevelopment best practices](../concepts/developer-guide.md)

GitHub:
* [Getting Started with WebView2 in WinUI3](https://github.com/MicrosoftEdge/WebView2Samples/tree/main/GettingStartedGuides/WinUI3_GettingStarted#readme)
* [Spec: The WebView2 Xaml control](https://github.com/microsoft/microsoft-ui-xaml-specs/blob/master/active/WebView2/WebView2_spec.md) - the WinUI 3.0 version of the WebView2 control.
* [microsoft-ui-xaml repo > Issues](https://github.com/microsoft/microsoft-ui-xaml/issues) - to enter WinUI-specific feature requests or bugs.

<!--
state why this link is in this tutorial page and what its relevance is, or else delete:
* [Windows Update: FAQ](https://support.microsoft.com/help/12373).
-->
