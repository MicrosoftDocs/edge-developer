---
ms.assetid: 2ecc762c-11a5-4b16-9aed-22606c1d4994
description: Learn how the Web Notifications API can be used to let websites send users notifications outside the context of the Microsoft Edge browser.
title: Dev guide - Web Notifications API
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/18/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Web Notifications API

The Web Notifications API allows websites to send users notifications outside the context of a webpage within the Microsoft Edge browser. An example of this feature in action would be with a messaging application like Skype. When a user would receive a new message, a notification would appear on their desktop, alerting them of the message. Web Notifications are fully integrated with the Notification Platform and the Action Center within Windows 10. 

## Creating a notification

The CodePen below creates a mock Skype notification by making a [`Notification`](https://msdn.microsoft.com/library/mt710818) object with the [`title`](https://msdn.microsoft.com/library/mt710826), [`icon`](https://msdn.microsoft.com/library/mt710814), and [`body`](https://msdn.microsoft.com/library/mt710811) options set:


<iframe height='295' scrolling='no' title='Web notifications' src='//codepen.io/MicrosoftEdgeDocumentation/embed/RGbxWW/?height=295&theme-id=23761&default-tab=result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/MicrosoftEdgeDocumentation/pen/RGbxWW/'>Web notifications</a> by Microsoft Edge Docs (<a href='https://codepen.io/MicrosoftEdgeDocumentation'>@MicrosoftEdgeDocumentation</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

It is strongly recommended that an `icon` be specified for each notification. This not only improves a notification from a UI point of view, but also helps alert users of where the notification is being sent from.

Watch the video below for a walkthrough on creating a web notification and to see it's behavior within Windows 10!


> [!VIDEO https://channel9.msdn.com/Blogs/One-Dev-Minute/Implementing-Web-Notifications/player]

### Notification properties

Notifications can be set with the following options:

Property | Description
:-------- | :----------
[body](https://msdn.microsoft.com/library/mt710811) | The body text of the notification.
[dir](https://msdn.microsoft.com/library/mt710813) | The direction of the notification's text.
[icon](https://msdn.microsoft.com/library/mt710814) | The notification's URL that is used for its icon.
[lang](https://msdn.microsoft.com/library/mt710815) | The language of the notification.
[permission](https://msdn.microsoft.com/library/mt670637) | The current notification display permission the user has granted for the current origin.
[tag](https://msdn.microsoft.com/library/mt710825) | The tag of the notification.
[title](https://msdn.microsoft.com/library/mt710826) | The title of the notification.

### Notification events

The following events are used with the [`Notification`](https://msdn.microsoft.com/library/mt710818) object:

Event | Description
:-------- | :----------
[onclick](https://msdn.microsoft.com/library/mt712180) | Fires when a notification is clicked by the user.
[onclose](https://msdn.microsoft.com/library/mt712178) | Fires when a notification is closed by the user or an auto timeout.
[onerror](https://msdn.microsoft.com/library/mt712181) | Fires when an error occurs while handling a notification.
[onshow](https://msdn.microsoft.com/library/mt712182) | Fires when a notification is displayed.

### Notification methods

The following methods are used with the [`Notification`](https://msdn.microsoft.com/library/mt710818) object:

Method | Description
:-------- | :----------
[close](https://msdn.microsoft.com/library/mt670636) | Closes a displayed notification.
[requestPermission](https://msdn.microsoft.com/library/mt710824) | Requests permission from the user to allow notifications to be displayed by the current origin.

## Notification permissions

Microsoft Edge allows users to manage notifications permissions for each specific website domain. It's up to the user to either select "Yes" or "No" when asked by the domain to let it show notifications. The [`requestPermission`](https://msdn.microsoft.com/library/mt710824) method is used to signal the permission state as either `granted`, `denied`, or `default`. A value of `default` indicates that the user hasn't made a decision, which is seen as the equivalent of `denied`.




## API reference

[Web Notifications](https://msdn.microsoft.com/library/mt710827)

## Specification

[Web Notifications](https://notifications.spec.whatwg.org)
