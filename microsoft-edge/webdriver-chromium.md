---
description: Learn how to test your website or app in Microsoft Edge or automate the browser with WebDriver.
title: WebDriver (Chromium)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/08/2020
ms.topic: article
ms.prod: microsoft-edge
ms.technology: devtools
keywords: microsoft edge, web development, html, css, javascript, developer, webdriver, selenium, testing, tools, automation, test
---

# Use WebDriver (Chromium) for test automation  

WebDriver enables developers to create automated tests that simulate user interaction.  WebDriver tests and simulations differ from JavaScript unit tests because of the following reasons. 
*   Accesses functionality and information not available to JavaScript running in browsers.  
*   Simulates user events or OS-level events more accurately.  
*   Manages testing across multiple windows, tabs, and webpages in a single test session.  
*   Runs multiple sessions of Microsoft Edge on a specific machine.  

The following section describes how to get started with WebDriver for Microsoft Edge \(Chromium\).  

<!--  
# WebDriver (Chromium)  

The W3C [WebDriver][W3CWebdriver] API is a platform and language-neutral interface and wire protocol allowing programs or scripts to control the behavior of a web browser, like Microsoft Edge \(Chromium\).  

WebDriver enables developers to create automated tests that simulate user interaction.  WebDriver tests and simulations differ from JavaScript unit tests because WebDriver has access to functionality and information that JavaScript running in the browser does not, and WebDriver is able to more accurately simulate user events or OS-level events.  WebDriver is able to manage testing across multiple windows, tabs, and webpages in a single test session.  WebDriver is even able to run multiple sessions of Microsoft Edge on a specific machine.  

Here is how to get started with WebDriver for Microsoft Edge \(Chromium\).  
-->  

## Install Microsoft Edge (Chromium)  

Ensure you install [Microsoft Edge (Chromium)][MicrosoftEdge].  To confirm that you have Microsoft Edge (Chromium) installed, go to `edge://settings/help` in the browser, and verify the version number is Version 75 or later.  

<!--  
## Install Microsoft Edge (Chromium)  

If you have not already, [install Microsoft Edge (Chromium)][MicrosoftEdge].  If you are using a pre-installed version of Microsoft Edge on your machine, verify that you have Microsoft Edge \(Chromium\) and not Microsoft Edge \(EdgeHTML\).  A quick way to check is to load `edge://settings/help` in the browser and confirm that the version number is v75 or later.  
-->  

## Download Microsoft Edge Driver  

To begin automating tests, use the following steps to ensure that the WebDriver version you install matches your browser version.  

1.  Navigating to edge://settings/help to get the version of Edge.  
    
    :::image type="complex" source="./media/webdriver-chromium/edge-version.png" alt-text="The build number for Microsoft Edge Canary on January 14, 2020"::: Figure 1.  The build number for Microsoft Edge Canary on January 14, 2020
    :::image-end:::  
    
1.  Navigate to the [Microsoft Edge Driver downloads][MicrosoftDeveloperEdgeToolsWebdriverDownloads] page and download the driver that matches the Edge version number.  
    
    :::image type="complex" source="./media/webdriver-chromium/edge-driver-install.png" alt-text="The Downloads section of the Microsoft Edge Driver page"::: Figure 2.  The Downloads section of the [Microsoft Edge Driver][MicrosoftDeveloperEdgeToolsWebdriver] page
    :::image-end:::  
    
    > [!NOTE] 
    > For more information about test automation using Microsoft Edge (EdgeHTML), see [Microsoft WebDriver for Microsoft Edge (EdgeHTML)][Webdriver].  

<!--  
## Download Microsoft Edge Driver  

WebDriver requires a browser-specific driver to automate each browser.  For Microsoft Edge \(Chromium\), WebDriver requires the appropriate [Microsoft Edge Driver][MicrosoftDeveloperEdgeToolsWebdriver] for the build of Microsoft Edge you want to test or automate.  

To find your correct build number, use the following steps.  

1.  Launch Microsoft Edge  
1.  View the Microsoft Edge \(Chromium\) version.  
    *   Navigate to `edge://settings/help`  
    *   Select `...` > **Settings** >  **About Microsoft Edge**  
1.  Verify the correct version of WebDriver for your build ensures, so it runs correctly.  

