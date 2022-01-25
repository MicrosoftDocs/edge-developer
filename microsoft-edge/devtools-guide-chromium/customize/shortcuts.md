---
description: Customize keyboard shortcuts, including matching shortcuts from Visual Studio Code.
title: Customize keyboard shortcuts
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 03/10/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, custom, shortcuts, keyboard, visual studio code
---
# Customize keyboard shortcuts

In the **Shortcuts** page of **Settings**, you can view the defined shortcuts for Microsoft Edge DevTools, define your own shortcut for a specific action, or use a preset to match the default shortcuts from Microsoft Visual Studio Code.

For the default keyboard shortcuts, see [Keyboard shortcuts](../shortcuts/index.md).  See also [Customize DevTools](./index.md#settings).


<!-- ====================================================================== -->
## Match keyboard shortcuts from Visual Studio Code

To match the keyboard shortcut in the Microsoft Edge DevTools for an equivalent action in Visual Studio Code:

1.  [Open DevTools](../open/index.md), such as by selecting `F12`.
1.  Open [Settings](./index.md#settings), such as by selecting the gear icon in the main toolbar, or by selecting `Shift`+`?`.
1.  Select the **Shortcuts** settings page.
1.  In the upper right, in the **Match shortcuts from preset** dropdown, select **Visual Studio Code** instead of **DevTools (Default)**.

    :::image type="complex" source="../media/match-keyboard-shortcuts-visual-studio-code.msft.png" alt-text="Match keyboard shortcuts in DevTools to Visual Studio Code" lightbox="../media/match-keyboard-shortcuts-visual-studio-code.msft.png":::
       Match keyboard shortcuts in DevTools to Visual Studio Code
    :::image-end:::

For example, to pause or continue running a script in Visual Studio Code, you select `F5`.  But with the **DevTools (Default)** preset, to pause or continue running a script, you select `F8`.  When you change the preset to **Visual Studio Code**, you now also select `F5` in DevTools, just like in Visual Studio Code.

### See also

* [Microsoft Visual Studio Code](https://code.visualstudio.com)
* [Visual Studio Code Keyboard shortcuts for Windows](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf) (PDF file)


<!-- ====================================================================== -->
## Edit the keyboard shortcut for a DevTools action

1.  [Open DevTools](../open/index.md), such as by selecting `F12`.
1.  Open [Settings](./index.md#settings), such as by selecting the gear icon in the main toolbar, or by selecting `Shift`+`?`.
1.  Select the **Shortcuts** settings page.
1.  Select the action you want to customize.  For example, in the **Debugger** section, select the **Pause script execution** action.
1.  Select the **Edit** (![EditKeyboardShortcut](../media/edit-keyboard-shortcut-icon.msft.png)) icon.

    :::image type="complex" source="../media/experiments-custom-keyboard-shortcuts-select-action.msft.png" alt-text="Select the action to customize from the Shortcuts page in Settings" lightbox="../media/experiments-custom-keyboard-shortcuts-select-action.msft.png":::
       Select the action to customize from the **Shortcuts** page in **Settings**
    :::image-end:::

1.  To bind the shortcut keys to the action, ensure the textbox next to the action has focus, and then use the keyboard to select the shortcut keys.
1.  To bind more than one shortcut combination to an action, select **Add a shortcut**, make sure the textbox next to the action has focus, and then use the keyboard to select the shortcut keys.

    :::image type="complex" source="../media/experiments-custom-keyboard-shortcuts-enter-key.msft.png" alt-text="Select the keys you want to assign to the action" lightbox="../media/experiments-custom-keyboard-shortcuts-enter-key.msft.png":::
       Select the keys you want to assign to the action
    :::image-end:::

1.  To save your new keyboard shortcut, select the checkmark (![CheckmarkKeyboardShortcut](../media/checkmark-keyboard-shortcut-icon.msft.png)) icon.

    :::image type="complex" source="../media/experiments-custom-keyboard-shortcuts-save-shortcut.msft.png" alt-text="Select the checkmark icon to save your new keyboard shortcut" lightbox="../media/experiments-custom-keyboard-shortcuts-enter-key.msft.png":::
       Select the checkmark icon to save your new keyboard shortcut
    :::image-end:::

1.  Select your new keyboard shortcut to trigger the action in DevTools.


### Icons and buttons

<!-- keep in same order as screenshot: -->

*  If there's a **Custom Keyboard Shortcut** (![CustomKeyboardShortcut](../media/custom-keyboard-shortcut-icon.msft.png)) icon displayed next to a checkbox, it indicates that you have customized the keyboard shortcut.

*  To remove a keyboard shortcut for an action while you are editing the keyboard shortcuts for an action, select the **Delete shortcut** (![DeleteKeyboardShortcut](../media/delete-keyboard-shortcut-icon.msft.png)) icon.

*  To add an additional keyboard shortcut for an action while you are editing the keyboard shortcuts for an action, select the **Add a shortcut** link, or select the **Custom Keyboard Shortcut** (![CustomKeyboardShortcut](../media/custom-keyboard-shortcut-icon.msft.png)) icon.

*  To save a modified or added keyboard shortcut while you are editing the keyboard shortcuts for an action, select the checkmark (![CheckmarkKeyboardShortcut](../media/checkmark-keyboard-shortcut-icon.msft.png)) icon.

*  To discard your changes while you are editing the keyboard shortcuts for an action, select the X (![XKeyboardShortcut](../media/discard-changes-keyboard-shortcut-icon.msft.png)) icon.

*  To reset all shortcuts, select the **Restore default shortcuts** button.

> [!NOTE]
> If a keyboard shortcut is currently assigned to one action, you are blocked from saving it to another action.  Instead, delete the keyboard shortcut from the previous action, and then add it to the new action.
