---
title: Launching Internet Explorer
description: Launching Internet Explorer for DualEngine API Use
author: MSEdgeTeam
ms.author: edgededev
ms.topic: conceptual
ms.prod: microsoft-edge
ms.localizationpriority: high
ms.technology: windows-integration
ms.date: 11/06/2023
---

# Launching Internet Explorer
Once you have built your adapter DLL you must launch Internet Explorer such that it is aware that it is being used
for the DualEngine API. This article will go over the steps required to do this.

## Required Command Line Arguments
The following command line arguments are required to be present in order to launch Internet Explorer in the correct
way to use the DualEngine

`-DualEngineAdapter=<full-path-to-adapter-dll>`

Indicates the path to the DualEngine API adapter DLL to load. See [Understanding the DualEngine Adapter DLL](adapter-dll.md)
for information on how to write an adapter DLL.

`-DualEnginePipe=<pipe-string>`

This argument provides a string that is eventually passed to the adapter DLL via the `DualEngineInitialize` export.
This can be used to pass a pipe name to your adapter code in order to bootstrap communication between your adapter
and main application. It should be noted that while this is a required command line parameter, it is only ever used
when passed to your code through `DualEngineInitialize`, therefore despite it's name this need not be a pipe name, 
it can be any arbitrary string that you require.

`APPID:<your-app-id>`

This argument provides the  Application User Model ID of your application. This ID is used to associated the 
Internet Explorer process with your Application for a number of Windows Shell features. See 
[Application User Model IDs](/windows/win32/shell/appids) for more information.

## Optional Command Line Arguments
The following command line arguments are optional and adjust Internet Explorer's behavior in regards to the Dual
Engine API.

`-DualEngineVersion=<force_version_number>`

Forces Internet Explorer to instantiate DualEngine objects of the provided version if it can. This will block the 
creation of DualEngine objects not matching the provided version number, even if this version of Internet Explorer
supports this version.

## Diagnosing Launch Issues
There are a number of reasons that Internet Explorer may fail when launching. If this occurs before or while loading
your DLL it can be difficult to determine the exact reason and communicate it back to your application. Therefore
if Internet Explorer fails to launch while launching for DualEngine use we have provided a registry value you can 
check to get detailed error handling information.

### StartupFailurePoint
`HKCU\SOFTWARE\Microsoft\Internet Explorer\EdgeIntegration\StartupFailurePoint`

Contains a DWORD that indicates the location of the failure in the DualEngine start up path.

The DWORD maps to the following reasons.

| DWORD |   Reason                                                                                      |
|:-----:|-----------------------------------------------------------------------------------------------|
|   0   |   No failure                                                                                  |
|   1   |   Unused                                                                                      |
|   2   |   Unused                                                                                      |
|   3   |   The version specified by the DualEngineVersion argument was 0                               |
|   4   |   Failed to canonicalize the path passed in via DualEngineAdapter, see StartupFailureHresult  |
|   5   |   Unused                                                                                      |
|   6   |   Unused                                                                                      |
|   7   |   LoadLibrary failed for the provided adapter DLL, see StartupFailureHresult                  |
|   8   |   Could not find DualEngineInitialize in the adapter DLL                                      |
|   9   |   The call to DualEngineInitialize failed, see StartupFailureHresult                          |
|   10  |   Failed to set the provided Application User Model ID, see StartupFailureHresult             |
|   11  |   DLL failed signature check                                                                  |
|   12  |   Unused                                                                                      |
|   13  |   DLL did not have IDENTITY LIMITEDACCESSFEATURE resource                                     |


### StartupFailureHresult
`HKCU\Software\Microsoft\Internet Explorer\EdgeIntegration\StartupFailureHresult`

Contains a DWORD that is the failing HRESULT from the StartupFailurePoint if there was one, see above table to
see if a given reason provides one.


