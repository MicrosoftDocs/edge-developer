---
ms.assetid: a6b51650-30b8-4900-9dce-287ecb677e6c
description: Learn how Media Queries enable you to scope a stylesheet to a set of precise device capabilities.
title: Dev guide - Media queries
author: libbymc
ms.author: libbymc
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Media Queries 

Media Queries enable you to scope a stylesheet to a set of precise device capabilities. Through media query listeners, you can also use script to react to changes in the media or environment in which your page is running.


## Using media queries

Media queries enable you to design pages differently for users browsing on a mobile device (very small screen, limited color palette, low resolution, etc.) versus a netbook (small screen, full color palette, high resolution, etc.) versus a standard computer (large screen, full color palette, high resolution, etc.). A media query is a logical expression that is either true or false. You can add keywords like `and`, `not`, `only`, or use comma-separated lists to make more targeted media queries. 

The following declaration is a typical media query, using the @media rule.

``` css
@media screen and (max-width:400px) {
   div {border:none;}
}
```
In this case the  `screen` indicates the target media type, and `max-width` is the target media property. The declaration states that the specified rules (no border on `div` elements) are only to be applied when the page is displayed on a screen with a width of at most 400 pixels. 


``` css
@media screen and (max-width:400px) and (max-height:600px) {
   …
}
```

This declaration applies the specified rules when the medium is a screen that has a width of no more than 400 pixels and a height of no more than 600 pixels.


## Pointer and hover media features

The pointer media feature and the hover media feature from the [Media Queries Level 4](http://go.microsoft.com/fwlink/p/?linkid=524312) specification enable you to adapt your UI according to the input precision and modality of your user’s device. You can create a single site or web application that adapts to the device consuming the content, whether the user is browsing with a mouse, a pen, or a finger. 

The following example will make a specific class larger if a pointing device with limited accuracy is present.

``` css
@media (pointer: coarse) {
   .button {
      min-width: 100px;
      min-height: 50px;
   }
}
```

The following example hides a specific class if the primary pointing device cannot hover, like a finger on a smartphone.

``` css
@media (hover:none) {
   .menu {
      display: none;
   }
} 
```

## Resolution media feature

Using the [resolution](https://msdn.microsoft.com/library/hh772722(v=vs.85).aspx) media feature, you can target specific resolutions on output devices. The resolution of a device can be described in either dots per inch (dpi), dots per centimeter (dpcm), or dots per pixel (dppx). Dppx can also be described as physical pixels per CSS pixel. Using dppx is best practice.

When querying devices with non-square (rectangular) pixels: 

* Specifying min-resolution causes the least-dense dimension to be compared to the given value
* Specifying max-resolution causes the most-dense dimension to be compared to the given value
* Specifying resolution (without a "min-" or "max-" prefix) never matches a device with non-square pixels

The following declaration indicates that a style sheet is usable on devices with resolution greater than 2 dots per pixel (dppx). 

``` css
@media (min-resolution: 2dppx) {
 ...
}
```

## Other media features

Microsoft Edge supports a variety of media features.  See the table below for supported media features and their function. 

| Media query feature  | Description |
| ------------- | ------------- |
[aspect-ratio](https://msdn.microsoft.com/library/hh771844(v=vs.85).aspx) | Defined as the ratio of value of the width media feature to the value of the height media feature.
[color](https://msdn.microsoft.com/library/hh771855(v=vs.85).aspx) | Describes the number of bits per color component of the output device.
[color-index](https://msdn.microsoft.com/library/hh771852(v=vs.85).aspx) | Describes the number of entries in the color lookup table of the output device.
[device-aspect-ratio](https://msdn.microsoft.com/library/hh772062(v=vs.85).aspx) | Defined as the ratio of value of the device-width media feature to the value of the device-height media feature.
[device-height](https://msdn.microsoft.com/library/hh772063(v=vs.85).aspx) | Describes the height of the rendering surface of the output device.
[device-width](https://msdn.microsoft.com/library/hh772064(v=vs.85).aspx) | Describes the width of the rendering surface of the output device.
[height](https://msdn.microsoft.com/library/hh772070(v=vs.85).aspx) | Describes the height of the targeted display area of the output device.
[hover](https://msdn.microsoft.com/library/dn806241(v=vs.85).aspx) | Describes the ability of a user to hover over elements on a page.
[monochrome](https://msdn.microsoft.com/library/hh772375(v=vs.85).aspx) | Describes the number of bits per pixel in a monochrome frame buffer.
[-ms-high-contrast](https://msdn.microsoft.com/library/hh771830(v=vs.85).aspx) | Describes whether the application is being displayed in high contrast mode, and with what color variation.
[orientation](https://msdn.microsoft.com/library/hh772710(v=vs.85).aspx) | Describes whether the orientation of the targeted display area of the output device is portrait or landscape.
[pointer](https://msdn.microsoft.com/library/dn806274(v=vs.85).aspx) | Describes the existence and accuracy of a pointing device like a stylus or a mouse.
[resolution](https://msdn.microsoft.com/library/hh772722(v=vs.85).aspx) | Describes the resolution of the output device—that is, the density of the pixels.
[-webkit-device-pixel-ratio](https://msdn.microsoft.com/library/dn760733(v=vs.85).aspx) | Describes the resolution in physical pixels per CSS pixel.
[width](https://msdn.microsoft.com/library/hh772741(v=vs.85).aspx) | Describes the width of the targeted display area of the output device.
 


## API Reference
[Media Queries ](https://msdn.microsoft.com/library/hh772370(v=vs.85).aspx)

[Media Query Listeners](https://msdn.microsoft.com/library/hh772369(v=vs.85).aspx)


## Specification
[Media Queries Level 4](http://go.microsoft.com/fwlink/p/?linkid=524312)

