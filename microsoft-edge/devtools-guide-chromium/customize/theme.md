---
description: How to apply different color themes to Microsoft Edge DevTools.
title: Apply color themes to DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 08/03/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
<!-- Copyright Kayce Basques
   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at
       https://www.apache.org/licenses/LICENSE-2.0
   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->
# Apply color themes to DevTools

You can apply various color themes to Microsoft Edge DevTools, including several themes from [Visual Studio Code](https://code.visualstudio.com), such as Monokai and Solarized Dark.  Themes affect the color of panes, buttons, and code syntax highlighting.

:::image type="complex" source="./media/all-devtools-themes.png" alt-text="Various DevTools color themes" lightbox="./media/all-devtools-themes.png":::
   Various DevTools color themes
:::image-end:::

> [!NOTE]
> Prior to [Microsoft Edge 93](../whats-new/2021/07/devtools.md), DevTools only had a light and dark theme.

This article is about changing the appearance of DevTools.  To instead change how the webpage under development is displayed, navigate to [Emulate dark or light schemes in the rendered page](../accessibility/preferred-color-scheme-simulation.md).


<!-- ====================================================================== -->
## Available themes

By default, the DevTools theme is set to **System preference** (also called **system preferred color theme**).  If your operating system is set to Light theme, DevTools uses the **Light+** theme.  If your operating system is set to Dark theme, DevTools uses the **Dark+** theme.  However, you can change DevTools to any of several other themes, so that DevTools isn't affected when you set the operating system to Light or Dark theme.

Light themes:
- Light+ (Default)
- Chromium Light
- Quiet Light
- Solarized Light

Dark themes:
- Dark+ (Default)
- Abyss
- Chromium Dark
- Kimbie Dark
- Monokai
- Monokai Dimmed
- Red
- Solarized Dark
- Tomorrow Night Blue


<!-- ====================================================================== -->
## Changing the color theme from Settings

1.  Open DevTools, and then select **Settings** (the gear icon).

    :::image type="complex" source="./media/setting-button.png" alt-text="The Settings (gear) icon" lightbox="./media/setting-button.png":::
       The **Settings** (gear) icon
    :::image-end:::

1.  Select **Preferences**, and then in the **Appearance** section, select a theme from the **Theme** dropdown list.

    :::image type="complex" source="./media/customize-theme-setting.png" alt-text="Selecting a theme in Preferences" lightbox="./media/customize-theme-setting.png":::
       Selecting a theme in **Preferences**
    :::image-end:::


<!-- ====================================================================== -->
## Changing the color theme from the Command Menu

To use the Command Menu to change which color theme is applied to DevTools:

1.  [Open the Command Menu](../command-menu/index.md).
1.  Type the word "theme".
1.  Select an **Appearance** command for the theme you want to use.  For example, **Appearance: Switch to Abyss theme** or **Appearance: Switch to Light+ (Default) theme**.
1.  Select `Enter` to run the command.

    :::image type="complex" source="./media/customize-theme-command-menu.png" alt-text="The list of themes in the Command Menu" lightbox="./media/customize-theme-command-menu.png":::
       The list of themes in the **Command Menu**
    :::image-end:::


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/customize/dark-theme) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse).
[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
