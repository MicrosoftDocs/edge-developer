---
title: Data & Privacy in WebView2
description: Overview of WebView2 Data Collection and Practices. 
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 05/03/2023
---
# Data & Privacy in WebView2 

## Background
The WebView2 team tracks data to help understand and prioritize our customers' requirements, diagnose and debug issues, and overall improve WebView2 as a product.
Developers consent to this data collection in the WebView2 Runtime Terms and Conditions License, or in the Windows license. Additionally, we follow the standards outlined in the [Microsoft Edge Privacy Whitepaper](https://learn.microsoft.com/en-us/microsoft-edge/privacy-whitepaper/).

In general, all of our data collection goes through the same strict standards as Microsoft Edge. The main telemetry sources are Chromium and Edge telemetry infrastructure, Windows data reporting, and Watson (Microsoft Internal) infrastructure to collect crash dumps.
With any data the WebView2 team collects, we comply/conform with the laws and regulations about best privacy practices, and have guardrails to protect against privacy issues.

## Optional Diagnostic Data

WebView2 and Edge respect the Windows Optional Diagnostic Data toggle, so end users have control over any optional data WebView2 collects. This toggle can only be modified by the end user. The only mandatory data that is collected is the [required events](https://learn.microsoft.com/en-us/windows/privacy/required-windows-11-diagnostic-events-and-fields) which are required from any app running on Windows.

WebView2 is considered a Windows component, and the data collection consent is governed by Windows Diagnostic data setting on Windows 10 & 11 as a centralized switch.
End users are empowered to control the data collection of WebView2 and can do so via toggling the Windows Diagnostic data setting on Windows 10 & 11. On Windows 7/8.1, given there is no Windows Diagnostic data setting, we treat this as no consent for optional data and thus optional diagnostic data is not collected. There is very limited required data that the OS always collects, unless you're on some specific SKUs. Developers are welcome to convey this to their end users and ask them to use the Windows Diagnostic data setting to fit the end user’s preference.
Developers currently have no control over this Windows Diagnostic data setting, similar to the Windows APIs developers use.

When the Windows Diagnostic data setting is enabled, WebView2 related data including API usage, SDK usage, and creation failure is collected. When this setting is enabled, browser diagnostic data will be collected; however, personalization data will not be collected. Only browser events that are relevant to WebView2 will be collected.

There are two APIs that exist to give customers more control over data collection: [Disable SmartScreen](https://github.com/MicrosoftEdge/WebView2Feedback/blob/main/specs/IsSmartScreenRequired.md) and [Custom Crash Reports](https://github.com/MicrosoftEdge/WebView2Feedback/blob/main/specs/DisableCrashReporting.md).

## SmartScreen

Microsoft Defender SmartScreen ("SmartScreen") is enabled by default. If you do not disable SmartScreen, you must provide notice to all users that your software includes Microsoft Defender SmartScreen and collects and sends the end user’s information to Microsoft as disclosed in [Microsoft’s Privacy Statement](https://aka.ms/privacy) and the [Microsoft Edge Privacy Whitepaper](https://learn.microsoft.com/en-us/microsoft-edge/privacy-whitepaper#smartscreen). All other services in **edge://settings/privacy** are turned off.