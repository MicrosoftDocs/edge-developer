---
title: New features and APIs in EdgeHTML 17
description: This guide provides an overview of the developer features and standards included in EdgeHTML 17.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
ms.date: 12/02/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# What's new in EdgeHTML 17  

[!INCLUDE [deprecation-note](../../includes/legacy-edge-note.md)]  

Here's a list of the new and updated features shipped in [EdgeHTML 17](https://blogs.windows.com/msedgedev/2018/04/30) web platform, as part of the [Windows 10 April 2018 Update](https://blogs.windows.com/windowsexperience/2018/04/27) \(04/2018, Build 17134\).  For changes in specific [Windows Insider](https://insider.windows.com) Preview builds, see the [Microsoft Edge Changelog](https://developer.microsoft.com/microsoft-edge/platform/changelog) and [What's New in EdgeHTML](../whats-new.md).  

Here's the permalink for the following list of changes: [https://aka.ms/devguide_edgehtml_17](./edgehtml-17.md).  

## New and updated features  

### ARIA 1.1 Roles, States, and Events  

EdgeHTML 17 adds support for various roles, states, and properties from the [Accessible Rich Internet Applications (WAI-ARIA) 1.1 specification](https://w3.org/TR/wai-aria-1.1), including [feed](https://www.w3.org/TR/wai-aria-1.1#feed), [form](https://www.w3.org/TR/wai-aria-1.1#form), [aria-haspopup](https://w3.org/TR/wai-aria-1.1#aria-haspopup), [aria-placeholder](https://w3.org/TR/wai-aria-1.1#aria-placeholder), and many more; find a [full list of ARIA updates in the changelog](https://developer.microsoft.com/microsoft-edge/platform/changelog/desktop/17134/?compareWith=16299).  With this update, EdgeHTML 17 now supports all roles and attributes defined in WAI-ARIA 1.1.  <!--  Check out the [Accessibility](../../accessibility.md) docs for more information about accessibility in Microsoft Edge.  -->  

### CSS masking  

EdgeHTML 17 includes experimental support for [CSS Masking](https://developer.mozilla.org/docs/Web/CSS/CSS_Masking).  The partial implementation introduces the CSS [mask-image](https://developer.mozilla.org/docs/Web/CSS/mask-image) and [mask-size](https://developer.mozilla.org/docs/Web/CSS/mask-size) properties.  Check the "Enable CSS Masking" flag in about:flags to being experimenting!  

### CSS transforms on SVG elements  

EdgeHTML 17 now supports CSS transforms on SVG elements and presentation attributes.  This allows SVG elements to be visually manipulated, including rotating, scaling, moving, skewing, or translating.  

### Extensions  

Microsoft Edge now supports the [Notification API](https://developer.mozilla.org/Add-ons/WebExtensions/API/notifications) which displays notifications from extensions.  Extension developers can now create different types of notifications \(basic, list, image  and so on\) which support full user interaction.  The notifications are also automatically logged into the Action Center.  Visit the [notifications sample](https://github.com/MicrosoftEdge/MicrosoftEdge-Extensions-Demos/tree/notifications/notifications) on how to use this API in your extension.  

EdgeHTML 17 now also supports the `Tabs.reload()` method as part of the standard tabs API class.  Also new in the Windows 10 April 2018 Update, users can now choose to allow extensions to run during inPrivate browsing.  

For more details on extensions updates in this release, head over to the blog post [New features for extensions in the Windows 10 April 2018 Update](https://blogs.windows.com/msedgedev/2018/05/24).  

### DevTools  

This release of the DevTools ships in two ways: as the traditional in-browser \(`F12`\) tools for Microsoft Edge, and previewing as a standalone [Windows 10 app](../../devtools-guide/whats-new/edgehtml-17.md#microsoft-edge-devtools-app-preview) from the Microsoft Store!  

:::image type="complex" source="../../devtools-protocol/media/microsoft-edge-devtools.png" alt-text="Microsoft Edge DevTools app" lightbox="../../devtools-protocol/media/microsoft-edge-devtools.png":::
   Microsoft Edge DevTools app  
:::image-end:::  

The tools have also been updated with a number of major features, including basic support for [remote debugging](../../devtools-guide/whats-new/edgehtml-17.md#devtools-protocol) \(via our new [DevTools Protocol](../../devtools-guide/whats-new/edgehtml-17.md#devtools-protocol)\), [PWA debugging features](../../devtools-guide/whats-new/edgehtml-17.md#pwa-debugging), [IndexedDB cache management](../../devtools-guide/whats-new/edgehtml-17.md#indexeddb-inspection), [vertical docking](../../devtools-guide/whats-new/edgehtml-17.md#docking-to-the-right-in-microsoft-edge) and more! We also continued the overall [refactoring effort](./edgehtml-16.md) started last release as part of ongoing investments in performance and reliability.  

Visit [DevTools in the latest Windows 10 update (EdgeHTML 17)](../../devtools-guide/whats-new/edgehtml-17.md) for more details.  

### JavaScript  

With EdgeHTML 17 the Chakra JavaScript engine introduces performance improvements in a number of key areas:  

:::row:::
   :::column span="1":::
      **Leaner memory footprint**  
   :::column-end:::
   :::column span="2":::
      *   \(Re-\)defer parsing for [arrow functions](https://github.com/Microsoft/ChakraCore/pull/4105) and [methods on object literals](https://github.com/Microsoft/ChakraCore/pull/4136)  
      *   [RegExp bytecode refactoring](https://github.com/Microsoft/ChakraCore/pull/3915)  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      **Faster JavaScript built-ins**
   :::column-end:::
   :::column span="2":::
      *   [Type sharing for Object.create](https://github.com/Microsoft/ChakraCore/pull/3901)  
      *   [Polymorphic inline cache for Object.assign](https://github.com/Microsoft/ChakraCore/pull/3792)  
      *   [JSON.parse/stringify optimizations](https://github.com/Microsoft/ChakraCore/pull/4077)  
      *   [Rewriting Array Iterators in JavaScript and faster for...of](https://github.com/Microsoft/ChakraCore/pull/4095)  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      **Web Assembly**
   :::column-end:::
   :::column span="2":::
      *   [Inling support](https://github.com/Microsoft/ChakraCore/pull/3681)  
   :::column-end:::
:::row-end:::  

Check out [Improved JavaScript and WebAssembly performance in EdgeHTML 17](https://blogs.windows.com/msedgedev/2018/06/19) for all the details.  

### Media element

EdgeHTML 17 includes updates to [HTMLMediaElement](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement) including:  

*   The new `preload` attribute on the [`<media>`](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement) element indicates what data should be preloaded.
*   The addition of the [`setSinkId()`](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/setSinkId) method and [`sinkId`](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/sinkId) property allow developers to select the audio output device.  
    
    > [!NOTE]
    > This is not yet available in RTC.  
    
### Media Capture API  

Microsoft Edge now supports Screen Capture in RTC via the [Media Capture API](https://w3c.github.io/mediacapture-screen-share).  This feature lets web pages capture output of a user's display device, commonly used to broadcast a desktop for plugin-free virtual meetings or presentation.  

### Progressive Web Apps  

Starting in EdgeHTML 17, Service Workers and push notifications are enabled by default \(learn more about these features in the blog post [Service Worker: Going beyond the page](https://blogs.windows.com/msedgedev/2017/12/19)).  This completes the suite of technologies \(including Fetch networking and the Push and Cache APIs\) that lays the technical foundation for progressive Web Apps \(PWAs\) on Windows 10.  

PWAs are simply web apps that are [progressively enhanced](https://en.wikipedia.org/wiki/Progressive_enhancement) with native app-like features on supporting platforms and browser engines, such as installation / home screen launch, offline support, and push notifications.  On Windows 10 with the Microsoft Edge \(EdgeHTML\) engine, PWAs enjoy the added advantage of running independently of the browser window as [Universal Windows Platform](/windows/uwp/get-started/whats-a-uwp) apps.  

Beyond PWAs, Service Workers and the Cache API allow developers the ability to intercept network requests and respond from the cache.  A website need not even been a full-blow web app to take advantage of the Service Worker cache for fine-tined page load performance and reliability, as well as the ability to provide an offline experience during periods of no internet or poor-quality connection.  

Head over to our [Progressive Web Apps on Windows](../../progressive-web-apps/index.md) docs to learn more about Service Workers and details about PWAs on Windows 10.  

### Web Security  

EdgeHTML 17 introduces support for Subresource Integrity \(SRI\).  [Subresource Integrity](https://developer.mozilla.org/docs/Web/Security/Subresource_Integrity) is a security feature that allows browsers to verify that fetched resources \(such as images, scripts, fonts, and so on\) are delivered without unexpected manipulation.  

Add an `integrity` attribute containing a cryptographic hash representation of the resource that you expect to load on your webpage to a `<script>` or `<link>` element, like the example below.  Then, Microsoft Edge will compare the requested resource to the hash defined in the `integrity` attribute.  If they do not match, Microsoft Edge will not execute the resource and returns an error to the network.  

```html
<script src="https://example.com/example-framework.js" 
        integrity="sha384-Li9vy3DqF8tnTXuiaAJuML3ky+er10rcgNR/VqsVpcw+ThHmYcwiB1pbOxEbzJr7" 
        crossorigin="anonymous"></script>
```  

Also new in EdgeHTML 17, the [Upgrade-Insecure-Requests](https://developer.mozilla.org/docs/Web/HTTP/Headers/Upgrade-Insecure-Requests) request header allows browsers to request a secure browsing experience.  This header tells the server that the browser supports upgrading any insecure requests and the user should be redirected to a secure version of the site if available.  

### Variable Fonts
Full support for Variable Fonts \(including CSS [font-variation-settings](https://developer.mozilla.org/docs/Web/CSS/font-variation-settings) and [font-optical-sizing](https://developer.mozilla.org/docs/Web/CSS/font-variation-settings)\) is available in EdgeHTML 17.  Variable fonts enable developers to achieve the look of seemingly different typefaces with a single font by adjusting various axes – reducing the need for multiple font files and bettering performance.  

Join us on [an expedition to learn about what variable fonts provide web developers and designers](https://developer.microsoft.com/microsoft-edge/testdrive/demos/variable-fonts), and how to use them on your site.  And read more about Variable Fonts in the blog post, [Bringing expressive, performant typography to Microsoft Edge with Variable Fonts](https://blogs.windows.com/msedgedev/2018/03/13).  

<iframe height='456' scrolling='no' title='Variable Tides ticket examples' src='//codepen.io/MSEdgeDev/embed/dmYvWg/?height=456&theme-id=23761&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/MSEdgeDev/pen/dmYvWg/'>Variable Tides ticket examples</a> by MSEdgeDev (<a href='https://codepen.io/MSEdgeDev'>@MSEdgeDev</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>  

## New APIs in EdgeHTML 17  

Here's the full list of new APIs in EdgeHTML 17.  They are listed in the format of `[interface name].[api name]`.  

> [!NOTE] 
> Although the following APIs are exposed in the DOM, the end-to-end behavior of some might still be in development.  Refer to  [Microsoft Edge platform status](https://developer.microsoft.com/microsoft-edge/platform/status) for the official word on feature support.  

<iframe height='580' scrolling='no' title='New APIs in EdgeHTML 17' src='//codepen.io/MSEdgeDev/embed/pLxgdj/?height=608&theme-id=23401&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/MSEdgeDev/pen/pLxgdj/'>New APIs in EdgeHTML 17</a> by MSEdgeDev (<a href='https://codepen.io/MSEdgeDev'>@MSEdgeDev</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>  

> [!TIP]
> We've [partnered](https://blogs.windows.com/msedgedev/2017/10/18) with other browsers and the web community in adopting [MDN Web Docs](https://developer.mozilla.org) as the definitive place for useful, unbiased, browser-agnostic documentation for current and emerging standards-based web technologies.  You can find details about EdgeHTML API support directly in each page of the [MDN web reference library](https://developer.mozilla.org/docs/Web).  Visit Microsoft Edge's [Platform status](https://developer.microsoft.com/microsoft-edge/status) for the latest features supported in Microsoft Edge.  

## Previous EdgeHTML releases  

[EdgeHTML 13 / Windows build 10586 (11/2015)](https://aka.ms/devguide_edgehtml_13)  

[EdgeHTML 14 / Windows build 14393 (8/2016)](https://aka.ms/devguide_edgehtml_14)  

[EdgeHTML 15 / Windows build 15063 (4/2017)](https://aka.ms/devguide_edgehtml_15)  

[EdgeHTML 16 / Windows build 16299 (10/2017)](https://aka.ms/devguide_edgehtml_16)  
