---
description: Learn how to test your legacy website or app in IE mode in Microsoft Edge.
title: Use Internet Explorer Driver to automate IE mode in Microsoft Edge
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 11/23/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: devtools
keywords: microsoft edge, web development, html, css, javascript, developer, webdriver, selenium, testing, tools, automation, test, ie, internet explorer, ie mode
---
# Use Internet Explorer Driver to automate IE mode in Microsoft Edge

If you have business-critical legacy websites or apps, you may need to test your content in Internet Explorer (IE) mode in Microsoft Edge.  This article describes how to get started with Internet Explorer Driver (IEDriver) to automate IE mode in Microsoft Edge.

IE mode in Microsoft Edge is a feature for organizations that still need Internet Explorer 11 for backward compatibility for legacy websites or apps.  To learn more about IE mode, read [What is Internet Explorer (IE) mode?](/deployedge/edge-ie-mode)

Starting **June 15, 2022**, Internet Explorer 11 will no longer be supported on certain versions of Windows 10. For more information, read [Internet Explorer 11 desktop application ending support for certain operating systems](/lifecycle/announcements/internet-explorer-11-end-of-support).


<!-- ====================================================================== -->
## Download Internet Explorer Driver (IEDriver)

To begin automating tests in IE mode in Microsoft Edge, [download IEDriver](https://www.selenium.dev/downloads/).  Make sure that the version of IEDriver that you download is `4.0.0.0` or greater.

:::image type="content" source="./media/iedriver-install.msft.png" alt-text="The IEDriver section of the Downloads page for Selenium." lightbox="./media/iedriver-install.msft.png":::


<!-- ====================================================================== -->
## Automate IE mode in Microsoft Edge

The following sections walk you through using Selenium to automate IE mode in Microsoft Edge.

> [!NOTE]
> This article provides instructions for using the Selenium framework, but you can use any library, framework, and programming language that supports WebDriver.  To accomplish the same tasks using another framework, consult the documentation for your framework of choice.

To launch Microsoft Edge in IE mode with IEDriver:

1.  Define `InternetExplorerOptions` with additional properties that point to the Microsoft Edge browser.

1.  Start an instance of `InternetExplorerDriver` and pass it `InternetExplorerOptions`.  IEDriver launches Microsoft Edge and then loads your web content in IE mode.

The next section shows the complete sample, and then the subsequent sections focus on each of the main steps that are listed above.


<!-- ====================================================================== -->
## The complete sample

The following sample launches Microsoft Edge in IE mode, navigates to [bing.com](https://www.bing.com/), and then searches for "WebDriver".

### [C#](#tab/c-sharp/)

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
            var ieOptions = new InternetExplorerOptions();
            ieOptions.AttachToEdgeChrome = true;
            //change the path accordingly
            ieOptions.EdgeExecutablePath = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";

            InternetExplorerDriver reqDriver = new InternetExplorerDriver(ieOptions);
            reqDriver.Url = "https://bing.com";
            reqDriver.FindElement(By.Id("sb_form_q")).SendKeys("WebDriver");
            reqDriver.FindElement(By.Id("sb_form")).Submit();

            Console.WriteLine("Done");
            reqDriver.Quit();
        }
    }
}
```

### [Python](#tab/python/)

```python
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

ieOptions = webdriver.IeOptions()
ieOptions.attach_to_edge_chrome = True
ieOptions.edge_executable_path = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"

browser = webdriver.Ie(options=ieOptions)

browser.get("http://www.bing.com")
elem = browser.find_element(By.ID, 'sb_form_q')
elem.send_keys('WebDriver' + Keys.RETURN)

print('Done')

browser.quit()
```

### [Java](#tab/java/)

```java
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.ie.InternetExplorerOptions;

