---
title: MSApp API reference
description: Provides helper functions that enable you to create Blob and MSStream objects. MSApp objects and members are supported for Windows apps using JavaScript.
author: mattwojo
ms.author: mattwoj
ms.date: 01/15/2020
ms.topic: reference
ms.prod: microsoft-edge
keywords: MSapp, PWA, file upload, Blog, MSStream, windows 10 apps, uwp, edge
---

# MSApp

The MSApp object and its members are supported only for Windows apps using JavaScript (including PWAs accessing Windows API features). The MSApp object only exists in the local context of an HTML document in a Windows app loaded via the ms-appx URI scheme; otherwise, the object doesn’t exist (and consequently, none of its methods and properties are available).

It provides helper functions that enable you to create [Blob](https://developer.mozilla.org/docs/Web/API/Blob) and [MSStream](https://msdn.microsoft.com/library/hh772328(v=vs.85).aspx) objects.

```javascript
var result = MSApp.method;
```

| | |
| :--- | :--- |
| [**Methods**](#msapp-methods) | [clearTemporaryWebDataAsync](#cleartemporarywebdataasync), [createBlobFromRandomAccessSream](#createblobfromrandomaccessstream), [createDataPackage](#createdatapackage), [createDataPackageFromSelection](#createdatapackagefromselection), [createFileFromStorageFile](#createfilefromstoragefile), [createStreamFromInputStream](#createstreamfrominputstream), [execAsyncAtPriority](#execasyncatpriority), [execAtPriority](#execatpriority), [getCurrentPriority](#getcurrentpriority), [getHtmlPrintDocumentSource](#gethtmlprintdocumentsource),[getHtmlPrintDocumentSourceAsynce](#gethtmlprintdocumentsourceasync), [getViewId](#getviewid), [isTaskScheduledAtPriorityOrHigher](#istaskscheduledatpriorityorhigher), [pageHandlesAllApplicationActivations](#pagehandlesallapplicationactivations), [suppressSubdownloadCredentialPrompts](#suppresssubdownloadcredentialprompts), [terminateApp](#terminateapp). |

| | |
| :--- | :--- |
| [**Constants**](#msapp-constants) | [current](#current), [high](#high), [idle](#idle), [normal](#normal).|

| | |
| :--- | :--- |
| [**MSAppAsyncOperation** interface](#msappasyncoperation) | [start](#start) |

## MSApp Methods

### clearTemporaryWebDataAsync 
Clears cache and indexedDB data for the app or [WebView](../../webview.md).

```javascript
var retval = MSApp.clearTemporaryWebDataAsync(#); 
```
#### Parameters
This method has no parameters.

#### Return value
Type: [`IAsyncAction`](/uwp/api/windows.foundation.iasyncaction)

Represents an asynchronous action.

### createBlobFromRandomAccessStream
Creates a [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) from an [`IRandomAccessStream`](/uwp/api/Windows.Storage.Streams.IRandomAccessStream) object. This method should be used when dealing with `IRandomAccessStream` objects in apps in order to create a W3C based object from the stream. Once the blob is created, it can be used with the [FileReader](https://developer.mozilla.org/en-US/docs/Web/API/FileReader), [URL APIs](https://developer.mozilla.org/en-US/docs/Web/API/URL), and [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest). 

```javascript
var retVal = MSApp.createBlobFromRandomAccessStream(type, stream); 
```

#### Parameters

`type` [in]

|Type | Description |
|:---- |:--- |
|String | Content type of the data. This string should be in the format specified in the media-type token defined in section 3.7 of RFC 2616.

`stream` [in]

|Type | Description |
|:---- |:--- |
|Any | [IRandomAccessStream](/uwp/api/Windows.Storage.Streams.IRandomAccessStream) to be stored in the Blob.

#### Return value
|Type | Description |
|:---- |:--- |
|Blob | New blob object that contains the stream.

#### Exceptions
|Exception | Condition |
|:---- |:--- |
|TypeMismatchError | The node type is incompatible with the expected parameter type. For versions earlier than Internet Explorer 10, TYPE_MISMATCH_ERR is returned.

#### Remarks
Creates a Blob from Windows Runtime types via the MSApp namespace on the window object. This method will create a blob that is essentially a light wrapper over the [`RandomAccessStream`](/uwp/api/Windows.Storage.Streams.RandomAccessStreamReference) object provided to it. The blob owns the lifetime of this stream and the stream will be closed when the blob is destroyed. 

#### Example

```javascript
var randomAccessStream = dataPackage.GetData("image/bmp");
var blob = window.MSApp.createBlobFromRandomAccessStream("image/bmp", randomAccessStream);
var url = window.URL.createObjectURL(blob, {oneTimeOnly:true});

document.getElementById("imagetag").src = url; 
```

### createDataPackage
Converts the user’s or the application’s specified range to an HTML fragment that can be shared.

```javascript
var retVal = MSApp.createDataPackage(object); 
```

#### Parameters
`object` [in]

|Type | Description |
|:---- |:--- |
|Any | This range can be created either from a selection object, for example: `window.selection.getRangeAt(0)`, or manually.

#### Return value
|Type | Description |
|:---- |:--- |
|Any | Contains the HTML markup for the specified range.

#### Remarks
This method supports only [Document Object Model (DOM) Range](https://developer.mozilla.org/en-US/docs/Web/API/Range), not [TextRange](/uwp/api/windows.ui.xaml.documents.textrange). The returned data package for the specified range contains HTML markup in clipboard format.

There are no available properties for the returned data package.

### createDataPackageFromSelection 
Converts the user’s or the application’s selection to an HTML fragment that can be shared.

```javascript
var retVal = MSApp.createDataPackageFromSelection(); 
```

#### Parameters
This method has no parameters.

#### Return value
|Type | Description |
|:---- |:--- |
|Any | Contains the HTML markup for the specified range.

#### Remarks
The returned data package for the selection contains HTML markup in clipboard format. If there is no user selection anywhere within the application’s UI, the `createDataPackageFromSelection` returns null.

There are no available properties for the returned data package.
 
### createFileFromStorageFile 
Converts a [WinRT](/uwp/api/) [`StorageFile`](/uwp/api/windows.storage.storagefile) to a standard W3C [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) object.

```javascript
var retVal = MSApp.createFileFromStorageFile(storageFile); 
```

#### Parameters
`storageFile` [in]

|Type | Description |
|:---- |:--- |
|Any | Contains the storage file.

#### Exceptions
|Exception | Condition |
|:---- |:--- |
|TypeMismatchError | The specified W3C file reference is invalid. For versions earlier than Internet Explorer 10, TYPE_MISMATCH_ERR is returned.

### createStreamFromInputStream  

Creates an [`MSStream`](https://msdn.microsoft.com/library/hh772328) from an [`InputStream`](https://msdn.microsoft.com/library/hh772327).  


```javascript
var msStream = MSApp.createStreamFromInputStream("image/jpeg", inputStream);
```

#### Parameters
`type` [in]

|Type | Description |
|:---- |:--- |
|DOMString | Content type of the data. This string should be in the format specified in the media-type token defined in section 3.7 of RFC 2616. ([See MIME types,](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) ie. text/plain, text/html, image/jpeg, image/png, audio/mpeg, audio/ogg, audio/*, video/mp4, etc.). 

`inputStream` [in]

|Type | Description |
|:---- |:--- |
|Any | The [`IInputStream`](/uwp/api/Windows.Storage.Streams.IInputStream) to be stored in the `MSStream`.

#### Remarks
This method takes a content-type, and the `IInputStream` reference. The method then verifies that the stream reference passed in is an instance of type `IInputStream` and if not, throws `DOMException TYPE_MISMATCH_ERR`. If no error occurs, `createStreamFromInputStream` creates an `MSStream` (from its inputs).

#### Example
An `IInputStream` can be used to create an `MSStream`. As `MSStreams` are inherently one-time-use objects, all URLs created by `URL.createObjectURL` are revoked the first time it's resolved by the image element. Additionally, requests for a second URL on this object after the stream has been used will fail.

```javascript
var inputStream = myInputStream; //get InputStream from socket API, etc.
var stream = MSApp.createStreamFromInputStream("image/bmp", inputstream);
document.getElementById("imagetag").src = URL.createObjectURL(stream); 
```

### execAsyncAtPriority 
Schedules a callback to be executed at a later time according to the given priority. 

```javascript
MSApp.execAsyncAtPriority(asynchronousCallback, priority, args); 
```

#### Parameters
`asynchronousCallback` [in]

|Type | Description |
|:---- |:--- |
|Function | The callback function to run asynchronously, dispatched at the given priority priority.

`priority` [in]

|Type | Description |
|:---- |:--- |
|DOMString | The contextual priority value at which the asynchronousCallback callback is run. See [MSApp Constants](#msapp-constants).

`args` [in]

|Type | Description |
|:---- |:--- |
|Any | An optional series of arguments that are passed to the synchronousCallback callback function (as parameters 1 and on).

#### Return value
This method does not return a value.

#### Remarks
The provided `asynchronousCallback` callback function is executed asynchronously later. `asynchronousCallback` will be dispatched according to the provided priority. Normal priority is equivalent to the existing [`setImmediate`](https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate) method. When the callback is run, the current contextual priority is set to the provided priority parameter value for the duration of the callback's execution.

The `asynchronousCallback` callback parameter can be any function. If arguments are provided after the `priority` parameter, they will all be passed to the callback function.

Unlike `execAtPriority`, any object returned by the `asynchronousCallback` callback function is ignored (and not returned via `execAsyncAtPriority`).

### execAtPriority 
Runs the specified callback function at the given contextual priority.

```javascript
var retval = MSApp.execAtPriority(synchronousCallback, priority, args);
```

#### Parameters
`synchronousCallback` [in]

|Type | Description |
|:---- |:--- |
|Function | The callback function to run synchronously at the given priority contextual priority.

`priority` [in]

|Type | Description |
|:---- |:--- |
|DOMString | The specified priority value to which the current contextual priority value will be set when running the `synchronousCallback` callback function. See [MSApp Constants](#msapp-constants).

`args` [in]

|Type | Description |
|:---- |:--- |
|Any | An optional series of arguments that are passed to the `synchronousCallback` callback function (as parameters 1 and on).

#### Return value
|Type | Description |
|:---- |:--- |
|Any | Returns the return value of the `synchronousCallback` callback (as applicable).

#### Remarks
The provided `synchronousCallback` callback method is execute synchronously. The current contextual priority is changed to the provided priority value (given by the priority argument) for the duration of the provided callback function. Once the callback function finishes executing, priority is returned to the previous value prior to the `execAtPriority` call. The return value from `execAtPriority` is the return value of the callback method (as provided).
 
The `synchronousCallback` callback parameter can be any function. If any arguments are provided after the priority parameter, they will be passed to the provided callback method. If the callback parameter returns a value, this value becomes the return value for `execAtPriority` as well.

#### Example
```javascript
var user = Windows.System.UserProfile.UserInformation;

MSApp.execAtPriority(function () { // This callback executes synchronously.
  user.getFirstNameAsync().then(function () { // Dispatches at high priority.
    return user.getLastNameAsync();
  }).done(function () { // Dispatches at high priority.
    // USEFUL CODE HERE
  });
}, MSApp.HIGH); // The second argument of the execAtPriority method.
```

### getCurrentPriority 
Returns the current contextual priority.

```javascript
var retval = MSApp.getCurrentPriority();
```

#### Parameters
None. 

#### Return value
|Type | Description |
|:---- |:--- |
|DOMString | The return value is one of the strings `MSApp.HIGH`, `MSApp.NORMAL`, or `MSApp.IDLE`.

#### Remarks
This method returns the current contextual priority (see [`MSApp Constants`](#msapp-constants)), which can be changed via `execAtPriority` and `execAsyncAtPriority`.

#### Example
```javascript
if (MSApp.getCurrentPriority() === MSApp.IDLE) { 
  // YOUR CODE HERE
}
```

### getHtmlPrintDocumentSource  

Synchronous API that has been deprecated. For Windows 10, see `getHtmlPrintDocumentSourceAsync`. For Windows 8 and 8.1 apps, see the MSDN entry for [getHtmlPrintDocumentSource](https://msdn.microsoft.com/library/hh772325).  

### getHtmlPrintDocumentSourceAsync
Returns the source content that is to be printed.

#### Parameters
`htmlDoc` [in]

|Type | Description |
|:---- |:--- |
|Document | The HTML document to be printed. This can be the root document, the document in an iframe, a document fragment, or a SVG document. Be aware that htmlDoc must be a document, not an element.

#### Example 1
```javascript
var printTask = event.request.createPrintTask(title, function (args) {
                var deferral = args.getDeferral();
                var getPrintDocumentSourceAsync;
                if (MSApp.getHtmlPrintDocumentSourceAsync) { // Windows 10
                    getPrintDocumentSourceAsync = MSApp.getHtmlPrintDocumentSourceAsync(document);
                } else {
                    getPrintDocumentSourceAsync = WinJS.Promise.as(MSApp.getHtmlPrintDocumentSource(document));
                }
                getPrintDocumentSourceAsync.then(function (source) {
                    args.setSource(source);
                    deferral.complete();
                }, function (error) {
                    console.error(error);
                    deferral.complete();
                });
            });
```

#### Example 2
```javascript
    function registerForPrintContract() {
            var printManager = Windows.Graphics.Printing.PrintManager.getForCurrentView();
            printManager.onprinttaskrequested = onPrintTaskRequested;
            console.log("Print Contract registered. Use the Print button to print.", "sample", "status");
    }
    
    // Variable to hold the document source to print
    var gHtmlPrintDocumentSource = null;
    
    // Print event handler for printing via the PrintManager API.
    function onPrintTaskRequested(printEvent) {
        var printTask = printEvent.request.createPrintTask("Print Sample", function (args) {
            args.setSource(gHtmlPrintDocumentSource);
    
            // Register the handler for print task completion event
            printTask.oncompleted = onPrintTaskCompleted;
        });
    }
    
    // Print Task event handler is invoked when the print job is completed.
    function onPrintTaskCompleted(printTaskCompletionEvent) {
        // Notify the user about the failure
        if (printTaskCompletionEvent.completion === Windows.Graphics.Printing.PrintTaskCompletion.failed) {
            console.log("Failed to print.", "sample", "error");
        }
    }
    
    // Executed just before printing.
    var beforePrint = function () {
        // Replace with code to be executed just before printing the current document:
    };
    
    // Executed immediately after printing.
    var afterPrint = function () {
        // Replace with code to be executed immediately after printing the current document:
    };
    
    function printButtonHandler() {
        // Optionally, functions to be executed immediately before and after printing can be configured as following:
        window.document.body.onbeforeprint = beforePrint;
        window.document.body.onafterprint = afterPrint;
    
        // Get document source to print
        MSApp.getHtmlPrintDocumentSourceAsync(document).then(function (htmlPrintDocumentSource) {
            gHtmlPrintDocumentSource = htmlPrintDocumentSource;
    
            // If the print contract is registered, the print experience is invoked.
            Windows.Graphics.Printing.PrintManager.showPrintUIAsync();
        });
    }
```

### getViewId 
Support for multiple windows. 

> [!NOTE] 
> In Win8.1 JavaScript UWP apps supported multiple windows using MSApp DOM APIs which are now depricated. For Windows 10, use `window.open`, `window`, and the new `MSApp.getViewId`.

| Description |Windows 10 | Windows 8.1 |  
|:---- |:---- |:--- |  
| Create new window | [`window.open`](https://developer.mozilla.org/en-US/docs/Web/API/Window/open) | [`MSApp.createNewView`](https://msdn.microsoft.com/library/dn254975(v=vs.85).aspx) |  
|New window object | [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) |[`MSAppView`](https://msdn.microsoft.com/library/dn268315(v=vs.85).aspx) |  

```javascript
var retval = MSApp.getViewId(window); 
```

#### Parameters
`window`

|Type | Description |
|:---- |:--- |
|DOMString | An object representing a window containing a DOM document. | 

#### Return value

`viewId`

|Type | Description |
|:---- |:--- |
|Number | Can be used with the various [`Windows.UI.ViewManagement.ApplicationViewSwitcher`](/uwp/api/windows.ui.viewmanagement.applicationviewswitcher) APIs. 

#### Remarks
Use [`window.open`](https://developer.mozilla.org/en-US/docs/Web/API/Window/open) and [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) for creating new windows, but then to interact with WinRT APIs, add the `MSApp.getViewId` API. It takes a `window` object as a parameter and returns a `viewId` number that can be used with the various [`Windows.UI.ViewManagement.ApplicationViewSwitcher`](/uwp/api/windows.ui.viewmanagement.applicationviewswitcher) APIs. 

##### Delaying Visibility 
Views in WinRT normally start hidden and the end developer uses something like `TryShowAsStandaloneAsync` to display the view once it is fully prepared. In the web world, `window.open` shows a window immediately and the end user can watch as content is loaded and rendered. To have your new windows act like views in WinRT and not display immediately we have added a `window.open` option. For example:
`let newWindow = window.open("https://example.com", null, "msHideView=yes");`

##### Primary Window Differences
The primary window that is initially opened by the OS acts differently than the secondary windows that it opens: 

|Description | Primary | Secondary |
|:---- |:--- |:--- |
|window.open | Allowed | Disallowed |
|window.close | Close app | Close window |
| Navigation restrictions | ACUR only | No restrictions |

The restriction to not allow secondary windows to open could change in the future depending on [feedback](https://wpdev.uservoice.com/forums/257854-microsoft-edge-developer).

##### Same Origin Communication Restrictions 
There is a difficult technical issue preventing proper support for synchronous, same-origin, cross-window, script calls. When you open a window that is same origin, script in one window is allowed to directly call functions in the other window, and some of these calls will fail. `postMessage` calls work just fine and is the recommended way to do things if possible. Work to improve this issue is in progress.


### isTaskScheduledAtPriorityOrHigher 
Returns a Boolean value indicating whether there is pending work at the given priority level or higher.

```javascript
var retval = MSApp.isTaskScheduledAtPriorityOrHigher(priority); 
```

#### Parameters
`priority` [in]

|Type | Description |
|:---- |:--- |
|DOMString | A priority value (see [MSApp Constants](#msapp-constants)) specifying the priority level and above to query for any outstanding queued work.

#### Return value
|Type | Description |
|:---- |:--- |
|Boolean | Returns `true` if there is any queued work at the specified priority level or above, `false` otherwise.

#### Remarks
The `isTaskScheduledAtPriorityOrHigher` method provides a means for JavaScript code to determine if there is pending work at the various priority levels (or above) with the intent that the calling JavaScript code can then decide to yield to higher priority work.

#### Example
```javascript
function performIdleWork(array_in) {
  var idx = 0;

  function performIdleWorkHelper() {
    for (; idx < array_in.length; ++idx) {

      // USEFUL CODE HERE 

      if (MSApp.isTaskScheduledAtPriorityOrHigher(MSApp.NORMAL)) {
        MSApp.execAsyncAtPriority(performIdleWorkHelper, msPriority.IDLE);
        break;
      } // if
    } // for
  } // performIdleWorkHelper

  performIdleWorkHelper();
} // performIdleWork
```
### pageHandlesAllApplicationActivations
Used to avoid a refresh of the start path (page reload) before every activate event (ie. clicking a notification or a pinned tile). 

#### Parameters

|Type | Description |
|:---- |:--- |
Boolean | Use `MSApp.pageHandlesAllApplicationActivations(true)` to always skip refreshing the start path (page reload) and instead jump straight to firing the `WebUIApplication` activated event. Requires that all pages handle activation events separately. By defining this method as `true`, clicking an activated event (like a notificaiton) will not trigger the reload, an essential for single-page apps wishing to avoid page reloads.

#### Example 
```javascript
// Without this, the app will first refresh to the start path before every activate event
window.MSApp.pageHandlesAllApplicationActivations(true); 

// This must not be deffered so that it can receive the initial `activated` event in time
window.Windows.UI.WebUI.WebUIApplication.addEventListener(
    `activated`,
    e =>
        microsoftInterface.handleActivatedEvent(e);
    }),
    false
);
```

### suppressSubdownloadCredentialPrompts 
Controls whether an app suppresses possible authentication prompts during the download of resources.

```javascript
MSApp.suppressSubdownloadCredentialPrompts(suppress); 
```

#### Parameters
`suppress` [in]

|Type | Description |
|:---- |:--- |
|Boolean | A value of true suppresses potential authentication prompts. A value of false does not suppress any potential authentication prompts from the user.

#### Returan value
None.

#### Remarks
The `suppressSubdownloadCredentialPrompts` method controls whether an app suppresses potential authentication prompts during the download of resources. The default behavior is to not suppress credential prompts.

`suppressSubdownloadCredentialPrompts` is intended for use by apps which may load an excessive number of resources that require authentication, such as a mail app (which could contain a newsletter containing a number of images where each image requires authentication).

When suppressing credential prompts, dialogs for authenticating to servers will not be shown when accessing resources that require authentication, and the resource will not be downloaded. Note that `suppressSubdownloadCredentialPrompts` does not impact other possible prompts such as proxy authentication or client certification request dialogs, nor does it impact XHR.

Be aware that `suppressSubdownloadCredentialPrompts` impacts all content in the application, including content hosted in the `webview` element.
 
**Important:**  Credential prompt decisions are cached. Therefore, while suppressing credential prompts will take effect immediately, allowing credential prompts after suppressing them may need a reload of the document to take effect.

#### Example
```javascript
/ Set to true to suppress potenial credential prompts:
MSApp.suppressSubdownloadCredentialPrompts(true); 
// Now one can load content or navigate iframe/webview to some other site.
```

### terminateApp
Terminates the current application and generates a failure report. 

```javascript
MSApp.terminateApp(error); 
```

#### Parameters
`error` [in]

Type | Description |
|:---- |:--- |
|Error | An `Error` object that you can use to describe the error that triggered the termination. The `Error` object must contain the number, description, and stack properties; a failure report won't be generated if the object doesn't contain these properties.

#### Return value
None.

#### Remarks
If the issue reported by `terminateApp` becomes one of your app's top 5 issues, it will show up on the app's Quality page.

#### Example
This example calls `terminateApp` when an exception is encountered. It uses the `Error` object provided when you catch an exception. 

```javascript
try {  
        var obj2 = null;  
        obj2.val = 5;  
    }  
    catch(e) {  
        window.MSApp.terminateApp(e);  
    }  
```

### MSApp Constants
Allowed priority values associated with `execAsyncAtPriority`, `execAtPriority`, `getCurrentPriority`, and `isTaskScheduldAtPriorityOrHigher`.

#### Current
`current`

|Type | Description |
|:---- |:--- |
|DOMString | When `current` is used with the appropriate method (See also section), the method will use the current contextual priority when executing the requested operation.

#### High
`high`

|Type | Description |
|:---- |:--- |
|DOMString | When `high` is used with the appropriate method (See also section), the method will use higher than normal priority when executing the requested operation and will be dispatch the operation before any existing normal priority work.

#### Idle
`idle`

|Type | Description |
|:---- |:--- |
|DOMString | When `ideal` is used with the appropriate method (See also section), the method will use lower than normal priority when executing the requested operation and will be dispatch the operation after any existing normal priority work.

#### Normal
`normal`

|Type | Description |
|:---- |:--- |
|DOMString | When `normal` is used with the appropriate method (See also section), the method will use the normal existing priority when executing the requested operation.

#### Example
```javascript
if (window.MSApp.CURRENT) {
  document.getElementById('outputMessageDiv').textContent = 'The value of window.MSApp.CURRENT is "current".';
}
```

#### Requirements
|IDL | Mshtml.idl |
|:---- |:--- |

## MSAppAsyncOperation

```javascript
var asyncOperation = MSApp.clearTemporaryWebDataAsync(); 
asyncOperation.oncomplete = function() { console.log("Temporary web data cleared successfully"); }; 
asyncOperation.onerror = function() { console.log("Failed to clear temporary web data"); }; 
asyncOperation.start(); 
```

### start
Starts the `MSAppAsyncOperation`.

```javascript
var retval = MSAppAsyncOperation.start();
```

#### Parameters
None.

#### Return value
None.

#### Properties
`error` property

|Type | Description |
|:---- |:--- |
|DOMError | Represents an error in `MSAppAsyncOperation`.

```javascript
p = object.error
```

`oncomplete` property

|Type | Description |
|:---- |:--- |
|EventHandler | Property for setting an event handler on completion of `MSAppAsyncOperation`.

```javascript
p = object.oncomplete
```

`onerror` property

|Type | Description |
|:---- |:--- |
|EventHandler | Property for setting an event handler upon an error during `MSAppAsyncOperation`.

```javascript
p = object.onerror
```

`readyState` property

|Type | Description |
|:---- |:--- |
|Number | Represents the state of the asynchronous operation within the Windows app using JavaScript. Values include: Started[0], Completed[1], Error[2].

```javascript
p = object.readyState
```

`result` property

|Type | Description |
|:---- |:--- |
|Any |Represents the result of `MSAppAsyncOperation`.

```javascript
p = object.result
```
