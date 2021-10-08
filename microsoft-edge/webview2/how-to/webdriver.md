---
description: Automate and test the WebView2 Control using Microsoft Edge Driver
title: Automating and Testing WebView2 with Microsoft Edge Driver
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/14/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, edge, ICoreWebView2, ICoreWebView2Controller, Selenium, Microsoft Edge Driver
---
# Automate and test WebView2 with Microsoft Edge Driver

Because WebView2 uses the Microsoft Edge \(Chromium\) web platform, WebView2 developers can take advantage of standard web tooling for debugging and automation.  Selenium is one such tool.  It implements the W3C [WebDriver][W3cWebdriver2] API.  You can use Selenium to create automated tests to simulate user interactions.

Get started with the following steps.

## Step 1: Download the WebView2API Sample

If you don't have an existing WebView2 project, download the [WebView2API Sample app][GithubMicrosoftedgewebview2samplesSampleappsWebview2apisample], which is a comprehensive sample of the latest WebView2 SDK.  Make sure you've satisfied the [prerequisites for the WebView2API Sample app][GithubMicrosoftedgeWebview2samplesSampleappsWebview2apisamplePrerequisites].

Once you've cloned the repo, build the project in Visual Studio.  It should look like the following figure.

:::image type="complex" source="../media/webdriver/sample-app.png" alt-text="WebView2API Sample app" lightbox="../media/webdriver/sample-app.png":::
   WebView2API Sample app
:::image-end:::

## Step 2: Install Microsoft Edge Driver

Follow the instructions to install [Microsoft Edge Driver][WebdriverChromiumDownloadMicrosoftEdgeDriver].  Microsoft Edge Driver is the browser-specific driver required by Selenium to automate and test WebView2.

Make sure the version of Microsoft Edge Driver matches the version of the WebView2 Runtime that your app uses.  For the WebView2API Sample to work, make sure your version of the WebView2 Runtime is greater than or equal to the supported version of the latest WebView2 SDK release.

*  To locate the latest WebView2 SDK release, navigate to [Release notes for WebView2 SDK][Webview2ReleaseNotes].
*  To find out which version of the WebView2 Runtime you currently have, navigate to `edge://settings/help`.

## Step 3: Add Selenium to the WebView2API Sample

By this point, you've installed the WebView2 Runtime, built a WebView2 project, and installed Microsoft Edge Driver.  Next, get started using Selenium, as follows.

> [!NOTE]
> Selenium supports C\#, Java, Python, Javascript, and Ruby.  However, the following guide is written using C\#.

1.  Start by creating a new **C# .NET Framework** project in **Visual Studio**.  Select **Next** on the bottom right-hand corner to continue.

    :::image type="complex" source="../media/webdriver/new-project.png" alt-text="Create a new project" lightbox="../media/webdriver/new-project.png":::
       Create a new project
    :::image-end:::

1.  Give your project a **Project name**, save it to your preferred **Location**, and then select **Create**.

    :::image type="complex" source="../media/webdriver/app-create.png" alt-text="Configure your new project" lightbox="../media/webdriver/app-create.png":::
       Configure your new project
    :::image-end:::

    A new project is created, with all the code placed in the `Program.cs` file.

    :::image type="complex" source="../media/webdriver/start-app.png" alt-text="New project" lightbox="../media/webdriver/start-app.png":::
       New project
    :::image-end:::

1.  Next, add Selenium to the project; install Selenium by using the Selenium.WebDriver NuGet package as follows.  To download the Selenium.WebDriver NuGet package, in **Visual Studio**, select **Project** > **Manage NuGet Packages**.

1.  Select the **Browse** tab.  The following screen appears.

    :::image type="complex" source="../media/webdriver/download-nuget.png" alt-text="Download NuGet package" lightbox="../media/webdriver/download-nuget.png":::
       Download NuGet package
    :::image-end:::

1.  In the **Package source** dropdown list, select **nuget.org**.

1.  Select the **Include prerelease** checkbox.

1.  Type `Selenium.WebDriver` in the **Search** bar, and then select **Selenium.WebDriver** from the results.

1.  In the detail window on the right, make sure the **Version** is set to **4.0.0-beta4** or later, and then select **Install**.  NuGet downloads Selenium to your machine.

    :::image type="complex" source="../media/webdriver/nuget.png" alt-text="Manage NuGet package" lightbox="../media/webdriver/nuget.png":::
       Manage NuGet package
    :::image-end:::

    To learn more about the Selenium.WebDriver NuGet package, navigate to [Selenium.WebDriver 4.0.0-beta4][NugetSeleniumWebdriver700beta4].

1.  Use `OpenQA.Selenium.Edge` by adding the statement `using OpenQA.Selenium.Edge;` at the beginning of the `Program.cs` file.

    ```csharp
    using OpenQA.Selenium.Edge;

    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    ```

