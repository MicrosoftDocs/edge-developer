---
description: Reference for the CSS Domain. This domain exposes CSS read/write operations. All CSS objects (stylesheets, rules, and styles) have an associated `id` used in subsequent operations on the related object. Each object type has a specific `id` structure, and those are not interchangeable between objects of different kinds. CSS objects can be loaded using the `get*ForNode()` calls (which accept a DOM node id). A client can also keep track of stylesheets via the `styleSheetAdded`/`styleSheetRemoved` events and subsequently load the required stylesheet contents using the `getStyleSheet[Text]()` methods.
title: CSS Domain - DevTools Protocol Version 0.2
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: reference
ms.prod: microsoft-edge
ms.custom: seodec18
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# CSS

This domain exposes CSS read/write operations. All CSS objects (stylesheets, rules, and styles) have an associated `id` used in subsequent operations on the related object. Each object type has a specific `id` structure, and those are not interchangeable between objects of different kinds. CSS objects can be loaded using the `get*ForNode()` calls (which accept a DOM node id). A client can also keep track of stylesheets via the `styleSheetAdded`/`styleSheetRemoved` events and subsequently load the required stylesheet contents using the `getStyleSheet[Text]()` methods.

| | |
|-|-|
| [**Methods**](#methods) | [enable](#enable), [disable](#disable), [getInlineStylesForNode](#getinlinestylesfornode), [getMatchedStylesForNode](#getmatchedstylesfornode), [getPlatformFontsForNode](#getplatformfontsfornode), [getComputedStyleForNode](#getcomputedstylefornode) |
| [**Events**](#events) | [styleSheetAdded](#stylesheetadded), [styleSheetChanged](#stylesheetchanged), [styleSheetRemoved](#stylesheetremoved) |
| [**Types**](#types) | [StyleSheetId](#stylesheetid), [PseudoElementMatches](#pseudoelementmatches), [InheritedStyleEntry](#inheritedstyleentry), [RuleMatch](#rulematch), [Value](#value), [SelectorList](#selectorlist), [CSSRule](#cssrule), [SourceRange](#sourcerange), [ShorthandEntry](#shorthandentry), [CSSStyle](#cssstyle), [CSSProperty](#cssproperty), [CSSMedia](#cssmedia), [MediaQuery](#mediaquery), [MediaQueryExpression](#mediaqueryexpression), [PlatformFontUsage](#platformfontusage), [CSSKeyframesRule](#csskeyframesrule), [CSSKeyframeRule](#csskeyframerule), [CSSComputedStyleProperty](#csscomputedstyleproperty), [CSSStyleSheetHeader](#cssstylesheetheader) |
| [**Dependencies**](#dependencies) | [DOM](dom.md) |
## Methods

### enable
Enables the CSS agent for the given page. Clients should not assume that the CSS agent has been enabled until the result of this command is received.

</p>

---

### disable
Disables the CSS agent for the given page.

</p>

---

### getInlineStylesForNode
Returns the styles defined inline (explicitly in the "style" attribute and implicitly, using DOM
attributes) for a DOM node identified by `nodeId`.

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
            <td><a href="dom.md#nodeid"><code class="flyout">DOM.NodeId</code></a></td>
            <td></td>
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
            <td>inlineStyle <br /> <i>optional</i></td>
            <td><a href="#cssstyle"><code class="flyout">CSSStyle</code></a></td>
            <td>Inline style for the specified DOM node.</td>
        </tr>
        <tr>
            <td>attributesStyle <br /> <i>optional</i></td>
            <td><a href="#cssstyle"><code class="flyout">CSSStyle</code></a></td>
            <td>Attribute-defined element style (e.g. resulting from "width=20 height=100%").</td>
        </tr>
    </tbody>
</table>
</p>

---

### getMatchedStylesForNode
Returns requested styles for a DOM node identified by `nodeId`.

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
            <td><a href="dom.md#nodeid"><code class="flyout">DOM.NodeId</code></a></td>
            <td></td>
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
            <td>inlineStyle <br /> <i>optional</i></td>
            <td><a href="#cssstyle"><code class="flyout">CSSStyle</code></a></td>
            <td>Inline style for the specified DOM node.</td>
        </tr>
        <tr>
            <td>attributesStyle <br /> <i>optional</i></td>
            <td><a href="#cssstyle"><code class="flyout">CSSStyle</code></a></td>
            <td>Attribute-defined element style (e.g. resulting from "width=20 height=100%").</td>
        </tr>
        <tr>
            <td>matchedCSSRules <br /> <i>optional</i></td>
            <td><a href="#rulematch"><code class="flyout">RuleMatch[]</code></a></td>
            <td>CSS rules matching this node, from all applicable stylesheets.</td>
        </tr>
        <tr>
            <td>pseudoElements <br /> <i>optional</i></td>
            <td><a href="#pseudoelementmatches"><code class="flyout">PseudoElementMatches[]</code></a></td>
            <td>Pseudo style matches for this node.</td>
        </tr>
        <tr>
            <td>inherited <br /> <i>optional</i></td>
            <td><a href="#inheritedstyleentry"><code class="flyout">InheritedStyleEntry[]</code></a></td>
            <td>A chain of inherited styles (from the immediate node parent up to the DOM tree root).</td>
        </tr>
        <tr>
            <td>cssKeyframesRules <br /> <i>optional</i></td>
            <td><a href="#csskeyframesrule"><code class="flyout">CSSKeyframesRule[]</code></a></td>
            <td>A list of CSS keyframed animations matching this node.</td>
        </tr>
    </tbody>
</table>
</p>

---

### getPlatformFontsForNode
Requests information about platform fonts which we used to render child TextNodes in the given
node.

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
            <td><a href="dom.md#nodeid"><code class="flyout">DOM.NodeId</code></a></td>
            <td></td>
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
            <td>fonts</td>
            <td><a href="#platformfontusage"><code class="flyout">PlatformFontUsage[]</code></a></td>
            <td>Usage statistics for every employed platform font.</td>
        </tr>
    </tbody>
</table>
</p>

---

### getComputedStyleForNode
Returns the computed style for a DOM node identified by `nodeId`.

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
            <td><a href="dom.md#nodeid"><code class="flyout">DOM.NodeId</code></a></td>
            <td></td>
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
            <td>computedStyle</td>
            <td><a href="#csscomputedstyleproperty"><code class="flyout">CSSComputedStyleProperty[]</code></a></td>
            <td>Computed style for the specified DOM node.</td>
        </tr>
    </tbody>
</table>
</p>

---

## Events

### styleSheetAdded
Fired whenever an active document stylesheet is added.

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
            <td>header</td>
            <td><a href="#cssstylesheetheader"><code class="flyout">CSSStyleSheetHeader</code></a></td>
            <td>Added stylesheet metainfo.</td>
        </tr>
    </tbody>
</table>
</p>

---

### styleSheetChanged
Fired whenever a stylesheet is changed as a result of the client operation.

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
            <td>styleSheetId</td>
            <td><a href="#stylesheetid"><code class="flyout">StyleSheetId</code></a></td>
            <td></td>
        </tr>
    </tbody>
</table>
</p>

---

### styleSheetRemoved
Fired whenever an active document stylesheet is removed.

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
            <td>styleSheetId</td>
            <td><a href="#stylesheetid"><code class="flyout">StyleSheetId</code></a></td>
            <td>Identifier of the removed stylesheet.</td>
        </tr>
    </tbody>
</table>
</p>

---

## Types

### <a name="stylesheetid"></a> StyleSheetId `string`



</p>

---

### <a name="pseudoelementmatches"></a> PseudoElementMatches `object`

CSS rule collection for a single pseudo style.

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
            <td>pseudoType</td>
            <td><a href="dom.md#pseudotype"><code class="flyout">DOM.PseudoType</code></a></td>
            <td>Pseudo element type.</td>
        </tr>
        <tr>
            <td>matches</td>
            <td><a href="#rulematch"><code class="flyout">RuleMatch[]</code></a></td>
            <td>Matches of CSS rules applicable to the pseudo style.</td>
        </tr>
    </tbody>
</table>
</p>

---

### <a name="inheritedstyleentry"></a> InheritedStyleEntry `object`

Inherited CSS rule collection from ancestor node.

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
            <td>inlineStyle <br /> <i>optional</i></td>
            <td><a href="#cssstyle"><code class="flyout">CSSStyle</code></a></td>
            <td>The ancestor node's inline style, if any, in the style inheritance chain.</td>
        </tr>
        <tr>
            <td>matchedCSSRules</td>
            <td><a href="#rulematch"><code class="flyout">RuleMatch[]</code></a></td>
            <td>Matches of CSS rules matching the ancestor node in the style inheritance chain.</td>
        </tr>
    </tbody>
</table>
</p>

---

### <a name="rulematch"></a> RuleMatch `object`

Match data for a CSS rule.

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
            <td>rule</td>
            <td><a href="#cssrule"><code class="flyout">CSSRule</code></a></td>
            <td>CSS rule in the match.</td>
        </tr>
    </tbody>
</table>
</p>

---

### <a name="value"></a> Value `object`

Data for a simple selector (these are delimited by commas in a selector list).

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
            <td>text</td>
            <td><code class="flyout">string</code></td>
            <td>Value text.</td>
        </tr>
        <tr>
            <td>range <br /> <i>optional</i></td>
            <td><a href="#sourcerange"><code class="flyout">SourceRange</code></a></td>
            <td>Value range in the underlying resource (if available).</td>
        </tr>
    </tbody>
</table>
</p>

---

### <a name="selectorlist"></a> SelectorList `object`

Selector list data.

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
            <td>selectors</td>
            <td><a href="#value"><code class="flyout">Value[]</code></a></td>
            <td>Selectors in the list.</td>
        </tr>
        <tr>
            <td>text</td>
            <td><code class="flyout">string</code></td>
            <td>Rule selector text.</td>
        </tr>
    </tbody>
</table>
</p>

---

### <a name="cssrule"></a> CSSRule `object`

CSS rule representation.

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
            <td>styleSheetId <br /> <i>optional</i></td>
            <td><a href="#stylesheetid"><code class="flyout">StyleSheetId</code></a></td>
            <td>The css style sheet identifier (absent for user agent stylesheet and user-specified
stylesheet rules) this rule came from.</td>
        </tr>
        <tr>
            <td>selectorList <br /> <i>optional</i></td>
            <td><a href="#selectorlist"><code class="flyout">SelectorList</code></a></td>
            <td>Rule selector data.</td>
        </tr>
        <tr>
            <td>origin <br /> <i>optional</i></td>
            <td><<!--  <a href="#stylesheetorigin">  --><code class="flyout">StyleSheetOrigin</code><!--  </a>  --></td>
            <td>Parent stylesheet's origin.</td>
        </tr>
        <tr>
            <td>style</td>
            <td><a href="#cssstyle"><code class="flyout">CSSStyle</code></a></td>
            <td>Associated style declaration.</td>
        </tr>
        <tr>
            <td>media <br /> <i>optional</i></td>
            <td><a href="#cssmedia"><code class="flyout">CSSMedia[]</code></a></td>
            <td>Media list array (for rules involving media queries). The array enumerates media queries
starting with the innermost one, going outwards.</td>
        </tr>
    </tbody>
</table>
</p>

---

### <a name="sourcerange"></a> SourceRange `object`

Text range within a resource. All numbers are zero-based.

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
            <td>startLine</td>
            <td><code class="flyout">integer</code></td>
            <td>Start line of range.</td>
        </tr>
        <tr>
            <td>startColumn</td>
            <td><code class="flyout">integer</code></td>
            <td>Start column of range (inclusive).</td>
        </tr>
        <tr>
            <td>endLine</td>
            <td><code class="flyout">integer</code></td>
            <td>End line of range</td>
        </tr>
        <tr>
            <td>endColumn</td>
            <td><code class="flyout">integer</code></td>
            <td>End column of range (exclusive).</td>
        </tr>
    </tbody>
</table>
</p>

---

### <a name="shorthandentry"></a> ShorthandEntry `object`



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
            <td>name</td>
            <td><code class="flyout">string</code></td>
            <td>Shorthand name.</td>
        </tr>
        <tr>
            <td>value</td>
            <td><code class="flyout">string</code></td>
            <td>Shorthand value.</td>
        </tr>
        <tr>
            <td>important <br /> <i>optional</i></td>
            <td><code class="flyout">boolean</code></td>
            <td>Whether the property has "!important" annotation (implies `false` if absent).</td>
        </tr>
    </tbody>
</table>
</p>

---

### <a name="cssstyle"></a> CSSStyle `object`

CSS style representation.

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
            <td>styleSheetId <br /> <i>optional</i></td>
            <td><a href="#stylesheetid"><code class="flyout">StyleSheetId</code></a></td>
            <td>The css style sheet identifier (absent for user agent stylesheet and user-specified
stylesheet rules) this rule came from.</td>
        </tr>
        <tr>
            <td>cssProperties</td>
            <td><a href="#cssproperty"><code class="flyout">CSSProperty[]</code></a></td>
            <td>CSS properties in the style.</td>
        </tr>
        <tr>
            <td>shorthandEntries</td>
            <td><a href="#shorthandentry"><code class="flyout">ShorthandEntry[]</code></a></td>
            <td>Computed values for all shorthands found in the style.</td>
        </tr>
        <tr>
            <td>cssText <br /> <i>optional</i></td>
            <td><code class="flyout">string</code></td>
            <td>Style declaration text (if available).</td>
        </tr>
        <tr>
            <td>range <br /> <i>optional</i></td>
            <td><a href="#sourcerange"><code class="flyout">SourceRange</code></a></td>
            <td>Style declaration range in the enclosing stylesheet (if available).</td>
        </tr>
    </tbody>
</table>
</p>

---

### <a name="cssproperty"></a> CSSProperty `object`

CSS property declaration data.

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
            <td>name</td>
            <td><code class="flyout">string</code></td>
            <td>The property name.</td>
        </tr>
        <tr>
            <td>value</td>
            <td><code class="flyout">string</code></td>
            <td>The property value.</td>
        </tr>
        <tr>
            <td>important <br /> <i>optional</i></td>
            <td><code class="flyout">boolean</code></td>
            <td>Whether the property has "!important" annotation (implies `false` if absent).</td>
        </tr>
        <tr>
            <td>implicit <br /> <i>optional</i></td>
            <td><code class="flyout">boolean</code></td>
            <td>Whether the property is implicit (implies `false` if absent).</td>
        </tr>
        <tr>
            <td>text <br /> <i>optional</i></td>
            <td><code class="flyout">string</code></td>
            <td>The full property text as specified in the style.</td>
        </tr>
        <tr>
            <td>parsedOk <br /> <i>optional</i></td>
            <td><code class="flyout">boolean</code></td>
            <td>Whether the property is understood by the browser (implies `true` if absent).</td>
        </tr>
        <tr>
            <td>disabled <br /> <i>optional</i></td>
            <td><code class="flyout">boolean</code></td>
            <td>Whether the property is disabled by the user (present for source-based properties only).</td>
        </tr>
        <tr>
            <td>range <br /> <i>optional</i></td>
            <td><a href="#sourcerange"><code class="flyout">SourceRange</code></a></td>
            <td>The entire property range in the enclosing style declaration (if available).</td>
        </tr>
    </tbody>
</table>
</p>

---

### <a name="cssmedia"></a> CSSMedia `object`

CSS media rule descriptor.

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
            <td>text</td>
            <td><code class="flyout">string</code></td>
            <td>Media query text.</td>
        </tr>
        <tr>
            <td>source</td>
            <td><code class="flyout">string</code> <br /> <i>Allowed values: mediaRule, importRule, linkedSheet, inlineSheet</i></td>
            <td>Source of the media query: "mediaRule" if specified by a @media rule, "importRule" if
specified by an @import rule, "linkedSheet" if specified by a "media" attribute in a linked
stylesheet's LINK tag, "inlineSheet" if specified by a "media" attribute in an inline
stylesheet's STYLE tag.</td>
        </tr>
        <tr>
            <td>sourceURL <br /> <i>optional</i></td>
            <td><code class="flyout">string</code></td>
            <td>URL of the document containing the media query description.</td>
        </tr>
        <tr>
            <td>range <br /> <i>optional</i></td>
            <td><a href="#sourcerange"><code class="flyout">SourceRange</code></a></td>
            <td>The associated rule (@media or @import) header range in the enclosing stylesheet (if
available).</td>
        </tr>
        <tr>
            <td>styleSheetId <br /> <i>optional</i></td>
            <td><a href="#stylesheetid"><code class="flyout">StyleSheetId</code></a></td>
            <td>Identifier of the stylesheet containing this object (if exists).</td>
        </tr>
        <tr>
            <td>mediaList <br /> <i>optional</i></td>
            <td><a href="#mediaquery"><code class="flyout">MediaQuery[]</code></a></td>
            <td>Array of media queries.</td>
        </tr>
    </tbody>
</table>
</p>

---

### <a name="mediaquery"></a> MediaQuery `object`

Media query descriptor.

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
            <td>expressions</td>
            <td><a href="#mediaqueryexpression"><code class="flyout">MediaQueryExpression[]</code></a></td>
            <td>Array of media query expressions.</td>
        </tr>
        <tr>
            <td>active</td>
            <td><code class="flyout">boolean</code></td>
            <td>Whether the media query condition is satisfied.</td>
        </tr>
    </tbody>
</table>
</p>

---

### <a name="mediaqueryexpression"></a> MediaQueryExpression `object`

Media query expression descriptor.

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
            <td>value</td>
            <td><code class="flyout">number</code></td>
            <td>Media query expression value.</td>
        </tr>
        <tr>
            <td>unit</td>
            <td><code class="flyout">string</code></td>
            <td>Media query expression units.</td>
        </tr>
        <tr>
            <td>feature</td>
            <td><code class="flyout">string</code></td>
            <td>Media query expression feature.</td>
        </tr>
        <tr>
            <td>valueRange <br /> <i>optional</i></td>
            <td><a href="#sourcerange"><code class="flyout">SourceRange</code></a></td>
            <td>The associated range of the value text in the enclosing stylesheet (if available).</td>
        </tr>
        <tr>
            <td>computedLength <br /> <i>optional</i></td>
            <td><code class="flyout">number</code></td>
            <td>Computed length of media query expression (if applicable).</td>
        </tr>
    </tbody>
</table>
</p>

---

### <a name="platformfontusage"></a> PlatformFontUsage `object`

Information about amount of glyphs that were rendered with given font.

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
            <td>familyName</td>
            <td><code class="flyout">string</code></td>
            <td>Font's family name reported by platform.</td>
        </tr>
        <tr>
            <td>isCustomFont</td>
            <td><code class="flyout">boolean</code></td>
            <td>Indicates if the font was downloaded or resolved locally.</td>
        </tr>
        <tr>
            <td>glyphCount</td>
            <td><code class="flyout">number</code></td>
            <td>Amount of glyphs that were rendered with this font.</td>
        </tr>
    </tbody>
</table>
</p>

---

### <a name="csskeyframesrule"></a> CSSKeyframesRule `object`

CSS keyframes rule representation.

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
            <td>animationName</td>
            <td><a href="#value"><code class="flyout">Value</code></a></td>
            <td>Animation name.</td>
        </tr>
        <tr>
            <td>keyframes</td>
            <td><a href="#csskeyframerule"><code class="flyout">CSSKeyframeRule[]</code></a></td>
            <td>List of keyframes.</td>
        </tr>
    </tbody>
</table>
</p>

---

### <a name="csskeyframerule"></a> CSSKeyframeRule `object`

CSS keyframe rule representation.

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
            <td>styleSheetId <br /> <i>optional</i></td>
            <td><a href="#stylesheetid"><code class="flyout">StyleSheetId</code></a></td>
            <td>The css style sheet identifier (absent for user agent stylesheet and user-specified
stylesheet rules) this rule came from.</td>
        </tr>
        <tr>
            <td>origin</td>
            <td><!--  <a href="#stylesheetorigin">  --><code class="flyout">StyleSheetOrigin</code><!--  </a>  --></td>
            <td>Parent stylesheet's origin.</td>
        </tr>
        <tr>
            <td>keyText</td>
            <td><a href="#value"><code class="flyout">Value</code></a></td>
            <td>Associated key text.</td>
        </tr>
        <tr>
            <td>style</td>
            <td><a href="#cssstyle"><code class="flyout">CSSStyle</code></a></td>
            <td>Associated style declaration.</td>
        </tr>
    </tbody>
</table>
</p>

---

### <a name="csscomputedstyleproperty"></a> CSSComputedStyleProperty `object`



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
            <td>name</td>
            <td><code class="flyout">string</code></td>
            <td>Computed style property name.</td>
        </tr>
        <tr>
            <td>value</td>
            <td><code class="flyout">string</code></td>
            <td>Computed style property value.</td>
        </tr>
    </tbody>
</table>
</p>

---

### <a name="cssstylesheetheader"></a> CSSStyleSheetHeader `object`

CSS stylesheet metainformation.

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
            <td>styleSheetId</td>
            <td><a href="#stylesheetid"><code class="flyout">StyleSheetId</code></a></td>
            <td>The stylesheet identifier.</td>
        </tr>
        <tr>
            <td>sourceURL</td>
            <td><code class="flyout">string</code></td>
            <td>Stylesheet resource URL.</td>
        </tr>
        <tr>
            <td>disabled</td>
            <td><code class="flyout">boolean</code></td>
            <td>Denotes whether the stylesheet is disabled.</td>
        </tr>
        <tr>
            <td>isInline</td>
            <td><code class="flyout">boolean</code></td>
            <td>Whether this stylesheet is created for STYLE tag by parser. This flag is not set for
document.written STYLE tags.</td>
        </tr>
        <tr>
            <td>startLine</td>
            <td><code class="flyout">number</code></td>
            <td>Line offset of the stylesheet within the resource (zero based).</td>
        </tr>
        <tr>
            <td>startColumn</td>
            <td><code class="flyout">number</code></td>
            <td>Column offset of the stylesheet within the resource (zero based).</td>
        </tr>
        <tr>
            <td>length</td>
            <td><code class="flyout">number</code></td>
            <td>Size of the content (in characters).</td>
        </tr>
    </tbody>
</table>
</p>

---

## Dependencies

[DOM](dom.md)
