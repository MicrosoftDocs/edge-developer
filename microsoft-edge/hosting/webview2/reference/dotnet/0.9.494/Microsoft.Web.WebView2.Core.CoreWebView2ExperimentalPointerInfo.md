---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/28/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---

# Microsoft.Web.WebView2.Core.CoreWebView2ExperimentalPointerInfo class 

> [!NOTE]
> This an experimental API that is shipped with our prerelease SDK version 0.9.494.

Namespace: Microsoft.Web.WebView2.Core
Assembly: Microsoft.Web.WebView2.Core.dll

This mostly represents a combined win32 POINTER_INFO/POINTER_TOUCH_INFO/POINTER_PEN_INFO object.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[ButtonChangeKind](#buttonchangekind) | The ButtonChangeKind of the pointer event.
[DisplayRect](#displayrect) | The DisplayRect of the sourceDevice property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).
[FrameId](#frameid) | The FrameID of the pointer event.
[HimetricLocation](#himetriclocation) | The HimetricLocation of the pointer event.
[HimetricLocationRaw](#himetriclocationraw) | The HimetricLocationRaw of the pointer event.
[HistoryCount](#historycount) | The HistoryCount of the pointer event.
[InputData](#inputdata) | The InputData of the pointer event.
[KeyStates](#keystates) | The KeyStates of the pointer event.
[PenFlags](#penflags) | The PenFlags of the pointer event.
[PenMask](#penmask) | The PenMask of the pointer event.
[PenPressure](#penpressure) | The PenPressure of the pointer event.
[PenRotation](#penrotation) | The PenRotation of the pointer event.
[PenTiltX](#pentiltx) | The PenTiltX of the pointer event.
[PenTiltY](#pentilty) | The PenTiltY of the pointer event.
[PerformanceCount](#performancecount) | The PerformanceCount of the pointer event.
[PixelLocation](#pixellocation) | The PixelLocation of the pointer event.
[PixelLocationRaw](#pixellocationraw) | The PixelLocationRaw of the pointer event.
[PointerDeviceRect](#pointerdevicerect) | The PointerDeviceRect of the sourceDevice property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).
[PointerFlags](#pointerflags) | The PointerFlags of the pointer event.
[PointerId](#pointerid) | The PointerId of the pointer event.
[PointerKind](#pointerkind) | The PointerKind of the pointer event.
[Time](#time) | The Time of the pointer event.
[TouchContact](#touchcontact) | The TouchContact of the pointer event.
[TouchContactRaw](#touchcontactraw) | The TouchContactRaw of the pointer event.
[TouchFlags](#touchflags) | The TouchFlags of the pointer event.
[TouchMask](#touchmask) | The TouchMask of the pointer event.
[TouchOrientation](#touchorientation) | The TouchOrientation of the pointer event.
[TouchPressure](#touchpressure) | The TouchPressure of the pointer event.

## Members

### Properties

#### ButtonChangeKind 

The ButtonChangeKind of the pointer event.

> public int [ButtonChangeKind](#buttonchangekind)

This corresponds to the ButtonChangeKind property of the POINTER_INFO struct. The values are defined by the POINTER_BUTTON_CHANGE_KIND enum in the Windows SDK (winuser.h).

#### DisplayRect 

The DisplayRect of the sourceDevice property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).

> public Rect [DisplayRect](#displayrect)

#### FrameId 

The FrameID of the pointer event.

> public uint [FrameId](#frameid)

This corresponds to the frameId property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).

#### HimetricLocation 

The HimetricLocation of the pointer event.

> public Point [HimetricLocation](#himetriclocation)

This corresponds to the ptHimetricLocation property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).

#### HimetricLocationRaw 

The HimetricLocationRaw of the pointer event.

> public Point [HimetricLocationRaw](#himetriclocationraw)

This corresponds to the ptHimetricLocationRaw property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).

#### HistoryCount 

The HistoryCount of the pointer event.

> public uint [HistoryCount](#historycount)

This corresponds to the historyCount property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).

#### InputData 

The InputData of the pointer event.

> public int [InputData](#inputdata)

This corresponds to the InputData property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).

#### KeyStates 

The KeyStates of the pointer event.

> public uint [KeyStates](#keystates)

This corresponds to the dwKeyStates property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).

#### PenFlags 

The PenFlags of the pointer event.

> public uint [PenFlags](#penflags)

This corresponds to the penFlags property of the POINTER_PEN_INFO struct. The values are defined by the PEN_FLAGS constants in the Windows SDK (winuser.h).

#### PenMask 

The PenMask of the pointer event.

> public uint [PenMask](#penmask)

This corresponds to the penMask property of the POINTER_PEN_INFO struct. The values are defined by the PEN_MASK constants in the Windows SDK (winuser.h).

#### PenPressure 

The PenPressure of the pointer event.

> public uint [PenPressure](#penpressure)

This corresponds to the pressure property of the POINTER_PEN_INFO struct as defined in the Windows SDK (winuser.h).

#### PenRotation 

The PenRotation of the pointer event.

> public uint [PenRotation](#penrotation)

This corresponds to the rotation property of the POINTER_PEN_INFO struct as defined in the Windows SDK (winuser.h).

#### PenTiltX 

The PenTiltX of the pointer event.

> public int [PenTiltX](#pentiltx)

This corresponds to the tiltX property of the POINTER_PEN_INFO struct as defined in the Windows SDK (winuser.h).

#### PenTiltY 

The PenTiltY of the pointer event.

> public int [PenTiltY](#pentilty)

This corresponds to the tiltY property of the POINTER_PEN_INFO struct as defined in the Windows SDK (winuser.h).

#### PerformanceCount 

The PerformanceCount of the pointer event.

> public ulong [PerformanceCount](#performancecount)

This corresponds to the PerformanceCount property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).

#### PixelLocation 

The PixelLocation of the pointer event.

> public Point [PixelLocation](#pixellocation)

This corresponds to the ptPixelLocation property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).

#### PixelLocationRaw 

The PixelLocationRaw of the pointer event.

> public Point [PixelLocationRaw](#pixellocationraw)

This corresponds to the ptPixelLocationRaw property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).

#### PointerDeviceRect 

The PointerDeviceRect of the sourceDevice property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).

> public Rect [PointerDeviceRect](#pointerdevicerect)

#### PointerFlags 

The PointerFlags of the pointer event.

> public uint [PointerFlags](#pointerflags)

This corresponds to the pointerFlags property of the POINTER_INFO struct. The values are defined by the POINTER_FLAGS constants in the Windows SDK (winuser.h).

#### PointerId 

The PointerId of the pointer event.

> public uint [PointerId](#pointerid)

This corresponds to the pointerId property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).

#### PointerKind 

The PointerKind of the pointer event.

> public uint [PointerKind](#pointerkind)

This corresponds to the pointerKind property of the POINTER_INFO struct. The values are defined by the POINTER_INPUT_KIND enum in the Windows SDK (winuser.h). Supports PT_PEN and PT_TOUCH.

#### Time 

The Time of the pointer event.

> public uint [Time](#time)

This corresponds to the dwTime property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).

#### TouchContact 

The TouchContact of the pointer event.

> public Rect [TouchContact](#touchcontact)

This corresponds to the rcContact property of the POINTER_TOUCH_INFO struct as defined in the Windows SDK (winuser.h).

#### TouchContactRaw 

The TouchContactRaw of the pointer event.

> public Rect [TouchContactRaw](#touchcontactraw)

This corresponds to the rcContactRaw property of the POINTER_TOUCH_INFO struct as defined in the Windows SDK (winuser.h).

#### TouchFlags 

The TouchFlags of the pointer event.

> public uint [TouchFlags](#touchflags)

This corresponds to the touchFlags property of the POINTER_TOUCH_INFO struct. The values are defined by the TOUCH_FLAGS constants in the Windows SDK (winuser.h).

#### TouchMask 

The TouchMask of the pointer event.

> public uint [TouchMask](#touchmask)

This corresponds to the touchMask property of the POINTER_TOUCH_INFO struct. The values are defined by the TOUCH_MASK constants in the Windows SDK (winuser.h).

#### TouchOrientation 

The TouchOrientation of the pointer event.

> public uint [TouchOrientation](#touchorientation)

This corresponds to the orientation property of the POINTER_TOUCH_INFO struct as defined in the Windows SDK (winuser.h).

#### TouchPressure 

The TouchPressure of the pointer event.

> public uint [TouchPressure](#touchpressure)

This corresponds to the pressure property of the POINTER_TOUCH_INFO struct as defined in the Windows SDK (winuser.h).