public class IEDriverSample {
    public static void main(String[] args) {        
        InternetExplorerOptions ieOptions = new InternetExplorerOptions();
        ieOptions.attachToEdgeChrome();
        ieOptions.withEdgeExecutablePath("C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe");
        
        WebDriver driver = new InternetExplorerDriver(ieOptions);
        String baseUrl = "http://www.bing.com";
        
        driver.get(baseUrl);
        WebElement elem = driver.findElement(By.id("sb_form_q"));
        elem.sendKeys("WebDriver", Keys.RETURN);

        System.out.println("Done");
        driver.close();
    }
}
```

### [JavaScript](#tab/javascript/)

```javascript
const {Builder, By, Key, until} = require('selenium-webdriver');
const {Options} = require('selenium-webdriver/ie');

(async function IEDriverSample() {
  let ieOptions = await new Options()
  await ieOptions.setEdgeChromium(true)
  await ieOptions.setEdgePath('C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe')

  let driver = await new Builder().
                         forBrowser('ie').
                         setIeOptions(ieOptions).
                         build();
  try {
    await driver.get('http://www.bing.com');
    await driver.findElement(By.id('sb_form_q')).sendKeys('WebDriver', Key.RETURN);
    await driver.wait(until.titleIs('WebDriver - Bing'), 1000);
  } finally {
    await driver.quit();
  }
})();
```

* * *

The following sections explain the steps in this sample in more detail.

<!-- ====================================================================== -->
## Define InternetExplorerOptions with additional properties for Microsoft Edge

Define `InternetExplorerOptions` with additional properties that point to the Microsoft Edge browser.

### [C#](#tab/c-sharp/)

1. Define a new variable, `ieOptions`, by calling `InternetExplorerOptions()`.

1. Set `ieOptions.AttachToEdgeChrome` property to `true`, and `ieOptions.EdgeExecutablePath` to the path of the Microsoft Edge executable.

```csharp
var ieOptions = new InternetExplorerOptions();
ieOptions.AttachToEdgeChrome = true;
//change the path accordingly
ieOptions.EdgeExecutablePath = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";
```

### [Python](#tab/python/)

1. Define a new variable, `ieOptions`, by calling `webdriver.IeOptions()`.

1. Set the `ieOptions.attach_to_edge_chrome` property to `true`, and `ieOptions.edge_executable_path` to the path of the Microsoft Edge executable.

```python
ieOptions = webdriver.IeOptions()
ieOptions.attach_to_edge_chrome = True
ieOptions.edge_executable_path = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"
```

### [Java](#tab/java/)

1. Define a new variable `ieOptions` of type `InternetExplorerOptions`, by calling `new InternetExplorerOptions()`.

1. Call `ieOptions.attachToEdgeChrome()` and `ieOptions.withEdgeExecutablePath()` with the path of the Microsoft Edge executable.

```java
InternetExplorerOptions ieOptions = new InternetExplorerOptions();
ieOptions.attachToEdgeChrome();
ieOptions.withEdgeExecutablePath("C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe");
```

### [JavaScript](#tab/javascript/)

1. Define a new variable, `ieOptions`, by calling `Options()`.

1. Set the `ieOptions.setEdgeChromium` property to `true`.

1. Set `ieOptions.setEdgePath` to the path of the Microsoft Edge executable.

```javascript
let ieOptions = await new Options()
await ieOptions.setEdgeChromium(true)
await ieOptions.setEdgePath('C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe')
```

* * *


<!-- ====================================================================== -->
## Start InternetExplorerDriver

Start IEDriver.  IEDriver launches Microsoft Edge and then loads your web content in IE mode.

### [C#](#tab/c-sharp/)

Start `InternetExplorerDriver` and pass it the previously defined `ieOptions`.  IEDriver launches Microsoft Edge in IE mode.  All page navigation and subsequent interactions occur in IE mode.

```csharp
InternetExplorerDriver reqDriver = new InternetExplorerDriver(ieOptions);
```

### [Python](#tab/python/)

Start IEDriver by calling `webdriver.Ie` and passing it the previously defined `ieOptions`.  IEDriver launches Microsoft Edge in IE mode.  All page navigation and subsequent interactions occur in IE mode.

```python
browser = webdriver.Ie(options=ieOptions)
```

### [Java](#tab/java/)

Start IEDriver by calling `new InternetExplorerDriver()` and passing it the previously defined `ieOptions`.  IEDriver launches Microsoft Edge in IE mode.  All page navigation and subsequent interactions occur in IE mode.

```java
WebDriver driver = new InternetExplorerDriver(ieOptions);
```

### [JavaScript](#tab/javascript)

Start IEDriver by calling `Builder.forBrowser('ie')` and `setIeoptions(ieOptions)`.  IEDriver launches Microsoft Edge in IE mode.  All page navigation and subsequent interactions occur in IE mode.

```javascript
let driver = await new Builder().
                       forBrowser('ie').
                       setIeOptions(ieOptions).
                       build();
