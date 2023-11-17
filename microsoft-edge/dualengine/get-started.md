---
title: Getting Started with DualEngine API
description: Get started using DualEngine API in your application.
author: MSEdgeTeam
ms.author: edgededev
ms.topic: conceptual
ms.prod: microsoft-edge
ms.localizationpriority: high
ms.technology: windows-integration
ms.date: 11/06/2023
---
# Getting Started with DualEngine API
In this article we will walk you through the steps needed to start using the DualEngine API.

## Step 1 - Receiving Access to the DualEngine LAF
Access to the DualEngine API is controlled via a Limited Access Feature.
To gain access to the feature reach out to dualengineapiaccess@microsoft.com

Those familiar with LAF should note that the DualEngine LAF is handled somewhat differently than is typical, the 
details of which can be found in the [Limited Access Feature Requirements](concepts/adapter-dll.md#limited-access-feature-requirements)

## Step 2 - Download the DualEngine API header
The DualEngine API is a COM interface that we only officially support via C++ and is not part of the normal Windows
SDK. As such we have provided a header that you must include in your adapter DLL project which can be downloaded from
[DualEngine API Header Download]().

## Step 3 - Making an adapter DLL
The DualEngine API is accessed by providing a plugin DLL to Internet Explorer at launch. Internet Explorer will 
load the DLL on startup and call some exports on the DLL and provide you with the objects you need to access the
API. To learn more about creating your adapter DLL see [Understanding the DualEngine Adapter DLL](concepts/adapter-dll.md)

## Step 4 - Launching Internet Explorer
Finally Internet Explorer must be launched and told where and how to load the adapter you created this can be done
by launching Internet Explorer with the correct command line arguments.
```
C:\Program Files\Internet Explorer\iexplore.exe -DualEngineAdapter=C:\temp\TestApp\TestAdapter.dll -DualEnginePipe=784 APPID:TESTAPP
```
See [Launching Internet Explorer](concepts/launching-internet-explorer.md) for more information on these arguments.


At this point assuming your adapter is properly written, Internet Explorer is now running your adapter code which
can now access the DualEngine API. For details on what functionality is available to you please explore
[DualEngine Win32 C++ Reference](reference/index.md).