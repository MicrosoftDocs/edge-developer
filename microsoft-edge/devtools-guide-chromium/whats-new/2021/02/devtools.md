---
description: Debugging support for CSS Flexbox, performance heads-up display on the webpage, issues tool updates and more
title: What's new in DevTools (Microsoft Edge 90)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 03/02/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---

# What's New In DevTools (Microsoft Edge 90)  

[!INCLUDE [contact DevTools team note](../../includes/edge-whats-new-note.md)]  

## Introducing Focus Mode and Tooltips  

:::image type="icon" source="../../media/2020/06/experimental-tag-14px.msft.png":::  

<!-- Title: Focus Mode and DevTools tooltips  -->  
<!-- Subtitle: Organize your favorite tools into groups and learn more about the wide array of tools and panes in the DevTools with tooltips  -->  

Focus Mode is an experimental feature that lets you group different tools based on your debugging scenarios.  The Action bar on the left starts with some predefined groups like **Layout** and **Testing** that contain recommended tools but you may customize each one by closing and adding new tabs.  
DevTools Tooltips help you learn about all the different tools and panes in the DevTools.  Choose the Help \(`?`\) icon at the bottom of the tray to display \(or hide\) informative overlays in the Microsoft Edge DevTools.  To turn on the experiment, navigate to [Turn on experimental features][DevtoolsExperimentalFeaturesIndexTurnOnExperimentalFeatures] and choose the checkbox next to **Focus Mode and DevTools Tooltips**.  

:::image type="complex" source="../../media/2021/02/focus-mode-and-tooltips-help.msft.png" alt-text="Choose the Help icon to display Focus mode and tooltips" lightbox="../../media/2021/02/focus-mode-and-tooltips-help.msft.png":::
   Choose the Help icon to display Focus mode and tooltips  
:::image-end:::  

## Customize keyboard shortcuts in Settings  

:::image type="icon" source="../../media/2020/06/experimental-tag-14px.msft.png":::  

<!-- Title: Change keyboard shortcuts in Settings (Rachel's feedback is about the fact that this experimental feature is turned on by default, may have separate section in What's New for experimental features)  -->  
<!-- Subtitle: Make DevTools work better for you by creating new keyboard shortcuts for any action in the DevTools.  -->  

You are now able to customize the keyboard shortcut for any action in the DevTools.  Navigate to [DevTools Settings][DevtoolsCustomizeIndexSettings] > **Shortcuts**, choose the action you want to customize > the Edit \(![Edit Keyboard Shortcut icon](../../media/2021/02/edit-keyboard-shortcut-icon.msft.png)\) icon.  Select the keys you want to bind to the action and choose the checkmark \(![Checkmark Keyboard Shortcut icon](../../media/2021/02/checkmark-keyboard-shortcut-icon.msft.png)\) icon.  

For more information about customizing and editing shortcuts, navigate to [Customize keyboard shortcuts in the Microsoft Edge DevTools][DevtoolsCustomizeShortcuts].  To review real-time updates on this feature in the Chromium open-source project, navigate to Issue [174309][CR174309].  

:::image type="complex" source="../../media/2021/02/custom-shortcut-pause-script.msft.png" alt-text="Customize keyboard shortcuts in DevTools Settings" lightbox="../../media/2021/02/custom-shortcut-pause-script.msft.png":::
   Customize keyboard shortcuts in [DevTools Settings][DevtoolsCustomizeIndexSettings]  
:::image-end:::  

## Microsoft Edge DevTools for Visual Studio Code extension update 1.1.4  

<!-- Title: Edge Devtools for Visual Studio code extension update 1.1.4  -->  
<!-- Subtitle: Latest changes including a favicon is displayed next to each of the instances and console messages from the browser are displayed in the console of Visual Studio Code.  -->  

The [Microsoft Edge Developer Tools for Visual Studio Code][VisualstudioMarketplaceMsEdgedevtoolsVscodeEdgeDevtools] extension version 1.1.4 for Microsoft Visual Studio Code has the following changes since the previous release.  Microsoft Visual Studio Code updates extensions automatically.  To manually update to version 1.1.4, navigate to [Update an extension manually][VisualstudioCodeDocsEditorExtensionGalleryUpdateExtensionManually].  

*   A favicon is displayed next to each of the Devtools instances and console messages from the browser are now displayed in the console of Visual Studio Code.  For more information, navigate to [1.1.4 milestone][GithubMicrosoftVscodeEdgeDevtoolsMilestone3].  
    
