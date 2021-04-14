---
description: The ...
title: What's new in DevTools (Microsoft Edge xx)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/14/2021
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

## Elements tool highlights code issues and improvements with wavy underlines  

<!--  Title: Get code hints in Elements tool  -->  
<!--  Subtitle: Wavy underlines like the ones you see in VS Code now appear in the Elements tool.  Underlines alert you to code issues related to accessibility, compatibility, security, performance, and more.  -->  

If you use text editors, you may have no wavy underlines under text in your code that indicates a problem, such as syntax errors.  Text editors include Visual Studio Code, IDEs, and so on.  Now, the **Elements** tool provides a similar functionality that displays wavy underlines.  The wavy lines indicate code issues and suggestions.  The code issues and suggestions are related to accessibility, compatibility, performance, security, and so on.  For more information about reviewing and editing issues, navigate to [Find and fix problems with the Microsoft Edge DevTools Issues tool][DevtoolsIssuesIndex].  

To open the **Issues** tool and learn more about the issue and how to fix it, complete one of the following actions.  

*   Select and hold `Shift`, and then choose any wavy underline.  
*   Complete the following actions.  
    1.  Hover on any wavy underline.  
    1.  Open the contextual menu \(right-click\).  
    1.  Choose **Show in Issues**.  
        
:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2021/04/elements-iframe-highlight-issues.msft.png" alt-text="Select the underlined error in the Elements tool" lightbox="../../media/2021/04/elements-iframe-highlight-issues.msft.png":::
         Select the underlined error in the **Elements** tool  
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

The DevTools Tooltips feature helps you learn about all the different tools and panes in DevTools.  To turn on or off Tooltips, complete one of the following actions.  

*   Select `Ctrl`+`Shift`+`H` \(Windows/Linux\) or `Cmd`+`Shift`+`H` \(macOS\).  
*   [Open the Command Menu][DevtoolsCommandMenuIndexOpenCommandMenu] and then type `tooltips`.  
*   Choose **Customize and control DevTools** \(`...`\) > **Help** > **Toggle the DevTools Tooltips**.  
*   If you turn on the [Focus Mode and DevTools Tooltips][DevtoolsWhatsNew202102DevtoolsGroupToolsTogetherInFocusMode], you may also select the **Toggle the DevTools Tooltips** \(`?`\) button at the bottom of the **Activity Bar**.  

To learn more about how to use the tool, turn on Tooltips, and then hover on each outlined region of the DevTools.  

:::image type="complex" source="../../media/2021/04/elements-issues-focus-mode-tooltips.msft.png" alt-text="Hover on the Issues tool to display more details" lightbox="../../media/2021/04/elements-issues-focus-mode-tooltips.msft.png":::
   Hover on the Issues tool to display more details  
:::image-end:::  

## Service worker update timeline  

<!--  Title: The tasks associated with your Service Worker  -->  
<!--  Subtitle: Debug with Service Worker Update Cycle  -->  

For the Progressive Web App and Service Worker developers, more debug tools are in the DevTools.  Now, you may review the update lifecycle of your Service Workers as a timeline in the **Application** tool.  This feature helps you understand the time your Service Worker spends in each of the following stages.  

*   **Install**  
*   **Wait**  
*   **Activate**  
    
:::image type="complex" source="../../media/2021/04/application-service-workers-update-cycle-version-73-focus.msft.png" alt-text="Review the Timeline in the Update Cycle for your Service Worker" lightbox="../../media/2021/04/application-service-workers-update-cycle-version-73-focus.msft.png":::
   Review the **Timeline** in the **Update Cycle** for your Service Worker  
:::image-end:::  

<!--todo:  Update linked article.  -->  

For more information about reviewing the **Timeline** for your Service Worker, navigate to [Service Worker improvements][DevtoolsServiceWorkerIndex].  To review real-time updates on this feature in the Chromium open-source project, navigate to Issue [1066604][CR1066604].  

## Progressive Web Apps no longer display warnings for non-square icons  

<!--  Title: Non-square icons in app manifest no longer produce warnings  -->  
<!--  Subtitle: As long as square icons are included in the app manifest, non-square icons no longer produce warnings  -->  

In [Microsoft Edge version 90][DevtoolsWhatsNew202102Devtools] or earlier, if you included a non-square icon in the Web App Manifest for your PWA, a warning was displayed.  The **Errors and Warnings** heading displayed a warning for each non-square icon in your Web App Manifest.  To review the **Errors and Warnings** heading, choose **Application** tools, and then choose **Manifest**.  The error displayed even if square icons were provided for the platforms that require it.  In Microsoft Edge version 91 or later, if you provide at least one square icon, no warnings are displayed.  If you don't provide any square icons, a warning displays the following message.  

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
      :::image type="complex" source="../../media/2021/04/edge91-application-manifest-errors-and-warnings.msft.png" alt-text="In Microsoft Edge version 91 or later, an error displays when no icon is square" lightbox="../../media/2021/04/edge91-application-manifest-errors-and-warnings.msft.png":::
         In Microsoft Edge version 91 or later, an error displays when no icon is square  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

