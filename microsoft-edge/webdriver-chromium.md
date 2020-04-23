---
description: Learn how to test your website or app in Microsoft Edge or automate the browser with WebDriver.
title: WebDriver (Chromium)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/13/2020
ms.topic: article
ms.prod: microsoft-edge
ms.technology: devtools
keywords: microsoft edge, web development, html, css, javascript, developer, webdriver, selenium, testing, tools, automation, test
---

# WebDriver (Chromium)  

The W3C [WebDriver][W3CWebdriver] API is a platform and language-neutral interface and wire protocol allowing programs or scripts to control the behavior of a web browser, like Microsoft Edge \(Chromium\).  

WebDriver enables developers to create automated tests that simulate user interaction.  WebDriver tests and simulations differ from JavaScript unit tests because WebDriver has access to functionality and information that JavaScript running in the browser does not, and WebDrive ia able to more accurately simulate user events or OS-level events.  WebDriver is able to manage testing across multiple windows, tabs and webpages in a single test session.  

Here is how to get started with WebDriver for Microsoft Edge \(Chromium\).  

## Install Microsoft Edge (Chromium)  

If you have not already, [install Microsoft Edge (Chromium)][MicrosoftEdge].  If you are using a pre-installed version of Microsoft Edge on your machine, verify that you have Microsoft Edge \(Chromium\) and not Microsoft Edge \(EdgeHTML\).  A quick way to check is to load `edge://settings/help` in the browser and confirm that the version number is 75 or newer.  

## Download Microsoft Edge Driver  

WebDriver requires a browser-specific driver to automate each browser.  For Microsoft Edge \(Chromium\), WebDriver requires the appropriate [Microsoft Edge Driver][MicrosoftDeveloperEdgeToolsWebdriver] for the build of Microsoft Edge you want to test or automate.  

To find your correct build number: Launch Microsoft Edge and navigate to `edge://settings/help` or click `...` > **Settings** >  **About Microsoft Edge**, to view the Chromium version.  Having the correct version of WebDriver for your build ensures it runs correctly.  

> ##### Figure 1  
> The build number for Microsoft Edge Canary on January 14, 2020
> ![The build number for Microsoft Edge Canary on January 14, 2020][ImageWebdriverChromiumEdgeVersion]  

Now, [download the matching version of Microsoft Edge Driver][MicrosoftDeveloperEdgeToolsWebdriverDownloads].  

> ##### Figure 2
> The Downloads section of the [Microsoft Edge Driver page][MicrosoftDeveloperEdgeToolsWebdriverDownloads]
> ![The Downloads section of the Microsoft Edge Driver page][ImageWebdriverChromiumEdgeDriverInstall]  

> [!NOTE]
> Microsoft Edge \(EdgeHTML\) does not work with [Microsoft Edge Driver][MicrosoftDeveloperEdgeToolsWebdriverDownloads].  To automate Microsoft Edge \(EdgeHTML\), you must download [Microsoft WebDriver for Microsoft Edge \(EdgeHTML\)][Webdriver].  

## Download a WebDriver language binding  

The last component you must download is a language-specific client driver.  The language binding translates the code you write in Python, Java, C#, Ruby, and JavaScript into commands that the Microsoft Edge Driver you downloaded in the [previous section](#download-microsoft-edge-driver) is able to run in Microsoft Edge \(Chromium\).  

[Download the WebDriver language binding of your choice][SeleniumDownloads].  The Microsoft Edge team highly recommends Selenium 4.00-alpha05 or newer, since it has built-in support for Microsoft Edge \(Chromium\).  However, you are able to drive Microsoft Edge \(Chromium\) in all older versions of Selenium, including the current stable Selenium 3 release.  

> [!IMPORTANT]
> If you were previously automating or testing Microsoft Edge \(Chromium\) by using `ChromeDriver` and `ChromeOptions`, your WebDriver code does not run successfully against Microsoft Edge 80 or newer.  This is a breaking change and Microsoft Edge \(Chromium\) no longer accepts these commands.  You must change your tests to use `EdgeOptions` and [Microsoft Edge Driver][MicrosoftDeveloperEdgeToolsWebdriver].  

### Selenium 4.00-alpha05 and newer  

[Install the .NET language binding of Selenium 4.00-alpha05][NugetPackagesSeleniumWebdriver400alpha05].

Using the binding, the C# snippet below constructs the `EdgeOptions` object and sets the `UseChromium` property to `true`.  The `EdgeOptions.UseChromium` property is used to choose which version of Microsoft Edge to launch and defaults to `false` so you should set it to `true` if you want to drive Microsoft Edge \(Chromium\).  

```csharp
static void Main(string[] args)
{
    var edgeOptions = new EdgeOptions();
    edgeOptions.UseChromium = true;

    // Use the EdgeDriver class provided with Selenium.
    var driver = new EdgeDriver(edgeOptions);

   // *** Add your tests here ***
}
```  

### Selenium 3  

