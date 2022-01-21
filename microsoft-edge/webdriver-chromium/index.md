---
title: Use WebDriver to automate Microsoft Edge
description: How to test your website or app in Microsoft Edge, and how to automate the browser with WebDriver.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: devtools
ms.date: 01/20/2022
---
# Use WebDriver to automate Microsoft Edge

WebDriver allows you to automate Microsoft Edge by simulating user interaction.  WebDriver tests and simulations differ from JavaScript unit tests in the following ways:

*   WebDriver accesses functionality and information that's not available to JavaScript running in browsers.
*   WebDriver simulates user events or OS-level events more accurately than JavaScript unit tests.
*   WebDriver manages multiple windows, tabs, and webpages in a single test session.
*   WebDriver runs multiple sessions of Microsoft Edge on a specific machine.


<!-- ====================================================================== -->
## Relationship between WebDriver and other software

To automate Microsoft Edge with WebDriver to simulate user interaction, you need three components:

*  Microsoft Edge.
*  Microsoft Edge Driver.
*  A WebDriver testing framework.

The functional relationship between these components is as follows:

| Technology | Role |
|---|---|
| WebDriver | A W3C standard for a platform- and language-neutral wire protocol.  This protocol allows out-of-process programs to remotely instruct the behavior of web browsers. |
| Microsoft Edge Driver | Microsoft's implementation of the WebDriver protocol specifically for Microsoft Edge.  Test authors write tests that use WebDriver commands that Microsoft Edge Driver receives.  Microsoft Edge Driver is then responsible for communicating that command to the browser. |
| A WebDriver testing framework | Test authors use a testing framework to write end-to-end tests and automate browsers.  Provides a language-specific interface that translates your code into commands that are sent to Microsoft Edge Driver.  WebDriver testing frameworks exist for all major platforms and languages.  One such framework is Selenium. |
| Internet Explorer Driver | An open-source implementation of the WebDriver protocol specifically for Internet Explorer.  To run legacy end-to-end tests for Internet Explorer Mode, we recommend using Internet Explorer Driver. |

The following sections describe how to get started with WebDriver for Microsoft Edge.


<!-- ====================================================================== -->
## Download Microsoft Edge Driver

To begin writing automated tests, make sure the Microsoft Edge Driver version you install matches your browser version, as follows:

1.  Go to `edge://settings/help` and note your version of Microsoft Edge.

    :::image type="content" source="./media/microsoft-edge-version.msft.png" alt-text="The build number for Microsoft Edge on April 15, 2021." lightbox="./media/microsoft-edge-version.msft.png":::