## Step 4: Drive WebView2 with Selenium and Microsoft Edge Driver

1.  To drive WebView2 with Selenium and Microsoft Edge Driver, first create the `EdgeOptions` object, by copying and pasting the following code snippet.

    ```csharp
    static void Main(string[] args)
    {
        EdgeOptions edgeOptions = new EdgeOptions();
    ```

1.  Next, we'll add code that does the following:

    *   Configure `edgeOptions` to use Chromium and WebView2, by setting the options `UseChromium` and `UseWebView` to `true`.
    *   Set `edgeOptions.BinaryLocation` to the file path of your host app binary.
    *   Create the `EdgeDriver` object using `edgeOptions`.

    Copy the following code and paste it below `edgeOptions`.

    ```csharp
    //Set edgeOptions to use Chromium and WebView2
    edgeOptions.UseChromium = true;
    edgeOptions.UseWebView = true;

    //Set the BinaryLocation to the filepath of the WebView2API Sample runtime
    edgeOptions.BinaryLocation = @"C:\path\to\your\webview2\project.exe";
    EdgeDriver edgeDriver = new EdgeDriver(edgeOptions);
    ```

1.  In the above code, specify the correct file path of your project runtime and the Microsoft Edge Driver runtime on your machine.

    `EdgeDriver` has now been configured to drive the WebView2 in your project.  For example, if you're using the **WebView2API Sample**, your code can now navigate to `https://microsoft.com` by running the `e.Url = @"https://www.microsoft.com";` command, as shown in the next code listing.

1.  Verify that Selenium can drive WebView2, by setting a breakpoint on the `e.Url` line and running the project.

    ```csharp
        //Navigate the WebView2API Sample from bing.com to microsoft.com
        e.Url = @"https://www.microsoft.com";

        //Exit Microsoft Edge Driver
        e.Quit();
    }
    ```

    :::image type="complex" source="../media/webdriver/microsoft.png" alt-text="Selenium running WebView2" lightbox="../media/webdriver/microsoft.png":::
       Selenium running WebView2
    :::image-end:::

Congratulations!  You've successfully automated a WebView2 project and driven WebView2 by using Selenium and Microsoft Edge Driver.

> [!Note]
> [edge-selenium-tools][GithubSeleniumProject] is a project that the Microsoft Edge team created to allow Selenium 3 users to drive Edge Chromium and WebView2 using the same API that's provided in Selenium 4.


<!-- ====================================================================== -->
## See also

*  [WebDriver on Selenium documentation][SeleniumWebdriver] - a comprehensive look at how the APIs Selenium drives WebView2 or Microsoft Edge.
*  [Introduction to Microsoft Edge WebView2][WebViewIndex] - using the WebView2 control to embed web content in your native app.
*  [Use WebDriver for test automation][WebdriverChromium] - automating Microsoft Edge.


<!-- ====================================================================== -->
<!-- links -->
[WebdriverChromium]: ../../webdriver-chromium/index.md "Use WebDriver (Chromium) for test automation | Microsoft Docs"
[WebdriverChromiumDownloadMicrosoftEdgeDriver]: ../../webdriver-chromium/index.md#download-microsoft-edge-driver "Download Microsoft Edge Driver - Use WebDriver (Chromium) for test automation | Microsoft Docs"
[WebViewIndex]: ../index.md "Introduction to Microsoft Edge WebView2 - Microsoft Docs"
[Webview2ReleaseNotes]: ../release-notes.md "Release notes for WebView2 SDK | Microsoft Docs"
<!-- external links -->
[MicrosoftDeveloperMicrosoftEdgeWebDriverDownloads]: https://developer.microsoft.com/microsoft-edge/tools/webdriver#downloads "Download WebDriver | Microsoft Edge Developer"

[GithubMicrosoftedgewebview2samplesSampleappsWebview2apisample]: https://github.com/MicrosoftEdge/WebView2Samples/tree/master/SampleApps/WebView2APISample "WebView2 API Sample - MicrosoftEdge/WebView2Samples | GitHub"
[GithubMicrosoftedgeWebview2samplesSampleappsWebview2apisamplePrerequisites]: https://github.com/MicrosoftEdge/WebView2Samples/tree/master/SampleApps/WebView2APISample#prerequisites "Prerequisites - WebView2 API Sample | GitHub"

[NugetSeleniumWebdriver700beta4]: https://www.nuget.org/packages/Selenium.WebDriver/4.0.0-beta4 "Selenium.WebDriver 4.0.0-beta4 | NuGet Gallery"

[SeleniumWebdriver]: https://www.selenium.dev/documentation/en/webdriver "WebDriver | Selenium"

[W3cWebdriver2]: https://www.w3.org/TR/webdriver2 "WebDriver | W3C"

[GithubSeleniumProject]: https://github.com/microsoft/edge-selenium-tools "Selenium Tools for Microsoft Edge"
