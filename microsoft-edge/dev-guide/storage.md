---
ms.assetid: 561da568-6562-439e-80c2-36ff4f97f84d
description: See guides about storing structued data and other storage mechanisms for data.
title: Dev guide - Storage
author: abbycar
ms.author: abigailc
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Storage features

## Indexed Database(IndexedDB)
[IndexedDB](./storage/IndexedDB.md) enables you to store structured data. Unlike cookies and DOM Storage, IndexedDB provides features that enable you to group, iterate, search, and filter JavaScript objects.

## Web Storage
[Web Storage](./storage/web-and-offline-storage.md) includes two related mechanisms for persisting client-side data in a secure manner using the Document Object Model (DOM), sessionStorage and localStorage. Web Storage is often compared to HTTP cookies. Like cookies, Web developers can store per-session or domain-specific data as name/value pairs on the client using Web Storage. However, unlike cookies, Web Storage makes it easier to control how information stored by one window is visible to another. 
