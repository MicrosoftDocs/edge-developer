---
description: How to differentiate Windows 10 and Windows 11 using User-Agent Client Hints
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
user agent information
-->

Websites can use user agent information sent from the browser to detect brand, version, device platform, and more. There are two approaches for sites to access user agent information:
*  User-Agent strings (legacy).
*  User-Agent Client Hints (recommended).

For details about these two approaches, see [Detecting Microsoft Edge from your website](user-agent-guidance.md).

In Microsoft Edge and Chrome, sites can differentiate between users on Windows 11 and Windows 10 via User-Agent Client Hints (UA-CH). This information can be found in the following UA-CH request headers:

| Header field | Values that indicate Windows 10 | Values that indicate Windows 11 |
| --- | --- | --- |
| `Sec-CH-UA-Platform` | `Windows` | `Windows` |
| `Sec-CH-UA-Platform-Version` | values between `1.0.0` and `10.0.0` | `13.0.0` and above |

User-Agent strings won't be updated to differentiate between Windows 11 and Windows 10.  We don't recommend using User-Agent strings to retrieve user agent data.  Browsers that do not support User-Agent Client Hints will not be able to differentiate between Windows 11 and Windows 10.


<!-- ====================================================================== -->
## Browsers that support User-Agent Client Hints

The following table shows which browsers support differentiating between Windows 11 and Windows 10.

| Browser | Supports differentiation via User-Agent Client Hints? |
| --- | --- |
| Microsoft Edge 94+ | Yes |
| Chrome 95+ | Yes |
| Opera | Yes |
| Firefox | No |
| Internet Explorer 11 | No |


<!-- ====================================================================== -->
## Sample code for detecting Windows 11

The following code detects Windows 11:

```javascript
navigator.userAgentData.getHighEntropyValues(["platformVersion"])
 .then(ua => {
   if (navigator.userAgentData.platform === "Windows") {
     const majorPlatformVersion = parseInt(ua.platformVersion.split('.')[0]);
     if (majorPlatformVersion >= 13) {
       console.log("Windows 11 or later");
      }
      else if (majorPlatformVersion > 0) {
        console.log("Windows 10");
      }
      else {
        console.log("Before Windows 10");
      }
   }
   else {
     console.log("Not running on Windows");
   }
 });

```


<!-- ====================================================================== -->
## Detecting specific Windows versions

To detect specific versions of Windows, use the following values for `platformVersion` in User-Agent Client Hints:

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
