---
ms.assetid: 17cc3cdf-868b-48de-b4b2-978bdf4a33cd
description: Learn how the sandbox attribute can enhance security by preventing untrusted content from performing actions that can lead to potentially malicious behavior.
title: Dev guide - Sandbox
author: abbycar
ms.author: abigailc
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Sandbox


Microsoft Edge provides support for the [`sandbox`](http://go.microsoft.com/fwlink/p/?LinkID=233101) attribute. The `sandbox` attribute enables security restrictions for [`iframe`](https://msdn.microsoft.com/library/ms535258) elements that contain untrusted content. These restrictions enhance security by preventing untrusted content from performing actions that can lead to potentially malicious behavior.

The `sandbox` attribute is specified in the [HTML5](https://www.w3.org/TR/html5/embedded-content-0.html#attr-iframe-sandbox) specification.

## Enabling sandbox

To enable these restrictions, specify the [`sandbox`](http://go.microsoft.com/fwlink/p/?LinkID=233101) attribute, as shown in the following code example:

```html
<iframe sandbox src="frame1.html"></iframe>
```


When the `sandbox` attribute is specified for an `iframe` element, the content in the [`iframe`](https://msdn.microsoft.com/library/ms535258) element is said to be *sandboxed*.

## Behavior restricted by sandbox

When `iframe` elements are sandboxed, the following actions are restricted:

* Sandboxed content cannot open pop-up windows or new browser windows. Methods that open pop-up windows (such as [`createPopup()`](http://go.microsoft.com/fwlink/p/?LinkId=233330), [`showModalDialog()`](http://go.microsoft.com/fwlink/p/?LinkId=233331), [`showModelessDialog()`](https://msdn.microsoft.com/library/ms536761), and [`window`](http://go.microsoft.com/fwlink/p/?LinkID=209636).[`open()`](http://go.microsoft.com/fwlink/p/?LinkId=233333)), fail silently.
* Links cannot be opened in new windows.
* Sandboxed content is considered to be from a unique domain, which prevents access to APIs that are protected by the [same-origin policy](http://go.microsoft.com/fwlink/p/?LinkID=141677) such as cookies, local storage, and the Document Object Model (DOM) of other documents.
* The top window cannot be navigated by sandboxed content.
* Sandboxed content cannot submit form data.
* Plugins ([`object`](https://msdn.microsoft.com/library/ms535859), [`applet`](https://msdn.microsoft.com/library/ms535183), [`embed`](https://msdn.microsoft.com/library/ms535245), or [`frame`](https://msdn.microsoft.com/library/ms535250)) do not instantiate.
* Automatic element behavior is disabled, including [`meta`](https://msdn.microsoft.com/library/ms535853) element refresh, [`autofocus`](http://go.microsoft.com/fwlink/p/?LinkId=233308) for [`input`](https://msdn.microsoft.com/library/ms535260) controls, and [`autoplay`](http://go.microsoft.com/fwlink/p/?LinkId=233334) for [`audio`](http://go.microsoft.com/fwlink/p/?LinkID=197449) and [`video`](http://go.microsoft.com/fwlink/p/?LinkID=197448) elements.
* Selected features proprietary to Windows Internet Explorer are disabled for sandboxed content, including HTML Components (HTCs), binary behaviors, databinding, and [`window.external`](http://go.microsoft.com/fwlink/p/?LinkId=233335).

## Customizing sandbox restrictions


With Microsoft Edge, you are able to customize selected sandbox restrictions. To do so, specify one or more of the following customization flags as the value of the [`sandbox`](http://go.microsoft.com/fwlink/p/?LinkID=233101) attribute.


Flag | Description
:------ | :-------
allow-scripts | Sandboxed content is allowed to run JavaScript.
allow-forms | Sandboxed content can submit forms.
allow-same-origin | Sandboxed content can access APIs protected by the same-origin policy, including local storage, cookies, [`XMLHttpRequest`](http://go.microsoft.com/fwlink/p/?LinkId=233336), and documents hosted on the same domain.
allow-top-navigation | Sandboxed content is allowed to change the location of the top window.
allow-popups | Sandboxed content is allowed to open popup windows.


The following example shows a sandboxed [`iframe`](https://msdn.microsoft.com/library/ms535258) element that uses customization flags to customize the restrictions for the content in the element.

```html
<iframe sandbox="allow-forms allow-same-origin" src="frame1.html"></iframe>
```

This example permits form submission and access to local data sources. Be aware that multiple customization flags are separated by spaces.

## API reference

[sandbox](https://msdn.microsoft.com/library/Hh772930)

## Specification

[HTML5](https://www.w3.org/TR/html5/embedded-content-0.html#attr-iframe-sandbox)

