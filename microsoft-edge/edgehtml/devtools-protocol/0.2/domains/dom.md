---
description: Reference for the DOM Domain. This domain exposes DOM read/write operations. Each DOM Node is represented with its mirror object that has an `id`. This `id` can be used to get additional information on the Node, resolve it into the JavaScript object wrapper, etc. It is important that client receives DOM events only for the nodes that are known to the client. Backend keeps track of the nodes that were sent to the client and never sends the same node twice. It is client's responsibility to collect information about the nodes that were sent to the client.<p>Note that `iframe` owner elements will return corresponding document elements as their child nodes.</p>
title: DOM Domain - DevTools Protocol Version 0.2
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: reference
ms.prod: microsoft-edge
ms.custom: seodec18
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# DOM

This domain exposes DOM read/write operations. Each DOM Node is represented with its mirror object that has an `id`. This `id` can be used to get additional information on the Node, resolve it into the JavaScript object wrapper, etc. It is important that client receives DOM events only for the nodes that are known to the client. Backend keeps track of the nodes that were sent to the client and never sends the same node twice. It is client's responsibility to collect information about the nodes that were sent to the client.<p>Note that `iframe` owner elements will return corresponding document elements as their child nodes.</p>

| | |
|-|-|
| [**Methods**](#methods) | [enable](#enable), [disable](#disable), [getDocument](#getdocument), [highlightNode](#highlightnode), [hideHighlight](#hidehighlight), [requestChildNodes](#requestchildnodes), [getAttributes](#getattributes), [getOuterHTML](#getouterhtml), [pushNodesByBackendIdsToFrontend](#pushnodesbybackendidstofrontend), [querySelector](#queryselector), [querySelectorAll](#queryselectorall), [requestNode](#requestnode), [resolveNode](#resolvenode), [setInspectedNode](#setinspectednode) |
| [**Events**](#events) | [setChildNodes](#setchildnodes), [attributeModified](#attributemodified), [attributeRemoved](#attributeremoved), [characterDataModified](#characterdatamodified), [childNodeInserted](#childnodeinserted), [childNodeRemoved](#childnoderemoved), [documentUpdated](#documentupdated) |
| [**Types**](#types) | [RGBA](#rgba), [HighlightConfig](#highlightconfig), [NodeId](#nodeid), [Node](#node), [BackendNodeId](#backendnodeid), [PseudoType](#pseudotype) |
| [**Dependencies**](#dependencies) | [Runtime](runtime.md) |
## Methods

### enable
Enables DOM agent for the given page.

</p>

---

### disable
Disables DOM agent for the given page. Disabling the DOM will invalidate any previously valid nodeIds.

</p>

---

### getDocument
Returns the root DOM node (and optionally the subtree) to the caller. Calling `getDocument` will invalidate any previously valid nodeIds

<table>
    <thead>
        <tr>
            <th>Parameters</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>depth</td>
            <td><code class="flyout">integer</code></td>
            <td>The maximum depth at which children should be retrieved, defaults to 2. Use -1 for entire subtree.</td>
        </tr>
        <tr>
            <td>pierce</td>
            <td><code class="flyout">boolean</code></td>
            <td>Whether or not iframes should be traversed when returning the subtree (default is false).</td>
        </tr>
    </tbody>
</table>
<table>
    <thead>
        <tr>
            <th>Returns</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>root</td>
            <td><a href="#node"><code class="flyout">Node</code></a></td>
            <td>Resulting Node.</td>
        </tr>
    </tbody>
</table>
</p>

---

### highlightNode
Higlights DOM node with given id or object wrapper. nodeId, backendNodeId, or objectId must be specified.

<table>
    <thead>
        <tr>
            <th>Parameters</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>nodeId <br/> <i>optional</i></td>
            <td><a href="#nodeid"><code class="flyout">NodeId</code></a></td>
            <td>Identifier of the node to highlight.</td>
        </tr>
        <tr>
            <td>backendNodeId <br/> <i>optional</i></td>
            <td><a href="#backendnodeid"><code class="flyout">BackendNodeId</code></a></td>
            <td>Identifier of the backend node to highlight.</td>
        </tr>
        <tr>
            <td>objectId <br/> <i>optional</i></td>
            <td><a href="runtime.md#remoteobjectid"><code class="flyout">Runtime.RemoteObjectId</code></a></td>
            <td>JavaScript object id of the node to be highlighted.</td>
        </tr>
        <tr>
            <td>higlightConfig</td>
            <td><a href="#highlightconfig"><code class="flyout">HighlightConfig</code></a></td>
            <td>Descriptor of the highlight appearance.</td>
        </tr>
    </tbody>
</table>
<table>
    <thead>
        <tr>
            <th>Returns</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>root</td>
            <td><a href="#node"><code class="flyout">Node</code></a></td>
            <td>Resulting Node.</td>
        </tr>
    </tbody>
</table>
</p>

---

### hideHighlight
Hides any current DOM node highlight.

</p>

---

### requestChildNodes
Requests that children of the node with given id are returned to ghe caller in the form of `setChildNodes` events. `setChildNodes` will be fired for each node that has not previously returned it's children, starting from the requested node down to the specified depth.

<table>
    <thead>
        <tr>
            <th>Parameters</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>nodeId</td>
            <td><a href="#nodeid"><code class="flyout">NodeId</code></a></td>
            <td>Id of the node to get children from.</td>
        </tr>
        <tr>
            <td>depth</td>
            <td><code class="flyout">integer</code></td>
            <td>The maximum depth at which children should be retrieved, defaults to 1. Use -1 for entire subtree.</td>
        </tr>
        <tr>
            <td>pierce</td>
            <td><code class="flyout">boolean</code></td>
            <td>Whether or not iframes should be traversed when returning the subtree (default is false).</td>
        </tr>
    </tbody>
</table>
</p>

---

### getAttributes
Returns attributes for the specified node.

<table>
    <thead>
        <tr>
            <th>Parameters</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>nodeId</td>
            <td><a href="#nodeid"><code class="flyout">NodeId</code></a></td>
            <td>Id of the node to retrieve attibutes for.</td>
        </tr>
    </tbody>
</table>
<table>
    <thead>
        <tr>
            <th>Returns</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>attributes</td>
            <td><code class="flyout">string[]</code></td>
            <td>An interleaved array of node attribute names and values.</td>
        </tr>
    </tbody>
</table>
</p>

---

### getOuterHTML
Returns node's HTML markup.

<table>
    <thead>
        <tr>
            <th>Parameters</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>nodeId <br/> <i>optional</i></td>
            <td><a href="#nodeid"><code class="flyout">NodeId</code></a></td>
            <td>Identifier of the node.</td>
        </tr>
        <tr>
            <td>backendNodeId <br/> <i>optional</i></td>
            <td><a href="#backendnodeid"><code class="flyout">BackendNodeId</code></a></td>
            <td>Identifier of the backend node.</td>
        </tr>
        <tr>
            <td>objectId <br/> <i>optional</i></td>
            <td><a href="runtime.md#remoteobjectid"><code class="flyout">Runtime.RemoteObjectId</code></a></td>
            <td>JavaScript object id of the node wrapper.</td>
        </tr>
    </tbody>
</table>
<table>
    <thead>
        <tr>
            <th>Returns</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>outerHTML</td>
            <td><code class="flyout">string</code></td>
            <td>Outer HTML markup.</td>
        </tr>
    </tbody>
</table>
</p>

---

### pushNodesByBackendIdsToFrontend
Looks up Node Ids and resolves all parents for the specified Backend Node Ids

<table>
    <thead>
        <tr>
            <th>Parameters</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>backendNodeIds</td>
            <td><a href="#backendnodeid"><code class="flyout">BackendNodeId[]</code></a></td>
            <td>Backend Node IDs of the nodes to resolve</td>
        </tr>
    </tbody>
</table>
<table>
    <thead>
        <tr>
            <th>Returns</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>nodeIds</td>
            <td><a href="#node"><code class="flyout">Node[]</code></a></td>
            <td>Node Ids of the resolved nodes</td>
        </tr>
    </tbody>
</table>
</p>

---

### querySelector
Executes `querySelector` on a given node.

<table>
    <thead>
        <tr>
            <th>Parameters</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>nodeId</td>
            <td><a href="#nodeid"><code class="flyout">NodeId</code></a></td>
            <td>Id of the node to query upon.</td>
        </tr>
        <tr>
            <td>selector</td>
            <td><code class="flyout">string</code></td>
            <td>The selector string.</td>
        </tr>
    </tbody>
</table>
<table>
    <thead>
        <tr>
            <th>Returns</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>nodeId</td>
            <td><a href="#nodeid"><code class="flyout">NodeId</code></a></td>
            <td>Query selector result.</td>
        </tr>
    </tbody>
</table>
</p>

---

### querySelectorAll
Executes `querySelectorAll` on a given node.

<table>
    <thead>
        <tr>
            <th>Parameters</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>nodeId</td>
            <td><a href="#nodeid"><code class="flyout">NodeId</code></a></td>
            <td>Id of the node to query upon.</td>
        </tr>
        <tr>
            <td>selector</td>
            <td><code class="flyout">string</code></td>
            <td>The selector string.</td>
        </tr>
    </tbody>
</table>
<table>
    <thead>
        <tr>
            <th>Returns</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>nodeIds</td>
            <td><a href="#nodeid"><code class="flyout">NodeId[]</code></a></td>
            <td>Query selector results.</td>
        </tr>
    </tbody>
</table>
</p>

---

### requestNode
Requests that the node with given remote object Id is sent to caller. All nodes that form the path from the node to the root are also sent to the client as a series of `setChildNodes` notifications. returns 0 if the document containing the requested node has not previously been requested by the client.

<table>
    <thead>
        <tr>
            <th>Parameters</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>objectId</td>
            <td><a href="runtime.md#remoteobjectid"><code class="flyout">Runtime.RemoteObjectId</code></a></td>
            <td>JavaScript object Id to convert into node.</td>
        </tr>
    </tbody>
</table>
<table>
    <thead>
        <tr>
            <th>Returns</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>nodeId</td>
            <td><a href="#nodeid"><code class="flyout">NodeId</code></a></td>
            <td>Node Id for given object.</td>
        </tr>
    </tbody>
</table>
</p>

---

### resolveNode
Resolves the JavaScript node object for a given NodeId or BackendNodeId.

<table>
    <thead>
        <tr>
            <th>Parameters</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>nodeId <br/> <i>optional</i></td>
            <td><a href="#nodeid"><code class="flyout">NodeId</code></a></td>
            <td>Id of the node to resolve.</td>
        </tr>
        <tr>
            <td>backendNodeId <br/> <i>optional</i></td>
            <td><a href="#backendnodeid"><code class="flyout">BackendNodeId</code></a></td>
            <td>Backend Node Id of the node to resolve.</td>
        </tr>
        <tr>
            <td>objectGroup</td>
            <td><code class="flyout">string</code></td>
            <td>Symbolic group name that can be used to release multiple objects.</td>
        </tr>
    </tbody>
</table>
<table>
    <thead>
        <tr>
            <th>Returns</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>object</td>
            <td><a href="runtime.md#remoteobject"><code class="flyout">Runtime.RemoteObject</code></a></td>
            <td>JavaScript object wrapper for given node.</td>
        </tr>
    </tbody>
</table>
</p>

---

### setInspectedNode
<span><b>Experimental. </b></span>Enables console to refer to the previous inspected node with given id via $0-$4.

<table>
    <thead>
        <tr>
            <th>Parameters</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>nodeId</td>
            <td><a href="#nodeid"><code class="flyout">NodeId</code></a></td>
            <td>DOM node id to be accessible by means of $0-$4 in command line API.</td>
        </tr>
    </tbody>
</table>
</p>

---

## Events

### setChildNodes
Fired when the backend wishes to provide client with missing DOM structure. This happens upon most calls requesting nodeIds

<table>
    <thead>
        <tr>
            <th>Parameters</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>parentId</td>
            <td><a href="#nodeid"><code class="flyout">NodeId</code></a></td>
            <td>Parent node to poplate with children.</td>
        </tr>
        <tr>
            <td>nodes</td>
            <td><a href="#nodeid"><code class="flyout">NodeId[]</code></a></td>
            <td>Child nodes array.</td>
        </tr>
    </tbody>
</table>
</p>

---

### attributeModified
Fired when `Element`'s attribute is modified.

<table>
    <thead>
        <tr>
            <th>Parameters</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>nodeId</td>
            <td><a href="#nodeid"><code class="flyout">NodeId</code></a></td>
            <td>Id of the node that has changed.</td>
        </tr>
        <tr>
            <td>name</td>
            <td><code class="flyout">string</code></td>
            <td>Attribute name.</td>
        </tr>
        <tr>
            <td>value</td>
            <td><code class="flyout">string</code></td>
            <td>Attribute value.</td>
        </tr>
    </tbody>
</table>
</p>

---

### attributeRemoved
Fired when `Element`'s attribute is removed.

<table>
    <thead>
        <tr>
            <th>Parameters</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>nodeId</td>
            <td><a href="#nodeid"><code class="flyout">NodeId</code></a></td>
            <td>Id of the node that has changed.</td>
        </tr>
        <tr>
            <td>name</td>
            <td><code class="flyout">string</code></td>
            <td>Attribute name.</td>
        </tr>
    </tbody>
</table>
</p>

---

### characterDataModified
Mirrors `DOMCharacterDataModified` event.

<table>
    <thead>
        <tr>
            <th>Parameters</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>nodeId</td>
            <td><a href="#nodeid"><code class="flyout">NodeId</code></a></td>
            <td>Id of the node that has changed.</td>
        </tr>
        <tr>
            <td>charcterData</td>
            <td><code class="flyout">string</code></td>
            <td>New text value.</td>
        </tr>
    </tbody>
</table>
</p>

---

### childNodeInserted
Mirrors `DOMNodeInserted` event.

<table>
    <thead>
        <tr>
            <th>Parameters</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>parentNodeId</td>
            <td><a href="#nodeid"><code class="flyout">NodeId</code></a></td>
            <td>Id of the node that has changed.</td>
        </tr>
        <tr>
            <td>previousNodeId</td>
            <td><a href="#nodeid"><code class="flyout">NodeId</code></a></td>
            <td>Id of the inserted node's previous sibling.</td>
        </tr>
        <tr>
            <td>node</td>
            <td><a href="#node"><code class="flyout">Node</code></a></td>
            <td>Inserted node data.</td>
        </tr>
    </tbody>
</table>
</p>

---

### childNodeRemoved
Mirrors `DOMNodeRemoved` event.

<table>
    <thead>
        <tr>
            <th>Parameters</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>parentNodeId</td>
            <td><a href="#nodeid"><code class="flyout">NodeId</code></a></td>
            <td>Id of the node that has changed.</td>
        </tr>
        <tr>
            <td>nodeId</td>
            <td><a href="#nodeid"><code class="flyout">NodeId</code></a></td>
            <td>Id of the node that has been removed.</td>
        </tr>
    </tbody>
</table>
</p>

---

### documentUpdated
Fired when `Document` has been totally updated. Node ids are no longer valid.

</p>

---

## Types

### <a name="rgba"></a> RGBA `object`

A Structure holding an RGBA color.

<table>
    <thead>
        <tr>
            <th>Properties</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>r</td>
            <td><code class="flyout">integer</code></td>
            <td>The red component, in the [0-255] range.</td>
        </tr>
        <tr>
            <td>g</td>
            <td><code class="flyout">integer</code></td>
            <td>The green component, in the [0-255] range.</td>
        </tr>
        <tr>
            <td>b</td>
            <td><code class="flyout">integer</code></td>
            <td>The blue component, in the [0-255] range.</td>
        </tr>
        <tr>
            <td>a <br/> <i>optional</i></td>
            <td><code class="flyout">number</code></td>
            <td>The alpha component, in the [0-1] range. Default is 1.</td>
        </tr>
    </tbody>
</table>
</p>

---

### <a name="highlightconfig"></a> HighlightConfig `object`

Configuration data for highlighting of page elements.

<table>
    <thead>
        <tr>
            <th>Properties</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>contentColor <br/> <i>optional</i></td>
            <td><a href="#rgba"><code class="flyout">RGBA</code></a></td>
            <td>The content box highlight fill color. Default is transparent.</td>
        </tr>
        <tr>
            <td>paddingColor <br/> <i>optional</i></td>
            <td><a href="#rgba"><code class="flyout">RGBA</code></a></td>
            <td>The padding highlight fill color. Default is transparent.</td>
        </tr>
        <tr>
            <td>borderColor <br/> <i>optional</i></td>
            <td><a href="#rgba"><code class="flyout">RGBA</code></a></td>
            <td>The border highlight fill color. Default is transparent.</td>
        </tr>
        <tr>
            <td>marginColor <br/> <i>optional</i></td>
            <td><a href="#rgba"><code class="flyout">RGBA</code></a></td>
            <td>The margin highlight fill color. Default is transparent.</td>
        </tr>
    </tbody>
</table>
</p>

---

### <a name="nodeid"></a> NodeId `integer`

Unique DOM node identifier

</p>

---

### <a name="node"></a> Node `object`

Mirror object that represents the actual DOM nodes.

<table>
    <thead>
        <tr>
            <th>Properties</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>nodeId</td>
            <td><a href="#nodeid"><code class="flyout">NodeId</code></a></td>
            <td>Node Identifier used to reference this node. Backend will fire DOM events for nodes that have a nodeId that is known to the client</td>
        </tr>
        <tr>
            <td>parentId <br/> <i>optional</i></td>
            <td><a href="#nodeid"><code class="flyout">NodeId</code></a></td>
            <td>Node Identifier of the parent Node, if any.</td>
        </tr>
        <tr>
            <td>backendNodeId</td>
            <td><a href="#nodeid"><code class="flyout">NodeId</code></a></td>
            <td>Backend Node identifier of the node. BackendNodeIds reference Nodes that can be known to the client, but do not push DOM events about this node.</td>
        </tr>
        <tr>
            <td>nodeType</td>
            <td><code class="flyout">integer</code></td>
            <td>`Node`'s nodeType.</td>
        </tr>
        <tr>
            <td>nodeName</td>
            <td><code class="flyout">string</code></td>
            <td>`Node`'s nodeName.</td>
        </tr>
        <tr>
            <td>localName</td>
            <td><code class="flyout">string</code></td>
            <td>`Node`'s localName</td>
        </tr>
        <tr>
            <td>nodeValue</td>
            <td><code class="flyout">string</code></td>
            <td>`Node`'s nodeValue</td>
        </tr>
        <tr>
            <td>childNodeCount <br/> <i>optional</i></td>
            <td><code class="flyout">integer</code></td>
            <td>Child count for `Container` nodes.</td>
        </tr>
        <tr>
            <td>children <br/> <i>optional</i></td>
            <td><a href="#node"><code class="flyout">Node[]</code></a></td>
            <td>Child nodes of this node when requested with children.</td>
        </tr>
        <tr>
            <td>attributes <br/> <i>optional</i></td>
            <td><code class="flyout">string[]</code></td>
            <td>Attributes of `Element` nodes in the form of a flat array `[name1, value1, name2, value2]</td>
        </tr>
        <tr>
            <td>documentURL <br/> <i>optional</i></td>
            <td><code class="flyout">string</code></td>
            <td>Document URL that `Document` nodes point to.</td>
        </tr>
        <tr>
            <td>baseURL <br/> <i>optional</i></td>
            <td><code class="flyout">string</code></td>
            <td>Document URL that `Document` nodes use for URL completion.</td>
        </tr>
        <tr>
            <td>publicId <br/> <i>optional</i></td>
            <td><code class="flyout">string</code></td>
            <td>`DocumentType` Node's publicId.</td>
        </tr>
        <tr>
            <td>systemId <br/> <i>optional</i></td>
            <td><code class="flyout">string</code></td>
            <td>`DocumentType` Node's systemId.</td>
        </tr>
        <tr>
            <td>internalSubset <br/> <i>optional</i></td>
            <td><code class="flyout">string</code></td>
            <td>`DocumentType` Node's internalSubset.</td>
        </tr>
        <tr>
            <td>xmlVersion <br/> <i>optional</i></td>
            <td><code class="flyout">string</code></td>
            <td>`Document` Node's xml version in the case of XML documents.</td>
        </tr>
        <tr>
            <td>name <br/> <i>optional</i></td>
            <td><code class="flyout">string</code></td>
            <td>`Attr` Node's name.</td>
        </tr>
        <tr>
            <td>value <br/> <i>optional</i></td>
            <td><code class="flyout">string</code></td>
            <td>`Attr` Node's value.</td>
        </tr>
        <tr>
            <td>frameId <br/> <i>optional</i></td>
            <td><a href="page.md#frameid"><code class="flyout">Page.FrameId</code></a></td>
            <td>Frame ID for frame owner elements.</td>
        </tr>
        <tr>
            <td>contentDocument <br/> <i>optional</i></td>
            <td><a href="#node"><code class="flyout">Node</code></a></td>
            <td>Content document for frame owner elements.</td>
        </tr>
        <tr>
            <td>isSVG <br/> <i>optional</i></td>
            <td><code class="flyout">boolean</code></td>
            <td>True if the node is SVG.</td>
        </tr>
    </tbody>
</table>
</p>

---

### <a name="backendnodeid"></a> BackendNodeId `integer`

Unique DOM node identifier used to reference a node that may not have been pushed to the front-end.

</p>

---

### <a name="pseudotype"></a> PseudoType `string`

Pseudo element type.

##### Allowed Values
first-line, first-letter, before, after, selection
</p>

---

## Dependencies

[Runtime](runtime.md)
