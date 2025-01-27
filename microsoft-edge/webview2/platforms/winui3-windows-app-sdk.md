---
title: WebView2 in WinUI 3 (Windows App SDK) apps
description: WebView2 in WinUI 3 (Windows App SDK) apps.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 01/24/2025
---
# WebView2 in WinUI 3 (Windows App SDK) apps


<!-- ====================================================================== -->
## WinAppSDK supports custom WebView2 environments

WinAppSDK supports custom WebView2 environments, starting with WinAppSDK 1.5 ([1.5.0-experimental2](/windows/apps/windows-app-sdk/experimental-channel#version-15-experimental-150-experimental2)).  For more information, see [WinUI3 WebView2 with a custom CoreWebView2Environment](https://github.com/microsoft/microsoft-ui-xaml/issues/6150).

To instantiate a custom WebView2 environment, you could initialize WebView2 with one of the overrides of `WebView2.EnsureCoreWebView2Async` (listed below), and pass in your custom `CoreWebView2Environment` (and, optionally, custom `CoreWebView2ControllerOptions`):

```csharp
public IAsyncAction EnsureCoreWebView2Async (CoreWebView2Environment environment)
public IAsyncAction EnsureCoreWebView2Async (CoreWebView2Environment environment, CoreWebView2ControllerOptions controllerOptions)
```

Also see the example code in [Disabling SmartScreen navigation](#disabling-smartscreen-navigation), below.

API Reference:
* [WebView2.EnsureCoreWebView2Async](/windows/windows-app-sdk/api/winrt/microsoft.ui.xaml.controls.webview2.ensurecorewebview2async)
* [CoreWebView2ControllerOptions](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controlleroptions)
* [CoreWebView2Environment](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment)
* [CoreWebView2EnvironmentOptions](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions)


<!-- ====================================================================== -->
## WinUI 3 WebView2 special considerations


<!-- ------------------------------ -->
#### Disabling SmartScreen navigation

WebView2 sends URLs that are navigated to in your application to the [SmartScreen](/windows/security/threat-protection/microsoft-defender-smartscreen/microsoft-defender-smartscreen-overview) service, to ensure that your customers stay secure.  If you want to disable this navigation, use a custom `CoreWebView2Environment`, as follows:

```csharp
CoreWebView2EnvironmentOptions environmentOptions = new CoreWebView2EnvironmentOptions();
environmentOptions.AdditionalBrowserArguments = "--disable-features=msSmartScreenProtection";

string browserFolder = null; // Use null to get default browser folder
string userDataFolder = null; // Use null to get default user data folder
CoreWebView2Environment environment = await CoreWebView2Environment.CreateWithOptionsAsync(
    browserFolder, userDataFolder, environmentOptions);

// ...

this.WebView2.EnsureCoreWebView2Async(environment);
```


<!-- ---------- -->
###### Disabling SmartScreen by using an environment variable

We no longer recommend using an environment variable.  Use the above API code-based approach instead.

* `Environment.SetEnvironmentVariable("WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS", "--disable-features=msSmartScreenProtection");`

This environment variable must be set prior to `CoreWebView2` creation, which occurs when the [WebView2.Source property](/windows/windows-app-sdk/api/winrt/microsoft.ui.xaml.controls.webview2.source#microsoft-ui-xaml-controls-webview2-source) is initially set or the [WebView2.EnsureCoreWebView2Async method](/windows/windows-app-sdk/api/winrt/microsoft.ui.xaml.controls.webview2.ensurecorewebview2async#microsoft-ui-xaml-controls-webview2-ensurecorewebview2async) is initially called.


<!-- ------------------------------ -->
#### Setting DefaultBackgroundColor

In WebView2 for WinUI 3, the `DefaultBackgroundColor` setting exists on the WebView2 XAML object.  For example:

```csharp
public MainWindow()
{
    this.InitializeComponent();
    MyWebView.DefaultBackgroundColor = Colors.LightBlue;
}
```


<!-- ------------------------------ -->
#### Transparency

WinUI 3 doesn't support transparent backgrounds.  See [Transparent background support for WebView2? · Issue #2992](https://github.com/microsoft/microsoft-ui-xaml/issues/2992).


<!-- ====================================================================== -->
## See also
<!-- all links in article -->

microsoft-ui-xaml Repo > Issues
* [WinUI3 WebView2 with a custom CoreWebView2Environment](https://github.com/microsoft/microsoft-ui-xaml/issues/6150).
* [Transparent background support for WebView2? · Issue #2992](https://github.com/microsoft/microsoft-ui-xaml/issues/2992)

Windows apps docs:
* [1.5.0-experimental2](/windows/apps/windows-app-sdk/experimental-channel#version-15-experimental-150-experimental2)

Windows App SDK Reference:
* [WebView2.EnsureCoreWebView2Async](/windows/windows-app-sdk/api/winrt/microsoft.ui.xaml.controls.webview2.ensurecorewebview2async)
* [WebView2.Source property](/windows/windows-app-sdk/api/winrt/microsoft.ui.xaml.controls.webview2.source#microsoft-ui-xaml-controls-webview2-source)
* [WebView2.EnsureCoreWebView2Async method](/windows/windows-app-sdk/api/winrt/microsoft.ui.xaml.controls.webview2.ensurecorewebview2async#microsoft-ui-xaml-controls-webview2-ensurecorewebview2async) 

WebView2 Reference:
* [CoreWebView2ControllerOptions](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controlleroptions)
* [CoreWebView2Environment](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment)
* [CoreWebView2EnvironmentOptions](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions)

Windows Security docs:
* [SmartScreen](/windows/security/threat-protection/microsoft-defender-smartscreen/microsoft-defender-smartscreen-overview) 
