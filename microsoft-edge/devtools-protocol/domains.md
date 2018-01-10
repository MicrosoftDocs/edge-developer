---
description: List of references for supported domains in Microsoft Edge DevTools.
title: Domains - Microsoft Edge DevTools
author: pelavall
ms.author: pelavall
ms.date: 12/15/2017
ms.topic: reference
ms.prod: microsoft-edge
---
# Edge DevTools Protocol (v1.2) Domains
## [Schema](schema.md)
Provides information about the protocol schema.
## [Page](page.md)
Actions and events related to the inspected page belong to the page domain.
## [Runtime](runtime.md)
Runtime domain exposes JavaScript runtime by means of remote evaluation and mirror objects. Evaluation results are returned as mirror object that expose object type, string representation and unique identifier that can be used for further object reference. Original objects are maintained in memory unless they are either explicitly released.
## [Debugger](debugger.md)
Debugger domain exposes JavaScript debugging capabilities. It allows setting and removing breakpoints, stepping through execution, exploring stack traces, etc.