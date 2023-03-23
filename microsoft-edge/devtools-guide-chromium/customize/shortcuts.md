---
title: Customize keyboard shortcuts
description: Customize keyboard shortcuts, including matching shortcuts from Visual Studio Code.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 03/10/2021
---
# Customize keyboard shortcuts

In the **Shortcuts** page of **Settings**, you can view the defined shortcuts for Microsoft Edge DevTools, define your own shortcut for a specific action, or use a preset to match the default shortcuts from Microsoft Visual Studio Code.

For the default keyboard shortcuts, see [Keyboard shortcuts](../shortcuts/index.md).


<!-- ====================================================================== -->
## Match keyboard shortcuts from Visual Studio Code

To match the keyboard shortcut in the Microsoft Edge DevTools for an equivalent action in Visual Studio Code:

1. To open DevTools, right-click the webpage, and then select **Inspect**.  Or, press `Ctrl`+`Shift`+`I` (Windows, Linux) or `Command`+`Option`+`I` (macOS).  DevTools opens.

1. In DevTools, on the main toolbar, click the **Settings** (![Settings icon](../media/settings-gear-icon-light-theme.png)) button.  Or, press `Shift`+`?`.

1. In the **Settings** panel, select the **Shortcuts** page.

1. In the upper right, in the **Match shortcuts from preset** dropdown list, select **Visual Studio Code** instead of **DevTools (Default)**.

   ![Matching keyboard shortcuts in DevTools to Visual Studio Code](../media/match-keyboard-shortcuts-visual-studio-code.msft.png)

For example, to pause or continue running a script in Visual Studio Code, you press **F5**.  But with the **DevTools (Default)** preset, to pause or continue running a script, you press `F8`.  When you change the preset to **Visual Studio Code**, you now also press **F5** in DevTools, just like in Visual Studio Code.

### See also

* [Microsoft Visual Studio Code](https://code.visualstudio.com)
* [Visual Studio Code Keyboard shortcuts for Windows](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf) (PDF file)


<!-- ====================================================================== -->
## Edit the keyboard shortcut for a DevTools action

1. To open DevTools, right-click the webpage, and then select **Inspect**.  Or, press `Ctrl`+`Shift`+`I` (Windows, Linux) or `Command`+`Option`+`I` (macOS).  DevTools opens.

1. In DevTools, on the main toolbar, click the **Settings** (![Settings icon](../media/settings-gear-icon-light-theme.png)) button.  Or, press `Shift`+`?`.

1. In the **Settings** panel, select the **Shortcuts** page.

1. Select the action you want to customize.  For example, in the **Debugger** section, select the **Pause script execution** action.

1. Click the **Edit** (![EditKeyboardShortcut](../media/edit-keyboard-shortcut-icon.msft.png)) icon.

   ![Select the action to customize from the Shortcuts page in Settings](../media/experiments-custom-keyboard-shortcuts-select-action.msft.png)

1. To bind the shortcut keys to the action, ensure the text box next to the action has focus, and then use the keyboard to select the shortcut keys.

1. To bind more than one shortcut combination to an action, select **Add a shortcut**, make sure the text box next to the action has focus, and then use the keyboard to select the shortcut keys.

   ![Select the keys you want to assign to the action](../media/experiments-custom-keyboard-shortcuts-enter-key.msft.png)

1. To save your new keyboard shortcut, select the checkmark (![CheckmarkKeyboardShortcut](../media/checkmark-keyboard-shortcut-icon.msft.png)) icon.

   ![Select the checkmark icon to save your new keyboard shortcut](../media/experiments-custom-keyboard-shortcuts-save-shortcut.msft.png)

1. Select your new keyboard shortcut to trigger the action in DevTools.


### Icons and buttons

<!-- keep in same order as screenshot: -->

*  If there's a **Custom Keyboard Shortcut** (![CustomKeyboardShortcut](../media/custom-keyboard-shortcut-icon.msft.png)) icon displayed next to a checkbox, it indicates that you have customized the keyboard shortcut.

*  To remove a keyboard shortcut for an action while you are editing the keyboard shortcuts for an action, click the **Delete shortcut** (![DeleteKeyboardShortcut](../media/delete-keyboard-shortcut-icon.msft.png)) icon.

*  To add an additional keyboard shortcut for an action while you are editing the keyboard shortcuts for an action, click the **Add a shortcut** link, or click the **Custom Keyboard Shortcut** (![CustomKeyboardShortcut](../media/custom-keyboard-shortcut-icon.msft.png)) icon.

*  To save a modified or added keyboard shortcut while you are editing the keyboard shortcuts for an action, click the checkmark (![CheckmarkKeyboardShortcut](../media/checkmark-keyboard-shortcut-icon.msft.png)) icon.

*  To discard your changes while you are editing the keyboard shortcuts for an action, click the X (![XKeyboardShortcut](../media/discard-changes-keyboard-shortcut-icon.msft.png)) icon.

*  To reset all shortcuts, click the **Restore default shortcuts** button.

If a keyboard shortcut is currently assigned to one action, it can't be assigned to another action.  Instead, delete the keyboard shortcut from the previous action, and then add that keyboard shortcut to the new action.


<!-- ====================================================================== -->
## See also

* [Keyboard shortcuts](../shortcuts/index.md)
* [Navigate DevTools with assistive technology](../accessibility/navigation.md)
* [Run commands in the Command Menu](../command-menu/index.md)
* [Customize DevTools](index.md#settings)
