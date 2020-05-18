---
description: Distribution options when releasing an app using Microsoft Edge WebView2
title: Distribution of Microsoft Edge WebView2 Application
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/19/2020
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, wpf apps, wpf, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# Distribution of Applications using WebView2 

The WebView2 control utilizes the Microsoft Edge \(Chromium\) browser. When distributing your app, ensure that the Edge browser is installed on all user machines where your application runs. The WebView2 control uses the most stable version of the browser that’s installed on a machine. For example, you may have Stable, Beta, Dev, and Canary installed at the same time, and in this situation, WebView2 controls run in the Stable channel. Ensure you review the release notes to ensure that the version of the browser installed on your machines that run your WebView2 controls meet the minimum version requirements.

## Roadmap

We recognize that the Edge browser may not be available on all user machines where your application will run, or that installing Edge browser throughout your organization may be difficult. To ensure your application runs on all machines, independent of the installed Microsoft Edge browser, we will release the Microsoft Edge WebView2 Runtime. Additionally, we will update WebView2 to search for the stable version of the runtime before searching for pre-release versions of the installed browser.

There will be support for two distribution options using the WebView2 Runtime: evergreen, and fixed version.

Evergreen will be the recommended distribution model for most developers. In this mode, updates are pushed automatically to the WebView2 Runtime without additional effort from your application. The evergreen model ensures that your app is taking advantage of the latest features and security updates for hosted web content.

For constrained environments there will be support for a fixed version distribution model. In this model, your application selects and packages a specific version of WebView2. Updates to the WebView version do not occur automatically, and will be the responsibility of the application. The fixed version model is beneficial when you need to control the browser version, and when your application updates. 

### Microsoft Edge WebView2 Runtime

The Microsoft Edge WebView2 Runtime will package the browser binaries optimized for use by WebView2 applications. It will function standalone or side-by-side with a client Edge Browser installed. Installing the runtime once will support many WebView2 applications running on the client machine. Installing the runtime will not appear as a browser to end-users, and will have no desktop shortcuts, start menu entry point, or protocol registration.

An application utilizing WebView2 must ensure the installation of the Microsoft Edge WebView2 Runtime has occurred. At application install time you should check the current install status, if the WebView2 Runtime is not available, you should chain the Microsoft Edge WebView2 Runtime Installer to your install flow.
