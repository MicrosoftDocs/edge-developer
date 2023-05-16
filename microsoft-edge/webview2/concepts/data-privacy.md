---
title: Data and privacy in WebView2
description: WebView2 data collection and practices, privacy, and the 'Diagnostic data' setting.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 05/16/2023
---
# Data and privacy in WebView2

The WebView2 team tracks data to keep WebView2 secure and up to date, diagnose issues, and improve WebView2. This article is for WebView2 developers.
WebView2 developers consent to this data collection in the WebView2 Runtime Terms and Conditions License. Additionally, WebView2 follows the standards outlined in the [Microsoft Edge Privacy Whitepaper](../../privacy-whitepaper/index.md).

In general, WebView2 data collection goes through the same strict standards as Microsoft Edge data collection. The main telemetry sources are Chromium and Microsoft Edge telemetry infrastructure, Windows data reporting, and Watson (Microsoft Internal) infrastructure to collect crash dumps.
Any WebView2 data collection complies with the laws, regulations, and best practices for privacy, and WebView2 has mechanisms to ensure privacy.


<!-- ====================================================================== -->
## Optional diagnostic data

WebView2 is considered a Windows component, and the data collection consent is governed by the Windows **Settings > Privacy & security > Diagnostics & feedback > Diagnostic data** setting on Windows 10 and 11 as a centralized switch.
Users can control the data collection of WebView2 through the Windows **Diagnostic data** setting on Windows 10 and 11. As a developer, you are welcome to convey this to your users and invite them to use the Windows **Diagnostic data** setting to fit their preference.
WebView2 developers have no control over the Windows **Diagnostic data** setting. This is similar to the Windows APIs.

When the Windows **Diagnostic data** setting is turned **On**, WebView2-related data including API usage, SDK usage, and creation failure is collected. When this setting is **On**, browser diagnostic data is collected; however, personalization data is not collected. Only browser events that are relevant to WebView2 are collected. Regardless of the Windows **Diagnostic data** setting, WebView2 collects required data that's necessary to maintain performance and reliability; see [Diagnostics, feedback, and privacy in Windows](https://support.microsoft.com/en-us/windows/diagnostics-feedback-and-privacy-in-windows-28808a2b-a31b-dd73-dcd3-4559a5199319).

The following APIs control data collection:

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.IsReputationCheckingRequired Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.isreputationcheckingrequired)
* `CoreWebView2EnvironmentOptions` Class:
   * [CoreWebView2EnvironmentOptions.IsCustomCrashReportingEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.iscustomcrashreportingenabled)
* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.FailureReportFolderPath Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.failurereportfolderpath)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.IsReputationCheckingRequired Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings#isreputationcheckingrequired)
* `CoreWebView2EnvironmentOptions` Class:
   * [CoreWebView2EnvironmentOptions.IsCustomCrashReportingEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions#iscustomcrashreportingenabled)
* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.FailureReportFolderPath Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#failurereportfolderpath)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2Settings` interface:
   * [ICoreWebView2Settings::get_IsReputationCheckingRequired](/microsoft-edge/webview2/reference/win32/icorewebview2settings8#get_isreputationcheckingrequired)
   * [ICoreWebView2Settings::put_IsReputationCheckingRequired](/microsoft-edge/webview2/reference/win32/icorewebview2settings8#put_isreputationcheckingrequired)
* `ICoreWebView2EnvironmentOptions3` interface:
   * [ICoreWebView2EnvironmentOptions3::get_IsCustomCrashReportingEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions3#get_iscustomcrashreportingenabled)
* `ICoreWebView2Environment11` interface:
   * [ICoreWebView2Environment11::get_FailureReportFolderPath](/microsoft-edge/webview2/reference/win32/icorewebview2environment11#get_failurereportfolderpath)

---

<!-- ====================================================================== -->
## SmartScreen

Microsoft Defender SmartScreen ("SmartScreen") is enabled by default. If you don't disable SmartScreen, you must provide notice to all users that your software includes Microsoft Defender SmartScreen and collects and sends the user's information to Microsoft as disclosed in [Microsoft Privacy Statement](https://aka.ms/privacy) and the [Microsoft Edge Privacy Whitepaper](../../privacy-whitepaper/index.md#smartscreen). Generally, all other services in `edge://settings/privacy` are turned off, for WebView2.

The managing SmartScreen API includes the `IsReputationCheckingRequired` property, which controls whether SmartScreen is enabled.  See [Smartscreen](../concepts/overview-features-apis.md#smartscreen) in _Overview of WebView2 features and APIs_.


<!-- ====================================================================== -->
## See also

* [Spec: Disable SmartScreen](https://github.com/MicrosoftEdge/WebView2Feedback/blob/main/specs/IsSmartScreenRequired.md) - about `IsReputationCheckingRequired`.
* [Spec: Custom Crash Reports](https://github.com/MicrosoftEdge/WebView2Feedback/blob/main/specs/DisableCrashReporting.md) - about `IsCustomCrashReportingEnabled` and `FailureReportFolderPath`.
* [Security and privacy](../concepts/overview-features-apis.md#security-and-privacy) in _Overview of WebView2 features and APIs_.
