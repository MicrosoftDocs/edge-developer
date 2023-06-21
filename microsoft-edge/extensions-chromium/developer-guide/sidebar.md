---
title: Add an extension to the sidebar
description: The sidebar (or side panel) feature of Microsoft Edge extensions enables an extension to display custom UI content in the browser sidebar.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 06/20/2023
---
# Add an extension to the sidebar

The Microsoft Edge Add-ons API provides an API to enable your extension as sidebar extension. You can use this API to convert your extension to sidebar and your extension will have the access to Microsoft Edge Sidebar. You can use this *Sidebar* API by giving permissions in your `manifest.json` file.

With Sidebar API feature for extensions, developers can enhance the browsing experience by enabling users to view additional information alongside the main content of a webpage.

The sidebar refers to a persistent column located on the side of the browser, which coexists with the primary content. By enabling side-by-side browsing, users can reduce the need to constantly switch between tabs, resulting in a more productive browsing experience.

<!-- ------------------------------ -->
## Features of Sidebar API

* Extensions in Sidebar have access to all the Edge Extension APIs  .
* The sidebar remains open while navigating between tabs.
* Extensions in sidebar can be available for specific sites.   

<!-- ------------------------------ -->
#### Terminology

| Term | Definition |
|---|---|
| Sidebar API | Name of feature that can be utilised by the extension developer in their extensions. |
| `sidepanel` | Name of the API and permission to enable any extension as a Sidebar extension, as derived from Chromium. |

![The sidebar for a Microsoft Edge extension](./sidebar-images/sidebar-screenshot.png)


<!-- ====================================================================== -->

Use this article to enable the sidebar for your new or existing extension.

For complete details of how to create an extension, see:
* [Create an extension tutorial, part 1](../getting-started/part1-simple-extension.md)
* [Create an extension tutorial, part 2](../getting-started/part2-content-scripts.md)


<!-- ====================================================================== -->
## Origin

As with other extension resources, the sidebar page commits to a trusted extension context on its origin (`extension://<id>`).  The sidebar has the same API access as other trusted extension contexts.

All the existing extensions APIs are available for sidebar extensions, so you can leverage all current capabilities of the extensibility framework in your sidebar-enabled extension.

To add a sidebar to your extension, follow the steps below.


<!-- ====================================================================== -->
## Modify the manifest file

Every extension for Microsoft Edge has a JSON-formatted manifest file, named `manifest.json`. The manifest file is the blueprint of your extension.

<!-- ------------------------------ -->
#### Permissions and supported API

The permission sidePanel should be included in the extension manifest file.

Developers can use the supported API field, side_panel, to set the sidepanel option in their extension. 

`manifest.json`:
```json
{
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


<!-- ====================================================================== -->
## Sidebar API use cases


<!-- ------------------------------ -->
#### Example 1: Default sidebar on every site

A sidebar can be set as the default, to show the same extension throughout all the open browser tabs.  Default values persist across browser sessions.

`manifest.json`:

<!-- todo: GLOBAL: side panel, or sidebar?  if "side panel", need to introduce and define term 'side panel' at top of article contrasted with / related with "sidebar" -->

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
    <title>My Side Panel</title>
  </head>
  <body>
    <h1>Sidebar extension for all sites</h1>
    <p>This sidebar is enabled on all sites</p>
  </body>
</html>
```


<!-- ------------------------------ -->

#### Example 2: Enable an extension for sidebar of a specific site

An extension can use `sidepanel.setOptions()` to enable a sidebar on a specific tab. This can be a particular website a user is using and would want the same extension to open in the sidebar, once this website is opened.

`service-worker.js`:

```js
const BING_ORIGIN = 'https://www.bing.com';

chrome.tabs.onUpdated.addListener(async (tabId, info, tab) => {
  if (!tab.url) return;
  const url = new URL(tab.url);
  // Enables the side panel on bing.com
  if (url.origin === BING_ORIGIN) {
    await chrome.sidePanel.setOptions({
      tabId,
      path: 'sidepanel.html',
      enabled: true
    });
  } else {
    // Disables the side panel on all other sites
    await chrome.sidePanel.setOptions({
      tabId,
      enabled: false
    });
  }
});
```

When a user  switches to a tab or site where the sidebar is not enabled, the sidebar will be hidden. It will show again when the user switches to a tab where it was previously open.

<!-- ------------------------------ -->

#### Example 3: Enabling the extension’s shortcut icon to open the sidebar

By declaring the `action` key in the manifest, you can allow users to open the side panel when they click on the action toolbar icon with `sidePanel.setPanelBehavior()`.

`manifest.json`:

```json
{
  "name": "My sidebar extension",
  ...
   "action": {
    "default_title": "Click to open panel"
  },
  ...
}
```

`service-worker.js`:

```js
const BING_ORIGIN = 'https://www.bing.com';

// Allows users to open the side panel by clicking on the action toolbar icon
chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));
...
```
<!-- ------------------------------ -->

#### Example 4: Switching to a different sidebar

