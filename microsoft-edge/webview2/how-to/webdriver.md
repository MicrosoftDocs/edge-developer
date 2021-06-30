---
description: Automate and test the WebView2 Control using Microsoft Edge Driver
title: Automating and Testing WebView2 with Microsoft Edge Driver
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/06/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, edge, ICoreWebView2, ICoreWebView2Controller, Selenium, Microsoft Edge Driver
---
# Automate and test WebView2 with Microsoft Edge Driver  

Because WebView2 uses the Microsoft Edge \(Chromium\) web platform, WebView2 developers \(you\) may take advantage of standard web tooling for debugging and automation.  Selenium is one such tool.  It implements the W3C [WebDriver][W3cWebdriver2] API.  You may use Selenium to create automated tests to simulate user interactions.  

Get started with the following steps.  

## Step 1:  Download WebView2API Sample  

If you do not have an existing WebView2 project, download the [WebView2API Sample app][GithubMicrosoftedgewebview2samplesSampleappsWebview2apisample], a comprehensive sample of the latest WebView2 SDK.  Ensure you have satisfied the [prerequisites for the WebView2API Sample app][GithubMicrosoftedgeWebview2samplesSampleappsWebview2apisamplePrerequisites].  

Once you have cloned the repo, build the project in Visual Studio.  It should look like the following figure.  

:::image type="complex" source="../media/webdriver/sample-app.png" alt-text="WebView2API Sample app" lightbox="../media/webdriver/sample-app.png":::
   WebView2API Sample app  
:::image-end:::    

## Step 2:  Install Microsoft Edge Driver  

Follow the instructions to install [Microsoft Edge Driver][WebdriverChromiumDownloadMicrosoftEdgeDriver] the browser-specific driver required by Selenium to automate and test WebView2.  

Ensure that the version of Microsoft Edge Driver matches the version of WebView2 Runtime that you app uses.  For the WebView2API Sample to work, make sure that your version of WebView2 Runtime is greater than or equal than the supported version of the latest WebView2 SDK release.  To locate the latest WebView2 SDK release, navigate to [WebView2 release notes][Webview2ReleaseNotes].  To find out what version of WebView2 Runtime you currently have, navigate to `edge://settings/help`.  

## Step 3:  Add Selenium to the WebView2API Sample  

At this point you should have WebView2 Runtime installed, built a WebView2 project, and installed Microsoft Edge Driver.  Now, get started using Selenium.  

> [!NOTE]
> Selenium supports C\#, Java, Python, Javascript, and Ruby.  However, the following guide is written using C\#.  

1.  Start by creating a new **C# .NET Framework** project in **Visual Studio**.  Choose **Next** on the bottom right-hand corner to continue.  
    
    :::image type="complex" source="../media/webdriver/new-project.png" alt-text="Create a new project" lightbox="../media/webdriver/new-project.png":::
       Create a new project  
    :::image-end:::  
    
1.  Give your project a **name**, save it to your preferred **location**, and choose **Create**.  
    
    :::image type="complex" source="../media/webdriver/app-create.png" alt-text="Configure your new project" lightbox="../media/webdriver/app-create.png":::
       Configure your new project  
    :::image-end:::  
    
1.  A new project is created.  In this guide, all code is written to the `Program.cs` file.  
    
    :::image type="complex" source="../media/webdriver/start-app.png" alt-text="New project" lightbox="../media/webdriver/start-app.png":::
       New project  
    :::image-end:::  
    
1.  Now add **Selenium** to the project.  Install Selenium using the **Selenium.WebDriver NuGet package**.  
    
    To download the **Selenium.WebDriver NuGet package**, in **Visual Studio**, hover on **Project**, and choose **Manage NuGet Package**.  The following screen should appear.  
    
    :::image type="complex" source="../media/webdriver/download-nuget.png" alt-text="Download NuGet package" lightbox="../media/webdriver/download-nuget.png":::
       Download NuGet package  
    :::image-end:::  
    
1.  Type `Selenium.WebDriver` in the search bar, choose **Selenium.WebDriver** from the results, and make sure to checkmark the box next to **include pre-release**.  On the right-hand side window, ensure the **Version** is set to **install 4.0.0-alpha04** or later and choose **Install**.  NuGet downloads Selenium to your machine.  
    
    To learn more about the Selenium.WebDriver NuGet package, navigate to [Selenium.WebDriver 4.0.0-alpha04][NugetSeleniumWebdriver400Alpha04].  
    
    :::image type="complex" source="../media/webdriver/nuget.png" alt-text="Manage NuGet package" lightbox="../media/webdriver/nuget.png":::
       Manage NuGet package  
    :::image-end:::  
    
1.  Use `OpenQA.Selenium.Edge` by adding the following statement:  `using OpenQA.Selenium.Edge;` at the beginning of `Program.cs` file.  
    
    ```csharp
    using OpenQA.Selenium.Edge;
    
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    ```  
    
## Step 4: Drive WebView2 with Selenium and Microsoft Edge Driver  