:::image type="complex" source="./media/webdriver-chromium/edge-version.png" alt-text="The build number for Microsoft Edge Canary on January 14, 2020":::
   Figure 1.  The build number for Microsoft Edge Canary on January 14, 2020  
:::image-end:::  

Now, [download the matching version of Microsoft Edge Driver][MicrosoftDeveloperEdgeToolsWebdriverDownloads].  

:::image type="complex" source="./media/webdriver-chromium/edge-driver-install.png" alt-text="The Downloads section of the Microsoft Edge Driver page":::
   Figure 2.  The Downloads section of the [Microsoft Edge Driver][MicrosoftDeveloperEdgeToolsWebdriverDownloads] page  
:::image-end:::  

> [!NOTE]
> Microsoft Edge \(EdgeHTML\) does not work with [Microsoft Edge Driver][MicrosoftDeveloperEdgeToolsWebdriverDownloads].  To automate Microsoft Edge \(EdgeHTML\), you must download [Microsoft WebDriver for Microsoft Edge \(EdgeHTML\)][Webdriver].  
-->  

# Choose a WebDriver language binding  

The last component you must download is a language-specific client driver to translate your code \(Python, Java, C\#, Ruby, JavaScript\) into commands the Microsoft Edge Driver runs in Microsoft Edge \(Chromium\).  
[Download the WebDriver language binding of your choice][SeleniumDownloads].  The Microsoft Edge team recommends [Selenium 4.00-alpha05][NugetPackagesSeleniumWebdriver400alpha05] or later, because it supports Microsoft Edge \(Chromium\).  However, you are able to control Microsoft Edge \(Chromium\) in all older versions of Selenium, including the current stable Selenium 3 release.  

> [!IMPORTANT]
> If you were previously automating or testing Microsoft Edge \(Chromium\) using `ChromeDriver` and `ChromeOptions` classes, your WebDriver code does not run on Microsoft Edge Version 80 or later.  To solve this problem, update your tests to use the `EdgeOptions` class and install [Microsoft Edge Driver][MicrosoftDeveloperEdgeToolsWebdriver].  

<!--  
## Choose a WebDriver language binding  

The last component you must download is a language-specific client driver.  The language binding translates the code you write in Python, Java, C\#, Ruby, and JavaScript into commands that the Microsoft Edge Driver you [downloaded in the previous section](#download-microsoft-edge-driver) is able to run in Microsoft Edge \(Chromium\).  

[Download the WebDriver language binding of your choice][SeleniumDownloads].  The Microsoft Edge team highly recommends [Selenium 4.00-alpha05][NugetPackagesSeleniumWebdriver400alpha05] or later, since it has built-in support for Microsoft Edge \(Chromium\).  However, you are able to drive Microsoft Edge \(Chromium\) in all older versions of Selenium, including the current stable Selenium 3 release.  

> [!IMPORTANT]
> If you were previously automating or testing Microsoft Edge \(Chromium\) by using `ChromeDriver` and `ChromeOptions`, your WebDriver code does not run successfully against Microsoft Edge v80 or later.  This is a breaking change and Microsoft Edge \(Chromium\) no longer accepts the commands.  You must change your tests to use the `EdgeOptions` class and [Microsoft Edge Driver][MicrosoftDeveloperEdgeToolsWebdriver].  
-->  

### Use Selenium 3  

If you already use [Selenium 3][SeleniumHQ], you may have existing browser tests and want to add coverage for Microsoft Edge \(Chromium\) without changing your version of Selenium.  To use [Selenium 3][SeleniumHQ] to write automated tests for both Microsoft Edge \(EdgeHTML\) and Microsoft Edge \(Chromium\), install the [Selenium Tools for Microsoft Edge][GithubMicrosoftEdgeSeleniumTools] package to use the updated driver.  The `EdgeDriver` and `EdgeDriverService` classes included in the tools are fully compatible with the built-in equivalents in Selenium 4.  

<!--  
### Using Selenium 3  

[Selenium 3][SeleniumHQ] is the latest stable Selenium release.  By default, Selenium 3 drives the old Microsoft Edge \(EdgeHTML\), and does not have built-in support for Microsoft Edge \(Chromium\).  To use Selenium 3 with Microsoft Edge \(Chromium\), install the [Selenium Tools for Microsoft Edge][GithubMicrosoftEdgeSeleniumTools] package.  The Selenium Tools for Microsoft Edge extend Selenium 3 with an updated driver to help you write automated tests for both the Microsoft Edge \(EdgeHTML\) and new Microsoft Edge \(Chromium\) browsers.  

Selenium Tools for Microsoft Edge is a solution for developers who prefer to remain on Selenium 3 and developers who have existing browser tests and want to add coverage for the new Microsoft Edge \(Chromium\) browser without changing Selenium versions.  The `EdgeDriver` and `EdgeDriverService` classes included in the tools are fully compatible with the built-in equivalents in Selenium, and run Microsoft Edge \(EdgeHTML\) by default so the tools may be used as a seamless drop-in replacement for the existing Edge classes in Selenium.  

[Install Selenium Tools for Microsoft Edge][GithubMicrosoftEdgeSeleniumTools] to begin using Microsoft Edge \(Chromium\) with your Selenium 3 project.  
-->  

## Use Microsoft Edge (Chromium) with WebDriver

You may run the following examples using either Selenium 3 or 4.  To use with Selenium 3, the [Selenium Tools for Microsoft Edge][GithubMicrosoftEdgeSeleniumTools] package must be installed.  

### Basic Usage  

To use with Microsoft Edge \(EdgeHTML\), simply create a default instance of the `EdgeDriver` class.

#### [C#](#tab/c-sharp/)  

<a id="basic-usage-code"></a>  

```csharp
var driver = new EdgeDriver();
```  

#### [Python](#tab/python/)  

<a id="basic-usage-code"></a>  

```python
driver = Edge()
```  

#### [JavaScript](#tab/javascript/)  

<a id="basic-usage-code"></a>  

```javascript
let driver = edge.Driver.createSession();
```  

* * *  

### Driving Microsoft Edge (Chromium)  

To use with Microsoft Edge \(Chromium\), create a new `EdgeDriver` class and pass it the `EdgeOptions` object with the `UseChromium` property set to `true`.  

#### [C#](#tab/c-sharp/)  

<a id="driving-microsoft-edge-chromium-code"></a>  

```csharp
var options = new EdgeOptions();
options.UseChromium = true;

var driver = new EdgeDriver(options);
```  

#### [Python](#tab/python/)  

<a id="driving-microsoft-edge-chromium-code"></a>  

```python
options = EdgeOptions()
options.use_chromium = True

driver = Edge(options)
```  

#### [JavaScript](#tab/javascript/)  

<a id="driving-microsoft-edge-chromium-code"></a>  

```javascript
let options = new edge.Options();
options.setEdgeChromium(true);

let driver = edge.Driver.createSession(options);
```  

* * *  

> [!NOTE]
> If the [DeveloperToolsAvailability][DeployedgePoliciesDevelopertoolsavailability] policy is set to `2`, [Microsoft Edge Driver][MicrosoftDeveloperEdgeToolsWebdriver] is not be able to drive [Microsoft Edge (Chromium)][MicrosoftEdge] because the driver uses [Microsoft Edge DevTools][DevToolsMain].  Ensure you set the [DeveloperToolsAvailability][DeployedgePoliciesDevelopertoolsavailability] policy to `0` or `1` to automate [Microsoft Edge (Chromium)][MicrosoftEdge].

<!--  
>[!NOTE]
> If the [DeveloperToolsAvailability][DeployedgePoliciesDevelopertoolsavailability] Microsoft Edge policy is set to `2`, [Microsoft Edge Driver][MicrosoftDeveloperEdgeToolsWebdriver] is no longer able to drive [Microsoft Edge (Chromium)][MicrosoftEdge].  Microsoft Edge Driver requires the [Microsoft Edge DevTools][DevToolsMain] to be available.  For Microsoft Edge Driver to successfully automate Microsoft Edge \(Chromium\), set the [DeveloperToolsAvailability][DeployedgePoliciesDevelopertoolsavailability] policy to `0` or `1` .  
-->  

### Choosing Specific Browser Binaries (Chromium-Only)  

You may use the `EdgeOptions` class with specific binaries of Microsoft Edge (Chromium).  For example, you may run tests using the [Microsoft Edge preview channels][MicrosoftedgeinsiderDownload] such as Microsoft Edge Beta.

<!--  
Use the `EdgeOptions` class to choose a specific binary.  It is useful for testing [Microsoft Edge preview channels][MicrosoftedgeinsiderDownload] such as Microsoft Edge Beta.  
-->  

#### [C#](#tab/c-sharp/)  

<a id="choosing-specific-browser-binaries-chrome-only-code"></a>  

```csharp
var options = new EdgeOptions();
options.UseChromium = true;
options.BinaryLocation = @"C:\Program Files (x86)\Microsoft\Edge Beta\Application\msedge.exe";

var driver = new EdgeDriver(options);
```  

#### [Python](#tab/python/)  

<a id="choosing-specific-browser-binaries-chrome-only-code"></a>  

```python
options = EdgeOptions()
options.use_chromium = True
options.binary_location = r"C:\Program Files (x86)\Microsoft\Edge Beta\Application\msedge.exe"

driver = Edge(options)
```  

#### [JavaScript](#tab/javascript/)  

<a id="choosing-specific-browser-binaries-chrome-only-code"></a>  

```javascript
let options = new edge.Options();
options.setEdgeChromium(true);
options.setBinaryPath("C:\Program Files (x86)\Microsoft\Edge Beta\Application\msedge.exe");

let driver = edge.Driver.createSession(options);
```  

* * *  

### Customizing the Microsoft Edge Driver Service  

#### [C#](#tab/c-sharp/)  

<a id="customizing-microsoft-edge-driver-services-code"></a>  

When an `EdgeDriver` class instance is created using `EdgeOptions` class, it creates and launches the appropriate `EdgeDriverService` class for either Microsoft Edge \(EdgeHTML\) or Microsoft Edge \(Chromium\).  

If you want to create an `EdgeDriverService`, create one configured for Microsoft Edge \(Chromium\) using the `CreateChromiumService()` method.  You may find it useful for additional customizations like enabling verbose log output in the following code.  

```csharp
using (var service = EdgeDriverService.CreateChromiumService())
{
    service.UseVerboseLogging = true;

    var driver = new EdgeDriver(service);
}
```  

> [!NOTE] 
>You do not need to provide the `EdgeOptions` object when passing `EdgeDriverService` to the `EdgeDriver` instance. The `EdgeDriver` class uses the default options for either Microsoft Edge \(EdgeHTML\) or Microsoft Edge \(Chromium\) depending on the service you provide.  
> However, if you want to provide both `EdgeDriverService` and `EdgeOptions` classes, ensure that both are configured for the same version of Microsoft Edge.  For example, it is not possible to use a default Microsoft Edge (EdgeHTML) `EdgeDriverService` class and Chromium properties in the `EdgeOptions` class.  The `EdgeDriver` class throws an error to prevent using different versions.  

<!--  
> [!NOTE]
> You do not need to provide the `EdgeOptions` object when passing the `EdgeDriver` class instance the `EdgeDriverService`.  The `EdgeDriver` class uses the default options for either Microsoft Edge \(EdgeHTML\) or Microsoft Edge \(Chromium\) depending on what kind of service you provide.  
> 
> However, if you want to provide both an `EdgeDriverService` and `EdgeOptions` classes, you must ensure that both are configured for the same version of Microsoft Edge.  For example, it is not possible to use a default Microsoft Edge \(EdgeHTML\) `EdgeDriverService` class and Chromium properties in the `EdgeOptions` class.  The `EdgeDriver` class throws an error to prevent using different versions.  
-->  

#### [Python](#tab/python/)  

<a id="customizing-microsoft-edge-driver-services-code"></a>  

When using Python, the `Edge` object creates and manages the `EdgeService`.  To configure the `EdgeService`, pass additional arguments to the `Edge` object as indicated in the following code.  

```python
service_args = ['--verbose']
driver = Edge(service_args = service_args)
```  

#### [JavaScript](#tab/javascript/)  

<a id="customizing-microsoft-edge-driver-services-code"></a>  

When using JavaScript, create and configure a `Service` with the `ServiceBuilder` class.  You may optionally pass the `Service` object to the `Driver` object which starts and stops the service for you.  
To configure the `Service`, run additional methods in the `ServiceBuilder` class before using the `build()` method.  Then pass the `service` as a parameter in the `Driver.createSession()` method.  

```javascript
let service = new edge.ServiceBuilder().enableVerboseLogging().build();
let driver = edge.Driver.createSession(options, service);
```  

* * * 

### Use Chromium-Specific Options  

If you set the `UseChromium` property to `true`, you are able to use the `EdgeOptions` class to access the same [Chromium-specific properties and methods][SeleniumWebDriverChromeoptionsClass] as when you automate other Chromium browsers.

<!--  
### Using Chromium-Specific Options  

Using the `EdgeOptions` class with the `UseChromium` property set to `true` gives you access to all of the same methods and properties that are available in the [ChromeOptions][SeleniumWebDriverChromeoptionsClass] class in Selenium.  For example, just like with other Chromium browsers, use the `EdgeOptions.AddArguments()` method to run Microsoft Edge \(Chromium\) in [headless mode][WikiHeadlessBrowser] in the following code sample.  
-->  

#### [C#](#tab/c-sharp/)  

<a id="using-chromium-specific-options-code"></a>  

```csharp
var options = new EdgeOptions();
options.UseChromium = true;
options.AddArgument("headless");
options.AddArgument("disable-gpu");
```  

#### [Python](#tab/python/)  

<a id="using-chromium-specific-options-code"></a>  

```python
options = EdgeOptions()
options.use_chromium = True
options.add_argument("headless")
options.add_argument("disable-gpu")
```  

#### [JavaScript](#tab/javascript/)  

<a id="using-chromium-specific-options-code"></a>  

```javascript
let options = new edge.Options();
options.setEdgeChromium(true);
options.addArguments("headless");
options.addArguments("disable-gpu");
```

* * *  
> [!NOTE]
> If the `UseChromium` property is set to `true`, you are not able to use properties and methods for Microsoft Edge \(EdgeHTML\).  

<!--  
> [!NOTE]
> The [Chromium-specific properties and methods][SeleniumWebDriverChromeoptionsClass] are always available but have no effect if the `UseChromium` property is not set to `true`.  Similarly, existing properties and methods meant for Microsoft Edge \(EdgeHTML\) have no effect if `UseChromium` property is set to `true`.  
-->  

## Additional WebDriver installation options  

<!--  
## Other ways to set up WebDriver  
-->  

### Chocolatey  

If you use [Chocolatey][Chocolatey] as your package manager, install the Microsoft Edge Driver by running the following command.  

```console
choco install selenium-chromium-edge-driver
```  

For more information, see [Selenium Chromium Edge Driver on Chocolatey][ChocolateyPackagesSeleniumChromiumEdgeDriver].  

### Docker  

If you use [Docker][DockerHub], download a pre-configured image with Microsoft Edge \(Chromium\) and [Microsoft Edge Driver][MicrosoftDeveloperEdgeToolsWebdriver] pre-installed by running the following command.  

```console
docker run -d -p 9515:9515 mcr.microsoft.com/msedge/msedgedriver
```  

For more information, see [container on Docker Hub][DockerHubMsedgedriver].  

## Getting in touch with the Microsoft Edge DevTools team  

The Microsoft Edge team is eager to hear your feedback about using WebDriver, Selenium, and Microsoft Edge.  Use the **Feedback** icon in the Microsoft Edge DevTools or tweet [@EdgeDevTools][TwitterTweetEdgeDevTools] to let the team know what you think.  


:::image type="complex" source="./devtools-guide-chromium/media/devtools-feedback.png" alt-text="The Feedback icon in the Microsoft Edge DevTools":::
   The **Feedback** icon in the Microsoft Edge DevTools  
:::image-end:::  

<!-- image links -->  

<!-- links -->  

[DevToolsMain]: ./devtools-guide-chromium.md "Microsoft Edge (Chromium) Developer Tools | Microsoft Docs"
[Webdriver]: ./webdriver.md "WebDriver (EdgeHTML) | Microsoft Docs"  

[DeployedgePoliciesDevelopertoolsavailability]: /deployedge/microsoft-edge-policies#developertoolsavailability "DeveloperToolsAvailability - Microsoft Edge - Policies | Microsoft Docs"  

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
