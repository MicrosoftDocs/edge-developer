# Get started with WebView2 on HoloLens 2

To integrate WebView2 into your HoloLens 2 application, follow these steps to ensure your project is configured correctly for the UWP platform.

## Prerequisites

- Visual Studio 2019 or later.
- Windows 10 SDK (version 10.0.19041.0 or later).
- HoloLens 2 device or emulator.

## Implementation

To initialize the WebView2 control in your HoloLens 2 project, use the following implementation pattern in your `WebViewBrowser.cs` file:

```csharp
using Microsoft.Web.WebView2.Core;
using Microsoft.Web.WebView2.UWP;

public async void InitializeWebView(WebView2 webView)
{
    await webView.EnsureCoreWebView2Async();
    webView.CoreWebView2.Settings.IsScriptEnabled = true;
    webView.CoreWebView2.Navigate("https://www.microsoft.com");
}
```

## Key Considerations

1. **Input Handling**: Ensure your application handles gaze and gesture input appropriately, as WebView2 on HoloLens 2 maps these to standard mouse/touch events.
2. **Performance**: WebView2 consumes significant resources. Limit the number of active WebView instances to maintain a stable frame rate.
3. **Deployment**: Ensure your project is set to the ARM64 architecture when deploying to a physical HoloLens 2 device.