---
title: Force print preview mode
description: Emulate the print CSS media on your webpage to debug your print styles
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 11/29/2023
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
# Force print preview mode

The [CSS print media query](https://developer.mozilla.org/docs/Web/CSS/Media_Queries/Using_media_queries) allows you to define CSS styles that only apply when a page is printed.

Use the **Rendering** tool to force a webpage into print preview mode in order to debug your print styles.

To force a page into print preview mode:

1. In DevTools, open the **Command Menu**. To open the **Command Menu**, press **Ctrl+Shift+P** (Windows, Linux) or **Command+Shift+P** (macOS).

1. Start typing **rendering**, select **Show Rendering**, and then press **Enter**.

   The **Rendering** tool opens in the **Quick View** panel:
   
   ![The Rendering tool, in the Quick View panel](./print-preview-images/rendering-tool.png)

1. Scroll down to the **Emulate CSS media type** section, and then select **print** in the **No emulation** drop-down menu:

   ![The Emulate CSS media type section in the Rendering tool](./print-preview-images/print-preview-css-media-type.png)

   The webpage is rendered with its print media styles applied.

1. Make change to your print media CSS styles by using the **Elements** tool as normal:

   ![The Elements tool, inspecting an element in the page that's rendered with its print styles](./print-preview-images/change-print-styles.png)

   To learn more about changing CSS, see [Get started viewing and changing CSS](index.md).

To exit the print preview mode, select **No emulation** in the drop-down menu. The webpage is rendered with its screen styles applied.


<!-- ====================================================================== -->
## See also

* [Analyze rendering performance with the Rendering tool](../evaluate-performance/reference.md#analyze-rendering-performance-with-the-rendering-tool) in _Performance features reference_

The Rendering tool is also used for the following:

* [Check for contrast issues with dark theme and light theme](../accessibility/test-dark-mode.md)
* [Verify that a page is usable by people with color blindness](../accessibility/test-color-blindness.md)
* [Verify that a page is usable with blurred vision](../accessibility/test-blurred-vision.md)
* [Verify that a page is usable with UI animation turned off](../accessibility/test-reduced-ui-motion.md)
* [Emulate vision deficiencies](../accessibility/emulate-vision-deficiencies.md)
* [Emulate dark or light schemes in the rendered page](../accessibility/preferred-color-scheme-simulation.md)
* [Simulate reduced motion](../accessibility/reduced-motion-simulation.md)


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/devtools/rendering/emulate-css/) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
