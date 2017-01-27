---
description: Learn how Edge can recognize ARIA info, then expose it to assistive technologies that can then use Microsoft UI Automation APIs.
title: Accessibility - ARIA and UI automation - Microsoft Edge Development
author: libbymc
---

# ARIA and UI Automation in Microsoft Edge

The W3C defines Accessible Rich Internet Applications (ARIA) as a syntax for making dynamic web content and custom UI accessible. Microsoft Edge recognizes the ARIA role, state, and property information and exposes it to assistive technologies, which in turn can use the [Microsoft UI Automation](https://blogs.msdn.microsoft.com/winuiautomation/) APIs to retrieve the information.

The Microsoft Edge rending engine (EdgeHTML) builds an accessible projection of web pages, conforming to the following W3C specifications:

1. The [HTML Accessibility API Mappings](http://www.w3.org/TR/html-aam-1.0/) specification defines how HTML elements and attributes map to ARIA and UI Automation objects.
  * [Working draft](http://www.w3.org/TR/html-aam-1.0/) - stable version of the specification
  * [Editor’s draft](http://w3c.github.io/aria/html-aam/html-aam.html) - work in progress. Note that while this spec has the latest changes, the changes may not be available in Microsoft Edge yet.


2. The [Core Accessibility API Mappings](http://www.w3.org/TR/core-aam-1.1/) specification defines general principles for building the accessibility tree and mapping ARIA elements and attributes to UI Automation objects.
  * [Working draft](http://www.w3.org/TR/core-aam-1.1/) - stable version of the specification
  * [Editor’s draft](http://w3c.github.io/aria/core-aam/core-aam.html) - work in progress. Note that while this spec has the latest changes, the changes may not be available in Microsoft Edge yet.  

3. The [Accessible Name and Description: Computation and API Mappings](http://www.w3.org/TR/accname-aam-1.1/) specification defines how to compute the name and description of accessible objects given the HTML and the ARIA elements and attributes values available for the accessible elements.
  * [Working draft](http://www.w3.org/TR/accname-aam-1.1/) - stable version of the specification  
  * [Editor’s draft](http://w3c.github.io/aria/accname-aam/accname-aam.html) - work in progress. Note that while this spec has the latest changes, the changes may not be available in Microsoft Edge yet.   

For more information about the accessibility architecture in Microsoft Edge, check out the [Building a more accessible web platform](https://blogs.windows.com/msedgedev/2016/04/20/building-a-more-accessible-web-platform/#GaJGYkSzOImPK41w.97) blog post.
