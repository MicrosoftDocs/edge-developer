---
description: Getting started guide for using WebView2 for WinUI 2 apps.
title: Get started with WebView2 in WinUI 2 apps (public preview)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 08/30/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: WebView2, webview2, WebView, webview, winui apps, winui, edge, CoreWebView2, browser control, edge html, get started, Get Started, .NET
---
# Get started with WebView2 in WinUI 2 apps (public preview)

In this article, get started creating your first WebView2 app and learn about the main features of WebView2. For more information about individual WebView2 APIs, navigate to [Microsoft Edge WebView2 API Reference](../webview2-api-reference.md) and then select the WinRT reference links.

> [!NOTE]
> The WinUI 2 package takes a dependency on a prerelease WebView2 package.  For full API compatibility, use a preview browser channel as your runtime (that is, the Beta, Dev, or Canary channel of Microsoft Edge).


<!-- ====================================================================== -->
## Step 1\: Install Visual Studio

1.  Install Visual Studio version 16.9 or later.  You can accept the defaults.

1.  By default, Visual Studio doesn't show line numbers in the code editor.  To turn on line numbers, select **Tools** > **Options** > **Text Editor** > **All Languages** > **Line numbers**.  Then select **OK**.


<!-- ====================================================================== -->
## Step 2\: Install workloads

1.  In Visual Studio, select **Tools** > **Get Tools and Features**.  The **Visual Studio Installer** window opens.

1.  On the **Workloads** tab, select **.NET Desktop Development**.

1.  Select **Desktop development with C++**.

1.  Select **Universal Windows Platform development**.

1. On the right, expand **Installation Details** > **Universal Windows Platform development**, and then select **C++ (v142) Universal Windows Platform tools**.

    :::image type="complex" source="media/winui2-getting-started-install-workloads.png" alt-text="Selecting workloads to install for Visual Studio" lightbox="media/winui2-getting-started-install-workloads.png":::
       Selecting workloads to install for Visual Studio
    :::image-end:::

1.  Select the **Modify** button.  Visual Studio installs the selected features.


<!-- ====================================================================== -->
## Step 3\: Create a UWP app

1.  In Visual Studio, select **File** > **New** > **Project**.  Or use the startup screen of Visual Studio, then select **Create a new project**.  The **Create a new project** dialog box appears.

1.  On the **All languages** dropdown list, select **C#**.

1.  On the **All platforms** dropdown list, select **Windows**.

1.  On the **All project types** dropdown list, select **UWP**.  As a result of your filter selections, several types of app templates are listed.

1.  In the list of app templates, select **Blank App (Universal Windows)**.

    :::image type="complex" source="media/winui2-getting-started-create-project.png" alt-text="The 'Create a new project' dialog box" lightbox="media/winui2-getting-started-create-project.png":::
       The **Create a new project** dialog box
    :::image-end:::

1.  Select the **Next** button.  The **Configure your new project** page of the dialog box appears, for a **Blank App (Universal Windows)**.

1.  In the **Project name** text box, enter a project name, such as `UWPSampleProject`.

    :::image type="complex" source="media/winui2-getting-started-config-new-project.png" alt-text="The 'Configure your new project' dialog box for a 'Blank App (Universal Windows)'" lightbox="media/winui2-getting-started-config-new-project.png":::
       The **Configure your new project** dialog box for a **Blank App (Universal Windows)**
    :::image-end:::

1.  Select the **Create** button.  The **New Universal Windows Platform Project** dialog box appears.

1.  Select the **OK** button.  The **Settings** window might open, if you haven't done the following couple of steps yet.

1.  In the **Developer Mode** section, select **On**.  The **Use developer features** dialog box opens, to confirm turning on developer mode.

1.  Select the **Yes** button, and then close the **Settings** window.

The solution and project is displayed.

:::image type="complex" source="media/new-project-created.msft.png" alt-text="The resulting project" lightbox="media/new-project-created.msft.png":::
    The resulting project
:::image-end:::


<!-- ====================================================================== -->
## Step 4\: Install the WinUI 2 NuGet package

1.  Right-click the project in Solution Explorer, and then select **Manage NuGet Packages**.

1.  Select the **Browse** tab.

1.  Select the **Include prerelease** check box.

1.  In the **Search** box, enter `Microsoft.UI.Xaml`, and then select **Microsoft.UI.Xaml**.  Make sure that the **Version** is the latest prerelease, and then select **Install**.

    :::image type="complex" source="media/winui2-nuget-package.msft.png" alt-text="The NuGet package manager" lightbox="media/winui2-nuget-package.msft.png":::
       The NuGet package manager
    :::image-end:::

    The **Preview Changes** dialog box appears.  Select the **OK** button.  Notice that the WebView2 SDK dependency will be installed as well as WinUI 2.

<!-- "Microsoft.UI.Xaml" here is equiv to WinUI 2; same team -->

1.  The **License Acceptance** dialog box appears.  Select the **I Accept** button.  The `readme.txt` appears.

<!-- note: install halted after only WinUI 2 component, it didn't seem to install WebView2 even though that was the 2nd item listed.  assume that's ok now on my machine. -->


<!-- ====================================================================== -->
## Step 5\: Instantiate the WebView2 control in XAML code

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

1.  Save the file.  Above the `MainPage.xaml` file in the code editor, a preview of the WebView2 content is displayed.

    :::image type="complex" source="media/winui2-getting-started-preview-webview2-content.png" alt-text="Preview of the WebView2 content" lightbox="media/winui2-getting-started-preview-webview2-content.png":::
       Preview of the WebView2 content
    :::image-end:::

### Build and test the WebView2 project

1.  On the **Debug** menu, select **Start Debugging**.  The app window opens, briefly showing the WebView2 WebUI grid.

    :::image type="complex" source="media/winui2-getting-started-webview2-grid.png" alt-text="The grid momentarily appears during debugging" lightbox="media/winui2-getting-started-webview2-grid.png":::
       The grid momentarily appears during debugging
    :::image-end:::

1.  After a moment, the app window shows the Bing.com site, in the WebView2 control for WebUI 2.

    :::image type="complex" source="media/winui2-getting-started-webview2-with-content.png" alt-text="An app window displaying the Bing.com site in the WebView2 control" lightbox="media/winui2-getting-started-webview2-with-content.png":::
       An app window displaying the Bing.com site in the WebView2 control
    :::image-end:::

1.  In Visual Studio, on the **Debug** menu, select **Stop Debugging**.  The app window closes.

Now you can change the content of the WebView2 control to add your own content.


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
[Webview2IndexNextSteps]: ../index.md#see-also "See also - Introduction to Microsoft Edge WebView2 | Microsoft Docs"
<!-- external links -->
[GithubMicrosoftMicrosoftUiXamlSpecsWebview2]: https://github.com/microsoft/microsoft-ui-xaml-specs/blob/master/active/WebView2/WebView2_spec.md "WebView2 spec - microsoft/microsoft-ui-xaml-specs | GitHub"
[GithubMicrosoftedgeWebview2samplesMain]: https://github.com/MicrosoftEdge/WebView2Samples "WebView2 Samples - MicrosoftEdge/WebView2Samples | GitHub"
