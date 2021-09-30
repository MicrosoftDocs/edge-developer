---
description: Automate and test the WebView2 Control using Microsoft Edge Driver
title: Automating and Testing WebView2 apps with Microsoft Edge Driver
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/14/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, edge, ICoreWebView2, ICoreWebView2Controller, Selenium, Microsoft Edge Driver
---
# Automate and test WebView2 apps with Microsoft Edge Driver
<!-- Should this article be titled:
# Automate and test WebView2 with Microsoft Edge Driver, Selenium, and WebDriver
this filename is webdriver.md, should the title include "WebDriver"?
-->

<!-- todo: link from some WebDriver articles to here -->

This article explains how to automate and test your WebView2 app with Microsoft Edge Driver, by using the Selenium framework for browser test automation.

This article provides instructions for using the Selenium framework and C#, but you can use any library, framework, and programming language that supports WebDriver.  To accomplish the same tasks using a WebDriver testing framework other than Selenium, consult the official documentation for your framework of choice.

To create automated tests to simulate user interactions in your WebView2 app, you can use Microsoft Edge Driver.  The W3C WebDriver protocol allows programs to control the behavior of web browsers.   Microsoft Edge Driver is Microsoft's implementation of the WebDriver protocol, specifically for Microsoft Edge.  Test authors write tests that use WebDriver commands that Microsoft Edge Driver receives.  Microsoft Edge Driver then sends the WebDriver commands to Microsoft Edge.

Because WebView2 uses the Microsoft Edge (Chromium) web platform, WebView2 developers can take advantage of standard web tooling, such as Selenium, for debugging and automation.  Selenium is a testing framework that uses the WebDriver protocol.  Selenium implements the W3C [WebDriver][W3cWebdriver2] API.  You can use Selenium to create automated tests to simulate user interactions in Microsoft Edge.

