---
title: Understanding the DualEngine Adapter DLL
description: Understanding the requirements and uses of the DualEngine Adapter DLL.
author: MSEdgeTeam
ms.author: edgededev
ms.topic: conceptual
ms.prod: microsoft-edge
ms.localizationpriority: high
ms.technology: windows-integration
ms.date: 11/06/2023
---

# Understanding the DualEngine Adapter DLL
The DualEngine API can only be used from inside the Internet Explorer process.
Therefore, to make use of the API, it's necessary to create a plugin DLL that Internet Explorer will load.
This DLL will host your code that uses the DualEngine API, as well as any code that you need to communicate
with your main application; that's why it's referred to as the _adapter_.

There are a number of requirements to fulfill to have Internet Explorer successfully load your DLL.

## Limited Access Feature Requirements
The DualEngine API is a Limited Access Feature (LAF); that is, a feature that needs to be unlocked before it can be used. 
For more information, see [LimitedAccessFeatures Class](/uwp/api/windows.applicationmodel.limitedaccessfeatures).

The DualEngine API is not a typical LAF and `Windows.ApplicationModel.TryUnlockFeature` is not used to unlock the feature. 
This is because LAF typically uses the application identity of the calling process to grant access, and as a plugin DLL, this
will always be Internet Explorer. Therefore, to unlock the API, you are required to call 
[DualEngineSessionFactory::TryUnlockFeature](../reference/dualenginesessionfactory.md#tryunlockfeature).

In addition, the identity of your application must be provided to Internet Explorer via a specific resource string that's set in your DLL. 
You can set the value in your resource file like so:
> IDENTITY LIMITEDACCESSFEATURE { L"ExampleApp_6v1kqc8g0gcae" }

Your specific identity string will be provided to you by Microsoft when LAF access is granted.

## Exports
Your adapter DLL must implement a number of exports. 
These exports are called by Internet Explorer when loading your DLL. 
They provide you with the factory objects for creating DualEngine API objects.

These exports are called from the main thread of the Internet Explorer process, so doing any long-term processing inside the exports will halt Internet Explorer. 
Therefore, to handle any long-running work, you should create a new thread.

#### DualEngineInitialize
> HRESULT APIENTRY DualEngineInitialize(DualEngineSessionFactory* pSessionFactory, PCWSTR pipeName)

##### Parameters
* `pSessionFactory` The factory object to use to access the DualEngine API.
* `pipeName` A string that was passed in to Internet Explorer via the `-DualEnginePipe` command-line flag.

This export is called immediately after Internet Explorer successfully loads the DLL. This is your first chance
to set up anything necessary for your application.

This is where you would typically set up communication between the adapter DLL and your host App. 
The `pipeName` string is provided for this purpose. 
Despite its name, the `pipeName` string doesn't need to be a pipe name; it's simply a string that's passed to your adapter based on the value of the `-DualEnginePipe` command-line flag that Internet Explorer was launched with, and has no other semantic meaning.

Although the `pSessionFactory` object is provided in this call, it's not valid to call `GetVersionedBrowserSession` yet, because at this point, Internet Explorer isn't ready to create Sessions.


#### DualEngineReady
> HRESULT APIENTRY DualEngineReady()

This export is called after Internet Explorer has finished all of its initial setup and the API is ready to use. 
It is now possible to call `GetVersionedBrowserSession` and get the Session object, assuming a successful call to  `TryUnlockFeature` has been made.

## Signing
Internet Explorer has a requirement that for an adapter DLL to be loaded, it must be signed with a trusted signature.

For testing and development purposes, this check can be bypassed, by turning `TestSigning` on for the device that you're testing on. 
This can be done with the following command:
```cmd
Bcdedit.exe -set TESTSIGNING ON
```