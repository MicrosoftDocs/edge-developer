---
description: Reference for the Runtime Domain. Runtime domain exposes JavaScript runtime by means of remote evaluation and mirror objects. Evaluation results are returned as mirror object that expose object type, string representation and unique identifier that can be used for further object reference. Original objects are maintained in memory unless they are either explicitly released or are released along with the other objects in their object group.
title: Runtime Domain - Microsoft Edge DevTools
author: pelavall
ms.author: pelavall
ms.date: 12/15/2017
ms.topic: reference
ms.prod: microsoft-edge
---
# Runtime
Runtime domain exposes JavaScript runtime by means of remote evaluation and mirror objects. Evaluation results are returned as mirror object that expose object type, string representation and unique identifier that can be used for further object reference. Original objects are maintained in memory unless they are either explicitly released or are released along with the other objects in their object group.

| | |
|-|-|
| [Methods](#methods) | [enable](#enable), [disable](#disable), [evaluate](#evaluate), [callFunctionOn](#callfunctionon), [getProperties](#getproperties) |
| [Events](#events) | [executionContextsCleared](#executioncontextscleared), [exceptionThrown](#exceptionthrown) |
| [Types](#types) | [ScriptId](#scriptid), [RemoteObjectId](#remoteobjectid), [UnserializableValue](#unserializablevalue), [RemoteObject](#remoteobject), [PropertyDescriptor](#propertydescriptor), [CallArgument](#callargument), [ExecutionContextId](#executioncontextid), [ExceptionDetails](#exceptiondetails), [Timestamp](#timestamp), [CallFrame](#callframe), [StackTrace](#stacktrace) |
| [Dependencies](#dependencies) |  |
## Methods

### enable
Enables reporting of execution contexts creation by means of <code>executionContextCreated</code> event. When the reporting gets enabled the event will be sent immediately for each existing execution context. 

</p>

---

### disable
Disables reporting of execution contexts creation. 

</p>

---

### evaluate
Evaluates expression on global object. 

</p>

| Parameters | | |
|-|-|-|
| expression | `string` | Expression to evaluate. |
| objectGroup <br/> *optional* | `string` | Symbolic group name that can be used to release multiple objects. |
| includeCommandLineAPI <br/> *optional* | `boolean` | Determines whether Command Line API should be available during the evaluation. |
| silent <br/> *optional* | `boolean` | In silent mode exceptions thrown during evaluation are not reported and do not pause execution. Overrides <code>setPauseOnException</code> state. |
| contextId <br/> *optional* | [`ExecutionContextId`](#executioncontextid) | Specifies in which execution context to perform evaluation. If the parameter is omitted the evaluation will be performed in the context of the inspected page. |
| returnByValue <br/> *optional* | `boolean` | Whether the result is expected to be a JSON object that should be sent by value. |
| generatePreview <br/> *optional* | `boolean` | Whether preview should be generated for the result. <span style="color:white;background-color:Tomato;padding-left: 4px;padding-right:4px;padding-top:1px;padding-bottom:1px">EXPERIMENTAL</span> |
| userGesture <br/> *optional* | `boolean` | Whether execution should be treated as initiated by user in the UI. <span style="color:white;background-color:Tomato;padding-left: 4px;padding-right:4px;padding-top:1px;padding-bottom:1px">EXPERIMENTAL</span> |
| awaitPromise <br/> *optional* | `boolean` | Whether execution should <code>await</code> for resulting value and return once awaited promise is resolved. |

</p>

| Returns | | |
|-|-|-|
| result | [`RemoteObject`](#remoteobject) | Evaluation result. |
| exceptionDetails <br/> *optional* | [`ExceptionDetails`](#exceptiondetails) | Exception details. |

</p>

---

### callFunctionOn
Calls function with given declaration on the given object. Object group of the result is inherited from the target object. 

</p>

| Parameters | | |
|-|-|-|
| functionDeclaration | `string` | Declaration of the function to call. |
| objectId <br/> *optional* | [`RemoteObjectId`](#remoteobjectid) | Identifier of the object to call function on. Either objectId or executionContextId should be specified. |
| arguments <br/> *optional* | [`CallArgument[]`](#callargument) | Call arguments. All call arguments must belong to the same JavaScript world as the target object. |
| silent <br/> *optional* | `boolean` | In silent mode exceptions thrown during evaluation are not reported and do not pause execution. Overrides <code>setPauseOnException</code> state. |
| returnByValue <br/> *optional* | `boolean` | Whether the result is expected to be a JSON object which should be sent by value. |
| generatePreview <br/> *optional* | `boolean` | Whether preview should be generated for the result. <span style="color:white;background-color:Tomato;padding-left: 4px;padding-right:4px;padding-top:1px;padding-bottom:1px">EXPERIMENTAL</span> |
| userGesture <br/> *optional* | `boolean` | Whether execution should be treated as initiated by user in the UI. <span style="color:white;background-color:Tomato;padding-left: 4px;padding-right:4px;padding-top:1px;padding-bottom:1px">EXPERIMENTAL</span> |
| awaitPromise <br/> *optional* | `boolean` | Whether execution should <code>await</code> for resulting value and return once awaited promise is resolved. |
| executionContextId <br/> *optional* | [`ExecutionContextId`](#executioncontextid) | Specifies execution context which global object will be used to call function on. Either executionContextId or objectId should be specified. |
| objectGroup <br/> *optional* | `string` | Symbolic group name that can be used to release multiple objects. If objectGroup is not specified and objectId is, objectGroup will be inherited from object. |

</p>

| Returns | | |
|-|-|-|
| result | [`RemoteObject`](#remoteobject) | Call result. |
| exceptionDetails <br/> *optional* | [`ExceptionDetails`](#exceptiondetails) | Exception details. |

</p>

---

### getProperties
Returns properties of a given object. Object group of the result is inherited from the target object. 

</p>

| Parameters | | |
|-|-|-|
| objectId | [`RemoteObjectId`](#remoteobjectid) | Identifier of the object to return properties for. |
| ownProperties <br/> *optional* | `boolean` | If true, returns properties belonging only to the element itself, not to its prototype chain. |
| accessorPropertiesOnly <br/> *optional* | `boolean` | If true, returns accessor properties (with getter/setter) only; internal properties are not returned either. <span style="color:white;background-color:Tomato;padding-left: 4px;padding-right:4px;padding-top:1px;padding-bottom:1px">EXPERIMENTAL</span> |
| generatePreview <br/> *optional* | `boolean` | Whether preview should be generated for the results. <span style="color:white;background-color:Tomato;padding-left: 4px;padding-right:4px;padding-top:1px;padding-bottom:1px">EXPERIMENTAL</span> |

</p>

| Returns | | |
|-|-|-|
| result | [`PropertyDescriptor[]`](#propertydescriptor) | Object properties. |
| exceptionDetails <br/> *optional* | [`ExceptionDetails`](#exceptiondetails) | Exception details. |

</p>

---

## Events

### executionContextsCleared
Issued when all executionContexts were cleared in browser 

</p>

---

### exceptionThrown
Issued when exception was thrown and unhandled. 

</p>

| Parameters | | |
|-|-|-|
| timestamp | [`Timestamp`](#timestamp) | Timestamp of the exception. |
| exceptionDetails | [`ExceptionDetails`](#exceptiondetails) |  |

</p>

---

## Types

### <a name="scriptid"></a> ScriptId `string`

Unique script identifier.

</p>

---

### <a name="remoteobjectid"></a> RemoteObjectId `string`

Unique object identifier.

</p>

---

### <a name="unserializablevalue"></a> UnserializableValue `string`

Primitive value which cannot be JSON-stringified.

##### Allowed Values
Infinity, NaN, -Infinity, -0
</p>

---

### <a name="remoteobject"></a> RemoteObject `object`

Mirror object referencing original JavaScript object.

</p>

| Properties | | |
|-|-|-|
| type | `string` <br/> *Allowed values: object, function, undefined, string, number, boolean, symbol* | Object type. |
| subtype <br/> *optional* | `string` <br/> *Allowed values: null, error, promise* | Object subtype hint. Specified for <code>object</code> type values only. |
| className <br/> *optional* | `string` | Object class (constructor) name. Specified for <code>object</code> type values only. |
| value <br/> *optional* | `any` | Remote object value in case of primitive values or JSON values (if it was requested). |
| unserializableValue <br/> *optional* | [`UnserializableValue`](#unserializablevalue) | Primitive value which can not be JSON-stringified does not have <code>value</code>, but gets this property. |
| description <br/> *optional* | `string` | String representation of the object. |
| objectId <br/> *optional* | [`RemoteObjectId`](#remoteobjectid) | Unique object identifier (for non-primitive values). |
| preview <br/> *optional* | [`ObjectPreview`](#objectpreview) | Preview containing abbreviated property values. Specified for <code>object</code> type values only. <span style="color:white;background-color:Tomato;padding-left: 4px;padding-right:4px;padding-top:1px;padding-bottom:1px">EXPERIMENTAL</span> |
| customPreview <br/> *optional* | [`CustomPreview`](#custompreview) |  <span style="color:white;background-color:Tomato;padding-left: 4px;padding-right:4px;padding-top:1px;padding-bottom:1px">EXPERIMENTAL</span> |
| msDebuggerPropertyId <br/> *optional* | `string` | Microsoft: The associated debugger property id for this object. <span style="color:white;background-color:Tomato;padding-left: 4px;padding-right:4px;padding-top:1px;padding-bottom:1px">EXPERIMENTAL</span> |

</p>

---

### <a name="propertydescriptor"></a> PropertyDescriptor `object`

Object property descriptor.

</p>

| Properties | | |
|-|-|-|
| name | `string` | Property name or symbol description. |
| value <br/> *optional* | [`RemoteObject`](#remoteobject) | The value associated with the property. |
| writable <br/> *optional* | `boolean` | True if the value associated with the property may be changed (data descriptors only). |
| get <br/> *optional* | [`RemoteObject`](#remoteobject) | A function which serves as a getter for the property, or <code>undefined</code> if there is no getter (accessor descriptors only). |
| set <br/> *optional* | [`RemoteObject`](#remoteobject) | A function which serves as a setter for the property, or <code>undefined</code> if there is no setter (accessor descriptors only). |
| configurable | `boolean` | True if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object. |
| enumerable | `boolean` | True if this property shows up during enumeration of the properties on the corresponding object. |
| wasThrown <br/> *optional* | `boolean` | True if the result was thrown during the evaluation. |
| isOwn <br/> *optional* | `boolean` | True if the property is owned for the object. |
| symbol <br/> *optional* | [`RemoteObject`](#remoteobject) | Property symbol object, if the property is of the <code>symbol</code> type. |
| msReturnValue <br/> *optional* | `boolean` | Microsoft: True if the property is a return value. <span style="color:white;background-color:Tomato;padding-left: 4px;padding-right:4px;padding-top:1px;padding-bottom:1px">EXPERIMENTAL</span> |

</p>

---

### <a name="callargument"></a> CallArgument `object`

Represents function call argument. Either remote object id <code>objectId</code>, primitive <code>value</code>, unserializable primitive value or neither of (for undefined) them should be specified.

</p>

| Properties | | |
|-|-|-|
| value <br/> *optional* | `any` | Primitive value or serializable javascript object. |
| unserializableValue <br/> *optional* | [`UnserializableValue`](#unserializablevalue) | Primitive value which can not be JSON-stringified. |
| objectId <br/> *optional* | [`RemoteObjectId`](#remoteobjectid) | Remote object handle. |

</p>

---

### <a name="executioncontextid"></a> ExecutionContextId `integer`

Id of an execution context.

</p>

---

### <a name="exceptiondetails"></a> ExceptionDetails `object`

Detailed information about exception (or error) that was thrown during script compilation or execution.

</p>

| Properties | | |
|-|-|-|
| exceptionId | `integer` | Exception id. |
| text | `string` | Exception text, which should be used together with exception object when available. |
| lineNumber | `integer` | Line number of the exception location (0-based). |
| columnNumber | `integer` | Column number of the exception location (0-based). |
| scriptId <br/> *optional* | [`ScriptId`](#scriptid) | Script ID of the exception location. |
| url <br/> *optional* | `string` | URL of the exception location, to be used when the script was not reported. |
| stackTrace <br/> *optional* | [`StackTrace`](#stacktrace) | JavaScript stack trace if available. |
| exception <br/> *optional* | [`RemoteObject`](#remoteobject) | Exception object if available. |
| executionContextId <br/> *optional* | [`ExecutionContextId`](#executioncontextid) | Identifier of the context where exception happened. |

</p>

---

### <a name="timestamp"></a> Timestamp `number`

Number of milliseconds since epoch.

</p>

---

### <a name="callframe"></a> CallFrame `object`

Stack entry for runtime errors and assertions.

</p>

| Properties | | |
|-|-|-|
| functionName | `string` | JavaScript function name. |
| scriptId | [`ScriptId`](#scriptid) | JavaScript script id. |
| url | `string` | JavaScript script name or url. |
| lineNumber | `integer` | JavaScript script line number (0-based). |
| columnNumber | `integer` | JavaScript script column number (0-based). |

</p>

---

### <a name="stacktrace"></a> StackTrace `object`

Call frames for assertions or error messages.

</p>

| Properties | | |
|-|-|-|
| description <br/> *optional* | `string` | String label of this stack trace. For async traces this may be a name of the function that initiated the async call. |
| callFrames | [`CallFrame[]`](#callframe) | JavaScript function name. |
| parent <br/> *optional* | [`StackTrace`](#stacktrace) | Asynchronous JavaScript stack trace that preceded this stack, if available. |
| promiseCreationFrame <br/> *optional* | [`CallFrame`](#callframe) | Creation frame of the Promise which produced the next synchronous trace when resolved, if available. <span style="color:white;background-color:Tomato;padding-left: 4px;padding-right:4px;padding-top:1px;padding-bottom:1px">EXPERIMENTAL</span> |

</p>

---
