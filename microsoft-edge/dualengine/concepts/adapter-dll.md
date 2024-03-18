---
title: Creating a DualEngine adapter plugin DLL
description: Understanding the requirements and uses of the DualEngine Adapter DLL.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: windows-integration
ms.localizationpriority: high
ms.date: 11/06/2023
---
# Creating a DualEngine adapter plugin DLL

The DualEngine API can only be used from inside the Internet Explorer process.  Therefore, to use the DualEngine API, you must create a plugin DLL that Internet Explorer loads.  This DLL hosts your code that uses the DualEngine API, as well as any code that's needed for communicating with your main application; that's why it's referred to as the _adapter_.

To have Internet Explorer successfully load your DLL, do the following.


<!-- ====================================================================== -->
## Unlock the Limited Access Feature

The DualEngine API is a Limited Access Feature (LAF); that is, a feature that needs to be unlocked before it can be used. For more information about implementation, see [LimitedAccessFeatures Class](/uwp/api/windows.applicationmodel.limitedaccessfeatures). To request an unlock token, contact [Microsoft Support](https://support.serviceshub.microsoft.com/supportforbusiness/create?sapId=d15d3aa2-0512-7cb8-1df9-86221f5cbfde).

The DualEngine API is not a typical LAF, in that `Windows.ApplicationModel.TryUnlockFeature` is not used to unlock the feature.  This is because LAF typically uses the application identity of the calling process to grant access, and as a plugin DLL, this will always be Internet Explorer.  Therefore, to unlock the API, you need to call [DualEngineSessionFactory::TryUnlockFeature](../reference/dualenginesessionfactory.md#tryunlockfeature).

In addition, the identity of your application must be provided to Internet Explorer via a specific resource string that's set in your DLL.  You can set the value in your resource file as follows:

```cpp
IDENTITY LIMITEDACCESSFEATURE { L"ExampleApp_6v1kqc8g0gcae" }
```

Your specific identity string will be provided to you by Microsoft when LAF access is granted.


<!-- ====================================================================== -->
## Implement function exports

Your adapter DLL must implement the following function exports:
* `DualEngineInitialize`
* `DualEngineReady`

These exports are called by Internet Explorer when loading your DLL.  They provide you with the factory objects for creating DualEngine API objects.

These exports are called from the main thread of the Internet Explorer process, so doing any long-term processing inside the exports will halt Internet Explorer.  Therefore, to handle any long-running work, you should create a new thread.


<!-- ------------------------------ -->
#### DualEngineInitialize

```cpp
HRESULT APIENTRY DualEngineInitialize(DualEngineSessionFactory* pSessionFactory, PCWSTR pipeName)
```

###### Parameters

* `pSessionFactory` The factory object to use to access the DualEngine API.
* `pipeName` A string that was passed in to Internet Explorer via the `-DualEnginePipe` command-line flag.

This export is called immediately after Internet Explorer successfully loads the DLL.  This is your first chance to set up anything necessary for your application.

This is where you would typically set up communication between the adapter DLL and your host app.  The `pipeName` string is provided for this purpose.  Despite its name, the `pipeName` string doesn't need to be a pipe name; it's simply a string that's passed to your adapter based on the value of the `-DualEnginePipe` command-line flag that Internet Explorer was launched with, and has no other semantic meaning.

Although the `pSessionFactory` object is provided in this call, it's not valid to call `GetVersionedBrowserSession` yet, because at this point, Internet Explorer isn't ready to create Sessions.


<!-- ------------------------------ -->
#### DualEngineReady

```cpp
HRESULT APIENTRY DualEngineReady()
```

This export is called after Internet Explorer has finished all of its initial setup and the API is ready to use.  It's now possible to call `GetVersionedBrowserSession` and get the Session object, assuming a successful call to `TryUnlockFeature` has been made.


<!-- ====================================================================== -->
## Bypass signing the adapter DLL

Internet Explorer has a requirement that for an adapter DLL to be loaded, it must be signed with a trusted signature.  For testing and development purposes, this check can be bypassed, by turning on `TestSigning` for the device that you're testing on, as follows:

```cmd
Bcdedit.exe -set TESTSIGNING ON
```
