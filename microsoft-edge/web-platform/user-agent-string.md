---
description: This page provides documentation on the Microsoft Edge user agent string
title: Microsoft Edge User Agent String
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 12/16/2019
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, compatibility, web platform, user agent string, ua string, ua overrides
---

# Retrieving User Agent Data in Microsoft Edge 

The User Agent \(UA\) can be used detect what version of a specific browser is being used on a certain operating system. Microsoft Edge offers two mechanisms for retrieving User Agent information: via User Agent Client Hints (recommended) and the legacy User Agent string. These can be accessed as follows: 

**User Agent Client Hints**
-	*Server-side*: UA Client Hints are sent by default with the `Sec-CH-UA` `HTTPS` header 
-	*Client-side*: UA Client Hints can be accessed via JavaScript by querying the value of `navigator.userAgentData`

**User Agent String**
-	*Server-side*: UA strings are sent by default with the User-Agent `HTTP` header 
-	*Client-side*: UA strings can be accessed via JavaScript by querying the value of `navigator.userAgent`

Microsoft recommends that web developers make use of [feature detection](https://developer.mozilla.org/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection) whenever possible to improve code maintainability, reduce code fragility, and eliminate the risk of code breakage in the event of future UA string updates.  

For cases where feature detection is not applicable and UA detection must be used, the format of the Microsoft Edge UA on desktop is as follows:

## User Agent Client Hints
Starting from Edge90 Stable, developers can access browser information in a cleaner, more privacy preserving way. 

### UA-CH HTTPS Header

By default, Chromium browsers like Edge will send the `Accept-CH-UA` request header in the following format: 

```HTTP
Sec-CH-UA: “Chromium”;v=”91”, “Microsoft Edge”;v=”91”,”GREASE”;v=”99”
Sec-CH-UA-Mobile: ?0
```
Note: Client Hints are only sent over `HTTPS`. 

More information, if needed, can be accessed by sending subsequent requests with the desired headers: 

#### User-Agent Request & Response Headers
| Request Header | Example Response Value |
| ----------- | ----------- |
|`Sec-CH-UA`|`“Chromium”;v=”91”, “Microsoft Edge”;v=”91”,”GREASE”;v=”99"`|
|`Sec-CH-UA-Mobile`|`false`|
|`Sec-CH-UA-Full-Version`|`91.0.866.0`|
|`Sec-CH-UA-Platform`|`Windows`|
|`Sec-CH-UA Platform-Version`|`10.0`|
|`Sec-CH-UA-Arch`|`x86`|
|`Sec-CH-UA-Model`||

### UA-CH JavaScript API

The default return value from `navigator.userAgentData` is in the following format: 

```javascript
{brands: 
    [{brand: “Chromium”,”version”:”91”}, 
    brand: “Microsoft Edge”,”version”:”91”}, 
    brand: “GREASE”,”version”:”99”},]
mobile: false
}
```
More detailed information, if needed, can be accessed with `getHighEntropyValues()`, for example, calling

```javascript
navigator.userAgentData.getHighEntropyValues(
    ["architecture", "model", "platform", "platformVersion", "uaFullVersion"])
    .then(ua => { console.log(ua) });
```

May output the following: 

```javascript
{architecture: "x86", 
model: "", 
platform: "Windows", 
platformVersion: "10.0", 
uaFullVersion: "92.0.866.0"}
```

## Best Practices for Using User Agent Client Hints
Since the order brands appear in may change over time, developers are discouraged from hard-coding static checks for values in specific positions. To further prevent abuse of the brands list, GREASE values may also be sent, consisting of `null`, no value, or random values.

If feature detection cannot be used, we recommend developers check for the Chromium brand as follows: 
```javascript
function isChromium() {
    for (brand_version_pair in navigator.userAgentData.brands) {
 	    if (brand_version_pair.brand == "Chromium") {
            return true;
        }
    }
    return false;
}
```



-------


## User Agent String

Whenever possible, Microsoft recommends developers to refactor any existing browser detection based on the User Agent string to User Agent Client Hints instead. However, for legacy reference, the format of the User Agent string is as follows:

The `User-Agent` request header is in the following format:

```http
User-Agent: Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Mobile Safari/537.36 Edg/90.0.818.46
``` 

The return value from `navigator.userAgent` is in the following format:

```javascript
"Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Mobile Safari/537.36 Edg/90.0.818.46"
```  

Platform identifiers change based on the operating system being used, and version numbers also increment as time passes.  This format is the same as the Chromium UA with the addition of a new `Edg` token at the end.  Microsoft selected the `Edg` token to avoid compatibility issues that may be caused by using the string `Edge`, which is used by the version of Microsoft Edge based on EdgeHTML.  The `Edg` token is also consistent with [existing tokens](https://blogs.windows.com/msedgedev/2017/10/05/microsoft-edge-ios-android-developer/) used on iOS and Android.

## Mapping UA String to Browser Name
Mapping UA string tokens to a more human-readable browser name for use in code is a common pattern on the web today. When mapping the new `Edg` token to a browser name, Microsoft recommends using a different name than the one developers used for the legacy version of Microsoft Edge to avoid accidentally applying any legacy workarounds that are not applicable to Chromium-based browsers.

## User Agent Overrides  

Sometimes, a website does not recognize the updated version of the Microsoft Edge UA.  As a result, a set of the features of that website may not work correctly.  When Microsoft is notified about these types of issues, website owners are contacted and informed about the updated UA.  

The sites often need some time to update and test the UA detection logic to address the issues that Microsoft reports to site owners.  In these cases, Microsoft uses a list of UA overrides in our Beta and Stable channels to maximize compatibility for users who access these sites.  The overrides specify new UA values that Microsoft Edge should send instead of the default UA for specific sites.  You are able to view the list of UA overrides that are currently being applied by navigating to `edge://compat/useragent` in the Beta and Stable channels of Microsoft Edge. 

Our Canary and Dev channels do not currently receive UA overrides so that web developers have an environment where they can easily reproduce issues on their sites that are caused by the default Microsoft Edge UA.  If for some reason you require the ability to disable UA overrides in the Beta or Stable channels of Microsoft Edge, you may run the Microsoft Edge executable using the following command line argument:  

```shell
--disable-domain-action-user-agent-override
```  
