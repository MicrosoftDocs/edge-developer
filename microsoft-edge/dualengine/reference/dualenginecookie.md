---
description: Represents the constituent parts of a cookie.
title: DualEngine Win32 C++ DualEngineCookie
author: MSEdgeTeam
ms.author: edgededev
ms.prod: microsoft-edge
ms.date: 11/16/2023
keywords: dual engine, dualengine, iemode, win32 apps, win32, edge, ie mode, edge html, DualEngineCookie
topic_type: 
- APIRef
api_name:
- DualEngineCookie
- DualEngineCookie.domain
- DualEngineCookie.expiry
- DualEngineCookie.flags
- DualEngineCookie.forceSync
- DualEngineCookie.integrity
- DualEngineCookie.name
- DualEngineCookie.path
- DualEngineCookie.value
api_type:
- COM
api_location:
- ieframe.dll
---

# struct DualEngineCookie

> [!IMPORTANT]
> The DualEngine API is a limited access feature. Contact dualengineapiaccess@microsoft.com for more information.

Represents the constituent parts of a cookie.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[domain](#domain) | Pointer to a string containing the cookie domain.
[expiry](#expiry) | Expiry time for persistent cookies Should only be used if INTERNET_COOKIE_IS_SESSION is *not* set in flags, or if this is a delete (an expiry set to a past date)
[flags](#flags) | Flags for additional cookie details.
[forceSync](#forcesync) | Indicates that when setting the cookie whether to wait for a process of the appropriate PIC to be created and ready to receive the cookie before returning.
[integrity](#integrity) | The Integrity Level of the cookie.
[name](#name) | Pointer to a string containing the cookie name.
[path](#path) | Pointer to a string containing the cookie path. May be NULL.
[value](#value) | Pointer to a string containing the cookie value. May be NULL if name is not NULL.

## Members

#### domain

Pointer to a string containing the cookie domain.

> public LPCWSTR [domain](#domain)

#### expiry

Expiry time for persistent cookies Should only be used if INTERNET_COOKIE_IS_SESSION is *not* set in flags, or if this is a delete (an expiry set to a past date)

> public FILETIME [expiry](#expiry)

#### flags

Flags for additional cookie details.

> public DWORD [flags](#flags)

See [INTERNET_COOKIE2](/windows/win32/api/wininet/ns-wininet-internet_cookie2) for available flags.

#### forceSync

Indicates that when setting the cookie whether to wait for a process of the appropriate PIC to be created and ready to receive the cookie before returning.

> public BOOL [forceSync](#forcesync)

This only affects persistent cookies when protected mode is enabled.

#### integrity

The Integrity Level of the cookie.

> public DualEngineCookieIntegrity [integrity](#integrity)

#### name

Pointer to a string containing the cookie name.

> public LPCWSTR [name](#name)

#### path

Pointer to a string containing the cookie path. May be NULL.

> public LPCWSTR [path](#path)

#### value

Pointer to a string containing the cookie value. May be NULL if name is not NULL.

> public LPCWSTR [value](#value)

