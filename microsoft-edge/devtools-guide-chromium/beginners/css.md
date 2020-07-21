---
title: "DevTools for beginners: Get started with CSS"
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/16/2020
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

This is the second tutorial in a series of tutorials that teaches you the basics of web development and Microsoft Edge DevTools.  You gain hands-on experience by actually building your own website.  You don't have to complete the first tutorial before doing this one.  You can start here.  [Set up your code](#set-up-your-code) shows you how to get set up.  

> [!NOTE]
> This tutorial is designed for absolute beginners and focuses on both the **fundamentals of web development** and the basics of using DevTools to experiment with CSS.  If you want a tutorial that only focuses on DevTools, see [Get Started with Viewing and Changing CSS][DevtoolsCssIndex].  

Currently your site looks like this:  

> ##### Figure 1  
> What your site currently looks like  
> ![What your site currently looks like][ImageCssIntro1]  

After completing the tutorial, it will look like this:  

> ##### Figure 2  
> What your site will look like at the end of the tutorial  
> ![What your site will look like at the end of the tutorial][ImageCssIntro2]  

## Goals   

By the end of this tutorial, you will understand:  

*   How to use CSS to style a web page.  
*   How to use Microsoft Edge DevTools to experiment with CSS.  
*   The difference between CSS and CSS frameworks.  

You'll also have a real website!  

## Prerequisites   

Before attempting this tutorial, complete the following prerequisites:  

*   Complete [Get Started with HTML and the DOM][DevToolsBeginnersHtml] or make sure that you have an understanding of HTML and the DOM similar to what's taught in that tutorial.  
*   Download the [Microsoft Edge][MicrosoftEdgeInsider] web browser.  This tutorial uses a set of web development tools, called the Microsoft Edge DevTools, that are built into Microsoft Edge.  

## Set up your code   

In order to start creating your site, you need to set up your code:  

1.  **If you have already completed the first tutorial in this series, skip this section!  Continue using your code from the last tutorial, [Get Started with HTML and the DOM][DevToolsBeginnersHtml].**  
1.  Open the [source code][GlitchCookedAmphibianIndex].  This tab of your browser will be called the **editing tab**.  
    
    > ##### Figure 3  
    > The editing tab  
    > ![The editing tab][ImageCssSetup1]  
    
1.  Click **cooked-amphibian**.  A menu pops up.  
    
    > ##### Figure 4  
    > The Project Options menu  
    > ![The Project Options menu][ImageCssSetup2]  

1.  Click **Remix Project**.  Glitch creates a copy of the project that you can edit.  
    
    > [!NOTE]
    > Glitch generates a random name for the new project.  
    
1.  Click **Show** and select **In a New Window**.  Another tab opens with a live view of your site.  This tab of your browser will be called the **live tab**.  
    
    > ##### Figure 5  
    > The live tab  
    > ![The live tab][ImageCssSetup3]  

## Understand CSS   

**CSS** is a computer language that determines the layout and styling of web pages.  For example, here is a paragraph with a border:  

> ##### Figure 6  
> This has been styled with CSS  
> ![This has been styled with CSS][ImageCssStyled]  

Here is the HTML and CSS code used to create that paragraph:  

```html
<p style="border: 1px dashed red; padding: 5px;">
    This has been styled with CSS.
</p>
```  

`style="border: 1px dashed red; padding: 5px;"` probably looks new to you.  The rest should look familiar.  If not, complete [Get Started with HTML and the DOM][DevToolsBeginnersHtml] before attempting this tutorial.  

## Add inline styles   

Use **inline styles** when you want to apply styles to a single element.  Try it now:  

1.  Go back to the editing tab and open `index.html`.  
    
    > ##### Figure 7  
    > `index.html`  
    > ![index.html][ImageCssInline1]  

1.  Add `style="background-color: aliceblue;"` to your `<nav>`.  In the code block below, the fourth line of code is the one you need to change.  The rest is just there so you can be sure that you're putting the new code in the right place.  
    
    ```html
    ...
        ...
            <header>
                <p>Welcome to my site!</p>
            </header>
            <nav style="background-color: aliceblue;">
                <ul>
                    <li><a href="/">Home</a></li>
                    ...
                ...
            ...
        ...
    ...
    ```  

