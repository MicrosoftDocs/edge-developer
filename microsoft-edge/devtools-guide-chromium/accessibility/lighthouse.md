---
title: Test accessibility using Lighthouse
description: Testing accessibility using Lighthouse from within DevTools.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 06/07/2021
---
<!-- this article was created on 05/11/2021 by moving a section out from the "Accessibility reference" article (reference.md) -->
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
# Test accessibility using Lighthouse

You can use Lighthouse from within DevTools to audit the accessibility of a page and generate a report. You can use the Lighthouse tool to determine:

*  Whether a page is properly marked up for screen readers.

*  Whether the text elements on a page have sufficient contrast ratios using the Color Picker. See [Test text-color contrast using the Color Picker](color-picker.md).

The **Lighthouse** tool provides links to content hosted on third-party websites.  Microsoft is not responsible for and has no control over the content of these sites and any data that may be collected.

To audit a page using the Lighthouse tool:

1. Go to the URL that you want to audit.

1. In DevTools, select the **Lighthouse** tool.  Configuration options are displayed:

   ![Lighthouse configuration options](./lighthouse-images/accessibility-lighthouse.png)

1. For **Device**, select **Mobile** if you want to simulate a mobile device.  This option changes your user agent string and resizes the viewport.  This option can affect the audit results.

1. In the **Categories** section, select **Accessibility**.

1. Click **Generate report**. After 10 to 30 seconds, DevTools displays a report.  The report gives tips on how to improve the accessibility of the page:

   ![A Lighthouse report for the Accessibility category](./lighthouse-images/accessibility-lighthouse-result.png)

1. Select an item in the report to learn more about it.

   ![An expanded issue in a Lighthouse report](./lighthouse-images/accessibility-lighthouse-result-issue-expanded.png)

1. Click the **Learn more** link to view the documentation of the issue:

   ![View the documentation of an issue](./lighthouse-images/accessibility-web-dev-accessibility-audits-learn-more.png)

1. To return to the configuration options, in DevTools, click **Perform an audit** (`+`).


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/devtools/accessibility/reference/) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors/kaycebasques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
