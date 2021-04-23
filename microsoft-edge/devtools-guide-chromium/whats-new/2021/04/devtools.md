---
description: Wavy underlines highlight code issues in the Elements tool, Service worker update timeline, and more.
title: What's new in DevTools (Microsoft Edge 91)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/22/2021
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

In Microsoft Edge version 91 or later, if you're a Progressive Web App or Service Worker developer, you may display the update lifecycle of your Service Workers as a timeline in the **Application** tool.  This feature helps you understand the time your Service Worker spends in each of the following stages.  

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

## Announcements from the Chromium project  

[!INCLUDE [contact DevTools team note](../../includes/chromium-whats-new-note.md)]  

### Visualize CSS scroll-snap  

You may now toggle the `scroll-snap` badge in the **Elements** tool to inspect the CSS scroll-snap alignment.  

:::image type="complex" source="image/dPDCek3EhZgLQPGtEG3y0fTn4v82/H3smYZG2alG5PQU3BHw3.msft.png" alt-text="CSS scroll-snap" lightbox="image/dPDCek3EhZgLQPGtEG3y0fTn4v82/H3smYZG2alG5PQU3BHw3.msft.png":::
   CSS scroll-snap  
:::image-end:::  

When an HTML element on your webpage \(for example this [Scroll Snap Demo][GithubMathiasbynensCssDbgStoriesCssScrollSnapHtml] webpage\) has `scroll-snap-type` applied to it, a `scroll-snap` badge displays next to it in the **Elements** tool.  Choose the badge to turn on \(or off\) the display of a scroll-snap overlay on the webpage.
In the example above, dot marks display on snap edges.  The scroll port has solid outlined while the snap items have dash outlines.  The scroll padding is filled in green color while the scroll margin is filled in orange.  

To review the history of this feature in the Chromium open-source project, navigate to Issue [862450][CR862450].  

### New Memory inspector  

Use the new **Memory inspector** to inspect an `ArrayBuffer` in JavaScript, and the Wasm memory.  
Open the [Memory in JS][GlitchMemoryInspectorDemoJsHtml].  In the **Sources** tool, open the **demo-js.js** file, and set a breakpoint at line 15.
Refresh the webpage.  Expand the **Scope** section in the right **debugger** pane.  Notice the new icon next to the **buffer** value.  Choose it to reveal the **Memory Inspector**.  

Try the [Memory in Wasm][GlitchMemoryInspectorDemoWasmHtml] for Wasm memory inspection.  

:::image type="complex" source="image/dPDCek3EhZgLQPGtEG3y0fTn4v82/7CY7ijbHVfFFl7DM3lLT.msft.png" alt-text="Memory inspector" lightbox="image/dPDCek3EhZgLQPGtEG3y0fTn4v82/7CY7ijbHVfFFl7DM3lLT.msft.png":::
   Memory inspector  
:::image-end:::  

To review the history of this feature in the Chromium open-source project, navigate to Issue [1166577][CR1166577].  

### New Badge settings pane in the Elements tool  

You may now turn on or off individual badges using the **Badge settings** in the **Elements** tool.  Use this feature to customize and stay focused on the important badges while inspecting web webpages.  

:::image type="complex" source="image/dPDCek3EhZgLQPGtEG3y0fTn4v82/BliSe8qwK8G6lFvNtmTv.msft.png" alt-text="Badge settings pane in the Elements tool" lightbox="image/dPDCek3EhZgLQPGtEG3y0fTn4v82/BliSe8qwK8G6lFvNtmTv.msft.png":::
   **Badge settings** pane in the **Elements** tool  
:::image-end:::  

In the **Elements** tool, hover on any element, and open the contextual menu \(right-click\).  Choose **Badge settings** from the contextual menu \(right-click\), the badge settings pane appears on top.  Turn on or off any checkbox to show/hide the badges.  

<!--  To review the history of this feature in the Chromium open-source project, navigate to Issue [1066772][CR1066772].  -->  

### Enhanced image preview with aspect ratio information  

In the **Elements** tool, image previews now display more information on the image.  More information includes rendered size, rendered aspect ratio, intrinsic size, intrinsic aspect ratio, and file size.  The information helps you better understand your images and apply optimization if you need to.  

