---
title: JavaScript Version Information
description: Compare JavaScript support across Microsoft Edge, Microsoft Store apps, and Internet Explorer
ms.date: https://docs.microsoft.com/en-us/scripting/2018
ms.prod: microsoft-edge
ms.topic: language-reference
author: erikadoyle
ms.author: edoyle
keywords: edge, ie, chakra, jscript, wwa, store apps
---
# JavaScript Version Information
JavaScript support varies across Microsoft Edge, Microsoft Store apps, and different document modes of Internet Explorer. For more information about IE document vode versioning, see [*Defining Document Compatibility*](http://go.microsoft.com/fwlink/?LinkId=208537).  

The following table summarizes the JavaScript support across Internet Explorer, Microsoft Edge, and Microsoft Store apps.
  
> [!IMPORTANT]
> Experimental features (enabled from *about:flags*) are indicated by "Exp." In some cases, *Store apps* support varies between Windows 8 (v8) and Windows 10 (v10) apps, and Windows desktop (Win) and Windows Phone (Phone), as indicated.
  
|Language element|Quirks, Internet Explorer 6 Standards, Internet Explorer 7 Standards|Internet Explorer 8 Standards|Internet Explorer 9 Standards|Internet Explorer 10 Standards|Internet Explorer 11 Standards|Edge|Store apps|  
|----------------------|--------------------------------------------------------------------------|-----------------------------------|-----------------------------------|------------------------------------|------------------------------------|----------|----------------|  
|[__proto\_\_ Property (Object)](https://docs.microsoft.com/en-us/scripting/javascript/reference/proto-property-object-javascript)|N|N|N|N|Y|Y|v8 (Win): N<br />v8.1 (Win): Y<br />v8.1 (Phone): Y|  
|[$1...$9 Properties (RegExp)](https://docs.microsoft.com/en-us/scripting/javascript/reference/dollar-1-dot-dot-dot-dollar-9-properties-regexp-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[0n Property](https://docs.microsoft.com/en-us/scripting/javascript/reference/0-dot-dot-dot-n-properties-arguments-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[abs Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/math-abs-function-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[acos Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/math-acos-function-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[acosh Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/math-acosh-function-javascript)|N|N|N|N|N|Y|v8.1: N<br />v10: Y|  
|[ActiveXObject Object](https://docs.microsoft.com/en-us/scripting/javascript/reference/activexobject-object-javascript)|Y|Y|Y|Y|Y|Y|N|  
|[Addition Assignment Operator (+=)](https://docs.microsoft.com/en-us/scripting/javascript/reference/addition-assignment-operator-decrement-equal-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Addition Operator (+)](https://docs.microsoft.com/en-us/scripting/javascript/reference/addition-operator-decrement-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[apply Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/apply-method-function-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[arguments Object](https://docs.microsoft.com/en-us/scripting/javascript/reference/arguments-object-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[arguments Property](https://docs.microsoft.com/en-us/scripting/javascript/reference/arguments-property-function-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Array Object](https://docs.microsoft.com/en-us/scripting/javascript/reference/array-object-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Array.from Function (Array)](https://docs.microsoft.com/en-us/scripting/javascript/reference/array-from-function-array-javascript)|N|N|N|N|N|N|v8.1: N<br />v10: Y|  
|[Array.isArray Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/array-isarray-function-javascript)|N|N|Y|Y|Y|Y|Y|  
|[Array.of Function (Array)](https://docs.microsoft.com/en-us/scripting/javascript/reference/array-of-function-array-javascript)|N|N|N|N|N|N|v8.1: N<br />v10: Y|  
|[ArrayBuffer Object](https://docs.microsoft.com/en-us/scripting/javascript/reference/arraybuffer-object)|N|N|N|Y|Y|Y|Y|  
|[Functions](https://docs.microsoft.com/en-us/scripting/javascript/functions-javascript)|N|N|N|N|N|N|v8.1: N<br />v10: Y|  
|[asin Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/math-asin-function-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Object.assign Function (Object)](https://docs.microsoft.com/en-us/scripting/javascript/reference/object-assign-function-object-javascript)|N|N|N|N|N|N|v8.1: N<br />v10: Y|  
|[Assignment Operator (=)](https://docs.microsoft.com/en-us/scripting/javascript/reference/assignment-operator-decrement-equal-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[atan Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/math-atan-function-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[atan2 Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/math-atan2-function-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[atEnd Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/atend-method-enumerator-javascript)|Y|Y|Y|Y|Y|Y|N|  
|[bind Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/bind-method-function-javascript)|N|N|Y|Y|Y|Y|Y|  
|[Bitwise AND Assignment Operator (&=)](https://docs.microsoft.com/en-us/scripting/javascript/reference/bitwise-and-assignment-operator-decrement-equal-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Bitwise AND Operator (&)](https://docs.microsoft.com/en-us/scripting/javascript/reference/bitwise-and-operator-decrement-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Bitwise Left Shift Operator (<\<)](https://docs.microsoft.com/en-us/scripting/javascript/reference/bitwise-left-shift-operator-decrement-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Bitwise NOT Operator (~)](https://docs.microsoft.com/en-us/scripting/javascript/reference/bitwise-not-operator-decrement-tilde-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Bitwise OR Assignment Operator (&#124;=)](https://docs.microsoft.com/en-us/scripting/javascript/reference/bitwise-or-assignment-operator-decrement-equal-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Bitwise OR Operator (&#124;)](https://docs.microsoft.com/en-us/scripting/javascript/reference/bitwise-or-operator-decrement-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Bitwise Right Shift Operator (>>)](https://docs.microsoft.com/en-us/scripting/javascript/reference/bitwise-right-shift-operator-decrement-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Bitwise YOR Assignment Operator (^=)](https://docs.microsoft.com/en-us/scripting/javascript/reference/bitwise-xor-assignment-operator-decrement-hat-equal-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Bitwise YOR Operator (^)](https://docs.microsoft.com/en-us/scripting/javascript/reference/bitwise-xor-operator-decrement-hat-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[blink Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/html-tag-methods-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[bold Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/html-tag-methods-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Boolean Object](https://docs.microsoft.com/en-us/scripting/javascript/reference/boolean-object-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[break Statement](https://docs.microsoft.com/en-us/scripting/javascript/reference/break-statement-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[call Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/call-method-function-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[callee Property](https://docs.microsoft.com/en-us/scripting/javascript/reference/callee-property-arguments-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[caller Property](https://docs.microsoft.com/en-us/scripting/javascript/reference/caller-property-function-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[catch Statement](https://docs.microsoft.com/en-us/scripting/javascript/reference/try-dot-dot-dot-catch-dot-dot-dot-finally-statement-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[ceil Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/math-ceil-function-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[charAt Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/charat-method-string-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[charCodeAt Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/charcodeat-method-string-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[class Statement](https://docs.microsoft.com/en-us/scripting/javascript/reference/class-statement-javascript)|N|N|N|N|N|Exp.|v8.1: N<br />v10: Exp.|  
|[codePointAt Method (String)](https://docs.microsoft.com/en-us/scripting/javascript/reference/codepointat-method-string-javascript)|N|N|N|N|N|Y|v8.1: N<br />v10: Y|  
|[Comma Operator (,)](https://docs.microsoft.com/en-us/scripting/javascript/reference/comma-operator-decrement-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[// (Single-line Comment Statement)](https://docs.microsoft.com/en-us/scripting/javascript/reference/comment-statements-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[/*..\*/ (Multiline Comment Statement)](https://docs.microsoft.com/en-us/scripting/javascript/reference/comment-statements-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Comparison Operators](https://docs.microsoft.com/en-us/scripting/javascript/reference/comparison-operators-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[compile Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/compile-method-regular-expression-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[concat Method (Array)](https://docs.microsoft.com/en-us/scripting/javascript/reference/concat-method-array-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[concat Method (String)](https://docs.microsoft.com/en-us/scripting/javascript/reference/concat-method-string-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Conditional Compilation](https://docs.microsoft.com/en-us/scripting/javascript/advanced/conditional-compilation-javascript)|Y|Y|Y|Y|N|N|N|  
|[Conditional Compilation Variables](https://docs.microsoft.com/en-us/scripting/javascript/advanced/conditional-compilation-variables-javascript)|Y|Y|Y|Y|N|N|N|  
|[Conditional (Ternary) Operator (?:)](https://docs.microsoft.com/en-us/scripting/javascript/reference/conditional-ternary-operator-decrement-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[constructor Property](https://docs.microsoft.com/en-us/scripting/javascript/reference/constructor-property-object-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[const Statement](https://docs.microsoft.com/en-us/scripting/javascript/reference/const-statement-javascript)|N|N|N|N|Y|Y|v8 (Win): N<br />v8.1 (Win): Y<br />v8.1 (Phone): Y|  
|[continue Statement](https://docs.microsoft.com/en-us/scripting/javascript/reference/continue-statement-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[cos Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/math-cos-function-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[create Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/object-create-function-javascript)|N|N|Y|Y|Y|Y|Y|  
|[DataView Object](https://docs.microsoft.com/en-us/scripting/javascript/reference/dataview-object)|N|N|N|Y|Y|Y|Y|  
|[Date Object](https://docs.microsoft.com/en-us/scripting/javascript/reference/date-object-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Debug Object](https://docs.microsoft.com/en-us/scripting/javascript/reference/debug-object-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Debug.setNonUserCodeExceptions Property](https://docs.microsoft.com/en-us/scripting/javascript/reference/debug-setnonusercodeexceptions-property)|N|N|N|Y|Y|Y|Y|  
|[Debug.setNonUserCodeExceptions Property](https://docs.microsoft.com/en-us/scripting/javascript/reference/debug-setnonusercodeexceptions-property)|N|N|N|Y|Y|Y|Y|  
|[debugger Statement](https://docs.microsoft.com/en-us/scripting/javascript/reference/debugger-statement-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[decodeURI Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/decodeuri-function-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[DecodeURIComponent Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/decodeuricomponent-function-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Decrement Operator (--)](https://docs.microsoft.com/en-us/scripting/javascript/reference/increment-and-decrement-operators-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Functions](https://docs.microsoft.com/en-us/scripting/javascript/functions-javascript)|N|N|N|N|N|Exp.|v8.1: N<br />v10: Exp.|  
|[defineProperties Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/object-defineproperties-function-javascript)|N|Y*|Y|Y|Y|Y|Y|  
|[defineProperty Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/object-defineproperty-function-javascript)|N|Y*|Y|Y|Y|Y|Y|  
|[delete Operator](https://docs.microsoft.com/en-us/scripting/javascript/reference/delete-operator-decrementjavascript)|Y|Y|Y|Y|Y|Y|Y|  
|[description Property](https://docs.microsoft.com/en-us/scripting/javascript/reference/description-property-error-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[dimensions Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/dimensions-method-vbarray-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Division Assignment Operator (/=)](https://docs.microsoft.com/en-us/scripting/javascript/reference/division-assignment-operator-decrement-equal-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Division Operator (/)](https://docs.microsoft.com/en-us/scripting/javascript/reference/division-operator-decrement-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[do...while Statement](https://docs.microsoft.com/en-us/scripting/javascript/reference/do-dot-dot-dot-while-statement-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[E Constant](https://docs.microsoft.com/en-us/scripting/javascript/reference/math-constants-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[encodeURI Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/encodeuri-function-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[encodeURI Component Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/encodeuricomponent-function-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[entries Method (Array)](https://docs.microsoft.com/en-us/scripting/javascript/reference/entries-method-array-javascript)|N|N|N|N|N|N|v8.1: N<br />v10: Y|  
|[Enumerator Object](https://docs.microsoft.com/en-us/scripting/javascript/reference/enumerator-object-javascript)|Y|Y|Y|Y|Y|Y|N|  
|[Number Constants](https://docs.microsoft.com/en-us/scripting/javascript/reference/number-constants-javascript)|N|N|N|N|N|N|v8.1: N<br />v10: Y|  
|[Equality Operator (==)](https://docs.microsoft.com/en-us/scripting/javascript/reference/comparison-operators-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Error Object](https://docs.microsoft.com/en-us/scripting/javascript/reference/error-object-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[stack Property (Error)](https://docs.microsoft.com/en-us/scripting/javascript/reference/stack-property-error-javascript)|N|N|N|Y|Y|Y|Y|  
|[stackTraceLimit Property (Error)](https://docs.microsoft.com/en-us/scripting/javascript/reference/stacktracelimit-property-error-javascript)|N|N|N|Y|Y|Y|Y|  
|[escape Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/escape-function-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[eval Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/eval-function-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[exec Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/exec-method-regular-expression-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[every Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/every-method-array-javascript)|N|N|Y|Y|Y|Y|Y|  
|[exp Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/math-exp-function-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[fill Method (Array)](https://docs.microsoft.com/en-us/scripting/javascript/reference/fill-method-array-javascript)|N|N|N|N|N|N|v8.1: N<br />v10: Y|  
|[filter Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/filter-method-array-javascript)|N|N|Y|Y|Y|Y|Y|  
|[finally Statement](https://docs.microsoft.com/en-us/scripting/javascript/reference/try-dot-dot-dot-catch-dot-dot-dot-finally-statement-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[findIndex Method (Array)](https://docs.microsoft.com/en-us/scripting/javascript/reference/findindex-method-array-javascript)|N|N|N|N|N|N|v8.1: N<br />v10: Y|  
|[fixed Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/html-tag-methods-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Float32Array Object](https://docs.microsoft.com/en-us/scripting/javascript/reference/float32array-object)|N|N|N|Y|Y|Y|Y|  
|[Float64Array Object](https://docs.microsoft.com/en-us/scripting/javascript/reference/float64array-object)|N|N|N|Y|Y|Y|Y|  
|[floor Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/math-floor-function-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[fontcolor Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/html-tag-methods-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[fontsize Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/html-tag-methods-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[for Statement](https://docs.microsoft.com/en-us/scripting/javascript/reference/for-statement-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[forEach Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/foreach-method-array-javascript)|N|N|Y|Y|Y|Y|Y|  
|[for...in Statement](https://docs.microsoft.com/en-us/scripting/javascript/reference/for-dot-dot-dot-in-statement-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[for...of Statement](https://docs.microsoft.com/en-us/scripting/javascript/reference/for-dot-dot-dot-of-statement-javascript)|N|N|N|N|N|Y|v8.1: N<br />v10: Y|  
|[freeze Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/object-freeze-function-javascript)|N|N|Y|Y|Y|Y|Y|  
|[fromCharCode Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/string-fromcharcode-function-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[fromCodePoint Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/string-fromcodepoint-function-javascript)|N|N|N|N|N|Y|v8.1: N<br />v10: Y|  
|[Function Object](https://docs.microsoft.com/en-us/scripting/javascript/reference/function-object-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[function Statement](https://docs.microsoft.com/en-us/scripting/javascript/reference/function-statement-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Generators](https://docs.microsoft.com/en-us/scripting/javascript/advanced/iterators-and-generators-javascript)|N|N|N|N|N|Exp.|v8.1: N<br />v10: Exp.|  
|[getDate Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/getdate-method-date-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[getDay Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/getday-method-date-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[getFullYear Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/getfullyear-method-date-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[getHours Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/gethours-method-date-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[getItem Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/getitem-method-vbarray-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[getMilliseconds Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/getmilliseconds-method-date-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[getMinutes Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/getminutes-method-date-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[getMonth Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/getmonth-method-date-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[GetObject Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/getobject-function-javascript)|Y|Y|N|N|N|N|N|  
|[getOwnPropertyDescriptor Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/object-getownpropertydescriptor-function-javascript)|N|Y*|Y|Y|Y|Y|Y|  
|[getOwnPropertyNames Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/object-getownpropertynames-function-javascript)|N|N|Y|Y|Y|Y|Y|  
|[getPrototypeOf Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/object-getprototypeof-function-javascript)|N|N|Y|Y|Y|Y|Y|  
|[getSeconds Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/getseconds-method-date-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[getTime Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/gettime-method-date-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[getTimezoneOffset Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/gettimezoneoffset-method-date-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[getUTCDate Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/getutcdate-method-date-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[getUTCDay Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/getutcday-method-date-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[getUTCFullYear Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/getutcfullyear-method-date-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[getUTCHours Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/getutchours-method-date-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[getUTCMilliseconds Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/getutcmilliseconds-method-date-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[getUTCMinutes Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/getutcminutes-method-date-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[getUTCMonth Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/getutcmonth-method-date-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[getUTCSeconds Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/getutcseconds-method-date-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[getVarDate Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/getvardate-method-date-javascript)|Y|Y|Y|Y|Y|Y|N|  
|[getYear Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/getyear-method-date-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Global Object](https://docs.microsoft.com/en-us/scripting/javascript/reference/global-object-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[global Property](https://docs.microsoft.com/en-us/scripting/javascript/reference/global-property-regular-expression-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Greater than Operator (>)](https://docs.microsoft.com/en-us/scripting/javascript/reference/comparison-operators-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Greater than or equal to Operator (>=)](https://docs.microsoft.com/en-us/scripting/javascript/reference/comparison-operators-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[hasOwnProperty Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/hasownproperty-method-object-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[HTML Tag Methods](https://docs.microsoft.com/en-us/scripting/javascript/reference/html-tag-methods-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[hypot Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/math-hypot-function-javascript)|N|N|N|N|N|Y|v8.1: N<br />v10: Y|  
|[Identity Operator (===)](https://docs.microsoft.com/en-us/scripting/javascript/reference/comparison-operators-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[if...else Statement](https://docs.microsoft.com/en-us/scripting/javascript/reference/if-dot-dot-dot-else-statement-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[ignoreCase Property](https://docs.microsoft.com/en-us/scripting/javascript/reference/ignorecase-property-regular-expression-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[imul Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/math-imul-function-javascript)|N|N|N|N|N|Y|v8.1: N<br />v10: Y|  
|[In Operator](https://docs.microsoft.com/en-us/scripting/javascript/reference/in-operator-decrementjavascript)|Y|Y|Y|Y|Y|Y|Y|  
|[includes Method (String)](https://docs.microsoft.com/en-us/scripting/javascript/reference/includes-method-string-javascript)|N|N|N|N|N|Y|v8.1: N<br />v10: Y|  
|[Increment Operator (++)](https://docs.microsoft.com/en-us/scripting/javascript/reference/increment-and-decrement-operators-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[index Property](https://docs.microsoft.com/en-us/scripting/javascript/reference/index-property-regexp-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[indexOf Method (Array)](https://docs.microsoft.com/en-us/scripting/javascript/reference/indexof-method-array-javascript)|N|N|Y|Y|Y|Y|Y|  
|[indexOf Method (String)](https://docs.microsoft.com/en-us/scripting/javascript/reference/indexof-method-string-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Inequality Operator (!=)](https://docs.microsoft.com/en-us/scripting/javascript/reference/comparison-operators-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Infinity Constant](https://docs.microsoft.com/en-us/scripting/javascript/reference/infinity-constant-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[input Property ($_)](https://docs.microsoft.com/en-us/scripting/javascript/reference/input-property-dollar-regexp-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[instanceof Operator](https://docs.microsoft.com/en-us/scripting/javascript/reference/instanceof-operator-decrementjavascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Int8Array Object](https://docs.microsoft.com/en-us/scripting/javascript/reference/int8array-object)|N|N|N|Y|Y|Y|Y|  
|[Int16Array Object](https://docs.microsoft.com/en-us/scripting/javascript/reference/int16array-object)|N|N|N|Y|Y|Y|Y|  
|[Int32Array Object](https://docs.microsoft.com/en-us/scripting/javascript/reference/int32array-object)|N|N|N|Y|Y|Y|Y|  
|[Intl.Collator Object](https://docs.microsoft.com/en-us/scripting/javascript/reference/intl-collator-object-javascript)|N|N|N|N|Y|Y|v8 (Win): N<br />v8.1 (Win): Y<br />v8.1 (Phone): Y|  
|[Intl.DateTimeFormat Object](https://docs.microsoft.com/en-us/scripting/javascript/reference/intl-datetimeformat-object-javascript)|N|N|N|N|Y|Y|v8: N<br />v8.1: Y|  
|[Intl.NumberFormat Object](https://docs.microsoft.com/en-us/scripting/javascript/reference/intl-numberformat-object-javascript)|N|N|N|N|Y|Y|v8: N<br />v8.1: Y|  
|[isFinite Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/isfinite-function-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[isArray Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/array-isarray-function-javascript)|N|N|Y|Y|Y|Y|Y|  
|[IsExtensible Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/object-isextensible-function-javascript)|N|N|Y|Y|Y|Y|Y|  
|[isFrozen Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/object-isfrozen-function-javascript)|N|N|Y|Y|Y|Y|Y|  
|[isInteger Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/number-isinteger-function-number-javascript)|N|N|N|N|N|Y|v8.1: N<br />v10: Y|  
|[isNaN Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/isnan-function-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[isNaN Function (Number)](https://docs.microsoft.com/en-us/scripting/javascript/reference/number-isnan-function-number-javascript)|N|N|N|N|N|Y|v8.1: N<br />v10: Y|  
|[ISO Date Format](https://docs.microsoft.com/en-us/scripting/javascript/date-and-time-strings-javascript)|N|N|Y|Y|Y|Y|Y|  
|[IsPrototypeOf Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/isprototypeof-method-object-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[isSealed Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/object-issealed-function-javascript)|N|N|Y|Y|Y|Y|Y|  
|[italics Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/html-tag-methods-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Iterators](https://docs.microsoft.com/en-us/scripting/javascript/advanced/iterators-and-generators-javascript)|N|N|N|N|N|Y|v8.1: N<br />v10: Y|  
|[item Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/item-method-enumerator-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[join Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/join-method-array-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[JSON Object](https://docs.microsoft.com/en-us/scripting/javascript/reference/json-object-javascript)|N|Y|Y|Y|Y|Y|Y|  
|[keys Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/object-keys-function-javascript)|N|N|Y|Y|Y|Y|Y|  
|[keys Method (Array)](https://docs.microsoft.com/en-us/scripting/javascript/reference/keys-method-array-javascript)|N|N|N|N|N|Y|v8.1: N<br />v10: Y|  
|[Labeled Statement](https://docs.microsoft.com/en-us/scripting/javascript/reference/labeled-statement-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[lastIndex Property](https://docs.microsoft.com/en-us/scripting/javascript/reference/lastindex-property-regexp-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[lastIndexOf Method (Array)](https://docs.microsoft.com/en-us/scripting/javascript/reference/lastindexof-method-array-javascript)|N|N|Y|Y|Y|Y|Y|  
|[lastIndexOf Method (String)](https://docs.microsoft.com/en-us/scripting/javascript/reference/lastindexof-method-string-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[lastMatch Property ($&)](https://docs.microsoft.com/en-us/scripting/javascript/reference/lastmatch-property-dollar-regexp-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[lastParen Property ($+)](https://docs.microsoft.com/en-us/scripting/javascript/reference/lastparen-property-dollar-regexp-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[lbound Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/lbound-method-vbarray-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[leftContext Property ($')](https://docs.microsoft.com/en-us/scripting/javascript/reference/leftcontext-property-dollar-grave-regexp-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Left Shift Assignment Operator (<<=)](https://docs.microsoft.com/en-us/scripting/javascript/reference/left-shift-assignment-operator-decrement-equal-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[length Property (Arguments)](https://docs.microsoft.com/en-us/scripting/javascript/reference/length-property-arguments-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[length Property (Array)](https://docs.microsoft.com/en-us/scripting/javascript/reference/length-property-array-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[length Property (Function)](https://docs.microsoft.com/en-us/scripting/javascript/reference/length-property-function-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[length Property (String)](https://docs.microsoft.com/en-us/scripting/javascript/reference/length-property-string-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Less than Operator (<)](https://docs.microsoft.com/en-us/scripting/javascript/reference/comparison-operators-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Less than or equal to Operator (<=)](https://docs.microsoft.com/en-us/scripting/javascript/reference/comparison-operators-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[let Statement](https://docs.microsoft.com/en-us/scripting/javascript/reference/let-statement-javascript)|N|N|N|N|Y|Y|v8: N<br />v8.1: Y|  
|[link Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/html-tag-methods-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[LN2 Constant](https://docs.microsoft.com/en-us/scripting/javascript/reference/math-constants-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[LN10 Constant](https://docs.microsoft.com/en-us/scripting/javascript/reference/math-constants-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[localeCompare Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/localecompare-method-string-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[log Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/math-log-function-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[LOG2E Constant](https://docs.microsoft.com/en-us/scripting/javascript/reference/math-constants-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[LOG10E Constant](https://docs.microsoft.com/en-us/scripting/javascript/reference/math-constants-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Logical AND Operator (&&)](https://docs.microsoft.com/en-us/scripting/javascript/reference/logical-and-operator-decrement-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Logical NOT Operator (!)](https://docs.microsoft.com/en-us/scripting/javascript/reference/logical-not-operator-decrement-exclpt-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Logical OR Operator (&#124;&#124;)](https://docs.microsoft.com/en-us/scripting/javascript/reference/logical-or-operator-decrement-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[map Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/map-method-array-javascript)|N|N|Y|Y|Y|Y|Y|  
|[Map Object](https://docs.microsoft.com/en-us/scripting/javascript/reference/map-object-javascript)|N|N|N|N|Y|Y|v8: N<br />v8.1: Y|  
|[match Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/match-method-string-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Math Object](https://docs.microsoft.com/en-us/scripting/javascript/reference/math-object-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[max Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/math-max-function-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[MAX_VALUE Constant](https://docs.microsoft.com/en-us/scripting/javascript/reference/number-constants-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[message Property](https://docs.microsoft.com/en-us/scripting/javascript/reference/message-property-error-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[min Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/math-min-function-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[MIN_VALUE Constant](https://docs.microsoft.com/en-us/scripting/javascript/reference/number-constants-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Remainder Assignment Operator (%=)](https://docs.microsoft.com/en-us/scripting/javascript/reference/modulus-assignment-operator-decrement-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Remainder Operator (%)](https://docs.microsoft.com/en-us/scripting/javascript/reference/modulus-operator-decrementjavascript)|Y|Y|Y|Y|Y|Y|Y|  
|[moveFirst Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/movefirst-method-enumerator-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[moveNext Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/movenext-method-enumerator-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[multiline Property](https://docs.microsoft.com/en-us/scripting/javascript/reference/multiline-property-regular-expression-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Multiplication Assignment Operator (*=)](https://docs.microsoft.com/en-us/scripting/javascript/reference/multiplication-assignment-operator-decrement-equal-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Multiplication Operator (*)](https://docs.microsoft.com/en-us/scripting/javascript/reference/multiplication-operator-decrement-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[name Property](https://docs.microsoft.com/en-us/scripting/javascript/reference/name-property-error-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[NaN Constant (Global)](https://docs.microsoft.com/en-us/scripting/javascript/reference/nan-constant-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[NaN Constant (Number)](https://docs.microsoft.com/en-us/scripting/javascript/reference/number-constants-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[NEGATIVE_INFINITY Constant](https://docs.microsoft.com/en-us/scripting/javascript/reference/number-constants-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[new Operator](https://docs.microsoft.com/en-us/scripting/javascript/reference/new-operator-decrementjavascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Nonidentity Operator (!==)](https://docs.microsoft.com/en-us/scripting/javascript/reference/comparison-operators-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[now Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/date-now-function-javascript)|N|N|Y|Y|Y|Y|Y|  
|[Number Object](https://docs.microsoft.com/en-us/scripting/javascript/reference/number-object-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[number Property](https://docs.microsoft.com/en-us/scripting/javascript/reference/number-property-error-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Object Object](https://docs.microsoft.com/en-us/scripting/javascript/reference/object-object-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Operator Precedence](https://docs.microsoft.com/en-us/scripting/javascript/operator-subtractprecedence-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Date.parse Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/date-parse-function-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[JSON.parse Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/json-parse-function-javascript)|N|Y|Y|Y|Y|Y|Y|  
|[parseFloat Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/parsefloat-function-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[parseInt Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/parseint-function-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[PI Constant](https://docs.microsoft.com/en-us/scripting/javascript/reference/math-constants-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[pop Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/pop-method-array-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[POSITIVE_INFINITY Constant](https://docs.microsoft.com/en-us/scripting/javascript/reference/number-constants-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[pow Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/math-pow-function-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[preventExtensions Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/object-preventextensions-function-javascript)|N|N|Y|Y|Y|Y|Y|  
|[Promise Object](https://docs.microsoft.com/en-us/scripting/javascript/reference/promise-object-javascript)|N|N|N|N|N|Y|v8.1: N<br />v10: Y|  
|[prototype Property](https://docs.microsoft.com/en-us/scripting/javascript/reference/prototype-property-object-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[propertyIsEnumerable Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/propertyisenumerable-method-object-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Proxy Object](https://docs.microsoft.com/en-us/scripting/javascript/reference/proxy-object-javascript)|N|N|N|N|N|Y|v8.1: N<br />v10: Y|  
|[push Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/push-method-array-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[random Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/math-random-function-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[raw Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/string-raw-function-javascript)|N|N|N|N|N|Y|v8.1: N<br />v10: Y|  
|[reduce Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/reduce-method-array-javascript)|N|N|Y|Y|Y|Y|Y|  
|[reduceRight Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/reduceright-method-array-javascript)|N|N|Y|Y|Y|Y|Y|  
|[RegExp Object](https://docs.microsoft.com/en-us/scripting/javascript/reference/regexp-object-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Regular Expression Object](https://docs.microsoft.com/en-us/scripting/javascript/reference/regular-expression-object-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Regular Expression Syntax](http://msdn.microsoft.com/en-us/ab0766e1-7037-45ed-aa23-706f58358c0e)|Y|Y|Y|Y|Y|Y|Y|  
|[Regular Expression /y flag](https://docs.microsoft.com/en-us/scripting/javascript/reference/regular-expression-object-javascript)|N|N|N|N|N|Exp.|v8.1: N<br />v10: Exp.|  
|[repeat Method (String)](https://docs.microsoft.com/en-us/scripting/javascript/reference/repeat-method-string-javascript)|N|N|N|N|N|Y|v8.1: N<br />v10: Y|  
|[replace Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/replace-method-string-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Functions](https://docs.microsoft.com/en-us/scripting/javascript/functions-javascript)|N|N|N|N|N|N|v8.1: N<br />v10: Y|  
|[return Statement](https://docs.microsoft.com/en-us/scripting/javascript/reference/return-statement-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[reverse Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/reverse-method-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[rightContext Property ($')](https://docs.microsoft.com/en-us/scripting/javascript/reference/rightcontext-property-dollar-regexp-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Right Shift Assignment Operator (>>=)](https://docs.microsoft.com/en-us/scripting/javascript/reference/right-shift-assignment-operator-decrement-equal-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[round Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/math-round-function-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[ScriptEngine Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/scriptengine-function-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[ScriptEngineBuildVersion Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/scriptenginebuildversion-function-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[ScriptEngineMajorVersion Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/scriptenginemajorversion-function-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[ScriptEngineMinorVersion Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/scriptengineminorversion-function-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[seal Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/object-seal-function-javascript)|N|N|Y|Y|Y|Y|Y|  
|[search Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/search-method-string-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Set Object](https://docs.microsoft.com/en-us/scripting/javascript/reference/set-object-javascript)|N|N|N|N|Y|Y|v8: N<br />v8.1: Y|  
|[setDate Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/setdate-method-date-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[setFullYear Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/setfullyear-method-date-javascript)||Y|Y|Y|Y|Y|Y|  
|[setHours Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/sethours-method-date-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[setMilliseconds Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/setmilliseconds-method-date-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[setMinutes Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/setminutes-method-date-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[setMonth Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/setmonth-method-date-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[setSeconds Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/setseconds-method-date-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[setTime Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/settime-method-date-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[setUTCDate Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/setutcdate-method-date-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[setUTCFullYear Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/setutcfullyear-method-date-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[setUTCHours Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/setutchours-method-date-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[setUTCMilliseconds Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/setutcmilliseconds-method-date-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[setUTCMinutes Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/setutcminutes-method-date-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[setUTCMonth Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/setutcmonth-method-date-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[setUTCSeconds Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/setutcseconds-method-date-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[setYear Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/setyear-method-date-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[shift Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/shift-method-array-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[sin Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/math-sin-function-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[slice Method (Array)](https://docs.microsoft.com/en-us/scripting/javascript/reference/slice-method-array-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[slice Method (String)](https://docs.microsoft.com/en-us/scripting/javascript/reference/slice-method-string-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[small Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/html-tag-methods-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[some Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/some-method-array-javascript)|N|N|Y|Y|Y|Y|Y|  
|[sort Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/sort-method-array-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[source Property](https://docs.microsoft.com/en-us/scripting/javascript/reference/source-property-regular-expression-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[splice Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/splice-method-array-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[split Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/split-method-string-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Functions](https://docs.microsoft.com/en-us/scripting/javascript/functions-javascript)|N|N|N|N|N|Y|v8.1: N<br />v10: Y|  
|[sqrt Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/math-sqrt-function-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[SQRT1_2 Constant](https://docs.microsoft.com/en-us/scripting/javascript/reference/math-constants-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[SQRT2 Constant](https://docs.microsoft.com/en-us/scripting/javascript/reference/math-constants-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[use strict Directive](https://docs.microsoft.com/en-us/scripting/javascript/reference/use-strict-directive)|N|N|N|Y|Y|Y|Y|  
|[strike Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/html-tag-methods-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[String Object](https://docs.microsoft.com/en-us/scripting/javascript/reference/string-object-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[JSON.stringify Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/json-stringify-function-javascript)|N|Y|Y|Y|Y|Y|Y|  
|[sub Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/html-tag-methods-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[substr Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/substr-method-string-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[substring Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/substring-method-string-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Subtraction Assignment Operator (-=)](https://docs.microsoft.com/en-us/scripting/javascript/reference/subtraction-assignment-operator-decrement-equal-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Subtraction Operator (-)](https://docs.microsoft.com/en-us/scripting/javascript/reference/subtraction-operator-decrement-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[sup Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/html-tag-methods-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[switch Statement](https://docs.microsoft.com/en-us/scripting/javascript/reference/switch-statement-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Symbol Object](https://docs.microsoft.com/en-us/scripting/javascript/reference/symbol-object-javascript)|N|N|N|N|N|Y|v8.1: N<br />v10: Y|  
|[tan Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/math-tan-function-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Template strings](https://docs.microsoft.com/en-us/scripting/javascript/advanced/template-strings-javascript)|N|N|N|N|N|Y|v8.1: N<br />v10: Y|  
|[test Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/test-method-regular-expression-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[this Statement](https://docs.microsoft.com/en-us/scripting/javascript/reference/this-statement-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[throw Statement](https://docs.microsoft.com/en-us/scripting/javascript/reference/throw-statement-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[toArray Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/toarray-method-vbarray-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[toDateString Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/todatestring-method-date-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[toExponential Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/toexponential-method-number-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[toFixed Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/tofixed-method-number-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[toGMTString Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/togmtstring-method-date-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[toISOString Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/toisostring-method-date-javascript)|N|N|Y|Y|Y|Y|Y|  
|[toJSON Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/tojson-method-date-javascript)|N|Y|Y|Y|Y|Y|Y|  
|[toLocaleDateString Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/tolocaledatestring-method-date-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[toLocaleLowercase Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/tolocalelowercase-method-string-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[toLocaleString Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/tolocalestring-method-object-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[toLocaleTimeString Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/tolocaletimestring-method-date-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[toLocaleUppercase Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/tolocaleuppercase-method-string-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[toLowerCase Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/tolowercase-method-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[toPrecision Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/toprecision-method-number-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[toString Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/tostring-method-object-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[toTimeString Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/totimestring-method-date-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[toUpperCase Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/touppercase-method-string-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[toUTCString Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/toutcstring-method-date-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[trim Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/trim-method-string-javascript)|N|N|Y|Y|Y|Y|Y|  
|[try Statement](https://docs.microsoft.com/en-us/scripting/javascript/reference/try-dot-dot-dot-catch-dot-dot-dot-finally-statement-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[typeof Operator](https://docs.microsoft.com/en-us/scripting/javascript/reference/typeof-operator-decrementjavascript)|Y|Y|Y|Y|Y|Y|Y|  
|[ubound Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/ubound-method-vbarray-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Uint8Array Object](https://docs.microsoft.com/en-us/scripting/javascript/reference/uint8array-object)|N|N|N|Y|Y|Y|Y|  
|[Uint16Array Object](https://docs.microsoft.com/en-us/scripting/javascript/reference/uint16array-object)|N|N|N|Y|Y|Y|Y|  
|[Uint32Array Object](https://docs.microsoft.com/en-us/scripting/javascript/reference/uint32array-object)|N|N|N|Y|Y|Y|Y|  
|[Uint8ClampedArray Object](https://docs.microsoft.com/en-us/scripting/javascript/reference/uint8clampedarray-object-javascript)|N|N|N|N|Y|Y|v8: No<br />v8.1 (Win): Yes<br />v8.1 (Phone): No<br />v10: Y|  
|[Unary Negation Operator (-)](https://docs.microsoft.com/en-us/scripting/javascript/reference/subtraction-operator-decrement-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[undefined Constant](https://docs.microsoft.com/en-us/scripting/javascript/reference/undefined-constant-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[unescape Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/unescape-function-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Unicode code point escape characters](https://docs.microsoft.com/en-us/scripting/javascript/advanced/special-characters-javascript)|N|N|N|N|N|Y|v8.1: N<br />v10: Y|  
|[unshift Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/unshift-method-array-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Unsigned Right Shift Assignment Operator (>>>=)](https://docs.microsoft.com/en-us/scripting/javascript/reference/unsigned-right-shift-assignment-operator-decrement-equal-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[Unsigned Right Shift Operator (>>>)](https://docs.microsoft.com/en-us/scripting/javascript/reference/unsigned-right-shift-operator-decrement-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[use strict Directive](https://docs.microsoft.com/en-us/scripting/javascript/reference/use-strict-directive)|N|N|N|Y|Y|Y|Y|  
|[UTC Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/date-utc-function-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[valueOf Method](https://docs.microsoft.com/en-us/scripting/javascript/reference/valueof-method-object-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[values Method (Array)](https://docs.microsoft.com/en-us/scripting/javascript/reference/values-method-array-javascript)|N|N|N|N|N|Y|v8.1: N<br />v10: Y|  
|[var Statement](https://docs.microsoft.com/en-us/scripting/javascript/reference/var-statement-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[VBArray Object](https://docs.microsoft.com/en-us/scripting/javascript/reference/vbarray-object-javascript)|Y|Y|Y|Y|Y|Y|N|  
|[void Operator](https://docs.microsoft.com/en-us/scripting/javascript/reference/void-operator-decrementjavascript)|Y|Y|Y|Y|Y|Y|Y|  
|[WeakMap Object](https://docs.microsoft.com/en-us/scripting/javascript/reference/weakmap-object-javascript)|N|N|N|N|Y|Y|v8: N<br />v8.1: Y|  
|[WeakSet Object](https://docs.microsoft.com/en-us/scripting/javascript/reference/weakset-object-javascript)|N|N|N|N|N|Y|v8.1: N<br />v10: Y|  
|[while Statement](https://docs.microsoft.com/en-us/scripting/javascript/reference/while-statement-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[WinRTError Object](https://docs.microsoft.com/en-us/scripting/javascript/reference/winrterror-object-javascript)|N|N|N|Y|Y|Y|Y|  
|[with Statement](https://docs.microsoft.com/en-us/scripting/javascript/reference/with-statement-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[write Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/debug-write-function-javascript)|Y|Y|Y|Y|Y|Y|Y|  
|[writeln Function](https://docs.microsoft.com/en-us/scripting/javascript/reference/debug-writeln-function-javascript)|Y|Y|Y|Y|Y|Y|Y|  
  
 \* Supports DOM objects but not user-defined objects. The `enumerable` and `configurable` attributes can be specified, but they are not used.  
  
## See Also  
 [Defining Document Compatibility](http://go.microsoft.com/fwlink/?LinkId=208537)