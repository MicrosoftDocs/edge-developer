---
description: An overview of building and publishing Microsoft Edge (Chromium) Extensions.
title: Overview of Microsoft Edge (Chromium) Extensions 
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/27/2020
ms.topic: conceptual
ms.prod: microsoft-edge
keywords: edge, extensions development, browser extensions, addons, partner center, developer, chromium extensions
---
# Overview of Microsoft Edge (Chromium) Extensions

An extension is a small program that developers may use to either add new features to Microsoft Edge \(Chromium\) or modify the existing functionality.  An extension is intended to improve a user's day-to-day browsing experience by providing niche functionality that is important to a target audience.  

You may create extensions if your idea or product depends on the availability of a specific web browser or augments the browsing experience where the functionality that you want to provide extends existing websites.  Examples of companion experiences include ad blockers and password managers.  

An extension is structured similar to a regular web app.  At a minimum, it includes an app manifest JSON file that contains basic platform information, a JavaScript file to define functionality, and HTML and CSS files to define the user interface. To work directly with part of the browser, such as a window or tab, you must send API requests and often reference the browser by name.  

:::image type="complex" source="./media/example-extension-screenshot.png" alt-text="A Microsoft Edge (Chromium) extension":::
  A Microsoft Edge \(Chromium\) extension  
:::image-end:::  

## Basic guidance  

Some of the most popular browsers to build extensions for include Safari, Firefox, Chrome, Opera, Brave, and Microsoft Edge.  Great places to begin your extension development tutorials and documentation research are sites hosted by the browser organizations.  The following table is not definitive, and may be used as a starting point.  

| Web browser | Chromium-based? | Extension development homepage |  
|:--- |:--- |:--- |  
| Safari | No | [developer.apple.com/documentation/safariservices/safari_app_extensions][AppleDeveloperSafariservicesAppExtensions] |  
| Firefox | No | [developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions][MDNWebextensions] |  
| Chrome | Yes | [developer.chrome.com/extensions][ChromeDeveloperExtensions] |  
| Opera | Yes | [dev.opera.com/extensions][OperaDevExtensions] |  
| Brave | Yes | Uses [Chrome Web Store][GoogleChromeWebstoreCategoryExtensions] |  
| new Microsoft Edge | Yes | [developer.microsoft.com/microsoft-edge/extensions][MicrosoftDeveloperEdgeExtensions] |  

