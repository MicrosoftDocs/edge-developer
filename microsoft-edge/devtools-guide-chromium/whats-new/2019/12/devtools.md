---
title: What's new in DevTools (Microsoft Edge 80)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/17/2020
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



## Announcements from the Microsoft Edge DevTools team

The following sections are a list of announcements you may have missed from the Microsoft Edge DevTools team! We're excited for you to try new features in the DevTools, VS Code extensions, and more. To stay up to date on all the latest and greatest features in your developer tools, download the [Microsoft Edge preview channels][MicrosoftEdgePreviewChannels] and [follow us on Twitter][EdgeDevToolsTwitterAccount].

### Accessibility improvements to the DevTools  

We've contributed 170 changes to Chromium to address high-impact color contrast, keyboard, and screen reader issues in the DevTools. We want to enable every developer building the web to use the DevTools.

> ##### Figure 1  
> The Performance tool in the DevTools with the keyboard navigation and screen reader improvements  
> ![The Performance tool in the DevTools with the keyboard navigation and screen reader improvements][ImagePerformanceToolKeyboardReaderImprovements]  

Want to learn how to make your web page accessible to all of your users?  Download the [Accessibility Insights][AccessibilityInsights] and [webhint][WebhintBrowserExtension] extensions for Microsoft Edge to get started. 

If you use screen readers or the keyboard to navigate around the DevTools, we're eager to hear your feedback so [tweet][PostTweetEdgeDevTools] at us or click the [Feedback](#feedback) icon! 

