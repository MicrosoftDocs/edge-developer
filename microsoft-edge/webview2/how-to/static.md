---
description: Learn how to statically link the WebView2 loader library.
title: How to statically link the WebView2 loader library
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/06/2021
ms.topic: how-to
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---
# Statically link the WebView2 loader library

You may want to distribute your application with a single executable file, instead of a package of many files. To create a single executable file, or to reduce the size of your package, you should statically link the WebView2Loader files. The WebView2 SDK contains a header file, `WebView2Loader.dll`, and the `IDL` file. `WebView2Loader.dll` is a small component that helps apps locate the WebView2 Runtime, or Microsoft Edge preview channels, on the device.

For apps that don't want to ship a `WebView2Loader.dll`, complete the following steps.

1.  Open the `.vcxproj` project file for your app in a text editor, such as Visual Studio Code.

    > [!NOTE]
    > The `.vcproj` project file may be a hidden file, meaning it does not display in Visual Studio.  Use the command-line to find hidden files.

1.  Locate the section in the code where you include the WebView2 NuGet package target files.  The location in the code is highlighted in the following figure.

    :::image type="complex" source="./media/insert-here.png" alt-text="Project Files code snippet" lightbox="./media/insert-here.png":::
       Project Files code snippet
    :::image-end:::

1.  Copy the following code snippet and paste it where the `Microsoft.Web.WebView2.targets` is included.

    ```xaml
    <PropertyGroup>
        <WebView2LoaderPreference>Static</WebView2LoaderPreference>
    </PropertyGroup>
    ```

    :::image type="complex" source="./media/static-lib.png" alt-text="Inserted code snippet" lightbox="./media/static-lib.png":::
       Inserted code snippet
    :::image-end:::

1.  Compile and run your app.


<!-- ====================================================================== -->
## See also

*  [WebView2 Get Started Guides](../index.md#get-started)
*  [WebView2Samples repo](https://github.com/MicrosoftEdge/WebView2Samples) - a comprehensive example of WebView2 capabilities.
*  [WebView2 API reference](../webview2-api-reference.md)
*  [See also](../index.md#see-also) in _Introduction to Microsoft Edge WebView2_.
