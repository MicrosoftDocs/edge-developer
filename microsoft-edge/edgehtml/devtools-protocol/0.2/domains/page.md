---
description: DevTools Protocol Version 0.2 (EdgeHTML) reference for the Page Domain. Actions and events related to the inspected page belong to the page domain.
title: Page Domain - DevTools Protocol Version 0.2 (EdgeHTML)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 11/03/2020
ms.topic: reference
ms.prod: microsoft-edge
ROBOTS: NOINDEX,NOFOLLOW
---
# Page Domain - DevTools Protocol Version 0.2 (EdgeHTML)  

Actions and events related to the inspected page belong to the page domain.  

| Classification | Members |  
|:--- |:--- |  
| [Methods](#methods) | [enable](#enable), [disable](#disable), [navigate](#navigate), [getFrameTree](#getframetree) |  
| [Events](#events) | [frameAttached](#frameattached), [frameDetached](#framedetached), [frameNavigated](#framenavigated), [loadEventFired](#loadeventfired), [domContentEventFired](#domcontenteventfired) |  
| [Types](#types) | [FrameId](#frameid), [Frame](#frame), [FrameTree](#frametree) |  

## Methods  

### enable  

Enables page domain notifications.  

&nbsp;  

---  

### disable  

Disables page domain notifications.  

&nbsp;  

---  

### navigate  

Navigates current page to the given URL.  

| Parameters | Type | Details |  
|:--- |:--- |:--- |  
| url | `string` | URL to navigate the page to. |  
| frameId \(optional\) | [FrameId](#frameid) | Frame id to navigate.  If not specified, will navigate the top page. |  

| Returns | Type | Details |  
|:--- |:--- |:--- |  
| frameId | [FrameId](#frameid) | Frame id that will be navigated. |  

---  

### getFrameTree  

Returns present frame tree structure.  

| Returns | Type | Details |  
|:--- |:--- |:--- |  
| frameTree | [FrameTree](#frametree) | Present frame tree structure. |  

---  

## Events  

### frameAttached  

Fired when frame has been attached to its parent.  

| Parameters | Type | Details |  
|:--- |:--- |:--- |  
| frameId | [FrameId](#frameid) | Id of the frame that has been attached. |  
| parentFrameId | [FrameId](#frameid) | Parent frame identifier. |  
| stack \(optional\) | [Runtime.StackTrace](./runtime.md#stacktrace) | JavaScript stack trace of when frame was attached, only set if frame initiated from script. |  

---  

### frameDetached  

Fired when frame has been detached from its parent.  

| Parameters | Type | Details |  
|:--- |:--- |:--- |  
| frameId | [FrameId](#frameid) | ID of the frame that has been detached. |  

---  

### frameNavigated  

Fired once navigation of the frame has completed.  

| Parameters | Type | Details |  
|:--- |:--- |:--- |  
| frame | [Frame](#frame) | Frame object. |  

---  

### loadEventFired  

Corresponds to the `window.onload` event.  

| Parameters | Type | Details |  
|:--- |:--- |:--- |  
| timestamp | `number` | Number of milliseconds since epoch. |  

---  

### domContentEventFired  

Corresponds to the `document.onDOMContentLoaded` event.  

| Parameters | Type | Details |  
|:--- |:--- |:--- |  
| timestamp | `number` | Number of milliseconds since epoch. |  

---  

## Types  

### FrameId string  

<a name="frameid"></a>  

Unique frame identifier.  

&nbsp;  

---  

### Frame object  

<a name="frame"></a>  

Information about the Frame on the Page.  

| Properties | Type | Details |  
|:--- |:--- |:--- |  
| id | [FrameId](#frameid) | Frame unique identifier. |  
| parentId \(optional\) | [FrameId](#frameid) | Parent frame unique identifier. |  
| name \(optional\) | `string` | Frame's name as specified in the tag. |  
| url | `string` | Frame document's URL. |  
| securityOrigin | `string` | Frame document's security origin. |  
| mimeType | `string` | Frame document's mimeType as determined by the browser. |  

---  

### FrameTree object  

<a name="frametree"></a>  

Information about the Frame hierarchy.  

| Properties | Type | Details |  
|:--- |:--- |:--- |  
| frame | [Frame](#frame) | Frame information for this tree item. |  
| childFrames \(optional\) | [FrameTree[]](#frametree) | Child frames. |  

---  
