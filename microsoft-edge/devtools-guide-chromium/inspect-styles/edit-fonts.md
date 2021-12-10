---
title: Edit CSS font styles and settings in the Styles pane
description: Learn how to change CSS font styles and settings using the Styles pane in Microsoft Edge DevTools.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
no-loc: ["Enable new font editor tool within the Styles pane"]
ms.date: 03/11/2021
---
# Edit CSS font styles and settings in the Styles pane

:::image type="icon" source="../media/experimental-tag-14px.msft.png":::

Typography on the web is an important part of the user experience.  You want to ensure that fonts follow corporate brand guidelines, and that your content is displayed as expected on various devices.  Text must be easy to read using size and line-height.  Users can resize fonts to meet individual needs.  For situations when specific fonts are not available on a user device, you should provide fallback font options.

CSS provides better support for typography in recent years.  Dozens of different CSS units are available to define the size of text.  You also have several CSS properties that affect font size, spacing, line height, and other typographical features.

To make it easier when working with typography, a visual **Font Editor** is now in the **Styles** pane.  You can change your font settings, and the changes are rendered immediately in the browser.  All without in-depth knowledge of CSS.

Currently the **Enable new font editor tool within the Styles pane** feature is experimental and you need to [turn it on for Microsoft Edge Developer Tools](../experimental-features/index.md#turning-an-experiment-on-or-off).

Any CSS in the **Styles** pane, either font definitions or inline styles, has a **Font Editor** icon.  To open the visual **Font Editor**, click the **Font Editor** icon.

:::image type="content" source="../media/font-editor-icon.msft.png" alt-text="The icon in the Styles pane to edit font settings" lightbox="../media/font-editor-icon.msft.png":::

The **Font Editor** open on top of the **Styles** pane:

:::image type="content" source="../media/font-editor-open.msft.png" alt-text="The Font Editor open on top of the Styles pane" lightbox="../media/font-editor-open.msft.png":::

All fields in the visual **Font Editor** are populated from the values in the CSS in the **Styles** pane.  For example, the `line-height` definition is set to `160%` in the **Styles** pane, so the line height text field displays `160`, and the unit dropdown displays `%`.  Also, the slider is automatically set to match the values of the text field.

The **Font Editor** consists of two parts:  the Font Family selector, and the CSS Properties editor.


<!-- ====================================================================== -->
## The Font Family selector

The Font Family selector is the upper part of the visual **Font Editor**.  To select the fonts of the CSS rule, in the CSS editor, use the **Font Family** selector.  You can select main and fallback fonts for each CSS rule.

The **Font Editor** open on top of the **Styles** pane with the **Font Family** selector highlighted:

:::image type="content" source="../media/font-editor-font-family.msft.png" alt-text="The Font Editor open on top of the Styles pane with the Font Family selector highlighted" lightbox="../media/font-editor-font-family.msft.png":::

Use the **Font Family** dropdown to choose from a list of fonts.  Fonts are organized into four groups.

1.  Computed fonts, which are the fonts available in the stylesheet in the **Styles** pane.
1.  System fonts, which are the fonts that are available on the current operating system.
1.  Generic font families, such as `serif` or `sans-serif`.
1.  Global values, such as `inherit`, `initial`, and `unset`.

The **Font Editor** open on top of the **Styles** pane with the **Font Family** selector highlighted:

:::image type="content" source="../media/font-editor-font-family-list.msft.png" alt-text="The font editor open on top of the Styles pane with the Font Family selector highlighted" lightbox="../media/font-editor-font-family-list.msft.png":::

After you select a font, another dropdown menu is displayed for you to select fallback fonts.  You can select up to eight fallback fonts.  To remove a font, click the **Delete Font Family** icon.

<!--:::image type="content" source="../media/font-editor-defining-fonts.msft.png" alt-text="The font editor with a defined list of fonts and fallback fonts" lightbox="../media/font-editor-defining-fonts.msft.png":::
   The **Font Editor** with a defined list of fonts and fallback fonts highlighted
:::image-end:::  -->

> [!NOTE]
> If you select a global value for font family, you do not get another dropdown, since there is no fallback for it in CSS.


<!-- ====================================================================== -->
## The CSS Properties editor

You can change CSS font properties in the lower part of the visual **Font Editor**.  You can change the font size, line height, font weight, and letter spacing using any of the UI controls.  Your changes are applied immediately in the browser.

The **Font Editor** open on top of the **Styles** pane with the CSS properties highlighted:

:::image type="content" source="../media/font-editor-css-properties.msft.png" alt-text="The font editor open on top of the Styles pane with the CSS properties highlighted" lightbox="../media/font-editor-css-properties.msft.png":::

You can also convert CSS units using the visual **Font Editor**.  For example, you can use the tool on a CSS rule where the **Font Size** slider is initially set to `16 pixels`.  Now, use the unit dropdown and select the value `em`.  The `1 em` displayed is equal to `16 pixels`.

Changing the font size to `16 pixels`:

:::image type="content" source="../media/font-editor-setting-to-16px.msft.png" alt-text="Changing the font size to 16 pixels" lightbox="../media/font-editor-setting-to-16px.msft.png":::

Opening the unit dropdown to convert to `em`:

:::image type="content" source="../media/font-editor-converted-to-em.msft.png" alt-text="Opening the unit dropdown to convert to em" lightbox="../media/font-editor-converted-to-em.msft.png":::

The unit dropdown provides all the numeric CSS units that are available.  Font size, line height, font weight, and spacing all use different units.  When the text boxes have focus, you can press the `arrow up` and `arrow down` keys to fine-tune your settings.  To use the sliders with a keyboard, press the `arrow left` and `arrow down` keys.

The CSS Properties editor also includes preset keywords.  To use the preset keywords, on the right-hand side, click the `Toggle Input Type` icon.  The UI changes, and a dropdown of preset keywords are displayed.  To return to the UI with the slider and other UI controls, click the `Toggle Input Type` icon again.

Opening the preset keyword interface:

:::image type="content" source="../media/font-editor-preset-font-sizes.msft.png" alt-text="Opening the preset keyword interface" lightbox="../media/font-editor-preset-font-sizes.msft.png":::
