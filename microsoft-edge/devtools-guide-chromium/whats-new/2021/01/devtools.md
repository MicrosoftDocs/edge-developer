---
description: Debugging support for Trusted Types violations, capture node screenshot beyond viewport, new Trust Tokens tab for network requests and more.
title: What's new in DevTools (Microsoft Edge 89)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/25/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---

# What's New In DevTools (Microsoft Edge 89)  

[!INCLUDE [contact DevTools team note](../../includes/edge-whats-new-note.md)]  

## The What's New tool is now Welcome  

<!--  Title: View Edge DevTools updates in the Welcome tool, formerly What's New  -->  
<!--  Subtitle: The What's New tool now has a new appearance and a new name:  Welcome -->  

:::image type="icon" source="../../media/2020/06/experimental-tag-14px.msft.png":::  

The **What's New** tool in the Microsoft Edge DevTools now has a new appearance and a new name:  **Welcome**.  The **Welcome** tool still displays the latest DevTools news and updates.  It now also includes links to Microsoft Edge DevTools documentation, ways to submit feedback, and more.  

To display the **Welcome** tool after each update, in the **Welcome** tool, choose the checkbox next to **Open tab after each update**.  To close the **Welcome** tool, on the right side of the tab, choose the `X`.  

If you prefer the original **What's New** tool, navigate to [Settings][DevtoolsCustomizeIndexSettings] > **Experiments** and remove the checkbox next to **Enable Welcome tab**.  

# Enable + button tab menus to open more tools  

<!--  Title: Enable + button tab menus to open more tools  -->  
<!--  Subtitle: A convenient way to open new tools in Microsoft Edge DevTools -->  

:::image type="icon" source="../../media/2020/06/experimental-tag-14px.msft.png":::  

A new way to open more tools in Microsoft Edge DevTools.  After you turn on this experiment, a plus sign \(`+`\) displays to the right of the tab group.  To display a list of other tools that you may add to the tab bar, choose the **More Tools** \(`+`\) icon.  

:::image type="complex" source="../../media/2021/01/more-tools.msft.png" alt-text="More Tools in the top pane" lightbox="../../media/2021/01/more-tools.msft.png":::
   **More Tools** in the top pane  
:::image-end:::  

To turn on this experiment, navigate to [Settings][DevtoolsCustomizeIndexSettings] > **Experiments**  and choose the checkbox next to **Enable + button tab menus to open more tools**.  

## Visual Font Editor in the Styles pane  

<!--  Title: Visual font editor in the Styles pane  -->  
<!--  Subtitle: Visual font editor in the Styles pane -->  

:::image type="icon" source="../../media/2020/06/experimental-tag-14px.msft.png":::  

For style definitions that contain font information, a visual [Font Editor][DevtoolsInspectStylesEditFonts] is available.  You may define fallback fonts and use sliders to define font weight, size, line-height, and spacing.  The **Font Editor** allows you to switch between different units and keywords for the different font properties, converts the units, and generates the correct CSS code for you.  

:::image type="complex" source="../../media/2021/01/visual-font-editor.msft.png" alt-text="Visual Font editor in the Styles pane" lightbox="../../media/2021/01/visual-font-editor.msft.png":::
   Visual **Font editor** in the **Styles** pane  
:::image-end:::  

To turn on this experiment, navigate to [Settings][DevtoolsCustomizeIndexSettings] > **Experiments** and choose the checkbox next to **Enable new Font Editor tools within Styles pane**.  For more information, navigate to [Edit CSS font styles and settings in the Styles pane in DevTools][DevtoolsInspectStylesEditFonts].  To review the history of this feature in the Chromium open-source project, navigate to Issue [1093229][CR1093229].  

## Emulate Surface Duo and Samsung Galaxy Fold  

<!--  Title: Emulate new dual-screen and foldable devices  -->  
<!--  Subtitle: Test the appearance and feel of your website or app with Surface Duo and Samsung Galaxy Fold emulators -->  

This feature is now available by default in Microsoft Edge version 89.  Test the appearance and feel of your website or app on the following two new devices in Microsoft Edge.  

*   [Surface Duo][MicrosoftSurfaceDevicesSurfaceDuo]  
*   [Samsung Galaxy Fold][SamsungUsMobileGalaxyFold]  
    
To help enhance your website or app for the dual-screen and foldable devices, use the following features when [emulating the device][DevtoolsDeviceModeIndex].  

*   [Spanning][SpanningPlaceholder], which is when your website \(or app\) appears across both screens.  
*   [Rendering the seam][DualScreenIntroductionHowToWorkWithSeam], which is the space between the two screens.  
*   Turn on **experimental Web Platform features** to access the new [CSS media screen-spanning feature][DualScreenWebCssMediaSpanning] and [getWindowSegments JavaScript API][DualScreenWebJavascriptGetwindowsegments].  Navigate to `edge://flags` and toggle the flag next to **Experimental Web Platform features**.  
    
:::image type="complex" source="../../media/2021/01/emulate-surface-device-surface-duo.msft.png" alt-text="Emulate dual-screen" lightbox="../../media/2021/01/emulate-surface-device-surface-duo.msft.png":::
   Emulate dual-screen  
