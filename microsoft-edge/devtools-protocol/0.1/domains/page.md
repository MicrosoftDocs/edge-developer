---
description: Reference for the Page Domain. Actions and events related to the inspected page belong to the page domain.
title: Page Domain - DevTools Protocol Version 0.1 (EdgeHTML)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/16/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.custom: seodec18
---
# Page Domain - DevTools Protocol Version 0.1 (EdgeHTML)  

Actions and events related to the inspected page belong to the page domain.

| | |
|-|-|
| [**Methods**](#methods) | [enable](#enable), [disable](#disable), [navigate](#navigate) |
| [**Types**](#types) | [FrameId](#frameid) |
## Methods

### enable
Enables page domain notifications.


---

### disable
Disables page domain notifications.


---

### navigate
Navigates current page to the given URL.

<table>
    <thead>
        <tr>
            <th>Parameters</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>url</td>
            <td><code class="flyout">string</code></td>
            <td>URL to navigate the page to.</td>
        </tr>
    </tbody>
</table>
<table>
    <thead>
        <tr>
            <th>Returns</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>frameId</td>
            <td><a href="#frameid"><code class="flyout">FrameId</code></a></td>
            <td><span><b>Experimental. </b></span>Frame id that will be navigated.</td>
        </tr>
    </tbody>
</table>

---

## Types

### <a name="frameid"></a> FrameId `string`

Unique frame identifier.


---
