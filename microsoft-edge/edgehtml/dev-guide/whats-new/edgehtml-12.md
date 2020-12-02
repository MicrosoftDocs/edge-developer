---
description: This page provides an overview of what's new in EdgeHTML 12.
title: New features and APIs in EdgeHTML 12
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
ms.date: 12/02/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# What's new in EdgeHTML 12  

[!INCLUDE [deprecation-note](../../includes/legacy-edge-note.md)]  

Microsoft Edge introduces EdgeHTML, a new "living" engine designed with interoperability at its core, to ensure that you are always getting the latest and greatest Windows web platform.  Microsoft Edge presents a clean break from the past, free from the legacy code needed to support ActiveX controls, Browser Helper Objects \(BHOs\), and other bygone web development practices.  Additionally, Microsoft Edge provides native PDF support.  As of IE11, legacy document modes have been deprecated, and with Microsoft Edge, the browser infrastructure to support them does not exist.  Check out the [IEBlog](/archive/blogs/ie/living-on-the-edge-our-next-step-in-interoperability) for more info.  

Here are the changes shipped with EdgeHTML 12 in the initial release of [Windows 10](https://blogs.windows.com/windowsexperience/2015/07/28/windows-10-free-upgrade-available-in-190-countries) \(07/2015, Build 10240\).  For an overview of changes to the overall Microsoft Edge browser, see [A break from the past: the birth of Microsoft's new web rendering engine](https://blogs.windows.com/msedgedev/2015/02/26) and [A break from the past, part 2: Saying goodbye to ActiveX, VBScript, attachEvent...](https://blogs.windows.com/msedgedev/2015/05/06).  

Here's the permalink for the following list of changes:  [https://aka.ms/devguide_edgehtml_12](./edgehtml-12.md).  

## New Features  

### Content Security Policy 1.0  

Microsoft Edge now implements Content Security Policy \(CSP\) 1.0.  The CSP security standard enables web developers to control the resources \(script, CSS, plugins, images, etc.\) which a particular page can fetch or execute with the aim of preventing cross-site scripting \(XSS\), clickjacking, and other code injection attacks seeking to execute malicious content in the context of a trusted web page.  Check out [Content Security Policy](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) for more information about CSP in Microsoft Edge.  

### Filter Effects  

Microsoft Edge provides an easy way to add visual effects to elements.  Using the `filter` property you can add blurs, adjust the brightness, add a drop shadow, change the opacity, and more to an element.  Using purely CSS, you can apply multiple filter effects to one element and animate the filters.  For more information, see [Filter effects](https://developer.mozilla.org/docs/Web/CSS/filter).  

### JavaScript  

JavaScript support varies slightly between the final version of Internet Explorer \(IE11\) and Microsoft Edge.  New features in Edge include:  

:::row:::
   :::column span="1":::
      **Statements**  
   :::column-end:::
   :::column span="2":::
      [class](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/class) \(experimental\), [for...of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of)  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      **Objects**  
   :::column-end:::
   :::column span="2":::
      [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise), [Proxy](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Proxy), [Symbol](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol), [WeakSet](/scripting/javascript/reference/weakset-object-javascript)  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      **Functions**  
   :::column-end:::
   :::column span="2":::
      [acosh](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/acosh), [codePointAt](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/codepointat), [fromCodePoint](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/fromcodepoint), [hypot](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot), [imul](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/imul), [isInteger](/scripting/javascript/reference/number-isinteger-function-number-javascript), [isNaN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/isnan), [raw](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/raw)  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      **Methods**  
   :::column-end:::
   :::column span="2":::
      [includes](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/includes), [keys](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/keys) \(Array\), [repeat](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/repeat) \(String\), [values](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/values) \(Array\)  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      **Other features**  
   :::column-end:::
   :::column span="2":::
      [Functions](https://developer.mozilla.org/docs/Learn/JavaScript/Building_blocks/Functions) \(experimental\), [Generators](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Iterators_and_generators),  [Iterators](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Iterators_and_generators), [Regular Expression `y` flag](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp) \(experimental\), [Template strings](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Template_literals), [Unicode code point escape characters](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Lexical_grammar#String_literals)  
   :::column-end:::
:::row-end:::  

For a comparison of JavaScript support across Internet Explorer, Microsoft Edge, and Microsoft Store apps, see [JavaScript Version Information](./javascript-version-information.md).  

### Media Capture and Streams  

Microsoft Edge introduces support for the Media Capture and Streams APIs based on the [W3C Media Capture and Streams](https://w3c.github.io/mediacapture-main/getusermedia.html) specification.  These JavaScript APIs allow webpages to access media capture devices, like webcams or microphones, with permission from the user.  By using the Media Capture and Streams APIs, you can create scenarios like capturing a photo using a webcam or capturing a voice message from a microphone.  Read more about Media Capture in Microsoft Edge on the [Microsoft Edge Developer blog](https://blogs.windows.com/msedgedev/2015/05/13).  

### New HTML element and attributes  

*   `meter` element  
*   `picture` element  
*   `template` element  
*   `image` element: `srcset` and `sizes` attributes \(Microsoft Edge Developer [blog post](https://blogs.windows.com/msedgedev/2015/06/08)\)  
*   `selectionDirection` attribute  
*   `input type=time` and `input type=datetime-local`  

### Object RTC API  

Object Real-Time Communications \(ORTC\) enables media \(audio and/or video\) to be streamed \(sent and received\) in real-time directly between web browsers, mobile devices, and servers via native JavaScript APIs.  Check out the Dev guide topic [Object RTC API](https://ortc.org) for more information about ORTC in Microsoft Edge.  

### Reading View  

Microsoft Edge provides a reading view for a more streamlined, book-like reading experience of webpages without the distraction of unrelated or other secondary content on the page.  Reading view can be toggled on or off from the Reading view \(book icon\) button on the address bar or with `Ctrl`+`Shift`+`R`.  Visit [Reading view](../browser-features/reading-view.md) for more information.  

### Search provider discovery  

Rich search integration is built into the Microsoft Edge address bar, including search suggestions, results from the web, your browsing history, and favorites.  Microsoft Edge follows the [OpenSearch 1.1](https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md) specification to discover and use web search providers.  If you are a search provider, [read more](../browser-features/search-provider-discovery.md) about how to ensure that Microsoft Edge supports your service.  

### Support for WebKit APIs  

For improved compatibility, Microsoft Edge supports a variety of `-webkit-` prefixed APIs.  For a full list of supported `-webkit-` APIs, use the [API Catalog](https://developer.microsoft.com/microsoft-edge/platform/catalog/?page=1&q=webkit).  

### Web Audio  

Microsoft Edge introduces support for the [W3C Web Audio API](https://webaudio.github.io/web-audio-api) specification.  Web Audio is a high-level JavaScript API for processing and synthesizing audio in web applications to provide rich audio and music experiences.  While the HTML5 `audio` element allows for basic streaming audio playback, Web Audio API provides a range of APIs that allow you to play multiple sounds with tight synchronization, and apply gain, fades, transitions, and basic effects on mixed audio.  Read more about [Web Audio](../multimedia/web-audio.md in the Dev guide and on the [Microsoft Edge Developer blog](https://blogs.windows.com/msedgedev/2015/05/19).  

### Web Driver  

The [W3C WebDriver API](https://w3.org/TR/webdriver) is a platform and language-neutral interface and wire protocol allowing programs or scripts to control the behavior of a web browser.  WebDriver enables developers to create automated tests that simulate user interaction.  This is different from JavaScript unit tests because WebDriver has access to functionality and information that JavaScript running in the browser doesn't, and it can more accurately simulate user events or OS-level events.  WebDriver can also manage testing across multiple windows, tabs and webpages in a single test session.  For more information on how to get started with WebDriver for Microsoft Edge, check out [WebDriver](../../webdriver/index.md).  

## New APIs in EdgeHTML 12  

Here's the full list of new APIs in EdgeHTML 12.  They are listed in the format of `[interface name].[api name]`.  

 > [!NOTE] 
 > Many of these APIs were available in IE11.  The data below for EdgeHTML 12 is offered as a baseline for comparing the initial version of EdgeHTML to later versions.  

<iframe height='580' scrolling='no' title='New APIs in EdgeHTML 12' src='//codepen.io/MicrosoftEdgeDocumentation/embed/pPOwby/?height=580&theme-id=23761&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/MicrosoftEdgeDocumentation/pen/pPOwby/'>New APIs in EdgeHTML 12</a> by Microsoft Edge Docs (<a href='https://codepen.io/MicrosoftEdgeDocumentation'>@MicrosoftEdgeDocumentation</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>  
