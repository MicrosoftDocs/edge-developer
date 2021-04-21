---
description: Wavy underlines highlight code issues in the Elements tool, Service worker update timeline, and more.
title: What's new in DevTools (Microsoft Edge 91)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/21/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
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
# What's New In DevTools (Microsoft Edge 91)  

[!INCLUDE [contact DevTools team note](../../includes/edge-whats-new-note.md)]  

## Wavy underlines highlight code issues and improvements in Elements tool  

<!--  Title: Get code hints in Elements tool  -->  
<!--  Subtitle: Wavy underlines like the ones you see in Visual Studio Code now display in the Elements tool.  Underlines alert you to code issues related to accessibility, compatibility, security, performance, and  so on.  -->  

In most modern IDEs, wavy underlines under text indicate syntax errors.   In Microsoft Edge version 91 or later, wavy underlines display under HTML in the **DOM** view of the **Elements** tool.  The wavy underlines indicate code issues and suggestions related to accessibility, compatibility, performance, and so on.  For more information about how to review and edit issues, navigate to [Find and fix problems with the Microsoft Edge DevTools Issues tool][DevtoolsIssuesIndex].  

To open the **Issues** tool and learn more about the issue and how to fix it, complete one of the following actions.  

*   Select and hold `Shift`, and then choose any wavy underline.  
*   Complete the following actions.  
    1.  Hover on any wavy underline.  
    1.  Open the contextual menu \(right-click\).  
    1.  Choose **Show in Issues**.  
        
:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2021/04/elements-iframe-highlight-issues.msft.png" alt-text="Choose the underlined error in the Elements tool" lightbox="../../media/2021/04/elements-iframe-highlight-issues.msft.png":::
         Choose the underlined error in the **Elements** tool  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../../media/2021/04/elements-iframe-highlight-issues-focus.msft.png" alt-text="Display error details in the Issues tool" lightbox="../../media/2021/04/elements-iframe-highlight-issues-focus.msft.png":::
         Display error details in the **Issues** tool  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

## Learn about DevTools with informative tooltips  

:::image type="icon" source="../../media/2020/06/experimental-tag-14px.msft.png":::  

<!--  Title: Learn more about DevTools with DevTools Tooltips  -->  
<!--  Subtitle: Informative overlays are now available in the default DevTools interface.  -->  

The DevTools Tooltips feature helps you learn about all the different tools and panes in DevTools.  To turn off Tooltips, select `Esc`.  To turn on Tooltips, complete one of the following actions.  

*   Select `Ctrl`+`Shift`+`H` \(Windows/Linux\) or `Cmd`+`Shift`+`H` \(macOS\).  
*   [Open the Command Menu][DevtoolsCommandMenuIndexOpenCommandMenu] and then type `tooltips`.  
*   Choose **Customize and control DevTools** \(`...`\) > **Help** > **Toggle the DevTools Tooltips**.  

Also, if you turn on the [Focus Mode and DevTools Tooltips][DevtoolsWhatsNew202102DevtoolsGroupToolsTogetherInFocusMode] experiment, you may also choose the **Toggle the DevTools Tooltips** \(`?`\) button at the bottom of the **Activity Bar**.  

To display more information about how to use the DevTools, turn on Tooltips, and then hover on each outlined region of the DevTools.  

:::image type="complex" source="../../media/2021/04/elements-issues-focus-mode-tooltips.msft.png" alt-text="Hover on anywhere in the highlighted region of the Issues tool to display more details" lightbox="../../media/2021/04/elements-issues-focus-mode-tooltips.msft.png":::
   Hover on anywhere in the highlighted region of the **Issues** tool to display more details  
:::image-end:::  

## Service worker update timeline  

<!--todo:  Update the linked [Service Worker improvements][DevtoolsServiceWorkerIndex] article.  -->  

<!--  Title: The tasks associated with your Service Worker  -->  
<!--  Subtitle: Debug with Service Worker Update Cycle  -->  

In Microsoft Edge version 91 or later, if you are a Progressive Web App or Service Worker developer, you may display the update lifecycle of your Service Workers as a timeline in the **Application** tool.  This feature helps you understand the time your Service Worker spends in each of the following stages.  

*   **Install**  
*   **Wait**  
*   **Activate**  
    
:::image type="complex" source="../../media/2021/04/application-service-workers-update-cycle-version-73-focus.msft.png" alt-text="Review the Timeline in the Update Cycle for your Service Worker" lightbox="../../media/2021/04/application-service-workers-update-cycle-version-73-focus.msft.png":::
   Review the **Timeline** in the **Update Cycle** for your Service Worker  