Chromium issue [#963183][crbug963183]

### Using the DevTools in other languages  
When we looked at data from other developer tools like StackOverflow and VS Code, we learned
that many developers use development tools in their native language, not just in English. We’re excited to announce localization for the DevTools, which you can now use in one of 10 languages besides English:

| | |
| -------- | ---- |
| Chinese (Simplified) - 中文(简体)（简体）| Chinese (Traditional) - 中文(繁體)（繁體）|
| French – français | German - deutsch |
| Italian - italiano | Portuguese - português | 
| Korean - 한국어 | Japanese - 日本語 |
| Russian – русский | Spanish - español |

Navigate to `edge://flags` and set the **Enable localized Developer Tools** flag to **Enabled**. Also set the **Developer Tools experiments** flag to **Enabled**.  Restart Microsoft Edge and open the DevTools.  <!-- Press `F1` in the DevTools or go to Settings > Experiments and check the **Match browser language** checkbox.  -->  The DevTools match the language you use for Microsoft Edge in `edge://settings/languages`.

> ##### Figure 2  
> The DevTools in German  
> ![The DevTools in German][ImageLocalizedGerman]  

If you want to use the DevTools in a different language than the ones that are available, let us know by [tweeting][PostTweetEdgeDevTools] at us or clicking the [Feedback](#feedback) icon.  

Chromium issue [#941561][crbug941561]

### webhint Microsoft Edge extension  

The webhint Microsoft Edge extension allows you to easily scan your web page and get feedback on accessibility, browser compatibility, security, performance, and more within the DevTools.  Read more at [https://webhint.io][Webhint].  

> ##### Figure 3  
> The Hints tab in the DevTools when the webhint browser extension is installed  
> ![The Hints tab in the DevTools when the webhint browser extension is installed][ImageHintsTabWebhintExtension]  

[Try the webhint browser extension in Microsoft Edge][MicrosoftEdgeInsiderAddons]. Once you install the extension, open the DevTools and select the Hints tab. From here, you can run a customizable site scan. Head over to [webhint.io][WebhintBrowserExtension] to learn more.

### 3D View  

Use the **3D View** to debug your web application by navigating through the [Document Object Model \(DOM\)][MDNDocumentObjectModel] or the [z-index][MDNZIndex] stacking context.  

> ##### Figure 4  
> The 3D View in the DevTools  
> ![The 3D View in the DevTools][Image3DView]  

To access the 3D View, navigate to `edge://flags` and ensure that the **Developer Tools experiments** flag is set to **Enabled**.  Restart Microsoft Edge and open the DevTools.  Press `F1` in the DevTools or go to **Settings**, navigate to **Experiments** section, and check the **Enable 3D View** checkbox. Now, press `Ctrl` + `Shift` + `P`, type in **3D View** and select **Show 3D View**.  

We're working on the UI and adding more functionality to the 3D View so please send us your [feedback](#feedback).

Chromium issue [#987787][crbug987787]

### Visual Studio Code extensions  

The DevTools team has also released some extensions for [Visual Studio Code \(VS Code\)][VisualStudioCode] that let you use the power of the DevTools directly from your text editor! Check out the extensions below:  

#### Elements for Microsoft Edge  

By adding the [Elements for Microsoft Edge \(Chromium\)][VisualStudioMarketplaceElementsMicrosoftEdgeChromiumExtension] VS Code extension, you can use the Elements tool from within VS Code.

> ##### Figure 5  
> The Elements tool in VS Code using the Elements for Microsoft Edge extension
> ![The Elements tool in VS Code using the Elements for Microsoft Edge extension][ImageElementsVisualStudioCode]  

For more information, check out [Elements for Microsoft Edge VS Code extension][VisualStudioCodeElementEdgeExtension].  

#### Debugger for Microsoft Edge  

With the [Debugger for Microsoft Edge][VisualStudioMarketplaceDebuggerEdge] VS Code extension, you can debug JavaScript running in Microsoft Edge directly from VS Code!  

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
Starting with Visual Studio 2019 version 16.2, you can debug JavaScript running in Microsoft Edge with the Visual Studio debugger. [Download Visual Studio 2019][MicrosoftVisualStudioDownloads] to try this feature out!

> ##### Figure 8  
> Visual Studio with the option to launch your web app in Microsoft Edge Canary, Dev, or Beta  
> ![Visual Studio with the option to launch your web app in Microsoft Edge Canary, Dev, or Beta][ImageVisualStudioLaunchWebApp]  

[Read our blog post to learn how to debug Microsoft Edge from Visual Studio][MicrosoftVisualStudioBlogDebugJavascript].  

### Tracking prevention Console messages
Tracking prevention is a unique feature in Microsoft Edge that protects you from being tracked by websites you haven't visited before. The default tracking prevention setting is Balanced mode, which blocks 3rd party trackers and known malicious trackers for an experience that balances privacy and web compatibility. To give you more insight into your web page's compatibility when certain trackers are blocked, we've also added warning messages in the Console when a tracker is blocked.

> ##### Figure 9  
> Messages in the Console when tracking prevention blocks access to storage for a tracker
> ![Messages in the Console when tracking prevention blocks access to storage for a tracker][ImageTrackingPrevention]  

[Read more about tracking prevention and the balance between privacy and web compatibility][TrackingPrevention].

## Announcements from the Chromium project

The following sections announce additional features available in Microsoft Edge 80 that were contributed to the open source Chromium project.

### Support for let and class redeclarations in the Console   

The Console now supports redeclarations of `let` and `class` statements.  The inability to redeclare was a common annoyance for web developers who use the Console to experiment with new JavaScript code.  

> [!WARNING]
> Redeclaring a `let` or `class` statement in a script outside of the Console or within a single Console input still causes a `SyntaxError`.  

For example, previously, when redeclaring a local variable with `let`, the Console would throw an error:  

> ##### Figure 10  
> The Console in Microsoft Edge 79 showing that the let redeclaration fails  
> ![The Console in Microsoft Edge 79 showing that the let redeclaration fails][ImageConsoleRedeclarationFails]  

Now, the Console allows the redeclaration:  

> ##### Figure 11  
> The Console in Microsoft Edge 80 showing that the let redeclaration succeeds  
> ![The Console in Microsoft Edge 80 showing that the let redeclaration succeeds][ImageConsoleRedeclarationSucceeds]  

Chromium issue [#1004193][crbug1004193]  

### Improved WebAssembly debugging 

DevTools has started to support the [DWARF Debugging Standard][DwarfHome], which means increased support for stepping over code, setting breakpoints, and resolving stack traces in your source languages within DevTools.  

<!-- [TODO: Add this link back] -->  
<!--Check out [Improved WebAssembly debugging in Microsoft Edge DevTools][201912Webassembly] for the full story.  -->  

<!-- [TODO: Replace this image with screenshot in Edge] -->  
<!--
> ##### Figure  
> The new DWARF-powered WebAssembly debugging  
> ![The new DWARF-powered WebAssembly debugging][ImageDwarfPoweredWebAssemblyDebugging]  
-->  

### Network panel updates   

#### Request Initiator Chains in the Initiator tab   

You are now able to view the initiators and dependencies of a network request as a nested list.  This may help you understand why a resource was requested, or what network activity a certain resource \(such as a script\) caused.  

> ##### Figure 12  
> A Request Initiator Chain in the Initiator tab  
> ![A Request Initiator Chain in the Initiator tab][ImageRequestInitiatorChain]  

After [logging network activity in the Network panel][DevToolsNetworkIndex], click a resource and then go to the **Initiator** tab to view the **Request Initiator Chain**:  

*   The **inspected resource** is bold.  In the screenshot above, `ai.2.min.js` is the inspected resource.  
*   The resources above the inspected resource are the **initiators**.  In the screenshot above, `https://www.microsoftedgeinsider.com` is the initiator of `ai.2.min.js`.  In other words, `https://www.microsoftedgeinsider.com` caused the network request for `ai.2.min.js`.  
*   The resources below the inspected resource are the **dependencies**.  In the screenshot above, `https://dc.services.visualstudio.com/v2/track` is a dependency of `ai.2.min.js`.  In other words, `ai.2.min.js` caused the network request for `https://dc.services.visualstudio.com/v2/track`.  

> [!NOTE]
> Initiator and dependency information may also be accessed by holding `Shift` and then hovering over network resources.  See [View initiators and dependencies][DevToolsNetworkReferenceViewInitiatorsDependencies].  

Chromium issue [#842488][crbug842488]  

#### Highlight the selected network request in the Overview   

After you click a network resource in order to inspect it, the Network panel now puts a blue border around that resource in the **Overview**.  This is able to help you detect if the network request is happening earlier or later than expected.  

> ##### Figure 13  
> The Overview pane highlighting the inspected resource  
> ![The Overview pane highlighting the inspected resource][ImageOverviewPaneInspectedResource]  

Chromium issue [#988253][crbug988253]  

#### URL and path columns in the Network panel   

Use the new **Path** and **URL** columns in the **Network** panel to see the absolute path or full URL of each network resource.  

> ##### Figure 14  
> The new Path and URL columns in the Network panel  
> ![The new Path and URL columns in the Network panel][ImagePathNetworkPanel]  

Right-click the **Waterfall** table header and select **Path** or **URL** to show the new columns.  

Chromium issue [#993366][crbug993366]  

#### Updated User-Agent strings   

DevTools supports setting a custom User-Agent string through the **Network Conditions** tab.  The User-Agent string affects the `User-Agent` HTTP header attached to network resources, and also the value of `navigator.userAgent`.  

The predefined User-Agent strings have been updated to reflect modern browser versions.  

> ##### Figure 15  
> The User Agent menu in the Network Conditions tab  
> ![The User Agent menu in the Network Conditions tab][ImageUserAgentNetworkConditionsTab]  

To access **Network Conditions**, [open the Command Menu][DevToolsCommandMenuIndex] and run the `Show Network Conditions` command.  

> [!NOTE]
> You may also [set User-Agent strings in Device Mode][DevToolsDeviceModeIndex].  

Chromium issue [#1029031][crbug1029031]  

### Audits panel updates   

#### New configuration UI   

The configuration UI has a new, responsive design, and the throttling configuration options have been simplified.  See [Audits Panel Throttling][GitHubGoogleChromeDevToolsAuditsPanelThrottling] for more information on the throttling UI changes.  

> ##### Figure 16  
> The new configuration UI  
> ![The new configuration UI][ImageConfigurationUI]  

### Coverage tab updates   

#### Per-function or per-block coverage modes   

The [Coverage tab][DevToolsCoverageIndex] has a new dropdown menu that lets you specify whether code coverage data should be collected **per function** or **per block**.  **Per block** coverage is more detailed but also far more expensive to collect.  DevTools uses **per function** coverage by default now.  

> [!CAUTION]
> You may see large code coverage differences in HTML files depending on whether you use **per function** or **per block** mode.  When using **per function** mode, inline scripts in HTML files are treated as functions.  If the script runs at all then DevTools marks the entire script as used code.  Only if the script does not run at all does DevTools mark the script as unused code.  

> ##### Figure 17  
> The coverage mode dropdown menu  
> ![The coverage mode dropdown menu][ImageCoverageMode]  

#### Coverage must now be initiated by a page reload   

Toggling code coverage without a page reload has been removed because the coverage data was unreliable.  For example, a function may be reported as unused if the runtime was a long time ago and the V8 garbage collector has cleaned it up.  

Chromium issue [#1004203][crbug1004203]  

## Feedback   



To discuss the new features and changes in this post, or anything else related to DevTools:  

*   Send your feedback using the **Feedback** icon in the DevTools 

> ##### Figure 18
> The **Feedback** icon in the Microsoft Edge DevTools  
> ![The **Feedback** icon in the Microsoft Edge DevTools][ImageFeedbackIcon]  

*   Tweet at [@EdgeDevTools][PostTweetEdgeDevTools]
*   Submit a suggestion to [The Web We Want][TheWebWeWant]
*   File bugs on this document in the [edge-developer][GitHubMicrosoftDocsEdgeDeveloperNewIssue] repository

## Download the Microsoft Edge preview channels   

If you are on Windows or macOS, consider using the [Microsoft Edge preview channels][MicrosoftEdgePreviewChannels] as your default development browser. The preview channels give you access to the latest DevTools features.

<!--<<../../_shared/discover.md>>  -->  



<!-- image links -->  

[ImagePerformanceToolKeyboardReaderImprovements]: ../../images/2019/12/a11y-performance-tool.msft.gif "Figure 1: The Performance tool in the DevTools with the keyboard navigation and screen reader improvements"  
[ImageLocalizedGerman]: ../../images/2019/12/localized-devtools.msft.png "Figure 2: The DevTools in German"  
[ImageHintsTabWebhintExtension]: ../../images/2019/12/webhint-browser-extension.msft.png "Figure 3: The Hints tab in the Microsoft Edge DevTools when the webhint browser extension is installed"  
[Image3DView]: ../../images/2019/12/3dview.msft.png "Figure 4: The 3D View in the Microsoft Edge DevTools"  
[ImageElementsVisualStudioCode]: ../../images/2019/12/elements-for-edge.msft.png "Figure 5: The Elements tool in VS Code using the Elements for Microsoft Edge Extension"  
[ImageDebuggerExtensionVisualStudioCode]: ../../images/2019/12/vscode-debugger.msft.png "Figure 6: The Debugger for Microsoft Edge Extension in VS Code"  
[ImageWebhintVisualStudioCodeExtensionWorkspace]: ../../images/2019/12/webhint-vscode-extension.msft.png "Figure 7: The webhint VS Code extension analyzing a .tsx files in VS Code"  
[ImageVisualStudioLaunchWebApp]: ../../images/2019/12/vs.msft.png "Figure 8: Visual Studio with the option to launch your web app in Microsoft Edge Canary, Dev, or Beta"  
[ImageTrackingPrevention]: ../../images/2019/12/tracking-prevention.msft.png "Figure 9: Messages in the Console when tracking prevention blocks access to storage for a tracker"  
[ImageConsoleRedeclarationFails]: ../../images/2019/12/letbefore.msft.png "Figure 10: The Console in Microsoft Edge 79 showing that the let redeclaration fails"  
[ImageConsoleRedeclarationSucceeds]: ../../images/2019/12/letafter.msft.png "Figure 11: The Console in Microsoft Edge 80 showing that the let redeclaration succeeds"  
[ImageRequestInitiatorChain]: ../../images/2019/12/initiators.msft.png "Figure 12: A Request Initiator Chain in the Initiator tab"  
[ImageOverviewPaneInspectedResource]: ../../images/2019/12/overview.msft.png "Figure 13: The Overview pane highlighting the inspected resource"  
[ImagePathNetworkPanel]: ../../images/2019/12/columns.msft.png "Figure 14: The new Path and URL columns in the Network panel"  
[ImageUserAgentNetworkConditionsTab]: ../../images/2019/12/useragent.msft.png "Figure 15: The User Agent menu in the Network Conditions tab"  
[ImageConfigurationUI]: ../../images/2019/12/start.msft.png "Figure 16: The new configuration UI"  
[ImageCoverageMode]: ../../images/2019/12/modes.msft.png "Figure 17: The coverage mode dropdown menu"  
[ImageFeedbackIcon]: ../../images/2019/12/feedback-icon.msft.png "Figure 18: The **Feedback** icon in the Microsoft Edge DevTools"

<!--[ImageDwarfPoweredWebAssemblyDebugging]: ../../images/2019/12/wasm.msft.png "Figure: The new DWARF-powered WebAssembly debugging"  -->

<!-- links -->  

[DevToolsCommandMenuIndex]: ../../../command-menu/index.md "Run Commands With The Microsoft Edge DevTools Command Menu"  
[DevToolsCoverageIndex]: ../../../coverage/index.md "Find Unused JavaScript And CSS Code With The Coverage Tab In Microsoft Edge DevTools"  
[DevToolsDeviceModeIndex]: ../../../device-mode/index.md#simulate-a-mobile-viewport "Simulate a mobile viewport - Simulate Mobile Devices with Device Mode in Microsoft Edge DevTools"  
[DevToolsNetworkIndex]: ../../../network/index.md "Inspect Network Activity In Microsoft Edge DevTools"  
[DevToolsNetworkReferenceViewInitiatorsDependencies]: ../../../network/reference.md#view-initiators-and-dependencies "View initiators and dependencies - Network Analysis Reference"  
[DevGuideEdgeHtmlWhatsNew]: ../../../../dev-guide/whats-new.md "What's New in EdgeHTML"  
[VisualStudioCodeDebuggerEdgeExtension]: ../../../../visual-studio-code/debugger-for-edge.md "Debugger for Microsoft Edge VS Code extension"  
[VisualStudioCodeElementEdgeExtension]: ../../../../visual-studio-code/elements-for-edge.md "Elements for Microsoft Edge VS Code extension"  

<!--  [201912Webassembly]: webassembly.md "Improved WebAssembly debugging in Microsoft Edge DevTools"  -->  

[crbug842488]: https://crbug.com/842488 "842488 - Add the Initiator field to the Headers tab - Monorail"  
[crbug988253]: https://crbug.com/988253 "988253 - Bug DevTools - No Association between Network request and the Timeline Graph - Monorail"  
[crbug993366]: https://crbug.com/993366 "993366 - Please show path part of URL in network panel requests list - Monorail"  
[crbug1004193]: https://crbug.com/1004193 "1004193 - REPL mode for V8 - Monorail"  
[crbug1004203]: https://crbug.com/1004203 "1004203 - Monorail"  
[crbug1029031]: https://crbug.com/1029031 "1029031 - UA Strings are getting outdated - Monorail" 
[crbug963183]: https://crbug.com/963183 "963183 - DevTools are not WCAG compliant"
[crbug941561]: https://crbug.com/941561 "941561 - Localizability of the DevTools"
[crbug987787]: https://crbug.com/987787 "987787 -  Dom 3D View"

[AccessibilityInsights]: https://aka.ms/a11yinsights "Accessibility Insights"  

[DwarfHome]: https://dwarfstd.org "Dwarf Home"  
[GitHubGoogleChromeDevToolsAuditsPanelThrottling]: https://github.com/GoogleChrome/lighthouse/blob/master/docs/throttling.md#devtools-audits-panel-throttling "DevTools' Audits Panel Throttling - GoogleChrome/lighthouse | GitHub"  
[GitHubMicrosoftDocsEdgeDeveloperNewIssue]: https://aka.ms/edgedevtoolsdocs/feedback "New Issue - MicrosoftDocs/edge-developer"  
[MicrosoftEdgePreviewChannels]: https://aka.ms/microsoftedge "Microsoft Edge Preview Channels"  
[MicrosoftEdgeInsiderAddons]: https://aka.ms/webhint/edge-extension "Microsoft Edge Insider Addons"  
[MicrosoftVisualStudio]: https://aka.ms/vs "Visual Studio"  
[MicrosoftVisualStudioBlogDebugJavascript]: https://aka.ms/vs/debug-edge "Debug JavaScript in Microsoft Edge from Visual Studio | Visual Studio Blog"  
[MicrosoftVisualStudioDownloads]: https://aka.ms/vs/download "Download Visual Studio 2019 for Windows \& Mac"  
[MDNDocumentObjectModel]: https://developer.mozilla.org/docs/Web/API/Document_Object_Model "Document Object Model (DOM) | MDN"  
[MDNZIndex]: https://developer.mozilla.org/docs/Web/CSS/z-index "z-index | MDN"  
[PostTweetEdgeDevTools]: https://aka.ms/tweet/edgedevtools "@EdgeDevTools | Post a Tweet"  
[EdgeDevToolsTwitterAccount]: https://aka.ms/twitter/edgedevtools "@EdgeDevTools Twitter account"
[VisualStudioCode]: https://aka.ms/vscode "Visual Studio Code"  
[VisualStudioMarketplaceDebuggerEdge]: https://aka.ms/debugger4code "Debugger for Microsoft Edge - Visual Studio Marketplace"  
[VisualStudioMarketplaceElementsMicrosoftEdgeChromiumExtension]: https://aka.ms/elements4code "Elements for Microsoft Edge \(Chromium\) - Visual Studio Marketplace"  
[VisualStudioMarketplaceWebhintExtension]: https://aka.ms/webhint4code "webhint - Visual Studio Marketplace"
[Webhint]: https://aka.ms/webhint "webhint"  
[WebhintBrowserExtension]: https://aka.ms/webhint/browser-extension "Webhint Browser Extension | webhint documentation"  
[WebhintVisualStudioCodeExtension]: https://aka.ms/webhint/code-extension "Webhint VS Code Extension | webhint documentation"  
[TrackingPrevention]: https://aka.ms/microsoftedge/tracking-prevention-blog "Improving Tracking Prevention in Microsoft Edge blog post"
[TheWebWeWant]: https://aka.ms/webwewant "The Web We Want"

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/updates/2019/12/devtools/index) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools & Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
