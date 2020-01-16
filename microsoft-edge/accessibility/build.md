---
ms.assetid: 1b3ebc25-d023-4f23-bbba-dce066c20de8
description: Walk through how best practices and Accessible Rich Internet Applications (ARIA) can come together to create an accessible website.
title: Accessibility - Build
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/15/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: accessibility, accessibility for developers, accessible websites, edge, web development, ARIA, developer, UIA, UI Automation
ms.custom: seodec18
---

# Building Accessible Websites
The web is filled with dynamic and complex websites, applications, and user interfaces built using a combination of HTML, CSS, and JavaScript.  However, when designed and built without accessibility in mind, these complex websites are difficult to use by people who rely on [assistive technologies](http://webaim.org/articles/motor/assistive) to browse the web. Building websites that are accessible to people with disabilities requires semantic information about the user interface. This allows for assistive technologies, like screen readers, to convey the necessary information to help people with a range of abilities use the website.

Visit [HTML5Accessibility](http://html5accessibility.com/) for information on which new HTML5 features are accessibly supported by Microsoft Edge.

## How Accessibility Works

Assistive technologies add capabilities that computers don’t usually have. For example, a visually impaired user might use their keyboard in combination with assistive technology such as a screen reader, rather than directly using the browser with the mouse and screen. For applications on Microsoft platforms and on the web, the assistive technology interacts with Microsoft [UI Automation](https://msdn.microsoft.com/library/windows/desktop/bb892135.aspx), an application-specific object model such as the Document Object Model (DOM) in Microsoft Edge, or a combination of these.

For web developers, certain HTML elements are mapped to UI Automation objects, so in selecting those HTML elements, the developer can use the accessibility properties and events built in to those elements. While developing your website, you usually only need to be concerned with ensuring that the API is correctly written to (or that the appropriate element is specified), in order for the application to be accessible. Check out [ARIA and UI Automation in Microsoft Edge](./build/ARIA-and-UI-Automation.md) for more information.  For information on accessible Universal Windows Platform (UWP) apps, see the [Accessibility](https://msdn.microsoft.com/windows/uwp/accessibility/accessibility) topic in the Windows Dev Center.

Many common accessibility issues with dynamic content can be addressed by good coding practice, and the [WCAG 2.0](https://go.microsoft.com/fwlink/p/?LinkID=24629) documentation includes many techniques and best practices to help you create more accessible dynamic web applications. Even when coded properly, however, dynamic content is not necessarily accessible. [Accessible Rich Internet Applications (ARIA)](#aria) helps overcome this issue.  

For more information on web accessibility, check out the [Introduction to Web Accessibility](https://www.w3.org/WAI/intro/accessibility.php) by the [Web Accessibility Initiative](https://www.w3.org/WAI/) (WAI).

## ARIA
The [Accessible Rich Internet Applications](https://www.w3.org/TR/wai-aria/) (ARIA) specification by the W3C's [Web Accessibility Initiative](https://www.w3.org/WAI/) defines as a syntax for making dynamic web content and custom user interfaces accessible to all people. ARIA extends HTML by using additional attributes (roles, properties, and states) that are designed to convey custom semantics. These attributes are used by browsers to pass along the controls' state and role to the accessibility API.

### Roles, Properties, and States
ARIA roles are set on elements using the [`role`](https://msdn.microsoft.com/library/cc304102(v=vs.85).aspx) attribute to give assistive technologies and accessibility APIs information about the element. For example, the below `<li>` element is assigned `role="menuitem"` to signify it's an item in a menu.

``` html
<li role="menuitem">Home</li>
```

ARIA states and properties are aria-prefixed attributes that provide specific information about an object to help form the definition of the nature of roles. Properties are attributes that are essential to the nature of an object, like [`aria-readonly`](https://msdn.microsoft.com/library/cc304089(v=vs.85).aspx) and [`aria-haspopup`](https://msdn.microsoft.com/library/cc304081(v=vs.85).aspx). Changing a property affects the meaning of the object. In the example below, the property `aria-haspopup="true"` is set on a `<li>` menu item to signify it has a popup.

``` html
<li role="menuitem" aria-haspopup="true">Open</li>
```

States do not change the nature of the object, but represent information associated with the object or user interaction with the object, like [`aria-hidden`](https://msdn.microsoft.com/library/cc304083(v=vs.85).aspx) or [`aria-checked`](https://msdn.microsoft.com/library/cc304075(v=vs.85).aspx). For example, the state `aria-checked="false"` in the example below represents that the checkbox is not checked.

``` html
<div role="checkbox" aria-checked="false">Accept</div>
```

Go to [The Roles Model](https://www.w3.org/TR/wai-aria-1.1/#roles) by the W3C to see a full list of roles, properties, and states.

For more information on ARIA, see the ARIA in the [Resources](#resources) section.

## Resources

### Accessibility Basics
#### [The A11Y Project](http://a11yproject.com/)
The A11Y Project is a community-driven effort to make web accessibility easier. Check out [The A11Y Project](https://a11yproject.com/) site to learn about basic accessibility principles, their accessible pattern and widget [library](https://a11yproject.com/patterns), and their [resources](http://a11yproject.com/resources.html) on accessibility software, blogs, books, and tools.

#### [Web Accessibility Initiative (WAI)](http://www.w3.org/WAI/)
The W3C’s Web Accessibility Initiative (WAI) is an effort to help improve the accessibility of the web. Their site provides a variety of resources for [Getting Started with Web Accessibility](https://www.w3.org/WAI/gettingstarted/Overview.html), [Designing for Inclusion](https://www.w3.org/WAI/users/Overview.html), [tutorials and presentations](https://www.w3.org/WAI/train.html), and more.

### Accessibility Blogs
#### [The Paciello Group](https://www.paciellogroup.com/blog/)
The Paciello Group provides consulting and technology solutions to organizations around the world to ensure their clients reach all audiences effectively and efficiently, while meeting governmental and international standards. Their blog covers topics like web accessibility best practices, accessibility tools, and accessibility trends.

#### [Simply Accessible](http://simplyaccessible.com/articles/)
Simply Accessible is a team of accessibility specialists providing accessibility training, consulting and more to change the perception of accessibility on the web. Their [Articles](http://simplyaccessible.com/articles/) section discusses best practices for web accessibility, accessible design, and more.

#### [SSB BART Group (SSB)](http://www.ssbbartgroup.com/blog/)
SSB BART Group is a digital accessibility firm supporting their clients in developing and deploying accessible products and services. Their blog addresses topics like ARIA best practices, accessibility trends, webinars, and more.

### Accessible Examples
#### [ally.js - Tutorials](http://allyjs.io/tutorials/)
JavaScript library to help modern web applications with accessibility concerns by making accessibility simpler.

#### [Heydonworks - ARIA Examples](http://heydonworks.com/practical_aria_examples/)
Practical ARIA examples to enhance your application accessibility

#### [OpenAjax Examples](http://oaa-accessibility.org/)
The OpenAjax Alliance website is an excellent resource for verifying the rules for WAI-ARIA and provides a number of examples of WAI-ARIA implementations.

#### [Patterns](http://a11yproject.com/patterns.html)
[The A11Y Project](http://a11yproject.com/) offers a library of accessible widgets and patterns like menus, buttons, tooltips, and more.

### Accessibility Techniques & Tools
#### [Accessibility: Creating accessible extension icons for Microsoft Edge](../extensions/guides/accessibility.md)
Get guidance on creating accessible extensions icons for Microsoft Edge.

#### [Accessible Name and Description: Computation and Mappings 1.1](https://www.w3.org/TR/accname-1.1/)
This W3C mapping document explains how browsers determine name and descriptions of accessible objects from web content languages and expose them in accessibility APIs.

#### [Accessibility Evaluation Resources](https://www.w3.org/WAI/eval/Overview.html)
Accessibility Evaluation Resources is a multi-page resource by the W3C that outlines different approaches for evaluating websites for accessibility.

#### [Assistive technology compatibility tests](http://www.powermapper.com/tests/)
Test results showing how different content types and standards behave in assistive technologies (AT) like screen readers.

#### [Building accessible websites just got a lot easier](https://blogs.msdn.microsoft.com/webdev/2016/05/02/building-accessible-websites-just-got-a-lot-easier/)
This .NET Web Development and Tools blog post describes the Visual Studio extension [Web Accessibility Checker](https://go.microsoft.com/fwlink/p/?linkid=841539).

#### [Core Accessibility API Mappings 1.1](https://www.w3.org/TR/core-aam-1.1/)
This W3C mapping document explains how the semantics of web content languages are exposed to accessibility APIs.  

#### [Easy Checks – A First Review of Web Accessibility](https://www.w3.org/WAI/eval/preliminary.html)
A series of quick checks by the WAI that help you asses the accessibility of a web page.

#### [How to Meet WCAG 2.0](https://www.w3.org/WAI/WCAG20/quickref/)
A quick reference to Web Content Accessibility Guidelines (WCAG) 2.0 requirements (success criteria) and techniques.

#### [HTML Accessibility API Mappings 1.0](https://www.w3.org/TR/html-aam-1.0/)
This W3C mappings document explains how HTML5.1 element and attributes map to platform accessibility APIs.


#### [Quick Tips](http://a11yproject.com/#Quick-tips)
A list of quick web development tips for accessibility by [The A11Y Project](http://a11yproject.com/).

#### [Site Scan](https://developer.microsoft.com/en-us/microsoft-edge/tools/staticscan/)
The Site Scan tool on Microsoft Edge Dev Center checks for out-of-date libraries, layout issues, and accessibility issues.

#### [Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/Overview.html)
Techniques from the W3C that provide guidance for web developers on meeting [Web Content Accessibility Guidelines (WCAG) 2.0](http://www.w3.org/TR/WCAG20/) success criteria.

#### [Tips on Developing for Web Accessibility](http://www.w3.org/WAI/gettingstarted/tips/developing.html)
Tips from the W3C on developing web content that is more accessible to people with disabilities.

#### [WAI-ARIA Authoring Practices 1.1](http://w3c.github.io/aria-practices/)
A document by the W3C that provides readers with an understanding of how to use WAI-ARIA 1.1 and recommends approaches to make widgets, navigation, and behaviors accessible using WAI-ARIA roles, states, and properties.

#### [WAI Guidelines and Techniques](http://www.w3.org/WAI/guid-tech.html)
A series of web accessibility guidelines and standards developed by the WAI.  

#### [Web Accessibility Evaluation Tools List](https://www.w3.org/WAI/ER/tools/index.html)
A list of web accessibility evaluation tools to help determine if websites meet accessibility guidelines.

#### [Web Accessibility Perspectives: Explore the Impact and Benefits for Everyone](http://www.w3.org/WAI/perspectives/)
A series of short situational videos by the W3C about the impact of accessibility and the benefits for everyone.
