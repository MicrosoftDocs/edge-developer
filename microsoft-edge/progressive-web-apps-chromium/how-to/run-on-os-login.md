---
title: Run on OS Login
description: Learn how to automatically start your PWA when users login to the OS.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/17/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: pwa
keywords: progressive web apps, PWA, Edge, login, OS
---
# Run on OS Login

The **Run on OS Login** feature allows you to configure your app to automatically launch when the user logs into Microsoft Windows.  Several classes of apps take advantage of the capability.  The classes of apps include email, chat, monitoring dashboard, and real-time data display apps.  The capability allows a user to engage with the apps as soon as the user logs into the OS.  This feature automatically starts the PWA the same way it's launched manually.  

> [!IMPORTANT]
> **Run on OS Login** is a [powerful feature][GithubW3cPermissionsPowerfulFeature].  Users should decide whether to turn on the capability for the installed web app.  


<!-- ====================================================================== -->
## Turn on the feature for the installed web app

To turn on the `Start app when you sign in` feature for an installed PWA:

1.  Open Microsoft Edge.
1.  Navigate to `edge://apps`.
1.  Hover on your app.
1.  Open the contextual menu (right-click) and then select **Start app when you sign in**.

    :::image type="complex" source="../media/turn-on-run-on-os-login-flag.png" alt-text="Use the contextual menu to turn on the Start app when you sign in feature in Microsoft Edge" lightbox="../media/turn-on-run-on-os-login-flag.png":::
       Use the contextual menu to turn on the **Start app when you sign in** feature in Microsoft Edge
    :::image-end:::  


<!-- Links -->
[GithubW3cPermissionsPowerfulFeature]: https://w3c.github.io/permissions#powerful-feature "Powerful feature - Permissions | GitHub"  
