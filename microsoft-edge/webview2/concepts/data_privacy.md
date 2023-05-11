---
title: Data and Privacy in WebView2
description: Overview of WebView2 Data Collection and Practices. 
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 05/03/2023
---
# Data and Privacy in WebView2 

## Background
The WebView2 team tracks data to keep WebView2 secure and up to date, diagnose issues and improve WebView2 as a product.
Developers consent to this data collection in the WebView2 Runtime Terms and Conditions License. Additionally, we follow the standards outlined in the [Microsoft Edge Privacy Whitepaper](https://learn.microsoft.com/en-us/microsoft-edge/privacy-whitepaper/).

In general, all of our data collection goes through the same strict standards as diagnostic data for Microsoft Edge. The main telemetry sources are Chromium and Edge telemetry infrastructure, Windows data reporting, and Watson (Microsoft Internal) infrastructure to collect crash dumps.
With any data the WebView2 team collects, we comply/conform with the laws and regulations about best privacy practices, and have guardrails to protect against privacy issues.

## Optional Diagnostic Data

WebView2 is considered a Windows component, and the data collection consent is governed by Windows Diagnostic data setting on Windows 10 & 11 as a centralized switch.
End users are empowered to control the data collection of WebView2 and can do so via toggling the Windows Diagnostic data setting on Windows 10 & 11. Developers are welcome to convey this to their end users and ask them to use the Windows Diagnostic data setting to fit the end user’s preference.
Developers currently have no control over this Windows Diagnostic data setting, similar to the Windows APIs developers use.

When the Windows Diagnostic data setting is enabled, WebView2 related data including API usage, SDK usage, and creation failure is collected. When this setting is enabled, browser diagnostic data will be collected; however, personalization data will not be collected. Only browser events that are relevant to WebView2 will be collected. Regardless of the Windows Diagnostic data setting, WebView2 collects [Required data](https://support.microsoft.com/en-us/windows/diagnostics-feedback-and-privacy-in-windows-28808a2b-a31b-dd73-dcd3-4559a5199319) which is necessary to maintain performance and reliability.

There are two APIs that exist to give customers more control over data collection: [Disable SmartScreen](https://github.com/MicrosoftEdge/WebView2Feedback/blob/main/specs/IsSmartScreenRequired.md) and [Custom Crash Reports](https://github.com/MicrosoftEdge/WebView2Feedback/blob/main/specs/DisableCrashReporting.md).

## SmartScreen

Microsoft Defender SmartScreen ("SmartScreen") is enabled by default. If you do not disable SmartScreen, you must provide notice to all users that your software includes Microsoft Defender SmartScreen and collects and sends the end user’s information to Microsoft as disclosed in [Microsoft’s Privacy Statement](https://aka.ms/privacy) and the [Microsoft Edge Privacy Whitepaper](https://learn.microsoft.com/en-us/microsoft-edge/privacy-whitepaper#smartscreen). All other services in **edge://settings/privacy** are turned off.