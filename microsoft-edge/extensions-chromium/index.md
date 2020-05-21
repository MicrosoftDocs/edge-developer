---
description: The overview for the Microsoft Edge (Chromium) Extensions as well as building and publishing browser extensions in general.
title: Microsoft Edge (Chromium) Extensions
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/20/2020    
ms.topic: conceptual
ms.prod: microsoft-edge
keywords: edge, extensions development, browser extensions, addons, partner center, developer, chromium extensions
---

# Microsoft Edge (Chromium) Extensions  


Extensions are small programs that can be used to add new features to Microsoft Edge (Chromium) or modify the existing functionality. Extensions are intended to improve a user’s day-to-day browsing experience by providing niche functionality that is important to targeted audiences. 

> You can create extensions if your idea or product depends on a specific web browser’s availability or augments the browsing experience where the functionality that you want to provide extends existing websites. Examples of these companion experiences include adblockers and password managers. 

Extensions are structured similar to a regular web app. At a minimum, they include an app manifest JSON file that contains basic platform information, a JavaScript file to define functionality, and a HTML and CSS file to determine the look of the user interface (as needed). To work directly with part of the browser, such as a window or tab, you need to make API calls and often reference the browser by name. 

:::image type="complex" source="./media/example-extension-screenshot.png" alt-text="A screenshot of a Microsoft Edge (Chromium) extension":::
   A screenshot of a Microsoft Edge (Chromium) extension
:::image-end:::

## Basic guidance

Some of the most popular browsers to build for include Safari, Firefox, Chrome, Opera, Brave, and Microsoft Edge. Great places to begin your extension development tutorials and documentation research are sites hosted by the browser organizations themselves (this is not a definitive list; it is just a helpful starting point).

| Web browser | Is Chromium-based? | Extension development homepage |
|:--- |:--- |:--- |
| Safari |	No	| https://developer.apple.com/documentation/safariservices/safari_app_extensions |
Firefox	| No |	https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions |
Chrome |	Yes	| https://developer.chrome.com/extensions |
Opera | Yes	| https://dev.opera.com/extensions/ |
Brave |	Yes	| Uses Chrome Web Store |
Microsoft Edge |	Yes |	https://developer.microsoft.com/en-us/microsoft-edge/extensions/ |

>[!NOTE]
> Important to note is that many of these sites’ tutorials (available as links in the [See Also](#see-also) section of this article) will use browser-specific APIs that might not match the browser for which you are developing. In most cases, Chromium extensions will work as-is in different Chromium browsers and their APIs will work as expected. Only some less common APIs will be strictly browser-specific.

## Why Chromium

If your goal is to publish your extension to as many browser extensions stores as possible, it would have to be modified for multiple versions in order to target and run in each distinct browser environment. [Safari extensions](https://developer.apple.com/documentation/safariservices/safari_app_extensions), unlike other extension types, can leverage both web and native code to communicate with counterpart native applications. [Firefox extensions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions) share more in common with the other extension types but there are also some [differences](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/) to consider. However, there is some good news: the last four browsers in the chart above can leverage the same code package and minimize the need to alter and maintain parallel versions. This is because they are based on the [Chromium open-source project](https://www.chromium.org/Home). 

Creating a Chromium extension will enable you to write the least amount of code to maximize both the number of extension stores you can target and ultimately the number of users that can find and acquire your extension.
The rest of this article will focus mostly on Chromium extensions.

## Browser compatibility and extension testing

Occasionally, API parity may not exist between Chromium browsers. For example, there are differences in the identity and payment APIs. To ensure your extension meets customer expectations, review API statuses through official browser documentation such as [Chrome APIs](https://developer.chrome.com/extensions/api_index), [Extension APIs Supported in Opera](https://dev.opera.com/extensions/apis/), and [Port Chrome Extension To Microsoft (Chromium) Edge](https://docs.microsoft.com/microsoft-edge/extensions-chromium/developer-guide/port-chrome-extension).

Depending on the APIs you need, these differences may mean that you need to create slightly different code packages with small differences in the code for each store.

When developing your extension, you can sideload it in your browser to test it in different environments before submitting your extension to browser stores.

## Publish your extension to browser stores

There are multiple stores to submit and seek browser extensions including:
*	[Firefox Browser Add-ons](https://addons.mozilla.org/en-US/firefox/extensions/)
*	[Chrome Web Store](https://chrome.google.com/webstore/category/extensions)
*	[Opera addons](https://addons.opera.com/en/extensions/)
*	[Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/category/Edge-Extensions)

Some stores allow you to download their extensions from other browsers. This can save the developer effort upfront and remove the need to submit to additional stores if users can navigate to those existing store listings across different browsers. However, cross-browser access is not guaranteed by browser stores. To ensure your users can find your extension in different browsers, you should maintain a listing on each browser extension store.

Extensions could have overlapping audiences that often use multiple browsers, or the developer could discover that they should be targeting an audience that they have not before. To make this happen, existing Chromium extensions can be migrated from one browser to another.

### Migrate an existing extension to Microsoft Edge

If you already developed an extension for another Chromium browser and want to offer it and ensure it works through Microsoft Edge, you do not have to rewrite your extension. Migrating existing Chromium extensions to other Chromium browsers is straightforward as long as the APIs you use are available on different browsers or there are other APIs that provide the needed functionality.

For more information on porting your Chrome extension, see [Port Chrome extensions to Microsoft (Chromium) Edge](https://docs.microsoft.com/microsoft-edge/extensions-chromium/developer-guide/port-chrome-extension). Once you have ported your extension to the target browser, the next step is to publish it.

### Publishing to the Microsoft Edge add-ons website


To get started publishing your extension to Microsoft Edge, you’ll need to [register for a developer account](https://developer.microsoft.com/registration) with a MSA email account (@outlook.com, @live.com, etc) to submit your extension listing in the store. When choosing an email address to register, consider if you will need to transfer or share ownership of the extension with others in your organization. Once registration is complete, you can create a new extension submission to the store.

To submit your extension to the store, you’ll need: 
*	A zip file that contains your code files. 
*	All required visual assets, which includes a logo and small promotional tile.
*	Optional promotional media, such as screenshots, larger promotional tiles, and/or a URL to videos of your extension.
*	Information that describes your extension such as the name, short description, long description, and a link to your privacy policy. 

>[!NOTE]
> Different stores may have different submission requirements. The above list summarizes the [requirements](https://docs.microsoft.com/microsoft-edge/extensions-chromium/publish/publish-extension) for publishing an extension to Microsoft Edge.

After you complete the submission process, your extension is reviewed and will either pass or fail the certification process. Owners are notified of the outcome and given next steps as needed. If a developer submits an updated extension to the store, including updates to the extension listing details, a new review process is started. 


## See Also

[Porting a Google Chrome extension](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/)

[Building a Safari App Extension](https://developer.apple.com/documentation/safariservices/safari_app_extensions/building_a_safari_app_extension)

[Your first extension (Firefox)](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)

[Getting Started Tutorial (Chrome)](https://developer.chrome.com/extensions/getstarted)

[Getting Started (Opera)](https://dev.opera.com/extensions/getting-started/)

[Getting Started With Microsoft Edge (Chromium) Extensions](https://docs.microsoft.com/microsoft-edge/extensions-chromium/getting-started/)

 

