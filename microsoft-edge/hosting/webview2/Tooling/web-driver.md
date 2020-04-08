---
description: Automate and test the WebView2 Control using Microsoft Edge Driver
title: Automating and Testing WebView2 with Microsoft Edge Driver
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/07/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, edge, ICoreWebView2, ICoreWebView2Host, Selenium, Microsoft Edge Driver
---

# Automating and Testing WebView2 with Microsoft Edge Driver  

Because WebView2 utilizes the Chromium web platform, WebView2 developers may take advantage of standard web tooling for debugging and automation.  One such tool is Selenium, which implements the W3C [WebDriver][W3cWebDriver] API, which is used to create automated tests that simulate user interactions.  

Here is how to get started.  

## Step 1: Download WebView2API Sample  

If you do not have an existing WebView2 project, download our [WebView2API Sample application][GithubMicrosoftEdgeWebView2SamplesWebView2APISampleReadme], a comprehensive sample of the latest WebView2 SDK.  Please double check that you have satisfied these [prerequisites][GithubMicrosoftEdgeWebView2SamplesWebView2APISampleReadmePrerequisites].  

Once you have cloned the repo, build the project in Visual Studio.  It should look like the following.  

![Sample App][ImageSampleApp]  

## Step 2: Install Microsoft Edge Driver  

Follow the instructions to install [Microsoft Edge Driver][WebdriverChromiumDownloadMicrosoftEdgeDriver] the browser-specific driver required by Selenium to automate and test WebView2.  

It is important to make sure that the version of Microsoft Edge Driver matches the version of Microsoft Edge that the application uses.  For the WebView2API Sample to work, make sure that your version of Microsoft Edge is greater than or equal to the supported version of our latest SDK release found in the [Release Notes][HostingWebview2ReleaseNotes].  To find out what version of Microsoft Edge you currently have, open `edge://settings/help` in Microsoft Edge \(Chromium\) browser.  

## Step 3: Add Selenium to the WebView2API Sample  

At this point you should have Microsoft Edge installed, built a WebView2 project, and installed Microsoft Edge Driver.  Now, get started using Selenium.  

> [!NOTE]
> Selenium supports C\#, Java, Python, Javascript, and Ruby.  However, this guide uses C\#.  

1.  Start by creating a new **C\# .NET Framework** project in Visual Studio.  Click **Next** on the bottom right-hand corner to continue.  
    
    ![New Project][ImageNewProject]  
    
1.  Give your project a name, save it to your preferred location, and click **Create**.  
    
    ![App Create][ImageAppCreate]  
    
1.  A new project is created.  In this guide, all code is written in the `Program.cs` file.  
    
    ![Start App][ImageStartApp]  
    
1.  Now add Selenium to the project.  You may install Selenium via the `Selenium.WebDriver NuGet package`.  
    
    To download the `Selenium.WebDriver NuGet package`, in Visual Studio, hover over **Project**, and select **Manage NuGet Package**.  The following screen should appear.  
    
    ![Download Nuget][ImageDownloadNuget]  
    
1.  Enter `Selenium.WebDriver` in the search bar, click **Selenium.WebDriver** from the results, and make sure to checkmark the box next to **include pre-release**.  On the right-hand side window, ensure the **Version** is set to `install 4.0.0-alpha04` or later and click **Install**.  Nuget downloads Selenium to your machine.  
    
    [Learn more about the Selenium.WebDriver NuGet package.][NugetPackagesSeleniumWebDriver400Alpha04]  
    
    ![Nuget][ImageNuget]  
    
1.  Use `OpenQA.Selenium.Edge` by adding `using OpenQA.Selenium.Edge;` at the beginning of `Program.cs` file.   
    
    ```csharp
    using OpenQA.Selenium.Edge;
    
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    ```  
    
## Step 4: Drive WebView2 with Selenium and Microsoft EdgeDriver  

1.  First, create the `EdgeOptions` object, by copying the code below.  
    
    ```csharp
    static void Main(string[] args)
    {
        // EdgeOptions() requires using OpenQA.Selenium.Edge
        // Construct EdgeOptions with is_legacy = false and the string "webview2"
        EdgeOptions edgeOptions = new EdgeOptions(false, "webview2");
    ```  
    
    The `EdgeOptions` object takes in two parameters.  
    
    | Parameter | Details |  
    |:--- |:--- |  
    | `is_legacy`| Set to `false`, which tells Selenium that you are driving the new Microsoft Edge \(Chromium\) browser.  |  
    | `"webview2"` | The string tells Selenium that you are driving `WebView2`.  |  
    