:::image-end:::  

For more information about the lifecycle of your Service Workers, navigate to [The Service Worker lifecycle][ProgressiveWebAppsServiceworkerServiceWorkerLifecycle].  For more information about debugging tools for Progressive Web Apps and Service Workers in the DevTools, navigate to [Service Worker improvements][DevtoolsServiceWorkerIndex].  To review real-time updates on this feature in the Chromium open-source project, navigate to Issue [1066604][CR1066604].  

## Progressive Web Apps no longer display warnings for non-square icons  

<!--  Title: Non-square icons in app manifest no longer produce warnings  -->  
<!--  Subtitle: As long as square icons are included in the app manifest, non-square icons no longer produce warnings  -->  

In [Microsoft Edge version 90][DevtoolsWhatsNew202102Devtools] or earlier, if you included a non-square icon in the Web App Manifest of your PWA, the **Manifest** section in the **Application** tool displayed a warning under **Errors and Warnings** for each non-square icon.  In Microsoft Edge version 91 or later, the **Manifest** section in the **Application** tool displays no warnings if you provide at least one square icon.  If you don't provide any square icons, a warning displays the following message.  

```output
Most operating systems require square icons.  Please include at least one square icon in the array.  
```  

:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2021/04/edge89-application-manifest-errors-and-warnings.msft.png" alt-text="In Microsoft Edge version 90 or earlier, an error displays for each icon that is non-square" lightbox="../../media/2021/04/edge89-application-manifest-errors-and-warnings.msft.png":::
         In Microsoft Edge version 90 or earlier, an error displays for each icon that is non-square  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../../media/2021/04/edge91-application-manifest-errors-and-warnings.msft.png" alt-text="In Microsoft Edge version 91 or later, no error displays when you provide at least one square icon" lightbox="../../media/2021/04/edge91-application-manifest-errors-and-warnings.msft.png":::
         In Microsoft Edge version 91 or later, no error displays when you provide at least one square icon  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

To review errors and warnings in your Web App Manifest, navigate to the **Application** tool and choose the **Manifest** section.  Errors and warnings are listed under the **Errors and Warnings** heading.  For more information about the Web App Manifest, navigate to [Use the Web App Manifest to integrate your Progressive Web App into the Operating System][ProgressiveWebAppsWebappmanifests].  To create icons to include in your Web App Manifest, navigate to the [PWABuilder Image Generator][PwabuilderImagegenerator].  To review real-time updates on this feature in the Chromium open-source project, navigate to Issue [1185945][CR1185945].  

## Localized DevTools now supported in Chromium-based browsers  

<!--  Title: Localization for all  -->  
<!--  Subtitle: Match browser language enabled to all Chromium-based browsers  -->  

Starting in [Microsoft Edge version 81][DevtoolsWhatsNew202001DevtoolsUsingDevtoolsInOtherLanguages], Microsoft Edge DevTools displays in your own language.  Many developers use other developer tools like StackOverflow and Visual Studio Code in their native language, not just in English.  The Microsoft Edge DevTools team, Chrome DevTools team, and the Google Lighthouse team collaborated to provide the same experience in all Chromium-based browsers.  For more information about how to use DevTools in your language, navigate to [Change DevTools language settings][DevtoolsCustomizeLocalization].  For more information about the collaboration on this feature in the Chromium open-source project, navigate to [1136655][CR1136655].  

:::image type="complex" source="../../media/2021/04/japanese-browser-japanese-navigation-elements-3d-view.msft.png" alt-text="Microsoft Edge browser and DevTools set to Japanese" lightbox="../../media/2021/04/japanese-browser-japanese-navigation-elements-3d-view.msft.png":::
   Microsoft Edge browser and DevTools set to Japanese  
:::image-end:::  

## Use the keyboard to navigate to CSS variables  

<!--  Title: Navigate to CSS variables with the arrow keys  -->  
<!--  Subtitle: In the Styles pane, use the arrow keys to choose CSS variables.  Select `Enter` to see the variable definition.  -->  

Starting in [Microsoft Edge version 88][DevtoolsWhatsNew202011DevtoolsCssVariableDefinitionsInStylesPane], the **Styles** pane displays CSS variables and provides a link directly to the definition of each variable.  In Microsoft Edge version 91 or later, you may use the arrow keys to easily navigate to CSS variables.  To open the definition in the **Styles** pane, hover on a variable, and then select `Enter`.  For more information about CSS variables, navigate to [Using CSS custom properties (variables)][MdnDocsWebCssUsingCssCustomProperties].  To review real-time updates on this feature in the Chromium open-source project, navigate to Issue [1187735][CR1187735].  

