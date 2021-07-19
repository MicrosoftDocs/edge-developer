---
description: Microsoft Edge on Linux, improved webhint tips in the Issues tool, new service worker debugging features, and more.
title: What's new in DevTools (Microsoft Edge 88)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/04/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
ms.localizationpriority: high
---
<!-- Copyright Jecelyn Yeen 

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->  
# What's New in DevTools (Microsoft Edge 88)  

[!INCLUDE [contact DevTools team note](../../includes/edge-whats-new-note.md)]  

## Microsoft Edge and Microsoft Edge Driver now available on Linux  

<!-- Title: Microsoft Edge and Microsoft Edge Driver on Linux  -->  
<!-- Subtitle: Get Microsoft Edge Dev on Ubuntu, Debian, Fedora, and openSUSE distributions and start automating in CI/CD environments with Microsoft Edge Driver. -->  

Microsoft Edge Dev is now supported on Ubuntu, Debian, Fedora, and openSUSE distributions.  Download and install the Microsoft Edge Dev `.deb` or `.rpm` package directly from the [Microsoft Edge Insider site][MicrosoftinsiderDownloadPlatformLinux] or use the standard package management tools of your Linux distribution.  

If you are using a Linux environment in your continuous integration and delivery \(CI/CD\) solutions, Microsoft Edge Driver is also available on Linux.  To get started automating Microsoft Edge Dev with Microsoft Edge Driver, navigate to [Microsoft Edge Driver Downloads page][MicrosoftDeveloperMicrosoftEdgeToolsWebdriverDownloads].  For help with automating Microsoft Edge Dev along with Microsoft Edge Driver, navigate to [Use WebDriver (Chromium) for test automation][WebdriverChromiumMain].  

:::image type="complex" source="../../media/2020/11/edge-on-linux.msft.png" alt-text="DevTools in Microsoft Edge on Linux" lightbox="../../media/2020/11/edge-on-linux.msft.png":::
   DevTools in Microsoft Edge on Linux  
:::image-end:::  

## Improved webhint and platform tips in the Issues tool  

<!-- Title: Improvements to Issues tool and webhint integration  -->  
<!-- Subtitle: Categories and third-party filtering make it easier to survey issues in the Issues tool.  Issues surfaced by webhint now have improved code snippets and documentation links to help you fix problems in your website.  -->  

An open-source tool, [webhint][WebhintMain], provides real-time feedback for websites and local webpages.  Starting with [Microsoft Edge version 85][WhatsNew202006DevtoolsWebhintFeedbackInTheIssuesPanel], review webhint feedback in the [Issues][DevtoolsIssuesIndex] tool.  Issues that appear in the **Issues** tool are now easier to review with the addition of the following categories.  

*   [Accessibility][WebhintUserGuideHintsAccessibility]  
*   [Compatibility][WebhintUserGuideHintsCompatibility]  
*   [Performance][WebhintUserGuideHintsPerformance]  
*   [Pitfalls][WebhintUserGuideHintsPitfalls]  
*   [PWA][WebhintUserGuideHintsPwa]  
*   [Security][WebhintUserGuideHintsSecurity]  
    
You are now able to filter out third-party issues using a new checkbox.  The filter functionality helps you hide issues related to code from third-party libraries or other sources.  

To help you review issues revealed by [webhint][WebhintMain], the **Issues** tool now displays the following information.  

*   Improved code snippets.  
*   Links to other relevant panels.  
*   Links to documentation to help you fix problems in your website.  
    
:::image type="complex" source="../../media/2020/11/issues-webhints.msft.png" alt-text="Issues tool" lightbox="../../media/2020/11/issues-webhints.msft.png":::
   **Issues** tool  
:::image-end:::  

## Composited Layers are now in 3D View  

<!-- Title: 3D View is now integrated with Composited Layers  -->  
<!-- Subtitle: Composited Layers are now in 3D View.  -->  

:::image type="icon" source="../../media/2020/06/experimental-tag-14px.msft.png":::  

You may now visualize **Layers** content alongside z-index values and the Document Object Model \(DOM\).  This feature helps you debug without switching between the [3D view][Devtools3dViewIndex] and **Layers** tools as often.  For a comprehensive visual debugging experience, the [3D View and Composited Layers are now combined][Devtools3dViewIndex].  

