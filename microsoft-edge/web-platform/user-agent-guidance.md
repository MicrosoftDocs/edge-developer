---
description: This article describes how to detect Microsoft Edge data with user agent client hints and user agent string
title: Detecting Microsoft Edge from your website
author: MSEdgeTeam
ms.author: v-vchapel
ms.date: 06/11/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, compatibility, web platform, user agent string, ua string, ua overrides, user-agent client hints, user agent client hints, ua client hints, ua ch, feature detection, browser identification, browser detection, header, https header, verify chromium, detect microsoft edge, detecting microsoft edge
---
# Detecting Microsoft Edge from your website

Accurate browser detection helps website developers display content efficiently. Browsers provide mechanisms for websites to detect browser information such as brand and version number.

The legacy User-Agent String was intended to improve how websites were displayed, but became bloated and misused over time. It includes enough information to covertly track individual users. The new User-Agent Client Hints improve privacy. It only shares browser brand and mobile status by default, and it follows user-configurable privacy settings. But it can still be used to obtain more information than most users realize.

[Feature detection][MdnLearnToolsTestingCrossBrowserTestingFeatureDetection] is the best mechanism for browser identification. Microsoft recommends using it whenever possible to:
* Improve code maintainability.
* Reduce code fragility.  
* Reduce code breakage from changes to the User-Agent String.

Mechanisms for browser detection with code location and identifiers:

|  | Mechanism | Code Location |  
|:--- |:--- |:--- | 
| **1** | **Feature Detection** \(recommended\) | Client-side: `navigator.userAgentData.brands` JavaScript method |
| **2** | **User-Agent Client Hints** \(accepted\) | Server-side: `Sec-CH-UA` HTTPS header |
| | | Client-side: `navigator.userAgentData` JavaScript method |  
| **3** | **User-Agent String** \(legacy\) | Server-side:`User-Agent` HTTPS header | 
| | | Client-side: `navigator.userAgent` JavaScript method |  

This article describes all three methods Microsoft Edge supports for retrieving user agent information.

Implement [feature detection][MdnLearnToolsTestingCrossBrowserTestingFeatureDetection] as described in the following section.

## Feature detection  

Use this method to verify the `Chromium` brand and apply detection to all affected Chromium based browsers.

```javascript
function isChromium() {
    for (brand_version_pair in navigator.userAgentData.brands) {
        if (brand_version_pair.brand == "Chromium"){
            return true;
        }
    }
    return false;
}
```

### Recommended use of feature detection

Brand names and the associated display order change over time. Avoid hard-coding brand names.

If you cannot use [feature detection][MdnLearnToolsTestingCrossBrowserTestingFeatureDetection], don't use a hardcoded list of known Chromium-based browsers for verification. Examples of hardcoded browser names include `Microsoft Edge` and `Google Chrome`.  [Feature detection][MdnLearnToolsTestingCrossBrowserTestingFeatureDetection] may not be available because a fix for a Chromium bug in later versions must be avoided and the affected browsers are difficult to detect.

If [feature detection][MdnLearnToolsTestingCrossBrowserTestingFeatureDetection] is not possible, use the following format of User-Agent Client Hints for Microsoft Edge on Windows and Android.

## User Agent Client Hints

Microsoft Edge supports User-Agent Client Hints starting with version 90.

User-Agent Client Hints easily retrieve basic data such as the browser name and whether or not it is mobile. Also, hints are more likely to be supported in the long term as User-Agent string usage declines.

Employ User-Agent Client Hints when you want to:
- Determine if new browser activity is from the expected user.
- Customize hints or instructions if the user is new to this site.

Do not use User-Agent Client Hints to:
- Block *unsupported* browsers.
- Restrict access to features on your site.

### User Agent Client Hints HTTPS header

When a browser requests a web page from a server, it sends an HTTPS client header request. The server replies with a specific set of HTTPS response header data. User-Agent Client Hints automatically return the brand and mobile attributes. It can easily include additional data.

By default, Chromium browsers including Microsoft Edge send the `Accept-CH-UA` response header in the following format.  

```https
Sec-CH-UA: "Chromium";v="92", "Microsoft Edge";v="92","Placeholder;Browser Brand";v="99"
Sec-CH-UA-Mobile: ?0
```  

The following table shows the available header request hints with sample responses. For example, to discover information such as operating system, include `Sec-CH-UA-Platform` in the header request.
  

| User-Agent Request header | Example User-Agent response value |  
|:--- |:--- |  
| `Sec-CH-UA` | `"Chromium";v="91", "Microsoft Edge";v="91","GREASE";v="99"` |  
| `Sec-CH-UA-Mobile` | `false` |  
| `Sec-CH-UA-Full-Version` | `91.0.866.0` |  
| `Sec-CH-UA-Platform` | `Windows` |  
| `Sec-CH-UA Platform-Version` | `10.0` |  
| `Sec-CH-UA-Arch` | `x86` |  
| `Sec-CH-UA-Model` | `Surface Pro` |  

