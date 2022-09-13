---
title: Heap Snapshot Schema
description: Use the Detached Elements tool in the Microsoft Edge DevTools to find and fix DOM memory leaks.
author: MSEdgeTeam
ms.author: joselea
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 9/13/2022
---
# Heap Snapshot Schema

_In this document we will explain the schema of a `*.heapsnapshot` file which you can take and export using DevTools. This is helpful in case you want to create your own analysis tools or visualizations._

The DevTools Memory tool allows you to explore all the objects allocated in memory by taking a heap snapshot. This information is useful for performance investigations because you can find out what objects are consuming the most memory. Read more on [Heap Snapshots](heap-snapshots.md). 

In DevTools the results are shown in the form of a table, in the top there is a list of aggerates that summarizes all the objects by type or class name and in the bottom there is a list of retainers which gets updated every time you elect a single object from the list of aggregates. 

Memory in v8 is a graph made of nodes and edges. The purpose of the `*.heapsnapshot` file is to represent that graph efficiently and to facilitate its transfer in chunks between the browser process and DevTools, so the contents of this file are a flattened representation of those node-edge relations as simple arrays of numbers and strings. The file has a `*.heapsnapshot` extension but its contents are actually just a `JSON`. 

### Taking a heap snapshot:
1. Open Edge
2. Navigate to a website of interest, for example, `https://github.com`.
3. Press `Ctrl`+`Shift`+`I` (Windows, Linux) or `Command`+`Option`+`I` (macOS) to open Devtools.
4. Open the Memory tool.
5. Select heap snaoshot, then click capture.

### Saving the `*.heapsnapshot` file
1. Click on `Save` 
2. Change the file extension to json
3. Open file with VSCode or any other text editor
4. Auto format its contents