You may file issues and contribute to the extension on the [vscode-edge-devtools GitHub repo][GithubMicrosoftVscodeEdgeDevtools].  

## New CSS flexbox debugging tools  

<!-- Title: ???  -->  
<!-- Subtitle: ???  -->  

DevTools now has dedicated CSS flexbox debugging tools.  When an HTML element has `display: flex` or `display: inline-flex` applied to it, a `flex` badge is displayed next to it in the **Elements** tool.  Choose the badge to display \(or hide\) a flex overlay on the webpage.   To review the history of this feature in the Chromium open-source project, navigate to Issues [1166710][CR1166710] and [1175699][CR1175699].  

:::row:::
   :::column span="":::
      To open the **Flexbox** editor, navigate to the **Styles** pane and choose the new icon next to the `display: flex` or `display: inline-flex`.  Flexbox editor provides a quick way to edit the flexbox properties.  
      
      :::image type="complex" source="../../media/2021/02/elements-styles-display-flex-window.msft.png" alt-text="CSS flexbox debugging tools" lightbox="../../media/2021/02/elements-styles-display-flex-window.msft.png":::
         CSS flexbox debugging tools  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      In addition, the **Layout** pane has a **Flexbox** section, display all the flexbox elements on the webpage.  You may toggle the overlay of each element.  
      
      :::image type="complex" source="../../media/2021/02/elements-layout-flexbox-flexbox-overlays.msft.png" alt-text="Flexbox section in the Layout pane" lightbox="../../media/2021/02/elements-layout-flexbox-flexbox-overlays.msft.png":::
         **Flexbox** section in the **Layout** pane  
      :::image-end:::  
   :::column-end:::
:::row-end:::

## Keyboard navigation improvements for network requests  

<!-- Title: Navigate the request initiator chain in the Network tool with the keyboard  -->  
<!-- Subtitle: The Initiator pane may now be expanded or collapsed with the arrow keys.  -->  

In Microsoft Edge version 89 or earlier, the **Initiator** pane for the focused network request in the **Network** tool was not navigable using the arrow keys on the keyboard, unlike the DOM in the **Elements** tool.  In Microsoft Edge version 90, the focused row in the chain of requests in the **Initiator** pane is highlighted and select the arrow keys to expand \(or collaps\).  To review the history of this feature in the Chromium open-source project, navigate to Issues [1158276][CR1158276] and [1160637][CR1160637].  

:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2021/02/network-request-initiator-chain.msft.png" alt-text="Choose a Network request > Initiator pane" lightbox="../../media/2021/02/network-request-initiator-chain.msft.png":::
         Choose a Network request > **Initiator** pane  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../../media/2021/02/network-request-initiator-chain-right-arrow-down-twice-down-arrow-thrice.msft.png" alt-text="Select `left arrow` twice to expend the top-level of the request initiator chain and select `down arrow` thrice" lightbox="../../media/2021/02/network-request-initiator-chain-right-arrow-down-twice-down-arrow-thrice.msft.png":::
         Select `left arrow` twice to expend the top-level of the request initiator chain and select `down arrow` thrice  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

## Filtering in the Console is more consistent  

<!-- Title: Console improvements make filtering more consistent  -->  
<!-- Subtitle: The Log Levels dropdown is more clearly disabled when using filters in the Console sidebar.  -->  

In Microsoft Edge version 89 and earlier, if you choose the filters in the **Console sidebar** to turn off the **Log Levels** dropdown but it is still highlighted.  In Microsoft Edge version 90, if you choose the **Console sidebar** to filter messages turns off the **Log Levels** dropdown, it is no longer highlighted.  To learn more about filtering in the **Console**, navigate to [Filter Messages][DevtoolsConsoleReferenceFilterMessages].  

:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2021/02/console-sidebar-default-levels-old.msft.png" alt-text="Before Microsoft Edge 90, open the Console sidebar and hover on Default levels highlights it" lightbox="../../media/2021/02/console-sidebar-default-levels-old.msft.png":::
         Before Microsoft Edge 90, open the **Console sidebar** and hover on **Default levels** highlights it
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../../media/2021/02/console-sidebar-default-levels-new.msft.png" alt-text="Starting with Microsoft Edge 90, open the Console sidebar and hover on Default levels does not highlight it" lightbox="../../media/2021/02/console-sidebar-default-levels-new.msft.png":::
         Starting with Microsoft Edge 90, if you choose the **Console sidebar** and hover on **Default levels** does not highlight it  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

## Announcements from the Chromium project  

