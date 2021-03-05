---
description: This guide provides an overview of the developer features and standards included in EdgeHTML 16.
title: New features and APIs in EdgeHTML 16
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 11/03/2020
ms.topic: article
ms.prod: microsoft-edge
ms.assetid: 476c4b7a-be24-434b-a051-83f19d741aaf
keywords: edge, web development, html, css, javascript, developer
---
# What's new in EdgeHTML 16  

[!INCLUDE [deprecation-note](../../includes/legacy-edge-note.md)]  

Here's a list of the new and updated features shipped in [EdgeHTML 16](https://blogs.windows.com/msedgedev/2017/10/17) web platform, as part of the [Windows 10 Fall Creators Update](https://blogs.windows.com/windowsexperience/2017/10/17/whats-new-windows-10-fall-creators-update) \(10/2017, Build 16299\).  For changes in specific Windows Insider Preview builds, see the [Microsoft Edge Changelog](https://developer.microsoft.com/microsoft-edge/platform/changelog) and [What's New in EdgeHTML](../whats-new.md).  

Here's the permalink for the following list of changes:  [https://aka.ms/devguide_edgehtml_16](./edgehtml-16.md).  

## New and updated features  

### CSS Grid Layout  

Microsoft Edge now supports the un-prefixed implementation of [CSS Grid Layout](https://www.w3.org/TR/css-grid-1).  [Grid Layout](https://developer.mozilla.org/docs/Web/CSS/CSS_Grid_Layout) defines a two-dimensional grid-based layout system which enables more layout fluidity than possible with positioning using floats or scripts.  The example below uses CSS Grid Layout to create the structure for a basic web page.  

<iframe height='303' scrolling='no' title='CSS Grid Layout' src='//codepen.io/MSEdgeDev/embed/mMQqZX/?height=303&theme-id=23761&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true'>See the Pen <a href='https://codepen.io/MSEdgeDev/pen/mMQqZX/'>CSS Grid Layout</a>by MSEdgeDev (<a href='https://codepen.io/MSEdgeDev'>@MSEdgeDev</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>  

### CSS object-fit and object-position  

EdgeHTML 16 introduces support for CSS properties [`object-fit`](https://developer.mozilla.org/docs/Web/CSS/object-fit) and [`object-position`](https://developer.mozilla.org/docs/Web/CSS/object-position).  These properties control the position and size of replaced content within the content box.  

### Developer Tools  

This release we started a major Microsoft Edge DevTools refactoring effort for improved robustness and performance, and also added a bunch of new features you can start using today on [Windows Insider](https://insider.windows.com) builds.  Check out the [Microsoft Edge DevTools guide](../whats-new.md) for more on what's changed!  

### JavaScript  

[EdgeHTML 16 builds on Javascript performance](https://blogs.windows.com/msedgedev/2017/10/31) optimizations of previous releases by expanding the Chakra engine's ability to defer/re-defer functions, use polymorphic inline caches, and optimize functions with `try`/`finally` blocks.  

Additionally, features first previewed in EdgeHTML 15 are now stable and enabled by default:  

#### New features  

On by default  

*   [WebAssembly](https://developer.microsoft.com/microsoft-edge/platform/status/webassemblymvp/?q=WebAssembly) MVP \([demo](https://webassembly.org/demo)\)  
*   [Shared Memory and Atomics](https://developer.microsoft.com/microsoft-edge/platform/status/sharedmemoryandatomics/?q=Atomics)  

### Payment Request API  

The [Payment Request API](../windows-integration/payment-request-api.md) is an open, cross-browser standard that enables browsers to act as an intermediary between merchants, consumers, and payment methods \(such as credit cards\) that consumers have stored in the cloud.  The API in EdgeHTML 16 has been updated to match the latest W3C [Payment Request API](https://w3c.github.io/payment-request) specification.  This includes:  

*   Support for the `canMakePayment()` method  
*   Support for the `requestId` property  
*   Support for the `id` property  
*   The default value for the `complete()` method's `result` parameter changed from " " to "unknown"  

### Service Workers  

[Service Workers](https://www.w3.org/TR/service-workers-1) are event-driven scripts that run in the background of a web page.  Service workers enable functionality previously only available with native apps like intercepting and handling requests from the network, managing and handling background sync, local storage, and push notifications.  Support for service worker is still in development, but you can test out your PWA in Microsoft Edge with our experimental service worker support by enabling the service worker feature in `about:flags`.  

### WebVR  

WebVR for Microsoft Edge has added support for [motion controllers](https://developer.microsoft.com/windows/mixed-reality/motion_controllers).  These controllers have a precise position in space, allowing for fine grained interaction with digital objects in virtual reality.  

:::image type="complex" source="../media/MotionControllers.jpg" alt-text="Motion controllers" lightbox="../media/MotionControllers.jpg":::
   Motion controllers  
:::image-end:::  

WebVR has also been optimized to support two different types of experiences.  

**Windows Mixed Reality PCs** - Desktops and laptops with integrated graphics.  When plugged into these devices, our immersive headsets will run at 60 frames per second.  
**Windows Mixed Reality Ultra PCs** - Desktops and laptops with discrete graphics.  When plugged into these devices, our immersive headsets will run at 90 frames per second.  

Both setups will support the same immersive video and gaming experiences.  

For more info about the upcoming Windows Mixed Reality updates, check out the [Windows Mixed Reality](https://blogs.windows.com/windowsexperience/2017/08/28/windows-mixed-reality-holiday-update) holiday update blog post.  

For guides and demos, head over to the [WebVR Developer Guide](/microsoft-edge/webvr).  

 > [!NOTE] 
 > Since the WebVR spec is still in development, Microsoft Edge's implementation may change later down the line.  

## New APIs in EdgeHTML 16  

Here's the full list of new APIs in EdgeHTML 16.  They are listed in the format of `[interface name].[api name]`.

> [!NOTE] 
> Although the following APIs are exposed in the DOM, the end-to-end behavior of some might still be in development.  Refer to [Microsoft Edge platform status](https://developer.microsoft.com/microsoft-edge/platform/status) for the official word on feature support.  

---  

<iframe height='559' scrolling='no' title='New APIs in EdgeHTML 16' src='//codepen.io/MSEdgeDev/embed/jLGZZY/?height=559&theme-id=23761&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true'>See the Pen <a href='https://codepen.io/MSEdgeDev/pen/jLGZZY/'>New APIs in EdgeHTML 16</a>by MSEdgeDev (<a href='https://codepen.io/MSEdgeDev'>@MSEdgeDev</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>  

---  

## Previous EdgeHTML releases  

[EdgeHTML 12 / Windows build 10240 (7/2015)](./edgehtml-12.md)  

[EdgeHTML 13 / Windows build 10586 (11/2015)](./edgehtml-13.md)  

[EdgeHTML 14 / Windows build 14393 (8/2016)](./edgehtml-14.md)  

[EdgeHTML 15 / Windows build 15063 (4/2017)](./edgehtml-15.md)  
