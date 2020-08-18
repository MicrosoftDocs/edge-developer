---
description: Embed web technologies (HTML, CSS, and JavaScript) in your native applications with the Microsoft Edge WebView2 control
title: WebView2 Win32 C++ ICoreWebView2ExperimentalPointerInfo
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/20/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html, ICoreWebView2ExperimentalPointerInfo
---

# interface ICoreWebView2ExperimentalPointerInfo 

[!INCLUDE [prerelease-note](../../includes/prerelease-note.md)]

```
interface ICoreWebView2ExperimentalPointerInfo
  : public IUnknown
```

This mostly represents a combined win32 POINTER_INFO/POINTER_TOUCH_INFO/POINTER_PEN_INFO object.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[get_ButtonChangeKind](#get_buttonchangekind) | Get the ButtonChangeKind of the pointer event.
[get_DisplayRect](#get_displayrect) | Get the DisplayRect of the sourceDevice property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).
[get_FrameId](#get_frameid) | Get the FrameID of the pointer event.
[get_HimetricLocation](#get_himetriclocation) | Get the HimetricLocation of the pointer event.
[get_HimetricLocationRaw](#get_himetriclocationraw) | Get the HimetricLocationRaw of the pointer event.
[get_HistoryCount](#get_historycount) | Get the HistoryCount of the pointer event.
[get_InputData](#get_inputdata) | Get the InputData of the pointer event.
[get_KeyStates](#get_keystates) | Get the KeyStates of the pointer event.
[get_PenFlags](#get_penflags) | Get the PenFlags of the pointer event.
[get_PenMask](#get_penmask) | Get the PenMask of the pointer event.
[get_PenPressure](#get_penpressure) | Get the PenPressure of the pointer event.
[get_PenRotation](#get_penrotation) | Get the PenRotation of the pointer event.
[get_PenTiltX](#get_pentiltx) | Get the PenTiltX of the pointer event.
[get_PenTiltY](#get_pentilty) | Get the PenTiltY of the pointer event.
[get_PerformanceCount](#get_performancecount) | Get the PerformanceCount of the pointer event.
[get_PixelLocation](#get_pixellocation) | Get the PixelLocation of the pointer event.
[get_PixelLocationRaw](#get_pixellocationraw) | Get the PixelLocationRaw of the pointer event.
[get_PointerDeviceRect](#get_pointerdevicerect) | Get the PointerDeviceRect of the sourceDevice property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).
[get_PointerFlags](#get_pointerflags) | Get the PointerFlags of the pointer event.
[get_PointerId](#get_pointerid) | Get the PointerId of the pointer event.
[get_PointerKind](#get_pointerkind) | Get the PointerKind of the pointer event.
[get_Time](#get_time) | Get the Time of the pointer event.
[get_TouchContact](#get_touchcontact) | Get the TouchContact of the pointer event.
[get_TouchContactRaw](#get_touchcontactraw) | Get the TouchContactRaw of the pointer event.
[get_TouchFlags](#get_touchflags) | Get the TouchFlags of the pointer event.
[get_TouchMask](#get_touchmask) | Get the TouchMask of the pointer event.
[get_TouchOrientation](#get_touchorientation) | Get the TouchOrientation of the pointer event.
[get_TouchPressure](#get_touchpressure) | Get the TouchPressure of the pointer event.
[put_ButtonChangeKind](#put_buttonchangekind) | Set the ButtonChangeKind of the pointer event.
[put_DisplayRect](#put_displayrect) | Set the DisplayRect of the sourceDevice property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).
[put_FrameId](#put_frameid) | Set the FrameID of the pointer event.
[put_HimetricLocation](#put_himetriclocation) | Set the HimetricLocation of the pointer event.
[put_HimetricLocationRaw](#put_himetriclocationraw) | Set the HimetricLocationRaw of the pointer event.
[put_HistoryCount](#put_historycount) | Set the HistoryCount of the pointer event.
[put_InputData](#put_inputdata) | Set the InputData of the pointer event.
[put_KeyStates](#put_keystates) | Set the KeyStates of the pointer event.
[put_PenFlags](#put_penflags) | Set the PenFlags of the pointer event.
[put_PenMask](#put_penmask) | Set the PenMask of the pointer event.
[put_PenPressure](#put_penpressure) | Set the PenPressure of the pointer event.
[put_PenRotation](#put_penrotation) | Set the PenRotation of the pointer event.
[put_PenTiltX](#put_pentiltx) | Set the PenTiltX of the pointer event.
[put_PenTiltY](#put_pentilty) | Set the PenTiltY of the pointer event.
[put_PerformanceCount](#put_performancecount) | Set the PerformanceCount of the pointer event.
[put_PixelLocation](#put_pixellocation) | Set the PixelLocation of the pointer event.
[put_PixelLocationRaw](#put_pixellocationraw) | Set the PixelLocationRaw of the pointer event.
[put_PointerDeviceRect](#put_pointerdevicerect) | Set the PointerDeviceRect of the sourceDevice property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).
[put_PointerFlags](#put_pointerflags) | Set the PointerFlags of the pointer event.
[put_PointerId](#put_pointerid) | Set the PointerId of the pointer event.
[put_PointerKind](#put_pointerkind) | Set the PointerKind of the pointer event.
[put_Time](#put_time) | Set the Time of the pointer event.
[put_TouchContact](#put_touchcontact) | Set the TouchContact of the pointer event.
[put_TouchContactRaw](#put_touchcontactraw) | Set the TouchContactRaw of the pointer event.
[put_TouchFlags](#put_touchflags) | Set the TouchFlags of the pointer event.
[put_TouchMask](#put_touchmask) | Set the TouchMask of the pointer event.
[put_TouchOrientation](#put_touchorientation) | Set the TouchOrientation of the pointer event.
[put_TouchPressure](#put_touchpressure) | Set the TouchPressure of the pointer event.

It takes fields from all three and excludes some win32 specific data types like HWND and HANDLE. Note, sourceDevice is taken out but we expect the PointerDeviceRect and DisplayRect to cover the existing use cases of sourceDevice. Another big difference is that any of the point or rect locations are expected to be in webview physical coordinates. That is, coordinates relative to the webview and no DPI scaling applied.

## Members

#### get_ButtonChangeKind 

Get the ButtonChangeKind of the pointer event.

> public HRESULT [get_ButtonChangeKind](#get_buttonchangekind)(INT32 * buttonChangeKind)

This corresponds to the ButtonChangeKind property of the POINTER_INFO struct. The values are defined by the POINTER_BUTTON_CHANGE_KIND enum in the Windows SDK (winuser.h).

#### get_DisplayRect 

Get the DisplayRect of the sourceDevice property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).

> public HRESULT [get_DisplayRect](#get_displayrect)(RECT * displayRect)

#### get_FrameId 

Get the FrameID of the pointer event.

> public HRESULT [get_FrameId](#get_frameid)(UINT32 * frameId)

This corresponds to the frameId property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).

#### get_HimetricLocation 

Get the HimetricLocation of the pointer event.

> public HRESULT [get_HimetricLocation](#get_himetriclocation)(POINT * himetricLocation)

This corresponds to the ptHimetricLocation property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).

#### get_HimetricLocationRaw 

Get the HimetricLocationRaw of the pointer event.

> public HRESULT [get_HimetricLocationRaw](#get_himetriclocationraw)(POINT * himetricLocationRaw)

This corresponds to the ptHimetricLocationRaw property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).

#### get_HistoryCount 

Get the HistoryCount of the pointer event.

> public HRESULT [get_HistoryCount](#get_historycount)(UINT32 * historyCount)

This corresponds to the historyCount property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).

#### get_InputData 

Get the InputData of the pointer event.

> public HRESULT [get_InputData](#get_inputdata)(INT32 * inputData)

This corresponds to the InputData property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).

#### get_KeyStates 

Get the KeyStates of the pointer event.

> public HRESULT [get_KeyStates](#get_keystates)(DWORD * keyStates)

This corresponds to the dwKeyStates property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).

#### get_PenFlags 

Get the PenFlags of the pointer event.

> public HRESULT [get_PenFlags](#get_penflags)(UINT32 * penFLags)

This corresponds to the penFlags property of the POINTER_PEN_INFO struct. The values are defined by the PEN_FLAGS constants in the Windows SDK (winuser.h).

#### get_PenMask 

Get the PenMask of the pointer event.

> public HRESULT [get_PenMask](#get_penmask)(UINT32 * penMask)

This corresponds to the penMask property of the POINTER_PEN_INFO struct. The values are defined by the PEN_MASK constants in the Windows SDK (winuser.h).

#### get_PenPressure 

Get the PenPressure of the pointer event.

> public HRESULT [get_PenPressure](#get_penpressure)(UINT32 * penPressure)

This corresponds to the pressure property of the POINTER_PEN_INFO struct as defined in the Windows SDK (winuser.h).

#### get_PenRotation 

Get the PenRotation of the pointer event.

> public HRESULT [get_PenRotation](#get_penrotation)(UINT32 * penRotation)

This corresponds to the rotation property of the POINTER_PEN_INFO struct as defined in the Windows SDK (winuser.h).

#### get_PenTiltX 

Get the PenTiltX of the pointer event.

> public HRESULT [get_PenTiltX](#get_pentiltx)(INT32 * penTiltX)

This corresponds to the tiltX property of the POINTER_PEN_INFO struct as defined in the Windows SDK (winuser.h).

#### get_PenTiltY 

Get the PenTiltY of the pointer event.

> public HRESULT [get_PenTiltY](#get_pentilty)(INT32 * penTiltY)

This corresponds to the tiltY property of the POINTER_PEN_INFO struct as defined in the Windows SDK (winuser.h).

#### get_PerformanceCount 

Get the PerformanceCount of the pointer event.

> public HRESULT [get_PerformanceCount](#get_performancecount)(UINT64 * performanceCount)

This corresponds to the PerformanceCount property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).

#### get_PixelLocation 

Get the PixelLocation of the pointer event.

> public HRESULT [get_PixelLocation](#get_pixellocation)(POINT * pixelLocation)

This corresponds to the ptPixelLocation property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).

#### get_PixelLocationRaw 

Get the PixelLocationRaw of the pointer event.

> public HRESULT [get_PixelLocationRaw](#get_pixellocationraw)(POINT * pixelLocationRaw)

This corresponds to the ptPixelLocationRaw property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).

#### get_PointerDeviceRect 

Get the PointerDeviceRect of the sourceDevice property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).

> public HRESULT [get_PointerDeviceRect](#get_pointerdevicerect)(RECT * pointerDeviceRect)

#### get_PointerFlags 

Get the PointerFlags of the pointer event.

> public HRESULT [get_PointerFlags](#get_pointerflags)(UINT32 * pointerFlags)

This corresponds to the pointerFlags property of the POINTER_INFO struct. The values are defined by the POINTER_FLAGS constants in the Windows SDK (winuser.h).

#### get_PointerId 

Get the PointerId of the pointer event.

> public HRESULT [get_PointerId](#get_pointerid)(UINT32 * pointerId)

This corresponds to the pointerId property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).

#### get_PointerKind 

Get the PointerKind of the pointer event.

> public HRESULT [get_PointerKind](#get_pointerkind)(DWORD * pointerKind)

This corresponds to the pointerKind property of the POINTER_INFO struct. The values are defined by the POINTER_INPUT_KIND enum in the Windows SDK (winuser.h). Supports PT_PEN and PT_TOUCH.

#### get_Time 

Get the Time of the pointer event.

> public HRESULT [get_Time](#get_time)(DWORD * time)

This corresponds to the dwTime property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).

#### get_TouchContact 

Get the TouchContact of the pointer event.

> public HRESULT [get_TouchContact](#get_touchcontact)(RECT * touchContact)

This corresponds to the rcContact property of the POINTER_TOUCH_INFO struct as defined in the Windows SDK (winuser.h).

#### get_TouchContactRaw 

Get the TouchContactRaw of the pointer event.

> public HRESULT [get_TouchContactRaw](#get_touchcontactraw)(RECT * touchContactRaw)

This corresponds to the rcContactRaw property of the POINTER_TOUCH_INFO struct as defined in the Windows SDK (winuser.h).

#### get_TouchFlags 

Get the TouchFlags of the pointer event.

> public HRESULT [get_TouchFlags](#get_touchflags)(UINT32 * touchFlags)

This corresponds to the touchFlags property of the POINTER_TOUCH_INFO struct. The values are defined by the TOUCH_FLAGS constants in the Windows SDK (winuser.h).

#### get_TouchMask 

Get the TouchMask of the pointer event.

> public HRESULT [get_TouchMask](#get_touchmask)(UINT32 * touchMask)

This corresponds to the touchMask property of the POINTER_TOUCH_INFO struct. The values are defined by the TOUCH_MASK constants in the Windows SDK (winuser.h).

#### get_TouchOrientation 

Get the TouchOrientation of the pointer event.

> public HRESULT [get_TouchOrientation](#get_touchorientation)(UINT32 * touchOrientation)

This corresponds to the orientation property of the POINTER_TOUCH_INFO struct as defined in the Windows SDK (winuser.h).

#### get_TouchPressure 

Get the TouchPressure of the pointer event.

> public HRESULT [get_TouchPressure](#get_touchpressure)(UINT32 * touchPressure)

This corresponds to the pressure property of the POINTER_TOUCH_INFO struct as defined in the Windows SDK (winuser.h).

#### put_ButtonChangeKind 

Set the ButtonChangeKind of the pointer event.

> public HRESULT [put_ButtonChangeKind](#put_buttonchangekind)(INT32 buttonChangeKind)

This corresponds to the ButtonChangeKind property of the POINTER_INFO struct. The values are defined by the POINTER_BUTTON_CHANGE_KIND enum in the Windows SDK (winuser.h).

#### put_DisplayRect 

Set the DisplayRect of the sourceDevice property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).

> public HRESULT [put_DisplayRect](#put_displayrect)(RECT displayRect)

#### put_FrameId 

Set the FrameID of the pointer event.

> public HRESULT [put_FrameId](#put_frameid)(UINT32 frameId)

This corresponds to the frameId property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).

#### put_HimetricLocation 

Set the HimetricLocation of the pointer event.

> public HRESULT [put_HimetricLocation](#put_himetriclocation)(POINT himetricLocation)

This corresponds to the ptHimetricLocation property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).

#### put_HimetricLocationRaw 

Set the HimetricLocationRaw of the pointer event.

> public HRESULT [put_HimetricLocationRaw](#put_himetriclocationraw)(POINT himetricLocationRaw)

This corresponds to the ptHimetricLocationRaw property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).

#### put_HistoryCount 

Set the HistoryCount of the pointer event.

> public HRESULT [put_HistoryCount](#put_historycount)(UINT32 historyCount)

This corresponds to the historyCount property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).

#### put_InputData 

Set the InputData of the pointer event.

> public HRESULT [put_InputData](#put_inputdata)(INT32 inputData)

This corresponds to the InputData property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).

#### put_KeyStates 

Set the KeyStates of the pointer event.

> public HRESULT [put_KeyStates](#put_keystates)(DWORD keyStates)

This corresponds to the dwKeyStates property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).

#### put_PenFlags 

Set the PenFlags of the pointer event.

> public HRESULT [put_PenFlags](#put_penflags)(UINT32 penFLags)

This corresponds to the penFlags property of the POINTER_PEN_INFO struct. The values are defined by the PEN_FLAGS constants in the Windows SDK (winuser.h).

#### put_PenMask 

Set the PenMask of the pointer event.

> public HRESULT [put_PenMask](#put_penmask)(UINT32 penMask)

This corresponds to the penMask property of the POINTER_PEN_INFO struct. The values are defined by the PEN_MASK constants in the Windows SDK (winuser.h).

#### put_PenPressure 

Set the PenPressure of the pointer event.

> public HRESULT [put_PenPressure](#put_penpressure)(UINT32 penPressure)

This corresponds to the pressure property of the POINTER_PEN_INFO struct as defined in the Windows SDK (winuser.h).

#### put_PenRotation 

Set the PenRotation of the pointer event.

> public HRESULT [put_PenRotation](#put_penrotation)(UINT32 penRotation)

This corresponds to the rotation property of the POINTER_PEN_INFO struct as defined in the Windows SDK (winuser.h).

#### put_PenTiltX 

Set the PenTiltX of the pointer event.

> public HRESULT [put_PenTiltX](#put_pentiltx)(INT32 penTiltX)

This corresponds to the tiltX property of the POINTER_PEN_INFO struct as defined in the Windows SDK (winuser.h).

#### put_PenTiltY 

Set the PenTiltY of the pointer event.

> public HRESULT [put_PenTiltY](#put_pentilty)(INT32 penTiltY)

This corresponds to the tiltY property of the POINTER_PEN_INFO struct as defined in the Windows SDK (winuser.h).

#### put_PerformanceCount 

Set the PerformanceCount of the pointer event.

> public HRESULT [put_PerformanceCount](#put_performancecount)(UINT64 performanceCount)

This corresponds to the PerformanceCount property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).

#### put_PixelLocation 

Set the PixelLocation of the pointer event.

> public HRESULT [put_PixelLocation](#put_pixellocation)(POINT pixelLocation)

This corresponds to the ptPixelLocation property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).

#### put_PixelLocationRaw 

Set the PixelLocationRaw of the pointer event.

> public HRESULT [put_PixelLocationRaw](#put_pixellocationraw)(POINT pixelLocationRaw)

This corresponds to the ptPixelLocationRaw property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).

#### put_PointerDeviceRect 

Set the PointerDeviceRect of the sourceDevice property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).

> public HRESULT [put_PointerDeviceRect](#put_pointerdevicerect)(RECT pointerDeviceRect)

#### put_PointerFlags 

Set the PointerFlags of the pointer event.

> public HRESULT [put_PointerFlags](#put_pointerflags)(UINT32 pointerFlags)

This corresponds to the pointerFlags property of the POINTER_INFO struct. The values are defined by the POINTER_FLAGS constants in the Windows SDK (winuser.h).

#### put_PointerId 

Set the PointerId of the pointer event.

> public HRESULT [put_PointerId](#put_pointerid)(UINT32 pointerId)

This corresponds to the pointerId property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).

#### put_PointerKind 

Set the PointerKind of the pointer event.

> public HRESULT [put_PointerKind](#put_pointerkind)(DWORD pointerKind)

This corresponds to the pointerKind property of the POINTER_INFO struct. The values are defined by the POINTER_INPUT_KIND enum in the Windows SDK (winuser.h). Supports PT_PEN and PT_TOUCH.

#### put_Time 

Set the Time of the pointer event.

> public HRESULT [put_Time](#put_time)(DWORD time)

This corresponds to the dwTime property of the POINTER_INFO struct as defined in the Windows SDK (winuser.h).

#### put_TouchContact 

Set the TouchContact of the pointer event.

> public HRESULT [put_TouchContact](#put_touchcontact)(RECT touchContact)

This corresponds to the rcContact property of the POINTER_TOUCH_INFO struct as defined in the Windows SDK (winuser.h).

#### put_TouchContactRaw 

Set the TouchContactRaw of the pointer event.

> public HRESULT [put_TouchContactRaw](#put_touchcontactraw)(RECT touchContactRaw)

This corresponds to the rcContactRaw property of the POINTER_TOUCH_INFO struct as defined in the Windows SDK (winuser.h).

#### put_TouchFlags 

Set the TouchFlags of the pointer event.

> public HRESULT [put_TouchFlags](#put_touchflags)(UINT32 touchFlags)

This corresponds to the touchFlags property of the POINTER_TOUCH_INFO struct. The values are defined by the TOUCH_FLAGS constants in the Windows SDK (winuser.h).

#### put_TouchMask 

Set the TouchMask of the pointer event.

> public HRESULT [put_TouchMask](#put_touchmask)(UINT32 touchMask)

This corresponds to the touchMask property of the POINTER_TOUCH_INFO struct. The values are defined by the TOUCH_MASK constants in the Windows SDK (winuser.h).

#### put_TouchOrientation 

Set the TouchOrientation of the pointer event.

> public HRESULT [put_TouchOrientation](#put_touchorientation)(UINT32 touchOrientation)

This corresponds to the orientation property of the POINTER_TOUCH_INFO struct as defined in the Windows SDK (winuser.h).

#### put_TouchPressure 

Set the TouchPressure of the pointer event.

> public HRESULT [put_TouchPressure](#put_touchpressure)(UINT32 touchPressure)

This corresponds to the pressure property of the POINTER_TOUCH_INFO struct as defined in the Windows SDK (winuser.h).