> [!NOTE]
> User-Agent Client Hints are only sent over secure connections using `HTTPS`.

### User Agent Client Hints JavaScript API  

You can also access User-Agent Client Hints using Javascript on the client side. When you call the default `navigator.userAgentData` it returns the following response.  

```javascript
{ brands: [ {brand: "Chromium","version":"91"}, {brand: "Microsoft Edge","version":"91"}, {brand: "GREASE","version":"99"}, ]
mobile: false }
```  

To help you discover issues such as hardcoded brand names, Microsoft Edge includes a `GREASE` brand value that changes over time and is formatted to break if it detects common string parsing issues.

To request more detailed information such as platform, use the following code.  

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

For more information navigate to [getHighEntropyValues()][GithubWicgUaClientHintsGethighentropyvalues].

## User Agent string  

User-Agent strings are outdated and have a long history of causing website compatibility issues.

Wherever possible, Microsoft recommends minimizing use of Microsoft Edge browser detection logic based on the user agent string. If you have a good reason to detect the user agent, the Microsoft Edge team recommends using [User-Agent Client Hints](#user-agent-client-hints) as the primary detection logic. [User-Agent Client Hints](#user-agent-client-hints) also reduces the required number of parsed strings.

For legacy reference, the following format was used for User-Agent string.  

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

Platform identifiers change based on the operating system, and version numbers increment over time. The format is the same as the Chromium user agent with the addition of a new `Edg` token at the end. Microsoft chose the `Edg` token to avoid compatibility issues caused by `Edge` string, which was was previously used for the legacy Microsoft Edge browser based on EdgeHTML. The `Edg` token is also consistent with [existing tokens][WindowsBlogsMsedgedev20171005MicrosoftEdgeIosAndroidDeveloper] used for iOS and Android.

## Map the User Agent string to browser name  

Map the user agent string tokens to a more human-readable browser name to use in code. This is currently a common practice across the the web. When you map the new `Edg` token to a browser name, Microsoft recommends that you use a different name than the one used for the legacy Microsoft Edge browser to avoid accidentally applying any legacy workarounds that do not apply to Chromium-based browsers.

## User Agent overrides  

Sometimes, a website doesn't recognize the new Microsoft Edge user agent. As a result, a set of the features of the website may not work correctly. When Microsoft is notified about the types of issues, Microsoft contacts you \(a website owner\) and informs you about the updated user agent.

You may need more time to update and test the user agent detection logic for your website to address the issues reported by Microsoft. To maximize compatibility for your users, the Microsoft Edge Beta and Stable channels use a list of user agent overrides. Use the user agent overrides while you update your website. The list of user agent overrides is provided by Microsoft.  

The overrides specify new user agent values that Microsoft Edge sends instead of the default user agent for specific websites. To display the list of user agent overrides that are currently applied, complete the following actions.  

1. Open the Microsoft Edge Beta or Stable channel.  
1. Navigate to `edge://compat/useragent`.  

The Microsoft Edge Canary and Dev channels don't currently receive user agent overrides. The Microsoft Edge Canary and Dev channels provide environments that use the default Microsoft Edge user agent. Use the Microsoft Edge Canary and Dev channels to reproduce issues on your website caused by the default Microsoft Edge user agent. To turn off user agent overrides in the Microsoft Edge Beta or Stable channels, complete the following actions.  

1. Open a command prompt. For example, enter **CMD** in the Windows search text box and select the **Command Prompt** app.
1. Copy and paste the following code snippet.  

    ```shell
    --disable-domain-action-user-agent-override
    ```  

1. Run the Microsoft Edge app using the code snippet.  

    ```shell
    {path/to/microsoft/edge.ext} --disable-domain-action-user-agent-override
    ```  

<!-- links -->  

[WindowsBlogsMsedgedev20171005MicrosoftEdgeIosAndroidDeveloper]: https://blogs.windows.com/msedgedev/2017/10/05/microsoft-edge-ios-android-developer "Microsoft Edge for iOS and Android: What developers need to know | Microsoft Windows Blogs"  

[GithubWicgUaClientHintsGethighentropyvalues]: https://wicg.github.io/ua-client-hints#getHighEntropyValues "4.1.5. getHighEntropyValues method - User-Agent Client Hints | GitHub"  

[MdnLearnToolsTestingCrossBrowserTestingFeatureDetection]: https://developer.mozilla.org/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection "Implementing feature detection | MDN" 
