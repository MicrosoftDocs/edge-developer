---
title: What Is New In DevTools (Microsoft Edge 80)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 12/11/2019
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---








# What Is New In DevTools (Microsoft Edge 80) 



## Announcements from the Microsoft Edge DevTools team

The following sections are a list of announcements you may have missed from the Microsoft Edge DevTools team! The team is excited for you to try new features in the DevTools, VS Code extensions, and more. To stay up to date on all the latest and greatest features in the DevTools, download [Microsoft Edge Canary](#consider-canary) to get nightly builds and [follow us on Twitter][EdgeDevToolsTwitterAccount].

### Accessibility improvements to the DevTools  

The Microsoft Edge DevTools team has contributed over 200 changes to the DevTools to address high-impact color contrast, keyboard, and screen reader issues. The DevTools team wants to enable every developer building the web to use the DevTools including screen reader and keyboard users.  

> ##### Figure 1  
> The Performance tool in the DevTools with the keyboard navigation and screen reader improvements  
> ![The Performance tool in the DevTools with the keyboard navigation and screen reader improvements][ImagePerformanceToolKeyboardReaderImprovements]  

Want to learn how to make your web page accessible to all of your users?  Download the [Accessibility Insights][AccessibilityInsights] or [webhint][WebhintBrowserExtension] extensions for Microsoft Edge to get started.  If you use screen readers or the keyboard to navigate around the DevTools, the DevTools team is eager to hear your feedback so [tweet][PostTweetEdgeDevTools] or click the ![feedback icon][ImageFeedbackIcon] icon and let the team know what you think!  

### Using the DevTools in other languages  

When the Microsoft Edge DevTools team examined data from other developer tools was examined, the team learned that many developers prefer to use development tools in their native language, not just in English. So the team has been hard at work translating the DevTools into 10 other languages.  You are able to now use the DevTools in the following languages:  

1.  Chinese (Simplified) - 中文(简体)（简体）  
1.  Chinese (Traditional) - 中文(繁體)（繁體）  
1.  English (United States)  
1.  French – français  
1.  German - Deutsch  
1.  Italian - italiano  
1.  Japanese - 日本語  
1.  Korean - 한국어  
1.  Portuguese - português  
1.  Russian – русский  
1.  Spanish - español  

To use the DevTools in your native language, navigate to `edge://flags` and set the **Enable localized Developer Tools** flag to **Enabled**.  Also set the **Developer Tools experiments** flag to **Enabled**.  Restart the browser and open the DevTools.  <!-- Press `F1` in the DevTools or go to Settings > Experiments and check the **Match browser language** checkbox.  -->  Now, whatever language you display the browser in `edge://settings/languages`, the DevTools matches that language.  

> ##### Figure 2  
> The DevTools in German  
> ![The DevTools in German][ImageLocalizedGerman]  

If you want to use the DevTools in a different language than the ones that are available, send the team your feedback by [tweeting][PostTweetEdgeDevTools] or clicking the ![feedback icon][ImageFeedbackIcon] icon.  

### webhint Microsoft Edge extension  

The webhint browser extension allows you to easily scan your web page and get feedback on accessibility, browser compatibility, security, performance, and more within the Microsoft Edge DevTools.  Read more at [https://webhint.io][Webhint].  

> ##### Figure 3  
> The Hints tab in the Microsoft Edge DevTools when the webhint browser extension is installed  
> ![The Hints tab in the Microsoft Edge DevTools when the webhint browser extension is installed][ImageHintsTabWebhintExtension]  

[Try the webhint browser extension in Microsoft Edge][MicrosoftEdgeInsiderAddons].  Once you install the extension, simply open DevTools and select the Hints tab.  From here, you are be able to run a customizable site scan.  Head over to [webhint.io][WebhintBrowserExtension] to learn more about the extension.  

### 3D View  

Use the **3D View** to debug your web application by navigating through the [Document Object Model \(DOM\)][MDNDocumentObjectModel] or the [z-index][MDNZIndex] stacking context.  

> ##### Figure 4  
> The 3D View in the Microsoft Edge DevTools  
> ![The 3D View in the Microsoft Edge DevTools][Image3DView]  

With it you are able to:  

*   Explore the web page translated into a 3D perspective  
*   Debugging based on z-index stacking context  
*   Clear some of the clutter in the DOM pane or the z-index pane
*   Pick the color scheme to best debug your DOM problems or z-index problems  

To access the 3D View, navigate to `edge://flags` and ensure that the **Developer Tools experiments** flag is set to **Enabled**.  Restart the browser and open the DevTools.  Press `F1` in the DevTools or go to `Settings > Experiments` and check the **Enable 3D View** checkbox.  Now, press `Ctrl` + `Shift` + `P`, type in **3D View** and select **Show 3D View**.  

There are two panes that you may use for your debugging experience.  
1.  **Z-index**  Navigate through the different elements in the web application with the z-index context in mind.  This is the default pane.  
2.  **3D DOM**  Explore the DOM as a whole with all the elements at your fingertips.  To access this pane, click on the **DOM** pane next to the **Z-index** pane.  

The DevTools team is working on the UI and adding more functionality to the 3D View based on asks from users like you.  Please send your feedback so the team is able to continue improving the 3D View for you!  Simply click the ![feedback icon][ImageFeedbackIcon] icon in the DevTools and enter any feedback or feature requests you have for the 3D View.

### Visual Studio Code extensions  

The DevTools team has also released some extensions for [Visual Studio Code \(VS Code\)][VisualStudioCode] that let you use the power of the DevTools directly from your text editor.  You are able to debug your JavaScript, see a preview of your web page, edit style rules with the Elements tool, and scan your code with webhint all while writing your web page in VS Code!  Check out the extensions below:  

#### Elements for Microsoft Edge  

By adding the [Elements for Microsoft Edge \(Chromium\)][VisualStudioMarketplaceElementsMicrosoftEdgeChromiumExtension] VS Code extension, you are able to use the Microsoft Edge Elements tool from within [VS Code][VisualStudioCode]. By either launching or attaching, the Elements tool connects to an instance of Microsoft Edge, display the runtime HTML structure, and allow you to alter the layout or fix styling issues.  

> ##### Figure 5  
> Various features of the Elements for Microsoft Edge Extension in VS Code  
> ![Various features of the Elements for Microsoft Edge Extension in VS Code][ImageElementsVisualStudioCode]  

For more information, check out [Elements for Edge VS Code extension][VisualStudioCodeElementEdgeExtension].  

#### Debugger for Microsoft Edge  

With the [Debugger for Microsoft Edge][VisualStudioMarketplaceDebuggerEdge] VS Code extension, you are able to now debug both Microsoft Edge \(EdgeHTML\) and Microsoft Edge \(Chromium\) directly from VS Code!  

> ##### Figure 6  
> The Debugger for Microsoft Edge Extension in VS Code  
> ![The Debugger for Microsoft Edge Extension in VS Code][ImageDebuggerExtensionVisualStudioCode]  

To launch Microsoft Edge \(Chromium\) instead of Microsoft Edge \(EdgeHTML\) from VS Code, you need to add a `version` attribute to your existing **launch.json** configuration with the version of Microsoft Edge \(Chromium\) you want to launch \(`dev`, `beta`, or `canary`\).  Here is a sample **launch.json** configuration that launches the Canary version of Microsoft Edge \(Chromium\) to `https://www.bing.com`:  

```json
{
    "type": "edge",
    "request": "launch",
    "version": "canary",
    "name": "Launch Microsoft Edge (Chromium) Canary against Bing",
    "url": "https://bing.com"
}
```

For more information, check out [how to debug Microsoft Edge (Chromium) from VS Code][VisualStudioCodeDebuggerEdgeExtension].  

#### webhint  

The [webhint][VisualStudioMarketplaceWebhintExtension] VS Code extension uses `webhint` to improve your web page during development.  This extension runs and reports diagnostics for workspace files based on `webhint` analysis.  

> ##### Figure 7  
> The webhint VS Code extension analyzing workspace files in VS Code  
> ![The webhint VS Code extension analyzing workspace files in VS Code][ImageWebhintVisualStudioCodeExtensionWorkspace]  

[Learn more about the VS Code webhint extension][WebhintVisualStudioCodeExtension].  

### Visual Studio  

With [Visual Studio][MicrosoftVisualStudio] today, you are able to already debug JavaScript running in the legacy version of Microsoft Edge, built on top of the [EdgeHTML][DevGuideEdgeHtmlWhatsNew] web platform.  Starting with Visual Studio 2019 version 16.2, support is extended to the current builds of Microsoft Edge that leverage Chromium.  Visit [Download Visual Studio 2019 for Windows \& Mac][MicrosoftVisualStudioDownloads] to download the latest Visual Studio!  

> ##### Figure 8  
> Visual Studio with the option to launch your web app in Microsoft Edge Canary, Dev, or Beta  
> ![Visual Studio with the option to launch your web app in Microsoft Edge Canary, Dev, or Beta][ImageVisualStudioLaunchWebApp]  

[Read the blog post about how to debug Microsoft Edge from Visual Studio][MicrosoftVisualStudioBlogDebugJavascript].  

### Console messages for Tracking Prevention
Tracking prevention is designed to protect you from being tracked by websites that you aren’t accessing directly. Whenever a website is visited, trackers from other sites may save information in the browser using cookies and other storage mechanisms. This information may include the sites you’ve visited and the content you’re interested in, building a digital profile which can be accessed by organizations to offer personalized content when visiting other sites.

The default tracking prevention setting is Balanced mode, which blocks 3rd party trackers and known malicious trackers for an experience that balances privacy and web compatibility. To give you more insight into your web page's compatibility when certain trackers are blocked, the DevTools team has also added warning messages in the Console when a tracker is blocked.

> ##### Figure 9  
> Messages in the Console when tracking prevention blocks access to storage for a tracker
> ![Messages in the Console when tracking prevention blocks access to storage for a tracker][ImageTrackingPrevention]  

[Read more about tracking prevention and the balance between privacy and web compatibility][TrackingPrevention].

## Other contributions from the Chromium project

The following sections announce additional features available in Microsoft Edge 80 that were contributed to the open source Chromium project.

### Support for `let` and `class` redeclarations in the Console   

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

You are able to now view the initiators and dependencies of a network request as a nested list.  This may help you understand why a resource was requested, or what network activity a certain resource \(such as a script\) caused.  

> ##### Figure 12  
> A Request Initiator Chain in the Initiator tab  
> ![A Request Initiator Chain in the Initiator tab][ImageRequestInitiatorChain]  

After [logging network activity in the Network panel][DevToolsNetworkIndex], click a resource and then go to the **Initiator** tab to view the **Request Initiator Chain**:  

*   The **inspected resource** is bold.  In the screenshot above, `https://az416426.vo.msecnd.net/next/ai.2.min.js` is the inspected resource.  
*   The resources above the inspected resource are the **initiators**.  In the screenshot above, `https://www.microsoftedgeinsider.com` is the initiator of `https://az416426.vo.msecnd.net/next/ai.2.min.js`.  In other words, `https://www.microsoftedgeinsider.com` caused the network request for `https://az416426.vo.msecnd.net/next/ai.2.min.js`.  
*   The resources below the inspected resource are the **dependencies**.  In the screenshot above, `https://dc.services.visualstudio.com/v2/track` is a dependency of `https://az416426.vo.msecnd.net/next/ai.2.min.js`.  In other words, `https://az416426.vo.msecnd.net/next/ai.2.min.js` caused the network request for `https://dc.services.visualstudio.com/v2/track`.  

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

*   Send your feedback using the ![feedback icon][ImageFeedbackIcon] icon in the DevTools.  
*   Tweet at [@EdgeDevTools][PostTweetEdgeDevTools].  
*   File bugs on this document in the [edge-developer][GitHubMicrosoftDocsEdgeDeveloperNewIssue] repository.  

## Consider Canary   

If you are on Windows or macOS, consider using [Microsoft Edge Canary][MicrosoftEdgeCanary] as your default development browser.  Canary gives you access to the latest DevTools features.  

> [!NOTE]
> Canary is released as soon as its built, without testing.  This means that Canary breaks about once-a-month.  It is usually fixed within a day.  You are able to go back to using Microsoft Edge Stable while Canary is broken.  

<!--<<../../_shared/discover.md>>  -->  



<!-- image links -->  

[ImageFeedbackIcon]: ../../images/2019/12/feedback-icon.msft.png  

[ImagePerformanceToolKeyboardReaderImprovements]: ../../images/2019/12/a11y-performance-tool.msft.gif "Figure 1: The Performance tool in the DevTools with the keyboard navigation and screen reader improvements"  
[ImageLocalizedGerman]: ../../images/2019/12/localized-devtools.msft.png "Figure 2: The DevTools in German"  
[ImageHintsTabWebhintExtension]: ../../images/2019/12/webhint-browser-extension.msft.png "Figure 3: The Hints tab in the Microsoft Edge DevTools when the webhint browser extension is installed"  
[Image3DView]: ../../images/2019/12/3dview.msft.png "Figure 4: The 3D View in the Microsoft Edge DevTools"  
[ImageElementsVisualStudioCode]: ../../images/2019/12/elements-for-edge.msft.gif "Figure 5: Various features of the Elements for Microsoft Edge Extension in VS Code"  
[ImageDebuggerExtensionVisualStudioCode]: ../../images/2019/12/vscode-debugger.msft.png "Figure 6: The Debugger for Microsoft Edge Extension in VS Code"  
[ImageWebhintVisualStudioCodeExtensionWorkspace]: ../../images/2019/12/webhint-vscode-extension.msft.gif "Figure 7: The webhint VS Code extension analyzing workspace files in VS Code"  
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

<!--[ImageDwarfPoweredWebAssemblyDebugging]: ../../images/2019/12/wasm.msft.png "Figure: The new DWARF-powered WebAssembly debugging"  -->

<!-- links -->  

[DevToolsCommandMenuIndex]: microsoft-edge/devtools-guide-chromium/command-menu/index.md "Run Commands With The Microsoft Edge DevTools Command Menu"  
[DevToolsCoverageIndex]: /microsoft-edge/devtools-guide-chromium/coverage/index.md "Find Unused JavaScript And CSS Code With The Coverage Tab In Microsoft Edge DevTools"  
[DevToolsDeviceModeIndex]: /microsoft-edge/devtools-guide-chromium/device-mode/index.md#simulate-a-mobile-viewport "Simulate a mobile viewport - Simulate Mobile Devices with Device Mode in Microsoft Edge DevTools"  
[DevToolsNetworkIndex]: (/microsoft-edge/devtools-guide-chromium/network/index.md) "Inspect Network Activity In Microsoft Edge DevTools"  
[DevToolsNetworkReferenceViewInitiatorsDependencies]: /microsoft-edge/devtools-guide-chromium/network/reference.md#view-initiators-and-dependencies "View initiators and dependencies - Network Analysis Reference"  
[DevGuideEdgeHtmlWhatsNew]: /microsoft-edge/dev-guide/whats-new.md "What's New in EdgeHTML"  
[VisualStudioCodeDebuggerEdgeExtension]: /microsoft-edge/visual-studio-code/debugger-for-edge.md "Debugger for Edge VS Code extension"  
[VisualStudioCodeElementEdgeExtension]: /microsoft-edge/visual-studio-code/elements-for-edge.md "Elements for Edge VS Code extension"  

<!--  [201912Webassembly]: webassembly.md "Improved WebAssembly debugging in Microsoft Edge DevTools"  -->  

[crbug842488]: https://crbug.com/842488 "842488 - Add the Initiator field to the Headers tab - Monorail"  
[crbug988253]: https://crbug.com/988253 "988253 - Bug DevTools - No Association between Network request and the Timeline Graph - Monorail"  
[crbug993366]: https://crbug.com/993366 "993366 - Please show path part of URL in network panel requests list - Monorail"  
[crbug1004193]: https://crbug.com/1004193 "1004193 - REPL mode for V8 - Monorail"  
[crbug1004203]: https://crbug.com/1004203 "1004203 - Monorail"  
[crbug1029031]: https://crbug.com/1029031 "1029031 - UA Strings are getting outdated - Monorail"  

[AccessibilityInsights]: https://accessibilityinsights.io "Accessibility Insights"  

[DwarfHome]: http://dwarfstd.org "Dwarf Home"  
[GitHubGoogleChromeDevToolsAuditsPanelThrottling]: https://github.com/GoogleChrome/lighthouse/blob/master/docs/throttling.md#devtools-audits-panel-throttling "DevTools' Audits Panel Throttling - GoogleChrome/lighthouse | GitHub"  
[GitHubMicrosoftDocsEdgeDeveloperNewIssue]: https://github.com/MicrosoftDocs/edge-developer/issues/new?title=[DevTools%20Docs%20Feedback] "New Issue - MicrosoftDocs/edge-developer"  
[MicrosoftEdgeCanary]: https://www.microsoftedgeinsider.com/download/canary "Microsoft Edge Canary Channel"  
[MicrosoftEdgeInsiderAddons]: https://microsoftedge.microsoft.com/insider-addons/detail/mlgfbihcfnkaenjpdcngdnhcpkdmcdee "Microsoft Edge Insider Addons"  
[MicrosoftVisualStudio]: https://visualstudio.microsoft.com "Visual Studio"  
[MicrosoftVisualStudioBlogDebugJavascript]: https://devblogs.microsoft.com/visualstudio/debug-javascript-in-microsoft-edge-from-visual-studio "Debug JavaScript in Microsoft Edge from Visual Studio | Visual Studio Blog"  
[MicrosoftVisualStudioDownloads]: https://visualstudio.microsoft.com/downloads "Download Visual Studio 2019 for Windows \& Mac"  
[MDNDocumentObjectModel]: https://developer.mozilla.org/docs/Web/API/Document_Object_Model "Document Object Model (DOM) | MDN"  
[MDNZIndex]: https://developer.mozilla.org/docs/Web/CSS/z-index "z-index | MDN"  
[PostTweetEdgeDevTools]: https://twitter.com/intent/tweet?text=@EdgeDevTools "@EdgeDevTools | Post a Tweet"  
[EdgeDevToolsTwitterAccount]: https://twitter.com/EdgeDevTools "@EdgeDevTools Twitter account"
[VisualStudioCode]: https://code.visualstudio.com "Visual Studio Code"  
[VisualStudioMarketplaceDebuggerEdge]: https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-edge "Debugger for Edge - Visual Studio Marketplace"  
[VisualStudioMarketplaceElementsMicrosoftEdgeChromiumExtension]: https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools "Elements for Microsoft Edge \(Chromium\) - Visual Studio Marketplace"  
[VisualStudioMarketplaceWebhintExtension]: https://marketplace.visualstudio.com/items?itemName=webhint.vscode-webhint "webhint - Visual Studio Marketplace"
[Webhint]: https://webhint.io "webhint"  
[WebhintBrowserExtension]: https://webhint.io/docs/user-guide/extensions/extension-browser "Webhint Browser Extension | webhint documentation"  
[WebhintVisualStudioCodeExtension]: https://webhint.io/docs/user-guide/extensions/vscode-webhint "Webhint VS Code Extension | webhint documentation"  
[TrackingPrevention]: https://blogs.windows.com/msedgedev/2019/12/03/improving-tracking-prevention-microsoft-edge-79/#GrgCdVqMtfYTzjuJ.97 "Improving Tracking Prevention in Microsoft Edge blog post"

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/updates/2019/12/devtools/index) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools & Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: http://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
