---
title: Operating System Regional Data Display in Microsoft Edge
description: How users and web developers can use the OS regional format in Microsoft Edge for improved site experiences
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 08/15/2022
--- 
# Operating System Regional Data Display in Microsoft Edge

Microsoft Edge provides operating system (OS) regional preference information to help website authors create regional experiences on their web site. This feature allows website authors to deliver value to users who specifically change their regional preferences in the OS to reflect their personal preferences.

Users want to see dates, times, numbers, and other formatting printed according to their preferences. For example, the US geographic region translates **7/2/2022** into **July 2nd, 2022**.  Another geographic region could translate that same date into **February 7, 2022** because they read the month and day inversely. 

#### Regional format
To reflect a user's regional preferences for how data is displayed (such as the date),Microsoft Edge has a new option  in the **Language** section of **Settings**.

![The 'Share additional OS regional format' menu with the Limited (default) option selected](media/os-regional-setting-screenshot.msft.png)

This access will allow websites to have visibility into more user's specific regional preferences than was previously possible. Customers that changed their OS regional preferences may now see their preferences reflected automatically in more websites.


<!-- ====================================================================== -->
## OS Regional Data Display Codes

The user's formatting preferences are abstracted into a simple regional code, which is used by web applications to infer the various details noted above about dates, times, and other formatting preferences.

By using a regional code, websites can use the built-in Internationalization API to properly format information into the user's preferences.  The Internationalization API saves lots of MB of data transfer over the network, keeping websites small and allowing them to quickly and easily adapt to different regions.

In general, the website's internationalization user experiences are only as good as the regional code that they're able to determine for the current user. 

A regional code is a two-letter language code followed by a hyphen and a two-letter region code.  Microsoft Edge uses ICU, which is an implementation of the Unicode standard's Internationalization API.  See [ICU](https://icu.unicode.org/home).

To set the user's language preferences, Microsoft Edge gets the default values from the OS when Microsoft Edge is first installed. The user can then change the language preferences in `edge://settings/languages` and sort them in priority order.

| Data Source | Result |
|--------|-------------------------|
| **Preferred language** in the **setting** page is the language selected for rendering Microsoft Edge. | This language/region is also used for formatting values such as date, time, and numbers. |
|  `accept-language` header | This is used for Website Server-side processing. Microsoft Edge sends the language list (as regional codes) specified in **edge://settings/languages**. | 
| `navigator.language` | This is the preferred language (at the top of the list) used to render websites. |

## The Sharing setting
Customers have three settings on Microsoft Edge to select the level of information their browser will share about their regions:

* Never 
* Limited (default) 
* Always (not recommended). 

#### The Never option
To minimize the risks, users can disable the sharing of OS regional information by selecting **Never**. The **Never** option still allows websites to read regional information, but does block any specific OS regional customizations that the user has made from being exposed to website content. Instead, the browser's display language is used to derive a default region. 

#### The Limited option (default)
The default, recommended value is **Limited**. When using the **Limited** setting, the above risks are mitigated by ensuring that mismatched combinations of language and region aren't revealed to websites. The **Limited** option ensures that only valid combinations of the user's current browser display language preference and a given region value are used. **Limited** ensures that websites won't see a regional code anomaly (though it could still look unusual per geographic inference), and also ensures that for language processing, websites will at least provide a consistent language experience (not mixing languages in weird combinations). The **Limited** option compares the language part of the regional code that is derived from the browser’s display language, and the regional part coming from the OS setting, and if the language parts match and if the resulting regional code is a valid combination, will pass the result through to the website. If the language in the message doesn't match, the feature acts as if **Never** was selected (the regional information falls back to being derived from the browser’s display language). 

Note: the **limited** value is similar to current Firefox behavior for exposing the regional code, as described in [Regional Preferences - Firefox Source Docs documentation (mozilla.org)](https://firefox-source-docs.mozilla.org/intl/locale.html#regional-preferences), but also offers the possibility to not share this information at all. 

#### The Always option (not recommended)

If **Always** is selected, the user is exposed to the full set of risks noted earlier: the potential to be easily signaled out for fingerprinting, and also to potentially see website language-processing problems and inconsistencies. However, the user's OS preferences will be made available to the website without any limitations or restrictions, to be sure their preferences are respected. 



<!-- ====================================================================== -->
## Policy Controls 
A related new policy in Microsoft Edge, **ShareOSRegionThroughJavaScriptLocale**, provides a setting for corporate or enterprise-level default configurations.  This setting accepts an integer with the following potential values: 

|Number| Description |
|--------|-------------------------|
| 1 | Limited | 
| 2 | Always | 
| 3 | Never | 

In addition, an older policy, [ApplicationLocaleValue](/DeployEdge/microsoft-edge-policies#applicationlocalevalue), allows setting the Microsoft Edge locale and prevents users from changing it. 

## Avoiding potential misuse
We believe that **Limited** is the right default that allows the most user's regional preferences to be respected with the least amount of risk of the website misusing this information.

#### Fingerprinting Entropy
OS regional information could be misused to compromise the user's privacy.  The regional information would help hackers establish fingerprinting entropy. In combination with many other pre-existing bits of entropy in the platform today, the user could be uniquely identified leading to more potential secondary harm. While a user's region and language are already available via the web platform, users generally fall into well-recognized regional codes that are similar across geographies.  Because the sample sizes are so large, the risk of any specific regional code standing out is small, and thus the risk is small. If the user changes their OS preferences to a unique language + region, websites may be able to identify the anomaly in a population, and easily uniquely identify the associated user. 

#### Content Presentation
The OS regional information could be misused by a website is in the consistency of their content presentation. There are various places in the web platform where language and regional information is made available.  Regional information is processed in one place, while language preferences are surfaced in another.  Furthermore, this information is proactively sent to the server on the initial request for content.

When the language and regional information is self-consistent, then it doesn't really matter which signals the website uses to assemble its content presentation. However, if one part of the web platform starts reporting a language preference, but another part of the platform reports a separate language, then the website may start to mix-and-match regional preferences, resulting in strange and unusual experiences.  Watch for the phrasing of requests that mixes languages and regional preferences together, such as "Email sent on miércoles, 5 de enero de 2021".


<!-- ====================================================================== -->
## Developer Details 
The new setting to **Share additional OS regional format** directly impacts the JavaScript `Intl` object's default regional value and all other JavaScript APIs that use the default region (such as the `Date` constructor). 

When the `Intl` object's constructors (such as `DateTimeFormat`) are provided with an existing regional code, their behavior is unchanged. However, when a specific regional code is not provided, the constructors will use the **default regional code**. The new user preference also affects other date and time formatting APIs that rely on the default regional code, such as `Date`.

The default regional code is what is surfaced via the new user preference. For example, a `DateTimeFormat` can be created with the user's default regional code (and inspected) via the following expression:

```js
Intl.DateTimeFormat().resolvedOptions().locale 
```

Other areas in the platform, such as the `accept-languages` header that's sent via HTTP/HTTPS GET requests, and the `navigator.language` and `navigator.languages` APIs, aren't impacted by the regional information that's shared by the OS, as noted earlier.
