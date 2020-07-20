---
description: Reference for the Runtime Domain. Runtime domain exposes JavaScript runtime by means of remote evaluation and mirror objects. Evaluation results are returned as mirror object that expose object type, string representation and unique identifier that can be used for further object reference. Original objects are maintained in memory unless they are either explicitly released.
title: Runtime Domain - DevTools Protocol Version 0.1 (EdgeHTML)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/16/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.custom: seodec18
---
# Runtime Domain - DevTools Protocol Version 0.1 (EdgeHTML)  

Runtime domain exposes JavaScript runtime by means of remote evaluation and mirror objects. Evaluation results are returned as mirror object that expose object type, string representation and unique identifier that can be used for further object reference. Original objects are maintained in memory unless they are either explicitly released.

| | |
|-|-|
| [**Methods**](#methods) | [enable](#enable), [disable](#disable), [evaluate](#evaluate), [callFunctionOn](#callfunctionon), [getProperties](#getproperties) |
| [**Events**](#events) | [executionContextsCleared](#executioncontextscleared), [exceptionThrown](#exceptionthrown) |
| [**Types**](#types) | [ScriptId](#scriptid), [RemoteObjectId](#remoteobjectid), [UnserializableValue](#unserializablevalue), [RemoteObject](#remoteobject), [PropertyDescriptor](#propertydescriptor), [CallArgument](#callargument), [ExecutionContextId](#executioncontextid), [ExceptionDetails](#exceptiondetails), [Timestamp](#timestamp), [CallFrame](#callframe), [StackTrace](#stacktrace) |
## Methods

### enable
Enables reporting of the <code>executionContextsCleared</code> event.


---

### disable
Disables reporting of the <code>executionContextsCleared</code> event.


---

### evaluate
Evaluates expression on global object.

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
            <td>expression</td>
            <td><code class="flyout">string</code></td>
            <td>Expression to evaluate.</td>
        </tr>
        <tr>
            <td>silent <br/> <i>optional</i></td>
            <td><code class="flyout">boolean</code></td>
            <td>In silent mode exceptions thrown during evaluation are not reported and do not pause execution. Overrides <code>setPauseOnException</code> state.</td>
        </tr>
        <tr>
            <td>contextId <br/> <i>optional</i></td>
            <td><a href="#executioncontextid"><code class="flyout">ExecutionContextId</code></a></td>
            <td>Specifies in which execution context to perform evaluation. If the parameter is omitted the evaluation will be performed in the context of the inspected page.</td>
        </tr>
        <tr>
            <td>returnByValue <br/> <i>optional</i></td>
            <td><code class="flyout">boolean</code></td>
            <td>Whether the result is expected to be a JSON object that should be sent by value.</td>
        </tr>
        <tr>
            <td>awaitPromise <br/> <i>optional</i></td>
            <td><code class="flyout">boolean</code></td>
            <td>Whether execution should <code>await</code> for resulting value and return once awaited promise is resolved.</td>
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
            <td>result</td>
            <td><a href="#remoteobject"><code class="flyout">RemoteObject</code></a></td>
            <td>Evaluation result.</td>
        </tr>
    </tbody>
</table>

---

### callFunctionOn
Calls function with given declaration on the given object. Object group of the result is inherited from the target object.

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
            <td>functionDeclaration</td>
            <td><code class="flyout">string</code></td>
            <td>Declaration of the function to call.</td>
        </tr>
        <tr>
            <td>objectId <br/> <i>optional</i></td>
            <td><a href="#remoteobjectid"><code class="flyout">RemoteObjectId</code></a></td>
            <td>Identifier of the object to call function on. Either objectId or executionContextId should be specified.  objectId must be from the Runtime.evaluate() function.</td>
        </tr>
        <tr>
            <td>arguments <br/> <i>optional</i></td>
            <td><a href="#callargument"><code class="flyout">CallArgument[]</code></a></td>
            <td>Call arguments. All call arguments must belong to the same JavaScript world as the target object.</td>
        </tr>
        <tr>
            <td>silent <br/> <i>optional</i></td>
            <td><code class="flyout">boolean</code></td>
            <td>In silent mode exceptions thrown during evaluation are not reported and do not pause execution. Overrides <code>setPauseOnException</code> state.</td>
        </tr>
        <tr>
            <td>returnByValue <br/> <i>optional</i></td>
            <td><code class="flyout">boolean</code></td>
            <td>Whether the result is expected to be a JSON object which should be sent by value.</td>
        </tr>
        <tr>
            <td>awaitPromise <br/> <i>optional</i></td>
            <td><code class="flyout">boolean</code></td>
            <td>Whether execution should <code>await</code> for resulting value and return once awaited promise is resolved.</td>
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
            <td>result</td>
            <td><a href="#remoteobject"><code class="flyout">RemoteObject</code></a></td>
            <td>Call result.</td>
        </tr>
    </tbody>
</table>

---

### getProperties
Returns properties of a given object. Object group of the result is inherited from the target object.

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
            <td><a href="#remoteobjectid"><code class="flyout">RemoteObjectId</code></a></td>
            <td>Identifier of the object to return properties for.  objectId must be from the Debugger.evaluateOnCallFrame() function.</td>
        </tr>
        <tr>
            <td>ownProperties <br/> <i>optional</i></td>
            <td><code class="flyout">boolean</code></td>
            <td>If true, returns properties belonging only to the element itself, not to its prototype chain.</td>
        </tr>
        <tr>
            <td>accessorPropertiesOnly <br/> <i>optional</i></td>
            <td><code class="flyout">boolean</code></td>
            <td><span><b>Experimental. </b></span>If true, returns accessor properties (with getter/setter) only; internal properties are not returned either.</td>
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
            <td>result</td>
            <td><a href="#propertydescriptor"><code class="flyout">PropertyDescriptor[]</code></a></td>
            <td>Object properties.</td>
        </tr>
    </tbody>
</table>

---

## Events

### executionContextsCleared
Issued when all executionContexts were cleared in browser


---

### exceptionThrown
Issued when exception was thrown and unhandled.

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
            <td>timestamp</td>
            <td><a href="#timestamp"><code class="flyout">Timestamp</code></a></td>
            <td>Timestamp of the exception.</td>
        </tr>
        <tr>
            <td>exceptionDetails</td>
            <td><a href="#exceptiondetails"><code class="flyout">ExceptionDetails</code></a></td>
            <td></td>
        </tr>
    </tbody>
</table>

---

## Types

### <a name="scriptid"></a> ScriptId `string`

Unique script identifier.


---

### <a name="remoteobjectid"></a> RemoteObjectId `string`

Unique object identifier.


---

### <a name="unserializablevalue"></a> UnserializableValue `string`

Primitive value which cannot be JSON-stringified.

##### Allowed Values
Infinity, NaN, -Infinity, -0

---

### <a name="remoteobject"></a> RemoteObject `object`

Mirror object referencing original JavaScript object.

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
            <td><code class="flyout">string</code> <br/> <i>Allowed values: object, function, undefined, string, number, boolean, symbol</i></td>
            <td>Object type.</td>
        </tr>
        <tr>
            <td>subtype <br/> <i>optional</i></td>
            <td><code class="flyout">string</code> <br/> <i>Allowed values: null, error, promise</i></td>
            <td>Object subtype hint. Specified for <code>object</code> type values only.</td>
        </tr>
        <tr>
            <td>className <br/> <i>optional</i></td>
            <td><code class="flyout">string</code></td>
            <td>Object class (constructor) name. Specified for <code>object</code> type values only.</td>
        </tr>
        <tr>
            <td>value <br/> <i>optional</i></td>
            <td><code class="flyout">any</code></td>
            <td>Remote object value in case of primitive values or JSON values (if it was requested).</td>
        </tr>
        <tr>
            <td>unserializableValue <br/> <i>optional</i></td>
            <td><a href="#unserializablevalue"><code class="flyout">UnserializableValue</code></a></td>
            <td>Primitive value which can not be JSON-stringified does not have <code>value</code>, but gets this property.</td>
        </tr>
        <tr>
            <td>description <br/> <i>optional</i></td>
            <td><code class="flyout">string</code></td>
            <td>String representation of the object.</td>
        </tr>
        <tr>
            <td>objectId <br/> <i>optional</i></td>
            <td><a href="#remoteobjectid"><code class="flyout">RemoteObjectId</code></a></td>
            <td>Unique object identifier (for non-primitive values).</td>
        </tr>
        <tr>
            <td>msDebuggerPropertyId <br/> <i>optional</i></td>
            <td><code class="flyout">string</code></td>
            <td><span><b>Experimental. </b></span>Microsoft: The associated debugger property id for this object.</td>
        </tr>
    </tbody>
</table>

---

### <a name="propertydescriptor"></a> PropertyDescriptor `object`

Object property descriptor.

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
            <td>Property name or symbol description.</td>
        </tr>
        <tr>
            <td>value <br/> <i>optional</i></td>
            <td><a href="#remoteobject"><code class="flyout">RemoteObject</code></a></td>
            <td>The value associated with the property.</td>
        </tr>
        <tr>
            <td>writable <br/> <i>optional</i></td>
            <td><code class="flyout">boolean</code></td>
            <td>True if the value associated with the property may be changed (data descriptors only).</td>
        </tr>
        <tr>
            <td>get <br/> <i>optional</i></td>
            <td><a href="#remoteobject"><code class="flyout">RemoteObject</code></a></td>
            <td>A function which serves as a getter for the property, or <code>undefined</code> if there is no getter (accessor descriptors only).</td>
        </tr>
        <tr>
            <td>set <br/> <i>optional</i></td>
            <td><a href="#remoteobject"><code class="flyout">RemoteObject</code></a></td>
            <td>A function which serves as a setter for the property, or <code>undefined</code> if there is no setter (accessor descriptors only).</td>
        </tr>
        <tr>
            <td>configurable</td>
            <td><code class="flyout">boolean</code></td>
            <td>True if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object.</td>
        </tr>
        <tr>
            <td>enumerable</td>
            <td><code class="flyout">boolean</code></td>
            <td>True if this property shows up during enumeration of the properties on the corresponding object.</td>
        </tr>
        <tr>
            <td>wasThrown <br/> <i>optional</i></td>
            <td><code class="flyout">boolean</code></td>
            <td>True if the result was thrown during the evaluation.</td>
        </tr>
        <tr>
            <td>isOwn <br/> <i>optional</i></td>
            <td><code class="flyout">boolean</code></td>
            <td>True if the property is owned for the object.</td>
        </tr>
        <tr>
            <td>msReturnValue <br/> <i>optional</i></td>
            <td><code class="flyout">boolean</code></td>
            <td><span><b>Experimental. </b></span>Microsoft: True if the property is a return value.</td>
        </tr>
        <tr>
            <td>symbol <br/> <i>optional</i></td>
            <td><a href="#remoteobject"><code class="flyout">RemoteObject</code></a></td>
            <td>Property symbol object, if the property is of the `symbol` type. </td>
        </tr>
    </tbody>
</table>

---

### <a name="callargument"></a> CallArgument `object`

Represents function call argument. Either remote object id <code>objectId</code>, primitive <code>value</code>, unserializable primitive value or neither of (for undefined) them should be specified.

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
            <td>value <br/> <i>optional</i></td>
            <td><code class="flyout">any</code></td>
            <td>Primitive value or serializable javascript object.</td>
        </tr>
        <tr>
            <td>unserializableValue <br/> <i>optional</i></td>
            <td><a href="#unserializablevalue"><code class="flyout">UnserializableValue</code></a></td>
            <td>Primitive value which can not be JSON-stringified.</td>
        </tr>
        <tr>
            <td>objectId <br/> <i>optional</i></td>
            <td><a href="#remoteobjectid"><code class="flyout">RemoteObjectId</code></a></td>
            <td>Remote object handle.</td>
        </tr>
    </tbody>
</table>

---

### <a name="executioncontextid"></a> ExecutionContextId `integer`

Id of an execution context.


---

### <a name="exceptiondetails"></a> ExceptionDetails `object`

Detailed information about exception (or error) that was thrown during script compilation or execution.

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
            <td>exceptionId</td>
            <td><code class="flyout">integer</code></td>
            <td>Exception id.</td>
        </tr>
        <tr>
            <td>text</td>
            <td><code class="flyout">string</code></td>
            <td>Exception text, which should be used together with exception object when available.</td>
        </tr>
        <tr>
            <td>lineNumber</td>
            <td><code class="flyout">integer</code></td>
            <td>Line number of the exception location (0-based).</td>
        </tr>
        <tr>
            <td>columnNumber</td>
            <td><code class="flyout">integer</code></td>
            <td>Column number of the exception location (0-based).</td>
        </tr>
        <tr>
            <td>scriptId <br/> <i>optional</i></td>
            <td><a href="#scriptid"><code class="flyout">ScriptId</code></a></td>
            <td>Script ID of the exception location.</td>
        </tr>
        <tr>
            <td>url <br/> <i>optional</i></td>
            <td><code class="flyout">string</code></td>
            <td>URL of the exception location, to be used when the script was not reported.</td>
        </tr>
        <tr>
            <td>stackTrace <br/> <i>optional</i></td>
            <td><a href="#stacktrace"><code class="flyout">StackTrace</code></a></td>
            <td>JavaScript stack trace if available.</td>
        </tr>
        <tr>
            <td>exception <br/> <i>optional</i></td>
            <td><a href="#remoteobject"><code class="flyout">RemoteObject</code></a></td>
            <td>Exception object if available.</td>
        </tr>
        <tr>
            <td>executionContextId <br/> <i>optional</i></td>
            <td><a href="#executioncontextid"><code class="flyout">ExecutionContextId</code></a></td>
            <td>Identifier of the context where exception happened.</td>
        </tr>
    </tbody>
</table>

---

### <a name="timestamp"></a> Timestamp `integer`

Number of milliseconds since epoch.


---

### <a name="callframe"></a> CallFrame `object`

Stack entry for runtime errors and assertions.

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
            <td>functionName</td>
            <td><code class="flyout">string</code></td>
            <td>JavaScript function name.</td>
        </tr>
        <tr>
            <td>scriptId</td>
            <td><a href="#scriptid"><code class="flyout">ScriptId</code></a></td>
            <td>JavaScript script id.</td>
        </tr>
        <tr>
            <td>url</td>
            <td><code class="flyout">string</code></td>
            <td>JavaScript script name or url.</td>
        </tr>
        <tr>
            <td>lineNumber</td>
            <td><code class="flyout">integer</code></td>
            <td>JavaScript script line number (0-based).</td>
        </tr>
        <tr>
            <td>columnNumber</td>
            <td><code class="flyout">integer</code></td>
            <td>JavaScript script column number (0-based).</td>
        </tr>
    </tbody>
</table>

---

### <a name="stacktrace"></a> StackTrace `object`

Call frames for assertions or error messages.

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
            <td>description <br/> <i>optional</i></td>
            <td><code class="flyout">string</code></td>
            <td>String label of this stack trace. For async traces this may be a name of the function that initiated the async call.</td>
        </tr>
        <tr>
            <td>callFrames</td>
            <td><a href="#callframe"><code class="flyout">CallFrame[]</code></a></td>
            <td>JavaScript function name.</td>
        </tr>
        <tr>
            <td>parent <br/> <i>optional</i></td>
            <td><a href="#stacktrace"><code class="flyout">StackTrace</code></a></td>
            <td>Asynchronous JavaScript stack trace that preceded this stack, if available.</td>
        </tr>
    </tbody>
</table>

---
