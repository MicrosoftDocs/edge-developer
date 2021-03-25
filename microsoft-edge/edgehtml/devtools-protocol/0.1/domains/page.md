---
description: DevTools Protocol Version 0.1 (EdgeHTML) reference for the Page Domain. Actions and events related to the inspected page belong to the page domain.
title: Page Domain - DevTools Protocol Version 0.1 (EdgeHTML)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 11/03/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.custom: seodec18
ROBOTS: NOINDEX,NOFOLLOW
---
# Page Domain - DevTools Protocol Version 0.1 (EdgeHTML)  

Actions and events related to the inspected page belong to the page domain.  

| Classification | Members |  
|:--- |:--- |  
| [**Methods**](#methods) | [enable](#enable), [disable](#disable), [navigate](#navigate) |  
| [**Types**](#types) | [FrameId](#frameid) |  

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

| Returns | Type | Details |  
|:--- |:--- |:--- |  
| frameId | [FrameId](#frameid) | **Experimental**.  Frame ID that will be navigated. |  

---  

## Types  

### FrameId string  

<a name="frameid"></a>  

Unique frame identifier.  

&nbsp;  

---  
