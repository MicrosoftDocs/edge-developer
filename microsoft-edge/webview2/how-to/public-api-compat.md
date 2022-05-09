---
title: WebView2 Experimental to Public API compatibility
description: 
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 05/09/2022
---
# WebView2 Experimental to Public API compatibility

<!-- todo: update existing documentation:
expand section
https://review.docs.microsoft.com/en-us/microsoft-edge/webview2/concepts/versioning?branch=user%2Fv-mhoffman%2Fpublic-api-compat#experimental-apis
-->

This feature helps transition from experimental WebView2 APIs to the corresponding public WebView2 APIs.

When introducing the public version of an API, the experimental API continues to exist in a deprecated form.  You can keep using the experimental API without interruption.  When moving to public APIs, your app can still use the WebView2 Runtime version that supported the experimental APIs, so you can move to the public API without changing your minimum required WebView2 Runtime version.

This policy changes the implementation of the WebView2 APIs and Runtime so that the experimental APIs can still be used after the public APIs are introduced, and for the public API to fall back to the experimental implementation, if the Runtime is older and doesn't support the public API.

This is a WebView2 SDK/Runtime feature.

There's not a code sample to demonstrate this feature.
<!-- We can create a code sample to demonstrate this feature. -->


<!-- ====================================================================== -->
<!-- ## See also

* []()
* []() -->
