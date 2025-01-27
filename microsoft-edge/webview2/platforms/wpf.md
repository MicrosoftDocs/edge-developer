---
title: WebView2 in WPF apps
description: WebView2 in WPF apps.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 01/27/2025
---
# WebView2 in WPF apps


<!-- ====================================================================== -->
## Show WPF elements on top of the WebView2 layer (WebView2CompositionControl)

The `WebView2CompositionControl` prevents the WebView2 control from being the topmost layer in a WPF app and obscuring any WPF elements.  `Microsoft.Web.WebView2.Wpf.WebView2CompositionControl` is a drop-in replacement for the standard WPF WebView2 control.  Both the WebView2 control and `WebView2CompositionControl` implement the `Microsoft.Web.WebView2.Wpf.IWebView2` interface.  Both of them derive from `FrameworkElement`, as follows:
* `FrameworkElement` -> `HwndHost` -> `WebView2`.
* `FrameworkElement` -> `Control` -> `WebView2CompositionControl`.

Background: If you're building a Windows Presentation Foundation (WPF) app and using the WebView2 control, you may find that your app runs into "airspace" issues, where the WebView2 control is always displayed on top, hiding any WPF elements in the same location, even if you try to specify the WPF elements to be above the WebView2 control (using visual tree order or the z-index property, for example).

This issue occurs because the WPF control uses the WPF `HwndHost` to host the Win32 WebView2 control, and `HwndHost` has an issue with airspace.

See also:
* [Mitigating Airspace Issues In WPF Applications](https://dwayneneed.github.io/wpf/2013/02/26/mitigating-airspace-issues-in-wpf-applications.html)
* [PR 4804: WPF Airspace - WebView2CompositionControl](https://github.com/MicrosoftEdge/WebView2Feedback/pull/4804/files?short_path=ebbc3ee#diff-ebbc3ee3560606e2823d68c134ea4aebdc1cb1252aaa9aa2b9a2815e2d8d36b2) - Spec.<!-- todo: which url format? -->

##### [.NET/C#](#tab/dotnetcsharp)

* [WebView2CompositionControl Class](/dotnet/api/microsoft.web.webview2.wpf.webview2compositioncontrol)

##### [WinRT/C#](#tab/winrtcsharp)

n/a

##### [Win32/C++](#tab/win32cpp)

n/a

---


<!-- ====================================================================== -->
## See also
<!-- all links in article -->

* [WebView2CompositionControl Class](/dotnet/api/microsoft.web.webview2.wpf.webview2compositioncontrol)

<!-- todo: which url format? -->
* [PR 4804: WPF Airspace - WebView2CompositionControl](https://github.com/MicrosoftEdge/WebView2Feedback/pull/4804/files?short_path=ebbc3ee#diff-ebbc3ee3560606e2823d68c134ea4aebdc1cb1252aaa9aa2b9a2815e2d8d36b2) - Spec.<!-- rendered, commit-specific -->
<!-- not rendered
* [PR 4804: WPF Airspace - WebView2CompositionControl](https://github.com/MicrosoftEdge/WebView2Feedback/pull/4804/files) - Spec.
-->
<!-- rendered
* [PR 4804: WPF Airspace - WebView2CompositionControl](https://github.com/MicrosoftEdge/WebView2Feedback/blob/wpf-webview2compositioncontrol/specs/WPF_WebView2CompositionControl.md) - Spec. -->

* [Mitigating Airspace Issues In WPF Applications](https://dwayneneed.github.io/wpf/2013/02/26/mitigating-airspace-issues-in-wpf-applications.html)
