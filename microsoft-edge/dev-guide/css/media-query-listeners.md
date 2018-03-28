---
ms.assetid: b342ba32-7165-4f73-809c-16a83141e471
description: Learn how Media Query Listeners enable evaluating a media query at runtime using JavaScript and subscribing listeners to changes in the media query’s evaluation.
title: Dev guide - Media query listeners
author: libbymc
ms.author: libbymc
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Media query listeners

Media query listeners enable evaluating a media query at runtime using JavaScript and subscribing listeners to changes in the media query's evaluation.

## Creating a media query listener

To evaluate a media query at run time, an [MediaQueryList](https://msdn.microsoft.com/library/hh772454(v=vs.85).aspx) object is created using the window method, [matchMedia](https://msdn.microsoft.com/library/hh772743(v=vs.85).aspx). 

The `matchMedia` method accepts a media query string and returns a `MediaQueryList` object. The following example creates a media query that checks whether the height of a window is less than a certain size.

``` js
mql = window.msMatchMedia("(min-height:450px)");
```
The MediaQueryList object provides the following properties.

| Property | Description       |
|----------|-------------------|
[matches](https://msdn.microsoft.com/library/hh772471.aspx) | Returns "true" if the list of media queries matches the state of the current window; returns "false" otherwise.
[media](https://msdn.microsoft.com/library/hh772474.aspx) | Returns the serialized version of the media query list, which was used to create the MediaQueryList object.
 
The `matches` property is a Boolean value that returns an evaluation of the media query. Using the example above, `matches` returns `true` if the window's height is greater than or equal to the minimum that has been specified. 

``` js
if (mql.matches) 
{
  // Window is fine. 
} else 
{
  // Window is too small.       
}
```

## Subscribing media query listeners

To detect media query changes, you can subscribe a listener to a `MediaQueryList` object. The [addListener](https://msdn.microsoft.com/library/hh772467(v=vs.85).aspx) method takes a callback function, and invokes it when the media query changes evaluation. Using the previous media query, the following example subscribes to changes in the media query and prints out the changes in a `div` with an `id` of myDiv.

``` js
mql = window.matchMedia("(min-height:250px)");
mql.addListener(sizeChange); 
function sizeChange(mql) {
    v = document.getElementById("myDiv");
    if (mql.matches) {
        v.innerHTML = "Getting bigger" + "<br/>" + mql.media;
    } else {
        v.innerHTML = "Getting smaller" + "<br/>" + mql.media;
    }
}
```
The listener invokes the callback function whenever the state of the media actually changes. If the window is resized to be smaller than the specified min-height attribute value, the callback function is invoked. It is invoked again when the window becomes taller than the min-height. The `MediaQueryList` object is passed as a parameter to the callback function.



## API Reference 
[Media Query Listeners](https://msdn.microsoft.com/library/hh772369(v=vs.85).aspx)

## Specification
[CSSOM View Module](https://www.w3.org/TR/cssom-view/)
