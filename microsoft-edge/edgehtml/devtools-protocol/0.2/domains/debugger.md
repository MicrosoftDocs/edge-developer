---
description: DevTools Protocol Version 0.2 (EdgeHTML) reference for the Debugger Domain. Debugger domain exposes JavaScript debugging capabilities. It allows setting and removing breakpoints, stepping through execution, exploring stack traces, etc.
title: Debugger Domain - DevTools Protocol Version 0.2 (EdgeHTML)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 11/03/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.custom: seodec18
ROBOTS: NOINDEX,NOFOLLOW
---
# Debugger Domain - DevTools Protocol Version 0.2 (EdgeHTML)  

Debugger domain exposes JavaScript debugging capabilities. It allows setting and removing breakpoints, stepping through execution, exploring stack traces, etc.

| Classification | Members |  
|:--- |:--- |  
| [**Methods**](#methods) | [enable](#enable), [disable](#disable), [getPossibleBreakpoints](#getpossiblebreakpoints), [setBreakpointsActive](#setbreakpointsactive), [setBreakpointByUrl](#setbreakpointbyurl), [setBreakpoint](#setbreakpoint), [removeBreakpoint](#removebreakpoint), [stepOver](#stepover), [stepInto](#stepinto), [stepOut](#stepout), [pause](#pause), [resume](#resume), [getScriptSource](#getscriptsource), [setPauseOnExceptions](#setpauseonexceptions), [evaluateOnCallFrame](#evaluateoncallframe), [setVariableValue](#setvariablevalue), [setBlackboxPatterns](#setblackboxpatterns), [msSetDebuggerPropertyValue](#mssetdebuggerpropertyvalue) |  
| [**Events**](#events) | [scriptParsed](#scriptparsed), [breakpointResolved](#breakpointresolved), [paused](#paused), [resumed](#resumed) |  
| [**Types**](#types) | [BreakpointId](#breakpointid), [CallFrameId](#callframeid), [Location](#location), [BreakLocation](#breaklocation), [CallFrame](#callframe), [Scope](#scope) |  
| [**Dependencies**](#dependencies) | [Runtime](./runtime.md) |  

## Methods  

### enable  

Enables debugger for the given page. Clients should not assume that the debugging has been enabled until the result for this command is received.  

&nbsp;  

---  

### disable  

Disables debugger for given page.  

&nbsp;  

---  

### getPossibleBreakpoints  

Returns possible locations for breakpoint. scriptId in start and end range locations should be the same.  

| Parameters | Type | Details |  
|:--- |:--- |:--- |  
| start | [Location](#location) | Start of range to search possible breakpoint locations in. |  
| end | [Location](#location) | End of range to search possible breakpoint locations in \(excluding\).  When not specified, end of scripts is used as end of range. |  

| Returns | Type | Details |  
|:--- |:--- |:--- |  
| locations | [BreakLocation](#breaklocation) | List of the possible breakpoint locations. |  

---  

### setBreakpointsActive  

Activates / deactivates all breakpoints on the page.  

| Parameters | Type | Details |  
|:--- |:--- |:--- |  
| active | `boolean` | New value for breakpoints active state. | 

---  

### setBreakpointByUrl  

Sets JavaScript breakpoint at given location specified either by URL or URL regex.  Once this command is issued, all existing parsed scripts will have breakpoints resolved and returned in `locations` property.  Further matching script parsing will result in subsequent `breakpointResolved` events issued.  This logical breakpoint will survive page reloads.  

| Parameters | Type | Details |  
|:--- |:--- |:--- |  
| lineNumber | `integer` | Line number to set breakpoint at. | 
| url \(optional\) | `string` | URL of the resources to set breakpoint on. |  
| urlRegex \(optional\) | `string` | Regex pattern for the URLs of the resources to set breakpoints on.  Either `url` or `urlRegex` must be specified. |  
| columnNumber \(optional\) | `integer` | Offset in the line to set breakpoint at. |  
| condition \(optional\) | `string` | Expression to use as a breakpoint condition. When specified, debugger will only stop on the breakpoint if this expression evaluates to true. |  

| Returns | Type | Details |  
|:--- |:--- |:--- |  
| breakpointId | [BreakpointId](#breakpointid) | ID of the created breakpoint for further reference. |  
| locations | [Location[]](#location) | List of the locations this breakpoint resolved into upon addition. |  

---  

### setBreakpoint  

Sets JavaScript breakpoint at a given location.  

| Parameters | Type | Details |  
|:--- |:--- |:--- |  
| location | [Location](#location) | Location to set breakpoint in. |  
| condition \(optional\) | `string` | Expression to use as a breakpoint condition.  When specified, debugger will only stop on the breakpoint if this expression evaluates to true. |  

| Returns | Type | Details |  
|:--- |:--- |:--- |  
| breakpointId | [BreakpointId](#breakpointid) | ID of the created breakpoint for further reference. |  
| actualLocation | [Location](#location) | Location this breakpoint resolved into. |  

---  

### removeBreakpoint  

Removes JavaScript breakpoint.  

| Parameters | Type | Details |  
|:--- |:--- |:--- |  
| breakpointId | [BreakpointId](#breakpointid) | &nbsp; |  

---  

### stepOver  

Steps over the statement.  

&nbsp;  

---  

### stepInto  

Steps into the function call.  

&nbsp;  

---  

### stepOut  

Steps out of the function call.  

&nbsp;  

---  

### pause  

Stops on the next JavaScript statement.  

&nbsp;  

---  

### resume  

Resumes JavaScript execution.  

&nbsp;  

---  

### getScriptSource  

Returns source for the script with given id.  

| Parameters | Type | Details |  
|:--- |:--- |:--- |  
| scriptId | [Runtime.ScriptId](./runtime.md#scriptid) | ID of the script to get source for. |  

| Returns | Type | Details |  
|:--- |:--- |:--- |  
| scriptSource | `string` | Script source. | 

---  

### setPauseOnExceptions  

Defines pause on exceptions state.  Can be set to stop on all exceptions, uncaught exceptions or no exceptions.  Initial pause on exceptions state is `none`.  

| Parameters | Type | Details |  
|:--- |:--- |:--- |  
| state | `string` | Pause on exceptions mode.  Allowed values:  `none`, `uncaught`, `all` |  

---  

### evaluateOnCallFrame  

Evaluates expression on a given call frame.  

| Parameters | Type | Details |  
|:--- |:--- |:--- |  
| callFrameId | [CallFrameId](#callframeid) | Call frame identifier to evaluate on. |  
| expression | `string` | Expression to evaluate. | 

| Returns | Type | Details |  
|:--- |:--- |:--- |  
| result | [Runtime.RemoteObject](./runtime.md#remoteobject) | Object wrapper for the evaluation result. |  

---  

### setVariableValue  

Changes value of variable in a callframe.  Object-based scopes are not supported and must be mutated manually.  

| Parameters | Type | Details |  
|:--- |:--- |:--- |  
| scopeNumber | `integer` | 0-based number of scope as was listed in scope chain.  Only `local`, `closure`, and `catch` scope types are allowed.  Other scopes could be manipulated manually. | 
| variableName | `string` | Variable name. | 
| newValue | [Runtime.CallArgument](./runtime.md#callargument) | New variable value. |  
| callFrameId | [CallFrameId](#callframeid) | ID of callframe that holds variable. |  

---  

### setBlackboxPatterns  

**Experimental**.  Replace previous blackbox patterns with passed ones.  Forces backend to skip stepping/pausing in scripts with url matching one of the patterns.  The debugger will try to leave blackboxed script by performing 'step in' several times, finally resorting to 'step out' if unsuccessful.  


| Parameters | Type | Details |  
|:--- |:--- |:--- |  
| patterns | `string[]` | Array of regexps that will be used to check script url for blackbox state. | 

---  

### msSetDebuggerPropertyValue  

**Experimental**.  Microsoft: Sets the specified debugger property to the specified value.  

| Parameters | Type | Details |  
|:--- |:--- |:--- |  
| debuggerPropertyId | string | Microsoft:  The property id \(i.e. `msDebuggerPropertyId`\) to set. | 
| newValue | `string` | &nbsp; |  

---  

## Events  

### scriptParsed  

Fired when the script is parsed. This event is also fired for all known and uncollected scripts upon enabling debugger.  

| Parameters | Type | Details |  
|:--- |:--- |:--- |  
| scriptId | [Runtime.ScriptId](./runtime.md#scriptid) | Identifier of the script parsed. |  
| url | `string` | URL or name of the script parsed \(if any\). | 
| startLine | `integer` | Line offset of the script within the resource with given URL \(for script tags\). | 
| startColumn | `integer` | Column offset of the script within the resource with given URL. | 
| endLine | `integer` | Last line of the script. | 
| endColumn | `integer` | Length of the last line of the script. | 
| executionContextId | [Runtime.ExecutionContextId](./runtime.md#executioncontextid) | Specifies script creation context. |  
| sourceMapURL \(optional\) | `string` | URL of source map associated with script (if any). |  
| length \(optional\) | `integer` | **Experimental**.  This script length. |  
| msParentId \(optional\) | `string` | **Experimental**.  This is the parent document ID. |  
| msMimeType \(optional\) | `string` | **Experimental**.  This is the mime type. |  
| msIsDynamicCode \(optional\) | `boolean` | **Experimental**.  This indicates whether it is dynamic code. |  
| msLongDocumentId \(optional\) | `integer` | **Experimental**.  This is the long document ID. |  

---  

### breakpointResolved  

Fired when breakpoint is resolved to an actual script and location.  

| Parameters | Type | Details |  
|:--- |:--- |:--- |  
| breakpointId | [BreakpointId](#breakpointid) | Breakpoint unique identifier. |  
| location | [Location](#location) | Actual breakpoint location. |  
| msLength \(optional\) | `integer` | **Experimental**.  Microsoft:  Length of code \(i.e. number of characters\) at the breakpoint location. |  

---  

### paused  

Fired when the debuggers breaks for a breakpoint or exception.  

| Parameters | Type | Details |  
|:--- |:--- |:--- |  
| callFrames | [CallFrame[]](#callframe) | Call stack the debugger stopped on. |  
| reason | `string` |  Pause reason.  Allowed values:  `breakpoint`, `step`, `exception`, `other`, and `EventListener` |  
| data \(optional\) | `object` | Object containing break-specific auxiliary properties. |  
| hitBreakpoints \(optional\) | `string[]` | Hit breakpoints IDs |  
| asyncStackTrace \(optional\) | `StackTrace` | JavaScript async stack trace. |  

---  

### resumed  

Fired when the debugger resumes execution.  

&nbsp;  

---  

## Types  

### BreakpointId string  

<a name="breakpointid"></a>  

Breakpoint identifier.  

&nbsp;  

---  

### CallFrameId string  

<a name="callframeid"></a>  

Call frame identifier.  

&nbsp;  

---  

### Location object  

<a name="location"></a>  

Location in the source code.  

| Properties | Type | Details |  
|:--- |:--- |:--- |  
| scriptId | [Runtime.ScriptId](./runtime.md#scriptid) | Script identifier as reported in the `Debugger.scriptParsed`. |  
| lineNumber | `integer` | Line number in the script \(0-based\). |  
| columnNumber \(optional\) | `integer` | Column number in the script \(0-based\). |  
| msLength | `integer` | Microsoft:  Length of code \(i.e. number of characters\) at this call frame. |  

---  

### BreakLocation object  

<a name="breaklocation"></a>  

Break location in the source code.  

| Properties | Type | Details |  
|:--- |:--- |:--- |  
| scriptId | [Runtime.ScriptId](./runtime.md#scriptid) | Script identifier as reported in the `Debugger.scriptParsed`. |  
| lineNumber | `integer` | Line number in the script \(0-based\). |  
| columnNumber \(optional\) | `integer` | Column number in the script \(0-based\). |  
| msLength | `integer` | Microsoft:  Length of code \(i.e. number of characters\) at this call frame. |  
| type \(optional\) | `string` | Allowed values: debuggerStatement, call, return. |  

---  

### CallFrame object  

<a name="callframe"></a>  

JavaScript call frame. Array of call frames form the call stack.  

| Properties | Type | Details |  
|:--- |:--- |:--- |  
| callFrameId | [CallFrameId](#callframeid) | Call frame identifier.  This identifier is only valid while the debugger is paused. |  
| functionName | `string` | Name of the JavaScript function called on this call frame. |  
| functionLocation \(optional\) | [Location](#location) | **Experimental**.  Location in the source code. |  
| location | [Location](#location) | Location in the source code. |  
| url | `string` | JavaScript script name or url. |  
| scopeChain | [Scope[]](#scope) | Scope chain for this call frame. |  
| this | [Runtime.RemoteObject](./runtime.md#remoteobject) | `this` object for this call frame. |  
| returnValue \(optional\) | [Runtime.RemoteObject](./runtime.md#remoteobject) | The value being returned, if the function is at return point. |  

---  

### Scope object  

<a name="scope"></a>  

Scope description.  

| Properties | Type | Details |  
|:--- |:--- |:--- |  
| type | `string` | Scope type.  Allowed values:  `global`, `local`, `with`, `closure`, `catch`, `block`, `script`, `eval`, `module`, and `return` |  
| object | [Runtime.RemoteObject](./runtime.md#remoteobject) | Object representing the scope.  For `global` and `with` scopes it represents the actual object; for the rest of the scopes, it is artificial transient object enumerating scope variables as its properties. |  
| name \(optional\) | `string` | &nbsp; |  
| startLocation \(optional\) | [Location](#location) | Location in the source code where scope starts. |  
| endLocation \(optional\) | [Location](#location) | Location in the source code where scope ends. |  

---  

## Dependencies  

[Runtime](./runtime.md)  