1.  Go to the **live tab** to see the changes!  The background of the `<nav>` section is now blue.  
    
    > ##### Figure 8  
    > The background color behind the Home and Contact links is now blue  
    > ![The background color behind the Home and Contact links is now blue][ImageCssInline2]  

## Re-use styles on a single page with internal stylesheets   

Earlier, you saw an inline style that applied a style to a single `<p>` tag like this:  

```html
<p style="border: 1px dashed red; padding: 5px;">
    This has been styled with CSS.
</p>
```  

What if you wanted all of the `<p>` elements on your webpage to be styled the same way?  You'd have to copy and paste the code into every single `<p>` tag on your site.  That's a lot of time and effort.  And, if you needed to make an edit, you'd have to change every tag again.  **Internal stylesheets** allow you to write your CSS once so that it applies to multiple elements.  Try it now:  

1.  In the live tab, click **Contact** to go to the contact page.  Notice the font of **Home** and **Contact**.  
    
    > ##### Figure 9  
    > The Contact page  
    > ![The Contact page][ImageCssInternal1]  

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
1.  Click **Contact** to go back to the contact page.  The font of **Home** and **Contact** has changed.  
    
    > ##### Figure 10  
    > The font of the Home and Contact links has changed  
    > ![The font of the Home and Contact links has changed][ImageCssInternal2]  
    
### Understand internal stylesheets   

Internal stylesheets apply styles using **selectors**.  Selectors are patterns that may apply to one or more HTML elements.  For example, in the previous code:  

```html
...
    ...
        ...
        <style>
            li a {
              font-family: 'Courier New', Courier, Serif;
            }
        </style>
        ...
    ...
...
```  

`li a` is a selector that translates to "any `<li>` that contains an `<a>`".  The browser changes the font of the **Home** and **Contact** links because they match this pattern.  

```html
...
    ...
        ...
            ...
                <li><a href="/">Home</a></li>
                <li><a href="/contact.html">Contact</a></li>
                ...
            ...
        ...
    ...
...
```  

`font-family: 'Courier New', Courier, serif` is a **declaration**.  A declaration is made of two parts: a **property** and a **value**.  `font-family` is the property, and `'Courier New', Courier, serif` is the value of that property.  The property describes a general way that you can change the element's style, and the value says how exactly it should change.  For example, `font-family: 'Courier New', Courier, serif` gives the browser this instruction:  "Set the font of elements that match the pattern `li a` to `'Courier New'`.  If that font isn't available, use `Courier`.  If that isn't available, use `serif`."  

### Add multiple selectors to a ruleset   

A block of CSS code like what you see below is called a **ruleset**.  

```css
li a {
  font-family: 'Courier New', Courier, monospace;
}
```  

Use commas to add multiple selectors to a ruleset.  Try it now:  

1.  In the **editor tab**, open `contact.html`.  
1.  After `li a` type `, h1`.  

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

    This tells the browser to style `<h1>` elements the same way that it styles elements that match the pattern `li a`.  
    
1.  Go to the **live tab**.  
1.  Click the **Contact** link to go back to the contact page.  Now, **Contact Me!** has the same font as the navigation links.  
    
    > ##### Figure 11  
    > The text 'Contact Me!' now has the same font as the Home and Contact links  
    > ![The text Contact Me!  now has the same font as the Home and Contact links][ImageCssMultiple1]  

## Experiment with DevTools   

As you continue your journey to master web development, you'll find that CSS can be tricky.  You'll write some CSS and expect it to display one way, but the browser does something completely different.  Microsoft Edge DevTools makes it easy to experiment with changes and immediately see how those changes affect the page.  

### Add a declaration to an existing rulest in DevTools   

When you want to iterate on the style of an existing element, add a declaration to an existing ruleset.  Try it now:  

