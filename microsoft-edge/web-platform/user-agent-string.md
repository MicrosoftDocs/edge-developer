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

# Microsoft Edge User Agent String (Desktop)  

A user agent \(UA\) string is able to be used to detect what version of a specific browser is being used on a certain operating system.  Like other browsers, Microsoft Edge includes this information in the `User-Agent` HTTP header whenever it makes a request to a site.  It may also be accessed via JavaScript by querying the value of `navigator.userAgent`.  

Microsoft recommends that web developers make use of [feature detection](https://developer.mozilla.org/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection) whenever possible to improve code maintainability, reduce code fragility, and eliminate the risk of code breakage in the event of future UA string updates.  

For cases where feature detection is not applicable and UA detection must be used, the format of the Microsoft Edge UA on desktop is as follows:

The `User-Agent` request header is in the following format:

```http
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.74 Safari/537.36 Edg/79.0.309.43
``` 
The return value from `navigator.userAgent` is in the following format:

```javascript
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.74 Safari/537.36 Edg/79.0.309.43"
```  

Platform identifiers change based on the operating system being used, and version numbers also increment as time passes.  This format is the same as the Chromium UA with the addition of a new `Edg` token at the end.  Microsoft selected the `Edg` token to avoid compatibility issues that may be caused by using the string `Edge`, which is used by the version of Microsoft Edge based on EdgeHTML.  The `Edg` token is also consistent with [existing tokens](https://blogs.windows.com/msedgedev/2017/10/05/microsoft-edge-ios-android-developer/) used on iOS and Android.  

## User Agent Overrides  

Sometimes, a website does not recognize the updated version of the Microsoft Edge UA.  As a result, a set of the features of that website may not work correctly.  When Microsoft is notified about these types of issues, website owners are contacted and informed about the updated UA.  

The sites often need some time to update and test the UA detection logic to address the issues that Microsoft reports to site owners.  In these cases, Microsoft uses a list of UA overrides in our Beta channel to maximize compatibility for users who access these sites.  The overrides specify new UA values that Microsoft Edge should send instead of the default UA for specific sites.  You are able to view the list of UA overrides that are currently being applied by navigating to `edge://compat/useragent` in Microsoft Edge Beta.  

Our Canary and Dev channels do not currently receive UA overrides so that web developers have an environment where they can easily reproduce issues on their sites that are caused by the default Microsoft Edge UA.  If for some reason you require the ability to disable UA overrides in Microsoft Edge Beta, you may run `msedge.exe` using the following command line argument:  

```shell
--disable-domain-action-user-agent-override
```  
