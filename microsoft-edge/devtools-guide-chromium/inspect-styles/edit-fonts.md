---
description: Learn how to change CSS font Styles and settings using the Styles pane in Microsoft Edge DevTools.
title: Edit CSS font Styles and settings in the Styles pane in DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/19/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Edit CSS font Styles and settings in the Styles pane in DevTools

:::image type="icon" source="../media/experimental-tag-14px.msft.png":::  

Typography on the web is an important part of the user experience. You’ll want to ensure you’re meeting corporate brand guidelines, and that your content displays as expected on various devices. Text needs to be easy to read using size and line-height. Readers need to resize `fonts to meet their needs. Also, you’ll need to provide fallback options when specific fonts aren’t available on user devices.

CSS provides better support for typography in recent years. There are dozens of different CSS units available to define the size of text. You also have several CSS properties that affect font-size, spacing, line height, and other typographic features.

To make it easier when working with typography, we now have a visual font editor in the Styles pane. You can change your font settings, and the changes are rendered immediately in the browser. All without in-depth knowledge of CSS.

Currently the **Enable new font editor tool within the Styles pane** feature is experimental and you need to [turn it on for Microsoft Edge Developer Tools][DevtoolsExperimentalFeaturesIndexTurnOnExperimentalFeatures].  

Any CSS in the Styles pane, either font definitions or inline Styles, automatically display an icon that opens the visual font editor. To open the visual font editor, choose the Font Editor icon.

:::image type="complex" source="../media/font-editor-icon.msft.png" alt-text="The icon in the Styles pane to edit font settings" lightbox="../media/font-editor-icon.msft.png":::
   The icon in the Styles pane to edit font settings  
:::image-end:::  

:::image type="complex" source="../media/font-editor-open.msft.png" alt-text="The font editor open on top of the Styles pane" lightbox="../media/font-editor-open.msft.png":::
   The font editor open on top of the Styles pane  
:::image-end:::  

All fields in the visual font editor are populated from the values in the CSS in the Styles pane. For example, because the `line-height` definition is set to `160%` in the Styles pane, the line height text field displays `160`, and the unit dropdown displays `%`. Also, the slider is automatically set to match the values of the text field.

The editor consists of two parts: the Font Family selector, and the CSS Properties editor.

## The Font Family selector

The Font Family selector is the upper part of the visual font editor. Use it to choose the main and fallback fonts of the CSS rule you picked in the CSS editor.

:::image type="complex" source="../media/font-editor-font-family.msft.png" alt-text="The font editor open on top of the Styles pane with the family selector highlighted" lightbox="../media/font-editor-css-properties.msft.png":::
   The font editor open on top of the Styles pane with the family selector highlighted  
:::image-end:::  

Choose the Font Family dropdown to choose from a list of fonts. Fonts are organized into four groups:

1. Computed fonts, which are the fonts available in the stylesheet in the Styles pane.
1. System fonts, which are the fonts that are available on the current operating system.
1. Generic font families, such as `serif` or `sans-serif`.
1. Global values, such as `inherit`, `initial`, and `unset`.

:::image type="complex" source="../media/font-editor-font-family-list.msft.png" alt-text="The font editor open on top of the Styles pane with the family selector highlighted" lightbox="../media/font-editor-css-properties.msft.png":::
   The font editor open on top of the Styles pane with the family selector highlighted
:::image-end:::

After you choose a font, another dropdown menu is displayed for you to choose fallback fonts. You can choose up to eight fallback fonts. To remove a font, choose the delete font family icon.

:::image type="complex" source="../media/font-editor-defining-fonts.msft.png" alt-text="The font editor with a defined list of fonts and fallback fonts" lightbox="../media/font-editor-defining-fonts.msft.png":::
   The font editor with a defined list of fonts and fallback fonts highlighted  
:::image-end:::  

> [!NOTE]
> If you choose a global value for font family, you do not get another dropdown since there is no fallback for it in CSS.  

## The CSS Properties editor  

You may change CSS font properties in the lower part of the visual font editor. You can change the font size, line height, font weight, and letter spacing using any of the UI controls. Your changes are applied immediately in the browser.

:::image type="complex" source="../media/font-editor-css-properties.msft.png" alt-text="The font editor open on top of the Styles pane with the CSS properties highlighted" lightbox="../media/font-editor-font-family.msft.png":::
   The font editor open on top of the Styles pane with the CSS properties highlighted  
:::image-end:::  

You may also convert CSS units using the visual font editor. For example, you may use the tool on a CSS rule where the **Font Size** slider is initially set to `16 pixels`. Now, select the unit dropdown and choose the value `em`. Notice that `1 em` is displayed, which is equal to 16 pixels.

:::image type="complex" source="../media/font-editor-setting-to-16px.msft.png" alt-text="Change the font size to 16 pixels" lightbox="../media/font-editor-setting-to-16px.msft.png":::
   Change the font size to 16 pixels  
:::image-end:::  

:::image type="complex" source="../media/font-editor-converted-to-em.msft.png" alt-text="Open the unit dropdown to convert to em" lightbox="../media/font-editor-converted-to-em.msft.png":::
   Open the unit dropdown to convert to em  
:::image-end:::  

The unit dropdown provides all the numeric CSS units that are available. Font size, line height, font weight, and spacing all use different units. When the text boxes have focus, you may use the `arrow up` and `arrow down` keys to fine-tune your settings. You can also use the sliders with a keyboard by using the `arrow left` and `arrow down` keys.

The CSS Properties editor also includes preset keywords. To use the preset keywords, on the right-hand side, choose the `Toggle Input Type` icon. The UI changes, and a dropdown of preset keywords are displayed. To return to the UI with the slider and other UI controls, choose the `Toggle Input Type` icon again.

:::image type="complex" source="../media/font-editor-preset-font-sizes.msft.png" alt-text="Open the preset keyword interface" lightbox="../media/font-editor-preset-font-sizes.msft.png":::
   Open the preset keyword interface  
:::image-end:::  

## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  

[DevtoolsIndex]: ../index.md "Microsoft Edge (Chromium) Developer Tools | Microsoft Docs"  
[DevtoolsExperimentalFeaturesIndex]: ../experimental-features/index.md "Experimental features | Microsoft Docs"  
[DevtoolsExperimentalFeaturesIndexTurnOnExperimentalFeatures]: ../experimental-features/index.md#turn-on-experimental-features "Turn on experimental features - Experimental features | Microsoft Docs"  
