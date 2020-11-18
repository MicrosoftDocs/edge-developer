---
description: A reference for WebDriver capabilities and Edge-specific options supported by EdgeDriver (Chromium).
title: Capabilities & EdgeOptions
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/01/2020
ms.topic: article
ms.prod: microsoft-edge
ms.technology: devtools
keywords: microsoft edge, web development, html, css, javascript, developer, webdriver, selenium, testing, tools, automation, test
---

# Capabilities & EdgeOptions

Capabilities are options that you can use to customize and configure an EdgeDriver session. This page documents all EdgeDriver supported capabilities and how to use them.

WebDriver language bindings provide ways to pass capabilities to EdgeDriver. The exact mechanism differs by the language binding used. In [Selenium][Selenium], this is provided through the `EdgeOptions` class.

## Using the `EdgeOptions` class

You can create an instance of `EdgeOptions`, which has convenient methods for setting EdgeDriver-specific capabilities. You can then pass the `EdgeOptions` object into the EdgeDriver constructor:

```csharp
var options = new EdgeOptions();
options.UseChromium = true;
options.AddExtensions("/path/to/extension.crx");
var driver = new EdgeDriver(options);
```

To use a capability that does not yet have a convenience method, you can use the `AddAdditionalCapability` method. To use this method you need to know the name of the capability and the type of value it takes. See the full list below.

```csharp
options.AddAdditionalCapability("wdpAddress", "remotehost:9222");
```

## Recognized Capabilities

Please see [Selenium documentation][SeleniumDocumentation] and [W3C WebDriver standard][WebDriverSpec] for standard capabilities that EdgeDriver accepts. This page lists only capabilities specific to Edge (Chromium).

## `EdgeOptions` object

Most Edge-specific capabilities are exposed through the EdgeOptions object. In some languages, this is implemented by the EdgeOptions class. In other languages, they are stored under the `ms:edgeOptions` dictionary in desired capabilities.

| Name | Type | Default | Description |
|------|------|---------|-------------|
| args | list of strings | | List of command-line arguments to use when starting Edge. Arguments with an associated value should be separated by a '=' sign (e.g., ['start-maximized', 'user-data-dir=/tmp/temp_profile']). |
| binary | string | | Path to the Edge executable to use (on Mac OS X, this should be the actual binary, not just the app. e.g., '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge'). |
| extensions | list of strings | | A list of extensions to install on startup. Each item in the list should be a base-64 encoded packed extension (.crx). |
| localState | dictionary | | A dictionary with each entry consisting of the name of the preference and its value. These preferences are applied to the Local State file in the user data folder. |
| prefs | dictionary | | A dictionary with each entry consisting of the name of the preference and its value. These preferences are only applied to the user profile in use. See the 'Preferences' file in Edge's user data directory for examples. |
| detach | boolean | false | If false, Edge will be quit when EdgeDriver is killed, regardless of whether the session is quit. If true, Edge will only be quit if the session is quit (or closed). Note, if true, and the session is not quit, EdgeDriver cannot clean up the temporary user data directory that the running Edge instance is using. |
| debuggerAddress | string | | An address of a debugger server to connect to, in the form of <hostname/ip:port>, e.g. '127.0.0.1:38947'. |
| excludeSwitches | list of strings | | List of Edge command line switches to exclude that EdgeDriver by default passes when starting Edge.  Do not prefix switches with --. |
| minidumpPath | string | | Directory to store Edge minidumps . (Supported only on Linux.) |
| mobileEmulation | dictionary | | A dictionary with either a value for "deviceName," or values for "deviceMetrics" and "userAgent". |
| perfLoggingPrefs | dictionary | | An optional dictionary that specifies performance logging preferences. See below for more information. |
| windowTypes | list of strings | | A list of window types that will appear in the list of window handles. For access to Android webview elements, include "webview" in this list. |

## `perfLoggingPrefs` object

The `perfLoggingPrefs` dictionary has the following format (all keys are optional):

| Name | Type | Default | Description |
|------|------|---------|-------------|
| enableNetwork | boolean | true | Whether or not to collect events from Network domain. |
| enablePage | boolean | true | Whether or not to collect events from Page domain. |
| traceCategories | string | (empty) | A comma-separated string of Edge tracing categories for which trace events should be collected. An unspecified or empty string disables tracing. |
| bufferUsageReportingInterval | positive integer | 1000 | The requested number of milliseconds between DevTools trace buffer usage events. For example, if 1000, then once per second, DevTools will report how full the trace buffer is. If a report indicates the buffer usage is 100%, a warning will be issued. |

## Returned Capabilities

This is a list of all of the Edge-specific capabilities that EdgeDriver returns when you create a new session.

| Name | Type | Description |
|------|------|-------------|
| msedge.msedgedriverVersion | string | version of EdgeDriver |
| msedge.userDataDir | string | path to user data directory that Edge is using |

[Selenium]: https://www.selenium.dev/
[SeleniumDocumentation]: https://www.selenium.dev/documentation
[WebDriverSpec]: https://www.w3.org/TR/webdriver/