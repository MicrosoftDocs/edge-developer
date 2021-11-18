---
description: Learn how to test your legacy website or app in IE mode in Microsoft Edge
title: Use IEDriver to automate IE mode in Microsoft Edge
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 11/17/2021
ms.topic: article
ms.prod: microsoft-edge
ms.technology: devtools
keywords: microsoft edge, web development, html, css, javascript, developer, webdriver, selenium, testing, tools, automation, test, ie, internet explorer, ie mode
---
# Use Internet Explorer Driver to automate IE mode in Microsoft Edge

Internet Explorer (IE) mode in Microsoft Edge is a feature for organizations that still need Internet Explorer 11 for backward compatibility for legacy websites or apps.  To learn more about IE mode, read [What is Internet Explorer (IE) mode?](https://docs.microsoft.com/deployedge/edge-ie-mode).  Internet Explorer 11 will no longer be supported on certain versions of Windows 10 starting **June 15, 2022**. For more information about ending support for Internet Explorer 11, read [Internet Explorer 11 desktop application ending support for certain operating systems](https://docs.microsoft.com/lifecycle/announcements/internet-explorer-11-end-of-support).

Organizations with business-critical legacy websites or apps may need to test their content in IE mode in Microsoft Edge.  The following sections describe how to get started with Internet Explorer Driver (IEDriver) to automate IE mode in Microsoft Edge.

## Download Internet Explorer Driver

To begin automating tests in IE mode in Microsoft Edge, [download IEDriver](https://www.selenium.dev/downloads/).  Ensure that the version of IEDriver that you download is `4.0.0.0` or greater.

:::image type="content" source="./media/iedriver-install.msft.png" alt-text="The IEDriver section of Downloads page for Selenium." lightbox="./media/iedriver-install.msft.png":::

## Automate IE mode in Microsoft Edge

The following content walks you through using Selenium to automate IE mode in Microsoft Edge.

> [!NOTE]
> This article provides instructions for using the Selenium framework, but you can use any library, framework, and programming language that supports WebDriver.  To accomplish the same tasks using another framework, consult the documentation for your framework of choice.

To launch Microsoft Edge in IE mode with IEDriver, you must create an `InternetExplorerDriverService` and define `InternetExplorerOptions` with additional capabilities that point to the Microsoft Edge browser.  You then start an instance of `InternetExplorerDriver` and pass it both `InternetExplorerDriverService` and `InternetExplorerOptions`.  IEDriver will launch Microsoft Edge and load your web content in IE mode. The following sample launches Microsoft Edge in IE mode, navigates to [bing.com](https://www.bing.com/) and searches for "WebDriver".  

#### [C#](#tab/c-sharp/)

<a id="drive-ie-mode-entire-sample"></a>

```csharp
using System;
using OpenQA.Selenium;
using OpenQA.Selenium.IE;

namespace Selenium_Web
{
    class Program
    {
        static void Main(string[] args)
        {
            //change the path accordingly
            var dir = @"C:\<path to IEDriver download>";
            var driverexe = "IEDriverServer.exe";

            var ieService = InternetExplorerDriverService.CreateDefaultService(dir, driverexe);
            var ieOptions = new InternetExplorerOptions { IgnoreZoomLevel = true };
            ieOptions.PageLoadStrategy = PageLoadStrategy.Eager;
            ieOptions.AddAdditionalCapability("ie.edgechromium", true);
            //change the path accordingly
            ieOptions.AddAdditionalCapability("ie.edgepath", "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe");

            InternetExplorerDriver reqDriver = new InternetExplorerDriver(ieService, ieOptions);
            reqDriver.Url = "https://bing.com";
            reqDriver.FindElementById("sb_form_q").SendKeys("WebDriver");
            reqDriver.FindElementById("sb_form").Submit();

            Console.WriteLine("Done");
        }
    }
}
```

#### [Python](#tab/python/)

<a id="drive-ie-mode-entire-sample"></a>

Insert Python sample here

* * *

The following sections explain the steps in this sample in more detail.

### Create an InternetExplorerDriverService

#### [C#](#tab/c-sharp/)

<a id="drive-ie-mode-ieService"></a>

To create an `InternetExplorerDriverService`, use the `CreateDefaultService` method and pass it `dir`, the directory where you downloaded IEDriver to, and `driverexe`, the name of the IEDriver executable.  

```csharp
//change the path accordingly
var dir = @"C:\<path to IEDriver download>";
var driverexe = "IEDriverServer.exe";

var ieService = InternetExplorerDriverService.CreateDefaultService(dir, driverexe);
```

#### [Python](#tab/python/)

<a id="drive-ie-mode-ieService"></a>

Insert Python sample here

* * *

### Define InternetExplorerOptions with additional capabilities for Microsoft Edge

#### [C#](#tab/c-sharp/)

<a id="drive-ie-mode-ieOptions"></a>

Define a new variable, `ieOptions`, by instantiating `InternetExplorerOptions` with the `IgnoreZoomLevel` property set to `true`.  Call the `AddAdditionalCapability` method with the `ie.edgechromium` property set to `true` and `ie.edgepath` set to the path of the Microsoft Edge executable.

```csharp
var ieOptions = new InternetExplorerOptions { IgnoreZoomLevel = true };
ieOptions.PageLoadStrategy = PageLoadStrategy.Eager;
ieOptions.AddAdditionalCapability("ie.edgechromium", true);
//change the path accordingly
ieOptions.AddAdditionalCapability("ie.edgepath", "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe");
```

#### [Python](#tab/python/)

<a id="drive-ie-mode-ieOptions"></a>

Insert Python sample here

* * *

### Start InternetExplorerDriver

#### [C#](#tab/c-sharp/)

<a id="drive-ie-mode-ieDriver"></a>

Finally, start `InternetExplorerDriver` and pass it the previously defined `ieService` and `ieOptions`.  IEDriver will launch Microsoft Edge in IE mode.  All page navigations and subsequent interactions will occur in IE mode.

```csharp
InternetExplorerDriver reqDriver = new InternetExplorerDriver(ieService, ieOptions);
```

#### [Python](#tab/python/)

<a id="drive-ie-mode-ieOptions"></a>

Insert Python sample here

* * *

## Known limitations

When automating IE mode in Microsoft Edge, you must handle window management in your test code. IEDriver will not correctly return the handles of windows opened with [window.open](https://developer.mozilla.org/docs/Web/API/Window/open). Instead of relying on the [Get Window Handles](https://www.w3.org/TR/webdriver2/#get-window-handles) command, update your test code to find the new window and switch to it.  The following sample demonstrates how you must handle new windows with IEDriver.

<a id="drive-ie-mode-window-handlers"></a>

Define `resultFrame`, the new window, with the `FindElementById` method and then switch IEDriver to the `resultFrame` by passing it to the `SwitchTo().Frame` method.

```csharp
IWebElement resultFrame = reqDriver.FindElementById("<id for element in new window>");
reqDriver.SwitchTo().Frame(resultFrame);
```

Something about a race condition?

## See also

*  [Use WebDriver to automate Microsoft Edge](https://docs.microsoft.com/microsoft-edge/webdriver-chromium) - An overview for automating Microsoft Edge with the WebDriver protocol
*  [Selenium documentation](https://www.selenium.dev/documentation) - Information about WebDriver in the context of Selenium, and how to write automated WebDriver tests using Selenium.
*  [Contact the Microsoft Edge DevTools team](../devtools-guide-chromium/contact.md) to send feedback about using WebDriver, WebDriver testing frameworks (such as Selenium), and Microsoft Edge.
