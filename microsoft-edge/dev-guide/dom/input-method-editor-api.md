---
ms.assetid: 3706f3bc-5cef-4e86-bfd0-66c5eaa0b730
description: Learn how the Input Method Editor API provides composition information for auto-complete or search suggestions, and enables you to avoid user interface collisions.
title: Dev guide - Input Method Editor API
author: abbycar
ms.author: abigailc
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Input Method Editor API


Microsoft Edge supports a set of APIs that enable web applications to provide a better Input Method Editor (IME) input experience. For example, the IME API provides composition information for auto-complete or search suggestions, and enables you to avoid user interface collisions between an IME candidate window and a search suggestion list.

The implementation is based off Microsoft's [IME API spec](https://www.w3.org/TR/ime-api/) proposal to the World Wide Web Consortium (W3C). Full support of this feature is available when using the native Windows 8.1 and Windows 10 IMEs.


## The MSInputMethodContext object

The [`MSInputMethodContext`](https://msdn.microsoft.com/library/Dn433247) represents IME functionality for a single element and provides information about the current status of IME composition. Use the [`msGetInputMethodContext`](https://msdn.microsoft.com/library/Dn433245) method to obtain the `MSInputMethodContext` for a given element:

```javascript
var testElement = document.getElementById("test");
var testElementIMEContext = testElement.msGetInputContext();
```

You can register handlers for the following `MSInputMethodContext` events:

Event | Description
:------ | :--------
[candidatewindowshow](https://msdn.microsoft.com/library/Dn433247) | Fires immediately after the IME candidate window is set to appear, but before it renders.
[candidatewindowupdate](https://msdn.microsoft.com/library/Dn433247) | Fires after the IME candidate window has been identified as needing to change size, but before any visual updates have rendered.
[candidatewindowhide](https://msdn.microsoft.com/library/Dn433247) | Fires after the IME candidate window is fully hidden.


The `MSInputMethodContext` object has the following properties:

Property | Description
:-------- | :---------
[target](https://msdn.microsoft.com/library/Dn433247) | Returns the element associated with the `MSInputMethodContext`.
[compositionStartOffset](https://msdn.microsoft.com/library/Dn433247) | Returns the starting offset (character position) of the composition relative to the target if a composition is occurring, or zero if there is no composition in progress.
[compositionEndOffset](https://msdn.microsoft.com/library/Dn433247) | Returns the ending offset (character position) of the composition relative to the target if a composition is occurring, or zero if there is no composition in progress.



The `MSInputMethodContext` object supports the following methods:

Method | Description
:------- | :------------
[hasComposition](https://msdn.microsoft.com/library/Dn433247) | Returns true if there is a composition in progress, and false otherwise.
[getCompositionAlternatives](https://msdn.microsoft.com/library/Dn433247) | Returns a copy of the current list of alternate candidate strings from the `MSInputMethodContext` object.
[isCandidateWindowVisible](https://msdn.microsoft.com/library/Dn433247) | Returns true if the IME candidate window UI is visible, and false otherwise.
[getCandidateWindowClientRect](https://msdn.microsoft.com/library/Dn433247) | Returns a [`ClientRect`](https://msdn.microsoft.com/library/Hh826029) object with candidate window coordinate space information (if the IME candidate window is visible).


## CSS support

Additionally, the [`-ms-ime-align`](https://msdn.microsoft.com/library/Dn433242) CSS property is supported for controlling the alignment of the IME candidate window. 

This property aligns the IME candidate window box relative to the element on which the IME composition is active. The following values are supported:
* **auto** : Initial value. The IME may align the candidate window in any manner.
* **after** : The IME should attempt to align the candidate window below the element (in left-to-right and right-to-left layouts).







## Specification

[Input Method Editor API](https://www.w3.org/TR/ime-api/)