1.  First, create the `EdgeOptions` object, by copying the following code snippet.  
    
    ```csharp
    static void Main(string[] args)
    {
        // EdgeOptions() requires using OpenQA.Selenium.Edge
        // Construct EdgeOptions with is_legacy = false and the string "webview2"
        EdgeOptions edgeOptions = new EdgeOptions(false, "webview2");
    ```  
    
    The `EdgeOptions` object takes in the following two parameters.  
    
    | Parameter | Details |    
    |:--- |:--- |  
    | `is_legacy` | Set to `false`, which tells Selenium that you are driving the new Chromium-based Microsoft Edge browser. |  
    | `"webview2"` | A string that tells Selenium you are driving WebView2. |  
    
1.  Next, set `edgeOptions.BinaryLocation` to the file path of your WebView2 project runtime, create a string named `msedgedriverDir` that provides the file path to where you installed [Microsoft Edge Driver][MicrosoftDeveloperMicrosoftEdgeWebDriverDownloads], and create a string named `msedgedriverExe` to store the name of the Microsoft Edge Driver runtime.  By default, the runtime is named `msedgedriver.exe`. Use these two strings to construct the `EdgeDriverService` object as shown below.  Finally, create the `EdgeDriver` object using `EdgeDriverService` and `EdgeOptions`.  
    
    You may copy and paste the following code underneath `edgeOptions`.  Ensure you specify the correct file paths to your project runtime and the Microsoft Edge Driver runtime on your machine.  
    
    ```csharp
    //Set the BinaryLocation to the filepath of the WebView2API Sample runtime
    edgeOptions.BinaryLocation = @"C:\path\to\your\webview2\project.exe";
    
    //Set msedgedriverDir to the filepath of the directory housing msedgedriver.exe
    string msedgedriverDir = @"C:\path\to\your\msededriver.exe's\directory";
    
    //Set msedgedriverExe to the name of the Edge Driver. By default it is:
    string msedgedriverExe = @"msedgedriver.exe";
    
    // Construct EdgeDriverService with is_legacy = false  
    EdgeDriverService service = EdgeDriverService.CreateDefaultService(msedgedriverDir, msedgedriverExe, false);
    
    EdgeDriver e = new EdgeDriver(service, edgeOptions);
    ```  
    
3.  Now, `EdgeDriver` is configured to drive the WebView2 in your project.  For example, if you are using the **WebView2API Sample**, you may navigate to `https://microsoft.com` by running the `e.Url = @"https://www.microsoft.com";` command.  Verify the Selenium drive WebView2 by setting a breakpoint on the line and running the project.  
    
    ```csharp
        //The following navigates the WebView2API Sample from bing.com to microsoft.com
        e.Url = @"https://www.microsoft.com";
        
        //This exits the edge driver
        e.Quit();
    }
    ```  
    
    :::image type="complex" source="../media/webdriver/microsoft.png" alt-text="Selenium running WebView2" lightbox="../media/webdriver/microsoft.png":::
       Selenium running WebView2  
    :::image-end:::
    
Congratulations.  You have successfully automated a WebView2 project and driven WebView2 using Selenium and Microsoft Edge Driver.  

## See also  

*   For a comprehensive look at how the APIs Selenium drives WebView2 or Microsoft Edge \(Chromium\), navigate to [WebDriver on Selenium documentation][SeleniumWebdriver]   
*   To learn more about WebView2 control and how to use it when embedding web content in your native app, navigate to [Introduction to Microsoft Edge WebView2][WebViewIndex].  
*   To learn more about automating Microsoft Edge \(Chromium\), navigate to [Use WebDriver (Chromium) for test automation][WebdriverChromium]   
    
## Getting in touch with the Microsoft Edge WebView team  

[!INCLUDE [contact WebView team note](../includes/contact-webview-team-note.md)]  

<!-- links -->  

[WebdriverChromium]: ../../webdriver-chromium/index.md "Use WebDriver (Chromium) for test automation | Microsoft Docs"  
[WebdriverChromiumDownloadMicrosoftEdgeDriver]: ../../webdriver-chromium/index.md#download-microsoft-edge-driver "Download Microsoft Edge Driver - Use WebDriver (Chromium) for test automation | Microsoft Docs"  
[WebViewIndex]: ../index.md "Introduction to Microsoft Edge WebView2 - Microsoft Docs"  
[Webview2ReleaseNotes]: ../release-notes.md "Release notes for WebView2 SDK | Microsoft Docs"  

[MicrosoftDeveloperMicrosoftEdgeWebDriverDownloads]: https://developer.microsoft.com/microsoft-edge/tools/webdriver#downloads "Download WebDriver | Microsoft Edge Developer"  

[GithubMicrosoftedgewebview2samplesSampleappsWebview2apisample]: https://github.com/MicrosoftEdge/WebView2Samples/tree/master/SampleApps/WebView2APISample "WebView2 API Sample - MicrosoftEdge/WebView2Samples | GitHub"  
[GithubMicrosoftedgeWebview2samplesSampleappsWebview2apisamplePrerequisites]: https://github.com/MicrosoftEdge/WebView2Samples/tree/master/SampleApps/WebView2APISample#prerequisites "Prerequisites - WebView2 API Sample | GitHub"  

[NugetSeleniumWebdriver400Alpha04]: https://www.nuget.org/packages/Selenium.WebDriver/4.0.0-alpha04 "Selenium.WebDriver 4.0.0-alpha04 | NuGet Gallery"  

[SeleniumWebdriver]: https://www.selenium.dev/documentation/en/webdriver "WebDriver | Selenium"  

[W3cWebdriver2]: https://www.w3.org/TR/webdriver2 "WebDriver | W3C"  
