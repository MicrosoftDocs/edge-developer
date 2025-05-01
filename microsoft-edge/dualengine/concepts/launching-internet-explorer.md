---
title: Launching Internet Explorer
description: Launching Internet Explorer for DualEngine API Use
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: windows-integration
ms.localizationpriority: high
ms.date: 11/06/2023
---
# Launching Internet Explorer

After you've built your adapter DLL, you must launch Internet Explorer such that it is aware that it is being used for the DualEngine API, as follows.


<!-- ====================================================================== -->
## Required command-line arguments

The following command-line arguments must be present in order to launch Internet Explorer in the correct way to use the DualEngine API.


<!-- ------------------------------ -->
#### DualEngineAdapter

`-DualEngineAdapter=<full-path-to-adapter-dll>`

Indicates the path to the DualEngine API adapter DLL to load.  For information on how to write an adapter DLL, see [Creating a DualEngine adapter plugin DLL](adapter-dll.md).


<!-- ------------------------------ -->
#### DualEnginePipe

`-DualEnginePipe=<pipe-string>`

This argument provides a string that is eventually passed to the adapter DLL via the `DualEngineInitialize` export.  This can be used to pass a pipe name to your adapter code in order to bootstrap communication between your adapter and main application.  Although `DualEnginePipe` is a required command-line parameter, it's only used if it's passed to your code through `DualEngineInitialize`.  Therefore, despite its name, this need not be a pipe name; it can be any arbitrary string that you require.


<!-- ------------------------------ -->
#### APPID

`APPID:<your-app-id>`

This argument provides the Application User Model ID of your application.  This ID is used to associate the Internet Explorer process with your application, for a number of Windows Shell features.  For more information, see [Application User Model IDs](/windows/win32/shell/appids).


<!-- ====================================================================== -->
## Optional command-line arguments

The following command-line argument is optional, to adjust Internet Explorer's behavior for the Dual Engine API.


<!-- ------------------------------ -->
#### DualEngineVersion

`-DualEngineVersion=<force_version_number>`

Forces Internet Explorer to instantiate DualEngine objects of the provided version, if it can.  This will block the creation of DualEngine objects that don't match the provided version number, even if this version of Internet Explorer supports this version.


<!-- ====================================================================== -->
## Diagnosing launch issues

There are a number of reasons that Internet Explorer may fail when launching.  If this occurs before or while loading your DLL, it can be difficult to determine the exact reason and communicate it back to your application.  Therefore, if Internet Explorer fails to launch while launching it for DualEngine use, get detailed error handling information by checking the `StartupFailurePoint` registry value.


<!-- ------------------------------ -->
#### StartupFailurePoint

`HKCU\SOFTWARE\Microsoft\Internet Explorer\EdgeIntegration\StartupFailurePoint`

Contains a DWORD that indicates the location of the failure in the DualEngine startup path.

The DWORD maps to the following reasons:

| DWORD | Reason                                                                                              |
|:-----:|-----------------------------------------------------------------------------------------------------|
|   0   | No failure.                                                                                         |
|   1   | Unused.                                                                                             |
|   2   | Unused.                                                                                             |
|   3   | The version specified by the `DualEngineVersion` argument was 0.                                    |
|   4   | Failed to canonicalize the path passed in via `DualEngineAdapter`; see the `StartupFailureHresult`. |
|   5   | Unused.                                                                                             |
|   6   | Unused.                                                                                             |
|   7   | `LoadLibrary` failed for the provided adapter DLL; see the `StartupFailureHresult`.                 |
|   8   | Could not find `DualEngineInitialize` in the adapter DLL.                                           |
|   9   | The call to `DualEngineInitialize` failed; see the `StartupFailureHresult`.                         |
|   10  | Failed to set the provided Application User Model ID; see the `StartupFailureHresult`.              |
|   11  | DLL failed signature check.                                                                         |
|   12  | Unused.                                                                                             |
|   13  | DLL did not have IDENTITY LIMITEDACCESSFEATURE resource.                                            |


<!-- ------------------------------ -->
#### StartupFailureHresult

`HKCU\Software\Microsoft\Internet Explorer\EdgeIntegration\StartupFailureHresult`

Contains a DWORD that's the failing HRESULT from the `StartupFailurePoint`, if there was a `StartupFailureHresult`.  To see whether a given reason provides a `StartupFailureHresult`, see the above table.