:::image-end:::  

To review the history of this feature in the Chromium open-source project, navigate to Issue [1054281][CR1054281].  

## Windows Narrator now announces count and position of CSS suggestions  

<!--  Title: Windows Narrator now announces count and position of CSS suggestions  -->  
<!--  Subtitle: CSS suggestions are now easier to navigate via screen readers -->  

Screen reader users are now able to navigate CSS suggestions in the **Styles** pane.  In Microsoft Edge version 88 and earlier, Narrator and Voiceover announced `Suggestion` as a user navigated through the list of suggestions when entering CSS in the **Styles** pane.  In Microsoft Edge version 89, a screen reader user now hears the count and position of the current suggestion.  Each suggestion is announced as the user navigates through the list of suggestions \(example, Suggestion 3 of 5\).  To learn more about writing CSS in the DevTools, navigate to [Change CSS][DevtoolsCssReferenceChangeCss].  

:::image type="complex" source="../../media/2021/01/announce-css-suggestion.msft.png" alt-text="Announce the count and position of the current CSS suggestion" lightbox="../../media/2021/01/announce-css-suggestion.msft.png":::
   Announce the count and position of the current CSS suggestion  
:::image-end:::  

To review the history of this feature in the Chromium open-source project, navigate to Issue [1157329][CR1157329].  

## CSS flexbox debugging tools  

### New flex adorners help identify and visualize flex containers  

<!--  Title: Visualize flexbox containers with flex adorners  -->  
<!--  Subtitle: New flex adorners in the Elements tool help you identify flexbox containers in your code.  When toggled, the adorner displays and hides outlines of the flex container to help you debug the layout -->  

:::image type="icon" source="../../media/2020/06/experimental-tag-14px.msft.png":::  

In the **Elements** pane, new `flex` adorners help you identify flexbox containers in your code.  Choose the `flex` adorner toggles an on-page overlay that outlines the flexbox container.  

