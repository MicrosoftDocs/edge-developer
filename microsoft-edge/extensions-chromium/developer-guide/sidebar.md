---
title: Add an extension to the sidebar
description: The sidebar (or side panel) feature of Microsoft Edge extensions enables an extension to display custom UI content in the browser sidebar.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 06/22/2023
---
# Add an extension to the sidebar

<!-- compare https://developer.chrome.com/docs/extensions/reference/sidePanel/ -->

As a Microsoft Edge extension developer, use this article to enable the sidebar for your new or existing Microsoft Edge extension.

The Microsoft Edge Add-ons API provides an API to enable your extension as sidebar extension. You can use this API to convert your extension to sidebar, and your extension will have the access to Microsoft Edge Sidebar.  You can use this *Sidebar* API by giving permissions in your `manifest.json` file.

By using the Sidebar API feature for extensions, you can enhance the browsing experience by enabling users to view additional information alongside the main content of a webpage.

The sidebar refers to a persistent column located on the side of the browser, which coexists with the primary content.  By enabling side-by-side browsing, users can reduce the need to constantly switch between tabs, resulting in a more productive browsing experience.


<!-- ====================================================================== -->
## Features of the Sidebar API

* An extension in the sidebar has access to all of the [Supported APIs for Microsoft Edge extensions](./api-support.md).

* The sidebar remains open while navigating between tabs.

* An extension in the sidebar can be made available for specific sites.


<!-- ------------------------------ -->
#### Terminology

| Term | Definition |
|---|---|
| Sidebar API | Name of the feature that you can use in your Microsoft Edge extensions. |
| `sidePanel` <!--or side panel--> | Name of the API and permission to enable any extension as a sidebar extension, as derived from the Chromium browser engine. |
| Sidebar extension | A Microsoft Edge extension that's designed to be opened in the sidebar. |

![The sidebar for a Microsoft Edge extension](./sidebar-images/sidebar-screenshot.png)


For details on how to create an extension, see:
* [Create an extension tutorial, part 1](../getting-started/part1-simple-extension.md)
* [Create an extension tutorial, part 2](../getting-started/part2-content-scripts.md)

These tutorials don't demonstrate the sidebar, but are general extensions examples.


<!-- ====================================================================== -->
## Origin

As with other extension resources, the sidebar page commits to a trusted extension context on its origin (`extension://<id>`).  The sidebar has the same API access as other trusted extension contexts.

All the existing extensions APIs are available for sidebar extensions, so you can leverage all current capabilities of the extensibility framework in your sidebar-enabled extension.

To add a sidebar to your extension, follow the steps below.


<!-- ====================================================================== -->
## Add the sidePanel permission in the extension's manifest file

<!-- compare https://developer.chrome.com/docs/extensions/reference/sidePanel/#manifest -->

Include the `sidePanel` permission in the extension's manifest file:

`manifest.json`:

```json
{
  ...
  "name": "My sidebar extension",
  ...
  "side_panel": {
    "default_path": "sidebar.html"
  },
  "permissions": [
    "sidePanel"
  ]
   ...
}
```

Every extension for Microsoft Edge has a JSON-formatted manifest file, named `manifest.json`.  The manifest file is the blueprint of your extension.

See also:
* [Manifest file format for extensions](../getting-started/manifest-format.md)


<!-- ====================================================================== -->
## Use cases for the Sidebar API

<!-- compare https://developer.chrome.com/docs/extensions/reference/sidePanel/#use-cases -->

The following sections demonstrate some common use cases for the Side Panel API.



<!-- ------------------------------ -->
#### Display the same sidebar on every site

<!-- compare https://developer.chrome.com/docs/extensions/reference/sidePanel/#every-site -->

A sidebar can be set as the default, to show the same extension throughout all the open browser tabs.  Default values persist across browser sessions.

`manifest.json`:

```json
{
  "name": "My sidebar extension",
  ...
  "side_panel": {
    "default_path": "sidebar.html"
  }
  ...
}
```

`sidebar.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Sidebar</title>
  </head>
  <body>
    <h1>Sidebar extension for all sites</h1>
    <p>This sidebar is enabled on all sites</p>
  </body>
</html>
```


<!-- ------------------------------ -->
#### Enable a sidebar for a specific site only

<!-- compare https://developer.chrome.com/docs/extensions/reference/sidePanel/#by-site -->

