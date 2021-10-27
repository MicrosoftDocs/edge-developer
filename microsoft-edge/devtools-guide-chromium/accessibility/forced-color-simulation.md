---
description: Displaying the current webpage in high contrast mode (CSS Forced Color).
title: High Contrast simulation
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/26/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Simulate High Contrast Mode

Windows and other operating systems (OSs) contain a [setting that allows users to show the interface with a set of reduced colors](https://support.microsoft.com/help/13862).  The setting is called **High Contrast Mode**.  The setting may use either pre-set color schemes or settings that are defined by the user.  The setting helps people with several needs including those with limited vision, suffering from migraines, suffering from [Irlen Syndrome](https://en.wikipedia.org/wiki/Irlen_syndrome), or living with [Dyslexia](https://en.wikipedia.org/wiki/Dyslexia).

The exact numbers are not available, but roughly 4% of all Windows users use display settings with reduced color settings.  According to the [2018 Survey of Users with low Vision](https://webaim.org/projects/lowvisionsurvey2#contrastMode) provided by WebAIM, more than half of low vision users use **High Contrast Mode**.

To make it easier for you (the developer) to test how your products appear in **High Contrast Mode**, [Microsoft Edge DevTools](../index.md) includes a way to simulate it without changing your Operating System settings.  The simulation also helps users of other OSs that do not have the same functionality and therefore are not able to test it.

The [CSS Media Queries Level 5 specification](https://drafts.csswg.org/mediaqueries-5#forced-colors) also defines a programmatic way for you to cater for scenarios when the setting is active.

```css
@media (forced-colors: active) {
  /* Apply these overrides in high contrast mode. */
}
```

> [!IMPORTANT]
> While defining your own settings for High Contrast Mode is allowed, we recommend using the colors defined in [CSS System Color keywords](https://drafts.csswg.org/css-color#css-system-colors).


<!-- ====================================================================== -->
## By using the Rendering tool

For information about the Rendering tool, see [Analyze runtime performance](../rendering-tools/index.md).

To simulate what your web product looks like in High Contrast mode:

1.  Open DevTools, such as by pressing `F12`.

1.  Open the **Rendering** tool.  For example, click **Customize and control DevTools** (...), point to **More tools**, and then select **Rendering**.

    :::image type="content" source="../media/getting-to-the-rendering-tools.msft.png" alt-text="Open the Rendering Tools." lightbox="../media/getting-to-the-rendering-tools.msft.png":::

1.  In **Rendering**, select the dropdown list in **Emulate CSS media feature forced-colors**.<!-- not found in v97 -->

    :::image type="content" source="../media/accessibility-forced-colors-rendering-dropdown.msft.png" alt-text="The forced-colors menu on the Rendering drawer." lightbox="../media/accessibility-forced-colors-rendering-dropdown.msft.png":::

1.  Choose either `No emulation` or `forced-colors: active`.

1.  The current page in the main window now displays the selected simulation.

Displaying a web site without high-contrast simulation:

:::image type="content" source="../media/accessibility-forced-colors-rendering-no-modification.msft.png" alt-text="Displaying a web site without high-contrast simulation." lightbox="../media/accessibility-forced-colors-rendering-no-modification.msft.png":::

Displaying a web site with high-contrast simulation:

:::image type="content" source="../media/accessibility-forced-colors-rendering-dropdown-active.msft.png" alt-text="Displaying a web site with high-contrast simulation." lightbox="../media/accessibility-forced-colors-rendering-dropdown-active.msft.png":::


<!-- ====================================================================== -->
## By using the Command Menu

1.  [Open the Command Menu](../command-menu/index.md#open-the-command-menu).

1.  Type `forced-c`, select either **Emulate CSS forced-colors: active** or **Do not emulate CSS forced-colors**  and then select `Enter`.<!-- "forced" not found in v97 -->

Turning on high-contrast simulation by using the command menu:

:::image type="content" source="../media/accessibility-forced-colors-command-menu-emulate.msft.png" alt-text="Turning on high-contrast simulation by using the command menu." lightbox="../media/accessibility-forced-colors-command-menu-emulate.msft.png":::

Turning off high-contrast simulation by using the command menu:

:::image type="content" source="../media/accessibility-forced-colors-command-menu-donotemulate.msft.png" alt-text="Turning off high-contrast simulation by using the command menu." lightbox="../media/accessibility-forced-colors-command-menu-donotemulate.msft.png":::

View and change your CSS like for any other web page.  For more information, see [Get Started With Viewing And Changing CSS](../css/index.md).