An extension can enable different sidebar for a specific tab.  

The following example sets a sidebar with welcome message on runtime.OnInstalled(). When the user navigates to a different tab, the sidebar is replaced with the browser level sidebar.

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
<!-- ------------------------------ -->

<!-- ====================================================================== -->
## User experience for extensions in Edge sidebar 


<!-- ------------------------------ -->
#### Identifying   Extensions with Sidebar support

* The sidebar icon is displayed next to the extension name in the hub in the toolbar:

![Sidebar dialog](./sidebar-images/sidebar-dialog.png)
<!-- todo: put real content in png -->

* On the Microsoft Edge Add-Ons store page, there's a dialog on the extension product page, highlighting the sidebar feature.
<!-- todo: show that "dialog", is it actually a dialog? -->


<!-- ------------------------------ -->
#### Opening Extensions in the Sidebar

To open an extension in the sidebar, the user can do either of the following:

* Click the sidebar icon in the hub in the toolbar.

* Right-click the extension's shortcut in the toolbar.


<!-- ====================================================================== -->
## Properties for extensions in Sidebar   

#### GetPanelOptions

| Property | Description |
|---|---|
| `tabId`  (number optional) | If specified, the side panel options for the given tab will be returned. Otherwise, returns the default side panel options (used for any tab that doesn't have specific settings).|

<!-- ------------------------------ -->
#### Panel behavior

| Property | Description |
|---|---|
| `openPanelOnActionClick` (boolean optional) | Whether clicking the extension's icon toggles showing the extension's entry in the sidebar.  The default value is `false`. |


<!-- ------------------------------ -->
#### Panel options

| Property | Description |
|---|---|
| `enabled` (boolean optional) | Whether the sidepanel should be enabled or not. This is optional |
| `tabId` (number optional)| If specified, the sidebar options only apply to the tab that has this ID.  If not specified, these options set the default behavior enabled.  Whether the sidebar is enabled.  The default value is `true`.<!--todo: delete "Whether the sidebar is enabled.  The default value is `true`."? --> |
| `path` (string optional) | The path to the side panel HTML file to use.  This needs to be a local resource within the extension package. |

<!--todo: row 1 col 2: maybe delete "Whether the sidebar is enabled.  The default value is `true`." -->


<!-- ------------------------------ -->
#### SidePanel
<!-- todo: improve heading -->

| Property | Description |
|---|---|
| `default_path` ('string') | The developer-specified path for sidebar display.|

### Methods

#### getOptions

**Function**: Returns the active panel configuration.

**Parameters**: **options** GetPanelOptions

**API**

```js
chrome.sidePanel.getOptions(
  options: GetPanelOptions,
  callback?: function,
)
```
Promise

**callback**:{} function optional
The `callback` parameter looks like:

```js
(options: PanelOptions) => void
```

**options**: `PanelOptions`

**RETURNS**: Promise<`PanelOptions`>

Promises are supported in Manifest V3 and later, but callbacks are provided for backward compatibility. You cannot use both on the same function call. The promise resolves with the same type that is passed to the callback.


#### getPanelBehavior

**Function**: Returns the extension's current side panel behavior.

**Parameters**: callback
{} function optional


**API**

```js
chrome.sidePanel.getPanelBehavior(
  callback?: function,
)
```
Promise Pending

**callback**: {} function optional

The `callback` parameter looks like:

(behavior: PanelBehavior) => void

**behavior**: PanelBehavior

**RETURNS**: Promise<`PanelBehaviour`>

Promises are supported in Manifest V3 and later, but callbacks are provided for backward compatibility. You cannot use both on the same function call. The promise resolves with the same type that is passed to the callback.


#### setOptions
**Function**: Configures the side panel.

**Parameters**: **options** PanelOptions


**API**

```js
chrome.sidePanel.setOptions(
  options: PanelOptions,
  callback?: function,
)
```
Promise

**callback**: {} function optional

The `callback` parameter looks like:

() => void

**RETURNS**: Promise<`Void`>

Promises are supported in Manifest V3 and later, but callbacks are provided for backward compatibility. You cannot use both on the same function call. The promise resolves with the same type that is passed to the callback.


#### setPanelBehavior

**Function**: Configures the extension's side panel behavior. This is an upsert operation.

**Parameters**: **behavior** PanelBehavior


**API**

```js
chrome.sidePanel.setPanelBehavior(
  behavior: PanelBehavior,
  callback?: function,
)
```
Promise Pending

**callback**: {} function optional

The `callback` parameter looks like:

() => void

**RETURNS**: Promise<`Void`>

Promises are supported in Manifest V3 and later, but callbacks are provided for backward compatibility. You cannot use both on the same function call. The promise resolves with the same type that is passed to the callback.


<!-- ====================================================================== -->
## See also

* [Supported APIs for Microsoft Edge extensions](../developer-guide/api-support.md)
* [Declare API permissions in extension manifests](../developer-guide/declare-permissions.md)
* [Manifest file format for extensions](../getting-started/manifest-format.md)
