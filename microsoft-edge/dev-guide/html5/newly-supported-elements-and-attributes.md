---
ms.assetid: 56c6476c-789c-4781-9730-c4a79ac6877f
description: Check out the newly supported HTML5 elements and attributes for Microsoft Edge.
title: Dev guide - Newly supported elements and attributes
author: libbymc
ms.author: libbymc
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Newly supported HTML elements and attributes

Microsoft Edge for Windows 10 adds supports for new HTML features per the World Wide Web Consortium (W3C) specifications for [HTML5](http://go.microsoft.com/fwlink/p/?LinkId=203771) and [HTML 5.1](http://go.microsoft.com/fwlink/p/?LinkId=506795). Below are lists of the new attributes and elements recently supported by Microsoft Edge. 

For a list of all HTML elements supported in Microsoft Edge, see [HTML elements](https://developer.microsoft.com/en-us/microsoft-edge/platform/documentation/apireference/htmlelements/).

## Attributes

| Attribute     | Related Element | Description | 
|---------------|-----------------|-----------------|
`download` | [`<a>`](https://msdn.microsoft.com/en-us/library/ms535173(v=vs.85).aspx) | Signifies that the resource pointed to in an ``<a>`` element link should be downloaded by the browser, and saved as a local file, rather than navigating to it. |
`oninvalid`| [`<input>`](https://msdn.microsoft.com/en-us/library/ms535260(v=vs.85).aspx) | Executes a specified JavaScript alert when an input element is invalid.|
[`selectionDirection`](https://msdn.microsoft.com/library/mt587085) | [`<input>`](https://msdn.microsoft.com/en-us/library/ms535260(v=vs.85).aspx) |  Gets the string corresponding to the current selection's direction. Depending on which direction the selection is being made, possible values are "forward" for a forward selection, "backward" for a backward selection, and "none". | 
[`srcset`](https://msdn.microsoft.com/library/dn955124(v=vs.85).aspx) | [`<img>`](https://msdn.microsoft.com/en-us/library/ms535259(v=vs.85).aspx) | Specifies a list of one or more possible images to display based on the pixel density of the user's display, or the viewport width. |
[`sizes`](https://msdn.microsoft.com/library/mt599604(v=vs.85).aspx) | [`<img>`](https://msdn.microsoft.com/en-us/library/ms535259(v=vs.85).aspx) | Specifies how large an image will render within a layout.  |
[`type=color`](https://msdn.microsoft.com/en-us/library/mt668927(v=vs.85).aspx) | [`<input>`](https://msdn.microsoft.com/en-us/library/ms535260(v=vs.85).aspx) | Creates a color entry control for picking a color. | 
[`type=datetime-local`](https://msdn.microsoft.com/library/mt584200(v=vs.85)) | [`<input>`](https://msdn.microsoft.com/en-us/library/ms535260(v=vs.85).aspx) | Creates a date and time entry control. This control is able to set date-time values (year, month, day, hour, minute, second). | 
[`type=time`](https://msdn.microsoft.com/library/mt584201(v=vs.85).aspx) | [`<input>`](https://msdn.microsoft.com/en-us/library/ms535260(v=vs.85).aspx) | Creates a time entry control.This control is able to set time values (hour, minute, second). | 

## Elements

| Element  | Description | 
|-------------|-----------------|
[`<datalist>`](https://msdn.microsoft.com/library/hh772925(v=vs.85).aspx) | Contains a set of [``<option>``](https://msdn.microsoft.com/en-us/library/ms535877(v=vs.85).aspx) elements to provide a pre-defined set of choices. |
[`<main>`](https://msdn.microsoft.com/library/mt634542(v=vs.85).aspx) | Represents the main content of the body of a document or application. Specifying main content is used to indicate content that is unique to the document, and excludes repeated content over other documents such as navigation links.
[`<meter>`](https://msdn.microsoft.com/library/mt573149(v=vs.85).aspx) | Represents a scalar measurement within a specified range, or a fractional value. This information is displayed in the form of a horizontal bar.  |
[`<output>`](https://msdn.microsoft.com/en-us/library/mt732268(v=vs.85).aspx) | Represents the result of a calculation or user action. 
[`<picture>`](https://msdn.microsoft.com/library/mt574001(v=vs.85).aspx) | A container that contains multiple [``<source>``](https://msdn.microsoft.com/en-us/library/mt574269(v=vs.85).aspx) elements to its contained [``<img>``](https://msdn.microsoft.com/en-us/library/ms535259(v=vs.85).aspx) element. The browser will select which source to use based on numerous factors such as screen pixel density, viewport size, and file type.  | 
[`<template>`](https://msdn.microsoft.com/library/mt586693(v=vs.85).aspx) | Used to declare fragments of HTML that can be cloned and inserted into the document by script. It is the client side approach to handling on demand resource fetching and late rendering of some parts of the DOM, which can be reused. |
[`<time>`](https://msdn.microsoft.com/en-us/library/mt706248(v=vs.85).aspx) |Represents time on a 24 hour clock or an exact date. 


## Related topics

[Introducing srcset, our first step towards fully responsive images in Microsoft Edge](http://go.microsoft.com/fwlink/p/?LinkId=617030)

[Microsoft Edge and Web Components](https://blogs.windows.com/msedgedev/2015/07/15/microsoft-edge-and-web-components/)

[Using extended srcset and the picture element to tailor your image to every device and layout](https://blogs.windows.com/msedgedev/2015/10/07/using-extended-srcset-and-the-picture-element-to-tailor-your-image-to-every-device-and-layout/)

