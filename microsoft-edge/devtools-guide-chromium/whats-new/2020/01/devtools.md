---
title: What's new in DevTools (Microsoft Edge 81)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/20/2020
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

The following sections are a list of announcements you may have missed from the Microsoft Edge DevTools team! Check them out to try new features in the DevTools, VS Code extensions, and more.  To stay up to date on all the latest and greatest features in your developer tools, download the [Microsoft Edge preview channels][MicrosoftEdgePreviewChannels] and [follow us on Twitter][EdgeDevToolsTwitterAccount].  

### Accessibility improvements to the DevTools  

The DevTools team has contributed 170 changes to Chromium to address high-impact color contrast, keyboard, and screen reader issues in the DevTools.  Every developer building the web should be able to use the DevTools.  

> ##### Figure 1  
> The Performance tool in the DevTools with the keyboard navigation and screen reader improvements  
> ![The Performance tool in the DevTools with the keyboard navigation and screen reader improvements][ImagePerformanceToolKeyboardReaderImprovements]  

Want to learn how to make your web page accessible to all of your users?  Download the [Accessibility Insights][AccessibilityInsights] and [webhint][WebhintBrowserExtension] extensions for Microsoft Edge to get started.  

If you use screen readers or the keyboard to navigate around the DevTools, send us your feedback by [tweeting][PostTweetEdgeDevTools] at us or clicking the [Feedback](#feedback) icon!  

Chromium issue [#963183][crbug963183]  

### Using the DevTools in other languages  

Many developers use other developer tools, like StackOverflow and VS Code, in their native language, not just in English.  We’re excited to announce localization for the DevTools, which you are now able to use in one of 10 languages besides English:  

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

> ##### Figure 2  
> The DevTools in German  
> ![The DevTools in German][ImageLocalizedGerman]  

**Console** messages are not localized.  Only the strings used in the DevTools UI are displayed in the language you use for Microsoft Edge.  

If you want to use the DevTools in a different language than the ones that are available, [tweet][PostTweetEdgeDevTools] at us or click the [Feedback](#feedback) icon.  

Chromium issue [#941561][crbug941561]  

### webhint Microsoft Edge extension  

The webhint Microsoft Edge extension allows you to easily scan your web page and get feedback on accessibility, browser compatibility, security, performance, and more within the DevTools.  Read more at [https://webhint.io][Webhint].  

> ##### Figure 3  
> The Hints tab in the DevTools when the webhint browser extension is installed  
> ![The Hints tab in the DevTools when the webhint browser extension is installed][ImageHintsTabWebhintExtension]  

[Try the webhint browser extension in Microsoft Edge][MicrosoftEdgeInsiderAddons].  Once you install the extension, open the DevTools and select the Hints tab.  From here, run a customizable site scan.  Head over to [webhint.io][WebhintBrowserExtension] to learn more.  

### 3D View  

Use the **3D View** to debug your web application by navigating through the [Document Object Model \(DOM\)][MDNDocumentObjectModel] or the [z-index][MDNZIndex] stacking context.  

> ##### Figure 4  
> The 3D View in the DevTools  
> ![The 3D View in the DevTools][Image3DView]  

To access the 3D View, press `Ctrl` + `Shift` + `P`, type in **3D View** and select **Show 3D View**.  

We're working on the UI and adding more functionality to the 3D View, so please send us your [feedback](#feedback).  

Chromium issue [#987787][crbug987787]  

### Visual Studio Code extensions  

The DevTools team has also released some extensions for [Visual Studio Code \(VS Code\)][VisualStudioCode] that let you use the power of the DevTools directly from your text editor! Check out the extensions below:  

#### Elements for Microsoft Edge  

Use the Elements tool from within VS Code by adding the [Elements for Microsoft Edge \(Chromium\)][VisualStudioMarketplaceElementsMicrosoftEdgeChromiumExtension] VS Code extension.  

> ##### Figure 5  
> The Elements tool in VS Code using the Elements for Microsoft Edge extension
> ![The Elements tool in VS Code using the Elements for Microsoft Edge extension][ImageElementsVisualStudioCode]  

For more information, check out [Elements for Microsoft Edge VS Code extension][VisualStudioCodeElementEdgeExtension].  

#### Debugger for Microsoft Edge  

With the [Debugger for Microsoft Edge][VisualStudioMarketplaceDebuggerEdge] VS Code extension, debug JavaScript running in Microsoft Edge directly from VS Code!  

> ##### Figure 6  
> The Debugger for Microsoft Edge Extension in VS Code  
> ![The Debugger for Microsoft Edge Extension in VS Code][ImageDebuggerExtensionVisualStudioCode]  

For more information, check out [how to debug Microsoft Edge from VS Code][VisualStudioCodeDebuggerEdgeExtension].  

#### webhint  

The [webhint][VisualStudioMarketplaceWebhintExtension] VS Code extension uses `webhint` to improve your web page while you're writing it! This extension runs and reports diagnostics on your workspace files based on `webhint` analysis.  

> ##### Figure 7  
> The webhint VS Code extension analyzing a .tsx file in VS Code  
> ![The webhint VS Code extension analyzing a .tsx file in VS Code][ImageWebhintVisualStudioCodeExtensionWorkspace]  

[Learn more about the VS Code webhint extension][WebhintVisualStudioCodeExtension].  

### Visual Studio integration  

In Visual Studio 2019 version 16.2 or later, use the Visual Studio debugger to debug JavaScript running in Microsoft Edge.  [Download Visual Studio 2019][MicrosoftVisualStudioDownloads] to try this feature out!  

> ##### Figure 8  
> Visual Studio with the option to launch your web app in Microsoft Edge Canary, Dev, or Beta  
> ![Visual Studio with the option to launch your web app in Microsoft Edge Canary, Dev, or Beta][ImageVisualStudioLaunchWebApp]  

[Learn more about debugging Microsoft Edge from Visual Studio][MicrosoftVisualStudio].  

### Tracking prevention Console messages  

Tracking prevention is a unique feature in Microsoft Edge that protects you from being tracked by websites you haven't visited before.  The default tracking prevention setting is Balanced mode, which blocks 3rd party trackers and known malicious trackers for an experience that balances privacy and web compatibility.  To give you more insight into the compatibility of your web page when certain trackers are blocked, we've also added warning messages in the Console when a tracker is blocked.  

> ##### Figure 9  
> Messages in the Console when tracking prevention blocks access to storage for a tracker  
> ![Messages in the Console when tracking prevention blocks access to storage for a tracker][ImageTrackingPrevention]  

[Read more about tracking prevention and the balance between privacy and web compatibility][TrackingPrevention].



## Announcements from the Chromium project  

The following sections announce additional features available in Microsoft Edge 81 that were contributed to the open source Chromium project.  

### Moto G4 support in Device Mode 

After [enabling the Device Toolbar][DeviceToolbar], simulate the dimensions of a Moto G4 viewport from the **Device** list.  

> ##### Figure 10  
> Simulating a Moto G4 viewport  
> ![Simulating a Moto G4 viewport][ImageMotoG4]  

Click [Show Device Frame][DeviceFrame] to show the Moto G4 hardware around the viewport.  

> ##### Figure 11  
> Showing the Moto G4 hardware  
> ![Showing the Moto G4 hardware][ImageMotoG4Frame]  

Related features:  

*   Open the [Command Menu][CommandMenu] and run the `Capture screenshot` command to take a screenshot of the viewport that includes the Moto G4 hardware (after enabling **Show Device Frame**).  
*   [Throttle the network and CPU][ThrottleNetworkAndCpu] to more accurately simulate a mobile user's web browsing conditions.  

Chromium issue [#924693][crbug924693]  

### Cookie-related updates   

#### Blocked cookies in the Cookies pane   

The Cookies pane in the Application panel now displays blocked cookies with a yellow background.  

> ##### Figure 12  
> Blocked cookies in the Cookies pane of the Application panel  
> ![Blocked cookies in the Cookies pane of the Application panel][ImageBlockedCookies]  

Chromium issue [#1030258][crbug1030258]  

#### Cookie priority in the Cookie pane   

The Cookies tables in the Network and Application panels now include a **Priority** column.  

> [!CAUTION]
> Chromium-based browsers, like Microsoft Edge, are the only browsers that support cookie priority.  

Chromium issue [#1026879][crbug1026879]  

#### Edit all cookie values   

All cells in the Cookie tables are editable now, except cells in the **Size** column because that column represents the network size of the cookie, in bytes.  See [Fields][CookiesFields] for an explanation of each column.  

> ##### Figure 13  
> Editing a cookie value  
> ![Editing a cookie value][ImageEditCookie]  

#### Copy as Node.js fetch to include cookie data   

Right-click a network request and select **Copy** > **Copy as Node.js fetch** to get a `fetch` expression that includes cookie data.  

> ##### Figure 14  
> Copy as Node.js fetch  
> ![Copy as Node.js fetch][ImageCopyFetch]  

Chromium issue [#1029826][crbug1029826]  

### More accurate web app manifest icons   

Previously, the Manifest pane in the Application panel sent its own requests in order to display web app manifest icons.  DevTools now shows the exact same manifest icon that Microsoft Edge uses.  

> ##### Figure 15  
> Icons in the Manifest pane  
> ![Icons in the Manifest pane][ImageManifestIcon]   

Chromium issue [#985402][crbug985402]  

### Hover over CSS content properties to see unescaped values   

Hover over the value of a `content` property to see the unescaped version of the value.  

For example, in this [demo][CSSContentDemo] when you inspect the `p::after` pseudo-element you see an escaped string in the Styles pane:  

> ##### Figure 16  
> The escaped string  
> ![The escaped string][ImageEscapedString]   

When you hover over the `content` value you see the unescaped value:  

> ##### Figure 17  
> The unescaped value  
> ![The unescaped value][ImageUnescapedString]   

### More detailed source map errors in the Console   

The Console now provides more detail on why a source map failed to load or parse.  Previously it just provided an error without explaining what went wrong.  

> ##### Figure 18  
> A source map loading error in the Console  
> ![A source map loading error in the Console][ImageSourcemapError]  

### Setting for disabling scrolling past the end of a file   

Open [Settings][Settings] and then disable **Preferences** > **Sources** > **Allow scrolling past end of file** to disable the default UI behavior that allows you to scroll well past the end of a file in the **Sources** panel.  

> ##### Figure 19  
> Disabling **Allow scrolling past end of file** in Settings  
> ![Disabling Allow scrolling past end of file][ImageSettings]  

> ##### Figure 20  
> Scrolling past the end of a file is now disabled in the Sources panel  
> ![Scrolling past the end of a file is now disabled in the Sources panel][ImageScroll]  

## Feedback   



To discuss the new features and changes in this post, or anything else related to DevTools:  

*   Send your feedback using the **Feedback** icon in the DevTools  

> ##### Figure 21  
> The **Feedback** icon in the Microsoft Edge DevTools  
> ![The **Feedback** icon in the Microsoft Edge DevTools][ImageFeedbackIcon]  

*   Tweet at [@EdgeDevTools][PostTweetEdgeDevTools]  
*   Submit a suggestion to [The Web We Want][TheWebWeWant]  
*   File bugs on this document in the [edge-developer][GitHubMicrosoftDocsEdgeDeveloperNewIssue] repository  

## Download the Microsoft Edge preview channels   

If you are on Windows or macOS, consider using the [Microsoft Edge preview channels][MicrosoftEdgePreviewChannels] as your default development browser.  The preview channels give you access to the latest DevTools features.  

<!-- <<../../_shared/devtools-feedback.md>>

<<../../_shared/canary.md>>

<<../../_shared/discover.md>> -->



<!-- image links -->  

[ImagePerformanceToolKeyboardReaderImprovements]: ../../images/2020/01/a11y-performance-tool.msft.gif "Figure 1: The Performance tool in the DevTools with the keyboard navigation and screen reader improvements"  
[ImageLocalizedGerman]: ../../images/2020/01/localized-devtools.msft.png "Figure 2: The DevTools in German"  
[ImageHintsTabWebhintExtension]: ../../images/2020/01/webhint-browser-extension.msft.png "Figure 3: The Hints tab in the Microsoft Edge DevTools when the webhint browser extension is installed"  
[Image3DView]: ../../images/2020/01/3dview.msft.png "Figure 4: The 3D View in the Microsoft Edge DevTools"  
[ImageElementsVisualStudioCode]: ../../images/2020/01/elements-for-edge.msft.png "Figure 5: The Elements tool in VS Code using the Elements for Microsoft Edge Extension"  
[ImageDebuggerExtensionVisualStudioCode]: ../../images/2020/01/vscode-debugger.msft.png "Figure 6: The Debugger for Microsoft Edge Extension in VS Code"  
[ImageWebhintVisualStudioCodeExtensionWorkspace]: ../../images/2020/01/webhint-vscode-extension.msft.png "Figure 7: The webhint VS Code extension analyzing a .tsx files in VS Code"  
[ImageVisualStudioLaunchWebApp]: ../../images/2020/01/vs.msft.png "Figure 8: Visual Studio with the option to launch your web app in Microsoft Edge Canary, Dev, or Beta"  
[ImageTrackingPrevention]: ../../images/2020/01/tracking-prevention.msft.png "Figure 9: Messages in the Console when tracking prevention blocks access to storage for a tracker" 
[ImageMotoG4]: ../../images/2020/01/motog4.msft.png "Figure 10: Simulating a Moto G4 viewport" 
[ImageMotoG4Frame]: ../../images/2020/01/motog4frame.msft.png "Figure 11: Showing the Moto G4 hardware" 
[ImageBlockedCookies]: ../../images/2020/01/blockedcookies.msft.png "Figure 12: Blocked cookies in the Cookies pane of the Application panel"
[ImageEditCookie]: ../../images/2020/01/editcookie.msft.png "Figure 13: Editing a cookie value"
[ImageCopyFetch]: ../../images/2020/01/fetchcookies.msft.png "Figure 14: Copy as Node.js fetch"
[ImageManifestIcon]: ../../images/2020/01/manifesticons.msft.png "Figure 15: Icons in the Manifest pane"
[ImageEscapedString]: ../../images/2020/01/escapedstring.msft.png "Figure 16: The escaped string"
[ImageUnescapedString]: ../../images/2020/01/unescapedstring.msft.png "Figure 17: The unescaped value"
[ImageSourcemapError]: ../../images/2020/01/sourcemap.msft.png "Figure 18: A source map loading error in the Console"
[ImageSettings]: ../../images/2020/01/settings.msft.png "Figure 19: Disabling Allow scrolling past end of file in Settings"
[ImageScroll]: ../../images/2020/01/scrollingsources.msft.png "Figure 20: Scrolling past the end of a file is now disabled in the Sources panel"
[ImageFeedbackIcon]: ../../images/2020/01/feedback-icon.msft.png "Figure 21: The **Feedback** icon in the Microsoft Edge DevTools"


<!-- links -->  

[DeviceToolbar]: ../../../device-mode/index.md#simulate-a-mobile-viewport "Simulate a mobile viewport with Device Mode in Microsoft Edge DevTools"
[DeviceFrame]: ../../../device-mode/index.md#show-device-frame "Select Show device frame to show the physical device frame around the viewport."
[CommandMenu]: ../../../command-menu/index.md "Run Commands With The Microsoft Edge DevTools Command Menu"  
[ThrottleNetworkAndCpu]: ../../../device-mode/index.md#throttle-the-network-and-cpu "Throttle network and CPU to more accurately simulate a mobile user's web browsing conditions."
[crbug924693]: https://crbug.com/924693 "924693: Feature Request: Add Moto G4 To Device Mode List"
[crbug1030258]: https://crbug.com/1030258 "1030258"
[crbug1026879]: https://crbug.com/1026879 "1026879: Cookie tab in the dev console doesn't show priority anymore"
[CookiesFields]: ../../../storage/cookies.md#fields "The fields in the Cookies table"
[crbug1029826]: https://crbug.com/1029826 "1029826: network tab -> right click to request -> copy -> copy as fetch does not copy cookies"
[crbug985402]: https://crbug.com/985402 "985402: web app manifest icon error strings are confusing"
[CSSContentDemo]: https://mathiasbynens.github.io/css-dbg-stories/css-escapes.html "Demo for unescaped CSS content"
[Settings]: ../../../customize/index.md#settings "Customize Microsoft Edge DevTools with Settings"
[PostTweetEdgeDevTools]: https://aka.ms/tweet/edgedevtools "@EdgeDevTools | Post a Tweet"  
[GitHubMicrosoftDocsEdgeDeveloperNewIssue]: https://aka.ms/edgedevtoolsdocs/feedback "New Issue - MicrosoftDocs/edge-developer"  
[TheWebWeWant]: https://aka.ms/webwewant "The Web We Want"
[MicrosoftEdgePreviewChannels]: https://aka.ms/microsoftedge "Microsoft Edge Preview Channels"  
[VisualStudioCodeDebuggerEdgeExtension]: ../../../../visual-studio-code/debugger-for-edge.md "Debugger for Microsoft Edge VS Code extension"  
[VisualStudioCodeElementEdgeExtension]: ../../../../visual-studio-code/elements-for-edge.md "Elements for Microsoft Edge VS Code extension"  
[crbug963183]: https://crbug.com/963183 "963183 - DevTools are not WCAG compliant"
[crbug941561]: https://crbug.com/941561 "941561 - Localizability of the DevTools"
[crbug987787]: https://crbug.com/987787 "987787 -  Dom 3D View"
[AccessibilityInsights]: https://aka.ms/a11yinsights "Accessibility Insights"  
[MicrosoftEdgeInsiderAddons]: https://aka.ms/webhint/edge-extension "Microsoft Edge Insider Addons"  
[MicrosoftVisualStudio]: ../../../../visual-studio/index.md "Visual Studio"  
[MicrosoftVisualStudioDownloads]: https://aka.ms/vs/download "Download Visual Studio 2019 for Windows \& Mac"  
[MDNDocumentObjectModel]: https://developer.mozilla.org/docs/Web/API/Document_Object_Model "Document Object Model (DOM) | MDN"  
[MDNZIndex]: https://developer.mozilla.org/docs/Web/CSS/z-index "z-index | MDN"  
[EdgeDevToolsTwitterAccount]: https://aka.ms/twitter/edgedevtools "@EdgeDevTools Twitter account"
[VisualStudioCode]: https://aka.ms/vscode "Visual Studio Code"  
[VisualStudioMarketplaceDebuggerEdge]: https://aka.ms/debugger4code "Debugger for Microsoft Edge - Visual Studio Marketplace"  
[VisualStudioMarketplaceElementsMicrosoftEdgeChromiumExtension]: https://aka.ms/elements4code "Elements for Microsoft Edge \(Chromium\) - Visual Studio Marketplace"  
[VisualStudioMarketplaceWebhintExtension]: https://aka.ms/webhint4code "webhint - Visual Studio Marketplace"
[Webhint]: https://aka.ms/webhint "webhint"  
[WebhintBrowserExtension]: https://aka.ms/webhint/browser-extension "Webhint Browser Extension | webhint documentation"  
[WebhintVisualStudioCodeExtension]: https://aka.ms/webhint/code-extension "Webhint VS Code Extension | webhint documentation"  
[TrackingPrevention]: https://aka.ms/microsoftedge/tracking-prevention-blog "Improving Tracking Prevention in Microsoft Edge blog post"

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/updates/2020/01/devtools/index) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools & Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  