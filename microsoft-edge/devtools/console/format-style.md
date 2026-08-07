---
title: Format and style messages in the Console
description: Format and style messages in the Console.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 07/22/2026
---
<!-- Copyright Jecelyn Yeen

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->
# Format and style messages in the Console
<!-- https://developer.chrome.com/docs/devtools/console/format-style -->

<!-- todo: format, links, pngs -->

You can use the [Chrome DevTools Console](https://developer.chrome.com/docs/devtools) to format and style messages.

To learn how to log messages to the Console, see [Get Started With Logging Messages](https://developer.chrome.com/docs/devtools/console/log).

This guide assumes that you understand the fundamentals of web development, such as how to use JavaScript to add interactivity to a page.

**Detailed contents:**

todo


<!-- ====================================================================== -->
## Format console messages
<!-- https://developer.chrome.com/docs/devtools/console/format-style#format -->

<!-- todo: format, links, pngs -->

You can use the [format specifiers](https://console.spec.whatwg.org/#formatting-specifiers) to format the console messages.

Format specifiers begin with a percent character (%) and terminate with a "type character" which indicates the type of data (such as integer or float).

For example,

1. [Open the Console](https://developer.chrome.com/docs/devtools/console/reference#open). 

1. Enter the following console command:

```javascript
const tools = 'Chrome DevTools';
console.warn('%s is awesome.', tools);
```

The command above produces the message: `Chrome DevTools is awesome.`

![format string value] todo format-string-value.png

Here is the list of [format specifiers](https://console.spec.whatwg.org/#formatting-specifiers) Chrome DevTools support currently.

Specifier   Output
%s   Formats the value as a string
%i or %d   Formats the value as an integer
%f   Formats the value as a floating point value
%o   Formats the value as an expandable DOM element
%O   Formats the value as an expandable JavaScript object
%c   Applies CSS style rules to the output string as specified by the second parameter


<!-- ------------------------------ -->
#### Apply multiple format specifiers
<!-- https://developer.chrome.com/docs/devtools/console/format-style#multiple-specifiers -->

<!-- todo: format, links, pngs -->

You can use more than one format specifier in a message.

Enter the following console command.

```javascript
console.info('The total weight of %i %s and %d %s is %f grams.', 3, 'apples', 2, 'oranges', 432.4);
```

The command above produces the message `The total weight of 3 apples and 2 oranges is 432.4 grams.`

![multiple format specifiers] todo png


<!-- ------------------------------ -->
#### Understand type conversions
<!-- https://developer.chrome.com/docs/devtools/console/format-style#conversion -->

<!-- todo: format, links, pngs -->

The output message will be converted according to the format specifier.

Enter the following console command:

```javascript
console.log('I have %i apples and %d oranges.', 2, 3.5); 
```

The command above produces I have 2 apples and 3 oranges. message. format integer values

Instead of logging 3.5 oranges, the output is 3 oranges. The %d indicates that the value should/will be converted to an integer.

Here is an example of what happens if the type conversion is invalid.

Enter the following console command:

```javascript
console.log('Jane has %i kiwis.', 'two');
```

The command above produces the message `Jane has NaN kiwis.`

![NaN in console message] todo png

The `%i` indicates that the value should/will be converted to an integer, but the argument is a string. Thus it returns `NaN` (Not-A-Number).


<!-- ====================================================================== -->
## Style console messages
<!-- https://developer.chrome.com/docs/devtools/console/format-style#style_console_messages -->

<!-- todo: format, links, pngs -->

There are two ways to style console messages in DevTools.


<!-- ------------------------------ -->
#### Style with format specifier
<!-- https://developer.chrome.com/docs/devtools/console/format-style#style-specifier -->

<!-- todo: format, links, pngs -->

You can use the %c format specifier to style the console messages with CSS.

Enter the following console command.


const style = 'background-color: darkblue; color: white; font-style: italic; border: 5px solid hotpink; font-size: 2em;'
console.log("%cHooray", style);
The command above produces Hooray with CSS styles applied. style output with CSS

Key point: To prevent data leaks and bypasses of security policies, in this format, the url() CSS function supports only the data: URL schema. For example, you can set a background image in the following way: css background: url(data:image/png;base64,iVBORw…); Where iVBORw… is a base64-encoded PNG image.


<!-- ------------------------------ -->
#### Style with ANSI escape sequences
<!-- https://developer.chrome.com/docs/devtools/console/format-style#style-ansi -->

<!-- todo: format, links, pngs -->

You can use the ANSI escape sequences to style console messages.

It is common for Node.js developers to colorize log messages via ANSI escape sequences, often with the help of some styling libraries like chalk, colors, ansi-colors, kleur.

Nevertheless, you can style the message with ANSI escape sequences without using any libraries. Here is the syntax:


\x1B[𝘗1;…;𝘗nm
Where,

𝘗1 to 𝘗n are valid subsequences of SGR (Select Graphic Rendition) parameters.
Any of the parameters 𝘗1 to 𝘗n can be omitted, in which case its value is assumed to be zero.
\x1B[m is the shorthand for \x1B[0m, in which the display attribute will be reset.
For example,

Enter the following console command.


console.log('\x1B[41;93;4mHello\x1B[m');
The command above produces a Hello message with red background, yellow text and underlined. Hello

Here is a list of color codes supported in DevTools.

| Foreground | Background | Light theme | Dark theme |
|---|---|---|---|
| 30 | 40 | #00000 | #00000 |

31
41   
#AA0000
#ed4e4c
| ~ | ~ | ~ | ~ |

32
42   
#00AA00
#01c800
| ~ | ~ | ~ | ~ |

33
43   
#AA5500
#d2c057
| ~ | ~ | ~ | ~ |

34
44   
#0000AA
#2774f0
| ~ | ~ | ~ | ~ |

35
45   
#AA00AA
#a142f4
| ~ | ~ | ~ | ~ |

36
46   
#00AAAA
#12b5cb
| ~ | ~ | ~ | ~ |

37
47   
#AAAAAA
#cfd0d0
| ~ | ~ | ~ | ~ |

90
100   
#555555
#898989
| ~ | ~ | ~ | ~ |

91
101   
#FF5555
#f28b82
| ~ | ~ | ~ | ~ |

92
102   
#55FF55
#01c801
| ~ | ~ | ~ | ~ |

93
103   
#FFFF55
#ddfb55
| ~ | ~ | ~ | ~ |

94
104   
#5555FF
#669df6
| ~ | ~ | ~ | ~ |

95
105   
#FF55FF
#d670d6
| ~ | ~ | ~ | ~ |

96
106   
#55FFFF
#84f0ff
| ~ | ~ | ~ | ~ |

97
107   
#FFFFFF
#FFFFFF
| ~ | ~ | ~ | ~ |

DevTools supports the following styling codes:

| Parameter(s) | Meaning |
|---|---|
| 0 | Reset all display attributes |
| 1 | `font-weight: bold` |
| 2 | `font-weight: lighter` |

3   font-style: italic
| ~ | ~ |

4   Add underline to text-decoration property
| ~ | ~ |

9   Add line-through to text-decoration property
| ~ | ~ |

22   Reset font-weight property
| ~ | ~ |

23   Reset font-style property
| ~ | ~ |

24   Remove underline from text-decoration property
| ~ | ~ |

29   Remove line-through from text-decoration property
| ~ | ~ |

38;2;𝑅;𝐺;𝐵   color: rgb(𝑅,𝐺,𝐵)
| ~ | ~ |

39   Reset color property
| ~ | ~ |

48;2;𝑅;𝐺;𝐵   background: rgb(𝑅,𝐺,𝐵)
| ~ | ~ |

49   Reset background property
| ~ | ~ |

53   Add overline to text-decoration property
| ~ | ~ |

55   Remove overline from text-decoration property
| ~ | ~ |


<!-- ------------------------------ -->
#### Complex example with multiple stylings
<!-- heading not upstream; content is upstream -->

<!-- todo: format, links, pngs -->

Here is another more complex example with multiple stylings:

Enter the following console command:

```javascript
const hello = '\x1B[41;93;4mHello';
const space = '\x1B[m ';
const world = '\x1B[34;102;9mWorld';

console.log(hello + space + world);
```

The above command produces a `Hello World` message that has three different styles:

![Hello World] todo png

<!-- todo: upstream comment -->


<!-- ====================================================================== -->
## See also
<!-- todo - all links in article -->


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/devtools/console/format-style) and is authored by Jecelyn Yeen.

[![Creative Commons License](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