1.  Right-click the **Home** link and select **Inspect**.  
    
    > ##### Figure 12  
    > Inspecting the Home link  
    > ![Inspecting the Home link][ImageCssAdd1]  
    
    DevTools opens up alongside your page.  The code that represents the Home link, `<a href="/">Home</a>` is highlighted blue in the DOM Tree.  This should be familiar from [Get Started with HTML and the DOM][DevToolsBeginnersHtml].  In the **Styles** tab below the DOM Tree you can see the `font-family: 'Courier New', Courier, serif` declaration that you added to `contact.html` earlier.  
    
    > ##### Figure 13  
    > The Styles tab is below the DOM Tree  
    > ![The Styles tab is below the DOM Tree][ImageCssAdd2]  
    
    If your DevTools window is wide, the Styles tab is to the right of the DOM Tree.  
    
    > ##### Figure 14  
    > The Styles tab is to the right of the DOM Tree  
    > ![The Styles tab is to the right of the DOM Tree][ImageCssAdd3]  
    
1.  Click the whitespace below `font-family: 'Courier New', Courier, Serif` to add a new declaration.  
    
    > ##### Figure 15  
    > Adding a new declaration  
    > ![Adding a new declaration][ImageCssAdd4]  
    
1.  Type `color` and then press `Enter`.  The autocomplete UI suggests options as you type.  
    
    > ##### Figure 16  
    > Typing `color`  
    > ![Typing color][ImageCssAdd5]  

1.  Type `magenta` and then press `Enter` again.  All of the text on the contact page is now magenta.  
    
    > ##### Figure 17  
    > Typing `magenta`  
    > ![Typing magenta][ImageCssAdd6]  
    
### Edit a declaration in DevTools   

You can also edit existing declarations in DevTools.  Try it now:  

1.  Click the magenta square next to `magenta`.  A color picker pops up.  
    
    > ##### Figure 18  
    > The Color Picker  
    > ![The Color Picker][ImageCssEdit1]  
    
1.  Use the color picker to change the font text to a color that you like.  
    
    > ##### Figure 19  
    > Changing the font color to purple with the Color Picker  
    > ![Changing the font color to purple with the Color Picker][ImageCssEdit2]  

### Add a new ruleset in DevTools   

You can also add new rulesets in DevTools.  Try it now:  

1.  Click **New Style Rule** ![New Style Rule][ImageNewStyleRuleIcon] which is next to **.cls**.  An empty ruleset appears with `a` as the selector.  
    
    > ##### Figure 20  
    > Adding a new rule  
    > ![Adding a new rule][ImageCssRule1]  
    
1.  Replace `a` with `a:hover`.  
    
    > ##### Figure 21  
    > Replacing `a` with `a:hover`  
    > ![Replacing a with a:hover][ImageCssRule2]  
    
    `:hover` is a **pseudo-class**.  Use pseudo-classes to style elements when they enter special states.  For example, the `a:hover` style only takes effect when you're hovering over an `<a>` element.  
    
1.  Click between the brackets to add a new declaration.  
1.  Type `background-color` for the declaration name and then press `Enter`.  
    
    > ##### Figure 22  
    > Typing `background-color`  
    > ![Typing background-color][ImageCssRule3]  
    
1.  Type `green` for the declaration value and then press `Enter`.  
    
    > ##### Figure 23  
    > Typing `green`  
    > ![Typing green][ImageCssRule4]  
    
1.  Hover your mouse over the **Home** link.  The background of the link turns green.  
    
    > ##### Figure 24  
    > Hovering over the Home link to reveal its green background  
    > ![Hovering over the Home link to reveal its green background][ImageCssRule5]  
    
## Re-use styles across pages with external stylesheets   

Earlier you added this internal stylesheet to `contact.html`:  

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

What if you wanted to style `index.html` the same way?  What if you had a *thousand* pages and you wanted to apply these styles to all of them?  You'd have to copy and paste this internal stylesheet into every single web page on your site.  **External stylesheets** allow you to write your CSS once yet apply it to multiple pages.  Try it now:  

