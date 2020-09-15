---
description: 3D View, Visual Studio integration with Microsoft Edge, and more.
title: What's new in DevTools (Microsoft Edge 81)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/11/2020 
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

# What's New In DevTools (Microsoft Edge 81)  

## Announcements from the Microsoft Edge DevTools team  

The following sections are a list of announcements you may have missed from the Microsoft Edge DevTools team! Check them out to try new features in the DevTools, Visual Studio Code extensions, and more.  To stay up to date on all the latest and greatest features in your developer tools, download the [Microsoft Edge preview channels][MicrosoftEdgePreviewChannels] and [follow us on Twitter][EdgeDevToolsTwitterAccount].  

### Accessibility improvements to the DevTools  

The DevTools team has contributed 170 changes to Chromium to address high-impact color contrast, keyboard, and screen reader issues in the DevTools.  Every developer building the web should be able to use the DevTools.  

:::image type="complex" source="../../images/2020/01/a11y-performance-tool.msft.gif" alt-text="The Performance tool in the DevTools with the keyboard navigation and screen reader improvements" lightbox="../../images/2020/01/a11y-performance-tool.msft.gif":::
   The **Performance** tool in the DevTools with the keyboard navigation and screen reader improvements  
:::image-end:::  

Want to learn how to make your web page accessible to all of your users?  Download the [Accessibility Insights][AccessibilityInsights] and [webhint][WebhintBrowserExtension] extensions for Microsoft Edge to get started.  