For more information about the Web App Manifest, navigate to [Use the Web App Manifest to integrate your Progressive Web App into the Operating System][ProgressiveWebAppsWebappmanifests].  To review real-time updates on this feature in the Chromium open-source project, navigate to Issue [1185945][CR1185945].  

## Localized DevTools now supported in Chromium-based browsers  

<!--  Title: Localization for all  -->  
<!--  Subtitle: Match browser language enabled to all Chromium-based browsers  -->  

The DevTools are now available in your language.  The Microsoft Edge DevTools team created [localized Devtools in Microsoft Edge][DevtoolsCustomizeLocalization] to make it tools better for everyone.  Since then, the Microsoft Edge DevTools team improved the localization flow.  The Microsoft Edge DevTools team, Chrome Developer Tools team, and the Google Lighthouse team collaborated to give the same experience to all Chromium-based browsers.  For more information about the collaboration, navigate to [Issue 1136655: Devtools: Localization V2][CR1136655].  For more information about how to match your language in DevTools, navigate to [Change DevTools language settings][DevtoolsCustomizeLocalization].  To review real-time updates on this feature in the Chromium open-source project, navigate to Issue [1136655][CR1136655].  

:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2021/04/japanese-browser-japanese-navigation-nomatch-elements-3d-view.msft.png" alt-text="Microsoft Edge DevTools do not match the browser set to Japanese and matches the default (OS) language set to English" lightbox="../../media/2021/04/japanese-browser-japanese-navigation-nomatch-elements-3d-view.msft.png":::
         Microsoft Edge DevTools do not match the browser set to Japanese and matches the default \(OS\) language set to English  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../../media/2021/04/japanese-browser-japanese-navigation-elements-3d-view.msft.png" alt-text="Microsoft Edge DevTools match the browser language set to Japanese" lightbox="../../media/2021/04/japanese-browser-japanese-navigation-elements-3d-view.msft.png":::
         Microsoft Edge DevTools match the browser language set to Japanese  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

## Use the keyboard to navigate to CSS variables  

<!--  Title: Navigate to CSS variables with the arrow keys  -->  
<!--  Subtitle: In the Styles pane, use the arrow keys to select CSS variables.  Select `Enter` to see the variable definition.  -->  

In [Microsoft Edge version 88][DevtoolsWhatsNew202011Devtools] to [Microsoft Edge version 90][DevtoolsWhatsNew202102Devtools], the **Styles** pane displayed CSS variables and provided a link directly to each definition.  In Microsoft Edge version 91 or later, using the arrow keys to navigate to CSS variables.  To open the definition in the **Styles** pane, hover on a variable and select `Enter`.  

:::image type="complex" source="../../media/2021/04/elements-styles-body-background-color-theme-body-background.msft.png" alt-text="The --theme-body-background CSS variable highlighted in the Styles pane" lightbox="../../media/2021/04/elements-styles-body-background-color-theme-body-background.msft.png":::
   The `--theme-body-background` CSS variable highlighted in the **Styles** pane  
:::image-end:::  

For more information about CSS variables, navigate to [Using CSS custom properties (variables)][MdnDocsWebCssUsingCssCustomProperties].  To review real-time updates on this feature in the Chromium open-source project, navigate to Issue [1187735][CR1187735].  

## Issues are automatically sorted by severity  

<!-- Title: not provided...  -->  
<!-- Subtitle: not provided... -->  

Description not provided...

:::image type="complex" source="../../media/202x/xx/lorem-et-al.msft.png" alt-text="Ipsum et Lorem" lightbox="../../media/202x/xx/lorem-et-al.msft.png":::
   Ipsum et Lorem  
:::image-end:::  

## Microsoft Edge Developer Tools for Visual Studio Code version 1.1.7  

<!-- Title: Microsoft Edge DevTools for Visual Studio version 1.1.7  -->  
<!-- Subtitle: Increased target closure reliability, automatically update the side panel, new contextual menu for settings and Changelog, and more. -->  

The [Microsoft Edge DevTools for Visual Studio Code extension][VisualstudioMarketplaceMsEdgedevtoolsVscodeEdgeDevtools] version 1.1.7 features [Microsoft Edge version 88][DevtoolsWhatsNew202011Devtools].  It has support for ARM devices and is independent of the Debugger for Microsoft Edge.  The Microsoft Edge DevTools for Visual Studio Code extension team fixed many bugs and improved the following tasks.  

