---
description: An overview how to interact with the current webpage in the browser using the Console tool
title: Use the Console to interact with the DOM
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 03/24/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Use the Console to interact with the DOM

The **Console** tool is not only for [logging information][DevtoolsConsoleConsoleLog] or to [run arbitrary JavaScript][DevtoolsConsoleConsoleJavascript].  It also is a great way to interact with the webpage in the browser.  Consider it a script environment version of the **Inspect** tool.  

## Read from the DOM

To reference the header of the webpage, complete the following actions.  

1.  Open the **Console**.
    *   Select `Control`+`Shift`+`J` \(Windows, Linux\) or `Command`+`Option`+`J` \(macOS\).  
1.  Type or copy the following code snippet in the **Console**.  
    
    ```javascript
    document.querySelector('header')
    ```  
    
:::image type="complex" source="../media/console-dom-get-reference.msft.png" alt-text="Get a reference to the header in console using document.querySelector" lightbox="../media/console-dom-get-reference.msft.png":::
    Get a reference to the header in console using `document.querySelector`  
:::image-end:::  

If you select `Shift`+`Tab` or move your mouse cursor over the HTML result, DevTools highlights the header for you.  

:::image type="complex" source="../media/console-dom-highlight-element.msft.png" alt-text="DevTools highlights the section you choose in the Console" lightbox="../media/console-dom-highlight-element.msft.png":::
    DevTools highlights the section you choose in the **Console**  
:::image-end:::  

## Manipulate the DOM

You may manipulate the webpage, too.  For example, if you copy and paste or type the following into the **Console** a green border displays around the header.

```javascript
document.querySelector('header').style.border = '2em solid green'
```  

:::image type="complex" source="../media/console-dom-add-border.msft.png" alt-text="Add a border to an element using Console" lightbox="../media/console-dom-add-border.msft.png":::
    Add a border to an element using **Console**  
:::image-end:::  

Depending on the complexity of the webpage, It may be daunting to find the right element to manipulate.  But you may use the **Inspect** tool to help you.  Say you want to manipulate the `Documentation` part in the header.

:::image type="complex" source="../media/console-dom-highlight-documentation.msft.png" alt-text="Display the element you want to choose on the screen" lightbox="../media/console-dom-highlight-documentation.msft.png":::
    Display the element you want to choose on the screen  
:::image-end:::  

Get a direct reference to this element to manipulate using the following steps.  

1.  Use the **Inspect** tool to choose the element  

    :::image type="complex" source="../media/console-dom-use-inspector-to-get-element.msft.png" alt-text="Choose an element using the Inspector tool" lightbox="../media/console-dom-use-inspector-to-get-element.msft.png":::
        Choose an element using the **Inspector** tool  
    :::image-end:::  
    
1.  Choose it and DevTools jumps to the **Elements** tool.  
1.  Choose the `...` menu next to the element in the DOM view  

    :::image type="complex" source="../media/console-dom-overflow-menu-in-elements.msft.png" alt-text="The chosen element displays in the DOM tree of the Elements tool, choose the overflow menu to get more features" lightbox="../media/console-dom-overflow-menu-in-elements.msft.png":::
        The Chosen element displays in the DOM tree of the **Elements** tool, choose the overflow menu to get more features  
    :::image-end:::  

1.  Choose `Copy` and `Copy JS Path` from the context menus.
 
    :::image type="complex" source="../media/console-dom-copy-JS-path.msft.png" alt-text="Copy the JS path from an element in the DOM view of the Elements tool" lightbox="../media/console-dom-copy-JS-path.msft.png":::
        Copy the JS path from an element in the DOM view of the **Elements** tool  
    :::image-end:::  

1.  Go back to **Console** and paste the command.  

To change the text of the link to `My Playground`, add `.textContent = "My Playground"` to the command you previously pasted.  

:::image type="complex" source="../media/console-dom-change-content.msft.png" alt-text="Change the content of an element using Console" lightbox="../media/console-dom-change-content.msft.png":::
    Change the content of an element using **Console**  
:::image-end:::  