You may customize the color of the overlay in the **Layout** subpane next to **Styles** and **Computed**.  Flexbox debugging features are in active development.  <!--  Try the latest in the [Insider builds](#download-the-microsoft-edge-preview-channels).  -->  

:::image type="complex" source="../../media/2021/01/elements-flex-container.msft.png" alt-text="flexbox adorner" lightbox="../../media/2021/01/elements-flex-container.msft.png":::
   flexbox adorner
:::image-end:::  

To turn on this experiment, navigate to [Settings][DevtoolsCustomizeIndexSettings] > **Experiments**  and choose the checkbox next to **Enable new CSS Flexbox debugging features**.  To review the history of this feature in the Chromium open-source project, navigate to Issues [1136394][CR1136394] and [1139949][CR1139949].  

### Visualize how CSS properties affect flexbox layouts with autocomplete alignment icons  

<!--  Title: Flexbox alignment icons added to CSS autocomplete  -->  
<!--  Subtitle: CSS autocomplete in the Styles tool now displays icons next to relevant flexbox properties to help you visualize the effect that property has on your flexbox layout -->  

:::image type="icon" source="../../media/2020/06/experimental-tag-14px.msft.png":::  

To help you visualize the effect the property has on your flexbox layout, CSS autocomplete in the **Styles** pane now displays icons next to relevant flexbox properties.

To try this new feature, open **Elements** and select a flex container.  Then, add or change a property on that container in the Styles pane.  The autocomplete menu now displays icons indicating the effect of alignment properties such as `align-content` and `align-items`.  Flexbox debugging features are in active development.  <!--  Try the latest in the [Insider builds](#download-the-microsoft-edge-preview-channels).  -->  

DevTools now displays a guiding line to help you better visualize the `align-items` CSS property.  The `gap` CSS property is supported as well.  In the example, the `gap` CSS property is set to `gap: 12px;`.  The hatching pattern for each gap is relevant.  

:::image type="complex" source="../../media/2021/01/elements-flex-container-align.msft.png" alt-text="flexbox align- preview" lightbox="../../media/2021/01/elements-flex-container-align.msft.png":::
   flexbox `align-` preview
:::image-end:::  

To turn on this experiment, navigate to [Settings][DevtoolsCustomizeIndexSettings] > **Experiments**  and choose the checkbox next to **Enable new CSS Flexbox debugging features**.  To review the history of this feature in the Chromium open-source project, navigate to Issues [1136394][CR1136394] and [1139949][CR1139949].  

## Microsoft Edge Developer Tools for Visual Studio Code version 1.1.2  

The [Microsoft Edge Developer Tools for Visual Studio Code][VisualstudioMarketplaceMsEdgedevtoolsVscodeEdgeDevtools] extension for Microsoft Visual Studio Code version 1.1.2 is regularly updated.  Not much of the UI has changed in the extension.  The following list of the work items were completed since the previous release.  

*   Bumped [Microsoft Edge DevTools][DevtoolsMain] version from 84.0.522.63 to 85.0.564.40 \([#235][GithubMicrosoftVscodeEdgeDevtoolsPull235]\)  
*   Included [Debugger for Microsoft Edge][VisualstudioMarketplaceMsjsdiagDebuggerMicrosoftEdge] as a dependency  \([#233][GithubMicrosoftVscodeEdgeDevtoolsPull233]\)  
*   Implemented settings option to change extension themes \([#229][GithubMicrosoftVscodeEdgeDevtoolsPull229]\)  
*   Added a **Close instance** button to each item on the target list \([#248][GithubMicrosoftVscodeEdgeDevtoolsPull248]\)  

You may file issues and contribute to the extension on the [GitHub Repo][GithubMicrosoftVscodeEdgeDevtools].  

## Announcements from the Chromium project  

[!INCLUDE [contact DevTools team note](../../includes/chromium-whats-new-note.md)]  

### Debugging support for Trusted Types violations  

#### Breakpoint on Trusted Type violations  

<!--todo: chris and rachel codepen sample? -->  
<!--todo:  replacement for web.dev  -->  

You may now set breakpoints and catch exceptions on Trusted Type Violations in the **Sources** tool.  

[Trusted Types][GithubW3cWebappsecTrustedTypes] API helps you prevent DOM-based cross-site scripting vulnerabilities.  For more information about how to write, review and maintain apps free of DOM XSS vulnerabilities with Trusted Types, navigate to [Prevent DOM-based cross-site scripting vulnerabilities with Trusted Types][WebDevTrustedTypes].  

To pause on the exceptions, complete the following actions.  

1.  In the **Sources** tool, open the **debugger** sidebar pane.  
1.  Expand the **CSP Violation Breakpoints** section and choose checkbox next to **Trusted Type violations**.  
    
To try a demo on Glitch, navigate to [Page with TT violations][GlitchTtEnforced].  

:::image type="complex" source="../../media/2021/01/devtools/trusted-type-violations.msft.png" alt-text="Breakpoint on Trusted Type violations" lightbox="../../media/2021/01/devtools/trusted-type-violations.msft.png":::
   Breakpoint on Trusted Type violations  
:::image-end:::  

To review the history of this feature in the Chromium open-source project, navigate to Issue [1142804][CR1142804].  

### Capture node screenshot beyond viewport  

You may now capture node screenshots for a full node, including content below the fold.  Previously, the screenshot was cut off for content not visible in the viewport.  The full-page screenshots are now precise.  

In the **Elements** tool, hover on an element, open the contextual menu \(right-click\), and choose **Capture node screenshot**.  

:::image type="complex" source="../../media/2021/01/capture-node-screenshot.msft.png" alt-text="Capture node screenshot beyond viewport" lightbox="../../media/2021/01/capture-node-screenshot.msft.png":::
   **Capture node screenshot** beyond viewport  
:::image-end:::  

To review the history of this feature in the Chromium open-source project, navigate to Issue [1003629][CR1003629].  

### Elements tool updates  

#### Support forcing the :target CSS state  

<!--todo: create a new demo  -->  

You may now use DevTools to force and inspect the `:target` CSS state.  

In the **Elements** tool, choose an element and toggle the element state.  Turn on the `:target` checkbox to force and inspect the styles.  

Use the `:target` pseudo-class to style element when the hash in the URL and the ID of an element are the same.  This feature allows you to test styles without having to manually change the URL all the time.  To try a demo, navigate to [:target CSS state][JecFyiDemoCssTargetSection2].  

:::image type="complex" source="../../media/2021/01/hov-force-target.msft.png" alt-text="Force the :target CSS state" lightbox="../../media/2021/01/hov-force-target.msft.png":::
   Force the `:target` CSS state  
:::image-end:::

To review the history of this feature in the Chromium open-source project, navigate to Issue [1156628][CR1156628].  

#### New shortcut to duplicate element  

Use the new **Duplicate element** shortcut to clone an element instantly.  In the **Elements** tool, hover on an element, open the contextual menu \(right-click\), choose **Duplicate element**.  A new element is created under it.  Instead, you may duplicate element with keyboard shortcuts:  

*   macOS:  `Shift`+`Option`+`down arrow`  
*   Window/Linux:  `Shift`+`Alt`+`down arrow`  

:::image type="complex" source="../../media/2021/01/elements-duplicate-element.msft.png" alt-text="Duplicate element" lightbox="../../media/2021/01/elements-duplicate-element.msft.png":::
   **Duplicate element**  
:::image-end:::

To review the history of this feature in the Chromium open-source project, navigate to Issue [1150797][CR1150797].  

#### Color pickers for custom CSS properties  

The **Styles** pane now displays color pickers for custom CSS properties.  To cycle through the RGBA, HSLA, and Hex formats of the color value, hold `Shift` and choose the color picker.  

:::image type="complex" source="../../media/2021/01/elements-styles-change-color-format.msft.png" alt-text="Color pickers for custom CSS properties" lightbox="../../media/2021/01/elements-styles-change-color-format.msft.png":::
   Color pickers for custom CSS properties  
:::image-end:::  

To review the history of this feature in the Chromium open-source project, navigate to Issue [1147016][CR1147016].  

#### New shortcuts to copy CSS properties  

You may now copy CSS properties quicker with a few new shortcuts.  

In the **Elements** tool, choose an element.  To copy the value, in the **Styles** pane, hover on a CSS class or a CSS property, open a contextual menu \(right-click\), and choose the copy option.  

:::row:::
   :::column span="":::
      Copy options for CSS class.  
      
      *   **Copy selector**.  Copy the current selector name.  
      *   **Copy rule**.  Copy the rule of the current selector.  
      *   **Copy all declarations**.  Copy all declarations under the current rule, including non-valid and prefixed properties.  
          
      :::image type="complex" source="../../media/2021/01/copy-css-class.msft.png" alt-text="New shortcuts to copy CSS class" lightbox="../../media/2021/01/copy-css-class.msft.png":::
         New shortcuts to copy CSS class  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      Copy options for CSS property.  
      
      *   **Copy declaration**.  Copy the declaration of the current line.  
      *   **Copy property**.  Copy the property of the current line.  
      *   **Copy value**. Copy the value of the current line.  
          
      :::image type="complex" source="../../media/2021/01/copy-css-property.msft.png" alt-text="New shortcuts to copy CSS property" lightbox="../../media/2021/01/copy-css-property.msft.png":::
         New shortcuts to copy CSS property  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

To review the history of this feature in the Chromium open-source project, navigate to Issue [1152391][CR1152391].  

### Cookies updates  

#### New option to display URL-decoded cookies  

You may now opt to display the URL-decoded cookies value in the **Cookies** pane.  To display the decoded cookie, navigate to **Application** > **Cookies** pane, choose any cookie on the list, and choose the checkbox next to **Show URL decoded**.  

:::image type="complex" source="../../media/2021/01/application-cookies-show-url-decoded.msft.png" alt-text="Option to display URL-decoded cookies" lightbox="../../media/2021/01/application-cookies-show-url-decoded.msft.png":::
   Option to display URL decoded cookies  
:::image-end:::  

To review the history of this feature in the Chromium open-source project, navigate to Issue [997625][CR997625].  

#### Clear only visible cookies  

The **Clear all cookies** button in the Cookies pane is now replaced by **Clear filtered cookies** button.  

Navigate to **Application** > **Cookies**, type in the textbox to filter the cookies.  In the following figure, the list is filtered by `SM`.  To delete the visible cookies, choose the **Clear filtered cookies** button.  To display the other cookies remain in the list, clear the filter text.  Previously, your only option was **Clear all cookies**.  

:::image type="complex" source="../../media/2021/01/application-cookies-clear-filtered-cookies.msft.png" alt-text="Clear only visible cookies" lightbox="../../media/2021/01/application-cookies-clear-filtered-cookies.msft.png":::
   Clear only visible cookies  
:::image-end:::  

To review the history of this feature in the Chromium open-source project, navigate to Issue [978059][CR978059].  

#### New option to clear third-party cookies in the Storage pane  

DevTools now clear only first-party cookies by default.  Complete one of the following actions.  

*   To clear website data and only first-party cookies, complete the following actions.  
    1.  Navigate to **Application** > **Storage**.  
    1.  Choose **Clear site data**.  
*   To clear website data and all cookies, complete the following actions.  
    1.  Navigate to **Application** > **Storage**.  
    1.  Choose the checkbox next to **including third-party cookies** > **Clear site data**.  
    
    :::image type="complex" source="../../media/2021/01/application-storage-clear-site-data-including-third-party-cookies.msft.png" alt-text="Option to clear third-party cookies" lightbox="../../media/2021/01/application-storage-clear-site-data-including-third-party-cookies.msft.png":::
       Option to clear third-party cookies  
    :::image-end:::  
    
To review the history of this feature in the Chromium open-source project, navigate to Issue [1012337][CR1012337].  

### Network tool updates  

#### Persist record network log setting  

DevTools now persist the **Record network log** setting.  Previously, DevTools reset the user's choice when a webpage refreshes.  

:::image type="complex" source="../../media/2021/01/network-log.msft.png" alt-text="Record network log" lightbox="../../media/2021/01/network-log.msft.png":::
   Record network log  
:::image-end:::  

To review the history of this feature in the Chromium open-source project, navigate to Issue [1122580][CR1122580].  

#### Display WebTransport connections in the Network tool  

<!--todo:  build a demo webpage  -->  
<!--todo:  replacement for web.dev  -->  

The **Network** tool now displays WebTransport connections.  

:::image type="complex" source="../../media/2021/01/devtools/webtransport.msft.png" alt-text="WebTransport connections" lightbox="../../media/2021/01/devtools/webtransport.msft.png":::
   WebTransport connections  
:::image-end:::  

WebTransport is a new API that provides low-latency, bidirectional, client-server messaging.  For more information about the WebTransport use cases and how to give feedback about the future of the implementation, navigate to [Experimenting with WebTransport][WebDevWebtransport].  

To review the history of this feature in the Chromium open-source project, navigate to Issue [1152290][CR1152290].  

#### Online renamed to No throttling  

The network emulation option **Online** is now renamed to **No Throttling**.  

:::image type="complex" source="../../media/2021/01/network-no-throttling.msft.png" alt-text="No throttling option" lightbox="../../media/2021/01/network-no-throttling.msft.png.msft.png":::
   **No throttling** option  
:::image-end:::  

To review the history of this feature in the Chromium open-source project, navigate to Issue [1028078][CR1028078].  

### New shortcuts to copy object in the Console and Sources tool  

<!--todo:  this does not work in Canary 88.0.705.50 on macOS  -->  

You may now copy object values with the new shortcuts in the **Console** and **Sources** tools.  The ability to copy object values is useful when you have a large object \(for example, a long array\) to copy.  

:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2021/01/devtools/copy-object-console.msft.png" alt-text="Copy object in the Console" lightbox="../../media/2021/01/devtools/copy-object-console.msft.png":::
         Copy object in the **Console**  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../../media/2021/01/devtools/copy-object-sources.msft.png" alt-text="Copy object in Sources" lightbox="../../media/2021/01/devtools/copy-object-sources.msft.png":::
         Copy object in **Sources**  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

To review the history of this feature in the Chromium open-source project, navigate to Issues [1148353][CR1148353] and [1149859][CR1149859].  

### Frame details display updates  

#### New Service Workers information in the Frame details display  

DevTools now displays a dedicated service worker under the frame that creates it.  To display the details, complete the following actions.  

1.  Navigate to **Application** > **Frames** > **Service Workers** and choose a service worker.  

:::image type="complex" source="../../media/2021/01/application-frames-service-workers-details.msft.png" alt-text="Service Workers information in the Frames details" lightbox="../../media/2021/01/application-frames-service-workers-details.msft.png":::
   **Service Workers** information in the **Frames** details  
:::image-end:::  

To review the history of this feature in the Chromium open-source project, navigate to Issue [1122507][CR1122507].  

#### Measure Memory information in the Frame details display  

<!--todo:  ask rachel, do you want this published or pulled for 89?  -->  
<!--todo:  replacement for web.dev  -->  

The `performance.measureMemory()` API status is now displayed under the **API availability** section.  

The new `performance.measureMemory()` API estimates the memory usage of the entire webpage.  for more information about how to monitor the total memory usage of your webpage with the new API, navigate to [Monitor your web page's total memory usage with measureMemory()][WebDevMonitorTotalPageMemoryUsage].  

:::image type="complex" source="../../media/2021/01/application-frames-measure-memory.msft.png" alt-text="Measure Memory" lightbox="../../media/2021/01/application-frames-measure-memory.msft.png":::
   Measure Memory  
:::image-end:::  

To review the history of this feature in the Chromium open-source project, navigate to Issue [1139899][CR1139899].  

<!--cut --todo: issues tool differences and not relevant for edge webhint (check with Rachel)  
 ### Provide feedback from the Issues tab  

If you ever want to improve an issue message, navigate to **Issues** from the **Console** or **More Settings** > **More tools** > **Issues** > to open the **Issues** tab.  Expand an issue message, and choose the **Is the issue message helpful to you?**, then you may provide feedback in the pop-up.  

:::image type="complex" source="../../media/2021/01/devtools/issues-feedback.msft.png" alt-text="Issues feedback link" lightbox="../../media/2021/01/devtools/issues-feedback.msft.png":::
   Issues feedback link  
:::image-end:::  cut-->  

### Dropped frames in the Performance tool  

When you [analyze load performance in the Performance tool][DevtoolsEvaluatePerformanceReferenceRecordLoadPerformance], the **Frames** section now marks dropped frames as red.  To display the frame rate, hover on a dropped frame.  

:::image type="complex" source="../../media/2021/01/performance-frames-dropped-frames-red.msft.png" alt-text="Dropped frames" lightbox="../../media/2021/01/performance-frames-dropped-frames-red.msft.png":::
   Dropped frames  
:::image-end:::  

To review the history of this feature in the Chromium open-source project, navigate to Issue [1075865][CR1075865].  

<!--  moved up the edge announcements  -->  
<!--  ### Emulate foldable and dual-screen in Device Mode  

You may now emulate dual-screen and foldable devices in DevTools.  

After you [open the Device Toolbar][DevtoolsDeviceModeIndexSimulateMobileViewport], choose one of the following devices.  

*   **Surface Duo**  
*   **Samsung Galaxy Fold**  

Choose the new span icon to toggle between single-screen or folded and dual-screen or unfolded postures.  

You may also turn on the **Experimental Web Platform features** to access the new CSS media `screen-spanning` feature and JavaScript `getWindowSegments` API.  The experimental icon displays the state of the **Experimental Web Platform features** flag.  The icon is highlighted when the flag is turned on.  Navigate to `edge://flags` and toggle the flag.  

:::image type="complex" source="../../media/2021/01/devtools/dual-screen.msft.png" alt-text="Emulate dual-screen" lightbox="../../media/2021/01/devtools/dual-screen.msft.png":::
   Emulate dual-screen  
:::image-end:::  

To review the history of this feature in the Chromium open-source project, navigate to Issue [1054281][CR1054281].  -->  

<!--  moved up the edge announcements  -->  
<!--  #### Font editor in the Styles pane  

:::image type="icon" source="../../media/2020/06/experimental-tag-14px.msft.png":::  

In the **Elements** tool, in the **Styles** pane, the **Font Editor** icon is displayed for each element with font related properties.  The **Font Editor** is a popup editor to help you find the perfect typography for your webpage.  The popup provides a clean UI to dynamically manipulate typography with a series of intuitive input types.  

:::image type="complex" source="../../media/2021/01/devtools/font.msft.png" alt-text="Font editor in the Styles pane" lightbox="../../media/2021/01/devtools/font.msft.png":::
   **Font editor** in the **Styles** pane  
:::image-end:::  

To turn on this experiment, navigate to [Settings][DevtoolsCustomizeIndexSettings] > **Experiments**  and choose the checkbox next to **Enable new Font Editor tools within Styles pane**.  To review the history of this feature in the Chromium open-source project, navigate to Issue [1093229][CR1093229].  -->  

<!--  moved up the edge announcements  -->  
<!--  #### CSS flexbox debugging tools  

:::image type="icon" source="../../media/2020/06/experimental-tag-14px.msft.png":::  

DevTools added experimental support for flexbox debugging since last release.  

DevTools now draws a guiding line to help you better visualize the `align-items` CSS property.  The `gap` CSS property is supported as well.  In the example, the `gap` CSS property is set to `gap: 12px;`.  The hatching pattern for each gap is relevant.  

:::image type="complex" source="../../media/2021/01/devtools/flexbox.msft.png" alt-text="flexbox" lightbox="../../media/2021/01/devtools/flexbox.msft.png":::
   flexbox  
:::image-end:::  

To turn on this experiment, navigate to [Settings][DevtoolsCustomizeIndexSettings] > **Experiments**  and choose the checkbox next to **Enable CSS Flexbox debugging features**.  To review the history of this feature in the Chromium open-source project, navigate to Issue [1139949][CR1139949].  -->  

#### New CSP Violations tab  

<!--todo: ask chris and rachel, do you want this published or pulled for 89?  -->

:::image type="icon" source="../../media/2020/06/experimental-tag-14px.msft.png":::  

Display all Content Security Policy \(CSP\) violations at a glance in the new **CSP Violations** tool.  The new tool helps you work with webpages with a large amount of CSP and Trusted Type violations.  

:::image type="complex" source="../../media/2021/01/devtools/csp.msft.png" alt-text="CSP Violations tool" lightbox="../../media/2021/01/devtools/csp.msft.png":::
   **CSP Violations** tool  
:::image-end:::  

To turn on this experiment, navigate to [Settings][DevtoolsCustomizeIndexSettings] > **Experiments**  and choose the checkbox next to **Show CSP Violations view**.  To review the history of this feature in the Chromium open-source project, navigate to Issue [1137837][CR1137837].  

 #### New color contrast calculation - Advanced Perceptual Contrast Algorithm (APCA)  

<!--todo: ask Chris, do you want this published or pulled for 89?  -->

:::image type="icon" source="../../media/2020/06/experimental-tag-14px.msft.png":::  

To turn on this experiment, navigate to [Settings][DevtoolsCustomizeIndexSettings] > **Experiments**  and choose the checkbox next to **Enable new Advanced Perceptual Contrast Algorithm (APCA) replacing previous contrast ratio and AA/AAA guidelines**.  

The [Advanced Perceptual Contrast Algorithm (APCA)][GithubW3cSilverGuidelinesMethodsMethodFontCharacteristicContrastHtml] is replacing the [AA][W3cWaiWcag21QuickrefContrastMinimum]/[AAA][W3cWaiWcag21QuickrefContrastEnhanced] guidelines contrast ratio in the [Color Picker][DevtoolsAccessibilityReferenceViewContrastRatioTextElementColorPicker].  

**APCA** is a new way to compute contrast based on modern research on color perception.  Compared to **AA**/**AAA** guidelines, APCA is more context-dependent.  The contrast is calculated based on the spatial properties of the text, color, and context.  

*   Spatial properties of text include font weight and size.  
*   Spatial properties of color include perceived contrast between text and background.  
*   Spatial properties of context include ambient light, surroundings, and intended purpose.  
    
:::image type="complex" source="../../media/2021/01/devtools/apca.msft.png" alt-text="APCA in Color Picker" lightbox="../../media/2021/01/devtools/apca.msft.png":::
   APCA in Color Picker  
:::image-end:::  

To review the history of this feature in the Chromium open-source project, navigate to Issue [1121900][CR1121900].  

## Download the Microsoft Edge preview channels  

If you are on Windows, Linux, or macOS, consider using the [Microsoft Edge preview channels][MicrosoftEdgePreviewChannels] as your default development browser.  The preview channels give you access to the latest DevTools features.  

## Getting in touch with Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../../includes/contact-whats-new-note.md)]

<!-- links -->  

[DevtoolsAccessibilityReferenceViewContrastRatioTextElementColorPicker]: /microsoft-edge/devtools-guide-chromium/accessibility/reference#view-the-contrast-ratio-of-a-text-element-in-the-color-picker "View the contrast ratio of a text element in the Color Picker - Accessibility reference | Microsoft Docs"  
[DevtoolsCssReferenceChangeCss]: /microsoft-edge/devtools-guide-chromium/css/reference#change-css "Change CSS - CSS reference | Microsoft Docs"  
[DevtoolsCustomizeIndexSettings]: /microsoft-edge/devtools-guide-chromium/customize/index#settings "Settings - Customize Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsCustomizeShortcuts]: microsoft-edge/devtools-guide-chromium/customize/shortcuts "Customize keyboard shortcuts in the Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsDeviceModeIndex]: /microsoft-edge/devtools-guide-chromium/device-mode/index "Emulate mobile devices in Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsDeviceModeIndexSimulateMobileViewport]: /microsoft-edge/devtools-guide-chromium/device-mode/index#simulate-a-mobile-viewport "Simulate a mobile viewport - Emulate mobile devices in Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsEvaluatePerformanceReferenceRecordLoadPerformance]: /microsoft-edge/devtools-guide-chromium/evaluate-performance/reference#record-load-performance "Record load performance - Performance analysis reference | Microsoft Docs"  
[DevtoolsInspectStylesEditFonts]: /microsoft-edge/devtools-guide-chromium/inspect-styles/edit-fonts "Edit CSS font styles and settings in the Styles pane in DevTools | Microsoft Docs"  
[DevtoolsMain]: /microsoft-edge/devtools-guide-chromium/index "Microsoft Edge (Chromium) Developer Tools overview | Microsoft Docs"  

[DualScreenIntroductionHowToWorkWithSeam]: /dual-screen/introduction#how-to-work-with-the-seam "How to work with the seam - Introduction to dual-screen devices | Microsoft Docs"  
[DualScreenWebCssMediaSpanning]: /dual-screen/web/css-media-spanning "CSS media screen-spanning feature for dual-screen detection | Microsoft Docs"  
[DualScreenWebJavascriptGetwindowsegments]: /dual-screen/web/javascript-getwindowsegments "The getWindowSegments JavaScript API for dual-screen devices | Microsoft Docs"  

[GithubMicrosoftVscodeEdgeDevtools]: https://github.com/microsoft/vscode-edge-devtools "microsoft/vscode-edge-devtools | GitHub"  
[GithubMicrosoftVscodeEdgeDevtoolsPull229]: https://github.com/microsoft/vscode-edge-devtools/pull/229 "Pull 229: Implementing dropdown in settings to change themes | GitHub"  
[GithubMicrosoftVscodeEdgeDevtoolsPull233]: https://github.com/microsoft/vscode-edge-devtools/pull/233 "Pull 233: Including Debugger for Microsoft Edge as a dependency | GitHub"  
[GithubMicrosoftVscodeEdgeDevtoolsPull235]: https://github.com/microsoft/vscode-edge-devtools/pull/235 "Pull 235: Upgrading Edge DevTools version to 85.0.564.40 | GitHub"  
[GithubMicrosoftVscodeEdgeDevtoolsPull248]: https://github.com/microsoft/vscode-edge-devtools/pull/248 "Pull 248: Add single close buttons to instances panel | GitHub"  
[GithubW3cSilverGuidelinesMethodsMethodFontCharacteristicContrastHtml]: https://w3c.github.io/silver/guidelines/methods/Method-font-characteristic-contrast.html "Select font characteristics and background colors to provide enough contrast for readability | GitHub"  
[GithubW3cWebappsecTrustedTypes]: https://github.com/w3c/webappsec-trusted-types "w3c/webappsec-trusted-types | GitHub"  

[MicrosoftSurfaceDevicesSurfaceDuo]: https://www.microsoft.com/surface/devices/surface-duo "New Surface Duo | Microsoft"  

[MicrosoftEdgePreviewChannels]: https://www.microsoftedgeinsider.com/download "Microsoft Edge Preview Channels"  

[VisualstudioMarketplaceMsEdgedevtoolsVscodeEdgeDevtools]: https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools "Microsoft Edge Tools for Visual Studio Code | Visual Studio Marketplace"  
[VisualstudioMarketplaceMsjsdiagDebuggerMicrosoftEdge]: https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-edge "Debugger for Microsoft Edge | Visual Studio Marketplace"  

[CRIssuesList]: https://bugs.chromium.org/p/chromium/issues/list "Chromium bugs"  

<!--[CR174309]: https://crbug.com/174309 "Issue 174309: DevTools: Allow to customize keyboard shortcuts/key bindings | Chromium bugs"  -->  
<!--[CR772558]: https://crbug.com/772558 "Issue 772558: DevTools: Update to latest version of Lighthouse | Chromium bugs"  -->  
[CR978059]: https://crbug.com/978059 "Issue 978059: Deleting cookies when filtering them, delete all the cookies not just the filtered ones | Chromium bugs"  
[CR997625]: https://crbug.com/997625 "Issue 997625: New Feature Req | Need option to see url-decoded value in cookies | Chromium bugs"  
[CR1003629]: https://crbug.com/1003629 "Issue 1003629: Capture Node does not screenshot the node below the fold anymore. | Chromium bugs"  
[CR1012337]: https://crbug.com/1012337 "Issue 1012337: Clear Site Data destroys Google session on non-Google sites | Chromium bugs"  
[CR1028078]: https://crbug.com/1028078 "Issue 1028078: Put Online and Offline next to each other in the list | Chromium bugs"  
[CR1054281]: https://crbug.com/1054281 "Issue 1054281: Feature Request: DevTools should emulate foldable and dual-screen devices | Chromium bugs"  
<!--[CR1073909]: https://crbug.com/1073909 "Issue 1073909: BLOCKED | Chromium bugs"  -->  
[CR1075865]: https://crbug.com/1075865 "Issue 1075865: Show dropped frames in devtools timeline | Chromium bugs"  
[CR1093229]: https://crbug.com/1093229 "Issue 1093229: DevTools: offer a specialized typeface editor UI | Chromium bugs"  
[CR1121900]: https://crbug.com/1121900 "Issue 1121900: DevTools: update contrast calculation logic per new spec | Chromium bugs"  
[CR1122507]: https://crbug.com/1122507 "Issue 1122507: Surface worker information in frame tree view | Chromium bugs"  
[CR1122580]: https://crbug.com/1122580 "Issue 1122580: Impossible to disable network recording on reload | Chromium bugs"  
<!--[CR1126824]: https://crbug.com/1126824 "Issue 1126824: ☂ Support Trust Token debugging in DevTools | Chromium bugs"  -->  
[CR1136394]: https://crbug.com/1136394 "Issue 1136394: Flexbox tooling | Chromium bugs"  
[CR1137837]: https://crbug.com/1137837 "Issue 1137837: ☂ Improve Trusted Types support in DevTools | Chromium bugs"  
[CR1139899]: https://crbug.com/1139899 "Issue 1139899: Report gated API availability in frame details view | Chromium bugs"  
[CR1139949]: https://crbug.com/1139949 "Issue 1139949: Flexbox overlay | Chromium bugs"  
[CR1142804]: https://crbug.com/1142804 "Issue 1142804: Implement break-on-trusted-type-violation | Chromium bugs"  
<!--[CR1144127]: https://crbug.com/1144127 "Issue 1144127: BLOCKED | Chromium bugs"  -->  
[CR1147016]: https://crbug.com/1147016 "Issue 1147016: The color picker is not displayed in the var() function. | Chromium bugs"  
[CR1148353]: https://crbug.com/1148353 "Issue 1148353: Feature Request: Copy Object from the devtools console | Chromium bugs"  
[CR1149859]: https://crbug.com/1149859 "Issue 1149859: [feature request][Console] add copy object to clipboard item to contextual menu | Chromium bugs"  
[CR1150797]: https://crbug.com/1150797 "Issue 1150797: Add Duplicate element context menu in Element panel | Chromium bugs"  
<!--[CR1150883]: https://crbug.com/1150883 "Issue 1150883: Remove TT messages from the console but keep underlining in the sources tab | Chromium bugs"  -->  
[CR1152290]: https://crbug.com/1152290 "Issue 1152290: Devtools support for QuicTransport | Chromium bugs"  
[CR1152391]: https://crbug.com/1152391 "Issue 1152391: Support for copy CSS context menu in styles panel | Chromium bugs"  
[CR1156628]: https://crbug.com/1156628 "Issue 1156628: DevTools: add support for :target in force element state feature | Chromium bugs"  
[CR1157329]: https://crbug.com/1157329 "Issue 1157329: Accessibility - Narrator: Narrator is not announcing the count and position for suggestions available for code in Styles tab | Chromium bugs"  

[GlitchTtEnforced]: https://tt-enforced.glitch.me "Page with TT violations | Glitch"  

[JecFyiDemoCssTargetSection2]: https://jec.fyi/demo/css-target#section-2 "CSS:target state | jec.fyi"  

[SamsungUsMobileGalaxyFold]: https://www.samsung.com/us/mobile/galaxy-fold "Galaxy Fold | Samsung US"  

[W3cWaiWcag21QuickrefContrastEnhanced]: https://www.w3.org/WAI/WCAG21/quickref#contrast-enhanced "Contrast (Enhanced) - How to Meet WCAG (Quick Reference) | W3C"  
[W3cWaiWcag21QuickrefContrastMinimum]: https://www.w3.org/WAI/WCAG21/quickref#contrast-minimum "Contrast (Minimum) - How to Meet WCAG (Quick Reference) | W3C"  

[WebDevMonitorTotalPageMemoryUsage]: https://web.dev/monitor-total-page-memory-usage "Monitor your web page's total memory usage with measureMemory() | web.dev"  
[WebDevTrustedTypes]: https://web.dev/trusted-types "Prevent DOM-based cross-site scripting vulnerabilities with Trusted Types | web.dev"  
[WebDevWebtransport]: https://web.dev/webtransport "Experimenting with WebTransport | web.dev"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/updates/2021/01/devtools/index) and is authored by [Jecelyn Yeen][JecelynYeen] \(Developer advocate, Chrome DevTools\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[JecelynYeen]: https://developers.google.com/web/resources/contributors/jecelynyeen

[SpanningPlaceholder]: link-t-b-d "Spanning placeholder"  
