---
ms.assetid: b9e065dc-bdda-412a-8b0c-2870e514dee2
description: See how Pointer Events can be used to create a seamless user experience across user input methods.
title: Dev guide - Pointer events
author: abbycar
ms.author: abigailc
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Pointer Events

[Pointer Events](https://www.w3.org/TR/pointerevents/) are a unified [pointer input API](https://msdn.microsoft.com/library/hh772103(v=vs.85).aspx) modeled after traditional mouse events, except they use the abstract concept of a pointer to apply across all user input modalities, including mouse, touch, and pen. Use pointer events to create a seamless user experience across user input methods by writing to a single set of events that work across hardware capabilities.

> [!NOTE]
> Pointer Events are supported with no prefix in Microsoft Edge build 10240+. The prefixed version of pointer events should be removed for better standards compliance and future compatibility.


## Pointer events and the PointerEvent object

The [`PointerEvent`](https://msdn.microsoft.com/library/hh772103(v=vs.85).aspx) object inherits from [`MouseEvent`](https://msdn.microsoft.com/library/ff974344(v=vs.85).aspx), and is dispatched upon similar user interactions.

Mouse event | Corresponding pointer event                         |
:------------ | :-------------
[`mousedown`](https://msdn.microsoft.com/library/ms536944(v=vs.85).aspx) | [`pointerdown`](https://msdn.microsoft.com/library/hh771909(v=vs.85).aspx)
[`mouseenter`](https://msdn.microsoft.com/library/ms536945(v=vs.85).aspx) | [`pointerenter`](https://msdn.microsoft.com/library/dn254944(v=vs.85).aspx)
[`mouseleave`](https://msdn.microsoft.com/library/ms536946(v=vs.85).aspx) | [`pointerleave`](https://msdn.microsoft.com/library/dn254945(v=vs.85).aspx)
[`mousemove`](https://msdn.microsoft.com/library/ms536947(v=vs.85).aspx) | [`pointermove`](https://msdn.microsoft.com/library/hh771911(v=vs.85).aspx)
[`mouseout`](https://msdn.microsoft.com/library/ms536948(v=vs.85).aspx) | [`pointerout`](https://msdn.microsoft.com/library/hh771912(v=vs.85).aspx)
[`mouseover`](https://msdn.microsoft.com/library/ms536949(v=vs.85).aspx) | [`pointerover`](https://msdn.microsoft.com/library/hh771913(v=vs.85).aspx)
[`mouseup`](https://msdn.microsoft.com/library/ms536950(v=vs.85).aspx) | [`pointerup`](https://msdn.microsoft.com/library/hh771914(v=vs.85).aspx)


The [`PointerEvent`](https://msdn.microsoft.com/library/hh772103(v=vs.85).aspx) object provides all the usual properties expected in mouse events (such as [`clientX`](https://msdn.microsoft.com/library/ms533567(v=vs.85).aspx) / [`clientY`](https://msdn.microsoft.com/library/ff974880(v=vs.85).aspx) coordinates, the [`target`](https://msdn.microsoft.com/library/ff974946(v=vs.85).aspx) element, and [`button`](https://msdn.microsoft.com/library/ff974877(v=vs.85).aspx) / [`buttons`](https://msdn.microsoft.com/library/ff974878(v=vs.85).aspx) properties), as well as these additional properties to help you differentiate between input types and characteristics:

PointerEvent property | Description
:------------ | :-------------
[height](https://msdn.microsoft.com/library/dn255064(v=vs.85).aspx) | The height (magnitude on the Y axis), in CSS pixels, of the contact geometry of the pointer.
[isPrimary](https://msdn.microsoft.com/library/jj152130(v=vs.85).aspx) | Returns whether the pointer associated with the event is the primary pointer for the current mouse, touch, or pen interaction.
[pointerId](https://msdn.microsoft.com/library/hh772358(v=vs.85).aspx) | The unique identifier of the contact for a touch, mouse or pen.
[pointerType](https://msdn.microsoft.com/library/hh772359(v=vs.85).aspx) | Returns whether the source of the event is touch, pen, or mouse.
[pressure](https://msdn.microsoft.com/library/hh772360(v=vs.85).aspx) | Returns the normalized pressure of the pointer input in the range of [0,1], where 0 and 1 represent the minimum and maximum pressure the hardware is capable of detecting, respectively.
[tiltX](https://msdn.microsoft.com/library/hh772364(v=vs.85).aspx) | Returns the angle between the Y-Z plane and the plane containing the pen axis and the Y axis in the range of -90 to +90. A positive X tilt is to the right.
[tiltY](https://msdn.microsoft.com/library/hh772365(v=vs.85).aspx) | Returns the angle between the X-Z and transducer-X planes. A positive Y tilt is toward the user.
[width](https://msdn.microsoft.com/library/dn255065(v=vs.85).aspx) | Returns the width (magnitude on the X axis), in CSS pixels, of the contact geometry of the pointer.


## Mouse compatibility

After firing pointer events, mouse events are fired for the primary contact (for example, the first finger on the screen). This enables existing websites based on mouse events to continue to work correctly.

In contrast to a mouse, it's possible to have multiple pointers on the screen at one time (for example, with multi-touch hardware). In these scenarios, a separate pointer event fires for each point of contact, making it easier to build multi-touch-enabled sites and apps.

## Feature detection and touch support testing

Use the [`PointerEvent`](https://msdn.microsoft.com/library/hh772103(v=vs.85).aspx) object interface to test for pointer event support:

```Javascript
if (window.PointerEvent) {
  // Pointer events are supported.
}
```

Be aware that pointer events feature detection doesn't indicate if the device itself supports touch or pen input. The [`PointerEvent`](https://msdn.microsoft.com/library/hh772103(v=vs.85).aspx) property only checks if the platform will fire pointer events for whatever hardware is present in the system.

To test for touch capability and multi-touch support, use the [`maxTouchPoints`](https://msdn.microsoft.com/library/hh772144(v=vs.85).aspx) property:

```Javascript
// Test for touch capable hardware
if(navigator.maxTouchPoints) { ... }

// Test for multi-touch capable hardware
if(navigator.maxTouchPoints && navigator.maxTouchPoints > 1) { ... }

// Check the maximum number of touch points the hardware supports
var touchPoints = navigator.maxTouchPoints;
```

## Controlling for default touch handling

A default handling for common touch interactions, including panning for scrollable regions, pinch zooming, and HTML5 drag and drop support for touch is activated by a user interaction sequence of press, hold, and drag. Use the [`touch-action`](https://msdn.microsoft.com/library/windows/apps/Hh767313.aspx) CSS property to specify if and how a given page region can be manipulated by touch input and default touch handling behaviors. (For more on `touch-action` support in Microsoft Edge, see ['Newly supported CSS properties and pseudo-classes'](./../css/newly-supported-properties-and-pseudo-classes.md)).

The following style rule disables all default touch handling and directs all pointer events to JavaScript code:

```CSS
touch-action: none;
```

See [Controlling the default touch experience](https://msdn.microsoft.com/library/jj583807(v=vs.85).aspx#control_default_touch) for more details.


## Capturing pointer events on an element

In some cases, it’s useful to assign a specific pointer to an element to make sure the element continues to receive pointer events even if the contact moves off the element.

For example, if a UI button in your web app is touched and held, and the user's finger slides off the button before raising it (breaking the contact), the button might not receive the [`pointerup`](https://msdn.microsoft.com/library/hh771914(v=vs.85).aspx) event. This could cause the button to stay depressed forever. By assigning the pointer to the button element, the button receives pointer events, including the `pointerup` event that signals the button to return to its initial state.

You can call the [`setPointerCapture`](https://msdn.microsoft.com/library/hh771882(v=vs.85).aspx) method of an element object to assign a specific [`pointerId`](https://msdn.microsoft.com/library/hh772358(v=vs.85).aspx) to that element:

```Javascript
window.addEventListener('pointerdown', pointerdownHandler, false);

function pointerdownHandler (evt) {
      evt.target.setPointerCapture(evt.pointerId);
}
```

When a pointer is captured to an element, the parent and ancestor elements receive a [`gotpointercapture`](https://msdn.microsoft.com/library/hh771904(v=vs.85).aspx) event during capture and bubble phase.
The capture is released when the pointer is removed ([`pointerup`](https://msdn.microsoft.com/library/hh771914(v=vs.85).aspx)) or explicitly released by calling the [`releasePointerCapture`](https://msdn.microsoft.com/library/hh771880(v=vs.85).aspx) method. There are also cases where the element could lose the capture. For example, if the touch moves outside the window or some other element captures the touch, the element that had the capture loses the capture. The element that lost the capture receives a [`lostpointercapture`](https://msdn.microsoft.com/library/hh771907(v=vs.85).aspx) event.

## Pointer cancellation

When using touch or pen input, sometimes pointers on the screen can be canceled. For example, if your screen supports no more than two simultaneous touch points and you add a third finger to the screen, one of the other points will be canceled because the hardware cannot track three points. Pointer cancellation is indicated by the [`pointercancel`](https://msdn.microsoft.com/library/hh846776(v=vs.85).aspx) event. This gives you the chance to handle any necessary cleanup. For example, if your app maintains a pointer list, you can listen for the `pointercancel` event to know when to remove a given pointer from that list.

## Compatibility notes

For the compatibility notes on use with previous versions of Internet Explorer, see [Pointer Events updates](https://msdn.microsoft.com/library/dn304886(v=vs.85).aspx) in the [IE Compatibility Cookbook](https://msdn.microsoft.com/library/dn384059(v=vs.85).aspx).

The [PEP JavaScript library](https://github.com/jquery/pep) allows you to use the pointer event model across browsers that don’t yet support W3C Pointer Events. The jQuery Foundation maintains a set of [samples](http://jquery.github.io/PEP/) you can use to get started. 

## Specification

[W3C Pointer Events](http://go.microsoft.com/fwlink/p/?LinkID=278991)
