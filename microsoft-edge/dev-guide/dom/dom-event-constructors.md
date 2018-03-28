---
ms.assetid: 65ef085d-85b8-4df7-aec8-581458219012
description: Learn how the DOM4 event constructor pattern can be used to easily create synthetic events.
title: Dev guide - Dom event constructors
author: erikadoyle
ms.author: edoyle
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# DOM Event Constructors

As of Microsoft Edge (build 10240+), the `createEvent()`/`initEvent()` constructor pattern for [synthetic events](https://msdn.microsoft.com/library/dn905219.aspx) is deprecated and has been replaced by the [DOM L4 event constructor pattern](http://www.w3.org/TR/dom/#interface-event). This change makes it much simpler to create synthetic events with fewer steps and significantly more readable code.

## Event()
Events can now be created with the [`Event()`](https://msdn.microsoft.com/library/ff974340.aspx) constructor as follows:

```JavaScript
var event = new Event('submit');

// Listen for the event.
element.addEventListener('submit', function (e) { ... }, false);

// Dispatch the event.
element.dispatchEvent(event);
```

## Feature testing

To test for support for the DOM L4 event constructor pattern in Microsoft Edge, use the following code sample.

```JavaScript
if (typeof window.Event == "function"){
  // use new syntax
} else {
  // use old syntax
}
```

## MouseEvent() Example

The `MouseEvent()` interface includes it's own methods and properties as demonstrated in the following code sample.

```JavaScript
var mycheckbox = document.getElementById('mycheckbox');
var clicker = new MouseEvent("click", {
  'bubbles': true,
  'cancelable': true,
  'view': window,
  'detail': 0,
  'screenX': 0,
  'screenY': 0,
  'clientX': 0,
  'clientY': 0,
  'ctrlKey': false,
  'altKey': false,
  'shiftKey': false,
  'metaKey': false,
  'button': 0,
  'relatedTarget': null
});
mycheckbox.dispatchEvent(clicker);
```

The first parameter is an event type and the second parameter is an *optional* dictionary of event properties. The most common are `bubbles` and `cancelable`, but for different events you can add event-specific properties, such as `clientX` and `clientY` for a [MouseEvent](https://developer.microsoft.com/en-us/microsoft-edge/platform/documentation/apireference/interfaces/MouseEvent/). In the optional dictionary, the last 14 parameters of the [`initMouseEvent()`](https://msdn.microsoft.com/library/ff975292(v=vs.85).aspx) are duplicated. Instead of a confusing sequence of numbers and booleans that require you to refer to documentation to be sure to get in the right order, the dictionary makes the code much more readable and maintainable.

> [!NOTE]
>  Although deprecated, the `createEvent()`/`initEvent()` syntax remains functional at this time to support backward compatibility.


## History

Support for standardized synthetic events began in Windows Internet Explorer 9. The constructor pattern for a synthetic event required a two step process.
First you would use the `createEvent()` method to create an event object of a specific type, then an `initEvent()` method to initialize it. There is a generic `initEvent()`, then 23 specialized variations for different types of event objects. For example, the following code creates a synthetic MouseEvent, uses a initMouseEvent() to initialize it as a click, and fires it on a checkbox element:

```JavaScript
var mycheckbox = document.getElementById('mycheckbox');
var clicker = document.createEvent("MouseEvents");
clicker.initMouseEvent("click",true,true,"window",0,0,0,0,0,false,false,false,false,0,null);
mycheckbox.dispatchEvent(clicker);
```



## API reference

[DOM Event Object](https://msdn.microsoft.com/library/ff974340.aspx)

[CustomEvent Object](https://msdn.microsoft.com/library/ff974338.aspx)

## Related Topics

[Creating and firing synthetic events](https://msdn.microsoft.com/library/dn905219.aspx)

## Specification

[DOM Event Constructors](https://dom.spec.whatwg.org/#constructing-events)


