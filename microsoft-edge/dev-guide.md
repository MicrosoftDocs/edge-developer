---
ms.assetid: 476c4b7a-be24-434b-a051-83f19d741aaf
description: This guide provides an overview of the developer features and standards included in Microsoft Edge.
title: Dev guide
author: erikadoyle
ms.author: edoyle
ms.date: 10/18/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Microsoft Edge Developer Guide

> [!TIP]
> We've partnered with other browsers and the web community in adopting [MDN Web Docs](https://developer.mozilla.org/) as the definitive place for useful, unbiased, browser-agnostic documentation for current and emerging standards-based web technologies. You can find details about EdgeHTML API support directly in each page of the [MDN web reference library](https://developer.mozilla.org/docs/Web). Visit Microsoft Edge's [Platform status](https://developer.microsoft.com/microsoft-edge/platform/status/?q=edge%3AShipped%20edge%3APrefixed%20edge%3A'Preview%20Release) for the latest features supported in Microsoft Edge. 


## What's new in EdgeHTML 16

Here's a list of the new and updated features shipped in the current release of the Microsoft Edge platform, as of the [Windows 10 Fall Creators Update](https://blogs.windows.com/windowsexperience/2017/10/17/whats-new-windows-10-fall-creators-update/#zdURfPb34hBRFT3W.97) (10/2017, Build 16299). For changes in specific Windows Insider Preview builds, see the [Microsoft Edge Changelog](https://developer.microsoft.com/microsoft-edge/platform/changelog/) and [What's New in EdgeHTML](./dev-guide/whats-new.md).
 
Here's the permalink for the following list of changes: [https://aka.ms/devguide_edgehtml_16](https://aka.ms/devguide_edgehtml_16).

## New and updated features

### CSS Grid Layout

Microsoft Edge now supports the unprefixed implementation of [CSS Grid Layout](http://www.w3.org/TR/css-grid-1/). [Grid Layout](https://developer.mozilla.org/docs/Web/CSS/CSS_Grid_Layout) defines a two-dimensional grid-based layout system which enables more layout fluidity than possible with positioning using floats or scripts. The example below uses CSS Grid Layout to create the structure for a basic web page.


<iframe height='303' scrolling='no' title='CSS Grid Layout' src='//codepen.io/MicrosoftEdgeDocumentation/embed/mMQqZX/?height=303&theme-id=23761&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/MicrosoftEdgeDocumentation/pen/mMQqZX/'>CSS Grid Layout</a> by Microsoft Edge Docs (<a href='https://codepen.io/MicrosoftEdgeDocumentation'>@MicrosoftEdgeDocumentation</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


### CSS `object-fit` and `object-position`

EdgeHTML 16 introduces support for CSS properties [`object-fit`](https://developer.mozilla.org/docs/Web/CSS/object-fit) and [`object-position`](https://developer.mozilla.org/docs/Web/CSS/object-position).  These properties control the position and size of replaced content within the content box.  

### F12 Developer Tools

This release we started a major F12 DevTools refactoring effort for improved robustness and performance, and also added a bunch of new features you can start using today on [Windows Insider](https://insider.windows.com/) builds.  Check out [Microsoft Edge F12 Developer Tools](./f12-devtools-guide/whats-new.md) for more on what's changed!

![Experimental service worker debugging support in F12 DevTools](./f12-devtools-guide/media/debugger_sw_inspect.png)

### Payment Request API

The [Payment Request API](./dev-guide/device/payment-request-api.md) is an open, cross-browser standard that enables browsers to act as an intermediary between merchants, consumers, and payment methods (e.g. credit cards) that consumers have stored in the cloud.  The API in EdgeHTML 16 has been updated to match the latest W3C [Payment Request API](https://w3c.github.io/payment-request/) specification. This includes:
* Support for the `canMakePayment()` method
* Support for the `requestId` property
* Support for the `id` property
* The default value for the `complete()` method's `result` parameter changed from " " to "unknown"

### Service Workers

[Service Workers](http://www.w3.org/TR/service-workers-1/) are event-driven scripts that run in the background of a web page. Service workers enable functionality previously only available with native apps like intercepting and handling requests from the network, managing and handling background sync, local storage, and push notifications. Support for service worker is still in development, but you can test out your PWA in Microsoft Edge with our experimental service worker support by enabling the service worker feature in **about:flags**.

### WebVR
WebVR for Microsoft Edge has added support for [motion controllers](https://developer.microsoft.com/windows/mixed-reality/motion_controllers). These controllers have a precise position in space, allowing for fine grained interaction with digital objects in virtual reality.

![Motion controllers](./dev-guide/media/MotionControllers.jpg)

WebVR has also been optimized to support two different types of experiences.

**Windows Mixed Reality PCs** - Desktops and laptops with integrated graphics.  When plugged into these devices, our immersive headsets will run at 60 frames per second.  
**Windows Mixed Reality Ultra PCs** - Desktops and laptops with discrete graphics. When plugged into these devices, our immersive headsets will run at 90 frames per second.   
 
Both setups will support the same immersive video and gaming experiences. 
 
For more info about the upcoming Windows Mixed Reality updates, check out the [Windows Mixed Reality](https://blogs.windows.com/windowsexperience/2017/08/28/windows-mixed-reality-holiday-update/) holiday update blog post. 

For guides and demos, head over to the [WebVR Developer Guide](https://docs.microsoft.com/microsoft-edge/webvr/).

 > [!NOTE] 
 > Since the WebVR spec is still in development, Microsoft Edge's implementation may change later down the line.
 
## New APIs in EdgeHTML 16

Here's the full list of new APIs in EdgeHTML 16. They are listed in the format of **[interface name].[api name]**.

> [!NOTE] 
> Although the following APIs are exposed in the DOM, the end-to-end behavior of some might still be in development. Refer to  [Microsoft Edge platform status](https://developer.microsoft.com/en-us/microsoft-edge/platform/status/) for the official word on feature support.

<iframe height='559' scrolling='no' title='New APIs in EdgeHTML 16' src='//codepen.io/MicrosoftEdgeDocumentation/embed/jLGZZY/?height=559&theme-id=23761&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/MicrosoftEdgeDocumentation/pen/jLGZZY/'>New APIs in EdgeHTML 16</a> by Microsoft Edge Docs (<a href='https://codepen.io/MicrosoftEdgeDocumentation'>@MicrosoftEdgeDocumentation</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>
 
## Previous EdgeHTML releases
[EdgeHTML 12 / Windows build 10240 (7/2015)](https://aka.ms/devguide_edgehtml_12)

[EdgeHTML 13 / Windows build 10586 (11/2015)](https://aka.ms/devguide_edgehtml_13)

[EdgeHTML 14 / Windows build 14393 (8/2016)](https://aka.ms/devguide_edgehtml_14)

[EdgeHTML 15 / Windows build 14393 (4/2017)](https://aka.ms/devguide_edgehtml_15)