An extension can use [sidepanel.setOptions()](https://developer.chrome.com/docs/extensions/reference/sidePanel/#method-setOptions) to enable a sidebar on a specific tab.
This can be a particular website a user is using and would want the same extension to open in the sidebar, once this website is opened.

This example uses [chrome.tabs.onUpdated()](https://developer.chrome.com/docs/extensions/reference/tabs/#event-onUpdated) to listen for any updates made to the tab.  This example checks whether the URL is `www.bing.com` and conditionally enables the sidebar.  Otherwise, this example disables the sidebar.

`service-worker.js`:

```js
const BING_ORIGIN = 'https://www.bing.com';

chrome.tabs.onUpdated.addListener(async (tabId, info, tab) => {
  if (!tab.url) return;
  const url = new URL(tab.url);
  // Enables the sidebar when at bing.com
  if (url.origin === BING_ORIGIN) {
    await chrome.sidePanel.setOptions({
      tabId,
      path: 'sidepanel.html',
      enabled: true
    });
  } else {
    // Disables the sidebar when at other sites
    await chrome.sidePanel.setOptions({
      tabId,
      enabled: false
    });
  }
});
```

When a user switches to a tab or site for which the sidebar is not enabled, the sidebar is hidden.

For a complete example, see the [Site-specific side panel example](https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/functional-samples/cookbook.sidepanel-site-specific) sample.


<!-- ------------------------------ -->
#### Enable the extension's shortcut icon to open the sidebar

<!-- compare https://developer.chrome.com/docs/extensions/reference/sidePanel/#open-action-icon -->

To allow users to open the sidebar by clicking the action toolbar icon, use [sidePanel.setPanelBehavior()](https://developer.chrome.com/docs/extensions/reference/sidePanel/#method-setPanelBehavior).  First, declare the `"action"` key in the manifest:

`manifest.json`:

```json
{
  "name": "My sidebar extension",
  ...
   "action": {
    "default_title": "Click to open sidebar"
  },
  ...
}
```

Then, add the following code to the code listing that's in [Enable a sidebar for a specific site only](#enable-a-sidebar-for-a-specific-site-only) above:

`service-worker.js`:

```js
const BING_ORIGIN = 'https://www.bing.com';

// Allow users to open the sidebar by clicking on the action toolbar icon
chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));
...
```


<!-- ------------------------------ -->
#### Switch to a different sidebar

<!-- compare https://developer.chrome.com/docs/extensions/reference/sidePanel/#multi-panels -->

An extension can use [sidepanel.getOptions()](https://developer.chrome.com/docs/extensions/reference/sidePanel/#method-getOptions) to retrieve the current sidebar, and then enable a different sidebar for a specific tab.

This example sets a sidebar containing a welcome message on [runtime.onInstalled()](https://developer.chrome.com/docs/extensions/reference/runtime/#event-onInstalled).  When the user navigates to a different tab, the sidebar is replaced with the browser-level sidebar.

`service-worker.js`:

```js
const welcomePage = 'sidebar/welcome-sp.html';
const mainPage = 'sidebar/main-sp.html';

chrome.runtime.onInstalled.addListener(() => {
  chrome.sidePanel.setOptions({ path: welcomePage });
});

chrome.tabs.onActivated.addListener(async ({ tabId }) => {
  const { path } = await chrome.sidePanel.getOptions({ tabId });
  if (path === welcomePage) {
    chrome.sidePanel.setOptions({ path: mainPage });
  }
});
```


<!-- ====================================================================== -->
## The sidebar user experience (UX)

<!-- compare https://developer.chrome.com/docs/extensions/reference/sidePanel/#user-experience -->

Extensions in the Microsoft Edge sidebar have these user experience (UX) features.


<!-- ------------------------------ -->
#### How extensions that have sidebar support are indicated

* The sidebar icon is displayed next to the extension name in the hub in the toolbar:

![Sidebar dialog](./sidebar-images/sidebar-dialog.png)


###### Using the action toolbar icon

Users can open the sidebar by clicking the extension shortcut in the toolbar, if it's enabled.

See [Enable the extension's shortcut icon to open the sidebar](#enable-the-extensions-shortcut-icon-to-open-the-sidebar), above.


<!-- todo: un-comment & revise, after implemented:
###### Using a keyboard shortcut

Users can open the sidebar by pressing a keyboard shortcut, if the [action command](https://developer.chrome.com/docs/extensions/reference/commands/#action-commands) and the [action icon](https://developer.chrome.com/docs/extensions/reference/sidePanel/#open-action-icon) are enabled.
-->


<!-- ------------------------------ -->
#### Opening the sidebar

<!-- compare https://developer.chrome.com/docs/extensions/reference/sidePanel/#open -->

To open a sidebar extension, the user can do either of the following:

* Click the sidebar icon in the hub in the toolbar.

* Right-click the extension's shortcut in the toolbar.

<!-- true but maybe not needed to point out:
* On the Microsoft Edge Add-Ons store page, there's a information message on the extension product page, highlighting the sidebar feature. -->


<!-- ====================================================================== -->
## Extension samples

<!-- compare https://developer.chrome.com/docs/extensions/reference/sidePanel/#examples -->

For <!--more--> Sidebar API extensions demos, explore any of the following extensions at Chrome docs:

* [Site-specific side panel example](https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/functional-samples/cookbook.sidepanel-site-specific)
* [Multiple side panels example](https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/functional-samples/cookbook.sidepanel-multiple)
* [Global side panel example](https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/functional-samples/cookbook.sidepanel-global)
* [Dictionary side panel example](https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/functional-samples/sample.sidepanel-dictionary)


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

The default is a blank page with no UI.


###### tabId

Type: `number`, optional

If a `tabID` is specified, the sidebar options (`enabled`, `path`, and `tabId`) only apply to the tab that has this ID.  If a `tabID` is not specified, these options set the default behavior, which is used for any tab that doesn't have specific settings defined.

<!-- todo: what sentence do we want that's equivalent to this sentence?  from https://developer.chrome.com/docs/extensions/reference/sidePanel/#type-PanelOptions --
If the same `path` is set for this `tabId` and the default `tabId`, then the panel for this `tabId` will be a different instance than the panel for the default `tabId`.

our draft sentence:

... the same instance ...
-->


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

* Promise - This method an return its result via a Promise, in Manifest V3 or later.


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

* Promise - This method an return its result via a Promise, in Manifest V3 or later.
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

* Promise - This method an return its result via a Promise, in Manifest V3 or later.


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

* Promise - This method an return its result via a Promise, in Manifest V3 or later.
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
