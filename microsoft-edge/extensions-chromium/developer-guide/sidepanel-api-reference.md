---
title: Sidebar (sidePanel) API Reference for Microsoft Edge
description: API for the sidebar (or side panel) feature of Microsoft Edge extensions.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 06/26/2023
---
# Sidebar (sidePanel) API Reference for Microsoft Edge

This is the API Reference for the Microsoft Edge version of the `chrome.sidePanel` API, which differs slightly.

**Contents:**

* [Types for parameters of sidebar methods](#types-for-parameters-of-sidebar-methods)
   * [GetPanelOptions](#getpaneloptions)
   * [PanelBehavior](#panelbehavior)
   * [PanelOptions](#paneloptions)
   * [SidePanel](#sidepanel)
* [Methods for sidebar extensions](#methods-for-sidebar-extensions)
   * [getOptions](#getoptions)
   * [getPanelBehavior](#getpanelbehavior)
   * [setOptions](#setoptions)
   * [setPanelBehavior](#setpanelbehavior)
* [See also](#see-also)


<!-- ====================================================================== -->
## Types for parameters of sidebar methods

<!-- compare https://developer.chrome.com/docs/extensions/reference/sidePanel/#type (empty heading) -->

The sidebar methods take parameters that are of the following types, or return a value that's one of the following types.

* [GetPanelOptions](#getpaneloptions)
* [PanelBehavior](#panelbehavior)
* [PanelOptions](#paneloptions)
* [SidePanel](#sidepanel)


<!-- ====================================================================== -->
#### GetPanelOptions

<!-- compare https://developer.chrome.com/docs/extensions/reference/sidePanel/#type-GetPanelOptions -->

Get panel options, including `tabId`.

<!-- ---------- -->
**PROPERTIES**

<!-- ---------- -->
###### tabId

Type: `number`, optional

If `tabId` is specified, the sidebar options for the given tab are returned (by the method that returns this type).  If `tabId` isn't specified, returns the default sidebar options (used for any tab that doesn't have specified settings).


<!-- ====================================================================== -->
#### PanelBehavior

<!-- compare https://developer.chrome.com/docs/extensions/reference/sidePanel/#type-PanelBehavior -->

Panel behavior, including `openPanelOnActionClick`.

<!-- ---------- -->
**PROPERTIES**

###### openPanelOnActionClick

Whether clicking the extension's icon toggles showing the extension's entry in the sidebar.  The default is `false`.

Type: `boolean`, optional


<!-- ====================================================================== -->
#### PanelOptions

<!-- compare https://developer.chrome.com/docs/extensions/reference/sidePanel/#type-PanelOptions -->

Panel options, including `enabled`, `path`, and `tabId`.

<!-- ---------- -->
**PROPERTIES**

###### enabled

Whether the sidebar is enabled.  The default is `true`.

Type: `boolean`, optional


###### path

The path to the sidebar HTML file to use.  This must be a local resource within the extension package.

Type: `string`, optional

<!-- todo: default is? -->


###### tabId

Type: `number`, optional

If a `tabID` is specified, the sidebar options (`enabled`, `path`, and `tabId`) only apply to the tab that has this ID.  If a `tabID` is not specified, these options set the default behavior, which is used for any tab that doesn't have specific settings defined.

If the same `path` is set for this `tabId` and the default `tabId`, then the panel for this `tabId` will be the same instance as the panel for the default `tabId`.
<!-- version of sentence at https://developer.chrome.com/docs/extensions/reference/sidePanel/#type-PanelOptions --
If the same `path` is set for this `tabId` and the default `tabId`, then the panel for this `tabId` will be a different instance than the panel for the default `tabId`. -->


<!-- ====================================================================== -->
#### SidePanel

<!-- compare https://developer.chrome.com/docs/extensions/reference/sidePanel/#type-SidePanel -->

Sidebar properties, including `default_path`.

<!-- ---------- -->
**PROPERTIES**

<!-- ---------- -->
###### default_path

Type: `string`, required

The developer-specified path for sidebar display.


<!-- ====================================================================== -->
## Methods for sidebar extensions

<!-- compare https://developer.chrome.com/docs/extensions/reference/sidePanel/#method (empty heading) -->

* [getOptions](#getoptions)
* [getPanelBehavior](#getpanelbehavior)
* [setOptions](#setoptions)
* [setPanelBehavior](#setpanelbehavior)


<!-- ====================================================================== -->
#### getOptions

<!-- compare https://developer.chrome.com/docs/extensions/reference/sidePanel/#method-getOptions -->

Returns the active panel configuration.


<!-- ---------- -->
**SYNTAX**

```js
chrome.sidePanel.getOptions(
  options: GetPanelOptions,
  callback?: function,
)
```

* Promise - This method can return its result via a Promise.


<!-- ---------- -->
**PARAMETERS**

<!-- ---------- -->
###### options

Type: [GetPanelOptions](#getpaneloptions)


<!-- ---------- -->
###### callback

Type: {} function, optional

The `callback` parameter looks like:

```js
(options: PanelOptions) => void
```

Parameter type: [PanelOptions](#paneloptions)


<!-- ---------- -->
**RETURNS**

Promise<[PanelOptions](#paneloptions)>

Promises are supported in Manifest V3 and later, but callbacks are provided for backward compatibility.  You cannot use a promise along with a callback on the same function call.  The promise resolves as the same type that's passed to the callback.


<!-- ====================================================================== -->
#### getPanelBehavior

<!-- compare https://developer.chrome.com/docs/extensions/reference/sidePanel/#method-getPanelBehavior -->

Returns the extension's current sidebar behavior.


<!-- ---------- -->
**SYNTAX**

```js
chrome.sidePanel.getPanelBehavior(
  callback?: function,
)
```

* Promise - This method can return its result via a Promise.
* Pending - This method is coming soon and is not yet in a stable release of Microsoft Edge.


<!-- ---------- -->
**PARAMETERS**


###### callback

Type: {} function, optional

The `callback` parameter looks like:

```js
(behavior: PanelBehavior) => void
```

Parameter type: [PanelBehavior](#panelbehavior)


<!-- ---------- -->
**RETURNS**

Promise<[PanelBehavior](#panelbehavior)>

Promises are supported in Manifest V3 and later, but callbacks are provided for backward compatibility.  You cannot use a promise together with a callback on the same function call.  The promise resolves as the same type that's passed to the callback.


<!-- ====================================================================== -->
#### setOptions

<!-- compare https://developer.chrome.com/docs/extensions/reference/sidePanel/#method-setOptions -->

Configures the sidebar.


<!-- ---------- -->
**SYNTAX**

```js
chrome.sidePanel.setOptions(
  options: PanelOptions,
  callback?: function,
)
```

* Promise - This method can return its result via a Promise.


<!-- ---------- -->
**PARAMETERS**

###### options

Type: [PanelOptions](#paneloptions)


###### callback

Type: {} function, optional

The `callback` parameter looks like:

```js
() => void
```


<!-- ---------- -->
**RETURNS**

Promise<`Void`>

Promises are supported in Manifest V3 and later, but callbacks are provided for backward compatibility. You cannot use both on the same function call. The promise resolves with the same type that is passed to the callback.


<!-- ====================================================================== -->
#### setPanelBehavior

<!-- compare https://developer.chrome.com/docs/extensions/reference/sidePanel/#method-setPanelBehavior -->

Configures the extension's sidebar behavior.  This is an upsert (update or insert) operation.


<!-- ---------- -->
**SYNTAX**

```js
chrome.sidePanel.setPanelBehavior(
  behavior: PanelBehavior,
  callback?: function,
)
```

* Promise - This method can return its result via a Promise.
* Pending - This method is coming soon and is not yet in a stable release of Microsoft Edge.


<!-- ---------- -->
**PARAMETERS**

###### behavior

Type: [PanelBehavior](#panelbehavior)


###### callback

Type: {} function, optional

The `callback` parameter looks like:

```js
() => void
```

<!-- ---------- -->
**RETURNS**

Promise<`Void`>

Promises are supported in Manifest V3 and later, but callbacks are provided for backward compatibility. You cannot use both on the same function call. The promise resolves with the same type that is passed to the callback.


<!-- ====================================================================== -->
## See also

* [Make an extension appear in the sidebar](./sidebar.md)
* [Supported APIs for Microsoft Edge extensions](../developer-guide/api-support.md)
* [Declare API permissions in extension manifests](../developer-guide/declare-permissions.md)
* [Manifest file format for extensions](../getting-started/manifest-format.md)
* [chrome.sidePanel](https://developer.chrome.com/docs/extensions/reference/sidePanel/)


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/extensions/reference/sidePanel/).

[![Creative Commons License](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
