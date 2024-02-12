---
title: Resources for accessibility testing
description: Check out tools and testing procedures that help evaluate a website's accessibility.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.assetid: 737ac54c-ad89-4b3f-bbe2-4e4169d3f364
ms.date: 02/06/2024
---
# Resources for accessibility testing

Accessibility testing is a form of usability testing to verify your website is usable by all people. Check out the W3C page [Evaluating Web Accessibility Overview](https://www.w3.org/WAI/test-evaluate) for information on when testing should be done, testing requirements, and who should test your site.

Use the following tools and testing procedures to evaluate your website for accessibility.


<!-- ====================================================================== -->
## Accessibility testing features in DevTools

DevTools includes accessibility-testing features, such as tools that automatically generate accessibility reports for a webpage, including the **Issues** tool and the **Lighthouse** tool.

To learn more about the accessibility testing features of DevTools, see [Accessibility-testing features](../devtools-guide-chromium/accessibility/reference.md).


<!-- ====================================================================== -->
## Additional manual accessibility testing

DevTools also supports manual accessibility testing, such as:

* Inspect different parts of the page by using the **Inspect** tool.
* Use the keyboard to navigate the page.
* Look for issues that arise when interacting with the page.
* Look for issues related to changes in display, such as making the window narrow.

You might need to perform additional checks to ensure your website is usable by people with different needs, such as:

* Testing when zoomed-in.
* Testing with screen readers.
* Testing with voice recognition.
* Testing in high-contrast mode.


<!-- ====================================================================== -->
## Use testers who have different accessibility needs

Ideally, have testers with different accessibility needs do manual accessibility testing.

Automated tools can't find all the accessibility problems of a website, because many of the barriers show up only during interactive use.  None of the accessibility-testing features can replace testing with people that use assistive technologies and following a plan to check for all the required tests.


<!-- ====================================================================== -->
## Use Accessibility Insights

You can also use the assessment feature of [Accessibility Insights](https://accessibilityinsights.io) to measure your website's compliance with the [Web Content Accessibility Guidelines (WCAG) 2.2 Level AA](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.2&levels=aaa) success criteria. To learn more, see [Assessment in Accessibility Insights for Web](https://accessibilityinsights.io/docs/en/web/getstarted/assessment/).


<!-- ====================================================================== -->
## External articles and websites

*  [Assistive technology compatibility tests](http://www.powermapper.com/tests) - Test results showing how different content types and standards behave in assistive technologies (AT) such as screen readers.

*  [HTML5Accessibility](https://html5accessibility.com) - This site tests which new HTML5 features are accessibly supported by major browsers.

*  [webhint](https://webhint.io) - Use webhint to check for out-of-date libraries, security improvements, performance problems, and accessibility issues.

*  [Web Accessibility Evaluation Tools List](https://www.w3.org/WAI/ER/tools/index.html) - A list of web accessibility evaluation tools to help determine if websites meet accessibility guidelines.


<!-- ====================================================================== -->
## The Web Accessibility Initiative (WAI)

*  [Accessibility Evaluation Resources](https://www.w3.org/WAI/eval/Overview.html) - Approaches for evaluating websites for accessibility.

*  [Easy Checks – A First Review of Web Accessibility](https://www.w3.org/WAI/eval/preliminary.html) - Quick checks that help you assess the accessibility of a web page.

*  [How to Meet WCAG 2.0](https://www.w3.org/WAI/WCAG20/quickref) - A quick reference to Web Content Accessibility Guidelines (WCAG), requirements, success criteria, and techniques.
