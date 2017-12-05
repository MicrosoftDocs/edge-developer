---
description: Reference for the Page Domain. Actions and events related to the inspected page belong to the page domain.
title: Page Domain - Microsoft Edge DevTools
author: pelavall
ms.author: pelavall
ms.date: 12/15/2017
ms.topic: reference
ms.prod: microsoft-edge
---
# Page
Actions and events related to the inspected page belong to the page domain.

| | |
|-|-|
| [Methods](#methods) | [enable](#enable), [disable](#disable), [navigate](#navigate) |
| [Events](#events) |  |
| [Types](#types) | [FrameId](#frameid) |
| [Dependencies](#dependencies) |  |
## Methods

### enable
Enables page domain notifications. 

</p>

---

### disable
Disables page domain notifications. 

</p>

---

### navigate
Navigates current page to the given URL. 

</p>

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
</p>

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
            <td>Frame id that will be navigated. <span style="color:white;background-color:Tomato;padding-left: 4px;padding-right:4px;padding-top:1px;padding-bottom:1px">EXPERIMENTAL</span></td>
        </tr>
    </tbody>
</table>
</p>

---

## Types

### <a name="frameid"></a> FrameId `string`

Unique frame identifier.

</p>

---
