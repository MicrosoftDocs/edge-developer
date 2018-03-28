---
ms.assetid: 2baec7bc-0201-4f30-a35e-9f1f7b60e9da
description: Learn how WebGL can be used to create dynamic 2D and 3D graphics for games and interactive content that harness the power of modern GPUs.
title: Dev guide - WebGL
author: abbycar
ms.author: abigailc
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# WebGL


Use [WebGL](https://www.khronos.org/registry/webgl/specs/latest/1.0/) in Microsoft Edge to create dynamic 2D and 3D graphics for games and interactive content. With WebGL you can create 2D and 3D experiences powered by the computer's graphics processing unit (GPU). Since WebGL is a web standard, you can write content that works across browsers and devices.


> [!WARNING]
> There are memory limits that affect WebGL for Windows Phone 8. See [App memory limits for Windows Phone 8](http://go.microsoft.com/fwlink/p/?LinkID=511858) for more info.


## Create WebGL content on your page

WebGL can range from simple to complex. However, most programs perform the following steps:

1.  Add a canvas element to the page, and create a new WebGL rendering context.
2.  Initialize a viewport.
3.  Upload arrays of coordinate (vertices) and image data (fragments or textures) to the GPU.
4.  Compile and run vertex and fragment shaders (programs that run on the GPU) to manipulate the vertex and image loaded in the previous step.
5.  Draw to the screen.

The GPU is optimized for these types of operations which enable WebGL programs to perform at a high level.



## API reference

[WebGL](https://msdn.microsoft.com/library/dn302469(v=vs.85).aspx)

## Demos

[Flight Arcade](http://www.flightarcade.com/)

[Hyper-Fast Web Graphics with WebGL](http://go.microsoft.com/fwlink/p/?LinkID=301886)

## Specification

[WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
