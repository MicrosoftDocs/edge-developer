---
description: The What's New tool is now Welcome, Visual Font Editor in the Styles pane, CSS Flexbox debugging tools, and more.
title: What's new in DevTools (Microsoft Edge 89)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 02/03/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---

# What's New In DevTools (Microsoft Edge 89)  

[!INCLUDE [contact DevTools team note](../../includes/edge-whats-new-note.md)]  

## What's New is now Welcome  

<!--  Title: What's New is now Welcome  -->  
<!--  Subtitle: The What's New tool now has a new appearance and a new name:  Welcome -->  

:::image type="icon" source="../../media/2020/06/experimental-tag-14px.msft.png":::  

The **What's New** tool in the Microsoft Edge DevTools now has a new appearance and a new name:  **Welcome**.  The **Welcome** tool still displays the latest DevTools news and updates.  It now also includes links to Microsoft Edge DevTools documentation, ways to submit feedback, and more.  To display the **Welcome** tool after each update to Microsoft Edge, choose the checkbox next to **Open tab after each update** under the title.  To close the **Welcome** tool, choose the **X** on the right-side of the tab title.  If you prefer the original **What's New** tool, navigate to [Settings][DevtoolsCustomizeIndexSettings] > **Experiments** and remove the checkbox next to **Enable Welcome tab**.  

:::image type="complex" source="../../media/2021/01/welcome-tool-whats-new-88.msft.png" alt-text="The Welcome tool is highlighted" lightbox="../../media/2021/01/welcome-tool-whats-new-88.msft.png":::
   The **Welcome** tool is highlighted  
:::image-end:::  

## Visual Font Editor in the Styles pane  

<!--  Title: Visual font editor in the Styles pane  -->  
<!--  Subtitle: Visual font editor in the Styles pane -->  

:::image type="icon" source="../../media/2020/06/experimental-tag-14px.msft.png":::  

When you work with fonts in CSS, use the new visual [Font Editor][DevtoolsInspectStylesEditFonts].  You may define fallback fonts, and use sliders to define font weight, size, line-height, and spacing.  The **Font Editor** helps you complete the following actions.  

*   Switch between units for different font properties  
*   Switch between keywords for different font properties  
*   Convert units  
*   Generate accurate CSS code  
    
To turn on this experiment, navigate to [Settings][DevtoolsCustomizeIndexSettings] > **Experiments** and choose the checkbox next to **Enable new Font Editor tools within Styles pane**.  For more information, navigate to [Edit CSS font styles and settings in the Styles pane in DevTools][DevtoolsInspectStylesEditFonts].  To review the history of this feature in the Chromium open-source project, navigate to Issue [1093229][CR1093229].  

:::image type="complex" source="../../media/2021/01/visual-font-editor.msft.png" alt-text="The visual Font editor is highlighted in the Styles pane" lightbox="../../media/2021/01/visual-font-editor.msft.png":::
   The visual **Font editor** is highlighted in the **Styles** pane  
:::image-end:::  

## CSS Flexbox debugging tools  

Flexbox debugging features are in active development.  To turn on the experiment for the following two features, navigate to [Settings][DevtoolsCustomizeIndexSettings] > **Experiments** and choose the checkbox next to **Enable new CSS Flexbox debugging features**.  To review the history of this feature in the Chromium open-source project, navigate to Issues [1136394][CR1136394] and [1139949][CR1139949].  

### New Flexbox (flex) icon help identify and display flex containers  

<!--  Title: Display Flexbox containers with Flexbox (flex) icon  -->  
<!--  Subtitle: New Flexbox (flex) icon in the Elements tool help you identify Flexbox containers in your code.  When toggled, the adorner displays and hides outlines of the flex container to help you debug the layout -->  

:::image type="icon" source="../../media/2020/06/experimental-tag-14px.msft.png":::  

In the **Elements** tool, the new Flexbox (flex) icon helps you identify Flexbox containers in your code.  Choose the Flexbox \(flex\) icon to turn on or off the overlay effect that outlines a Flexbox container.  You may customize the color of the overlay in the **Layout** pane, which is located next to **Styles** and **Computed**.  

