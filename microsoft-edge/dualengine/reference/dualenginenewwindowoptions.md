---
title: DualEngine Win32 C++ DualEngineNewWindowOptions
description: Represents the requested state of a new window.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: windows-integration
ms.date: 03/04/2024
keywords: dual engine, dualengine, iemode, win32 apps, win32, edge, ie mode, edge html, DualEngineNewWindowOptions
topic_type: 
- APIRef
api_name:
- DualEngineNewWindowOptions
- DualEngineNewWindowOptions.disposition
- DualEngineNewWindowOptions.height
- DualEngineNewWindowOptions.heightSpecified
- DualEngineNewWindowOptions.left
- DualEngineNewWindowOptions.leftSpecified
- DualEngineNewWindowOptions.menuBarVisible
- DualEngineNewWindowOptions.scrollbarsVisible
- DualEngineNewWindowOptions.statusBarVisible
- DualEngineNewWindowOptions.toolbarVisible
- DualEngineNewWindowOptions.top
- DualEngineNewWindowOptions.topSpecified
- DualEngineNewWindowOptions.width
- DualEngineNewWindowOptions.widthSpecified
api_type:
- COM
api_location:
- ieframe.dll
---

# struct DualEngineNewWindowOptions

> [!IMPORTANT]
> The DualEngine API is part of a Limited Access Feature (see [LimitedAccessFeatures class](/uwp/api/windows.applicationmodel.limitedaccessfeatures)). For more information or 
> to request an unlock token, contact [Microsoft Support](https://support.serviceshub.microsoft.com/supportforbusiness/create?sapId=d15d3aa2-0512-7cb8-1df9-86221f5cbfde).

Represents the requested state of a new window.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[disposition](#disposition) | Type of tab or window that the host should create to host the window.
[height](#height) | Specifies the requested height of the window.
[heightSpecified](#heightspecified) | Indicates whether a `DualEngineNewWindowOptions.height` value was specified.
[left](#left) | Specifies the requested x-coordinate of the upper-left corner of the window.
[leftSpecified](#leftspecified) | Indicates whether a `DualEngineNewWindowOptions.left` value was specified.
[menuBarVisible](#menubarvisible) | Indicates whether the window should should have a visible menu bar.
[scrollbarsVisible](#scrollbarsvisible) | Indicates whether the window should should have visible scroll bars.
[statusBarVisible](#statusbarvisible) | Indicates whether the window should should have a visible status bar.
[toolbarVisible](#toolbarvisible) | Indicates whether the window should should have a visible toolbar.
[top](#top) | Specifies the requested y-coordinate of the upper-left corner of the window.
[topSpecified](#topspecified) | Indicates whether a `DualEngineNewWindowOptions.top` value was specified.
[width](#width) | Specifies the requested width of the window.
[widthSpecified](#widthspecified) | Indicates whether a `DualEngineNewWindowOptions.width` value was specified.

## Members

#### disposition

Type of tab or window that the host should create to host the window.

> public DualEngineWindowOpenDisposition [disposition](#disposition)

#### height

Specifies the requested height of the window.

> public FLOAT [height](#height)

#### heightSpecified

Indicates whether a `DualEngineNewWindowOptions.height` value was specified.

> public BOOL [heightSpecified](#heightspecified)

#### left

Specifies the requested x-coordinate of the upper-left corner of the window.

> public FLOAT [left](#left)

#### leftSpecified

Indicates whether a `DualEngineNewWindowOptions.left` value was specified.

> public BOOL [leftSpecified](#leftspecified)

#### menuBarVisible

Indicates whether the window should should have a visible menu bar.

> public BOOL [menuBarVisible](#menubarvisible)

#### scrollbarsVisible

Indicates whether the window should should have visible scroll bars.

> public BOOL [scrollbarsVisible](#scrollbarsvisible)

#### statusBarVisible

Indicates whether the window should should have a visible status bar.

> public BOOL [statusBarVisible](#statusbarvisible)

#### toolbarVisible

Indicates whether the window should should have a visible toolbar.

> public BOOL [toolbarVisible](#toolbarvisible)

#### top

Specifies the requested y-coordinate of the upper-left corner of the window.

> public FLOAT [top](#top)

#### topSpecified

Indicates whether a `DualEngineNewWindowOptions.top` value was specified.

> public BOOL [topSpecified](#topspecified)

#### width

Specifies the requested width of the window.

> public FLOAT [width](#width)

#### widthSpecified

Indicates whether a `DualEngineNewWindowOptions.width` value was specified.

> public BOOL [widthSpecified](#widthspecified)

