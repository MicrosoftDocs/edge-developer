---
description: How to edit CSS typography with the font tool of the styles pane.
title: Editing CSS font typography with the font tool of the styles pane
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/19/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Editing CSS font settings in the styles pane  

:::image type="icon" source="../media/experimental-tag-14px.msft.png":::  

Typography on the web is an important part of the user experience and CSS has evolved a lot in the recent years.  

The biggest trick is to make sure you allow for flexibility.  You want to ensure that text is easy to read using size and line-height.  Users need to resize it.  The availability of certain fonts is not guaranteed, set fallback display options to handle when your favorite font is not available.  

CSS allows you to define fonts as font families.  There are dozens of different CSS units available to define the size of text.  You also have several CSS properties that affect font-size, spacing, line height, and other typographic features.  To make it easier to deal with typography, we now have a font editor in the styles pane.  It allows you to tweak typography and see the changes live in the browser.  You may fine-tune your font settings without in-depth knowledge of the necessary CSS.  

> [!WARNING]
> Currently the **Enable new font editor tool within the styles pane** feature is experimental and you need to [turn it on for Microsoft Edge Developer Tools][DevtoolsExperimentalFeaturesIndexTurnOnExperimentalFeatures].  

Any CSS section of the styles pane with font definitions and the inline styles section now shows a font icon.  To open the font editor, choose the icon.  

:::image type="complex" source="../media/font-editor-icon.msft.png" alt-text="The icon in the styles pane to edit font settings" lightbox="../media/font-editor-icon.msft.png":::
   The icon in the styles pane to edit font settings  
:::image-end:::  

Once you choose on the font icon, the font editor is open.  

:::image type="complex" source="../media/font-editor-open.msft.png" alt-text="The font editor open on top of the styles pane" lightbox="../media/font-editor-open.msft.png":::
   The font editor open on top of the styles pane  
:::image-end:::  

All the form fields in the editor are populated by the settings in that block of CSS.  A `line-height` definition is set to `160%`, which means the text field shows `160`, the unit dropdown is at `%` and the slider at the appropriate place.  The sliders and text fields are synced.  

The editor consists of two parts: the Font Family Selector and the CSS properties editor.  

## The Font Family Selector  

The Font Family Selector is the lower part of the font editor.  You choose the font family of the CSS selector.  

:::image type="complex" source="../media/font-editor-font-family.msft.png" alt-text="The font editor open on top of the styles pane with the family selector highlighted" lightbox="../media/font-editor-css-properties.msft.png":::
   The font editor open on top of the styles pane with the family selector highlighted  
:::image-end:::  

Choose a font and up to nine fallback fonts.  

:::image type="complex" source="../media/font-editor-font-family-list.msft.png" alt-text="The font editor open on top of the styles pane with the family selector highlighted" lightbox="../media/font-editor-css-properties.msft.png":::
   The font editor open on top of the styles pane with the family selector highlighted
:::image-end:::

The fonts are organized in three different groups.  

1.  Computed fonts - the ones currently available in the style sheet  
1.  System fonts - fonts that are available on the current operating system  
1.  Generic font families - like `serif` or `sans-serif`  
1.  Global values - `inherit`, `initial`,  and `unset`  

After you choose a font, another dropdown menu is open.  To remove a font, choose the waste basket icon.  

:::image type="complex" source="../media/font-editor-defining-fonts.msft.png" alt-text="The font editor with a defined list of fonts and fallback fonts" lightbox="../media/font-editor-defining-fonts.msft.png":::
   The font editor with a defined list of fonts and fallback fonts highlighted  
:::image-end:::  

:::image type="complex" source="../media/font-editor-deleting-fonts.msft.png" alt-text="To delete a font from the list, choose the waste basket icon" lightbox="../media/font-editor-deleting-fonts.msft.png":::
   To delete a font from the list, choose the waste basket icon  
:::image-end:::  

> [!NOTE]
> If you choose a global value for font family, you do not get another dropdown since there is no fallback for it in CSS.  

## The CSS properties editor  

You may tweak CSS font properties in the lower part of the font editor.  

Here you may change the font size, line height, font weight, and letter spacing using sliders and see the changes live in the browser window.  

:::image type="complex" source="../media/font-editor-css-properties.msft.png" alt-text="The font editor open on top of the styles pane with the CSS properties highlighted" lightbox="../media/font-editor-font-family.msft.png":::
   The font editor open on top of the styles pane with the CSS properties highlighted  
:::image-end:::  

You may also convert CSS units with the editor.  

For example, you may use the tool on the webpage, and use the slider to `16 pixels`.  

:::image type="complex" source="../media/font-editor-setting-to-16px.msft.png" alt-text="Change the font size to 16 pixels" lightbox="../media/font-editor-setting-to-16px.msft.png":::
   Change the font size to 16 pixels  
:::image-end:::  

If you open the unit dropdown and choose `em` as the value, the result is the 16 pixels is associated with the equivalent value `1 em`.  

:::image type="complex" source="../media/font-editor-converted-to-em.msft.png" alt-text="Open the unit dropdown to convert to em" lightbox="../media/font-editor-converted-to-em.msft.png":::
   Open the unit dropdown to convert to em  
:::image-end:::  

The unit dropdown offers you all the commonly used numeric CSS units by default.  Font size, line height, font weight, and spacing have different units.  You may use the sliders for broader changes, and select the `arrow up` and `arrow down` keys to fine-tune your settings.  

The CSS properties also include preset keywords.  To switch to the preset keywords, on the right-hand side, choose the double arrow icon.  For example, for font size `xx-small` to `xx-large` and the presets `inherit`, `initial` and `unset`.  

:::image type="complex" source="../media/font-editor-preset-font-sizes.msft.png" alt-text="Open the preset keyword interface" lightbox="../media/font-editor-preset-font-sizes.msft.png":::
   Open the preset keyword interface  
:::image-end:::  

Choose the double arrow again to return to the slider and numeric unit interface.  

## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  

[DevtoolsIndex]: ../index.md "Microsoft Edge (Chromium) Developer Tools | Microsoft Docs"  
[DevtoolsExperimentalFeaturesIndex]: ../experimental-features/index.md "Experimental features | Microsoft Docs"  
[DevtoolsExperimentalFeaturesIndexTurnOnExperimentalFeatures]: ../experimental-features/index.md#turn-on-experimental-features "Turn on experimental features - Experimental features | Microsoft Docs"  
