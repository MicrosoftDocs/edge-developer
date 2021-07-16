---
description: How to apply different color themes to Microsoft Edge DevTools.
title: Apply color themes to Microsoft Edge DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/19/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Apply color themes to Microsoft Edge DevTools  

Various color themes can be applied to the DevTools. Themes affect the color of panes, buttons, and code syntax highlighting. Starting with [Microsoft Edge 93][WhatsNew93], DevTools offers several new themes from [Visual Studio Code][VSCode] such as Monokai and Solarized Dark.  

:::image type="complex" source="./media/all-devtools-themes.png" alt-text="All DevTools color themes" lightbox="./media/all-devtools-themes.png":::
   All of the available DevTools color themes 
:::image-end:::  

> [!NOTE]
> Prior to [Microsoft Edge 93][WhatsNew93], DevTools only had a light and dark theme.  

## How to change themes  

By default, the DevTools theme is set to **System preferred**. This setting selects the Light+ or Dark+ theme for DevTools, depending on your operating system's default color theme. However, you can change this default to one of several other themes:  

Light themes:  
- Light+ (Default)  
- Chromium Light  
- Quiet Light  
- Solarized Light  

Dark themes:  
- Abyss  
- Chromium Dark  
- Kimbie Dark  
- Monokai  
- Monokai Dimmed  
- Red  
- Solarized Dark  
- Tomorrow Night Blue  

Theme options appear in DevTools **Settings**.

1.  Choose **Settings** (cog icon) from the toolbar.  You may also open **Settings** by selecting `F1`.  

    :::image type="complex" source="./media/setting-button.png" alt-text="Open Settings" lightbox="./media/setting-button.png":::
       Open **Settings**  
    :::image-end:::  

1.  On the **Preferences** pane,  under **Appearance**, choose a theme from the Theme dropdown.  
    
    :::image type="complex" source="./media/customize-theme-setting.png" alt-text="Preferences" lightbox="./media/customize-theme-setting.png":::
       Selecting a theme in **Preferences**  
    :::image-end:::  

## Changing theme from the command menu  

You can also use the [Command Menu][DevtoolsCommandMenu] to change themes.  

1.  [Open the Command Menu][DevtoolsCommandMenu].  
1.  Type the word **theme**.
1.  Choose the command for the theme you want to use, for example **Switch To Abyss theme**
1.  Select `Enter` to run the command.  
    
    :::image type="complex" source="./media/customize-theme-command-menu.png" alt-text="The list of themes in the command menu" lightbox="./media/customize-theme-command-menu.png":::
       Selecting the Abyss theme command  
    :::image-end:::  

## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  

[DevtoolsCommandMenu]: ../command-menu/index.md "Command Menu | Microsoft Docs"  
[WhatsNew93]: ../whats-new/2021/07/devtools.md "What's New In DevTools (Microsoft Edge 93) | Microsoft Docs"  
[VSCode]: https://code.visualstudio.com  