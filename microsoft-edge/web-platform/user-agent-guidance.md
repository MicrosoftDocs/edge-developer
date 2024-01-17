---
title: Detecting Microsoft Edge from your website
description: How to detect Microsoft Edge data with User-Agent Client Hints and the User-Agent string.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.date: 01/04/2024
---
# Detecting Microsoft Edge from your website

<!-- restricted lexicon; spellings to use:
User-Agent Client Hints  (it's the name of an API; https://www.bing.com/searchq=User-Agent+Client+Hints)
User-Agent string        (it's the formal name of a specialized string)

spellings to avoid:
user agent client hints
user-agent client hints
user agent string
-->

Microsoft Edge enables your website to retrieve user agent information.  You use the user agent information to present webpages correctly for each user's browser.  Browsers provide mechanisms for websites to detect browser information such as brand, version number, and host operating system.

*  **User-Agent Client Hints** are the best way to retrieve browser information.  See [User-Agent Client Hints](#user-agent-client-hints), below.

*  **User-Agent strings** are a legacy way to retrieve browser information. They are outdated and have a history of causing website compatibility problems.  See [User-Agent strings](#user-agent-strings), below.

You may want to provide different experiences to users based on their browser.  For example, if you include steps about how to configure Microsoft Edge or another browser for use with your site, you may want to detect the browser and then show the appropriate content.

Mechanisms for browser detection:

| Mechanism | Server-side | Client-side |
|:--- |:--- |:--- |
| **User-Agent Client Hints** (recommended) | `Sec-CH-UA` HTTPS header | `navigator.userAgentData` JavaScript method |
| **User-Agent string** (legacy) | `User-Agent` HTTPS header | `navigator.userAgent` JavaScript method |


<!-- ====================================================================== -->
## Feature detection

Microsoft recommends [detecting whether a feature is supported](https://developer.mozilla.org/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection) in your browser whenever possible, instead of detecting the browser.

If you must detect browsers, Microsoft recommends using User-Agent Client Hints, as follows, [together with feature detection](#combine-user-agent-client-hints-with-feature-detection).


<!-- ====================================================================== -->
## User-Agent Client Hints
<!-- caution about changing this heading: in the Network Conditions tool, for the "User agent client hints" section, the "Learn more" link points to here -->

Microsoft Edge supports User-Agent Client Hints.

User-Agent Client Hints is a method that addresses privacy concerns while allowing web pages to detect browser information such as browser name, version number, platform, and more. Soon the User-Agent string will be frozen and deprecated by various browsers. For example, the Chrome Platform Status site describes the change in [Feature: Reduce User Agent string information](https://www.chromestatus.com/feature/5704553745874944).

Employ User-Agent Client Hints when you want to:
- Determine if new browser activity is from the expected user.
- Customize hints or instructions if the user is new to this site.

Don't use User-Agent Client Hints to:
- Block *unsupported* browsers.
- Restrict access to features on your site.

For more information, see the specification at [W3C Community Group Draft Report: User-Agent Client Hints](https://wicg.github.io/ua-client-hints/).


<!-- ------------------------------ -->
#### User-Agent Client Hints HTTPS header

When Microsoft Edge sends an HTTPS request to a server, it sends a set of low-entropy User-Agent Client Hints headers. For more information, see [Low entropy hint table](https://wicg.github.io/client-hints-infrastructure/#low-entropy-table). If the server requires more granular information about the browser, its response includes an `Accept-CH` header. The value of that response header is a comma-separated list of all the Client Hints request headers the server wants from the browser, such as `Accept-CH: Sec-CH-UA-Full-Version,Sec-CH-UA-Platform-Version`. The next Microsoft Edge HTTPS request to the server will include the specified User-Agent Client Hints headers.

By default, Microsoft Edge sends the `Sec-CH-UA`, `Sec-CH-UA-Mobile`, and `Sec-CH-UA-Platform` request headers in the following format.

```https
Sec-CH-UA: "Chromium";v="92", "Microsoft Edge";v="92", "Placeholder;Browser Brand";v="99"
Sec-CH-UA-Mobile: ?0
Sec-CH-UA-Platform: "Windows"
```

The following table shows all available hints request headers with sample values.

| User-Agent request header | Example User-Agent response value |
|:--- |:--- |
| `Sec-CH-UA` | `"Not_A Brand";v="8", "Chromium";v="120", "Microsoft Edge";v="120"` |
| `Sec-CH-UA-Mobile` | `?0` |
| `Sec-CH-UA-Full-Version` | `120.0.2210.91` |
| `Sec-CH-UA-Platform` | `Windows` |
| `Sec-CH-UA-Platform-Version` | `15.0.0` |
| `Sec-CH-UA-Arch` | `x86` |
| `Sec-CH-UA-Bitness` | `64` |
| `Sec-CH-UA-Model` | `Surface Pro` |

User-Agent Client Hints are only sent over secure connections using `HTTPS`.


<!-- ------------------------------ -->
#### User-Agent Client Hints JavaScript API

You can access User-Agent Client Hints by using JavaScript on the client side. When you call the default `navigator.userAgentData`, it returns the following response.

```JSON
{
  "brands": [
    {
      "brand": "Not_A Brand",
      "version":"8"
    },
    {
      "brand": "Chromium",
      "version":"120"
    },
    {
      "brand": "Microsoft Edge",
      "version":"120"
    }
  ],
  "mobile": false,
  "platform": "Windows"
}
```

To send a request for more detailed information such as `platform`, use the following code:

```javascript
navigator.userAgentData.getHighEntropyValues([
  "architecture",
  "platform",
  "platformVersion",
  "uaFullVersion"
]).then(ua => {
  console.log(ua)
});
```

The response has the following format:

```javascript
{
  "architecture": "x86",
  "brands": [
    {
      "brand": "Not_A Brand",
      "version": "8"
    },
    {
      "brand": "Chromium",
      "version": "120"
    },
    {
      "brand": "Microsoft Edge",
      "version": "120"
    }
  ],
  "mobile": false,
  "platform": "Windows",
  "platformVersion": "15.0.0",
  "uaFullVersion": "120.0.2210.91"
}
```

For more information, see [NavigatorUAData: getHighEntropyValues() method](https://developer.mozilla.org/docs/Web/API/NavigatorUAData/getHighEntropyValues) on MDN.


<!-- ------------------------------ -->
#### platformVersion Hint

The operating system version token in the `User-Agent` header hasn't been updated for Windows 11, and still reports `Windows NT 10.0`.

To distinguish between Windows 10 and Windows 11, request the `platformVersion` client hint in Microsoft Edge. Values between and including `1.0.0` and `12.0.0` represent releases of Windows 10, while values of `14.0.0` or later represent releases of Windows 11.


<!-- ------------------------------ -->
#### Combine User-Agent Client Hints with feature detection

Combining User-Agent Client Hints with [feature detection](https://developer.mozilla.org/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection) is an effective way to deliver compatible web content. Microsoft recommends using this pattern to:

* Improve code maintainability.
* Reduce code fragility.
* Reduce code breakage from changes to the User-Agent string.

If you need to check for a Chrome-like browser, Microsoft recommends detecting `Chromium`, which is the engine that powers Microsoft Edge.

Use this method to verify the `Chromium` brand and apply detection to all affected Chromium-based browsers:

```javascript
function isChromium() {
  for (brand_version_pair of navigator.userAgentData.brands) {
    if (brand_version_pair.brand == "Chromium"){
      return true;
    }
  }
  return false;
}
```

Use the above method to avoid hard-coding checks for brands at specific indices. Display orders of brand names can change over time.

If you can't use [feature detection](https://developer.mozilla.org/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection), don't use a hardcoded list of known Chromium-based browsers for verification. Examples of hardcoded browser names include `Microsoft Edge` and `Google Chrome`.  Feature detection may not be available, because a fix for a Chromium bug in later versions must be avoided and the affected browsers are difficult to detect.


<!-- ====================================================================== -->
## User-Agent strings

User-Agent strings are outdated and have a long history of causing website compatibility issues.

Wherever possible, Microsoft recommends minimizing use of Microsoft Edge browser detection logic based on the User-Agent string. If you have a good reason to detect the browser, the Microsoft Edge team recommends using [User-Agent Client Hints](#user-agent-client-hints) as the primary detection logic. [User-Agent Client Hints](#user-agent-client-hints) also reduces the complexity of browser detection code.

For legacy reference, the following information was included in User-Agent string.

On Windows, the `User-Agent` HTTP request header includes:

```
Mozilla/5.0 (Windows NT 10.0; Win64; x64)
AppleWebKit/537.36 (KHTML, like Gecko)
Chrome/120.0.0.0
Safari/537.36
Edg/120.0.0.0
```

On Android, the `User-Agent` HTTP request header includes:

```
Mozilla/5.0 (Linux; Android 10; K)
AppleWebKit/537.36 (KHTML, like Gecko)
Chrome/120.0.0.0
Mobile Safari/537.36
EdgA/120.0.0.0
```

The response value from `navigator.userAgent` method uses the following format:

```javascript
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0"
```

Platform identifiers change based on the operating system, and version numbers increment over time. The format is the same as the Chromium user agent with the addition of a new `Edg` token at the end. Microsoft chose the `Edg` token to avoid compatibility issues caused by `Edge` string, which was previously used for the legacy Microsoft Edge browser based on EdgeHTML. The `Edg` token is also consistent with [existing tokens](https://blogs.windows.com/msedgedev/2017/10/05/microsoft-edge-ios-android-developer) used for iOS and Android.


<!-- ====================================================================== -->
## Identifiers for Microsoft Edge on various platforms

On desktop operating systems, Microsoft Edge is commonly identified by the `Edg` token in the User-Agent string.  However, a different token for Microsoft Edge is used on some device platforms, as follows:

| Platform | Identifier token |
|:--- |:--- |
| Desktop (Windows/Mac/Linux) | `Edg` |
| iPhone/iPad | `EdgiOS` |
| Android (Mobile/tablet) | `EdgA`|

Microsoft Edge Legacy is no longer supported. See the [Microsoft Edge Legacy](#microsoft-edge-legacy) section for details.


<!-- ====================================================================== -->
## Map the User-Agent string to an expanded browser name

Map the User-Agent string tokens to human-readable browser names to use in code. This practice is common across the web. When you map the `Edg` token to a browser name, Microsoft recommends using a different name than the one used for the legacy Microsoft EdgeHTML browser, to avoid accidentally applying legacy workarounds that don't apply to Chromium-based browsers.


<!-- ====================================================================== -->
## User-Agent overrides

Sometimes, a website doesn't recognize the Microsoft Edge user agent. As a result, a set of the features of the website may not work correctly. When Microsoft is notified about the types of issues, Microsoft contacts you (a website owner) and informs you about the updated user agent.

You may need more time to update and test the user agent detection logic for your website to address the issues reported by Microsoft. To maximize compatibility for your users, the Microsoft Edge Beta and Stable channels use a list of user agent overrides. Use the user agent overrides while you update your website. The list of user agent overrides is provided by Microsoft.

The overrides specify new user agent values that Microsoft Edge sends instead of the default user agent for specific websites. To display the list of user agent overrides that are currently applied:

1. Open the Microsoft Edge Beta or Stable channel.

1. Go to `edge://compat/useragent`.

The Microsoft Edge Canary and Dev channels don't currently receive user agent overrides. The Microsoft Edge Canary and Dev channels provide environments that use the default Microsoft Edge user agent. Use the Microsoft Edge Canary and Dev channels to reproduce issues on your website caused by the default Microsoft Edge user agent.

To turn off user agent overrides in the Microsoft Edge Beta or Stable channels:

1. Open a command prompt.  For example, enter **cmd** in the Windows search text box and select the **Command Prompt** app.

1. Copy the following code:

    ```shell
    --disable-domain-action-user-agent-override
    ```

1. Run the Microsoft Edge app using the copied code as follows:

    ```shell
    {path/to/microsoft/edge.ext} --disable-domain-action-user-agent-override
    ```


<!-- ====================================================================== -->
## Microsoft Edge Legacy

Legacy browser considerations:

*  The Microsoft Edge Legacy browser is no longer supported. See the blog post [New Microsoft Edge to replace Microsoft Edge Legacy](https://techcommunity.microsoft.com/t5/microsoft-365-blog/new-microsoft-edge-to-replace-microsoft-edge-legacy-with-april-s/ba-p/2114224).

*  Microsoft Edge Legacy was only available on Windows 10.

*  Of all the User-Agent mechanisms described in this article, the only supported browser-specific mechanism for Microsoft Edge Legacy is User-Agent string.

*  The User-Agent string for Microsoft Edge Legacy includes the `Edge` token.

    A fully formed example of a Microsoft Edge Legacy User-Agent string: `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.19582`


<!-- ====================================================================== -->
## See also

[Detect Windows 11 using User-Agent Client Hints](/microsoft-edge/web-platform/how-to-detect-win11)
