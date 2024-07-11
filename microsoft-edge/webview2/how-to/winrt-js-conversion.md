---
title: How WinRT types and members are represented in JavaScript
description: How to use WinRT types and members from within web-side JavaScript code in a WebView2 app, when calling native-side WinRT code from web-side code.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 01/13/2023
---
# How WinRT types and members are represented in JavaScript

Here's how to use WinRT types and members from within web-side JavaScript code in a WebView2 app, when calling native-side WinRT code from web-side code.


<!-- ====================================================================== -->
## Language equivalents

The WebView2 WinRT JS Projection tool (**wv2winrt**) converts from WinRT to JavaScript language constructs as follows.

| WinRT language construct | JavaScript representation | Notes |
|---|---|---|
| `UInt8`, `Int16`, `UInt16`, `Int32`, `UInt32`, `Int64`, `UInt64`, `Single`, `Double` | `Number` | |
| `Char`, `String` | `String` | A JavaScript `String` instance is converted to a WinRT `String` instance. |
| `Boolean` | `Boolean` | |
| `Windows.Foundation.DateTime` struct | `Date` | |
| `Windows.Foundation.TimeSpan` struct | `Number` | |
| `Guid` | `String` | A JavaScript `String` instance that contains a string representation of a UUID (with or without delimiting `{` and `}` braces) is converted to the corresponding UUID.  A UUID is converted to its string representation, with delimiting `{` and `}` brace characters at the start and end.  For information about UUID, see [RFC 4122](https://www.rfc-editor.org/rfc/rfc4122). |
| `IVector<T>`, `IVectorView<T>`, `IObservableVector<T>` | `Array` and JavaScript object | If a `RuntimeClass` instance implements `vector` interfaces, then it is represented in JavaScript as the usual object described below, but also will act like a JavaScript array.  Reads and writes are performed live on the underlying WinRT vector object.
| `IMap<K,V>`, `IMapView<K,V>`, `IObservableMap<K,V>` | JavaScript object | If a `RuntimeClass` instance implements `map` interfaces, then it is represented in JavaScript as the usual object described below, but also has properties with name and values from the underlying WinRT map object.  Reads and writes are performed live on the underlying WinRT map object. |
| `Enum` | JavaScript object | An enum type is represented as a JavaScript object.  Each enum value is a `Number` property on the JavaScript object. |
| `Struct` | JavaScript object | A `Struct` type is converted to a JavaScript object that has property names which correspond to the `Struct` type member names.  This is a two-way conversion. |
| `Namespace` | JavaScript object | A namespace is represented as a JavaScript object that has a property for any child namespaces, enum types, or `RuntimeClass`.  The namespace may have 0, 1, or many child namespaces, enums, or runtimeclasses, and each individual child namespace, enum and runtimeclass gets its own property. |
| `Class` | JavaScript object | A `RuntimeClass` class is converted to a JavaScript object that has the same methods, properties, and events. |
| `Interface` | JavaScript object | A `RuntimeClass` interface is converted to a JavaScript object that has the same methods, properties, and events.  There is no support for implementing an interface in JavaScript. |
| Class static member | JavaScript object property | See below. |
| Class constructor | JavaScript constructor and function | See below. |

When passing JavaScript objects to host objects:
*  If JavaScript `Date` objects need to be passed to host objects as `VT_DATE`, set the host object's `shouldSerializeDates` property to `true`. By default, `Date` objects are passed to the host as `string`, by using `JSON.stringify`.
*  If JavaScript typed arrays need to be passed to host objects as `array`, set the host object's `shouldPassTypedArraysAsArrays` property to `true`. By default, typed arrays are passed to the host as `IDispatch`.

See also:
* [Introduction to Microsoft Interface Definition Language 3.0](/uwp/midl-3/intro)


<!-- ------------------------------ -->
#### Class static members

A runtime class that has static properties, static methods, or static events is represented as a property of the namespace. Each static property, static method, and static event is represented as a property on that JavaScript object of the runtimeclass.

For example, for the WinRT API static method `Windows.Foundation.Uri.EscapeComponent`:
*  `Windows.Foundation` is the namespace.
*  `Uri` is the runtimeclass.
*  `EscapeComponent` is the static method.

In JavaScript, the representation looks similar: `chrome.webview.hostObjects.Windows.Foundation.Uri.EscapeComponent`:
*  `EscapeComponent` is a JavaScript method that's a property on the JavaScript object for the `Uri` runtimeclass.
*  The `Uri` runtimeclass is a property on the JavaScript object for the `Foundation` namespace.

For example, to call the static method `Windows.Foundation.Uri.EscapeComponent`, call:

```javascript
`chrome.webview.hostObjects.Windows.Foundation.Uri.EscapeComponent("example");`
```

The JavaScript namespace object here is `chrome.webview.hostObjects.Windows.Foundation`.


<!-- ------------------------------ -->
#### Class constructors

A constructor for a `RuntimeClass` class is represented as a single property on a JavaScript object that can be called two ways:
*  As a constructor on the JavaScript namespace object.
*  As a function on the JavaScript namespace object.

For example, to create a new `Windows.Foundation.Uri` object, you can either call it as a constructor, using `new`:

```javascript
`let uri = new chrome.webview.hostObjects.Windows.Foundation.Uri("https://example.com/");`
```

Or, call it as a function, without `new`:

```javascript
`let uri = chrome.webview.hostObjects.Windows.Foundation.Uri("https://example.com/");`
```

The JavaScript namespace object here is `chrome.webview.hostObjects.Windows.Foundation`.


<!-- ====================================================================== -->
## Method overloads

If a WinRT method name is overloaded for more than one method, then calling that method name from JavaScript will call the overload which has the matching number of parameters.

If there is more than one overload that has a matching number of parameters, the first overload that's found in the metadata will be called.

 
<!-- ====================================================================== -->
## Method out parameters

If a WinRT method has `out` parameters, when calling that method from JavaScript, the returned result will be a JavaScript object that a property for each `out` parameter.  If the method has a non-`void` return type, then the returned result object will also have a property named `value` that contains the return value of the method.

When calling a WinRT method that has `out` parameters, any `out` parameters are skipped in the parameter list in the method call (unless they are array type).  For example, suppose a WinRT method that has `out` parameters and a non-`void` return type is defined as follows, using MIDL3:

```cpp
String MethodWithOutParams(String stringParam1, 
                           out Int32 intParam2, 
                           out Int32 intParam3, 
                           String stringParam4);
```

When you call that method from JavaScript, omit the `out` arguments:

```javascript
let result = object.MethodWithOutParams("stringParam1", 
                                        "stringParam4");
```

Then to read the WinRT method's return value, read the `value` property on the JavaScript `result` object.  To read the WinRT method's `out` parameters, read the correspondingly named properties on the JavaScript `result` object:

```javascript
console.assert(result.value == "return value");

console.assert(result.intParam2 == 1);

console.assert(result.intParam3 == 2);
```

For array type `out` parameters, the array needs to be passed into the method's parameter list when calling the method. For a non-`void` return type, the result array will replace the array that's passed in for the method call. For the `void` return type, the result array will be the result of the method call.

```cpp
// Both methods update input array values to index values
String NonVoidMethodWithArrayOutParam(out Int[] intArrayParam);

Void VoidMethodWithArrayOutParam(out Int[] intArrayParam);
```

```javascript
let input_array1 = [0, 0, 0];

let result1 = object.NonVoidMethodWithArrayOutParam(input_array1);

console.assert(input_array1 == [0, 1, 2])

let input_array2 = [0, 0, 0];

let result2 = object.VoidMethodWithArrayOutParam(input_array2);

console.assert(result2 == [0, 1, 2]);
```

If passing typed arrays as array `out` parameters, `chrome.webview.hostObjects.options.shouldPassTypedArraysAsArrays` needs to be set to `true`.
 
See also:
* [Issue #2788](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2788) about WebView2 SDK and Windows App SDK (WinUI3) in C++ WinRT


<!-- ====================================================================== -->
## See also

* [Call native-side WinRT code from web-side code](./winrt-from-js.md)
* [Introduction to Microsoft Interface Definition Language 3.0](/uwp/midl-3/intro)