*   Updated the reliability of target closure.  
*   Updated the side panel to automatically refreshes when you debug targets that are created or destroyed.  
*   Added a new contextual menu that gives you faster access to the extension settings and the latest Changelog.  
*   Updated and simplified the release of extension documentation including the newest features.  

To manually update to version 1.1.6, navigate to [Update an extension manually][VisualstudioCodeDocsEditorExtensionGalleryUpdateExtensionManually].  You may file issues and contribute to the extension on the [vscode-edge-devtools GitHub repo][GithubMicrosoftVscodeEdgeDevtools].  

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

[DevtoolsWhatsNew202011Devtools]: ../../2020/11/devtools.md "What's new in DevTools (Microsoft Edge 88) | Microsoft Docs"  
[DevtoolsWhatsNew202102Devtools]: ../02/devtools.md "What's New In DevTools (Microsoft Edge 90) | Microsoft Docs"  
[DevtoolsWhatsNew202102DevtoolsGroupToolsTogetherInFocusMode]: ../02/devtools.md#group-tools-together-in-focus-mode "Group tools together in Focus Mode - What's New In DevTools (Microsoft Edge 90) | Microsoft Docs"  

[DevtoolsCommandMenuIndexOpenCommandMenu]: /microsoft-edge/devtools-guide-chromium/command-menu/index.md#open-the-command-menu "Open the Command Menu - Run commands with the Microsoft Edge DevTools Command menu | Microsoft Docs"  
[DevtoolsCustomizeIndexSettings]: /microsoft-edge/devtools-guide-chromium/customize/index#settings "Settings - Customize Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsCustomizeLocalization]: /microsoft-edge/devtools-guide-chromium/customize/localization "Change DevTools language settings | Microsoft Docs"  
[DevtoolsIndex]: /microsoft-edge/devtools-guide-chromium/index "Microsoft Edge (Chromium) Developer Tools overview | Microsoft Docs"  
[DevtoolsIssuesIndex]: /microsoft-edge/devtools-guide-chromium/issues/index "Find and fix problems with the Microsoft Edge DevTools Issues tool | Microsoft Docs"  
[DevtoolsServiceWorkerIndex]: /microsoft-edge/devtools-guide-chromium/service-workers/index "Service Worker improvements | Microsoft Docs"  

[ProgressiveWebAppsWebappmanifests]: /microsoft-edge/progressive-web-apps-chromium/webappmanifests "Use the Web App Manifest to integrate your Progressive Web App into the Operating System | Microsoft Docs"  

[GithubMicrosoftVscodeEdgeDevtools]: https://github.com/microsoft/vscode-edge-devtools "microsoft/vscode-edge-devtools | GitHub"  
<!--[GithubMicrosoftVscodeEdgeDevtoolsPullxxx]: https://github.com/microsoft/vscode-edge-devtools/pull/xxx "Pull xxx: Lorem al Ipsum | GitHub"  -->  

[MicrosoftEdgePreviewChannels]: https://www.microsoftedgeinsider.com/download "Microsoft Edge Preview Channels"  

[VisualstudioCodeDocsEditorExtensionGalleryUpdateExtensionManually]: https://code.visualstudio.com/docs/editor/extension-gallery#_update-an-extension-manually "Update an extension manually - Extension Marketplace | Visual Studio Code"  

[VisualstudioMarketplaceMsEdgedevtoolsVscodeEdgeDevtools]: https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools "Microsoft Edge Tools for Visual Studio Code | Visual Studio Marketplace"  

[CRIssuesList]: https://bugs.chromium.org/p/chromium/issues/list "Chromium bugs"  
[CR1066604]: https://crbug.com/1066604 "Issue 1066604: DevTools: See details about ServiceWorker install and activate events | Chromium bugs"  
[CR1136655]: https://crbug.com/1136655 "Issue 1136655: Devtools: Localization V2 | Chromium bugs"  
[CR1185945]: https://crbug.com/1185945 "Issue 1185945: Manifest warning implies all icons must be square | Chromium bugs"  
[CR1187735]: https://crbug.com/1187735 "Issue 1187735: Accessibility: MAS2.1.1: Keyboard: Unable to invoke the 'Var(..)' function using keyboard | Chromium bugs"  

[MdnDocsWebCssUsingCssCustomProperties]: https://developer.mozilla.org/docs/Web/CSS/Using_CSS_custom_properties "Using CSS custom properties (variables) | MDN"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developer.chrome.com/blog/new-in-devtools-91) and is authored by [Jecelyn Yeen][JecelynYeen] \(Developer advocate, Chrome DevTools\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[JecelynYeen]: https://developers.google.com/web/resources/contributors/jecelynyeen
