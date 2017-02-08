---
ms.assetid: ad28a431-2150-4750-a11c-9c05a7a57438
description: Learn how CSS Transitions enable you to gradually change CSS property values over a specified time duration without need for script.
title: Dev guide - Transitions
author: libbymc
ms.author: libbymc
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Transitions

[CSS transitions](https://msdn.microsoft.com/library/hh772060(v=vs.85).aspx) enable you to change CSS property values over a specified duration of time, animating the property changes, rather than having them occur immediately. CSS3 Transitions are defined by the World Wide Web Consortium (W3C) in the [CSS Transitions Module Level 3](http://go.microsoft.com/fwlink/p/?linkid=227572) specification.

The CSS transitions include: [`transition`](https://msdn.microsoft.com/library/hh772284(v=vs.85).aspx), [`transition-property`](https://msdn.microsoft.com/library/hh772287(v=vs.85).aspx), [`transition-duration`](https://msdn.microsoft.com/library/hh772286(v=vs.85).aspx), [`transition-timing-function`](https://msdn.microsoft.com/library/hh772288(v=vs.85).aspx), and [`transition-delay`](https://msdn.microsoft.com/library/hh772285(v=vs.85).aspx) and may be enabled by changes of state via pseudo-classes like `:hover` or `:active` or dynamically set using JavaScript. This topic provides an overview of the properties that make up CSS3 Transitions, and shows you a simple example of transitions in use.

CSS Transitions are now supported for use on [SVG elements](./../graphics/SVG.md) in Microsoft Edge.

## The transition-property property

You use the [`transition-property`](https://msdn.microsoft.com/library/hh772287(v=vs.85).aspx) property to identify one or more CSS properties to which the transition effect(s) will be applied when a new property value is specified. The `transition-property` property can either be set to a comma-separated list of CSS properties or to one of the following values:
-  `none`: No transition effect is applied when a new property value is specified. All transition properties are ignored.
-  `all`: This is the default value. Every property that supports transitions has the transition effect applied when a new value for the property is specified. 

```CSS
button {
  transition-property: width, height, font-size, opacity, border-radius;
}
```

<div class="codepen-wrap"><p data-height="325" data-theme-id="23761" data-slug-hash="LNNNwN" data-default-tab="result" data-user="MicrosoftEdgeDocumentation" data-embed-version="2" data-editable="true" class="codepen">See this example by <a href="https://codepen.io/MicrosoftEdgeDocumentation">Microsoft Edge Docs</a> on <a href="https://codepen.io/MicrosoftEdgeDocumentation/pen/LNNNwN">CodePen</a>.</p></div><script async src="//assets.codepen.io/assets/embed/ei.js"></script>

*Be aware that, when you interrupt a transition, it reverses automatically.*

For a list of CSS properties that you can apply transitions to (including 2-D and 3-D transforms), see [Animation and transition properties](https://msdn.microsoft.com/library/dn254934(v=vs.85).aspx).

## The transition-duration property

The [`transition-duration`](https://msdn.microsoft.com/library/hh772286(v=vs.85).aspx) property defines the length of time that a transition takes, specifying one or more comma-separated time values indicating the length of time for the transition from the old value to the new value. Each value is in the form of a floating-point number, followed by a time unit designator (ms or s).
```CSS
.example {
  transition-duration: 3s;
}
```

## The transition-timing-function property

The [`transition-timing-function`](https://msdn.microsoft.com/library/hh772288(v=vs.85).aspx) property enables a transition to change speed over its duration by describing how the intermediate values used during a transition will be calculated. You do this by specifying one or more comma-separated animation timing functions based on a cubic bézier curve, which takes four parameters.

You can either specify the curve explicitly by using the `cubic-bezier` function and entering the four values manually, or you can choose from several function keywords, each of which corresponds to a commonly used timing function. The possible values can be any of the following. See the [`transition-timing-function`](https://msdn.microsoft.com/library/hh772288(v=vs.85).aspx) reference page for descriptions of each function.

-  `cubic-bezier(*x₁*,*y₁*,*x₂*,*y₂*)`  The four parameters of this function must be floating point values between 0 and 1, inclusive. The values correspond to the *x*- and *y*-coordinates of the P₁ and P₂ points of the cubic bézier curve. For properties other than `opacity` and `color`, the cubic-bezier curve function accepts *y*-coordinates outside the standard range of between 0 and 1. This enables you to create *"elastic"* or *"bounce"* transition effects.
-  `ease`  This is the default value. This timing function gradually increases in speed at the start, animates at full speed, and then gradually decreases in speed at the end.
-  `linear`  This timing function has a consistent speed from start to end.
-  `ease-in`  This timing function gradually increases in speed at the start.
-  `ease-out`  This timing function gradually decreases in speed at the end.
-  `ease-in-out`  This timing function gradually increases in speed at the start and then gradually decreases in speed at the end.
-  `steps`  This timing function defines a stepped timing function, and takes two parameters. The first parameter specifies the number of intervals; the optional second parameter specifies the point in the interval where the property value changes. The second parameter is constrained to the values `start` or `end`, which is the default.

```CSS
.example {
  transition-timing-function: cubic-bezier(.1,.8,.4,.2);
  transition-duration: 3s;
}
.example2 {
  transition-timing-function: ease-in-out;
}
.example3 {
  transition-timing-function: steps (4);
}
```

## The transition-delay property

The [`transition-delay`](https://msdn.microsoft.com/library/hh772285(v=vs.85).aspx) property enables you to delay the start of a transition, or make it appear as if the transition is already in progress. If the value for the `transition-delay` property is a negative value, the transition will execute as soon as it is applied, but will appear to have begun execution at the specified offset, or during its play cycle.

```CSS
.example:hover {
  transition-delay: 3s;
}
```
*In the example above, the user would have to hover over the element for more than 3 seconds in order to see the transition effect begin.*

## The transition property

The [`transition`](https://msdn.microsoft.com/library/hh772284) shorthand property combines the four transition properties described previously into a single property. The transition property values must be set in the following order:

-  `transition-property`
-  `transition-duration`
-  `transition-timing-function`
-  `transition-delay`

```CSS
.example {
  transition: [transition-property] [transition-duration] [transition-timing-function] [transition-delay];
}
```

See the following video and CodePen for examples of using the `transition` property.

> [!VIDEO https://channel9.msdn.com/Blogs/One-Dev-Minute/Getting-Started-with-CSS-Transitions/player]


<div class="codepen-wrap"><p data-height="325" data-theme-id="23761" data-slug-hash="LNNNwN" data-default-tab="result" data-user="MicrosoftEdgeDocumentation" data-embed-version="2" data-editable="true" class="codepen">See this example by <a href="https://codepen.io/MicrosoftEdgeDocumentation">Microsoft Edge Docs</a> on <a href="https://codepen.io/MicrosoftEdgeDocumentation/pen/pyWJEL">CodePen</a>.</p></div><script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## Transitions DOM Events

CSS transitions fire two DOM events that can be used by JavaScript EventListeners:

### transitionstart

The [`transitionstart`](https://msdn.microsoft.com/library/dn632683(v=vs.85).aspx) event occurs at the beginning of the transition.

-   Bubbles: Yes
-   Cancelable: Yes
-   Context Info: [`propertyName`](https://msdn.microsoft.com/library/hh772142(v=vs.85).aspx), [`elapsedTime`](https://msdn.microsoft.com/library/hh772074(v=vs.85).aspx) ([`transitionEvent`](https://msdn.microsoft.com/library/hh772135(v=vs.85).aspx))

### transitionend

The [`transitionend`](https://msdn.microsoft.com/library/dn632682(v=vs.85).aspx) event occurs at the completion of the transition. If the transition is removed before completion, the event will not fire.

-   Bubbles: Yes
-   Cancelable: Yes
-   Context Info: [`propertyName`](https://msdn.microsoft.com/library/hh772142(v=vs.85).aspx), [`elapsedTime`](https://msdn.microsoft.com/library/hh772074(v=vs.85).aspx) ([`transitionEvent`](https://msdn.microsoft.com/library/hh772135(v=vs.85).aspx))


<div class="codepen-wrap"><p data-height="325" data-theme-id="23761" data-slug-hash="LNNNwN" data-default-tab="result" data-user="MicrosoftEdgeDocumentation" data-embed-version="2" data-editable="true" class="codepen">See this example by <a href="https://codepen.io/MicrosoftEdgeDocumentation">Microsoft Edge Docs</a> on <a href="https://codepen.io/MicrosoftEdgeDocumentation/pen/wGraWJ">CodePen</a>.</p></div><script async src="//assets.codepen.io/assets/embed/ei.js"></script>

This example applies transitions to a `<div>` element, and fires the `transitionstart` and `transitionend` events to change the text in the box.



## API Reference

[Transitions](https://msdn.microsoft.com/library/hh772060(v=vs.85).aspx)


## Specification

[CSS Transitions](http://go.microsoft.com/fwlink/p/?LinkID=223140)
