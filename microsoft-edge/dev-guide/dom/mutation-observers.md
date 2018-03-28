---
ms.assetid: 55e94101-74c4-4699-8464-7dbb6df0c7cd
description: Learn how the Mutation Observers API can efficiently detect and react to changes in the DOM, such as addition or removal of child nodes and attribute changes.
title: Dev guide - Mutation observers
author: erikadoyle
ms.author: edoyle
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Mutation observers

The [MutationObserver](https://msdn.microsoft.com/library/dn254985.aspx) API efficiently detects and reacts to changes in the DOM. Many apps and sites build their own custom controls with HTML and JavaScript. These controls are not intrinsic like the ones provided by the [`input`](https://msdn.microsoft.com/library/ms535260.aspx) element. To work well with the rest of the web platform, these controls must be able to adapt to content changes, respond to events, and handle user interaction. Apps and sites need to monitor the DOM for mutations and respond accordingly.

Mutation observers provide a fast-performing replacement for all the same scenarios supported by the now deprecated [mutation events](https://msdn.microsoft.com/library/ff974346.aspx), and an alternative to the scenarios supported by property change events. For more info, see ["Migrating mutation and property change events to Mutation Observers"](https://msdn.microsoft.com/library/dn265032(v=vs.85).aspx).

## The MutationObserver object

The [MutationObserver](https://msdn.microsoft.com/library/dn254985.aspx) object monitors and records specified changes on one or more DOM nodes. The types of changes you can observe include:

- Additions and removals of child nodes
- Additions, removals, and changes of attributes
- Changes to child text node values

The `MutationObserver` constructor requires a callback function that it uses to notify you about mutations:

```JavaScript
// Create an observer object and assign a callback function
var observerObject = new MutationObserver(mutationObjectCallback);
```

Once you create a new `MutationObserver` object, use the [`observe`](https://msdn.microsoft.com/library/dn254987(v=vs.85).aspx) method to register it on the node(s) you want to monitor and to specify the types of information to collect:

```JavaScript
// Register the target node to observe and specify which DOM changes to watch
observerObject.observe(targetObject, {
  attributes: true,
  attributeFilter: ["id", "dir"],
  attributeOldValue: true,
  childList: true
});
```

## MutationObserver Options

You can monitor and collect the following types of info:

| Property | Description
|:------------ | :-------------
| childList | Set to `true` to monitor additions and removals of the target node's child elements. This option includes text nodes that are added or removed as children of the target element. Example: `{ childList: true }`
| attributes | Set to `true` to monitor changes (additions, removals, and changes in value) to the target node's attributes. Example: `{ attributes: true }`
| characterData | Set to `true` to monitor changes to the value of the target node's text content (child text nodes). Example: `{ characterData: true }`
| subtree | Set to `true` to also monitor changes to all the target node's descendants (`childList`, `attributes`, or `characterData` must also be `true`). Example: `{ childList: true, subtree: true }`
| attributeOldValue | Set to `true` to record the target node's previous attribute value (`attributes` must also be `true`). Example:`{ attributes: true, attributeOldValue: true }`
| characterDataOldValue | Set to `true` to record the target node's previous text data (`characterData` must also be `true`). Example: `{ characterData: true, characterDataOldValue: true }`
| attributeFilter | Set to an array of attribute local names (without namespace) to only monitor changes to specific attributes (`attributes` must also be `true`). Example: `{ attributes: true, attributeFilter: ["id", "dir"] }`


After creating a `MutationObserver` with a callback to handle any events and establishing a set of options, call the [`observe`](https://msdn.microsoft.com/library/dn254987.aspx) method, passing in the node (and any children) to listen to, along with the option list.

When a relevant mutation happens, the `MutationObserver` records the change information you requested in a [`MutationRecord`](https://msdn.microsoft.com/library/dn254989.aspx) object and invokes your callback function, but not until all scripts within the current scope have run. It's possible that more than one mutation (each represented by a single `MutationRecord`) will occur since the last time the callback was invoked:

```JavaScript
// Create an observer object and assign a callback function
var observerObject = new MutationObserver(mutationObjectCallback);

// Register the target node to observe and specify which DOM changes to watch
observerObject.observe(targetObject, { 
  attributes: true,
  attributeFilter: ["id", "dir"],
  attributeOldValue: true,
  childList: true
});

// This will invoke the mutationObjectCallback function (but only after all script in this
// scope has run). For now, it simply queues a MutationRecord object with the change information
targetObject.appendChild(document.createElement('div'));

// Now a second MutationRecord object will be added, this time for an attribute change
targetObject.dir = 'rtl';
```

Your callback function is invoked with two parameters:

- An array of `MutationRecord` objects representing the changes that occurred on the element (or elements)
- A reference to the `MutationObserver` object that invoked the callback

## The MutationRecord object

You can inspect individual `MutationRecord` objects to identify the type and content of the change:

```JavaScript
// Inspect the array of MutationRecord objects to identify the nature of the change
function mutationObjectCallback(mutationRecordsList) {
  console.log("mutationObjectCallback invoked.");

  mutationRecordsList.forEach(function(mutationRecord) {
    console.log("Type of mutation: " + mutationRecord.type);
    if ("attributes" === mutationRecord.type) {
      console.log("Old attribute value: " + mutationRecord.oldValue);
    }
  });
}
```

A `MutationRecord` object provides the following information:

| Property | Description
|:------------ | :-------------
| [type](https://msdn.microsoft.com/library/dn254998(v=vs.85).aspx) | Retrieves the type of mutation represented by the `MutationRecord`.<ul> <li> `attributes`: An attribute changed on the target node.</li><li> `characterData`: The text content (a child text node) value of the target node changed.<li> `childList`: A child (or subtree descendent) of the target node was added or removed.
| [target](https://msdn.microsoft.com/library/dn254997(v=vs.85).aspx) | Retrieves the node on which the `MutationRecord` was logged.
| [addedNodes](https://msdn.microsoft.com/library/dn254990(v=vs.85).aspx) | Retrieves an array of nodes that were added. The array is empty if no nodes were added.
| [removedNodes](https://msdn.microsoft.com/library/dn254996(v=vs.85).aspx) | Retrieves an array of nodes that were removed. The array is empty if no nodes were removed.
|[previousSibling](https://msdn.microsoft.com/library/dn254995(v=vs.85).aspx) | Retrieves the previous sibling of the node that was added or removed, or `null` if none exists (or if `MutationRecord.type` is not *childList*).
| [nextSibling](https://msdn.microsoft.com/library/dn254993(v=vs.85).aspx) | Retrieves the next sibling of the node that was added or removed, or `null` if none exists (or if `MutationRecord.type` is not *childList*).
| [attributeName](https://msdn.microsoft.com/library/dn254991(v=vs.85).aspx) | Retrieves the name of the attribute that was added, removed, or changed (or `null` otherwise).
| [attributeNamespace](https://msdn.microsoft.com/en-us/library/dn254992(v=vs.85).aspx) | Retrieves the namespace of the attribute that was added, removed, or changed (or `null` otherwise).
| [oldValue](https://msdn.microsoft.com/library/dn254994(v=vs.85).aspx) | Retrieves the previous value of the attribute or characterData that was mutated (or `null` otherwise).
 

The `MutationObserver`'s array of `MutationRecord` objects accumulate all relevant changes until the [`takeRecords`](https://msdn.microsoft.com/library/dn254988(v=vs.85).aspx) method is called, which removes the records in the queue and returns them.

To stop monitoring changes, call the `MutationObserver`  [`disconnect`](https://msdn.microsoft.com/library/dn254986(v=vs.85).aspx) method. Be sure to first call the [`takeRecords`](https://msdn.microsoft.com/library/dn254988(v=vs.85).aspx) method if you need to save your mutation data. It won't be preserved after you disconnect a `MutationObserver` from its target element(s).

While its possible to reuse a `MutationObserver` instance after you disconnect it from its previous target element(s), its callback function cannot be modified and target elements / change recording options must be registered again using the [`observe`](https://msdn.microsoft.com/library/dn254987(v=vs.85).aspx) method.



## API Reference

[MutationObserver](https://msdn.microsoft.com/library/dn254985(v=vs.85).aspx)

## Related topics

[Migrating mutation and property change events to Mutation Observers](https://msdn.microsoft.com/library/dn265032(v=vs.85).aspx)

## Specification

[DOM 4 Mutation Observers](https://www.w3.org/TR/dom/#mutation-observers)
