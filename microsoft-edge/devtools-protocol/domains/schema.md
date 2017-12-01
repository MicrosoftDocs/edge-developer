---
description: Reference for the Schema Domain. Provides information about the protocol schema.
title: Schema Domain - Microsoft Edge DevTools
author: pelavall
ms.author: pelavall
ms.date: 12/15/2017
ms.topic: reference
ms.prod: microsoft-edge
---
# Schema
Provides information about the protocol schema.

| | |
|-|-|
| [Methods](#methods) | [getDomains](#getdomains) |
| [Events](#events) |  |
| [Types](#types) | [Domain](#domain) |
| [Dependencies](#dependencies) |  |
## Methods

### getDomains
Returns supported domains. 

</p>

| Returns | | |
|-|-|-|
| domains | [`Domain[]`](#domain) | List of supported domains. |

</p>

---

## Types

### <a name="domain"></a> Domain `object`

Description of the protocol domain.

</p>

| Properties | | |
|-|-|-|
| name | `string` | Domain name. |
| version | `string` | Domain version. |

</p>

---
