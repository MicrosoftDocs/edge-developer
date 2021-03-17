---
description: An overview how to interact with the current document in the browser using the Console tool
title: Interacting with the DOM using Console
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 03/16/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Interacting with the DOM using Console

The **Console** tool is not only for [logging information][DevtoolsConsoleLogging] or to [run arbitrary JavaScript][DevtoolsConsoleJavaScript]. It also is a great way to interact with the document in the browser. You could consider it a script environment version of the **Inspect** tool. 

## Reading from the DOM

You can try it right now. Open **Console** by selecting `Control`+`Shift`+`J` (Windows, Linux) or `Command`+`Option`+`J` (macOS). 

Type or copy the following into the Console:

```javascript
document.querySelector('header')
```

You should get a reference to the header of this document and it should looks something like this:

:::image type="complex" source="../media/console-dom-getting-header.msft.png" alt-text="Getting a reference to the header in console using document.querySelector" lightbox="../media/console-dom-getting-header.msft.png":::
Getting a reference to the header in console using document.querySelector
:::image-end:::  

If you activate `Shift + Tab` or move your mouse cursor over the HTML result, DevTools will highlight the header for you. 

:::image type="complex" source="../media/console-dom-hightlighting-element.msft.png" alt-text="DevTools highlighting the section you selected in the Console" lightbox="../media/console-dom-hightlighting-element.msft.png":::
DevTools highlighting the section you selected in the Console
:::image-end:::  

## Manipulating the DOM

You can manipulate the page, too. For example, if you copy + paste or type the following into the Console you'll add a green border around the header.

```javascript
document.querySelector('header').style.border = '2em solid green'
```

:::image type="complex" source="../media/console-dom-adding-border.msft.png" alt-text="Adding a border to an element using Console" lightbox="../media/console-dom-adding-border.msft.png":::
Adding a border to an element using Console
:::image-end:::  

Depending on the complexity of the document, It can be quite daunting to find the right element to manipulate. But you can use the **Inspect** tool help you with that. Say you want to manipulate the `Documentation` part in the header.

img

You can get a direct reference to this element to manipulate using the following steps. 

1. Use the **Inspect** tool to pick the Element 
1. Select it and DevTools will jump to the **Elements**. 
1. Activate the `...` menu next to the element in the DOM view  
1. Select `Copy` and `Copy JS Path` from the context menus.
1. Go back to **Console** and paste the command

You can now change the text of this link to "My Playground" by adding `.textContent = "My Playground"` to the command you pasted. 

img

You can use any JavaScript DOM manipulations you want to do in the Console. And, to make it more convenient, the Console comes with a few helper methods to make it easier for you.

## Helpful Console utility methods 

There is a large amount of convenience methods and shortcuts available to you as [Console Utilities][DevtoolsConsoleUtilities]. Some of these methods are incredibly powerful and are things you probably have written as a series of `console.log()` statements in the past.

### Power to the $

The `$` has special powers in Console and you may remember that from jQuery.

* `$_` stores the result of the last command. So if you were to type `2 + 2` and hit enter, typing `$_` will give you 4.
* `$0` to `$4` is a stack of the last inspected elements `$0` is always the newest one. So in the earlier example, you could have just selected the element in the Inspector tool and type `$0.textContent = "My Playground"` to get the same effect.
* `$x()` allows you to select DOM elements by XPATH.
* `$()` and `$$()` are shorter versions of for `document.querySelector()` and `document.querySelectorAll()`. 

For example, the following retrieves all the links in the document (as `$$('a')` is short for `document.querySelectorAll('a')`) and displays them as a sortable table you could copy and paste, for example, into Excel.

```javascript
console.table($$('a'),['href','text']);
```
img

However, what if you don't just want to display this information but get it as data? There's a problem that `$$('a')` results not only in the information you want - the link and the text - but gives you all the properties of each link.

img

There is an interesting extra feature to the `$$` shortcut. Instead of returning a pure `NodeList` like `document.querySelectorAll()` does, it also gives you all the `Array` methods. That's why you can use `map()` to cut down the information to what you need. 

```javascript
$$('a').map(a => {
    return {url: a.href, text: a.innerText}
})
```

This returns an Array of all the links as objects with `text` and `url` properties. 

img 

We're not done yet, as lot of them are internal links to this document or have empty text. We could get rid of these using the filter method. 

```javascript
$$('a').map(a => {
    return {text: a.innerText, url: a.href}
}).filter(a => {
    return a.text !== '' && !a.url.match('docs.microsoft.com')
})
```

img

As shown at the start of this document, you can also change these elements. For example the following would put a green border around all external links:

```javascript    
$$('a[href^="https://"]').forEach(
  a => a.style.border = '1px solid green'
)
```
img

Instead of writing complex JavaScript to filter results, you can use the power of CSS selectors. For example, if you want to have a table of the `src` and `alt` information of all images in the document that aren't inline images, you can use the following:

```javascript
console.table($$('img:not([src^=data])'), ['src','alt'])
```

img

Ready for an even more complex example? HTML documents generated from Markdown, like this page, have automatic IDs on headings to allow for deep linking to that part of the document. A `# New features` will turn into `<h1 id="new-features">New features</h1>`. What if we want to have a list of all of these to copy and paste?

This script does that and you can try it out right here.

```JavaScript
let out = '';
$$('#main [id]').filter(
    elm => {return elm.nodeName.startsWith('H')}
).forEach(elm => {
   out += elm.innerText + "\n" + 
          document.location.href + '#' +
          elm.id + "\n";
});
console.log(out);
```

img

The result is a text with the text content of each heading followed by the full URL pointing to it. 

### Cleaning up with clear and copy

When developing in the Console, things can get messy. It can be especially frustrating to try to select results for copy and paste. This is why there are two utility methods that can help along the way:

* `copy()` copies whatever you give it to the clipboard. This is especially useful when you mix it with `$_` which copies the last result.
* `clear()` clears the console.

### Reading and monitoring events

Two other interesting utility methods of Console deal with event handling.

* `getEventListeners(node)` lists all the event listeners of a node.
* `monitorEvents(node, events)` monitors and logs the events that happen on a node.

You can try this out right now. Type the following into the Console.

```javascript
getEventListeners($('form')); 
```

This lists all the event handlers the developers of this page assigned to the first form in the document.

img

Monitoring allows you to get a notification in the Console every time something changes to the elements you monitor. You define the events you want to listen to as a second parameter. This is important as otherwise any event happening to the element will get reported.

Try the following in the Console:

```javascript
monitorEvents(window, ['resize', 'scroll']);
monitorEvents($0, 'key');
```

img

You now get a notification in the Console every time you scroll or resize the window. The second example is even more interesting as it logs any key action on the currently selected element. Try it by focusing on the search form in the header and typing some keys. 

img

You can stop monitoring by removing the listeners you set up:

```javascript
unmonitorEvents(window, ['resize', 'scroll']);
unmonitorEvents($0, 'key');
```

## Reusing DOM manipulation scripts

As useful as manipulating the DOM from the Console is, you will soon run into its limitations as a development platform. The good news is that there is also a [Sources tool][DevtoolsSources] in DevTools that offers a fully featured development environment. There you can store scripts you created in the Console as Snippets and run them against a document with a keyboard shortcut or from the editor.

## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  
[DevtoolsSources]: ../sources/index.md
[DevtoolsConsoleLogging]: ./console-log.md
[DevtoolsConsoleJavaScript]: ./console-javascript.md
[DevToolsConsoleAPI]: ./api.md 
[DevtoolsConsoleUtilities]: ./utilities.md

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  