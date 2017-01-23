---
description: See how CSS Animations can be used to create visually appealing rich applications with smooth, fluid, animated experiences.
title: Animations
author: libbymc
---

# Animations

CSS Animations enable you to create visually appealing rich applications with smooth, fluid, animated experiences. The animation property is a shorthand CSS property that includes [`animation-name`](https://msdn.microsoft.com/library/hh772236.aspx), [`animation-duration`](https://msdn.microsoft.com/library/hh772219.aspx), [`animation-timing-function`](https://msdn.microsoft.com/library/hh772240.aspx), [`animation-delay`](https://msdn.microsoft.com/library/hh772215.aspx), [`animation-iteration-count`](https://msdn.microsoft.com/library/hh772233.aspx), [`animation-direction`](https://msdn.microsoft.com/library/hh772217.aspx), [`animation-fill-mode`](https://msdn.microsoft.com/library/hh772232.aspx) and [`animation-play-state`](https://msdn.microsoft.com/library/hh772238.aspx). CSS Animations are defined by the World Wide Web Consortium (W3C) in the [CSS Animations](http://go.microsoft.com/fwlink/p/?LinkID=223144) specification.

Animations are similar to [`transitions`](./transitions.md) in that they animate elements as they change position, size, color, and opacity; and as they rotate, scale, translate, and so on. And just as you can with transitions, you can specify timing functions to control the rate of progression of an animation.

However, with CSS Animations, you can also use [`keyframes`](https://msdn.microsoft.com/library/hh772747(v=vs.85).aspx), which specify the values for the animating properties at various points during the animation. This way, you can define the behavior of an animation not only at the beginning and end of the animation, but in between as well. Animations can also have iterations and reverse-direction capability, and can be given the ability to pause and resume. As you might expect, CSS3 Animations provides you with infinite possibilities for creating rich, compelling experiences. 

For a list of CSS properties that you can animate, see [Animation and transition properties](https://msdn.microsoft.com/library/dn254934(v=vs.85).aspx).


CSS Animations are also supported for use on [SVG elements](./../graphics/SVG.md) in Microsoft Edge.


## Creating an animation

You create an animation in three basic steps:

1. [Specify the animation properties](#specify-animation-properties).
2. [Create the keyframes](#create-the-keyframes).
3. [Apply the animation](#apply-the-animation) to one or more elements.

## Specify animation properties

First, specify the animation properties in a selector that applies to the element you want to animate. The animation properties are described in this section.

### The animation-name property

The [`animation-name`](https://msdn.microsoft.com/library/hh772236(v=vs.85).aspx) property specifies one or more animation identifiers (effectively, the "name" you've given to the specific animation). Identify animations using the CSS [`@keyframes`](https://msdn.microsoft.com/library/hh772747(v=vs.85).aspx) at-rule.

### The animation-duration property

The [`animation-duration`](https://msdn.microsoft.com/library/hh772219(v=vs.85).aspx) property specifies the length of time to complete one cycle of the animation. This property indicates one or more comma-separated time values, each of which indicates the length of time that a complete animation cycle takes. Each value is in the form of a floating-point number, followed by a time unit designator (ms or s). This property accepts negative values. 

### The animation-timing-function property

The [`animation-timing-function`](https://msdn.microsoft.com/library/hh772240(v=vs.85).aspx) property enables an animation to change speed over its duration by describing how the intermediate property values used during a single cycle of the animation will be calculated. This is done by specifying an animation timing function, based on a cubic Bézier curve, which takes four parameters. You can specify a timing function for the entire animation, or to individual keyframes.

You can either specify the curve explicitly by using the **cubic-bezier** function and entering the four values manually, or you can choose from several function keywords, each of which corresponds to a commonly used timing function.

This property specifies one or more comma-separated timing functions that define the intermediate property values used during a single cycle of the animation. The animation is calculated on a set of corresponding object properties identified in the CSS [`@keyframes`](https://msdn.microsoft.com/library/hh772747(v=vs.85).aspx) at-rule specified by the `animation-name` property. The possible values can be any of the following. See the [**animation-timing-function**](https://msdn.microsoft.com/library/hh772240(v=vs.85).aspx) reference page for descriptions of each function.

#### cubic-bezier(*x*₁,*y*₁,*x*₂,*y*₂)
The four parameters of this function must be floating point values between 0 and 1, inclusive. The values correspond to the *x*- and *y*-coordinates of the P₁ and P₂ points of the cubic Bézier curve. For properties other than [**opacity**](https://msdn.microsoft.com/library/jj127325(v=vs.85).aspx) and [**color**](https://msdn.microsoft.com/library/ms530749(v=vs.85).aspx), the `cubic-bezier` curve function accepts *y*-coordinates outside the standard range of between 0 and 1. This enables you to create "elastic" or "bounce" transition effects.

#### ease
This is the initial value. This timing function gradually increases in speed at the start, animates at full speed, and then gradually decreases in speed at the end.

#### linear
This timing function has a consistent speed from start to end.
### ease-in
This timing function gradually increases in speed at the start.

#### ease-out
This timing function gradually decreases in speed at the end.

#### ease-in-out
This timing function gradually increases in speed at the start and then gradually decreases in speed at the end.

#### steps
This timing function defines a stepped timing function, and takes two parameters. The first parameter specifies the number of intervals; the optional second parameter specifies the point in the interval where the property value changes. The second parameter is constrained to the values **start** or **end**, which is the default.

### The animation-iteration-count property

The [`animation-iteration-count`](https://msdn.microsoft.com/library/hh772233(v=vs.85).aspx) property defines the number of times an animation cycle is played. Multiple values are separated by commas. 

#### <number> 
The number of times the animation cycle is played. You can specify a non-integer number and the animation will end at some point during a cycle. The initial value is "1".

#### infinite
The animation repeats forever. If a negative value or a value of "0" is specified, no animation is applied.

You can use the `animation-iteration-count` property with the [`animation-direction`](https://msdn.microsoft.com/library/hh772217(v=vs.85).aspx) property set to `alternate`, which causes the animation to play in reverse on alternate cycles. 

### The animation-direction property

The [`animation-direction`](https://msdn.microsoft.com/library/hh772217(v=vs.85).aspx) property specifies the direction of play for an animation cycle -- whether the animation should play in reverse on alternate cycles. This property can be set to one or more of the following comma-separated values:

#### normal
This is the initial value. It indicates that the animation will not play in reverse on alternate cycles.

#### reverse
This value indicates that the animation cycles are played in the reverse direction of the direction in which they were specified.

#### alternate
This value indicates that the animation cycles alternate between playing in the forward direction (odd iterations) and the reverse direction (even iterations).

#### alternate-reverse
This value indicates that the animation cycles alternate between playing in the reverse direction (odd iterations) and the forward direction (even iterations).
 

### The animation-play-state property

The [`animation-play-state`](https://msdn.microsoft.com/library/hh772238(v=vs.85).aspx) property specifies whether an animation is playing or paused. This property can be useful when creating a mechanism to enable the user to pause an animation. This property can be set to one or more of the following comma-separated values:

#### paused
Pauses a running animation. The animation will continue to display the current value of the animation in a static state, as if the time of the animation is constant.

#### running
Continues running a paused animation. The animation restarts from the current value.


### The animation-delay property

The [`animation-delay`](https://msdn.microsoft.com/library/hh772215(v=vs.85).aspx) property defines when an animation will start and enables an animation to begin some period of time from when it is applied. The property specifies one or more comma-separated offset values within an animation (the amount of time from the start of an animation) before the animation is displayed for a set of corresponding object properties. Each value is in the form of a floating-point number, followed by a time unit designator (ms or s). A "0" value is the initial value, and indicates the animation will execute as soon as it is applied. A negative value indicates the animation will execute as soon as it is applied, but will appear to have begun execution at the specified offset, or during its play cycle.
 

### The animation-fill-mode property

The [`animation-fill-mode`](https://msdn.microsoft.com/library/hh772232(v=vs.85).aspx) property defines whether the effects of an animation are visible before or after it plays. By default, an animation does not affect property values in the time between its application and its execution (during any delay defined by the `animation-delay` property). Also, by default, an animation does not affect property values after the animation ends (after the time defined by the `animation-duration` property has elapsed). The `animation-fill-mode` property is used to override these default behaviors. It can be set to any of the following values:

#### none
The default behavior is unchanged.

#### forwards
The final property value (as defined in the last keyframe) is maintained after the animation completes.

#### backwards
The beginning property value (as defined in the first keyframe) is applied before the animation is displayed, during the period defined by `animation-delay`.

#### both
Both forwards and backwards fill modes are applied.


### The animation property

The [`animation`](https://msdn.microsoft.com/library/hh772212(v=vs.85).aspx) shorthand property combines six of the animation properties into a single property. The property specifies one or more sets of space-delimited animation properties for a set of corresponding object properties. The animation property values must be set in the following order:
 - [`animation-name`](https://msdn.microsoft.com/library/hh772236(v=vs.85).aspx)
 - [`animation-duration`](https://msdn.microsoft.com/library/hh772219(v=vs.85).aspx)
 - [`animation-timing-function`](https://msdn.microsoft.com/library/hh772240(v=vs.85).aspx)
 - [`animation-delay`](https://msdn.microsoft.com/library/hh772215(v=vs.85).aspx)
 - [`animation-iteration-count`](https://msdn.microsoft.com/library/hh772233(v=vs.85).aspx)
 - [`animation-direction`](https://msdn.microsoft.com/library/hh772217(v=vs.85).aspx)

If you have more than one set of the six animation property values, you must separate each set using a comma. 

Consider the following code example, which defines several animation properties on a [`<div>`](http://go.microsoft.com/fwlink/p/?LinkID=209627) element:

```CSS
div {
  animation-name: myAnimation;
  animation-duration: 3s;
  animation-timing-function: ease-out;
  animation-delay: -1s;
  animation-iteration-count: 2;
  animation-direction: normal;
}
```

With the [animation](http://go.microsoft.com/fwlink/p/?LinkID=228123) shortcut property, you could specify all six of these properties on just one line, as shown here:

```CSS
div {
  animation: myAnimation 3s ease-out -1s 2 normal;
}
```

## Create the keyframes

Next, specify *keyframes* for your animation. Keyframes enable you to finely control the intermediate values in an animation. The [`@keyframes`](https://msdn.microsoft.com/library/hh772747(v=vs.85).aspx) rule specifies a list of property animation keyframes for an object, and specifies an identifier for the animation. Its syntax is shown here:

| Rule | Description
|:------------ | :-------------
| [`@keyframes`](https://msdn.microsoft.com/library/hh772747(v=vs.85).aspx) | A list of property animation keyframes for an object in the HTML document. This rule is used to specify property values at various points during an animation, as well as an identifier for the animation. It specifies the property values during one cycle of an animation. (The animation may iterate one or more times.) This rule uses keyframe selectors to specify property values at various stages of the animation. Keyframe selectors can be declared as **from** (equivalent to 0%), **to** (equivalent to 100%), and one or more percentages.

The following example demonstrates three keyframe selectors, each with two keyframe descriptors.

```CSS
@keyframes myAnimation {
  from {     
    left: 100px;
    right: 50px;  
  } 
  40% {      
    left: 50px;
    right: 10px; 
  }
  to {         
    left: 10px;
    right: 10px;
  }
}
```

In this example, keyframes are specified for three points during the animation: the beginning (the **from** value, or 0%), 40%, and the end (the **to** value or 100%).

You can also specify the timing function that is to be used as the animation moves to the next keyframe. Simply include the [`animation-timing-function`](http://go.microsoft.com/fwlink/p/?LinkID=228117) property in the appropriate keyframe selector.

## Apply the animation

Finally, apply the animation style to an element. Typically, this is triggered by an event, such as a button click (or tap). For example, applying the pseudo-selector [`:active`](https://msdn.microsoft.com/library/cc848864(v=vs.85).aspx) (`div:active`) means that the animation will only occur for as long as the user clicks and holds (or touches and holds) the text container. Be aware that a CSS animation cannot be interrupted by changing the animating property values, as transitions can. A CSS animation can only be interrupted by using the [`animation-play-state`](https://msdn.microsoft.com/library/hh772238(v=vs.85).aspx) property or by adding or removing the animation name.

When the animation completes, the animated properties return to their original values.

## Animation DOM Events

DOM Events notify code when an interesting action has taken place. There are three animation Document Object Model (DOM) events.

### animationstart

The [`animationstart`](https://msdn.microsoft.com/library/dn632681(v=vs.85).aspx) event occurs at the beginning of the animation, accounting for any animation delay (as specified by the `animation-delay` property), if necessary. A negative delay causes the event to fire with an elapsed time equal to the absolute value of the delay.

-   Bubbles: Yes
-   Cancellable
-   Context Info: ([`animationName`](https://msdn.microsoft.com/library/hh772073(v=vs.85).aspx)) ([`AnimationEvent`](https://msdn.microsoft.com/library/hh772072(v=vs.85).aspx))

### animationend

The [`animationend`](https://msdn.microsoft.com/library/dn632679(v=vs.85).aspx) event occurs when the animation finishes.

-   Bubbles: Yes
-   Cancellable: Yes
-   Context Info: ([`animationName`](https://msdn.microsoft.com/library/hh772073(v=vs.85).aspx)), [`elapsedTime`](https://msdn.microsoft.com/library/hh772074(v=vs.85).aspx)  ([`AnimationEvent`](https://msdn.microsoft.com/library/hh772072(v=vs.85).aspx))

### animationiteration

The [`animationiteration`](https://msdn.microsoft.com/library/dn632680(v=vs.85).aspx) event occurs at the end of each iteration of an animation. This event only occurs when the [`animation-iteration-count`](http://go.microsoft.com/fwlink/p/?LinkID=228118) property is greater than one.

-   Bubbles: Yes
-   Cancellable: Yes

This example animates a `<div>` element, and fires the `animationstart`, `animationend`, and `animationiteration` events to change the text in the box. 

<div class="codepen-wrap"><p data-height="300" data-theme-id="23761" data-slug-hash="oxpmgy?editors=1100" data-default-tab="result" data-user="MicrosoftEdgeDocumentation" data-embed-version="2" data-editable="true" class="codepen">See this example by <a href="https://codepen.io/MicrosoftEdgeDocumentation">Microsoft Edge Docs</a> on <a href="https://codepen.io/MicrosoftEdgeDocumentation/pen/oxpmgy?editors=1100">CodePen</a>.</p></div><script async src="//assets.codepen.io/assets/embed/ei.js"></script>



## API Reference

[Animations](https://msdn.microsoft.com/library/hh771874(v=vs.85).aspx)

## Demos

[Beta Fish IE](https://developer.microsoft.com/en-us/microsoft-edge/testdrive/demos/betafish/)

## Specification

[CSS Animations](http://go.microsoft.com/fwlink/p/?LinkID=223144)
