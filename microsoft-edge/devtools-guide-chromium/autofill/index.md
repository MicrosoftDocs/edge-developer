---
title: "Autofill: Inspect and debug saved addresses"
description: Inspect and debug address info that's been saved to Microsoft Edge.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 02/26/2025
---
<!-- Copyright Sofia Emelianova

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->
# Autofill: Inspect and debug saved addresses
<!-- https://developer.chrome.com/docs/devtools/autofill -->

Use the **Autofill** tool to inspect and debug address info that's been saved to Microsoft Edge.

The **Autofill** tool records various events that the browser triggers when a user is filling in a form by using the browser's autofill feature -- for example, when the browser remembers your address and autofills it in an address field.


<!-- ====================================================================== -->
## Overview

The **Autofill** tool provides a convenient way to automatically fill forms on websites with saved addresses.  The **Autofill** tool in DevTools lets you inspect the mapping between your form fields, predicted autofill values, and saved data.

The **Autofill** tool lets you inspect only the address info.

See also:
* [Autofill](https://web.dev/learn/forms/autofill) at web.dev.


<!-- ====================================================================== -->
## Save address info to Edge
<!-- https://developer.chrome.com/docs/devtools/autofill#save-to-chrome -->

By default, Microsoft Edge prompts you to save address info you entered into a web form when you submit it.

<!-- todo: find in Edge Settings -->

<!-- ![A prompt to save address info](todo: autofill-prompt.png) -->

<!-- If there's no such prompt, in Edge, select Customize and control > Password and Autofill > Addresses and more, and turn on Save and fill addresses. You can also add new addresses here. -->

<!-- ![The 'Addresses and more' menu option](todo: addresses-menu-option.png) -->

If you don't have address data saved and don't want to save it, you can use test address data provided by the **Autofill** tool.


<!-- ====================================================================== -->
## Open the **Autofill** tool

By default, the **Autofill** tool automatically opens if DevTools is open and when you autofill a form on a website.  To turn this off, open the panel manually and clear the **Automatically open this panel** checkbox.


To manually open the **Autofill** tool:

1. Open DevTools.

1. In the **Activity Bar** at top, select **More tools** > **Autofill**.


To open the **Autofill** tool from the **Command Menu**:

1. Open the **Command Menu** by pressing:

   * macOS: **Command+Shift+P**
   * Windows, Linux: **Control+Shift+P**

   <!-- ![Command Menu with "autofill" entered](todo: command-menu-autofill.png) -->

1. Start typing **autofill**, select **Show Autofill**, and the press **Enter**.

   By default, the **Autofill** tool opens in **Quick View** at the bottom of DevTools.  You can move it to the **Address Bar** at top.


<!-- ====================================================================== -->
## Inspect autofill data
<!-- https://developer.chrome.com/docs/devtools/autofill#inspect -->

To inspect autofill data:

1. Make sure [Autofill is turned on and you have address info saved](#save-address-info-to-edge) in Microsoft Edge.  Alternatively, you can use test address data as described in the next section.

1. Open DevTools; for example, open [Demo page with accessibility issues](https://microsoftedge.github.io/Demos/devtools-a11y-testing/) in a new window or tab, right-click the page, and then select **Inspect**.

1. In the address web form on the demo page, focus a form field.  Microsoft Edge shows a drop-down menu with autofill data options.
<!-- todo: no address form in https://github.com/MicrosoftEdge/Demos -->

1. Select an option from the menu.  Autofill fills the form with saved data and DevTools opens the **Autofill** tool if auto-open is turned on.  Otherwise, open the **Autofill** tool manually.

   <!-- ![An autofill data option selected](todo: autofill-data.png) -->


<!-- ------------------------------ -->
#### Use test address data

If you don't have address data saved and don't want to save it, you can use test data that the **Autofill** tool provides.

To use the test data:

1. In DevTools, open the **Autofill** tool, and then turn on **Show test address data in autofill menu** at the top of the panel.

1. On the page, right-click an address form field, and then select one of the options from the **Developer tools** menu.

   <!-- ![The 'Developer tools' menu with test address data options](todo: test-address-data.png) -->


<!-- ====================================================================== -->
## Data and its mapping
<!-- https://developer.chrome.com/docs/devtools/autofill#data -->

The **Autofill** tool shows the data it inserted in the form fields and a table with mapping between the following:

* **Form field** detected on the page.

* **Predicted autofill value**, which **Autofill** determines using heuristics.

* Value, if any, that **Autofill** inserted into fields it recognized.

   <!-- ![The Autofill tool](todo: autofill.panel.png) -->

Additionally, you can use the [Issues tool](../issues/index.md) to find problems with autocomplete attributes and get fixing tips.

<!-- ![Autocomplete issues caught by the Issues panel](todo: autocomplete-issues.png) -->


<!-- ====================================================================== -->
## See also
<!-- todo: all links in article -->

* [Autofill](https://web.dev/learn/forms/autofill) at web.dev.


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0). 
> The original page is found [here](https://developer.chrome.com/docs/devtools/autofill) and is authored by Sofia Emelianova.

[![Creative Commons License](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
