---
description: Accessibility improvements, using the DevTools in other languages, and more.
title: What's new in DevTools (Microsoft Edge 80)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/11/2021
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
# What's new in DevTools (Microsoft Edge 80)


<!-- ====================================================================== -->
## Announcements from the Microsoft Edge DevTools team

The following sections are a list of announcements you may have missed from the Microsoft Edge DevTools team.  Check out the announcements to try new features in the DevTools, Microsoft Visual Studio Code extensions, and more.  To stay up to date on all the latest and greatest features in your developer tools, download the [Microsoft Edge preview channels](https://aka.ms/microsoftedge) and [follow us on Twitter](https://aka.ms/twitter/edgedevtools).

### Accessibility improvements to the DevTools

The DevTools team has contributed 170 changes to Chromium to address high-impact color contrast, keyboard, and screen reader issues in the DevTools.  Every developer building the web should be able to use the DevTools.

:::image type="complex" source="../../images/2019/12/a11y-performance-tool.msft.gif" alt-text="The Performance tool in the DevTools with the keyboard navigation and screen reader improvements" lightbox="../../images/2019/12/a11y-performance-tool.msft.gif":::
   The **Performance** tool in the DevTools with the keyboard navigation and screen reader improvements
:::image-end:::

Want to learn how to make your web page accessible to all of your users?  Download the [Accessibility Insights](https://aka.ms/a11yinsights) and [webhint](https://aka.ms/webhint/browser-extension) extensions for Microsoft Edge to get started.

If you use screen readers or the keyboard to navigate around the DevTools, send your feedback by [tweeting](https://aka.ms/tweet/edgedevtools) at us or selecting the [Send Feedback](../../../contact.md) icon!

Chromium issue [#963183](https://crbug.com/963183)

### Using the DevTools in other languages

Many developers use other developer tools, like StackOverflow and Visual Studio Code, in their native language, not just in English.  We're excited to announce localization for the DevTools, which you are now able to use in one of 10 languages besides English:

:::row:::
   :::column span="":::
      Chinese (Simplified) - &#20013;&#25991;&#65288;&#31616;&#20307;&#65289;
   :::column-end:::
   :::column span="":::
      Chinese (Traditional) - &#20013;&#25991;&#65288;&#32321;&#39636;&#65289;
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      French – fran&#231;ais
   :::column-end:::
   :::column span="":::
      German - deutsch
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Italian - italiano
   :::column-end:::
   :::column span="":::
      Japanese - &#26085;&#26412;&#35486;
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Korean - &#54620;&#44397;&#50612;
   :::column-end:::
   :::column span="":::
      Portuguese - portugu&#234;s
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Russian – &#1088;&#1091;&#1089;&#1089;&#1082;&#1080;&#1081;
   :::column-end:::
   :::column span="":::
      Spanish - espa&#241;ol
   :::column-end:::
:::row-end:::

<!--
|  |  |
|:--- |:--- |
| Chinese (Simplified) - 中文（简体）| Chinese (Traditional) - 中文（繁體）|
| French – français | German - deutsch |
| Italian - italiano | Portuguese - português |
| Korean - 한국어 | Japanese - 日本語 |
| Russian – русский | Spanish - español |
-->

Go to `edge://flags` and set the **Enable localized Developer Tools** flag to **Enabled**.  Also set the **Developer Tools experiments** flag to **Enabled**.  Restart Microsoft Edge and open the DevTools.  <!-- Select `F1` in the DevTools or go to Settings > Experiments and check the **Match browser language** checkbox.  -->  The DevTools match the language you use for Microsoft Edge in `edge://settings/languages`.

:::image type="complex" source="../../images/2019/12/localized-devtools.msft.png" alt-text="The DevTools in German" lightbox="../../images/2019/12/localized-devtools.msft.png":::
   The DevTools in German
:::image-end:::

If you want to use the DevTools in a different language than the ones that are available, [tweet](https://aka.ms/tweet/edgedevtools) at us or choose the [Send Feedback](../../../contact.md) icon.

Chromium issue [#941561](https://crbug.com/941561)

### webhint Microsoft Edge extension

The webhint Microsoft Edge extension allows you to easily scan your web page and get feedback on accessibility, browser compatibility, security, performance, and more within the DevTools.  Read more at [https://webhint.io](https://aka.ms/webhint).

:::image type="complex" source="../../images/2019/12/webhint-browser-extension.msft.png" alt-text="The Hints tool in the DevTools when the webhint browser extension is installed" lightbox="../../images/2019/12/webhint-browser-extension.msft.png":::
   The **Hints** tool in the DevTools when the webhint browser extension is installed
:::image-end:::

[Try the webhint browser extension in Microsoft Edge](https://aka.ms/webhint/edge-extension).  Once you install the extension, open the DevTools and choose the **Hints** tool.  From here, run a customizable site scan.  Head over to [webhint.io](https://aka.ms/webhint/browser-extension) to learn more.

### 3D View

Use the **3D View** to debug your web application by navigating through the [Document Object Model (DOM)](https://developer.mozilla.org/docs/Web/API/Document_Object_Model) or the [z-index](https://developer.mozilla.org/docs/Web/CSS/z-index) stacking context.

:::image type="complex" source="../../images/2019/12/3dview.msft.png" alt-text="The 3D View in the DevTools" lightbox="../../images/2019/12/3dview.msft.png":::
   The **3D View** in the DevTools
:::image-end:::

To access the 3D View, go to `edge://flags` and ensure that the **Developer Tools experiments** flag is set to **Enabled**.  Restart Microsoft Edge and open the DevTools.  Select `F1` in the DevTools or open the **Settings** > **Experiments** section, and turn on the **Enable 3D View** checkbox.  Now, select `Ctrl` + `Shift` + `P`, type in **3D View** and select **Show 3D View**.

We're working on the UI and adding more functionality to the 3D View so please send us your [feedback](../../../contact.md).

Chromium issue [#987787](https://crbug.com/987787)

### Visual Studio Code extensions

The DevTools team has also released some extensions for [Visual Studio Code](https://aka.ms/vscode) that let you use the power of the DevTools directly from your text editor. Check out the following extensions.

#### Elements for Microsoft Edge

Use the Elements tool from within Visual Studio Code by adding the [Elements for Microsoft Edge ](https://aka.ms/elements4code) Visual Studio Code extension.

:::image type="complex" source="../../images/2019/12/elements-for-edge.msft.png" alt-text="The Elements tool in Visual Studio Code using the Elements for Microsoft Edge extension" lightbox="../../images/2019/12/elements-for-edge.msft.png":::
   The **Elements** tool in Visual Studio Code using the Elements for Microsoft Edge extension
:::image-end:::

For more information, check out [Elements for Microsoft Edge Visual Studio Code extension](../../../../visual-studio-code/elements-for-edge.md).

#### Debugger for Microsoft Edge

With the [Debugger for Microsoft Edge](https://aka.ms/debugger4code) Visual Studio Code extension, debug JavaScript running in Microsoft Edge directly from Visual Studio Code.

:::image type="complex" source="../../images/2019/12/vscode-debugger.msft.png" alt-text="The Debugger for Microsoft Edge Extension in Visual Studio Code" lightbox="../../images/2019/12/vscode-debugger.msft.png":::
   The Debugger for Microsoft Edge Extension in Visual Studio Code
:::image-end:::

For more information, check out [how to debug Microsoft Edge from Visual Studio Code](../../../../visual-studio-code/debugger-for-edge.md).

#### webhint

The [webhint](https://aka.ms/webhint4code) Visual Studio Code extension uses `webhint` to improve your web page while you're writing it! This extension runs and reports diagnostics on your workspace files based on `webhint` analysis.

:::image type="complex" source="../../images/2019/12/webhint-vscode-extension.msft.png" alt-text="The webhint Visual Studio Code extension analyzing a .tsx file in Visual Studio Code" lightbox="../../images/2019/12/webhint-vscode-extension.msft.png":::
   The webhint Visual Studio Code extension analyzing a `.tsx` file in Visual Studio Code
:::image-end:::

[Learn more about the Visual Studio Code webhint extension](https://aka.ms/webhint/code-extension).

### Visual Studio integration

In Visual Studio 2019 version 16.2 or later, use the Visual Studio debugger to debug JavaScript running in Microsoft Edge.  [Download Visual Studio 2019](https://aka.ms/vs/download) to try this feature out.

:::image type="complex" source="../../images/2019/12/vs.msft.png" alt-text="Visual Studio with the option to launch your web app in Microsoft Edge Canary, Dev, or Beta" lightbox="../../images/2019/12/vs.msft.png":::
   Visual Studio with the option to launch your web app in Microsoft Edge Canary, Dev, or Beta
:::image-end:::

[Read our blog post to learn how to debug Microsoft Edge from Visual Studio](https://aka.ms/vs/debug-edge).

### Tracking prevention Console messages

Tracking prevention is a unique feature in Microsoft Edge that blocks you from being tracked by a website before you visited it.  The default tracking prevention setting is Balanced mode, which blocks 3rd party trackers and known malicious trackers for an experience that balances privacy and web compatibility.  To give you more insight into the compatibility of your web page when certain trackers are blocked, The Microsoft Edge team added warning messages in the **Console** when a tracker is blocked.

:::image type="complex" source="../../images/2019/12/tracking-prevention.msft.png" alt-text="Messages in the Console when tracking prevention blocks access to storage for a tracker" lightbox="../../images/2019/12/tracking-prevention.msft.png":::
   Messages in the **Console** when tracking prevention blocks access to storage for a tracker
:::image-end:::

[Read more about tracking prevention and the balance between privacy and web compatibility](https://aka.ms/microsoftedge/tracking-prevention-blog).


<!-- ====================================================================== -->
## Announcements from the Chromium project

The following sections announce additional features available in Microsoft Edge 80 that were contributed to the open source Chromium project.

### Support for let and class redeclarations in the Console

The **Console** now supports redeclarations of `let` and `class` statements.  The inability to redeclare was a common annoyance for web developers who use the Console to experiment with new JavaScript code.

> [!WARNING]
> Redeclaring a `let` or `class` statement in a script outside of the Console or within a single Console input still causes a `SyntaxError`.

For example, previously, when re-declaring a local variable with `let`, the Console threw an error:

:::image type="complex" source="../../images/2019/12/letbefore.msft.png" alt-text="The Console in Microsoft Edge 79 showing that the let redeclaration fails" lightbox="../../images/2019/12/letbefore.msft.png":::
   The **Console** in Microsoft Edge 79 showing that the let re-declaration fails
:::image-end:::

Now, the Console allows the redeclaration:

:::image type="complex" source="../../images/2019/12/letafter.msft.png" alt-text="The Console in Microsoft Edge 80 showing that the let redeclaration succeeds" lightbox="../../images/2019/12/letafter.msft.png":::
   The **Console** in Microsoft Edge 80 showing that the let re-declaration succeeds
:::image-end:::

Chromium issue [#1004193](https://crbug.com/1004193)

### Improved WebAssembly debugging

DevTools has started to support the DWARF Debugging Standard, which means increased support for stepping over code, setting breakpoints, and resolving stack traces in your source languages within DevTools.

<!-- [TODO: Add this link back] -->
<!--Check out [Improved WebAssembly debugging in Microsoft Edge DevTools](201912Webassembly) for the full story.  -->

<!-- [TODO: Replace this image with screenshot in Edge] -->
<!--
:::image type="complex" source="../../images/2019/12/wasm.msft.png" alt-text="The new DWARF-powered WebAssembly debugging" lightbox="../../images/2019/12/wasm.msft.png":::
   The new DWARF-powered WebAssembly debugging
:::image-end:::
-->

### Network panel updates

#### Request Initiator Chains in the Initiator panel

You are now able to view the initiators and dependencies of a network request as a nested list.  This may help you understand why a resource was requested, or what network activity a certain resource (such as a script) caused.

:::image type="complex" source="../../images/2019/12/initiators.msft.png" alt-text="A Request Initiator Chain in the Initiator panel" lightbox="../../images/2019/12/initiators.msft.png":::
   A Request Initiator Chain in the **Initiator** panel
:::image-end:::

After [logging network activity in the Network panel](../../../network/index.md), select a resource and then go to the **Initiator** panel to view the **Request Initiator Chain**:

*   The **inspected resource** is bold.  In the screenshot above, `ai.2.min.js` is the inspected resource.
*   The resources above the inspected resource are the **initiators**.  In the screenshot above, `https://www.microsoftedgeinsider.com` is the initiator of `ai.2.min.js`.  In other words, `https://www.microsoftedgeinsider.com` caused the network request for `ai.2.min.js`.
*   The resources below the inspected resource are the **dependencies**.  In the screenshot above, `https://dc.services.visualstudio.com/v2/track` is a dependency of `ai.2.min.js`.  In other words, `ai.2.min.js` caused the network request for `https://dc.services.visualstudio.com/v2/track`.

> [!NOTE]
> Initiator and dependency information can also be accessed by holding `Shift` and then hovering over network resources.  See [View initiators and dependencies](../../../network/reference.md#display-initiators-and-dependencies).

Chromium issue [#842488](https://crbug.com/842488)

#### Highlight the selected network request in the Overview

After you choose a network resource in order to inspect it, the Network panel now puts a blue border around that resource in the **Overview**.  This is able to help you detect if the network request is happening earlier or later than expected.

:::image type="complex" source="../../images/2019/12/overview.msft.png" alt-text="The Overview pane highlighting the inspected resource" lightbox="../../images/2019/12/overview.msft.png":::
   The **Overview** pane highlighting the inspected resource
:::image-end:::

Chromium issue [#988253](https://crbug.com/988253)

#### URL and path columns in the Network panel

Use the new **Path** and **URL** columns in the **Network** tool to display the absolute path or full URL of each network resource.

:::image type="complex" source="../../images/2019/12/columns.msft.png" alt-text="The new Path and URL columns in the Network panel" lightbox="../../images/2019/12/columns.msft.png":::
   The new Path and URL columns in the **Network** tool
:::image-end:::

To display the new columns, hover on the **Waterfall** table header, open the contextual menu (righ-click), and choose **Path** or **URL**.

Chromium issue [#993366](https://crbug.com/993366)

#### Updated User-Agent strings

DevTools supports setting a custom User-Agent string through the **Network Conditions** panel.  The User-Agent string affects the `User-Agent` HTTP header attached to network resources, and also the value of `navigator.userAgent`.

The predefined User-Agent strings have been updated to reflect modern browser versions.

:::image type="complex" source="../../images/2019/12/useragent.msft.png" alt-text="The User Agent menu in the Network Conditions panel" lightbox="../../images/2019/12/useragent.msft.png":::
   The User Agent menu in the **Network Conditions** panel
:::image-end:::

To access **Network Conditions**, [open the Command Menu](../../../command-menu/index.md) and run the `Show Network Conditions` command.

> [!NOTE]
> You may also [set User-Agent strings in Device Mode](../../../device-mode/index.md#simulate-a-mobile-viewport).

Chromium issue [#1029031](https://crbug.com/1029031)

### Audits panel updates

#### New configuration UI

The configuration UI has a new, responsive design, and the throttling configuration options have been simplified.  For more information on the throttling UI changes, see [Audits Panel Throttling](https://github.com/GoogleChrome/lighthouse/blob/master/docs/throttling.md#devtools-audits-panel-throttling).

:::image type="complex" source="../../images/2019/12/start.msft.png" alt-text="The new configuration UI" lightbox="../../images/2019/12/start.msft.png":::
   The new configuration UI
:::image-end:::

### Coverage tool updates

#### Per-function or per-block coverage modes

The [Coverage](../../../coverage/index.md) tool has a new dropdown menu that lets you specify whether code coverage data should be collected **per function** or **per block**.  **Per block** coverage is more detailed but also far more expensive to collect.  DevTools uses **per function** coverage by default now.

> [!CAUTION]
> You may notice large code coverage differences in HTML files depending on whether you use **per function** or **per block** mode.  When using **per function** mode, inline scripts in HTML files are treated as functions.  If the script runs at all then DevTools marks the entire script as used code.  Only if the script does not run at all does DevTools mark the script as unused code.

:::image type="complex" source="../../images/2019/12/modes.msft.png" alt-text="The coverage mode dropdown menu" lightbox="../../images/2019/12/modes.msft.png":::
   The coverage mode dropdown menu
:::image-end:::

#### Coverage must now be initiated by a page refresh

Toggling code coverage without a page refresh has been removed because the coverage data was unreliable.  For example, a function may be reported as unused if the runtime was a long time ago and the V8 garbage collector has cleaned it up.

Chromium issue [#1004203](https://crbug.com/1004203)


<!-- ====================================================================== -->
## Download the Microsoft Edge preview channels

If you are on Windows or macOS, consider using the [Microsoft Edge preview channels](https://aka.ms/microsoftedge) as your default development browser.  The preview channels give you access to the latest DevTools features.


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/blog/new-in-devtools-80) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
