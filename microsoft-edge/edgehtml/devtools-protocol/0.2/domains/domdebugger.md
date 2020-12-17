---
description: Reference for the DOMDebugger Domain. DOM debugging allows setting breakpoints on particular DOM operations and events. JavaScript execution will stop on these operations as if there was a regular breakpoint set.
title: DOMDebugger Domain - DevTools Protocol Version 0.2
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: reference
ms.prod: microsoft-edge
ms.date: 12/02/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# DOMDebugger

DOM debugging allows setting breakpoints on particular DOM operations and events. JavaScript execution will stop on these operations as if there was a regular breakpoint set.

| | |
|-|-|
| [**Methods**](#methods) | [setInstrumentationBreakpoint](#setinstrumentationbreakpoint), [removeInstrumentationBreakpoint](#removeinstrumentationbreakpoint) |
## Methods

### setInstrumentationBreakpoint
<span><b>Experimental. </b></span>Sets a breakpoint on a particular native event.

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
            <td>eventName</td>
            <td><code class="flyout">string</code></td>
            <td>Instrumentation name to stop on. Valid values: 'scriptFirstStatement'.</td>
        </tr>
    </tbody>
</table>
</p>

---

### removeInstrumentationBreakpoint
<span><b>Experimental. </b></span>Removes a breakpoint on a particular native event.

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
            <td>eventName</td>
            <td><code class="flyout">string</code></td>
            <td>Instrumentation name to stop on. Valid values: 'scriptFirstStatement'.</td>
        </tr>
    </tbody>
</table>
</p>

---
