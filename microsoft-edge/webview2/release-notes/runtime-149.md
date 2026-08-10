---
title: Runtime 149 (Jun. 11, 2026)
description: Release notes for Microsoft Edge WebView2 Runtime 149.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 06/11/2026
---
# Runtime 149 (Jun. 11, 2026)

Release Date: Jun. 11, 2026

This release includes the changes listed in [Prerelease Runtime 149 (May 11, 2026)](./runtime-149-prerelease.md).


<!-- ====================================================================== -->
## Bug fixes

* Mapped `TERMINATION_STATUS_LAUNCH_FAILED_OS_POLICY` to `kLaunchFailed`.

* Updated the failure reason classification to `OOM`, for a process that's been killed to reclaim memory.

* Added trusted origin check during host object access.

* Fixed the **Print** dialog's dropdown lists not being selected in `WebView2CompositionControl`.  ([Issue #5195](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5195))


<!-- ====================================================================== -->
## See also

* [Release notes for the WebView2 SDK](./index.md)
