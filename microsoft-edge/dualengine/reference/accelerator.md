---
description: Contains the information representing a keyboard accelerator.
title: DualEngine Win32 C++ ACCELERATOR
author: MSEdgeTeam
ms.author: edgededev
ms.prod: microsoft-edge
ms.date: 11/07/2023
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

Contains the information representing a keyboard accelerator.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[eventType](#eventtype) | Specifies the type of keyboard event that the accelerator is processed on.
[flags](#flags) | Specifies the modifier keys present in the accelerator keystroke.
[keyCode](#keycode) | Specifies the virtual-key code keystroke.

## Members

#### eventType

Specifies the type of keyboard event that the accelerator is processed on.

> public ACCELERATOREVENTTYPE [eventType](#eventtype)

#### flags

Specifies the modifier keys present in the accelerator keystroke.

> public ACCELERATORFLAGS [flags](#flags)

#### keyCode

Specifies the virtual-key code keystroke.

> public DWORD [keyCode](#keycode)

