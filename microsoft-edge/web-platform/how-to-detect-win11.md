---
description: How to detect Microsoft Edge data with User-Agent Client Hints and User-Agent strings.
title: Detecting Windows 11 using User-Agent Client Hints
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/15/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, compatibility, web platform, user-agent string, ua string, user-agent client hints, user agent client hints, ua client hints, ua ch, windows 11, win11, detecting windows 11, windows detection
---
# Detecting Windows 11 using User-Agent Client Hints

<!--
Restrict the lexicon to these forms:
User-Agent string
user agent string
User-Agent Client Hints
-->

Websites can use User Agent information that's sent from the browser to detect information such as browser brand, version, and platform. There are two approaches for sites to access User Agent information:
*  User-Agent strings (legacy).
*  User-Agent Client Hints (recommended).

For details about these two approaches, see [Detecting Microsoft Edge from your website](user-agent-guidance.md).

To differentiate between users who are using Windows 11 and Windows 10, starting in Microsoft Edge version 94, User-Agent Client Hints reflects the following header-field values:

| Header field | Value that indicates Windows 10 | Value that indicates Windows 11 |
| --- | --- | --- |
| `Sec-CH-UA-Platform` | `Windows` | `Windows` |
| `Sec-CH-UA-PlatformVersion` | `10.0.0` and above | `13.0.0` and above |

Unfortunately, User-Agent strings won't be updated to differentiate between Windows 11 and Windows 10.  We don't recommend using User-Agent strings to retrieve user agent data.  For browsers which don't support User-Agent Client Hints, sites won't be able to differentiate between Windows 11 and Windows 10.


<!-- ====================================================================== -->
## Browsers that support User-Agent Client Hints

The following table shows which browsers support differentiating between Windows 11 and Windows 10.

| Browser | Supports User-Agent Client Hints? | Alternative detection methods |
| --- | --- | --- |
| Microsoft Edge 94+ | Yes | - |
| Chrome 94+ | Yes | - |
| Opera | Yes | - |
| Firefox | No | None |
| Internet Explorer 11 | No | None |
| Microsoft Edge Legacy | No | window.external.getHostEnvironmentValue |
| Safari | No | N/A |


<!-- ====================================================================== -->
## Sample code for detecting Windows 11

The following code detects Windows 11:

```javascript
navigator.userAgentData.getHighEntropyValues(
 ["platform",
  "platformVersion"])
 .then(ua => {
   if (ua.platform === "Windows" && ua.platformVersion.split('.')[0] >= 13) {
     console.log("Windows 11+");
   }
   else if (ua.platform === "Windows") {
     console.log("Windows 10 or lower");
   }
 });

```

> [!NOTE]
> We recommend that you don't use `parseFloat()` to perform `platformVersion` checks, because potential formatting changes could lead to incorrect results.


<!-- ====================================================================== -->
## Previous Windows versions

To detect older versions of Windows, use the following values for `platformVersion` in User-Agent Client Hints:

| Version | `platformVersion` |
| --- | --- | --- |
| Win7/8/8.1 | 0 |
| Win10 1507 | 1 |
| Win10 1511 | 2 |
| Win10 1607 | 3 |
| Win10 1703 | 4 |
| Win10 1709 | 5 |
| Win10 1803 | 6 |
| Win10 1809 | 7 |
| Win10 1903 | 8 |
| Win10 1909 | 8 |
| Win10 2004 | 10 |
| Win10 20H2 | 10 |
| Win10 21H1 | 10 |
| Win11 | 13+ |
