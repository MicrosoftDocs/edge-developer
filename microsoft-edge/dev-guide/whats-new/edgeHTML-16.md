
---
description: This guide provides an overview of the developer features and standards included in EdgeHTML 16.
title: What's Coming in EdgeHTML 16
author: libbymc
ms.author: libbymc
ms.date: 9/12/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer, microsoft edge, edgehtml, edgehtml 16, what's new
---

# What's Coming in EdgeHTML 16

Here's a list of the new and updated features coming in EdgeHTML 16.  These features are available in the latest [Windows Insider](https://insider.windows.com/) Preview builds, with general availability in October as part of the [Fall Creators Update](https://blogs.windows.com/windowsexperience/2017/05/11/build-2017-sparking-the-next-wave-of-creativity-with-the-windows-10-fall-creators-update). For changes in specific Windows Insider Preview builds, see the [Microsoft Edge Changelog](https://developer.microsoft.com/microsoft-edge/platform/changelog/).
 
Here's the permalink for the following list of changes: [https://aka.ms/devguide_edgehtml_16](https://aka.ms/devguide_edgehtml_16)

## New and updated features

### CSS Grid Layout

Microsoft Edge now supports the unprefixed implementation of [CSS Grid Layout](http://www.w3.org/TR/css-grid-1/). [Grid Layout](https://developer.mozilla.org/docs/Web/CSS/CSS_Grid_Layout) defines a two-dimensional grid-based layout system which enables more layout fluidity than possible with positioning using floats or scripts. The example below uses CSS Grid Layout to create the structure for a basic web page.

<iframe height='331' scrolling='no' title='CSS Grid Layout' src='//codepen.io/MicrosoftEdgeDocumentation/embed/mMQqZX/?height=331&theme-id=31247&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/MicrosoftEdgeDocumentation/pen/mMQqZX/'>CSS Grid Layout</a> by Microsoft Edge Docs (<a href='https://codepen.io/MicrosoftEdgeDocumentation'>@MicrosoftEdgeDocumentation</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>

### CSS `object-fit` and `object-position`

EdgeHTML 16 introduces support for CSS properties [`object-fit`](https://developer.mozilla.org/docs/Web/CSS/object-fit) and [`object-position`](https://developer.mozilla.org/docs/Web/CSS/object-position).  These properties control the position and size of replaced content within the content box.  

### F12 Developer Tools

The underlying architecture of F12 Tools was completely refactored for improved robustness and future extensibility. These improvements, plus new F12 Tools features like added functionality for debugging Progressive Web Apps, are available now in [Windows Insider](https://insider.windows.com/) builds.  Check out [Microsoft Edge F12 Developer Tools](./../f12/f12-devtools-guide.md) for more information on what's changed!

![Motion controllers](./../media/debugger_sw_inspect.PNG)

### Payment Request API

The [Payment Request API](https://docs.microsoft.com/microsoft-edge/dev-guide/device/payment-request-api) is an open, cross-browser standard that enables browsers to act as an intermediary between merchants, consumers, and the payment methods (e.g. credit cards) that consumers have stored in the cloud.  The API in EdgeHTML 16 has been updated to match the latest W3C [Payment Request API](https://w3c.github.io/payment-request/) specification. This includes:
* Support for the `canMakePayment()` method
* Support for the `requestId` property
* Support for the `id` property
* The default value for the `complete()` method's `result` parameter changed from " " to "unknown"

### Service Workers

[Service Workers](http://www.w3.org/TR/service-workers-1/) are event-driven scripts that run in the background of a web page. Service workers enable functionality previously only available with native apps like intercepting and handling requests from the network, managing and handling background sync, local storage, and push notifications. Support for service worker is still in development, but you can test out your PWA in Microsoft Edge with the preliminary implementation of service worker by enabling the functionality in **about:flags**.

### WebVR
WebVR for Microsoft Edge has added support for [motion controllers](https://developer.microsoft.com/windows/mixed-reality/motion_controllers). These controllers have a precise position in space, allowing for fine grained interaction with digital objects in virtual reality.

![Motion controllers](./../media/MotionControllers.jpg)

WebVR has also been optimized to support two different types of experiences.

**Windows Mixed Reality PCs** - Desktops and laptops with integrated graphics.  When plugged into these devices, our immersive headsets will run at 60 frames per second.  
**Windows Mixed Reality Ultra PCs** - Desktops and laptops with discrete graphics. When plugged into these devices, our immersive headsets will run at 90 frames per second.   
 
Both setups will support the same immersive video and gaming experiences. 
 
For more info about the upcoming Windows Mixed Reality updates, check out the [Windows Mixed Reality](https://blogs.windows.com/windowsexperience/2017/08/28/windows-mixed-reality-holiday-update/) holiday update blog post. 


## New APIs in EdgeHTML 16

Here's the full list of new APIs in EdgeHTML 16. They are listed in the format of **[interface name].[api name]**.

> [!NOTE] 
> Although the following APIs are exposed in the DOM, the end-to-end behavior of the APIs might still be in development.

<iframe height='559' scrolling='no' title='New APIs in EdgeHTML 16' src='//codepen.io/MicrosoftEdgeDocumentation/embed/jLGZZY/?height=559&theme-id=23761&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/MicrosoftEdgeDocumentation/pen/jLGZZY/'>New APIs in EdgeHTML 16</a> by Microsoft Edge Docs (<a href='https://codepen.io/MicrosoftEdgeDocumentation'>@MicrosoftEdgeDocumentation</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>
 
## Previous EdgeHTML releases
[EdgeHTML 12 / Windows build 10240 (7/2015)](https://aka.ms/devguide_edgehtml_12)

[EdgeHTML 13 / Windows build 10586 (11/2015)](https://aka.ms/devguide_edgehtml_13)

[EdgeHTML 14 / Windows build 14393 (8/2016)](https://aka.ms/devguide_edgehtml_14)

[EdgeHTML 15 / Windows build 14393 (4/2017)](https://aka.ms/devguide_edgehtml_15)
