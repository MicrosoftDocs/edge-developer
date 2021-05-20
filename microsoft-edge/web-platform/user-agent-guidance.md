---
description: This article provides documentation on the Microsoft Edge user agent client hints and user agent string
title: How to detect Microsoft Edge in your website
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/19/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, compatibility, web platform, user agent string, ua string, ua overrides, user-agent client hints, user agent client hints, ua client hints, ua ch
---
# How to detect Microsoft Edge in your website  

Browsers provide mechanisms for websites to detect browser information such as brand and version number.  The mechanisms also detect other device characteristics like the host operating system.  Two such mechanisms supported on Microsoft Edge are [User-Agent Client Hints](#user-agent-client-hints) and [User-Agent strings](#user-agent-string).  After decades of use, User-Agent strings are outdated and have a long history as the cause of website compatibility issues.  Instead, the Microsoft Edge team recommends you use an improved mechanism to retrieve browser information named [User-Agent Client Hints](#user-agent-client-hints).  This article outlines the two mechanisms Microsoft Edge supports for retrieving user agent information.  

|  | Server-side | Client-side |  
|:--- |:--- |:--- | 
| **User-Agent Client Hints** \(recommended\) | `Sec-CH-UA` HTTPS header | `navigator.userAgentData` JavaScript method |  
| **User-Agent string** \(legacy\) | `User-Agent` HTTPS header | `navigator.userAgent` JavaScript method |  

Microsoft recommends that you use [feature detection][MdnLearnToolsTestingCrossBrowserTestingFeatureDetection] whenever possible for the following reasons.  

*   Improve code maintainability.  
*   Reduce code fragility.  
*   Reduce code breakage from changes to the User-Agent string.  
    
When [feature detection][MdnLearnToolsTestingCrossBrowserTestingFeatureDetection] isn't applicable and you must use user agent detection, use the following format to detect Microsoft Edge user agent on Windows and Android.  

## User-Agent Client Hints  

Starting in Microsoft Edge version 90, access browser information in a cleaner, more privacy-preserving way.  

### User-Agent Client Hints HTTPS Header  

By default, Chromium browsers including Microsoft Edge send the `Accept-CH-UA` response header in the following format.  

```https
Sec-CH-UA: "Chromium";v="91", "Microsoft Edge";v="91","Dummy;Browser Brand";v="99"
Sec-CH-UA-Mobile: ?0
```  

> [!NOTE]
> Client Hints are only sent over secure connections using `HTTPS`.  

The following low entropy hints are sent by default.  If you need to access more information, send one of the following request headers.  

#### User-Agent request and response headers  

| Request header | Example response value |  
|:--- |:--- |  
| `Sec-CH-UA` | `"Chromium";v="91", "Microsoft Edge";v="91","GREASE";v="99"` |  
| `Sec-CH-UA-Mobile` | `false` |  
| `Sec-CH-UA-Full-Version` | `91.0.866.0` |  
| `Sec-CH-UA-Platform` | `Windows` |  
| `Sec-CH-UA Platform-Version` | `10.0` |  
| `Sec-CH-UA-Arch` | `x86` |  
| `Sec-CH-UA-Model` |  |  

### User-Agent Client Hints JavaScript API  

The default response value from `navigator.userAgentData` uses the following format.  

```javascript
{ brands: [ {brand: "Chromium","version":"91"}, {brand: "Microsoft Edge","version":"91"}, {brand: "GREASE","version":"99"}, ]
mobile: false }
```  

If you need to access more detailed information, use the [getHighEntropyValues()][GithubWicgUaClientHintsGethighentropyvalues] method.  

:::row:::
   :::column span="":::
      The following code snippet sends a request.  
   :::column-end:::
   :::column span="":::
      To receive the following response.  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="":::
      ```javascript
         navigator.userAgentData.getHighEntropyValues(
             ["architecture", "model", "platform", "platformVersion", "uaFullVersion"])
             .then(ua => { console.log(ua) });
      ```  
   :::column-end:::
   :::column span="":::
      ```javascript
      {architecture: "x86", 
      model: "", 
      platform: "Windows", 
      platformVersion: "10.0", 
      uaFullVersion: "92.0.866.0"}
      ```  
   :::column-end:::
:::row-end:::  

## Recommended uses of User-Agent Client Hints  

The set of brands and the associated display order change over time, so you should never hard-code indices into the array of returned brands.  To help ensure you spot similar issues in your website early, the browser includes a `GREASE` brand value that changes over time and is formatted to break because of common string parsing issues.  

If you're prevented from using [feature detection][MdnLearnToolsTestingCrossBrowserTestingFeatureDetection], don't use a hardcoded list of known Chromium-based browsers for verification.  Examples of hardcoded browser names include `Microsoft Edge` and `Google Chrome`.  Reasons why [feature detection][MdnLearnToolsTestingCrossBrowserTestingFeatureDetection] isn't applicable may include the following situation.  

*   A fix for a Chromium bug in a later version must be avoided and the affected browsers are difficult to detect outside of a verification of the brand and version.  
    
Instead, you should verify the `Chromium` brand, which ensures your detection applies to all affected Chromium-based browsers.  


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

## User agent string  

Wherever possible, Microsoft recommends you minimize your use of Microsoft Edge browser detection logic based on the user agent string.  If you have a good reason to detect the user agent, the Microsoft Edge team recommends you use [User-Agent Client Hints](#user-agent-client-hints) as the primary detection logic.  [User-Agent Client Hints](#user-agent-client-hints) also reduces the required number of parsed strings.  However, for legacy reference, the following format is used for the User-Agent string.  

:::row:::
   :::column span="":::
      On Windows, the `User-Agent` HTTP request header uses the following format.  
   :::column-end:::
   :::column span="":::
      On Android, the `User-Agent` HTTP request header uses the following format.  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="":::
      ```https
      User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46
      ```  
   :::column-end:::
   :::column span="":::
      ```https
      User-Agent: Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Mobile Safari/537.36 Edg/90.0.818.46
      ```  
   :::column-end:::
:::row-end:::  

The response value from `navigator.userAgent` method uses the following format.  

```javascript
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4501.0 Safari/537.36 Edg/91.0.866.0"
```  

Platform identifiers change based on the operating system used, and the version numbers also increment as time passes.  The format is the same as the Chromium user agent with the addition of a new `Edg` token at the end.  Microsoft chose the `Edg` token to avoid compatibility issues caused by `Edge` string, which was used legacy Microsoft Edge browser based on EdgeHTML.  The `Edg` token is also consistent with [existing tokens][WindowsBlogsMsedgedev20171005MicrosoftEdgeIosAndroidDeveloper] used on iOS and Android.

## Map the user agent string to browser name  

Map the user agent string tokens to a more human-readable browser name to use in code.  It's a common pattern on the web today.  When you map the new `Edg` token to a browser name, Microsoft recommends that you use a different name than the one used for the legacy Microsoft Edge browser to avoid accidentally applying any legacy workarounds that aren't applicable to Chromium-based browsers.

## User Agent overrides  

Sometimes, a website doesn't recognize the new Microsoft Edge user agent.  As a result, a set of the features of the website may not work correctly.  When Microsoft is notified about the types of issues, Microsoft contacts you \(a website owner\) and informs you about the updated user agent.  

You may need more time to update and test the user agent detection logic for your website to address the issues reported by Microsoft.  To maximize compatibility for your users, the Microsoft Edge Beta and Stable channels use a list of user agent overrides.  Use the user agent overrides while you update your website.  The list of user agent overrides provided by Microsoft.  

The overrides specify new user agent values that Microsoft Edge sends instead of the default user agent for specific websites.  To display the list of user agent overrides that are currently applied, complete the following actions.  

1.  Open the Microsoft Edge Beta or Stable channel.  
1.  Navigate to `edge://compat/useragent`.  
    
The Microsoft Edge Canary and Dev channels don't currently receive user agent overrides.  The Microsoft Edge Canary and Dev channels provide environments that use the default Microsoft Edge user agent.  Use the Microsoft Edge Canary and Dev channels to easily reproduce issues on your website caused by the default Microsoft Edge user agent.  To turn off user agent overrides in the Microsoft Edge Beta or Stable channels, complete the following actions.  

1.  Open your command-line app.  
1.  Copy and paste the following code snippet.  
    
    ```shell
    --disable-domain-action-user-agent-override
    ```  
    
1.  Run the Microsoft Edge app using the code snippet.  
    
    ```shell
    {path/to/microsoft/edge.ext} --disable-domain-action-user-agent-override
    ```  
    
<!-- links -->  

[WindowsBlogsMsedgedev20171005MicrosoftEdgeIosAndroidDeveloper]: https://blogs.windows.com/msedgedev/2017/10/05/microsoft-edge-ios-android-developer "Microsoft Edge for iOS and Android: What developers need to know | Microsoft Windows Blogs"  

[GithubWicgUaClientHintsGethighentropyvalues]: https://wicg.github.io/ua-client-hints#getHighEntropyValues "4.1.5. getHighEntropyValues method - User-Agent Client Hints | GitHub"  

[MdnLearnToolsTestingCrossBrowserTestingFeatureDetection]: https://developer.mozilla.org/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection "Implementing feature detection | MDN"  
