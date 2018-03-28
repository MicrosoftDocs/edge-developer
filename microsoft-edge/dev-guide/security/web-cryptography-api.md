---
ms.assetid: 3b54954e-eec2-462f-bdd4-51158f62dcc6
description: Learn about what the Web Cryptography API does and the updates new to Microsoft Edge.
title: Dev guide - Web Cryptography API
author: libbymc
ms.author: libbymc
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Web Cryptography API

The [Web Cryptography API](http://go.microsoft.com/fwlink/p/?linkid=301307) provides basic cryptographic operations in web applications, such as hashing, signature generation and verification, and encryption and decryption.  The [Web Cryptography API](http://go.microsoft.com/fwlink/p/?linkid=301307)  allows a number of important security scenarios for web apps. These range from robust user/service authentication, document and code signing, and the confidentiality and integrity of communications all without requiring a secure connection (through SSL or similar protocol).

## Web Cryptography in Microsoft Edge

Since its initial implementation in Internet Explorer 11, the World Wide Web Consortium (W3C) specification has changed from an event-driven model to a new model based on JavaScript Promises. The Microsoft Edge implementation of the [Web Cryptography API](http://go.microsoft.com/fwlink/p/?linkid=301307) has been updated for the [*Last Call Working Draft* version](http://www.w3.org/TR/2014/WD-WebCryptoAPI-20140325/) of the specification. These updates include changes to support the non-prefixed, JavaScript [*Promise*](http://msdn.microsoft.com/library/ie/dn802826(v=vs.94).aspx)-based version of the API. The previous (IE11) implementation of the Web Cryptography API (that makes use of the [**KeyOperation**](https://msdn.microsoft.com/library/dn302314(v=vs.85).aspx) and [**CryptoOperation**](https://msdn.microsoft.com/library/dn280996(v=vs.85).aspx) interfaces) is still supported in the IE11 document mode behind the *ms* prefix.

For more info, see [Web Cryptography updates](https://msdn.microsoft.com/library/dn904640(v=vs.85).aspx).

The following cryptographic algorithms are supported in IE11 and later:

* [AES-CBC](http://go.microsoft.com/fwlink/p/?LinkID=330634): for [`encrypt`](https://msdn.microsoft.com/library/dn302329(v=vs.85).aspx), [`decrypt`](https://msdn.microsoft.com/library/dn302326(v=vs.85).aspx), [`generateKey`](https://msdn.microsoft.com/library/dn302331(v=vs.85).aspx), [`importKey`](https://msdn.microsoft.com/library/dn302332(v=vs.85).aspx), and [`exportKey`](https://msdn.microsoft.com/library/dn302330(v=vs.85).aspx).
* [AES-GCM](http://go.microsoft.com/fwlink/p/?LinkID=330635): for [`encrypt`](https://msdn.microsoft.com/library/dn302329(v=vs.85).aspx), [`decrypt`](https://msdn.microsoft.com/library/dn302326(v=vs.85).aspx), [`generateKey`](https://msdn.microsoft.com/library/dn302331(v=vs.85).aspx), [`importKey`](https://msdn.microsoft.com/library/dn302332(v=vs.85).aspx), and [`exportKey`](https://msdn.microsoft.com/library/dn302330(v=vs.85).aspx). 
* [AESKW](http://go.microsoft.com/fwlink/p/?LinkID=330636): for [`generateKey`](https://msdn.microsoft.com/library/dn302331(v=vs.85).aspx), and the *keyEncryptionKey* parameter of [`wrapKey`](https://msdn.microsoft.com/library/dn302337(v=vs.85).aspx) and [`unwrapKey`](https://msdn.microsoft.com/library/dn302335(v=vs.85).aspx) (for details, see [KeyWrap Proposal](http://go.microsoft.com/fwlink/p/?LinkID=330637)).
* [RSAES-PKCS1-v1_5](http://go.microsoft.com/fwlink/p/?LinkID=330638): for [`encrypt`](https://msdn.microsoft.com/library/dn302329(v=vs.85).aspx), [`decrypt`](https://msdn.microsoft.com/library/dn302326(v=vs.85).aspx), [`generateKey`](https://msdn.microsoft.com/library/dn302331(v=vs.85).aspx), [`importKey`](https://msdn.microsoft.com/library/dn302332(v=vs.85).aspx), and [`exportKey`](https://msdn.microsoft.com/library/dn302330(v=vs.85).aspx).
* [RSA-OAEP](http://go.microsoft.com/fwlink/p/?LinkID=330639): for [`encrypt`](https://msdn.microsoft.com/library/dn302329(v=vs.85).aspx), [`decrypt`](https://msdn.microsoft.com/library/dn302326(v=vs.85).aspx), [`generateKey`](https://msdn.microsoft.com/library/dn302331(v=vs.85).aspx), [`importKey`](https://msdn.microsoft.com/library/dn302332(v=vs.85).aspx), and [`exportKey`](https://msdn.microsoft.com/library/dn302330(v=vs.85).aspx).
* [RSASSA-PKCS1-v1_5](http://go.microsoft.com/fwlink/p/?LinkID=330640): for [`sign`](https://msdn.microsoft.com/library/dn302334(v=vs.85).aspx), [`verify`](https://msdn.microsoft.com/library/dn302336(v=vs.85).aspx), [`generateKey`](https://msdn.microsoft.com/library/dn302331(v=vs.85).aspx), [`importKey`](https://msdn.microsoft.com/library/dn302332(v=vs.85).aspx), and [`exportKey`](https://msdn.microsoft.com/library/dn302330(v=vs.85).aspx).
* [HMAC](http://go.microsoft.com/fwlink/p/?LinkID=330641): for [`sign`](https://msdn.microsoft.com/library/dn302334(v=vs.85).aspx), [`verify`](https://msdn.microsoft.com/library/dn302336(v=vs.85).aspx), [`generateKey`](https://msdn.microsoft.com/library/dn302331(v=vs.85).aspx), [`importKey`](https://msdn.microsoft.com/library/dn302332(v=vs.85).aspx), and [`exportKey`](https://msdn.microsoft.com/library/dn302330(v=vs.85).aspx).
* [SHA1/SHA-256/SHA-512/SHA-384](http://go.microsoft.com/fwlink/p/?LinkID=330642): for [`digest`](https://msdn.microsoft.com/library/dn302328(v=vs.85).aspx) and are the only supported hashes for the other algorithms.

In IE11 and later, [Web Cryptographic](http://www.w3.org/TR/WebCryptoAPI/) keys can be stored in [IndexedDB](https://msdn.microsoft.com/library/hh673548(v=vs.85).aspx) and if so, are bound to a specific user and device. That is, keys stored in IndexedDB cannot be used by different users or moved to different computers. A browser-specific key is used to encrypt all Web Cryptographic keys before storing them in IndexedDB, as follows:

  1. A key-wrapping key is derived from the browser-specific key using a randomly generated [salt](http://en.wikipedia.org/wiki/Salt_(cryptography)) (see [SP 800-108](http://csrc.nist.gov/publications/nistpubs/800-108/sp800-108.pdf)).
  2. The key-wrapping key is used to encrypt the Web Cryptographic key using AES Key Wrap and AES-GCM.
  3. The result of the prior operation is stored on disk in the IndexedDB store.

The browser-specific key is randomly generated the first time a key is stored in IndexedDB. Clearing the browser’s cache will delete this browser-specific key from the system, permanently preventing any previously stored keys in IndexedDB from being accessed. The next time a key is stored in IndexedDB, a new browser-specific key will be generated, and the above process will be repeated. The browser-specific key is stored on disk and is protected by [DPAPI](https://msdn.microsoft.com/library/ms995355.aspx) and, optionally, by mechanisms such as [BitLocker Drive Encryption](https://msdn.microsoft.com/library/windows/hardware/gg487306.aspx).

## API Reference 
[Web Cryptography](https://msdn.microsoft.com/library/dn302338(v=vs.85).aspx)

## Specification
[Web Cryptography API](http://go.microsoft.com/fwlink/p/?linkid=301307)