1.  First, reload the live tab to remove the changes that you made in DevTools.  
    
    > ##### Figure 25  
    >  After reloading the page the changes that were made in DevTools are gone  
    > ![ After reloading the page the changes that were made in DevTools are gone][ImageCssExternal01]  
    
1.  Go back to the **editor tab** and open `contact.html`.  
    
    > ##### Figure 26  
    > `contact.html`  
    > ![contact.html][ImageCssExternal02]  
    
1.  Delete everything between `<style>` and `</style>`, including `<style>` and `</style>`.  
    
    > ##### Figure 27  
    > The style tag has been removed  
    > ![The style tag has been removed][ImageCssExternal03]  
    
1.  Go to `index.html` and remove `style="background-color: aliceblue;"` from the `<nav>` tag.  You have now removed all of the CSS that you previously added to your site.  
    
    > ##### Figure 28  
    > The inline style has been removed from the nav element  
    > ![The inline style has been removed from the nav element][ImageCssExternal04]  

1.  Click **New File**.  
    
    > ##### Figure 29  
    > The new file dialog  
    > ![The new file dialog][ImageCssExternal05]  
    
1.  Replace `cool-file.js` with `style.css` and then click **Add File**.  
    
    > ##### Figure 30  
    > Typing `style.css`  
    > ![Typing style.css][ImageCssExternal06]  
    
1.  Paste this code into `style.css`:  
    
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
    
    > ##### Figure 31  
    > Adding code to `style.css`  
    > ![Adding code to style.css][ImageCssExternal07]  
    
    At this point, you have created an external stylesheet, but your HTML doesn't know that it exists, yet.  
    
1.  Open `index.html`.  
1.  Add `<link rel="stylesheet" href="style.css">` to your HTML.  
    
    ```html
    ...
        <head>
            ...
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="style.css">
        </head>
        ...
    ...
    ```  

    > ##### Figure 32  
    > Linking to `style.css`  
    > ![Linking to style.css][ImageCssExternal08]  

1.  Go to `contact.html` and add the link there, too.  
    
    > ##### Figure 33  
    > Linking to `style.css` in `contact.html`  
    > ![Linking to style.css in contact.html][ImageCssExternal09]  

1.  Go to the **live tab**.  The home page now has the same font from the last section and a blue navigation section.  
    
    > ##### Figure 34  
    > The home page  
    > ![The home page][ImageCssExternal10]  
    
1.  Click the **Contact** link to go to the contact page.  The contact page has the same formatting as the home page.  
    
    > ##### Figure 35  
    > The contact page  
    > ![The contact page][ImageCssExternal11]  
    
## Use a CSS framework   

**CSS frameworks** are collections of styles built by other developers that make it easier to create attractive web sites.  Instead of defining styles yourself, a framework gives you a collection of styles that you can use on your page elements.  

1.  Copy the following code:  
    
    ```html
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css">
    ```  
    
1.  Go to the editing tab and paste the code into `contact.html`.  
    
    > ##### Figure 36  
    > Linking to the framework in `contact.html`  
    > ![Linking to the framework in contact.html][ImageCssFramework1]  
    
1.  Paste the code into `index.html`, as well.  
    
    > ##### Figure 37  
    > Linking to the framework in `index.html`  
    > ![Linking to the framework in index.html][ImageCssFramework2]  
    
1.  Go back to the live tab to view your changes.  While the background color of the `<nav>` and the font of the `li a` elements are the same, the font of the other elements has changed.  
    
    > ##### Figure 38  
    > Some of the font on the home page has changed because of the framework  
    > ![Some of the font on the home page has changed because of the framework][ImageCssFramework3]  

### Use a class   

In the last section, you added Bootstrap to your web pages, which changed the fonts of some of the elements on your site.  CSS frameworks can help you make major changes to your page with very little code.  Try it now by changing your header:  

1.  Copy this code:  
    
    ```html
    class="jumbotron jumbotron-fluid"  
    ```  
    
