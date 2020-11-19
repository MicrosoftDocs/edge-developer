---
description: This page provides an overview of what's new in EdgeHTML 14.
title: New features and APIs in EdgeHTML 14
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# What's new in EdgeHTML 14  

[!INCLUDE [deprecation-note](../../includes/legacy-edge-note.md)]  

Here are the changes shipped with EdgeHTML 14, as of the [Windows 10 Anniversary Update](https://blogs.windows.com/windowsexperience/2016/06/29) \(08/2016, Build 14393\).  For an overview of changes to the overall Microsoft Edge browser, see [Introducing EdgeHTML 14 with the Windows 10 Anniversary Update](https://blogs.windows.com/msedgedev/2016/08/04).  

Here's the permalink for the following list of changes: [https://aka.ms/devguide_edgehtml_14](./edgehtml-14.md).  

## New Features  

### Extensions  

Extensions are small programs that can be used to add new features to Microsoft Edge or modify the existing functionality.  Extensions are intended to improve a user's day-to-day browsing experience by providing niche functionality that is important to targeted audiences.  Microsoft Edge supports a new HTML, JavaScript and CSS based extension model.  This new model is Chrome-compatible which means that existing Chrome extension developers will be able to migrate their extensions to Microsoft Edge with minimal changes.  For more information, check out [Microsoft Edge extensions](../../extensions/index.md) developer docs.  

### Fetch API  
The [Fetch API](https://fetch.spec.whatwg.org#fetch-api) utilizes the `fetch` method for fetching resources.  In the past this was achieved with `XMLHttpRequest`.  Not only is fetch simpler to use, it also provides lower level access to requests and responses.  Read more about the Fetch API in the Microsoft Edge blog post, [Fetch (or the undeniable limitations of XHR)](https://blogs.windows.com/msedgedev/2016/05/24).  

### JavaScript  

EdgeHTML 14 brings a number of new and experimental features to Chakra, the JavaScript engine powering Microsoft Edge:  

#### New features  

On by default  

*   [Default parameters](https://developer.microsoft.com/microsoft-edge/platform/status/defaultparameteres6) \(ES2015\)
*   [Exponentiation operator](https://developer.microsoft.com/microsoft-edge/platform/status/exponentiationoperatores2016) \(ES2016\)
*   [Array.prototype.includes](https://developer.microsoft.com/microsoft-edge/platform/status/arrayprototypeincludeses2016) \(ES2016\)
*   [Object.values](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/values) and [object.entries](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) \(ES2017\)  

#### Experimental JavaScript features  

Enabled with `about:flags`  

*   [Modules](https://blogs.windows.com/msedgedev/2016/05/17) \(ES2015\)  
*   [Async/await](https://developer.microsoft.com/microsoft-edge/platform/status/asyncfunctionses2016) \(ES2017\)  
*   [Regex symbols](https://developer.microsoft.com/microsoft-edge/platform/status/regexpbuiltinses6) \(ES2015\)  

For further details, check out [Previewing ES6 Modules and more from ES2015, ES2016 and beyond](https://blogs.windows.com/msedgedev/2016/05/17) and [Asynchronous code gets easier with ES2016 Async Function support in Chakra and Microsoft Edge](https://blogs.windows.com/msedgedev/2015/09/30).  

### Web Authentication API  

FIDO 2.0 Web API  

The Web Authentication \(formerly FIDO 2.0\) API in Microsoft Edge enables web applications to use [Windows Hello](https://www.microsoft.com/windows/comprehensive-security) biometrics for user authentication so that you and your users can avoid all the hassles and risks of password management, including password guessing, phishing, and keylogging attacks.  The current Microsoft Edge \(`ms-` prefixed\) implementation is based on an earlier draft of the Web Authentication specification and is likely to change in the future.  Read more about Web Authentication:  [Web authentication and Windows Hello](../windows-integration/web-authentication.md).

### Web Notifications
Web Notifications allow sites to display notifications to alert users outside the context of the webpage and the browser, keeping users informed of new messages or alerts and allowing sites to improve user engagement.  Web Notifications in Microsoft Edge are fully integrated with the notification platform and Action Center in Windows 10, providing a consistent experience with other apps across the system and easy controls over permissions and Quiet Hours.  Check out [Web Notifications in Microsoft Edge](https://blogs.windows.com/msedgedev/2016/05/16) for more information.  

### Web Speech API
The [Web Speech API](https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html) is a JavaScript API made up of two parts: speech recognition and speech synthesis \(or text to speech\).  At this time Microsoft Edge supports only speech synthesis.  Speech synthesis involves the conversion of text to speech that a user hears through their speakers.  Check out the [Web Speech: Speech Synthesis](https://developer.mozilla.org/docs/Web/API/Web_Speech_API) Developer Guide article for more information.  

## New APIs in EdgeHTML 14

Here's the full list of new APIs in EdgeHTML 14.  They are listed in the format of `[interface name].[api name]`.  

<iframe height='585' scrolling='no' title='New APIs in EdgeHTML 14' src='//codepen.io/MSEdgeDev/embed/oWMEPE/?height=585&theme-id=23761&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/MSEdgeDev/pen/oWMEPE/'>New APIs in EdgeHTML 14</a>by MSEdgeDev (<a href='https://codepen.io/MSEdgeDev'>@MSEdgeDev</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>  