:::image type="complex" source="../../media/2020/11/experiments-layers.msft.png" alt-text="Composited Layers pane" lightbox="../../media/2020/11/experiments-layers.msft.png":::
   **Composited Layers** pane  
:::image-end:::  

## CSS variable definitions in Styles pane  

<!-- Title: Jump to CSS variable definitions  -->  
<!-- Subtitle: Choose any CSS variable to navigate directly to the definition in the Styles tool. -->  

In the **Styles** pane, [CSS variables][MdnUsingCssCustomProperties] now link directly to each definition.  Choose the variable to easily view or change the CSS variable definition.  In the example, DevTools displays the CSS attributes for the `body` element.  To display the variable definition for the `--theme-body-background` CSS variable, complete the following actions.  

1.  In the **Styles** pane, choose `var(--theme-body-background)`.  
1.  The **Styles** pane now displays the definition of the `--theme-body-background` CSS variable.  
    
:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/11/css-variable-support.msft.png" alt-text="CSS variable linked to the style" lightbox="../../media/2020/11/css-variable-support.msft.png":::
         CSS variable linked to the style  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/11/css-variable-support-target.msft.png" alt-text="CSS variable linked to style target" lightbox="../../media/2020/11/css-variable-support-target.msft.png":::
         CSS variable linked to style target  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

## Service worker debugging improvements  

<!-- Title:  Service worker debugging improvements in the Network, Application, and Sources tools  -->  
<!-- Subtitle:  Making service workers easier to debug for progressive web applications and more.  -->  

