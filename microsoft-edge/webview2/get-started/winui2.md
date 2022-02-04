---
title: Get started with WebView2 in WinUI 2 (UWP) apps (public preview)
description: Get started guide with WebView2 for WinUI 2 apps.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 11/05/2021
---
# Get started with WebView2 in WinUI 2 (UWP) apps (public preview)

In this article, you create your first WebView2 app in WinUI 2 (UWP), and learn about the main features of WebView2.


<!-- ====================================================================== -->
## API Reference

For details about the WebView2 APIs which apply to UWP, see the WinRT API Reference:

* [Core](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/index)
* [COM Interop](/microsoft-edge/webview2/reference/winrt/interop/index)

WinUI 2 only supports UWP.  For information about the APIs for all platforms, see [WebView2 API Reference](../webview2-api-reference.md).


<!-- ====================================================================== -->
## Use a preview channel of Microsoft Edge

The [WinUI 2 package](https://www.nuget.org/packages/Microsoft.UI.Xaml/2.8.0-prerelease.210927001) has a dependency on a prerelease WebView2 package.  For full API compatibility, use a preview browser channel as your runtime, such as the Beta, Dev, or Canary channel of Microsoft Edge.


<!-- ====================================================================== -->
## Features with limited functionality

The WebView2 WinUI 2 control is actively being developed.  The following features are missing or have issues:

*  Download UI.
   *  Although the Download UI feature currently doesn't work, this feature might show up automatically in your app's UI after the issue is fixed.  To maintain compatibility, you should manually disable the Download UI feature by intercepting the [download starting event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2downloadstartingeventargs).
*  Autofill UI.
*  File Picker Dialog.
*  Background Audio.
*  Print to PDF.
*  Print Preview.
*  Adding COM Objects (WinRT AddHostObject).
*  Playready DRM.
*  Service Workers on Windows devices before 20H2.


<!-- ====================================================================== -->
## Step 1 - Set up prerequisites

1. Install [Microsoft Visual Studio 2019 version 16.9](/visualstudio/releases/2019/release-notes-v16.9) or later.  Accept the defaults.

1. By default, Visual Studio doesn't show line numbers in the code editor.  To turn on line numbers, select **Tools** > **Options** > **Text Editor** > **All Languages** > **Line numbers**.  Then click **OK**.


<!-- ====================================================================== -->
## Step 2 - Install UWP tools

1. Open Microsoft Visual Studio.
 
1. Click **Tools** > **Get Tools and Features**.  The **Visual Studio Installer** window opens.

1. On the **Workloads** tab, click **.NET Desktop Development**.

1. Click **Desktop development with C++**.

1. Click **Universal Windows Platform development**.

1. On the right, expand **Installation Details** > **Universal Windows Platform development**, and then click **C++ (v142) Universal Windows Platform tools**.

   The **Modifying Visual Studio 2019** dialog displays cards and installation details.  Installation details for Universal Windows Platform development  shows included and optional items.

   :::image type="content" source="media/winui2-getting-started-install-workloads.png" alt-text="The 'Modifying Visual Studio 2019' dialog displays cards and installation details." lightbox="media/winui2-getting-started-install-workloads.png":::

1. Click **Modify**.  Visual Studio installs the selected features.


<!-- ====================================================================== -->
## Step 3 - Create a UWP app

1. In Visual Studio, select **File** > **New** > **Project**.  Or use the startup screen of Visual Studio, then select **Create a new project**.  The **Create a new project** dialog box opens.

1. On the **All languages** dropdown list, click **C#**.

1. On the **All platforms** dropdown list, click **Windows**.

1. On the **All project types** dropdown list, click **UWP**.  As a result of your filter selections, several types of app templates are listed.

1. In the list of app templates, click **Blank App (Universal Windows)**.

   The **Create a new project** dialog box appears.  The filter criteria are highlighted in red.  The blank app (Universal Windows) card is highlighted in red.

   :::image type="content" source="media/winui2-getting-started-create-project.png" alt-text="The Create a new project dialog box displays the blank app (Universal Windows) card." lightbox="media/winui2-getting-started-create-project.png":::

1. Click **Next**.

   The **Configure your new project** dialog appears, for a **Blank App (Universal Windows)**.

   :::image type="content" source="media/winui2-getting-started-config-new-project.png" alt-text="The Configure your new project dialog box displays text boxes for a Blank App (Universal Windows)." lightbox="media/winui2-getting-started-config-new-project.png":::

   <!-- Text boxes displayed are **Project name**, **Location**, **Solution**, and **Solution name**. -->

1. In the **Project name** text box, enter a project name such as `UWPSampleProject`.

1. Click **Create**.  The **New Universal Windows Platform Project** dialog box appears.

1. In the **Developer Mode** section, click **On**.  The **Use developer features** dialog box opens, to confirm turning on developer mode.

1. Click **Yes**, then close the **Settings** window.

   Visual studio displays the solution and project.

   :::image type="content" source="media/new-project-created.msft.png" alt-text="The resulting project." lightbox="media/new-project-created.msft.png":::


<!-- ====================================================================== -->
## Step 4 - Install the WinUI 2 NuGet package

1. Right-click the project in Solution Explorer, and then select **Manage NuGet Packages**.

1. Select the **Browse** tab.

1. Select the **Include prerelease** check box.

1. In the **Search** box, enter `Microsoft.UI.Xaml`, and then select **Microsoft.UI.Xaml**.  Make sure that the **Version** is the latest prerelease, and then select **Install**.

   :::image type="content" source="media/winui2-nuget-package.msft.png" alt-text="The NuGet package manager." lightbox="media/winui2-nuget-package.msft.png":::

   The **Preview Changes** dialog box appears.

1. Click **OK**. The WebView2 SDK dependency is installed with WinUI 2.

   <!-- "Microsoft.UI.Xaml" here is equiv to WinUI 2; same team -->

1. The **License Acceptance** dialog box appears.  Click **I Accept**.  The `readme.txt` file is displayed.

<!-- note: install halted after only WinUI 2 component, it didn't seem to install WebView2 even though that was the 2nd item listed.  assume that's ok now on test machine. -->


<!-- ====================================================================== -->
## Step 5 - Instantiate the WebView2 control in XAML code

### Add the project reference for the WebView2 control

1. In the `MainPage.xaml` file, in the `<Page>` element, add the following attribute below the other `xmlns:` attributes.

   ```xml
   xmlns:control="using:Microsoft.UI.Xaml.Controls"
   ```

### Add the WebView2 control to the grid

1. In the `MainPage.xaml` file, in the `<Grid>` element, add the following element:

   ```xml
   <control:WebView2 x:Name="wv2" Source="https://bing.com"/>
   ```

1. Save the file. Above the `MainPage.xaml` file in the code editor, a preview of the WebView2 content is displayed.

   :::image type="content" source="media/winui2-getting-started-preview-webview2-content.png" alt-text="Preview of the WebView2 content." lightbox="media/winui2-getting-started-preview-webview2-content.png":::

### Build and test the WebView2 project

1. Click **Debug** > **Start Debugging**.  The app window opens, briefly showing the WebView2 WebUI grid.

   :::image type="content" source="media/winui2-getting-started-webview2-grid.png" alt-text="The grid displays briefly during debugging." lightbox="media/winui2-getting-started-webview2-grid.png":::

1. After a moment, the app window shows the Bing website in the WebView2 control for WebUI 2.

   The sample app with WebView2 control displays the Bing website, http://www.bing.com:

   :::image type="content" source="media/winui2-getting-started-webview2-with-content.png" alt-text="The sample app displays the Bing website." lightbox="media/winui2-getting-started-webview2-with-content.png":::

1. In Visual Studio, click **Debug** > **Stop Debugging** to close the app window.

Now you can change the content of the WebView2 control to add your own content.


<!-- ====================================================================== -->
## See also

* [Manage the user data folder](../concepts/user-data-folder.md)


<!-- ====================================================================== -->
## Next steps

* [WebView2 development best practices](../concepts/developer-guide.md)
* [WebView2 UWP Sample App](https://github.com/MicrosoftEdge/WebView2Samples/tree/master/SampleApps/webview2_sample_uwp) - a comprehensive example of WebView2 capabilities.
* [See also](../index.md#see-also) in _Introduction to Microsoft Edge WebView2_.
* [Issues - microsoft-ui-xaml repo](https://github.com/microsoft/microsoft-ui-xaml/issues) - to enter WinUI-specific feature requests or bugs.
