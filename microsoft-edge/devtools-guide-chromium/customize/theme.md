---
description: How to apply different color themes to Microsoft Edge DevTools.
title: Apply color themes to Microsoft Edge DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/20/2021
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
# Apply color themes to Microsoft Edge DevTools  

You can apply various color themes to DevTools, including several themes from [Visual Studio Code][VSCode], such as Monokai and Solarized Dark.  Themes affect the color of panes, buttons, and code syntax highlighting. 

:::image type="complex" source="./media/all-devtools-themes.png" alt-text="Various DevTools color themes" lightbox="./media/all-devtools-themes.png":::
   Various DevTools color themes 
:::image-end:::  

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

## Changing the theme from Settings  

1.  Open DevTools, and then select **Settings** (the gear icon).

    :::image type="complex" source="./media/setting-button.png" alt-text="The Settings (gear) icon" lightbox="./media/setting-button.png":::
       The **Settings** (gear) icon  
    :::image-end:::  

1.  Select **Preferences**, and then in the **Appearance** section, select a theme from the **Theme** dropdown list.  
    
    :::image type="complex" source="./media/customize-theme-setting.png" alt-text="Selecting a theme in Preferences" lightbox="./media/customize-theme-setting.png":::
       Selecting a theme in **Preferences**  
    :::image-end:::  

## Changing the theme from the Command Menu  

You can also use the Command Menu to change themes.  

1.  [Open the Command Menu][DevtoolsCommandMenu].  
1.  Type the word "theme".
1.  Select the command for the theme you want to use.  For example, **Appearance: Switch to Abyss theme**.
1.  Select `Enter` to run the command.  
    
    :::image type="complex" source="./media/customize-theme-command-menu.png" alt-text="The list of themes in the Command Menu" lightbox="./media/customize-theme-command-menu.png":::
       The list of themes in the **Command Menu**  
    :::image-end:::  

## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  
[DevtoolsCommandMenu]: ../command-menu/index.md "Command Menu | Microsoft Docs"  
[VSCode]: https://code.visualstudio.com  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/customize/dark-theme) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  
[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors#kayce-basques  
