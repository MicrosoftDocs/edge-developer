---
description: Heading size demo
title: Heading size demo
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/15/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# This is a test heading to demonstrate heading level h1  

This is a test sentence to demonstrate body text.

## This is a test heading to demonstrate heading level h2

This is a test sentence to demonstrate body text.
  
### This is a test heading to demonstrate heading level h3

This is a test sentence to demonstrate body text.

In real-world usage, such as in [Console object API reference](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/console/api), the difference between h2 and h3 is obscured.

#### This is a test heading to demonstrate heading level h4

This is a test sentence to demonstrate body text.

##### This is a test heading to demonstrate heading level h5

This is a test sentence to demonstrate body text.

##### This is a test heading to demonstrate heading level h6

This is a test sentence to demonstrate body text.

## This is a test heading to demonstrate h2

This is a test sentence to demonstrate body text.
  
### This is a test heading to demonstrate heading level h3

This is a test sentence to demonstrate body text.  The problem is more evident where there's not the same text in the h2 and h3.

## Inspect animations

This is a test sentence to demonstrate body text. h2

### View animation details

This is a test sentence to demonstrate body text.  h3

## Step 6: Check variable values

This is a test sentence to demonstrate body text.

### Method 1: The Scope panel

This is a test sentence to demonstrate body text.  

### Method 2: Watch Expressions

This is a test sentence to demonstrate body text.

### Method 3: The Console

This is a test sentence to demonstrate body text.

## Step 7: Apply a fix

This is a test sentence to demonstrate body text.

## assert

This is a test sentence to demonstrate body text.

### JavaScript syntax

This is a test sentence to demonstrate body text.

### JavaScript example

This is a test sentence to demonstrate body text.

## assert

This is a test sentence to demonstrate body text.

### JavaScript syntax

This is a test sentence to demonstrate body text.

### JavaScript example

This is a test sentence to demonstrate body text.

## assert

This is a test sentence to demonstrate body text.

### Syntax

This is a test sentence to demonstrate body text.

### Example

This is a test sentence to demonstrate body text.

## assert

This is a test sentence to demonstrate body text.

### Syntax

This is a test sentence to demonstrate body text.

### Example

This is a test sentence to demonstrate body text.

## The issue\: Why h3 needs to be made smaller

h3 is so big, it looks the same as h2, making the structure within each article confusing and misleading; hard to understand and likely to misunderstand.  The formatting (the relative heading size of h2 vs. h3) misrepresents the actual page structure.

h3 is used almost as often as h2; the main subheading levels used are h2 & h3, so making that contrast obvious is the most important of all the heading levels.  

h3 vs. h4 is less common.

A usability/readability problem is a schema bug: the h3 in the schema is rendered apparently the same size as h2, obscuring the relation between h2 & h3 headings/sections.

If the schema would change to > 70% difference in size contrast between specifically h2 vs. h3, that would improve readability & structural navigation.

## The current CSS rules

```css
.content h2 {
    font-size: calc(1.375rem + .83333vw);
    margin-top: 32px;
}
.content h3 {
    font-size: calc(1.33333rem + .55556vw);
    margin-top: 30px;
    margin-bottom: 18px;
}
.content h4 {
    font-size: calc(1.29167rem + .27778vw);
    margin-top: 36px;
    margin-bottom: 6px;
}
.content h5 {
    font-size: 1.25rem;
}
```

## Analysis

h5 is almost never used, so the design scaling is for h2, h3, & h4.  

The most common difference / contrast is comparing the 658 h3's vs the 891 h2's.  

658/891 = 74% as many h3s as h2s.  

There are almost as many h3's and h2's, both are used heavily, therefore there should be a significant obvious difference in size specifically between h2 vs h3.  

The h3 vs. h4 contrast is less frequent, so has lower priority for difference in size.

## Count of heading levels in the repo

In edge-developer repo, there are the following number of h1-h6 headings: 
*   h2: 890
*   h3: 657
*   h4: 235
*   h5: 7 hits in 3 files (Two files have 1 h5.  One file has five h5's.)
*   h6 hits: 0

## Recommendation

Make h3 smaller (top priority).  

Possibly make h4 smaller too.  

Possibly make h5 & h6 smaller too, keeping in mind that h5 is almost never used, and h6 is never used.

## Math for section \"Count of heading levels in the repo\"

h2 hits: 1793 in 169 (includes h3's & h4's & h5's; 1793-901 = 892)

h3 hits: 901 in 91 (includes h4's & h5's; 902-243 = 659)

h4 hits: 243 in 35 (includes h5's; 244-7 = 237)

h5 hits: 7 in 4

h6 hits: 0

## Preview rendering of heading levels in Visual Studio Code

The below capture (#1) demonstrates that the Preview in Visual Studio Code is effective in showing a large, visually obvious difference specifically between h2 vs. h3 size.

:::image type="complex" source="../media/vscode-preview-rendering-of-heading-levels.png" alt-text="Preview rendering of heading levels in Visual Studio Code (generic demo headings)" lightbox="../media/vscode-preview-rendering-of-heading-levels.png":::
   Preview rendering of heading levels in Visual Studio Code (generic demo headings) 
:::image-end:::  

The below capture (#2) demonstrates that the Preview in Visual Studio Code is effective in showing a large, visually obvious difference specifically between h2 vs. h3 size.

:::image type="complex" source="../media/vscode-preview-rendering-of-heading-levels-actual-examples.png" alt-text="Preview rendering of heading levels in Visual Studio Code (actual heading examples)" lightbox="../media/vscode-preview-rendering-of-heading-levels-actual-examples.png":::
   Preview rendering of heading levels in Visual Studio Code (actual heading examples)  
:::image-end:::  

The below capture (#3) demonstrates that the Preview in Visual Studio Code is effective in showing a large, visually obvious difference specifically between h2 vs. h3 size.

:::image type="complex" source="../media/vscode-preview-rendering-of-heading-levels-method-ref.png" alt-text="Preview rendering of heading levels in Visual Studio Code (method Reference headings)" lightbox="../media/vscode-preview-rendering-of-heading-levels-method-ref.png":::
   Preview rendering of heading levels in Visual Studio Code (method Reference)  
:::image-end:::  

Compare the above to [Console object API reference](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/console/api), where the difference between h2 and h3 is unclear.