```

* * *


<!-- ====================================================================== -->
## Known limitations

When automating IE mode in Microsoft Edge, you must add a short wait between these two operations:

1. Opening a new window with [window.open](https://developer.mozilla.org/docs/Web/API/Window/open).
1. Getting handles to the new window with the [Get Window Handles](https://www.w3.org/TR/webdriver2/#get-window-handles) command.

The following sample demonstrates how you must wait for IEDriver to register new window handles when opening new windows.

### [C#](#tab/c-sharp/)

After the `Click` method is called on a button that opens a new window, IEDriver must wait 2 seconds with `Thread.Sleep(2000)` before getting new window handles with `reqDriver.WindowHandles`.

```csharp
reqDriver.FindElement(By.Id("<Id of the button that will open a new window>")).Click();
Thread.Sleep(2000);
var newHandles = reqDriver.WindowHandles;
```

### [Python](#tab/python/)

After the `click` method is called on a button that opens a new window, IEDriver must wait 2 seconds with `browser.implicitly_wait(2.0)` before getting new window handles with `browser.window_handles`.

```python
browser.find_element(By.ID, "<Id of the button that will open a new window>").click()
browser.implicitly_wait(2.0)
newHandles = browser.window_handles
```

### [Java](#tab/java/)

After the `click` method is called on a button that opens a new window, IEDriver must wait 2 seconds with `Thread.sleep(2000)` before getting new window handles with `driver.getWindowHandles()`.

```java
driver.findElement(By.id("<Id of the button that will open a new window>")).click();        
Thread.sleep(2000);
Set<String> newHandles=driver.getWindowHandles();
```

### [JavaScript](#tab/javascript/)

After the `click` method is called on a button that opens a new window, IEDriver must wait with `await driver.getAllWindowHandles()`.

```javascript
await driver.findElement(By.id("<Id of the button that will open a new window>")).click();
let newHandles = await driver.getAllWindowHandles()
```

* * *

<!--
Todo: incorporate feedback about this requirement into this section. We need to verify this feedback with the engineering team because we were able to get a sample that was broken working with these changes.

"This isn't a requirement. We do the waiting internally. The limitation is that if multiple windows are opened at nearly the same time, then our wait logic we added to the "new window" command might not be able to accurately detect which window is the one you opened.

Some potential workarounds are:

- Space out your new window commands and avoid page-initiated popups etc so the driver doesn't get confused.
- Set the page load strategy to "none" and poll the window handles yourself since you (i.e. the developer) should hopefully know better than IEDriver which window is the one you are looking for.

So the workarounds look a lot like what you've described here. I would just reframe it a bit that you don't need to resort to these workarounds unless your existing test code is having trouble with new window commands."
-->

Additionally, in IE mode, IEDriver can only interact with the active tab in Microsoft Edge. In the Internet Explorer 11 desktop application, IEDriver will return handles for all of the tabs in IE. When automating multiple tabs in IE mode, you must manage the active tab in your test code.

<!-- ====================================================================== -->
## See also

<!-- 1st link = https://docs.microsoft.com/microsoft-edge/webdriver-chromium -->
*  [Use WebDriver to automate Microsoft Edge](/microsoft-edge/webdriver-chromium) - An overview of automating Microsoft Edge with the WebDriver protocol.
*  [Selenium documentation](https://www.selenium.dev/documentation) - Information about WebDriver in the context of Selenium, and how to write automated WebDriver tests using Selenium.
*  [Contact the Microsoft Edge DevTools team](../devtools-guide-chromium/contact.md) to send feedback about using WebDriver, WebDriver testing frameworks (such as Selenium), and Microsoft Edge.
