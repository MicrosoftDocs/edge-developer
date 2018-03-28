---
ms.assetid: e4b0876d-0fc0-4835-9f25-61da1b3ccd8b
description: See how Microsoft Edge brings enhanced scaling for high DPI screens with properties like devicePixelRatio.
title: Dev guide - High DPI support
author: abbycar
ms.author: abigailc
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# High DPI support

Microsoft Edge brings enhanced scaling for high DPI screens and small slates, ensuring the consistency of your website’s text, touch targets, and layout across Windows 10 devices.

Microsoft Edge supports the  [`devicePixelRatio`](https://msdn.microsoft.com/library/dn255104) property, which represents the ratio between physical device pixels and DPI-adjusted logical CSS pixels. This property has become the standard for device resolution across the web due to its simplicity.

## Improved scale factor selection

Microsoft Edge has logic for determining the most optimal scale factor, incorporating viewing distance considerations, a wider selection of default scale factors, and a number of other variables.

Zoom level settings range from 100% all the way up to 1000%, going up by increments of 25%.
Windows 10 consumers and OEMs  (Original Equipment Manufacturers) get more flexibility for consistently optimal viewing of your website across device form factors and screen resolutions.

## Unified optical zooming model

With Microsoft Edge all zooming is now handled with optical zoom, making the experience across zooming scenarios (such as [Pinch zoom](https://msdn.microsoft.com/library/windows/desktop/Dn742468#inter_touch_image5), Keyboard / mouse shortcuts, [`@-ms-viewport`](https://msdn.microsoft.com/library/Hh869615), and [`msContentZoomFactor`](http://msdn.microsoft.com/library/ie/hh772066)) much simpler and more predictable.



## API reference
[devicePixelRatio](https://msdn.microsoft.com/library/dn255104)

## Specification
[devicePixelRatio](https://www.w3.org/TR/cssom-view/#dom-window-devicepixelratio)