:::row:::
   :::column span="":::
      To turn on and off the overlay effect that outlines the Flexbox container, choose the Flexbox \(`flex`\) icon.  
   :::column-end:::
   :::column span="":::
      You may customize the color of the overlay in the **Layout** pane next to **Styles** and **Computed**.  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2021/01/elements-flex-container.msft.png" alt-text="The Flexbox (flex) icon and webpage highlighted" lightbox="../../media/2021/01/elements-flex-container.msft.png":::
         The **Flexbox** \(`flex`\) icon and webpage highlighted
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../../media/2021/01/elements-layout-flex-container.msft.png" alt-text="The Flexbox overlays highlighted in the Layout pane" lightbox="../../media/2021/01/elements-layout-flex-container.msft.png":::
         The **Flexbox overlays** highlighted in the **Layout** pane  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

### Display alignment icons and gridlines when Flexbox layouts change using CSS properties  

<!--  Title: Display alignment icons and gridlines for changes to Flexbox layouts from CSS properties  -->  
<!--  Subtitle:  CSS autocomplete in the Styles tool now displays icons next to Flexbox properties to help you review the effect a property has on your Flexbox layout -->  

:::image type="icon" source="../../media/2020/06/experimental-tag-14px.msft.png":::  

When you edit CSS for your Flexbox layout, CSS autocompletes in the **Styles** pane now displays helpful icons next to relevant Flexbox properties.  To try this new feature, open the **Elements** tool and select a flex container.  Then add or change a property on that container in the **Styles** pane.  

:::row:::
   :::column span="":::
      The autocomplete menu now displays icons that indicate the effect of alignment properties such as `align-content` and `align-items`.  
   :::column-end:::
   :::column span="":::
      Additionally, DevTools now displays a guiding line to help you better review the `align-items` CSS property.  The `gap` CSS property is supported as well.  In the following figure, the `gap` CSS property is set to `gap: 12px;` and the hatching pattern for each gap is displayed.  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2021/01/elements-flex-container-align.msft.png" alt-text="Autocomplete menu highlighted for CSS properties that start with align-" lightbox="../../media/2021/01/elements-flex-container-align.msft.png":::
         Autocomplete menu highlighted for CSS properties that start with `align-`  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../../media/2021/01/elements-flex-container-align-items-center-gap-12px.msft.png" alt-text="Flexbox gap in CSS properties and webpage highlighted" lightbox="../../media/2021/01/elements-flex-container-align-items-center-gap-12px.msft.png":::
         Flexbox `gap` in CSS properties and webpage highlighted  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

## Add tools quickly with new More Tools button  

<!--  Title: Add tools quickly with new More Tools button  -->  
<!--  Subtitle: A convenient way to open new tools in Microsoft Edge DevTools -->  

:::image type="icon" source="../../media/2020/06/experimental-tag-14px.msft.png":::  

You now have a new way to open more tools in the Microsoft Edge DevTools.  After you turn on this experiment, the **More Tools** icon displays as a plus sign (`+`) to the right of the main panel.  To display a list of other tools to add to the main panel, choose the **More Tools** \(`+`\) icon.  To turn on this experiment, navigate to [Settings][DevtoolsCustomizeIndexSettings] > **Experiments**, and then choose the checkbox next to **Enable + button tab menus to open more tools**.  

:::image type="complex" source="../../media/2021/01/more-tools.msft.png" alt-text="More Tools highlighted in DevTools" lightbox="../../media/2021/01/more-tools.msft.png":::
   **More Tools** highlighted in DevTools  
:::image-end:::  

## Assistive technologies now announce position and count of CSS suggestions  

<!--  Title: Assistive technologies now announce position and count of CSS suggestions  -->  
<!--  Subtitle: CSS suggestions are now easier to navigate using screen readers -->  

When you edit CSS, you get a dropdown of features.  This feature was not available to users of assistive technologies, since it is announced in Microsoft Edge version 89.  A user of assistive technologies may now navigate CSS suggestions in the **Styles** pane.  In Microsoft Edge version 88 and earlier, assistive technology announced `Suggestion` as a user navigated through the list of suggestions when editing CSS in the **Styles** pane.  In Microsoft Edge version 89, a user of assistive technology now hears the position and count of the current suggestion.  Each suggestion is announced as the user navigates through the list of suggestions, such as Suggestion 3 of 5.  To learn more about writing CSS in the DevTools, navigate to [Change CSS][DevtoolsCssReferenceChangeCss].  To review the history of this feature in the Chromium open-source project, navigate to Issue [1157329][CR1157329].  

