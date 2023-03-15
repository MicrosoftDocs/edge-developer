---
title: What's new in DevTools (Microsoft Edge 111)
description: "Remote debugging of Microsoft Edge, PWAs, and WebView2 controls on Xbox and HoloLens devices. Device Mode toolbar has emulation controls for themes and vision deficiencies. Performance tool unminifies file and function names while profiling. Styles tab easier to use in Focus Mode. Copy Selector Stats table from Performance tool. In Focus Mode, assistive tech announces tool moved to Quick View. And more."
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 03/15/2023
---
# What's New in DevTools (Microsoft Edge 111)

[!INCLUDE [Microsoft Edge team note for top of What's New](../../includes/edge-whats-new-note.md)]


<!-- ====================================================================== -->
## Remote debugging of Microsoft Edge, PWAs, and WebView2 controls on Xbox and HoloLens devices

<!-- Subtitle: Get the Remote Tools for Microsoft Edge app from the Microsoft Store to set up remote debugging today! -->

The **Remote Tools for Microsoft Edge** app is a plug-in for the **Windows Device Portal for Desktop** that enables remote debugging for tabs in Microsoft Edge, Progressive Web Apps (PWAs), and WebView2 controls.  By using remote debugging, you can run web content on a remote device and debug it right from your development machine.  In Microsoft Edge 111, the **Remote Tools for Microsoft Edge** app is now available on Xbox and HoloLens devices.

![The Remote Tools for Microsoft Edge app in the Microsoft Store](./devtools-111-images/remote-tools-in-the-microsoft-store.png)

With remote debugging enabled, you don't need to open DevTools on either HoloLens or Xbox devices any more.  Instead, you can connect to the remote Xbox or HoloLens device via Device portal and the `edge://inspect` page, and then select whichever **target:** tab, PWA, or WebView2 control you want to launch DevTools against.

To give us feedback on the remote debugging flow for Microsoft Edge, leave a comment in [Issue 136: Remote debugging Xbox and HoloLens devices is now available with the latest version of the Remote Tools for Microsoft Edge app](https://github.com/MicrosoftEdge/DevTools/issues/136).

See also:
* [Remotely debug Windows devices](../../../remote-debugging/windows.md)
* [Windows Device Portal for Desktop](/windows/uwp/debug-test-perf/device-portal-desktop)


<!-- ====================================================================== -->
## Device Mode toolbar has emulation controls for themes and vision deficiencies

<!-- Subtitle: Use the new Eyedropper and Eye icons from the Device Mode toolbar to test how your web content responds to light, dark, and high contrast themes and vision deficiencies like color blindness. -->

In previous versions of Microsoft Edge, to emulate different themes or vision deficiencies, you would use the **Rendering** tool -- for example, to emulate Achromatopsia, which is when the user is unable to perceive any color, which reduces all color to a shade of grey.

In Microsoft Edge 112, you can now access these themes and vision deficiencies emulation controls directly from the **Device Mode** toolbar, in addition to the **Rendering** tool.

For example, to emulate high contrast mode and test how your web content responds, you can now select the Eyedropper<!--todo: tooltip name & icon screenshot--> icon next to the **No throttling** dropdown in the **Device Mode** toolbar, and then select `forced-colors: active`:

![Emulating high contrast mode directly from the Device Mode toolbar](./devtools-111-images/new-emulation-options-hc-mode.png)

You can also emulate vision deficiencies by clicking the Eye icon next to the Eyedropper icon.  For example, to emulate blurred vision, click the Eye<!--todo: tooltip name & icon screenshot--> icon and then select the `Blurred vision` entry:

![Emulating blurred vision directly from the Device Mode toolbar](./devtools-111-images/new-emulation-options-blurred-vision.png)

See also:
* [Emulate mobile devices (Device Emulation)](../../../device-mode/index.md)
* [Check for contrast issues with dark theme and light theme](../../../accessibility/test-dark-mode.md)
* [Emulate vision deficiencies](../../../accessibility/emulate-vision-deficiencies.md)


<!-- ====================================================================== -->
## Performance tool unminifies file and function names when profiling production code

<!-- Subtitle: As long as the Performance tool can find sourcemaps from Symbol Server, the Performance tool automatically presents the original file and function names in the flame chart. -->

Microsoft Edge 99 added a new feature to the **Performance** tool called **Unminify**.  This **Unminify** feature applied sourcemaps to a profile that was recorded by using the **Performance** tool, and then downloaded the profile to your machine.  The **Unminify** feature is described in [Use your source maps to display original function names in performance profiles](../../2022/03/devtools.md#use-your-source-maps-to-display-original-function-names-in-performance-profiles) in _What's new in DevTools (Microsoft Edge 99)_.

In Microsoft Edge 111, this feature has been removed, because the **Performance** tool now automatically provides the original file and function names while profiling production code, as long as sourcemaps are hosted on Azure Artifacts Symbol Server.

![template 3](./devtools-111-images/template.png)
<!-- @Zoher, to-do find image that shows value prop -->

See also:
* [Securely debug original code by publishing source maps to the Azure Artifacts symbol server](../../../javascript/publish-source-maps-to-azure.md)
* [Securely debug original code by using Azure Artifacts symbol server source maps](../../../javascript/consume-source-maps-from-azure.md)
* [Record performance](../../../evaluate-performance/reference.md#record-performance) in _Performance features reference_.


<!-- ====================================================================== -->
## Styles tab easier to use in Focus Mode

<!-- Subtitle: In previous versions of Microsoft Edge, the Styles pane of the Elements tool didn't provide easy access to all of the sections within it. This issue has now been fixed in Microsoft Edge 111. -->

In previous versions of Microsoft Edge, in **Focus Mode**, the **Elements** tool did not provide any easy way to access all of the sections within the **Styles** pane.  In Microsoft Edge 111, this issue has been fixed.  When the **Styles** pane has a narrow viewport and can't display all of its sections, select the **Expand** (&or;)<!-- todo: replace by icon --> icon.

![The collapsed menu of the Styles pane in Focus Mode](./devtools-111-images/collapsed-menu-for-styles-pane.png)

To collapse the menu and only see a few of the sections in the **Styles** pane, select the **Collapse** (&and;)<!-- todo: replace by icon --> icon.

![The expanded menu of the Styles pane in Focus Mode](./devtools-111-images/expanded-menu-for-styles-pane.png)

See also:
* [CSS features reference](../../../css/reference.md)
* [Simplify DevTools using Focus Mode](../../../experimental-features/focus-mode.md)


<!-- ====================================================================== -->
## Copy Selector Stats table from Performance tool to Excel

<!-- Subtitle: In Microsoft Edge 111, you can copy and paste Selector Stats data from the Performance tool for aggregate selector performance analysis. -->

In [Microsoft Edge 109](../../2023/01/devtools-109.mdmd#debug-long-running-recalculate-style-events-with-new-selector-stats), we introduced a feature to the **Performance** tool called **Selector Stats**.  With the **Enable advanced rendering instrumentation (slow)** setting turned on in the **Performance** tool, selecting any **Recalculate Styles** event from the flame chart will produce a new tab of **Selector Stats** in the bottom pane.

In Microsoft Edge 111, you can now export this **Selector Stats** table for each **Recalculate Styles** event to an Excel workbook.  Then you can use an Excel workbook to do aggregate selector performance analysis, and identify the costliest selectors over the lifetime of the profile.  To export the **Selector Stats** table, select the entire **Selector Stats** table, copy it, and then paste it into an Excel workbook:

![Selecting the entire Selector Stats table for copy-paste](./devtools-111-images/export-selector-stats-table.png)

See also:
* [Analyze selector performance during Recalculate Style events](../../../evaluate-performance/selector-stats.md)


<!-- ====================================================================== -->
## In Focus Mode, assistive technology announces when tool moved to Quick View

In previous versions of Microsoft Edge, assistive technology, such as screen readers, didn't announce confirmation when moving a tool from the Activity Bar to Quick View.  In Microsoft Edge 111, this issue has been fixed.  Screen readers now announce "Successfully added Network to Quick View" when you move the **Network** tool from the Activity Bar to Quick View:

![Moving the Network tool from the Activity Bar to Quick View](./devtools-111-images/move-network-tool-to-quickview.png)

See also:
* [Simplify DevTools using Focus Mode](../../../experimental-features/focus-mode.md)
* [Navigate DevTools with assistive technology](../../../accessibility/navigation.md)


<!-- ====================================================================== -->
## Announcements from the Chromium project

Microsoft Edge 111 also includes the following updates from the Chromium project:

* [Debugging HD color with the Styles pane](https://developer.chrome.com/blog/new-in-devtools-111/#color)
* [Enhanced breakpoint UX](https://developer.chrome.com/blog/new-in-devtools-111/#breakpoint-redesign)
* [Better syntax highlight for Angular](https://developer.chrome.com/blog/new-in-devtools-111/#syntax)
* [Reorganize caches in the Application panel](https://developer.chrome.com/blog/new-in-devtools-111/#cache)


<!-- ====================================================================== -->
<!-- uncomment if content is copied from developer.chrome.com to this page -->

<!-- > [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page for announcements from the Chromium project is [What's New in DevTools (Chrome 111)](https://developer.chrome.com/blog/new-in-devtools-111) and is authored by [Jecelyn Yeen](https://developers.google.com/web/resources/contributors#jecelynyeen) (Developer advocate working on Chrome DevTools at Google). -->


<!-- ====================================================================== -->
<!-- uncomment if content is copied from developer.chrome.com to this page -->

<!-- [![Creative Commons License](../../../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0). -->
