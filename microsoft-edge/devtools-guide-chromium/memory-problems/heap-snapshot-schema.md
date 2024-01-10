---
title: The heap snapshot file format
description: How the heap snapshot files are structured, when exported from the Memory tool
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 9/16/2022
---
# The heap snapshot file format

Investigating memory usage in web applications can be difficult. The DevTools **Memory** tool allows you to explore all of the objects that are allocated in memory, by your web application by taking a heap snapshot. This information is useful for performance investigations because you can find out which objects are consuming the most memory.

However, sometimes you may need to focus on specific parts of the memory data that the **Memory** tool doesn't show. In this case, use DevTools to export the entire set of memory data as a `.heapsnapshot` JSON file.

This article describes the structure and content of `.heapsnapshot` JSON files so you can build your own visualization and analysis tools.


<!-- ====================================================================== -->
## Record a heap snapshot

To export a `.heapsnapshot` file, first you need to record a heap snapshot in the **Memory** tool, as follows:

1. In Microsoft Edge, navigate to the website you want to export the data from.

1. Press **Ctrl+Shift+I** (Windows, Linux) or **Command+Option+I** (macOS) to open Devtools.

1. Open the **Memory** tool.

1. Select **Heap snapshot** and then click **Take snapshot**.

For more information, see [Record heap snapshots using the Memory tool](heap-snapshots.md).


<!-- ====================================================================== -->
## Export and view a `.heapsnapshot` file

Once you have recorded a heap snapshot, you can export it.

1. In the **Memory** tool left sidebar, click **Save** next to the heap snapshot item you just recorded.

1. Change the file extension from `.heapsnapshot` to `.json`, to make it easier to open the file in a text editor.

1. Open the saved file in a text editor, such as Visual Studio Code.

1. To make the JSON easier to read, in Visual Studio Code, right-click anywhere in the code and then select **Format document**.

Generally, the resulting `.heapsnapshot` file is different every time you record and export a heap snapshot. Heap snapshots are dynamically generated, based on the content of the web application that's currently being inspected in DevTools.


<!-- ====================================================================== -->
## Overview of the `.heapsnapshot` file format

The memory used by a web application is organized as a graph by V8, which is the JavaScript engine used by Microsoft Edge. A graph is a data type that is composed of _nodes_ (points on the graph) and _edges_ (links between the points).

The data in the `.heapsnapshot` file represents the web app's memory that graph efficiently, and makes it easier to transfer groups of data between the browser process and DevTools. The `.heapsnapshot` file contains a flattened representation of the relations between nodes and edges, as a JSON object that contains arrays of numbers and strings. The file has a `.heapsnapshot` file name extension, and contains JSON-formatted data.

The data has two main parts:

* The metadata, which contains all of the information you need to parse the arrays of data that represent the memory graph.
* The arrays data, which contain the actual data that's needed to re-create the graph.

#### Updating this data format documentation

