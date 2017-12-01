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

| Parameters | | |
|-|-|-|
| active | `boolean` | New value for breakpoints active state. |

</p>

---

### setBreakpointByUrl
Sets JavaScript breakpoint at given location specified either by URL or URL regex. Once this command is issued, all existing parsed scripts will have breakpoints resolved and returned in <code>locations</code> property. Further matching script parsing will result in subsequent <code>breakpointResolved</code> events issued. This logical breakpoint will survive page reloads. 

</p>

| Parameters | | |
|-|-|-|
| lineNumber | `integer` | Line number to set breakpoint at. |
| url <br/> *optional* | `string` | URL of the resources to set breakpoint on. |
| urlRegex <br/> *optional* | `string` | Regex pattern for the URLs of the resources to set breakpoints on. Either <code>url</code> or <code>urlRegex</code> must be specified. |
| scriptHash <br/> *optional* | `string` | Script hash of the resources to set breakpoint on. <span style="color:white;background-color:Tomato;padding-left: 4px;padding-right:4px;padding-top:1px;padding-bottom:1px">EXPERIMENTAL</span> |
| columnNumber <br/> *optional* | `integer` | Offset in the line to set breakpoint at. |
| condition <br/> *optional* | `string` | Expression to use as a breakpoint condition. When specified, debugger will only stop on the breakpoint if this expression evaluates to true. |

</p>

