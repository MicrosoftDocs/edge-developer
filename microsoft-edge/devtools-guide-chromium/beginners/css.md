---
title: DevTools for Beginners
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/06/2020
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
   limitations under the License. -->

# DevTools For Beginners: Get Started with CSS 

In this tutorial, you learn how to use CSS to style a web page. You also learn how to
use Microsoft Edge DevTools to experiment with CSS changes.

This is the second tutorial in a series of tutorials that teaches you the basics of web
development and Microsoft Edge DevTools. You gain hands-on experience by actually building your own
website. You don't have to complete the first tutorial before doing this one. 
You can start here. [Set up your code](#set-up-your-code) shows you how to get set up.

> [!NOTE]
> This tutorial is designed for absolute beginners and focuses on both the **fundamentals of
web development** and the basics of using DevTools to experiment with CSS. If you want a tutorial
that only focuses on DevTools, see [Get Started with Viewing and Changing
CSS](./../css/index.md).


Currently your site looks like this: 

<figure>
  <img src="imgs/css/intro1.msft.png"
       alt="What your site currently looks like."/>
  <figcaption>
    <b>Figure 1</b>. What your site currently looks like
  </figcaption>
</figure>

After completing the tutorial, it will look like this: 

<figure>
  <img src="imgs/css/intro2.msft.png"
       alt="What your site will look like at the end of the tutorial."/>
  <figcaption>
    <b>Figure 2</b>. What your site will look like at the end of the tutorial
  </figcaption>
</figure>

## Goals 

By the end of this tutorial, you will understand:

* How to use CSS to style a web page.
* How to use Microsoft Edge DevTools to experiment with CSS.
* The difference between CSS and CSS frameworks.

You'll also have a real website!

## Prerequisites 

Before attempting this tutorial, complete the following prerequisites:

* Complete [Get Started with HTML and the DOM](./html.md) 
  or make sure that you have an understanding
  of HTML and the DOM similar to what's taught in that tutorial.
* Download the [Microsoft Edge](https://www.microsoftedgeinsider.com) web browser. This tutorial uses a set 
  of web development tools, called the Microsoft Edge DevTools, that are built into Microsoft Edge.

## Set up your code 

In order to start creating your site, you need to set up your code:

1. **If you have already completed the first tutorial in this series, skip this section! 
   Continue using your code from the last tutorial, 
   [Get Started with HTML and the DOM](./html.md).**
2. Open the [source code](https://glitch.com/edit/#!/cooked-amphibian?path=index.html). This tab of your
   browser will be called the **editing tab**.

     <figure>
       <img src="imgs/css/setup1.msft.png"
            alt="The editing tab."/>
       <figcaption>
         <b>Figure 3</b>. The editing tab
       </figcaption>
     </figure>

3. Click **cooked-amphibian**. A menu pops up.

     <figure>
       <img src="imgs/css/setup2.msft.png"
            alt="The Project Options menu."/>
       <figcaption>
         <b>Figure 4</b>. The Project Options menu
       </figcaption>
     </figure>

4. Click **Remix Project**. Glitch creates a copy of the project that you can 
   edit. Note that Glitch generates a random name for the new project.
5. Click **Show** and select **In a New Window**. Another tab opens with a live view of your site.
   This tab of your browser will be called the **live tab**.

     <figure>
       <img src="imgs/css/setup3.msft.png"
            alt="The live tab."/>
       <figcaption>
         <b>Figure 5</b>. The live tab
       </figcaption>
     </figure>

## Understand CSS 

**CSS** is a computer language that determines the layout and styling of web pages. For
example, here is a paragraph with a border:

  <figure>
    <img src="imgs/css/red_paragraph.msft.png"
        alt="This has been styled with CSS."/>
  </figure>

Here is the HTML and CSS code used to create that paragraph:

```html
<p style="border: 1px dashed red; padding: 5px;">
  This has been styled with CSS.
</p> 
```

`style="border: 1px dashed red; padding: 5px;"` probably looks new to you.
The rest should look familiar. If not, complete [Get Started with HTML and the DOM](./html.md)
before attempting this tutorial.

## Add inline styles 

Use **inline styles** when you want to apply styles to a single element. 
Try it now:

1. Go back to the editing tab and open `index.html`.

     <figure>
       <img src="imgs/css/inline1.msft.png"
            alt="index.html."/>
       <figcaption>
         <b>Figure 6</b>. <code>index.html</code>
       </figcaption>
     </figure>

2. Add `style="background-color: aliceblue;"` to your `<nav>`. In the code block below,
   the fourth line of code is the one you need to change. The rest is just there so you
   can be sure that you're putting the new code in the right place.

    ```html
    ...
    <header>
      <p>Welcome to my site!</p>
    </header>
    <nav style="background-color: aliceblue;">
    <ul>
      <li><a href="/">Home</a></li>
      ...
    ```

3. Go to the **live tab** to see the changes! 
   The background of the `<nav>` section is now blue.

     <figure>
       <img src="imgs/css/inline2.msft.png"
            alt="The background color behind the Home and Contact links is now blue."/>
       <figcaption>
         <b>Figure 7</b>. The background color behind the Home and Contact links is now blue
       </figcaption>
     </figure>

## Re-use styles on a single page with internal stylesheets 

Earlier, you saw an inline style that applied a style to a single `<p>` tag like this:

```html
<p style="border: 1px dashed red; padding: 5px;">
  This has been styled with CSS.
</p>
```

What if you wanted all of the `<p>` elements on your webpage to be styled the same way? 
You'd have to copy and paste the code into every single `<p>` tag on your site. 
That's a lot of time and effort. And, if you needed to make an edit, you'd have to change every tag again. 
**Internal stylesheets** allow you to write your CSS once so that it applies to multiple elements.
Try it now:

1. In the live tab, click **Contact** to go to the contact page. Notice the font of **Home** and **Contact**.

     <figure>
       <img src="imgs/css/internal1.msft.png"
            alt="The Contact page."/>
       <figcaption>
         <b>Figure 8</b>. The Contact page
       </figcaption>
     </figure>

2. In the **editor tab**, go to `contact.html`.

3. Add the following code to `contact.html`. Remember, the lines starting with `<style>` and ending with `</style>` are what you need to add. The
   other code is just there so you know where to put the new code.

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
    </head>
    ...
    ```

4. Go back to the **live tab**. 
5. Click **Contact** to go back to the contact page. The font of **Home** and **Contact** has changed.

     <figure>
       <img src="imgs/css/internal2.msft.png"
            alt="The font of the Home and Contact links has changed."/>
       <figcaption>
         <b>Figure 9</b>. The font of the Home and Contact links has changed
       </figcaption>
     </figure>

### Understand internal stylesheets 

Internal stylesheets apply styles using **selectors**. 
Selectors are patterns that may apply to one or more HTML elements.
For example, in the previous code:

```html
<style>
  li a {
    font-family: 'Courier New', Courier, serif;
  }
</style>
```

`li a` is a selector that translates to "any `<li>` that contains an `<a>`". 
The browser changes the font of the **Home** and **Contact** links 
because they match this pattern. 

```html
<li><a href="/">Home</a></li>
<li><a href="/contact.html">Contact</a></li>
```

`font-family: 'Courier New', Courier, serif` is a **declaration**. 
A declaration is made of two parts: a **property** and a **value**. 
`font-family` is the property, and `'Courier New', Courier, serif` is the value
of that property. The property describes a general way that you can change the element's style,
and the value says how exactly it should change.
For example, `font-family: 'Courier New', Courier, serif` gives the browser this instruction:
"Set the font of elements that match the pattern `li a` to `'Courier New'`. If that font
isn't available, use `Courier`. If that isn't available, use `serif`."

### Add multiple selectors to a ruleset 

A block of CSS code like what you see below is called a **ruleset**.

```css
li a {
  font-family: 'Courier New', Courier, monospace;
}
```

Use commas to add multiple selectors to a ruleset. Try it now:

1. In the **editor tab**, open `contact.html`.
2. After `li a` type `, h1`.

    ```html
    <style>
      li a, h1 {
        font-family: 'Courier New', Courier, Serif;
      }
    </style>
    ...
    ```

    This tells the browser to style `<h1>` elements the same way that it styles
    elements that match the pattern `li a`.

3. Go to the **live tab**. 
4. Click the **Contact** link to go back to the contact page. 
   Now, **Contact Me!** has the same font as the navigation links.

     <figure>
       <img src="imgs/css/multiple1.msft.png"
            alt="The text 'Contact Me!' now has the same font as the Home and Contact links."/>
       <figcaption>
         <b>Figure 10</b>. The text "Contact Me!" now has the same font as the Home and Contact links
       </figcaption>
     </figure>

## Experiment with DevTools 

As you continue your journey to master web development, you'll find that CSS can be tricky.
You'll write some CSS and expect it to display one way, but the browser does something completely
different. Microsoft Edge DevTools makes it easy to experiment with changes and immediately see how
those changes affect the page.

### Add a declaration to an existing rulest in DevTools 

When you want to iterate on the style of an existing element, add a declaration
to an existing ruleset. Try it now:

1. Right-click the **Home** link and select **Inspect**.

     <figure>
       <img src="imgs/css/add1.msft.png"
            alt="Inspecting the Home link."/>
       <figcaption>
         <b>Figure 11</b>. Inspecting the Home link
       </figcaption>
     </figure>

    DevTools opens up alongside your page. The code that represents the Home link,
    `<a href="/">Home</a>` is highlighted blue in the DOM Tree. This should be familiar from
    [Get Started with HTML and the DOM](./html.md). In the **Styles** tab below the DOM Tree you can see the
    `font-family: 'Courier New', Courier, serif` declaration that you added to `contact.html` earlier.

     <figure>
       <img src="imgs/css/add2.msft.png"
            alt="The Styles tab is below the DOM Tree."/>
       <figcaption>
         <b>Figure 12</b>. The Styles tab is below the DOM Tree
       </figcaption>
     </figure>

    If your DevTools window is wide, the Styles tab is to the right of the DOM Tree.

     <figure>
       <img src="imgs/css/add3.msft.png"
            alt="The Styles tab is to the right of the DOM Tree."/>
       <figcaption>
         <b>Figure 13</b>. The Styles tab is to the right of the DOM Tree
       </figcaption>
     </figure>

2. Click the whitespace below `font-family: 'Courier New', Courier, Serif` to add a new declaration.

     <figure>
       <img src="imgs/css/add4.msft.png"
            alt="Adding a new declaration."/>
       <figcaption>
         <b>Figure 14</b>. Adding a new declaration
       </figcaption>
     </figure>

3. Type `color` and then press `Enter`. The autocomplete UI suggests options as you type.

     <figure>
       <img src="imgs/css/add5.msft.png"
            alt="Typing 'color'."/>
       <figcaption>
         <b>Figure 15</b>. Typing <code>color</code>
       </figcaption>
     </figure>

4. Type `magenta` and then press `Enter` again. All of the text on the contact page is now magenta.

     <figure>
       <img src="imgs/css/add6.msft.png"
            alt="Typing 'magenta'."/>
       <figcaption>
         <b>Figure 16</b>. Typing <code>magenta</code>
       </figcaption>
     </figure>

### Edit a declaration in DevTools 

You can also edit existing declarations in DevTools. Try it now:

1. Click the magenta square next to `magenta`. A color picker pops up.

     <figure>
       <img src="imgs/css/edit1.msft.png"
            alt="The Color Picker."/>
       <figcaption>
         <b>Figure 16</b>. The Color Picker
       </figcaption>
     </figure>

2. Use the color picker to change the font text to a color that you like.

     <figure>
       <img src="imgs/css/edit2.msft.png"
            alt="Changing the font color to purple with the Color Picker."/>
       <figcaption>
         <b>Figure 17</b>. Changing the font color to purple with the Color Picker
       </figcaption>
     </figure>

### Add a new ruleset in DevTools 

You can also add new rulesets in DevTools. Try it now:

1. Click **New Style Rule**
<img src="./../images/shared/new-style-rule.msft.png" alt="New Style Rule" width="20px" height="20px">
   which is next to **.cls**. An empty ruleset appears with `a` as the selector.

     <figure>
       <img src="imgs/css/rule1.msft.png"
            alt="Adding a new rule."/>
       <figcaption>
         <b>Figure 18</b>. Adding a new rule
       </figcaption>
     </figure>

2. Replace `a` with `a:hover`.

     <figure>
       <img src="imgs/css/rule2.msft.png"
            alt="Replacing 'a' with 'a:hover'."/>
       <figcaption>
         <b>Figure 19</b>. Replacing <code>a</code> with <code>a:hover</code>
       </figcaption>
     </figure>

    `:hover` is a **pseudo-class**. Use pseudo-classes to
    style elements when they enter special states. For example, the `a:hover` style
    only takes effect when you're hovering over an `<a>` element.

3. Click between the brackets to add a new declaration.
4. Type `background-color` for the declaration name and then press `Enter`.

     <figure>
       <img src="imgs/css/rule3.msft.png"
            alt="Typing 'background-color'."/>
       <figcaption>
         <b>Figure 20</b>. Typing <code>background-color</code>
       </figcaption>
     </figure>

5. Type `green` for the declaration value and then press `Enter`.

     <figure>
       <img src="imgs/css/rule4.msft.png"
            alt="Typing 'green'."/>
       <figcaption>
         <b>Figure 21</b>. Typing <code>green</code>
       </figcaption>
     </figure>

6. Hover your mouse over the **Home** link. The background of the link turns green.

     <figure>
       <img src="imgs/css/rule5.msft.png"
            alt="Hovering over the Home link to reveal its green background."/>
       <figcaption>
         <b>Figure 22</b>. Hovering over the Home link to reveal its green background
       </figcaption>
     </figure>

## Re-use styles across pages with external stylesheets 

Earlier you added this internal stylesheet to `contact.html`:

```html
<style>
  li a, h1 {
    font-family: 'Courier New', Courier, monospace;
  }
</style>
```

What if you wanted to style `index.html` the same way? 
What if you had a *thousand* pages and you wanted to apply these styles to all of them?
You'd have to copy and paste this internal stylesheet into every single web page on your site. 
**External stylesheets** allow you to write your CSS once yet apply it to multiple pages.
Try it now:

1. First, reload the live tab to remove the changes that you made in DevTools.

     <figure>
       <img src="imgs/css/external1.msft.png"
            alt="After reloading the page the changes that were made in DevTools are gone."/>
       <figcaption>
         <b>Figure 23</b>. After reloading the page the changes that were made in DevTools are gone
       </figcaption>
     </figure>

2. Go back to the **editor tab** and open `contact.html`.

     <figure>
       <img src="imgs/css/external2.msft.png"
            alt="contact.html"/>
       <figcaption>
         <b>Figure 24</b>. contact.html
       </figcaption>
     </figure>

3. Delete everything between `<style>` and `</style>`, including `<style>` and `</style>`.

     <figure>
       <img src="imgs/css/external3.msft.png"
            alt="The style tag has been removed."/>
       <figcaption>
         <b>Figure 25</b>. The style tag has been removed
       </figcaption>
     </figure>

4. Go to `index.html` and remove `style="background-color: aliceblue;"`
   from the `<nav>` tag.

    You have now removed all of the CSS that you previously added to your site.


     <figure>
       <img src="imgs/css/external4.msft.png"
            alt="The inline style has been removed from the nav element."/>
       <figcaption>
         <b>Figure 26</b>. The inline style has been removed from the nav element
       </figcaption>
     </figure>

5. Click **New File**.

     <figure>
       <img src="imgs/css/external5.msft.png"
            alt="The new file dialog."/>
       <figcaption>
         <b>Figure 27</b>. The new file dialog
       </figcaption>
     </figure>

6. Replace `cool-file.js` with `style.css` and then click **Add File**.

     <figure>
       <img src="imgs/css/external6.msft.png"
            alt="Typing 'style.css'."/>
       <figcaption>
         <b>Figure 28</b>. Typing <code>style.css</code>
       </figcaption>
     </figure>

7. Paste this code into `style.css`:

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

     <figure>
       <img src="imgs/css/external7.msft.png"
            alt="Adding code to style.css"/>
       <figcaption>
         <b>Figure 29</b>. Adding code to <code>style.css</code>
       </figcaption>
     </figure>


    At this point, you have created an external stylesheet, but your HTML doesn't know that it exists, yet.

8. Open `index.html`.
9. Add `<link rel="stylesheet" href="style.css">` to your HTML.

    ```html
    ...
    <head>
      ...
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="style.css">
    </head>
    ...
    ```

     <figure>
       <img src="imgs/css/external8.msft.png"
            alt="Linking to style.css."/>
       <figcaption>
         <b>Figure 30</b>. Linking to <code>style.css</code>
       </figcaption>
     </figure>

10. Go to `contact.html` and add the link there, too.

     <figure>
       <img src="imgs/css/external9.msft.png"
            alt="Linking to style.css in contact.html."/>
       <figcaption>
         <b>Figure 31</b>. Linking to <code>style.css</code> in <code>contact.html</code>
       </figcaption>
     </figure>

11. Go to the **live tab**. The home page now has the same font 
   from the last section and a blue navigation section.

     <figure>
       <img src="imgs/css/external10.msft.png"
            alt="The home page."/>
       <figcaption>
         <b>Figure 32</b>. The home page
       </figcaption>
     </figure>

12. Click the **Contact** link to go to the contact page. 
   The contact page has the same formatting as the home page.

     <figure>
       <img src="imgs/css/external11.msft.png"
            alt="The contact page"/>
       <figcaption>
         <b>Figure 33</b>. The contact page
       </figcaption>
     </figure>

## Use a CSS framework 

**CSS frameworks** are collections of styles built by other developers that make it easier
to create attractive web sites. Instead of defining styles yourself, a framework gives you
a collection of styles that you can use on your page elements.

1. Copy the following code: 
   `<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css">` 
2. Go to the editing tab and paste the code into `contact.html`.

     <figure>
       <img src="imgs/css/framework1.msft.png"
            alt="Linking to the framework in contact.html."/>
       <figcaption>
         <b>Figure 34</b>. Linking to the framework in contact.html
       </figcaption>
     </figure>

3. Paste the code into `index.html`, as well.

     <figure>
       <img src="imgs/css/framework2.msft.png"
            alt="Linking to the framework in index.html"/>
       <figcaption>
         <b>Figure 35</b>. Linking to the framework in index.html
       </figcaption>
     </figure>

4. Go back to the live tab to view your changes. While the background color of the `<nav>` 
   and the font of the `li a` elements are the same, the font of the other elements has changed.

     <figure>
       <img src="imgs/css/framework3.msft.png"
            alt="Some of the font on the home page has changed because of the framework."/>
       <figcaption>
         <b>Figure 36</b>. Some of the font on the home page has changed because of the framework
       </figcaption>
     </figure>

### Use a class 
 
In the last section, you added Bootstrap to your web pages, 
which changed the fonts of some of the elements on your site. 
CSS frameworks can help you make major changes to your page with very little code. 
Try it now by changing your header:

1. Copy this code: `class="jumbotron jumbotron-fluid"`
2. Add this code to your `<header>` tag in `index.html`.

     <figure>
       <img src="imgs/css/jumbotron1.msft.png"
            alt="Adding the jumbotron class in index.html."/>
       <figcaption>
         <b>Figure 37</b>. Adding classes in index.html
       </figcaption>
     </figure>

3. Add the code to your `<header>` tag in `contact.html`, too.

     <figure>
       <img src="imgs/css/jumbotron2.msft.png"
            alt="Adding the jumbotron class in contact.html."/>
       <figcaption>
         <b>Figure 38</b>. Adding classes in contact.html
       </figcaption>
     </figure>

4. View your changes in the live tab. There's a big, grey box around your header now.

     <figure>
       <img src="imgs/css/jumbotron3.msft.png"
            alt="The header now has a big, grey box around it."/>
       <figcaption>
         <b>Figure 39</b>. The header now has a big, grey box around it
       </figcaption>
     </figure>

### Understand classes 

Classes let you assign collections of styles to arbitrary elements. For example, setting the
`class` attribute of the `<header>` tags to `jumbotron` applied the following styles to them:

```css
.jumbotron {
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: #e9ecef;
  border-radius: .3rem;
}
```

One advantage of classes is that they let you apply styles to whatever elements you want. For example,
suppose you want to set the background color of *some* `<p>` elements to purple, but not *all* of them.
You could define the style in a class:

```css
.custom-background {
  background-color: purple;
}
```

And then apply the class to only the `<p>` elements that you want to style:

```html
<p>This won't be purple.</p>
<p class="custom-background">This will be purple.</p>
<p>This won't be purple.</p>
<p class="custom-background">This will be purple.</p>
```

### Align elements 

Bootstrap also provides classes for aligning elements. Try it now:

1. Go back to the editor tab and open `index.html`.
2. Add `class="container-fluid"` to your `<body>` tag.

     <figure>
       <img src="imgs/css/align1.msft.png"
            alt="Adding the 'container-fluid' class."/>
       <figcaption>
         <b>Figure 40</b>. Adding the <code>container-fluid</code> class
       </figcaption>
     </figure>

3. Wrap your `<nav>` and `<main>` elements in `<div class="row">`. Make sure to put `</div>` after
   `</main>` in order to properly close the new tag.

     <figure>
       <img src="imgs/css/align2.msft.png"
            alt="Adding a row."/>
       <figcaption>
         <b>Figure 41</b>. Adding a row
       </figcaption>
     </figure>

4. Add `class="col-3"` to your `<nav>` tag and `class="col-9"` to your `<main>` tag.

     <figure>
       <img src="imgs/css/align3.msft.png"
            alt="Adding the 'col-3' and 'col-9' classes."/>
       <figcaption>
         <b>Figure 42</b>. Adding the <code>col-3</code> and <code>col-9</code> classes
       </figcaption>
     </figure>

5. View your changes in the live tab.

     <figure>
       <img src="imgs/css/align4.msft.png"
            alt="The nav content is now to the left of the main content."/>
       <figcaption>
         <b>Figure 43</b>. The nav content is now to the left of the main content
       </figcaption>
     </figure>

## Next steps 

Congratulations! You're done! 

* The best way to get better at web development is to build more sites. Don't worry about breaking stuff. Just
  have fun and learn as much as you can along the way.
* Check out [Introduction to CSS](https://developer.mozilla.org/docs/Learn/CSS/Introduction_to_CSS) to learn lots
  more about styling web pages.
* Work through our [Get Started with Viewing and Changing CSS](./../css/index.md) tutorial
  to learn more about how you can use DevTools to experiment with a page's CSS.


> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms 
  described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/). The original page can be found [here](https://developers.google.com/web/tools/chrome-devtools/beginners/css) and is authored by [Katherine Jackson](https://developers.google.com/web/resources/contributors/katjackson) (Technical Writer Intern, Chrome DevTools).
  
<a rel="license" href="https://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.