1.  Next, set `edgeOptions.BinaryLocation` to the file path of the runtime in your WebView2 project, create a string named `msedgedriverDir` that provides the file path to where you installed [Microsoft Edge Driver][ToolsWebdriverDownloads], and create a string named `msedgedriverExe` to store the name of the Microsoft Edge Driver runtime.  By default, the runtime is named `"msedgedriver.exe"`.  Use these two strings to construct the `EdgeDriverService` object as shown below.  Finally, create the `EdgeDriver` object using `EdgeDriverService` and `EdgeOptions`.
    
    You may copy and paste the following code underneath `edgeOptions`.  Be sure to specify the correct file paths to runtime of your project and the runtime of the Microsoft Edge Driver on your machine.  
    
    ```csharp
        //Set the BinaryLocation to the filepath of the runtime of the WebView2API Sample
        edgeOptions.BinaryLocation = @"C:\path\to\your\webview2\project.exe";
        
        //Set msedgedriverDir to the filepath of the directory housing msedgedriver.exe
        string msedgedriverDir = @"C:\path\to\your\msededriver.exe\directory";
        
        //Set msedgedriverExe to the name of the Edge Driver.  By default it is:
        string msedgedriverExe = @"msedgedriver.exe";
        
        // Construct EdgeDriverService with is_legacy = false  
        EdgeDriverService service = EdgeDriverService.CreateDefaultService(msedgedriverDir, msedgedriverExe, false);
        
        EdgeDriver e = new EdgeDriver(service, edgeOptions);
    ```  
    
1.  Now, EdgeDriver is configured to drive the WebView2 in your project.  For example, if you are using the WebView2API sample, you may navigate to `https://microsoft.com` by calling `e.Url = @"https://www.microsoft.com";`.  You are able to watch Selenium drive WebView2 by setting a breakpoint on this line and running the project.  
    
    ```csharp
        //The following Navigates the WebView2API Sample from bing.com to microsoft.com
        e.Url = @"https://www.microsoft.com";
        
        //This exits the edge driver
        e.Quit();
    }
    ```  
    
    ![Microsoft][ImageMicrosoft]
    
Congratulations!  You have successfully automated a WebView2 project and driven WebView2 using Selenium and Microsoft Edge Driver.  

## Next Steps  

To learn more:  
*   Check out [documentation for Selenium][SeleniumWebdriver] for a comprehensive look at the APIs Selenium has available for driving WebView2 or Microsoft Edge \(Chromium\).  
*   Learn more about [WebView2][HostingWebview2] control and how to use it when embedding web content in your native app.  
*   Check out [documentation for Microsoft Edge Driver][WebDriverChromium] to learn more about automating Microsoft Edge \(Chromium\).  

## Feedback  

Help build a richer WebView2 experience by sharing your feedback!  Visit the [feedback repo][GithubMicrosoftEdgeWebViewFeedback] to submit feature requests or bug reports or to search for known issues.  

<!-- image links -->  

[ImageSampleApp]: ../media/webdriver/sample-app.png "Sample App"  
[ImageNewProject]: ../media/webdriver/new-project.png "New Project"  
[ImageAppCreate]: ../media/webdriver/app-create.png "App Create"  
[ImageStartApp]: ../media/webdriver/start-app.png "Start App"  
[ImageDownloadNuget]: ../media/webdriver/download-nuget.png "Download Nuget"  
[ImageNuget]: ../media/webdriver/nuget.png "Nuget"  
[ImageMicrosoft]: ../media/webdriver/microsoft.png "Microsoft"  

<!-- links -->  

[HostingWebview2]: /microsoft-edge/hosting/webview2 "Microsoft Edge WebView2 (developer preview)"  
[HostingWebview2ReleaseNotes]: /microsoft-edge/hosting/webview2/release-notes.md "WebView2 SDK Release Notes"  

[ToolsWebdriverDownloads]: /microsoft-edge/tools/webdriver/#downloads "Downloads - WebDriver"  

[WebDriverChromium]: /microsoft-edge/webdriver-chromium "WebDriver (Chromium)"  
[WebdriverChromiumDownloadMicrosoftEdgeDriver]: /microsoft-edge/webdriver-chromium#download-microsoft-edge-driver "Download Microsoft Edge Driver - WebDriver (Chromium)"  

[GithubMicrosoftEdgeWebViewFeedback]: https://github.com/MicrosoftEdge/WebViewFeedback "MicrosoftEdge/WebViewFeedback | GitHub"  

[GithubMicrosoftEdgeWebView2SamplesWebView2APISampleReadme]: https://github.com/MicrosoftEdge/WebView2Samples/tree/master/WebView2APISample/README.md "WebView2 API Sample - MicrosoftEdge/WebView2Samples | GitHub"  
[GithubMicrosoftEdgeWebView2SamplesWebView2APISampleReadmePrerequisites]: https://github.com/MicrosoftEdge/WebView2Samples/blob/master/WebView2APISample/README.md#prerequisites "Prerequisites - WebView2 API Sample - MicrosoftEdge/WebView2Samples | GitHub"  

[NugetPackagesSeleniumWebDriver400Alpha04]: https://www.nuget.org/packages/Selenium.WebDriver/4.0.0-alpha04 "Selenium.WebDriver 4.0.0-alpha04 | Nuget"  

[SeleniumWebdriver]: https://www.selenium.dev/documentation/en/webdriver "WebDriver - Selenium"  

[W3cWebDriver]: https://w3.org/TR/webdriver2 "WebDriver | W3C"  