1.  Go to [Microsoft Edge Driver](https://developer.microsoft.com/microsoft-edge/tools/webdriver).

1.  In the **Get the latest version** section of the page, select a platform in the channel that matches your version number of Microsoft Edge.

    :::image type="content" source="./media/microsoft-edge-driver-install.msft.png" alt-text="The `Get the latest version` section of the Microsoft Edge Driver webpage." lightbox="./media/microsoft-edge-driver-install.msft.png":::

1.  After the download completes, extract the `msedgedriver` executable to your preferred location. Add the folder where the executable is located to your `PATH` environment variable.


<!-- ====================================================================== -->
## Choose a WebDriver testing framework

After downloading Microsoft Edge Driver, the last component you must download is a WebDriver testing framework.  Test authors use WebDriver testing frameworks to write end-to-end tests and automate browsers.  A WebDriver testing framework provides a language-specific interface that translates your code into commands that Microsoft Edge Driver runs in Microsoft Edge.  WebDriver testing frameworks exist for all major platforms and languages, such as Python, Java, C#, Ruby, and JavaScript.

This article provides instructions for using the Selenium framework, but you can use any library, framework, and programming language that supports WebDriver.  To accomplish the same tasks using a WebDriver testing framework other than Selenium, consult the official documentation for your framework of choice.

### Using Selenium 4

Selenium WebDriver is an open-source testing framework that can be used on any platform, and provides language bindings for Java, Python, C#, Ruby, and JavaScript.

The Microsoft Edge team recommends [Selenium 4](https://www.nuget.org/packages/Selenium.WebDriver), because Selenium 4 has built-in support for Microsoft Edge (Chromium).  To install Selenium 4, see [Installing Selenium libraries](https://www.selenium.dev/documentation/en/selenium_installation/installing_selenium_libraries).

### Upgrading from Selenium 3

The Microsoft Edge team recommends upgrading existing Selenium 3 tests to Selenium 4, because the Selenium project no longer maintains Selenium 3.  To learn more about upgrading to Selenium 4, navigate to [Upgrade to Selenium 4](https://www.selenium.dev/documentation/webdriver/getting_started/upgrade_to_selenium_4/).

If you're using [Selenium Tools for Microsoft Edge](https://github.com/microsoft/edge-selenium-tools) to add Microsoft Edge (Chromium) support to your Selenium 3 browser tests, update your tests as follows:

1. Remove [Selenium Tools for Microsoft Edge](https://github.com/microsoft/edge-selenium-tools) from your project.  It isn't necessary to use Selenium Tools for Microsoft Edge with Selenium 4, because Selenium 4 already has built-in support for Microsoft Edge.

1. Update your tests to use the built-in `EdgeDriver` and related classes that Selenium 4 provides instead.

1. Remove all usages of the `EdgeOptions.UseChromium` property.  This property no longer exists in Selenium 4, because Selenium 4 supports Chromium-based Microsoft Edge only.

* * *


<!-- ====================================================================== -->
## Automate Microsoft Edge with WebDriver

To automate a browser using WebDriver, you must first start a WebDriver session by using a WebDriver testing framework.  A WebDriver _session_ is a single running instance of a browser that's controlled through WebDriver commands.

Start a WebDriver session to launch a new browser instance.  The launched browser instance remains open until you close the WebDriver session.

The following section walks you through using Selenium 4 to start a WebDriver session with Microsoft Edge.

> [!NOTE]
> This article provides instructions for using the Selenium framework, but you can use any library, framework, and programming language that supports WebDriver.  To accomplish the same tasks using another framework, consult the documentation for your framework of choice.

### Automate Microsoft Edge

Selenium uses the `EdgeDriver` class to manage a Microsoft Edge session.  The following code:
1. Starts a Microsoft Edge session.
1. Instructs Microsoft Edge to navigate to Bing.
1. Searches for "WebDriver".
1. Sleeps for a few seconds so you can see the results.

To get started automating Microsoft Edge with WebDriver, copy and paste the code snippet for your preferred language:

#### [C#](#tab/c-sharp/)

```csharp
using OpenQA.Selenium;
using OpenQA.Selenium.Edge;
using System.Threading;

namespace EdgeDriverSample
{
    class Program
    {
        static void Main(string[] args)
        {
            var driver = new EdgeDriver();
            try
            {
                driver.Url = "https://bing.com";

                var element = driver.FindElement(By.Id("sb_form_q"));
                element.SendKeys("WebDriver");
                element.Submit();

                Thread.Sleep(5000);
            }
            finally
            {
                driver.Quit();
            }
        }
    }
}
```

#### [Python](#tab/python/)

```python
from selenium import webdriver
from selenium.webdriver.common.by import By
import time

driver = webdriver.Edge()

driver.get('https://bing.com')

element = driver.find_element(By.ID, 'sb_form_q')
element.send_keys('WebDriver')
element.submit()

time.sleep(5)
driver.quit()
```

#### [Java](#tab/java/)

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.edge.EdgeDriver;

public class EdgeDriverSample {
    public static void main(String[] args) throws Exception {
        EdgeDriver driver = new EdgeDriver();
        try {
            driver.navigate().to("https://bing.com");

            WebElement element = driver.findElement(By.id("sb_form_q"));
            element.sendKeys("WebDriver");
            element.submit();

            Thread.sleep(5000);
        } finally {
            driver.quit();
        }
    }
}
```

#### [JavaScript](#tab/javascript/)

```javascript
const { Builder, By } = require('selenium-webdriver');

(async () => {
    const driver = await new Builder().forBrowser('MicrosoftEdge').build();
    try {
        await driver.get('https://bing.com');

        const element = await driver.findElement(By.id('sb_form_q'));
        await element.sendKeys('WebDriver');
        await element.submit();

        await driver.sleep(5000);
    } finally {
        await driver.quit();
    }
})();
```

* * *

### Manage and Configure the Microsoft Edge Driver Service

When you create a new `EdgeDriver` object to start a Microsoft Edge session, Selenium launches a new Microsoft Edge Driver process that the `EdgeDriver` object communicates with.  The Microsoft Edge Driver process is closed when you call the `EdgeDriver` object's `Quit` method.  This can be inefficient if you have many tests, because each test creates its own driver process and waits for the driver process to launch.  Instead, you can create a single Microsoft Edge Driver process and reuse it for multiple tests.

Selenium uses the `EdgeDriverService` class to manage a Microsoft Edge Driver process.  You can create an `EdgeDriverService` once before running your tests, and pass the `EdgeDriverService` object to the `EdgeDriver` constructor when creating a new `EdgeDriver` object.  When you pass an `EdgeDriverService` to the `EdgeDriver` constructor, the `EdgeDriver` object will use this `EdgeDriverService` instead of creating a new one.  You can also use `EdgeDriverService` to configure command-line options for the Microsoft Edge Driver process, as shown below.

The following snippet creates a new `EdgeDriverService` and enables verbose log output:

#### [C#](#tab/c-sharp/)

```csharp
var service = EdgeDriverService.CreateDefaultService();
service.UseVerboseLogging = true;

var driver = new EdgeDriver(service);
```

#### [Python](#tab/python/)

```python
from selenium import webdriver
from selenium.webdriver.edge.service import Service

service = Service(verbose = True)

driver = webdriver.Edge(service = service)
```

#### [Java](#tab/java/)

```java
System.setProperty("webdriver.edge.verboseLogging", "true");
EdgeDriverService service = EdgeDriverService.createDefaultService();

EdgeDriver driver = new EdgeDriver(service);
```

#### [JavaScript](#tab/javascript/)

```javascript
const edge = require('selenium-webdriver/edge');

const service = new edge.ServiceBuilder().enableVerboseLogging().build();

const options = new edge.Options();
const driver = edge.Driver.createSession(options, service);
```

* * *

### Configure Microsoft Edge Options

You can pass an `EdgeOptions` object to the `EdgeDriver` constructor to configure extra options for the Microsoft Edge browser process.  The following section shows how to use `EdgeOptions` for some common scenarios.  For a full list of options that are supported, see [Capabilities and EdgeOptions](capabilities-edge-options.md).

#### Choose Specific Browser Binaries

You can start a WebDriver session with specific Microsoft Edge binaries.  For example, you can run tests using the [Microsoft Edge preview channels](https://www.microsoftedgeinsider.com/download), such as Microsoft Edge Beta, Dev, or Canary.

##### [C#](#tab/c-sharp/)

```csharp
var options = new EdgeOptions();
options.BinaryLocation = @"C:\Program Files (x86)\Microsoft\Edge Beta\Application\msedge.exe";

var driver = new EdgeDriver(options);
```

##### [Python](#tab/python/)

```python
from selenium import webdriver
from selenium.webdriver.edge.options import Options

options = Options()
options.binary_location = r"C:\Program Files (x86)\Microsoft\Edge Beta\Application\msedge.exe"

driver = webdriver.Edge(options = options)
```

##### [Java](#tab/java/)

```java
EdgeOptions options = new EdgeOptions();
options.setBinary("C:\\Program Files (x86)\\Microsoft\\Edge Beta\\Application\\msedge.exe");

EdgeDriver driver = new EdgeDriver(options);
```

##### [JavaScript](#tab/javascript/)

```javascript
const edge = require('selenium-webdriver/edge');

let options = new edge.Options();
options.setBinaryPath("C:\\Program Files (x86)\\Microsoft\\Edge Beta\\Application\\msedge.exe");

let driver = edge.Driver.createSession(options);
```

* * *

#### Pass extra command-line arguments

You can use `EdgeOptions` to configure command-line arguments that will be passed to the Microsoft Edge browser process when a session is created.  For example, you can configure the browser to run in headless mode.

##### [C#](#tab/c-sharp/)

```csharp
var options = new EdgeOptions();
options.AddArgument("headless");

var driver = new EdgeDriver(options);
```

##### [Python](#tab/python/)

```python
from selenium import webdriver
from selenium.webdriver.edge.options import Options

options = Options()
options.add_argument("headless")

driver = webdriver.Edge(options = options)
```

##### [Java](#tab/java/)

```java
EdgeOptions options = new EdgeOptions();
options.addArguments("headless");

EdgeDriver driver = new EdgeDriver(options);
```

##### [JavaScript](#tab/javascript/)

```javascript
const edge = require('selenium-webdriver/edge');

let options = new edge.Options();
options.addArguments("headless");

let driver = edge.Driver.createSession(options);
```

* * *


<!-- ====================================================================== -->
## Other WebDriver installation options

### Docker

If you use [Docker](https://hub.docker.com), run the following command to download a pre-configured image that has Microsoft Edge and [Microsoft Edge Driver](https://developer.microsoft.com/microsoft-edge/tools/webdriver) pre-installed.

```console
docker run -d -p 9515:9515 mcr.microsoft.com/msedge/msedgedriver
```

For more information, see the [msedgedriver container on Docker Hub](https://hub.docker.com/_/microsoft-msedge-msedgedriver?tab=description).


<!-- ====================================================================== -->
## Application Guard

Trusted sites that use Microsoft Defender Application Guard can be automated using Microsoft Edge Driver.  Microsoft Defender Application Guard is also called _Application Guard_, for short.

Untrusted sites that use Application Guard cannot be automated or manipulated using Microsoft Edge Driver.  Application Guard launches untrusted sites in a container, and this container doesn't expose the remote debugging port that Microsoft Edge Driver needs to communicate with the site.

Your enterprise administrator defines what are trusted sites, including cloud resources and internal networks.  Sites that aren't in the trusted sites list are considered _untrusted_.  Microsoft Edge Driver can automate both InPrivate windows, and sites in the trusted sites list.

For more information about Application Guard, see:

*  [Microsoft Edge support for Microsoft Defender Application Guard](/deployedge/microsoft-edge-security-windows-defender-application-guard).
*  [Microsoft Defender Application Guard overview](/windows/security/threat-protection/microsoft-defender-application-guard/md-app-guard-overview).


<!-- ====================================================================== -->
## Opt out of diagnostic data collection

By default, Microsoft Edge Driver sends diagnostic data such as the status of the [New Session WebDriver command](https://www.w3.org/TR/webdriver2/#new-session) to Microsoft.  To turn off diagnostic data collection for Microsoft Edge Driver, set the `MSEDGEDRIVER_TELEMETRY_OPTOUT` environment variable to `1`.  For more information about the data that Microsoft Edge Driver collects, see the [Microsoft Edge Privacy Whitepaper](/microsoft-edge/privacy-whitepaper#microsoft-edge-driver).


<!-- ====================================================================== -->
## Known Issues

### Developer Tools Availability

If your IT admin has set the [DeveloperToolsAvailability](/deployedge/microsoft-edge-policies#developertoolsavailability) policy to `2`,  [Microsoft Edge Driver](https://developer.microsoft.com/microsoft-edge/tools/webdriver) is blocked from driving Microsoft Edge, because the driver uses [Microsoft Edge DevTools](../devtools-guide-chromium/index.md).  To automate Microsoft Edge, make sure the [DeveloperToolsAvailability](/deployedge/microsoft-edge-policies#developertoolsavailability) policy is set to `0` or `1`.

### Upgrading from Selenium 3 to Selenium 4

If you use Selenium 4, you don't need to use Selenium Tools for Microsoft Edge.  Selenium Tools for Microsoft Edge are for Selenium 3 only.  If you try to use Selenium 4 with Selenium Tools for Microsoft Edge and try to create a new `EdgeDriver` instance, you get the following error: `System.MissingMethodException: 'Method not found: 'OpenQA.Selenium.Remote.DesiredCapabilities OpenQA.Selenium.DriverOptions.GenerateDesiredCapabilities(Boolean)'`.

If you're using Selenium 4 and get this error, remove `Microsoft.Edge.SeleniumTools` from your project, and make sure you're using the official `EdgeOptions` and `EdgeDriver` classes from the `OpenQA.Selenium.Edge` namespace.


<!-- ====================================================================== -->
## See also

*  [Selenium documentation](https://www.selenium.dev/documentation) - Information about WebDriver in the context of Selenium, and how to write automated WebDriver tests using Selenium.
*  [Contact the Microsoft Edge DevTools team](../devtools-guide-chromium/contact.md) to send feedback about using WebDriver, WebDriver testing frameworks (such as Selenium), and Microsoft Edge.
