---
description: Host web content in your Windows 10 app with the Microsoft Edge WebView control
title: Microsoft Edge WebView for Windows 10 apps
author: libbymc
ms.author: libbymc
ms.date: 4/3/2018
ms.topic: reference
ms.prod: microsoft-edge
keywords: webview, windows 10 apps, uwp, edge
---

# Microsoft Edge WebView for Windows 10 apps

The Microsoft Edge WebView control enables you to host web content in your Windows 10 app. You can use it as a [XAML element](https://docs.microsoft.com/en-us/uwp/api/Windows.UI.Xaml.Controls.WebView) (for C# and C++ apps) or an HTML element (`<x-ms-webview>`)/DOM object (`MSHTMLWebViewElement`) for JavaScript-based Windows 10 apps, as described here.

| | |
|-|-|
| [**Events**](#events) | [departingFocus](#departingfocus), [MSWebViewContainsFullScreenElementChanged](#mswebviewcontainsfullscreenelementchanged), [MSWebViewContentLoading](#mswebviewcontentloading), [MSWebViewDOMContentLoaded](#mswebviewdomcontentloaded), [MSWebViewFrameContentLoading](#mswebviewframecontentloading), [MSWebViewFrameDOMContentLoaded](#mswebviewframedomcontentloaded), [MSWebViewFrameNavigationCompleted](#mswebviewframenavigationcompleted), [MSWebViewFrameNavigationStarting](#mswebviewframenavigationstarting), [MSWebViewLongRunningScriptDetected](#mswebviewlongrunningscriptdetected), [MSWebViewNavigationCompleted](#mswebviewnavigationcompleted), [MSWebViewNavigationStarting](#mswebviewnavigationstarting), [MSWebViewNewWindowRequested](#mswebviewnewwindowrequested), [MSWebViewPermissionRequested](#mswebviewpermissionrequested), [MSWebViewProcessExited](#mswebviewprocessexited), [MSWebViewWebResourceRequested](#mswebviewwebresourcerequested), [MSWebViewScriptNotify](#mswebviewscriptnotify), [MSWebViewUnsafeContentWarningDisplaying](#mswebviewunsafecontentwarningdisplaying), [MSWebViewUnsupportedUriSchemeIdentified](#mswebviewunsupportedurischemeidentified), [MSWebViewUnviewableContentIdentified](#mswebviewunviewablecontentidentified)
| [**Methods**](#methods) | [addWebAllowedObject](#addweballowedobject), [buildlocalStreamUri](#buildlocalstreamuri), [capturePreviewToBlobAsync](#capturepreviewtoblobasync), [captureSelectedContentToDataPackageAsync](#captureselectedcontenttodatapackageasync), [invokeScriptAsync](#invokescriptasync), [getDeferredPermissionRequests](#getdeferredpermissionrequests), [getDeferredPermissionRequestById](#getdeferredpermissionrequestbyid), [goBack](#goback), [goForward](#goforward), [navigate](#navigate), [navigateFocus](#navigatefocus), [navigateTolocalStreamUri](#navigatetolocalstreamuri), [navigateToString](#navigatetostring), [navigateWithHttpRequestMessage](#navigatewithhttprequestmessage), [refresh](#refresh), [stop](#stop) |
| [**Properties**](#properties) | [canGoBack](#cangoback), [canGoForward](#cangoforward), [containsFullScreenElement](#containsfullscreenelement), [documentTitle](#documenttitle), [height](#height), [process](#process), [settings](#settings), [src](#src), [width](#width) |

## Syntax

```js
var webview = document.createElement("x-ms-webview"); 
```
## Remarks
When a Windows app using JavaScript is printed, the `<x-ms-webview>` tags are transformed into `<iframe>` tags before printing. Besides the normal difference between displaying on screen and rendered for print, CSS styles applied to `<iframe>` elements are then applicable to the `<iframe>` transformed from `<x-ms-webview>`. 

For more information, see the [HTML WebView control sample](http://go.microsoft.com/fwlink/p/?linkid=309825).

### AppCache storage limitations
Applications using JavaScript support of the Application Cache API (or AppCache), as defined in the [HTML5 specification](http://go.microsoft.com/fwlink/p/?LinkId=228542), to create offline web applications must observe available storage limitations. This is especially true in devices with limited memory space. The practical limits on the size of the AppCache are always a function of available disk storage space. The general guidelines are shown below.

| Volume size         |AppCache per domain | AppCache per user   | 
|---------------|---------------|-------------------------|
Up to 4GB | 10MB | 50MB |
4GB to 16GB | 50MB | 500MB | 
16GB to 32 GB | 50MB | 1GB |

All Windows 10 apps are intended to use the same AppCache quota model, so the available disk storage limitation applies to both desktop and phone apps. The is also a hard limit after pages loaded inside **WebView** together have consumed 1 GB of *AppCache* space; requests for additional *AppCache* storage above this limit will be denied. 

## Events

### departingFocus

Indicates the focus departing from the **webview** into the app. 

```js
function handler(eventInfo) { /* Your code */ }
 
// addEventListener syntax
webview.addEventListener("departingFocus", handler);
webview.removeEventListener("departingFocus", handler);
```

#### Event Information

|            |      |
|------------|------|
|**Interface** | [FocusNavigationEvent](./webview/FocusNavigationEvent.md) |
|**Synchronous** |Yes |    
|**Bubbles**     |Yes |   
|**Cancelable**  |No |            

### MSWebViewContainsFullScreenElementChanged

Occurs when the status changes of whether or not the **webview** currently contains a full screen element.

```js
function handler(eventInfo) { /* Your code */ }
 
// addEventListener syntax
webview.addEventListener("MSWebViewContainsFullScreenElementChanged", handler);
webview.removeEventListener("MSWebViewContainsFullScreenElementChanged", handler);
```

#### Event Information

|            |      |
|------------|------|
|**Interface** | **Event** |
|**Synchronous** |Yes |    
|**Bubbles**     |No |   
|**Cancelable**  |No |  

### MSWebViewContentLoading

Indicates that the HTML content is downloaded and is being loaded into the control.

```js
function handler(eventInfo) { /* Your code */ }
 
// addEventListener syntax
webview.addEventListener("MSWebViewContentLoading", handler);
webview.removeEventListener("MSWebViewContentLoading", handler);
```

#### Event Information

|            |      |
|------------|------|
|**Interface** | [NavigationEvent](./webview/NavigationEvent.md) |
|**Synchronous** |Yes  |    
|**Bubbles**     |No |   
|**Cancelable**  |No |    

### MSWebViewDOMContentLoaded

Indicates that the main DOM elements have finished loading.


```js
function handler(eventInfo) { /* Your code */ }
 
// addEventListener syntax
webview.addEventListener("MSWebViewDOMContentLoaded", handler);
webview.removeEventListener("MSWebViewDOMContentLoaded", handler);
```

#### Event Information

|            |      |
|------------|------|
|**Interface** | [NavigationEvent](./webview/NavigationEvent.md) |
|**Synchronous** |Yes  |    
|**Bubbles**     |No |   
|**Cancelable**  |No |                 

### MSWebViewFrameContentLoading

Indicates that the HTML content downloaded and is being loaded into the `<iframe>` control.

```js
function handler(eventInfo) { /* Your code */ }
 
// addEventListener syntax
webview.addEventListener("MSWebViewFrameContentLoading", handler);
webview.removeEventListener("MSWebViewFrameContentLoading", handler);
```

#### Event Information

|            |      |
|------------|------|
|**Interface** | [NavigationEvent](./webview/NavigationEvent.md) |
|**Synchronous** |Yes  |    
|**Bubbles**     |No |   
|**Cancelable**  |No |                 

### MSWebViewFrameDOMContentLoaded

Indicates that the main DOM elements have finished loading in the `<iframe>`.

```js
function handler(eventInfo) { /* Your code */ }
 
// addEventListener syntax
webview.addEventListener("MSWebViewFrameDOMContentLoaded", handler);
webview.removeEventListener("MSWebViewFrameDOMContentLoaded", handler);
```

#### Event Information

|            |      |
|------------|------|
|**Interface** | [NavigationEvent](./webview/NavigationEvent.md) |
|**Synchronous** |Yes  |    
|**Bubbles**     |No |   
|**Cancelable**  |No |    


### MSWebViewFrameNavigationCompleted

Indicates the navigation is complete, and all media elements are rendered in the `<iframe>`.

```js
function handler(eventInfo) { /* Your code */ }
 
// addEventListener syntax
webview.addEventListener("MSWebViewFrameNavigationCompleted", handler);
webview.removeEventListener("MSWebViewFrameNavigationCompleted", handler);
```

#### Event Information

|            |      |
|------------|------|
|**Interface** | [NavigationCompletedEvent](./webview/NavigationCompletedEvent.md) |
|**Synchronous** |Yes |    
|**Bubbles**     |No |   
|**Cancelable**  |No |       

### MSWebViewFrameNavigationStarting

Indicates a `<iframe>` within a **webview** is starting to navigate.


```js
function handler(eventInfo) { /* Your code */ }
 
// addEventListener syntax
webview.addEventListener("MSWebViewFrameNavigationStarting", handler);
webview.removeEventListener("MSWebViewFrameNavigationStarting", handler);
```

#### Event Information

|            |      |
|------------|------|
|**Interface** | [NavigationEvent](./webview/NavigationEvent.md) |
|**Synchronous** |Yes  |    
|**Bubbles**     |No |   
|**Cancelable**  |Yes |                 
          
### MSWebViewLongRunningScriptDetected

Occurs periodically while the **webview** executes JavaScript, letting you halt the script.

```js
function handler(eventInfo) { /* Your code */ }
 
// addEventListener syntax
webview.addEventListener("MSWebViewLongRunningScriptDetected", handler);
webview.removeEventListener("MSWebViewLongRunningScriptDetected", handler);
```

#### Event Information

|            |      |
|------------|------|
|**Interface** | [LongRunningScriptDetectedEvent](./webview/LongRunningScriptDetectedEvent.md) |
|**Synchronous** |Yes |    
|**Bubbles**     |No |   
|**Cancelable**  |No |            

### MSWebViewNavigationCompleted

Indicates the navigation is complete, and all media elements are rendered.

```js
function handler(eventInfo) { /* Your code */ }
 
// addEventListener syntax
webview.addEventListener("MSWebViewNavigationCompleted", handler);
webview.removeEventListener("MSWebViewNavigationCompleted", handler);
```

#### Event Information

|            |      |
|------------|------|
|**Interface** | [NavigationCompletedEvent](./webview/NavigationCompletedEvent.md) |
|**Synchronous** |Yes  |    
|**Bubbles**     |No |   
|**Cancelable**  |No |                 
         

### MSWebViewNavigationStarting

Indicates the **webview** is starting to navigate **MSWebViewContentLoading** and the HTML content is downloaded and is being loaded into the control.


```js
function handler(eventInfo) { /* Your code */ }
 
// addEventListener syntax
webview.addEventListener("MSWebViewNavigationStarting", handler);
webview.removeEventListener("MSWebViewNavigationStarting", handler);
```

#### Event Information

|            |      |
|------------|------|
|**Interface** | [NavigationEvent](./webview/NavigationEvent.md) |
|**Synchronous** |No  |    
|**Bubbles**     |Yes |   
|**Cancelable**  |Yes |      

### MSWebViewNewWindowRequested

Raised when content in **webview** is trying to open a new window. 

```js
function handler(eventInfo) { /* Your code */ }
 
// addEventListener syntax
webview.addEventListener("MSWebViewNewWindowRequested", handler);
webview.removeEventListener("MSWebViewNewWindowRequested", handler);
```

#### Event Information

|            |      |
|------------|------|
|**Interface** | [NavigationEventWithReferrer](./webview/NavigationEventWithReferrer.md) |
|**Synchronous** |Yes  |    
|**Bubbles**     |No |   
|**Cancelable**  |No |                 
           

### MSWebViewPermissionRequested

Indicates that content in the **webview**  is trying to access functionality (such as geolocation, or pointer lock access) that normally requires end-user permissions.

```js
function handler(eventInfo) { /* Your code */ }
 
// addEventListener syntax
webview.addEventListener("MSWebViewPermissionRequested", handler);
webview.removeEventListener("MSWebViewPermissionRequested", handler);
```

#### Event Information

|            |      |
|------------|------|
|**Interface** | [PermissionRequest](./webview/PermissionRequest.md) |
|**Synchronous** |Yes  |    
|**Bubbles**     |No |   
|**Cancelable**  |No |    


### MSWebViewProcessExited

Indicates that the **webview** component process crashsed. 

```js
function handler(eventInfo) { /* Your code */ }
 
// addEventListener syntax
webview.addEventListener("MSWebViewProcessExited", handler);
webview.removeEventListener("MSWebViewProcessExited", handler);
```

#### Event Information

|            |      |
|------------|------|
|**Interface** | **Event** |
|**Synchronous** |Yes |    
|**Bubbles**     |No |   
|**Cancelable**  |No |      


### MSWebViewWebResourceRequested

Raised when a page inside the **webview** element requests a resource.

```js
function handler(eventInfo) { /* Your code */ }
 
// addEventListener syntax
webview.addEventListener("MSWebViewWebResourceRequested", handler);
webview.removeEventListener("MSWebViewWebResourceRequested", handler);
```

#### Event Information

|            |      |
|------------|------|
|**Interface** | [WebResourceRequestedEvent](./webview/WebResourceRequestedEvent.md) |
|**Synchronous** |Yes |    
|**Bubbles**     |No |   
|**Cancelable**  |No |      


### MSWebViewScriptNotify

Raised when a page inside the **webview** element calls the **window.external.notify** method. 

```js
function handler(eventInfo) { /* Your code */ }
 
// addEventListener syntax
webview.addEventListener("MSWebViewScriptNotify", handler);
webview.removeEventListener("MSWebViewScriptNotify", handler);
```

#### Event Information

|            |      |
|------------|------|
|**Interface** | [ScriptNotifyEvent](./webview/ScriptNotifyEvent.md) |
|**Synchronous** |Yes  |    
|**Bubbles**     |No |   
|**Cancelable**  |No |      

### MSWebViewUnsafeContentWarningDisplaying

Occurs when the **webview** shows a warning page for content that was reported as unsafe by SmartScreen Filter.

```js
function handler(eventInfo) { /* Your code */ }
 
// addEventListener syntax
webview.addEventListener("MSWebViewUnsafeContentWarningDisplaying", handler);
webview.removeEventListener("MSWebViewUnsafeContentWarningDisplaying", handler);
```

#### Event Information

|            |      |
|------------|------|
|**Interface** | **Event** |
|**Synchronous** |Yes |    
|**Bubbles**     |No |   
|**Cancelable**  |No |    

### MSWebViewUnsupportedUriSchemeIdentified

Raised when there is navigation to an Uniform Resource Identifier (URI) that the **webview** does not support.

```js
function handler(eventInfo) { /* Your code */ }
 
// addEventListener syntax
webview.addEventListener("MSWebViewUnsupportedUriSchemeIdentified", handler);
webview.removeEventListener("MSWebViewUnsupportedUriSchemeIdentified", handler);
```

#### Event Information

|            |      |
|------------|------|
|**Interface** | [NavigationEvent](./webview/NavigationEvent.md) |
|**Synchronous** |Yes  |    
|**Bubbles**     |No |   
|**Cancelable**  |Yes |     

### MSWebViewUnviewableContentIdentified

Raised when the **webview** cannot find the content.

```js
function handler(eventInfo) { /* Your code */ }
 
// addEventListener syntax
webview.addEventListener("MSWebViewUnviewableContentIdentified", handler);
webview.removeEventListener("MSWebViewUnviewableContentIdentified", handler);
```

#### Event Information

|            |      |
|------------|------|
|**Interface** | [UnviewableContentIdentifiedEvent](./webview/UnviewableContentIdentifiedEvent.md) |
|**Synchronous** |Yes  |    
|**Bubbles**     |No |   
|**Cancelable**  |No |                 
         

## Methods

### addWebAllowedObject

Adds a native Windows Runtime object as a global parameter to the top-level document inside of a **webview**.


```js
webview.addWebAllowedObject(name, applicationObject);
```
#### Parameters
*name*
* Type: **String**
* The name of the object to expose to the document in the **webview**.

*applicationObject*
* Type: **Object**
* The object to expose to the document in the **webview**.

#### Return value
This method does not return a value.

#### Additional features and requirements

|            |      |
|------------|------|
|**Minimum supported client** |Windows 10 [Windows Store apps only] |    
|**Minimum supported server** |None supported |   
|**Minimum supported phone**  |None supported |  

### buildLocalStreamUri

Creates a URI that you can pass to [navigateToLocalStreamUri](#methods).

```js
var string = webview.buildLocalStreamUri(contentIdentifier, relativePath);
```
#### Parameters
*contentIdentifier*
* Type: **String**
* A unique identifier for the content the URI is referencing. This defines the root of the URI.

*relativePath*
* Type: **String**
* The path to the resource, relative to the root.

#### Return value
Type: **String**

The URI created by combining and normalizing the *contentIdentifier* and *relativePath*.

#### Example

The following example illustrates a typical use case. 

```js
var webview = document.createElement("x-ms-webview"); //Instantiate the webview element
var localStreamUri = webview.buildLocalStreamUri(contentIdentifier, relativePath); //Create URI to pass to navigateToLocalStreamUri method
webview.navigateToLocalStreamUri(localStreamUri, streamResolver); //Load the local web content	
```  

### capturePreviewToBlobAsync

Creates an image of the current [webview element](./webview.md) and write it to the specified image element.

```js
var capturePreviewToBlobAsync = webview.capturePreviewToBlobAsync();
```
#### Parameters
This method has no parameters.

#### Return value
Type: **MSWebViewAsyncOperation**

An **MSWebViewAsyncOperation** object that, when it completes, provides a **Blob** object that contains the image. When using **capturePreviewToBlobAsync**, you need to define success and error handlers after defining the operation. After applying the event handlers, call the start method on the [MSWebViewAsyncOperation](./webview/MSWebViewAsyncOperation.md) object to execute the operation.

### captureSelectedContentToDataPackageAsync

Asynchronously gets a [DataPackage](https://docs.microsoft.com/uwp/api/Windows.ApplicationModel.DataTransfer.DataPackage) that contains the selected content within the **webview**.

```js
var msWebViewAsyncOperation = webview.captureSelectedContentToDataPackageAsync();
```
#### Parameters
This method has no parameters.

#### Return value
Type: **MSWebViewAsyncOperation**

An **MSWebViewAsyncOperation** object that, when it completes, provides a [DataPackage](https://docs.microsoft.com/uwp/api/Windows.ApplicationModel.DataTransfer.DataPackage) object that contains the image. When using **captureSelectedContentToDataPackageAsync**, you need to define success and error handlers after defining the operation. After applying the event handlers, call the start method on the MSWebViewAsyncOperation object to execute the operation.

```js
 var operation = webview.captureSelectedContentToDataPackageAsync();
    operation.oncomplete = function () {
        // operation.result is a package object that contains the selected data.
        var url = URL.createObjectURL(operation.result, { oneTimeOnly: true });
        // After converting the package to a URI, put it in an image element.
        document.getElementById('webviewPreview').src = url;
    };
    operation.start();  

```

### invokeScriptAsync

As an asynchronous action, executes the specified script function from the currently loaded HTML, with specific arguments.

```js
webview.invokeScriptAsync(scriptName, args)
```
#### Parameters

**scriptName**
* Type: **String**
* The name of the script function to invoke.

**args**
* Type: **Object**
* A string array that packages arguments to the script function. 

#### Return value
Type: **MSWebViewAsyncOperation**

When using **invokeScriptAsync**, you need to define success and error handlers after defining the operation. After applying the event handlers, call **webview.start** to execute the operation.

```js
var asyncOp = webView.invokeScriptAsync(scriptName, args);
asyncOp.oncomplete = completedHandler;
asyncOp.onerror = errorHandler;
asyncOp.start();
```

### getDeferredPermissionRequests

Returns a list of deferred permission requests issued by content in the **webview** control.

```js
var sequence<PermissionRequest> = x-ms-webview.getDeferredPermissionRequests();
```
#### Parameters
This method has no parameters.

#### Return value
Type: [DeferredPermissionRequest](./webview/DeferredPermissionRequest.md)

The specified deferred permission request.

#### Additional features and requirements

|            |      |
|------------|------|
|**Minimum supported client** |Windows 10 [Windows Store apps only] |    
|**Minimum supported server** |None supported|   
|**Minimum supported phone**  |None supported |    


### getDeferredPermissionRequestById

Returns the specified deferred permission request. 

```js
var deferredPermissionRequest = x-ms-webview.getDeferredPermissionRequestById(id);
```
#### Parameters
*id*
* Type: **unsigned long**
* The ID of the deferred permission request you wish to get.

#### Return value
Type: [DeferredPermissionRequest](./webview/DeferredPermissionRequest.md)

The specified deferred permission request.

#### Additional features and requirements

|            |      |
|------------|------|
|**Minimum supported client** |Windows 10 [Windows Store apps only] |    
|**Minimum supported server** |None supported|   
|**Minimum supported phone**  |None supported | 

### goBack

Navigates the **webview** to the previous page in the navigation history. 

```js
webview.goBack();
```
#### Parameters
This method has no parameters.

#### Return value
This method does not return a value.

### goForward

Navigates the **webview** to the next page in the navigation history. 

```js
webview.goForward();
```
#### Parameters
This method has no parameters.

#### Return value
This method does not return a value.

### navigate

Loads the HTML content at the specified Uniform Resource Identifier (URI). 

```js
webview.navigate(uri);
```
#### Parameters

**uri**
* Type: **String**
* The URI to load.

#### Return value
This  method does not return a value.

### navigateFocus

Navigates focus onto the **webview**.

```js
webview.addWebAllowedObject(name, applicationObject);
```
#### Parameters
*navigationReason*
* Type: **String**
* The reason for the navigation.

*origin*
* Type: **Object**
* The origin of the navigation.

#### Return value
This method does not return a value.

### navigateToLocalStreamUri

Loads local web content at the specified URI using an **UriToStreamResolver**.

```js
webview.navigateToLocalStreamUri(source, streamResolver); 
```
#### Parameters

*source*
* Type: **String**
* An ms-local-stream URI identifying the local HTML content to load. Create this string using **buildLocalStreamUri**.

*streamResolver*
* Type: any
* A resolver that converts the URI into a stream to load.

#### Return value
This method does not return a value.

### navigateToString

Loads the specified HTML content as a new document. 

```js
webview.navigateToString(contents);
```
#### Parameters

*contents*
* Type: **String**
* The HTML content to display.

#### Return value
This method does not return a value.

### navigateWithHttpRequestMessage

Navigates the webview to a Uniform Resource Identifier (URI) with a POST request and HTTP headers. 

```js
webview.navigateWithHttpRequestMessage(requestMessage);
```
#### Parameters

*requestMessage*
* Type: **HttpRequestMessage**
* The details of the HTTP request. 

#### Return value
This method does not return a value.

#### Remarks

> [!WARNING]
> If you add additional headers to this request, such as authentication credentials, remember that those headers will also be included with any subsequent child requests. Use caution to prevent accidental disclosure of confidential or personal information. 


### refresh 

Reloads the current content in the **webview**. 

```js
webview.refresh();
```
#### Parameters
This method has no parameters.

#### Return value
This method does not return a value.


### stop

Halts the current **webview** navigation or download. 

```js
webview.stop();
```
#### Parameters
This method has no parameters.

#### Return value
This method does not return a value.


## Properties

### canGoBack

Gets a value that indicates whether the **webview** can navigate backward.

This property is read-only.

```js
var canGoBack = webview.canGoBack;
```

#### Property value
Type: **Boolean**

**True** if the **webview** can navigate backward; otherwise, **false**.

### canGoForward

Gets a value that indicates whether the **webview** can navigate forward.

This property is read-only.

```js
var canGoForward = webview.canGoForward;
```

#### Property value
Type: **Boolean**

**True** if the **webview** can navigate forward; otherwise, **false**.

### containsFullScreenElement

Gets a value that indicates whether the **webview** contains an element that supports full screen.

This property is read-only.

```js
var containsFullScreenElement = webview.containsFullScreenElement;
```

#### Property value
Type: **Boolean**

**True** if the **webview** contains an element that supports full screen; otherwise, **false**.


### documentTitle

Gets the title of the page currently displayed in the **webview**. 

This property is read-only.

```js
var documentTitle = webview.documentTitle;
```

#### Property value
Type: **String**

The page title.

### height

Gets or sets the height of the **webview**. 

```js
var height = webview.height;
webview.height = height;

```

#### Property value
Type: **Number**

The height of the **webview**. 


### process

Gets the **webview** process.

This property is read-only.

```js
var process = webview.process;
webview.process = process;
```

#### Property value
Type: [MSWebViewProcess](./webview/MSWebViewProcess.md)


### settings

Gets a [MSWebViewSettings](./webview/MSWebViewSettings.md) object that contains properties to enable or disable **webview** features.

This property is read-only.

```js
var settings = webview.settings;
webview.settings = settings;
```

#### Property value
Type: [MSWebViewSettings](./webview/MSWebViewSettings.md)

A [MSWebViewSettings](./webview/MSWebViewSettings.md) object that contains properties to enable or disable **webview** features.

### src

Gets or sets the Uniform Resource Identifier (URI) source of the HTML content to display in the **webview** control. 

```js
var src = webview.src;
webview.src = src;
```

#### Property value
Type: **String**

The URI source of the HTML content to display in the **webview** control. 


### width

Gets or sets the width of the **webview**.

```js
var width = webview.width;
webview.width = width;
```

#### Property value
Type: **Number**

The width of the **webview**.
