---
title: WebView2 in HoloLens 2 Unity apps
description: WebView2 in HoloLens 2 Unity apps.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 01/24/2025
---
# WebView2 in HoloLens 2 Unity apps

This article is for developers using WebView2 in immersive HoloLens 2 Unity applications.

> [!IMPORTANT]
> WebView2 on Hololens 2 continues to be available.  However, support for WebView2 on Hololens 2 is discontinued; there are no planned bug fixes or content updates, and technical support has ended.  Applications that use WebView2 on Hololens 2 are not guaranteed to continue to work.

WebView2 on HoloLens 2 and the WebView plugin for Unity are both in Preview and are subject to change before general availability.  

WebView2 only works on HoloLens 2 devices running the Windows 11 update.  For more information, see [Update HoloLens 2](/hololens/hololens-update-hololens).

For WebView2-enabled 2D applications on HoloLens 2, see [Get started with WebView2 in WinUI 2 (UWP) apps](../get-started/winui2.md).


<!-- ====================================================================== -->
## Limitations and known issues

When developing a HoloLens 2 Unity app with WebView2, be aware of some limitations and known issues:

* **Pop-ups**: Pop-ups don't work well within WebView2 inside Unity apps on HoloLens 2, but they work fine in 2D XAML apps on the device.  Avoid pop-ups and use alternative techniques or UI designs, such as custom pop-up-like elements within the WebView using HTML, CSS, and JavaScript.

* **New windows**: WebView2 instances on HoloLens 2 navigate within the same window by default, unlike on Desktop.  Follow this default behavior for a better user experience.  Additionally, the DevTools window cannot be launched.

* **Enterprise authentication**: Automatic Single Sign-On (SSO) leveraging OS-level tokens is currently not supported in WebView2 on HoloLens 2.  Users can still sign in by providing credentials, except for cases requiring device-level authentication. Cookie storage works as expected.

* **User interactions**: Unlike native HoloLens 2 slates, WebView2 is best interacted with by using far-interaction hand rays.  Touch-to-swipe and scroll interactions might not be supported.

* **Performance**: Complex websites with heavy use of JavaScript or advanced rendering may impact system performance or the host application's framerate.  For general performance-related limitations and recommendations, see [Understanding performance for mixed reality](/windows/mixed-reality/develop/advanced-concepts/understanding-performance-for-mixed-reality) in the mixed reality documentation.  Also see [Performance optimization](#performance-optimization), below.


<!-- ====================================================================== -->
## Performance optimization

Optimizing the performance of WebView2 in your HoloLens 2 Unity app is crucial for a smooth user experience.  Here are some recommendations:

* **Limit the number of WebView2 instances**: We suggest using only one instance of WebView2 within a Unity app.  Reuse the same instance or tear down and create a new one as needed.  Keep in mind that removing the WebView prefab from the scene might not destroy the underlying WebView2 instance.  You must call the `Destroy()` method on the game object to destroy it properly.

* **Apply general Unity optimization techniques**: To optimize WebView2 performance, use the standard Unity optimization approaches, such as occlusion culling or limiting the update rate.  For more information, see [Performance recommendations for Unity](/windows/mixed-reality/develop/unity/performance-recommendations-for-unity?tabs=openxr) in the mixed reality documentation.

* **Profile and monitor WebView2 performance**: There are several ways to profile the performance of a HoloLens 2 Unity application:

  * **Unity Profiler**: A built-in tool in Unity that allows you to measure and optimize the performance of your application on various platforms, including HoloLens 2.

  * **Visual Profiler**: A feature of the Mixed Reality Toolkit that provides an in-application view of your application's performance.

  * **PIX**: A performance tuning and debugging tool for Windows that can also be used to profile Unity applications on HoloLens 2.


<!-- ====================================================================== -->
## Navigation