By default, Selenium 3 drives the old Microsoft Edge \(EdgeHTML\).  The [Selenium Tools for Microsoft Edge][GithubMicrosoftEdgeSeleniumTools] extends [Selenium 3][SeleniumHQ] with a unified driver to help you write automated tests for both the Microsoft Edge \(EdgeHTML\) and new Microsoft Edge \(Chromium\) browsers.  

The `EdgeDriver` and `EdgeDriverService` classes included in the package are 100% backward-compatible with the built-in `EdgeDriver` in Selenium, and run Microsoft Edge \(EdgeHTML\) by default so you are able to use the provided classes as a seamless drop-in replacement.  In addition to compatibility with your existing Selenium tests, [Selenium Tools for Microsoft Edge][GithubMicrosoftEdgeSeleniumTools] has the ability to drive the new Microsoft Edge \(Chromium\) browser and unlock all of the latest functionality!  

The classes in the package are based on the existing `Edge.*` and `Chrome.*` driver classes included in the [Selenium][GithubSeleniumHq] project.  

#### Before You Begin  

The [Selenium Tools for Microsoft Edge][GithubMicrosoftEdgeSeleniumTools] is a solution for developers who prefer to remain on [Selenium 3][SeleniumHQ] which is the current stable release and developers who have existing browser tests and want to add coverage for the new Microsoft Edge \(Chromium\) browser without changing the Selenium version.  

The very same `Edge` driver classes that are provided are included in [Selenium 4][SeleniumDownloads] once it is officially released, and are already available today in the latest [Selenium 4 Alpha release][NugetPackagesSeleniumWebdriver400alpha05].  If you are able to upgrade to the latest [Selenium 4 Alpha][NugetPackagesSeleniumWebdriver400alpha05], there is no need to use the package since Selenium should already have everything you need built in!  

#### Getting Started  

##### Requirements  

*   [Selenium.WebDriver 3.141.0][NugetPackagesSeleniumWebdriver31410]  
*   [Microsoft Edge Driver](#download-microsoft-edge-driver)  

##### Installation  

Add a reference to the [Microsoft.Edge.SeleniumTools][NugetPackagesMicrosoftEdgeSeleniumtools] package to your .NET project.  

#### Basic Usage  

To use with Microsoft Edge \(EdgeHTML\), simple create a default instance of `EdgeDriver`.  All of the same methods and properties that are currently available in Selenium 3 continues to work.  

```csharp
var driver = new EdgeDriver();
```

To use with Microsoft Edge \(Chromium\) instead, create a new `EdgeDriver` and pass it the `EdgeOptions` object with the `UseChromium` property set to `true`.  

```csharp
var options = new EdgeOptions();
options.UseChromium = true;

var driver = new EdgeDriver(options);
```  

Use `EdgeOptions` to choose a specific binary.  It is useful for testing [Microsoft Edge preview channels][MicrosoftedgeinsiderDownload] such as Microsoft Edge Beta.  

```csharp
var options = new EdgeOptions();
options.UseChromium = true;
options.BinaryLocation = @"C:\Program Files (x86)\Microsoft\Edge Beta\Application\msedge.exe";

var driver = new EdgeDriver(options);
```  

When an `EdgeDriver` instance is created using `EdgeOptions`, it automatically creates and launches the appropriate `EdgeDriverService` for either Microsoft Edge \(EdgeHTML\) or Microsoft Edge \(Chromium\).  

If you want to create an `EdgeDriverService`, create one configured for Microsoft Edge \(Chromium\) using the `CreateChromiumService()` method.  You may find it useful for additional customizations like enabling verbose log output in the following code.  

```csharp
using (var service = EdgeDriverService.CreateChromiumService())
{
    service.UseVerboseLogging = true;

    var driver = new EdgeDriver(service);
}
```  

> [!NOTE]
> You do not need to provide the `EdgeOptions` object when passing the `EdgeDriver` instance the `EdgeDriverService`.  `EdgeDriver` uses the default options for either Microsoft Edge \(EdgeHTML\) or Microsoft Edge \(Chromium\) depending on what kind of service you provide.  
> 
> However, if you want to provide both an `EdgeDriverService` and `EdgeOptions`, you must ensure that both are configured for the same version of Microsoft Edge.  For example, it is not possible to use a default Microsoft Edge \(EdgeHTML\) `EdgeDriverService` and Chromium properties in `EdgeOptions`.  It throws an error.  

#### Using Chromium-Specific Options  

Using `EdgeOptions` with the `UseChromium` property set to `true` gives you access to all of the same methods and properties that are available in the [ChromeOptions][SeleniumWebDriverChromeoptionsClass] class in Selenium.  For example, just like with other Chromium browsers, use the `EdgeOptions.AddArguments()` method to run Microsoft Edge \(Chromium\) in [headless mode][WikiHeadlessBrowser] in the following code.  

```csharp
var options = new EdgeOptions();
options.UseChromium = true;
options.AddArgument("headless");
options.AddArgument("disable-gpu");
```  

> [!NOTE]
> These [Chromium-specific properties and methods][SeleniumWebDriverChromeoptionsClass] are always available but have no effect if the `UseChromium` property is not set to `true`.  Similarly, existing properties and methods meant for Microsoft Edge \(EdgeHTML\) have no effect if `UseChromium` is set to `true`.  

## Other ways to set up WebDriver  

### Chocolatey  

If you are using [Chocolatey][Chocolatey] as your package manager, install the Microsoft Edge Driver by running the following command.  

```console
choco install selenium-chromium-edge-driver
```  

Read more about the package on Chocolatey [here][ChocolateyPackagesSeleniumChromiumEdgeDriver].  

### Docker
If you are using [Docker][DockerHub], download a pre-configured image with Microsoft Edge \(Chromium\) and [Microsoft Edge Driver][MicrosoftDeveloperEdgeToolsWebdriver] already installed by running the following command.  

```console
docker run -d -p 9515:9515 mcr.microsoft.com/msedge/msedgedriver
```  

Check out the [container on Docker Hub][DockerHubMsedgedriver].  

## Feedback  

The Microsoft Edge team is eager to hear your feedback about using WebDriver, Selenium, and Microsoft Edge!  Use the **Feedback** icon in the Microsoft Edge DevTools or tweet [@EdgeDevTools][TwitterTweetEdgeDevTools] to let the team know what you think.  

> ##### Figure 3
> The **Feedback** icon in the Microsoft Edge DevTools
> ![The example.png file produced by example.js][ImageDevtoolsGuideChromiumMediaDevtoolsFeedback])  

