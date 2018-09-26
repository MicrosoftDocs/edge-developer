---
title: What's new in EdgeHTML 17
description: This guide provides an overview of the developer features and standards included in Microsoft Edge.
author: mattwojo
ms.author: mattwoj
ms.date: 07/05/2018
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Microsoft Edge Developer Guide

> [!TIP]
> We've [partnered](https://blogs.windows.com/msedgedev/2017/10/18/documenting-web-together-mdn-web-docs/) with other browsers and the web community in adopting [MDN Web Docs](https://developer.mozilla.org/) as the definitive place for useful, unbiased, browser-agnostic documentation for current and emerging standards-based web technologies. You can find details about EdgeHTML API support directly in each page of the [MDN web reference library](https://developer.mozilla.org/docs/Web). Visit Microsoft Edge's [Platform status](https://developer.microsoft.com/microsoft-edge/platform/status/?q=edge%3AShipped%20edge%3APrefixed%20edge%3A'Preview%20Release) for the latest features supported in Microsoft Edge. 


## What's new in EdgeHTML 18

Here's a list of the new and updated features shipped in the current release of the Microsoft Edge platform, as of the [Windows 10 April 2018 Update](https://blogs.windows.com/windowsexperience/2018/04/27/make-the-most-of-your-time-with-the-new-windows-10-update/) (04/2018, Build 17134). For changes in specific [Windows Insider](https://insider.windows.com/) Preview builds, see the [Microsoft Edge Changelog](https://developer.microsoft.com/microsoft-edge/platform/changelog/) and [What's New in EdgeHTML](./dev-guide/whats-new.md).

Here's the permalink for the following list of changes: [https://aka.ms/devguide_edgehtml_18](https://aka.ms/devguide_edgehtml_18).

## New and updated features 

### Web Authentication

Microsoft Edge now supports the Web Authentication API (aka WebAuthN), based on the [W3C specification](https://w3c.github.io/webauthn/), enabling better, more secure user experiences and a passwordless experience on the web. Users can now sign in with their face, fingerprint, PIN, or portable [FIDO2](https://fidoalliance.org/fido2/) devices, leveraging strong public-key credentials instead of passwords.

[Windows Hello](https://www.microsoft.com/en-us/windows/windows-hello) allows users to authenticate without a password on any Windows 10 device, using biometrics—face and fingerprint recognition—or a PIN number to sign in to web sites. With Windows Hello face recognition, users can log in to sites that support Web Authentication in seconds, with just a glance.

![Animation demonstrating web authentication using Windows Hello](/media/windowshello.gif)

For more information, head over to the blog post [Introducing Web Authentication in Microsoft Edge](https://blogs.windows.com/msedgedev/2018/07/30/introducing-web-authentication-microsoft-edge).

### WebView control 

Improvements in the [WebView control for Windows 10 apps](https://docs.microsoft.com/microsoft-edge/hosting/webview)

### CSS masking

EdgeHTML 18 improves support for [CSS Masking](https://developer.mozilla.org/docs/Web/CSS/CSS_Masking). This implementation further supports the CSS [mask-image](https://developer.mozilla.org/docs/Web/CSS/mask-image) property with improved WebKit support, including  `webkitMask`, `webkitMaskComposite`, `webkitMaskImage`, `webkitMaskPosition`, `webkitMaskPositionX`, `webkitMaskPositionY`, `webkitMaskRepeat`, and `webkitMaskSize` .  
Check the "Enable CSS Masking" flag in about:flags to being experimenting!


### WebDriver Improvements 

It's now easier than ever to automate testing in Microsoft Edge using WebDriver. WebDriver is now a [Windows Feature on Demand](https://docs.microsoft.com/windows-hardware/manufacture/desktop/features-on-demand-v2--capabilities), so you no longer need to match the build/branch/flavor manually when installing WebDriver, your WebDriver will automatically update to match any new Windows 10 updates. The Microsoft Edge WebDriver implementation also matches the latest [W3C Recommendation spec](https://www.w3.org/TR/webdriver/) with major new improvements for automated testing on the web.  This is a huge step forward for web site and web app testing, as well as cross-browser interoperability initiatives like [web-platform-tests](https://github.com/web-platform-tests).

To install WebDriver, just turn on Developer Mode in Windows 10 Settings, or install the standalone feature under the “optional features” Settings page. 
For more information, check out the [WebDriver announcement on the Windows Blog site](https://blogs.windows.com/msedgedev/2018/06/14/webdriver-w3c-recommendation-feature-on-demand).


### DevTools

Visit [DevTools in the latest Windows 10 update (EdgeHTML 18)](./devtools-guide/whats-new.md) for more details.

## New APIs in EdgeHTML 18

Here's the full list of new APIs in EdgeHTML 18. They are listed in the format of [interface name].[api name].

> [!NOTE] 
> Although the following APIs are exposed in the DOM, the end-to-end behavior of some might still be in development. Refer to  [Microsoft Edge platform status](https://developer.microsoft.com/en-us/microsoft-edge/platform/status/) for the official word on feature support.

<iframe height='580' scrolling='no' title='New APIs in EdgeHTML 17' src='//codepen.io/MSEdgeDev/embed/da5b2bef3dfdcb6fea3ac324dc434a62/?height=608&theme-id=23401&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/MSEdgeDev/pen/da5b2bef3dfdcb6fea3ac324dc434a62//'>New APIs in EdgeHTML 18</a> by MSEdgeDev (<a href='https://codepen.io/MSEdgeDev'>@MSEdgeDev</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>

## Previous EdgeHTML releases

[EdgeHTML 13 / Windows build 10586 (11/2015)](https://aka.ms/devguide_edgehtml_13)

[EdgeHTML 14 / Windows build 14393 (8/2016)](https://aka.ms/devguide_edgehtml_14)

[EdgeHTML 15 / Windows build 15063 (4/2017)](https://aka.ms/devguide_edgehtml_15)

[EdgeHTML 16 / Windows build 16299 (10/2017)](https://aka.ms/devguide_edgehtml_16)

[EdgeHTML 17 / Windows build 17134 (04/2018)](https://aka.ms/devguide_edgehtml_17)

