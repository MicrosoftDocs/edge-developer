---
description: Get started guide with WebView2 for WinUI 2 apps.
title: Get started with WebView2 in WinUI 2 apps (public preview)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 11/05/2021
ms.topic: tutorial
ms.prod: microsoft-edge
ms.technology: webview
keywords: WebView2, webview2, WebView, webview, winui apps, winui, edge, CoreWebView2, browser control, edge html, get started, Get Started, .NET
---
# Get started with WebView2 in WinUI 2 apps (public preview)

In this article, get started creating your first WebView2 app in WinUI 2, and learn about the main features of WebView2. For more information about individual WebView2 APIs, navigate to [Microsoft Edge WebView2 API Reference](../webview2-api-reference.md) and then select the WinRT reference links.

> [!NOTE]
> The WinUI 2 package depends on a prerelease WebView2 package. For full API compatibility, use a preview browser channel as your runtime such as the Beta, Dev, or Canary channel of Microsoft Edge.

## Step 0 - Prerequisites

1.  Install [Microsoft Visual Studio 2019 version 16.9](/visualstudio/releases/2019/release-notes-v16.9) or later. Accept the defaults.

1.  By default, Visual Studio doesn't show line numbers in the code editor. To turn on line numbers, select **Tools** > **Options** > **Text Editor** > **All Languages** > **Line numbers**.  Then select **OK**.


## Step 1 - Install workloads

1.  Open Microsoft Visual Studio.
 
1.  Click **Tools** > **Get Tools and Features**.  The **Visual Studio Installer** window opens.

1.  On the **Workloads** tab, click **.NET Desktop Development**.

1.  Click **Desktop development with C++**.

1.  Click **Universal Windows Platform development**.

1. On the right, expand **Installation Details** > **Universal Windows Platform development**, and then click **C++ (v142) Universal Windows Platform tools**.

    :::image type="complex" source="media/winui2-getting-started-install-workloads.png" alt-text="The modifying visual studio 2019 dialog box displays cards and installation details." lightbox="media/winui2-getting-started-install-workloads.png":::
       The modifying visual studio 2019 dialog box displays cards and installation details. Installation details for universal windows platform development  display included and optional items.
    :::image-end:::

1.  Click **Modify**. Visual Studio installs the selected features.


## Step 2 - Create a UWP app

1.  In Visual Studio, click **File** > **New** > **Project**.  Or use the startup screen of Visual Studio, then select **Create a new project**.  The **Create a new project** dialog box displays.

1.  On the **All languages** dropdown list, click **C#**.

1.  On the **All platforms** dropdown list, click **Windows**.

1.  On the **All project types** dropdown list, click **UWP**.  As a result of your filter selections, several types of app templates are listed.

1.  In the list of app templates, click **Blank App (Universal Windows)**.

    :::image type="complex" source="media/winui2-getting-started-create-project.png" alt-text="The Create a new project dialog box displays the blank app (universal windows) card." lightbox="media/winui2-getting-started-create-project.png":::
       The Create a new project dialog box displays. The filter criteria are highlighted in red. The blank app (universal windows) card is highlighted in red.
    :::image-end:::

1.  Click **Next**.

    The **Configure your new project** dialog displays, for a **Blank App (Universal Windows)**.

1.  In the **Project name** text box, enter a project name such as `UWPSampleProject`.

    :::image type="complex" source="media/winui2-getting-started-config-new-project.png" alt-text="The Configure your new project dialog box displays text boxes for a Blank App (Universal Windows)." lightbox="media/winui2-getting-started-config-new-project.png":::
       The Configure your new project dialog box displays text boxes for a Blank App (Universal Windows). Text boxes displayed are project name, location, solution, and solution name.
    :::image-end:::

1.  Click **Create**.  The **New Universal Windows Platform Project** dialog box displays.

1.  Click **OK**.  The **Settings** window might open, if you haven't done the following couple of steps yet.

1.  In the **Developer Mode** section, click **On**.  The **Use developer features** dialog box opens, to confirm turning on developer mode.