1.  Add this code to your `<header>` tag in `index.html`.  
    
    > ##### Figure 39  
    > Adding classes in `index.html`  
    > ![Adding classes in index.html][ImageCssJumbotron1]  
    
1.  Add the code to your `<header>` tag in `contact.html`, too.  
    
    > ##### Figure 40  
    > Adding classes in `contact.html`  
    > ![Adding classes in contact.html][ImageCssJumbotron2]  
    
1.  View your changes in the live tab.  There's a big, grey box around your header now.  
    
    > ##### Figure 41  
    > The header now has a big, grey box around it  
    > ![The header now has a big, grey box around it][ImageCssJumbotron3]  
    
### Understand classes   

Classes let you assign collections of styles to arbitrary elements.  For example, setting the `class` attribute of the `<header>` tags to `jumbotron` applied the following styles to them:  

```css
.jumbotron {
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: #e9ecef;
  border-radius: .3rem;
}
```  

One advantage of classes is that they let you apply styles to whatever elements you want.  For example, suppose you want to set the background color of *some* `<p>` elements to purple, but not *all* of them.  You could define the style in a class:  

```css
.custom-background {
  background-color: purple;
}
```  

And then apply the class to only the `<p>` elements that you want to style:  

```html
...
    ...
        ...
        <p>This won't be purple.</p>
        <p class="custom-background">This will be purple.</p>
        <p>This won't be purple.</p>
        <p class="custom-background">This will be purple.</p>
        ...
    ...
...
```  

### Align elements   

Bootstrap also provides classes for aligning elements.  Try it now:  

1.  Go back to the editor tab and open `index.html`.  
1.  Add `class="container-fluid"` to your `<body>` tag.  
    
    > ##### Figure 42  
    > Adding the `container-fluid` class  
    > ![Adding the container-fluid class][ImageCssAlign1]  

1.  Wrap your `<nav>` and `<main>` elements in `<div class="row">`.  Make sure to put `</div>` after `</main>` in order to properly close the new tag.  
    
    > ##### Figure 43  
    > Adding a row  
    > ![Adding a row][ImageCssAlign2]  
    
1.  Add `class="col-3"` to your `<nav>` tag and `class="col-9"` to your `<main>` tag.  
    
    > ##### Figure 44  
    > Adding the `col-3` and `col-9` classes  
    > ![Adding the col-3 and col-9 classes][ImageCssAlign3]  
    
1.  View your changes in the live tab.  
    
    > ##### Figure 45  
    > The nav content is now to the left of the main content  
    > ![The nav content is now to the left of the main content][ImageCssAlign4]  
    
## Next steps   

Congratulations!  You're done!  

*   The best way to get better at web development is to build more sites.  Don't worry about breaking stuff.  Just have fun and learn as much as you can along the way.  
*   Check out [Introduction to CSS][MDNCssFirstSteps] to learn lots more about styling web pages.  
*   Work through our [Get Started with Viewing and Changing CSS][DevtoolsCssIndex] tutorial to learn more about how you can use DevTools to experiment with a page's CSS.  

<!--- image links --->  

[ImageNewStyleRuleIcon]: /microsoft-edge/devtools-guide-chromium/media/new-style-rule-icon.msft.png  

