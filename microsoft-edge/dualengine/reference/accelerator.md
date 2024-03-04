---
title: DualEngine Win32 C++ ACCELERATOR
description: Represents a keyboard accelerator (keyboard shortcut).
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: windows-integration
ms.date: 03/04/2024
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
> The DualEngine API is part of a Limited Access Feature (see [LimitedAccessFeatures class](/uwp/api/windows.applicationmodel.limitedaccessfeatures)). For more information or 
> to request an unlock token, contact [Microsoft Support](https://support.serviceshub.microsoft.com/supportforbusiness/create?sapId=d15d3aa2-0512-7cb8-1df9-86221f5cbfde).

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