:::image type="complex" source="../../media/2021/04/elements-styles-body-background-color-theme-body-background.msft.png" alt-text="The --theme-body-background CSS variable highlighted in the Styles pane" lightbox="../../media/2021/04/elements-styles-body-background-color-theme-body-background.msft.png":::
   The `--theme-body-background` CSS variable highlighted in the **Styles** pane  
:::image-end:::  

## Issues are automatically sorted by severity  

<!-- Title: Display Issues in severity order  -->  
<!-- Subtitle: Entries in the Issues tool now display in severity order and allow you to focus your updates on the most important issues. -->  

The **Issues** tool displays recommendations to improve your website, including accessibility, performance, security, and so on. Based on your feedback, issues are now automatically sorted by severity.  In each feedback category, each issue marked as an **Error** appears first, followed each issue marked as a **Warning**, then each issue marked as a **Tip**.  To help you refine your issues, extra filter options are planned for a future update.  For more information about how to review issues, navigate to [Find and fix problems with the Microsoft Edge DevTools Issues tool][DevtoolsIssuesIndex].  

:::image type="complex" source="../../media/2021/04/elements-issues-ordered-issues.msft.png" alt-text="The Issues tool displays sorted issues by severity" lightbox="../../media/2021/04/elements-issues-ordered-issues.msft.png":::
   The **Issues** tool displays sorted issues by severity  
:::image-end:::  

## Microsoft Edge Developer Tools for Visual Studio Code version 1.1.7  

<!-- Title: Microsoft Edge DevTools for Visual Studio version 1.1.7  -->  
<!-- Subtitle: Increased target closure reliability, automatically update the side panel, new contextual menu for settings and Changelog, and more. -->  

The [Microsoft Edge Tools for Visual Studio Code extension][VisualstudioMarketplaceMsEdgedevtoolsVscodeEdgeDevtools] version 1.1.7 provides the DevTools from [Microsoft Edge version 88][DevtoolsWhatsNew202011Devtools].  This extension now supports ARM devices and no longer depends on the [Debugger for Microsoft Edge][VisualstudioMarketplaceMsjsdiagDebuggerForEdge] extension.  Version 1.1.7 includes the following bug fixes and improvements.  

*   Updated the reliability of target closure.  
*   Updated the side panel to automatically refreshes when you debug targets that are created or destroyed.  
*   Added a new contextual menu that gives you faster access to the extension settings and the latest Changelog.  
*   Updated and simplified the release of extension documentation including the newest features.  
    
To manually update to version 1.1.7, navigate to [Update an extension manually][VisualstudioCodeDocsEditorExtensionGalleryUpdateExtensionManually].  You may file issues and contribute to the extension on the [vscode-edge-devtools GitHub repo][GithubMicrosoftVscodeEdgeDevtools].  

<!--## Announcements from the Chromium project  

[!INCLUDE [contact DevTools team note](../../includes/chromium-whats-new-note.md)]  

### Ipsum et Chromium  

Lorem al lorem et Chromium  To review the history of this feature in the Chromium open-source project, navigate to Issue [xxxxxxx][CRxxxxxxx].  

:::image type="complex" source="../../media/2021/04/lorem-et-chromium.msft.png" alt-text="Ipsum et Chromium" lightbox="../../media/2021/04/lorem-et-chromium.msft.png":::
   Ipsum et Chromium  
:::image-end:::  -->  

## Download the Microsoft Edge preview channels  

If you are on Windows, Linux, or macOS, consider using the [Microsoft Edge preview channels][MicrosoftEdgePreviewChannels] as your default development browser.  The preview channels give you access to the latest DevTools features.  

## Getting in touch with Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../../includes/contact-whats-new-note.md)]

<!-- links -->  

