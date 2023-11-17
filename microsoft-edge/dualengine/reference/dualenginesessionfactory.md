---
description: Factory object for DualEngine interfaces.
title: DualEngine Win32 C++ DualEngineSessionFactory
author: MSEdgeTeam
ms.author: edgededev
ms.prod: microsoft-edge
ms.date: 11/16/2023
keywords: dual engine, dualengine, iemode, win32 apps, win32, edge, ie mode, edge html, DualEngineSessionFactory
topic_type: 
- APIRef
api_name:
- DualEngineSessionFactory
- DualEngineSessionFactory.GetSpecifiedVersion
- DualEngineSessionFactory.GetVersionedBrowserSession
- DualEngineSessionFactory.TryUnlockFeature
api_type:
- COM
api_location:
- ieframe.dll
---

# interface DualEngineSessionFactory

> [!IMPORTANT]
> The DualEngine API is a limited access feature. Contact dualengineapiaccess@microsoft.com for more information.

Factory object for DualEngine interfaces.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[GetSpecifiedVersion](#getspecifiedversion) | Returns the known DualEngine interface version, if there is one.
[GetVersionedBrowserSession](#getversionedbrowsersession) | Gets a DualEngine Session object of the requested version.
[TryUnlockFeature](#tryunlockfeature) | Called to unlock the DualEngine interface.

## Members

#### GetSpecifiedVersion

Returns the known DualEngine interface version, if there is one.

> public HRESULT [GetSpecifiedVersion](#getspecifiedversion)(__out UINT * version) const

#### Parameters
* `version` A pointer to a UINT where the version will be stored if there is one. 

#### Returns
S_OK if a known version was found, E_FAIL if it was not.

#### GetVersionedBrowserSession

Gets a DualEngine Session object of the requested version.

> public HRESULT [GetVersionedBrowserSession](#getversionedbrowsersession)(__in UINT version, __out IUnknown ** ppSession)

> [!IMPORTANT]
> This method must be called after Internet Explorer calls the export on DualEngineReady, see [Understanding the DualEngine Adapter DLL](../concepts/adapter-dll.md) for more information. 
#### Parameters
* `version` The version of the Session object to get. 

* `ppSession` The request Session object if the version requested is supported. 

#### Returns
An HRESULT that indicates whether session creation was successful.

#### TryUnlockFeature

Called to unlock the DualEngine interface.

> public HRESULT [TryUnlockFeature](#tryunlockfeature)(PCWSTR token, PCWSTR attestation)

> [!IMPORTANT]
> This MUST be called successfully before any other methods on this interface can be called. Equivalent to Windows::ApplicationModel::LimitedAccessFeatures::TryUnlockFeature except it checks the adapter dll for the identity resource instead of the process exe. 
#### Parameters
* `token` The LAF token provided by Microsoft. 

* `attestation` The attestation string provided by Microsoft. 

#### Returns
An HRESULT that indicates whether unlocking was successful.

