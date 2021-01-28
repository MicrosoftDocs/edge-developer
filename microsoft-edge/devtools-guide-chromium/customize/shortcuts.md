---
description: Match keyboard shortcuts in the DevTools to Visual Studio Code
title: Customize keyboard shortcuts in the Microsoft Edge DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/27/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, custom, shortcuts, keyboard, visual studio code
---
# Customize keyboard shortcuts in the Microsoft Edge DevTools  

The **Shortcuts** page in [Settings][DevToolsCustomizeSettings] provides a list of [keyboard shortcuts in the DevTools][DevToolsShortcuts] and [features to customize the shortcuts](#match-keyboard-shortcuts-in-the-devtools-to-microsoft-visual-studio-code).  To navigate to the **Shortcuts** page, complete the following steps.  

1.  [Open DevTools][DevtoolsOpenMain].  
1.  Open [Settings][DevToolsCustomizeSettings].
    *   Select `Shift`+`?`.  
1.  Navigate to the **Shortcuts** page.  
    
    :::image type="complex" source="../media/settings-shortcuts.msft.png" alt-text="The Shortcuts page in Settings" lightbox="../media/settings-shortcuts.msft.png":::
       The **Shortcuts** page in **Settings**  
    :::image-end:::  
    
## Match keyboard shortcuts in the DevTools to Microsoft Visual Studio Code  

To match the keyboard shortcuts in the Microsoft Edge DevTools for equivalent actions in [Visual Studio Code][VisualStudioCode], complete the following steps.  

1.  On the [Shortcuts](#customize-keyboard-shortcuts-in-the-microsoft-edge-devtools) page.  
1.  Choose the **Match shortcuts from preset** dropdown and change **DevTools (Default)** to **Visual Studio Code**.  
    
    :::image type="complex" source="../media/match-keyboard-shortcuts-visual-studio-code.msft.png" alt-text="Match keyboard shortcuts in the DevTools to Visual Studio Code" lightbox="../media/match-keyboard-shortcuts-visual-studio-code.msft.png":::
       Match keyboard shortcuts in the DevTools to Visual Studio Code  
    :::image-end:::  
    
For example, to pause or continue running a script in [Visual Studio Code][VisualStudioCodeShortcutsKeyboardWindows], you select `F5`.  With the **DevTools (Default)** preset, to pause or continue running a script, you select `F8`.  When you change the preset to **Visual Studio Code**, you now also select `F5`, just like in [Visual Studio Code][VisualStudioCodeShortcutsKeyboardWindows].  

## Edit keyboard shortcuts for any action in the DevTools  

To customize the keyboard shortcut for a specific action in DevTools, complete the following steps.  

1.  On the [Shortcuts](#customize-keyboard-shortcuts-in-the-microsoft-edge-devtools) page.  
1.  Choose the action you want to customize.  
1.  Choose the **Edit** \(![EditKeyboardShortcut][ImageEditKeyboardShortcutIcon]\) icon.  
    
    :::image type="complex" source="../media/experiments-custom-keyboard-shortcuts-select-action.msft.png" alt-text="Choose the action to customize from the Shortcuts page in Settings" lightbox="../media/experiments-custom-keyboard-shortcuts-select-action.msft.png":::
       Choose the action to customize from the [Shortcuts](#customize-keyboard-shortcuts-in-the-microsoft-edge-devtools) page in [Settings][DevToolsCustomizeSettings]  
    :::image-end:::  
    
1.  On the keyboard, select the keys you want to bind to the action.
    
    :::image type="complex" source="../media/experiments-custom-keyboard-shortcuts-enter-key.msft.png" alt-text="Select the keys you want to assign to the action" lightbox="../media/experiments-custom-keyboard-shortcuts-enter-key.msft.png":::
       Select the keys you want to assign to the action  
    :::image-end:::  
    
1.  To save your new keyboard shortcut, choose the checkmark \(![CheckmarkKeyboardShortcut][ImageCheckmarkKeyboardShortcutIcon]\) icon.
    
    :::image type="complex" source="../media/experiments-custom-keyboard-shortcuts-save-shortcut.msft.png" alt-text="Choose the checkmark icon to save your new keyboard shortcut" lightbox="../media/experiments-custom-keyboard-shortcuts-enter-key.msft.png":::
       Choose the checkmark icon to save your new keyboard shortcut  
    :::image-end:::  
    
1.  Select your new keyboard shortcut to trigger the action in the DevTools.  
    
On the [Shortcuts](#customize-keyboard-shortcuts-in-the-microsoft-edge-devtools) page, the **Custom Keyboard Shortcut** \(![CustomKeyboardShortcut][ImageCustomKeyboardShortcutIcon]\) icon displays keyboard shortcuts that you have customized.  To reset all shortcuts, choose **Restore default shortcuts**.  

When you are editing the keyboard shortcuts for an action, to discard your changes, choose the X \(![XKeyboardShortcut][ImageXKeyboardShortcutIcon]\) icon.  To remove shortcuts for a specific action, choose the **Delete shortcut** \(![DeleteKeyboardShortcut][ImageDeleteKeyboardShortcutIcon]\) icon.  To add multiple shortcuts for an action, choose **Add a shortcut**.  

> [!NOTE]
> If a keyboard shortcut is currently assigned to another action, you are not able to save it for a new action.  You must first delete the keyboard shortcut for the previous action and then add it to the new action.  

<!-- image links -->  

[ImageCheckmarkKeyboardShortcutIcon]: ../media/checkmark-keyboard-shortcut-icon.msft.png  
[ImageCustomKeyboardShortcutIcon]: ../media/custom-keyboard-shortcut-icon.msft.png  
[ImageDeleteKeyboardShortcutIcon]: ../media/delete-keyboard-shortcut-icon.msft.png  
[ImageEditKeyboardShortcutIcon]: ../media/edit-keyboard-shortcut-icon.msft.png  
[ImageXKeyboardShortcutIcon]: ../media/discard-changes-keyboard-shortcut-icon.msft.png  

<!-- links -->  

[DevToolsCustomizeSettings]: ./index.md#settings "Settings - Customize Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsOpenMain]: ../open/index.md "Open Microsoft Edge DevTools | Microsoft Docs"  
[DevToolsShortcuts]: ../shortcuts/index.md "Microsoft Edge DevTools keyboard shortcuts | Microsoft Docs"  

[VisualStudioCode]: https://code.visualstudio.com "Microsoft Visual Studio Code"  
[VisualStudioCodeShortcutsKeyboardWindows]: https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf "Visual Studio Code Keyboard shortcuts for Windows | Microsoft Visual Studio Code"  