1.  Click **Yes**, then close the **Settings** window.

    Visual studio displays the solution and project.

    :::image type="complex" source="media/new-project-created.msft.png" alt-text="The resulting project" lightbox="media/new-project-created.msft.png":::
        The resulting project
    :::image-end:::

## Step 3 - Install the WinUI 2 NuGet package

1.  Right-click the project in Solution Explorer, and then select **Manage NuGet Packages**.

1.  Select the **Browse** tab.

1.  Select the **Include prerelease** check box.

1.  In the **Search** box, enter `Microsoft.UI.Xaml`, and then select **Microsoft.UI.Xaml**.  Make sure that the **Version** is the latest prerelease, and then select **Install**.

    :::image type="complex" source="media/winui2-nuget-package.msft.png" alt-text="The NuGet package manager" lightbox="media/winui2-nuget-package.msft.png":::
       The NuGet package manager
    :::image-end:::

    The **Preview Changes** dialog box displays.

1.  Click **OK**. The WebView2 SDK dependency is installed with WinUI 2.

    <!-- "Microsoft.UI.Xaml" here is equiv to WinUI 2; same team -->

1.  The **License Acceptance** dialog box displays. Click**I Accept**.  The `readme.txt` displays.

<!-- note: install halted after only WinUI 2 component, it didn't seem to install WebView2 even though that was the 2nd item listed.  assume that's ok now on my machine. -->


## Step 4 - Instantiate the WebView2 control in XAML code

### Add the project reference for the WebView2 control

1.  In the `MainPage.xaml` file, in the `<Page>` element, add the following attribute below the other `xmlns:` attributes.

    ```xml
    xmlns:control="using:Microsoft.UI.Xaml.Controls"
    ```

### Add the WebView2 control to the grid

1.  In the `MainPage.xaml` file, in the `<Grid>` element, add the following element:

    ```xml
    <control:WebView2 x:Name="wv2" Source="https://bing.com"/>
    ```

1.  Save the file. Above the `MainPage.xaml` file in the code editor, a preview of the WebView2 content is displayed.

    :::image type="complex" source="media/winui2-getting-started-preview-webview2-content.png" alt-text="Preview of the WebView2 content" lightbox="media/winui2-getting-started-preview-webview2-content.png":::
       Preview of the WebView2 content
    :::image-end:::

### Build and test the WebView2 project

1.  Click **Debug** > **Start Debugging**.  The app window opens, briefly showing the WebView2 WebUI grid.

    :::image type="complex" source="media/winui2-getting-started-webview2-grid.png" alt-text="The grid displays briefly during debugging." lightbox="media/winui2-getting-started-webview2-grid.png":::
       The grid displays briefly during debugging.
    :::image-end:::

1.  After a moment, the app window shows the Bing website in the WebView2 control for WebUI 2.

    :::image type="complex" source="media/winui2-getting-started-webview2-with-content.png" alt-text="The sample app displays the Bing website." lightbox="media/winui2-getting-started-webview2-with-content.png":::
       The sample app with WebView2 control displays the Bing website, http://www.bing.com.
    :::image-end:::

1.  In Visual Studio, click **Debug** > **Stop Debugging** to close the app window.

Now you can change the content of the WebView2 control to add your own content.


<!-- ====================================================================== -->
## Next steps

*  [WebView2 development best practices](../concepts/developer-guide.md)
*  [WebView2Samples repo](https://github.com/MicrosoftEdge/WebView2Samples) - a comprehensive example of WebView2 capabilities.
*  [See also](../index.md#see-also) in _Introduction to Microsoft Edge WebView2_.
*  [WebView2 spec](https://github.com/microsoft/microsoft-ui-xaml-specs/blob/master/active/WebView2/WebView2_spec.md) - detailed information about the WebView2 API.
*  [Issues - microsoft-ui-xaml repo](https://github.com/microsoft/microsoft-ui-xaml/issues) - to enter WinUI-specific feature requests or bugs.
