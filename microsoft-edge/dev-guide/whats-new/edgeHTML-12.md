---
description: This page provides an overview of what's new in EdgeHTML 12.
title: What's New in EdgeHTML 12
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/15/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# What's New in EdgeHTML 12

Microsoft Edge introduces EdgeHTML, a new "living" engine designed with interoperability at its core, to ensure that you are always getting the latest and greatest Windows web platform. Microsoft Edge presents a clean break from the past, free from the legacy code needed to support ActiveX controls, Browser Helper Objects (BHOs), and other bygone web development practices. Additionally, Microsoft Edge provides native PDF support. As of IE11, legacy document modes have been deprecated, and with Microsoft Edge, the browser infrastructure to support them does not exist. Check out the [IEBlog](https://go.microsoft.com/fwlink/p/?LinkID=519011) for more info.

Here are the changes shipped with EdgeHTML 12 in the initial release of [Windows 10](https://blogs.windows.com/windowsexperience/2015/07/28/windows-10-free-upgrade-available-in-190-countries) (07/2015, Build 10240). For an overview of changes to the overall Microsoft Edge browser, see [A break from the past: the birth of Microsoft's new web rendering engine](https://blogs.windows.com/msedgedev/2015/02/26/a-break-from-the-past-the-birth-of-microsofts-new-web-rendering-engine/) and [A break from the past, part 2: Saying goodbye to ActiveX, VBScript, attachEvent...](https://blogs.windows.com/msedgedev/2015/05/06/a-break-from-the-past-part-2-saying-goodbye-to-activex-vbscript-attachevent/).

Here's the permalink for the following list of changes: [https://aka.ms/devguide_edgehtml_12](https://aka.ms/devguide_edgehtml_12).


## New Features

### Content Security Policy 1.0
Microsoft Edge now implements Content Security Policy (CSP) 1.0. The CSP security standard enables web developers to control the resources (script, CSS, plugins, images, etc.) which a particular page can fetch or execute with the aim of preventing cross-site scripting (XSS), clickjacking, and other code injection attacks seeking to execute malicious content in the context of a trusted web page. Check out [Content Security Policy](https://docs.microsoft.com/microsoft-edge/dev-guide/security/content-security-policy) for more information about CSP in Microsoft Edge. 

### Filter Effects
Microsoft Edge provides an easy way to add visual effects to elements. Using the `filter` property you can add blurs, adjust the brightness, add a drop shadow, change the opacity, and more to an element. Using purely CSS, you can apply multiple filter effects to one element and animate the filters. For more information, see [Filter effects](https://docs.microsoft.com/microsoft-edge/dev-guide/css/filter-effects).

### JavaScript
JavaScript support varies slightly between the final version of Internet Explorer (IE11) and Microsoft Edge. New features in Edge include:

| | |
|--|--|
|**Statements**| [class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class) (experimental), [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) |
|**Objects**| [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy), [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol), [WeakSet](/scripting/javascript/reference/weakset-object-javascript) |
|**Functions** | [acosh](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/acosh), [codePointAt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codepointat), [fromCodePoint](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromcodepoint), [hypot](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot), [imul](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul), [isInteger](/scripting/javascript/reference/number-isinteger-function-number-javascript), [isNaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isnan), [raw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw) |
|**Methods**| [includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes), [keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys) (Array), [repeat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat) (String), [values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values) (Array) |
|**Other features**| [Functions](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions) (experimental), [Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators),  [Iterators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators), [Regular Expression `y` flag](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) (experimental), [Template strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals), [Unicode code point escape characters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#String_literals) |

For a comparison of JavaScript support across Internet Explorer, Microsoft Edge, and Microsoft Store apps, see [*JavaScript Version Information*](./javascript-version-information.md).

### Media Capture and Streams
Microsoft Edge introduces support for the Media Capture and Streams APIs based on the [W3C Media Capture and Streams](https://go.microsoft.com/fwlink/p/?LinkID=534096) specification. These JavaScript APIs allow webpages to access media capture devices, like webcams or microphones, with permission from the user. By using the Media Capture and Streams APIs, you can create scenarios like capturing a photo using a webcam or capturing a voice message from a microphone. Read more about Media Capture in Microsoft Edge on the [Microsoft Edge Developer blog](https://blogs.windows.com/msedgedev/2015/05/13/announcing-media-capture-functionality-in-microsoft-edge/). 

### New HTML element and attributes
* `meter` element
* `picture` element
* `template` element
* `image` element: `srcset` and `sizes` attributes (Microsoft Edge Developer [blog post](https://blogs.windows.com/msedgedev/2015/06/08/introducing-srcset-responsive-images-in-microsoft-edge/))
* `selectionDirection` attribute
* `input type=time` and `input type=datetime-local`

### Object RTC API 
Object Real-Time Communications (ORTC) enables media (audio and/or video) to be streamed (sent and received) in real-time directly between web browsers, mobile devices, and servers via native JavaScript APIs. Check out the Dev guide topic [Object RTC API](https://docs.microsoft.com/microsoft-edge/dev-guide/realtime-communication/object-rtc-api) for more information about ORTC in Microsoft Edge. 

### Reading View
Microsoft Edge provides a reading view for a more streamlined, book-like reading experience of webpages without the distraction of unrelated or other secondary content on the page. Reading view can be toggled on or off from the Reading view (book icon) button on the address bar (or with Ctrl + Shift + R). Visit [Reading view](https://docs.microsoft.com/microsoft-edge/dev-guide/browser/reading-view) for more information. 

### Search provider discovery
Rich search integration is built into the Microsoft Edge address bar, including search suggestions, results from the web, your browsing history, and favorites. Microsoft Edge follows the [OpenSearch 1.1](https://go.microsoft.com/fwlink/p/?LinkID=208582) specification to discover and use web search providers. If you are a search provider, [read more](https://docs.microsoft.com/microsoft-edge/dev-guide/browser/search-provider-discovery) about how to ensure that Microsoft Edge supports your service. 

### Support for WebKit APIs
For improved compatibility, Microsoft Edge supports a variety of "-webkit-" prefixed APIs. For a full list of supported "-webkit-" APIs, use the [API Catalog](https://developer.microsoft.com/microsoft-edge/platform/catalog/?page=1&q=webkit).

### Web Audio
Microsoft Edge introduces support for the [W3C Web Audio API](https://go.microsoft.com/fwlink/p/?LinkID=512167) specification. Web Audio is a high-level JavaScript API for processing and synthesizing audio in web applications to provide rich audio and music experiences. While the HTML5 `audio` element allows for basic streaming audio playback, Web Audio API provides a range of APIs that allow you to play multiple sounds with tight synchronization, and apply gain, fades, transitions, and basic effects on mixed audio. Read more about [Web Audio](https://docs.microsoft.com/microsoft-edge/dev-guide/multimedia/web-audio) in the Dev guide and on the [Microsoft Edge Developer blog](https://blogs.windows.com/msedgedev/2015/05/19/bringing-web-audio-to-microsoft-edge-for-interoperable-gaming-and-enthusiast-media/). 

### Web Driver 
The [W3C WebDriver API](http://www.w3.org/TR/webdriver/) is a platform and language-neutral interface and wire protocol allowing programs or scripts to control the behavior of a web browser. WebDriver enables developers to create automated tests that simulate user interaction. This is different from JavaScript unit tests because WebDriver has access to functionality and information that JavaScript running in the browser doesn't, and it can more accurately simulate user events or OS-level events. WebDriver can also manage testing across multiple windows, tabs and webpages in a single test session.  For more information on how to get started with WebDriver for Microsoft Edge, check out [WebDriver](https://docs.microsoft.com/microsoft-edge/dev-guide/tools/webdriver). 


## New APIs in EdgeHTML 12

Here's the full list of new APIs in EdgeHTML 12.  They are listed in the format of **[interface name].[api name]**.

 > [!NOTE] 
 > Many of these APIs were available in IE11. The data below for EdgeHTML 12 is offered as a baseline for comparing the initial version of EdgeHTML to later versions.

<iframe height='580' scrolling='no' title='New APIs in EdgeHTML 12' src='//codepen.io/MicrosoftEdgeDocumentation/embed/pPOwby/?height=580&theme-id=23761&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/MicrosoftEdgeDocumentation/pen/pPOwby/'>New APIs in EdgeHTML 12</a> by Microsoft Edge Docs (<a href='https://codepen.io/MicrosoftEdgeDocumentation'>@MicrosoftEdgeDocumentation</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>
