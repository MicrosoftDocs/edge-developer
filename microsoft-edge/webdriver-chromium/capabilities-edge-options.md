---
description: A reference for WebDriver capabilities and Microsoft Edge-specific options supported by EdgeDriver (Chromium).
title: Capabilities and EdgeOptions
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 11/24/2020
ms.topic: article
ms.prod: microsoft-edge
ms.technology: devtools
keywords: microsoft edge, web development, html, css, javascript, developer, webdriver, selenium, testing, tools, automation, test
---
# Capabilities and EdgeOptions  

Capabilities are options that you use to customize and configure an `EdgeDriver` session.  This article documents all `EdgeDriver` supported capabilities and how to use each one.  

WebDriver language bindings provide ways to pass capabilities to `EdgeDriver`.  The exact mechanism differs by the language binding used.  In [SeleniumMain][SeleniumMain], the capability is provided through the `EdgeOptions` class.  

## Using the EdgeOptions class  

Create an instance of `EdgeOptions`, which has convenient methods for setting EdgeDriver-specific capabilities.  To pass the `EdgeOptions` object into the `EdgeDriver` constructor, copy and run the following code snippet.  

```csharp
var options = new EdgeOptions();
options.UseChromium = true;
options.AddExtensions("/path/to/extension.crx");
var driver = new EdgeDriver(options);
```  

To use a capability that does not yet have a convenience method, run the `AddAdditionalCapability` method.  To use the method, you must know the name of the capability and the type of value it accepts.  To review the full list, navigate to [EdgeOptions object](#edgeoptions-object).  

```csharp
options.AddAdditionalCapability("wdpAddress", "remotehost:50080");
```  

## Recognized Capabilities  

For standard capabilities that `EdgeDriver` accepts, navigate to [Selenium documentation][SeleniumDocumentation] and [W3C WebDriver standard][W3cWebdriver].  This article only lists capabilities specific to Microsoft Edge \(Chromium\).  

## EdgeOptions object  

Most Microsoft Edge-specific capabilities are exposed through the `EdgeOptions` object.  In some languages, the capabilities are implemented by the `EdgeOptions` class.  In other languages, the capabilities are stored under the `ms:edgeOptions` dictionary in `DesiredCapabilities`.  

| Capability | Type | Default value | Details |  
|:--- |:--- |:--- |:--- |  
| args | list of strings |  | List of command-line arguments to use when starting Microsoft Edge.  Arguments with an associated value should be separated by a `=` sign \(for example, `['start-maximized', 'user-data-dir=/tmp/temp_profile']`\).  |  
| binary | string |  | Path to the Microsoft Edge binary to use \(on macOS, the path should be the actual binary, not just the app.  for example, `/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge`\).  |  
| extensions | list of strings |  | A list of extensions to install on startup.  Each item in the list should be a base-64 encoded packed extension \(`.crx`\).  |  
| localState | dictionary |  | A dictionary with each entry consisting of the name of the preference and its value.  The preferences are applied to the Local State file in the user data folder.  |  
| prefs | dictionary |  | A dictionary with each entry consisting of the name of the preference and its value.  The preferences are only applied to the user profile in use.  For examples, navigate to the `Preferences` file in the user data directory of Microsoft Edge.  |  
| detach | boolean | false | If false, Microsoft Edge quits when `EdgeDriver` ends, whether the session quit or not.  If true, Microsoft Edge only quits if the session is quit \(or closed\).  **NOTE**: If true, and the session is not quit, `EdgeDriver` does not clean up the temporary user data directory used by the Microsoft Edge instance.  |  
| debuggerAddress | string |  | An address of a debugger server to connect to, in the form of <hostname/ip:port>, for example  `127.0.0.1:38947`.  |
| excludeSwitches | list of strings |  | List of Microsoft Edge command line switches to exclude that EdgeDriver by default passes when starting Microsoft Edge.  Do not prefix switches with `--`.  |  
| minidumpPath | string |  | Directory to store Microsoft Edge minidumps.  \(Supported only on Linux.\) |  
| mobileEmulation | dictionary |  | A dictionary with either a value for `deviceName`, or values for `deviceMetrics` and `userAgent`.  |  
| perfLoggingPrefs | dictionary |  | An optional dictionary that specifies performance logging preferences.  for more information, navigate to [perfLoggingPrefs object](#perfloggingprefs-object).  |  
| windowTypes | list of strings |  | A list of window types that are displayed in the list of window handles.  For access to Android webview elements, include `webview` in the list.  |  
| wdpAddress | string |  | An address of a Windows Device Portal server to which you connect, in the form of `hostname/ip:port`, for example  `127.0.0.1:50080`.  For more information, navigate to [Remote Debugging - Windows 10 devices][DevtoolsRemoteDebuggingWindows].  |  
| wdpUsername | string |  | Optional username to use when connecting to a Windows Device Portal server.  Required if the server has authentication enabled.  |  
| wdpPassword | string |  | Optional password to use when connecting to a Windows Device Portal server.  Required if the server has authentication enabled.  |  
| windowsApp | string |  | Application user model ID of a Microsoft Edge application package to launch, for example `Microsoft.MicrosoftEdge.Stable_8wekyb3d8bbwe!MSEDGE`.  Use the value instead of binary when connecting to a Windows 10X device or emulator using Windows Device Portal.  |  

## perfLoggingPrefs object  

The `perfLoggingPrefs` dictionary has the following format \(all keys are optional\):  

| Key | Type | Default value | Details |  
|:--- |:--- |:--- |:--- |  
| enableNetwork | boolean | true | To collect \(or not collect\) events from Network domain.  |  
| enablePage | boolean | true | To collect \(or not collect\) events from Page domain.  |  
| traceCategories | string | \(empty\) | A comma-separated string of Microsoft Edge tracing categories for which trace events should be collected.  An unspecified or empty string disables tracing.  |  
| bufferUsageReportingInterval | positive integer | 1000 | The requested number of milliseconds between DevTools trace buffer usage events.  For example, if 1000, then once per second, DevTools reports how full the trace buffer is.  If a report indicates the buffer usage is 100%, a warning is issued.  |  

## Returned Capabilities  

The following list contains all of the Microsoft Edge-specific capabilities that `EdgeDriver` returns when you create a new session.  

| Capability | Type | Details |  
|:--- |:--- |:--- |  
| msedge.msedgedriverVersion | string | The version of EdgeDriver. |  
| msedge.userDataDir | string | The path to the user data directory used by the Microsoft Edge instance. |  

<!-- links -->  

[DevtoolsRemoteDebuggingWindows]: ../devtools-guide-chromium/remote-debugging/windows.md "Get Started with Remote Debugging Windows 10 Devices | Microsoft Docs"  

[SeleniumMain]: https://www.selenium.dev "SeleniumHQ Browser Automation"  
[SeleniumDocumentation]: https://www.selenium.dev/documentation "Documentation | SeleniumHQ Browser Automation"   

[W3cWebdriver]: https://w3.org/TR/webdriver "WebDriver | W3C"   
