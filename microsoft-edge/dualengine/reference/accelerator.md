---
title: DualEngine Win32 C++ ACCELERATOR
description: Represents a keyboard accelerator (keyboard shortcut).
author: MSEdgeTeam
ms.author: msedgedevrel
ms.prod: microsoft-edge
ms.date: 12/09/2023
keywords: dual engine, dualengine, iemode, win32 apps, win32, edge, ie mode, edge html, ACCELERATOR
topic_type: 
- APIRef
api_name:
- ACCELERATOR
- ACCELERATOR.eventType
- ACCELERATOR.flags
- ACCELERATOR.keyCode
api_type:
- COM
api_location:
- ieframe.dll
---

# struct ACCELERATOR

> [!IMPORTANT]
> The DualEngine API is a limited access feature. Contact dualengineapiaccess@microsoft.com for more information.

Represents a keyboard accelerator (keyboard shortcut).

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[eventType](#eventtype) | The type of keyboard event that the accelerator is processed on.
[flags](#flags) | The modifier keys present in the accelerator keystroke.
[keyCode](#keycode) | The virtual-key code of the keystroke.

## Members

#### eventType

The type of keyboard event that the accelerator is processed on.

> public ACCELERATOREVENTTYPE [eventType](#eventtype)

#### flags

The modifier keys present in the accelerator keystroke.

> public ACCELERATORFLAGS [flags](#flags)

#### keyCode

The virtual-key code of the keystroke.

> public DWORD [keyCode](#keycode)

