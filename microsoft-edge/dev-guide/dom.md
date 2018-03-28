---
ms.assetid: 1e9ed481-4841-4bba-8277-0db4ae04869e
description: See guides for DOM APIs and features like the Gamepad API and pointer events.
title: Dev guide - DOM
author: erikadoyle
ms.author: edoyle
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# DOM features

## DOM event constructors

The `createEvent()`/`initEvent()` constructor pattern for synthetic events is now deprecated and replaced by the [DOM4 event constructor](./dom/dom-event-constructors.md) pattern. This change makes it much simpler to create synthetic events with fewer steps and significantly more readable code.

## Gamepad API

The [Gamepad API](./dom/gamepad-API.md) enables your web-based game to take advantage of the specialized input functionality of gamepad devices.

## Input Method Editor API

The [Input Method Editor API](./dom/input-Method-Editor-API.md) provides composition information for auto-complete or search suggestions, and enables you to avoid user interface collisions between an IME candidate window and a search suggestion list.

## Mutation Observers

The [MutationObserver API](./dom/mutation-observers.md) efficiently detects and reacts to changes in the DOM, such as addition or removal of child nodes, attribute changes, or a change in a child text node value.

## Pointer Events

Modelled after traditional mouse events, [Pointer Events](./dom/pointer-events.md) use the abstract concept of a pointer to apply across all user input modalities, including mouse, touch, and pen. Create a seamless user experience across user input methods by writing to a single set of events that work across hardware capabilities.

## Pointer Lock

The [Pointer Lock API](./dom/pointer-lock.md) (previously called *Mouse Lock*) can access raw mouse movement, locking the target of mouse events to a single element, eliminating the limits of how far mouse movement can go in a single direction, and removing the cursor from view. With the mouse locked, the pointer can be moved all around, and it will never leave the focus of the element.

## Touch Events

[Touch Events](./dom/touch-events.md) allow you to interpret user interaction with a touch screen via finger, stylus, or trackpad, including multi-touch interactions for complex gestures.

## Xpath

The [XPath API](./dom/xpath.md) provides native support for locating and processing elements in XML documents.