Use any JavaScript DOM manipulations you want to do in the **Console**.  And, to make it more convenient, the **Console** comes with a few helper methods to make it easier for you.

## Helpful Console utility methods  

Many convenience methods and shortcuts are available to you as [Console Utilities][DevtoolsConsoleUtilities].  Some of the methods are incredibly powerful and are things you probably wrote as a series of `console.log()` statements in the past.

### Power to the $

The `$` has special powers in **Console** and you may remember that from jQuery.

*   `$_` stores the result of the last command.  So, if you type `2 + 2` and hit enter, typing `$_` gives you 4.
*   `$0` to `$4` is a stack of the last inspected elements `$0` is always the newest one.  So in the earlier example, you just chose the element in the **Inspector** tool and type `$0.textContent = "My Playground"` to get the same effect.
*   `$x()` allows you to choose DOM elements using XPATH.
*   `$()` and `$$()` are shorter versions of for `document.querySelector()` and `document.querySelectorAll()`.  
    
For example, the following code snippet retrieves all the links in the webpage \(as `$$('a')` is short for `document.querySelectorAll('a')`\) and displays the links as a sortable table to copy and paste, for example, into Excel.

```javascript
console.table($$('a'),['href','text']);
```  

:::image type="complex" source="../media/console-dom-get-all-links.msft.png" alt-text="Get all links in the webpage and displaying the result as a table" lightbox="../media/console-dom-get-all-links.msft.png":::
    Get all links in the webpage and displaying the result as a table  
:::image-end:::  

However, what if you do not want to display this information but get it as data?  The problem with `$$('a')` it that it not only gives the information you want, the link and the text, but also all of the properties for each link.  

:::image type="complex" source="../media/console-dom-too-much-link-information.msft.png" alt-text="The $$ command returning far too much information" lightbox="../media/console-dom-too-much-link-information.msft.png":::
    The `$$` command returning far too much information  
:::image-end:::  

The `$$` shortcut has an interesting extra feature.  Instead of returning a pure `NodeList` like `document.querySelectorAll()`, it gives you all of the `Array` methods.  Use `map()` to cut down the information to what you need.  

```javascript
$$('a').map(a => {
    return {url: a.href, text: a.innerText}
})
```  

The code snippet returns an Array of all the links as objects with `url` and `text` properties.  

:::image type="complex" source="../media/console-dom-filter-link-data.msft.png" alt-text="Use map on $$ to filter information down to the bare minimum" lightbox="../media/console-dom-filter-link-data.msft.png":::
    Use map on `$$` to filter information down to the bare minimum  
:::image-end:::  

You are not done so yet, several links are internal links to this webpage or have empty text.  Get rid of the internal links using the filter method.  

```javascript
$$('a').map(a => {
    return {text: a.innerText, url: a.href}
}).filter(a => {
    return a.text !== '' && !a.url.match('docs.microsoft.com')
})
```  

:::image type="complex" source="../media/console-dom-filter-out-empty-links.msft.png" alt-text="Get the links that are not empty and are external" lightbox="../media/console-dom-filter-out-empty-links.msft.png":::
    Get the links that are not empty and are external  
:::image-end:::  

As displayed at the start of this webpage, you may also change these elements.  For example, the following code snippet creates a green border around all external links:

```javascript
$$('a[href^="https://"]').forEach(
  a => a.style.border = '1px solid green'
)
```  

:::image type="complex" source="../media/console-dom-highlight-links.msft.png" alt-text="To highlight all external links, add a green border around each" lightbox="../media/console-dom-highlight-links.msft.png":::
    To highlight all external links, add a green border around each  
:::image-end:::  

Instead of writing complex JavaScript to filter results, you may use the power of CSS selectors.  

To create to have a table of the `src` and `alt` information of all images in the webpage that are not inline images, complete the following actions.  

1.  Open the **Console**.  
1.  copy and run the following code snippet.  

```javascript
console.table($$('img:not([src^=data])'), ['src','alt'])
```  

:::image type="complex" source="../media/console-dom-complex-CSS-selector.msft.png" alt-text="Choose elements using a complex CSS selector" lightbox="../media/console-dom-complex-CSS-selector.msft.png":::
    Choose elements using a complex CSS selector  
