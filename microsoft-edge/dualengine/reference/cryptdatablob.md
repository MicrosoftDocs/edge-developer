---
title: DualEngine Win32 C++ CryptDataBlob
description: Represents an SSL Certificate.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.date: 12/09/2023
keywords: dual engine, dualengine, iemode, win32 apps, win32, edge, ie mode, edge html, CryptDataBlob
topic_type: 
- APIRef
api_name:
- CryptDataBlob
- CryptDataBlob.cbData
- CryptDataBlob.pbData
api_type:
- COM
api_location:
- ieframe.dll
---

# struct CryptDataBlob

> [!IMPORTANT]
> The DualEngine API is a limited access feature. Contact dualengineapiaccess@microsoft.com for more information.

Represents an SSL Certificate.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[cbData](#cbdata) | The number of bytes in `pbData`.
[pbData](#pbdata) | A buffer containing a DER-encoded X.509 certificate string.

## Members

#### cbData

The number of bytes in `pbData`.

> public DWORD [cbData](#cbdata)

#### pbData

A buffer containing a DER-encoded X.509 certificate string.

> public BYTE * [pbData](#pbdata)

