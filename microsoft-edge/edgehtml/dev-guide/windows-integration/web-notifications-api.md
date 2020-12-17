---
ms.assetid: 2ecc762c-11a5-4b16-9aed-22606c1d4994
description: Learn how the Web Notifications API can be used to let websites send users notifications outside the context of the Microsoft Edge browser.
title: Web Notifications API - Dev guide
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# Web Notifications API  

[!INCLUDE [deprecation-note](../../includes/legacy-edge-note.md)]  

The Web Notifications API allows websites to send users notifications outside the context of a webpage within the Microsoft Edge browser.  An example of this feature in action would be with a messaging application like Skype.  When a user would receive a new message, a notification would appear on their desktop, alerting them of the message.  Web Notifications are fully integrated with the Notification Platform and the Action Center within Windows 10.  

## Creating a notification  

The CodePen below creates a mock Skype notification by making a [Notification](https://msdn.microsoft.com/library/mt710818) object with the [title](https://msdn.microsoft.com/library/mt710826), [icon](https://msdn.microsoft.com/library/mt710814), and [body](https://msdn.microsoft.com/library/mt710811) options set:  

<iframe height='295' scrolling='no' title='Web notifications' src='//codepen.io/MicrosoftEdgeDocumentation/embed/RGbxWW/?height=295&theme-id=23761&default-tab=result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/MicrosoftEdgeDocumentation/pen/RGbxWW/'>Web notifications</a> by Microsoft Edge Docs (<a href='https://codepen.io/MicrosoftEdgeDocumentation'>@MicrosoftEdgeDocumentation</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>  

It is strongly recommended that an **icon** be specified for each notification.  This not only improves a notification from a UI point of view, but also helps alert users of where the notification is being sent from.  

Watch the video below for a walkthrough on creating a web notification and to see it's behavior within Windows 10!  

> [!VIDEO https://channel9.msdn.com/Blogs/One-Dev-Minute/Implementing-Web-Notifications/player]  

### Notification properties  

Notifications can be set with the following properties:  

:::row:::
   :::column span="1":::
      [body](https://developer.mozilla.org/docs/Web/API/Notification/body)  
   :::column-end:::
   :::column span="2":::
      The body text of the notification.  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      [dir](https://developer.mozilla.org/docs/Web/API/Notification/dir)  
   :::column-end:::
   :::column span="2":::
      The direction of the notification's text.  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      [icon](https://developer.mozilla.org/docs/Web/API/Notification/icon)  
   :::column-end:::
   :::column span="2":::
      The notification's URL that is used for its icon.  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      [lang](https://developer.mozilla.org/docs/Web/API/Notification/lang)  
   :::column-end:::
   :::column span="2":::
      The language of the notification.  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      [permission](https://developer.mozilla.org/docs/Web/API/Notification/permission)  
   :::column-end:::
   :::column span="2":::
      The current notification display permission the user has granted for the current origin.  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      [tag](https://developer.mozilla.org/docs/Web/API/Notification/tag)  
   :::column-end:::
   :::column span="2":::
      The tag of the notification.  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      [title](https://developer.mozilla.org/docs/Web/API/Notification/title)  
   :::column-end:::
   :::column span="2":::
      The title of the notification.  
   :::column-end:::
:::row-end:::  

### Notification events  

The following events are used with the [Notification](https://developer.mozilla.org/docs/Web/API/Notification) object:  

:::row:::
   :::column span="1":::
      [onclick](https://developer.mozilla.org/docs/Web/API/Element/click_event)  
   :::column-end:::
   :::column span="2":::
      Fires when a notification is clicked by the user.  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      [onclose](https://developer.mozilla.org/docs/Archive/Mozilla/XUL/Events/close_event)  
   :::column-end:::
   :::column span="2":::
      Fires when a notification is closed by the user or an auto timeout.  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      [onerror](https://developer.mozilla.org/docs/Web/API/Element/error_event)  
   :::column-end:::
   :::column span="2":::
      Fires when an error occurs while handling a notification.  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      [onshow](https://developer.mozilla.org/docs/Web/API/Element/show_event)  
   :::column-end:::
   :::column span="2":::
      Fires when a notification is displayed.  
   :::column-end:::
:::row-end:::  

### Notification methods  

The following methods are used with the [Notification](https://developer.mozilla.org/docs/Web/API/Notification) object:  

:::row:::
   :::column span="1":::
      [close](https://developer.mozilla.org/docs/Web/API/Notification/close)  
   :::column-end:::
   :::column span="2":::
      Closes a displayed notification.  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      [requestPermission](https://developer.mozilla.org/docs/Web/API/Notification/requestPermission)  
   :::column-end:::
   :::column span="2":::
      Requests permission from the user to allow notifications to be displayed by the current origin.  
   :::column-end:::
:::row-end:::  

## Notification permissions  

Microsoft Edge allows users to manage notifications permissions for each specific website domain.  It's up to the user to either select **Yes** or **No** when asked by the domain to let it show notifications.  The [requestPermission](https://developer.mozilla.org/docs/Web/API/Notification/requestPermission) method is used to signal the permission state as either `granted`, `denied`, or `default`.  A value of `default` indicates that the user hasn't made a decision, which is seen as the equivalent of `denied`.  

## API reference  

[Web Notifications](https://developer.mozilla.org/docs/Web/API/Notifications_API)  

## Specification  

[Web Notifications](https://notifications.spec.whatwg.org)  