<!--To view a video that displays and reads aloud several suggestions with this experiment turned on, navigate to [Voiceover announcing devtools options](https://youtu.be/9TcUpleEwwA) on YouTube.  -->  

The following video link displays and reads aloud several suggestions with this experiment turned on.  

> [!VIDEO https://youtu.be/9TcUpleEwwA]  

## Emulate Surface Duo and Samsung Galaxy Fold  

<!--  Title: Emulate new dual-screen and foldable devices  -->  
<!--  Subtitle: Test the appearance and feel of your website or app with Surface Duo and Samsung Galaxy Fold emulators -->  

Test the appearance of your website or app on the following devices in Microsoft Edge.  

*   [Surface Duo][MicrosoftSurfaceDevicesSurfaceDuo]  
*   [Samsung Galaxy Fold][SamsungUsMobileGalaxyFold]  
    
Turn on **Experimental Web Platform features** to access the new [CSS media screen-spanning feature][DualScreenWebCssMediaSpanning] and [getWindowSegments JavaScript API][DualScreenWebJavascriptGetwindowsegments].  Navigate to `edge://flags` and toggle the flag next to **Experimental Web Platform features**.  To help enhance your website or app for the dual-screen and foldable devices, use the following features when [emulating the device][DevtoolsDeviceModeIndex].  

*   [Spanning][DevtoolsDeviceModeDualScreenFoldablesTestingFoldableDualScreenDevices], which is when your website \(or app\) appears across both screens.  
*   [Rendering the seam][DualScreenIntroductionHowToWorkWithSeam], which is the space between the two screens.  
    
To review the history of this feature in the Chromium open-source project, navigate to Issue [1054281][CR1054281].  

:::image type="complex" source="../../media/2021/01/emulate-surface-device-surface-duo.msft.png" alt-text="Emulate dual-screen" lightbox="../../media/2021/01/emulate-surface-device-surface-duo.msft.png":::
   Emulate dual-screen  
:::image-end:::  

## Microsoft Edge Developer Tools for Visual Studio Code version 1.1.2  

The [Microsoft Edge Developer Tools for Visual Studio Code][VisualstudioMarketplaceMsEdgedevtoolsVscodeEdgeDevtools] extension version 1.1.2 for Microsoft Visual Studio Code has the following changes since the previous release.  Microsoft Visual Studio Code updates extensions automatically.  To manually update to version 1.1.2, navigate to [Update an extension manually][VisualstudioCodeDocsEditorExtensionGalleryUpdateExtensionManually].  

*   Added a **Close instance** button to each item on the target list \([#248][GithubMicrosoftVscodeEdgeDevtoolsPull248]\)  
*   Bumped [Microsoft Edge DevTools][DevtoolsMain] version from 84.0.522.63 to [85.0.564.40][DevtoolsWhatsNew85] \([#235][GithubMicrosoftVscodeEdgeDevtoolsPull235]\)  
*   Included [Debugger for Microsoft Edge][VisualstudioMarketplaceMsjsdiagDebuggerMicrosoftEdge] as a dependency  \([#233][GithubMicrosoftVscodeEdgeDevtoolsPull233]\)  
*   Implemented settings option to change extension themes \([#229][GithubMicrosoftVscodeEdgeDevtoolsPull229]\)  
    
You may file issues and contribute to the extension on the [vscode-edge-devtools GitHub repo][GithubMicrosoftVscodeEdgeDevtools].  

## Announcements from the Chromium project  

[!INCLUDE [contact DevTools team note](../../includes/chromium-whats-new-note.md)]  

### Capture node screenshot beyond viewport  

In Microsoft Edge version 89, node screenshots are more accurate, capturing the full node even if content from the node is not visible in the viewport.  In the **Elements** tool, hover  on an element, open the contextual menu \(right-click\), and choose **Capture node screenshot**.  To review the history of this feature in the Chromium open-source project, navigate to Issue [1003629][CR1003629].  

:::image type="complex" source="../../media/2021/01/capture-node-screenshot.msft.png" alt-text="Capture node screenshot highlighted on the context menu in the Elements tool" lightbox="../../media/2021/01/capture-node-screenshot.msft.png":::
   **Capture node screenshot** highlighted on the context menu in the **Elements** tool  
:::image-end:::  

### Elements tool updates  

#### Support forcing the :target CSS state  

You may now use DevTools to force the [:target][MdnDocsWebCssTarget] CSS pseudo-class.  The `:target` pseudo-class is triggered when a unique element \(the target element\) has an `id` that matches a fragment of the URL.  For example, the `http://www.example.com/index.html#section1` URL triggers the `:target` pseudo-class on an HTML element with `id="section1"`.  To try a demo with section 1 highlighted, navigate to [CSS :target demo][GithubMicrosoftedgeDevtoolssamplesWhatsNew89TargetCssDemoHtmlSection1].  To review the history of this feature in the Chromium open-source project, navigate to Issue [1156628][CR1156628].  

:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2021/01/elements-styles-none-forced.msft.png" alt-text="The webpage highlighted with no forced CSS" lightbox="../../media/2021/01/elements-styles-none-forced.msft.png":::
         Webpage highlighted with no forced CSS  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../../media/2021/01/elements-styles-target-forced.msft.png" alt-text=":target CSS forced and webpage highlighted" lightbox="../../media/2021/01/elements-styles-target-forced.msft.png":::
         `:target` CSS forced and webpage highlighted  
      :::image-end:::  
   :::column-end:::
:::row-end:::

#### Use Duplicate elements to copy elements  

Use the new **Duplicate element** shortcut to clone an element.  In the **Elements** tool, hover on an element, open the contextual menu \(right-click\), choose **Duplicate element**.  A new element is created under the selected element.  To duplicate the element with a keyboard shortcut, select `Shift`+`Alt`+`Down Arrow` \(Windows/Linux\) or `Shift`+`Option`+`Down Arrow` \(macOS\).  To review the history of this feature in the Chromium open-source project, navigate to Issue [1150797][CR1150797].  

:::image type="complex" source="../../media/2021/01/elements-duplicate-element.msft.png" alt-text="The Duplicate element is highlighted in the context menu on an element in the Elements tool" lightbox="../../media/2021/01/elements-duplicate-element.msft.png":::
   The **Duplicate element** is highlighted in the context menu on an element in the **Elements** tool  
:::image-end:::  

#### Color pickers for custom CSS properties  

The **Styles** pane now displays color pickers for custom CSS properties.  To cycle through the RGBA, HSLA, and Hex formats of the color value, hold `Shift` and choose the color picker.  To review the history of this feature in the Chromium open-source project, navigate to Issue [1147016][CR1147016].  

:::image type="complex" source="../../media/2021/01/elements-styles-change-color-format.msft.png" alt-text="Color pickers for custom CSS properties" lightbox="../../media/2021/01/elements-styles-change-color-format.msft.png":::
   Color pickers for custom CSS properties  
:::image-end:::  

#### Copy CSS classes and properties  

You may now copy CSS properties quicker with a few new options in the contextual menu.  In the **Elements** tool, choose an element.  To copy the value, in the **Styles** pane, hover on a CSS class or a CSS property, open a contextual menu \(right-click\), and choose the copy option.  

:::row:::
   :::column span="":::
      Copy options for a CSS class.  
      
      | Option | Details |  
      |:--- |:--- |  
      | **Copy selector** | Copy the current selector name. |  
      | **Copy rule** | Copy the rule of the current selector. |  
      | **Copy all declarations** | Copy all declarations under the current rule, including non-valid and prefixed properties. |  
   :::column-end:::
   :::column span="":::
      Copy options for a CSS property.  
      
      | Option | Details |      
      |:--- |:--- |  
      | **Copy declaration** | Copy the declaration of the current line. |  
      | **Copy property** | Copy the property of the current line. |  
      | **Copy value** | Copy the value of the current line. |  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2021/01/copy-css-class.msft.png" alt-text="Copy options for a CSS class in the contextual menu" lightbox="../../media/2021/01/copy-css-class.msft.png":::
         Copy options for a CSS class in the contextual menu  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../../media/2021/01/copy-css-property-cropped.msft.png" alt-text="Copy options for a CSS property in the contextual menu" lightbox="../../media/2021/01/copy-css-property.msft.png":::
         Copy options for a CSS property in the contextual menu  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

To review the history of this feature in the Chromium open-source project, navigate to Issue [1152391][CR1152391].  

### Cookies updates  

#### New option to display URL-decoded cookies  

You may now opt to display the URL-decoded cookies value in the **Cookies** pane.  To display the decoded cookie, navigate to **Application** > **Cookies** pane, choose any cookie on the list, and choose the checkbox next to **Show URL decoded**.  To review the history of this feature in the Chromium open-source project, navigate to Issue [997625][CR997625].  

:::image type="complex" source="../../media/2021/01/application-cookies-show-url-decoded.msft.png" alt-text="Option to display URL-decoded cookies" lightbox="../../media/2021/01/application-cookies-show-url-decoded.msft.png":::
   Option to display URL decoded cookies  
:::image-end:::  

#### Filter and clear visible cookies  

In Microsoft Edge version 88 or earlier, the **Application** tool only provided a way to clear all cookies with the **Clear all cookies** button.  In Microsoft Edge version 89, you may now choose **Clear filtered cookies** to delete only the filtered cookies.  To filter cookies, navigate to **Application** > **Cookies**, and type in the **Filter** textbox.  To delete the displayed cookies, choose the **Clear filtered cookies** button.  To display all other cookies, clear the filter text.  To review the history of this feature in the Chromium open-source project, navigate to Issue [978059][CR978059].  

:::image type="complex" source="../../media/2021/01/application-cookies-clear-filtered-cookies.msft.png" alt-text="Clear only visible cookies" lightbox="../../media/2021/01/application-cookies-clear-filtered-cookies.msft.png":::
   Clear only visible cookies  
:::image-end:::  

#### New option to clear third-party cookies in the Storage pane  

DevTools now clear only first-party cookies by default.  To clear website data and first-party cookies only, navigate to **Application** > **Storage**, and then choose **Clear site data**.  

To clear website data and all cookies, navigate to **Application** > **Storage**.  Choose the checkbox next to **including third-party cookies**, and then choose **Clear site data**.  

To review the history of this feature in the Chromium open-source project, navigate to Issue [1012337][CR1012337].  

:::image type="complex" source="../../media/2021/01/application-storage-clear-site-data-including-third-party-cookies.msft.png" alt-text="Option to clear third-party cookies" lightbox="../../media/2021/01/application-storage-clear-site-data-including-third-party-cookies.msft.png":::
   Option to clear third-party cookies  
:::image-end:::  

### Network tool updates  

#### Persist Record network log setting  

In Microsoft Edge version 88 or earlier, DevTools reset the **Record network log** setting when a webpage refreshes.  In Microsoft Edge version 89, DevTools now persist the **Record network log** setting.  To review the history of this feature in the Chromium open-source project, navigate to Issue [1122580][CR1122580].  

:::image type="complex" source="../../media/2021/01/network-log.msft.png" alt-text="Record network log" lightbox="../../media/2021/01/network-log.msft.png":::
   Record network log  
:::image-end:::  

#### Online option is now No throttling option  

The network emulation option **Online** is now renamed to **No Throttling**.  To review the history of this feature in the Chromium open-source project, navigate to Issue [1028078][CR1028078].  

:::image type="complex" source="../../media/2021/01/network-no-throttling.msft.png" alt-text="No throttling option" lightbox="../../media/2021/01/network-no-throttling.msft.png":::
   **No throttling** option  
:::image-end:::  

### New copy options in the Console tool, Sources tool, and Styles pane

#### Copy object in the Console and Sources tool  

You may now copy object values in the **Console** and **Sources** tools.  The ability to copy object values is useful when working with large objects.  To review the history of this feature in the Chromium open-source project, navigate to Issues [1148353][CR1148353] and [1149859][CR1149859].  

:::row:::
   :::column span="":::
      In the **Console** tool, hover on an object, open the contextual menu \(right-click\), and then choose **Copy object**.  
   :::column-end:::
   :::column span="":::
      In the **Sources** tool, on a breakpoint, hover on an object, in the **Object** popup window, highlight an object, open the contextual menu \(right-click\), and then choose **Copy object**.  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2021/01/console-copy-object.msft.png" alt-text="Copy object in the Console" lightbox="../../media/2021/01/console-copy-object.msft.png":::
         Copy object in the **Console**  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../../media/2021/01/sources-breakpoint-object-copy-object.msft.png" alt-text="Copy object in Sources" lightbox="../../media/2021/01/sources-breakpoint-object-copy-object.msft.png":::
         Copy object in **Sources**  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

#### Copy file name in the Sources tool and Styles pane  

You may now copy a file name using the contextual menu.  To review the history of this feature in the Chromium open-source project, navigate to Issues [1155120][CR1155120].  

:::row:::
   :::column span="":::
      In the **Sources** tool, hover on a file name, open the contextual menu \(right-click\), and then choose **Copy file name**.  
   :::column-end:::
   :::column span="":::
      In the **Elements** tool > **Styles** pane, hover on a file name, open the contextual menu \(right-click\), and then choose **Copy file name**.  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2021/01/sources-copy-file-name.msft.png" alt-text="Copy file name in Sources" lightbox="../../media/2021/01/sources-copy-file-name.msft.png":::
         Copy file name in **Sources**  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../../media/2021/01/elements-styles-copy-file-name.msft.png" alt-text="Copy file name in Styles pane" lightbox="../../media/2021/01/elements-styles-copy-file-name.msft.png":::
         Copy file name in **Styles** pane  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

### Updates to Frame details  

#### Service Workers information in Frame details  

DevTools now lists a dedicated service worker under the parent frame.  In the following figure, service worker details are displayed.  To display the service worker details, navigate to **Application** > **Frames** > `top` > **Service Workers** and then choose a service worker.  To review the history of this feature in the Chromium open-source project, navigate to Issue [1122507][CR1122507].  

:::image type="complex" source="../../media/2021/01/application-frames-service-workers-details.msft.png" alt-text="Service Workers information in the Frames details" lightbox="../../media/2021/01/application-frames-service-workers-details.msft.png":::
   **Service Workers** information in the **Frames** details  
:::image-end:::  

#### Measure Memory information in Frame details  

The `performance.measureMemory()` API status is now displayed under the **API availability** section.  The new `performance.measureMemory()` API estimates the memory usage of the entire webpage.  To review the history of this feature in the Chromium open-source project, navigate to Issue [1139899][CR1139899].  

:::image type="complex" source="../../media/2021/01/application-frames-measure-memory.msft.png" alt-text="Measure Memory" lightbox="../../media/2021/01/application-frames-measure-memory.msft.png":::
   Measure Memory  
:::image-end:::  

### Dropped frames in the Performance tool  

When you [analyze load performance in the Performance tool][DevtoolsEvaluatePerformanceReferenceRecordLoadPerformance], the **Frames** section now marks dropped frames as red.  To display the frame rate, hover on a dropped frame.  To review the history of this feature in the Chromium open-source project, navigate to Issue [1075865][CR1075865].  

:::image type="complex" source="../../media/2021/01/performance-frames-dropped-frames-red.msft.png" alt-text="Dropped frames" lightbox="../../media/2021/01/performance-frames-dropped-frames-red.msft.png":::
   Dropped frames  
:::image-end:::  

#### New color contrast calculation - Advanced Perceptual Contrast Algorithm (APCA)  

:::image type="icon" source="../../media/2020/06/experimental-tag-14px.msft.png":::  

The [Advanced Perceptual Contrast Algorithm (APCA)][GithubW3cSilverGuidelinesMethodsMethodFontCharacteristicContrastHtml] replaces the [AA][W3cWaiWcag21QuickrefContrastMinimum]/[AAA][W3cWaiWcag21QuickrefContrastEnhanced] guidelines contrast ratio in the [Color Picker][DevtoolsAccessibilityReferenceViewContrastRatioTextElementColorPicker].  APCA is a new way to compute contrast.  It is based on modern research on color perception.  Compared to AA/AAA guidelines, APCA is more context-dependent.  The contrast is calculated based on the following spatial properties of the text, color, and context.  

*   Spatial properties of text that include font weight and size.  
*   Spatial properties of color that include perceived contrast between text and background.  
*   Spatial properties of context that include ambient light, surroundings, and intended purpose.  
    
To turn on this experiment, navigate to [Settings][DevtoolsCustomizeIndexSettings] > **Experiments**  and choose the checkbox next to **Enable new Advanced Perceptual Contrast Algorithm (APCA) replacing previous contrast ratio and AA/AAA guidelines**.  To review the history of this feature in the Chromium open-source project, navigate to Issue [1121900][CR1121900].  

:::image type="complex" source="../../media/2021/01/advanced-perceptual-contrast-algorithm.msft.png" alt-text="APCA in the Color Picker" lightbox="../../media/2021/01/advanced-perceptual-contrast-algorithm.msft.png":::
   APCA in the Color Picker  
:::image-end:::  

## Download the Microsoft Edge preview channels  

If you are on Windows, Linux, or macOS, consider using the [Microsoft Edge preview channels][MicrosoftEdgePreviewChannels] as your default development browser.  The preview channels give you access to the latest DevTools features.  

## Getting in touch with Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../../includes/contact-whats-new-note.md)]

<!-- links -->  

[DevtoolsWhatsNew85]: ../../2020/06/devtools.md "What's New In DevTools (Microsoft Edge 85) | Microsoft Docs"  

[DevtoolsAccessibilityReferenceViewContrastRatioTextElementColorPicker]: /microsoft-edge/devtools-guide-chromium/accessibility/reference#view-the-contrast-ratio-of-a-text-element-in-the-color-picker "View the contrast ratio of a text element in the Color Picker - Accessibility reference | Microsoft Docs"  
[DevtoolsCssReferenceChangeCss]: /microsoft-edge/devtools-guide-chromium/css/reference#change-css "Change CSS - CSS reference | Microsoft Docs"  
[DevtoolsCustomizeIndexSettings]: /microsoft-edge/devtools-guide-chromium/customize/index#settings "Settings - Customize Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsCustomizeShortcuts]: microsoft-edge/devtools-guide-chromium/customize/shortcuts "Customize keyboard shortcuts in the Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsDeviceModeDualScreenFoldablesTestingFoldableDualScreenDevices]: /microsoft-edge/devtools-guide-chromium/device-mode/dual-screen-and-foldables#testing-on-foldable-and-dual-screen-devices "Testing on foldable and dual-screen devices - Emulate dual-screen and foldable devices in Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsDeviceModeIndex]: /microsoft-edge/devtools-guide-chromium/device-mode/index "Emulate mobile devices in Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsDeviceModeIndexSimulateMobileViewport]: /microsoft-edge/devtools-guide-chromium/device-mode/index#simulate-a-mobile-viewport "Simulate a mobile viewport - Emulate mobile devices in Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsEvaluatePerformanceReferenceRecordLoadPerformance]: /microsoft-edge/devtools-guide-chromium/evaluate-performance/reference#record-load-performance "Record load performance - Performance analysis reference | Microsoft Docs"  
[DevtoolsInspectStylesEditFonts]: /microsoft-edge/devtools-guide-chromium/inspect-styles/edit-fonts "Edit CSS font styles and settings in the Styles pane in DevTools | Microsoft Docs"  
[DevtoolsMain]: /microsoft-edge/devtools-guide-chromium/index "Microsoft Edge (Chromium) Developer Tools overview | Microsoft Docs"  

[DualScreenIntroductionHowToWorkWithSeam]: /dual-screen/introduction#how-to-work-with-the-seam "How to work with the seam - Introduction to dual-screen devices | Microsoft Docs"  
[DualScreenWebCssMediaSpanning]: /dual-screen/web/css-media-spanning "CSS media screen-spanning feature for dual-screen detection | Microsoft Docs"  
[DualScreenWebJavascriptGetwindowsegments]: /dual-screen/web/javascript-getwindowsegments "The getWindowSegments JavaScript API for dual-screen devices | Microsoft Docs"  

[GithubMicrosoftedgeDevtoolssamplesWhatsNew89TargetCssDemoHtmlSection1]: https://microsoftedge.github.io/DevToolsSamples/whats-new/89/target-css-demo.html#section-1 "Section 1 - CSS :target demo for What's New in DevTools (Microsoft Edge 89) | GitHub"  
[GithubMicrosoftVscodeEdgeDevtools]: https://github.com/microsoft/vscode-edge-devtools "microsoft/vscode-edge-devtools | GitHub"  
[GithubMicrosoftVscodeEdgeDevtoolsPull229]: https://github.com/microsoft/vscode-edge-devtools/pull/229 "Pull 229: Implementing dropdown in settings to change themes | GitHub"  
[GithubMicrosoftVscodeEdgeDevtoolsPull233]: https://github.com/microsoft/vscode-edge-devtools/pull/233 "Pull 233: Including Debugger for Microsoft Edge as a dependency | GitHub"  
[GithubMicrosoftVscodeEdgeDevtoolsPull235]: https://github.com/microsoft/vscode-edge-devtools/pull/235 "Pull 235: Upgrading Edge DevTools version to 85.0.564.40 | GitHub"  
[GithubMicrosoftVscodeEdgeDevtoolsPull248]: https://github.com/microsoft/vscode-edge-devtools/pull/248 "Pull 248: Add single close buttons to instances panel | GitHub"  
[GithubW3cSilverGuidelinesMethodsMethodFontCharacteristicContrastHtml]: https://w3c.github.io/silver/guidelines/methods/Method-font-characteristic-contrast.html "Select font characteristics and background colors to provide enough contrast for readability | W3C"  
[GithubW3cWebappsecTrustedTypesDistSpec]: https://w3c.github.io/webappsec-trusted-types/dist/spec  "Trusted Types | W3C"  

[MicrosoftSurfaceDevicesSurfaceDuo]: https://www.microsoft.com/surface/devices/surface-duo "New Surface Duo | Microsoft"  

[MicrosoftEdgePreviewChannels]: https://www.microsoftedgeinsider.com/download "Microsoft Edge Preview Channels"  

[VisualstudioCodeDocsEditorExtensionGalleryUpdateExtensionManually]: https://code.visualstudio.com/docs/editor/extension-gallery#_update-an-extension-manually "Update an extension manually - Extension Marketplace | Visual Studio Code"  

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
<!--[CR1137837]: https://crbug.com/1137837 "Issue 1137837: ☂ Improve Trusted Types support in DevTools | Chromium bugs"  -->  
[CR1139899]: https://crbug.com/1139899 "Issue 1139899: Report gated API availability in frame details view | Chromium bugs"  
[CR1139949]: https://crbug.com/1139949 "Issue 1139949: Flexbox overlay | Chromium bugs"  
<!--[CR1142804]: https://crbug.com/1142804 "Issue 1142804: Implement break-on-trusted-type-violation | Chromium bugs"  -->  
<!--[CR1144127]: https://crbug.com/1144127 "Issue 1144127: BLOCKED | Chromium bugs"  -->  
[CR1147016]: https://crbug.com/1147016 "Issue 1147016: The color picker is not displayed in the var() function. | Chromium bugs"  
[CR1148353]: https://crbug.com/1148353 "Issue 1148353: Feature Request: Copy Object from the devtools console | Chromium bugs"  
[CR1149859]: https://crbug.com/1149859 "Issue 1149859: [feature request][Console] add copy object to clipboard item to contextual menu | Chromium bugs"  
[CR1150797]: https://crbug.com/1150797 "Issue 1150797: Add Duplicate element context menu in Element panel | Chromium bugs"  
<!--[CR1150883]: https://crbug.com/1150883 "Issue 1150883: Remove TT messages from the console but keep underlining in the sources tab | Chromium bugs"  -->  
<!--[CR1152290]: https://crbug.com/1152290 "Issue 1152290: Devtools support for QuicTransport | Chromium bugs"  -->  
[CR1152391]: https://crbug.com/1152391 "Issue 1152391: Support for copy CSS context menu in styles panel | Chromium bugs"  
[CR1155120]: https://crbug.com/1155120 "Issue 1155120: [FR]Support copy file name and line number | Chromium bugs"  
[CR1156628]: https://crbug.com/1156628 "Issue 1156628: DevTools: add support for :target in force element state feature | Chromium bugs"  
[CR1157329]: https://crbug.com/1157329 "Issue 1157329: Accessibility - Narrator: Narrator is not announcing the count and position for suggestions available for code in Styles tab | Chromium bugs"  

[MdnDocsWebCssTarget]: https://developer.mozilla.org/docs/web/css/:target ":target | MDN"  

[SamsungUsMobileGalaxyFold]: https://www.samsung.com/us/mobile/galaxy-fold "Galaxy Fold | Samsung US"  

[W3cWaiWcag21QuickrefContrastEnhanced]: https://www.w3.org/WAI/WCAG21/quickref#contrast-enhanced "Contrast (Enhanced) - How to Meet WCAG (Quick Reference) | W3C"  
[W3cWaiWcag21QuickrefContrastMinimum]: https://www.w3.org/WAI/WCAG21/quickref#contrast-minimum "Contrast (Minimum) - How to Meet WCAG (Quick Reference) | W3C"  

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
