---
description: Getting started guide for using WebView2 for WinUI 2 apps.
title: Get started with WebView2 in WinUI 2 apps (internal Preview)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/15/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: WebView2, webview2, WebView, webview, winui apps, winui, edge, CoreWebView2, browser control, edge html, get started, Get Started, .NET
---
# Get started with WebView2 in WinUI 2 apps (internal Preview)


## Step 1\: Install Visual Studio

1.  Install Visual Studio version 16.9 or later.  You can accept the defaults.

1.  By default, Visual Studio doesn't show line numbers in the code editor.  To turn on line numbers, select **Tools** > **Options** > **Text Editor** > **All Languages** > **Line numbers**.  Then select **OK**.


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


## Step 3\: Create a UWP app

1.  In Visual Studio, select **File** > **New** > **Project**.  The **Create a new project** dialog box appears.  

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

1.  Select the **OK** button.  The **Settings** window opens.

1.  In the **Developer Mode** section, select **On**.  The **Use developer features** dialog box opens, to confirm turning on developer mode.

1.  Select the **Yes** button, and then close the **Settings** window.


## Step 4\: Install the NuGet package for WinUI 2 with WebView2

<!-- refer to the NuGet package as a "WebView2" package or a "WinUI2" package? -->

1.  You may need to reach out to the owner of this document for clarification on this step before proceeding further.

1.  In Visual Studio, in **Solution Explorer**, right-click the node for the project, and then select **Manage NuGet Packages**.

    :::image type="complex" source="media/winui2-getting-started-manage-nuget-packages.png" alt-text="The 'Manage NuGet Packages' menu item on the context menu of the project in Solution Explorer" lightbox="media/winui2-getting-started-manage-nuget-packages.png":::
       The **Manage NuGet Packages** menu item on the context menu of the project in Solution Explorer
    :::image-end:::

    In the main part of Visual Studio, the **NuGet Package Manager** opens.

    :::image type="complex" source="media/winui2-getting-started-nuget-package-manager.png" alt-text="The NuGet Package Manager" lightbox="media/winui2-getting-started-nuget-package-manager.png":::
       The **NuGet Package Manager**
    :::image-end:::

1.  Select the **Settings** ![Settings gear icon](../../devtools-guide-chromium/media/settings-icon.msft.png) (gear) icon.  The **Options** dialog box opens, expanded to **NuGet Package Manager** > **Package Sources**.

    :::image type="complex" source="media/winui2-getting-started-nuget-options.png" alt-text="The Options dialog box for the NuGet package manager" lightbox="media/winui2-getting-started-nuget-options.png":::
       The **Options** dialog box for the NuGet package manager
    :::image-end:::

1.  Select the **+** button.  In the **Package sources** section, a package source with the default name of **Package source** is added, pointing to the placeholder location `https://packagesource`.

    :::image type="complex" source="media/winui2-getting-started-package-source-placeholder.png" alt-text="A new package source with placeholder values" lightbox="media/winui2-getting-started-package-source-placeholder.png":::
       A new package source with placeholder values
    :::image-end:::

1.  In the **Package sources** section, select the new **Package source** package source.

1.  In the **Name** text box, enter a specific name, such as **WinUI 2 Local NuGet Package**.

1.  Next to the **Source** text box, select the ellipses (...) button.  The **Select a Package Source Folder** dialog box opens.

1.  Select the folder that contains the WebView2 NuGet package that you copied onto your local drive, and then select the **Select** button.  The **Source** text box now contains the path you selected.

1.  Next to the **Source** text box, select the **Update** button.  In the **Package sources** section, the new package source now shows the updated name and directory path.

    :::image type="complex" source="media/winui2-getting-started-package-source-path.png" alt-text="A new NuGet package source" lightbox="media/winui2-getting-started-package-source-path.png":::
       A new NuGet package source
    :::image-end:::

1.  Select the **OK** button to close the **Options** dialog box. 

1.  In the **Package source** dropdown, select the new package source, such as **WinUI 2 Local NuGet Package**.

    :::image type="complex" source="media/winui2-getting-started-select-new-nuget-package.png" alt-text="Selecting the WinUI 2 NuGet package source" lightbox="media/winui2-getting-started-select-new-nuget-package.png":::
       Selecting the WinUI 2 NuGet package source
    :::image-end:::