:::image type="complex" source="image/dPDCek3EhZgLQPGtEG3y0fTn4v82/LvPDU04gjOhjWJ2h2bdi.msft.png" alt-text="Image preview with aspect ratio information" lightbox="image/dPDCek3EhZgLQPGtEG3y0fTn4v82/LvPDU04gjOhjWJ2h2bdi.msft.png":::
   Image preview with aspect ratio information  
:::image-end:::  

The image aspect ratio information is available in the **Network** tool as well when you choose an image preview.  

:::image type="complex" source="image/dPDCek3EhZgLQPGtEG3y0fTn4v82/blVl3UjoEBw90AXgEs9I.msft.png" alt-text="Image aspect ratio information in the Network tool" lightbox="image/dPDCek3EhZgLQPGtEG3y0fTn4v82/blVl3UjoEBw90AXgEs9I.msft.png":::
   Image aspect ratio information in the **Network** tool  
:::image-end:::  

To review the history of this feature in the Chromium open-source project, navigate to Issues [1149832][CR1149832] and [1170656][CR1170656].  

### New network conditions button with options to configure `Content-Encoding`s  

In the **Network** tool, a new network conditions button displays.  To open the **Network conditions** tab, choose the button.  In the **Network conditions** tab, a new **Accepted Content-Encodings** option now displays.  To to test if server responses are encoded correctly for browsers that don't support gzip, brotli, or another future `Content-Encoding`, configure the **Accepted Content-Encodings**.  To review the history of this feature in the Chromium open-source project, navigate to Issue [1162042][CR1162042].  

:::image type="complex" source="image/dPDCek3EhZgLQPGtEG3y0fTn4v82/ygmMhry5lBawc7EcfJog.msft.png" alt-text="New network conditions button with options to configure Content-Encoding" lightbox="image/dPDCek3EhZgLQPGtEG3y0fTn4v82/ygmMhry5lBawc7EcfJog.msft.png":::
   New network conditions button with options to configure `Content-Encoding`  
:::image-end:::  

### Styles pane enhancements  

#### New shortcut to display computed value in the Styles pane  

Now, To display the computed CSS value in the **Styles** pane, hover on a CSS property, open the contextual menu \(right-click\), and choose **View computed value**.  To review the history of this feature in the Chromium open-source project, navigate to Issue [1076198][CR1076198].  

:::image type="complex" source="image/dPDCek3EhZgLQPGtEG3y0fTn4v82/3neADdgFglmViAxnZ6zS.msft.png" alt-text="New shortcut to display computed value" lightbox="image/dPDCek3EhZgLQPGtEG3y0fTn4v82/3neADdgFglmViAxnZ6zS.msft.png":::
   New shortcut to display computed value  
:::image-end:::  

#### Support for the accent-color keyword  

The autocomplete UI of the Styles pane now detects the `accent-color` CSS keyword, which allows you to specify the accent color for UI controls generated by the element.  For more information, navigate to [Widget Accent Colors: the accent-color property][CsswgDraftsCssUi4WidgetAccent].  UI controls that are generated by an element include a checkbox or radio button.  For more information about the Chromium implementation, navigate to [Feature: accent-color CSS property][ChromestatusFeature4752739957473280].  To turn on this feature, navigate to `edge://flags#enable-experimental-web-platform-features` and set the checkbox to `Enabled`.  To review the history of this feature in the Chromium open-source project, navigate to Issue [1092093][CR1092093].  

:::image type="complex" source="image/dPDCek3EhZgLQPGtEG3y0fTn4v82/y4oS3jvinp4fgfxav4tP.msft.png" alt-text="accent-color" lightbox="image/dPDCek3EhZgLQPGtEG3y0fTn4v82/y4oS3jvinp4fgfxav4tP.msft.png":::
   accent-color  
:::image-end:::  

### Display details about blocked features in the Frame details view  

You may now display details on blocked features under the **Permissions policy** section in the Frame details view.  
To display the details on why the feature is blocked, complete the following actions.  

