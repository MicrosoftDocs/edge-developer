---
description: Get Started with CSS
title: "DevTools for beginners: Get started with CSS"
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/01/2020 
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web developement, f12 tools, devtools
---
<!-- Copyright Katherine Jackson 

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->

# DevTools for beginners: Get started with CSS  

In this tutorial, you learn how to use CSS to style a web page.  You also learn how to use Microsoft Edge DevTools to experiment with CSS changes.  

The following article is the second tutorial in a series of tutorials that teaches you the basics of web development and Microsoft Edge DevTools.  You gain hands-on experience by actually building your own website.  You do not have to complete the first tutorial before following the second.  [Set up your code](#set-up-your-code) shows you how to get set up.  

> [!NOTE]
> This tutorial is designed for absolute beginners and focuses on both the **fundamentals of web development** and the basics of using DevTools to experiment with CSS.  If you want a tutorial that only focuses on DevTools, see [Get Started with Viewing and Changing CSS][DevtoolsCssIndex].  

At the beginning of the tutorial, your site should look like the following figure.  

:::image type="complex" source="../media/beginners-css-intro1.msft.png" alt-text="What your site currently looks like" lightbox="../media/beginners-css-intro1.msft.png":::
   What your site currently looks like  
:::image-end:::  

After you complete the tutorial, you site should look like the following figure.  

:::image type="complex" source="../media/beginners-css-intro2.msft.png" alt-text="What your site should look like at the end of the tutorial" lightbox="../media/beginners-css-intro2.msft.png":::
   What your site should look like at the end of the tutorial  
:::image-end:::  

## Goals  

Follow this tutorial to better understand the following concepts and tasks.  

*   How to use CSS to style a web page.  
*   How to use Microsoft Edge DevTools to experiment with CSS.  
*   The difference between CSS and CSS frameworks.  

You are building a real website.  

## Prerequisites  

Before attempting this tutorial, complete the following prerequisites.  

*   Complete [Get Started with HTML and the DOM][DevtoolsBeginnersHtml] or make sure that you have an understanding of HTML and the DOM similar to what is taught in that tutorial.  
*   Download the [Microsoft Edge][MicrosoftEdgeInsider] web browser.  The following tutorial uses a set of web development tools, called the Microsoft Edge DevTools, that are built into Microsoft Edge.  

## Set up your code  

To create your site, you must first complete the following actions to set up your code.  

> [!NOTE]
> If you have already completed the first tutorial in the series, skip to the next section.  Continue using your code from the last tutorial, [Get Started with HTML and the DOM][DevtoolsBeginnersHtml].  

1.  Open the [source code][GlitchCookedAmphibianIndex].  The in-focus tab of your browser is referenced as the **editing tab**.  
    
    :::image type="complex" source="../media/beginners-css-setup1.msft.png" alt-text="The editing tab" lightbox="../media/beginners-css-setup1.msft.png":::
       The **editing** tab  
    :::image-end:::  
    
1.  Choose **cooked-amphibian**.  A menu pops up.  
    
    :::image type="complex" source="../media/beginners-css-setup2.msft.png" alt-text="The Project Options menu" lightbox="../media/beginners-css-setup2.msft.png":::
       The Project Options menu  
    :::image-end:::  

1.  Choose **Remix Project**.  Glitch creates a copy of the project that you are able to edit.  
    
    > [!NOTE]
    > Glitch generates a random name for the new project.  
    
1.  Choose **Show** and select **In a New Window**.  Another tab opens with a live view of your site.  The in-focus tab of your browser is referenced as the **live tab**.  
    
    :::image type="complex" source="../media/beginners-css-setup3.msft.png" alt-text="The live tab" lightbox="../media/beginners-css-setup3.msft.png":::
       The **live tab**  
    :::image-end:::  

## Understand CSS  

**CSS** is a computer language that determines the layout and styling of web pages.  The following figure is a paragraph with a border.  

:::image type="complex" source="../media/beginners-css-red_paragraph.msft.png" alt-text="The text has been styled with CSS" lightbox="../media/beginners-css-red_paragraph.msft.png":::
   The text has been styled with CSS  
:::image-end:::  

The following code snippet is the HTML and CSS code used to create the paragraph in the previous figure.  

```html
<p style="border: 1px dashed red; padding: 5px;">
    This has been styled with CSS.
</p>
```  

`style="border: 1px dashed red; padding: 5px;"` probably looks new to you.  The rest should look familiar.  If not, complete [Get Started with HTML and the DOM][DevtoolsBeginnersHtml] before attempting the following sections.  

## Add inline styles  

Complete the following actions to use **inline styles** to apply styles to a single element.  

1.  Go back to the editing tab and open `index.html`.  
    
    :::image type="complex" source="../media/beginners-css-inline1.msft.png" alt-text="index.html" lightbox="../media/beginners-css-inline1.msft.png":::
       Open `index.html` in the editing tab  
    :::image-end:::  
    
1.  Add `style="background-color: aliceblue;"` to your `<nav>`.  In the code block below, the fourth line of code is the one you need to change.  The rest is just there, so you are able to ensure that you are putting the new code in the right place.  
    
    ```html
    <header>
        <p>Welcome to my site!</p>
    </header>
    <nav style="background-color: aliceblue;">
        <ul>
            <li><a href="/">Home</a></li>
            ...
        ...
    ...
    ```  
    
1.  Go to the **live tab** to see the changes!  The background of the `<nav>` section is now blue.  
    
    :::image type="complex" source="../media/beginners-css-inline2.msft.png" alt-text="The background color behind the Home and Contact links is now blue" lightbox="../media/beginners-css-inline2.msft.png":::
       The background color behind the **Home** and **Contact** links is now blue  
    :::image-end:::  
    
## Re-use styles on a single page with internal stylesheets  

In a previous code snippet, an inline style applied a style to a single `<p>` tag.  

```html
<p style="border: 1px dashed red; padding: 5px;">
    This has been styled with CSS.
</p>
```  

What if you wanted all of the `<p>` elements on your webpage to be styled the same way?  You would have to copy and paste the code into every single `<p>` tag on your site.  That is a lot of time and effort.  And, if you needed to make an edit, you would have to change every tag again.  Complete the following actions to use an **Internal stylesheet** to write your CSS once so that it applies to multiple elements.  

1.  In the live tab, choose **Contact** to go to the contact page.  Notice the font of **Home** and **Contact**.  
    
    :::image type="complex" source="../media/beginners-css-internal1.msft.png" alt-text="The Contact page" lightbox="../media/beginners-css-internal1.msft.png":::
       The Contact page  
    :::image-end:::  
    
1.  In the **editor tab**, go to `contact.html`.  
1.  Add the following code to `contact.html`.  Remember, the lines starting with `<style>` and ending with `</style>` are what you need to add.  The other code is just there so you know where to put the new code.  
    
    ```html
    ...
        <head>
            ...
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style>
                li a {
                  font-family: 'Courier New', Courier, Serif;
                }
            </style>
            ...
        </head>
        ...
    ...
    ```  
    
1.  Go back to the **live tab**.  
1.  Choose **Contact** to go back to the contact page.  The font of **Home** and **Contact** has changed.  
    
    :::image type="complex" source="../media/beginners-css-internal2.msft.png" alt-text="The font of the Home and Contact links has changed" lightbox="../media/beginners-css-internal2.msft.png":::
       The font of the **Home** and **Contact** links has changed  
    :::image-end:::  
    
### Understand internal stylesheets  

Internal stylesheets apply styles using **selectors**.  Selectors are patterns that may apply to one or more HTML elements.  The previous code snippet added the following style.  

```html
<style>
    li a {
      font-family: 'Courier New', Courier, Serif;
    }
</style>
```  

`li a` is a selector that translates to "any `<li>` element that contains an `<a>` element".  The browser changes the font of the **Home** and **Contact** links because each of the tag groups match the pattern.  

```html
<li><a href="/">Home</a></li>
<li><a href="/contact.html">Contact</a></li>
```  

`font-family: 'Courier New', Courier, serif` is a **declaration**.  A declaration is made of following two parts.  

:::row:::
   :::column span="1":::
      **property**  
   :::column-end:::
   :::column span="1":::
      `font-family`  
   :::column-end:::
   :::column span="2":::
      The property describes a general way that you are able to change the style of the element.  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      **value**  
   :::column-end:::
   :::column span="1":::
      `'Courier New', Courier, serif`  
   :::column-end:::
   :::column span="2":::
      The value describes exactly how the style of the element should change.  
   :::column-end:::
:::row-end:::  

For example, `font-family: 'Courier New', Courier, serif` gives the browser the following instruction:  "Set the font of elements that match the pattern `li a` to `'Courier New'`.  If that font is not available, use `Courier`.  If that is not available, use `serif`."  

### Add multiple selectors to a ruleset  

A block of CSS code like what you see below is called a **ruleset**.  

```css
li a {
  font-family: 'Courier New', Courier, monospace;
}
```  

Complete the following actions to use commas to add multiple selectors to a ruleset.  

1.  In the **editor tab**, open `contact.html`.  
1.  After `li a` type `, h1`.  
    
    ```html
    <style>
        li a, h1 {
          font-family: 'Courier New', Courier, Serif;
        }
    </style>
    ```  
    
    The previous code snippet tells the browser to style `<h1>` elements the same way that it styles elements that match the pattern `li a`.  
    
1.  Go to the **live tab**.  
1.  Choose the **Contact** link to go back to the contact page.  Now, **Contact Me!** has the same font as the navigation links.  
    
    :::image type="complex" source="../media/beginners-css-multiple1.msft.png" alt-text="The text Contact Me!  now has the same font as the Home and Contact links" lightbox="../media/beginners-css-multiple1.msft.png":::
       The text **Contact Me!** now has the same font as the **Home** and **Contact** links  
    :::image-end:::  
    
## Experiment with DevTools  

As you continue your journey to become an expert in web development, you may find that CSS is tricky.  You may write some CSS and expect it to display one way, but the browser does something completely different.  Microsoft Edge DevTools makes it easy to experiment with changes and immediately see how the changes affect the page.  

### Add a declaration to an existing rulest in DevTools  

Complete the following actions to iterate on the style of an existing element, add a declaration to an existing ruleset.  

1.  Hover on the **Home** link, open the contextual menu \(right-click\), and select **Inspect**.  
    
    :::image type="complex" source="../media/beginners-css-add1.msft.png" alt-text="Inspect the Home link" lightbox="../media/beginners-css-add1.msft.png":::
       Inspect the Home link  
    :::image-end:::  
    
    DevTools opens up alongside your page.  The code that represents the Home link, `<a href="/">Home</a>` is highlighted blue in the DOM Tree.  The code snippet and preview should be familiar from [Get Started with HTML and the DOM][DevtoolsBeginnersHtml].  
    
    :::row:::
       :::column span="":::
          In the following figure, the `font-family: 'Courier New', Courier, serif` declaration that you previously added to `contact.html` is seen in the **Styles** tab below the DOM Tree.  
          
          :::image type="complex" source="../media/beginners-css-add2.msft.png" alt-text="The Styles tab is below the DOM Tree" lightbox="../media/beginners-css-add2.msft.png":::
             The **Styles** tab is below the DOM Tree  
          :::image-end:::  
       :::column-end:::
       :::column span="":::
          If your DevTools window is wide, the Styles tab is to the right of the DOM Tree.  
          
          :::image type="complex" source="../media/beginners-css-add3.msft.png" alt-text="The Styles tab is to the right of the DOM Tree" lightbox="../media/beginners-css-add3.msft.png":::
             The **Styles** tab is to the right of the DOM Tree  
          :::image-end:::  
       :::column-end:::
    :::row-end:::  
    
1.  Choose the empty line below `font-family: 'Courier New', Courier, Serif` to add a new declaration.  
    
    :::image type="complex" source="../media/beginners-css-add4.msft.png" alt-text="Add a new declaration" lightbox="../media/beginners-css-add4.msft.png":::
       Add a new declaration  
    :::image-end:::  
    
1.  Type `color` and select `Enter`.  The autocomplete UI suggests options as you type.  
    
    :::image type="complex" source="../media/beginners-css-add5.msft.png" alt-text="Type color" lightbox="../media/beginners-css-add5.msft.png":::
       Type `color`  
    :::image-end:::  
    
1.  Type `magenta` and select `Enter`.  All of the text on the contact page is now magenta.  
    
    :::image type="complex" source="../media/beginners-css-add6.msft.png" alt-text="Type magenta" lightbox="../media/beginners-css-add6.msft.png":::
       Type `magenta`  
    :::image-end:::  
    
### Edit a declaration in DevTools  

Complete the following actions to edit existing declarations in DevTools.  

1.  Choose the magenta square next to `magenta`.  A color picker pops up.  
    
    :::image type="complex" source="../media/beginners-css-edit1.msft.png" alt-text="The Color Picker" lightbox="../media/beginners-css-edit1.msft.png":::
       The Color Picker  
    :::image-end:::  
    
1.  Use the color picker to change the font text to a color that you like.  
    
    :::image type="complex" source="../media/beginners-css-edit2.msft.png" alt-text="Change the font color to purple with the Color Picker" lightbox="../media/beginners-css-edit2.msft.png":::
       Change the font color to purple with the Color Picker  
    :::image-end:::  
    
### Add a new ruleset in DevTools  

Complete the following actions to add new rulesets in DevTools.  

1.  Choose **New Style Rule** \(![New Style Rule][ImageNewStyleRuleIcon]\) which is next to **.cls**.  An empty ruleset appears with `a` as the selector.  
    
    :::image type="complex" source="../media/beginners-css-rule1.msft.png" alt-text="Add a new rule" lightbox="../media/beginners-css-rule1.msft.png":::
       Add a new rule  
    :::image-end:::  
    
1.  Replace `a` with `a:hover`.  
    
    :::image type="complex" source="../media/beginners-css-rule2.msft.png" alt-text="Replace a with a:hover" lightbox="../media/beginners-css-rule2.msft.png":::
       Replace `a` with `a:hover`  
    :::image-end:::  
    
    `:hover` is a **pseudo-class**.  Use pseudo-classes for style elements that may enter special states.  For example, the `a:hover` style only takes effect when you are hovering over an `<a>` element.  
    
1.  Choose between the brackets to add a new declaration.  
1.  Type `background-color` for the declaration name and select `Enter`.  
    
    :::image type="complex" source="../media/beginners-css-rule3.msft.png" alt-text="Type background-color" lightbox="../media/beginners-css-rule3.msft.png":::
       Type `background-color`  
    :::image-end:::  
    
1.  Type `green` for the declaration value and select `Enter`.  
    
    :::image type="complex" source="../media/beginners-css-rule4.msft.png" alt-text="Type green" lightbox="../media/beginners-css-rule4.msft.png":::
       Type `green`  
    :::image-end:::  
    
1.  Hover your mouse over the **Home** link.  The background of the link turns green.  
    
    :::image type="complex" source="../media/beginners-css-rule5.msft.png" alt-text="Hover over the Home link to reveal its green background" lightbox="../media/beginners-css-rule5.msft.png":::
       Hover over the Home link to reveal its green background  
    :::image-end:::  
    
## Re-use styles across pages with external stylesheets  

In a previous step, you added the following code snippet as an internal stylesheet to `contact.html`.  

```html
...
    ...
        ...
        <style>
            li a, h1 {
              font-family: 'Courier New', Courier, Serif;
            }
        </style>
        ...
    ...
...
```  

What if you wanted to style `index.html` the same way?  What if you had a large number of pages to which you wanted to apply your styles?  You would have to copy and paste the internal stylesheet into every single web page on your site.  Complete the following actions to add an **External stylesheet** to allow you to write your CSS once and apply it to multiple pages.  

1.  First, reload the live tab to remove the changes that you made in DevTools.  
    
    :::image type="complex" source="../media/beginners-css-external1.msft.png" alt-text=" After you refresh the page, the changes that were made in DevTools are gone" lightbox="../media/beginners-css-external1.msft.png":::
        After you refresh the page, the changes that were made in DevTools are gone  
    :::image-end:::  
    
1.  Go back to the **editor tab** and open `contact.html`.  
    
    :::image type="complex" source="../media/beginners-css-external2.msft.png" alt-text="contact.html" lightbox="../media/beginners-css-external2.msft.png":::
       contact.html  
    :::image-end:::  
    
1.  Delete everything between `<style>` and `</style>`, including `<style>` and `</style>`.  
    
    :::image type="complex" source="../media/beginners-css-external3.msft.png" alt-text="The style tag has been removed" lightbox="../media/beginners-css-external3.msft.png":::
       The style tag has been removed  
    :::image-end:::  
    
1.  Go to `index.html` and remove `style="background-color: aliceblue;"` from the `<nav>` tag.  You have now removed all of the CSS that you previously added to your site.  
    
    :::image type="complex" source="../media/beginners-css-external4.msft.png" alt-text="The inline style has been removed from the nav element" lightbox="../media/beginners-css-external4.msft.png":::
       The inline style has been removed from the nav element  
    :::image-end:::  
    
1.  Choose **New File**.  
    
    :::image type="complex" source="../media/beginners-css-external5.msft.png" alt-text="The new file dialog" lightbox="../media/beginners-css-external5.msft.png":::
       The new file dialog  
    :::image-end:::  
    
1.  Replace `cool-file.js` with `style.css` and choose **Add File**.  
    
    :::image type="complex" source="../media/beginners-css-external6.msft.png" alt-text="Type style.css" lightbox="../media/beginners-css-external6.msft.png":::
       Type `style.css`  
    :::image-end:::  
    
1.  Add the following code snippet to your `style.css` file.  
    
    ```css
    li a, h1 {
      font-family: 'Courier New', Courier, Serif;
    }
    a:hover {
      background-color: green;
    }
    nav {
      background-color: aliceblue;
    }
    ```  
    
    :::image type="complex" source="../media/beginners-css-external7.msft.png" alt-text="Add code to style.css" lightbox="../media/beginners-css-external7.msft.png":::
       Add code to `style.css`  
    :::image-end:::  
    
    Ensure that you have created an external stylesheet. Your HTML is not aware that it exists.  
    
1.  Open `index.html`.  
1.  Add `<link rel="stylesheet" href="style.css">` to your HTML.  
    
    ```html
    <head>
        ...
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="style.css">
    </head>
    ```  
    
    :::image type="complex" source="../media/beginners-css-external8.msft.png" alt-text="Link to style.css" lightbox="../media/beginners-css-external8.msft.png":::
       Link to `style.css`  
    :::image-end:::  
    
1.  Open the `contact.html` file and add the link there.  
    
    :::image type="complex" source="../media/beginners-css-external9.msft.png" alt-text="Link to style.css in contact.html" lightbox="../media/beginners-css-external9.msft.png":::
       Link to `style.css` in `contact.html`  
    :::image-end:::  
    
1.  Go to the **live tab**.  The home page now has the same font from the last section and a blue navigation section.  
    
    :::image type="complex" source="../media/beginners-css-external10.msft.png" alt-text="The home page" lightbox="../media/beginners-css-external10.msft.png":::
       The home page  
    :::image-end:::  
    
1.  Choose the **Contact** link to go to the contact page.  The contact page has the same formatting as the home page.  
    
    :::image type="complex" source="../media/beginners-css-external11.msft.png" alt-text="The contact page" lightbox="../media/beginners-css-external11.msft.png":::
       The contact page  
    :::image-end:::  
    
## Use a CSS framework  

**CSS frameworks** are collections of styles built by other developers that make it easier to create attractive web sites.  Instead of defining styles yourself, a framework provides you a collection of styles that you are able to use on your page elements.  

1.  Copy the following code:  
    
    ```html
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css">
    ```  
    
1.  Go to the editing tab and paste the code into `contact.html`.  
    
    :::image type="complex" source="../media/beginners-css-framework1.msft.png" alt-text="Link to the framework in contact.html" lightbox="../media/beginners-css-framework1.msft.png":::
       Link to the framework in `contact.html`  
    :::image-end:::  
    
1.  Open the `index.html` file and add the code there.  
    
    :::image type="complex" source="../media/beginners-css-framework2.msft.png" alt-text="Link to the framework in index.html" lightbox="../media/beginners-css-framework2.msft.png":::
       Link to the framework in `index.html`  
    :::image-end:::  
    
1.  Go back to the live tab to view your changes.  While the background color of the `<nav>` element and the font of the `<li>` and `<a>` elements are the same, the font of the other elements has changed.  
    
    :::image type="complex" source="../media/beginners-css-framework3.msft.png" alt-text="Some of the font on the home page changed because of the framework" lightbox="../media/beginners-css-framework3.msft.png":::
       Some of the font on the home page changed because of the framework  
    :::image-end:::  
    
### Use a class  

In the last section, you added Bootstrap to your web pages, which changed the fonts of some of the elements on your site.  CSS frameworks help you make major changes to your page with very little code.  Complete the following actions to change your header.  

1.  Copy the following code snippet.  
    
    ```html
    class="jumbotron jumbotron-fluid"  
    ```  
    
1.  Add the previous code snippet to your `<header>` tag in `index.html`.  
    
    :::image type="complex" source="../media/beginners-css-jumbotron1.msft.png" alt-text="Add classes in index.html" lightbox="../media/beginners-css-jumbotron1.msft.png":::
       Add classes in `index.html`  
    :::image-end:::  
    
1.  Add the code to your `<header>` tag in `contact.html`.  
    
    :::image type="complex" source="../media/beginners-css-jumbotron2.msft.png" alt-text="Add classes in contact.html" lightbox="../media/beginners-css-jumbotron2.msft.png":::
       Add classes in `contact.html`  
    :::image-end:::  
    
1.  View your changes in the live tab.  There is a big, grey box around your header.  
    
    :::image type="complex" source="../media/beginners-css-jumbotron3.msft.png" alt-text="The header now has a big, grey box around it" lightbox="../media/beginners-css-jumbotron3.msft.png":::
       The header now has a big, grey box around it  
    :::image-end:::  
    
### Understand classes  

Classes let you assign collections of styles to arbitrary elements.  Use the following code snippet to apply several styles to the `<header>` element after you set the `class` attribute to `jumbotron`.  

```css
.jumbotron {
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: #e9ecef;
  border-radius: .3rem;
}
```  

One advantage of a class is that it lets you apply styles to whatever elements you want.  For example, suppose you want to set the background color of some `<p>` elements to purple, but not all `<p>` elements.  Use the following code snippet to define the style in a class.  

```css
.custom-background {
  background-color: purple;
}
```  

Next, apply the class to only the `<p>` elements that you want to style.  

```html
<p>The text is not purple.</p>
<p class="custom-background">The text is purple.</p>
<p>The text is not purple.</p>
<p class="custom-background">The text is purple.</p>
```  

### Align elements  

Complete the following actions to bootstrap and provide classes for aligning elements.  

1.  Go back to the editor tab and open `index.html`.  
1.  Add `class="container-fluid"` to your `<body>` tag.  
    
    :::image type="complex" source="../media/beginners-css-align1.msft.png" alt-text="Add the container-fluid class" lightbox="../media/beginners-css-align1.msft.png":::
       Add the `container-fluid` class  
    :::image-end:::  
    
1.  Wrap your `<nav>` and `<main>` elements in `<div class="row">`.  Make sure to put `</div>` after `</main>` in order to properly close the new tag.  
    
    :::image type="complex" source="../media/beginners-css-align2.msft.png" alt-text="Add a row" lightbox="../media/beginners-css-align2.msft.png":::
       Add a row  
    :::image-end:::  
    
1.  Add `class="col-3"` to your `<nav>` tag and `class="col-9"` to your `<main>` tag.  
    
    :::image type="complex" source="../media/beginners-css-align3.msft.png" alt-text="Add the col-3 and col-9 classes" lightbox="../media/beginners-css-align3.msft.png":::
       Add the `col-3` and `col-9` classes  
    :::image-end:::  
    
1.  View your changes in the live tab.  
    
    :::image type="complex" source="../media/beginners-css-align4.msft.png" alt-text="The nav content is now to the left of the main content" lightbox="../media/beginners-css-align4.msft.png":::
       The nav content is now to the left of the main content  
    :::image-end:::  
    
## Next steps  

Congratulations, you are done.  

*   The best way to get better at web development is to build more sites.  Do not worry about breaking stuff.  Just have fun and learn as much as possible along the way.  
*   To learn more about styling web pages, see [Introduction to CSS][MDNCssFirstSteps].  
*   To learn more about how to use DevTools to experiment with the CSS of a page, see [Get Started with Viewing and Changing CSS][DevtoolsCssIndex].  

<!--- image links --->  

[ImageNewStyleRuleIcon]: ../media/new-style-rule-icon.msft.png  

<!--- links  --->  

[DevtoolsBeginnersHtml]: ./html.md "DevTools for Beginners: Get Started with HTML and the DOM | Microsoft Docs"  
[DevtoolsCssIndex]: ../css/index.md "Get Started With Viewing And Changing CSS | Microsoft Docs"  

[MicrosoftEdgeInsider]: https://www.microsoftedgeinsider.com "Microsoft Edge Insider"  

[GlitchCookedAmphibianIndex]: https://glitch.com/edit/#!/cooked-amphibian?path=index.html "index.html - cooked-amphibian | Glitch"  

[MDNCssFirstSteps]: https://developer.mozilla.org/docs/Learn/CSS/Introduction_to_CSS "CSS first steps | MDN"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/beginners/css) and is authored by [Katherine Jackson][KatherineJackson] \(Technical Writer Intern, Chrome DevTools\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
[KatherineJackson]: https://developers.google.com/web/resources/contributors/katjackson  
