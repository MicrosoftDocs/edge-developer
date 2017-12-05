---
description: Reference for the Debugger Domain. Debugger domain exposes JavaScript debugging capabilities. It allows setting and removing breakpoints, stepping through execution, exploring stack traces, etc.
title: Debugger Domain - Microsoft Edge DevTools
author: pelavall
ms.author: pelavall
ms.date: 12/15/2017
ms.topic: reference
ms.prod: microsoft-edge
---
# Debugger
Debugger domain exposes JavaScript debugging capabilities. It allows setting and removing breakpoints, stepping through execution, exploring stack traces, etc.

| | |
|-|-|
| [Methods](#methods) | [enable](#enable), [disable](#disable), [setBreakpointsActive](#setbreakpointsactive), [setBreakpointByUrl](#setbreakpointbyurl), [setBreakpoint](#setbreakpoint), [removeBreakpoint](#removebreakpoint), [stepOver](#stepover), [stepInto](#stepinto), [stepOut](#stepout), [pause](#pause), [resume](#resume), [getScriptSource](#getscriptsource), [setPauseOnExceptions](#setpauseonexceptions), [evaluateOnCallFrame](#evaluateoncallframe), [setVariableValue](#setvariablevalue), [setBlackboxPatterns](#setblackboxpatterns), [msSetDebuggerPropertyValue](#mssetdebuggerpropertyvalue) |
| [Events](#events) | [scriptParsed](#scriptparsed), [breakpointResolved](#breakpointresolved), [paused](#paused), [resumed](#resumed) |
| [Types](#types) | [BreakpointId](#breakpointid), [CallFrameId](#callframeid), [Location](#location), [ScriptPosition](#scriptposition), [CallFrame](#callframe), [Scope](#scope) |
| [Dependencies](#dependencies) | [Runtime](runtime.md) |
## Methods

### enable
Enables debugger for the given page. Clients should not assume that the debugging has been enabled until the result for this command is received. 

</p>

---

### disable
Disables debugger for given page. 

</p>

---

### setBreakpointsActive
Activates / deactivates all breakpoints on the page. 

</p>

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
            <td>active</td>
            <td><code class="flyout">boolean</code></td>
            <td>New value for breakpoints active state.</td>
        </tr>
    </tbody>
</table>
</p>

---

### setBreakpointByUrl
Sets JavaScript breakpoint at given location specified either by URL or URL regex. Once this command is issued, all existing parsed scripts will have breakpoints resolved and returned in <code>locations</code> property. Further matching script parsing will result in subsequent <code>breakpointResolved</code> events issued. This logical breakpoint will survive page reloads. 

</p>

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
            <td>lineNumber</td>
            <td><code class="flyout">integer</code></td>
            <td>Line number to set breakpoint at.</td>
        </tr>
        <tr>
            <td>url <br/> <i>optional</i></td>
            <td><code class="flyout">string</code></td>
            <td>URL of the resources to set breakpoint on.</td>
        </tr>
        <tr>
            <td>urlRegex <br/> <i>optional</i></td>
            <td><code class="flyout">string</code></td>
            <td>Regex pattern for the URLs of the resources to set breakpoints on. Either <code>url</code> or <code>urlRegex</code> must be specified.</td>
        </tr>
        <tr>
            <td>scriptHash <br/> <i>optional</i></td>
            <td><code class="flyout">string</code></td>
            <td>Script hash of the resources to set breakpoint on. <span style="color:white;background-color:Tomato;padding-left: 4px;padding-right:4px;padding-top:1px;padding-bottom:1px">EXPERIMENTAL</span></td>
        </tr>
        <tr>
            <td>columnNumber <br/> <i>optional</i></td>
            <td><code class="flyout">integer</code></td>
            <td>Offset in the line to set breakpoint at.</td>
        </tr>
        <tr>
            <td>condition <br/> <i>optional</i></td>
            <td><code class="flyout">string</code></td>
            <td>Expression to use as a breakpoint condition. When specified, debugger will only stop on the breakpoint if this expression evaluates to true.</td>
        </tr>
    </tbody>
</table>
</p>

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
            <td>breakpointId</td>
            <td><a href="#breakpointid"><code class="flyout">BreakpointId</code></a></td>
            <td>Id of the created breakpoint for further reference.</td>
        </tr>
        <tr>
            <td>locations</td>
            <td><a href="#location"><code class="flyout">Location[]</code></a></td>
            <td>List of the locations this breakpoint resolved into upon addition.</td>
        </tr>
    </tbody>
</table>
</p>

---

### setBreakpoint
Sets JavaScript breakpoint at a given location. 

</p>

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
            <td>location</td>
            <td><a href="#location"><code class="flyout">Location</code></a></td>
            <td>Location to set breakpoint in.</td>
        </tr>
        <tr>
            <td>condition <br/> <i>optional</i></td>
            <td><code class="flyout">string</code></td>
            <td>Expression to use as a breakpoint condition. When specified, debugger will only stop on the breakpoint if this expression evaluates to true.</td>
        </tr>
    </tbody>
</table>
</p>

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
            <td>breakpointId</td>
            <td><a href="#breakpointid"><code class="flyout">BreakpointId</code></a></td>
            <td>Id of the created breakpoint for further reference.</td>
        </tr>
        <tr>
            <td>actualLocation</td>
            <td><a href="#location"><code class="flyout">Location</code></a></td>
            <td>Location this breakpoint resolved into.</td>
        </tr>
    </tbody>
</table>
</p>

---

### removeBreakpoint
Removes JavaScript breakpoint. 

</p>

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
            <td>breakpointId</td>
            <td><a href="#breakpointid"><code class="flyout">BreakpointId</code></a></td>
            <td></td>
        </tr>
    </tbody>
</table>
</p>

---

### stepOver
Steps over the statement. 

</p>

---

### stepInto
Steps into the function call. 

</p>

---

### stepOut
Steps out of the function call. 

</p>

---

### pause
Stops on the next JavaScript statement. 

</p>

---

### resume
Resumes JavaScript execution. 

</p>

---

### getScriptSource
Returns source for the script with given id. 

</p>

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
            <td>scriptId</td>
            <td><a href="runtime.md#scriptid"><code class="flyout">Runtime.ScriptId</code></a></td>
            <td>Id of the script to get source for.</td>
        </tr>
    </tbody>
</table>
</p>

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
            <td>scriptSource</td>
            <td><code class="flyout">string</code></td>
            <td>Script source.</td>
        </tr>
    </tbody>
</table>
</p>

---

### setPauseOnExceptions
Defines pause on exceptions state. Can be set to stop on all exceptions, uncaught exceptions or no exceptions. Initial pause on exceptions state is <code>none</code>. 

</p>

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
            <td>state</td>
            <td><code class="flyout">string</code>  <br/> <i>Allowed values: none, uncaught, all</i></td>
            <td>Pause on exceptions mode.</td>
        </tr>
    </tbody>
</table>
</p>

---

### evaluateOnCallFrame
Evaluates expression on a given call frame. 

</p>

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
            <td>callFrameId</td>
            <td><a href="#callframeid"><code class="flyout">CallFrameId</code></a></td>
            <td>Call frame identifier to evaluate on.</td>
        </tr>
        <tr>
            <td>expression</td>
            <td><code class="flyout">string</code></td>
            <td>Expression to evaluate.</td>
        </tr>
        <tr>
            <td>objectGroup <br/> <i>optional</i></td>
            <td><code class="flyout">string</code></td>
            <td>String object group name to put result into (allows rapid releasing resulting object handles using <code>releaseObjectGroup</code>).</td>
        </tr>
        <tr>
            <td>includeCommandLineAPI <br/> <i>optional</i></td>
            <td><code class="flyout">boolean</code></td>
            <td>Specifies whether command line API should be available to the evaluated expression, defaults to false.</td>
        </tr>
        <tr>
            <td>silent <br/> <i>optional</i></td>
            <td><code class="flyout">boolean</code></td>
            <td>In silent mode exceptions thrown during evaluation are not reported and do not pause execution. Overrides <code>setPauseOnException</code> state.</td>
        </tr>
        <tr>
            <td>returnByValue <br/> <i>optional</i></td>
            <td><code class="flyout">boolean</code></td>
            <td>Whether the result is expected to be a JSON object that should be sent by value.</td>
        </tr>
        <tr>
            <td>generatePreview <br/> <i>optional</i></td>
            <td><code class="flyout">boolean</code></td>
            <td>Whether preview should be generated for the result. <span style="color:white;background-color:Tomato;padding-left: 4px;padding-right:4px;padding-top:1px;padding-bottom:1px">EXPERIMENTAL</span></td>
        </tr>
        <tr>
            <td>throwOnSideEffect <br/> <i>optional</i></td>
            <td><code class="flyout">boolean</code></td>
            <td>Whether to throw an exception if side effect cannot be ruled out during evaluation. <span style="color:white;background-color:Tomato;padding-left: 4px;padding-right:4px;padding-top:1px;padding-bottom:1px">EXPERIMENTAL</span></td>
        </tr>
    </tbody>
</table>
</p>

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
            <td>result</td>
            <td><a href="runtime.md#remoteobject"><code class="flyout">Runtime.RemoteObject</code></a></td>
            <td>Object wrapper for the evaluation result.</td>
        </tr>
        <tr>
            <td>exceptionDetails <br/> <i>optional</i></td>
            <td><a href="runtime.md#exceptiondetails"><code class="flyout">Runtime.ExceptionDetails</code></a></td>
            <td>Exception details.</td>
        </tr>
    </tbody>
</table>
</p>

---

### setVariableValue
Changes value of variable in a callframe. Object-based scopes are not supported and must be mutated manually. 

</p>

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
            <td>scopeNumber</td>
            <td><code class="flyout">integer</code></td>
            <td>0-based number of scope as was listed in scope chain. Only 'local', 'closure' and 'catch' scope types are allowed. Other scopes could be manipulated manually.</td>
        </tr>
        <tr>
            <td>variableName</td>
            <td><code class="flyout">string</code></td>
            <td>Variable name.</td>
        </tr>
        <tr>
            <td>newValue</td>
            <td><a href="runtime.md#callargument"><code class="flyout">Runtime.CallArgument</code></a></td>
            <td>New variable value.</td>
        </tr>
        <tr>
            <td>callFrameId</td>
            <td><a href="#callframeid"><code class="flyout">CallFrameId</code></a></td>
            <td>Id of callframe that holds variable.</td>
        </tr>
    </tbody>
</table>
</p>

---

### setBlackboxPatterns
Replace previous blackbox patterns with passed ones. Forces backend to skip stepping/pausing in scripts with url matching one of the patterns. VM will try to leave blackboxed script by performing 'step in' several times, finally resorting to 'step out' if unsuccessful. <span style="color:white;background-color:Tomato;padding-left: 4px;padding-right:4px;padding-top:1px;padding-bottom:1px">EXPERIMENTAL</span>

</p>

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
            <td>patterns</td>
            <td><code class="flyout">string[]</code></td>
            <td>Array of regexps that will be used to check script url for blackbox state.</td>
        </tr>
    </tbody>
</table>
</p>

---

### msSetDebuggerPropertyValue
Microsoft: Sets the specified debugger property to the specified value. <span style="color:white;background-color:Tomato;padding-left: 4px;padding-right:4px;padding-top:1px;padding-bottom:1px">EXPERIMENTAL</span>

</p>

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
            <td>debuggerPropertyId</td>
            <td><code class="flyout">string</code></td>
            <td>Microsoft: The property id (i.e. msDebuggerPropertyId) to set.</td>
        </tr>
        <tr>
            <td>newValue</td>
            <td><code class="flyout">string</code></td>
            <td></td>
        </tr>
    </tbody>
</table>
</p>

---

## Events

### scriptParsed
Fired when virtual machine parses script. This event is also fired for all known and uncollected scripts upon enabling debugger. 

</p>

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
            <td>scriptId</td>
            <td><a href="runtime.md#scriptid"><code class="flyout">Runtime.ScriptId</code></a></td>
            <td>Identifier of the script parsed.</td>
        </tr>
        <tr>
            <td>url</td>
            <td><code class="flyout">string</code></td>
            <td>URL or name of the script parsed (if any).</td>
        </tr>
        <tr>
            <td>startLine</td>
            <td><code class="flyout">integer</code></td>
            <td>Line offset of the script within the resource with given URL (for script tags).</td>
        </tr>
        <tr>
            <td>startColumn</td>
            <td><code class="flyout">integer</code></td>
            <td>Column offset of the script within the resource with given URL.</td>
        </tr>
        <tr>
            <td>endLine</td>
            <td><code class="flyout">integer</code></td>
            <td>Last line of the script.</td>
        </tr>
        <tr>
            <td>endColumn</td>
            <td><code class="flyout">integer</code></td>
            <td>Length of the last line of the script.</td>
        </tr>
        <tr>
            <td>executionContextId</td>
            <td><a href="runtime.md#executioncontextid"><code class="flyout">Runtime.ExecutionContextId</code></a></td>
            <td>Specifies script creation context.</td>
        </tr>
        <tr>
            <td>hash</td>
            <td><code class="flyout">string</code></td>
            <td>Content hash of the script.</td>
        </tr>
        <tr>
            <td>executionContextAuxData <br/> <i>optional</i></td>
            <td><code class="flyout">object</code></td>
            <td>Embedder-specific auxiliary data.</td>
        </tr>
        <tr>
            <td>isLiveEdit <br/> <i>optional</i></td>
            <td><code class="flyout">boolean</code></td>
            <td>True, if this script is generated as a result of the live edit operation. <span style="color:white;background-color:Tomato;padding-left: 4px;padding-right:4px;padding-top:1px;padding-bottom:1px">EXPERIMENTAL</span></td>
        </tr>
        <tr>
            <td>sourceMapURL <br/> <i>optional</i></td>
            <td><code class="flyout">string</code></td>
            <td>URL of source map associated with script (if any).</td>
        </tr>
        <tr>
            <td>hasSourceURL <br/> <i>optional</i></td>
            <td><code class="flyout">boolean</code></td>
            <td>True, if this script has sourceURL. <span style="color:white;background-color:Tomato;padding-left: 4px;padding-right:4px;padding-top:1px;padding-bottom:1px">EXPERIMENTAL</span></td>
        </tr>
        <tr>
            <td>isModule <br/> <i>optional</i></td>
            <td><code class="flyout">boolean</code></td>
            <td>True, if this script is ES6 module. <span style="color:white;background-color:Tomato;padding-left: 4px;padding-right:4px;padding-top:1px;padding-bottom:1px">EXPERIMENTAL</span></td>
        </tr>
        <tr>
            <td>length <br/> <i>optional</i></td>
            <td><code class="flyout">integer</code></td>
            <td>This script length. <span style="color:white;background-color:Tomato;padding-left: 4px;padding-right:4px;padding-top:1px;padding-bottom:1px">EXPERIMENTAL</span></td>
        </tr>
        <tr>
            <td>stackTrace <br/> <i>optional</i></td>
            <td><a href="runtime.md#stacktrace"><code class="flyout">Runtime.StackTrace</code></a></td>
            <td>JavaScript top stack frame of where the script parsed event was triggered if available. <span style="color:white;background-color:Tomato;padding-left: 4px;padding-right:4px;padding-top:1px;padding-bottom:1px">EXPERIMENTAL</span></td>
        </tr>
    </tbody>
</table>
</p>

---

### breakpointResolved
Fired when breakpoint is resolved to an actual script and location. 

</p>

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
            <td>breakpointId</td>
            <td><a href="#breakpointid"><code class="flyout">BreakpointId</code></a></td>
            <td>Breakpoint unique identifier.</td>
        </tr>
        <tr>
            <td>location</td>
            <td><a href="#location"><code class="flyout">Location</code></a></td>
            <td>Actual breakpoint location.</td>
        </tr>
        <tr>
            <td>msLength <br/> <i>optional</i></td>
            <td><code class="flyout">integer</code></td>
            <td>Microsoft: Length of code (i.e. number of characters) at the breakpoint location. <span style="color:white;background-color:Tomato;padding-left: 4px;padding-right:4px;padding-top:1px;padding-bottom:1px">EXPERIMENTAL</span></td>
        </tr>
    </tbody>
</table>
</p>

---

### paused
Fired when the virtual machine stopped on breakpoint or exception or any other stop criteria. 

</p>

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
            <td>callFrames</td>
            <td><a href="#callframe"><code class="flyout">CallFrame[]</code></a></td>
            <td>Call stack the virtual machine stopped on.</td>
        </tr>
        <tr>
            <td>reason</td>
            <td><code class="flyout">string</code>  <br/> <i>Allowed values: XHR, DOM, EventListener, exception, assert, debugCommand, promiseRejection, OOM, other, ambiguous</i></td>
            <td>Pause reason.</td>
        </tr>
        <tr>
            <td>data <br/> <i>optional</i></td>
            <td><code class="flyout">object</code></td>
            <td>Object containing break-specific auxiliary properties.</td>
        </tr>
        <tr>
            <td>hitBreakpoints <br/> <i>optional</i></td>
            <td><code class="flyout">string[]</code></td>
            <td>Hit breakpoints IDs</td>
        </tr>
        <tr>
            <td>asyncStackTrace <br/> <i>optional</i></td>
            <td><a href="runtime.md#stacktrace"><code class="flyout">Runtime.StackTrace</code></a></td>
            <td>Async stack trace, if any.</td>
        </tr>
    </tbody>
</table>
</p>

---

### resumed
Fired when the virtual machine resumed execution. 

</p>

---

## Types

### <a name="breakpointid"></a> BreakpointId `string`

Breakpoint identifier.

</p>

---

### <a name="callframeid"></a> CallFrameId `string`

Call frame identifier.

</p>

---

### <a name="location"></a> Location `object`

Location in the source code.

</p>

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
            <td>scriptId</td>
            <td><a href="runtime.md#scriptid"><code class="flyout">Runtime.ScriptId</code></a></td>
            <td>Script identifier as reported in the <code>Debugger.scriptParsed</code>.</td>
        </tr>
        <tr>
            <td>lineNumber</td>
            <td><code class="flyout">integer</code></td>
            <td>Line number in the script (0-based).</td>
        </tr>
        <tr>
            <td>columnNumber <br/> <i>optional</i></td>
            <td><code class="flyout">integer</code></td>
            <td>Column number in the script (0-based).</td>
        </tr>
    </tbody>
</table>
</p>

---

### <a name="scriptposition"></a> ScriptPosition `object`
<span style="color:white;background-color:Tomato;padding-left: 4px;padding-right:4px;padding-top:1px;padding-bottom:1px">EXPERIMENTAL</span> <br/>
Location in the source code.

</p>

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
            <td>lineNumber</td>
            <td><code class="flyout">integer</code></td>
            <td></td>
        </tr>
        <tr>
            <td>columnNumber</td>
            <td><code class="flyout">integer</code></td>
            <td></td>
        </tr>
    </tbody>
</table>
</p>

---

### <a name="callframe"></a> CallFrame `object`

JavaScript call frame. Array of call frames form the call stack.

</p>

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
            <td>callFrameId</td>
            <td><a href="#callframeid"><code class="flyout">CallFrameId</code></a></td>
            <td>Call frame identifier. This identifier is only valid while the virtual machine is paused.</td>
        </tr>
        <tr>
            <td>functionName</td>
            <td><code class="flyout">string</code></td>
            <td>Name of the JavaScript function called on this call frame.</td>
        </tr>
        <tr>
            <td>functionLocation <br/> <i>optional</i></td>
            <td><a href="#location"><code class="flyout">Location</code></a></td>
            <td>Location in the source code. <span style="color:white;background-color:Tomato;padding-left: 4px;padding-right:4px;padding-top:1px;padding-bottom:1px">EXPERIMENTAL</span></td>
        </tr>
        <tr>
            <td>location</td>
            <td><a href="#location"><code class="flyout">Location</code></a></td>
            <td>Location in the source code.</td>
        </tr>
        <tr>
            <td>url</td>
            <td><code class="flyout">string</code></td>
            <td>JavaScript script name or url.</td>
        </tr>
        <tr>
            <td>scopeChain</td>
            <td><a href="#scope"><code class="flyout">Scope[]</code></a></td>
            <td>Scope chain for this call frame.</td>
        </tr>
        <tr>
            <td>this</td>
            <td><a href="runtime.md#remoteobject"><code class="flyout">Runtime.RemoteObject</code></a></td>
            <td><code>this</code> object for this call frame.</td>
        </tr>
        <tr>
            <td>msLength <br/> <i>optional</i></td>
            <td><code class="flyout">integer</code></td>
            <td>Microsoft: Length of code (i.e. number of characters) at this call frame. <span style="color:white;background-color:Tomato;padding-left: 4px;padding-right:4px;padding-top:1px;padding-bottom:1px">EXPERIMENTAL</span></td>
        </tr>
        <tr>
            <td>returnValue <br/> <i>optional</i></td>
            <td><a href="runtime.md#remoteobject"><code class="flyout">Runtime.RemoteObject</code></a></td>
            <td>The value being returned, if the function is at return point.</td>
        </tr>
    </tbody>
</table>
</p>

---

### <a name="scope"></a> Scope `object`

Scope description.

</p>

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
            <td>type</td>
            <td><code class="flyout">string</code>  <br/> <i>Allowed values: global, local, with, closure, catch, block, script, eval, module</i></td>
            <td>Scope type.</td>
        </tr>
        <tr>
            <td>object</td>
            <td><a href="runtime.md#remoteobject"><code class="flyout">Runtime.RemoteObject</code></a></td>
            <td>Object representing the scope. For <code>global</code> and <code>with</code> scopes it represents the actual object; for the rest of the scopes, it is artificial transient object enumerating scope variables as its properties.</td>
        </tr>
        <tr>
            <td>name <br/> <i>optional</i></td>
            <td><code class="flyout">string</code></td>
            <td></td>
        </tr>
        <tr>
            <td>startLocation <br/> <i>optional</i></td>
            <td><a href="#location"><code class="flyout">Location</code></a></td>
            <td>Location in the source code where scope starts</td>
        </tr>
        <tr>
            <td>endLocation <br/> <i>optional</i></td>
            <td><a href="#location"><code class="flyout">Location</code></a></td>
            <td>Location in the source code where scope ends</td>
        </tr>
    </tbody>
</table>
</p>

---

## Dependencies

[Runtime](runtime.md)