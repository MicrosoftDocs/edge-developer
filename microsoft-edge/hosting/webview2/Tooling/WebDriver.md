# WebView2 + WebDriver (Chromium)
Because WebView2 utilizes standard web technologies, WebView2 developers can take advantage of standard web tooling when debugging. One such tool is the W3C [WebDriver](https://www.w3.org/TR/webdriver2/) API, which can be used to create automated tests that simulate user interactions.

Here’s how to get started:

## Step 1: Download WebView2API Sample
If you do not have an existing WebView2 project, download our [WebView2API Sample application](https://github.com/MicrosoftEdge/WebView2Samples/tree/master/WebView2APISample#webview2-api-sample), a comprehensive and up to date sample of the WebView2 SDK. Please double check that you have satisfied these [prerequisites](https://github.com/MicrosoftEdge/WebView2Samples/tree/master/WebView2APISample#prerequisites).

Once you have cloned the repo, build the project in Visual Studio. It should look like the following:

![alt text](..\images\WebDriver\SampleApp.PNG)

## Step 2: Install WebDriver 
Follow the instructions [here](https://docs.microsoft.com/en-us/microsoft-edge/webdriver-chromium#download-microsoft-edge-driver) to install WebDriver. 

It is important to make sure that the version of WebDriver matches the version of Microsoft Edge that the application uses. For the WebView2API Sample make sure that your version of Edge is greater than or equal to the supported version of our latest SDK release found [here](https://docs.microsoft.com/en-us/microsoft-edge/hosting/webview2/releasenotes). To find out what version of Edge you currently have, load ```edge://settings/help``` in the browser.

## Step 3: Setup Project
At this point you should have Microsoft Edge installed, have built a WebView2 project, and have installed WebDriver. Now, let’s get started using WebDriver.

1. Start by creating a new **C# .NET Framework** project in **Visual Studio**.

![alt text](..\images\WebDriver\NewProject.PNG)

2. Click **Next** on the bottom right hand corner to continue.

![alt text](..\images\WebDriver\App-Create.PNG)

3. Give your project a **name**, save it to your preferred **location**, and click **Create**.

![alt text](..\images\WebDriver\Start-App.PNG)

4. Now let's add **WebDriver** to the project. You can install WebDriver via the **Selenium.WebDriver NuGet package**. 

To download the **Selenium.WebDriver NuGet package**, in **Visual Studio**, hover over **Project** and select **Manage NuGet Package**. The following screen should appear:

![alt text](..\images\WebDriver\Download-Nuget.PNG)

5. Enter **Selenium.WebDriver** in the search bar, click **Selenium.WebDriver** from the results, and make sure to checkmark the box next to **include pre-release**. On the right hand side window, ensure the **Version** is set to **install 4.0.0-alpha04** and click **Install**. Nuget will download WebDriver to your machine.

To learn more about the **Selenium.WebDriver NuGet package** click [here](https://www.nuget.org/packages/Selenium.WebDriver/4.0.0-alpha04)

![alt text](..\images\WebDriver\Nuget.PNG)

6. Use **OpenQA.Selenium.Edge** by adding the following using statement:```using OpenQA.Selenium.Edge;``` to the top of the file.

```C#
using OpenQA.Selenium.Edge;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
```

## Step 4: Setup WebDriver

1. First, create the **EdgeOptions** object, by copying the code below. The **EdgeOptions** object takes in two parameters:
    1. **is_legacy** is set to false, indicating you are using the new Chromium-powered Microsoft Edge Browser.
    2. The **"webview2"** string specifies that the **WebDriver** is driving **WebView2**.


```C#
static void Main(string[] args)
{
    // EdgeOptions() requires using OpenQA.Selenium.Edge
    // Construct EdgeOptions with is_legacy = false and the string "webview2"
    EdgeOptions edgeOptions = new EdgeOptions(false, "webview2");
```

2. Next, set **edgeOptions BinaryLocation** to the filepath of your WebView2 project's executable, create a string to store the path to **EdgeDriver's** executable, and create a string to store the name of the **EdgeDriver**. Use these two strings to construct the **EdgeDriverService** object as shown below. Finally, create the **EdgeDriver** object using **EdgeDriverService** and **EdgeOptions**.

You can copy and paste the following code underneath **edgeOptions**. Make sure to specify the correct file paths to your project's executable and the edgedriver's executable on your machine.
```C#      
    //Set the BinaryLocation to the filepath of the WebView2API Sample's executable
    edgeOptions.BinaryLocation = @"C:\path\to\your\webview2\project.exe";

    //Set msedgedriverDir to the filepath of the MS Edge Driver you downloaded
    string msedgedriverDir = @"C:\path\to\your\msededriver.exe\";

    //Set msedgedriverExe to the name of the Edge Driver. By default it is:
    string msedgedriverExe = @"msedgedriver.exe";

    // Construct EdgeDriverService with is_legacy = false  
    EdgeDriverService service = EdgeDriverService.CreateDefaultService(msedgedriverDir, msedgedriverExe, false);

    EdgeDriver e = new EdgeDriver(service, edgeOptions);
```
3. Now, the **EdgeDriver** is ready to automate the **WebView** in your project. For example, if you are using the **WebView2API Sample**, you can **Navigate** to http://microsoft.com by caling ```e.Url = @"http://www.microsoft.com";```. You can watch **WebDriver** drive **WebView2** by setting a breakpoint on this line and running the project.

```C#
    //The following will Navigate the WebView2API Sample from bing.com to microsoft.com
    e.Url = @"http://www.microsoft.com";

    //This exits the edge driver
    e.Quit();
}
```
![alt text](..\images\WebDriver\Microsoft.PNG)

Congratulations! You have successfully connected the WebDriver to a WebView2 project and driven WebView2.. 

## Next Steps

To learn more:

-  Checkout [Selenium Documentation](https://www.selenium.dev/documentation/en/webdriver/) for a comprehensive guide on how to automate tests using WebDriver
- Checkout [this page](https://docs.microsoft.com/en-us/microsoft-edge/hosting/webview2) for more information about WebView2.

## Feedback
Help us build a richer WebView2 experience by sharing your feedback! Visit our [feedback repo](https://github.com/MicrosoftEdge/WebViewFeedback) to submit feature requests or bug reports or to search for known issues.


 
 

