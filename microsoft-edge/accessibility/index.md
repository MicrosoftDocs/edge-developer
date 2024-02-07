---
title: Accessibility in Microsoft Edge
description: Learn how to build, design, and test accessible websites within Microsoft Edge.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.assetid: 1e5c42a7-4604-46ac-ad7b-a65390e5b36a
ms.date: 04/16/2020
---
# Accessibility in Microsoft Edge

Development of your webpages, web apps, and web-enabled products is robustly supported through the extensive Accessibility features in Microsoft Edge and its tooling ecosystem.

> "The impact of disability is radically changed on the Web because the Web removes barriers to communication and interaction that many people face in the physical world." - [W3C Standards for Web Design and Applications: Accessibility](https://w3.org/standards/webdesign/accessibility)

The [World Health Organization](https://www.who.int/) defines disability as "a mismatch in interaction between the features of a person's body and the features of the environment in which they live".  Disabilities range from situational disabilities, like limited mobility while holding a baby or bright sunlight on a phone, to other physical, auditory, visual, or age-related impairments.

Designing websites and other technologies for inclusion creates an experience enjoyable by every person.  Inclusive design and web accessibility empowers and assists everyone to use the web.

The articles in this Accessibility section present some best practices, code samples, and further resources for you to learn more about designing, building, and testing accessible websites in Microsoft Edge.


<!-- ====================================================================== -->
## Microsoft Edge DevTools

Microsoft Edge DevTools is built into the Microsoft Edge browser, and includes many accessibility-testing features, to test aspects of webpages including:

*  Alt-text for images, and screen reader support.
*  Keyboard support.
*  Text contrast.
*  Usability with vision deficiencies.
*  Usability when the browser is narrow.

See:

* [Accessibility-testing features](../devtools-guide-chromium/accessibility/reference.md) - a list of accessibility aspects to test and the corresponding DevTools features.


<!-- ====================================================================== -->
## Microsoft UI Automation API

In Microsoft Edge, we introduced the [UI Automation API](/windows/win32/winauto/entry-uiauto-win32) (UIA API).  This change to UI automation was a major investment in browser accessibility.  The UI Automation API lays the foundation for a more inclusive web experience for users who depend on assistive technology in Windows 10 or later.

The Microsoft UI Automation API is an accessibility framework that enables Windows applications to provide and consume programmatic information about user interfaces (UIs).  It provides programmatic access to most UI elements on the desktop.  It enables assistive technology products, such as screen readers, to provide information about the UI to end users and to manipulate the UI by means other than standard input.  UI Automation also allows automated test scripts to interact with the UI.

The [Microsoft Windows UI Automation blog](/archive/blogs/winuiautomation/) has posts about the Windows Automation API.

The accessibility system in Microsoft Edge inherently supports modern web standards including ARIA, HTML5, and CSS3.  The following diagram of the simplified browser pipeline follows webpage content into an accessible presentation layer:

![Content transformed to the engine model is projected into visual and accessibility views, presented as visual or accessible presentation](./index-images/accessibilityarchitecture.png)

The Microsoft Edge team works with the W3C and other browser vendors on an ongoing basis to ensure that new web platform features have sufficient built-in accessibility.

For information on which new HTML features are accessibly supported by Microsoft Edge, see [HTML5Accessibility](https://html5accessibility.com).


<!-- ====================================================================== -->
## See also

Microsoft Edge:

* [Designing accessible websites](design.md)
* [Resources about building accessible websites](build/index.md)
* [Resources for accessibility testing](test.md)

W3C articles:

* [W3C Web Accessibility Initiative (WAI)](https://w3.org/wai)
   * [Getting Started with Web Accessibility](https://w3.org/wai/gettingstarted/Overview)
   * [Designing for Inclusion](https://w3.org/wai/fundamentals/accessibility-intro)
   * [Tutorials and presentations](https://w3.org/wai/teach-advocate)
