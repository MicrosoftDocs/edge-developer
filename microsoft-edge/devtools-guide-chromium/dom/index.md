---
title: Get Started With Viewing And Changing The DOM
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/20/2020
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





# Get Started With Viewing And Changing The DOM   



Complete these interactive tutorials to learn the basics of viewing and changing the DOM of a page using Microsoft Edge DevTools.  

This tutorial assumes that you know the difference between the DOM and HTML.  See [Appendix: HTML versus the DOM](#appendix-html-versus-the-dom) for an explanation.  

## Open DOM Examples  

1.  Hold `Control` \(Windows\) or `Command` \(macOS\) and click **DOM Examples** to open in a new tab.  
    
    [DOM Examples][GlitchDomExamples]  
    
## View DOM nodes   

The DOM Tree of the Elements panel is where you do all DOM-related activities in DevTools.  

### Inspect a node   

When you are interested in a particular DOM node, **Inspect** is a fast way to open DevTools and investigate that node.  

1.  [Open DOM Examples](#open-dom-examples).  
1.  Under **Inspect a Node**, right-click **Michelangelo** and select **Inspect**.  
    
    > ##### Figure 1  
    > Inspecting a node  
    > ![Inspecting a node][ImageInspectingNode]  
    
    1.  The **Elements** panel of DevTools opens.  `<li>Michelangelo</li>` is highlighted in the **DOM Tree**.  
        
        > ##### Figure 2  
        > Highlighting the Michelangelo node  
        > ![Highlighting the Michelangelo node][ImageHighlightingMichelangeloNode]  
        
        1.  Click the **Inspect** ![Inspect][ImageInspectIcon] icon in the top-left corner of DevTools.  
            
            > ##### Figure 3  
            > The Inspect icon  
            > ![The Inspect icon][ImageInspect]  
            
1.  Under **Inspect a Node**, click the **Tokyo** text.  Now, `<li>Tokyo</li>` is highlighted in the DOM Tree.  

Inspecting a node is also the first step towards viewing and changing the styles of a node.  See [Get Started With Viewing And Changing CSS][DevToolsCssGetStarted].  

### Navigate the DOM Tree with a keyboard   

Once you have selected a node in the DOM Tree, you may navigate the DOM Tree with your keyboard.  

1.  [Open DOM Examples](#open-dom-examples).  
1.  Under **Navigate the DOM Tree with a Keyboard**, right-click **Ringo** and select **Inspect**.  `<li>Ringo</li>` is selected in the DOM Tree.  
    
    > ##### Figure 4  
    > Inspecting the Ringo node  
    > ![Inspecting the Ringo node][ImageInspectingRingoNode]  
    
    1.  Press the `Up` arrow key 2 times.  `<ul>` is selected.  
        
        > ##### Figure 5  
        > Inspecting the ul node  
        > ![Inspecting the ul node][ImageInspectingUlNode]  
        
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
    
    > ##### Figure 6  
    > Scroll into view  
    > ![Scroll into view][ImageScrollView]  

### Search for nodes   

You may search the DOM Tree by string, CSS selector, or XPath selector.  

1.  Focus your cursor on the **Elements** panel.  
1.  Press `Control`+`F` \(Windows\) or `Command`+`F` \(macOS\).  The Search bar opens at the bottom of the DOM Tree.  
1.  Type `The Moon is a Harsh Mistress`.  The last sentence is highlighted in the DOM Tree.  
    
    > ##### Figure 7  
    > Highlighting the query in the Search bar  
    > ![Highlighting the query in the Search bar][ImageHighlightingQuerySearchBar]  
    
As mentioned above, the Search bar also supports CSS and XPath selectors.  

## Edit the DOM   

You may edit the DOM on the fly and see how those changes affect the page.  

### Edit content   

To edit the content of a node, double-click the content in the DOM Tree.  

1.  [Open DOM Examples](#open-dom-examples).  
1.  Under **Edit Content**, right-click **Michelle** and select **Inspect**.  
    1.  In the DOM Tree, double-click `Michelle`.  In other words, double-click the text between `<li>` and `</li>`.  The text is highlighted to indicate that it is selected.  
        
        > ##### Figure 8  
        > Editing the text  
        > ![Editing the text][ImageEditingText]  
        
    1.  Delete `Michelle`, type `Leela`, then press `Enter` to confirm the change.  The text in the DOM changes from **Michelle** to **Leela**.  

### Edit attributes   

To edit attributes, double-click the attribute name or value.  Follow the instructions to learn how to add attributes to a node.  

1.  [Open DOM Examples](#open-dom-examples).  
1.  Under **Edit Attributes**, right-click **Howard** and select **Inspect**.  

1.  Double-click `<li>`.  The text is highlighted to indicate that the node is selected.  
    
    > ##### Figure 9  
    > Editing the node  
    > ![Editing the node][ImageEditingNode]  
    
1.  Press the `Right` arrow key, add a space, type `style="background-color:gold"`, and then press `Enter`.  The background color of the node changes to gold.  
    
    > ##### Figure 10  
    > Adding a style attribute to the node  
    > ![Adding a style attribute to the node][ImageAddingStyleAttributeNode]  
    
### Edit node type   

To edit the type of a node, double-click the type and then type in the new type.  

1.  [Open DOM Examples](#open-dom-examples).  
1.  Under **Edit Node Type**, right-click **Hank** and select **Inspect**.  
    1.  Double-click `<li>`.  The text `li` is highlighted.  
    1.  Delete `li`, type `button`, then press `Enter`.  The `<li>` node changes to a `<button>` node.  
        
        > ##### Figure 11  
        > Changing the node type to button  
        > ![Changing the node type to button][ImageChangingNodeButton]  
        
### Reorder DOM nodes   

Drag nodes to reorder them.  

1.  [Open DOM Examples](#open-dom-examples).  
1.  Under **Reorder DOM Nodes**, right-click **Elvis Presley** and select **Inspect**.  
    
    > [!NOTE]
    > It is the last item in the list.  
    
    1.  In the DOM Tree, drag `<li>Elvis Presley</li>` to the top of the list.  
        
        > ##### Figure 12  
        > Dragging the node to the top of the list  
        > ![Dragging the node to the top of the list][ImageDraggingNodeTopList]  
        
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
        
        > ##### Figure 13  
        > What the node looks like in the DOM Tree after it is hidden  
        > ![What the node looks like in the DOM Tree after it is hidden][ImageNodeDomTreeAfterHidden]  
        
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
        
        > ##### Figure 14  
        > The result of the first `$0` expression in the Console  
        > ![The result of the first $0 expression in the Console][ImageFirstConsole]  
        
    1.  Hover over the result.  The node is highlighted in the viewport.  
    1.  Click `<li>Dune</li>` in the DOM Tree, type `$0` in the Console again, and then press `Enter` again.  Now, `$0` evaluates to `<li>Dune</li>`.  
        
        > ##### Figure 15  
        > The result of the second `$0` expression in the Console
        > ![The result of the second $0 expression in the Console][ImageSecondConsole]  
        
### Store as global variable   

If you need to refer back to a node many times, store it as a global variable.  

1.  [Open DOM Examples](#open-dom-examples).  
1.  Under **Store as global variable**, right-click **The Big Sleep** and select **Inspect**.  
    1.  Right-click `<li>The Big Sleep</li>` in the DOM Tree and select **Store as global variable**.  See [Appendix: Missing options](#appendix-missing-options) if you do not see this option.  
    1.  Type `temp1` in the Console and then press `Enter`.  The result of the expression shows that the variable evaluates to the node.  
        
        > ##### Figure 16  
        > The result of the temp1 expression  
        > ![The result of the temp1 expression][ImageResultTemp1]  
        
### Copy JS path   

Copy the JavaScript path to a node when you need to reference it in an automated test.  

1.  [Open DOM Examples](#open-dom-examples).  
1.  Under **Copy JS path**, right-click **The Brothers Karamazov** and select **Inspect**.  
    1.  Right-click `<li>The Brothers Karamazov</li>` in the DOM Tree and select **Copy** > **Copy JS Path**.  A `document.querySelector()` expression that resolves to the node has been copied to your clipboard.  
    1.  Press `Control`+`V` \(Windows\) or `Command`+`V` \(macOS\) to paste the expression into the Console.  
    1.  Press `Enter` to evaluate the expression.
        
        > ##### Figure 17  
        > The result of the Copy JS Path expression  
        > ![The result of the Copy JS Path expression][ImageResultCopyJSPath]  
        
## Break on DOM changes   

DevTools enables you to pause the JavaScript of a page when the JavaScript modifies the DOM.  

### Break on attribute modifications   

Use attribute modification breakpoints when you want to pause the JavaScript that causes any attribute of a node to change.  

1.  [Open DOM Examples](#open-dom-examples).  
1.  Under **Break on attribute modifications**, right-click **Sauerkraut** and select **Inspect**.  
    1.  In the DOM Tree, right-click `<li id="target">Sauerkraut</li>` and select **Break On** > **Attribute Modifications**.  See [Appendix: Missing options](#appendix-missing-options) if you are not able to see this option.
        
        > ##### Figure 18  
        > Break on attribute modifications  
        > ![Break on attribute modifications][ImageBreakAttributeModification]  
        
    1.  In the next step you are going to be instructed to click a button that pauses the code of the page.  After the page is paused you are no longer able to scroll the page.  You must click **Resume Script Execution** ![Resume Script Execution][ImageResumeScriptIcon] in order to make the page scrollable again.
        
        > ##### Figure 19  
        > Where to resume script running  
        > ![Where to resume script running][ImageResumeScript]  
        
    1.  Click the **Set Background** button above.  This sets the `style` attribute of the node to `background-color:thistle`.  DevTools pauses the page and highlights the code that caused the attribute to change.  
    1.  Click **Resume Script Execution** ![Resume Script Execution][ImageResumeScriptIcon], as mentioned earlier.  
    
### Break on node removal   

If you want to pause when a particular node is removed, use node removal breakpoints.  

1.  [Open DOM Examples](#open-dom-examples).  
1.  Under **Break on Node Removal**, right-click **Neuromancer** and select **Inspect**.  
    1.  In the DOM Tree, right-click `<li id="target">Neuromancer</li>` and select **Break On** > **Node Removal**.  See [Appendix: Missing options](#appendix-missing-options) if you are not able to see this option.  
    1.  Click the **Delete** button above.  DevTools pauses the page and highlights the code that caused the node to be removed.  
    1.  Click **Resume Script Execution** ![Resume Script Execution][ImageResumeScriptIcon].  
    
### Break on subtree modifications   

After you put a subtree modification breakpoint on a node, DevTools pauses the page when any of the descendants of the node are added or removed.  

1.  [Open DOM Examples](#open-dom-examples).  
1.  Under **Break on Subtree Modifications**, right-click **A Fire Upon The Deep** and select **Inspect**.  
    1.  In the DOM Tree, right-click `<ul id="target">`, which is the node above `<li>A Fire Upon the Deep</li>`, and select **Break On** > **Subtree Modifications**.  See [Appendix: Missing options](#appendix-missing-options) if you are not able to see this option.  
    1.  Click **Add Child**.  The code pauses because a `<li>` node was added to the list.  
    1.  Click **Resume Script Execution** ![Resume Script Execution][ImageResumeScriptIcon].  
    
## Next steps   

That covers most of the DOM-related features in DevTools.  You are able to discover the rest of them by right-clicking nodes in the DOM Tree and experimenting with the other options that were not covered in this tutorial.  See also [Elements panel keyboard shortcuts][DevToolsShortcutsElements].  

Check out the [Microsoft Edge DevTools homepage][MicrosoftEdgeDevTools] to discover everything else you are able to do with DevTools.  

<!--See [Community](../index.md#community) if you want to contact the DevTools team or get help from the DevTools community.  -->  



## Appendix: HTML versus the DOM   

This section quickly explains the difference between HTML and the DOM.  

When you use a web browser to request a page, the server returns HTML like this:  

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

The browser parses the HTML and creates a tree of objects like this:  

```dom
html
  head
    title
  body
    h1
    p
    script
```  

This tree of objects, or nodes, representing the content of the page is called the DOM.  Right now it looks the same as the HTML, but suppose that the script referenced at the bottom of the HTML runs this code:  

```javascript
const h1 = document.querySelector('h1');
h1.parentElement.removeChild(h1);
const p = document.createElement('p');
p.textContent = 'Wildcard!';
document.body.appendChild(p);
```  

That code removes the `h1` node and adds another `p` node to the DOM.  The complete DOM now looks like this:  

```dom
html
  head
    title
  body
    p
    script
    p
```  

The HTML for the page is now different than the DOM.  In other words, HTML represents initial page content, and the DOM represents current page content.  When JavaScript adds, removes, or edits nodes, the DOM becomes different than the HTML.  

See [Introduction to the DOM][MDNIntroductionToDOM] to learn more.  

<!--
## Appendix: Scroll into view   

This is a continuation of the [Scroll into view](#scroll-into-view) section.  Follow the instructions below to complete the section.  

1.  The `<li>Magritte</li>` node should still be selected in your DOM Tree.  If not, go back to [Scroll into view](#scroll-into-view) and start over.  
1.  Right-click the `<li>Magritte</li>` node and select **Scroll into view**.  Your viewport scrolls back up so that you may see the **Magritte** node.  See [Appendix: Missing options](#appendix-missing-options) if you are not able to see the **Scroll into view** option.
    
    > ##### Figure 19  
    > Scroll into view  
    > ![Scroll into view][ImageScrollView]  
    -->  

## Appendix: Missing options   

Many of the instructions in this tutorial instruct you to right-click a node in the DOM Tree and then select an option from the context menu that pops up.  If you do not see the specified option in the context menu, try right-clicking away from the node text.  

> ##### Figure 20  
> Where to click if you are not seeing all the options  
> ![Where to click if you are not seeing all the options][ImageNotSeeingAllOptions]  

<!-- image links -->  

[ImageInspectIcon]: images/inspect-icon.msft.png  
[ImageResumeScriptIcon]: images/resume-script-execution-icon.msft.png  

[ImageInspectingNode]: images/glitch-dom-examples-michelangelo-inspect.msft.png "Figure 1: Inspecting a node"  
[ImageHighlightingMichelangeloNode]: images/glitch-dom-examples-michelangelo-elements-highlighted.msft.png "Figure 2: Highlighting the Michelangelo node"  
[ImageInspect]: images/elements-highlighted-select-element-page-inspect.msft.png "Figure 3: The Inspect icon"  
[ImageInspectingRingoNode]: images/elements-highlighted-navigate-dom-tree-keyboard-ringo.msft.png "Figure 4: Inspecting the Ringo node"  
[ImageInspectingUlNode]: images/elements-highlighted-navigate-dom-tree-keyboard-ul.msft.png "Figure 5: Inspecting the ul node"  
[ImageScrollView]: images/elements-highlighted-scroll-into-view-dropdown.msft.png "Figure 6: Scroll into view"  
[ImageHighlightingQuerySearchBar]: images/elements-highlighted-search-nodes-highlight.msft.png "Figure 7: Highlighting the query in the Search bar"  
[ImageEditingText]: images/elements-highlighted-edit-content.msft.png "Figure 8: Editing the text"  
[ImageEditingNode]: images/elements-highlighted-edit-attributes-highlighted.msft.png "Figure 9: Editing the node"  
[ImageAddingStyleAttributeNode]: images/elements-highlighted-edit-attributes-inline-css.msft.png "Figure 10: Adding a style attribute to the node"  
[ImageChangingNodeButton]: images/elements-highlighted-edit-node-type-button.msft.png "Figure 11: Changing the node type to button"  
[ImageDraggingNodeTopList]: images/elements-reorder-dom-nodes.msft.png "Figure 12: Dragging the node to the top of the list"  
[ImageNodeDomTreeAfterHidden]: images/elements-highlighted-hide-a-node.msft.png "Figure 13: What the node looks like in the DOM Tree after it is hidden"  
[ImageFirstConsole]: images/elements-highlighted-reference-currently-selected-node-console-1.msft.png "Figure 14: The result of the first $0 expression in the Console"  
[ImageSecondConsole]: images/elements-highlighted-reference-currently-selected-node-console-2.msft.png "Figure 15: The result of the second $0 expression in the Console"  
[ImageResultTemp1]: images/elements-highlighted-store-global-variable-console-temp1.msft.png "Figure 16: The result of the temp1 expression"  
[ImageResultCopyJSPath]: images/elements-highlighted-copy-js-path-console-query-selector.msft.png "Figure 17: The result of the Copy JS Path expression"  
[ImageBreakAttributeModification]: images/elements-highlighted-break-attribute-modifications-break-on-attribute-modifications.msft.png "Figure 18: Break on attribute modifications"  
[ImageResumeScript]: images/break-attribute-modifications-sources-paused-on.msft.png "Figure 19: Where to resume script running"  
[ImageNotSeeingAllOptions]: images/elements-highlighted-right-click-right-side.msft.png "Figure 20: Where to click if you are not seeing all the options"  

<!-- links -->  

[DevToolsCssGetStarted]: ../css/index.md "Get Started With Viewing And Changing CSS"  
[DevToolsShortcutsElements]: ../shortcuts.md#elements-panel-keyboard-shortcuts "Elements panel keyboard shortcuts - Microsoft Edge DevTools Keyboard Shortcuts"  

[MDNIntroductionToDOM]: https://developer.mozilla.org/docs/Web/API/Document_Object_Model/Introduction "Introduction to the DOM | MDN"  
[GlitchDomExamples]: https://microsoft-edge-chromium-devtools.glitch.me/static/dom "Microsoft Edge (Chromium) DevTools DOM Example | Glitch"
[MicrosoftEdgeDevTools]: https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium "Microsoft Edge \(Chromium\) Developer Tools"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/dom/index) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools & Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
