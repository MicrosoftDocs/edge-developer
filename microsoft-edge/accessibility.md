---
ms.assetid: 1e5c42a7-4604-46ac-ad7b-a65390e5b36a
description: Learn how to build, design, and test accessible websites within Microsoft Edge.
title: Accessibility
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/15/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: accessibility, accessibility for developers, accessible websites, edge, web development, ARIA, developer, UIA, UI Automation
---

# Accessibility 
*"[T]he impact of disability is radically changed on the Web because the Web removes barriers to communication and interaction that many people face in the physical world." [(W3C - Accessibility)](https://www.w3.org/standards/webdesign/accessibility)*

The [World Health Organization](http://www.who.int/topics/disabilities/en/) defines disability as "a mismatch in interaction between the features of a person’s body and the features of the environment in which they live." Disabilities can range from situational disabilities, like limited mobility while holding a baby or bright sunlight on a phone, to other physical, auditory, visual, or age-related impairments. 

Designing websites and other technologies for inclusion creates an experience enjoyable by every person. Inclusive design and web accessibility empowers and assists everyone to use the web. 

Here are some best practices, code samples, and further resources for you to learn more about [Designing](./accessibility/design.md), [Building](./accessibility/build.md), and [Testing](./accessibility/test.md) accessible websites in Microsoft Edge.

## Accessibility in Microsoft Edge

In Microsoft Edge, we transitioned from the [Microsoft Active Accessibility](https://msdn.microsoft.com/library/windows/desktop/dd373592(v=vs.85).aspx) (MSAA) API to the more modern [UI Automation](https://msdn.microsoft.com/library/windows/desktop/ee684009.aspx) (UIA) API, alongside enormous complementary investments in rearchitecting our DOM implementation and rewriting the browser interface from scratch. The change to UIA was a major investment in browser accessibility, and it lays the foundation for a more inclusive web experience for users who depend on assistive technology in Windows 10. Because EdgeHTML helps to power the Universal Windows Apps platform of Windows 10, these benefits will have an impact beyond the browser. Users will also benefit from the evergreen nature of the EdgeHTML engine. 

The new accessibility system in Microsoft Edge inherently supports modern web standards including ARIA, HTML5, and CSS3. The following diagram of the simplified browser pipeline follows webpage content into an accessible presentation later:

![Flowchart showing the simplified browser pipeline. Figure 1. Content transformed to the engine model is projected into visual and accessibility views that are presented either as visual or accessible presentation.](./media/accessibilityArchitecture.png)

Check out the blog post [Building a more accessible web platform](https://blogs.windows.com/msedgedev/2016/04/20/building-a-more-accessible-web-platform/) for more information on the accessible architecture in Microsoft Edge.  Also visit [Building a more accessible user experience with HTML5 and UIA](https://blogs.windows.com/msedgedev/2016/05/12/accessible-ux-with-html5-and-uia/) for concrete examples of how the new architecture improves the end user’s experience, and specifically how markup defines the experience of navigating with assistive technologies like screen readers.

The Microsoft Edge team works with the W3C and other browser vendors on an ongoing basis to ensure that new web platform features have sufficient built-in accessibility. For more information on new accessibility features in Microsoft Edge, see [New in Microsoft Edge](#new-in-microsoft-edge).


## New in Microsoft Edge
EdgeHTML 17 now includes support for roles, states, and properties from the [Accessible Rich Internet Applications (WAI-ARIA) 1.1](http://www.w3.org/TR/wai-aria-1.1/) specification, including [banner](http://www.w3.org/TR/wai-aria-1.1/#banner), [complementary](http://www.w3.org/TR/wai-aria-1.1/#complementary), [aria-haspopup](http://www.w3.org/TR/wai-aria-1.1/#aria-haspopup), [aria-placeholder](http://www.w3.org/TR/wai-aria-1.1/#aria-placeholder), and many more. 

For information on which new HTML5 features are accessibly supported by Microsoft Edge, visit [HTML5Accessibility](http://html5accessibility.com/).  

## Resources

#### [Accessibility: Towards a more inclusive web with Microsoft Edge and Windows 10](https://blogs.windows.com/msedgedev/2015/09/25/accessibility-towards-a-more-inclusive-web-with-microsoft-edge-and-windows-10/)
A blog post on Microsoft's commitment to accessibility as a core part of software design.

#### [Building a more accessible web platform](https://blogs.windows.com/msedgedev/2016/04/20/building-a-more-accessible-web-platform/)
A blog post on accessibility improvements in Microsoft Edge.

#### [Microsoft Windows UI Automation Blog](https://blogs.msdn.microsoft.com/winuiautomation/)
The Microsoft Windows UI Automation blog covers topics related to the Windows Automation API.

#### [Web Accessibility Initiative (WAI)](http://www.w3.org/WAI/)
The W3C’s Web Accessibility Initiative (WAI) is an effort to help improve the accessibility of the web. Their site provides a variety of resources for [Getting Started with Web Accessibility](https://www.w3.org/WAI/gettingstarted/Overview.html), [Designing for Inclusion](https://www.w3.org/WAI/users/Overview.html), [tutorials and presentations](https://www.w3.org/WAI/train.html), and more. 