<!-- image links -->  

[ImageWebdriverChromiumEdgeVersion]: ./media/webdriver-chromium/edge-version.png "Figure 1: The build number for Microsoft Edge Canary on January 14, 2020"
[ImageWebdriverChromiumEdgeDriverInstall]: ./media/webdriver-chromium/edge-driver-install.png "Figure 2: The Downloads section of the Microsoft Edge Driver page"
[ImageDevtoolsGuideChromiumMediaDevtoolsFeedback]: ./devtools-guide-chromium/media/devtools-feedback.png "Figure 3: The example.png file produced by example.js"  
<!-- links -->  

[Webdriver]: ./webdriver.md "WebDriver (EdgeHTML)"  


[Chocolatey]: https://chocolatey.org "Chocolatey | Chocolatey Software"  
[ChocolateyPackagesSeleniumChromiumEdgeDriver]: https://chocolatey.org/packages/selenium-chromium-edge-driver "Selenium Chromium Edge Driver | Chocolatey"  

[DockerHub]: https://hub.docker.com "Docker Hub"  
[DockerHubMsedgedriver]: https://hub.docker.com/_/microsoft-msedge-msedgedriver?tab=description "msedgedriver | Docker hub"  

[GithubMicrosoftEdgeSeleniumTools]: https://github.com/microsoft/edge-selenium-tools "microsoft/edge-selenium-tools | GitHub"  
[GithubSeleniumHq]: https://github.com/SeleniumHQ/selenium "SeleniumHQ/selenium | GitHub"  

[MicrosoftDeveloperEdgeToolsWebdriver]: https://developer.microsoft.com/microsoft-edge/tools/webdriver "WebDriver | Microsoft Developer"
[MicrosoftDeveloperEdgeToolsWebdriverDownloads]: https://developer.microsoft.com/microsoft-edge/tools/webdriver/#downloads "Downloads - WebDriver | Microsoft Developer"  

[MicrosoftEdge]: https://www.microsoft.com/edge "Download New Microsoft Edge Browser"  

[MicrosoftedgeinsiderDownload]: https://www.microsoftedgeinsider.com/download "Download Microsoft Edge Insider Channels"  

[NugetPackagesMicrosoftEdgeSeleniumtools]: https://www.nuget.org/packages/Microsoft.Edge.SeleniumTools "Microsoft.Edge.SeleniumTools | NuGet Gallery"  
[NugetPackagesSeleniumWebdriver31410]: https://www.nuget.org/packages/Selenium.WebDriver/3.141.0 "Selenium.WebDriver 3.141.0 | NuGet Gallery"  
[NugetPackagesSeleniumWebdriver400alpha05]: https://www.nuget.org/packages/Selenium.WebDriver/4.0.0-alpha05 "Selenium.WebDriver 4.0.0-alpha05 | NuGet Gallery"  

[SeleniumHQ]: https://www.selenium.dev "SeleniumHQ"  
[SeleniumDownloads]: https://selenium.dev/downloads "Downloads | Selenium"  
[SeleniumWebDriverChromeoptionsClass]: https://www.selenium.dev/selenium/docs/api/dotnet/?topic=html/T_OpenQA_Selenium_Chrome_ChromeOptions.htm "ChromeOptions Class - WebDriver | Selenium"  

[TwitterTweetEdgeDevTools]: https://twitter.com/intent/tweet?text=@EdgeDevTools "@EdgeDevTools | Post a tweet"  

[W3CWebdriver]: https://w3.org/TR/webdriver2 "WebDriver"  

[WikiHeadlessBrowser]: https://en.wikipedia.org/wiki/Headless_browser "Headless browser | Wikipedia"
