---
title: Disable JavaScript
description: To disable JavaScript in DevTools, open the Command Menu and run the "Disable JavaScript" command.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 05/04/2021
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

1. Press **Ctrl+Shift+P** (Windows, Linux) or **Command+Shift+P** (macOS) to open the **Command Menu**.

   ![The Command Menu](./disable-images/javascript-console-command.png)

1. Start typing `javascript`, select **Disable JavaScript**, and then press **Enter** to run the command.  JavaScript is now disabled.

   ![Select 'Disable JavaScript' in the Command Menu](./disable-images/javascript-console-command-javascript.png)

    The yellow warning icon next to **Sources** reminds you that JavaScript is disabled.

   ![The warning icon next to Sources](./disable-images/javascript-console-javascript-disabled-warning.png)

JavaScript remains disabled in the tab for as long as you have DevTools open.

To see whether the page depends on JavaScript while loading, refresh the page.

To re-enable JavaScript:

1. Press **Ctrl+Shift+P** (Windows, Linux) or **Command+Shift+P** (macOS) to open the **Command Menu**.

1. Select the **Enable JavaScript** command.


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/devtools/javascript/disable/) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
