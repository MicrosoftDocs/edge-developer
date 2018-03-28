---
ms.assetid: d8506b66-9300-459a-a1ca-0be4c8176ebc
description: Learn how @supports and CSS.supports can be used to detect browser support for a given style directive.
title: Dev guide - Supports at rule
author: libbymc
ms.author: libbymc
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# @supports and the window.CSS.supports() API

Microsoft Edge (build 10240+) now has support for [@supports](https://msdn.microsoft.com/library/dn894031.aspx) (CSS) and [CSS.supports](https://msdn.microsoft.com/library/dn894031.aspx) (JavaScript API) to detect browser support for a given style directive. Previous to the @supports conditional rule, CSS feature detection was only available through Javascript, using libraries such as [Modernizr](https://modernizr.com/).

## @supports (CSS)

The @supports CSS at-rule gives CSS the ability to perform a feature query, checking whether a browser supports a feature, then applying the styles for those elements if the condition is met. 

It's sort of like Modernizr but tailored specially for CSS properties.

CSS @supports directives go in your CSS code just as @media queries do:

```CSS
@supports (display: flex) {
  body { display: flex; }
}
```

The @supports at-rule may be used at the top CSS level or inside another CSS conditional-group at-rule, and can be accessed via the CSS object model interface `CSSSupportsRule`.

### not keyword

@supports can be paired with a 'not' keyword to check for no support:

```CSS
@supports not (display: flex) {
	body { width: 100%; height: 100%; background: white; color: black; }
	#navigation { width: 25%; }
	#article { width: 75%; }
}
```

### or / and keywords

Multiple CSS property checks can be made by chaining the `and` and `or` keywords. 

The `and` keyword checks for multiple required conditions:
```CSS
@supports (property1: value1) and (property2: value2) {
  element {
    property1: value1;
    property2: value2;
  }
}
```

The `or` keyword checks for a variety of alternative features for a set of styles. This can be helpful for any properties or values that may require vendor prefixes:
```CSS
@supports (display: -ms-flex) or 
	(display: -webkit-flex) or
	(display: -moz-flex) or
	(display: flex) {

    /* styles go here */
}
```

These keywords can also be combined to test conditions in the same @support rule. Be sure to group them using parentheses to establish order and for the condition to work correctly. In the snippet below, the `or` conditions are evaluated first, the result is then evaluated with the `and` condition:

```CSS
@support ((display: grid;) or (display:flexbox;)) and (column-count:3;)   {
	(margin-bottom: 20px) and ( not (padding-right: 0) )
}
```

## window.CSS.supports() Javascript API

CSS @supports is complemented by the JavaScript `window.CSS.supports()` API. `CSS.supports()` returns a Boolean value indicating whether or not the browser supports a given CSS feature. 

The `CSS.supports()` spec provides two methods of usage.  The first use involves providing two arguments, one for the property and another for the value:

```Javascript
var supportsFlex = CSS.supports("display", "flex");
```

The second use involves providing the entire string to be parsed:

```Javascript
var supportsFlexAndAppearance = CSS.supports("(display: flex) and (transform-style: preserve)");
```



## API Reference
[@supports rule](https://msdn.microsoft.com/library/dn894031(v=vs.85).aspx)

## Demo
[@Supports Test Whether Certain CSS Properties and Values are Supported](https://developer.microsoft.com/en-us/microsoft-edge/testdrive/demos/@supports/)

## Specification
[CSS Conditional Rules](https://drafts.csswg.org/css-conditional/)

[@supports](https://drafts.csswg.org/css-conditional-3/#at-supports)

[CSS.supports()](https://drafts.csswg.org/css-conditional-3/#the-css-interface)
