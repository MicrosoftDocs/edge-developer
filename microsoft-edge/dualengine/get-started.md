---
title: Getting started with the DualEngine API
description: Get started using the Microsoft DualEngine API to embed and control an Internet Explorer instance within your app, to provide a browsing experience that's equivalent to a normal Internet Explorer tab, providing increased compatibility with legacy websites.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: windows-integration
ms.localizationpriority: high
ms.date: 11/17/2023
---
# Getting started with the DualEngine API

This article walks you through the steps to start using the DualEngine API.


<!-- ====================================================================== -->
## Step 1: Get access to the DualEngine Limited Access Feature

The DualEngine API is part of a Limited Access Feature. For more information or to request an unlock token, contact [Microsoft Support](https://support.serviceshub.microsoft.com/supportforbusiness/create?sapId=d15d3aa2-0512-7cb8-1df9-86221f5cbfde).

The DualEngine LAF is handled somewhat atypically; for details, see [Unlock the Limited Access Feature](concepts/adapter-dll.md#unlock-the-limited-access-feature) in _Creating a DualEngine adapter plugin DLL_.


<!-- ====================================================================== -->
## Step 2: Download the DualEngine API header

The DualEngine API is a COM interface that's only officially supported via C++, and is not part of the normal Windows SDK.  Therefore, you must [download the DualEngine API header dualengine.h](https://download.microsoft.com/download/c/5/0/c5035487-bd78-4fd0-9cc4-e1c5a3b654b7/dualengine.h), and then include it in your adapter DLL project.


<!-- ====================================================================== -->
## Step 3: Making an adapter DLL

The DualEngine API is accessed by providing a plugin DLL to Internet Explorer at launch.  Internet Explorer loads the DLL on startup, calls some exports on the DLL, and provides you with the objects that you need in order to access the API.  See [Creating a DualEngine adapter plugin DLL](concepts/adapter-dll.md).


<!-- ====================================================================== -->
## Step 4: Launching Internet Explorer

Finally, Internet Explorer must be launched and told where and how to load the adapter that you created.  This can be done by launching Internet Explorer with the correct command-line arguments, as follows:

```
C:\Program Files\Internet Explorer\iexplore.exe -DualEngineAdapter=C:\temp\TestApp\TestAdapter.dll -DualEnginePipe=784 APPID:TESTAPP
```

For more information about these command-line arguments, see [Launching Internet Explorer](concepts/launching-internet-explorer.md).

At this point, Internet Explorer is now running your adapter code, which can now access the DualEngine API.  To see what functionality is available, explore [DualEngine Win32 C++ Reference](reference/index.md).