[!INCLUDE [contact DevTools team note](../../includes/chromium-whats-new-note.md)]  

### Format strings as (valid) JavaScript string literals in the Console  

Now, the **Console** formats strings as valid JavaScript string literals in the **Console**.  Previously, the **Console** did not escape double quote \(`"`\) characters when printing strings.  To review the history of this feature in the Chromium open-source project, navigate to Issue [1178530][CR1178530].  

:::image type="complex" source="../../media/2021/02/console-string-formatted-double-quotes.msft.png" alt-text="Format strings as (valid) JavaScript string literals" lightbox="../../media/2021/02/console-string-formatted-double-quotes.msft.png":::
   Format strings as \(valid\) JavaScript string literals  
:::image-end:::  

### Emulate the CSS color-gamut media feature  

The [color-gamut][ChromestatusFeature5354410980933632] media query allows you to test the approximate range of colors that are supported by the browser and the output device.  For example, if the `color-gamut: p3` media query is displayed, the user's device supports the Display-P3 colorspace.  

To emulate the CSS color-gamut media feature, complete the following actions.  

1.  Open the [Command Menu][DevtoolsCommandMenuIndex].  
1.  Type `Rendering`.  
1.  Run the **Show Rendering** command.  
1.  Navigate to **Emulate CSS media feature color-gamut** and choose the `color-gamut: ...` option.  

To review the history of this feature in the Chromium open-source project, navigate to Issue [1073887][CR1073887].  

:::image type="complex" source="../../media/2021/02/rendering-css-color-gamut.msft.png" alt-text="Emulate the CSS color-gamut media feature" lightbox="../../media/2021/02/rendering-css-color-gamut.msft.png":::
   Emulate the CSS color-gamut media feature  
:::image-end:::  

### Improved Progressive Web Apps tooling  

DevTools now display a more detailed Progressive Web Apps \(PWA\) installability warning message in the **Console**, with a link to [documentation][ChromeDeveloperBlogImprovedPwaOfflineDetection].  

:::image type="complex" source="../../media/2021/02/console-pwa-installability.msft.png" alt-text="PWA installability warning in Console tool" lightbox="../../media/2021/02/console-pwa-installability.msft.png":::
   PWA installability warning in **Console** tool  
:::image-end:::  

The **Manifest** pane now displays a warning message if the manifest **description** exceeds 324 characters.  

:::image type="complex" source="../../media/2021/02/application-manifest-errors-and-warnings-truncated.msft.png" alt-text="PWA description truncate warning" lightbox="../../media/2021/02/application-manifest-errors-and-warnings-truncated.msft.png":::
   PWA description truncate warning  
:::image-end:::  

<!-- does not work in canary 90.0.813.0 -->  
<!--In addition, the **Manifest** pane now shows a warning message if the screenshot of the PWA does not match the requirements.  

:::image type="complex" source="../../media/2021/02/pwa-screenshot.msft.png" alt-text="PWA screenshot warning" lightbox="../../media/2021/02/pwa-screenshot.msft.png":::
   PWA screenshot warning  
:::image-end:::  -->  

To review the history of this feature in the Chromium open-source project, navigate to Issues [1146450][CR1146450], [1169689][CR1169689], and [965802][CR965802].  

### New Remote Address Space column in the Network tool  

<!-- does not work in canary 90.0.813.0 -->  
To display the network IP address space of each network resource, navigate to the **Network** tool and choose the new **Remote Address Space** column.  To review the history of this feature in the Chromium open-source project, navigate to Issue [1128885][CR1128885].  

:::image type="complex" source="../../media/2021/02/remote-address-space.msft.png" alt-text="New Remote Address Space column" lightbox="../../media/2021/02/remote-address-space.msft.png":::
   New **Remote Address Space** column  
:::image-end:::  

### Display allowed and disallowed features in the Frame details view  

Frame details view now displays a list of allowed and disallowed browser features controlled by the Permissions policy.  [Permissions policy][GithubW3cWebappsecPermissionsPolicyBlobMainPermissionsPolicyExplainer] is a web platform API which gives a webpage the ability to allow \(or block\) the use of browser features in an individual frame or in iframes that it embeds.  To review the history of this feature in the Chromium open-source project, navigate to Issue [1158827][CR1158827].  

:::image type="complex" source="../../media/2021/02/application-frames-permissions-policy.msft.png" alt-text="Allowed and disallowed features based on Permission policy" lightbox="../../media/2021/02/application-frames-permissions-policy.msft.png":::
   Allowed and disallowed features based on Permission policy  
