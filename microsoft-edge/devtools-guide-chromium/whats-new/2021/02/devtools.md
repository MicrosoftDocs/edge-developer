---
description: Debugging support for CSS Flexbox, performance heads-up display on the webpage, issues tool updates and more
title: What's new in DevTools (Microsoft Edge 90)
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
# What's New In DevTools (Microsoft Edge 90)

[!INCLUDE [contact DevTools team note](../../includes/edge-whats-new-note.md)]


<!-- ====================================================================== -->
## Group tools together in Focus Mode

<!-- Title: Grouping the tools in Focus Mode  -->
<!-- Subtitle: Organize your favorite tools into groups with the new Focus Mode UI.  -->

Focus Mode is an experimental interface that allows you to group different tools together based on your own debugging scenarios.  The new **Activity Bar** displayed on the left includes predefined tool groups such as **Layout** and **Debugging**.  To customize each tool group, close tools with the **Close** (`X`) icon or add new tools with the **More tools** (`+`) icon.

To turn on the experiment, navigate to [Turning on experimental features](../../../experimental-features/index.md#turning-on-experimental-features) and choose the checkboxes next to **Focus Mode and DevTools Tooltips** and **Enable + button tab menus to open more tools**.  For more information about this feature or to comment with questions and ideas, navigate to [DevTools: Focus Mode UI](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DevTools/FocusMode/explainer.md).

:::image type="complex" source="../../media/2021/02/focus-mode.msft.png" alt-text="Display the Activity Bar" lightbox="../../media/2021/02/focus-mode.msft.png":::
   Display the **Activity Bar**
:::image-end:::


<!-- ====================================================================== -->
## Learn about DevTools with informative tooltips

<!-- Title: DevTools Tooltips  -->
<!-- Subtitle: Learn more about how to use DevTools with informative DevTools tooltips.  -->

The DevTools Tooltips feature helps you learn about all the different tools and panes.  Choose the Help (`?`) icon at the bottom of the **Activity Bar** to toggle tooltips in the DevTools.  When tooltips are on, hover over each outlined region of DevTools to learn more about how to use the tool.  To turn on the experiment, navigate to [Turning on experimental features](../../../experimental-features/index.md#turning-on-experimental-features) and choose the checkboxes next to **Focus Mode and DevTools Tooltips** and **Enable + button tab menus to open more tools**.  For more information about this feature or to comment with questions and ideas, navigate to [DevTools: Focus Mode UI](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DevTools/FocusMode/explainer.md).

:::image type="complex" source="../../media/2021/02/focus-mode-and-tooltips-help.msft.png" alt-text="Choose the Help (?) icon in the Activity Bar to display tooltips" lightbox="../../media/2021/02/focus-mode-and-tooltips-help.msft.png":::
   Choose the Help (`?`) icon in the **Activity Bar** to display tooltips
:::image-end:::


<!-- ====================================================================== -->
## Customize keyboard shortcuts in Settings

<!-- Title: Change keyboard shortcuts in Settings  -->
<!-- TODO:  Rachel's feedback is about the fact that this experimental feature is turned on by default, may have separate section in What's New for experimental features)  -->
<!-- Subtitle: Make DevTools work better for you by creating new keyboard shortcuts for any action in the DevTools.  -->

You may now customize the keyboard shortcut for any action in the DevTools.  To edit a keyboard shortcut, complete the following actions.

1.  Open the DevTools, and then choose **Settings** > **Shortcuts**.
1.  Choose the action you want to customize.
1.  Choose the Edit (![Edit Keyboard Shortcut icon](../../media/2021/02/edit-keyboard-shortcut-icon.msft.png)) icon.
1.  Select the keys you want to bind to the action.
1.  Choose the checkmark (![Checkmark Keyboard Shortcut icon](../../media/2021/02/checkmark-keyboard-shortcut-icon.msft.png)) icon.

For more information about customizing and editing shortcuts, navigate to [Customize keyboard shortcuts in DevTools](../../../customize/shortcuts.md).  To review real-time updates on this feature in the Chromium open-source project, navigate to Issue [174309](https://crbug.com/174309).

:::image type="complex" source="../../media/2021/02/custom-shortcut-pause-script-checkmark.msft.png" alt-text="Customize keyboard shortcuts in the DevTools Settings on Shortcuts with a shortcut in edit mode" lightbox="../../media/2021/02/custom-shortcut-pause-script-checkmark.msft.png":::
   Customize keyboard shortcuts in the [DevTools Settings](../../../customize/index.md#settings) on Shortcuts with a shortcut in edit mode
:::image-end:::


<!-- ====================================================================== -->
## Microsoft Edge DevTools for Visual Studio Code extension update 1.1.4

<!-- Title: Edge Devtools for Visual Studio code extension update 1.1.4  -->
<!-- Subtitle: Latest changes including a favicon is displayed next to each of the instances and console messages from the browser are displayed in the console of Visual Studio Code.  -->

The [Microsoft Edge Developer Tools for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools) extension version 1.1.4 for Microsoft Visual Studio Code now displays a favicon next to each of the DevTools instances.  Console messages from Microsoft Edge now display in the **DevTools Console** under **Output** of Microsoft Visual Studio Code.  Microsoft Visual Studio Code updates extensions automatically.  To manually update to version 1.1.4, navigate to [Update an extension manually](https://code.visualstudio.com/docs/editor/extension-gallery#_update-an-extension-manually).  You may file issues and contribute to the extension on the [vscode-edge-devtools](https://github.com/microsoft/vscode-edge-devtools) GitHub repo.

:::row:::
   :::column span="":::
      The following figure displays messages from an example webpage logged in the **Console** tool in Microsoft Edge.
   :::column-end:::
   :::column span="":::
      The following figure displays the same messages from the example webpage logged in the **DevTools Console** under **Output** of Microsoft Visual Studio Code.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2021/02/visual-studio-code-extension-log-microsoft-edge.msft.png" alt-text="Display a message in Console in Microsoft Edge DevTools" lightbox="../../media/2021/02/visual-studio-code-extension-log-microsoft-edge.msft.png":::
         Display a message in Console in Microsoft Edge DevTools
      :::image-end:::
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../../media/2021/02/visual-studio-code-extension-log-editor.msft.png" alt-text="Display the same message in the DevTools Console under Output of Microsoft Visual Studio Code" lightbox="../../media/2021/02/visual-studio-code-extension-log-editor.msft.png":::
         Display the same message in the DevTools Console under Output of Microsoft Visual Studio Code
      :::image-end:::
   :::column-end:::
:::row-end:::


<!-- ====================================================================== -->
## Improved CSS flexbox editing with visual flexbox editor and multiple overlays

<!-- Title: Try different CSS flexbox layouts with the visual flexbox editor  -->
<!-- Subtitle: In the Styles pane, choose the icon that appears next to display: flex to try different layout properties for flex containers.  -->

DevTools now has dedicated CSS flexbox debugging tools.  If the `display: flex` or `display: inline-flex` CSS style is applied to an HTML element, a `flex` icon displays next to that element in the **Elements** tool.  To display (or hide) a flex overlay on the webpage, choose the `flex` icon.  To review the history of this feature in the Chromium open-source project, navigate to Issues [1166710](https://crbug.com/1166710) and [1175699](https://crbug.com/1175699).

:::row:::
   :::column span="":::
      To open the **Flexbox** editor, navigate to the **Styles** pane and choose the new icon next to the `display: flex` or `display: inline-flex` style.  The **Flexbox** editor provides a quick way to edit the flexbox properties.
   :::column-end:::
   :::column span="":::
      In addition, the **Flexbox** section in the **Layout** pane displays all of the flexbox elements on the webpage.  You may toggle the overlay of each element.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2021/02/elements-styles-display-flex-window.msft.png" alt-text="CSS flexbox debugging tools" lightbox="../../media/2021/02/elements-styles-display-flex-window.msft.png":::
         CSS flexbox debugging tools
      :::image-end:::
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../../media/2021/02/elements-layout-flexbox-flexbox-overlays.msft.png" alt-text="Flexbox section in the Layout pane" lightbox="../../media/2021/02/elements-layout-flexbox-flexbox-overlays.msft.png":::
         **Flexbox** section in the **Layout** pane
      :::image-end:::
   :::column-end:::
:::row-end:::


<!-- ====================================================================== -->
## Keyboard navigation improvements for network requests

<!-- Title: Navigate the request initiator chain in the Network tool with the keyboard  -->
<!-- Subtitle: The Initiator pane may now be expanded or collapsed with the arrow keys.  -->

Previously, you were not able to expand or collapse the chain of requests using the arrow keys on the keyboard in the **Initiator** pane, unlike the DOM in the **Elements** tool.  When a network request is selected in the **Network** tool, the **Initiator** pane displays the chain of requests that initiated the currently selected request.

In Microsoft Edge version 90, you may expand or collapse the chain of requests using the arrow keys on the keyboard in the **Initiator** pane.  The focused network request in the chain is also now highlighted.  To learn more about initiators in the **Network** tool, navigate to [Display initiators and dependencies](../../../network/reference.md#display-initiators-and-dependencies).  To review the history of this feature in the Chromium open-source project, navigate to Issues [1158276](https://crbug.com/1158276) and [1160637](https://crbug.com/1160637).

:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2021/02/network-request-initiator-chain.msft.png" alt-text="Choose a Network request and choose the Initiator pane" lightbox="../../media/2021/02/network-request-initiator-chain.msft.png":::
         Choose a Network request and choose the **Initiator** pane
      :::image-end:::
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../../media/2021/02/network-request-initiator-chain-right-arrow-down-twice-down-arrow-thrice.msft.png" alt-text="Expand or collapse the request initiator chain and follow the highlighted row" lightbox="../../media/2021/02/network-request-initiator-chain-right-arrow-down-twice-down-arrow-thrice.msft.png":::
         Expand or collapse the request initiator chain and follow the highlighted row
      :::image-end:::
   :::column-end:::
:::row-end:::


<!-- ====================================================================== -->
## Filtering in the Console is more consistent

<!-- Title: Console improvements make filtering more consistent  -->
<!-- Subtitle: The Log Levels dropdown is more clearly disabled when using filters in the Console sidebar.  -->

While you filter with the [Console Sidebar](../../../console/reference.md#open-the-console-sidebar), the filters in the [Log Levels](../../../console/reference.md#filter-by-log-level) dropdown are not available.  Previously, the **Log Levels** dropdown highlighted when you hovered on it, even while a filter from the **Console Sidebar** was chosen.  In Microsoft Edge version 90, the **Log Levels** dropdown no longer highlights when you hover on it while a filter from the **Console Sidebar** is chosen.  To learn more about filtering in the **Console**, navigate to [Filter Messages](../../../console/reference.md#filter-messages).

:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2021/02/console-sidebar-default-levels-old.msft.png" alt-text="Previously, if you open the Console sidebar and hover on Default levels it was highlighted" lightbox="../../media/2021/02/console-sidebar-default-levels-old.msft.png":::
         Previously, if you open the **Console sidebar** and hover on **Default levels** it was highlighted
      :::image-end:::
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../../media/2021/02/console-sidebar-default-levels-new.msft.png" alt-text="Starting in Microsoft Edge 90, if you choose the Console sidebar and hover on Default levels, it does not highlight" lightbox="../../media/2021/02/console-sidebar-default-levels-new.msft.png":::
         Starting in Microsoft Edge 90, if you choose the **Console sidebar** and hover on **Default levels**, it does not highlight
      :::image-end:::
   :::column-end:::
:::row-end:::


<!-- ====================================================================== -->
## Announcements from the Chromium project

[!INCLUDE [contact DevTools team note](../../includes/chromium-whats-new-note.md)]

### The Console now escapes double quote characters

Previously, the **Console** did not output valid double quote (`"`) characters in JavaScript strings.  Starting in Microsoft Edge version 90, the **Console** outputs JavaScript strings using escaped double quote (`"`) characters.  To review the history of this feature in the Chromium open-source project, navigate to Issue [1178530](https://crbug.com/1178530).

:::image type="complex" source="../../media/2021/02/console-string-formatted-double-quotes.msft.png" alt-text="The Console outputs JavaScript strings using escaped double quote (&#0022;) characters" lightbox="../../media/2021/02/console-string-formatted-double-quotes.msft.png":::
   The **Console** outputs JavaScript strings using escaped double quote (`"`) characters
:::image-end:::

### Emulate the CSS color-gamut media feature

The [color-gamut](https://www.chromestatus.com/feature/5354410980933632) media query emulates the approximate range of colors supported by the browser and the device you are testing.  The dropdown under **Emulate CSS media feature color-gamut** contains color spaces that DevTools may emulate.  For example, to trigger a `color-gamut: p3` media query, choose **color-gamut: p3** from the dropdown.

To emulate the CSS color-gamut media feature, complete the following actions.

1.  Open the [Command Menu](../../../command-menu/index.md).
1.  Type `Rendering`.
1.  Run the **Show Rendering** command.
1.  Navigate to **Emulate CSS media feature color-gamut** and choose an option.

To learn more about the `color-gamut` feature, navigate to [Color Display Quality: the 'color-gamut' feature](https://drafts.csswg.org/mediaqueries-4#color-gamut).  To review the history of this feature in the Chromium open-source project, navigate to Issue [1073887](https://crbug.com/1073887).

:::image type="complex" source="../../media/2021/02/rendering-css-color-gamut.msft.png" alt-text="Emulate the CSS color-gamut media feature" lightbox="../../media/2021/02/rendering-css-color-gamut.msft.png":::
   Emulate the CSS color-gamut media feature
:::image-end:::

### Improved Progressive Web Apps tooling

#### PWA installability warning in the Console

The **Console** now displays a more detailed [Progressive Web Apps (PWA)](../../../../progressive-web-apps-chromium/index.md) installability warning message with a link to [Improving Progressive Web App offline support detection](https://developer.chrome.com/blog/improved-pwa-offline-detection).

:::image type="complex" source="../../media/2021/02/console-pwa-installability.msft.png" alt-text="PWA installability warning in Console tool" lightbox="../../media/2021/02/console-pwa-installability.msft.png":::
   PWA installability warning in **Console** tool
:::image-end:::

#### PWA description length warning in the Manifest pane

The **Manifest** pane now displays a warning message if the manifest description exceeds 324 characters.

:::image type="complex" source="../../media/2021/02/application-manifest-errors-and-warnings-truncated.msft.png" alt-text="PWA description truncate warning" lightbox="../../media/2021/02/application-manifest-errors-and-warnings-truncated.msft.png":::
   PWA description truncate warning
:::image-end:::

To review the history of this feature in the Chromium open-source project, navigate to Issues [965802](https://crbug.com/965802), [1146450](https://crbug.com/1146450), and [1169689](https://crbug.com/1169689).

### New Remote Address Space column in the Network tool

<!-- does not work in canary 90.0.813.0 -->
The new **Remote Address Space** column displays the network IP address space of each network resource.  To display the new Remote Address Space column, complete the following actions.

1.  Navigate to the **Network** tool.
1.  In the Requests table, hover on the header row, and open the contextual menu (right-click).  To learn how to add or remove columns from the Requests table, navigate to [Add or remove columns](../../../network/reference.md#add-or-remove-columns).
1.  Choose **Remote Address Space**.

The Requests table now displays a new column with the header named **Remote Address Space**.  To review the history of this feature in the Chromium open-source project, navigate to Issue [1128885](https://crbug.com/1128885).

:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2021/02/network-requests-contextual-menu-remote-address-space.msft.png" alt-text="In the contextual menu, choose Remote Address Space" lightbox="../../media/2021/02/network-requests-contextual-menu-remote-address-space.msft.png":::
         In the contextual menu, choose the **Remote Address Space**
      :::image-end:::
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../../media/2021/02/network-requests-remote-address-space.msft.png" alt-text="The Requests table now displays the Remote Address Space column" lightbox="../../media/2021/02/network-requests-remote-address-space.msft.png":::
         The Requests table now displays the **Remote Address Space** column
      :::image-end:::
   :::column-end:::
:::row-end:::

### Display allowed and disallowed features in the Frame details view

The Frame details view now displays a list of allowed and disallowed browser features controlled by the [Permissions Policy](https://github.com/w3c/webappsec-permissions-policy/blob/main/permissions-policy-explainer.md).  Permissions Policy is a web platform API that allows (or blocks) a webpage the use of browser features in an individual frame or in iframes that it embeds.  To review the history of this feature in the Chromium open-source project, navigate to Issue [1158827](https://crbug.com/1158827).

:::image type="complex" source="../../media/2021/02/application-frames-permissions-policy.msft.png" alt-text="Allowed and disallowed features based on the Permission Policy" lightbox="../../media/2021/02/application-frames-permissions-policy.msft.png":::
   Allowed and disallowed features based on the Permission Policy
:::image-end:::

### New SameParty column in the Cookies pane

The **Cookies** pane in the **Application** tool now displays the `SameParty` attribute for each cookie.  The `SameParty` attribute is a new boolean attribute to indicate whether a cookie is included in requests to origins of the same [First-Party Sets](https://github.com/privacycg/first-party-sets).  To review the history of this feature in the Chromium open-source project, navigate to Issue [1161427](https://crbug.com/1161427).

:::image type="complex" source="../../media/2021/02/application-storage-cookies-sameparty.msft.png" alt-text="SameParty column in the Cookies pane" lightbox="../../media/2021/02/application-storage-cookies-sameparty.msft.png":::
   **SameParty** column in the **Cookies** pane
:::image-end:::

### fn.displayName property in the Console tool is now deprecated

Previously, the `fn.displayName` property allowed you to control debug names for functions to display in `error.stack` and in DevTools stack traces.  Starting in Microsoft Edge version 90, the `fn.displayName` property is now deprecated, and replaced by the `fn.name` property.  Use the standard `Object.defineProperty` method to define the `fn.name` property.  To learn more about `fn.name`, navigate to [Function.name](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function/name).  To review the history of this feature in the Chromium open-source project, navigate to Issue [1177685](https://crbug.com/1177685).

:::image type="complex" source="../../media/2021/02/console-display-name-name.msft.png" alt-text="An example of the fn.name property to control debug names for functions" lightbox="../../media/2021/02/console-display-name-name.msft.png":::
   An example of the `fn.name` property to control debug names for functions
:::image-end:::

### Full accessibility tree view in the Elements tool

:::image type="icon" source="../../media/2020/06/experimental-tag-14px.msft.png":::

This experiment provides a **full accessibility tree view** in the **Elements** tool.  The [Accessibility](../../../accessibility/accessibility-tab.md) pane provides a partial accessibility tree view, that displays the direct ancestor chain from the root node to the inspected node.
After you turn on this experiment and reload the DevTools, choose one of the following buttons to switch the display in the Elements tool for all elements on the webpage.

*   To display the full accessibility tree view , choose the **Switch to Accessibility Tree view**.
*   To display the DOM tree view, choose the **Switch to DOM Tree view**.

To turn on the experiment, navigate to [Turning on experimental features](../../../experimental-features/index.md#turning-on-experimental-features) and choose the checkbox next to **Enable full accessibility tree view in Elements pane**.  To review the history of this feature in the Chromium open-source project, navigate to Issue [887173](https://crbug.com/887173).

:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2021/02/elements-switch-to-accessibility-tree-view.msft.png" alt-text="Display the DOM Tree view" lightbox="../../media/2021/02/elements-switch-to-accessibility-tree-view.msft.png":::
         Display the **DOM Tree view**
      :::image-end:::
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../../media/2021/02/elements-switch-to-dom-tree-view.msft.png" alt-text="Display the full accessibility tree view" lightbox="../../media/2021/02/elements-switch-to-dom-tree-view.msft.png":::
         Display the **Full Accessibility Tree view**
      :::image-end:::
   :::column-end:::
:::row-end:::


<!-- ====================================================================== -->
## Download the Microsoft Edge preview channels

If you are on Windows, Linux, or macOS, consider using the [Microsoft Edge preview channels](https://www.microsoftedgeinsider.com/download) as your default development browser.  The preview channels give you access to the latest DevTools features.


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/blog/new-in-devtools-90) and is authored by [Jecelyn Yeen](https://developers.google.com/web/resources/contributors#jecelyn-yeen) (Developer advocate, Chrome DevTools).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
