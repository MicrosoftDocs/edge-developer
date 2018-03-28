---
ms.assetid: fbe638cc-5d0c-4d87-92a4-f93eb06130d1
description: Learn how Touch Events allow you to interpret user interaction with a touch screen via finger, stylus, or trackpad, including multi-touch interactions.
title: Dev guide - Touch events
author: abbycar
ms.author: abigailc
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Touch events

Microsoft Edge implements touch event interfaces to enable the ability to interpret touch interaction. Interactions can be made with touch screens via finger or stylus, or trackpads. These interfaces can even support multi-touch interactions so that applications can take advantage of more complex gestures.

A touch, represented by the [`Touch`](https://msdn.microsoft.com/library/dn792855) object, is a single touch point and contains info about the position of the touch point relative to the browser viewport and the x,y coordinates relative to the screen.
During a touch interaction, an application receives touch events during the start, move and end phases. A touch interaction ends when the fingers are removed from the surface. 


Microsoft Edge supports the following touch interfaces:

Interface | Description
:------- | :--------
[Touch](https://msdn.microsoft.com/library/dn792855) | Represents an individual touch point for a touch event.
[TouchEvent](https://msdn.microsoft.com/library/dn792856) | Used for the [`touchstart`](https://msdn.microsoft.com/library/dn792854), [`touchend`](https://msdn.microsoft.com/library/dn792852), [`touchmove`](https://msdn.microsoft.com/library/dn792853), and [`touchcancel`](https://msdn.microsoft.com/library/dn792851) event types.
[TouchList](https://msdn.microsoft.com/library/dn792864) | Provides the list of individual points of contact for a touch event.



## Demos

[Touch Effects](http://go.microsoft.com/fwlink/p/?LinkID=232976)

## Specification

[Touch Events](https://www.w3.org/TR/touch-events/)
