---
title:  "JavaScript Representation of Windows Runtime Types"
ms.custom:  ""
ms.date:  "04/01/2017"
ms.prod:  microsoft-edge
ms.reviewer:  ""
ms.suite:  ""
ms.technology:  "windows-integration"
ms.tgt_pltfrm:  ""
ms.topic:  "article"
helpviewer_keywords:  
  - "Windows Runtime types [JavaScript]"
  - "JavaScript, Windows Runtime types"
ms.assetid:  f4851802-8b40-4afa-ba6c-8a162a9a43cc
caps.latest.revision:  9
author:  "MSEdgeTeam"
ms.author:  "msedgedevrel"
manager:  ""
---
# JavaScript Representation of Windows Runtime Types  

The following table describes the way JavaScript represents Windows Runtime types.  

> [!IMPORTANT]
> Windows Runtime features are not available for apps that run in Internet Explorer.  

## Windows Runtime Types in JavaScript  

| Windows Runtime type | JavaScript representation | Description |  
|:--- |:--- |:--- |  
| `UInt8` | `Number` | A Windows Runtime `Uint8` is an unsigned 8-bit integer, represented as a JavaScript number.  A JavaScript value is first converted to a JavaScript number, and then the `ToUint32` process is followed.  If the JavaScript number value is outside the range of a Uint8, the result will have modulo 2^8 applied. |  
| `Int32` | `Number` | A Windows Runtime `Int32` is a signed 32-bit integer, represented as a JavaScript number.  A JavaScript value is first converted to a JavaScript number, and then the `ToInt32` process is followed.  If the JavaScript number value is outside the range of an `Int32`, the result will have modulo 2^16 applied. |  
| `Int64` | `Number` | A Windows Runtime `Int64` is a signed 64-bit integer, represented as a standard number if it falls within the range \[-2^53, 2^53\].  If it falls outside this range, it is represented as a number value that has a custom backing store that maintains the full 64 bits of integer data.  All mathematical operations on these custom Int64 number values cause the value to be converted to a standard number in the range \[-2^53, 2^53\].  If the value is outside this range, a type error is raised.  The exceptions to this conversion process are the `==`, `===`, `SameValue`, and `RelationalComparison` operations, which compare the arguments based on the full 64 bits when passed two represented 64-bit values.  If either argument is a standard JavaScript number, these operations also convert the argument to a JavaScript number before comparison.  A JavaScript value is directly assigned if it is an Int64 value itself; otherwise the result of applying the `ToInteger` conversion on the value is passed to Windows Runtime.  If the type coercion fails, an exception is returned. |  
| `Uint64` | `Number` | A Windows Runtime `Uint64` is an unsigned 64-bit integer, represented as a standard number if it falls within the range \[0, 2^53\].  If it falls outside this range, it is represented as a number that has a custom backing store that maintains the full 64 bits of unsigned integer data.  All mathematical operations on these custom Uint64 values cause the value to be converted to a standard number in the range \[0, 2^53\].  If the value is outside this range, a type error is raised.  The exceptions to this conversion process are the `==`, `===`, `SameValue`, and `RelationalComparison` operations, which compare the arguments based on the full 64 bits when passed two 64-bit values.  If either argument is a standard JavaScript number, these operations also convert the argument to a JavaScript number before comparison.  A JavaScript value is directly assigned if it is a Uint64 value itself; otherwise, the result of applying the `ToInteger` conversion on the value, followed by taking modulo 2^52, is passed to Windows Runtime.  If the type conversion fails, an exception is returned. |  
| `Single` | `Number` | A Windows Runtime `Single` is a 32-bit floating-point number, represented as a JavaScript number by picking the closest double-precision value to the single-precision value.  A JavaScript value is converted to a JavaScript number and then range checked to ensure that the value can be represented in a single-precision 32-bit IEEE 754 floating-point number.  If the conversion or range check fails, a marshaling error is returned. |  
| `Double` | `Number` | A Windows Runtime `Double` is a 64-bit floating-point number.  `ToNumber` is used to convert a Windows Runtime `Double` to a JavaScript number.  If the conversion fails, a marshaling error is returned. |  
| `Boolean` | `Boolean` | A Windows Runtime `Boolean` is an 8-bit value where zero is `false` and any value other than zero is `true`, represented as a JavaScript `Boolean`.  A JavaScript value is first converted to a JavaScript `Boolean` by `ToBoolean`.  This means that a Windows Runtime function declared as `void func(BOOL);` could be written in JavaScript as `obj.func("test");`.  The Windows Runtime function is called with the `BOOL` parameter passed as `TRUE`.  If the conversion fails, a marshaling error is returned. |  
| `Char16` | `String` | A Windows Runtime `Char16` is a 16-bit Unicode character, represented as a JavaScript string that contains a single character.  A JavaScript value is converted to a JavaScript string by `ToString` and then checked to ensure that the string is only a single character long.  The single character is then passed as the `Char16` value.  If the conversion or length check fails, a marshaling error is returned. |  
| `String` | `String` | A Windows Runtime `String` is an immutable sequence of `Char16` objects.  Strings are represented as JavaScript `String` objects.  Windows Runtime strings do not have different values for `null` and empty string \(""\).  `null` and empty string values are converted to the JavaScript empty string.  Note:  When JavaScript `null` is passed to a Windows Runtime parameter that expects a string, it produces the string value "null", not `null` or the empty string \(""\).  Strings passed to the Windows Runtime should always be instantiated to the empty string. |  
| `Enumeration` | `Object` | A Windows Runtime `Enumeration` is a 32-bit integer \(signed or unsigned\) that has an associated set of named constants.  In JavaScript, an enumeration is represented as an object that contains a read-only field for each named value.  Enumeration values are converted to JavaScript numbers as defined earlier for `Int32` and `UInt32`.  When a JavaScript value is converted to a Windows Runtime enumeration, it is converted, truncated and range checked as described earlier.  However, the resulting value is not checked against the defined named values that are specified in the enumeration. |  
| `Structure` | `Object` | A Windows Runtime `Structure` is a heterogeneous collection of named data fields.  In JavaScript, a structure is represented as a JavaScript object that contains a named property for each field in the structure.  If the conversion of any structure value fails, a marshaling error is returned.  Fields in the JavaScript object that do not have equivalents in the Windows Runtime structure are ignored.  Note:  A Windows Runtime structure cannot be instantiated in JavaScript with the `new` keyword. |  
| `Array` | `Array` | A Windows Runtime `Array` is converted to a JavaScript array.  However, Windows Runtime arrays are not resizable, so some JavaScript array operations are not possible.  The internal `[[Class]]` property of a converted array is not set to "Array" because this is not allowed by the ECMAScript 5 specification.  This means that `Array.isArray(v)` returns `false`.  A JavaScript value is converted to a Windows Runtime array as follows:  If the value is `null` or `undefined`, it is converted to a native `null`.  If its internal `[[Class]]` property is "Array", it is copied to a native array and a reference to this array is passed.  If it is a converted array, as described previously, the underlying native array is passed.  Note:  Passing a JavaScript array value to a Windows Runtime method causes a full copy of the array. |  
| Delegate \(function callback\) | `Function` | A Windows Runtime delegate is a reference to a single method.  A Windows Runtime delegate is represented in JavaScript as a JavaScript `Function`, which is guaranteed to be called on the proper thread.  When the `Function` is invoked, the arguments are converted to the equivalent Windows Runtime parameter types.  If there are fewer JavaScript arguments than delegate `in` parameters, the delegate call fails.  If there are more JavaScript arguments than there are `in` parameters in the delegate, the extra JavaScript arguments are ignored.  After the delegate is invoked, the `out` parameters are converted to JavaScript types and returned.  If a native JavaScript function object is converted to a Windows Runtime delegate, it is wrapped in a Windows Runtime delegate of the corresponding type.  When the delegate is invoked, the `in` parameters are converted to JavaScript types.  After the delegate is invoked, the return value is converted to the `out` parameters of the delegate. |  
| Interface | `Object` | Interfaces and interface groups are not directly represented in JavaScript as objects.  However, interfaces are represented as parameter and return types of Windows Runtime methods.  A Windows Runtime interface instance is converted as follows:<br /> <br /> 1.  If there is a valid runtime class, represent the object as an instance of that class.<br /> 2.  If there is no valid runtime class, represent the object as an instance of an unnamed runtime class that implements exactly the interface that the instance is known to implement plus its required interfaces.<br /> <br /> A JavaScript value is tested to determine whether it is an instance of a runtime class or an interface.  If it is, and the original Windows Runtime value implements the interface, the object is passed to the Windows Runtime. |  
| Runtime classes | `Object` | Objects in the Windows Runtime can be instances of runtime classes that implement one or more interfaces.  Windows Runtime objects are represented in JavaScript as objects.  The union of methods, properties, and events defined on all the implemented interfaces of the class represents the named properties in the prototype of the JavaScript object.  JavaScript consumers can access any member of the class directly.  Windows Runtime objects have a prototype that contains all the members from all the implemented interfaces of the runtime class. |  
  
## See Also  

[Using the Windows Runtime in JavaScript][WindowsRuntimeJavascript]  

<!-- image links -->  

<!-- links -->  

[WindowsRuntimeJavascript]: /microsoft-edge/windows-runtime/using-the-windows-runtime-in-javascript "Using the Windows Runtime in JavaScript"  
