---
title: Updates to Region information exposed to web content
description: How customers and web developers can use the OS regional format in Microsoft Edge for improved site experiences
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 08/11/2022
--- 
# Updates to Region information exposed to web content

## Abstract 
Microsoft Edge provides more accurate OS regional preference information to web content in order to help web site authors provide better regional tailored experiences for their customers who have customized their OS regional preferences.

## Customer Value
Users want to see dates and times, numbers, and other formatting printed according to their preferences. For example: “7/2/2022” means “July 2nd, 2022” in some regions but could mean “February 7, 2022” in other regions. These preferences are based generally on the region in which the user lives and in most cases these preferences are set correctly by the operating system and respected by Edge when it is installed. However, in some special circumstances, users may opt to change their preferences or live in a region in which default preferences may be ambiguous. This feature enables website authors to deliver value to these customers in particular—customers who specifically change their regional preferences in the OS to reflect their personal needs or interests. 

Prior to this feature, these customer’s regional preferences were ignored by the browser. This feature allows these customers to express their intent for how their OS region information will be made available to web content. 

## Problem
The user’s formatting preferences are abstracted into a relatively simple “regional code.” The regional code is used by web applications to infer the various details noted above about dates, times and other formatting preferences. With a regional code, websites can use a built-in “Internationalization” API to properly format a variety of user preferences. The built-in Internationalization API saves lots of MB of data transfer over the network, keeping websites small and light, and allowing them to quickly and easily adapt to different regions and languages around the globe. In general, the website’s internationalization customer experiences are only as good as the regional code that they are able to determine for the current user. 