1.  Navigate to [OOPIF Permissions Policy][GlitchPermissionPolicyDemoMain].  
1.  Navigate to the **Application** tool.  
1.  Choose a frame.  
1.  Navigate to the **Permissions Policy** section.  
1.  Navigate to the **Disabled Features** property.  
1.  Choose **Show details**.  
1.  Choose the icon next to each policy to navigate to the iframe or network request that blocked the feature.  
    
The Permissions Policy is a web platform API.  The Permissions Policy gives a webpage the ability to allow or block the use of browser features in an individual frame or in an `iframe` that it embeds.  For more information, navigate to [Permissions Policy Explainer][GithubW3cWebappsecPermissionsPolicyPermissionsPolicyExplainerMd].  To review the history of this feature in the Chromium open-source project, navigate to Issue [1158827][CR1158827].  

:::image type="complex" source="image/dPDCek3EhZgLQPGtEG3y0fTn4v82/8GxecpqtEUv3xoocvcLi.msft.png" alt-text="Blocked features in the Frame details view" lightbox="image/dPDCek3EhZgLQPGtEG3y0fTn4v82/8GxecpqtEUv3xoocvcLi.msft.png":::
   Blocked features in the Frame details view  
:::image-end:::  

### Filter experiments in the Experiments setting  

Find experiments quicker with the new experiment filter.  For example, to filter all the experiments with the `contrast` term, complete the following actions.  

1.  Navigate to **Settings** > **Experiments**.  
1.  Navigate to the **Filter** textbox.  
1.  Type `contrast`.  
    
:::image type="complex" source="image/dPDCek3EhZgLQPGtEG3y0fTn4v82/dwGsjklZTIihki8uYLTn.msft.png" alt-text="Filter experiments in the Experiments setting" lightbox="image/dPDCek3EhZgLQPGtEG3y0fTn4v82/dwGsjklZTIihki8uYLTn.msft.png":::
   Filter experiments in the Experiments setting  
:::image-end:::  

### New Vary Header column in the Cache storage pane  

Use the new `Vary Header` column in the **Cache Storage** pane to display the [Vary][HttpwgSpecsRfc7231HtmlHeaderVary] HTTP response header.  To review the history of this feature in the Chromium open-source project, navigate to Issue [1186049][CR1186049].  

:::image type="complex" source="image/dPDCek3EhZgLQPGtEG3y0fTn4v82/NA5OmN8upMB3thEwXHKE.msft.png" alt-text="Vary Header column" lightbox="image/dPDCek3EhZgLQPGtEG3y0fTn4v82/NA5OmN8upMB3thEwXHKE.msft.png":::
   Vary Header column  
:::image-end:::  

### Sources tool improvements  

#### Support for new JavaScript features  