[DevtoolsWhatsNew202001DevtoolsUsingDevtoolsInOtherLanguages]: ../../2020/01/devtools.md#using-the-devtools-in-other-languages "Using the DevTools in other languages - What's New In DevTools (Microsoft Edge 81) | Microsoft Docs"  
[DevtoolsWhatsNew202011Devtools]: ../../2020/11/devtools.md "What's new in DevTools (Microsoft Edge 88) | Microsoft Docs"  
[DevtoolsWhatsNew202011DevtoolsCssVariableDefinitionsInStylesPane]: /microsoft-edge/devtools-guide-chromium/whats-new/2020/11/devtools#css-variable-definitions-in-styles-pane "CSS variable definitions in Styles pane - What's New in DevTools (Microsoft Edge 88) | Microsoft Docs"  
[DevtoolsWhatsNew202102Devtools]: ../02/devtools.md "What's New In DevTools (Microsoft Edge 90) | Microsoft Docs"  
[DevtoolsWhatsNew202102DevtoolsGroupToolsTogetherInFocusMode]: ../02/devtools.md#group-tools-together-in-focus-mode "Group tools together in Focus Mode - What's New In DevTools (Microsoft Edge 90) | Microsoft Docs"  

[DevtoolsCommandMenuIndexOpenCommandMenu]: /microsoft-edge/devtools-guide-chromium/command-menu/index#open-the-command-menu "Open the Command Menu - Run commands with the Microsoft Edge DevTools Command menu | Microsoft Docs"  
[DevtoolsCustomizeLocalization]: /microsoft-edge/devtools-guide-chromium/customize/localization "Change DevTools language settings | Microsoft Docs"  
[DevtoolsIssuesIndex]: /microsoft-edge/devtools-guide-chromium/issues/index "Find and fix problems with the Microsoft Edge DevTools Issues tool | Microsoft Docs"  
[DevtoolsServiceWorkerIndex]: /microsoft-edge/devtools-guide-chromium/service-workers/index "Service Worker improvements | Microsoft Docs"  

[ProgressiveWebAppsServiceworkerServiceWorkerLifecycle]: /microsoft-edge/progressive-web-apps-chromium/serviceworker#the-service-worker-lifecycle "The Service Worker lifecycle - Use Service Workers to manage network requests and push notifications | Microsoft Docs"  
[ProgressiveWebAppsWebappmanifests]: /microsoft-edge/progressive-web-apps-chromium/webappmanifests "Use the Web App Manifest to integrate your Progressive Web App into the Operating System | Microsoft Docs"  

[GithubMicrosoftVscodeEdgeDevtools]: https://github.com/microsoft/vscode-edge-devtools "microsoft/vscode-edge-devtools | GitHub"  
<!--[GithubMicrosoftVscodeEdgeDevtoolsPullxxx]: https://github.com/microsoft/vscode-edge-devtools/pull/xxx "Pull xxx: Lorem al Ipsum | GitHub"  -->  

[MicrosoftEdgePreviewChannels]: https://www.microsoftedgeinsider.com/download "Microsoft Edge Preview Channels"  

[VisualstudioCodeDocsEditorExtensionGalleryUpdateExtensionManually]: https://code.visualstudio.com/docs/editor/extension-gallery#_update-an-extension-manually "Update an extension manually - Extension Marketplace | Visual Studio Code"  

[VisualstudioMarketplaceMsEdgedevtoolsVscodeEdgeDevtools]: https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools "Microsoft Edge Tools for Visual Studio Code | Visual Studio Marketplace"  
[VisualstudioMarketplaceMsjsdiagDebuggerForEdge]: https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-edge "Debugger for Microsoft Edge | Visual Studio Marketplace"  

[CRIssuesList]: https://bugs.chromium.org/p/chromium/issues/list "Chromium bugs"  
[CR1066604]: https://crbug.com/1066604 "Issue 1066604: DevTools: See details about ServiceWorker install and activate events | Chromium bugs"  
[CR1136655]: https://crbug.com/1136655 "Issue 1136655: Devtools: Localization V2 | Chromium bugs"  
[CR1185945]: https://crbug.com/1185945 "Issue 1185945: Manifest warning implies all icons must be square | Chromium bugs"  
[CR1187735]: https://crbug.com/1187735 "Issue 1187735: Accessibility: MAS2.1.1: Keyboard: Unable to invoke the 'Var(..)' function using keyboard | Chromium bugs"  

[MdnDocsWebCssUsingCssCustomProperties]: https://developer.mozilla.org/docs/Web/CSS/Using_CSS_custom_properties "Using CSS custom properties (variables) | MDN"  

[PwabuilderImagegenerator]: https://www.pwabuilder.com/imageGenerator "Image Generator | PWABuilder"  

<!--  > [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developer.chrome.com/blog/new-in-devtools-91) and is authored by [Jecelyn Yeen][JecelynYeen] \(Developer advocate, Chrome DevTools\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[JecelynYeen]: https://developers.google.com/web/resources/contributors/jecelynyeen
-->