All snapshots are dynamically generated based on the content of the web site or application, so the contents of the file will change. The code that generates this file lives here: [HeapSnapshotGenerator](https://chromium.googlesource.com/external/v8/+/master/src/heap-snapshot-generator.h)

As the platform evolves there are bound to be changes in the format of this file, we always try to keep our documentation up to date but if you ever encounter a discrepancy this is your best bet to start your investigation. 

This file has two main parts: **metadata** and **payload**. The metadata contains all the information you need to parse the different arrays of information in the payload and re-create the graph.

### Base hierarchy of the file
```JSON
{
    # This section contains all the metadata
    "snapshot": {     
        "meta": {},
        "node_count": 123,
        "edge_count": 456,
        "trace_function_count": 0
    },

    # These arrays have all the payload
    "nodes": [],
    "edges": [],
    "trace_function_infos": [],
    "trace_tree": [],
    "samples": [],
    "locations": [],
    "strings": []
}
```

Field | Description | Details | 
:- | :- | :-
snapshot | This section contains all the information about the format of the payload | 
meta | Contains several fields with information about the shape and size of every object contained in the payload  
node_count | An integer representing the total of nodes 
edge_count | An integer representing the total of edges. 
trace_function_count | An integer representing the total of trace functions 
nodes | An array with all the information requires to re-create the nodes | To parse this you need `metadata.node_types` and `metadata.node_fields`
edges | An array with all the information required to re-create the edges | To parse this you need `metadata.edge_types` and `metadata.edge_fields`
trace_function_infos | - |
trace_tree | - |
samples | - |
locations| - |
strings | An array with all the strings in memory| Can be user defined strings, code, etc

___

### Snippet of code from `snapshot.meta`

```JSON
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
            ],
        ...
    }
```

`snapshot.meta` fields | Description  
:- | :- 
node_fields | An array describing the number of elements required to form a node and what each element is.
node_types | An array with the same length as node_fields, each entry represents the type of each node_field.
edge_fields | An array describing the number of elements required to form an edge and what each element is.
edge_types | An array with the same length as edge_fields, each entry represents the type of each edge_field. 
trace_function_info_fields | -
trace_node_fields |  -
sample_fields |  -
location_fields |  -

## Nodes
This array contains all the information needed to recreate the nodes of the graph. Based on metadata.node_fields, we know that each node has 7 pieces of information. 

So this array should have `node_count` * `snapshot.metadata.node_fields.length` total elements. To re-construct a node you need to read a chunk of 7 elements from this array.

`node_fields` | Description  
:- | :- 
type | See `node_types[0]` to find out what are the possible types
name | A string 
id | A number 
self_size | Size in bytes
edge_count | Number of edges for this node
trace_node_id | - 
detachedness | Number, 0 or 1 if the object can be reached from the window

`node_types` | Description  
:- | :- 
Hidden | V8 internal elements that doesn't correspond directly to a user-controllable JavaScript object. In DevTools, these all show up under the category name "(system)". Even though these objects are internal, they can be an important part of retainer paths.
Object | Any user-defined `{x:2}` or new `Foo(4)`. Contexts, which show up in DevTools as "system / Context" hold variables that had to be allocated on the heap because they're used by a nested function.
Native | Things allocated by Blink, not by V8. Mostly DOM: HTMLDivElement, CSSStyleRule, etc. 
Concatenated string | The result of concatenating two strings with the "+" operator. Rather than making a new string with a copy of all the data from the two source strings, V8 creates a ConsString object with pointers to the two source strings. From a JS perspective, it acts just like any other string, but from a memory profiling perspective, it is different.
Sliced string | The result of a substring operation, such as using String.prototype.substr or String.prototype.substring. V8 avoids copying string data by instead creating a SlicedString which points to the original string and specifies the start index and length. From a JS perspective, it acts just like any other string, but from a memory profiling perspective, it is different.
Array | Various internal lists, which show up in the devtools with the category name "(array)". Like Hidden, this category clumps together a bunch of unrelated things. Many of the objects here are named "(object properties)" or "(object elements)", indicating that they contain the string-keyed or numeric-keyed properties of a JavaScript object.
Code | Things that grow proportionally to the amount of script, and/or the number of times that functions run..  
Synthetic | Synthetic nodes don't correspond to anything actually allocated in memory. As far as I can tell, these are used only to distinguish the different kinds of GC roots.


## Edges

Similar to the **Nodes** array, edges contains all the individual elements needed to re-construct the edges and we can calculate the number of elements of this array by multiplying `edge_count` * `metadata.edge_fields.length`.

Edges are stored sequentially and to read them properly you need to parse the nodes first, because each node knows how many edges it has. 

To re-construct an edge we need 3 elements of information, and we can use `metadata.edge_types` to understand what each element is. 

For example, if you read the first node and its property edge_count is set to 4, that means that the first 4 triplets of the edges array are the elements needed to from this node to some other nodes, etc.


`edge_fields` | Description  
:- | :- 
type | See `edge_types[0]` to find out what are the possible types
name_or_index | This could be a number or a string. If it’s a number, it indicates the index of the strings array where the name is stored.
to_node | Index in the array of the node that it points to


`edge_types` | Description  
:- | :- 
Internal | Edges that don't correspond to JS-visible names but are still important. As an example, Function instances have a "context" representing the state of variables that were in scope where the function was defined. There is no way for JS code to directly read the "context" of a function, but it's still a very important link when trying to understand retainers.
Weak | Weak edges don't keep the target alive, and thus are omitted from the Retainers view. Any object with only weak edges pointing to it can be discarded by the GC.
Hidden | Just like Internal, except these edges don't have nice names because nobody bothered to write special-case code for them.  They're just numbered in increasing order.
Shortcut | An easier-to-read representation of some other path. This type is used very little. An example is if you use Function.prototype.bind to create a bound function with some bound arguments, V8 creates a JSBoundFunction, which points to a FixedArray (an internal type), which points to each bound argument. When producing a snapshot, V8 adds a shortcut edge from the bound function directly to each bound argument, bypassing the FixedArray.
Element | Object properties where the key is a number.


<!-- ====================================================================== -->
## Sample code
Now that you understand the format of this file you can create your own custom tool to extract data, run an analysis or create a visualization of the memory graph.  You can find sample code under this GitHub repo to get you started. It creates a force directed graph visualization. 

![Open the Detached Elements tool.](images/heap_snapshot_playground.gif)
