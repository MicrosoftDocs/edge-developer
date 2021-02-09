---
description: Reference for the Overlay Domain. Overlay domain exposes visual adornments and node selection interaction
title: Overlay Domain - DevTools Protocol Version 0.2
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: reference
ms.prod: microsoft-edge
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# Overlay

Overlay domain exposes visual adornments and node selection interaction

| | |
|-|-|
| [**Methods**](#methods) | [enable](#enable), [disable](#disable), [setInspectMode](#setinspectmode) |
| [**Events**](#events) | [inspectNodeRequested](#inspectnoderequested), [nodeHighlightRequested](#nodehighlightrequested) |
| [**Dependencies**](#dependencies) | [DOM](dom.md) |
## Methods

### enable
Enables reporting of <code>nodeHighlightRequested</code> and <code>inspectElementRequested</code> events

</p>

---

### disable
Disables reporting of Overlay domain events

</p>

---

### setInspectMode
Sets the element selection mode for the client

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
            <td>mode</td>
            <td><code class="flyout">string</code></td>
            <td>The inspection mode.  Valid values are 'searchForNode' and 'none'.</td>
        </tr>
        <tr>
            <td>highlightConfig <br/> <i>optional</i></td>
            <td><a href="dom.md#highlightconfig"><code class="flyout">DOM.HighlightConfig</code></a></td>
            <td>The highlight configuration to use while inspecting</td>
        </tr>
    </tbody>
</table>
</p>

---

## Events

### inspectNodeRequested
Notifies the client that the user has asked to inspect a particular node

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
            <td>backendNodeId</td>
            <td><a href="dom.md#backendnodeid"><code class="flyout">DOM.BackendNodeId</code></a></td>
            <td>The backend node ID of node requested</td>
        </tr>
    </tbody>
</table>
</p>

---

### nodeHighlightRequested
Indicates that the user has hovered over the node and may inspect the node

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
            <td>nodeId</td>
            <td><a href="dom.md#nodeid"><code class="flyout">DOM.NodeId</code></a></td>
            <td>The node ID of the node being considered</td>
        </tr>
    </tbody>
</table>
</p>

---

## Dependencies

[DOM](dom.md)
