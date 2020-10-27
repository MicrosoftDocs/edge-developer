---
description: Reference for the Schema Domain. Provides information about the protocol schema.
title: Schema Domain - DevTools Protocol Version 0.2 (EdgeHTML)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/16/2020
ms.topic: reference
ms.prod: microsoft-edge
---
# Schema Domain - DevTools Protocol Version 0.2 (EdgeHTML)  

Provides information about the protocol schema.

| | |
|-|-|
| [**Methods**](#methods) | [getDomains](#getdomains) |
| [**Types**](#types) | [Domain](#domain) |
## Methods

### getDomains
Returns supported domains.

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
            <td>domains</td>
            <td><a href="#domain"><code class="flyout">Domain[]</code></a></td>
            <td>List of supported domains.</td>
        </tr>
    </tbody>
</table>
</p>

---

## Types

### <a name="domain"></a> Domain `object`

Description of the protocol domain.

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
            <td>name</td>
            <td><code class="flyout">string</code></td>
            <td>Domain name.</td>
        </tr>
        <tr>
            <td>version</td>
            <td><code class="flyout">string</code></td>
            <td>Domain version.</td>
        </tr>
    </tbody>
</table>
</p>

---