For the relationship between the WebDriver protocol, Microsoft Edge Driver as an implementation of that protocol, and the Selenium test framework, see [WebDriver overview](../../webdriver-chromium/index.md#relationship-between-webdriver-and-other-software).


<!-- ====================================================================== -->
## Step 1: Download the WebView2API Sample

If you don't have an existing WebView2 project, download the [WebView2API Sample app][GithubMicrosoftedgewebview2samplesSampleappsWebview2apisample], which is a comprehensive sample of the latest WebView2 SDK.  Make sure you've satisfied the [prerequisites for the WebView2API Sample app][GithubMicrosoftedgeWebview2samplesSampleappsWebview2apisamplePrerequisites].

Once you've cloned the repo, build the project in Visual Studio.  It should look like the following figure.

:::image type="complex" source="../media/webdriver/sample-app.png" alt-text="WebView2API Sample app" lightbox="../media/webdriver/sample-app.png":::
   WebView2API Sample app
:::image-end:::


<!-- ====================================================================== -->
## Step 2: Install Microsoft Edge Driver

Follow the instructions to install [Microsoft Edge Driver][WebdriverChromiumDownloadMicrosoftEdgeDriver].  Microsoft Edge Driver is the browser-specific driver required by Selenium to automate and test WebView2.

Make sure the version of Microsoft Edge Driver matches the version of the WebView2 Runtime that your app uses.  For the WebView2API Sample to work, make sure your version of the WebView2 Runtime is greater than or equal to the supported version of the latest WebView2 SDK release.

*  To locate the latest WebView2 SDK release, navigate to [Release notes for WebView2 SDK][Webview2ReleaseNotes].
*  To find out which version of the WebView2 Runtime you currently have, navigate to `edge://settings/help`.


<!-- ====================================================================== -->
## Step 3: Add Selenium to the WebView2API Sample

By this point, you've installed the WebView2 Runtime, built a WebView2 project, and installed Microsoft Edge Driver.  Next, get started using Selenium, as follows.

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

You've now set up an empty Visual Studio project that's suitable for Selenium testing.  Next, configure Selenium to drive WebView2 by one of two approaches: the "basic/launch" approach, or the "advanced/attach" approach.  These two approaches are described below.


<!-- ====================================================================== -->
## Step 4: Choosing whether Microsoft Edge Driver should launch or attach to your WebView2 app

Next, decide whether to configure Selenium to drive WebView2 by using the "basic/launch" approach or the "advanced/attach" approach.

In some scenarios, it is appropriate to let Microsoft Edge Driver handle the WebView2 launch ("basic"); in other scenarios, it's appropriate to attach to a running WebView2 instance ("advanced").

### Approach 1: Letting Microsoft Edge Driver launch your WebView2 app
<!-- preferred phrase -->

If you have a simple app that creates a single WebView2 instance and that instance is active immediately upon launch, then you can use the "basic/launch" scenario; use the section "Step 4: Drive WebView2 with Selenium and Microsoft Edge Driver".  In this scenario, there's one WebView2 instance, and it is available upon launch without needing to navigate through any native UI.

### Approach 2: Attaching Microsoft Edge Driver to a running WebView2 app
<!-- preferred phrase -->

If you have any situation that doesn't fit the basic scenario above, you should attach to a running WebView2 instance instead of letting EdgeDriver handle the WebView2 launch; use "Step 4b ("advanced"): Attach to a running WebView2 app with Selenium and Microsoft Edge Driver".  Some examples of scenarios that don't fit the "basic/launch" scenario above are:
*  You need to navigate through some native UI before the WebView2 instance is created.
*  Your app creates multiple WebView2 instances, and you want to attach to a specific instance.

In such scenarios, we recommend attaching to a specific instance of WebView2, because having EdgeDriver launch your WebView2 app is for relatively simple scenarios only.  When EdgeDriver launches your app, it automatically attaches to the first WebView2 instance that is created, and will fail if no WebView2 instance is found.

<!-- todo: copy caveat to here from WebDriver article, maybe in more than one spot, "Selenium is just one supported way" -->

<!-- 
There are common steps (you must know Selenium, download Microsoft Edge Driver, make sure the versions match.  What you do with your WebDriver framework, such as Selenium, will differ between the "basic" aka "launch" and the "advanced" aka "attach" scenarios.

*  The "basic/launch" approach: launch your app outside of Microsoft Edge Driver and then attach Microsoft Edge Driver to a running WebView2 instance.

*  The "advanced/attach" approach: A complex WebView2 app that's not compatible with the "basic" scenario.  
-->

<!-- 
Step 4a = "basic/launch" scenario steps.
Step 4b = "advanced/attached" scenario steps, where you have multiple WebView2 instances and WebDriver.
-->


<!-- ====================================================================== -->
<!-- one scenario breaks out here; the above step1-3 are general relevance regardless of two scenarios "basic/launch" vs "advanced/attach"-->
<!-- ====================================================================== -->
## Step 4a: Letting Microsoft Edge Driver launch your WebView2 app

Note: Selenium with C# is just one of many WebDriver testing frameworks.

<!-- old title: Step 4: Drive WebView2 with Selenium and Microsoft Edge Driver -->

Use this "basic/launch" approach if you have a simple app that creates a single WebView2 instance and that instance is active immediately upon launch.  In this scenario, there's one WebView2 instance, and it is available upon launch without needing to navigate through any native UI.  

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

    :::image type="content" source="../media/webdriver/microsoft.png" alt-text="Selenium running WebView2" lightbox="../media/webdriver/microsoft.png":::

Congratulations!  You've successfully automated a WebView2 project and driven WebView2 by using Selenium and Microsoft Edge Driver, per the "basic/launch" approach.

This is the end of the article, if you are using the "basic/launch" approach.


<!-- ====================================================================== -->
## Step 4b: Attaching Microsoft Edge Driver to a running WebView2 app
<!-- description: Automating a WebView2 instance in an already-running application by attaching Edge Driver to the WebView2 app. -->

This section explains how to attach Microsoft Edge Driver to an already-running WebView2 instance.  If you don't have just a single WebView2 instance, or your WebView2 instance requires navigating through some native UI, use this section and approach.


A problem is that to automate a WebView2-based app, you sometimes first need to perform some actions in the native GUI in order to launch the WebView2 control.  As a solution, you need to navigate the native UI outside of Microsoft Edge Driver, and somehow ensure that the WebView2 instance is displayed, as follows.

In this scenario, where you have some native UI to navigate, you launch your app using a tool other than Microsoft Edge Driver (such as WinAppDriver), then trigger the WebView2 instantiation, and then attach Microsoft Edge Driver to the running WebView2 instance.

Microsoft Edge Driver doesn't handle native UI automation, but here are some other approaches to navigate the native UI and display the WebView2 instance that you are automating:

*  Windows Application Driver ([WinAppDriver](https://github.com/Microsoft/WinAppDriver)) is a service to support Selenium-like UI Test Automation on Windows Applications.  This service supports testing Universal Windows Platform (UWP), Windows Forms (WinForms), Windows Presentation Foundation (WPF), and Classic Windows (Win32) apps on Windows 10 PCs.

*  Using Microsoft Native UI automation directly.  The [Microsoft UI Automation][MicrosoftUIAutomation] framework allows automated test scripts to interact with the UI.  Microsoft UI Automation enables Windows applications to provide and consume programmatic information about user interfaces (UIs).  It provides programmatic access to most UI elements on the desktop.  It enables assistive technology products, such as screen readers, to provide information about the UI to end users and to manipulate the UI by standard input and by means other than standard input. <!-- condense that; 1st para -->

* Use a flag such as a command-line parameter or an environment variable to tell your app to launch directly to the WebView2 instance, to avoid the need for navigating native UI.  <!-- create a special test mode that displays __. -->

In addition to ensuring the WebView2 instance is activated, you need to set its `--remote-debugging-port` command-line parameter.  We'll do this in the steps below.  Microsoft Edge Driver will use this remote debugging port to connect to your WebView2 instance.  

### Launching the WebView2 app with remote debugging enabled

1. This step happens when you're coding your app.  You need to provide this extra command-line parameter when you're instantiating your WebView2 control.  Enable remote debugging, as follows:  Configure your WebView2 instance with the `--remote-debugging-port=<port>` additional command-line parameter using one of the recommended approaches in [Globals, in WebView2 Win32 C++ Reference][Webview2ReferenceWin32Globals].  You need to choose an available port number for this parameter.

1. Launch your app.  How you launch your app depends on what other native UI tools you're using.

At this point, your app is running and its `--remote-debugging-port` command-line parameter has been set.  Next, we'll attach Microsoft Edge Driver to the launched WebView2 app.

### Attaching Microsoft Edge Driver to the launched WebView2 app

1. Use the `EdgeOptions.DebuggerAddress` property to tell Microsoft Edge Driver to connect to the remote debugging port that you specified previously, instead of launching a new application:

```csharp
EdgeOptions edgeOptions = new EdgeOptions();
edgeOptions.UseChromium = true;
edgeOptions.UseWebView = true;
edgeOptions.DebuggerAddress = "localhost:9222";
EdgeDriver edgeDriver = new EdgeDriver(edgeOptions);
```

At `localhost:9222` above, the port number given on this line should match the port number that you chose when setting `--remote-debugging-port` above.

For more info about the `DebuggerAddress` property of the `EdgeOptions` object, see [EdgeOptions object][WebDriverCapabilitiesEdgeOptionsObject].

Congratulations!  You've successfully automated a WebView2 project and driven WebView2 by using Selenium and Microsoft Edge Driver by using the "advanced/attach" approach.


<!-- ====================================================================== -->
## See also

*  [WebDriver on Selenium documentation][SeleniumWebdriver] - How the APIs Selenium drives WebView2 or Microsoft Edge.
*  [Introduction to Microsoft Edge WebView2][WebViewIndex] - How to use the WebView2 control to embed web content in your native app.
*  [Use WebDriver (Chromium) for test automation][WebdriverChromium] - Automating Microsoft Edge.
*  [edge-selenium-tools][GithubSeleniumProject] - a project that the Microsoft Edge team created to allow Selenium 3 users to drive Microsoft Edge (Chromium) and WebView2 using the same API that's provided in Selenium 4.


<!-- ====================================================================== -->
## Getting in touch with the Microsoft Edge WebView team

[!INCLUDE [contact WebView team note](../includes/contact-webview-team-note.md)]


<!-- ====================================================================== -->
<!-- links -->
[WebdriverChromium]: ../../webdriver-chromium/index.md "Use WebDriver (Chromium) for test automation | Microsoft Docs"
[WebdriverChromiumDownloadMicrosoftEdgeDriver]: ../../webdriver-chromium/index.md#download-microsoft-edge-driver "Download Microsoft Edge Driver - Use WebDriver (Chromium) for test automation | Microsoft Docs"
[WebViewIndex]: ../index.md "Introduction to Microsoft Edge WebView2 - Microsoft Docs"
[Webview2ReleaseNotes]: ../release-notes.md "Release notes for WebView2 SDK | Microsoft Docs"
[WebDriverCapabilitiesEdgeOptionsObject]: ../../webdriver-chromium/capabilities-edge-options.md#edgeoptions-object "EdgeOptions object | Microsoft docs"
<!-- external links -->
[MicrosoftUIAutomation]: /windows/win32/winauto/entry-uiauto-win32 "Microsoft UI Automation | Microsoft Docs"
[Webview2ReferenceWin32Globals]: /microsoft-edge/webview2/reference/win32/0-9-538/webview2-idl "Globals, in WebView2 Win32 C++ Reference | Microsoft Docs"

[MicrosoftDeveloperMicrosoftEdgeWebDriverDownloads]: https://developer.microsoft.com/microsoft-edge/tools/webdriver#downloads "Download WebDriver | Microsoft Edge Developer"

[GithubMicrosoftedgewebview2samplesSampleappsWebview2apisample]: https://github.com/MicrosoftEdge/WebView2Samples/tree/master/SampleApps/WebView2APISample "WebView2 API Sample - MicrosoftEdge/WebView2Samples | GitHub"
[GithubMicrosoftedgeWebview2samplesSampleappsWebview2apisamplePrerequisites]: https://github.com/MicrosoftEdge/WebView2Samples/tree/master/SampleApps/WebView2APISample#prerequisites "Prerequisites - WebView2 API Sample | GitHub"

[NugetSeleniumWebdriver700beta4]: https://www.nuget.org/packages/Selenium.WebDriver/4.0.0-beta4 "Selenium.WebDriver 4.0.0-beta4 | NuGet Gallery"

[SeleniumWebdriver]: https://www.selenium.dev/documentation/en/webdriver "WebDriver | Selenium"

[W3cWebdriver2]: https://www.w3.org/TR/webdriver2 "WebDriver | W3C"

[GithubSeleniumProject]: https://github.com/microsoft/edge-selenium-tools "Selenium Tools for Microsoft Edge"