| Returns | | |
|-|-|-|
| breakpointId | [`BreakpointId`](#breakpointid) | Id of the created breakpoint for further reference. |
| locations | [`Location[]`](#location) | List of the locations this breakpoint resolved into upon addition. |

</p>

---

### setBreakpoint
Sets JavaScript breakpoint at a given location. 

</p>

| Parameters | | |
|-|-|-|
| location | [`Location`](#location) | Location to set breakpoint in. |
| condition <br/> *optional* | `string` | Expression to use as a breakpoint condition. When specified, debugger will only stop on the breakpoint if this expression evaluates to true. |

</p>

| Returns | | |
|-|-|-|
| breakpointId | [`BreakpointId`](#breakpointid) | Id of the created breakpoint for further reference. |
| actualLocation | [`Location`](#location) | Location this breakpoint resolved into. |

</p>

---

### removeBreakpoint
Removes JavaScript breakpoint. 

</p>

| Parameters | | |
|-|-|-|
| breakpointId | [`BreakpointId`](#breakpointid) |  |

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

| Parameters | | |
|-|-|-|
| scriptId | [`Runtime.ScriptId`](runtime.md#scriptid) | Id of the script to get source for. |

</p>

| Returns | | |
|-|-|-|
| scriptSource | `string` | Script source. |

</p>

---

### setPauseOnExceptions
Defines pause on exceptions state. Can be set to stop on all exceptions, uncaught exceptions or no exceptions. Initial pause on exceptions state is <code>none</code>. 

</p>

| Parameters | | |
|-|-|-|
| state | `string` <br/> *Allowed values: none, uncaught, all* | Pause on exceptions mode. |

</p>

---

### evaluateOnCallFrame
Evaluates expression on a given call frame. 

</p>

| Parameters | | |
|-|-|-|
| callFrameId | [`CallFrameId`](#callframeid) | Call frame identifier to evaluate on. |
| expression | `string` | Expression to evaluate. |
| objectGroup <br/> *optional* | `string` | String object group name to put result into (allows rapid releasing resulting object handles using <code>releaseObjectGroup</code>). |
| includeCommandLineAPI <br/> *optional* | `boolean` | Specifies whether command line API should be available to the evaluated expression, defaults to false. |
| silent <br/> *optional* | `boolean` | In silent mode exceptions thrown during evaluation are not reported and do not pause execution. Overrides <code>setPauseOnException</code> state. |
| returnByValue <br/> *optional* | `boolean` | Whether the result is expected to be a JSON object that should be sent by value. |
| generatePreview <br/> *optional* | `boolean` | Whether preview should be generated for the result. <span style="color:white;background-color:Tomato;padding-left: 4px;padding-right:4px;padding-top:1px;padding-bottom:1px">EXPERIMENTAL</span> |
| throwOnSideEffect <br/> *optional* | `boolean` | Whether to throw an exception if side effect cannot be ruled out during evaluation. <span style="color:white;background-color:Tomato;padding-left: 4px;padding-right:4px;padding-top:1px;padding-bottom:1px">EXPERIMENTAL</span> |

</p>

| Returns | | |
|-|-|-|
| result | [`Runtime.RemoteObject`](runtime.md#remoteobject) | Object wrapper for the evaluation result. |
| exceptionDetails <br/> *optional* | [`Runtime.ExceptionDetails`](runtime.md#exceptiondetails) | Exception details. |

</p>

---

### setVariableValue
Changes value of variable in a callframe. Object-based scopes are not supported and must be mutated manually. 

</p>

| Parameters | | |
|-|-|-|
| scopeNumber | `integer` | 0-based number of scope as was listed in scope chain. Only 'local', 'closure' and 'catch' scope types are allowed. Other scopes could be manipulated manually. |
| variableName | `string` | Variable name. |
| newValue | [`Runtime.CallArgument`](runtime.md#callargument) | New variable value. |
| callFrameId | [`CallFrameId`](#callframeid) | Id of callframe that holds variable. |

</p>

---

### setBlackboxPatterns
Replace previous blackbox patterns with passed ones. Forces backend to skip stepping/pausing in scripts with url matching one of the patterns. VM will try to leave blackboxed script by performing 'step in' several times, finally resorting to 'step out' if unsuccessful. <span style="color:white;background-color:Tomato;padding-left: 4px;padding-right:4px;padding-top:1px;padding-bottom:1px">EXPERIMENTAL</span>

</p>

| Parameters | | |
|-|-|-|
| patterns | `string[]` | Array of regexps that will be used to check script url for blackbox state. |

</p>

---

### msSetDebuggerPropertyValue
Microsoft: Sets the specified debugger property to the specified value. <span style="color:white;background-color:Tomato;padding-left: 4px;padding-right:4px;padding-top:1px;padding-bottom:1px">EXPERIMENTAL</span>

</p>

| Parameters | | |
|-|-|-|
| debuggerPropertyId | `string` | Microsoft: The property id (i.e. msDebuggerPropertyId) to set. |
| newValue | `string` |  |

</p>

---

## Events

### scriptParsed
Fired when virtual machine parses script. This event is also fired for all known and uncollected scripts upon enabling debugger. 

</p>

| Parameters | | |
|-|-|-|
| scriptId | [`Runtime.ScriptId`](runtime.md#scriptid) | Identifier of the script parsed. |
| url | `string` | URL or name of the script parsed (if any). |
| startLine | `integer` | Line offset of the script within the resource with given URL (for script tags). |
| startColumn | `integer` | Column offset of the script within the resource with given URL. |
| endLine | `integer` | Last line of the script. |
| endColumn | `integer` | Length of the last line of the script. |
| executionContextId | [`Runtime.ExecutionContextId`](runtime.md#executioncontextid) | Specifies script creation context. |
| hash | `string` | Content hash of the script. |
| executionContextAuxData <br/> *optional* | `object` | Embedder-specific auxiliary data. |
| isLiveEdit <br/> *optional* | `boolean` | True, if this script is generated as a result of the live edit operation. <span style="color:white;background-color:Tomato;padding-left: 4px;padding-right:4px;padding-top:1px;padding-bottom:1px">EXPERIMENTAL</span> |
| sourceMapURL <br/> *optional* | `string` | URL of source map associated with script (if any). |
| hasSourceURL <br/> *optional* | `boolean` | True, if this script has sourceURL. <span style="color:white;background-color:Tomato;padding-left: 4px;padding-right:4px;padding-top:1px;padding-bottom:1px">EXPERIMENTAL</span> |
| isModule <br/> *optional* | `boolean` | True, if this script is ES6 module. <span style="color:white;background-color:Tomato;padding-left: 4px;padding-right:4px;padding-top:1px;padding-bottom:1px">EXPERIMENTAL</span> |
| length <br/> *optional* | `integer` | This script length. <span style="color:white;background-color:Tomato;padding-left: 4px;padding-right:4px;padding-top:1px;padding-bottom:1px">EXPERIMENTAL</span> |
| stackTrace <br/> *optional* | [`Runtime.StackTrace`](runtime.md#stacktrace) | JavaScript top stack frame of where the script parsed event was triggered if available. <span style="color:white;background-color:Tomato;padding-left: 4px;padding-right:4px;padding-top:1px;padding-bottom:1px">EXPERIMENTAL</span> |

</p>

---

### breakpointResolved
Fired when breakpoint is resolved to an actual script and location. 

</p>

| Parameters | | |
|-|-|-|
| breakpointId | [`BreakpointId`](#breakpointid) | Breakpoint unique identifier. |
| location | [`Location`](#location) | Actual breakpoint location. |
| msLength <br/> *optional* | `integer` | Microsoft: Length of code (i.e. number of characters) at the breakpoint location. <span style="color:white;background-color:Tomato;padding-left: 4px;padding-right:4px;padding-top:1px;padding-bottom:1px">EXPERIMENTAL</span> |

</p>

---

### paused
Fired when the virtual machine stopped on breakpoint or exception or any other stop criteria. 

</p>

| Parameters | | |
|-|-|-|
| callFrames | [`CallFrame[]`](#callframe) | Call stack the virtual machine stopped on. |
| reason | `string` <br/> *Allowed values: XHR, DOM, EventListener, exception, assert, debugCommand, promiseRejection, OOM, other, ambiguous* | Pause reason. |
| data <br/> *optional* | `object` | Object containing break-specific auxiliary properties. |
| hitBreakpoints <br/> *optional* | `string[]` | Hit breakpoints IDs |
| asyncStackTrace <br/> *optional* | [`Runtime.StackTrace`](runtime.md#stacktrace) | Async stack trace, if any. |

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

| Properties | | |
|-|-|-|
| scriptId | [`Runtime.ScriptId`](runtime.md#scriptid) | Script identifier as reported in the <code>Debugger.scriptParsed</code>. |
| lineNumber | `integer` | Line number in the script (0-based). |
| columnNumber <br/> *optional* | `integer` | Column number in the script (0-based). |

</p>

---

### <a name="scriptposition"></a> ScriptPosition `object`
<span style="color:white;background-color:Tomato;padding-left: 4px;padding-right:4px;padding-top:1px;padding-bottom:1px">EXPERIMENTAL</span> <br/>
Location in the source code.

</p>

| Properties | | |
|-|-|-|
| lineNumber | `integer` |  |
| columnNumber | `integer` |  |

</p>

---

### <a name="callframe"></a> CallFrame `object`

JavaScript call frame. Array of call frames form the call stack.

</p>

| Properties | | |
|-|-|-|
| callFrameId | [`CallFrameId`](#callframeid) | Call frame identifier. This identifier is only valid while the virtual machine is paused. |
| functionName | `string` | Name of the JavaScript function called on this call frame. |
| functionLocation <br/> *optional* | [`Location`](#location) | Location in the source code. <span style="color:white;background-color:Tomato;padding-left: 4px;padding-right:4px;padding-top:1px;padding-bottom:1px">EXPERIMENTAL</span> |
| location | [`Location`](#location) | Location in the source code. |
| url | `string` | JavaScript script name or url. |
| scopeChain | [`Scope[]`](#scope) | Scope chain for this call frame. |
| this | [`Runtime.RemoteObject`](runtime.md#remoteobject) | <code>this</code> object for this call frame. |
| msLength <br/> *optional* | `integer` | Microsoft: Length of code (i.e. number of characters) at this call frame. <span style="color:white;background-color:Tomato;padding-left: 4px;padding-right:4px;padding-top:1px;padding-bottom:1px">EXPERIMENTAL</span> |
| returnValue <br/> *optional* | [`Runtime.RemoteObject`](runtime.md#remoteobject) | The value being returned, if the function is at return point. |

</p>

---

### <a name="scope"></a> Scope `object`

Scope description.

</p>

| Properties | | |
|-|-|-|
| type | `string` <br/> *Allowed values: global, local, with, closure, catch, block, script, eval, module* | Scope type. |
| object | [`Runtime.RemoteObject`](runtime.md#remoteobject) | Object representing the scope. For <code>global</code> and <code>with</code> scopes it represents the actual object; for the rest of the scopes, it is artificial transient object enumerating scope variables as its properties. |
| name <br/> *optional* | `string` |  |
| startLocation <br/> *optional* | [`Location`](#location) | Location in the source code where scope starts |
| endLocation <br/> *optional* | [`Location`](#location) | Location in the source code where scope ends |

</p>

---

## Dependencies

[Runtime](runtime.md)