1.  At the top of the **NuGet Package Manager**, select the **Browse** tab.  The message **No packages found** is initially displayed.

1.  Select the **Include prerelease** checkbox.  The package **Microsoft.UI.Xaml** is now listed, with a version number that includes "webview2".

1.  Select the package **Microsoft.UI.Xaml**.  Detailed information about the package is displayed.

    :::image type="complex" source="media/winui2-getting-started-install-button.png" alt-text="Install button for Microsoft.UI.Xaml package for WebView2" lightbox="media/winui2-getting-started-install-button.png":::
       Install button for **Microsoft.UI.Xaml** package for WebView2
    :::image-end:::

1.  Select the **Install** button.  The **Preview Changes** dialog box appears.

    :::image type="complex" source="media/winui2-getting-started-preview-changes-for-installing-package.png" alt-text="The 'Preview changes' dialog box for installing the NuGet package Microsoft.UI.Xaml" lightbox="media/winui2-getting-started-preview-changes-for-installing-package.png":::
       The **Preview changes** dialog box for installing the NuGet package **Microsoft.UI.Xaml**
    :::image-end:::

1.  Select the **OK** button.  The **License Acceptance** dialog box appears.

1.  Select the **I Accept** button.  The `readme.txt` file opens, for the WinUI NuGet package.

    :::image type="complex" source="media/winui2-getting-started-package-readme.png" alt-text="Readme file for the NuGet package Microsoft.UI.Xaml" lightbox="media/winui2-getting-started-package-readme.png":::
       Readme file for the NuGet package **Microsoft.UI.Xaml**
    :::image-end:::

1.  Select **File** > **Save All**.

The environment is now set up to support the WebView2 control for WinUI 2.  Next, add the WebView2 control to the app, as follows.


## Step 5\: Instantiate the WebView2 control in XAML code

### Add the project reference for the WebView2 control 

1.  In the `MainPage.xaml` file, in the `<Page>` element, add the following attribute:

    ```xml
    xmlns:control="using:Microsoft.UI.Xaml.Controls" 
    ```

### Add the WebView2 control to the grid

1.  In the `MainPage.xaml` file, in the `<Grid>` element, add the following element:

    ```xml
    <control:WebView2 x:Name="wv2" Source="https://bing.com"/>
    ```

1.  Save the file.  Above the `MainPage.xaml` file in the code editor, a preview of the WebView2 content is displayed, showing the Bing.com site with a background photo.

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

Now you can change the content of the WebView2 control to your own content.


## Next steps  

*   To learn more about building WebView2 applications, navigate to [WebView2 development best practices][WV2BestPractices].  
*   For a comprehensive example of WebView2 capabilities, navigate to [WebView2Samples][GithubMicrosoftedgeWebview2samplesMain].  
*   For more information about WebView2, navigate to [WebView2 Resources][Webview2IndexNextSteps].  
*   For detailed information about the WebView2 API, navigate to [WebView2 spec][GithubMicrosoftMicrosoftUiXamlSpecsWebview2].  

    
## Getting in touch with the Microsoft Edge WebView team  

[!INCLUDE [contact WebView team note](../includes/contact-webview-team-note.md)]  

To send your WinUI-specific feature requests or bugs, navigate to [Issues - microsoft/microsoft-ui-xaml][GithubMicrosoftMicrosoftUiXamlIssues] and then select **New issue**.  

<!-- links -->  
[WV2BestPractices]: ../concepts/developer-guide.md "WebView2 development best practices | Microsoft Docs"  
[Webview2IndexNextSteps]: ../index.md#next-steps "Next steps - Introduction to Microsoft Edge WebView2 | Microsoft Docs"  
<!-- external links -->
[GithubMicrosoftMicrosoftUiXamlIssues]: https://github.com/microsoft/microsoft-ui-xaml/issues "Issues - microsoft/microsoft-ui-xaml | GitHub"  
[GithubMicrosoftMicrosoftUiXamlSpecsWebview2]: https://github.com/microsoft/microsoft-ui-xaml-specs/blob/master/active/WebView2/WebView2_spec.md "WebView2 spec - microsoft/microsoft-ui-xaml-specs | GitHub"  
[GithubMicrosoftedgeWebview2samplesMain]: https://github.com/MicrosoftEdge/WebView2Samples "WebView2 Samples - MicrosoftEdge/WebView2Samples | GitHub"  