DevTools now support the new [Private brand checks a.k.a. #foo in obj][V8DevFeaturesPrivateBrandChecks] JavaScript language feature, a.k.a `#foo in obj`.  The private brand checks feature extends the [in operator][MdnDocsWebJavascriptReferenceOperatorsIn] to support the [Private class fields][V8DevFeaturesClassFieldsPrivateClassFields] to test on a specific object.  Try it in the **Console** and **Sources** tools.  Also, to inspect the private fields, complete the following actions.  

1.  Navigate to **debugger** pane.  
1.  Navigate to the **Scope** section.  
    
To review the history of this feature in the Chromium open-source project, navigate to Issue [11374][CR11374].  

:::image type="complex" source="image/dPDCek3EhZgLQPGtEG3y0fTn4v82/RCw19qd1bZOeNFydsUCW.msft.png" alt-text="JavaScript private brand checks" lightbox="image/dPDCek3EhZgLQPGtEG3y0fTn4v82/RCw19qd1bZOeNFydsUCW.msft.png":::
   JavaScript private brand checks  
:::image-end:::  

#### Enhanced support for breakpoints debugging  

In Microsoft Edge version 90 or earlier, DevTools only set breakpoints on one raw location.  In Microsoft Edge version 91 or later, DevTools properly set breakpoints in multiple scripts.  This feature is a modern support code splitting feature.  Scenarios exist where one shared component is included in multiple routes \(code splits\).  JavaScript bundlers include [Webpack](https://webpack.js.org), and [Rollup](https://rollupjs.org/).  In Microsoft Edge version 91 or later, DevTools sets breakpoints in all relevant locations correctly.  To review the history of this feature in the Chromium open-source project, navigate to Issues [1142705][CR1142705], [979000][CR979000], and [1180794][CR1180794].  

#### Support hover preview with [] notation  

DevTools now support hover preview on JavaScript member expressions that use the `[]` notation in the **Sources** tool.  

:::image type="complex" source="image/dPDCek3EhZgLQPGtEG3y0fTn4v82/XFxlQjvLVWJUiV24zDw2.msft.png" alt-text="Support hover preview with [] notation" lightbox="image/dPDCek3EhZgLQPGtEG3y0fTn4v82/XFxlQjvLVWJUiV24zDw2.msft.png":::
   Support hover preview with `[]` notation  
:::image-end:::  

To review the history of this feature in the Chromium open-source project, navigate to Issue [1178305][CR1178305].  

#### Improved outline of HTML files  

DevTools now has better outline support for `.html` files.  In the **Sources** tool, open the `.html` file.  To turn on \(or off\) the code outline, select `Ctrl`+`Shift`+`O` on Windows/Linux or `Cmd`+`Shift`+`O` on macOS.  In the following figure, DevTools now correctly list all functions in the outline.  Previously, DevTools only displayed some of the functions.  To review the history of this feature in the Chromium open-source project, navigate to Issues [761019][CR761019] and [1191465][CR1191465].  

:::image type="complex" source="image/dPDCek3EhZgLQPGtEG3y0fTn4v82/tOzDFrFwQNbDG4mlexd3.msft.png" alt-text=" Improved outline of HTML files" lightbox="image/dPDCek3EhZgLQPGtEG3y0fTn4v82/tOzDFrFwQNbDG4mlexd3.msft.png":::
   Improved outline of HTML files  
:::image-end:::  

#### Proper error stack traces for Wasm debugging  

In Microsoft Edge version 90 or earlier, DevTools only displayed generic Wasm references in the Error stack traces.  
In Microsoft Edge version 91 or later, DevTools resolves inline function requests and displays proper error stack traces for Wasm debugging.  

:::image type="complex" source="image/dPDCek3EhZgLQPGtEG3y0fTn4v82/rIngYpWX5CrxGhmtIL1L.msft.png" alt-text="Proper error stack traces for Wasm debugging" lightbox="image/dPDCek3EhZgLQPGtEG3y0fTn4v82/rIngYpWX5CrxGhmtIL1L.msft.png":::
   Proper error stack traces for Wasm debugging  
:::image-end:::  

The old version of Microsoft Edge on the left does not display the source location \(for example `dsquare`\) in the Error stack traces, whereas the new version on the right does.  

To review the history of this feature in the Chromium open-source project, navigate to Issue [1189161][CR1189161].  

## Download the Microsoft Edge preview channels  

If you are on Windows, Linux, or macOS, consider using the [Microsoft Edge preview channels][MicrosoftEdgePreviewChannels] as your default development browser.  The preview channels give you access to the latest DevTools features.  

## Getting in touch with Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../../includes/contact-whats-new-note.md)]

<!-- links -->  

[DevtoolsWhatsNew202001DevtoolsUsingDevtoolsInOtherLanguages]: ../../2020/01/devtools.md#using-the-devtools-in-other-languages "Using the DevTools in other languages - What's New In DevTools (Microsoft Edge 81) | Microsoft Docs"  
[DevtoolsWhatsNew202011Devtools]: ../../2020/11/devtools.md "What's new in DevTools (Microsoft Edge 88) | Microsoft Docs"  
[DevtoolsWhatsNew202011DevtoolsCssVariableDefinitionsInStylesPane]: ../../2020/11/devtools.md#css-variable-definitions-in-styles-pane "CSS variable definitions in Styles pane - What's New in DevTools (Microsoft Edge 88) | Microsoft Docs"  
[DevtoolsWhatsNew202102Devtools]: ../02/devtools.md "What's New In DevTools (Microsoft Edge 90) | Microsoft Docs"  
[DevtoolsWhatsNew202102DevtoolsGroupToolsTogetherInFocusMode]: ../02/devtools.md#group-tools-together-in-focus-mode "Group tools together in Focus Mode - What's New In DevTools (Microsoft Edge 90) | Microsoft Docs"  
[DevtoolsCommandMenuIndexOpenCommandMenu]: ../../../command-menu/index.md#open-the-command-menu "Open the Command Menu - Run commands with the Microsoft Edge DevTools Command menu | Microsoft Docs"  
[DevtoolsCustomizeLocalization]: ../../../customize/localization.md "Change DevTools language settings | Microsoft Docs"  
[DevtoolsIssuesIndex]: ../../../issues/index.md "Find and fix problems with the Microsoft Edge DevTools Issues tool | Microsoft Docs"  
[DevtoolsServiceWorkerIndex]: ../../../service-workers/index.md "Service Worker improvements | Microsoft Docs"  
[ProgressiveWebAppsServiceworkerServiceWorkerLifecycle]: ../../../../progressive-web-apps-chromium/serviceworker.md#the-service-worker-lifecycle "The Service Worker lifecycle - Use Service Workers to manage network requests and push notifications | Microsoft Docs"  
[ProgressiveWebAppsWebappmanifests]: ../../../../progressive-web-apps-chromium/webappmanifests.md "Use the Web App Manifest to integrate your Progressive Web App into the Operating System | Microsoft Docs"  

[GithubMicrosoftVscodeEdgeDevtools]: https://github.com/microsoft/vscode-edge-devtools "microsoft/vscode-edge-devtools | GitHub"  
<!--[GithubMicrosoftVscodeEdgeDevtoolsPullxxx]: https://github.com/microsoft/vscode-edge-devtools/pull/xxx "Pull xxx: Lorem al Ipsum | GitHub"  -->  

[MicrosoftEdgePreviewChannels]: https://www.microsoftedgeinsider.com/download "Microsoft Edge Preview Channels"  

[VisualstudioCodeDocsEditorExtensionGalleryUpdateExtensionManually]: https://code.visualstudio.com/docs/editor/extension-gallery#_update-an-extension-manually "Update an extension manually - Extension Marketplace | Visual Studio Code"  

[VisualstudioMarketplaceMsEdgedevtoolsVscodeEdgeDevtools]: https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools "Microsoft Edge Tools for Visual Studio Code | Visual Studio Marketplace"  
[VisualstudioMarketplaceMsjsdiagDebuggerForEdge]: https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-edge "Debugger for Microsoft Edge | Visual Studio Marketplace"  

[ChromestatusFeature4752739957473280]: https://chromestatus.com/feature/4752739957473280 "Feature: accent-color CSS property | Chrome Platform Status"  

[CsswgDraftsCssUi4WidgetAccent]: https://drafts.csswg.org/css-ui-4/#widget-accent "Widget Accent Colors: the accent-color property - CSS Basic User Interface Module Level 4 | CSS Working Group Editor Drafts"  

[CRIssuesList]: https://bugs.chromium.org/p/chromium/issues/list "Chromium bugs"  
[CR11374]: https://crbug.com/v8/11374 "Issue 11374: Implement ergonomic brand checking for private fields"  
[CR761019]: https://crbug.com/761019 "Issue 761019: 'Go to symbol' misses the first function and prefers a worse match if it contains all the typed chars"  
[CR862450]: https://crbug.com/862450 "Issue 862450: [css-scroll-snap] Consider adding Devtools feature for css scroll snap"  
[CR979000]: https://crbug.com/979000 "Issue 979000: Source maps with colliding sources paths don't work."  
[CR1066604]: https://crbug.com/1066604 "Issue 1066604: DevTools: See details about ServiceWorker install and activate events | Chromium bugs"  
<!--  [CR1066772]: https://crbug.com/1066772 "Issue 1066772: "  locked  -->  
[CR1076198]: https://crbug.com/1076198 "Issue 1076198: [Feature Request] Jump to computed property from `styles` tab"  
[CR1092093]: https://crbug.com/1092093 "Issue 1092093: Make form controls more color-stylable by supporting the 'accent-color' CSS property"  
[CR1136655]: https://crbug.com/1136655 "Issue 1136655: Devtools: Localization V2 | Chromium bugs"  
[CR1142705]: https://crbug.com/1142705 "Issue 1142705: breakpoints stop working when 2 sourcemaps point to the same virtual file when using webpack"  
[CR1149832]: https://crbug.com/1149832 "Issue 1149832: Feature request: image preview should also show file size"  
[CR1158827]: https://crbug.com/1158827 "Issue 1158827: [Permissions Policy] Implement devtool support for permissions policy"  
[CR1162042]: https://crbug.com/1162042 "Issue 1162042: DevTools: support disabling gzip/brotli/jxl content-encoding"  
[CR1166577]: https://crbug.com/1166577 "Issue 1166577: ☂️ Linear Memory Inspector 1.0"  
[CR1170656]: https://crbug.com/1170656 "Issue 1170656: Show intrinsic aspect-ratio"  
[CR1178305]: https://crbug.com/1178305 "Issue 1178305: Debugger doesn't show an indexed element's property value when it's hovered"  
[CR1180794]: https://crbug.com/1180794 "Issue 1180794: Breakpoints don't work with Closure Compiler inlining optimization"  
[CR1185945]: https://crbug.com/1185945 "Issue 1185945: Manifest warning implies all icons must be square | Chromium bugs"  
[CR1186049]: https://crbug.com/1186049 "Issue 1186049: Column for Vary: header in Cache Storage viewer"  
[CR1187735]: https://crbug.com/1187735 "Issue 1187735: Accessibility: MAS2.1.1: Keyboard: Unable to invoke the 'Var(..)' function using keyboard | Chromium bugs"  
[CR1189161]: https://crbug.com/1189161 "Issue 1189161: `new Error` stacktraces are not transformed via DWARF"  
[CR1191465]: https://crbug.com/1191465 "Issue 1191465: Ctrl+Shift+O broken on HTML"  

[GithubMathiasbynensCssDbgStoriesCssScrollSnapHtml]: https://mathiasbynens.github.io/css-dbg-stories/css-scroll-snap.html "Scroll Snap Demo | GitHub"  

[GithubW3cWebappsecPermissionsPolicyPermissionsPolicyExplainerMd]: https://github.com/w3c/webappsec-permissions-policy/blob/main/permissions-policy-explainer.md "Permissions Policy Explainer | GitHub"  

[GlitchMemoryInspectorDemoJsHtml]: https://memory-inspector.glitch.me/demo-js.html "Memory in JS | Glitch"  
[GlitchMemoryInspectorDemoWasmHtml]: https://memory-inspector.glitch.me/demo-wasm.html "Memory in Wasm | Glitch"  
[GlitchPermissionPolicyDemoMain]: http://permission-policy-demo.glitch.me "OOPIF Permissions Policy | Glitch"  

[HttpwgSpecsRfc7231HtmlHeaderVary]: https://httpwg.org/specs/rfc7231.html#header.vary "Vary - Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content | IETF HTTP Working Group"  

[MdnDocsWebCssUsingCssCustomProperties]: https://developer.mozilla.org/docs/Web/CSS/Using_CSS_custom_properties "Using CSS custom properties (variables) | MDN"  

[MdnDocsWebJavascriptReferenceOperatorsIn]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/in "in operator | MDN"  

[PwabuilderImagegenerator]: https://www.pwabuilder.com/imageGenerator "Image Generator | PWABuilder"  

[V8DevFeaturesPrivateBrandChecks]: https://v8.dev/features/private-brand-checks "Private brand checks a.k.a. #foo in obj | V8"  
[V8DevFeaturesClassFieldsPrivateClassFields]: https://v8.dev/features/class-fields#private-class-fields "Private class fields - Public and private class fields | V8"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developer.chrome.com/blog/new-in-devtools-91) and is authored by [Jecelyn Yeen][JecelynYeen] \(Developer advocate, Chrome DevTools\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[JecelynYeen]: https://developers.google.com/web/resources/contributors/jecelynyeen
