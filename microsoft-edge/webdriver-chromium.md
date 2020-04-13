---
description: Learn how to test your website or app in Microsoft Edge or automate the browser with WebDriver.
title: WebDriver (Chromium)
author: zoherghadyali
ms.author: zoghadya
ms.date: 03/05/2020
ms.topic: article
ms.prod: microsoft-edge
ms.technology: devtools
keywords: microsoft edge, web development, html, css, javascript, developer, webdriver, selenium, testing, tools, automation, test
---

# WebDriver (Chromium)
The W3C [WebDriver](https://www.w3.org/TR/webdriver2/) API is a platform and language-neutral interface and wire protocol allowing programs or scripts to control the behavior of a web browser, like Microsoft Edge (Chromium).

WebDriver enables developers to create automated tests that simulate user interaction. This is different from JavaScript unit tests because WebDriver has access to functionality and information that JavaScript running in the browser doesn't, and it can more accurately simulate user events or OS-level events. WebDriver can also manage testing across multiple windows, tabs and webpages in a single test session.

Here's how to get started with WebDriver for Microsoft Edge (Chromium). 

## Install Microsoft Edge (Chromium)
If you haven't already, install Microsoft Edge (Chromium) from [this page](https://www.microsoft.com/edge/). If you are using a pre-installed version of Microsoft Edge on your machine, verify that you have Microsoft Edge (Chromium) and not Microsoft Edge (EdgeHTML). A quick way to check is to load `edge://settings/help` in the browser and confirm that the version number is 75 or higher.

## Download Microsoft Edge Driver
WebDriver needs a browser-specific driver to automate each browser. For Microsoft Edge (Chromium), WebDriver needs the appropriate [Microsoft Edge Driver](https://developer.microsoft.com/microsoft-edge/tools/webdriver/) for the build of Microsoft Edge you want to test or automate.

To find your correct build number: Launch Microsoft Edge and navigate to `edge://settings/help` or click `...` > **Settings** >  **About Microsoft Edge**, to view the Chromium version. Having the correct version of WebDriver for your build ensures it runs correctly.

> ##### Figure 1  
> The build number for Microsoft Edge Canary on January 14, 2020
> ![The build number for Microsoft Edge Canary on January 14, 2020](./media/webdriver-chromium/edge-version.png)  

Now, download the matching version of Microsoft Edge Driver from [this page](https://developer.microsoft.com/microsoft-edge/tools/webdriver/#downloads).

> ##### Figure 2
> The Downloads section of the [Microsoft Edge Driver page](https://developer.microsoft.com/microsoft-edge/tools/webdriver/#downloads)
> ![The Downloads section of the Microsoft Edge Driver page](./media/webdriver-chromium/edge-driver-install.png)  

> [!NOTE]
> Microsoft Edge (EdgeHTML) does not work with [Microsoft Edge Driver](https://developer.microsoft.com/microsoft-edge/tools/webdriver/#downloads). To automate Microsoft Edge (EdgeHTML), you will need to download [Microsoft WebDriver for Microsoft Edge (EdgeHTML)](./webdriver.md).

## Download a WebDriver language binding
The last component you need to download is a language-specific client driver. The language binding will translate the code you write in Python, Java, C#, Ruby, and JavaScript into commands that the Microsoft Edge Driver you downloaded in the [previous section](#download-microsoft-edge-driver) can run in Microsoft Edge (Chromium).

[Download the WebDriver language binding of your choice](https://selenium.dev/downloads/). We highly recommend Selenium 4.00-alpha05 or later since this version has built-in support for Microsoft Edge (Chromium). However, you are able to drive Microsoft Edge (Chromium) in all earlier versions of Selenium, including the current stable Selenium 3 release.

> [!IMPORTANT]
> If you were previously automating or testing Microsoft Edge (Chromium) by using `ChromeDriver` and `ChromeOptions`, your WebDriver code will not run successfully against Microsoft Edge 80 or later. This is a **breaking change** and Microsoft Edge (Chromium) no longer accepts these commands. You must change your tests to use `EdgeOptions` and [Microsoft Edge Driver](https://developer.microsoft.com/microsoft-edge/tools/webdriver).

### Selenium 4.00-alpha05 and later
You can install the .NET language binding of Selenium 4.00-alpha05 [here](https://www.nuget.org/packages/Selenium.WebDriver/4.0.0-alpha05).

Using this binding, the C# snippet below constructs the `EdgeOptions` object and sets the `UseChromium` property to `true`. The `EdgeOptions.UseChromium` property is used to choose which version of Microsoft Edge to launch and defaults to `false` so you should set it to `true` if you want to drive Microsoft Edge (Chromium).

Additionally, this binding will launch the correct `EdgeDriverService` according to the provided `EdgeOptions` object so you do not need to manually create the `EdgeDriverService` as the snippet for [Selenium 4.00-alpha04](#selenium-400-alpha04) does.

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
By default, Selenium 3 drives the old Microsoft Edge (EdgeHTML). The [Selenium Tools for Microsoft Edge](https://github.com/microsoft/edge-selenium-tools) extends [Selenium 3](https://www.selenium.dev/) with a unified driver to help you write automated tests for both the Microsoft Edge (EdgeHTML) and new Microsoft Edge (Chromium) browsers.

The `EdgeDriver` and `EdgeDriverService` classes included in this package are 100% backward-compatible with Selenium's built-in `EdgeDriver`, and will run Microsoft Edge (EdgeHTML) by default so you are able to use the provided classes as a seamless drop-in replacement. In addition to being compatible with your existing Selenium tests, [Selenium Tools for Microsoft Edge](https://github.com/microsoft/edge-selenium-tools) gives you the ability to drive the new Microsoft Edge (Chromium) browser and unlock all of the latest functionality!

The classes in this package are based on the existing `Edge.*` and `Chrome.*` driver classes included in the [Selenium](https://github.com/SeleniumHQ/selenium) project.

#### Before You Begin

The [Selenium Tools for Microsoft Edge](https://github.com/microsoft/edge-selenium-tools) is a solution for developers who prefer to remain on [Selenium 3](https://www.selenium.dev/) which is the current stable release and developers who have existing browser tests and want to add coverage for the new Microsoft Edge (Chromium) browser without changing their Selenium version.

The very same `Edge` driver classes provided here will be included in [Selenium 4](https://www.selenium.dev/downloads/) once it is officially released, and are already available today in the latest [Selenium 4 Alpha release](https://www.nuget.org/packages/Selenium.WebDriver/4.0.0-alpha05). If you are able to upgrade to the latest [Selenium 4 Alpha](https://www.nuget.org/packages/Selenium.WebDriver/4.0.0-alpha05), there is no need to use this package as Selenium should already have everything you need built in!

#### Getting Started

##### Requirements

* [Selenium.WebDriver 3.141.0](https://www.nuget.org/packages/Selenium.WebDriver/3.141.0)
* [Microsoft Edge Driver](#download-microsoft-edge-driver)

##### Installation

Add a reference to the [Microsoft.Edge.SeleniumTools](https://www.nuget.org/packages/Microsoft.Edge.SeleniumTools) package to your .NET project.

#### Basic Usage

To use with Microsoft Edge (EdgeHTML), simple create a default instance of `EdgeDriver`. All of the same methods and properties that are currently available in Selenium 3 will continue to work:

```csharp
var driver = new EdgeDriver();
```

To use with Microsoft Edge (Chromium) instead, create a new `EdgeDriver` and pass it the `EdgeOptions` object with the `UseChromium` property set to `true`:

```csharp
var options = new EdgeOptions();
options.UseChromium = true;

var driver = new EdgeDriver(options);
```

You can also use `EdgeOptions` to choose a specific binary. This is useful for testing [Microsoft Edge preview channels](https://www.microsoftedgeinsider.com/en-us/download/) like Microsoft Edge Beta:

```csharp
var options = new EdgeOptions();
options.UseChromium = true;
options.BinaryLocation = @"C:\Program Files (x86)\Microsoft\Edge Beta\Application\msedge.exe";

var driver = new EdgeDriver(options);
```

When an `EdgeDriver` instance is created using `EdgeOptions`, it will automatically create and launch the appropriate `EdgeDriverService` for either Microsoft Edge (EdgeHTML) or Microsoft Edge (Chromium).

If you would like to create an `EdgeDriverService` yourself, you can create one configured for Microsoft Edge (Chromium) using the `CreateChromiumService()` method. This is useful for additional customizations like enabling verbose log output:

```csharp
using (var service = EdgeDriverService.CreateChromiumService())
{
    service.UseVerboseLogging = true;

    var driver = new EdgeDriver(service);
}
```

> [!NOTE]
> You do not need to provide the `EdgeOptions` object when passing the `EdgeDriver` instance the `EdgeDriverService`. `EdgeDriver` will use the default options for either Microsoft Edge (EdgeHTML) or Microsoft Edge (Chromium) depending on what kind of service you provide. 
> However, if you want to provide both an `EdgeDriverService` and `EdgeOptions`, you must ensure that they are both configured for the same version of Microsoft Edge. For example, it is not possible to use a default Microsoft Edge (EdgeHTML) `EdgeDriverService` and Chromium properties in `EdgeOptions`. This will throw an error.

#### Using Chromium-Specific Options

Using `EdgeOptions` with the `UseChromium` property set to `true` gives you access to all of the same methods and properties that are available on Selenium's [ChromeOptions](https://www.selenium.dev/selenium/docs/api/dotnet/?topic=html/T_OpenQA_Selenium_Chrome_ChromeOptions.htm) class. For example, just like with other Chromium browsers, you can use the `EdgeOptions.AddArguments()` method to run Microsoft Edge (Chromium) in [headless mode](https://en.wikipedia.org/wiki/Headless_browser):

```csharp
var options = new EdgeOptions();
options.UseChromium = true;
options.AddArgument("headless");
options.AddArgument("disable-gpu");
```

> [!NOTE]
> These [Chromium-specific properties and methods](https://www.selenium.dev/selenium/docs/api/dotnet/?topic=html/T_OpenQA_Selenium_Chrome_ChromeOptions.htm) are always available but will have no effect if the `UseChromium` property is not set to `true` . Similarly, existing properties and methods meant for Microsoft Edge (EdgeHTML) will have no effect if `UseChromium` is set to `true`.

## Other ways to set up WebDriver
### Chocolatey
If you are using [Chocolatey](https://chocolatey.org/) as your package manager, you can also get Microsoft Edge Driver by running this command:

```console
choco install selenium-chromium-edge-driver
```

Read more about this package on Chocolatey [here](https://chocolatey.org/packages/selenium-chromium-edge-driver).

### Docker
If you are using [Docker](https://hub.docker.com/), you can get a pre-configured image with Microsoft Edge (Chromium) and [Microsoft Edge Driver](https://developer.microsoft.com/microsoft-edge/tools/webdriver/) already installed by running this command:

```console
docker run -d -p 9515:9515 mcr.microsoft.com/msedge/msedgedriver
```

Check out this container on Docker Hub [here](https://hub.docker.com/_/microsoft-msedge-msedgedriver?tab=description).

## Feedback
We're eager to hear your feedback about using WebDriver, Selenium, and Microsoft Edge! Use the **Feedback** icon in the Microsoft Edge DevTools or tweet [@EdgeDevTools](https://twitter.com/intent/tweet?text=@EdgeDevTools) to let us know what you think.

> ##### Figure 2
> The **Feedback** icon in the Microsoft Edge DevTools
> ![The example.png file produced by example.js](./devtools-guide-chromium/media/devtools-feedback.png)  
