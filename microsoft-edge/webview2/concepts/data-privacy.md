---
title: Data and privacy in WebView2
description: WebView2 data collection and practices, privacy, and the 'Diagnostic data' setting.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 05/03/2023
---
# Data and privacy in WebView2

The WebView2 team tracks data to keep WebView2 secure and up to date, diagnose issues, and improve WebView2. This article is for WebView2 developers.
WebView2 developers consent to this data collection in the WebView2 Runtime Terms and Conditions License. Additionally, WebView2 follows the standards outlined in the [Microsoft Edge Privacy Whitepaper](../../privacy-whitepaper/index.md).

In general, WebView2 data collection goes through the same strict standards as Microsoft Edge data collection. The main telemetry sources are Chromium and Microsoft Edge telemetry infrastructure, Windows data reporting, and Watson (Microsoft Internal) infrastructure to collect crash dumps.
Any WebView2 data collection complies with the laws, regulations, and best practices for privacy, and WebView2 has guardrails to protect against privacy issues.


<!-- ====================================================================== -->
## Optional diagnostic data

WebView2 is considered a Windows component, and the data collection consent is governed by the Windows **Settings > Privacy & security > Diagnostics & feedback > Diagnostic data** setting on Windows 10 and 11 as a centralized switch.
End users can control the data collection of WebView2 through the Windows **Diagnostic data** setting on Windows 10 and 11. As a developer, you are welcome to convey this to your users and invite them to use the Windows **Diagnostic data** setting to fit their preference.
WebView2 developers have no control over the Windows **Diagnostic data** setting. This is similar to the Windows APIs.

When the Windows **Diagnostic data** setting is turned **On**, WebView2-related data including API usage, SDK usage, and creation failure is collected. When this setting is **On**, browser diagnostic data is collected; however, personalization data is not collected. Only browser events that are relevant to WebView2 are collected. Regardless of the Windows **Diagnostic data** setting, WebView2 collects [Required data](https://support.microsoft.com/en-us/windows/diagnostics-feedback-and-privacy-in-windows-28808a2b-a31b-dd73-dcd3-4559a5199319) which is necessary to maintain performance and reliability.

There are two APIs that exist to give developers more control over data collection: [Disable SmartScreen](https://github.com/MicrosoftEdge/WebView2Feedback/blob/main/specs/IsSmartScreenRequired.md) and [Custom Crash Reports](https://github.com/MicrosoftEdge/WebView2Feedback/blob/main/specs/DisableCrashReporting.md). See [Security and privacy](../concepts/overview-features-apis.md#security-and-privacy) in _Overview of WebView2 features and APIs_.


<!-- ====================================================================== -->
## SmartScreen

Microsoft Defender SmartScreen ("SmartScreen") is enabled by default. If you don't disable SmartScreen, you must provide notice to all users that your software includes Microsoft Defender SmartScreen and collects and sends the end user's information to Microsoft as disclosed in [Microsoft Privacy Statement](https://aka.ms/privacy) and the [Microsoft Edge Privacy Whitepaper](../../privacy-whitepaper/index.md#smartscreen). All other services in `edge://settings/privacy` should be turned off.

See [Security and privacy](../concepts/overview-features-apis.md#security-and-privacy) in _Overview of WebView2 features and APIs_.


<!-- ====================================================================== -->
## See also

* [Security and privacy](../concepts/overview-features-apis.md#security-and-privacy) in _Overview of WebView2 features and APIs_.
* [Microsoft Edge Privacy Whitepaper](../../privacy-whitepaper/index.md)
