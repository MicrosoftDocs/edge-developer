---
title: What's new in DevTools (Microsoft Edge 84)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/20/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
<!-- Copyright Kayce Basques 

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->  

# What's New In DevTools (Microsoft Edge 84)  

## Announcements from the Microsoft Edge DevTools team  

The following sections are a list of announcements you may have missed from the Microsoft Edge DevTools team! Check them out to try new features in the DevTools, VS Code extensions, and more.  To stay up to date on all the latest and greatest features in your developer tools, download the [Microsoft Edge preview channels][MicrosoftEdgePreviewChannels] and [follow us on Twitter][EdgeDevToolsTwitterAccount].  

### Use the DevTools in Windows high contrast mode

The Microsoft Edge DevTools are now displayed in high contrast mode when Windows is in high contrast mode. 

:::image type="complex" source="../../media/2020/05/high-contrast.msft.png" alt-text="The Microsoft Edge DevTools in high contrast mode" lightbox="../../media/2020/05/high-contrast.msft.png":::
   The Microsoft Edge DevTools in high contrast mode  
:::image-end:::  

[Follow these instructions to turn high contrast mode on in Windows][WindowsSupportHC]. Open the DevTools in Microsoft Edge by pressing `F12` or `Ctrl`+`Shift`+`I` (`Command`+`Option`+`I` on macOS) and the DevTools will be displayed in high contrast mode.

