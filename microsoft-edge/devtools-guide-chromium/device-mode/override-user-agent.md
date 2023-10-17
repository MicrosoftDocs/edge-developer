---
title: Override the user agent string
description: Learn to override the user agent string in the Network conditions tool.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 10/17/2023
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
# Override the user agent string

To override the [user agent](https://developer.mozilla.org/docs/Glossary/User_agent) string from Microsoft Edge DevTools:

1. To open DevTools, right-click the webpage, and then select **Inspect**.  Or, press **Ctrl+Shift+I** (Windows, Linux) or **Command+Option+I** (macOS). DevTools opens.

1. Press **Ctrl+Shift+P** (Windows, Linux) or **Command+Shift+P** (macOS) to open the **Command Menu**.

   ![The Command Menu popup in DevTools](./override-user-agent-images/command-menu.png)
    
1. Start typing "network conditions", select **Show Network conditions**, and then press **Enter** to open the **Network conditions** tool. The **Network conditions** tool opens in the Quick View panel at the bottom of DevTools.

1. In the **User agent** section, clear the **Use browser default** checkbox.

1. Either select a user agent string from the dropdown list below the checkbox, or enter a custom user agent string in the **Enter a user custom agent** field.

   ![The Network conditions tool, in the Quick View panel, showing the 'Use browser default' checkbox, the list of user agent strings, and the custom user agent field](./override-user-agent-images/custom-ua.png)

**Note:** You can also change the user agent client hints by using  **User agent client hints** section. To learn more, see [Set user agent client hints](../network/reference.md#set-user-agent-client-hints) in _Network features reference_.


<!-- ====================================================================== -->
## See also

* [Set the user agent string](index.md#set-the-user-agent-string) in _Emulate mobile devices (Device Emulation)_


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/devtools/device-mode/override-user-agent/) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