The format of the `.heapsnapshot` file, as documented below, may change as V8 and DevTools evolve. If you find a discrepancy in the documentation, please provide feedback in the [MicrosoftDocs/edge-developer repo](https://github.com/MicrosoftDocs/edge-developer/issues).


<!-- ====================================================================== -->
## Schema of the `.heapsnapshot` data

#### Top-level structure

The `.heapsnapshot` JSON data contains a root object that has the following properties:

```json
{
    "snapshot": {},
    "nodes": [],
    "edges": [],
    "trace_function_infos": [],
    "trace_tree": [],
    "samples": [],
    "locations": [],
    "strings": []
}
```

| Property | Description | Format |
| --- | --- | --- |
| `snapshot` | Contains all of the information about the format of the memory graph data and its size. | `Object` |
| `nodes` | All the information that's needed to re-create the nodes of the graph. To parse this data, use `snapshot.meta.node_types` and `snapshot.meta.node_fields`. | `Array` |
| `edges` | All the information that's needed to re-create the edges of the graph. To parse this data, use `snapshot.meta.edge_types` and `snapshot.meta.edge_fields`. | `Array` |
| `trace_function_infos` | _Not documented yet_ | `Array` |
| `trace_tree` | _Not documented yet_ | `Array` |
| `samples` | _Not documented yet_ | `Array` |
| `locations` | Contains information about the script location of nodes. To parse this data, use `snapshot.meta.location_fields` with the `nodes` array. | `Array` |
| `strings` | An array of all of the strings that are held in memory. These can be any strings, such as user-defined strings or code. | `Array` |

#### Snapshot

```json
{
    "snapshot": {     
        "meta": {},
        "node_count": 123,
        "edge_count": 456,
        "trace_function_count": 0
    }
    ...
}
```

| Property | Description | Format |
| --- | --- | --- |
| `meta` | Properties that contain information about the shape and size of every object that's contained in the memory graph data. | `Object` |
| `node_count` | The total number of nodes in the memory graph. | `Number` |
| `edge_count` | The total number of edges in the memory graph. | `Number` |
| `trace_function_count` | The total number of trace functions in the memory graph. | `Number` |

#### Snapshot metadata

```json
{
    "snapshot": {
        "meta": {
            "node_fields": [],
            "node_types": [],
            "edge_fields": [],
            "edge_types": []
        }
    }
    ...
}
```

| Property | Description | Format |
| --- | --- | --- |
| `node_fields` | The list of all the properties that are required to re-create a node. | `Array` |
| `node_types` | The types of all the properties that are required to re-create a node. The number of types is the same as the number of properties defined in `node_fields`. | `Array` |
| `edge_fields` | The list of all the properties that are required to re-create an edge. | `Array` |
| `edge_types` | The types of all the properties that are required to re-create an edge. The number of types is the same the number of properties in `edge_fields`. | `Array` |

The following is an example of a metadata object:

```json
{
    "snapshot": {
        "meta": {
            "node_fields": [
                "type",
                "name",
                "id",
                "self_size",
                "edge_count",
                "trace_node_id",
                "detachedness"
            ],
            "node_types": [
                [
                    "hidden",
                    "array",
                    "string",
                    "object",
                    "code",
                    "closure",
                    "regexp",
                    "number",
                    "native",
                    "synthetic",
                    "concatenated string",
                    "sliced string",
                    "symbol",
                    "bigint",
                    "object shape"
                ],
                "string",
                "number",
                "number",
                "number",
                "number",
                "number"
            ],
            "edge_fields": [
                "type",
                "name_or_index",
                "to_node"
            ],
            "edge_types": [
                [
                    "context",
                    "element",
                    "property",
                    "internal",
                    "hidden",
                    "shortcut",
                    "weak"
                ],
                "string_or_number",
                "node"
            ]
        }
    }
}
```

#### Nodes

The `nodes` array, which is at the top level of the `.heapsnapshot` data, contains all of the information that's needed to re-create the nodes of the memory graph.

To parse this array, the following information is needed:

* `snapshot.node_count`, to know how many nodes there are.
* `snapshot.meta.node_fields`, to know how many fields each node has.

Each node in the array is represented by a series of `snapshot.meta.node_fields.length` numbers. So the total number of elements in the `nodes` array is `snapshot.node_count` multiplied by `snapshot.meta.node_fields.length`.

To re-create a node, read the numbers from the `nodes` array by groups of size `snapshot.meta.node_fields.length`.

The following code snippet shows the `node_fields` metadata and the data for the first two nodes in the graph:

```json
{
    "snapshot": {
        "meta": {
            "node_fields": [
                "type",
                "name",
                "id",
                "self_size",
                "edge_count",
                "trace_node_id",
                "detachedness"
            ]
            ...
        }
        ...
    },
    "nodes": [
        9,1,1,0,10,0,0,
        2,1,79,12,1,0,0,
        ...
    ]
    ...
}
```

| Index in node group | Name | Description |
| --- | --- | --- |
| `0` | `type` | The type of node. See [Node types](#node-types), below. |
| `1` | `name` | The name of the node. This is a number that's the index in the top-level `strings` array. To find the actual name, use the index number to look up the string in the top-level `strings` array. |
| `2` | `id` | The node's unique ID. |
| `3` | `self_size` | The node's size in bytes. |
| `4` | `edge_count` | The number of edges connected to this node. |
| `5` | `trace_node_id` | The ID of the trace node <!--todo: more detail --> |
| `6` | `detachedness` | Whether this node can be reached from the `window` global object. `0` means the node is not detached; the node can be reached from the `window` global object. `1` means the node is detached; the node can't be reached from the `window` global object. |

#### Node types

The first number in the group of numbers for a node in the `nodes` array corresponds to its type. This number is an index that can be used to lookup the type name in the `snapshot.meta.node_types[0]` array.

| Node type | Description |
| --- | --- |
| Hidden | A V8 internal element that doesn't correspond directly to a user-controllable JavaScript object. In DevTools, these all show up under the category name **(system)**. Even though these objects are internal, they can be an important part of retainer paths. |
| Object | Any user-defined object, such as `{ x: 2 }` or `new Foo(4)`. Contexts, which show up in DevTools as **system / Context**, hold variables that had to be allocated on the heap because they're used by a nested function. |
| Native | Things that are allocated by the Blink rendering engine, rather than by V8. These are mostly DOM items such as `HTMLDivElement` or `CSSStyleRule`. |
| Concatenated string | The result of concatenating two strings with the `+` operator. Rather than making a new string that contains a copy of all the data from the two source strings, V8 creates a `ConsString` object that contains pointers to the two source strings. From a JavaScript perspective, it acts just like any other string, but from a memory profiling perspective, it is different. |
| Sliced string | The result of a substring operation, such as using `String.prototype.substr` or `String.prototype.substring`. V8 avoids copying string data by instead creating a `SlicedString`, which points to the original string and specifies the start index and length. From a JavaScript perspective, a sliced string acts like any other string, but from a memory profiling perspective, it is different. |
| Array | Various internal lists, which are displayed in DevTools with the category name **(array)**. Like Hidden, this category groups together a variety of things. Many of the objects here are named **(object properties)** or **(object elements)**, indicating that they contain the string-keyed or numeric-keyed properties of a JavaScript object. |
| Code | Things that grow proportionally to the amount of script, and/or the number of times that functions run. |
| Synthetic | Synthetic nodes don't correspond to anything actually allocated in memory. These are used to distinguish the different kinds of garbage-collection (GC) roots. |

#### Edges

Similar to the `nodes` array, the `edges` top-level array contains all of the elements that are needed to re-create the edges of the memory graph.

Also similar to nodes, the total number of edges can be calculated by multiplying `snapshot.edge_count` by `snapshot.meta.edge_fields.length`. Edges are also stored as a sequence of numbers, which you will need to iterate on by groups of size `snapshot.meta.edge_fields.length`.

However, to read the `edges` array correctly, you first need to read the `nodes` array, because each node knows how many edges it has. 

To re-create an edge, you need three pieces of information:

* The edge type.
* The edge name or index.
* The node that the edge is connected to.

For example, if you read the first node in the `nodes` array and its `edge_count` property is set to 4, then the first four groups of `snapshot.meta.edge_fields.length` numbers in the `edges` array correspond to the four edges of this node.

| Index in edge group | Name | Description |
| --- | --- | --- |
| `0` | `type` | The type of edge. See [Edge types](#edge-types) to find out what are the possible types. |
| `1` | `name_or_index` | This can be a number or a string. If it's a number, it corresponds to the index in the top-level `strings` array, where the name of the edge can be found. |
| `2` | `to_node` | The index within the `nodes` array that this edge is connected to. |

#### Edge types

The first number in the group of numbers for an edge in the `edges` array corresponds to its type. This number is an index that can be used to lookup the type name in the `snapshot.meta.edge_types[0]` array.

| Edge type | Description |
| --- | --- |
| Internal | Edges that don't correspond to JavaScript-visible names, but are still important. As an example, Function instances have a "context" representing the state of variables that were in scope where the function was defined. There is no way for JavaScript code to directly read the "context" of a function, but these edges are needed when investigating retainers. |
| Weak | Weak edges don't keep the node they are connected to alive, and thus are omitted from the Retainers view. Any object with only weak edges pointing to it can be discarded by the garbage collection (GC). |
| Hidden | Similar to Internal, except these edges don't have unique names, and instead are numbered in increasing order. |
| Shortcut | An easier-to-read representation of some other path. This type is rarely used. For example, if you use `Function.prototype.bind` to create a bound function with some bound arguments, V8 creates a `JSBoundFunction`, which points to a `FixedArray` (an internal type), which points to each bound argument. When producing a snapshot, V8 adds a shortcut edge from the bound function directly to each bound argument, bypassing the `FixedArray`. |
| Element | Object properties where the key is a number. |

#### locations

The `locations` array, which is at the top level of the `.heapsnapshot` data, contains information about where some of the nodes in the snapshot were created. This array consists of a series of numbers meant to be read by groups of size `snapshot.meta.location_fields.length`. Therefore, we would go to `snapshot.meta.location_fields` to know how many fields each location in the `locations` array has, and what those fields are. For example, if `location_fields` contains 4 items, then the `locations` array should be read by groups of 4.

`snapshot.meta.location_fields` contains the information for each location:

| Index in `location_fields` | Name | Description |
| --- | --- | --- |
| `0` | `object_index` | The index of the node in the `snapshot.nodes` array that's associated with this location. |
| `1` | `script_id` | The ID of the script that creates the associated node. |
| `2` | `line` | The line number where the node was created, within the script that created the node. |
| `3` | `column` | The column number where the node was created, within the script that created the node. |

The following code example shows how to link the `snapshot.locations` array to the `snapshot.nodes` array:

```json
{
    "snapshot": {
        "meta": {
            "location_fields": [
                "object_index",
                "script_id",
                "line",
                "column"
            ]
            ...
        }
        ...
    },
    "nodes": [
        9,1,1,0,10,0,0,
        2,1,79,12,1,0,0,
        ...
    ],
    "locations":[
        7,9,0,0,
        113792,3,25,21,
        ...
    ],
    ...
}
```

The first location in the `locations` array is `7,9,0,0,`. This location is associated with the node info group that starts at index 7 in the `nodes` array. Therefore, the node contains the following key/value pairs:

```
"type": 2,
"name": 1,
"id": 79,
"self_size": 12,
"edge_count": 1,
"trace_node_id": 0,
"detachedness": 0,
"script_id": 9,
"line" 0,
"column": 0,
```

<!-- ====================================================================== -->
## See also

To learn more about the `.heapsnapshot` file format, see the code that generates the file, which is the `HeapSnapshotGenerator` class in `heap-snapshot-generator.h`.
*  [HeapSnapshot class (line 142)](https://chromium.googlesource.com/external/v8/+/master/src/heap-snapshot-generator.h#142)
*  [HeapSnapshotGenerator class (line 522)](https://chromium.googlesource.com/external/v8/+/master/src/heap-snapshot-generator.h#522)