If you use screen readers or the keyboard to navigate around the DevTools, send us your feedback by [tweeting][PostTweetEdgeDevTools] at us or clicking the [Send Feedback](#getting-in-touch-with-microsoft-edge-devtools-team) icon!  

Chromium issue [#963183][CR963183]  

### Using the DevTools in other languages  

Many developers use other developer tools, like StackOverflow and Visual Studio Code, in their native language, not just in English.  We’re excited to announce localization for the DevTools, which you are now able to use in one of 10 languages besides English:  

:::row:::
   :::column span="":::
      Chinese \(Simplified\) - &#20013;&#25991;&#65288;&#31616;&#20307;&#65289;
   :::column-end:::
   :::column span="":::
      Chinese \(Traditional\) - &#20013;&#25991;&#65288;&#32321;&#39636;&#65289;
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
| Chinese (Simplified) - 中文(简体)（简体）| Chinese (Traditional) - 中文(繁體)（繁體）|  
| French – français | German - deutsch |  
| Italian - italiano | Portuguese - português |  
| Korean - 한국어 | Japanese - 日本語 |  
| Russian – русский | Spanish - español |  
-->  

The DevTools automatically match the language you use for Microsoft Edge in `edge://settings/languages`.  

If you want Microsoft Edge to be in one language and your DevTools to remain in English, press `F1` in the DevTools to open [Settings][Settings] and disable **Match browser language**.  

:::image type="complex" source="../../images/2020/01/localized-devtools.msft.png" alt-text="The DevTools in German" lightbox="../../images/2020/01/localized-devtools.msft.png":::
   The DevTools in German  
:::image-end:::  

**Console** messages are not localized.  Only the strings used in the DevTools UI are displayed in the language you use for Microsoft Edge.  

If you want to use the DevTools in a different language than the ones that are available, [tweet][PostTweetEdgeDevTools] at us or click the [Send Feedback](#getting-in-touch-with-microsoft-edge-devtools-team) icon.  

Chromium issue [#941561][CR941561]  

### webhint Microsoft Edge extension  

The webhint Microsoft Edge extension allows you to easily scan your web page and get feedback on accessibility, browser compatibility, security, performance, and more within the DevTools.  Read more at [https://webhint.io][Webhint].  

:::image type="complex" source="../../images/2020/01/webhint-browser-extension.msft.png" alt-text="The Hints tab in the DevTools when the webhint browser extension is installed" lightbox="../../images/2020/01/webhint-browser-extension.msft.png":::
   The **Hints** tab in the DevTools when the webhint browser extension is installed  
:::image-end:::  

[Try the webhint browser extension in Microsoft Edge][MicrosoftEdgeInsiderAddons].  Once you install the extension, open the DevTools and select the Hints tab.  From here, run a customizable site scan.  Head over to [webhint.io][WebhintBrowserExtension] to learn more.  

### 3D View  

Use the **3D View** to debug your web application by navigating through the [Document Object Model \(DOM\)][MDNDocumentObjectModel] or the [z-index][MDNZIndex] stacking context.  

:::image type="complex" source="../../images/2020/01/3dview.msft.png" alt-text="The 3D View in the DevTools" lightbox="../../images/2020/01/3dview.msft.png":::
   The 3D View in the DevTools  
:::image-end:::  

To access the 3D View, press `Ctrl` + `Shift` + `P`, type in **3D View** and select **Show 3D View**.  

We're working on the UI and adding more functionality to the 3D View, so please send us your [feedback](#getting-in-touch-with-microsoft-edge-devtools-team).  

Chromium issue [#987787][CR987787]  

### Visual Studio Code extensions  

The DevTools team has also released some extensions for [Visual Studio Code][VisualStudioCode] that let you use the power of the DevTools directly from your text editor! Check out the extensions below:  

#### Elements for Microsoft Edge  

Use the Elements tool from within Visual Studio Code by adding the [Elements for Microsoft Edge \(Chromium\)][VisualStudioMarketplaceElementsMicrosoftEdgeChromiumExtension] Visual Studio Code extension.  

:::image type="complex" source="../../images/2020/01/elements-for-edge.msft.png" alt-text="The Elements tool in Visual Studio Code using the Elements for Microsoft Edge extension" lightbox="../../images/2020/01/elements-for-edge.msft.png":::
   The **Elements** tool in Visual Studio Code using the Elements for Microsoft Edge extension  
:::image-end:::  

For more information, check out [Elements for Microsoft Edge Visual Studio Code extension][VisualStudioCodeElementEdgeExtension].  

#### Debugger for Microsoft Edge  

With the [Debugger for Microsoft Edge][VisualStudioMarketplaceDebuggerEdge] Visual Studio Code extension, debug JavaScript running in Microsoft Edge directly from Visual Studio Code.  

:::image type="complex" source="../../images/2020/01/vscode-debugger.msft.png" alt-text="The Debugger for Microsoft Edge Extension in Visual Studio Code" lightbox="../../images/2020/01/vscode-debugger.msft.png":::
   The Debugger for Microsoft Edge Extension in Visual Studio Code  
:::image-end:::  

For more information, check out [how to debug Microsoft Edge from Visual Studio Code][VisualStudioCodeDebuggerEdgeExtension].  

#### webhint  

The [webhint][VisualStudioMarketplaceWebhintExtension] Visual Studio Code extension uses `webhint` to improve your web page while you're writing it! This extension runs and reports diagnostics on your workspace files based on `webhint` analysis.  

:::image type="complex" source="../../images/2020/01/webhint-vscode-extension.msft.png" alt-text="The webhint Visual Studio Code extension analyzing a .tsx file in Visual Studio Code" lightbox="../../images/2020/01/webhint-vscode-extension.msft.png":::
   The webhint Visual Studio Code extension analyzing a `.tsx` file in Visual Studio Code  
:::image-end:::  

[Learn more about the Visual Studio Code webhint extension][WebhintVisualStudioCodeExtension].  

### Visual Studio integration  

In Visual Studio 2019 version 16.2 or later, use the Visual Studio debugger to debug JavaScript running in Microsoft Edge.  [Download Visual Studio 2019][MicrosoftVisualStudioDownloads] to try this feature out!  

:::image type="complex" source="../../images/2020/01/vs.msft.png" alt-text="Visual Studio with the option to launch your web app in Microsoft Edge Canary, Dev, or Beta" lightbox="../../images/2020/01/vs.msft.png":::
   Visual Studio with the option to launch your web app in Microsoft Edge Canary, Dev, or Beta  
:::image-end:::  

[Learn more about debugging Microsoft Edge from Visual Studio][MicrosoftVisualStudio].  

### Tracking prevention Console messages  

Tracking prevention is a unique feature in Microsoft Edge that protects you from being tracked by websites you haven't visited before.  The default tracking prevention setting is Balanced mode, which blocks 3rd party trackers and known malicious trackers for an experience that balances privacy and web compatibility.  To give you more insight into the compatibility of your web page when certain trackers are blocked, we've also added warning messages in the Console when a tracker is blocked.  

:::image type="complex" source="../../images/2020/01/tracking-prevention.msft.png" alt-text="Messages in the Console when tracking prevention blocks access to storage for a tracker" lightbox="../../images/2020/01/tracking-prevention.msft.png":::
   Messages in the Console when tracking prevention blocks access to storage for a tracker  
:::image-end:::  

[Read more about tracking prevention and the balance between privacy and web compatibility][TrackingPrevention].  

## Announcements from the Chromium project  

The following sections announce additional features available in Microsoft Edge 81 that were contributed to the open source Chromium project.  

### Moto G4 support in Device Mode  

After [enabling the Device Toolbar][DeviceToolbar], simulate the dimensions of a Moto G4 viewport from the **Device** list.  

:::image type="complex" source="../../images/2020/01/motog4.msft.png" alt-text="Simulating a Moto G4 viewport" lightbox="../../images/2020/01/motog4.msft.png":::
   Simulating a Moto G4 viewport  
:::image-end:::  

Click [Show Device Frame][DeviceFrame] to show the Moto G4 hardware around the viewport.  

:::image type="complex" source="../../images/2020/01/motog4frame.msft.png" alt-text="Showing the Moto G4 hardware" lightbox="../../images/2020/01/motog4frame.msft.png":::
   Showing the Moto G4 hardware  
:::image-end:::  

Related features:  

*   Open the [Command Menu][CommandMenu] and run the `Capture screenshot` command to take a screenshot of the viewport that includes the Moto G4 hardware (after enabling **Show Device Frame**).  
*   [Throttle the network and CPU][ThrottleNetworkAndCpu] to more accurately simulate a mobile user's web browsing conditions.  

Chromium issue [#924693][CR924693]  

### Cookie-related updates  

#### Blocked cookies in the Cookies pane  

The Cookies pane in the Application panel now displays blocked cookies with a yellow background.  

:::image type="complex" source="../../images/2020/01/blockedcookies.msft.png" alt-text="Blocked cookies in the Cookies pane of the Application panel" lightbox="../../images/2020/01/blockedcookies.msft.png":::
   Blocked cookies in the Cookies pane of the Application panel  
:::image-end:::  

Chromium issue [#1030258][CR1030258]  <!-- inaccessible  -->  

#### Cookie priority in the Cookie pane  

The Cookies tables in the Network and Application panels now include a **Priority** column.  

> [!CAUTION]
> Chromium-based browsers, like Microsoft Edge, are the only browsers that support cookie priority.  

Chromium issue [#1026879][CR1026879]  

#### Edit all cookie values  

All cells in the Cookie tables are editable now, except cells in the **Size** column because that column represents the network size of the cookie, in bytes.  See [Fields][CookiesFields] for an explanation of each column.  

:::image type="complex" source="../../images/2020/01/editcookie.msft.png" alt-text="Editing a cookie value" lightbox="../../images/2020/01/editcookie.msft.png":::
   Editing a cookie value  
:::image-end:::  

#### Copy as Node.js fetch to include cookie data  

Right-click a network request and select **Copy** > **Copy as Node.js fetch** to get a `fetch` expression that includes cookie data.  

:::image type="complex" source="../../images/2020/01/fetchcookies.msft.png" alt-text="Copy as Node.js fetch" lightbox="../../images/2020/01/fetchcookies.msft.png":::
   Copy as Node.js fetch  
:::image-end:::  

Chromium issue [#1029826][CR1029826]  

### More accurate web app manifest icons  

Previously, the Manifest pane in the Application panel sent its own requests in order to display web app manifest icons.  DevTools now shows the exact same manifest icon that Microsoft Edge uses.  

:::image type="complex" source="../../images/2020/01/manifesticons.msft.png" alt-text="Icons in the Manifest pane" lightbox="../../images/2020/01/manifesticons.msft.png":::
   Icons in the Manifest pane  
:::image-end:::  

Chromium issue [#985402][CR985402]  

### Hover over CSS content properties to see unescaped values  

Hover over the value of a `content` property to see the unescaped version of the value.  

For example, in this [demo][CSSContentDemo] when you inspect the `p::after` pseudo-element you see an escaped string in the Styles pane:  

:::image type="complex" source="../../images/2020/01/escapedstring.msft.png" alt-text="The escaped string" lightbox="../../images/2020/01/escapedstring.msft.png":::
   The escaped string  
:::image-end:::  

When you hover over the `content` value you see the unescaped value:  

:::image type="complex" source="../../images/2020/01/unescapedstring.msft.png" alt-text="The unescaped value" lightbox="../../images/2020/01/unescapedstring.msft.png":::
   The unescaped value  
:::image-end:::  

### More detailed source map errors in the Console  

The Console now provides more detail on why a source map failed to load or parse.  Previously it just provided an error without explaining what went wrong.  

:::image type="complex" source="../../images/2020/01/sourcemap.msft.png" alt-text="A source map loading error in the Console" lightbox="../../images/2020/01/sourcemap.msft.png":::
   A source map loading error in the Console  
:::image-end:::  

### Setting for disabling scrolling past the end of a file  

Open [Settings][Settings] and then disable **Preferences** > **Sources** > **Allow scrolling past end of file** to disable the default UI behavior that allows you to scroll well past the end of a file in the **Sources** panel.  

:::image type="complex" source="../../images/2020/01/settings.msft.png" alt-text="Disabling Allow scrolling past end of file" lightbox="../../images/2020/01/settings.msft.png":::
   Disabling **Allow scrolling past end of file** in Settings  
:::image-end:::  

:::image type="complex" source="../../images/2020/01/scrollingsources.msft.png" alt-text="Scrolling past the end of a file is now disabled in the Sources panel" lightbox="../../images/2020/01/scrollingsources.msft.png":::
   Scrolling past the end of a file is now disabled in the Sources panel  
:::image-end:::  

## Download the Microsoft Edge preview channels  

If you are on Windows or macOS, consider using the [Microsoft Edge preview channels][MicrosoftEdgePreviewChannels] as your default development browser.  The preview channels give you access to the latest DevTools features.  

## Getting in touch with Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../../includes/contact-whats-new-note.md)]  

<!-- links -->  

[DeviceToolbar]: /microsoft-edge/devtools-guide-chromium/device-mode/index#simulate-a-mobile-viewport "Simulate a mobile viewport - Simulate mobile devices with Device Mode in Microsoft Edge DevTools | Microsoft Docs"
[DeviceFrame]: /microsoft-edge/devtools-guide-chromium/device-mode/index#show-device-frame "Show device frame - Simulate mobile devices with Device Mode in Microsoft Edge DevTools | Microsoft Docs"
[CommandMenu]: /microsoft-edge/devtools-guide-chromium/command-menu/index "Run commands with the Microsoft Edge DevTools Command Menu | Microsoft Docs"  
[ThrottleNetworkAndCpu]: /microsoft-edge/devtools-guide-chromium/device-mode/index#throttle-the-network-and-cpu "Throttle the network and CPU - Simulate mobile devices with Device Mode in Microsoft Edge DevTools | Microsoft Docs"
[Settings]: /microsoft-edge/devtools-guide-chromium/customize/index#settings "Settings - Customize Microsoft Edge DevTools | Microsoft Docs"
[MicrosoftVisualStudio]: /microsoft-edge/visual-studio/index "Visual Studio | Microsoft Docs"  
[CookiesFields]: /microsoft-edge/devtools-guide-chromium/storage/cookies#fields "Fields - View, edit, and delete cookies with Microsoft Edge DevTools | Microsoft Docs"  

[VisualStudioCodeDebuggerEdgeExtension]: /microsoft-edge/visual-studio-code/debugger-for-edge "Debugger for Microsoft Edge Visual Studio Code extension"  
[VisualStudioCodeElementEdgeExtension]: /microsoft-edge/visual-studio-code/elements-for-edge "Elements for Microsoft Edge Visual Studio Code extension"  

[MicrosoftEdgePreviewChannels]: https://aka.ms/microsoftedge "Microsoft Edge Preview Channels"  

[VisualStudioCode]: https://aka.ms/vscode "Visual Studio Code"  
[VisualStudioMarketplaceDebuggerEdge]: https://aka.ms/debugger4code "Debugger for Microsoft Edge - Visual Studio Marketplace"  
[VisualStudioMarketplaceElementsMicrosoftEdgeChromiumExtension]: https://aka.ms/elements4code "Elements for Microsoft Edge \(Chromium\) - Visual Studio Marketplace"  
[VisualStudioMarketplaceWebhintExtension]: https://aka.ms/webhint4code "webhint - Visual Studio Marketplace"

[TrackingPrevention]: https://aka.ms/microsoftedge/tracking-prevention-blog "Improving Tracking Prevention in Microsoft Edge blog post"

[MicrosoftEdgeInsiderAddons]: https://aka.ms/webhint/edge-extension "Microsoft Edge Insider Addons"  
[MicrosoftVisualStudioDownloads]: https://aka.ms/vs/download "Download Visual Studio 2019 for Windows & Mac"  

[PostTweetEdgeDevTools]: https://aka.ms/tweet/edgedevtools "@EdgeDevTools | Post a Tweet"  

[CR924693]: https://crbug.com/924693 "Feature Request: Add Moto G4 To Device Mode List | Chromium Bugs"  
[CR1030258]: https://crbug.com/1030258 "CR 1030258 | Chromium Bugs"  
[CR1026879]: https://crbug.com/1026879 "Cookie tab in the dev console doesn't show priority anymore | Chromium Bugs"  
[CR1029826]: https://crbug.com/1029826 "network tab -> right click to request -> copy -> copy as fetch does not copy cookies | Chromium Bugs"  
[CR985402]: https://crbug.com/985402 "web app manifest icon error strings are confusing | Chromium Bugs"  
[CR963183]: https://crbug.com/963183 "DevTools are not WCAG compliant | Chromium Bugs"  
[CR941561]: https://crbug.com/941561 "Localizability of the DevTools | Chromium Bugs"  
[CR987787]: https://crbug.com/987787 "Dom 3D View | Chromium Bugs"  

[CSSContentDemo]: https://mathiasbynens.github.io/css-dbg-stories/css-escapes.html "Demo for unescaped CSS content"  

[GitHubMicrosoftDocsEdgeDeveloperNewIssue]: https://aka.ms/edgedevtoolsdocs/feedback "New Issue - MicrosoftDocs/edge-developer"  

[TheWebWeWant]: https://aka.ms/webwewant "The Web We Want"  
[AccessibilityInsights]: https://aka.ms/a11yinsights "Accessibility Insights"  
[MDNDocumentObjectModel]: https://developer.mozilla.org/docs/Web/API/Document_Object_Model "Document Object Model (DOM) | MDN"  
[MDNZIndex]: https://developer.mozilla.org/docs/Web/CSS/z-index "z-index | MDN"  
[EdgeDevToolsTwitterAccount]: https://aka.ms/twitter/edgedevtools "@EdgeDevTools Twitter account"  

[Webhint]: https://aka.ms/webhint "webhint"  

[WebhintBrowserExtension]: https://aka.ms/webhint/browser-extension "Webhint Browser Extension | webhint documentation"  
[WebhintVisualStudioCodeExtension]: https://aka.ms/webhint/code-extension "Webhint Visual Studio Code Extension | webhint documentation"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/updates/2020/01/devtools/index) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  