---
title: How WinRT types and members are represented in JavaScript
description: How to use WinRT types and members from within web-side JavaScript code in a WebView2 app, when calling native-side WinRT code from web-side code.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 12/02/2022
---
# How WinRT types and members are represented in JavaScript

Here's how to use WinRT types and members from within web-side JavaScript code in a WebView2 app, when calling native-side WinRT code from web-side code.


<!-- ====================================================================== -->
## Language equivalents

The WebView2 WinRT JS Projection tool (**wv2winrt**) converts between WinRT language constructs and JavaScript as follows.

| WinRT language construct | JavaScript representation | Notes |
|---|---|---|
| `UInt8`, `Int16`, `UInt16`, `Int32`, `UInt32`, `Int64`, `UInt64`, `Single`, `Double` | `Number` | |
| `Char`, `String` | `String` | JavaScript Strings are converted back to WinRT. |
| `Boolean` | `Boolean` | |
| `Windows.Foundation.DateTime` struct | `Date` | |
| `Windows.Foundation.TimeSpan` struct | `Number` | |
| `Guid` | `String` | JavaScript `String` instances that contain a string representation of a UUID (as described in [RFC 4122](https://www.rfc-editor.org/rfc/rfc4122), with or without delimiting `{` and `}` braces, are converted to the corresponding UUID.  UUIDs are converted to their string representation with delimiting `{` and `}` brace characters at the start and end.
| `IVector<T>`, `IVectorView<T>`, `IObservableVector<T>` | `Array` and JavaScript object | If a runtimeclass<!--global: spelling?--> instance implements vector interfaces, then it is represented in JavaScript as the usual object described below, but also will act like a JavaScript array.  Reads and writes are performed live on the underlying WinRT vector object.
| `IMap<K,V>`, `IMapView<K,V>`, `IObservableMap<K,V>` | JavaScript object | If a runtimeclass instance implements map interfaces, then it is represented in JavaScript as the usual object described below, but also has properties with name and values from the underlying WinRT map object.  Reads and writes are performed live on the underlying WinRT map object. |
| `Enum` | JavaScript object | The enum type is represented as a JavaScript object.  Each enum value is a `Number` property on that JavaScript object. |
| `Struct` type instance | JavaScript object | A struct type is converted back and forth between JavaScript objects with property names corresponding to the `Struct` type member names. |
| `Namespace` | JavaScript object | Namespaces are represented as JavaScript objects with properties for each child namespace, enum type, and runtimeclasses. |
| `Class` or `Interface` instance | JavaScript object | Runtimeclasses and interfaces are converted to JavaScript objects with all the methods, properties, and events. <br/>There is no support for implementing an interface in JavaScript. |
| Class static member | JavaScript object property | Runtimeclasses with static methods, properties, or events, are represented as properties of their namespace with the static methods, properties, and events as properties on that JavaScript object.  See example below. |
| Class constructor | JavaScript constructor | Runtimeclasses with constructors are represented as a JavaScript constructor and function on the namespace object.  See example below. |


<!-- ------------------------------ -->
#### Class static members

Class static members become JavaScript object properties.  Runtimeclasses with static methods, properties, or events, are represented as properties of their namespace with the static methods, properties, and events as properties on that JavaScript object.

For example, to call the static method `Windows.Foundation.Uri.EscapeComponent`, use:

```javascript
`chrome.webview.hostObjects.Windows.Foundation.Uri.EscapeComponent("example");`
```


<!-- ------------------------------ -->
#### Class constructors

Class constructors become JavaScript constructors.  Runtimeclasses with constructors are represented as a JavaScript constructor and function on the namespace object.

For example, to create a new `Windows.Foundation.Uri` object, you can either call it as a constructor, using `new`:

```javascript
`let uri = new chrome.webview.hostObjects.Windows.Foundation.Uri("https://example.com/");`
```

Or, call it as a function, without `new`:

```javascript
`let uri = chrome.webview.hostObjects.Windows.Foundation.Uri("https://example.com/");`
```


<!-- ====================================================================== -->
## Method overloads

If a WinRT method name is overloaded for more than one method, then calling that method name from JavaScript will call the overload which has the matching number of parameters.

If there is more than one overload that has a matching number of parameters, the first overload that's found in the metadata will be called.

 
<!-- ====================================================================== -->
## Method out parameters

If a WinRT method has `out` parameters, when calling that method from JavaScript, the returned result will be a JavaScript object that a property for each `out` parameter.  If the method has a non-`void` return type, then the returned result object will also have a property named `value` that contains the return value of the method.

When calling a WinRT method that has `out` parameters, any `out` parameters are skipped in the parameter list in the method call.  For example, suppose a WinRT method that has `out` parameters and a non-`void` return type is defined as follows, using MIDL3:

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
 
See also:
* [Issue #2788](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2788) about WebView2 SDK and Windows App SDK (WinUI3) in C++ WinRT


<!-- ====================================================================== -->
## See also

* [Call native-side WinRT code from web-side code](./winrt-from-js.md)
