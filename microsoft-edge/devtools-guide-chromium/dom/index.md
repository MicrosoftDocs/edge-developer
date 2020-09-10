---
description: How to view nodes, search for nodes, edit nodes, reference nodes in the Console, break on node changes, and more.
title: Get Started With Viewing And Changing The DOM
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/01/2020 
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
<!-- Copyright Kayce Basques 

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->  





# Get started with viewing and changing the DOM   



Complete these interactive tutorials to learn the basics of viewing and changing the DOM of a page using Microsoft Edge DevTools.  

This tutorial assumes that you know the difference between the DOM and HTML.  See [Appendix: HTML versus the DOM](#appendix-html-versus-the-dom) for an explanation.  

## Open DOM examples  

1.  Hold `Control` \(Windows\) or `Command` \(macOS\) and click **DOM Examples** to open in a new tab.  
    
    [DOM Examples][GlitchDomExamples]  
    
## View DOM nodes   

The DOM Tree of the Elements panel is where you do all DOM-related activities in DevTools.  

### Inspect a node   

When you are interested in a particular DOM node, **Inspect** is a fast way to open DevTools and investigate that node.  

1.  [Open DOM Examples](#open-dom-examples).  
1.  Under **Inspect a Node**, right-click **Michelangelo** and select **Inspect**.  
    
    :::image type="complex" source="../media/dom-glitch-dom-examples-michelangelo-inspect.msft.png" alt-text="Inspect a node" lightbox="../media/dom-glitch-dom-examples-michelangelo-inspect.msft.png":::
       Inspect a node  
    :::image-end:::  
    
    1.  The **Elements** panel of DevTools opens.  `<li>Michelangelo</li>` is highlighted in the **DOM Tree**.  
        
        :::image type="complex" source="../media/dom-glitch-dom-examples-michelangelo-elements-highlighted.msft.png" alt-text="Highlight the Michelangelo node" lightbox="../media/dom-glitch-dom-examples-michelangelo-elements-highlighted.msft.png":::
           Highlight the `Michelangelo` node  
        :::image-end:::  
        
        1.  Click the **Inspect** \(![Inspect][ImageInspectIcon]\) icon in the top-left corner of DevTools.  
            
            :::image type="complex" source="../media/dom-elements-highlighted-select-element-page-inspect.msft.png" alt-text="The Inspect icon" lightbox="../media/dom-elements-highlighted-select-element-page-inspect.msft.png":::
               The **Inspect** icon  
            :::image-end:::  
            
1.  Under **Inspect a Node**, click the **Tokyo** text.  Now, `<li>Tokyo</li>` is highlighted in the DOM Tree.  

Inspecting a node is also the first step towards viewing and changing the styles of a node.  See [Get Started With Viewing And Changing CSS][DevToolsCssGetStarted].  

### Navigate the DOM Tree with a keyboard   

Once you have selected a node in the DOM Tree, you may navigate the DOM Tree with your keyboard.  

1.  [Open DOM Examples](#open-dom-examples).  
1.  Under **Navigate the DOM Tree with a Keyboard**, right-click **Ringo** and select **Inspect**.  `<li>Ringo</li>` is selected in the DOM Tree.  
    
    :::image type="complex" source="../media/dom-elements-highlighted-navigate-dom-tree-keyboard-ringo.msft.png" alt-text="Inspect the Ringo node" lightbox="../media/dom-elements-highlighted-navigate-dom-tree-keyboard-ringo.msft.png":::
       Inspect the `Ringo` node  
    :::image-end:::  
    
    1.  Press the `Up` arrow key 2 times.  `<ul>` is selected.  
        
        :::image type="complex" source="../media/dom-elements-highlighted-navigate-dom-tree-keyboard-ul.msft.png" alt-text="Inspect the ul node" lightbox="../media/dom-elements-highlighted-navigate-dom-tree-keyboard-ul.msft.png":::
           Inspect the `ul` node  
        :::image-end:::  
        
    1.  Press the `Left` arrow key.  The `<ul>` list collapses.  
    1.  Press the `Left` arrow key again.  The parent of the `<ul>` node is selected.  In this case it is the `<div>` with the ID `navigate-the-dom-tree-with-a-keyboard-1`.  
    1.  Press the `Down` arrow key 2 times so that you have re-selected the `<ul>` list that you just collapsed.  It should look like this: `<ul>... </ul>`  
    1.  Press the `Right` arrow key.  The list expands.  

### Scroll into view   

When viewing the DOM Tree, you may find yourself interested in a DOM node that is not currently in the viewport.  For example, suppose that you scrolled to the bottom of the page, and you are interested in the `<h1>` node at the top of the page.  **Scroll into view** lets you quickly reposition the viewport so that you are able to see the node.  

1.  [Open DOM Examples](#open-dom-examples).  
1.  Under **Scroll into View**, right-click **Magritte** and select **Inspect**.  
1.  Scroll to the bottom of the DOM Examples page.  
1.  The `<li>Magritte</li>` node should still be selected in your DOM Tree.  If not, go back to [Scroll into view](#scroll-into-view) and start over.  
1.  Right-click the `<li>Magritte</li>` node and select **Scroll into view**.  Your viewport scrolls back up so that you may see the **Magritte** node.  See [Appendix: Missing options](#appendix-missing-options) if you are not able to see the **Scroll into view** option.
    
    :::image type="complex" source="../media/dom-elements-highlighted-scroll-into-view-dropdown.msft.png" alt-text="Scroll into view" lightbox="../media/dom-elements-highlighted-scroll-into-view-dropdown.msft.png":::
       **Scroll into view**  
    :::image-end:::  

### Search for nodes   

You may search the DOM Tree by string, CSS selector, or XPath selector.  

1.  Focus your cursor on the **Elements** panel.  
1.  Press `Control`+`F` \(Windows\) or `Command`+`F` \(macOS\).  The Search bar opens at the bottom of the DOM Tree.  
1.  Type `The Moon is a Harsh Mistress`.  The last sentence is highlighted in the DOM Tree.  
    
    :::image type="complex" source="../media/dom-elements-highlighted-search-nodes-highlight.msft.png" alt-text="Highlight the query in the Search bar" lightbox="../media/dom-elements-highlighted-search-nodes-highlight.msft.png":::
       Highlight the query in the Search bar  
    :::image-end:::  
    
As mentioned above, the Search bar also supports CSS and XPath selectors.  

## Edit the DOM   

You may edit the DOM on the fly and see how those changes affect the page.  

### Edit content   

To edit the content of a node, double-click the content in the DOM Tree.  

1.  [Open DOM Examples](#open-dom-examples).  
1.  Under **Edit Content**, right-click **Michelle** and select **Inspect**.  
    1.  In the DOM Tree, double-click `Michelle`.  In other words, double-click the text between `<li>` and `</li>`.  The text is highlighted to indicate that it is selected.  
        
        :::image type="complex" source="../media/dom-elements-highlighted-edit-content.msft.png" alt-text="Edit the text" lightbox="../media/dom-elements-highlighted-edit-content.msft.png":::
           Edit the text  
        :::image-end:::  
        
    1.  Delete `Michelle`, type `Leela`, then press `Enter` to confirm the change.  The text in the DOM changes from **Michelle** to **Leela**.  

### Edit attributes   

To edit attributes, double-click the attribute name or value.  Follow the instructions to learn how to add attributes to a node.  

1.  [Open DOM Examples](#open-dom-examples).  
1.  Under **Edit Attributes**, right-click **Howard** and select **Inspect**.  
1.  Double-click `<li>`.  The text is highlighted to indicate that the node is selected.  
    
    :::image type="complex" source="../media/dom-elements-highlighted-edit-attributes-highlighted.msft.png" alt-text="Edit the node" lightbox="../media/dom-elements-highlighted-edit-attributes-highlighted.msft.png":::
       Edit the node  
    :::image-end:::  
    
1.  Press the `Right` arrow key, add a space, type `style="background-color:gold"`, and then press `Enter`.  The background color of the node changes to gold.  
    
    :::image type="complex" source="../media/dom-elements-highlighted-edit-attributes-inline-css.msft.png" alt-text="Add a style attribute to the node" lightbox="../media/dom-elements-highlighted-edit-attributes-inline-css.msft.png":::
       Add a `style` attribute to the node  
    :::image-end:::  
    
### Edit node type   

To edit the type of a node, double-click the type and then type in the new type.  

1.  [Open DOM Examples](#open-dom-examples).  
1.  Under **Edit Node Type**, right-click **Hank** and select **Inspect**.  
    1.  Double-click `<li>`.  The text `li` is highlighted.  
    1.  Delete `li`, type `button`, then press `Enter`.  The `<li>` node changes to a `<button>` node.  
        
        :::image type="complex" source="../media/dom-elements-highlighted-edit-node-type-button.msft.png" alt-text="Change the node type to button" lightbox="../media/dom-elements-highlighted-edit-node-type-button.msft.png":::
           Change the node type to `button`  
        :::image-end:::  
        
### Reorder DOM nodes   

Drag nodes to reorder them.  

1.  [Open DOM Examples](#open-dom-examples).  
1.  Under **Reorder DOM Nodes**, right-click **Elvis Presley** and select **Inspect**.  
    
    > [!NOTE]
    > It is the last item in the list.  
    
    1.  In the DOM Tree, drag `<li>Elvis Presley</li>` to the top of the list.  
        
        :::image type="complex" source="../media/dom-elements-reorder-dom-nodes.msft.png" alt-text="Drag the node to the top of the list" lightbox="../media/dom-elements-reorder-dom-nodes.msft.png":::
           Drag the node to the top of the list  
        :::image-end:::  
        
### Force state   

You are able to force nodes to remain in states including `:active`, `:hover`, `:focus`, `:visited`, and `:focus-within`.  

1.  [Open DOM Examples](#open-dom-examples).  
1.  Under **Force state**, hover over **The Lord of the Flies**.  The background color becomes orange.  
    1.  Right-click **The Lord of the Flies** and select **Inspect**.  
    1.  Right-click `<li class="demo--hover">The Lord of the Flies</li>` and select **Force State** > **:hover**.  See [Appendix: Missing options](#appendix-missing-options) if you do not see this option.  The background color remains orange even though you are not actually hovering over the node.  

### Hide a node   

Press `H` to hide a node.  

1.  [Open DOM Examples](#open-dom-examples).  
1.  Under **Hide a node**, right-click **The Stars My Destination** and select **Inspect**.  
    1.  Press the `H` key.  The node is hidden.  
        
        :::image type="complex" source="../media/dom-elements-highlighted-hide-a-node.msft.png" alt-text="What the node looks like in the DOM Tree after it is hidden" lightbox="../media/dom-elements-highlighted-hide-a-node.msft.png":::
           What the node looks like in the DOM Tree after it is hidden  
        :::image-end:::  
        
    1.  Press the `H` key again.  The node is shown again.  

### Delete a node   

Press `Delete` to delete a node.  

1.  [Open DOM Examples](#open-dom-examples).  
1.  Under **Delete a Node**, right-click **Foundation** and select **Inspect**.  
    1.  Press the `Delete` key.  The node is deleted.  
    1.  Press `Control`+`Z` \(Windows\) or `Command`+`Z` \(macOS\).  The last action is undone and the node reappears.  

## Access nodes in the Console   

DevTools provides a few shortcuts for accessing DOM nodes from the Console, or getting JavaScript references to each one.  

### Reference the currently-selected node with $0   

When you inspect a node, the `== $0` text next to the node means that you may reference this node in the Console with the variable `$0`.  

1.  [Open DOM Examples](#open-dom-examples).  
1.  Under **Reference the currently-selected node with $0**, right-click **The Left Hand of Darkness** and select **Inspect**.  
    1.  Press the `Escape` key to open the Console Drawer.  
    1.  Type `$0` and press the `Enter` key.  The result of the expression shows that `$0` evaluates to `<li>The Left Hand of Darkness</li>`.  
        
        :::image type="complex" source="../media/dom-elements-highlighted-reference-currently-selected-node-console-1.msft.png" alt-text="The result of the first $0 expression in the Console" lightbox="../media/dom-elements-highlighted-reference-currently-selected-node-console-1.msft.png":::
            The result of the first `$0` expression in the **Console**  
        :::image-end:::  
        
    1.  Hover over the result.  The node is highlighted in the viewport.  
    1.  Click `<li>Dune</li>` in the DOM Tree, type `$0` in the Console again, and then press `Enter` again.  Now, `$0` evaluates to `<li>Dune</li>`.  
        
        :::image type="complex" source="../media/dom-elements-highlighted-reference-currently-selected-node-console-2.msft.png" alt-text="The result of the second $0 expression in the Console" lightbox="../media/dom-elements-highlighted-reference-currently-selected-node-console-2.msft.png":::
           The result of the second `$0` expression in the **Console**  
        :::image-end:::  
        
### Store as global variable   

If you need to refer back to a node many times, store it as a global variable.  

1.  [Open DOM Examples](#open-dom-examples).  
1.  Under **Store as global variable**, right-click **The Big Sleep** and select **Inspect**.  
    1.  Right-click `<li>The Big Sleep</li>` in the DOM Tree and select **Store as global variable**.  See [Appendix: Missing options](#appendix-missing-options) if you do not see this option.  
    1.  Type `temp1` in the Console and then press `Enter`.  The result of the expression shows that the variable evaluates to the node.  
        
        :::image type="complex" source="../media/dom-elements-highlighted-store-global-variable-console-temp1.msft.png" alt-text="The result of the temp1 expression" lightbox="../media/dom-elements-highlighted-store-global-variable-console-temp1.msft.png":::
           The result of the `temp1` expression  
        :::image-end:::  
        
### Copy JS path   

Copy the JavaScript path to a node when you need to reference it in an automated test.  

1.  [Open DOM Examples](#open-dom-examples).  
1.  Under **Copy JS path**, right-click **The Brothers Karamazov** and select **Inspect**.  
    1.  Right-click `<li>The Brothers Karamazov</li>` in the DOM Tree and select **Copy** > **Copy JS Path**.  A `document.querySelector()` expression that resolves to the node has been copied to your clipboard.  
    1.  Press `Control`+`V` \(Windows\) or `Command`+`V` \(macOS\) to paste the expression into the Console.  
    1.  Press `Enter` to evaluate the expression.
        
        :::image type="complex" source="../media/dom-elements-highlighted-copy-js-path-console-query-selector.msft.png" alt-text="The result of the Copy JS Path expression" lightbox="../media/dom-elements-highlighted-copy-js-path-console-query-selector.msft.png":::
           The result of the **Copy JS Path** expression  
        :::image-end:::  
        
## Break on DOM changes   

DevTools enables you to pause the JavaScript of a page when the JavaScript modifies the DOM.  

### Break on attribute modifications   

Use attribute modification breakpoints when you want to pause the JavaScript that causes any attribute of a node to change.  

1.  [Open DOM Examples](#open-dom-examples).  
1.  Under **Break on attribute modifications**, right-click **Sauerkraut** and select **Inspect**.  
    1.  In the DOM Tree, right-click `<li id="target">Sauerkraut</li>` and select **Break On** > **Attribute Modifications**.  See [Appendix: Missing options](#appendix-missing-options) if you are not able to see this option.
        
        :::image type="complex" source="../media/dom-elements-highlighted-break-attribute-modifications-break-on-attribute-modifications.msft.png" alt-text="Break on attribute modifications" lightbox="../media/dom-elements-highlighted-break-attribute-modifications-break-on-attribute-modifications.msft.png":::
           **Break on attribute modifications**  
        :::image-end:::  
        
    1.  In the next step you are going to be instructed to click a button that pauses the code of the page.  After the page is paused you are no longer able to scroll the page.  You must click **Resume Script** \(![Resume Script][ImageResumeScriptIcon]\) in order to make the page scrollable again.
        
        :::image type="complex" source="../media/dom-break-attribute-modifications-sources-paused-on.msft.png" alt-text="Where to resume script running" lightbox="../media/dom-break-attribute-modifications-sources-paused-on.msft.png":::
           Where to resume script running  
        :::image-end:::  
        
    1.  Click the **Set Background** button above.  This sets the `style` attribute of the node to `background-color:thistle`.  DevTools pauses the page and highlights the code that caused the attribute to change.  
    1.  Click **Resume Script** \(![Resume Script][ImageResumeScriptIcon]\), as mentioned earlier.  
    
### Break on node removal   

If you want to pause when a particular node is removed, use node removal breakpoints.  

1.  [Open DOM Examples](#open-dom-examples).  
1.  Under **Break on Node Removal**, right-click **Neuromancer** and select **Inspect**.  
    1.  In the DOM Tree, right-click `<li id="target">Neuromancer</li>` and select **Break On** > **Node Removal**.  See [Appendix: Missing options](#appendix-missing-options) if you are not able to see this option.  
    1.  Click the **Delete** button above.  DevTools pauses the page and highlights the code that caused the node to be removed.  
    1.  Click **Resume Script** \(![Resume Script][ImageResumeScriptIcon]\).  
    
### Break on subtree modifications   

After you put a subtree modification breakpoint on a node, DevTools pauses the page when any of the descendants of the node are added or removed.  

1.  [Open DOM Examples](#open-dom-examples).  
1.  Under **Break on Subtree Modifications**, right-click **A Fire Upon The Deep** and select **Inspect**.  
    1.  In the DOM Tree, right-click `<ul id="target">`, which is the node above `<li>A Fire Upon the Deep</li>`, and select **Break On** > **Subtree Modifications**.  See [Appendix: Missing options](#appendix-missing-options) if you are not able to see this option.  
    1.  Click **Add Child**.  The code pauses because a `<li>` node was added to the list.  
    1.  Click **Resume Script** \(![Resume Script][ImageResumeScriptIcon]\).  
    
## Next steps   

That covers most of the DOM-related features in DevTools.  You are able to discover the rest of them by right-clicking nodes in the DOM Tree and experimenting with the other options that were not covered in this tutorial.  See also [Elements panel keyboard shortcuts][DevToolsShortcutsElements].  

Check out the [Microsoft Edge DevTools homepage][MicrosoftEdgeDevTools] to discover everything else you are able to do with DevTools.  

<!--See [Community](../index#community) if you want to contact the DevTools team or get help from the DevTools community.  -->  



## Appendix: HTML versus the DOM   

The following section quickly explains the difference between HTML and the DOM.  

:::row:::
   :::column span="":::
      When you use a web browser to request a page, the server returns HTML like the following code snippet  

      ```html
      <!doctype html>
      <html>
          <head>
              <title>Hello, world!</title>
          </head>
          <body>
              <h1>Hello, world!</h1>
              <p>This is a hypertext document on the World Wide Web.</p>
              <script src="/script.js" async></script>
          </body>
      </html>
      ```  
   :::column-end:::
   :::column span="":::
      The browser parses the HTML and creates a tree of objects like the following list.  
      
      ```dom
      html
          head
              title
          body
              h1
              p
              script
      ```  
   :::column-end:::
:::row-end:::  

This tree of objects, or nodes, representing the content of the page is called the DOM.  

:::row:::
   :::column span="":::
      Right now it looks the same as the HTML, but suppose that the script referenced at the bottom of the HTML runs the following code snippet.  
      
      ```javascript
      const h1 = document.querySelector('h1');
      h1.parentElement.removeChild(h1);
      const p = document.createElement('p');
      p.textContent = 'Wildcard!';
      document.body.appendChild(p);
      ```  
   :::column-end:::
   :::column span="":::
      That code removes the `h1` node and adds another `p` node to the DOM.  The complete DOM now displays the following list.  
      
      ```dom
      html
          head
              title
          body
              p
              script
              p
      ```  
   :::column-end:::
:::row-end:::  

The HTML for the page is now different than the DOM.  In other words, HTML represents initial page content, and the DOM represents current page content.  When JavaScript adds, removes, or edits nodes, the DOM becomes different than the HTML.  

See [Introduction to the DOM][MDNIntroductionToDOM] to learn more.  

<!--
## Appendix: Scroll into view   

This is a continuation of the [Scroll into view](#scroll-into-view) section.  Follow the instructions below to complete the section.  

1.  The `<li>Magritte</li>` node should still be selected in your DOM Tree.  If not, go back to [Scroll into view](#scroll-into-view) and start over.  
1.  Right-click the `<li>Magritte</li>` node and select **Scroll into view**.  Your viewport scrolls back up so that you may see the **Magritte** node.  See [Appendix: Missing options](#appendix-missing-options) if you are not able to see the **Scroll into view** option.
    
    > ##### Figure 19  
    > Scroll into view  
    > :::image type="complex" source="../media/dom-elements-highlighted-scroll-into-view-dropdown.msft.png" alt-text="Scroll into view" lightbox="../media/dom-elements-highlighted-scroll-into-view-dropdown.msft.png":::
   Scroll into view  
:::image-end:::  
    -->  

## Appendix: Missing options   

Many of the instructions in this tutorial instruct you to right-click a node in the DOM Tree and then select an option from the context menu that pops up.  If you do not see the specified option in the context menu, try right-clicking away from the node text.  

:::image type="complex" source="../media/dom-elements-highlighted-right-click-right-side.msft.png" alt-text="Where to click if you are not seeing all the options" lightbox="../media/dom-elements-highlighted-right-click-right-side.msft.png":::
   Where to click if you are not seeing all the options  
:::image-end:::  

<!-- image links -->  

[ImageInspectIcon]: ../media/inspect-icon.msft.png  
[ImageResumeScriptIcon]: ../media/resume-script-icon.msft.png  

<!-- links -->  

[MicrosoftEdgeDevTools]: ../../devtools-guide-chromium.md "Microsoft Edge \(Chromium\) Developer Tools | Microsoft Docs"  
[DevToolsCssGetStarted]: ../css/index.md "Get Started With Viewing And Changing CSS | Microsoft Docs"  
[DevToolsShortcutsElements]: ../shortcuts.md#elements-panel-keyboard-shortcuts "Elements panel keyboard shortcuts - Microsoft Edge DevTools Keyboard Shortcuts | Microsoft Docs"  

[GlitchDomExamples]: https://microsoft-edge-chromium-devtools.glitch.me/static/dom "Microsoft Edge (Chromium) DevTools DOM Example | Glitch"

[MDNIntroductionToDOM]: https://developer.mozilla.org/docs/Web/API/Document_Object_Model/Introduction "Introduction to the DOM | MDN"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/dom/index) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
