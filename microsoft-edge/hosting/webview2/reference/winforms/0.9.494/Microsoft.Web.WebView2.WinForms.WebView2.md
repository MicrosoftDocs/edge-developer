---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/28/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---

# Microsoft.Web.WebView2.WinForms.WebView2 class 

Namespace: Microsoft.Web.WebView2.WinForms\
Assembly: Microsoft.Web.WebView2.WinForms.dll

```
class Microsoft.Web.WebView2.WinForms.WebView2
  : public Control
```

Control to embed WebView2 in WinForms.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[CoreWebView2](#corewebview2) | The underlying CoreWebView2.
[Source](#source) | The Source property is the URI of the top level document of the WebView2.
[CanGoForward](#cangoforward) | Returns true if the webview can navigate to a next page in the navigation history via the GoForward method.
[CanGoBack](#cangoback) | Returns true if the webview can navigate to a previous page in the navigation history via the GoBack method.
[WebView2](#webview2) | Create a new WebView2 WinForms control.
[InitializeAsync](#initializeasync) | Initialize the underlying CoreWebView2.
[ExecuteScriptAsync](#executescriptasync) | Executes the provided script in the top level document of the WebView2.
[Reload](#reload) | Reload the top level document of the WebView2.
[GoForward](#goforward) | Navigate to the next page in navigation history.
[GoBack](#goback) | Navigate to the previous page in navigation history.
[NavigateToString](#navigatetostring) | Render the provided HTML as the top level document of the WebView2.
[Stop](#stop) | Stop any in progress navigation in the WebView2.
[OnVisibleChanged](#onvisiblechanged) | Protected VisibilityChanged handler.
[OnEnter](#onenter) | Protected focus handler.
[OnSizeChanged](#onsizechanged) | Protected SizeChanged handler.

## Members

### Properties

#### CoreWebView2 

The underlying CoreWebView2.

> public CoreWebView2 [CoreWebView2](#corewebview2)

Use this property to perform more operations on the WebView2 content than is exposed on the WebView2. This value is null until it is initialized. You can force the underlying CoreWebView2 to initialize via the InitializeAsync method.

#### Source 

The Source property is the URI of the top level document of the WebView2.

> public Uri [Source](#source)

Setting the Source is equivalent to calling CoreWebView2.Navigate. If the underlying CoreWebView2 is not yet initialized, this property is "about:blank". If the property is set to a non-absolute URI or null, the property remains unchanged. See CoreWebView2.Navigate documentation for more information.

#### CanGoForward 

Returns true if the webview can navigate to a next page in the navigation history via the GoForward method.

> public bool [CanGoForward](#cangoforward)

This is equivalent to the CanGoForward property on the CoreWebView2. If the underlying CoreWebView2 is not yet initialized, this property is false. See CoreWebView2.CanGoForward documentation for more information.

#### CanGoBack 

Returns true if the webview can navigate to a previous page in the navigation history via the GoBack method.

> public bool [CanGoBack](#cangoback)

This is equivalent to the CanGoBack property on the CoreWebView2. If the underlying CoreWebView2 is not yet initialized, this property is false. See CoreWebView2.CanGoBack documentation for more information.

#### WebView2 

Create a new WebView2 WinForms control.

> public [WebView2](#webview2)()

After construction the CoreWebView2 property is null. Call InitializeAsync to initialize the underlying CoreWebView2.

#### InitializeAsync 

Initialize the underlying CoreWebView2.

> public async Task [InitializeAsync](#initializeasync)(CoreWebView2Environment environment)

If provided a CoreWebView2Environment, then WebView2 will create the underlying CoreWebView2 from that environment. Otherwise it's created from a default CoreWebView2Environment.

#### ExecuteScriptAsync 

Executes the provided script in the top level document of the WebView2.

> public async Task< string > [ExecuteScriptAsync](#executescriptasync)(string script)

This is equivalent to the ExecuteScriptAsync method on the CoreWebView2. If the underlying CoreWebView2 is not yet initialized, this method throws an InvalidOperationException. See CoreWebView2.ExecuteScriptAsync documentation for more information.

#### Reload 

Reload the top level document of the WebView2.

> public void [Reload](#reload)()

This is equivalent to the Reload method on the CoreWebView2. If the underlying CoreWebView2 is not yet initialized, this method throws an InvalidOperationException. See CoreWebView2.Reload documentation for more information.

#### GoForward 

Navigate to the next page in navigation history.

> public void [GoForward](#goforward)()

This is equivalent to the GoForward method on the CoreWebView2. If the underlying CoreWebView2 is not yet initialized, this method does nothing. See CoreWebView2.GoForward documentation for more information.

#### GoBack 

Navigate to the previous page in navigation history.

> public void [GoBack](#goback)()

This is equivalent to the GoBack method on the CoreWebView2. If the underlying CoreWebView2 is not yet initialized, this method does nothing. See CoreWebView2.GoBack documentation for more information.

#### NavigateToString 

Render the provided HTML as the top level document of the WebView2.

> public void [NavigateToString](#navigatetostring)(string htmlContent)

This is equivalent to the NavigateToString method on the CoreWebView2. If the underlying CoreWebView2 is not yet initialized, this method throws an InvalidOperationException. See CoreWebView2.NavigateToString documentation for more information.

#### Stop 

Stop any in progress navigation in the WebView2.

> public void [Stop](#stop)()

This is equivalent to the Stop method on the CoreWebView2. If the underlying CoreWebView2 is not yet initialized, this method does nothing. See CoreWebView2.Stop documentation for more information.

#### OnVisibleChanged 

Protected VisibilityChanged handler.

> protected override void [OnVisibleChanged](#onvisiblechanged)(EventArgs e)

#### OnEnter 

Protected focus handler.

> protected override void [OnEnter](#onenter)(EventArgs e)

#### OnSizeChanged 

Protected SizeChanged handler.

> protected override void [OnSizeChanged](#onsizechanged)(EventArgs e)

