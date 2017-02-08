---
ms.assetid: c6608430-973e-40e9-9a9a-62a90b409ff4
description: Learn how to specify what information about a webpage should be passed in the HTTP header to any request sent from the page.
title: Dev guide - Meta referrer
author: libbymc
ms.author: libbymc
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Meta referrer

Microsoft Edge offers a meta [referrer](https://msdn.microsoft.com/library/ms534365(v=vs.85).aspx), `<meta name="referrer">`, to specify what information about a webpage should be passed in the HTTP header to any request sent from the page.  Traffic remains encrypted and all the benefits of HTTPS remain, but the passing of referral data can be controlled between HTTPS and HTTP sites.

```HTML
<head>
	<meta name="referrer" content="origin">
</head>
```

Developers can specify meta referrer behavior using one of the following content values:

Value | Description
:------------ | :-------------
default | Full URI if HTTP, blank if HTTPS.
never | Pass nothing.
origin | Pass the origin only.
always | Pass the full URI always.

## Meta Referrer Demo

Test the meta referrer tags by changing the values in the "Stuff for `<head>`" section of the "Settings" in this Codepen.

<div class="codepen-wrap"><p data-height="300" data-theme-id="23761" data-slug-hash="ONLMBa" data-default-tab="result" data-user="MicrosoftEdgeDocumentation" data-embed-version="2" data-editable="true" class="codepen">See this example by <a href="https://codepen.io/MicrosoftEdgeDocumentation">Microsoft Edge Docs</a> on <a href="https://codepen.io/MicrosoftEdgeDocumentation/pen/ONLMBa">CodePen</a>.</p></div><script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## API Reference
[Referrer property](https://msdn.microsoft.com/library/ms534365(v=vs.85).aspx)

## Specification
[Referrer Policy](https://w3c.github.io/webappsec-referrer-policy/)