Some navigation methods are demonstrated in [Step 7 - Extending WebView2 functionality](../get-started/hololens2.md#step-7---extending-webview2-functionality) in _Get started with WebView2 in HoloLens 2 Unity apps (Preview)_.  The present section expands on that demonstration.

See also:
* [WebView2 API Reference](../webview2-api-reference.md)
* [API Reference for Mixed Reality WebView plugin](/windows/mixed-reality/develop/advanced-concepts/webview2-unity-plugin) - for HoloLens 2 in the WebView2 Unity plugin.<!-- toc title: WebView2 Unity Plugin API -->


<!-- ------------------------------ -->
#### IWebView interface

<!-- [IWebView::Load method]()-->

The `IWebView` interface exposes a few methods, events, and properties related to page navigation.  The main functionality exposed here is the ability to navigate to a given URL, by using `Load(Uri url)`:

```C#
public interface IWebView
{
    // Non-navigation methods are removed for clarity.

    event WebView_OnNavigated Navigated;

    Uri Page { get; }

    void Load(Uri url);

    void Reload(bool ignoreCache);
}
```


<!-- ------------------------------ -->
#### IWithBrowserHistory interface

The `IWithBrowserHistory` interface exposes a few methods and events related to page navigation.  This mainly allows developers to navigate forward and backward, as you would expect with a typical web-browsing experience:

```C#
public interface IWithBrowserHistory : IWebView
{
    // Non-navigation methods are removed for clarity.

    event WebView_OnCanGoForwardUpdated CanGoForwardUpdated;

    event WebView_OnCanGoBackUpdated CanGoBackUpdated;

    void GoBack();

    void GoForward();
}
```


<!-- ------------------------------ -->
#### SetVirtualHostNameToFolderMapping and SetVirtualHostMapping

The [CoreWebView2.SetVirtualHostNameToFolderMapping Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.setvirtualhostnametofoldermapping) enables mapping between a virtual host name and a folder path, making it accessible to websites using that host name.  This method maps a local domain name to a local folder, so that the WebView2 control loads content from the specified local folder when attempting to access a resource for that domain.

The WebView plugin for Unity exposes this functionality through the `IWithVirtualHost` interface, which has a single method, `SetVirtualHostMapping(string hostName, string folderPath)`:

```C#
public interface IWithVirtualHost : IWebView
{
    void SetVirtualHostMapping(string hostName, string folderPath);
}
```

To use the `SetVirtualHostMapping` method, set `hostName` to any valid URL conforming string, such as `webview2.sample`.  `folderPath` can be an absolute path or a path relative to the application's working directory, such as `Assets\Html`.

Assuming we have an HTML file called `demo.html` under `Assets\Html`, the following code snippet demonstrates loading `demo.html` by using the WebView plugin for Unity:

```C#
using Microsoft.MixedReality.WebView;

public class WebViewExample : MonoBehaviour
{
    private void Start()
    {
        var webViewComponent = gameObject.GetComponent<WebView>();

        webViewComponent.GetWebViewWhenReady((IWebView webView) =>
        {
            ((IWithVirtualHost)webView).SetVirtualHostMapping("webview2.sample", "Assets\\Html");

            // Navigate to our local content.
            webViewComponent.Load(new Uri("http://webview2.sample/demo.html"));
        });
    }
}
```


<!-- ====================================================================== -->
## Input

There are various ways to handle input in Unity for mixed reality applications.

* [Input overview — MRTK2](/windows/mixed-reality/mrtk-unity/mrtk2/features/input/overview) - recommended for Mixed Reality Toolkit 2.8 applications.
* [Input — MRTK3](/windows/mixed-reality/mrtk-unity/mrtk3-input/packages/input/overview) - recommended for Mixed Reality Toolkit 3 applications.
* [Unity Input System](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.5/manual/index.html)

Regardless of the input system used within your Unity application, interop code between the various application input events and the WebView plugin for Unity is required.  This means translating those events (such as Pointer events) into a `WebViewMouseEventData` object and then forwarding those events to the plugin via the `IWithMouseEvent` interface:

```C#
public interface IWithMouseEvents : IWithInputEvents
{
    void MouseEvent(WebViewMouseEventData mouseEvent);
}
```

WebView2 is unaware of Unity's input system and likely has a different coordinate system than your Unity scene.  As a result, when there is a pointer-down event, its coordinates must be translated into the coordinate system of the WebView2 control.  Additionally, the pointer-down event needs to be converted into an appropriate `WebViewMouseEventData` event type.

Simple example:

```C#
using Microsoft.MixedReality.WebView;

public class WebViewExample : MonoBehaviour, IPointerDownHandler
{
    // WebView setup steps skipped for brevity

    public void OnPointerDown(PointerEventData eventData)
    {
        IWithMouseEvents mouseEventsWebView = webView as IWithMouseEvents;

        // Call hypothetical function which converts the event's x, y into the WebView2's coordinate space.
        var hitCoord = ConvertToWebViewSpace(eventData.position.x, eventData.position.y);

        WebViewMouseEventData mouseEvent = new WebViewMouseEventData
        {
            X = hitCoord.x,
            Y = hitCoord.y,
            Type = WebViewMouseEventData.EventType.MouseDown,
            Button = WebViewMouseEventData.MouseButton.ButtonLeft,
            TertiaryAxisDeviceType = WebViewMouseEventData.TertiaryAxisDevice.PointingDevice
        };

        // Propagate the event to the WebView plugin.
        mouseEventsWebView.MouseEvent(mouseEvent);
    }
}
```

In the above example, pointer-down events are converted into `WebViewMouseEventData` objects and forwarded to the WebView plugin for Unity.  It is essentially converted into a mouse-down event.  In order to create mouse click events, pointer-up events would need to be handled in a similar fashion.

In the example above, `ConvertToWebViewSpace` is intentionally not implemented.


<!-- ====================================================================== -->
## See also
<!-- all links in article -->

* [Get started with WebView2 in WinUI 2 (UWP) apps](../get-started/winui2.md)

API Reference:
* [WebView2 API Reference](../webview2-api-reference.md)
* [CoreWebView2.SetVirtualHostNameToFolderMapping Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.setvirtualhostnametofoldermapping)

Hololens docs:
* [Update HoloLens 2](/hololens/hololens-update-hololens)

Mixed Reality docs:
* [Understanding performance for mixed reality](/windows/mixed-reality/develop/advanced-concepts/understanding-performance-for-mixed-reality)
* [Performance recommendations for Unity](/windows/mixed-reality/develop/unity/performance-recommendations-for-unity?tabs=openxr)
* [API Reference for Mixed Reality WebView plugin](/windows/mixed-reality/develop/advanced-concepts/webview2-unity-plugin)
* [Input overview — MRTK2](/windows/mixed-reality/mrtk-unity/mrtk2/features/input/overview)
* [Input — MRTK3](/windows/mixed-reality/mrtk-unity/mrtk3-input/packages/input/overview)

Unity docs:
* [Unity Input System](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.5/manual/index.html)
