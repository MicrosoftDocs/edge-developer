---
title: Disable JavaScript
description: To disable JavaScript in DevTools, open the Command Menu and run the "Disable JavaScript" command.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 07/27/2023
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
# Disable JavaScript

To see how your webpage renders and behaves when a browser doesn't have JavaScript support, temporarily turn off JavaScript.

To turn off JavaScript:

1. To open DevTools, right-click the webpage, and then select **Inspect**.  Or, press **Ctrl+Shift+I** (Windows, Linux) or **Command+Option+I** (macOS).  DevTools opens.

1. Press **Ctrl+Shift+P** (Windows, Linux) or **Command+Shift+P** (macOS) to open the **Command Menu**:

   ![The Command Menu](./disable-images/command.png)

1. Start typing `javascript`, select **Disable JavaScript [Debugger]**, and then press **Enter**:

   ![Select 'Disable JavaScript' in the Command Menu](./disable-images/command-javascript.png)

   The yellow triangular warning icon in the **Sources** tab indicates that JavaScript is disabled:

   ![The warning icon next to Sources](./disable-images/javascript-disabled-warning.png)

JavaScript remains disabled in the tab for as long as you have DevTools open.

To check how the page behaves without JavaScript, refresh the page.

To re-enable JavaScript:

1. Press **Ctrl+Shift+P** (Windows, Linux) or **Command+Shift+P** (macOS) to open the **Command Menu**.

1. Select the **Enable JavaScript [Debugger]** command, and then press **Enter**.


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/devtools/javascript/disable/) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