The following new features in the [Network](#network-tool), [Application](#application-tool), and [Sources](#sources-tool) tools help you build your [PWA][ProgressiveWebAppsIndex].  Use the following features when you have difficulty debugging your service worker.  

Request routing displays the `startup` and `fetch` events based on the network requests that run through service workers.  The timelines are accessed from either the **Application** or **Network** tool.  The timelines help when you are having trouble with service workers and want to display if something is wrong with the `startup` or `fetch` event.  

### Application tool  

<!-- Title: Open Network tool from the Service Workers pane  -->  
<!-- Subtitle: Display additional context when debugging a service worker.  -->  

View all service worker request routing information with the new **Network requests** link.  To display additional context when debugging the service worker, complete the following actions.  

1.  Navigate to **Application** > **Service Workers**.  
1.  Choose **Network requests**.  
    
    :::image type="complex" source="../../media/2020/11/service-worker-application-network-requests.msft.png" alt-text="Open Network tool from the Service Workers pane" lightbox="../../media/2020/11/service-worker-application-network-requests.msft.png":::
       Open **Network** tool from the **Service Workers** pane
    :::image-end:::  
    
1.  The **Network** tool opens in the **drawer** and displays all service worker-related network requests.  The network requests are filtered using `is:service-worker-intercepted`.  
    
    :::image type="complex" source="../../media/2020/11/service-worker-application-network-drawer.msft.png" alt-text="Network tool in drawer" lightbox="../../media/2020/11/service-worker-application-network-drawer.msft.png":::
       **Network** tool in **drawer**  
    :::image-end:::
    
1. To return the **Network** tool to the top panel, close the **drawer**.  
    
    :::image type="complex" source="../../media/2020/11/service-worker-application-network-return.msft.png" alt-text="Close the drawer to return Network tool" lightbox="../../media/2020/11/service-worker-application-network-return.msft.png":::
       Close the **drawer** to return **Network** tool  
    :::image-end:::  
    
### Network tool  

Debug network requests that run through service workers.  You may also open network requests from the **Application** tool.  For each request, DevTools display the following information in the [Timing][DevtoolsNetworkReferenceDisplayTimingBreakdownRequest] pane.  

*   The start of a request and duration of the bootstrap.  
*   Changes to service worker registration.  
*   The runtime of a `fetch` event handler.  
*   The runtime of all `fetch` events for loading a client.  
    
:::image type="complex" source="../../media/2020/11/network-timing-service-worker.msft.png" alt-text="Timing pane" lightbox="../../media/2020/11/network-timing-service-worker.msft.png":::
   **Timing** pane  
:::image-end:::  

### Sources tool  

In previous versions of Microsoft Edge, the level of depth in the call stack was limited to the JavaScript code in your service worker.  In Microsoft Edge 88, the call stack now displays the initiator of requests that run through your service worker.  

To locate the initiator of the request, use the call stack of your JavaScript code in the service worker.  The call stack in the following figures starts with the JavaScript code in your service worker and displays a reference to the original webpage request as `(index):157`.  In the second figure, the reference is chosen and opened the initiator that made the request.  The initiator in the second figure is the webpage.  

:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/11/service-worker-sources-stopped-at-breakpoint.msft.png" alt-text="The service-worker.js file and call stack highlighting request originator" lightbox="../../media/2020/11/service-worker-sources-stopped-at-breakpoint.msft.png":::
         The `service-worker.js` file and call stack highlighting request originator  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/11/service-worker-sources-call-stack-target.msft.png" alt-text="The (index) webpage is the request initiator" lightbox="../../media/2020/11/service-worker-sources-call-stack-target.msft.png":::
         The `(index)` webpage is the request initiator  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

## Copy property value of a network request  

<!-- Title: Copy response JSON in Network tool using the contextual menu  -->  
<!-- Subtitle:  The Network tool now has a more consistent UX.  Easily copy the JSON response using the contextual menu.  -->  

In the **Network** tool, copy the property value of a network request using the new **Copy value** option.  The property value is copied as a decoded JSON value.  In previous versions of Microsoft Edge, you had to copy a value using one of the following actions.  

*   Highlight the entire text and copy it.  
*   Store the value as global variable, as applicable, and copy it from the DevTools [Console][DevtoolsConsoleIndex].  
    
To copy the property value to your clipboard, navigate to [Copy formatted response JSON to the clipboard][DevtoolsNetworkReferenceCopyFormattedResponseJsonClipboard].  To review the history of this feature in the Chromium open-source project, navigate to Issue [1132084][CR1132084].  

:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/11/copy-property-value.msft.png" alt-text="Copy property value in DevTools" lightbox="../../media/2020/11/copy-property-value.msft.png":::
         Copy property value in DevTools  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/11/paste-property-value.msft.png" alt-text="Paste property value in Microsoft Visual Studio Code" lightbox="../../media/2020/11/paste-property-value.msft.png":::
         Paste property value in Microsoft Visual Studio Code  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

## Customize multi-press keyboard shortcuts  

<!-- Title: Customize multi-press keyboard shortcuts  -->  
<!-- Subtitle: Create custom multi-press keyboard shortcuts in the shortcut editor.  -->  

:::image type="icon" source="../../media/2020/06/experimental-tag-14px.msft.png":::

[Since Microsoft Edge version 87][WhatsNew202010DevtoolsCustomizeKeyboardShortcutsSettings], you may customize keyboard shortcuts for any action in DevTools.  In Microsoft Edge version 88, you may now create multi-press keyboard shortcuts.  To set a shortcut for an action in the DevTools, navigate to [Settings][DevtoolsCustomizeIndexSettings] > **Experiments**  and choose the checkbox next to **Enable keyboard shortcut editor**.  For more information about customizing and editing shortcuts, navigate to [Edit keyboard shortcuts for any action in the DevTools][DevtoolsCustomizeShortcutsEditKeyboardShortcutsForAnyActionDevtools].  

For example, the red highlight displays a multi-press keyboard shortcut customized for the **Start recording events** action.  To review real-time updates on this feature in the Chromium open-source project, navigate to [Issue #174309][CR174309].  

:::image type="complex" source="../../media/2020/11/multi-press-keyboard-shortcuts.msft.png" alt-text="Chords keyboard shortcuts" lightbox="../../media/2020/11/multi-press-keyboard-shortcuts.msft.png":::
   Multi-press keyboard shortcuts  
:::image-end:::  

## DevTools now match browser language  

In Microsoft Edge version 87, if you turned on the **Match browser language** setting in [DevTools Settings][DevtoolsCustomizeIndexSettings], DevTools did not match the browser language.  In Microsoft Edge version 88, DevTools now matches the browser language if you turn on the **Match browser language** setting.  For more information about the **Match browser language** DevTools Setting, navigate to [Change DevTools language settings][DevtoolsCustomizeLocalization].  

:::image type="complex" source="../../media/2020/11/startpage-devtools-settings-japanese.msft.png" alt-text="Match browser language DevTools setting in Japanese" lightbox="../../media/2020/11/startpage-devtools-settings-japanese.msft.png":::
   **Match browser language** DevTools setting in Japanese  
:::image-end:::  

## Announcements from the Chromium project  

[!INCLUDE [contact DevTools team note](../../includes/chromium-whats-new-note.md)]  

### New CSS angle visualization tools  

DevTools now have better support for CSS angle debugging.  When an HTML element on your page has CSS angle applied to it, a clock icon is displayed next to the angle in the **Styles** tool.  To toggle the clock overlay, choose the clock icon.  To change the angle, choose anywhere in the clock or drag the needle.  To change the angle value, you may also use mouse and keyboard shortcuts.  <!--  To learn more, navigate to [Angle Clock][DevtoolsCssReferenceChangeAngleValueWithAngleClock].  -->  To review real-time updates on this feature in the Chromium open-source project, navigate to Issues [1126178][CR1126178] and [1138633][CR1138633].  

<!--todo:  add link when css angle clock section exists.  -->  

The following CSS angle is used for the example.  

```css
background: linear-gradient(100deg, lightblue, pink);
```  

:::image type="complex" source="../../media/2020/11/css-angle.msft.png" alt-text="CSS angle" lightbox="../../media/2020/11/css-angle.msft.png":::
   CSS angle  
:::image-end:::  

### Simulate storage quota size in the Storage pane  

You may now override storage quota size in the **Storage** pane.  This feature allows you to simulate different devices and test the behavior of your website or app in low disk availability scenarios.  To simulate the storage quota, complete the following actions.  

1.  Navigate to **Application** > **Storage**.  
1.  Turn on the **Simulate custom storage quota** checkbox.  
1.  Enter a valid number.  
    
For more information about how to emulate mobile devices and other features in the DevTools, navigate to [Emulate mobile devices in Microsoft Edge DevTools
][DevtoolsDeviceModeIndex].  To review real-time updates on this feature in the Chromium open-source project, navigate to Issues [945786][CR945786] and [1146985][CR1146985].  

:::image type="complex" source="../../media/2020/11/storage-quota.msft.png" alt-text="Simulate storage quota size" lightbox="../../media/2020/11/storage-quota.msft.png":::
   Simulate storage quota size  
:::image-end:::  

### Report CORS errors in the Network tool  

Try out this feature by navigating to [CORS error demo][GlitchCorsErrors].  Open the **Network** tool, refresh the page, and observe the failed CORS network request.  The status column displays the **CORS error**.  When you hover on the error, the tooltip now displays the error code.  In Microsoft Edge version 87 and earlier, DevTools only displayed generic **(failed)** status for CORS errors.  To review real-time updates on this feature in the Chromium open-source project, navigate to Issue [1141824][CR1141824].  

:::image type="complex" source="../../media/2020/11/cors-err.msft.png" alt-text="CORS errors" lightbox="../../media/2020/11/cors-err.msft.png":::
   CORS errors  
:::image-end:::  

### Frame details view updates  

#### Cross-origin isolation information in the Frame details view  

The cross-origin isolated status is now displayed under the **Security & Isolation** section.  The new **API availability** section displays the availability of `SharedArrayBuffer`s \(SAB\) and whether the buffers may be shared using `postMessage()`.  A deprecation warning displays if the SAB and `postMessage()` is currently available, but the context is not cross-origin isolated.  For more information about cross-origin isolation and why it is required for features like `SharedArrayBuffers`, navigate to [WindowOrWorkerGlobalScope.crossOriginIsolated][MdnWindoworworkerglobalscopeCrossoriginisolated].  To review real-time updates of this feature in the Chromium open-source project, navigate to Issue [1139899][CR1139899].  

:::image type="complex" source="../../media/2020/11/frame-cross-origin-isolated-api.msft.png" alt-text="Cross-origin information" lightbox="../../media/2020/11/frame-cross-origin-isolated-api.msft.png":::
   Cross-origin information  
:::image-end:::  

#### New Web Workers information in the Frame details view  

DevTools now organizes web workers under the relevant parent frame.  For example, if the `someName` frame creates `worker.js`, then `worker.js` appears under `someName` in the **Frames** list.  To view the details of the web worker, complete the following actions.  

1.  Open **Application** tool.  
1.  Expand a frame that contains web workers.  
1.  Expand the **Workers** tree.  
1.  Choose a worker.  
    
To review real-time updates on this feature in the Chromium open-source project, navigate to Issues [1122507][CR1122507] and [1051466][CR1051466].  

:::image type="complex" source="../../media/2020/11/application-frames-service-workers.msft.png" alt-text="Web workers information" lightbox="../../media/2020/11/application-frames-service-workers.msft.png":::
   Web workers information  
:::image-end:::  

#### Display opener frame details for opened windows  

DevTools now organizes opened [Windows][MdnWindowConstructors] under the relevant parent [frame][MdnWindowFrames].  For example, if the `top` frame opens a `Window` to `https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium`, then the `Window` appears under `top` in the **Frames** list.  

To reveal the frame responsible for opening another Window in the **Elements** tool, complete the following actions.  

1.  Open the **Frames** tree.  
1.  Expand **Opened Windows** and choose the `Window` for the parent frame you want to know.  
1.  Choose the **Opener Frame** link.  

The details are displayed about which frame caused the opening of another `Window`.  To reveal the opener in the **Elements** tool, complete the following actions.  

1.  Open the **Frames** tree.  
1.  Choose an opened window to open the `Window` details.  
1.  Choose the **Opener Frame** link.  
    
To review the history of this feature in the Chromium open-source project, navigate to Issue [1107766][CR1107766].  

:::image type="complex" source="../../media/2020/11/application-frames-opened-windows-security-opener-frame.msft.png" alt-text="Opened frame details" lightbox="../../media/2020/11/application-frames-opened-windows-security-opener-frame.msft.png":::
   Opened frame details  
:::image-end:::  

### Copy stacktrace for network initiator  

To copy the stacktrace to your clipboard, complete the following actions.  

1.  Open the contextual menu \(right-click\).  
1.  Choose **Copy** > **Copy stacktrace**.  
    
To review the history of this feature in the Chromium open-source project, navigate to Issue [1139615][CR1139615].

:::image type="complex" source="../../media/2020/11/copy-stacktrace.msft.png" alt-text="Copy stacktrace" lightbox="../../media/2020/11/copy-stacktrace.msft.png":::
   Copy stacktrace  
:::image-end:::  

### Preview Wasm variable value on mouseover  

Use this feature to review the value of a WebAssembly \(Wasm\) variable when your code is paused.  To display the current value of a variable, hover on a variable.  To review real-time updates on this feature in the Chromium open-source project, navigate to Issues [1058836][CR1058836] and [1071432][CR1071432].  

:::image type="complex" source="../../media/2020/11/wasm-mouseover.msft.png" alt-text="Preview Wasm variable on mouseover" lightbox="../../media/2020/11/wasm-mouseover.msft.png":::
   Preview Wasm variable on mouseover  
:::image-end:::  

### Consistent units of measurement for sizes of files and memory  

DevTools now consistently use `kB` for displaying sizes of files and memory.  Previously DevTools mixed `kB` and `KiB`.

*   `kB` or kilobyte \(10^3 or 1000 bytes\)  
*   `KiB` or kibibyte \(2^10 or 1024 bytes\)  
    
For example, the **Network** tool previously used `kB` in the labels, but used `KiB` in calculations.  Your feedback showed that this inconsistency caused confusion.  To review the history of this feature in the Chromium open-source project, navigate to Issue [1035309][CR1035309].  

## Download the Microsoft Edge preview channels  

If you are on Windows, Linux, or macOS, consider using the [Microsoft Edge preview channels][MicrosoftEdgePreviewChannels] as your default development browser.  The preview channels give you access to the latest DevTools features.  

## Getting in touch with Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../../includes/contact-whats-new-note.md)]  

<!-- links -->  

[WhatsNew202010DevtoolsCustomizeKeyboardShortcutsSettings]: ../10/devtools.md#customize-keyboard-shortcuts-in-settings "Customize keyboard shortcuts in Settings - What's New In DevTools (Microsoft Edge 87) | Microsoft Docs"  
[WhatsNew202006DevtoolsWebhintFeedbackInTheIssuesPanel]: ../06/devtools.md#webhint-feedback-in-the-issues-panel "webhint feedback in the Issues panel - What's New In DevTools (Microsoft Edge 85) | Microsoft Docs"  

[Devtools3dViewIndex]: ../../../3d-view/index.md "3D View | Microsoft Docs"  
[DevtoolsConsoleIndex]: ../../../console/index.md "Console Overview | Microsoft Docs"  
[DevtoolsCustomizeIndexSettings]: ../../../customize/index.md#settings "Settings - Customize Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsCustomizeLocalization]: ../../../customize/localization.md "Change DevTools language settings | Microsoft Docs"  
[DevtoolsCustomizeShortcutsEditKeyboardShortcutsForAnyActionDevtools]: ../../../customize/shortcuts.md#edit-keyboard-shortcuts-for-any-action-in-the-devtools "Edit keyboard shortcuts for any action in the DevTools | Microsoft Docs"  
[DevtoolsDeviceModeIndex]: ../../../device-mode/index.md "Emulate mobile devices in Microsoft Edge DevTools | Microsoft Docs"  
<!--  [DevtoolsExperimentalFeaturesEnableKeyboardShortcutEditor]: ../../../experimental-features/index.md#enable-keyboard-shortcut-editor "Enable keyboard shortcut editor - Experimental features | microsoft Docs"  -->  
<!--  [DevtoolsExperimentalFeaturesTurnOnCompositedLayers3dView]: ../../../experimental-features/index.md#turn-on-composited-layers-in-3d-view "Turn on Composited Layers in 3D View - Experimental features | Microsoft Docs"  -->  
[DevtoolsIssuesIndex]: ../../../issues/index.md "Find and fix problems using the Issues tool | Microsoft Docs"  
[DevtoolsNetworkReferenceCopyFormattedResponseJsonClipboard]: ../../../network/reference.md#copy-formatted-response-json-to-the-clipboard "Copy formatted response JSON to the clipboard - Network Analysis reference | Microsoft Docs"  
[DevtoolsNetworkReferenceDisplayTimingBreakdownRequest]: ../../../network/reference.md#display-the-timing-breakdown-of-a-request "Display the timing breakdown of a request - Network Analysis reference | Microsoft Docs"  

<!--  [DevtoolsCssReferenceChangeAngleValueWithAngleClock]: ../../../css/reference.md#change-angle-value-with-the-angle-clock "Change angle value with the Angle Clock - CSS reference | Microsoft Docs"  -->  

[ProgressiveWebAppsIndex]: ../../../../progressive-web-apps-chromium/index.md "Progressive Web Apps on Windows | Microsoft Docs"  

[WebdriverChromiumMain]: ../../../../webdriver-chromium/index.md "Use WebDriver (Chromium) for test automation | Microsoft Docs"  

[MicrosoftDeveloperMicrosoftEdgeToolsWebdriverDownloads]: https://developer.microsoft.com/microsoft-edge/tools/webdriver#downloads "Download WebDriver | Microsoft Developer"  

[MicrosoftinsiderDownloadPlatformLinux]: https://www.microsoftedgeinsider.com/download?platform=linux "Download Microsoft Edge Insider Channels"  

[MicrosoftEdgePreviewChannels]: https://www.microsoftedgeinsider.com/download "Microsoft Edge Preview Channels"  

[VisualStudioCodeMain]: https://code.visualstudio.com "Visual Studio Code"  

[CRIssuesList]: https://bugs.chromium.org/p/chromium/issues/list "Chromium bugs"  

[CR174309]: https://crbug.com/174309 "Issue 174309: DevTools: Allow to customize keyboard shortcuts/key bindings | Chromium bugs"  
[CR945786]: https://crbug.com/945786 "Issue 945786: DevTools: Allow overriding navigator.storage.estimate() | Chromium bugs"  
[CR1029427]: https://crbug.com/1029427 "Issue 1029427: Reduce performance overhead of protocol message dispatch in the front-end | Chromium bugs"  
[CR1035309]: https://crbug.com/1035309 "Issue 1035309: DevTools should consistently use MB to mean megabyte, not mebibyte | Chromium bugs"  
[CR1051466]: https://crbug.com/1051466 "Issue 1051466: Support COOP/COEP debugging in DevTools | Chromium bugs"  
[CR1058836]: https://crbug.com/1058836 "Issue 1058836: UX issues around Wasm debugging | Chromium bugs"  
[CR1071432]: https://crbug.com/1071432 "Issue 1071432: ☂️ Wasm Basic Developer Experience | Chromium bugs"  
[CR1107766]: https://crbug.com/1107766 "Issue 1107766: Display info about frames generated by 'window.open()' in frame tree | Chromium bugs"  
[CR1122507]: https://crbug.com/1122507 "Issue 1122507: Surface worker information in frame tree view | Chromium bugs"  
[CR1126178]: https://crbug.com/1126178 "Issue 1126178: ☂ DevTools: CSS <type> components | Chromium bugs"  
[CR1130556]: https://crbug.com/1130556 "Issue 1130556: DevTools: test image fallbacks (emulation) | Chromium bugs"  
[CR1132084]: https://crbug.com/1132084 "Issue 1132084: No easy way to copy JSON request payload | Chromium bugs"  
[CR1136394]: https://crbug.com/1136394 "Issue 1136394: Flexbox tooling | Chromium bugs"  
[CR1138633]: https://crbug.com/1138633 "Issue 1138633: DevTools: CSS <angle> component should reflect its residing property's appearance in the clock background | Chromium bugs"  
[CR1139615]: https://crbug.com/1139615 "Issue 1139615: Network initiator should offer the ability to copy stack trace | Chromium bugs"  
[CR1139899]: https://crbug.com/1139899 "Issue 1139899: Report gated API availability in frame details view | Chromium bugs"  
[CR1139945]: https://crbug.com/1139945 "Issue 1139945: Icons for flexbox CSS properties in the Styles panel | Chromium bugs"  
[CR1141824]: https://crbug.com/1141824 "Issue 1141824: Improve CORS error reporting in DevTools | Chromium bugs"  
[CR1144090]: https://crbug.com/1144090 "Issue 1144090: Add flex style adorners to the Elements tree | Chromium bugs"  
[CR1146985]: https://crbug.com/1146985 "Issue 1146985: Cleared text is still seen in text-box of 'Storage' section of 'Dev Tools' window | Chromium bugs"  

[GlitchCorsErrors]: https://cors-errors.glitch.me "CORS errors | Glitch"  

[MdnCors]: https://developer.mozilla.org/docs/Web/HTTP/CORS "Cross-Origin Resource Sharing (CORS) | MDN"  
[MdnUsingCssCustomProperties]: https://developer.mozilla.org/docs/Web/CSS/Using_CSS_custom_properties "Using CSS custom properties (variables) | MDN"  
[MdnWindowConstructors]: https://developer.mozilla.org/docs/Web/API/Window#Constructors "Constructors - Window | MDN"  
[MdnWindowFrames]: https://developer.mozilla.org/docs/Web/API/Window/frames "Window.frames | MDN"  
[MdnWindoworworkerglobalscopeCrossoriginisolated]: https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/crossOriginIsolated "WindowOrWorkerGlobalScope.crossOriginIsolated | MDN"  

[WebhintMain]: https://webhint.io "webhint"  
[WebhintUserGuideHintsAccessibility]: https://webhint.io/docs/user-guide/hints/accessibility "Accessibility | webhint"  
[WebhintUserGuideHintsCompatibility]: https://webhint.io/docs/user-guide/hints/compatibility "Compatibility | webhint"  
[WebhintUserGuideHintsPerformance]: https://webhint.io/docs/user-guide/hints/performance "Performance | webhint"  
[WebhintUserGuideHintsPitfalls]: https://webhint.io/docs/user-guide/hints/pitfalls "Pitfalls | webhint"  
[WebhintUserGuideHintsPwa]: https://webhint.io/docs/user-guide/hints/pwa "PWA | webhint"  
[WebhintUserGuideHintsSecurity]: https://webhint.io/docs/user-guide/hints/security "Security | webhint"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developer.chrome.com/blog/new-in-devtools-88) and is authored by [Jecelyn Yeen][JecelynYeen] \(Developer advocate, Chrome DevTools\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[JecelynYeen]: https://developers.google.com/web/resources/contributors#jecelyn-yeen  