:::image-end:::  

### New SameParty column in the Cookies pane  

The **Cookies** pane in the **Application** tool now displays the `SameParty` attribute of the cookies.  The `SameParty` attribute is a new boolean attribute to indicate whether a cookie should be included in requests to origins of the same [First-Party Sets][GithubPrivacycgFirstPartySets].  To review the history of this feature in the Chromium open-source project, navigate to Issue [1161427][CR1161427].  

:::image type="complex" source="../../media/2021/02/application-storage-cookies-sameparty.msft.png" alt-text="SameParty column in Application tool" lightbox="../../media/2021/02/application-storage-cookies-sameparty.msft.png":::
   **SameParty** column in **Application** tool  
:::image-end:::  

### Deprecated non-standard fn.displayName support  

Support for the non-standard `fn.displayName` is now deprecated.  Instead, use `fn.name`.  Microsoft Edge has traditionally supported the non-standard `fn.displayName` property as a way for you \(a developer\) to control debug names for functions that display in `error.stack` and in DevTools stack traces.  To review the history of this feature in the Chromium open-source project, navigate to Issue [1177685][CR1177685].  

:::row:::
   :::column span="":::
      The **Call Stack** previously displayed `noLongerSupport`.  Support for `fn.displayName` is unreliable and not consistent across browser engines.  It slows down stack trace collection, a cost that you pay whether you actually use `fn.displayName` or not.  
      
      :::image type="complex" source="../../media/2021/02/console-display-name.msft.png" alt-text="Deprecation of non-standard `fn.displayName` support" lightbox="../../media/2021/02/console-display-name.msft.png":::
         Deprecation of non-standard `fn.displayName` support  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
     Replace `fn.displayName` with the standard `fn.name`.  The standard `fn.name` is specified in ECMAScript 2015 to replace the non-standard `fn.displayName` property and is configurable using `Object.defineProperty`.  
     
     :::image type="complex" source="../../media/2021/02/console-display-name-name.msft.png" alt-text="Use `fn.name` to control debug names for functions" lightbox="../../media/2021/02/console-display-name-name.msft.png":::
         Use `fn.name` to control debug names for functions  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

### Full accessibility tree view in the Elements tool  

:::image type="icon" source="../../media/2020/06/experimental-tag-14px.msft.png":::  

You may now toggle to view the new and improved full accessibility tree view of a webpage.  The current [Accessibility][DevtoolsAccessibilityReferenceTheAccessibilityPane] pane provides a limited display of the nodes, only showing the direct ancestor chain from the root node to the inspected node.  The new accessibility tree view aims to improve that and makes the accessibility tree easier to explore, useful, and easier for you to use.  After you turn on this experiment, to switch between the existing DOM tree and the full accessibility tree, open the the **Elements** tool and choose the new button.  To turn on the experiment, navigate to [Turn on experimental features][DevtoolsExperimentalFeaturesIndexTurnOnExperimentalFeatures] and choose the checkbox next to **Enable full accessibility tree view in Elements pane**.  To review the history of this feature in the Chromium open-source project, navigate to Issue [887173][CR887173].  

:::image type="complex" source="../../media/2021/02/elements-switch-to-accesibility-tree-view.msft.png" alt-text="Full accessibility tree view" lightbox="../../media/2021/02/elements-switch-to-accesibility-tree-view.msft":::
   Full accessibility tree view  
:::image-end:::  

## Download the Microsoft Edge preview channels  

If you are on Windows, Linux, or macOS, consider using the [Microsoft Edge preview channels][MicrosoftEdgePreviewChannels] as your default development browser.  The preview channels give you access to the latest DevTools features.  

## Getting in touch with Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../../includes/contact-whats-new-note.md)]

<!-- links -->  

[DevtoolsAccessibilityReferenceTheAccessibilityPane]: /microsoft-edge/devtools-guide-chromium/accessibility/reference#the-accessibility-pane "The Accessibility pane - Accessibility reference | Microsoft Docs"  
[DevtoolsCommandMenuIndex]: /microsoft-edge/devtools-guide-chromium/command-menu/index "Run commands with the Microsoft Edge DevTools Command Menu | Microsoft Docs"  
[DevtoolsConsoleReferenceFilterMessages]: /microsoft-edge/devtools-guide-chromium/console/reference#filter-messages "Filter messages - Console Reference | Microsoft Docs"  
[DevtoolsCustomizeIndexSettings]: /microsoft-edge/devtools-guide-chromium/customize/index#settings "Settings - Customize Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsCustomizeShortcuts]: /microsoft-edge/devtools-guide-chromium/customize/shortcuts "Customize keyboard shortcuts in the Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsExperimentalFeaturesIndexTurnOnExperimentalFeatures]: /microsoft-edge/devtools-guide-chromium/experimental-features/index#turn-on-experimental-features "Turn on experimental features - Experimental features | Microsoft Docs"  