[ImageCssIntro1]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-intro1.msft.png "Figure 1: What your site currently looks like"  
[ImageCssIntro2]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-intro2.msft.png "Figure 2: What your site will look like at the end of the tutorial"  
[ImageCssSetup1]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-setup1.msft.png "Figure 3: The editing tab"  
[ImageCssSetup2]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-setup2.msft.png "Figure 4: The Project Options menu"  
[ImageCssSetup3]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-setup3.msft.png "Figure 5: The live tab"  
[ImageCssStyled]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-red_paragraph.msft.png "Figure 6: This has been styled with CSS"  
[ImageCssInline1]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-inline1.msft.png "Figure 7: index.html"  
[ImageCssInline2]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-inline2.msft.png "Figure 8: The background color behind the Home and Contact links is now blue"  
[ImageCssInternal1]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-internal1.msft.png "Figure 9: The Contact page"  
[ImageCssInternal2]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-internal2.msft.png "Figure 10: The font of the Home and Contact links has changed"  
[ImageCssMultiple1]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-multiple1.msft.png "Figure 11: The text 'Contact Me!' now has the same font as the Home and Contact links"  
[ImageCssAdd1]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-add1.msft.png "Figure 12: Inspecting the Home link"  
[ImageCssAdd2]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-add2.msft.png "Figure 13: The Styles tab is below the DOM Tree"  
[ImageCssAdd3]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-add3.msft.png "Figure 14: The Styles tab is to the right of the DOM Tree"  
[ImageCssAdd4]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-add4.msft.png "Figure 15: Adding a new declaration"
[ImageCssAdd5]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-add5.msft.png "Figure 16: Typing color"  
[ImageCssAdd6]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-add6.msft.png "Figure 17: Typing magenta"  
[ImageCssEdit1]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-edit1.msft.png "Figure 18: The Color Picker"  
[ImageCssEdit2]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-edit2.msft.png "Figure 19: Changing the font color to purple with the Color Picker"  
[ImageCssRule1]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-rule1.msft.png "Figure 20: Adding a new rule"  
[ImageCssRule2]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-rule2.msft.png "Figure 21: Replacing a with a:hover"  
[ImageCssRule3]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-rule3.msft.png "Figure 22: Typing background-color"  
[ImageCssRule4]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-rule4.msft.png "Figure 23: Typing green"  
[ImageCssRule5]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-rule5.msft.png "Figure 24: Hovering over the Home link to reveal its green background"  
[ImageCssExternal01]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-external1.msft.png "Figure 25: After reloading the page the changes that were made in DevTools are gone"  
[ImageCssExternal02]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-external2.msft.png "Figure 26: contact.html"  
[ImageCssExternal03]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-external3.msft.png "Figure 27: The style tag has been removed"  
[ImageCssExternal04]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-external4.msft.png "Figure 28: The inline style has been removed from the nav element"  
[ImageCssExternal05]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-external5.msft.png "Figure 29: The new file dialog"  
[ImageCssExternal06]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-external6.msft.png "Figure 30: Typing style.css"  
[ImageCssExternal07]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-external7.msft.png "Figure 31: Adding code to style.css"  
[ImageCssExternal08]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-external8.msft.png "Figure 32: Linking to style.css"  
[ImageCssExternal09]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-external9.msft.png "Figure 33: Linking to style.css in contact.html"  
[ImageCssExternal10]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-external10.msft.png "Figure 34: The home page"  
[ImageCssExternal11]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-external11.msft.png "Figure 35: The contact page"  
[ImageCssFramework1]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-framework1.msft.png "Figure 36: Linking to the framework in contact.html"  
[ImageCssFramework2]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-framework2.msft.png "Figure 37: Linking to the framework in index.html"  
[ImageCssFramework3]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-framework3.msft.png "Figure 38: Some of the font on the home page has changed because of the framework"  
[ImageCssJumbotron1]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-jumbotron1.msft.png "Figure 39: Adding classes in index.html"  
[ImageCssJumbotron2]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-jumbotron2.msft.png "Figure 40: Adding classes in contact.html"  
[ImageCssJumbotron3]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-jumbotron3.msft.png "Figure 41: The header now has a big, grey box around it"  
[ImageCssAlign1]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-align1.msft.png "Figure 42: Adding the container-fluid class"  
[ImageCssAlign2]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-align2.msft.png "Figure 43: Adding a row"  
[ImageCssAlign3]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-align3.msft.png "Figure 44: Adding the col-3 and col-9 classes"  
[ImageCssAlign4]: /microsoft-edge/devtools-guide-chromium/media/beginners-css-align4.msft.png "Figure 45: The nav content is now to the left of the main content"  

<!--- links  --->  

[DevToolsBeginnersHtml]: html.md "DevTools for Beginners: Get Started with HTML and the DOM"  
[DevtoolsCssIndex]: ../css/index.md "Get Started With Viewing And Changing CSS"  

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
