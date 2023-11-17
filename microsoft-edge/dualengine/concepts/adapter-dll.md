---
title: Understanding the DualEngine Adapter DLL
description: Understanding the requirements and uses of DualEngine Adapter DLL.
author: MSEdgeTeam
ms.author: edgededev
ms.topic: conceptual
ms.prod: microsoft-edge
ms.localizationpriority: high
ms.technology: windows-integration
ms.date: 11/06/2023
---

# Understanding the DualEngine Adapter DLL
The DualEngine API is an API that can only be used from inside the Internet Explorer process.
As such in order to make use of the API it is necessary to create a plugin DLL that Internet Explorer will load.
This DLL will host your code that uses the DualEngine API as well as presumably any code you need to communicate
with your main application, hence why it is referred to as the adapter.

There are a number of requirements to fulfill to have Internet Explorer successfully load your DLL.

## Limited Access Feature Requirements
The DualEngine API is what is known as a Limited Access Feature (LAF) which are features that need to be unlocked before
they can be used, see [LimitedAccessFeatures Class](/uwp/api/windows.applicationmodel.limitedaccessfeatures) for
more information.

With that said the DualEngine API is not a typical LAF and 
`Windows.ApplicationModel.TryUnlockFeature` is not used to unlock the feature. This is
because LAF typically uses the application identity of the calling process to grant access, as a plugin DLL this
will always be Internet Explorer. Therefore to unlock the API you are required to call 
[DualEngineSessionFactory::TryUnlockFeature](../reference/dualenginesessionfactory.md#tryunlockfeature).

In addition the identity of you're application is required to be provided to Internet Explorer via a specific
resource string set in your DLL, you can set the value in your resource file like so:
> IDENTITY LIMITEDACCESSFEATURE { L"ExampleApp_6v1kqc8g0gcae" }

Your specific identity string will be provided to you by Microsoft when LAF access is granted.

## Exports
It is required that your adapter DLL implement a number of exports. These exports are called by Internet Explorer
when loading your DLL and provide you with the factory objects for creating DualEngine API objects.

It should be noted that these exports are called from the main thread of Internet Explorer process so doing any
long term processing inside the exports will halt Internet Explorer, as such it is recommended to create a new
thread to handle any long running work.

#### DualEngineInitialize
> HRESULT APIENTRY DualEngineInitialize(DualEngineSessionFactory* pSessionFactory, PCWSTR pipeName)

##### Parameters
* `pSessionFactory` The factory object to use to access the DualEngine API
* `pipeName` A string that was passed in to Internet Explorer via the `-DualEnginePipe` command line flag.

This export is called immediately after Internet Explorer successfully loads the DLL. This is your first chance
to set up anything necessary for your application.

Presumably this is where you would setup communication between the adapter DLL and your host App, the `pipeName`
string is provided for this purpose. Despite it's name this need not be a pipe name, it is simply a string passed 
to your adapter based on the value of `-DualEnginePipe` command line flag Internet Explorer was launched with and
has no other semantic meaning.

Also note that while the `pSessionFactory` object is provided in this call it is currently not valid to call 
`GetVersionedBrowserSession` here as Internet Explorer is currently not ready to create Sessions.


#### DualEngineReady
> HRESULT APIENTRY DualEngineReady()

This export is called after Internet Explorer has finished all of it's initial setup and the API is ready to use. 
It is now possible to call `GetVersionedBrowserSession` and get the Session object assuming a successful call to 
`TryUnlockFeature` has been made.

## Signing
Internet Explorer has a requirement that an adapter DLL must be signed by a trusted signature for it to be loaded.

For testing and development purposes this check can be bypassed by turning TestSigning on for the device you're testing on.
This can be done with the following command.
```cmd
Bcdedit.exe -set TESTSIGNING ON
```