[MicrosoftEdgePreviewChannels]: https://www.microsoftedgeinsider.com/download "Microsoft Edge Preview Channels"  

[VisualstudioCodeDocsEditorExtensionGalleryUpdateExtensionManually]: https://code.visualstudio.com/docs/editor/extension-gallery#_update-an-extension-manually "Update an extension manually - Extension Marketplace | Visual Studio Code"  

[VisualstudioMarketplaceMsEdgedevtoolsVscodeEdgeDevtools]: https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools "Microsoft Edge Tools for Visual Studio Code | Visual Studio Marketplace"  

[ChromeDeveloperBlogImprovedPwaOfflineDetection]: https://developer.chrome.com/blog/improved-pwa-offline-detection "Improving Progressive Web App offline support detection | Chrome Developers"  

[ChromestatusFeature5354410980933632]: https://www.chromestatus.com/feature/5354410980933632 "color-gamut media query | Chrome Platform Status"  

[CRIssuesList]: https://bugs.chromium.org/p/chromium/issues/list "Chromium bugs"  
[CR174309]: https://crbug.com/174309 "Issue 174309: DevTools: Allow to customize keyboard shortcuts/key bindings | Chromium bugs"  
[CR887173]: https://crbug.com/887173 "Issue 887173: DevTools: Full Accessibility Tree Inspection | Chromium bugs"  
[CR965802]: https://crbug.com/965802 "Issue 965802: Implement more accurate service worker's offline capability detection | Chromium bugs"  
[CR1073887]: https://crbug.com/1073887 "Issue 1073887: DevTools: @media (color-gamut: ...) colorspace emulation | Chromium bugs"  
[CR1128885]: https://crbug.com/1128885 "Issue 1128885: DevTools Support for CORS-RFC1918 | Chromium bugs"  
[CR1146450]: https://crbug.com/1146450 "Issue 1146450: [Android] Implement bottom sheet installs | Chromium bugs"  
[CR1158276]: https://crbug.com/1158276 "Issue 1158276: Unable to expand/contract 'Request initiator chain' pane using arrow keys in 'Network' section of DevTools | Chromium bugs"  
[CR1158827]: https://crbug.com/1158827 "Issue 1158827: [Permissions Policy] Implement devtool support for permissions policy | Chromium bugs"  
[CR1160637]: https://crbug.com/1160637 "Issue 1160637: Focus on 'Request initiator chain' is seen incomplete in 'Network' section of 'Dev Tools' window | Chromium Bugs"  
[CR1161427]: https://crbug.com/1161427 "Issue 1161427: &#9730; Support SameParty cookie attribute debugging in DevTools | Chromium bugs"  
[CR1166710]: https://crbug.com/1166710 "Issue 1166710: turn on flexbox tooling experiment by default | Chromium bugs"  
[CR1169689]: https://crbug.com/1169689 "Issue 1169689: PWA install bottom sheet should not feature categories | Chromium bugs"  
[CR1175699]: https://crbug.com/1175699 "Issue 1175699: Flexbox editor | Chromium bugs"  
[CR1177685]: https://crbug.com/1177685 "Issue 1177685: Remove non-standard fn.displayName support | Chromium bugs"  
[CR1178530]: https://crbug.com/1178530 "Issue 1178530: Console does not escape doublequotes when printing strings | Chromium bugs"  

[GithubMicrosoftVscodeEdgeDevtoolsMilestone3]: https://github.com/microsoft/vscode-edge-devtools/milestone/3 "1.1.4 milestone | GitHub"  

[GithubPrivacycgFirstPartySets]: https://github.com/privacycg/first-party-sets "First-Party Sets | GitHub"  

[GithubW3cWebappsecPermissionsPolicyBlobMainPermissionsPolicyExplainer]: https://github.com/w3c/webappsec-permissions-policy/blob/main/permissions-policy-explainer.md "Permissions Policy Explainer | GitHub"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/updates/2021/02/devtools/index) and is authored by [Jecelyn Yeen][JecelynYeen] \(Developer advocate, Chrome DevTools\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[JecelynYeen]: https://developers.google.com/web/resources/contributors/jecelynyeen  