Chromium issue [#1048378][CR1048378]  

### Match keyboard shortcuts in the DevTools to VS Code

From your [feedback](#feedback) and [Chromium's public issue tracker][Crbug], the Microsoft Edge DevTools team learned that you wanted the ability to customize keyboard shortcuts in the DevTools. In Microsoft Edge 84, you are now able to match keyboard shortcuts in the DevTools to [VS Code][VSCode], which is just one of the features the team is working on for shortcut customization.

:::image type="complex" source="../../media/2020/05/keyboard-shortcut.msft.png" alt-text="Match keyboard shortcuts in the DevTools to VS Code" lightbox="../../media/2020/05/keyboard-shortcut.msft.png":::
   The Microsoft Edge DevTools in high contrast mode  
:::image-end::: 

To try this experiment, open DevTools Settings by pressing `?` or clicking the 

:::image type="icon" border="false" source="https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/media/settings-icon.msft.png":::

icon in the top-right corner of the DevTools. Navigate to the **Experiments** section and check **Enable custom keyboard shortcuts settings tab (requires reload)**. Now reload the DevTools, open Settings again, and navigate to the **Shortcuts** section.

Click **DevTools (Default)** in the **Match shortcuts from preset** dropdown and select **Visual Studio Code**. The keyboard shortcuts in the DevTools now match the shortcuts for equivalent actions in VS Code.

For example, the keyboard shortcut for pausing or continuing script execution in [VS Code][VSCodeShortcuts] is `F5`. With the **DevTools (Default)** preset, that same shortcut in the DevTools is `F8` but with the **Visual Studio Code** preset, that shortcut is now also `F5`.

This feature is currently available in Microsoft Edge 84 as an experiment so please share your [feedback](#feedback) with the team!

Chromium issue [#174309][CR174309]  

### Remote debug Surface Duo emulators

You are now able to remotely debug your web content running in the [Surface Duo emulator][DuoEmulator] using the full power of the [Microsoft Edge DevTools][DevToolsChromiumGuide]. 

With the [Surface Duo emulator][DuoEmulator], you can test how your web content will render on a new class of foldable and dual-screen devices. The emulator runs the Android operating system and provides the [Microsoft Edge Android app][AndroidEdge]. You can load your web content in the [Microsoft Edge app][AndroidEdge] and debug it with the [Microsoft Edge DevTools][DevToolsChromiumGuide].

:::image type="complex" source="../../media/2020/05/surface-duo-emulator.msft.png" alt-text="The Microsoft Edge app running on the Surface Duo emulator" lightbox="../../media/2020/05/surface-duo-emulator.msft.png":::
   The Microsoft Edge app on the Surface Duo emulator  
:::image-end::: 

The `edge://inspect` page in a desktop instance of [Microsoft Edge][DesktopEdge] shows the **SurfaceDuoEmulator** with a list of the open tabs or [PWAs][PwaDocs] that are running on the [Surface Duo emulator][DuoEmulator].

:::image type="complex" source="../../media/2020/05/edge-inspect.msft.png" alt-text="The edge://inspect page displays a list of the open tabs in the Microsoft Edge app running on the emulator" lightbox="../../media/2020/05/edge-inspect.msft.png":::
   The edge://inspect page displays a list of the open tabs in the Microsoft Edge app running on the emulator
:::image-end::: 

Clicking **inspect** for the tab or PWA that you want to debug will open the [Microsoft Edge DevTools][DevToolsChromiumGuide]. [Follow our step-by-step guide to remotely debug your web content on the Surface Duo emulator.][DevToolsRemoteDebugDuoEmulator]

### Resize the DevTools Drawer more easily

In Microsoft Edge 83 and earlier, you were only able to resize the [DevTools Drawer][DevToolsDrawer] by hovering on the Drawer itself. The Drawer behaved differently than the other resize controls for panes in the DevTools where you hover over the border of the pane to resize it.

:::image type="complex" source="../../media/2020/05/drawer-83.msft.gif" alt-text="GIF of resizing the DevTools Drawer in Microsoft Edge 83" lightbox="../../media/2020/05/drawer-83.msft.gif":::
   Resizing the DevTools Drawer in Microsoft Edge 83
:::image-end::: 

Starting with Microsoft Edge 84, you are now able to resize the Drawer by hovering over the border of the Drawer itself. This change aligns the behavior resizing the DevTools Drawer with the way you resize other panes in the DevTools.

:::image type="complex" source="../../media/2020/05/drawer-84.msft.gif" alt-text="GIF of resizing the DevTools Drawer in Microsoft Edge 84" lightbox="../../media/2020/05/drawer-84.msft.gif":::
   Resizing the DevTools Drawer in Microsoft Edge 84
:::image-end::: 

Chromium issue [#1076112][CR1076112]  

### Screencasting navigation buttons display focus

When remote debugging an [Android device][DevToolsRemoteDebugAndroid], a [Windows 10 device][DevToolsRemoteDebugWindows], or a [Surface Duo emulator][DevToolsRemoteDebugDuoEmulator], you are able to toggle sceencasting with the  

:::image type="icon" border="false" source="https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/remote-debugging/images/toggle-screencast-icon.msft.png":::

icon in the top-left corner of the DevTools. With screencasting enabled, you are able to navigate the tab in Microsoft Edge on the remote device from the DevTools window itself. In Microsoft Edge 84, these navigation buttons are now also keyboard accessible.

:::image type="complex" source="../../media/2020/05/screencasting-nav.msft.png" alt-text="Pressing Shift+Tab from the screencasted URL bar shows focus on the Refresh button" lightbox="../../media/2020/05/screencasting-nav.msft.png":::
   Pressing `Shift`+`Tab` from the screencasted URL bar shows focus on the **Refresh** button
:::image-end::: 

Chromium issue [#1081486][CR1081486]  

### Network panel Details pane takes focus

In Microsoft Edge 84, the [Details pane][DevToolsNetworkDetails] in the Network panel now takes focus when you open it for a resource in the [Network Log][DevToolsNetworkLog]. This change allows screen readers to read out and interact with the content of the Details pane.

:::image type="complex" source="../../media/2020/05/network-details.msft.png" alt-text="The Details pnae in the Network panel takes focus when opened" lightbox="../../media/2020/05/network-details.msft.png":::
   The Details pnae in the Network panel takes focus when opened
:::image-end::: 

Chromium issue [#963183][CR963183]  

## Announcements from the Chromium project  

The following sections announce additional features available in Microsoft Edge 84 that were contributed to the open source Chromium project. 

### Fix site issues with the new Issues Drawer tab  

The new **Issues** Drawer tab was built to help reduce the notification fatigue and clutter of the **Console**.  Currently, the **Console** is the central place for website developers, libraries, frameworks, and Microsoft Edge to log messages, warnings, and errors.  The **Issues** Drawer tab aggregates warnings from the browser in a structured, aggregated, and actionable way, links to affected resources within Microsoft Edge DevTools, and provides guidance on how to fix the issues.  Over time, more and more warnings in Microsoft Edge will be surfaced in the **Issues** Drawer tab rather than the **Console**, which should help reduce the clutter in the **Console**.  

<!--To get started, see [Find And Fix Problems With The Microsoft Edge DevTools Issues Tab][DevtoolsIssuesIndex].  -->  
<!--todo:  add when section is live  -->  

:::image type="complex" source="../../media/2020/05/issues.msft.png" alt-text="The Issues Drawer tab" lightbox="../../media/2020/05/issues.msft.png":::
   The **Issues** Drawer tab  
:::image-end:::  

Chromium issue [#1068116][CR1068116]  

### View accessibility information in the Inspect Mode tooltip  

The **Inspect Mode** tooltip now indicates whether the element has an accessible
[name and role][webhintLabelsText] and is [keyboard-focusable][webhintControlFocus].  

<!--todo:  add link inspect mode tooltip (WebdevCls) when section is live  -->  
<!--todo:  add link name and role (WebdevLabelsText) when section is live  -->  
<!--todo:  add link keyboard-focusable (WebdevControlFocus) when section is live  -->  

:::image type="complex" source="../../media/2020/05/a11y.msft.png" alt-text="The Inspect Mode tooltip with accessibility information" lightbox="../../media/2020/05/a11y.msft.png":::
  The **Inspect Mode** tooltip with accessibility information  
:::image-end:::  

Chromium issue [#1040025][CR1040025]  

### Performance panel updates  

#### View Total Blocking Time information in the footer  

After recording your load performance, the **Performance** panel now shows Total Blocking Time \(TBT\) information in the footer.  TBT is a load performance metric that helps quantify how long a page takes to become usable.  It essentially measures how long a page appears to be usable \(because the content is rendered to the screen\); but is not actually usable, because JavaScript is blocking the main thread and therefore the page does not respond to user input.  TBT is the main metric for approximating First Input Delay.

<!--todo:  add link Total Blocking Time (TBT) (WebdevTbt) when section is live  -->  
<!--todo:  add link lab metric (WebdevMeasureSpeedLabField) when section is live  -->  
<!--todo:  add link Core Web Vitals (WebdevCoreWebVitals) when section is live  -->  

To get Total Blocking Time information, do not use the **Refresh Page** workflow for recording page load performance.  

:::image type="icon" border="false" source="https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/media/refresh-page-icon.msft.png":::

Instead, select **Record**, manually reload the page, wait for the page to load, and then stop recording.  

:::image type="icon" border="false" source="https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/media/record-icon.msft.png":::

If you see `Total Blocking Time: Unavailable`, Microsoft Edge DevTools did not get the required information from the internal profiling data in Microsoft Edge.  

:::image type="complex" source="../../media/2020/05/tbt.msft.png" alt-text="Total Blocking Time information in the footer of a Performance panel recording" lightbox="../../media/2020/05/tbt.msft.png":::
   Total Blocking Time information in the footer of a **Performance** panel recording  
:::image-end:::  

Chromium issue [#1054381][CR1054381]  

#### Layout Shift events in the new Experience section  

The new **Experience** section of the **Performance** panel helps you detect layout shifts.  Cumulative Layout Shift \(CLS\) is a metric that helps you quantify unwanted visual instability.

<!--todo:  add link Core Web Vitals (WebdevCoreWebVitals) when section is live  -->  
<!--todo:  add link layout shifts (WebdevCls) when section is live  -->  

Select the **Layout Shift** event to see the details of the layout shift in the **Summary** pane.  Hover over the **Moved from** and **Moved to** fields to visualize where the layout shift occurred.  

:::image type="complex" source="../../media/2020/05/cls.msft.png" alt-text="The details of a layout shift" lightbox="../../media/2020/05/cls.msft.png":::
   The details of a layout shift  
:::image-end:::  

### More accurate promise terminology in the Console  

When logging a `Promise`, the **Console** incorrectly provided `PromiseStatus` value set to `resolved`.  

:::image type="complex" source="../../media/2020/05/resolved.msft.png" alt-text="An example of the Console using the old resolved terminology" lightbox="../../media/2020/05/resolved.msft.png":::
   An example of the **Console** using the old `resolved` terminology  
:::image-end:::  

The **Console** now uses the term `fulfilled`, which aligns with the `Promise` specification.  For more information about the `Promise` specification, see [States and Fates on GitHub](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md).  

:::image type="complex" source="../../media/2020/05/fulfilled.msft.png" alt-text="An example of the Console using the new fulfilled terminology" lightbox="../../media/2020/05/fulfilled.msft.png":::
  An example of the **Console** using the new `fulfilled` terminology  
:::image-end:::  

V8 issue [#6751][CRV86751]  

### Styles pane updates  

#### Support for the revert keyword  

The autocomplete UI of the **Styles** pane now detects the [revert][MDNRevert] CSS keyword, which reverts the cascaded value of a property to the previous value applied to the styling of the element.  

:::image type="complex" source="../../media/2020/05/revert.msft.png" alt-text="Setting the value of a property to revert" lightbox="../../media/2020/05/revert.msft.png":::
  Setting the value of a property to revert  
:::image-end:::  

Chromium issue [#1075437][CR1075437]  

#### Image previews  

Hover over a `background-image` value in the **Styles** pane to see a preview of the image in a tooltip.  

:::image type="complex" source="../../media/2020/05/image-preview.msft.png" alt-text="Hovering over a background-image value" lightbox="../../media/2020/05/image-preview.msft.png":::
  Hovering over a `background-image` value  
:::image-end:::  

Chromium issue [#1040019][CR1040019]  

#### Color Picker now uses space-separated functional color notation  

[CSS Color Module Level 4][CSSWGDraftsColor4Changes3] specifies that color functions, like `rgb()`, should support space-separated
arguments.  For example, `rgb(0, 0, 0)` is equivalent to `rbg(0 0 0)`.  

When you choose colors with the [Color Picker][DevtoolsCssReferenceColorPicker] or alternate between color representations in the **Styles** pane by holding `Shift` and selecting the `background-color` value, you should see the space-separated argument syntax.  

:::image type="complex" source="../../media/2020/05/color.msft.png" alt-text="Using space-separated arguments in the Styles pane" lightbox="../../media/2020/05/color.msft.png":::
  Using space-separated arguments in the **Styles** pane  
:::image-end:::  

You should also see the syntax in the **Computed** pane and the **Inspect Mode** tooltip.  

Microsoft Edge DevTools is using the new syntax because upcoming CSS features like [color()][CSSWGColor] do not support the deprecated comma-separated argument syntax.  

The space-separated argument syntax has been supported in most browsers for a while.  For more information, see [Can I use: Space-separated functional color notations?][CaniuseMDNSpaceSeparatedFunctionalColorNotations]  

Chromium issue [#1072952][CR1072952]  

### Deprecation of the Properties pane in the Elements panel  

The **Properties** pane in the **Elements** panel is deprecated.  Run `console.dir($0)` in the **Console** instead.  

:::image type="complex" source="../../media/2020/05/properties.msft.png" alt-text="The deprecated Properties pane" lightbox="../../media/2020/05/properties.msft.png":::
  The deprecated **Properties** pane  
:::image-end:::  

#### References  

*   [console.dir()][DevtoolsConsoleApiDir]  
*   [$0][DevtoolsConsoleUtilitiesDom]  



## Feedback   

  

To discuss the new features and changes in this post, or anything else related to DevTools:  

*   Send your feedback using the **Feedback** icon in the DevTools  
*   Tweet at [@EdgeDevTools][PostTweetEdgeDevTools]  
*   Submit a suggestion to [The Web We Want][TheWebWeWant]  
*   File bugs on this document in the [edge-developer][GitHubMicrosoftDocsEdgeDeveloperNewIssue] repository  

:::image type="complex" source="../../media/2020/05/feedback-icon.msft.png" alt-text="The Feedback icon in the Microsoft Edge DevTools" lightbox="../../media/2020/05/feedback-icon.msft.png":::
  The **Feedback** icon in the Microsoft Edge DevTools  
:::image-end:::  

## Download the Microsoft Edge preview channels   

If you are on Windows or macOS, consider using the [Microsoft Edge preview channels][MicrosoftEdgePreviewChannels] as your default development browser.  The preview channels give you access to the latest DevTools features.  

<!-- image links -->  

<!-- links -->  

[DevtoolsConsoleApiDir]: /microsoft-edge/devtools-guide-chromium/console/api#dir "dir - Console API Reference | Microsoft Docs"  
[DevtoolsConsoleUtilitiesDom]: /microsoft-edge/devtools-guide-chromium/console/utilities#recently-selected-element-or-javascript-object "Recently Selected Element Or JavaScript Object - Console Utilities API Reference | Microsoft Docs"  
[DevtoolsCssReferenceColorPicker]: /microsoft-edge/devtools-guide-chromium/css/reference#change-colors-with-the-color-picker "Change colors with the Color Picker - CSS Reference | Microsoft Docs"  
[DevToolsDrawer]: /microsoft-edge/devtools-guide-chromium/customize/index#drawer "Drawer - Customize Overview | Microsoft Docs"
[DevToolsChromiumGuide]: /microsoft-edge/devtools-guide-chromium "Microsoft Edge (Chromium) Developer Tools | Microsoft Docs"
[DevToolsRemoteDebugDuoEmulator]: /microsoft-edge/devtools-guide-chromium/remote-debugging/surface-duo-emulator "Get Started with Remote Debugging Surface Duo emulators | Microsoft Docs"
[DevToolsRemoteDebugAndroid]: /microsoft-edge/devtools-guide-chromium/remote-debugging/index "Get Started with Remote Debugging Android Devices | Microsoft Docs"
[DevToolsRemoteDebugWindows]: /microsoft-edge/devtools-guide-chromium/remote-debugging/windows "Get Started with Remote Debugging Windows 10 Devices | Microsoft Docs"
[DevToolsNetworkLog]: /microsoft-edge/devtools-guide-chromium/network/index#log-network-activity "Log network activity | Microsoft Docs"
[DevToolsNetworkDetails]: /microsoft-edge/devtools-guide-chromium/network/index#inspect-the-details-of-the-resource "Inspect the details of the resource | Microsoft Docs"
[PwaDocs]: /microsoft-edge/progressive-web-apps-chromium/index "Progressive Web Apps on Windows  | Microsoft Docs"
<!--[DevtoolsIssuesIndex]: /microsoft-edge/devtools-guide-chromium/issues/index "Find And Fix Problems With The Microsoft Edge DevTools Issues Tab | Microsoft Docs"  -->  
<!--[DevtoolsWhatsNew201901Inspect]: /microsoft-edge/devtools-guide-chromium/whats-new/2019/01/devtools#inspect "Detailed tooltips in Inspect Mode - What's New In DevTools (Edge 73) | Microsoft Docs"  -->  
[AndroidEdge]: https://play.google.com/store/apps/details?id=com.microsoft.emmx "Microsoft Edge Android app"

[CaniuseMDNSpaceSeparatedFunctionalColorNotations]: https://caniuse.com/#feat=mdn-css_types_color_space_separated_functional_notation "Space-separated functional color notations - MDN | Can I Use"  

[Crbug]: https://bugs.chromium.org/p/chromium/issues/list "Chromium bugs"

[CR1040019]: https://crbug.com/1040019 "DevTools: easily preview images and background images in Styles pane | Chromium bugs"  
[CR1040025]: https://crbug.com/1040025 "DevTools: show basic a11y info in element popover | Chromium bugs"  
[CR1054381]: https://crbug.com/1054381 "CR 1054381 | Chromium bugs"  
[CR1068116]: https://crbug.com/1068116 "Ship issues panel | Chromium bugs"  
[CR1072952]: https://crbug.com/1072952 "DevTools: color picker should produce modern CSS color syntax | Chromium bugs"  
[CR1075437]: https://crbug.com/1075437 "DevTools: add support for the CSS `revert` keyword/value | Chromium bugs"  
[CRV86751]: https://bugs.chromium.org/p/v8/issues/detail?id=6751 "PromiseStatus should be 'fulfilled', not 'resolved' | V8 bugs"  
[CR1048378]: https://crbug.com/1048378 "Issue 1048378: DevTools UI support for High Contrast mode | Chromium bugs"
[CR174309]: https://crbug.com/174309 "Issue 174309: DevTools: Allow to customize keyboard shortcuts/key bindings | Chromium bugs"
[CR1076112]: https://crbug.com/1076112 "Issue 1076112: Devtools personalization - drawer resizer"
[CR1081486]: https://crbug.com/1081486 "Issue 1081486: Keyboard focus not visible for navigation buttons in screencast mode | Chromium bugs"
[CR963183]: https://crbug.com/963183 "Issue 963183: DevTools are not WCAG compliant | Chromium bugs"

[CSSWGDraftsColor4Changes3]: https://drafts.csswg.org/css-color#changes-from-3 "Changes from Colors 3 - CSS Color Module Level 4 | W3C CSS Working Group Editor Drafts"  
[CSSWGColor]: https://drafts.csswg.org/css-color/#the-color-property "3. Foreground Color: the 'color' property"

[DesktopEdge]: https://www.microsoft.com/edge/ "Introducing the new Microsoft Edge"
[DuoEmulator]: https://docs.microsoft.com/dual-screen/android/use-emulator "Use the Surface Duo emulator"

[GithubDomenicPromiseUnwrappingStatesFates]: https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md "States and Fates - domenic/promises-unwrapping | GitHub"  

[MDNRevert]: https://developer.mozilla.org/docs/Web/CSS/revert "revert | MDN"  
[MDNRevertBrowserCompatibility]: https://developer.mozilla.org/docs/Web/CSS/revert#Browser_compatibility "Browser compatibility | MDN"  

[VSCode]: https://code.visualstudio.com/ "Visual Studio Code"
[VSCodeShortcuts]: https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf "Visual Studio Code Keyboard shortcuts for Windows"

[webhintLabelsText]: https://webhint.io/docs/user-guide/hints/hint-axe/name-role-value/ "Axe: Name Role Value"
[webhintControlFocus]: https://webhint.io/docs/user-guide/hints/hint-axe/keyboard/ "Axe: Keyboard"

[WindowsSupportHC]: https://support.microsoft.com/en-us/help/4026951/windows-10-turn-high-contrast-mode-on-or-off "Turn high contrast mode on or off in Windows | Windows support"

[PostTweetEdgeDevTools]: https://aka.ms/tweet/edgedevtools "@EdgeDevTools | Post a Tweet"  
[EdgeDevToolsTwitterAccount]: https://aka.ms/twitter/edgedevtools "@EdgeDevTools Twitter account"  
[GitHubMicrosoftDocsEdgeDeveloperNewIssue]: https://aka.ms/edgedevtoolsdocs/feedback "New Issue - MicrosoftDocs/edge-developer"  
[MicrosoftEdgePreviewChannels]: https://aka.ms/microsoftedge "Microsoft Edge Preview Channels"  
[TheWebWeWant]: https://aka.ms/webwewant "The Web We Want"  

<!--[WebdevCls]: https://alphabet-dev/cls "Cumulative Layout Shift (CLS) | alphabet-dev"  -->  
<!--[WebdevControlFocus]: https://alphabet-dev/control-focus-with-tabindex "Control focus with tabindex | alphabet-dev"  -->  
<!--[WebdevMeasureSpeedLabField]: https://alphabet-dev/how-to-measure-speed#lab-data-vs-field-data "Lab data vs Field data - How to measure speed? | alphabet-dev"  -->  
<!--[WebdevLabelsText]: https://alphabet-dev/labels-and-text-alternatives "Labels and text alternatives | alphabet-dev"  -->  
<!--[WebdevTbt]: https://alphabet-dev/tbt "Total Blocking Time (TBT) | alphabet-dev"  -->  
<!--[WebdevCoreWebVitals]: https://alphabet-dev/vitals#core-web-vitals "Core Web Vitals | alphabet-dev"  -->  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/updates/2020/05/devtools/index) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
