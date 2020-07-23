---
description: Reference for the Page Domain. Actions and events related to the inspected page belong to the page domain.
title: Page Domain - DevTools Protocol Version 0.2 (EdgeHTML)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/16/2020
ms.topic: reference
ms.prod: microsoft-edge
---
# Page Domain - DevTools Protocol Version 0.2 (EdgeHTML)  

Actions and events related to the inspected page belong to the page domain.

| | |
|-|-|
| [**Methods**](#methods) | [enable](#enable), [disable](#disable), [navigate](#navigate), [getFrameTree](#getframetree) |
| [**Events**](#events) | [frameAttached](#frameattached), [frameDetached](#framedetached), [frameNavigated](#framenavigated), [loadEventFired](#loadeventfired), [domContentEventFired](#domcontenteventfired) |
| [**Types**](#types) | [FrameId](#frameid), [Frame](#frame), [FrameTree](#frametree) |
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
        <tr>
            <td>frameId <br/> <i>optional</i></td>
            <td><a href="#frameid"><code class="flyout">FrameId</code></a></td>
            <td>Frame id to navigate. If not specified, will navigate the top page.</td>
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
            <td>Frame id that will be navigated.</td>
        </tr>
    </tbody>
</table>
</p>

---

### getFrameTree
Returns present frame tree structure.

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
            <td>frameTree</td>
            <td><a href="#frametree"><code class="flyout">FrameTree</code></a></td>
            <td>Present frame tree structure.</td>
        </tr>
    </tbody>
</table>
</p>

---

## Events

### frameAttached
Fired when frame has been attached to its parent.

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
            <td>frameId</td>
            <td><a href="#frameid"><code class="flyout">FrameId</code></a></td>
            <td>Id of the frame that has been attached.</td>
        </tr>
        <tr>
            <td>parentFrameId</td>
            <td><a href="#frameid"><code class="flyout">FrameId</code></a></td>
            <td>Parent frame identifier.</td>
        </tr>
        <tr>
            <td>stack <br/> <i>optional</i></td>
            <td><a href="runtime.md#stacktrace"><code class="flyout">Runtime.StackTrace</code></a></td>
            <td>JavaScript stack trace of when frame was attached, only set if frame initiated from script.</td>
        </tr>
    </tbody>
</table>
</p>

---

### frameDetached
Fired when frame has been detached from its parent.

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
            <td>frameId</td>
            <td><a href="#frameid"><code class="flyout">FrameId</code></a></td>
            <td>Id of the frame that has been detached.</td>
        </tr>
    </tbody>
</table>
</p>

---

### frameNavigated
Fired once navigation of the frame has completed.

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
            <td>frame</td>
            <td><a href="#frame"><code class="flyout">Frame</code></a></td>
            <td>Frame object.</td>
        </tr>
    </tbody>
</table>
</p>

---

### loadEventFired
Corresponds to the window.onload event.

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
            <td>timestamp</td>
            <td><code class="flyout">number</code></td>
            <td>Number of milliseconds since epoch.</td>
        </tr>
    </tbody>
</table>
</p>

---

### domContentEventFired
Corresponds to the document.onDOMContentLoaded event.

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
            <td>timestamp</td>
            <td><code class="flyout">number</code></td>
            <td>Number of milliseconds since epoch.</td>
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

### <a name="frame"></a> Frame `object`

Information about the Frame on the Page.

<table>
    <thead>
        <tr>
            <th>Properties</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>id</td>
            <td><a href="#frameid"><code class="flyout">FrameId</code></a></td>
            <td>Frame unique identifier.</td>
        </tr>
        <tr>
            <td>parentId <br/> <i>optional</i></td>
            <td><a href="#frameid"><code class="flyout">FrameId</code></a></td>
            <td>Parent frame unique identifier.</td>
        </tr>
        <tr>
            <td>name <br/> <i>optional</i></td>
            <td><code class="flyout">string</code></td>
            <td>Frame's name as specified in the tag.</td>
        </tr>
        <tr>
            <td>url</td>
            <td><code class="flyout">string</code></td>
            <td>Frame document's URL.</td>
        </tr>
        <tr>
            <td>securityOrigin</td>
            <td><code class="flyout">string</code></td>
            <td>Frame document's security origin.</td>
        </tr>
        <tr>
            <td>mimeType</td>
            <td><code class="flyout">string</code></td>
            <td>Frame document's mimeType as determined by the browser.</td>
        </tr>
    </tbody>
</table>
</p>

---

### <a name="frametree"></a> FrameTree `object`

Information about the Frame hierarchy.

<table>
    <thead>
        <tr>
            <th>Properties</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>frame</td>
            <td><a href="#frame"><code class="flyout">Frame</code></a></td>
            <td>Frame information for this tree item.</td>
        </tr>
        <tr>
            <td>childFrames <br/> <i>optional</i></td>
            <td><a href="#frametree"><code class="flyout">FrameTree[]</code></a></td>
            <td>Child frames.</td>
        </tr>
    </tbody>
</table>
</p>

---