:::image-end:::  

Ready for an even more complex example?  HTML webpages generated from markdown like article, have automatic ID values for each heading to allow you to deep link to that section.  For example, a `# New features` changes to `<h1 id="new-features">New features</h1>`.  

To list of all of the automatic headings to copy and paste, complete the following actions.  

1.  Open the **Console**.  
1.  Type or copy and paste the following code snippet.  

```javascript
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

The result is text that contains content for each heading followed by the full URL that points to it.  

:::image type="complex" source="../media/console-dom-get-generated-headings.msft.png" alt-text="Get all the headings and the generated URLs from the webpage" lightbox="../media/console-dom-get-generated-headings.msft.png":::
    Get all the headings and the generated URLs from the webpage  
:::image-end:::  

### Clean up with clear and copy

When developing in the **Console**, things may get messy.  You may find it frustrating to try to choose results while you copy and paste.  The following two utility methods help you.  

*   `copy()` copies whatever you give it to the clipboard.  This method is especially useful when you mix it with `$_` that copies the last result.
*   `clear()` clears the **Console**.

### Read and monitor events

Two other interesting utility methods of **Console** deal with event handling.

*   `getEventListeners(node)` lists all the event listeners of a node.
*   `monitorEvents(node, events)` monitors and logs the events that happen on a node.

To list all of the event listener assigned to the first form in the webpage, complete the following actions.  

1.  Open the **Console**.  
1.  Type or copy and paste the following code snippet.  
    
    ```javascript
    getEventListeners($('form')); 
    ```  

:::image type="complex" source="../media/console-dom-get-form-events.msft.png" alt-text="Get all events listeners for the first form in the webpage" lightbox="../media/console-dom-get-form-events.msft.png":::
    Get all events listeners for the first form in the webpage  
:::image-end:::  

Monitoring allows you to get a notification in the **Console** every time something changes to the elements you monitor.  You define the events you want to listen to as a second parameter.  Monitoring is important as otherwise any event happening to the element is reported.

To get a notification in the **Console** every time you scroll or resize the window, complete the following actions.  

1.  Open the **Console**.  
1.  Type or copy and paste the following code snippet.  
    
    ```javascript
    monitorEvents(window, ['resize', 'scroll']);
    monitorEvents($0, 'keyup');
    ```  
    
:::image type="complex" source="../media/console-dom-monitor-events.msft.png" alt-text="Console displays every scroll event that happens on the Window" lightbox="../media/console-dom-monitor-events.msft.png":::
    **Console** displays every scroll event that happens on the Window  
:::image-end:::  

To log any key action on the currently chosen element, focus on the search form in the header and select some keys.  

:::image type="complex" source="../media/console-dom-monitor-key-events.msft.png" alt-text="Console displays keyup events that happen on the form" lightbox="../media/console-dom-monitor-key-events.msft.png":::
    **Console** displays `keyup` events that happen on the form  
:::image-end:::  

To stop it, remove the monitoring you set using the following code snippet.  

```javascript
unmonitorEvents(window, ['resize', 'scroll']);
unmonitorEvents($0, 'key');
```  

## Reuse DOM manipulation scripts

As useful as manipulating the DOM from the **Console** is, you may soon run into the limitations as a development platform.  The good news is that the [Sources][DevtoolsSourcesIndex] tool in DevTools offers a fully featured development environment.  In the **Sources** tool, store your scripts for the **Console** as Snippets and run the scripts in a webpage using a keyboard shortcut or the editor.

## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  

[DevtoolsConsoleConsoleJavascript]: ./console-javascript.md "Console as a JavaScript environment | Microsoft Docs"  
[DevtoolsConsoleConsoleLog]: ./console-log.md "Logs in the Console tool | Microsoft Docs"  
[DevtoolsConsoleUtilities]: ./utilities.md "Console Utilities API reference | Microsoft Docs"  

[DevtoolsSourcesIndex]: ../sources/index.md "Sources tool overview | Microsoft Docs"  