> [!IMPORTANT]
> Many of the tutorials of the sites use browser-specific APIs that may not match the browser for which you are developing.  In most cases, a Chromium extension works as-is in different Chromium browsers and the APIs work as expected.  Only some less common APIs may be strictly browser-specific.  For links to the tutorials, see [See also](#see-also).  

## Why Chromium?

If your goal is to publish your extension to as many browser extensions stores as possible, it must be modified for multiple versions in order to target and run in each distinct browser environment.  For example, [Safari extensions][AppleDeveloperSafariservicesAppExtensions] may use both web and native code to communicate with counterpart native applications.  The last four browsers in the previous table use the same code package, and minimizes the requirement to maintain parallel versions.  These browsers are based on the [Chromium open-source project][ChromiumHome].  

Creating a Chromium extension enables you to write the least amount of code to maximize both the number of extension stores you are targeting and ultimately the number of users that are able to find and acquire your extension.  

The following content focuses mostly on Chromium extensions.  

## Browser compatibility and extension testing  

Occasionally, API parity does not exist between Chromium browsers.  For example, there are differences in the identity and payment APIs.  To ensure your extension meets customer expectations, review API statuses through official browser documentation such as [Chrome APIs][ChromeDeveloperExtensionsApiIndex], [Extension APIs Supported in Opera][OperaDevExtensionsApis], and [Port Chrome Extension To Microsoft (Chromium) Edge][ExtensionsChromiumDeveloperGuidePortChrome].  

Depending on the APIs that you require, these differences may mean that you must create slightly different code packages with small differences in the code for each store.  

When developing your extension, you may sideload it in your browser to test it in different environments before submitting your extension to browser stores.  

## Publish your extension to browser stores  

You may submit and seek browser extensions in the following browser stores.  

*   [Firefox Browser Add-ons][MozillaAddonsFirefoxExtensions]  
*   [Chrome Web Store][GoogleChromeWebstoreCategoryExtensions]  
*   [Opera addons][OperaAddonsExtensions]  
*   [Microsoft Edge Add-ons][MicrosoftEdgeAddonsCategoryExtensions]  

Some stores allow you to download listed extensions from other browsers.  However, cross-browser access is not guaranteed by browser stores.  To ensure your users are able to find your extension in different browsers, you should maintain a listing on each browser extension store.  

Users may need to install your extension in different browsers. In this scenario, existing Chromium extensions may be migrated from one browser to another.  

### Migrate an existing extension to Microsoft Edge  

If you have already developed an extension for another Chromium browser, you can submit it to the Microsoft Edge Add-ons store. You do not need to rewrite your extension, and must verify that it works in Microsoft Edge.  When migrating existing Chromium extensions to other Chromium browsers, ensure the same APIs or alternatives are available in your target browser.  

For more information on porting your Chrome extension to Microsoft Edge, see [Port Chrome extensions to Microsoft (Chromium) Edge][ExtensionsChromiumDeveloperGuidePortChrome]. Once you have ported your extension to the target browser, the next step is to publish it.  

### Publishing to the Microsoft Edge add-ons website  

To get started publishing your extension to Microsoft Edge, you must [register for a developer account][MicrosoftDeveloperRegistration] with an MSA email account \(@outlook.com, @live.com, and so on\) to submit your extension listing in the store.  When choosing an email address to register, consider if you must transfer or share ownership of the extension with others in your organization.  After registration is complete, you may create a new extension submission to the store.  

To submit your extension to the store, you must meet the following requirements.  

*   An archive \(.zip\) file that contains your code files.  
*   All required visual assets, which include a logo and small promotional tile.  
*   Optional promotional media, such as screenshots, promotional tiles, a video URL.
*   Information describing your extension such as the name, short description, a privacy policy link.

> [!NOTE]
> Different stores may have different submission requirements.  The above list summarizes the [requirements][ExtensionsChromiumPublish] for publishing an extension to Microsoft Edge.  

After you have successfully submitted your extension, your extension undergoes a review process and can either pass or fail the certification process.  Owners are notified of the outcome and given next steps as required.  If you submit an extension update to the store, a new review process is initiated.  

## See also  

*   [Porting a Google Chrome extension][ExtensionworkshopPorting]  
*   [Building a Safari App Extension][AppleDeveloperSafariservicesAppExtensionsBuilding]  
*   [Your first extension (Firefox)][MDNWebextensionsYourFirst]  
*   [Getting Started Tutorial (Chrome)][ChromeDeveloperExtensionsGetstarted]  
*   [Getting Started (Opera)][OperaDevExtensionsGettingStarted]  
*   [Getting Started With Microsoft Edge (Chromium) Extensions][ExtensionsChromiumGettingStartedIndex]  

<!-- image links -->  

<!-- links -->  

[ExtensionsChromiumDeveloperGuidePortChrome]: ./developer-guide/port-chrome-extension.md "Port Chrome Extension To Microsoft (Chromium) Edge | Microsoft Docs"  
[ExtensionsChromiumGettingStartedIndex]: ./getting-started/index.md "Getting Started With Microsoft Edge (Chromium) Extensions | Microsoft Docs"  
[ExtensionsChromiumPublish]: ./publish/publish-extension.md "Publish An Extension | Microsoft Docs"  

[MicrosoftDeveloperEdgeExtensions]: https://developer.microsoft.com/microsoft-edge/extensions "Develop extensions for Microsoft Edge | Microsoft Developer"  
[MicrosoftDeveloperRegistration]: https://developer.microsoft.com/registration "Partner Center | Microsoft Developer"  

[MicrosoftEdgeAddonsCategoryExtensions]: https://microsoftedge.microsoft.com/addons/category/Edge-Extensions "Extensions for Microsoft Edge | Microsoft Edge"  

[AppleDeveloperSafariservicesAppExtensions]: https://developer.apple.com/documentation/safariservices/safari_app_extensions "Safari App Extensions | Apple Developer"  
[AppleDeveloperSafariservicesAppExtensionsBuilding]: https://developer.apple.com/documentation/safariservices/safari_app_extensions/building_a_safari_app_extension "Building a Safari App Extension | Apple Developer"  

[ChromeDeveloperExtensions]: https://developer.chrome.com/extensions "What are extensions? | Chrome Developer"  
[ChromeDeveloperExtensionsApiIndex]: https://developer.chrome.com/extensions/api_index "Chrome APIs | Chrome Developer"  
[ChromeDeveloperExtensionsGetstarted]: https://developer.chrome.com/extensions/getstarted "Getting Started Tutorial | Chrome Developer"  

[ChromiumHome]: https://www.chromium.org/Home "Chromium"  

[ExtensionworkshopPorting]: https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension "Porting a Google Chrome extension | Extension Workshop"  

[GoogleChromeWebstoreCategoryExtensions]: https://chrome.google.com/webstore/category/extensions "Extensions | Chrome Web Store"  

[MDNWebextensions]: https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions "Browser Extensions | MDN"  
[MDNWebextensionsYourFirst]: https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension "Your first extension | MDN"  

[MozillaAddonsFirefoxExtensions]: https://addons.mozilla.org/firefox/extensions "Extensions | Add-ons for Firefox"  

[OperaAddonsExtensions]: https://addons.opera.com/extensions "Extensions | Opera Addons"  

[OperaDevExtensions]: https://dev.opera.com/extensions "Extensions Documentation | Dev. Opera"  
[OperaDevExtensionsApis]: https://dev.opera.com/extensions/apis "Extension APIs Supported in Opera | Dev. Opera"  
[OperaDevExtensionsGettingStarted]: https://dev.opera.com/extensions/getting-started "Getting Started | Dev. Opera"  
