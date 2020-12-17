---
description: Host web content in your Windows 10 app with the WebView (EdgeHTML) control
title: Microsoft Edge WebView for Windows 10 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: x-ms-webview, MSHTMLWebViewElement, webview, windows 10 apps, uwp, edge
ms.date: 12/02/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# WebView (EdgeHTML) for Windows 10 apps  

[!INCLUDE [deprecation-note](../includes/deprecation-note.md)]  

The WebView (EdgeHTML) control enables you to host web content in your Windows 10 app.  

You can use it as a XAML element (for [Universal Windows Platform (UWP) apps](/uwp/api/Windows.UI.Xaml.Controls.WebView) and [Windows Forms and WPF desktop applications](/windows/communitytoolkit/controls/wpf-winforms/webview)), or an HTML element (x-ms-webview)/DOM object (MSHTMLWebViewElement) for JavaScript-based Windows 10 apps, as described here.  

|  |  |  
|:--- |:--- |  
| [**Events**](#events) | [departingFocus](#departingfocus), [MSWebViewContainsFullScreenElementChanged](#mswebviewcontainsfullscreenelementchanged), [MSWebViewContentLoading](#mswebviewcontentloading), [MSWebViewDOMContentLoaded](#mswebviewdomcontentloaded), [MSWebViewFrameContentLoading](#mswebviewframecontentloading), [MSWebViewFrameDOMContentLoaded](#mswebviewframedomcontentloaded), [MSWebViewFrameNavigationCompleted](#mswebviewframenavigationcompleted), [MSWebViewFrameNavigationStarting](#mswebviewframenavigationstarting), [MSWebViewLongRunningScriptDetected](#mswebviewlongrunningscriptdetected), [MSWebViewNavigationCompleted](#mswebviewnavigationcompleted), [MSWebViewNavigationStarting](#mswebviewnavigationstarting), [MSWebViewNewWindowRequested](#mswebviewnewwindowrequested), [MSWebViewPermissionRequested](#mswebviewpermissionrequested), [MSWebViewProcessExited](#mswebviewprocessexited), [MSWebViewWebResourceRequested](#mswebviewwebresourcerequested), [MSWebViewScriptNotify](#mswebviewscriptnotify), [MSWebViewUnsafeContentWarningDisplaying](#mswebviewunsafecontentwarningdisplaying), [MSWebViewUnsupportedUriSchemeIdentified](#mswebviewunsupportedurischemeidentified), [MSWebViewUnviewableContentIdentified](#mswebviewunviewablecontentidentified) |  
| [**Methods**](#methods) | [addWebAllowedObject](#addweballowedobject), [buildlocalStreamUri](#buildlocalstreamuri), [capturePreviewToBlobAsync](#capturepreviewtoblobasync), [captureSelectedContentToDataPackageAsync](#captureselectedcontenttodatapackageasync), [invokeScriptAsync](#invokescriptasync), [getDeferredPermissionRequests](#getdeferredpermissionrequests), [getDeferredPermissionRequestById](#getdeferredpermissionrequestbyid), [goBack](#goback), [goForward](#goforward), [navigate](#navigate), [navigateFocus](#navigatefocus), [navigateTolocalStreamUri](#navigatetolocalstreamuri), [navigateToString](#navigatetostring), [navigateWithHttpRequestMessage](#navigatewithhttprequestmessage), [refresh](#refresh), [stop](#stop) |  
| [**Properties**](#properties) | [canGoBack](#cangoback), [canGoForward](#cangoforward), [containsFullScreenElement](#containsfullscreenelement), [documentTitle](#documenttitle), [height](#height), [process](#process), [settings](#settings), [src](#src), [width](#width) |  

## Syntax  

```javascript
// Feature detect for webview support
if (MSHTMLWebViewElement) {
    let wv = document.createElement('x-ms-webview'); // Use CSS to set width, height and other styles
    wv.navigate("https://www.example.com");
    document.body.appendChild(wv);
}
```  

## Remarks  

### WebView versus iframe  

Like a standard HTML [iframe](https://developer.mozilla.org/docs/Web/HTML/Element/iframe) element, you can use WebView to load remote pages over HTTP and local pages (*ms-appx-web:///*) from your app package.  However, the WebView can also:  

*   Load pages and resources from your [ApplicationData](/uwp/api/Windows.Storage.ApplicationData) (local, roaming, temp) folders (*ms-appdata:///*) and [in-memory streams](/microsoft-edge/hosting/webview#buildlocalstreamuri) (*ms-local-stream:///*)  
*   Provide browser-like controls: for going [back](#goback) and [forward](#goforward) in navigation history, and [stopping](#stop) or [refreshing](#refresh) the current page.  
*   [Capture screenshots of web content](#capturepreviewtoblobasync) making it easy to implement the Windows 10 app [Share](/windows/uwp/app-to-app/share-data) contract.  
*   Allow JavaScript code running within a webview to raise custom events ([MSWebViewScriptNotify](#mswebviewscriptnotify)) to your app, and allow your app to run JavaScript within the webview ([invokeScriptAsync](#invokescriptasync)).  
*   Provide you with fine-tuned webview content events:  
    
    | WebView DOM event | Description |  
    |:--- |:--- |  
    | [MSWebViewNavigationStarting](#mswebviewnavigationstarting) | Indicates the WebView is starting to navigate.  |  
    | [MSWebViewContentLoading](#mswebviewcontentloading) | The HTML content is downloaded and is being loaded into the control.  |  
    | [MSWebViewDOMContentLoaded](#mswebviewdomcontentloaded) | Indicates that the main DOM elements have finished loading.  |  
    | [MSWebViewNavigationCompleted](#mswebviewnavigationcompleted) | Indicates the navigation is complete, and all media elements are rendered.  |  
    | [MSWebViewUnviewableContentIdentified](#mswebviewunviewablecontentidentified) | The WebView found the content was not HTML.  |  
    | [UnsafeContentWarningDisplaying](#mswebviewunsafecontentwarningdisplaying) | The WebView shows a warning page for content that was reported as unsafe by Windows *SmartScreen Filter*.  |  
    
    ...including corresponding [events](#events) for iframe content loaded within a WebView (such as [MSWebView**Frame**NavigationStarting](#mswebviewframenavigationstarting) and so on). 

### Printing  

When a Windows app using JavaScript is printed, the `<x-ms-webview>` tags are transformed into `<iframe>` tags before printing.  Besides the normal difference between displaying on screen and rendered for print, CSS styles applied to `<iframe>` elements are then applicable to the `<iframe>` transformed from `<x-ms-webview>`.  

### Service workers  

Starting with the [Windows 10 October 2018 Update](/windows/uwp/whats-new/windows-10-build-17763) (EdgeHTML 18), [service workers are supported in the WebView control](/microsoft-edge/dev-guide#service-workers) (in addition to the Microsoft Edge browser and Windows 10 apps with JavaScript).  

x64 app architectures require Neutral (Any CPU) or x64 packages, as service workers are not supported in WoW64 processes.  (To conserve disk space, the WoW version of the required DLLs are not natively included in Windows.)  

### Threading model and reliability  

Creating a WebView via `document.createElement("x-ms-webview")` or via `<x-ms-webview>` markup creates a WebView on a new unique thread in the app's process.  Running on a new unique thread means that long running script from one WebView is unable to hang the app or other WebViews.  Creating a WebView via the `new MSWebView()` constructor creates a WebView in a separate WebView process.  Running in a unique process means that in addition to protection from long running script, the app is also protected from web content that crashes the WebView process.  Creating a WebView via the [`MSWebViewProcess.createWebViewAsync`](./MSWebViewProcess.md#createwebviewasync) method also creates a WebView in a separate process but allows the caller more control over process settings and grouping WebViews in WebView processes.  See `MSWebViewProcess` for more information.  

### WinRT API access  

A UWP app may allow HTML documents inside WebViews to have access to WinRT APIs.  This is via the WindowsRuntimeAccess attribute of the Rule child elements of the ApplicationContentUriRules element of the AppxManifest.xml of the UWP app.  Set WindowsRuntimeAccess to 'all' and HTML documents with matching URIs will be allowed to use WinRT.  This is the same as providing WinRT access to HTML content in JavaScript UWP apps so see [Call WinRT APIs from your PWA](/microsoft-edge/progressive-web-apps-edgehtml/windows-features#call-winrt-apis-from-your-pwa) for more information.  

UI related WinRT APIs may not work when called from a WebView running on its own thread but may work when called from a WebView running in a separate WebView process.  When using a WebView on its own unique thread, that thread is not the app's view thread.  Some UI related WinRT APIs require to be called from the app's view thread.  WebViews created in a separate WebView process do run on a view thread and so should not face the same restrictions as WebView's running on their own unique thread.  If you have trouble with UI related WinRT APIs in a WebView ensure that you're using a WebView in its own WebView process as described above.  

### AppCache storage limitations  

Applications using JavaScript support of the Application Cache API (or AppCache), as defined in the [HTML5 specification](https://go.microsoft.com/fwlink/p/?LinkId=228542), to create offline web applications must observe available storage limitations.  This is especially true in devices with limited memory space.  The practical limits on the size of the AppCache are always a function of available disk storage space.  The general guidelines are shown below.  

| Volume size |AppCache per domain | AppCache per user |  
|:--- |:--- |:--- |  
| Up to 4GB | 10MB | 50MB |  
| 4GB to 16GB | 50MB | 500MB |  
| 16GB to 32 GB | 50MB | 1GB |  

All Windows 10 apps are intended to use the same AppCache quota model, so the available disk storage limitation applies to both desktop and phone apps.  The is also a hard limit after pages loaded inside **WebView** together have consumed 1 GB of *AppCache* space; requests for additional *AppCache* storage above this limit will be denied.  

For more information, see the [HTML WebView control sample](https://go.microsoft.com/fwlink/p/?linkid=309825) and the JSBrowser's [Harnessing the WebView control](https://github.com/MicrosoftEdge/JSBrowser#harnessing-the-webview-control) documentation.  

## Events  

### departingFocus  

Indicates focus departing from the **webview** into the app.  Fires when the webview's top level document calls window.departFocus.  The FocusNavigationEvent args in the departingFocus event match the parameters provided to departFocus except the origin parameters are translated from the webview's document's coordinate space to the coordinate space of the webview host document.  See the webview.navigateFocus method and corresponding window navigatingFocus event for transferring focus from host to webview.  See the [TVJS's Direction Navigation library](https://github.com/Microsoft/TVHelpers/wiki/Using-DirectionalNavigation) for an example of an implementation of focus navigation via keyboard or gamepad that handles this event.  

```javascript
function handler(eventInfo) { /* Your code */ }
 
// addEventListener syntax
webview.addEventListener("departingFocus", handler);
webview.removeEventListener("departingFocus", handler);
```  

#### Event Information  

|            |      |  
|:--- |:--- |  
| **Interface** | [FocusNavigationEvent](./FocusNavigationEvent.md) |  
| **Synchronous** | Yes |   
| **Bubbles** | Yes |  
| **Cancelable** | No |  

### MSWebViewContainsFullScreenElementChanged  

Occurs when the status changes of whether or not the **webview** currently contains a full screen element.  Use the containsFullScreenElement property to the current value.  Full screen element here refers to the [Fullscreen DOM APIs](https://developer.mozilla.org/docs/Web/API/Fullscreen_API) notion of a full screen element via the element.requestFullScreen and document.exitFullScreen DOM functions.  

```javascript
function containsFullScreenElementChangedHandler(eventInfo) {
    const applicationView = Windows.UI.ViewManagement.ApplicationView.getForCurrentView();
    if (webview.containsFullScreenElement) {
        webview.classList.add("fullscreen"); // Have the webview fill the app view
        applicationView.tryEnterFullScreenMode(); // Have the app view fill the screen
    }
    else {
        webview.classList.remove("fullscreen"); // Return webview to normal
        applicationView.exitFullScreenMode(); // Return app view to normal
    }
}

// addEventListener syntax
webview.addEventListener("MSWebViewContainsFullScreenElementChanged", containsFullScreenElementChangedHandler);
webview.removeEventListener("MSWebViewContainsFullScreenElementChanged", containsFullScreenElementChangedHandler);
```  

#### Event Information  

|  |  |  
|:--- |:--- |  
| **Interface** | **Event** |  
| **Synchronous** | Yes |  
| **Bubbles** | No |   
| **Cancelable** | No |  

### MSWebViewContentLoading  

Indicates that the HTML content is downloaded and is being loaded into the control.  

```javascript
function handler(eventInfo) { /* Your code */ }
 
// addEventListener syntax
webview.addEventListener("MSWebViewContentLoading", handler);
webview.removeEventListener("MSWebViewContentLoading", handler);
```  

#### Event Information  

|  |  |  
|:--- |:--- |  
| **Interface** | [NavigationEvent](./NavigationEvent.md) |  
| **Synchronous** | Yes  |  
| **Bubbles** | No |   
| **Cancelable** | No |  

### MSWebViewDOMContentLoaded  

Indicates that the main DOM elements have finished loading.  

```javascript
function handler(eventInfo) { /* Your code */ }
 
// addEventListener syntax
webview.addEventListener("MSWebViewDOMContentLoaded", handler);
webview.removeEventListener("MSWebViewDOMContentLoaded", handler);
```  

#### Event Information  

|  |  |  
|:--- |:--- |  
| **Interface** | [NavigationEvent](./NavigationEvent.md) |  
| **Synchronous** |Yes |  
| **Bubbles** | No |  
| **Cancelable** | No |   

### MSWebViewFrameContentLoading  

Indicates that the HTML content downloaded and is being loaded into the `<iframe>` control.  

```javascript
function handler(eventInfo) { /* Your code */ }
 
// addEventListener syntax
webview.addEventListener("MSWebViewFrameContentLoading", handler);
webview.removeEventListener("MSWebViewFrameContentLoading", handler);
```  

#### Event Information  

|  |  |  
|:--- |:--- |  
| **Interface** | [NavigationEvent](./NavigationEvent.md) |  
| **Synchronous** | Yes |  
| **Bubbles** | No |  
| **Cancelable** | No |   

### MSWebViewFrameDOMContentLoaded  

Indicates that the main DOM elements have finished loading in the `<iframe>`.  

```javascript
function handler(eventInfo) { /* Your code */ }
 
// addEventListener syntax
webview.addEventListener("MSWebViewFrameDOMContentLoaded", handler);
webview.removeEventListener("MSWebViewFrameDOMContentLoaded", handler);
```  

#### Event Information  

|  |  |  
|:--- |:--- |  
| **Interface** | [NavigationEvent](./NavigationEvent.md) |  
| **Synchronous** | Yes |  
| **Bubbles** | No |   
| **Cancelable** | No |  

### MSWebViewFrameNavigationCompleted  

Indicates the navigation is complete, and all media elements are rendered in the `<iframe>`.  

```javascript
function handler(eventInfo) { /* Your code */ }
 
// addEventListener syntax
webview.addEventListener("MSWebViewFrameNavigationCompleted", handler);
webview.removeEventListener("MSWebViewFrameNavigationCompleted", handler);
```  

#### Event Information  

|  |  |  
|:--- |:--- |  
| **Interface** | [NavigationCompletedEvent](./NavigationCompletedEvent.md) |  
| **Synchronous** | Yes |  
| **Bubbles** | No |   
| **Cancelable** | No |  

### MSWebViewFrameNavigationStarting  

Indicates a `<iframe>` within a **webview** is starting to navigate.  This is fired before obtaining any resources from the network for the navigation.  The navigation is not started until all MSWebViewFrameNavigationStarting event handlers complete.  This event is cancellable via calling `eventArgs.preventDefault()`.  If cancelled, the WebView will not perform the navigation.  

```javascript
function frameNavigationStartingHandler(navigationEventArgs) {
    // Cancel all navigations that don't meet some criteria.
    if (!navigationEventArgs.uri.startsWith("https://example.com/")) {
        navigationEventArgs.preventDefault();
    }
}
 
// addEventListener syntax
webview.addEventListener("MSWebViewFrameNavigationStarting", frameNavigationStartingHandler);
webview.removeEventListener("MSWebViewFrameNavigationStarting", frameNavigationStartingHandler);
```  

#### Event Information  

|  |  |
|:--- |:--- |  
| **Interface** | [NavigationEvent](./NavigationEvent.md) |  
| **Synchronous** | Yes |  
| **Bubbles** |No |   
| **Cancelable** | Yes |  

### MSWebViewLongRunningScriptDetected  

Occurs periodically during uninterrupted script execution in the **webview**, letting you halt the script.  

```javascript
function handler(eventInfo) {
    const stopPageScriptThreshold = 5 * 1000;
    if (eventInfo.executionTime > stopPageScriptThreshold) {
        eventInfo.stopPageScriptExecution = true; // Stop the long running script if it goes over our threshold
    }
}
 
// addEventListener syntax
webview.addEventListener("MSWebViewLongRunningScriptDetected", handler);
webview.removeEventListener("MSWebViewLongRunningScriptDetected", handler);
```  

#### Event Information  

|  |  |  
|:--- |:--- |  
| **Interface** | [LongRunningScriptDetectedEvent](./LongRunningScriptDetectedEvent.md) |  
| **Synchronous** | Yes |  
| **Bubbles** | No |  
| **Cancelable** | No |  

### MSWebViewNavigationCompleted  

Indicates the navigation is complete, and all media elements are rendered or there was a navigation error.  Check the event args isSuccess property to tell if the navigation was successful and the webErrorStatus property for details on the navigation error.  Navigation errors can occur before obtaining any content from the network for instance if the hostname of a URI does not resolve in which case the MSWebViewNavigationStarted event will fire followed by the MSWebViewNavigationCompleted event.  Navigation errors may also occur after receiving an error page from a web server, for instance a 404 page from an HTTP server in which case all navigation events will fire, MSWebViewNavigationStarting, MSWebViewContentLoading, MSWebViewDOMContentLoaded, and then MSWebViewNavigationCompleted.  To provide an app navigation error page for cases where the web server hasn't provided an error page, you'll need to check if MSWebViewContentLoading hasn't fired for a failed navigation which indicates there is no server provided error page.  

```javascript
let hasContent = false;
webview.addEventListener("MSWebViewNavigationStarting", () => { hasContent = false; });
webview.addEventListener("MSWebViewContentLoading", () => { hasContent = true; });

webview.addEventListener("MSWebViewNavigationCompleted", navigationCompletedEventArgs => {
    // Navigation failures may or may not come after getting an error page from the web server.
    // We keep track of the ContentLoading event with hasContent to tell if we have an error page from the server.
    // So we only navigate to our app error page when there's no server provided error page.
    if (!navigationCompletedEventArgs.isSuccess && !hasContent) {
        // Pass our failed URI and error details in the query and the error page script can read it as appropriate.
        webview.navigate("ms-appx-web:///appErrorPage.html?" + 
            "uri=" + encodeURIComponent(navigationCompletedEventArgs.uri) + "&" +
            "webErrorStatus=" + encodeURIComponent(navigationCompletedEventArgs.webErrorStatus));
    }
});
 
// addEventListener syntax
webview.addEventListener("MSWebViewNavigationCompleted", handler);
webview.removeEventListener("MSWebViewNavigationCompleted", handler);
```  

#### Event Information  

|  |  |  
|:--- |:--- |  
| **Interface** | [NavigationCompletedEvent](./NavigationCompletedEvent.md) |  
| **Synchronous** | Yes |  
| **Bubbles** | No |   
| **Cancelable** | No |  

### MSWebViewNavigationStarting  

Indicates the **webview** is starting to navigate.  This is fired before obtaining any resources from the network for the navigation.  The navigation is not started until all MSWebViewNavigationStarting event handlers complete.  This event is cancellable via calling `eventArgs.preventDefault()`.  If cancelled, the WebView will not perform the navigation.  

```javascript
function navigationStartingHandler(navigationEventArgs) {
    // Cancel all navigations that don't meet some criteria.
    if (!navigationEventArgs.uri.startsWith("https://example.com/")) {
        navigationEventArgs.preventDefault();
    }
}
 
// addEventListener syntax
webview.addEventListener("MSWebViewNavigationStarting", navigationStartingHandler);
webview.removeEventListener("MSWebViewNavigationStarting", navigationStartingHandler);
```  

#### Event Information  

|  |  |  
|:--- |:--- |  
| **Interface** | [NavigationEvent](./NavigationEvent.md) |  
| **Synchronous** | No |  
| **Bubbles** | Yes |   
| **Cancelable** | Yes |  

### MSWebViewNewWindowRequested  

Raised when content in **webview** is trying to open a new window.  If the event isn't cancelled the webview will launch the URI of the new window request in the user's default browser.  

```javascript
function handler(eventInfo) {
    // Prevent the webview from opening URIs in the default browser.
    eventInfo.preventDefault();
    
    // Only allow https://example.com/ to open new windows.
    if (eventInfo.referer === "https://example.com/") {
        // Perform some custom handling of the URI.
        openUri(eventInfo.uri);
    }
}
 
// addEventListener syntax
webview.addEventListener("MSWebViewNewWindowRequested", handler);
webview.removeEventListener("MSWebViewNewWindowRequested", handler);
```  

#### Event Information  

|  |  |  
|:---|:--- |  
| **Interface** | [NavigationEventWithReferrer](./NavigationEventWithReferrer.md) |  
| **Synchronous** | Yes |  
| **Bubbles** | No |  
| **Cancelable** | Yes |  

### MSWebViewPermissionRequested  

Indicates that content in the **webview**  is trying to access functionality (such as geolocation, or pointer lock access) that normally requires end-user permissions.  If no event handler is registered or if the event handler doesn't call eventArgs.permissionRequest.allow(), defer(), or deny(), then by default the permission request will be denied.  If you need to decide if permission is allowed or denied asynchronously for instance if you need to prompt the user, use eventArgs.permissionRequest.defer().  The permission request will be deferred until you use webview.getDeferredPermissionRequestById or webview.getDeferredPermissionRequests and call allow() or deny() on the DeferredPermissionRequest with the corresponding id value.  

```javascript
webview.addEventListener("MSWebViewPermissionRequested", permissionRequestedEventArgs => {
    const permissionRequest = permissionRequestedEventArgs.permissionRequest;
    switch (permissionRequest.type) {
        case "geolocation":
        case "media":
        case "pointerlock":
        case "webnotifications":
        case "screen":
        case "immersiveview":
            if (permissionRequest.uri.startsWith("https://www.example.com/")) {
                // Implicitly trust particular URI
                permissionRequest.allow();
            }
            else if (permissionRequest.uri.startsWith("https://")) {
                // Defer the request so we can ask the user to allow or deny the request
                permissionRequest.defer();
                // Later we'll need to use webview.getDeferredPermissionRequestById for this
                // request and call allow or deny.
                promptUserForDeferredPermissionRequest(
                    permissionRequest.id,
                    permissionRequest.uri,
                    permissionRequest.type);
            }
            else {
                // Implicitly deny non-https URIs
                permissionRequest.deny();
            }
            break;

        case "unlimitedIndexedDBQuota":
        default:
            permissionRequest.deny();
            break;
    }
});

// addEventListener syntax
webview.addEventListener("MSWebViewPermissionRequested", handler);
webview.removeEventListener("MSWebViewPermissionRequested", handler);
```  

#### Event Information  

|  |  |  
|:--- |:--- |  
| **Interface** | [PermissionRequestedEvent](./PermissionRequestedEvent.md) |  
| **Synchronous** | Yes |  
| **Bubbles** | No |   
| **Cancelable** | No |  

### MSWebViewProcessExited  

Indicates that the **webview** component process crashsed.  This is only relevant for an out-of-process WebView.  See the Remarks section for how to create an out-of-process WebView as opposed to an in-process WebView.  After this event fires, the corresponding WebView is put into a crashed state.  Calling most WebView specific methods or accessing most WebView specific properties on a crashed WebView will throw an exception.  To recover from this event, remove the crashed WebView from the DOM and replace it with a new WebView.  

```javascript
function handler(eventInfo) { /* Your code */ }
 
// addEventListener syntax
webview.addEventListener("MSWebViewProcessExited", handler);
webview.removeEventListener("MSWebViewProcessExited", handler);
```  

#### Event Information  

|  |  |  
|:--- |:--- |  
| **Interface** | **Event** |  
| **Synchronous** | Yes |  
| **Bubbles** | No |   
| **Cancelable** | No |  

### MSWebViewWebResourceRequested  

Raised when a page inside the **webview** element requests a resource.  

```javascript
// A handler that completes synchronously with a custom HTTP response built from a string.
function handlerWithSyncString(webResourceRequestedEventArgs) {
    // Only provide custom HTTP responses for particular HTTP requests
    if (webResourceRequestedEventArgs.args.request.requestUri.absoluteUri === "https://www.bing.com/") {
        const Http = Windows.Web.Http;
        // Create the custom response using a string
        webResourceRequestedEventArgs.args.response = new Http.HttpResponseMessage(Http.HttpStatusCode.ok);
        webResourceRequestedEventArgs.args.response.content = new Http.HttpStringContent("<H1>Example</H1>");
    }
});

// A more complicated handler that completes asynchronously with a custom HTTP response built from a stream.
function handlerWithAsyncStream(webResourceRequestedEventArgs) {
    // Only provide custom HTTP responses for particular HTTP requests
    if (webResourceRequestedEventArgs.args.request.requestUri.absoluteUri === "https://www.bing.com/") {
        // Take a deferral on the WebResourceRequested event so that we can create the custom HTTP response asynchronously.
        const deferral = webResourceRequestedEventArgs.args.getDeferral();

        // Use fetch to get a Blob of the content of the URI
        fetch("ms-appx:///replacement.html").then(fetchResponse => {
            return fetchResponse.blob();
        }).then(fetchResponseBlob => {
            const Http = Windows.Web.Http;
            webResourceRequestedEventArgs.args.response = new Http.HttpResponseMessage(
                Http.HttpStatusCode.ok);

            // Use Blob.msDetachStream to convert the Blob to a Windows.Storage.Streams.IInputStream
            webResourceRequestedEventArgs.args.response.content = new Http.HttpStreamContent(
                fetchResponseBlob.msDetachStream());

        }).finally(() => {
            // Use a finally call to complete the deferral so even if there is an error we will unblock the event.
            deferral.complete();
        });
    }
});
 
// addEventListener syntax
webview.addEventListener("MSWebViewWebResourceRequested", handler);
webview.removeEventListener("MSWebViewWebResourceRequested", handler);
```  

#### Event Information  

|  |  |  
|:--- |:--- |  
| **Interface** | [WebResourceRequestedEvent](./WebResourceRequestedEvent.md) |  
| **Synchronous** | Yes |  
| **Bubbles** | No |   
| **Cancelable** | No |  


### MSWebViewScriptNotify  

Raised when a page inside the **webview** element calls the **window.external.notify** method.  The window.external.notify method is only available to documents with URIs that match rules in the app's manifest's ApplicationContentUriRules or that has been programatically allowed via setting webview.settings.isScriptNotifyAllowed to true.  Additionally window.external.notify is only available to the webview's top level document.  

```javascript
webview.addEventListener("MSWebViewScriptNotify", eventInfo => {
    console.log("The URI " + eventInfo.callingUri + 
        " has sent notification " + eventInfo.value);
});

// Allow the next URI to which we navigate access to window.external.notify
webview.settings.isScriptNotifyAllowed = true;
webview.navigate("https://example.com/");

webview.addEventListener("MSWebViewNavigationCompleted", () => {
    // Inject script to the webview that will send a notification back.
    const asyncOp = webview.invokeScriptAsync("eval", "window.external.notify('example notification')");
    asyncOp.start();
});
```  

#### Event Information  

|  |  |  
|:--- |:--- |  
| **Interface** | [ScriptNotifyEvent](./ScriptNotifyEvent.md) |  
| **Synchronous** | Yes |  
| **Bubbles** | No |  
| **Cancelable** | No |  

### MSWebViewUnsafeContentWarningDisplaying  

Occurs when the **webview** shows a warning page for content that was reported as unsafe by SmartScreen Filter.  

```javascript
function handler(eventInfo) { /* Your code */ }
 
// addEventListener syntax
webview.addEventListener("MSWebViewUnsafeContentWarningDisplaying", handler);
webview.removeEventListener("MSWebViewUnsafeContentWarningDisplaying", handler);
```  

#### Event Information  

|  |  |  
|:--- |:--- |  
| **Interface** | **Event** |  
| **Synchronous** |Yes |  
| **Bubbles** |No |   
| **Cancelable** |No |  

### MSWebViewUnsupportedUriSchemeIdentified  

Raised when there is navigation to an Uniform Resource Identifier (URI) that the **webview** does not support.  

```javascript
function handler(eventInfo) { /* Your code */ }
 
// addEventListener syntax
webview.addEventListener("MSWebViewUnsupportedUriSchemeIdentified", handler);
webview.removeEventListener("MSWebViewUnsupportedUriSchemeIdentified", handler);
```  

#### Event Information  

|  |  |  
|:--- |:--- |  
| **Interface** | [NavigationEvent](./NavigationEvent.md) |  
| **Synchronous** | Yes |  
| **Bubbles** | No |  
| **Cancelable** | Yes |  

### MSWebViewUnviewableContentIdentified  

Raised when the **webview** attempts to navigate to web content with an unsupported content type.  For example, PDFs are currently not supported by webview and navigations to PDF documents will not navigate and instead raise this event.  

```javascript
function handler(args) {
    if (args.mediaType === "application/pdf") {
        Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(args.uri));
    }
}

// addEventListener syntax
webview.addEventListener("MSWebViewUnviewableContentIdentified", handler);
webview.removeEventListener("MSWebViewUnviewableContentIdentified", handler);
```  

#### Event Information  

|  |  |  
|:--- |:--- |  
| **Interface** | [UnviewableContentIdentifiedEvent](./UnviewableContentIdentifiedEvent.md) |  
| **Synchronous** | Yes |  
| **Bubbles** | No |   
| **Cancelable** | No |  

## Methods  

### addWebAllowedObject  

Adds a native Windows Runtime object as a global parameter to the top-level document inside of a **webview**.  

The object is not injected into the current document, but rather the next top-level document to which the webview navigates.  The object is injected before any script from the HTML document runs so you can rely on the object in your document's global script.  

You should use addWebAllowedObject either during an MSWebViewNavigationStarting event or before explicitly calling a navigate method.  In these cases the object is injected into the document of the corresponding navigation.  Calling it in some other context, you don't have a way to be certain into what document you'll inject your object.  

Calling addWebAllowedObject multiple times in a row will inject multiple objects into the document.  If you call it both before an explicit navigate call and then again during the corresponding MSWebViewNavigationStarting event, both calls will succeed and you'll have multiple objects injected.  If you call multiple times with the same name parameter, the last call wins and the previous calls with that name are ignored.  

If a navigate fails or is redirected, the addWebAllowedObject calls for that navigation are ignored.  If you want to handle redirects you can subscribe to the MSWebViewNavigationStarting event watch for redirects and call addWebAllowedObject again according to whatever criteria is appropriate for your application.  Similarly, once a document navigates away any objects injected via addWebAllowedObject for that document will not carry over to the next document and you'll need to explicitly call addWebAllowedObject if you want them to carry over.  

If you call addWebAllowedObject for a document that has no WinRT access otherwise, or if it has [AllowForWebOnly access via ApplicationContentUriRules](/uwp/schemas/appxpackage/uapmanifestschema/element-uap-rule) then the object will only be injected if the object has the Windows.Foundation.Metadata.AllowForWeb metadata attribute.  Otherwise injection will fail and an error will be reported to the JavaScript developer console.  If called on a document that has full WinRT access, then the object will be injected regardless of the AllowForWeb attribute.  

Additionally, the object must implement the IAgileObject interface.  This is because the XAML and HTML webview elements run on their app's ASTA view threads and the WebView's JavaScript thread is a different ASTA thread and we want to encourage app developers to ensure their object can run on the JavaScript thread without blocking the app view thread if possible.  

The name parameter must be a valid JavaScript property name otherwise the call will fail silently.  If the name is of a property that already exists on the global object then that property is overwritten if the property is configurable.  Non-configurable properties on the global object are not overwritten and the addWebAllowedObject call fails silently.  JavaScript properties created via addWebAllowedObject are writable, configurable, and enumerable.  

```javascript
let name = "exampleProperty";
webview.addWebAllowedObject(name, applicationObject);
webview.navigate("https://example.com/"); // applicationObject will be available as window.exampleProperty on https://example.com
```  

#### Parameters  

*name*  

*   Type: **String**  
*   The name of the object to expose to the document in the **webview**.  

*applicationObject*  

*   Type: **Object**  
*   The object to expose to the document in the **webview**.  

#### Return value  

This method does not return a value.  

#### Additional features and requirements  

|  |  |  
|:--- |:--- |  
| **Minimum supported client** | Windows 10 (Windows Store apps only) |    
| **Minimum supported server** | None supported |   
| **Minimum supported phone** | None supported |  

### buildLocalStreamUri  

Creates a URI that you can pass to [navigateToLocalStreamUri](#methods).  

```javascript
var string = webview.buildLocalStreamUri(contentIdentifier, relativePath);
```  

#### Parameters  

*contentIdentifier*  

*   Type: **String**  
*   A unique identifier for the content the URI is referencing.  This defines the root of the URI.  

*relativePath*  

*  Type: **String**  
*  The path to the resource, relative to the root.  

#### Return value  

Type: **String**  

The URI created by combining and normalizing the *contentIdentifier* and *relativePath*.  

#### Example  

The following example illustrates a typical use case.  

```javascript
var webview = document.createElement("x-ms-webview"); //Instantiate the webview element
var localStreamUri = webview.buildLocalStreamUri(contentIdentifier, relativePath); //Create URI to pass to navigateToLocalStreamUri method
webview.navigateToLocalStreamUri(localStreamUri, streamResolver); //Load the local web content 
```  

### capturePreviewToBlobAsync  

Creates an image of the current [webview element](./index.md) and write it to the specified image element.  

```javascript
var capturePreviewToBlobAsync = webview.capturePreviewToBlobAsync();
```  

#### Parameters  

This method has no parameters.  

#### Return value  

Type: **MSWebViewAsyncOperation**  

An **MSWebViewAsyncOperation** object that, when it completes, provides a **Blob** object that contains the image.  When using **capturePreviewToBlobAsync**, you need to define success and error handlers after defining the operation.  After applying the event handlers, call the start method on the [MSWebViewAsyncOperation](./MSWebViewAsyncOperation.md) object to execute the operation.  

### captureSelectedContentToDataPackageAsync  

> [!IMPORTANT]
> This method has been deprecated and has a known issue.  Avoid using this method in your production code.  

Asynchronously gets a [DataPackage](https://docs.microsoft.com/uwp/api/Windows.ApplicationModel.DataTransfer.DataPackage) that contains the selected content within the **webview**.  

```javascript
var msWebViewAsyncOperation = webview.captureSelectedContentToDataPackageAsync();
```  

#### Parameters  

This method has no parameters.  

#### Return value  

Type: **MSWebViewAsyncOperation**  

An **MSWebViewAsyncOperation** object that, when it completes, provides a [DataPackage](https://docs.microsoft.com/uwp/api/Windows.ApplicationModel.DataTransfer.DataPackage) object that contains the image.  When using **captureSelectedContentToDataPackageAsync**, you need to define success and error handlers after defining the operation.  After applying the event handlers, call the start method on the MSWebViewAsyncOperation object to execute the operation.  

```javascript
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

```javascript
webview.invokeScriptAsync(functionName, ...args)
```  

#### Parameters  

**functionName**  

*   Type: **String**  
*   The name of the function to invoke.  This is a property name on the global window object of the WebView's top level document.  This can be a built-in global function like eval or open, or it can be a script defined function on the global window object.  Only functions in the top level document of the WebView may be invoked.  

**args**  

*   Type: **String**  
*   Optional string parameters to pass to the invoked function.  After functionName, any additional parameters to invokeScriptAsync are strings passed to the invoked function.  

#### Return value  

Type: **MSWebViewAsyncOperation**  

When using **invokeScriptAsync**, you need to define success and error handlers after defining the operation.  After applying the event handlers, call **MSWebViewAsyncOperation.start** to execute the operation.  If the MSWebViewAsyncOperation's complete event fires then the MSWebViewAsyncOperation's result property is the string return value from invoking the function.  Using the invoked function's return value allows for the WebView content to communication synchronously back to the WebView host.  To instead have the WebView content communicate asynchronously back to the WebView host see the MSWebViewScriptNotify event.  If the function invoked throws an unhandled exception then the MSWebViewAsyncOperation's error event will fire.  

```javascript
const functionName = "eval";
const args = ["'Current URL: ' + document.location.href"];

const asyncOp = webview.invokeScriptAsync(functionName, ...args);

asyncOp.onerror = () => console.error("Error: " + asyncOp.error);
asyncOp.oncomplete = () => console.log("Result: " + asyncOp.result); // Logs 'Current URL: about:blank'
asyncOp.start();
```  

### getDeferredPermissionRequests  

Returns a list of deferred permission requests issued by content in the **webview** control.  

```javascript
var sequence<PermissionRequest> = x-ms-webview.getDeferredPermissionRequests();
```  

#### Parameters  

This method has no parameters.  

#### Return value  

Type: [DeferredPermissionRequest](./DeferredPermissionRequest.md)  

The specified deferred permission request.  

#### Additional features and requirements  

|  | |  
|:--- |:--- |  
| **Minimum supported client** | Windows 10 (Windows Store apps only) |  
| **Minimum supported server** | None supported |  
| **Minimum supported phone** | None supported |  


### getDeferredPermissionRequestById  

Returns the specified deferred permission request.  

```javascript
var deferredPermissionRequest = x-ms-webview.getDeferredPermissionRequestById(id);
```  

#### Parameters  

*id*  

*   Type: **unsigned long**  
*   The ID of the deferred permission request you wish to get.  

#### Return value  

Type: [DeferredPermissionRequest](./DeferredPermissionRequest.md)  

The specified deferred permission request.  

#### Additional features and requirements  

|  |  |  
|:--- |:--- |  
| **Minimum supported client** | Windows 10 (Windows Store apps only) |  
| **Minimum supported server** | None supported |  
| **Minimum supported phone** | None supported |  

### goBack  

Navigates the **webview** to the previous page in the navigation history.  

```javascript
webview.goBack();
```  

#### Parameters  

This method has no parameters.  

#### Return value  

This method does not return a value.  

### goForward  

Navigates the **webview** to the next page in the navigation history.  

```javascript
webview.goForward();
```  

#### Parameters  

This method has no parameters.  

#### Return value  

This method does not return a value.  

### navigate  

Loads the HTML content at the specified Uniform Resource Identifier (URI).  

```javascript
webview.navigate(uri);
```  

#### Parameters  

**uri**  

*   Type: **String**  
*   The URI to load.  

#### Return value  

This method does not return a value.  

### navigateFocus  

Navigates focus onto the **webview**.  Fires the webview's top level document's window's navigatingfocus event.  The FocusNavigationEvent args used in the navigatingfocus event match the parameters provided to navigateFocus except the origin parameters are translated from the host document's coordinate space to the coordinate space of the webview's top level document.  See the webview departingFocus event and corresponding window.departFocus method for transferring focus from the webview to the host.  See the [TVJS's Direction Navigation library](https://github.com/Microsoft/TVHelpers/wiki/Using-DirectionalNavigation) for an example of an implementation of focus navigation via keyboard or gamepad that uses this method.  

```javascript
const activeElementBounds = document.activeElement.getBoundingClientRect();
const origin = { 
    originLeft: activeElementBounds.left,
    originTop: activeElementBounds.top,
    originWidth: activeElementBounds.width,
    originHeight: activeElementBounds.height
};
webview.navigateFocus(navigationReason, origin);
```  

#### Parameters  

*navigationReason*  

*   Type: **String**  
*   The reason for the navigation.  The value should be either "left", "up", "right", or "down".  It is the direction in which focus is moving away from the currently focused element.  

*origin*  

*   Type: **Object**  
*   The origin of the navigation.  This is a JavaScript object with properties "originLeft", "originTop", "originWidth", and "originHeight".  These values should describe the position and size of the currently focused element away from which focus is moving.  

#### Return value  

This method does not return a value.  

### navigateToLocalStreamUri  

Loads local web content at the specified URI using a [**UriToStreamResolver**](/uwp/api/windows.web.iuritostreamresolver.uritostreamasync).  

```javascript
webview.navigateToLocalStreamUri(source, streamResolver); 
```  

#### Parameters  

*source*  

*   Type: **String**  
*   An ms-local-stream URI identifying the local HTML content to load.  Create this string using [**buildLocalStreamUri**](/uwp/api/windows.web.ui.iwebviewcontrol.buildlocalstreamuri).  

*streamResolver*  

*   Type: any  
*   A resolver that converts the URI into a stream to load.  

#### Return value  

This method does not return a value.  

### navigateToString  

Loads the specified HTML content as a new document.  

```javascript
webview.navigateToString(contents);
```  

#### Parameters  

*contents*  

*   Type: **String**  
*   The HTML content to display.  

#### Return value  

This method does not return a value.  

### navigateWithHttpRequestMessage  

Navigates the webview to a Uniform Resource Identifier (URI) with a POST request and HTTP headers.  

```javascript
webview.navigateWithHttpRequestMessage(requestMessage);
```  

#### Parameters  

*requestMessage*  

*   Type: **HttpRequestMessage**  
*   The details of the HTTP request.  

#### Return value  

This method does not return a value.  

#### Remarks  

> [!WARNING]
> If you add additional headers to this request, such as authentication credentials, remember that those headers will also be included with any subsequent child requests.  Use caution to prevent accidental disclosure of confidential or personal information.  

### refresh  

Reloads the current content in the **webview**.  

```javascript
webview.refresh();
```  

#### Parameters  

This method has no parameters.  

#### Return value  

This method does not return a value.  

### stop  

Halts the current **webview** navigation or download.  

```javascript
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

```javascript
var canGoBack = webview.canGoBack;
```  

#### Property value  

Type: **Boolean**  

**True** if the **webview** can navigate backward; otherwise, **false**.  

### canGoForward  

Gets a value that indicates whether the **webview** can navigate forward.  

This property is read-only.  

```javascript
var canGoForward = webview.canGoForward;
```  

#### Property value  

Type: **Boolean**  

**True** if the **webview** can navigate forward; otherwise, **false**.  

### containsFullScreenElement  

Gets a value that indicates whether the **webview** contains an element that supports full screen.  See the MSWebViewContainsFullScreenElementChanged event for more info.  

This property is read-only.  

```javascript
var containsFullScreenElement = webview.containsFullScreenElement;
```  

#### Property value  

Type: **Boolean**  

**True** if the **webview** contains an element that supports full screen; otherwise, **false**.  

### documentTitle  

Gets the title of the page currently displayed in the **webview**.  

This property is read-only.  

```javascript
var documentTitle = webview.documentTitle;
```  

#### Property value  

Type: **String**  

The page title.  

### height  

Gets or sets the height of the **webview**.  

```javascript
var height = webview.height;
webview.height = height;
```  

#### Property value  

Type: **Number**  

The height of the **webview**.  

### process  

Gets the **webview** process.  

This property is read-only.  

```javascript
var process = webview.process;
webview.process = process;
```  

#### Property value  

Type: [MSWebViewProcess](./MSWebViewProcess.md)  

### settings  

Gets a [MSWebViewSettings](./MSWebViewSettings.md) object that contains properties to enable or disable **webview** features.  

This property is read-only.  

```javascript
var settings = webview.settings;
webview.settings = settings;
```  

#### Property value  

Type: [MSWebViewSettings](./MSWebViewSettings.md)  

A [MSWebViewSettings](./MSWebViewSettings.md) object that contains properties to enable or disable **webview** features.  

### src  

Gets or sets the Uniform Resource Identifier (URI) source of the HTML content to display in the **webview** control.  

```javascript
var src = webview.src;
webview.src = src;
```  

#### Property value  

Type: **String**  

The URI source of the HTML content to display in the **webview** control.  

### width  

Gets or sets the width of the **webview**.  

```javascript
var width = webview.width;
webview.width = width;
```  

#### Property value  

Type: **Number**  

The width of the **webview**.  
