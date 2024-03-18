---
title: DualEngine Win32 C++ DualEngineSessionFactory
description: Factory object for DualEngine interfaces.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: windows-integration
ms.date: 03/04/2024
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
> The DualEngine API is part of a Limited Access Feature (see [LimitedAccessFeatures class](/uwp/api/windows.applicationmodel.limitedaccessfeatures)). For more information or 
> to request an unlock token, contact [Microsoft Support](https://support.serviceshub.microsoft.com/supportforbusiness/create?sapId=d15d3aa2-0512-7cb8-1df9-86221f5cbfde).

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

> public STDMETHOD([GetSpecifiedVersion](#getspecifiedversion))(__out UINT * version) const

###### Parameters
* `version` A pointer to a UINT where the version will be stored if there is one. 

###### Returns
S_OK if a known version was found, E_FAIL if it was not.

#### GetVersionedBrowserSession

Gets a DualEngine Session object of the requested version.

> public STDMETHOD([GetVersionedBrowserSession](#getversionedbrowsersession))(__in UINT version, __out IUnknown ** ppSession)

> [!IMPORTANT]
> This method must be called after Internet Explorer calls the export on DualEngineReady. See [Creating a DualEngine adapter plugin DLL](../concepts/adapter-dll.md). 
###### Parameters
* `version` The version of the Session object to get. 

* `ppSession` The Session object, if the version requested is supported. 

###### Returns
An HRESULT that indicates whether session creation was successful.

#### TryUnlockFeature

Called to unlock the DualEngine interface.

> public STDMETHOD([TryUnlockFeature](#tryunlockfeature))(PCWSTR token, PCWSTR attestation)

> [!IMPORTANT]
> This MUST be called successfully before any other methods on this interface can be called.

Equivalent to `Windows::ApplicationModel::LimitedAccessFeatures::TryUnlockFeature` except it checks the adapter dll for the identity resource instead of the process .exe. 
###### Parameters
* `token` The LAF token provided by Microsoft. 

* `attestation` The attestation string provided by Microsoft. 

###### Returns
An HRESULT that indicates whether unlocking was successful.