A regional code is a hyphenated 2 letter language code followed by a 2 letter region code (generally—the standard for language and regional codes is quite complex: [chromium uses ICU an implementation of the Unicode Standard’s Internationalization API](https://icu.unicode.org/home). See their docs for specific details.) For example: “en-US” means the United States region where English is the primary language. “en-GB” means English with the preferences of Great Britain (UK). Similarly, other language and regional codes express these pairs for other languages: “pt-BR” means Brazilian Portuguese. 

To setup the user’s language preferences, Edge gets the default values from the OS at the time Edge is first installed. After that, users can change the language preferences via edge://settings/languages, including adding multiple languages (with or without region information) and sorting them in a priority order. That language information is used in a variety of ways:

|   | What Setting Edge uses? |
|---|-------------------------|
| Language used for rendering Edge’s UI | edge://settings/languages. One item in the “Languages” list will indicate “Microsoft Edge is displayed in this language” |
| Language used to render web sites | **Website Server-side processing**: Edge sends the language list (as regional codes) specified in edge://settings/languages via the accept-language header. <br><br> **Website Client-side processing**: Edge makes the language list (as regional codes) available via the navigator.languages DOM API. The preferred language (at the top of the list) is also available as navigator.language (note: singular) |
| Language/region used for formatting date, time, numbers, etc. | The language in the edge://settings/languages list specified as the “displayed language” |

While many OSes supported by Microsoft Edge do have a facility to specify regional information preferences, this OS information (as a regional code) is not used by the browser, and customers who make these changes to the OS have no similar mechanism to express these regional preferences in Microsoft Edge (except to change their display language and region). 

## Opportunity
In order to better reflect a customer’s regional preferences (especially in the cases where the customer has changed their default preferences in the OS), Microsoft Edge is making a new Setting available in the “Language” section of Settings:

![Screenshot of Edge setting UI titled "Share additional OS regional format" with the option "limited (default)" selected.](media/os-regional-setting-screenshot.msft.png)

This setting allows the customer’s OS regional preferences to be automatically made available to websites under “limited” cases by default (more on that below), and offers two other options, including “never” which reverts the feature back to legacy behavior. 

This additional sharing will allow websites to have visibility into more customer’s specific regional preferences than was previously possible. Customers that changed their OS regional preferences may now see their preferences reflected automatically in more websites. Previously, these users preferences would not be visible to websites, and their [incorrect] preferences would be assumed from the browser’s display language default region instead. 

|    | What Setting Edge uses? |
|----|-------------------------|
| Language/region used for formatting date, time, numbers, etc. | ~~The language in the edge://settings/languages list specified as the “displayed language”~~<br><mark>The language/region specified in the OS settings*</mark> |

*Depending on the new “Share additional OS regional format” UI value (details below).

## Potential Misuse 
We believe that “limited” is the right default that allows the most customer’s regional preferences to be respected with the least amount of risk of the website misusing this information. To understand why these options exist, one must understand a bit about the ways in which regional information expressed by the OS can be misused by websites. 

One way in which the OS regional information could be misused is to compromise the user’s privacy—the regional information would be one additional bit of fingerprinting entropy. In combination with many other preexisting bits of entropy in the platform today, the user could be uniquely identified leading to more potential secondary harms. It’s important to remember that a user’s region and language are already available via the web platform, but users generally fall into well-recognized regional codes that are similar across geographies, and because the sample sizes are so large, the risk of any specific regional code “standing out” is small and thus the risk is small. If the user changes their OS preferences to a unique language + region, websites may be able to identify the anomaly in a population, and easily uniquely identify the associated customer. 

Another way in which the OS regional information could be misused by a website is in the consistency of their content presentation. There are various places in the web platform where language and regional information is made available. Regional information is processed in one place, while language preferences are surfaced in another—furthermore, in a third location, this information was proactively sent to the server on the initial request for content. When the language and regional information is self-consistent, then it doesn’t really matter which signals the website uses to assemble its content presentation. However, if one part of the web platform starts reporting one language preference, but another part of the platform reports a separate language and regional preference, the website may start to mix-and-match regional preferences or language preferences, resulting in strange and unusual [broken] experiences, e.g., some times and dates formatted in one way, while other times and dates (from the same site!) formatted differently, or phrasing of requests that mixes languages together: “Email sent on miércoles, 5 de enero de 2021”.

## Three settings
Customers have three settings they can chose from:

* Never 
* Limited (default) 
* Always (not recommended). 

To minimize the risks noted previously, customers can disable the sharing of the OS regional information by choosing “never”. This does not prevent websites from reading region information, but does block any specific OS regional customizations that the user has made from being exposed to website content. Instead, the browser’s display language is used to derive a default region. 

When choosing “Always” the customer is exposed to the full set of risks noted earlier: the potential to be easily signaled out for fingerprinting, and also to potentially see website language-processing problems and inconsistencies. However, the user’s OS preferences will be made available to the website without any limitations or restrictions to be sure their preferences are respected. 

The default recommended value is “limited.” With limited, the above risks are mitigated by ensuring that “incompatible” combinations of language and region are not revealed to websites. The “limited” value ensures that only “valid” combinations of the user’s current browser display language preference and a given region value are used. This ensures that websites won’t see a “regional code” anomaly (though it could still look unusual per geographic inference), and also ensures that for language processing, websites will at least provide a consistent language experience (not mixing languages in weird combinations). The “limited” setting compares the language part of the regional code that is derived from the browser’s display language, and the regional part coming from the OS setting, and if the language parts match and if the resulting regional code is a valid combination, will pass the result through to the website. If the language parts don’t match or if the resultant combination isn’t valid, then the OS region preference is silently ignored and the feature acts as if “never” was selected (the regional information falls back to being derived from the browser’s display language). 

Note: the “limited” value is similar to current Firefox behavior for exposing the regional code as described in [Locale management — Firefox Source Docs documentation (mozilla.org)](https://firefox-source-docs.mozilla.org/intl/locale.html#regional-preferences), but also offers the possibility to not share this information at all. 

## Policy Controls 
A related new policy added to Microsoft Edge provides a setting for corporate or enterprise-level default configurations: **ShareOSRegionThroughJavaScriptLocale** which accepts an integer with potential values: 

* 0 = Limited 
* 1 = Always 
* 2 = Never 

In addition, an [older policy](https://docs.microsoft.com/en-us/DeployEdge/microsoft-edge-policies#applicationlocalevalue) (**ApplicationLocaleValue**) allows setting the Edge locale and prevents users from changing it. 

## Developer Details 
The new setting to “Share additional OS regional format” directly impacts the JavaScript `Intl` object’s default regional value as well as all other JavaScript APIs that use the default region (e.g., such as the `Date` constructor). In cases where the `Intl` object’s constructors are used to create a new `Region`, `DateTimeFormat`, etc., with an existing regional code, these behaviors are unchanged. However, the Constructors offer options to create the objects without a specified regional code, in which case, the APIs fallback to a default regional code. The default regional code is what is surfaced via the new user preference. For example, a `DateTimeFormat` can be created with the user’s default regional code (and inspected) via: 

```js
Intl.DateTimeFormat().resolvedOptions().locale 
```

Other areas in the platform, such as the accept-languages header sent via HTTP/HTTPS get requests and the `navigator.language` and `navigator.languages` APIs are not impacted by the regional information shared by the OS as noted earlier.
