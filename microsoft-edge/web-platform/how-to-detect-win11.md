---
description: This article describes how to detect Microsoft Edge data with user-agent client hints and the user-agent string
title: How to Detect Windows 11 Using User-Agent Client Hints 
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/14/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, compatibility, web platform, user-agent string, ua string, user-agent client hints, user agent client hints, ua client hints, ua ch, windows 11, win11, detecting windows 11, windows detection
---
# Detecting Windows 11 using User-Agent Client Hints

Sites can use User Agent information sent from the browser to detect information such as browser brand, version, platform, and more. Today, there are two methods for sites to access user agent info: via User Agent Strings (legacy), and User Agent Client Hints (recommended). For detailed documentation on these mechanisms, please see [How to detect Microsoft Edge](UserAgentGuidance) .

To differentiate users using Windows 11 vs Windows 10, starting in Edge94 UA Client Hints will reflect the following:

| Header | Windows 10 | Windows 11 |
|:--- |:--- |:--- |
| **Sec-CH-UA-Platform** | `Windows` | `Windows` |
| **Sec-CH-UA-PlatformVersion** | `10.0.0` and above| `13.0.0` and above|

Unfortunately, User Agent strings will not be updated to differentiate Windows 11, and in general Microsoft does not recommend using User Agent strings for retrieving user agent data. For browsers who do not support UA Client Hints, sites won't be able to differentiate between Windows 10 and Windows 11.

## Browsers Supporting User-Agent Client Hints 
The following table reflects browsers which enable differentiation, and how OS platform information can be accessed:

| Browser | Supports Client Hints | Alternative Detection Methods |
|:--- |:--- |:--- |
| Microsoft Edge 94+ | Yes | - |
| Chrome 94+ | Yes | - |
| Opera | Yes | - |
| Firefox | No | None |
| Internet Explorer 11 | No | None |
| Microsoft Edge Legacy | No | window.external.getHostEnvironmentValue |
| Safari | No | N/A |


## Code Sample
The following is a code sample for detecting Windows 11: 

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
> We recommend developers to **not** use `parseFloat()` to perform platformVersion checks as potential formatting changes could lead to incorrect results.

## Previous Windows Versions
To detect older Windows versions, the following table lists corresponding values for PlatformVersion in User-Agent Client Hints: 

|Version	| PlatformVersion |
|:--- |:--- |:--- |
| Win7/8/8.1 |	0 |
| Win10 1507 |	1 |
| Win10 1511 |	2 | 
| Win10 1607 |	3 |
| Win10 1703 |	4 |
| Win10 1709 |	5 |
| Win10 1803 |	6 |
| Win10 1809 |	7 |
| Win10 1903 |	8 |
| Win10 1909 |	8 |
| Win10 2004 |	10 |
| Win10 20H2 |	10 |
| Win10 21H1 |	10 |
| Win11 |	13+ |

<!-- links -->

[UserAgentGuidance]: https://docs.microsoft.com/en-us/microsoft-edge/web-platform/user-agent-guidance "Detecting Microsoft Edge from your website"

