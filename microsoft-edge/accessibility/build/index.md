---
ms.assetid: 1b3ebc25-d023-4f23-bbba-dce066c20de8
description: Walk through how best practices and Accessible Rich Internet Applications (ARIA) can come together to create an accessible website.
title: Build | Accessibility
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/11/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: accessibility, accessibility for developers, accessible websites, edge, web development, ARIA, developer, UIA, UI Automation
ms.custom: seodec18
---
# Building Accessible Websites  

The web is filled with dynamic and complex websites, applications, and user interfaces built using a combination of HTML, CSS, and JavaScript.  However, when designed and built without accessibility in mind, these complex websites are difficult to use by people who rely on [assistive technologies](https://webaim.org/articles/motor/assistive) to browse the web.  Building websites that are accessible to people with disabilities requires semantic information about the user interface.  This allows for assistive technologies, like screen readers, to convey the necessary information to help people with a range of abilities use the website.  

Visit [HTML5Accessibility](https://html5accessibility.com) for information on which new HTML5 features are accessibly supported by Microsoft Edge.  

## How Accessibility Works  

Assistive technologies add capabilities that computers don't usually have.  For example, a visually impaired user might use their keyboard in combination with assistive technology such as a screen reader, rather than directly using the browser with the mouse and screen.  For applications on Microsoft platforms and on the web, the assistive technology interacts with Microsoft [UI Automation](/windows/win32/winauto/uiauto-specandcommunitypromise), an application-specific object model such as the Document Object Model \(DOM\) in Microsoft Edge, or a combination of these.  

For web developers, certain HTML elements are mapped to UI Automation objects, so in selecting those HTML elements, the developer can use the accessibility properties and events built in to those elements.  While developing your website, you usually only need to be concerned with ensuring that the API is correctly written to \(or that the appropriate element is specified\), in order for the application to be accessible.  Check out [ARIA and UI Automation in Microsoft Edge](./aria-and-ui-automation.md) for more information.  For information on accessible Universal Windows Platform \(UWP\) apps, navigate to the [Accessibility](/windows/uwp/design/accessibility/accessibility) topic in the Windows Dev Center.  

Many common accessibility issues with dynamic content can be addressed by good coding practice, and the [WCAG 2.0](https://www.w3.org/TR/WCAG20) documentation includes many techniques and best practices to help you create more accessible dynamic web applications.  Even when coded properly, however, dynamic content is not necessarily accessible.  [Accessible Rich Internet Applications (ARIA)](#aria) helps overcome this issue.  

For more information on web accessibility, check out the [Introduction to Web Accessibility](https://www.w3.org/WAI/intro/accessibility.php) by the [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI).  

## ARIA  

The [Accessible Rich Internet Applications (ARIA)](https://www.w3.org/TR/wai-aria) specification by the W3C's [Web Accessibility Initiative](https://www.w3.org/WAI) defines as a syntax for making dynamic web content and custom user interfaces accessible to all people.  ARIA extends HTML by using additional attributes \(roles, properties, and states\) that are designed to convey custom semantics.  These attributes are used by browsers to pass along the controls' state and role to the accessibility API.  

### Roles, Properties, and States  

ARIA roles are set on elements using the [role](https://developer.mozilla.org/docs/Web/HTML/Reference) attribute to give assistive technologies and accessibility APIs information about the element.  For example, the below `<li>` element is assigned `role="menuitem"` to signify it's an item in a menu.  

```html
<li role="menuitem">Home</li>
```  

ARIA states and properties are aria-prefixed attributes that provide specific information about an object to help form the definition of the nature of roles.  Properties are attributes that are essential to the nature of an object, like [aria-readonly](https://developer.mozilla.org/docs/Web/Accessibility/ARIA) and [aria-haspopup](https://developer.mozilla.org/docs/Web/Accessibility/ARIA).  Changing a property affects the meaning of the object.  In the example below, the property `aria-haspopup="true"` is set on a `<li>` menu item to signify it has a popup.  

```html
<li role="menuitem" aria-haspopup="true">Open</li>
```  

States do not change the nature of the object, but represent information associated with the object or user interaction with the object, like [aria-hidden](https://developer.mozilla.org/docs/Web/Accessibility/ARIA) or [aria-checked](https://developer.mozilla.org/docs/Web/Accessibility/ARIA).  For example, the state `aria-checked="false"` in the example below represents that the checkbox is not checked.  

```html
<div role="checkbox" aria-checked="false">Accept</div>
```  

Go to [The Roles Model](https://www.w3.org/TR/wai-aria-1.1#roles) by the W3C to see a full list of roles, properties, and states.  

For more information on ARIA, navigate to ARIA in the [Resources](#resources) section.  

## Assistive Technology Compatibility Testing  

Verifying that the website you are building works with real assistive technologies is the best way to ensure a good experience for your users with disabilities.  Since many assistive technologies make use of the keyboard, testing the keyboard accessibility of your website is a good place to start.  [Keyboard compatibility testing][W3cPerspectiveVideosKeyboard] validates that users have access to all interactive controls without requiring a mouse.  Microsoft [Accessibility Insights for Web][AccessibilityinsightsWebOverview] is a browser extension for Microsoft Edge and Chrome that guides you and reveals several common issues.  

Once you are confident that your website works well with a keyboard, try it with other assistive technologies, such as screen readers.  It uncover issues in the following.  

*   Your HTML, ARIA, and CSS.  
*   The level of support of an assistive technology for a feature or technique.  
    
Different browsers may map elements to platform accessibility APIs differently than Microsoft Edge.  While building your interface, it is important to consider each difference.  

WebAIM conducts surveys with [screen reader][WebaimProjectsScreenreadersurvey8] and [low vision][WebaimProjectsLowvisionsurvey2] users that help you decide which assistive technologies and browsers you want to test.  

### Learning How to Test  

Assistive technologies are sophisticated tools.  Do not assume that you are able to immediately start testing with an assistive technology without first learning about how it works.  Learning to test with a screen reader has an especially steep learning curve.  A novice screen reader user may assume that a screen reader bug has occurred while the issue is related to misuse of the screen reader.  

For more information about learning to test with assistive technologies, navigate to [Testing with Screen Readers][WebaimArticlesScreenreaderTesting] on WebAIM.  

### Testing Locally  

Most devices include assistive technology that is built-in to the OS.  Microsoft Windows includes the [Windows Narrator][MicrosoftSupport22798] screen reader and [Windows Magnifier][MicrosoftSupportWindows414948ba8b1cD3bd86150e5e32204198].  3rd party assistive technologies like [NVDA][NvaccessAboutNvda], [FreedomscientificSoftwareJaws], and [ZoomText][FreedomscientificSoftwareZoomtext] are available to download.  Apple macOS includes the [VoiceOver][AppleAccessibilityMacVision] screen reader.  And iOS, Android, and Linux all support a variety of assistive technologies.  

### Testing in Virtual Machines and Emulators  

Under macOS, if you want to test with an assistive technology only available for Windows, like Windows Narrator or NVDA, create a Windows virtual machine.  Virtual machines with Microsoft Edge \(EdgeHTML\) and IE are available for VirtualBox and VMWare on the [Virtual Machines download page][MicrosoftDeveloperEdgeVms].  

[Android Studio][AndroidDeveloperSdkInstallingStudioHtml] includes an emulator that for you to test assistive technologies in the [Android Accessibility Suite][GooglePlayStoreAndroidAccessibilitySuite].  Follow the instructions to [set up a virtual device][AndroidDeveloperDevicesManagingAvdsHtml] and [start the emulator][AndroidDeveloperDevicesEmulatorHtml], then install [Android Accessibility Suite][GooglePlayStoreAndroidAccessibilitySuite] from the GooglePlay store.  

> [!NOTE]
> The iOS Simulator does not currently include VoiceOver.  

### Cloud-based Testing Tools  

If an assistive technology is not available on your OS or you not possible to install one on a virtual machine or emulator, cloud-based assistive technology testing tools are the next best thing.  

*   [Assistiv Labs (commercial)][AssistivlabsMain] enables you to manually test with assistive technologies through any modern web browser.  Choose an assistive technology and browser and it connects you with a virtual machine, emulator, or real device with which you may interact.  

## Resources  

### Accessibility Basics  

#### The A11Y Project  

[The A11Y Project](http://a11yproject.com) is a community-driven effort to make web accessibility easier.  Check out [The A11Y Project](https://a11yproject.com) site to learn about basic accessibility principles, their accessible pattern and widget [library](https://a11yproject.com/patterns), and their [resources](http://a11yproject.com/resources.html) on accessibility software, blogs, books, and tools.  

#### Web Accessibility Initiative (WAI)  

The W3C [Web Accessibility Initiative (WAI)](https://w3.org/WAI) is an effort to help improve the accessibility of the web.  Their site provides a variety of resources for [Getting Started with Web Accessibility](https://www.w3.org/WAI/gettingstarted/Overview.html), [Designing for Inclusion](https://www.w3.org/WAI/users/Overview.html), [tutorials and presentations](https://www.w3.org/WAI/train.html), and more.  

### Accessibility Blogs  

#### TPGi, LLC  

[TPGi, LLC](https://www.tpgi.com/blog) provides consulting and technology solutions to organizations around the world to ensure their clients reach all audiences effectively and efficiently, while meeting governmental and international standards.  Their blog covers topics like web accessibility best practices, accessibility tools, and accessibility trends.  

#### Simply Accessible  

[Simply Accessible](http://simplyaccessible.com/articles) is a team of accessibility specialists providing accessibility training, consulting and more to change the perception of accessibility on the web.  Their [Articles](http://simplyaccessible.com/articles) section discusses best practices for web accessibility, accessible design, and more.  

#### Level Access  

[Level Access](https://www.levelaccess.com/blog) is a digital accessibility firm supporting their clients in developing and deploying accessible products and services.  Their blog addresses topics like ARIA best practices, accessibility trends, webinars, and more.  

### Accessible Examples  

#### ally.js - Tutorials  

JavaScript library to help modern web applications with accessibility concerns by making accessibility simpler.  For more information, navigate to [ally.js - Tutorials](http://allyjs.io/tutorials).  

#### OpenAjax Examples  

The [OpenAjax Alliance website](http://oaa-accessibility.org) is an excellent resource for verifying the rules for WAI-ARIA and provides a number of examples of WAI-ARIA implementations.  

#### Patterns  

[The A11Y Project](http://a11yproject.com) offers a library of accessible widgets and patterns like menus, buttons, tooltips, and more.  For more information, navigate to [Patterns](http://a11yproject.com/patterns.html).  

### Accessibility Techniques & Tools

#### Accessibility:  Creating accessible extension icons for Microsoft Edge  

Get guidance on creating accessible extensions icons for Microsoft Edge.  For more information, navigate to [Accessibility: Creating accessible extension icons for Microsoft Edge](/archive/microsoft-edge/legacy/developer/extensions/guides/accessibility).  

#### Accessible Name and Description: Computation and Mappings 1.1  

This W3C mapping document explains how browsers determine name and descriptions of accessible objects from web content languages and expose them in accessibility APIs.  For more information, navigate to [Accessible Name and Description: Computation and Mappings 1.1](https://www.w3.org/TR/accname-1.1).  

#### Accessibility Evaluation Resources  

Accessibility Evaluation Resources is a multi-page resource by the W3C that outlines different approaches for evaluating websites for accessibility.  For more information, navigate to [Accessibility Evaluation Resources](https://www.w3.org/WAI/eval/Overview.html).  

#### Assistive technology compatibility tests  

Test results showing how different content types and standards behave in assistive technologies \(AT\) like screen readers.  For more information, navigate to [Assistive technology compatibility tests](http://www.powermapper.com/tests).  

#### Building accessible websites just got a lot easier  

This .NET Web Development and Tools blog post describes the Visual Studio extension [Web Accessibility Checker](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.WebAccessibilityChecker).  For more information, navigate to [Building accessible websites just got a lot easier](https://devblogs.microsoft.com/aspnet/building-accessible-websites-just-got-a-lot-easier).  

#### Core Accessibility API Mappings 1.1  

This W3C mapping document explains how the semantics of web content languages are exposed to accessibility APIs.  For more information, navigate to [Core Accessibility API Mappings 1.1](https://www.w3.org/TR/core-aam-1.1).  

#### Easy Checks – A First Review of Web Accessibility  

A series of quick checks by the WAI that help you asses the accessibility of a web page.  For more information, navigate to [Easy Checks – A First Review of Web Accessibility](https://www.w3.org/WAI/eval/preliminary.html).  

#### How to Meet WCAG 2.0  

A quick reference to Web Content Accessibility Guidelines \(WCAG\) 2.0 requirements \(success criteria\) and techniques.  For more information, navigate to [How to Meet WCAG 2.0](https://www.w3.org/WAI/WCAG20/quickref).  

#### HTML Accessibility API Mappings 1.0  

This W3C mappings document explains how HTML5.1 element and attributes map to platform accessibility APIs.  For more information, navigate to [HTML Accessibility API Mappings 1.0](https://www.w3.org/TR/html-aam-1.0).  

#### Quick Tips

A list of quick web development tips for accessibility by [The A11Y Project](http://a11yproject.com).  For more information, navigate to [Quick Tips](http://a11yproject.com#Quick-tips).  

#### Site Scan  

The Site Scan tool on Microsoft Edge Dev Center checks for out-of-date libraries, layout issues, and accessibility issues.  For more information, navigate to [Site Scan](https://developer.microsoft.com/microsoft-edge/tools).  

#### Techniques for WCAG 2.0  

Techniques from the W3C that provide guidance for web developers on meeting [Web Content Accessibility Guidelines (WCAG) 2.0](https://w3.org/TR/WCAG20) success criteria.  For more information, navigate to [Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/Overview.html).  

#### Tips on Developing for Web Accessibility  

Tips from the W3C on developing web content that is more accessible to people with disabilities.  For more information, navigate to [Tips on Developing for Web Accessibility](https://w3.org/WAI/gettingstarted/tips/developing.html).  

#### WAI-ARIA Authoring Practices 1.1  

A document by the W3C that provides readers with an understanding of how to use WAI-ARIA 1.1 and recommends approaches to make widgets, navigation, and behaviors accessible using WAI-ARIA roles, states, and properties.  For more information, navigate to [WAI-ARIA Authoring Practices 1.1](http://w3c.github.io/aria-practices).  

#### WAI Guidelines and Techniques  

A series of web accessibility guidelines and standards developed by the WAI.  For more information, navigate to [WAI Guidelines and Techniques](https://w3.org/WAI/guid-tech.html).  

#### Web Accessibility Evaluation Tools List  

A list of web accessibility evaluation tools to help determine if websites meet accessibility guidelines.  For more information, navigate to [Web Accessibility Evaluation Tools List](https://www.w3.org/WAI/ER/tools/index.html).  

#### Web Accessibility Perspectives: Explore the Impact and Benefits for Everyone  

A series of short situational videos by the W3C about the impact of accessibility and the benefits for everyone.  For more information, navigate to [Web Accessibility Perspectives: Explore the Impact and Benefits for Everyone](https://w3.org/WAI/perspectives).  

<!-- links -->  

<!--todo: link updates and acrolinx  -->  

[MicrosoftDeveloperEdgeVms]: https://developer.microsoft.com/microsoft-edge/tools/vms "Virtual Machines | Microsoft Edge Developer"  

[MicrosoftSupport22798]: https://support.microsoft.com/help/22798 "Complete guide to Narrator | Microsoft Support"  
[MicrosoftSupportWindows414948ba8b1cD3bd86150e5e32204198]: https://support.microsoft.com/windows/414948ba-8b1c-d3bd-8615-0e5e32204198 "Use Magnifier to make things on the screen easier to see | Microsoft Support"  

[AccessibilityinsightsWebOverview]: https://accessibilityinsights.io/docs/web/overview "Accessibility Insights for Web | Accessibility Insights"  

[AndroidDeveloperDevicesManagingAvdsHtml]: https://developer.android.com/tools/devices/managing-avds.html "Create and manage virtual devices | Android Developers"  
[AndroidDeveloperDevicesEmulatorHtml]: https://developer.android.com/tools/devices/emulator.html "Run apps on the Android Emulator | Android Developers"  
[AndroidDeveloperSdkInstallingStudioHtml]: https://developer.android.com/sdk/installing/studio.html "Download Android Studio | Android Developers"  

[AppleAccessibilityMacVision]: https://www.apple.com/accessibility/mac/vision "Vision Accessibility - Mac | Apple"  

[AssistivlabsMain]: https://assistivlabs.com "Assistiv Labs"  

[FreedomscientificSoftwareJaws]: https://www.freedomscientific.com/products/software/jaws "JAWS® | Freedom Scientific"  
[FreedomscientificSoftwareZoomtext]: https://www.freedomscientific.com/products/software/zoomtext "ZoomText | Freedom Scientific"  

[GooglePlayStoreAndroidAccessibilitySuite]: https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback "Android Accessibility Suite | GooglePlay Store"  

[NvaccessAboutNvda]: https://www.nvaccess.org/about-nvda "About NVDA | NV Access"  

[W3cPerspectiveVideosKeyboard]: https://www.w3.org/WAI/perspective-videos/keyboard "Keyboard Compatibility | W3C"  

[WebaimProjectsLowvisionsurvey2]: https://webaim.org/projects/lowvisionsurvey2 "Survey of Users with Low Vision \#2 Results | WebAIM"  
[WebaimProjectsScreenreadersurvey8]: https://webaim.org/projects/screenreadersurvey8 "Screen Reader User Survey \#8 Results | WebAIM"  
[WebaimArticlesScreenreaderTesting]: https://webaim.org/articles/screenreader_testing "Testing with Screen Readers | WebAIM"  
